import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/i18n-server";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Explorer moomz — tout le contenu, toutes les langues",
  description:
    "Le plan complet de moomz : mots-clés dans 8 langues, modèles de sondage, quiz, comparatifs, outils gratuits, idées, guides et blog. Tout au même endroit.",
  alternates: { canonical: "https://moomz.com/explore" },
  openGraph: {
    title: "Explorer moomz",
    description:
      "Tout le contenu moomz au même endroit : mots-clés 8 langues, modèles, quiz, comparatifs, outils, idées, guides, blog.",
    url: "https://moomz.com/explore",
    type: "website",
    siteName: "moomz",
  },
};

const KEYWORD_LANGS: { code: HubLocale; label: string; href: string }[] = [
  { code: "fr", label: "Français", href: "/mot" },
  { code: "en", label: "English", href: "/word" },
  { code: "es", label: "Español", href: "/topic/es" },
  { code: "it", label: "Italiano", href: "/topic/it" },
  { code: "pt", label: "Português", href: "/topic/pt" },
  { code: "de", label: "Deutsch", href: "/topic/de" },
  { code: "ja", label: "日本語", href: "/topic/ja" },
  { code: "zh", label: "中文", href: "/topic/zh" },
];

const TOOLS: {
  emoji: string;
  href: string;
  label: Record<HubLocale, string>;
}[] = [
  {
    emoji: "💱",
    href: "/convertisseur",
    label: {
      fr: "Convertisseur",
      en: "Currency converter",
      es: "Conversor de divisas",
      it: "Convertitore di valuta",
      pt: "Conversor de moedas",
      de: "Währungsrechner",
      ja: "通貨コンバーター",
      zh: "货币转换器",
    },
  },
  {
    emoji: "🌤️",
    href: "/meteo",
    label: {
      fr: "Météo",
      en: "Weather",
      es: "Clima",
      it: "Meteo",
      pt: "Clima",
      de: "Wetter",
      ja: "天気",
      zh: "天气",
    },
  },
  {
    emoji: "🕐",
    href: "/heure",
    label: {
      fr: "Heure mondiale",
      en: "World clock",
      es: "Hora mundial",
      it: "Orario mondiale",
      pt: "Hora mundial",
      de: "Weltzeit",
      ja: "世界時計",
      zh: "世界时钟",
    },
  },
  {
    emoji: "🎉",
    href: "/jours-feries",
    label: {
      fr: "Jours fériés",
      en: "Holidays",
      es: "Días festivos",
      it: "Giorni festivi",
      pt: "Feriados",
      de: "Feiertage",
      ja: "祝日",
      zh: "节假日",
    },
  },
  {
    emoji: "₿",
    href: "/crypto",
    label: {
      fr: "Crypto",
      en: "Crypto",
      es: "Cripto",
      it: "Cripto",
      pt: "Cripto",
      de: "Krypto",
      ja: "仮想通貨",
      zh: "加密货币",
    },
  },
  {
    emoji: "📖",
    href: "/definition",
    label: {
      fr: "Dictionnaire",
      en: "Dictionary",
      es: "Diccionario",
      it: "Dizionario",
      pt: "Dicionário",
      de: "Wörterbuch",
      ja: "辞書",
      zh: "词典",
    },
  },
  {
    emoji: "🌌",
    href: "/cosmos",
    label: {
      fr: "Cosmos",
      en: "Cosmos",
      es: "Cosmos",
      it: "Cosmo",
      pt: "Cosmos",
      de: "Kosmos",
      ja: "コスモス",
      zh: "宇宙",
    },
  },
  {
    emoji: "🍽️",
    href: "/recettes",
    label: {
      fr: "Recettes",
      en: "Recipes",
      es: "Recetas",
      it: "Ricette",
      pt: "Receitas",
      de: "Rezepte",
      ja: "レシピ",
      zh: "食谱",
    },
  },
  {
    emoji: "♈",
    href: "/astro",
    label: {
      fr: "Horoscope",
      en: "Horoscope",
      es: "Horóscopo",
      it: "Oroscopo",
      pt: "Horóscopo",
      de: "Horoskop",
      ja: "星占い",
      zh: "星座运势",
    },
  },
];

