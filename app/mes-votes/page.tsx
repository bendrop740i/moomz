import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { readSlugHistory } from "@/lib/history";
import { emojisFor } from "@/lib/emojis";

export const dynamic = "force-dynamic";

type Row = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
};

export default async function MesVotesPage() {
  const slugs = readSlugHistory("moomz_voted_slugs");

  let polls: Row[] = [];
  if (slugs.length > 0) {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_with_stats")
      .select("slug,question,options,vote_count")
      .in("slug", slugs);
    const ordered = slugs
      .map((s) => (data ?? []).find((p) => p.slug === s))
      .filter(Boolean) as Row[];
    polls = ordered;
  }

  return (
    <div className="space-y-6 fade-up">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Mes votes</h1>
        <p className="text-white/50 text-xs sm:text-sm">
          {polls.length > 0
            ? `${polls.length} sondage${polls.length > 1 ? "s" : ""} où t'as voté`
            : "Aucun vote pour l'instant."}
        </p>
      </header>

      {polls.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center space-y-3">
          <div className="text-4xl">🗳️</div>
          <p className="text-white/60 text-sm">Vote pour retrouver tes sondages ici.</p>
          <Link
            href="/discover"
            className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2.5 px-5 text-sm hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-pink-500/30"
          >
            Découvrir →
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {polls.map((p, idx) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="glass block rounded-xl p-3 hover:bg-white/[0.08] hover:border-pink-400/30 transition group card-in"
              style={{ ["--i" as string]: idx }}
            >
              <div className="flex items-start justify-between gap-2.5">
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-white">
                    {p.question}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-white/40 flex-wrap">
                    {(() => {
                      const E = emojisFor(p.slug, p.options.length);
                      return p.options.slice(0, 4).map((opt, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-0.5 bg-white/5 rounded-full px-1.5 py-0.5"
                        >
                          <span>{E[i]}</span>
                          <span className="truncate max-w-[60px] sm:max-w-[80px]">{opt}</span>
                        </span>
                      ));
                    })()}
                    {p.options.length > 4 && (
                      <span className="text-white/30">+{p.options.length - 4}</span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-pink-300 font-semibold tabular-nums text-sm">
                    {p.vote_count}
                  </div>
                  <div className="text-[9px] uppercase tracking-wide text-white/30">
                    vote{p.vote_count > 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
