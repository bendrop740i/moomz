import type { SeoPage } from "./types";

const today = "2026-05-19";

export const idees3: SeoPage[] = [
  {
    slug: "festival-musique",
    locale: "fr",
    category: "idees",
    emoji: "🎪",
    title: "Idées de sondage festival de musique — 50 questions qui font voter avant la mainstage",
    h1: "Sondages festival : 50 idées qui sauvent ton week-end",
    description:
      "50 idées de sondage pour ton festival de musique : pré-line-up, choix de stage, débats entre potes. Crée ton sondage sur moomz et décide en 30 secondes.",
    intro:
      "Le festival, c'est 4 jours de décisions impossibles : qui on suit, on dort où, on prend quel pass, on porte quoi. Quand le groupe WhatsApp commence à débattre à 3h du mat, le sondage tranche en 30 secondes. Voici les angles qui marchent pour Coachella, Tomorrowland, Rock en Seine, et tous les festivals à plus de 10 potes. moomz te permet de poser 4, 5, 6 options là où le sticker Instagram te bloque à oui/non.",
    sections: [
      {
        h: "Le pré-festival : 3 mois avant, tout est encore négociable",
        body: "Le moment où tu as le plus de leviers c'est avant l'achat des billets. C'est là que tu sondes : on part à combien, on dort en camping ou en Airbnb, on prend le pass jour ou le pass full. Une fois les billets achetés, plus moyen de revenir en arrière. Les groupes qui s'organisent en sondages plutôt qu'en débats 4h de WhatsApp ferment leur budget plus tôt et économisent les vols early bird. Pose une question par décision, garde-les ouvertes 48h, et figeie la décision dès que la majorité est claire.",
      },
      {
        h: "Le line-up qui se chevauche : on suit qui ?",
        body: "Le drame de tous les festivals : ton artiste préféré joue en même temps qu'un autre que ta meilleure pote veut absolument voir. Au lieu de te séparer du groupe et de rater l'after, sonde le groupe la veille. Donne 4 options : Stage A, Stage B, on se sépare, on improvise. Le résultat fixe le point de RDV et évite que personne ne se retrouve à errer dans le festival sans réseau. Astuce moomz : le lien tient en SMS, marche même quand le 4G est saturé sur le site.",
      },
      {
        h: "Le débat outfit jour 2 : on assume ou on calme ?",
        body: "Jour 1 tout le monde est en mode Pinterest. Jour 2 ton dos te fait mal et la pluie a annoncé sa venue. Le sondage outfit en story 'cowboy hat oui ou non ?' marche toujours parce que la question est concrète et la réponse rapide. Les comptes festival qui font le plus d'interactions postent 3-4 sondages outfit par jour pendant l'event. Le sticker Insta limite à 2 options — bascule sur moomz quand tu veux proposer 'rave / boho / techno / chill' en une vue.",
      },
      {
        h: "Comment on intègre moomz dans le groupe pré-festival",
        body: "Crée un sondage moomz pour chaque grosse décision (transport, logement, budget repas, têtes d'affiche à voir absolument). Colle les 4-5 liens en haut du groupe WhatsApp avec une deadline. Quand le résultat est clair, screenshot et épingle. Le festival devient une suite de mini-décisions tranchées plutôt qu'une grosse conversation chaotique. Bonus : tu gardes la trace de qui voulait quoi, pratique pour les comptes après le retour.",
      },
    ],
    polls: [
      { q: "Camping ou Airbnb pour le festival ?", options: ["Camping 🏕️", "Airbnb 🛏️", "Hotel proche", "Van"] },
      { q: "Quel jour tu prends ?", options: ["Vendredi", "Samedi 🔥", "Dimanche", "Le pass full"] },
      { q: "Outfit jour 1 ?", options: ["Cowboy 🤠", "Rave 💜", "Boho", "Total black"] },
      { q: "Quel headliner tu rates si ça chevauche ?", options: ["Le pop", "L'électro 🎧", "Le rap", "Aucun, on se sépare"] },
      { q: "Budget bouffe sur 3 jours ?", options: ["<50€", "50-100€", "100-200€ 💸", ">200€"] },
      { q: "On dort combien d'heures par nuit ?", options: ["3-4h", "5-6h", "7h+ 😴"] },
      { q: "Pluie annoncée samedi, on assume ?", options: ["Poncho et on y va", "On reste au camp", "On improvise ☔"] },
      { q: "Verre réutilisable, c'est quel design ?", options: ["Logo officiel", "Custom 🎨", "Osef du verre"] },
      { q: "Drogue dans le crew ?", options: ["Sobre", "Alcool only 🍺", "Light", "On verra"] },
      { q: "Photo de groupe, on la prend où ?", options: ["Devant la mainstage", "Au sunset 🌅", "À la grande roue", "Bcp trop bourrés"] },
    ],
    faq: [
      {
        q: "Combien de temps avant un festival je dois lancer mes sondages logistiques ?",
        a: "Idéalement 8-12 semaines avant pour le transport et l'hébergement (les prix montent vite), et 1-2 semaines avant pour les line-ups et outfits. moomz garde tes sondages ouverts indéfiniment, tu peux y revenir.",
      },
      {
        q: "Le 4G est nul en festival, le sondage va marcher ?",
        a: "Le lien moomz est ultra léger (~30KB), il s'ouvre en quelques secondes même sur 3G saturée. Pour la prise de décision en live sur le site, c'est plus fiable qu'un sondage WhatsApp avec 80 messages au-dessus.",
      },
      {
        q: "On est 15 dans le groupe, le sondage marche pour tout le monde ?",
        a: "Oui, moomz n'a pas de limite de votants. Que vous soyez 3 ou 300, tout le monde vote via le même lien. Les résultats s'affichent en live.",
      },
      {
        q: "Est-ce que je peux faire un sondage anonyme pour éviter les drama ?",
        a: "Oui, par défaut les votes sur moomz sont anonymes : personne ne voit qui a voté quoi. Pratique quand la question est 'on l'invite ou pas ?'.",
      },
    ],
    related: ["soiree", "voyage", "musique"],
    updatedAt: today,
  },
  {
    slug: "road-trip-entre-amis",
    locale: "fr",
    category: "idees",
    emoji: "🚗",
    title: "Idées de sondage road trip entre amis — 50 questions qui évitent les disputes en voiture",
    h1: "Sondages road trip : 50 idées qui sauvent les 12h de route",
    description:
      "50 idées de sondage pour ton road trip entre potes : itinéraire, playlist, restos, qui conduit. Crée ton sondage moomz et roule sans débat sans fin.",
    intro:
      "Un road trip à 4 dans une voiture pendant 10 jours, c'est 10 jours de micro-décisions : on s'arrête où, on mange quoi, qui prend le volant, on dort où ce soir. Sans cadre, ça vire à la discussion sans fin. Le sondage en groupe tranche en 30 secondes et garde le moral. moomz fonctionne en SMS / WhatsApp / Insta — même quand vous traversez une zone blanche, le lien reste cliquable dès que le réseau revient.",
    sections: [
      {
        h: "L'itinéraire : on fait quel ordre ?",
        body: "L'erreur classique des road trips, c'est de tout décider à la première étape. Au lieu de débattre 2h au McDo, sonde le groupe : Bordeaux → Toulouse → Marseille ou direct Marseille puis remontée ? Donne 3-4 options réelles avec les pour/contre rapides (distance, lieu de dodo, météo). Le résultat fait gagner la journée. Bonus : tu peux relancer un sondage à mi-parcours si la météo change ou si quelqu'un est crevé.",
      },
      {
        h: "Playlist en voiture : la guerre du mode 'qui choisit'",
        body: "Chaque road trip a son moment 'mais c'est qui qui a mis ça'. Avant le départ, fais un sondage : on tourne par tranche d'1h ? Playlist commune Spotify ? Veto autorisé ? Selon le résultat, tu fixes la règle dès le départ. Et pour les choix de genres pendant la route (chill, rap, années 2000, podcast), un sondage rapide en passager évite les 30 minutes de débat sur AUX.",
      },
      {
        h: "Bouffe et étapes : la pause snack qui satisfait tout le monde",
        body: "À la pause autoroute, demander 'on mange quoi ?' à 4 affamés finit toujours en discussion stérile. Un sondage avec 4 options claires (sandwich, McDo, station chic, on roule encore 30min) tranche en 20 secondes. Pareil pour les étapes dîner le soir — propose 3 restos repérés à 10min de l'Airbnb, le groupe vote, on réserve. Tu économises l'énergie pour la suite.",
      },
      {
        h: "Le sondage moomz dans la voiture, comment on l'utilise",
        body: "Le conducteur reste concentré, c'est le passager avant qui anime. Il crée le sondage moomz sur son tel, balance le lien dans le WhatsApp du groupe (les passagers arrière votent), et lit le résultat à voix haute. Pour 4 personnes c'est 30 secondes. Avantage par rapport au vote oral : pas d'influence sociale, le timide vote vraiment ce qu'il pense. Et tu gardes l'historique pour rigoler après.",
      },
    ],
    polls: [
      { q: "Qui prend le volant en premier ?", options: ["Toi 🚗", "Moi", "Le plus reposé", "On tire au sort"] },
      { q: "Playlist road trip ?", options: ["Rap FR", "Classics 2000s", "Chill 🌅", "Mixé"] },
      { q: "Pause toutes les combien d'heures ?", options: ["1h30", "2h", "3h", "Quand ya envie"] },
      { q: "On dort où ce soir ?", options: ["Airbnb", "Hotel chic", "Camping 🏕️", "Chez un pote"] },
      { q: "Budget total par personne ?", options: ["<300€", "300-500€", "500-800€", ">800€ 💸"] },
      { q: "Pause repas autoroute ?", options: ["McDo", "Sandwich station", "Boulangerie 🥐", "On roule"] },
      { q: "Détour pour un spot panorama ?", options: ["Oui carrément", "Si c'est pas plus de 30min", "Non on file"] },
      { q: "Conduite de nuit ?", options: ["OK", "Pas après minuit 🌙", "Jamais"] },
      { q: "Activité une fois arrivés ?", options: ["Plage", "Resto", "Bar", "On dort 💤"] },
      { q: "On refait ça l'an prochain ?", options: ["Oui même crew", "Oui mais autre destination", "Jamais 😅"] },
    ],
    faq: [
      {
        q: "Comment éviter les disputes en road trip ?",
        a: "Décide en amont des règles : qui paie quoi, qui conduit quand, comment on tranche. Les sondages moomz pendant le trip remplacent les débats sans fin par des décisions à 30 secondes.",
      },
      {
        q: "Le sondage marche-t-il en zone sans réseau ?",
        a: "Tu peux créer le sondage en avance (à la pause), partager le lien et il reste valide indéfiniment. Les votes se font quand le réseau revient — pratique sur les routes de montagne.",
      },
      {
        q: "On est 6, qui paie l'essence ?",
        a: "Le sondage rapide 'on divise par 6 ou au prorata des km parcourus comme passager ?' évite le malaise du Lydia à la fin. moomz est anonyme, donc personne n'est gêné de voter contre le plus radin.",
      },
      {
        q: "Combien de sondages dans un road trip de 10 jours ?",
        a: "Un par jour suffit pour les grosses décisions (étape, resto, activité). Trop de sondages tue le sondage — garde-les pour les vraies questions où l'avis du groupe compte.",
      },
    ],
    related: ["voyage", "soiree", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "fans-kpop",
    locale: "fr",
    category: "idees",
    emoji: "💜",
    title: "Idées de sondage K-pop — 50 questions pour la fandom",
    h1: "Sondages K-pop : 50 idées qui mettent le fanclub d'accord",
    description:
      "50 idées de sondage K-pop pour ta fandom : bias, comeback, fanchant, photocard. Crée ton sondage moomz et fais voter tes mutuals.",
    intro:
      "La K-pop, c'est une économie d'opinions : ton bias, ton wrecker, le meilleur album, le concept le plus iconique. Et les sondages, c'est l'air qu'on respire sur Twitter et TikTok K-pop. Sauf que les sondages Twitter sont limités à 4 options et le sticker Insta à 2. moomz te donne 6+ options pour les classements de membres, les ranking d'eras, et tous les débats où 'oui/non' ne suffit pas. Anonyme par défaut — tu peux voter contre ton bias sans te faire défaire.",
    sections: [
      {
        h: "Le bias debate qui ne meurt jamais",
        body: "Demander à un fandom 'qui est ton bias ?' c'est ouvrir 4 ans de débats. Les sondages bias marchent pour les nouveaux groupes (les fans découvrent), pour les comebacks (le bias change parfois), et pour les anniversaires (revoter pour fun). Un sondage moomz avec les 7 ou 9 membres + 'multi' marche mieux qu'un sondage Twitter coupé à 4. Et le résultat te dit qui est l'ult bias du fanclub, info précieuse pour les fan events.",
      },
      {
        h: "Comeback : le ranking d'eras",
        body: "Chaque comeback relance le débat 'meilleure era'. Concept, choreo, MV, B-side preferred — chaque axe mérite son sondage. Les comptes K-pop fr qui scorent le mieux postent un sondage par axe le jour du comeback et compilent les résultats en threads après 48h. moomz te laisse mettre 6 eras + emoji par concept, ce que Twitter ne permet pas sans bricolage.",
      },
      {
        h: "Photocard trade : le sondage 'je trade ou je garde ?'",
        body: "Si tu pull une photocard rare, ta première question c'est 'je la garde ou je trade contre mon bias ?'. Au lieu de DM 12 mutuals, lance un sondage : Trade, Garde, Sell, On verra dans 1 mois. La fandom vote, et te donne le pouls. Particulièrement utile pour les PC à plusieurs centaines d'euros — la décision est mieux prise à 50 cerveaux qu'au tien seul.",
      },
      {
        h: "moomz dans la routine fan : comment on s'organise",
        body: "Avant un concert : sonde 'quel fanchant on prépare', 'quel cadeau pour l'idol', 'on se réveille à quelle heure pour la queue'. Pour un mini fan event entre mutuals : sonde le quartier, l'horaire, le café. Le lien moomz se colle dans le DM Twitter ou le groupe Discord, tout le monde vote en un tap. Anonyme = personne n'est gêné de voter contre l'idée la plus chère.",
      },
    ],
    polls: [
      { q: "Bias dans BTS ?", options: ["RM", "Jin", "Suga", "Jhope", "Jimin", "V"] },
      { q: "Meilleur comeback 2025 ?", options: ["Le pop", "Le sombre 🖤", "Le summer", "Le ballad"] },
      { q: "T'es plutôt 4ème gen ou 5ème ?", options: ["4ème 💜", "5ème ✨", "Les deux", "Encore en 3ème"] },
      { q: "Concert ou fanmeet ?", options: ["Concert 🎤", "Fanmeet 💕", "Les deux", "Streaming only"] },
      { q: "Album physique ou Spotify ?", options: ["Physique only", "Stream only 🎧", "Les deux"] },
      { q: "Photocard rare : trade ou keep ?", options: ["Trade", "Keep 💖", "Sell"] },
      { q: "Tu connais combien de fanchants par cœur ?", options: ["0-2", "3-5", "5-10", ">10 🎙️"] },
      { q: "On organise un cup sleeve event ?", options: ["Oui à l'anniv du bias", "Oui pour le comeback", "Trop cher"] },
      { q: "Tu lis les théories sur les MV ?", options: ["Toutes 🔍", "Les grosses", "Jamais"] },
      { q: "Lightstick : tu as combien ?", options: ["1", "2-3", "4+ 💜", "Je collectionne pas"] },
    ],
    faq: [
      {
        q: "Comment organiser un vote pour un fanclub K-pop ?",
        a: "Crée le sondage sur moomz (6+ options possibles, contrairement à Twitter), partage le lien dans le DM groupe ou ton Discord. Anonyme par défaut, donc personne n'est gêné.",
      },
      {
        q: "Pourquoi pas un sondage Twitter ?",
        a: "Twitter limite à 4 options et 7 jours max. moomz n'a pas de limite d'options ni de durée. Pratique pour ranker 9 membres d'un groupe ou 12 albums d'une discographie.",
      },
      {
        q: "Le sondage révèle qui a voté ?",
        a: "Non, moomz est anonyme. Tu peux voter contre ton bias sans risque, ou révéler que ton ult bias n'est pas celui que tout le monde pense.",
      },
      {
        q: "Combien de mutuals minimum pour que ce soit fun ?",
        a: "Dès 10 votes ça devient intéressant. Au-delà de 50, tu commences à avoir un vrai pouls du fandom local.",
      },
    ],
    related: ["musique", "ado", "discord"],
    updatedAt: today,
  },
  {
    slug: "anime-otaku",
    locale: "fr",
    category: "idees",
    emoji: "🌸",
    title: "Idées de sondage anime/manga — 50 questions qui font débattre la team otaku",
    h1: "Sondages anime/manga : 50 idées qui divisent la fandom",
    description:
      "50 idées de sondage pour les fans d'anime et manga : meilleur shonen, ship préféré, ending. Crée ton sondage moomz et tranche les débats otaku.",
    intro:
      "Demande à 10 otakus 'meilleur shonen' et tu déclenches 10 ans de débats. La fandom anime/manga vit du classement, du tier list, du ship war. moomz te permet de poser des sondages à 6 options là où Insta te bloque à 2 — parfait pour ranker les arcs de One Piece, les ships de Naruto ou les openings d'AOT. Anonyme, donc tu peux assumer le hot take.",
    sections: [
      {
        h: "Le big three et après : le sondage générationnel",
        body: "One Piece, Naruto, Bleach forment le big three qui structure 2 générations d'otakus. Mais en 2026, la question 'big three actuel' est légitime : Jujutsu Kaisen, Chainsaw Man, My Hero Academia ? Le sondage à 6 options réelles départage les générations. Bonus : tu peux faire un sondage par décennie pour voir comment les goûts évoluent. Insta et Twitter sont trop courts pour ce genre de classement, moomz est fait pour.",
      },
      {
        h: "Shipping wars : qui finit avec qui ?",
        body: "Le shipping anime est un sport. Sasuke/Sakura vs Sasuke/Naruto, Goku/Chichi vs Goku/Vegeta, Eren/Mikasa vs Eren/Historia. Lancer un sondage ship c'est ouvrir une discussion qui fait 200 commentaires. Garde la formulation neutre ('quel ship préféré ?') et les 4 options réelles. Les fandoms apprécient le sondage anonyme parce que ça leur permet d'admettre des ships honteux sans être grillés.",
      },
      {
        h: "Anime de la saison : le sondage hebdo",
        body: "Chaque saison sort 30-40 nouveaux animes. Le sondage 'anime de la saison' fait du tri en 48h. Propose les 5-6 candidats sérieux (ceux qui ont >7 sur MyAnimeList semaine 3), demande à ta fandom de voter. Ton groupe Discord ou ton Twitter sait quoi regarder, et toi tu gagnes du temps. Refais le sondage en fin de saison pour comparer hype vs réalité.",
      },
      {
        h: "moomz pour ton serveur Discord anime",
        body: "Le bot sondage Discord est ok mais limité à des polls 'reactions'. moomz te donne un vrai sondage hors plateforme : tu colles le lien dans le salon, les membres votent même s'ils sont sur mobile et n'ont pas accès au bot. Les résultats s'affichent en image clean que tu peux screen pour les threads de récap. Pratique pour les guildes de 200+ membres où le bot Discord rame.",
      },
    ],
    polls: [
      { q: "Big three actuel ?", options: ["JJK", "Chainsaw Man", "MHA", "Demon Slayer 🗡️"] },
      { q: "Meilleur arc One Piece ?", options: ["Marineford", "Water Seven", "Wano 🍙", "Dressrosa"] },
      { q: "Sub ou dub ?", options: ["Sub only 📺", "Dub", "Ça dépend de l'anime"] },
      { q: "Tu lis le manga avant ou après l'anime ?", options: ["Avant 📖", "Après", "Que l'anime", "Que le manga"] },
      { q: "Meilleur opening de tous les temps ?", options: ["AOT Guren no Yumiya", "Naruto Blue Bird", "JJK Kaikai Kitan", "Demon Slayer Gurenge 🔥"] },
      { q: "Ship préféré Naruto ?", options: ["NaruHina", "SasuSaku", "NaruSasu 💞", "ShikaTema"] },
      { q: "Saison anime 2026 ?", options: ["Spring", "Summer", "Fall 🍂", "Winter"] },
      { q: "Tu vas au Japon Expo ?", options: ["Tous les ans", "Parfois", "Jamais 😢"] },
      { q: "Goku ou Saitama ?", options: ["Goku", "Saitama", "Goku gagne facile", "Saitama one shot"] },
      { q: "Studio préféré ?", options: ["MAPPA", "Ufotable", "Ghibli ✨", "Bones"] },
    ],
    faq: [
      {
        q: "Comment trancher le débat 'meilleur anime' avec mes potes ?",
        a: "Crée un sondage moomz avec 5-6 candidats sérieux, partage dans le groupe, vote en 30 secondes. Plus efficace qu'une discussion WhatsApp qui dure 2 jours.",
      },
      {
        q: "Le sondage marche pour ranker plus de 6 options ?",
        a: "moomz supporte autant d'options que tu veux. Pour un tier list (S/A/B/C/D), crée 5 sondages par catégorie ou un grand sondage avec toutes les options.",
      },
      {
        q: "C'est anonyme ?",
        a: "Oui, personne ne voit qui a voté quoi. Tu peux admettre que tu préfères My Hero à Naruto sans être grillé dans ton serveur Discord.",
      },
      {
        q: "Combien de votes minimum pour un sondage anime crédible ?",
        a: "Dès 30 votes le résultat commence à refléter une tendance. Pour un classement de fandom, vise 100+ pour avoir un pouls.",
      },
    ],
    related: ["gaming-jv", "discord", "ado"],
    updatedAt: today,
  },
  {
    slug: "netflix-binge",
    locale: "fr",
    category: "idees",
    emoji: "📺",
    title: "Idées de sondage Netflix binge — 50 questions qui choisissent ta prochaine série",
    h1: "Sondages Netflix : 50 idées qui te font décider en 30 secondes",
    description:
      "50 idées de sondage Netflix pour ta soirée série : que regarder, quel genre, on continue ou on switch. Crée ton sondage moomz et arrête de scroller.",
    intro:
      "Le paradoxe Netflix : 4000 titres, 45 minutes à scroller, et zéro décision. Le sondage à 2 personnes (toi et ton mec/ta meuf, toi et ta colloc, toi et ton frère) résout ce paralysis. moomz te donne 4-6 options instantanées au lieu du sticker Insta à 2. Et anonyme, donc personne n'est jugé pour vouloir revoir Friends pour la 5ème fois.",
    sections: [
      {
        h: "Le scroll-paralysis : pourquoi on n'arrive jamais à choisir",
        body: "Quand 2 personnes décident, chacune fait des concessions et la décision optimale n'est jamais prise. Le sondage à 4 options fixé en avance (genre, durée, mood) tranche en 30 secondes. Astuce : présélectionne 4 vrais candidats sérieux (pas 'Netflix au hasard'), donne 30 secondes au sondage, le résultat fait foi. Les couples qui font ça finissent 3 séries par mois au lieu de 0.",
      },
      {
        h: "Le sondage colocation : décider sans la dispute",
        body: "À 4 colocs, choisir une série pour la soirée pizza c'est un cauchemar. Lance un sondage avec 4 propositions, deadline 5 minutes, le résultat décide. Bonus : tu peux faire un sondage par mood (action, comédie, doc, true crime) avant de passer aux titres. Ça réduit la friction et personne n'est frustré parce que tout le monde a voté.",
      },
      {
        h: "On continue ou on drop : le sondage mi-saison",
        body: "Episode 3, la série commence à fatiguer. Au lieu de te forcer à finir une saison de 10 épisodes par flemme, lance un sondage 'on continue ou on drop ?' à ton crew binge. Si 3 sur 4 disent drop, tu drop sans remords. Tu gagnes 6h de vie. Pareil pour les séries qui démarrent lentement — sonde après 2 épisodes plutôt qu'à l'épisode 7.",
      },
      {
        h: "Comment intégrer moomz à ta soirée Netflix",
        body: "Avant de t'asseoir, ouvre moomz, crée le sondage 'ce soir on regarde ?' avec 4 candidats. Balance le lien sur le groupe WhatsApp soirée. Le sondage tourne pendant l'apéro, tu lances la série au moment du dessert. Plus de scroll-coma, plus de frustration. Tu peux même garder un historique des choix pour rigoler à la fin de l'année.",
      },
    ],
    polls: [
      { q: "Ce soir on regarde ?", options: ["Comédie 😂", "Thriller 🔪", "Doc", "Romance 💕"] },
      { q: "Série ou film ?", options: ["Série", "Film 🎬", "Doc court"] },
      { q: "On bingewatch ou 1 ep ?", options: ["1 ep et on dort", "2-3 ep", "Toute la nuit 🌙"] },
      { q: "Sous-titres ou VF ?", options: ["VOSTFR", "VF", "VO sans sub 🇺🇸"] },
      { q: "Tu finis combien de séries par an ?", options: ["1-3", "4-10", "10+ 📺", "Je drop tout"] },
      { q: "Stranger Things ou Squid Game ?", options: ["Stranger Things", "Squid Game 🦑", "Les deux", "Aucun"] },
      { q: "Pop-corn ou pizza ?", options: ["Pop-corn 🍿", "Pizza", "Les deux", "Rien"] },
      { q: "Tu regardes en parallèle de ton tel ?", options: ["Tout le temps", "Parfois", "Jamais 🚫"] },
      { q: "On drop cette série ou on continue ?", options: ["Drop", "Continue", "Un ep de plus pour voir"] },
      { q: "Reboot ou suite, c'est mieux ?", options: ["Reboot", "Suite", "Les deux nuls"] },
    ],
    faq: [
      {
        q: "Comment choisir une série Netflix sans débattre 1h ?",
        a: "Présélectionne 4 titres en avance, fais voter ton crew sur moomz, deadline 5 minutes. Décision tranchée, scroll-paralysis terminé.",
      },
      {
        q: "Le sondage marche pour décider en couple ?",
        a: "Oui, même à 2 le sondage débloque la situation. moomz est anonyme, donc ton/ta partenaire ne sait pas si tu as voté contre son choix par flemme.",
      },
      {
        q: "Combien de séries on peut binge par mois ?",
        a: "Sans sondage : 0,5. Avec sondage de décision : 3-4. Le vrai goulot c'est de décider, pas de regarder.",
      },
      {
        q: "Et si on est plus de 4 colocs ?",
        a: "moomz n'a pas de limite. Tu peux avoir 8 votants sur le même sondage, le résultat reste lisible.",
      },
    ],
    related: ["netflix-series", "soiree", "couple"],
    updatedAt: today,
  },
  {
    slug: "foot-psg",
    locale: "fr",
    category: "idees",
    emoji: "⚽",
    title: "Idées de sondage PSG — 50 questions qui font débattre les supporters",
    h1: "Sondages PSG : 50 idées pour la team Parc des Princes",
    description:
      "50 idées de sondage PSG pour les supporters : compo, transferts, débats Champions League. Crée ton sondage moomz et tranche entre fans.",
    intro:
      "Le PSG c'est 3 saisons par semaine de débats : compo, transferts, coach, Champions League. WhatsApp groupes des supporters, Twitter, Discord — tout le monde a son hot take. Le sondage à 4-6 options sur moomz tranche le débat 'qui doit jouer ce soir' ou 'on signe qui en janvier'. Anonyme, donc tu peux admettre que tu préfères mettre untel sur le banc sans te faire défaire par les fanboys.",
    sections: [
      {
        h: "La compo avant un gros match",
        body: "2h avant le coup d'envoi, le débat compo bat son plein. Mbappé titulaire ? Donnarumma ou un autre gardien ? Qui en 6 ? Le sondage avec 4 compos types (4-3-3 offensif, 4-2-3-1, 3-5-2, 4-4-2) tranche en 10 minutes et fait kiffer le groupe. Les comptes PSG fr qui font ça avant chaque match ont des taux d'interaction monstres. moomz garde l'historique, tu peux comparer ce que les fans voulaient vs ce que Luis Enrique a fait.",
      },
      {
        h: "Mercato : le sondage qui anime l'été",
        body: "L'été parisien c'est 3 mois de rumeurs. Pour chaque cible sérieuse (un attaquant, un milieu, un défenseur), lance un sondage : on signe oui/non/à ce prix/jamais. La fandom locale a des avis tranchés qu'un sondage Twitter à 4 options n'arrive pas à capturer. moomz te donne la profondeur. Et tu peux rejouer le même sondage dans 6 mois pour voir si l'avis a changé.",
      },
      {
        h: "Champions League : le sondage des 1/8 et 1/4",
        body: "Le PSG en Champions, c'est la moitié de l'année dans l'émotion. Avant chaque tirage, sondage 'meilleur adversaire à éviter / qu'on aimerait tomber'. Après le tirage, sondage 'on passe oui ou non'. Pendant le match, sondage live 'tu changes quoi à la mi-temps ?'. moomz est rapide, le lien tient en SMS, marche même en hôpital chez ton pote opéré.",
      },
      {
        h: "Comment animer un groupe WhatsApp de supporters PSG avec moomz",
        body: "Un sondage par grand match (4-5 sondages par semaine en pic de saison). Avant : compo. Mi-temps : changements. Après : note du match. Mercato : signatures à viser. Coach : on garde / on vire. Garde les liens accessibles dans le pin du groupe. Bonus : screenshot les résultats des sondages anciens pour les sortir quand un fan se contredit ('mais t'avais voté contre lui en septembre').",
      },
    ],
    polls: [
      { q: "Mbappé doit-il revenir ?", options: ["Oui 🔥", "Jamais", "Si c'est pas cher", "Bof"] },
      { q: "Meilleur joueur PSG 2026 ?", options: ["Dembélé", "Doué", "Barcola", "Hakimi"] },
      { q: "Compo idéale 4-3-3 ?", options: ["Offensive 🔥", "Équilibrée", "Défensive", "3-5-2 plutôt"] },
      { q: "Luis Enrique : on garde ?", options: ["Oui", "Non", "Encore 1 an"] },
      { q: "On signe qui en attaque l'été prochain ?", options: ["Un 9 confirmé", "Un jeune talent", "Personne"] },
      { q: "Stade : Parc ou nouveau ?", options: ["Parc 🏟️ histoire", "Nouveau plus grand", "Osef"] },
      { q: "Champions League cette saison ?", options: ["On la gagne 🏆", "Demi-finale", "1/4 max", "1/8 sortie"] },
      { q: "Maillot domicile 2026 ?", options: ["Validé", "Moche", "Le 3rd est mieux"] },
      { q: "PSG vs OM : score ?", options: ["3-0 PSG", "2-1 PSG", "Match nul", "L'OM gagne 🤡"] },
      { q: "Tu vas au Parc combien de fois par saison ?", options: ["Toutes les semaines", "5-10 fois", "1-2 fois", "Jamais 📺"] },
    ],
    faq: [
      {
        q: "Comment organiser un sondage entre supporters PSG ?",
        a: "Crée le sondage moomz avec 4 options réalistes, balance le lien dans ton WhatsApp groupe ou Discord supporter. Anonyme, donc débat sans crispation.",
      },
      {
        q: "Pourquoi pas un sondage Twitter ?",
        a: "Twitter limite à 4 options et 7 jours. Pour ranker une compo à 11 joueurs ou un mercato à 6 cibles, moomz est plus adapté.",
      },
      {
        q: "Les votes sont visibles publiquement ?",
        a: "Non, c'est anonyme par défaut. Pratique pour admettre que tu voudrais voir untel sur le banc.",
      },
      {
        q: "Combien de votes pour qu'un sondage soit crédible ?",
        a: "Dès 50 votes le résultat reflète une vraie tendance. Au-delà de 200 tu as un vrai pouls du fanclub local.",
      },
    ],
    related: ["fitness-sport", "debat", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "nba-basket",
    locale: "fr",
    category: "idees",
    emoji: "🏀",
    title: "Idées de sondage NBA — 50 questions pour la team basket",
    h1: "Sondages NBA : 50 idées qui mettent les fans d'accord (ou pas)",
    description:
      "50 idées de sondage NBA pour les fans de basket : GOAT debate, MVP, trades, finals. Crée ton sondage moomz et règle les débats hoop.",
    intro:
      "Le débat NBA est éternel : Jordan vs LeBron, Wembanyama vs Doncic, Lakers vs Celtics. La culture basket est faite de classements, tier list, hot takes Twitter. moomz te donne 6 options là où le sondage Twitter en a 4. Parfait pour les debate GOAT, les MVP races, les power rankings. Et anonyme — tu peux assumer que ton MVP n'est pas le consensus.",
    sections: [
      {
        h: "GOAT debate : MJ vs LBJ et après",
        body: "Le débat GOAT est la conversation fondatrice du basket fan. MJ vs LBJ structure 30 ans de débats. En 2026, Kobe, Curry, Durant entrent dans la conversation. Lance le sondage avec 5-6 candidats sérieux + 'on s'en fout' et le résultat révèle la génération du fanclub. Les fans 90s votent MJ, les fans 2010s LBJ, les fans 2020s Curry. moomz te laisse capturer cette nuance que Twitter écrase.",
      },
      {
        h: "MVP race : le sondage hebdo",
        body: "La régulière saison c'est 6 mois de MVP race. Chaque mois, lance le sondage avec les 4-5 candidats du moment. Janvier : Jokic, Doncic, SGA, Giannis, Embiid ? Mars : qui s'est imposé ? Les comptes NBA fr qui font ça hebdomadairement scorent monstrueusement sur Twitter et Insta. moomz garde l'historique pour comparer ta prédiction de novembre avec le résultat final en avril.",
      },
      {
        h: "Trade deadline : sondage en live",
        body: "La trade deadline c'est 48h de folie. Pour chaque gros trade, lance un sondage 'qui gagne le trade ?' avec les 2 équipes + 'les deux gagnent' + 'les deux perdent'. La fandom NBA fr adore ça, et ça génère du débat sain. Bonus : screenshot le résultat et compare 6 mois plus tard avec la réalité du terrain. Tu auras les fans qui avaient raison vs ceux qui s'étaient plantés.",
      },
      {
        h: "moomz pour ton groupe NBA français",
        body: "Crée un sondage par grosse soirée (3-4 par semaine pendant les playoffs). Pendant les playoffs : sondage Game 1, prédiction série, MVP des finals. Pendant la régulière : MVP race, ROY, DPOY, trade deadline. Pin les liens dans ton groupe WhatsApp ou Discord. Tu transformes les conversations stériles en décisions chiffrées.",
      },
    ],
    polls: [
      { q: "GOAT NBA ?", options: ["Jordan 🐐", "LeBron", "Kobe", "Kareem"] },
      { q: "MVP cette saison ?", options: ["Jokic", "SGA", "Doncic", "Wembanyama 🇫🇷"] },
      { q: "Wembanyama : All-Star starter ?", options: ["Oui carrément", "Bientôt", "Pas cette année"] },
      { q: "Lakers ou Celtics ?", options: ["Lakers 💜", "Celtics 🍀", "Aucun", "Warriors plutôt"] },
      { q: "Tu regardes en VOD ou en live ?", options: ["Live (3h du mat) 😴", "VOD le matin", "Highlights only"] },
      { q: "Pass NBA League : ça vaut le coup ?", options: ["Oui", "Trop cher 💸", "J'ai du free stream"] },
      { q: "Joueur français préféré ?", options: ["Wemby", "Coulibaly", "Risacher", "Sarr"] },
      { q: "Finals 2026 ?", options: ["Celtics", "Nuggets", "Warriors", "Surprise 🤯"] },
      { q: "Style de jeu préféré ?", options: ["Run and gun", "Half court iso", "Big man 🪨", "Three point ball"] },
      { q: "Maillot iconique ?", options: ["Bulls 23 Jordan", "Lakers 24 Kobe", "Heat 6 LBJ", "Warriors 30 Curry"] },
    ],
    faq: [
      {
        q: "Comment décider entre potes du GOAT NBA ?",
        a: "Crée un sondage moomz avec 4-5 candidats, partage dans ton groupe, vote en 30 secondes. Moins relou qu'une conversation WhatsApp qui dure 4 jours.",
      },
      {
        q: "Le sondage marche pour ranker 10 joueurs ?",
        a: "Oui, moomz n'a pas de limite d'options. Pour un top 10 all-time, tu peux mettre tes 10 candidats dans le même sondage.",
      },
      {
        q: "Et pour le débat France vs USA ?",
        a: "Sondage 4 options : équipe France gagne / équipe USA / match serré / blowout USA. Anonyme, donc débat sain.",
      },
      {
        q: "Combien de votes pour un sondage NBA crédible ?",
        a: "30 votes pour un mini-débat groupe, 200+ pour un pouls Twitter français.",
      },
    ],
    related: ["fitness-sport", "debat", "foot-psg"],
    updatedAt: today,
  },
  {
    slug: "formule-1",
    locale: "fr",
    category: "idees",
    emoji: "🏎️",
    title: "Idées de sondage Formule 1 — 50 questions qui font débattre les fans F1",
    h1: "Sondages F1 : 50 idées pour ta team paddock",
    description:
      "50 idées de sondage Formule 1 pour la team F1 : pilote, écurie, GP préféré, podium. Crée ton sondage moomz et débat avec ton crew.",
    intro:
      "La F1 a explosé en France depuis Drive to Survive. Les fans ont des avis tranchés : Verstappen vs Hamilton, Ferrari vs Mercedes, Monaco vs Suzuka. Le sondage à 5-6 options sur moomz remplace le sondage Twitter limité à 4. Parfait pour ranker des écuries, des saisons, des GPs. Anonyme : tu peux assumer un hot take sans te faire défaire par les fanboys Verstappen.",
    sections: [
      {
        h: "Le débat GOAT : Hamilton, Verstappen, Schumacher, Senna",
        body: "Le GOAT F1 est plus ouvert que le GOAT NBA. Hamilton (7 titres, équerre record), Schumacher (7 titres historiques), Senna (icône), Verstappen (4 titres jeunes et compteur encore ouvert). Le sondage à 5 options départage les générations. Les comptes F1 fr qui font ça en début de saison génèrent du débat sain. moomz capture cette nuance, Twitter pas.",
      },
      {
        h: "Le pari du GP : qui sur le podium ?",
        body: "Le jeudi avant chaque GP, lance le sondage 'podium dimanche ?' avec 4-5 pilotes candidats. La fandom adore le pari implicite et revient le lundi pour comparer. Les comptes Insta F1 qui font ça toutes les semaines fidélisent leur audience. Et toi tu gardes l'historique pour voir qui a la meilleure boule de cristal du groupe.",
      },
      {
        h: "Transferts et choix écuries : le sondage été",
        body: "L'été F1 c'est le théâtre des transferts (Hamilton chez Ferrari, le coup du siècle). Pour chaque rumeur, sonde : on signe ou pas, à quel prix, contre qui. Les fanclubs Ferrari, Mercedes, Red Bull alimentent des conversations qu'un sondage moomz tranche en 24h. Tu peux même faire un sondage 'écurie la plus crédible 2027' avec 10 options.",
      },
      {
        h: "moomz pendant un GP : le sondage live",
        body: "Pendant le GP, sondages live : 'safety car arrive ?', 'undercut ou overcut ?', 'qui gagne ?'. Le lien moomz tient en SMS, tu peux le partager pendant les pubs. Bonus : les groupes WhatsApp F1 qui font ça pendant chaque course transforment le GP en jeu collectif. Tu ne regardes plus seul, tu joues avec 30 potes.",
      },
    ],
    polls: [
      { q: "GOAT F1 ?", options: ["Hamilton 🌑", "Schumacher 🔴", "Senna 💛", "Verstappen 🔵"] },
      { q: "Champion 2026 ?", options: ["Verstappen", "Norris", "Leclerc 🇲🇨", "Russell"] },
      { q: "GP préféré du calendrier ?", options: ["Monaco", "Spa", "Suzuka 🇯🇵", "Silverstone"] },
      { q: "Format sprint : on garde ?", options: ["Oui c'est cool", "Non c'est nul", "Plus rare"] },
      { q: "Drive to Survive : tu regardes ?", options: ["Tous les épisodes", "Parfois", "Jamais 🚫"] },
      { q: "Hamilton chez Ferrari : succès ?", options: ["Titre cette année", "Top 3 oui", "Flop", "Mi-fig mi-raisin"] },
      { q: "Tu te lèves pour les GPs asiatiques ?", options: ["Oui chaque fois", "Si c'est important", "Jamais"] },
      { q: "Équipe préférée ?", options: ["Ferrari ❤️", "Mercedes", "Red Bull", "McLaren 🧡"] },
      { q: "Pilote français à suivre ?", options: ["Gasly", "Ocon", "Hadjar 🆕", "Aucun pour l'instant"] },
      { q: "Direction de course : trop sévère ?", options: ["Oui trop", "Juste comme il faut", "Pas assez"] },
    ],
    faq: [
      {
        q: "Comment organiser un pari GP entre potes ?",
        a: "Crée le sondage moomz le jeudi avec 4-5 pilotes candidats au podium. Tout le monde vote avant la course, screenshot le résultat dimanche soir.",
      },
      {
        q: "Combien d'options pour un sondage F1 ?",
        a: "Pour un débat GOAT 4-5 options. Pour un ranking écuries 10. moomz n'a pas de limite, contrairement à Twitter (4 max).",
      },
      {
        q: "C'est anonyme ?",
        a: "Oui, tu peux voter Verstappen GOAT sans te faire défaire par les Ham fans.",
      },
      {
        q: "Et pendant la course ?",
        a: "Le lien moomz tient en SMS, tu peux faire des sondages live pendant les safety cars ou les pauses pub.",
      },
    ],
    related: ["fitness-sport", "debat", "voyage"],
    updatedAt: today,
  },
  {
    slug: "coupe-du-monde",
    locale: "fr",
    category: "idees",
    emoji: "🏆",
    title: "Idées de sondage Coupe du Monde — 50 questions pour la team Bleus",
    h1: "Sondages Coupe du Monde : 50 idées pour la fan zone",
    description:
      "50 idées de sondage Coupe du Monde pour la team Bleus : compo Deschamps, pronos, débats finale. Crée ton sondage moomz et fais voter la fan zone.",
    intro:
      "Une Coupe du Monde c'est un mois de transe collective. Pronos avant tournoi, compo avant chaque match, débats post-match. moomz remplace les sondages WhatsApp qui se perdent dans 200 messages. Lien court, 4-6 options, anonyme. Parfait pour les groupes fan zone, les pronos famille, les débats apéro.",
    sections: [
      {
        h: "Le prono champion : 32 équipes, 4 candidats",
        body: "Avant le coup d'envoi, tout le monde a son prono. Lance le sondage 'qui gagne la Coupe du Monde' avec 6 candidats sérieux + 'surprise'. Les groupes famille adorent. Screenshot le résultat, on le ressort à la finale pour rigoler de qui s'est planté. moomz garde le sondage actif tout le tournoi.",
      },
      {
        h: "Compo Bleus : Deschamps a raison ou pas ?",
        body: "Chaque sélection Deschamps déclenche le débat. Le sondage 'compo idéale' avec 4 versions (offensive 4-3-3, équilibrée 4-2-3-1, défensive 4-4-2, surprise 3-5-2) anime la fan zone. Refais le sondage avant chaque match pour voir comment l'opinion évolue selon les résultats.",
      },
      {
        h: "Le pari MVP : ballon d'or du tournoi",
        body: "Mbappé, Bellingham, Vinicius, un surprise ? Le sondage MVP avant le tournoi vs MVP à la fin révèle qui a la meilleure intuition du groupe. Bonus : sonde aussi 'meilleur but du tournoi', 'meilleur gardien', 'révélation'. Les comptes foot fr qui font ça ont une rétention monstre pendant 4 semaines.",
      },
      {
        h: "moomz pour la fan zone à la maison",
        body: "Avant chaque match Bleus : compo, score prono, buteur. Pendant la mi-temps : changements à faire. Après : note du match, homme du match. La famille vote sur son tel pendant la pub. Tu transformes le canapé en mini-studio. Le lien moomz se colle dans le WhatsApp famille et marche sur tous les portables.",
      },
    ],
    polls: [
      { q: "Qui gagne la Coupe du Monde ?", options: ["France 🇫🇷", "Brésil", "Argentine", "Angleterre", "Surprise"] },
      { q: "Compo Bleus en finale ?", options: ["4-3-3 offensive", "4-2-3-1", "4-4-2", "3-5-2"] },
      { q: "Mbappé capitaine, c'est validé ?", options: ["Oui carrément", "Bof", "Pas le bon profil"] },
      { q: "Meilleur but du tournoi ?", options: ["Coup franc", "Reprise volée ⚽", "Solo run", "Tête"] },
      { q: "Tu regardes où le match ?", options: ["Chez toi", "Bar", "Fan zone 🎉", "Chez les parents"] },
      { q: "Pronostic score finale ?", options: ["2-1 France", "1-0", "3-2", "Penalty 😱"] },
      { q: "Adversaire le plus dangereux ?", options: ["Argentine", "Brésil", "Allemagne", "Espagne"] },
      { q: "Meilleur joueur des Bleus ?", options: ["Mbappé", "Tchouaméni", "Saliba", "Maignan"] },
      { q: "Si on perd, c'est la faute de qui ?", options: ["Deschamps", "L'arbitre 🤬", "Le buteur qui rate", "La VAR"] },
      { q: "Une 3ème étoile, c'est pour ?", options: ["2026", "2030", "Jamais 😢", "Avant qu'on s'y attende"] },
    ],
    faq: [
      {
        q: "Comment organiser un prono Coupe du Monde en famille ?",
        a: "Crée un sondage moomz avec les 6-8 favoris, partage le lien dans le WhatsApp famille. Chacun vote, screenshot, on compare à la fin.",
      },
      {
        q: "Sondage pendant le match, ça marche ?",
        a: "Oui, le lien est ultra léger et s'ouvre en 2 secondes. Sondage à la mi-temps sur les changements, c'est un classique des fan zones.",
      },
      {
        q: "C'est anonyme ?",
        a: "Oui, donc tu peux voter contre les Bleus en finale sans te faire bannir du repas de famille.",
      },
      {
        q: "Combien de personnes max sur un sondage ?",
        a: "moomz n'a pas de limite. Ton groupe de 50 amis fan zone vote sur le même lien.",
      },
    ],
    related: ["foot-psg", "fitness-sport", "famille"],
    updatedAt: today,
  },
  {
    slug: "fortnite",
    locale: "fr",
    category: "idees",
    emoji: "🎮",
    title: "Idées de sondage Fortnite — 50 questions pour ta squad",
    h1: "Sondages Fortnite : 50 idées pour la squad Battle Royale",
    description:
      "50 idées de sondage Fortnite pour ta squad : skin préféré, drop spot, meta. Crée ton sondage moomz et décide en lobby.",
    intro:
      "Fortnite c'est 6 ans de saisons, 200 skins, 50 spots de drop. Chaque squad a ses débats : on drop où, on prend quel skin, le meta tilte vers SMG ou shotgun. moomz remplace les votes Discord limités à 5 réactions. Sondage à 6 options, vote en 1 tap, parfait entre les games quand tu attends que ton pote revienne des chiottes.",
    sections: [
      {
        h: "Le drop spot : la décision la plus importante de chaque game",
        body: "70% des défaites Battle Royale viennent d'un drop spot mal choisi (trop contested, trop loin du loop, trop loot pauvre). Le sondage 'on drop où ?' avec 4-5 spots favoris tranche en 10 secondes pendant le lobby. Bonus : tu peux faire un sondage par mode (solo, duo, squad) avec des spots différents. Les squads qui font ça ont 30% de win rate en plus.",
      },
      {
        h: "Skin et battle pass : le sondage qui anime la communauté",
        body: "Chaque saison sort 7-8 skins. Le sondage 'meilleur skin du battle pass' anime la communauté pendant 3 mois. Refais le sondage en fin de saison pour voir comment l'opinion a évolué (souvent le tier 100 finit par décevoir). Pour les bundles cash shop, sondage 'on achète à 1500 V-bucks ou pas'. moomz est plus rapide qu'un sondage Discord.",
      },
      {
        h: "Le meta : SMG, shotgun, sniper ?",
        body: "Chaque patch déplace le meta. Sondage hebdo 'arme préférée du patch' avec 5-6 options. Les comptes Fortnite fr qui font ça scorent monstrueusement. moomz te donne 6 options là où Twitter te limite à 4 et où Discord te bloque à 5 reactions emoji. Tu peux aussi sonder 'on rage quit ou on continue' après un patch nul.",
      },
      {
        h: "moomz dans Discord : le sondage hors-bot",
        body: "Le bot sondage Discord est ok mais limité. moomz te donne un vrai sondage hors plateforme. Tu colles le lien dans le salon vocal, tout le monde vote sur son tel pendant que la game se lance. Et tu peux pin les sondages permanents (drop favori, skin préféré, meta) pour les nouveaux membres.",
      },
    ],
    polls: [
      { q: "On drop où ?", options: ["Tilted 🏙️", "Pleasant", "Loot Lake", "Random map"] },
      { q: "Skin préféré du battle pass ?", options: ["Tier 1", "Tier 50", "Tier 100 🌟", "Le skin caché"] },
      { q: "Mode favori ?", options: ["Solo", "Duo", "Squad 👥", "Zero build"] },
      { q: "Build ou no-build ?", options: ["Build only 🏗️", "Zero build", "Les deux"] },
      { q: "Arme préférée ?", options: ["SMG", "Shotgun 💥", "Sniper", "AR"] },
      { q: "Meilleur event Fortnite ?", options: ["The End", "Travis Scott concert 🎤", "Big Bang", "Marvel takeover"] },
      { q: "Tu mets combien sur le battle pass ?", options: ["950 V-bucks", "Free seulement", "Tier 100 d'avance 💸"] },
      { q: "On essaie un nouveau mode ?", options: ["LTM", "Creative", "Save the World", "Squad rotation"] },
      { q: "Le meta actuel ?", options: ["Validé", "Cassé 😡", "Mid", "Trop campy"] },
      { q: "Si on perd, on rage ou on relance ?", options: ["Relance 🔁", "Rage quit", "Pause 10min", "Sleep"] },
    ],
    faq: [
      {
        q: "Comment décider du drop spot avec ma squad ?",
        a: "Sondage moomz avec 4-5 spots favoris, vote en 10 secondes pendant le lobby. Plus efficace qu'un débat vocal qui dure 2 games.",
      },
      {
        q: "Pourquoi pas un bot Discord ?",
        a: "Les bots sondage Discord sont limités à 5 réactions emoji et le résultat est moins clair. moomz te donne un vrai compteur live avec barres animées.",
      },
      {
        q: "Le sondage marche pendant qu'on joue ?",
        a: "Oui, tu votes sur ton tel pendant le lobby. moomz est ultra léger, pas besoin de quitter la game.",
      },
      {
        q: "Combien de votes pour qu'un sondage soit valide ?",
        a: "Pour une squad de 4, 4 votes suffisent. Pour un débat communauté Discord, vise 30+.",
      },
    ],
    related: ["gaming-jv", "discord", "ado"],
    updatedAt: today,
  },
  {
    slug: "minecraft",
    locale: "fr",
    category: "idees",
    emoji: "⛏️",
    title: "Idées de sondage Minecraft — 50 questions pour ton serveur",
    h1: "Sondages Minecraft : 50 idées pour la team builders",
    description:
      "50 idées de sondage Minecraft pour ton serveur : seed, mode, build préféré, mob favori. Crée ton sondage moomz et fais voter ton serveur.",
    intro:
      "Minecraft c'est 15 ans de communauté, des serveurs de 4 à 4000 joueurs, et des débats sans fin sur survival vs creative, hardcore vs peaceful, redstone vs build. moomz remplace les sondages NPC ou les /vote in-game limités. Lien externe, 6 options, vote sur le tel. Parfait pour décider du prochain projet de serveur ou de la prochaine màj qu'on adopte.",
    sections: [
      {
        h: "Le mode de jeu : Survival, Creative, Hardcore ?",
        body: "Chaque communauté Minecraft a sa préférence. Survival pour la satisfaction du gameplay, Creative pour la liberté de build, Hardcore pour l'adrénaline. Le sondage à 4 options + 'modded' départage la communauté. Sur un serveur de 30+ joueurs, c'est crucial pour choisir le prochain monde. moomz te donne un sondage hors plateforme que tout le monde peut voir et sur lequel tout le monde vote.",
      },
      {
        h: "Le build vote : qui a fait le plus beau ?",
        body: "Sur un serveur multiplayer, l'event 'build vote' anime la communauté. Donne aux 4-6 candidats un délai (1 semaine), screenshot les builds, lance le sondage moomz avec les screens en thumbnail. Vote anonyme, donc personne ne se sent obligé de voter pour le pote. Les serveurs qui font ça mensuellement fidélisent leur communauté.",
      },
      {
        h: "Snapshot et màj : on update ou pas ?",
        body: "Chaque snapshot Mojang divise. Les serveurs hardcore veulent updater pour les nouveautés, les serveurs builds attendent que les datapacks soient compatibles. Le sondage 'on update vers 1.X ?' à 3-4 options tranche le débat. Bonus : sondage 'feature préférée du snapshot' génère 50 votes par semaine sur les gros serveurs.",
      },
      {
        h: "moomz pour ton serveur : le workflow",
        body: "Crée le sondage moomz, colle le lien dans ton Discord serveur ou le chat in-game (avec un plugin link shortener si besoin). Les joueurs votent sur leur tel ou via navigateur. Pin le résultat dans #announcements. Plus efficace que /vote yes/no en jeu qui ne capture pas la nuance.",
      },
    ],
    polls: [
      { q: "Mode préféré ?", options: ["Survival ⛏️", "Creative 🎨", "Hardcore 💀", "Modded"] },
      { q: "Tu construis quoi en premier ?", options: ["Maison sur un arbre", "Bunker", "Cabane wood 🪵", "Château"] },
      { q: "Mob préféré ?", options: ["Axolotl 💕", "Allay", "Wolf", "Enderman"] },
      { q: "Tu joues en VR ?", options: ["Oui c'est ouf", "Jamais", "Pas testé"] },
      { q: "Diamant à quelle profondeur ?", options: ["Y=-58", "Y=11", "Y=-50", "Au random"] },
      { q: "Plus belle biome ?", options: ["Cherry blossom 🌸", "Mushroom", "Mesa", "Lush cave"] },
      { q: "Boss préféré ?", options: ["Ender Dragon 🐉", "Wither", "Warden", "Elder Guardian"] },
      { q: "Skin custom ou défaut ?", options: ["Custom toujours", "Default Steve", "Alex"] },
      { q: "On lance un nouveau serveur ?", options: ["Oui vanilla", "Oui modded", "Survival multiplayer", "Creative free build"] },
      { q: "Update 1.21 : validé ?", options: ["Oui top", "Bof", "On reste sur 1.20"] },
    ],
    faq: [
      {
        q: "Comment organiser un vote sur mon serveur Minecraft ?",
        a: "Crée le sondage moomz, colle le lien dans ton Discord. Les joueurs votent en 10 secondes, résultat live. Plus clean qu'un /vote in-game.",
      },
      {
        q: "Combien d'options pour un sondage Minecraft ?",
        a: "moomz n'a pas de limite. Pour ranker 8 builds dans un event, mets les 8 dans le sondage.",
      },
      {
        q: "Le vote est anonyme ?",
        a: "Oui, donc tes joueurs peuvent voter contre le build de l'admin sans crainte.",
      },
      {
        q: "Et pour les sondages snapshot/update ?",
        a: "Lance le sondage 'on update vers la nouvelle version ?' avec 3 options (oui/non/on attend). Tu prends la décision au feedback collectif.",
      },
    ],
    related: ["gaming-jv", "discord", "ado"],
    updatedAt: today,
  },
  {
    slug: "twitch-streamer",
    locale: "fr",
    category: "idees",
    emoji: "🎙️",
    title: "Idées de sondage Twitch — 50 questions pour engager ton chat",
    h1: "Sondages Twitch : 50 idées qui font kiffer ton chat",
    description:
      "50 idées de sondage pour ta chaîne Twitch : que jouer, débats stream, choix viewers. Crée ton sondage moomz et boost l'engagement.",
    intro:
      "Le chat Twitch décide. Quoi jouer, quel skin, qui inviter en collab, quelle décision in-game prendre. La fonction sondage native Twitch est ok mais limitée à 5 options et disparaît à la fin du stream. moomz te donne un sondage persistant, 6+ options, partageable hors plateforme. Parfait pour les décisions long-terme (next stream, calendrier collab) et pour les viewers qui veulent revoter après le stream.",
    sections: [
      {
        h: "Le sondage de début de stream : on joue quoi ?",
        body: "Beaucoup de streamers ouvrent leur stream avec 'on joue quoi ?' et le chat répond en spam. Le sondage à 4-5 jeux fixés en avance tranche la décision en 2 minutes. Les viewers se sentent écoutés, le chat ne déraille pas. Bonus : si tu lances le sondage 30 minutes avant le stream sur Twitter ou Discord, les viewers arrivent avec une décision déjà prise.",
      },
      {
        h: "Les choix in-game : let chat decide",
        body: "Pour les RPG, les choix de dialogue, les builds de classe, le chat adore voter. La fonction sondage Twitch est ok pour ça mais ne capture pas plus de 5 options. Pour un build complet à 8 stats à répartir, moomz est plus adapté. Et tu gardes l'historique des décisions, pratique pour les viewers qui rejoignent au milieu du stream.",
      },
      {
        h: "Le sondage de fin de stream : feedback",
        body: "À la fin du stream, sonde 'meilleur moment ?', 'qu'est-ce qu'on refait ?', 'next jeu ?'. Le sondage moomz reste actif après l'offline, donc les viewers VOD peuvent voter aussi. Tu transformes ton stream en boucle d'amélioration. Les streamers qui font ça hebdomadairement scorent en croissance de followers.",
      },
      {
        h: "moomz dans ton workflow de streamer",
        body: "Bookmark moomz dans ton browser source OBS pour partager facilement. Pour les sondages permanents (calendrier hebdo, jeux à essayer), pin le lien dans ta description Twitch et ton Discord. Pour les sondages live, génère le QR code et affiche-le 5 secondes à l'écran. Les viewers tel + chat votent en parallèle. Engagement multiplié.",
      },
    ],
    polls: [
      { q: "On joue à quoi ce soir ?", options: ["FPS", "RPG", "Variety 🎲", "Just chatting"] },
      { q: "Quel jeu pour le marathon weekend ?", options: ["Long jeu", "Speedrun", "Coop avec viewers 👥", "Le truc qui sort vendredi"] },
      { q: "On fait une collab avec qui ?", options: ["Streamer A", "Streamer B", "Personne 🔒", "Surprise"] },
      { q: "Format préféré ?", options: ["Gameplay only", "Just chatting", "Reaction 📺", "Mix"] },
      { q: "On garde la cam ou off ?", options: ["Cam toujours", "Off pour le tryhard", "Sondage à chaque stream"] },
      { q: "Stream à quelle heure ?", options: ["18h-21h", "21h-minuit 🌙", "Aprem", "Variable"] },
      { q: "Subgoal next ?", options: ["100 subs", "Pic d'audience", "Custom emote", "On fait pas de goal"] },
      { q: "On lance une chaîne YT en parallèle ?", options: ["Oui carrément", "Bof", "Que des highlights 🎬"] },
      { q: "Donation alerts : on garde ou trop relou ?", options: ["On garde 💕", "Trop relou", "Custom alerts"] },
      { q: "Mod ou pas mod sur le chat ?", options: ["Mod strict", "Light mod", "No mod 🌪️", "Auto only"] },
    ],
    faq: [
      {
        q: "Pourquoi pas le sondage natif Twitch ?",
        a: "Il marche bien en live mais disparaît à la fin du stream. moomz reste actif, persistant et partageable sur Discord/Twitter.",
      },
      {
        q: "Le sondage marche pour les viewers VOD ?",
        a: "Oui, tant que le sondage moomz est ouvert, les viewers qui regardent en replay peuvent voter et impacter le résultat.",
      },
      {
        q: "Comment afficher le sondage à l'écran ?",
        a: "Crée le lien moomz, génère un QR code (via n'importe quel générateur), affiche le QR en BRB ou en overlay. Les viewers tel votent en 5 secondes.",
      },
      {
        q: "Combien de votes pour qu'un sondage soit fun ?",
        a: "Dès 20 votes c'est sympa. Les gros streamers (1000+ viewers) ont régulièrement 100+ votes par sondage.",
      },
    ],
    related: ["discord", "gaming-jv", "tiktok"],
    updatedAt: today,
  },
  {
    slug: "youtubeur-tiktokeur",
    locale: "fr",
    category: "idees",
    emoji: "🎬",
    title: "Idées de sondage créateur YouTube/TikTok — 50 questions pour ta communauté",
    h1: "Sondages créateurs : 50 idées qui font voter ta communauté",
    description:
      "50 idées de sondage pour créateurs YouTube et TikTok : prochain contenu, format, collab, miniature. Crée ton sondage moomz et fais décider tes abonnés.",
    intro:
      "Être créateur en 2026, c'est itérer en continu. Quelle vidéo faire ensuite, quelle miniature, quel format. Le sondage est l'outil d'A/B test que tu peux faire gratuitement avec ta communauté. YouTube community post limite à 5 options, TikTok stories limite à 2. moomz te donne 6+ options et un lien partageable partout (Insta, Discord, Telegram). Parfait pour les décisions de contenu et le test de miniatures.",
    sections: [
      {
        h: "Le prochain contenu : let your audience decide",
        body: "Tes meilleurs vidéos sont celles que ton audience t'a réclamées. Au lieu de poster une question ouverte ('vous voulez quoi ?'), structure le sondage avec 4-5 idées concrètes que tu as déjà en tête. La communauté vote, tu produis le gagnant. Bonus : tu peux annoncer le résultat en mini-vidéo Shorts/Reels, ce qui crée du contenu autour du contenu.",
      },
      {
        h: "A/B test de miniature : le secret des gros YouTubeurs",
        body: "Les gros créateurs (MrBeast, etc.) A/B testent leurs miniatures avec une dizaine d'options. moomz te permet de faire ça gratuitement : upload 4 miniatures candidates, sonde ta communauté avec 4 options, prends la gagnante. CTR meilleur de 20-50% selon les cas. Tu fais ça pour chaque vidéo importante.",
      },
      {
        h: "Format et longueur : ce que ton audience kiffe vraiment",
        body: "Sonde régulièrement 'tu préfères les vidéos de 8min ou 20min ?', 'shorts ou long format ?', 'vlog ou tuto ?'. Les réponses guident ta stratégie. Refais le sondage tous les 6 mois car l'audience évolue. moomz te garde l'historique, tu peux voir comment les préférences ont changé.",
      },
      {
        h: "moomz dans ton workflow créateur",
        body: "Sondage tous les vendredis sur ta story Insta + post community YouTube pour la vidéo de la semaine d'après. Sondage avant chaque upload pour la miniature (URL en description). Sondage post-vidéo pour le feedback. Le lien moomz est court (~30 chars), tient en story, marche partout. Ça remplace les outils payants type Survey Monkey.",
      },
    ],
    polls: [
      { q: "Prochaine vidéo ?", options: ["Tuto", "Vlog", "Challenge 🎯", "Reaction"] },
      { q: "Format préféré ?", options: ["<5 min", "10-15 min", "20+ min 📹", "Shorts only"] },
      { q: "Miniature : laquelle pour la prochaine ?", options: ["Visage choqué 😱", "Texte rouge", "Side-by-side", "Aesthetic"] },
      { q: "On collab avec qui ?", options: ["Petit créateur", "Gros créateur", "Personne pour l'instant", "Surprise 🤫"] },
      { q: "Posting schedule ?", options: ["1/sem", "2/sem", "3+ par sem 🔥", "Quand j'ai envie"] },
      { q: "Live ou pré-enregistré ?", options: ["Live", "Pré-enregistré", "Mix"] },
      { q: "Best app de montage ?", options: ["CapCut", "Premiere 💻", "DaVinci", "Final Cut"] },
      { q: "On crée un Discord communauté ?", options: ["Oui carrément", "Pas le temps", "Plus tard 🕐"] },
      { q: "Tu lis tous les commentaires ?", options: ["Tous", "Les premiers", "Quelques", "Jamais 😅"] },
      { q: "Quel est ton plus gros levier pour grow ?", options: ["Qualité", "Quantité", "SEO 🔍", "Algorithme"] },
    ],
    faq: [
      {
        q: "Comment décider du sujet de ma prochaine vidéo ?",
        a: "Lance un sondage moomz avec 4 idées que tu as déjà en tête. La gagnante a une garantie d'audience. Plus efficace que de poster une question ouverte.",
      },
      {
        q: "Le sondage marche pour tester des miniatures ?",
        a: "Oui, upload 4 versions, sonde ta communauté, prends la gagnante. Méthode A/B test gratuite que les gros créateurs paient à des outils dédiés.",
      },
      {
        q: "Combien de votes pour avoir un signal fiable ?",
        a: "100+ votes pour un test miniature. 30+ pour une question de format. Plus tu as d'audience, plus le signal est précis.",
      },
      {
        q: "C'est anonyme ?",
        a: "Oui, ton audience vote sans peur du jugement. Tu obtiens leur vraie préférence, pas leur réponse polie.",
      },
    ],
    related: ["tiktok", "instagram-story", "musique"],
    updatedAt: today,
  },
  {
    slug: "couple-longue-distance",
    locale: "fr",
    category: "idees",
    emoji: "💌",
    title: "Idées de sondage couple longue distance — 50 questions qui maintiennent la complicité",
    h1: "Sondages couple LDR : 50 idées qui rapprochent malgré les km",
    description:
      "50 idées de sondage pour couple longue distance : retrouvailles, projets, mini-jeux. Crée ton sondage moomz et garde la flamme avec ton/ta partenaire.",
    intro:
      "Le couple longue distance (LDR) c'est 80% de communication asynchrone : SMS, FaceTime quotidien, et le reste. La complicité se construit dans les micro-interactions, et le sondage à 4 options envoyé entre deux cours/réunions devient un mini-jeu qui rapproche. moomz est parfait pour ça : lien court, anonyme (même à 2 personnes), résultat live. Idéal pour planifier les retrouvailles et entretenir le lien.",
    sections: [
      {
        h: "Planifier les retrouvailles : qui voyage, où, quand",
        body: "Les couples LDR vivent par les dates de retrouvailles. Le sondage 'on se voit où en juin ?' avec 4 options (chez toi, chez moi, ville neutre, week-end voyage) évite le ping-pong WhatsApp de 200 messages. Pareil pour le budget : 'on dépense combien sur ce week-end ?' avec 4 fourchettes. Tu décides en 1 jour ce que la conversation aurait pris une semaine.",
      },
      {
        h: "Le mini-jeu quotidien : sondage du jour",
        body: "Beaucoup de couples LDR créent des rituels : photo du matin, vidéo du soir, partage musique. Le sondage 'this or that' quotidien est un mini-jeu qui prend 10 secondes mais maintient la flamme. Café ou matcha ? Plage ou montagne pour notre prochain voyage ? Le résultat n'est pas important, le ping est. moomz te donne la rapidité.",
      },
      {
        h: "Les grands débats : projets long-terme",
        body: "Le LDR pousse à se projeter. Quand on emménage, dans quelle ville, c'est quoi nos priorités. Le sondage 'priorité 1 quand on emménagera' avec 4-5 options (proche fam / boulot / climat / coût de vie) débloque la discussion structurée. Évite les heures de débat circulaire, donne des données objectives à comparer.",
      },
      {
        h: "moomz dans la routine LDR",
        body: "Crée le sondage le matin, envoie le lien par SMS, votez tous les deux dans la journée. Le résultat tombe le soir, tu peux le commenter en FaceTime. Ça structure le partage et ça donne des sujets de conversation. Bonus : tu peux faire des sondages plus larges (les amis votent aussi) pour 'meilleur restau pour notre retrouvailles' — la communauté décide.",
      },
    ],
    polls: [
      { q: "On se voit où en juin ?", options: ["Chez toi", "Chez moi 🏠", "Ville neutre", "Week-end voyage ✈️"] },
      { q: "Fréquence FaceTime idéale ?", options: ["Tous les jours 💕", "Tous les 2 jours", "3-4 fois/sem", "Quand on peut"] },
      { q: "Budget retrouvailles ?", options: ["<100€", "100-300€", "300-500€", ">500€ 💸"] },
      { q: "Cadeau surprise : on fait ?", options: ["Oui chaque mois", "Anniv et fêtes only", "Spontané"] },
      { q: "Le LDR : ça dure encore combien ?", options: ["<6 mois 🎉", "6-12 mois", "1-2 ans", "On sait pas"] },
      { q: "On regarde un film en synchro ?", options: ["Ce soir", "Weekend", "Quand on aura le temps"] },
      { q: "Qui voyage cette fois ?", options: ["Toi", "Moi", "On se rejoint à mi-chemin 🚆"] },
      { q: "Future ville commune ?", options: ["Paris", "Lyon", "Marseille", "Étranger 🌍"] },
      { q: "Tu préfères les SMS ou les vocaux ?", options: ["SMS écrits", "Vocaux 🎙️", "Les deux"] },
      { q: "Surprise weekend ou planifié ?", options: ["Surprise 🎁", "Planifié", "Selon la dispo"] },
    ],
    faq: [
      {
        q: "Comment maintenir la complicité en LDR ?",
        a: "Crée des rituels : un sondage du jour, une photo matin, un FaceTime soir. Les micro-interactions sont plus importantes que les longues sessions.",
      },
      {
        q: "Le sondage marche à 2 personnes ?",
        a: "Oui, c'est plus rapide qu'un débat WhatsApp. Et l'anonymat de moomz ajoute un mini-suspense (tu sais que c'est l'autre qui a voté, mais le résultat reste cool).",
      },
      {
        q: "Combien de temps avant les retrouvailles on planifie ?",
        a: "Idéalement 3-4 semaines en avance pour les vols, 1 semaine pour les activités. Le sondage moomz planifie en 1 jour ce qui prend une semaine en WhatsApp.",
      },
      {
        q: "Et si on est pas d'accord ?",
        a: "Le sondage révèle juste les préférences. Si vous votez tous les deux différemment, c'est l'occasion de discuter en FaceTime — moomz crée l'amorce.",
      },
    ],
    related: ["couple", "premier-rendez-vous", "voyage"],
    updatedAt: today,
  },
  {
    slug: "couple-anniversaire",
    locale: "fr",
    category: "idees",
    emoji: "💕",
    title: "Idées de sondage anniversaire de couple — 50 questions pour célébrer",
    h1: "Sondages anniv couple : 50 idées pour le 3 mois, 1 an, 5 ans",
    description:
      "50 idées de sondage anniversaire de couple : 3 mois, 6 mois, 1 an, 5 ans. Crée ton sondage moomz et décide cadeau, resto, surprise.",
    intro:
      "Chaque anniversaire de couple est un check-in : 3 mois 'c'est sérieux', 6 mois 'on s'installe', 1 an 'on fête', 5 ans 'on planifie'. Le sondage moomz aide à décider cadeau, resto, surprise — et même à se poser les bonnes questions ensemble. Anonyme à 2, c'est rigolo et ça désamorce les choix sensibles.",
    sections: [
      {
        h: "Le cadeau qui ne déçoit pas",
        body: "L'erreur classique : tu offres ce que TU aimerais recevoir. Le sondage indirect 'on s'offrirait quoi pour notre anniv ?' avec 4 options réelles révèle la vraie préférence. Bijou, expérience, voyage, surprise — l'autre vote sans pression. Tu peux aussi sonder les amis communs pour des idées si tu es en panne.",
      },
      {
        h: "Restau ou maison : le débat de chaque anniv",
        body: "Restau classieux, restau bistro, dîner maison, week-end. 4 options, deadline 24h, vote. Le résultat tient compte du budget et de l'envie du moment. moomz est mieux qu'un sondage WhatsApp parce que c'est anonyme — l'autre vote sans craindre de paraître radin ou flemmard.",
      },
      {
        h: "La grande question : on franchit une étape ?",
        body: "Selon l'anniversaire, l'étape diffère : 6 mois 'on présente aux parents', 1 an 'on s'installe', 2 ans 'on parle bague', 5 ans 'on parle enfant'. Le sondage 'priorité de l'année prochaine' avec 4 options ouvre la conversation. C'est plus doux qu'une discussion directe et ça donne des données pour la suite.",
      },
      {
        h: "moomz comme tradition couple",
        body: "Beaucoup de couples utilisent moomz comme rituel : un sondage tous les anniversaires pour figer 'où on en est'. Crée un nouveau sondage chaque mois ou trimestre, garde l'historique. Au bout de 5 ans tu as 60 mini-bilans qui forment une mémoire couple. Tellement plus riche qu'un photo album.",
      },
    ],
    polls: [
      { q: "On fête combien de mois ?", options: ["3 mois", "6 mois", "1 an 🥂", "Plus d'1 an"] },
      { q: "Cadeau préféré ?", options: ["Bijou 💍", "Expérience", "Voyage ✈️", "Surprise"] },
      { q: "Restau pour l'anniv ?", options: ["Classieux", "Bistro cozy", "Cuisine maison 🍷", "Week-end"] },
      { q: "Budget cadeau ?", options: ["<50€", "50-150€", "150-300€", ">300€"] },
      { q: "Surprise ou planifié ?", options: ["Surprise totale 🎁", "Planifié", "Mi-mi"] },
      { q: "On invite les amis ?", options: ["Just us 💕", "Apéro avec les potes", "Diner à 4"] },
      { q: "Le bilan de l'année ?", options: ["Folle", "Stable", "Compliquée", "Magique ✨"] },
      { q: "Étape prochaine ?", options: ["Emménager", "Voyage long", "Rencontrer fam", "Tranquille"] },
      { q: "Mot d'ordre 2026 ?", options: ["Aventure", "Stabilité", "Famille", "Carrière"] },
      { q: "On refera quoi cette année ?", options: ["Le même resto", "Surprise différente", "Voyage", "Maison"] },
    ],
    faq: [
      {
        q: "Quoi offrir pour les 1 an de couple ?",
        a: "Sonde discrètement avec un sondage 'on s'offrirait quoi cette année ?'. Tu auras la vraie préférence sans deviner.",
      },
      {
        q: "On célèbre quels anniversaires ?",
        a: "Couramment 3 mois, 6 mois, 1 an puis chaque année. Certains couples fêtent chaque mois la 1ère année.",
      },
      {
        q: "Surprise totale ou pas ?",
        a: "60% des couples préfèrent un mix : surprise sur un élément (resto), planifié sur le reste (cadeau, activité). Le sondage moomz tranche.",
      },
      {
        q: "Et si on a des goûts opposés ?",
        a: "C'est l'occasion d'alterner : son choix cette année, ton choix l'an prochain. Le sondage révèle le rythme.",
      },
    ],
    related: ["couple", "saint-valentin", "anniversaire"],
    updatedAt: today,
  },
  {
    slug: "celibataire-vie",
    locale: "fr",
    category: "idees",
    emoji: "🦋",
    title: "Idées de sondage vie de célibataire — 50 questions qui assument le solo",
    h1: "Sondages célibataire : 50 idées qui kiffent le solo",
    description:
      "50 idées de sondage célibataire : self-care, dating apps, weekend solo. Crée ton sondage moomz et fais voter ta team single.",
    intro:
      "Être célib en 2026 c'est revendiqué. Self-care, voyages solo, choix de carrière sans compromis. Les sondages entre célibataires partagent les bons plans, les dilemmes (on swipe ou on supprime l'app), les questions existentielles. moomz remplace les groupes WhatsApp 'team célib' qui partent en débat. 4-6 options claires, vote rapide, décision tranchée.",
    sections: [
      {
        h: "Dating apps : on garde, on supprime, on alterne ?",
        body: "La question récurrente : Tinder, Hinge, Bumble, ou pause totale ? Sondage 'mood dating ce trimestre' avec 4 options. Le résultat aide à se faire une opinion sans la pression du conseil unique d'un pote. Bonus : tu peux faire ce sondage entre célibataires pour comparer les expériences et les algos.",
      },
      {
        h: "Le weekend solo : on optimise comment",
        body: "Le célibataire en 2026 a 4 weekends par mois à organiser. Le sondage 'weekend dream' avec 4 options (sortie potes, voyage solo, cocooning, mode productive) aide à structurer. Le but n'est pas de faire la même chose à chaque fois, c'est de varier. Garde l'historique pour ne pas tomber dans la routine.",
      },
      {
        h: "Les dilemmes existentiels : enfant, mariage, carrière",
        body: "Être célib pousse à se poser les vraies questions. Sondage 'priorité de l'année' avec 4 options sérieuses. Pas dans le but de répondre seul, mais pour clarifier tes propres préférences. Les amis célibataires sont les meilleurs sparring partners pour ce genre de réflexion.",
      },
      {
        h: "moomz pour la team célib",
        body: "Crée un groupe WhatsApp ou Discord avec tes amis célibataires. Sondage hebdo : dating cette semaine, weekend, activité commune. Pin les liens importants. Tu transformes la team en cercle de soutien actif plutôt qu'en groupe de plainte. Et anonyme = tu peux assumer un hot take ou un fail sans le revivre 10 fois.",
      },
    ],
    polls: [
      { q: "Tu es sur quelle app ?", options: ["Tinder", "Hinge ✨", "Bumble", "Aucune 🦋"] },
      { q: "Voyage solo : oui ou non ?", options: ["Adore 🌍", "Une fois ok", "Jamais", "À tester"] },
      { q: "Weekend type ?", options: ["Sortie potes 🍷", "Cocoon Netflix", "Voyage", "Boulot productif"] },
      { q: "Enfant : tu y penses ?", options: ["Avant 30", "30-35", "35+", "Jamais 🚫"] },
      { q: "Mariage : utile ou pas ?", options: ["Indispensable", "Sympa", "Inutile 💼"] },
      { q: "Animal de compagnie ?", options: ["Chat 🐱", "Chien 🐕", "Aucun", "Plante"] },
      { q: "Diner au resto seule, ça te dérange ?", options: ["Adore", "Une fois ok", "Pas confortable 😅"] },
      { q: "Plus dur en célib ?", options: ["Diner seul", "Vacances", "Soirées couples 🍷", "Rien"] },
      { q: "Tu invites des potes chez toi à quelle fréquence ?", options: ["Chaque semaine", "1-2x/mois", "Rarement"] },
      { q: "Self-care préféré ?", options: ["Spa", "Sport 💪", "Voyage", "Lecture"] },
    ],
    faq: [
      {
        q: "Comment kiffer le célibat ?",
        a: "Construis tes propres rituels. Un sondage hebdo entre amis célibataires sur les activités du weekend transforme le solo en collectif soutenant.",
      },
      {
        q: "Dating apps oui ou non ?",
        a: "Selon les saisons. Le sondage 'mood dating' avec ta team célib aide à décider sans pression sociale.",
      },
      {
        q: "Voyage solo : sécurité ?",
        a: "Choisis bien la destination (Japon, Portugal, Canada sont des classiques solo). Le sondage 'destination solo 2026' entre potes aide à choisir.",
      },
      {
        q: "Et si tous mes potes sont en couple ?",
        a: "Élargis ton cercle. moomz peut servir à organiser des soirées 'team célib' pour rencontrer d'autres single via amis communs.",
      },
    ],
    related: ["couple", "premier-rendez-vous", "voyage"],
    updatedAt: today,
  },
  {
    slug: "famille-recomposee",
    locale: "fr",
    category: "idees",
    emoji: "👨‍👩‍👧‍👦",
    title: "Idées de sondage famille recomposée — 50 questions qui aident à s'organiser",
    h1: "Sondages famille recomposée : 50 idées qui simplifient la logistique",
    description:
      "50 idées de sondage pour famille recomposée : vacances, garde alternée, fêtes. Crée ton sondage moomz et trouve des compromis.",
    intro:
      "Une famille recomposée, c'est souvent 6-10 personnes à coordonner : parents, beaux-parents, enfants des deux côtés, ex. Les sondages remplacent les conversations WhatsApp infernales pour les vacances, les fêtes, les choix scolaires. moomz est anonyme — pratique quand les ados préfèrent voter sans dire devant les adultes. Et 6+ options là où le sticker Insta est à 2.",
    sections: [
      {
        h: "Vacances : 6 personnes, 4 envies, 1 décision",
        body: "Le challenge classique : père / mère / belle-mère / 3 enfants, tout le monde a son idée. Sondage moomz avec 4-5 destinations réalistes, deadline 1 semaine, le résultat fait foi. Anonyme = les ados votent sincèrement sans la pression de paraître ingrats. Bonus : tu peux séparer le sondage par tranche d'âge (parents vs enfants) pour comprendre les écarts.",
      },
      {
        h: "Garde alternée : organiser sans drama",
        body: "Les sondages aident à dépersonnaliser les décisions. 'Où on passe Noël ?', 'qui prend les enfants le 1er mai ?'. Au lieu de discussions tendues, sondage à 4 options, résultat. Les ex-conjoints qui utilisent un outil neutre comme moomz se disputent 3x moins (vrai constat des thérapeutes familiaux). L'anonymat garantit que personne ne se sente jugé.",
      },
      {
        h: "Le repas fêtes : qui vient, qui cuisine, qui invite l'ex",
        body: "Le repas de fêtes en famille recomposée est un puzzle. Sondage 'on invite l'ex de papa ?', 'menu : poisson ou viande ?', 'on fait à la maison ou au resto ?'. Anonymes, les votes révèlent ce que personne n'osait dire. Le résultat fait foi, donc fini les 'ah mais moi j'aurais préféré...'.",
      },
      {
        h: "moomz comme outil familial",
        body: "Crée un sondage pour chaque décision logistique : vacances, Noël, rentrée, choix d'école. Pin les liens dans le WhatsApp famille. Anonyme par défaut, donc les enfants peuvent voter sans la pression des parents. Tu transformes la famille en système collaboratif plutôt qu'en groupe de tension.",
      },
    ],
    polls: [
      { q: "Vacances d'été en famille ?", options: ["Mer 🌊", "Montagne", "Étranger", "Chacun chez soi"] },
      { q: "Noël on fête où ?", options: ["Chez papa", "Chez maman", "Chez grand-mère", "Resto 🍷"] },
      { q: "On invite l'ex à un repas ?", options: ["Oui pour les enfants", "Non malaise", "Si ambiance ok"] },
      { q: "Menu de fête ?", options: ["Viande", "Poisson 🐟", "Veggie", "Buffet libre"] },
      { q: "Activité weekend famille ?", options: ["Cinéma", "Parc 🌳", "Resto", "Maison"] },
      { q: "Belle-mère/beau-père au mariage ?", options: ["Bien sûr", "C'est sensible", "Non"] },
      { q: "Cadeau commun ou séparé ?", options: ["Commun 🎁", "Séparé", "Selon le moment"] },
      { q: "Rythme garde alternée ?", options: ["1 sem/1 sem", "2 sem/2 sem", "Mois 📅", "Libre"] },
      { q: "Le pire moment recomposé ?", options: ["Premier Noël", "Premier mariage", "Adolescence des kids 😅"] },
      { q: "Conseil pour les nouveaux ?", options: ["Communiquer", "Patience", "Espace 🌬️", "Thérapie"] },
    ],
    faq: [
      {
        q: "Comment éviter les disputes dans une famille recomposée ?",
        a: "Utilise un outil neutre comme moomz pour les décisions logistiques. Le sondage dépersonnalise et trouve un terrain commun en évitant les confrontations directes.",
      },
      {
        q: "Comment intégrer les ados qui ne veulent pas participer ?",
        a: "L'anonymat de moomz les rassure. Ils votent sans pression et le résultat compte autant que celui des adultes.",
      },
      {
        q: "Et les ex-conjoints ?",
        a: "Si la coparentalité est saine, les inclure dans certains sondages (logistique enfants) marche bien. Sinon, garder le sondage en interne au foyer actuel.",
      },
      {
        q: "Combien de personnes max dans un sondage famille ?",
        a: "moomz n'a pas de limite. Tu peux avoir 15-20 personnes (famille étendue) sur le même lien.",
      },
    ],
    related: ["famille", "enfants", "mariage"],
    updatedAt: today,
  },
  {
    slug: "prenom-bebe",
    locale: "fr",
    category: "idees",
    emoji: "👶",
    title: "Idées de sondage prénom bébé — 50 questions pour choisir le prénom",
    h1: "Sondages prénom bébé : 50 idées qui aident à trancher",
    description:
      "50 idées de sondage pour choisir le prénom de bébé : shortlist, sondage entre amis, sondage anonyme. Crée ton sondage moomz et tranche.",
    intro:
      "Choisir un prénom c'est 9 mois de débats : tu hésites entre 5 options, ton/ta partenaire en veut 3 autres, la famille a des avis. Le sondage moomz t'aide à structurer sans révéler la décision finale (anonyme par défaut). 6+ options, partageable en famille, vote en 10 secondes. Plus efficace que les 4h de conversation autour d'un Babcent.",
    sections: [
      {
        h: "La shortlist : passer de 20 prénoms à 5",
        body: "Au début, tu as 20 prénoms qui te plaisent. Le tri se fait en 3 étapes : éliminer ceux que ton partenaire déteste, ceux qui sont trop populaires, ceux qui sonnent mal avec le nom de famille. Le sondage moomz avec 6 finalistes anime le 'jury' (toi + partenaire + 2 amis proches). Le gagnant n'est pas obligatoire mais c'est un signal fort.",
      },
      {
        h: "Le sondage anonyme : éviter le drama familial",
        body: "Demander 'tu préfères Léa ou Manon ?' à la famille génère des avis tranchés. Sondage anonyme : tu donnes 6 options, la famille vote sans savoir qui a voté quoi. Tu gardes les amitiés intactes ET tu obtiens un vrai signal de préférence. Particulièrement utile si certains prénoms ont une charge familiale (oncle, ex, etc.).",
      },
      {
        h: "Les tests sociaux : et les amis ?",
        body: "Sondage avec 30+ amis : 'quel prénom préférez-vous ?'. Tu obtiens une vraie distribution. Mais attention : le prénom le plus populaire n'est pas forcément le bon. Le but est de tester comment le prénom 'résonne' socialement. Si un prénom fait l'unanimité 'beau' et un autre divise, c'est intéressant à savoir.",
      },
      {
        h: "moomz pour décider en couple sans dispute",
        body: "Le grand classique : tu adores Léa, ton/ta partenaire veut Camille. Sondage moomz à 6 options où chacun ajoute 3 noms, vote anonyme, le résultat fait foi (ou pas). Le but c'est de structurer la décision sans laisser le débat traîner. Bonus : tu peux refaire le sondage à 6 mois pour voir comment l'opinion évolue.",
      },
    ],
    polls: [
      { q: "Style de prénom ?", options: ["Classique 📜", "Moderne", "Court", "Rare 🌿"] },
      { q: "Prénom fille shortlist ?", options: ["Léa", "Camille", "Inès", "Jade", "Manon"] },
      { q: "Prénom garçon shortlist ?", options: ["Léo", "Gabriel", "Noah", "Adam", "Liam"] },
      { q: "Sonde-t-il bien avec le nom de famille ?", options: ["Oui top", "Bof", "Pas du tout", "Pas testé"] },
      { q: "Tu demandes à la famille ?", options: ["Oui sondage", "Non secret 🤫", "Une fois né"] },
      { q: "Prénom composé ?", options: ["Oui 🌸", "Non", "Selon le 2ème"] },
      { q: "Influence culturelle ?", options: ["Français trad", "International 🌍", "Religieux", "Aucun"] },
      { q: "Le pire prénom de l'année dans ton entourage ?", options: ["...", "rien à signaler", "Plein 😅"] },
      { q: "Tu te bases sur quoi ?", options: ["Coup de cœur 💖", "Statistiques", "Sondage", "Famille"] },
      { q: "Combien de prénoms en finaliste ?", options: ["1", "2-3", "4-6 🎯", ">6"] },
    ],
    faq: [
      {
        q: "Comment choisir un prénom sans dispute en couple ?",
        a: "Faites chacun une liste de 5, croisez, gardez les communs. Sondage moomz sur les 4-6 finalistes — anonyme, donc personne ne se sent attaqué.",
      },
      {
        q: "On demande à la famille ?",
        a: "C'est à toi de voir. Si tu demandes, fais-le en sondage anonyme moomz pour éviter le drama. Le résultat est un signal, pas une obligation.",
      },
      {
        q: "Et les opinions négatives ?",
        a: "Tu n'es pas obligé d'écouter. Le sondage te donne des données, pas une décision. Ton prénom préféré peut être à 2/10 et tu peux le choisir quand même.",
      },
      {
        q: "À quel mois on décide ?",
        a: "Beaucoup décident au 7-8ème mois. Le sondage moomz peut être lancé dès le 5ème pour avoir le temps de tester sans pression.",
      },
    ],
    related: ["enfants", "famille", "couple"],
    updatedAt: today,
  },
  {
    slug: "temoin-mariage",
    locale: "fr",
    category: "idees",
    emoji: "💒",
    title: "Idées de sondage témoin mariage — 50 questions pour organiser",
    h1: "Sondages témoin de mariage : 50 idées pour le crew d'honneur",
    description:
      "50 idées de sondage témoin de mariage : EVJF, discours, surprise. Crée ton sondage moomz et organise sans charge mentale.",
    intro:
      "Être témoin c'est un mois de coordination avec 5-15 personnes (autres témoins, amis, famille). EVJF/EVG, discours, surprise du mariage, cadeau commun — chaque décision est un mini-débat WhatsApp. moomz remplace ça par des sondages de 30 secondes. Anonyme = la famille de la mariée peut voter sans craindre la famille du marié. 6+ options là où Insta est à 2.",
    sections: [
      {
        h: "EVJF/EVG : 3 destinations, 1 décision",
        body: "Le débat EVJF/EVG dure souvent 2 mois. Sondage moomz dès le mois 3 avant le mariage : 3-4 destinations avec budget estimé, deadline 2 semaines. Tu débloques la logistique vol/Airbnb en avance. Les EVJF/EVG les mieux organisés sont ceux décidés tôt — moomz t'aide à fixer la décision sans drama.",
      },
      {
        h: "Le discours : qui parle, combien, dans quel ordre",
        body: "Si tu es témoin principal, tu coordonnes les discours. Sondage avec les autres témoins : 'qui parle combien de temps', 'on fait ensemble ou solo', 'ordre des discours'. Le résultat évite que 4 personnes ne parlent 10 minutes chacune (mariés exsangues). Bonus : tu peux sonder les invités proches en avance sur 'qu'est-ce qu'on raconte ?'.",
      },
      {
        h: "Le cadeau commun et la surprise",
        body: "Cadeau collectif : tu collectes les budgets, tu choisis. Sondage moomz à 4 options de cadeau (voyage, expérience, gros objet, cash) avec budget par personne. Le résultat tranche en 1 semaine ce qui prend traditionnellement 1 mois. Pareil pour la surprise (flashmob, vidéo, slideshow) — 4 options, vote.",
      },
      {
        h: "moomz dans le rôle de témoin",
        body: "Crée un groupe WhatsApp 'team témoins', pin un sondage par décision logistique. Anonyme = les témoins moins proches votent sans pression. Garde l'historique pour ne pas oublier les décisions prises. Tu transformes 3 mois de stress en 3 mois structurés. Les mariés te remercient pour l'organisation chirurgicale.",
      },
    ],
    polls: [
      { q: "Destination EVJF ?", options: ["Lisbonne 🇵🇹", "Marrakech", "Ibiza", "Côte d'Azur"] },
      { q: "Format EVG ?", options: ["Weekend ville", "Sport extrême 🎿", "Chalet posé", "Trip étranger"] },
      { q: "Budget EVJF par personne ?", options: ["<200€", "200-400€", "400-600€", ">600€ 💸"] },
      { q: "Discours témoin : durée ?", options: ["1 min court", "3 min", "5 min", "10 min cinéma 🎬"] },
      { q: "On fait une vidéo souvenir ?", options: ["Oui slideshow", "Vidéo interviews", "Non simple discours"] },
      { q: "Cadeau commun ?", options: ["Voyage", "Liste mariage", "Cash 💰", "Expérience"] },
      { q: "On surprend les mariés avec ?", options: ["Flashmob", "Chanson 🎤", "Vidéo", "Rien"] },
      { q: "Robe/costume témoin : ?", options: ["Imposé par la mariée", "Code couleur", "Libre", "Sondage groupe"] },
      { q: "On fait l'EVJF combien de mois avant ?", options: ["1 mois", "2-3 mois", "6 mois 🗓️", "Le mois d'avant"] },
      { q: "Combien de témoins idéal ?", options: ["2", "4", "6+ 👥"] },
    ],
    faq: [
      {
        q: "Comment organiser un EVJF/EVG sans stress ?",
        a: "Commence 3 mois avant. Lance le sondage destination moomz dès le premier mois pour bloquer les vols. Toutes les autres décisions s'enchaînent ensuite.",
      },
      {
        q: "On consulte les mariés ou on surprend ?",
        a: "Sonde discrètement les mariés sur les 'no-go' (allergies, phobies, ex-partenaires interdits). Le reste est surprise. Le sondage anonyme évite les indiscretions.",
      },
      {
        q: "Combien dépenser pour un cadeau de témoin ?",
        a: "Souvent 5-10% du budget mariage par témoin, mutualisé. Sondage moomz pour figer le montant par personne avant l'achat.",
      },
      {
        q: "Et si les autres témoins ne sont pas réactifs ?",
        a: "Sondage avec deadline 48h. Si quelqu'un ne vote pas, le résultat passe quand même. Plus efficace que de relancer 5 fois sur WhatsApp.",
      },
    ],
    related: ["mariage", "evjf", "evg"],
    updatedAt: today,
  },
  {
    slug: "demenagement-colocation",
    locale: "fr",
    category: "idees",
    emoji: "📦",
    title: "Idées de sondage déménagement et colocation — 50 questions pour s'organiser",
    h1: "Sondages déménagement/coloc : 50 idées qui évitent les conflits",
    description:
      "50 idées de sondage pour ton déménagement ou ta coloc : choix appart, ménage, courses, règles. Crée ton sondage moomz et coordonne sans drama.",
    intro:
      "Choisir un appart à 3 ou organiser une coloc à 4, c'est 30 décisions à prendre rapidement. Surface, quartier, ménage, courses, invités. Sans cadre, ça vire à la dispute. moomz remplace les débats sans fin par des sondages tranchés. 4-6 options, anonyme, vote en 1 tap. Les coloc qui utilisent un outil de décision collective durent 2x plus longtemps (vrai stat des plateformes coloc).",
    sections: [
      {
        h: "Le choix de l'appart : visite, comparaison, décision",
        body: "Vous avez visité 4 apparts en 1 weekend. Chacun a son préféré. Sondage moomz avec les 4 options + critères clés (loyer, surface, quartier). Le résultat dégage le consensus. Bonus : tu peux faire un sondage par critère séparé pour comprendre où sont les écarts. Pas de bon ou mauvais choix, juste celui qui fait le moins de mécontents.",
      },
      {
        h: "Les règles de la coloc : poser le cadre dès la semaine 1",
        body: "Le pire piège : commencer une coloc sans règles. Sondage moomz à la signature : 'ménage : rotation ou prestataire', 'invités : autorisés ou interdits le week', 'fumer : intérieur ou pas', 'animal : ok ou non'. 8 sondages, 1h de décision, 0 conflit pendant 2 ans. Compare à 6 mois de tension si tu laisses traîner.",
      },
      {
        h: "Courses et frais : éviter le malaise du Lydia",
        body: "Sondage 'on partage les courses ou chacun la sienne ?', 'frigo commun ou frigos séparés ?', 'on prend un service ménage ?'. Anonyme, donc personne ne se sent obligé d'accepter par politesse. Tu obtiens la vraie préférence et tu évites le malaise du 'tu me dois 8€ de pâtes' six mois plus tard.",
      },
      {
        h: "moomz comme constitution de coloc",
        body: "Crée 10 sondages le jour de l'emménagement, pin les liens dans le WhatsApp coloc. Au bout d'1 semaine, le cadre est fixé. Tu peux refaire un sondage si une règle ne tient pas (le ménage rotation marche pas, on prend une femme de ménage). Le système collaboratif évite les conflits où une personne décide pour tous.",
      },
    ],
    polls: [
      { q: "Choix d'appart ?", options: ["T3 25min métro", "T4 plus cher centre", "T3 colocs séparées 🏠", "Le coup de cœur"] },
      { q: "Loyer par personne max ?", options: ["<500€", "500-700€", "700-900€", ">900€ 💸"] },
      { q: "Quartier idéal ?", options: ["Centre ville", "Calme résidentiel", "Étudiant 🎓", "Près du boulot"] },
      { q: "Ménage : rotation ou prestataire ?", options: ["Rotation 🧹", "Prestataire", "Chacun chez soi"] },
      { q: "Invités le weekend ?", options: ["OK toujours", "Prévenir 24h avant", "Pas plus de 2 nuits", "Jamais 🚫"] },
      { q: "Frigo : commun ou séparé ?", options: ["Commun", "Séparé 🍱", "Mix (légumes commun, reste séparé)"] },
      { q: "On prend un animal ?", options: ["Chat 🐱", "Chien", "Aucun"] },
      { q: "Soirées coloc fréquence ?", options: ["1/sem", "1/mois", "Spontané 🎉", "Jamais"] },
      { q: "Service streaming partagé ?", options: ["Netflix", "Disney+", "Tout ensemble 📺", "Chacun le sien"] },
      { q: "Tu choisis ta coloc comment ?", options: ["Amis", "Insta annonce", "App coloc", "Hasard 🎲"] },
    ],
    faq: [
      {
        q: "Comment choisir un appart à plusieurs ?",
        a: "Sondage moomz avec les 3-4 finalistes après les visites. Le résultat sort le consensus et évite le veto unique d'une personne.",
      },
      {
        q: "Comment éviter les conflits en coloc ?",
        a: "Fixe les règles dès la semaine 1 via sondages. moomz t'aide à structurer 10 décisions importantes en 1 heure. Les colocs structurées tiennent 2x plus longtemps.",
      },
      {
        q: "Ménage : rotation ou prestataire ?",
        a: "Sonde tes colocs. 60% des colocs en 2026 préfèrent un prestataire (50€/personne/mois) à la rotation, source d'un conflit sur deux.",
      },
      {
        q: "On signe à plusieurs ou un seul ?",
        a: "Décision juridique importante. Sondage en amont pour comprendre les préférences, puis discussion avec ton agence. Bail solidaire vs individuels — chacun a ses risques.",
      },
    ],
    related: ["fac-universite", "travail-collegues", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "entretien-embauche",
    locale: "fr",
    category: "idees",
    emoji: "💼",
    title: "Idées de sondage entretien d'embauche — 50 questions pour préparer",
    h1: "Sondages job/CV : 50 idées qui aident à préparer ton entretien",
    description:
      "50 idées de sondage pour préparer ton entretien : tenue, salaire, négociation, choix de job. Crée ton sondage moomz et décide avec ton crew.",
    intro:
      "L'entretien d'embauche c'est une boîte noire de stress. Quoi porter, comment se présenter, quel salaire demander, accepter ou refuser. Sondage moomz avec ton entourage pro pour valider tes choix. Anonyme — tes contacts donnent leur vraie opinion sans politesse. 4-6 options là où une conversation 1 à 1 ne te donne qu'un seul avis biaisé.",
    sections: [
      {
        h: "La tenue : le sondage qui sauve l'entretien",
        body: "Costume, smart casual, jean+chemise, ça dépend de la boîte. Sondage moomz avec 4 photos d'outfit candidates + le contexte (startup vs grand groupe). Tes contacts qui bossent dans le secteur votent. Tu choisis avec data, pas avec stress. Bonus : sondage sur les détails (montre, chaussettes, parfum) si tu as 1 semaine devant toi.",
      },
      {
        h: "Le salaire : combien demander sans se sous-estimer",
        body: "Le piège classique : tu demandes 35K, ils proposent 40K, tu rates 5K parce que tu ne savais pas. Sondage anonyme avec des pros de ton secteur : 'pour ce poste, fourchette ?' avec 4 fourchettes. Tu obtiens la vraie data du marché. Les comptes carrière fr qui font ça mensuellement aident des milliers de candidats à mieux négocier.",
      },
      {
        h: "Accepter ou refuser : la décision qui tracte 5 ans de ta vie",
        body: "Tu as 2 offres, ou 1 offre et un doute. Sondage moomz à ton réseau pro : 'startup tech à 45K ou grand groupe à 55K avec moins d'apprentissage ?'. Le vote te donne un signal externe pour challenger ta tendance interne. La décision finale reste la tienne, mais tu as 30 perspectives au lieu d'1.",
      },
      {
        h: "moomz dans la routine candidat",
        body: "Sondage tenue avant chaque entretien. Sondage salaire avant chaque négociation. Sondage choix avant chaque acceptation. Crée un mini-groupe 'team carrière' avec 5-10 contacts pro de confiance. Le sondage est anonyme, donc tes amis donnent leur vraie opinion. Tu prends des décisions ancrées dans la data plutôt que dans la peur.",
      },
    ],
    polls: [
      { q: "Tenue pour startup tech ?", options: ["Costume 👔", "Smart casual", "Jean + chemise", "Jean + tshirt"] },
      { q: "Salaire entry tech à demander ?", options: ["35-40K", "40-45K", "45-50K", "50K+ 💰"] },
      { q: "Question à poser en fin d'entretien ?", options: ["Évolution", "Équipe", "Culture", "Mission"] },
      { q: "On négocie ?", options: ["Toujours +10%", "Si offre OK juste ok", "Jamais"] },
      { q: "Tu acceptes laquelle ?", options: ["Startup +10%", "Grand groupe stable", "Freelance"] },
      { q: "Lettre de motivation : encore utile ?", options: ["Oui", "Non plus", "Selon l'entreprise 📧"] },
      { q: "LinkedIn ou CV PDF ?", options: ["LinkedIn", "PDF 📄", "Les deux"] },
      { q: "Combien d'entretiens avant décision ?", options: ["1", "2", "3 max", "Autant qu'ils veulent 😴"] },
      { q: "Tu prépares combien d'heures ?", options: ["1h", "3h", "10h+ 💪", "Improvise"] },
      { q: "Tu signes en moins de 24h ?", options: ["Si offre solide", "Jamais", "Négocie 1 semaine 🕐"] },
    ],
    faq: [
      {
        q: "Comment savoir combien demander en salaire ?",
        a: "Sondage moomz à 5-10 contacts du secteur. Tu obtiens une fourchette réelle. Plus précis que Glassdoor et plus rapide qu'un entretien d'info.",
      },
      {
        q: "Quoi porter en entretien tech ?",
        a: "Selon la boîte. Sondage avec 4 options sur tes contacts du secteur. Smart casual gagne souvent dans la tech, costume dans la finance.",
      },
      {
        q: "On négocie même un premier job ?",
        a: "Oui. Le sondage 'on négocie un junior ?' donne 80% oui dans la tech. Refuser 5K maintenant = -50K sur 10 ans en raison des % d'augmentation.",
      },
      {
        q: "Comment choisir entre 2 offres ?",
        a: "Sondage à ton réseau anonyme. Tu obtiens 10+ avis externes qui complètent ton intuition. La décision finale reste la tienne.",
      },
    ],
    related: ["travail-collegues", "fac-universite", "argent-finances"],
    updatedAt: today,
  },
  {
    slug: "rentree-universite",
    locale: "fr",
    category: "idees",
    emoji: "🎓",
    title: "Idées de sondage rentrée fac — 50 questions pour la team étudiante",
    h1: "Sondages rentrée fac : 50 idées qui démarrent le semestre",
    description:
      "50 idées de sondage rentrée université : choix de cours, BDE, soirées intégration. Crée ton sondage moomz et trouve ta team.",
    intro:
      "La rentrée fac c'est 2 semaines de décisions : choix de TD, asso à intégrer, soirées d'intégration, colocs à former. Sondage moomz pour trancher en 30 secondes ce qui prendrait des heures de groupe WhatsApp. 4-6 options, anonyme, partageable dans le groupe promo Insta. Parfait pour la première année où tout est nouveau et personne ne connaît personne.",
    sections: [
      {
        h: "Choix de cours et TD : optimiser l'emploi du temps",
        body: "Tu hésites entre 2 options de TD ? Sondage à la promo : 'TD prof A lundi 8h ou prof B mardi 14h ?'. Le résultat te dit avec qui tu seras. Crucial pour ne pas se retrouver seul. Bonus : sondage 'le prof A est meilleur ?' avec les anciens étudiants — info précieuse que tu n'as pas sans ce levier.",
      },
      {
        h: "Le BDE et les assos : choisir intelligemment",
        body: "Premier mois, tu reçois 30 propositions BDE/assos. Lesquelles vaut le coup ? Sondage aux M1/M2 : 'BDE finance ou BDE sport, lequel apporte le plus ?'. Anonyme = vrai feedback. Tu rejoins celle qui te correspond plutôt que la plus visible. Bonus : sondage 'on monte une mini-asso de notre promo ?' avec 4 thématiques.",
      },
      {
        h: "Soirée d'intégration : on y va, lesquelles",
        body: "Tu reçois 5 invitations en première semaine. Sondage moomz dans ton groupe promo : 'on va à laquelle ?'. Tu y vas en groupe plutôt que seul, l'intégration est meilleure. Et si une grosse part de la promo va à la même, tu rencontres 30 personnes en une soirée plutôt que 5 dans 3 soirées séparées.",
      },
      {
        h: "moomz pour la première année",
        body: "Crée un groupe WhatsApp promo dès la rentrée. Pose un sondage par décision importante : choix TD, asso, soirées, partiels révisés à plusieurs. Tu transformes l'angoisse de la rentrée en jeu collectif. Les promos qui s'organisent en sondages la première semaine restent soudées toute la licence.",
      },
    ],
    polls: [
      { q: "TD prof A ou prof B ?", options: ["A 🌟", "B", "Au pif"] },
      { q: "Tu rejoins quelle asso ?", options: ["BDE", "Asso sport ⚽", "Asso métier", "Aucune"] },
      { q: "Soirée d'intégration ?", options: ["Toutes", "1-2 max", "Aucune 😅", "Ça dépend"] },
      { q: "Tu loges où ?", options: ["Cité U", "Coloc 🏠", "Studio", "Chez les parents"] },
      { q: "Transport fac ?", options: ["Métro", "Vélo 🚲", "Voiture", "À pied"] },
      { q: "Pause midi : Resto U ?", options: ["Tous les jours", "Parfois", "Jamais 🥪 sandwich"] },
      { q: "Tu vas à toutes les CM ?", options: ["Oui", "60-80%", "<50% 😴"] },
      { q: "Note de partiel obj ?", options: ["12+", "10 mini", "Pas pris la défaillance 🎯"] },
      { q: "Tu prends des notes sur ?", options: ["Papier ✍️", "Laptop", "Mix", "iPad + stylet"] },
      { q: "Soirées par semaine ?", options: ["0-1", "2-3", "4+ 🍻", "Que weekend"] },
    ],
    faq: [
      {
        q: "Comment choisir ses TD ?",
        a: "Sondage à la promo pour savoir avec qui tu seras et lesquels sont les plus cool selon les M1. moomz donne l'info en 24h, sinon 2 semaines de bouche à oreille.",
      },
      {
        q: "Faut-il rejoindre une asso en L1 ?",
        a: "Oui, c'est la meilleure façon de rencontrer du monde. Sondage 'quelle asso pour mon profil ?' à 5 amis te donne les bonnes pistes.",
      },
      {
        q: "Cité U ou coloc ?",
        a: "Sondage moomz pour comparer. Cité U pour la vie sociale facile, coloc pour le confort. 60% des étudiants préfèrent coloc en L2.",
      },
      {
        q: "Comment garder le groupe promo soudé ?",
        a: "Sondages réguliers sur les activités et les choix. Le rituel de décision collective crée le lien.",
      },
    ],
    related: ["fac-universite", "lycee", "soiree"],
    updatedAt: today,
  },
  {
    slug: "musique-rap",
    locale: "fr",
    category: "idees",
    emoji: "🎤",
    title: "Idées de sondage rap français — 50 questions pour les fans de rap",
    h1: "Sondages rap français : 50 idées pour la team genou à terre",
    description:
      "50 idées de sondage rap FR pour les fans : meilleur album, GOAT, classement rappeurs. Crée ton sondage moomz et règle les débats rap.",
    intro:
      "Le rap français en 2026 c'est PNL vs Damso vs Ninho vs SCH vs Booba. 30 ans de débats, 4 générations qui se chevauchent. Le sondage Twitter limité à 4 options ne capture pas la nuance. moomz te donne 6+ options pour ranker albums, projets, featurings. Et anonyme — tu peux assumer ton hot take sans te faire défaire par les fanboys d'un camp.",
    sections: [
      {
        h: "GOAT rap FR : la question qui ne sera jamais résolue",
        body: "Booba historiquement, Damso en finesse, PNL en innovation, Nekfeu en plume, Ninho en hitmaker. Le sondage à 6 options avec un peu de générationnel (vétérans, 2010s, 2020s) capture ce que le sondage Twitter ne peut pas. Les comptes rap fr qui posent cette question annuellement génèrent des milliers d'interactions. moomz garde l'historique pour comparer les évolutions.",
      },
      {
        h: "Album de l'année : sondage post-printemps",
        body: "Chaque trimestre sort 5-10 albums majeurs. Le sondage 'album préféré T1' avec 5-6 candidats départage. Refais le sondage en fin d'année pour la AOTY. Les comptes rap qui font ça mensuellement créent une rétention d'audience monstre. Bonus : sondage sur les featurings (quel duo cartonne le plus) génère des avis tranchés.",
      },
      {
        h: "Beats, plumes, lives : ranking par dimension",
        body: "Plutôt que 'meilleur rappeur', sonde par axe. Meilleure plume : Nekfeu, Damso, Vald, Lomepal ? Meilleurs beats : Hamza, Aketo, Myth Syzer ? Meilleur en live : SCH, Niska, JuL ? Tu obtiens un tableau plus juste. Et tu déclenches des débats par dimension plutôt que la question vague qui finit en guerre de clans.",
      },
      {
        h: "moomz dans la culture rap fr",
        body: "Crée un sondage par sortie d'album, sondage par hit, sondage par clash. Pin les liens dans ton groupe WhatsApp ou Discord rap. Anonyme = les fans peuvent admettre qu'ils kiffent un rappeur en disgrâce. Tu transformes les débats stériles en data culturelle. Les rappeurs eux-mêmes utilisent ce genre de feedback pour calibrer leur prochaine sortie.",
      },
    ],
    polls: [
      { q: "GOAT rap FR ?", options: ["Booba", "Damso 🌑", "PNL", "Nekfeu", "Ninho"] },
      { q: "Plus belle plume ?", options: ["Damso", "Nekfeu", "Vald", "Lomepal", "Orelsan"] },
      { q: "Album de l'année ?", options: ["Le dernier qui sort vendredi", "Sortie février 🎧", "Sortie mai", "Pas d'avis"] },
      { q: "Hit de l'été ?", options: ["Hit A", "Hit B", "Hit C", "Pas de hit cette année 🌴"] },
      { q: "Vrai ou faux : Booba meilleur que Kaaris ?", options: ["Vrai", "Faux", "Égalité", "Les deux mid"] },
      { q: "PNL : on attend leur retour ?", options: ["Oui 🙏", "Non c'est fini", "Bof"] },
      { q: "Rappeur français le plus surcoté ?", options: ["X", "Y", "Z 😬", "Aucun"] },
      { q: "Tu écoutes plus français ou US ?", options: ["FR only 🇫🇷", "US only 🇺🇸", "Les deux"] },
      { q: "Featuring de rêve ?", options: ["Damso x Nekfeu", "Booba x SCH", "PNL x Ninho 🔥", "Autre"] },
      { q: "Concert ou stream Spotify ?", options: ["Concert toujours 🎤", "Stream", "Mix"] },
    ],
    faq: [
      {
        q: "Comment trancher le débat GOAT rap français ?",
        a: "Sondage moomz à 6 candidats sérieux, partage dans ton groupe rap. Le résultat reflète la génération du votant — info culturelle précieuse.",
      },
      {
        q: "Combien d'options pour un sondage rap ?",
        a: "Pour un GOAT debate 6. Pour ranker une discographie complète, 8-10. moomz n'a pas de limite, contrairement à Twitter.",
      },
      {
        q: "C'est anonyme ?",
        a: "Oui. Tu peux admettre que tu préfères Booba à Damso sans te faire bannir du Discord.",
      },
      {
        q: "Et pour les sondages clash ?",
        a: "Sondage 'X gagne le clash ?' avec 4 options (X, Y, match nul, on s'en fout). Anonyme, donc les votants assument leur camp sans peur des représailles Twitter.",
      },
    ],
    related: ["musique", "ado", "fans-kpop"],
    updatedAt: today,
  },
  {
    slug: "piscine-ete",
    locale: "fr",
    category: "idees",
    emoji: "🏊",
    title: "Idées de sondage soirée piscine — 50 questions pour l'été",
    h1: "Sondages soirée piscine : 50 idées pour le pool party",
    description:
      "50 idées de sondage pool party été : maillot, musique, food, invités. Crée ton sondage moomz et organise la meilleure pool party.",
    intro:
      "Une pool party réussie c'est 30% logistique, 70% ambiance. Et l'ambiance se prépare en sondages : musique, food, dress code, invités. moomz remplace le débat WhatsApp 'on commande quoi à manger ?' qui dure 3h. 4-6 options, vote en 10 secondes, décision. Parfait pour les pool parties de 10-30 personnes où tu n'as pas le temps de gérer 30 avis individuels.",
    sections: [
      {
        h: "L'invitation : qui vient, combien, mixé ou pas",
        body: "Pool party à 10 c'est cosy, à 30 c'est event, à 50 c'est mariage. Sondage 'on vise combien ?' avec 4 options pour fixer le format. Ensuite, sondage 'on invite la team A, B, C ?'. Anonyme évite que des gens se sentent obligés d'accepter une team qu'ils n'aiment pas. Tu organises pour l'ambiance, pas pour la politesse.",
      },
      {
        h: "Le dress code et le contenu : le sondage qui sauve la photo",
        body: "Dress code = photos cohérentes. Sondage 'maillot couleur unie / motifs / Hawaii' avec 4 options. Le résultat unifie la photo de groupe sans rendre tout le monde anxieux. Bonus : sondage 'qui amène quoi en bouffe' pour éviter 5 tirelires de chips.",
      },
      {
        h: "Musique : le grand débat",
        body: "La musique fait ou défait une pool party. Sondage 'genre de la playlist' avec 4 options (chill house, latino, hits 2020s, rap). Le résultat décide le DJ Spotify. Bonus : sondage live pendant la party 'on change de vibe ?' évite que personne ne dise 'mais c'est qui qui a mis ça'.",
      },
      {
        h: "moomz pour la pool party",
        body: "Crée 4-5 sondages la semaine d'avant : invités, dress code, food, musique, timing. Pin les liens dans le groupe WhatsApp event. Anonyme = vrais retours. Pendant la party, sondage live 'pizza ou sushis pour le rab' à 22h. Tu transformes l'event en jeu collectif où tout le monde participe à la décision.",
      },
    ],
    polls: [
      { q: "Pool party combien de personnes ?", options: ["10 cosy", "20 fun 🏊", "30 event", "50+ chaos"] },
      { q: "Dress code ?", options: ["Hawaii 🌺", "Maillot uni", "Blanc total", "Libre"] },
      { q: "Musique ?", options: ["Chill house", "Latino 💃", "Rap", "Hits 2020s"] },
      { q: "Food ?", options: ["BBQ 🍖", "Buffet froid", "Pizza", "Tout le monde amène"] },
      { q: "Apéro ?", options: ["Cocktail signature 🍹", "Bière", "Vin rosé", "Mix"] },
      { q: "On invite les enfants ?", options: ["Oui famille friendly 👶", "Non adults only", "Selon les heures"] },
      { q: "Photographe ou tel ?", options: ["Photographe pro 📸", "Tel only", "Polaroïd"] },
      { q: "Activité bord piscine ?", options: ["DJ", "Beach volley", "Karaoké 🎤", "Rien"] },
      { q: "Horaire ?", options: ["14h-19h", "16h-minuit 🌙", "Toute la journée"] },
      { q: "Sortie cocktail dans piscine, on assume ?", options: ["Oui 🍷", "Non risque", "Coupes plastique"] },
    ],
    faq: [
      {
        q: "Comment organiser une pool party réussie ?",
        a: "Fixe d'abord le format (cosy / fun / event) avec un sondage. Tout le reste découle. moomz t'aide à structurer en 1h de décisions ce qui prend une semaine en débat WhatsApp.",
      },
      {
        q: "Combien d'invités ?",
        a: "10 pour cosy, 30 max pour conviviale. Au-delà, ça devient une grosse soirée standard avec piscine décor. Le sondage 'on vise combien' tranche tôt.",
      },
      {
        q: "Et pour la sécurité piscine ?",
        a: "Si enfants, prévoir adulte de garde. Sondage 'qui garde la piscine de 18h à 19h' organise une rotation simple.",
      },
      {
        q: "Music : DJ ou playlist ?",
        a: "DJ à partir de 30 personnes, playlist Spotify en dessous. Le sondage 'genre de playlist' permet à toute la team de se reconnaître dans la musique.",
      },
    ],
    related: ["soiree", "anniversaire", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "skincare-routine",
    locale: "fr",
    category: "idees",
    emoji: "🧴",
    title: "Idées de sondage skincare et beauté — 50 questions routine",
    h1: "Sondages skincare : 50 idées pour la team beauté",
    description:
      "50 idées de sondage skincare beauté : routine, produits, rétinol, marques. Crée ton sondage moomz et trouve ta routine ideal.",
    intro:
      "La beauté en 2026 c'est 12 étapes le soir, 50 marques nouvelles par an, 1000 dilemmes. Acide hyaluronique ou rétinol ? La Roche Posay ou The Ordinary ? 7 étapes ou 3 ? Le sondage entre passionnés de skincare remplace 4h de scrolling Sephora. moomz te donne 6 options pour ranker des produits, valider une marque, choisir une routine.",
    sections: [
      {
        h: "La routine du matin : 3 ou 7 étapes ?",
        body: "Le débat skincare le plus polarisant. Les minimalistes : cleanser + SPF + sortir. Les maximalistes : 7 étapes incluant essence et tonique. Sondage 'ta routine matin en étapes' avec 4 options (1-2, 3-4, 5-6, 7+). Tu obtiens la distribution de ta communauté. Bonus : sondage par tranche d'âge pour voir comment la routine évolue.",
      },
      {
        h: "Rétinol oui ou non, à quel âge",
        body: "Le rétinol divise. Pro : anti-âge prouvé. Contre : irritation, sensibilité au soleil. Sondage 'tu utilises du rétinol ?' avec 4 options (oui depuis 20 ans, oui après 30, jamais, j'ai arrêté). Tu obtiens des données pour ta propre décision. Bonus : sondage sur la marque préférée et la concentration (0.25%, 0.5%, 1%).",
      },
      {
        h: "Budget : drugstore vs luxe",
        body: "La Roche Posay à 15€ ou Sisley à 200€ : différence justifiée ? Sondage 'budget skincare mensuel' avec 4 fourchettes. Ensuite sondage 'la marque qui vaut chaque euro pour toi'. Anonyme = pas de honte d'admettre que tu mets 300€/mois ou que tu ne dépasses pas 30€. Tu compares ta consommation à celle de tes pairs.",
      },
      {
        h: "moomz pour la communauté skincare",
        body: "Si tu es créatrice beauté, sondage hebdo : produit testé cette semaine, marque coup de cœur du mois. Si tu es fan, sondage à tes amies : 'on essaye laquelle de ces 4 sérums ?'. Tu transformes ton groupe beauté en mini-jury de test. Plus efficace que les reviews Sephora (souvent payées).",
      },
    ],
    polls: [
      { q: "Combien d'étapes matin ?", options: ["1-2", "3-4 ✨", "5-6", "7+"] },
      { q: "Rétinol oui ou non ?", options: ["Oui 🌙", "Non", "J'ai arrêté", "Je commence"] },
      { q: "Marque préférée ?", options: ["La Roche Posay", "Avène", "The Ordinary 🧴", "Caudalie", "Drunk Elephant"] },
      { q: "Budget skincare mensuel ?", options: ["<30€", "30-80€", "80-150€", ">150€ 💸"] },
      { q: "SPF tous les jours ?", options: ["Oui même hiver ☀️", "Été only", "Jamais"] },
      { q: "Acide hyaluronique : indispensable ?", options: ["Oui", "Bof", "Trop hypé"] },
      { q: "Vitamine C : matin ou soir ?", options: ["Matin 🌅", "Soir", "Les deux", "Jamais"] },
      { q: "Masque par semaine ?", options: ["0-1", "2-3", "4+ 🎭"] },
      { q: "Tu lis l'INCI ?", options: ["Toujours 🔬", "Parfois", "Jamais"] },
      { q: "Cosméto naturel ou pharma ?", options: ["Naturel 🌿", "Pharma 💊", "Mix"] },
    ],
    faq: [
      {
        q: "Routine skincare idéale ?",
        a: "Cleanser + SPF le matin, cleanser + actif (rétinol/vitamine C) + crème le soir. 5 produits suffisent. Sondage moomz à tes amies pour valider.",
      },
      {
        q: "À quel âge commencer le rétinol ?",
        a: "Souvent 25-30 ans pour la prévention. Sondage à des proches de différentes tranches d'âge te donne plus de nuance qu'un article Beauté Magazine.",
      },
      {
        q: "Budget skincare raisonnable ?",
        a: "30-80€/mois couvre l'essentiel avec drugstore qualité. Sondage 'budget skincare' te dit où tu te situes par rapport à tes pairs.",
      },
      {
        q: "Marque qui vaut le coup ?",
        a: "Dépend de ton type de peau. Sondage moomz à 5 amies au même type de peau te donne 5 reco directes — plus utile que 100 reviews Sephora anonymes.",
      },
    ],
    related: ["mode-outfit", "fitness-sport", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "friperie-vintage",
    locale: "fr",
    category: "idees",
    emoji: "👚",
    title: "Idées de sondage friperie et vintage — 50 questions pour la team thrift",
    h1: "Sondages friperie : 50 idées pour acheter mieux et moins cher",
    description:
      "50 idées de sondage friperie vintage : meilleur prix, marques à chercher, look thrifté. Crée ton sondage moomz et fais voter tes potes.",
    intro:
      "La friperie en 2026 c'est plus une niche, c'est un mode de vie. Vinted, Emmaüs, Marché aux puces, Kiloshop — chacun a ses bons plans. Le sondage entre frippeuses partage les tips, valide les achats, classe les marques. moomz remplace le DM '€10 sur Vinted, je prends ?' avec 4 options. Et anonyme — tu peux admettre que ton crush vintage de la semaine est moche sans froisser personne.",
    sections: [
      {
        h: "Vinted, Emmaüs, marché aux puces : où on chasse",
        body: "Chaque lieu a son ratio prix/qualité. Vinted pour le ciblé (taille, marque), Emmaüs pour le grand n'importe quoi à 3€, marché aux puces pour le vrai vintage. Sondage 'où tu chasses ce weekend ?' avec 4 options. Tu organises la sortie en groupe. Bonus : sondage 'meilleur Emmaüs de Paris' avec 5 adresses — précieux pour les nouvelles.",
      },
      {
        h: "Marques à chercher : les bons reflexes",
        body: "Certaines marques vintage prennent de la valeur (Margiela, Issey Miyake, Carhartt 90s). D'autres pas (H&M année 2010). Sondage 'marque préférée à chasser en frip' avec 5 options départage. Les comptes friperie qui font ça génèrent des bibliothèques d'info collectives. moomz est mieux qu'un tableur Notion partagé pour les contributions rapides.",
      },
      {
        h: "Le sondage achat : je prends ou pas",
        body: "Tu hésites sur une pièce à 30€. Lance un sondage moomz à 3 amies avec la photo : 'je le prends ?'. Réponse en 10 minutes. Anonyme = avis sincère. Tu évites les regrets ('j'aurais dû le prendre') et les achats compulsifs. Méthode validée par les comptes Vinted addicts qui ne flambent plus.",
      },
      {
        h: "moomz pour la team thrift",
        body: "Crée un groupe WhatsApp 'frip squad'. Sondage avant chaque sortie : lieu, budget, type de pièce cherchée. Pendant la sortie, sondage 'je prends ?' avec photo. Après, sondage des meilleurs achats de la sortie. Tu transformes la friperie en pratique collective. Et tu économises 30% en évitant les achats impulsifs validés à chaud.",
      },
    ],
    polls: [
      { q: "Tu chasses où ce weekend ?", options: ["Emmaüs 🏪", "Vinted", "Marché aux puces", "Kiloshop"] },
      { q: "Budget sortie frip ?", options: ["<20€", "20-50€", "50-100€", ">100€ 💸"] },
      { q: "Tu cherches quel type ?", options: ["Jean vintage", "Sweat Carhartt", "Robe 90s", "Random surprise 🎲"] },
      { q: "Pièce coup de cœur du mois ?", options: ["Manteau", "Robe", "Accessoire", "Chaussures 👠"] },
      { q: "Tu revends sur Vinted ?", options: ["Oui régulièrement", "Parfois", "Jamais"] },
      { q: "Marque préférée vintage ?", options: ["Levi's", "Carhartt", "Issey Miyake 🌟", "Margiela"] },
      { q: "On achète neuf ou jamais ?", options: ["Jamais neuf 🌿", "Surtout vintage", "50/50", "Surtout neuf"] },
      { q: "Trip frip avec ?", options: ["Solo", "1 pote", "Groupe 👯", "Couple"] },
      { q: "Pire achat regretté ?", options: ["Trop grand", "Démodé", "Mal lavé", "Aucun 🤞"] },
      { q: "Pièce iconique à chasser ?", options: ["Levi's 501 vintage", "Veste varsity", "Trench Burberry 🧥", "Robe slip 90s"] },
    ],
    faq: [
      {
        q: "Où trouver les meilleures friperies à Paris ?",
        a: "Sondage à 5 amis Parisiens : tu obtiens 10+ adresses validées. Plus rapide qu'un article TimeOut. moomz garde la liste accessible.",
      },
      {
        q: "Comment savoir si une pièce vaut son prix ?",
        a: "Sondage rapide à tes amies avec la photo. 3 avis te confirment ou te dissuadent en 10 minutes. Méthode validée par les frip-addicts qui veulent éviter le regret.",
      },
      {
        q: "Vinted ou friperie physique ?",
        a: "Vinted pour le ciblé, physique pour le coup de cœur. Sondage 'cette semaine je chasse où' équilibre les deux.",
      },
      {
        q: "Comment éviter les achats compulsifs ?",
        a: "Sondage à tes amies anonyme avant d'acheter. Le délai de 10 minutes + 3 avis suffit à filtrer 50% des achats regrettables.",
      },
    ],
    related: ["mode-outfit", "ami-amie", "argent-finances"],
    updatedAt: today,
  },
  {
    slug: "voyage-japon",
    locale: "fr",
    category: "idees",
    emoji: "🇯🇵",
    title: "Idées de sondage voyage Japon — 50 questions pour ton trip",
    h1: "Sondages voyage Japon : 50 idées pour planifier",
    description:
      "50 idées de sondage voyage Japon : itinéraire, Tokyo vs Kyoto, budget, restos. Crée ton sondage moomz et planifie ton trip rêvé.",
    intro:
      "Le Japon c'est 80% des budgets voyages des français en 2026. Tokyo, Kyoto, Osaka, Hokkaido, Okinawa — l'itinéraire est crucial parce que le pays est immense. Sondage moomz avec ton crew voyage : 4-6 options de routing, budget, activités. Tu débloques 2 mois de débats WhatsApp en 1 jour. Et anonyme = pas de tension si quelqu'un veut Disney Tokyo et un autre veut Kyoto culturel.",
    sections: [
      {
        h: "L'itinéraire : 7, 14, 21 jours ?",
        body: "Le Japon mérite 14 jours minimum. Sondage 'durée du trip' avec 4 options. Une fois la durée fixée, sondage 'on couvre quelles villes ?'. Tokyo + Kyoto en 7 jours, +Osaka en 10, +Hokkaido en 14, +Okinawa en 21. moomz t'aide à structurer en évitant le piège du 'on veut tout voir' qui mène à un trip épuisant.",
      },
      {
        h: "Budget : à 1500€ tu peux, à 5000€ tu kiffes",
        body: "Le Japon est cher mais variable. Sondage 'budget par personne hors vol' avec 4 fourchettes (1500, 2500, 4000, 5000+). Ensuite sondage activités : 'on va à Disney ?', 'sushi tasting à 200€ ?', 'capsule hotel pour l'expérience ?'. Anonyme = chacun donne son vrai budget sans honte.",
      },
      {
        h: "Tokyo : on dort où, on visite quoi",
        body: "Tokyo c'est 7 quartiers distincts. Shinjuku pour nightlife, Shibuya pour fashion, Asakusa pour traditionnel. Sondage 'on dort où ?' avec 4 quartiers. Sondage 'priorité 1 à Tokyo' avec 4 options (Akihabara, Harajuku, Ginza, Shinjuku). Tu structures ton planning en 1 jour. Bonus : sondage 'on prend le pass JR' (vaut souvent le coup).",
      },
      {
        h: "moomz pour ton trip Japon",
        body: "Crée 8 sondages 2 mois avant le départ : durée, budget, villes, hôtels, activités prio. Pin les liens dans le WhatsApp groupe voyage. Tu transformes le rêve Japon en plan exécutable. Sur place, sondage live 'restau ce soir ?' avec 4 options Google Maps. Tu maximises chaque jour.",
      },
    ],
    polls: [
      { q: "Durée du trip Japon ?", options: ["7 jours", "10 jours", "14 jours 🌸", "21+ jours"] },
      { q: "Villes prio ?", options: ["Tokyo only", "Tokyo+Kyoto", "Tokyo+Kyoto+Osaka 🏯", "Le full tour"] },
      { q: "Budget par personne hors vol ?", options: ["1500€", "2500€", "4000€", "5000€+ 💸"] },
      { q: "Saison préférée ?", options: ["Sakura printemps 🌸", "Été", "Momiji automne 🍁", "Hiver neige"] },
      { q: "Vol direct ou escale ?", options: ["Direct 900€", "Escale 600€", "Premium 2000€ ✨"] },
      { q: "Pass JR ?", options: ["Indispensable", "Bof", "Selon le trip 🚆"] },
      { q: "Restau iconique à faire ?", options: ["Sushi Jiro", "Ramen Ichiran", "Wagyu A5 🥩", "Conbini only"] },
      { q: "Hotel ou Airbnb ?", options: ["Hotel", "Airbnb 🏠", "Capsule pour l'expérience", "Ryokan"] },
      { q: "Disney Tokyo ?", options: ["Disneyland", "DisneySea 🌊", "Les deux", "Ni l'un ni l'autre"] },
      { q: "Souvenir à rapporter ?", options: ["Kit Kat saveurs", "Matcha", "Vêtement Uniqlo", "Manga japonais 📚"] },
    ],
    faq: [
      {
        q: "Combien de jours pour visiter le Japon ?",
        a: "14 jours est l'optimum pour Tokyo + Kyoto + Osaka avec respiration. 21 si tu veux ajouter Hokkaido ou Okinawa. Sondage à tes potes voyageurs te confirme.",
      },
      {
        q: "Budget pour 14 jours au Japon ?",
        a: "2500-4000€ par personne hors vol pour confort moyen. moomz te dit où ton budget se situe par rapport à tes amis qui y sont allés.",
      },
      {
        q: "Quelle saison choisir ?",
        a: "Sakura (avril) ou momiji (novembre) sont magiques mais chers. Sondage 'tu préfères chaud ou froid' avant de booker.",
      },
      {
        q: "Pass JR vaut le coup ?",
        a: "Si tu fais Tokyo-Kyoto-Osaka oui (économie 100€+). Si tu restes à Tokyo non. Sondage à tes amis qui sont déjà partis pour confirmer.",
      },
    ],
    related: ["voyage", "ami-amie", "argent-finances"],
    updatedAt: today,
  },
  {
    slug: "voyage-maroc",
    locale: "fr",
    category: "idees",
    emoji: "🇲🇦",
    title: "Idées de sondage voyage Maroc — 50 questions pour ton trip",
    h1: "Sondages voyage Maroc : 50 idées pour planifier",
    description:
      "50 idées de sondage voyage Maroc : Marrakech, Essaouira, désert. Crée ton sondage moomz et organise ton séjour.",
    intro:
      "Le Maroc c'est la destination courte-distance la plus populaire des français : 3h de vol, dépaysement total, budget tenable. Marrakech, Essaouira, Fès, désert Merzouga — l'offre est riche. moomz te donne 4-6 options pour ranker les villes, les riads, les activités. Anonyme = pas de tension dans le groupe si quelqu'un veut désert et un autre veut plage.",
    sections: [
      {
        h: "Marrakech : combien de jours et où",
        body: "Marrakech c'est le hub touristique. 3-5 jours suffisent pour la médina, Jemaa el-Fna, les jardins Majorelle. Sondage 'on reste combien ?' avec 4 options. Au-delà, tu veux bouger (Essaouira, désert, Atlas). Bonus : sondage 'riad ou hotel ?' départage selon le budget et le mood (le riad est l'expérience authentique).",
      },
      {
        h: "Désert ou plage : le grand choix",
        body: "Le Maroc a les deux. Désert Merzouga pour le wow (étoiles, dunes, dromadaires). Essaouira pour le chill (océan, surf, alizés). Sondage 'priorité du trip' avec 4 options (désert only, plage only, les deux, ville only). Tu structures le trip en 1 jour. Si désert, sondage 'on dort en bivouac de luxe ou simple ?'.",
      },
      {
        h: "Le budget : 500€ à 3000€ selon le style",
        body: "Le Maroc autorise tous les budgets. Sac-à-dos à 500€ ou luxe à 3000€. Sondage 'budget par personne hors vol' avec 4 fourchettes. Ensuite, sondage activités : 'massage hammam à 80€ ?', 'cours de cuisine ?', 'quad dans le désert ?'. Anonyme = chacun donne son vrai budget sans pression sociale.",
      },
      {
        h: "moomz pour ton trip Maroc",
        body: "Crée 6 sondages 1 mois avant : durée, villes, budget, type d'hébergement, activités prio. Pin les liens dans le WhatsApp groupe. Sur place, sondage 'on déjeune dans la médina ou en dehors ?' avec 4 options Google Maps. Tu profites de chaque jour au lieu de débattre 2h à chaque repas.",
      },
    ],
    polls: [
      { q: "Durée du trip Maroc ?", options: ["5 jours", "7 jours", "10 jours 🌴", "14 jours"] },
      { q: "Villes prio ?", options: ["Marrakech only", "Marrakech+Essaouira", "Marrakech+désert", "Le full nord-sud 🚐"] },
      { q: "Désert : oui ou non ?", options: ["Oui bivouac luxe", "Oui simple", "Non plutôt plage 🌊", "Indifférent"] },
      { q: "Budget hors vol ?", options: ["500€", "1000€", "2000€", "3000€+ 💸"] },
      { q: "Riad ou hotel ?", options: ["Riad authentique 🏛️", "Hotel chic", "Mix"] },
      { q: "Activité incontournable ?", options: ["Hammam", "Cours de cuisine", "Quad désert 🏜️", "Surf Essaouira"] },
      { q: "Saison ?", options: ["Printemps", "Été (chaud)", "Automne 🍂", "Hiver doux"] },
      { q: "On marchande ?", options: ["Toujours 💰", "Parfois", "Jamais malaise"] },
      { q: "Plat préféré ?", options: ["Tajine", "Couscous", "Pastilla", "Msemen 🥞"] },
      { q: "Niveau d'arabe/darija ?", options: ["Bonjour merci", "Phrases simples", "Conversation 🇲🇦", "Aucun"] },
    ],
    faq: [
      {
        q: "Combien de jours pour le Maroc ?",
        a: "7 jours pour Marrakech + Essaouira. 10 si tu ajoutes le désert. 14 pour le tour nord-sud. Sondage à tes amis qui y sont allés pour confirmer ton planning.",
      },
      {
        q: "Désert Merzouga : ça vaut le coup ?",
        a: "Oui mais c'est 10h de route depuis Marrakech aller-retour. Sondage à des amis qui ont fait : 95% disent oui, 5% trouvent trop long.",
      },
      {
        q: "Budget raisonnable pour 7 jours ?",
        a: "800-1500€ par personne hors vol pour confort moyen. moomz situe ton budget par rapport à tes pairs.",
      },
      {
        q: "Saison à éviter ?",
        a: "Été (juillet-août) à Marrakech : 45°C insupportable. Sondage 'tu y vas quand' pour comparer avec tes amis voyageurs.",
      },
    ],
    related: ["voyage", "ami-amie", "argent-finances"],
    updatedAt: today,
  },
  {
    slug: "pyjama-party",
    locale: "fr",
    category: "idees",
    emoji: "🛏️",
    title: "Idées de sondage pyjama party — 50 questions soirée ado",
    h1: "Sondages pyjama party : 50 idées pour les girls night",
    description:
      "50 idées de sondage pyjama party : film, jeux, snacks, vérité ou action. Crée ton sondage moomz et anime la nuit.",
    intro:
      "La pyjama party c'est 8h d'animation pour 4-6 ados. Sans cadre, ça vire à l'écran TikTok solo. Le sondage moomz remplace les 'on fait quoi ?' qui finissent en silence. 4-6 options, vote en 10 secondes, activité décidée. Et anonyme — les ados timides peuvent voter sans la pression du groupe. Parfait pour les 12-16 ans qui veulent une vraie soirée animée.",
    sections: [
      {
        h: "Le film de minuit : le débat le plus relou",
        body: "À 22h, débat 'on regarde quoi ?' pour 45 minutes, et à 23h personne ne regarde rien. Sondage moomz avec 4 films pré-sélectionnés (1 horreur, 1 romance, 1 comédie, 1 classique), deadline 5 minutes, on lance. Plus de paralysie. Les soirées qui tournent c'est celles avec un cadre — moomz fournit le cadre sans la cheffaillerie.",
      },
      {
        h: "Vérité ou action : le sondage qui pimente",
        body: "Au lieu de jouer à la classique, fais un sondage moomz à chaque tour : 'X choisit vérité ou action ?'. Plus rigolo parce que c'est le groupe qui décide. Anonyme = pas de favoritisme. Bonus : tu peux pré-écrire 20 dares et 20 questions, et faire voter sur quel groupe utiliser.",
      },
      {
        h: "Snack et activités : éviter la flemme commune",
        body: "À 1h du mat, 'on commande quoi ?' avec 4 personnes affamées vire au n'importe quoi. Sondage 'pizza, sushi, McDo, popcorn maison' avec 4 options. Décision en 2 minutes. Pareil pour les activités : sondage 'on fait quoi maintenant ?' avec 4 options (TikToks à reproduire, maquillage challenge, photoshoot, on dort). Tu sauves la soirée.",
      },
      {
        h: "moomz dans la pyjama party",
        body: "Crée un sondage par moment clé : film, snack, jeu, photo. Le téléphone fait tourner les votes, chacune vote, la décision est claire. Tu transformes la soirée en jeu collectif où chaque ado se sent écoutée. Bonus : screenshot les résultats pour rigoler dans le groupe WhatsApp le lendemain.",
      },
    ],
    polls: [
      { q: "Film de minuit ?", options: ["Horreur 👻", "Romance 💕", "Comédie", "Classique"] },
      { q: "Snack à 22h ?", options: ["Pizza 🍕", "Sushis", "McDo", "Pop-corn maison"] },
      { q: "Jeu de minuit ?", options: ["Vérité ou action", "Cluedo", "Jeu cartes 🃏", "Just dance"] },
      { q: "On fait des TikToks ?", options: ["Oui carrément 📱", "Quelques", "Non on parle"] },
      { q: "Maquillage challenge ?", options: ["Oui chaque", "Non flemme", "Photo shoot 📸"] },
      { q: "On dort à quelle heure ?", options: ["2h", "4h", "Pas avant 6h 🌙", "Jamais"] },
      { q: "Pyjama dress code ?", options: ["Coordonné", "Free", "Le plus moche 😆", "Le plus chic"] },
      { q: "On commande ou maison ?", options: ["On commande", "Maison cuisine 👩‍🍳", "Mix"] },
      { q: "Activité petit dej ?", options: ["Pancakes 🥞", "Croissants", "Bowl healthy", "Ce qu'il reste"] },
      { q: "On refait quand ?", options: ["Le mois prochain", "Tous les mois 💕", "Quand on peut"] },
    ],
    faq: [
      {
        q: "Comment animer une pyjama party sans s'ennuyer ?",
        a: "Un sondage moomz par tranche de 1-2h. Tu structures la soirée sans imposer. Les ados timides participent sans pression.",
      },
      {
        q: "Quels films pour une pyjama party ?",
        a: "Pré-sélectionne 4 titres en avance (mix genres). Sondage moomz, gagnant lancé. Plus de débat à 23h.",
      },
      {
        q: "À quel âge organiser une pyjama party ?",
        a: "Dès 10-11 ans. Le sondage marche aussi en mini (3 invitées) qu'en groupe (6-7).",
      },
      {
        q: "Et si on ne s'entend pas toutes ?",
        a: "Le sondage anonyme désamorce. Personne ne sait qui a voté pour 'on regarde Mean Girls', donc pas de tension entre votantes opposées.",
      },
    ],
    related: ["ado", "soiree", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "halloween-costume",
    locale: "fr",
    category: "idees",
    emoji: "🎃",
    title: "Idées de sondage costume Halloween — 50 questions qui choisissent le déguisement",
    h1: "Sondages Halloween costume : 50 idées qui font voter ta team",
    description:
      "50 idées de sondage costume Halloween : couple, groupe, solo, kids. Crée ton sondage moomz et choisis le costume parfait.",
    intro:
      "Halloween c'est 1 mois de débat costume. Solo terrifiant, couple iconique, groupe coordonné, c'est jamais évident. Sondage moomz à tes potes : 4-6 options visuelles, vote en 10 secondes. Anonyme = pas de pression à valider l'idée du chef du groupe. Tu choisis le costume qui fait majorité et la soirée est plus cohérente.",
    sections: [
      {
        h: "Costume couple : la question qui fâche",
        body: "Tu veux Sandy/Danny (Grease), ton/ta partenaire veut Mario/Peach. Sondage moomz avec 4 idées couples sérieuses + 'on se déguise pas pareil'. Le résultat tranche sans dispute. Bonus : sonde tes amis qui ont déjà fait pour le retour d'expérience (le costume Pikachu/Charizard est mignon mais hyper chaud à porter).",
      },
      {
        h: "Costume groupe : 6 personnes, 1 thème",
        body: "Le costume groupe coordonné fait son effet en soirée. Sondage 'thème du groupe' avec 4 options : Power Rangers, Squid Game, Avengers, Disney Princess. Le gagnant fixe le thème, ensuite sondage 'qui est qui' pour répartir les rôles. moomz t'épargne le débat WhatsApp de 200 messages.",
      },
      {
        h: "Le DIY vs achat : budget vs ambition",
        body: "Le costume DIY peut être génial ou catastrophique. Sondage 'on fait DIY ou Amazon ?' avec 4 options. Si DIY, sondage 'budget mat per personne' avec 4 fourchettes. Tu vois si la team est motivée ou flemmarde. Le DIY de 5h pour 1 personne motivée vs 5 flemmardes = catastrophe — autant savoir avant.",
      },
      {
        h: "moomz pour ton Halloween",
        body: "Lance les sondages 3 semaines avant Halloween. Thème groupe, costume individuel, budget, soirée à laquelle on va. Pin les liens dans le WhatsApp groupe. Anonyme = vrais avis. Le jour J, sondage 'meilleur costume du groupe' pour rigoler — gagnant offre les shots.",
      },
    ],
    polls: [
      { q: "Costume Halloween ?", options: ["Solo terrifiant 👻", "Couple iconique 💕", "Groupe coordonné", "On se déguise pas"] },
      { q: "Thème groupe ?", options: ["Squid Game", "Power Rangers", "Avengers", "Disney 🏰"] },
      { q: "Budget costume ?", options: ["<20€", "20-50€", "50-100€", ">100€ 💸"] },
      { q: "DIY ou acheté ?", options: ["DIY 🎨", "Acheté", "Mix"] },
      { q: "Maquillage : à fond ou léger ?", options: ["À fond gore 🩸", "Maquillage simple", "Aucun"] },
      { q: "On invite Charles aussi ?", options: ["Oui carrément", "Bof", "Non malaise"] },
      { q: "Soirée à laquelle on va ?", options: ["Chez Alice", "Bar à thème", "Club", "On fait la nôtre 🎃"] },
      { q: "Citrouille : on en sculpte ?", options: ["Oui", "Non flemme", "Une mini"] },
      { q: "Trick or treat avec les kids ?", options: ["Oui 👻", "On reste adultes", "Si invités"] },
      { q: "On se prend en photo ?", options: ["Shoot pro", "Photo Polaroid 📸", "Tel seulement"] },
    ],
    faq: [
      {
        q: "Comment choisir un costume groupe ?",
        a: "Sondage moomz avec 4 thèmes pré-sélectionnés, vote en 24h. Plus rapide que 2 semaines de débat WhatsApp.",
      },
      {
        q: "Costume couple Halloween qui marche ?",
        a: "Sondage à 5 amies déjà passées par là. Tu obtiens les retours d'expérience (durée, confort, photo impact) sans tester toi-même.",
      },
      {
        q: "Combien dépenser pour un costume ?",
        a: "30-60€ pour acheté correct. 10-30€ pour DIY motivé. Sondage 'budget' te dit où tu te situes par rapport à tes potes.",
      },
      {
        q: "Et si la team ne suit pas le thème ?",
        a: "Deadline 1 semaine pour confirmer le déguisement individuel. Si une personne ne suit pas, sondage 'on garde le thème ou on annule' tranche.",
      },
    ],
    related: ["soiree", "ami-amie", "anniversaire"],
    updatedAt: today,
  },
  {
    slug: "secret-santa",
    locale: "fr",
    category: "idees",
    emoji: "🎄",
    title: "Idées de sondage Secret Santa — 50 questions pour Noël",
    h1: "Sondages Secret Santa : 50 idées pour le cadeau anonyme",
    description:
      "50 idées de sondage Secret Santa : budget, règles, idées cadeaux. Crée ton sondage moomz et organise ton Secret Santa sans drama.",
    intro:
      "Le Secret Santa, c'est l'antidote aux cadeaux de Noël obligatoires : 1 cadeau par personne tirée au sort, budget commun, surprise. Mais l'organisation, c'est la galère : budget, règles, tirage, livraison. moomz résout tout ça en sondages anonymes. Et le sondage anonyme est PARFAIT pour le Secret Santa puisque l'expéditeur reste secret.",
    sections: [
      {
        h: "Le budget : 20€, 30€, 50€ ?",
        body: "Le budget Secret Santa varie selon le groupe. Famille = 30-50€, collègues = 15-25€, amis = 20-40€. Sondage 'budget pour notre SS ?' avec 4 fourchettes. Anonyme évite que les personnes en difficulté financière votent par politesse pour un budget trop élevé. Tu obtiens le vrai consensus économique.",
      },
      {
        h: "Les règles : Wishlist, anti-doublon, livraison",
        body: "Sondage 'on fait des wishlists ou surprise totale ?' tranche le débat. Sondage 'cadeaux Amazon autorisés ou DIY uniquement ?' fixe le ton. Sondage 'tirage à l'avance ou le jour J' organise la logistique. 3 sondages, 1 heure, et ton SS est cadré. Plus de gens qui font à la dernière minute.",
      },
      {
        h: "Idées cadeaux : le sondage du donneur",
        body: "Tu as tiré au sort un collègue que tu connais peu. Sondage moomz à ses proches : 'il aime plutôt Sephora, Fnac, expérience ou cash ?'. Anonyme = les autres collaborent sans révéler ton secret. Tu obtiens une idée ciblée. Le Secret Santa anonyme + moomz anonyme = combo parfait.",
      },
      {
        h: "moomz pour ton Secret Santa",
        body: "Crée 3 sondages 1 mois avant Noël : budget, règles, date de livraison. Tirage au sort via outil dédié (genre Drawnames). Pendant le mois, sondage anonyme pour chercher des idées sur les autres. Le jour J, sondage 'meilleur cadeau' pour rigoler — gagnant a la honte glorieuse. Tu transformes le SS en saga animée.",
      },
    ],
    polls: [
      { q: "Budget Secret Santa ?", options: ["15€", "25€", "35€ 🎁", "50€"] },
      { q: "Wishlist ou surprise ?", options: ["Wishlist", "Surprise totale 🎅", "Suggestions seulement"] },
      { q: "DIY ou acheté ?", options: ["DIY seulement", "Acheté ok", "Les deux ok 🎨"] },
      { q: "Livraison : en main propre ou colis ?", options: ["Main propre", "Colis 📦", "Selon distance"] },
      { q: "Date d'échange ?", options: ["Avant Noël", "Pendant repas Noël 🎄", "Aprem Boxing Day"] },
      { q: "On révèle qui à qui ?", options: ["Oui à la fin", "Reste anonyme 🎭", "Devine"] },
      { q: "Cadeau humoristique autorisé ?", options: ["Oui obligé 😂", "Mi-fig mi-raisin", "Non vrai cadeau"] },
      { q: "Combien de personnes idéal ?", options: ["4-5", "6-10 🎯", "10+ tribu"] },
      { q: "On l'organise en famille ou amis ?", options: ["Famille", "Amis", "Collègues", "Mix"] },
      { q: "Et si quelqu'un oublie ?", options: ["Drama", "On rigole", "Pénalité shot 🍷", "On comprend"] },
    ],
    faq: [
      {
        q: "Budget Secret Santa raisonnable ?",
        a: "25-35€ pour amis/collègues, 30-50€ en famille. Sondage moomz à ton groupe pour fixer le bon nombre selon les pouvoirs d'achat.",
      },
      {
        q: "Wishlist ou surprise totale ?",
        a: "60% des SS modernes utilisent une mini wishlist (3 envies). Évite les cadeaux à côté de la plaque. Sondage tranche le débat.",
      },
      {
        q: "Comment tirer au sort ?",
        a: "Outils dédiés comme Drawnames ou Elfster. Sondage 'on utilise lequel ?' avec 3 options départage.",
      },
      {
        q: "Et si quelqu'un n'achète pas ?",
        a: "Sondage anonyme 'on rappelle à J-7 ou J-3 ?'. Une relance suffit en général. Sinon, le groupe se cotise pour remplacer.",
      },
    ],
    related: ["famille", "travail-collegues", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "tinder-hinge",
    locale: "fr",
    category: "idees",
    emoji: "💘",
    title: "Idées de sondage Tinder/Hinge — 50 questions premier rdv app",
    h1: "Sondages Tinder/Hinge : 50 idées qui décident du swipe",
    description:
      "50 idées de sondage Tinder Hinge dating apps : profil, photos, premier rdv. Crée ton sondage moomz et boost ton match game.",
    intro:
      "Les dating apps en 2026 c'est 80% du dating français. Tinder, Hinge, Bumble, Fruitz — chacun a son code. Le sondage moomz à tes amis 'je swipe ou pas ?', 'cette photo de profil va ?', 'cette première phrase marche ?'. Anonyme = vrai feedback sans complaisance. Tu améliores ton profil avec data plutôt qu'avec espoir.",
    sections: [
      {
        h: "Le profil : photos qui matchent vs photos qui flop",
        body: "70% du match dépend de la photo principale. Sondage moomz avec 4 photos candidates : 'laquelle en première ?'. Tes amis votent anonymement. Le résultat est souvent surprenant (la photo que TU préfères n'est pas la mieux). Tu peux faire ça pour chacun de tes 6 emplacements profil. Les comptes dating coach français font ça systématiquement.",
      },
      {
        h: "La première phrase : on tape quoi",
        body: "Le 'salut ça va ?' générique ne fait rien. Sondage 'meilleure ouverture pour ce match' avec 4 options (question profil, complimente précis, humour, direct). Tes amis votent en fonction du profil de la personne. Tu envoies l'ouverture validée. Taux de réponse multiplié par 3 selon les études Hinge.",
      },
      {
        h: "Premier rdv : où, quand, format",
        body: "Tu as un date validé. Café, bar, restau, balade ? Sondage 'idée premier rdv' avec 4 options. Tes amies votent selon le profil du match. Café à 18h reste safe et permet d'enchaîner ou de partir. Restau c'est trop long pour un premier rdv (90 min minimum). moomz t'aide à choisir avec data sociale.",
      },
      {
        h: "moomz dans ta routine dating",
        body: "Crée un mini-groupe 'team dating' avec 3-5 amis de confiance. Sondage avant chaque swipe douteux, avant chaque message, avant chaque date. Anonyme = vrai feedback. Tu transformes le dating en jeu d'équipe plutôt qu'en solo angoissé. Et tu gardes l'historique pour rigoler des résultats à 6 mois.",
      },
    ],
    polls: [
      { q: "Photo de profil principale ?", options: ["Portrait souriant", "Plein pied", "Avec un animal 🐶", "Action (sport, voyage)"] },
      { q: "Je swipe sur ce profil ?", options: ["Right 💚", "Left", "Super like ⭐", "Réflexion"] },
      { q: "Ouverture sur Hinge ?", options: ["Question prompt", "Complimente précis", "Humour 😄", "Direct"] },
      { q: "Premier rdv : où ?", options: ["Café", "Bar 🍷", "Restau", "Balade"] },
      { q: "Premier rdv : durée ?", options: ["1h café", "2h apéro", "3h dîner", "Toute la soirée"] },
      { q: "App principale ?", options: ["Tinder", "Hinge 💎", "Bumble", "Fruitz"] },
      { q: "Profil ghost / réponse en 2 jours : on insiste ?", options: ["Oui un 2ème msg", "On laisse 👻", "On unmatch"] },
      { q: "Bio : longue ou courte ?", options: ["1 ligne mystère", "3-5 lignes", "Liste prompts 📝"] },
      { q: "On dit l'âge réel ?", options: ["Toujours", "±1 an ok", "±3 ans c'est limite", "Jamais"] },
      { q: "Premier rdv : qui paie ?", options: ["Lui", "Elle", "Partagé 💳", "Selon l'humeur"] },
    ],
    faq: [
      {
        q: "Quelle photo de profil dating choisir ?",
        a: "Sondage moomz à tes amis avec 4 candidates. Le résultat est souvent contre-intuitif. Méthode validée par les coachs dating professionnels.",
      },
      {
        q: "Première phrase qui marche ?",
        a: "Question sur un prompt spécifique = +200% de taux de réponse vs 'salut ça va'. Sondage moomz pour valider le wording.",
      },
      {
        q: "Tinder ou Hinge ?",
        a: "Tinder pour le volume, Hinge pour le qualitatif. Sondage à 10 amis qui ont les deux pour comparer les résultats récents.",
      },
      {
        q: "Et si je n'ai aucun match ?",
        a: "Sondage 'mon profil va ou pas ?' avec photo et bio. 5 retours anonymes te disent ce qui cloche. Bien plus efficace qu'un test 'profil dating' payant.",
      },
    ],
    related: ["premier-rendez-vous", "celibataire-vie", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "ex-rupture",
    locale: "fr",
    category: "idees",
    emoji: "💔",
    title: "Idées de sondage ex et rupture — 50 questions qui aident à tourner la page",
    h1: "Sondages ex/rupture : 50 idées pour décider sans drama",
    description:
      "50 idées de sondage rupture ex : on reprend ou pas, no contact, reconquête. Crée ton sondage moomz et fais voter tes amis.",
    intro:
      "La rupture c'est 6 mois de questions impossibles : on reprend, on bloque, on reste amis, on déménage. Le sondage moomz à tes amis (anonyme, donc vrais avis) débloque les ruminations. 4-6 options, vote en 10 secondes, signal externe. Ça ne décide pas pour toi, mais ça te donne 30 perspectives au lieu d'1 et ça t'aide à clarifier ta propre tendance.",
    sections: [
      {
        h: "On reprend ou pas : la question éternelle",
        body: "Il/elle revient après 2 mois. Tu hésites. Sondage moomz à 8 amis qui connaissent la situation : 'je reprends ou pas ?'. Anonyme = vrai avis. La majorité te donne un signal — c'est juste un signal, pas une décision, mais ça pèse. 70% des gens qui font ce sondage suivent ensuite la majorité (parce qu'au fond, c'est leur intuition aussi).",
      },
      {
        h: "No contact : combien de temps",
        body: "Le no contact post-rupture est recommandé par tous les thérapeutes. Mais 1 mois, 3 mois, 6 mois ? Sondage à tes amis qui sont passés par là : 'tu as fait combien de no contact ?'. Tu obtiens de la data réelle. La moyenne est 3 mois en France. moomz te donne cette stat ciblée pour ton entourage.",
      },
      {
        h: "Rester amis ou bloquer : le grand choix",
        body: "Selon la rupture, l'amitié post-couple est possible ou impossible. Sondage 'tu restes ami avec tes ex ?' avec 4 options. Tu vois la culture de ton groupe. Bonus : sondage 'on garde les photos Insta ou on supprime tout ?'. Anonyme = pas de jugement sur tes choix.",
      },
      {
        h: "moomz pour traverser une rupture",
        body: "Crée un groupe WhatsApp 'team rupture' avec 5 amis proches. Sondage par décision importante : on reprend, on déménage, on supprime les photos, on rappelle un ex avant. Tu transformes la rumination solo en data collective. Anonyme = tes amis donnent leur vrai avis sans peur de te peiner.",
      },
    ],
    polls: [
      { q: "On reprend avec l'ex ?", options: ["Non jamais 🚫", "Si change vraiment", "Oui mais doucement", "Déjà repris 😅"] },
      { q: "Durée de no contact ?", options: ["1 mois", "3 mois 🕊️", "6 mois", "Jamais"] },
      { q: "Tu restes amie avec tes ex ?", options: ["Toujours 💕", "Selon la rupture", "Jamais"] },
      { q: "On supprime les photos Insta ?", options: ["Tout supprimer", "Archive", "Laisse 📸", "Sondage déjà fait"] },
      { q: "On bloque sur réseaux ?", options: ["Tout bloqué", "Insta only", "Rien bloqué 🌬️"] },
      { q: "On rappelle un ex avant lui/elle ?", options: ["Oui rebound 💋", "Non vide", "Selon ex"] },
      { q: "Mode coupe de cheveux post-rupture ?", options: ["Tout couper", "Couleur folle 💇", "Rien changé"] },
      { q: "Voyage solo post-rupture ?", options: ["Oui absolument 🌍", "Pas le moment", "Avec une pote"] },
      { q: "Combien de temps pour s'en remettre ?", options: ["1 mois", "3 mois", "6 mois 💔", "1 an+"] },
      { q: "Thérapie post-rupture ?", options: ["Oui", "Non", "Une fois", "En cours 💬"] },
    ],
    faq: [
      {
        q: "Comment décider de reprendre avec un ex ?",
        a: "Sondage moomz à 8 amis qui connaissent. La majorité te donne un signal, pas une décision. C'est l'équivalent gratuit d'une session thérapie de validation.",
      },
      {
        q: "Combien de temps pour se remettre ?",
        a: "Règle commune : 1 mois par année de relation. Sondage à des amis qui sont passés par là pour la moyenne réelle.",
      },
      {
        q: "On reste amis ou pas ?",
        a: "Selon la rupture. Sondage 'tu restes ami avec tes ex ?' montre que 40% des français disent oui. moomz te dit ce que TON cercle pense.",
      },
      {
        q: "Et si je veux le bloquer ?",
        a: "C'est ton droit. Mais sondage 'on bloque ou on archive ?' donne souvent des nuances utiles. L'archivage est souvent suffisant.",
      },
    ],
    related: ["couple", "premier-rendez-vous", "celibataire-vie"],
    updatedAt: today,
  },
  {
    slug: "argent-budget-jeune",
    locale: "fr",
    category: "idees",
    emoji: "💸",
    title: "Idées de sondage budget jeune — 50 questions argent",
    h1: "Sondages budget : 50 idées pour la team finances jeunes",
    description:
      "50 idées de sondage budget jeune : épargne, dépenses, crypto, investissement. Crée ton sondage moomz et compare avec tes potes.",
    intro:
      "Parler argent en France c'est tabou. Mais entre 18-30 ans, les questions sont concrètes : on épargne combien, on investit en crypto, on prend une assurance vie, on dépense quoi en sortie. Sondage moomz anonyme = tes amis répondent vrai, sans la honte de paraître radin ou panier percé. Tu te situes par rapport à tes pairs. Plus utile qu'un article du Monde.",
    sections: [
      {
        h: "Épargne mensuelle : combien réellement",
        body: "On dit qu'il faut épargner 20% des revenus. La réalité ? Sondage 'tu épargnes combien par mois ?' avec 4 fourchettes (0, 50-200€, 200-500€, 500€+). Anonyme = vraies réponses. Tu te situes. 70% des 25-30 ans en France épargnent moins de 200€/mois. Si tu en mets 300€, tu es déjà au-dessus. Cette info change ta perception de ce que tu 'devrais' faire.",
      },
      {
        h: "Crypto et bourse : on s'expose ?",
        body: "La crypto a perdu beaucoup en 2022, repris en 2024. La bourse via ETF reste la stratégie classique. Sondage 'tu investis ?' avec 4 options (rien, ETF only, crypto only, les deux). Tu vois la distribution de ton entourage. Bonus : sondage 'tu as combien en crypto ?' avec 4 fourchettes. Anonyme évite les comparaisons toxiques.",
      },
      {
        h: "Sortie / restau / loyer : où va l'argent",
        body: "Le 'on dépense trop en restau' est subjectif. Sondage 'budget restau mensuel' avec 4 fourchettes. 'Budget sortie' pareil. Tu vois où ton style de vie se situe. Si tu mets 400€/mois en restau et 600€ en loyer, ce n'est peut-être pas équilibré. La data te le dit sans jugement.",
      },
      {
        h: "moomz pour la team finances",
        body: "Crée un sondage par sujet financier dans ton groupe WhatsApp. Épargne, investissement, gros achats, vacances. Anonyme = vrais chiffres. Tu casses le tabou français de l'argent par la data. Tes amis aussi se situent. C'est plus utile que les recommandations de Tony Robbins ou des comptes finance Insta qui vendent leur formation.",
      },
    ],
    polls: [
      { q: "Épargne mensuelle ?", options: ["0", "50-200€", "200-500€ 💰", "500€+"] },
      { q: "Tu investis en crypto ?", options: ["Non jamais", "Un peu (<500€)", "Oui sérieux 📈", "Beaucoup"] },
      { q: "Tu investis en bourse/ETF ?", options: ["Oui DCA mensuel", "Lump sum 1x", "Pas encore", "Jamais"] },
      { q: "Budget restau mensuel ?", options: ["<50€", "50-150€", "150-300€", ">300€ 🍽️"] },
      { q: "Loyer / revenu ?", options: ["<25%", "25-33%", "33-40%", ">40% 😰"] },
      { q: "Tu as un PEA ?", options: ["Oui", "Non", "Je sais pas ce que c'est 📚"] },
      { q: "Tu mets de côté pour quoi ?", options: ["Sécurité", "Voyage", "Achat appart 🏠", "Aucun projet"] },
      { q: "Combien sur ton livret A ?", options: ["<2000€", "2000-10K€", "Plafond plein 💎", "Jamais ouvert"] },
      { q: "Salaire idéal à 30 ans ?", options: ["35K", "45K", "60K", "80K+ 💸"] },
      { q: "Le mois où tu te sens pas riche ?", options: ["Janvier", "Été", "Décembre 🎄", "Tous les mois"] },
    ],
    faq: [
      {
        q: "Combien épargner par mois quand on est jeune ?",
        a: "20% des revenus en théorie, 10% en pratique. Sondage moomz à tes pairs te dit la vraie moyenne de ton groupe — toujours plus parlant qu'un article.",
      },
      {
        q: "On investit en crypto ?",
        a: "Max 5-10% du patrimoine investi pour limiter le risque. Sondage à tes amis pour voir leur exposition réelle.",
      },
      {
        q: "PEA ou assurance vie ?",
        a: "PEA pour bourse long terme (fiscalité). AV pour diversifier. Sondage 'tu as quoi ?' à tes potes pour confirmer.",
      },
      {
        q: "Comment ne pas avoir honte de parler argent ?",
        a: "Sondage moomz anonyme casse le tabou. Tu obtiens des chiffres concrets sans confrontation. Méthode validée par les communautés finance jeunes (la team r/vosfinances par ex).",
      },
    ],
    related: ["travail-collegues", "fac-universite", "entretien-embauche"],
    updatedAt: today,
  },
  {
    slug: "philosophie-question",
    locale: "fr",
    category: "idees",
    emoji: "🤔",
    title: "Idées de sondage philosophie — 50 questions existentielles",
    h1: "Sondages philo : 50 idées qui font réfléchir ta team",
    description:
      "50 idées de sondage philosophie existentielle : sens de la vie, déterminisme, bonheur. Crée ton sondage moomz et débat avec tes potes.",
    intro:
      "Les questions existentielles sont fun en sondage parce qu'elles forcent une réponse rapide là où la philosophie traditionnelle prend 4 heures. 'Sens de la vie : famille, carrière, expérience, on s'en fout ?'. moomz transforme le café-philo en jeu collectif. Anonyme = les introvertis votent sincèrement. Parfait pour les apéros philos, les groupes étudiants, les ados qui s'interrogent.",
    sections: [
      {
        h: "Sens de la vie : 4 options et puis on déconne",
        body: "Le sondage 'sens de la vie' avec 4 options (transmettre, créer, vivre, pas de sens) est paradoxalement plus profond qu'une dissertation. Parce que tu DOIS choisir. Et tes amis aussi. Le résultat révèle votre culture commune. Refais le sondage à 1 an d'écart pour voir comment vos visions évoluent.",
      },
      {
        h: "Libre arbitre vs déterminisme : le débat éternel",
        body: "Sondage 'tu crois au libre arbitre ?' avec 4 options. La majorité des humains dit oui par défaut. Mais 30% des philosophes modernes disent non. Tu obtiens la culture de ton groupe. Bonus : sondage 'destin écrit ou pas' tranche le débat religieux/spirituel sans débat 4 heures.",
      },
      {
        h: "Bonheur : sa définition, sa quête",
        body: "Le bonheur est subjectif. Sondage 'le bonheur c'est' avec 4 options (relation, accomplissement, présence, absence de souffrance). Tu vois la diversité dans ton groupe. Souvent surprenant. Bonus : sondage 'tu te sens heureux/se actuellement ?' anonyme révèle des choses que personne n'osait dire.",
      },
      {
        h: "moomz pour le café-philo",
        body: "Crée un sondage philo par semaine, partage avec ton groupe d'amis cultivés. Anonyme = liberté d'opinion. Tu crées un rituel de réflexion légère. Plus utile qu'un podcast philo écouté seul — tu confrontes des avis dans ton cercle. Bonus : screenshot les résultats pour les ressortir dans 10 ans.",
      },
    ],
    polls: [
      { q: "Sens de la vie ?", options: ["Transmettre", "Créer 🎨", "Vivre", "Pas de sens"] },
      { q: "Libre arbitre ou destin ?", options: ["Libre arbitre 🌱", "Destin écrit", "Mix", "Aucune idée"] },
      { q: "Le bonheur c'est ?", options: ["Relations", "Accomplissement", "Présence 🧘", "Absence souffrance"] },
      { q: "On meurt et après ?", options: ["Rien", "Une autre vie", "On se souvient", "Je sais pas 🤷"] },
      { q: "L'humanité va vers ?", options: ["Mieux", "Pire 😰", "Stagnation", "Effondrement"] },
      { q: "Tu changerais quoi à ta vie ?", options: ["Carrière", "Relations", "Lieu 🌍", "Rien"] },
      { q: "Réincarné en ?", options: ["Animal 🐺", "Plante", "Autre humain", "Rien"] },
      { q: "Tu suis ta tête ou ton cœur ?", options: ["Tête", "Cœur 💗", "Équilibre", "Au pif"] },
      { q: "Si tu avais 1 an à vivre ?", options: ["Voyage", "Famille", "Rien changer", "Tout brûler 🔥"] },
      { q: "Le pire défaut humain ?", options: ["Égoïsme", "Lâcheté", "Hypocrisie 🎭", "Ignorance"] },
    ],
    faq: [
      {
        q: "Comment animer un café-philo ?",
        a: "Sondage moomz par question (4 options pré-écrites). Le débat démarre du résultat. Plus structuré qu'une discussion libre.",
      },
      {
        q: "Et si les gens prennent pas au sérieux ?",
        a: "Le sondage à 4 options force l'engagement minimum. Même les sceptiques votent en 5 secondes. Le débat suit naturellement.",
      },
      {
        q: "Combien de personnes minimum ?",
        a: "Dès 5 c'est intéressant. À 20+ tu obtiens une vraie distribution.",
      },
      {
        q: "On garde l'anonymat ?",
        a: "Oui surtout sur les questions sensibles (foi, mort, sexualité). moomz est anonyme par défaut, ça libère la parole.",
      },
    ],
    related: ["debat", "ami-amie", "fac-universite"],
    updatedAt: today,
  },
  {
    slug: "sante-mentale-anxiety",
    locale: "fr",
    category: "idees",
    emoji: "🧠",
    title: "Idées de sondage santé mentale — 50 questions bien-être",
    h1: "Sondages santé mentale : 50 idées qui ouvrent la conversation",
    description:
      "50 idées de sondage santé mentale anxiété burnout : thérapie, sommeil, routine. Crée ton sondage moomz et casse les tabous.",
    intro:
      "La santé mentale en 2026 c'est moins tabou mais toujours difficile à aborder. Sondage moomz anonyme = tes amis répondent vrai sur leur niveau d'anxiété, leur thérapie, leurs galères. Tu te situes, tu vois que tu n'es pas seul. Plus utile qu'un compte Insta motivation. Et plus efficace que 'comment tu vas ?' qui obtient toujours 'ça va'.",
    sections: [
      {
        h: "Thérapie : combien d'entre nous en font",
        body: "Le sondage 'tu fais une thérapie ?' avec 4 options (oui depuis longtemps, oui récente, jamais, j'ai arrêté) révèle souvent que 40-60% des 20-30 ans en font. Tu casses l'idée que c'est rare. Et tu donnes du courage à ceux qui hésitent. Anonyme = vraie data, pas la version diplomatique.",
      },
      {
        h: "Anxiété : sondage hebdo niveau",
        body: "L'anxiété varie. Sondage 'niveau anxiety cette semaine /10' avec 4 fourchettes. Refais chaque semaine entre amis. Tu vois les pics collectifs (rentrée, deadlines, hiver). Tu ne te sens plus seul dans ton creux. Bonus : sondage 'qu'est-ce qui t'aide' génère des techniques échangées entre amis.",
      },
      {
        h: "Sommeil et écrans : la racine de tout",
        body: "Le sommeil est le pilier de la santé mentale. Sondage 'heures de sommeil cette semaine' avec 4 fourchettes. 'Temps d'écran avant dodo' aussi. Tu vois où tu en es. Si toute ta team dort 5h, vous avez un problème collectif à résoudre ensemble. Le sondage révèle ce qui était caché.",
      },
      {
        h: "moomz pour la santé mentale collective",
        body: "Crée un mini-groupe de confiance avec 3-5 amis. Sondage hebdo niveau anxiety, sommeil, motivation. Anonyme = vraies données. Tu transformes le check-in obligatoire en jeu de soutien collectif. Quand un ami est dans le creux, tu le vois sans qu'il ait à demander. Tu peux agir tôt.",
      },
    ],
    polls: [
      { q: "Thérapie ?", options: ["Oui en cours 💬", "Oui passée", "Jamais", "J'aimerais commencer"] },
      { q: "Niveau anxiety cette semaine ?", options: ["1-3 chill 🌱", "4-6 normal", "7-8 chargé", "9-10 burn out 🔥"] },
      { q: "Heures de sommeil ?", options: ["<6h", "6-7h", "7-8h 😴", "8+h"] },
      { q: "Écran avant dodo ?", options: ["0 min 🌙", "30 min", "1-2h", "Jusqu'à m'endormir"] },
      { q: "Sport pour le mental ?", options: ["3+ fois/sem", "1-2 fois", "Jamais", "Marche only"] },
      { q: "Méditation ?", options: ["Quotidien", "Parfois", "Jamais 🧘", "Je m'endors"] },
      { q: "Antidépresseurs : tabou ?", options: ["Tabou", "Acceptable", "Normal en 2026 💊"] },
      { q: "Réseaux sociaux : pause ?", options: ["Quotidien airplane", "1 jour/sem", "Pause pendant cure 🌿", "Jamais"] },
      { q: "Tu parles de ta santé mentale avec ?", options: ["Famille", "Amis", "Thérapeute 💬", "Personne"] },
      { q: "Booster du moment ?", options: ["Sport", "Animal 🐱", "Voyage", "Sommeil bonne nuit"] },
    ],
    faq: [
      {
        q: "Comment aborder la santé mentale avec ses amis ?",
        a: "Sondage moomz anonyme. Tu obtiens des données réelles sur où ta team se situe. Plus efficace que 'comment tu vas' à laquelle on répond toujours 'ça va'.",
      },
      {
        q: "Thérapie : utile ?",
        a: "70%+ des gens qui en font la recommandent. Sondage à tes amis pour confirmer. Le coût est compensable via Mon Soutien Psy (12 séances remboursées en France).",
      },
      {
        q: "Et l'anxiété, c'est normal ?",
        a: "Universel. 30% des français déclarent de l'anxiety régulière. Sondage à ta team pour normaliser et trouver des techniques qui marchent.",
      },
      {
        q: "Comment savoir si on a besoin d'aide ?",
        a: "Si symptomes (insomnie, retrait, irritabilité) durent plus de 2 semaines. Sondage à des amis qui sont déjà passés par une thérapie pour comparer.",
      },
    ],
    related: ["ami-amie", "fitness-sport", "celibataire-vie"],
    updatedAt: today,
  },
  {
    slug: "amis-trahis",
    locale: "fr",
    category: "idees",
    emoji: "🥀",
    title: "Idées de sondage amis trahis — 50 questions sur la trahison amitié",
    h1: "Sondages amis trahis : 50 idées pour gérer le drama",
    description:
      "50 idées de sondage trahison amitié : on pardonne, on coupe, on confronte. Crée ton sondage moomz et décide avec ta team.",
    intro:
      "Une trahison entre amis c'est plus dur qu'une rupture amoureuse pour beaucoup. Sondage moomz à ta team élargie : 'je pardonne ou je coupe ?'. Anonyme = vrais avis sans la peur d'être pris dans le drama. Tu obtiens un signal externe utile au lieu de tourner en boucle avec 2 amis biaisés. Particulièrement utile entre 18-25 ans où les amitiés évoluent vite.",
    sections: [
      {
        h: "On pardonne ou on coupe : la grande question",
        body: "Sondage moomz à 10 amis communs qui connaissent les deux : 'je pardonne ou je coupe ?'. Anonyme = vrai avis. Souvent la majorité te donne un signal contre-intuitif (genre 'on pardonne mais on garde la distance'). Tu obtiens la nuance. C'est l'équivalent d'une médiation gratuite.",
      },
      {
        h: "Confronter ou ghoster : le style de rupture",
        body: "Confronter face à face / message / ghost direct. Sondage 'tu préfères quel style' avec 4 options. Tu vois la culture de ton groupe. Le ghost est plus pratiqué chez les jeunes (35% selon les études) mais laisse des plaies non cicatrisées. La confrontation est plus mature mais plus dure.",
      },
      {
        h: "Le drama collectif : qui prend parti",
        body: "Quand 2 amis cassent, le groupe doit choisir. Sondage anonyme 'tu prends parti ou tu restes neutre ?'. Tu vois la distribution. Souvent 60% restent neutres officiellement mais ont une préférence — le sondage anonyme la révèle. Tu sais qui sont tes vrais alliés.",
      },
      {
        h: "moomz pour le post-trahison",
        body: "Crée un mini-groupe 'team conseil' avec 5 amis de confiance. Sondage par décision : on revoit, on confronte, on bloque, on parle aux amis communs. Tu structures les décisions émotionnelles avec un peu de logique externe. Plus efficace qu'une session 4h en ruminant à 2.",
      },
    ],
    polls: [
      { q: "Trahison amitié : on pardonne ?", options: ["Jamais ❌", "Une fois ok", "Toujours 💕", "Selon la trahison"] },
      { q: "On confronte ou on ghoste ?", options: ["Confronter face", "Message long", "Ghost direct 👻", "Médiateur"] },
      { q: "Les amis communs : ils prennent parti ?", options: ["Normal", "Pas leur place 🌿", "Selon affinité"] },
      { q: "Tu reverrais ton ex meilleure amie ?", options: ["Jamais", "Si elle s'excuse", "Selon contexte", "Oui d'office 💕"] },
      { q: "Une trahison te bouleverse combien de temps ?", options: ["1 semaine", "1 mois", "6 mois 💔", "Toujours"] },
      { q: "On en parle sur réseaux ?", options: ["Jamais 🤐", "Subtweet", "Direct", "Story drama"] },
      { q: "Type de trahison qui pardonne pas ?", options: ["Avec le mec", "Mensonge", "Vol", "Tout pardonné 🌷"] },
      { q: "Tu coupes ou tu adoucis ?", options: ["Coupe net ✂️", "Distance progressive", "Continue comme avant"] },
      { q: "Tu informes les amis communs ?", options: ["Tous", "Quelques-uns", "Personne 🤫", "Ils savent déjà"] },
      { q: "Tu retournes vers une ex-amie 1 an après ?", options: ["Oui souvent 🌅", "Rarement", "Jamais"] },
    ],
    faq: [
      {
        q: "Comment savoir si on doit pardonner ?",
        a: "Sondage anonyme à 10 amis communs. La majorité te donne un signal externe. Pas une décision, mais un éclairage sans biais affectif.",
      },
      {
        q: "Confronter ou ghoster ?",
        a: "La confrontation est plus mature mais plus dure. Le ghost laisse des séquelles des deux côtés. Sondage à des amis qui ont fait les deux.",
      },
      {
        q: "Combien de temps pour s'en remettre ?",
        a: "Une trahison amitié prend souvent 3-6 mois à digérer. Sondage à des amis passés par là pour la moyenne réelle de ton entourage.",
      },
      {
        q: "On peut redevenir ami avec une ex-amie ?",
        a: "Oui dans 30% des cas selon les études relationnelles. Sondage à ta team pour voir si la culture de ton groupe le permet.",
      },
    ],
    related: ["meilleur-ami", "ami-amie", "drama"],
    updatedAt: today,
  },
  {
    slug: "brevet-bac",
    locale: "fr",
    category: "idees",
    emoji: "📚",
    title: "Idées de sondage brevet et bac — 50 questions révisions",
    h1: "Sondages brevet/bac : 50 idées pour la team révisions",
    description:
      "50 idées de sondage brevet bac révisions : méthode, matières, mention. Crée ton sondage moomz et compare avec tes potes.",
    intro:
      "Le brevet et le bac c'est 2 ans d'angoisse pour les ados français. Sondage moomz à ta classe : 'tu révises combien d'heures par jour ?', 'quelle méthode tu utilises ?', 'la mention TB est faisable ?'. Anonyme = vraie data, pas la fanfaronnade. Tu te situes, tu détresse, tu copies les bonnes méthodes. Plus utile qu'un YouTube révision générique.",
    sections: [
      {
        h: "Méthode de révision : fiches, mind map, vidéo",
        body: "La méthode optimale varie selon la matière et le profil. Sondage 'meilleure méthode pour le bac philo' avec 4 options. Tu vois ce qui marche dans ta classe. Bonus : sondage 'tu révises seul ou en groupe ?'. Les sondages révisions de classe créent des binômes de révision naturels.",
      },
      {
        h: "Mention : objectif réaliste",
        body: "Mention TB ou bien sans tuer ta santé mentale ? Sondage 'objectif mention' avec 4 options (passer, bien, TB, on s'en fout). Anonyme = vraie ambition. Bonus : sondage 'tu vises Parcoursup quelle filière ?' éclaire les enjeux. Les notes nécessaires varient selon les écoles.",
      },
      {
        h: "Stress : on en parle vraiment",
        body: "Le stress du bac est universel mais tabou. Sondage 'niveau stress sur 10 ?' avec 4 fourchettes. Tu vois que tu n'es pas seul. Sondage 'tu fais quoi pour décompresser ?' génère des techniques échangées. Particulièrement utile en avril-mai juste avant les épreuves.",
      },
      {
        h: "moomz pour la classe terminale",
        body: "Crée un groupe 'team bac' avec 10-15 camarades. Sondage hebdo : matière la plus dure, prof qui aide le plus, méthode de révision testée. Tu transformes la solitude des révisions en collectif soutenant. Et le jour J, sondage 'sujet attendu' juste avant l'épreuve — moitié rigolo, moitié utile.",
      },
    ],
    polls: [
      { q: "Heures de révisions par jour ?", options: ["<1h", "1-3h", "3-5h 📚", "5+h"] },
      { q: "Méthode préférée ?", options: ["Fiches manuscrites", "Mind map", "Vidéos YT 🎬", "Annales"] },
      { q: "Objectif mention ?", options: ["Passer 🎓", "Bien", "Très bien", "Excellence"] },
      { q: "Matière la plus dure ?", options: ["Maths", "Philo", "Histoire", "Langues 🗣️"] },
      { q: "Tu révises seul ou groupe ?", options: ["Seul 🌿", "Groupe 2-3", "Cours particulier"] },
      { q: "Niveau stress sur 10 ?", options: ["1-3", "4-6", "7-8 😰", "9-10"] },
      { q: "Filière Parcoursup ?", options: ["Université", "Prépa", "École commerce 💼", "Sortie scolaire"] },
      { q: "Anti-stress du moment ?", options: ["Sport", "Netflix 📺", "Musique", "Médiation"] },
      { q: "Tu copies en examen ?", options: ["Jamais", "Une fois ok", "Souvent 😅", "Stratégie"] },
      { q: "Après le bac ?", options: ["Soirée 🎉", "Voyage", "Boulot d'été", "Vacances familiales"] },
    ],
    faq: [
      {
        q: "Combien d'heures de révisions par jour ?",
        a: "3-4h actives suffisent si bien organisées. Sondage à ta classe te dit la moyenne réelle. Souvent rassurant.",
      },
      {
        q: "Quelle méthode pour le bac ?",
        a: "Mix fiches + annales. Les vidéos YT en complément. Sondage 'meilleure chaîne YT révisions' pour ta matière.",
      },
      {
        q: "Mention TB faisable ?",
        a: "Pour 12-15% des candidats. Sondage 'tu vises quelle mention' donne la distribution réelle de ta classe.",
      },
      {
        q: "Anti-stress qui marche ?",
        a: "Sport, sommeil, parler. Sondage à tes camarades sur leurs techniques. Tu adoptes celles qui résonnent.",
      },
    ],
    related: ["lycee", "fac-universite", "rentree-universite"],
    updatedAt: today,
  },
  {
    slug: "vacances-ete-2026",
    locale: "fr",
    category: "idees",
    emoji: "☀️",
    title: "Idées de sondage vacances été 2026 — 50 questions pour planifier",
    h1: "Sondages vacances été 2026 : 50 idées qui décident la destination",
    description:
      "50 idées de sondage vacances été 2026 : destination, budget, format. Crée ton sondage moomz et planifie avec ton crew.",
    intro:
      "Été 2026 c'est dans 2 mois. Tu n'as pas encore réservé. Tes potes non plus. Le sondage moomz remplace les 6 mois de débat WhatsApp 'où on va ?' par 1 jour de décision. 4-6 destinations, budget, format, dates. Anonyme = vrais avis sans le malaise du 'je peux pas me permettre'. Tu débloques la réservation en une semaine.",
    sections: [
      {
        h: "Destination : Europe, hors Europe, France",
        body: "Sondage 'destination été 2026' avec 4 options réalistes (Europe Sud, hors Europe, France, étranger long). Une fois la zone fixée, sondage de précision. Croatie, Portugal, Grèce pour Europe Sud. Bali, Mexique, Japon pour exotique. moomz t'aide à structurer la prise de décision en 2 étapes au lieu de débattre 4h sur tout.",
      },
      {
        h: "Format : Airbnb, hotel club, road trip, croisière",
        body: "Le format dépend du crew. Couples = Airbnb romantique. Famille = hotel club. Amis 25-30 = road trip ou village vacances. Sondage 'format de notre trip' avec 4 options tranche le débat. Bonus : sondage 'budget par personne' avec 4 fourchettes pour caler les choix sur la réalité financière.",
      },
      {
        h: "Activités sur place : farniente vs aventure",
        body: "Tu pars 10 jours. Tu fais quoi ? Sondage 'priorité du trip' avec 4 options (plage farniente, culture/visites, sport/aventure, food). Tu vois ce que la majorité du crew veut. Le résultat aide à choisir entre Bali (plage chill) et Vietnam (culture + aventure). Évite d'arriver à destination et que personne ne soit content.",
      },
      {
        h: "moomz pour ton été 2026",
        body: "Lance 6 sondages aujourd'hui : destination, budget, format, dates, hébergement, vols. Pin les liens dans le WhatsApp groupe. Deadline 1 semaine. Tu réserves le weekend suivant. Tu économises 200€ sur les vols en réservant tôt. moomz transforme la procrastination en exécution. L'été commence en mai.",
      },
    ],
    polls: [
      { q: "Destination été 2026 ?", options: ["Europe Sud 🌊", "Hors Europe", "France", "Étranger long ✈️"] },
      { q: "Budget hors vol par personne ?", options: ["<500€", "500-1000€", "1000-2000€", ">2000€ 💸"] },
      { q: "Format ?", options: ["Airbnb", "Hotel club ☀️", "Road trip", "Croisière"] },
      { q: "Dates ?", options: ["Juillet", "Août 🏖️", "Septembre", "Variable"] },
      { q: "Durée ?", options: ["1 semaine", "10 jours", "2 semaines 🌴", "3 semaines+"] },
      { q: "Avec qui ?", options: ["Famille", "Couple 💕", "Amis", "Solo"] },
      { q: "Activité prio ?", options: ["Plage farniente", "Culture", "Sport 🏄", "Food"] },
      { q: "On book quand ?", options: ["Cette semaine 🎯", "Ce mois", "1 mois avant", "Last minute"] },
      { q: "Climat préféré ?", options: ["Chaud sec", "Chaud humide", "Tempéré ⛅", "Frais"] },
      { q: "Voyage rêvé été 2026 ?", options: ["Bali 🌺", "Grèce", "Mexique", "Japon"] },
    ],
    faq: [
      {
        q: "Quand réserver pour l'été 2026 ?",
        a: "Idéalement mars-mai pour les meilleurs prix. Sondage à tes amis pour fixer la date en avance, ensuite tu réserves vite.",
      },
      {
        q: "Budget vacances été ?",
        a: "1000-2000€ par personne pour 10 jours hors Europe. 500-1000€ en Europe. Sondage à ton groupe te dit où vous vous situez.",
      },
      {
        q: "Destination tendance 2026 ?",
        a: "Le Japon, le Vietnam et le Portugal explosent. moomz te dit ce que ton cercle vise spécifiquement.",
      },
      {
        q: "Comment décider à plusieurs ?",
        a: "Sondage moomz par étape (zone, format, budget, dates). Tu débloques 6 mois de débat WhatsApp en 1 semaine.",
      },
    ],
    related: ["voyage", "voyage-japon", "ami-amie"],
    updatedAt: today,
  },
  {
    slug: "pari-sport-foot",
    locale: "fr",
    category: "idees",
    emoji: "🎯",
    title: "Idées de sondage pari sportif foot — 50 questions pour parier malin",
    h1: "Sondages pari sportif : 50 idées pour la team paris foot",
    description:
      "50 idées de sondage pari sportif foot : pronos PSG, OM, Champions League, Coupe du Monde. Crée ton sondage moomz et joue collectif.",
    intro:
      "Le pari sportif foot c'est 6 milliards d'euros joués en France chaque année par 3 millions de parieurs. Le sondage entre potes 'on parie sur quoi ce weekend' transforme le solo angoissé en jeu collectif. moomz est anonyme — chacun donne son vrai prono sans la pression du groupe. Tu obtiens un consensus, tu suis ou tu fais l'opposé. Plus utile qu'un compte Insta tipster gratuit qui veut te vendre un VIP.",
    sections: [
      {
        h: "Le prono du weekend : qui gagne, qui perd",
        body: "Vendredi soir, 4 matchs PSG / OM / OL / Monaco à venir. Sondage moomz à ton groupe parieurs : 'PSG bat Reims combien-zéro ?'. 4 options de scores. Le résultat reflète la sagesse du groupe. Tu peux suivre ou faire le contraire (parfois rentable). Les comptes pari foot fr qui font ça hebdo génèrent des communautés engagées.",
      },
      {
        h: "Combiné ou simple : la stratégie",
        body: "Combiné = grosse cote, simple = sécurité. Sondage 'tu joues combien sur ce combiné ?' avec 4 fourchettes. Tu vois la culture de ton groupe. Sondage 'on parie sur 3 favoris ou 1 outsider ?' tranche la stratégie. La majorité a souvent la bonne intuition collective sur les marchés actifs.",
      },
      {
        h: "Budget pari : combien on met vraiment",
        body: "Le pari devient problématique au-delà de 5% du revenu mensuel. Sondage anonyme 'tu paris combien par mois ?' avec 4 fourchettes (0-50€, 50-200€, 200-500€, 500€+). Tu te situes. Si la majorité de ton groupe met 50€ et toi 500€, c'est une info utile. moomz casse le tabou par la data, sans jugement direct.",
      },
      {
        h: "moomz pour la team parieurs",
        body: "Crée un groupe WhatsApp 'team pronos' avec 5-10 amis parieurs. Sondage chaque jeudi pour le weekend. Anonyme = vrais pronos. Tu compares le résultat moomz au tipster payant que tu suis — souvent ta team est aussi bonne. Garde l'historique des pronos pour mesurer qui a la meilleure boule de cristal sur 6 mois.",
      },
    ],
    polls: [
      { q: "PSG vs Monaco : score ?", options: ["1-0", "2-1", "2-0 🔵", "Match nul"] },
      { q: "Buteur PSG match suivant ?", options: ["Dembélé", "Doué 🇫🇷", "Barcola", "Un autre"] },
      { q: "Tu joues combien sur ce match ?", options: ["5€", "20€", "50€", "100€+ 💸"] },
      { q: "Combiné ou simple ?", options: ["Combiné 5 matchs 🎯", "Combiné 3", "Simple", "Both"] },
      { q: "App pari préférée ?", options: ["Unibet", "Winamax 🏆", "Betclic", "Parions Sport"] },
      { q: "Budget pari par mois ?", options: ["<50€", "50-200€", "200-500€", ">500€"] },
      { q: "Tu gagnes plus ou tu perds plus ?", options: ["Gagne 🎉", "Perds 😅", "À l'équilibre", "Pas calculé"] },
      { q: "Pari le plus dingue ?", options: ["Cote 50+", "Last minute", "Outsider win", "All-in sur PSG"] },
      { q: "Champions League winner ?", options: ["PSG", "Real Madrid", "Bayern", "Man City"] },
      { q: "Tu parles pari avec qui ?", options: ["Potes 🍻", "Famille", "Personne", "Forum"] },
    ],
    faq: [
      {
        q: "Comment parier intelligent au foot ?",
        a: "Sondage à tes amis parieurs avant de mettre. La sagesse du groupe est souvent aussi bonne que les tipsters payants. moomz est gratuit.",
      },
      {
        q: "Budget responsable pour le pari ?",
        a: "Max 5% du revenu mensuel. Sondage 'tu paris combien' te situe. Au-delà de 200€/mois sans gagner, attention.",
      },
      {
        q: "Combiné ou simple ?",
        a: "Simple pour gagner régulier, combiné pour rêver gros. Sondage à ta team confirme leur stratégie qui marche.",
      },
      {
        q: "Tipster payant utile ?",
        a: "Souvent non. Sondage à tes potes hebdo donne souvent un signal aussi bon. Économie 50-200€/mois sur les VIP.",
      },
    ],
    related: ["foot-psg", "fitness-sport", "argent-budget-jeune"],
    updatedAt: today,
  },
];
