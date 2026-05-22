import Link from "next/link";
import type { SeoPage, Locale, Category } from "@/lib/seo/types";
import { pageUrl } from "@/lib/seo/types";
import { seoHref, ideasHubHref, keywordHubHref } from "@/lib/seo/seo-href";
import { allPages } from "@/lib/seo";

// ---------------------------------------------------------------------------
// Labels (server-rendered, locale-aware). All strings below are static — no
// runtime data. Falls back to English when a locale slot is missing.
// ---------------------------------------------------------------------------

export type FooterLabels = {
  alsoRead: string;
  sameCategory: string;
  exploreThemes: string;
  pageCount: (n: number) => string;
  similarPoll: string;
  similarPollSub: string;
  launchPoll: string;
  keywordHub: string;
  keywordHubCount: string;
};

const FOOTER_LABELS: Record<Locale, FooterLabels> = {
  fr: {
    alsoRead: "À lire aussi",
    sameCategory: "Dans la même catégorie",
    exploreThemes: "Explore par thème",
    pageCount: (n) => `${n} page${n > 1 ? "s" : ""}`,
    similarPoll: "Sondage similaire à lancer",
    similarPollSub: "Un tap, ça crée le sondage avec ta question — édite si tu veux.",
    launchPoll: "Lancer",
    keywordHub: "Mots-clés",
    keywordHubCount: "120+ pages",
  },
  en: {
    alsoRead: "Also read",
    sameCategory: "More in this category",
    exploreThemes: "Explore by theme",
    pageCount: (n) => `${n} page${n > 1 ? "s" : ""}`,
    similarPoll: "Similar poll to launch",
    similarPollSub: "One tap creates the poll with your question — edit if you want.",
    launchPoll: "Launch",
    keywordHub: "Keywords",
    keywordHubCount: "120+ pages",
  },
  es: {
    alsoRead: "Lee también",
    sameCategory: "Más de esta categoría",
    exploreThemes: "Explora por tema",
    pageCount: (n) => `${n} página${n > 1 ? "s" : ""}`,
    similarPoll: "Encuesta similar para lanzar",
    similarPollSub: "Un toque crea la encuesta con tu pregunta — edita si quieres.",
    launchPoll: "Lanzar",
    keywordHub: "Palabras clave",
    keywordHubCount: "120+ páginas",
  },
  it: {
    alsoRead: "Leggi anche",
    sameCategory: "Altro in questa categoria",
    exploreThemes: "Esplora per tema",
    pageCount: (n) => `${n} pagin${n > 1 ? "e" : "a"}`,
    similarPoll: "Sondaggio simile da lanciare",
    similarPollSub: "Un tocco crea il sondaggio con la tua domanda — modifica come vuoi.",
    launchPoll: "Lancia",
    keywordHub: "Parole chiave",
    keywordHubCount: "120+ pagine",
  },
  pt: {
    alsoRead: "Leia também",
    sameCategory: "Mais nesta categoria",
    exploreThemes: "Explore por tema",
    pageCount: (n) => `${n} página${n > 1 ? "s" : ""}`,
    similarPoll: "Enquete similar para lançar",
    similarPollSub: "Um toque cria a enquete com sua pergunta — edite se quiser.",
    launchPoll: "Lançar",
    keywordHub: "Palavras-chave",
    keywordHubCount: "120+ páginas",
  },
  de: {
    alsoRead: "Auch lesen",
    sameCategory: "Mehr in dieser Kategorie",
    exploreThemes: "Nach Thema entdecken",
    pageCount: (n) => `${n} Seite${n > 1 ? "n" : ""}`,
    similarPoll: "Ähnliche Umfrage starten",
    similarPollSub: "Ein Tap erstellt die Umfrage mit deiner Frage — anpassen jederzeit.",
    launchPoll: "Starten",
    keywordHub: "Schlüsselwörter",
    keywordHubCount: "120+ Seiten",
  },
  ja: {
    alsoRead: "あわせて読む",
    sameCategory: "同じカテゴリ",
    exploreThemes: "テーマ別に見る",
    pageCount: (n) => `${n}ページ`,
    similarPoll: "似た投票を作る",
    similarPollSub: "タップで投票が作成されます — 編集も自由。",
    launchPoll: "作る",
    keywordHub: "キーワード",
    keywordHubCount: "120以上のページ",
  },
  zh: {
    alsoRead: "延伸阅读",
    sameCategory: "同类内容",
    exploreThemes: "按主题探索",
    pageCount: (n) => `${n} 个页面`,
    similarPoll: "发起类似投票",
    similarPollSub: "一键创建带有你问题的投票 — 可随意编辑。",
    launchPoll: "发起",
    keywordHub: "关键词",
    keywordHubCount: "120+ 个页面",
  },
};

