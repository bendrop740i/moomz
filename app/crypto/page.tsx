import type { Metadata } from "next";
import Link from "next/link";
import {
  CRYPTO_SLUGS,
  COIN_META,
  fetchTopMarkets,
  formatPrice,
  formatCompact,
  formatPct,
  getCoinMeta,
} from "@/lib/tools/crypto";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";
import { pickStrings } from "./_strings";

export const dynamic = "force-dynamic";
export const revalidate = 600;

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const S = pickStrings(locale);
  const title = `${S.hubTitle} — Bitcoin, Ethereum, Solana · moomz`;
  const desc = S.hubIntro;
  return {
    title,
    description: desc,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: `${S.hubTitle} · moomz`,
      description: desc,
      type: "website",
      url: canonicalUrl(),
      siteName: "moomz",
    },
    twitter: {
      card: "summary_large_image",
      title: `${S.hubTitle} · moomz`,
      description: desc,
    },
  };
}

export default async function CryptoHubPage() {
  const locale = getLocale();
  const S = pickStrings(locale);
  const markets = await fetchTopMarkets(30);
  const hasData = markets.length > 0;

  // Render rows in the configured slug order, enriching with API data when available.
  const marketsBySlug = new Map(markets.map((m) => [m.id, m]));
  const rows = CRYPTO_SLUGS.map((slug, idx) => {
    const meta = getCoinMeta(slug);
    const m = marketsBySlug.get(slug);
    return {
      slug,
      rank: m?.market_cap_rank ?? idx + 1,
      symbol: m?.symbol ? m.symbol.toUpperCase() : meta.symbol,
      name: meta.name,
      emoji: meta.emoji,
      price: m?.current_price ?? null,
      change: m?.price_change_percentage_24h ?? null,
      marketCap: m?.market_cap ?? null,
    };
  }).sort((a, b) => a.rank - b.rank);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.hubTitle,
    description: S.hubIntro,
    url: "https://moomz.com/crypto",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: rows.length,
      itemListElement: rows.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${r.name} (${r.symbol})`,
        url: `https://moomz.com/crypto/${r.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hubTitle}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.hubIntro}
          </p>
          <p className="text-white/40 text-sm">
            {S.hubSubline.replace("{n}", String(CRYPTO_SLUGS.length))}
          </p>
        </header>

        {!hasData ? (
          <div className="glass rounded-2xl p-4 text-sm text-white/70 text-center">
            {S.unavailable}
          </div>
        ) : null}

        <section aria-labelledby="top-coins" className="space-y-3">
          <h2
            id="top-coins"
            className="text-lg font-bold tracking-tight flex items-center gap-2"
          >
            <span aria-hidden>🏆</span>
            <span>{S.topCoins}</span>
            <span className="text-xs text-white/40 font-normal">({rows.length})</span>
          </h2>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-[40px_1fr_110px_90px_110px] gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider text-white/40 font-semibold border-b border-white/5">
              <div>#</div>
              <div>{S.coin}</div>
              <div className="text-right">{S.price}</div>
              <div className="text-right">{S.change24h}</div>
              <div className="text-right">{S.marketCap}</div>
            </div>
            <ul className="divide-y divide-white/5">
              {rows.map((r) => {
                const change = r.change;
                const changeColor =
                  change === null
                    ? "text-white/40"
                    : change >= 0
                      ? "text-emerald-400"
                      : "text-rose-400";
                return (
                  <li key={r.slug}>
                    <Link
                      href={`/crypto/${r.slug}`}
                      className="grid grid-cols-[36px_1fr_auto] sm:grid-cols-[40px_1fr_110px_90px_110px] gap-3 px-4 py-3 items-center hover:bg-white/5 active:bg-white/10 transition"
                    >
                      <div className="text-white/50 font-semibold text-sm tabular-nums">
                        {r.rank}
                      </div>
                      <div className="min-w-0 flex items-center gap-2.5">
                        <span className="text-xl shrink-0" aria-hidden>
                          {r.emoji}
                        </span>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm truncate">{r.name}</div>
                          <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                            {r.symbol}
                          </div>
                        </div>
                      </div>
                      <div className="text-right sm:text-right text-sm font-semibold tabular-nums col-span-1 sm:col-auto">
                        {r.price !== null ? formatPrice(r.price, "EUR", locale) : "—"}
                        <div className={`sm:hidden text-xs font-medium ${changeColor}`}>
                          {formatPct(change, locale)}
                        </div>
                      </div>
                      <div className={`hidden sm:block text-right text-sm font-medium tabular-nums ${changeColor}`}>
                        {formatPct(change, locale)}
                      </div>
                      <div className="hidden sm:block text-right text-sm text-white/70 tabular-nums">
                        {r.marketCap !== null ? formatCompact(r.marketCap, "EUR", locale) : "—"}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-[11px] text-white/35 text-center">{S.poweredBy}</p>
        </section>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            {S.pollCtaQuestion(COIN_META.bitcoin.name)}
          </h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollCta}</p>
          <Link
            href={`/create?q=${encodeURIComponent(S.pollCtaQuestion(COIN_META.bitcoin.name))}&o=${encodeURIComponent([S.pollOptYes, S.pollOptNo, S.pollOptMaybe].join("|"))}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollCtaButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
