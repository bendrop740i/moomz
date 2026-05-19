import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import TopicPills from "./topic-pills";

type TrendingProfile = {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_emoji: string | null;
  total_points: number | null;
};

// Pill row: discoverability lanes shown at the foot of every public profile.
// `mes-votes` is included unconditionally — it shows a "login" CTA when the
// viewer is not signed in (already handled by the /mes-votes page itself), so
// the anchor is always crawlable.
const DEFAULT_PILLS = [
  { href: "/discover", label: "Discover", emoji: "🔥" },
  { href: "/idees", label: "Idées", emoji: "💡" },
  { href: "/ideas", label: "Ideas", emoji: "✨" },
  { href: "/guides", label: "Guides", emoji: "📘" },
  { href: "/blog", label: "Blog", emoji: "📰" },
  { href: "/read", label: "Read", emoji: "📖" },
  { href: "/mes-votes", label: "Mes votes", emoji: "🗳️" },
  { href: "/", label: "Crée un sondage", emoji: "➕" },
];

async function fetchTrendingProfiles(
  supabase: ReturnType<typeof getSupabase>,
  excludeId: string,
  limit = 6,
): Promise<TrendingProfile[]> {
  // `profiles_public` has no `updated_at`. We approximate "recent activity"
  // via `total_points` desc (incremented on every vote/poll), tie-broken by
  // `created_at`. Bots are filtered out — we don't want to send SEO juice to
  // synthetic accounts.
  const { data } = await supabase
    .from("profiles_public")
    .select("id,username,display_name,bio,avatar_emoji,total_points,is_bot,created_at")
    .neq("id", excludeId)
    .eq("is_bot", false)
    .order("total_points", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false })
    .limit(limit);
  return ((data as (TrendingProfile & { is_bot: boolean })[] | null) ?? []).map((p) => ({
    id: p.id,
    username: p.username,
    display_name: p.display_name,
    bio: p.bio,
    avatar_emoji: p.avatar_emoji,
    total_points: p.total_points,
  }));
}

async function fetchProfileTopics(
  supabase: ReturnType<typeof getSupabase>,
  profileId: string,
): Promise<string[]> {
  const { data } = await supabase
    .from("polls")
    .select("topics")
    .eq("profile_id", profileId)
    .not("topics", "is", null)
    .limit(80);
  const counts = new Map<string, number>();
  for (const row of (data as { topics: string[] | null }[] | null) ?? []) {
    for (const t of row.topics ?? []) {
      if (typeof t === "string") counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([t]) => t);
}

export default async function BelowProfileSeo({
  profileId,
  locale,
}: {
  profileId: string;
  locale?: string | null;
}) {
  const supabase = getSupabase();
  const [profiles, topics] = await Promise.all([
    fetchTrendingProfiles(supabase, profileId, 6),
    fetchProfileTopics(supabase, profileId),
  ]);

  const isEn = locale === "en";

  return (
    <div className="space-y-8 mt-2">
      {profiles.length > 0 && (
        <section className="space-y-3" aria-label={isEn ? "Trending profiles" : "Profils tendance"}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {isEn ? "Trending profiles" : "Profils tendance"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {profiles.map((p, idx) => (
              <Link
                key={p.id}
                href={`/${p.username}`}
                prefetch={false}
                aria-label={`Profil de @${p.username}`}
                style={{ ["--i" as string]: idx }}
                className="glass rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center gap-1.5 hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.99] transition card-in"
              >
                <span className="text-3xl sm:text-4xl" aria-hidden>
                  {p.avatar_emoji ?? "✨"}
                </span>
                <div className="font-semibold text-sm break-all leading-tight">
                  @{p.username}
                </div>
                {p.bio && (
                  <div className="text-[11px] text-white/50 line-clamp-1 max-w-full break-words">
                    {p.bio}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {topics.length > 0 && (
        <TopicPills
          topics={topics}
          lang={isEn ? "en" : "fr"}
          label={isEn ? "Topics they like" : "Topics qu'iel aime"}
        />
      )}

      <section className="space-y-2" aria-label={isEn ? "Discover more people" : "Découvre plus de monde"}>
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
          {isEn ? "Discover more" : "Découvre + de monde"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {DEFAULT_PILLS.map((p) => (
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
