import { createClient } from '@supabase/supabase-js';
import config from '../../supabaseConfig.json' assert { type: 'json' };

const supabaseUrl = config.VITE_SUPABASE_URL;
const supabaseAnonKey = config.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
