import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/me";

  if (!code) {
    return NextResponse.redirect(`${origin}/login?err=missing_code`);
  }

  const supabase = getServerSupabase();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    return NextResponse.redirect(`${origin}/login?err=exchange_failed`);
  }

  const legacyToken = cookies().get("moomz_profile_token")?.value;
  if (legacyToken) {
    await supabase.rpc("link_profile_to_user", {
      p_token: legacyToken,
      p_user_id: data.user.id,
    });
  }

  return NextResponse.redirect(`${origin}${next}`);
}
