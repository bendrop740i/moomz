import fs from "node:fs";
import path from "node:path";
import type { KeywordPage } from "./types";

const DATA_DIR = path.join(process.cwd(), "lib", "seo", "keywords", "data");

let cache: KeywordPage[] | null = null;

function loadAll(): KeywordPage[] {
  if (cache) return cache;
  if (!fs.existsSync(DATA_DIR)) {
    cache = [];
    return cache;
  }
  const out: KeywordPage[] = [];
  const seen = new Set<string>();
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) continue;
      for (const item of parsed) {
        const k = item as KeywordPage;
        if (!k || typeof k.slug !== "string" || (k.locale !== "fr" && k.locale !== "en")) continue;
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

export function getAllKeywords(): KeywordPage[] {
  return loadAll();
}

export function keywordsByLocale(locale: "fr" | "en"): KeywordPage[] {
  return loadAll().filter((k) => k.locale === locale);
}

export function findKeyword(locale: "fr" | "en", slug: string): KeywordPage | null {
  return loadAll().find((k) => k.locale === locale && k.slug === slug) ?? null;
}
