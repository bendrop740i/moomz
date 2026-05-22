import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HubNav, { type HubLocale } from "@/app/_seo/hub-nav";
import { findQuiz, relatedQuizzes, topicLabel } from "@/lib/quizzes";
import { quizUrl, type QuizLocale } from "@/lib/quizzes/types";
import { canonicalUrl } from "@/lib/i18n-server";
import { jsonLdHtml } from "@/lib/json-ld";
import QuizPlay from "./quiz-play";

export const dynamic = "force-dynamic";
export const revalidate = 86400;

type Params = { slug: string };

// Per-locale UI chrome for the quiz detail page. Keyed off the quiz's content
// locale (the slug is per-content-locale). Quiz title / description /
// questions / explanations are authored content and never translated.
const PAGE_CHROME: Record<
  QuizLocale,
  {
    notFound: string;
    breadcrumb: string;
    quizCrumb: string;
    minutes: string;
    questions: string;
    allAnswersAria: string;
    seeAllAnswers: string;
    similarAria: string;
    similarHeading: string;
    poweredBy: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  fr: {
    notFound: "Quiz introuvable — moomz",
    breadcrumb: "Fil d'ariane",
    quizCrumb: "Quiz",
    minutes: "min",
    questions: "questions",
    allAnswersAria: "Toutes les questions et leurs réponses",
    seeAllAnswers: "📚 Voir toutes les réponses + explications",
    similarAria: "Quiz similaires",
    similarHeading: "Quiz similaires",
    poweredBy: "✨ Propulsé par moomz",
    ctaTitle: "Aussi sur moomz : crée ton propre sondage",
    ctaBody: "En plus des quiz, vibe checks gratuits + linker public + questions anonymes.",
    ctaButton: "Créer mon vibe check",
  },
  en: {
    notFound: "Quiz not found — moomz",
    breadcrumb: "Breadcrumb",
    quizCrumb: "Quiz",
    minutes: "min",
    questions: "questions",
    allAnswersAria: "All questions and their answers",
    seeAllAnswers: "📚 See all answers + explanations",
    similarAria: "Similar quizzes",
    similarHeading: "Similar quizzes",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Also on moomz: create your own poll",
    ctaBody: "Beyond quizzes: free vibe checks + public linker + anonymous questions.",
    ctaButton: "Create my vibe check",
  },
  es: {
    notFound: "Quiz no encontrado — moomz",
    breadcrumb: "Migas de pan",
    quizCrumb: "Quiz",
    minutes: "min",
    questions: "preguntas",
    allAnswersAria: "Todas las preguntas y sus respuestas",
    seeAllAnswers: "📚 Ver todas las respuestas + explicaciones",
    similarAria: "Quiz similares",
    similarHeading: "Quiz similares",
    poweredBy: "✨ Impulsado por moomz",
    ctaTitle: "También en moomz: crea tu propia encuesta",
    ctaBody: "Además de los quiz: vibe checks gratis + linker público + preguntas anónimas.",
    ctaButton: "Crear mi vibe check",
  },
  it: {
    notFound: "Quiz non trovato — moomz",
    breadcrumb: "Briciole di pane",
    quizCrumb: "Quiz",
    minutes: "min",
    questions: "domande",
    allAnswersAria: "Tutte le domande e le loro risposte",
    seeAllAnswers: "📚 Vedi tutte le risposte + spiegazioni",
    similarAria: "Quiz simili",
    similarHeading: "Quiz simili",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Anche su moomz: crea il tuo sondaggio",
    ctaBody: "Oltre ai quiz: vibe check gratuiti + linker pubblico + domande anonime.",
    ctaButton: "Crea il mio vibe check",
  },
  pt: {
    notFound: "Quiz não encontrado — moomz",
    breadcrumb: "Trilha de navegação",
    quizCrumb: "Quiz",
    minutes: "min",
    questions: "perguntas",
    allAnswersAria: "Todas as perguntas e suas respostas",
    seeAllAnswers: "📚 Ver todas as respostas + explicações",
    similarAria: "Quizzes parecidos",
    similarHeading: "Quizzes parecidos",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Também no moomz: crie sua própria enquete",
    ctaBody: "Além dos quizzes: vibe checks grátis + linker público + perguntas anônimas.",
    ctaButton: "Criar meu vibe check",
  },
  de: {
    notFound: "Quiz nicht gefunden — moomz",
    breadcrumb: "Brotkrümelnavigation",
    quizCrumb: "Quiz",
    minutes: "Min",
    questions: "Fragen",
    allAnswersAria: "Alle Fragen und ihre Antworten",
    seeAllAnswers: "📚 Alle Antworten + Erklärungen ansehen",
    similarAria: "Ähnliche Quizze",
    similarHeading: "Ähnliche Quizze",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "Auch auf moomz: erstelle deine eigene Umfrage",
    ctaBody: "Neben Quizzen: kostenlose Vibe-Checks + öffentlicher Linker + anonyme Fragen.",
    ctaButton: "Meinen Vibe-Check erstellen",
  },
  ja: {
    notFound: "クイズが見つかりません — moomz",
    breadcrumb: "パンくずリスト",
    quizCrumb: "クイズ",
    minutes: "分",
    questions: "問",
    allAnswersAria: "すべての問題とその答え",
    seeAllAnswers: "📚 すべての答え＋解説を見る",
    similarAria: "似たクイズ",
    similarHeading: "似たクイズ",
    poweredBy: "✨ Powered by moomz",
    ctaTitle: "moomzでは:自分だけの投票も作れます",
    ctaBody: "クイズに加えて、無料のバイブチェック+公開リンカー+匿名質問。",
    ctaButton: "バイブチェックを作る",
  },
  zh: {
    notFound: "未找到测验 — moomz",
    breadcrumb: "面包屑导航",
    quizCrumb: "测验",
    minutes: "分钟",
    questions: "道题",
    allAnswersAria: "所有题目及其答案",
    seeAllAnswers: "📚 查看所有答案 + 解析",
    similarAria: "相似测验",
    similarHeading: "相似测验",
    poweredBy: "✨ 由 moomz 驱动",
    ctaTitle: "moomz 还能:创建你自己的投票",
    ctaBody: "除了测验:免费 vibe check + 公开链接页 + 匿名提问。",
    ctaButton: "创建我的 vibe check",
  },
};

