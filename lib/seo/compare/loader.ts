import fs from "node:fs";
import path from "node:path";
import type { ComparePage, CompareLocale } from "./types";

const VALID_LOCALES: CompareLocale[] = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

const DATA_DIR = path.join(process.cwd(), "lib", "seo", "compare", "data");

let cache: ComparePage[] | null = null;

function loadAll(): ComparePage[] {
  if (cache) return cache;
  if (!fs.existsSync(DATA_DIR)) {
    cache = [];
    return cache;
  }
  const out: ComparePage[] = [];
  const seen = new Set<string>();
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) continue;
      for (const item of parsed) {
        const k = item as ComparePage;
        if (!k || typeof k.slug !== "string") continue;
        if (!VALID_LOCALES.includes(k.locale)) continue;
        // Dedup on locale+slug so one comparison can exist in all 8 languages.
        const key = `${k.locale}:${k.slug}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(k);
      }
    } catch {
      // ignore malformed files
    }
  }
  cache = out;
  return out;
}

export function getAllCompares(): ComparePage[] {
  return loadAll();
}

// Locale-aware lookup: prefer the visitor's language, fall back to en → fr →
// any so a slug always resolves even before every translation has landed.
export function findCompare(slug: string, locale?: CompareLocale): ComparePage | null {
  const matches = loadAll().filter((p) => p.slug === slug);
  if (matches.length === 0) return null;
  if (locale) {
    const exact = matches.find((p) => p.locale === locale);
    if (exact) return exact;
  }
  return (
    matches.find((p) => p.locale === "en") ??
    matches.find((p) => p.locale === "fr") ??
    matches[0]
  );
}

export function comparesByLocale(locale: CompareLocale): ComparePage[] {
  return loadAll().filter((p) => p.locale === locale);
}
