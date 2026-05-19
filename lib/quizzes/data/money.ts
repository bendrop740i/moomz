import type { Quiz } from "../types";

export const moneyQuizzes: Quiz[] = [
  {
    slug: "quiz-bourse-bases-investisseur",
    title: "Quiz Bourse : les bases que tout investisseur doit connaitre",
    description: "Teste tes connaissances sur la bourse, le CAC40, le NASDAQ, les ETF et les fondamentaux de l'investissement en actions a la francaise.",
    topic: "money",
    emoji: "📈",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien d'entreprises composent l'indice CAC 40 ?",
        options: ["30", "40", "50", "100"],
        correct: 1,
        explainer: "Le CAC 40 regroupe les 40 plus grosses capitalisations boursieres de la place de Paris parmi les 100 plus importantes (le CAC Large 100). Cree le 31 decembre 1987 avec une base 1000, il a depasse les 8000 points pour la premiere fois en 2024."
      },
      {
        q: "Que signifie l'acronyme ETF ?",
        options: ["Echange a Terme Financier", "Exchange Traded Fund", "European Trading Floor", "Equity Trust Fund"],
        correct: 1,
        explainer: "Un ETF (Exchange Traded Fund) est un fonds indiciel cote en bourse qui replique un indice. Le premier ETF moderne, le SPDR S&P 500 (SPY), a ete lance en 1993 et reste l'un des plus traites au monde."
      },
      {
        q: "Quel marche americain est specialise dans les valeurs technologiques ?",
        options: ["NYSE", "NASDAQ", "AMEX", "Dow Jones"],
        correct: 1,
        explainer: "Le NASDAQ, cree en 1971, fut le premier marche electronique au monde. Il heberge la majorite des geants tech : Apple, Microsoft, Nvidia, Amazon, Meta, Tesla, Alphabet."
      },
      {
        q: "Quel est le ticker boursier de LVMH ?",
        options: ["LVM", "MC", "LV", "LVH"],
        correct: 1,
        explainer: "LVMH cote sous le ticker MC sur Euronext Paris, en reference a Moet & Chandon, l'une des marques fondatrices. Le groupe de Bernard Arnault a un temps depasse les 500 milliards d'euros de capitalisation en 2023."
      },
      {
        q: "Que mesure le ratio PER (Price Earnings Ratio) ?",
        options: ["Le rendement du dividende", "Le prix divise par le benefice par action", "La volatilite du titre", "Le ratio d'endettement"],
        correct: 1,
        explainer: "Le PER divise le cours de l'action par le benefice net par action. Un PER de 15 signifie qu'il faut 15 annees de benefices au prix actuel pour rentabiliser l'achat. Sous 10 = potentiellement decote, au-dessus de 30 = generalement cher."
      },
      {
        q: "Qui est le PDG legendaire de Berkshire Hathaway, surnomme l'Oracle d'Omaha ?",
        options: ["Jack Bogle", "Ray Dalio", "Warren Buffett", "Carl Icahn"],
        correct: 2,
        explainer: "Warren Buffett, ne en 1930, dirige Berkshire Hathaway depuis 1965. Son approche value lui a permis de generer pres de 20% de rendement annuel moyen sur 60 ans, faisant de lui l'un des plus grands investisseurs de l'histoire."
      },
      {
        q: "Quel evenement boursier majeur s'est produit le 19 octobre 1987 ?",
        options: ["Krach de la bulle internet", "Black Monday", "Crise des subprimes", "Faillite de Lehman"],
        correct: 1,
        explainer: "Le Black Monday du 19 octobre 1987 a vu le Dow Jones perdre 22,6% en une seule seance, la plus grosse chute en pourcentage de l'histoire. Le trading algorithmique fut pointe du doigt comme amplificateur."
      },
      {
        q: "Quelle est la principale difference entre actions et obligations ?",
        options: ["Aucune", "Les actions donnent un droit de propriete, les obligations sont des creances", "Les obligations rapportent plus", "Les actions sont garanties"],
        correct: 1,
        explainer: "Une action represente une part du capital (tu es co-proprietaire), une obligation est un pret a une entreprise ou un Etat avec interets fixes. Les actions sont plus risquees mais historiquement plus rentables (~7% reels/an sur le long terme)."
      },
      {
        q: "Qu'est-ce qu'un dividende ?",
        options: ["Une taxe sur les actions", "Une part du benefice reversee aux actionnaires", "Un type d'obligation", "Une commission de courtage"],
        correct: 1,
        explainer: "Le dividende est la fraction du benefice net qu'une entreprise distribue a ses actionnaires. TotalEnergies, LVMH ou Sanofi figurent parmi les plus gros payeurs du CAC 40, avec des rendements souvent entre 3% et 6%."
      },
      {
        q: "Quel scandale a fait chuter Enron en 2001 ?",
        options: ["Insider trading", "Fraude comptable", "Vol de donnees", "Manipulation de cours"],
        correct: 1,
        explainer: "Enron, geant texan de l'energie, dissimulait des dettes massives via des entites hors-bilan. Sa faillite en decembre 2001 a entraine la disparition du cabinet d'audit Arthur Andersen et fait passer la loi Sarbanes-Oxley en 2002."
      }
    ]
  },
  {
    slug: "quiz-fiscalite-francaise-impots",
    title: "Quiz Fiscalite francaise : impots, TVA, tranches et bareme",
    description: "Que sais-tu vraiment des impots en France ? Tranches d'imposition, TVA, IS, prelevement a la source, niches fiscales : le quiz complet 2026.",
    topic: "money",
    emoji: "💸",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est le taux normal de TVA en France ?",
        options: ["18%", "19,6%", "20%", "22%"],
        correct: 2,
        explainer: "Le taux normal de TVA en France est de 20% depuis le 1er janvier 2014 (releve de 19,6%). Il existe aussi un taux intermediaire a 10%, un taux reduit a 5,5% (alimentation, livres) et un taux super-reduit a 2,1% (medicaments rembourses, presse)."
      },
      {
        q: "Combien de tranches compte le bareme progressif de l'IR en 2026 ?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explainer: "L'impot sur le revenu francais compte 5 tranches : 0%, 11%, 30%, 41% et 45%. Chaque tranche ne s'applique qu'a la portion de revenu comprise dans son intervalle, c'est le principe de la progressivite par tranches."
      },
      {
        q: "Quel est le taux normal de l'Impot sur les Societes (IS) en France ?",
        options: ["15%", "25%", "30%", "33,33%"],
        correct: 1,
        explainer: "Depuis 2022, l'IS francais est a 25% pour toutes les entreprises (contre 33,33% historiquement). Un taux reduit de 15% s'applique sur les premiers 42 500 euros de benefice pour les PME realisant moins de 10M de CA."
      },
      {
        q: "Depuis quelle annee le prelevement a la source est-il en vigueur en France ?",
        options: ["2017", "2018", "2019", "2020"],
        correct: 2,
        explainer: "Le prelevement a la source de l'impot sur le revenu est entre en vigueur le 1er janvier 2019, apres une annee blanche (2018) pour eviter une double imposition. L'employeur ou la caisse de retraite retient directement l'impot sur le bulletin."
      },
      {
        q: "Qu'est-ce que la flat tax (PFU) ?",
        options: ["Une taxe sur l'essence", "Un prelevement forfaitaire unique de 30% sur les revenus du capital", "Une TVA forfaitaire", "Une taxe sur les milliardaires"],
        correct: 1,
        explainer: "Le Prelevement Forfaitaire Unique (PFU) de 30% (12,8% d'impot + 17,2% de prelevements sociaux) s'applique depuis 2018 sur les dividendes, plus-values mobilieres et interets. On peut opter pour le bareme progressif si plus avantageux."
      },
      {
        q: "Quel impot remplace l'ISF depuis 2018 ?",
        options: ["IFI", "IGF", "ISI", "ITV"],
        correct: 0,
        explainer: "L'Impot sur la Fortune Immobiliere (IFI) a remplace l'Impot de Solidarite sur la Fortune (ISF) en 2018. Il ne taxe plus que le patrimoine immobilier au-dessus de 1,3M d'euros, pas les actifs financiers."
      },
      {
        q: "Quel est le quotient familial maximum pour un enfant en garde alternee ?",
        options: ["0,25 part", "0,5 part", "1 part", "0,75 part"],
        correct: 0,
        explainer: "Chaque parent en garde alternee compte 0,25 part fiscale par enfant (0,5 a partir du 3eme). Le plafonnement du quotient familial limite l'avantage a 1 791 euros par demi-part en 2025."
      },
      {
        q: "Qu'est-ce que le bouclier fiscal ?",
        options: ["Une niche fiscale", "Un plafond limitant la somme des impots a 50% des revenus", "Une assurance fiscale", "Un dispositif Pinel"],
        correct: 1,
        explainer: "Le bouclier fiscal a plafonne les impots directs a 50% des revenus entre 2007 et 2012, sous Sarkozy. Supprime par Hollande, il a ete remplace par le plafonnement de l'ISF puis de l'IFI a 75% des revenus."
      },
      {
        q: "Quel est le taux des prelevements sociaux (CSG, CRDS, etc.) sur les revenus du capital ?",
        options: ["9,7%", "15,5%", "17,2%", "20%"],
        correct: 2,
        explainer: "Les prelevements sociaux sur les revenus du capital (interets, dividendes, plus-values, revenus fonciers) sont de 17,2% : 9,2% CSG + 0,5% CRDS + 7,5% prelevement de solidarite."
      },
      {
        q: "A partir de quelle plus-value une residence principale est-elle imposee a la revente ?",
        options: ["Au-dela de 100 000 euros", "Au-dela de 200 000 euros", "Jamais", "Toujours"],
        correct: 2,
        explainer: "La plus-value sur la vente de la residence principale est totalement exoneree d'impot en France, sans plafond ni duree de detention minimum. C'est l'une des niches fiscales les plus puissantes du systeme francais."
      }
    ]
  },
  {
    slug: "quiz-epargne-livret-pea-assurance-vie",
    title: "Quiz Epargne francaise : Livret A, PEA, assurance vie",
    description: "Livret A, LDDS, PEA, assurance vie, PER : maitrises-tu vraiment les placements prefere des Francais ? Decouvre les plafonds, taux et fiscalite.",
    topic: "money",
    emoji: "🏦",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est le plafond du Livret A pour un particulier ?",
        options: ["15 300 euros", "22 950 euros", "30 000 euros", "76 500 euros"],
        correct: 1,
        explainer: "Le plafond du Livret A est de 22 950 euros depuis 2013 pour les particuliers. Pour les associations, il monte a 76 500 euros. Les interets sont totalement exoneres d'impots et de prelevements sociaux."
      },
      {
        q: "Quelle est la duree minimum de detention d'un PEA pour beneficier de l'exoneration fiscale ?",
        options: ["3 ans", "5 ans", "8 ans", "10 ans"],
        correct: 1,
        explainer: "Apres 5 ans de detention, les gains du PEA (Plan d'Epargne en Actions) sont exoneres d'impot sur le revenu (seuls les prelevements sociaux de 17,2% restent dus). Plafond de versements : 150 000 euros."
      },
      {
        q: "En quelle annee le Livret A a-t-il ete cree ?",
        options: ["1789", "1818", "1850", "1900"],
        correct: 1,
        explainer: "Le Livret A a ete cree par Louis XVIII en 1818 pour aider la France a rembourser sa dette napoleonienne. C'est le plus vieux produit d'epargne au monde encore en activite, distribue historiquement par la Caisse d'Epargne."
      },
      {
        q: "Quel placement est surnomme la 'pierre-papier' ?",
        options: ["Le PEA", "La SCPI", "L'assurance vie", "Le PER"],
        correct: 1,
        explainer: "Les SCPI (Societes Civiles de Placement Immobilier) permettent d'investir dans l'immobilier locatif via des parts. Rendement moyen ~4-5% par an, ticket d'entree des quelques centaines d'euros. Frais d'entree eleves (~10%)."
      },
      {
        q: "Apres combien d'annees l'assurance vie offre-t-elle un abattement fiscal optimal ?",
        options: ["4 ans", "8 ans", "12 ans", "15 ans"],
        correct: 1,
        explainer: "Apres 8 ans, les gains rachetes beneficient d'un abattement annuel de 4 600 euros (9 200 euros pour un couple) avant taxation a 7,5% jusqu'a 150 000 euros de versements puis 12,8%."
      },
      {
        q: "Quel est le taux du Livret A au 1er fevrier 2025 ?",
        options: ["1%", "2,4%", "3%", "4%"],
        correct: 1,
        explainer: "Le taux du Livret A est de 2,4% depuis le 1er fevrier 2025 (contre 3% precedemment). Il est calcule semestriellement selon une formule basee sur l'inflation et les taux interbancaires. Il avait atteint 8,5% en 1981."
      },
      {
        q: "Quelle somme peut-on investir maximum sur un PEA classique ?",
        options: ["75 000 euros", "100 000 euros", "150 000 euros", "200 000 euros"],
        correct: 2,
        explainer: "Le plafond du PEA est de 150 000 euros de versements (depuis 2014). Il existe aussi le PEA-PME plafonne a 225 000 euros au total avec le PEA classique, dedie aux PME europeennes."
      },
      {
        q: "Qu'est-ce que le PER ?",
        options: ["Plan Epargne Retraite", "Placement Epargne Risque", "Plan Europeen de Retraite", "Pret Epargne Rente"],
        correct: 0,
        explainer: "Le Plan d'Epargne Retraite (PER), cree par la loi PACTE en 2019, remplace les anciens PERP, Madelin et autres. Les versements sont deductibles du revenu imposable (limite annuelle). Sortie en capital ou rente a la retraite."
      },
      {
        q: "Quel est le placement prefere des Francais en encours total ?",
        options: ["Livret A", "Assurance vie", "PEA", "Compte courant"],
        correct: 1,
        explainer: "L'assurance vie totalise plus de 1 900 milliards d'euros d'encours fin 2024, contre environ 425 milliards pour le Livret A. C'est largement le premier placement des menages francais."
      },
      {
        q: "Le LDDS (Livret de Developpement Durable et Solidaire) a quel plafond ?",
        options: ["6 000 euros", "10 000 euros", "12 000 euros", "15 000 euros"],
        correct: 2,
        explainer: "Le LDDS est plafonne a 12 000 euros depuis 2013 et offre le meme taux que le Livret A (2,4% en 2025). Les fonds collectes financent en partie l'economie sociale et solidaire et les travaux d'economie d'energie."
      }
    ]
  },
  {
    slug: "quiz-crypto-bitcoin-ethereum-bases",
    title: "Quiz Crypto : Bitcoin, Ethereum, blockchain et bases",
    description: "Bitcoin, Ethereum, blockchain, halving, NFT, stablecoins : que sais-tu vraiment du monde crypto ? Quiz complet pour debutants et confirmes.",
    topic: "money",
    emoji: "🪙",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui est l'inventeur (suppose) du Bitcoin ?",
        options: ["Vitalik Buterin", "Satoshi Nakamoto", "Elon Musk", "Hal Finney"],
        correct: 1,
        explainer: "Bitcoin a ete cree en 2008 par Satoshi Nakamoto, pseudonyme dont l'identite reelle reste inconnue. Le whitepaper a ete publie le 31 octobre 2008 et le premier bloc (genesis block) mine le 3 janvier 2009."
      },
      {
        q: "Quel est le nombre maximum de Bitcoins qui existera jamais ?",
        options: ["10 millions", "21 millions", "100 millions", "Illimite"],
        correct: 1,
        explainer: "L'offre de Bitcoin est plafonnee a 21 millions d'unites par le code source, ce qui en fait un actif deflationniste. Plus de 19,8 millions sont deja mines en 2026. Le dernier sera produit vers l'an 2140."
      },
      {
        q: "Qu'est-ce que le halving du Bitcoin ?",
        options: ["Une faille de securite", "Division par deux de la recompense des mineurs", "Un fork", "Une consolidation"],
        correct: 1,
        explainer: "Le halving divise par deux la recompense des mineurs tous les 210 000 blocs (~4 ans). Le 4eme halving d'avril 2024 a fait passer la recompense de 6,25 a 3,125 BTC par bloc, alimentant historiquement les bull runs."
      },
      {
        q: "Quel mecanisme de consensus utilise Ethereum depuis 'The Merge' en 2022 ?",
        options: ["Proof of Work", "Proof of Stake", "Proof of Authority", "Proof of History"],
        correct: 1,
        explainer: "Ethereum est passe du Proof of Work au Proof of Stake le 15 septembre 2022 (The Merge), reduisant sa consommation energetique de ~99,95%. Les validateurs doivent staker 32 ETH pour participer."
      },
      {
        q: "Que signifie l'acronyme NFT ?",
        options: ["New Financial Token", "Non-Fungible Token", "Network File Transfer", "National Fund Trust"],
        correct: 1,
        explainer: "Un NFT (Non-Fungible Token) est un jeton unique non interchangeable sur une blockchain. Le marche a explose en 2021 avec Bored Ape Yacht Club, CryptoPunks et la vente Beeple a 69,3M$ chez Christie's."
      },
      {
        q: "Quel stablecoin est emis par Tether ?",
        options: ["USDC", "USDT", "BUSD", "DAI"],
        correct: 1,
        explainer: "USDT (Tether) est le plus grand stablecoin par capitalisation (~150 milliards de dollars en 2026). Emis par Tether Limited, il est cense etre adosse 1:1 au dollar, bien que la transparence des reserves ait souvent ete contestee."
      },
      {
        q: "Quelle plateforme crypto a fait faillite en novembre 2022 dans un scandale retentissant ?",
        options: ["Binance", "Coinbase", "FTX", "Kraken"],
        correct: 2,
        explainer: "FTX, fondee par Sam Bankman-Fried, s'est effondree le 11 novembre 2022 apres revelation d'un trou de ~8 milliards de dollars. SBF a ete condamne a 25 ans de prison en mars 2024 pour fraude."
      },
      {
        q: "Quelle est la plus petite unite de Bitcoin ?",
        options: ["Le millibitcoin", "Le satoshi", "Le pico", "Le bitcent"],
        correct: 1,
        explainer: "Le satoshi est la plus petite unite de Bitcoin (1 BTC = 100 millions de satoshis), nommee en hommage a Satoshi Nakamoto. A 100 000 dollars le BTC, 1 satoshi vaut 0,001 dollar."
      },
      {
        q: "Quelle blockchain est connue pour ses transactions tres rapides et peu chere, lancee en 2020 ?",
        options: ["Cardano", "Solana", "Polkadot", "Avalanche"],
        correct: 1,
        explainer: "Solana, lancee en 2020 par Anatoly Yakovenko, traite theoriquement jusqu'a 65 000 transactions/seconde grace au Proof of History. Frais de quelques centimes, mais critiquee pour ses pannes regulieres."
      },
      {
        q: "Qu'est-ce qu'un cold wallet ?",
        options: ["Un portefeuille bloque par l'Etat", "Un stockage hors-ligne des cryptos", "Un wallet pour stablecoins", "Un wallet d'echange"],
        correct: 1,
        explainer: "Un cold wallet (portefeuille froid) stocke les cles privees hors-ligne, par exemple sur une cle materielle Ledger ou Trezor. C'est la methode la plus sure contre le piratage, contrairement aux hot wallets connectes a Internet."
      }
    ]
  },
  {
    slug: "quiz-immobilier-france-achat-location",
    title: "Quiz Immobilier France : achat, location, loi Pinel",
    description: "Achat, frais de notaire, taux immo, loi Pinel, taxe fonciere, viager : que sais-tu du marche immobilier francais en 2026 ?",
    topic: "money",
    emoji: "🏠",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel pourcentage du prix represente en moyenne les frais de notaire dans l'ancien ?",
        options: ["2-3%", "5-6%", "7-8%", "10-12%"],
        correct: 2,
        explainer: "Les 'frais de notaire' dans l'ancien sont d'environ 7 a 8% du prix, dont seulement ~1% pour le notaire lui-meme. Le reste : droits de mutation (~5,8%) et taxes diverses. Dans le neuf, ils tombent a 2-3%."
      },
      {
        q: "Quel dispositif fiscal de defiscalisation immobiliere a pris fin au 31 decembre 2024 ?",
        options: ["Loi Censi-Bouvard", "Loi Pinel", "Loi Malraux", "Loi Denormandie"],
        correct: 1,
        explainer: "La loi Pinel, creee en 2014 pour encourager l'investissement locatif neuf, a pris fin le 31 decembre 2024. Elle permettait jusqu'a 21% de reduction d'impot sur 12 ans en echange de loyers plafonnes."
      },
      {
        q: "Qu'est-ce que la SCPI ?",
        options: ["Societe Civile de Placement Immobilier", "Societe Cooperative de Pret Immobilier", "Syndicat de Copropriete", "Service Civil de Patrimoine"],
        correct: 0,
        explainer: "Les SCPI permettent d'investir dans l'immobilier locatif via des parts. Avec ~1 000 euros on devient associe d'un parc de bureaux/commerces/logements gere par une societe de gestion. Rendement moyen 4-5%/an."
      },
      {
        q: "Quel est le record du prix au m2 a Paris en 2024 ?",
        options: ["12 000 euros", "15 000 euros", "20 000 euros", "25 000 euros"],
        correct: 1,
        explainer: "Le prix moyen a Paris tournait autour de 9 500 euros/m2 fin 2024, mais le 6eme et le 7eme arrondissement depassent 15 000 euros/m2. Certaines transactions exceptionnelles atteignent 30 000+ euros/m2 dans le triangle d'or."
      },
      {
        q: "Combien de temps dure en moyenne un pret immobilier en France en 2024 ?",
        options: ["10 ans", "15 ans", "20 ans", "25 ans"],
        correct: 3,
        explainer: "La duree moyenne des prets immobiliers atteint environ 22-25 ans en France en 2024, contre 15 ans dans les annees 2000. Plafond legal HCSF : 25 ans (27 ans avec differe de 2 ans pour le neuf)."
      },
      {
        q: "Qu'est-ce que le viager occupe ?",
        options: ["Une location longue duree", "Une vente avec rente et droit d'occupation pour le vendeur", "Un pret entre particuliers", "Une copropriete"],
        correct: 1,
        explainer: "Le viager occupe permet au vendeur (le credirentier, souvent age) de continuer a habiter son bien jusqu'a son deces en echange d'un bouquet (somme initiale) et d'une rente viagere mensuelle versee par l'acheteur."
      },
      {
        q: "Quelle taxe est payee par le proprietaire ET le locataire ?",
        options: ["Taxe fonciere", "Taxe d'habitation", "Aucune", "Les deux"],
        correct: 2,
        explainer: "La taxe d'habitation sur la residence principale a ete supprimee pour tous les menages au 1er janvier 2023. La taxe fonciere reste due par le seul proprietaire. La TEOM (ordures menageres) est souvent refacturee au locataire."
      },
      {
        q: "Que signifie l'acronyme DPE ?",
        options: ["Dossier de Pret Equilibre", "Diagnostic de Performance Energetique", "Droit de Preemption", "Duree de Preavis"],
        correct: 1,
        explainer: "Le DPE evalue la consommation energetique et les emissions de GES d'un logement, note de A (excellent) a G (passoire thermique). Depuis 2023, les logements G+ ne peuvent plus etre loues, G en 2025, F en 2028."
      },
      {
        q: "Quel taux moyen d'emprunt immobilier sur 20 ans en France debut 2025 ?",
        options: ["1%", "2,5%", "3,5%", "5%"],
        correct: 2,
        explainer: "Apres avoir grimpe jusqu'a 4,5% fin 2023, les taux immobiliers sur 20 ans ont reflue vers 3,2-3,5% debut 2025 grace a la baisse des taux directeurs de la BCE. Niveau bas historique : 1% en 2021."
      },
      {
        q: "Quelle ville francaise a connu la plus forte hausse immobiliere des annees 2010 ?",
        options: ["Paris", "Bordeaux", "Lille", "Marseille"],
        correct: 1,
        explainer: "Bordeaux a vu ses prix exploser apres l'arrivee de la LGV en 2017 (Paris en 2h04). La ville a gagne plus de 80% entre 2010 et 2020, devenant l'une des plus cheres de province a cote de Lyon et Annecy."
      }
    ]
  },
  {
    slug: "quiz-banques-francaises-neobanques",
    title: "Quiz Banques francaises : BNP, Credit Agricole, neobanques",
    description: "BNP Paribas, Credit Agricole, Revolut, N26, Boursorama : connais-tu les acteurs bancaires francais et europeens, leurs origines et leurs scandales ?",
    topic: "money",
    emoji: "🏦",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle est la plus ancienne banque encore en activite en France ?",
        options: ["Credit Agricole", "Societe Generale", "BNP Paribas", "Caisse des Depots"],
        correct: 3,
        explainer: "La Caisse des Depots et Consignations, creee par Louis XVIII en 1816, est l'institution financiere francaise la plus ancienne encore active. BNP Paribas resulte de la fusion BNP (1966) et Paribas (1872) en 2000."
      },
      {
        q: "Quelle neobanque a ete creee a Berlin en 2013 ?",
        options: ["Revolut", "N26", "Bunq", "Qonto"],
        correct: 1,
        explainer: "N26 a ete fondee a Berlin en 2013 par Valentin Stalf et Maximilian Tayenthal. Premiere neobanque allemande a obtenir une licence bancaire europeenne en 2016. Plus de 8 millions de clients en 2024."
      },
      {
        q: "Quelle banque mutualiste regroupe Caisses Regionales et federations en France ?",
        options: ["BNP Paribas", "Credit Agricole", "HSBC", "ING"],
        correct: 1,
        explainer: "Le Credit Agricole, ne en 1894, est organise en 39 Caisses Regionales mutualistes detenant Credit Agricole SA (cotee). Premiere banque francaise par les depots, surnommee la 'Banque Verte'."
      },
      {
        q: "En quelle annee a ete fondee Revolut ?",
        options: ["2010", "2013", "2015", "2018"],
        correct: 2,
        explainer: "Revolut a ete fondee a Londres en juillet 2015 par Nikolay Storonsky et Vlad Yatsenko. Plus de 50 millions de clients dans le monde fin 2024, valorisation de 45 milliards de dollars."
      },
      {
        q: "Quelle banque francaise a ete impliquee dans l'affaire Kerviel en 2008 ?",
        options: ["BNP Paribas", "Societe Generale", "Credit Agricole", "BPCE"],
        correct: 1,
        explainer: "Jerome Kerviel, trader de la Societe Generale, a fait perdre 4,9 milliards d'euros a la banque en janvier 2008 par des positions cachees. Condamne a 5 ans dont 3 ferme, et 1 euro symbolique de dommages apres revision."
      },
      {
        q: "Quelle banque en ligne francaise appartient au groupe Societe Generale ?",
        options: ["Boursorama", "Fortuneo", "BforBank", "Hello bank!"],
        correct: 0,
        explainer: "Boursorama Banque, premiere banque en ligne francaise par le nombre de clients (~7 millions), appartient au groupe Societe Generale depuis 2002. Hello bank! est la marque digitale de BNP Paribas."
      },
      {
        q: "Quelle banque a ete creee par les commercants et artisans en 1818 ?",
        options: ["Banque Populaire", "Caisse d'Epargne", "Credit Mutuel", "Credit Lyonnais"],
        correct: 1,
        explainer: "La Caisse d'Epargne a ete fondee en 1818 par les philanthropes Benjamin Delessert et le duc de La Rochefoucauld-Liancourt pour permettre aux classes populaires d'epargner. Fusion avec Banque Populaire en 2009 = BPCE."
      },
      {
        q: "Quelle est la plus grosse banque par capitalisation en zone euro en 2024 ?",
        options: ["BNP Paribas", "Santander", "Deutsche Bank", "Credit Suisse"],
        correct: 1,
        explainer: "Le Santander espagnol a depasse BNP Paribas en capitalisation boursiere en 2024, avec ~80 milliards d'euros. La banque francaise reste neanmoins la premiere par le total des actifs en zone euro."
      },
      {
        q: "Que signifie l'acronyme IBAN ?",
        options: ["International Bank Account Number", "Identifiant Bancaire Anonyme National", "International Banking Authority Network", "Inter-Bank Account Network"],
        correct: 0,
        explainer: "L'IBAN (International Bank Account Number) est le format standard d'identifiant de compte bancaire international. Un IBAN francais commence par FR suivi de 25 caracteres. Norme creee en 1997 par l'ECBS."
      },
      {
        q: "Quelle banque suisse a fait faillite en mars 2023, rachetee par UBS ?",
        options: ["UBS", "Credit Suisse", "Julius Baer", "Pictet"],
        correct: 1,
        explainer: "Credit Suisse, vieille de 167 ans, a ete rachetee en urgence le 19 mars 2023 par UBS pour 3 milliards de francs suisses, sous l'orchestration de la Banque Nationale Suisse, pour eviter un effondrement systemique."
      }
    ]
  },
  {
    slug: "quiz-histoire-argent-monnaie-euro",
    title: "Quiz Histoire de l'argent : monnaie, euro, etalon-or",
    description: "Des premieres pieces lydiennes au passage a l'euro, en passant par l'etalon-or, le franc et les hyperinflations : voyage dans l'histoire monetaire.",
    topic: "money",
    emoji: "💰",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Dans quelle civilisation antique sont apparues les premieres pieces de monnaie en metal frappe ?",
        options: ["Egypte", "Lydie", "Rome", "Chine"],
        correct: 1,
        explainer: "Les premieres pieces frappees apparaissent vers 650 av. J.-C. en Lydie (Turquie actuelle), sous le roi Aleyatte II. Elles etaient en electrum, alliage naturel d'or et d'argent. Cresus generalisera bimetallisme or/argent."
      },
      {
        q: "En quelle annee l'euro a-t-il ete introduit physiquement (pieces et billets) ?",
        options: ["1999", "2000", "2001", "2002"],
        correct: 3,
        explainer: "Les pieces et billets en euros sont entres en circulation le 1er janvier 2002 dans 12 pays. L'euro existait deja en monnaie scripturale depuis le 1er janvier 1999 (avec un taux fixe : 1 euro = 6,55957 francs)."
      },
      {
        q: "Qui a aboli la convertibilite du dollar en or en 1971 ?",
        options: ["John F. Kennedy", "Richard Nixon", "Lyndon Johnson", "Jimmy Carter"],
        correct: 1,
        explainer: "Richard Nixon a suspendu la convertibilite du dollar en or le 15 aout 1971 (le 'Nixon Shock'), mettant fin au systeme de Bretton Woods (1944). Depuis, toutes les grandes monnaies sont fiduciaires, sans contrepartie en or."
      },
      {
        q: "Quel pays a connu la pire hyperinflation du XXe siecle, atteignant 41 900 000 000 000 000% en 2008 ?",
        options: ["Allemagne", "Argentine", "Zimbabwe", "Venezuela"],
        correct: 2,
        explainer: "Le Zimbabwe a connu une hyperinflation legendaire culminant a 89,7 trillions de % par mois en novembre 2008. Un billet de 100 000 milliards de dollars zimbabweens a ete imprime. La monnaie a ete abandonnee en 2009."
      },
      {
        q: "Comment s'appelait la monnaie francaise avant le franc germinal ?",
        options: ["L'ecu", "La livre tournois", "Le denier", "Le louis"],
        correct: 1,
        explainer: "La livre tournois etait la monnaie de compte francaise du Moyen Age a 1795. Le franc germinal a ete cree par Napoleon le 7 avril 1803 (17 germinal an XI). Il a contenu la meme quantite d'or jusqu'en 1928."
      },
      {
        q: "Combien de pays utilisent l'euro comme monnaie officielle en 2026 ?",
        options: ["17", "20", "23", "27"],
        correct: 1,
        explainer: "20 pays composent la zone euro en 2026 apres l'entree de la Croatie (2023) et de la Bulgarie (2025). Les 7 pays UE hors zone euro : Danemark, Suede, Pologne, Hongrie, Roumanie, Tchequie, Hongrie. Mona-Vati-SM utilisent aussi l'euro."
      },
      {
        q: "Quel est le symbole du yen japonais ?",
        options: ["¥", "Y$", "JP", "円"],
        correct: 0,
        explainer: "Le yen utilise le symbole ¥ (ou 円 en kanji). Cree en 1871 pour moderniser le systeme monetaire japonais inspire du systeme decimal occidental, il remplacait le ryo de l'epoque Edo."
      },
      {
        q: "Que represente le terme 'fiat money' ?",
        options: ["Monnaie en or", "Monnaie sans valeur intrinseque adossee a la confiance dans l'Etat", "Monnaie de paiement de l'industrie auto", "Monnaie privee"],
        correct: 1,
        explainer: "La 'fiat money' (monnaie fiduciaire) tire sa valeur du decret de l'Etat ('fiat' = 'qu'il soit' en latin) et de la confiance des utilisateurs, sans contrepartie en metal precieux. C'est le cas de toutes les grandes devises depuis 1971."
      },
      {
        q: "Quel etait le taux de change fixe euro/franc lors du passage a l'euro ?",
        options: ["1 EUR = 5,90 FRF", "1 EUR = 6,55957 FRF", "1 EUR = 7,00 FRF", "1 EUR = 6,00 FRF"],
        correct: 1,
        explainer: "Le taux a ete fixe irrevocablement le 31 decembre 1998 a 1 euro = 6,55957 francs. Choix d'un taux a 6 chiffres significatifs pour eviter les arrondis abusifs. Encore aujourd'hui, beaucoup de Francais font la conversion mentale."
      },
      {
        q: "Quelle est l'institution responsable de la politique monetaire de la zone euro ?",
        options: ["FMI", "BCE", "Banque mondiale", "Eurogroupe"],
        correct: 1,
        explainer: "La Banque Centrale Europeenne (BCE), basee a Francfort, fixe les taux directeurs de la zone euro et controle l'inflation depuis 1998. Christine Lagarde la preside depuis novembre 2019, succedant a Mario Draghi."
      }
    ]
  },
  {
    slug: "quiz-inflation-economie-comprendre",
    title: "Quiz Inflation : comprendre l'economie en 10 questions",
    description: "Inflation, deflation, stagflation, taux directeurs, IPC, pouvoir d'achat : comprends enfin les concepts economiques qui font la une.",
    topic: "money",
    emoji: "📊",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Que mesure l'IPC en France ?",
        options: ["Indice de la Productivite Commerciale", "Indice des Prix a la Consommation", "Indice du Pouvoir Cumule", "Indice de Performance Civique"],
        correct: 1,
        explainer: "L'Indice des Prix a la Consommation (IPC), calcule par l'INSEE, mesure les variations de prix d'un panier de biens et services representatif. Il sert a calculer l'inflation et a indexer SMIC, retraites, loyers."
      },
      {
        q: "Quel pic d'inflation la France a-t-elle connu en 2022 ?",
        options: ["3%", "5%", "6,1%", "8%"],
        correct: 2,
        explainer: "L'inflation a culmine a 6,1% sur un an en France en fevrier 2023 (INSEE), portee par l'energie (post-guerre Ukraine) et l'alimentation. Pic anterieur : ~14% en 1981. Cible BCE : 2% a moyen terme."
      },
      {
        q: "Qu'est-ce que la stagflation ?",
        options: ["Forte croissance + faible inflation", "Recession + forte inflation", "Plein emploi + deflation", "Croissance moyenne stable"],
        correct: 1,
        explainer: "La stagflation combine stagnation economique (chomage eleve, croissance faible) et forte inflation. Phenomene rare et redoute, illustre par les chocs petroliers des annees 1970, ou theoriquement les deux s'excluent."
      },
      {
        q: "Qui a invente le concept de 'main invisible' ?",
        options: ["Karl Marx", "John Maynard Keynes", "Adam Smith", "David Ricardo"],
        correct: 2,
        explainer: "Adam Smith, dans La Richesse des Nations (1776), evoque la 'main invisible' du marche : la poursuite des interets individuels produit, sans intention, le bien commun. Fondement liberal de l'economie moderne."
      },
      {
        q: "Que provoque generalement une baisse des taux directeurs ?",
        options: ["Une recession", "Une relance economique via crediit moins cher", "Une baisse de l'inflation", "Une hausse du chomage"],
        correct: 1,
        explainer: "Une baisse des taux directeurs (de la BCE par exemple) rend le credit moins cher pour les banques, donc pour les menages et entreprises. Cela stimule l'investissement et la consommation, donc la croissance et... l'inflation."
      },
      {
        q: "Combien de fois la BCE a-t-elle baisse ses taux en 2024 ?",
        options: ["1 fois", "2 fois", "3 fois", "4 fois"],
        correct: 3,
        explainer: "La BCE a baisse ses taux directeurs 4 fois en 2024 (juin, septembre, octobre, decembre), faisant passer le taux de depot de 4% a 3%. Premieres baisses depuis 2019 apres le cycle de hausses anti-inflation 2022-2023."
      },
      {
        q: "Qu'est-ce que la deflation ?",
        options: ["Baisse de la croissance", "Baisse generalisee des prix", "Hausse du chomage", "Devaluation de la monnaie"],
        correct: 1,
        explainer: "La deflation est une baisse generalisee et durable des prix. Apparemment positive, elle est en fait redoutee car elle entraine reports d'achats, baisse de l'activite, chomage. Le Japon en a souffert pendant 20 ans (1990-2010)."
      },
      {
        q: "Quel economiste a defendu l'intervention de l'Etat pour relancer l'economie ?",
        options: ["Milton Friedman", "Friedrich Hayek", "John Maynard Keynes", "Joseph Schumpeter"],
        correct: 2,
        explainer: "John Maynard Keynes (1883-1946) prone la relance par la depense publique en periode de crise (sa Theorie Generale, 1936). Le keynesianisme a domine apres 1945 jusqu'a la stagflation des annees 1970."
      },
      {
        q: "Quel est l'effet typique d'une forte inflation sur l'epargne placee sur un livret a 2% ?",
        options: ["Gain de pouvoir d'achat", "Stable", "Perte de pouvoir d'achat", "Gain proportionnel"],
        correct: 2,
        explainer: "Si l'inflation est de 5% et le livret rapporte 2%, le rendement reel est de -3% : tu perds 3% de pouvoir d'achat par an. C'est pourquoi en periode d'inflation forte, l'epargne 'sure' perd de la valeur reelle."
      },
      {
        q: "Quelle agence francaise produit les statistiques officielles ?",
        options: ["AFP", "INSEE", "AMF", "BPI"],
        correct: 1,
        explainer: "L'Institut National de la Statistique et des Etudes Economiques (INSEE), cree en 1946 et base a Montrouge, produit les statistiques officielles : inflation, croissance, chomage, demographie, recensement."
      }
    ]
  },
  {
    slug: "quiz-fraudes-financieres-arnaques-celebres",
    title: "Quiz Fraudes financieres : Madoff, FTX, Enron et autres",
    description: "Bernard Madoff, Enron, Sam Bankman-Fried, Jordan Belfort : decouvre les plus grosses fraudes financieres et arnaques de l'histoire moderne.",
    topic: "money",
    emoji: "💎",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel montant total Bernard Madoff a-t-il detourne dans sa pyramide de Ponzi ?",
        options: ["1 milliard $", "10 milliards $", "65 milliards $", "100 milliards $"],
        correct: 2,
        explainer: "Bernard Madoff a oriente la plus grande pyramide de Ponzi de l'histoire, estimee a 65 milliards de dollars (incluant les rendements fictifs). Arrete en 2008, condamne a 150 ans de prison, il est mort en detention en 2021."
      },
      {
        q: "Qui a fonde FTX ?",
        options: ["Changpeng Zhao", "Sam Bankman-Fried", "Brian Armstrong", "Do Kwon"],
        correct: 1,
        explainer: "Sam Bankman-Fried (SBF) a fonde FTX en 2019. Apres l'effondrement en novembre 2022 dans un trou de 8 milliards de dollars, il a ete condamne le 28 mars 2024 a 25 ans de prison pour fraude electronique et conspiration."
      },
      {
        q: "Quelle entreprise allemande a explose en 2020 dans le scandale Wirecard ?",
        options: ["SAP", "Wirecard", "BASF", "Siemens"],
        correct: 1,
        explainer: "Wirecard, fintech cotee au DAX, a fait faillite le 25 juin 2020 apres revelation d'un trou de 1,9 milliard d'euros 'manquants'. Le COO Jan Marsalek est en fuite, le PDG Markus Braun a ete condamne en 2023."
      },
      {
        q: "Quel film raconte la vie de Jordan Belfort ?",
        options: ["The Big Short", "The Wolf of Wall Street", "Wall Street", "Margin Call"],
        correct: 1,
        explainer: "The Wolf of Wall Street (2013) de Martin Scorsese, avec Leonardo DiCaprio, raconte l'ascension et la chute de Jordan Belfort, courtier de Stratton Oakmont condamne en 1999 pour fraude boursiere de 200M$ et blanchiment."
      },
      {
        q: "Combien d'employes Enron a-t-il perdu lors de sa faillite en 2001 ?",
        options: ["5 000", "20 000", "Plus de 20 000", "100 000"],
        correct: 2,
        explainer: "La faillite d'Enron en decembre 2001 a entraine le licenciement de plus de 20 000 employes et l'evaporation de leur plan retraite (en actions Enron). Le PDG Jeffrey Skilling a ete condamne a 24 ans (libere en 2019)."
      },
      {
        q: "Quel stablecoin algorithmique a implose en mai 2022, entrainant ~40 milliards $ de pertes ?",
        options: ["DAI", "USDT", "UST (TerraUSD)", "BUSD"],
        correct: 2,
        explainer: "Le stablecoin UST de Terraform Labs (Do Kwon) a perdu son ancrage au dollar en mai 2022, declenchant l'effondrement de l'ecosysteme Terra/Luna et detruisant ~40 milliards de dollars. Do Kwon a ete extrade aux US en 2024."
      },
      {
        q: "Qu'est-ce qu'un schema de Ponzi ?",
        options: ["Une arnaque pyramidale ou les premiers sont payes avec l'argent des derniers", "Un hedge fund risque", "Une crypto frauduleuse", "Un fonds de pension"],
        correct: 0,
        explainer: "Un schema de Ponzi promet des rendements eleves payes avec les fonds des nouveaux entrants. Nomme d'apres Charles Ponzi qui escroqua les Bostoniens en 1920 avec des coupons-reponses postaux internationaux. S'effondre toujours quand les flux entrants se tarissent."
      },
      {
        q: "Quel trader a coule la Barings Bank en 1995 ?",
        options: ["Nick Leeson", "Kweku Adoboli", "Bruno Iksil", "Jerome Kerviel"],
        correct: 0,
        explainer: "Nick Leeson a coule en fevrier 1995 la Barings Bank, plus vieille banque marchande de Londres (231 ans), apres avoir perdu 1,4 milliard de dollars sur des positions cachees sur le Nikkei. Rachete par ING pour 1 livre symbolique."
      },
      {
        q: "Quelle entreprise francaise a connu un scandale comptable retentissant en 2003 ?",
        options: ["Vivendi", "Alstom", "Total", "Areva"],
        correct: 0,
        explainer: "Vivendi Universal, sous Jean-Marie Messier, a frole la faillite en 2002 apres une expansion folle (-23 milliards de pertes). 'J6M' demissionne en juillet 2002. L'AMF inflige 1M d'amende a Messier en 2014 pour information trompeuse."
      },
      {
        q: "Quel etait le nom de la pyramide bancaire albanaise des annees 1990 qui a ruine 70% de la population ?",
        options: ["VEFA", "SUDJA", "Les pyramides albanaises", "Toutes les precedentes"],
        correct: 3,
        explainer: "En 1996-97, les schemas de Ponzi VEFA, Xhafferi, Sudja et autres ont englouti environ 1,2 milliard de dollars d'epargne, soit la moitie du PIB albanais. L'effondrement a declenche une guerre civile faisant 2 000 morts."
      }
    ]
  },
  {
    slug: "quiz-influenceurs-finance-francais",
    title: "Quiz Influenceurs finance francais : Yomi, Squeezie, Tibo",
    description: "Yomi Denzel, Hasheur, Tibo InShape, Squeezie, Mr Beast : connais-tu les fortunes des influenceurs francais et internationaux ? Quiz inedit.",
    topic: "money",
    emoji: "💵",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle est la specialite de Yomi Denzel ?",
        options: ["Bourse", "E-commerce et dropshipping", "Crypto", "Immobilier"],
        correct: 1,
        explainer: "Yomi Denzel est connu pour ses formations en e-commerce et dropshipping via Ecom Pro, vendues plusieurs centaines d'euros. Il revendique avoir gagne plusieurs millions et fait de la pub via ses videos YouTube depuis Dubai."
      },
      {
        q: "Qui est l'influenceur crypto francais derriere Hasheur ?",
        options: ["Owen Simonin", "Maxime Biaggi", "Tibo InShape", "Jean Massiet"],
        correct: 0,
        explainer: "Owen Simonin, alias Hasheur, est l'un des plus gros vulgarisateurs crypto francophones avec plus de 1 million d'abonnes YouTube depuis 2017. Il a fonde la fintech Just Mining (mining cloud et staking)."
      },
      {
        q: "Quel YouTubeur francais a depasse 20 millions d'abonnes en premier ?",
        options: ["Squeezie", "Cyprien", "Tibo InShape", "Norman"],
        correct: 0,
        explainer: "Squeezie (Lucas Hauchard) est devenu en 2023 le premier YouTubeur francais a depasser 20 millions d'abonnes. Sa chaine, creee en 2008, genere des revenus estimes a plus de 10M d'euros par an grace au sponsoring et a sa marque Yoko."
      },
      {
        q: "Combien d'argent Mr Beast a-t-il distribue dans sa video 'Last to Leave Circle' la plus virale ?",
        options: ["10 000$", "100 000$", "500 000$", "1 million $"],
        correct: 1,
        explainer: "Mr Beast (Jimmy Donaldson) est connu pour ses challenges a gros prix. Sa chaine, premiere mondiale avec plus de 350 millions d'abonnes en 2024, genere des revenus annuels estimes a 700M$ entre YouTube, MrBeast Burger, Feastables."
      },
      {
        q: "Quelle est la marque alimentaire creee par Tibo InShape ?",
        options: ["Pure Mass", "Eric Favre Pro", "Hot Bun", "TIB Nutrition"],
        correct: 2,
        explainer: "Tibo InShape (Thibaud Delapart) a lance la marque de hamburgers proteines 'Hot Bun' en partenariat avec McDonald's France en 2023. Il est aussi connu pour ses videos fitness extremes et ses positions politiques controversees."
      },
      {
        q: "Quelle plateforme permet d'investir dans des startups francaises a partir de petits tickets ?",
        options: ["Wiseed", "Anaxago", "Sowefund", "Toutes les precedentes"],
        correct: 3,
        explainer: "Wiseed, Anaxago et Sowefund sont des plateformes de crowdfunding equity francaises permettant d'investir dans des startups a partir de 100-1000 euros. Reglementees par l'AMF. Risque eleve : nombreuses faillites."
      },
      {
        q: "Qui est l'influenceur finance derriere la chaine 'La Minute Boursiere' ?",
        options: ["Olivier Seban", "Mickael Ferrari", "Marc Touati", "Quentin Romet"],
        correct: 1,
        explainer: "Mickael Ferrari, ancien trader, anime des chaines de vulgarisation boursiere en francais. Avec d'autres comme S'enrichir.fr ou Cafe de la Bourse, ils incarnent la vague de creators finance qui a explose post-Covid."
      },
      {
        q: "Pour quelle arnaque crypto plusieurs influenceurs francais ont-ils ete poursuivis en 2023 ?",
        options: ["Bitconnect", "Trade Republic", "L'AMF cible des promoteurs de plateformes non agreees", "OneCoin"],
        correct: 2,
        explainer: "L'AMF a publie en 2022-23 plusieurs listes noires d'influenceurs faisant la promotion de plateformes non agreees ou de schemas pyramidaux. La loi 'influenceurs' de juin 2023 encadre desormais les promotions crypto, paris sportifs et chirurgie esthetique."
      },
      {
        q: "Quelle est la plus grosse fortune francaise en 2024 ?",
        options: ["Francois Pinault", "Bernard Arnault", "Vincent Bollore", "Xavier Niel"],
        correct: 1,
        explainer: "Bernard Arnault (LVMH) est la premiere fortune francaise et a brievement ete la premiere fortune mondiale en 2023, devant Elon Musk. Sa fortune est estimee a ~180 milliards de dollars en 2024 par Forbes."
      },
      {
        q: "Quelle plateforme a popularise le 'WallStreetBets' en France post-GameStop 2021 ?",
        options: ["Reddit r/vosfinances", "Trade Republic", "Twitter FinTwit", "Toutes contribuent"],
        correct: 3,
        explainer: "Le mouvement WallStreetBets (janvier 2021, short squeeze GameStop) a propulse l'investissement retail. En France, r/vosfinances depasse 250 000 membres, Trade Republic recrute massivement, et FinTwit (Twitter) regroupe des milliers de traders amateurs."
      }
    ]
  },
  {
    slug: "quiz-retraite-france-systeme-comprendre",
    title: "Quiz Retraite France : reformes, points, age legal",
    description: "Reforme 2023, age legal, retraite par repartition vs capitalisation, taux plein, points Agirc-Arrco : tout savoir sur la retraite en France.",
    topic: "money",
    emoji: "🪙",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est l'age legal de depart a la retraite apres la reforme 2023 ?",
        options: ["60 ans", "62 ans", "64 ans", "65 ans"],
        correct: 2,
        explainer: "L'age legal a ete releve progressivement de 62 a 64 ans par la reforme du 14 avril 2023, a raison de 3 mois par an de 2023 a 2030. La duree de cotisation requise passe a 43 ans (172 trimestres)."
      },
      {
        q: "Quel systeme de retraite predomine en France ?",
        options: ["Capitalisation", "Repartition", "Mixte", "Aucun"],
        correct: 1,
        explainer: "La France fonctionne principalement en repartition : les cotisations des actifs financent immediatement les pensions des retraites (pacte intergenerationnel). La capitalisation existe a la marge via PER, PERCO ou les regimes additionnels."
      },
      {
        q: "Qui a cree la Securite sociale en France ?",
        options: ["Charles de Gaulle", "Leon Blum", "Ambroise Croizat", "Pierre Mendes France"],
        correct: 2,
        explainer: "Le ministre communiste Ambroise Croizat a porte les ordonnances des 4 et 19 octobre 1945 creant la Securite sociale, dont l'assurance vieillesse. Pierre Laroque a concu l'architecture du systeme. Inspire du programme du CNR."
      },
      {
        q: "Combien de regimes de retraite differents y a-t-il (encore) en France ?",
        options: ["1", "5", "Plus de 40", "Plus de 100"],
        correct: 2,
        explainer: "Il existe encore environ 42 regimes de retraite en France malgre les reformes (regime general, MSA, RSI fusionne, fonctions publiques, regimes speciaux SNCF/RATP en extinction, professions liberales, etc.). Source de complexite legendaire."
      },
      {
        q: "Comment fonctionne le regime Agirc-Arrco ?",
        options: ["Par annuites", "Par points", "Par capitalisation", "Par cotisations definies"],
        correct: 1,
        explainer: "L'Agirc-Arrco (retraite complementaire des salaries du prive) fonctionne par points : tu accumules des points pendant ta carriere, multiplies par la valeur du point au moment du depart. Valeur du point 2025 : ~1,4159 euro."
      },
      {
        q: "Quel est le taux plein de pension du regime general ?",
        options: ["40%", "50%", "60%", "75%"],
        correct: 1,
        explainer: "Le taux plein du regime general est de 50% du salaire annuel moyen des 25 meilleures annees, plafonne au PASS (47 100 euros en 2025). Sous-condition de duree de cotisation : 172 trimestres pour les natifs apres 1973."
      },
      {
        q: "Combien y a-t-il de retraites en France en 2024 ?",
        options: ["10 millions", "13 millions", "17 millions", "20 millions"],
        correct: 2,
        explainer: "Il y a environ 17 millions de retraites en France en 2024, pour ~28 millions d'actifs. Le ratio cotisants/retraites s'est degrade de 4:1 dans les annees 1960 a ~1,7:1 aujourd'hui. C'est le coeur du probleme de financement."
      },
      {
        q: "Quel est le montant moyen mensuel d'une pension de retraite en France en 2024 ?",
        options: ["900 euros", "1 200 euros", "1 530 euros", "2 000 euros"],
        correct: 2,
        explainer: "La pension moyenne tous regimes confondus etait d'environ 1 530 euros brut par mois en 2024 selon la DREES. Mais avec d'enormes ecarts : ~1 850 euros pour les hommes vs ~1 270 euros pour les femmes (ecart de 38%)."
      },
      {
        q: "Quel age permet la 'retraite a taux plein automatique' meme sans trimestres ?",
        options: ["65 ans", "67 ans", "70 ans", "75 ans"],
        correct: 1,
        explainer: "A 67 ans, on obtient le taux plein automatiquement, meme sans avoir cotise les 172 trimestres requis. C'est l'age de la 'liquidation a taux plein sans decote', particulierement important pour les carrieres heurtees ou les femmes."
      },
      {
        q: "Que signifie l'acronyme CSG-Deductible souvent vu sur la fiche de paie retraite ?",
        options: ["Contribution Sociale Generale Deductible", "Caisse Sante Generale Deductible", "Contribution Securite Generale Deductible", "Caisse Securite Generationnelle Deductible"],
        correct: 0,
        explainer: "La CSG (Contribution Sociale Generalisee) finance la protection sociale. Sur les pensions, le taux normal est de 8,3% dont 5,9% deductibles du revenu imposable. Creee par Michel Rocard en 1991, elle rapporte 130+ milliards/an."
      }
    ]
  },
  {
    slug: "quiz-arnaques-pieges-financiers-eviter",
    title: "Quiz Arnaques financieres : pieges courants a eviter",
    description: "Phishing bancaire, faux conseillers, pump and dump, arnaque au president, scam crypto : reconnais et evite les arnaques financieres modernes.",
    topic: "money",
    emoji: "💳",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qu'est-ce que le phishing bancaire ?",
        options: ["Une attaque informatique", "Vol de donnees bancaires via faux messages/sites", "Une fraude a la carte bancaire", "Un retrait abusif"],
        correct: 1,
        explainer: "Le phishing (hameconnage) consiste a imiter une banque via SMS, email ou site web pour voler identifiants et codes. Pres de 1 million de Francais en sont victimes chaque annee selon Cybermalveillance.gouv.fr. Jamais cliquer sur les liens 'urgents'."
      },
      {
        q: "Qu'est-ce que l'arnaque au 'faux conseiller bancaire' ?",
        options: ["Un employe corrompu", "Un escroc se faisant passer pour la banque pour faire valider des operations", "Une publicite mensongere", "Un demarcheur agressif"],
        correct: 1,
        explainer: "Le 'faux conseiller' appelle en se pretendant de votre banque, en alleguant une fraude en cours, pour vous faire valider des paiements ou desactiver la double authentification. En 2023, cette arnaque a represente ~380M de pertes en France."
      },
      {
        q: "Qu'est-ce qu'un pump and dump ?",
        options: ["Une strategie d'investissement", "Manipulation de cours par gonflement artificiel puis revente", "Un type de trading auto", "Un derive financier"],
        correct: 1,
        explainer: "Le pump and dump consiste a gonfler artificiellement le cours d'un actif (souvent une penny stock ou crypto peu liquide) via la promotion massive, puis revendre au pic. Tres frequent sur Telegram et Twitter dans le monde crypto."
      },
      {
        q: "L'arnaque au president consiste a :",
        options: ["Voter pour un faux candidat", "Se faire passer pour le dirigeant pour exiger un virement urgent", "Un detournement de fonds politiques", "Une fraude electorale"],
        correct: 1,
        explainer: "Aussi appelee 'fraude au faux ordre de virement', un escroc se fait passer pour le PDG/DG via email/telephone pour exiger un virement urgent et confidentiel. Le mois d'aout est privilegie. Pertes mondiales : plusieurs milliards par an."
      },
      {
        q: "Comment reconnaitre un site bancaire frauduleux ?",
        options: ["URL legerement modifiee", "Pas de cadenas HTTPS", "Fautes d'orthographe", "Tous les precedents"],
        correct: 3,
        explainer: "Signes d'un site frauduleux : URL legerement differente (banquepostale-fr.com au lieu de labanquepostale.fr), absence ou erreur HTTPS, fautes, design approximatif, demandes inhabituelles (full carte+CVV+code). Toujours taper l'URL manuellement."
      },
      {
        q: "Combien de Francais ont ete victimes d'une arnaque financiere en 2023 ?",
        options: ["100 000", "500 000", "1 million", "Plus de 1,5 million"],
        correct: 3,
        explainer: "Selon la Federation Bancaire Francaise et le ministere de l'Interieur, plus de 1,5 million de Francais ont ete victimes d'une fraude financiere ou bancaire en 2023, pour un prejudice depassant 1,5 milliard d'euros."
      },
      {
        q: "Qu'est-ce qu'un 'rug pull' dans le monde crypto ?",
        options: ["Une chute des cours", "Les developpeurs disparaissent avec les fonds des investisseurs", "Un piratage", "Une regulation"],
        correct: 1,
        explainer: "Le rug pull (tirer le tapis) designe l'arnaque ou les createurs d'un projet crypto/NFT vendent en masse leurs jetons puis disparaissent, ruinant les investisseurs. Plus de 7,7 milliards $ perdus en rug pulls rien qu'en 2021."
      },
      {
        q: "Quelle authentification est la plus sure pour ton compte bancaire ?",
        options: ["Mot de passe simple", "Mot de passe complexe", "Authentification a deux facteurs (2FA)", "Sauvegarde du mot de passe sur le navigateur"],
        correct: 2,
        explainer: "L'authentification a deux facteurs (2FA) - mot de passe + code SMS/app authenticator/biometrie - reduit le risque de piratage de plus de 99% selon Google. Obligatoire depuis 2021 (DSP2) pour la majorite des operations bancaires en Europe."
      },
      {
        q: "Qui contacter en cas d'arnaque financiere en France ?",
        options: ["AMF, police, Cybermalveillance.gouv.fr et sa banque", "Le procureur uniquement", "Le maire", "Bercy"],
        correct: 0,
        explainer: "En cas d'arnaque financiere : alerter d'abord sa banque (faire opposition), porter plainte (police, gendarmerie ou Pre-plainte en ligne), signaler sur Cybermalveillance.gouv.fr et sur la plateforme PHAROS, et l'AMF pour escroqueries boursieres."
      },
      {
        q: "Qu'est-ce qu'une 'arnaque sentimentale' ?",
        options: ["Vol de bijoux", "Manipulation amoureuse en ligne pour soutirer de l'argent", "Mariage blanc", "Adultere financier"],
        correct: 1,
        explainer: "Aussi appelee romance scam ou brouteur en Afrique de l'Ouest, l'arnaque sentimentale consiste a seduire en ligne (sites de rencontre, reseaux sociaux) puis demander de l'argent pour de fausses urgences. Pertes mondiales : 1,3 milliard $ rien qu'aux USA en 2022."
      }
    ]
  }
];
