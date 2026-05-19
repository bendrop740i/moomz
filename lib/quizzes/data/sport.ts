import type { Quiz } from "../types";

export const sportQuizzes: Quiz[] = [
  {
    slug: "quiz-coupe-monde-football-histoire",
    title: "Quiz Coupe du Monde de football : l'histoire en 10 questions",
    description: "Teste tes connaissances sur la Coupe du Monde de football : vainqueurs, buts mythiques, records et anecdotes de 1930 à aujourd'hui.",
    topic: "sport",
    emoji: "⚽",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel pays a remporté la première Coupe du Monde en 1930 ?",
        options: ["Brésil", "Uruguay", "Argentine", "Italie"],
        correct: 1,
        explainer: "L'Uruguay a gagné chez lui la première édition en 1930, battant l'Argentine 4-2 en finale à Montevideo. C'était aussi le 100e anniversaire de son indépendance."
      },
      {
        q: "Combien de Coupes du Monde le Brésil a-t-il gagnées ?",
        options: ["4", "5", "6", "3"],
        correct: 1,
        explainer: "Le Brésil détient le record avec 5 titres : 1958, 1962, 1970, 1994 et 2002. C'est aussi la seule équipe à avoir participé à toutes les éditions."
      },
      {
        q: "Qui a marqué le fameux but de la main 'Main de Dieu' en 1986 ?",
        options: ["Pelé", "Diego Maradona", "Michel Platini", "Lionel Messi"],
        correct: 1,
        explainer: "Diego Maradona a inscrit ce but de la main contre l'Angleterre en quarts de finale du Mondial 1986. Quatre minutes plus tard, il marquait le 'But du siècle' après avoir dribblé cinq Anglais."
      },
      {
        q: "En quelle année la France a-t-elle gagné sa deuxième Coupe du Monde ?",
        options: ["2014", "2018", "2022", "2010"],
        correct: 1,
        explainer: "La France a remporté sa deuxième Coupe du Monde en 2018 en Russie, battant la Croatie 4-2 en finale. Vingt ans après le sacre de 1998 à domicile."
      },
      {
        q: "Qui est le meilleur buteur de l'histoire de la Coupe du Monde ?",
        options: ["Ronaldo", "Miroslav Klose", "Pelé", "Just Fontaine"],
        correct: 1,
        explainer: "L'Allemand Miroslav Klose détient le record avec 16 buts inscrits sur quatre Coupes du Monde (2002 à 2014). Il a dépassé le Brésilien Ronaldo (15 buts) en 2014."
      },
      {
        q: "Quel joueur français a marqué un triplé en finale 2022 ?",
        options: ["Antoine Griezmann", "Olivier Giroud", "Kylian Mbappé", "Karim Benzema"],
        correct: 2,
        explainer: "Kylian Mbappé a marqué un triplé en finale contre l'Argentine en 2022, à seulement 23 ans. C'était le premier triplé en finale depuis Geoff Hurst en 1966, mais la France a perdu aux tirs au but."
      },
      {
        q: "Combien de buts Just Fontaine a-t-il marqués en une seule Coupe du Monde ?",
        options: ["10", "11", "13", "15"],
        correct: 2,
        explainer: "Le Français Just Fontaine a inscrit 13 buts en 1958 en Suède, un record toujours imbattu sur une seule édition de Coupe du Monde."
      },
      {
        q: "Quel pays a organisé la Coupe du Monde 2022 ?",
        options: ["Russie", "Qatar", "Brésil", "Afrique du Sud"],
        correct: 1,
        explainer: "Le Qatar a accueilli le Mondial 2022, première édition organisée dans le monde arabe et premier Mondial disputé en hiver (novembre-décembre) à cause de la chaleur."
      },
      {
        q: "Qui a soulevé la Coupe du Monde 1998 en tant que capitaine de la France ?",
        options: ["Zinédine Zidane", "Didier Deschamps", "Laurent Blanc", "Marcel Desailly"],
        correct: 1,
        explainer: "Didier Deschamps, capitaine des Bleus, a soulevé le trophée au Stade de France après la victoire 3-0 contre le Brésil. Il deviendra ensuite sélectionneur champion du monde en 2018."
      },
      {
        q: "Quel pays a remporté la Coupe du Monde 2022 ?",
        options: ["France", "Argentine", "Brésil", "Croatie"],
        correct: 1,
        explainer: "L'Argentine de Lionel Messi a remporté le Mondial 2022 en battant la France aux tirs au but (3-3 puis 4-2 t.a.b.). C'était le troisième titre mondial des Argentins après 1978 et 1986."
      }
    ]
  },
  {
    slug: "quiz-jo-paris-2024-moments",
    title: "Quiz JO Paris 2024 : les moments forts à retenir",
    description: "Reviens sur les Jeux Olympiques de Paris 2024 : cérémonie d'ouverture, médailles françaises, exploits et anecdotes qui ont marqué l'été.",
    topic: "sport",
    emoji: "🥇",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Sur quel fleuve s'est déroulée la cérémonie d'ouverture des JO 2024 ?",
        options: ["La Marne", "La Seine", "Le Rhône", "La Loire"],
        correct: 1,
        explainer: "La cérémonie d'ouverture a eu lieu le 26 juillet 2024 sur la Seine, une première historique : les athlètes ont défilé en bateau sur 6 km à travers Paris."
      },
      {
        q: "Combien de médailles d'or la France a-t-elle remportées aux JO 2024 ?",
        options: ["12", "16", "20", "24"],
        correct: 1,
        explainer: "La France a remporté 16 médailles d'or à Paris 2024, son meilleur total historique. Elle a terminé 5e au tableau des médailles avec 64 médailles au total."
      },
      {
        q: "Qui a porté la flamme finale lors de la cérémonie d'ouverture ?",
        options: ["Zinédine Zidane", "Marie-José Pérec et Teddy Riner", "Tony Parker", "Laure Manaudou"],
        correct: 1,
        explainer: "Marie-José Pérec et Teddy Riner ont allumé ensemble la vasque olympique, une vasque flottante en forme de montgolfière conçue par Mathieu Lehanneur."
      },
      {
        q: "Quel nageur français a remporté 4 médailles d'or à Paris 2024 ?",
        options: ["Florent Manaudou", "Léon Marchand", "Yannick Agnel", "Maxime Grousset"],
        correct: 1,
        explainer: "Léon Marchand est devenu le héros français des JO avec 4 titres olympiques individuels en natation (200m 4 nages, 400m 4 nages, 200m brasse, 200m papillon)."
      },
      {
        q: "Quel sport faisait son entrée olympique à Paris 2024 ?",
        options: ["Le squash", "Le breakdance", "Le cricket", "Le karaté"],
        correct: 1,
        explainer: "Le breakdance (ou breaking) a fait ses débuts olympiques à Paris 2024, sur la place de la Concorde. Une expérience unique : il ne sera pas reconduit à Los Angeles 2028."
      },
      {
        q: "Où s'est déroulée l'épreuve de surf des JO 2024 ?",
        options: ["Biarritz", "Hossegor", "Teahupo'o (Tahiti)", "Lacanau"],
        correct: 2,
        explainer: "Le surf s'est tenu à Teahupo'o, à Tahiti, à 15 700 km de Paris. C'est l'une des vagues les plus dangereuses du monde, célèbre pour ses tubes spectaculaires."
      },
      {
        q: "Qui a gagné le 100m hommes à Paris 2024 ?",
        options: ["Noah Lyles", "Kishane Thompson", "Letsile Tebogo", "Fred Kerley"],
        correct: 0,
        explainer: "L'Américain Noah Lyles a remporté le 100m olympique en 9 secondes 79, devant le Jamaïcain Kishane Thompson au photo-finish (cinq millièmes d'écart)."
      },
      {
        q: "Combien de médailles d'or Teddy Riner a-t-il en carrière olympique après Paris 2024 ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explainer: "Teddy Riner a remporté son 3e titre olympique individuel à Paris 2024 (après 2012 et 2016), plus un titre par équipes. C'est le judoka le plus titré de l'histoire."
      },
      {
        q: "Quelle équipe française a battu l'Espagne en finale du handball ?",
        options: ["L'équipe masculine", "L'équipe féminine", "Les deux", "Aucune des deux"],
        correct: 3,
        explainer: "Les deux équipes françaises de handball ont perdu leur finale en 2024 : les hommes contre le Danemark, les femmes contre la Norvège. Le doublé olympique de Tokyo n'a pas été réédité."
      },
      {
        q: "Quel pays a terminé en tête du tableau des médailles ?",
        options: ["États-Unis", "Chine", "Japon", "Royaume-Uni"],
        correct: 0,
        explainer: "Les États-Unis et la Chine étaient à égalité avec 40 médailles d'or, mais les USA ont terminé premiers grâce à un meilleur total de médailles (126 contre 91)."
      }
    ]
  },
  {
    slug: "quiz-legendes-football-francais",
    title: "Quiz légendes du football français : Zidane, Platini, Mbappé",
    description: "Connais-tu les plus grandes stars du football français ? De Just Fontaine à Mbappé, en passant par Platini et Zidane : prouve-le.",
    topic: "sport",
    emoji: "⚽",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de Ballons d'Or Michel Platini a-t-il remportés ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explainer: "Michel Platini a gagné le Ballon d'Or trois années consécutives : 1983, 1984 et 1985. Il est le seul joueur français à avoir réalisé cet exploit."
      },
      {
        q: "Dans quel club Zinédine Zidane a-t-il fini sa carrière de joueur ?",
        options: ["Juventus", "Real Madrid", "Cannes", "Bordeaux"],
        correct: 1,
        explainer: "Zidane a terminé sa carrière au Real Madrid en 2006, après la finale de Coupe du Monde perdue contre l'Italie où il a été expulsé pour son coup de tête sur Materazzi."
      },
      {
        q: "Quel club a formé Kylian Mbappé ?",
        options: ["PSG", "AS Monaco", "Bondy", "Lyon"],
        correct: 1,
        explainer: "Kylian Mbappé a fait ses débuts pros à l'AS Monaco en 2015 à 16 ans. Il a marqué l'histoire en aidant Monaco à gagner la Ligue 1 en 2017 avant de rejoindre le PSG."
      },
      {
        q: "Qui détient le record de buts en équipe de France ?",
        options: ["Thierry Henry", "Olivier Giroud", "Kylian Mbappé", "Michel Platini"],
        correct: 1,
        explainer: "Olivier Giroud a dépassé Thierry Henry (51 buts) lors de la Coupe du Monde 2022. Kylian Mbappé est en passe de battre ce record à son tour."
      },
      {
        q: "En quelle année Zidane a-t-il marqué deux buts de la tête en finale du Mondial ?",
        options: ["1998", "2000", "2002", "2006"],
        correct: 0,
        explainer: "Zidane a marqué deux buts de la tête en finale du Mondial 1998 contre le Brésil (3-0). C'est l'image iconique du football français."
      },
      {
        q: "Quel club Thierry Henry a-t-il marqué de son empreinte en Premier League ?",
        options: ["Manchester United", "Arsenal", "Chelsea", "Liverpool"],
        correct: 1,
        explainer: "Thierry Henry est une légende d'Arsenal, club où il a évolué de 1999 à 2007. Il est le meilleur buteur de l'histoire des Gunners avec 228 buts."
      },
      {
        q: "Combien de Ligues des Champions Zidane a-t-il gagnées comme entraîneur ?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explainer: "Zinédine Zidane a remporté trois Ligues des Champions consécutives avec le Real Madrid en 2016, 2017 et 2018. Un exploit jamais réalisé par un autre entraîneur."
      },
      {
        q: "Quel joueur français a gagné le Ballon d'Or 2022 ?",
        options: ["Kylian Mbappé", "Karim Benzema", "Antoine Griezmann", "Paul Pogba"],
        correct: 1,
        explainer: "Karim Benzema a remporté le Ballon d'Or 2022 après une saison historique avec le Real Madrid (44 buts, Ligue des Champions). C'était le premier Français lauréat depuis Zidane en 1998."
      },
      {
        q: "Dans quel club Raymond Kopa a-t-il évolué en Espagne ?",
        options: ["FC Barcelone", "Real Madrid", "Atlético Madrid", "Valencia"],
        correct: 1,
        explainer: "Raymond Kopa a joué au Real Madrid de 1956 à 1959, gagnant trois Coupes d'Europe consécutives. Il a remporté le Ballon d'Or en 1958."
      },
      {
        q: "Combien de Coupes du Monde des moins de 20 ans la France a-t-elle gagnées ?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explainer: "La France a gagné la Coupe du Monde U20 en 2013 en Turquie, avec Paul Pogba élu meilleur joueur du tournoi. Ce fut un signe annonciateur d'une génération dorée."
      }
    ]
  },
  {
    slug: "quiz-nba-legendes-records",
    title: "Quiz NBA : légendes et records de la grande ligue",
    description: "Michael Jordan, LeBron James, Kobe Bryant : combien sais-tu sur les légendes de la NBA, leurs records et leurs exploits ?",
    topic: "sport",
    emoji: "🏀",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de titres NBA Michael Jordan a-t-il remportés ?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explainer: "Michael Jordan a remporté 6 titres NBA avec les Chicago Bulls (1991-1993 puis 1996-1998). Il a été MVP des Finales à chaque fois, un record."
      },
      {
        q: "Qui détient le record du plus grand nombre de points marqués en un match ?",
        options: ["Kobe Bryant", "Wilt Chamberlain", "Michael Jordan", "LeBron James"],
        correct: 1,
        explainer: "Wilt Chamberlain a marqué 100 points en un seul match le 2 mars 1962 avec les Philadelphia Warriors contre les New York Knicks. Le record tient depuis plus de 60 ans."
      },
      {
        q: "Quel est le meilleur scoreur de l'histoire de la NBA ?",
        options: ["Michael Jordan", "Kareem Abdul-Jabbar", "LeBron James", "Karl Malone"],
        correct: 2,
        explainer: "LeBron James a dépassé Kareem Abdul-Jabbar le 7 février 2023 et continue d'agrandir son record. Il a franchi la barre des 40 000 points en mars 2024."
      },
      {
        q: "Combien de points Kobe Bryant a-t-il marqués lors de son dernier match en 2016 ?",
        options: ["50", "55", "60", "65"],
        correct: 2,
        explainer: "Kobe Bryant a marqué 60 points lors de son dernier match contre Utah le 13 avril 2016, à 37 ans. Une sortie de scène mythique avec les Lakers."
      },
      {
        q: "Quel français a été le premier numéro 1 de la draft NBA ?",
        options: ["Tony Parker", "Joakim Noah", "Victor Wembanyama", "Rudy Gobert"],
        correct: 2,
        explainer: "Victor Wembanyama a été choisi en première position de la draft NBA 2023 par les San Antonio Spurs. Il a été élu Rookie de l'année en 2024."
      },
      {
        q: "Quelle équipe a remporté le plus de titres NBA dans l'histoire ?",
        options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        correct: 1,
        explainer: "Les Boston Celtics détiennent le record avec 18 titres NBA après leur sacre en 2024. Ils ont dépassé les Lakers (17 titres)."
      },
      {
        q: "Qui a remporté le titre de MVP de la saison régulière 2023-2024 ?",
        options: ["Nikola Jokic", "Joel Embiid", "Giannis Antetokounmpo", "Luka Doncic"],
        correct: 0,
        explainer: "Nikola Jokic a remporté son troisième titre de MVP en 2024 avec les Denver Nuggets. Il est le huitième joueur de l'histoire à gagner trois MVP."
      },
      {
        q: "Quel joueur a le record du plus grand nombre de triple-doubles en carrière ?",
        options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "LeBron James"],
        correct: 2,
        explainer: "Russell Westbrook a battu le record d'Oscar Robertson (181) en mai 2021 et compte plus de 200 triple-doubles. Il a aussi été MVP en 2017 avec moyenne en triple-double sur la saison."
      },
      {
        q: "Quel joueur surnommé 'The Greek Freak' a gagné un titre NBA en 2021 ?",
        options: ["Luka Doncic", "Nikola Jokic", "Giannis Antetokounmpo", "Joel Embiid"],
        correct: 2,
        explainer: "Giannis Antetokounmpo a mené les Milwaukee Bucks au titre en 2021, avec 50 points dans le match décisif (Game 6). Il a été MVP des Finales."
      },
      {
        q: "Combien de matches consécutifs Wilt Chamberlain a-t-il joué sans être éliminé ?",
        options: ["Aucun, il jouait peu", "Tous, il n'a jamais raté un match en 14 saisons", "Quelques-uns", "10 matchs"],
        correct: 1,
        explainer: "Wilt Chamberlain n'a jamais été éliminé pour 6 fautes en 14 saisons NBA. Une statistique unique pour un pivot dominant qui jouait presque tous les matches en entier."
      }
    ]
  },
  {
    slug: "quiz-roland-garros-tennis-legendes",
    title: "Quiz Roland-Garros et tennis : les rois de la terre battue",
    description: "Federer, Nadal, Djokovic, Yannick Noah : que sais-tu vraiment de Roland-Garros et des plus grandes légendes du tennis mondial ?",
    topic: "sport",
    emoji: "🎾",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de Roland-Garros Rafael Nadal a-t-il remportés ?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explainer: "Rafael Nadal détient le record absolu avec 14 titres à Roland-Garros (de 2005 à 2022). C'est l'une des séries les plus dominantes de l'histoire du sport."
      },
      {
        q: "En quelle année Yannick Noah a-t-il gagné Roland-Garros ?",
        options: ["1981", "1983", "1985", "1987"],
        correct: 1,
        explainer: "Yannick Noah a remporté Roland-Garros en 1983 face à Mats Wilander. Il reste le dernier Français vainqueur du tournoi en simple messieurs depuis plus de 40 ans."
      },
      {
        q: "Qui détient le record du nombre de Grands Chelems hommes ?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correct: 2,
        explainer: "Novak Djokovic détient le record avec 24 titres du Grand Chelem, devant Rafael Nadal (22) et Roger Federer (20). Il les a tous remportés au moins trois fois chacun."
      },
      {
        q: "Sur quelle surface se joue Wimbledon ?",
        options: ["Terre battue", "Dur", "Gazon", "Synthétique"],
        correct: 2,
        explainer: "Wimbledon est le seul tournoi du Grand Chelem joué sur gazon. Le tournoi britannique existe depuis 1877, c'est le plus ancien tournoi de tennis du monde."
      },
      {
        q: "Qui est la dernière française à avoir gagné Roland-Garros en simple ?",
        options: ["Amélie Mauresmo", "Mary Pierce", "Marion Bartoli", "Caroline Garcia"],
        correct: 1,
        explainer: "Mary Pierce a gagné Roland-Garros en 2000 face à Conchita Martínez. Aucune Française ne s'est imposée à Paris en simple depuis."
      },
      {
        q: "Combien de fois Roger Federer a-t-il gagné Wimbledon ?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explainer: "Roger Federer a remporté Wimbledon 8 fois (2003-2007, 2009, 2012, 2017). C'est un record absolu en simple messieurs sur le tournoi."
      },
      {
        q: "Quelle joueuse a gagné les 4 tournois du Grand Chelem en 1988 ?",
        options: ["Martina Navratilova", "Steffi Graf", "Chris Evert", "Monica Seles"],
        correct: 1,
        explainer: "Steffi Graf a réalisé en 1988 le 'Golden Slam' : les 4 Grands Chelems plus l'or olympique à Séoul. Un exploit unique dans l'histoire du tennis."
      },
      {
        q: "Quel français a atteint la finale de Roland-Garros 2008 ?",
        options: ["Richard Gasquet", "Gaël Monfils", "Jo-Wilfried Tsonga", "Gilles Simon"],
        correct: 2,
        explainer: "C'est en fait une question piège : aucun de ces Français n'a atteint la finale de Roland-Garros 2008. La finale opposait Nadal à Federer (Nadal vainqueur)."
      },
      {
        q: "Quel court principal de Roland-Garros porte le nom d'un aviateur ?",
        options: ["Court Suzanne-Lenglen", "Court Philippe-Chatrier", "Court Mathieu", "Court Jean-Bouin"],
        correct: 1,
        explainer: "Philippe Chatrier était président de la Fédération française de tennis, pas aviateur. Question piège : aucun court principal de Roland-Garros ne porte le nom d'un aviateur, contrairement au stade Jean-Bouin (athlète) à proximité."
      },
      {
        q: "Combien d'année Iga Swiatek a-t-elle gagné Roland-Garros consécutivement ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explainer: "Iga Swiatek a remporté Roland-Garros trois fois consécutivement (2022, 2023, 2024) et quatre titres au total (avec 2020). Elle est devenue la nouvelle reine de la terre battue."
      }
    ]
  },
  {
    slug: "quiz-formule-1-champions-mythiques",
    title: "Quiz Formule 1 : champions et écuries mythiques",
    description: "Schumacher, Hamilton, Senna, Verstappen : teste tes connaissances sur les champions et les courses légendaires de la F1.",
    topic: "sport",
    emoji: "🏎️",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de titres de champion du monde Michael Schumacher détient-il ?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explainer: "Michael Schumacher a remporté 7 titres de champion du monde (1994, 1995, 2000-2004). Ce record a été égalé par Lewis Hamilton en 2020."
      },
      {
        q: "Quel français est devenu champion du monde de F1 en 1985 et 1986 ?",
        options: ["Jean Alesi", "Alain Prost", "René Arnoux", "Patrick Tambay"],
        correct: 1,
        explainer: "Alain Prost a remporté 4 titres mondiaux (1985, 1986, 1989, 1993). C'est le pilote français le plus titré de l'histoire de la F1, surnommé 'Le Professeur'."
      },
      {
        q: "Quelle écurie a remporté le plus de Grands Prix de F1 ?",
        options: ["Mercedes", "Ferrari", "McLaren", "Red Bull"],
        correct: 1,
        explainer: "Ferrari détient le record avec plus de 240 victoires en Grand Prix, plus que toute autre écurie. La Scuderia est aussi la seule à avoir participé à toutes les saisons depuis 1950."
      },
      {
        q: "Sur quel circuit Ayrton Senna a-t-il perdu la vie en 1994 ?",
        options: ["Monza", "Imola", "Spa", "Monaco"],
        correct: 1,
        explainer: "Ayrton Senna est décédé le 1er mai 1994 lors du Grand Prix de Saint-Marin à Imola, après un accident au virage de Tamburello. Roland Ratzenberger était mort la veille sur le même circuit."
      },
      {
        q: "Combien de titres Lewis Hamilton a-t-il remportés ?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explainer: "Lewis Hamilton a remporté 7 titres mondiaux (2008, 2014-2015, 2017-2020), égalant le record de Michael Schumacher. Il détient aussi le record de victoires en GP."
      },
      {
        q: "Quel pilote a remporté le championnat du monde 2024 ?",
        options: ["Lando Norris", "Max Verstappen", "Charles Leclerc", "Lewis Hamilton"],
        correct: 1,
        explainer: "Max Verstappen a remporté son 4e titre consécutif en 2024, malgré une saison plus compétitive avec McLaren et Ferrari. Il a égalé Vettel et Prost (4 titres)."
      },
      {
        q: "Quel est le plus jeune champion du monde de F1 ?",
        options: ["Lewis Hamilton", "Sebastian Vettel", "Max Verstappen", "Fernando Alonso"],
        correct: 1,
        explainer: "Sebastian Vettel est devenu champion du monde en 2010 à 23 ans et 134 jours, le plus jeune de l'histoire. Il a ensuite enchaîné 4 titres consécutifs avec Red Bull (2010-2013)."
      },
      {
        q: "Combien de fois Monaco accueille-t-il le Grand Prix de F1 par an ?",
        options: ["1", "2", "3", "Variable"],
        correct: 0,
        explainer: "Le Grand Prix de Monaco a lieu une fois par an, généralement fin mai. C'est l'un des circuits les plus mythiques de la F1, créé en 1929."
      },
      {
        q: "Quel pilote français court chez Ferrari depuis 2019 ?",
        options: ["Pierre Gasly", "Esteban Ocon", "Charles Leclerc", "Aucun"],
        correct: 3,
        explainer: "Question piège : Charles Leclerc est Monégasque, pas Français. Aucun pilote français ne court chez Ferrari depuis Jean Alesi (1991-1995). Esteban Ocon a rejoint Haas en 2025."
      },
      {
        q: "Qui a inventé la Formule 1 moderne en 1950 ?",
        options: ["La FIA", "Enzo Ferrari", "Bernie Ecclestone", "Jean-Marie Balestre"],
        correct: 0,
        explainer: "La FIA (Fédération Internationale de l'Automobile) a lancé le championnat du monde de F1 en 1950, avec le premier Grand Prix à Silverstone le 13 mai 1950."
      }
    ]
  },
  {
    slug: "quiz-rugby-xv-france-coupe-monde",
    title: "Quiz Rugby : XV de France et Coupe du Monde",
    description: "Du Grand Chelem aux finales de Coupe du Monde : teste tes connaissances sur le rugby français et les All Blacks.",
    topic: "sport",
    emoji: "🏉",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de Coupes du Monde le XV de France a-t-il remportées ?",
        options: ["0", "1", "2", "3"],
        correct: 0,
        explainer: "Le XV de France n'a jamais remporté la Coupe du Monde de rugby. Il a perdu trois finales (1987, 1999, 2011), toujours face aux All Blacks ou aux Australiens."
      },
      {
        q: "Quel pays a remporté la première Coupe du Monde de rugby en 1987 ?",
        options: ["Australie", "Nouvelle-Zélande", "Angleterre", "Afrique du Sud"],
        correct: 1,
        explainer: "La Nouvelle-Zélande a gagné la première Coupe du Monde de rugby en 1987 à domicile, battant la France 29-9 en finale à Eden Park."
      },
      {
        q: "Quel pays a remporté la Coupe du Monde 2023 organisée en France ?",
        options: ["Nouvelle-Zélande", "Afrique du Sud", "France", "Irlande"],
        correct: 1,
        explainer: "L'Afrique du Sud a remporté la Coupe du Monde 2023 en battant la Nouvelle-Zélande 12-11 en finale au Stade de France. C'était leur 4e titre, un record."
      },
      {
        q: "Comment s'appelle le tournoi de rugby des six nations européennes ?",
        options: ["Coupe d'Europe", "Six Nations", "Champions Cup", "Top 14"],
        correct: 1,
        explainer: "Le Tournoi des Six Nations oppose chaque hiver la France, l'Angleterre, l'Écosse, le Pays de Galles, l'Irlande et l'Italie. C'est le plus ancien tournoi international rugby."
      },
      {
        q: "Quel ouvreur français a inscrit 380 points en équipe nationale ?",
        options: ["Frédéric Michalak", "Morgan Parra", "Romain Ntamack", "Dimitri Yachvili"],
        correct: 0,
        explainer: "Frédéric Michalak est le meilleur marqueur de points de l'histoire du XV de France avec 436 points entre 2001 et 2015."
      },
      {
        q: "Quel club a remporté le plus de Top 14 en France ?",
        options: ["Toulouse", "Toulon", "Clermont", "Racing 92"],
        correct: 0,
        explainer: "Le Stade Toulousain est le club le plus titré du rugby français avec 23 boucliers de Brennus, dont le dernier en 2024."
      },
      {
        q: "Qui était le capitaine du XV de France à la Coupe du Monde 2023 ?",
        options: ["Romain Ntamack", "Antoine Dupont", "Charles Ollivon", "Grégory Alldritt"],
        correct: 1,
        explainer: "Antoine Dupont était capitaine du XV de France à la Coupe du Monde 2023. Élu meilleur joueur du monde 2021, il est considéré comme le meilleur joueur du monde actuellement."
      },
      {
        q: "Combien de points vaut un essai au rugby à XV ?",
        options: ["3", "5", "6", "7"],
        correct: 1,
        explainer: "Un essai vaut 5 points au rugby à XV (porté à 5 points en 1992, contre 4 auparavant). Avec la transformation, le total peut monter à 7 points."
      },
      {
        q: "Quel club français a gagné la Champions Cup en 2024 ?",
        options: ["Toulouse", "La Rochelle", "Bordeaux-Bègles", "Racing 92"],
        correct: 0,
        explainer: "Toulouse a remporté la Champions Cup 2024 en battant le Leinster 31-22 après prolongation. C'était leur 6e titre européen, un record."
      },
      {
        q: "Que signifie le 'haka' des All Blacks avant un match ?",
        options: ["Une danse de victoire", "Un chant de guerre maori", "Une prière", "Un échauffement"],
        correct: 1,
        explainer: "Le haka est un chant de guerre maori traditionnel exécuté avant chaque match par les All Blacks depuis 1905. Le plus connu est le 'Ka Mate', composé par le chef Te Rauparaha en 1820."
      }
    ]
  },
  {
    slug: "quiz-tour-de-france-cyclisme",
    title: "Quiz Tour de France et cyclisme : la Grande Boucle",
    description: "Cols mythiques, maillot jaune, légendes du peloton : que sais-tu vraiment du Tour de France et du cyclisme professionnel ?",
    topic: "sport",
    emoji: "🚴",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quelle couleur porte le leader du classement général du Tour de France ?",
        options: ["Vert", "Rouge", "Jaune", "Blanc à pois rouges"],
        correct: 2,
        explainer: "Le leader du classement général porte le maillot jaune depuis 1919. La couleur a été choisie pour rappeler les pages jaunes du journal L'Auto qui organisait le Tour."
      },
      {
        q: "Combien de Tours de France Eddy Merckx a-t-il remportés ?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explainer: "Eddy Merckx 'Le Cannibale' a remporté 5 Tours de France (1969-1972 et 1974). Il est aussi le seul à avoir gagné les 3 grands tours et tous les classements la même année (1969)."
      },
      {
        q: "Quel col est surnommé 'le Géant de Provence' ?",
        options: ["L'Alpe d'Huez", "Le Tourmalet", "Le Mont Ventoux", "Le Galibier"],
        correct: 2,
        explainer: "Le Mont Ventoux, culminant à 1909 m, est surnommé 'le Géant de Provence'. C'est l'un des cols les plus mythiques du Tour de France, où Tom Simpson est mort en 1967."
      },
      {
        q: "Quel coureur a été déchu de ses 7 titres pour dopage ?",
        options: ["Jan Ullrich", "Lance Armstrong", "Marco Pantani", "Floyd Landis"],
        correct: 1,
        explainer: "Lance Armstrong, vainqueur de 7 Tours consécutifs (1999-2005), a été déchu de tous ses titres en 2012 par l'UCI pour dopage généralisé."
      },
      {
        q: "Quel coureur slovène a remporté le Tour de France 2020 et 2021 ?",
        options: ["Primoz Roglic", "Tadej Pogacar", "Jonas Vingegaard", "Egan Bernal"],
        correct: 1,
        explainer: "Tadej Pogacar a remporté le Tour 2020 et 2021 à 21 et 22 ans. Devenu phénomène mondial, il a aussi gagné en 2024 avec un Giro/Tour la même année."
      },
      {
        q: "Quel coureur français a gagné le Tour de France en 1985 ?",
        options: ["Laurent Fignon", "Bernard Hinault", "Stephen Roche", "Greg LeMond"],
        correct: 1,
        explainer: "Bernard Hinault 'le Blaireau' a remporté le Tour 1985, son cinquième et dernier. Il est le dernier vainqueur français du Tour de France depuis près de 40 ans."
      },
      {
        q: "Combien d'étapes y a-t-il généralement sur le Tour de France ?",
        options: ["18", "21", "23", "25"],
        correct: 1,
        explainer: "Le Tour de France compte 21 étapes réparties sur 23 jours (avec 2 jours de repos). La distance totale tourne autour de 3500 km."
      },
      {
        q: "Que représente le maillot blanc à pois rouges ?",
        options: ["Meilleur jeune", "Meilleur sprinteur", "Meilleur grimpeur", "Combativité"],
        correct: 2,
        explainer: "Le maillot blanc à pois rouges récompense le meilleur grimpeur (classement de la montagne). Il existe depuis 1975 et a été conçu en partenariat avec un chocolatier."
      },
      {
        q: "En quelle année le premier Tour de France a-t-il eu lieu ?",
        options: ["1899", "1903", "1910", "1919"],
        correct: 1,
        explainer: "Le premier Tour de France a été couru en 1903, organisé par le journal L'Auto. Maurice Garin est le premier vainqueur sur 6 étapes."
      },
      {
        q: "Quel coureur danois a remporté le Tour de France 2022 et 2023 ?",
        options: ["Jakob Fuglsang", "Jonas Vingegaard", "Magnus Cort", "Mads Pedersen"],
        correct: 1,
        explainer: "Jonas Vingegaard, coureur Jumbo-Visma, a remporté le Tour 2022 et 2023 face à Tadej Pogacar. C'est le premier Danois vainqueur de la Grande Boucle depuis Bjarne Riis en 1996."
      }
    ]
  },
  {
    slug: "quiz-athletisme-records-mondiaux",
    title: "Quiz athlétisme : les records mondiaux à connaître",
    description: "Usain Bolt, Marie-José Pérec, perche, marathon : connais-tu les records et légendes de l'athlétisme ?",
    topic: "sport",
    emoji: "🏆",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel est le record du monde du 100m hommes ?",
        options: ["9.58", "9.63", "9.69", "9.74"],
        correct: 0,
        explainer: "Usain Bolt détient le record du monde du 100m en 9 secondes 58, établi aux Championnats du monde de Berlin en 2009. Un record qui semble imbattable."
      },
      {
        q: "Qui détient le record du saut à la perche hommes ?",
        options: ["Sergueï Bubka", "Renaud Lavillenie", "Armand Duplantis", "Sam Kendricks"],
        correct: 2,
        explainer: "Armand 'Mondo' Duplantis a battu son propre record à 6,26 m en 2025. Le Suédois né aux États-Unis a battu le record une vingtaine de fois depuis 2020."
      },
      {
        q: "Quelle française a remporté l'or olympique du 400m en 1996 ?",
        options: ["Christine Arron", "Marie-José Pérec", "Muriel Hurtis", "Eunice Barber"],
        correct: 1,
        explainer: "Marie-José Pérec a remporté l'or olympique du 400m à Atlanta 1996, son deuxième titre olympique après 1992. Elle est triple championne olympique au total."
      },
      {
        q: "Combien de médailles d'or olympiques Usain Bolt a-t-il remportées ?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explainer: "Usain Bolt a remporté 8 titres olympiques (3 à Pékin 2008, 3 à Londres 2012, 2 à Rio 2016), après qu'une médaille de Pékin 2008 ait été retirée pour dopage d'un coéquipier."
      },
      {
        q: "Quel est le record du monde du marathon hommes ?",
        options: ["2h00'35", "2h01'09", "2h02'48", "2h03'58"],
        correct: 1,
        explainer: "Kelvin Kiptum a battu le record du monde du marathon en 2 heures 0 minute 35 secondes à Chicago en octobre 2023, à 23 ans. Il est tragiquement décédé en février 2024."
      },
      {
        q: "Quel français détient le record d'Europe du décathlon ?",
        options: ["Romain Barras", "Kevin Mayer", "Pascal Esteva", "Pierre-Ambroise Bosse"],
        correct: 1,
        explainer: "Kevin Mayer détient le record du monde du décathlon avec 9126 points, établi à Talence en 2018. Il a remporté l'argent olympique à Rio 2016 et Tokyo 2020."
      },
      {
        q: "Qui a battu le record du monde du 200m femmes en 2021 ?",
        options: ["Sha'Carri Richardson", "Elaine Thompson-Herah", "Shelly-Ann Fraser-Pryce", "Florence Griffith-Joyner"],
        correct: 3,
        explainer: "Question piège : le record du monde du 200m femmes (21''34) tient toujours depuis 1988, établi par Florence Griffith-Joyner. Elaine Thompson-Herah s'en est rapprochée à 21''53."
      },
      {
        q: "Combien de fois faut-il faire le tour de la piste pour un 1500m ?",
        options: ["3", "3.5", "3.75", "4"],
        correct: 2,
        explainer: "Le 1500m se court en 3 tours et trois quarts d'une piste standard de 400m. La distance vient à l'origine du système métrique appliqué au mile (1609m)."
      },
      {
        q: "Qui détient le record du monde du saut en longueur hommes ?",
        options: ["Carl Lewis", "Mike Powell", "Bob Beamon", "Ivan Pedroso"],
        correct: 1,
        explainer: "Mike Powell détient le record du monde du saut en longueur avec 8,95 m, établi aux Mondiaux de Tokyo 1991. Il a battu le record de Bob Beamon (8,90 m) qui datait de 1968."
      },
      {
        q: "Quel coureur kényan détient le record du marathon féminin ?",
        options: ["Mary Keitany", "Brigid Kosgei", "Tigst Assefa", "Ruth Chepngetich"],
        correct: 3,
        explainer: "Ruth Chepngetich a couru le marathon de Chicago en 2 heures 9 minutes 56 secondes en octobre 2024, devenant la première femme à passer sous 2h10. Un record historique."
      }
    ]
  },
  {
    slug: "quiz-esport-jeu-video-competition",
    title: "Quiz e-sport : le sport électronique en compétition",
    description: "League of Legends, CS, Fortnite : le sport électronique brasse des millions. Teste tes connaissances sur l'e-sport mondial.",
    topic: "sport",
    emoji: "🏆",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel jeu organise les Worlds chaque année avec un cash prize de millions ?",
        options: ["Fortnite", "League of Legends", "Call of Duty", "FIFA"],
        correct: 1,
        explainer: "Les World Championship de League of Legends sont la finale annuelle organisée par Riot Games. Plus de 100 millions de spectateurs ont suivi la finale 2018."
      },
      {
        q: "Quel pays a remporté 7 fois les Worlds de League of Legends ?",
        options: ["Chine", "Corée du Sud", "Europe", "États-Unis"],
        correct: 1,
        explainer: "La Corée du Sud domine l'e-sport sur League of Legends avec 7 titres mondiaux pour la région LCK, dont 4 consécutifs pour SK Telecom T1 avec le joueur Faker."
      },
      {
        q: "Qui est considéré comme le meilleur joueur de League of Legends de tous les temps ?",
        options: ["Uzi", "Caps", "Faker", "Doublelift"],
        correct: 2,
        explainer: "Lee 'Faker' Sang-hyeok est considéré comme le GOAT (greatest of all time) du LoL avec 5 titres mondiaux (2013, 2015, 2016, 2023, 2024) à plus de 28 ans."
      },
      {
        q: "Quelle équipe française a remporté la ligue européenne LEC en 2019 ?",
        options: ["Karmine Corp", "G2 Esports", "Vitality", "Fnatic"],
        correct: 1,
        explainer: "G2 Esports, basée à Berlin mais avec un effectif européen, a dominé le LEC en 2019 et atteint la finale des Worlds (perdue contre FunPlus Phoenix)."
      },
      {
        q: "Quel jeu de tir tactique est devenu populaire avec son équivalent 'Major' ?",
        options: ["Valorant", "Counter-Strike", "Rainbow Six", "Apex Legends"],
        correct: 1,
        explainer: "Counter-Strike (depuis CS:GO puis CS2) organise les 'Major' deux fois par an, dotés de millions de dollars. C'est l'un des plus anciens circuits e-sport (depuis 2013)."
      },
      {
        q: "Combien de millions de dollars a remporté Bugha en gagnant la Fortnite World Cup 2019 ?",
        options: ["1 million", "2 millions", "3 millions", "5 millions"],
        correct: 2,
        explainer: "Kyle 'Bugha' Giersdorf a remporté 3 millions de dollars en gagnant la Fortnite World Cup 2019 à 16 ans, le plus gros prize money e-sport à l'époque pour un joueur."
      },
      {
        q: "Quelle équipe française est devenue énorme grâce au stream de Kameto ?",
        options: ["Team Vitality", "Karmine Corp", "Solary", "GameWard"],
        correct: 1,
        explainer: "La Karmine Corp, fondée en 2020 par Kameto et Prime, est devenue un phénomène culturel français. Elle joue désormais en LEC et remplit le Stade de France pour ses matchs."
      },
      {
        q: "Quel est le jeu d'e-sport au plus gros cash prize total versé ?",
        options: ["League of Legends", "Dota 2", "Counter-Strike", "Fortnite"],
        correct: 1,
        explainer: "Dota 2 a versé plus de 350 millions de dollars de prix au total, grâce aux énormes pools du tournoi 'The International' (jusqu'à 40 millions pour une édition)."
      },
      {
        q: "Quel est le tournoi annuel de Dota 2 organisé par Valve ?",
        options: ["The Major", "The International", "The Championship", "DreamLeague"],
        correct: 1,
        explainer: "The International est le tournoi mondial annuel de Dota 2, créé en 2011. Il s'est tenu à Seattle, Vancouver, Shanghai, Bucarest et Singapour."
      },
      {
        q: "Quelle ville a accueilli les premiers Olympic Esports Games ?",
        options: ["Paris", "Riyad", "Tokyo", "Seoul"],
        correct: 1,
        explainer: "Riyad en Arabie saoudite accueille les Olympic Esports Games à partir de 2025 dans le cadre d'un accord de 12 ans avec le CIO. Une décision controversée."
      }
    ]
  },
  {
    slug: "quiz-handball-equipe-france-doublé",
    title: "Quiz handball : les Experts français et leurs exploits",
    description: "Doublé olympique, Coupes du Monde, frères Karabatic : que sais-tu sur l'équipe de France de handball la plus titrée du monde ?",
    topic: "sport",
    emoji: "🤾",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Combien de titres olympiques l'équipe de France masculine de handball a-t-elle remportés ?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explainer: "L'équipe de France masculine de handball a remporté 3 titres olympiques (2008 à Pékin, 2012 à Londres, 2020 à Tokyo). C'est la nation la plus titrée du handball olympique."
      },
      {
        q: "Quel surnom porte l'équipe de France masculine de handball ?",
        options: ["Les Bleus", "Les Costauds", "Les Experts", "Les Magnifiques"],
        correct: 2,
        explainer: "L'équipe de France masculine est surnommée 'Les Experts' depuis le titre mondial de 2001. Avant ils s'appelaient 'Les Barjots' (1993-1996) puis 'Les Costauds'."
      },
      {
        q: "Qui est le joueur de handball français le plus titré ?",
        options: ["Jérôme Fernandez", "Daniel Narcisse", "Nikola Karabatic", "Thierry Omeyer"],
        correct: 2,
        explainer: "Nikola Karabatic est élu trois fois meilleur joueur du monde (2007, 2014, 2016). Avec 3 titres olympiques, 4 mondiaux et 3 européens, il est l'un des plus grands handballeurs de tous les temps."
      },
      {
        q: "Combien de titres mondiaux la France masculine a-t-elle remportés ?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explainer: "La France masculine a remporté 6 titres de championne du monde (1995, 2001, 2009, 2011, 2015, 2017). Aucune autre nation n'en a autant."
      },
      {
        q: "Qui a porté les Bleues au sacre olympique en 2020 ?",
        options: ["Allison Pineau", "Estelle Nze Minko", "Olivier Krumbholz", "Toutes ces réponses"],
        correct: 3,
        explainer: "Olivier Krumbholz, sélectionneur historique des Bleues, a mené l'équipe au titre olympique 2020 grâce à Pineau, Nze Minko et toute la génération dorée. Premier titre olympique féminin français."
      },
      {
        q: "Quel club français multiplie les Ligues des Champions de hand ?",
        options: ["Paris Saint-Germain HB", "Montpellier HB", "Aucun", "Nantes HB"],
        correct: 1,
        explainer: "Le Montpellier HB a remporté la Ligue des Champions en 2003 et 2018. C'est le seul club français à avoir gagné la prestigieuse compétition européenne masculine."
      },
      {
        q: "Combien de joueurs sont sur le terrain en handball par équipe ?",
        options: ["6", "7", "8", "11"],
        correct: 1,
        explainer: "Le handball se joue à 7 contre 7 (6 joueurs de champ + 1 gardien). Le match se déroule en deux mi-temps de 30 minutes."
      },
      {
        q: "Qui était le gardien légendaire des Experts entre 2008 et 2017 ?",
        options: ["Cyril Dumoulin", "Thierry Omeyer", "Daouda Karaboué", "Vincent Gérard"],
        correct: 1,
        explainer: "Thierry Omeyer est considéré comme le meilleur gardien de l'histoire. Il a remporté tous les titres possibles avec les Experts (3 JO, 4 Mondiaux, 3 Euros)."
      },
      {
        q: "Le frère de Nikola Karabatic est aussi handballeur. Comment s'appelle-t-il ?",
        options: ["Luc", "Luka", "Marko", "Stefan"],
        correct: 1,
        explainer: "Luka Karabatic, frère cadet de Nikola, est pivot de l'équipe de France et a aussi remporté plusieurs titres. Leur père Branko était également handballeur professionnel."
      },
      {
        q: "Quel pays a battu la France en finale olympique 2024 hommes ?",
        options: ["Norvège", "Danemark", "Allemagne", "Espagne"],
        correct: 1,
        explainer: "Le Danemark a battu la France en finale des JO 2024 (39-26), privant les Experts d'un quatrième titre olympique. Mikkel Hansen a brillé pour les Danois."
      }
    ]
  },
  {
    slug: "quiz-ligue-1-champions-league-foot",
    title: "Quiz Ligue 1 et Champions League : les clubs européens",
    description: "PSG, Marseille, Real Madrid, Barça : que sais-tu sur la Ligue 1 française et la Champions League européenne ?",
    topic: "sport",
    emoji: "⚽",
    lang: "fr",
    updatedAt: "2026-05-19",
    questions: [
      {
        q: "Quel club français a gagné la Ligue des Champions en 1993 ?",
        options: ["PSG", "Olympique de Marseille", "AS Monaco", "Lyon"],
        correct: 1,
        explainer: "L'OM est le seul club français à avoir remporté la Ligue des Champions, en 1993 face au Milan AC (1-0). C'était sous l'ère de Bernard Tapie."
      },
      {
        q: "Quel club a remporté le plus de Ligues des Champions ?",
        options: ["FC Barcelone", "AC Milan", "Bayern Munich", "Real Madrid"],
        correct: 3,
        explainer: "Le Real Madrid détient le record avec 15 Ligues des Champions, dont la dernière en 2024 face au Borussia Dortmund (2-0)."
      },
      {
        q: "Combien de titres de Ligue 1 le PSG a-t-il remportés ?",
        options: ["6", "8", "11", "12"],
        correct: 3,
        explainer: "Le PSG a remporté 12 titres de Ligue 1 (en 2024-2025), dont 10 depuis le rachat par QSI en 2011. C'est le club français le plus titré."
      },
      {
        q: "Quelle équipe a gagné la Champions League 2024 ?",
        options: ["Manchester City", "Real Madrid", "Bayern Munich", "Inter Milan"],
        correct: 1,
        explainer: "Le Real Madrid a remporté la Champions League 2024 contre le Borussia Dortmund (2-0), portant son total à 15 titres. Jude Bellingham et Vinicius brillent."
      },
      {
        q: "Quel surnom porte le derby de la Méditerranée ?",
        options: ["Le Clasico", "L'Olympico", "Le Choc des Titans", "Le Match des Stars"],
        correct: 1,
        explainer: "L'OL-OM, opposant Lyon à Marseille, est surnommé l'Olympico depuis que les deux clubs jouent en Ligue 1 face à face. Le terme est apparu dans les années 2000."
      },
      {
        q: "Quel français a remporté la Champions League avec Liverpool en 2019 ?",
        options: ["Sadio Mané", "Naby Keïta", "Ousmane Dembélé", "Aucun"],
        correct: 3,
        explainer: "Question piège : aucun Français n'était titulaire dans l'équipe de Liverpool en 2019. Sadio Mané est Sénégalais. La finale opposait Liverpool à Tottenham (2-0)."
      },
      {
        q: "Quel club a fait un quintuplé en 2009 (5 trophées dans l'année) ?",
        options: ["Real Madrid", "FC Barcelone", "Manchester United", "Inter Milan"],
        correct: 1,
        explainer: "Le FC Barcelone de Pep Guardiola a remporté en 2009 : la Liga, la Coupe du Roi, la Champions League, la Supercoupe d'Europe et la Coupe du Monde des clubs. Un sextuplé en réalité."
      },
      {
        q: "Quel club français a éliminé le Bayern en quart de finale de C1 en 2020 ?",
        options: ["PSG", "Lyon", "Marseille", "Monaco"],
        correct: 1,
        explainer: "Lyon a éliminé Manchester City en quart de finale de la C1 2020 puis a perdu en demi-finale. Le PSG est allé en finale (perdue contre le Bayern 1-0)."
      },
      {
        q: "Quelle est la durée d'un match de football en temps réglementaire ?",
        options: ["80 min", "90 min", "100 min", "Variable"],
        correct: 1,
        explainer: "Un match de football dure 90 minutes (2 x 45 min), plus le temps additionnel. En cas d'égalité en coupe, on ajoute 2 x 15 min de prolongation puis les tirs au but."
      },
      {
        q: "Quel club français a remporté la Ligue 1 en 2024-2025 ?",
        options: ["PSG", "Monaco", "Lille", "Marseille"],
        correct: 0,
        explainer: "Le PSG a remporté son 12e titre de Ligue 1 en 2024-2025, première saison sans Kylian Mbappé. Une saison de transition réussie avec Luis Enrique aux commandes."
      }
    ]
  }
];
