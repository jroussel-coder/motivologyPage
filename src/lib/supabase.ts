
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = 'https://jicskclkfbvophlfjukn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppY3NrY2xrZmJ2b3BobGZqdWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzIxNDEsImV4cCI6MjAyNTA0ODIxNDF9.HnY_d_lRlYDOIQ9pCMHX8_0DsVXDzB9g0HmwBtKozE8';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
