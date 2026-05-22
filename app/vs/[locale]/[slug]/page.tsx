import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pairBySlug, pairsByCategory } from "@/lib/seo/vs/loader";
import type { VsLocale } from "@/lib/seo/vs/types";
import { VS_LOCALES } from "@/lib/seo/vs/types";
import { seoHref } from "@/lib/seo/seo-href";
import { getLocale } from "@/lib/i18n-server";

// Dynamic on-demand: the root layout reads cookies() for locale, which
// rules out static/ISR rendering. Each /vs pair renders per-request and
// is CDN-cached by Vercel. Avoids build-time render of ~8000 combos.
export const dynamic = "force-dynamic";

const OG_LOCALE: Record<VsLocale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_BR",
  de: "de_DE",
  ja: "ja_JP",
  zh: "zh_CN",
};

type Params = { locale: string; slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!VS_LOCALES.includes(params.locale as VsLocale)) return {};
  const pair = pairBySlug(params.slug);
  if (!pair) return {};
  const content = pair.content[params.locale as VsLocale];
  if (!content) return {};

  const url = `https://moomz.com/vs/${params.locale}/${pair.slug}`;
  const languages: Record<string, string> = {};
  for (const l of VS_LOCALES) {
    if (pair.content[l]) languages[l] = `https://moomz.com/vs/${l}/${pair.slug}`;
  }
  languages["x-default"] = `https://moomz.com/vs/en/${pair.slug}`;

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: content.title,
      description: content.description,
      url,
      type: "article",
      siteName: "moomz",
      locale: OG_LOCALE[params.locale as VsLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}