type ExploreStrings = {
  title: string;
  sub: string;
  keywords: string;
  keywordsSub: string;
  templates: string;
  templatesSub: string;
  quiz: string;
  quizSub: string;
  compare: string;
  compareSub: string;
  content: string;
  contentSub: string;
  tools: string;
  toolsSub: string;
  pages: string;
  browse: string;
  cta: string;
  allTools: string;
};

const EXPLORE_T: Record<HubLocale, ExploreStrings> = {
  fr: {
    title: "Explorer moomz",
    sub: "Tout le contenu moomz, au même endroit. Choisis une langue, un format, un sujet — et plonge.",
    keywords: "Pages mots-clés",
    keywordsSub: "Une page par sujet, avec les sondages qui en parlent.",
    templates: "Modèles de sondage",
    templatesSub: "Sondages prêts à lancer — un tap remplit le formulaire.",
    quiz: "Quiz",
    quizSub: "Quiz à choix multiples notés : sciences, culture et plus.",
    compare: "Comparatifs",
    compareSub: "moomz face aux autres outils, et duels thématiques.",
    content: "Idées, guides & blog",
    contentSub: "Inspiration, tutos et histoires autour des sondages.",
    tools: "Outils gratuits",
    toolsSub: "Utilitaires en temps réel — devises, météo, crypto et plus.",
    pages: "pages",
    browse: "Parcourir",
    cta: "Crée ton sondage gratuit →",
    allTools: "Tous les outils",
  },
  en: {
    title: "Explore moomz",
    sub: "Every piece of moomz content, in one place. Pick a language, a format, a topic — and dive in.",
    keywords: "Keyword pages",
    keywordsSub: "One page per topic, with the polls that talk about it.",
    templates: "Poll templates",
    templatesSub: "Ready-to-launch polls — one tap fills the create form.",
    quiz: "Quizzes",
    quizSub: "Scored multiple-choice quizzes across science, culture and more.",
    compare: "Comparisons",
    compareSub: "moomz vs other tools, and head-to-head matchups.",
    content: "Ideas, guides & blog",
    contentSub: "Inspiration, how-tos and stories about polls.",
    tools: "Free tools",
    toolsSub: "Live-data utilities — currency, weather, crypto and more.",
    pages: "pages",
    browse: "Browse",
    cta: "Create your free poll →",
    allTools: "All tools",
  },
  es: {
    title: "Explorar moomz",
    sub: "Todo el contenido de moomz, en un solo lugar. Elige un idioma, un formato, un tema — y sumérgete.",
    keywords: "Páginas de palabras clave",
    keywordsSub: "Una página por tema, con las encuestas que hablan de él.",
    templates: "Plantillas de encuestas",
    templatesSub: "Encuestas listas para lanzar — un toque rellena el formulario.",
    quiz: "Quizzes",
    quizSub: "Quizzes de opción múltiple con puntuación: ciencia, cultura y más.",
    compare: "Comparativas",
    compareSub: "moomz frente a otras herramientas y duelos cara a cara.",
    content: "Ideas, guías y blog",
    contentSub: "Inspiración, tutoriales e historias sobre encuestas.",
    tools: "Herramientas gratuitas",
    toolsSub: "Utilidades en tiempo real — divisas, clima, cripto y más.",
    pages: "páginas",
    browse: "Explorar",
    cta: "Crea tu encuesta gratis →",
    allTools: "Todas las herramientas",
  },
  it: {
    title: "Esplora moomz",
    sub: "Tutti i contenuti di moomz, in un unico posto. Scegli una lingua, un formato, un tema — e tuffati.",
    keywords: "Pagine di parole chiave",
    keywordsSub: "Una pagina per ogni tema, con i sondaggi che ne parlano.",
    templates: "Modelli di sondaggi",
    templatesSub: "Sondaggi pronti da lanciare — un tap riempie il modulo.",
    quiz: "Quiz",
    quizSub: "Quiz a scelta multipla con punteggio: scienza, cultura e altro.",
    compare: "Confronti",
    compareSub: "moomz contro altri strumenti e sfide testa a testa.",
    content: "Idee, guide e blog",
    contentSub: "Ispirazione, tutorial e storie sui sondaggi.",
    tools: "Strumenti gratuiti",
    toolsSub: "Utilità in tempo reale — valute, meteo, cripto e altro.",
    pages: "pagine",
    browse: "Sfoglia",
    cta: "Crea il tuo sondaggio gratis →",
    allTools: "Tutti gli strumenti",
  },
  pt: {
    title: "Explorar moomz",
    sub: "Todo o conteúdo do moomz, num só lugar. Escolhe um idioma, um formato, um tema — e mergulha.",
    keywords: "Páginas de palavras-chave",
    keywordsSub: "Uma página por tema, com as enquetes que falam sobre ele.",
    templates: "Modelos de enquetes",
    templatesSub: "Enquetes prontas para lançar — um toque preenche o formulário.",
    quiz: "Quizzes",
    quizSub: "Quizzes de escolha múltipla com pontuação: ciência, cultura e mais.",
    compare: "Comparações",
    compareSub: "moomz contra outras ferramentas e duelos diretos.",
    content: "Ideias, guias e blog",
    contentSub: "Inspiração, tutoriais e histórias sobre enquetes.",
    tools: "Ferramentas gratuitas",
    toolsSub: "Utilitários em tempo real — moedas, clima, cripto e mais.",
    pages: "páginas",
    browse: "Explorar",
    cta: "Cria a tua enquete grátis →",
    allTools: "Todas as ferramentas",
  },
  de: {
    title: "moomz entdecken",
    sub: "Alle moomz-Inhalte an einem Ort. Wähle eine Sprache, ein Format, ein Thema — und tauch ein.",
    keywords: "Stichwort-Seiten",
    keywordsSub: "Eine Seite pro Thema, mit den Umfragen, die darüber sprechen.",
    templates: "Umfrage-Vorlagen",
    templatesSub: "Startklare Umfragen — ein Tipp füllt das Formular aus.",
    quiz: "Quizze",
    quizSub: "Bewertete Multiple-Choice-Quizze: Wissenschaft, Kultur und mehr.",
    compare: "Vergleiche",
    compareSub: "moomz gegen andere Tools und direkte Duelle.",
    content: "Ideen, Guides & Blog",
    contentSub: "Inspiration, Anleitungen und Geschichten rund um Umfragen.",
    tools: "Kostenlose Tools",
    toolsSub: "Echtzeit-Tools — Währungen, Wetter, Krypto und mehr.",
    pages: "Seiten",
    browse: "Durchsuchen",
    cta: "Erstelle deine kostenlose Umfrage →",
    allTools: "Alle Tools",
  },
  ja: {
    title: "moomz を見る",
    sub: "moomz のすべてのコンテンツがここに。言語、形式、トピックを選んで飛び込もう。",
    keywords: "キーワードページ",
    keywordsSub: "トピックごとに1ページ、その話題の投票も一緒に。",
    templates: "投票テンプレート",
    templatesSub: "すぐ使える投票 — タップ1つで作成フォームに反映。",
    quiz: "クイズ",
    quizSub: "採点付きの多肢選択クイズ — 科学、文化など。",
    compare: "比較",
    compareSub: "moomz と他ツールの比較、そして一騎打ち。",
    content: "アイデア・ガイド・ブログ",
    contentSub: "投票にまつわるヒント、ハウツー、ストーリー。",
    tools: "無料ツール",
    toolsSub: "リアルタイムの便利ツール — 通貨、天気、仮想通貨など。",
    pages: "ページ",
    browse: "見る",
    cta: "無料で投票を作成 →",
    allTools: "すべてのツール",
  },
  zh: {
    title: "探索 moomz",
    sub: "moomz 的所有内容，尽在一处。选择语言、格式、主题 — 然后深入了解。",
    keywords: "关键词页面",
    keywordsSub: "每个主题一个页面，附带相关的投票。",
    templates: "投票模板",
    templatesSub: "可直接使用的投票 — 轻点一下即填好创建表单。",
    quiz: "测验",
    quizSub: "带评分的多选测验：科学、文化等等。",
    compare: "对比",
    compareSub: "moomz 与其他工具对比，以及正面对决。",
    content: "创意、指南和博客",
    contentSub: "关于投票的灵感、教程和故事。",
    tools: "免费工具",
    toolsSub: "实时数据工具 — 货币、天气、加密货币等。",
    pages: "页",
    browse: "浏览",
    cta: "免费创建你的投票 →",
    allTools: "所有工具",
  },
};

