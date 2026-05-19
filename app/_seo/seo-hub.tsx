import Link from "next/link";
import type { SeoPage, Locale, Category } from "@/lib/seo/types";
import { pageUrl } from "@/lib/seo/types";
import { allPages } from "@/lib/seo";
import { categoryBadge, getFooterLabels } from "./related-grid";

type Props = {
  title: string;
  description: string;
  pages: SeoPage[];
  locale?: Locale;
};

const HUB_LABELS: Record<Locale, {
  featured: string;
  sortBy: string;
  sortRecent: string;
  sortPopular: string;
  topics: string;
  topicMisc: string;
  alsoSee: string;
  inLocale: (label: string) => string;
}> = {
  fr: {
    featured: "À la une",
    sortBy: "Trier par :",
    sortRecent: "Récent",
    sortPopular: "Populaire",
    topics: "Clusters de sujets",
    topicMisc: "Divers",
    alsoSee: "Voir aussi",
    inLocale: (l) => `${l}`,
  },
  en: {
    featured: "Featured",
    sortBy: "Sort by:",
    sortRecent: "Recent",
    sortPopular: "Popular",
    topics: "Topic clusters",
    topicMisc: "More",
    alsoSee: "See also",
    inLocale: (l) => `${l}`,
  },
  es: {
    featured: "Destacados",
    sortBy: "Ordenar por:",
    sortRecent: "Reciente",
    sortPopular: "Popular",
    topics: "Clústeres de temas",
    topicMisc: "Otros",
    alsoSee: "Ver también",
    inLocale: (l) => l,
  },
  it: {
    featured: "In evidenza",
    sortBy: "Ordina per:",
    sortRecent: "Recenti",
    sortPopular: "Popolari",
    topics: "Cluster di argomenti",
    topicMisc: "Altri",
    alsoSee: "Vedi anche",
    inLocale: (l) => l,
  },
  pt: {
    featured: "Em destaque",
    sortBy: "Ordenar por:",
    sortRecent: "Recente",
    sortPopular: "Popular",
    topics: "Clusters de tópicos",
    topicMisc: "Outros",
    alsoSee: "Veja também",
    inLocale: (l) => l,
  },
  de: {
    featured: "Empfohlen",
    sortBy: "Sortieren nach:",
    sortRecent: "Neueste",
    sortPopular: "Beliebt",
    topics: "Themen-Cluster",
    topicMisc: "Weitere",
    alsoSee: "Siehe auch",
    inLocale: (l) => l,
  },
  ja: {
    featured: "特集",
    sortBy: "並び替え：",
    sortRecent: "新着",
    sortPopular: "人気",
    topics: "トピッククラスター",
    topicMisc: "その他",
    alsoSee: "関連リンク",
    inLocale: (l) => l,
  },
  zh: {
    featured: "精选",
    sortBy: "排序：",
    sortRecent: "最新",
    sortPopular: "热门",
    topics: "主题集群",
    topicMisc: "其他",
    alsoSee: "另请参阅",
    inLocale: (l) => l,
  },
};

const CATEGORY_LABEL: Record<Locale, Record<Category, string>> = {
  fr: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guides", blog: "Blog", read: "À lire" },
  en: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guides", blog: "Blog", read: "Read" },
  es: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guías", blog: "Blog", read: "Leer" },
  it: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guide", blog: "Blog", read: "Letture" },
  pt: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guias", blog: "Blog", read: "Ler" },
  de: { idees: "Idées FR", ideas: "Ideas EN", guides: "Guides", blog: "Blog", read: "Lesen" },
  ja: { idees: "Idées FR", ideas: "Ideas EN", guides: "ガイド", blog: "ブログ", read: "読む" },
  zh: { idees: "Idées FR", ideas: "Ideas EN", guides: "指南", blog: "博客", read: "阅读" },
};

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

function pickFeatured(pages: SeoPage[], n: number): SeoPage[] {
  return [...pages]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0))
    .slice(0, n);
}

/**
 * Group remaining pages by their first `related` slug (used as a soft cluster
 * key) if available, otherwise into an alphabetical "misc" bucket. Each cluster
 * holds 5 to 8 pages — anything smaller folds into "misc".
 */
function groupIntoClusters(
  pages: SeoPage[],
  miscLabel: string,
): Array<{ label: string; pages: SeoPage[] }> {
  const buckets = new Map<string, SeoPage[]>();
  const misc: SeoPage[] = [];
  for (const p of pages) {
    const first = p.related?.[0];
    if (!first) {
      misc.push(p);
      continue;
    }
    if (!buckets.has(first)) buckets.set(first, []);
    buckets.get(first)!.push(p);
  }
  const clusters: Array<{ label: string; pages: SeoPage[] }> = [];
  for (const [key, items] of buckets.entries()) {
    if (items.length < 3) {
      misc.push(...items);
      continue;
    }
    // Cluster label = h1 of the page whose slug matches the cluster key, in
    // the same locale; fallback to the slug itself.
    const labelPage = pages.find((p) => p.slug === key);
    const label = labelPage ? truncate(labelPage.h1, 50) : key;
    clusters.push({ label, pages: items.slice(0, 8) });
  }
  // Sort clusters by size desc
  clusters.sort((a, b) => b.pages.length - a.pages.length);
  if (misc.length) {
    misc.sort((a, b) => a.h1.localeCompare(b.h1));
    // Chunk misc into ~8-page sub-buckets so the UI doesn't dump 60 pills at once
    for (let i = 0; i < misc.length; i += 8) {
      clusters.push({
        label: i === 0 ? miscLabel : `${miscLabel} ${Math.floor(i / 8) + 1}`,
        pages: misc.slice(i, i + 8),
      });
    }
  }
  return clusters;
}

