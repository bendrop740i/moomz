// Quizzes — interactive multiple-choice content with correct answers and
// per-question explainers. Content-first SEO surface: every question +
// explainer renders in the HTML on initial load so Google indexes the
// full body, then a client component progresses through them one by one.

export type QuizLocale = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

export type QuizQuestion = {
  q: string;
  /** 2-6 plain strings. The visible answer text. */
  options: string[];
  /** Index of the correct option in `options`. */
  correct: number;
  /** Why the correct answer is correct — natural prose, ideally 1-3 sentences.
   * Indexable content + UX value. */
  explainer: string;
};

export type Quiz = {
  /** URL slug. Kebab-case, must be globally unique across the corpus.
   * Use `quiz-<topic>-<n>` or descriptive (`quiz-cuisine-italienne-classiques`). */
  slug: string;
  /** Page title (~50-65 chars). */
  title: string;
  /** Meta description (~140-160 chars). */
  description: string;
  /** Topic id — used for grouping in the hub. */
  topic: string;
  /** Single-emoji tag for the topic. */
  emoji?: string;
  lang: QuizLocale;
  /** 8-15 questions per quiz feels right (3-5 min UX). */
  questions: QuizQuestion[];
  /** ISO date — drives sitemap lastmod. */
  updatedAt: string;
};

export function quizUrl(quiz: Pick<Quiz, "slug" | "lang">): string {
  // Locale-prefixed with the quiz's own language so the link hits the
  // middleware rewrite (no 301) and the chrome matches the quiz content.
  return `/${quiz.lang}/quiz/${quiz.slug}`;
}
