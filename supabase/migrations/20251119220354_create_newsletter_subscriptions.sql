/*
  # Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique) - Subscriber email address
      - `status` (text) - Subscription status (active, unsubscribed)
      - `subscribed_at` (timestamptz) - When the subscription was created
      - `unsubscribed_at` (timestamptz, nullable) - When the user unsubscribed
      - `source` (text) - Where the subscription came from (footer, popup, etc)
      - `ip_address` (text, nullable) - IP address for security/analytics
      - `user_agent` (text, nullable) - User agent for security/analytics
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for public to insert their own subscription
    - Add policy for authenticated users to view all subscriptions (admin access)
    
  3. Indexes
    - Index on email for fast lookups
    - Index on status for filtering active subscriptions
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'active',
  subscribed_at timestamptz NOT NULL DEFAULT now(),
  unsubscribed_at timestamptz,
  source text DEFAULT 'footer',
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('active', 'unsubscribed'))
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscriptions(subscribed_at DESC);