// Vercel Cron — once a day (vercel.json: 18:00 UTC), fan out a "Daily Moomz"
// push to every active subscription. This is moomz's core retention loop: one
// daily reason to come back.

import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendPushToAll } from "@/lib/push";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 300;

// Vercel Cron sends `x-vercel-cron` automatically; when CRON_SECRET is set it
// also sends `Authorization: Bearer <secret>`. Require the secret when it's
// configured — the `x-vercel-cron` header alone is spoofable.
function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (secret) return req.headers.get("authorization") === `Bearer ${secret}`;
  return !!req.headers.get("x-vercel-cron");
}

type PollLite = { slug: string; question: string };

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const supabase = getSupabase();

  // Today's Daily Moomz — with a trending fallback so the daily ping always
  // goes out. A retention ritual that silently skips some days is worthless.
  let poll: PollLite | null = null;
  const today = new Date().toISOString().slice(0, 10);
  const { data: daily } = await supabase
    .from("daily_moomz")
    .select("poll_id")
    .eq("date", today)
    .maybeSingle();

  if (daily?.poll_id) {
    const { data } = await supabase
      .from("polls")
      .select("slug,question")
      .eq("id", daily.poll_id)
      .maybeSingle<PollLite>();
    poll = data ?? null;
  }

  if (!poll) {
    const { data } = await supabase
      .from("polls_trending")
      .select("slug,question")
      .order("trending_score", { ascending: false })
      .limit(1)
      .maybeSingle<PollLite>();
    poll = data ?? null;
  }

  if (!poll) {
    return NextResponse.json({ ok: true, skipped: "no_poll" });
  }

  const result = await sendPushToAll({
    title: "🔥 Daily Moomz",
    body: poll.question,
    url: `/${poll.slug}`,
    tag: "daily-moomz",
  });

  return NextResponse.json({ ok: true, ...result, slug: poll.slug });
}
