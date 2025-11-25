/*
  # Create contact enquiries table

  1. New Tables
    - `contact_enquiries`
      - `id` (uuid, primary key) - Unique identifier for each enquiry
      - `name` (text) - Name of the person enquiring
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `created_at` (timestamptz) - Timestamp of when enquiry was submitted
      - `status` (text) - Status of enquiry (new, contacted, closed)
  
  2. Security
    - Enable RLS on `contact_enquiries` table
    - Add policy for anonymous users to insert their own enquiries
    - Add policy for authenticated admins to view all enquiries
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON contact_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all enquiries"
  ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);