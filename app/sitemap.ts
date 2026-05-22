import type { MetadataRoute } from "next";
import { allPages } from "@/lib/seo";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { getAllQuotes } from "@/lib/seo/quotes/loader";
import { allQuizzes } from "@/lib/quizzes";
import { getAllCompares } from "@/lib/seo/compare/loader";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import { getAllLocalizedRoutes as getVsRoutes } from "@/lib/seo/vs/loader";
import { getSupabase } from "@/lib/supabase";
import { CONVERTISSEUR_SLUGS } from "@/lib/tools/convertisseur";
import { METEO_SLUGS } from "@/lib/tools/meteo";
import { HEURE_SLUGS } from "@/lib/tools/heure";
import { JOURS_FERIES_SLUGS } from "@/lib/tools/jours-feries";
import { CRYPTO_SLUGS } from "@/lib/tools/crypto";
import { FR_SLUGS as DEFINITION_FR_SLUGS, EN_SLUGS as DEFINITION_EN_SLUGS } from "@/lib/tools/definition";
import { COSMOS_SLUGS } from "@/lib/tools/cosmos";
import { RECETTES_SLUGS } from "@/lib/tools/recettes";
import { ASTRO_SLUGS } from "@/lib/tools/astro";
import { getAllFormation } from "@/lib/formation/loader";
import { routeSeg } from "@/lib/seo/route-names";

const BASE = "https://moomz.com";
const LOCALES = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as const;
type Loc = (typeof LOCALES)[number];

// ---------------------------------------------------------------------------
// URL-based locale routing (see middleware.ts). The SEO surface lives at
// /{locale}/<route>. This sitemap emits every locale's URL and links them with
// hreflang `alternates.languages` so Google indexes all 8 languages.
// ---------------------------------------------------------------------------

