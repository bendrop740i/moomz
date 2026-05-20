// Inline i18n strings for the /convertisseur surface. Kept here (not in
// lib/i18n.ts) per task constraints — this surface is self-contained.

export type ToolLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type ToolStrings = {
  hubTitle: string;
  hubIntro: string;
  hubSubline: string; // "{n} pairs · ..."
  popular: string;
  fromCurrency: string; // "From {c}"
  rateUnavailable: string;

  poweredBy: string;
  ctaHeadline: string;
  ctaBody: string;
  ctaButton: string;

  // Detail page
  breadcrumbHome: string;
  breadcrumbHub: string;
  rateLabel: string; // "1 EUR equals"
  updated: string;
  apiDown: string;
  conversionTable: string;
  amount: string;
  result: string;
  history30: string;
  minLabel: string;
  maxLabel: string;
  avgLabel: string;
  changeLabel: string;
  whyConvert: string;
  pollHeadline: string;
  pollBody: string;
  pollButton: string;
  relatedPairs: string;
  backToHub: string;
  source: string;          // "source"
  chartAria: string;       // accessible label for the 30-day sparkline
};

const fr: ToolStrings = {
  hubTitle: "Convertisseur de devises",
  hubIntro: "Taux de change en direct, historique 30 jours et conversion instantanée. Gratuit, sans inscription.",
  hubSubline: "{n} paires · mis à jour chaque heure",
  popular: "🔥 Paires populaires",
  fromCurrency: "Depuis le {c}",
  rateUnavailable: "Taux indisponible",
  poweredBy: "Propulsé par moomz",
  ctaHeadline: "Tu veux lancer un sondage sur les devises ?",
  ctaBody: "Crée un vibe check en 10 secondes : EUR contre dollar, crypto vs cash, ton avis intéresse.",
  ctaButton: "Créer mon sondage",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Convertisseur",
  rateLabel: "équivaut à",
  updated: "Mis à jour le",
  apiDown: "API momentanément indisponible — réessaie dans quelques minutes.",
  conversionTable: "Tableau de conversion",
  amount: "Montant",
  result: "Résultat",
  history30: "Historique 30 jours",
  minLabel: "min",
  maxLabel: "max",
  avgLabel: "moyenne",
  changeLabel: "variation",
  whyConvert: "Pourquoi convertir",
  pollHeadline: "Lance un sondage sur le sujet",
  pollBody: "Pose la question à ta communauté, vois la vibe en live.",
  pollButton: "Créer le sondage",
  relatedPairs: "Autres paires intéressantes",
  backToHub: "← Toutes les devises",
  source: "source",
  chartAria: "Évolution sur 30 jours",
};

const en: ToolStrings = {
  hubTitle: "Currency Converter",
  hubIntro: "Live exchange rates, 30-day history and instant conversion. Free, no signup.",
  hubSubline: "{n} pairs · updated hourly",
  popular: "🔥 Popular pairs",
  fromCurrency: "From {c}",
  rateUnavailable: "Rate unavailable",
  poweredBy: "Powered by moomz",
  ctaHeadline: "Want to run a poll about currencies?",
  ctaBody: "Spin up a vibe check in 10 seconds — EUR vs dollar, crypto vs cash, your community will weigh in.",
  ctaButton: "Create my poll",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Converter",
  rateLabel: "equals",
  updated: "Updated on",
  apiDown: "API temporarily unavailable — try again in a few minutes.",
  conversionTable: "Conversion table",
  amount: "Amount",
  result: "Result",
  history30: "Last 30 days",
  minLabel: "min",
  maxLabel: "max",
  avgLabel: "avg",
  changeLabel: "change",
  whyConvert: "Why convert",
  pollHeadline: "Start a poll about this",
  pollBody: "Ask your community, watch the vibe live.",
  pollButton: "Create the poll",
  relatedPairs: "Related pairs",
  backToHub: "← All currencies",
  source: "source",
  chartAria: "30-day trend",
};

