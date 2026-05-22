import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllFormation,
  getFormationBySlug,
  getFormationByTheme,
} from "@/lib/formation/loader";
import { themeMetaFor, FORMATION_NAME } from "@/lib/formation/types";
import { getLocale, canonicalUrl } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type FormationItemCopy = {
  applyNow: string;
  faq: string;
  inTheme: (label: string) => string;
  backAll: string;
  createBtn: string;
};

const COPY: Record<Locale, FormationItemCopy> = {
  fr: {
    applyNow: "À appliquer maintenant",
    faq: "Questions fréquentes",
    inTheme: (label) => `Dans ${label}`,
    backAll: "← Toute la formation",
    createBtn: "Créer un moomz",
  },
  en: {
    applyNow: "Apply it now",
    faq: "Frequently asked",
    inTheme: (label) => `More in ${label}`,
    backAll: "← All modules",
    createBtn: "Create a moomz",
  },
  es: {
    applyNow: "Aplícalo ahora",
    faq: "Preguntas frecuentes",
    inTheme: (label) => `Más en ${label}`,
    backAll: "← Todos los módulos",
    createBtn: "Crear un moomz",
  },
  it: {
    applyNow: "Applicalo adesso",
    faq: "Domande frequenti",
    inTheme: (label) => `Altro in ${label}`,
    backAll: "← Tutti i moduli",
    createBtn: "Crea un moomz",
  },
  pt: {
    applyNow: "Aplique agora",
    faq: "Perguntas frequentes",
    inTheme: (label) => `Mais em ${label}`,
    backAll: "← Todos os módulos",
    createBtn: "Criar um moomz",
  },
  de: {
    applyNow: "Jetzt anwenden",
    faq: "Häufige Fragen",
    inTheme: (label) => `Mehr in ${label}`,
    backAll: "← Alle Module",
    createBtn: "moomz erstellen",
  },
  ja: {
    applyNow: "今すぐ実践しよう",
    faq: "よくある質問",
    inTheme: (label) => `${label}のモジュール`,
    backAll: "← 全モジュール",
    createBtn: "moomzを作る",
  },
  zh: {
    applyNow: "现在就行动",
    faq: "常见问题",
    inTheme: (label) => `${label}中的更多内容`,
    backAll: "← 全部模块",
    createBtn: "创建 moomz",
  },
};

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllFormation().map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const name = FORMATION_NAME[getLocale()] ?? FORMATION_NAME.en;
  const it = getFormationBySlug(params.slug);
  if (!it) return { title: `${name} — moomz` };
  const description = it.intro.slice(0, 200);
  const canonical = canonicalUrl();
  return {
    title: `${it.title} | ${name} moomz`,
    description,
    alternates: { canonical },
    openGraph: { title: it.title, description, type: "article", url: canonical },
    twitter: { card: "summary_large_image", title: it.title, description },
  };
}

export default async function FormationItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const locale = getLocale();
  const c = COPY[locale] ?? COPY.en;
  const it = getFormationBySlug(params.slug);
  if (!it) notFound();
  const meta = themeMetaFor(it.locale)[it.theme];
  const related = getFormationByTheme(it.theme)
    .filter((r) => r.slug !== it.slug && (r.locale ?? "fr") === (it.locale ?? "fr"))
    .slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: it.title,
    description: it.intro,
    inLanguage: it.locale ?? "fr",
    dateModified: it.updatedAt,
    articleSection: meta.label,
    url: `https://moomz.com/formation/${it.slug}`,
  };
  const faqLd =
    it.faq && it.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: it.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <article className="space-y-6 fade-up pb-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <nav className="flex items-center gap-1.5 text-xs text-white/45">
        <Link href="/formation" className="hover:text-white/80 transition">
          {FORMATION_NAME[locale] ?? FORMATION_NAME.en}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-white/70">
          {meta.emoji} {meta.label}
        </span>
      </nav>

      <header className="space-y-2">
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          <span aria-hidden className="mr-1">
            {it.emoji}
          </span>
          {it.title}
        </h1>
        <p className="text-base text-white/65">{it.intro}</p>
      </header>

      <div className="space-y-5">
        {it.sections.map((s, i) => (
          <section key={i} className="glass rounded-2xl p-4 sm:p-5 space-y-1.5">
            <h2 className="text-lg font-bold text-white">{s.heading}</h2>
            <p className="text-sm leading-relaxed text-white/75">{s.body}</p>
          </section>
        ))}
      </div>

      {it.steps.length > 0 && (
        <section className="glass rounded-2xl p-4 sm:p-5 space-y-2.5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-pink-300">
            {c.applyNow}
          </h2>
          <ul className="space-y-2">
            {it.steps.map((step, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-white/80">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500/25 text-[11px] font-bold text-pink-200"
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {it.faq && it.faq.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">{c.faq}</h2>
          {it.faq.map((f, i) => (
            <details key={i} className="glass rounded-xl p-3.5">
              <summary className="cursor-pointer text-sm font-semibold text-white/85">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-white/65">{f.a}</p>
            </details>
          ))}
        </section>
      )}

      {related.length > 0 && (
        <section className="space-y-2.5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">
            {c.inTheme(meta.label)}
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/formation/${r.slug}`}
                className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition hover:bg-white/10 active:scale-[0.98]"
              >
                <span aria-hidden className="text-lg shrink-0">
                  {r.emoji}
                </span>
                <span className="min-w-0 text-sm font-medium text-white/85">
                  {r.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-2 pt-1">
        <Link
          href="/formation"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {c.backAll}
        </Link>
        <Link
          href="/create"
          className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02]"
        >
          {c.createBtn}
        </Link>
      </div>
    </article>
  );
}
