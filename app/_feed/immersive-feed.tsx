import { buildFeed } from "@/lib/feed/build-feed";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { jsonLdHtml } from "@/lib/json-ld";
import DiscoverFeed from "../discover/discover-feed";

// The immersive full-screen feed — the app's landing surface. Shared by `/`
// (home) and `/discover` so the app always opens straight into content, never
// a menu. The feed itself (filtering, shuffle, snap scroll) lives client-side
// in <DiscoverFeed>; this just fetches the poll pool and frames it.
// 25 polls is plenty for a single session of snap-scroll (Gen Z attention
// reality + every app-open re-shuffles a fresh sample from the 5k-poll lake).
// Cuts the SSR HTML from ~440 KB to ~140 KB and triples the hydration speed —
// the actual fix for the "home loads infinitely" reports on mid/low-end phones.
const FEED_LIMIT = 25;

export default async function ImmersiveFeed() {
  const locale = getLocale();
  const polls = await buildFeed(locale, FEED_LIMIT);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: polls.length,
    itemListElement: polls.slice(0, 30).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.question,
      url: `https://moomz.com/${p.slug}`,
    })),
  };

  return (
    <div className="fade-up -mx-4 sm:-mx-6 -mt-8 sm:-mt-12 -mb-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center bg-gradient-to-b from-[#0b0613]/80 via-[#0b0613]/40 to-transparent px-5 pb-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] backdrop-blur-sm">
        <h1 className="pointer-events-auto bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text font-display text-2xl tracking-tight text-transparent sm:text-3xl">
          {t("discover.title", locale)}
        </h1>
      </header>
      <DiscoverFeed polls={polls} />
    </div>
  );
}
