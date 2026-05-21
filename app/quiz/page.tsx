import type { Metadata } from "next";
import Link from "next/link";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import { allQuizzes, QUIZ_TOPICS, topicLabel, quizzesByTopic } from "@/lib/quizzes";
import { getLocale } from "@/lib/i18n-server";
import { quizUrl } from "@/lib/quizzes/types";

// 8-lang chrome for the (mixed-locale) quiz hub. Keyed off the visitor locale.
const QUIZ_HUB_CHROME: Record<
  HubLocale,
  {
    sub: (quizzes: number, questions: number) => string;
    tagline: string;
    questions: string;
    poweredBy: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  fr: {
    sub: (q, n) => `${q} quiz · ${n} questions · chaque réponse expliquée`,
    tagline: "🎯 Joue, apprends, partage ton score.",
    questions: "questions",
    poweredBy: "✨ Propulsé par moomz",
    ctaTitle: "Tu veux créer ton propre vibe check ?",
    ctaBody:
      "En plus des quiz, moomz te laisse créer un sondage viral en 10 secondes et le partager partout.",
    ctaButton: "Créer mon sondage",
  },
  en: {
    sub: (q, n) => `${q} quizzes · ${n} questions · every answer explained`,
    tagline: "🎯 Play, learn, share your score.",
    questions: "questions",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Want to create your own vibe check?",
    ctaBody:
      "Beyond quizzes, moomz lets you create a viral poll in 10 seconds and share it anywhere.",
    ctaButton: "Create my poll",
  },
  es: {
    sub: (q, n) => `${q} quiz · ${n} preguntas · cada respuesta explicada`,
    tagline: "🎯 Juega, aprende, comparte tu puntuación.",
    questions: "preguntas",
    poweredBy: "✨ Impulsado por moomz",
    ctaTitle: "¿Quieres crear tu propio vibe check?",
    ctaBody:
      "Además de los quiz, moomz te deja crear una encuesta viral en 10 segundos y compartirla donde quieras.",
    ctaButton: "Crear mi encuesta",
  },
  it: {
    sub: (q, n) => `${q} quiz · ${n} domande · ogni risposta spiegata`,
    tagline: "🎯 Gioca, impara, condividi il tuo punteggio.",
    questions: "domande",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Vuoi creare il tuo vibe check?",
    ctaBody:
      "Oltre ai quiz, moomz ti fa creare un sondaggio virale in 10 secondi e condividerlo ovunque.",
    ctaButton: "Crea il mio sondaggio",
  },
  pt: {
    sub: (q, n) => `${q} quizzes · ${n} perguntas · cada resposta explicada`,
    tagline: "🎯 Jogue, aprenda, compartilhe sua pontuação.",
    questions: "perguntas",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Quer criar o seu próprio vibe check?",
    ctaBody:
      "Além dos quizzes, o moomz deixa você criar uma enquete viral em 10 segundos e compartilhar em qualquer lugar.",
    ctaButton: "Criar minha enquete",
  },
  de: {
    sub: (q, n) => `${q} Quizze · ${n} Fragen · jede Antwort erklärt`,
    tagline: "🎯 Spiele, lerne, teile dein Ergebnis.",
    questions: "Fragen",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Willst du deinen eigenen Vibe-Check erstellen?",
    ctaBody:
      "Neben Quizzen kannst du mit moomz in 10 Sekunden eine virale Umfrage erstellen und überall teilen.",
    ctaButton: "Meine Umfrage erstellen",
  },
  ja: {
    sub: (q, n) => `${q}個のクイズ · ${n}問 · すべての答えに解説付き`,
    tagline: "🎯 遊んで、学んで、スコアをシェアしよう。",
    questions: "問",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "自分だけのバイブチェックを作ってみる?",
    ctaBody:
      "クイズに加えて、moomzなら10秒でバズる投票を作ってどこでもシェアできます。",
    ctaButton: "投票を作る",
  },
  zh: {
    sub: (q, n) => `${q} 个测验 · ${n} 道题 · 每个答案都有解析`,
    tagline: "🎯 玩游戏、学知识、分享你的得分。",
    questions: "道题",
    poweredBy: "✨ 由 moomz 驱动",
    ctaTitle: "想创建你自己的 vibe check 吗?",
    ctaBody:
      "除了测验,moomz 还能让你在 10 秒内创建一个爆款投票并随处分享。",
    ctaButton: "创建我的投票",
  },
};

