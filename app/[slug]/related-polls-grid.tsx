import Link from "next/link";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";

export type RelatedPollRow = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

// Static, server-rendered, compact poll cards. Intentionally lighter than
// `PollCard` (no realtime, no vote action, no IntersectionObserver) — this
// block lives below the active vote UI and is read as SEO content.
export default function RelatedPollsGrid({ polls }: { polls: RelatedPollRow[] }) {
  if (polls.length === 0) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
      {polls.map((p, idx) => {
        const E = emojisFor(p.slug, p.options.length);
        const pal = paletteFor(p.slug);
        return (
          <article key={p.slug}>
            <Link
              href={`/${p.slug}`}
              prefetch={false}
              aria-label={`Vote sur: ${p.question}`}
              style={{
                ["--i" as string]: idx,
                background: `linear-gradient(135deg, ${pal.c1}24, ${pal.c2}24, ${pal.c3}18)`,
              }}
              className="group relative aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden p-3 flex flex-col justify-between hover:scale-[1.02] hover:border-white/25 active:scale-[0.99] transition card-in"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: pal.c1 }}
              />

              <div className="relative flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/30 backdrop-blur px-2 py-0.5 text-[10px] font-bold tabular-nums">
                  <span className="text-pink-300">{p.vote_count}</span>
                  <span className="text-white/50 uppercase tracking-wider text-[8px]">votes</span>
                </span>
              </div>

              <h3 className="relative font-bold text-sm leading-snug line-clamp-4 text-white/95 group-hover:text-white">
                {p.question}
              </h3>

              <div className="relative flex items-center gap-1 flex-wrap">
                {p.options.slice(0, 3).map((opt, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-0.5 rounded-full bg-white/10 backdrop-blur px-1.5 py-0.5 text-[10px] text-white/80"
                  >
                    <span aria-hidden>{E[i]}</span>
                    <span className="truncate max-w-[60px]">{opt}</span>
                  </span>
                ))}
                {p.options.length > 3 && (
                  <span className="text-[10px] text-white/40">+{p.options.length - 3}</span>
                )}
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
