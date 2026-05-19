import { emojisFor } from "@/lib/emojis";

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

  return (
    <section className="space-y-3 mt-2" aria-label="Décryptage des options">
      <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
        Décrypte chaque choix
      </h2>
      <div className="space-y-2">
        {filled.map((x) => (
          <article
            key={x.i}
            className="glass rounded-2xl p-4 sm:p-5 space-y-2"
          >
            <header className="flex items-center gap-2">
              <span className="text-2xl shrink-0" aria-hidden>
                {E[x.i]}
              </span>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {x.label}
              </h3>
            </header>
            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed text-pretty">
              {x.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
