import type { MetadataRoute } from "next";
import { allPages } from "@/lib/seo";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";
import { allQuizzes } from "@/lib/quizzes";
import { quizUrl } from "@/lib/quizzes/types";
import { getAllCompares } from "@/lib/seo/compare/loader";
import { compareUrl } from "@/lib/seo/compare/types";
import { getAllTemplates } from "@/lib/seo/templates/loader";
import { templateUrl } from "@/lib/seo/templates/types";
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

const BASE = "https://moomz.com";

// Static site shell — home + discover get hreflang alternates because the same
// URL serves all 8 locales (we detect via cookie/Accept-Language).
const LOCALES = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as const;

function homeAlternates(path: string) {
  // Next.js doesn't accept duplicate URLs in the sitemap, but we can emit
  // `alternates.languages` so the rendered XML includes xhtml:link tags.
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `${BASE}${path}`;
  languages["x-default"] = `${BASE}${path}`;
  return { languages };
}

async function getPolls(): Promise<{ slug: string; lang: string | null; created_at: string }[]> {
  try {
    const supabase = getSupabase();
    // Pull in two passes to dodge the default 1000-row PostgREST limit.
    const out: { slug: string; lang: string | null; created_at: string }[] = [];
    const PAGE = 1000;
    for (let from = 0; from < 5000; from += PAGE) {
      const { data, error } = await supabase
        .from("polls")
        .select("slug,lang,created_at")
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

  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0, alternates: homeAlternates("") },
    { url: `${BASE}/discover`, lastModified: now, changeFrequency: "daily", priority: 0.9, alternates: homeAlternates("/discover") },
    { url: `${BASE}/idees`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ideas`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/read`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/mot`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/word`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/quiz`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/template`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/outils`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/convertisseur`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/meteo`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/heure`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/jours-feries`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/crypto`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/definition`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/define`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/cosmos`, lastModified: now, changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE}/recettes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/astro`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/login`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const toolsUrls: MetadataRoute.Sitemap = [
    ...CONVERTISSEUR_SLUGS.map((s) => ({
      url: `${BASE}/convertisseur/${s}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...METEO_SLUGS.map((s) => ({
      url: `${BASE}/meteo/${s}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...HEURE_SLUGS.map((s) => ({
      url: `${BASE}/heure/${s}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })),
    ...JOURS_FERIES_SLUGS.map((s) => ({
      url: `${BASE}/jours-feries/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CRYPTO_SLUGS.map((s) => ({
      url: `${BASE}/crypto/${s}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
    ...DEFINITION_FR_SLUGS.map((s) => ({
      url: `${BASE}/definition/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...DEFINITION_EN_SLUGS.map((s) => ({
      url: `${BASE}/define/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...COSMOS_SLUGS.map((s) => ({
      url: `${BASE}/cosmos/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...RECETTES_SLUGS.map((s) => ({
      url: `${BASE}/recettes/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...ASTRO_SLUGS.map((s) => ({
      url: `${BASE}/astro/${s}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const keywordUrls: MetadataRoute.Sitemap = getAllKeywords().map((k) => ({
    url: `${BASE}${keywordUrl(k)}`,
    lastModified: new Date(k.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const quizUrls: MetadataRoute.Sitemap = allQuizzes.map((q) => ({
    url: `${BASE}${quizUrl(q)}`,
    lastModified: new Date(q.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const compareUrls: MetadataRoute.Sitemap = getAllCompares().map((p) => ({
    url: `${BASE}${compareUrl(p)}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const templateUrls: MetadataRoute.Sitemap = getAllTemplates().map((p) => ({
    url: `${BASE}${templateUrl(p)}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const seoUrls: MetadataRoute.Sitemap = allPages.map((p) => ({
    url: `${BASE}/${p.category}/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: p.category === "idees" || p.category === "ideas" ? 0.8 : 0.7,
  }));

  const [polls, profiles] = await Promise.all([getPolls(), getProfiles()]);

  const pollUrls: MetadataRoute.Sitemap = polls.map((p) => ({
    url: `${BASE}/${p.slug}`,
    lastModified: new Date(p.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const profileUrls: MetadataRoute.Sitemap = profiles.map((p) => ({
    url: `${BASE}/${p.username}`,
    lastModified: new Date(p.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticUrls,
    ...seoUrls,
    ...keywordUrls,
    ...quizUrls,
    ...compareUrls,
    ...templateUrls,
    ...toolsUrls,
    ...pollUrls,
    ...profileUrls,
  ];
}
