import { NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';

export async function GET() {
  try {
    const priceId = STRIPE_PLANS.professional.priceId;

    if (!priceId) {
      return NextResponse.json({
        error: 'Price ID not configured',
        priceId: null,
      }, { status: 500 });
    }

    const price = await stripe.prices.retrieve(priceId);

    return NextResponse.json({
      success: true,
      priceId,
      price: {
        id: price.id,
        active: price.active,
        currency: price.currency,
        unit_amount: price.unit_amount,
        type: price.type,
      },
    });
  } catch (error) {
    console.error('Stripe config test error:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error,
    }, { status: 500 });
  }
}
