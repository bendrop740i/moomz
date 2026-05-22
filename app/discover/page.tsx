import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n-server";
import { type Locale } from "@/lib/i18n";
import ImmersiveFeed from "../_feed/immersive-feed";

export const dynamic = "force-dynamic";

type DiscoverMeta = { title: string; description: string; descShort: string };
const DISCOVER_META: Record<Locale, DiscoverMeta> = {
  fr: {
    title: "Discover — vibe check & sondages tendance | moomz",
    description: "Swipe le feed Discover de moomz : vibe check Gen Z, sondages tendance et débats viraux en live. Vote, partage, découvre les opinions du moment.",
    descShort: "Swipe le feed Discover de moomz : vibe check Gen Z, sondages tendance et débats viraux en live.",
  },
  en: {
    title: "Discover — trending polls & vibe checks | moomz",
    description: "Swipe the moomz Discover feed: Gen Z vibe checks, trending polls, and live viral debates. Vote, share, discover what people think right now.",
    descShort: "Swipe the moomz Discover feed: trending polls and Gen Z vibe checks live.",
  },
  es: {
    title: "Discover — encuestas tendencia & vibe check | moomz",
    description: "Desliza el feed Discover de moomz: vibe check Gen Z, encuestas en tendencia y debates virales en vivo. Vota, comparte, descubre las opiniones del momento.",
    descShort: "Desliza el feed Discover de moomz: encuestas en tendencia y vibe check Gen Z en vivo.",
  },
  it: {
    title: "Discover — sondaggi trend & vibe check | moomz",
    description: "Scorri il feed Discover di moomz: vibe check Gen Z, sondaggi in trend e dibattiti virali in diretta. Vota, condividi, scopri le opinioni del momento.",
    descShort: "Scorri il feed Discover di moomz: sondaggi trend e vibe check Gen Z live.",
  },
  pt: {
    title: "Discover — enquetes em alta & vibe check | moomz",
    description: "Desliza o feed Discover do moomz: vibe check Gen Z, enquetes em alta e debates virais ao vivo. Vota, partilha, descobre as opiniões do momento.",
    descShort: "Desliza o feed Discover do moomz: enquetes em alta e vibe check Gen Z ao vivo.",
  },
  de: {
    title: "Discover — Trend-Umfragen & Vibe Check | moomz",
    description: "Swipe den moomz Discover-Feed: Gen Z Vibe Checks, Trend-Umfragen und virale Debatten live. Abstimmen, teilen, Meinungen des Moments entdecken.",
    descShort: "Swipe den moomz Discover-Feed: Trend-Umfragen und Gen Z Vibe Checks live.",
  },
  ja: {
    title: "Discover — トレンド投票 & バイブチェック | moomz",
    description: "moomz の Discover フィードをスワイプ：Gen Z バイブチェック、トレンド投票、バイラルな議論をリアルタイムで。投票して、シェアして、今の意見を発見しよう。",
    descShort: "moomz Discover フィードをスワイプ：トレンド投票と Gen Z バイブチェック。",
  },
  zh: {
    title: "Discover — 热门投票 & 氛围检测 | moomz",
    description: "滑动 moomz Discover 动态：Gen Z 氛围检测、热门投票和病毒式辩论实时直播。投票、分享、发现当下的观点。",
    descShort: "滑动 moomz Discover 动态：热门投票和 Gen Z 氛围检测。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale() as Locale;
  const m = DISCOVER_META[locale] ?? DISCOVER_META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/discover" },
    openGraph: {
      title: m.title,
      description: m.description,
      url: "https://moomz.com/discover",
      siteName: "moomz",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.descShort,
    },
  };
}

// `/discover` and `/` render the same immersive feed — `/discover` is kept as a
// stable alias (existing links, SEO) now that the app opens into the feed at `/`.
export default function DiscoverPage() {
  return <ImmersiveFeed />;
}
