import type { Profile } from "@/lib/profile";
import { ACHIEVEMENT_ORDER, ACHIEVEMENTS, type AchievementId } from "@/lib/achievements";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";
import { paletteById } from "@/lib/cosmetics";
import ShareLinker from "./share-linker";
import MadeWithMoomz from "./made-with-moomz";
import LinkerPollsGrid from "./linker-polls-grid";
import ProfileTabs from "./profile-tabs";
import AskSection, { type AskItem } from "./ask-section";

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
  achievements?: string[] | null;
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
  ask,
}: {
  profile: ProfileWithStats;
  polls: PollRow[];
  ask: { isOwner: boolean; answered: AskItem[]; pending: AskItem[] };
}) {
  const totalVotes = polls.reduce((s, p) => s + p.vote_count, 0);
  const socials = profile.socials ?? {};
  const socialKeys = Object.keys(socials).filter((k) => SOCIAL_ICONS[k]);
  const locale = getLocale();
  const isBot = profile.is_bot === true;
  // Equipped cosmetic palette (if any). `paletteById` returns null for "auto"
  // or unknown IDs, which is what we want — no pill in that case.
  const equipped = paletteById(profile.cosmetic_id ?? null);
  const hasEquippedPalette = !!equipped && equipped.id !== "auto";
  const avatarUrl = profile.avatar_url ?? null;

  return (
    <div className="space-y-6 fade-up">
      <header className="glass relative rounded-3xl p-4 sm:p-6 space-y-4 text-center">
        <ShareLinker username={profile.username} displayName={profile.display_name} />
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={profile.display_name ?? `@${profile.username}`}
            width={88}
            height={88}
            className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-white/15 bg-white/5 shadow-lg"
          />
        ) : (
          <div className="text-5xl sm:text-6xl">{profile.avatar_emoji}</div>
        )}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight break-words">
            {profile.display_name ?? `@${profile.username}`}
          </h1>
          {profile.display_name && (
            <div className="text-sm text-white/50 break-all">@{profile.username}</div>
          )}
          {hasEquippedPalette && equipped && (
            <div className="pt-1 flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15 bg-white/5"
                title={`Cosmetic: ${equipped.name}`}
              >
                <span aria-hidden className="flex -space-x-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/30"
                    style={{ background: equipped.c1 }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/30"
                    style={{ background: equipped.c2 }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/30"
                    style={{ background: equipped.c3 }}
                  />
                </span>
                <span className="text-white/80">✨ wearing {equipped.name}</span>
              </span>
            </div>
          )}
          {isBot && (
            <div className="pt-2 flex flex-col items-center gap-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/25 border border-purple-300/50 text-purple-100">
                {t("bot.badge", locale)}
              </span>
              <p className="text-[11px] text-white/45 max-w-xs">
                {t("bot.disclaimer", locale)}
              </p>
            </div>
          )}
          {profile.bio && (
            <p className="text-white/70 text-sm pt-1 text-balance break-words whitespace-pre-wrap">
              {profile.bio}
            </p>
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
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 min-h-[36px] py-1.5 bg-gradient-to-r ${cfg.color} text-white text-xs font-semibold hover:scale-[1.04] active:scale-[0.98] transition`}
                >
                  {cfg.label}
                </a>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-sm">
          <Stat label="moomz" value={polls.length} />
          <Stat label="votes" value={totalVotes} />
          <Stat label="pts" value={profile.total_points ?? 0} />
          <Stat label="streak" value={profile.top_streak ?? 0} icon="🔥" />
        </div>
      </header>

      {profile.achievements && profile.achievements.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold flex items-center gap-2">
            🏆 Achievements
            <span className="text-xs normal-case tracking-normal text-white/30 font-normal">
              {profile.achievements.length} / {ACHIEVEMENT_ORDER.length}
            </span>
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {ACHIEVEMENT_ORDER.map((id) => {
              const owned = (profile.achievements ?? []).includes(id);
              const ach = ACHIEVEMENTS[id as AchievementId];
              return (
                <div
                  key={id}
                  title={`${ach.title} — ${ach.desc}`}
                  className={`aspect-square rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition ${
                    owned
                      ? "bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/40"
                      : "bg-white/[0.03] border border-white/5 grayscale opacity-30"
                  }`}
                >
                  {ach.emoji}
                </div>
              );
            })}
          </div>
        </section>
      )}

      <ProfileTabs
        pollsCount={polls.length}
        askCount={ask.isOwner ? ask.pending.length : ask.answered.length}
        polls={
          polls.length === 0 ? (
            <div className="glass rounded-2xl p-6 text-center text-white/50 text-sm">
              {t("misc.profileNoPolls", locale)}
            </div>
          ) : (
            <LinkerPollsGrid polls={polls} />
          )
        }
        ask={
          <AskSection
            recipientId={profile.id}
            recipientUsername={profile.username}
            isOwner={ask.isOwner}
            answered={ask.answered}
            pending={ask.pending}
          />
        }
      />

      <MadeWithMoomz />
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
