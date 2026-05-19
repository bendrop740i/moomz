import DailyCard from "../daily-card";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";

async function getDailyMoomz() {
  try {
    const supabase = getSupabase();
    const today = new Date().toISOString().slice(0, 10);
    const { data: daily } = await supabase
      .from("daily_moomz")
      .select("poll_id")
      .eq("date", today)
      .maybeSingle();
    if (!daily) return null;
    const { data: poll } = await supabase
      .from("polls_with_stats")
      .select("slug,question,vote_count")
      .eq("id", daily.poll_id)
      .maybeSingle();
    return poll as { slug: string; question: string; vote_count: number } | null;
  } catch {
    return null;
  }
}

export default async function DailyCardSection() {
  const daily = await getDailyMoomz();
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
