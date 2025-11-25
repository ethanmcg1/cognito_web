/*
  # Create subscriptions table

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `plan` (text) - plan type: starter, professional, enterprise
      - `status` (text) - subscription status: active, cancelled, expired
      - `current_period_start` (timestamptz) - start of current billing period
      - `current_period_end` (timestamptz) - end of current billing period
      - `cancel_at_period_end` (boolean) - whether subscription will cancel at period end
      - `created_at` (timestamptz) - when subscription was created
      - `updated_at` (timestamptz) - when subscription was last updated

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policy for users to read their own subscription
    - Add policy for users to update their own subscription
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  plan text NOT NULL DEFAULT 'starter',
  status text NOT NULL DEFAULT 'active',
  current_period_start timestamptz DEFAULT now(),
  current_period_end timestamptz DEFAULT now() + interval '1 month',
  cancel_at_period_end boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscription"
  ON subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
