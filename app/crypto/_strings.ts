// i18n strings for the /crypto tool. Inlined here so the existing
// translation infra (lib/i18n.ts) doesn't need to grow for a single
// niche utility.

import type { Locale } from "@/lib/i18n";

export type CryptoStrings = {
  hubTitle: string;
  hubIntro: string;
  hubSubline: string;
  topCoins: string;
  otherCoins: string;
  rank: string;
  coin: string;
  price: string;
  change24h: string;
  marketCap: string;
  volume24h: string;
  last30Days: string;
  ath: string;
  athDate: string;
  atl: string;
  atlDate: string;
  circulatingSupply: string;
  maxSupply: string;
  totalSupply: string;
  unlimited: string;
  about: string;
  pollCta: string;
  pollCtaQuestion: (name: string) => string;
  pollCtaPriceQuestion: (name: string) => string;
  pollCtaButton: string;
  pollOptYes: string;
  pollOptNo: string;
  pollOptMaybe: string;
  relatedCoins: string;
  backToHub: string;
  unavailable: string;
  unavailableShort: string;
  poweredBy: string;
  rangeLow: string;
  rangeHigh: string;
  rangeAvg: string;
  currentPrice: string;
  symbol: string;
};

const FR: CryptoStrings = {
  hubTitle: "Prix des cryptos en direct",
  hubIntro: "Suis les prix, le market cap et l'évolution des 30 plus grosses cryptos.",
  hubSubline: "{n} cryptos suivies · mis à jour toutes les 10 minutes",
  topCoins: "Top cryptos",
  otherCoins: "Autres cryptos",
  rank: "Rang",
  coin: "Crypto",
  price: "Prix",
  change24h: "Variation 24 h",
  marketCap: "Capitalisation",
  volume24h: "Volume 24 h",
  last30Days: "Évolution sur 30 jours",
  ath: "Plus haut historique",
  athDate: "Date du plus haut",
  atl: "Plus bas historique",
  atlDate: "Date du plus bas",
  circulatingSupply: "Offre en circulation",
  maxSupply: "Offre maximale",
  totalSupply: "Offre totale",
  unlimited: "Illimitée",
  about: "À propos",
  pollCta: "Lance un sondage",
  pollCtaQuestion: (n) => `Tu crois encore en ${n} en 2026 ?`,
  pollCtaPriceQuestion: (n) => `${n} va exploser cette année ?`,
  pollCtaButton: "Créer le sondage",
  pollOptYes: "Oui",
  pollOptNo: "Non",
  pollOptMaybe: "Wait and see",
  relatedCoins: "Autres cryptos",
  backToHub: "Retour au top",
  unavailable: "Données momentanément indisponibles. Réessaie dans quelques minutes.",
  unavailableShort: "Données momentanément indisponibles",
  poweredBy: "Powered by CoinGecko · cours indicatifs",
  rangeLow: "Plus bas",
  rangeHigh: "Plus haut",
  rangeAvg: "Moyenne",
  currentPrice: "Prix actuel",
  symbol: "Symbole",
};

const EN: CryptoStrings = {
  hubTitle: "Live crypto prices",
  hubIntro: "Track prices, market cap and 30-day trends for the top 30 cryptos.",
  hubSubline: "{n} coins tracked · refreshed every 10 minutes",
  topCoins: "Top coins",
  otherCoins: "Other coins",
  rank: "Rank",
  coin: "Coin",
  price: "Price",
  change24h: "24h change",
  marketCap: "Market cap",
  volume24h: "24h volume",
  last30Days: "Last 30 days",
  ath: "All-time high",
  athDate: "ATH date",
  atl: "All-time low",
  atlDate: "ATL date",
  circulatingSupply: "Circulating supply",
  maxSupply: "Max supply",
  totalSupply: "Total supply",
  unlimited: "Unlimited",
  about: "About",
  pollCta: "Start a poll",
  pollCtaQuestion: (n) => `Do you still believe in ${n} in 2026?`,
  pollCtaPriceQuestion: (n) => `Will ${n} hit a new all-time high this year?`,
  pollCtaButton: "Create the poll",
  pollOptYes: "Yes",
  pollOptNo: "No",
  pollOptMaybe: "Wait and see",
  relatedCoins: "Other coins",
  backToHub: "Back to top coins",
  unavailable: "Data temporarily unavailable. Try again in a few minutes.",
  unavailableShort: "Data temporarily unavailable",
  poweredBy: "Powered by CoinGecko · prices indicative",
  rangeLow: "Low",
  rangeHigh: "High",
  rangeAvg: "Average",
  currentPrice: "Current price",
  symbol: "Symbol",
};

