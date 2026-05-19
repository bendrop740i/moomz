import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/?source=pwa",
    name: "moomz — vibe-check polls & anonymous Q&A",
    short_name: "moomz",
    description:
      "moomz is the free vibe-check app: create instant polls, vote with one tap, share a short link, get live results, and answer anonymous questions on your profile. Daily Moomz, streaks, trending feed, and a world map of votes — all in 8 languages.",
    categories: ["social", "entertainment", "lifestyle"],
    lang: "fr",
    dir: "ltr",
    start_url: "/?utm_source=pwa&utm_medium=installed&utm_campaign=launch",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait",
    background_color: "#0b0b14",
    theme_color: "#0b0b14",
    prefer_related_applications: false,
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Créer un sondage",
        short_name: "Créer",
        description:
          "Lance un nouveau vibe-check en quelques secondes et partage-le.",
        url: "/?utm_source=pwa&utm_medium=shortcut&utm_campaign=create",
        icons: [{ src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }],
      },
      {
        name: "Discover",
        short_name: "Discover",
        description:
          "Swipe le feed de sondages tendance façon TikTok — vote en un tap.",
        url: "/discover?utm_source=pwa&utm_medium=shortcut&utm_campaign=discover",
        icons: [{ src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }],
      },
      {
        name: "Mon profil",
        short_name: "Profil",
        description:
          "Tes points, ton streak, tes badges et ta boîte de questions anonymes.",
        url: "/me?utm_source=pwa&utm_medium=shortcut&utm_campaign=profile",
        icons: [{ src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }],
      },
    ],
  };
}
