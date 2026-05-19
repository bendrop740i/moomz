"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let _browser: SupabaseClient | null = null;

export function getBrowserSupabase(): SupabaseClient {
  if (_browser) return _browser;
  _browser = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      realtime: { params: { eventsPerSecond: 10 } },
    },
  );
  return _browser;
}
