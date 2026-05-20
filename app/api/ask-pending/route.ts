import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

async function resolveProfileId(): Promise<string | null> {
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const token = cookies().get("moomz_profile_token")?.value ?? null;
  if (!auth.user && !token) return null;
  const { data: id } = await getSupabase().rpc("resolve_profile_id", {
    p_user_id: auth.user?.id ?? null,
    p_claim_token: token,
  });
  return (id as string | null) ?? null;
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
