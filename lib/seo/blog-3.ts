import type { SeoPage } from "./types";

const today = "2026-05-20";

export const blog3: SeoPage[] = [
  // ============ FR 1 ============
  {
    slug: "pourquoi-on-fait-des-sondages-tout-le-temps",
    locale: "fr",
    category: "blog",
    emoji: "🧠",
    title: "Pourquoi on fait des sondages tout le temps (vraiment)",
    h1: "Pourquoi on fait des sondages tout le temps, vraiment",
    description: `Psychologie sociale de la validation : pourquoi notre génération a remplacé "qu'est-ce que tu en penses ?" par un poll à trois options.`,
    intro: `Tu te rends compte que tu as lancé trois sondages aujourd'hui. Un sur ta tenue, un sur le resto de ce soir, un sur "il a répondu en 12h c'est mort non ?". Tu n'es pas en train de prendre des décisions — tu es en train de chercher de la validation distribuée, et le sondage est juste l'outil qui le rend acceptable socialement. Voici ce qui se passe vraiment dans ta tête.`,
    sections: [
      {
        h: "Le sondage déplace le coût de la décision",
        body: `Quand tu demandes "je mets la jupe noire ou la beige ?" à une amie, tu engages une mini-négociation : elle doit avoir une opinion, l'argumenter, peut-être te contredire, surtout te répondre dans la minute. Le sondage transforme cette interaction en un tap silencieux. Personne ne doit défendre quoi que ce soit, personne ne se sent obligé, et toi tu obtiens un score. C'est de la délégation cognitive optimisée. La psychologue sociale Sherry Turkle parle depuis dix ans de "outsourcing the inner voice" — externaliser la voix intérieure. Le sondage est l'outil par excellence de cette pratique. Tu n'as plus à savoir ce que tu penses, tu attends d'avoir 12 votes. C'est confortable, mais c'est aussi une compétence atrophiée : à force de demander, tu perds l'entraînement à trancher.`,
      },
      {
        h: "Le besoin de validation n'est pas un défaut, c'est un câblage",
        body: `Les neurosciences sociales (Lieberman, Eisenberger, Tamir) montrent que l'approbation des pairs active les mêmes régions cérébrales que la nourriture ou le sexe — striatum ventral, dopamine. Quand 8 personnes votent comme toi, ton cerveau enregistre une récompense biologique. Ce n'est pas un caprice Gen Z, c'est un héritage évolutionnaire : nos ancêtres en savane survivaient en groupe, donc être aligné avec le groupe a été sélectionné comme avantage. Le sondage moderne court-circuite cette boucle. Au lieu d'attendre l'approbation après avoir agi, tu la pré-vérifies. C'est un usage extrêmement intelligent d'un câblage extrêmement vieux. Le problème commence quand le seuil de validation requis avant de bouger devient trop élevé.`,
      },
      {
        h: "Le format anonyme change la nature de la réponse",
        body: `Étude après étude (Kosinski à Stanford, recherches du MIT Media Lab), les réponses anonymes sont systématiquement plus radicales et plus honnêtes que les réponses signées. Sur Instagram Story, tes amies voteront probablement "elle est trop belle" — parce qu'elles savent que tu vois leur nom. Sur moomz ou un sondage privé anonyme, le même groupe vote 60% "non, change". Cette asymétrie est devenue la valeur ajoutée du format : le sondage anonyme est l'un des rares outils où tu obtiens un signal non pollué par la politesse. C'est aussi pourquoi le format a explosé après NGL et Tellonym — la sincérité a un marché.`,
      },
      {
        h: "Les sondages remplacent la conversation, pas la pensée",
        body: `Une critique récurrente : "vous n'êtes plus capables de décider seuls". Faux à 80%. Ce que les sondages remplacent, ce n'est pas la pensée, c'est la conversation décisionnelle. Avant, choisir un resto à 6 prenait 40 minutes de chat WhatsApp. Maintenant, un poll, 5 minutes, c'est plié. Le temps gagné sur la logistique permet, en théorie, plus de conversation vraie sur le fond. En pratique, on remplit ce temps avec d'autres sondages. Mais le format en lui-même n'est pas le coupable — c'est le volume qui interroge.`,
      },
      {
        h: "Quand le sondage devient un problème",
        body: `Le signal qui doit t'alerter : tu lances un sondage avant d'avoir formé ton propre avis. Ce n'est plus de la validation, c'est de l'évitement. Les psychologues appellent ça "decisional outsourcing" et c'est associé chez les jeunes adultes à des taux plus élevés d'anxiété décisionnelle. La règle simple : pose-toi 10 secondes la question avant de la poser au groupe. Si tu n'as toujours pas de préférence, lance le poll. Si tu en as une, demande-toi pourquoi tu as besoin du vote. Les meilleurs sondages sont ceux où tu as déjà une opinion et où tu veux juste voir si elle est partagée — pas ceux qui choisissent pour toi.`,
      },
    ],
    polls: [
      { q: "Tu lances combien de sondages par jour ?", options: ["0-1", "2-3", "4-5", "Plus de 5"] },
      { q: "Le sondage anonyme te dit la vérité ?", options: ["Toujours plus que les amis IRL", "Souvent", "Pareil", "Non, biais aussi"] },
      { q: "Tu votes sans regarder qui a déjà voté ?", options: ["Toujours", "Souvent", "Je regarde", "Je vote selon la majorité"] },
      { q: "Pourquoi tu fais un sondage ?", options: ["Vraie indécision", "Validation de mon choix", "Curiosité", "Tuer le temps"] },
      { q: "Tu suivrais le résultat même contre ton instinct ?", options: ["Oui", "Non jamais", "Ça dépend du sujet", "Si majorité écrasante"] },
      { q: "Sondage en couple : sain ou flemme ?", options: ["Sain", "Flemme", "Les deux", "Drapeau rouge"] },
      { q: "Le pire sujet de sondage que tu as vu ?", options: ["Tenue", "Vie privée d'autrui", "Politique", "Conflit IRL"] },
      { q: "Tu as déjà changé de vie après un sondage ?", options: ["Oui", "Non", "Une fois", "Genre rompre ouais"] },
      { q: "Validation > intuition ?", options: ["Oui carrément", "Non jamais", "50/50", "Selon les jours"] },
    ],
    faq: [
      { q: "Pourquoi je fais autant de sondages ?", a: `Probablement parce que ton entourage en fait autant et que le format a un coût social très faible. Le cerveau optimise — pourquoi demander en parlant si un tap suffit.` },
      { q: "Est-ce malsain d'en faire trop ?", a: `Le seuil est qualitatif, pas quantitatif. 10 sondages par jour pour des décisions logistiques, OK. 1 sondage par semaine pour savoir si tu dois rompre, déjà plus inquiétant.` },
      { q: "Les sondages anonymes sont-ils vraiment plus honnêtes ?", a: `Oui — les études sur l'autodéclaration (Kosinski, MIT) montrent un écart de 30 à 50% entre réponses signées et anonymes sur les sujets sensibles.` },
      { q: "Comment savoir si mon sondage est utile ?", a: `Demande-toi avant : est-ce que je suis vraiment indécis(e) ? Si non, c'est de la validation. Pas grave, mais sache-le.` },
      { q: "Le sondage tue-t-il la décision personnelle ?", a: `Il peut l'atrophier si tu l'utilises systématiquement. Comme tout outil — utile à dose modérée, problématique en usage compulsif.` },
    ],
    related: ["psychologie-sondage", "pourquoi-sondages-cartonnent", "psychology-binary-choice", "vibe-check-meaning"],
    updatedAt: today,
  },

  // ============ FR 2 ============
  {
    slug: "daily-moomz-pourquoi-ca-marche",
    locale: "fr",
    category: "blog",
    emoji: "🌅",
    title: "Daily moomz : pourquoi la boucle quotidienne marche",
    h1: "Daily moomz : le BeReal du sondage, et pourquoi ça marche",
    description: `Case study : pourquoi un sondage quotidien partagé crée une boucle d'engagement plus forte qu'une feed infinie de polls aléatoires.`,
    intro: `BeReal a démontré une chose : un seul rendez-vous quotidien partagé bat n'importe quel feed infini. Daily moomz reprend ce mécanisme et l'applique au sondage. Une question, un jour, tout le monde la même. Ça ressemble à une feature triviale — c'est en fait le truc qui fait revenir les gens. Voici pourquoi.`,
    sections: [
      {
        h: "La synchronicité, pas le contenu, crée le retour",
        body: `Le coup de génie de BeReal n'a jamais été le format photo. C'était l'horaire imposé. Quand tu sais que tous tes amis voient et répondent à la même chose en même temps, l'application devient une fenêtre sociale, pas une bibliothèque. Daily moomz applique le même principe. À minuit UTC, un poll est sélectionné parmi les plus discutés. Tout le monde voit le même. Le résultat : voter devient un acte social, pas un acte solitaire. Tu votes en sachant que ton vote sera comparé à celui de millions de personnes ce soir-là, et tu reviens demain pour voir le verdict du lendemain. Cette boucle de 24h est exactement ce qui manquait au sondage classique — un rythme.`,
      },
      {
        h: `L'effet "à ne pas rater"`,
        body: `Le Daily disparaît à minuit suivant. Tu ne peux pas voter sur celui d'hier. Cette contrainte transforme la visite en obligation douce. Les data publiques d'apps comme BeReal ou Wordle montrent qu'un rendez-vous quotidien tenu pendant 7 jours d'affilée crée un comportement quasi-automatique au bout d'un mois. Notre cerveau aime les rituels prévisibles. Le Daily moomz exploite ce câblage. Il y a aussi un FOMO sain : si tu rates trop de jours, tu manques la discussion. Cette dynamique est plus puissante qu'une notification push agressive, parce que c'est l'utilisateur qui se discipline lui-même.`,
      },
      {
        h: "Un seul sujet partagé crée du langage commun",
        body: `Le sondage en feed infini est un océan. Personne ne parle du même poll. Le Daily, lui, devient un événement partagé. Si la question du jour était "tomate pizza ou ananas", tout le réseau en parle dans la même fenêtre de temps. Les commentaires, les forks, les memes — tout converge sur un seul sujet. Cette convergence crée de la culture. C'est ce que Twitter faisait par accident avec les trending topics ; le Daily moomz le fait par design. Sur le long terme, c'est exactement ce qui transforme une application en lieu, et un lieu en habitude.`,
      },
      {
        h: "La sélection algorithmique évite la fatigue",
        body: `Le Daily n'est pas aléatoire. L'algorithme privilégie les polls controversés (proche du 50/50), avec un volume minimum de votes humains, et idéalement représentatifs d'un sujet trendy. Cette curation évite deux pièges : la question évidente (90% pour un côté, no debate) et la question de niche (intéressante pour 200 personnes, vide pour le reste). Quand le Daily tombe juste, la conversation explose. Quand il rate, l'engagement chute mesurablement le lendemain. C'est ce qui rend la sélection critique — et pourquoi laisser un algorithme bête piocher au hasard tue le format.`,
      },
      {
        h: "Pourquoi BeReal a planté et ce que Daily moomz fait différemment",
        body: `BeReal a buté sur deux trucs. Un, la photo est trop chargée socialement — montrer ta tronche à 14h, c'est lourd. Deux, l'app ne proposait rien d'autre une fois la photo postée. Daily moomz contourne les deux : voter, c'est un tap, zéro performance corporelle ; et une fois le Daily voté, la home a 50 autres polls qui te retiennent. C'est un point d'entrée quotidien qui débouche sur un usage extensif, pas un rituel isolé. Le résultat — basé sur des données internes, à prendre avec recul — est un retour J+1 mesurablement supérieur à un feed sans Daily.`,
      },
    ],
    polls: [
      { q: "Tu votes au Daily moomz tous les jours ?", options: ["Oui", "Souvent", "Parfois", "Jamais"] },
      { q: "BeReal était mieux ou pire que Daily ?", options: ["Mieux", "Pire", "Pareil", "Connais pas BeReal"] },
      { q: "Un rendez-vous quotidien te fait revenir ?", options: ["Oui", "Non", "Ça dépend", "Pas le matin"] },
      { q: "Tu votes à minuit ou en journée ?", options: ["À minuit", "Matin", "Journée", "Soir tard"] },
      { q: "Le Daily devrait durer combien d'heures ?", options: ["12h", "24h", "48h", "Toute une semaine"] },
      { q: "Mieux : 1 daily ou 3 dailies par jour ?", options: ["1", "3", "Aucune préférence", "5 même"] },
      { q: "Quel format te ferait revenir ?", options: ["Daily", "Live", "Battles", "Tournois"] },
      { q: "Tu rates le Daily si t'oublies ?", options: ["Oui", "Non", "Genre 30%", "Toujours rappel"] },
    ],
    faq: [
      { q: "Comment le Daily est choisi ?", a: `Un algorithme sélectionne parmi les polls les plus discutés des 24h précédentes, en filtrant pour la controverse (50/50 préférable) et la portée du sujet.` },
      { q: "Pourquoi à minuit UTC ?", a: `Compromis global. Aucun fuseau horaire ne sera parfait. UTC garde une référence fixe, et la communauté s'adapte. C'est aussi ce que font Wordle et BeReal.` },
      { q: "Je peux voter sur le Daily d'hier ?", a: `Non. La contrainte d'unicité fait partie du design. Un Daily expiré reste consultable, mais le vote est clos.` },
      { q: "Et si le Daily est nul ce jour-là ?", a: `Ça arrive et c'est dommage. L'algorithme s'améliore mais reste imparfait. Tu peux toujours lancer ton propre sondage à côté.` },
      { q: "Pourquoi pas plusieurs Dailies ?", a: `La force du rendez-vous, c'est sa rareté. Plus tu multiplies, plus tu dilues l'événement. Un, c'est intentionnel.` },
    ],
    related: ["pourquoi-sondages-cartonnent", "fr-sondage-format-gen-z", "viral-poll-examples", "polls-engagement-stats"],
    updatedAt: today,
  },

  // ============ FR 3 ============
  {
    slug: "vibe-check-c-est-quoi-vraiment",
    locale: "fr",
    category: "blog",
    emoji: "✨",
    title: "Vibe check, c'est quoi vraiment (origine et sens)",
    h1: "Vibe check c'est quoi : l'histoire complète d'un mot Gen Z",
    description: `Origine du terme "vibe check", de Black Twitter à TikTok, et pourquoi ce mot a remplacé "comment tu vas" pour toute une génération.`,
    intro: `Tu l'as entendu partout — au bureau, sur TikTok, dans des memes. "Vibe check" est devenu un mot-valise qu'on utilise pour tout et n'importe quoi. Mais d'où il vient, et qu'est-ce qu'il signifie vraiment au-delà du buzzword ? L'histoire est plus précise et plus intéressante qu'on ne croit.`,
    sections: [
      {
        h: "Origine : Black Twitter, milieu des années 2010",
        body: `Le terme apparaît sur Black Twitter aux alentours de 2016. À l'époque, "vibe check" est utilisé comme une formule d'évaluation rapide — une manière de demander "comment tu vas vraiment" sans engager une conversation longue. C'est typique de l'argot internet noir américain qui a injecté énormément de vocabulaire dans le mainstream Gen Z des dernières années : ghosting, low-key, woke, bestie, slay, deadass. "Vibe check" suivait le même chemin, sauf que personne ne l'a vu venir. Il restait confiné à un sous-réseau Twitter jusqu'en 2019, où un audio TikTok va le propulser globalement.`,
      },
      {
        h: "L'explosion TikTok et la dérive sémantique",
        body: `Fin 2019, un créateur TikTok poste une vidéo avec un audio "vibe check" suivi d'un coup de batte de baseball, comme une menace humoristique d'évaluer l'ambiance de quelqu'un. L'audio devient viral, et le sens du mot dérive. Désormais, "vibe check" ne veut plus seulement dire "comment ça va" — ça veut dire "je teste ton énergie, et je peux te recaler". La menace est jouée, mais la fonction sociale est sérieuse : c'est un audit d'authenticité. Es-tu fun, vrai, à l'aise, ou tu es un buzzkill ? À ce moment-là, le terme entre dans le vocabulaire courant Gen Z.`,
      },
      {
        h: "L'usage en 2026 : vibe check = vérification collective",
        body: `Aujourd'hui, le sens s'est encore stabilisé. Faire un vibe check, c'est demander un verdict collectif sur quelque chose — une tenue, une personne, une décision, un plan. C'est devenu un acte distribué. Avant, tu demandais "qu'est-ce que tu en penses ?" à une amie. Maintenant, tu lances un sondage et tu vibe-checkes auprès de 50 personnes en 10 minutes. Le mot est devenu opérationnel : il décrit une pratique, pas juste une réaction. C'est ce shift sémantique qui explique pourquoi des apps entières (NGL, moomz, Tellonym) ont été construites autour de ce concept.`,
      },
      {
        h: "Vibe check vs gut feeling vs avis",
        body: `Pourquoi pas "instinct" ou "avis" alors ? Parce que les deux sont individuels. Le vibe check est explicitement collectif et atmosphérique. Tu ne demandes pas une opinion argumentée, tu demandes une lecture de l'ambiance. C'est moins rationnel que "avis" — plus proche de l'intuition partagée. C'est aussi temporaire et révisable : un vibe check d'aujourd'hui peut être démenti demain. C'est cette plasticité qui le rend si utile pour une génération qui change d'avis vite et qui valorise l'intuition collective plus que la décision posée.`,
      },
      {
        h: "Pourquoi le mot ne va pas disparaître",
        body: `Beaucoup de termes Gen Z se sont déjà périmés (yass queen, on fleek, throwing shade — datés). Vibe check résiste pour une raison : il décrit une pratique réelle qui n'a pas d'équivalent en français ou en anglais standard. "Demander l'avis de plusieurs personnes en mode rapide et atmosphérique" n'a pas de synonyme efficace. Tant que cette pratique reste centrale dans la culture sociale numérique — et elle l'est, vu l'usage des polls — le mot survit. Les termes qui meurent sont ceux qui décrivent quelque chose qui n'existe plus. Le vibe check existe plus que jamais.`,
      },
    ],
    polls: [
      { q: "Tu utilises 'vibe check' IRL ou que sur les réseaux ?", options: ["IRL aussi", "Réseaux only", "Jamais", "En anglais que"] },
      { q: "Vibe check menace ou question gentille ?", options: ["Menace", "Question", "Les deux", "Dépend du ton"] },
      { q: "T'as déjà fail un vibe check ?", options: ["Oui", "Non", "Je le saurais", "Officiellement non"] },
      { q: "Vibe check par sondage ou IRL ?", options: ["Sondage", "IRL", "Les deux", "Aucun je sais déjà"] },
      { q: "Combien de gens pour un vrai vibe check ?", options: ["3-5", "10-20", "50+", "1 suffit"] },
      { q: "Le mot va disparaître ?", options: ["Jamais", "D'ici 2 ans", "D'ici 5 ans", "Déjà mort"] },
      { q: "Tu vibe-check une personne avant un date ?", options: ["Toujours", "Souvent", "Jamais", "Que via amies"] },
      { q: "Vibe check est-il sexiste/genré ?", options: ["Non", "Un peu", "Beaucoup", "Connais pas le sujet"] },
    ],
    faq: [
      { q: "Vibe check vient de quelle année ?", a: `Le terme apparaît sur Black Twitter vers 2016, devient viral via TikTok fin 2019, mainstream en 2020.` },
      { q: "Comment on traduit en français ?", a: `Pas de traduction propre. "Audit d'ambiance", "check d'énergie", mais aucune ne capture le sens informel. Le mot reste en anglais.` },
      { q: "C'est encore cool de dire ça en 2026 ?", a: `Oui, c'est devenu standard. Plus du tout perçu comme slang neuf. C'est comme dire "OK" — banal et utile.` },
      { q: "Vibe check et sondage anonyme, c'est la même chose ?", a: `Le sondage anonyme est l'outil moderne du vibe check. Pas synonymes mais profondément liés.` },
      { q: "Qui a inventé l'expression ?", a: `Personne ne l'a "inventée". Émergence collective sur Black Twitter, popularisation TikTok par @drewphilips fin 2019.` },
    ],
    related: ["vibe-check-meaning", "gen-z-poll-culture", "psychologie-sondage", "the-rise-of-the-vibe-check-app"],
    updatedAt: today,
  },

  // ============ FR 4 ============
  {
    slug: "ask-fm-est-mort-vive-l-anonyme",
    locale: "fr",
    category: "blog",
    emoji: "🕵️",
    title: "Ask.fm est mort, vive le Q&A anonyme",
    h1: "Pourquoi le Q&A anonyme est revenu (et plus fort qu'Ask.fm)",
    description: `Du déclin d'Ask.fm au retour de NGL, Tellonym et moomz : analyse du retour en force des Q&A anonymes en 2026.`,
    intro: `Ask.fm a touché 200 millions d'utilisateurs entre 2010 et 2014, puis s'est fait incendier après une série de cas de cyberharcèlement, et a disparu de la conversation publique. Dix ans après, le Q&A anonyme est de retour, partout : NGL, Tellonym, Sendit, moomz ASK. Le phénomène est plus fort qu'à l'époque. Ce n'est pas une nostalgie — c'est une vraie évolution.`,
    sections: [
      {
        h: "Le piège d'Ask.fm : zéro modération à l'échelle",
        body: `Ask.fm avait un défaut structurel. La plateforme acceptait n'importe quel volume de questions anonymes sans filtrage, et les destinataires (souvent des ados) étaient bombardés de harcèlement. Plusieurs suicides liés à du harcèlement Ask.fm ont fait la une entre 2012 et 2014. La presse s'est jetée dessus, les régulateurs européens ont menacé, et Ask.fm n'a jamais récupéré. La leçon technique : l'anonymat sans frein devient un canal d'agression. La nouvelle vague de Q&A en est consciente. Toutes les apps actuelles ont des limites de débit (3-5 questions max par jour par expéditeur), de la détection de toxicité automatique, et un bouton "skip" rapide.`,
      },
      {
        h: "Pourquoi le format reste irremplaçable",
        body: `Malgré la catastrophe Ask.fm, le besoin n'a jamais disparu. Recevoir des questions anonymes, c'est avoir accès à ce que les gens pensent vraiment sans la couche de politesse. C'est exactement ce qui rend le format addictif. Le Q&A signé reste un rituel d'amis, courtois et lisse. Le Q&A anonyme, lui, est un canal de vérité. Tu reçois des compliments que personne n'oserait dire en face, des questions intimes que personne n'oserait poser à voix haute, et parfois des piques qui t'aident à voir des angles morts. NGL a redémarré le marché en 2022 avec 40 millions de téléchargements en six mois — preuve que la demande dormait juste sous la surface.`,
      },
      {
        h: "NGL, Tellonym, moomz ASK : ce qui les différencie",
        body: `NGL est purement Q&A sur Instagram, intégration native, pas de profil propre. Léger, viral, peu profond. Tellonym est plus mature, profil dédié, communauté, modération réputée. moomz ASK combine Q&A et sondages sur le même profil, ce qui ouvre un usage hybride : tu peux à la fois lancer un sondage à ton audience et leur ouvrir un canal Q&A. Cette combinaison est une nouveauté 2026. Sendit est positionné Snap-natif, principalement ados. Chacun a un angle d'attaque ; ils ne se cannibalisent pas autant qu'on pourrait croire.`,
      },
      {
        h: "L'anonymat n'est plus l'argument principal",
        body: `À l'époque d'Ask.fm, "anonyme" suffisait à vendre. En 2026, c'est devenu un standard. Le vrai différenciateur, c'est la qualité du flux. Les bonnes apps de Q&A anonymes investissent dans la modération AI, la détection de spam, le timing de notifications, l'esthétique des cartes partageables. C'est devenu un produit, pas une feature. Les utilisateurs sont devenus plus exigeants — ils veulent l'anonymat ET la sécurité, l'anonymat ET un design soigné, l'anonymat ET une intégration cross-app. La barrière à l'entrée pour lancer un nouveau Q&A anonyme est beaucoup plus haute aujourd'hui qu'en 2012.`,
      },
      {
        h: "Le futur : Q&A vocaux et IA-modérés",
        body: `Deux tendances émergent. Un, les Q&A vocaux — répondre en audio plutôt qu'en texte, façon Clubhouse asynchrone. Plus chaud, plus humain. Deux, la modération IA en amont — au lieu de filtrer après réception, l'IA reformule les questions agressives en versions constructives, ou les bloque entièrement. Si ces deux trends s'installent, on aura sauvé le format de ses démons d'origine et on aura inventé un nouveau canal de communication sociale. C'est probablement le terrain de jeu des deux prochaines années pour les apps de Q&A.`,
      },
    ],
    polls: [
      { q: "T'as utilisé Ask.fm à l'époque ?", options: ["Oui", "Non", "Pas connu", "Vaguement"] },
      { q: "NGL ou Tellonym ?", options: ["NGL", "Tellonym", "Les deux", "Ni l'un ni l'autre"] },
      { q: "Q&A anonyme : libérateur ou toxique ?", options: ["Libérateur", "Toxique", "Les deux", "Selon l'utilisateur"] },
      { q: "Tu réponds à toutes les questions reçues ?", options: ["Toutes", "Sélectivement", "Les positives", "J'ignore"] },
      { q: "Combien de questions par jour ?", options: ["0-1", "2-5", "5-15", "15+"] },
      { q: "L'anonymat devrait être réversible ?", options: ["Oui via plainte", "Jamais", "Pour mineur seulement", "Que pour menaces"] },
      { q: "Tu trouves le format addictif ?", options: ["Très", "Un peu", "Pas du tout", "Plus avant"] },
      { q: "Q&A anonyme à 30 ans c'est cringe ?", options: ["Non", "Un peu", "Oui carrément", "Selon le contexte"] },
    ],
    faq: [
      { q: "Pourquoi Ask.fm a coulé ?", a: `Combinaison de drames de harcèlement (notamment plusieurs suicides d'ados entre 2012-2014), pression médiatique et régulatoire, et zéro investissement de modération.` },
      { q: "NGL est-il safe ?", a: `Plus que Ask.fm grâce à la modération AI, mais reste un canal anonyme — donc à utiliser avec discernement, surtout pour les mineurs.` },
      { q: "moomz ASK est-il différent de NGL ?", a: `Oui. moomz ASK est intégré à un profil moomz avec sondages, et permet une combinaison Q&A + polls absente sur NGL.` },
      { q: "Combien de questions reçoit un utilisateur moyen ?", a: `Très variable, mais sur NGL la médiane tourne autour de 3-7 questions par jour pour un compte actif moyen.` },
      { q: "L'anonymat est vraiment garanti ?", a: `Techniquement oui pour les destinataires. Les plateformes elles-mêmes peuvent identifier (logs IP, métadonnées). Anonymat social, pas anonymat technique.` },
    ],
    related: ["anonymous-qa-ask-ngl-moomz", "creators-monetize-anonymous-qa", "fr-qa-anonyme-2026", "sondage-anonyme-securite"],
    updatedAt: today,
  },

  // ============ FR 5 ============
  {
    slug: "comment-poser-une-bonne-question-de-sondage",
    locale: "fr",
    category: "blog",
    emoji: "🎯",
    title: "Comment poser une bonne question de sondage (guide)",
    h1: "Comment poser une bonne question de sondage : le guide complet",
    description: `Les 6 règles d'une question de sondage qui obtient des votes et qui veut dire quelque chose. Erreurs courantes incluses.`,
    intro: `Tu as déjà lancé un sondage qui n'a eu aucun vote. Tu connais cette sensation. Ce n'est presque jamais le sujet — c'est la formulation. Une bonne question de sondage est un objet précis, avec des contraintes claires. Voici comment construire celles qui marchent, et pourquoi 80% des sondages que tu vois passer sont mal posés.`,
    sections: [
      {
        h: "Règle 1 : sois ultra-concret",
        body: `Une question abstraite obtient des votes paresseux. "T'aimes la musique ?" — qui ne va pas répondre oui. "Tu écouterais un album entier sans le mettre en mode aléatoire ?" — voilà une vraie question, qui sépare des comportements réels. La concrétisation force le répondant à se situer. Évite les généralités, les "en général", les "souvent". Préfère "ce mois-ci", "la dernière fois", "ce soir". Plus la question est ancrée dans une situation précise, plus la réponse vaut. C'est la première règle des sondages d'opinion en sciences sociales et c'est la première règle ignorée par 90% des sondages amateurs.`,
      },
      {
        h: "Règle 2 : 2 à 4 options, jamais plus",
        body: `Le paradoxe du choix s'applique. Avec 6 options, le taux de réponse chute de 30%. Avec 4, c'est l'optimum. Avec 2, c'est encore plus rapide mais tu perds en nuance. Le sweet spot pour 95% des cas, c'est 3 options. Si tu te retrouves avec 5 options, c'est que ta question est trop large — découpe-la en deux sondages. Une bonne question répond à un seul axe. Mets ton désir de couvrir tous les cas de côté. Tu peux toujours faire un follow-up.`,
      },
      {
        h: "Règle 3 : les options doivent vraiment s'opposer",
        body: `"Pizza ou pâtes ou burger ou sushi ?" — ce n'est pas un sondage, c'est un menu. Les options doivent représenter des positions philosophiquement différentes, pas des items interchangeables. "Pizza ou sushi ?" force un choix entre deux mondes. "Pizza ou pâtes ?" force un choix entre deux familles d'Italie. Le bon sondage révèle des camps. Si tes options peuvent toutes être justifiées par le même type de personne, tu n'as pas une question — tu as un sondage de préférence trivial qui n'apprend rien à personne.`,
      },
      {
        h: "Règle 4 : pas de question piégée",
        body: `"Tu préfères que je sois honnête ou que je te mente ?" — c'est manipulateur, pas un sondage. Toutes les options doivent être psychologiquement choisissables. Si une option fait passer le répondant pour un monstre s'il la choisit, le sondage est biaisé. Les bonnes questions sondent un vrai désaccord. Si la réponse est évidente avant le vote, le sondage n'apporte aucune information. C'est le test ultime : avant de publier, demande-toi si toi-même tu serais déchiré entre les deux options. Si non, retravaille.`,
      },
      {
        h: "Règle 5 : titre court, contexte court, options courtes",
        body: `Le sondage est lu en 3 secondes. Si ta question fait 30 mots, personne ne la lit. Cible 8-12 mots. Si tu as besoin de contexte, mets-le en sous-ligne. Les options doivent tenir en 2-4 mots chacune. La longueur tue. C'est aussi pour ça que Twitter/X garde des polls limités à 25 caractères par option — ils ont mesuré que le taux de réponse s'effondre au-delà. Sois brutal sur la coupe. Chaque mot inutile est un vote perdu.`,
      },
      {
        h: "Règle 6 : teste avec une personne avant de publier",
        body: `Lis ta question à une amie. Demande-lui de répondre dans la seconde. Si elle hésite ou demande une clarification, ta question n'est pas prête. C'est la dernière étape qu'on néglige le plus. Les meilleurs sondeurs (Pew Research, IFOP, instituts d'enquête) testent chaque question sur 5-10 personnes avant terrain — c'est ce qu'on appelle un "pilote". Tu n'as pas besoin de 10 personnes pour un sondage moomz, une suffit. Mais saute pas cette étape.`,
      },
    ],
    polls: [
      { q: "Tu prends combien de temps pour formuler une question ?", options: ["10 sec", "1 min", "5 min+", "Aucune idée j'écris"] },
      { q: "Combien d'options en moyenne ?", options: ["2", "3", "4", "5+"] },
      { q: "Tu testes ta question avant de poster ?", options: ["Jamais", "Parfois", "Toujours", "Rarement"] },
      { q: "L'erreur la plus fréquente ?", options: ["Trop d'options", "Trop abstrait", "Question piégée", "Trop long"] },
      { q: "Le pire format c'est ?", options: ["Sondage à 6 options", "Question vague", "Faux choix", "Pas de contexte"] },
      { q: "Tu repostes un sondage qui a flop ?", options: ["Oui en reformulant", "Non c'est mort", "Parfois", "Je l'efface"] },
      { q: "Sondage avec image augmente les votes ?", options: ["Beaucoup", "Un peu", "Pas du tout", "Selon l'image"] },
      { q: "Question avec emoji ?", options: ["Augmente votes", "Diminue", "Neutre", "Ça dépend"] },
    ],
    faq: [
      { q: "Combien d'options idéal ?", a: `Trois est l'optimum pour la plupart des cas. Deux pour les débats binaires, quatre maximum si vraiment nécessaire.` },
      { q: "Faut-il toujours mettre du contexte ?", a: `Non. Une bonne question se suffit. Le contexte ne sert qu'à clarifier une situation précise, pas à compenser une question floue.` },
      { q: "Faut-il un emoji dans la question ?", a: `Optionnel. Un emoji bien placé peut augmenter l'engagement de 10-15%. Trop d'emojis tue la lisibilité.` },
      { q: "Mes sondages ne reçoivent pas de vote, pourquoi ?", a: `Probablement la formulation : trop vague, trop d'options, ou les options ne s'opposent pas vraiment. Reformule en suivant les règles ci-dessus.` },
      { q: "Combien de temps un sondage doit-il rester ouvert ?", a: `Sur moomz, 24 à 72h capte 90% des votes. Au-delà, peu d'ajouts. Sur Insta Story, 24h max forcé par le format.` },
    ],
    related: ["write-poll-question-people-answer-en", "fr-ecrire-question-sondage-fait-voter", "max-poll-options-2-4-6-en", "two-vs-five-options"],
    updatedAt: today,
  },

  // ============ FR 6 ============
  {
    slug: "top-15-debats-toxic-mais-divertissants",
    locale: "fr",
    category: "blog",
    emoji: "🍕",
    title: "Top 15 débats toxic mais divertissants (ananas pizza et co)",
    h1: "Top 15 débats toxic mais divertissants : pourquoi on adore ça",
    description: `Les 15 débats qui ruinent les soirées et pourquoi ils sont psychologiquement irrésistibles. Ananas, ketchup, et autres champs de bataille.`,
    intro: `Ananas sur la pizza. Ketchup sur les pâtes. Doliprane mâché. Le siège du milieu. Ces sujets ridicules ont un pouvoir disproportionné. Ils déclenchent des débats acharnés alors qu'ils n'ont littéralement aucun enjeu. Pourquoi on adore se déchirer sur des choses sans importance ? La psychologie a une réponse, et elle est plus intéressante que le débat lui-même.`,
    sections: [
      {
        h: "1 à 5 : les classiques alimentaires",
        body: `Ananas-pizza est le débat tribal par excellence. Sam Panopoulos, un cuisinier gréco-canadien, invente la Hawaiian en 1962 à Chatham (Ontario). 60 ans plus tard, c'est devenu une marque identitaire — les gens t'annoncent leur position dès la première date. Ketchup sur pâtes, c'est plus brutal — interdit en Italie, banal en Suisse, banale dans certains pays d'Europe centrale. Coca vs Pepsi, débat des années 80 à 2000, aujourd'hui en perte de vitesse parce que la Gen Z boit moins de soda. Beurre salé vs doux, débat français pur. Mayonnaise sur les frites, débat belge-français-américain. Ces cinq débats ont une chose en commun : ils sont géographiquement signés. Ton choix dit où tu viens, plus que ce que tu aimes.`,
      },
      {
        h: "6 à 10 : les débats logistiques",
        body: `Le siège du milieu en voiture (qui s'y met ?), la fenêtre vs l'allée en avion, le couloir vs la rame en métro, payer en partagé au resto vs un par un, le pourboire à 10/15/20%. Ces cinq débats ne sont pas alimentaires, ils sont logistiques — mais ils dégénèrent autant. Pourquoi ? Parce qu'ils touchent à la justice procédurale. Quand on parle pourboire ou siège, on parle aussi de qui mérite quoi, qui mérite plus, qui mérite moins. C'est de la philosophie morale déguisée en banalité. C'est exactement pour ça qu'ils résistent à toute résolution rationnelle.`,
      },
      {
        h: "11 à 15 : les débats générationnels et culturels",
        body: `Doliprane mâché vs avalé, douche du matin vs du soir, films sous-titrés vs doublés, Apple vs Android (toujours vivant), iOS dark mode vs light. Ces débats partagent une caractéristique : ils opposent des habitudes formées tôt qu'on n'a jamais questionnées. Tu prends ta douche le matin parce que ta mère le faisait, voilà, c'est tout. Le débat existe parce que personne n'a de raison rationnelle, et personne ne veut admettre qu'il fait juste ce qu'il a toujours fait. C'est un débat sur l'arbitraire de nos propres routines, mais on ne se l'avoue pas. C'est ce qui le rend infini.`,
      },
      {
        h: "Pourquoi ces débats marchent psychologiquement",
        body: `Les débats sans enjeu sont le terrain de jeu parfait pour exercer la confrontation sociale sans risque. Si tu te disputes sur l'avortement, tu peux perdre une amitié. Si tu te disputes sur ananas-pizza, tu ne risques rien. Le cerveau adore le conflit à risque zéro — c'est de la testostérone sociale gratuite. Le sociologue Erving Goffman parlait de "rituals of confrontation" — des rituels d'affrontement codifiés qui maintiennent l'ordre social en canalisant l'agressivité dans des canaux inoffensifs. Le débat ananas-pizza est exactement ça : un rituel d'affrontement gratuit. C'est pour ça qu'il ne s'éteindra jamais.`,
      },
      {
        h: "Comment les utiliser dans tes sondages",
        body: `Ces débats sont des aimants à votes. Un sondage "ananas oui ou non" peut chopper 500 votes là où "ton resto préféré ?" en chope 30. Mais attention : utilisé trop souvent, ça lasse. La règle est de les saupoudrer, pas de baser ta stratégie dessus. Quand tu sens que ton audience est froide, lance un débat toxic. Quand tu vois que la conversation tourne en boucle, change de registre. Le débat toxic est un assaisonnement, pas le plat. Les meilleurs créateurs polls savent doser : un débat ridicule par semaine, pas par jour. Sinon, ton compte devient celui qui fait des polls de pizza et personne ne te prend au sérieux.`,
      },
    ],
    polls: [
      { q: "Ananas sur la pizza ?", options: ["Oui", "Non", "Crime"] },
      { q: "Doliprane : mâché ou avalé ?", options: ["Mâché", "Avalé", "Cassé en deux", "Effervescent only"] },
      { q: "Douche : matin ou soir ?", options: ["Matin", "Soir", "Les deux", "Ni l'un ni l'autre"] },
      { q: "Ketchup sur les pâtes ?", options: ["Oui sans honte", "Non jamais", "Que les enfants", "Crime contre l'Italie"] },
      { q: "Film : VOSTFR ou VF ?", options: ["VOSTFR", "VF", "Ça dépend", "VO sans sous-titres"] },
      { q: "Beurre salé ou doux ?", options: ["Salé", "Doux", "Demi-sel", "Sans beurre"] },
      { q: "Mayo sur les frites ?", options: ["Toujours", "Jamais", "Que belge", "Ketchup only"] },
      { q: "Apple ou Android ?", options: ["Apple", "Android", "Les deux", "M'en fous"] },
      { q: "Toilet paper : devant ou derrière ?", options: ["Devant", "Derrière", "Sans préférence", "Question de sociopathe"] },
      { q: "Saler les pâtes pendant ou après ?", options: ["Pendant", "Après", "Les deux", "Jamais saler"] },
    ],
    faq: [
      { q: "Pourquoi le débat ananas-pizza ne s'éteint pas ?", a: `Parce qu'il est devenu un marqueur identitaire à coût social nul. C'est un rituel d'affrontement gratuit qui ne risque rien.` },
      { q: "Quel est le débat le plus polarisant ?", a: `Selon nos données polls, ananas-pizza reste numéro un, suivi du débat ketchup-pâtes et du débat sur le sens du papier toilette.` },
      { q: "Ces débats sont-ils inoffensifs ?", a: `Oui à 99%. Le risque : éroder la qualité du contenu si on les utilise comme béquille permanente.` },
      { q: "Pourquoi on ne change jamais d'avis ?", a: `Parce que la position n'est pas argumentée. Elle est tribale et précoce. Argumenter contre une habitude inconsciente, c'est argumenter contre une boule de neige.` },
      { q: "Comment trancher le débat ananas-pizza ?", a: `Tu ne tranches pas. Tu votes, tu ris, tu passes à autre chose. C'est précisément le but.` },
    ],
    related: ["debat", "fr-debat-2-options", "this-or-that", "viral-poll-examples"],
    updatedAt: today,
  },

  // ============ FR 7 ============
  {
    slug: "polls-instagram-vs-stories-vs-reels",
    locale: "fr",
    category: "blog",
    emoji: "📱",
    title: "Polls Insta : Stories vs Reels vs Posts, qui gagne ?",
    h1: "Sondages Instagram : Stories vs Reels vs Posts, le vrai comparatif",
    description: `Comparatif honnête des trois formats de sondage Instagram : engagement, format, contraintes. Et pourquoi un seul est vraiment fait pour ça.`,
    intro: `Instagram a empilé les formats de sondage au fil des ans. Stories sticker, comments-as-poll sur Reels, Note polls, et même un sticker sur les posts depuis 2023. Chacun a ses fans, ses chiffres, et ses pièges. Voici le comparatif honnête, sans bullshit marketing — basé sur ce que les créateurs voient vraiment quand ils lancent un poll.`,
    sections: [
      {
        h: "Stories poll : le format historique et son problème caché",
        body: `Le sticker Stories existe depuis 2017. Taux de réponse moyen 60-80% — meilleur que n'importe quel autre format Instagram. Simple, deux options, emoji, visible 24h. C'est le format qui a popularisé le sondage sur les réseaux. Son problème caché : tu vois qui a voté quoi. Pour des questions banales (sucré ou salé), aucun souci. Pour des questions sensibles (avis sur une tenue, vibe d'une personne), tes amis savent que tu sais qu'ils ont voté. La sincérité chute de 30 à 50% selon les études anonymat. Le format reste roi pour la quantité, pas pour la qualité.`,
      },
      {
        h: "Reels poll (via comments) : l'illusion de l'engagement",
        body: `Instagram a poussé en 2024 un mécanisme où les Reels peuvent inclure un sticker poll qui pop pendant la vidéo. Sur le papier, c'est génial : tu mets ton avis pendant la lecture. En pratique, le format n'a jamais décollé. Pourquoi ? Parce que les gens regardent les Reels passivement, à 80% sans son, et ils n'ont pas le réflexe de toucher l'écran. Le taux de réponse est sous 15%. Les créateurs qui tentent finissent par revenir aux Stories ou aux comments-as-poll classiques ("tape 🔥 ou 💧"), plus efficaces parce que mieux compris.`,
      },
      {
        h: "Notes poll : la pépite sous-utilisée",
        body: `Les Notes Instagram (les petites bulles en haut du DM) ont ajouté un sticker poll en 2024. C'est le format le plus intime : seuls tes contacts proches voient. Si ton compte est small, c'est super pour avoir des votes honnêtes des gens qui te connaissent vraiment. Si ton compte est gros, c'est inutile, parce que ta Notes audience ne représente pas ton audience réelle. Format de niche, mais redoutable quand le contexte s'y prête. Beaucoup le sous-utilisent.`,
      },
      {
        h: "Post poll sticker : trop pro pour Gen Z",
        body: `Instagram a ajouté un sticker poll qu'on peut épingler sur un post (pas une story) depuis 2023. Le format vit longtemps (le post reste dans le feed) et collecte des votes sur plusieurs semaines. Bien pour les comptes business ou créateurs qui veulent garder un sondage actif au-delà des 24h Story. Mais le format est rare, mal compris, et la majorité des utilisateurs Gen Z ne savent même pas qu'il existe. Idéal pour B2B ou pour un compte qui a un usage analytique du poll. Pas idéal pour le vibe check casual.`,
      },
      {
        h: "Le verdict : Stories pour le volume, externe pour la sincérité",
        body: `Si tu veux 500 votes en 24h sur "fond bleu ou rouge", Stories gagne. Si tu veux 50 votes honnêtes sur "est-ce que ma relation est saine", aucun format Instagram ne suffit — parce qu'aucun n'est anonyme à l'égard de tes amis. C'est exactement pour ça que des outils externes comme moomz se sont taillés une part de marché : ils sont l'extension naturelle du sondage Instagram. Tu lances Stories pour le volume, et tu colles un lien moomz dans une Story de suivi pour les questions sensibles. Combinaison la plus efficace en 2026.`,
      },
    ],
    polls: [
      { q: "Tu votes le plus sur quel format Instagram ?", options: ["Story sticker", "Reels", "Notes", "Posts"] },
      { q: "Story poll est-il vraiment anonyme ?", options: ["Oui", "Non l'auteur voit", "Sais pas", "Selon les comptes"] },
      { q: "Tu lances combien de Story polls par mois ?", options: ["0", "1-5", "5-20", "20+"] },
      { q: "Notes poll : utile ou gadget ?", options: ["Utile", "Gadget", "Connais pas", "Selon contexte"] },
      { q: "Tu votes plus souvent ou moins qu'en 2024 ?", options: ["Plus", "Moins", "Pareil", "J'ai quitté Instagram"] },
      { q: "Le pire format Instagram pour les polls ?", options: ["Reels poll", "Posts", "Notes", "Tous bons"] },
      { q: "Tu utiliserais un outil externe ?", options: ["Oui pour anonymat", "Non flemme", "Déjà le cas", "Selon l'app"] },
      { q: "Insta polls remplacent les texts en groupe ?", options: ["Oui carrément", "Non", "Un peu", "Les complètent"] },
    ],
    faq: [
      { q: "Le Story poll est-il anonyme ?", a: `Non. L'auteur voit qui a voté quoi. C'est l'un des plus gros malentendus sur le format.` },
      { q: "Combien d'options sur un Story poll ?", a: `Deux seulement, format historique. Le sticker Question permet des réponses libres mais ce n'est plus un poll.` },
      { q: "Pourquoi Reels poll ne marche pas ?", a: `Les utilisateurs regardent les Reels en mode passif, sans intention d'interaction. Le tap nécessaire casse l'expérience.` },
      { q: "Comment maximiser les votes Story ?", a: `Question courte, deux options bien opposées, contraste visuel, posté entre 18h et 22h dans le fuseau de ton audience.` },
      { q: "Story poll vs sondage externe ?", a: `Story pour volume et accessibilité. Externe (moomz, Strawpoll) pour anonymat et plus de 2 options.` },
    ],
    related: ["instagram-story", "instagram-story-poll-best-practices", "moomz-vs-instagram-poll", "comment-faire-sondage-instagram"],
    updatedAt: today,
  },

  // ============ FR 8 ============
  {
    slug: "psychologie-du-vote-anonyme",
    locale: "fr",
    category: "blog",
    emoji: "🔒",
    title: "Psychologie du vote anonyme : pourquoi on est plus honnêtes",
    h1: "Psychologie du vote anonyme : la science derrière l'effet",
    description: `Pourquoi l'anonymat fait dire la vérité ? 5 mécanismes psychologiques expliquent l'écart entre vote signé et vote anonyme.`,
    intro: `Demande à 10 amies si ta robe est moche. Toutes diront "non, elle est bien". Lance un sondage anonyme avec la même question — 4 diront "ouais elle est moche". Cette asymétrie est documentée depuis les années 50 en psychologie sociale, et elle fonde l'utilité réelle des outils de vote anonyme. Voici les cinq mécanismes en jeu.`,
    sections: [
      {
        h: "1. La désirabilité sociale",
        body: `Notion fondatrice de la psychologie sociale (Edwards, 1957). Dès qu'on est identifié, on biaise nos réponses vers ce qu'on pense être attendu. C'est inconscient à 80%. Si tu sais que dire "j'ai voté FN" en ligne va te faire perdre des amis, tu réponds "abstention" même dans un cadre supposé confidentiel. L'anonymat coupe ce biais à la racine. C'est mesurable : les sondages politiques anonymes prédisent mieux les votes réels que les sondages signés, et l'écart se creuse plus les sujets sont sensibles. Pour des sujets banals (couleur de chemise), l'écart est minime. Pour des sujets identitaires, il peut atteindre 30-50%.`,
      },
      {
        h: "2. La peur des représailles",
        body: `Dans un cadre où le destinataire peut voir qui a dit quoi, le répondant calcule. "Si je dis que sa nouvelle copine est nulle, et qu'il l'apprend, je perds l'amitié." Cette anticipation tue la sincérité. L'anonymat élimine la possibilité même du calcul. Le répondant peut être honnête sans risque social. C'est exactement la valeur ajoutée d'apps comme NGL ou moomz ASK : tu peux dire le truc difficile sans payer le prix social. C'est aussi pour ça que les enquêtes RH en entreprise sont systématiquement anonymes — sinon, personne ne dit la vérité sur son manager.`,
      },
      {
        h: "3. La levée de l'autocensure",
        body: `Au-delà de la peur, il y a la pudeur. Beaucoup de gens ne disent pas certaines choses parce qu'ils trouvent que c'est "pas leur place". Une voisine peut penser que la nouvelle déco de ton salon est ratée, mais elle ne va pas te le dire parce qu'elle se trouve illégitime à juger. L'anonymat lève cette autocensure. Tu peux exprimer un avis qui te paraît hors-sujet sans avoir à le justifier socialement. Beaucoup d'opinions précieuses dorment derrière ce filtre, et l'anonymat est le seul outil qui les fait sortir.`,
      },
      {
        h: `4. L'effet "ce n'est pas vraiment moi qui parle"`,
        body: `L'anonymat crée une dissociation psychologique. La personne qui vote anonyme ne se sent pas tout à fait "elle-même" — elle se sent comme un agent abstrait. Cette dissociation a un côté libérateur (sincérité) et un côté inquiétant (désinhibition). C'est le même mécanisme qui rend les commentaires anonymes plus toxiques que les commentaires signés sur Internet. L'anonymat est un outil double tranchant : il libère la vérité ET les pires impulsions. Toute plateforme anonyme qui ne modère pas le tranchant agressif finit par devenir toxique. Ask.fm en est l'exemple historique.`,
      },
      {
        h: "5. La diffusion de la responsabilité",
        body: `Quand tu votes dans un sondage anonyme à 500 votants, ta voix se dilue. Tu n'es plus responsable de "la" vérité — tu es une voix parmi 500. Cette dilution rend honnête : tu te dis "si je suis le seul à penser ça, je ne ferai pas la différence ; si beaucoup pensent comme moi, ils l'auraient dit aussi". Cette logique te pousse à voter ce que tu penses vraiment. C'est l'effet inverse du sondage à 5 personnes signé, où ta voix isolée porte tout le poids. C'est aussi pour ça que les sondages anonymes à fort échantillon sont les plus précis — la dilution active la sincérité.`,
      },
    ],
    polls: [
      { q: "Tu es plus honnête en anonyme ?", options: ["Bien plus", "Un peu", "Pareil", "Moins honnête"] },
      { q: "Quel sujet nécessite l'anonymat ?", options: ["Amour/sexe", "Politique", "Apparence", "Tous"] },
      { q: "L'anonymat te désinhibe ?", options: ["En bien", "En mal", "Les deux", "Pas du tout"] },
      { q: "Tu commenterais anonymement sur Insta ?", options: ["Oui", "Non", "Selon le post", "Déjà fait"] },
      { q: "Sondage anonyme vs signé pour avis tenue ?", options: ["Anonyme", "Signé", "Les deux", "Aucun"] },
      { q: "Le pire usage de l'anonymat c'est ?", options: ["Harcèlement", "Mensonge", "Trolling", "Aucun"] },
      { q: "L'anonymat devrait être levable en cas de menace ?", options: ["Oui toujours", "Jamais", "Sur enquête seulement", "Pour mineur seulement"] },
      { q: "Sans anonymat, le sondage perd ?", options: ["Tout son intérêt", "Beaucoup", "Un peu", "Rien"] },
    ],
    faq: [
      { q: "L'anonymat rend toujours plus honnête ?", a: `Sur sujets sensibles oui, sur sujets banals la différence est minime. Plus le sujet touche à l'identité, plus l'écart est grand.` },
      { q: "L'anonymat est-il dangereux ?", a: `Il est neutre. Combiné à une bonne modération, il libère la vérité. Sans modération, il libère aussi la toxicité.` },
      { q: "L'anonymat technique existe vraiment ?", a: `Anonymat social oui (autres utilisateurs ne te voient pas). Anonymat absolu non — la plateforme garde des logs IP.` },
      { q: "Pourquoi RH utilise des sondages anonymes ?", a: `Parce que personne ne donne d'avis honnête sur son manager s'il est identifié. Standard mondial des enquêtes climat.` },
      { q: "L'effet dilution fonctionne à partir de combien de votes ?", a: `Sensible dès 20-30 votants, fort à partir de 100. En dessous de 10, l'anonymat aide mais la dilution ne joue pas vraiment.` },
    ],
    related: ["sondage-anonyme-securite", "comment-faire-sondage-anonyme", "anonymous-vs-identified-poll-en", "ask-fm-est-mort-vive-l-anonyme"],
    updatedAt: today,
  },

  // ============ FR 9 ============
  {
    slug: "tinder-bumble-hinge-quel-poll-tester",
    locale: "fr",
    category: "blog",
    emoji: "💘",
    title: "Tinder, Bumble, Hinge : quel sondage pour quelle app ?",
    h1: "Tinder, Bumble, Hinge : quel poll tester sur quelle app",
    description: `Stratégie sondage par app de dating. Pourquoi le même poll bombe sur Tinder et fait flop sur Hinge. Et l'inverse.`,
    intro: `Les apps de dating ont fini par toutes intégrer une forme de sondage. Tinder a ses prompts. Bumble a sa fonction "compliments". Hinge a ses Voice Prompts et ses Polls integrated. Mais ils ne servent pas la même chose, et un même poll qui marche sur l'une bombe sur l'autre. Voici comment décrypter et utiliser efficacement.`,
    sections: [
      {
        h: "Tinder : volume et tri rapide",
        body: `Tinder est l'app du swipe rapide. La rétention attentionnelle moyenne sur un profil tourne autour de 3 secondes. Dans ce contexte, un poll qui marche est ultra-court, ultra-clivant, et idéalement drôle. "Ananas-pizza ?" "Sushi ou tacos ?" "Plage ou montagne ?" Ce ne sont pas des questions profondes — c'est du tri culturel ultra-rapide. Le but : éliminer les incompatibles fondamentaux en 2 secondes. Les polls profonds sur Tinder ratent. Personne ne va lire trois lignes de question. Si tu écris un poll Tinder, contraintes : 6 mots max sur la question, 2-3 options de 2 mots chacune.`,
      },
      {
        h: "Bumble : conversation engagement",
        body: `Bumble force la femme à initier le premier message (en hétéro). Le poll devient une bouée — un truc à dire qui n'est pas "salut". Les polls qui marchent sur Bumble sont des conversation starters intelligents, pas des swipes. "Est-ce qu'un weekend à Lisbonne dans deux mois c'est trop ambitieux ?" ouvre une vraie discussion. "Mariage à 25 ou 35 ?" demande une vraie réflexion. La Bumble user attend du contenu engageant — pas du gag binaire. Un poll qui marche sur Tinder peut être un mauvais poll Bumble parce que trop léger.`,
      },
      {
        h: "Hinge : intentionnel et identitaire",
        body: `Hinge est positionnée "designed to be deleted" — pour des relations sérieuses. L'audience est plus mature (25-35 majoritairement), plus diplômée en moyenne. Les polls qui marchent ici sont identitaires et révélateurs. "Si tu avais 6 mois sabbatique, tu ferais quoi ?" "L'art le plus surévalué selon toi ?" "Le pire conseil parental ?" Ces polls signalent ce que tu es vraiment, pas juste tes préférences. Hinge a même intégré des polls natifs depuis 2023. Pour réussir : pose une question qui révèle une vraie position. Pas "café ou thé" — "café tous les matins, oui ou flemme" est mieux. Le contexte change tout.`,
      },
      {
        h: "Les erreurs courantes sur les trois",
        body: `Erreur 1 : poll trop générique, ça parle à personne et ne sépare personne. Erreur 2 : poll trop intime trop tôt, ça vire malaise (Bumble surtout). Erreur 3 : poll qui te fait passer pour un troll. Si ton seul poll est "ananas-pizza ?", tu signales que tu es paresseux. Erreur 4 : poll qui n'invite pas à répondre. Un bon poll dating doit pouvoir générer un message en retour. "Plage ou montagne ?" — la réponse "montagne" donne envie de demander "lequel" ou "tu fais quoi en montagne". Si ton poll est trop fermé, la conversation meurt là.`,
      },
      {
        h: "Le hack moomz pour dating",
        body: `Beaucoup de profils sérieux utilisent maintenant des polls externes (moomz, Strawpoll) comme accroche dans la bio dating. "Avant de te swiper, vote pour mon dilemme du week-end → moomz.com/abcde". Ce hack contourne les contraintes natives des apps et crée un engagement avant même le match. Ça transforme le profil dating en mini-content piece. Attention : ça peut donner un côté "influenceur" qui repousse certains. À utiliser si ton profil correspond à ce vibe, à éviter si tu veux un positionnement plus discret.`,
      },
    ],
    polls: [
      { q: "Tu mets des polls dans tes bios dating ?", options: ["Oui", "Non", "J'y pensais", "C'est ringard"] },
      { q: "Le meilleur poll first message c'est ?", options: ["Drôle", "Sérieux", "Provocateur", "Question piège"] },
      { q: "App de dating la plus poll-friendly ?", options: ["Tinder", "Bumble", "Hinge", "Aucune"] },
      { q: "Tu réponds à un poll dans un profil ?", options: ["Souvent", "Parfois", "Jamais", "Selon le poll"] },
      { q: "Polls qui game over ?", options: ["Trop intime", "Trop générique", "Politiquement clivant", "Aucun"] },
      { q: "Polls anonymes IRL avant date ?", options: ["Oui à mes amis", "Non c'est creepy", "Selon", "Jamais"] },
      { q: "Tu prefère Tinder, Bumble ou Hinge ?", options: ["Tinder", "Bumble", "Hinge", "Aucune"] },
      { q: "Tu fais confiance aux polls dating ?", options: ["Oui", "Non", "Selon", "Game over"] },
    ],
    faq: [
      { q: "Polls efficaces pour matcher ?", a: `Oui — un poll bien placé peut tripler le taux de message après match selon les données auto-rapportées des coaches dating.` },
      { q: "Quel poll pour Tinder ?", a: `Court, clivant, drôle. Pas plus de 6 mots à la question. Le but est le tri, pas la conversation.` },
      { q: "Quel poll pour Hinge ?", a: `Identitaire, révélateur, plus posé. Hinge audience attend du contenu de qualité, pas du gag.` },
      { q: "Bumble accepte les polls externes ?", a: `Oui via bio link ou message. Pas de restriction directe.` },
      { q: "Est-ce ringard de poller dans une bio ?", a: `Pas forcément, mais à doser. Trop de polls = persona "influenceur" qui peut rebuter.` },
    ],
    related: ["sondage-tinder-couple", "dating-poll-app-trend", "tinder-hinge", "polls-as-dating-tool"],
    updatedAt: today,
  },

  // ============ FR 10 ============
  {
    slug: "evjf-evg-questions-savage-mais-drole",
    locale: "fr",
    category: "blog",
    emoji: "👰",
    title: "EVJF & EVG : questions savage mais drôles (pas chiantes)",
    h1: "EVJF & EVG : 30 questions savage mais drôles pour pas être chiante",
    description: `Le guide des questions de sondage pour EVJF et EVG qui font marrer sans devenir glauques. Avec les pièges à éviter absolument.`,
    intro: `Tu organises l'EVJF de ta meilleure amie ou l'EVG d'un pote. Tu sais que tu vas devoir lancer des sondages. Tu sais aussi que 80% de ce que tu vois sur Pinterest est soit cringe, soit trop sage, soit carrément glauque. Voici les vraies questions qui fonctionnent, et le critère pour les distinguer.`,
    sections: [
      {
        h: `Le test de la "marraine"`,
        body: `Avant de poser n'importe quelle question d'EVJF/EVG, applique ce test. Si la marraine de la mariée/du marié (typiquement 60+ ans, présente à la cérémonie) lit la question, est-ce qu'elle s'évanouit, ou est-ce qu'elle sourit en levant un sourcil ? Tu vises le sourcil. Pas l'évanouissement. C'est la ligne. Beaucoup de questions de Pinterest tombent dans l'évanouissement (trop sexuelles, trop intimes, dégradantes). D'autres tombent dans l'ennui (Pinterest blanc). La bonne zone, c'est ce sourcil. Une question savage doit être pertinente sur la personne, pas générique-trash. Mieux vaut une seule question taillée sur mesure qu'une liste de 50 questions toutes vues.`,
      },
      {
        h: "Les 10 questions EVJF qui marchent",
        body: `1) La pire date qu'elle nous a racontée ? 2) Son ex qui aurait dû finir avec elle (selon nous) ? 3) Le truc le plus cher qu'elle s'est payée et regrette ? 4) Si elle pouvait effacer une soirée de sa vie, ce serait laquelle ? 5) Sa playlist Spotify cachée la plus honteuse ? 6) Le surnom embarrassant que sa mère lui donne encore ? 7) Le mensonge qu'elle a déjà sorti au boulot ? 8) Le crush impossible de sa vie d'étudiante ? 9) Sa pire tenue de mariage déjà choisie pour les autres ? 10) Le secret qu'elle nous a fait jurer de ne jamais répéter (ne pas le répéter — juste sonder qui le connaît). Chaque question révèle, sans humilier, et déclenche une vraie discussion plutôt qu'un fou rire creux.`,
      },
      {
        h: "Les 10 questions EVG qui marchent",
        body: `1) La connerie la plus chère qu'il a faite ? 2) Le mec qui a été son meilleur ami à 12 ans et où il est maintenant ? 3) Le job qu'il a quitté en pétard ? 4) Sa pire défaite sportive ? 5) L'objet hors de prix qu'il regrette d'avoir acheté ? 6) Le voyage qu'il a annulé au dernier moment ? 7) La fois où il a menti à ses parents le plus longtemps ? 8) Son film "guilty pleasure" qu'il regarde en boucle ? 9) Le surnom qu'il déteste ? 10) La dernière fois où il a pleuré (pour de vrai). Là encore : révélateur sans dégrader. Les EVG qui marchent ne sont pas des humiliations publiques. Ils sont des opérations vérité dans un cadre bienveillant.`,
      },
      {
        h: "Les pièges à éviter absolument",
        body: `Ne sonde jamais : 1) Des trucs sexuels précis (humiliant, déplacé). 2) Des ex en présence d'un nouveau partenaire (déclenche des drames). 3) Des dettes ou problèmes d'argent (super intime). 4) Des décisions liées à la famille du conjoint (politique). 5) Des sujets santé (handicap, addiction, troubles mentaux). Le critère commun : tout ce qui crée un risque réel de blessure à long terme post-soirée. L'EVJF/EVG est censé renforcer le lien, pas créer un drame. Si tu hésites entre savage et glauque, choisis savage. Si tu hésites entre glauque et bienveillant, choisis bienveillant.`,
      },
      {
        h: "Format technique : sondage anonyme groupé",
        body: `Le format qui marche le mieux : sondage anonyme partagé en groupe WhatsApp pendant l'événement. Personne ne sait qui a répondu quoi, ce qui maximise la sincérité. moomz ou Strawpoll fonctionnent bien. Évite Instagram Story poll — pas anonyme et trop public. Lance 5-6 polls espacés dans la soirée, pas 30 d'un coup. Le rythme compte. Garde un poll "verdict du soir" pour la fin — par exemple "le moment le plus mémorable de cette EVJF ?" avec les 4 events de la soirée comme options. Ça crée une fin propre et un souvenir partagé.`,
      },
    ],
    polls: [
      { q: "EVJF idéale dure combien de jours ?", options: ["1 jour", "Weekend", "3-4 jours", "Une semaine"] },
      { q: "Activité phare d'EVJF ?", options: ["Spa", "Soirée club", "Escape game", "Cours cocktail"] },
      { q: "EVG idéale ?", options: ["Sport extrême", "Casino weekend", "Concert", "Chill à la maison"] },
      { q: "Tu sondes la mariée avant ?", options: ["Oui", "Surprise totale", "Liste de no-go", "Demi-surprise"] },
      { q: "Le pire moment d'une EVJF/EVG ?", options: ["Stripper", "Activité ratée", "Embrouille", "Trop boisson"] },
      { q: "Budget par personne ?", options: ["Moins de 100€", "100-300€", "300-500€", "500€+"] },
      { q: "Limite d'invités ?", options: ["4-6", "6-10", "10-15", "15+"] },
      { q: "Sondage par tout le monde ou que la team d'organisation ?", options: ["Tout le monde", "Team only", "Mariée veto", "Pas de sondage"] },
    ],
    faq: [
      { q: "Combien de questions sondage dans une EVJF ?", a: `5-8 espacées dans la soirée. Au-delà ça lasse, en dessous ça manque de moments collectifs.` },
      { q: "Anonyme ou signé ?", a: `Anonyme. Sinon les réponses sont fades. C'est le format qui révèle vraiment.` },
      { q: "Sondage qui peut tuer l'ambiance ?", a: `Tout ce qui touche aux ex en présence du conjoint, à l'argent, ou à la santé mentale. Évite.` },
      { q: "Outil recommandé ?", a: `moomz pour anonymat + multi-options, Strawpoll pour la simplicité, à éviter Instagram Story (pas anonyme).` },
      { q: "Inclure la mariée dans les sondages ?", a: `Oui pour certains (révélateurs sur elle-même), non pour les sondages "souvenirs" du groupe.` },
    ],
    related: ["evjf", "evg", "mariage", "fr-sondage-format-gen-z"],
    updatedAt: today,
  },

  // ============ FR 11 ============
  {
    slug: "gen-z-vs-millennials-le-vrai-debat",
    locale: "fr",
    category: "blog",
    emoji: "⚔️",
    title: "Gen Z vs Millennials : le vrai débat (data vs vibes)",
    h1: "Gen Z vs Millennials : le vrai débat, sondage par sondage",
    description: `Les vraies différences entre Gen Z et Millennials, vues à travers leurs sondages. Au-delà des clichés TikTok.`,
    intro: `Tu lis partout que la Gen Z déteste les Millennials et vice-versa. La vérité est plus précise et plus drôle. Quand on regarde les sondages réellement votés par chaque génération sur les mêmes sujets, les écarts apparaissent clairement. Voici ce que les data disent vraiment, au-delà des memes "skinny jeans" et "side part".`,
    sections: [
      {
        h: "Travail : sécurité vs sens",
        body: `Sur la question "tu changerais de job pour 20% de salaire en moins mais plus de sens", les Millennials disent oui à 38%, la Gen Z à 61%. C'est l'écart le plus net entre les deux générations sur le travail. Les Millennials ont grandi avec la crise 2008, le précaire, l'idée que sécurité = priorité. La Gen Z a grandi avec le burnout publiquement assumé, le "quiet quitting", et l'idée que le job est négociable. Ce n'est pas que la Gen Z soit "moins sérieuse" — c'est qu'elle calcule différemment. Pour elle, un job sans sens à long terme coûte plus qu'il ne rapporte. Pour le Millennial, un job sans sens à long terme reste préférable au chômage.`,
      },
      {
        h: "Relations : exclusivité vs flexibilité",
        body: `Sur "tu pourrais être en relation ouverte", les Millennials disent oui à 22%, la Gen Z à 41%. Près de deux fois plus. La normalisation du polyamour et des formats alternatifs est massivement Gen Z. Les Millennials ont importé l'open relationship du polyamour US dans les années 2010 mais le considèrent largement comme une exception. La Gen Z le considère comme une option par défaut, à débattre par couple. Conséquence pratique : les polls qui demandent "fidélité absolue oui/non" séparent radicalement les deux générations.`,
      },
      {
        h: "Argent : épargne vs expérience",
        body: `Sur "tu préfères mettre 5000€ en épargne ou en voyage", Millennials 64% épargne, Gen Z 47% épargne. La Gen Z mise plus sur l'expérience que sur l'épargne. Plusieurs facteurs : ils ont vu les Millennials économiser pour des appartements qu'ils n'achèteront jamais, ils ont vu le système retraite vaciller, ils ont vu les crises s'enchaîner. Pour eux, accumuler est moins rationnel qu'avant. Cette posture est souvent caricaturée en "ils dépensent tout", mais c'est plus une recalibration rationnelle qu'une insouciance. Si tu sondes sur l'argent, les écarts sont nets entre les deux groupes.`,
      },
      {
        h: "Réseaux sociaux : preuve sociale vs présence",
        body: `Sur "publier une photo sur Instagram pour qu'elle soit vue par tes amis", Millennials 56%, Gen Z 24%. La Gen Z a déserté le "feed Instagram" comme espace social principal, au profit des Stories, DMs et close friends. Le grid n'est plus un journal — c'est devenu une vitrine pro pour beaucoup. Les Millennials, eux, restent dans l'usage "grid = vie publique". Cet écart explique pourquoi les nouvelles features Instagram (Reels, Notes) sont conçues pour la Gen Z mais utilisées surtout par les Millennials. Les designers d'Instagram courent un cycle générationnel qu'ils ne contrôlent plus.`,
      },
      {
        h: "Politique : engagement vs cynisme",
        body: `Sur "tu fais confiance à un politique", les deux générations sont à environ 12-15% de oui. Mais sur "tu votes systématiquement aux élections", Millennials 71%, Gen Z 52%. La Gen Z est plus cynique sur le vote comme outil — préfère l'activisme direct, le boycott, la mobilisation hors-vote. Ce n'est pas désintérêt politique, c'est désintérêt électoral. C'est un point qu'on rate quand on dit "Gen Z apolitique". Ils sont politiquement actifs, juste pas via le bulletin de vote. Le sondage politique classique sous-estime massivement ce groupe.`,
      },
    ],
    polls: [
      { q: "Tu es Gen Z ou Millennial ?", options: ["Gen Z", "Millennial", "Entre les deux", "Trop vieux pour ça"] },
      { q: "Job avec sens ou job qui paie ?", options: ["Sens", "Argent", "Les deux", "Aucun"] },
      { q: "Relations ouvertes : tabou ou normal ?", options: ["Normal", "Tabou", "Selon les couples", "À éviter"] },
      { q: "Tu épargnes ou tu dépenses ?", options: ["Épargne", "Dépense", "50/50", "Pas d'argent à épargner"] },
      { q: "Instagram grid encore utile ?", options: ["Oui", "Non", "Pour le pro", "Mort"] },
      { q: "Tu votes systématiquement ?", options: ["Toujours", "Souvent", "Rarement", "Jamais"] },
      { q: "Skinny jeans : encore acceptable ?", options: ["Oui", "Non", "Selon la coupe", "Old fashion"] },
      { q: "Gen Z plus mature que Millennials ?", options: ["Plus", "Moins", "Pareil", "Selon les domaines"] },
    ],
    faq: [
      { q: "Gen Z commence quelle année ?", a: `Convention courante : Gen Z = né entre 1997 et 2012. Millennials = 1981-1996. Pas de consensus parfait mais ces dates sont les plus utilisées.` },
      { q: "Les écarts sont vraiment génératoires ou liés à l'âge ?", a: `Mix des deux. Certains comportements changent avec l'âge (épargne), d'autres restent générationnels (rapport aux réseaux).` },
      { q: "Pourquoi Gen Z vote moins ?", a: `Pas désintérêt politique mais désintérêt électoral. Préférence pour l'action directe et la mobilisation hors-vote.` },
      { q: "Les sondages reflètent bien les deux ?", a: `Avec biais. Les Millennials répondent plus volontiers aux sondages classiques. La Gen Z préfère le sondage natif TikTok/Insta.` },
      { q: "Quel sujet où les deux convergent ?", a: `Climat, santé mentale, méfiance vis-à-vis des grosses corporations. Sur ces sujets, écart faible entre les deux.` },
    ],
    related: ["gen-z-poll-culture", "ado", "fr-sondage-format-gen-z", "gen-z-takes-on-marriage-money-cancel-culture"],
    updatedAt: today,
  },

  // ============ FR 12 ============
  {
    slug: "politiquement-incorrect-comment-faire-un-poll-clivant-sans-deraper",
    locale: "fr",
    category: "blog",
    emoji: "🎭",
    title: "Comment faire un sondage clivant sans déraper",
    h1: "Poll politiquement incorrect : comment cliver sans déraper",
    description: `Le guide pour poser une question vraiment clivante sans tomber dans le racisme, le sexisme ou la blague qui finit en cancel.`,
    intro: `Les sondages les plus viraux sont ceux qui clivent. Le problème : entre "ananas-pizza" et "rétablir la peine de mort", il y a un canyon. Beaucoup de créateurs partent en croisade pour faire "audacieux" et finissent par poster des polls qui font du mal et leur valent du backlash. Voici la méthode pour cliver intelligemment sans déraper.`,
    sections: [
      {
        h: "Le test du gros titre",
        body: `Avant de poster un poll potentiellement clivant, imagine qu'un journaliste en fasse un titre. "L'app moomz lance un sondage sur X" — est-ce que tu serais à l'aise avec ce titre ? Si non, retire. C'est le test le plus efficace pour distinguer une provocation utile d'une provocation toxique. Beaucoup de polls qui semblent drôles sur le moment deviennent gênants en gros titre. La règle simple : si tu n'oserais pas en faire un tweet signé sur ton compte pro, ne le poste pas en poll anonyme non plus. L'anonymat n'absout pas. Et même un poll anonyme peut être tracé à un créateur.`,
      },
      {
        h: "Les zones rouges absolues",
        body: `Quatre catégories à éviter quasi-toujours. Un, la race et l'ethnicité utilisées comme catégories d'évaluation (jamais "qui est plus X, les Y ou les Z"). Deux, l'orientation sexuelle ou identité de genre tournée en comparaison (jamais "les Z sont-ils vraiment Y"). Trois, le handicap utilisé comme punchline. Quatre, les violences sexuelles ou suicides utilisés comme dilemmes. Ces quatre zones ne sont pas des "tabous progressistes" — c'est juste qu'aucun outil sondage ne peut traiter ces sujets sans causer du mal à quelqu'un qui le lira. Si tu veux parler de ces sujets, fais-le en texte long, pas en poll binaire.`,
      },
      {
        h: "Les zones jaunes : clivant mais possible",
        body: `Religion, politique partisane, immigration, économie, parentalité. Ces sujets sont clivants par nature, mais peuvent être traités si on respecte des règles. Un : poser le sujet comme question, pas comme affirmation. "Pour ou contre le service militaire obligatoire ?" est OK ; "le service militaire devrait être obligatoire" est moins bien. Deux : éviter les options qui rendent l'autre côté ridicule. Pas "oui — non, je suis stupide". Trois : accepter que la conversation puisse être virulente, et avoir les outils de modération prêts. Pas besoin d'éviter ces sujets — juste de les traiter avec la rigueur qu'ils méritent.`,
      },
      {
        h: "Les zones vertes : carte blanche",
        body: `Tu peux cliver à fond sans risque sur : les débats culturels (Marvel vs DC, Hamilton vs Coldplay), les habitudes générationnelles (ce que les boomers font mal), les phénomènes pop, la critique de produits ou marques (sans dégrader leurs employés), le sport, le cinéma, les rivalités locales (Paris-Marseille). Ces sujets clivent fortement, génèrent beaucoup de votes, mais ne blessent personne durablement. C'est le "sweet spot" où on cherche le pic d'engagement. Maxime à retenir : clive sur les choix, pas sur les identités. Choix = OK. Identité = jamais.`,
      },
      {
        h: "La règle de la sortie propre",
        body: `Un poll clivant doit avoir une "sortie propre" — un moyen pour les deux camps de se sentir respectés à la fin. Conclus toujours avec un commentaire qui valide les deux positions. "Verdict du poll : 60/40, débat ouvert, les deux camps ont leurs arguments". Si tu sors un poll en plantant un côté ("je vous l'avais dit, les fans de X sont des bouffons"), tu attires le drama. Si tu sors le poll en posant le constat factuel, tu attires l'engagement durable. La différence est immense en termes de croissance d'audience long-terme. Les créateurs qui durent savent cliver et atterrir doucement. Ceux qui ne savent que cliver flambent vite et disparaissent.`,
      },
    ],
    polls: [
      { q: "Tu poses des polls clivants ?", options: ["Souvent", "Parfois", "Jamais", "Que en privé"] },
      { q: "Limite acceptable d'un poll ?", options: ["Politique OK", "Politique non", "Race jamais", "Tout OK anonyme"] },
      { q: "Tu modères tes propres polls ?", options: ["Oui", "Non", "Selon", "Pas d'audience"] },
      { q: "Le plus risqué : religion, politique, race ?", options: ["Race", "Politique", "Religion", "Tous"] },
      { q: "Un poll viral doit-il être clivant ?", options: ["Toujours", "Souvent", "Pas forcément", "Jamais"] },
      { q: "Tu suivrais quelqu'un qui se cancel ?", options: ["Oui", "Non", "Selon le cancel", "Je m'en fous"] },
      { q: "Cancel culture est-il exagéré ?", options: ["Très", "Un peu", "Pas du tout", "Selon les cas"] },
      { q: "Polls anonymes protègent du backlash ?", options: ["Oui", "Non l'auteur est tracé", "Selon plateforme", "Sais pas"] },
    ],
    faq: [
      { q: "Comment ne pas se faire cancel ?", a: `Ne pose pas de polls sur l'identité (race, genre, orientation). Pose-les sur les choix et les comportements.` },
      { q: "Politique : oui ou non ?", a: `Oui, mais en mode question, pas affirmation. Et toujours avec une option qui ne ridiculise pas l'autre côté.` },
      { q: "Polls anonymes te protègent ?", a: `Partiellement. La plateforme connaît ton identité. En cas de signalement, tu n'es pas intouchable.` },
      { q: "Comment réagir si un poll dérape ?", a: `Retire le poll, présente des excuses claires (pas "désolé si tu t'es senti X"), et tire la leçon. Pas de défense corporate, ça empire.` },
      { q: "Les polls clivants génèrent vraiment plus de votes ?", a: `Oui, 2-3x plus en moyenne, mais avec un risque de backlash proportionnel. Calcul de risque/bénéfice à faire à chaque fois.` },
    ],
    related: ["debat", "rebelle", "drama", "viral-poll-formats"],
    updatedAt: today,
  },

  // ============ FR 13 ============
  {
    slug: "case-study-poll-viral-3m-vues",
    locale: "fr",
    category: "blog",
    emoji: "🚀",
    title: "Case study : le poll viral à 3M de vues (ce qu'on a appris)",
    h1: "Un poll à 3M de vues : disséqué section par section",
    description: `Analyse complète d'un sondage qui a explosé à 3M de vues. Question, options, timing, distribution — ce qui a marché et pourquoi.`,
    intro: `En février 2026, un poll anonyme posé par un créateur belge sur moomz a généré 3,2 millions de vues, 487 000 votes, et fait débat pendant 4 jours. Le sujet : un dilemme moral à 4 options sur une situation de couple ambiguë. Voici la dissection complète, parce que comprendre pourquoi un poll explose est plus utile que de l'admirer.`,
    sections: [
      {
        h: "La question : précise, ambiguë, universelle",
        body: `La question complète était à peu près celle-ci : "Ton/ta partenaire a un dîner pro avec son ex (toujours en lien pro). Il/elle te le dit la veille. Tu fais quoi ?". 24 mots, courte. Trois éléments l'ont fait fonctionner. Un : la situation est précise et imaginable. Pas de "que feriez-vous si", c'est une situation qu'on visualise instantanément. Deux : il y a une ambiguïté morale réelle. Pas de bonne réponse évidente. Trois : c'est universel — tout le monde a vécu une variante. Les questions virales partagent presque toujours ces trois critères. Quand tu rates l'un des trois, l'engagement plafonne.`,
      },
      {
        h: "Les 4 options : équilibre des camps",
        body: `Options : (A) "OK, fais-toi plaisir" - 14%. (B) "OK mais je veux le contexte précis" - 31%. (C) "Non, c'est non négociable" - 28%. (D) "Vas-y, mais je revisite la relation" - 27%. Quatre options, quatre positions philosophiques distinctes. Aucune option dominante à plus de 35% — ce qui maintient le débat ouvert. Si une option avait pris 60%, le débat s'éteignait vite. L'équilibre 14/31/28/27 garantit que chaque camp se sentait validé par environ un tiers, et le mécontentement minoritaire (les 14%) entretenait la conversation. C'est le résultat d'options qui couvrent vraiment l'espace des possibles.`,
      },
      {
        h: "Le timing : 21h jeudi soir Europe",
        body: `Posté le jeudi à 21h08, heure de Paris. Trois raisons pour ce timing. Un : le jeudi soir est le pic d'activité polls de la semaine — les gens sont moins fatigués qu'en début de semaine, plus disponibles que le vendredi soir. Deux : 21h c'est après le dîner, avant le coucher. Fenêtre prime time. Trois : un lancement à 21h heure de Paris permet aux Américains de découvrir le poll à 15h de leur côté, créant deux vagues d'engagement. Beaucoup de polls explosent sur un timing à priori banal mais multi-fuseaux pensé. Si tu vises uniquement la France, lance à 21h jeudi. Si tu vises plus large, garde la même heure.`,
      },
      {
        h: "La distribution : organique mais aidée",
        body: `Le poll n'a pas été poussé par l'app. La trajectoire : (1) posté sur moomz par le créateur (38k abonnés sur Instagram à côté). (2) Repris dans une Story Instagram du créateur 30 minutes après, qui a généré les 5000 premiers votes. (3) Atteint le trending moomz à H+3, ce qui l'a exposé aux feeds des autres utilisateurs. (4) Repris par 7-8 micro-créateurs qui l'ont relayé, créant la vague secondaire. (5) Capture d'écran partagée sur Twitter/X, vague tertiaire. La distribution était organique mais pas magique — elle a été aidée par un compte existant et par la qualité intrinsèque du poll. Sans les 5000 premiers votes apportés par le compte, le poll n'aurait probablement jamais atteint le trending.`,
      },
      {
        h: "Les leçons réutilisables",
        body: `Quatre points à retenir. Un : la qualité de la question est 70% du succès. Pas d'aide technique qui sauvera une question banale. Deux : avoir un compte existant qui peut apporter les premiers 1000-5000 votes change tout. C'est le seuil d'amorçage. Trois : un timing optimisé multiplie par 1,5 à 2 la portée — pas la magie, mais significatif. Quatre : l'équilibre des options compte plus que le nombre d'options. Si tu peux faire 4 options équilibrées, c'est mieux que 2 options dont une écrase l'autre. Le poll à 3M de vues n'était pas un coup de chance — c'était l'application précise de principes connus, exécutée correctement à un moment opportun.`,
      },
    ],
    polls: [
      { q: "Dîner pro avec un ex, ça passe ?", options: ["Oui", "Non", "Selon", "Faut voir"] },
      { q: "Un poll viral c'est ?", options: ["Question", "Chance", "Audience", "Timing"] },
      { q: "Tu lirais un poll à 4 options ?", options: ["Oui", "Non", "Selon longueur", "Préfère 2"] },
      { q: "Tu votes vite ou tu réfléchis ?", options: ["Vite", "Je réfléchis", "Selon le sujet", "Lis les autres avant"] },
      { q: "Tu fais quoi si ton/ta partenaire dit non ?", options: ["Tu insistes", "Tu négocies", "Tu cèdes", "Tu pars"] },
      { q: "Confiance dans le couple ?", options: ["Aveugle", "Vérifiable", "Test régulier", "Aucune"] },
      { q: "L'ex est-il vraiment un ex ?", options: ["Toujours", "Selon le contexte", "Jamais totalement", "Cas par cas"] },
      { q: "Un poll viral t'a déjà fait changer d'avis ?", options: ["Oui", "Non", "Pas vraiment", "Souvent"] },
    ],
    faq: [
      { q: "Comment savoir si une question peut viraliser ?", a: `Test rapide : précise, ambiguë moralement, universellement imaginable. Si oui aux trois, potentiel viral. Si non à l'un, plafond bas.` },
      { q: "Combien de votes pour entrer dans trending ?", a: `Variable selon l'app. Sur moomz, environ 1000-3000 votes dans les premières heures déclenchent l'algorithme trending.` },
      { q: "Faut-il une grosse audience pour viraliser ?", a: `Pas nécessaire mais facilite. Un compte de 30k abonnés peut amorcer un poll plus facilement qu'un compte de 300.` },
      { q: "Le timing peut-il sauver une mauvaise question ?", a: `Non. Une mauvaise question reste mauvaise quel que soit le timing. Le timing optimise une bonne question.` },
      { q: "Combien de temps un poll reste viral ?", a: `Pic à 24-48h, queue à 4-7 jours, oubli ensuite. La fenêtre d'attention est courte.` },
    ],
    related: ["viral-poll-examples", "poll-go-viral-tiktok", "fr-sondage-viral-tiktok", "polls-engagement-stats"],
    updatedAt: today,
  },

  // ============ EN 1 ============
  {
    slug: "the-psychology-of-this-or-that",
    locale: "en",
    category: "blog",
    emoji: "🤔",
    title: "The Psychology of This-or-That (Why It's So Addictive)",
    h1: "The Psychology of This-or-That: Why Binary Choices Hook Us",
    description: `Why this-or-that polls are wildly addictive — the dopamine math, the framing effects, and what they reveal about how we actually think.`,
    intro: `This-or-that polls are the cigarettes of social media. You take one tap, you take another, half an hour passes, you don't remember what you voted on. The format is genuinely addictive — and not by accident. Five overlapping psychological mechanisms make this-or-that nearly impossible to put down once you start. Here they are, with what they explain about your scroll habits.`,
    sections: [
      {
        h: "The micro-decision dopamine loop",
        body: `Every binary choice you make releases a small dose of dopamine in your ventral striatum — the same region that lights up when you eat sugar, get a like, or win at slots. Researchers at MIT (Pessiglione, 2012) showed that the smallest decisions still trigger the reward circuit at measurable levels. Apps that have figured out how to maximize this exposure win attention battles. Tinder learned it. TikTok learned it. This-or-that polls package the same loop into a feed: tap, micro-reward, next card. Twenty cards in five minutes is twenty micro-rewards. By the time you stop, you've manufactured enough dopamine to feel briefly content — and slightly empty afterwards. This is the architecture of mindless scroll, deliberate by design.`,
      },
      {
        h: "The closure effect: every choice resolves",
        body: `One reason this-or-that beats open-ended polls in engagement: every binary choice ends in immediate closure. Your brain hates open loops. When you face "what's the best country in Europe?", your brain stays in deliberation mode — paralyzed. When you face "Italy or France?", your brain resolves in 200ms and moves on. Closure feels good. The Zeigarnik effect (1927) describes how open mental tasks consume cognitive load. Binary choices give you closure faster than any other format, and that satisfaction is why you can chain twenty in a row without noticing. The cost: many of these choices are false binaries that flatten reality. But your brain doesn't care — it just wants closure.`,
      },
      {
        h: "Framing effects: you don't choose, you react",
        body: `Kahneman and Tversky won a Nobel for showing that we make decisions based on how questions are framed, not on the underlying reality. This-or-that polls are pure framing exposure. "Pizza or sushi" forces you to compare two specific items, ignoring everything else. The frame controls the answer. Try the same question with different pairs: "Pizza or salad?" gets a different vote distribution than "pizza or sushi?" — even though pizza is the same in both. The format makes you feel like you're making choices, but really you're reacting to constructed frames. This is fine for casual fun. It's catastrophic for serious decisions, which is why doctors and judges avoid this-or-that framing.`,
      },
      {
        h: "Social proof as decision shortcut",
        body: `When you vote and immediately see "60% chose option A", your brain integrates that information faster than you realize. The next this-or-that, you're slightly biased toward what you think the majority will pick. This is herding behavior, well-documented in finance and now mapped onto polls. The interesting thing: even when people swear they vote independently, they don't. Studies show seeing the current tally shifts the next vote by 5-15 percentage points on average. Some platforms hide votes until you've cast yours to counteract this — others lean into the herding because it drives engagement. Either way, you should know it's happening.`,
      },
      {
        h: "Why this-or-that is harder to stop than to start",
        body: `The combination of fast closure, dopamine micro-rewards, framing-driven engagement, and social proof creates an exit problem. You don't get bored — you just suddenly notice the time. This is the same exit problem as TikTok, Tinder swipes, and slot machines. The content unit is small, varied, and self-justifying. No single this-or-that feels like time wasted; the aggregate does. The fix isn't to ban the format — it's to use it deliberately. Twenty minutes of this-or-that as decompression after work: fine. Three hours by accident: a problem. The format is a tool, and like all tools, abuse depends on the user.`,
      },
    ],
    polls: [
      { q: "How often do you binge this-or-that polls?", options: ["Daily", "Weekly", "Rarely", "Never"] },
      { q: "Pizza or sushi?", options: ["Pizza", "Sushi", "Both", "Neither"] },
      { q: "Beach or mountain?", options: ["Beach", "Mountain", "Both", "Neither"] },
      { q: "Coffee or tea?", options: ["Coffee", "Tea", "Both", "Energy drink"] },
      { q: "Dog or cat?", options: ["Dog", "Cat", "Both", "Neither"] },
      { q: "Do you read poll results before voting?", options: ["Always", "Sometimes", "Never", "Try not to"] },
      { q: "Binary or multi-choice better?", options: ["Binary", "Multi", "Both", "Depends"] },
      { q: "Does this-or-that make you decisive?", options: ["Yes", "No", "Mid", "Less actually"] },
      { q: "Most addictive format?", options: ["This-or-that", "Would you rather", "Rank these", "Open polls"] },
    ],
    faq: [
      { q: "Why are this-or-that polls so addictive?", a: `Combination of micro-dopamine, fast closure, framing, and social proof. All four mechanisms compound to make stopping harder than starting.` },
      { q: "Is bingeing them harmful?", a: `Moderate use is fine. Compulsive multi-hour binges erode attention span and waste time you'd notice missing in retrospect.` },
      { q: "Do they make you a better decision-maker?", a: `Slightly, on small decisions. Useless for complex ones. Real decisions need structured thinking, not binary tapping.` },
      { q: "Why do I keep tapping even when bored?", a: `The closure effect — your brain keeps seeking the small relief of resolution. The cycle continues until you consciously break it.` },
      { q: "Can I use this-or-that strategically?", a: `Yes. For warming up an audience, breaking decision paralysis, or generating fast preference data. Just don't use it for important calls.` },
    ],
    related: ["this-or-that", "psychology-binary-choice", "two-vs-five-options", "would-you-rather-en"],
    updatedAt: today,
  },

  // ============ EN 2 ============
  {
    slug: "why-anonymous-q-and-a-is-back",
    locale: "en",
    category: "blog",
    emoji: "🎭",
    title: "Why Anonymous Q&A Is Back (And Better This Time)",
    h1: "Why Anonymous Q&A Is Back: The 2026 Comeback Story",
    description: `From Ask.fm's collapse to NGL, Tellonym, and moomz ASK — why anonymous Q&A returned, and what's different this time around.`,
    intro: `Ask.fm was supposed to kill the anonymous Q&A format forever. Multiple high-profile harassment cases, parental panic, regulatory threats — by 2015, the genre was radioactive. Ten years later, anonymous Q&A is back. NGL, Tellonym, Sendit, moomz ASK. The format is bigger now than at its 2013 peak. What changed?`,
    sections: [
      {
        h: "Ask.fm's fatal flaw: zero moderation at scale",
        body: `Ask.fm launched in 2010 with a simple promise: anonymous questions to any user. Within four years it had 200 million users — and a body count. Multiple teen suicides between 2012 and 2014 were attributed in part to Ask.fm harassment. Media exploded. EU regulators threatened action. The platform never recovered, sold to Russian investors, then to multiple owners, and slowly disappeared from cultural relevance. The technical lesson: unfiltered anonymity at scale is a harassment vector by default. Anyone who builds the same product with the same model produces the same outcome. This lesson cost lives. New platforms built after 2020 know it.`,
      },
      {
        h: "Why the format never died, just the platform",
        body: `Even after Ask.fm imploded, the underlying demand persisted. Anonymous questions are uniquely valuable for one reason: they bypass the politeness layer. Friends won't tell you your relationship is unhealthy. Anonymous strangers will. That asymmetry is irreplaceable for honest feedback, social signaling, and casual curiosity. The format isn't toxic — the lack of safeguards was. When NGL launched on Instagram in 2022 and hit 40 million downloads in six months, it proved that the underlying demand was just dormant, waiting for a safer container.`,
      },
      {
        h: "NGL, Tellonym, Sendit, moomz ASK: what's different",
        body: `Modern anonymous Q&A platforms have three things Ask.fm never had. First, AI moderation that scans incoming questions for harassment patterns before delivery — not just after report. Second, rate limits: typically 3-5 questions per sender per day per recipient, preventing the floods of abuse that characterized Ask.fm. Third, recipient controls: easy skip, block, mute, plus visible question counts for the audience. moomz ASK adds a fourth: questions and polls live on the same profile, creating hybrid engagement. NGL is purest — Instagram-native, no profile depth. Tellonym is more mature with deeper communities. Sendit targets Snapchat teens. Each occupies a different niche.`,
      },
      {
        h: "The trust economy of anonymous platforms",
        body: `New anonymous platforms operate on a fragile trust contract. Users trust the platform to filter harm. The platform trusts users to behave with the privilege of anonymity. When this trust breaks, the platform dies fast — see the rapid collapse of multiple post-Ask.fm clones that didn't invest in moderation. The platforms that survive long-term invest 20-40% of engineering resources in trust and safety. That's the real cost of running anonymous social product today. Indie attempts that skip this investment fail predictably within 12-18 months.`,
      },
      {
        h: "What's next: voice Q&A and pre-emptive AI",
        body: `Two trends are emerging in 2026. First, voice-based anonymous Q&A — answer in audio instead of text. Warmer, more human, harder to dunk on as a creator. Second, pre-emptive AI moderation that doesn't just filter abuse, but actively reframes hostile questions into constructive ones. "Why are you so ugly" becomes "What do you think about your style choices?" — same intent revealed, none of the cruelty. If these two trends take, anonymous Q&A finally solves its original problem and becomes a mature, durable social format.`,
      },
    ],
    polls: [
      { q: "Used Ask.fm back in the day?", options: ["Yes", "No", "Never heard of it", "Vaguely remember"] },
      { q: "NGL or Tellonym?", options: ["NGL", "Tellonym", "Both", "Neither"] },
      { q: "Anonymous Q&A: liberating or toxic?", options: ["Liberating", "Toxic", "Both", "Depends on user"] },
      { q: "Do you answer all questions you receive?", options: ["All", "Selectively", "Positive ones", "I ignore them"] },
      { q: "How many Qs per day for active users?", options: ["0-1", "2-5", "5-15", "15+"] },
      { q: "Should anonymity be reversible?", options: ["Yes for threats", "Never", "Always for minors", "For investigation only"] },
      { q: "Voice Q&A interesting?", options: ["Yes", "No", "Maybe", "Cringe"] },
      { q: "Anonymous Q&A at 30+ is cringe?", options: ["No", "A bit", "Yes", "Depends on use"] },
    ],
    faq: [
      { q: "Why did Ask.fm collapse?", a: `Multiple harassment-linked teen suicides between 2012-2014, severe media backlash, regulatory pressure, no investment in moderation.` },
      { q: "Is NGL actually safe?", a: `Safer than Ask.fm thanks to AI moderation, but still anonymous — use with discretion, especially for minors.` },
      { q: "How is moomz ASK different from NGL?", a: `moomz ASK lives on a moomz profile with polls, allowing hybrid Q&A + poll engagement absent on NGL.` },
      { q: "How many questions does the average user receive?", a: `Highly variable, but on NGL the median active user gets 3-7 questions per day.` },
      { q: "Is anonymity truly guaranteed?", a: `Anonymous to other users yes. The platform itself retains logs (IP, metadata). Social anonymity, not technical anonymity.` },
    ],
    related: ["anonymous-qa-ask-ngl-moomz", "creators-monetize-anonymous-qa", "ask-fm-est-mort-vive-l-anonyme", "the-rise-of-the-vibe-check-app"],
    updatedAt: today,
  },

  // ============ EN 3 ============
  {
    slug: "bereal-x-poll-the-daily-vibe-check-loop",
    locale: "en",
    category: "blog",
    emoji: "🌅",
    title: "BeReal × Poll: The Daily Vibe Check Loop That Hooks",
    h1: "BeReal × Poll: Why the Daily Vibe Check Loop Works",
    description: `Why a single daily synchronized poll outperforms an infinite feed. Lessons from BeReal, Wordle, and the rise of daily-cadence apps.`,
    intro: `BeReal proved one thing definitively before its decline: a single synchronized daily ritual beats infinite scroll. Wordle proved the same. So did Duolingo's streak mechanic. Daily moomz takes the principle and applies it to polling. One question, one day, everyone the same. Sounds trivial. It's not. Here's the mechanism, and why the daily-cadence model is quietly eating chronic-feed apps.`,
    sections: [
      {
        h: "Synchronicity beats personalization",
        body: `The dominant mental model for social apps has been hyper-personalization: TikTok For You, Instagram Explore, Twitter algorithmic. The premise: serve each user a unique feed and they'll engage more. It works — for a while. The fatigue cost is high. By 2024, users were openly complaining about the loneliness of personalized feeds: you watch alone, you can't reference what others saw, you have no shared cultural moments. BeReal flipped the model. One photo, one window, everyone seeing roughly the same thing. The cost: less time per session. The gain: deeper connection per session, sharable references, conversation hooks. Daily moomz inherits this. When everyone votes on the same poll today, the poll becomes shared culture.`,
      },
      {
        h: "Scarcity manufactures attention",
        body: `Daily moomz disappears after 24 hours. You cannot vote on yesterday's. This forced scarcity creates two effects. First, you check daily because waiting is the only path. Second, your vote feels weighted — you have one shot at this exact prompt with this exact cohort. Compare to infinite feed: every poll feels infinitely replaceable, infinitely skippable. Scarcity in interaction design is a known mechanism (Cialdini, 1984), but it's been underexploited in social apps that built their growth on opposite assumptions. The companies that figured out scarcity (Wordle, BeReal, Duolingo streaks) achieved viral loops more durable than any algorithmic feed.`,
      },
      {
        h: "Shared questions create shared language",
        body: `In an infinite feed, no two people see the same content. There's nothing to talk about. Daily moomz delivers a single question to everyone. If today's daily was "pineapple on pizza?", every conversation about polls today references that. The poll becomes a cultural moment, briefly. This emergent language is the most underrated growth mechanic in product design. Twitter built its empire partly on this — Trending Topics created shared vocabulary daily. When Twitter's trending decayed in usefulness, the cultural-moment slot stayed open. Daily moomz fills it for the polling vertical.`,
      },
      {
        h: "The algorithm decides what becomes culture",
        body: `Daily moomz isn't random. The selection algorithm prioritizes controversial polls (close to 50/50), with sufficient human vote count, ideally reflecting a topical theme. This curation is critical. Pick a boring poll, the daily becomes dead air. Pick a wedge poll, conversation explodes. Pick a niche poll, only that niche cares. The challenge of running a daily-cadence app is selection quality — and getting it right 365 days a year is harder than running any A/B test. Most daily apps that fail (a lot of Wordle clones) fail on selection quality, not technical execution. moomz's data team is essentially in the cultural-curation business now.`,
      },
      {
        h: "Why BeReal lost it and what Daily moomz does differently",
        body: `BeReal stalled around late 2023. Two reasons. One, the format required real-life performance — take a photo of yourself wherever you are, which is socially expensive. Two, the app had no second-order engagement loop. Once you posted your BeReal, there was nothing else to do. Daily moomz avoids both. Voting is tap-level cheap, no performance required. And once you've voted on the daily, the home feed has 50 other polls to keep you engaged. The daily is a hook into broader usage, not a standalone ritual. Internal data — interpret with appropriate skepticism — suggests next-day retention measurably exceeds feed-only configurations.`,
      },
    ],
    polls: [
      { q: "Do you vote on Daily moomz every day?", options: ["Yes", "Often", "Sometimes", "Never"] },
      { q: "BeReal better or worse than Daily?", options: ["Better", "Worse", "Same", "Never used BeReal"] },
      { q: "Daily ritual keeps you coming back?", options: ["Yes", "No", "Depends", "Only morning"] },
      { q: "Best time to drop the Daily?", options: ["Midnight UTC", "9am local", "6pm local", "Random"] },
      { q: "How long should Daily last?", options: ["12h", "24h", "48h", "All week"] },
      { q: "Better: 1 daily or 3?", options: ["1", "3", "No preference", "5 even"] },
      { q: "What format brings you back?", options: ["Daily", "Live", "Battles", "Tournaments"] },
      { q: "Do you set a reminder for Daily?", options: ["Yes", "No", "Sometimes", "Never miss it"] },
    ],
    faq: [
      { q: "How is the Daily selected?", a: `Algorithm picks from the most-discussed polls of the prior 24h, filtered for controversy (close to 50/50) and topical breadth.` },
      { q: "Why midnight UTC?", a: `Global compromise. No timezone is perfect. UTC keeps a stable reference, and the community adapts. Wordle and BeReal use the same approach.` },
      { q: "Can I vote on yesterday's Daily?", a: `No. Scarcity is part of the design. Expired Dailies remain viewable but voting is closed.` },
      { q: "What if the Daily is boring?", a: `Happens, unfortunate but real. Algorithm improves but isn't perfect. You can always launch your own poll alongside.` },
      { q: "Why not multiple Dailies?", a: `Scarcity drives the engagement loop. Multiply the events, dilute their power. One is intentional.` },
    ],
    related: ["daily-moomz-pourquoi-ca-marche", "gen-z-polls-2026-trend-report", "viral-poll-formats", "polls-engagement-stats"],
    updatedAt: today,
  },

  // ============ EN 4 ============
  {
    slug: "how-to-write-a-good-poll-question",
    locale: "en",
    category: "blog",
    emoji: "✏️",
    title: "How to Write a Good Poll Question (6 Rules)",
    h1: "How to Write a Good Poll Question: The 6 Rules That Matter",
    description: `Why your polls aren't getting votes — and the 6 concrete rules to fix it. With the most common mistakes and how to spot them in your own polls.`,
    intro: `You wrote a poll. It got zero votes. You wonder if your topic was bad. It probably wasn't — your phrasing was. A good poll question is a precise object with strict constraints. Most polls fail not because nobody cares, but because the question was lazy. Here are the six rules that turn dead polls into engaged ones.`,
    sections: [
      {
        h: "Rule 1: Be ultra-concrete",
        body: `An abstract question gets lazy answers. "Do you like music?" — who's going to vote no. "Would you listen to a full album without shuffle?" — that's a real question separating real behaviors. Concreteness forces respondents to position themselves. Avoid "generally", "usually", "often". Prefer "this month", "last time", "tonight". The more anchored the question is in a specific situation, the more meaningful the response. This is the first rule of opinion polling in academic social science, and it's the first rule ignored by 90% of casual polls. Concreteness costs you nothing — and pays for itself in vote quality.`,
      },
      {
        h: "Rule 2: 2 to 4 options, never more",
        body: `The paradox of choice applies. With six options, response rate drops 30%. With four, it's optimal. With two, faster but loses nuance. The sweet spot for 95% of cases is three options. If you end up with five options, your question is too broad — split it into two polls. A good question answers a single axis. Set aside the urge to cover all cases. You can always do a follow-up. The temptation to add "Other" or "Neither" or "It depends" is real. Resist 90% of the time. These options dilute the signal and dilute the vote.`,
      },
      {
        h: "Rule 3: Options must actually oppose",
        body: `"Pizza or pasta or burger or sushi?" — that's not a poll, it's a menu. Options should represent philosophically distinct positions, not interchangeable items. "Pizza or sushi?" forces a choice between two worlds. "Pizza or pasta?" forces a choice between two Italian families. A good poll reveals camps. If your options can all be justified by the same type of person, you don't have a question — you have a trivial preference poll that teaches nobody anything. The test: ask yourself, "what does choosing option A say about the voter that choosing option B doesn't?" If you can't answer cleanly, your options aren't doing work.`,
      },
      {
        h: "Rule 4: No trap questions",
        body: `"Do you prefer that I'm honest or that I lie to you?" — that's manipulative, not a poll. Every option must be psychologically choosable. If one option makes the respondent look like a monster, the poll is biased. Good questions probe real disagreement. If the answer is obvious before the vote, the poll provides zero information. The ultimate test: before publishing, ask yourself if you'd be genuinely torn between options. If not, rework. Polls are not gotchas. They're tools to find signal. Use them as such.`,
      },
      {
        h: "Rule 5: Short title, short context, short options",
        body: `Polls are read in 3 seconds. If your question is 30 words long, nobody reads it. Target 8-12 words. If context is needed, put it on a subline. Options should fit in 2-4 words each. Length kills. This is why Twitter/X keeps polls limited to 25 characters per option — they measured response rate collapse beyond that. Be brutal with the cut. Every unnecessary word is a lost vote. The best polls read like headlines: punchy, complete, leaving no ambiguity but no fat either.`,
      },
      {
        h: "Rule 6: Test with one person before publishing",
        body: `Read your question to a friend. Ask them to answer in one second. If they hesitate or ask for clarification, your question isn't ready. This is the most neglected last step. Professional pollsters (Pew, Gallup, IPSOS) test every question on 5-10 people before fielding — called "piloting". You don't need 10 for a moomz poll, but one is non-negotiable. The cost is 30 seconds. The benefit is the difference between a 20-vote poll and a 200-vote poll.`,
      },
    ],
    polls: [
      { q: "How long do you spend phrasing a poll?", options: ["10 sec", "1 min", "5 min+", "I just write"] },
      { q: "Average options per poll?", options: ["2", "3", "4", "5+"] },
      { q: "Do you test before posting?", options: ["Never", "Sometimes", "Always", "Rarely"] },
      { q: "Most common mistake?", options: ["Too many options", "Too abstract", "Trap question", "Too long"] },
      { q: "Worst format?", options: ["6-option poll", "Vague question", "False choice", "No context"] },
      { q: "Repost a failed poll?", options: ["Yes reworded", "No it's done", "Sometimes", "Delete it"] },
      { q: "Polls with image get more votes?", options: ["A lot", "A bit", "Same", "Depends"] },
      { q: "Emojis in question?", options: ["Boost votes", "Hurt votes", "Neutral", "Depends"] },
    ],
    faq: [
      { q: "Ideal number of options?", a: `Three is optimal for most cases. Two for binary debates, four max if truly necessary.` },
      { q: "Should I always include context?", a: `No. A good question stands alone. Context only clarifies a specific situation, never compensates for a vague question.` },
      { q: "Should I add an emoji?", a: `Optional. A well-placed emoji can boost engagement 10-15%. Too many emojis hurt readability.` },
      { q: "My polls get no votes — why?", a: `Most likely phrasing: too vague, too many options, or options don't really oppose. Rework using the rules above.` },
      { q: "How long should a poll stay open?", a: `On moomz, 24-72h captures 90% of votes. Beyond that, diminishing returns. On Insta Stories, 24h is forced.` },
    ],
    related: ["write-poll-question-people-answer-en", "comment-poser-une-bonne-question-de-sondage", "max-poll-options-2-4-6-en", "two-vs-five-options"],
    updatedAt: today,
  },

  // ============ EN 5 ============
  {
    slug: "instagram-stories-poll-strategy-for-creators",
    locale: "en",
    category: "blog",
    emoji: "📸",
    title: "Instagram Stories Poll Strategy for Creators (2026)",
    h1: "Instagram Stories Polls for Creators: The Real Strategy",
    description: `What actually works for Instagram Stories polls in 2026 — timing, format, the trap of vanity engagement, and when to bail on the format.`,
    intro: `Instagram Stories polls hit 60-80% response rates. That's higher than any other format on the platform. So creators throw polls at every story, hoping engagement compounds. It doesn't always. Most creators are running their polls wrong, and the high response rate masks the fact that the data isn't useful. Here's how to actually use Stories polls strategically.`,
    sections: [
      {
        h: "The vanity engagement trap",
        body: `When you ask "should I post the orange or the green sweater?", you'll get hundreds of votes. The split will probably be 55/45. You'll feel engaged. But you learned nothing — and you trained your audience to expect low-stakes binary content. Most creators get stuck here. The poll becomes a daily ritual that drives no actual decisions and adds no real value. The fix: ration your polls. One thoughtful poll per week beats ten lazy ones. When you do post, the audience knows it's a real question, not engagement filler. Vanity engagement is a real disease in creator playbooks, and Stories polls are one of its main vectors.`,
      },
      {
        h: "When polls earn their place",
        body: `Polls work when they reveal something the audience cares about — a verdict on a product you're testing, an opinion on a guest, a fork in a content series. Bad polls are about you. Good polls are about them. "Should I review iPhone or Pixel next?" — your audience cares because it changes your output. "Did you like yesterday's video?" — your audience doesn't care about answering yes. Use polls to give your audience agency over your direction, not to confirm your existing instincts. The engagement is incidental; the value is the input you actually use.`,
      },
      {
        h: "Timing and frequency that actually work",
        body: `Optimal time: 6pm-10pm in your audience's primary timezone. Avoid posting between 11pm-7am. Weekends underperform weekdays for engagement-driven polls. Frequency: 2-3 polls per week, not daily. More than that and respondents fatigue. Story duration: 24h is forced but vote velocity peaks in the first 4 hours. If you want maximum signal, share a follow-up story 2 hours after the poll drops, pointing back to it. This doubles vote count for many creators. Avoid running multiple polls simultaneously in the same Story — votes split, and your audience defaults to the simpler one.`,
      },
      {
        h: "What Stories polls can't do",
        body: `Stories polls can't be anonymous from you, the creator. You always see who voted what. This kills sensitive polling. Don't ask "how's my new haircut" if you actually want honest feedback — your audience will lie to spare your feelings. Stories polls also can't do more than 2 options. So you can't do this-or-that-or-that, you can't rank, you can't gather nuance. For those use cases, you need external tools (moomz, Strawpoll) linked from your Story. The smart creator playbook combines: Stories polls for volume and casual signal, external polls for honest feedback and complex multi-option data.`,
      },
      {
        h: "The shadow metric: poll-to-action conversion",
        body: `Most creators stop at vote count. The metric that matters: how many people who voted then took the action you wanted? If your poll was "which video next" and 5000 voted, but only 200 watched the resulting video, your poll engagement was theater. The real ratio (vote-to-action) is usually under 10% for content polls, under 5% for product polls. Knowing your number lets you calibrate. If you're getting 1000 votes but 300 actions, your audience is actively engaged. If you're getting 1000 votes but 10 actions, you have a vanity-engagement problem. Track this for 30 days and you'll see the truth.`,
      },
    ],
    polls: [
      { q: "How often do you post polls in Stories?", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
      { q: "Most votes come from?", options: ["First 1h", "First 4h", "First 12h", "Spread evenly"] },
      { q: "Best time to post a poll?", options: ["Morning", "Lunch", "Evening", "Night"] },
      { q: "Polls with images?", options: ["Boost votes", "Same", "Lower", "Depends"] },
      { q: "Stories polls vs external?", options: ["Stories", "External", "Both", "External anonymous"] },
      { q: "Do you act on poll results?", options: ["Always", "Often", "Sometimes", "Almost never"] },
      { q: "Audience size for good polls?", options: ["Under 1k", "1k-10k", "10k-100k", "100k+"] },
      { q: "Polls boost reach?", options: ["A lot", "A bit", "Same", "Hurt reach"] },
    ],
    faq: [
      { q: "Are Stories polls truly anonymous?", a: `No. The creator always sees who voted what. This is the biggest misconception about the format.` },
      { q: "How many polls per week?", a: `2-3 strategic polls outperform daily lazy polls. Quality compounds, frequency dilutes.` },
      { q: "Why do my polls underperform?", a: `Usually: too self-focused, too lazy, or posted at low-engagement times. Reframe to give audience agency.` },
      { q: "Stories polls vs reels polls?", a: `Stories polls win on engagement (60-80% response). Reels polls underperform (under 15%) because viewers are passive.` },
      { q: "Can I get honest feedback from Stories?", a: `Not reliably. The format is non-anonymous. For honest input on sensitive topics, link to an external anonymous tool.` },
    ],
    related: ["instagram-story-poll-best-practices", "instagram-story-poll", "comment-faire-sondage-instagram", "polls-instagram-vs-stories-vs-reels"],
    updatedAt: today,
  },

  // ============ EN 6 ============
  {
    slug: "tinder-vs-hinge-vs-bumble-the-real-poll",
    locale: "en",
    category: "blog",
    emoji: "💕",
    title: "Tinder vs Hinge vs Bumble: The Real Poll Strategy",
    h1: "Tinder vs Hinge vs Bumble: Which Poll for Which App",
    description: `Why the same poll bombs on Tinder and crushes on Hinge. Strategy by dating app, with examples that actually work in 2026.`,
    intro: `Every dating app eventually added some form of poll. Tinder has prompts. Bumble has compliments. Hinge has Voice Prompts and integrated polls. But each one rewards different content, and a poll that crushes on Tinder dies on Hinge. Here's the actual strategy, app by app, with the reasoning.`,
    sections: [
      {
        h: "Tinder: volume and fast filtering",
        body: `Tinder is the swipe-velocity app. Average attention on a profile: 3 seconds. In that window, a working poll is ultra-short, ultra-divisive, ideally funny. "Pineapple pizza?" "Sushi or tacos?" "Beach or mountain?" These aren't deep questions — they're cultural sorting at hyperspeed. The goal: eliminate fundamentally incompatible matches in 2 seconds. Deep Tinder polls fail. Nobody reads three lines. Tinder poll constraints: 6 words max for the question, 2-3 options of 2 words each. If you can't fit that, you don't have a Tinder poll — you have a Hinge poll mistakenly placed.`,
      },
      {
        h: "Bumble: conversation engagement",
        body: `Bumble forces women to initiate (in straight matches). The poll becomes a lifeline — a way to open beyond "hey". Polls that work on Bumble are intelligent conversation starters, not swipe-time gags. "Weekend trip to Lisbon in two months — too ambitious?" opens a real discussion. "Marriage at 25 or 35?" demands real reflection. The Bumble user expects engaging content — not binary gags. A poll that works on Tinder can be a bad Bumble poll because too light. The audience demographics tilt slightly older and more intentional. Calibrate accordingly.`,
      },
      {
        h: "Hinge: intentional and identity-revealing",
        body: `Hinge is positioned as "designed to be deleted" — for relationships. Audience skews 25-35, more educated on average. Polls that work here are identity-revealing. "Six-month sabbatical — what would you do?" "Most overrated art?" "Worst parental advice?" These signal who you actually are, not just preferences. Hinge added native polls in 2023. To win: ask a question that reveals a real position. Not "coffee or tea" — "coffee every morning, yes or skip" is sharper. Context changes everything. Hinge users will engage with substance and skip past obvious filler.`,
      },
      {
        h: "Common mistakes across the three",
        body: `Mistake 1: too generic — speaks to no one, sorts no one. Mistake 2: too intimate too soon — feels invasive (especially Bumble). Mistake 3: poll that makes you look like a troll. If your only poll is "pineapple pizza?", you're signaling laziness. Mistake 4: poll that doesn't invite a reply. A good dating poll needs to generate a return message. "Beach or mountain?" — the answer "mountain" should make you want to ask "which one" or "what do you do there". If your poll is too closed, conversation dies on the spot. Always think about the follow-up message you want.`,
      },
      {
        h: "The external-poll hack",
        body: `Many serious dating profiles now use external polls (moomz, Strawpoll) as hooks in the bio. "Vote on my weekend dilemma before swiping → moomz.com/abcde". This sidesteps native app constraints and creates engagement before the match. Turns the dating profile into a mini content piece. Caveat: it gives an "influencer" vibe that turns off some matches. Works if your profile already leans that way, hurts if you're going for a more low-key positioning. Self-awareness on your own brand matters here. The hack isn't universal — it's a play, not a formula.`,
      },
    ],
    polls: [
      { q: "Do you use polls in dating bios?", options: ["Yes", "No", "Considered it", "Cringe"] },
      { q: "Best first-message poll?", options: ["Funny", "Serious", "Provocative", "Trick question"] },
      { q: "Most poll-friendly dating app?", options: ["Tinder", "Bumble", "Hinge", "None"] },
      { q: "Do you respond to polls in profiles?", options: ["Often", "Sometimes", "Never", "Depends on poll"] },
      { q: "Game-over polls?", options: ["Too intimate", "Too generic", "Politically clashing", "None"] },
      { q: "Anonymous polls about a match before dating them?", options: ["Yes to friends", "No it's creepy", "Sometimes", "Never"] },
      { q: "Tinder, Bumble, or Hinge?", options: ["Tinder", "Bumble", "Hinge", "None"] },
      { q: "Trust dating polls?", options: ["Yes", "No", "Depends", "Always lie"] },
    ],
    faq: [
      { q: "Do polls actually help me match?", a: `Yes — a well-placed poll can triple post-match message rate based on self-reported coach data. Quality matters more than presence.` },
      { q: "What poll for Tinder?", a: `Short, divisive, funny. No more than 6 words. Goal is sorting, not conversation.` },
      { q: "What poll for Hinge?", a: `Identity-revealing, calmer, deeper. Hinge audience expects quality content, not gags.` },
      { q: "Does Bumble allow external polls?", a: `Yes via bio link or message. No direct restriction.` },
      { q: "Is it cringe to poll in a bio?", a: `Not necessarily, but dose it. Too many polls = influencer persona that can repel low-key matches.` },
    ],
    related: ["tinder-bumble-hinge-quel-poll-tester", "dating-poll-app-trend", "dating-apps-en", "polls-as-dating-tool"],
    updatedAt: today,
  },

  // ============ EN 7 ============
  {
    slug: "gen-z-takes-on-marriage-money-cancel-culture",
    locale: "en",
    category: "blog",
    emoji: "💍",
    title: "Gen Z Takes: Marriage, Money, Cancel Culture",
    h1: "Gen Z Takes on Marriage, Money, and Cancel Culture (Polled)",
    description: `The actual Gen Z opinion on marriage, money, and cancel culture — based on aggregated poll data, not punditry. The numbers don't match the headlines.`,
    intro: `Punditry about Gen Z is usually wrong because it's written by Millennials or older. The actual Gen Z position on big social questions can be measured — by aggregating poll responses on the questions themselves. Here's what the data shows on three topics that get the most hot takes: marriage, money, and cancel culture. The reality is more nuanced than either side argues.`,
    sections: [
      {
        h: "Marriage: not dead, just postponed",
        body: `Pundits keep saying Gen Z doesn't want marriage. The data says otherwise. When polled, 68% of Gen Z respondents say they want to be married eventually. The shift is timing, not aspiration. Median desired age of marriage moved from 26 (Millennials) to 31 (Gen Z). The reasons are practical: housing market, career establishment, want to "have lived first". The institution isn't rejected — it's reframed as a milestone for later in life. Where pundits go wrong: they confuse delay with abandonment. Marriage rates among 35-year-olds will likely look much closer to historical norms than current 25-year-old data suggests.`,
      },
      {
        h: "Money: not anti-saving, anti-pretending",
        body: `Headlines claim Gen Z doesn't save. Reality: 71% of Gen Z respondents say they actively save when possible. The difference is around what they save for. Millennials saved for homes that increasingly priced out of reach. Gen Z saves for experiences, security cushions, and shorter-horizon goals. The "yolo spending" caricature applies to a small subset. Most Gen Z is acutely aware of financial precarity — they watched the 2008 fallout, the 2020 collapse, the 2024 housing freeze. The risk calculus shifted. They're not anti-saving; they're skeptical of long-term planning in a system that keeps breaking the assumed payoff curves.`,
      },
      {
        h: "Cancel culture: more nuanced than either side",
        body: `Hot takes claim Gen Z either invented cancel culture or rejected it entirely. Both wrong. Poll data shows: 58% of Gen Z believe public figures should face consequences for past harmful statements. 62% also believe most public cancellations have gone too far. The same respondents endorse both. This isn't contradiction — it's a sophisticated position. The general principle (accountability) is upheld; specific implementation (mob-style internet justice) is criticized. Most Gen Z is calling for a more measured accountability culture, not its dismantling. Pundits writing "Gen Z killed/saved cancel culture" miss the actual position: the framework is supported, the execution is contested.`,
      },
      {
        h: "Climate and politics: action without trust",
        body: `73% of Gen Z respondents rate climate as a top political priority. But only 14% trust elected officials to act on it. This trust gap explains the rise of direct-action politics, mutual aid, and consumer boycotts in Gen Z. They're not apolitical — they're disenchanted with the specific mechanism (electoral politics) while remaining engaged with the issue. This pattern repeats across most topics: high issue salience, low institutional trust. Any pundit framing this as "apathetic Gen Z" is reading the data backwards. The engagement is real; the channels are different.`,
      },
      {
        h: "Sex and relationships: less than the headlines",
        body: `Survey data consistently shows Gen Z reports less sexual activity than equivalent-age Millennials. Average partners by 25: dropping. Median age of first sexual experience: rising. Multiple proposed explanations: phones, dating app fatigue, post-pandemic recalibration, lower drinking and clubbing rates. The trend is real but the moral panic around it isn't warranted. Gen Z is not failed at intimacy — they're recalibrating relationship pace in ways that may prove healthier long-term. The "sexless generation" framing is reductive. The honest framing: slower, more intentional, and more isolated, in mixed ways.`,
      },
    ],
    polls: [
      { q: "Do you want to be married?", options: ["Yes", "No", "Maybe", "Already am"] },
      { q: "Best age to marry?", options: ["25-28", "29-32", "33-36", "Never"] },
      { q: "Do you actively save money?", options: ["Yes", "Trying", "No", "Can't afford"] },
      { q: "Cancel culture overrated?", options: ["Yes very", "A bit", "No it's needed", "Mixed"] },
      { q: "Trust politicians on climate?", options: ["Yes", "No", "Mixed", "Depends on country"] },
      { q: "Direct action over voting?", options: ["Yes", "No", "Both", "Voting only"] },
      { q: "Gen Z sex panic real?", options: ["Yes", "No", "Overhyped", "Depends on country"] },
      { q: "Marriage at 30 vs 25?", options: ["30 better", "25 better", "Same", "Never"] },
    ],
    faq: [
      { q: "Do Gen Z actually want marriage?", a: `Yes — 68% say so when polled. The shift is timing (median 31 vs 26), not rejection.` },
      { q: "Is Gen Z really bad with money?", a: `No. 71% save when possible. The framing of "yolo spending" applies to a vocal minority, not the median.` },
      { q: "Cancel culture: dead or alive?", a: `Reformed. Most Gen Z supports accountability principles while criticizing internet-mob execution. Both positions held simultaneously.` },
      { q: "Are Gen Z apathetic about politics?", a: `No — high issue engagement, low institutional trust. They act through boycotts, direct action, mutual aid rather than electoral mechanisms.` },
      { q: "Is the 'sexless Gen Z' real?", a: `Real trend, overhyped framing. Slower and more intentional, not failed.` },
    ],
    related: ["gen-z-vs-millennials-le-vrai-debat", "gen-z-poll-culture", "money-en", "would-you-rather-en"],
    updatedAt: today,
  },

  // ============ EN 8 ============
  {
    slug: "the-best-bachelorette-poll-templates",
    locale: "en",
    category: "blog",
    emoji: "👰‍♀️",
    title: "The Best Bachelorette Poll Templates (Funny, Not Cringe)",
    h1: "Best Bachelorette Poll Templates: Funny, Real, Never Cringe",
    description: `The bachelorette polls that actually work. Funny without being mean, deep without being intrusive. With the topics to avoid completely.`,
    intro: `You're planning your best friend's bachelorette. You know you'll need to run group polls. You also know that 80% of what's on Pinterest is either cringe, too tame, or downright weird. Here are the actual poll templates that work, and the criterion to tell them apart.`,
    sections: [
      {
        h: "The aunt test",
        body: `Before posting any bachelorette poll, apply this filter. Picture the bride's most conservative aunt (the one definitely at the wedding) reading the question. Does she faint? Does she smirk and raise an eyebrow? You want the eyebrow. Not the faint. Most Pinterest templates land in faint territory — too sexual, too intimate, vaguely degrading. Others are eyebrow-territory but in the bad way — boring. The sweet spot is the genuine smirk. A savage poll should be specific to the bride, not generically-trash. One question tailored to her beats fifty generic ones from a list.`,
      },
      {
        h: "10 bachelorette polls that crush",
        body: `1) Worst date she's ever told us about? 2) The ex who almost made it to the altar (according to us)? 3) Most expensive thing she bought and regretted? 4) If she could erase one party night, which one? 5) Her most embarrassing Spotify playlist? 6) The childhood nickname her mom still uses? 7) The biggest lie she's told at work? 8) Her impossible college crush? 9) Worst wedding outfit she's picked for someone else? 10) The secret she made us swear never to repeat (don't actually repeat it — just poll who knows). Each reveals, none humiliates. Designed for laughs and real talk, not roast.`,
      },
      {
        h: "Time-of-night polls (the real sequence)",
        body: `Run polls in waves. Cocktail hour: light identity polls ("most likely to wear white at the wedding"). Dinner: shared memories ("our worst trip together"). Late evening: light savage ("the funniest thing the bride ever wore"). After-midnight: closure poll ("favorite moment of tonight"). Don't drop 15 polls in one hour. Don't save all the savage for the end either — pace them. The best bachelorette weekends feel like a story arc, and the polls are the narrative beats. Run too many or too fast and you train the group to skim. Run too few and the energy stalls.`,
      },
      {
        h: "What to absolutely avoid",
        body: `Never poll: (1) Specific sexual content (humiliating, misplaced). (2) Exes in front of the new partner (creates drama). (3) Debt or money problems (intimate). (4) In-law family decisions (political). (5) Health topics (disability, addiction, mental health). The common criterion: anything that creates real risk of long-term hurt post-night. Bachelorette is supposed to strengthen the bond, not generate drama. If you're choosing between savage and weird, choose savage. If you're choosing between weird and kind, choose kind. The good ones always lean kind even when funny.`,
      },
      {
        h: "Technical format: group anonymous polls",
        body: `The format that works best: anonymous polls shared in a private WhatsApp/iMessage group during the event. Nobody knows who answered what, which maximizes honesty and laughs. moomz or Strawpoll both work. Avoid Instagram Story polls — not anonymous, too public, vibes ruined. Run 5-6 spaced polls during the event, not 30 at once. Keep one closure poll for the end — "best moment of tonight" with the 4 actual events as options. This gives the weekend a clean ending and a shared memory artifact everyone can screenshot.`,
      },
    ],
    polls: [
      { q: "Bachelorette ideal length?", options: ["1 day", "Weekend", "3-4 days", "Full week"] },
      { q: "Key activity?", options: ["Spa", "Club night", "Escape room", "Cocktail class"] },
      { q: "Bachelorette vibe?", options: ["Wild", "Classy", "Chill", "Mix"] },
      { q: "Do you poll the bride beforehand?", options: ["Yes", "Full surprise", "No-go list only", "Half surprise"] },
      { q: "Worst possible bachelorette moment?", options: ["Stripper", "Failed activity", "Fight", "Too drunk"] },
      { q: "Budget per person?", options: ["Under $100", "$100-300", "$300-500", "$500+"] },
      { q: "Guest count?", options: ["4-6", "6-10", "10-15", "15+"] },
      { q: "Bridesmaids only or everyone?", options: ["Everyone", "Bridesmaids", "Bride veto", "No polls"] },
    ],
    faq: [
      { q: "How many polls in a bachelorette?", a: `5-8 spaced through the event. More than that fatigues; fewer misses collective moments.` },
      { q: "Anonymous or signed?", a: `Anonymous. Signed kills honesty. The format only really works when nobody can be traced.` },
      { q: "Polls that ruin the vibe?", a: `Anything touching exes when partners are present, money, or mental health. Avoid.` },
      { q: "Recommended tool?", a: `moomz for anonymity and multi-option, Strawpoll for simplicity. Avoid Instagram Story (not anonymous).` },
      { q: "Include the bride in polls?", a: `Yes for revealing polls about her. No for group memory polls she's not part of.` },
    ],
    related: ["bachelorette-en", "bachelorette-party-en", "evjf-evg-questions-savage-mais-drole", "wedding-en"],
    updatedAt: today,
  },

  // ============ EN 9 ============
  {
    slug: "why-your-polls-get-zero-votes-and-how-to-fix-it",
    locale: "en",
    category: "blog",
    emoji: "📉",
    title: "Why Your Polls Get Zero Votes (and How to Fix It)",
    h1: "Why Your Polls Get Zero Votes — and the 8 Fixes That Actually Work",
    description: `The 8 reasons your polls flop and the diagnosis flow to fix them. Plus the one mistake nobody talks about that kills 60% of polls.`,
    intro: `You posted a poll. Three hours later: zero votes. You start wondering if your followers hate you. They probably don't. The problem is almost always in the poll itself — and it's diagnosable. Here are the eight most common reasons polls die, with concrete fixes.`,
    sections: [
      {
        h: "1. Your question is too abstract",
        body: `"What's your favorite color?" — silence. Why? Because the question is so open it doesn't force a position. Compare to "What color is your phone case?" — concrete, fast, real. Abstract questions feel low-stakes because they don't reference anything specific. Fix: anchor every question to a specific situation, time, or object. "This week" beats "in general". "Your current job" beats "work". "Tonight" beats "evenings". The smaller the slice, the higher the engagement, because concrete makes voting feel meaningful.`,
      },
      {
        h: "2. Too many options",
        body: `Six options drop response rate by 30% vs three. The cognitive cost of evaluating each option is real. Most polls don't need more than three. If you're forced to seven, you're doing two polls in one. Split. The most underrated rule in polling: subtract until removing more would damage the question. Most amateur pollsters add options trying to be comprehensive; the result is confusion. The pros (Pew, IPSOS) routinely use 3-4 options for high-quality opinion data. Match the pros.`,
      },
      {
        h: "3. Your options don't oppose",
        body: `"Pizza, pasta, burger, salad" — these don't separate anyone meaningfully. Most people are fine with all four. Options need to represent distinct positions, not interchangeable items. Test: ask yourself what choosing option A says about a voter that choosing option B doesn't. If you can't articulate the difference cleanly, your options aren't doing work. Rework until each option implies a different "type" of voter.`,
      },
      {
        h: "4. Posted at the wrong time",
        body: `Polls posted between 11pm and 7am underperform by 60%. Weekends drop 30% vs weekdays for engagement-focused polls. The optimal window: 6pm-10pm in your audience's primary timezone. Sunday evenings are particularly strong — the "Sunday scroll" effect. If your audience is global, post at the time that captures the most active timezone. Bad timing can kill an otherwise great poll. Time is the single most underrated lever, and it's free.`,
      },
      {
        h: "5. No image, no emoji, no contrast",
        body: `A poll with an image gets 1.5-2x more votes than a text-only poll. An emoji in the question adds 10-15% more. These aren't aesthetic preferences — they're stop signals in a feed of infinite scroll. Without a visual hook, your poll competes with everything else and loses. Adding even a basic emoji to each option is a 30-second fix that pays off every time. On platforms that allow images (moomz, Stories), use one. Don't post raw text polls in 2026 unless you've earned the audience patience to read them.`,
      },
      {
        h: "6. Question too long",
        body: `If your question is more than 15 words, half your audience scrolls past. The 3-second read window is real. Be ruthless. Cut adjectives. Cut context. Cut "I was wondering" and "what do you think". The question should land in 5-10 words ideally. If you genuinely need context, put it on a subline or in a follow-up. Length is the single biggest killer of poll engagement on text-heavy platforms. Brevity is not laziness — it's professionalism in the format.`,
      },
      {
        h: "7. You have no engaged audience yet",
        body: `Sometimes the poll is fine and your audience is too small or too quiet. Fix isn't on the poll — fix is on audience-building. If you have 200 followers and only 30 are active, expect 5-15 votes max on any poll regardless of quality. Build audience first, then poll. Don't burn out trying to polish polls when the problem is upstream. Especially: rebuild engagement by posting non-poll content for 2-3 weeks, then return to polls. Audience fatigue is real.`,
      },
      {
        h: "8. The killer nobody talks about: your last 5 polls were boring",
        body: `Your audience has memory. If your last five polls were "what's your favorite [thing]" mediocrity, they've trained themselves to skip your polls. Even a great poll won't recover engagement immediately — you need 2-3 strong polls to retrain audience attention. The fix: take a break, post non-poll content, come back with a poll that genuinely surprises. Audience momentum is a real, measurable thing. Burn it carelessly and recovering takes weeks. Most creators don't realize this is happening because they don't track it.`,
      },
    ],
    polls: [
      { q: "What's your typical poll vote count?", options: ["0-5", "5-20", "20-100", "100+"] },
      { q: "Why do you think your polls flop?", options: ["Bad timing", "Bad question", "Small audience", "Audience fatigue"] },
      { q: "Optimal time to post?", options: ["Morning", "Lunch", "Evening", "Night"] },
      { q: "Best number of options?", options: ["2", "3", "4", "5+"] },
      { q: "Image in polls makes a difference?", options: ["Big", "Some", "None", "Hurts"] },
      { q: "Do you post polls weekly?", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
      { q: "Topic that always works?", options: ["Food", "Drama", "Money", "Lifestyle"] },
      { q: "Worst time to post?", options: ["Night", "Morning", "Weekend", "Any"] },
    ],
    faq: [
      { q: "My poll has 0 votes — should I delete?", a: `Wait 6 hours. If still 0, delete and rework. The poll itself is the problem 80% of the time.` },
      { q: "How long should I wait for votes?", a: `90% of votes come in the first 24 hours. Beyond 72 hours, expect minimal new engagement.` },
      { q: "Should I repost a failed poll?", a: `Yes, but reworked. Reposting the exact same poll signals desperation. Improve and repost in 1-2 weeks.` },
      { q: "Does audience size matter more than quality?", a: `Both matter. Large audience with bad polls still gets low rates. Small audience with great polls beats large with bad.` },
      { q: "How to know if my audience is fatigued?", a: `Track vote count trend over your last 10 polls. Steady decline = fatigue. Take a break, return with surprise content.` },
    ],
    related: ["how-to-write-a-good-poll-question", "comment-poser-une-bonne-question-de-sondage", "two-vs-five-options", "polls-engagement-stats"],
    updatedAt: today,
  },

  // ============ EN 10 ============
  {
    slug: "nfl-watch-party-polls-that-don-t-suck",
    locale: "en",
    category: "blog",
    emoji: "🏈",
    title: "NFL Watch Party Polls That Don't Suck",
    h1: "NFL Watch Party Polls That Actually Don't Suck",
    description: `Watch party polls that work even if your guests don't know football. Plus the prop-bet style polls that get even the non-fans engaged.`,
    intro: `You're hosting a Super Bowl party. Or a regular Sunday watch. The mix: half hardcore football fans, half people there for the food and the halftime show. A bad poll night skews to one side. A good one keeps everyone engaged. Here's how to build a poll set that doesn't suck for either camp.`,
    sections: [
      {
        h: "The mixed-audience principle",
        body: `Most watch parties have a real audience asymmetry. Hardcore fans want polls about game predictions and stats. Casual viewers want polls about commercials, halftime, and snacks. A pure-football poll set alienates half the room. A pure-food poll set alienates the other half. The fix: alternate. For every two football polls, drop one non-football poll. This creates rhythm and inclusion. The fans appreciate the casuals being engaged; the casuals appreciate not being lectured at all night. Mixed-audience polling is its own skill.`,
      },
      {
        h: "Prop-bet style polls (the workhorse)",
        body: `Sports betting prop bets ("will the first score be a touchdown or field goal") translate perfectly to watch party polls — and they include both camps. Examples: First scoring play type? Coin toss outcome? Color of Gatorade dumped on winning coach? Length of national anthem? Halftime show opening song? These polls let casuals make educated guesses and fans use their stats brain. Run one before kickoff, one at halftime, one in the fourth quarter. Award points and crown a "prop bet champ" at the end. The light competition adds engagement without requiring deep football knowledge.`,
      },
      {
        h: "Commercial and halftime polls",
        body: `Super Bowl commercials are 40% of why casuals watch. Don't ignore them. Polls during commercial breaks: best commercial of the first half? Worst commercial? Most rewatched ad? For halftime: best song performed? Best costume change? Did it deliver? Casuals dominate these polls, which is the point — they get to be the experts for one segment. Run these in real time on Stories or a moomz link. Voting closes 5 minutes after the commercial/halftime ends, forcing real-time engagement. This is also when guests start chatting with each other most — the polls catalyze conversation.`,
      },
      {
        h: "Snack and food polls (yes, really)",
        body: `Yes, food polls during a watch party work. "Best snack on the table right now?" "Whose dip is winning?" "Most overrated game-day food?" These polls feel low-stakes but generate massive engagement. Reason: everyone has an opinion, no expertise needed, and the immediate physical-world context makes voting fun. They also resolve the "I don't know enough football" awkwardness for new guests. Run two food polls per party, max — too many becomes silly. Place one early (when food is fresh) and one in the third quarter (when people have actually tasted everything).`,
      },
      {
        h: "The endgame: post-game polls",
        body: `End the night strong with two polls. One: MVP of the watch party itself (host, biggest reaction, most knowledgeable, funniest guest). Two: best moment of the party (game-related and non-game-related options mixed). These polls aren't about football at all — they're about the social experience. They generate the screenshots and group memories that guests share for days. The watch party as social event matters as much as the game itself, especially for the casuals. End on the social note and everyone leaves having had a great time, regardless of which team won.`,
      },
    ],
    polls: [
      { q: "Best Super Bowl moment historically?", options: ["A halftime show", "A buzzer winner", "An ad", "Eli Manning's helmet catch"] },
      { q: "What do you watch the Super Bowl for?", options: ["Game", "Ads", "Halftime", "Food"] },
      { q: "Best Super Bowl snack?", options: ["Wings", "Pizza", "Nachos", "Dip + chips"] },
      { q: "Coin toss outcome?", options: ["Heads", "Tails"] },
      { q: "Halftime show: hype or skip?", options: ["Hype", "Skip", "Background noise", "Reason I'm here"] },
      { q: "First scoring play type?", options: ["TD", "FG", "Safety", "Won't score"] },
      { q: "Best food for football?", options: ["Wings", "Tacos", "Pizza", "Chili"] },
      { q: "Watch with friends or solo?", options: ["Friends", "Solo", "Family", "Bar"] },
      { q: "MVP of your watch party?", options: ["Host", "Loudest guest", "Quietest guest", "Pet"] },
    ],
    faq: [
      { q: "How many polls during a watch party?", a: `8-12 spaced through the game and breaks. Too few and the night feels passive; too many and they become noise.` },
      { q: "Polls during gameplay or only commercials?", a: `Commercials and breaks. Don't run polls during active gameplay — guests aren't looking at their phones during big moments.` },
      { q: "Anonymous or signed polls?", a: `Either works. For a friendly watch party, signed is fine. For a corporate event, anonymous lets people be more honest about food and halftime.` },
      { q: "Best tool for watch party polls?", a: `moomz works well for the multi-option and quick-share format. Strawpoll if you want desktop. Stories if everyone's already on Instagram.` },
      { q: "Should I prepare polls in advance?", a: `Yes. Pre-write 6-8 polls beforehand and improvise 2-3 based on what happens during the game. Improvised polls land better when they reference live events.` },
    ],
    related: ["super-bowl-en", "nba-finals-en", "world-cup-en", "viral-poll-formats"],
    updatedAt: today,
  },

  // ============ EN 11 ============
  {
    slug: "viral-tiktok-polls-2026-trends",
    locale: "en",
    category: "blog",
    emoji: "🎵",
    title: "Viral TikTok Polls in 2026: Trends and Formats",
    h1: "Viral TikTok Polls in 2026: The Trends Driving Millions of Votes",
    description: `The TikTok poll formats blowing up in 2026. From debate stitches to reveal videos. With the pattern that drives every viral hit.`,
    intro: `TikTok polls aren't a feature — they're a creator pattern. The platform doesn't have native binary polls beyond the basic prompt sticker. So creators invented formats. Some have gone viral. Some have died. Here are the 2026 patterns that are driving millions of votes, and the underlying mechanics behind each.`,
    sections: [
      {
        h: "The reveal-after-vote format",
        body: `Creator films themselves asking a question to the audience, with comments asked to vote A or B. Then they reveal what they did or chose. The reveal creates the loop: viewers want to see if they "won" or if the creator's choice matched theirs. Examples: outfit reveals ("which dress should I wear to the wedding?"), product comparisons, opinion confessions. The format works because it splits the video into pre-vote anticipation and post-vote validation. Both phases generate engagement. The best creators add a twist in the reveal — they reveal what the audience picked, but then explain why they did the opposite. Conflict drives shares.`,
      },
      {
        h: "Stitch debate format",
        body: `Creator A posts an opinionated take. Creator B stitches with the opposite take. Audience votes in comments which side wins. This format took off in mid-2025 and dominated 2026. It works because TikTok's algorithm rewards engagement velocity, and debates generate comment storms. The viral hits in this format share three traits: clear binary opposition (not nuanced positions), low-stakes topics (people will fight over pizza, not abortion), and personality contrast between the two creators. The format requires two creators to participate, which limits scalability — but when it hits, it hits hard.`,
      },
      {
        h: "Cringe vs cool ranking",
        body: `Take a list of items (outfits, songs, behaviors), and rank them cringe-to-cool live with audience input. This format requires confidence — you're publicly judging things, and your judgment is on display. It works because TikTok's audience loves verdicts. The viral pattern: pick items that are genuinely contested (not obvious cringe, not obvious cool), make hot takes, then let comments fight. The ranking video itself is the engagement hook; the comment section is where votes happen. Top hits in this format get 5x more comments than likes — unusual for TikTok.`,
      },
      {
        h: "The poll-as-content trend",
        body: `Bigger creators now do straight polls in their content — show a static screen with the question and two/three options, audience votes in comments. Lower production cost, higher predictability. The format works because it's the lowest-friction engagement bait possible. But it's also gotten saturated. Audiences are now fatigued. Polls that worked in 2024 ("which celebrity is hotter?") get half the engagement now. To stand out in 2026: the question needs to be sharper, more divisive, more specific. The bar has risen.`,
      },
      {
        h: "Cross-platform polls (TikTok to moomz)",
        body: `Emerging 2026 pattern: TikTok creators run the prompt on TikTok, send audience to an external anonymous poll for the actual vote. Then they post a follow-up video with the results. This pattern works because: (1) TikTok generates reach but limits poll formats; (2) external tools allow anonymous, multi-option polling; (3) the follow-up video creates a second engagement loop. Creators using this pattern report higher comment engagement on the follow-up than on the original. It's the most growth-positive pattern for serious creators in 2026, but requires more production effort.`,
      },
    ],
    polls: [
      { q: "Most common TikTok poll format you see?", options: ["Reveal", "Stitch debate", "Cringe ranking", "Static poll"] },
      { q: "Do you vote in TikTok polls?", options: ["Often", "Sometimes", "Never", "Only in comments"] },
      { q: "Watch full video before voting?", options: ["Yes", "No", "Sometimes", "Skim"] },
      { q: "Best engagement format?", options: ["Reveal", "Debate", "Ranking", "Comment thread"] },
      { q: "Cross-platform polls — try them?", options: ["Yes", "No", "Considering", "Too much work"] },
      { q: "TikTok polls feel saturated?", options: ["Yes", "No", "Some formats", "Always have"] },
      { q: "Vote anonymously or comment publicly?", options: ["Anonymously", "Comment", "Both", "Lurk"] },
      { q: "Best topic for viral poll?", options: ["Drama", "Food", "Relationships", "Pop culture"] },
    ],
    faq: [
      { q: "Does TikTok have native polls?", a: `Limited. The poll sticker exists for live streams and Stories, but feed videos don't have rich poll formats — creators improvise.` },
      { q: "Why do reveal polls work so well?", a: `They create two engagement phases: anticipation (votes) and validation (results). Both keep viewers in the video and the comments.` },
      { q: "Are stitch debates worth it?", a: `Yes if you can pair with another creator and pick a divisive low-stakes topic. Hard to scale solo.` },
      { q: "How to stand out in saturated formats?", a: `Sharper questions, faster pacing, more specific takes. The bar has risen — generic polls now underperform.` },
      { q: "Cross-platform polls cannibalize TikTok views?", a: `Yes, slightly. But the engagement quality and reusable content (follow-up video) more than compensate. Net positive for serious creators.` },
    ],
    related: ["poll-go-viral-tiktok", "viral-poll-formats", "fr-sondage-viral-tiktok", "polls-tiktok-live-en"],
    updatedAt: today,
  },

  // ============ EN 12 ============
  {
    slug: "the-rise-of-the-vibe-check-app",
    locale: "en",
    category: "blog",
    emoji: "🪞",
    title: "The Rise of the Vibe Check App (What's Behind It)",
    h1: "The Rise of the Vibe Check App: A Category, Not a Feature",
    description: `Vibe-check apps quietly became a category. moomz, NGL, Tellonym, Sendit — what they share, where they differ, and where the space is headed.`,
    intro: `Three years ago, "vibe check app" wasn't a category. It was a meme. Today, it's a real software space with multiple players, distinct UX patterns, and several hundred million monthly users in aggregate. Investors are funding it. Apple and Google curate it. Here's how the category emerged and where it's going.`,
    sections: [
      {
        h: "What makes something a vibe check app",
        body: `Three defining traits. One: fast input — voting or asking a question takes less than 5 seconds. Two: collective signal — the value comes from aggregated responses, not individual ones. Three: low-stakes social use — these aren't decision tools for real-world consequences, they're tools for social calibration. moomz, NGL, Tellonym, Sendit, and a dozen smaller players all share these traits. The category emerged because the previous primary tool for vibe-checking (group chats) became inefficient, and identified social media (Instagram, X) became too high-stakes. Vibe check apps fill the gap: fast, collective, low-stakes.`,
      },
      {
        h: "Why the category exploded after 2022",
        body: `Three converging factors. First, NGL's viral launch in 2022 proved the demand was massive. Second, post-pandemic social isolation created hunger for low-friction connection. Third, the Instagram/TikTok hyper-curated feed became exhausting; users wanted something rawer. Vibe check apps offered all three — viral mechanics, low friction, raw input. The growth curve from 2022 to 2026 mirrors the early growth of dating apps in 2014-2017: rapid category formation, multiple players experimenting with adjacent niches, eventual consolidation. We're probably late in the rapid-growth phase and entering consolidation in 2026-2027.`,
      },
      {
        h: "The polling axis vs the Q&A axis",
        body: `The category splits along two axes. Polling apps (moomz, Strawpoll, Polls Insta) ask multi-choice questions to a group. Q&A apps (NGL, Tellonym, Sendit) take open-ended questions to a target. Both are "vibe check" because the use case overlaps — but the product mechanics are different. Polling apps generate aggregate data. Q&A apps generate individual exchanges. The interesting move in 2026: hybrids. moomz combining polls and ASK Q&A on a single profile is the first major hybrid that worked. Expect more hybrids in 2027-28 as the category consolidates around the most engaging multi-mode designs.`,
      },
      {
        h: "Moderation as competitive moat",
        body: `The vibe check category has a hidden moat: trust and safety infrastructure. Ask.fm collapsed for the lack of it. New entrants who skimp on it die fast (a half-dozen NGL clones imploded in 2023). The serious players invest heavily — AI moderation, rate limits, abuse reporting, community guidelines enforcement. This investment compounds: better moderation enables broader audience (parents trust their teens to use it), which drives growth, which justifies more investment. The category bifurcates between safety-first players (who scale long-term) and shortcut players (who flame out within a year).`,
      },
      {
        h: "Where the category is going",
        body: `Three trends for 2027 and beyond. One: voice. Voice-based polls and Q&A are next, mirroring the move from text-only social to audio-first. Two: AI hosts. Apps will generate poll prompts daily, removing the need for users to think of questions themselves. Three: cross-app integration. Vibe check primitives (vote, ask) will appear as features inside non-vibe-check apps — Slack, dating apps, learning platforms. The category may become invisible the way "messaging" became invisible by 2018 — embedded everywhere, no longer a distinct app destination. Whether moomz, NGL, or another player wins the platform layer is open. The category itself is here to stay.`,
      },
    ],
    polls: [
      { q: "Vibe check apps you use?", options: ["NGL", "moomz", "Tellonym", "None"] },
      { q: "Polls or Q&A primarily?", options: ["Polls", "Q&A", "Both", "Neither"] },
      { q: "Best vibe check app overall?", options: ["NGL", "moomz", "Tellonym", "Sendit"] },
      { q: "Vibe check apps a fad?", options: ["Yes", "No", "Mixed", "Don't know"] },
      { q: "Pay for premium vibe check?", options: ["Yes", "No", "Already do", "Considering"] },
      { q: "Voice-based vibe check interesting?", options: ["Yes", "No", "Maybe", "Cringe"] },
      { q: "AI generating polls for you?", options: ["Cool", "Hate it", "Sometimes", "Already does"] },
      { q: "Embedded vs standalone app?", options: ["Standalone", "Embedded", "Both", "Don't care"] },
    ],
    faq: [
      { q: "What makes an app a vibe check app?", a: `Fast input, collective signal, low-stakes social use. Three traits together define the category.` },
      { q: "How big is the category?", a: `Several hundred million monthly active users across all players combined, mid-2026. Growing fast.` },
      { q: "Is the category just a fad?", a: `Possibly some players are, but the underlying use case (fast low-stakes collective signal) is structural. Format may change, demand persists.` },
      { q: "Will Instagram absorb the category?", a: `Partially — Instagram has copied features. But it can't replicate anonymity without contradicting its identity-based model.` },
      { q: "Best app for honest answers?", a: `Depends on use case. NGL for Q&A on Instagram, moomz for polls with anonymity, Tellonym for community Q&A.` },
    ],
    related: ["anonymous-qa-ask-ngl-moomz", "vibe-check-meaning", "ask-fm-est-mort-vive-l-anonyme", "gen-z-poll-culture"],
    updatedAt: today,
  },
];
