import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ASTRO_SLUGS,
  findSign,
  formatDateRange,
  oppositeSign,
  signName,
  signsByElement,
  signTraits,
  SIGNS,
  type Element,
} from "@/lib/tools/astro";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";
import { seoHref } from "@/lib/seo/seo-href";
import { pickAstroStrings } from "../_strings";
import { getPersonality } from "../_personality";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

type Params = { sign: string };

export function generateStaticParams() {
  return ASTRO_SLUGS.map((sign) => ({ sign }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const sign = findSign(params.sign);
  if (!sign) return {};
  const locale = getLocale();
  const name = signName(sign, locale);
  const range = formatDateRange(sign, locale);
  const titles: Record<string, string> = {
    fr: `${name} ${sign.emoji} — signe astrologique, dates, compatibilités · moomz`,
    en: `${name} ${sign.emoji} — zodiac sign, dates, compatibility · moomz`,
    es: `${name} ${sign.emoji} — signo del zodíaco, fechas, compatibilidad · moomz`,
    it: `${name} ${sign.emoji} — segno zodiacale, date, compatibilità · moomz`,
    pt: `${name} ${sign.emoji} — signo do zodíaco, datas, compatibilidade · moomz`,
    de: `${name} ${sign.emoji} — Sternzeichen, Daten, Kompatibilität · moomz`,
    ja: `${name} ${sign.emoji} — 星座、日付、相性 · moomz`,
    zh: `${name} ${sign.emoji} — 星座、日期、相性 · moomz`,
  };
  const descs: Record<string, string> = {
    fr: `${name} (${range}) : traits, élément, planète, compatibilités et vibe de la semaine. Tout savoir sur le signe ${name}.`,
    en: `${name} (${range}): traits, element, planet, compatibility and weekly vibe. Everything about the ${name} sign.`,
    es: `${name} (${range}): rasgos, elemento, planeta, compatibilidad y vibe semanal. Todo sobre el signo ${name}.`,
    it: `${name} (${range}): tratti, elemento, pianeta, compatibilità e vibe settimanale. Tutto sul segno ${name}.`,
    pt: `${name} (${range}): traços, elemento, planeta, compatibilidade e vibe semanal. Tudo sobre o signo ${name}.`,
    de: `${name} (${range}): Merkmale, Element, Planet, Kompatibilität und Wochen-Vibe. Alles über das Sternzeichen ${name}.`,
    ja: `${name}（${range}）：特徴、エレメント、支配星、相性、今週のvibe。${name}座のすべて。`,
    zh: `${name}（${range}）：特征、元素、守护星、相性、本周vibe。关于${name}的一切。`,
  };
  const title = titles[locale] ?? titles.en;
  const description = descs[locale] ?? descs.en;
  const url = canonicalUrl();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "article", url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function AstroSignPage({ params }: { params: Params }) {
  const sign = findSign(params.sign);
  if (!sign) notFound();

  const locale = getLocale();
  const S = pickAstroStrings(locale);
  // /astro 301s the bare path to /{visitorLocale}/astro — link straight there.
  const astroBase = seoHref("astro", locale); // /{visitorLocale}/astro
  const name = signName(sign, locale);
  const range = formatDateRange(sign, locale);
  const traits = signTraits(sign, locale);
  const personality = getPersonality(sign.slug, locale);
  const weekly = S.weeklyVibe[sign.element];

  const elementGroup = signsByElement()[sign.element].filter((s) => s.slug !== sign.slug);
  const opp = oppositeSign(sign);

  // Poll deeplink — "Tu te reconnais en X ?" with 3 generic options.
  const pollQ: Record<string, string> = {
    fr: `Tu te reconnais en ${name} ?`,
    en: `Does ${name} sound like you?`,
    es: `¿Te identificas con ${name}?`,
    it: `Ti ritrovi in ${name}?`,
    pt: `Você se identifica com ${name}?`,
    de: `Erkennst du dich in ${name} wieder?`,
    ja: `${name}に当てはまる？`,
    zh: `你符合${name}吗？`,
  };
  const pollOpts: Record<string, [string, string, string]> = {
    fr: ["Trop", "Un peu", "Pas du tout"],
    en: ["Very much", "A little", "Not at all"],
    es: ["Mucho", "Un poco", "Para nada"],
    it: ["Tantissimo", "Un po'", "Per niente"],
    pt: ["Muito", "Um pouco", "Nada"],
    de: ["Sehr", "Ein bisschen", "Gar nicht"],
    ja: ["すごく", "少し", "全然"],
    zh: ["非常", "一点", "完全不"],
  };
  const q = pollQ[locale] ?? pollQ.en;
  const o = pollOpts[locale] ?? pollOpts.en;
  const pollHref = `/create?q=${encodeURIComponent(q)}&o=${encodeURIComponent(o.join("|"))}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${name} ${sign.emoji} — ${range}`,
    description: personality.slice(0, 200),
    inLanguage: locale,
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: { "@type": "Organization", name: "moomz" },
    publisher: { "@type": "Organization", name: "moomz" },
    mainEntityOfPage: `https://moomz.com/astro/${sign.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <nav className="text-xs text-white/40 flex items-center gap-1.5" aria-label="breadcrumb">
          <Link href="/" className="hover:text-white/70 transition">moomz</Link>
          <span aria-hidden>›</span>
          <Link href={astroBase} className="hover:text-white/70 transition">{S.hubTitle}</Link>
          <span aria-hidden>›</span>
          <span className="text-white/60">{name}</span>
        </nav>

        <header className="text-center space-y-2">
          <div
            className="font-display text-8xl text-center leading-none"
            aria-hidden
            style={{
              color: sign.color,
              filter: `drop-shadow(0 0 24px ${sign.color}55)`,
            }}
          >
            {sign.emoji}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-white/60 text-base sm:text-lg">{range}</p>
        </header>

        <section aria-labelledby="profile" className="glass rounded-2xl p-5 space-y-3">
          <h2 id="profile" className="text-base font-bold tracking-tight">
            {S.profile}
          </h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">{S.element}</dt>
              <dd className="font-bold mt-0.5">{S.elements[sign.element]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">{S.modality}</dt>
              <dd className="font-bold mt-0.5">{S.modalities[sign.modality]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">{S.planet}</dt>
              <dd className="font-bold mt-0.5">{sign.planet}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">{S.luckyColor}</dt>
              <dd className="font-bold mt-0.5 flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                  aria-hidden
                  style={{ backgroundColor: sign.color }}
                />
                <span className="font-mono text-xs text-white/70">{sign.color}</span>
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="traits" className="glass rounded-2xl p-5 space-y-3">
          <h2 id="traits" className="text-base font-bold tracking-tight">
            {S.traits}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {traits.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold capitalize"
              >
                {trait}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="matches" className="glass rounded-2xl p-5 space-y-4">
          <h2 id="matches" className="text-base font-bold tracking-tight">
            {S.compatible}
          </h2>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">
              ✨ {S.compatible}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sign.compatible.map((slug) => {
                const s = findSign(slug);
                if (!s) return null;
                return (
                  <Link
                    key={slug}
                    href={`${astroBase}/${slug}`}
                    className="rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-400/30 px-3 py-1 text-xs font-semibold flex items-center gap-1 hover:from-pink-500/50 hover:to-purple-500/50 transition"
                  >
                    <span aria-hidden>{s.emoji}</span>
                    <span>{signName(s, locale)}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold">
              ⚡ {S.challenging}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sign.challenging.map((slug) => {
                const s = findSign(slug);
                if (!s) return null;
                return (
                  <Link
                    key={slug}
                    href={`${astroBase}/${slug}`}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-white/55 flex items-center gap-1 hover:bg-white/10 hover:text-white/80 transition"
                  >
                    <span aria-hidden>{s.emoji}</span>
                    <span>{signName(s, locale)}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="personality" className="space-y-3">
          <h2 id="personality" className="text-base font-bold tracking-tight">
            {S.personality}
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {personality}
          </p>
        </section>

        <section aria-labelledby="week" className="glass rounded-2xl p-5 space-y-2">
          <h2 id="week" className="text-base font-bold tracking-tight">
            🌙 {S.thisWeek}
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">{weekly}</p>
        </section>

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            ✨ moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{S.pollHeadline}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{S.pollBody}</p>
          <Link
            href={pollHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {S.pollButton} <span aria-hidden>→</span>
          </Link>
        </aside>

        <section aria-labelledby="related" className="space-y-3">
          <h2 id="related" className="text-base font-bold tracking-tight">
            {S.otherSigns} — {S.elements[sign.element as Element]}
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {elementGroup.map((s) => (
              <Link
                key={s.slug}
                href={`${astroBase}/${s.slug}`}
                className="glass rounded-xl p-3 text-center hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <div className="text-2xl" aria-hidden style={{ color: s.color }}>{s.emoji}</div>
                <div className="text-xs font-semibold mt-1">{signName(s, locale)}</div>
              </Link>
            ))}
          </div>
          <div className="mt-3">
            <div className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold mb-1.5">
              {S.oppositeSign}
            </div>
            <Link
              href={`${astroBase}/${opp.slug}`}
              className="glass rounded-xl p-3 flex items-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition"
            >
              <span className="text-2xl" aria-hidden style={{ color: opp.color }}>
                {opp.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm">{signName(opp, locale)}</div>
                <div className="text-xs text-white/50">{formatDateRange(opp, locale)}</div>
              </div>
              <span className="text-white/30" aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href={astroBase}
            className="inline-block text-sm text-white/55 hover:text-white/80 transition"
          >
            {S.backToHub}
          </Link>
        </div>
      </div>
    </>
  );
}

// Touch references so future tree-shakes don't strip helpers used here.
void SIGNS;
