// Currency converter — slug list + metadata + helpers.
//
// Pairs are generated programmatically from the BASE_BASES set so it stays
// easy to expand later. Slugs are lowercase `<from>-<to>` strings.

export type CurrencyCode =
  | "EUR" | "USD" | "GBP" | "JPY" | "CHF" | "CAD" | "AUD" | "CNY"
  | "INR" | "BRL" | "MXN" | "TRY" | "SEK" | "NOK" | "PLN";

type CurrencyInfo = {
  name_fr: string;
  name_en: string;
  flag: string;
  /** Approx country/region the currency is most associated with (FR) */
  region_fr: string;
  /** Approx country/region the currency is most associated with (EN) */
  region_en: string;
};

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  EUR: { name_fr: "Euro",                name_en: "Euro",                flag: "🇪🇺", region_fr: "zone euro",        region_en: "eurozone" },
  USD: { name_fr: "Dollar américain",    name_en: "US Dollar",           flag: "🇺🇸", region_fr: "États-Unis",      region_en: "United States" },
  GBP: { name_fr: "Livre sterling",      name_en: "Pound Sterling",      flag: "🇬🇧", region_fr: "Royaume-Uni",     region_en: "United Kingdom" },
  JPY: { name_fr: "Yen japonais",        name_en: "Japanese Yen",        flag: "🇯🇵", region_fr: "Japon",           region_en: "Japan" },
  CHF: { name_fr: "Franc suisse",        name_en: "Swiss Franc",         flag: "🇨🇭", region_fr: "Suisse",          region_en: "Switzerland" },
  CAD: { name_fr: "Dollar canadien",     name_en: "Canadian Dollar",     flag: "🇨🇦", region_fr: "Canada",          region_en: "Canada" },
  AUD: { name_fr: "Dollar australien",   name_en: "Australian Dollar",   flag: "🇦🇺", region_fr: "Australie",       region_en: "Australia" },
  CNY: { name_fr: "Yuan chinois",        name_en: "Chinese Yuan",        flag: "🇨🇳", region_fr: "Chine",           region_en: "China" },
  INR: { name_fr: "Roupie indienne",     name_en: "Indian Rupee",        flag: "🇮🇳", region_fr: "Inde",            region_en: "India" },
  BRL: { name_fr: "Réal brésilien",      name_en: "Brazilian Real",      flag: "🇧🇷", region_fr: "Brésil",          region_en: "Brazil" },
  MXN: { name_fr: "Peso mexicain",       name_en: "Mexican Peso",        flag: "🇲🇽", region_fr: "Mexique",         region_en: "Mexico" },
  TRY: { name_fr: "Livre turque",        name_en: "Turkish Lira",        flag: "🇹🇷", region_fr: "Turquie",         region_en: "Turkey" },
  SEK: { name_fr: "Couronne suédoise",   name_en: "Swedish Krona",       flag: "🇸🇪", region_fr: "Suède",           region_en: "Sweden" },
  NOK: { name_fr: "Couronne norvégienne",name_en: "Norwegian Krone",     flag: "🇳🇴", region_fr: "Norvège",         region_en: "Norway" },
  PLN: { name_fr: "Złoty polonais",      name_en: "Polish Złoty",        flag: "🇵🇱", region_fr: "Pologne",         region_en: "Poland" },
};

export const ALL_CURRENCY_CODES = Object.keys(CURRENCIES) as CurrencyCode[];

// Bases that drive each combination
const BASE_BASES: CurrencyCode[] = ["EUR", "USD", "GBP", "JPY"];
// Reverse pairs we explicitly want (so users find both directions for the
// most-searched ones).
const REVERSE_PAIRS: [CurrencyCode, CurrencyCode][] = [
  ["USD", "EUR"],
  ["GBP", "EUR"],
  ["JPY", "EUR"],
  ["CHF", "EUR"],
  ["CAD", "EUR"],
  ["EUR", "GBP"],
  ["EUR", "JPY"],
];

function buildSlugs(): string[] {
  const set = new Set<string>();
  for (const base of BASE_BASES) {
    for (const target of ALL_CURRENCY_CODES) {
      if (target === base) continue;
      set.add(`${base.toLowerCase()}-${target.toLowerCase()}`);
    }
  }
  for (const [from, to] of REVERSE_PAIRS) {
    set.add(`${from.toLowerCase()}-${to.toLowerCase()}`);
  }
  return Array.from(set).sort();
}

export const CONVERTISSEUR_SLUGS: string[] = buildSlugs();

export type Pair = { from: CurrencyCode; to: CurrencyCode };

export function parsePair(slug: string): Pair | null {
  if (typeof slug !== "string") return null;
  const parts = slug.toLowerCase().split("-");
  if (parts.length !== 2) return null;
  const from = parts[0].toUpperCase();
  const to = parts[1].toUpperCase();
  if (!(from in CURRENCIES)) return null;
  if (!(to in CURRENCIES)) return null;
  if (from === to) return null;
  return { from: from as CurrencyCode, to: to as CurrencyCode };
}

export function pairSlug(from: CurrencyCode, to: CurrencyCode): string {
  return `${from.toLowerCase()}-${to.toLowerCase()}`;
}

