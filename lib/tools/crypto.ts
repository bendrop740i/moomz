// Crypto prices tool — slug list + metadata + CoinGecko helpers.
//
// Slugs are CoinGecko coin IDs. We hit the public, key-less endpoints
// (rate-limited at ~10-50 req/min) and cache aggressively via
// `next.revalidate` so the build + ISR pages stay well under quota.
//
// All fetch helpers return `null` / `[]` on failure so the pages can render
// a "données momentanément indisponibles" line instead of crashing.

export const CRYPTO_SLUGS: string[] = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "solana",
  "ripple",
  "usd-coin",
  "cardano",
  "dogecoin",
  "tron",
  "avalanche-2",
  "chainlink",
  "polkadot",
  "polygon",
  "shiba-inu",
  "litecoin",
  "bitcoin-cash",
  "near",
  "internet-computer",
  "uniswap",
  "leo-token",
  "dai",
  "ethereum-classic",
  "monero",
  "stellar",
  "hedera-hashgraph",
  "aptos",
  "cosmos",
  "render-token",
  "filecoin",
];

export type CoinMeta = {
  symbol: string;
  name: string;
  emoji: string;
};

export const COIN_META: Record<string, CoinMeta> = {
  bitcoin: { symbol: "BTC", name: "Bitcoin", emoji: "₿" },
  ethereum: { symbol: "ETH", name: "Ethereum", emoji: "Ξ" },
  tether: { symbol: "USDT", name: "Tether", emoji: "💵" },
  binancecoin: { symbol: "BNB", name: "BNB", emoji: "🟡" },
  solana: { symbol: "SOL", name: "Solana", emoji: "🌞" },
  ripple: { symbol: "XRP", name: "XRP", emoji: "🌊" },
  "usd-coin": { symbol: "USDC", name: "USD Coin", emoji: "💲" },
  cardano: { symbol: "ADA", name: "Cardano", emoji: "🔷" },
  dogecoin: { symbol: "DOGE", name: "Dogecoin", emoji: "🐶" },
  tron: { symbol: "TRX", name: "TRON", emoji: "🎮" },
  "avalanche-2": { symbol: "AVAX", name: "Avalanche", emoji: "🔺" },
  chainlink: { symbol: "LINK", name: "Chainlink", emoji: "🔗" },
  polkadot: { symbol: "DOT", name: "Polkadot", emoji: "🟣" },
  polygon: { symbol: "MATIC", name: "Polygon", emoji: "🟪" },
  "shiba-inu": { symbol: "SHIB", name: "Shiba Inu", emoji: "🐕" },
  litecoin: { symbol: "LTC", name: "Litecoin", emoji: "Ł" },
  "bitcoin-cash": { symbol: "BCH", name: "Bitcoin Cash", emoji: "💰" },
  near: { symbol: "NEAR", name: "NEAR Protocol", emoji: "🌐" },
  "internet-computer": { symbol: "ICP", name: "Internet Computer", emoji: "♾️" },
  uniswap: { symbol: "UNI", name: "Uniswap", emoji: "🦄" },
  "leo-token": { symbol: "LEO", name: "LEO Token", emoji: "🦁" },
  dai: { symbol: "DAI", name: "Dai", emoji: "🪙" },
  "ethereum-classic": { symbol: "ETC", name: "Ethereum Classic", emoji: "⛓️" },
  monero: { symbol: "XMR", name: "Monero", emoji: "🕶️" },
  stellar: { symbol: "XLM", name: "Stellar", emoji: "⭐" },
  "hedera-hashgraph": { symbol: "HBAR", name: "Hedera", emoji: "🕸️" },
  aptos: { symbol: "APT", name: "Aptos", emoji: "🅰️" },
  cosmos: { symbol: "ATOM", name: "Cosmos", emoji: "⚛️" },
  "render-token": { symbol: "RNDR", name: "Render", emoji: "🎨" },
  filecoin: { symbol: "FIL", name: "Filecoin", emoji: "📦" },
};

export function isKnownCoin(slug: string): boolean {
  return CRYPTO_SLUGS.includes(slug);
}

export function getCoinMeta(slug: string): CoinMeta {
  return COIN_META[slug] ?? { symbol: slug.toUpperCase(), name: slug, emoji: "🪙" };
}

