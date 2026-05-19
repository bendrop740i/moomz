// Client posts the browser PushSubscription here after the user grants
// permission. We store one row per (endpoint), upsert on conflict.

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type IncomingSub = {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  lang?: string;
};

export async function POST(req: Request) {
  let payload: IncomingSub;
  try {
    payload = (await req.json()) as IncomingSub;
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }
  if (!payload?.endpoint || !payload?.keys?.p256dh || !payload?.keys?.auth) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  // Identify the subscriber: auth user_id first, fall back to claim_token cookie.
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const userId = auth.user?.id ?? null;
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;

  if (!userId && !claimToken) {
    // Anonymous device without any cookie — still accept, but we won't know
    // who to ping. (Daily Moomz fan-out still reaches them.)
  }

  const supabase = getSupabase();
  const { error } = await supabase.from("push_subscriptions").upsert(
    {
      user_id: userId,
      claim_token: claimToken,
      endpoint: payload.endpoint,
      p256dh: payload.keys.p256dh,
      auth: payload.keys.auth,
      lang: payload.lang ?? null,
      ua: req.headers.get("user-agent") ?? null,
      disabled: false,
      last_seen: new Date().toISOString(),
    },
    { onConflict: "endpoint" },
  );

  if (error) {
    return NextResponse.json({ error: "db_error", detail: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { endpoint } = (await req.json().catch(() => ({}))) as { endpoint?: string };
  if (!endpoint) return NextResponse.json({ error: "missing_endpoint" }, { status: 400 });
  const supabase = getSupabase();
  await supabase.from("push_subscriptions").delete().eq("endpoint", endpoint);
  return NextResponse.json({ ok: true });
}
