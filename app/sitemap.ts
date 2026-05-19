import type { MetadataRoute } from "next";
import { allPages } from "@/lib/seo";
import { getAllKeywords } from "@/lib/seo/keywords/loader";
import { keywordUrl } from "@/lib/seo/keywords/types";
import { getSupabase } from "@/lib/supabase";

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
    { url: `${BASE}/login`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const keywordUrls: MetadataRoute.Sitemap = getAllKeywords().map((k) => ({
    url: `${BASE}${keywordUrl(k)}`,
    lastModified: new Date(k.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
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

  return [...staticUrls, ...seoUrls, ...keywordUrls, ...pollUrls, ...profileUrls];
}
