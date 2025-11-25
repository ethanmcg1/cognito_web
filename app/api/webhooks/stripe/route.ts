import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabase';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', paymentIntent.id);

        const customerId = paymentIntent.customer as string;
        const metadata = paymentIntent.metadata;

        if (metadata.priceId && customerId) {
          const subscription = await stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: metadata.priceId }],
            metadata: {
              plan: metadata.plan,
              email: metadata.email,
            },
          }) as any;

          console.log('Subscription created:', subscription.id);

          const periodStart = subscription.current_period_start as number;
          const periodEnd = subscription.current_period_end as number;

          const { error } = await supabase
            .from('subscriptions')
            .insert({
              stripe_subscription_id: subscription.id,
              stripe_customer_id: customerId,
              stripe_price_id: metadata.priceId,
              email: metadata.email,
              plan: metadata.plan || 'professional',
              status: subscription.status,
              current_period_start: new Date(periodStart * 1000).toISOString(),
              current_period_end: new Date(periodEnd * 1000).toISOString(),
            });

          if (error) {
            console.error('Error saving subscription:', error);
          }
        }
        break;
      }

      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.mode === 'subscription' && session.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            session.subscription as string,
            { expand: ['latest_invoice'] }
          ) as any;

          const periodStart = sub.current_period_start as number;
          const periodEnd = sub.current_period_end as number;

          const { data: existingSub } = await supabase
            .from('subscriptions')
            .select('id')
            .eq('stripe_customer_id', session.customer as string)
            .maybeSingle();

          if (existingSub) {
            await supabase
              .from('subscriptions')
              .update({
                stripe_subscription_id: sub.id,
                stripe_price_id: sub.items.data[0].price.id,
                status: sub.status,
                current_period_start: new Date(periodStart * 1000).toISOString(),
                current_period_end: new Date(periodEnd * 1000).toISOString(),
                plan: session.metadata?.plan || 'professional',
                updated_at: new Date().toISOString(),
              })
              .eq('id', existingSub.id);
          } else {
            await supabase
              .from('subscriptions')
              .insert({
                stripe_customer_id: session.customer as string,
                stripe_subscription_id: sub.id,
                stripe_price_id: sub.items.data[0].price.id,
                email: session.customer_email || session.customer_details?.email || '',
                status: sub.status,
                current_period_start: new Date(periodStart * 1000).toISOString(),
                current_period_end: new Date(periodEnd * 1000).toISOString(),
                plan: session.metadata?.plan || 'professional',
              });
          }
        }
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;

        const subPeriodStart = subscription.current_period_start as number;
        const subPeriodEnd = subscription.current_period_end as number;

        await supabase
          .from('subscriptions')
          .update({
            status: subscription.status,
            current_period_start: new Date(subPeriodStart * 1000).toISOString(),
            current_period_end: new Date(subPeriodEnd * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
