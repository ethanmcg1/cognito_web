/*
  # Add Stripe fields to subscriptions table

  1. Changes
    - Add `stripe_customer_id` (text) - Stripe customer ID
    - Add `stripe_subscription_id` (text) - Stripe subscription ID
    - Add `stripe_price_id` (text) - Stripe price ID for the plan
    - Add `discord_invite_sent` (boolean) - Track if Discord invite was sent
    - Add indexes for Stripe IDs for faster lookups

  2. Notes
    - These fields link our database to Stripe's subscription system
    - Allows us to track payment status and provide Discord access
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscriptions' AND column_name = 'stripe_customer_id'
  ) THEN
    ALTER TABLE subscriptions ADD COLUMN stripe_customer_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscriptions' AND column_name = 'stripe_subscription_id'
  ) THEN
    ALTER TABLE subscriptions ADD COLUMN stripe_subscription_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscriptions' AND column_name = 'stripe_price_id'
  ) THEN
    ALTER TABLE subscriptions ADD COLUMN stripe_price_id text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscriptions' AND column_name = 'discord_invite_sent'
  ) THEN
    ALTER TABLE subscriptions ADD COLUMN discord_invite_sent boolean DEFAULT false;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer 
  ON subscriptions(stripe_customer_id);

CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_subscription 
  ON subscriptions(stripe_subscription_id);
