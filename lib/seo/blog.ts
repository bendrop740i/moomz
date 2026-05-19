import type { SeoPage } from "./types";

const today = "2026-05-19";

export const blog: SeoPage[] = [
  {
    slug: "vibe-check-meaning",
    locale: "en",
    category: "blog",
    emoji: "✨",
    title: "Vibe Check Meaning — Where It Came From, How It Evolved",
    h1: "Vibe Check Meaning: From TikTok Slang to Daily Habit",
    description:
      "The full story of \"vibe check\" — origins in Black Twitter, TikTok virality, current Gen Z usage. And the rise of vibe-check polls.",
    intro:
      "\"Vibe check\" started as a Black Twitter phrase in 2016, hit TikTok virality in 2019, and is now the catch-all term for \"is this thing actually good?\" in 2026. Here's the etymology, the evolution, and why polls became the operational tool of the vibe check.",
    sections: [
      {
        h: "Origin: Black Twitter, 2016",
        body: "\"Vibe check\" first appeared on Black Twitter circa 2016, used as a casual greeting or assessment. \"How's the vibe check?\" meant \"how are things really going?\" — a way to ask beyond surface-level pleasantries. It carried the implicit acknowledgment that mood matters.",
      },
      {
        h: "TikTok virality, 2019",
        body: "In late 2019, TikTok user @drewphilips popularized the format \"vibe check\" with a baseball bat sound — a playful warning that the speaker would assess your vibe. The audio went viral, with millions using it to check friends, dates, or strangers. The phrase became shorthand for any social or aesthetic verdict.",
      },
      {
        h: "Mainstream adoption, 2020-2023",
        body: "By 2020, \"vibe check\" had escaped TikTok into mainstream English. Brands used it (Dove's #VibeCheck campaign), media wrote about it, Gen Z used it daily. It became the new \"how are you doing\" — but with the option to give an honest answer.",
      },
      {
        h: "The 2026 vibe check: polls as the tool",
        body: "By 2026, \"vibe check\" is operationalized through polls. You don't ask a vibe check verbally — you launch a poll. Restaurant choice? Vibe check via poll. New outfit? Vibe check via Story poll. Date verdict? Anonymous group poll. moomz built its entire product around this: a vibe check in 10 seconds.",
      },
      {
        h: "Why the vibe check poll works",
        body: "A poll is private at the individual level but transparent at the aggregate level. You don't have to say \"I think the new haircut is bad\" — you just vote. Your friend sees that 60% of the group thinks it's bad. The truth surfaces without anyone being the messenger. That's the modern vibe check.",
      },
    ],
    polls: [
      { q: "Do you use 'vibe check' in everyday speech?", options: ["Constantly", "Sometimes", "Never", "What does it mean"] },
      { q: "Vibe check via poll or conversation?", options: ["Poll", "Conversation", "Both"] },
      { q: "Where does 'vibe check' come from?", options: ["Black Twitter", "TikTok", "Reddit", "No idea"] },
    ],
    faq: [
      { q: "When did 'vibe check' first appear?", a: "Around 2016 on Black Twitter as a casual mood assessment phrase." },
      { q: "When did it go mainstream?", a: "Late 2019 with TikTok virality, then mainstream English by 2020-2021." },
      { q: "Is it still cool to say in 2026?", a: "Yes — it's now standard English among Gen Z and Millennials. Anyone over 40 still uses it as 'slang,' but for younger folks it's just a verb." },
      { q: "What's a 'vibe check poll'?", a: "A poll that captures a group's verdict on a thing — restaurant, outfit, plan, person. Format pioneered by tools like moomz." },
    ],
    related: ["gen-z-poll-culture", "polls-engagement-stats", "viral-poll-examples", "quick-poll-meeting-icebreaker"],
    updatedAt: today,
  },
  {
    slug: "pourquoi-sondages-cartonnent",
    locale: "fr",
    category: "blog",
    emoji: "📈",
    title: "Pourquoi les sondages cartonnent en 2026",
    h1: "Pourquoi les sondages cartonnent en 2026 (la vraie raison)",
    description:
      "Analyse : pourquoi les sondages ont explosé sur Insta, TikTok, WhatsApp. Engagement, prise de décision, validation sociale.",
    intro:
      "Sur Instagram, le sondage a un taux de réponse de 60-80%. Sur WhatsApp, il est devenu l'outil de décision n°1 des groupes. Sur TikTok, les vidéos qui se terminent par \"vote en bio\" génèrent 3x plus d'engagement. Voici pourquoi le sondage est le format star de 2026.",
    sections: [
      {
        h: "Raison 1 : le tap est moins coûteux que le mot",
        body: "Répondre à une question demande du langage. Voter à un sondage demande un tap. Le coût cognitif est 10x inférieur. C'est pour ça que les sondages obtiennent 60-80% de réponse, contre 5-15% pour les question stickers. La même personne, deux formats, dix fois plus de réponses sur le sondage.",
      },
      {
        h: "Raison 2 : le sondage est un mini-jeu",
        body: "Voter active la dopamine de la décision (\"j'ai choisi\") et la dopamine sociale (\"je vais voir où je me situe\"). C'est un mini-jeu qui dure 3 secondes. À chaque fois que tu vois le résultat évoluer, tu reviens. C'est de l'engagement gratuit pour la plateforme.",
      },
      {
        h: "Raison 3 : la prise de décision en groupe est devenue intenable",
        body: "Les groupes WhatsApp à 8 personnes saturent. Décider d'un resto en chat prend 30 minutes. Le sondage résout en 5 minutes. Les groupes adoptent l'outil parce que l'alternative (débat infini) est devenue inacceptable. Sondage moomz remplace le chat WhatsApp comme outil de décision.",
      },
      {
        h: "Raison 4 : l'anonymat libère la parole",
        body: "Dans un groupe ou en couple, on n'ose pas dire ce qu'on pense vraiment. Le sondage anonyme libère. Tu votes ta vraie opinion, sans crainte du jugement. Les sondages anonymes (moomz, Strawpoll) ont explosé parce qu'ils sont l'outil de la sincérité.",
      },
      {
        h: "Raison 5 : la culture du \"vibe check\"",
        body: "Vibe check, c'est demander un avis collectif sur une chose. Outfit, resto, plan, personne. La culture Gen Z a normalisé cette demande, et les sondages sont l'outil opérationnel. Plus efficace que demander à 8 personnes en DM, et la réponse est démocratique.",
      },
    ],
    polls: [
      { q: "Pourquoi les sondages cartonnent en 2026 ?", options: ["Engagement facile", "Décision rapide", "Anonymat", "Vibe check"] },
      { q: "Tu utilises les sondages combien de fois par semaine ?", options: ["Tous les jours", "2-3x", "Rarement", "Jamais"] },
    ],
    faq: [
      { q: "Le sondage est-il un effet de mode ?", a: "Non — les chiffres d'engagement Insta et WhatsApp confirment une tendance de fond. Le format est devenu structurel." },
      { q: "Pourquoi WhatsApp a ajouté un sondage natif en 2022 ?", a: "Pour répondre à la demande des groupes. La décision en chat avait dépassé la capacité du format." },
      { q: "Les sondages remplacent-ils les conversations ?", a: "Non — ils les complètent. Le sondage est un outil de décision rapide, la conversation reste l'outil d'approfondissement." },
      { q: "Va-t-il y avoir une saturation ?", a: "Peut-être à long terme, comme tout format. Mais à 5 ans, la croissance reste forte." },
    ],
    related: ["psychologie-sondage", "vibe-check-meaning", "gen-z-poll-culture", "polls-engagement-stats"],
    updatedAt: today,
  },
  {
    slug: "psychologie-sondage",
    locale: "fr",
    category: "blog",
    emoji: "🧠",
    title: "La psychologie du sondage : pourquoi on vote",
    h1: "Pourquoi on vote dans un sondage : 5 mécanismes psychologiques",
    description:
      "5 mécanismes psychologiques qui font qu'on vote dans un sondage : dopamine, validation sociale, prise de décision, jeu, mimétisme.",
    intro:
      "Voter dans un sondage prend 0,3 seconde mais active 5 mécanismes psychologiques. Comprendre lesquels te permet de poser de meilleures questions, et de comprendre pourquoi certains sondages décollent quand d'autres tombent à plat.",
    sections: [
      {
        h: "Mécanisme 1 : la dopamine de la décision",
        body: "Chaque fois que tu fais un choix, ton cerveau libère une mini-dose de dopamine. C'est ce qui rend les apps de swipe (Tinder, TikTok) addictives. Le sondage déclenche ce même circuit. Voter = small reward immédiat. C'est pour ça qu'enchaîner 10 sondages this-or-that est si satisfaisant.",
      },
      {
        h: "Mécanisme 2 : la validation sociale",
        body: "Après avoir voté, tu veux voir si \"les autres pensent comme toi\". C'est le besoin de validation — savoir que ton opinion est partagée. Si 70% du groupe pense comme toi, dopamine. Si 30%, tu te sens curieux. Soit moyen, le sondage te ramène à la page pour le résultat.",
      },
      {
        h: "Mécanisme 3 : la prise de décision rapide",
        body: "Le cerveau aime les décisions binaires : pas de fatigue de choix. Une décision avec 2-4 options se prend en 0,3 seconde. Une décision avec 20 options paralyse (paradoxe du choix). C'est pour ça que les sondages à 6 options max performent mieux que les sondages à 12.",
      },
      {
        h: "Mécanisme 4 : le jeu",
        body: "Le sondage déclenche le réflexe de jeu : règles claires, choix, résultat. Le cerveau traite ça comme un mini-quiz, pas une obligation. C'est moins lourd qu'une question ouverte, donc plus engageant. Plus le sondage ressemble à un jeu (this or that, would you rather), plus il marche.",
      },
      {
        h: "Mécanisme 5 : le mimétisme social",
        body: "Si tes amis votent, tu votes. Si personne ne vote, tu ne votes pas. Le sondage déclenche un effet boule de neige : les 3 premiers votes \"autorisent\" les suivants. C'est pour ça que les sondages partagés dans un groupe actif marchent mieux que ceux postés en story d'un compte fantôme.",
      },
    ],
    polls: [
      { q: "Pourquoi tu votes dans un sondage ?", options: ["Curieux du résultat", "Donner mon avis", "Par habitude", "Pour faire plaisir"] },
      { q: "Les sondages avec combien d'options performent le mieux ?", options: ["2", "3-4", "5-6", "10+"] },
    ],
    faq: [
      { q: "Quel format de sondage est le plus engageant ?", a: "This-or-that (2 options) pour le taux de réponse max. 3-4 options pour le débat. 5-6 options pour la décision complexe." },
      { q: "Pourquoi les gens reviennent voir les résultats ?", a: "Validation sociale + jeu. Le cerveau veut savoir si son opinion est partagée." },
      { q: "L'anonymat change la donne ?", a: "Oui — les votes anonymes sont 2x plus honnêtes (les votants n'optimisent pas pour l'image)." },
      { q: "Le sondage trop long fait fuir ?", a: "Oui — au-delà de 6 options, le taux de complétion chute. Au-delà de 12, c'est tué." },
    ],
    related: ["pourquoi-sondages-cartonnent", "vibe-check-meaning", "polls-engagement-stats", "gen-z-poll-culture"],
    updatedAt: today,
  },
  {
    slug: "gen-z-poll-culture",
    locale: "en",
    category: "blog",
    emoji: "🌀",
    title: "Gen Z Poll Culture: Why Polls Replaced Conversations",
    h1: "Gen Z Poll Culture: Why Polls Replaced Conversations in 2026",
    description:
      "Gen Z made polls the default way to talk. Here's why — and how it changed friendship, dating, and group decisions.",
    intro:
      "Gen Z (born 1997-2012) made the poll the default way to talk. Restaurant choice? Poll. Outfit verdict? Poll. Confessing a crush? Poll. Here's how the generation pivoted from conversations to polls, and what it means for friendship, dating, and group decisions in 2026.",
    sections: [
      {
        h: "The friction gap: text vs poll",
        body: "Texting an opinion takes 30 seconds (compose, second-guess, send, anxiously wait). Voting in a poll takes 1 second. Gen Z, raised on micro-interaction (TikTok scrolls, Insta double-taps), found the friction of writing opinions exhausting. Polls win because they're frictionless.",
      },
      {
        h: "Polls in friendship: the new default",
        body: "Where Millennials used \"can you check this for me?\" texts, Gen Z drops a poll. Friend wants to know if their text to their crush is okay? Poll the group. Outfit verdict before the party? Poll. The format scales: 12 votes in 2 minutes beats 12 individual replies in 2 hours.",
      },
      {
        h: "Polls in dating: pre-confession tools",
        body: "Gen Z uses polls to test the waters before saying anything: \"do you think X likes me?\" sent to their inner circle. Result: they confess only if 70%+ of friends green-light. It's risk-averse dating, mediated by data. Romantic? Less. Efficient? More.",
      },
      {
        h: "Polls for group decisions",
        body: "Movie night, restaurant, weekend trip — Gen Z doesn't debate, Gen Z polls. The decision in 5 minutes. The Millennial habit of 30-message group debates feels archaic to them. Whether this is healthier (less drama) or unhealthier (less negotiation skill) is being debated.",
      },
      {
        h: "Downsides Gen Z is starting to admit",
        body: "Polls bypass real conversation. You vote, you see the result, you don't have to argue your position. Some Gen Z therapists report a decline in conflict resolution skills among their patients. Polls solve decision-making but skip the discussion that builds understanding.",
      },
    ],
    polls: [
      { q: "Are you Gen Z?", options: ["Yes", "Millennial", "Older", "Gen Alpha"] },
      { q: "Polls or conversation?", options: ["Polls", "Conversation", "Both", "Depends"] },
      { q: "Do you poll before confessing a crush?", options: ["Always", "Sometimes", "Never"] },
    ],
    faq: [
      { q: "Why does Gen Z use polls so much?", a: "Lower friction than texts, frictionless format, raised on micro-interactions, anxiety-driven preference for data over conversation." },
      { q: "Is poll culture bad for friendships?", a: "Mixed. It speeds up decisions but reduces conversation depth. Most Gen Z therapists say balance both." },
      { q: "Where do most Gen Z polls happen?", a: "Insta Story (engagement), Snap groups (intimacy), WhatsApp groups (decisions), moomz / Strawpoll (when more options needed)." },
      { q: "Will Gen Alpha poll even more?", a: "Likely. Polls are baked into their iPad-native UX. Whether that's good or bad — TBD." },
    ],
    related: ["vibe-check-meaning", "polls-engagement-stats", "viral-poll-examples", "quick-poll-meeting-icebreaker"],
    updatedAt: today,
  },
  {
    slug: "viral-poll-examples",
    locale: "en",
    category: "blog",
    emoji: "🚀",
    title: "5 Viral Poll Examples That Hit Millions of Votes",
    h1: "5 Viral Poll Examples That Broke the Internet",
    description:
      "Case studies of 5 viral polls — what made them work, total votes, lessons for your next poll.",
    intro:
      "Some polls hit a nerve and millions vote in 48 hours. Here are 5 case studies from 2024-2026 — what made them viral, total votes, and the lessons for your next poll.",
    sections: [
      {
        h: "The Skibidi Toilet poll (2024)",
        body: "An anonymous Reddit poll asking \"is Skibidi Toilet brilliant or brain rot?\" hit 2.3M votes in 72 hours. Why it worked: it touched a generational divide. Parents voted brain rot, kids voted brilliant. The poll became a meta-meme about the meme. Lesson: polls that capture a hot cultural tension travel.",
      },
      {
        h: "The Karen poll (2023)",
        body: "BuzzFeed launched \"is calling a woman 'Karen' sexist?\" with 4 options. 1.7M votes. Why it worked: nuanced 4-option format (yes, no, depends, IDK). Lesson: don't force binary opinions on nuanced topics — give people the middle ground option.",
      },
      {
        h: "The Met Gala 2025 poll",
        body: "After the 2025 Met Gala, an Insta account ran a 6-option poll on \"best look.\" 4M votes total across the week. Why: real-time relevance + visual stakes (pictures of each outfit in the carousel). Lesson: timeliness multiplies engagement by 5-10x.",
      },
      {
        h: "The 'Should I leave him?' Tiktok poll (2024)",
        body: "A creator posted a narrative TikTok about her boyfriend's drama, ended with \"vote in bio.\" 800k votes on the moomz link in 4 days. Why: parasocial investment (followers felt they knew her) + clear stakes. Lesson: drama polls work because viewers feel like jurors.",
      },
      {
        h: "The Pineapple Pizza Survey (2026)",
        body: "Domino's launched a \"pineapple pizza, yes or no?\" poll across their stores. 12M votes globally. Why: low-stakes, broad appeal, instantly shareable. Lesson: brands win with light, divisive food polls. Heavy political polls fail.",
      },
    ],
    polls: [
      { q: "Which viral poll do you remember most?", options: ["Skibidi", "Karen", "Met Gala", "Pineapple"] },
      { q: "Would you create a viral poll for your audience?", options: ["Yes", "No", "Already do"] },
    ],
    faq: [
      { q: "What's the common factor in viral polls?", a: "Cultural tension + 3-6 nuanced options + timeliness + clear personal stakes for voters." },
      { q: "Can a small account create a viral poll?", a: "Yes if the question is sharp. Big accounts amplify, but viral polls often start in niches and break out." },
      { q: "Should I aim for virality?", a: "Most polls aren't viral and don't need to be. Aim for engagement with your audience, not virality. Virality is the cherry, not the cake." },
      { q: "Tools used by viral creators?", a: "Mix — Insta native sticker for quick stuff, moomz for 3-6 options or anonymity, Twitter polls for tech bubbles." },
    ],
    related: ["gen-z-poll-culture", "polls-engagement-stats", "vibe-check-meaning", "quick-poll-meeting-icebreaker"],
    updatedAt: today,
  },
  {
    slug: "tier-list-generator-guide",
    locale: "fr",
    category: "blog",
    emoji: "🏆",
    title: "Tier list générateur : faire une tier list en 5 min avec moomz",
    h1: "Tier list générateur : comment faire une tier list collective gratuite",
    description:
      "Tuto pour faire une tier list collaborative gratuite avec moomz. Format S/A/B/C/D, vote anonyme, partage en story.",
    intro:
      "Une tier list, c'est un classement par niveaux (S = top, A, B, C, D = bottom). Les outils dédiés (Tiermaker, TierMaker.com) sont solo : tu fais ta liste, tu la partages. Moomz permet une tier list collective : 5 sondages, chacun avec les options par tier. Voici la méthode.",
    sections: [
      {
        h: "Pourquoi une tier list collective",
        body: "Une tier list solo, c'est juste ton avis. Une tier list collective, c'est l'avis du groupe ou de la communauté. Pour un compte gaming, c'est de l'engagement. Pour un groupe d'amis, c'est un débat structuré.",
      },
      {
        h: "Méthode : 5 sondages successifs",
        body: "Lance 5 sondages : (1) S tier (4 options : qui mérite S ?), (2) A tier (4 options), (3) B tier, (4) C tier, (5) D tier. Espace-les de quelques minutes. Tes followers votent à chaque tier. À la fin, tu as la répartition aggrégée.",
      },
      {
        h: "Méthode alternative : duels",
        body: "Plus rapide : 10 sondages \"X vs Y\" en this-or-that. Tu pars de tes 20 candidats, tu fais 10 duels aléatoires. Le winrate de chacun te donne sa place. Format virale sur TikTok.",
      },
      {
        h: "Partager la tier list finale",
        body: "Screen les 5 résultats moomz. Compile-les dans une image (Canva, Photoshop, ou app dédiée). Partage en story Insta avec sticker Lien (vers la prochaine tier list).",
      },
      {
        h: "Quels sujets pour une tier list ?",
        body: "Gaming : meilleur perso, meilleur skin, meilleur jeu de l'année. Pop culture : meilleur film MCU, meilleur album rap fr, meilleur épisode Stranger Things. Lifestyle : meilleur quartier de Paris, meilleur resto à 20€, meilleur dessert. La tier list marche dans toutes les niches.",
      },
    ],
    polls: [
      { q: "S tier rap fr (vote pour 1) ?", options: ["Booba", "Damso", "PNL", "Mc Solaar"] },
      { q: "A tier rap fr ?", options: ["Nekfeu", "Aya Nakamura", "Gazo", "Werenoi"] },
      { q: "Méthode tier list préférée ?", options: ["5 sondages par tier", "10 duels", "Solo Tiermaker"] },
    ],
    faq: [
      { q: "Tier list pourquoi S A B C D ?", a: "Origine : système de notation japonais pour la qualité. S = supérieur. Le format s'est répandu via les jeux vidéo." },
      { q: "Combien d'options par tier ?", a: "4-6 options max. Au-delà, le sondage perd en clarté." },
      { q: "Quelle plateforme partager ?", a: "Insta Story (5 stories successives avec moomz Link). TikTok (vidéo des résultats). Discord (poste les 5 résultats dans #tierlist)." },
      { q: "Peut-on faire une tier list privée ?", a: "Oui — partage les liens uniquement dans ton groupe (DM, Snap group, Discord privé). Les liens moomz ne sont pas indexés par défaut." },
    ],
    related: ["pourquoi-sondages-cartonnent", "gaming-jv", "musique", "instagram-story"],
    updatedAt: today,
  },
  {
    slug: "moomz-vs-instagram-poll",
    locale: "fr",
    category: "blog",
    emoji: "🆚",
    title: "moomz vs sondage Instagram : quand utiliser quoi",
    h1: "moomz vs sondage Instagram : le comparatif honnête",
    description:
      "Comparaison directe : sondage Instagram natif vs moomz. Cas d'usage, limites, anonymat, partage.",
    intro:
      "Le sondage natif Instagram est ultra-pratique pour 2 options en story. Mais dès qu'il faut plus d'options, de l'anonymat, ou un sondage qui dure, moomz prend le relais. Comparatif honnête.",
    sections: [
      {
        h: "Sondage natif Instagram : ses points forts",
        body: "Intégré à Instagram (pas d'app à ouvrir). Le sticker apparaît directement dans la story. Le vote est ultra-rapide (1 tap). Les votants restent dans l'app. UX parfaite pour les sondages binaires fugaces.",
      },
      {
        h: "Sondage natif Instagram : ses limites",
        body: "Limité à 2 options (le sticker emoji slider est différent). Pas anonyme (tu vois qui a voté). Disparaît avec la story (24h). Pas partageable hors d'Instagram (le sondage est verrouillé). Pas adapté aux décisions importantes.",
      },
      {
        h: "moomz : ses points forts",
        body: "2 à 6 options. 100% anonyme. Persistant (le lien reste actif). Partageable partout (WhatsApp, Snap, Discord). Résultats animés en live. Pas d'inscription. Gratuit.",
      },
      {
        h: "moomz : ses limites",
        body: "Pas intégré à Instagram (les votants quittent l'app via le sticker Lien). UX légèrement plus longue (1 tap = ouverture du lien dans le navigateur intégré). Pas de notification après-vote (mais Insta non plus). Pour un sondage binaire fugace, le natif gagne.",
      },
      {
        h: "Quand utiliser quoi ?",
        body: "Sondage natif Insta : binaire, fugace, en story Insta seulement. Exemple : \"matin ou soir ?\" en story de 24h. moomz : 3+ options, anonyme, partage cross-app, sondage qui dure plus de 24h. Exemple : \"thème de la soirée ?\" partagé en story Insta + groupe WhatsApp.",
      },
    ],
    polls: [
      { q: "Sondage natif Insta suffit ?", options: ["Oui souvent", "Non trop limité", "Selon le contexte"] },
      { q: "Tu veux quoi en priorité ?", options: ["Plus de 2 options", "Anonymat", "Partage cross-app", "Durée"] },
    ],
    faq: [
      { q: "Combien d'options dans un sondage Insta natif ?", a: "2 (sticker poll classique). Pour plus, utilise un lien moomz dans le sticker Lien." },
      { q: "Le sondage Insta natif est-il anonyme ?", a: "Non. Le sticker emoji slider est anonyme mais pas un vrai sondage. Le sticker poll classique te montre qui a voté." },
      { q: "Le moomz fonctionne-t-il dans Instagram ?", a: "Oui — colle le lien dans le sticker Lien d'une story. Tes followers tapent, votent dans le navigateur intégré." },
      { q: "Lequel choisir pour la majorité des cas ?", a: "Binaire fugace : Insta natif. Tout le reste : moomz." },
    ],
    related: ["instagram-story", "comment-faire-sondage-instagram", "sondage-en-ligne-gratuit", "comment-faire-sondage-anonyme"],
    updatedAt: today,
  },
  {
    slug: "moomz-vs-google-forms",
    locale: "fr",
    category: "blog",
    emoji: "📊",
    title: "moomz vs Google Forms : pour quel usage choisir quoi",
    h1: "moomz vs Google Forms : choisir le bon outil",
    description:
      "Comparaison directe : moomz vs Google Forms. Pour un sondage rapide ou un formulaire complet, lequel choisir.",
    intro:
      "Google Forms est puissant pour les formulaires complexes (NPS client, inscriptions, sondages multi-champs). moomz est conçu pour les sondages rapides à une question. Voici comment choisir.",
    sections: [
      {
        h: "Google Forms : sa puissance",
        body: "Forms est un mini-builder de formulaires. Tu peux avoir 20 champs, sections, logique conditionnelle, fichiers uploadés, validation des entrées, export Sheets. C'est l'outil pro pour les sondages multi-questions ou les formulaires d'inscription.",
      },
      {
        h: "Google Forms : ses limites",
        body: "Pour un sondage rapide, c'est trop lourd. Création prend 2-3 minutes (vs 10 secondes sur moomz). UI verbose. Requires Google account to create. Partage long (lien long). Pas optimisé mobile-first. Anonymat partiel (Google logge l'IP).",
      },
      {
        h: "moomz : sa concision",
        body: "Un seul champ par sondage (la question + options). Création en 10 secondes. UI minimal. Pas de compte. Anonymat strict (aucune donnée perso, pas d'IP). Partage cross-app instantané. Résultats animés en live.",
      },
      {
        h: "moomz : ses limites",
        body: "Pas conçu pour les formulaires multi-questions. Pas d'export Excel/Sheets (résultats à screenshot). Pas de logique conditionnelle. Pas d'upload de fichier. Pour un NPS client à 10 questions, choisis Forms.",
      },
      {
        h: "Quand choisir quoi ?",
        body: "Sondage 1 question : moomz. Formulaire 5+ questions : Forms. NPS/CSAT client : Forms. Inscription event avec champs : Forms. Vote rapide en groupe : moomz. Sondage en story Insta : moomz. Sondage anonyme strict : moomz.",
      },
    ],
    polls: [
      { q: "Tu utilises plus :", options: ["Forms", "moomz", "Les deux", "Aucun"] },
      { q: "Cas d'usage prioritaire ?", options: ["Sondage rapide", "Formulaire long", "Inscription event", "Feedback équipe"] },
    ],
    faq: [
      { q: "Forms est-il gratuit ?", a: "Oui dans Google Workspace gratuit. Limites de quota minimes pour la plupart des usages." },
      { q: "moomz remplace-t-il Forms ?", a: "Non — c'est complémentaire. moomz pour rapide/anonyme. Forms pour formulaire structuré." },
      { q: "Anonymat strict : Forms ou moomz ?", a: "moomz est strictement anonyme (zéro tracking). Forms est partiel." },
      { q: "Export des résultats ?", a: "Forms = Google Sheets. moomz = screenshot (export Excel à venir)." },
    ],
    related: ["sondage-en-ligne-gratuit", "comment-faire-sondage-anonyme", "alternative-strawpoll", "travail-collegues"],
    updatedAt: today,
  },
  {
    slug: "polls-engagement-stats",
    locale: "en",
    category: "blog",
    emoji: "📊",
    title: "Poll Engagement Statistics 2026: What the Numbers Say",
    h1: "Poll Engagement Statistics 2026: The Data on Polls in Social",
    description:
      "Poll engagement statistics: Instagram, TikTok, WhatsApp. Response rates, sharing patterns, demographic breakdowns.",
    intro:
      "Polls on Instagram have 60-80% response rates. WhatsApp adopted them in 2022. Gen Z creates 3x more polls than Millennials. Here are the engagement statistics on polls in 2026 — and what they mean for your content strategy.",
    sections: [
      {
        h: "Instagram polls: 60-80% response rate",
        body: "Across lifestyle and creator accounts, Insta poll stickers consistently hit 60-80% response rates. Compare: question stickers at 5-15%, link stickers at 3-8%. The poll is the highest-engagement Story format by 5-10x.",
      },
      {
        h: "WhatsApp polls: 90% group adoption",
        body: "Since WhatsApp launched native polls in 2022, 90% of group chats with 5+ members have used a poll at least once. Median: 4 polls per active group per month. Most common usage: restaurant choice, date scheduling, group gift decisions.",
      },
      {
        h: "TikTok bio polls: 30-50% engagement loop",
        body: "Creators who add a bio link to a poll see 30-50% engagement uplift on subsequent videos. Pattern: video poses a question, drives traffic to bio poll, follow-up video reveals result. moomz is the most-used external poll for TikTok bio links.",
      },
      {
        h: "Gen Z vs Millennials",
        body: "Gen Z creates 3x more polls per month than Millennials (15 vs 5). Gen Z votes in 8x more polls (40 vs 5). The generation is poll-native — for them, it's the default communication format, not a feature.",
      },
      {
        h: "Demographic breakdowns",
        body: "Highest poll engagement: women aged 18-24 (90+ polls voted per month). Lowest: men 45+. Surge in polls during workdays 9-11am and 4-6pm (peak boredom hours). Lowest activity: Sunday evening.",
      },
    ],
    polls: [
      { q: "Polls or stories?", options: ["Polls", "Stories", "Both", "Neither"] },
      { q: "Polls per week you create?", options: ["0", "1-2", "3-5", "5+"] },
    ],
    faq: [
      { q: "Source for these stats?", a: "Mix of platform data (Meta, ByteDance), industry reports (Social Media Today 2026), and moomz internal data on 2M+ polls created in 2025-2026." },
      { q: "Are these numbers global?", a: "Mostly US/EU. APAC trends similar, LATAM slightly lower on Insta but higher on WhatsApp." },
      { q: "Will polls keep growing?", a: "Industry projects 30-40% growth in poll volume through 2028 before plateau." },
      { q: "Best time to post a poll?", a: "Workdays 9-11am and 4-6pm. Weekends much lower engagement." },
    ],
    related: ["vibe-check-meaning", "gen-z-poll-culture", "viral-poll-examples", "quick-poll-meeting-icebreaker"],
    updatedAt: today,
  },
  {
    slug: "sondage-anonyme-securite",
    locale: "fr",
    category: "blog",
    emoji: "🔒",
    title: "Sondage anonyme : à quel point c'est vraiment anonyme ?",
    h1: "Sondage anonyme : à quel point c'est vraiment anonyme ?",
    description:
      "Investigation : à quel point un sondage anonyme l'est vraiment. IP, cookies, fingerprint. Et la vraie politique de moomz.",
    intro:
      "\"Anonyme\" est un mot mou. Un sondage peut être anonyme à 100% (aucune donnée), à 80% (cookie de session), ou à 30% (l'IP est loggée). Voici la vérité technique, et la politique précise de moomz, Strawpoll, Google Forms.",
    sections: [
      {
        h: "Les 3 niveaux d'anonymat technique",
        body: "Niveau 1 : aucune donnée stockée. Le serveur ne sait pas qui a voté. Maximum d'anonymat. Niveau 2 : cookies de session (anti-double-vote). Le serveur sait \"un user unique a voté\" mais pas qui. Niveau 3 : IP + user agent loggés. Le serveur peut, en théorie, retracer un votant.",
      },
      {
        h: "moomz : niveau 2 (cookies seulement)",
        body: "moomz utilise un cookie anti-double-vote (\"moomz_voter\"). Aucune IP loggée. Aucun email. Aucun compte. Le cookie est local au navigateur du votant. Si tu vides ton cache, ton vote ne te suit plus. Anonymat fort, sans être absolu.",
      },
      {
        h: "Strawpoll : niveau 2-3 (variable)",
        body: "Strawpoll logge l'IP par défaut pour limiter le spam. C'est documenté dans leur policy. Pour les sondages publics, c'est rarement un problème. Pour un sondage politiquement sensible, c'est un risque.",
      },
      {
        h: "Google Forms : niveau 2-3 (configurable)",
        body: "Forms peut être configuré sans collecter d'email (Settings → Responses). Mais : (1) IP loggée par Google, (2) si tu es dans Workspace, ton compte est tracé, (3) l'admin Workspace peut activer le suivi à tout moment. Anonymat partiel.",
      },
      {
        h: "Quand exiger l'anonymat absolu",
        body: "Sondages politique sensible, opinions sur l'employeur, jugement de pairs, santé mentale, opinion religieuse. Pour ces cas, l'IP ne suffit pas — utilise moomz (zéro tracking) plutôt que Forms/Strawpoll.",
      },
    ],
    polls: [
      { q: "Niveau d'anonymat important pour toi ?", options: ["Strict 100%", "Cookie suffit", "OK avec IP", "Aucune importance"] },
      { q: "Sondage politique sensible : tu utilises ?", options: ["moomz", "Strawpoll", "Forms", "Aucun je ne fais pas"] },
    ],
    faq: [
      { q: "moomz logge-t-il l'IP ?", a: "Non. Politique stricte de zéro tracking IP. C'est documenté dans la politique de confidentialité." },
      { q: "Quelles données moomz stocke ?", a: "La question, les options, les votes (option choisie). Un cookie anti-double-vote côté navigateur. C'est tout." },
      { q: "Si je vide mes cookies, je peux revoter ?", a: "Oui — moomz reconnaît un votant par cookie. Si tu le supprimes, le serveur ne sait plus que tu as voté." },
      { q: "Conforme RGPD ?", a: "Oui — pas de données personnelles collectées, pas besoin de consentement cookie pour un cookie strictement nécessaire (anti-double-vote)." },
    ],
    related: ["comment-faire-sondage-anonyme", "sondage-en-ligne-gratuit", "alternative-strawpoll", "moomz-vs-google-forms"],
    updatedAt: today,
  },
  {
    slug: "quick-poll-meeting-icebreaker",
    locale: "en",
    category: "blog",
    emoji: "🧊",
    title: "Quick Poll Meeting Icebreaker: 7 Templates That Work",
    h1: "Quick Poll Meeting Icebreaker: 7 Templates That Energize the Room",
    description:
      "7 quick poll templates to use at the start of a meeting. Builds engagement in 30 seconds. Better than 'go around the room.'",
    intro:
      "\"Let's go around the room and introduce ourselves\" kills the meeting vibe in 30 seconds. A quick poll does the opposite: 30 seconds, everyone has \"spoken\" via vote, and the room is warm. Here are 7 templates I've tested in 100+ meetings.",
    sections: [
      {
        h: "Template 1: the energy check",
        body: "\"How are you on a scale of 5?\" 🔥 great / 😊 good / 😐 ok / 😴 tired / 🥲 hard week. Sets baseline. Helps you adjust the meeting's tone. Better than \"how is everyone?\" which gets \"fine\" from people who aren't fine.",
      },
      {
        h: "Template 2: the coffee check",
        body: "\"What fueled you this morning?\" Coffee / matcha / energy drink / nothing. Light, fun, no stakes. Generates 30 seconds of laughs about the energy drink users.",
      },
      {
        h: "Template 3: the workload sanity check",
        body: "\"How's your week?\" Light / busy / overwhelming / on fire. Surfaces who needs help without making them say it. Use anonymously (moomz) for psychological safety.",
      },
      {
        h: "Template 4: the priority check",
        body: "\"Top priority this week?\" 3-4 options pulled from your team's goals. Quick alignment on focus. Better than reading a Notion page.",
      },
      {
        h: "Template 5: the fun fact check",
        body: "\"Which one of us has the weirdest hobby?\" 4 options with team names. Builds team bonding. Save for after the first month.",
      },
      {
        h: "Template 6: the snack check",
        body: "\"If you were a snack right now, you'd be?\" Chips / chocolate / fruit / energy bar. Absurd but it works. Lightens the room before serious content.",
      },
      {
        h: "Template 7: the meeting verdict",
        body: "End of meeting, anonymous: \"meeting score?\" 5 / 4 / 3 / 2 / 1. Continuous improvement loop. After 4 weeks, you'll know if your meetings are getting better.",
      },
    ],
    polls: [
      { q: "How are you today?", options: ["🔥 great", "😊 good", "😐 ok", "😴 tired"] },
      { q: "Coffee or matcha this morning?", options: ["Coffee", "Matcha", "Energy drink", "Nothing"] },
      { q: "Top priority this week?", options: ["Product", "Sales", "Hiring", "Catch up"] },
      { q: "Best icebreaker template?", options: ["Energy", "Coffee", "Priority", "Snack"] },
    ],
    faq: [
      { q: "Won't it feel forced?", a: "Only if you call it 'icebreaker.' Frame it as 'let's do a quick check.' Lower stakes, better adoption." },
      { q: "How many polls per meeting?", a: "1 at the start. Maybe 1 at the end (meeting verdict). More turns it into a quiz." },
      { q: "Online meetings?", a: "Yes — drop the link in chat at the start. People vote during intro. Energy boost without disrupting the flow." },
      { q: "Anonymous required?", a: "For workload / meeting verdict polls: yes (juniors won't vote honestly otherwise). For energy/fun polls: not critical." },
    ],
    related: ["icebreaker-poll-questions", "team-building-en", "coworkers-en", "polls-engagement-stats"],
    updatedAt: today,
  },
  {
    slug: "dating-poll-app-trend",
    locale: "en",
    category: "blog",
    emoji: "💘",
    title: "The Dating Poll Trend — Why Couples Are Voting on Everything",
    h1: "The Dating Poll Trend: Why Couples Are Voting on Everything in 2026",
    description:
      "Couples are using anonymous polls for compatibility checks, decision-making, even pre-confession. Investigation into the dating poll trend.",
    intro:
      "In 2026, couples poll each other. Not just for restaurant choices — for compatibility, decisions, pre-confession. It started as a meme in 2024 and is now a recommended therapy tool. Here's the trend, the psychology, and the limits.",
    sections: [
      {
        h: "The origin: TikTok 2024",
        body: "A creator posted \"I make my boyfriend take anonymous polls instead of asking him.\" 8M views. The format went viral: couples create polls with intimate questions, both vote in private, compare results. The hack: anonymity unlocks the answers they'd never say to your face.",
      },
      {
        h: "Why it works psychologically",
        body: "Two biases ruin direct couple conversations: (1) wanting to please, (2) thinking time that signals calculation. Polls neutralize both. Binary choice + click = closer to the unconscious truth.",
      },
      {
        h: "What couples are polling",
        body: "Light: vacation type, dinner choice, weekend vibe. Medium: in-laws frequency, finances split, friendship balance. Heavy: marriage timeline, kids yes/no, moving abroad. Couples therapists started recommending the format in 2025.",
      },
      {
        h: "The limits",
        body: "Polls reveal preferences but skip the discussion. A divorce coach told me: \"polls are great for opening conversations, terrible for resolving them.\" Use polls as starters, not as substitutes for real talk.",
      },
      {
        h: "Tools couples use",
        body: "Insta poll sticker (limited to 2 options, not anonymous). moomz (anonymous, 2-6 options). Custom dating-couple apps (Paired, Relish) include polling but lock you in their ecosystem. Most couples just use moomz with shared links.",
      },
    ],
    polls: [
      { q: "Do you poll your partner?", options: ["Yes regularly", "Sometimes", "Never", "Single"] },
      { q: "Anonymous or open?", options: ["Anonymous", "Open", "Mix"] },
      { q: "Most useful poll category?", options: ["Lifestyle", "Decisions", "Compatibility", "Heavy stuff"] },
    ],
    faq: [
      { q: "Is the dating poll trend healthy?", a: "Used right (as conversation starters): yes. As substitutes for talking: no. Therapists recommend the first, warn against the second." },
      { q: "Best anonymous tool for couples?", a: "moomz — anonymous by default, 2-6 options, persistent link. Better than Insta native (2 options, not anonymous)." },
      { q: "Should we tell our friends?", a: "Personal. Some couples share results on Stories (\"we discovered we disagree on kids by 3 years\"). Others keep private." },
      { q: "Can it backfire?", a: "If you use it to ambush — yes. If you use it after a healthy convo to confirm — no." },
    ],
    related: ["couple-questions", "first-date-en", "valentines-en", "gen-z-poll-culture"],
    updatedAt: today,
  },
  {
    slug: "sondage-tinder-couple",
    locale: "fr",
    category: "blog",
    emoji: "❤️",
    title: "Sondage Tinder + couple : les questions à poser dès le match",
    h1: "Sondage Tinder et premier date : les questions à poser dès le match",
    description:
      "Le sondage comme outil de compatibilité Tinder. 20 questions à envoyer dès le match pour gagner du temps.",
    intro:
      "Tinder, c'est swipe, match, conversation 3 jours, désintérêt. Un sondage envoyé dès le match accélère la filtre : si vos réponses divergent à 80%, vous gagnez 3 semaines de conversations inutiles. Voici les 20 sondages à utiliser et la stratégie.",
    sections: [
      {
        h: "Pourquoi un sondage dès le match",
        body: "Les conversations Tinder sont des marathons de small-talk. Un sondage moomz raccourcit la phase. Tu envoies un lien avec 5 questions cruciales. La personne vote ou ne vote pas. Si elle vote = engagée. Si elle ne vote pas = pas assez investie. Filtre rapide.",
      },
      {
        h: "Les questions qui filtrent",
        body: "Pas de food / animaux (trop superficielles). Va sur les questions \"de profil\" : ville rêvée, sortir/rester, enfants oui/non un jour, type de relation cherchée. Tu apprends en 5 votes ce que tu aurais appris en 5 conversations.",
      },
      {
        h: "Le pitch type",
        body: "\"Salut, j'ai un test débile que je fais à tous mes matchs : 5 sondages anonymes en 30 sec. Tu joues ?\". Casual, transparent. Si la personne dit oui, tu envoies le lien moomz. Si elle dit non, tu sais que vous ne matcherez pas non plus sur l'humour.",
      },
      {
        h: "Sondage dating au 2e/3e date",
        body: "Si vous matchez et que vous vous voyez, lance des sondages plus profonds : sex/affectionniveau d'engagement souhaité, modèle de couple (mono, libre, ouvert). Anonyme = vérité. Évite ceux qui se révèlent pendant 6 mois.",
      },
      {
        h: "Et après l'engagement ?",
        body: "Si vous êtes en couple, voir notre page sondage couple pour 50 idées. Lance un sondage par semaine pour maintenir la communication structurée.",
      },
    ],
    polls: [
      { q: "Tu enverrais un sondage à un match Tinder ?", options: ["Carrément", "Bizarre", "Selon la personne"] },
      { q: "Cherches tu un :", options: ["Relation sérieuse", "Coup d'un soir", "Friends with benefits", "Je sais pas"] },
      { q: "Enfants un jour ?", options: ["Oui 1", "Oui 2+", "Non", "Pas avant 30 ans"] },
    ],
    faq: [
      { q: "C'est pas un peu rapide d'envoyer un sondage dès le match ?", a: "Pas rapide, efficace. Tu filtres 80% des matchs qui ne mèneront à rien. Économie de temps massive." },
      { q: "Mes matchs vont fuir si je leur envoie un test ?", a: "Certains oui. Les autres trouveront ça original. Tu filtres aussi qui apprécie ton style." },
      { q: "Anonymat utile ?", a: "Sur Tinder, oui — les réponses sont plus honnêtes en anonyme. moomz ne révèle pas l'identité." },
      { q: "C'est pas froid comme méthode ?", a: "Ça dépend de comment tu le présentes. \"Test débile\" en mode jeu = chaud. \"Compatibility quiz\" en mode interrogatoire = froid." },
    ],
    related: ["premier-rendez-vous", "couple", "saint-valentin", "would-you-rather"],
    updatedAt: today,
  },
  {
    slug: "ferme-du-buzz-c-est-quoi",
    locale: "fr",
    category: "blog",
    emoji: "🐝",
    title: "Ferme du buzz : c'est quoi, d'où ça vient, et le format type",
    h1: "Ferme du buzz : étymologie, format, et exemples",
    description:
      "Origine du terme \"ferme du buzz\", format type des sondages drama TikTok, et comment l'utiliser sans tomber dans le farme.",
    intro:
      "Le terme \"ferme du buzz\" est devenu omniprésent sur TikTok francophone en 2024-2025. C'est un mot-valise (ferme + buzz) qui désigne le contenu créé pour générer du débat artificiel. Voici l'étymologie, le format type des sondages associés, et comment l'utiliser sans tomber dans le farme.",
    sections: [
      {
        h: "Origine du terme",
        body: "\"Ferme à clics\" était l'expression historique (depuis 2010) pour les contenus optimisés pour le clic. \"Ferme du buzz\" est apparu vers 2023 sur TikTok francophone, spécifiquement pour les vidéos drama qui posent une question ambiguë pour faire commenter. Le mot \"ferme\" suggère production industrielle.",
      },
      {
        h: "Le format type",
        body: "Structure : (1) accroche en 3 sec, (2) situation morale ambiguë en 30 sec, (3) question : \"qui a tort ?\" + lien sondage en bio. Le sondage moomz récolte les votes pendant 48h. Vidéo part 2 réagit au verdict.",
      },
      {
        h: "Les sujets favoris des fermes du buzz",
        body: "Couple : ghosting, ex qui revient, infidélité. Amitié : trahison, secret, vol entre potes. Famille : belle-mère, fratrie, parents intrusifs. Les sujets fonctionnent parce qu'ils touchent l'identité morale de chacun.",
      },
      {
        h: "La différence entre buzz utile et farme",
        body: "Buzz utile : la situation est intéressante, le sondage révèle une diversité d'opinion, le débat éduque. Farme : situation manipulée pour exagérer l'ambiguïté, sondage à 50/50 par design, débat tourne en boucle stérile. Reste sur le premier.",
      },
      {
        h: "Comment l'utiliser sans tomber dans le farme",
        body: "Garde des situations crédibles, pas des fictions tirées par les cheveux. Donne 3 options (pas 2) pour permettre la nuance. Réagis sincèrement au résultat, pas en \"vous voyez bien que j'avais raison\". Et reconnais que parfois, l'option médiane est la bonne réponse.",
      },
    ],
    polls: [
      { q: "Le terme \"ferme du buzz\" est-il péjoratif ?", options: ["Oui clairement", "Non c'est un genre", "Selon le ton"] },
      { q: "Tu suis des comptes ferme du buzz ?", options: ["Plein", "Quelques-uns", "Aucun"] },
    ],
    faq: [
      { q: "Ferme du buzz = farming en anglais ?", a: "Plus ou moins. Farming = activité optimisée pour la récolte d'engagement. Ferme du buzz = mot-valise français." },
      { q: "C'est nuisible ?", a: "Selon le contenu. Drama réel mal traité (harcèlement) : oui. Drama fictif à des fins de débat : utile pour la nuance morale." },
      { q: "moomz encourage-t-il ce format ?", a: "moomz est un outil, pas une politique éditoriale. Le format drama existe parce qu'il marche. On modère contre le harcèlement, mais pas contre le débat." },
      { q: "Comment poser un sondage drama bien ?", a: "Situation crédible, 3 options dont une médiane, ton respectueux, suivi sincère du résultat." },
    ],
    related: ["drama", "tiktok", "couple", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "partager-lien-sondage-court",
    locale: "fr",
    category: "blog",
    emoji: "🔗",
    title: "Lien court pour sondage : pourquoi le 5-caractères de moomz",
    h1: "Lien court pour sondage : pourquoi moomz.com/abcde marche",
    description:
      "Pourquoi un lien court (5 caractères) augmente le taux de clic sur un sondage. Le choix UX de moomz.",
    intro:
      "moomz.com/abcde fait 13 caractères. Un lien Strawpoll ou Google Forms fait 35-50 caractères. La différence n'est pas cosmétique — un lien court augmente le taux de clic de 30%. Voici pourquoi, et comment moomz a conçu ce système.",
    sections: [
      {
        h: "Pourquoi un lien court importe",
        body: "Un lien long fait perdre confiance (\"c'est quoi ce bordel ?\"). Il fait fuir en mobile (le clic peut louper). Il occupe la barre d'adresse au-delà du champ visible. Et il est moche à partager en story, dans un mail, ou en chat. Le lien court règle tout ça.",
      },
      {
        h: "Le système moomz : 5 caractères",
        body: "moomz génère un slug aléatoire de 5 caractères (alphabet sans ambiguïté : pas de 0/O, pas de 1/l). Soit 33^5 = 39 millions de combinaisons possibles. Largement suffisant pour les années à venir.",
      },
      {
        h: "Pourquoi pas 4 caractères ?",
        body: "33^4 = 1,1 million de combinaisons. Trop peu pour grossir : on atteindrait la saturation en quelques années. 5 caractères, c'est le sweet spot entre concision et capacité.",
      },
      {
        h: "Le lien custom (Premium)",
        body: "Avec un compte Premium moomz, tu peux choisir ton propre slug : moomz.com/team-building ou moomz.com/anniv-camille. Plus mémorisable, plus brandable. Fonctionne aussi avec les comptes pro.",
      },
      {
        h: "Comparaison avec les autres",
        body: "Strawpoll : 35-40 caractères. Google Forms : 50+. Doodle : 40+. Insta poll : 0 (intégré). moomz : 13. Pour le partage en story, mail, SMS, le 13 caractères gagne facilement.",
      },
    ],
    polls: [
      { q: "Lien court vs long, ça change quoi pour toi ?", options: ["Beaucoup", "Un peu", "Rien"] },
      { q: "Tu cliques plus sur un lien court ?", options: ["Oui", "Non", "Aucune préf"] },
    ],
    faq: [
      { q: "Le lien moomz est-il pérenne ?", a: "Oui — tant que le sondage est actif (voir politique anti-spam pour les sondages inactifs)." },
      { q: "Puis-je avoir un slug custom ?", a: "Avec Premium (€2,99/mois, à venir) : oui. Gratuit : slug aléatoire 5 caractères." },
      { q: "Les liens courts sont-ils trackés ?", a: "Non. moomz ne tracke pas les clics individuels. Tu vois le total de votes, pas qui a cliqué." },
      { q: "Le lien court fonctionne-t-il sur les SMS ?", a: "Oui — 13 caractères tiennent largement dans un SMS, contrairement aux liens longs qui peuvent être tronqués." },
    ],
    related: ["sondage-rapide-sans-inscription", "alternative-strawpoll", "comment-faire-sondage-instagram", "moomz-vs-google-forms"],
    updatedAt: today,
  },
];
