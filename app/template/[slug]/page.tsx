import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import {
  findTemplate,
  getAllTemplates,
} from "@/lib/seo/templates/loader";
import { templateLaunchUrl } from "@/lib/seo/templates/types";
import { canonicalUrl } from "@/lib/i18n-server";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllTemplates().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = findTemplate(params.slug);
  if (!page) return {};
  const url = canonicalUrl();
  const localeMap: Record<string, string> = {
    fr: "fr_FR",
    en: "en_US",
    es: "es_ES",
    it: "it_IT",
    pt: "pt_PT",
    de: "de_DE",
    ja: "ja_JP",
    zh: "zh_CN",
  };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      siteName: "moomz",
      locale: localeMap[page.locale] ?? "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

const T = {
  fr: {
    back: "← tous les modèles",
    sample: "Aperçu du sondage",
    launch: "Lancer ce sondage sur moomz →",
    whyWorks: "Pourquoi ce sondage marche",
    tips: "Astuces",
    variations: "Variantes prêtes à coller",
    use: "Utiliser cette variante →",
    faq: "FAQ",
    related: "Modèles connexes",
    updated: "Mis à jour le",
    cta: "Crée ton sondage moomz gratuit →",
    options: "options",
  },
  en: {
    back: "← all templates",
    sample: "Poll preview",
    launch: "Launch this poll on moomz →",
    whyWorks: "Why this poll works",
    tips: "Tips",
    variations: "Ready-to-paste variations",
    use: "Use this variation →",
    faq: "Frequently asked",
    related: "Related templates",
    updated: "Last updated",
    cta: "Create your free moomz poll →",
    options: "options",
  },
  es: {
    back: "← todas las plantillas",
    sample: "Vista previa",
    launch: "Lanzar esta encuesta en moomz →",
    whyWorks: "Por qué funciona",
    tips: "Consejos",
    variations: "Variantes listas",
    use: "Usar esta variante →",
    faq: "FAQ",
    related: "Plantillas relacionadas",
    updated: "Actualizado el",
    cta: "Crea tu encuesta moomz gratis →",
    options: "opciones",
  },
  it: {
    back: "← tutti i modelli",
    sample: "Anteprima",
    launch: "Lancia questo sondaggio su moomz →",
    whyWorks: "Perché funziona",
    tips: "Consigli",
    variations: "Varianti pronte",
    use: "Usa questa variante →",
    faq: "FAQ",
    related: "Modelli correlati",
    updated: "Aggiornato il",
    cta: "Crea il tuo sondaggio moomz gratis →",
    options: "opzioni",
  },
  pt: {
    back: "← todos os modelos",
    sample: "Pré-visualização",
    launch: "Lançar esta sondagem no moomz →",
    whyWorks: "Por que funciona",
    tips: "Dicas",
    variations: "Variantes prontas",
    use: "Usar esta variante →",
    faq: "FAQ",
    related: "Modelos relacionados",
    updated: "Atualizado em",
    cta: "Cria a tua sondagem moomz grátis →",
    options: "opções",
  },
  de: {
    back: "← alle Vorlagen",
    sample: "Vorschau",
    launch: "Diese Umfrage auf moomz starten →",
    whyWorks: "Warum sie funktioniert",
    tips: "Tipps",
    variations: "Fertige Varianten",
    use: "Diese Variante nutzen →",
    faq: "Häufige Fragen",
    related: "Ähnliche Vorlagen",
    updated: "Aktualisiert am",
    cta: "Erstelle deine kostenlose moomz-Umfrage →",
    options: "Optionen",
  },
  ja: {
    back: "← すべてのテンプレート",
    sample: "投票プレビュー",
    launch: "moomzでこの投票を作成 →",
    whyWorks: "この投票が機能する理由",
    tips: "コツ",
    variations: "すぐ使えるバリエーション",
    use: "このバリエーションを使う →",
    faq: "よくある質問",
    related: "関連テンプレート",
    updated: "更新日",
    cta: "無料でmoomz投票を作成 →",
    options: "個の選択肢",
  },
  zh: {
    back: "← 所有模板",
    sample: "投票预览",
    launch: "在 moomz 上发起这个投票 →",
    whyWorks: "为什么这个投票有效",
    tips: "小贴士",
    variations: "可直接套用的变体",
    use: "使用这个变体 →",
    faq: "常见问题",
    related: "相关模板",
    updated: "更新于",
    cta: "免费创建你的 moomz 投票 →",
    options: "个选项",
  },
};

