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
};

export type PrivateProfile = Profile & {
  claim_token: string | null;
  user_id: string | null;
};

const PROFILE_COLS =
  "id,username,display_name,bio,socials,avatar_emoji,claim_token,user_id,created_at,total_points,top_streak";

export async function getMyProfile(): Promise<PrivateProfile | null> {
  const supabase = getServerSupabase();

  const { data: auth } = await supabase.auth.getUser();
  if (auth.user) {
    const { data } = await supabase
      .from("profiles")
      .select(PROFILE_COLS)
      .eq("user_id", auth.user.id)
      .maybeSingle();
    if (data) return data as PrivateProfile;
  }

  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) return null;
  const anon = getSupabase();
  const { data } = await anon
    .from("profiles")
    .select(PROFILE_COLS)
    .eq("claim_token", token)
    .maybeSingle();
  return (data as PrivateProfile | null) ?? null;
}

export async function getProfileByUsername(username: string): Promise<Profile | null> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from("profiles_public")
    .select("id,username,display_name,bio,socials,avatar_emoji,created_at,is_bot")
    .eq("username", username.toLowerCase())
    .maybeSingle();
  return (data as Profile | null) ?? null;
}
