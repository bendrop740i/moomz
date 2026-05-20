import Link from "next/link";
import { allPages } from "@/lib/seo";
import type { SeoPage } from "@/lib/seo/types";

type FooterLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

const FOOTER_LINKS: Record<FooterLocale, { label: string; href: string }[]> = {
  fr: [
    { label: "🧭 Tout explorer", href: "/explore" },
    { label: "Idées de sondage", href: "/idees" },
    { label: "Modèles de sondage", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Comparatifs", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Citations", href: "/citations" },
    { label: "Guides", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  en: [
    { label: "🧭 Explore all", href: "/explore" },
    { label: "Poll ideas", href: "/ideas" },
    { label: "Poll templates", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Compare", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Quotes", href: "/quotes" },
    { label: "Guides", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  es: [
    { label: "🧭 Explorar todo", href: "/explore" },
    { label: "Ideas de encuestas", href: "/ideas" },
    { label: "Plantillas de encuestas", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Comparativas", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Citas", href: "/quotes" },
    { label: "Guías", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  it: [
    { label: "🧭 Esplora tutto", href: "/explore" },
    { label: "Idee per sondaggi", href: "/ideas" },
    { label: "Modelli di sondaggi", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Confronti", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Citazioni", href: "/quotes" },
    { label: "Guide", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  pt: [
    { label: "🧭 Explorar tudo", href: "/explore" },
    { label: "Ideias de enquetes", href: "/ideas" },
    { label: "Modelos de enquetes", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Comparações", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Citações", href: "/quotes" },
    { label: "Guias", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  de: [
    { label: "🧭 Alles entdecken", href: "/explore" },
    { label: "Umfrage-Ideen", href: "/ideas" },
    { label: "Umfrage-Vorlagen", href: "/template" },
    { label: "Quiz", href: "/quiz" },
    { label: "Vergleiche", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 Zitate", href: "/quotes" },
    { label: "Guides", href: "/guides" },
    { label: "Blog", href: "/blog" },
  ],
  ja: [
    { label: "🧭 すべて見る", href: "/explore" },
    { label: "投票のアイデア", href: "/ideas" },
    { label: "投票テンプレート", href: "/template" },
    { label: "クイズ", href: "/quiz" },
    { label: "比較", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 名言", href: "/quotes" },
    { label: "ガイド", href: "/guides" },
    { label: "ブログ", href: "/blog" },
  ],
  zh: [
    { label: "🧭 浏览全部", href: "/explore" },
    { label: "投票创意", href: "/ideas" },
    { label: "投票模板", href: "/template" },
    { label: "测验", href: "/quiz" },
    { label: "对比", href: "/compare" },
    { label: "📖 Read", href: "/read" },
    { label: "💬 名言", href: "/quotes" },
    { label: "指南", href: "/guides" },
    { label: "博客", href: "/blog" },
  ],
};

const KEYWORD_HUBS = [
  { label: "Français", href: "/mot" },
  { label: "English", href: "/word" },
  { label: "Español", href: "/topic/es" },
  { label: "Italiano", href: "/topic/it" },
  { label: "Português", href: "/topic/pt" },
  { label: "Deutsch", href: "/topic/de" },
  { label: "日本語", href: "/topic/ja" },
  { label: "中文", href: "/topic/zh" },
];

const TOOL_LINKS: Record<FooterLocale, { label: string; href: string }[]> = {
  fr: [
    { label: "💱 Convertisseur", href: "/convertisseur" },
    { label: "🌤️ Météo", href: "/meteo" },
    { label: "🕐 Heure dans le monde", href: "/heure" },
    { label: "🎉 Jours fériés", href: "/jours-feries" },
    { label: "₿ Crypto", href: "/crypto" },
    { label: "📖 Dictionnaire", href: "/definition" },
    { label: "🌌 Cosmos", href: "/cosmos" },
    { label: "🍽️ Recettes", href: "/recettes" },
    { label: "♈ Horoscope", href: "/astro" },
    { label: "🧰 Tous les outils", href: "/outils" },
  ],
  en: [
    { label: "💱 Currency converter", href: "/convertisseur" },
    { label: "🌤️ Weather", href: "/meteo" },
    { label: "🕐 World clock", href: "/heure" },
    { label: "🎉 Holidays", href: "/jours-feries" },
    { label: "₿ Crypto", href: "/crypto" },
    { label: "📖 Dictionary", href: "/define" },
    { label: "🌌 Cosmos", href: "/cosmos" },
    { label: "🍽️ Recipes", href: "/recettes" },
    { label: "♈ Horoscope", href: "/astro" },
    { label: "🧰 All tools", href: "/outils" },
  ],
  es: [
    { label: "💱 Conversor de divisas", href: "/convertisseur" },
    { label: "🌤️ Clima", href: "/meteo" },
    { label: "🕐 Hora mundial", href: "/heure" },
    { label: "🎉 Días festivos", href: "/jours-feries" },
    { label: "₿ Cripto", href: "/crypto" },
    { label: "📖 Diccionario", href: "/define" },
    { label: "🌌 Cosmos", href: "/cosmos" },
    { label: "🍽️ Recetas", href: "/recettes" },
    { label: "♈ Horóscopo", href: "/astro" },
    { label: "🧰 Todas las herramientas", href: "/outils" },
  ],
  it: [
    { label: "💱 Convertitore di valuta", href: "/convertisseur" },
    { label: "🌤️ Meteo", href: "/meteo" },
    { label: "🕐 Orario mondiale", href: "/heure" },
    { label: "🎉 Giorni festivi", href: "/jours-feries" },
    { label: "₿ Cripto", href: "/crypto" },
    { label: "📖 Dizionario", href: "/define" },
    { label: "🌌 Cosmo", href: "/cosmos" },
    { label: "🍽️ Ricette", href: "/recettes" },
    { label: "♈ Oroscopo", href: "/astro" },
    { label: "🧰 Tutti gli strumenti", href: "/outils" },
  ],
  pt: [
    { label: "💱 Conversor de moedas", href: "/convertisseur" },
    { label: "🌤️ Clima", href: "/meteo" },
    { label: "🕐 Hora mundial", href: "/heure" },
    { label: "🎉 Feriados", href: "/jours-feries" },
    { label: "₿ Cripto", href: "/crypto" },
    { label: "📖 Dicionário", href: "/define" },
    { label: "🌌 Cosmos", href: "/cosmos" },
    { label: "🍽️ Receitas", href: "/recettes" },
    { label: "♈ Horóscopo", href: "/astro" },
    { label: "🧰 Todas as ferramentas", href: "/outils" },
  ],
  de: [
    { label: "💱 Währungsrechner", href: "/convertisseur" },
    { label: "🌤️ Wetter", href: "/meteo" },
    { label: "🕐 Weltzeit", href: "/heure" },
    { label: "🎉 Feiertage", href: "/jours-feries" },
    { label: "₿ Krypto", href: "/crypto" },
    { label: "📖 Wörterbuch", href: "/define" },
    { label: "🌌 Kosmos", href: "/cosmos" },
    { label: "🍽️ Rezepte", href: "/recettes" },
    { label: "♈ Horoskop", href: "/astro" },
    { label: "🧰 Alle Tools", href: "/outils" },
  ],
  ja: [
    { label: "💱 通貨コンバーター", href: "/convertisseur" },
    { label: "🌤️ 天気", href: "/meteo" },
    { label: "🕐 世界時計", href: "/heure" },
    { label: "🎉 祝日", href: "/jours-feries" },
    { label: "₿ 仮想通貨", href: "/crypto" },
    { label: "📖 辞書", href: "/define" },
    { label: "🌌 コスモス", href: "/cosmos" },
    { label: "🍽️ レシピ", href: "/recettes" },
    { label: "♈ 星占い", href: "/astro" },
    { label: "🧰 すべてのツール", href: "/outils" },
  ],
  zh: [
    { label: "💱 货币转换器", href: "/convertisseur" },
    { label: "🌤️ 天气", href: "/meteo" },
    { label: "🕐 世界时钟", href: "/heure" },
    { label: "🎉 节假日", href: "/jours-feries" },
    { label: "₿ 加密货币", href: "/crypto" },
    { label: "📖 词典", href: "/define" },
    { label: "🌌 宇宙", href: "/cosmos" },
    { label: "🍽️ 食谱", href: "/recettes" },
    { label: "♈ 星座运势", href: "/astro" },
    { label: "🧰 所有工具", href: "/outils" },
  ],
};

// Deterministic shuffle seeded by day-of-year so the footer rotates daily
// without breaking caching mid-day.
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = arr.slice();
  let s = seed >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function todaySeed(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

const VS_RE = /^moomz-vs-/;
const FORMAT_RE = /(-option-poll$|^sondage-\d-options$|yes-no-poll|sondage-oui-non|this-or-that-poll|sondage-this-or-that-fr|emoji-poll|sondage-emoji|image-poll|sondage-avec-image|anonymous-poll|sondage-anonyme)/;

function bucketize(pages: SeoPage[]) {
  const ideas: SeoPage[] = [];
  const guides: SeoPage[] = [];
  const vs: SeoPage[] = [];
  const formats: SeoPage[] = [];
  const blog: SeoPage[] = [];

  for (const p of pages) {
    if (p.category === "idees" || p.category === "ideas") ideas.push(p);
    else if (p.category === "blog") blog.push(p);
    else if (p.category === "guides") {
      if (VS_RE.test(p.slug)) vs.push(p);
      else if (FORMAT_RE.test(p.slug)) formats.push(p);
      else guides.push(p);
    }
  }
  return { ideas, guides, vs, formats, blog };
}

function pillLabel(p: SeoPage): string {
  // The H1 often starts with "Sondages " / "Poll " — strip and take the head before ":"
  const head = p.h1.split(":")[0].split("—")[0].trim();
  return head.replace(/^Sondages?\s+/i, "").replace(/^Polls?\s+/i, "").trim();
}

function Pill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center max-w-full rounded-full bg-white/[0.06] hover:bg-gradient-to-r hover:from-pink-500/25 hover:to-purple-500/25 border border-white/10 hover:border-white/25 px-3 py-1.5 text-xs text-white/70 hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
    >
      <span className="truncate">{children}</span>
    </Link>
  );
}

function Section({
  title,
  emoji,
  pages,
  limit,
}: {
  title: string;
  emoji: string;
  pages: SeoPage[];
  limit: number;
}) {
  if (pages.length === 0) return null;
  const list = pages.slice(0, limit);
  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base leading-none">{emoji}</span>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
          {title}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {list.map((p) => (
          <li key={p.slug + p.category} className="max-w-full">
            <Pill href={`/${p.category}/${p.slug}`}>
              {p.emoji ? `${p.emoji} ` : ""}
              {pillLabel(p)}
            </Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

type FooterStrings = {
  tagline: string;
  made: string;
  inParis: string;
  explore: string;
  tools: string;
  keywords: string;
  ideas: string;
  guides: string;
  vs: string;
  formats: string;
  blog: string;
  rights: string;
  cta: string;
  footnote: string;
};

const FOOTER_T: Record<FooterLocale, FooterStrings> = {
  fr: {
    tagline: "Vibe-checks & sondages gratuits. Pose ta question, partage un lien, regarde les votes tomber.",
    made: "fait avec",
    inParis: "à Paris",
    explore: "Explorer",
    tools: "Outils gratuits",
    keywords: "Mots-clés par langue",
    ideas: "Idées populaires",
    guides: "Guides",
    vs: "moomz vs…",
    formats: "Formats de sondage",
    blog: "Sur le blog",
    rights: "Tous droits réservés.",
    cta: "Créer un sondage",
    footnote: "Fait pour les ultra-connecté·e·s 💫",
  },
  en: {
    tagline: "Free vibe-checks & polls. Ask anything, share a link, watch the votes roll in.",
    made: "made with",
    inParis: "in Paris",
    explore: "Explore",
    tools: "Free tools",
    keywords: "Keyword pages by language",
    ideas: "Popular ideas",
    guides: "Guides",
    vs: "moomz vs…",
    formats: "Poll formats",
    blog: "From the blog",
    rights: "All rights reserved.",
    cta: "Create a poll",
    footnote: "Made for the chronically online 💫",
  },
  es: {
    tagline: "Vibe-checks y encuestas gratis. Haz tu pregunta, comparte un enlace y mira llegar los votos.",
    made: "hecho con",
    inParis: "en París",
    explore: "Explorar",
    tools: "Herramientas gratuitas",
    keywords: "Palabras clave por idioma",
    ideas: "Ideas populares",
    guides: "Guías",
    vs: "moomz vs…",
    formats: "Formatos de encuesta",
    blog: "Desde el blog",
    rights: "Todos los derechos reservados.",
    cta: "Crear una encuesta",
    footnote: "Hecho para los siempre conectados 💫",
  },
  it: {
    tagline: "Vibe-check e sondaggi gratis. Fai la tua domanda, condividi un link e guarda arrivare i voti.",
    made: "fatto con",
    inParis: "a Parigi",
    explore: "Esplora",
    tools: "Strumenti gratuiti",
    keywords: "Parole chiave per lingua",
    ideas: "Idee popolari",
    guides: "Guide",
    vs: "moomz vs…",
    formats: "Formati di sondaggio",
    blog: "Dal blog",
    rights: "Tutti i diritti riservati.",
    cta: "Crea un sondaggio",
    footnote: "Fatto per chi è sempre online 💫",
  },
  pt: {
    tagline: "Vibe-checks e enquetes grátis. Faça sua pergunta, compartilhe um link e veja os votos chegarem.",
    made: "feito com",
    inParis: "em Paris",
    explore: "Explorar",
    tools: "Ferramentas gratuitas",
    keywords: "Palavras-chave por idioma",
    ideas: "Ideias populares",
    guides: "Guias",
    vs: "moomz vs…",
    formats: "Formatos de enquete",
    blog: "Do blog",
    rights: "Todos os direitos reservados.",
    cta: "Criar uma enquete",
    footnote: "Feito para quem vive online 💫",
  },
  de: {
    tagline: "Kostenlose Vibe-Checks & Umfragen. Stell deine Frage, teile einen Link und sieh den Stimmen zu.",
    made: "gemacht mit",
    inParis: "in Paris",
    explore: "Entdecken",
    tools: "Kostenlose Tools",
    keywords: "Stichwörter nach Sprache",
    ideas: "Beliebte Ideen",
    guides: "Guides",
    vs: "moomz vs…",
    formats: "Umfrageformate",
    blog: "Aus dem Blog",
    rights: "Alle Rechte vorbehalten.",
    cta: "Umfrage erstellen",
    footnote: "Gemacht für die Dauer-Online 💫",
  },
  ja: {
    tagline: "無料のバイブチェック＆投票。質問して、リンクを共有して、票が集まるのを見よう。",
    made: "心を込めて",
    inParis: "パリ発",
    explore: "見る",
    tools: "無料ツール",
    keywords: "言語別キーワード",
    ideas: "人気のアイデア",
    guides: "ガイド",
    vs: "moomz 比較",
    formats: "投票の形式",
    blog: "ブログから",
    rights: "全著作権所有。",
    cta: "投票を作成",
    footnote: "ずっとオンラインな人へ 💫",
  },
  zh: {
    tagline: "免费的氛围测试和投票。提出问题、分享链接，看着票数滚滚而来。",
    made: "用心打造",
    inParis: "来自巴黎",
    explore: "探索",
    tools: "免费工具",
    keywords: "按语言浏览关键词",
    ideas: "热门创意",
    guides: "指南",
    vs: "moomz 对比",
    formats: "投票格式",
    blog: "来自博客",
    rights: "保留所有权利。",
    cta: "创建投票",
    footnote: "为常年在线的人打造 💫",
  },
};

export default function SeoFooter({
  locale = "fr",
}: {
  locale?: FooterLocale;
}) {
  const links = FOOTER_LINKS[locale] ?? FOOTER_LINKS.en;
  const toolLinks = TOOL_LINKS[locale] ?? TOOL_LINKS.en;

  // Filter pages by locale (with EN as fallback for FR-only readers if pool is thin)
  const localePages = allPages.filter((p) => p.locale === locale);
  const seed = todaySeed();
  const shuffled = seededShuffle(localePages, seed);
  const buckets = bucketize(shuffled);

  const year = new Date().getFullYear();

  const t = FOOTER_T[locale] ?? FOOTER_T.en;

  return (
    <footer className="mt-12 cv-auto">
      {/* Top: brand block + nav columns */}
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand block */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-4xl bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 bg-clip-text text-transparent"
            >
              moomz
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t.tagline}
            </p>
            <p className="mt-4 text-xs text-white/40">
              {t.made} <span className="text-pink-400">💖</span> {t.inParis}
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:from-pink-400 hover:to-purple-400 transition-colors"
            >
              ✨ {t.cta}
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                {t.explore}
              </h3>
              <ul className="space-y-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                {t.tools}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {toolLinks.map((l) => (
                  <li key={l.href} className="max-w-full">
                    <Pill href={l.href}>{l.label}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEO pill clusters — grouped in subtle cards */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <Section title={t.ideas} emoji="💡" pages={buckets.ideas} limit={14} />
        </div>
        <Section title={t.guides} emoji="📘" pages={buckets.guides} limit={8} />
        <Section title={t.vs} emoji="⚔️" pages={buckets.vs} limit={6} />
        <Section title={t.formats} emoji="🗳️" pages={buckets.formats} limit={6} />
        <Section title={t.blog} emoji="✍️" pages={buckets.blog} limit={6} />
      </div>

      {/* Bottom bar */}
      <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-white/40">
          © {year} <span className="font-display text-white/60">moomz</span> · {t.rights}
        </p>
        <p className="text-xs text-white/30">
          {t.footnote}
        </p>
      </div>
    </footer>
  );
}