/** Related coins: pick up to `n` siblings, excluding self. */
export function relatedCoins(slug: string, n = 6): string[] {
  const out: string[] = [];
  for (const s of CRYPTO_SLUGS) {
    if (s === slug) continue;
    out.push(s);
    if (out.length >= n) break;
  }
  return out;
}

// ------------------------------------------------------------------
// CoinGecko fetchers (free, no key)
// ------------------------------------------------------------------

const API = "https://api.coingecko.com/api/v3";

export type MarketCoin = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number | null;
  total_volume: number;
  price_change_percentage_24h: number | null;
  image: string | null;
};

export async function fetchTopMarkets(perPage = 30): Promise<MarketCoin[]> {
  try {
    const url = `${API}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .map((d) => normalizeMarket(d))
      .filter((d): d is MarketCoin => d !== null);
  } catch {
    return [];
  }
}

function normalizeMarket(raw: unknown): MarketCoin | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  if (typeof r.id !== "string") return null;
  const num = (k: string): number => {
    const v = r[k];
    return typeof v === "number" && Number.isFinite(v) ? v : 0;
  };
  const numOrNull = (k: string): number | null => {
    const v = r[k];
    return typeof v === "number" && Number.isFinite(v) ? v : null;
  };
  return {
    id: r.id,
    symbol: typeof r.symbol === "string" ? r.symbol : "",
    name: typeof r.name === "string" ? r.name : r.id,
    current_price: num("current_price"),
    market_cap: num("market_cap"),
    market_cap_rank: numOrNull("market_cap_rank"),
    total_volume: num("total_volume"),
    price_change_percentage_24h: numOrNull("price_change_percentage_24h"),
    image: typeof r.image === "string" ? r.image : null,
  };
}

export type CoinDetail = {
  id: string;
  symbol: string;
  name: string;
  description_en: string;
  description_fr: string;
  homepage: string | null;
  image: string | null;
  genesis_date: string | null;
  market_cap_rank: number | null;
  // market_data
  price_eur: number;
  price_usd: number;
  change_24h_pct: number | null;
  market_cap_eur: number;
  total_volume_eur: number;
  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;
  ath_eur: number | null;
  ath_date_eur: string | null;
  atl_eur: number | null;
  atl_date_eur: string | null;
};

export async function fetchCoinDetail(slug: string): Promise<CoinDetail | null> {
  try {
    const url = `${API}/coins/${encodeURIComponent(slug)}?localization=true&tickers=false&community_data=false&developer_data=false&sparkline=false`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return null;
    const raw = (await res.json()) as unknown;
    if (!raw || typeof raw !== "object") return null;
    const r = raw as Record<string, unknown>;
    if (typeof r.id !== "string") return null;
    const desc = (r.description ?? {}) as Record<string, unknown>;
    const md = (r.market_data ?? {}) as Record<string, unknown>;
    const cp = (md.current_price ?? {}) as Record<string, unknown>;
    const mc = (md.market_cap ?? {}) as Record<string, unknown>;
    const tv = (md.total_volume ?? {}) as Record<string, unknown>;
    const ath = (md.ath ?? {}) as Record<string, unknown>;
    const athDate = (md.ath_date ?? {}) as Record<string, unknown>;
    const atl = (md.atl ?? {}) as Record<string, unknown>;
    const atlDate = (md.atl_date ?? {}) as Record<string, unknown>;
    const links = (r.links ?? {}) as Record<string, unknown>;
    const homepage = Array.isArray(links.homepage) && typeof links.homepage[0] === "string" ? (links.homepage[0] as string) : null;
    const image = (r.image ?? {}) as Record<string, unknown>;
    const num = (v: unknown): number => (typeof v === "number" && Number.isFinite(v) ? v : 0);
    const numOrNull = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);
    const str = (v: unknown): string => (typeof v === "string" ? v : "");
    const strOrNull = (v: unknown): string | null => (typeof v === "string" && v.length > 0 ? v : null);
    return {
      id: r.id,
      symbol: typeof r.symbol === "string" ? r.symbol : "",
      name: typeof r.name === "string" ? r.name : r.id,
      description_en: str(desc.en),
      description_fr: str(desc.fr) || str(desc.en),
      homepage: homepage && homepage.length > 0 ? homepage : null,
      image: typeof image.large === "string" ? (image.large as string) : typeof image.small === "string" ? (image.small as string) : null,
      genesis_date: strOrNull(r.genesis_date),
      market_cap_rank: numOrNull(r.market_cap_rank),
      price_eur: num(cp.eur),
      price_usd: num(cp.usd),
      change_24h_pct: numOrNull(md.price_change_percentage_24h),
      market_cap_eur: num(mc.eur),
      total_volume_eur: num(tv.eur),
      circulating_supply: numOrNull(md.circulating_supply),
      total_supply: numOrNull(md.total_supply),
      max_supply: numOrNull(md.max_supply),
      ath_eur: numOrNull(ath.eur),
      ath_date_eur: strOrNull(athDate.eur),
      atl_eur: numOrNull(atl.eur),
      atl_date_eur: strOrNull(atlDate.eur),
    };
  } catch {
    return null;
  }
}

export type ChartPoint = { ts: number; price: number };

export async function fetchMarketChart(slug: string, days = 30): Promise<ChartPoint[]> {
  try {
    const url = `${API}/coins/${encodeURIComponent(slug)}/market_chart?vs_currency=eur&days=${days}&interval=daily`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const data = (await res.json()) as unknown;
    if (!data || typeof data !== "object") return [];
    const prices = (data as Record<string, unknown>).prices;
    if (!Array.isArray(prices)) return [];
    const out: ChartPoint[] = [];
    for (const item of prices) {
      if (Array.isArray(item) && item.length >= 2) {
        const ts = item[0];
        const p = item[1];
        if (typeof ts === "number" && typeof p === "number" && Number.isFinite(p)) {
          out.push({ ts, price: p });
        }
      }
    }
    return out;
  } catch {
    return [];
  }
}

// ------------------------------------------------------------------
// Per-coin editorial blurbs (top 10 — substantive, real facts)
// ------------------------------------------------------------------

export const COIN_BLURBS_FR: Record<string, string> = {
  bitcoin:
    "Bitcoin est la toute première cryptomonnaie. Elle a été lancée le 3 janvier 2009 par un (ou plusieurs) développeur anonyme connu sous le pseudo de Satoshi Nakamoto, dans la foulée de la crise financière de 2008. Le réseau repose sur la blockchain, un registre public, immuable et décentralisé qui enregistre chaque transaction et est sécurisé par la preuve de travail (mineurs qui résolvent des problèmes cryptographiques). L'offre totale est plafonnée à 21 millions de BTC, ce qui en fait un actif déflationniste — un argument central pour ses partisans qui le voient comme « l'or numérique ». La récompense de bloc est divisée par deux tous les ~4 ans (halving), ce qui réduit progressivement l'émission. Bitcoin a vécu plusieurs cycles spectaculaires : quelques centimes en 2010, ~20 000 € fin 2017, plus de 60 000 € en 2021, puis l'adoption institutionnelle (ETF spot validés aux États-Unis en 2024) a marqué une nouvelle ère.",
  ethereum:
    "Ethereum est la deuxième plus grosse blockchain au monde par capitalisation. Lancée le 30 juillet 2015 par Vitalik Buterin et son équipe, elle a introduit les smart contracts : du code qui s'exécute automatiquement quand certaines conditions sont remplies. Cela a ouvert la voie à tout l'écosystème DeFi (finance décentralisée), aux NFT, aux DAO et à des milliers d'applications décentralisées (dApps). En septembre 2022, le réseau a opéré « The Merge », passant de la preuve de travail à la preuve d'enjeu (Proof of Stake), divisant sa consommation énergétique par ~99,95 %. ETH n'a pas de plafond d'offre dur, mais le mécanisme EIP-1559 brûle une partie des frais de gaz à chaque transaction, ce qui peut rendre l'offre déflationniste en période de forte activité. C'est la blockchain dominante pour les développeurs Web3.",
  tether:
    "Tether (USDT) est le plus gros stablecoin du marché crypto. Lancé en 2014, il vise à maintenir une parité 1:1 avec le dollar américain. Chaque USDT est censé être adossé à un dollar (ou équivalent : bons du Trésor, liquidités, autres actifs) détenu en réserve par Tether Limited. USDT existe sur de nombreuses chaînes (Ethereum, Tron, Solana, etc.) et sert de monnaie de référence pour la majorité des paires de trading sur les exchanges. Il est aussi très utilisé pour les transferts internationaux à faible coût, surtout dans des pays soumis à des contrôles de capitaux. La transparence des réserves de Tether a été régulièrement débattue, mais l'entreprise publie désormais des attestations trimestrielles et reste de loin le stablecoin le plus liquide.",
  binancecoin:
    "BNB est le token natif de l'écosystème Binance, le plus gros exchange crypto au monde. Lancé en 2017 lors d'une ICO sur Ethereum (puis migré sur sa propre chaîne en 2019), il sert à payer les frais de trading sur Binance avec une remise, à participer aux ventes de tokens sur Binance Launchpad, et à interagir avec la BNB Smart Chain — une blockchain compatible Ethereum mais plus rapide et moins chère. Binance brûle régulièrement des BNB chaque trimestre pour réduire l'offre, ce qui crée une pression déflationniste. L'offre initiale était de 200 millions et l'objectif final est de descendre à 100 millions. BNB est central pour quiconque utilise activement l'écosystème Binance.",
  solana:
    "Solana est une blockchain de couche 1 ultra-rapide, lancée en mars 2020 par Anatoly Yakovenko (ex-Qualcomm). Elle vise à concurrencer Ethereum sur la performance brute : jusqu'à ~65 000 transactions par seconde théoriques avec des frais de quelques centimes, grâce à une combinaison de Proof of History (un horodatage cryptographique) et de Proof of Stake. Cette vitesse en fait un terrain de jeu privilégié pour les NFT, les memecoins (BONK, WIF, etc.) et les applications DeFi à haute fréquence. Solana a connu plusieurs pannes réseau en 2022 qui ont entamé sa réputation, mais elle est revenue en force en 2024 portée par les memecoins. SOL sert à payer les frais et à staker pour sécuriser le réseau.",
  ripple:
    "XRP est le token natif du XRP Ledger, lancé en 2012 par Ripple Labs (Chris Larsen, Jed McCaleb, Arthur Britto). Conçu spécifiquement pour les paiements internationaux entre institutions financières, il permet des transferts en ~3 secondes pour une fraction de centime. Contrairement à Bitcoin, XRP n'est pas miné : 100 milliards de tokens ont été pré-émis à l'origine. Ripple Labs a affronté une longue bataille juridique avec la SEC américaine (2020-2023), qui a finalement statué que XRP n'est pas une security quand il est vendu sur les marchés secondaires — un précédent majeur pour le secteur. XRP est très utilisé en Asie et au Moyen-Orient via le réseau RippleNet.",
  "usd-coin":
    "USD Coin (USDC) est un stablecoin adossé au dollar américain, lancé en 2018 par Circle (en partenariat avec Coinbase au sein du consortium Centre). Chaque USDC est censé être garanti par un dollar ou équivalent (bons du Trésor américain à court terme, cash) détenu chez des banques régulées aux États-Unis. Circle publie des attestations mensuelles sur ses réserves. USDC est largement perçu comme plus transparent que Tether et est très utilisé dans la DeFi sur Ethereum, Solana, Base, Polygon, etc. Il existe sur 15+ chaînes. En mars 2023, USDC a brièvement perdu son peg (~0,87 $) suite à la faillite de Silicon Valley Bank, où Circle détenait ~3,3 milliards de dollars — mais il s'est rapidement rétabli quand les dépôts ont été garantis.",
  cardano:
    "Cardano (ADA) est une blockchain de troisième génération lancée en 2017 par Charles Hoskinson, l'un des cofondateurs d'Ethereum. Elle se distingue par son approche scientifique : chaque évolution majeure est précédée d'études académiques peer-reviewed. Cardano utilise la preuve d'enjeu Ouroboros et déploie ses fonctionnalités en phases nommées d'après des poètes ou mathématiciens (Byron, Shelley, Goguen, Basho, Voltaire). Les smart contracts sont arrivés en 2021 avec le hard fork Alonzo. L'écosystème est plus petit que celui d'Ethereum ou Solana mais bénéficie d'une communauté très fidèle et de partenariats en Éthiopie et en Afrique pour des cas d'usage liés à l'identité numérique. L'offre totale est plafonnée à 45 milliards d'ADA.",
  dogecoin:
    "Dogecoin (DOGE) a été créé en décembre 2013 par Billy Markus et Jackson Palmer comme une parodie de Bitcoin, basée sur le mème internet du Shiba Inu « Doge ». Initialement une blague, DOGE est devenu l'une des cryptos les plus connues au monde, propulsé par sa communauté très active et les tweets répétés d'Elon Musk en 2020-2021. C'est une preuve de travail (fork de Litecoin), avec un bloc toutes les minutes et une émission de 10 000 DOGE par bloc — pas de plafond d'offre, ce qui crée une inflation constante mais prévisible (~5 milliards de DOGE par an). DOGE est surtout utilisé pour les pourboires en ligne et les petits transferts. Son symbolisme « crypto fun et accessible » lui a valu une place culte.",
  tron:
    "TRON (TRX) est une blockchain lancée en 2017 par Justin Sun, focalisée sur le contenu numérique décentralisé et le divertissement. Elle utilise un mécanisme de Delegated Proof of Stake avec 27 « Super Representatives » qui valident les blocs. TRON est surtout connu aujourd'hui pour être le réseau dominant pour les transferts d'USDT — environ la moitié de l'offre totale de Tether circule sur TRON grâce à des frais quasi nuls et des transactions instantanées, ce qui en fait l'infrastructure préférée pour les remises internationales et les exchanges. L'acquisition de BitTorrent par TRON en 2018 a renforcé l'écosystème. TRX sert à payer les frais (« bandwidth » et « energy ») et à voter pour les Super Representatives.",
};

export const COIN_BLURBS_EN: Record<string, string> = {
  bitcoin:
    "Bitcoin is the first cryptocurrency, launched on January 3, 2009 by an anonymous developer (or group) known as Satoshi Nakamoto, in the wake of the 2008 financial crisis. It runs on a blockchain — a public, immutable, decentralized ledger that records every transaction and is secured by proof of work (miners solving cryptographic puzzles). Bitcoin's total supply is capped at 21 million BTC, which makes it deflationary by design — a key argument for those who call it \"digital gold.\" The block reward halves every ~4 years (the \"halving\"), gradually reducing new issuance. BTC has gone through several spectacular cycles: a few cents in 2010, ~$20,000 in late 2017, over $60,000 in 2021, and a new institutional era in 2024 with the launch of spot Bitcoin ETFs in the United States.",
  ethereum:
    "Ethereum is the second-largest blockchain by market cap. Launched on July 30, 2015 by Vitalik Buterin and his team, it pioneered smart contracts — code that executes automatically when conditions are met. This opened the door to the entire DeFi ecosystem, NFTs, DAOs, and thousands of decentralized applications (dApps). In September 2022, Ethereum completed \"The Merge,\" switching from proof of work to proof of stake and cutting its energy use by ~99.95%. ETH has no hard supply cap, but the EIP-1559 mechanism burns part of every transaction's gas fee, which can make the supply deflationary during high-activity periods. It remains the dominant blockchain for Web3 developers.",
  tether:
    "Tether (USDT) is the largest stablecoin in crypto. Launched in 2014, it aims to maintain a 1:1 peg with the US dollar. Each USDT is supposed to be backed by a dollar or equivalent (Treasury bills, cash, other assets) held in reserve by Tether Limited. USDT exists across many chains (Ethereum, Tron, Solana, etc.) and serves as the quote currency for the majority of trading pairs on exchanges. It's also widely used for low-cost international transfers, especially in countries with capital controls. The transparency of Tether's reserves has been a recurring debate, but the company now publishes quarterly attestations and USDT remains by far the most liquid stablecoin.",
  binancecoin:
    "BNB is the native token of the Binance ecosystem, the world's largest crypto exchange. Launched in 2017 via an ICO on Ethereum (then migrated to its own chain in 2019), BNB is used to pay Binance trading fees at a discount, to participate in token sales on Binance Launchpad, and to interact with the BNB Smart Chain — an Ethereum-compatible blockchain that's faster and cheaper. Binance burns BNB every quarter to reduce supply, creating deflationary pressure. The initial supply was 200 million; the long-term target is 100 million. BNB is central to anyone actively using the Binance ecosystem.",
  solana:
    "Solana is an ultra-fast layer-1 blockchain, launched in March 2020 by Anatoly Yakovenko (formerly at Qualcomm). It aims to compete with Ethereum on raw performance: up to ~65,000 theoretical transactions per second with cent-level fees, thanks to a combination of Proof of History (a cryptographic timestamping mechanism) and Proof of Stake. That speed makes it the playground of choice for NFTs, memecoins (BONK, WIF, etc.) and high-frequency DeFi. Solana suffered several network outages in 2022 that hurt its reputation, but it came back strong in 2024, driven by the memecoin boom. SOL is used to pay fees and to stake to secure the network.",
  ripple:
    "XRP is the native token of the XRP Ledger, launched in 2012 by Ripple Labs (Chris Larsen, Jed McCaleb, Arthur Britto). Designed specifically for cross-border payments between financial institutions, it enables transfers in ~3 seconds for a fraction of a cent. Unlike Bitcoin, XRP isn't mined: 100 billion tokens were pre-mined at genesis. Ripple Labs went through a long legal battle with the US SEC (2020-2023), which eventually ruled that XRP is not a security when sold on secondary markets — a major precedent for the industry. XRP is widely used in Asia and the Middle East via the RippleNet network.",
  "usd-coin":
    "USD Coin (USDC) is a US dollar-backed stablecoin launched in 2018 by Circle (in partnership with Coinbase via the Centre consortium). Each USDC is supposed to be backed by a dollar or equivalent (short-term US Treasury bills, cash) held at regulated US banks. Circle publishes monthly attestations of its reserves. USDC is widely seen as more transparent than Tether and is heavily used across DeFi on Ethereum, Solana, Base, Polygon, etc. It exists on 15+ chains. In March 2023, USDC briefly lost its peg (~$0.87) after the failure of Silicon Valley Bank, where Circle held ~$3.3 billion — but it quickly recovered once deposits were guaranteed.",
  cardano:
    "Cardano (ADA) is a third-generation blockchain launched in 2017 by Charles Hoskinson, one of Ethereum's cofounders. It stands out for its scientific approach: every major upgrade is preceded by peer-reviewed academic research. Cardano uses the Ouroboros proof-of-stake protocol and rolls out features in phases named after poets and mathematicians (Byron, Shelley, Goguen, Basho, Voltaire). Smart contracts arrived in 2021 with the Alonzo hard fork. The ecosystem is smaller than Ethereum's or Solana's but enjoys a very loyal community and partnerships in Ethiopia and Africa around digital identity. Total supply is capped at 45 billion ADA.",
  dogecoin:
    "Dogecoin (DOGE) was created in December 2013 by Billy Markus and Jackson Palmer as a Bitcoin parody, based on the Shiba Inu \"Doge\" internet meme. Originally a joke, DOGE has become one of the most recognized cryptos in the world, propelled by its very active community and repeated Elon Musk tweets in 2020-2021. It's a proof-of-work chain (a Litecoin fork) with one-minute blocks and 10,000 DOGE issued per block — no supply cap, which creates constant but predictable inflation (~5 billion DOGE per year). DOGE is mostly used for online tipping and small transfers. Its \"fun and accessible crypto\" branding earned it a cult following.",
  tron:
    "TRON (TRX) is a blockchain launched in 2017 by Justin Sun, focused on decentralized content and entertainment. It uses Delegated Proof of Stake with 27 \"Super Representatives\" who validate blocks. TRON is best known today for being the dominant network for USDT transfers — roughly half of all Tether supply circulates on TRON thanks to near-zero fees and instant transactions, making it the preferred infrastructure for remittances and exchange flows. TRON's 2018 acquisition of BitTorrent strengthened the ecosystem. TRX is used to pay fees (\"bandwidth\" and \"energy\") and to vote for Super Representatives.",
};

// ------------------------------------------------------------------
// Chart helpers — SVG sparkline geometry
// ------------------------------------------------------------------

export type ChartStats = {
  min: number;
  max: number;
  avg: number;
  first: number;
  last: number;
  changePct: number;
};

export function chartStats(points: ChartPoint[]): ChartStats {
  if (points.length === 0) {
    return { min: 0, max: 0, avg: 0, first: 0, last: 0, changePct: 0 };
  }
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (const p of points) {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
    sum += p.price;
  }
  const first = points[0].price;
  const last = points[points.length - 1].price;
  const changePct = first > 0 ? ((last - first) / first) * 100 : 0;
  return { min, max, avg: sum / points.length, first, last, changePct };
}

/**
 * Build the sparkline geometry for an SVG of the given viewBox dimensions.
 * Returns the `d` attribute of a `<path>` for the polyline and an area fill,
 * plus the projected coordinates for min/max markers.
 */
export function buildSparkline(
  points: ChartPoint[],
  width: number,
  height: number,
  padding = 4,
): { line: string; area: string; first: { x: number; y: number } | null; last: { x: number; y: number } | null } {
  if (points.length < 2) {
    return { line: "", area: "", first: null, last: null };
  }
  const stats = chartStats(points);
  const range = stats.max - stats.min;
  const safeRange = range > 0 ? range : 1;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const n = points.length;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i < n; i++) {
    const x = padding + (i / (n - 1)) * innerW;
    const y = padding + innerH - ((points[i].price - stats.min) / safeRange) * innerH;
    xs.push(x);
    ys.push(y);
  }
  let line = `M ${xs[0].toFixed(2)} ${ys[0].toFixed(2)}`;
  for (let i = 1; i < n; i++) {
    line += ` L ${xs[i].toFixed(2)} ${ys[i].toFixed(2)}`;
  }
  const area = `${line} L ${xs[n - 1].toFixed(2)} ${(padding + innerH).toFixed(2)} L ${xs[0].toFixed(2)} ${(padding + innerH).toFixed(2)} Z`;
  return {
    line,
    area,
    first: { x: xs[0], y: ys[0] },
    last: { x: xs[n - 1], y: ys[n - 1] },
  };
}

// ------------------------------------------------------------------
// Formatting (Intl-based, locale-aware)
// ------------------------------------------------------------------

const intlLocaleMap: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  es: "es-ES",
  it: "it-IT",
  pt: "pt-PT",
  de: "de-DE",
  ja: "ja-JP",
  zh: "zh-CN",
};

export function intlLocale(locale: string): string {
  return intlLocaleMap[locale] ?? "en-US";
}

/** Smart decimal selection: tiny prices get more decimals, big prices fewer. */
function smartDecimals(value: number): { min: number; max: number } {
  const abs = Math.abs(value);
  if (abs === 0) return { min: 2, max: 2 };
  if (abs < 0.0001) return { min: 6, max: 8 };
  if (abs < 0.01) return { min: 4, max: 6 };
  if (abs < 1) return { min: 2, max: 4 };
  if (abs < 100) return { min: 2, max: 4 };
  if (abs < 10000) return { min: 2, max: 2 };
  return { min: 0, max: 2 };
}

export function formatPrice(value: number, currency: "EUR" | "USD", locale: string): string {
  if (!Number.isFinite(value)) return "—";
  const { min, max } = smartDecimals(value);
  try {
    return new Intl.NumberFormat(intlLocale(locale), {
      style: "currency",
      currency,
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    }).format(value);
  } catch {
    return value.toFixed(max);
  }
}

export function formatNumber(value: number, locale: string, fractionDigits = 0): string {
  if (!Number.isFinite(value)) return "—";
  try {
    return new Intl.NumberFormat(intlLocale(locale), {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(value);
  } catch {
    return value.toFixed(fractionDigits);
  }
}

export function formatCompact(value: number, currency: "EUR" | "USD" | null, locale: string): string {
  if (!Number.isFinite(value)) return "—";
  try {
    if (currency) {
      return new Intl.NumberFormat(intlLocale(locale), {
        style: "currency",
        currency,
        notation: "compact",
        maximumFractionDigits: 2,
      }).format(value);
    }
    return new Intl.NumberFormat(intlLocale(locale), {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return value.toFixed(0);
  }
}

export function formatPct(value: number | null, locale: string): string {
  if (value === null || !Number.isFinite(value)) return "—";
  try {
    return new Intl.NumberFormat(intlLocale(locale), {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      signDisplay: "always",
    }).format(value) + " %";
  } catch {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)} %`;
  }
}

export function formatDate(iso: string | null, locale: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  try {
    return new Intl.DateTimeFormat(intlLocale(locale), {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(d);
  } catch {
    return iso.slice(0, 10);
  }
}

/** Strip HTML tags from a coin description, collapse whitespace, cap length. */
export function cleanDescription(html: string, maxChars = 1400): string {
  if (!html) return "";
  const noTags = html.replace(/<[^>]*>/g, " ");
  const collapsed = noTags.replace(/\s+/g, " ").trim();
  if (collapsed.length <= maxChars) return collapsed;
  const cut = collapsed.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}
