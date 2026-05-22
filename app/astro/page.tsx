import type { Metadata } from "next";
import Link from "next/link";
import {
  SIGNS,
  ASTRO_SLUGS,
  signsByElement,
  signName,
  formatDateRange,
  type Element,
} from "@/lib/tools/astro";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { pickAstroStrings } from "./_strings";
import SignFinder from "./sign-finder";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

const ASTRO_HUB_META: Record<string, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: "Astrologie & zodiaque — trouve ton signe · moomz",
    description: "Les 12 signes du zodiaque, leurs traits, compatibilités, planètes et la vibe de la semaine. Trouve ton signe à partir de ta date de naissance. Gratuit, sans inscription.",
    ogTitle: "Astrologie & zodiaque — moomz",
    ogDesc: "Découvre ton signe, ton élément, tes compatibilités et la vibe de ta semaine.",
  },
  en: {
    title: "Astrology & zodiac — find your sign · moomz",
    description: "All 12 zodiac signs: traits, compatibility, planets and weekly vibe. Find your sign from your birthday. Free, no signup.",
    ogTitle: "Astrology & zodiac — moomz",
    ogDesc: "Find your sign, your element, your compatibility and your weekly vibe.",
  },
  es: {
    title: "Astrología y zodiaco — encuentra tu signo · moomz",
    description: "Los 12 signos del zodíaco: rasgos, compatibilidades, planetas y la vibe semanal. Encuentra tu signo a partir de tu fecha de nacimiento. Gratis, sin registro.",
    ogTitle: "Astrología y zodiaco — moomz",
    ogDesc: "Descubre tu signo, tu elemento, tus compatibilidades y la vibe de tu semana.",
  },
  it: {
    title: "Astrologia e zodiaco — trova il tuo segno · moomz",
    description: "I 12 segni zodiacali: tratti, compatibilità, pianeti e vibe settimanale. Trova il tuo segno dalla tua data di nascita. Gratis, senza registrazione.",
    ogTitle: "Astrologia e zodiaco — moomz",
    ogDesc: "Scopri il tuo segno, il tuo elemento, le tue compatibilità e la vibe della settimana.",
  },
  pt: {
    title: "Astrologia e zodíaco — encontra o teu signo · moomz",
    description: "Os 12 signos do zodíaco: traços, compatibilidades, planetas e vibe semanal. Descubra o seu signo pela data de nascimento. Grátis, sem cadastro.",
    ogTitle: "Astrologia e zodíaco — moomz",
    ogDesc: "Descubra o seu signo, elemento, compatibilidades e a vibe da semana.",
  },
  de: {
    title: "Astrologie & Sternzeichen — finde dein Zeichen · moomz",
    description: "Alle 12 Sternzeichen: Eigenschaften, Kompatibilität, Planeten und Wochen-Vibe. Finde dein Zeichen anhand deines Geburtstags. Kostenlos, ohne Anmeldung.",
    ogTitle: "Astrologie & Sternzeichen — moomz",
    ogDesc: "Finde dein Zeichen, dein Element, deine Kompatibilitäten und deinen Wochen-Vibe.",
  },
  ja: {
    title: "占星術と星座 — あなたの星座を見つけよう · moomz",
    description: "12星座の特徴、相性、支配星、今週のvibe。誕生日から星座を調べよう。無料・登録不要。",
    ogTitle: "占星術と星座 — moomz",
    ogDesc: "あなたの星座、エレメント、相性、今週のvibeを発見しよう。",
  },
  zh: {
    title: "占星术与星座 — 找到你的星座 · moomz",
    description: "12星座特征、相性、守护星和本周vibe。从生日查找你的星座。免费，无需注册。",
    ogTitle: "占星术与星座 — moomz",
    ogDesc: "发现你的星座、元素、相性和本周vibe。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const m = ASTRO_HUB_META[locale] ?? ASTRO_HUB_META.en;
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

const ELEMENT_ORDER: Element[] = ["Feu", "Terre", "Air", "Eau"];
const ELEMENT_COLOR: Record<Element, string> = {
  Feu: "#ef4444",
  Terre: "#84cc16",
  Air: "#06b6d4",
  Eau: "#8b5cf6",
};

export default function AstroHub() {
  const locale = getLocale();
  const S = pickAstroStrings(locale);

  const grouped = signsByElement();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: S.hubTitle,
    description: S.hubIntro,
    url: "https://moomz.com/astro",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: SIGNS.length,
      itemListElement: SIGNS.map((sign, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: signName(sign, locale),
        url: `https://moomz.com/astro/${sign.slug}`,
      })),
    },
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
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {S.hubTitle}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {S.hubIntro}
          </p>
          <p className="text-white/40 text-sm">{S.hubSubline}</p>
        </header>

        <section aria-labelledby="finder" className="space-y-3">
          <h2 id="finder" className="text-lg font-bold tracking-tight">
            🔮 {S.findYourSign}
          </h2>
          <SignFinder
            locale={locale}
            labels={{
              findYourSign: S.findYourSign,
              birthday: S.birthday,
              birthdayHint: S.birthdayHint,
              findButton: S.findButton,
              yourSignIs: S.yourSignIs,
              seeSign: S.seeSign,
            }}
          />
        </section>

        <section aria-labelledby="all-signs" className="space-y-3">
          <h2 id="all-signs" className="text-lg font-bold tracking-tight">
            {S.allSigns}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SIGNS.map((sign) => (
              <Link
                key={sign.slug}
                href={`/astro/${sign.slug}`}
                className="glass rounded-2xl p-3 sm:p-4 hover:scale-[1.02] active:scale-[0.98] transition flex flex-col items-center text-center gap-1"
              >
                <div
                  className="text-3xl sm:text-4xl"
                  aria-hidden
                  style={{ color: sign.color }}
                >
                  {sign.emoji}
                </div>
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {signName(sign, locale)}
                </div>
                <div className="text-[11px] text-white/50 leading-tight">
                  {formatDateRange(sign, locale)}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="by-element" className="space-y-3">
          <h2 id="by-element" className="text-lg font-bold tracking-tight">
            {S.byElement}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ELEMENT_ORDER.map((el) => {
              const list = grouped[el];
              return (
                <div key={el} className="glass rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      aria-hidden
                      style={{ backgroundColor: ELEMENT_COLOR[el] }}
                    />
                    <h3 className="font-bold text-base">{S.elements[el]}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((sign) => (
                      <Link
                        key={sign.slug}
                        href={`/astro/${sign.slug}`}
                        className="rounded-full bg-white/8 hover:bg-white/12 px-3 py-1 text-xs font-semibold transition flex items-center gap-1"
                      >
                        <span aria-hidden>{sign.emoji}</span>
                        <span>{signName(sign, locale)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

// Touch a reference so future tree-shakes don't strip the slug list.
void ASTRO_SLUGS;
