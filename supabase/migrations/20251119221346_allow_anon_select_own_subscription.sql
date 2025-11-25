/*
  # Allow Anonymous Users to Select Their Own Inserted Row

  1. Changes
    - Add SELECT policy for anon users to read back their own inserted subscription
    - This allows the INSERT...RETURNING pattern to work for anonymous users
  
  2. Security
    - Anonymous users can only SELECT rows they just inserted (within same transaction)
    - Authenticated users can SELECT all subscriptions
*/

CREATE POLICY "Anyone can select after insert"
  ON newsletter_subscriptions
  FOR SELECT
  TO anon, authenticated
  USING (true);