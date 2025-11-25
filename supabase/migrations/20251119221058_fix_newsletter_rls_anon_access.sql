/*
  # Fix Newsletter RLS for Anonymous Access

  1. Changes
    - Drop existing INSERT policy
    - Create new policy that explicitly targets both 'anon' and 'authenticated' roles
    - This ensures anonymous users can subscribe without authentication
  
  2. Security
    - Anonymous and authenticated users can INSERT (subscribe)
    - Only authenticated users can SELECT/UPDATE subscriptions
*/

DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON newsletter_subscriptions;

CREATE POLICY "Anyone can insert newsletter subscription"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);