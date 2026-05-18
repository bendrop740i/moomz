import Link from "next/link";
import CreatePollForm from "./create-poll-form";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const EMOJIS = ["🔥", "💖", "✨", "👀", "🌶️", "😭"];

type RecentPoll = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  created_at: string;
};

async function getRecentPolls(): Promise<RecentPoll[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("polls_with_stats")
      .select("slug,question,options,vote_count,created_at")
      .gt("vote_count", 0)
      .order("created_at", { ascending: false })
      .limit(6);
    return (data as RecentPoll[]) ?? [];
  } catch {
    return [];
  }
}

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}min`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}j`;
}

export default async function HomePage() {
  const recent = await getRecentPolls();

  return (
    <div className="space-y-12 fade-up">
      <header className="text-center space-y-3">
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          moomz
        </h1>
        <p className="text-white/60 text-lg text-balance">
          Pose ta question. Partage le lien.
          <br className="hidden sm:block" />
          Vois la vibe en live.
        </p>
      </header>

      <CreatePollForm />

      {recent.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-medium">
              Sondages en cours
            </h2>
            <span className="text-xs text-white/30">
              {recent.length} récent{recent.length > 1 ? "s" : ""}
            </span>
          </div>
          <div className="space-y-2.5">
            {recent.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="glass block rounded-2xl p-4 hover:bg-white/[0.08] hover:border-pink-400/30 transition group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <p className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-white">
                      {p.question}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-white/40 flex-wrap">
                      {p.options.slice(0, 4).map((opt, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 bg-white/5 rounded-full px-2 py-0.5"
                        >
                          <span>{EMOJIS[i]}</span>
                          <span className="truncate max-w-[80px]">{opt}</span>
                        </span>
                      ))}
                      {p.options.length > 4 && (
                        <span className="text-white/30">+{p.options.length - 4}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-pink-300 font-semibold tabular-nums">
                      {p.vote_count}
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-white/30">
                      vote{p.vote_count > 1 ? "s" : ""}
                    </div>
                    <div className="text-[10px] text-white/30 mt-1">{timeAgo(p.created_at)}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="text-center text-xs text-white/30">
        Gratuit · pas de compte · partage instantané
      </p>
    </div>
  );
}
