import { Suspense } from "react";
import type { Metadata } from "next";
import CreatePollForm from "./create-poll-form";
import FeaturedAsks from "./featured-asks";
import SeoFooter from "./seo-footer";
import DailyCardSection from "./_home/daily-card-section";
import TrendingFeed from "./_home/trending-feed";
import WorldVibesSection from "./_home/world-vibes-section";
import {
  DailyCardSkeleton,
  FeaturedAsksSkeleton,
  TrendingFeedSkeleton,
  WorldVibesSkeleton,
} from "./_home/skeletons";
import { getLocale } from "@/lib/i18n-server";
import { t } from "@/lib/i18n";

export const dynamic = "force-dynamic";

const HOME_META: Record<string, { title: string; description: string }> = {
  fr: {
    title: "moomz — sondages express & vibe check en live",
    description:
      "Crée un sondage en 10 secondes, partage le lien, vois les votes tomber en direct. Gratuit, sans compte, anonyme. Vibe check Gen Z, this-or-that, débats.",
  },
  en: {
    title: "moomz — quick polls & live vibe check",
    description:
      "Make a poll in 10 seconds, share the link, watch the votes roll in live. Free, no account, anonymous. Gen Z vibe check, this-or-that, hot takes.",
  },
  es: {
    title: "moomz — encuestas rápidas y vibe check en vivo",
    description:
      "Crea una encuesta en 10 segundos, comparte el enlace y mira los votos en vivo. Gratis, sin cuenta, anónimo. Vibe check Gen Z, this-or-that, debates.",
  },
  it: {
    title: "moomz — sondaggi lampo e vibe check in diretta",
    description:
      "Crea un sondaggio in 10 secondi, condividi il link, guarda i voti in diretta. Gratis, senza account, anonimo. Vibe check Gen Z, this-or-that, dibattiti.",
  },
  pt: {
    title: "moomz — sondagens rápidas e vibe check ao vivo",
    description:
      "Cria uma sondagem em 10 segundos, partilha o link e vê os votos ao vivo. Grátis, sem conta, anónimo. Vibe check Gen Z, this-or-that, debates.",
  },
  de: {
    title: "moomz — schnelle Umfragen & Live Vibe Check",
    description:
      "Erstelle eine Umfrage in 10 Sekunden, teile den Link und sieh die Stimmen live. Kostenlos, ohne Konto, anonym. Gen Z Vibe Check, this-or-that, Debatten.",
  },
  ja: {
    title: "moomz — 10秒で作る投票・ライブ vibe check",
    description:
      "10秒で投票を作成、リンクを共有、リアルタイムで結果を確認。無料・登録不要・匿名。Z世代の vibe check、this-or-that、議論にどうぞ。",
  },
  zh: {
    title: "moomz — 极速投票 · 实时氛围测试",
    description:
      "10 秒创建投票,分享链接,实时查看投票结果。免费、无需注册、匿名。Z 世代 vibe check、二选一、热议话题。",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const meta = HOME_META[locale] ?? HOME_META.en;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "https://moomz.com/" },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://moomz.com/",
      type: "website",
      siteName: "moomz",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function HomePage() {
  const locale = getLocale();
  const tx = (k: string) => t(k, locale);

  const meta = HOME_META[locale] ?? HOME_META.en;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "moomz",
      url: "https://moomz.com/",
      inLanguage: locale,
      description: meta.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "moomz",
      url: "https://moomz.com/",
      logo: "https://moomz.com/apple-icon",
      sameAs: ["https://github.com/bendrop740i/moomz"],
    },
  ];

  return (
    <div className="space-y-7 fade-up">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="text-center space-y-1.5">
        <h1 className="font-display text-6xl sm:text-7xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,61,139,0.4)]">
          moomz
        </h1>
        <p className="text-white/50 text-sm sm:text-base text-balance">
          {tx("home.tagline")}
        </p>
      </header>

      <Suspense fallback={<DailyCardSkeleton />}>
        <DailyCardSection />
      </Suspense>

      <CreatePollForm />

      <Suspense fallback={<FeaturedAsksSkeleton />}>
        <FeaturedAsks />
      </Suspense>

      <Suspense fallback={<TrendingFeedSkeleton />}>
        <TrendingFeed />
      </Suspense>

      <Suspense fallback={<WorldVibesSkeleton />}>
        <WorldVibesSection />
      </Suspense>

      <p className="text-center text-xs text-white/30">{tx("home.footer")}</p>

      <SeoFooter locale={locale === "en" ? "en" : "fr"} />
    </div>
  );
}
