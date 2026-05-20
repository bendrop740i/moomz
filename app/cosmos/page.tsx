import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/i18n-server";
import {
  COSMOS_SLUGS,
  fetchApod,
  previewImageFor,
  todayCosmosDate,
} from "@/lib/tools/cosmos";
import { pickString, type ToolLocale } from "./_strings";
import { ApodView, ArchivesGrid, PollCta, StubView } from "./_apod-view";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cosmos du jour — image astronomique NASA gratuite · moomz",
  description:
    "L'image astronomique du jour de la NASA (APOD), traduite et expliquée. Galaxies, nébuleuses, planètes, mises à jour chaque jour. Gratuit, sans inscription.",
  alternates: { canonical: "https://moomz.com/cosmos" },
  openGraph: {
    title: "Cosmos du jour — moomz",
    description:
      "L'image astronomique du jour de la NASA. Nouvelle photo de l'univers chaque jour.",
    type: "website",
    url: "https://moomz.com/cosmos",
  },
  twitter: { card: "summary_large_image" },
};

export default async function CosmosHub() {
  const locale = (getLocale() as ToolLocale) ?? "en";
  const S = pickString(locale);

  const todayIso = todayCosmosDate();
  const apod = await fetchApod();
  // Link EVERY pre-rendered cosmos date so no generated detail page is orphaned.
  const archive = COSMOS_SLUGS
    // skip today (already the hero) — show every other generated day
    .filter((d) => d !== todayIso);

  const heroTitle = apod?.title ?? S.pictureOfTheDay;
  const heroImage = apod ? previewImageFor(apod) ?? undefined : undefined;

  const showLangNote = locale !== "en" && !!apod?.explanation;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: heroTitle,
    description: apod?.explanation?.slice(0, 240) ?? S.hubIntro,
    url: "https://moomz.com/cosmos",
    inLanguage: locale,
    ...(apod && heroImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            contentUrl: heroImage,
            name: apod.title,
            caption: apod.title,
            datePublished: apod.date,
            ...(apod.copyright ? { creditText: apod.copyright } : {}),
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <header className="text-center space-y-2">
          <div className="text-xs uppercase tracking-widest text-white/40">
            cosmos · moomz
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hubTitle}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.hubIntro}
          </p>
          {apod ? (
            <p className="text-white/50 text-sm pt-1">
              <span className="font-semibold">{S.pictureOfTheDay}</span> ·{" "}
              <span className="text-white/85">{apod.title}</span>
            </p>
          ) : null}
        </header>

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
            href="/"
            className="text-sm text-white/50 hover:text-white/85 transition"
          >
            ← moomz
          </Link>
        </div>
      </div>
    </>
  );
}
