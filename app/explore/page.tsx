import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import { FORMATION_THEMES, themeMetaFor } from "@/lib/formation/types";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import {
  seoHref,
  quoteHubHref,
  ideasHubHref,
  dictHubHref,
} from "@/lib/seo/seo-href";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

// Bare app-surface routes (cookie locale) stay as-is. Every other href on this
// page is SEO surface and gets a /{locale}/ prefix so nav skips the 301.
const APP_ROUTES = new Set([
  "/",
  "/discover",
  "/create",
  "/me",
  "/haut-faits",
  "/mes-votes",
  "/mes-sondages",
  "/music",
]);

function exploreHref(href: string, locale: HubLocale): string {
  if (APP_ROUTES.has(href)) return href;
  const seg = href.replace(/^\/+/, "");
  if (seg === "idees" || seg === "ideas") return ideasHubHref(locale);
  if (seg === "citations" || seg === "quotes") return quoteHubHref(locale);
  if (seg === "define" || seg === "definition") return dictHubHref(locale);
  return seoHref(seg, locale);
}

const EXPLORE_META: Record<HubLocale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: {
    title: "Explorer moomz — tout le contenu au même endroit",
    description: "Le plan complet de moomz : sondages, modèles, quiz, comparatifs, outils gratuits, idées, guides, blog, citations, Read et musique. Tout au même endroit.",
    ogTitle: "Explorer moomz",
    ogDescription: "Tout le contenu moomz au même endroit : sondages, modèles, quiz, comparatifs, outils, idées, guides, blog, citations, Read.",
  },
  en: {
    title: "Explore moomz — all content in one place",
    description: "The full moomz map: polls, templates, quizzes, comparisons, free tools, ideas, guides, blog, quotes, Read and music. All in one place.",
    ogTitle: "Explore moomz",
    ogDescription: "All moomz content in one place: polls, templates, quizzes, comparisons, tools, ideas, guides, blog, quotes, Read.",
  },
  es: {
    title: "Explorar moomz — todo el contenido en un lugar",
    description: "El mapa completo de moomz: encuestas, plantillas, quizzes, comparativas, herramientas gratuitas, ideas, guías, blog, citas, Read y música.",
    ogTitle: "Explorar moomz",
    ogDescription: "Todo el contenido de moomz en un lugar: encuestas, plantillas, quizzes, comparativas, herramientas, ideas, guías, blog, citas, Read.",
  },
  it: {
    title: "Esplora moomz — tutti i contenuti in un posto",
    description: "La mappa completa di moomz: sondaggi, modelli, quiz, confronti, strumenti gratuiti, idee, guide, blog, citazioni, Read e musica.",
    ogTitle: "Esplora moomz",
    ogDescription: "Tutti i contenuti di moomz in un posto: sondaggi, modelli, quiz, confronti, strumenti, idee, guide, blog, citazioni, Read.",
  },
  pt: {
    title: "Explorar moomz — todo o conteúdo num só lugar",
    description: "O mapa completo do moomz: enquetes, modelos, quizzes, comparações, ferramentas gratuitas, ideias, guias, blog, citações, Read e música.",
    ogTitle: "Explorar moomz",
    ogDescription: "Todo o conteúdo do moomz num só lugar: enquetes, modelos, quizzes, comparações, ferramentas, ideias, guias, blog, citações, Read.",
  },
  de: {
    title: "moomz entdecken — alle Inhalte an einem Ort",
    description: "Die komplette moomz-Übersicht: Umfragen, Vorlagen, Quizze, Vergleiche, kostenlose Tools, Ideen, Guides, Blog, Zitate, Read und Musik.",
    ogTitle: "moomz entdecken",
    ogDescription: "Alle moomz-Inhalte an einem Ort: Umfragen, Vorlagen, Quizze, Vergleiche, Tools, Ideen, Guides, Blog, Zitate, Read.",
  },
  ja: {
    title: "moomz を見る — すべてのコンテンツが一箇所に",
    description: "moomz の全コンテンツ：投票、テンプレート、クイズ、比較、無料ツール、アイデア、ガイド、ブログ、名言、Read、音楽。",
    ogTitle: "moomz を見る",
    ogDescription: "moomz のすべてのコンテンツ：投票、テンプレート、クイズ、比較、ツール、アイデア、ガイド、ブログ、名言、Read。",
  },
  zh: {
    title: "探索 moomz — 所有内容尽在一处",
    description: "moomz 完整地图：投票、模板、测验、对比、免费工具、创意、指南、博客、名言、Read 和音乐。",
    ogTitle: "探索 moomz",
    ogDescription: "moomz 所有内容尽在一处：投票、模板、测验、对比、工具、创意、指南、博客、名言、Read。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as HubLocale;
  const m = EXPLORE_META[locale] ?? EXPLORE_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: canonicalUrl(),
      type: "website",
      siteName: "moomz",
    },
  };
}

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

