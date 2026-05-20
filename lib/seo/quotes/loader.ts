import fs from "node:fs";
import path from "node:path";
import type { QuotePage, QuoteLocale } from "./types";

const VALID_LOCALES: QuoteLocale[] = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

const DATA_DIR = path.join(process.cwd(), "lib", "seo", "quotes", "data");

let cache: QuotePage[] | null = null;

function loadAll(): QuotePage[] {
  if (cache) return cache;
  if (!fs.existsSync(DATA_DIR)) {
    cache = [];
    return cache;
  }
  const out: QuotePage[] = [];
  const seen = new Set<string>();
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) continue;
      for (const item of parsed) {
        const q = item as QuotePage;
        if (!q || typeof q.slug !== "string") continue;
        if (!VALID_LOCALES.includes(q.locale)) continue;
        if (!Array.isArray(q.quotes) || q.quotes.length === 0) continue;
        const key = `${q.locale}:${q.slug}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(q);
      }
    } catch {
      // ignore malformed files
    }
  }
  cache = out;
  return out;
}

export function getAllQuotes(): QuotePage[] {
  return loadAll();
}

export function quotesByLocale(locale: QuoteLocale): QuotePage[] {
  return loadAll().filter((q) => q.locale === locale);
}

export function findQuotePage(locale: QuoteLocale, slug: string): QuotePage | null {
  return loadAll().find((q) => q.locale === locale && q.slug === slug) ?? null;
}

export function isQuoteLocale(s: string): s is QuoteLocale {
  return VALID_LOCALES.includes(s as QuoteLocale);
}
