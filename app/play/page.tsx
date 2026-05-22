import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getLocale } from "@/lib/i18n-server";
import DailyCardSection from "@/app/_home/daily-card-section";
import { DailyCardSkeleton } from "@/app/_home/skeletons";
import WalletBanner from "@/app/_play/wallet-banner";

export const dynamic = "force-dynamic";

const HUB_LOCALES = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"] as const;
type HubLocale = (typeof HUB_LOCALES)[number];

const PLAY_META_DESC: Record<HubLocale, string> = {
  fr: "Le hub jeu de moomz : gagne des coins, débloque 418 haut faits, dépense en boutique, joue aux quiz, parie sur les sondages avec les prédictions.",
  en: "moomz play hub: earn coins, unlock 418 achievements, spend in the shop, play quizzes, and bet on polls with predictions.",
  es: "Hub de juego de moomz: gana coins, desbloquea 418 logros, gasta en la tienda, juega quizzes y apuesta en encuestas con predicciones.",
  it: "Hub di gioco di moomz: guadagna coins, sblocca 418 imprese, spendi nel negozio, gioca ai quiz e scommetti sui sondaggi con le previsioni.",
  pt: "Hub de jogo do moomz: ganha coins, desbloqueia 418 conquistas, gasta na loja, joga quizzes e aposta em enquetes com previsões.",
  de: "moomz Spielhub: Verdiene Coins, schalte 418 Erfolge frei, gib sie im Shop aus, spiele Quizze und setze auf Umfragen mit Vorhersagen.",
  ja: "moomz プレイハブ：コインを稼ぎ、418の実績を解除し、ショップで使い、クイズをプレイし、予想で投票に賭けよう。",
  zh: "moomz 游戏中心：赚取金币、解锁418个成就、在商店消费、玩测验，并用预测押注投票。",
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  const hl: HubLocale = (HUB_LOCALES as readonly string[]).includes(locale)
    ? (locale as HubLocale)
    : "en";
  return {
    title: "Play — moomz",
    description: PLAY_META_DESC[hl],
    robots: { index: false, follow: true },
  };
}

type PlayStrings = {
  kicker: string;
  title: string;
  sub: string;
  daily: string;
  dailySub: string;
  hubs: string;
  hubsSub: string;
  achTitle: string;
  achDesc: string;
  shopTitle: string;
  shopDesc: string;
  quizTitle: string;
  quizDesc: string;
  formationTitle: string;
  formationDesc: string;
  predTitle: string;
  predDesc: string;
  predCta: string;
  cta: string;
};