export function getFooterLabels(locale: Locale): FooterLabels {
  return FOOTER_LABELS[locale] ?? FOOTER_LABELS.en;
}

// Locale-aware category badge wording (compact)
const CATEGORY_BADGE: Record<Locale, Record<Category, string>> = {
  fr: { idees: "Idées", ideas: "Ideas", guides: "Guide", blog: "Blog", read: "À lire" },
  en: { idees: "Ideas", ideas: "Ideas", guides: "Guide", blog: "Blog", read: "Read" },
  es: { idees: "Ideas", ideas: "Ideas", guides: "Guía", blog: "Blog", read: "Leer" },
  it: { idees: "Idee", ideas: "Idee", guides: "Guida", blog: "Blog", read: "Letture" },
  pt: { idees: "Ideias", ideas: "Ideias", guides: "Guia", blog: "Blog", read: "Ler" },
  de: { idees: "Ideen", ideas: "Ideen", guides: "Guide", blog: "Blog", read: "Lesen" },
  ja: { idees: "アイデア", ideas: "アイデア", guides: "ガイド", blog: "ブログ", read: "読む" },
  zh: { idees: "灵感", ideas: "灵感", guides: "指南", blog: "博客", read: "阅读" },
};

export function categoryBadge(p: SeoPage): string {
  return CATEGORY_BADGE[p.locale]?.[p.category] ?? p.category;
}

const CATEGORY_EMOJI: Record<Category, string> = {
  idees: "💡",
  ideas: "💡",
  guides: "📘",
  blog: "📰",
  read: "📖",
};

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

