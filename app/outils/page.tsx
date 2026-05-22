import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

const META: Record<Locale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Outils — convertisseur, météo, crypto, horoscope · moomz",
    description: "Une boîte à outils gratuite et sans pub : convertisseur de devises, météo, fuseaux horaires, jours fériés, crypto, dictionnaire, photo NASA, recettes, horoscope. Le tout interconnecté avec les sondages moomz.",
    ogTitle: "Outils moomz — utilitaires gratuits",
    ogDesc: "Convertisseur, météo, crypto, horoscope, dictionnaire, jours fériés, NASA APOD… 9 outils gratuits sans clé API.",
  },
  en: {
    title: "Tools — currency converter, weather, crypto, horoscope · moomz",
    description: "A free, ad-free toolbox: currency converter, weather, world clocks, public holidays, crypto, dictionary, NASA photo, recipes, horoscope. All interlinked with moomz polls.",
    ogTitle: "moomz tools — free utilities",
    ogDesc: "Currency converter, weather, crypto, horoscope, dictionary, public holidays, NASA APOD… 9 free tools, no API key needed.",
  },
  es: {
    title: "Herramientas — conversor, tiempo, cripto, horóscopo · moomz",
    description: "Una caja de herramientas gratuita y sin anuncios: conversor de divisas, tiempo, husos horarios, festivos, cripto, diccionario, foto NASA, recetas, horóscopo.",
    ogTitle: "Herramientas moomz — utilidades gratis",
    ogDesc: "Conversor, tiempo, cripto, horóscopo, diccionario, festivos, NASA APOD… 9 herramientas gratis sin clave API.",
  },
  it: {
    title: "Strumenti — convertitore, meteo, crypto, oroscopo · moomz",
    description: "Una cassetta degli attrezzi gratuita e senza pubblicità: convertitore di valute, meteo, fusi orari, festivi, crypto, dizionario, foto NASA, ricette, oroscopo.",
    ogTitle: "Strumenti moomz — utilità gratuite",
    ogDesc: "Convertitore, meteo, crypto, oroscopo, dizionario, festivi, NASA APOD… 9 strumenti gratis senza chiave API.",
  },
  pt: {
    title: "Ferramentas — conversor, tempo, cripto, horóscopo · moomz",
    description: "Uma caixa de ferramentas gratuita e sem anúncios: conversor de moedas, tempo, fusos horários, feriados, cripto, dicionário, foto NASA, receitas, horóscopo.",
    ogTitle: "Ferramentas moomz — utilitários gratuitos",
    ogDesc: "Conversor, tempo, cripto, horóscopo, dicionário, feriados, NASA APOD… 9 ferramentas grátis sem chave de API.",
  },
  de: {
    title: "Tools — Währungsrechner, Wetter, Krypto, Horoskop · moomz",
    description: "Ein kostenloser Werkzeugkasten ohne Werbung: Währungsrechner, Wetter, Weltzeit, Feiertage, Krypto, Wörterbuch, NASA-Foto, Rezepte, Horoskop.",
    ogTitle: "moomz-Tools — kostenlose Werkzeuge",
    ogDesc: "Währungsrechner, Wetter, Krypto, Horoskop, Wörterbuch, Feiertage, NASA APOD… 9 kostenlose Tools ohne API-Schlüssel.",
  },
  ja: {
    title: "ツール — 通貨換算、天気、暗号資産、星占い · moomz",
    description: "無料・広告なしのツールボックス：通貨換算、天気、世界時計、祝日、暗号資産、辞書、NASA写真、レシピ、星占い。moomz投票と連携。",
    ogTitle: "moomz ツール — 無料ユーティリティ",
    ogDesc: "通貨換算、天気、暗号資産、星占い、辞書、祝日、NASA APOD…APIキー不要の9つの無料ツール。",
  },
  zh: {
    title: "工具 — 货币换算、天气、加密货币、星座 · moomz",
    description: "免费无广告工具箱：货币换算、天气、世界时钟、公共假期、加密货币、词典、NASA图片、食谱、星座运势。与 moomz 投票深度联动。",
    ogTitle: "moomz 工具 — 免费实用工具",
    ogDesc: "货币换算、天气、加密货币、星座、词典、公共假期、NASA APOD…9 个无需 API 密钥的免费工具。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = META[locale] ?? META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: canonicalUrl(),
    },
    twitter: { card: "summary_large_image" },
  };
}

type ToolDef = {
  slug: string;
  href: string;
  emoji: string;
  count: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tag: Record<Locale, string>;
};

