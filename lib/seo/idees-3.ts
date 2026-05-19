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
];
