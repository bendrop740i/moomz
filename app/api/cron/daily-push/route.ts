// Vercel Cron — once a day, fan out a "Daily Moomz" push to every active
// subscription. Scheduled in vercel.json. Auth via Vercel's automatic
// `x-vercel-cron` header, with CRON_SECRET as a manual override.

import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { sendPushToAll } from "@/lib/push";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 300;

function authorized(req: Request): boolean {
  if (req.headers.get("x-vercel-cron")) return true;
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") === `Bearer ${secret}`) return true;
  return false;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Pick today's Daily Moomz from the daily_moomz table.
  const supabase = getSupabase();
  const today = new Date().toISOString().slice(0, 10);
  const { data: daily } = await supabase
    .from("daily_moomz")
    .select("poll_id")
    .eq("date", today)
    .maybeSingle();

  if (!daily?.poll_id) {
    return NextResponse.json({ ok: true, skipped: "no_daily_today" });
  }

  const { data: poll } = await supabase
    .from("polls")
    .select("slug,question")
    .eq("id", daily.poll_id)
    .maybeSingle<{ slug: string; question: string }>();

  if (!poll) {
    return NextResponse.json({ ok: true, skipped: "poll_not_found" });
  }

  const result = await sendPushToAll({
    title: "🔥 Daily Moomz",
    body: poll.question,
    url: `/${poll.slug}`,
    tag: "daily-moomz",
  });

  return NextResponse.json({ ok: true, ...result, slug: poll.slug });
}
