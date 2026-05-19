import type { Quiz } from "../types";

export const histoireQuizzes: Quiz[] = [
  {
    slug: "quiz-revolution-francaise-grandes-dates",
    title: "Quiz Révolution française : les grandes dates à connaître",
    description: "Teste tes connaissances sur la Révolution française : prise de la Bastille, Déclaration des droits, Terreur, Convention et chute de la monarchie en 12 questions.",
    topic: "histoire",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel événement marque le début symbolique de la Révolution française ?",
        options: ["Le serment du Jeu de paume", "La prise de la Bastille", "L'exécution de Louis XVI", "La fête de la Fédération"],
        correct: 1,
        explainer: "La prise de la Bastille a lieu le 14 juillet 1789. Cette forteresse-prison symbolisait l'arbitraire royal et sa chute déclenche une vague révolutionnaire dans toute la France."
      },
      {
        q: "En quelle année est adoptée la Déclaration des droits de l'homme et du citoyen ?",
        options: ["1788", "1789", "1791", "1793"],
        correct: 1,
        explainer: "Adoptée le 26 août 1789 par l'Assemblée nationale constituante, elle pose les principes fondamentaux : liberté, égalité, propriété et résistance à l'oppression."
      },
      {
        q: "Quel roi est guillotiné le 21 janvier 1793 ?",
        options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"],
        correct: 2,
        explainer: "Louis XVI est exécuté place de la Révolution (aujourd'hui place de la Concorde) après son procès devant la Convention. C'est la fin définitive de la monarchie absolue en France."
      },
      {
        q: "Comment s'appelle la période de répression intense entre 1793 et 1794 ?",
        options: ["La Grande Peur", "La Terreur", "Thermidor", "Le Directoire"],
        correct: 1,
        explainer: "La Terreur, menée par Robespierre et le Comité de salut public, fait environ 17 000 victimes guillotinées. Elle prend fin avec sa chute le 9 thermidor an II (27 juillet 1794)."
      },
      {
        q: "Qui prend la Bastille avec le peuple parisien ?",
        options: ["Les Gardes françaises", "Les sans-culottes", "Les Suisses", "La Garde nationale"],
        correct: 1,
        explainer: "Les sans-culottes, peuple parisien des faubourgs, prennent la Bastille avec l'aide des Gardes françaises ralliés. Ils cherchaient surtout poudre et armes pour se défendre."
      },
      {
        q: "Quel serment précède la prise de la Bastille en juin 1789 ?",
        options: ["Le serment de Strasbourg", "Le serment du Jeu de paume", "Le serment des Horaces", "Le serment de Koufra"],
        correct: 1,
        explainer: "Le 20 juin 1789, les députés du Tiers État, enfermés dans la salle du Jeu de paume à Versailles, jurent de ne pas se séparer avant d'avoir donné une Constitution à la France."
      },
      {
        q: "Quel régime succède à la monarchie en septembre 1792 ?",
        options: ["Le Directoire", "Le Consulat", "La Première République", "L'Empire"],
        correct: 2,
        explainer: "La Première République est proclamée le 22 septembre 1792 par la Convention nationale, le lendemain de l'abolition de la royauté."
      },
      {
        q: "Qui est surnommé l'Incorruptible pendant la Révolution ?",
        options: ["Danton", "Marat", "Robespierre", "Saint-Just"],
        correct: 2,
        explainer: "Maximilien Robespierre est surnommé l'Incorruptible pour son intransigeance morale et son train de vie modeste. Il est guillotiné le 28 juillet 1794 sans procès."
      },
      {
        q: "Quel symbole révolutionnaire désigne la coiffure rouge à pointe ?",
        options: ["Le bicorne", "Le bonnet phrygien", "Le tricorne", "Le shako"],
        correct: 1,
        explainer: "Le bonnet phrygien rouge symbolise la liberté depuis l'Antiquité romaine où il était porté par les esclaves affranchis. Marianne le porte aujourd'hui encore."
      },
      {
        q: "Quel régime gouverne la France de 1795 à 1799 ?",
        options: ["La Convention", "Le Directoire", "Le Consulat", "L'Empire"],
        correct: 1,
        explainer: "Le Directoire, composé de cinq directeurs et de deux assemblées, gouverne après la Convention. Il est renversé par le coup d'État du 18 brumaire de Bonaparte le 9 novembre 1799."
      },
      {
        q: "Qui rédige la Déclaration des droits de l'homme de 1789 ?",
        options: ["Mirabeau seul", "L'Assemblée nationale constituante", "Le roi Louis XVI", "Les états généraux"],
        correct: 1,
        explainer: "L'Assemblée nationale constituante, issue des États généraux convoqués en mai 1789, rédige collectivement le texte. Lafayette et Sieyès en sont des inspirateurs majeurs."
      },
      {
        q: "Quelle hymne révolutionnaire devient l'hymne national français ?",
        options: ["Le Chant du départ", "La Carmagnole", "Ça ira", "La Marseillaise"],
        correct: 3,
        explainer: "Composée par Rouget de Lisle à Strasbourg en avril 1792, La Marseillaise est adoptée comme hymne national en 1795, puis définitivement par la IIIe République en 1879."
      }
    ]
  },
  {
    slug: "quiz-napoleon-bonaparte-empereur",
    title: "Quiz Napoléon Bonaparte : du Consul à Sainte-Hélène",
    description: "Connais-tu vraiment Napoléon ? Batailles, sacre, Code civil, exil... 11 questions pour tester ta culture sur l'empereur des Français.",
    topic: "histoire",
    emoji: "👑",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Où Napoléon Bonaparte est-il né en 1769 ?",
        options: ["Marseille", "Ajaccio en Corse", "Nice", "Paris"],
        correct: 1,
        explainer: "Napoléon naît le 15 août 1769 à Ajaccio, un an après le rattachement de la Corse à la France. Sa famille appartient à la petite noblesse corse italianophone."
      },
      {
        q: "En quelle année Napoléon se proclame-t-il empereur des Français ?",
        options: ["1799", "1802", "1804", "1812"],
        correct: 2,
        explainer: "Le sacre a lieu le 2 décembre 1804 à Notre-Dame de Paris, en présence du pape Pie VII. Napoléon se couronne lui-même, geste hautement symbolique."
      },
      {
        q: "Quelle bataille marque sa défaite finale en 1815 ?",
        options: ["Austerlitz", "Iéna", "Waterloo", "Trafalgar"],
        correct: 2,
        explainer: "La bataille de Waterloo, le 18 juin 1815 en Belgique, voit Napoléon battu par Wellington et Blücher. C'est la fin des Cent-Jours et le second exil."
      },
      {
        q: "Sur quelle île Napoléon meurt-il en 1821 ?",
        options: ["Île d'Elbe", "Corse", "Sainte-Hélène", "Madère"],
        correct: 2,
        explainer: "Exilé par les Britanniques sur l'île de Sainte-Hélène en Atlantique sud, Napoléon y meurt le 5 mai 1821, probablement d'un cancer de l'estomac selon les analyses modernes."
      },
      {
        q: "Quel code juridique reste son héritage civil majeur ?",
        options: ["Code Justinien", "Code civil", "Code Hammurabi", "Code noir"],
        correct: 1,
        explainer: "Promulgué en 1804, le Code civil unifie le droit français et inspire encore des dizaines de législations dans le monde. Napoléon disait que c'était sa vraie gloire."
      },
      {
        q: "Quelle bataille navale en 1805 anéantit la flotte franco-espagnole ?",
        options: ["Aboukir", "Trafalgar", "Salamine", "Lépante"],
        correct: 1,
        explainer: "À Trafalgar le 21 octobre 1805, l'amiral Nelson écrase la flotte combinée et meurt au combat. Napoléon doit renoncer à envahir l'Angleterre."
      },
      {
        q: "Qui est sa première épouse, divorcée pour absence d'héritier ?",
        options: ["Marie-Louise d'Autriche", "Joséphine de Beauharnais", "Désirée Clary", "Marie Walewska"],
        correct: 1,
        explainer: "Joséphine de Beauharnais, créole de Martinique, épouse Bonaparte en 1796. Le divorce est prononcé en 1809 ; il épouse Marie-Louise d'Autriche en 1810 pour avoir un héritier."
      },
      {
        q: "En quelle année est lancée la campagne de Russie ?",
        options: ["1810", "1812", "1814", "1815"],
        correct: 1,
        explainer: "La Grande Armée envahit la Russie en juin 1812. Elle prend Moscou incendiée puis recule dans le froid : sur 600 000 hommes engagés, moins de 100 000 reviennent."
      },
      {
        q: "Quelle victoire de 1805 contre Russes et Autrichiens est dite des Trois Empereurs ?",
        options: ["Wagram", "Austerlitz", "Iéna", "Friedland"],
        correct: 1,
        explainer: "Austerlitz, le 2 décembre 1805, est considéré comme le chef-d'œuvre tactique de Napoléon. L'armée russe et autrichienne y est écrasée par la manœuvre du plateau de Pratzen."
      },
      {
        q: "Sur quelle île est-il exilé une première fois en 1814 ?",
        options: ["Corse", "Sardaigne", "Île d'Elbe", "Sainte-Hélène"],
        correct: 2,
        explainer: "Abdiquant le 6 avril 1814, Napoléon est exilé sur l'île d'Elbe en Méditerranée avec souveraineté sur l'île. Il s'en évade en mars 1815 pour les Cent-Jours."
      },
      {
        q: "Comment s'appelle le coup d'État qui le porte au pouvoir en 1799 ?",
        options: ["18 fructidor", "18 brumaire", "9 thermidor", "13 vendémiaire"],
        correct: 1,
        explainer: "Le 18 brumaire an VIII (9 novembre 1799), Bonaparte renverse le Directoire avec Sieyès. Il devient Premier consul, étape vers l'Empire."
      }
    ]
  },
  {
    slug: "quiz-premiere-guerre-mondiale-1914-1918",
    title: "Quiz Première Guerre mondiale : tranchées et grandes dates",
    description: "Verdun, la Marne, l'armistice... Vérifie tes connaissances sur la Grande Guerre de 1914-1918 en 12 questions avec dates et chiffres clés.",
    topic: "histoire",
    emoji: "⚔️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel attentat déclenche la Première Guerre mondiale en 1914 ?",
        options: ["L'assassinat de Jaurès", "L'attentat de Sarajevo", "L'incendie du Reichstag", "L'affaire d'Agadir"],
        correct: 1,
        explainer: "L'archiduc François-Ferdinand d'Autriche est assassiné le 28 juin 1914 à Sarajevo par Gavrilo Princip. Le jeu des alliances entraîne l'Europe dans la guerre en quelques semaines."
      },
      {
        q: "Quelle bataille de 1916 dure 300 jours et symbolise la guerre des tranchées ?",
        options: ["Bataille de la Marne", "Bataille de Verdun", "Bataille de la Somme", "Chemin des Dames"],
        correct: 1,
        explainer: "Verdun (février-décembre 1916) fait environ 700 000 victimes franco-allemandes. Pétain organise la défense via la Voie sacrée et la rotation des unités."
      },
      {
        q: "Quel jour précisément est signé l'armistice de 1918 ?",
        options: ["28 juin", "11 novembre", "8 mai", "14 juillet"],
        correct: 1,
        explainer: "L'armistice est signé le 11 novembre 1918 à 5h15 dans le wagon du maréchal Foch en forêt de Rethondes. Le cessez-le-feu entre en vigueur à 11 heures."
      },
      {
        q: "Comment surnomme-t-on les soldats français de cette guerre ?",
        options: ["Les Sammies", "Les Poilus", "Les Tommies", "Les Boches"],
        correct: 1,
        explainer: "Les Poilus sont les soldats français, surnom évoquant la virilité et l'absence d'hygiène dans les tranchées. Ce sont les protagonistes du conflit côté France."
      },
      {
        q: "Quel traité conclut officiellement la guerre en 1919 ?",
        options: ["Traité de Versailles", "Traité de Trianon", "Traité de Saint-Germain", "Traité de Sèvres"],
        correct: 0,
        explainer: "Le traité de Versailles est signé le 28 juin 1919, jour anniversaire de Sarajevo. Il impose à l'Allemagne d'énormes réparations et la responsabilité de la guerre (article 231)."
      },
      {
        q: "Quel pays entre en guerre aux côtés des Alliés en avril 1917 ?",
        options: ["L'Italie", "Les États-Unis", "Le Japon", "La Roumanie"],
        correct: 1,
        explainer: "Les États-Unis entrent en guerre le 6 avril 1917 sous Woodrow Wilson, après les torpillages de navires américains et le télégramme Zimmermann. Leur apport est décisif en 1918."
      },
      {
        q: "Quel général français devient chef suprême des armées alliées en 1918 ?",
        options: ["Joffre", "Pétain", "Foch", "Nivelle"],
        correct: 2,
        explainer: "Ferdinand Foch est nommé généralissime des forces alliées en avril 1918. Il coordonne l'offensive finale qui pousse l'Allemagne à demander l'armistice."
      },
      {
        q: "Quelle révolution oblige la Russie à quitter la guerre en 1917 ?",
        options: ["Révolution de Février", "Révolution d'Octobre", "Révolution Spartakiste", "Commune de Cronstadt"],
        correct: 1,
        explainer: "La Révolution bolchevique d'Octobre 1917 (novembre dans notre calendrier) porte Lénine au pouvoir. Il signe la paix de Brest-Litovsk avec l'Allemagne en mars 1918."
      },
      {
        q: "Quel terrible bilan humain approximatif a la guerre côté français ?",
        options: ["400 000 morts", "1,4 million de morts", "3 millions de morts", "5 millions de morts"],
        correct: 1,
        explainer: "La France compte environ 1,4 million de soldats morts et 3 millions de blessés. Au total, le conflit fait environ 10 millions de morts militaires dans le monde."
      },
      {
        q: "Quelle arme chimique est utilisée massivement à Ypres en 1915 ?",
        options: ["Le napalm", "Le gaz moutarde", "Le chlore", "L'agent orange"],
        correct: 2,
        explainer: "Les Allemands utilisent le gaz chloré à Ypres le 22 avril 1915, première utilisation massive d'armes chimiques. Le gaz moutarde (ypérite) apparaît en juillet 1917 au même endroit."
      },
      {
        q: "Quelle bataille de septembre 1914 stoppe l'avancée allemande sur Paris ?",
        options: ["Bataille des Frontières", "Bataille de la Marne", "Bataille de Charleroi", "Bataille de l'Yser"],
        correct: 1,
        explainer: "La bataille de la Marne (6-12 septembre 1914) est une victoire alliée décisive. Gallieni réquisitionne les taxis parisiens pour transporter les renforts au front."
      },
      {
        q: "Qui est président du Conseil français à partir de novembre 1917 ?",
        options: ["Aristide Briand", "Georges Clemenceau", "Raymond Poincaré", "René Viviani"],
        correct: 1,
        explainer: "Georges Clemenceau, surnommé le Tigre puis Père la Victoire, devient président du Conseil en novembre 1917. Sa fermeté redonne le moral aux troupes et à l'arrière."
      }
    ]
  },
  {
    slug: "quiz-seconde-guerre-mondiale-resistance-liberation",
    title: "Quiz Seconde Guerre mondiale : résistance et libération",
    description: "De Gaulle, Jean Moulin, débarquement, Vichy : 12 questions pour évaluer ta culture sur la Seconde Guerre mondiale et la France occupée.",
    topic: "histoire",
    emoji: "🗡️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel jour précisément débute le Débarquement en Normandie ?",
        options: ["1er juin 1944", "6 juin 1944", "15 août 1944", "25 août 1944"],
        correct: 1,
        explainer: "L'opération Overlord lance le Débarquement le 6 juin 1944 (D-Day). Plus de 156 000 soldats alliés débarquent sur cinq plages : Utah, Omaha, Gold, Juno, Sword."
      },
      {
        q: "Qui lance le célèbre appel du 18 juin 1940 depuis Londres ?",
        options: ["Pétain", "De Gaulle", "Mandel", "Reynaud"],
        correct: 1,
        explainer: "Charles de Gaulle, alors général de brigade peu connu, appelle à la BBC les Français à continuer le combat. Cet appel est l'acte fondateur de la France libre."
      },
      {
        q: "Qui dirige le Conseil national de la Résistance unifié en 1943 ?",
        options: ["Jean Moulin", "Pierre Brossolette", "Henri Frenay", "Daniel Cordier"],
        correct: 0,
        explainer: "Jean Moulin unifie les mouvements de Résistance dans le CNR créé le 27 mai 1943. Arrêté à Caluire le 21 juin 1943, il meurt sous la torture le 8 juillet."
      },
      {
        q: "Qui dirige le régime de Vichy à partir de juillet 1940 ?",
        options: ["Pierre Laval", "Philippe Pétain", "François Darlan", "Pierre Flandin"],
        correct: 1,
        explainer: "Le maréchal Philippe Pétain, héros de Verdun, obtient les pleins pouvoirs le 10 juillet 1940. Il instaure l'État français, régime collaborationniste et autoritaire."
      },
      {
        q: "Quand Paris est-il libéré pendant la Seconde Guerre mondiale ?",
        options: ["6 juin 1944", "25 août 1944", "11 novembre 1944", "8 mai 1945"],
        correct: 1,
        explainer: "Paris est libéré le 25 août 1944 par la 2e DB du général Leclerc et les FFI. De Gaulle prononce le célèbre discours 'Paris outragé, Paris brisé, Paris martyrisé, mais Paris libéré'."
      },
      {
        q: "Quel jour précisément l'Allemagne capitule-t-elle en Europe ?",
        options: ["6 juin 1944", "8 mai 1945", "2 septembre 1945", "11 novembre 1945"],
        correct: 1,
        explainer: "La capitulation est signée le 7 mai à Reims puis le 8 mai 1945 à Berlin. Le 8 mai devient férié en France et marque la fin de la guerre en Europe."
      },
      {
        q: "Quelle bombe atomique est larguée sur Hiroshima en 1945 ?",
        options: ["Fat Man", "Little Boy", "Trinity", "Tsar Bomba"],
        correct: 1,
        explainer: "Little Boy est larguée sur Hiroshima le 6 août 1945, faisant environ 140 000 morts. Fat Man tombe sur Nagasaki trois jours plus tard, précipitant la capitulation japonaise."
      },
      {
        q: "Quel chef nazi se suicide dans son bunker le 30 avril 1945 ?",
        options: ["Goebbels", "Himmler", "Hitler", "Göring"],
        correct: 2,
        explainer: "Adolf Hitler se suicide avec Eva Braun dans le Führerbunker de Berlin alors que l'Armée rouge est aux portes du Reichstag. Ses corps sont brûlés selon ses instructions."
      },
      {
        q: "Comment s'appellent les rafles juives massives en juillet 1942 à Paris ?",
        options: ["Rafle du Vél d'Hiv", "Rafle de Drancy", "Rafle du Mont-Valérien", "Rafle de Pithiviers"],
        correct: 0,
        explainer: "La rafle du Vélodrome d'Hiver, des 16 et 17 juillet 1942, voit la police française arrêter 13 152 Juifs dont 4 115 enfants. Très peu reviendront d'Auschwitz."
      },
      {
        q: "Qui dirige les FFL en Afrique avant le Débarquement ?",
        options: ["Leclerc", "De Lattre de Tassigny", "Koenig", "Juin"],
        correct: 2,
        explainer: "Le général Pierre Koenig commande la 1re Brigade française libre à Bir Hakeim (mai-juin 1942), où elle résiste héroïquement à Rommel et regagne la reconnaissance internationale aux FFL."
      },
      {
        q: "Quel pays envahit la Pologne le 1er septembre 1939 ?",
        options: ["L'Italie", "L'URSS", "L'Allemagne", "La Hongrie"],
        correct: 2,
        explainer: "L'Allemagne nazie envahit la Pologne le 1er septembre 1939, déclenchant la guerre. La France et le Royaume-Uni déclarent la guerre à l'Allemagne le 3 septembre."
      },
      {
        q: "Comment est nommé le programme d'extermination des Juifs d'Europe ?",
        options: ["Solution finale", "Plan Madagascar", "Anschluss", "Nuit de cristal"],
        correct: 0,
        explainer: "La Solution finale est planifiée à la conférence de Wannsee en janvier 1942. Environ 6 millions de Juifs sont assassinés dans les camps d'extermination comme Auschwitz-Birkenau."
      }
    ]
  },
  {
    slug: "quiz-presidents-cinquieme-republique",
    title: "Quiz présidents de la Ve République : de De Gaulle à Macron",
    description: "Connais-tu bien les présidents français ? De De Gaulle à Macron, 12 questions sur les huit chefs d'État de la Ve République depuis 1958.",
    topic: "histoire",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui est le premier président de la Ve République en 1959 ?",
        options: ["Vincent Auriol", "René Coty", "Charles de Gaulle", "Georges Pompidou"],
        correct: 2,
        explainer: "Charles de Gaulle devient président le 8 janvier 1959 après l'adoption de la Constitution de la Ve République par référendum en septembre 1958. Il est réélu au suffrage universel direct en 1965."
      },
      {
        q: "Quel président meurt en exercice en avril 1974 ?",
        options: ["De Gaulle", "Pompidou", "Giscard d'Estaing", "Mitterrand"],
        correct: 1,
        explainer: "Georges Pompidou meurt le 2 avril 1974 d'une maladie de Waldenström. C'est le seul président de la Ve République mort en fonction. Il est président depuis juin 1969."
      },
      {
        q: "Qui devient président en 1981 et instaure les 39 heures ?",
        options: ["Valéry Giscard d'Estaing", "François Mitterrand", "Jacques Chirac", "Lionel Jospin"],
        correct: 1,
        explainer: "François Mitterrand est le premier président de gauche élu sous la Ve République, le 10 mai 1981. Il abolit la peine de mort, crée les 39 heures et la 5e semaine de congés payés."
      },
      {
        q: "Quel président instaure la majorité à 18 ans en 1974 ?",
        options: ["Pompidou", "Giscard d'Estaing", "Mitterrand", "Chirac"],
        correct: 1,
        explainer: "Valéry Giscard d'Estaing, élu en mai 1974, fait passer la majorité de 21 à 18 ans dès le 5 juillet 1974. Il fait aussi voter la loi Veil sur l'IVG en 1975."
      },
      {
        q: "Quel président raccourcit le mandat présidentiel à 5 ans ?",
        options: ["Mitterrand", "Chirac", "Sarkozy", "Hollande"],
        correct: 1,
        explainer: "Jacques Chirac fait adopter le quinquennat par référendum le 24 septembre 2000. Le mandat passe de 7 à 5 ans, appliqué à partir de l'élection de 2002."
      },
      {
        q: "Qui succède à Jacques Chirac en 2007 ?",
        options: ["François Hollande", "Ségolène Royal", "Nicolas Sarkozy", "Dominique de Villepin"],
        correct: 2,
        explainer: "Nicolas Sarkozy est élu le 6 mai 2007 face à Ségolène Royal. Son mandat est marqué par la crise financière de 2008 et l'intervention en Libye en 2011."
      },
      {
        q: "Quel président est élu en 2012 et instaure le mariage pour tous ?",
        options: ["Sarkozy", "Hollande", "Macron", "Mélenchon"],
        correct: 1,
        explainer: "François Hollande, élu le 6 mai 2012, fait adopter le mariage pour tous via la loi Taubira du 17 mai 2013. Il ne se représente pas en 2017."
      },
      {
        q: "Quel âge a Emmanuel Macron lors de son élection en 2017 ?",
        options: ["35 ans", "39 ans", "42 ans", "45 ans"],
        correct: 1,
        explainer: "Emmanuel Macron est élu le 7 mai 2017 à 39 ans, devenant le plus jeune président de la République. Il bat Marine Le Pen au second tour avec 66% des voix."
      },
      {
        q: "Quel président démissionne après l'échec du référendum de 1969 ?",
        options: ["De Gaulle", "Pompidou", "Giscard d'Estaing", "Mitterrand"],
        correct: 0,
        explainer: "Charles de Gaulle démissionne le 28 avril 1969 après le 'non' au référendum sur la régionalisation et la réforme du Sénat. Il meurt à Colombey le 9 novembre 1970."
      },
      {
        q: "Combien de mandats Mitterrand a-t-il effectués ?",
        options: ["Un", "Deux", "Trois", "Aucun"],
        correct: 1,
        explainer: "François Mitterrand effectue deux septennats (1981-1988 puis 1988-1995). Il détient le record de longévité présidentielle sous la Ve République avec 14 ans au pouvoir."
      },
      {
        q: "Quel président lance le franc CFA puis l'euro en 2002 ?",
        options: ["Mitterrand", "Chirac", "Giscard", "Sarkozy"],
        correct: 1,
        explainer: "L'euro entre en circulation le 1er janvier 2002 sous la présidence de Jacques Chirac. Le traité de Maastricht créant l'euro avait été ratifié sous Mitterrand en 1992."
      },
      {
        q: "Quelle réforme phare Sarkozy fait-il passer en 2010 ?",
        options: ["Le mariage pour tous", "La retraite à 62 ans", "Le RSA", "La taxe carbone"],
        correct: 1,
        explainer: "Nicolas Sarkozy fait passer l'âge légal de départ à la retraite de 60 à 62 ans en novembre 2010, malgré de fortes mobilisations sociales pendant plusieurs mois."
      }
    ]
  },
  {
    slug: "quiz-mai-68-revolution-culturelle",
    title: "Quiz Mai 68 : grève, slogans et révolution culturelle",
    description: "Cohn-Bendit, accords de Grenelle, slogans, occupation de la Sorbonne... 10 questions pour comprendre Mai 68 et son héritage en France.",
    topic: "histoire",
    emoji: "🔥",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel mouvement étudiant déclenche Mai 68 à Nanterre ?",
        options: ["Le Mouvement du 22 mars", "Le Mouvement du 1er mai", "L'UNEF", "La JEC"],
        correct: 0,
        explainer: "Le Mouvement du 22 mars, lancé à la fac de Nanterre par Daniel Cohn-Bendit et 142 étudiants, dénonce d'abord la guerre du Vietnam et la condition étudiante."
      },
      {
        q: "Qui est le président de la République pendant Mai 68 ?",
        options: ["Pompidou", "De Gaulle", "Mitterrand", "Mendès France"],
        correct: 1,
        explainer: "Charles de Gaulle est président. Il disparaît mystérieusement le 29 mai pour rencontrer le général Massu à Baden-Baden, puis dissout l'Assemblée le 30 mai et gagne les élections."
      },
      {
        q: "Quels accords mettent fin à la grève générale le 27 mai 1968 ?",
        options: ["Accords de Matignon", "Accords de Grenelle", "Accords d'Évian", "Accords de Munich"],
        correct: 1,
        explainer: "Les accords de Grenelle, négociés par Georges Pompidou, prévoient hausse du SMIG de 35%, salaires +10% et reconnaissance syndicale en entreprise. La base les rejette d'abord."
      },
      {
        q: "Quel célèbre slogan évoque la plage sous les pavés ?",
        options: ["CRS = SS", "Soyez réalistes, demandez l'impossible", "Sous les pavés, la plage", "Il est interdit d'interdire"],
        correct: 2,
        explainer: "'Sous les pavés, la plage' est l'un des slogans les plus célèbres du Quartier latin, où les étudiants découvraient le sable sous les pavés arrachés pour faire des barricades."
      },
      {
        q: "Quel leader étudiant est surnommé Dany le Rouge ?",
        options: ["Alain Krivine", "Daniel Cohn-Bendit", "Jacques Sauvageot", "Alain Geismar"],
        correct: 1,
        explainer: "Daniel Cohn-Bendit, étudiant franco-allemand de Nanterre, devient le visage de la révolte. Expulsé vers l'Allemagne fin mai, il y mènera plus tard une carrière politique chez les Verts."
      },
      {
        q: "Quelle célèbre université parisienne est occupée à partir du 3 mai ?",
        options: ["Sciences Po", "La Sorbonne", "Nanterre", "Vincennes"],
        correct: 1,
        explainer: "La Sorbonne est évacuée puis occupée par les étudiants à partir du 13 mai. Elle devient le QG symbolique du mouvement avec débats permanents dans l'amphithéâtre Richelieu."
      },
      {
        q: "Quelle nuit marque le sommet des affrontements rue Gay-Lussac ?",
        options: ["Nuit du 3 mai", "Nuit des barricades du 10-11 mai", "Nuit du 24 mai", "Nuit du 30 mai"],
        correct: 1,
        explainer: "La 'nuit des barricades' du 10 au 11 mai 1968 oppose étudiants et CRS au Quartier latin. Plus de 60 barricades sont dressées, des centaines de blessés des deux côtés."
      },
      {
        q: "Quel parti politique remporte les législatives anticipées de juin 1968 ?",
        options: ["Le PCF", "Le Parti socialiste", "L'UDR gaulliste", "Les libéraux de Giscard"],
        correct: 2,
        explainer: "L'Union pour la défense de la République (UDR) gaulliste obtient 358 sièges sur 487 aux législatives des 23 et 30 juin 1968. Plus large majorité de la Ve République."
      },
      {
        q: "Quel chanteur écrit 'Paris s'éveille' qui évoque la période ?",
        options: ["Brassens", "Brel", "Jacques Dutronc", "Renaud"],
        correct: 2,
        explainer: "Jacques Dutronc sort 'Il est cinq heures, Paris s'éveille' en 1968, écrite par Lanzmann. La chanson capte l'atmosphère parisienne de l'époque, bien que pas explicitement militante."
      },
      {
        q: "Combien de millions de Français font grève en mai 1968 ?",
        options: ["1 million", "3 millions", "7 millions", "10 millions"],
        correct: 3,
        explainer: "Environ 7 à 10 millions de travailleurs cessent le travail à la mi-mai 1968 ; c'est la plus grande grève générale de l'histoire de France, paralysant le pays pendant trois semaines."
      }
    ]
  },
  {
    slug: "quiz-rome-antique-empereurs-republique",
    title: "Quiz Rome antique : empereurs, légions et République",
    description: "César, Auguste, Néron, Constantin... 11 questions pour vérifier ta culture sur la Rome antique, de la fondation à la chute de l'Empire.",
    topic: "histoire",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année traditionnelle Rome est-elle fondée ?",
        options: ["1000 av. J.-C.", "753 av. J.-C.", "509 av. J.-C.", "476 av. J.-C."],
        correct: 1,
        explainer: "Selon la tradition, Rome est fondée le 21 avril 753 av. J.-C. par Romulus, qui tue son frère Rémus. L'archéologie confirme une occupation continue du site dès cette époque."
      },
      {
        q: "Qui est assassiné aux Ides de mars en 44 av. J.-C. ?",
        options: ["Pompée", "Cicéron", "Jules César", "Marc Antoine"],
        correct: 2,
        explainer: "Jules César est poignardé le 15 mars 44 av. J.-C. à la Curie de Pompée par une vingtaine de sénateurs dont Brutus et Cassius. Ses derniers mots 'Tu quoque mi fili !' sont légendaires."
      },
      {
        q: "Qui est le premier empereur romain ?",
        options: ["César", "Auguste", "Tibère", "Néron"],
        correct: 1,
        explainer: "Octave devient Auguste en 27 av. J.-C. après sa victoire à Actium contre Antoine et Cléopâtre en 31 av. J.-C. Il inaugure le Principat, durant 41 ans au pouvoir."
      },
      {
        q: "Quel empereur incendie Rome en 64 selon la tradition ?",
        options: ["Caligula", "Néron", "Domitien", "Commode"],
        correct: 1,
        explainer: "Néron est accusé d'avoir provoqué le grand incendie de juillet 64 pour rebâtir Rome à son goût. Il en rejette la faute sur les chrétiens, déclenchant les premières persécutions."
      },
      {
        q: "Quel fleuve Jules César franchit-il en 49 av. J.-C. ?",
        options: ["Le Tibre", "Le Rubicon", "Le Pô", "L'Arno"],
        correct: 1,
        explainer: "César franchit le Rubicon, frontière entre la Gaule cisalpine et l'Italie, en violation de la loi romaine. Il prononce 'alea jacta est' (le sort en est jeté) et déclenche la guerre civile."
      },
      {
        q: "En quelle année tombe l'Empire romain d'Occident ?",
        options: ["410", "476", "395", "1453"],
        correct: 1,
        explainer: "Le 4 septembre 476, le chef barbare Odoacre dépose le dernier empereur, Romulus Augustule. Cette date conventionnelle marque la fin de l'Antiquité et le début du Moyen Âge en Occident."
      },
      {
        q: "Quel empereur fait du christianisme une religion tolérée en 313 ?",
        options: ["Constantin", "Théodose", "Dioclétien", "Julien"],
        correct: 0,
        explainer: "Constantin signe l'édit de Milan en 313 avec Licinius, autorisant le christianisme dans l'Empire. Il se convertit lui-même et fonde Constantinople en 330."
      },
      {
        q: "Quelle bataille permet à César de conquérir la Gaule en 52 av. J.-C. ?",
        options: ["Gergovie", "Bibracte", "Alésia", "Massilia"],
        correct: 2,
        explainer: "Le siège d'Alésia voit Vercingétorix se rendre à Jules César après une résistance acharnée. Il sera étranglé à Rome six ans plus tard lors du triomphe de César."
      },
      {
        q: "Comment s'appelle l'amphithéâtre construit par les Flaviens à Rome ?",
        options: ["Le Forum", "Le Panthéon", "Le Colisée", "Le Circus Maximus"],
        correct: 2,
        explainer: "Le Colisée (Amphithéâtre Flavien) est inauguré en 80 sous Titus, après le règne de son père Vespasien. Il pouvait accueillir 50 000 à 80 000 spectateurs pour les jeux du cirque."
      },
      {
        q: "Quelle reine d'Égypte s'allie à César puis à Marc Antoine ?",
        options: ["Néfertiti", "Hatchepsout", "Cléopâtre VII", "Bérénice"],
        correct: 2,
        explainer: "Cléopâtre VII, dernière souveraine ptolémaïque, s'allie à César (dont elle a un fils, Césarion) puis à Marc Antoine. Elle se suicide en 30 av. J.-C. après la défaite d'Actium."
      },
      {
        q: "Quel régime précède l'Empire romain ?",
        options: ["La Monarchie", "La République", "La Tétrarchie", "Le Principat"],
        correct: 1,
        explainer: "La République romaine dure de 509 av. J.-C. (chute du dernier roi Tarquin le Superbe) à 27 av. J.-C. (instauration du Principat par Auguste). Pouvoir partagé entre consuls et sénat."
      }
    ]
  },
  {
    slug: "quiz-moyen-age-rois-france",
    title: "Quiz Moyen Âge : rois de France et grandes batailles",
    description: "Clovis, Charlemagne, Saint Louis, Jeanne d'Arc... 11 questions pour tester ta culture sur le Moyen Âge français et ses figures emblématiques.",
    topic: "histoire",
    emoji: "🏰",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel roi franc se convertit au catholicisme vers 496 ?",
        options: ["Clovis", "Charles Martel", "Pépin le Bref", "Dagobert"],
        correct: 0,
        explainer: "Clovis Ier, roi des Francs Saliens, se fait baptiser à Reims par l'évêque Rémi vers 496-498. Cette conversion fait de lui un allié de l'Église et fonde la légitimité chrétienne du royaume."
      },
      {
        q: "Qui est sacré empereur d'Occident le 25 décembre 800 ?",
        options: ["Pépin le Bref", "Charlemagne", "Louis le Pieux", "Charles le Chauve"],
        correct: 1,
        explainer: "Charlemagne est couronné par le pape Léon III à Rome la nuit de Noël 800. Il restaure ainsi l'idée d'empire romain en Occident, disparue depuis 476."
      },
      {
        q: "Quelle bataille de 1066 permet à Guillaume de conquérir l'Angleterre ?",
        options: ["Bouvines", "Hastings", "Azincourt", "Crécy"],
        correct: 1,
        explainer: "Guillaume, duc de Normandie, bat le roi anglo-saxon Harold à Hastings le 14 octobre 1066. Il devient Guillaume le Conquérant, roi d'Angleterre, fait raconté sur la tapisserie de Bayeux."
      },
      {
        q: "Quelle pucelle française aide Charles VII à reprendre Orléans en 1429 ?",
        options: ["Yolande d'Aragon", "Jeanne d'Arc", "Christine de Pizan", "Geneviève"],
        correct: 1,
        explainer: "Jeanne d'Arc lève le siège d'Orléans en mai 1429 puis fait sacrer Charles VII à Reims le 17 juillet. Capturée en 1430, elle est brûlée à Rouen le 30 mai 1431."
      },
      {
        q: "Quel conflit oppose la France à l'Angleterre de 1337 à 1453 ?",
        options: ["Guerre des Deux-Roses", "Guerre de Cent Ans", "Guerre de Trente Ans", "Guerres d'Italie"],
        correct: 1,
        explainer: "La guerre de Cent Ans (1337-1453) débute par la revendication anglaise sur la couronne de France. Elle se termine par la bataille de Castillon en 1453 et la reconquête de la Guyenne."
      },
      {
        q: "Quel roi de France est aussi appelé Saint Louis ?",
        options: ["Louis VII", "Louis IX", "Louis XI", "Louis XII"],
        correct: 1,
        explainer: "Louis IX (1226-1270), canonisé en 1297, mène deux croisades (la 7e en Égypte, la 8e à Tunis où il meurt). Réputé pour rendre la justice sous un chêne à Vincennes."
      },
      {
        q: "Quelle dynastie carolingienne commence avec Pépin le Bref en 751 ?",
        options: ["Mérovingiens", "Carolingiens", "Capétiens", "Valois"],
        correct: 1,
        explainer: "Pépin le Bref dépose le dernier mérovingien Childéric III en 751 et fonde la dynastie carolingienne, qui culminera avec son fils Charlemagne et durera jusqu'en 987."
      },
      {
        q: "Qui devient roi de France en 987, fondant la dynastie capétienne ?",
        options: ["Hugues Capet", "Robert le Pieux", "Henri Ier", "Philippe Ier"],
        correct: 0,
        explainer: "Hugues Capet est élu roi à Senlis le 3 juillet 987 par les grands du royaume. Ses descendants règneront sur la France jusqu'en 1848 (Capétiens directs, Valois, Bourbons, Orléans)."
      },
      {
        q: "Quelle bataille met fin aux ambitions anglaises en France en 1453 ?",
        options: ["Azincourt", "Castillon", "Patay", "Formigny"],
        correct: 1,
        explainer: "La bataille de Castillon, le 17 juillet 1453, voit l'armée française du roi Charles VII vaincre les Anglais grâce à l'artillerie. Bordeaux capitule, mettant fin à la guerre de Cent Ans."
      },
      {
        q: "Quelle pandémie ravage l'Europe en 1347-1352 ?",
        options: ["Lèpre", "Peste noire", "Variole", "Choléra"],
        correct: 1,
        explainer: "La peste noire, arrivée par les ports italiens, tue entre 30 et 50% de la population européenne en cinq ans (environ 25 millions de morts). Elle bouleverse l'économie et la société."
      },
      {
        q: "Quel pape lance la première croisade en 1095 ?",
        options: ["Grégoire VII", "Urbain II", "Innocent III", "Boniface VIII"],
        correct: 1,
        explainer: "Le pape Urbain II appelle à la croisade au concile de Clermont en novembre 1095. Jérusalem est prise par les croisés en juillet 1099. Sept autres croisades suivront jusqu'au XIIIe siècle."
      }
    ]
  },
  {
    slug: "quiz-egypte-antique-pharaons-pyramides",
    title: "Quiz Égypte antique : pharaons, pyramides et hiéroglyphes",
    description: "Toutankhamon, Ramsès II, Cléopâtre, pyramides de Gizeh : 10 questions pour tester ta culture sur l'Égypte des pharaons et ses mystères.",
    topic: "histoire",
    emoji: "📜",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle pyramide est la plus grande de Gizeh ?",
        options: ["Khéops", "Khéphren", "Mykérinos", "Djéser"],
        correct: 0,
        explainer: "La pyramide de Khéops (Khoufou), construite vers 2560 av. J.-C., culmine à 146,5 mètres à l'origine. Elle est la seule des sept merveilles du monde antique encore visible."
      },
      {
        q: "Qui découvre la tombe de Toutankhamon en 1922 ?",
        options: ["Champollion", "Schliemann", "Howard Carter", "Auguste Mariette"],
        correct: 2,
        explainer: "L'égyptologue britannique Howard Carter découvre la tombe quasi-intacte de Toutankhamon dans la Vallée des Rois le 4 novembre 1922, financé par Lord Carnarvon."
      },
      {
        q: "Qui déchiffre les hiéroglyphes en 1822 ?",
        options: ["Mariette", "Champollion", "Maspero", "Bouchard"],
        correct: 1,
        explainer: "Jean-François Champollion déchiffre les hiéroglyphes grâce à la pierre de Rosette, trouvée en 1799 par les soldats de Bonaparte. Il publie sa découverte le 27 septembre 1822."
      },
      {
        q: "Quel grand pharaon règne 66 ans au XIIIe siècle av. J.-C. ?",
        options: ["Toutankhamon", "Akhenaton", "Ramsès II", "Thoutmôsis III"],
        correct: 2,
        explainer: "Ramsès II (1279-1213 av. J.-C.) règne 66 ans, vit jusqu'à 90 ans environ et fait construire Abou Simbel. Il signe le premier traité de paix connu avec les Hittites en 1259 av. J.-C."
      },
      {
        q: "Quel dieu à tête de chacal préside aux funérailles ?",
        options: ["Râ", "Horus", "Anubis", "Osiris"],
        correct: 2,
        explainer: "Anubis, dieu à tête de chacal, préside à la momification et à la pesée du cœur lors du jugement des morts. Osiris est lui le juge suprême des défunts."
      },
      {
        q: "Quelle reine épouse Toutankhamon ?",
        options: ["Néfertiti", "Hatchepsout", "Ânkhésenamon", "Cléopâtre"],
        correct: 2,
        explainer: "Ânkhésenamon, fille d'Akhenaton et Néfertiti, épouse son demi-frère Toutankhamon vers 12 ans. Veuve à 21 ans, elle disparaît mystérieusement après une lettre désespérée aux Hittites."
      },
      {
        q: "Quel pharaon impose le culte d'Aton, monothéiste solaire ?",
        options: ["Toutankhamon", "Akhenaton", "Ramsès II", "Khéops"],
        correct: 1,
        explainer: "Akhenaton (1353-1336 av. J.-C.), époux de Néfertiti et père de Toutankhamon, impose le culte exclusif d'Aton, le disque solaire. Il fonde Amarna comme nouvelle capitale."
      },
      {
        q: "Quelle pierre permet à Champollion de déchiffrer les hiéroglyphes ?",
        options: ["Pierre de Palerme", "Pierre de Rosette", "Stèle de Mésa", "Stèle de Mérenptah"],
        correct: 1,
        explainer: "La pierre de Rosette, trouvée en 1799 par un officier de Bonaparte, contient le même décret en hiéroglyphes, démotique et grec. Conservée au British Museum depuis 1802."
      },
      {
        q: "Quelle reine pharaon règne au XVe siècle av. J.-C. ?",
        options: ["Hatchepsout", "Cléopâtre", "Néfertiti", "Néfertari"],
        correct: 0,
        explainer: "Hatchepsout règne 22 ans (1479-1458 av. J.-C.) en se faisant représenter avec une barbe postiche, attribut royal. Son temple de Deir el-Bahari à Louxor est un chef-d'œuvre."
      },
      {
        q: "Quelle dernière dynastie de l'Égypte antique est grecque ?",
        options: ["Ptolémées", "Saïtes", "Achéménides", "Ramessides"],
        correct: 0,
        explainer: "La dynastie ptolémaïque (305-30 av. J.-C.), fondée par Ptolémée Ier, général d'Alexandre le Grand, s'éteint avec Cléopâtre VII. L'Égypte devient province romaine en 30 av. J.-C."
      }
    ]
  },
  {
    slug: "quiz-chute-mur-berlin-guerre-froide",
    title: "Quiz chute du mur de Berlin et fin de la Guerre froide",
    description: "1989-1991, Gorbatchev, perestroïka, dislocation de l'URSS : 10 questions sur la chute du mur de Berlin et la fin du communisme en Europe.",
    topic: "histoire",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "En quelle année et quel mois tombe le mur de Berlin ?",
        options: ["Octobre 1989", "Novembre 1989", "Décembre 1989", "Janvier 1990"],
        correct: 1,
        explainer: "Le mur de Berlin tombe dans la nuit du 9 au 10 novembre 1989, après l'annonce confuse de Schabowski autorisant les Berlinois de l'Est à voyager. Il avait été érigé en août 1961."
      },
      {
        q: "Qui est le dernier dirigeant de l'URSS, démissionnaire en 1991 ?",
        options: ["Andropov", "Tchernenko", "Gorbatchev", "Eltsine"],
        correct: 2,
        explainer: "Mikhaïl Gorbatchev démissionne le 25 décembre 1991, mettant fin à 74 ans d'URSS. Il avait lancé la perestroïka (restructuration) et la glasnost (transparence) à partir de 1985."
      },
      {
        q: "En quelle année est officiellement dissoute l'Union soviétique ?",
        options: ["1989", "1990", "1991", "1992"],
        correct: 2,
        explainer: "L'URSS disparaît officiellement le 26 décembre 1991, après les accords de Belavèja signés le 8 décembre par la Russie, l'Ukraine et la Biélorussie créant la CEI."
      },
      {
        q: "Quelle politique de transparence Gorbatchev lance-t-il ?",
        options: ["Perestroïka", "Glasnost", "Détente", "Apartheid"],
        correct: 1,
        explainer: "La glasnost (transparence) accompagne la perestroïka (restructuration économique). Lancée en 1985-1986, elle libère la parole et la presse, fragilisant rapidement le régime."
      },
      {
        q: "Quel pays se réunifie le 3 octobre 1990 ?",
        options: ["La Corée", "L'Allemagne", "Le Yémen", "Le Vietnam"],
        correct: 1,
        explainer: "L'Allemagne est réunifiée le 3 octobre 1990 avec l'absorption de la RDA par la RFA. Helmut Kohl mène la réunification, devenue jour férié national (jour de l'Unité allemande)."
      },
      {
        q: "Combien de temps environ le mur de Berlin a-t-il existé ?",
        options: ["14 ans", "28 ans", "40 ans", "50 ans"],
        correct: 1,
        explainer: "Le mur est construit dans la nuit du 12 au 13 août 1961 et tombe le 9 novembre 1989, soit 28 ans, 2 mois et 27 jours. Au moins 140 personnes meurent en tentant de le franchir."
      },
      {
        q: "Quel président américain dit Tear down this wall ! en 1987 à Berlin ?",
        options: ["Carter", "Reagan", "Bush père", "Clinton"],
        correct: 1,
        explainer: "Ronald Reagan prononce son célèbre 'Mr Gorbachev, tear down this wall!' devant la porte de Brandebourg le 12 juin 1987. Le mur tombera 2 ans et 5 mois plus tard."
      },
      {
        q: "Quel mouvement polonais affaiblit le bloc soviétique dès les années 1980 ?",
        options: ["Charte 77", "Solidarność", "Pravda", "Komintern"],
        correct: 1,
        explainer: "Solidarność, syndicat libre fondé en 1980 à Gdańsk par Lech Wałęsa, est le premier mouvement organisé toléré dans le bloc de l'Est. Il gagne les élections semi-libres de juin 1989."
      },
      {
        q: "Qui succède à Gorbatchev à la tête de la Russie en 1991 ?",
        options: ["Poutine", "Eltsine", "Medvedev", "Tchernomyrdine"],
        correct: 1,
        explainer: "Boris Eltsine, président élu de la Fédération de Russie depuis juin 1991, prend la suite après la dissolution de l'URSS. Il démissionne le 31 décembre 1999 en faveur de Vladimir Poutine."
      },
      {
        q: "Quelle révolution roumaine se termine par l'exécution de Ceaușescu ?",
        options: ["Révolution des Œillets", "Révolution de velours", "Révolution roumaine", "Printemps de Prague"],
        correct: 2,
        explainer: "La Révolution roumaine de décembre 1989 culmine avec l'exécution de Nicolae et Elena Ceaușescu le 25 décembre, seule chute violente d'un régime communiste en Europe cette année-là."
      }
    ]
  },
  {
    slug: "quiz-usa-presidents-kennedy-lincoln-mlk",
    title: "Quiz USA : Lincoln, Kennedy, Martin Luther King",
    description: "De l'abolition de l'esclavage aux droits civiques en passant par Dallas 1963 : 10 questions sur l'histoire américaine et ses figures majeures.",
    topic: "histoire",
    emoji: "🏛️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel président américain abolit l'esclavage en 1865 ?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Andrew Johnson"],
        correct: 1,
        explainer: "Abraham Lincoln signe le 13e amendement abolissant l'esclavage, ratifié le 6 décembre 1865. Il est assassiné par John Wilkes Booth au théâtre Ford le 14 avril 1865."
      },
      {
        q: "Où John F. Kennedy est-il assassiné en 1963 ?",
        options: ["Washington", "New York", "Dallas", "Memphis"],
        correct: 2,
        explainer: "JFK est tué à Dallas, Texas, le 22 novembre 1963, dans sa voiture présidentielle. Lee Harvey Oswald est arrêté, puis abattu deux jours plus tard par Jack Ruby."
      },
      {
        q: "Qui prononce le discours I have a dream en 1963 ?",
        options: ["Malcolm X", "Rosa Parks", "Martin Luther King", "Barack Obama"],
        correct: 2,
        explainer: "Martin Luther King prononce 'I have a dream' le 28 août 1963 à Washington devant 250 000 personnes. Il est assassiné à Memphis le 4 avril 1968 par James Earl Ray."
      },
      {
        q: "Quelle guerre civile américaine oppose Nord et Sud de 1861 à 1865 ?",
        options: ["Guerre d'Indépendance", "Guerre de Sécession", "Guerre américano-mexicaine", "Guerre hispano-américaine"],
        correct: 1,
        explainer: "La guerre de Sécession (1861-1865) fait environ 750 000 morts, plus que toutes les autres guerres américaines réunies. Elle se termine par la capitulation de Lee à Appomattox."
      },
      {
        q: "En quelle année les États-Unis déclarent-ils leur indépendance ?",
        options: ["1763", "1776", "1789", "1812"],
        correct: 1,
        explainer: "La Déclaration d'indépendance, rédigée principalement par Thomas Jefferson, est adoptée le 4 juillet 1776 à Philadelphie. Le 4 juillet reste jour de fête nationale (Independence Day)."
      },
      {
        q: "Qui est le premier président des États-Unis ?",
        options: ["John Adams", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
        correct: 1,
        explainer: "George Washington, commandant en chef pendant la guerre d'Indépendance, devient le premier président en 1789. Il refuse un troisième mandat, posant la tradition des deux mandats."
      },
      {
        q: "Quelle femme noire refuse de céder son siège à Montgomery en 1955 ?",
        options: ["Coretta King", "Rosa Parks", "Angela Davis", "Harriet Tubman"],
        correct: 1,
        explainer: "Rosa Parks refuse de céder sa place à un Blanc dans un bus de Montgomery, Alabama, le 1er décembre 1955. Son geste déclenche le boycott des bus organisé par Martin Luther King."
      },
      {
        q: "Quel programme spatial américain mène à la Lune en 1969 ?",
        options: ["Mercury", "Gemini", "Apollo", "Space Shuttle"],
        correct: 2,
        explainer: "Apollo 11 emmène Neil Armstrong et Buzz Aldrin sur la Lune le 21 juillet 1969. Armstrong prononce 'un petit pas pour l'homme, un bond de géant pour l'humanité'."
      },
      {
        q: "Quel scandale fait démissionner Nixon en 1974 ?",
        options: ["Iran-Contra", "Watergate", "Affaire Lewinsky", "Pentagon Papers"],
        correct: 1,
        explainer: "Le scandale du Watergate (cambriolage au QG démocrate en 1972) force Richard Nixon à démissionner le 9 août 1974, premier président américain à le faire. Gerald Ford lui succède."
      },
      {
        q: "Qui devient en 2009 le premier président afro-américain des USA ?",
        options: ["Joe Biden", "Bill Clinton", "Barack Obama", "Colin Powell"],
        correct: 2,
        explainer: "Barack Obama, élu le 4 novembre 2008, prête serment le 20 janvier 2009. Il effectue deux mandats jusqu'en janvier 2017 et reçoit le prix Nobel de la paix dès 2009."
      }
    ]
  },
  {
    slug: "quiz-trente-glorieuses-france-1945-1975",
    title: "Quiz Trente Glorieuses : la France de 1945 à 1975",
    description: "Reconstruction, plein emploi, baby-boom, sécurité sociale, Plan Marshall : 10 questions sur la France des Trente Glorieuses et son économie florissante.",
    topic: "histoire",
    emoji: "📜",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Qui invente l'expression Trente Glorieuses en 1979 ?",
        options: ["Alain Touraine", "Jean Fourastié", "Pierre Bourdieu", "Raymond Aron"],
        correct: 1,
        explainer: "L'économiste Jean Fourastié publie 'Les Trente Glorieuses' en 1979, désignant la période 1945-1975 de croissance exceptionnelle (5% par an). L'expression fait écho aux Trois Glorieuses de 1830."
      },
      {
        q: "Quel plan américain aide la reconstruction européenne dès 1948 ?",
        options: ["Plan Truman", "Plan Marshall", "Plan Monnet", "Plan Schuman"],
        correct: 1,
        explainer: "Le Plan Marshall (European Recovery Program) donne 13 milliards de dollars à 16 pays européens entre 1948 et 1952. La France en reçoit environ 2,7 milliards."
      },
      {
        q: "Quand est créée la Sécurité sociale en France ?",
        options: ["1944", "1945", "1947", "1958"],
        correct: 1,
        explainer: "La Sécurité sociale est créée par les ordonnances des 4 et 19 octobre 1945, sous l'impulsion d'Ambroise Croizat et issue du programme du CNR. Universalisation progressive jusqu'aux années 2000."
      },
      {
        q: "Comment appelle-t-on l'explosion démographique d'après-guerre ?",
        options: ["Baby-boom", "Papy-boom", "Jeunesse dorée", "Génération X"],
        correct: 0,
        explainer: "Le baby-boom dure de 1946 à 1964 en France : le pic est en 1949 avec 870 000 naissances. La population passe de 40 millions en 1945 à plus de 50 millions en 1975."
      },
      {
        q: "Quelle institution est créée par le traité de Rome en 1957 ?",
        options: ["L'OTAN", "La CEE", "L'ONU", "Le FMI"],
        correct: 1,
        explainer: "Le traité de Rome du 25 mars 1957 crée la Communauté économique européenne entre six pays : France, RFA, Italie, Belgique, Pays-Bas, Luxembourg. Ancêtre de l'Union européenne."
      },
      {
        q: "Quel équipement électroménager s'impose dans les foyers vers 1960 ?",
        options: ["Le micro-ondes", "Le réfrigérateur", "Le lave-vaisselle", "Internet"],
        correct: 1,
        explainer: "Le réfrigérateur passe de 7% des foyers en 1954 à 73% en 1970. La machine à laver suit la même courbe. La 'civilisation du frigo' transforme la vie domestique."
      },
      {
        q: "Quel choc met fin aux Trente Glorieuses en 1973 ?",
        options: ["Crise des subprimes", "Choc pétrolier", "Krach boursier", "Grippe espagnole"],
        correct: 1,
        explainer: "Le premier choc pétrolier d'octobre 1973, suite à la guerre du Kippour, fait quadrupler le prix du baril. La croissance ralentit brutalement et le chômage explose en France."
      },
      {
        q: "Combien de logements neufs sont construits chaque année dans les années 60 ?",
        options: ["100 000", "300 000", "500 000", "1 million"],
        correct: 2,
        explainer: "La France construit environ 500 000 logements par an dans les années 1960, avec une politique massive de grands ensembles et HLM pour résorber la crise du logement d'après-guerre."
      },
      {
        q: "Quel constructeur lance la 2CV en 1948 ?",
        options: ["Renault", "Peugeot", "Citroën", "Simca"],
        correct: 2,
        explainer: "La Citroën 2CV est lancée au Salon de l'auto 1948. Voiture populaire par excellence, elle sera produite à 5,1 millions d'exemplaires jusqu'en 1990. Elle motorise la France rurale."
      },
      {
        q: "Quelle est l'inflation moyenne annuelle entre 1945 et 1975 en France ?",
        options: ["Moins de 1%", "Environ 5%", "Environ 15%", "Plus de 30%"],
        correct: 1,
        explainer: "L'inflation moyenne est d'environ 5% par an entre 1945 et 1975. Le PIB français croît en moyenne de 5% par an, le pouvoir d'achat triple, l'État crée le SMIG en 1950 puis le SMIC en 1970."
      }
    ]
  }
]
;
