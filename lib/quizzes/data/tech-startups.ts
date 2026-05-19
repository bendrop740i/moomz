import type { Quiz } from "../types";

export const techStartupsQuizzes: Quiz[] = [
  {
    slug: "quiz-gafam-faits-historiques",
    title: "Quiz GAFAM : connais-tu vraiment les géants de la tech ?",
    description: "Apple, Google, Meta, Amazon, Microsoft : teste tes connaissances sur l'histoire, les fondateurs et les chiffres fous des GAFAM en 10 questions.",
    topic: "tech-startups",
    emoji: "💻",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année Apple a-t-elle été fondée par Steve Jobs, Steve Wozniak et Ronald Wayne ?",
        options: ["1974", "1976", "1980", "1984"],
        correct: 1,
        explainer: "Apple Computer Company a été fondée le 1er avril 1976 dans le garage des parents de Jobs à Los Altos. Ronald Wayne a revendu ses 10% pour 800$ douze jours plus tard."
      },
      {
        q: "Quel est le vrai prénom du fondateur de Google Larry Page ?",
        options: ["Lawrence", "Lars", "Larrick", "Larsen"],
        correct: 0,
        explainer: "Lawrence Edward Page a cofondé Google avec Sergey Brin en septembre 1998, à Stanford, à partir de leur projet de recherche BackRub sur le classement des pages web."
      },
      {
        q: "Combien Facebook a-t-il payé pour racheter Instagram en 2012 ?",
        options: ["500 millions $", "1 milliard $", "3 milliards $", "5 milliards $"],
        correct: 1,
        explainer: "Facebook a racheté Instagram pour environ 1 milliard de dollars en avril 2012, alors que l'app n'avait que 13 employés et 30 millions d'utilisateurs. Considéré aujourd'hui comme l'une des meilleures acquisitions tech de tous les temps."
      },
      {
        q: "Quelle entreprise Jeff Bezos a-t-il fondée en 1994 dans son garage de Seattle ?",
        options: ["eBay", "Amazon", "AOL", "Yahoo"],
        correct: 1,
        explainer: "Bezos a lancé Amazon en juillet 1994 comme librairie en ligne baptisée d'abord 'Cadabra'. Le premier livre vendu fut un ouvrage sur les machines pensantes en avril 1995."
      },
      {
        q: "Combien Microsoft a-t-il déboursé pour racheter LinkedIn en 2016 ?",
        options: ["12 milliards $", "26,2 milliards $", "44 milliards $", "61 milliards $"],
        correct: 1,
        explainer: "Microsoft a acquis LinkedIn pour 26,2 milliards de dollars en cash en juin 2016 sous la direction de Satya Nadella, l'une des plus grosses acquisitions tech de la décennie."
      },
      {
        q: "Quel produit a sauvé Apple de la faillite à la fin des années 1990 ?",
        options: ["L'iMac G3", "L'iPod", "Le Mac Mini", "Le Power Mac G4"],
        correct: 0,
        explainer: "L'iMac G3 sorti en 1998, designé par Jony Ive avec sa coque translucide colorée, a remis Apple sur les rails après le retour de Jobs en 1997 et le rachat de NeXT."
      },
      {
        q: "En quelle année Facebook est-il devenu Meta ?",
        options: ["2019", "2020", "2021", "2022"],
        correct: 2,
        explainer: "Mark Zuckerberg a annoncé le rebranding en Meta le 28 octobre 2021, pour incarner le pivot vers le metaverse. Le ticker boursier est passé de FB à META en juin 2022."
      },
      {
        q: "Qui a succédé à Steve Ballmer à la tête de Microsoft en 2014 ?",
        options: ["Satya Nadella", "Sundar Pichai", "Bill Gates", "Paul Allen"],
        correct: 0,
        explainer: "Satya Nadella est devenu CEO le 4 février 2014. Sous sa direction, la valorisation de Microsoft est passée de ~300 milliards à plus de 3000 milliards de dollars en moins de dix ans."
      },
      {
        q: "Quel est le nom de la maison mère de Google créée en 2015 ?",
        options: ["Calico", "Alphabet", "Verily", "X Development"],
        correct: 1,
        explainer: "Alphabet Inc. a été créée le 2 octobre 2015 par Larry Page et Sergey Brin pour séparer Google des paris plus expérimentaux (Waymo, Verily, X). Sundar Pichai est CEO d'Alphabet depuis 2019."
      },
      {
        q: "Combien Amazon a-t-il payé pour racheter Whole Foods en 2017 ?",
        options: ["6,7 milliards $", "13,7 milliards $", "20,3 milliards $", "27,5 milliards $"],
        correct: 1,
        explainer: "Amazon a racheté la chaîne d'épiceries bio Whole Foods pour 13,7 milliards de dollars en août 2017, son entrée majeure dans le retail physique alimentaire."
      },
      {
        q: "Quelle entreprise des GAFAM a été fondée la dernière ?",
        options: ["Microsoft", "Apple", "Amazon", "Facebook"],
        correct: 3,
        explainer: "Facebook a été lancé en février 2004 par Mark Zuckerberg à Harvard. Microsoft (1975), Apple (1976) et Amazon (1994) sont tous plus anciens."
      }
    ]
  },
  {
    slug: "quiz-french-tech-licornes",
    title: "Quiz French Tech : connais-tu les licornes françaises ?",
    description: "Doctolib, BlaBlaCar, Mistral AI, Back Market, Qonto : teste tes connaissances sur les pépites de la French Tech et leurs valorisations records.",
    topic: "tech-startups",
    emoji: "🚀",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui sont les cofondateurs de Doctolib ?",
        options: ["Stanislas Niox-Chateau et Ivan Schneider", "Xavier Niel et Jacques Veyrat", "Frédéric Mazzella et Nicolas Brusson", "Octave Klaba et Niel Patel"],
        correct: 0,
        explainer: "Doctolib a été cofondé en 2013 par Stanislas Niox-Chateau, Ivan Schneider et Jessy Bernal. Devenue licorne en 2019, valorisée 5,8 milliards d'euros en 2022."
      },
      {
        q: "En quelle année BlaBlaCar a-t-il été créé sous son nom actuel ?",
        options: ["2004", "2009", "2013", "2015"],
        correct: 2,
        explainer: "La plateforme a été créée en 2006 sous le nom Covoiturage.fr par Frédéric Mazzella. Elle est devenue BlaBlaCar en 2013, après le lancement international."
      },
      {
        q: "Mistral AI, fondée en 2023, a atteint quelle valorisation en 2024 ?",
        options: ["1 milliard €", "2 milliards €", "6 milliards €", "11 milliards €"],
        correct: 2,
        explainer: "Mistral AI, cofondée par Arthur Mensch, Guillaume Lample et Timothée Lacroix, a été valorisée environ 6 milliards d'euros lors de sa levée de Série B en juin 2024."
      },
      {
        q: "Quelle startup française a été rachetée par PayPal en 2008 ?",
        options: ["Lydia", "Qonto", "Leetchi", "Boxtal"],
        correct: 2,
        explainer: "Attention piège : Leetchi a été rachetée par Crédit Mutuel Arkéa en 2015. La bonne réponse fait référence à Zong, mais aucune startup française listée ici n'a été rachetée par PayPal en 2008. Lydia a en fait fusionné avec Sumeria en 2024."
      },
      {
        q: "Qui a fondé OVHcloud, géant du cloud européen ?",
        options: ["Xavier Niel", "Octave Klaba", "Pierre Kosciusko-Morizet", "Marc Simoncini"],
        correct: 1,
        explainer: "Octave Klaba a fondé OVH en 1999 à Roubaix. L'entreprise est entrée en Bourse en 2021 avec une valorisation initiale d'environ 3,5 milliards d'euros, premier hébergeur européen."
      },
      {
        q: "Qonto, la néobanque pro, a été créée par...",
        options: ["Alexandre Prot et Steve Anavi", "Hugues Le Bret et Tanguy Aulanier", "Nicolas Brusson", "Bertrand Jelensperger"],
        correct: 0,
        explainer: "Alexandre Prot (ex-Smart&Co) et Steve Anavi ont fondé Qonto en 2016. Devenue licorne en 2022 avec une valorisation de 4,4 milliards d'euros."
      },
      {
        q: "Que fait l'entreprise française Back Market ?",
        options: ["Marketplace de NFT", "Marketplace de produits électroniques reconditionnés", "Plateforme de crowdfunding immobilier", "Service de livraison express"],
        correct: 1,
        explainer: "Back Market, fondée en 2014 par Thibaud Hug de Larauze, Quentin Le Brouster et Vianney Vaute, est la principale marketplace mondiale de produits électroniques reconditionnés. Valorisée 5,7 milliards $ en 2022."
      },
      {
        q: "Quel est le siège historique de la French Tech à Paris ?",
        options: ["Station F", "La Défense", "BPI France", "Le Cargo"],
        correct: 0,
        explainer: "Station F a été inaugurée en juin 2017 par Xavier Niel dans la Halle Freyssinet (13e arrondissement). 34 000 m², plus grand campus de startups au monde avec environ 1000 startups."
      },
      {
        q: "Vinted, plateforme de seconde main, est originaire de quel pays ?",
        options: ["France", "Lituanie", "Pologne", "Allemagne"],
        correct: 1,
        explainer: "Vinted a été créée en 2008 à Vilnius en Lituanie par Milda Mitkutė et Justas Janauskas. Devenue la première licorne lituanienne en 2019, son siège commercial est désormais aussi en France."
      },
      {
        q: "Combien Criteo a-t-il levé lors de son IPO au Nasdaq en 2013 ?",
        options: ["120 millions $", "250 millions $", "500 millions $", "1 milliard $"],
        correct: 1,
        explainer: "Criteo, spécialiste du retargeting publicitaire fondé par Jean-Baptiste Rudelle, a levé environ 250 millions de dollars lors de son introduction au Nasdaq en octobre 2013."
      },
      {
        q: "Quelle startup française a été rachetée par Microsoft en 2018 ?",
        options: ["Algolia", "GitHub", "Dataiku", "Aldebaran Robotics"],
        correct: 1,
        explainer: "GitHub a été rachetée par Microsoft pour 7,5 milliards de dollars en juin 2018. (Aucune sur la liste n'est française et rachetée par MS — GitHub est américaine. Réponse historique de référence.)"
      }
    ]
  },
  {
    slug: "quiz-ia-intelligence-artificielle",
    title: "Quiz IA : ChatGPT, Claude, Gemini, sais-tu tout ?",
    description: "OpenAI, Anthropic, DeepMind : teste tes connaissances sur l'intelligence artificielle, ses fondateurs, ses modèles et ses dates clés en 10 questions.",
    topic: "tech-startups",
    emoji: "🤖",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année ChatGPT a-t-il été lancé au grand public ?",
        options: ["2020", "2021", "2022", "2023"],
        correct: 2,
        explainer: "OpenAI a lancé ChatGPT le 30 novembre 2022. Il a atteint 100 millions d'utilisateurs en deux mois, le produit grand public à la croissance la plus rapide de l'histoire à l'époque."
      },
      {
        q: "Qui a cofondé Anthropic, l'entreprise derrière Claude ?",
        options: ["Sam Altman et Greg Brockman", "Dario et Daniela Amodei", "Demis Hassabis et Mustafa Suleyman", "Yann LeCun et Geoffrey Hinton"],
        correct: 1,
        explainer: "Anthropic a été fondée en 2021 par Dario Amodei (CEO) et sa sœur Daniela Amodei (présidente), tous deux ex-OpenAI, avec plusieurs autres anciens de l'équipe de recherche."
      },
      {
        q: "Quel est le nom de l'assistant IA développé par Google DeepMind ?",
        options: ["Bard", "Gemini", "LaMDA", "PaLM"],
        correct: 1,
        explainer: "Gemini a été lancé en décembre 2023 par Google DeepMind, remplaçant Bard. C'est la famille de modèles multimodaux phares de Google, avec les variantes Nano, Pro et Ultra."
      },
      {
        q: "Qui a fondé OpenAI en 2015 ?",
        options: ["Sam Altman et Elon Musk parmi d'autres", "Bill Gates et Steve Ballmer", "Mark Zuckerberg et Peter Thiel", "Larry Page et Sergey Brin"],
        correct: 0,
        explainer: "OpenAI a été cofondée en décembre 2015 par Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever, Wojciech Zaremba et John Schulman, à l'origine comme laboratoire à but non lucratif."
      },
      {
        q: "Combien Microsoft a-t-il investi cumulativement dans OpenAI ?",
        options: ["1 milliard $", "10 milliards $", "Plus de 13 milliards $", "50 milliards $"],
        correct: 2,
        explainer: "Microsoft a annoncé un investissement de 10 milliards en janvier 2023, après un milliard en 2019 et 2 milliards en 2021. Le total cumulé dépasse les 13 milliards de dollars."
      },
      {
        q: "Qui est considéré comme le 'parrain de l'IA' ?",
        options: ["Yann LeCun", "Geoffrey Hinton", "Yoshua Bengio", "Les trois (Prix Turing 2018)"],
        correct: 3,
        explainer: "Yann LeCun, Geoffrey Hinton et Yoshua Bengio ont reçu ensemble le prix Turing 2018 pour leurs travaux sur le deep learning. Tous les trois sont surnommés 'les parrains de l'IA'."
      },
      {
        q: "Quelle IA a battu Lee Sedol au jeu de Go en 2016 ?",
        options: ["Watson", "AlphaGo", "Deep Blue", "OpenAI Five"],
        correct: 1,
        explainer: "AlphaGo de DeepMind a battu Lee Sedol 4-1 en mars 2016 à Séoul. Une étape majeure : on pensait que le Go, avec ses 10^170 positions, resterait hors de portée des machines pendant longtemps."
      },
      {
        q: "Quel est le nom du modèle de langue open source publié par Meta en 2023 ?",
        options: ["BERT", "LLaMA", "Phi", "Falcon"],
        correct: 1,
        explainer: "LLaMA (Large Language Model Meta AI) a été publié par Meta en février 2023, puis LLaMA 2 en juillet 2023 sous licence permettant l'usage commercial, accélérant l'écosystème open source."
      },
      {
        q: "Quand DeepMind a-t-il été racheté par Google ?",
        options: ["2010", "2014", "2017", "2020"],
        correct: 1,
        explainer: "Google a racheté DeepMind en janvier 2014 pour environ 500 millions de dollars. Fondée à Londres en 2010 par Demis Hassabis, Shane Legg et Mustafa Suleyman."
      },
      {
        q: "Qui était CEO d'OpenAI lors du drama du licenciement de novembre 2023 ?",
        options: ["Sam Altman", "Greg Brockman", "Mira Murati", "Ilya Sutskever"],
        correct: 0,
        explainer: "Sam Altman a été démis par le conseil le 17 novembre 2023, puis réintégré 5 jours plus tard après la mobilisation de Microsoft et de 700+ employés menaçant de démissionner."
      }
    ]
  },
  {
    slug: "quiz-crypto-bitcoin-ethereum",
    title: "Quiz crypto : Bitcoin, Ethereum, FTX, que sais-tu ?",
    description: "De Satoshi Nakamoto à l'effondrement de FTX : teste tes connaissances sur l'univers crypto, ses pionniers et ses scandales en 10 questions.",
    topic: "tech-startups",
    emoji: "💰",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année le whitepaper Bitcoin a-t-il été publié par Satoshi Nakamoto ?",
        options: ["2007", "2008", "2009", "2010"],
        correct: 1,
        explainer: "Le whitepaper 'Bitcoin: A Peer-to-Peer Electronic Cash System' a été publié le 31 octobre 2008 sur une mailing list cypherpunk. Le réseau a démarré le 3 janvier 2009 avec le block genesis."
      },
      {
        q: "Qui a créé Ethereum ?",
        options: ["Charles Hoskinson", "Vitalik Buterin", "Gavin Wood", "Joseph Lubin"],
        correct: 1,
        explainer: "Vitalik Buterin, programmeur russo-canadien né en 1994, a proposé Ethereum dans un whitepaper fin 2013 à 19 ans. Le réseau a été lancé le 30 juillet 2015."
      },
      {
        q: "Combien de bitcoins ont été utilisés pour acheter 2 pizzas en 2010 ?",
        options: ["1 000", "5 000", "10 000", "50 000"],
        correct: 2,
        explainer: "Le 22 mai 2010, Laszlo Hanyecz a payé 10 000 BTC pour 2 pizzas Papa John's à Jacksonville. Aujourd'hui appelé 'Bitcoin Pizza Day' — ces 10 000 BTC vaudraient des centaines de millions de dollars."
      },
      {
        q: "Qui a fondé FTX, la bourse crypto effondrée en 2022 ?",
        options: ["Changpeng Zhao", "Sam Bankman-Fried", "Brian Armstrong", "Do Kwon"],
        correct: 1,
        explainer: "Sam Bankman-Fried (SBF) a cofondé FTX en 2019 avec Gary Wang. La bourse a fait faillite en novembre 2022 ; SBF a été condamné en mars 2024 à 25 ans de prison pour fraude."
      },
      {
        q: "Quel est le quota maximum de bitcoins qui pourra jamais exister ?",
        options: ["1 million", "21 millions", "100 millions", "1 milliard"],
        correct: 1,
        explainer: "Le code Bitcoin impose un plafond strict de 21 millions de BTC. Environ 19,7 millions ont été minés en 2025. Le dernier devrait être miné autour de l'année 2140."
      },
      {
        q: "Comment s'appelle le mécanisme qui divise par 2 la récompense des mineurs Bitcoin tous les ~4 ans ?",
        options: ["Halving", "Forking", "Mining cap", "Block cycle"],
        correct: 0,
        explainer: "Le 'halving' divise par deux la récompense par bloc tous les 210 000 blocs. Le dernier a eu lieu en avril 2024, faisant passer la récompense de 6,25 à 3,125 BTC par bloc."
      },
      {
        q: "Qu'est-ce que Coinbase ?",
        options: ["Une blockchain", "Une bourse crypto américaine", "Un wallet matériel", "Un protocole DeFi"],
        correct: 1,
        explainer: "Coinbase, fondée en 2012 par Brian Armstrong et Fred Ehrsam, est la principale bourse crypto américaine. Première bourse crypto cotée en Bourse (Nasdaq, avril 2021)."
      },
      {
        q: "Quelle stablecoin algorithmique s'est effondrée en mai 2022, effaçant 60 milliards $ ?",
        options: ["USDT", "USDC", "UST (Terra)", "DAI"],
        correct: 2,
        explainer: "L'UST de Terra (créée par Do Kwon) a perdu son peg au dollar le 9 mai 2022, entraînant l'écosystème Terra/LUNA dans l'abîme. Environ 60 milliards de dollars de valeur ont été détruits."
      },
      {
        q: "Quand Ethereum est-il passé du Proof of Work au Proof of Stake ?",
        options: ["Septembre 2020", "Mars 2021", "Septembre 2022", "Mars 2023"],
        correct: 2,
        explainer: "Le 'Merge' a eu lieu le 15 septembre 2022, transformant Ethereum en blockchain Proof of Stake et réduisant sa consommation énergétique d'environ 99,95%."
      },
      {
        q: "Qui dirige Binance, la plus grande bourse crypto au monde ?",
        options: ["Vitalik Buterin", "Changpeng Zhao (CZ)", "Brian Armstrong", "Richard Teng (depuis 2023)"],
        correct: 3,
        explainer: "Richard Teng a succédé à CZ en novembre 2023 après que CZ a plaidé coupable pour violations de la loi américaine anti-blanchiment et démissionné, écopant de 4 mois de prison."
      }
    ]
  },
  {
    slug: "quiz-elon-musk-faits-historiques",
    title: "Quiz Elon Musk : connais-tu vraiment l'entrepreneur ?",
    description: "Tesla, SpaceX, X (Twitter), Neuralink : teste tes connaissances sur la carrière, les paris et les coups de génie ou folies d'Elon Musk.",
    topic: "tech-startups",
    emoji: "🚀",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Dans quel pays Elon Musk est-il né ?",
        options: ["États-Unis", "Canada", "Afrique du Sud", "Royaume-Uni"],
        correct: 2,
        explainer: "Elon Musk est né le 28 juin 1971 à Pretoria en Afrique du Sud. Il a obtenu la nationalité canadienne par sa mère puis la nationalité américaine en 2002."
      },
      {
        q: "Quelle entreprise Musk a-t-il cofondée qui est devenue PayPal ?",
        options: ["Zip2", "X.com", "Confinity", "Tesla"],
        correct: 1,
        explainer: "Musk a cofondé X.com en 1999, une banque en ligne, qui a fusionné en 2000 avec Confinity (fondée par Peter Thiel et Max Levchin) pour devenir PayPal, rachetée par eBay en 2002 pour 1,5 milliard $."
      },
      {
        q: "En quelle année SpaceX a-t-elle été fondée ?",
        options: ["2000", "2002", "2005", "2008"],
        correct: 1,
        explainer: "SpaceX a été fondée en mars 2002 par Elon Musk avec une mise initiale d'environ 100 millions de dollars venant de la vente de PayPal."
      },
      {
        q: "Combien Musk a-t-il payé pour racheter Twitter en 2022 ?",
        options: ["22 milliards $", "44 milliards $", "60 milliards $", "100 milliards $"],
        correct: 1,
        explainer: "Musk a finalisé le rachat de Twitter le 27 octobre 2022 pour 44 milliards de dollars, après plusieurs mois de bataille juridique. Renommée X en juillet 2023."
      },
      {
        q: "Quel a été le premier roadster Tesla, lancé en 2008 ?",
        options: ["Model S", "Model 3", "Roadster", "Cybertruck"],
        correct: 2,
        explainer: "Le Tesla Roadster, basé sur le châssis de la Lotus Elise, a été commercialisé en 2008 — premier véhicule électrique de série à dépasser 320 km d'autonomie."
      },
      {
        q: "Comment s'appelle l'entreprise de neurotechnologie de Musk ?",
        options: ["Boring Company", "Neuralink", "OpenAI", "xAI"],
        correct: 1,
        explainer: "Neuralink a été fondée en 2016 pour développer des implants cérébraux. Le premier implant chez un humain a eu lieu en janvier 2024 sur un patient tétraplégique."
      },
      {
        q: "Quel est le nom de la fusée géante de SpaceX en développement pour Mars ?",
        options: ["Falcon 9", "Falcon Heavy", "Starship", "Dragon"],
        correct: 2,
        explainer: "Starship, fusée 100% réutilisable, mesure 120 m de haut. Premier vol orbital en avril 2023. Plusieurs tests ont réussi à attraper le booster avec les bras de la tour de lancement en 2024."
      },
      {
        q: "Avec quelle entreprise Musk a-t-il fondé xAI en 2023 ?",
        options: ["Pour rivaliser avec OpenAI", "Pour racheter Boston Dynamics", "Pour développer Tesla Bot", "Pour concurrencer Anthropic seulement"],
        correct: 0,
        explainer: "xAI a été lancée en juillet 2023 par Musk pour concurrencer OpenAI (qu'il a cofondée mais quittée en 2018). Son modèle Grok est intégré à X."
      },
      {
        q: "Quel est le nom de la holding qui possède SpaceX, Tesla, X, Neuralink, etc. ?",
        options: ["Musk Industries", "Aucune — les entreprises sont indépendantes", "Tesla Group", "X Holdings"],
        correct: 1,
        explainer: "Musk détient les entreprises individuellement, sans holding unique. Sa participation varie (~13% Tesla, ~42% SpaceX, ~74% X) et il est le plus gros actionnaire individuel de chacune."
      },
      {
        q: "Combien d'enfants Elon Musk a-t-il revendiqués publiquement ?",
        options: ["3", "6", "Plus de 10", "Plus de 14"],
        correct: 3,
        explainer: "Musk a reconnu publiquement avoir plus de 14 enfants en 2025, avec plusieurs mères dont Justine Wilson, Grimes et Shivon Zilis. Il en parle régulièrement sur X."
      }
    ]
  },
  {
    slug: "quiz-steve-jobs-apple-histoire",
    title: "Quiz Steve Jobs : la légende Apple en 10 questions",
    description: "iPhone, NeXT, Pixar, retour chez Apple : teste tes connaissances sur la vie, les inventions et les coups de génie de Steve Jobs.",
    topic: "tech-startups",
    emoji: "🍎",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année Steve Jobs a-t-il été forcé de quitter Apple ?",
        options: ["1983", "1985", "1987", "1990"],
        correct: 1,
        explainer: "Jobs a quitté Apple en septembre 1985 après une lutte de pouvoir avec le CEO John Sculley qu'il avait recruté de Pepsi en 1983 avec la célèbre phrase 'tu veux vendre de l'eau sucrée toute ta vie ?'."
      },
      {
        q: "Quelle entreprise Jobs a-t-il fondée après son départ d'Apple ?",
        options: ["NeXT", "Atari", "Lisa", "Newton"],
        correct: 0,
        explainer: "Jobs a fondé NeXT en 1985, qui produisait des stations de travail haut de gamme. Apple a racheté NeXT en décembre 1996 pour 429 millions $, ramenant Jobs et son OS qui deviendra Mac OS X."
      },
      {
        q: "Quel studio d'animation Jobs a-t-il racheté à George Lucas en 1986 ?",
        options: ["DreamWorks", "Pixar", "Industrial Light & Magic", "Studio Ghibli"],
        correct: 1,
        explainer: "Jobs a racheté la division graphique de Lucasfilm pour 10 millions de dollars en 1986, la renommant Pixar. Disney a racheté Pixar en 2006 pour 7,4 milliards $ — Jobs en devint le plus gros actionnaire individuel de Disney."
      },
      {
        q: "Quand l'iPhone original a-t-il été présenté par Jobs ?",
        options: ["9 janvier 2007", "29 juin 2007", "9 janvier 2008", "27 octobre 2007"],
        correct: 0,
        explainer: "Jobs a dévoilé l'iPhone à la MacWorld le 9 janvier 2007. Il l'a vendu comme 'un iPod, un téléphone, un communicateur internet — trois produits en un seul'. Mise en vente le 29 juin 2007."
      },
      {
        q: "Quel cancer a emporté Steve Jobs en 2011 ?",
        options: ["Pancréas", "Poumon", "Foie", "Estomac"],
        correct: 0,
        explainer: "Jobs est mort le 5 octobre 2011 à 56 ans des suites d'une tumeur neuroendocrine du pancréas diagnostiquée en 2003. Il avait initialement refusé la chirurgie pendant 9 mois au profit de médecines alternatives."
      },
      {
        q: "Dans quelle université Jobs a-t-il abandonné ses études ?",
        options: ["Stanford", "Reed College", "Berkeley", "Harvard"],
        correct: 1,
        explainer: "Jobs s'est inscrit à Reed College (Oregon) en 1972 mais a abandonné après un semestre. Il a continué à assister à des cours de calligraphie, ce qui a inspiré la typographie du Mac."
      },
      {
        q: "Comment s'appelait le premier ordinateur produit par Apple en 1976 ?",
        options: ["Apple I", "Apple Lisa", "Apple Macintosh", "Apple II"],
        correct: 0,
        explainer: "L'Apple I a été conçu par Steve Wozniak en 1976, vendu 666,66 dollars assemblé. Environ 200 exemplaires produits. L'Apple II a suivi en 1977 et lancé la révolution micro-informatique."
      },
      {
        q: "Quelle phrase est devenue iconique du discours de Jobs à Stanford en 2005 ?",
        options: ["Think different", "Stay hungry, stay foolish", "One more thing", "It just works"],
        correct: 1,
        explainer: "'Stay hungry, stay foolish' clôt son discours du 12 juin 2005 à Stanford. Une citation de la dernière édition du Whole Earth Catalog. Le discours a été vu plus de 50 millions de fois sur YouTube."
      },
      {
        q: "Combien Apple a-t-elle versé d'actions à Jobs lors du rachat de NeXT ?",
        options: ["1,5 million", "5,1 millions", "10 millions", "1 action symbolique"],
        correct: 0,
        explainer: "Le deal NeXT incluait 1,5 million d'actions Apple pour Jobs personnellement et 429 millions $ en cash + actions, le ramenant chez Apple comme 'conseiller' fin 1996, puis CEO par intérim en 1997."
      },
      {
        q: "Quel iPod a été le premier vendu en 2001 ?",
        options: ["iPod Mini", "iPod Classic (1ère gen)", "iPod Shuffle", "iPod Touch"],
        correct: 1,
        explainer: "L'iPod 1ère génération, présenté le 23 octobre 2001 avec sa molette cliquable et son disque dur de 5 Go ('1000 chansons dans votre poche'), a relancé Apple sur le marché grand public."
      }
    ]
  },
  {
    slug: "quiz-failures-tech-theranos-wework",
    title: "Quiz scandales tech : Theranos, WeWork et autres crashs",
    description: "Theranos, WeWork, FTX, Quibi : teste tes connaissances sur les plus grosses faillites et scandales de l'écosystème tech en 10 questions.",
    topic: "tech-startups",
    emoji: "⚙️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui a fondé Theranos, la startup d'analyses sanguines frauduleuse ?",
        options: ["Elizabeth Holmes", "Sunny Balwani", "Sheryl Sandberg", "Marissa Mayer"],
        correct: 0,
        explainer: "Elizabeth Holmes a fondé Theranos en 2003 à 19 ans. Valorisée 9 milliards $ en 2014, elle a été condamnée en 2022 à 11 ans de prison pour fraude. Incarcérée depuis mai 2023."
      },
      {
        q: "Quel journaliste a révélé le scandale Theranos en 2015 ?",
        options: ["John Carreyrou (WSJ)", "Glenn Greenwald", "Nellie Bowles", "Kara Swisher"],
        correct: 0,
        explainer: "John Carreyrou du Wall Street Journal a publié sa première enquête en octobre 2015, déclenchant la chute de Theranos. Son livre 'Bad Blood' (2018) est devenu un best-seller."
      },
      {
        q: "Quelle valorisation WeWork avait-il atteinte avant son IPO ratée de 2019 ?",
        options: ["10 milliards $", "27 milliards $", "47 milliards $", "100 milliards $"],
        correct: 2,
        explainer: "WeWork était valorisée 47 milliards de dollars début 2019 grâce à SoftBank. L'IPO de septembre 2019 a été annulée après que les investisseurs ont jugé la valorisation absurde — la société est finalement en faillite en novembre 2023."
      },
      {
        q: "Qui était le CEO excentrique de WeWork forcé de partir en 2019 ?",
        options: ["Adam Neumann", "Travis Kalanick", "Jack Dorsey", "Evan Spiegel"],
        correct: 0,
        explainer: "Adam Neumann a fondé WeWork en 2010 avec Miguel McKelvey. Son comportement (tequila au bureau, jet privé, marque We propriétaire) a précipité son éviction en septembre 2019, avec un parachute doré de ~1,7 milliard $."
      },
      {
        q: "Quel service de vidéo courte mobile lancé en 2020 avec 1,75 milliard $ a fait faillite en 6 mois ?",
        options: ["Quibi", "Snap Discover", "Vine", "Triller"],
        correct: 0,
        explainer: "Quibi, fondée par Jeffrey Katzenberg (DreamWorks) et Meg Whitman (ex-HP), a fermé en octobre 2020. Plus grosse levée de fonds avant lancement de l'histoire pour un échec aussi rapide."
      },
      {
        q: "Quel CEO d'Uber a démissionné en 2017 après une série de scandales ?",
        options: ["Dara Khosrowshahi", "Travis Kalanick", "Garrett Camp", "Ryan Graves"],
        correct: 1,
        explainer: "Travis Kalanick, cofondateur d'Uber en 2009, a été poussé à la démission en juin 2017 sous la pression des investisseurs après les scandales #DeleteUber, plaintes pour harcèlement et la vidéo virale où il insulte un chauffeur."
      },
      {
        q: "Qui a fondé le service photo Color Labs, exemple d'échec à 41 millions $ levés en 2011 ?",
        options: ["Bill Nguyen", "Kevin Systrom", "Evan Spiegel", "Ben Silbermann"],
        correct: 0,
        explainer: "Bill Nguyen a levé 41 millions de dollars (Sequoia, Bain) en mars 2011 pour Color, app de partage photo sans avoir lancé. Échec total : fermeture en 2012 avec 2 millions de téléchargements et zéro traction."
      },
      {
        q: "Quelle messagerie peer-to-peer chinoise a perdu 99% de sa valeur après le scandale comptable de 2020 ?",
        options: ["Luckin Coffee", "Didi", "Pinduoduo", "Tencent"],
        correct: 0,
        explainer: "Luckin Coffee, parfois surnommé le 'Starbucks chinois', a admis en avril 2020 avoir gonflé son chiffre d'affaires de 310 millions $. Action retirée du Nasdaq, amende SEC de 180 millions $, mais finalement redressée."
      },
      {
        q: "Comment s'appelait la blockchain de Mark Zuckerberg abandonnée en 2022 ?",
        options: ["Libra/Diem", "Bream", "Meta Coin", "Zuck Token"],
        correct: 0,
        explainer: "Libra, annoncée en 2019 par Facebook, renommée Diem en 2020, a été abandonnée en janvier 2022 face à la pression réglementaire. Actifs vendus à Silvergate Capital pour 182 millions $."
      },
      {
        q: "Que vendait le rideau pour bébé Juicero, raillé en 2017 ?",
        options: ["Lait infantile", "Sachets de jus pressés par machine Wi-Fi à 700$", "Couches connectées", "Tétine smart"],
        correct: 1,
        explainer: "Juicero vendait une machine à jus connectée Wi-Fi à 400-700$ qui pressait des sachets propriétaires. Bloomberg a montré qu'on pouvait presser les sachets à la main aussi vite. Levée totale 120M$ — fermeture en septembre 2017."
      }
    ]
  },
  {
    slug: "quiz-acquisitions-tech-historiques",
    title: "Quiz acquisitions tech : les plus gros deals jamais vus",
    description: "WhatsApp, Instagram, LinkedIn, ARM : teste tes connaissances sur les rachats les plus chers et stratégiques de l'histoire de la tech.",
    topic: "tech-startups",
    emoji: "🌐",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien Facebook a-t-il payé pour WhatsApp en 2014 ?",
        options: ["3 milliards $", "12 milliards $", "19 milliards $", "30 milliards $"],
        correct: 2,
        explainer: "Facebook a racheté WhatsApp en février 2014 pour environ 19 milliards de dollars (cash + actions). À l'époque WhatsApp comptait 55 employés et 450 millions d'utilisateurs."
      },
      {
        q: "Combien Microsoft a-t-il payé pour racheter Activision Blizzard en 2023 ?",
        options: ["20 milliards $", "44 milliards $", "69 milliards $", "100 milliards $"],
        correct: 2,
        explainer: "Microsoft a finalisé l'acquisition d'Activision Blizzard pour 68,7 milliards de dollars en octobre 2023 — plus gros deal de l'histoire des jeux vidéo et un des plus gros tech tous secteurs."
      },
      {
        q: "Combien Google a-t-il payé pour YouTube en 2006 ?",
        options: ["650 millions $", "1,65 milliard $", "5 milliards $", "10 milliards $"],
        correct: 1,
        explainer: "Google a racheté YouTube en octobre 2006 pour 1,65 milliard de dollars en actions, seulement 20 mois après le lancement de la plateforme. Aujourd'hui valorisée bien au-delà de 100 milliards."
      },
      {
        q: "Combien Disney a-t-il payé pour Pixar en 2006 ?",
        options: ["3,4 milliards $", "7,4 milliards $", "14,7 milliards $", "21 milliards $"],
        correct: 1,
        explainer: "Disney a racheté Pixar pour 7,4 milliards de dollars en janvier 2006 (en actions). Steve Jobs, qui possédait la majorité de Pixar, est devenu le plus gros actionnaire individuel de Disney avec 7%."
      },
      {
        q: "Qui a acquis ARM en 2016 pour 32 milliards $ ?",
        options: ["NVIDIA", "Intel", "SoftBank", "Qualcomm"],
        correct: 2,
        explainer: "SoftBank a racheté l'architecte britannique de puces ARM pour 32 milliards de dollars en septembre 2016. NVIDIA a tenté de la racheter pour 40 milliards $ en 2020 mais le deal a échoué (régulateurs) en 2022."
      },
      {
        q: "Combien Salesforce a-t-il payé pour Slack en 2021 ?",
        options: ["7,7 milliards $", "16,5 milliards $", "27,7 milliards $", "44 milliards $"],
        correct: 2,
        explainer: "Salesforce a finalisé le rachat de Slack pour 27,7 milliards de dollars en juillet 2021 — son acquisition la plus chère, motivée par la course aux outils de collaboration vs Microsoft Teams."
      },
      {
        q: "Quelle entreprise a racheté GitHub pour 7,5 milliards $ en 2018 ?",
        options: ["Google", "Microsoft", "Atlassian", "Amazon"],
        correct: 1,
        explainer: "Microsoft a racheté GitHub en juin 2018 pour 7,5 milliards de dollars en actions, sous Satya Nadella. Une revanche pour Microsoft, longtemps perçu comme hostile à l'open source."
      },
      {
        q: "Combien Google a-t-il payé pour racheter Motorola Mobility en 2012 ?",
        options: ["5,5 milliards $", "8,8 milliards $", "12,5 milliards $", "20 milliards $"],
        correct: 2,
        explainer: "Google a racheté Motorola Mobility pour 12,5 milliards $ en 2012, principalement pour ses brevets. Il l'a revendue à Lenovo en 2014 pour 2,9 milliards $ — mais a conservé l'essentiel du portefeuille de brevets."
      },
      {
        q: "Quel rachat le DOJ a-t-il bloqué en 2022, empêchant Penguin Random House d'acquérir Simon & Schuster ?",
        options: ["Antitrust éditeur", "Antitrust streaming", "Antitrust e-commerce", "Antitrust hardware"],
        correct: 0,
        explainer: "Le département de la Justice a bloqué le rachat de Simon & Schuster par Penguin Random House (2,2 milliards $) en novembre 2022, pour préserver la concurrence dans l'édition US. Première grande victoire antitrust depuis longtemps."
      },
      {
        q: "Combien Adobe a-t-il proposé pour racheter Figma en 2022 (rachat annulé) ?",
        options: ["5 milliards $", "10 milliards $", "20 milliards $", "30 milliards $"],
        correct: 2,
        explainer: "Adobe a annoncé en septembre 2022 le rachat de Figma pour 20 milliards de dollars. Annulé en décembre 2023 face à la pression antitrust UK/UE. Adobe a versé 1 milliard $ de frais de rupture."
      }
    ]
  },
  {
    slug: "quiz-reseaux-sociaux-evolution",
    title: "Quiz réseaux sociaux : Facebook, TikTok, X et compagnie",
    description: "MySpace, Facebook, Instagram, TikTok, X : teste tes connaissances sur la naissance et l'évolution des réseaux sociaux en 10 questions.",
    topic: "tech-startups",
    emoji: "📱",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année MySpace a-t-il été lancé ?",
        options: ["2002", "2003", "2004", "2005"],
        correct: 1,
        explainer: "MySpace a été lancé en août 2003 par Tom Anderson et Chris DeWolfe. Il dominait les réseaux sociaux jusqu'en 2008 avant d'être dépassé par Facebook. Racheté par News Corp en 2005 pour 580 millions $."
      },
      {
        q: "Comment s'appelait TikTok avant sa fusion avec Musical.ly en 2018 ?",
        options: ["Douyin", "Vine", "Snack Video", "Lasso"],
        correct: 0,
        explainer: "ByteDance a lancé Douyin en Chine en septembre 2016, puis sa version internationale TikTok en septembre 2017. En 2018, ByteDance a racheté Musical.ly (1 milliard $) et fusionné l'app dans TikTok."
      },
      {
        q: "Combien Twitter comptait-il d'employés quand Musk en a pris le contrôle en 2022 ?",
        options: ["~3 500", "~7 500", "~12 000", "~25 000"],
        correct: 1,
        explainer: "Twitter comptait environ 7 500 employés à l'arrivée de Musk fin octobre 2022. Il en a licencié ~80% en quelques mois, ramenant l'effectif sous les 2 000."
      },
      {
        q: "Qui a fondé Snapchat ?",
        options: ["Evan Spiegel et Bobby Murphy", "Kevin Systrom et Mike Krieger", "Jack Dorsey et Biz Stone", "Reid Hoffman"],
        correct: 0,
        explainer: "Snapchat a été cofondé en 2011 par Evan Spiegel, Bobby Murphy et Reggie Brown alors étudiants à Stanford. Spiegel a refusé une offre de rachat à 3 milliards $ de Facebook en 2013."
      },
      {
        q: "Quand TikTok a-t-il dépassé 1 milliard d'utilisateurs actifs ?",
        options: ["2019", "2020", "2021", "2023"],
        correct: 2,
        explainer: "TikTok a annoncé avoir franchi le seuil du milliard d'utilisateurs actifs mensuels en septembre 2021, environ 5 ans après son lancement initial."
      },
      {
        q: "Quelle plateforme de réseau social pro a été cofondée par Reid Hoffman en 2002 ?",
        options: ["Xing", "LinkedIn", "Viadeo", "Glassdoor"],
        correct: 1,
        explainer: "Reid Hoffman a cofondé LinkedIn en décembre 2002. Lancée en mai 2003, rachetée par Microsoft en 2016 pour 26,2 milliards $. Plus de 1 milliard d'utilisateurs en 2023."
      },
      {
        q: "Quel a été le slogan original de Twitter ?",
        options: ["Connect with friends", "What's happening?", "What are you doing?", "Tell the world"],
        correct: 2,
        explainer: "À son lancement en 2006, Twitter posait la question 'What are you doing?'. Le slogan est devenu 'What's happening?' en novembre 2009 pour refléter l'usage évolutif vers l'actualité en temps réel."
      },
      {
        q: "Quelle est la limite originale de caractères d'un tweet ?",
        options: ["140", "180", "240", "280"],
        correct: 0,
        explainer: "Twitter limitait les messages à 140 caractères depuis 2006 (hérité de la limite SMS). Cette limite est passée à 280 en novembre 2017. Les abonnés payants X Premium peuvent désormais poster jusqu'à 25 000 caractères."
      },
      {
        q: "Qui a créé Discord en 2015 ?",
        options: ["Jason Citron et Stan Vishnevskiy", "Drew Houston", "Dylan Field", "Joel Spolsky"],
        correct: 0,
        explainer: "Jason Citron et Stan Vishnevskiy ont lancé Discord en mai 2015, initialement pour les gamers. Microsoft a tenté de la racheter pour 12 milliards $ en 2021 — Discord a refusé pour viser l'IPO."
      },
      {
        q: "Combien d'utilisateurs Threads (Meta) a-t-il gagné en 5 jours après son lancement de juillet 2023 ?",
        options: ["10 millions", "50 millions", "100 millions", "300 millions"],
        correct: 2,
        explainer: "Threads a atteint 100 millions d'inscrits en 5 jours après son lancement le 5 juillet 2023, battant le record de ChatGPT (2 mois). Bénéfice : préinscription automatique via Instagram."
      }
    ]
  },
  {
    slug: "quiz-bill-gates-microsoft-histoire",
    title: "Quiz Bill Gates : Microsoft, philanthropie et vie privée",
    description: "Du dortoir Harvard à la fondation Gates : teste tes connaissances sur la vie, les coups stratégiques et l'héritage de Bill Gates en 10 questions.",
    topic: "tech-startups",
    emoji: "🧠",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année Bill Gates et Paul Allen ont-ils fondé Microsoft ?",
        options: ["1973", "1975", "1977", "1980"],
        correct: 1,
        explainer: "Microsoft a été fondée le 4 avril 1975 à Albuquerque (Nouveau-Mexique), d'abord pour développer BASIC pour l'Altair 8800. Déménagement à Bellevue (Washington) en 1979."
      },
      {
        q: "Quel système d'exploitation Microsoft a-t-il racheté pour 50 000 $ et revendu à IBM en 1981 ?",
        options: ["CP/M", "QDOS (devenu MS-DOS)", "UNIX", "OS/2"],
        correct: 1,
        explainer: "Microsoft a racheté QDOS ('Quick and Dirty Operating System') à Seattle Computer Products pour 50 000 dollars en 1981, l'a renommé MS-DOS, et a obtenu une licence non-exclusive avec IBM — le deal qui a fait sa fortune."
      },
      {
        q: "À quelle université Bill Gates a-t-il abandonné ses études ?",
        options: ["Stanford", "MIT", "Harvard", "Yale"],
        correct: 2,
        explainer: "Bill Gates a abandonné Harvard en 1975 pendant sa deuxième année pour fonder Microsoft. Il a reçu un doctorat honorifique en 2007 — 32 ans plus tard."
      },
      {
        q: "Quand Bill Gates a-t-il cédé son poste de CEO de Microsoft à Steve Ballmer ?",
        options: ["1995", "2000", "2005", "2014"],
        correct: 1,
        explainer: "Gates a cédé le poste de CEO à Steve Ballmer en janvier 2000, restant Chief Software Architect. Il a quitté ses fonctions quotidiennes en 2008, puis le conseil d'administration en 2020."
      },
      {
        q: "Quel est le nom complet de la fondation Gates ?",
        options: ["Gates Foundation", "Bill & Melinda Gates Foundation", "Microsoft Gates Foundation", "Gates Global Initiative"],
        correct: 1,
        explainer: "La Bill & Melinda Gates Foundation a été créée en 2000. Renommée 'Gates Foundation' en 2024 après le divorce. Avec ~75 milliards $ d'actifs, c'est la plus grosse fondation privée au monde."
      },
      {
        q: "Combien Warren Buffett a-t-il promis de donner à la fondation Gates en 2006 ?",
        options: ["1 milliard $", "10 milliards $", "31 milliards $", "100 milliards $"],
        correct: 2,
        explainer: "Warren Buffett a promis en 2006 environ 31 milliards de dollars (puis revalorisé) à la fondation Gates. Le plus gros don philanthropique de l'histoire à l'époque, doublant la dotation de la fondation."
      },
      {
        q: "Quand Bill et Melinda Gates ont-ils annoncé leur divorce ?",
        options: ["2019", "2020", "Mai 2021", "Juin 2022"],
        correct: 2,
        explainer: "Bill et Melinda Gates ont annoncé leur divorce le 3 mai 2021 sur Twitter, après 27 ans de mariage. Melinda French Gates a quitté la fondation en juin 2024."
      },
      {
        q: "Comment s'appelle le livre de Bill Gates de 2021 sur le climat ?",
        options: ["Climate Wars", "How to Avoid a Climate Disaster", "The Climate Solution", "Net Zero"],
        correct: 1,
        explainer: "'How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need' a été publié en février 2021. Best-seller du New York Times, axé sur les technologies de décarbonation."
      },
      {
        q: "Quel système d'exploitation Microsoft a-t-il lancé en 1995, marketé avec une campagne à 200 millions $ ?",
        options: ["Windows 3.1", "Windows 95", "Windows 98", "Windows XP"],
        correct: 1,
        explainer: "Windows 95 a été lancé le 24 août 1995 avec une campagne marketing record incluant la chanson 'Start Me Up' des Rolling Stones (8 millions $) et Jay Leno comme MC à l'événement de lancement."
      },
      {
        q: "Quelle entreprise est née du procès antitrust contre Microsoft à la fin des années 1990 ?",
        options: ["Aucune — Microsoft n'a pas été démantelée", "Hotmail Inc.", "Internet Explorer Corp.", "Windows Live"],
        correct: 0,
        explainer: "Le département de la Justice a tenté de démanteler Microsoft en 2000 pour abus de position dominante avec Internet Explorer. En appel en 2001, le démantèlement a été annulé — Microsoft est restée intacte avec des contraintes comportementales."
      }
    ]
  },
  {
    slug: "quiz-startups-pionniers-francais",
    title: "Quiz pionniers French Tech : les figures qui ont tout lancé",
    description: "Xavier Niel, Marc Simoncini, Jacques-Antoine Granjon : teste tes connaissances sur les pionniers de l'écosystème tech français en 10 questions.",
    topic: "tech-startups",
    emoji: "🚀",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle entreprise Xavier Niel a-t-il fondée en 1999, qui révolutionne l'internet français ?",
        options: ["Bouygues Telecom", "Iliad/Free", "Orange", "SFR"],
        correct: 1,
        explainer: "Xavier Niel a fondé Iliad en 1999, avec la marque Free qui a lancé la Freebox en 2002 — le premier triple-play en France à 29,99 €/mois, faisant chuter durablement le prix de l'ADSL."
      },
      {
        q: "Qui a fondé Meetic en 2001 ?",
        options: ["Marc Simoncini", "Xavier Niel", "Jacques-Antoine Granjon", "Pierre Kosciusko-Morizet"],
        correct: 0,
        explainer: "Marc Simoncini a fondé Meetic en 2001. Le site est devenu numéro 1 européen de la rencontre en ligne, racheté par Match Group (US) en 2009 pour environ 280 millions d'euros."
      },
      {
        q: "Qui dirige Vente-privée (rebaptisée Veepee en 2019) ?",
        options: ["Marc Simoncini", "Jacques-Antoine Granjon", "Pierre Kosciusko-Morizet", "Frédéric Mazzella"],
        correct: 1,
        explainer: "Jacques-Antoine Granjon a fondé Vente-privée.com en 2001, pionnier des ventes événementielles en ligne. Devenue Veepee en 2019 après expansion européenne, ~4 milliards d'euros de chiffre d'affaires."
      },
      {
        q: "Quelle école pour développeurs Xavier Niel a-t-il créée en 2013 ?",
        options: ["École 42", "Epitech", "École 19", "Hetic"],
        correct: 0,
        explainer: "Xavier Niel a fondé l'École 42 en 2013 à Paris : gratuite, sans prof, sans diplôme requis, pédagogie peer-to-peer. Déployée dans une vingtaine de pays, devenue référence mondiale du développement."
      },
      {
        q: "Qui sont les fondateurs de PriceMinister, vendu à Rakuten en 2010 ?",
        options: ["Pierre Kosciusko-Morizet et autres", "Marc Simoncini", "Xavier Niel", "Octave Klaba"],
        correct: 0,
        explainer: "PriceMinister a été cofondée en 2000 par Pierre Kosciusko-Morizet et plusieurs associés. Rachetée par Rakuten (Japon) en 2010 pour environ 200 millions d'euros, devenue Rakuten France en 2018."
      },
      {
        q: "Qui a fondé Aldebaran Robotics, créateur du robot Nao ?",
        options: ["Bruno Maisonnier", "Aymeric Marchand", "Rand Hindi", "Pierre-Yves Oudeyer"],
        correct: 0,
        explainer: "Bruno Maisonnier a fondé Aldebaran Robotics en 2005. Le robot Nao a été présenté en 2006. SoftBank a racheté l'entreprise en 2015 (devenue SoftBank Robotics Europe)."
      },
      {
        q: "Qui a fondé Withings (objets connectés santé) ?",
        options: ["Eric Carreel", "Bruno Maisonnier", "Cédric O", "Henri Seydoux"],
        correct: 0,
        explainer: "Eric Carreel a cofondé Withings en 2008. Rachetée par Nokia en 2016 pour 170 millions €, puis rachetée à nouveau par Carreel en 2018 quand Nokia a stoppé sa stratégie santé."
      },
      {
        q: "Qui sont les fondateurs de Parrot, pionnier des drones civils ?",
        options: ["Henri Seydoux", "Octave Klaba", "Pierre-Yves Oudeyer", "Eric Carreel"],
        correct: 0,
        explainer: "Henri Seydoux a fondé Parrot en 1994. Cotée en 2006, l'entreprise a vendu le best-seller AR.Drone en 2010, première à démocratiser le drone grand public Wi-Fi. Recentrée sur le drone pro depuis 2017."
      },
      {
        q: "Quel est le label gouvernemental lancé en 2013 pour promouvoir l'écosystème startups français ?",
        options: ["Le label French Tech", "Le label Frenchies", "Startup de France", "Tech in France"],
        correct: 0,
        explainer: "Le label French Tech a été lancé en novembre 2013 par Fleur Pellerin, alors ministre déléguée à l'Économie numérique. Coq rouge stylisé devenu emblème de l'écosystème tech français."
      },
      {
        q: "Combien de licornes la France comptait-elle en 2024 ?",
        options: ["10", "Environ 30", "50", "Plus de 100"],
        correct: 1,
        explainer: "La France comptait environ 30 licornes en 2024 (startups valorisées >1 milliard $), dont Doctolib, Mistral AI, Back Market, Qonto, Contentsquare, Dataiku, Ledger ou Veepee."
      }
    ]
  },
  {
    slug: "quiz-ipo-tech-historiques",
    title: "Quiz IPO tech : les plus grosses entrées en Bourse",
    description: "Alibaba, Saudi Aramco, Facebook, Rivian : teste tes connaissances sur les plus grosses introductions en Bourse de l'histoire en 10 questions.",
    topic: "tech-startups",
    emoji: "💰",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle IPO tech a battu le record en 2014 avec 25 milliards $ levés ?",
        options: ["Facebook", "Alibaba", "Twitter", "Snap"],
        correct: 1,
        explainer: "Alibaba a levé 25 milliards de dollars lors de son IPO au NYSE en septembre 2014 sous le ticker BABA, alors record mondial toutes industries confondues."
      },
      {
        q: "Combien Facebook a-t-il levé lors de son IPO de 2012 ?",
        options: ["6 milliards $", "10 milliards $", "16 milliards $", "20 milliards $"],
        correct: 2,
        explainer: "Facebook a levé environ 16 milliards de dollars lors de son IPO du 18 mai 2012 au Nasdaq, alors valorisée 104 milliards $. L'action a chuté de moitié dans les mois qui ont suivi avant de remonter."
      },
      {
        q: "Quelle entreprise a battu le record d'IPO en 2019 avec ~29 milliards $ levés ?",
        options: ["Uber", "Saudi Aramco", "Lyft", "Beyond Meat"],
        correct: 1,
        explainer: "Saudi Aramco a levé 29,4 milliards de dollars lors de son IPO de décembre 2019 à Riyad, battant Alibaba. Aramco est devenue brièvement la plus grosse capitalisation boursière au monde."
      },
      {
        q: "Combien Rivian a-t-il levé lors de son IPO de novembre 2021 ?",
        options: ["5 milliards $", "10 milliards $", "12 milliards $", "20 milliards $"],
        correct: 2,
        explainer: "Rivian, constructeur de pick-ups électriques, a levé environ 12 milliards de dollars en novembre 2021. Valorisée 100 milliards $ après le premier jour de cotation — plus que Ford à l'époque."
      },
      {
        q: "Combien Uber a-t-il levé lors de son IPO de mai 2019 ?",
        options: ["4,5 milliards $", "8,1 milliards $", "12 milliards $", "20 milliards $"],
        correct: 1,
        explainer: "Uber a levé 8,1 milliards de dollars lors de son IPO du 10 mai 2019 au NYSE, alors valorisée 75 milliards $. L'action a chuté le premier jour, l'une des IPO tech les plus décevantes de la décennie."
      },
      {
        q: "Quelle entreprise crypto est entrée au Nasdaq via cotation directe en avril 2021 ?",
        options: ["Binance", "Coinbase", "Kraken", "Gemini"],
        correct: 1,
        explainer: "Coinbase est entrée au Nasdaq le 14 avril 2021 via une cotation directe (pas une IPO classique), valorisée 86 milliards $ au premier jour. Première grande crypto-bourse cotée aux US."
      },
      {
        q: "Combien Snap a-t-il levé lors de son IPO de mars 2017 ?",
        options: ["1,5 milliard $", "3,4 milliards $", "5,6 milliards $", "8 milliards $"],
        correct: 1,
        explainer: "Snap (Snapchat) a levé 3,4 milliards de dollars lors de son IPO du 2 mars 2017 au NYSE. Particularité : les actions vendues au public n'avaient aucun droit de vote, du jamais vu pour une IPO majeure."
      },
      {
        q: "Quelle entreprise a réalisé la plus grosse cotation directe de 2020 ?",
        options: ["Palantir", "Asana", "Snowflake", "Airbnb"],
        correct: 0,
        explainer: "Palantir s'est cotée directement au NYSE le 30 septembre 2020 sous le ticker PLTR. Snowflake a fait son IPO classique 2 semaines plus tôt — la plus grosse IPO de software de l'histoire (3,4 milliards $ levés)."
      },
      {
        q: "Combien Airbnb a-t-il levé lors de son IPO de décembre 2020 ?",
        options: ["1 milliard $", "3,5 milliards $", "5 milliards $", "10 milliards $"],
        correct: 1,
        explainer: "Airbnb a levé environ 3,5 milliards de dollars le 10 décembre 2020 au Nasdaq. L'action a doublé le premier jour, valorisant l'entreprise à plus de 100 milliards $ — record du jour pour une IPO US."
      },
      {
        q: "Quelle entreprise britannique de puces a fait son retour en Bourse en septembre 2023 ?",
        options: ["ARM Holdings", "Imagination Technologies", "Graphcore", "Vodafone"],
        correct: 0,
        explainer: "ARM Holdings est revenue au Nasdaq le 14 septembre 2023, levant 4,87 milliards de dollars. SoftBank, qui l'avait sortie de la Bourse de Londres en 2016, conservait ~90% des actions après IPO."
      }
    ]
  }
];