const PLAY_T: Record<HubLocale, PlayStrings> = {
  fr: {
    kicker: "🎮 play · moomz",
    title: "Jouer",
    sub: "Gagne des coins, débloque des haut faits, dépense-les. Tout ton terrain de jeu moomz au même endroit.",
    daily: "Le Daily Moomz",
    dailySub: "Le sondage du jour — vote pour démarrer ta série.",
    hubs: "Ton terrain de jeu",
    hubsSub: "Gagne, dépense, progresse — choisis par où commencer.",
    achTitle: "Haut faits",
    achDesc: "418 haut faits à débloquer en votant et en créant des sondages.",
    shopTitle: "Boutique",
    shopDesc: "Dépense tes coins en palettes de couleurs pour tes sondages.",
    quizTitle: "Quiz",
    quizDesc: "Quiz notés : sciences, culture et plus — teste-toi.",
    formationTitle: "Formation",
    formationDesc: "Modules concrets : forme, argent, mental, style…",
    predTitle: "Prédictions",
    predDesc: "Parie des coins sur le résultat d'un sondage. Vois juste, gagne plus — zéro argent réel.",
    predCta: "Trouver un sondage →",
    cta: "Aller voter et gagner des coins →",
  },
  en: {
    kicker: "🎮 play · moomz",
    title: "Play",
    sub: "Earn coins, unlock achievements, spend them. Your whole moomz playground, in one place.",
    daily: "The Daily Moomz",
    dailySub: "Today's poll — vote to kick off your streak.",
    hubs: "Your playground",
    hubsSub: "Earn, spend, level up — pick where to start.",
    achTitle: "Achievements",
    achDesc: "418 achievements to unlock by voting and creating polls.",
    shopTitle: "Shop",
    shopDesc: "Spend your coins on colour palettes for your polls.",
    quizTitle: "Quizzes",
    quizDesc: "Scored quizzes: science, culture and more — test yourself.",
    formationTitle: "Courses",
    formationDesc: "Practical modules: fitness, money, mindset, style…",
    predTitle: "Predictions",
    predDesc: "Bet coins on a poll's outcome. Call it right, win more — no real money.",
    predCta: "Find a poll →",
    cta: "Go vote and earn coins →",
  },
  es: {
    kicker: "🎮 play · moomz",
    title: "Jugar",
    sub: "Gana coins, desbloquea logros, gástalos. Todo tu terreno de juego moomz en un solo lugar.",
    daily: "El Daily Moomz",
    dailySub: "La encuesta del día — vota para empezar tu racha.",
    hubs: "Tu terreno de juego",
    hubsSub: "Gana, gasta, progresa — elige por dónde empezar.",
    achTitle: "Logros",
    achDesc: "418 logros para desbloquear votando y creando encuestas.",
    shopTitle: "Tienda",
    shopDesc: "Gasta tus coins en paletas de colores para tus encuestas.",
    quizTitle: "Quizzes",
    quizDesc: "Quizzes con puntuación: ciencia, cultura y más — ponte a prueba.",
    formationTitle: "Cursos",
    formationDesc: "Módulos prácticos: forma física, dinero, mentalidad, estilo…",
    predTitle: "Predicciones",
    predDesc: "Apuesta coins al resultado de una encuesta. Acierta y gana más — sin dinero real.",
    predCta: "Buscar una encuesta →",
    cta: "Vota y gana coins →",
  },
  it: {
    kicker: "🎮 play · moomz",
    title: "Gioca",
    sub: "Guadagna coins, sblocca imprese, spendili. Tutto il tuo campo da gioco moomz in un unico posto.",
    daily: "Il Daily Moomz",
    dailySub: "Il sondaggio del giorno — vota per iniziare la tua serie.",
    hubs: "Il tuo campo da gioco",
    hubsSub: "Guadagna, spendi, cresci — scegli da dove iniziare.",
    achTitle: "Imprese",
    achDesc: "418 imprese da sbloccare votando e creando sondaggi.",
    shopTitle: "Negozio",
    shopDesc: "Spendi i tuoi coins in palette di colori per i sondaggi.",
    quizTitle: "Quiz",
    quizDesc: "Quiz con punteggio: scienza, cultura e altro — mettiti alla prova.",
    formationTitle: "Corsi",
    formationDesc: "Moduli pratici: forma, soldi, mentalità, stile…",
    predTitle: "Previsioni",
    predDesc: "Scommetti coins sul risultato di un sondaggio. Indovina e vinci di più — niente soldi veri.",
    predCta: "Trova un sondaggio →",
    cta: "Vai a votare e guadagna coins →",
  },
  pt: {
    kicker: "🎮 play · moomz",
    title: "Jogar",
    sub: "Ganha coins, desbloqueia conquistas, gasta-os. Todo o teu recreio moomz num só lugar.",
    daily: "O Daily Moomz",
    dailySub: "A enquete do dia — vota para começar a tua sequência.",
    hubs: "O teu recreio",
    hubsSub: "Ganha, gasta, evolui — escolhe por onde começar.",
    achTitle: "Conquistas",
    achDesc: "418 conquistas para desbloquear votando e criando enquetes.",
    shopTitle: "Loja",
    shopDesc: "Gasta os teus coins em paletas de cores para as tuas enquetes.",
    quizTitle: "Quizzes",
    quizDesc: "Quizzes com pontuação: ciência, cultura e mais — testa-te.",
    formationTitle: "Cursos",
    formationDesc: "Módulos práticos: forma, dinheiro, mentalidade, estilo…",
    predTitle: "Previsões",
    predDesc: "Aposta coins no resultado de uma enquete. Acerta e ganha mais — sem dinheiro real.",
    predCta: "Encontrar uma enquete →",
    cta: "Vai votar e ganhar coins →",
  },
  de: {
    kicker: "🎮 play · moomz",
    title: "Spielen",
    sub: "Verdiene Coins, schalte Erfolge frei, gib sie aus. Dein ganzer moomz-Spielplatz an einem Ort.",
    daily: "Der Daily Moomz",
    dailySub: "Die Umfrage des Tages — stimme ab und starte deine Serie.",
    hubs: "Dein Spielplatz",
    hubsSub: "Verdienen, ausgeben, aufsteigen — wähle deinen Einstieg.",
    achTitle: "Erfolge",
    achDesc: "418 Erfolge, die du durch Abstimmen und Erstellen freischaltest.",
    shopTitle: "Shop",
    shopDesc: "Gib deine Coins für Farbpaletten für deine Umfragen aus.",
    quizTitle: "Quizze",
    quizDesc: "Bewertete Quizze: Wissenschaft, Kultur und mehr — teste dich.",
    formationTitle: "Kurse",
    formationDesc: "Praktische Module: Fitness, Geld, Mindset, Stil…",
    predTitle: "Vorhersagen",
    predDesc: "Setze Coins auf den Ausgang einer Umfrage. Liegst du richtig, gewinnst du mehr — kein echtes Geld.",
    predCta: "Umfrage finden →",
    cta: "Jetzt abstimmen und Coins verdienen →",
  },
  ja: {
    kicker: "🎮 play · moomz",
    title: "プレイ",
    sub: "コインを稼ぎ、実績を解除し、使おう。moomz の遊び場がすべてここに。",
    daily: "Daily Moomz",
    dailySub: "今日の投票 — 投票して連続記録をスタート。",
    hubs: "あなたの遊び場",
    hubsSub: "稼いで、使って、レベルアップ — どこから始める?",
    achTitle: "実績",
    achDesc: "投票と投票作成で解除できる 418 の実績。",
    shopTitle: "ショップ",
    shopDesc: "コインを使って投票用のカラーパレットを手に入れよう。",
    quizTitle: "クイズ",
    quizDesc: "採点付きクイズ:科学、文化など — 自分を試そう。",
    formationTitle: "コース",
    formationDesc: "実践モジュール:運動、お金、メンタル、スタイル…",
    predTitle: "予想",
    predDesc: "投票の結果にコインを賭けよう。当たればもっと稼げる — 実際のお金は使いません。",
    predCta: "投票を探す →",
    cta: "投票してコインを稼ごう →",
  },
  zh: {
    kicker: "🎮 play · moomz",
    title: "玩",
    sub: "赚取金币、解锁成就、花掉它们。你的整个 moomz 游乐场，尽在一处。",
    daily: "每日 Moomz",
    dailySub: "今日投票 — 投票开启你的连续记录。",
    hubs: "你的游乐场",
    hubsSub: "赚取、消费、升级 — 选择从哪里开始。",
    achTitle: "成就",
    achDesc: "通过投票和创建投票解锁 418 个成就。",
    shopTitle: "商店",
    shopDesc: "用金币购买投票用的配色方案。",
    quizTitle: "测验",
    quizDesc: "带评分的测验：科学、文化等等 — 测试自己。",
    formationTitle: "课程",
    formationDesc: "实用模块：健身、赚钱、心态、穿搭…",
    predTitle: "预测",
    predDesc: "用金币押注投票结果。猜对了赢得更多 — 不涉及真实货币。",
    predCta: "去找一个投票 →",
    cta: "去投票赚金币 →",
  },
};

