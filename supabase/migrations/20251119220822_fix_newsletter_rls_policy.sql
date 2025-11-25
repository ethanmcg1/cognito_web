/*
  # Fix Newsletter Subscriptions RLS Policy

  1. Changes
    - Drop the existing restrictive INSERT policy
    - Create a new policy that allows anyone (including anonymous users) to insert
    - This is safe because we're only allowing INSERT, not SELECT/UPDATE/DELETE without auth
  
  2. Security
    - Anonymous users can only subscribe (INSERT)
    - Only authenticated users can view/update subscriptions
*/

DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscriptions;

CREATE POLICY "Public can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  WITH CHECK (true);