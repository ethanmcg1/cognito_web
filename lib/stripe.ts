import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder';

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2025-11-17.clover',
});

export const STRIPE_PLANS = {
  professional: {
    name: 'Professional',
    priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID || '',
    price: 20,
    currency: 'gbp',
  },
  enterprise: {
    name: 'Enterprise',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || '',
    price: 0,
    currency: 'gbp',
    contact: true,
  },
} as const;