const TOOLS: ToolDef[] = [
  {
    slug: "convertisseur",
    href: "/convertisseur",
    emoji: "💱",
    count: 58,
    title: {
      fr: "Convertisseur de devises",
      en: "Currency converter",
      es: "Conversor de divisas",
      it: "Convertitore di valute",
      pt: "Conversor de moedas",
      de: "Währungsrechner",
      ja: "通貨換算ツール",
      zh: "货币换算器",
    },
    description: {
      fr: "Taux EUR / USD / GBP / JPY et 12 autres devises, mis à jour chaque heure, avec historique 30 jours.",
      en: "Live EUR / USD / GBP / JPY rates plus 12 more currencies, updated hourly, with 30-day history.",
      es: "Tipos de cambio en vivo de 15 monedas, actualizados cada hora.",
      it: "Tassi di cambio live di 15 valute, aggiornati ogni ora.",
      pt: "Taxas de câmbio em tempo real de 15 moedas, atualizadas a cada hora.",
      de: "Live-Wechselkurse von 15 Währungen, stündlich aktualisiert.",
      ja: "15通貨のライブ為替レート、1時間ごとに更新。",
      zh: "15 种货币的实时汇率，每小时更新。",
    },
    tag: { fr: "Frankfurter API", en: "Frankfurter API", es: "Frankfurter API", it: "Frankfurter API", pt: "Frankfurter API", de: "Frankfurter API", ja: "Frankfurter API", zh: "Frankfurter API" },
  },
  {
    slug: "meteo",
    href: "/meteo",
    emoji: "🌤️",
    count: 50,
    title: {
      fr: "Météo des grandes villes",
      en: "Weather in major cities",
      es: "Clima de las grandes ciudades",
      it: "Meteo delle grandi città",
      pt: "Tempo das grandes cidades",
      de: "Wetter in Großstädten",
      ja: "世界の主要都市の天気",
      zh: "世界主要城市天气",
    },
    description: {
      fr: "Prévisions à 7 jours pour 50 villes du monde, températures, vent, humidité, lever et coucher du soleil.",
      en: "7-day forecast for 50 cities worldwide: temperature, wind, humidity, sunrise and sunset.",
      es: "Previsión de 7 días para 50 ciudades del mundo.",
      it: "Previsioni a 7 giorni per 50 città in tutto il mondo.",
      pt: "Previsão de 7 dias para 50 cidades em todo o mundo.",
      de: "7-Tage-Vorhersage für 50 Städte weltweit.",
      ja: "世界50都市の7日間予報。",
      zh: "全球 50 座城市的 7 天天气预报。",
    },
    tag: { fr: "Open-Meteo", en: "Open-Meteo", es: "Open-Meteo", it: "Open-Meteo", pt: "Open-Meteo", de: "Open-Meteo", ja: "Open-Meteo", zh: "Open-Meteo" },
  },
  {
    slug: "heure",
    href: "/heure",
    emoji: "🕐",
    count: 56,
    title: {
      fr: "Heure dans le monde",
      en: "Time around the world",
      es: "Hora en el mundo",
      it: "Ora nel mondo",
      pt: "Hora no mundo",
      de: "Weltzeit",
      ja: "世界時計",
      zh: "世界时间",
    },
    description: {
      fr: "Horloge live pour 56 villes, décalages horaires, lever et coucher du soleil.",
      en: "Live clocks for 56 cities, time differences, sunrise and sunset.",
      es: "Relojes en vivo de 56 ciudades, diferencia horaria.",
      it: "Orologi live di 56 città, fusi orari.",
      pt: "Relógios ao vivo de 56 cidades, fusos horários.",
      de: "Live-Uhren für 56 Städte, Zeitzonen.",
      ja: "56都市のライブ時計、時差表示。",
      zh: "56 座城市的实时时钟、时差对照。",
    },
    tag: { fr: "Intl.DateTimeFormat", en: "Intl.DateTimeFormat", es: "Intl.DateTimeFormat", it: "Intl.DateTimeFormat", pt: "Intl.DateTimeFormat", de: "Intl.DateTimeFormat", ja: "Intl.DateTimeFormat", zh: "Intl.DateTimeFormat" },
  },
  {
    slug: "jours-feries",
    href: "/jours-feries",
    emoji: "🎉",
    count: 60,
    title: {
      fr: "Jours fériés",
      en: "Public holidays",
      es: "Días festivos",
      it: "Giorni festivi",
      pt: "Feriados",
      de: "Feiertage",
      ja: "祝日カレンダー",
      zh: "公共假期",
    },
    description: {
      fr: "Calendrier complet 2026 et 2027 pour 30 pays, avec compteurs de ponts et jours fériés tombant le week-end.",
      en: "Full 2026 and 2027 calendars for 30 countries, with long-weekend counters.",
      es: "Calendario 2026 y 2027 para 30 países.",
      it: "Calendario 2026 e 2027 per 30 paesi.",
      pt: "Calendário 2026 e 2027 para 30 países.",
      de: "Vollständiger Kalender 2026 und 2027 für 30 Länder.",
      ja: "30か国の2026・2027年祝日カレンダー。",
      zh: "30 个国家 2026 与 2027 年完整假期日历。",
    },
    tag: { fr: "Nager.Date API", en: "Nager.Date API", es: "Nager.Date API", it: "Nager.Date API", pt: "Nager.Date API", de: "Nager.Date API", ja: "Nager.Date API", zh: "Nager.Date API" },
  },
  {
    slug: "crypto",
    href: "/crypto",
    emoji: "₿",
    count: 30,
    title: {
      fr: "Cours crypto en direct",
      en: "Live crypto prices",
      es: "Precios cripto en vivo",
      it: "Prezzi crypto live",
      pt: "Preços de cripto ao vivo",
      de: "Live-Krypto-Kurse",
      ja: "暗号資産ライブ価格",
      zh: "实时加密货币价格",
    },
    description: {
      fr: "Top 30 cryptos par capitalisation : prix EUR / USD, évolution 30 jours, all-time high.",
      en: "Top 30 cryptos by market cap: EUR / USD price, 30-day chart, all-time high.",
      es: "Las 30 criptos principales por capitalización.",
      it: "Le 30 cripto principali per capitalizzazione.",
      pt: "As 30 principais criptos por capitalização.",
      de: "Top 30 Kryptowährungen nach Marktkapitalisierung.",
      ja: "時価総額トップ30の暗号資産。",
      zh: "按市值排名前 30 的加密货币。",
    },
    tag: { fr: "CoinGecko", en: "CoinGecko", es: "CoinGecko", it: "CoinGecko", pt: "CoinGecko", de: "CoinGecko", ja: "CoinGecko", zh: "CoinGecko" },
  },
  {
    slug: "definition",
    href: "/definition",
    emoji: "📖",
    count: 132,
    title: {
      fr: "Dictionnaire FR + EN",
      en: "Dictionary FR + EN",
      es: "Diccionario FR + EN",
      it: "Dizionario FR + EN",
      pt: "Dicionário FR + EN",
      de: "Wörterbuch FR + EN",
      ja: "辞書 FR + EN",
      zh: "FR + EN 词典",
    },
    description: {
      fr: "Définitions, étymologie et exemples pour 132 mots du quotidien et de l'argot Gen Z.",
      en: "Definitions, etymology and examples for 132 everyday and Gen Z slang words.",
      es: "Definiciones, etimología y ejemplos para 132 palabras.",
      it: "Definizioni, etimologia ed esempi per 132 parole.",
      pt: "Definições, etimologia e exemplos para 132 palavras.",
      de: "Definitionen, Etymologie und Beispiele für 132 Wörter.",
      ja: "日常語とGen Zスラング132語の定義と例文。",
      zh: "132 个日常和 Gen Z 俚语词的释义、词源和例句。",
    },
    tag: { fr: "moomz", en: "moomz", es: "moomz", it: "moomz", pt: "moomz", de: "moomz", ja: "moomz", zh: "moomz" },
  },
  {
    slug: "cosmos",
    href: "/cosmos",
    emoji: "🌌",
    count: 60,
    title: {
      fr: "Cosmos du jour (NASA)",
      en: "Cosmos of the day (NASA)",
      es: "Cosmos del día (NASA)",
      it: "Cosmo del giorno (NASA)",
      pt: "Cosmos do dia (NASA)",
      de: "Kosmos des Tages (NASA)",
      ja: "今日の宇宙 (NASA)",
      zh: "每日宇宙图（NASA）",
    },
    description: {
      fr: "L'astronomy picture of the day de la NASA + archives des 60 derniers jours.",
      en: "NASA's astronomy picture of the day, with 60-day archives.",
      es: "La foto astronómica del día de NASA con 60 días de archivos.",
      it: "La foto astronomica del giorno della NASA con archivi a 60 giorni.",
      pt: "A foto astronómica do dia da NASA com 60 dias de arquivos.",
      de: "NASA-Astronomiebild des Tages mit 60-Tage-Archiv.",
      ja: "NASAの今日の天文写真と60日間のアーカイブ。",
      zh: "NASA 每日天文图，含 60 天档案。",
    },
    tag: { fr: "NASA APOD", en: "NASA APOD", es: "NASA APOD", it: "NASA APOD", pt: "NASA APOD", de: "NASA APOD", ja: "NASA APOD", zh: "NASA APOD" },
  },
  {
    slug: "recettes",
    href: "/recettes",
    emoji: "🍽️",
    count: 20,
    title: {
      fr: "Recettes par ingrédient",
      en: "Recipes by ingredient",
      es: "Recetas por ingrediente",
      it: "Ricette per ingrediente",
      pt: "Receitas por ingrediente",
      de: "Rezepte nach Zutat",
      ja: "食材別レシピ",
      zh: "按食材分类的食谱",
    },
    description: {
      fr: "20 catégories pour trouver l'idée du soir : poulet, bœuf, saumon, pâtes, dessert…",
      en: "20 categories to find tonight's idea: chicken, beef, salmon, pasta, dessert…",
      es: "20 categorías para encontrar la idea de hoy.",
      it: "20 categorie per trovare l'idea per stasera.",
      pt: "20 categorias para encontrar a ideia desta noite.",
      de: "20 Kategorien für die Idee des Abends.",
      ja: "今夜のアイデアを見つける20カテゴリ。",
      zh: "20 个类别帮你找到今晚的灵感。",
    },
    tag: { fr: "TheMealDB", en: "TheMealDB", es: "TheMealDB", it: "TheMealDB", pt: "TheMealDB", de: "TheMealDB", ja: "TheMealDB", zh: "TheMealDB" },
  },
  {
    slug: "astro",
    href: "/astro",
    emoji: "♈",
    count: 12,
    title: {
      fr: "Horoscope & signes",
      en: "Horoscope & signs",
      es: "Horóscopo y signos",
      it: "Oroscopo e segni",
      pt: "Horóscopo e signos",
      de: "Horoskop & Sternzeichen",
      ja: "星座占い",
      zh: "星座运势",
    },
    description: {
      fr: "Les 12 signes : traits, compatibilités et vibe de la semaine. Avec calculateur date → signe.",
      en: "All 12 signs: traits, compatibilities and weekly vibe. With date → sign finder.",
      es: "Los 12 signos: rasgos, compatibilidades y vibra semanal.",
      it: "I 12 segni: tratti, compatibilità e vibe settimanale.",
      pt: "Os 12 signos: traços, compatibilidades e vibe semanal.",
      de: "Alle 12 Sternzeichen: Eigenschaften und Kompatibilitäten.",
      ja: "12星座の性格、相性、今週のバイブス。",
      zh: "12 星座的特征、相配关系、本周氛围。",
    },
    tag: { fr: "moomz", en: "moomz", es: "moomz", it: "moomz", pt: "moomz", de: "moomz", ja: "moomz", zh: "moomz" },
  },
];

