import { Suspense } from "react";
import type { Metadata } from "next";
import CreatePollForm from "./create-poll-form";
import FeaturedAsks from "./featured-asks";
import DailyCardSection from "./_home/daily-card-section";
import TrendingFeed from "./_home/trending-feed";
import WorldVibesSection from "./_home/world-vibes-section";
import {
  DailyCardSkeleton,
  FeaturedAsksSkeleton,
  TrendingFeedSkeleton,
  WorldVibesSkeleton,
} from "./_home/skeletons";
import PageHero from "./page-hero";
import QuickChips from "./quick-chips";
import WhyMoomz from "./why-moomz";
import FeaturedRead from "./featured-read";
import { getLocale } from "@/lib/i18n-server";
import { t, type Locale } from "@/lib/i18n";
import { jsonLdHtml } from "@/lib/json-ld";

const TAGLINES: Record<Locale, string[]> = {
  fr: [
    "Vote, partage, vois la vibe en live.",
    "10 secondes pour poser la vraie question.",
    "Le lien circule, les votes tombent en live.",
    "Le vibe-check le plus rapide du game.",
    "Anonyme · 10s · zéro inscription.",
  ],
  en: [
    "Vote, share, see the vibe live.",
    "10 seconds to ask the real question.",
    "Drop the link, watch the votes roll in.",
    "The fastest vibe-check in the game.",
    "Anonymous · 10s · no signup.",
  ],
  es: [
    "Vota, comparte, ve la vibe en vivo.",
    "10 segundos para hacer la pregunta real.",
    "Comparte el link, los votos llegan en vivo.",
    "El vibe-check más rápido que existe.",
    "Anónimo · 10s · sin registro.",
  ],
  it: [
    "Vota, condividi, vedi la vibe in diretta.",
    "10 secondi per fare la domanda vera.",
    "Condividi il link, i voti arrivano live.",
    "Il vibe-check più veloce in giro.",
    "Anonimo · 10s · zero account.",
  ],
  pt: [
    "Vota, compartilha, vê a vibe ao vivo.",
    "10 segundos pra fazer a pergunta real.",
    "Manda o link, os votos chegam ao vivo.",
    "O vibe-check mais rápido que existe.",
    "Anônimo · 10s · sem cadastro.",
  ],
  de: [
    "Vote, teile, sieh die Vibe live.",
    "10 Sekunden für die echte Frage.",
    "Link teilen, Votes laufen live ein.",
    "Der schnellste Vibe-Check im Game.",
    "Anonym · 10s · ohne Account.",
  ],
  ja: [
    "投票して共有、ライブで空気感を見よう。",
    "10秒で本当の質問を投げる。",
    "リンクを送れば票がリアルタイムで集まる。",
    "ゲーム史上最速のバイブチェック。",
    "匿名・10秒・登録なし。",
  ],
  zh: [
    "投票、分享、实时看氛围。",
    "10秒问出真正想问的。",
    "丢一个链接，票实时进来。",
    "最快的氛围测验，就这。",
    "匿名 · 10秒 · 无需注册。",
  ],
};

const CHIP_LABELS: Record<Locale, { vibe: string; drama: string; wtf: string; daily: string; read: string; rdv: string }> = {
  fr: { vibe: "vibe check", drama: "drama", wtf: "wtf stories", daily: "daily", read: "📖 read", rdv: "premier rdv" },
  en: { vibe: "vibe check", drama: "drama", wtf: "wtf stories", daily: "daily", read: "📖 read", rdv: "first date" },
  es: { vibe: "vibe check", drama: "drama", wtf: "historias wtf", daily: "daily", read: "📖 read", rdv: "primera cita" },
  it: { vibe: "vibe check", drama: "drama", wtf: "storie wtf", daily: "daily", read: "📖 read", rdv: "primo app." },
  pt: { vibe: "vibe check", drama: "drama", wtf: "histórias wtf", daily: "daily", read: "📖 read", rdv: "primeiro encontro" },
  de: { vibe: "vibe check", drama: "drama", wtf: "wtf storys", daily: "daily", read: "📖 read", rdv: "erstes Date" },
  ja: { vibe: "バイブ", drama: "ドラマ", wtf: "WTF話", daily: "デイリー", read: "📖 読む", rdv: "初デート" },
  zh: { vibe: "氛围", drama: "狗血", wtf: "WTF故事", daily: "每日", read: "📖 故事", rdv: "初次约会" },
};

const FEATURED_READ_TITLES: Record<Locale, string> = {
  fr: "📖 À lire — threads WTF du jour",
  en: "📖 Read — today's WTF threads",
  es: "📖 Leer — hilos WTF de hoy",
  it: "📖 Leggi — thread WTF del giorno",
  pt: "📖 Ler — threads WTF do dia",
  de: "📖 Lesen — WTF-Threads heute",
  ja: "📖 読む — 今日のWTFスレ",
  zh: "📖 故事 — 今日 WTF 帖",
};

const ZONE_LABELS: Record<Locale, { vote: string; more: string }> = {
  fr: { vote: "🔥 Vote du moment", more: "✨ Encore plus" },
  en: { vote: "🔥 Vote now", more: "✨ Even more" },
  es: { vote: "🔥 Vota ahora", more: "✨ Aún más" },
  it: { vote: "🔥 Vota adesso", more: "✨ Ancora di più" },
  pt: { vote: "🔥 Vota agora", more: "✨ Ainda mais" },
  de: { vote: "🔥 Jetzt voten", more: "✨ Noch mehr" },
  ja: { vote: "🔥 いま投票", more: "✨ もっと見る" },
  zh: { vote: "🔥 马上投票", more: "✨ 还有更多" },
};

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

  const zones = ZONE_LABELS[locale] ?? ZONE_LABELS.en;

  return (
    <div className="space-y-7 fade-up">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }}
      />

      {/* ── Zone 1 — Crée : le hero parle de lui-même, pas de label ── */}
      <section className="space-y-7">
        <PageHero taglines={TAGLINES[locale] ?? TAGLINES.en} />
        <CreatePollForm />
        <QuickChips labels={CHIP_LABELS[locale] ?? CHIP_LABELS.en} />
      </section>

      {/* ── Zone 2 — Vote ── */}
      <section className="space-y-7">
        <p className="text-xs uppercase tracking-widest text-white/40">{zones.vote}</p>
        {/* Daily Moomz is the primary hook — bring people back every day. */}
        <Suspense fallback={<DailyCardSkeleton />}>
          <DailyCardSection />
        </Suspense>
        <div id="trending" className="scroll-mt-4">
          <Suspense fallback={<TrendingFeedSkeleton />}>
            <TrendingFeed />
          </Suspense>
        </div>
      </section>

      {/* ── Zone 3 — Plus ── */}
      <section className="space-y-7">
        <p className="text-xs uppercase tracking-widest text-white/40">{zones.more}</p>
        <FeaturedRead locale={locale} title={FEATURED_READ_TITLES[locale] ?? FEATURED_READ_TITLES.en} />
        <Suspense fallback={<FeaturedAsksSkeleton />}>
          <FeaturedAsks />
        </Suspense>
        <Suspense fallback={<WorldVibesSkeleton />}>
          <WorldVibesSection />
        </Suspense>
        <WhyMoomz locale={locale} />
      </section>

      <p className="text-center text-xs text-white/30">{tx("home.footer")}</p>
    </div>
  );
}
