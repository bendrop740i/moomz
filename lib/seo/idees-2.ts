import type { SeoPage } from "./types";

const today = "2026-05-19";

export const idees2: SeoPage[] = [
  {
    slug: "classe-primaire",
    locale: "fr",
    category: "idees",
    emoji: "🏫",
    title: "Sondage classe primaire : 25 idées pour les profs",
    h1: "Sondages classe primaire : voter en classe sans papier",
    description:
      "25 sondages adaptés à l'école primaire : nom de mascotte, sortie scolaire, thème de spectacle. Outil démocratique pour les profs.",
    intro:
      "Les profs de primaire qui veulent faire voter leurs élèves utilisent traditionnellement le papier ou la main levée. Avec moomz tu fais voter ta classe en 30 secondes : affiche le QR code au tableau, chaque élève vote depuis sa tablette ou une tablette commune. Bonus pédago : ils apprennent ce qu'est un scrutin.",
    sections: [
      {
        h: "Pourquoi le sondage en classe primaire",
        body: "À 7-11 ans, les enfants comprennent la notion de \"vote\" mais ils ont peu d'occasions concrètes de la pratiquer. Le sondage moomz devient un mini-rituel hebdomadaire : nom de la mascotte de la classe, choix de la sortie, thème du spectacle de fin d'année, livre lu en collectif. Le résultat est public, débattable, et tu peux re-voter si besoin.",
      },
      {
        h: "Comment l'utiliser concrètement",
        body: "Crée le sondage moomz sur ton tel ou ton PC. Affiche l'écran via le TBI ou projecteur. Tape l'URL courte (moomz.com/xxxxx) au tableau. Les élèves entrent l'URL sur leur tablette / l'iPad classe. Vote, résultat live affiché en grand. Pour les écoles sans tablette, tu peux passer ton tel de pupitre en pupitre — chaque élève vote tour à tour.",
      },
      {
        h: "Sondages éducatifs au-delà du choix collectif",
        body: "Tu peux aussi utiliser moomz pour évaluer la compréhension : poser une question type quiz (\"laquelle de ces phrases est correcte ?\"), les élèves votent en anonyme, tu vois en live le % de bonnes réponses. C'est un outil de formative assessment plus engageant qu'un QCM papier.",
      },
      {
        h: "Limites et précautions",
        body: "Pas de données perso collectées — moomz est conforme au RGPD pour ce type d'usage (aucun nom, aucun email). Mais vérifie la politique de ton école : certaines préfèrent que les outils utilisés en classe soient pré-validés. Pour info, moomz est en open access, anonyme, ne stocke pas d'IP — c'est généralement compatible avec les chartes éducation nationale.",
      },
    ],
    polls: [
      { q: "Nom de la mascotte de la classe ?", options: ["Choco", "Pixel", "Tornade", "Croquette"] },
      { q: "Sortie scolaire en mai ?", options: ["Zoo", "Musée", "Parc nature", "Cinéma"] },
      { q: "Livre du mois en classe ?", options: ["Le Petit Nicolas", "Charlie", "Tom-Tom et Nana", "Roald Dahl"] },
      { q: "Thème du spectacle de fin d'année ?", options: ["Cirque", "Espace", "Jungle", "Histoire de France"] },
      { q: "Activité du vendredi aprem ?", options: ["Atelier dessin", "Jeu collectif", "Lecture", "Sport"] },
      { q: "Animal préféré (sondage débat) ?", options: ["Chien", "Chat", "Cheval", "Lion"] },
      { q: "Nom du futur poisson rouge ?", options: ["Bubulle", "Nemo", "Goldie", "Patate"] },
      { q: "Couleur du t-shirt de classe ?", options: ["Rouge", "Bleu", "Vert", "Jaune"] },
      { q: "Sport collectif préféré ?", options: ["Foot", "Hand", "Basket", "Course"] },
      { q: "Dessert de la cantine préféré ?", options: ["Yaourt", "Compote", "Fruit", "Gâteau"] },
    ],
    faq: [
      {
        q: "C'est gratuit pour les profs ?",
        a: "Oui, totalement gratuit. Pas de version Premium nécessaire pour l'usage en classe.",
      },
      {
        q: "Les élèves doivent-ils avoir un compte ?",
        a: "Non. Aucune inscription, aucune adresse email. L'élève ouvre le lien, vote, c'est fini.",
      },
      {
        q: "Les votes sont-ils anonymes ?",
        a: "Oui. Même toi en tant que prof, tu ne vois pas qui a voté quoi — seulement les pourcentages. C'est rassurant pour les élèves timides.",
      },
      {
        q: "Comment l'intégrer à mon TBI ?",
        a: "Affiche la page du sondage moomz en plein écran sur le TBI. Tu verras les résultats se mettre à jour en live quand les élèves voteront.",
      },
    ],
    related: ["enfants", "famille", "ado", "lycee"],
    updatedAt: today,
  },
  {
    slug: "travail-collegues",
    locale: "fr",
    category: "idees",
    emoji: "💼",
    title: "Sondage entre collègues : 30 idées pour le bureau et le télétravail",
    h1: "Sondages collègues : pour le bureau, Slack et le télétravail",
    description:
      "30 sondages pour collègues : choix du resto, lieu du séminaire, débat café/thé. Plus la méthode pour faire voter via Slack ou Teams.",
    intro:
      "Au bureau, prendre une décision à 8 collègues qui ont 8 avis différents prend une heure et finit en \"on verra demain\". Sondage moomz dans le canal Slack ou Teams, 10 minutes plus tard tu as la réponse. Bonus : ça brise la glace, surtout en télétravail où les pauses café n'existent pas.",
    sections: [
      {
        h: "Sondages décision : restau, séminaire, déco bureau",
        body: "Pour le resto du vendredi midi, le lieu du séminaire annuel, la déco du bureau, le choix de la machine à café — sondage moomz, 4 options, 24h max. Plus de \"je propose…\" qui se perd dans Slack. Le résultat sort, l'orga prend en charge.",
      },
      {
        h: "Sondages culture d'entreprise",
        body: "Lance des sondages \"perso\" pour mieux connaître ses collègues sans tomber dans les questions trop intimes : meilleur film de l'année, meilleur podcast, équipe de foot suivie, ville rêvée pour habiter. C'est le ice-breaker qui marche en télétravail.",
      },
      {
        h: "Sondages feedback (avec anonymat)",
        body: "Le sondage moomz anonyme est précieux pour la culture d'équipe : \"vous trouvez les réunions trop longues ?\", \"le télétravail 3j/sem est-il bien ?\", \"le café du bureau, à changer ?\". Tu obtiens la vérité au lieu du politiquement correct des feedbacks en face à face.",
      },
      {
        h: "Sondages team building",
        body: "Pour préparer un team building, lance 4 sondages : activité (escape, sport, gastro, créatif), durée (demi-journée, journée, week-end), budget par personne, lieu. Tout le monde participe à la décision, pas juste les RH. Engagement boosté avant même l'event.",
      },
    ],
    polls: [
      { q: "Resto vendredi midi ?", options: ["Italien", "Japonais", "Brasserie", "Burger"] },
      { q: "Lieu du séminaire annuel ?", options: ["Normandie", "Sud", "Étranger", "Ici"] },
      { q: "Le télétravail 3j/sem est ok ?", options: ["Oui parfait", "Plus", "Moins", "100% bureau"] },
      { q: "Réunions trop longues ?", options: ["Oui clairement", "Bof", "Non c'est ok"] },
      { q: "Café à changer ?", options: ["Oui changeons", "Non c'est ok", "On installe une vraie machine"] },
      { q: "Activité team building ?", options: ["Escape game", "Cours cuisine", "Sport collectif", "Bar à cocktails"] },
      { q: "Pause café virtuelle hebdo ?", options: ["Oui", "Non on a déjà trop d'écran", "Que le vendredi"] },
      { q: "Heure de la réu hebdo ?", options: ["9h", "10h", "11h", "Après-midi"] },
      { q: "Outil de gestion projet ?", options: ["Notion", "Asana", "Linear", "On garde Excel"] },
      { q: "Pot départ : où ?", options: ["Au bureau", "Bar à côté", "Resto", "Pas de pot"] },
    ],
    faq: [
      {
        q: "Comment partager le sondage dans Slack ?",
        a: "Colle le lien moomz dans le canal. Slack affiche un preview riche, les collègues cliquent et votent.",
      },
      {
        q: "Et dans Microsoft Teams ?",
        a: "Idem — colle le lien dans le chat ou un canal Teams. Le preview s'affiche, vote en un clic.",
      },
      {
        q: "Le RH peut-il voir qui a voté quoi ?",
        a: "Non. C'est 100% anonyme, même côté créateur du sondage. C'est ce qui en fait un bon outil de feedback honnête.",
      },
      {
        q: "Quels sondages éviter au bureau ?",
        a: "Évite les sondages politiques (qui votent quoi) et religion. Sécurité psychologique = sondages neutres ou positifs.",
      },
    ],
    related: ["team-building", "startup-brainstorm", "famille", "anniversaire"],
    updatedAt: today,
  },
  {
    slug: "team-building",
    locale: "fr",
    category: "idees",
    emoji: "🤝",
    title: "Sondage team building : 25 idées pour engager l'équipe avant et pendant",
    h1: "Sondages team building : engager l'équipe avant et pendant",
    description:
      "25 sondages pour organiser un team building et l'animer : choix d'activité, ice-breaker, défis. Pour équipes de 5 à 200.",
    intro:
      "Un team building qui marche, c'est un team building où les gens se sont sentis impliqués. Le sondage moomz est l'outil parfait : avant l'event, tu sondes les préférences (activité, dates, lieu). Pendant, tu lances des sondages animation (ice-breakers, défis, élections). Après, tu collectes le feedback. Pas besoin d'app dédiée, juste un lien.",
    sections: [
      {
        h: "Phase 1 : préparer le team building",
        body: "Lance 4 sondages successifs (un par semaine) : (1) type d'activité, (2) date, (3) lieu, (4) budget. À chaque étape, ferme avec la majorité. L'équipe se sent décisionnaire, l'engagement monte avant même l'event.",
      },
      {
        h: "Phase 2 : ice-breakers en début d'event",
        body: "À l'ouverture, lance 3 sondages quiz drôles : \"qui parle le plus en réunion ?\", \"qui arrive toujours en avance ?\", \"qui ramène les meilleurs gâteaux ?\". Anonyme, drôle, ça lance la dynamique. Les options sont les prénoms de l'équipe (à 8-15 personnes).",
      },
      {
        h: "Phase 3 : sondages \"équipe\" pour faire émerger une décision",
        body: "Pendant l'atelier, un sondage \"quelle valeur représente le mieux notre équipe ?\" avec 4 options (collaboration, innovation, exigence, bienveillance). Anonyme. Le résultat sert de point de départ pour la discussion suivante. Tu cadres sans imposer.",
      },
      {
        h: "Phase 4 : feedback post-event",
        body: "À la fin, sondage \"meilleure activité de la journée ?\" et \"on refait quand ?\". 24h après, sondage \"score du team building sur 5\" — anonyme, honnête. C'est de l'amélioration continue concrète, pas du feedback noyé dans un Google Form jamais ouvert.",
      },
    ],
    polls: [
      { q: "Activité team building préférée ?", options: ["Escape game", "Cours cuisine", "Sport collectif", "Bar à cocktails", "Atelier créatif"] },
      { q: "Date du prochain ?", options: ["Vendredi 5", "Vendredi 12", "Samedi 13", "Plus tard"] },
      { q: "Lieu ?", options: ["Paris intra", "Banlieue", "Province week-end", "Pas de déplacement"] },
      { q: "Qui parle le plus en réunion ?", options: ["Léa", "Lucas", "Théo", "Personne identifiable"] },
      { q: "Valeur représentant le mieux l'équipe ?", options: ["Collaboration", "Innovation", "Exigence", "Bienveillance"] },
      { q: "Score du team building ?", options: ["5/5", "4/5", "3/5", "Moins"] },
      { q: "On refait quand ?", options: ["Dans 3 mois", "Dans 6 mois", "Annuel", "Jamais"] },
      { q: "Meilleur moment de l'année ?", options: ["Séminaire", "Pot de Noël", "Soirée d'été", "Aucun"] },
      { q: "Ambiance d'équipe ?", options: ["Top", "Bonne", "Moyenne", "À améliorer"] },
      { q: "On préfère :", options: ["Activité physique", "Atelier créatif", "Repas en commun", "Soirée"] },
    ],
    faq: [
      {
        q: "Combien de personnes max ?",
        a: "Aucune limite. À 5 ou à 200 personnes, ça fonctionne.",
      },
      {
        q: "Le feedback anonyme est-il vraiment anonyme ?",
        a: "Oui. Aucune adresse mail, aucun compte. Les votes sont stockés sans identifier le votant. Même l'organisateur ne voit que les pourcentages.",
      },
      {
        q: "Comment éviter que les juniors n'osent pas voter contre l'avis du boss ?",
        a: "L'anonymat est ta meilleure protection. Insiste dessus : \"ce sondage est totalement anonyme, votez vraiment honnêtement\". Et ne demande pas à voter en plénière, demande de voter dans la pause.",
      },
      {
        q: "Et si l'équipe est distribuée ?",
        a: "Parfait — partage le lien moomz dans Slack ou Teams. Le sondage fonctionne sur tous les fuseaux, en asynchrone si besoin.",
      },
    ],
    related: ["travail-collegues", "startup-brainstorm", "soiree", "voyage"],
    updatedAt: today,
  },
  {
    slug: "startup-brainstorm",
    locale: "fr",
    category: "idees",
    emoji: "🚀",
    title: "Sondage startup brainstorm : 25 idées pour le produit, la marque, l'équipe",
    h1: "Sondages startup : décider vite en brainstorm produit, marque, équipe",
    description:
      "25 sondages pour startups : nommer le produit, choisir un logo, prioriser la roadmap, élire un délégué. Trancher en équipe en 10 min.",
    intro:
      "En startup, on aime débattre, et on déteste trancher. Sondage moomz règle ce paradoxe : tu rassembles 6 options, l'équipe vote pendant la réunion, la majorité décide. Plus de réunion qui se prolonge sans conclusion. Voici les usages qui marchent vraiment en startup.",
    sections: [
      {
        h: "Sondage produit : nommer une fonctionnalité",
        body: "Tu hésites entre 4 noms pour ta nouvelle fonctionnalité ? Lance un sondage moomz dans le canal #product de Slack, ferme à 24h. La majorité gagne. Tu peux même l'envoyer à des utilisateurs early-access pour avoir leur opinion : copie le lien dans un email ou DM Twitter.",
      },
      {
        h: "Sondage marque : choisir un logo, une couleur, un slogan",
        body: "Pour les choix marketing, le sondage moomz remplace le débat infini. 4 logos en options. 4 slogans. 3 couleurs. Vote rapide, décision tranchée. Bonus : partage le sondage au-delà de l'équipe (clients, investisseurs, communauté Discord) pour avoir un signal externe.",
      },
      {
        h: "Sondage roadmap : prioriser les fonctionnalités",
        body: "À chaque trimestre, lance un sondage \"sur quoi on bosse en priorité ?\" avec 4-5 options de features. Partage avec l'équipe, les early users, les investisseurs. Tu obtiens un signal de demande, et tu cadres la roadmap avec un argument démocratique.",
      },
      {
        h: "Sondage culture : élire le lead, valider une règle",
        body: "Élire un référent technique, choisir le mode de télétravail, valider un changement d'outil — sondage moomz anonyme. L'équipe vote, le résultat fait foi. Pas de tension hiérarchique, pas de pression sociale dans le vote.",
      },
    ],
    polls: [
      { q: "Nom de la nouvelle feature ?", options: ["Boost", "Magic", "Loop", "Spark"] },
      { q: "Couleur de la marque ?", options: ["Bleu", "Vert", "Violet", "Rose"] },
      { q: "Slogan ?", options: ["Build faster", "Ship daily", "Move fast", "Stay simple"] },
      { q: "Priorité Q3 ?", options: ["Mobile app", "Intégrations", "Onboarding", "Pricing"] },
      { q: "Mode télétravail ?", options: ["Full remote", "3j télé / 2j bureau", "Hybride libre", "Full bureau"] },
      { q: "Outil de gestion ?", options: ["Notion", "Linear", "Asana", "On reste sur Slack"] },
      { q: "Investir dans le SEO ?", options: ["Oui c'est priorité 1", "Plus tard", "Non on focus produit"] },
      { q: "Recrutement prioritaire ?", options: ["Dev senior", "Designer", "Sales", "Customer support"] },
      { q: "On lève une série A ?", options: ["Oui dans 6 mois", "Dans 12 mois", "Pas de levée"] },
      { q: "Bonus de fin d'année ?", options: ["Cash", "Voyage équipe", "Stock-options", "Aucun"] },
    ],
    faq: [
      {
        q: "On partage avec des investisseurs ?",
        a: "Oui — le lien moomz est public mais discret. Tu peux le copier dans un email, un DM ou un Notion partagé. Les investisseurs voient le résultat aggrégé en temps réel.",
      },
      {
        q: "Et avec des utilisateurs externes ?",
        a: "Parfait — partage dans ta communauté Discord, en newsletter, ou DM. Tu collectes un signal externe sans setup formulaire.",
      },
      {
        q: "Le résultat est-il fiable ?",
        a: "Oui pour un signal directionnel. Pas pour des conclusions statistiques (échantillon non représentatif). Idéal pour trancher en interne ou collecter un vibe utilisateur.",
      },
      {
        q: "On peut exporter les résultats ?",
        a: "Pas encore — c'est sur la roadmap. Pour l'instant tu screen le résultat ou notes les chiffres.",
      },
    ],
    related: ["travail-collegues", "team-building", "discord", "famille"],
    updatedAt: today,
  },
  {
    slug: "drole",
    locale: "fr",
    category: "idees",
    emoji: "😂",
    title: "Sondage drôle : 50 idées qui font rire",
    h1: "Sondages drôles : 50 idées qui font rire le groupe",
    description:
      "50 sondages drôles à dégainer en soirée, en story Insta ou dans le groupe Snap. Absurde, débat, opinion impopulaire.",
    intro:
      "Le sondage drôle, c'est l'art de poser une question absurde avec un sérieux feint. Plus la question est inutile, plus le débat est intense. Voici 50 idées rangées par sous-genre : absurde, débat débile, opinion impopulaire, classement amis, hypothétique. À utiliser sans modération en soirée ou en story.",
    sections: [
      {
        h: "Sondage absurde : la base",
        body: "Le sondage absurde demande quelque chose dont la réponse n'a aucune importance, mais qui mobilise tout le monde. Exemple : \"si tu étais une pâte, tu serais ?\", \"l'eau au goût de jambon, oui ou non ?\". Le sérieux du format contre le ridicule de la question = comique parfait.",
      },
      {
        h: "Sondage débat débile",
        body: "Il y a des débats qui durent depuis 2000 ans : ananas-pizza, coriandre, eau dans le lavabo après la vaisselle. Sondage moomz tranche définitivement (jusqu'à la prochaine soirée). Bonus : lance \"pour ou contre\" sur 10 sujets à la chaîne, c'est un quiz de personnalité déguisé.",
      },
      {
        h: "Sondage opinion impopulaire",
        body: "\"Qui mange une banane à la fourchette ?\", \"qui éteint la lumière en sortant des toilettes pendant qu'il/elle pisse ?\". Les sondages opinions impopulaires révèlent les pratiques honteuses du groupe. Anonyme, donc on ose. Effet de surprise garanti quand les % tombent.",
      },
      {
        h: "Sondage classement amis (drôle)",
        body: "Plutôt que les classements méchants (\"qui est le plus relou\"), va sur le drôle : \"qui finirait en prison en premier ?\", \"qui ouvrirait une secte ?\", \"qui changerait de prénom à 30 ans ?\". Les votes deviennent prédictifs. À ressortir 10 ans plus tard pour comparer.",
      },
    ],
    polls: [
      { q: "L'ananas sur la pizza ?", options: ["Oui", "Jamais", "Bof"] },
      { q: "Tu manges la croûte de la pizza ?", options: ["Oui", "Non je laisse", "Ça dépend"] },
      { q: "Sel ou sucre sur la tomate ?", options: ["Sel", "Sucre", "Vinaigrette", "Rien"] },
      { q: "Tu pisses dans la douche ?", options: ["Oui assumé", "Jamais", "En vacances seulement"] },
      { q: "Qui ouvrirait une secte ?", options: ["Lucas", "Théo", "Sarah", "Moi"] },
      { q: "Qui irait en prison en premier ?", options: ["Théo", "Léa", "Lucas", "Moi pour pas voler la place"] },
      { q: "Si tu étais une pâte, tu serais ?", options: ["Penne", "Tagliatelle", "Lasagne", "Spaghetti"] },
      { q: "Qui changerait de prénom à 30 ans ?", options: ["Sarah", "Camille", "Lucas", "Personne"] },
      { q: "L'eau du robinet ou en bouteille ?", options: ["Robinet", "Bouteille", "Filtre", "Coca"] },
      { q: "La coriandre, ça a goût de :", options: ["Savon", "Coriandre", "Délice", "Bof"] },
    ],
    faq: [
      {
        q: "Comment savoir si un sondage va marcher ?",
        a: "Plus la réponse t'engage personnellement (sans risque), plus ça marche. Évite les questions vraiment trop perso (sex, argent) en groupe mixte.",
      },
      {
        q: "Combien de sondages drôles dans une soirée ?",
        a: "5-8 max. Au-delà, ça devient un quiz, plus une conversation.",
      },
      {
        q: "Mes potes vont me suivre ?",
        a: "Si tu commences par 2-3 sondages drôles dans un groupe WhatsApp, les autres vont s'y mettre. C'est viral à l'échelle d'un groupe.",
      },
      {
        q: "À mettre en story Insta ?",
        a: "Carrément. Le format \"sondage absurde\" est un des plus performants en story (boost le taux de réponse).",
      },
    ],
    related: ["soiree", "ami-amie", "this-or-that", "would-you-rather"],
    updatedAt: today,
  },
  {
    slug: "rebelle",
    locale: "fr",
    category: "idees",
    emoji: "🌶️",
    title: "Sondage controversé : 40 opinions impopulaires à tester",
    h1: "Sondages controversés : 40 opinions impopulaires à tester",
    description:
      "40 sondages d'opinions impopulaires : food, vie quotidienne, société. Teste si tu es vraiment seul à penser ça.",
    intro:
      "Tu as une opinion que tu juges \"évidente\" mais que personne autour de toi n'a. Sondage moomz pour vérifier. La plupart du temps, tu découvres que tu n'es pas seul — c'est juste que les autres se taisent par peur du jugement. Le sondage anonyme révèle la vraie majorité, pas celle qui parle fort. Voici 40 opinions à tester.",
    sections: [
      {
        h: "Pourquoi tester les opinions impopulaires",
        body: "Les conversations IRL sont biaisées par la spirale du silence : si tu penses quelque chose de différent du groupe vocal, tu te tais. Résultat : tu crois être seul. Le sondage anonyme casse ce biais. 60% du groupe peut penser pareil que toi sans qu'aucun ne l'ait jamais dit. C'est une révélation à chaque sondage.",
      },
      {
        h: "Sondages food impopulaires",
        body: "L'ananas sur la pizza, ok c'est usé. Va plus loin : \"la croûte du pain reste meilleure que la mie\", \"la salade César est surcôtée\", \"le McDo est meilleur que Burger King\". Les amateurs de food ont des opinions tranchées et le sondage révèle des clivages inattendus.",
      },
      {
        h: "Sondages vie quotidienne",
        body: "Les pratiques honteuses ou les opinions sur la vie quotidienne : \"on remet la couette sur soi le matin ou on aère ?\", \"on fait son lit chaque matin ?\", \"la douche le soir vs le matin, le verdict\". Ça parle à tout le monde, ça crée du débat sans risque.",
      },
      {
        h: "Sondages société (modérés)",
        body: "Tu peux pousser sur les sujets de société, à condition de rester sur des opinions et pas des stigmatisations. \"Travailler 4j/sem vs 5j même salaire\", \"voyage long ou plusieurs courts\", \"vivre en ville ou à la campagne\". Tu obtiens un signal d'air du temps.",
      },
    ],
    polls: [
      { q: "L'ananas sur la pizza ?", options: ["Oui carrément", "Jamais", "Bof"] },
      { q: "Salade César : surcôtée ?", options: ["Oui", "Non c'est top", "Jamais goûté"] },
      { q: "McDo vs Burger King ?", options: ["McDo", "BK", "Aucun", "KFC > les deux"] },
      { q: "Faire son lit chaque matin ?", options: ["Oui", "Jamais", "Que le week-end"] },
      { q: "Douche matin ou soir ?", options: ["Matin", "Soir", "Les deux", "Quand j'ai envie"] },
      { q: "Couette bordée ou en boule ?", options: ["Bordée", "En boule", "Pas faite"] },
      { q: "4j/sem même salaire : oui ou non ?", options: ["Oui carrément", "Non productivité", "Selon les jobs"] },
      { q: "Voyage long ou plusieurs courts ?", options: ["1 long voyage", "Plusieurs courts", "Pas de voyage"] },
      { q: "Vivre en ville ou campagne ?", options: ["Ville", "Campagne", "Banlieue", "Étranger"] },
      { q: "Réveil sonne, snooze ?", options: ["Jamais", "1 fois", "3+ fois", "Pas de réveil"] },
    ],
    faq: [
      {
        q: "Comment partager sans choquer ?",
        a: "Pose-le comme un jeu : \"on teste qui dans le groupe est cassanos\". L'anonymat règle le reste — personne ne juge personne directement.",
      },
      {
        q: "Et si je découvre que ma famille pense différemment ?",
        a: "Bienvenue dans la vie réelle. Le sondage révèle la diversité d'opinion, ça génère du dialogue.",
      },
      {
        q: "Y a-t-il des limites ?",
        a: "Oui — modération moomz refuse les sondages qui visent à insulter une personne ou un groupe ethnique. Pour le reste, les opinions sont libres.",
      },
      {
        q: "Les statistiques moomz révèlent-elles des tendances ?",
        a: "Pour les sondages à fort volume (centaines de votes), oui, ça devient un mini-indicateur. On a vu des sondages \"4j travaillés\" à 78% pour, par exemple.",
      },
    ],
    related: ["debat", "drole", "drama", "this-or-that"],
    updatedAt: today,
  },
  {
    slug: "drama",
    locale: "fr",
    category: "idees",
    emoji: "🍿",
    title: "Sondage drama : 30 idées pour les ferme du buzz et débats TikTok",
    h1: "Sondages drama : pour ferme du buzz et débats TikTok",
    description:
      "30 sondages drama style ferme du buzz : situations de couple, amitié, drama lycéen. Pour faire débattre en story ou TikTok.",
    intro:
      "Le drama, c'est le format qui buzz sur TikTok et Instagram. Tu pose une situation morale ambiguë (\"il a ghosté son ex et 2 mois après il la recontacte\"), tu mets 3 options de jugement, et tu laisses la communauté trancher. C'est l'équivalent moderne du tribunal populaire. Voici 30 sondages qui marchent.",
    sections: [
      {
        h: "Le format ferme du buzz décrypté",
        body: "Le sondage drama suit toujours la même structure : (1) situation racontée brièvement (2-3 phrases max), (2) question morale (\"qui a tort ?\"), (3) 3 options de verdict. Plus la situation est ambiguë, plus le débat dure. Évite les situations clairement noir/blanc — c'est l'incertitude qui fait voter.",
      },
      {
        h: "Sondages drama couple",
        body: "Les situations de couple sont le terrain favori : ghosting, ex qui revient, infidélité douteuse, copine qui sort sans lui dire. À nuancer : invente une situation générique, pas une vraie histoire d'un proche (risque de fuite).",
      },
      {
        h: "Sondages drama amitié",
        body: "\"Sa pote sort avec son ex, c'est ok ?\", \"elle doit la prévenir si elle sait que son mec la trompe ?\", \"il peut pas venir à l'anniv parce qu'il a invité son ex sans la prévenir\". Les sondages amitié génèrent autant de débat que les sondages couple, avec moins de jugement perso.",
      },
      {
        h: "Sondages drama lycéen/ado",
        body: "Pour la cible ado : drama de classe, prof qui exagère, élève qui ramène la mère pour défendre son cas, copine qui rapporte au prof. Reste sur les comportements, pas les noms. Moomz peut être un outil d'apprentissage de la nuance morale.",
      },
    ],
    polls: [
      { q: "Il a ghosté 2 mois, recontacte. On répond ?", options: ["Oui", "Non bloqué", "On répond pour qu'il s'excuse"] },
      { q: "Sa pote sort avec son ex. Trahison ?", options: ["Carrément", "Non c'est sa vie", "Selon la durée"] },
      { q: "Elle a vu le mec de sa pote sur Tinder. Elle dit ?", options: ["Oui direct", "Non pas son rôle", "Screen et attendre"] },
      { q: "Anniv sans lui prévenir qu'il y aura l'ex ?", options: ["Inadmissible", "Pas grave", "Si l'ex est ok pour lui aussi"] },
      { q: "Couple qui se sépare et un des deux refuse le contact des potes communs ?", options: ["Légitime", "Drama", "Chacun ses potes"] },
      { q: "Prof qui exagère sur les retenues ?", options: ["Plaignez-vous", "C'est son droit", "Selon le motif"] },
      { q: "Pote qui sort sans inviter le groupe ?", options: ["Trahison", "C'est son droit", "Selon avec qui"] },
      { q: "Voler le mec de sa BFF, possible ?", options: ["Jamais", "Si elle est plus avec lui", "Si vrai amour"] },
      { q: "Pote qui parle dans le dos. Confrontation ?", options: ["Direct", "On fait semblant", "On coupe le contact"] },
      { q: "Aller à un mariage sans plus one ?", options: ["Cool", "Stress", "Si je connais 5 personnes"] },
    ],
    faq: [
      {
        q: "Le drama est-il sain ?",
        a: "Sondage drama anonyme = construction d'argumentation morale, c'est plutôt sain. Drama avec nom et insulte = harcèlement, modération moomz le retire.",
      },
      {
        q: "Mes followers vont voter ?",
        a: "Oui — le format drama est un des plus engageants. Sur TikTok / Insta, il génère 3x plus d'interactions que les sondages classiques.",
      },
      {
        q: "C'est légal ?",
        a: "Tant que tu n'utilises pas de vrais noms et que la situation n'est pas une diffamation, oui. Reste sur des cas hypothétiques.",
      },
      {
        q: "Comment maximiser le débat ?",
        a: "Garde 3 options (pas 2), avec une médiane qui force à nuancer. Le sondage \"oui / non\" est moins bavard que \"oui / non / ça dépend\".",
      },
    ],
    related: ["tiktok", "ferme-du-buzz", "couple", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "debat",
    locale: "fr",
    category: "idees",
    emoji: "🗣️",
    title: "Sondage de débat : 30 idées pour lancer la discussion",
    h1: "Sondages débat : 30 idées pour discuter avec ses potes",
    description:
      "30 sondages de débat : société, philo, lifestyle, choix de vie. Pour ouvrir une vraie conversation en soirée ou en groupe.",
    intro:
      "Quand tu veux ouvrir une vraie discussion en groupe — pas juste rigoler — le sondage débat est l'outil. Tu poses une question avec 3-4 options qui forcent à se positionner, et le débat suit pendant 30 minutes. Voici 30 sondages testés en soirée, en cercle de lecture, et en pause-café au boulot.",
    sections: [
      {
        h: "Sondages choix de vie",
        body: "\"Travailler beaucoup à 25 ans pour profiter à 35 ou inverser ?\", \"avoir des enfants tôt ou tard ?\", \"acheter ou louer ?\". Ces questions structurent la vie de chacun, et le débat dure des heures parce qu'il n'y a pas de bonne réponse. Le sondage donne un signal de \"tendance du groupe\", pas une réponse.",
      },
      {
        h: "Sondages philo (light)",
        body: "\"Le bonheur est-il choisi ou subi ?\", \"on doit aimer son métier ou juste être bon dedans ?\". Style philo terminale, mais formulé court et clivant. Lance ça dans un groupe d'amis cultivés, le débat tourne pendant 2 heures.",
      },
      {
        h: "Sondages société",
        body: "\"On taxe les ultra-riches plus ou pas ?\", \"l'IA va remplacer 30% des jobs en 10 ans ?\", \"la semaine de 4 jours, généralisée ?\". À utiliser dans un groupe assez politisé pour éviter le malaise. Et toujours en mode débat, pas en mode interro.",
      },
      {
        h: "Sondages lifestyle",
        body: "\"Tu changes de ville avant 30 ans ?\", \"voyage long ou plusieurs courts ?\", \"vivre seul vs coloc vs couple\". Plus accessible que la philo, mais tout aussi structurant. Idéal en soirée mixte tous niveaux.",
      },
    ],
    polls: [
      { q: "Travailler beaucoup tôt ou tard ?", options: ["Tôt pour profiter à 35", "Inverser", "Équilibrer", "Aucun, on s'adapte"] },
      { q: "Enfants tôt ou tard ?", options: ["Avant 28", "28-32", "Après 32", "Pas d'enfants"] },
      { q: "Acheter ou louer ?", options: ["Acheter", "Louer", "Investir locatif", "Hériter"] },
      { q: "Bonheur choisi ou subi ?", options: ["Choisi", "Subi", "Les deux"] },
      { q: "L'IA va remplacer 30% des jobs en 10 ans ?", options: ["Oui", "Non", "Plus", "Moins"] },
      { q: "Semaine 4 jours généralisée ?", options: ["Oui", "Non", "Pour certains métiers"] },
      { q: "Changer de ville avant 30 ans ?", options: ["Oui", "Non", "À l'étranger oui"] },
      { q: "Voyage 1 long ou plusieurs courts ?", options: ["1 long", "Plusieurs courts", "Aucun"] },
      { q: "Couple, coloc ou solo ?", options: ["Couple", "Coloc", "Solo", "Famille"] },
      { q: "Réseaux sociaux : on s'arrête ?", options: ["Oui se déconnecter", "Garder", "Réduire"] },
    ],
    faq: [
      {
        q: "Comment éviter que ça parte en clash ?",
        a: "Cadre dès le départ : c'est un sondage anonyme pour ouvrir le débat, pas pour avoir raison. Et garde 3-4 options qui nuancent.",
      },
      {
        q: "Sondages politique en famille ?",
        a: "Risqué. Le débat politique en famille tourne souvent mal. Préfère les sujets sociétaux indirects (semaine 4j, IA, environnement).",
      },
      {
        q: "Comment relancer après le sondage ?",
        a: "\"Pourquoi tu as voté ça ?\". La question ouverte sur le motif relance la conversation pour 30 min minimum.",
      },
      {
        q: "À utiliser au boulot ?",
        a: "Pour les sondages lifestyle ou philo light, oui. Pour le politique, évite — risque de tension de bureau.",
      },
    ],
    related: ["rebelle", "drole", "would-you-rather", "drama"],
    updatedAt: today,
  },
  {
    slug: "this-or-that",
    locale: "fr",
    category: "idees",
    emoji: "↔️",
    title: "This or that : 100 questions en français",
    h1: "This or that : 100 questions de sondage en français",
    description:
      "100 questions \"this or that\" en français pour quiz Insta, soirée et premier date. Le générateur préféré de la Gen Z.",
    intro:
      "This or that, c'est le format de sondage le plus simple et le plus efficace : deux options, on tape, c'est fini. Tu en enchaînes 5-10 et tu as un quiz de personnalité instantané. Format star sur Instagram Story, Snap, et premier date. Voici 100 idées rangées par thème.",
    sections: [
      {
        h: "Pourquoi le format \"this or that\" cartonne",
        body: "Le cerveau aime la décision binaire : pas d'hésitation, pas de fatigue de choix. Tu choisis en 0.3 secondes, tu passes à la suivante. Sur Insta Story, c'est le format qui a le meilleur taux de réponse (60-80%). Au premier date, c'est le ice-breaker le plus utilisé en 2026.",
      },
      {
        h: "Comment l'utiliser sur moomz",
        body: "Crée un sondage moomz avec exactement 2 options. C'est le mode \"this or that\". Plus de 2 options = c'est plus un \"this or that\", c'est un sondage classique. Pour faire un quiz this or that complet, crée 5-10 sondages séparés et partage chaque lien en story.",
      },
      {
        h: "Le quiz this or that en série",
        body: "L'astuce : lance 5 sondages d'affilée en story Insta avec le sticker \"vote\" natif puis bascule sur moomz pour les 5 suivants si tu veux des options plus variées. Tes followers swipent, votent, te DM leurs résultats. Engagement record.",
      },
      {
        h: "This or that au premier date",
        body: "10 questions \"this or that\" en début de date = jeu d'icebreaker parfait. Pas de pression, ça se joue tour à tour, ça révèle des goûts. Conseil : commence soft (café/thé), monte en spécificité (chien/chat, mer/montagne), évite les sujets sensibles au 1er date.",
      },
    ],
    polls: [
      { q: "Café ou thé ?", options: ["Café", "Thé"] },
      { q: "Chien ou chat ?", options: ["Chien", "Chat"] },
      { q: "Mer ou montagne ?", options: ["Mer", "Montagne"] },
      { q: "Jour ou nuit ?", options: ["Jour", "Nuit"] },
      { q: "Pizza ou burger ?", options: ["Pizza", "Burger"] },
      { q: "Doux ou salé ?", options: ["Sucré", "Salé"] },
      { q: "Action ou comédie ?", options: ["Action", "Comédie"] },
      { q: "iPhone ou Android ?", options: ["iPhone", "Android"] },
      { q: "Soirée chill ou clubbing ?", options: ["Chill", "Club"] },
      { q: "Été ou hiver ?", options: ["Été", "Hiver"] },
    ],
    faq: [
      {
        q: "Combien de questions dans un quiz this or that ?",
        a: "10 à 20 max. Au-delà ton public décroche.",
      },
      {
        q: "On peut mettre 3 options ?",
        a: "Non — sinon ce n'est plus du this or that. Reste sur 2 strict. Pour 3+ options, fais un sondage classique sur moomz.",
      },
      {
        q: "C'est plus rapide qu'un quiz Insta natif ?",
        a: "Insta a un sticker natif this or that (limité à 2 réponses, sans % visible). Sur moomz tu vois les % en live. Choisis selon ton besoin.",
      },
      {
        q: "Idées pour couple ?",
        a: "Toutes les questions de profil : café/thé, série/film, chill/sortir, etc. Voir notre page sondage couple pour 50 idées.",
      },
    ],
    related: ["would-you-rather", "couple", "premier-rendez-vous", "instagram-story"],
    updatedAt: today,
  },
  {
    slug: "would-you-rather",
    locale: "fr",
    category: "idees",
    emoji: "🤔",
    title: "Tu préfères quoi : 100 questions would you rather en français",
    h1: "Tu préfères quoi : 100 questions \"would you rather\" en français",
    description:
      "100 questions \"tu préfères\" en français : drôle, philo, dilemme, hypothétique. Pour quiz soirée, couple, premier date.",
    intro:
      "Tu préfères quoi (would you rather) c'est le format où chaque option est un mini-cauchemar ou un mini-rêve, et tu dois choisir. C'est le générateur de débat ultime en soirée. Voici 100 questions rangées par niveau d'intensité, plus la méthode pour les utiliser sans tomber dans le malaise.",
    sections: [
      {
        h: "Le format would you rather",
        body: "Tu poses : \"tu préfères X ou Y ?\". X et Y sont les deux options. Plus elles sont radicales, plus le débat est intense. Le pic du format, c'est quand les deux options sont aussi mauvaises (ou aussi attractives). C'est là que tu vois les vraies préférences.",
      },
      {
        h: "Niveau 1 : would you rather drôle",
        body: "Soft, en groupe sans risque : \"voler ou être invisible ?\", \"connaître le futur ou changer le passé ?\". Le débat dure 10 minutes, c'est l'icebreaker parfait pour début de soirée ou de réunion.",
      },
      {
        h: "Niveau 2 : would you rather dilemme",
        body: "Vrais dilemmes : \"perdre ton tel pendant 1 an ou ton chien ?\", \"changer de prénom ou de nom ?\", \"vivre 50 ans avec une dette ou jamais voyager ?\". Là, ça se met à parler de valeurs perso. Convient à un groupe d'amis qui se connaît bien.",
      },
      {
        h: "Niveau 3 : would you rather couple",
        body: "Avec ton/ta partenaire en intimité : \"savoir tout sur mon passé ou rien ?\", \"vivre à Paris pas d'argent ou Roubaix bcp ?\". Tu as un échange profond sans avoir à poser la question frontale.",
      },
    ],
    polls: [
      { q: "Voler ou être invisible ?", options: ["Voler", "Invisible"] },
      { q: "Connaître le futur ou changer le passé ?", options: ["Futur", "Passé"] },
      { q: "Perdre tel 1 an ou chien 1 mois ?", options: ["Tel", "Chien"] },
      { q: "Changer prénom ou nom ?", options: ["Prénom", "Nom"] },
      { q: "Paris pas d'argent ou Roubaix bcp ?", options: ["Paris pauvre", "Roubaix riche"] },
      { q: "Vivre 50 ans très riche puis pauvre, ou riche/pauvre alterné ?", options: ["50 ans riche puis pauvre", "Alternance"] },
      { q: "Tout savoir sur l'ex ou rien ?", options: ["Tout savoir", "Rien savoir"] },
      { q: "Lire les pensées ou téléporter ?", options: ["Lire pensées", "Téléporter"] },
      { q: "Manger pizza ts les jours ou plus jamais de pizza ?", options: ["Ts les jours", "Jamais"] },
      { q: "Pas Internet 1 mois ou pas électricité 1 semaine ?", options: ["Pas internet", "Pas électricité"] },
    ],
    faq: [
      {
        q: "Combien de \"tu préfères\" dans une soirée ?",
        a: "5-10. Au-delà, ça devient répétitif. Espace-les entre d'autres types de sondages.",
      },
      {
        q: "Mes options ne sont pas équilibrées, est-ce grave ?",
        a: "Si une option est clairement préférable, 95% voteront pour elle et il n'y aura pas de débat. Le bon \"would you rather\" a deux options aussi attractives ou aussi pénibles.",
      },
      {
        q: "Format soft pour la famille ?",
        a: "Reste sur les pouvoirs magiques et les choix banals. Évite les dilemmes éthiques en famille — ça peut clasher avec belle-mère.",
      },
      {
        q: "Combien d'options ?",
        a: "Strictement 2. C'est l'essence du format. Pour 3+, fais un sondage classique.",
      },
    ],
    related: ["this-or-that", "couple", "soiree", "drole"],
    updatedAt: today,
  },
  {
    slug: "nourriture",
    locale: "fr",
    category: "idees",
    emoji: "🍔",
    title: "Sondage bouffe : 40 idées de food débats",
    h1: "Sondages bouffe : 40 débats food à lancer en story",
    description:
      "40 sondages food : ananas pizza, coriandre, McDo vs BK, pâtes vs riz. Pour story Insta et débat de soirée.",
    intro:
      "La bouffe, c'est le sujet n°1 de débat en France. Tout le monde a un avis, personne ne cède. Sondage moomz devient le terrain de la guerre alimentaire : ananas, coriandre, salée vs sucrée, etc. Voici 40 sondages food qui marchent vraiment.",
    sections: [
      {
        h: "Les classiques du débat food",
        body: "Ananas pizza, coriandre dans la cuisine, mayonnaise dans les frites belges, pain au chocolat vs chocolatine. Ces sondages reviennent chaque année parce qu'ils ne se résolvent jamais. Lance-les en story, retours garantis.",
      },
      {
        h: "Sondages food régionaux",
        body: "\"Pain au chocolat ou chocolatine ?\", \"poche ou sachet ?\", \"crayon ou stylo ?\". Tu peux mapper la France par sondage moomz. Si tu as une base francophone variée (FR, BE, CA, CH), les résultats deviennent un mini-tableau régional.",
      },
      {
        h: "Sondages restau / déco",
        body: "\"Italien ou japonais ?\", \"brunch ou apéro ?\", \"burger ou tacos ?\". À partager dans le groupe WhatsApp pour décider du resto du soir sans débat.",
      },
      {
        h: "Sondages food impopulaires",
        body: "Les opinions qu'on ose pas dire : \"manger un steak bien cuit, c'est ok ?\", \"le saumon fumé sur le tartare, c'est mieux ?\". Sondage anonyme révèle les pratiques cachées du groupe.",
      },
    ],
    polls: [
      { q: "L'ananas sur la pizza ?", options: ["Oui", "Jamais", "Bof"] },
      { q: "La coriandre, ça a goût de ?", options: ["Savon", "Coriandre", "Délice"] },
      { q: "Pain au chocolat ou chocolatine ?", options: ["Pain au chocolat", "Chocolatine"] },
      { q: "Steak : ?", options: ["Bleu", "Saignant", "À point", "Bien cuit"] },
      { q: "Mayo dans les frites belges ?", options: ["Oui", "Non", "Selon les frites"] },
      { q: "Restau ce soir ?", options: ["Italien", "Japonais", "Burger", "Tacos"] },
      { q: "Brunch ou apéro ?", options: ["Brunch", "Apéro", "Les deux", "Aucun"] },
      { q: "Café ou matcha ?", options: ["Café", "Matcha", "Thé", "Eau"] },
      { q: "Pâtes ou riz ?", options: ["Pâtes", "Riz", "Quinoa", "Aucun glucide"] },
      { q: "Saumon cru, cuit ou fumé ?", options: ["Cru", "Cuit", "Fumé", "Pas de saumon"] },
    ],
    faq: [
      {
        q: "Sondage food par région : possible ?",
        a: "Oui — partage en story et regarde où viennent les votes (les liens partagés ne se géolocalisent pas, mais tu peux observer les tendances par groupe).",
      },
      {
        q: "Comment éviter le débat sans fin ?",
        a: "Annonce un timer : \"on vote, ça ferme à 18h\". Screen le résultat, fin du débat.",
      },
      {
        q: "Restau à 10 personnes ?",
        a: "Lance un sondage 4 options. Ferme à 1h. La majorité gagne. Plus de groupe WhatsApp qui tourne 50 messages.",
      },
      {
        q: "Sondage allergies pour un repas ?",
        a: "Oui — lance un sondage \"régime alimentaire de l'invité\" avec options omni/végé/vegan/sans gluten/autre. Pratique pour 8+ personnes.",
      },
    ],
    related: ["restaurant", "voyage", "drole", "drama"],
    updatedAt: today,
  },
  {
    slug: "restaurant",
    locale: "fr",
    category: "idees",
    emoji: "🍝",
    title: "Sondage restau : 25 idées pour choisir où sortir manger",
    h1: "Sondages restau : choisir où sortir manger en groupe",
    description:
      "25 sondages pour choisir un restau en groupe : type de cuisine, lieu, budget. Plus la méthode pour trancher en 5 min.",
    intro:
      "Choisir un restau à 6 amis, c'est 30 messages WhatsApp et 1 heure de débat. Sondage moomz règle ça en 5 minutes : 4 options, vote, majorité. Voici 25 sondages restau-friendly et la méthode pour les utiliser sans tension.",
    sections: [
      {
        h: "La méthode \"3 rounds\"",
        body: "Round 1 : type de cuisine (italien, japonais, brasserie, burger). Round 2 : ambiance (chic, casual, brunch). Round 3 : lieu spécifique (3 restaus présélectionnés par l'organisateur). 3 sondages de 30 sec chacun = décision en 5 min, validée par tous.",
      },
      {
        h: "Sondage restau pour 2-4 personnes",
        body: "À 2-4, le sondage moomz remplace bien le \"je sais pas, tu veux quoi ?\". Lance 3 options de restaus connus, chacun vote. Plus de boucle infinie. Bonus : le résultat est neutre, donc plus de \"c'est toujours toi qui choisis\".",
      },
      {
        h: "Sondage restau pour 5+ personnes",
        body: "À 5+, c'est obligatoire. Sans sondage, vous mettez 45 minutes à choisir. Lance le sondage 1h avant le rdv, ferme à 30 min avant. Le résultat est annoncé dans le groupe, RDV au resto choisi. Net.",
      },
      {
        h: "Sondage restau pour gros groupes (mariage, anniv, séminaire)",
        body: "Pour 15+ personnes, sondage moomz est obligatoire pour les régimes alimentaires (omni/végé/vegan/sans gluten/autre). À transmettre au traiteur. Plus de mails individuels à chasser.",
      },
    ],
    polls: [
      { q: "Type de cuisine ?", options: ["Italien", "Japonais", "Brasserie", "Burger", "Tacos"] },
      { q: "Ambiance ?", options: ["Chic", "Casual", "Brunch", "Bar à tapas"] },
      { q: "Resto ce soir ?", options: ["Casa Pizza", "Sushi Bar", "Brasserie Léon", "Chez Tony"] },
      { q: "Budget par tête ?", options: ["20€", "30€", "50€", "Pas de limite"] },
      { q: "Régime alimentaire (mariage) ?", options: ["Omni", "Végé", "Vegan", "Sans gluten"] },
      { q: "Resto avec parents ?", options: ["Brasserie", "Italien", "Chez nous", "Bar à vin"] },
      { q: "Brunch dimanche ?", options: ["Sweet", "Salé", "Mix", "Pas de brunch"] },
      { q: "Quartier ?", options: ["Marais", "Belleville", "Bastille", "Saint-Michel"] },
      { q: "Heure du dîner ?", options: ["19h30", "20h", "20h30", "21h"] },
      { q: "Vin ou cocktails ?", options: ["Vin", "Cocktails", "Bières", "Eau"] },
    ],
    faq: [
      {
        q: "Comment choisir le resto sans tension ?",
        a: "Lance 4 options dans un sondage, ferme à 30 min. La majorité gagne. Personne ne peut râler.",
      },
      {
        q: "On peut filtrer par budget ?",
        a: "Oui — fais 2 sondages successifs : (1) budget par tête, (2) restaus dans ce budget. Plus simple que de proposer 4 restaus à des budgets différents.",
      },
      {
        q: "Et pour le séminaire à 50 ?",
        a: "Lance un sondage allergies/régime, et un sondage type de menu (cocktail dînatoire / 3 plats / buffet). Tu cadres le briefing traiteur en 2 sondages.",
      },
      {
        q: "Le sondage est-il anonyme ?",
        a: "Oui. Tu vois le total par option, sans qui a voté quoi.",
      },
    ],
    related: ["nourriture", "soiree", "famille", "anniversaire"],
    updatedAt: today,
  },
  {
    slug: "voyage",
    locale: "fr",
    category: "idees",
    emoji: "✈️",
    title: "Sondage voyage : 30 idées pour décider où partir en groupe",
    h1: "Sondages voyage : décider où partir en groupe sans 50 messages",
    description:
      "30 sondages voyage : destination, dates, budget, activités. Pour groupes amis, famille ou couple. Décision en 24h max.",
    intro:
      "Organiser un voyage en groupe, c'est le test ultime d'amitié. 8 messages par jour pendant 3 semaines pour décider d'une destination, et 2 personnes finissent par bouder. Sondage moomz règle ça en 4 jours : un sondage par jour, décision tranchée. Voici la méthode.",
    sections: [
      {
        h: "La méthode \"un sondage par jour pendant 4 jours\"",
        body: "Jour 1 : destination (4 options). Jour 2 : dates (3 options de semaines). Jour 3 : budget par tête (3 fourchettes). Jour 4 : logement (Airbnb / hôtel / camping). À chaque étape, ferme à 24h, annonce le résultat, passe à la suivante. 4 jours après, t'as un voyage cadré.",
      },
      {
        h: "Sondage voyage en couple",
        body: "À 2, c'est différent — pas de majorité, mais ça force chacun à se positionner. Lance 5 sondages : pays, durée, type de logement, activité phare, budget. Vous comparez les résultats. Les désaccords deviennent les points à discuter explicitement.",
      },
      {
        h: "Sondage voyage en famille",
        body: "À 4-6 (parents + enfants), sondage moomz inclut les enfants. Adapté pour leur âge (Disney/montagne/plage), ils se sentent inclus. Vote majoritaire, plus de cris dans la voiture le jour J.",
      },
      {
        h: "Sondage voyage entre amis (8+)",
        body: "C'est là où sondage moomz est le plus utile. Sans lui, le groupe WhatsApp explose à coups de capture d'écran Booking. Avec, le débat est ramené à 4 options par étape, et la décision est démocratique.",
      },
    ],
    polls: [
      { q: "Destination cet été ?", options: ["Espagne", "Italie", "Portugal", "Grèce", "France"] },
      { q: "Semaine ?", options: ["1-7 juillet", "8-14", "15-21", "22-28"] },
      { q: "Budget par tête ?", options: ["500€", "1000€", "1500€", "2000€+"] },
      { q: "Logement ?", options: ["Airbnb", "Hôtel", "Camping", "Auberge"] },
      { q: "Activité phare ?", options: ["Plage", "Randonnée", "Visite ville", "Festival"] },
      { q: "Durée ?", options: ["3-5 jours", "1 semaine", "10 jours", "2 semaines"] },
      { q: "Voiture ou train/avion ?", options: ["Voiture", "Avion", "Train", "Coloc voiture"] },
      { q: "Avec qui ?", options: ["Amis", "Famille", "Couple", "Solo"] },
      { q: "Type de voyage ?", options: ["Détente plage", "Aventure", "Culturel", "Festif"] },
      { q: "Ville ou nature ?", options: ["Ville", "Nature", "Mix", "Côte"] },
    ],
    faq: [
      {
        q: "Combien de temps pour décider ?",
        a: "Avec la méthode \"un sondage par jour\", 4-5 jours suffisent. Sans, comptez 3-4 semaines de débats WhatsApp.",
      },
      {
        q: "Et si quelqu'un est minoritaire systématiquement ?",
        a: "Il doit assumer. Le voyage est démocratique. Soit il se plie, soit il propose une alternative chiffrée (\"je veux Berlin\" → \"ok mais alors je fais le trip découverte solo\").",
      },
      {
        q: "Sondage budget anonyme ?",
        a: "Oui — le budget est un sujet sensible. Sondage anonyme moomz révèle ce que les gens peuvent vraiment mettre, sans avoir à le dire à voix haute.",
      },
      {
        q: "Et la famille avec enfants ?",
        a: "Inclut les enfants dans le vote (option \"enfant\" à 6+). Ça les responsabilise. Petite leçon de démocratie.",
      },
    ],
    related: ["famille", "ami-amie", "evjf", "evg"],
    updatedAt: today,
  },
  {
    slug: "netflix-series",
    locale: "fr",
    category: "idees",
    emoji: "🍿",
    title: "Sondage Netflix séries : 30 idées de débat",
    h1: "Sondages séries Netflix : choisir et débattre",
    description:
      "30 sondages séries / films Netflix : choix du soir, série culte, meilleure saison, tier list. Pour couple, amis et famille.",
    intro:
      "Le débat \"on regarde quoi ce soir\" est le plus long de tous les soirs de couple. Sondage moomz, 4 options, 30 secondes, fini. Et pour les sondages méta (meilleur Stranger Things, pire saison de Squid Game), c'est le format qui fait débattre toute la promo Discord. Voici 30 idées.",
    sections: [
      {
        h: "Sondage \"on regarde quoi ce soir\"",
        body: "À 2, à 4, le débat sur le choix du film/série tourne. Lance 4 options (1 série commencée, 1 nouvelle, 1 film, 1 doc), chacun vote, on lance. Plus de \"non je veux pas\" — la majorité a parlé.",
      },
      {
        h: "Sondage best-of séries",
        body: "\"Meilleure série Netflix de 2026 ?\". Lance 5 options actuelles. Partage dans ton groupe potes, sur ton Insta, en story. Tu as un classement collectif en 24h. À ressortir comme top pour la prochaine soirée Netflix collective.",
      },
      {
        h: "Sondage débat séries",
        body: "\"Stranger Things 4 ou 5 ?\", \"Squid Game 2 a-t-elle déçu ?\", \"qui doit mourir dans la saison 3 ?\". Les sondages débat séries sont les plus partagés en story et les plus commentés. Idéal pour faire vivre une page fan ou un compte cinéma.",
      },
      {
        h: "Sondage tier list séries",
        body: "Tier list collective : lance 5 sondages \"qu'est-ce qui est mieux : X ou Y ?\". 5 duels = un mini-classement. Partage le résultat final en story. Format viral testé par la Gen Z.",
      },
    ],
    polls: [
      { q: "On regarde quoi ce soir ?", options: ["Stranger Things", "Squid Game", "Un film", "Un doc"] },
      { q: "Meilleure série Netflix 2026 ?", options: ["Stranger Things 5", "Squid Game 2", "Une autre", "J'ai rien vu"] },
      { q: "Stranger Things : meilleure saison ?", options: ["S1", "S2", "S4", "S5"] },
      { q: "Squid Game 2 : déçu ?", options: ["Oui décevant", "Bon mais < S1", "Excellent", "J'ai pas vu"] },
      { q: "Film en couple ?", options: ["Comédie", "Action", "Drame", "Animation"] },
      { q: "Série de re-watch ?", options: ["The Office", "Friends", "Brooklyn 99", "Game of Thrones"] },
      { q: "Doc à voir ?", options: ["Crime", "Sport", "Société", "Nature"] },
      { q: "Anime ?", options: ["One Piece", "Demon Slayer", "Jujutsu Kaisen", "Aucun"] },
      { q: "Acteur français préféré ?", options: ["Adèle Exarchopoulos", "Vincent Lacoste", "Léa Drucker", "Roschdy Zem"] },
      { q: "Tu paies ?", options: ["Netflix Premium", "Standard", "Pirate", "Famille partagée"] },
    ],
    faq: [
      {
        q: "Mes amis n'ont pas les mêmes goûts, c'est grave ?",
        a: "Non — c'est ce qui rend le débat intéressant. Sondage majoritaire tranche, et tu découvres des séries que tu n'aurais pas regardées seul.",
      },
      {
        q: "Et pour les enfants ?",
        a: "Lance des sondages avec options enfants : Bluey, Pat'Patrouille, films animés. Ils se sentent inclus dans le choix.",
      },
      {
        q: "Sondage spoiler-free ?",
        a: "Oui — le sondage de type \"meilleure saison\" ne spoile pas si tu ne mets pas de noms de personnages dans les options.",
      },
      {
        q: "Idée pour un compte cinéma ?",
        a: "Sondage hebdomadaire \"meilleure sortie de la semaine\" avec 4 films. Format viral testé par les comptes Insta cinéma.",
      },
    ],
    related: ["soiree", "couple", "famille", "this-or-that"],
    updatedAt: today,
  },
  {
    slug: "musique",
    locale: "fr",
    category: "idees",
    emoji: "🎵",
    title: "Sondage musique : 30 idées pour débat playlists et concerts",
    h1: "Sondages musique : best-of, playlist, concert, débats",
    description:
      "30 sondages musique : meilleur album 2026, rap fr préférée, choix playlist soirée, festival. Pour story et débat Discord.",
    intro:
      "La musique est le sujet de débat le plus passionné chez les jeunes Français. Sondage moomz fait émerger les vraies opinions : qui est le GOAT du rap fr, quelle est la meilleure playlist soirée, quel festival prioriser. Voici 30 sondages testés en groupes Discord et stories.",
    sections: [
      {
        h: "Sondage best-of musique de l'année",
        body: "À chaque fin d'année (et chaque trimestre), lance un sondage \"meilleur album 2026\" avec 4-5 options. Partage en story, dans ton Discord musique, sur Twitter. Le résultat fait office de classement collectif fan-driven, plus parlant qu'un top Spotify.",
      },
      {
        h: "Sondage débat rap fr / pop",
        body: "Les classements GOAT sont éternels. Lance \"meilleur rappeur fr 2026\", \"GOAT rap fr ever\", \"meilleur album de Booba\". Format qui fait exploser les commentaires sur tes posts.",
      },
      {
        h: "Sondage playlist soirée",
        body: "Avant une soirée, lance un sondage \"on met quoi sur la playlist ?\" — options : techno, hip-hop, latino, mix. Tu cadres l'ambiance avant que le débat n'ait lieu IRL. Plus efficace que de subir le 3e DJ improvisé.",
      },
      {
        h: "Sondage concerts / festivals",
        body: "\"On part à quel festival ?\" — Rock en Seine, We Love Green, Solidays, Hellfest. Sondage moomz tranche pour le groupe. Et pour les concerts indé, sondage \"on prend les places ?\" avec budget précisé.",
      },
    ],
    polls: [
      { q: "Meilleur album rap fr 2026 ?", options: ["Booba", "Damso", "PNL", "Aya Nakamura", "Aucun"] },
      { q: "GOAT du rap fr ever ?", options: ["Booba", "Mc Solaar", "PNL", "Nekfeu"] },
      { q: "Playlist soirée ?", options: ["Techno", "Hip-hop", "Latino", "Pop / variété"] },
      { q: "Festival cet été ?", options: ["Solidays", "Rock en Seine", "We Love Green", "Hellfest"] },
      { q: "Top artiste 2026 ?", options: ["Aya Nakamura", "Gazo", "Tiakola", "Werenoi"] },
      { q: "Genre préféré ?", options: ["Rap", "Pop", "Rock", "Électro"] },
      { q: "Pop FR ou US ?", options: ["FR", "US", "Les deux", "Aucune"] },
      { q: "Concert vu en 2026 ?", options: ["Aucun", "1", "2-3", "+ de 3"] },
      { q: "On y va à 2 ou en groupe ?", options: ["À 2", "Groupe 4-6", "Solo", "Groupe 10+"] },
      { q: "Streaming utilisé ?", options: ["Spotify", "Apple Music", "Deezer", "YouTube"] },
    ],
    faq: [
      {
        q: "Comment intégrer à un Spotify Wrapped collectif ?",
        a: "Lance un sondage \"meilleur titre de 2026\" en décembre. Partage le résultat en story Insta. Mini-Wrapped fan-driven.",
      },
      {
        q: "C'est pour les artistes aussi ?",
        a: "Oui — un artiste qui sort un EP peut lancer un sondage \"meilleur titre du nouvel EP\" auprès de ses fans. Engagement et feedback immédiats.",
      },
      {
        q: "Festival : sondage anonyme ?",
        a: "Pratique pour le budget : sondage anonyme révèle qui peut vraiment se permettre 200€ de pass.",
      },
      {
        q: "Quel sondage en concert ?",
        a: "Pendant l'entracte d'un concert ou en attendant l'artiste, sondage \"meilleur titre de l'album\". Engagement fan, partage en story.",
      },
    ],
    related: ["soiree", "discord", "voyage", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "mode-outfit",
    locale: "fr",
    category: "idees",
    emoji: "👗",
    title: "Sondage outfit mode : 25 idées pour story Insta",
    h1: "Sondages outfit / mode : story Insta et débat tendances",
    description:
      "25 sondages outfit pour story Insta : robe à choisir, tendances 2026, accessoires, look soirée. Le format star des comptes mode.",
    intro:
      "Les comptes mode utilisent le sondage en story Insta comme outil de décision personnelle (\"laquelle je porte ce soir ?\") et comme contenu (\"tendance Y2K, oui ou non ?\"). Sondage moomz va plus loin : tu peux poser un sondage avec 4-6 options de looks, partager le lien hors Insta (TikTok, Pinterest, blog). Voici les idées.",
    sections: [
      {
        h: "Le sondage \"laquelle je porte ?\"",
        body: "Tu hésites entre 2-4 looks avant un date / une soirée. Sondage moomz, 4 photos, tes followers tranchent. Idéal en story Insta avec sticker Lien, ou directement dans ton DM groupe à tes BFFs. Décision en 5 minutes, plus de retard à cause de l'hésitation.",
      },
      {
        h: "Sondage tendances mode",
        body: "\"Le retour du low-rise, validé ?\", \"jean baggy ou skinny ?\", \"sneakers tendance 2026 ?\". Lance ces sondages en story Insta + lien moomz pour avoir des résultats plus précis. Tu deviens le ou la prescriptrice de ton cercle.",
      },
      {
        h: "Sondage shopping collectif",
        body: "Pour un achat en groupe (cadeau, voyage, soirée à thème), sondage moomz tranche en 5 min. \"On prend tous le même t-shirt blanc ou chacun le sien ?\", \"chemise hawaïenne pour la soirée année 90 ou pas ?\".",
      },
      {
        h: "Sondage tier list mode",
        body: "Tier list \"meilleur look de 2026\", \"créateur préféré\", \"sneakers de l'année\". Sondage moomz génère un classement basé sur la vraie majorité de tes followers, pas juste les commentaires bruyants.",
      },
    ],
    polls: [
      { q: "Laquelle je porte ce soir ?", options: ["Robe noire", "Robe rouge", "Jean + top", "Total look beige"] },
      { q: "Tendance Y2K 2026 ?", options: ["Validée", "Non merci", "Que les accessoires"] },
      { q: "Jean baggy ou skinny ?", options: ["Baggy", "Skinny", "Mom", "Bootcut"] },
      { q: "Sneakers de l'année ?", options: ["Adidas Samba", "Nike Cortez", "New Balance", "Onitsuka Tiger"] },
      { q: "Color du moment ?", options: ["Rouge tomate", "Bleu Klein", "Beige", "Vert sage"] },
      { q: "Cropped top, ok à 30 ans ?", options: ["Oui", "Non", "Selon la coupe"] },
      { q: "Tatouage : où ?", options: ["Visible", "Caché", "Doigt", "Pas de tatouage"] },
      { q: "Piercing nez : oui ou non ?", options: ["Oui", "Non", "Sur d'autres"] },
      { q: "Sac de 200€ ou 1000€ ?", options: ["200€", "500€", "1000€", "Pas de sac de marque"] },
      { q: "Maquillage no-makeup ou full ?", options: ["No-makeup", "Full glam", "Selon l'occasion", "Aucun"] },
    ],
    faq: [
      {
        q: "Sondage en story Insta + moomz ?",
        a: "Oui — colle le lien moomz dans ta story Insta avec sticker Lien. Tes followers cliquent et votent dans moomz, tu vois les % en live.",
      },
      {
        q: "Mes options doivent être avec photos ?",
        a: "Pas obligé — tu peux mettre des descriptions texte (\"robe noire\", \"robe rouge\"). Si tu veux des photos, héberge-les ailleurs et donne-les en story avec le sondage.",
      },
      {
        q: "Pour un compte créateur ?",
        a: "Lance un sondage tendances hebdo. C'est du contenu gratuit et engageant, qui te positionne comme prescripteur.",
      },
      {
        q: "Achat collectif (mariage, soirée à thème) ?",
        a: "Sondage moomz dans le groupe, 4 options de tenues. La majorité gagne. Plus de capture d'écran ASOS qui tourne.",
      },
    ],
    related: ["instagram-story", "tiktok", "soiree", "saint-valentin"],
    updatedAt: today,
  },
  {
    slug: "fitness-sport",
    locale: "fr",
    category: "idees",
    emoji: "💪",
    title: "Sondage sport fitness : 25 idées pour groupe et compte fit",
    h1: "Sondages fitness : débats sport, défis, programme",
    description:
      "25 sondages sport / fitness : musculation, running, choix de programme, débat protéines. Pour groupes fit et créateurs sport.",
    intro:
      "Les groupes de sport (salle, running, vélo) débattent sans cesse. Sondage moomz tranche : meilleur programme split, protéine ou pas, jeûne intermittent, etc. Et pour les créateurs fit sur Insta/TikTok, le sondage en story est un format viral de l'engagement communauté.",
    sections: [
      {
        h: "Sondage débat fit",
        body: "\"Cardio matin à jeun ou après ?\", \"split push/pull/legs ou upper/lower ?\", \"glutamine ou pas ?\". Ces débats divisent depuis 20 ans, le sondage moomz aggrège l'opinion de ta communauté. Partage en story fit pour engagement record.",
      },
      {
        h: "Sondage choix de programme",
        body: "Lance \"on suit quel programme cette semaine ?\" dans un groupe de salle. 4 options (full body / split / HIIT / repos). La majorité gagne, tout le monde suit. Plus de séances individuelles dispersées.",
      },
      {
        h: "Sondage challenges",
        body: "\"On fait un challenge 30 jours abs ?\", \"qui s'engage pour le semi-marathon ?\". Sondage commits visuel : les gens votent oui, ça crée un engagement social. Top stratégie pour lancer un challenge collectif.",
      },
      {
        h: "Sondage compléments / nutrition",
        body: "\"Whey, isolate ou pas de whey ?\", \"jeûne 16/8 marche ou bullshit ?\". Les débats nutrition sont passionnés. Sondage moomz révèle qui dans le groupe fait quoi sans avoir à demander individuellement.",
      },
    ],
    polls: [
      { q: "Cardio matin à jeun ou après ?", options: ["À jeun", "Après collation", "Pas de cardio matin"] },
      { q: "Split préféré ?", options: ["Push/Pull/Legs", "Upper/Lower", "Full body", "Bro split"] },
      { q: "Whey, oui ou non ?", options: ["Oui obligatoire", "Non protéines réelles", "Selon le jour"] },
      { q: "Jeûne 16/8 ?", options: ["Adore", "Pas pour moi", "Essayé arrêté"] },
      { q: "Course matin ou soir ?", options: ["Matin", "Soir", "Midi", "Jamais"] },
      { q: "Salle ou home gym ?", options: ["Salle", "Home", "Mix", "Pas d'entraînement"] },
      { q: "On fait un challenge 30j abs ?", options: ["Oui", "Non bof", "Que les 10 premiers jours"] },
      { q: "Semi-marathon ?", options: ["Oui je m'inscris", "Non trop", "Plus tard"] },
      { q: "Le jour de jambes ?", options: ["Adore", "Déteste", "Le saute"] },
      { q: "Combien de séances / semaine ?", options: ["1-2", "3-4", "5-6", "7+"] },
    ],
    faq: [
      {
        q: "Pour un compte Insta fit ?",
        a: "Sondage hebdomadaire débats fitness en story = engagement boosté. Réponse moomz + lien en bio pour les sondages plus longs.",
      },
      {
        q: "Et pour un groupe de salle ?",
        a: "Sondage moomz hebdo pour décider du programme de groupe ou des séances en commun.",
      },
      {
        q: "Comment engager les débutants ?",
        a: "Lance des sondages d'options simples (\"on s'entraîne ensemble ce soir ?\"), pas de débats techniques. Ça réduit la barrière.",
      },
      {
        q: "Sondage nutrition : risque ?",
        a: "Reste sur les choix lifestyle. Évite de donner des conseils médicaux via sondage.",
      },
    ],
    related: ["gaming-jv", "voyage", "discord", "team-building"],
    updatedAt: today,
  },
  {
    slug: "gaming-jv",
    locale: "fr",
    category: "idees",
    emoji: "🎮",
    title: "Sondage jeux vidéo : 30 idées pour Discord et serveur gaming",
    h1: "Sondages gaming : débats jeux vidéo, tier list, choix de raid",
    description:
      "30 sondages jeux vidéo : GOTY, tier list perso, choix de raid, débat console. Pour Discord, Twitch et communauté gaming.",
    intro:
      "La communauté gaming est la plus active sur le débat. Tier list de persos, GOTY, console war, choix du raid. Sondage moomz est le format préféré sur Discord et Twitch. Voici 30 idées testées et virales.",
    sections: [
      {
        h: "Sondage GOTY / classement",
        body: "À chaque fin d'année, lance un sondage \"GOTY 2026\" avec 5 options. Partage sur ton Discord gaming, sur Twitter, en chat Twitch. Tu obtiens un classement de communauté plus engagé qu'un vote The Game Awards.",
      },
      {
        h: "Sondage tier list",
        body: "Pour chaque jeu (LoL, Valorant, Fortnite, OW), lance \"meilleur perso S/A/B/C ?\" avec 4-5 persos par tier. 5 sondages = une tier list complète, votée par la communauté. Plus parlant qu'un guide solo.",
      },
      {
        h: "Sondage choix de raid",
        body: "Pour MMO et co-op (WoW, Destiny, etc.), sondage moomz décide : heure du raid, build à utiliser, ordre des boss. Plus de débat dans le voice, on vote, on suit.",
      },
      {
        h: "Sondage console war",
        body: "Le débat éternel : PS5 vs Xbox vs PC vs Switch. Lance un sondage de ta communauté. Le résultat révèle la vraie répartition (souvent surprenante).",
      },
    ],
    polls: [
      { q: "GOTY 2026 ?", options: ["GTA VI", "Elder Scrolls VI", "Death Stranding 2", "Hollow Knight Silksong"] },
      { q: "Console préférée ?", options: ["PS5", "Xbox Series", "PC", "Switch 2"] },
      { q: "Meilleur perso Valorant ?", options: ["Jett", "Phoenix", "Reyna", "Sage"] },
      { q: "Pire patch LoL ?", options: ["S1", "S2", "S3", "S4"] },
      { q: "Heure du raid samedi ?", options: ["18h", "20h", "21h", "22h"] },
      { q: "Build préféré (BG3) ?", options: ["Paladin", "Wizard", "Rogue", "Multi"] },
      { q: "Indie de l'année ?", options: ["Hollow Knight", "Hades 2", "Inscription", "Aucun joué"] },
      { q: "Jeu de la nuit ?", options: ["LoL", "Valorant", "Fortnite", "Apex"] },
      { q: "Crossplay ok ?", options: ["Oui", "Non", "Selon le jeu"] },
      { q: "Subscription : ?", options: ["PS+", "Game Pass", "Aucune", "Steam seulement"] },
    ],
    faq: [
      {
        q: "Faut-il un bot Discord pour faire ça ?",
        a: "Non. Colle le lien moomz dans n'importe quel channel Discord, c'est fini.",
      },
      {
        q: "Comment partager sur Twitch ?",
        a: "Colle le lien dans le chat avec !poll [lien]. Le bot Twitch peut épingler le message si tu as un Streamer Elements ou Nightbot configuré.",
      },
      {
        q: "Pour les tier lists collaboratives ?",
        a: "5 sondages séparés (un par tier) marchent mieux qu'un mega-sondage. Plus simple à voter, plus précis.",
      },
      {
        q: "GOTY après les Game Awards : utile ?",
        a: "Oui — le top des Game Awards ne reflète pas ta communauté. Sondage moomz aggrège ton public, plus parlant pour ta chaîne.",
      },
    ],
    related: ["discord", "team-building", "ado", "lycee"],
    updatedAt: today,
  },
  {
    slug: "ferme-du-buzz",
    locale: "fr",
    category: "idees",
    emoji: "🐝",
    title: "Sondage ferme du buzz : 25 idées pour débat TikTok",
    h1: "Sondages \"ferme du buzz\" : débats TikTok à la pelle",
    description:
      "25 sondages style ferme du buzz : situations drama, dilemmes moraux, opinions impopulaires. Pour débat TikTok et Insta.",
    intro:
      "\"Ferme du buzz\" est devenu le terme générique pour les sondages qui font débattre toute la timeline. Le format type : situation rapportée, question morale, options de verdict. C'est le sondage qui explose en commentaires sur TikTok et Insta. Voici 25 idées prêtes à dégainer.",
    sections: [
      {
        h: "Le format ferme du buzz",
        body: "Tu raconte une situation en 2 phrases. Tu poses la question morale. Tu donnes 3 options de verdict (oui / non / ça dépend). C'est tout. Plus tu condenses la situation, plus le sondage marche.",
      },
      {
        h: "Sondages couple : le terrain favori",
        body: "Ghosting, ex qui revient, trahison, infidélité. Les sondages drama couple sont les plus partagés sur TikTok. Reste sur des cas génériques, pas de noms réels.",
      },
      {
        h: "Sondages amitié",
        body: "Trahison d'amitié, secret partagé, vol entre amis. Génèrent autant d'engagement que les couple. Bonus : moins polarisants, donc plus partagés en groupes mixtes.",
      },
      {
        h: "Sondages famille",
        body: "Belle-mère qui dépasse, parents qui imposent, fratrie qui jalouse. Le drama famille parle à tout le monde. Top format pour grossir un compte lifestyle.",
      },
    ],
    polls: [
      { q: "Il a ghosté 2 mois, recontacte ?", options: ["On répond", "Non", "On le fait poireauter"] },
      { q: "Elle dit la vérité à sa pote ?", options: ["Oui direct", "Non", "On screen et attend"] },
      { q: "Pote vole 50€, on reparle ?", options: ["Confrontation", "Non on coupe", "On lâche"] },
      { q: "Belle-mère qui critique, on dit ?", options: ["Direct", "Via le mec/la meuf", "On encaisse"] },
      { q: "Frère qui prend la vaisselle 0 fois, comment réagir ?", options: ["Confrontation", "On laisse", "On va vivre ailleurs"] },
      { q: "Mec qui regarde l'Insta de son ex, c'est ok ?", options: ["Normal", "Bizarre", "Drama"] },
      { q: "Amie qui copie ton style, c'est flatteur ou pas ?", options: ["Flatteur", "Énervant", "Drama"] },
      { q: "Voisin qui fait du bruit à 22h, on signale ?", options: ["Direct", "Au bout d'une semaine", "On encaisse"] },
      { q: "Pote qui mate ton couple en cachette ?", options: ["Drama", "On laisse", "Confrontation"] },
      { q: "Pote qui propose un coup d'un soir au boyfriend ?", options: ["Tu coupes le contact", "Tu en parles à lui", "Tu laisses passer"] },
    ],
    faq: [
      {
        q: "Comment maximiser la viralité ?",
        a: "Garde 3 options avec une médiane (\"ça dépend\"). La nuance fait débattre les commentaires.",
      },
      {
        q: "Risque de harcèlement ?",
        a: "Garde les situations génériques. Pas de noms réels. Pas de cas identifiable d'un proche.",
      },
      {
        q: "Format TikTok ou Insta ?",
        a: "Les deux marchent. TikTok = vidéo + lien en bio. Insta = sticker sondage natif ou lien moomz en story.",
      },
      {
        q: "Quel rythme ?",
        a: "1-2 sondages drama par semaine. Plus, ça sature ton audience et ça fait \"farme du buzz\".",
      },
    ],
    related: ["drama", "tiktok", "couple", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "saint-valentin",
    locale: "fr",
    category: "idees",
    emoji: "💝",
    title: "Sondage Saint-Valentin : 25 idées pour couple ou crush",
    h1: "Sondages Saint-Valentin : pour couple ou pour crush",
    description:
      "25 sondages Saint-Valentin : choix du restau, cadeau, déclaration anonyme, débats. Pour couple, crush et célibataires.",
    intro:
      "La Saint-Valentin, c'est 200 messages WhatsApp entre potes \"on fait quoi ?\". Pour les couples : choix du restau, cadeau, soirée. Pour les célibataires : sondages anti-Saint-Valentin entre amies. Pour les crushs : déclaration anonyme via sondage. Voici 25 idées.",
    sections: [
      {
        h: "Sondage couple : orga Saint-Valentin",
        body: "Lance un sondage à ton/ta partenaire : restau, soirée à la maison, week-end, ou Netflix. La décision est démocratique, plus de pression à proposer. Bonus : tu peux y mettre l'option \"je m'occupe de tout, fais-moi confiance\" pour surprendre tout en cadrant les options.",
      },
      {
        h: "Sondage célibataires : anti-Saint-Valentin",
        body: "Pour les célibataires en groupe : sondage \"on fait quoi le 14 ?\" avec options : ciné à 4, resto sans mecs, beuverie, on s'en bat. Sondage moomz tranche, plus de débat \"qui propose quoi\".",
      },
      {
        h: "Sondage crush anonyme",
        body: "Le coup classique : tu envoies à ton crush un sondage \"que penses-tu de moi ?\" avec 4 options drôles. Anonyme du créateur, donc ils n'auront pas tout de suite qui c'est. Idéal pour un game pré-déclaration.",
      },
      {
        h: "Sondage cadeau",
        body: "Tu hésites entre 3 cadeaux. Demande à ses amies via un sondage anonyme. Réponse en 1h, plus de stress sur \"il va aimer ?\".",
      },
    ],
    polls: [
      { q: "Saint-Valentin : on fait quoi ?", options: ["Resto chic", "Soirée maison", "Week-end", "Netflix"] },
      { q: "Anti-Saint-Valentin : on fait quoi entre potes ?", options: ["Ciné à 4", "Resto", "Soirée beuverie", "Chacune chez soi"] },
      { q: "Cadeau pour son mec ?", options: ["Parfum", "Vêtement", "Expérience", "Repas fait maison"] },
      { q: "Cadeau pour sa meuf ?", options: ["Bijou", "Fleurs", "Expérience", "Lettre + DIY"] },
      { q: "Resto Saint-Valentin ?", options: ["Italien intime", "Brasserie", "Sushi", "Bar à cocktails"] },
      { q: "Déclaration : on ose ?", options: ["Oui", "Non", "Via sondage drôle"] },
      { q: "Saint-Valentin à 2 mois de couple ?", options: ["Carrément", "Trop tôt", "Petit truc"] },
      { q: "Saint-Valentin à 10 ans de couple ?", options: ["On célèbre", "On fait comme d'hab", "Petit cadeau"] },
      { q: "Roses ou autre fleurs ?", options: ["Roses rouges", "Pivoines", "Tulipes", "Pas de fleurs"] },
      { q: "Soirée surprise ?", options: ["Adore", "Stresse", "Selon le contexte"] },
    ],
    faq: [
      {
        q: "Sondage anonyme pour un crush ?",
        a: "Oui — le sondage moomz n'identifie pas le créateur dans le lien partagé. Tu peux le poser comme un game.",
      },
      {
        q: "Mes amies peuvent voter sans m'identifier ?",
        a: "Oui — tu envoies le lien dans le groupe WhatsApp, chacune vote anonymement. Pas de \"qui a voté quoi\".",
      },
      {
        q: "Sondage pour ressentir l'amour ?",
        a: "Le sondage \"décris-moi en 1 mot\" auprès de tes amies. 4 options positives. Tu vois ce qui ressort, tu le ressens.",
      },
      {
        q: "Anti-Saint-Valentin orga ?",
        a: "Sondage moomz à ton groupe potes. 4 options de soirée. La majorité gagne. Moins de \"j'ai pas envie de proposer\".",
      },
    ],
    related: ["couple", "premier-rendez-vous", "ami-amie", "soiree"],
    updatedAt: today,
  },
];
