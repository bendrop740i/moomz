import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findQuiz, relatedQuizzes, topicLabel } from "@/lib/quizzes";
import { quizUrl } from "@/lib/quizzes/types";
import QuizPlay from "./quiz-play";

export const dynamic = "force-static";
export const revalidate = 86400;

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const quiz = findQuiz(params.slug);
  if (!quiz) return { title: "Quiz introuvable — moomz" };
  const canonical = `https://moomz.com${quizUrl(quiz)}`;
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizLd) }}
      />
      <article className="space-y-6 fade-up">
        <header className="space-y-2">
          <nav aria-label="Fil d'ariane" className="text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">moomz</Link>
            <span aria-hidden> › </span>
            <Link href="/quiz" className="hover:text-white/70">Quiz</Link>
            <span aria-hidden> › </span>
            <span className="text-white/60">{topicLabel(quiz.topic, quiz.lang === "fr" ? "fr" : "en")}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span aria-hidden className="mr-2">{quiz.emoji ?? "🎯"}</span>
            {quiz.title}
          </h1>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            {quiz.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>{quiz.questions.length} questions</span>
            <span aria-hidden>·</span>
            <span>~{Math.max(2, Math.ceil(quiz.questions.length * 0.5))} min</span>
            <span aria-hidden>·</span>
            <span className="uppercase">{quiz.lang}</span>
          </div>
        </header>

        <QuizPlay quiz={quiz} />

        {/* SEO-rich static rendering of all questions + answers + explainers,
            collapsed by default so it doesn't spoil play mode. Browsers index
            it regardless of <details> state. */}
        <section aria-label="Toutes les questions et leurs réponses" className="space-y-2">
          <details className="glass rounded-2xl p-4 group">
            <summary className="cursor-pointer text-sm font-semibold text-white/70 hover:text-white select-none">
              📚 Voir toutes les réponses + explications
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
          <section aria-label="Quiz similaires" className="space-y-2">
            <h2 className="text-sm uppercase tracking-widest text-white/40 font-semibold">
              Quiz similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={quizUrl(r)}
                  className="glass block rounded-xl p-3 hover:scale-[1.01] transition"
                  aria-label={`${r.title} — ${r.questions.length} questions`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="text-xl shrink-0" aria-hidden>{r.emoji ?? "🎯"}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-sm line-clamp-2">{r.title}</h3>
                      <div className="text-[11px] text-white/40 mt-0.5">
                        {r.questions.length} questions · {r.lang.toUpperCase()}
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
            ✨ Propulsé par moomz
          </div>
          <h2 className="text-xl font-bold">Aussi sur moomz : crée ton propre sondage</h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">
            En plus des quiz, vibe checks gratuits + linker public + questions anonymes.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            Créer mon vibe check <span aria-hidden>→</span>
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