function variationUrl(question: string, options: string[]) {
  const q = encodeURIComponent(question);
  const o = encodeURIComponent(options.join("|"));
  return `/?q=${q}&o=${o}`;
}

export default function TemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = findTemplate(params.slug);
  if (!page) notFound();
  const t = T[page.locale];

  const optionEmojis = ["🔥", "💖", "✨", "🌶️", "👀", "💫"];

  return (
    <article className="space-y-10 fade-up">
      <HubNav locale={page.locale} current="templates" />
      <header className="space-y-3">
        <div className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
          <Link href="/template" className="hover:text-white transition">
            {t.back}
          </Link>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent leading-tight">
          <span className="mr-2">{page.emoji}</span>
          {page.h1}
        </h1>
        <p className="text-white/60 text-base sm:text-lg text-balance">
          {page.intro}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            {page.audience}
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            {page.options.length} {t.options}
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
            {page.locale.toUpperCase()}
          </span>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-xl text-white/80">{t.sample}</h2>
        <div className="glass rounded-3xl p-5 sm:p-6 border border-pink-400/20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-violet-500/10">
          <div className="font-display text-2xl sm:text-3xl text-white mb-4 leading-tight">
            {page.question}
          </div>
          <ul className="space-y-2">
            {page.options.map((opt, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3"
              >
                <span className="text-2xl">{optionEmojis[i] ?? "✨"}</span>
                <span className="text-white">{opt}</span>
              </li>
            ))}
          </ul>
          <Link
            href={templateLaunchUrl(page)}
            className="mt-5 block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 text-center font-display text-lg hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
          >
            {t.launch}
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{t.whyWorks}</h2>
        <p className="text-white/70 leading-relaxed">{page.whyItWorks}</p>
      </section>

      {page.tips.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-white">{t.tips}</h2>
          <ul className="space-y-2">
            {page.tips.map((tip, i) => (
              <li
                key={i}
                className="glass rounded-xl px-4 py-3 text-white/80 leading-relaxed"
              >
                <span className="text-pink-300 mr-2">✦</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {page.variations.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-white">{t.variations}</h2>
          <div className="grid grid-cols-1 gap-3">
            {page.variations.map((v, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 border border-white/10"
              >
                <div className="font-display text-lg text-white mb-2">
                  {v.question}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {v.options.map((opt, j) => (
                    <span
                      key={j}
                      className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
                <Link
                  href={variationUrl(v.question, v.options)}
                  className="inline-block text-sm text-pink-300 hover:text-pink-200 transition"
                >
                  {t.use}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="font-display text-2xl text-white">{t.faq}</h2>
        <div className="space-y-2">
          {page.faq.map((f, i) => (
            <details key={i} className="glass rounded-xl px-4 py-3 group">
              <summary className="font-medium text-white cursor-pointer list-none flex items-center justify-between gap-3">
                <span>{f.q}</span>
                <span className="text-white/40 group-open:rotate-45 transition shrink-0">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {page.related.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-display text-lg text-white/80">{t.related}</h3>
          <ul className="flex flex-wrap gap-2">
            {page.related.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/template/${slug}`}
                  className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  {slug.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        href={templateLaunchUrl(page)}
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>

      <p className="text-center text-xs text-white/30">
        {t.updated} {page.updatedAt}
      </p>
    </article>
  );
}
