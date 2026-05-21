import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { getSupabase } from "@/lib/supabase";
import { getServerSupabase } from "@/lib/supabase-server";
import { getLocale } from "@/lib/i18n-server";
import type { Locale } from "@/lib/i18n";
import BoutiqueGrid from "./boutique-grid";

export const dynamic = "force-dynamic";

// Emoji prefix for the title tab — matches the page h1 emoji.
const BOUTIQUE_TITLE_PREFIX: Record<Locale, string> = {
  fr: "Boutique", en: "Shop", es: "Tienda", it: "Negozio",
  pt: "Loja", de: "Shop", ja: "ショップ", zh: "商店",
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const prefix = BOUTIQUE_TITLE_PREFIX[locale] ?? BOUTIQUE_TITLE_PREFIX.en;
  return {
    title: `${prefix} — moomz`,
    robots: { index: false, follow: true },
  };
}

type Strings = {
  title: string;
  tagline: string;
  noProfile: string;
  cta: string;
  equip: string;
};

const STR: Record<Locale, Strings> = {
  fr: { title: "Boutique", tagline: "Dépense tes coins en palettes de couleurs pour tes sondages.", noProfile: "Réserve ton @ pour acheter et garder tes cosmétiques.", cta: "Réserver mon @", equip: "Équipe tes palettes depuis ton profil." },
  en: { title: "Shop", tagline: "Spend your coins on colour palettes for your polls.", noProfile: "Reserve your @ to buy and keep your cosmetics.", cta: "Reserve my @", equip: "Equip your palettes from your profile." },
  es: { title: "Tienda", tagline: "Gasta tus coins en paletas de colores para tus encuestas.", noProfile: "Reserva tu @ para comprar y guardar tus cosméticos.", cta: "Reservar mi @", equip: "Equipa tus paletas desde tu perfil." },
  it: { title: "Negozio", tagline: "Spendi i tuoi coins in palette di colori per i sondaggi.", noProfile: "Prenota il tuo @ per comprare e tenere i cosmetici.", cta: "Prenota il mio @", equip: "Equipaggia le palette dal tuo profilo." },
  pt: { title: "Loja", tagline: "Gaste seus coins em paletas de cores para suas enquetes.", noProfile: "Reserve seu @ para comprar e guardar seus cosméticos.", cta: "Reservar meu @", equip: "Equipe suas paletas no seu perfil." },
  de: { title: "Shop", tagline: "Gib deine Coins für Farbpaletten für deine Umfragen aus.", noProfile: "Sichere dir dein @, um Kosmetik zu kaufen und zu behalten.", cta: "Mein @ sichern", equip: "Rüste deine Paletten in deinem Profil aus." },
  ja: { title: "ショップ", tagline: "コインを使って投票用のカラーパレットを手に入れよう。", noProfile: "@を登録してコスメを購入・保存しよう。", cta: "@を登録", equip: "パレットはプロフィールで装備できます。" },
  zh: { title: "商店", tagline: "用金币购买投票用的配色方案。", noProfile: "注册你的 @ 来购买并保存你的装饰。", cta: "注册我的 @", equip: "在个人资料中装备你的配色。" },
};

export default async function BoutiquePage() {
  const locale = getLocale() as Locale;
  const s = STR[locale] ?? STR.en;

  const ssr = getServerSupabase();
  const { data: auth } = await ssr.auth.getUser();
  const claimToken = cookies().get("moomz_profile_token")?.value ?? null;

  let balance = 0;
  let points = 0;
  let topStreak = 0;
  let owned: string[] = [];
  let hasProfile = false;
  try {
    const { data } = await getSupabase().rpc("get_achievement_stats", {
      p_user_id: auth.user?.id ?? null,
      p_claim_token: claimToken,
    });
    const st = (data ?? {}) as {
      has_profile?: boolean;
      coin_balance?: number;
      metrics?: Record<string, number>;
      cosmetics_owned?: string[];
    };
    hasProfile = !!st.has_profile;
    balance = st.coin_balance ?? 0;
    points = st.metrics?.totalPoints ?? 0;
    topStreak = st.metrics?.voteStreakTop ?? 0;
    owned = st.cosmetics_owned ?? [];
  } catch {
    // fall through with empty state
  }

  return (
    <article className="space-y-6 fade-up">
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          🛍️ {s.title}
        </h1>
        <p className="text-white/70">{s.tagline}</p>
        <div className="glass rounded-2xl px-4 py-3 inline-block">
          <div className="text-2xl font-display text-amber-300">🪙 {balance.toLocaleString()}</div>
          <div className="text-xs uppercase tracking-widest text-white/40">coins</div>
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

      <BoutiqueGrid
        balance={balance}
        points={points}
        topStreak={topStreak}
        owned={owned}
        lang={locale}
      />

      <p className="text-xs text-white/40">{s.equip}</p>
    </article>
  );
}
