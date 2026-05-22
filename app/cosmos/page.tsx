import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";
import {
  COSMOS_SLUGS,
  fetchApod,
  previewImageFor,
  todayCosmosDate,
} from "@/lib/tools/cosmos";
import { pickString, type ToolLocale } from "./_strings";
import { ApodView, ArchivesGrid, PollCta, StubView } from "./_apod-view";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const COSMOS_META: Record<ToolLocale, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Cosmos du jour — image astronomique NASA gratuite · moomz",
    description: "L'image astronomique du jour de la NASA (APOD), traduite et expliquée. Galaxies, nébuleuses, planètes, mises à jour chaque jour. Gratuit, sans inscription.",
    ogTitle: "Cosmos du jour — moomz",
    ogDesc: "L'image astronomique du jour de la NASA. Nouvelle photo de l'univers chaque jour.",
  },
  en: {
    title: "Cosmos of the day — free NASA astronomy picture · moomz",
    description: "NASA's Astronomy Picture of the Day (APOD), with context and explanation. Galaxies, nebulae, planets, updated daily. Free, no signup.",
    ogTitle: "Cosmos of the day — moomz",
    ogDesc: "NASA's astronomy picture of the day. A new photo of the universe every day.",
  },
  es: {
    title: "Cosmos del día — imagen astronómica gratuita de NASA · moomz",
    description: "La imagen astronómica del día de la NASA (APOD), con contexto y explicación. Galaxias, nebulosas, planetas, actualizados cada día. Gratis, sin registro.",
    ogTitle: "Cosmos del día — moomz",
    ogDesc: "La imagen astronómica del día de la NASA. Una nueva foto del universo cada día.",
  },
  it: {
    title: "Cosmo del giorno — immagine astronomica NASA gratuita · moomz",
    description: "L'immagine astronomica del giorno della NASA (APOD), con contesto e spiegazione. Galassie, nebulose, pianeti, aggiornata ogni giorno. Gratis, senza registrazione.",
    ogTitle: "Cosmo del giorno — moomz",
    ogDesc: "L'immagine astronomica del giorno della NASA. Una nuova foto dell'universo ogni giorno.",
  },
  pt: {
    title: "Cosmos do dia — imagem astronómica gratuita da NASA · moomz",
    description: "A imagem astronómica do dia da NASA (APOD), com contexto e explicação. Galáxias, nebulosas, planetas, atualizados todos os dias. Grátis, sem cadastro.",
    ogTitle: "Cosmos do dia — moomz",
    ogDesc: "A imagem astronómica do dia da NASA. Uma nova foto do universo todos os dias.",
  },
  de: {
    title: "Kosmos des Tages — kostenloses NASA-Astronomiebild · moomz",
    description: "Das Astronomische Bild des Tages der NASA (APOD), mit Kontext und Erklärung. Galaxien, Nebel, Planeten, täglich aktualisiert. Kostenlos, ohne Anmeldung.",
    ogTitle: "Kosmos des Tages — moomz",
    ogDesc: "Das NASA-Astronomiebild des Tages. Jeden Tag ein neues Foto des Universums.",
  },
  ja: {
    title: "今日のコスモス — NASAの無料天文写真 · moomz",
    description: "NASAの今日の天文写真（APOD）を解説付きでお届け。銀河、星雲、惑星、毎日更新。無料・登録不要。",
    ogTitle: "今日のコスモス — moomz",
    ogDesc: "NASAの今日の天文写真。毎日新しい宇宙の写真をお届け。",
  },
  zh: {
    title: "今日宇宙 — NASA 免费天文图像 · moomz",
    description: "NASA 每日天文图像（APOD），附上下文和说明。星系、星云、行星，每日更新。免费，无需注册。",
    ogTitle: "今日宇宙 — moomz",
    ogDesc: "NASA 每日天文图像。每天一张宇宙新照片。",
  },
};

export function generateMetadata(): Metadata {
  const locale = (getLocale() as ToolLocale) ?? "en";
  const m = COSMOS_META[locale] ?? COSMOS_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: canonicalUrl() },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDesc,
      type: "website",
      url: canonicalUrl(),
    },
    twitter: { card: "summary_large_image" },
  };
}

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
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
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
