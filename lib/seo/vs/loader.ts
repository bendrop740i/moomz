import type { VsPair, VsLocale, VsCategoryId } from "./types";

// Aggregator. Each content/translation file exports `pairs: VsPair[]`.
// Pairs are merged by slug so multiple files can contribute different
// locales for the same pair without colliding.

import { pairs as c01 } from "./content/c01-tools";
import { pairs as c02 } from "./content/c02-tech";
import { pairs as c03 } from "./content/c03-cloud";
import { pairs as c04 } from "./content/c04-food";
import { pairs as c05 } from "./content/c05-travel";
import { pairs as c06 } from "./content/c06-science";
import { pairs as c07 } from "./content/c07-chemistry";
import { pairs as c08 } from "./content/c08-animals";
import { pairs as c09 } from "./content/c09-lifestyle";
import { pairs as c10 } from "./content/c10-culture";

import { translations } from "./translations";

const CONTENT: VsPair[][] = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10];

function mergeAll(): Map<string, VsPair> {
  const out = new Map<string, VsPair>();
  for (const file of [...CONTENT, ...translations]) {
    for (const p of file) {
      const existing = out.get(p.slug);
      if (existing) {
        out.set(p.slug, {
          ...existing,
          content: { ...existing.content, ...p.content },
        });
      } else {
        out.set(p.slug, p);
      }
    }
  }
  return out;
}

const merged = mergeAll();
export const allPairs: VsPair[] = Array.from(merged.values());

export function pairBySlug(slug: string): VsPair | null {
  return merged.get(slug) ?? null;
}

export function pairsByCategory(category: VsCategoryId): VsPair[] {
  return allPairs.filter((p) => p.category === category);
}

export function getAllLocalizedRoutes(): Array<{ locale: VsLocale; slug: string }> {
  const out: Array<{ locale: VsLocale; slug: string }> = [];
  for (const p of allPairs) {
    for (const locale of Object.keys(p.content) as VsLocale[]) {
      if (p.content[locale]) out.push({ locale, slug: p.slug });
    }
  }
  return out;
}
