import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CONVERTISSEUR_SLUGS,
  CURRENCIES,
  chartStats,
  fetchHistory,
  fetchLatestRate,
  formatAmount,
  formatRate,
  parsePair,
  relatedPairs,
  type CurrencyCode,
  type HistoryPoint,
} from "@/lib/tools/convertisseur";
import { getLocale } from "@/lib/i18n-server";
import { pickString, type ToolLocale } from "../_strings";
import { pollPrompt } from "../_poll-prompts";

export const dynamic = "force-static";
export const revalidate = 3600;

type Params = { pair: string };

export function generateStaticParams(): Params[] {
  return CONVERTISSEUR_SLUGS.map((pair) => ({ pair }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = parsePair(params.pair);
  if (!p) return { title: "Devise introuvable — moomz" };
  const fromName = CURRENCIES[p.from].name_fr;
  const toName = CURRENCIES[p.to].name_fr;
  const title = `Convertisseur ${p.from} → ${p.to} : ${fromName} en ${toName} · moomz`;
  const description = `Taux ${p.from}/${p.to} en direct, historique 30 jours, tableau de conversion 1·5·10·100·1000 ${p.from} en ${p.to}.`;
  const canonical = `https://moomz.com/convertisseur/${params.pair}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, type: "article", url: canonical },
    twitter: { card: "summary_large_image", title, description },
  };
}

const AMOUNTS = [1, 5, 10, 50, 100, 500, 1000, 5000];

export default async function ConvertisseurPair({ params }: { params: Params }) {
  const p = parsePair(params.pair);
  if (!p) notFound();

  const locale = (getLocale() as ToolLocale) ?? "fr";
  const S = pickString(locale);

  const [latest, history] = await Promise.all([
    fetchLatestRate(p.from, p.to),
    fetchHistory(p.from, p.to, 30),
  ]);

  const fromInfo = CURRENCIES[p.from];
  const toInfo = CURRENCIES[p.to];
  const stats = chartStats(history);
  const related = relatedPairs(p, 6);

  const prompt = pollPrompt(p.from, p.to, locale);
  const pollHref = `/?q=${encodeURIComponent(prompt.q)}&o=${encodeURIComponent(prompt.o.join("|"))}`;

  // JSON-LD: Article + FinancialProduct + Breadcrumb
  const url = `https://moomz.com/convertisseur/${params.pair}`;
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: S.breadcrumbHome, item: "https://moomz.com" },
      { "@type": "ListItem", position: 2, name: S.breadcrumbHub, item: "https://moomz.com/convertisseur" },
      { "@type": "ListItem", position: 3, name: `${p.from} → ${p.to}`, item: url },
    ],
  };
  const article = {
    "@type": "Article",
    headline: `${p.from} → ${p.to} — ${fromInfo.name_en} to ${toInfo.name_en}`,
    description: `Live rate, 30-day history and conversion table for ${p.from}/${p.to}.`,
    inLanguage: locale,
    datePublished: latest?.date ?? new Date().toISOString().slice(0, 10),
    dateModified: latest?.date ?? new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "moomz" },
    publisher: { "@type": "Organization", name: "moomz", url: "https://moomz.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const financial: Record<string, unknown> = {
    "@type": "FinancialProduct",
    name: `${p.from}/${p.to}`,
    description: `Exchange rate between ${fromInfo.name_en} (${p.from}) and ${toInfo.name_en} (${p.to}).`,
    category: "currency-pair",
    provider: { "@type": "Organization", name: "moomz" },
  };
  if (latest) {
    financial.offers = {
      "@type": "Offer",
      price: latest.rate,
      priceCurrency: p.to,
      priceValidUntil: latest.date,
      availability: "https://schema.org/InStock",
    };
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumb, article, financial],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="space-y-8 fade-up">
        <header className="space-y-2">
          <nav aria-label="Breadcrumb" className="text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">{S.breadcrumbHome}</Link>
            <span aria-hidden> › </span>
            <Link href="/convertisseur" className="hover:text-white/70">{S.breadcrumbHub}</Link>
            <span aria-hidden> › </span>
            <span className="text-white/60">{p.from} → {p.to}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span aria-hidden className="mr-2">{fromInfo.flag}→{toInfo.flag}</span>
            {fromInfo.name_fr} → {toInfo.name_fr}
          </h1>
          <p className="text-white/55 text-sm">
            {p.from} / {p.to} · {fromInfo.region_fr} → {toInfo.region_fr}
          </p>
        </header>

        {/* Big rate */}
        <section className="glass rounded-2xl p-5" aria-labelledby="rate-headline">
          <div id="rate-headline" className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-3">
            {S.rateLabel}
          </div>
          {latest ? (
            <>
              <div className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
                1 {p.from} = {formatRate(latest.rate, p.to)} {p.to}
              </div>
              <p className="text-white/45 text-xs mt-2">
                {S.updated} {latest.date} · {S.source}: Frankfurter (ECB)
              </p>
            </>
          ) : (
            <>
              <div className="font-display text-3xl text-white/40">
                1 {p.from} = ? {p.to}
              </div>
              <p className="text-white/55 text-sm mt-2">{S.apiDown}</p>
            </>
          )}
        </section>

        {/* Conversion table */}
        <section className="glass rounded-2xl p-5" aria-labelledby="conv-table">
          <h2 id="conv-table" className="text-lg font-bold tracking-tight mb-3">
            {S.conversionTable}
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            <div className="text-white/45 text-xs uppercase tracking-wide">{S.amount}</div>
            <div className="text-white/45 text-xs uppercase tracking-wide text-right">{S.result}</div>
            {AMOUNTS.map((amt) => {
              const out = latest ? amt * latest.rate : null;
              return (
                <div key={amt} className="contents">
                  <div className="font-semibold">
                    {formatAmount(amt, p.from)} <span className="text-white/55">{p.from}</span>
                  </div>
                  <div className="text-right tabular-nums">
                    {out !== null ? (
                      <>
                        {formatAmount(out, p.to)} <span className="text-white/55">{p.to}</span>
                      </>
                    ) : (
                      <span className="text-white/30">—</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* History chart */}
        <section className="glass rounded-2xl p-5" aria-labelledby="hist-chart">
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <h2 id="hist-chart" className="text-lg font-bold tracking-tight">
              {S.history30}
            </h2>
            {history.length > 0 && (
              <span
                className={`text-sm font-semibold ${stats.changePct >= 0 ? "text-emerald-300" : "text-rose-300"}`}
              >
                {stats.changePct >= 0 ? "▲" : "▼"} {Math.abs(stats.changePct).toFixed(2)}%
              </span>
            )}
          </div>

          {history.length > 1 ? (
            <>
              <Sparkline points={history} positive={stats.changePct >= 0} ariaLabel={S.chartAria} />
              <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                <div className="rounded-lg bg-white/5 px-2 py-1.5">
                  <div className="text-white/40">{S.minLabel}</div>
                  <div className="font-bold tabular-nums">{formatRate(stats.min, p.to)}</div>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-1.5">
                  <div className="text-white/40">{S.avgLabel}</div>
                  <div className="font-bold tabular-nums">{formatRate(stats.avg, p.to)}</div>
                </div>
                <div className="rounded-lg bg-white/5 px-2 py-1.5">
                  <div className="text-white/40">{S.maxLabel}</div>
                  <div className="font-bold tabular-nums">{formatRate(stats.max, p.to)}</div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm text-white/55">{S.apiDown}</p>
          )}
        </section>

        {/* Editorial section */}
        <section className="space-y-3 leading-relaxed">
          <h2 className="text-lg font-bold tracking-tight">
            {S.whyConvert} {p.from} → {p.to} ?
          </h2>
          <p className="text-sm text-white/75">
            {whyText(p.from, p.to, locale)}
          </p>
        </section>

        {/* Poll CTA */}
        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ {S.pollHeadline}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">"{prompt.q}"</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href={pollHref}
            className="inline-block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl shadow-lg shadow-pink-500/30"
          >
            {S.pollButton}
          </Link>
        </aside>

        {/* Related */}
        {related.length > 0 && (
          <section aria-labelledby="related" className="space-y-3">
            <h2 id="related" className="text-lg font-bold tracking-tight">
              {S.relatedPairs}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {related.map((slug) => {
                const rp = parsePair(slug);
                if (!rp) return null;
                return (
                  <Link
                    key={slug}
                    href={`/convertisseur/${slug}`}
                    className="glass rounded-xl px-3 py-2.5 text-sm hover:scale-[1.01] active:scale-[0.99] transition flex items-center gap-2"
                  >
                    <span aria-hidden>{CURRENCIES[rp.from].flag}→{CURRENCIES[rp.to].flag}</span>
                    <span className="font-semibold">{rp.from} → {rp.to}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="text-center pt-2">
          <Link href="/convertisseur" className="text-sm text-white/55 hover:text-white/85">
            {S.backToHub}
          </Link>
        </div>
      </article>
    </>
  );
}

// ------------------------------------------------------------------
// Server-rendered SVG sparkline.
// ------------------------------------------------------------------

function Sparkline({
  points,
  positive,
  ariaLabel,
}: {
  points: HistoryPoint[];
  positive: boolean;
  ariaLabel: string;
}) {
  const W = 600;
  const H = 120;
  const PAD = 6;

  const min = Math.min(...points.map((p) => p.rate));
  const max = Math.max(...points.map((p) => p.rate));
  const range = max - min || 1;

  const stepX = (W - PAD * 2) / Math.max(1, points.length - 1);
  const path = points
    .map((p, i) => {
      const x = PAD + i * stepX;
      const y = PAD + (H - PAD * 2) * (1 - (p.rate - min) / range);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${(W - PAD).toFixed(1)} ${(H - PAD).toFixed(1)} L ${PAD.toFixed(1)} ${(H - PAD).toFixed(1)} Z`;

  const strokeColor = positive ? "#34d399" : "#fb7185";
  const fillStart = positive ? "rgba(52,211,153,0.3)" : "rgba(251,113,133,0.3)";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={H}
      role="img"
      aria-label={ariaLabel}
      className="block"
    >
      <defs>
        <linearGradient id="spark-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={fillStart} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark-grad)" />
      <path d={path} fill="none" stroke={strokeColor} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

// ------------------------------------------------------------------
// Per-locale editorial text. Substantive, not boilerplate.
// ------------------------------------------------------------------

function whyText(from: CurrencyCode, to: CurrencyCode, locale: ToolLocale): string {
  const fromInfo = CURRENCIES[from];
  const toInfo = CURRENCIES[to];
  switch (locale) {
    case "en":
      return `Converting ${fromInfo.name_en} (${from}) to ${toInfo.name_en} (${to}) is one of the most common operations for travelers, online shoppers and traders moving between the ${fromInfo.region_en} and the ${toInfo.region_en}. Knowing the current ${from}/${to} rate matters whether you're booking a flight, buying gear from a foreign e-commerce site, sending money abroad, or sizing a forex position. Banks usually add a 2-4% spread on top of the mid-market rate shown here, so for large amounts a specialised transfer service (Wise, Revolut, Curve) typically saves real money. For traders, watching the 30-day history below helps spot whether the pair is in an uptrend, range-bound or breaking down — useful context before any trade. Rates update every business day via the European Central Bank reference fixing, which is the same source used by most major banks for reporting.`;
    case "es":
      return `Convertir ${fromInfo.name_fr} (${from}) a ${toInfo.name_fr} (${to}) es una de las operaciones más comunes para viajeros, compradores online y traders entre ${fromInfo.region_fr} y ${toInfo.region_fr}. Conocer la tasa ${from}/${to} importa tanto si reservas un vuelo, compras en una tienda extranjera, envías dinero o abres una posición forex. Los bancos suelen añadir un 2-4% de comisión sobre la tasa mid-market, así que para cantidades grandes un servicio especializado (Wise, Revolut) puede ahorrar bastante. Los datos provienen del fixing de referencia del BCE, mismo origen que usan la mayoría de bancos.`;
    case "it":
      return `Convertire ${fromInfo.name_fr} (${from}) in ${toInfo.name_fr} (${to}) è una delle operazioni più comuni per viaggiatori, acquirenti online e trader tra ${fromInfo.region_fr} e ${toInfo.region_fr}. Conoscere il tasso ${from}/${to} è importante sia che tu stia prenotando un volo, comprando su un sito estero, mandando soldi o aprendo una posizione forex. Le banche aggiungono di solito un 2-4% sul tasso mid-market mostrato qui, quindi per importi grandi un servizio specializzato (Wise, Revolut) fa risparmiare. I dati arrivano dal fixing di riferimento della BCE.`;
    case "pt":
      return `Converter ${fromInfo.name_fr} (${from}) para ${toInfo.name_fr} (${to}) é uma das operações mais comuns para viajantes, compradores online e traders entre ${fromInfo.region_fr} e ${toInfo.region_fr}. Saber a taxa ${from}/${to} importa quer estejas a reservar um voo, comprar num site estrangeiro, enviar dinheiro ou abrir uma posição forex. Os bancos costumam acrescentar 2-4% sobre a taxa mid-market mostrada aqui, então para valores maiores um serviço especializado (Wise, Revolut) poupa bastante. Os dados vêm do fixing de referência do BCE.`;
    case "de":
      return `${fromInfo.name_fr} (${from}) in ${toInfo.name_fr} (${to}) umzurechnen gehört zu den häufigsten Operationen für Reisende, Online-Käufer und Trader zwischen ${fromInfo.region_fr} und ${toInfo.region_fr}. Der aktuelle ${from}/${to}-Kurs ist relevant, egal ob du einen Flug buchst, im Ausland einkaufst, Geld überweist oder eine Forex-Position eröffnest. Banken schlagen meist 2-4% Aufschlag auf den hier gezeigten Mittelkurs auf — bei größeren Summen sparen Spezialanbieter (Wise, Revolut) deutlich. Die Daten stammen aus dem EZB-Referenzkursfixing.`;
    case "ja":
      return `${fromInfo.name_fr}（${from}）を${toInfo.name_fr}（${to}）に換算するのは、旅行者、海外通販ユーザー、トレーダーにとって最も一般的な操作の一つです。現在の${from}/${to}レートは、フライト予約、海外サイトでの買い物、送金、FXポジションのサイジングなど、あらゆる場面で重要です。銀行は通常、ここに表示されているミッドマーケットレートに2-4%のスプレッドを上乗せするため、大口金額にはWiseやRevolutなどの専門サービスが有利です。データはECBの参照フィキシングから取得しています。`;
    case "zh":
      return `${fromInfo.name_fr}（${from}）兑换成${toInfo.name_fr}（${to}）是旅行者、跨境购物者和外汇交易者最常见的操作之一。无论你是订机票、在海外网站购物、汇款还是开仓外汇头寸，了解当前${from}/${to}汇率都很重要。银行通常会在此处显示的中间市场汇率基础上加收2-4%的点差，所以大额金额使用Wise、Revolut等专业服务可以节省不少。数据来源于欧洲央行的参考定盘价。`;
    case "fr":
    default:
      return `Convertir ${fromInfo.name_fr} (${from}) en ${toInfo.name_fr} (${to}) est l'une des opérations les plus courantes pour les voyageurs, les acheteurs en ligne et les traders entre ${fromInfo.region_fr} et ${toInfo.region_fr}. Connaître le taux ${from}/${to} du jour compte autant pour réserver un vol, payer sur un site e-commerce étranger, envoyer de l'argent à l'étranger, que pour dimensionner une position forex. Les banques classiques ajoutent typiquement 2 à 4 % de marge au-dessus du taux mid-market affiché ici, donc sur les gros montants un service spécialisé (Wise, Revolut, Curve) fait économiser plusieurs dizaines d'euros. Pour les traders, regarder l'historique 30 jours ci-dessus permet de repérer si la paire est en tendance haussière, en range ou en cassure — un contexte utile avant toute prise de position. Les taux sont rafraîchis chaque jour ouvré à partir du fixing de référence de la BCE, la même source que celle utilisée par la plupart des grandes banques pour leur reporting.`;
  }
}
