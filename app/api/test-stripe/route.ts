import { NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe';

export async function GET() {
  try {
    const planConfig = STRIPE_PLANS.professional;

    const price = await stripe.prices.retrieve(planConfig.priceId);

    return NextResponse.json({
      success: true,
      price: {
        id: price.id,
        active: price.active,
        currency: price.currency,
        unit_amount: price.unit_amount,
        type: price.type,
      },
    });
  } catch (error) {
    console.error('Stripe test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        priceId: STRIPE_PLANS.professional.priceId,
        keyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 15),
      },
      { status: 500 }
    );
  }
}
