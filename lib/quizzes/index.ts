// Central registry. Each topic file exports a named `Quiz[]` constant; we
// spread them here so the rest of the app sees one flat list.

import type { Quiz, QuizLocale } from "./types";
import { cuisineMondeQuizzes } from "./data/cuisine-monde";
import { coupleQuizzes } from "./data/couple";
import { dramaInternetQuizzes } from "./data/drama-internet";
import { techStartupsQuizzes } from "./data/tech-startups";
import { lifestyleQuizzes } from "./data/lifestyle";
import { moneyQuizzes } from "./data/money";
import { sportQuizzes } from "./data/sport";
import { musiquePopRapQuizzes } from "./data/musique-pop-rap";
import { cinemaSeriesQuizzes } from "./data/cinema-series";
import { histoireQuizzes } from "./data/histoire";
import { geographieQuizzes } from "./data/geographie";
import { cultureGeneraleQuizzes } from "./data/culture-generale";
import { sciencesQuizzes } from "./data/sciences";
import { jeuxVideoQuizzes } from "./data/jeux-video";
import { animauxNatureQuizzes } from "./data/animaux-nature";
import { modeBeauteQuizzes } from "./data/mode-beaute";
import { foodTrendsEnQuizzes } from "./data/food-trends-en";
import { popCultureEnQuizzes } from "./data/pop-culture-en";
import { techCelebritiesEnQuizzes } from "./data/tech-celebrities-en";
import { animeKpopQuizzes } from "./data/anime-kpop";
// 2026-05-20 science pack (10 parallel agents) — physics-first across 8 langs.
import { physiqueFrQuizzes } from "./data/physique-fr";
import { physicsEnQuizzes } from "./data/physics-en";
import { chimieMultiQuizzes } from "./data/chimie-multi";
import { mathsMultiQuizzes } from "./data/maths-multi";
import { astronomieMultiQuizzes } from "./data/astronomie-multi";
import { biologieAvanceeQuizzes } from "./data/biologie-avancee";
import { cienciasEsQuizzes } from "./data/ciencias-es";
import { wissenschaftDeQuizzes } from "./data/wissenschaft-de";
import { scienzeItPtQuizzes } from "./data/scienze-it-pt";
import { sciencesJaZhQuizzes } from "./data/sciences-ja-zh";
// 2026-05-22 — translated quiz packs filling es/it/pt/de/ja/zh (one per locale).
import { quizEs } from "./data/quiz-es";
import { quizIt } from "./data/quiz-it";
import { quizPt } from "./data/quiz-pt";
import { quizDe } from "./data/quiz-de";
import { quizJa } from "./data/quiz-ja";
import { quizZh } from "./data/quiz-zh";

export const allQuizzes: Quiz[] = [
  ...cuisineMondeQuizzes,
  ...coupleQuizzes,
  ...dramaInternetQuizzes,
  ...techStartupsQuizzes,
  ...lifestyleQuizzes,
  ...moneyQuizzes,
  ...sportQuizzes,
  ...musiquePopRapQuizzes,
  ...cinemaSeriesQuizzes,
  ...histoireQuizzes,
  ...geographieQuizzes,
  ...cultureGeneraleQuizzes,
  ...sciencesQuizzes,
  ...jeuxVideoQuizzes,
  ...animauxNatureQuizzes,
  ...modeBeauteQuizzes,
  ...foodTrendsEnQuizzes,
  ...popCultureEnQuizzes,
  ...techCelebritiesEnQuizzes,
  ...animeKpopQuizzes,
  ...physiqueFrQuizzes,
  ...physicsEnQuizzes,
  ...chimieMultiQuizzes,
  ...mathsMultiQuizzes,
  ...astronomieMultiQuizzes,
  ...biologieAvanceeQuizzes,
  ...cienciasEsQuizzes,
  ...wissenschaftDeQuizzes,
  ...scienzeItPtQuizzes,
  ...sciencesJaZhQuizzes,
  ...quizEs,
  ...quizIt,
  ...quizPt,
  ...quizDe,
  ...quizJa,
  ...quizZh,
];

