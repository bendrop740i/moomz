import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import RelatedPollsGrid, { type RelatedPollRow } from "./related-polls-grid";
import TopicPills from "./topic-pills";

type SimilarRow = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  is_seed: boolean | null;
  topics: string[] | null;
  last_vote_at: string | null;
  created_at: string;
};

type TrendingRow = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

// 8 evergreen hub pills shown at the foot of every poll page. Equal weight,
// glass styling — these are top-of-funnel internal anchors for Googlebot.
const EXPLORE_PILLS = [
  { href: "/idees", label: "Idées de sondage", emoji: "💡" },
  { href: "/ideas", label: "Poll ideas", emoji: "✨" },
  { href: "/guides", label: "Guides", emoji: "📘" },
  { href: "/blog", label: "Blog", emoji: "📰" },
  { href: "/read", label: "Read", emoji: "📖" },
  { href: "/discover", label: "Discover", emoji: "🔥" },
  { href: "/music", label: "Music", emoji: "🎧" },
  { href: "/mot", label: "Mots-clés", emoji: "🏷️" },
];

// Builds /?q=...&o=... so the CTA pre-fills the home create-form with this
// poll's question + options (the create-form already parses these params).
function forkUrl(question: string, options: string[]): string {
  const q = encodeURIComponent(question);
  const o = options.map((s) => encodeURIComponent(s)).join("|");
  return `/?q=${q}&o=${o}`;
}

async function fetchSimilar(
  supabase: ReturnType<typeof getSupabase>,
  pollId: string,
  topics: string[],
): Promise<RelatedPollRow[]> {
  if (topics.length === 0) return [];
  // `polls_with_stats` exposes `topics` (text[]). The `overlaps` operator
  // checks array intersection: any of these poll's topics overlaps with
  // candidates' topics. Server-side filter for seed-with-no-votes happens
  // post-fetch because mixing OR + AND on Supabase JS is awkward.
  const { data } = await supabase
    .from("polls_with_stats")
    .select("slug,question,options,vote_count,is_seed,topics,last_vote_at,created_at")
    .overlaps("topics", topics)
    .neq("id", pollId)
    .order("vote_count", { ascending: false })
    .limit(24);
  const rows = (data as SimilarRow[] | null) ?? [];
  // Drop seed polls with zero votes (dead weight for SEO + UX).
  const filtered = rows.filter((r) => !(r.is_seed && r.vote_count === 0));
  // Recency tiebreaker: re-order so recent active wins inside the same
  // vote-count band. We approximate "recent + vote_count DESC" by sorting
  // on the max of (last_vote_at, created_at) within the top page.
  filtered.sort((a, b) => {
    if (b.vote_count !== a.vote_count) return b.vote_count - a.vote_count;
    const aT = Math.max(
      a.last_vote_at ? new Date(a.last_vote_at).getTime() : 0,
      new Date(a.created_at).getTime(),
    );
    const bT = Math.max(
      b.last_vote_at ? new Date(b.last_vote_at).getTime() : 0,
      new Date(b.created_at).getTime(),
    );
    return bT - aT;
  });
  return filtered.slice(0, 8).map((r) => ({
    slug: r.slug,
    question: r.question,
    options: r.options,
    vote_count: r.vote_count,
  }));
}

async function fetchTrending(
  supabase: ReturnType<typeof getSupabase>,
  pollId: string,
  excludeSlugs: Set<string>,
  limit = 6,
): Promise<RelatedPollRow[]> {
  const { data } = await supabase
    .from("polls_trending")
    .select("id,slug,question,options,vote_count")
    .neq("id", pollId)
    .order("trending_score", { ascending: false })
    .limit(limit + excludeSlugs.size + 4);
  const rows = (data as (TrendingRow & { id: string })[] | null) ?? [];
  return rows
    .filter((r) => !excludeSlugs.has(r.slug))
    .slice(0, limit)
    .map((r) => ({
      slug: r.slug,
      question: r.question,
      options: r.options,
      vote_count: r.vote_count,
    }));
}

export default async function BelowPollSeo({
  pollId,
  question,
  options,
  topics,
  lang,
}: {
  pollId: string;
  question: string;
  options: string[];
  topics: string[] | null | undefined;
  lang: string | null | undefined;
}) {
  const supabase = getSupabase();
  const safeTopics = (topics ?? []).filter((t): t is string => typeof t === "string");
  const similar = await fetchSimilar(supabase, pollId, safeTopics);
  const trending =
    similar.length < 4
      ? await fetchTrending(
          supabase,
          pollId,
          new Set(similar.map((s) => s.slug)),
          6,
        )
      : [];

  const isEn = lang === "en";

  return (
    <div className="space-y-8 mt-6">
      {safeTopics.length > 0 && (
        <TopicPills topics={safeTopics} lang={lang} />
      )}

      {similar.length > 0 && (
        <section className="space-y-3" aria-label={isEn ? "Similar polls" : "Sondages similaires"}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {isEn ? "Similar polls" : "Sondages similaires"}
          </h2>
          <RelatedPollsGrid polls={similar} />
        </section>
      )}

      {trending.length > 0 && (
        <section className="space-y-3" aria-label={isEn ? "Trending polls" : "Sondages tendance"}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {isEn ? "Trending polls" : "Sondages tendance"}
          </h2>
          <RelatedPollsGrid polls={trending} />
        </section>
      )}

      <section className="space-y-2">
        <Link
          href={forkUrl(question, options)}
          prefetch={false}
          className="glass rounded-3xl p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.06] hover:scale-[1.01] active:scale-[0.99] transition card-in shadow-xl shadow-pink-500/5"
          aria-label={isEn ? "Create your own version of this poll" : "Crée ta propre version de ce sondage"}
        >
          <span className="text-4xl shrink-0" aria-hidden>
            ✨
          </span>
          <div className="space-y-0.5 min-w-0">
            <div className="font-bold text-base sm:text-lg">
              {isEn ? "Make your own version" : "Crée le tien"}
            </div>
            <div className="text-sm text-white/60 line-clamp-2">
              {isEn
                ? "Fork this poll, tweak the options, share with your crew."
                : "Reprends la question, change les options, partage à ta crew."}
            </div>
          </div>
          <span className="ml-auto shrink-0 text-pink-300 text-xl" aria-hidden>
            →
          </span>
        </Link>
      </section>

      <section className="space-y-2" aria-label="Explore">
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
          {isEn ? "Explore" : "Explore"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {EXPLORE_PILLS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              prefetch={false}
              className="glass rounded-full px-3 py-1.5 text-sm hover:bg-white/10 transition inline-flex items-center gap-1.5"
            >
              <span aria-hidden>{p.emoji}</span>
              <span>{p.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
