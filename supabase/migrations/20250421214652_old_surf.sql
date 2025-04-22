/*
  # Initial Schema Setup

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `read` (boolean)
    
    - `email_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `subscribed` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage messages
    - Add policies for public email subscription
*/

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Create email subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  subscribed boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for contact_messages
CREATE POLICY "Allow authenticated users to read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow public to insert messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for email_subscribers
CREATE POLICY "Allow public to subscribe"
  ON email_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to manage subscribers"
  ON email_subscribers
  FOR ALL
  TO authenticated
  USING (true);