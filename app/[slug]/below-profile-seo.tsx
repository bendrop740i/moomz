import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import TopicPills from "./topic-pills";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type TrendingProfile = {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_emoji: string | null;
  total_points: number | null;
};

type ProfileStrings = {
  trendingProfiles: string;
  topicsTheyLike: string;
  discoverMore: string;
  myVotes: string;
  createPoll: string;
  profileAriaLabel: (username: string) => string;
};

const PROFILE_COPY: Record<Locale, ProfileStrings> = {
  fr: {
    trendingProfiles: "Profils tendance",
    topicsTheyLike: "Topics qu'iel aime",
    discoverMore: "Découvre + de monde",
    myVotes: "Mes votes",
    createPoll: "Crée un sondage",
    profileAriaLabel: (u) => `Profil de @${u}`,
  },
  en: {
    trendingProfiles: "Trending profiles",
    topicsTheyLike: "Topics they like",
    discoverMore: "Discover more people",
    myVotes: "My votes",
    createPoll: "Create a poll",
    profileAriaLabel: (u) => `@${u}'s profile`,
  },
  es: {
    trendingProfiles: "Perfiles en tendencia",
    topicsTheyLike: "Temas que les gustan",
    discoverMore: "Descubre más gente",
    myVotes: "Mis votos",
    createPoll: "Crea una encuesta",
    profileAriaLabel: (u) => `Perfil de @${u}`,
  },
  it: {
    trendingProfiles: "Profili di tendenza",
    topicsTheyLike: "Temi che ama",
    discoverMore: "Scopri più persone",
    myVotes: "I miei voti",
    createPoll: "Crea un sondaggio",
    profileAriaLabel: (u) => `Profilo di @${u}`,
  },
  pt: {
    trendingProfiles: "Perfis em alta",
    topicsTheyLike: "Temas que curte",
    discoverMore: "Descobre mais pessoas",
    myVotes: "Os meus votos",
    createPoll: "Cria uma enquete",
    profileAriaLabel: (u) => `Perfil de @${u}`,
  },
  de: {
    trendingProfiles: "Trending-Profile",
    topicsTheyLike: "Themen, die sie mögen",
    discoverMore: "Mehr Leute entdecken",
    myVotes: "Meine Stimmen",
    createPoll: "Umfrage erstellen",
    profileAriaLabel: (u) => `Profil von @${u}`,
  },
  ja: {
    trendingProfiles: "注目のプロフィール",
    topicsTheyLike: "好きなテーマ",
    discoverMore: "もっと見つける",
    myVotes: "自分の投票",
    createPoll: "投票を作る",
    profileAriaLabel: (u) => `@${u} のプロフィール`,
  },
  zh: {
    trendingProfiles: "热门用户",
    topicsTheyLike: "他们喜欢的话题",
    discoverMore: "发现更多人",
    myVotes: "我的投票",
    createPoll: "创建投票",
    profileAriaLabel: (u) => `@${u} 的主页`,
  },
};

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

function discoverPills(c: ProfileStrings): { href: string; label: string; emoji: string }[] {
  return [
    { href: "/discover", label: "Discover", emoji: "🔥" },
    { href: "/idees", label: "Idées", emoji: "💡" },
    { href: "/ideas", label: "Ideas", emoji: "✨" },
    { href: "/guides", label: "Guides", emoji: "📘" },
    { href: "/blog", label: "Blog", emoji: "📰" },
    { href: "/read", label: "Read", emoji: "📖" },
    { href: "/mes-votes", label: c.myVotes, emoji: "🗳️" },
    { href: "/create", label: c.createPoll, emoji: "➕" },
  ];
}

export default async function BelowProfileSeo({
  profileId,
}: {
  profileId: string;
  /** @deprecated pass nothing — locale is now resolved server-side via getLocale() */
  locale?: string | null;
}) {
  const supabase = getSupabase();
  const [profiles, topics] = await Promise.all([
    fetchTrendingProfiles(supabase, profileId, 6),
    fetchProfileTopics(supabase, profileId),
  ]);

  const locale = getLocale() as Locale;
  const c = PROFILE_COPY[locale] ?? PROFILE_COPY.en;
  const pills = discoverPills(c);

  return (
    <div className="space-y-8 mt-2">
      {profiles.length > 0 && (
        <section className="space-y-3" aria-label={c.trendingProfiles}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {c.trendingProfiles}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {profiles.map((p, idx) => (
              <Link
                key={p.id}
                href={`/${p.username}`}
                prefetch={false}
                aria-label={c.profileAriaLabel(p.username)}
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
          lang={locale}
          label={c.topicsTheyLike}
        />
      )}

      <section className="space-y-2" aria-label={c.discoverMore}>
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
          {c.discoverMore}
        </h2>
        <div className="flex flex-wrap gap-2">
          {pills.map((p) => (
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
