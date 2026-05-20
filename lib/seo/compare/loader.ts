import fs from "node:fs";
import path from "node:path";
import type { ComparePage, CompareLocale } from "./types";

const VALID_LOCALES: CompareLocale[] = ["fr", "en"];

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
        if (seen.has(k.slug)) continue;
        seen.add(k.slug);
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

export function findCompare(slug: string): ComparePage | null {
  return loadAll().find((p) => p.slug === slug) ?? null;
}

export function comparesByLocale(locale: CompareLocale): ComparePage[] {
  return loadAll().filter((p) => p.locale === locale);
}