const ES: CryptoStrings = {
  hubTitle: "Precios de criptos en directo",
  hubIntro: "Sigue precios, capitalización y tendencias a 30 días de las 30 mayores criptos.",
  hubSubline: "{n} criptos seguidas · actualizado cada 10 minutos",
  topCoins: "Top criptos",
  otherCoins: "Otras criptos",
  rank: "Posición",
  coin: "Cripto",
  price: "Precio",
  change24h: "Cambio 24 h",
  marketCap: "Capitalización",
  volume24h: "Volumen 24 h",
  last30Days: "Últimos 30 días",
  ath: "Máximo histórico",
  athDate: "Fecha del máximo",
  atl: "Mínimo histórico",
  atlDate: "Fecha del mínimo",
  circulatingSupply: "Oferta en circulación",
  maxSupply: "Oferta máxima",
  totalSupply: "Oferta total",
  unlimited: "Ilimitada",
  about: "Acerca de",
  pollCta: "Crea una encuesta",
  pollCtaQuestion: (n) => `¿Sigues creyendo en ${n} en 2026?`,
  pollCtaPriceQuestion: (n) => `¿${n} marcará un nuevo récord este año?`,
  pollCtaButton: "Crear la encuesta",
  pollOptYes: "Sí",
  pollOptNo: "No",
  pollOptMaybe: "A esperar",
  relatedCoins: "Otras criptos",
  backToHub: "Volver al top",
  unavailable: "Datos no disponibles temporalmente. Inténtalo de nuevo en unos minutos.",
  unavailableShort: "Datos no disponibles",
  poweredBy: "Powered by CoinGecko · precios indicativos",
  rangeLow: "Mínimo",
  rangeHigh: "Máximo",
  rangeAvg: "Media",
  currentPrice: "Precio actual",
  symbol: "Símbolo",
};

const IT: CryptoStrings = {
  hubTitle: "Prezzi crypto in tempo reale",
  hubIntro: "Segui prezzi, capitalizzazione e andamento a 30 giorni delle 30 crypto principali.",
  hubSubline: "{n} crypto monitorate · aggiornato ogni 10 minuti",
  topCoins: "Top crypto",
  otherCoins: "Altre crypto",
  rank: "Posizione",
  coin: "Crypto",
  price: "Prezzo",
  change24h: "Variazione 24 h",
  marketCap: "Capitalizzazione",
  volume24h: "Volume 24 h",
  last30Days: "Ultimi 30 giorni",
  ath: "Massimo storico",
  athDate: "Data del massimo",
  atl: "Minimo storico",
  atlDate: "Data del minimo",
  circulatingSupply: "Offerta circolante",
  maxSupply: "Offerta massima",
  totalSupply: "Offerta totale",
  unlimited: "Illimitata",
  about: "Informazioni",
  pollCta: "Lancia un sondaggio",
  pollCtaQuestion: (n) => `Credi ancora in ${n} nel 2026?`,
  pollCtaPriceQuestion: (n) => `${n} farà un nuovo record quest'anno?`,
  pollCtaButton: "Crea il sondaggio",
  pollOptYes: "Sì",
  pollOptNo: "No",
  pollOptMaybe: "Aspettiamo",
  relatedCoins: "Altre crypto",
  backToHub: "Torna al top",
  unavailable: "Dati momentaneamente non disponibili. Riprova tra qualche minuto.",
  unavailableShort: "Dati non disponibili",
  poweredBy: "Powered by CoinGecko · prezzi indicativi",
  rangeLow: "Minimo",
  rangeHigh: "Massimo",
  rangeAvg: "Media",
  currentPrice: "Prezzo attuale",
  symbol: "Simbolo",
};

