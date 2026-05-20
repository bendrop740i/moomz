import type { Locale } from "@/lib/i18n";

// Curiosity-hook copy for the after-vote "your turn" CTA. The point isn't
// "create content" (no one wants that) — it's "find out what your crew thinks".
export type ViralCopy = {
  ctaTitle: string;
  ctaSub: string;
  ctaButton: string;
  suggestTitle: string;
};

export const VIRAL_COPY: Record<Locale, ViralCopy> = {
  fr: {
    ctaTitle: "À ton tour 👀",
    ctaSub: "Pose ta question — vois ce que ton crew répond vraiment.",
    ctaButton: "Créer mon moomz",
    suggestTitle: "Ou pars d'une idée",
  },
  en: {
    ctaTitle: "Your turn 👀",
    ctaSub: "Drop your question — see what your crew really picks.",
    ctaButton: "Create my moomz",
    suggestTitle: "Or start from an idea",
  },
  es: {
    ctaTitle: "Te toca 👀",
    ctaSub: "Lanza tu pregunta — mira qué responde tu gente de verdad.",
    ctaButton: "Crear mi moomz",
    suggestTitle: "O parte de una idea",
  },
  it: {
    ctaTitle: "Tocca a te 👀",
    ctaSub: "Lancia la tua domanda — scopri cosa sceglie davvero il tuo giro.",
    ctaButton: "Crea il mio moomz",
    suggestTitle: "O parti da un'idea",
  },
  pt: {
    ctaTitle: "É a tua vez 👀",
    ctaSub: "Lança a tua pergunta — vê o que o teu crew responde de verdade.",
    ctaButton: "Criar o meu moomz",
    suggestTitle: "Ou parte de uma ideia",
  },
  de: {
    ctaTitle: "Du bist dran 👀",
    ctaSub: "Stell deine Frage — sieh, was deine Crew wirklich wählt.",
    ctaButton: "Mein moomz erstellen",
    suggestTitle: "Oder starte mit einer Idee",
  },
  ja: {
    ctaTitle: "次はキミの番 👀",
    ctaSub: "質問を投げて、仲間の本音をチェックしよう。",
    ctaButton: "moomz を作る",
    suggestTitle: "アイデアから始める",
  },
  zh: {
    ctaTitle: "轮到你了 👀",
    ctaSub: "抛出你的问题，看看你的圈子真正怎么选。",
    ctaButton: "创建我的 moomz",
    suggestTitle: "或从一个点子开始",
  },
};

export type Suggestion = { q: string; o: [string, string] };

