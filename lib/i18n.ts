export type Locale = "fr" | "en" | "es" | "it";
export const LOCALES: Locale[] = ["fr", "en", "es", "it"];

export const LOCALE_NAMES: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
};

type Dict = Record<string, string>;

const fr: Dict = {
  "home.tagline": "Vote, partage, vois la vibe en live.",
  "home.trending": "🔥 Trending",
  "home.active": "actifs",
  "home.empty": "Pas encore de sondages — sois le premier.",
  "home.footer": "Gratuit · pas de compte · partage instantané",

  "form.question.label": "Question",
  "form.options.label": "Options",
  "form.option.placeholder": "Option",
  "form.add": "+ ajouter une option",
  "form.create": "Créer le moomz →",
  "form.creating": "Création…",

  "card.hot": "🔥 hot",
  "card.live": "live",
  "card.skip": "passer ↓",
  "card.detail": "Détail + partage →",
  "card.vote": "vote",
  "card.votes": "votes",
  "card.passed": "Passé ↓",
  "card.you": "toi",

  "results.refresh": "⟳ rafraîchir",
  "results.totalSingle": "vote au total",
  "results.totalPlural": "votes au total",

  "share.title": "Partage en 1 clic",
  "share.whatsapp": "WhatsApp",
  "share.x": "X",
  "share.telegram": "Telegram",
  "share.copy": "Copier",
  "share.copied": "Copié",
  "share.other": "📤 Autre app…",
  "share.new": "+ nouveau sondage",
  "share.shareText": "Vote 👉",

  "nav.home": "Home",
  "nav.discover": "Discover",
  "nav.votes": "Votes",
  "nav.polls": "Polls",

  "discover.title": "discover",
  "discover.count": "sondage",
  "discover.empty": "Plus rien à découvrir.",
  "discover.emptyHint": "Tu as tout vu — reviens plus tard.",
  "discover.create": "Créer un sondage →",
  "discover.swipe": "glisse pour le suivant",
  "discover.progress": "/",

  "notFound.title": "Ce moomz n'existe pas",
  "notFound.body": "Le sondage que tu cherches a été supprimé ou n'a jamais existé. Le lien est peut-être tapé de travers ?",
  "notFound.cta": "Créer un sondage →",

  "votes.title": "Mes votes",
  "votes.subtitleSingle": "sondage où t'as voté",
  "votes.subtitlePlural": "sondages où t'as voté",
  "votes.empty": "Aucun vote pour l'instant.",
  "votes.emptyBody": "Vote pour retrouver tes sondages ici.",
  "votes.emptyCta": "Découvrir →",

  "polls.title": "Mes sondages",
  "polls.empty": "Pas encore de sondages créés.",
  "polls.emptyBody": "Crée ton premier moomz.",
  "polls.emptyCta": "Créer →",
  "polls.newBadge": "new",

  "locale.label": "Langue",
};

const en: Dict = {
  "home.tagline": "Vote, share, see the vibe live.",
  "home.trending": "🔥 Trending",
  "home.active": "active",
  "home.empty": "No polls yet — be the first.",
  "home.footer": "Free · no account · instant share",

  "form.question.label": "Question",
  "form.options.label": "Options",
  "form.option.placeholder": "Option",
  "form.add": "+ add an option",
  "form.create": "Create the moomz →",
  "form.creating": "Creating…",

  "card.hot": "🔥 hot",
  "card.live": "live",
  "card.skip": "skip ↓",
  "card.detail": "Detail + share →",
  "card.vote": "vote",
  "card.votes": "votes",
  "card.passed": "Skipped ↓",
  "card.you": "you",

  "results.refresh": "⟳ refresh",
  "results.totalSingle": "vote total",
  "results.totalPlural": "votes total",

  "share.title": "Share in 1 tap",
  "share.whatsapp": "WhatsApp",
  "share.x": "X",
  "share.telegram": "Telegram",
  "share.copy": "Copy",
  "share.copied": "Copied",
  "share.other": "📤 Other app…",
  "share.new": "+ new poll",
  "share.shareText": "Vote 👉",

  "nav.home": "Home",
  "nav.discover": "Discover",
  "nav.votes": "Votes",
  "nav.polls": "Polls",

  "discover.title": "discover",
  "discover.count": "poll",
  "discover.empty": "Nothing left to discover.",
  "discover.emptyHint": "You've seen it all — come back later.",
  "discover.create": "Create a poll →",
  "discover.swipe": "swipe for next",
  "discover.progress": "/",

  "notFound.title": "This moomz doesn't exist",
  "notFound.body": "The poll you're looking for was deleted or never existed. Maybe a typo in the link?",
  "notFound.cta": "Create a poll →",

  "votes.title": "My votes",
  "votes.subtitleSingle": "poll you voted on",
  "votes.subtitlePlural": "polls you voted on",
  "votes.empty": "No votes yet.",
  "votes.emptyBody": "Vote to find your polls here.",
  "votes.emptyCta": "Discover →",

  "polls.title": "My polls",
  "polls.empty": "No polls created yet.",
  "polls.emptyBody": "Create your first moomz.",
  "polls.emptyCta": "Create →",
  "polls.newBadge": "new",

  "locale.label": "Language",
};

