import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    console.log('Verifying checkout session:', sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'subscription'],
    });

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;
    console.log('Payment succeeded, customer:', customerId);

    let retries = 0;
    const maxRetries = 10;
    let subscription = null;

    while (retries < maxRetries && !subscription) {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('discord_invite_url, email, id')
        .eq('stripe_customer_id', customerId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
      }

      if (data) {
        subscription = data;
        console.log('Found subscription:', subscription.id);
        break;
      }

      retries++;
      console.log(`Subscription not found, retry ${retries}/${maxRetries}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    if (!subscription) {
      return NextResponse.json(
        { error: 'Subscription not found. Please contact support.' },
        { status: 404 }
      );
    }

    let discordInvite = subscription.discord_invite_url;

    if (!discordInvite) {
      console.log('Generating Discord invite...');
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      const inviteResponse = await fetch(
        `${supabaseUrl}/functions/v1/generate-discord-invite`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: subscription.email,
          }),
        }
      );

      if (inviteResponse.ok) {
        const inviteData = await inviteResponse.json();
        discordInvite = inviteData.inviteUrl;
        console.log('Generated Discord invite:', discordInvite);

        await supabase
          .from('subscriptions')
          .update({ discord_invite_url: discordInvite })
          .eq('id', subscription.id);
      } else {
        const errorText = await inviteResponse.text();
        console.error('Failed to generate Discord invite:', errorText);
        discordInvite = process.env.DISCORD_INVITE_URL || 'https://discord.gg/your-invite-link';
      }
    } else {
      console.log('Using existing Discord invite:', discordInvite);
    }

    return NextResponse.json({
      success: true,
      discordInvite,
      plan: session.metadata?.plan,
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