// Generic this-or-that prompts — work regardless of the poll just voted on,
// so a tap goes straight to a prefilled create form (zero blank-page friction).
export const SUGGESTIONS: Record<Locale, Suggestion[]> = {
  fr: [
    { q: "Pizza ou burger ?", o: ["Pizza", "Burger"] },
    { q: "Plage ou montagne ?", o: ["Plage", "Montagne"] },
    { q: "Chien ou chat ?", o: ["Chien", "Chat"] },
    { q: "Café ou thé ?", o: ["Café", "Thé"] },
    { q: "Été ou hiver ?", o: ["Été", "Hiver"] },
    { q: "Netflix ou sortir ?", o: ["Netflix", "Sortir"] },
    { q: "Sucré ou salé ?", o: ["Sucré", "Salé"] },
    { q: "Matin ou soir ?", o: ["Matin", "Soir"] },
  ],
  en: [
    { q: "Pizza or burger?", o: ["Pizza", "Burger"] },
    { q: "Beach or mountains?", o: ["Beach", "Mountains"] },
    { q: "Dogs or cats?", o: ["Dogs", "Cats"] },
    { q: "Coffee or tea?", o: ["Coffee", "Tea"] },
    { q: "Summer or winter?", o: ["Summer", "Winter"] },
    { q: "Netflix or going out?", o: ["Netflix", "Going out"] },
    { q: "Sweet or salty?", o: ["Sweet", "Salty"] },
    { q: "Early bird or night owl?", o: ["Early bird", "Night owl"] },
  ],
  es: [
    { q: "¿Pizza o hamburguesa?", o: ["Pizza", "Hamburguesa"] },
    { q: "¿Playa o montaña?", o: ["Playa", "Montaña"] },
    { q: "¿Perro o gato?", o: ["Perro", "Gato"] },
    { q: "¿Café o té?", o: ["Café", "Té"] },
    { q: "¿Verano o invierno?", o: ["Verano", "Invierno"] },
    { q: "¿Netflix o salir?", o: ["Netflix", "Salir"] },
    { q: "¿Dulce o salado?", o: ["Dulce", "Salado"] },
    { q: "¿Madrugar o trasnochar?", o: ["Madrugar", "Trasnochar"] },
  ],
  it: [
    { q: "Pizza o hamburger?", o: ["Pizza", "Hamburger"] },
    { q: "Mare o montagna?", o: ["Mare", "Montagna"] },
    { q: "Cane o gatto?", o: ["Cane", "Gatto"] },
    { q: "Caffè o tè?", o: ["Caffè", "Tè"] },
    { q: "Estate o inverno?", o: ["Estate", "Inverno"] },
    { q: "Netflix o uscire?", o: ["Netflix", "Uscire"] },
    { q: "Dolce o salato?", o: ["Dolce", "Salato"] },
    { q: "Mattiniero o nottambulo?", o: ["Mattiniero", "Nottambulo"] },
  ],
  pt: [
    { q: "Pizza ou hambúrguer?", o: ["Pizza", "Hambúrguer"] },
    { q: "Praia ou montanha?", o: ["Praia", "Montanha"] },
    { q: "Cão ou gato?", o: ["Cão", "Gato"] },
    { q: "Café ou chá?", o: ["Café", "Chá"] },
    { q: "Verão ou inverno?", o: ["Verão", "Inverno"] },
    { q: "Netflix ou sair?", o: ["Netflix", "Sair"] },
    { q: "Doce ou salgado?", o: ["Doce", "Salgado"] },
    { q: "Manhã ou noite?", o: ["Manhã", "Noite"] },
  ],
  de: [
    { q: "Pizza oder Burger?", o: ["Pizza", "Burger"] },
    { q: "Strand oder Berge?", o: ["Strand", "Berge"] },
    { q: "Hund oder Katze?", o: ["Hund", "Katze"] },
    { q: "Kaffee oder Tee?", o: ["Kaffee", "Tee"] },
    { q: "Sommer oder Winter?", o: ["Sommer", "Winter"] },
    { q: "Netflix oder ausgehen?", o: ["Netflix", "Ausgehen"] },
    { q: "Süß oder salzig?", o: ["Süß", "Salzig"] },
    { q: "Früh- oder Nachtmensch?", o: ["Frühaufsteher", "Nachteule"] },
  ],
  ja: [
    { q: "ピザ or バーガー？", o: ["ピザ", "バーガー"] },
    { q: "海 or 山？", o: ["海", "山"] },
    { q: "犬 or 猫？", o: ["犬", "猫"] },
    { q: "コーヒー or 紅茶？", o: ["コーヒー", "紅茶"] },
    { q: "夏 or 冬？", o: ["夏", "冬"] },
    { q: "Netflix or 外出？", o: ["Netflix", "外出"] },
    { q: "甘い or しょっぱい？", o: ["甘い", "しょっぱい"] },
    { q: "朝型 or 夜型？", o: ["朝型", "夜型"] },
  ],
  zh: [
    { q: "披萨还是汉堡？", o: ["披萨", "汉堡"] },
    { q: "海边还是山里？", o: ["海边", "山里"] },
    { q: "狗还是猫？", o: ["狗", "猫"] },
    { q: "咖啡还是茶？", o: ["咖啡", "茶"] },
    { q: "夏天还是冬天？", o: ["夏天", "冬天"] },
    { q: "Netflix 还是出门？", o: ["Netflix", "出门"] },
    { q: "甜还是咸？", o: ["甜", "咸"] },
    { q: "早起还是熬夜？", o: ["早起", "熬夜"] },
  ],
};

export function getViralCopy(locale: Locale): ViralCopy {
  return VIRAL_COPY[locale] ?? VIRAL_COPY.en;
}

// Deeplink to the home create form, prefilled via the existing ?q=&o= params.
export function suggestionHref(s: Suggestion): string {
  return `/?q=${encodeURIComponent(s.q)}&o=${encodeURIComponent(s.o.join("|"))}`;
}

export function pickSuggestions(locale: Locale, n = 3): Suggestion[] {
  const pool = SUGGESTIONS[locale] ?? SUGGESTIONS.en;
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}
