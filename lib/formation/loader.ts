import fs from "fs";
import path from "path";
import { FORMATION_THEMES, type FormationItem, type FormationTheme } from "./types";

// Reads every lib/formation/data/*.json file once at module init. Each file is
// an array of FormationItem. Tolerant of a missing dir / malformed file so a
// partial content set never breaks the build.
function loadAll(): FormationItem[] {
  const dir = path.join(process.cwd(), "lib", "formation", "data");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  const themes = new Set<string>(FORMATION_THEMES);
  const seen = new Set<string>();
  const items: FormationItem[] = [];
  for (const file of files) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
    } catch {
      continue;
    }
    if (!Array.isArray(parsed)) continue;
    for (const raw of parsed) {
      const it = raw as FormationItem;
      if (
        !it ||
        typeof it.slug !== "string" ||
        !it.slug ||
        typeof it.title !== "string" ||
        !themes.has(it.theme) ||
        !Array.isArray(it.sections) ||
        seen.has(it.slug)
      ) {
        continue;
      }
      seen.add(it.slug);
      items.push(it);
    }
  }
  return items;
}

const ALL = loadAll();
const BY_SLUG = new Map(ALL.map((i) => [i.slug, i]));

export function getAllFormation(): FormationItem[] {
  return ALL;
}

export function getFormationBySlug(slug: string): FormationItem | null {
  return BY_SLUG.get(slug) ?? null;
}

export function getFormationByTheme(theme: FormationTheme): FormationItem[] {
  return ALL.filter((i) => i.theme === theme);
}

// Content language of an item — legacy data has no `locale` field → "fr".
function itemLocale(i: FormationItem): string {
  return i.locale ?? "fr";
}

// Modules in one content language. Formation content exists in FR + EN; for any
// other locale, fall back to English (the international default).
export function getFormationByLocale(locale: string): FormationItem[] {
  const want = locale === "fr" ? "fr" : "en";
  const hit = ALL.filter((i) => itemLocale(i) === want);
  if (hit.length > 0) return hit;
  return ALL.filter((i) => itemLocale(i) === "fr");
}

export function getFormationThemeCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const i of ALL) counts[i.theme] = (counts[i.theme] ?? 0) + 1;
  return counts;
}