const QUIZ_HUB_LOCALES: HubLocale[] = ["fr", "en", "es", "it", "pt", "de", "ja", "zh"];

export const dynamic = "force-dynamic";
export const revalidate = 86400;

// Per-locale static metadata for the quiz hub.
const QUIZ_META: Record<HubLocale, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: {
    title: "Quiz — 200+ quiz de culture g, food, ciné, tech, sport · moomz",
    description: "200+ quiz à thèmes : cuisine, couple, drama, tech, ciné, sport, musique, histoire, sciences, anime. Chaque réponse avec une explication. Joue en 3 minutes.",
    ogTitle: "Quiz moomz — 200+ quiz à thèmes",
    ogDescription: "Joue, apprends, partage. 200+ quiz courts avec explications, du food au cinéma en passant par la tech et la pop culture.",
  },
  en: {
    title: "Quiz — 200+ trivia quizzes on food, tech, film, sport · moomz",
    description: "200+ themed quizzes: food, couples, drama, tech, film, sport, music, history, science, anime. Every answer explained. Play in 3 minutes.",
    ogTitle: "Quiz moomz — 200+ themed quizzes",
    ogDescription: "Play, learn, share. 200+ short quizzes with explanations — from food to cinema to tech and pop culture.",
  },
  es: {
    title: "Quiz — más de 200 quiz de cultura general, food, cine, tech · moomz",
    description: "200+ quiz temáticos: cocina, pareja, drama, tech, cine, deporte, música, historia, ciencias, anime. Cada respuesta explicada. Juega en 3 minutos.",
    ogTitle: "Quiz moomz — 200+ quiz temáticos",
    ogDescription: "Juega, aprende, comparte. 200+ quiz cortos con explicaciones, de la comida al cine pasando por la tech y la cultura pop.",
  },
  it: {
    title: "Quiz — 200+ quiz di cultura generale, food, cinema, tech · moomz",
    description: "200+ quiz a tema: cucina, coppia, drama, tech, cinema, sport, musica, storia, scienze, anime. Ogni risposta spiegata. Gioca in 3 minuti.",
    ogTitle: "Quiz moomz — 200+ quiz tematici",
    ogDescription: "Gioca, impara, condividi. 200+ quiz brevi con spiegazioni, dal cibo al cinema fino alla tech e alla cultura pop.",
  },
  pt: {
    title: "Quiz — mais de 200 quizzes de cultura geral, food, cinema, tech · moomz",
    description: "200+ quizzes temáticos: culinária, casal, drama, tech, cinema, esporte, música, história, ciências, anime. Cada resposta explicada. Jogue em 3 minutos.",
    ogTitle: "Quiz moomz — 200+ quizzes temáticos",
    ogDescription: "Jogue, aprenda, compartilhe. 200+ quizzes curtos com explicações, da comida ao cinema passando por tech e cultura pop.",
  },
  de: {
    title: "Quiz — 200+ Quizze zu Allgemeinwissen, Food, Kino, Tech · moomz",
    description: "200+ thematische Quizze: Kochen, Paare, Drama, Tech, Kino, Sport, Musik, Geschichte, Wissenschaft, Anime. Jede Antwort erklärt. Spiel in 3 Minuten.",
    ogTitle: "Quiz moomz — 200+ thematische Quizze",
    ogDescription: "Spielen, lernen, teilen. 200+ kurze Quizze mit Erklärungen — von Essen bis Kino, Tech und Popkultur.",
  },
  ja: {
    title: "クイズ — 200以上のトリビアクイズ（フード・テック・映画・スポーツ）· moomz",
    description: "200以上のテーマ別クイズ：料理、カップル、ドラマ、テック、映画、スポーツ、音楽、歴史、科学、アニメ。すべての答えに解説付き。3分でプレイ。",
    ogTitle: "moomz クイズ — 200以上のテーマ別クイズ",
    ogDescription: "遊んで、学んで、シェアしよう。フードから映画、テック、ポップカルチャーまで200以上の短いクイズ。",
  },
  zh: {
    title: "测验 — 200+ 知识问答：美食、科技、电影、运动 · moomz",
    description: "200+ 主题测验：烹饪、情侣、八卦、科技、电影、运动、音乐、历史、科学、动漫。每道题都有解析。3分钟搞定。",
    ogTitle: "moomz 测验 — 200+ 主题问答",
    ogDescription: "玩游戏、学知识、来分享。200+ 带解析的短测验，从美食到电影再到科技和流行文化。",
  },
};