function toBullets(v: string[] | string): string[] {
  if (Array.isArray(v)) return v;
  return v
    .split(/[,;]\s+|\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

// Per-locale UI chrome. Keyed off the URL locale (the locale is in the path).
// Data (title/intro/pros/verdict/faq) is authored-language and never touched.
const CHROME: Record<
  VsLocale,
  {
    cta: string;
    ctaSub: string;
    verdict: string;
    faq: string;
    more: string;
    alsoIn: string;
  }
> = {
  en: {
    cta: "Run a moomz poll: who wins for you?",
    ctaSub: "moomz.com — 10s, anonymous, free",
    verdict: "Verdict",
    faq: "Frequently asked",
    more: "More in ",
    alsoIn: "Also in",
  },
  fr: {
    cta: "Lance un sondage moomz : qui gagne pour toi ?",
    ctaSub: "moomz.com — 10s, anonyme, gratuit",
    verdict: "Verdict",
    faq: "Questions fréquentes",
    more: "Plus dans ",
    alsoIn: "Aussi en",
  },
  es: {
    cta: "Lanza una encuesta moomz: ¿quién gana?",
    ctaSub: "moomz.com — 10s, anónimo, gratis",
    verdict: "Veredicto",
    faq: "Preguntas frecuentes",
    more: "Más en ",
    alsoIn: "También en",
  },
  it: {
    cta: "Lancia un sondaggio moomz: chi vince?",
    ctaSub: "moomz.com — 10s, anonimo, gratis",
    verdict: "Verdetto",
    faq: "Domande frequenti",
    more: "Altri in ",
    alsoIn: "Anche in",
  },
  pt: {
    cta: "Lança uma enquete moomz: quem vence?",
    ctaSub: "moomz.com — 10s, anônimo, grátis",
    verdict: "Veredito",
    faq: "Perguntas frequentes",
    more: "Mais em ",
    alsoIn: "Também em",
  },
  de: {
    cta: "Starte eine moomz-Umfrage: wer gewinnt?",
    ctaSub: "moomz.com — 10s, anonym, kostenlos",
    verdict: "Urteil",
    faq: "Häufige Fragen",
    more: "Mehr in ",
    alsoIn: "Auch in",
  },
  ja: {
    cta: "moomzで投票:どっちが勝つ?",
    ctaSub: "moomz.com — 10秒・匿名・無料",
    verdict: "結論",
    faq: "よくある質問",
    more: "他の ",
    alsoIn: "他の言語",
  },
  zh: {
    cta: "用 moomz 发起投票:谁赢?",
    ctaSub: "moomz.com — 10秒、匿名、免费",
    verdict: "结论",
    faq: "常见问题",
    more: "更多 ",
    alsoIn: "其他语言",
  },
};

export default function VsPage({ params }: { params: Params }) {
  if (!VS_LOCALES.includes(params.locale as VsLocale)) notFound();
  const pair = pairBySlug(params.slug);
  if (!pair) notFound();
  const locale = params.locale as VsLocale;
  const content = pair.content[locale];
  if (!content) notFound();

  // The /vs route 301s the bare /vs/... path to /{visitorLocale}/vs/... — link
  // internal nav straight to that locale-prefixed form so there is no redirect.
  // `params.locale` is the vs *content* locale; the URL prefix needs the
  // visitor's chrome locale.
  const chromeLocale = getLocale();
  const vsBase = seoHref("vs", chromeLocale); // /{visitorLocale}/vs

  const siblings = pairsByCategory(pair.category)
    .filter((p) => p.slug !== pair.slug && p.content[locale])
    .slice(0, 6);

  const availableLangs = (Object.keys(pair.content) as VsLocale[]).filter(
    (l) => l !== locale && pair.content[l],
  );

  const c = CHROME[locale] ?? CHROME.en;
  const cta = c.cta;

  const pollHref = `/create?q=${encodeURIComponent(`${pair.a} vs ${pair.b}?`)}&o=${encodeURIComponent(pair.a)}|${encodeURIComponent(pair.b)}`;

  const verdictLabel = c.verdict;
  const faqLabel = c.faq;
  const moreLabel = c.more;

  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2 flex-wrap">
          <Link href={vsBase} className="hover:text-white transition">/vs</Link>
          <span>·</span>
          <span>{pair.category}</span>
          <span>·</span>
          <span>{locale}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          {pair.emoji_a && <span className="mr-2">{pair.emoji_a}</span>}
          {pair.a} <span className="text-white/40">vs</span> {pair.b}
          {pair.emoji_b && <span className="ml-2">{pair.emoji_b}</span>}
        </h1>
        <p className="text-white/60 text-base sm:text-lg text-balance">{content.intro}</p>
      </header>

      <Link
        href={pollHref}
        className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-xl">{cta}</div>
            <div className="text-xs text-white/50">{c.ctaSub}</div>
          </div>
          <span className="text-2xl">→</span>
        </div>
      </Link>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/[0.04] border border-pink-400/30 p-4 space-y-2">
          <div className="font-display text-2xl text-white">
            {pair.emoji_a && <span className="mr-2">{pair.emoji_a}</span>}
            {pair.a}
          </div>
          <ul className="space-y-1.5 text-sm text-white/80">
            {toBullets(content.pros_a).map((pro, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-pink-400 shrink-0">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white/[0.04] border border-purple-400/30 p-4 space-y-2">
          <div className="font-display text-2xl text-white">
            {pair.emoji_b && <span className="mr-2">{pair.emoji_b}</span>}
            {pair.b}
          </div>
          <ul className="space-y-1.5 text-sm text-white/80">
            {toBullets(content.pros_b).map((pro, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-purple-400 shrink-0">✓</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-xl text-white">{verdictLabel}</h2>
        <p className="text-white/70 leading-relaxed">{content.verdict}</p>
      </section>

      {content.faq.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{faqLabel}</h2>
          <div className="space-y-2">
            {content.faq.map((f, i) => (
              <details key={i} className="glass rounded-xl px-4 py-3 group">
                <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-white/40 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {availableLangs.length > 0 && (
        <section className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-white/40">{c.alsoIn}</div>
          <div className="flex flex-wrap gap-1.5">
            {availableLangs.map((l) => (
              <Link
                key={l}
                href={`${vsBase}/${l}/${pair.slug}`}
                className="rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white transition"
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-semibold text-xl text-white">{moreLabel}{pair.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`${vsBase}/${locale}/${s.slug}`}
                className="glass rounded-xl px-4 py-3 hover:bg-white/10 transition text-sm text-white/80 truncate"
              >
                {s.emoji_a ?? ""} {s.a} <span className="text-white/40">vs</span> {s.b} {s.emoji_b ?? ""}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link
        href={pollHref}
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {cta}
      </Link>
    </article>
  );
}
