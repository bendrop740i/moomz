import fs from "node:fs";
import path from "node:path";
import type { TemplatePage, TemplateLocale } from "./types";

const VALID_LOCALES: TemplateLocale[] = [
  "fr",
  "en",
  "es",
  "it",
  "pt",
  "de",
  "ja",
  "zh",
];

const DATA_DIR = path.join(process.cwd(), "lib", "seo", "templates", "data");

let cache: TemplatePage[] | null = null;

function loadAll(): TemplatePage[] {
  if (cache) return cache;
  if (!fs.existsSync(DATA_DIR)) {
    cache = [];
    return cache;
  }
  const out: TemplatePage[] = [];
  const seen = new Set<string>();
  for (const f of fs.readdirSync(DATA_DIR)) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) continue;
      for (const item of parsed) {
        const k = item as TemplatePage;
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

export function getAllTemplates(): TemplatePage[] {
  return loadAll();
}

export function findTemplate(slug: string): TemplatePage | null {
  return loadAll().find((p) => p.slug === slug) ?? null;
}

export function templatesByCategory(category: string): TemplatePage[] {
  return loadAll().filter((p) => p.category === category);
}
