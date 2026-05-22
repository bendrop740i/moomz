import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";
import {
  COSMOS_SLUGS,
  fetchApod,
  formatDateForLocale,
  isValidCosmosDate,
  nextCosmosDate,
  prevCosmosDate,
  previewImageFor,
  recentCosmosDates,
} from "@/lib/tools/cosmos";
import { ApodView, ArchivesGrid, PollCta, StubView } from "../_apod-view";
import { bcp47, pickString, type ToolLocale } from "../_strings";
import { seoHref } from "@/lib/seo/seo-href";

export const dynamic = "force-dynamic";
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return COSMOS_SLUGS.map((date) => ({ date }));
}

export async function generateMetadata({
  params,
}: {
  params: { date: string };
}): Promise<Metadata> {
  if (!isValidCosmosDate(params.date)) return {};
  const apod = await fetchApod(params.date);
  const url = canonicalUrl();
  if (!apod) {
    return {
      title: `Cosmos · ${params.date} — moomz`,
      description: `Astronomy Picture of the Day for ${params.date}.`,
      alternates: { canonical: url },
    };
  }
  const ogImage = previewImageFor(apod) ?? undefined;
  return {
    title: `${apod.title} — Cosmos ${apod.date} · moomz`,
    description: apod.explanation.slice(0, 200),
    alternates: { canonical: url },
    openGraph: {
      title: apod.title,
      description: apod.explanation.slice(0, 200),
      url,
      type: "article",
      siteName: "moomz",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: apod.title,
      description: apod.explanation.slice(0, 200),
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function CosmosDetail({
  params,
}: {
  params: { date: string };
}) {
  if (!isValidCosmosDate(params.date)) notFound();
  const locale = (getLocale() as ToolLocale) ?? "en";
  const S = pickString(locale);
  // /cosmos 301s the bare path to /{visitorLocale}/cosmos — link straight there.
  const cosmosBase = seoHref("cosmos", locale); // /{visitorLocale}/cosmos

  const apod = await fetchApod(params.date);
  const prev = prevCosmosDate(params.date);
  const next = nextCosmosDate(params.date);
  const archive = recentCosmosDates(14, prev ?? params.date).filter(
    (d) => d !== params.date,
  );

  const showLangNote = locale !== "en" && !!apod?.explanation;
  const niceDate = formatDateForLocale(params.date, bcp47(locale));
  const heroSubtitle = S.apodFor.replace("{date}", niceDate);
  const ogImage = apod ? previewImageFor(apod) ?? undefined : undefined;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: apod?.title ?? heroSubtitle,
    description: apod?.explanation?.slice(0, 240) ?? S.hubIntro,
    url: `https://moomz.com/cosmos/${params.date}`,
    inLanguage: locale,
    datePublished: params.date,
  };
  if (apod && ogImage) {
    jsonLd.primaryImageOfPage = {
      "@type": "ImageObject",
      contentUrl: ogImage,
      name: apod.title,
      caption: apod.title,
      datePublished: apod.date,
      ...(apod.copyright ? { creditText: apod.copyright } : {}),
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <div className="text-xs uppercase tracking-widest text-white/40">
            {heroSubtitle}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {apod?.title ?? S.pictureOfTheDay}
          </h1>
        </header>

        {/* Day nav */}
        <nav className="flex items-center justify-between gap-2 text-sm">
          {prev ? (
            <Link
              href={`${cosmosBase}/${prev}`}
              className="glass rounded-full px-3 py-2 hover:bg-white/10 transition"
            >
              {S.previousDay}
            </Link>
          ) : (
            <span className="rounded-full px-3 py-2 text-white/30">
              {S.previousDay}
            </span>
          )}
          <Link
            href={cosmosBase}
            className="rounded-full px-3 py-2 text-white/60 hover:text-white transition text-center"
          >
            {S.backToToday}
          </Link>
          {next ? (
            <Link
              href={`${cosmosBase}/${next}`}
              className="glass rounded-full px-3 py-2 hover:bg-white/10 transition"
            >
              {S.nextDay}
            </Link>
          ) : (
            <span className="rounded-full px-3 py-2 text-white/30">
              {S.nextDay}
            </span>
          )}
        </nav>

        {apod ? (
          <ApodView
            apod={apod}
            S={S}
            locale={locale}
            showLanguageNote={showLangNote}
          />
        ) : (
          <StubView S={S} />
        )}

        <ArchivesGrid dates={archive} S={S} locale={locale} />

        <PollCta S={S} />

        <div className="text-center">
          <Link
            href={cosmosBase}
            className="text-sm text-white/50 hover:text-white/85 transition"
          >
            {S.backToHub}
          </Link>
        </div>
      </div>
    </>
  );
}
