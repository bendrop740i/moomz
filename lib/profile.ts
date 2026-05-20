import { cookies } from "next/headers";
import { getSupabase } from "./supabase";
import { getServerSupabase } from "./supabase-server";

export type Profile = {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  socials: Record<string, string>;
  avatar_emoji: string;
  created_at: string;
  total_points?: number | null;
  top_streak?: number | null;
  is_bot?: boolean | null;
  // Optional new columns added by a parallel migration. Code must tolerate
  // their absence with `?.` — the SELECT will simply return undefined until
  // the migration runs and the view is refreshed to expose them.
  avatar_url?: string | null;
  cosmetic_id?: string | null;
  cosmetics_owned?: string[] | null;
};

export type PrivateProfile = Profile & {
  user_id: string | null;
};

const PROFILE_COLS_BASE =
  "id,username,display_name,bio,socials,avatar_emoji,user_id,created_at,total_points,top_streak";
const PROFILE_COLS_EXTENDED = `${PROFILE_COLS_BASE},avatar_url,cosmetic_id,cosmetics_owned`;

// Best-effort SELECT that tries to read the new avatar_url / cosmetic_id
// columns and silently falls back to the legacy list if the columns don't
// exist yet (migration window). Returns `data` (which may be null).
async function selectProfile<T>(
  query: (cols: string) => PromiseLike<{ data: T | null; error: { message?: string } | null }>,
): Promise<T | null> {
  const ext = await query(PROFILE_COLS_EXTENDED);
  if (!ext.error) return ext.data;
  const base = await query(PROFILE_COLS_BASE);
  return base.data;
}

export async function getMyProfile(): Promise<PrivateProfile | null> {
  const supabase = getServerSupabase();

  const { data: auth } = await supabase.auth.getUser();
  if (auth.user) {
    const row = await selectProfile<PrivateProfile>((cols) =>
      supabase
        .from("profiles")
        .select(cols)
        .eq("user_id", auth.user!.id)
        .maybeSingle(),
    );
    if (row) return row;
  }

  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) return null;
  const anon = getSupabase();
  // Resolve the claim_token to an id via the SECURITY DEFINER RPC — the anon
  // client must not read the secret claim_token column directly.
  const { data: id } = await anon.rpc("resolve_profile_id", {
    p_user_id: null,
    p_claim_token: token,
  });
  if (!id) return null;
  return await selectProfile<PrivateProfile>((cols) =>
    anon
      .from("profiles")
      .select(cols)
      .eq("id", id as string)
      .maybeSingle(),
  );
}

export async function getProfileByUsername(username: string): Promise<Profile | null> {
  const supabase = getSupabase();
  // Try the extended SELECT first (includes the new avatar_url / cosmetic_id
  // columns added by a parallel migration). If the view doesn't expose them
  // yet, fall back to the historical column list so we don't break the
  // profile page during the migration window.
  const extended = await supabase
    .from("profiles_public")
    .select("id,username,display_name,bio,socials,avatar_emoji,created_at,is_bot,avatar_url,cosmetic_id")
    .eq("username", username.toLowerCase())
    .maybeSingle();
  if (!extended.error) {
    return (extended.data as Profile | null) ?? null;
  }
  const fallback = await supabase
    .from("profiles_public")
    .select("id,username,display_name,bio,socials,avatar_emoji,created_at,is_bot")
    .eq("username", username.toLowerCase())
    .maybeSingle();
  return (fallback.data as Profile | null) ?? null;
}
