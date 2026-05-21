import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CRYPTO_SLUGS,
  COIN_BLURBS_EN,
  COIN_BLURBS_FR,
  buildSparkline,
  chartStats,
  cleanDescription,
  fetchCoinDetail,
  fetchMarketChart,
  formatCompact,
  formatNumber,
  formatPct,
  formatPrice,
  formatDate,
  getCoinMeta,
  isKnownCoin,
  relatedCoins,
} from "@/lib/tools/crypto";
import { getLocale } from "@/lib/i18n-server";
import { pickStrings } from "../_strings";

export const dynamic = "force-static";
export const revalidate = 600;

export function generateStaticParams() {
  return CRYPTO_SLUGS.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  if (!isKnownCoin(id)) return {};
  const locale = getLocale();
  const S = pickStrings(locale);
  const meta = getCoinMeta(id);
  const detail = await fetchCoinDetail(id);
  const priceLine = detail
    ? ` — ${formatPrice(detail.price_eur, "EUR", locale)}`
    : "";
  const titles: Record<string, string> = {
    fr: `${meta.name} (${meta.symbol})${priceLine} · prix en direct · moomz`,
    en: `${meta.name} (${meta.symbol})${priceLine} · live price · moomz`,
    es: `${meta.name} (${meta.symbol})${priceLine} · precio en directo · moomz`,
    it: `${meta.name} (${meta.symbol})${priceLine} · prezzo live · moomz`,
    pt: `${meta.name} (${meta.symbol})${priceLine} · preço ao vivo · moomz`,
    de: `${meta.name} (${meta.symbol})${priceLine} · Live-Preis · moomz`,
    ja: `${meta.name} (${meta.symbol})${priceLine} · リアルタイム価格 · moomz`,
    zh: `${meta.name} (${meta.symbol})${priceLine} · 实时价格 · moomz`,
  };
  const descs: Record<string, string> = {
    fr: `Prix en direct de ${meta.name} (${meta.symbol}) en EUR et USD, variation 24h, market cap, évolution 30 jours et plus haut historique. Données CoinGecko mises à jour toutes les 10 minutes.`,
    en: `Live ${meta.name} (${meta.symbol}) price in EUR and USD, 24h change, market cap, 30-day chart and all-time high. CoinGecko data updated every 10 minutes.`,
    es: `Precio en directo de ${meta.name} (${meta.symbol}) en EUR y USD, variación 24h, capitalización, evolución 30 días y máximo histórico. Datos CoinGecko actualizados cada 10 minutos.`,
    it: `Prezzo live di ${meta.name} (${meta.symbol}) in EUR e USD, variazione 24h, capitalizzazione, andamento 30 giorni e massimo storico. Dati CoinGecko aggiornati ogni 10 minuti.`,
    pt: `Preço ao vivo de ${meta.name} (${meta.symbol}) em EUR e USD, variação 24h, capitalização, evolução 30 dias e máximo histórico. Dados CoinGecko atualizados a cada 10 minutos.`,
    de: `Live-Preis von ${meta.name} (${meta.symbol}) in EUR und USD, 24h-Änderung, Marktkapitalisierung, 30-Tage-Verlauf und Allzeithoch. CoinGecko-Daten alle 10 Minuten aktualisiert.`,
    ja: `${meta.name}（${meta.symbol}）のリアルタイム価格（EUR・USD）、24時間変動、時価総額、30日チャート、史上最高値。CoinGeckoデータ10分ごと更新。`,
    zh: `${meta.name}（${meta.symbol}）实时价格（EUR/USD）、24小时涨跌、市值、30天走势和历史最高价。CoinGecko数据每10分钟更新。`,
  };
  const title = titles[locale] ?? titles.en;
  const desc = descs[locale] ?? descs.en;
  // Suppress unused variable warning
  void S;
  const url = `https://moomz.com/crypto/${id}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: "website",
      siteName: "moomz",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

function pickBlurb(id: string, locale: string, fallbackHtml: string): string {
  const isFrFamily = locale === "fr" || locale === "es" || locale === "it" || locale === "pt";
  if (isFrFamily && COIN_BLURBS_FR[id]) return COIN_BLURBS_FR[id];
  if (COIN_BLURBS_EN[id]) return COIN_BLURBS_EN[id];
  return cleanDescription(fallbackHtml);
}

export default async function CryptoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  if (!isKnownCoin(id)) notFound();

  const locale = getLocale();
  const S = pickStrings(locale);
  const meta = getCoinMeta(id);

  const [detail, chart] = await Promise.all([
    fetchCoinDetail(id),
    fetchMarketChart(id, 30),
  ]);

  const stats = chartStats(chart);
  const spark = buildSparkline(chart, 600, 180, 6);
  const related = relatedCoins(id, 6);

  const blurb = detail
    ? pickBlurb(id, locale, locale === "fr" ? detail.description_fr : detail.description_en)
    : pickBlurb(id, locale, "");

  const pollQuestion = S.pollCtaQuestion(meta.name);
  const pollOptions = [S.pollOptYes, S.pollOptNo, S.pollOptMaybe].join("|");
  const pollHref = `/?q=${encodeURIComponent(pollQuestion)}&o=${encodeURIComponent(pollOptions)}`;
  const pollQuestion2 = S.pollCtaPriceQuestion(meta.name);
  const pollHref2 = `/?q=${encodeURIComponent(pollQuestion2)}&o=${encodeURIComponent(pollOptions)}`;

  const changeClass = (v: number | null) =>
    v === null ? "text-white/60" : v >= 0 ? "text-emerald-400" : "text-rose-400";

  const url = `https://moomz.com/crypto/${id}`;
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${meta.name} (${meta.symbol})`,
      url,
      inLanguage: locale,
      description: `Live ${meta.name} price and market data.`,
    },
  ];
  if (detail && detail.price_eur > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: meta.name,
      description: `${meta.name} (${meta.symbol}) live price and market cap.`,
      url,
      brand: { "@type": "Brand", name: meta.name },
      offers: {
        "@type": "Offer",
        price: detail.price_eur.toFixed(2),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url,
      },
    });
  }
  jsonLd.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "moomz",
        item: "https://moomz.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: S.hubTitle,
        item: "https://moomz.com/crypto",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${meta.name} (${meta.symbol})`,
        item: url,
      },
    ],
  });

  return (
    <>
      {jsonLd.map((j, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }}
        />
      ))}
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-3">
          <div className="text-5xl sm:text-6xl" aria-hidden>
            {meta.emoji}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {meta.name} <span className="text-white/60 text-2xl sm:text-3xl align-middle">({meta.symbol})</span>
          </h1>
          {detail && detail.price_eur > 0 ? (
            <div className="space-y-1">
              <div className="font-display text-5xl sm:text-6xl tabular-nums leading-none">
                {formatPrice(detail.price_eur, "EUR", locale)}
              </div>
              <div className={`text-sm font-semibold ${changeClass(detail.change_24h_pct)}`}>
                {formatPct(detail.change_24h_pct, locale)} · {S.per24h}
              </div>
            </div>
          ) : (
            <p className="text-white/55 text-sm">{S.unavailableShort}</p>
          )}
        </header>

        <section aria-labelledby="price-card" className="glass rounded-2xl p-5 space-y-3">
          <h2 id="price-card" className="text-base font-bold tracking-tight">
            {S.price}
          </h2>
          {detail && detail.price_eur > 0 ? (
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">EUR</dt>
                <dd className="font-semibold tabular-nums">{formatPrice(detail.price_eur, "EUR", locale)}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">USD</dt>
                <dd className="font-semibold tabular-nums">{formatPrice(detail.price_usd, "USD", locale)}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.change24h}</dt>
                <dd className={`font-semibold tabular-nums ${changeClass(detail.change_24h_pct)}`}>
                  {formatPct(detail.change_24h_pct, locale)}
                </dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.marketCap}</dt>
                <dd className="font-semibold tabular-nums">{formatCompact(detail.market_cap_eur, "EUR", locale)}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.volume24h}</dt>
                <dd className="font-semibold tabular-nums">{formatCompact(detail.total_volume_eur, "EUR", locale)}</dd>
              </div>
            </dl>
          ) : (
            <p className="text-white/60 text-sm">{S.unavailableShort}</p>
          )}
        </section>

        <section aria-labelledby="chart-card" className="glass rounded-2xl p-5 space-y-3">
          <h2 id="chart-card" className="text-base font-bold tracking-tight">
            {S.last30Days}
          </h2>
          {chart.length >= 2 ? (
            <>
              <div className="relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/5">
                <svg
                  viewBox="0 0 600 180"
                  preserveAspectRatio="none"
                  className="block w-full h-40"
                  aria-label={`${meta.name} — ${S.last30Days}`}
                >
                  <defs>
                    <linearGradient id={`grad-${id}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(244,114,182,0.45)" />
                      <stop offset="100%" stopColor="rgba(244,114,182,0)" />
                    </linearGradient>
                  </defs>
                  <path d={spark.area} fill={`url(#grad-${id})`} />
                  <path
                    d={spark.line}
                    fill="none"
                    stroke="rgb(244,114,182)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  {spark.last ? (
                    <circle cx={spark.last.x} cy={spark.last.y} r="3.5" fill="rgb(244,114,182)" />
                  ) : null}
                </svg>
              </div>
              <dl className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-lg bg-white/5 px-2 py-2">
                  <dt className="text-white/40 uppercase tracking-wider text-[10px] font-semibold">{S.rangeLow}</dt>
                  <dd className="font-semibold tabular-nums">{formatPrice(stats.min, "EUR", locale)}</dd>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-2">
                  <dt className="text-white/40 uppercase tracking-wider text-[10px] font-semibold">{S.rangeAvg}</dt>
                  <dd className="font-semibold tabular-nums">{formatPrice(stats.avg, "EUR", locale)}</dd>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-2">
                  <dt className="text-white/40 uppercase tracking-wider text-[10px] font-semibold">{S.rangeHigh}</dt>
                  <dd className="font-semibold tabular-nums">{formatPrice(stats.max, "EUR", locale)}</dd>
                </div>
              </dl>
              <p className={`text-xs text-center font-semibold ${changeClass(stats.changePct)}`}>
                {S.change30d}: {formatPct(stats.changePct, locale)}
              </p>
            </>
          ) : (
            <p className="text-white/60 text-sm">{S.unavailableShort}</p>
          )}
        </section>

        {detail ? (
          <section aria-labelledby="stats-card" className="glass rounded-2xl p-5 space-y-3">
            <h2 id="stats-card" className="text-base font-bold tracking-tight">
              {S.statsHeading}
            </h2>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.circulatingSupply}</dt>
                <dd className="font-semibold tabular-nums">
                  {detail.circulating_supply !== null
                    ? `${formatCompact(detail.circulating_supply, null, locale)} ${meta.symbol}`
                    : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.maxSupply}</dt>
                <dd className="font-semibold tabular-nums">
                  {detail.max_supply !== null
                    ? `${formatCompact(detail.max_supply, null, locale)} ${meta.symbol}`
                    : S.unlimited}
                </dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.ath}</dt>
                <dd className="font-semibold tabular-nums">
                  {detail.ath_eur !== null ? formatPrice(detail.ath_eur, "EUR", locale) : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.athDate}</dt>
                <dd className="font-semibold">{formatDate(detail.ath_date_eur, locale)}</dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.atl}</dt>
                <dd className="font-semibold tabular-nums">
                  {detail.atl_eur !== null ? formatPrice(detail.atl_eur, "EUR", locale) : "—"}
                </dd>
              </div>
              <div>
                <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.atlDate}</dt>
                <dd className="font-semibold">{formatDate(detail.atl_date_eur, locale)}</dd>
              </div>
              {detail.market_cap_rank !== null ? (
                <div>
                  <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.rank}</dt>
                  <dd className="font-semibold tabular-nums">#{formatNumber(detail.market_cap_rank, locale)}</dd>
                </div>
              ) : null}
              {detail.genesis_date ? (
                <div>
                  <dt className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">{S.genesis}</dt>
                  <dd className="font-semibold">{formatDate(detail.genesis_date, locale)}</dd>
                </div>
              ) : null}
            </dl>
          </section>
        ) : null}

        {blurb ? (
          <section aria-labelledby="about-card" className="glass rounded-2xl p-5 space-y-3">
            <h2 id="about-card" className="text-base font-bold tracking-tight">
              {S.about} · {meta.name}
            </h2>
            <p className="text-sm text-white/75 leading-relaxed whitespace-pre-line">
              {blurb}
            </p>
          </section>
        ) : null}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.pollCta}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{pollQuestion}</h2>
          <Link
            href={pollHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold"
          >
            {S.pollCtaButton} <span aria-hidden>→</span>
          </Link>
          <div className="pt-2 border-t border-white/5">
            <p className="text-sm font-semibold text-white/80 mb-2">{pollQuestion2}</p>
            <Link
              href={pollHref2}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-bold"
            >
              {S.pollCtaButton} <span aria-hidden>→</span>
            </Link>
          </div>
        </aside>

        <section aria-labelledby="related-card" className="space-y-3">
          <h2 id="related-card" className="text-lg font-bold tracking-tight">
            {S.relatedCoins}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {related.map((slug) => {
              const m = getCoinMeta(slug);
              return (
                <Link
                  key={slug}
                  href={`/crypto/${slug}`}
                  className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center gap-2"
                >
                  <span className="text-lg" aria-hidden>{m.emoji}</span>
                  <span className="min-w-0 flex-1 font-semibold truncate">{m.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">
                    {m.symbol}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="text-center pt-2">
          <Link
            href="/crypto"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
          >
            <span aria-hidden>←</span> {S.backToHub}
          </Link>
        </div>

        <p className="text-[11px] text-white/35 text-center">{S.poweredBy}</p>
      </div>
    </>
  );
}
