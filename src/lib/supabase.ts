
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = 'https://jicskclkfbvophlfjukn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppY3NrY2xrZmJ2b3BobGZqdWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTE5NjEsImV4cCI6MjA2MDg2Nzk2MX0.vqaV8m7_jNFVWxp7GLZFQjLxRdwgGXYAFlLx-dS9H0c';

if (!supabaseKey) {
  throw new Error('Missing Supabase anon key');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