export function isKnownPair(slug: string): boolean {
  return CONVERTISSEUR_SLUGS.includes(slug.toLowerCase());
}

/** Pairs grouped by base, useful for the hub display. */
export function pairsByBase(): { base: CurrencyCode; slugs: string[] }[] {
  const map = new Map<CurrencyCode, string[]>();
  for (const slug of CONVERTISSEUR_SLUGS) {
    const p = parsePair(slug);
    if (!p) continue;
    const arr = map.get(p.from) ?? [];
    arr.push(slug);
    map.set(p.from, arr);
  }
  // Stable order: base bases first, then anything else seen
  const order: CurrencyCode[] = [...BASE_BASES];
  for (const k of map.keys()) {
    if (!order.includes(k)) order.push(k);
  }
  return order
    .filter((c) => map.has(c))
    .map((base) => ({ base, slugs: (map.get(base) ?? []).sort() }));
}

/**
 * Pick up to `n` related pairs for a given pair.
 * Mix: a few other "from <same base>" + the reverse direction + a few
 * popular cross-pairs.
 */
export function relatedPairs(pair: Pair, n = 6): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const self = pairSlug(pair.from, pair.to);
  seen.add(self);

  // Other targets from the same base
  for (const target of ALL_CURRENCY_CODES) {
    if (target === pair.from || target === pair.to) continue;
    const s = pairSlug(pair.from, target);
    if (!isKnownPair(s) || seen.has(s)) continue;
    out.push(s);
    seen.add(s);
    if (out.length >= Math.ceil(n / 2)) break;
  }

  // Reverse direction
  const rev = pairSlug(pair.to, pair.from);
  if (isKnownPair(rev) && !seen.has(rev)) {
    out.push(rev);
    seen.add(rev);
  }

  // Popular crosses
  const popular: [CurrencyCode, CurrencyCode][] = [
    ["EUR", "USD"], ["USD", "EUR"], ["EUR", "GBP"], ["GBP", "EUR"],
    ["EUR", "JPY"], ["USD", "JPY"], ["USD", "GBP"], ["USD", "CAD"],
    ["USD", "CHF"], ["USD", "AUD"],
  ];
  for (const [a, b] of popular) {
    if (out.length >= n) break;
    const s = pairSlug(a, b);
    if (!isKnownPair(s) || seen.has(s)) continue;
    out.push(s);
    seen.add(s);
  }

  return out.slice(0, n);
}

// ------------------------------------------------------------------
// Live rate + history (Frankfurter.app, free, no API key)
// ------------------------------------------------------------------

export type LatestRate = {
  rate: number;
  date: string; // YYYY-MM-DD
};

export type HistoryPoint = { date: string; rate: number };

const API = "https://api.frankfurter.app";

export async function fetchLatestRate(from: CurrencyCode, to: CurrencyCode): Promise<LatestRate | null> {
  try {
    const res = await fetch(`${API}/latest?from=${from}&to=${to}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { date?: string; rates?: Record<string, number> };
    const r = data?.rates?.[to];
    if (typeof r !== "number" || !Number.isFinite(r) || r <= 0) return null;
    return { rate: r, date: typeof data.date === "string" ? data.date : todayIso() };
  } catch {
    return null;
  }
}

export async function fetchHistory(from: CurrencyCode, to: CurrencyCode, days = 30): Promise<HistoryPoint[]> {
  try {
    const end = todayIso();
    const start = isoNDaysAgo(days);
    const res = await fetch(`${API}/${start}..${end}?from=${from}&to=${to}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { rates?: Record<string, Record<string, number>> };
    const rates = data?.rates ?? {};
    const points: HistoryPoint[] = Object.keys(rates)
      .sort()
      .map((d) => ({ date: d, rate: rates[d]?.[to] ?? NaN }))
      .filter((p) => Number.isFinite(p.rate));
    return points;
  } catch {
    return [];
  }
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function isoNDaysAgo(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

// ------------------------------------------------------------------
// Formatting + chart helpers
// ------------------------------------------------------------------

export function formatRate(value: number, code: CurrencyCode): string {
  // JPY-like currencies use no decimals in daily display; others use 4.
  const noDecimals = code === "JPY";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: noDecimals ? 0 : 2,
    maximumFractionDigits: noDecimals ? 0 : 4,
  }).format(value);
}

export function formatAmount(value: number, code: CurrencyCode): string {
  const noDecimals = code === "JPY";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: noDecimals ? 0 : 2,
    maximumFractionDigits: noDecimals ? 0 : 2,
  }).format(value);
}

export function chartStats(points: HistoryPoint[]) {
  if (points.length === 0) {
    return { min: 0, max: 0, avg: 0, first: 0, last: 0, changePct: 0 };
  }
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (const p of points) {
    if (p.rate < min) min = p.rate;
    if (p.rate > max) max = p.rate;
    sum += p.rate;
  }
  const first = points[0].rate;
  const last = points[points.length - 1].rate;
  const changePct = first > 0 ? ((last - first) / first) * 100 : 0;
  return { min, max, avg: sum / points.length, first, last, changePct };
}
