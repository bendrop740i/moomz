import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/auth/", "/me", "/mes-votes", "/mes-sondages"],
      },
    ],
    sitemap: "https://moomz.com/sitemap.xml",
    host: "https://moomz.com",
  };
}