const es: Dict = {
  "home.tagline": "Vota, comparte, mira la vibra en vivo.",
  "home.trending": "🔥 Trending",
  "home.active": "activos",
  "home.empty": "Aún no hay encuestas — sé el primero.",
  "home.footer": "Gratis · sin cuenta · compartir al instante",

  "form.question.label": "Pregunta",
  "form.options.label": "Opciones",
  "form.option.placeholder": "Opción",
  "form.add": "+ añadir opción",
  "form.create": "Crear el moomz →",
  "form.creating": "Creando…",

  "card.hot": "🔥 hot",
  "card.live": "live",
  "card.skip": "pasar ↓",
  "card.detail": "Detalle + compartir →",
  "card.vote": "voto",
  "card.votes": "votos",
  "card.passed": "Pasado ↓",
  "card.you": "tú",

  "results.refresh": "⟳ actualizar",
  "results.totalSingle": "voto en total",
  "results.totalPlural": "votos en total",

  "share.title": "Comparte en 1 toque",
  "share.whatsapp": "WhatsApp",
  "share.x": "X",
  "share.telegram": "Telegram",
  "share.copy": "Copiar",
  "share.copied": "Copiado",
  "share.other": "📤 Otra app…",
  "share.new": "+ nueva encuesta",
  "share.shareText": "Vota 👉",

  "nav.home": "Inicio",
  "nav.discover": "Descubrir",
  "nav.votes": "Votos",
  "nav.polls": "Encuestas",

  "discover.title": "descubrir",
  "discover.count": "encuesta",
  "discover.empty": "No queda nada por descubrir.",
  "discover.emptyHint": "Lo viste todo — vuelve más tarde.",
  "discover.create": "Crear una encuesta →",
  "discover.swipe": "desliza para la siguiente",
  "discover.progress": "/",

  "notFound.title": "Este moomz no existe",
  "notFound.body": "La encuesta que buscas fue eliminada o nunca existió. ¿Quizá un error en el enlace?",
  "notFound.cta": "Crear una encuesta →",

  "votes.title": "Mis votos",
  "votes.subtitleSingle": "encuesta votada",
  "votes.subtitlePlural": "encuestas votadas",
  "votes.empty": "Aún no hay votos.",
  "votes.emptyBody": "Vota para encontrar tus encuestas aquí.",
  "votes.emptyCta": "Descubrir →",

  "polls.title": "Mis encuestas",
  "polls.empty": "Sin encuestas creadas aún.",
  "polls.emptyBody": "Crea tu primer moomz.",
  "polls.emptyCta": "Crear →",
  "polls.newBadge": "new",

  "locale.label": "Idioma",
};

const it: Dict = {
  "home.tagline": "Vota, condividi, guarda la vibe in diretta.",
  "home.trending": "🔥 Trending",
  "home.active": "attivi",
  "home.empty": "Nessun sondaggio ancora — sii il primo.",
  "home.footer": "Gratis · senza account · condivisione istantanea",

  "form.question.label": "Domanda",
  "form.options.label": "Opzioni",
  "form.option.placeholder": "Opzione",
  "form.add": "+ aggiungi opzione",
  "form.create": "Crea il moomz →",
  "form.creating": "Creazione…",

  "card.hot": "🔥 hot",
  "card.live": "live",
  "card.skip": "salta ↓",
  "card.detail": "Dettaglio + condividi →",
  "card.vote": "voto",
  "card.votes": "voti",
  "card.passed": "Saltato ↓",
  "card.you": "tu",

  "results.refresh": "⟳ aggiorna",
  "results.totalSingle": "voto in totale",
  "results.totalPlural": "voti in totale",

  "share.title": "Condividi con 1 tap",
  "share.whatsapp": "WhatsApp",
  "share.x": "X",
  "share.telegram": "Telegram",
  "share.copy": "Copia",
  "share.copied": "Copiato",
  "share.other": "📤 Altra app…",
  "share.new": "+ nuovo sondaggio",
  "share.shareText": "Vota 👉",

  "nav.home": "Home",
  "nav.discover": "Scopri",
  "nav.votes": "Voti",
  "nav.polls": "Sondaggi",

  "discover.title": "scopri",
  "discover.count": "sondaggio",
  "discover.empty": "Niente più da scoprire.",
  "discover.emptyHint": "Hai visto tutto — torna più tardi.",
  "discover.create": "Crea un sondaggio →",
  "discover.swipe": "scorri per il prossimo",
  "discover.progress": "/",

  "notFound.title": "Questo moomz non esiste",
  "notFound.body": "Il sondaggio che cerchi è stato cancellato o non è mai esistito. Forse un errore nel link?",
  "notFound.cta": "Crea un sondaggio →",

  "votes.title": "I miei voti",
  "votes.subtitleSingle": "sondaggio votato",
  "votes.subtitlePlural": "sondaggi votati",
  "votes.empty": "Nessun voto ancora.",
  "votes.emptyBody": "Vota per ritrovare i tuoi sondaggi qui.",
  "votes.emptyCta": "Scopri →",

  "polls.title": "I miei sondaggi",
  "polls.empty": "Nessun sondaggio creato.",
  "polls.emptyBody": "Crea il tuo primo moomz.",
  "polls.emptyCta": "Crea →",
  "polls.newBadge": "new",

  "locale.label": "Lingua",
};

const DICTS: Record<Locale, Dict> = { fr, en, es, it };

export function t(key: string, locale: Locale): string {
  return DICTS[locale][key] ?? DICTS.fr[key] ?? key;
}

export function pickLocaleFromAcceptLanguage(accept: string | null | undefined): Locale {
  if (!accept) return "fr";
  for (const part of accept.split(",")) {
    const lang = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if ((LOCALES as string[]).includes(lang)) return lang as Locale;
  }
  return "fr";
}