// generateMetadata reads the visitor locale from the cookie (same as the
// component). With force-static the cookie is empty → defaults to "en",
// which is the correct canonical metadata for Google crawlers.
export async function generateMetadata(): Promise<Metadata> {
  const visitorLocale = getLocale();
  const locale: HubLocale = (QUIZ_HUB_LOCALES as string[]).includes(visitorLocale)
    ? (visitorLocale as HubLocale)
    : "en";
  const m = QUIZ_META[locale];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: "https://moomz.com/quiz" },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      type: "website",
      url: "https://moomz.com/quiz",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function QuizHub() {
  const visitorLocale = getLocale();
  // Coerce the visitor locale into the HubLocale set (same 8 langs), fallback "en".
  const locale: HubLocale = (QUIZ_HUB_LOCALES as string[]).includes(visitorLocale)
    ? (visitorLocale as HubLocale)
    : "en";
  const c = QUIZ_HUB_CHROME[locale];
  // Topic labels only ship FR/EN — use FR for FR visitors, EN for everyone else.
  const topicLang: "fr" | "en" = locale === "fr" ? "fr" : "en";
  const totalQuizzes = allQuizzes.length;
  const totalQuestions = allQuizzes.reduce((s, q) => s + q.questions.length, 0);

  // JSON-LD: ItemList of topics → CollectionPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Quiz moomz",
    description: c.sub(totalQuizzes, totalQuestions),
    url: "https://moomz.com/quiz",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: totalQuizzes,
      itemListElement: allQuizzes.slice(0, 50).map((q, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: q.title,
        url: `https://moomz.com${quizUrl(q)}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8 fade-up">
        <HubNav locale={locale} current="quiz" />
        <header className="text-center space-y-2">
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            Quiz moomz
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {c.sub(totalQuizzes, totalQuestions)}
          </p>
          <p className="text-white/40 text-sm">{c.tagline}</p>
        </header>

        {QUIZ_TOPICS.map((topic) => {
          // No cap — link every quiz in the topic (full nav coverage).
          const items = quizzesByTopic(topic.id);
          if (items.length === 0) return null;
          return (
            <section key={topic.id} className="space-y-3" aria-labelledby={`topic-${topic.id}`}>
              <h2
                id={`topic-${topic.id}`}
                className="text-lg font-bold tracking-tight flex items-center gap-2"
              >
                <span aria-hidden>{topic.emoji}</span>
                <span>{topicLabel(topic.id, topicLang)}</span>
                <span className="text-xs text-white/40 font-normal">({items.length})</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map((q) => (
                  <Link
                    key={q.slug}
                    href={quizUrl(q)}
                    aria-label={`${q.title} — ${q.questions.length} ${c.questions}`}
                    className="glass block rounded-2xl p-3 sm:p-4 hover:scale-[1.01] active:scale-[0.99] transition group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl shrink-0" aria-hidden>
                        {q.emoji ?? topic.emoji}
                      </div>
                      <div className="min-w-0 flex-1 space-y-1">
                        <h3 className="font-bold text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-white">
                          {q.title}
                        </h3>
                        <p className="text-white/55 text-xs leading-snug line-clamp-2">
                          {q.description}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-white/40 pt-0.5">
                          <span>
                            {q.questions.length} {c.questions}
                          </span>
                          <span aria-hidden>·</span>
                          <span className="uppercase">{q.lang}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            {c.poweredBy}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{c.ctaTitle}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{c.ctaBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {c.ctaButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