function deriveLocale(pages: SeoPage[], hint?: Locale): Locale {
  if (hint) return hint;
  // Best-effort: most common locale in the list, else 'en'.
  const counts = new Map<Locale, number>();
  for (const p of pages) counts.set(p.locale, (counts.get(p.locale) ?? 0) + 1);
  let best: Locale = "en";
  let max = 0;
  for (const [loc, c] of counts.entries()) {
    if (c > max) {
      max = c;
      best = loc;
    }
  }
  return best;
}

export default function SeoHubView({ title, description, pages, locale }: Props) {
  const loc = deriveLocale(pages, locale);
  const labels = HUB_LABELS[loc] ?? HUB_LABELS.en;
  const footerLabels = getFooterLabels(loc);
  const featured = pickFeatured(pages, 3);
  const featuredKeys = new Set(featured.map((p) => `${p.category}:${p.slug}`));
  const rest = pages.filter((p) => !featuredKeys.has(`${p.category}:${p.slug}`));
  const clusters = groupIntoClusters(rest, labels.topicMisc);

  // Cross-category footer: every other category that has content in this locale
  const currentCategory = pages[0]?.category;
  const otherCats: Array<{ category: Category; count: number }> = (
    ["idees", "ideas", "guides", "blog", "read"] as Category[]
  )
    .filter((c) => c !== currentCategory)
    .map((c) => ({
      category: c,
      count: allPages.filter((p) => p.locale === loc && p.category === c).length,
    }))
    .filter((x) => x.count > 0);

  return (
    <div className="space-y-8 fade-up">
      <header className="space-y-2 text-center">
        <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-white/60 text-balance">{description}</p>
      </header>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition text-center"
      >
        <div className="font-display text-xl">moomz.com</div>
        <div className="text-xs text-white/50">Crée ton sondage en 10 secondes</div>
      </Link>

      {/* Featured / hero row */}
      {featured.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-base text-white/80 uppercase tracking-wider text-xs">
            {labels.featured}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {featured.map((p) => (
              <Link
                key={p.category + ":" + p.slug}
                href={pageUrl(p)}
                className="glass card-in rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-3 h-full"
              >
                <div className="flex items-center gap-2">
                  {p.emoji ? <span className="text-3xl">{p.emoji}</span> : null}
                  <span className="text-[10px] uppercase tracking-wider text-white/40 ml-auto px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {categoryBadge(p)}
                  </span>
                </div>
                <div className="font-display text-xl text-white leading-tight">
                  {p.h1}
                </div>
                <div className="text-sm text-white/60 line-clamp-4">{p.description}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Filter / sort hint (visual only — links to query strings) */}
      <div className="flex items-center gap-2 flex-wrap text-xs">
        <span className="text-white/40">{labels.sortBy}</span>
        <Link
          href="?sort=recent"
          className="glass rounded-full px-3 py-1 text-white/80 hover:bg-white/10 transition"
        >
          {labels.sortRecent}
        </Link>
        <Link
          href="?sort=popular"
          className="glass rounded-full px-3 py-1 text-white/80 hover:bg-white/10 transition"
        >
          {labels.sortPopular}
        </Link>
      </div>

      {/* Topic clusters */}
      {clusters.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-semibold text-base text-white/80 uppercase tracking-wider text-xs">
            {labels.topics}
          </h2>
          <div className="space-y-4">
            {clusters.map((cluster, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-sm font-medium text-white">{cluster.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cluster.pages.map((p) => (
                    <Link
                      key={p.category + ":" + p.slug}
                      href={pageUrl(p)}
                      className="glass rounded-full px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 transition"
                    >
                      {p.emoji ? <span className="mr-1">{p.emoji}</span> : null}
                      {truncate(p.h1, 48)}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Full list (preserved from the original hub view) */}
      <section className="space-y-3">
        <h2 className="font-semibold text-base text-white/80 uppercase tracking-wider text-xs">
          {footerLabels.pageCount(pages.length)}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pages.map((p) => (
            <li key={p.slug + p.category}>
              <Link
                href={pageUrl(p)}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-start gap-3 h-full"
              >
                {p.emoji && <span className="text-2xl shrink-0">{p.emoji}</span>}
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white">{p.h1}</div>
                  <div className="text-xs text-white/40 line-clamp-2 mt-0.5">{p.description}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Cross-category footer */}
      {otherCats.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-base text-white/80 uppercase tracking-wider text-xs">
            {labels.alsoSee}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {otherCats.map(({ category, count }) => (
              <Link
                key={category}
                href={`/${category}`}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-center justify-between"
              >
                <span className="text-sm font-medium text-white">
                  {CATEGORY_LABEL[loc]?.[category] ?? category}
                </span>
                <span className="text-xs text-white/40">{count}</span>
              </Link>
            ))}
            {/* Keyword hubs for FR/EN */}
            {loc === "fr" ? (
              <Link
                href="/mot"
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-center justify-between"
              >
                <span className="text-sm font-medium text-white">Mots-clés</span>
                <span className="text-xs text-white/40">120+</span>
              </Link>
            ) : null}
            {loc === "en" ? (
              <Link
                href="/word"
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition flex items-center justify-between"
              >
                <span className="text-sm font-medium text-white">Keywords</span>
                <span className="text-xs text-white/40">120+</span>
              </Link>
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
}
