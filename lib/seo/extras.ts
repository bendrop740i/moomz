import type { SeoPage } from "./types";

const today = "2026-05-19";

export const extras: SeoPage[] = [
  {
    slug: "halloween",
    locale: "fr",
    category: "idees",
    emoji: "🎃",
    title: "Sondage Halloween : 25 idées pour soirée et costume",
    h1: "Sondages Halloween : choix de costume, film, soirée",
    description:
      "25 sondages Halloween pour ta soirée, ton costume, et tes amis. Drôle, classique, débats horreur.",
    intro:
      "Halloween, c'est le moment où chaque ami a son costume top secret et personne ne sait quel film regarder en collectif. Sondage moomz règle les deux. Voici 25 idées sondage Halloween pour faire débattre tes potes et organiser la soirée.",
    sections: [
      {
        h: "Sondage costume",
        body: "Tu hésites entre 3-4 costumes ? Lance un sondage à tes amis, screen le résultat. Plus de stress, plus d'achat raté. À utiliser une semaine avant Halloween pour avoir le temps de commander.",
      },
      {
        h: "Sondage soirée orga",
        body: "Comme pour tout event : sondage thème (gothique, ado années 90, cosplay film d'horreur, sans thème), sondage lieu, sondage à quel film se faire peur. 3 sondages = soirée cadrée.",
      },
      {
        h: "Sondage débat horreur",
        body: "\"Pire film d'horreur de tous les temps ?\", \"meilleur slasher ?\", \"Annabelle ou The Nun ?\". Les fans de l'horreur ont des opinions fortes. Sondage moomz les fait s'exprimer.",
      },
      {
        h: "Sondage \"qui meurt en premier dans un slasher\"",
        body: "Format drôle : \"si on était dans un slasher, qui meurt en premier ?\" avec les prénoms du groupe. Les options sont les classiques de l'horreur : le couple qui couche, le bourré, la pote sceptique. Tier list garantie.",
      },
    ],
    polls: [
      { q: "Costume cette année ?", options: ["Vampire", "Sorcière", "Personnage série", "Custom DIY"] },
      { q: "Soirée à thème ?", options: ["Gothique", "Années 90 ado", "Cosplay film", "Sans thème"] },
      { q: "Pire film d'horreur ?", options: ["Saw", "Annabelle", "Insidious", "Scream"] },
      { q: "Si slasher, qui meurt en 1er ?", options: ["Lucas", "Sarah", "Théo", "Moi je survive"] },
      { q: "Bonbons : on en distribue ?", options: ["Oui plein", "Quelques uns", "Non on éteint la lumière"] },
      { q: "Citrouille sculptée ?", options: ["Oui", "Non flemme", "On en achète une fait"] },
      { q: "Meilleur film Halloween-friendly ?", options: ["Hocus Pocus", "Etrange Noël", "Beetlejuice", "Conjuring"] },
      { q: "Tu sors ou tu restes ?", options: ["Soirée déguisée", "Chez moi sous couverture", "Pas Halloween"] },
      { q: "Préfères film d'horreur ?", options: ["Psycho slow", "Jump scare", "Sang gore", "Surnaturel"] },
      { q: "Halloween pour adultes ?", options: ["Carrément", "Bizarre", "Que pour les enfants"] },
    ],
    faq: [
      { q: "Combien d'amis pour une soirée Halloween ?", a: "Optimal : 8-15 personnes. À 5, ça stagne. À 20+, ça déborde." },
      { q: "Sondage costume à quel moment ?", a: "1 semaine avant, pour laisser le temps de commander/préparer." },
      { q: "Et avec les enfants ?", a: "Sondages plus light : préféré dessin animé Halloween, choix du costume enfant. Pas de slasher." },
      { q: "Halloween en France, ça prend ?", a: "Lentement. La culture américaine s'installe, surtout chez les jeunes urbains. Sondages confirment la tendance." },
    ],
    related: ["soiree", "ami-amie", "famille", "drole"],
    updatedAt: today,
  },
  {
    slug: "noel-cadeau",
    locale: "fr",
    category: "idees",
    emoji: "🎄",
    title: "Sondage cadeau de Noël : 25 idées pour trancher en famille",
    h1: "Sondages Noël : cadeaux, repas, secret santa",
    description:
      "25 sondages Noël pour décider en famille : cadeaux, repas, secret santa, déco. Plus la méthode anti-débat.",
    intro:
      "Noël, c'est 200 messages WhatsApp famille pour décider du menu, du cadeau commun et du secret santa. Sondage moomz tranche en 30 minutes. Voici 25 sondages testés en famille à Noël.",
    sections: [
      {
        h: "Sondage menu Noël",
        body: "Avant le 24, lance le sondage repas : entrée (foie gras / saumon / autre), plat (chapon / poulet / autre), dessert (bûche choco / vanille / autre). La majorité gagne. Moins de débat le jour J.",
      },
      {
        h: "Sondage cadeau collectif (pour grand-parents)",
        body: "Lance un sondage entre frères/sœurs : on prend quoi pour mamie. 4 options, budget précisé. Plus de \"on a déjà offert ça l'an dernier\".",
      },
      {
        h: "Secret santa : règles",
        body: "Sondage budget : 10€ / 20€ / 30€ / 50€. Sondage thème : pratique / fun / fait main / libre. 2 sondages = règles cadrées sans débat.",
      },
      {
        h: "Sondage cadeaux enfants",
        body: "Parents qui s'organisent : sondage \"on offre quoi à Léa pour Noël ?\" entre adultes proches. Évite les doublons, cible le bon budget.",
      },
    ],
    polls: [
      { q: "Plat principal du réveillon ?", options: ["Chapon", "Dinde", "Poisson", "Végétarien"] },
      { q: "Bûche Noël ?", options: ["Chocolat", "Vanille", "Glace", "Fruits"] },
      { q: "Cadeau pour mamie ?", options: ["Bouquet + carte", "Resto en famille", "Cagnotte", "Tablette"] },
      { q: "Secret santa budget ?", options: ["10€", "20€", "30€", "50€"] },
      { q: "Décoration sapin ?", options: ["Doré classique", "Rose modern", "DIY enfants", "Pas de sapin"] },
      { q: "Réveillon chez qui ?", options: ["Chez parents", "Chez nous", "Chez frère/sœur", "On alterne"] },
      { q: "On offre des cadeaux entre adultes ?", options: ["Oui", "Non", "Secret santa seulement"] },
      { q: "Repas du 25 ?", options: ["Resto reste", "Cuisine collective", "Pause raclette", "Pas de repas"] },
      { q: "Cadeau ado de 15 ans ?", options: ["Bon Amazon", "Gadget tech", "Vêtement", "Argent"] },
      { q: "Photos famille obligatoires ?", options: ["Oui tradition", "Non corvée", "Une seule"] },
    ],
    faq: [
      { q: "Comment éviter les doublons cadeaux ?", a: "Sondage moomz entre adultes proches : \"on offre quoi à X ?\". Plus efficace que la liste de Noël chez Amazon." },
      { q: "Secret santa : tirage anonyme possible ?", a: "Le tirage Secret Santa demande un autre outil (Drawnames, Elfster). moomz fait le sondage budget/thème, pas l'attribution." },
      { q: "Sondage avec belle-mère ?", a: "Le sondage neutralise l'autorité dominante. Si elle vote A et le reste B, le résultat tombe sans débat." },
      { q: "Et pour les enfants ?", a: "Inclus-les dans les sondages déco / repas. Pas dans les sondages cadeaux (sinon spoiler)." },
    ],
    related: ["famille", "anniversaire", "voyage", "saint-valentin"],
    updatedAt: today,
  },
  {
    slug: "rentree-scolaire",
    locale: "fr",
    category: "idees",
    emoji: "📚",
    title: "Sondage rentrée scolaire : 20 idées pour profs et parents",
    h1: "Sondages rentrée scolaire : organiser la classe et les fournitures",
    description:
      "20 sondages rentrée : fournitures, classe, premier jour, sortie scolaire. Pour profs et parents d'élèves.",
    intro:
      "La rentrée scolaire est un moment de décision en masse : fournitures, choix d'options, élections de classe. Sondage moomz cadre ça pour les profs (vote en classe) et les parents (groupe WhatsApp).",
    sections: [
      {
        h: "Sondages parents d'élèves",
        body: "Pour le groupe WhatsApp parents : sondage \"on prend quel modèle de cartable ?\" (référence partagée), \"on organise un goûter de rentrée ?\", \"qui se présente pour délégué ?\". Réponse en 24h, plus de mails individuels.",
      },
      {
        h: "Sondages classe (premier jour)",
        body: "Le prof peut lancer un sondage le premier jour : \"qu'est-ce que vous attendez le plus de cette année ?\". Ice-breaker scolaire. Marche en cycle 3 et au-delà.",
      },
      {
        h: "Sondages élections délégué",
        body: "Pour l'élection du délégué de classe, sondage moomz anonyme avec les candidats. Plus crédible qu'un papier (le prof peut afficher les %), plus rapide qu'un vote à main levée (anonyme).",
      },
      {
        h: "Sondages sorties scolaires",
        body: "Pour la première sortie de l'année : 4 destinations possibles, vote de la classe. Lance le sondage au tableau interactif, chaque enfant vote sur sa tablette. Démocratie scolaire en pratique.",
      },
    ],
    polls: [
      { q: "Première sortie scolaire ?", options: ["Musée", "Parc naturel", "Cinéma", "Zoo"] },
      { q: "Délégué de classe ?", options: ["Léa", "Lucas", "Théo", "Camille"] },
      { q: "Goûter de rentrée parents d'élèves ?", options: ["Oui", "Non", "Plus tard"] },
      { q: "Modèle de cartable pour CP ?", options: ["Classique", "Avec roulettes", "Marque sport", "On laisse choisir l'enfant"] },
      { q: "Pause méridienne : cantine ou maison ?", options: ["Cantine", "Maison", "Alterner"] },
      { q: "Première lecture en classe ?", options: ["Le Petit Prince", "Charlie", "Roald Dahl", "Choix de la classe"] },
      { q: "Activité préférée ?", options: ["Sport", "Arts", "Lecture", "Sciences"] },
      { q: "On crée une asso parents d'élèves ?", options: ["Oui", "Non on a pas le temps", "On rejoint l'existante"] },
      { q: "Communication avec le prof ?", options: ["WhatsApp", "Email", "Cahier", "Tout ça"] },
      { q: "Cycle 3 : choix de la 2e langue ?", options: ["Allemand", "Espagnol", "Italien", "Chinois"] },
    ],
    faq: [
      { q: "Sondage en classe primaire : c'est ok ?", a: "Oui — le prof projette le QR code, les élèves votent depuis leur tablette ou un tel commun. Pédagogique." },
      { q: "Sondage parents d'élèves : RGPD ?", a: "moomz ne collecte aucune donnée perso. Conforme RGPD pour ce type d'usage." },
      { q: "Comment partager dans le groupe WhatsApp parents ?", a: "Colle le lien moomz, WhatsApp affiche un preview riche, parents votent." },
      { q: "Voter à plusieurs depuis le même tel ?", a: "moomz bloque les votes multiples par cookie. Pour voter à plusieurs depuis le même tel, utilise plusieurs onglets navigation privée." },
    ],
    related: ["classe-primaire", "famille", "lycee", "ado"],
    updatedAt: today,
  },
  {
    slug: "ete-plage",
    locale: "fr",
    category: "idees",
    emoji: "🏖️",
    title: "Sondage été plage : 20 idées pour amis et famille",
    h1: "Sondages été plage : organiser et débattre l'été",
    description:
      "20 sondages été pour décider entre amis ou en famille : plage, activités, restaurants, sorties.",
    intro:
      "L'été, c'est la saison où le groupe d'amis a 8 idées différentes pour chaque journée. Plage, randonnée, ville, glace ? Sondage moomz règle ça en 30 sec. Voici 20 idées sondage été testées sur le terrain.",
    sections: [
      {
        h: "Sondages journée plage",
        body: "Avant de partir : plage du Nord ou du Sud, snorkeling ou farniente, on prend la grosse glacière ou pas. Tout est tranché en 5 min, plus de débat en voiture.",
      },
      {
        h: "Sondages restaurants en vacances",
        body: "À la mer, à 6 amis, chaque resto soulève débat. Sondage 4 options proches du logement, vote, on suit. Plus de \"j'avais vu un super resto sur Insta\".",
      },
      {
        h: "Sondages activités du jour",
        body: "Le matin, sondage : plage / rando / ville / piscine. Chacun vote, on suit la majorité. Le minoritaire peut faire son truc en solo sans drama.",
      },
      {
        h: "Sondages soirée vacances",
        body: "Quel bar ce soir ? On ressort après ? On rentre tôt ? Sondage en début de soirée règle la trajectoire, plus d'éclatement du groupe à minuit.",
      },
    ],
    polls: [
      { q: "Plage aujourd'hui ?", options: ["Nord criques", "Sud sable", "Lac plus calme", "On reste à la villa"] },
      { q: "Activité demain ?", options: ["Plage", "Rando", "Ville visite", "Piscine"] },
      { q: "Resto ce soir ?", options: ["Plancha", "Pizzeria locale", "Brasserie", "On commande"] },
      { q: "On part en bateau ?", options: ["Oui 1 jour", "Demi-journée", "Non trop cher", "Non malade"] },
      { q: "Le matin ?", options: ["Lever 7h pour la fraîcheur", "Grasse mat", "Petit déj long", "Sport"] },
      { q: "Soirée vacances ?", options: ["Bar village", "Apéro à la villa", "Boîte/club", "Calme couchage"] },
      { q: "Tu mets ?", options: ["Crème 50", "Crème 30", "Rien je crame", "Parasol obligatoire"] },
      { q: "Glace préférée ?", options: ["Chocolat", "Vanille", "Pistache", "Fruits"] },
      { q: "Soirée orage : on fait quoi ?", options: ["Jeu de société", "Film", "Apéro long", "On dort"] },
      { q: "Sport vacances ?", options: ["Stand up paddle", "Beach volley", "Vélo", "Aucun"] },
    ],
    faq: [
      { q: "Combien de sondages en vacances ?", a: "1-2 par jour. Au-delà, ça devient un team building." },
      { q: "Voyage en groupe : comment éviter les tensions ?", a: "Sondage majoritaire tranche. Si tu es minoritaire, tu peux faire ton truc en solo (pas de drama)." },
      { q: "Sondage avec enfants ?", a: "Inclus-les sur les choix activités. Pas sur le budget vacances." },
      { q: "Vacances avec belle-famille ?", a: "Sondage neutralise les voix dominantes. Belle-mère vote comme tout le monde, la majorité l'emporte." },
    ],
    related: ["voyage", "famille", "ami-amie", "soiree"],
    updatedAt: today,
  },
  {
    slug: "argent-finances",
    locale: "fr",
    category: "idees",
    emoji: "💰",
    title: "Sondage argent : 20 idées de débat sur les finances perso",
    h1: "Sondages argent : débats finances perso, salaire, épargne",
    description:
      "20 sondages argent pour débattre des finances perso : salaire, épargne, investissement, dette. Anonyme.",
    intro:
      "L'argent est le tabou n°1 en France. Personne ne dit son salaire, son budget loyer, son taux d'épargne. Sondage anonyme moomz libère la parole. Voici 20 sondages argent qui révèlent les vraies pratiques de ton entourage.",
    sections: [
      {
        h: "Pourquoi le sondage anonyme sur l'argent libère",
        body: "Le tabou de l'argent en France vient de la peur du jugement. Un sondage anonyme retire ce frein. Ton entourage te révèle ce qu'il fait vraiment de son salaire, comment il épargne, ce qu'il doit. C'est éducatif et déculpabilisant.",
      },
      {
        h: "Sondages budget perso",
        body: "\"Quel pourcentage de ton revenu va au loyer ?\", \"tu mets combien de côté par mois ?\", \"tu as une dette en cours ?\". Tu apprends ce qui est normal vs ce que tu fais. Plus utile qu'un article de presse pour calibrer ta situation.",
      },
      {
        h: "Sondages investissement",
        body: "\"Tu investis en bourse ?\", \"livret A ou ETF ?\", \"crypto, oui ou non en 2026 ?\". Ces sondages aggrégés dans une communauté finance perso valent plus qu'un cours BFM.",
      },
      {
        h: "Sondages couple finances",
        body: "Pour un couple : sondage anonyme sur la transparence des salaires, le partage des frais, l'achat immo. Discussion plus saine si vous voyez d'abord chacun ses préférences avant de débattre.",
      },
    ],
    polls: [
      { q: "Pourcentage du revenu au loyer ?", options: ["Moins 25%", "25-33%", "33-40%", "Plus 40%"] },
      { q: "Tu épargnes combien/mois ?", options: ["0", "50-200€", "200-500€", "Plus de 500€"] },
      { q: "Investissement ?", options: ["Livret A", "ETF/PEA", "Crypto", "Rien"] },
      { q: "Dette en cours ?", options: ["Aucune", "Conso", "Immo", "Étudiant"] },
      { q: "Crypto en 2026 ?", options: ["Oui investi", "Curieux", "Pas pour moi", "C'est mort"] },
      { q: "Tu connais le salaire de ton/ta partenaire ?", options: ["Précis", "Approximatif", "Pas du tout"] },
      { q: "Frais de couple : ?", options: ["50-50 strict", "Au prorata des revenus", "Un paye tout", "Compte commun"] },
      { q: "Tu hérites un jour ?", options: ["Plus de 100k", "10-100k", "Moins", "Rien attendu"] },
      { q: "Salaire vs SMIC ?", options: ["Moins", "1-1.5x", "1.5-3x", "Plus de 3x"] },
      { q: "Tu paies impôts ?", options: ["Oui beaucoup", "Un peu", "Non", "PVD/Étudiant"] },
    ],
    faq: [
      { q: "Sondage argent : pas indiscret ?", a: "Anonyme = pas indiscret. Tu ne demandes pas \"combien gagnes-tu\", tu sondes des tranches. Personne n'est identifiable." },
      { q: "Pour un couple ?", a: "Outil de communication, pas de surveillance. Discutez le résultat ensemble, ne l'utilisez pas comme arme." },
      { q: "Sondage finance pro ?", a: "Risqué dans un contexte d'entreprise. L'anonymat moomz est strict, mais l'employeur peut quand même créer une mauvaise ambiance autour." },
      { q: "Ces données sont-elles fiables statistiquement ?", a: "Pour de la tendance dans un groupe oui. Pour des stats nationales, non — il faudrait un sondage représentatif." },
    ],
    related: ["debat", "couple", "rebelle", "travail-collegues"],
    updatedAt: today,
  },
  {
    slug: "politics-en",
    locale: "en",
    category: "ideas",
    emoji: "🗳️",
    title: "Political Poll Ideas (Soft Politics) — 20 Prompts for Light Debate",
    h1: "Soft Politics Poll Ideas: 20 Prompts for Light Debate",
    description:
      "20 soft political poll ideas — society, work, environment. Generate debate without ruining friendships.",
    intro:
      "Hard political polls (who you vote for) ruin friendships and dinners. Soft political polls (societal trends) generate debate without partisan tension. Here are 20 prompts that surface real opinions without burning bridges.",
    sections: [
      {
        h: "Hard vs soft political polls",
        body: "Hard: parties, candidates, elections. Polarizing, often pointless to debate. Soft: tax structure, work week, climate response, immigration policy at the system level. People can disagree without being enemies.",
      },
      {
        h: "Societal trend polls",
        body: "4-day work week, AI regulation, universal basic income, retirement age. These hit work, lifestyle, and future. Most engaged groups debate these without dropping friendships.",
      },
      {
        h: "Lifestyle politics",
        body: "Eat meat, drive a car, fly less, buy less. Lifestyle as politics. Polls reveal the gap between stated belief and actual behavior in your circle.",
      },
      {
        h: "How to keep it civil",
        body: "Anonymous polls = honest answers. Pose questions, don't argue them. Let the result speak. Resist the urge to monologue after the result drops.",
      },
    ],
    polls: [
      { q: "4-day work week — universal?", options: ["Yes", "Some industries", "No", "Already do it"] },
      { q: "Universal Basic Income — viable?", options: ["Yes", "No", "Maybe", "Don't know enough"] },
      { q: "Climate response: individual or systemic?", options: ["Individual", "Systemic", "Both", "Neither matters"] },
      { q: "AI regulation in 2026?", options: ["Stricter", "Lighter", "Status quo", "Total ban"] },
      { q: "Retirement age?", options: ["62", "65", "67", "Whenever you can"] },
      { q: "Wealth tax?", options: ["Yes higher", "Status quo", "Lower", "Abolish"] },
      { q: "Healthcare model?", options: ["Universal public", "Mixed", "Private", "Status quo"] },
      { q: "Eat meat in 2026?", options: ["Daily", "Few times week", "Rare", "Never"] },
      { q: "Own a car?", options: ["Yes", "Share", "No public transit", "EV only"] },
      { q: "Fly less for climate?", options: ["Already do", "Try", "No", "Don't fly anyway"] },
    ],
    faq: [
      { q: "Will political polls ruin friendships?", a: "Hard polls (parties) often do. Soft polls (trends) rarely. Stay on systems, not personalities." },
      { q: "Anonymous important?", a: "Critical. People give honest answers when not identified. Otherwise you get the politically correct version." },
      { q: "Workplace political polls?", a: "Risky. Even anonymous polls can poison culture if the topic is divisive. Stay neutral at work." },
      { q: "Family Thanksgiving polls?", a: "Tactical move. Anonymous polls let aunts and uncles vote honestly. Read the result aloud, watch in-laws shut up." },
    ],
    related: ["debate-en", "rebelle", "drama-polls", "would-you-rather-en"],
    updatedAt: today,
  },
  {
    slug: "sports-en",
    locale: "en",
    category: "ideas",
    emoji: "⚽",
    title: "Sports Poll Ideas — 30 Prompts for Fans & Game Day",
    h1: "Sports Polls: 30 Game-Day and Debate Prompts",
    description:
      "30 sports polls for fans: GOAT debate, game predictions, team rankings. For Twitter, Discord, and group chats.",
    intro:
      "Sports fans debate harder than anyone. GOAT? Best game ever? Worst playoff exit? Polls aggregate the fanbase. Here are 30 sports polls that drive engagement on Twitter, Discord, and group chats.",
    sections: [
      {
        h: "GOAT polls",
        body: "Every sport has its eternal GOAT debate. MJ vs LeBron, Messi vs Ronaldo, Federer vs Nadal vs Djokovic. Run a 3-4 option poll, watch your replies explode. Best engagement format in sports media.",
      },
      {
        h: "Game day prediction polls",
        body: "Pre-game: who wins, by how many, who scores first. Drives interaction during the buildup. Re-share the result post-game with \"61% of you got it right.\"",
      },
      {
        h: "Power rankings",
        body: "Weekly power rankings via fan vote. \"Who's 1 this week?\" with 4 options. Beats your subjective ranking — it's the fans' ranking.",
      },
      {
        h: "Hot take polls",
        body: "Controversial sports takes: \"is X overrated?\", \"is the new rule good?\", \"should X be traded?\". The community engagement spikes on hot takes. Use weekly, not daily.",
      },
    ],
    polls: [
      { q: "NBA GOAT?", options: ["MJ", "LeBron", "Kareem", "Kobe"] },
      { q: "Football GOAT?", options: ["Messi", "Ronaldo", "Pelé", "Maradona"] },
      { q: "Tennis GOAT?", options: ["Federer", "Nadal", "Djokovic", "Sampras"] },
      { q: "Best playoff team this year?", options: ["Lakers", "Celtics", "Nuggets", "Bucks"] },
      { q: "Best soccer league?", options: ["Premier League", "La Liga", "Bundesliga", "Serie A"] },
      { q: "Most exciting Olympic sport?", options: ["Sprint", "Gymnastics", "Diving", "Boxing"] },
      { q: "F1 GOAT?", options: ["Hamilton", "Verstappen", "Schumacher", "Senna"] },
      { q: "Best Super Bowl ever?", options: ["XLII", "LI", "LVI", "Don't watch"] },
      { q: "Biggest upset ever?", options: ["Leicester 2016", "Greece 2004", "Iceland 2016", "Other"] },
      { q: "Most overrated player today?", options: ["Player A", "Player B", "Player C", "None"] },
    ],
    faq: [
      { q: "Are sports polls good for engagement?", a: "Best format alongside drama. Sports tribalism = endless debate." },
      { q: "Should I post hot takes?", a: "Yes — but space them. 1-2 hot take polls per week, mixed with predictions and rankings." },
      { q: "Bias risk?", a: "Yes — your fanbase votes for your team. Read results with that in mind. Cross-fan polls (on Twitter) are more representative." },
      { q: "Best platforms?", a: "Twitter for sport takes (algorithm favors debate). Discord for niche fan communities. moomz for stories or external shares." },
    ],
    related: ["drama-polls", "debate-en", "gaming-jv", "discord-poll"],
    updatedAt: today,
  },
  {
    slug: "debate-en",
    locale: "en",
    category: "ideas",
    emoji: "🗣️",
    title: "Debate Poll Ideas — 30 Prompts to Spark Real Conversation",
    h1: "Debate Polls: 30 Ideas for Real Conversations",
    description:
      "30 debate polls: lifestyle, philosophy, society. Open real discussion in groups, classrooms, dinners.",
    intro:
      "When you want a real conversation — not jokes, not gossip — debate polls are the tool. Pose a question with 3-4 options that force a position, and watch the discussion go for 30 minutes. Here are 30 tested debate prompts.",
    sections: [
      {
        h: "Life choice debates",
        body: "\"Work hard at 25 to chill at 35, or vice versa?\", \"have kids early or late?\", \"buy or rent?\". Structural questions with no right answer. Hours of debate, useful for understanding values.",
      },
      {
        h: "Philosophy debates (light)",
        body: "\"Is happiness chosen or given?\", \"should you love your job or just be good at it?\". High-school philosophy framed sharp. Drop in a friend group that reads — debate lasts till the bottle is empty.",
      },
      {
        h: "Society debates",
        body: "\"Tax the ultra-rich more?\", \"AI will replace 30% of jobs in 10 years?\", \"4-day work week, universal?\". Use in politically aware groups to avoid awkwardness. Always frame as opinion-sharing, never as right-answer-finding.",
      },
      {
        h: "Lifestyle debates",
        body: "\"Move cities before 30?\", \"long vacation or many short?\", \"live alone, coop, or couple?\". More accessible than philosophy, equally structural. Perfect for mixed friend groups.",
      },
    ],
    polls: [
      { q: "Work hard early or late?", options: ["Early to chill later", "Vice versa", "Balance", "Adapt"] },
      { q: "Kids early or late?", options: ["Before 28", "28-32", "After 32", "Never"] },
      { q: "Buy or rent?", options: ["Buy", "Rent", "Investment property", "Inherit"] },
      { q: "Happiness: chosen or given?", options: ["Chosen", "Given", "Both"] },
      { q: "AI replaces 30% of jobs in 10y?", options: ["Yes", "No", "More", "Less"] },
      { q: "4-day work week universal?", options: ["Yes", "No", "Some industries"] },
      { q: "Move cities before 30?", options: ["Yes", "No", "Abroad yes"] },
      { q: "Long trip or several short?", options: ["1 long", "Several short", "Neither"] },
      { q: "Couple, coop, or solo?", options: ["Couple", "Coop", "Solo", "Family"] },
      { q: "Social media: quit?", options: ["Disconnect yes", "Keep", "Reduce"] },
    ],
    faq: [
      { q: "How to avoid clash?", a: "Frame upfront: this is anonymous opinion-sharing, not arguing for right. Keep 3-4 nuanced options." },
      { q: "Political polls in family?", a: "Risky. Family politics often goes sideways. Prefer indirect societal topics." },
      { q: "How to relaunch after the poll?", a: "Ask \"why did you vote that?\". Open question on motive keeps the conversation going 30+ min." },
      { q: "At work?", a: "Lifestyle / light philosophy: yes. Politics: avoid — office tension risk." },
    ],
    related: ["rebelle", "drama-polls", "would-you-rather-en", "polls-engagement-stats"],
    updatedAt: today,
  },
];