type NavCard = {
  emoji: string;
  href: string;
  titleKey: "achTitle" | "shopTitle" | "quizTitle" | "formationTitle";
  descKey: "achDesc" | "shopDesc" | "quizDesc" | "formationDesc";
  glow: string;
};

const NAV_CARDS: NavCard[] = [
  {
    emoji: "🏅",
    href: "/haut-faits",
    titleKey: "achTitle",
    descKey: "achDesc",
    glow: "from-amber-400/15 to-yellow-500/5",
  },
  {
    emoji: "🛍️",
    href: "/boutique",
    titleKey: "shopTitle",
    descKey: "shopDesc",
    glow: "from-pink-500/15 to-purple-600/5",
  },
  {
    emoji: "🧠",
    href: "/quiz",
    titleKey: "quizTitle",
    descKey: "quizDesc",
    glow: "from-sky-400/15 to-indigo-500/5",
  },
  {
    emoji: "🎓",
    href: "/formation",
    titleKey: "formationTitle",
    descKey: "formationDesc",
    glow: "from-emerald-400/15 to-teal-500/5",
  },
];

export default function PlayPage() {
  const locale = getLocale();
  const hl: HubLocale = (HUB_LOCALES as readonly string[]).includes(locale)
    ? (locale as HubLocale)
    : "en";
  const t = PLAY_T[hl] ?? PLAY_T.en;

  return (
    <div className="space-y-8 fade-up">
      {/* Header */}
      <header className="space-y-3 text-center">
        <div className="text-xs uppercase tracking-widest text-white/40">
          {t.kicker}
        </div>
        <h1 className="font-display text-4xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-white/60 text-balance max-w-2xl mx-auto">{t.sub}</p>
      </header>

      {/* Wallet banner — points / streak / coins */}
      <WalletBanner locale={hl} />

      {/* Daily Moomz */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🌟 {t.daily}</h2>
          <p className="text-sm text-white/50">{t.dailySub}</p>
        </div>
        <Suspense fallback={<DailyCardSkeleton />}>
          <DailyCardSection />
        </Suspense>
      </section>

      {/* Big nav cards grid */}
      <section className="space-y-3">
        <div>
          <h2 className="font-display text-2xl text-white">🕹️ {t.hubs}</h2>
          <p className="text-sm text-white/50">{t.hubsSub}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {NAV_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`glass rounded-2xl p-5 hover:bg-white/10 transition flex items-start gap-4 bg-gradient-to-br ${card.glow}`}
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {card.emoji}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl text-white">
                  {t[card.titleKey]}
                </span>
                <span className="text-xs text-white/55">
                  {t[card.descKey]}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Predictions explainer */}
      <section className="space-y-3">
        <div className="glass rounded-3xl p-6 bg-gradient-to-br from-purple-600/20 to-pink-500/10 flex flex-col items-center gap-3 text-center">
          <span className="text-5xl leading-none" aria-hidden="true">
            🔮
          </span>
          <h2 className="font-display text-2xl text-white">{t.predTitle}</h2>
          <p className="text-sm text-white/65 max-w-md text-balance">
            {t.predDesc}
          </p>
          <Link
            href="/discover"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/25 to-purple-500/25 border border-pink-400/30 px-4 py-2 text-sm font-semibold text-white hover:from-pink-500/35 hover:to-purple-500/35 transition"
          >
            {t.predCta}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <Link
        href="/discover"
        className="block rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 text-center font-display text-xl hover:scale-[1.02] transition shadow-lg shadow-pink-500/30"
      >
        {t.cta}
      </Link>
    </div>
  );
}
