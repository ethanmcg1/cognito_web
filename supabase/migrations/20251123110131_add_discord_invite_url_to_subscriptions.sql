/*
  # Add Discord Invite URL to Subscriptions

  1. Changes
    - Add `discord_invite_url` column to `subscriptions` table
    - This stores the one-time Discord invite link generated for each subscriber
    - Once generated, the same link is returned for that subscriber
    
  2. Security
    - Column is text type and nullable
    - No RLS changes needed as existing policies cover this column
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'subscriptions' AND column_name = 'discord_invite_url'
  ) THEN
    ALTER TABLE subscriptions ADD COLUMN discord_invite_url text;
  END IF;
END $$;
