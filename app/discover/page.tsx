import { cookies } from "next/headers";
import type { Metadata } from "next";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import DiscoverFeed from "./discover-feed";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Discover — vibe check & sondages tendance | moomz",
  description:
    "Swipe le feed Discover de moomz : vibe check Gen Z, sondages tendance et débats viraux en live. Vote, partage, découvre les opinions du moment.",
  alternates: { canonical: "https://moomz.com/discover" },
  openGraph: {
    title: "Discover — vibe check & sondages tendance | moomz",
    description:
      "Swipe le feed Discover de moomz : vibe check Gen Z, sondages tendance et débats viraux en live. Vote, partage, découvre les opinions du moment.",
    url: "https://moomz.com/discover",
    siteName: "moomz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover — vibe check & sondages tendance | moomz",
    description:
      "Swipe le feed Discover de moomz : vibe check Gen Z, sondages tendance et débats viraux en live.",
  },
};

type TrendingRow = {
  id: string;
  slug: string;
  question: string;
  options: string[];
  created_at: string;
  vote_count: number;
  recent_votes: number;
  trending_score: number;
  last_vote_at: string | null;
  profile_id?: string | null;
};

export default async function DiscoverPage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  const supabase = getSupabase();
  const { data } = await supabase
    .from("polls_trending")
    .select("id,slug,question,options,created_at,vote_count,recent_votes,trending_score,last_vote_at,profile_id")
    .order("trending_score", { ascending: false })
    .limit(40);

  const rows = (data as TrendingRow[]) ?? [];
  const skipped = new Set(readSlugHistory("moomz_skipped_slugs"));
  const voted = new Set(readSlugHistory("moomz_voted_slugs"));
  const jar = cookies();

  // Batch lookup of cosmetic_id for the authors of these polls. Tolerates the
  // column not existing yet (parallel migration) — falls back to no override.
  const authorIds = Array.from(
    new Set(rows.map((r) => r.profile_id).filter((x): x is string => !!x)),
  );
  const cosmeticByAuthor = new Map<string, string | null>();
  if (authorIds.length > 0) {
    try {
      const { data: cosmetics, error } = await supabase
        .from("profiles_public")
        .select("id,cosmetic_id")
        .in("id", authorIds);
      if (!error && cosmetics) {
        for (const c of cosmetics as { id: string; cosmetic_id?: string | null }[]) {
          if (c.cosmetic_id) cosmeticByAuthor.set(c.id, c.cosmetic_id);
        }
      }
    } catch {
      // ignore — column likely doesn't exist yet
    }
  }

  const enrich = (r: TrendingRow) => {
    const votedRaw = jar.get(`moomz_voted_${r.slug}`)?.value;
    const alreadyVoted = votedRaw !== undefined ? Number(votedRaw) : null;
    const authorCosmeticId = r.profile_id
      ? cosmeticByAuthor.get(r.profile_id) ?? null
      : null;
    return { ...r, alreadyVoted, authorCosmeticId };
  };
  const fresh = rows.filter((r) => !voted.has(r.slug) && !skipped.has(r.slug)).map(enrich);
  const seenAgain = rows.filter((r) => voted.has(r.slug) && !skipped.has(r.slug)).map(enrich);
  const polls = [...fresh, ...seenAgain];

  const topScore = rows[0]?.trending_score ?? 0;

  // First-card preload: fetch the per-option vote distribution server-side
  // for the very first poll so we can pass an authoritative initialVoteCount
  // (and warm any client-side preload). This kills the "first card looks
  // empty for half a second" feel before IntersectionObserver kicks in.
  let firstInitialVoteCount: number | undefined;
  const firstPoll = polls[0];
  if (firstPoll) {
    const { data: firstVotes } = await supabase
      .from("votes")
      .select("option_index")
      .eq("poll_id", firstPoll.id);
    if (firstVotes) {
      firstInitialVoteCount = firstVotes.length;
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Discover — vibe check & sondages tendance",
    url: "https://moomz.com/discover",
    description:
      "Feed Discover de moomz : sondages tendance et vibe checks Gen Z en live.",
    isPartOf: { "@type": "WebSite", name: "moomz", url: "https://moomz.com" },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: polls.length,
      itemListElement: polls.slice(0, 40).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.question,
        url: `https://moomz.com/${p.slug}`,
      })),
    },
  };

  return (
    <div className="fade-up -mx-5 -mt-8 sm:-mt-12 -mb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="absolute left-0 right-0 top-0 z-20 px-5 pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-3 flex items-center justify-between bg-gradient-to-b from-[#0b0613]/80 via-[#0b0613]/40 to-transparent backdrop-blur-sm pointer-events-none">
        <h1 className="font-display text-2xl sm:text-3xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent pointer-events-auto">
          {tx("discover.title")}
        </h1>
        <span className="text-[10px] uppercase tracking-widest text-white/50 pointer-events-auto">
          {polls.length} {tx("discover.count")}
          {polls.length > 1 ? "s" : ""}
        </span>
      </header>
      <DiscoverFeed
        polls={polls}
        topScore={topScore}
        firstInitialVoteCount={firstInitialVoteCount}
      />
    </div>
  );
}