// hreflang map for a page that exists in all 8 locales at the given path-builder.
function alternatesFor(pathFor: (l: Loc) => string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE}${pathFor(l)}`;
  languages["x-default"] = `${BASE}${pathFor("en")}`;
  return { languages };
}

// The visitor-locale SEO routes that work uniformly at /{loc}/<route>.
const UNIFORM_HUBS = [
  "quiz", "template", "compare", "vs", "outils", "blog", "guides", "read",
  "explore", "formation", "q", "creators", "alternatives", "pricing",
  "convertisseur", "meteo", "heure", "crypto", "cosmos", "astro",
  "recettes", "jours-feries",
];

// Twin routes keep a per-locale path (the English/French route names differ;
// es..zh keywords/quotes use the /topic & /citation segment routes).
function keywordHubPath(l: Loc): string {
  return l === "en" ? "/en/word" : l === "fr" ? "/fr/mot" : `/topic/${l}`;
}
function keywordDetailPath(l: string, slug: string): string {
  return l === "en" ? `/en/word/${slug}` : l === "fr" ? `/fr/mot/${slug}` : `/topic/${l}/${slug}`;
}
function quoteHubPath(l: Loc): string {
  return l === "en" ? "/en/quotes" : l === "fr" ? "/fr/citations" : `/citation/${l}`;
}
function quoteDetailPath(l: string, slug: string): string {
  return l === "en" ? `/en/quotes/${slug}` : l === "fr" ? `/fr/citations/${slug}` : `/citation/${l}/${slug}`;
}

async function getPolls(): Promise<{ slug: string; created_at: string }[]> {
  try {
    const supabase = getSupabase();
    const out: { slug: string; created_at: string }[] = [];
    const PAGE = 1000;
    for (let from = 0; from < 5000; from += PAGE) {
      const { data, error } = await supabase
        .from("polls")
        .select("slug,created_at")
        .eq("is_dead", false)
        .order("created_at", { ascending: false })
        .range(from, from + PAGE - 1);
      if (error || !data || data.length === 0) break;
      out.push(...data);
      if (data.length < PAGE) break;
    }
    return out;
  } catch {
    return [];
  }
}

async function getProfiles(): Promise<{ username: string; created_at: string }[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("profiles_public")
      .select("username,created_at")
      .order("created_at", { ascending: false })
      .limit(5000);
    return (data ?? []) as { username: string; created_at: string }[];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  // --- App shell (root, cookie locale) -------------------------------------
  out.push(
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/discover`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
  );

  // --- SEO hubs — one /<loc>/<hub> URL per locale, all linked via hreflang --
  for (const hub of UNIFORM_HUBS) {
    const alt = alternatesFor((l) => `/${l}/${routeSeg(hub, l)}`);
    for (const l of LOCALES) {
      out.push({
        url: `${BASE}/${l}/${routeSeg(hub, l)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
        alternates: alt,
      });
    }
  }
  // Twin hubs: keyword + quote.
  for (const l of LOCALES) {
    out.push({
      url: `${BASE}${keywordHubPath(l)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor(keywordHubPath),
    });
    out.push({
      url: `${BASE}${quoteHubPath(l)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor(quoteHubPath),
    });
  }

  // --- Content detail pages — each authored in one language ----------------
  for (const q of allQuizzes) {
    out.push({
      url: `${BASE}/${q.lang}/quiz/${q.slug}`,
      lastModified: new Date(q.updatedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }
  for (const p of getAllTemplates()) {
    out.push({
      url: `${BASE}/${p.locale}/template/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }
  for (const p of getAllCompares()) {
    out.push({
      url: `${BASE}/${p.locale}/compare/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }
  for (const k of getAllKeywords()) {
    out.push({
      url: `${BASE}${keywordDetailPath(k.locale, k.slug)}`,
      lastModified: new Date(k.updatedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }
  for (const qt of getAllQuotes()) {
    out.push({
      url: `${BASE}${quoteDetailPath(qt.locale, qt.slug)}`,
      lastModified: new Date(qt.updatedAt),
      changeFrequency: "weekly",
      priority: 0.75,
    });
  }
  const SEO_CATEGORIES = new Set(["idees", "ideas", "guides", "blog", "read"]);
  for (const p of allPages) {
    if (!SEO_CATEGORIES.has(p.category)) continue;
    out.push({
      url: `${BASE}/${p.locale}/${p.category}/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly",
      priority: p.category === "idees" || p.category === "ideas" ? 0.8 : 0.7,
    });
  }
  for (const it of getAllFormation()) {
    const loc = (it.locale ?? "fr") as Loc;
    out.push({
      url: `${BASE}/${loc}/${routeSeg("formation", loc)}/${it.slug}`,
      lastModified: new Date(it.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const r of getVsRoutes()) {
    out.push({
      url: `${BASE}/vs/${r.locale}/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // --- Utility-tool detail pages — same content in all 8 locales -----------
  const toolSlugs: { tool: string; slugs: readonly string[]; freq: "daily" | "weekly" | "monthly" }[] = [
    { tool: "convertisseur", slugs: CONVERTISSEUR_SLUGS, freq: "daily" },
    { tool: "meteo", slugs: METEO_SLUGS, freq: "daily" },
    { tool: "heure", slugs: HEURE_SLUGS, freq: "weekly" },
    { tool: "jours-feries", slugs: JOURS_FERIES_SLUGS, freq: "monthly" },
    { tool: "crypto", slugs: CRYPTO_SLUGS, freq: "daily" },
    { tool: "cosmos", slugs: COSMOS_SLUGS, freq: "monthly" },
    { tool: "recettes", slugs: RECETTES_SLUGS, freq: "monthly" },
    { tool: "astro", slugs: ASTRO_SLUGS, freq: "weekly" },
  ];
  for (const { tool, slugs, freq } of toolSlugs) {
    for (const s of slugs) {
      out.push({
        url: `${BASE}/en/${routeSeg(tool, "en")}/${s}`,
        lastModified: now,
        changeFrequency: freq,
        priority: 0.65,
        alternates: alternatesFor((l) => `/${l}/${routeSeg(tool, l)}/${s}`),
      });
    }
  }
  // Dictionary is EN + FR only (define / definition twin).
  for (const s of DEFINITION_EN_SLUGS) {
    out.push({ url: `${BASE}/en/define/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const s of DEFINITION_FR_SLUGS) {
    out.push({ url: `${BASE}/fr/definition/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }

  // --- Polls + profiles (root, not locale-prefixed) ------------------------
  const [polls, profiles] = await Promise.all([getPolls(), getProfiles()]);
  for (const p of polls) {
    out.push({
      url: `${BASE}/${p.slug}`,
      lastModified: new Date(p.created_at),
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }
  for (const p of profiles) {
    out.push({
      url: `${BASE}/${p.username}`,
      lastModified: new Date(p.created_at),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return out;
}