const PT: CryptoStrings = {
  hubTitle: "Preços de criptos em tempo real",
  hubIntro: "Acompanha preços, capitalização e tendências a 30 dias das 30 maiores criptos.",
  hubSubline: "{n} criptos seguidas · atualizado a cada 10 minutos",
  topCoins: "Top criptos",
  otherCoins: "Outras criptos",
  rank: "Posição",
  coin: "Cripto",
  price: "Preço",
  change24h: "Variação 24 h",
  marketCap: "Capitalização",
  volume24h: "Volume 24 h",
  last30Days: "Últimos 30 dias",
  ath: "Máximo histórico",
  athDate: "Data do máximo",
  atl: "Mínimo histórico",
  atlDate: "Data do mínimo",
  circulatingSupply: "Oferta em circulação",
  maxSupply: "Oferta máxima",
  totalSupply: "Oferta total",
  unlimited: "Ilimitada",
  about: "Sobre",
  pollCta: "Lança uma sondagem",
  pollCtaQuestion: (n) => `Ainda acreditas em ${n} em 2026?`,
  pollCtaPriceQuestion: (n) => `${n} vai bater um novo recorde este ano?`,
  pollCtaButton: "Criar sondagem",
  pollOptYes: "Sim",
  pollOptNo: "Não",
  pollOptMaybe: "Aguardar",
  relatedCoins: "Outras criptos",
  backToHub: "Voltar ao top",
  unavailable: "Dados temporariamente indisponíveis. Tenta novamente daqui a uns minutos.",
  unavailableShort: "Dados indisponíveis",
  poweredBy: "Powered by CoinGecko · preços indicativos",
  rangeLow: "Mínimo",
  rangeHigh: "Máximo",
  rangeAvg: "Média",
  currentPrice: "Preço atual",
  symbol: "Símbolo",
};

const DE: CryptoStrings = {
  hubTitle: "Krypto-Preise live",
  hubIntro: "Verfolge Preise, Marktkapitalisierung und 30-Tage-Trends der 30 größten Kryptos.",
  hubSubline: "{n} Kryptos im Blick · aktualisiert alle 10 Minuten",
  topCoins: "Top-Coins",
  otherCoins: "Weitere Coins",
  rank: "Rang",
  coin: "Krypto",
  price: "Preis",
  change24h: "24 h-Änderung",
  marketCap: "Marktkapitalisierung",
  volume24h: "24 h-Volumen",
  last30Days: "Letzte 30 Tage",
  ath: "Allzeithoch",
  athDate: "Datum Allzeithoch",
  atl: "Allzeittief",
  atlDate: "Datum Allzeittief",
  circulatingSupply: "Umlaufmenge",
  maxSupply: "Maximale Menge",
  totalSupply: "Gesamtmenge",
  unlimited: "Unbegrenzt",
  about: "Über",
  pollCta: "Umfrage starten",
  pollCtaQuestion: (n) => `Glaubst du noch an ${n} im Jahr 2026?`,
  pollCtaPriceQuestion: (n) => `Erreicht ${n} dieses Jahr ein neues Hoch?`,
  pollCtaButton: "Umfrage erstellen",
  pollOptYes: "Ja",
  pollOptNo: "Nein",
  pollOptMaybe: "Abwarten",
  relatedCoins: "Weitere Coins",
  backToHub: "Zurück zu den Top-Coins",
  unavailable: "Daten vorübergehend nicht verfügbar. Versuche es in ein paar Minuten erneut.",
  unavailableShort: "Daten nicht verfügbar",
  poweredBy: "Powered by CoinGecko · Preise indikativ",
  rangeLow: "Tief",
  rangeHigh: "Hoch",
  rangeAvg: "Durchschnitt",
  currentPrice: "Aktueller Preis",
  symbol: "Symbol",
};

