import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();

    if (!plan) {
      return NextResponse.json(
        { error: 'Plan is required' },
        { status: 400 }
      );
    }

    if (plan !== 'professional') {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    const planConfig = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS];

    if (!planConfig.priceId) {
      return NextResponse.json(
        { error: 'Stripe price ID not configured.' },
        { status: 500 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    console.log('Creating Stripe Checkout session with:', {
      priceId: planConfig.priceId,
      plan,
      baseUrl,
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: planConfig.priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      metadata: {
        plan,
      },
      subscription_data: {
        metadata: {
          plan,
        },
      },
    });

    console.log('Checkout session created:', session.id);

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
    console.error('Error details:', errorMessage);

    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
