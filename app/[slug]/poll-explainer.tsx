import { emojisFor } from "@/lib/emojis";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";

type ExplainerCopy = {
  heading: string;
  headingSuffixTwo: (a: string, b: string) => string;
  headingSuffixOne: (a: string) => string;
  ariaLabel: string;
};

const EXPLAINER_COPY: Record<Locale, ExplainerCopy> = {
  fr: {
    heading: "Décrypte chaque choix",
    headingSuffixTwo: (a, b) => ` — pourquoi les gens votent pour ${a} ou ${b}`,
    headingSuffixOne: (a) => ` — pourquoi les gens votent pour ${a}`,
    ariaLabel: "Décryptage des options du sondage",
  },
  en: {
    heading: "Break down each choice",
    headingSuffixTwo: (a, b) => ` — why people vote for ${a} or ${b}`,
    headingSuffixOne: (a) => ` — why people vote for ${a}`,
    ariaLabel: "Poll option breakdown",
  },
  es: {
    heading: "Descifra cada opción",
    headingSuffixTwo: (a, b) => ` — por qué la gente vota por ${a} o ${b}`,
    headingSuffixOne: (a) => ` — por qué la gente vota por ${a}`,
    ariaLabel: "Análisis de las opciones de la encuesta",
  },
  it: {
    heading: "Analizza ogni scelta",
    headingSuffixTwo: (a, b) => ` — perché le persone votano per ${a} o ${b}`,
    headingSuffixOne: (a) => ` — perché le persone votano per ${a}`,
    ariaLabel: "Analisi delle opzioni del sondaggio",
  },
  pt: {
    heading: "Percebe cada escolha",
    headingSuffixTwo: (a, b) => ` — por que as pessoas votam em ${a} ou ${b}`,
    headingSuffixOne: (a) => ` — por que as pessoas votam em ${a}`,
    ariaLabel: "Análise das opções da enquete",
  },
  de: {
    heading: "Jede Option erklärt",
    headingSuffixTwo: (a, b) => ` — warum Leute für ${a} oder ${b} stimmen`,
    headingSuffixOne: (a) => ` — warum Leute für ${a} stimmen`,
    ariaLabel: "Erklärung der Umfrageoptionen",
  },
  ja: {
    heading: "各選択肢を解説",
    headingSuffixTwo: (a, b) => ` — ${a} と ${b} に投票する理由`,
    headingSuffixOne: (a) => ` — ${a} に投票する理由`,
    ariaLabel: "投票の選択肢の解説",
  },
  zh: {
    heading: "解析每个选项",
    headingSuffixTwo: (a, b) => ` — 为什么人们投票给 ${a} 或 ${b}`,
    headingSuffixOne: (a) => ` — 为什么人们投票给 ${a}`,
    ariaLabel: "投票选项解析",
  },
};

// Server component. Renders 1 paragraph per option explaining what the
// pick means. Visible below the poll and indexable by search engines.
// `explainer` is keyed by option index as a string: { "0": "...", "1": "..." }
export default function PollExplainer({
  slug,
  options,
  explainer,
}: {
  slug: string;
  options: string[];
  explainer: Record<string, string> | null | undefined;
}) {
  if (!explainer) return null;

  const items = options.map((opt, i) => ({
    i,
    label: opt,
    text: explainer[String(i)] ?? null,
  }));
  const filled = items.filter((x) => x.text);
  if (filled.length === 0) return null;

  const E = emojisFor(slug, options.length);
  const locale = getLocale() as Locale;
  const c = EXPLAINER_COPY[locale] ?? EXPLAINER_COPY.en;

  const headingSuffix =
    filled.length >= 2
      ? c.headingSuffixTwo(filled[0].label, filled[1].label)
      : filled.length === 1
        ? c.headingSuffixOne(filled[0].label)
        : "";

  return (
    <section
      className="space-y-3 mt-2"
      aria-label={c.ariaLabel}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
        {c.heading}{headingSuffix}
      </h2>
      <div className="space-y-2">
        {filled.map((x) => (
          <article
            key={x.i}
            className="glass rounded-2xl p-4 sm:p-5 space-y-2"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <header className="flex items-center gap-2">
              <span className="text-2xl shrink-0" aria-hidden>
                {E[x.i]}
              </span>
              <h3
                className="font-bold text-base sm:text-lg leading-tight"
                itemProp="name"
              >
                {x.label}
              </h3>
            </header>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="text-white/70 text-sm sm:text-[15px] leading-relaxed text-pretty"
                itemProp="text"
              >
                {x.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
