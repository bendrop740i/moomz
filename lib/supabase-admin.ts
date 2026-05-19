// Admin Supabase client for server-side jobs (cron, etc).
// Prefers SUPABASE_SERVICE_ROLE_KEY (bypasses RLS, required for inserts that
// touch protected columns). Falls back to anon — works only if RLS allows.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getAdminSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const key = service ?? anon;
  if (!url || !key) {
    throw new Error(
      "Missing Supabase env vars. Need NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (or anon as fallback).",
    );
  }
  _client = createClient(url, key, { auth: { persistSession: false } });
  return _client;
}
