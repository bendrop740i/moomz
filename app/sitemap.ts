import type { MetadataRoute } from "next";
import { allPages } from "@/lib/seo";

const BASE = "https://moomz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/discover`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/idees`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ideas`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/login`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const seoUrls: MetadataRoute.Sitemap = allPages.map((p) => ({
    url: `${BASE}/${p.category}/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: p.category === "idees" || p.category === "ideas" ? 0.8 : 0.7,
  }));

  return [...staticUrls, ...seoUrls];
}