const es: ToolStrings = {
  hubTitle: "Conversor de divisas",
  hubIntro: "Tasas de cambio en vivo, historial 30 días y conversión instantánea. Gratis, sin registro.",
  hubSubline: "{n} pares · actualizado cada hora",
  popular: "🔥 Pares populares",
  fromCurrency: "Desde {c}",
  rateUnavailable: "Tasa no disponible",
  poweredBy: "Impulsado por moomz",
  ctaHeadline: "¿Quieres lanzar una encuesta sobre divisas?",
  ctaBody: "Crea un vibe check en 10 segundos — EUR vs dólar, cripto vs cash, tu comunidad opinará.",
  ctaButton: "Crear mi encuesta",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Conversor",
  rateLabel: "equivale a",
  updated: "Actualizado el",
  apiDown: "API momentáneamente no disponible — inténtalo de nuevo en unos minutos.",
  conversionTable: "Tabla de conversión",
  amount: "Cantidad",
  result: "Resultado",
  history30: "Últimos 30 días",
  minLabel: "mín",
  maxLabel: "máx",
  avgLabel: "media",
  changeLabel: "variación",
  whyConvert: "Por qué convertir",
  pollHeadline: "Lanza una encuesta sobre el tema",
  pollBody: "Pregunta a tu comunidad, mira el vibe en vivo.",
  pollButton: "Crear la encuesta",
  relatedPairs: "Otros pares interesantes",
  backToHub: "← Todas las divisas",
  source: "fuente",
  chartAria: "Evolución de 30 días",
};

const it: ToolStrings = {
  hubTitle: "Convertitore di valute",
  hubIntro: "Tassi di cambio in tempo reale, storico 30 giorni e conversione istantanea. Gratis, senza registrazione.",
  hubSubline: "{n} coppie · aggiornato ogni ora",
  popular: "🔥 Coppie popolari",
  fromCurrency: "Da {c}",
  rateUnavailable: "Tasso non disponibile",
  poweredBy: "Powered by moomz",
  ctaHeadline: "Vuoi lanciare un sondaggio sulle valute?",
  ctaBody: "Crea un vibe check in 10 secondi — EUR vs dollaro, cripto vs contante, la tua community ti dirà.",
  ctaButton: "Crea il mio sondaggio",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Convertitore",
  rateLabel: "equivale a",
  updated: "Aggiornato il",
  apiDown: "API temporaneamente non disponibile — riprova tra qualche minuto.",
  conversionTable: "Tabella di conversione",
  amount: "Importo",
  result: "Risultato",
  history30: "Ultimi 30 giorni",
  minLabel: "min",
  maxLabel: "max",
  avgLabel: "media",
  changeLabel: "variazione",
  whyConvert: "Perché convertire",
  pollHeadline: "Lancia un sondaggio sull'argomento",
  pollBody: "Chiedi alla tua community, guarda la vibe in diretta.",
  pollButton: "Crea il sondaggio",
  relatedPairs: "Coppie correlate",
  backToHub: "← Tutte le valute",
  source: "fonte",
  chartAria: "Andamento a 30 giorni",
};

const pt: ToolStrings = {
  hubTitle: "Conversor de moedas",
  hubIntro: "Taxas de câmbio ao vivo, histórico 30 dias e conversão instantânea. Grátis, sem registro.",
  hubSubline: "{n} pares · atualizado a cada hora",
  popular: "🔥 Pares populares",
  fromCurrency: "De {c}",
  rateUnavailable: "Taxa indisponível",
  poweredBy: "Powered by moomz",
  ctaHeadline: "Quer lançar uma enquete sobre moedas?",
  ctaBody: "Crie um vibe check em 10 segundos — EUR vs dólar, cripto vs dinheiro, sua comunidade opina.",
  ctaButton: "Criar minha enquete",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Conversor",
  rateLabel: "equivale a",
  updated: "Atualizado em",
  apiDown: "API momentaneamente indisponível — tente novamente em alguns minutos.",
  conversionTable: "Tabela de conversão",
  amount: "Valor",
  result: "Resultado",
  history30: "Últimos 30 dias",
  minLabel: "mín",
  maxLabel: "máx",
  avgLabel: "média",
  changeLabel: "variação",
  whyConvert: "Por que converter",
  pollHeadline: "Lance uma enquete sobre o assunto",
  pollBody: "Pergunte à sua comunidade, veja a vibe ao vivo.",
  pollButton: "Criar a enquete",
  relatedPairs: "Pares relacionados",
  backToHub: "← Todas as moedas",
  source: "fonte",
  chartAria: "Evolução de 30 dias",
};