// The quiz hub nav strip is FR/EN/ES/IT/PT/DE/JA/ZH — QuizLocale matches
// HubLocale, so the quiz lang is used directly.
function hubLocaleOf(lang: QuizLocale): HubLocale {
  return lang;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const quiz = findQuiz(params.slug);
  if (!quiz) return { title: "Quiz not found — moomz" };
  const canonical = canonicalUrl();
  return {
    title: `${quiz.title} | Quiz moomz`,
    description: quiz.description,
    alternates: { canonical },
    openGraph: {
      title: quiz.title,
      description: quiz.description,
      type: "article",
      url: canonical,
    },
    twitter: { card: "summary_large_image", title: quiz.title, description: quiz.description },
  };
}

export default function QuizPage({ params }: { params: Params }) {
  const quiz = findQuiz(params.slug);
  if (!quiz) notFound();
  const related = relatedQuizzes(quiz, 6);
  const c = PAGE_CHROME[quiz.lang] ?? PAGE_CHROME.fr;
  const topicLang: "fr" | "en" = quiz.lang === "fr" ? "fr" : "en";

  // JSON-LD: Quiz schema + BreadcrumbList. Schema.org Quiz isn't widely
  // supported by Google; we additionally publish each question as a Question
  // entity so the page is rich-snippet eligible (FAQPage-style).
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "moomz", item: "https://moomz.com" },
      { "@type": "ListItem", position: 2, name: "Quiz", item: "https://moomz.com/quiz" },
      { "@type": "ListItem", position: 3, name: quiz.title, item: `https://moomz.com${quizUrl(quiz)}` },
    ],
  };
  const quizLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: quiz.title,
    description: quiz.description,
    inLanguage: quiz.lang,
    educationalLevel: "popular",
    hasPart: quiz.questions.map((q, i) => ({
      "@type": "Question",
      position: i + 1,
      name: q.q,
      text: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.options[q.correct] },
      suggestedAnswer: q.options.map((opt, j) => ({
        "@type": "Answer",
        text: opt,
        ...(j === q.correct ? { encodingFormat: "correct" } : {}),
      })),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(quizLd) }}
      />
      <article className="space-y-6 fade-up">
        <HubNav locale={hubLocaleOf(quiz.lang)} current="quiz" />
        <header className="space-y-2">
          <nav aria-label={c.breadcrumb} className="text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">moomz</Link>
            <span aria-hidden> › </span>
            <Link href="/quiz" className="hover:text-white/70">{c.quizCrumb}</Link>
            <span aria-hidden> › </span>
            <span className="text-white/60">{topicLabel(quiz.topic, topicLang)}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span aria-hidden className="mr-2">{quiz.emoji ?? "🎯"}</span>
            {quiz.title}
          </h1>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            {quiz.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>{quiz.questions.length} {c.questions}</span>
            <span aria-hidden>·</span>
            <span>~{Math.max(2, Math.ceil(quiz.questions.length * 0.5))} {c.minutes}</span>
            <span aria-hidden>·</span>
            <span className="uppercase">{quiz.lang}</span>
          </div>
        </header>

        <QuizPlay quiz={quiz} slug={params.slug} />

        {/* SEO-rich static rendering of all questions + answers + explainers,
            collapsed by default so it doesn't spoil play mode. Browsers index
            it regardless of <details> state. */}
        <section aria-label={c.allAnswersAria} className="space-y-2">
          <details className="glass rounded-2xl p-4 group">
            <summary className="cursor-pointer text-sm font-semibold text-white/70 hover:text-white select-none">
              {c.seeAllAnswers}
            </summary>
            <ol className="mt-4 space-y-4">
              {quiz.questions.map((q, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-white/5 p-3.5 space-y-2"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h2
                    className="text-base font-bold leading-snug"
                    itemProp="name"
                  >
                    Q{i + 1}. {q.q}
                  </h2>
                  <ul className="text-sm space-y-1">
                    {q.options.map((opt, j) => (
                      <li
                        key={j}
                        className={
                          j === q.correct
                            ? "text-emerald-300 font-semibold"
                            : "text-white/55"
                        }
                      >
                        <span aria-hidden>{j === q.correct ? "✅ " : "• "}</span>
                        {opt}
                      </li>
                    ))}
                  </ul>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="text-sm text-white/75 leading-relaxed pt-1 border-t border-white/5"
                  >
                    <span itemProp="text">{q.explainer}</span>
                  </div>
                </li>
              ))}
            </ol>
          </details>
        </section>

        {related.length > 0 && (
          <section aria-label={c.similarAria} className="space-y-2">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              {c.similarHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={quizUrl(r)}
                  className="glass block rounded-xl p-3 hover:scale-[1.01] transition"
                  aria-label={`${r.title} — ${r.questions.length} ${c.questions}`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="text-xl shrink-0" aria-hidden>{r.emoji ?? "🎯"}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-sm line-clamp-2">{r.title}</h3>
                      <div className="text-[11px] text-white/40 mt-0.5">
                        {r.questions.length} {c.questions} · {r.lang.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <aside className="glass rounded-3xl p-5 sm:p-6 text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            {c.poweredBy}
          </div>
          <h2 className="text-xl font-bold">{c.ctaTitle}</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">{c.ctaBody}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            {c.ctaButton} <span aria-hidden>→</span>
          </Link>
        </aside>
      </article>
    </>
  );
}

// Static-param generation — Next.js prerenders every quiz page at build time.
// Re-imports are kept cheap because the data is plain TS modules.
export async function generateStaticParams() {
  const { allQuizzes } = await import("@/lib/quizzes");
  return allQuizzes.map((q) => ({ slug: q.slug }));
}
