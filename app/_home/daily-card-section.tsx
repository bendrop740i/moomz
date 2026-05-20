import DailyCard from "../daily-card";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type DailyPoll = { slug: string; question: string; vote_count: number };

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
        .select("slug,question,vote_count,lang")
        .eq("id", daily.poll_id)
        .maybeSingle();
      if (poll && (poll as { lang?: string | null }).lang === locale) {
        return poll as DailyPoll;
      }
    }

    // Fallback: top trending poll for the visitor's locale.
    const { data: top } = await supabase
      .from("polls_trending")
      .select("slug,question,vote_count")
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
  const votedSet = new Set(readSlugHistory("moomz_voted_slugs"));
  const dailyVoted = votedSet.has(daily.slug);
  return (
    <DailyCard
      slug={daily.slug}
      question={daily.question}
      voteCount={daily.vote_count}
      alreadyVoted={dailyVoted}
    />
  );
}
