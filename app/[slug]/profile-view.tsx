import Link from "next/link";
import type { Profile } from "@/lib/profile";
import { emojisFor } from "@/lib/emojis";

type PollRow = {
  slug: string;
  question: string;
  options: string[];
  vote_count: number;
  created_at: string;
  last_vote_at: string | null;
};

type ProfileWithStats = Profile & {
  total_points?: number | null;
  top_streak?: number | null;
};

const SOCIAL_ICONS: Record<string, { label: string; url: (v: string) => string; color: string }> = {
  instagram: {
    label: "Instagram",
    url: (v) => `https://instagram.com/${v}`,
    color: "from-pink-500 to-orange-500",
  },
  tiktok: {
    label: "TikTok",
    url: (v) => `https://tiktok.com/@${v}`,
    color: "from-black to-pink-500",
  },
  x: {
    label: "X",
    url: (v) => `https://x.com/${v}`,
    color: "from-neutral-700 to-black",
  },
  website: {
    label: "Site",
    url: (v) => v,
    color: "from-emerald-500 to-cyan-500",
  },
};

export default function ProfileView({
  profile,
  polls,
}: {
  profile: ProfileWithStats;
  polls: PollRow[];
}) {
  const totalVotes = polls.reduce((s, p) => s + p.vote_count, 0);
  const socials = profile.socials ?? {};
  const socialKeys = Object.keys(socials).filter((k) => SOCIAL_ICONS[k]);

  return (
    <div className="space-y-6 fade-up">
      <header className="glass rounded-3xl p-5 sm:p-6 space-y-4 text-center">
        <div className="text-6xl">{profile.avatar_emoji}</div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {profile.display_name ?? `@${profile.username}`}
          </h1>
          {profile.display_name && (
            <div className="text-sm text-white/50">@{profile.username}</div>
          )}
          {profile.bio && (
            <p className="text-white/70 text-sm pt-1 text-balance">{profile.bio}</p>
          )}
        </div>

        {socialKeys.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {socialKeys.map((k) => {
              const cfg = SOCIAL_ICONS[k];
              const value = socials[k];
              return (
                <a
                  key={k}
                  href={cfg.url(value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-gradient-to-r ${cfg.color} text-white text-xs font-semibold hover:scale-[1.04] active:scale-[0.98] transition`}
                >
                  {cfg.label}
                </a>
              );
            })}
          </div>
        )}

        <div className="flex items-center justify-center gap-5 pt-2 text-sm">
          <Stat label="moomz" value={polls.length} />
          <Stat label="votes" value={totalVotes} />
          <Stat label="pts" value={profile.total_points ?? 0} />
          <Stat label="streak" value={profile.top_streak ?? 0} icon="🔥" />
        </div>
      </header>

      {polls.length === 0 ? (
        <div className="glass rounded-2xl p-6 text-center text-white/50 text-sm">
          Pas encore de sondages publiés.
        </div>
      ) : (
        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
            Ses sondages
          </h2>
          <div className="space-y-2">
            {polls.map((p, idx) => {
              const E = emojisFor(p.slug, p.options.length);
              return (
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
                        {p.options.slice(0, 4).map((opt, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-0.5 bg-white/5 rounded-full px-1.5 py-0.5"
                          >
                            <span>{E[i]}</span>
                            <span className="truncate max-w-[60px] sm:max-w-[80px]">{opt}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-pink-300 font-semibold tabular-nums text-sm">
                        {p.vote_count}
                      </div>
                      <div className="text-[9px] uppercase tracking-wide text-white/30">
                        votes
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: number; icon?: string }) {
  return (
    <div>
      <div className="text-pink-300 font-bold text-lg tabular-nums">
        {icon && <span className="mr-0.5">{icon}</span>}
        {value.toLocaleString()}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
    </div>
  );
}