// Core poll product surfaces — home feed, discover, create.
const POLL_LINKS: {
  emoji: string;
  href: string;
  label: Record<HubLocale, string>;
}[] = [
  {
    emoji: "🏠",
    href: "/",
    label: {
      fr: "Le feed",
      en: "The feed",
      es: "El feed",
      it: "Il feed",
      pt: "O feed",
      de: "Der Feed",
      ja: "フィード",
      zh: "动态信息流",
    },
  },
  {
    emoji: "🔮",
    href: "/discover",
    label: {
      fr: "Découvrir",
      en: "Discover",
      es: "Descubrir",
      it: "Scopri",
      pt: "Descobrir",
      de: "Entdecken",
      ja: "ディスカバー",
      zh: "发现",
    },
  },
  {
    emoji: "✨",
    href: "/create",
    label: {
      fr: "Créer un sondage",
      en: "Create a poll",
      es: "Crear encuesta",
      it: "Crea un sondaggio",
      pt: "Criar enquete",
      de: "Umfrage erstellen",
      ja: "投票を作成",
      zh: "创建投票",
    },
  },
];

type ExploreStrings = {
  title: string;
  sub: string;
  polls: string;
  pollsSub: string;
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
  you: string;
  youSub: string;
  achievements: string;
  music: string;
  pages: string;
  browse: string;
  cta: string;
  allTools: string;
};

