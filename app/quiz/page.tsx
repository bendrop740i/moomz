import type { Metadata } from "next";
import Link from "next/link";
import HubNav from "@/app/_seo/hub-nav";
import { allQuizzes, QUIZ_TOPICS, topicLabel, quizzesByTopic } from "@/lib/quizzes";
import { getLocale } from "@/lib/i18n-server";
import { quizUrl } from "@/lib/quizzes/types";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Quiz — 200+ quiz de culture g, food, ciné, tech, sport · moomz",
  description:
    "200+ quiz à thèmes : cuisine, couple, drama, tech, ciné, sport, musique, histoire, sciences, anime. Chaque réponse avec une explication. Joue en 3 minutes.",
  alternates: { canonical: "https://moomz.com/quiz" },
  openGraph: {
    title: "Quiz moomz — 200+ quiz à thèmes",
    description:
      "Joue, apprends, partage. 200+ quiz courts avec explications, du food au cinéma en passant par la tech et la pop culture.",
    type: "website",
    url: "https://moomz.com/quiz",
  },
  twitter: { card: "summary_large_image" },
};

export default function QuizHub() {
  const locale = getLocale();
  const totalQuizzes = allQuizzes.length;
  const totalQuestions = allQuizzes.reduce((s, q) => s + q.questions.length, 0);

  // JSON-LD: ItemList of topics → CollectionPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Quiz moomz",
    description: `Catalogue de ${totalQuizzes} quiz à thèmes avec ${totalQuestions} questions et leurs explications.`,
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
        <HubNav locale="fr" current="quiz" />
        <header className="text-center space-y-2">
          <h1 className="font-display text-5xl sm:text-6xl tracking-tight bg-gradient-to-br from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            Quiz moomz
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-md mx-auto text-balance">
            {totalQuizzes} quiz · {totalQuestions} questions · chaque réponse expliquée
          </p>
          <p className="text-white/40 text-sm">
            🎯 Joue, apprends, partage ton score.
          </p>
        </header>

        {QUIZ_TOPICS.map((topic) => {
          const items = quizzesByTopic(topic.id).slice(0, 20);
          if (items.length === 0) return null;
          return (
            <section key={topic.id} className="space-y-3" aria-labelledby={`topic-${topic.id}`}>
              <h2
                id={`topic-${topic.id}`}
                className="text-lg font-bold tracking-tight flex items-center gap-2"
              >
                <span aria-hidden>{topic.emoji}</span>
                <span>{topicLabel(topic.id, locale === "fr" ? "fr" : "en")}</span>
                <span className="text-xs text-white/40 font-normal">({items.length})</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {items.map((q) => (
                  <Link
                    key={q.slug}
                    href={quizUrl(q)}
                    aria-label={`${q.title} — ${q.questions.length} questions`}
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
                          <span>{q.questions.length} questions</span>
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
            ✨ Propulsé par moomz
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Tu veux créer ton propre vibe check ?
          </h2>
          <p className="text-sm text-white/60 max-w-sm mx-auto">
            En plus des quiz, moomz te laisse créer un sondage virali en 10 secondes et le partager partout.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold mt-1"
          >
            Créer mon sondage <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
