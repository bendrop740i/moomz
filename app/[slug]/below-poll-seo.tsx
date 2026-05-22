import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import RelatedPollsGrid, { type RelatedPollRow } from "./related-polls-grid";
import TopicPills from "./topic-pills";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type BelowStrings = {
  similar: string;
  trending: string;
  forkTitle: string;
  forkBody: string;
  forkAria: string;
  explore: string;
};

const BELOW_STRINGS: Record<Locale, BelowStrings> = {
  fr: {
    similar: "Sondages similaires",
    trending: "Sondages tendance",
    forkTitle: "Crée le tien",
    forkBody: "Reprends la question, change les options, partage à ta crew.",
    forkAria: "Crée ta propre version de ce sondage",
    explore: "Explore",
  },
  en: {
    similar: "Similar polls",
    trending: "Trending polls",
    forkTitle: "Make your own version",
    forkBody: "Fork this poll, tweak the options, share with your crew.",
    forkAria: "Create your own version of this poll",
    explore: "Explore",
  },
  es: {
    similar: "Encuestas similares",
    trending: "Encuestas en tendencia",
    forkTitle: "Crea la tuya",
    forkBody: "Copia la pregunta, cambia las opciones, comparte con tu crew.",
    forkAria: "Crea tu propia versión de esta encuesta",
    explore: "Explorar",
  },
  it: {
    similar: "Sondaggi simili",
    trending: "Sondaggi di tendenza",
    forkTitle: "Crea il tuo",
    forkBody: "Riprendi la domanda, cambia le opzioni, condividi con la crew.",
    forkAria: "Crea la tua versione di questo sondaggio",
    explore: "Esplora",
  },
  pt: {
    similar: "Enquetes parecidas",
    trending: "Enquetes em alta",
    forkTitle: "Cria a tua",
    forkBody: "Copia a pergunta, muda as opções, partilha com a crew.",
    forkAria: "Cria a tua própria versão desta enquete",
    explore: "Explorar",
  },
  de: {
    similar: "Ähnliche Umfragen",
    trending: "Trending-Umfragen",
    forkTitle: "Mach deine eigene",
    forkBody: "Übernimm die Frage, ändere die Optionen, teile mit deiner Crew.",
    forkAria: "Eigene Version dieser Umfrage erstellen",
    explore: "Entdecken",
  },
  ja: {
    similar: "似ている投票",
    trending: "トレンドの投票",
    forkTitle: "自分のを作る",
    forkBody: "質問をコピーして、選択肢を変えて、仲間とシェア。",
    forkAria: "この投票の自分版を作る",
    explore: "探索",
  },
  zh: {
    similar: "相似投票",
    trending: "热门投票",
    forkTitle: "做你自己的版本",
    forkBody: "复制问题、修改选项、分享给朋友。",
    forkAria: "创建你自己的版本",
    explore: "探索",
  },
};

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

// Evergreen hub pills shown at the foot of every poll page. Equal weight,
// glass styling — these are top-of-funnel internal anchors for Googlebot.
// /idees and /ideas are intentionally both included (Google indexes both
// landings) and keep their language-native labels regardless of visitor.
// The other pills' labels follow the visitor's locale.
function explorePills(locale: Locale): { href: string; label: string; emoji: string }[] {
  const tr = <T extends Record<Locale, string>>(m: T) => m[locale] ?? m.en;
  return [
    { href: "/idees", emoji: "💡", label: "Idées de sondage" },
    { href: "/ideas", emoji: "✨", label: "Poll ideas" },
    { href: "/guides", emoji: "📘", label: tr({ fr: "Guides", en: "Guides", es: "Guías", it: "Guide", pt: "Guias", de: "Anleitungen", ja: "ガイド", zh: "指南" }) },
    { href: "/blog", emoji: "📰", label: "Blog" },
    { href: "/read", emoji: "📖", label: "Read" },
    { href: "/discover", emoji: "🔥", label: tr({ fr: "Discover", en: "Discover", es: "Descubrir", it: "Scopri", pt: "Descobrir", de: "Entdecken", ja: "発見", zh: "发现" }) },
    { href: "/music", emoji: "🎧", label: tr({ fr: "Musique", en: "Music", es: "Música", it: "Musica", pt: "Música", de: "Musik", ja: "音楽", zh: "音乐" }) },
    { href: "/outils", emoji: "🧰", label: tr({ fr: "Outils", en: "Tools", es: "Herramientas", it: "Strumenti", pt: "Ferramentas", de: "Tools", ja: "ツール", zh: "工具" }) },
    { href: "/mot", emoji: "🏷️", label: tr({ fr: "Mots-clés", en: "Keywords", es: "Palabras clave", it: "Parole chiave", pt: "Palavras-chave", de: "Schlagworte", ja: "キーワード", zh: "关键词" }) },
  ];
}

// Builds /create?q=...&o=... so the CTA pre-fills the create-form with this
// poll's question + options (the create-form already parses these params).
function forkUrl(question: string, options: string[]): string {
  const q = encodeURIComponent(question);
  const o = options.map((s) => encodeURIComponent(s)).join("|");
  return `/create?q=${q}&o=${o}`;
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

  // Use the visitor's locale (cookie/Accept-Language) for chrome labels — not
  // the poll's authoring language. A French-poll visitor in EN mode sees EN chrome.
  const locale = getLocale() as Locale;
  const s = BELOW_STRINGS[locale] ?? BELOW_STRINGS.en;

  return (
    <div className="space-y-8 mt-6">
      {safeTopics.length > 0 && (
        <TopicPills topics={safeTopics} lang={lang} />
      )}

      {similar.length > 0 && (
        <section className="space-y-3" aria-label={s.similar}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {s.similar}
          </h2>
          <RelatedPollsGrid polls={similar} />
        </section>
      )}

      {trending.length > 0 && (
        <section className="space-y-3" aria-label={s.trending}>
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            {s.trending}
          </h2>
          <RelatedPollsGrid polls={trending} />
        </section>
      )}

      <section className="space-y-2">
        <Link
          href={forkUrl(question, options)}
          prefetch={false}
          className="glass rounded-3xl p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.06] hover:scale-[1.01] active:scale-[0.99] transition card-in shadow-xl shadow-pink-500/5"
          aria-label={s.forkAria}
        >
          <span className="text-4xl shrink-0" aria-hidden>
            ✨
          </span>
          <div className="space-y-0.5 min-w-0">
            <div className="font-bold text-base sm:text-lg">{s.forkTitle}</div>
            <div className="text-sm text-white/60 line-clamp-2">{s.forkBody}</div>
          </div>
          <span className="ml-auto shrink-0 text-pink-300 text-xl" aria-hidden>
            →
          </span>
        </Link>
      </section>

      <section className="space-y-2" aria-label={s.explore}>
        <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
          {s.explore}
        </h2>
        <div className="flex flex-wrap gap-2">
          {explorePills(locale).map((p) => (
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
