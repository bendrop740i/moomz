// Per-pair poll prompt suggestions. Picks a question + 3 options based on
// the from/to combo, falling back to a generic template for less-common pairs.
import type { CurrencyCode } from "@/lib/tools/convertisseur";
import { CURRENCIES } from "@/lib/tools/convertisseur";
import type { ToolLocale } from "./_strings";

type Prompt = { q: string; o: string[] };

function generic(from: CurrencyCode, to: CurrencyCode, locale: ToolLocale): Prompt {
  const fromName = locale === "en" ? CURRENCIES[from].name_en : CURRENCIES[from].name_fr;
  const toName = locale === "en" ? CURRENCIES[to].name_en : CURRENCIES[to].name_fr;
  switch (locale) {
    case "en":
      return { q: `Will the ${fromName} strengthen vs the ${toName} in 2026?`, o: ["Yes", "No", "No idea"] };
    case "es":
      return { q: `¿El ${fromName} se fortalecerá frente al ${toName} en 2026?`, o: ["Sí", "No", "Ni idea"] };
    case "it":
      return { q: `Il ${fromName} si rafforzerà rispetto al ${toName} nel 2026?`, o: ["Sì", "No", "Boh"] };
    case "pt":
      return { q: `O ${fromName} vai se valorizar frente ao ${toName} em 2026?`, o: ["Sim", "Não", "Sei lá"] };
    case "de":
      return { q: `Wird der ${fromName} 2026 gegenüber dem ${toName} stärker?`, o: ["Ja", "Nein", "Keine Ahnung"] };
    case "ja":
      return { q: `2026年、${fromName}は${toName}に対して強くなる？`, o: ["はい", "いいえ", "わからない"] };
    case "zh":
      return { q: `2026年${fromName}对${toName}会走强吗？`, o: ["会", "不会", "不知道"] };
    case "fr":
    default:
      return { q: `Le ${fromName} va remonter face au ${toName} en 2026 ?`, o: ["Oui", "Non", "J'sais pas"] };
  }
}

const SPECIFIC: Partial<Record<string, Partial<Record<ToolLocale, Prompt>>>> = {
  "eur-usd": {
    fr: { q: "L'EUR va remonter face au dollar en 2026 ?", o: ["Oui", "Non", "J'sais pas"] },
    en: { q: "Will the EUR rally vs the dollar in 2026?", o: ["Yes", "No", "No idea"] },
    es: { q: "¿El EUR superará al dólar en 2026?", o: ["Sí", "No", "Ni idea"] },
  },
  "usd-eur": {
    fr: { q: "Le dollar va dominer l'euro en 2026 ?", o: ["Oui", "Non", "Bof"] },
    en: { q: "Will the dollar crush the euro in 2026?", o: ["Yes", "No", "Meh"] },
  },
  "usd-jpy": {
    fr: { q: "Le yen va se reprendre face au dollar cette année ?", o: ["Oui", "Non", "J'sais pas"] },
    en: { q: "Will the yen bounce back vs the dollar this year?", o: ["Yes", "No", "No idea"] },
    ja: { q: "今年、円はドルに対して反発する？", o: ["はい", "いいえ", "わからない"] },
  },
  "gbp-eur": {
    fr: { q: "La livre vaut-elle encore plus que l'euro en 2027 ?", o: ["Oui", "Non", "Bof"] },
    en: { q: "Will the pound still beat the euro in 2027?", o: ["Yes", "No", "Meh"] },
  },
  "eur-gbp": {
    fr: { q: "L'euro repassera-t-il la livre un jour ?", o: ["Oui", "Non", "Jamais"] },
    en: { q: "Will the euro ever overtake the pound?", o: ["Yes", "No", "Never"] },
  },
  "eur-jpy": {
    fr: { q: "L'EUR/JPY au-dessus de 180 d'ici un an ?", o: ["Oui", "Non", "J'sais pas"] },
    en: { q: "EUR/JPY above 180 within a year?", o: ["Yes", "No", "No idea"] },
  },
  "eur-chf": {
    fr: { q: "Le franc suisse restera-t-il une valeur refuge ?", o: ["Oui toujours", "De moins en moins", "Non plus du tout"] },
    en: { q: "Will the Swiss franc stay a safe haven?", o: ["Always", "Less and less", "Not anymore"] },
  },
  "usd-cny": {
    fr: { q: "Le yuan va-t-il détrôner le dollar comme monnaie de réserve ?", o: ["Oui d'ici 10 ans", "Possible mais pas avant 20 ans", "Jamais"] },
    en: { q: "Will the yuan dethrone the dollar as reserve currency?", o: ["Within 10 years", "Maybe in 20+ years", "Never"] },
  },
  "usd-try": {
    fr: { q: "La livre turque va-t-elle se stabiliser un jour ?", o: ["Oui", "Non", "Aucune idée"] },
    en: { q: "Will the Turkish lira ever stabilize?", o: ["Yes", "No", "No idea"] },
  },
  "usd-brl": {
    fr: { q: "Le real brésilien va-t-il se renforcer en 2026 ?", o: ["Oui", "Non", "Pas sûr"] },
    en: { q: "Will the Brazilian real strengthen in 2026?", o: ["Yes", "No", "Not sure"] },
    pt: { q: "O real vai se valorizar em 2026?", o: ["Sim", "Não", "Sei lá"] },
  },
};

export function pollPrompt(from: CurrencyCode, to: CurrencyCode, locale: ToolLocale): Prompt {
  const slug = `${from.toLowerCase()}-${to.toLowerCase()}`;
  const specific = SPECIFIC[slug]?.[locale];
  if (specific) return specific;
  return generic(from, to, locale);
}
