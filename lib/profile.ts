import { cookies } from "next/headers";
import { getSupabase } from "./supabase";

export type Profile = {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  socials: Record<string, string>;
  avatar_emoji: string;
  created_at: string;
};

export type PrivateProfile = Profile & { claim_token: string };

export async function getMyProfile(): Promise<PrivateProfile | null> {
  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) return null;
  const supabase = getSupabase();
  const { data } = await supabase
    .from("profiles")
    .select("id,username,display_name,bio,socials,avatar_emoji,claim_token,created_at")
    .eq("claim_token", token)
    .maybeSingle();
  return (data as PrivateProfile | null) ?? null;
}

export async function getProfileByUsername(username: string): Promise<Profile | null> {
  const supabase = getSupabase();
  const { data } = await supabase
    .from("profiles_public")
    .select("id,username,display_name,bio,socials,avatar_emoji,created_at")
    .eq("username", username.toLowerCase())
    .maybeSingle();
  return (data as Profile | null) ?? null;
}
