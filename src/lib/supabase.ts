import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
export const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID || ''

if (!supabaseUrl || !supabaseAnonKey) {
    // Note: If this warning appears in Netlify logs, ensure variables are defined in the dashboard.
    console.warn('Supabase credentials missing. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