const HUB_STRINGS: Record<Locale, {
  h1: string;
  sub: string;
  intro: string;
  pageCount: string;
  toolsWord: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}> = {
  fr: {
    h1: "Outils moomz",
    sub: "9 utilitaires gratuits · sans pub · sans clé API",
    intro: "Des petits outils pratiques, branchés sur des API publiques et interconnectés aux sondages moomz.",
    pageCount: "pages",
    toolsWord: "outils",
    ctaTitle: "Et tu peux toujours créer ton sondage",
    ctaBody: "Chaque outil propose un sondage tout fait pour lancer une discussion. Ou crée le tien en 10 secondes.",
    ctaButton: "Créer un sondage",
  },
  en: {
    h1: "moomz tools",
    sub: "9 free utilities · no ads · no API key",
    intro: "Handy little tools, plugged into public APIs and interlinked with moomz polls.",
    pageCount: "pages",
    toolsWord: "tools",
    ctaTitle: "And you can always make your own poll",
    ctaBody: "Every tool comes with a ready-made poll to spark a chat. Or craft yours in 10 seconds.",
    ctaButton: "Create a poll",
  },
  es: {
    h1: "Herramientas moomz",
    sub: "9 utilidades gratis · sin anuncios · sin clave API",
    intro: "Pequeñas herramientas útiles, conectadas a APIs públicas e integradas con las encuestas de moomz.",
    pageCount: "páginas",
    toolsWord: "herramientas",
    ctaTitle: "Y siempre puedes crear tu propia encuesta",
    ctaBody: "Cada herramienta incluye una encuesta lista para iniciar conversación.",
    ctaButton: "Crear una encuesta",
  },
  it: {
    h1: "Strumenti moomz",
    sub: "9 utilità gratuite · senza pubblicità · senza chiave API",
    intro: "Piccoli strumenti utili, collegati ad API pubbliche e ai sondaggi di moomz.",
    pageCount: "pagine",
    toolsWord: "strumenti",
    ctaTitle: "E puoi sempre creare il tuo sondaggio",
    ctaBody: "Ogni strumento include un sondaggio pronto per iniziare la conversazione.",
    ctaButton: "Crea un sondaggio",
  },
  pt: {
    h1: "Ferramentas moomz",
    sub: "9 utilitários grátis · sem anúncios · sem chave de API",
    intro: "Pequenas ferramentas úteis, ligadas a APIs públicas e às enquetes da moomz.",
    pageCount: "páginas",
    toolsWord: "ferramentas",
    ctaTitle: "E você sempre pode criar sua enquete",
    ctaBody: "Cada ferramenta vem com uma enquete pronta para iniciar uma conversa.",
    ctaButton: "Criar uma enquete",
  },
  de: {
    h1: "moomz-Tools",
    sub: "9 kostenlose Werkzeuge · ohne Werbung · ohne API-Schlüssel",
    intro: "Kleine nützliche Tools, verbunden mit öffentlichen APIs und moomz-Umfragen.",
    pageCount: "Seiten",
    toolsWord: "Tools",
    ctaTitle: "Du kannst jederzeit deine eigene Umfrage erstellen",
    ctaBody: "Jedes Tool enthält eine fertige Umfrage für den Gesprächseinstieg.",
    ctaButton: "Umfrage erstellen",
  },
  ja: {
    h1: "moomz ツール",
    sub: "9つの無料ユーティリティ · 広告なし · APIキー不要",
    intro: "公開APIに繋がり、moomz投票と連動した便利な小さなツール群。",
    pageCount: "ページ",
    toolsWord: "ツール",
    ctaTitle: "もちろん自分で投票も作れます",
    ctaBody: "各ツールに会話のきっかけになる投票テンプレが付いています。",
    ctaButton: "投票を作る",
  },
  zh: {
    h1: "moomz 工具",
    sub: "9 个免费工具 · 无广告 · 无需 API 密钥",
    intro: "实用小工具，接入公开 API，并与 moomz 投票深度联动。",
    pageCount: "页",
    toolsWord: "工具",
    ctaTitle: "你也可以创建自己的投票",
    ctaBody: "每个工具都附带一个现成投票，方便发起讨论。",
    ctaButton: "创建投票",
  },
};

