// Achievement i18n — parametric. We translate ONE name + ONE desc template
// per family (×8 langs), not one string per achievement. `{n}` is replaced by
// the tier threshold, `{topic}` by the topic label. ~25 families → the whole
// achievement system localizes in 8 languages from this single file.

import type { AchCategory } from "./families";
import type { Achievement } from "./engine";

export type AchLang = "fr" | "en" | "es" | "it" | "pt" | "de" | "ja" | "zh";

type Fam = { name: string; desc: string };

type Pack = {
  fam: Record<string, Fam>;
  topicDesc: string; // uses {n} and {topic}
  topics: Record<string, string>;
  cat: Record<AchCategory, string>;
};

const TOPIC_IDS = ["food", "couple", "drama", "tech", "lifestyle", "debat", "sport", "musique", "money", "ado"] as const;

export const ACH_I18N: Record<AchLang, Pack> = {
  fr: {
    fam: {
      votes: { name: "Votant", desc: "Voter {n} fois" },
      streak: { name: "Série de feu", desc: "Atteindre une série de {n} votes" },
      daily: { name: "Fidèle du Daily", desc: "Voter le Daily {n} jours d'affilée" },
      days: { name: "Habitué", desc: "Être actif {n} jours différents" },
      polls: { name: "Créateur", desc: "Créer {n} sondages" },
      viral: { name: "Viral", desc: "Atteindre {n} votes sur un de tes sondages" },
      rebel: { name: "Rebelle", desc: "Voter {n} fois contre la majorité" },
      majority: { name: "Dans le moule", desc: "Voter {n} fois avec la majorité" },
      points: { name: "Compteur de points", desc: "Cumuler {n} points" },
      coins: { name: "Trésorier", desc: "Gagner {n} coins au total" },
      spender: { name: "Dépensier", desc: "Dépenser {n} coins" },
      collector: { name: "Chasseur de haut faits", desc: "Débloquer {n} haut faits" },
      predictions: { name: "Parieur", desc: "Faire {n} pronostics" },
      oracle: { name: "Oracle", desc: "Gagner {n} pronostics" },
    },
    topicDesc: "Voter {n} fois sur des sondages {topic}",
    topics: { food: "Bouffe", couple: "Couple", drama: "Drama", tech: "Tech", lifestyle: "Lifestyle", debat: "Débat", sport: "Sport", musique: "Musique", money: "Argent", ado: "Ado" },
    cat: { voting: "Votes", creating: "Création", streak: "Séries", loyalty: "Fidélité", rebel: "Rebelle", economy: "Économie", predictions: "Pronostics", topics: "Thèmes", meta: "Méta" },
  },
  en: {
    fam: {
      votes: { name: "Voter", desc: "Vote {n} times" },
      streak: { name: "On Fire", desc: "Reach a {n}-vote streak" },
      daily: { name: "Daily Regular", desc: "Vote the Daily {n} days in a row" },
      days: { name: "Regular", desc: "Be active on {n} different days" },
      polls: { name: "Creator", desc: "Create {n} polls" },
      viral: { name: "Viral", desc: "Hit {n} votes on one of your polls" },
      rebel: { name: "Rebel", desc: "Vote against the majority {n} times" },
      majority: { name: "In the Mold", desc: "Vote with the majority {n} times" },
      points: { name: "Point Hoarder", desc: "Rack up {n} points" },
      coins: { name: "Treasurer", desc: "Earn {n} coins total" },
      spender: { name: "Big Spender", desc: "Spend {n} coins" },
      collector: { name: "Achievement Hunter", desc: "Unlock {n} achievements" },
      predictions: { name: "Bettor", desc: "Make {n} predictions" },
      oracle: { name: "Oracle", desc: "Win {n} predictions" },
    },
    topicDesc: "Vote {n} times on {topic} polls",
    topics: { food: "Food", couple: "Couple", drama: "Drama", tech: "Tech", lifestyle: "Lifestyle", debat: "Debate", sport: "Sport", musique: "Music", money: "Money", ado: "Teen" },
    cat: { voting: "Voting", creating: "Creating", streak: "Streaks", loyalty: "Loyalty", rebel: "Rebel", economy: "Economy", predictions: "Predictions", topics: "Topics", meta: "Meta" },
  },
  es: {
    fam: {
      votes: { name: "Votante", desc: "Votar {n} veces" },
      streak: { name: "En llamas", desc: "Alcanzar una racha de {n} votos" },
      daily: { name: "Fiel del Daily", desc: "Votar el Daily {n} días seguidos" },
      days: { name: "Habitual", desc: "Estar activo {n} días distintos" },
      polls: { name: "Creador", desc: "Crear {n} encuestas" },
      viral: { name: "Viral", desc: "Llegar a {n} votos en una de tus encuestas" },
      rebel: { name: "Rebelde", desc: "Votar contra la mayoría {n} veces" },
      majority: { name: "Con la corriente", desc: "Votar con la mayoría {n} veces" },
      points: { name: "Acumulador de puntos", desc: "Acumular {n} puntos" },
      coins: { name: "Tesorero", desc: "Ganar {n} coins en total" },
      spender: { name: "Manirroto", desc: "Gastar {n} coins" },
      collector: { name: "Cazador de logros", desc: "Desbloquear {n} logros" },
      predictions: { name: "Apostador", desc: "Hacer {n} pronósticos" },
      oracle: { name: "Oráculo", desc: "Ganar {n} pronósticos" },
    },
    topicDesc: "Votar {n} veces en encuestas de {topic}",
    topics: { food: "Comida", couple: "Pareja", drama: "Drama", tech: "Tecnología", lifestyle: "Estilo de vida", debat: "Debate", sport: "Deporte", musique: "Música", money: "Dinero", ado: "Adolescente" },
    cat: { voting: "Votos", creating: "Creación", streak: "Rachas", loyalty: "Fidelidad", rebel: "Rebelde", economy: "Economía", predictions: "Pronósticos", topics: "Temas", meta: "Meta" },
  },
  it: {
    fam: {
      votes: { name: "Votante", desc: "Votare {n} volte" },
      streak: { name: "In fiamme", desc: "Raggiungere una serie di {n} voti" },
      daily: { name: "Fedele del Daily", desc: "Votare il Daily {n} giorni di fila" },
      days: { name: "Habitué", desc: "Essere attivo {n} giorni diversi" },
      polls: { name: "Creatore", desc: "Creare {n} sondaggi" },
      viral: { name: "Virale", desc: "Raggiungere {n} voti su un tuo sondaggio" },
      rebel: { name: "Ribelle", desc: "Votare contro la maggioranza {n} volte" },
      majority: { name: "Nel coro", desc: "Votare con la maggioranza {n} volte" },
      points: { name: "Collezionista di punti", desc: "Accumulare {n} punti" },
      coins: { name: "Tesoriere", desc: "Guadagnare {n} coins in totale" },
      spender: { name: "Spendaccione", desc: "Spendere {n} coins" },
      collector: { name: "Cacciatore di imprese", desc: "Sbloccare {n} imprese" },
      predictions: { name: "Scommettitore", desc: "Fare {n} pronostici" },
      oracle: { name: "Oracolo", desc: "Vincere {n} pronostici" },
    },
    topicDesc: "Votare {n} volte su sondaggi {topic}",
    topics: { food: "Cibo", couple: "Coppia", drama: "Drama", tech: "Tech", lifestyle: "Lifestyle", debat: "Dibattito", sport: "Sport", musique: "Musica", money: "Soldi", ado: "Teen" },
    cat: { voting: "Voti", creating: "Creazione", streak: "Serie", loyalty: "Fedeltà", rebel: "Ribelle", economy: "Economia", predictions: "Pronostici", topics: "Temi", meta: "Meta" },
  },
  pt: {
    fam: {
      votes: { name: "Votante", desc: "Votar {n} vezes" },
      streak: { name: "Pegando fogo", desc: "Atingir uma sequência de {n} votos" },
      daily: { name: "Fiel do Daily", desc: "Votar no Daily {n} dias seguidos" },
      days: { name: "Frequentador", desc: "Estar ativo em {n} dias diferentes" },
      polls: { name: "Criador", desc: "Criar {n} enquetes" },
      viral: { name: "Viral", desc: "Atingir {n} votos em uma das suas enquetes" },
      rebel: { name: "Rebelde", desc: "Votar contra a maioria {n} vezes" },
      majority: { name: "Na corrente", desc: "Votar com a maioria {n} vezes" },
      points: { name: "Acumulador de pontos", desc: "Acumular {n} pontos" },
      coins: { name: "Tesoureiro", desc: "Ganhar {n} coins no total" },
      spender: { name: "Gastador", desc: "Gastar {n} coins" },
      collector: { name: "Caçador de conquistas", desc: "Desbloquear {n} conquistas" },
      predictions: { name: "Apostador", desc: "Fazer {n} palpites" },
      oracle: { name: "Oráculo", desc: "Ganhar {n} palpites" },
    },
    topicDesc: "Votar {n} vezes em enquetes de {topic}",
    topics: { food: "Comida", couple: "Casal", drama: "Drama", tech: "Tecnologia", lifestyle: "Estilo de vida", debat: "Debate", sport: "Esporte", musique: "Música", money: "Dinheiro", ado: "Adolescente" },
    cat: { voting: "Votos", creating: "Criação", streak: "Sequências", loyalty: "Fidelidade", rebel: "Rebelde", economy: "Economia", predictions: "Palpites", topics: "Temas", meta: "Meta" },
  },
  de: {
    fam: {
      votes: { name: "Wähler", desc: "{n} Mal abstimmen" },
      streak: { name: "In Flammen", desc: "Eine Serie von {n} Stimmen erreichen" },
      daily: { name: "Daily-Stammgast", desc: "{n} Tage in Folge beim Daily abstimmen" },
      days: { name: "Stammgast", desc: "An {n} verschiedenen Tagen aktiv sein" },
      polls: { name: "Ersteller", desc: "{n} Umfragen erstellen" },
      viral: { name: "Viral", desc: "{n} Stimmen auf einer deiner Umfragen erreichen" },
      rebel: { name: "Rebell", desc: "{n} Mal gegen die Mehrheit stimmen" },
      majority: { name: "Im Strom", desc: "{n} Mal mit der Mehrheit stimmen" },
      points: { name: "Punktesammler", desc: "{n} Punkte ansammeln" },
      coins: { name: "Schatzmeister", desc: "Insgesamt {n} Coins verdienen" },
      spender: { name: "Großzügig", desc: "{n} Coins ausgeben" },
      collector: { name: "Erfolgsjäger", desc: "{n} Erfolge freischalten" },
      predictions: { name: "Wettender", desc: "{n} Prognosen abgeben" },
      oracle: { name: "Orakel", desc: "{n} Prognosen gewinnen" },
    },
    topicDesc: "{n} Mal bei {topic}-Umfragen abstimmen",
    topics: { food: "Essen", couple: "Paar", drama: "Drama", tech: "Tech", lifestyle: "Lifestyle", debat: "Debatte", sport: "Sport", musique: "Musik", money: "Geld", ado: "Teen" },
    cat: { voting: "Abstimmen", creating: "Erstellen", streak: "Serien", loyalty: "Treue", rebel: "Rebell", economy: "Wirtschaft", predictions: "Prognosen", topics: "Themen", meta: "Meta" },
  },
  ja: {
    fam: {
      votes: { name: "投票者", desc: "{n}回投票する" },
      streak: { name: "連続記録", desc: "{n}連続投票を達成する" },
      daily: { name: "デイリーの常連", desc: "デイリーに{n}日連続で投票する" },
      days: { name: "常連", desc: "{n}日間アクティブになる" },
      polls: { name: "クリエイター", desc: "{n}件の投票を作成する" },
      viral: { name: "バズ", desc: "自分の投票で{n}票を達成する" },
      rebel: { name: "反逆者", desc: "{n}回多数派に逆らって投票する" },
      majority: { name: "多数派", desc: "{n}回多数派とともに投票する" },
      points: { name: "ポイント収集家", desc: "{n}ポイント貯める" },
      coins: { name: "会計係", desc: "合計{n}コイン獲得する" },
      spender: { name: "浪費家", desc: "{n}コイン使う" },
      collector: { name: "実績ハンター", desc: "{n}個の実績を解除する" },
      predictions: { name: "予想者", desc: "{n}回予想する" },
      oracle: { name: "預言者", desc: "{n}回予想を当てる" },
    },
    topicDesc: "{topic}の投票に{n}回投票する",
    topics: { food: "グルメ", couple: "カップル", drama: "ドラマ", tech: "テック", lifestyle: "ライフスタイル", debat: "討論", sport: "スポーツ", musique: "音楽", money: "お金", ado: "ティーン" },
    cat: { voting: "投票", creating: "作成", streak: "連続", loyalty: "継続", rebel: "反逆", economy: "経済", predictions: "予想", topics: "テーマ", meta: "メタ" },
  },
  zh: {
    fam: {
      votes: { name: "投票者", desc: "投票 {n} 次" },
      streak: { name: "火力全开", desc: "达成 {n} 连续投票" },
      daily: { name: "每日常客", desc: "连续 {n} 天为每日投票" },
      days: { name: "常客", desc: "在 {n} 个不同的日子活跃" },
      polls: { name: "创作者", desc: "创建 {n} 个投票" },
      viral: { name: "爆款", desc: "你的某个投票达到 {n} 票" },
      rebel: { name: "反叛者", desc: "{n} 次投给少数派" },
      majority: { name: "随大流", desc: "{n} 次投给多数派" },
      points: { name: "积分达人", desc: "累计 {n} 积分" },
      coins: { name: "财务官", desc: "累计赚取 {n} 金币" },
      spender: { name: "花钱高手", desc: "花费 {n} 金币" },
      collector: { name: "成就猎人", desc: "解锁 {n} 个成就" },
      predictions: { name: "预测者", desc: "进行 {n} 次预测" },
      oracle: { name: "神算子", desc: "赢得 {n} 次预测" },
    },
    topicDesc: "在{topic}类投票中投票 {n} 次",
    topics: { food: "美食", couple: "情侣", drama: "drama", tech: "科技", lifestyle: "生活", debat: "辩论", sport: "运动", musique: "音乐", money: "金钱", ado: "青少年" },
    cat: { voting: "投票", creating: "创作", streak: "连击", loyalty: "忠诚", rebel: "反叛", economy: "经济", predictions: "预测", topics: "主题", meta: "元成就" },
  },
};

function fmt(n: number, lang: AchLang): string {
  try {
    return n.toLocaleString(lang === "zh" ? "zh-CN" : lang);
  } catch {
    return String(n);
  }
}

// Resolve an achievement's localized title + description.
export function renderAchievement(
  a: Achievement,
  lang: AchLang,
): { title: string; desc: string } {
  const pack = ACH_I18N[lang] ?? ACH_I18N.en;
  const nStr = fmt(a.threshold, lang);
  if (a.metric.startsWith("topic:")) {
    const topicId = a.metric.slice(6);
    const topicLabel = pack.topics[topicId] ?? topicId;
    return {
      title: topicLabel,
      desc: pack.topicDesc.replace("{n}", nStr).replace("{topic}", topicLabel),
    };
  }
  const fam = pack.fam[a.familyId] ?? ACH_I18N.en.fam[a.familyId];
  return {
    title: fam ? fam.name : a.familyId,
    desc: fam ? fam.desc.replace("{n}", nStr) : "",
  };
}

export function categoryLabel(cat: AchCategory, lang: AchLang): string {
  return (ACH_I18N[lang] ?? ACH_I18N.en).cat[cat];
}

export { TOPIC_IDS };