const JA: CryptoStrings = {
  hubTitle: "暗号資産の価格をライブで",
  hubIntro: "上位30銘柄の価格、時価総額、30日間のトレンドを追跡。",
  hubSubline: "{n}銘柄を追跡中・10分ごとに更新",
  topCoins: "トップ銘柄",
  otherCoins: "その他の銘柄",
  rank: "順位",
  coin: "銘柄",
  price: "価格",
  change24h: "24時間変動",
  marketCap: "時価総額",
  volume24h: "24時間出来高",
  last30Days: "過去30日",
  ath: "史上最高値",
  athDate: "最高値の日付",
  atl: "史上最安値",
  atlDate: "最安値の日付",
  circulatingSupply: "流通供給量",
  maxSupply: "最大供給量",
  totalSupply: "総供給量",
  unlimited: "無制限",
  about: "概要",
  pollCta: "投票を作成",
  pollCtaQuestion: (n) => `2026年も${n}を信じますか？`,
  pollCtaPriceQuestion: (n) => `${n}は今年最高値を更新しますか？`,
  pollCtaButton: "投票を作成",
  pollOptYes: "はい",
  pollOptNo: "いいえ",
  pollOptMaybe: "様子見",
  relatedCoins: "その他の銘柄",
  backToHub: "一覧に戻る",
  unavailable: "データを一時的に取得できません。数分後にお試しください。",
  unavailableShort: "データを取得できません",
  poweredBy: "Powered by CoinGecko・参考価格",
  rangeLow: "最安",
  rangeHigh: "最高",
  rangeAvg: "平均",
  currentPrice: "現在の価格",
  symbol: "シンボル",
};

const ZH: CryptoStrings = {
  hubTitle: "加密货币实时价格",
  hubIntro: "追踪前30大加密货币的价格、市值与30天走势。",
  hubSubline: "已追踪{n}个币种・每10分钟更新一次",
  topCoins: "热门币种",
  otherCoins: "其他币种",
  rank: "排名",
  coin: "币种",
  price: "价格",
  change24h: "24小时涨跌",
  marketCap: "市值",
  volume24h: "24小时成交量",
  last30Days: "近30天",
  ath: "历史最高价",
  athDate: "最高价日期",
  atl: "历史最低价",
  atlDate: "最低价日期",
  circulatingSupply: "流通供应量",
  maxSupply: "最大供应量",
  totalSupply: "总供应量",
  unlimited: "无上限",
  about: "简介",
  pollCta: "创建投票",
  pollCtaQuestion: (n) => `你在2026年还相信${n}吗？`,
  pollCtaPriceQuestion: (n) => `${n}今年会创下新高吗？`,
  pollCtaButton: "创建投票",
  pollOptYes: "相信",
  pollOptNo: "不信",
  pollOptMaybe: "观望",
  relatedCoins: "其他币种",
  backToHub: "返回币种榜",
  unavailable: "数据暂时不可用，请几分钟后再试。",
  unavailableShort: "数据不可用",
  poweredBy: "由 CoinGecko 提供 · 价格仅供参考",
  rangeLow: "最低",
  rangeHigh: "最高",
  rangeAvg: "平均",
  currentPrice: "当前价格",
  symbol: "代号",
};

const STRINGS: Record<Locale, CryptoStrings> = {
  fr: FR,
  en: EN,
  es: ES,
  it: IT,
  pt: PT,
  de: DE,
  ja: JA,
  zh: ZH,
};

export function pickStrings(locale: string): CryptoStrings {
  return STRINGS[locale as Locale] ?? EN;
}
