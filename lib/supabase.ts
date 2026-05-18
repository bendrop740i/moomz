import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel → Project → Settings → Environment Variables (Production), then redeploy.",
    );
  }
  _client = createClient(url, anon, { auth: { persistSession: false } });
  return _client;
}

export type Poll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
};
