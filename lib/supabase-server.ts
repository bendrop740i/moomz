import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

export function getServerSupabase(): SupabaseClient {
  const jar = cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error(
      "Missing Supabase env vars (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY).",
    );
  }
  return createServerClient(url, anon, {
    cookies: {
      get(name: string) {
        return jar.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          jar.set({ name, value, ...options });
        } catch {
          // RSC render context — Next blocks set(). Auth callback / server actions can mutate.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          jar.set({ name, value: "", ...options, maxAge: 0 });
        } catch {
          // Same as set(): swallow if outside a mutation context.
        }
      },
    },
  });
}

export async function getSessionUserId(): Promise<string | null> {
  const supabase = getServerSupabase();
  const { data } = await supabase.auth.getUser();
  return data.user?.id ?? null;
}
