import { cookies } from "next/headers";
import DailyCard from "../daily-card";
import { getSupabase } from "@/lib/supabase";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type DailyPoll = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

// The Daily Moomz is a single global pick (`pick_daily_moomz()` runs DB-side).
// The selected UI locale should drive content, so we only surface the daily
// poll when it matches the visitor's locale. If it doesn't (or there's no
// daily today), we fall back to the top trending poll for that locale so the
// home hero always shows locale-relevant content.
async function getDailyMoomz(locale: Locale): Promise<DailyPoll | null> {
  try {
    const supabase = getSupabase();
    const today = new Date().toISOString().slice(0, 10);
    const { data: daily } = await supabase
      .from("daily_moomz")
      .select("poll_id")
      .eq("date", today)
      .maybeSingle();

    if (daily) {
      const { data: poll } = await supabase
        .from("polls_with_stats")
        .select("id,slug,question,options,vote_count,lang")
        .eq("id", daily.poll_id)
        .maybeSingle();
      if (poll && (poll as { lang?: string | null }).lang === locale) {
        return poll as DailyPoll;
      }
    }

    // Fallback: top trending poll for the visitor's locale.
    const { data: top } = await supabase
      .from("polls_trending")
      .select("id,slug,question,options,vote_count")
      .eq("lang", locale)
      .order("trending_score", { ascending: false })
      .limit(1)
      .maybeSingle();
    return (top as DailyPoll | null) ?? null;
  } catch {
    return null;
  }
}

export default async function DailyCardSection() {
  const locale = getLocale();
  const daily = await getDailyMoomz(locale);
  if (!daily) return null;
  // The per-slug cookie stores the chosen option index — lets the card render
  // the result bars on first paint when the visitor already voted.
  const votedRaw = cookies().get(`moomz_voted_${daily.slug}`)?.value;
  const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
  return (
    <DailyCard
      pollId={daily.id}
      slug={daily.slug}
      question={daily.question}
      options={daily.options ?? []}
      voteCount={daily.vote_count}
      alreadyVoted={Number.isFinite(alreadyVoted as number) ? alreadyVoted : null}
    />
  );
}
