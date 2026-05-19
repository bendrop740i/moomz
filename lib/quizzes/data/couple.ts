import type { Quiz } from "../types";

export const coupleQuizzes: Quiz[] = [
  {
    slug: "quiz-langages-amour-gary-chapman",
    title: "Les 5 langages de l'amour de Gary Chapman : tu connais ?",
    description: "Découvre la théorie de Gary Chapman sur les 5 langages de l'amour et teste tes connaissances sur la psychologie du couple moderne.",
    topic: "couple",
    emoji: "💖",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année Gary Chapman publie-t-il 'Les 5 langages de l'amour' ?",
        options: ["1985", "1992", "2001", "1978"],
        correct: 1,
        explainer: "Gary Chapman, conseiller conjugal baptiste américain, publie 'The Five Love Languages' en 1992. Le livre s'est vendu à plus de 20 millions d'exemplaires et reste un best-seller du développement personnel sur le couple."
      },
      {
        q: "Quel langage de l'amour n'existe PAS dans la théorie de Chapman ?",
        options: ["Les paroles valorisantes", "Les moments de qualité", "La fidélité absolue", "Les services rendus"],
        correct: 2,
        explainer: "Les 5 langages sont : paroles valorisantes, moments de qualité, cadeaux, services rendus et toucher physique. La fidélité n'est pas un langage mais une attente relationnelle distincte selon Chapman."
      },
      {
        q: "Selon Chapman, que se passe-t-il quand deux partenaires ont des langages différents ?",
        options: ["Ils rompent à 80%", "Ils se sentent mal aimés malgré l'amour réel de l'autre", "Ils deviennent fusionnels", "Ils communiquent mieux"],
        correct: 1,
        explainer: "Le coeur de la théorie : on aime souvent l'autre dans NOTRE langage, pas le sien. Résultat, le partenaire se sent négligé alors qu'on l'aime sincèrement. C'est un décalage de traduction émotionnelle."
      },
      {
        q: "Quel est le langage le plus mal interprété culturellement ?",
        options: ["Les cadeaux (perçus comme matérialistes)", "Le toucher physique", "Les services rendus", "Les paroles valorisantes"],
        correct: 0,
        explainer: "Chapman insiste : le langage 'cadeaux' n'a rien à voir avec le prix. C'est le symbole tangible d'avoir pensé à l'autre. Mal compris, il est confondu avec du matérialisme alors qu'il s'agit d'attention pure."
      },
      {
        q: "Comment Chapman conseille-t-il de découvrir son langage principal ?",
        options: ["Faire un test ADN émotionnel", "Observer ce qui te blesse le plus", "Demander à tes parents", "Compter tes ex"],
        correct: 1,
        explainer: "Selon Chapman, ce qui te blesse le plus dans une relation révèle ton langage principal. Si l'absence de compliments te dévaste, ton langage est 'paroles valorisantes'. La douleur signale le manque."
      },
      {
        q: "Le 'toucher physique' comme langage inclut surtout :",
        options: ["Uniquement la sexualité", "Tous les contacts non-sexuels du quotidien", "Les massages payants", "Les selfies en couple"],
        correct: 1,
        explainer: "Chapman précise que le toucher physique englobe surtout les micro-contacts : tenir la main, une main sur l'épaule, un câlin spontané. La sexualité n'en est qu'une dimension parmi d'autres."
      },
      {
        q: "Quel langage est statistiquement le plus rare chez les hommes occidentaux ?",
        options: ["Les services rendus", "Les paroles valorisantes", "Les cadeaux", "Le toucher physique"],
        correct: 2,
        explainer: "Les études sur le LLI (Love Languages Inventory) montrent que 'cadeaux' est le langage principal le moins fréquent, surtout chez les hommes occidentaux où la socialisation valorise les actes plutôt que les objets symboliques."
      },
      {
        q: "Chapman a aussi écrit un livre sur les langages de l'amour pour qui ?",
        options: ["Uniquement les adultes", "Les enfants, ados et célibataires", "Les chats et chiens", "Les robots"],
        correct: 1,
        explainer: "Chapman a décliné sa théorie pour les enfants, les ados, les célibataires et même le milieu professionnel ('Les langages de l'appréciation au travail'). La franchise dépasse largement le couple romantique."
      },
      {
        q: "Quelle critique scientifique majeure est faite à la théorie de Chapman ?",
        options: ["Elle est trop compliquée", "Les études empiriques rigoureuses sur le LLI sont limitées", "Elle ne parle pas d'amour", "Elle est trop récente"],
        correct: 1,
        explainer: "Les chercheurs en psychologie du couple (notamment Egbert & Polk, 2006) notent que la théorie est intuitive et utile cliniquement, mais que peu d'études quantitatives rigoureuses ont validé l'existence de 5 catégories distinctes."
      },
      {
        q: "Quel langage est associé au temps non-distrait selon Chapman ?",
        options: ["Les cadeaux", "Les moments de qualité", "Les services rendus", "Le toucher"],
        correct: 1,
        explainer: "Les 'moments de qualité' signifient attention pleine et entière : pas de téléphone, écoute active, regard. Chapman insiste : la quantité ne compte pas, c'est la présence émotionnelle qui fait la différence."
      }
    ]
  },
  {
    slug: "quiz-theorie-attachement-bowlby",
    title: "Théorie de l'attachement : sécurisé, anxieux, évitant ou désorganisé ?",
    description: "Plonge dans la psychologie de l'attachement de Bowlby et Ainsworth pour comprendre comment ton enfance influence ta vie amoureuse adulte.",
    topic: "couple",
    emoji: "🫶",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui est le père fondateur de la théorie de l'attachement ?",
        options: ["Sigmund Freud", "John Bowlby", "Carl Jung", "B.F. Skinner"],
        correct: 1,
        explainer: "John Bowlby, psychiatre britannique, développe la théorie de l'attachement dans les années 1950-60. Il observe que le lien parent-enfant n'est pas qu'alimentaire mais un besoin biologique distinct, vital pour la survie."
      },
      {
        q: "Combien de styles d'attachement adultes ont été identifiés ?",
        options: ["2", "3", "4", "6"],
        correct: 2,
        explainer: "Quatre styles principaux : sécurisé (~55% de la population), anxieux-préoccupé (~20%), évitant-désengagé (~15%), et désorganisé/craintif (~10%). Ces pourcentages varient selon les cultures et études."
      },
      {
        q: "Mary Ainsworth a créé quel protocole expérimental célèbre ?",
        options: ["Le test de Rorschach", "La situation étrange", "Le miroir des émotions", "Le test de Stanford"],
        correct: 1,
        explainer: "Mary Ainsworth conçoit dans les années 1970 'la situation étrange' : on observe comment un enfant réagit aux départs et retours de sa mère. Ce protocole a permis de classer empiriquement les styles d'attachement infantiles."
      },
      {
        q: "Une personne au style anxieux a tendance à :",
        options: ["Fuir l'intimité", "Avoir peur de l'abandon et hyperactiver son système d'attachement", "Ignorer son partenaire", "Etre froide en toutes circonstances"],
        correct: 1,
        explainer: "Le style anxieux ('preoccupied') hyperactive son système d'attachement : besoin constant de réassurance, peur de l'abandon, sensibilité aux signaux de rejet. Souvent associé à un parent imprévisible dans l'enfance."
      },
      {
        q: "Le style évitant tend à :",
        options: ["Demander beaucoup d'attention", "Désactiver son besoin d'intimité pour rester autonome", "Pleurer beaucoup", "Etre fusionnel"],
        correct: 1,
        explainer: "Le style évitant ('dismissive') a appris à se passer du caregiver et désactive son système d'attachement : il valorise l'indépendance, fuit l'intimité émotionnelle profonde. Souvent lié à des parents émotionnellement indisponibles."
      },
      {
        q: "Quel couple est statistiquement le plus instable selon la recherche ?",
        options: ["Sécurisé + Sécurisé", "Anxieux + Evitant", "Sécurisé + Anxieux", "Sécurisé + Evitant"],
        correct: 1,
        explainer: "Le couple anxieux-évitant est connu sous le nom de 'trap' chez Amir Levine. L'anxieux poursuit, l'évitant fuit, créant une dynamique de cycle infernal qui renforce les deux insécurités mutuellement."
      },
      {
        q: "Selon les recherches, le style d'attachement adulte :",
        options: ["Est figé à vie", "Peut évoluer via une relation sécurisante ou la thérapie ('earned secure')", "Change tous les 6 mois", "Dépend des saisons"],
        correct: 1,
        explainer: "Le concept d''earned secure attachment' montre qu'on peut devenir sécurisé via une relation correctrice (partenaire stable) ou un travail thérapeutique. Le cerveau garde une plasticité émotionnelle à l'âge adulte."
      },
      {
        q: "Le style désorganisé est souvent associé à :",
        options: ["Une enfance stable", "Des traumatismes ou un parent à la fois source de réconfort et de peur", "Une scolarisation tardive", "Une fratrie nombreuse"],
        correct: 1,
        explainer: "Le style désorganisé apparaît quand le parent est à la fois la source de sécurité ET de menace (abus, négligence sévère). L'enfant développe des stratégies contradictoires d'approche-évitement. Souvent lié à des traumatismes complexes."
      },
      {
        q: "Hazan et Shaver ont prouvé en 1987 que :",
        options: ["L'attachement enfantin n'a aucun impact", "Les styles d'attachement de l'enfance se retrouvent dans les relations amoureuses adultes", "Les couples vivent en moyenne 7 ans", "Le mariage rend heureux"],
        correct: 1,
        explainer: "Cindy Hazan et Phillip Shaver publient en 1987 une étude pionnière montrant que les styles décrits par Ainsworth chez les enfants se retrouvent quasi à l'identique dans les relations amoureuses adultes. Le pont théorique enfance-couple est né."
      },
      {
        q: "Quel pourcentage de la population a un attachement sécurisé selon la méta-analyse de van IJzendoorn ?",
        options: ["~25%", "~55%", "~80%", "~10%"],
        correct: 1,
        explainer: "Environ 55-60% des adultes occidentaux ont un attachement sécurisé selon les méta-analyses. Cette majorité explique que la plupart des relations fonctionnent, malgré une visibilité médiatique forte des styles insécures."
      }
    ]
  },
  {
    slug: "quiz-red-flags-dating-moderne",
    title: "Red flags en dating moderne : tu les repères ?",
    description: "Ghosting, breadcrumbing, love bombing : teste si tu sais identifier les vrais red flags des relations toxiques en 2026.",
    topic: "couple",
    emoji: "💔",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qu'est-ce que le 'love bombing' ?",
        options: ["Envoyer beaucoup d'emojis coeurs", "Submerger l'autre d'attention extrême au début pour créer une dépendance", "Faire l'amour souvent", "Offrir des cadeaux à Noël"],
        correct: 1,
        explainer: "Le love bombing est une tactique manipulatrice : compliments excessifs, déclarations rapides, cadeaux, présence intense. Souvent utilisé par des personnalités narcissiques pour créer une dépendance avant de basculer en dévalorisation."
      },
      {
        q: "Le 'breadcrumbing' consiste à :",
        options: ["Cuisiner ensemble", "Envoyer juste assez de messages pour entretenir l'intérêt sans s'engager", "Partager des recettes", "Manger au lit"],
        correct: 1,
        explainer: "Breadcrumbing = 'donner des miettes' : likes sporadiques, messages tous les 15 jours, jamais de plans concrets. La personne maintient l'autre dans un état d'attente sans intention réelle de relation."
      },
      {
        q: "Le 'ghosting' est :",
        options: ["Un jeu vidéo", "Disparaître sans explication d'une relation/conversation", "Regarder des films d'horreur", "Faire une farce d'Halloween"],
        correct: 1,
        explainer: "Le ghosting est la rupture par disparition totale, sans message d'explication. Etude de Freedman et al. (2018) : 25% des Américains ont déjà ghosté quelqu'un. Souvent traumatisant pour la personne ghostée par manque de clôture."
      },
      {
        q: "Quel comportement est un VRAI red flag selon la psychologie clinique ?",
        options: ["Aimer les chats", "Critiquer systématiquement tes amis et famille pour t'isoler", "Aimer un autre style de musique", "Manger des sushis"],
        correct: 1,
        explainer: "L'isolement progressif des proches est un marqueur classique de relation abusive. Le partenaire dénigre famille/amis pour devenir la seule source affective. Identifié dans le 'cycle de l'abus' de Lenore Walker (1979)."
      },
      {
        q: "Qu'est-ce que le 'gaslighting' ?",
        options: ["Allumer une bougie romantique", "Faire douter l'autre de sa propre perception/mémoire de la réalité", "Discuter au coin du feu", "Un parfum vintage"],
        correct: 1,
        explainer: "Le gaslighting (du film 'Gaslight', 1944) est une manipulation où l'agresseur nie des faits, déforme la réalité pour faire douter la victime de sa santé mentale. C'est une forme reconnue de violence psychologique."
      },
      {
        q: "Le 'zombieing' c'est quand un ex :",
        options: ["Cosplay Halloween", "Réapparaît après t'avoir ghosté, comme si rien ne s'était passé", "Devient ami sur Insta", "Te bloque"],
        correct: 1,
        explainer: "Zombieing = ghoster puis revenir des mois plus tard comme un mort-vivant, souvent avec un message anodin ('coucou ça va ?'). Souvent perçu comme une tentative de validation égotique sans réelle intention."
      },
      {
        q: "Selon les études, combien de couples se forment via les apps en 2020+ ?",
        options: ["~5%", "~15%", "~30-40%", "~80%"],
        correct: 2,
        explainer: "Une étude de Stanford (Rosenfeld, 2019) montre que les apps de rencontre sont devenues le 1er moyen de rencontre aux USA (~39%), devant les amis communs. Tendance similaire en France selon l'INED."
      },
      {
        q: "Quel est un GREEN flag relationnel selon Gottman ?",
        options: ["Etre toujours d'accord", "Savoir réparer après un conflit (bids for repair)", "Ne jamais se disputer", "Tout partager publiquement"],
        correct: 1,
        explainer: "John Gottman a identifié les 'bids for repair' (tentatives de réparation) comme prédicteur n°1 de la longévité conjugale. Pas l'absence de conflits, mais la capacité à les réparer (humour, excuse, contact) signe les couples solides."
      },
      {
        q: "Le 'cushioning' consiste à :",
        options: ["Acheter des coussins", "Flirter avec des backups au cas où la relation actuelle échoue", "Faire des câlins", "Dormir tard"],
        correct: 1,
        explainer: "Cushioning = entretenir des 'coussins' relationnels (flirts en réserve) pendant qu'on est en couple, pour amortir une éventuelle rupture. Forme d'infidélité émotionnelle facilitée par les DMs."
      },
      {
        q: "Selon Gottman, quel comportement prédit le plus le divorce ?",
        options: ["Les disputes fréquentes", "Le mépris (contempt) du partenaire", "Etre en désaccord politique", "Vivre loin"],
        correct: 1,
        explainer: "Le mépris (contempt) est le pire des '4 Cavaliers de l'Apocalypse' de Gottman, prédicteurs de divorce. Sarcasme méprisant, yeux au ciel, moquerie. Erode l'estime et signe la fin émotionnelle bien avant la séparation légale."
      }
    ]
  },
  {
    slug: "quiz-traditions-mariage-monde",
    title: "Traditions de mariage à travers le monde : origines insolites",
    description: "D'où viennent la robe blanche, l'alliance, les demoiselles d'honneur ? Décrouvre les vraies origines historiques des traditions de mariage.",
    topic: "couple",
    emoji: "💍",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a popularisé la robe de mariée BLANCHE ?",
        options: ["Marie-Antoinette", "La reine Victoria en 1840", "Marilyn Monroe", "Coco Chanel"],
        correct: 1,
        explainer: "Avant 1840, les robes de mariée étaient colorées (rouge, bleu, doré). La reine Victoria a porté une robe blanche pour son mariage avec Albert en 1840, lançant une mode qui s'est imposée comme symbole de pureté."
      },
      {
        q: "Pourquoi l'alliance se porte-t-elle à l'annulaire gauche ?",
        options: ["Pour des raisons de mode", "Les Romains croyaient qu'une veine reliait ce doigt directement au coeur", "Parce que c'est plus pratique", "Pour des raisons religieuses uniquement"],
        correct: 1,
        explainer: "Les Romains pensaient que la 'vena amoris' (veine de l'amour) reliait l'annulaire gauche directement au coeur. Anatomiquement faux, mais la tradition est restée pour symboliser l'union des coeurs."
      },
      {
        q: "Les demoiselles d'honneur portent des robes similaires à la mariée pour :",
        options: ["Faire joli sur les photos", "Tromper les mauvais esprits qui voudraient enlever la mariée", "Economiser", "Etre à la mode"],
        correct: 1,
        explainer: "Tradition romaine antique : on habillait les demoiselles comme la mariée pour confondre les esprits maléfiques (et selon les versions, les ex jaloux) qui voudraient lui jeter un sort. Aujourd'hui, c'est purement esthétique."
      },
      {
        q: "D'où vient la tradition de la lune de miel ?",
        options: ["De Babylone : un mois lunaire d'hydromel après le mariage", "De Las Vegas", "Du Japon médiéval", "De Hollywood"],
        correct: 0,
        explainer: "L''honeymoon' vient de Babylone : le père de la mariée offrait au couple de la bière d'hydromel (mead) pour un cycle lunaire complet. D'où 'lune de miel'. Censé favoriser la fertilité et la conception d'un garçon."
      },
      {
        q: "En Inde du Nord, le henné nuptial (mehndi) :",
        options: ["Cache des imperfections", "Inclut souvent le nom du marié caché dans les motifs", "Sert à fixer le maquillage", "Est interdit"],
        correct: 1,
        explainer: "Le mehndi est une tradition vieille de 5000 ans en Inde. Les artistes cachent le nom du marié dans les motifs complexes ; il doit le retrouver lors de la nuit de noces, jeu de séduction codifié."
      },
      {
        q: "La tradition japonaise du 'san-san-kudo' implique :",
        options: ["Trois danses", "Echanger 9 gorgées de saké dans 3 coupes", "Marcher trois fois autour d'un autel", "Plier 1000 grues"],
        correct: 1,
        explainer: "Le san-san-kudo (3-3-9) est l'échange rituel shintoïste : 3 gorgées dans 3 coupes différentes = 9 au total. Les trois coupes représentent le ciel, la terre et l'humanité. Scelle l'union devant les kamis."
      },
      {
        q: "L'expression 'convoler en justes noces' vient de :",
        options: ["L'arabe", "Du latin 'convolare' (voler ensemble)", "Du grec", "De l'ancien français médiéval uniquement"],
        correct: 1,
        explainer: "'Convoler' vient du latin 'convolare' = voler ensemble (con + volare). L'image poétique de deux êtres prenant leur envol côte à côte. Aujourd'hui presque exclusivement utilisé dans l'expression nuptiale."
      },
      {
        q: "Au Maroc, lors du mariage traditionnel, la mariée :",
        options: ["Porte une seule tenue", "Change jusqu'à 7 tenues (negafates) durant la cérémonie", "Reste invisible", "Porte du noir"],
        correct: 1,
        explainer: "Au Maroc, la mariée change traditionnellement de tenue (caftan) entre 5 et 7 fois durant la cérémonie, présentée par les negafates. Chaque tenue représente une région du Maroc et symbolise sa richesse culturelle."
      },
      {
        q: "Pourquoi jette-t-on du riz aux mariés ?",
        options: ["Pour les nourrir", "Symbole de fertilité et de prospérité (graines)", "Pour amuser les enfants", "Tradition publicitaire"],
        correct: 1,
        explainer: "Jeter des graines (riz, blé, lentilles) sur les mariés est un rite de fertilité présent dans presque toutes les cultures depuis l'Antiquité. Les graines symbolisent la fécondité et l'abondance future du couple."
      },
      {
        q: "Le 'mariage blanc' désigne :",
        options: ["Un mariage en hiver", "Un mariage sans rapport sexuel (et par extension, de complaisance)", "Un mariage chrétien", "Une cérémonie laïque"],
        correct: 1,
        explainer: "Historiquement, 'mariage blanc' = mariage non consommé sexuellement (la nuit de noces 'blanche'). Par extension juridique moderne, il désigne un mariage fictif (souvent pour papiers), passible de sanctions pénales."
      }
    ]
  },
  {
    slug: "quiz-couples-celebres-histoire",
    title: "Couples célèbres de l'Histoire : tu sais qui aimait qui ?",
    description: "De Cléopâtre à John et Yoko : teste tes connaissances sur les couples mythiques qui ont marqué l'Histoire et la culture mondiale.",
    topic: "couple",
    emoji: "🌹",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Cléopâtre VII a eu une relation avec Jules César ET :",
        options: ["Auguste", "Marc Antoine", "Néron", "Caligula"],
        correct: 1,
        explainer: "Cléopâtre a eu un fils (Césarion) avec Jules César, puis trois enfants avec Marc Antoine. Cette deuxième relation, politiquement explosive, mena à la défaite d'Actium (31 av. J.-C.) et au suicide du couple en 30 av. J.-C."
      },
      {
        q: "Qui était la muse de Salvador Dalí ?",
        options: ["Frida Kahlo", "Gala (Elena Diakonova)", "Picasso", "Coco Chanel"],
        correct: 1,
        explainer: "Gala, née Elena Diakonova, quitte Paul Eluard pour Dalí en 1929. Muse, business manager et égérie obsédante, elle apparaît dans d'innombrables tableaux. Dalí signait parfois 'Gala Salvador Dalí', tellement leur fusion était totale."
      },
      {
        q: "John Lennon a rencontré Yoko Ono en :",
        options: ["1960 à Liverpool", "1966 à une expo d'art à Londres", "1970 à New York", "1973 à Tokyo"],
        correct: 1,
        explainer: "John rencontre Yoko en novembre 1966 à l'Indica Gallery de Londres, lors du vernissage de son expo d'art conceptuel. Il monte sur une échelle, regarde dans une loupe et lit le mot 'YES'. Coup de foudre conceptuel et artistique."
      },
      {
        q: "Frida Kahlo et Diego Rivera ont :",
        options: ["Eu un mariage stable", "Divorcé puis se sont remariés", "Vécu séparés toute leur vie", "Ne se sont jamais mariés"],
        correct: 1,
        explainer: "Frida et Diego se marient en 1929 ('mariage de l'éléphant et la colombe'). Divorce en 1939 (multiples infidélités, dont celle de Diego avec la soeur de Frida), puis remariage en 1940. Relation passionnelle et destructrice jusqu'à la mort de Frida."
      },
      {
        q: "Roméo et Juliette de Shakespeare s'inspirent :",
        options: ["D'une histoire vraie florentine", "De plusieurs nouvelles italiennes du XVIe siècle", "Du mythe d'Orphée", "D'un fait divers anglais"],
        correct: 1,
        explainer: "Shakespeare adapte sa pièce (1597) du poème d'Arthur Brooke 'Romeus and Juliet' (1562), lui-même tiré des nouvelles italiennes de Bandello et da Porto. La structure 'amants ennemis suicidés' était déjà un topos littéraire."
      },
      {
        q: "Simone de Beauvoir et Jean-Paul Sartre :",
        options: ["Etaient mariés monogames", "Avaient un pacte de liberté amoureuse (relations contingentes)", "Se sont séparés en 1950", "N'ont jamais eu de relation"],
        correct: 1,
        explainer: "Pacte conclu en 1929 : leur amour est 'nécessaire', mais ils s'accordent des 'amours contingentes'. Ils n'ont jamais cohabité ni eu d'enfants. Modèle de couple ouvert philosophique souvent débattu (notamment sur l'asymétrie réelle vécue par Beauvoir)."
      },
      {
        q: "Bonnie et Clyde se rencontrent en :",
        options: ["1925", "1930 à Dallas", "1935 à Chicago", "1928 à New York"],
        correct: 1,
        explainer: "Bonnie Parker (19 ans) rencontre Clyde Barrow (21 ans) en janvier 1930 chez une amie commune à Dallas. Leur cavale criminelle dura 21 mois jusqu'à leur mort en mai 1934, criblés de 130 balles par les Texas Rangers."
      },
      {
        q: "Marie-Antoinette et Louis XVI se marient à quel âge ?",
        options: ["18 et 22 ans", "14 et 15 ans", "20 et 25 ans", "16 et 19 ans"],
        correct: 1,
        explainer: "Mariage en 1770 : Marie-Antoinette a 14 ans, Louis (alors Dauphin) 15 ans. Mariage politique scellant l'alliance franco-autrichienne. Le couple ne consommera l'union que sept ans plus tard, fait largement commenté à la cour."
      },
      {
        q: "Le couple Beyoncé-Jay-Z s'est rencontré quand ?",
        options: ["A Coachella 2010", "Vers 2000 alors qu'elle avait 18 ans", "Aux Grammys 2005", "En 2014"],
        correct: 1,
        explainer: "Beyoncé (née 1981) et Jay-Z (né 1969) se rencontrent vers 2000, collaboration sur '03 Bonnie & Clyde' en 2002. Mariage discret en 2008. 12 ans d'écart, empire commun (Carter LLC), trio d'enfants (Blue Ivy + jumeaux)."
      },
      {
        q: "Pierre et Marie Curie ont obtenu ensemble :",
        options: ["Un prix Pulitzer", "Le Nobel de physique 1903 (avec Henri Becquerel)", "Le Nobel de la paix", "Un Oscar"],
        correct: 1,
        explainer: "Le couple Curie reçoit le Nobel de physique 1903 (partagé avec Becquerel) pour leurs travaux sur la radioactivité. Marie obtient ensuite seule le Nobel de chimie 1911, devenant la seule personne à avoir deux Nobel dans deux sciences différentes."
      }
    ]
  },
  {
    slug: "quiz-gottman-secret-couples",
    title: "Méthode Gottman : le secret scientifique des couples qui durent",
    description: "John Gottman a observé 3000 couples pendant 40 ans. Découvre les 4 Cavaliers, le ratio magique et ce qui prédit vraiment le divorce.",
    topic: "couple",
    emoji: "💏",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Avec quelle précision Gottman peut-il prédire un divorce ?",
        options: ["50%", "70%", "91% en observant 5 min de dispute", "100%"],
        correct: 2,
        explainer: "Dans son 'Love Lab' à l'Université de Washington, John Gottman et son équipe ont atteint 91% de précision en prédisant les divorces à partir de 5 minutes d'interaction conflictuelle filmée. Méthodologie publiée dans 'The Mathematics of Marriage' (2002)."
      },
      {
        q: "Quels sont les '4 Cavaliers de l'Apocalypse' selon Gottman ?",
        options: ["Mensonge, infidélité, jalousie, vol", "Critique, mépris, défensivité, retrait (stonewalling)", "Argent, sexe, enfants, belle-famille", "Travail, fatigue, ennui, stress"],
        correct: 1,
        explainer: "Les 4 Cavaliers prédicteurs de divorce : critique (attaque du caractère), mépris (le pire, sarcasme/dégoût), défensivité (jouer la victime), stonewalling (mur du silence/retrait émotionnel). Reconnaître ces patterns = première étape pour les désamorcer."
      },
      {
        q: "Quel est le ratio magique 'positif/négatif' des couples qui durent ?",
        options: ["1:1", "3:1", "5:1 d'interactions positives par négative", "10:1"],
        correct: 2,
        explainer: "Gottman découvre que les couples stables maintiennent un ratio de 5 interactions positives pour 1 négative durant les conflits. En interaction quotidienne, le ratio monte à 20:1. Sous ce seuil, la relation s'érode."
      },
      {
        q: "Les 'bids for connection' sont :",
        options: ["Des enchères eBay", "Des petites tentatives d'attention quotidiennes (regards, questions, touche)", "Des SMS", "Des cadeaux"],
        correct: 1,
        explainer: "Un 'bid' est une micro-tentative de connexion : 'regarde ce ciel', un regard, une touche sur l'épaule. Gottman a montré que les couples heureux répondent aux bids 86% du temps, les couples en détresse seulement 33%."
      },
      {
        q: "Combien de temps Gottman a-t-il observé les couples dans son 'Love Lab' ?",
        options: ["10 ans", "Plus de 40 ans, ~3000 couples", "5 ans", "20 ans"],
        correct: 1,
        explainer: "John Gottman a mené des études longitudinales sur ~3000 couples pendant plus de 40 ans à l'Université de Washington. Mesures physiologiques (rythme cardiaque, sueur) + analyses comportementales millimétrées. Données uniques au monde."
      },
      {
        q: "Quel est l'antidote au MEPRIS selon Gottman ?",
        options: ["Crier plus fort", "Construire une culture d'appréciation et de respect mutuel", "Divorcer", "Ignorer"],
        correct: 1,
        explainer: "L'antidote au mépris (le pire prédicteur de divorce) est de cultiver activement l'admiration et la gratitude envers son partenaire. Pratique quotidienne : nommer 3 choses qu'on apprécie chez l'autre. Reconstruit le 'fonds émotionnel'."
      },
      {
        q: "Le 'flooding' émotionnel signifie :",
        options: ["Pleurer beaucoup", "Etre physiologiquement submergé (rythme cardiaque >100 bpm) au point de ne plus pouvoir raisonner", "Inonder l'autre de SMS", "Boire trop"],
        correct: 1,
        explainer: "Le flooding est l'état où l'amygdale prend le dessus durant un conflit : rythme cardiaque >100, sudation, perte de capacité d'écoute. Gottman recommande une pause de 20 min minimum pour redescendre, sinon la dispute est inutile."
      },
      {
        q: "Le 'soft start-up' c'est :",
        options: ["Un démarrage de moto", "Commencer une critique sans agressivité, en parlant de soi (je) plutôt qu'attaquer (tu)", "Réveiller en douceur", "Un café"],
        correct: 1,
        explainer: "Gottman a démontré que les 3 premières minutes d'une dispute prédisent son issue à 96%. Un 'soft start-up' ('Je me sens X quand Y arrive') vs 'harsh start-up' ('Tu es toujours...') change radicalement la trajectoire conflictuelle."
      },
      {
        q: "Selon Gottman, combien de conflits de couple sont 'irrésolubles' ?",
        options: ["10%", "30%", "69%", "100%"],
        correct: 2,
        explainer: "Surprenant : 69% des conflits conjugaux sont 'perpétuels' (différences de personnalité/valeurs jamais résolues). Les couples heureux ne les résolvent pas, ils apprennent à dialoguer dessus avec humour et tendresse plutôt que de viser la victoire."
      },
      {
        q: "Le 'dream within conflict' selon Gottman signifie :",
        options: ["Faire des rêves bizarres", "Chaque position dans un conflit cache un rêve, une valeur profonde à comprendre", "Dormir séparément", "Faire la sieste"],
        correct: 1,
        explainer: "Derrière chaque position rigide dans un conflit se cache un rêve ou une valeur fondatrice (sécurité, liberté, famille). Comprendre le 'dream within' du partenaire transforme un conflit en intimité profonde. Concept clé de la Sound Relationship House."
      }
    ]
  },
  {
    slug: "quiz-gestes-romantiques-cultures",
    title: "Gestes romantiques à travers les cultures : quel pays fait quoi ?",
    description: "Cadenas d'amour, Saint-Valentin japonaise, déclaration mexicaine : explore les rituels romantiques uniques des cultures du monde.",
    topic: "couple",
    emoji: "💌",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Au Japon, qui offre des chocolats le 14 février ?",
        options: ["Les hommes aux femmes", "Les femmes aux hommes (giri-choco et honmei-choco)", "Personne", "Les enfants aux parents"],
        correct: 1,
        explainer: "Au Japon, ce sont les FEMMES qui offrent du chocolat aux hommes le 14 février. 'Giri-choco' (chocolat d'obligation pour collègues), 'honmei-choco' (chocolat du coeur pour l'élu). Le 14 mars (White Day), les hommes répondent."
      },
      {
        q: "Le 'cadenas d'amour' sur les ponts vient de :",
        options: ["Paris en 2000", "Une tradition serbe inspirée d'un roman italien", "Du Japon ancestral", "Des Vikings"],
        correct: 1,
        explainer: "La tradition vient de Serbie (Most Ljubavi, 'pont de l'amour') puis popularisée par le roman 'Ho voglia di te' de Federico Moccia (2006) qui inspire son film. Phénomène viral à Paris (Pont des Arts), démonté en 2015 pour cause de surcharge."
      },
      {
        q: "En Corée du Sud, le 14 de chaque mois est :",
        options: ["Une fête commerciale", "Un thème romantique différent (rose day, kiss day, hug day...)", "Un jour férié", "Le jour des grands-parents"],
        correct: 1,
        explainer: "La Corée a 12 'days of love' : Candle Day (14 jan), Valentine (fév), White Day (mars), Black Day pour célibataires (avril), Rose Day (mai), Kiss Day (juin)... Culture du dating ultra-codifiée et commerciale."
      },
      {
        q: "Au pays de Galles, la 'cuillère d'amour' (love spoon) est :",
        options: ["Un ustensile de cuisine", "Une cuillère en bois sculptée offerte en gage d'amour depuis le XVIIe siècle", "Une recette", "Un dessert"],
        correct: 1,
        explainer: "Le 'lovespoon' gallois est une cuillère en bois finement sculptée offerte par un prétendant à sa belle dès le XVIIe siècle. Chaque motif a un sens : coeur (amour), clé (sécurité), cloches (mariage), noeuds celtiques (union éternelle)."
      },
      {
        q: "En Chine, le 'Qixi' (七夕) ou 'Saint-Valentin chinoise' célèbre :",
        options: ["Le Nouvel An", "La légende d'amour du Bouvier et de la Tisserande séparés par la Voie lactée", "L'empereur jaune", "La fête de la Lune"],
        correct: 1,
        explainer: "Qixi (7e jour du 7e mois lunaire) célèbre depuis 2600+ ans la légende de Zhinü (Tisserande) et Niulang (Bouvier), amants séparés par la Voie lactée, autorisés à se retrouver une nuit par an grâce à un pont de pies."
      },
      {
        q: "La 'serenata' mexicaine consiste à :",
        options: ["Manger du chocolat", "Engager des mariachis pour chanter sous le balcon de l'aimée", "Faire un karaoké", "Danser la salsa"],
        correct: 1,
        explainer: "La serenata mexicaine : le prétendant engage des mariachis (3-12 musiciens) pour chanter sous la fenêtre de la femme aimée, souvent à minuit. Chansons classiques : 'Las Mañanitas', 'Cielito Lindo'. Geste public et engageant."
      },
      {
        q: "En Italie, la veille du Nouvel An, les amoureux portent traditionnellement :",
        options: ["Du blanc", "Des sous-vêtements rouges pour porter chance en amour", "Du noir", "Des fleurs"],
        correct: 1,
        explainer: "En Italie, porter des sous-vêtements rouges (mutande rosse) le soir du Nouvel An est censé apporter chance, amour et fertilité l'année suivante. Tradition ancienne romaine où le rouge symbolisait santé et fécondité."
      },
      {
        q: "Au Danemark, le 'gaekkebrev' est :",
        options: ["Un chocolat", "Une lettre d'amour anonyme avec des perce-neige envoyée le 1er avril/Pâques", "Un cadeau de Noël", "Un poème de mariage"],
        correct: 1,
        explainer: "Le gaekkebrev danois : lettre découpée en dentelle de papier avec un poème anonyme signé de points (un point = une lettre du prénom). Si la destinataire devine, elle reçoit un oeuf de Pâques ; sinon, elle le doit à l'expéditeur."
      },
      {
        q: "En Inde, le 'sindoor' (poudre rouge dans la raie) signifie :",
        options: ["Un maquillage", "Statut de femme mariée hindoue", "Un rituel religieux solo", "Une mode régionale"],
        correct: 1,
        explainer: "Le sindoor, poudre rouge appliquée dans la raie des cheveux, est porté par les femmes hindoues mariées. Symbole millénaire de l'union, de la fertilité et de la longévité du mari. Retiré symboliquement en cas de veuvage."
      },
      {
        q: "En Allemagne, lors d'une demande en mariage, on offre traditionnellement :",
        options: ["Une rose", "Une cuillère, plus que la bague (Polterabend symbolique)", "Une voiture", "Rien de spécifique, la bague suffit"],
        correct: 3,
        explainer: "L'Allemagne suit la tradition de la bague de fiançailles, mais a un rituel singulier la veille du mariage : le 'Polterabend' où l'on casse de la vaisselle blanche pour porter chance ('Scherben bringen Glück' = 'les tessons portent bonheur')."
      }
    ]
  },
  {
    slug: "quiz-statistiques-couple-france",
    title: "Statistiques couple en France : ce que disent vraiment les données",
    description: "Age moyen du mariage, taux de divorce, durée moyenne d'un couple : les chiffres surprenants sur la vie amoureuse des Français en 2026.",
    topic: "couple",
    emoji: "👫",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est l'âge moyen au premier mariage en France en 2024 ?",
        options: ["25 ans", "32 ans pour les hommes, 30 pour les femmes", "40 ans", "22 ans"],
        correct: 1,
        explainer: "Selon l'INSEE (2024), l'âge moyen au premier mariage est de 32,5 ans pour les hommes et 30,8 ans pour les femmes. Il a augmenté de ~7 ans depuis 1970, reflet de l'allongement des études et de la cohabitation pré-maritale."
      },
      {
        q: "Quel pourcentage de mariages français se terminent par un divorce ?",
        options: ["10%", "~45%", "75%", "5%"],
        correct: 1,
        explainer: "Le taux de divorce en France est d'environ 45% selon l'INSEE. En zone urbaine (Paris notamment), il dépasse 55%. Tendance stable depuis les années 2000 après l'explosion des années 1980-90."
      },
      {
        q: "Combien de PACS pour 100 mariages en France en 2023 ?",
        options: ["10", "Environ 90", "200", "5"],
        correct: 1,
        explainer: "Pour 100 mariages célébrés, environ 90 PACS sont conclus (INSEE 2023). Le PACS, créé en 1999, a connu un succès massif et représente désormais une union juridique presque aussi populaire que le mariage."
      },
      {
        q: "Quelle est la durée moyenne d'un mariage avant divorce en France ?",
        options: ["3 ans", "Environ 15 ans", "30 ans", "8 ans"],
        correct: 1,
        explainer: "La durée moyenne d'un mariage avant divorce est d'environ 15 ans en France. Le pic des divorces se situe entre la 5e et la 10e année, mais les 'divorces gris' (après 50 ans) ont explosé ces 20 dernières années."
      },
      {
        q: "Quel pourcentage de Français vivent en couple en 2024 ?",
        options: ["~60%", "~30%", "~85%", "~40%"],
        correct: 0,
        explainer: "Environ 60% des adultes français vivent en couple selon l'INSEE 2024. Ce chiffre baisse régulièrement (65% en 2000) à cause de l'allongement de la jeunesse solo, des séparations, et du veuvage tardif."
      },
      {
        q: "Combien d'enfants naissent hors mariage en France en 2023 ?",
        options: ["10%", "65%", "30%", "90%"],
        correct: 1,
        explainer: "65% des naissances en France ont lieu hors mariage en 2023, record européen avec la Suède. La France a totalement dissocié filiation et mariage : la reconnaissance hors-mariage donne les mêmes droits depuis 2005."
      },
      {
        q: "Selon l'IFOP, combien de Français ont déjà été infidèles ?",
        options: ["10%", "~40% (hommes) et ~30% (femmes)", "75% pour les deux", "5%"],
        correct: 1,
        explainer: "Selon l'IFOP (2023), environ 43% des hommes et 33% des femmes en couple déclarent avoir déjà été infidèles. L'écart se resserre fortement avec les générations Y et Z, signe d'une évolution comportementale et déclarative."
      },
      {
        q: "L'âge moyen du premier rapport sexuel en France est de :",
        options: ["14 ans", "17 ans environ", "21 ans", "13 ans"],
        correct: 1,
        explainer: "L'âge médian du premier rapport sexuel est de 17,2 ans pour les filles et 17,0 ans pour les garçons (étude Contexte de la Sexualité en France, Inserm). Stable depuis les années 2000."
      },
      {
        q: "Combien de Français déclarent avoir rencontré leur partenaire en ligne en 2023 ?",
        options: ["5%", "Environ 25%", "70%", "50%"],
        correct: 1,
        explainer: "Environ 25% des couples français formés récemment se sont rencontrés en ligne (apps ou sites), selon l'INED. Le pourcentage monte à 40% chez les moins de 30 ans. Tinder, Bumble, Hinge dominent le marché."
      },
      {
        q: "Selon l'INSEE, combien de personnes vivent seules en France en 2024 ?",
        options: ["5 millions", "Environ 11 millions (1 ménage sur 3)", "20 millions", "2 millions"],
        correct: 1,
        explainer: "Environ 11 millions de Français vivent seuls (38% des ménages), record historique. Causes : vieillissement, séparations, célibat prolongé chez les jeunes urbains. Le 'solo living' redessine l'urbanisme et la consommation."
      }
    ]
  },
  {
    slug: "quiz-etapes-relation-amoureuse",
    title: "Les étapes d'une relation amoureuse : de la passion à l'amour durable",
    description: "Limerence, attachement, désillusion : la science des étapes du couple selon les recherches en neurobiologie et psychologie sociale.",
    topic: "couple",
    emoji: "🥀",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de temps dure la phase de 'limerence' (passion amoureuse intense) ?",
        options: ["1 semaine", "6 mois à 3 ans selon Dorothy Tennov", "30 ans", "Toujours"],
        correct: 1,
        explainer: "Dorothy Tennov a inventé le terme 'limerence' (1979) pour décrire l'état d'obsession amoureuse intense. Sa durée moyenne est de 18 mois à 3 ans. Caractérisée par pensées intrusives, idéalisation, peur du rejet, euphorie en présence de l'autre."
      },
      {
        q: "Quelle hormone domine la phase de passion initiale ?",
        options: ["Mélatonine", "Dopamine (système de récompense) et phényléthylamine", "Insuline", "Cortisol uniquement"],
        correct: 1,
        explainer: "L'IRM montre que la phase passion active le système dopaminergique (noyau accumbens, aire tegmentale) — même circuit que la cocaïne. Helen Fisher a démontré que l'amour-passion est neurologiquement une 'addiction comportementale'."
      },
      {
        q: "Quelle hormone caractérise l'attachement durable ?",
        options: ["Adrénaline", "Ocytocine et vasopressine", "Testostérone", "Endorphines uniquement"],
        correct: 1,
        explainer: "L'attachement long-terme repose sur l'ocytocine ('hormone du lien', libérée par contact, sexe, regard) et la vasopressine. Etudes sur les campagnols (Larry Young) ont prouvé que ces hormones créent la monogamie chez certaines espèces."
      },
      {
        q: "La 'phase de désillusion' arrive en général :",
        options: ["Après 1 mois", "Entre 1 et 2 ans, quand la passion neurochimique baisse", "Après 30 ans", "Jamais"],
        correct: 1,
        explainer: "Quand la dopamine baisse (1-2 ans), les 'défauts' de l'autre deviennent visibles. C'est la 'crise de l'an 2' bien connue. Les couples qui réussissent transitionnent vers l'amour-attachement ocytocinique ; les autres rompent."
      },
      {
        q: "Robert Sternberg a proposé une théorie de l'amour basée sur :",
        options: ["1 dimension", "Un triangle : intimité, passion, engagement", "10 dimensions", "Le cercle astral"],
        correct: 1,
        explainer: "La 'théorie triangulaire de l'amour' de Sternberg (1986) identifie 3 composantes : intimité (lien émotionnel), passion (attirance physique), engagement (décision de durer). L'amour 'parfait' ('consummate love') combine les trois."
      },
      {
        q: "Selon Sternberg, l'amour 'romantique' combine :",
        options: ["Intimité + engagement", "Intimité + passion (sans engagement)", "Engagement seul", "Passion seule"],
        correct: 1,
        explainer: "Amour romantique = intimité + passion, sans engagement. Typique des coups de foudre intenses sans projet long-terme. Sternberg distingue 7 types d'amour selon les combinaisons des 3 composantes (sympathy, infatuation, fatuous love, etc.)."
      },
      {
        q: "Le 'NRE' (New Relationship Energy) chez les chercheurs en couples ouverts désigne :",
        options: ["L'énergie verte", "L'euphorie chimique du début d'une nouvelle relation", "Une thérapie", "Un médicament"],
        correct: 1,
        explainer: "Le NRE est un concept popularisé dans la polyamorie : l'euphorie neurochimique d'un nouveau lien peut écraser temporairement les relations existantes. Les polyamoureux apprennent à 'gérer le NRE' pour ne pas négliger leurs partenaires établis."
      },
      {
        q: "Quel chercheur a identifié les 'phases' de la relation amoureuse à long-terme ?",
        options: ["Freud", "Helen Fisher (anthropologue de l'amour)", "Einstein", "Skinner"],
        correct: 1,
        explainer: "Helen Fisher, anthropologue à Rutgers, a identifié 3 systèmes cérébraux distincts de l'amour : désir sexuel (testostérone), amour-passion (dopamine), attachement (ocytocine/vasopressine). Ces systèmes opèrent indépendamment et peuvent cibler des personnes différentes."
      },
      {
        q: "L'effet 'Coolidge' en psychologie signifie :",
        options: ["Boire du Coca", "Renouveau du désir sexuel avec un nouveau partenaire", "Faire la sieste", "Aimer le froid"],
        correct: 1,
        explainer: "L'effet Coolidge (du président américain) décrit la baisse du désir avec un partenaire familier vs le pic avec un nouveau. Documenté chez de nombreuses espèces. Explique en partie pourquoi le désir baisse en couple long-terme — défi biologique des relations durables."
      },
      {
        q: "L'amour mature ('compassionate love' selon Berscheid) repose sur :",
        options: ["L'idéalisation", "L'intimité profonde, l'engagement et l'amitié", "Le mystère", "La distance"],
        correct: 1,
        explainer: "Ellen Berscheid distingue 'passionate love' (court, intense) et 'compassionate love' (durable, basé sur amitié, intimité, valeurs partagées). Les couples qui durent migrent de l'un à l'autre. La passion ne disparaît pas, elle change de nature."
      }
    ]
  },
  {
    slug: "quiz-langage-non-verbal-amour",
    title: "Langage non-verbal en amour : décrypte les signaux du désir",
    description: "Pupilles dilatées, mirroring, micro-expressions : la science du langage corporel amoureux selon les recherches en psychologie sociale.",
    topic: "couple",
    emoji: "👫",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Que font les pupilles quand on regarde quelqu'un qu'on désire ?",
        options: ["Elles rétrécissent", "Elles se dilatent (jusqu'à +45%)", "Elles ne bougent pas", "Elles clignotent"],
        correct: 1,
        explainer: "Les pupilles se dilatent (mydriase) face à un stimulus attractif, réflexe involontaire du système nerveux autonome. Eckhard Hess (1965) a démontré que cette dilatation est elle-même perçue comme attractive en retour : boucle de désir."
      },
      {
        q: "Le 'mirroring' en psychologie sociale c'est :",
        options: ["Se regarder dans le miroir", "Imiter inconsciemment la posture et les gestes de l'autre", "Faire la grimace", "Se vexer"],
        correct: 1,
        explainer: "Le mirroring est l'imitation inconsciente de la posture, des gestes, du rythme de parole. Signe d'attirance et de connexion. Théorisé par Chartrand et Bargh (1999) comme 'effet caméléon'. Lié à l'activation des neurones miroirs."
      },
      {
        q: "Quelle micro-expression dure 1/25e de seconde et trahit une émotion réelle ?",
        options: ["Un sourire", "Les micro-expressions de Paul Ekman", "Un clin d'oeil", "Un bâillement"],
        correct: 1,
        explainer: "Paul Ekman a identifié les 7 émotions universelles et leurs micro-expressions involontaires (1/15 à 1/25 sec). Impossible à truquer totalement. Base de la série 'Lie to Me'. En amour, une micro-expression de dégoût ou mépris est un red flag majeur."
      },
      {
        q: "Le 'preening' (lissage) en flirt c'est :",
        options: ["Repasser ses vêtements", "Se recoiffer ou ajuster sa tenue inconsciemment face à quelqu'un qu'on trouve attirant", "Faire la vaisselle", "Mâcher"],
        correct: 1,
        explainer: "Le preening (toiletage) est un comportement inconscient face à une personne qu'on trouve attirante : remettre une mèche, ajuster un col, lisser une jupe. Hérité du règne animal (oiseaux qui lissent leurs plumes en parade)."
      },
      {
        q: "Selon Albert Mehrabian, dans la communication émotionnelle :",
        options: ["100% est verbal", "55% non-verbal, 38% ton, 7% mots", "Tout est dans les mots", "50% verbal, 50% gestes"],
        correct: 1,
        explainer: "La règle 55/38/7 de Mehrabian (1971) : dans la communication d'émotions et d'attitudes, 55% passe par le visage/corps, 38% par le ton de voix, 7% par les mots. Souvent mal interprétée hors contexte émotionnel, mais valide pour l'affectif."
      },
      {
        q: "Le contact visuel prolongé (>4 sec) entre deux inconnus :",
        options: ["Crée de l'attirance romantique", "Est interdit légalement", "Provoque la fuite", "N'a aucun effet"],
        correct: 0,
        explainer: "L'étude de Kellerman et al. (1989) a montré qu'un contact visuel maintenu 2 minutes entre inconnus génère des sentiments d'affection et même d'amour. Repris par Arthur Aron pour ses '36 questions to fall in love' (1997)."
      },
      {
        q: "Quels muscles distinguent un VRAI sourire (Duchenne) d'un faux ?",
        options: ["Les muscles du nez", "L'orbiculaire de l'oeil (rides du coin de l'oeil)", "Les muscles des oreilles", "La langue"],
        correct: 1,
        explainer: "Le sourire de Duchenne (du neurologue français Guillaume Duchenne) active à la fois le grand zygomatique (lèvres) ET l'orbiculaire de l'oeil (rides du coin de l'oeil, 'crow's feet'). Ce dernier est involontaire — d'où l'authenticité du vrai sourire."
      },
      {
        q: "Pencher la tête sur le côté en parlant à quelqu'un signale :",
        options: ["De la fatigue", "Une écoute attentive et de l'intérêt", "Une migraine", "Du mépris"],
        correct: 1,
        explainer: "Pencher la tête expose la carotide (zone vulnérable), geste de confiance et d'écoute. Egalement signe d'intérêt romantique. Présent dès l'enfance et présent chez de nombreux mammifères sociaux. Lecture interculturelle quasi-universelle."
      },
      {
        q: "Les 'proxémiques' d'Edward T. Hall définissent :",
        options: ["Les zones de distance interpersonnelle (intime, personnelle, sociale, publique)", "La taille des corps", "Le poids", "Les couleurs préférées"],
        correct: 0,
        explainer: "L'anthropologue Edward T. Hall a défini en 1966 quatre zones : intime (<45 cm, couples/famille), personnelle (45-120 cm, amis), sociale (1,2-3,6 m, collègues), publique (>3,6 m). Franchir la zone intime sans permission = signal fort (ou intrusion)."
      },
      {
        q: "Pointer ses pieds vers quelqu'un signifie :",
        options: ["Vouloir partir", "Etre attiré ou intéressé par cette personne", "Avoir froid", "Etre nerveux"],
        correct: 1,
        explainer: "Les pieds sont la partie du corps la moins consciemment contrôlée. Ils pointent inconsciemment vers ce qui nous intéresse vraiment. En groupe, observer où pointent les pieds révèle qui aime qui. Concept popularisé par Joe Navarro (ex-FBI)."
      }
    ]
  },
  {
    slug: "quiz-conflits-couple-resolution",
    title: "Conflits de couple : comment les vrais experts les résolvent",
    description: "Demande/retrait, time-out, écoute active : techniques scientifiquement validées pour résoudre les conflits dans le couple selon la thérapie EFT et Gottman.",
    topic: "couple",
    emoji: "💔",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Le pattern 'demande / retrait' est :",
        options: ["Une danse de tango", "Un schéma destructeur : un partenaire poursuit, l'autre fuit le conflit", "Un jeu de société", "Une technique de drague"],
        correct: 1,
        explainer: "Le pattern 'demand/withdraw' (Christensen & Heavey) est l'un des plus délétères du couple : un partenaire (souvent celui qui demande de l'attention) poursuit, l'autre (souvent évitant) se retire. Boucle qui amplifie la détresse des deux."
      },
      {
        q: "Sue Johnson a développé quelle thérapie de couple ?",
        options: ["La psychanalyse", "L'EFT (Emotionally Focused Therapy)", "La TCC", "Le coaching"],
        correct: 1,
        explainer: "Sue Johnson a fondé l'EFT (Emotionally Focused Therapy) dans les années 1980. Basée sur la théorie de l'attachement, l'EFT a 70-75% de taux de succès et 90% d'amélioration, l'une des thérapies de couple les plus validées scientifiquement."
      },
      {
        q: "Selon l'EFT, derrière la colère se cache souvent :",
        options: ["De la haine", "Une émotion vulnérable (peur de l'abandon, blessure)", "De la jalousie", "De la fatigue"],
        correct: 1,
        explainer: "L'EFT identifie les 'émotions primaires' (vulnérables : peur, tristesse, honte) cachées derrière les 'émotions secondaires' (colère, retrait). Le travail thérapeutique = faire émerger la vulnérabilité pour créer une nouvelle danse émotionnelle."
      },
      {
        q: "La technique du 'time-out' de Gottman recommande une pause de :",
        options: ["2 minutes", "Minimum 20 minutes pour redescendre physiologiquement", "5 heures", "1 semaine"],
        correct: 1,
        explainer: "Gottman a mesuré que le système nerveux a besoin d'au moins 20 minutes pour redescendre du 'flooding' (rythme cardiaque >100 bpm). En dessous, on est en mode 'lutte-fuite', la dispute est inutile et destructrice. Faire une vraie pause = clé."
      },
      {
        q: "L'écoute active selon Carl Rogers implique :",
        options: ["Donner des conseils", "Reformuler sans juger pour valider l'expérience de l'autre", "Couper la parole", "Faire autre chose en même temps"],
        correct: 1,
        explainer: "Carl Rogers (fondateur de l'approche humaniste) a théorisé l'écoute active : reformulation empathique, suspension du jugement, validation de l'expérience. En couple, demander 'Si je comprends bien tu te sens X parce que Y' désamorce 80% des conflits."
      },
      {
        q: "Quelle pourcentage des disputes de couple concerne réellement le sujet apparent ?",
        options: ["100%", "Environ 20% - le reste est émotionnel", "50%", "0%"],
        correct: 1,
        explainer: "Les thérapeutes estiment que ~20% du contenu d'une dispute concerne le sujet apparent (vaisselle, retard...). Les 80% restants sont des enjeux émotionnels profonds (respect, considération, attachement). D'où l'inefficacité des disputes sur les 'faits'."
      },
      {
        q: "Le 'XYZ statement' en communication non-violente c'est :",
        options: ["Une équation", "'Quand tu fais X dans la situation Y, je ressens Z'", "Un code postal", "Un dessin animé"],
        correct: 1,
        explainer: "La formule 'Quand X dans le contexte Y, je ressens Z' (Marshall Rosenberg, CNV) évite les attaques généralisantes ('tu es toujours') et centre sur les faits + ressentis. Crée beaucoup moins de défensivité que les accusations."
      },
      {
        q: "Le 'we-talk' (on, nous) dans une dispute prédit :",
        options: ["Une rupture", "Un meilleur ajustement relationnel et plus de longévité", "Un divorce", "L'infidélité"],
        correct: 1,
        explainer: "L'étude de Seider et al. (2009) sur les couples âgés montre que l'usage du pronom 'nous/on' pendant les conflits prédit une meilleure régulation émotionnelle et longévité conjugale. Le 'we-talk' active la pensée en équipe vs adversaire."
      },
      {
        q: "La 'réparation' après une dispute selon Gottman doit arriver :",
        options: ["Jamais", "Idéalement dans les heures, certainement dans les jours", "Après 1 mois", "Jamais nécessaire"],
        correct: 1,
        explainer: "Gottman insiste : les ruptures émotionnelles laissées sans réparation s'accumulent et créent du ressentiment. La réparation peut être verbale (excuse) ou non-verbale (geste, blague, contact). Les couples solides réparent rapidement et fréquemment."
      },
      {
        q: "L'effet 'positive sentiment override' chez les couples heureux :",
        options: ["Un médicament", "Interpréter positivement même les gestes ambigus du partenaire", "Une drogue", "Une thérapie"],
        correct: 1,
        explainer: "Gottman a observé que les couples heureux ont un 'PSO' : ils interprètent les comportements ambigus du partenaire dans un cadre positif. Les couples en détresse ont un 'NSO' (negative override) : même les gestes neutres sont lus négativement."
      }
    ]
  }
];