const CONTENT_LINKS: Record<
  HubLocale,
  { emoji: string; label: string; href: string }[]
> = {
  fr: [
    { emoji: "💡", label: "Idées de sondage", href: "/idees" },
    { emoji: "📘", label: "Guides", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citations", href: "/citations" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  en: [
    { emoji: "💡", label: "Poll ideas", href: "/ideas" },
    { emoji: "📘", label: "Guides", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Quotes", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  es: [
    { emoji: "💡", label: "Ideas de encuestas", href: "/ideas" },
    { emoji: "📘", label: "Guías", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citas", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  it: [
    { emoji: "💡", label: "Idee per sondaggi", href: "/ideas" },
    { emoji: "📘", label: "Guide", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citazioni", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  pt: [
    { emoji: "💡", label: "Ideias de enquetes", href: "/ideas" },
    { emoji: "📘", label: "Guias", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citações", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  de: [
    { emoji: "💡", label: "Umfrage-Ideen", href: "/ideas" },
    { emoji: "📘", label: "Guides", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Zitate", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  ja: [
    { emoji: "💡", label: "投票のアイデア", href: "/ideas" },
    { emoji: "📘", label: "ガイド", href: "/guides" },
    { emoji: "✍️", label: "ブログ", href: "/blog" },
    { emoji: "💬", label: "名言", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
  zh: [
    { emoji: "💡", label: "投票创意", href: "/ideas" },
    { emoji: "📘", label: "指南", href: "/guides" },
    { emoji: "✍️", label: "博客", href: "/blog" },
    { emoji: "💬", label: "名言", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
  ],
};

export default function ExplorePage() {
  const locale = getLocale();
  const hl: HubLocale = (
    ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as string[]
  ).includes(locale)
    ? (locale as HubLocale)
    : "en";

  const keywords = getAllKeywords();
  const kwByLocale = new Map<string, number>();
  for (const k of keywords)
    kwByLocale.set(k.locale, (kwByLocale.get(k.locale) ?? 0) + 1);
  const templateCount = getAllTemplates().length;

  const t = EXPLORE_T[hl] ?? EXPLORE_T.en;
  const contentLinks = CONTENT_LINKS[hl] ?? CONTENT_LINKS.en;

  return (
    <div className="space-y-8 fade-up">
      <HubNav locale={hl} current="explore" />

      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          🧭 explore · moomz
        </div>
        <h1 className="font-display text-4xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">{t.sub}</p>
      </header>

      {/* Keyword hubs — the 8-language tree */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🔤 {t.keywords}</h2>
          <p className="text-sm text-white/50">{t.keywordsSub}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {KEYWORD_LANGS.map((l) => (
            <li key={l.code}>
              <Link
                href={l.href}
                className="glass rounded-2xl px-4 py-4 hover:bg-white/10 transition flex flex-col gap-1 h-full"
              >
                <span className="font-display text-lg text-white">
                  {l.label}
                </span>
                <span className="text-xs text-white/45">
                  {kwByLocale.get(l.code) ?? 0} {t.pages}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Templates + Quiz + Compare */}
      <section className="grid gap-3 sm:grid-cols-3">
        <Link
          href="/template"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">📋</span>
          <span className="font-display text-xl text-white mt-1">
            {t.templates}
          </span>
          <span className="text-xs text-white/50">{t.templatesSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">
            {templateCount} {t.pages} →
          </span>
        </Link>
        <Link
          href="/quiz"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">🧠</span>
          <span className="font-display text-xl text-white mt-1">{t.quiz}</span>
          <span className="text-xs text-white/50">{t.quizSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">{t.browse} →</span>
        </Link>
        <Link
          href="/compare"
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">⚔️</span>
          <span className="font-display text-xl text-white mt-1">
            {t.compare}
          </span>
          <span className="text-xs text-white/50">{t.compareSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">{t.browse} →</span>
        </Link>
      </section>

      {/* Free tools */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🧰 {t.tools}</h2>
          <p className="text-sm text-white/50">{t.toolsSub}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{tool.emoji}</span>
                {tool.label[hl] ?? tool.label.en}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/outils"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/25 to-purple-500/25 border border-pink-400/30 px-3.5 py-2 text-sm text-white hover:from-pink-500/35 hover:to-purple-500/35 transition"
            >
              🧰 {t.allTools} →
            </Link>
          </li>
        </ul>
      </section>

      {/* Ideas / guides / blog */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">📚 {t.content}</h2>
          <p className="text-sm text-white/50">{t.contentSub}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {contentLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{l.emoji}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>
    </div>
  );
}
