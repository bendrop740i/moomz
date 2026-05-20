import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import { ALL_FAMILIES, type AchCategory } from "@/lib/achievements/families";
import { ALL_ACHIEVEMENTS, ACHIEVEMENT_COUNT, type Achievement } from "@/lib/achievements/engine";
import { renderAchievement, categoryLabel, type AchLang } from "@/lib/achievements/i18n";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Haut faits — moomz",
  // Personal page — not for search indexing.
  robots: { index: false, follow: true },
};

const CATEGORY_ORDER: AchCategory[] = [
  "voting", "streak", "loyalty", "creating", "performance", "rebel",
  "economy", "ask", "explore", "predictions", "topics", "meta",
];

type PageStrings = {
  title: string;
  tagline: string;
  unlocked: string;
  next: string;
  done: string;
  noProfile: string;
  cta: string;
};

const STR: Record<Locale, PageStrings> = {
  fr: { title: "Haut faits", tagline: "Débloque des haut faits en jouant et gagne des coins.", unlocked: "débloqués", next: "Prochain", done: "Complété ✓", noProfile: "Réserve ton @ pour gagner des coins et garder tes haut faits.", cta: "Réserver mon @" },
  en: { title: "Achievements", tagline: "Unlock achievements as you play and earn coins.", unlocked: "unlocked", next: "Next", done: "Completed ✓", noProfile: "Reserve your @ to earn coins and keep your achievements.", cta: "Reserve my @" },
  es: { title: "Logros", tagline: "Desbloquea logros jugando y gana coins.", unlocked: "desbloqueados", next: "Siguiente", done: "Completado ✓", noProfile: "Reserva tu @ para ganar coins y guardar tus logros.", cta: "Reservar mi @" },
  it: { title: "Imprese", tagline: "Sblocca imprese giocando e guadagna coins.", unlocked: "sbloccate", next: "Prossimo", done: "Completato ✓", noProfile: "Prenota il tuo @ per guadagnare coins e tenere le tue imprese.", cta: "Prenota il mio @" },
  pt: { title: "Conquistas", tagline: "Desbloqueie conquistas jogando e ganhe coins.", unlocked: "desbloqueadas", next: "Próximo", done: "Concluído ✓", noProfile: "Reserve seu @ para ganhar coins e guardar suas conquistas.", cta: "Reservar meu @" },
  de: { title: "Erfolge", tagline: "Schalte Erfolge frei und verdiene Coins.", unlocked: "freigeschaltet", next: "Nächstes", done: "Abgeschlossen ✓", noProfile: "Sichere dir dein @, um Coins zu verdienen und Erfolge zu behalten.", cta: "Mein @ sichern" },
  ja: { title: "実績", tagline: "プレイして実績を解除し、コインを獲得しよう。", unlocked: "解除済み", next: "次", done: "達成 ✓", noProfile: "@を登録してコインを獲得し、実績を保存しよう。", cta: "@を登録" },
  zh: { title: "成就", tagline: "边玩边解锁成就，赚取金币。", unlocked: "已解锁", next: "下一个", done: "已完成 ✓", noProfile: "注册你的 @ 来赚取金币并保存成就。", cta: "注册我的 @" },
};

// achievements of one family, ascending by threshold.
function familyAchievements(familyId: string): Achievement[] {
  return ALL_ACHIEVEMENTS.filter((a) => a.familyId === familyId);
}

export default async function HautFaitsPage() {
  const locale = getLocale() as Locale;
  const lang = locale as AchLang;
  const s = STR[locale] ?? STR.en;

  // Resolve identity + pull the stats snapshot.
  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;

  let metrics: Record<string, number> = {};
  let coinBalance = 0;
  let hasProfile = false;
  try {
    const { data } = await getSupabase().rpc("get_achievement_stats", {
      p_user_id: auth.user?.id ?? null,
      p_claim_token: claimToken,
    });
    const st = (data ?? {}) as {
      has_profile?: boolean;
      metrics?: Record<string, number>;
      coin_balance?: number;
    };
    hasProfile = !!st.has_profile;
    metrics = st.metrics ?? {};
    coinBalance = st.coin_balance ?? 0;
  } catch {
    // fall through with empty stats
  }

  const totalDone = ALL_ACHIEVEMENTS.reduce(
    (n, a) => n + ((metrics[a.metric] ?? 0) >= a.threshold ? 1 : 0),
    0,
  );

  return (
    <article className="space-y-7 fade-up">
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          🏅 {s.title}
        </h1>
        <p className="text-white/70">{s.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <div className="glass rounded-2xl px-4 py-3">
            <div className="text-2xl font-display text-amber-300">🪙 {coinBalance.toLocaleString()}</div>
            <div className="text-xs uppercase tracking-widest text-white/40">coins</div>
          </div>
          <div className="glass rounded-2xl px-4 py-3">
            <div className="text-2xl font-display text-white">
              {totalDone.toLocaleString()}
              <span className="text-white/40 text-lg"> / {ACHIEVEMENT_COUNT}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-white/40">{s.unlocked}</div>
          </div>
        </div>
      </header>

      {!hasProfile && (
        <Link
          href="/me"
          className="block rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-400/30 px-5 py-4 hover:from-pink-500/30 hover:to-purple-600/30 transition"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-white/80">{s.noProfile}</span>
            <span className="shrink-0 font-semibold text-pink-200">{s.cta} →</span>
          </div>
        </Link>
      )}

      {CATEGORY_ORDER.map((cat) => {
        const families = ALL_FAMILIES.filter((f) => f.category === cat);
        if (families.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              {categoryLabel(cat, lang)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {families.map((fam) => {
                const list = familyAchievements(fam.id);
                if (list.length === 0) return null;
                const value = metrics[fam.metric] ?? 0;
                const doneList = list.filter((a) => value >= a.threshold);
                const next = list.find((a) => value < a.threshold) ?? null;
                const name = renderAchievement(list[0], lang).title;
                const maxed = next === null;
                const pct = next
                  ? Math.min(100, Math.round((value / next.threshold) * 100))
                  : 100;
                return (
                  <div
                    key={fam.id}
                    className={`glass rounded-2xl px-4 py-3.5 ${maxed ? "ring-1 ring-amber-400/40" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-2xl shrink-0" aria-hidden>{fam.emoji}</span>
                        <span className="font-semibold text-white truncate">{name}</span>
                      </div>
                      <span className="text-xs tabular-nums text-white/45 shrink-0">
                        {doneList.length}/{list.length}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${maxed ? "bg-amber-400" : "bg-gradient-to-r from-pink-500 to-purple-500"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="mt-1.5 flex items-center justify-between gap-2 text-xs">
                      {maxed ? (
                        <span className="text-amber-300 font-medium">{s.done}</span>
                      ) : (
                        <span className="text-white/55 truncate">
                          {s.next}: {renderAchievement(next!, lang).desc}
                        </span>
                      )}
                      {!maxed && (
                        <span className="text-amber-300/90 shrink-0 tabular-nums">
                          +{next!.coinReward} 🪙
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </article>
  );
}