function dedupeBySlugCategory(pages: SeoPage[]): SeoPage[] {
  const seen = new Set<string>();
  const out: SeoPage[] = [];
  for (const p of pages) {
    const key = `${p.category}:${p.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Page-selection helpers — pure, only read from allPages
// ---------------------------------------------------------------------------

/**
 * Pick up to `n` SeoPages that are NOT the current page, in the same locale,
 * preferring same-category first, then sister categories with overlapping
 * related slugs, then any other same-locale page.
 */
export function pickCrossLinkCards(page: SeoPage, n: number): SeoPage[] {
  const sameLocale = allPages.filter(
    (p) => p.locale === page.locale && !(p.slug === page.slug && p.category === page.category),
  );
  const explicit = (page.related ?? [])
    .map((slug) => sameLocale.find((p) => p.slug === slug))
    .filter((p): p is SeoPage => Boolean(p));
  const sameCat = sameLocale.filter((p) => p.category === page.category);
  const sisterCat = sameLocale.filter((p) => p.category !== page.category);
  return dedupeBySlugCategory([...explicit, ...sameCat, ...sisterCat]).slice(0, n);
}

/** Pages in the same locale + category (excluding the current one). */
export function pickSameCategoryPills(page: SeoPage, n: number): SeoPage[] {
  return allPages
    .filter(
      (p) =>
        p.locale === page.locale &&
        p.category === page.category &&
        !(p.slug === page.slug && p.category === page.category),
    )
    .slice(0, n);
}

/** Page count per category in the current locale (only non-empty). */
export function categoryCountsForLocale(
  locale: Locale,
): Array<{ category: Category; count: number }> {
  const cats: Category[] = ["idees", "ideas", "guides", "blog", "read"];
  return cats
    .map((c) => ({
      category: c,
      count: allPages.filter((p) => p.locale === locale && p.category === c).length,
    }))
    .filter((x) => x.count > 0);
}

// ---------------------------------------------------------------------------
// Rendered sections
// ---------------------------------------------------------------------------

export function CrossLinkGrid({ page, max = 18 }: { page: SeoPage; max?: number }) {
  const cards = pickCrossLinkCards(page, max);
  if (cards.length === 0) return null;
  const labels = getFooterLabels(page.locale);
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-xl text-white">{labels.alsoRead}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {cards.map((r) => (
          <Link
            key={r.category + ":" + r.slug}
            href={pageUrl(r)}
            className="glass card-in rounded-2xl p-4 hover:bg-white/10 transition flex flex-col gap-2 h-full"
          >
            <div className="flex items-center gap-2">
              {r.emoji ? <span className="text-2xl">{r.emoji}</span> : null}
              <span className="text-[10px] uppercase tracking-wider text-white/40 ml-auto px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                {categoryBadge(r)}
              </span>
            </div>
            <div className="text-sm font-medium text-white line-clamp-2 leading-snug">
              {r.h1}
            </div>
            <div className="text-xs text-white/50 line-clamp-2">
              {truncate(r.description, 100)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SameCategoryPills({ page, max = 30 }: { page: SeoPage; max?: number }) {
  const pills = pickSameCategoryPills(page, max);
  if (pills.length === 0) return null;
  const labels = getFooterLabels(page.locale);
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-base text-white/80">{labels.sameCategory}</h2>
      <div className="flex flex-wrap gap-2">
        {pills.map((p) => (
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
    </section>
  );
}

export function ExploreThemes({ locale }: { locale: Locale }) {
  const counts = categoryCountsForLocale(locale);
  if (counts.length === 0) return null;
  const labels = getFooterLabels(locale);
  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-base text-white/80">{labels.exploreThemes}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {counts.map(({ category, count }) => (
          <Link
            key={category}
            href={
              category === "idees" || category === "ideas"
                ? ideasHubHref(locale)
                : seoHref(category, locale)
            }
            className="glass rounded-2xl px-4 py-3 hover:bg-white/10 transition flex items-center gap-3"
          >
            <span className="text-2xl">{CATEGORY_EMOJI[category]}</span>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white capitalize">
                {CATEGORY_BADGE[locale]?.[category] ?? category}
              </div>
              <div className="text-xs text-white/40">{labels.pageCount(count)}</div>
            </div>
          </Link>
        ))}
        {/* Keyword hubs — route exists only for FR (/mot) and EN (/word) */}
        {locale === "fr" || locale === "en" ? (
          <Link
            href={keywordHubHref(locale)}
            className="glass rounded-2xl px-4 py-3 hover:bg-white/10 transition flex items-center gap-3"
          >
            <span className="text-2xl">🔤</span>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white">{labels.keywordHub}</div>
              <div className="text-xs text-white/40">{labels.keywordHubCount}</div>
            </div>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function Breadcrumb({ page }: { page: SeoPage }) {
  const homeLabel =
    page.locale === "fr"
      ? "Accueil"
      : page.locale === "es"
      ? "Inicio"
      : page.locale === "pt"
      ? "Início"
      : page.locale === "de"
      ? "Start"
      : page.locale === "ja"
      ? "ホーム"
      : page.locale === "zh"
      ? "首页"
      : "Home";
  const catLabel = categoryBadge(page);
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs text-white/40 flex items-center gap-1.5 flex-wrap"
    >
      <Link href="/" className="hover:text-white/80 transition">
        {homeLabel}
      </Link>
      <span aria-hidden="true">›</span>
      <Link
        href={
          page.category === "idees" || page.category === "ideas"
            ? ideasHubHref(page.locale)
            : seoHref(page.category, page.locale)
        }
        className="hover:text-white/80 transition"
      >
        {catLabel}
      </Link>
      <span aria-hidden="true">›</span>
      <span className="text-white/60 line-clamp-1">{truncate(page.h1, 60)}</span>
    </nav>
  );
}
