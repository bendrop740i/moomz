import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

async function resolveProfileId(): Promise<string | null> {
  const ssr = getServerSupabase();
  const supabase = getSupabase();
  const { data: auth } = await ssr.auth.getUser();
  if (auth.user) {
    const { data } = await supabase
      .from("profiles")
      .select("id")
      .eq("user_id", auth.user.id)
      .maybeSingle<{ id: string }>();
    if (data) return data.id;
  }
  const token = cookies().get("moomz_profile_token")?.value;
  if (!token) return null;
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("claim_token", token)
    .maybeSingle<{ id: string }>();
  return data?.id ?? null;
}

export async function GET() {
  try {
    const profileId = await resolveProfileId();
    if (!profileId) return NextResponse.json({ count: 0 });
    const supabase = getSupabase();
    const { count } = await supabase
      .from("ask_questions_public")
      .select("id", { count: "exact", head: true })
      .eq("recipient_id", profileId)
      .eq("status", "pending");
    return NextResponse.json({ count: count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
