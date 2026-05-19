import Link from "next/link";
import { emojisFor } from "@/lib/emojis";
import { paletteFor } from "@/lib/palette";

type PollRow = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  created_at: string;
  last_vote_at: string | null;
};

export default function LinkerPollsGrid({ polls }: { polls: PollRow[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {polls.map((p, idx) => {
        const E = emojisFor(p.slug, p.options.length);
        const pal = paletteFor(p.slug);
        const lastVote = p.last_vote_at ? new Date(p.last_vote_at).getTime() : 0;
        const hot = lastVote && Date.now() - lastVote < 60 * 60 * 1000;

        return (
          <Link
            key={p.slug}
            href={`/${p.slug}`}
            style={{
              ["--i" as string]: idx,
              background: `linear-gradient(135deg, ${pal.c1}24, ${pal.c2}24, ${pal.c3}18)`,
            }}
            className="group relative aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden p-3 sm:p-4 flex flex-col justify-between hover:scale-[1.02] hover:border-white/25 active:scale-[0.99] transition card-in"
          >
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{ background: pal.c1 }}
            />
            <div
              aria-hidden
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: pal.c2 }}
            />

            <div className="relative flex items-center justify-between gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/30 backdrop-blur px-2 py-0.5 text-[10px] font-bold tabular-nums">
                <span className="text-pink-300">{p.vote_count}</span>
                <span className="text-white/50 uppercase tracking-wider text-[8px]">votes</span>
              </span>
              {hot && (
                <span className="inline-flex items-center gap-0.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-1.5 py-0.5 text-[9px] font-bold uppercase">
                  🔥 hot
                </span>
              )}
            </div>

            <p className="relative font-bold text-sm sm:text-base leading-snug line-clamp-4 text-white/95 group-hover:text-white">
              {p.question}
            </p>

            <div className="relative flex items-center gap-1 flex-wrap">
              {p.options.slice(0, 3).map((opt, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-0.5 rounded-full bg-white/10 backdrop-blur px-1.5 py-0.5 text-[10px] text-white/80"
                >
                  <span>{E[i]}</span>
                  <span className="truncate max-w-[60px]">{opt}</span>
                </span>
              ))}
              {p.options.length > 3 && (
                <span className="text-[10px] text-white/40">+{p.options.length - 3}</span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
