import Link from "next/link";

// Shared cross-hub navigation strip rendered at the top of every SEO surface
// (keyword hubs + detail pages, templates, quiz, compare, tools, ideas, guides,
// blog, quotes). Turns the SEO tree from per-locale islands into a graph the
// visitor can actually walk.

export type HubLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type HubKey =
  | "explore"
  | "ideas"
  | "keywords"
  | "templates"
  | "quiz"
  | "compare"
  | "tools"
  | "guides"
  | "blog"
  | "quotes";

const LABELS: Record<HubLocale, Record<HubKey, string>> = {
  fr: {
    explore: "Explorer",
    ideas: "Idées",
    keywords: "Mots-clés",
    templates: "Modèles",
    quiz: "Quiz",
    compare: "Comparatifs",
    tools: "Outils",
    guides: "Guides",
    blog: "Blog",
    quotes: "Citations",
  },
  en: {
    explore: "Explore",
    ideas: "Ideas",
    keywords: "Keywords",
    templates: "Templates",
    quiz: "Quiz",
    compare: "Compare",
    tools: "Tools",
    guides: "Guides",
    blog: "Blog",
    quotes: "Quotes",
  },
  es: {
    explore: "Explorar",
    ideas: "Ideas",
    keywords: "Palabras clave",
    templates: "Plantillas",
    quiz: "Quiz",
    compare: "Comparativas",
    tools: "Herramientas",
    guides: "Guías",
    blog: "Blog",
    quotes: "Citas",
  },
  it: {
    explore: "Esplora",
    ideas: "Idee",
    keywords: "Parole chiave",
    templates: "Modelli",
    quiz: "Quiz",
    compare: "Confronti",
    tools: "Strumenti",
    guides: "Guide",
    blog: "Blog",
    quotes: "Citazioni",
  },
  pt: {
    explore: "Explorar",
    ideas: "Ideias",
    keywords: "Palavras-chave",
    templates: "Modelos",
    quiz: "Quiz",
    compare: "Comparações",
    tools: "Ferramentas",
    guides: "Guias",
    blog: "Blog",
    quotes: "Citações",
  },
  de: {
    explore: "Entdecken",
    ideas: "Ideen",
    keywords: "Stichwörter",
    templates: "Vorlagen",
    quiz: "Quiz",
    compare: "Vergleiche",
    tools: "Tools",
    guides: "Guides",
    blog: "Blog",
    quotes: "Zitate",
  },
  ja: {
    explore: "探索",
    ideas: "アイデア",
    keywords: "キーワード",
    templates: "テンプレート",
    quiz: "クイズ",
    compare: "比較",
    tools: "ツール",
    guides: "ガイド",
    blog: "ブログ",
    quotes: "名言",
  },
  zh: {
    explore: "探索",
    ideas: "创意",
    keywords: "关键词",
    templates: "模板",
    quiz: "测验",
    compare: "对比",
    tools: "工具",
    guides: "指南",
    blog: "博客",
    quotes: "名言",
  },
};

const EMOJI: Record<HubKey, string> = {
  explore: "🧭",
  ideas: "💡",
  keywords: "🔤",
  templates: "📋",
  quiz: "🧠",
  compare: "⚔️",
  tools: "🧰",
  guides: "📘",
  blog: "✍️",
  quotes: "💬",
};

// The keyword hub URL differs per locale: FR/EN have dedicated routes, the
// other six share /topic/<locale>.
function keywordHub(locale: HubLocale): string {
  if (locale === "fr") return "/mot";
  if (locale === "en") return "/word";
  return `/topic/${locale}`;
}

function hubHref(key: HubKey, locale: HubLocale): string {
  switch (key) {
    case "explore":
      return "/explore";
    case "ideas":
      return locale === "fr" ? "/idees" : "/ideas";
    case "keywords":
      return keywordHub(locale);
    case "templates":
      return "/template";
    case "quiz":
      return "/quiz";
    case "compare":
      return "/compare";
    case "tools":
      return "/outils";
    case "guides":
      return "/guides";
    case "blog":
      return "/blog";
    case "quotes":
      return locale === "fr" ? "/citations" : "/quotes";
  }
}

const ORDER: HubKey[] = [
  "explore",
  "ideas",
  "keywords",
  "templates",
  "quiz",
  "compare",
  "tools",
  "guides",
  "blog",
  "quotes",
];

const LANGS: { code: HubLocale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
  { code: "de", label: "DE" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

const LANG_ROW_LABEL: Record<HubLocale, string> = {
  fr: "Mots-clés par langue",
  en: "Keywords by language",
  es: "Palabras clave por idioma",
  it: "Parole chiave per lingua",
  pt: "Palavras-chave por idioma",
  de: "Stichwörter nach Sprache",
  ja: "言語別キーワード",
  zh: "按语言浏览关键词",
};

export default function HubNav({
  locale = "fr",
  current,
  showLanguages = false,
}: {
  locale?: HubLocale;
  current?: HubKey;
  showLanguages?: boolean;
}) {
  const t = LABELS[locale] ?? LABELS.en;

  return (
    <nav
      aria-label="moomz hubs"
      className="glass rounded-2xl px-3 py-3 sm:px-4 cv-auto"
    >
      <ul className="flex flex-wrap gap-1.5">
        {ORDER.map((key) => {
          const active = key === current;
          return (
            <li key={key}>
              <Link
                href={hubHref(key, locale)}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/35 to-purple-500/35 border border-pink-400/50 px-3 py-1.5 text-xs font-semibold text-white"
                    : "inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 px-3 py-1.5 text-xs text-white/70 hover:text-white transition-colors"
                }
              >
                <span aria-hidden="true">{EMOJI[key]}</span>
                {t[key]}
              </Link>
            </li>
          );
        })}
      </ul>

      {showLanguages && (
        <div className="mt-2.5 border-t border-white/10 pt-2.5">
          <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/35">
            {LANG_ROW_LABEL[locale] ?? LANG_ROW_LABEL.en}
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {LANGS.map((l) => {
              const active = l.code === locale && current === "keywords";
              return (
                <li key={l.code}>
                  <Link
                    href={keywordHub(l.code)}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "inline-flex rounded-full bg-pink-500/30 border border-pink-400/50 px-2.5 py-1 text-[11px] font-semibold text-white"
                        : "inline-flex rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 px-2.5 py-1 text-[11px] text-white/60 hover:text-white transition-colors"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
