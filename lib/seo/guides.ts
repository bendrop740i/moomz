import type { SeoPage } from "./types";

const today = "2026-05-19";

export const guides: SeoPage[] = [
  {
    slug: "comment-faire-sondage-instagram",
    locale: "fr",
    category: "guides",
    emoji: "📸",
    title: "Comment faire un sondage Instagram (et au-delà de 2 options)",
    h1: "Comment faire un sondage Instagram — le guide complet",
    description:
      "Tuto pour faire un sondage Instagram en 30 sec, + la méthode pour aller au-delà des 2 options avec un sondage moomz.",
    intro:
      "Le sondage Instagram natif est utile mais limité : 2 options, pas anonyme, disparaît avec la story. Voici comment faire un vrai sondage Instagram en 30 secondes, et comment passer à plus de 2 options avec moomz quand le sticker IG te bloque.",
    sections: [
      {
        h: "Étape 1 : le sondage Instagram natif (2 options)",
        body: "Ouvre Instagram. Crée une story (photo ou texte). Tape l'icône stickers (carré souriant en haut). Cherche \"Sondage\" (ou Poll). Saisis la question (max 24 caractères) et tes 2 options (max 16 caractères chacune). Place le sticker où tu veux sur la story. Publie. Tes followers voient le sondage, tapent leur option, voient le %.",
      },
      {
        h: "Étape 2 : voir les résultats",
        body: "Ouvre ta story. Swipe vers le haut depuis le bas de l'écran. Tu vois la liste des votants avec leur choix. Sur le sondage natif, ce n'est PAS anonyme — tu sais qui a voté quoi. La story disparaît au bout de 24h, le sondage avec.",
      },
      {
        h: "Étape 3 : aller au-delà de 2 options (avec moomz)",
        body: "Pour 3, 4, 5 ou 6 options : crée ton sondage sur moomz.com (10 secondes), copie le lien court (5 caractères). Crée une story Instagram, ajoute le sticker \"Lien\" depuis les stickers, colle le lien moomz. Tes followers tapent le sticker, le lien s'ouvre dans le navigateur intégré, ils votent, retour à la story.",
      },
      {
        h: "Étape 4 : sondage anonyme",
        body: "Tu veux un sondage VRAIMENT anonyme ? Le sticker Instagram natif te montre qui a voté. moomz, lui, ne révèle aucune identité. Crée le sondage sur moomz, partage le lien en story (sticker Lien). Aucun follower ne saura qui a voté quoi. Idéal pour les sondages sensibles (avis sur quelqu'un, choix perso, débat).",
      },
      {
        h: "Étape 5 : sondage durable",
        body: "Le sondage Instagram disparaît avec la story (24h). Le sondage moomz reste actif tant que tu veux. Relance le lien dans une nouvelle story le lendemain, les votes s'accumulent. Idéal si tu veux un total significatif sur 1-2 semaines.",
      },
    ],
    polls: [
      { q: "Story tous les jours ou jamais ?", options: ["Tous les jours", "Quand j'ai envie", "Jamais"] },
      { q: "Sticker sondage natif suffit-il ?", options: ["Oui", "Non trop limité", "Selon le besoin"] },
      { q: "Anonymat des votes ?", options: ["Important", "Pas grave", "Selon le sondage"] },
    ],
    faq: [
      {
        q: "Combien d'options dans un sondage Instagram ?",
        a: "Le sondage natif est limité à 2 options. Pour plus, utilise un lien moomz dans le sticker Lien (Story).",
      },
      {
        q: "Les sondages Instagram sont-ils anonymes ?",
        a: "Non, Instagram te montre qui a voté quoi. Pour un sondage anonyme, utilise moomz.",
      },
      {
        q: "Combien de temps dure un sondage Instagram ?",
        a: "Le sondage natif disparaît avec la story (24h). Le sondage moomz reste actif sans limite.",
      },
      {
        q: "Peut-on faire un sondage Instagram à plus de 2 options ?",
        a: "Pas avec le sticker natif. Mais en partageant un lien moomz dans le sticker Lien, tu peux avoir jusqu'à 6 options.",
      },
      {
        q: "Comment partager un sondage Instagram hors d'Instagram ?",
        a: "Impossible avec le sondage natif. Avec moomz, le lien marche partout (WhatsApp, Snap, mail, SMS).",
      },
    ],
    related: ["instagram-story", "comment-faire-sondage-anonyme", "sondage-en-ligne-gratuit", "partager-sondage-whatsapp"],
    updatedAt: today,
  },
  {
    slug: "comment-faire-sondage-anonyme",
    locale: "fr",
    category: "guides",
    emoji: "🕶️",
    title: "Comment faire un sondage anonyme (vraiment anonyme)",
    h1: "Comment faire un sondage 100% anonyme : guide 2026",
    description:
      "Toutes les méthodes pour faire un sondage vraiment anonyme : Google Forms, Doodle, Strawpoll, moomz. Comparatif et tuto pas à pas.",
    intro:
      "\"Anonyme\" veut dire différentes choses selon l'outil. Google Forms peut être configuré sans collecter d'email mais ton compte est tracé. Doodle est nominatif par design. Strawpoll est anonyme mais limité. moomz est anonyme par défaut, sans inscription. Voici le comparatif complet.",
    sections: [
      {
        h: "Pourquoi vouloir un sondage anonyme",
        body: "L'anonymat protège la sincérité. Sur un sondage feedback équipe, les juniors n'oseront pas voter contre l'opinion du boss s'ils sont identifiés. Sur un sondage de couple, ton/ta partenaire mettra une réponse \"politiquement correcte\" plutôt que la vraie. L'anonymat est aussi crucial pour les sondages sensibles (santé, opinion politique, jugement de pairs).",
      },
      {
        h: "Google Forms anonyme : ce qui est vrai et faux",
        body: "Google Forms permet de désactiver la collecte d'email (Paramètres → Réponses). Mais : (1) tu dois être logué Google pour voter sur un Form interne à une organisation, (2) Google logge l'IP, (3) le créateur peut activer le suivi à tout moment. Anonymat partiel, pas total.",
      },
      {
        h: "Doodle : pas anonyme",
        body: "Doodle est conçu pour les RDV, donc nominatif par design. Tu vois qui a coché quelle date. Ce n'est pas un outil de sondage anonyme — c'est un outil de planification.",
      },
      {
        h: "Strawpoll : anonyme mais limité",
        body: "Strawpoll est un classique du sondage anonyme. Mais : (1) interface vieillissante, (2) pas de design moderne pour partager en story, (3) pas de résultats en live animés. C'est le ancêtre — fonctionnel mais daté.",
      },
      {
        h: "moomz : anonyme par défaut",
        body: "moomz est conçu pour le sondage anonyme. Aucune inscription, aucun email, aucun nom collecté. Anti-double-vote via cookie. Résultats en live, partage en un lien court (5 caractères). Compatible Insta, Snap, WhatsApp, Discord. Crée ton sondage en 10 secondes, partage le lien, regarde les résultats en live.",
      },
    ],
    polls: [
      { q: "Quel outil pour un sondage anonyme ?", options: ["Google Forms", "Strawpoll", "moomz", "Autre"] },
      { q: "L'anonymat des votes est important pour toi ?", options: ["Toujours", "Selon le contexte", "Pas vraiment"] },
    ],
    faq: [
      {
        q: "Google Forms est-il vraiment anonyme ?",
        a: "Pas totalement. Tu peux désactiver la collecte d'email, mais Google logge l'IP, et si tu es dans Google Workspace, ton compte est tracé. Pour un anonymat strict, choisis moomz ou Strawpoll.",
      },
      {
        q: "Strawpoll ou moomz ?",
        a: "Strawpoll fonctionne mais l'interface est vieille. moomz est plus moderne, mieux adapté aux partages mobiles (Insta, TikTok, Snap).",
      },
      {
        q: "Y a-t-il une limite de votants sur un sondage anonyme moomz ?",
        a: "Non. 4 votants ou 4000, ça fonctionne pareil.",
      },
      {
        q: "Comment empêcher quelqu'un de voter plusieurs fois ?",
        a: "moomz bloque les votes multiples via cookie. Une personne = un vote. Pour aller plus loin (bloquage IP), c'est sur la roadmap mais pas critique pour la plupart des usages.",
      },
    ],
    related: ["sondage-en-ligne-gratuit", "alternative-strawpoll", "comment-faire-sondage-instagram", "sondage-rapide-sans-inscription"],
    updatedAt: today,
  },
  {
    slug: "sondage-en-ligne-gratuit",
    locale: "fr",
    category: "guides",
    emoji: "💸",
    title: "Sondage en ligne gratuit : comparatif des 6 meilleurs outils 2026",
    h1: "Sondage en ligne gratuit : comparatif 2026",
    description:
      "Comparatif des 6 meilleurs outils de sondage gratuits : Google Forms, Strawpoll, Doodle, Typeform, Mentimeter, moomz.",
    intro:
      "Faire un sondage gratuit en 2026, c'est possible mais chaque outil a ses limites. Google Forms est puissant mais ne gère pas l'anonymat strict. Doodle est pour les RDV. Typeform a une limite de réponses. moomz est gratuit, anonyme, sans limite. Voici le comparatif.",
    sections: [
      {
        h: "Google Forms",
        body: "Gratuit, intégré à Google Workspace. Puissant pour les longs formulaires. Limites : pas idéal pour un sondage rapide (UI lourd), nécessite un compte Google pour créer, anonymat partiel, pas de partage mobile-first. Idéal pour les sondages formels avec plusieurs champs.",
      },
      {
        h: "Strawpoll",
        body: "Gratuit, anonyme, simple. Limites : interface daté, pas de résultats animés, peu adapté au mobile et au partage en story Insta. Le grand-père du sondage rapide. Fonctionne, mais ne brille plus.",
      },
      {
        h: "Doodle",
        body: "Gratuit pour les sondages de RDV. Limites : conçu pour les dates, pas pour les sondages d'opinion. Nominatif par design. Si tu veux planifier une réunion, parfait. Sinon, mauvais choix.",
      },
      {
        h: "Typeform",
        body: "Beau, moderne, mobile-friendly. Mais : limite à 10 réponses/mois sur le plan gratuit, premium à 25€/mois. Idéal pour les formulaires complexes (NPS, feedback client), trop lourd pour un sondage rapide.",
      },
      {
        h: "Mentimeter",
        body: "Excellent pour les présentations live (formation, réunion). Limites : 2 sondages max par présentation sur le plan gratuit, pas conçu pour le partage social. Le bon choix si tu fais une formation, pas pour Insta.",
      },
      {
        h: "moomz",
        body: "Gratuit, anonyme, sans limite de réponses, partage mobile-first, résultats live animés. Conçu pour les sondages rapides et le partage en story. Limites : 6 options max par sondage, pas de formulaire complexe (un seul champ par sondage). Idéal pour : Insta, Snap, TikTok, WhatsApp, soirées, débats.",
      },
    ],
    polls: [
      { q: "Quel outil tu utilises ?", options: ["Google Forms", "Strawpoll", "Doodle", "moomz"] },
      { q: "Le plus important pour toi ?", options: ["Anonymat", "Beau design", "Limite gratuite", "Partage facile"] },
    ],
    faq: [
      {
        q: "Quel est l'outil de sondage gratuit le plus simple ?",
        a: "moomz pour les sondages rapides et le partage mobile. Strawpoll comme alternative. Google Forms pour les formulaires plus longs.",
      },
      {
        q: "Y a-t-il une limite gratuite sur moomz ?",
        a: "Non — moomz est gratuit sans limite de réponses ni de sondages. Pas de pub, pas de premium obligatoire.",
      },
      {
        q: "Quel outil pour un sondage anonyme ?",
        a: "moomz par défaut. Strawpoll en alternative. Google Forms est anonyme partiel.",
      },
      {
        q: "Et pour un RDV (sondage de date) ?",
        a: "Doodle reste meilleur pour ça. moomz est plus pour les sondages d'opinion ou de décision.",
      },
    ],
    related: ["alternative-strawpoll", "comment-faire-sondage-anonyme", "comment-faire-sondage-instagram", "sondage-rapide-sans-inscription"],
    updatedAt: today,
  },
  {
    slug: "alternative-strawpoll",
    locale: "fr",
    category: "guides",
    emoji: "🆕",
    title: "Alternative à Strawpoll : 3 outils modernes en 2026",
    h1: "Alternative à Strawpoll : 3 options en 2026 (dont une française)",
    description:
      "Strawpoll vieillit. Voici 3 alternatives modernes : moomz, Polldaddy, Mentimeter. Comparatif et tuto.",
    intro:
      "Strawpoll a inventé le sondage anonyme rapide. Mais l'interface n'a pas évolué depuis 2010, le mobile est sous-optimal, et l'expérience de vote est old-school. Voici 3 alternatives modernes : moomz (FR), Polldaddy, Mentimeter. Chacune brille sur un cas d'usage.",
    sections: [
      {
        h: "Pourquoi chercher une alternative à Strawpoll",
        body: "Strawpoll fonctionne, mais : (1) design daté, (2) pas optimisé pour le partage en story Insta ou TikTok, (3) résultats statiques (pas d'animation), (4) le lien généré est long. En 2026, les utilisateurs veulent un design moderne, mobile-first, avec des résultats live qui s'animent.",
      },
      {
        h: "moomz : alternative française et moderne",
        body: "Conçu en 2025 pour combler le gap de Strawpoll : design glassmorphism, animation live, lien court (5 caractères), 100% mobile-first, anonyme par défaut, sans inscription. Compatible Insta, Snap, TikTok, WhatsApp. Made in France.",
      },
      {
        h: "Polldaddy / Crowdsignal : alternative pro",
        body: "Polldaddy (rebaptisé Crowdsignal) est l'alternative pro. Belles features (logos, branding, export Excel), mais payant au-delà de 200 réponses/mois. Si tu fais des sondages dans un cadre marketing avec branding, c'est bien. Pour un sondage rapide entre potes, c'est over-engineered.",
      },
      {
        h: "Mentimeter : alternative formation",
        body: "Mentimeter brille pour les présentations live (formation, conférences). Tu projettes un QR code, le public vote depuis son tel, les résultats s'affichent en live. Limite : pas pensé pour le partage en story.",
      },
      {
        h: "Quel outil pour quoi ?",
        body: "Sondage en story Insta / TikTok / soirée : moomz. Sondage avec branding entreprise : Polldaddy. Sondage en présentation live : Mentimeter. Sondage formulaire complexe : Typeform ou Google Forms.",
      },
    ],
    polls: [
      { q: "Pourquoi tu quittes Strawpoll ?", options: ["Trop vieux", "Mauvais mobile", "Lien trop long", "Aucune raison"] },
      { q: "Alternative préférée ?", options: ["moomz", "Polldaddy", "Mentimeter", "Reste sur Strawpoll"] },
    ],
    faq: [
      {
        q: "moomz est-il vraiment gratuit ?",
        a: "Oui — gratuit, sans limite de votes, sans pub. Pas de version Premium obligatoire pour les fonctions de base.",
      },
      {
        q: "Pourquoi quitter Strawpoll ?",
        a: "Interface daté, mobile sous-optimal, pas de partage social moderne. Pour un sondage rapide à partager en story, les alternatives sont meilleures.",
      },
      {
        q: "Peut-on importer ses anciens sondages Strawpoll ?",
        a: "Non — il n'y a pas d'export Strawpoll vers moomz. Tu repars de zéro, c'est rapide (10 sec par sondage).",
      },
      {
        q: "moomz collecte-t-il mes données ?",
        a: "Aucune donnée personnelle. Pas d'inscription, pas d'email, pas de tracking. Conforme RGPD par design.",
      },
    ],
    related: ["sondage-en-ligne-gratuit", "comment-faire-sondage-anonyme", "sondage-rapide-sans-inscription", "comment-faire-sondage-instagram"],
    updatedAt: today,
  },
  {
    slug: "sondage-rapide-sans-inscription",
    locale: "fr",
    category: "guides",
    emoji: "⚡",
    title: "Sondage rapide sans inscription : 10 secondes max",
    h1: "Sondage rapide sans inscription : créer en 10 secondes",
    description:
      "Tuto pour créer un sondage sans inscription, sans email, sans login. Anonyme, gratuit, en 10 secondes.",
    intro:
      "Tu veux un sondage MAINTENANT. Pas créer un compte. Pas confirmer un email. Pas paramétrer 15 options. moomz est conçu pour ça : tu arrives, tu tapes ta question, tu ajoutes tes options, tu cliques \"créer\", tu obtiens un lien à partager. 10 secondes.",
    sections: [
      {
        h: "Pourquoi le sondage sans inscription cartonne",
        body: "L'inscription est un tunnel à abandon : 30% des utilisateurs abandonnent à la création de compte, 50% à la confirmation email. Pour un sondage qu'on lance dans le groupe WhatsApp à 23h, l'inscription est de trop. moomz a supprimé cette friction.",
      },
      {
        h: "Comment créer en 10 secondes",
        body: "Va sur moomz.com. Tape ta question dans le champ (ex : \"on commande quoi ?\"). Ajoute 2 à 6 options (\"pizza\", \"sushi\", \"tacos\"). Clique \"Créer le moomz\". Le sondage est créé. Tu obtiens un lien court (moomz.com/abcde). Copie, partage. C'est fini.",
      },
      {
        h: "Partager le sondage",
        body: "Le lien moomz fonctionne partout : WhatsApp (preview riche), Snapchat (sticker Lien), Instagram (sticker Lien story), Discord (preview), Telegram, mail, SMS. Pas de barrière de plateforme.",
      },
      {
        h: "Voter (côté votants)",
        body: "Tes amis cliquent le lien. La page s'ouvre dans leur navigateur (Safari, Chrome). Ils tapent leur option. C'est voté. Pas d'inscription. Pas de compte. Pas d'email. Anti-double-vote par cookie.",
      },
      {
        h: "Voir les résultats",
        body: "Les résultats s'animent en live. Tu peux refresh la page : les % bougent avec les nouveaux votes. À tout moment, tu peux screen le résultat pour le partager en story ou clore le débat.",
      },
    ],
    polls: [
      { q: "Tu veux quoi ce soir ?", options: ["Pizza", "Sushi", "Tacos", "Rien"] },
      { q: "Sondage anonyme nécessaire ?", options: ["Oui", "Non", "Selon le sondage"] },
    ],
    faq: [
      {
        q: "Vraiment 10 secondes ?",
        a: "Oui — chrono entre l'ouverture de moomz.com et l'obtention du lien partageable : 10-15 secondes en moyenne.",
      },
      {
        q: "Le sondage est-il privé ?",
        a: "Le lien est unique (5 caractères aléatoires) et non-indexé. Seuls ceux à qui tu le partages le trouveront.",
      },
      {
        q: "Combien de temps reste-t-il actif ?",
        a: "Tant qu'il a des votes. Les sondages inactifs (sans vote ni vue) sont nettoyés au bout de plusieurs semaines (politique anti-spam).",
      },
      {
        q: "Combien de votes max ?",
        a: "Pas de limite. 4 ou 4000, même fonctionnement.",
      },
    ],
    related: ["sondage-en-ligne-gratuit", "comment-faire-sondage-anonyme", "alternative-strawpoll", "partager-sondage-whatsapp"],
    updatedAt: today,
  },
  {
    slug: "partager-sondage-whatsapp",
    locale: "fr",
    category: "guides",
    emoji: "💬",
    title: "Comment partager un sondage WhatsApp (et au-delà du natif)",
    h1: "Comment partager un sondage WhatsApp en 2026",
    description:
      "Tuto pour faire un sondage WhatsApp natif + comment partager un sondage moomz dans un groupe WhatsApp avec preview riche.",
    intro:
      "WhatsApp a un sondage natif depuis 2022, mais limité au groupe et avec un anonymat partiel. Pour partager un sondage hors du groupe, ou avoir un anonymat complet, on bascule sur moomz. Voici la méthode pour les deux cas.",
    sections: [
      {
        h: "Méthode 1 : sondage WhatsApp natif (dans un groupe)",
        body: "Ouvre un groupe WhatsApp. Tape l'icône trombone (en bas à droite). Choisis \"Sondage\". Saisis la question. Ajoute 2 à 12 options. Envoyer. Les membres tapent l'option, le vote est enregistré. Ils voient le résultat en tapant le sondage. Note : WhatsApp affiche qui a voté quoi (pas anonyme).",
      },
      {
        h: "Méthode 2 : sondage moomz partagé en WhatsApp",
        body: "Va sur moomz.com. Crée ton sondage (10 sec). Copie le lien (moomz.com/abcde). Ouvre WhatsApp (groupe ou contact). Colle le lien dans le chat. Envoyer. WhatsApp affiche un preview riche : titre du sondage, options, bouton pour voter. Les membres tapent, ils votent dans le navigateur, ils reviennent au chat.",
      },
      {
        h: "Quand choisir natif vs moomz",
        body: "Natif : décision rapide dans le groupe, sans besoin d'anonymat, pas de partage hors WhatsApp. Tu veux savoir qui ramène le vin samedi soir. moomz : sondage anonyme, partage hors WhatsApp (autre groupe, story Insta, mail), résultats live animés, plus de design.",
      },
      {
        h: "Astuce : sondage chrono",
        body: "Annonce dans le groupe : \"on vote, ça ferme à 19h\". Colle le lien moomz. À 19h, tu screen le résultat, tu le balance dans le chat. \"Ananas a gagné, on commande la pizza.\" Fin du débat sans tension.",
      },
    ],
    polls: [
      { q: "Tu utilises plus le sondage natif ou moomz dans WhatsApp ?", options: ["Natif", "moomz", "Les deux"] },
      { q: "Anonymat important sur WhatsApp ?", options: ["Toujours", "Parfois", "Jamais"] },
    ],
    faq: [
      {
        q: "Le sondage WhatsApp natif est-il anonyme ?",
        a: "Non, WhatsApp affiche qui a voté quoi. Pour un sondage 100% anonyme, utilise moomz.",
      },
      {
        q: "Combien d'options dans un sondage WhatsApp natif ?",
        a: "12 maximum. moomz est à 6 max mais offre l'anonymat et le partage hors WhatsApp.",
      },
      {
        q: "Peut-on partager un sondage WhatsApp natif vers Instagram ?",
        a: "Non — c'est verrouillé dans WhatsApp. Avec moomz, le lien marche partout.",
      },
      {
        q: "WhatsApp affiche-t-il un preview pour moomz ?",
        a: "Oui — preview riche avec titre du sondage et bouton vote. Pas de friction.",
      },
    ],
    related: ["sondage-rapide-sans-inscription", "comment-faire-sondage-instagram", "comment-faire-sondage-anonyme", "discord"],
    updatedAt: today,
  },
  {
    slug: "how-to-make-instagram-poll",
    locale: "en",
    category: "guides",
    emoji: "📸",
    title: "How to Make an Instagram Poll (Beyond 2 Options)",
    h1: "How to Make an Instagram Poll: The 2026 Guide",
    description:
      "Step-by-step Instagram poll tutorial + how to go beyond 2 options using a moomz link. Free, anonymous, no signup.",
    intro:
      "Instagram's native poll caps you at 2 options, isn't anonymous, and disappears with the Story. Here's the full tutorial for the native poll, plus how to upgrade to 3-6 options (and full anonymity) using a moomz link.",
    sections: [
      {
        h: "Step 1: the native Instagram poll (2 options)",
        body: "Open Instagram. Create a Story. Tap the sticker icon (smiley square top). Search \"Poll.\" Enter the question (max 24 chars) and 2 options (max 16 chars each). Place the sticker. Post. Followers see the poll, tap, vote, see %.",
      },
      {
        h: "Step 2: see the results",
        body: "Open your Story. Swipe up from the bottom. See who voted what. Native polls are NOT anonymous — you see the identity of each voter. Story expires in 24h, poll dies with it.",
      },
      {
        h: "Step 3: go beyond 2 options (with moomz)",
        body: "For 3-6 options: create your poll at moomz.com (10 seconds), copy the short link (5 characters). Create an Instagram Story, add the \"Link\" sticker, paste the moomz URL. Followers tap the sticker, the link opens in IG's in-app browser, they vote, back to the Story.",
      },
      {
        h: "Step 4: anonymous poll",
        body: "Want REAL anonymity? Native sticker reveals voters. moomz never identifies voters. Create the poll on moomz, share via Link sticker. No follower will know who voted what. Perfect for sensitive votes (opinions, debates, personal choices).",
      },
      {
        h: "Step 5: durable poll",
        body: "Instagram poll dies with the Story (24h). moomz polls stay live indefinitely. Re-share the link in tomorrow's Story to keep votes flowing. Ideal for accumulating meaningful totals over 1-2 weeks.",
      },
    ],
    polls: [
      { q: "Daily Stories or never?", options: ["Daily", "When I feel like it", "Never"] },
      { q: "Is the native sticker enough?", options: ["Yes", "Too limited", "Depends"] },
      { q: "Vote anonymity?", options: ["Important", "Don't care", "Depends"] },
    ],
    faq: [
      { q: "How many options in an Instagram poll?", a: "Native: 2. With moomz link sticker: 2-6 options." },
      { q: "Are Instagram polls anonymous?", a: "No. Instagram shows you who voted what. For full anonymity, use moomz." },
      { q: "How long does an Instagram poll last?", a: "Native dies with the Story (24h). moomz polls stay live indefinitely." },
      { q: "Can I share a poll outside Instagram?", a: "Native: no. With moomz: yes — the link works anywhere (WhatsApp, Snap, email)." },
    ],
    related: ["instagram-story-poll", "how-to-make-anonymous-poll", "free-online-poll-maker", "how-to-share-poll-link"],
    updatedAt: today,
  },
  {
    slug: "how-to-make-anonymous-poll",
    locale: "en",
    category: "guides",
    emoji: "🕶️",
    title: "How to Make an Anonymous Poll (Truly Anonymous)",
    h1: "How to Make a 100% Anonymous Poll in 2026",
    description:
      "All methods to make a truly anonymous poll: Google Forms, Doodle, Strawpoll, moomz. Full comparison + step-by-step.",
    intro:
      "\"Anonymous\" means different things across tools. Google Forms can be configured without email but tracks accounts. Doodle is nominative. Strawpoll is anonymous but dated. moomz is anonymous by default, no signup. Here's the full comparison.",
    sections: [
      {
        h: "Why anonymous matters",
        body: "Anonymity protects honesty. In a team feedback poll, juniors won't vote against boss's opinion if identified. In couple polls, partners give \"politically correct\" answers if their identity is known. Critical for sensitive votes (health, opinion, peer judgment).",
      },
      {
        h: "Google Forms anonymous: the truth",
        body: "Forms can disable email collection (Settings → Responses). But: (1) need Google login for org-internal Forms, (2) Google logs IP, (3) admin can re-enable tracking. Partial anonymity, not total.",
      },
      {
        h: "Doodle: not anonymous",
        body: "Doodle is for scheduling, so nominative by design. You see who picked which date. Not an anonymous poll tool — it's a planning tool.",
      },
      {
        h: "Strawpoll: anonymous but dated",
        body: "Classic of anonymous polls. But: (1) aging UI, (2) no modern Story-share, (3) no animated live results. The ancestor — functional but outdated.",
      },
      {
        h: "moomz: anonymous by default",
        body: "Built for anonymous polling. No signup, no email, no name collected. Anti-double-vote via cookie. Live animated results. Short 5-char link, shareable across Insta, Snap, WhatsApp, Discord. Create in 10 seconds, share the link, watch live results.",
      },
    ],
    polls: [
      { q: "Anonymous tool you prefer?", options: ["Google Forms", "Strawpoll", "moomz", "Other"] },
      { q: "How important is anonymity?", options: ["Always", "Depends", "Don't care"] },
    ],
    faq: [
      { q: "Is Google Forms truly anonymous?", a: "Not fully. Email collection can be disabled, but Google still logs IP. For strict anonymity, choose moomz or Strawpoll." },
      { q: "Strawpoll or moomz?", a: "Strawpoll works but feels dated. moomz is more modern, better for mobile-first sharing." },
      { q: "Vote cap on moomz?", a: "No. 4 voters or 4,000, same UX." },
      { q: "How to prevent double-voting?", a: "moomz blocks via cookie. One person = one vote." },
    ],
    related: ["free-online-poll-maker", "strawpoll-alternative", "how-to-make-instagram-poll", "how-to-share-poll-link"],
    updatedAt: today,
  },
  {
    slug: "free-online-poll-maker",
    locale: "en",
    category: "guides",
    emoji: "💸",
    title: "Free Online Poll Maker: Top 6 Tools Compared (2026)",
    h1: "Free Online Poll Maker: 2026 Comparison",
    description:
      "Compare the 6 best free poll tools: Google Forms, Strawpoll, Doodle, Typeform, Mentimeter, moomz.",
    intro:
      "Making a free poll in 2026 is possible but each tool has limits. Google Forms is powerful but not strictly anonymous. Doodle is for scheduling. Typeform caps responses. moomz is free, anonymous, unlimited. Here's the breakdown.",
    sections: [
      {
        h: "Google Forms",
        body: "Free, integrated with Workspace. Powerful for long forms. Limits: bulky for quick polls, requires Google account to create, partial anonymity, no mobile-first share. Best for formal multi-field surveys.",
      },
      {
        h: "Strawpoll",
        body: "Free, anonymous, simple. Limits: dated interface, no animated results, weak mobile/Story share. The grandfather of quick polls. Works but no longer shines.",
      },
      {
        h: "Doodle",
        body: "Free for scheduling polls. Limits: built for date-picking, not opinion. Nominative by design. Perfect for meeting scheduling, wrong choice for opinion polls.",
      },
      {
        h: "Typeform",
        body: "Beautiful, mobile-friendly. But: 10 responses/month free, $25/mo plans beyond. Best for complex forms (NPS, client feedback), too heavy for a quick poll.",
      },
      {
        h: "Mentimeter",
        body: "Excellent for live presentations (training, conferences). Limits: 2 polls max per presentation free, not for social sharing. Right pick for training, not Insta.",
      },
      {
        h: "moomz",
        body: "Free, anonymous, no response limit, mobile-first sharing, animated live results. Built for quick polls and Story sharing. Limits: 6 options max, single-field polls only. Ideal for: Insta, Snap, TikTok, WhatsApp, parties, debates.",
      },
    ],
    polls: [
      { q: "What tool do you use?", options: ["Google Forms", "Strawpoll", "Doodle", "moomz"] },
      { q: "Most important to you?", options: ["Anonymity", "Design", "Free limit", "Easy share"] },
    ],
    faq: [
      { q: "Simplest free poll tool?", a: "moomz for quick polls and mobile sharing. Strawpoll as alternative. Google Forms for longer forms." },
      { q: "Is moomz really free?", a: "Yes — unlimited responses, no ads, no mandatory premium." },
      { q: "Best anonymous tool?", a: "moomz by default. Strawpoll as backup. Google Forms is partial anonymous." },
      { q: "Best for date scheduling?", a: "Doodle remains best for that. moomz is for opinion/decision polls." },
    ],
    related: ["strawpoll-alternative", "how-to-make-anonymous-poll", "how-to-make-instagram-poll", "how-to-share-poll-link"],
    updatedAt: today,
  },
  {
    slug: "strawpoll-alternative",
    locale: "en",
    category: "guides",
    emoji: "🆕",
    title: "Strawpoll Alternative: 3 Modern Tools in 2026",
    h1: "Strawpoll Alternative: 3 Modern Options (Including a New One)",
    description:
      "Strawpoll is aging. Here are 3 modern alternatives: moomz, Polldaddy, Mentimeter. Comparison and how-to.",
    intro:
      "Strawpoll invented quick anonymous polls. But the interface hasn't evolved since 2010, mobile is suboptimal, and the voting experience is dated. Here are 3 modern alternatives: moomz, Polldaddy, Mentimeter. Each wins on a different use case.",
    sections: [
      {
        h: "Why switch from Strawpoll",
        body: "Works but: (1) dated design, (2) weak Story/TikTok sharing, (3) static results, (4) long URL. In 2026, users expect modern, mobile-first, animated live results.",
      },
      {
        h: "moomz: French and modern",
        body: "Built in 2025 to fill Strawpoll's gap: glassmorphism design, animated live results, short 5-character URL, mobile-first, anonymous by default, no signup. Compatible with Insta, Snap, TikTok, WhatsApp. Made in France.",
      },
      {
        h: "Polldaddy / Crowdsignal: pro alternative",
        body: "Polldaddy (now Crowdsignal) is the pro option. Nice features (logos, branding, Excel export), but paid above 200 responses/month. If you do branded marketing polls, fine. For a quick friend poll, overkill.",
      },
      {
        h: "Mentimeter: live presentation alternative",
        body: "Brilliant for live presentations (training, conferences). Project a QR code, audience votes from phones, results live. Limit: not built for Story sharing.",
      },
      {
        h: "Which tool when",
        body: "Story / TikTok / party polls: moomz. Branded enterprise polls: Polldaddy. Live presentation polls: Mentimeter. Complex multi-field forms: Typeform or Google Forms.",
      },
    ],
    polls: [
      { q: "Why leaving Strawpoll?", options: ["Too old", "Bad mobile", "Long URL", "Not leaving"] },
      { q: "Preferred alternative?", options: ["moomz", "Polldaddy", "Mentimeter", "Staying with Strawpoll"] },
    ],
    faq: [
      { q: "Is moomz really free?", a: "Yes — free, unlimited votes, no ads, no mandatory premium." },
      { q: "Why leave Strawpoll?", a: "Dated UI, weak mobile, no modern social share. For quick Story-share polls, alternatives are better." },
      { q: "Can I import old Strawpolls?", a: "No — no import path. Start fresh, it's fast (10 sec/poll)." },
      { q: "Does moomz collect data?", a: "No personal data. No signup, no email, no tracking. GDPR-compliant by design." },
    ],
    related: ["free-online-poll-maker", "how-to-make-anonymous-poll", "how-to-make-instagram-poll", "how-to-share-poll-link"],
    updatedAt: today,
  },
  {
    slug: "how-to-share-poll-link",
    locale: "en",
    category: "guides",
    emoji: "🔗",
    title: "How to Share a Poll Link Anywhere (Insta, Snap, WhatsApp, Discord)",
    h1: "How to Share a Poll Link Across All Platforms",
    description:
      "Tutorial for sharing a poll link on Instagram Story, Snap, WhatsApp, Discord, TikTok, and Telegram. With rich previews.",
    intro:
      "A poll is only useful if people vote. Sharing the link right is half the battle. Here's the exact method to share a moomz poll on Instagram Story, Snap Story, WhatsApp, Discord, TikTok bio, and Telegram — with rich previews on each.",
    sections: [
      {
        h: "Instagram Story",
        body: "Create the moomz poll, copy the link. Create a Story (photo, text, or video). Tap stickers, find \"Link.\" Paste the moomz URL. Customize the sticker text (\"vote here\"). Place on the Story, post. Followers tap, vote in IG's in-app browser, return.",
      },
      {
        h: "Snapchat Story",
        body: "Create a Snap (photo or text). Tap the paperclip icon (right toolbar). Paste the moomz URL. Customize the link button text. Send to your Story. Friends see a \"View More\" button — tap, vote, back.",
      },
      {
        h: "WhatsApp",
        body: "Open WhatsApp (group or contact). Paste the moomz link in the chat. WhatsApp shows a rich preview: poll title, options, vote button. Recipients tap, vote in their browser, back to chat.",
      },
      {
        h: "Discord",
        body: "Paste in any channel or DM. Discord shows a rich embed: poll title, options, image preview. Members click, vote, return to Discord.",
      },
      {
        h: "TikTok bio (or video caption)",
        body: "Paste the moomz URL in your bio field (Profile → Edit Profile → Website). Show as a clickable link. Reference it in your video (\"vote in bio\"). Video captions don't support clickable links for personal accounts.",
      },
      {
        h: "Telegram",
        body: "Paste in any chat or channel. Telegram displays a rich preview. Members tap, vote, return.",
      },
    ],
    polls: [
      { q: "Best platform to share polls?", options: ["Instagram", "TikTok", "WhatsApp", "Discord"] },
      { q: "Do you use the link sticker on Insta?", options: ["Always", "Sometimes", "Never"] },
    ],
    faq: [
      { q: "Does the moomz link work everywhere?", a: "Yes — Instagram Link sticker, Snap paperclip, WhatsApp/Discord/Telegram chat with preview, email, SMS." },
      { q: "Does it open the app or browser?", a: "On Insta/Snap/Discord, the link opens in the app's in-app browser. On WhatsApp/Telegram, in the system browser. Same UX everywhere." },
      { q: "Can I track who clicked?", a: "No — moomz doesn't track individual clicks for privacy. You see total vote count, not who voted." },
      { q: "How short is the link?", a: "5 characters after moomz.com/ (e.g. moomz.com/abcde). Total: 13 characters." },
    ],
    related: ["how-to-make-instagram-poll", "how-to-make-anonymous-poll", "free-online-poll-maker", "strawpoll-alternative"],
    updatedAt: today,
  },
  {
    slug: "icebreaker-poll-questions",
    locale: "en",
    category: "guides",
    emoji: "🧊",
    title: "Icebreaker Poll Questions Guide — When and How to Use Them",
    h1: "Icebreaker Poll Questions: When and How to Use Them",
    description:
      "Complete guide to icebreaker polls — when they work, what to ask, how to time them in meetings, dates, classrooms, new groups.",
    intro:
      "Icebreaker polls are the fastest way to get a silent room to speak. But the wrong question kills the vibe faster than no question. Here's the complete guide: when to use them, what to ask, how to introduce them.",
    sections: [
      {
        h: "When icebreakers work (and when they don't)",
        body: "Work: start of meeting, first date, new team, classroom intro, group of unrelated people. Don't work: end of a long session, after conflict, with people who already know each other deeply. Match the moment.",
      },
      {
        h: "How to introduce an icebreaker poll",
        body: "Bad: \"let's do an icebreaker.\" Sounds corporate, kills mood. Good: \"I have this silly app, let's try a quick one.\" \"Want to break the ice? Vote on this.\" Frame as game, not exercise.",
      },
      {
        h: "What to ask: 3 levels",
        body: "Level 1 (safe): coffee or tea, beach or mountain, weekend vibe. Level 2 (revealing): comfort food, dream city, superpower. Level 3 (deep): biggest fear, biggest win of the year. Start at level 1, progress.",
      },
      {
        h: "How many polls in a session",
        body: "Meeting: 1-2 at the start. First date: 3-5 spaced through the night. Classroom: 1 per session, weekly. Don't quiz people — make it organic.",
      },
      {
        h: "Time-of-day matters",
        body: "Morning icebreaker = energy boost (\"morning vibe?\"). Evening icebreaker = reflection (\"best moment of the day?\"). Mid-meeting = sugar break. Match the icebreaker to the energy you want to inject.",
      },
    ],
    polls: [
      { q: "Morning vibe today?", options: ["🔥 hyped", "😊 good", "😐 ok", "😴 tired"] },
      { q: "Best moment of your day?", options: ["Morning", "Lunch", "Afternoon", "Evening"] },
      { q: "Coffee or tea?", options: ["Coffee", "Tea", "Matcha", "Neither"] },
      { q: "Dream weekend?", options: ["Adventure", "Chill", "Social", "Solo"] },
    ],
    faq: [
      { q: "Aren't icebreakers cringe?", a: "Only when forced. A casual \"let's vote on this silly question\" works. \"Mandatory team icebreaker\" doesn't." },
      { q: "What if people don't vote?", a: "Pick easier questions. Or remove the social pressure with anonymity (moomz is anonymous by default)." },
      { q: "For online meetings?", a: "Drop the link in chat at the start. People vote during the intro. Energy surges when results show." },
      { q: "How many people for a good icebreaker?", a: "4-30 ideal. Below 4: feels forced. Above 30: too anonymous to feel personal." },
    ],
    related: ["icebreaker-en", "team-building-en", "first-date-en", "this-or-that"],
    updatedAt: today,
  },
];