const de: ToolStrings = {
  hubTitle: "Währungsrechner",
  hubIntro: "Live-Wechselkurse, 30-Tage-Verlauf und sofortige Umrechnung. Kostenlos, ohne Anmeldung.",
  hubSubline: "{n} Paare · stündlich aktualisiert",
  popular: "🔥 Beliebte Paare",
  fromCurrency: "Von {c}",
  rateUnavailable: "Kurs nicht verfügbar",
  poweredBy: "Powered by moomz",
  ctaHeadline: "Eine Umfrage zu Währungen starten?",
  ctaBody: "Vibe-Check in 10 Sekunden — EUR vs. Dollar, Krypto vs. Bargeld, deine Community stimmt ab.",
  ctaButton: "Meine Umfrage erstellen",
  breadcrumbHome: "moomz",
  breadcrumbHub: "Rechner",
  rateLabel: "entspricht",
  updated: "Aktualisiert am",
  apiDown: "API vorübergehend nicht verfügbar — bitte später erneut versuchen.",
  conversionTable: "Umrechnungstabelle",
  amount: "Betrag",
  result: "Ergebnis",
  history30: "Letzte 30 Tage",
  minLabel: "Min",
  maxLabel: "Max",
  avgLabel: "Ø",
  changeLabel: "Veränderung",
  whyConvert: "Warum umrechnen",
  pollHeadline: "Starte eine Umfrage dazu",
  pollBody: "Frag deine Community, sieh die Vibes live.",
  pollButton: "Umfrage erstellen",
  relatedPairs: "Verwandte Paare",
  backToHub: "← Alle Währungen",
  source: "Quelle",
  chartAria: "30-Tage-Verlauf",
};

const ja: ToolStrings = {
  hubTitle: "通貨コンバーター",
  hubIntro: "リアルタイム為替レート、30日間の履歴、即時換算。無料・登録不要。",
  hubSubline: "{n}ペア · 毎時更新",
  popular: "🔥 人気のペア",
  fromCurrency: "{c}から",
  rateUnavailable: "レート取得不可",
  poweredBy: "moomz提供",
  ctaHeadline: "通貨に関するアンケートを作成しませんか？",
  ctaBody: "10秒でvibe checkを作成 — EUR対ドル、暗号資産対現金、コミュニティの声を集めよう。",
  ctaButton: "アンケートを作成",
  breadcrumbHome: "moomz",
  breadcrumbHub: "コンバーター",
  rateLabel: "は",
  updated: "更新日",
  apiDown: "APIが一時的に利用できません — 数分後に再度お試しください。",
  conversionTable: "換算表",
  amount: "金額",
  result: "結果",
  history30: "過去30日間",
  minLabel: "最小",
  maxLabel: "最大",
  avgLabel: "平均",
  changeLabel: "変動",
  whyConvert: "なぜ換算するのか",
  pollHeadline: "このテーマでアンケートを実施",
  pollBody: "コミュニティに質問して、リアルタイムでvibeを確認。",
  pollButton: "アンケートを作成",
  relatedPairs: "関連ペア",
  backToHub: "← すべての通貨",
  source: "出典",
  chartAria: "過去30日間の推移",
};

const zh: ToolStrings = {
  hubTitle: "货币转换器",
  hubIntro: "实时汇率、30天历史和即时换算。免费，无需注册。",
  hubSubline: "{n}对货币 · 每小时更新",
  popular: "🔥 热门货币对",
  fromCurrency: "从{c}",
  rateUnavailable: "汇率不可用",
  poweredBy: "moomz提供",
  ctaHeadline: "想发起一个关于货币的投票？",
  ctaBody: "10秒创建vibe check — 欧元对美元、加密货币对现金，听听你社区的看法。",
  ctaButton: "创建我的投票",
  breadcrumbHome: "moomz",
  breadcrumbHub: "转换器",
  rateLabel: "等于",
  updated: "更新于",
  apiDown: "API暂时不可用 — 请几分钟后重试。",
  conversionTable: "换算表",
  amount: "金额",
  result: "结果",
  history30: "过去30天",
  minLabel: "最小",
  maxLabel: "最大",
  avgLabel: "平均",
  changeLabel: "变动",
  whyConvert: "为什么换算",
  pollHeadline: "就此主题发起投票",
  pollBody: "向你的社区提问，实时查看反响。",
  pollButton: "创建投票",
  relatedPairs: "相关货币对",
  backToHub: "← 所有货币",
  source: "来源",
  chartAria: "30 天走势",
};

export const STRINGS: Record<ToolLocale, ToolStrings> = {
  fr, en, es, it, pt, de, ja, zh,
};

export function pickString(locale: string | undefined): ToolStrings {
  const l = (locale ?? "fr") as ToolLocale;
  return STRINGS[l] ?? STRINGS.fr;
}