export default function OutilsHub() {
  const locale = getLocale() as Locale;
  const t = HUB_STRINGS[locale] ?? HUB_STRINGS.en;
  const totalPages = TOOLS.reduce((s, x) => s + x.count, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.h1,
    description: t.intro,
    url: "https://moomz.com/outils",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: TOOLS.length,
      itemListElement: TOOLS.map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: tool.title[locale] ?? tool.title.en,
        url: `https://moomz.com${tool.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <HubNav locale={locale} current="tools" />
        <header className="text-center space-y-2">
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {t.h1}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {t.sub}
          </p>
          <p className="text-white/40 text-sm">
            {TOOLS.length} {t.toolsWord} · {totalPages} {t.pageCount}
          </p>
        </header>

        <p className="text-white/60 text-center max-w-md mx-auto text-sm">{t.intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="glass block rounded-2xl p-4 hover:scale-[1.01] active:scale-[0.99] transition group"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl shrink-0" aria-hidden>
                  {tool.emoji}
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <h2 className="font-bold text-base leading-snug group-hover:text-white">
                    {tool.title[locale] ?? tool.title.en}
                  </h2>
                  <p className="text-white/55 text-xs leading-snug line-clamp-2">
                    {tool.description[locale] ?? tool.description.en}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-white/40 pt-0.5">
                    <span>{tool.count} {t.pageCount}</span>
                    <span aria-hidden>·</span>
                    <span className="uppercase tracking-wider">{tool.tag[locale]}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{t.ctaTitle}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{t.ctaBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {t.ctaButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
