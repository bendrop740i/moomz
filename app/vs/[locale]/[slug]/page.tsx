import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pairBySlug, pairsByCategory } from "@/lib/seo/vs/loader";
import type { VsLocale } from "@/lib/seo/vs/types";
import { VS_LOCALES } from "@/lib/seo/vs/types";

// On-demand ISR: pairs render on first visit then cache, instead of
// pre-rendering all ~8000 locale combos at build time.
export const revalidate = 86400;
export function generateStaticParams(): { locale: string; slug: string }[] {
  return [];
}

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

export default function VsPage({ params }: { params: Params }) {
  if (!VS_LOCALES.includes(params.locale as VsLocale)) notFound();
  const pair = pairBySlug(params.slug);
  if (!pair) notFound();
  const locale = params.locale as VsLocale;
  const content = pair.content[locale];
  if (!content) notFound();

  const siblings = pairsByCategory(pair.category)
    .filter((p) => p.slug !== pair.slug && p.content[locale])
    .slice(0, 6);

  const availableLangs = (Object.keys(pair.content) as VsLocale[]).filter(
    (l) => l !== locale && pair.content[l],
  );

  const cta =
    locale === "fr" ? "Lance un sondage moomz : qui gagne pour toi ?"
    : locale === "es" ? "Lanza una encuesta moomz: ¿quién gana?"
    : locale === "it" ? "Lancia un sondaggio moomz: chi vince?"
    : locale === "pt" ? "Lança uma enquete moomz: quem vence?"
    : locale === "de" ? "Starte eine moomz-Umfrage: wer gewinnt?"
    : locale === "ja" ? "moomzで投票:どっちが勝つ?"
    : locale === "zh" ? "用 moomz 发起投票:谁赢?"
    : "Run a moomz poll: who wins for you?";

  const pollHref = `/?q=${encodeURIComponent(`${pair.a} vs ${pair.b}?`)}&o=${encodeURIComponent(pair.a)}|${encodeURIComponent(pair.b)}`;

  const verdictLabel =
    locale === "fr" ? "Verdict" : locale === "es" ? "Veredicto" : locale === "it" ? "Verdetto" : locale === "pt" ? "Veredito" : locale === "de" ? "Urteil" : locale === "ja" ? "結論" : locale === "zh" ? "结论" : "Verdict";
  const faqLabel =
    locale === "fr" ? "Questions fréquentes" : locale === "es" ? "Preguntas frecuentes" : locale === "it" ? "Domande frequenti" : locale === "pt" ? "Perguntas frequentes" : locale === "de" ? "Häufige Fragen" : locale === "ja" ? "よくある質問" : locale === "zh" ? "常见问题" : "Frequently asked";
  const moreLabel =
    locale === "fr" ? "Plus dans " : locale === "es" ? "Más en " : locale === "it" ? "Altri in " : locale === "pt" ? "Mais em " : locale === "de" ? "Mehr in " : locale === "ja" ? "他の " : locale === "zh" ? "更多 " : "More in ";

  return (
    <article className="space-y-8 fade-up">
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2 flex-wrap">
          <Link href="/vs" className="hover:text-white transition">/vs</Link>
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
            <div className="text-xs text-white/50">moomz.com — 10s, anonyme, gratuit</div>
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
          <div className="text-xs uppercase tracking-widest text-white/40">
            {locale === "fr" ? "Aussi en" : "Also in"}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableLangs.map((l) => (
              <Link
                key={l}
                href={`/vs/${l}/${pair.slug}`}
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
                href={`/vs/${locale}/${s.slug}`}
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