const EXPLORE_T: Record<HubLocale, ExploreStrings> = {
  fr: {
    title: "Explorer moomz",
    sub: "Tout le contenu moomz, au même endroit. Choisis un format, un sujet — et plonge.",
    polls: "Sondages moomz",
    pollsSub: "Le feed, le mode découverte et la création de sondages.",
    templates: "Modèles de sondage",
    templatesSub: "Sondages prêts à lancer — un tap remplit le formulaire.",
    quiz: "Quiz",
    quizSub: "Quiz à choix multiples notés : sciences, culture et plus.",
    compare: "Comparatifs",
    compareSub: "moomz face aux autres outils, et duels thématiques.",
    content: "Lire & s'inspirer",
    contentSub: "Idées, guides, blog, citations, histoires Read et musique.",
    tools: "Outils gratuits",
    toolsSub: "Utilitaires en temps réel — devises, météo, crypto et plus.",
    you: "Ton espace",
    youSub: "Ton profil, tes votes, tes sondages et tes haut faits.",
    achievements: "Haut faits",
    music: "Musique",
    pages: "pages",
    browse: "Parcourir",
    cta: "Crée ton sondage gratuit →",
    allTools: "Tous les outils",
  },
  en: {
    title: "Explore moomz",
    sub: "Every piece of moomz content, in one place. Pick a format, a topic — and dive in.",
    polls: "moomz polls",
    pollsSub: "The feed, discover mode and creating your own polls.",
    templates: "Poll templates",
    templatesSub: "Ready-to-launch polls — one tap fills the create form.",
    quiz: "Quizzes",
    quizSub: "Scored multiple-choice quizzes across science, culture and more.",
    compare: "Comparisons",
    compareSub: "moomz vs other tools, and head-to-head matchups.",
    content: "Read & get inspired",
    contentSub: "Ideas, guides, blog, quotes, Read stories and music.",
    tools: "Free tools",
    toolsSub: "Live-data utilities — currency, weather, crypto and more.",
    you: "Your space",
    youSub: "Your profile, your votes, your polls and your achievements.",
    achievements: "Achievements",
    music: "Music",
    pages: "pages",
    browse: "Browse",
    cta: "Create your free poll →",
    allTools: "All tools",
  },
  es: {
    title: "Explorar moomz",
    sub: "Todo el contenido de moomz, en un solo lugar. Elige un formato, un tema — y sumérgete.",
    polls: "Encuestas moomz",
    pollsSub: "El feed, el modo descubrir y crear tus encuestas.",
    templates: "Plantillas de encuestas",
    templatesSub: "Encuestas listas para lanzar — un toque rellena el formulario.",
    quiz: "Quizzes",
    quizSub: "Quizzes de opción múltiple con puntuación: ciencia, cultura y más.",
    compare: "Comparativas",
    compareSub: "moomz frente a otras herramientas y duelos cara a cara.",
    content: "Leer e inspirarse",
    contentSub: "Ideas, guías, blog, citas, historias Read y música.",
    tools: "Herramientas gratuitas",
    toolsSub: "Utilidades en tiempo real — divisas, clima, cripto y más.",
    you: "Tu espacio",
    youSub: "Tu perfil, tus votos, tus encuestas y tus logros.",
    achievements: "Logros",
    music: "Música",
    pages: "páginas",
    browse: "Explorar",
    cta: "Crea tu encuesta gratis →",
    allTools: "Todas las herramientas",
  },
  it: {
    title: "Esplora moomz",
    sub: "Tutti i contenuti di moomz, in un unico posto. Scegli un formato, un tema — e tuffati.",
    polls: "Sondaggi moomz",
    pollsSub: "Il feed, la modalità scopri e la creazione di sondaggi.",
    templates: "Modelli di sondaggi",
    templatesSub: "Sondaggi pronti da lanciare — un tap riempie il modulo.",
    quiz: "Quiz",
    quizSub: "Quiz a scelta multipla con punteggio: scienza, cultura e altro.",
    compare: "Confronti",
    compareSub: "moomz contro altri strumenti e sfide testa a testa.",
    content: "Leggi e ispirati",
    contentSub: "Idee, guide, blog, citazioni, storie Read e musica.",
    tools: "Strumenti gratuiti",
    toolsSub: "Utilità in tempo reale — valute, meteo, cripto e altro.",
    you: "Il tuo spazio",
    youSub: "Il tuo profilo, i tuoi voti, i tuoi sondaggi e le tue imprese.",
    achievements: "Imprese",
    music: "Musica",
    pages: "pagine",
    browse: "Sfoglia",
    cta: "Crea il tuo sondaggio gratis →",
    allTools: "Tutti gli strumenti",
  },
  pt: {
    title: "Explorar moomz",
    sub: "Todo o conteúdo do moomz, num só lugar. Escolhe um formato, um tema — e mergulha.",
    polls: "Enquetes moomz",
    pollsSub: "O feed, o modo descobrir e a criação de enquetes.",
    templates: "Modelos de enquetes",
    templatesSub: "Enquetes prontas para lançar — um toque preenche o formulário.",
    quiz: "Quizzes",
    quizSub: "Quizzes de escolha múltipla com pontuação: ciência, cultura e mais.",
    compare: "Comparações",
    compareSub: "moomz contra outras ferramentas e duelos diretos.",
    content: "Ler e inspirar-se",
    contentSub: "Ideias, guias, blog, citações, histórias Read e música.",
    tools: "Ferramentas gratuitas",
    toolsSub: "Utilitários em tempo real — moedas, clima, cripto e mais.",
    you: "O teu espaço",
    youSub: "O teu perfil, os teus votos, as tuas enquetes e as tuas conquistas.",
    achievements: "Conquistas",
    music: "Música",
    pages: "páginas",
    browse: "Explorar",
    cta: "Cria a tua enquete grátis →",
    allTools: "Todas as ferramentas",
  },
  de: {
    title: "moomz entdecken",
    sub: "Alle moomz-Inhalte an einem Ort. Wähle ein Format, ein Thema — und tauch ein.",
    polls: "moomz-Umfragen",
    pollsSub: "Der Feed, der Entdecken-Modus und das Erstellen von Umfragen.",
    templates: "Umfrage-Vorlagen",
    templatesSub: "Startklare Umfragen — ein Tipp füllt das Formular aus.",
    quiz: "Quizze",
    quizSub: "Bewertete Multiple-Choice-Quizze: Wissenschaft, Kultur und mehr.",
    compare: "Vergleiche",
    compareSub: "moomz gegen andere Tools und direkte Duelle.",
    content: "Lesen & inspirieren",
    contentSub: "Ideen, Guides, Blog, Zitate, Read-Geschichten und Musik.",
    tools: "Kostenlose Tools",
    toolsSub: "Echtzeit-Tools — Währungen, Wetter, Krypto und mehr.",
    you: "Dein Bereich",
    youSub: "Dein Profil, deine Stimmen, deine Umfragen und deine Erfolge.",
    achievements: "Erfolge",
    music: "Musik",
    pages: "Seiten",
    browse: "Durchsuchen",
    cta: "Erstelle deine kostenlose Umfrage →",
    allTools: "Alle Tools",
  },
  ja: {
    title: "moomz を見る",
    sub: "moomz のすべてのコンテンツがここに。形式、トピックを選んで飛び込もう。",
    polls: "moomz の投票",
    pollsSub: "フィード、ディスカバー、そして投票の作成。",
    templates: "投票テンプレート",
    templatesSub: "すぐ使える投票 — タップ1つで作成フォームに反映。",
    quiz: "クイズ",
    quizSub: "採点付きの多肢選択クイズ — 科学、文化など。",
    compare: "比較",
    compareSub: "moomz と他ツールの比較、そして一騎打ち。",
    content: "読む・ひらめく",
    contentSub: "アイデア、ガイド、ブログ、名言、Read のストーリー、音楽。",
    tools: "無料ツール",
    toolsSub: "リアルタイムの便利ツール — 通貨、天気、仮想通貨など。",
    you: "あなたのスペース",
    youSub: "プロフィール、投票履歴、作成した投票、実績。",
    achievements: "実績",
    music: "ミュージック",
    pages: "ページ",
    browse: "見る",
    cta: "無料で投票を作成 →",
    allTools: "すべてのツール",
  },
  zh: {
    title: "探索 moomz",
    sub: "moomz 的所有内容，尽在一处。选择格式、主题 — 然后深入了解。",
    polls: "moomz 投票",
    pollsSub: "动态信息流、发现模式以及创建你自己的投票。",
    templates: "投票模板",
    templatesSub: "可直接使用的投票 — 轻点一下即填好创建表单。",
    quiz: "测验",
    quizSub: "带评分的多选测验：科学、文化等等。",
    compare: "对比",
    compareSub: "moomz 与其他工具对比，以及正面对决。",
    content: "阅读与灵感",
    contentSub: "创意、指南、博客、名言、Read 故事和音乐。",
    tools: "免费工具",
    toolsSub: "实时数据工具 — 货币、天气、加密货币等。",
    you: "你的空间",
    youSub: "你的资料、投票记录、发起的投票和成就。",
    achievements: "成就",
    music: "音乐",
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
    { emoji: "🎵", label: "Musique", href: "/music" },
  ],
  en: [
    { emoji: "💡", label: "Poll ideas", href: "/ideas" },
    { emoji: "📘", label: "Guides", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Quotes", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "Music", href: "/music" },
  ],
  es: [
    { emoji: "💡", label: "Ideas de encuestas", href: "/ideas" },
    { emoji: "📘", label: "Guías", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citas", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "Música", href: "/music" },
  ],
  it: [
    { emoji: "💡", label: "Idee per sondaggi", href: "/ideas" },
    { emoji: "📘", label: "Guide", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citazioni", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "Musica", href: "/music" },
  ],
  pt: [
    { emoji: "💡", label: "Ideias de enquetes", href: "/ideas" },
    { emoji: "📘", label: "Guias", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Citações", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "Música", href: "/music" },
  ],
  de: [
    { emoji: "💡", label: "Umfrage-Ideen", href: "/ideas" },
    { emoji: "📘", label: "Guides", href: "/guides" },
    { emoji: "✍️", label: "Blog", href: "/blog" },
    { emoji: "💬", label: "Zitate", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "Musik", href: "/music" },
  ],
  ja: [
    { emoji: "💡", label: "投票のアイデア", href: "/ideas" },
    { emoji: "📘", label: "ガイド", href: "/guides" },
    { emoji: "✍️", label: "ブログ", href: "/blog" },
    { emoji: "💬", label: "名言", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "ミュージック", href: "/music" },
  ],
  zh: [
    { emoji: "💡", label: "投票创意", href: "/ideas" },
    { emoji: "📘", label: "指南", href: "/guides" },
    { emoji: "✍️", label: "博客", href: "/blog" },
    { emoji: "💬", label: "名言", href: "/quotes" },
    { emoji: "📖", label: "Read", href: "/read" },
    { emoji: "🎵", label: "音乐", href: "/music" },
  ],
};

// Personal surfaces — links to the user's own account-area pages.
const YOU_LINKS: Record<HubLocale, { emoji: string; label: string; href: string }[]> = {
  fr: [
    { emoji: "🙋", label: "Mon profil", href: "/me" },
    { emoji: "🏅", label: "Haut faits", href: "/haut-faits" },
    { emoji: "🗳️", label: "Mes votes", href: "/mes-votes" },
    { emoji: "📊", label: "Mes sondages", href: "/mes-sondages" },
  ],
  en: [
    { emoji: "🙋", label: "My profile", href: "/me" },
    { emoji: "🏅", label: "Achievements", href: "/haut-faits" },
    { emoji: "🗳️", label: "My votes", href: "/mes-votes" },
    { emoji: "📊", label: "My polls", href: "/mes-sondages" },
  ],
  es: [
    { emoji: "🙋", label: "Mi perfil", href: "/me" },
    { emoji: "🏅", label: "Logros", href: "/haut-faits" },
    { emoji: "🗳️", label: "Mis votos", href: "/mes-votes" },
    { emoji: "📊", label: "Mis encuestas", href: "/mes-sondages" },
  ],
  it: [
    { emoji: "🙋", label: "Il mio profilo", href: "/me" },
    { emoji: "🏅", label: "Imprese", href: "/haut-faits" },
    { emoji: "🗳️", label: "I miei voti", href: "/mes-votes" },
    { emoji: "📊", label: "I miei sondaggi", href: "/mes-sondages" },
  ],
  pt: [
    { emoji: "🙋", label: "O meu perfil", href: "/me" },
    { emoji: "🏅", label: "Conquistas", href: "/haut-faits" },
    { emoji: "🗳️", label: "Os meus votos", href: "/mes-votes" },
    { emoji: "📊", label: "As minhas sondagens", href: "/mes-sondages" },
  ],
  de: [
    { emoji: "🙋", label: "Mein Profil", href: "/me" },
    { emoji: "🏅", label: "Erfolge", href: "/haut-faits" },
    { emoji: "🗳️", label: "Meine Stimmen", href: "/mes-votes" },
    { emoji: "📊", label: "Meine Umfragen", href: "/mes-sondages" },
  ],
  ja: [
    { emoji: "🙋", label: "マイプロフィール", href: "/me" },
    { emoji: "🏅", label: "実績", href: "/haut-faits" },
    { emoji: "🗳️", label: "投票履歴", href: "/mes-votes" },
    { emoji: "📊", label: "作成した投票", href: "/mes-sondages" },
  ],
  zh: [
    { emoji: "🙋", label: "我的资料", href: "/me" },
    { emoji: "🏅", label: "成就", href: "/haut-faits" },
    { emoji: "🗳️", label: "我的投票", href: "/mes-votes" },
    { emoji: "📊", label: "我的发起", href: "/mes-sondages" },
  ],
};

// Formation — practical self-improvement modules for 17-34 year olds.
const FORMATION_T: Record<HubLocale, { title: string; sub: string }> = {
  fr: { title: "Formation", sub: "Modules concrets : lookmaxxing, forme, argent, mental, études, style…" },
  en: { title: "Courses", sub: "Practical modules: looksmaxxing, fitness, money, mindset, studies, style…" },
  es: { title: "Cursos", sub: "Módulos prácticos: estética, forma física, dinero, mentalidad, estudios…" },
  it: { title: "Corsi", sub: "Moduli pratici: cura di sé, forma, soldi, mentalità, studio, stile…" },
  pt: { title: "Cursos", sub: "Módulos práticos: estética, forma, dinheiro, mentalidade, estudos…" },
  de: { title: "Kurse", sub: "Praktische Module: Looksmaxxing, Fitness, Geld, Mindset, Studium…" },
  ja: { title: "コース", sub: "実践モジュール:ルックスマックス、運動、お金、メンタル、勉強…" },
  zh: { title: "课程", sub: "实用模块：颜值提升、健身、赚钱、心态、学习、穿搭…" },
};

export default function ExplorePage() {
  const locale = getLocale();
  const hl: HubLocale = (
    ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as string[]
  ).includes(locale)
    ? (locale as HubLocale)
    : "en";

  const templateCount = getAllTemplates().length;

  const t = EXPLORE_T[hl] ?? EXPLORE_T.en;
  const contentLinks = CONTENT_LINKS[hl] ?? CONTENT_LINKS.en;
  const youLinks = YOU_LINKS[hl] ?? YOU_LINKS.en;
  const ft = FORMATION_T[hl] ?? FORMATION_T.en;

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

      {/* moomz polls — the core product surfaces */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🗳️ {t.polls}</h2>
          <p className="text-sm text-white/50">{t.pollsSub}</p>
        </div>
        <ul className="grid grid-cols-3 gap-3">
          {POLL_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="glass rounded-2xl px-4 py-4 hover:bg-white/10 transition flex flex-col items-center gap-1.5 h-full text-center"
              >
                <span className="text-2xl" aria-hidden="true">
                  {l.emoji}
                </span>
                <span className="font-display text-sm text-white">
                  {l.label[hl] ?? l.label.en}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Templates + Quiz + Compare */}
      <section className="grid gap-3 sm:grid-cols-3">
        <Link
          href={seoHref("template", hl)}
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
          href={seoHref("quiz", hl)}
          className="glass rounded-2xl p-5 hover:bg-white/10 transition flex flex-col gap-1"
        >
          <span className="text-3xl">🧠</span>
          <span className="font-display text-xl text-white mt-1">{t.quiz}</span>
          <span className="text-xs text-white/50">{t.quizSub}</span>
          <span className="text-xs text-pink-300/80 mt-1">{t.browse} →</span>
        </Link>
        <Link
          href={seoHref("compare", hl)}
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

      {/* Formation — practical self-improvement modules */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🎓 {ft.title}</h2>
          <p className="text-sm text-white/50">{ft.sub}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {FORMATION_THEMES.map((theme) => {
            const m = themeMetaFor(hl)[theme];
            return (
              <li key={theme}>
                <Link
                  href={seoHref("formation", hl)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
                >
                  <span aria-hidden="true">{m.emoji}</span>
                  {m.label}
                </Link>
              </li>
            );
          })}
        </ul>
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
                href={exploreHref(tool.href, hl)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{tool.emoji}</span>
                {tool.label[hl] ?? tool.label.en}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={seoHref("outils", hl)}
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
                href={exploreHref(l.href, hl)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-3.5 py-2 text-sm text-white/75 hover:text-white transition"
              >
                <span aria-hidden="true">{l.emoji}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Your space — personal account surfaces */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🙋 {t.you}</h2>
          <p className="text-sm text-white/50">{t.youSub}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {youLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="glass rounded-2xl px-4 py-4 hover:bg-white/10 transition flex flex-col items-center gap-1.5 h-full text-center"
              >
                <span className="text-2xl" aria-hidden="true">
                  {l.emoji}
                </span>
                <span className="font-display text-sm text-white">
                  {l.label}
                </span>
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