export function findQuiz(slug: string): Quiz | null {
  return allQuizzes.find((q) => q.slug === slug) ?? null;
}

export function quizzesByTopic(topic: string): Quiz[] {
  return allQuizzes.filter((q) => q.topic === topic);
}

export function quizzesByLang(lang: QuizLocale): Quiz[] {
  return allQuizzes.filter((q) => q.lang === lang);
}

export function relatedQuizzes(quiz: Quiz, limit = 6): Quiz[] {
  // Same topic, same lang, exclude self. If not enough, top up with same lang
  // different topic. Final fallback: any lang.
  const sameTopic = allQuizzes.filter(
    (q) => q.topic === quiz.topic && q.lang === quiz.lang && q.slug !== quiz.slug,
  );
  if (sameTopic.length >= limit) return sameTopic.slice(0, limit);
  const sameLang = allQuizzes.filter(
    (q) => q.lang === quiz.lang && q.slug !== quiz.slug && !sameTopic.includes(q),
  );
  return [...sameTopic, ...sameLang].slice(0, limit);
}

// Topic catalogue — used by the hub page to group + intro each section.
export type QuizTopic = {
  id: string;
  emoji: string;
  labelFr: string;
  labelEn: string;
};

export const QUIZ_TOPICS: QuizTopic[] = [
  { id: "cuisine-monde", emoji: "🍝", labelFr: "Cuisine du monde", labelEn: "World cuisine" },
  { id: "couple", emoji: "💖", labelFr: "Couple & relations", labelEn: "Love & relationships" },
  { id: "drama-internet", emoji: "🌶️", labelFr: "Drama internet", labelEn: "Internet drama" },
  { id: "tech-startups", emoji: "📱", labelFr: "Tech & startups", labelEn: "Tech & startups" },
  { id: "lifestyle", emoji: "✨", labelFr: "Lifestyle", labelEn: "Lifestyle" },
  { id: "money", emoji: "💸", labelFr: "Money & finance", labelEn: "Money & finance" },
  { id: "sport", emoji: "⚽", labelFr: "Sport", labelEn: "Sport" },
  { id: "musique", emoji: "🎸", labelFr: "Musique", labelEn: "Music" },
  { id: "cinema", emoji: "🎬", labelFr: "Cinéma & séries", labelEn: "Movies & TV" },
  { id: "histoire", emoji: "🏛️", labelFr: "Histoire", labelEn: "History" },
  { id: "geographie", emoji: "🗺️", labelFr: "Géographie", labelEn: "Geography" },
  { id: "culture-generale", emoji: "🧠", labelFr: "Culture générale", labelEn: "General knowledge" },
  { id: "sciences", emoji: "🔬", labelFr: "Sciences", labelEn: "Sciences" },
  { id: "jeux-video", emoji: "🎮", labelFr: "Jeux vidéo", labelEn: "Video games" },
  { id: "animaux", emoji: "🐾", labelFr: "Animaux & nature", labelEn: "Animals & nature" },
  { id: "mode-beaute", emoji: "💄", labelFr: "Mode & beauté", labelEn: "Fashion & beauty" },
  { id: "food-trends", emoji: "🥑", labelFr: "Food trends", labelEn: "Food trends" },
  { id: "pop-culture", emoji: "🎤", labelFr: "Pop culture", labelEn: "Pop culture" },
  { id: "tech-celebrities", emoji: "👨‍💻", labelFr: "Tech celebrities", labelEn: "Tech celebrities" },
  { id: "anime-kpop", emoji: "🌸", labelFr: "Anime & K-pop", labelEn: "Anime & K-pop" },
];

export function topicLabel(topicId: string, lang: QuizLocale): string {
  const t = QUIZ_TOPICS.find((x) => x.id === topicId);
  if (!t) return topicId;
  return lang === "fr" ? t.labelFr : t.labelEn;
}
