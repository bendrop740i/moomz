import type { VsPair } from "../types";

export const pairs: VsPair[] = [
  {
    slug: "mitosis-vs-meiosis",
    a: "Mitosis",
    b: "Meiosis",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "🧬",
    content: {
      it: {
        title: "Mitosi contro Meiosi: la divisione cellulare",
        h1: "Mitosi contro Meiosi: come si dividono le cellule",
        description:
          "La mitosi produce due cellule corporee identiche; la meiosi produce quattro cellule sessuali variabili. Confronta i due processi di divisione cellulare.",
        intro:
          "Sono entrambe forme di divisione cellulare, ma svolgono ruoli biologici molto diversi. La mitosi mantiene un organismo in crescita e in salute, mentre la meiosi rende possibili la riproduzione e la variabilita genetica.",
        pros_a: [
          "Produce 2 cellule figlie geneticamente identiche alla cellula madre",
          "Comporta un solo ciclo di divisione",
          "Usata per crescita, riparazione dei tessuti e riproduzione asessuata",
          "Le cellule figlie sono diploidi (corredo cromosomico completo)",
          "Nessun crossing over, quindi nessuna nuova combinazione genica",
        ],
        pros_b: [
          "Produce 4 cellule figlie, ognuna geneticamente unica",
          "Comporta due cicli consecutivi di divisione",
          "Usata per formare i gameti (spermatozoi e ovuli)",
          "Le cellule figlie sono aploidi (meta del corredo cromosomico)",
          "Crossing over e assortimento indipendente creano variabilita",
        ],
        verdict:
          "La mitosi e' la divisione cellulare quotidiana che costruisce e mantiene il corpo. La meiosi avviene solo negli organi riproduttivi per formare i gameti. Insieme spiegano sia come cresci sia come i caratteri passano alla prole.",
        faq: [
          {
            q: "Quale processo crea la diversita genetica?",
            a: "La meiosi, attraverso il crossing over e l'assortimento indipendente dei cromosomi, produce gameti tutti geneticamente diversi.",
          },
          {
            q: "Quante divisioni avvengono in ciascuna?",
            a: "La mitosi ha una divisione che produce due cellule; la meiosi ha due divisioni che producono quattro cellule.",
          },
          {
            q: "Le cellule risultanti sono diploidi o aploidi?",
            a: "La mitosi produce cellule diploidi con il numero cromosomico completo; la meiosi produce cellule aploidi con la meta.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "dna-vs-rna",
    a: "DNA",
    b: "RNA",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "🧬",
    content: {
      it: {
        title: "DNA contro RNA: i due acidi nucleici",
        h1: "DNA contro RNA: struttura e funzione",
        description:
          "Il DNA conserva l'informazione genetica a lungo termine; l'RNA la trasporta e la traduce in proteine. Confronta struttura, zucchero, basi e ruoli.",
        intro:
          "DNA e RNA sono i due acidi nucleici che governano la chimica della vita. Il DNA e' l'archivio principale, mentre l'RNA e' la copia di lavoro che porta a termine i compiti.",
        pros_a: [
          "Conserva l'informazione ereditaria in modo stabile per generazioni",
          "Doppia elica a due filamenti, struttura molto stabile",
          "Contiene lo zucchero desossiribosio (privo di un ossigeno)",
          "Usa le basi A, T, G e C",
          "Resta principalmente nel nucleo della cellula",
        ],
        pros_b: [
          "Trasporta e traduce le istruzioni genetiche in proteine",
          "Di solito a singolo filamento e piu' flessibile",
          "Contiene lo zucchero ribosio (ha un ossigeno in piu')",
          "Usa le basi A, U, G e C (uracile al posto della timina)",
          "Si trova in tutta la cellula, compreso il citoplasma",
        ],
        verdict:
          "Il DNA e' la biblioteca sicura dei dati genetici; l'RNA e' il messaggero e il lavoratore che li legge e li usa. La vita ha bisogno di entrambi: il DNA per la permanenza, l'RNA per l'azione.",
        faq: [
          {
            q: "Quale base differisce tra DNA e RNA?",
            a: "Il DNA usa la timina (T) mentre l'RNA usa l'uracile (U) al suo posto; entrambi condividono adenina, guanina e citosina.",
          },
          {
            q: "Perche' il DNA e' piu' stabile dell'RNA?",
            a: "La doppia elica del DNA e lo zucchero desossiribosio lo rendono chimicamente resistente, ideale per la conservazione a lungo termine.",
          },
          {
            q: "Quali sono i principali tipi di RNA?",
            a: "RNA messaggero (mRNA), RNA di trasporto (tRNA) e RNA ribosomiale (rRNA) collaborano nella sintesi proteica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "eukaryote-vs-prokaryote",
    a: "Eukaryote",
    b: "Prokaryote",
    category: "science",
    emoji_a: "🔬",
    emoji_b: "🦠",
    content: {
      it: {
        title: "Eucariote contro Procariote: tipi di cellule",
        h1: "Eucariote contro Procariote: i due tipi di cellula",
        description:
          "Gli eucarioti hanno un nucleo e organuli; i procarioti no. Confronta i due tipi di cellula fondamentali e la vita che costruiscono.",
        intro:
          "Ogni essere vivente e' costruito a partire da uno di due tipi di cellula. I procarioti sono semplici e antichi, mentre gli eucarioti sono piu' grandi e compartimentati.",
        pros_a: [
          "Ha un vero nucleo delimitato da membrana",
          "Contiene organuli come mitocondri e reticolo endoplasmatico",
          "Generalmente piu' grande (10-100 micrometri)",
          "Include animali, piante, funghi e protisti",
          "Il DNA e' lineare e organizzato in cromosomi",
        ],
        pros_b: [
          "Nessun nucleo: il DNA fluttua libero nel citoplasma",
          "Privo di organuli delimitati da membrana",
          "Generalmente piu' piccolo (1-10 micrometri)",
          "Include tutti i batteri e gli archei",
          "Il DNA e' di solito una singola molecola circolare",
        ],
        verdict:
          "I procarioti sono stati la prima forma di vita sulla Terra e dominano ancora per numero. Gli eucarioti si sono evoluti piu' tardi con compartimenti interni che hanno reso possibili organismi pluricellulari complessi. Entrambi restano essenziali per la biosfera.",
        faq: [
          {
            q: "Quale tipo di cellula e' piu' antico?",
            a: "I procarioti sono comparsi per primi, circa 3,5 miliardi di anni fa; gli eucarioti si sono evoluti circa 2 miliardi di anni fa.",
          },
          {
            q: "I procarioti hanno qualche organulo?",
            a: "Hanno ribosomi, ma nessun organulo delimitato da membrana come mitocondri o un nucleo.",
          },
          {
            q: "Cos'e' la teoria endosimbiotica?",
            a: "Propone che i mitocondri e i cloroplasti degli eucarioti abbiano avuto origine da procarioti un tempo a vita libera.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "plant-cell-vs-animal-cell",
    a: "Plant cell",
    b: "Animal cell",
    category: "science",
    emoji_a: "🌱",
    emoji_b: "🐾",
    content: {
      it: {
        title: "Cellula vegetale contro animale: differenze",
        h1: "Cellula vegetale contro Cellula animale a confronto",
        description:
          "Le cellule vegetali hanno una parete cellulare e cloroplasti; quelle animali hanno centrioli e lisosomi. Confronta queste due cellule eucariote.",
        intro:
          "Le cellule vegetali e animali sono entrambe eucariote, ma le loro strutture riflettono stili di vita molto diversi: una produce il proprio cibo, l'altra deve trovarlo.",
        pros_a: [
          "Ha una rigida parete cellulare di cellulosa per il sostegno",
          "Contiene cloroplasti per la fotosintesi",
          "Ha un grande vacuolo centrale che immagazzina acqua",
          "Di solito una forma fissa e rettangolare",
          "Immagazzina energia principalmente come amido",
        ],
        pros_b: [
          "Nessuna parete cellulare: solo una membrana plasmatica flessibile",
          "Nessun cloroplasto; non puo' produrre il proprio cibo",
          "Ha molti piccoli vacuoli, se ne ha",
          "Forma variabile, spesso arrotondata",
          "Ha centrioli e lisosomi per la divisione e la digestione",
        ],
        verdict:
          "Le cellule vegetali sono costruite per la stabilita e l'autonutrimento tramite la fotosintesi. Le cellule animali scambiano la rigidita con flessibilita e mobilita. Entrambe condividono il nucleo macchinario eucariotico di base come nucleo e mitocondri.",
        faq: [
          {
            q: "Le cellule animali hanno una parete cellulare?",
            a: "No. Le cellule animali hanno solo una membrana plasmatica, che le rende flessibili e capaci di cambiare forma.",
          },
          {
            q: "Cosa da' alle cellule vegetali il loro colore verde?",
            a: "I cloroplasti contenenti il pigmento clorofilla, che assorbe la luce per la fotosintesi.",
          },
          {
            q: "Le cellule vegetali hanno mitocondri?",
            a: "Si. Anche le cellule vegetali hanno mitocondri: hanno comunque bisogno della respirazione cellulare oltre alla fotosintesi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mass-vs-weight",
    a: "Mass",
    b: "Weight",
    category: "science",
    emoji_a: "⚖️",
    emoji_b: "🪐",
    content: {
      it: {
        title: "Massa contro Peso: qual e' la differenza?",
        h1: "Massa contro Peso: una confusione comune in fisica",
        description:
          "La massa e' la quantita di materia in un oggetto; il peso e' la forza gravitazionale che agisce su di esso. Confronta queste due grandezze spesso confuse.",
        intro:
          "Si usano 'massa' e 'peso' come sinonimi, ma la fisica li tratta in modo molto diverso. Una non cambia mai; l'altro dipende da dove ti trovi.",
        pros_a: [
          "Misura la quantita di materia in un oggetto",
          "Resta costante ovunque nell'universo",
          "Si misura in chilogrammi (kg)",
          "Una grandezza scalare senza direzione",
          "Determina l'inerzia di un oggetto e la resistenza alla forza",
        ],
        pros_b: [
          "Misura la forza gravitazionale su un oggetto",
          "Cambia con la posizione e la gravita locale",
          "Si misura in newton (N)",
          "Una grandezza vettoriale che punta verso il centro del pianeta",
          "Calcolato come massa per accelerazione gravitazionale",
        ],
        verdict:
          "La massa e' intrinseca: la tua massa e' la stessa sulla Terra e sulla Luna. Il peso e' situazionale: sulla Luna pesi circa un sesto. Le bilance pesapersone misurano in realta il peso, poi convertono.",
        faq: [
          {
            q: "Peseresti meno sulla Luna?",
            a: "Si. La gravita della Luna e' circa un sesto di quella terrestre, quindi il tuo peso li' e' circa un sesto, anche se la massa resta invariata.",
          },
          {
            q: "Quali unita misurano ciascuna?",
            a: "La massa si misura in chilogrammi; il peso, essendo una forza, si misura in newton.",
          },
          {
            q: "Un oggetto puo' essere privo di peso ma avere comunque massa?",
            a: "Si. In caduta libera o in orbita un oggetto e' privo di peso, eppure ha ancora la stessa massa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "speed-vs-velocity",
    a: "Speed",
    b: "Velocity",
    category: "science",
    emoji_a: "🏃",
    emoji_b: "🧭",
    content: {
      it: {
        title: "Rapidita contro Velocita: scalare contro vettore",
        h1: "Rapidita contro Velocita: la direzione fa la differenza",
        description:
          "La rapidita ti dice quanto vai veloce; la velocita ti dice quanto vai veloce e in quale direzione. Confronta queste due grandezze del moto.",
        intro:
          "Rapidita e velocita descrivono entrambe il moto, ma solo una include la direzione. Quella singola differenza conta enormemente in fisica.",
        pros_a: [
          "Misura quanto velocemente si muove un oggetto",
          "Una grandezza scalare: solo modulo, nessuna direzione",
          "Sempre positiva o nulla",
          "La rapidita media e' la distanza totale sul tempo totale",
          "Usata nelle descrizioni quotidiane del moto",
        ],
        pros_b: [
          "Misura la rapidita insieme alla direzione del moto",
          "Una grandezza vettoriale: ha sia modulo sia direzione",
          "Puo' essere positiva, negativa o nulla",
          "La velocita media e' lo spostamento sul tempo",
          "Essenziale per calcolare accelerazione e forze",
        ],
        verdict:
          "La rapidita risponde a 'quanto veloce?'; la velocita risponde a 'quanto veloce e in quale direzione?'. Un'auto che percorre un cerchio a rapidita costante ha una velocita in continuo cambiamento. I problemi di fisica di solito richiedono la velocita.",
        faq: [
          {
            q: "La rapidita puo' essere negativa?",
            a: "No. La rapidita e' sempre positiva o nulla, poiche' ignora la direzione. Solo la velocita puo' essere negativa.",
          },
          {
            q: "La velocita puo' cambiare mentre la rapidita resta costante?",
            a: "Si. Muoversi in cerchio a rapidita costante cambia la direzione, quindi la velocita cambia di continuo.",
          },
          {
            q: "Qual e' la differenza tra distanza e spostamento?",
            a: "La distanza e' la lunghezza totale del percorso; lo spostamento e' la variazione di posizione in linea retta, con direzione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "velocity-vs-acceleration",
    a: "Velocity",
    b: "Acceleration",
    category: "science",
    emoji_a: "🧭",
    emoji_b: "🚀",
    content: {
      it: {
        title: "Velocita contro Accelerazione: tassi di variazione",
        h1: "Velocita contro Accelerazione nel moto",
        description:
          "La velocita e' come la posizione cambia nel tempo; l'accelerazione e' come la velocita cambia nel tempo. Confronta questi due concetti del moto.",
        intro:
          "Velocita e accelerazione sono collegate ma distinte. Una descrive il moto stesso; l'altra descrive come quel moto sta cambiando.",
        pros_a: [
          "Descrive il tasso di variazione della posizione",
          "Si misura in metri al secondo (m/s)",
          "Un vettore con modulo e direzione",
          "Velocita costante significa nessuna accelerazione",
          "Pari allo spostamento diviso per il tempo",
        ],
        pros_b: [
          "Descrive il tasso di variazione della velocita",
          "Si misura in metri al secondo quadrato (m/s²)",
          "Un vettore che puo' accelerare, rallentare o far cambiare direzione al moto",
          "Accelerazione nulla significa velocita costante",
          "Collegata alla forza netta dalla seconda legge di Newton",
        ],
        verdict:
          "La velocita ti dice lo stato attuale del moto; l'accelerazione ti dice come sta cambiando. Un'auto a rapidita costante ha velocita ma accelerazione nulla; premere il pedale crea accelerazione.",
        faq: [
          {
            q: "Un oggetto puo' accelerare senza cambiare rapidita?",
            a: "Si. Cambiare direzione e' accelerazione. Un'auto che curva a rapidita costante sta comunque accelerando.",
          },
          {
            q: "Cosa significa accelerazione negativa?",
            a: "Di solito significa rallentare (decelerazione), oppure accelerare nella direzione negativa.",
          },
          {
            q: "Come e' collegata l'accelerazione alla forza?",
            a: "La seconda legge di Newton afferma che la forza e' uguale a massa per accelerazione, quindi ogni forza netta produce accelerazione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "force-vs-pressure",
    a: "Force",
    b: "Pressure",
    category: "science",
    emoji_a: "💪",
    emoji_b: "📊",
    content: {
      it: {
        title: "Forza contro Pressione: spinta contro spinta per area",
        h1: "Forza contro Pressione: due concetti collegati",
        description:
          "La forza e' una spinta o una trazione; la pressione e' una forza distribuita su un'area. Confronta queste due grandezze fisiche collegate.",
        intro:
          "Forza e pressione sono collegate ma non sono la stessa cosa. La differenza si riduce al fatto che si tenga conto o meno dell'area.",
        pros_a: [
          "Una spinta o trazione che puo' cambiare il moto di un oggetto",
          "Si misura in newton (N)",
          "Un vettore con modulo e direzione",
          "Provoca accelerazione tramite la seconda legge di Newton",
          "Indipendente dall'area di contatto",
        ],
        pros_b: [
          "Forza applicata per unita di area",
          "Si misura in pascal (Pa) o N/m²",
          "Una grandezza scalare nei fluidi",
          "La stessa forza su un'area piu' piccola da' piu' pressione",
          "Spiega perche' funzionano coltelli affilati e racchette da neve",
        ],
        verdict:
          "La forza e' la spinta totale; la pressione e' quanto e' concentrata quella spinta. Un coltello affilato e uno smussato possono usare la stessa forza, ma il filo affilato la concentra in una pressione molto piu' alta.",
        faq: [
          {
            q: "Perche' un coltello affilato taglia meglio?",
            a: "Il suo filo sottile ha un'area di contatto minuscola, quindi la stessa forza crea una pressione molto piu' alta.",
          },
          {
            q: "Quale unita misura la pressione?",
            a: "Il pascal (Pa), pari a un newton per metro quadrato.",
          },
          {
            q: "Perche' le racchette da neve impediscono di affondare?",
            a: "Distribuiscono il tuo peso su una grande area, abbassando la pressione sulla neve.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "energy-vs-power",
    a: "Energy",
    b: "Power",
    category: "science",
    emoji_a: "⚡",
    emoji_b: "🔋",
    content: {
      it: {
        title: "Energia contro Potenza: qual e' la differenza?",
        h1: "Energia contro Potenza: quantita contro tasso",
        description:
          "L'energia e' la capacita di compiere lavoro; la potenza e' la rapidita con cui quel lavoro viene compiuto. Confronta questi due termini di fisica spesso confusi.",
        intro:
          "Energia e potenza sono facili da confondere. Una e' una quantita totale; l'altra e' un tasso, cioe' quanto rapidamente l'energia viene usata o prodotta.",
        pros_a: [
          "La capacita di compiere lavoro o causare un cambiamento",
          "Si misura in joule (J)",
          "Puo' essere immagazzinata, trasferita o convertita",
          "Si conserva: non e' mai creata ne' distrutta",
          "Esiste come cinetica, potenziale, termica e altre forme",
        ],
        pros_b: [
          "Il tasso con cui l'energia viene trasferita o usata",
          "Si misura in watt (W), pari a joule al secondo",
          "Descrive quanto velocemente viene compiuto il lavoro",
          "Una potenza nominale piu' alta significa uso piu' rapido di energia",
          "Calcolata come energia diviso il tempo",
        ],
        verdict:
          "L'energia e' il 'quanto'; la potenza e' il 'quanto velocemente'. Una lampadina da 100 W usa energia due volte piu' velocemente di una da 50 W. La tua bolletta elettrica addebita l'energia (chilowattora), non la potenza.",
        faq: [
          {
            q: "Cos'e' un chilowattora?",
            a: "E' un'unita di energia: l'energia usata da un dispositivo da un chilowatt che funziona per un'ora.",
          },
          {
            q: "Una potenza maggiore significa piu' energia?",
            a: "Non necessariamente. Una potenza maggiore significa che l'energia viene usata piu' velocemente, ma l'energia totale dipende anche dal tempo.",
          },
          {
            q: "Quale unita misura la potenza?",
            a: "Il watt, definito come un joule di energia trasferito al secondo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "kinetic-energy-vs-potential-energy",
    a: "Kinetic energy",
    b: "Potential energy",
    category: "science",
    emoji_a: "🏃",
    emoji_b: "⛰️",
    content: {
      it: {
        title: "Energia cinetica contro potenziale spiegata",
        h1: "Energia cinetica contro potenziale: moto contro accumulo",
        description:
          "L'energia cinetica e' l'energia del moto; l'energia potenziale e' energia immagazzinata in attesa di essere liberata. Confronta le due forme.",
        intro:
          "L'energia meccanica esiste in due forme. L'energia cinetica e' energia in azione, mentre l'energia potenziale e' energia tenuta in riserva.",
        pros_a: [
          "L'energia che un oggetto ha perche' e' in movimento",
          "Dipende dalla massa e dal quadrato della rapidita",
          "Nulla quando l'oggetto e' in quiete",
          "Esempi: un fiume che scorre, una palla lanciata",
          "Aumenta quando un oggetto accelera",
        ],
        pros_b: [
          "Energia immagazzinata dovuta alla posizione o alla condizione",
          "Il tipo gravitazionale dipende da massa, gravita e altezza",
          "Massima nel punto piu' alto del moto",
          "Esempi: un arco teso, un peso sollevato",
          "Si converte in energia cinetica quando viene liberata",
        ],
        verdict:
          "Le montagne russe mostrano entrambe: l'energia potenziale e' massima in cima alla salita, poi si converte in energia cinetica nella discesa. L'energia meccanica totale resta costante se si trascura l'attrito.",
        faq: [
          {
            q: "Cosa succede all'energia potenziale mentre un oggetto cade?",
            a: "Si converte in energia cinetica, quindi l'oggetto accelera mentre la sua altezza diminuisce.",
          },
          {
            q: "Un oggetto puo' avere entrambe contemporaneamente?",
            a: "Si. Una palla che si muove nell'aria a meta caduta ha sia energia cinetica sia energia potenziale gravitazionale.",
          },
          {
            q: "Quale formula da' l'energia cinetica?",
            a: "L'energia cinetica e' uguale a un mezzo per la massa per la velocita al quadrato.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "heat-vs-temperature",
    a: "Heat",
    b: "Temperature",
    category: "science",
    emoji_a: "🔥",
    emoji_b: "🌡️",
    content: {
      it: {
        title: "Calore contro Temperatura: energia contro intensita",
        h1: "Calore contro Temperatura: una distinzione termica chiave",
        description:
          "Il calore e' energia trasferita tra oggetti; la temperatura misura l'energia cinetica media delle particelle. Confronta i due.",
        intro:
          "Calore e temperatura sembrano la stessa cosa, ma la termodinamica li tratta in modo molto diverso: uno e' energia in transito, l'altra una misurazione.",
        pros_a: [
          "Energia trasferita a causa di una differenza di temperatura",
          "Si misura in joule (J)",
          "Scorre sempre dagli oggetti piu' caldi a quelli piu' freddi",
          "Dipende da massa, materiale e variazione di temperatura",
          "Una grandezza estensiva: piu' materia puo' contenerne di piu'",
        ],
        pros_b: [
          "Misura l'energia cinetica media delle particelle",
          "Si misura in gradi Celsius, Fahrenheit o kelvin",
          "Una grandezza intensiva: indipendente dalla quantita di materia",
          "Determina la direzione del flusso di calore",
          "Non dipende dalle dimensioni dell'oggetto",
        ],
        verdict:
          "Una tazza e una vasca d'acqua alla stessa temperatura sono altrettanto calde, ma la vasca contiene molto piu' calore. La temperatura ti dice l'intensita; il calore ti dice l'energia termica totale trasferita.",
        faq: [
          {
            q: "Cosa contiene piu' calore: una tazza o una vasca alla stessa temperatura?",
            a: "La vasca. Ha molta piu' massa, quindi immagazzina molta piu' energia termica nonostante la temperatura uguale.",
          },
          {
            q: "In quale direzione scorre il calore?",
            a: "Il calore scorre sempre spontaneamente da un oggetto a temperatura piu' alta a uno a temperatura piu' bassa.",
          },
          {
            q: "Perche' in scienza si usa il kelvin?",
            a: "Il kelvin parte dallo zero assoluto, quindi non diventa mai negativo e funziona bene nelle equazioni di fisica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "wave-vs-particle",
    a: "Wave",
    b: "Particle",
    category: "science",
    emoji_a: "〰️",
    emoji_b: "⚛️",
    content: {
      it: {
        title: "Onda contro Particella: la doppia natura della luce",
        h1: "Onda contro Particella: due modelli di materia e luce",
        description:
          "Le onde si propagano e interferiscono; le particelle sono grumi localizzati di materia o energia. Confronta questi due modelli fisici.",
        intro:
          "Uno degli enigmi piu' profondi della fisica e' che luce e materia si comportano sia come onde sia come particelle, a seconda di come le osservi.",
        pros_a: [
          "Si propaga in modo continuo nello spazio",
          "Mostra figure di interferenza e diffrazione",
          "Trasporta energia senza trasportare materia",
          "Descritta da lunghezza d'onda, frequenza e ampiezza",
          "Spiega il colore, il suono e le increspature sull'acqua",
        ],
        pros_b: [
          "Un grumo localizzato e discreto di materia o energia",
          "Ha una posizione definita e puo' essere contato",
          "Trasporta quantita di moto nelle collisioni",
          "Spiega l'effetto fotoelettrico e l'energia quantizzata",
          "Le particelle di luce sono chiamate fotoni",
        ],
        verdict:
          "La dualita onda-particella dice che luce e materia non sono ne' pura onda ne' pura particella. L'esperimento della doppia fenditura mostra la luce interferire come un'onda eppure arrivare come fotoni discreti.",
        faq: [
          {
            q: "Cos'e' la dualita onda-particella?",
            a: "Il principio secondo cui luce e materia mostrano proprieta sia ondulatorie sia corpuscolari a seconda dell'esperimento.",
          },
          {
            q: "Chi ha proposto che la luce sia fatta di particelle?",
            a: "Einstein spiego' l'effetto fotoelettrico usando quanti di luce, in seguito chiamati fotoni.",
          },
          {
            q: "La materia si comporta come un'onda?",
            a: "Si. Gli elettroni e persino gli atomi producono figure di interferenza, confermando la lunghezza d'onda di de Broglie.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "proton-vs-neutron",
    a: "Proton",
    b: "Neutron",
    category: "science",
    emoji_a: "➕",
    emoji_b: "⚪",
    content: {
      it: {
        title: "Protone contro Neutrone: dentro il nucleo",
        h1: "Protone contro Neutrone: le due particelle nucleari",
        description:
          "I protoni portano carica positiva e definiscono l'elemento; i neutroni sono neutri e aggiungono massa. Confronta queste particelle nucleari.",
        intro:
          "Protoni e neutroni condividono il nucleo atomico e hanno una massa quasi identica, ma una proprieta cruciale li distingue: la carica elettrica.",
        pros_a: [
          "Porta una carica elettrica positiva di +1",
          "Il numero di protoni definisce l'elemento chimico",
          "Si trova nel nucleo di ogni atomo",
          "Composto da due quark up e un quark down",
          "Stabile quando legato in un nucleo",
        ],
        pros_b: [
          "Non porta carica elettrica: e' elettricamente neutro",
          "Aggiunge massa e stabilita nucleare senza cambiare l'elemento",
          "Si trova nel nucleo di tutti gli atomi tranne l'idrogeno comune",
          "Composto da un quark up e due quark down",
          "Puo' essere instabile, decadendo in un protone, un elettrone e un antineutrino",
        ],
        verdict:
          "Il numero di protoni (numero atomico) decide quale elemento e' un atomo; il numero di neutroni decide quale isotopo. Entrambi contribuiscono a quasi tutta la massa di un atomo.",
        faq: [
          {
            q: "Cosa determina l'elemento di un atomo?",
            a: "Il numero di protoni, chiamato numero atomico. Il carbonio, per esempio, ha sempre sei protoni.",
          },
          {
            q: "Cos'e' un isotopo?",
            a: "Atomi dello stesso elemento con un numero diverso di neutroni sono isotopi di quell'elemento.",
          },
          {
            q: "Protoni e neutroni sono particelle fondamentali?",
            a: "No. Ciascuno e' composto da tre quark tenuti insieme dalla forza nucleare forte.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "nuclear-fission-vs-fusion",
    a: "Nuclear fission",
    b: "Nuclear fusion",
    category: "science",
    emoji_a: "💥",
    emoji_b: "☀️",
    content: {
      it: {
        title: "Fissione contro Fusione: due reazioni nucleari",
        h1: "Fissione contro Fusione nucleare: dividere contro unire",
        description:
          "La fissione divide nuclei pesanti; la fusione unisce nuclei leggeri. Entrambe rilasciano energia: confronta come e dove.",
        intro:
          "Fissione e fusione sono reazioni nucleari opposte, eppure entrambe liberano un'energia enorme convertendo massa secondo E=mc².",
        pros_a: [
          "Divide un nucleo pesante in nuclei piu' leggeri",
          "Alimenta le attuali centrali nucleari",
          "Innescata dal bombardamento di neutroni di uranio o plutonio",
          "Produce scorie radioattive a lunga vita",
          "Puo' sostenere una reazione a catena in condizioni modeste",
        ],
        pros_b: [
          "Unisce nuclei leggeri come l'idrogeno in elio",
          "Alimenta il Sole e tutte le stelle",
          "Richiede temperatura e pressione estreme per avviarsi",
          "Produce poche scorie radioattive a lunga vita",
          "Rilascia molta piu' energia per unita di massa della fissione",
        ],
        verdict:
          "La fissione e' collaudata e fa funzionare reattori in tutto il mondo, ma lascia scorie pericolose. La fusione promette energia piu' pulita e abbondante, eppure resta difficile da sostenere sulla Terra. Il Sole funziona a fusione.",
        faq: [
          {
            q: "Quale reazione alimenta il Sole?",
            a: "La fusione. Il Sole fonde nuclei di idrogeno in elio, rilasciando l'energia che illumina il nostro sistema solare.",
          },
          {
            q: "Perche' la fusione e' difficile da ottenere sulla Terra?",
            a: "Richiede temperature di milioni di gradi e una pressione intensa per vincere la repulsione tra i nuclei.",
          },
          {
            q: "Quale produce scorie piu' pericolose?",
            a: "La fissione produce scorie radioattive a lunga vita; i sottoprodotti della fusione hanno una vita molto piu' breve.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conduction-vs-convection",
    a: "Conduction",
    b: "Convection",
    category: "science",
    emoji_a: "🍳",
    emoji_b: "♨️",
    content: {
      it: {
        title: "Conduzione contro Convezione: trasferimento di calore",
        h1: "Conduzione contro Convezione: come si muove il calore",
        description:
          "La conduzione trasferisce calore per contatto diretto; la convezione lo trasferisce tramite fluidi in movimento. Confronta questi due modi.",
        intro:
          "Il calore si muove in tre modi principali. Conduzione e convezione hanno entrambe bisogno di materia, ma vi muovono l'energia in modo molto diverso.",
        pros_a: [
          "Trasferisce calore per contatto diretto tra particelle",
          "Funziona meglio nei solidi, specialmente nei metalli",
          "Nessun movimento complessivo del materiale stesso",
          "L'energia passa da una particella vibrante alla vicina",
          "Esempio: un cucchiaio di metallo che si scalda nella zuppa calda",
        ],
        pros_b: [
          "Trasferisce calore tramite il movimento di un fluido",
          "Funziona in liquidi e gas, non nei solidi",
          "Il fluido caldo sale, quello freddo scende, creando correnti",
          "Trasporta energia muovendo la materia stessa",
          "Esempio: acqua che bolle o aria calda che circola in una stanza",
        ],
        verdict:
          "La conduzione ha bisogno di particelle a contatto ed e' il modo in cui i solidi condividono il calore. La convezione si basa su fluidi che scorrono trasportando energia con se'. Una pentola sul fornello usa entrambe contemporaneamente.",
        faq: [
          {
            q: "La convezione puo' avvenire in un solido?",
            a: "No. La convezione richiede un fluido che possa scorrere; i solidi trasferiscono calore per conduzione.",
          },
          {
            q: "Perche' i metalli conducono bene il calore?",
            a: "Gli elettroni liberi nei metalli si muovono facilmente e trasportano rapidamente l'energia termica attraverso il materiale.",
          },
          {
            q: "Qual e' il terzo tipo di trasferimento di calore?",
            a: "L'irraggiamento, che trasferisce calore tramite onde elettromagnetiche e non ha bisogno di alcun mezzo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "reflection-vs-refraction",
    a: "Reflection",
    b: "Refraction",
    category: "science",
    emoji_a: "🪞",
    emoji_b: "🔍",
    content: {
      it: {
        title: "Riflessione contro Rifrazione: comportamento della luce",
        h1: "Riflessione contro Rifrazione: come la luce si piega",
        description:
          "La riflessione fa rimbalzare la luce su una superficie; la rifrazione piega la luce che passa in un nuovo mezzo. Confronta questi due effetti ottici.",
        intro:
          "Quando la luce incontra una superficie, puo' rimbalzare indietro o passare attraverso. Riflessione e rifrazione spiegano allo stesso modo specchi, lenti e arcobaleni.",
        pros_a: [
          "La luce rimbalza da una superficie tornando nello stesso mezzo",
          "L'angolo di incidenza e' uguale all'angolo di riflessione",
          "La luce resta nel suo mezzo originario",
          "Crea immagini negli specchi e sull'acqua calma",
          "La velocita della luce non cambia",
        ],
        pros_b: [
          "La luce si piega passando in un mezzo diverso",
          "Causata da un cambiamento della velocita della luce",
          "La direzione cambia; il mezzo cambia",
          "Crea effetti come una cannuccia che sembra piegata nell'acqua",
          "Governa il modo in cui le lenti focalizzano la luce",
        ],
        verdict:
          "La riflessione mantiene la luce in un mezzo e la fa rimbalzare; la rifrazione la invia in un nuovo mezzo e la piega. Occhiali, fotocamere e il cristallino del tuo occhio si basano tutti sulla rifrazione.",
        faq: [
          {
            q: "Perche' una cannuccia sembra piegata in un bicchiere d'acqua?",
            a: "La rifrazione piega la luce mentre esce dall'acqua ed entra nell'aria, spostando la posizione apparente della cannuccia.",
          },
          {
            q: "Quale legge governa la riflessione?",
            a: "La legge della riflessione: l'angolo di incidenza e' uguale all'angolo di riflessione, misurati dalla normale.",
          },
          {
            q: "Cosa causa la rifrazione?",
            a: "La luce cambia velocita quando entra in un mezzo piu' o meno denso, il che piega il suo percorso.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ac-vs-dc-current",
    a: "AC current",
    b: "DC current",
    category: "science",
    emoji_a: "🔌",
    emoji_b: "🔋",
    content: {
      it: {
        title: "Corrente AC contro DC: due modi di scorrere",
        h1: "Corrente AC contro DC: alternata contro continua",
        description:
          "La AC inverte direzione molte volte al secondo; la DC scorre stabilmente in un solo senso. Confronta corrente alternata e continua.",
        intro:
          "La corrente elettrica esiste in due forme di base. La scelta tra esse ha plasmato la storia delle reti elettriche e conta ancora oggi.",
        pros_a: [
          "La corrente inverte periodicamente la direzione",
          "Facile da innalzare o abbassare con i trasformatori",
          "Efficiente per trasmettere energia su lunghe distanze",
          "Fornitura standard delle prese a muro e della rete",
          "La frequenza e' tipicamente di 50 o 60 hertz",
        ],
        pros_b: [
          "La corrente scorre stabilmente in una direzione costante",
          "Fornita da batterie e celle solari",
          "Alimenta l'elettronica, i telefoni e la maggior parte dei chip dei circuiti",
          "La tensione stabile si adatta ai dispositivi sensibili",
          "Perde piu' energia su linee di trasmissione molto lunghe",
        ],
        verdict:
          "La AC ha conquistato la rete perche' i trasformatori rendono efficiente la trasmissione su lunga distanza. La DC domina all'interno dell'elettronica e delle batterie. I dispositivi moderni convertono la AC della presa nella DC di cui hanno bisogno i loro chip.",
        faq: [
          {
            q: "Perche' le reti elettriche usano la AC?",
            a: "La tensione AC puo' essere innalzata e abbassata con i trasformatori, rendendo la trasmissione su lunga distanza molto piu' efficiente.",
          },
          {
            q: "Le batterie producono AC o DC?",
            a: "Le batterie producono DC: un flusso di corrente stabile e unidirezionale.",
          },
          {
            q: "Cosa converte la AC in DC?",
            a: "Un raddrizzatore, spesso all'interno di un alimentatore, converte la AC della presa nella DC di cui ha bisogno l'elettronica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "series-vs-parallel-circuit",
    a: "Series circuit",
    b: "Parallel circuit",
    category: "science",
    emoji_a: "➖",
    emoji_b: "🔀",
    content: {
      it: {
        title: "Circuito in serie contro parallelo: cablaggio a confronto",
        h1: "Circuito in serie contro parallelo: due modi di cablare",
        description:
          "I circuiti in serie offrono un solo percorso alla corrente; quelli in parallelo ne offrono diversi. Confronta come si collegano i componenti.",
        intro:
          "Il modo in cui cabli i componenti cambia tutto del comportamento di un circuito. Serie e parallelo sono le due disposizioni fondamentali.",
        pros_a: [
          "I componenti condividono un unico percorso di corrente",
          "La stessa corrente attraversa ogni componente",
          "La tensione si ripartisce tra i componenti",
          "Una sola interruzione blocca l'intero circuito",
          "La resistenza totale e' la somma di tutte le resistenze",
        ],
        pros_b: [
          "I componenti sono su rami separati",
          "Ogni ramo riceve l'intera tensione della sorgente",
          "La corrente si divide tra i rami",
          "Una sola interruzione lascia funzionanti gli altri rami",
          "La resistenza totale e' inferiore alla piu' piccola resistenza",
        ],
        verdict:
          "Il cablaggio in serie e' semplice ma fragile: un solo guasto lo uccide, come le vecchie luci natalizie. Il cablaggio in parallelo mantiene il resto in funzione se una parte cede, ed e' per questo che gli impianti domestici lo usano.",
        faq: [
          {
            q: "Perche' le case usano il cablaggio in parallelo?",
            a: "Cosi' ogni elettrodomestico riceve l'intera tensione e un guasto non spegne l'intera casa.",
          },
          {
            q: "Cosa succede se una lampadina si guasta in un circuito in serie?",
            a: "L'intero circuito si interrompe e tutte le altre lampadine si spengono, poiche' esiste un solo percorso.",
          },
          {
            q: "Come differisce la resistenza totale?",
            a: "La resistenza in serie si somma; la resistenza in parallelo e' sempre inferiore alla piu' piccola resistenza.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "voltage-vs-current",
    a: "Voltage",
    b: "Current",
    category: "science",
    emoji_a: "⚡",
    emoji_b: "🌊",
    content: {
      it: {
        title: "Tensione contro Corrente: pressione contro flusso",
        h1: "Tensione contro Corrente: due basi dell'elettricita",
        description:
          "La tensione e' la spinta elettrica; la corrente e' il tasso di flusso di carica. Confronta queste due grandezze fondamentali.",
        intro:
          "Tensione e corrente sono il fondamento dell'elettricita. L'analogia con la tubatura dell'acqua aiuta: la tensione e' la pressione, la corrente e' il flusso.",
        pros_a: [
          "La differenza di potenziale che spinge la carica",
          "Si misura in volt (V)",
          "Agisce come una pressione che guida il flusso",
          "Puo' esistere senza che scorra alcuna corrente",
          "Fornita da batterie e generatori",
        ],
        pros_b: [
          "Il tasso con cui scorre la carica elettrica",
          "Si misura in ampere (A)",
          "Agisce come la portata in un tubo",
          "Scorre solo quando esiste un circuito completo",
          "Causa riscaldamento, magnetismo e lavoro utile",
        ],
        verdict:
          "La tensione e' la causa, la corrente e' l'effetto. Una batteria ha tensione anche quando e' scollegata, ma la corrente scorre solo quando un circuito chiuso permette alla carica di muoversi. La legge di Ohm le collega attraverso la resistenza.",
        faq: [
          {
            q: "La tensione puo' esistere senza corrente?",
            a: "Si. Una batteria scollegata ha tensione ma nessuna corrente, perche' il circuito e' aperto.",
          },
          {
            q: "Cos'e' la legge di Ohm?",
            a: "Afferma che la tensione e' uguale alla corrente moltiplicata per la resistenza, collegando le tre grandezze.",
          },
          {
            q: "Cosa e' piu' pericoloso, la tensione o la corrente?",
            a: "E' la corrente che attraversa il corpo a causare danni, ma serve un'alta tensione per imporla.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "general-vs-special-relativity",
    a: "General relativity",
    b: "Special relativity",
    category: "science",
    emoji_a: "🌌",
    emoji_b: "🚄",
    content: {
      it: {
        title: "Relativita generale contro ristretta spiegata",
        h1: "Relativita generale contro ristretta: le due teorie di Einstein",
        description:
          "La relativita ristretta tratta il moto a velocita costante; la generale aggiunge gravita e accelerazione. Confronta entrambe le teorie.",
        intro:
          "Einstein produsse due teorie della relativita a un decennio di distanza. Una tratta il moto regolare; l'altra lo estende alla gravita e al cosmo.",
        pros_a: [
          "Descrive la gravita come la curvatura dello spaziotempo",
          "Pubblicata da Einstein nel 1915",
          "Tratta l'accelerazione e i sistemi di riferimento non inerziali",
          "Predice buchi neri, onde gravitazionali e lensing",
          "Spiega l'orbita di Mercurio e la correzione del tempo del GPS",
        ],
        pros_b: [
          "Descrive la fisica in sistemi che si muovono a velocita costante",
          "Pubblicata da Einstein nel 1905",
          "Introduce la dilatazione del tempo e la contrazione delle lunghezze",
          "Afferma che la velocita della luce e' la stessa per tutti gli osservatori",
          "Da' la famosa equazione E uguale m c al quadrato",
        ],
        verdict:
          "La relativita ristretta e' un caso particolare della teoria generale piu' ampia. Usa la relativita ristretta per il moto regolare ad alta velocita; la relativita generale serve ovunque conti la gravita o l'accelerazione.",
        faq: [
          {
            q: "Quale teoria e' venuta prima?",
            a: "La relativita ristretta nel 1905; la relativita generale segui' dieci anni dopo, nel 1915.",
          },
          {
            q: "Cosa aggiunge la relativita generale?",
            a: "Estende la relativita alla gravita e all'accelerazione, descrivendo la gravita come spaziotempo curvo.",
          },
          {
            q: "Il GPS ha bisogno della relativita?",
            a: "Si. I satelliti GPS devono correggere gli effetti temporali sia della relativita ristretta sia di quella generale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "quantum-vs-classical-physics",
    a: "Quantum physics",
    b: "Classical physics",
    category: "science",
    emoji_a: "🌀",
    emoji_b: "🍎",
    content: {
      it: {
        title: "Fisica quantistica contro classica a confronto",
        h1: "Fisica quantistica contro classica: due quadri teorici",
        description:
          "La fisica classica descrive gli oggetti quotidiani; la fisica quantistica governa il minuscolo mondo di atomi e particelle. Confronta entrambe.",
        intro:
          "La fisica ha due grandi quadri teorici. Uno predice il moto di pianeti e auto; l'altro governa lo strano comportamento degli atomi.",
        pros_a: [
          "Descrive il comportamento di atomi e particelle subatomiche",
          "L'energia arriva in pacchetti discreti chiamati quanti",
          "Include sovrapposizione, entanglement e incertezza",
          "Le previsioni sono probabilistiche, non esatte",
          "E' alla base di laser, semiconduttori ed elettronica moderna",
        ],
        pros_b: [
          "Descrive oggetti e moto di dimensioni quotidiane",
          "Tratta l'energia come continua, non quantizzata",
          "Le previsioni sono deterministiche ed esatte",
          "Basata sulle leggi di Newton e sull'elettromagnetismo",
          "Accurata per pianeti, veicoli e macchine",
        ],
        verdict:
          "La fisica classica funziona perfettamente per il mondo a scala umana e resta essenziale per l'ingegneria. La fisica quantistica subentra alle scale atomiche. Entrambe sono corrette nei loro rispettivi ambiti.",
        faq: [
          {
            q: "Quando la fisica classica fallisce?",
            a: "Alle scale molto piccole, atomi e particelle, dove dominano gli effetti quantistici come la sovrapposizione.",
          },
          {
            q: "La fisica quantistica e' casuale?",
            a: "Le sue previsioni sono probabilistiche; da' le probabilita dei risultati anziche' un singolo esito certo.",
          },
          {
            q: "Concordano mai?",
            a: "Si. Per gli oggetti grandi, le previsioni quantistiche mediano fino a coincidere con la fisica classica: e' il principio di corrispondenza.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "black-hole-vs-neutron-star",
    a: "Black hole",
    b: "Neutron star",
    category: "science",
    emoji_a: "🕳️",
    emoji_b: "✨",
    content: {
      it: {
        title: "Buco nero contro Stella di neutroni: resti stellari",
        h1: "Buco nero contro Stella di neutroni: stelle morte a confronto",
        description:
          "I buchi neri intrappolano persino la luce; le stelle di neutroni sono ultra-dense ma ancora visibili. Confronta questi due resti stellari collassati.",
        intro:
          "Quando le stelle massicce muoiono, collassano in oggetti estremi. Dominano due esiti: una stella di neutroni o, per le stelle piu' pesanti, un buco nero.",
        pros_a: [
          "Gravita cosi' forte che nemmeno la luce puo' sfuggire",
          "Delimitato da un orizzonte degli eventi, non da una superficie solida",
          "Si forma dalle stelle in collasso piu' pesanti",
          "La singolarita al centro ha una densita quasi infinita",
          "Rilevato dal suo effetto sulla materia e sulla luce vicine",
        ],
        pros_b: [
          "Una sfera ultra-densa di neutroni strettamente compattati",
          "Ha un'effettiva superficie solida",
          "Si forma da stelle in collasso al di sotto del limite di massa del buco nero",
          "Puo' ruotare rapidamente ed emettere onde radio come pulsar",
          "Direttamente visibile in tutto lo spettro elettromagnetico",
        ],
        verdict:
          "Entrambi sono cadaveri di stelle massicce. Al di sotto di circa tre masse solari, il collasso si arresta in una stella di neutroni; al di sopra, la gravita vince e si forma un buco nero. Le stelle di neutroni si possono ancora vedere; i buchi neri no.",
        faq: [
          {
            q: "Quale e' piu' denso?",
            a: "La singolarita di un buco nero ha una densita di fatto infinita, ma le stelle di neutroni sono gli oggetti visibili piu' densi conosciuti.",
          },
          {
            q: "Una stella di neutroni puo' diventare un buco nero?",
            a: "Si. Se acquista massa sufficiente, la gravita supera la pressione dei neutroni e collassa in un buco nero.",
          },
          {
            q: "Cos'e' una pulsar?",
            a: "Una stella di neutroni in rapida rotazione che emette fasci di radiazione che rileviamo come impulsi regolari.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "star-vs-planet",
    a: "Star",
    b: "Planet",
    category: "science",
    emoji_a: "⭐",
    emoji_b: "🪐",
    content: {
      it: {
        title: "Stella contro Pianeta: qual e' la differenza?",
        h1: "Stella contro Pianeta: produttrici contro riflettrici di luce",
        description:
          "Le stelle generano la propria luce tramite la fusione; i pianeti riflettono solo la luce stellare. Confronta questi due tipi di corpo celeste.",
        intro:
          "Guarda il cielo notturno e la maggior parte dei punti luminosi sono stelle, ma alcuni sono pianeti. La differenza chiave e' se l'oggetto produce la propria luce.",
        pros_a: [
          "Genera la propria luce e calore tramite la fusione nucleare",
          "Composta principalmente da plasma di idrogeno ed elio",
          "Tenuta insieme e alimentata da un'enorme gravita",
          "Scintilla quando vista attraverso l'atmosfera terrestre",
          "Il nostro Sole e' l'esempio piu' vicino",
        ],
        pros_b: [
          "Non produce luce; riflette la luce di una stella",
          "Orbita attorno a una stella e ha ripulito il proprio percorso orbitale",
          "Puo' essere roccioso come la Terra o gassoso come Giove",
          "Brilla di una luce stabile anziche' scintillare",
          "Molto meno massiccio di una stella",
        ],
        verdict:
          "Le stelle sono fornaci nucleari che brillano; i pianeti sono corpi piu' freddi che si limitano a riflettere quella luce. Un pianeta non potrebbe mai innescare la fusione a meno di acquistare massa sufficiente per diventare una stella.",
        faq: [
          {
            q: "Perche' le stelle scintillano ma i pianeti no?",
            a: "Le stelle sono sorgenti puntiformi, quindi la turbolenza atmosferica le fa scintillare; i pianeti sono piccoli dischi e brillano in modo stabile.",
          },
          {
            q: "Quanto deve essere massiccio un oggetto per diventare una stella?",
            a: "Circa 80 volte la massa di Giove, abbastanza per avviare la fusione dell'idrogeno nel suo nucleo.",
          },
          {
            q: "Un pianeta puo' orbitare attorno a due stelle?",
            a: "Si. I pianeti circumbinari orbitano attorno a una coppia di stelle, e diversi sono stati confermati.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-vs-comet",
    a: "Asteroid",
    b: "Comet",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "☄️",
    content: {
      it: {
        title: "Asteroide contro Cometa: corpi rocciosi contro ghiacciati",
        h1: "Asteroide contro Cometa: due piccoli corpi del sistema solare",
        description:
          "Gli asteroidi sono rocciosi e metallici; le comete sono ghiacciate e sviluppano code vicino al Sole. Confronta questi piccoli corpi del sistema solare.",
        intro:
          "Asteroidi e comete sono residui della nascita del sistema solare, ma differiscono per cio' di cui sono fatti e per la loro provenienza.",
        pros_a: [
          "Composto principalmente da roccia e metallo",
          "Per lo piu' orbitano nella fascia degli asteroidi tra Marte e Giove",
          "Formatisi nel sistema solare interno piu' caldo",
          "Restano solidi e non sviluppano una coda",
          "Vanno da piccoli massi a centinaia di chilometri di larghezza",
        ],
        pros_b: [
          "Composta da ghiaccio, polvere e gas congelati",
          "Hanno origine nella lontana fascia di Kuiper e nella nube di Oort",
          "Formatesi nel freddo sistema solare esterno",
          "Sviluppano una chioma e una coda luminose quando sono vicine al Sole",
          "Seguono orbite lunghe e molto ellittiche",
        ],
        verdict:
          "Gli asteroidi sono rocciosi e restano vicino a casa; le comete sono 'sporche palle di neve' ghiacciate del sistema esterno che danno spettacolo quando la luce solare vaporizza il loro ghiaccio in una coda.",
        faq: [
          {
            q: "Perche' le comete hanno code ma gli asteroidi no?",
            a: "Le comete contengono ghiaccio che si vaporizza vicino al Sole, rilasciando gas e polvere che formano una coda luminosa.",
          },
          {
            q: "Da dove vengono le comete?",
            a: "Dalla fascia di Kuiper oltre Nettuno e dalla nube di Oort, molto piu' lontana.",
          },
          {
            q: "Un asteroide potrebbe colpire la Terra?",
            a: "Si, e diversi lo hanno fatto. Gli astronomi tracciano gli asteroidi near-Earth per valutare ogni rischio di impatto.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "meteor-vs-meteorite",
    a: "Meteor",
    b: "Meteorite",
    category: "science",
    emoji_a: "🌠",
    emoji_b: "🪨",
    content: {
      it: {
        title: "Meteora contro Meteorite: termini delle rocce spaziali",
        h1: "Meteora contro Meteorite: una questione di posizione",
        description:
          "Una meteora e' la scia di luce nel cielo; un meteorite e' la roccia che sopravvive e atterra. Confronta questi termini delle rocce spaziali.",
        intro:
          "Meteora e meteorite suonano simili ma descrivono fasi diverse dello stesso evento. La differenza e' semplicemente dove si trova la roccia spaziale.",
        pros_a: [
          "La luminosa scia di luce vista bruciare nel cielo",
          "Causata da una roccia spaziale riscaldata dall'attrito con l'aria",
          "Avviene in alto nell'atmosfera terrestre",
          "Chiamata anche stella cadente",
          "La maggior parte si consuma completamente prima di raggiungere il suolo",
        ],
        pros_b: [
          "La roccia vera e propria che sopravvive e raggiunge il suolo",
          "Un oggetto solido che puoi tenere e studiare",
          "Trovato sulla superficie terrestre dopo la caduta",
          "Fornisce campioni diretti di asteroidi e altri mondi",
          "Mostra spesso una scura crosta di fusione dovuta al riscaldamento atmosferico",
        ],
        verdict:
          "Lo stesso oggetto ha tre nomi: un meteoroide nello spazio, una meteora mentre brilla attraverso l'atmosfera, e un meteorite una volta atterrato. I termini seguono il suo viaggio verso la Terra.",
        faq: [
          {
            q: "Cos'e' un meteoroide?",
            a: "Un piccolo corpo roccioso o metallico che viaggia nello spazio prima di entrare nell'atmosfera di un pianeta.",
          },
          {
            q: "La maggior parte delle meteore diventa meteorite?",
            a: "No. La grande maggioranza si consuma interamente nell'atmosfera e non raggiunge mai il suolo.",
          },
          {
            q: "Cosa causa la scia luminosa?",
            a: "L'attrito con l'aria riscalda e ionizza il gas attorno alla roccia, producendo una scia luminosa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solar-eclipse-vs-lunar-eclipse",
    a: "Solar eclipse",
    b: "Lunar eclipse",
    category: "science",
    emoji_a: "🌑",
    emoji_b: "🌕",
    content: {
      it: {
        title: "Eclissi solare contro lunare: qual e' la differenza?",
        h1: "Eclissi solare contro lunare: due allineamenti cosmici",
        description:
          "Un'eclissi solare nasconde il Sole; un'eclissi lunare oscura la Luna. Confronta il funzionamento di questi due allineamenti cosmici.",
        intro:
          "Le eclissi sono un gioco di ombre tra Sole, Terra e Luna. Quale corpo viene oscurato decide se si tratta di un'eclissi solare o lunare.",
        pros_a: [
          "La Luna passa tra il Sole e la Terra",
          "L'ombra della Luna blocca la luce del Sole",
          "Avviene solo durante la luna nuova",
          "Visibile solo da una stretta fascia sulla Terra",
          "Non va mai osservata senza un'adeguata protezione per gli occhi",
        ],
        pros_b: [
          "La Terra passa tra il Sole e la Luna",
          "L'ombra della Terra cade sulla Luna",
          "Avviene solo durante la luna piena",
          "Visibile da tutto il lato notturno della Terra",
          "Sicura da osservare a occhio nudo",
        ],
        verdict:
          "In un'eclissi solare l'ombra della Luna colpisce la Terra; in un'eclissi lunare l'ombra della Terra colpisce la Luna. Le eclissi lunari sono piu' facili da vedere e sicure da osservare; le eclissi solari sono piu' rare da un singolo punto.",
        faq: [
          {
            q: "Perche' un'eclissi solare e' visibile da meno luoghi?",
            a: "L'ombra della Luna e' piccola, quindi la totalita attraversa solo una stretta fascia della superficie terrestre.",
          },
          {
            q: "Perche' la Luna diventa rossa durante un'eclissi lunare?",
            a: "La luce solare deviata dall'atmosfera terrestre raggiunge la Luna, e le lunghezze d'onda rosse dominano, dando una 'luna di sangue'.",
          },
          {
            q: "Si puo' osservare un'eclissi lunare in sicurezza?",
            a: "Si. A differenza di un'eclissi solare, un'eclissi lunare e' del tutto sicura da osservare a occhio nudo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "galaxy-vs-nebula",
    a: "Galaxy",
    b: "Nebula",
    category: "science",
    emoji_a: "🌌",
    emoji_b: "☁️",
    content: {
      it: {
        title: "Galassia contro Nebulosa: strutture cosmiche a confronto",
        h1: "Galassia contro Nebulosa: citta di stelle contro nubi di gas",
        description:
          "Una galassia e' una vasta raccolta di stelle; una nebulosa e' una nube di gas e polvere. Confronta queste due strutture cosmiche.",
        intro:
          "Galassie e nebulose sono entrambe viste spettacolari nello spazio profondo, ma sono cose molto diverse: una e' un sistema stellare, l'altra materia grezza.",
        pros_a: [
          "Un enorme sistema di stelle legato gravitazionalmente",
          "Contiene da miliardi a migliaia di miliardi di stelle",
          "Ha una struttura definita: a spirale, ellittica o irregolare",
          "Racchiude stelle, gas, polvere, pianeti e materia oscura",
          "La nostra Via Lattea e' un esempio tra migliaia di miliardi",
        ],
        pros_b: [
          "Una nube di gas e polvere interstellari",
          "Spesso il luogo di nascita di nuove stelle",
          "Molto piu' piccola di una galassia",
          "Puo' brillare, riflettere la luce o apparire scura",
          "Si trova spesso all'interno delle galassie, compresa la nostra",
        ],
        verdict:
          "Una galassia e' una grande citta di stelle; una nebulosa e' una nube di gas e polvere spesso all'interno di una galassia. Le nebulose sono le culle in cui si formano le stelle, quindi fanno parte dei cicli vitali galattici.",
        faq: [
          {
            q: "Le nebulose si trovano dentro le galassie?",
            a: "Di solito si'. La maggior parte delle nebulose si trova all'interno delle galassie, comprese molte visibili nella nostra Via Lattea.",
          },
          {
            q: "Perche' alcune nebulose sono chiamate culle di stelle?",
            a: "La gravita attira insieme il loro gas e la loro polvere finche' collassa e si accende in nuove stelle.",
          },
          {
            q: "Quanto e' grande una galassia tipica?",
            a: "Le galassie si estendono per decine di migliaia di anni luce e contengono miliardi o migliaia di miliardi di stelle.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "big-bang-vs-steady-state",
    a: "Big Bang theory",
    b: "Steady State theory",
    category: "science",
    emoji_a: "💥",
    emoji_b: "♾️",
    content: {
      it: {
        title: "Big Bang contro Stato stazionario: cosmologie",
        h1: "Big Bang contro Stato stazionario: come e' iniziato l'universo",
        description:
          "Il Big Bang afferma che l'universo ebbe un inizio caldo e denso; lo Stato stazionario diceva che e' sempre esistito. Confronta queste due cosmologie.",
        intro:
          "Per decenni due teorie rivali competerono per spiegare l'origine dell'universo. Una vinse in modo decisivo, ma il dibattito plasmo' la cosmologia moderna.",
        pros_a: [
          "L'universo inizio' circa 13,8 miliardi di anni fa",
          "Parti' da uno stato estremamente caldo e denso e si espanse",
          "Predice la radiazione cosmica di fondo a microonde",
          "Spiega l'abbondanza osservata di idrogeno ed elio",
          "Il modello accettato, sostenuto da prove solide",
        ],
        pros_b: [
          "Propose un universo senza inizio ne' fine",
          "Suggeriva che la materia venga creata continuamente mentre lo spazio si espande",
          "Manteneva la densita dell'universo costante nel tempo",
          "Offriva un cosmo ordinato ed eterno senza un punto d'origine",
          "Ora respinta, poiche' non spiega osservazioni chiave",
        ],
        verdict:
          "La teoria del Big Bang ha vinto perche' ha predetto la radiazione cosmica di fondo a microonde, scoperta nel 1965. Lo Stato stazionario non poteva spiegare quella radiazione ed e' stato abbandonato dalla cosmologia moderna.",
        faq: [
          {
            q: "Quali prove sostengono il Big Bang?",
            a: "La radiazione cosmica di fondo a microonde, l'espansione con redshift delle galassie e il rapporto misurato degli elementi leggeri.",
          },
          {
            q: "Perche' lo Stato stazionario e' stato respinto?",
            a: "Non poteva spiegare la radiazione cosmica di fondo ne' l'evoluzione delle galassie nel tempo cosmico.",
          },
          {
            q: "Il Big Bang e' esploso in uno spazio gia esistente?",
            a: "No. Il Big Bang ha creato lo spazio e il tempo stessi; e' stata un'espansione dello spazio, non un'esplosione al suo interno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "algebra-vs-calculus",
    a: "Algebra",
    b: "Calculus",
    category: "science",
    emoji_a: "🔢",
    emoji_b: "∫",
    content: {
      it: {
        title: "Algebra contro Analisi: due rami della matematica",
        h1: "Algebra contro Analisi: dalle equazioni al cambiamento",
        description:
          "L'algebra lavora con incognite ed equazioni; l'analisi studia tassi di variazione e accumulazione. Confronta questi rami della matematica.",
        intro:
          "Algebra e analisi sono pilastri della matematica. L'algebra getta le fondamenta, mentre l'analisi la estende a un mondo in costante cambiamento.",
        pros_a: [
          "Usa lettere e simboli per rappresentare numeri sconosciuti",
          "Risolve equazioni e analizza relazioni",
          "Lavora con quantita fisse e statiche",
          "Fondamento di quasi tutta la matematica superiore",
          "Insegnata prima dell'analisi nella maggior parte dei programmi",
        ],
        pros_b: [
          "Studia il cambiamento continuo e il moto",
          "Costruita sui concetti di limite e infinito",
          "Le derivate misurano i tassi di variazione",
          "Gli integrali misurano accumulazione e area",
          "Essenziale per fisica, ingegneria ed economia",
        ],
        verdict:
          "L'algebra e' il linguaggio e il kit di strumenti della matematica; l'analisi usa quel kit per gestire il cambiamento. Serve un'algebra solida prima che l'analisi abbia senso: si costruiscono l'una sull'altra.",
        faq: [
          {
            q: "Serve l'algebra per imparare l'analisi?",
            a: "Si. L'analisi si basa molto sulla manipolazione algebrica, quindi una solida base di algebra e' essenziale.",
          },
          {
            q: "A cosa serve principalmente l'analisi?",
            a: "A modellare il cambiamento - velocita, crescita, aree e ottimizzazione - in fisica, ingegneria ed economia.",
          },
          {
            q: "Chi ha inventato l'analisi?",
            a: "Isaac Newton e Gottfried Leibniz la svilupparono indipendentemente alla fine del XVII secolo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "derivative-vs-integral",
    a: "Derivative",
    b: "Integral",
    category: "science",
    emoji_a: "📈",
    emoji_b: "∫",
    content: {
      it: {
        title: "Derivata contro Integrale: concetti chiave dell'analisi",
        h1: "Derivata contro Integrale: le due facce dell'analisi",
        description:
          "Una derivata misura il tasso di variazione; un integrale misura accumulazione e area. Confronta queste due operazioni dell'analisi.",
        intro:
          "L'analisi ha due operazioni centrali profondamente collegate. Una zooma sul cambiamento istantaneo; l'altra somma piccoli pezzi.",
        pros_a: [
          "Misura il tasso di variazione istantaneo",
          "Da' la pendenza di una curva in un punto",
          "Si ottiene mediante derivazione",
          "La velocita e' la derivata della posizione",
          "Usata per trovare i valori massimi e minimi",
        ],
        pros_b: [
          "Misura l'accumulazione totale su un intervallo",
          "Da' l'area sotto una curva",
          "Si ottiene mediante integrazione",
          "La distanza e' l'integrale della velocita",
          "Usato per calcolare aree, volumi e totali",
        ],
        verdict:
          "Derivate e integrali sono operazioni inverse, unite dal Teorema fondamentale del calcolo. Derivare annulla l'integrare, e viceversa. Insieme descrivono sia il cambiamento sia l'accumulazione.",
        faq: [
          {
            q: "Come sono collegati derivate e integrali?",
            a: "Sono operazioni inverse, collegate dal Teorema fondamentale del calcolo.",
          },
          {
            q: "Cosa ti dice una derivata?",
            a: "Da' il tasso di variazione in un istante, per esempio la pendenza di una curva in un punto.",
          },
          {
            q: "Cosa calcola un integrale?",
            a: "Calcola quantita accumulate, piu' comunemente l'area sotto una curva su un intervallo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vector-vs-scalar",
    a: "Vector",
    b: "Scalar",
    category: "science",
    emoji_a: "➡️",
    emoji_b: "🔢",
    content: {
      it: {
        title: "Vettore contro Scalare: grandezze in fisica",
        h1: "Vettore contro Scalare: con o senza direzione",
        description:
          "Un vettore ha modulo e direzione; uno scalare ha solo il modulo. Confronta questi due tipi di grandezza fisica.",
        intro:
          "Ogni grandezza fisica e' o un vettore o uno scalare. La distinzione e' semplice ma cruciale: ha una direzione?",
        pros_a: [
          "Ha sia modulo sia direzione",
          "Esempi includono velocita, forza e spostamento",
          "Disegnato come una freccia la cui lunghezza indica la grandezza",
          "Si somma usando la geometria, non la semplice aritmetica",
          "La direzione e' essenziale al suo significato",
        ],
        pros_b: [
          "Ha solo il modulo, senza direzione",
          "Esempi includono massa, rapidita, tempo e temperatura",
          "Completamente descritto da un singolo numero e un'unita",
          "Si somma usando l'aritmetica ordinaria",
          "Spesso il modulo di un vettore correlato",
        ],
        verdict:
          "Gli scalari sono singoli numeri; i vettori portano anche una direzione. La rapidita e' uno scalare, la velocita e' la sua cugina vettoriale. Sapere quale tipo hai determina come puoi sommare e usare la grandezza.",
        faq: [
          {
            q: "La temperatura e' un vettore o uno scalare?",
            a: "La temperatura e' uno scalare: ha un modulo ma nessuna direzione.",
          },
          {
            q: "Perche' non puoi sommare i vettori come numeri ordinari?",
            a: "Perche' la direzione conta; i vettori si combinano usando la geometria o la somma componente per componente.",
          },
          {
            q: "Fai un esempio di vettore e del suo corrispondente scalare.",
            a: "La velocita e' un vettore; il suo modulo, la rapidita, e' lo scalare corrispondente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mean-vs-median",
    a: "Mean",
    b: "Median",
    category: "science",
    emoji_a: "📊",
    emoji_b: "📐",
    content: {
      it: {
        title: "Media contro Mediana: due medie a confronto",
        h1: "Media contro Mediana: quale media usare",
        description:
          "La media e' la media aritmetica; la mediana e' il valore centrale. Confronta queste due misure di tendenza centrale.",
        intro:
          "Sia la media sia la mediana descrivono il 'centro' dei dati, ma possono dare risposte molto diverse quando i dati sono asimmetrici.",
        pros_a: [
          "La somma di tutti i valori divisa per il conteggio",
          "Usa ogni singolo punto dei dati",
          "Comune nelle statistiche e nei calcoli quotidiani",
          "Fortemente influenzata dai valori estremi anomali",
          "Facile da usare in ulteriori formule matematiche",
        ],
        pros_b: [
          "Il valore centrale quando i dati sono ordinati in sequenza",
          "Divide l'insieme di dati in due meta uguali",
          "Quasi non influenzata dai valori estremi anomali",
          "Rappresenta meglio i valori tipici in dati asimmetrici",
          "Usata per redditi, prezzi delle case e dati simili",
        ],
        verdict:
          "Usa la media per dati simmetrici senza grandi valori anomali; usa la mediana quando i dati sono asimmetrici, come i redditi, perche' pochi valori estremi possono trascinare la media lontano dall'esperienza tipica.",
        faq: [
          {
            q: "Perche' la mediana e' preferita per i dati sul reddito?",
            a: "I redditi sono distorti da pochi guadagni molto alti; la mediana riflette meglio quanto guadagna una persona tipica.",
          },
          {
            q: "Media e mediana possono essere uguali?",
            a: "Si. In una distribuzione perfettamente simmetrica media e mediana sono lo stesso valore.",
          },
          {
            q: "Quale media e' sensibile ai valori anomali?",
            a: "La media. Un singolo valore estremo puo' spostarla in modo evidente, mentre la mediana resiste ai valori anomali.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "variance-vs-standard-deviation",
    a: "Variance",
    b: "Standard deviation",
    category: "science",
    emoji_a: "📉",
    emoji_b: "📏",
    content: {
      it: {
        title: "Varianza contro Deviazione standard spiegate",
        h1: "Varianza contro Deviazione standard: misurare la dispersione",
        description:
          "La varianza e' la dispersione quadratica media; la deviazione standard e' la sua radice quadrata. Confronta queste due misure di dispersione.",
        intro:
          "Entrambe le grandezze misurano quanto sono dispersi i dati e sono direttamente correlate: la deviazione standard e' semplicemente la radice quadrata della varianza.",
        pros_a: [
          "La media degli scarti al quadrato rispetto alla media",
          "Sempre non negativa",
          "Espressa nelle unita al quadrato dei dati originali",
          "Si somma in modo ordinato combinando variabili indipendenti",
          "Un mattone fondamentale della teoria statistica",
        ],
        pros_b: [
          "La radice quadrata della varianza",
          "Espressa nelle stesse unita dei dati originali",
          "Piu' facile da interpretare in termini concreti",
          "Usata per descrivere la larghezza di una distribuzione normale",
          "Piu' comune nei report e nelle statistiche quotidiane",
        ],
        verdict:
          "La varianza e' comoda matematicamente ma le sue unita al quadrato sono difficili da interpretare. La deviazione standard annulla l'elevamento al quadrato, quindi e' piu' facile da leggere. Usa la varianza nelle dimostrazioni, la deviazione standard nei report.",
        faq: [
          {
            q: "Come sono correlate varianza e deviazione standard?",
            a: "La deviazione standard e' la radice quadrata della varianza, riportandola alle unita originali.",
          },
          {
            q: "Perche' la deviazione standard e' piu' facile da interpretare?",
            a: "E' nelle stesse unita dei dati, quindi uno scarto in metri o euro ha un senso intuitivo.",
          },
          {
            q: "La varianza puo' essere negativa?",
            a: "No. Poiche' media valori al quadrato, la varianza e' sempre zero o positiva.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "permutation-vs-combination",
    a: "Permutation",
    b: "Combination",
    category: "science",
    emoji_a: "🔢",
    emoji_b: "🎲",
    content: {
      it: {
        title: "Permutazione contro Combinazione: conta l'ordine?",
        h1: "Permutazione contro Combinazione: contare le disposizioni",
        description:
          "Le permutazioni contano disposizioni ordinate; le combinazioni contano selezioni non ordinate. Confronta questi due metodi di conteggio.",
        intro:
          "Sia le permutazioni sia le combinazioni contano i modi di scegliere elementi, ma la risposta dipende da una domanda: l'ordine conta?",
        pros_a: [
          "Conta le disposizioni in cui l'ordine conta",
          "ABC e CBA sono contate come diverse",
          "Da' sempre un conteggio pari o maggiore delle combinazioni",
          "Usata per classifiche, password e ordini dei posti",
          "Calcolata come n! diviso per (n meno r) fattoriale",
        ],
        pros_b: [
          "Conta le selezioni in cui l'ordine non conta",
          "ABC e CBA sono contate come lo stesso gruppo",
          "Da' sempre un conteggio pari o minore delle permutazioni",
          "Usata per estrazioni della lotteria, comitati e mani di carte",
          "Calcolata dividendo le permutazioni per r fattoriale",
        ],
        verdict:
          "Chiediti se l'ordine conta. Per un podio di gara (oro, argento, bronzo) usa le permutazioni; per scegliere un comitato in cui tutti i membri sono uguali, usa le combinazioni.",
        faq: [
          {
            q: "Come decido quale usare?",
            a: "Se riordinare gli elementi scelti crea un risultato diverso, usa le permutazioni; in caso contrario, usa le combinazioni.",
          },
          {
            q: "Una lotteria e' una permutazione o una combinazione?",
            a: "Una combinazione, perche' l'ordine in cui vengono estratti i numeri di solito non conta.",
          },
          {
            q: "Quale da' un numero piu' grande?",
            a: "Le permutazioni, poiche' ogni combinazione non ordinata corrisponde a diverse disposizioni ordinate.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "supervised-vs-unsupervised-learning",
    a: "Supervised learning",
    b: "Unsupervised learning",
    category: "science",
    emoji_a: "🏷️",
    emoji_b: "🔍",
    content: {
      it: {
        title: "Apprendimento supervisionato contro non supervisionato",
        h1: "Apprendimento supervisionato contro non supervisionato a confronto",
        description:
          "L'apprendimento supervisionato si addestra su dati etichettati; quello non supervisionato trova schemi in dati non etichettati. Confronta entrambi gli approcci.",
        intro:
          "Il machine learning ha due stili fondamentali. La differenza chiave e' se i dati di addestramento arrivano con le risposte corrette allegate.",
        pros_a: [
          "Si addestra su dati che includono etichette o risposte note",
          "Impara a prevedere gli output dagli input",
          "Usato per compiti di classificazione e regressione",
          "L'accuratezza puo' essere misurata rispetto alle vere etichette",
          "Richiede costosi dati di addestramento etichettati da umani",
        ],
        pros_b: [
          "Si addestra su dati senza alcuna etichetta",
          "Scopre struttura e schemi nascosti",
          "Usato per il clustering e la riduzione della dimensionalita",
          "Piu' difficile da valutare senza una verita di riferimento",
          "Funziona con abbondanti dati grezzi e non etichettati",
        ],
        verdict:
          "Usa l'apprendimento supervisionato quando hai esempi etichettati e un obiettivo chiaro da prevedere. Usa l'apprendimento non supervisionato per esplorare dati non etichettati e scoprire raggruppamenti che non hai definito in anticipo.",
        faq: [
          {
            q: "Quale ha bisogno di dati etichettati?",
            a: "L'apprendimento supervisionato. Richiede coppie input-output in cui la risposta corretta e' gia nota.",
          },
          {
            q: "Qual e' un tipico compito non supervisionato?",
            a: "Il clustering: raggruppare punti di dati simili senza categorie predefinite.",
          },
          {
            q: "Uno e' migliore dell'altro?",
            a: "Nessuno dei due. La scelta giusta dipende dal fatto che i tuoi dati siano etichettati e dal problema che devi risolvere.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "classification-vs-regression",
    a: "Classification",
    b: "Regression",
    category: "science",
    emoji_a: "🏷️",
    emoji_b: "📈",
    content: {
      it: {
        title: "Classificazione contro Regressione nel machine learning",
        h1: "Classificazione contro Regressione: prevedere i risultati",
        description:
          "La classificazione prevede categorie; la regressione prevede numeri continui. Confronta questi due compiti di apprendimento supervisionato.",
        intro:
          "Entrambi sono compiti di apprendimento supervisionato, ma rispondono a tipi diversi di domanda. Uno smista i dati in gruppi; l'altro prevede un numero.",
        pros_a: [
          "Prevede a quale categoria o classe appartiene un input",
          "L'output e' un'etichetta discreta, come spam o non spam",
          "Valutata con accuratezza, precisione e richiamo",
          "Esempi: riconoscimento di immagini, diagnosi di malattie",
          "I confini di decisione separano le classi",
        ],
        pros_b: [
          "Prevede un valore numerico continuo",
          "L'output e' un numero, come un prezzo o una temperatura",
          "Valutata con metriche di errore come l'errore quadratico medio",
          "Esempi: previsione dei prezzi delle case e del valore delle azioni",
          "Adatta una retta o una curva attraverso i dati",
        ],
        verdict:
          "Chiediti che tipo di risposta ti serve. Se l'output e' un'etichetta o una categoria, usa la classificazione; se e' una quantita su una scala continua, usa la regressione.",
        faq: [
          {
            q: "Come capisco quale compito ho?",
            a: "Se prevedi una categoria, e' classificazione; se prevedi un numero, e' regressione.",
          },
          {
            q: "Prevedere i prezzi delle case e' classificazione o regressione?",
            a: "Regressione, perche' il prezzo e' un valore numerico continuo anziche' una categoria fissa.",
          },
          {
            q: "Lo stesso algoritmo puo' fare entrambi?",
            a: "Alcuni, come gli alberi decisionali e le reti neurali, possono essere adattati sia per la classificazione sia per la regressione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rational-vs-irrational-numbers",
    a: "Rational numbers",
    b: "Irrational numbers",
    category: "science",
    emoji_a: "➗",
    emoji_b: "♾️",
    content: {
      it: {
        title: "Numeri razionali contro irrazionali spiegati",
        h1: "Numeri razionali contro irrazionali: due tipi di numeri",
        description:
          "I numeri razionali possono essere scritti come frazioni; i numeri irrazionali no. Confronta questi due tipi di numeri reali.",
        intro:
          "Ogni numero reale e' o razionale o irrazionale. La linea di demarcazione e' se puo' essere espresso come una frazione semplice.",
        pros_a: [
          "Puo' essere scritto come frazione di due numeri interi",
          "L'espansione decimale o termina o si ripete",
          "Include tutti gli interi e i decimali finiti",
          "Esempi: 1/2, 7, 0,75 e 0,333 periodico",
          "Chiuso rispetto ad addizione, sottrazione e moltiplicazione",
        ],
        pros_b: [
          "Non puo' essere scritto come frazione di due numeri interi",
          "L'espansione decimale non termina mai e non si ripete mai",
          "Include costanti famose come pi greco e la radice quadrata di 2",
          "Esempi: pi greco, e e la sezione aurea",
          "Riempiono i vuoti tra i numeri razionali sulla retta",
        ],
        verdict:
          "I numeri razionali si comportano in modo ordinato come frazioni con decimali prevedibili. I numeri irrazionali come pi greco proseguono per sempre senza schema. Insieme formano l'insieme completo dei numeri reali.",
        faq: [
          {
            q: "Pi greco e' razionale o irrazionale?",
            a: "Pi greco e' irrazionale; la sua espansione decimale prosegue per sempre senza ripetersi.",
          },
          {
            q: "Come si individua un numero irrazionale?",
            a: "Se la sua decimale non termina mai e non si stabilizza mai in uno schema ripetuto, e' irrazionale.",
          },
          {
            q: "La radice quadrata di 4 e' irrazionale?",
            a: "No. La radice quadrata di 4 e' 2, un numero intero, quindi e' razionale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "prime-vs-composite-numbers",
    a: "Prime numbers",
    b: "Composite numbers",
    category: "science",
    emoji_a: "🔑",
    emoji_b: "🧱",
    content: {
      it: {
        title: "Numeri primi contro composti spiegati",
        h1: "Numeri primi contro composti: i mattoni della matematica",
        description:
          "I numeri primi hanno esattamente due divisori; i numeri composti ne hanno di piu'. Confronta queste due classi di numeri interi.",
        intro:
          "I numeri interi maggiori di 1 si dividono in due gruppi. La differenza si riduce a quanti fattori ha un numero.",
        pros_a: [
          "Ha esattamente due divisori distinti: 1 e se stesso",
          "Non puo' essere scomposto in fattori interi piu' piccoli",
          "Esempi: 2, 3, 5, 7, 11 e 13",
          "Gli 'atomi' da cui sono costruiti tutti i numeri interi",
          "Due e' l'unico numero primo pari",
        ],
        pros_b: [
          "Ha piu' di due divisori",
          "Puo' essere scomposto in numeri interi piu' piccoli",
          "Esempi: 4, 6, 8, 9, 10 e 12",
          "Sempre esprimibile come un prodotto di numeri primi",
          "La maggior parte dei numeri interi e' composta",
        ],
        verdict:
          "I numeri primi sono i mattoni indivisibili; i numeri composti sono prodotti di quei mattoni. Il Teorema fondamentale dell'aritmetica afferma che ogni numero intero maggiore di 1 ha una scomposizione in fattori primi unica.",
        faq: [
          {
            q: "1 e' primo o composto?",
            a: "Nessuno dei due. Il numero 1 ha un solo divisore, quindi e' classificato come ne' primo ne' composto.",
          },
          {
            q: "Perche' il 2 e' speciale tra i numeri primi?",
            a: "E' l'unico numero primo pari; ogni altro numero pari e' divisibile per 2 e quindi composto.",
          },
          {
            q: "Cos'e' la scomposizione in fattori primi?",
            a: "Scrivere un numero composto come un prodotto di numeri primi, cosa che e' unica per ogni numero intero.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "geometry-vs-topology",
    a: "Geometry",
    b: "Topology",
    category: "science",
    emoji_a: "📐",
    emoji_b: "🍩",
    content: {
      it: {
        title: "Geometria contro Topologia: forma e spazio",
        h1: "Geometria contro Topologia: forme rigide contro elastiche",
        description:
          "La geometria studia forme e misure esatte; la topologia studia proprieta mantenute sotto deformazione. Confronta questi campi della matematica.",
        intro:
          "Geometria e topologia studiano entrambe la forma, ma si interessano a cose molto diverse: una misura con precisione, l'altra ignora del tutto le dimensioni.",
        pros_a: [
          "Studia distanze, angoli e forme esatte",
          "Misure come lunghezza e area contano",
          "Le forme sono rigide; piegarle le cambia",
          "Include sistemi euclidei e non euclidei",
          "Usata in costruzione, navigazione e progettazione",
        ],
        pros_b: [
          "Studia proprieta immutate dalla deformazione continua",
          "Allungare e piegare sono ammessi, strappare no",
          "Ignora dimensioni, distanze e angoli esatti",
          "Una tazza da caffe e una ciambella sono topologicamente uguali",
          "Usata in analisi dei dati, reti e fisica",
        ],
        verdict:
          "La geometria e' la matematica di forme e misure precise; la topologia e' a volte chiamata 'geometria del foglio di gomma' perche' studia cio' che sopravvive all'allungamento. Entrambe rivelano la struttura dello spazio.",
        faq: [
          {
            q: "Perche' in topologia una tazza da caffe e' uguale a una ciambella?",
            a: "Entrambe hanno esattamente un buco, e una puo' essere deformata nell'altra senza strappi.",
          },
          {
            q: "Alla topologia interessa la distanza?",
            a: "No. La topologia ignora distanze e angoli esatti, concentrandosi solo sulla connessione e sui buchi.",
          },
          {
            q: "Quale campo e' piu' incentrato sulla misura?",
            a: "La geometria. Dipende fortemente da lunghezze, angoli e aree esatti.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "volcano-vs-earthquake",
    a: "Volcano",
    b: "Earthquake",
    category: "science",
    emoji_a: "🌋",
    emoji_b: "🌍",
    content: {
      it: {
        title: "Vulcano contro Terremoto: eventi geologici",
        h1: "Vulcano contro Terremoto: due volti di una Terra inquieta",
        description:
          "I vulcani eruttano magma in superficie; i terremoti rilasciano energia come scuotimento del terreno. Confronta questi eventi geologici.",
        intro:
          "Vulcani e terremoti sono entrambi guidati da forze nelle profondita della Terra, eppure esprimono quell'energia in modi completamente diversi.",
        pros_a: [
          "Un'apertura che erutta magma, cenere e gas",
          "Costruisce terra e crea nuova roccia nel tempo",
          "Spesso da' segnali di avvertimento prima di eruttare",
          "Concentrato ai confini delle placche e ai punti caldi",
          "Puo' influenzare il clima diffondendo cenere nell'atmosfera",
        ],
        pros_b: [
          "Un improvviso rilascio di energia che scuote il terreno",
          "Causato dalla rottura della roccia lungo le faglie",
          "Di solito colpisce senza un avvertimento pratico",
          "Misurato in magnitudo sulla scala della magnitudo momento",
          "Puo' innescare tsunami, frane e crolli di edifici",
        ],
        verdict:
          "Entrambi derivano dalla tettonica delle placche. I vulcani convogliano calore e roccia fusa verso l'alto; i terremoti rilasciano lo stress accumulato come onde sismiche. Spesso si verificano nelle stesse regioni, come l'Anello di Fuoco del Pacifico.",
        faq: [
          {
            q: "Un vulcano puo' causare un terremoto?",
            a: "Si. Il magma che si muove sottoterra puo' fratturare la roccia e innescare terremoti vulcanici.",
          },
          {
            q: "Quale e' piu' facile da prevedere?",
            a: "I vulcani spesso danno segnali di avvertimento; i terremoti di solito colpiscono con poco o nessun preavviso.",
          },
          {
            q: "Perche' entrambi avvengono ai confini delle placche?",
            a: "I confini delle placche sono dove la crosta terrestre si sfrega, si spacca e sprofonda, rilasciando calore e stress.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "igneous-vs-sedimentary-rock",
    a: "Igneous rock",
    b: "Sedimentary rock",
    category: "science",
    emoji_a: "🌋",
    emoji_b: "🪨",
    content: {
      it: {
        title: "Roccia ignea contro sedimentaria a confronto",
        h1: "Roccia ignea contro sedimentaria: come si formano le rocce",
        description:
          "La roccia ignea si forma dal magma raffreddato; la roccia sedimentaria si forma da sedimenti compattati. Confronta questi due tipi di roccia.",
        intro:
          "Le rocce si dividono in tre famiglie. Le rocce ignee e sedimentarie si formano in modi completamente diversi: una dal fuoco, l'altra dall'accumulo.",
        pros_a: [
          "Si forma quando il magma o la lava fusi si raffreddano e si solidificano",
          "Puo' raffreddarsi lentamente sottoterra o rapidamente in superficie",
          "Ha spesso cristalli minerali intrecciati",
          "Esempi includono granito e basalto",
          "Contiene raramente fossili",
        ],
        pros_b: [
          "Si forma quando il sedimento viene compattato e cementato insieme",
          "Si accumula in strati o strate visibili",
          "Fatta di frammenti, minerali o resti organici",
          "Esempi includono arenaria e calcare",
          "Contiene comunemente fossili",
        ],
        verdict:
          "La roccia ignea nasce dal calore mentre il magma si raffredda; la roccia sedimentaria si costruisce lentamente da strati di detriti. La roccia sedimentaria conserva la maggior parte dei fossili, mentre la roccia ignea registra l'attivita vulcanica passata.",
        faq: [
          {
            q: "Quale tipo di roccia contiene fossili?",
            a: "La roccia sedimentaria. Si forma delicatamente in strati, quindi puo' conservare i resti di vita antica.",
          },
          {
            q: "Qual e' il terzo tipo principale di roccia?",
            a: "La roccia metamorfica, formata quando una roccia esistente viene modificata da calore e pressione.",
          },
          {
            q: "Perche' il granito ha cristalli visibili?",
            a: "Si e' raffreddato lentamente in profondita nel sottosuolo, dando ai minerali il tempo di crescere in grandi cristalli.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "glacier-vs-iceberg",
    a: "Glacier",
    b: "Iceberg",
    category: "science",
    emoji_a: "🏔️",
    emoji_b: "🧊",
    content: {
      it: {
        title: "Ghiacciaio contro Iceberg: due forme di ghiaccio",
        h1: "Ghiacciaio contro Iceberg: ghiaccio terrestre contro ghiaccio galleggiante",
        description:
          "Un ghiacciaio e' un fiume di ghiaccio che si muove lentamente sulla terraferma; un iceberg e' un blocco che galleggia nel mare. Confronta queste forme di ghiaccio.",
        intro:
          "Ghiacciai e iceberg sono entrambi ghiaccio d'acqua dolce, e sono collegati: molti iceberg sono semplicemente pezzi che si sono staccati da un ghiacciaio.",
        pros_a: [
          "Una grande massa di ghiaccio che scorre lentamente sulla terraferma",
          "Si forma dalla neve che si compatta nel corso di molti anni",
          "Resta ancorato al substrato roccioso o alle montagne",
          "Puo' scavare valli e plasmare i paesaggi",
          "Immagazzina la maggior parte dell'acqua dolce del mondo",
        ],
        pros_b: [
          "Un blocco di ghiaccio che galleggia liberamente nell'oceano",
          "Spesso si stacca, o 'partorisce', da un ghiacciaio o da una piattaforma di ghiaccio",
          "Circa il 90 per cento della sua massa si trova sotto l'acqua",
          "Va alla deriva con le correnti oceaniche e il vento",
          "Fatto di acqua dolce, nonostante galleggi in acqua salata",
        ],
        verdict:
          "Un ghiacciaio e' ghiaccio terrestre che si muove lentamente sotto il proprio peso; un iceberg e' la progenie galleggiante che si stacca nel mare. Entrambi immagazzinano acqua dolce isolata dall'oceano.",
        faq: [
          {
            q: "Da dove vengono gli iceberg?",
            a: "La maggior parte degli iceberg si stacca dai bordi dei ghiacciai e delle piattaforme di ghiaccio che raggiungono il mare.",
          },
          {
            q: "Perche' la maggior parte di un iceberg e' sott'acqua?",
            a: "Il ghiaccio e' solo leggermente meno denso dell'acqua di mare, quindi circa il 90 per cento dell'iceberg resta sommerso.",
          },
          {
            q: "Gli iceberg sono fatti di acqua salata?",
            a: "No. Gli iceberg sono acqua dolce congelata, anche se galleggiano nell'oceano salato.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hurricane-vs-typhoon",
    a: "Hurricane",
    b: "Typhoon",
    category: "science",
    emoji_a: "🌀",
    emoji_b: "🌊",
    content: {
      it: {
        title: "Uragano contro Tifone: stessa tempesta, nomi diversi",
        h1: "Uragano contro Tifone: una questione di geografia",
        description:
          "Uragani e tifoni sono lo stesso tipo di tempesta, chiamati in modo diverso a seconda della regione. Confronta questi cicloni tropicali.",
        intro:
          "Uragano e tifone descrivono lo stesso identico fenomeno meteorologico. L'unica vera differenza e' dove sulla Terra si forma la tempesta.",
        pros_a: [
          "Il nome usato nell'Atlantico e nel Pacifico nord-orientale",
          "Colpisce i Caraibi, il Golfo degli USA e le coste orientali",
          "Classificato sulla scala Saffir-Simpson, categorie da 1 a 5",
          "La stagione degli uragani culmina all'incirca da agosto a ottobre",
          "Un ciclone tropicale rotante con un calmo occhio centrale",
        ],
        pros_b: [
          "Il nome usato nell'Oceano Pacifico nord-occidentale",
          "Colpisce l'Asia orientale e sud-orientale, compreso il Giappone",
          "Un 'super tifone' indica la categoria piu' intensa",
          "Puo' verificarsi in una parte maggiore dell'anno in mari piu' caldi",
          "La stessa struttura di ciclone tropicale rotante",
        ],
        verdict:
          "Scientificamente, uragani e tifoni sono tempeste identiche: sono entrambi cicloni tropicali. L'etichetta cambia semplicemente in base al bacino oceanico. Nell'Oceano Indiano la stessa tempesta e' chiamata ciclone.",
        faq: [
          {
            q: "Un tifone e' piu' forte di un uragano?",
            a: "Non intrinsecamente. Sono lo stesso tipo di tempesta; l'intensita varia da tempesta a tempesta, non in base al nome.",
          },
          {
            q: "Come viene chiamata la tempesta nell'Oceano Indiano?",
            a: "Semplicemente ciclone. I tre nomi indicano tre regioni per un unico fenomeno.",
          },
          {
            q: "Cosa alimenta queste tempeste?",
            a: "L'acqua oceanica calda al di sopra dei circa 26 gradi Celsius fornisce il calore e l'umidita di cui hanno bisogno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "el-nino-vs-la-nina",
    a: "El Niño",
    b: "La Niña",
    category: "science",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      it: {
        title: "El Niño contro La Niña: schemi climatici del Pacifico",
        h1: "El Niño contro La Niña: due facce di un ciclo climatico",
        description:
          "El Niño riscalda il Pacifico centrale; La Niña lo raffredda. Confronta queste due fasi opposte dello stesso ciclo climatico.",
        intro:
          "El Niño e La Niña sono le fasi calda e fredda di un unico ciclo climatico del Pacifico che modifica gli schemi meteorologici in tutto il mondo.",
        pros_a: [
          "La fase calda dell'Oscillazione Meridionale El Niño",
          "Le acque superficiali del Pacifico centrale e orientale si riscaldano",
          "Indebolisce i consueti alisei da est a ovest",
          "Spesso porta siccita in Australia e Indonesia",
          "Tende ad alzare le temperature medie globali",
        ],
        pros_b: [
          "La fase fredda dello stesso ciclo climatico",
          "Le acque superficiali del Pacifico centrale e orientale si raffreddano",
          "Rafforza gli alisei",
          "Spesso porta condizioni piu' umide in Australia e Asia",
          "Tende ad abbassare leggermente le temperature medie globali",
        ],
        verdict:
          "El Niño e La Niña sono oscillazioni opposte del ciclo ENSO. El Niño riscalda il Pacifico e spinge le temperature globali verso l'alto; La Niña lo raffredda. Insieme plasmano precipitazioni e tempeste in tutti i continenti.",
        faq: [
          {
            q: "Cos'e' l'ENSO?",
            a: "L'Oscillazione Meridionale El Niño, l'intero ciclo climatico del Pacifico che include sia El Niño sia La Niña.",
          },
          {
            q: "Quale fase e' piu' calda a livello globale?",
            a: "Gli anni di El Niño tendono a essere piu' caldi in tutto il mondo; gli anni di La Niña sono di solito leggermente piu' freschi.",
          },
          {
            q: "Con quale frequenza si verificano?",
            a: "Il ciclo oscilla tipicamente ogni due-sette anni, anche se la tempistica e' irregolare.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "climate-vs-weather",
    a: "Climate",
    b: "Weather",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🌦️",
    content: {
      it: {
        title: "Clima contro Tempo: qual e' la differenza?",
        h1: "Clima contro Tempo: lungo termine contro breve termine",
        description:
          "Il tempo e' l'atmosfera giorno per giorno; il clima e' la media a lungo termine. Confronta questi due termini spesso confusi.",
        intro:
          "Tempo e clima descrivono entrambi l'atmosfera, ma su scale temporali molto diverse. Uno e' cio' che vedi oggi; l'altro e' cio' che ti aspetti nel corso dei decenni.",
        pros_a: [
          "La media a lungo termine del tempo nel corso dei decenni",
          "Misurato su periodi di 30 anni o piu'",
          "Descrive le condizioni tipiche di una regione",
          "Cambia lentamente e riflette tendenze ampie",
          "Esempi: un clima desertico o un clima tropicale",
        ],
        pros_b: [
          "Lo stato dell'atmosfera in un dato momento",
          "Misurato nell'arco di ore e giorni",
          "Descrive temperatura, pioggia, vento e nuvole attuali",
          "Cambia rapidamente ed e' difficile da prevedere con largo anticipo",
          "Esempi: un pomeriggio piovoso o una mattinata soleggiata",
        ],
        verdict:
          "Il tempo e' cio' che ottieni in un particolare giorno; il clima e' cio' che ti aspetti in media. Una giornata fredda non smentisce un clima che si riscalda: il clima e' lo schema di lungo periodo dietro il tempo quotidiano.",
        faq: [
          {
            q: "Per quanto tempo bisogna osservare per misurare il clima?",
            a: "Almeno 30 anni di dati e' il periodo standard per definire il clima di una regione.",
          },
          {
            q: "Una giornata fredda smentisce il cambiamento climatico?",
            a: "No. Il clima e' una media di decenni; una singola giornata fredda e' solo tempo a breve termine.",
          },
          {
            q: "Perche' il tempo e' difficile da prevedere con largo anticipo?",
            a: "L'atmosfera e' caotica, quindi piccole incertezze crescono rapidamente oltre circa una o due settimane.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "photosynthesis-vs-respiration",
    a: "Photosynthesis",
    b: "Cellular respiration",
    category: "science",
    emoji_a: "🌿",
    emoji_b: "🫁",
    content: {
      it: {
        title: "Fotosintesi contro Respirazione: flusso di energia",
        h1: "Fotosintesi contro Respirazione cellulare a confronto",
        description:
          "La fotosintesi immagazzina energia nel glucosio; la respirazione la rilascia. Confronta questi due processi biologici opposti.",
        intro:
          "Fotosintesi e respirazione cellulare sono processi speculari. Uno cattura energia dalla luce solare; l'altro la rilascia per le attivita della vita.",
        pros_a: [
          "Converte luce solare, anidride carbonica e acqua in glucosio",
          "Immagazzina energia in legami chimici e rilascia ossigeno",
          "Avviene nei cloroplasti di piante e alghe",
          "Richiede luce per procedere",
          "Rimuove anidride carbonica dall'atmosfera",
        ],
        pros_b: [
          "Scompone il glucosio per rilasciare energia utilizzabile",
          "Consuma ossigeno e produce anidride carbonica e acqua",
          "Avviene nei mitocondri di quasi tutte le cellule",
          "Avviene continuamente, alla luce o al buio",
          "Alimenta l'attivita cellulare producendo ATP",
        ],
        verdict:
          "Fotosintesi e respirazione sono opposti chimici che si bilanciano a vicenda. Le piante fanno entrambe; gli animali solo respirano. Insieme fanno circolare carbonio, ossigeno ed energia attraverso il mondo vivente.",
        faq: [
          {
            q: "Le piante svolgono entrambi i processi?",
            a: "Si. Le piante fanno la fotosintesi alla luce e respirano in continuazione per usare l'energia immagazzinata.",
          },
          {
            q: "Dove avviene ciascun processo?",
            a: "La fotosintesi avviene nei cloroplasti; la respirazione cellulare avviene nei mitocondri.",
          },
          {
            q: "Come sono collegati i due?",
            a: "I prodotti di uno sono i reagenti dell'altro, formando un ciclo continuo di energia e gas.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aerobic-vs-anaerobic-respiration",
    a: "Aerobic respiration",
    b: "Anaerobic respiration",
    category: "science",
    emoji_a: "🫁",
    emoji_b: "💪",
    content: {
      it: {
        title: "Respirazione aerobica contro anaerobica spiegata",
        h1: "Respirazione aerobica contro anaerobica: con o senza ossigeno",
        description:
          "La respirazione aerobica usa ossigeno; la respirazione anaerobica no. Confronta questi due modi in cui le cellule rilasciano energia.",
        intro:
          "Le cellule rilasciano energia dal cibo in due modi. Il fattore decisivo e' se l'ossigeno e' disponibile per completare il processo.",
        pros_a: [
          "Richiede ossigeno per rilasciare energia dal glucosio",
          "Produce una grande quantita di ATP per molecola di glucosio",
          "I prodotti finali sono anidride carbonica e acqua",
          "Il processo principale nella maggior parte delle cellule per la maggior parte del tempo",
          "Scompone completamente il glucosio per la massima resa",
        ],
        pros_b: [
          "Rilascia energia senza usare ossigeno",
          "Produce molto meno ATP per molecola di glucosio",
          "Produce acido lattico nei muscoli o etanolo nel lievito",
          "Usata durante esercizio intenso o in condizioni di basso ossigeno",
          "Una via alternativa piu' rapida ma meno efficiente",
        ],
        verdict:
          "La respirazione aerobica e' efficiente ed e' la modalita predefinita quando l'ossigeno e' presente. La respirazione anaerobica e' un rapido ripiego per scatti brevi e intensi quando l'ossigeno scarseggia, ma fornisce molta meno energia.",
        faq: [
          {
            q: "Perche' la respirazione anaerobica causa affaticamento muscolare?",
            a: "Produce acido lattico, che si accumula nei muscoli durante l'esercizio intenso e provoca una sensazione di bruciore.",
          },
          {
            q: "Quale produce piu' energia?",
            a: "La respirazione aerobica fornisce molto piu' ATP per glucosio perche' scompone completamente la molecola.",
          },
          {
            q: "Il lievito usa la respirazione anaerobica?",
            a: "Si. Il lievito fermenta lo zucchero in modo anaerobico, producendo etanolo e anidride carbonica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vein-vs-artery",
    a: "Vein",
    b: "Artery",
    category: "science",
    emoji_a: "🩸",
    emoji_b: "❤️",
    content: {
      it: {
        title: "Vena contro Arteria: vasi sanguigni a confronto",
        h1: "Vena contro Arteria: due tipi di vaso sanguigno",
        description:
          "Le arterie trasportano il sangue lontano dal cuore; le vene lo riportano indietro. Confronta questi due principali tipi di vaso sanguigno.",
        intro:
          "Il sistema circolatorio si basa su due tipi principali di vaso. Le loro strutture differiscono perche' gestiscono il sangue sotto pressioni molto diverse.",
        pros_a: [
          "Trasporta il sangue di nuovo verso il cuore",
          "Di solito trasporta sangue povero di ossigeno",
          "Ha pareti piu' sottili e una pressione interna piu' bassa",
          "Contiene valvole unidirezionali per impedire il reflusso",
          "Spesso visibile bluastra sotto la pelle",
        ],
        pros_b: [
          "Trasporta il sangue lontano dal cuore",
          "Di solito trasporta sangue ricco di ossigeno",
          "Ha pareti spesse, muscolari ed elastiche",
          "Sopporta l'alta pressione di ogni battito cardiaco",
          "Si trova piu' in profondita nel corpo e ha un polso forte",
        ],
        verdict:
          "Le arterie spingono il sangue ad alta pressione fuori dal cuore, quindi sono spesse ed elastiche. Le vene riportano il sangue a bassa pressione e usano le valvole per mantenerlo in movimento. I vasi polmonari invertono la solita regola dell'ossigeno.",
        faq: [
          {
            q: "Perche' le vene hanno le valvole ma le arterie no?",
            a: "Le vene trasportano sangue a bassa pressione, quindi le valvole gli impediscono di rifluire all'indietro, specialmente contro la gravita.",
          },
          {
            q: "Tutte le arterie trasportano sangue ricco di ossigeno?",
            a: "Quasi tutte lo fanno, ma l'arteria polmonare e' un'eccezione, trasportando sangue povero di ossigeno ai polmoni.",
          },
          {
            q: "Perche' le pareti delle arterie sono piu' spesse?",
            a: "Devono sopportare l'alta pressione del sangue pompato direttamente dal cuore a ogni battito.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "neuron-vs-glial-cell",
    a: "Neuron",
    b: "Glial cell",
    category: "science",
    emoji_a: "🧠",
    emoji_b: "🔬",
    content: {
      it: {
        title: "Neurone contro Cellula gliale: cellule del sistema nervoso",
        h1: "Neurone contro Cellula gliale: segnalatori e sostenitori",
        description:
          "I neuroni trasmettono segnali; le cellule gliali li sostengono e li proteggono. Confronta questi due tipi di cellule del sistema nervoso.",
        intro:
          "Il sistema nervoso e' costruito da due tipi principali di cellule. I neuroni si prendono i riflettori, ma le cellule gliali tengono in silenzio tutto in funzione.",
        pros_a: [
          "Trasmette segnali elettrici e chimici",
          "Ha dendriti, un corpo cellulare e un assone",
          "Comunica attraverso giunzioni chiamate sinapsi",
          "Generalmente non puo' dividersi una volta maturo",
          "Le cellule centrali per l'elaborazione delle informazioni del cervello",
        ],
        pros_b: [
          "Sostiene, protegge e nutre i neuroni",
          "Non trasmette di per se' impulsi nervosi",
          "Forma la guaina mielinica che velocizza i segnali",
          "Puo' dividersi e moltiplicarsi per tutta la vita",
          "Include astrociti, oligodendrociti e microglia",
        ],
        verdict:
          "I neuroni sono le cellule di segnalazione che portano pensieri e riflessi; le cellule gliali sono la squadra di supporto che li isola, li nutre e li difende. Il cervello ha bisogno che entrambi lavorino insieme per funzionare.",
        faq: [
          {
            q: "Le cellule gliali trasmettono segnali nervosi?",
            a: "No. Le cellule gliali sostengono i neuroni ma non trasportano di per se' impulsi nervosi.",
          },
          {
            q: "Cosa fa la guaina mielinica?",
            a: "Prodotta dalle cellule gliali, isola gli assoni e velocizza notevolmente la trasmissione dei segnali.",
          },
          {
            q: "Queste cellule possono rigenerarsi?",
            a: "Le cellule gliali possono dividersi per tutta la vita, mentre i neuroni maturi generalmente non possono.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "virus-vs-bacteria",
    a: "Virus",
    b: "Bacteria",
    category: "science",
    emoji_a: "🦠",
    emoji_b: "🧫",
    content: {
      it: {
        title: "Virus contro Batteri: due tipi di microbo",
        h1: "Virus contro Batteri: cellula viva contro particella inerte",
        description:
          "I batteri sono cellule singole viventi; i virus sono particelle inerti che hanno bisogno di un ospite. Confronta questi due tipi di microbo.",
        intro:
          "Virus e batteri causano entrambi malattie, ma sono fondamentalmente diversi. Uno e' un organismo vivente; l'altro a malapena conta come vivo.",
        pros_a: [
          "Non fatto di cellule; una particella di materiale genetico in un rivestimento",
          "Non puo' riprodursi senza dirottare una cellula ospite",
          "Molto piu' piccolo dei batteri",
          "Considerato non vivente al di fuori di un ospite",
          "Trattato con farmaci antivirali e prevenuto dai vaccini",
        ],
        pros_b: [
          "Un completo organismo unicellulare vivente",
          "Puo' riprodursi autonomamente dividendosi",
          "Piu' grande dei virus e visibile al microscopio ottico",
          "Molti sono innocui o addirittura utili per l'uomo",
          "Trattato con antibiotici quando causa un'infezione",
        ],
        verdict:
          "I batteri sono cellule viventi che possono prosperare in modo indipendente; i virus sono inerti finche' non invadono un ospite. Gli antibiotici uccidono i batteri ma non fanno nulla contro i virus, motivo per cui una diagnosi corretta conta.",
        faq: [
          {
            q: "Perche' gli antibiotici non funzionano sui virus?",
            a: "Gli antibiotici colpiscono strutture e processi delle cellule batteriche viventi, che i virus semplicemente non hanno.",
          },
          {
            q: "Tutti i batteri sono nocivi?",
            a: "No. La maggior parte dei batteri e' innocua e molti sono benefici, come quelli nel tuo intestino.",
          },
          {
            q: "I virus sono vivi?",
            a: "E' dibattuto. I virus non possono riprodursi da soli e sono di solito considerati non viventi al di fuori di un ospite.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "antigen-vs-antibody",
    a: "Antigen",
    b: "Antibody",
    category: "science",
    emoji_a: "🦠",
    emoji_b: "🛡️",
    content: {
      it: {
        title: "Antigene contro Anticorpo: la risposta immunitaria",
        h1: "Antigene contro Anticorpo: innesco e difensore",
        description:
          "Un antigene innesca una risposta immunitaria; un anticorpo e' la proteina che la combatte. Confronta questi due termini del sistema immunitario.",
        intro:
          "Antigeni e anticorpi lavorano come una coppia abbinata nel sistema immunitario. Uno e' la minaccia che il corpo rileva; l'altro e' la risposta su misura del corpo.",
        pros_a: [
          "Una molecola estranea che innesca una risposta immunitaria",
          "Spesso una proteina sulla superficie di un patogeno",
          "Riconosciuta come 'non-self' dal sistema immunitario",
          "Esempi includono parti di virus e batteri",
          "Ogni antigene ha una forma specifica che il corpo identifica",
        ],
        pros_b: [
          "Una proteina a forma di Y prodotta dal sistema immunitario",
          "Prodotto da globuli bianchi chiamati linfociti B",
          "Si lega specificamente a un antigene corrispondente",
          "Neutralizza o marca i patogeni per la distruzione",
          "Fornisce un'immunita duratura dopo infezione o vaccinazione",
        ],
        verdict:
          "Un antigene e' l'allarme: un marcatore estraneo che il corpo rileva. Un anticorpo e' la risposta costruita su misura che si aggancia a quell'antigene. I vaccini funzionano introducendo antigeni per addestrare la produzione di anticorpi.",
        faq: [
          {
            q: "Come fanno gli anticorpi a riconoscere gli antigeni?",
            a: "Ogni anticorpo ha un sito di legame sagomato per adattarsi a uno specifico antigene, come una serratura e una chiave.",
          },
          {
            q: "Quali cellule producono gli anticorpi?",
            a: "I linfociti B, un tipo di globulo bianco, producono e rilasciano anticorpi.",
          },
          {
            q: "Come usano gli antigeni i vaccini?",
            a: "I vaccini espongono il corpo ad antigeni innocui in modo che produca anticorpi prima di un'infezione reale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "vaccine-vs-antibiotic",
    a: "Vaccine",
    b: "Antibiotic",
    category: "science",
    emoji_a: "💉",
    emoji_b: "💊",
    content: {
      it: {
        title: "Vaccino contro Antibiotico: prevenire contro curare",
        h1: "Vaccino contro Antibiotico: due strumenti della medicina",
        description:
          "I vaccini prevengono l'infezione prima che accada; gli antibiotici curano le infezioni batteriche dopo che sono iniziate. Confronta questi strumenti.",
        intro:
          "Vaccini e antibiotici sono entrambi vitali per la medicina, ma agiscono ai due estremi opposti della malattia: uno ne impedisce l'inizio, l'altro la combatte una volta presente.",
        pros_a: [
          "Previene la malattia prima che l'infezione si verifichi",
          "Addestra il sistema immunitario usando antigeni innocui",
          "Funziona contro molti virus e alcuni batteri",
          "Fornisce una protezione duratura, a volte per tutta la vita",
          "Protegge le comunita attraverso l'immunita di gregge",
        ],
        pros_b: [
          "Cura le infezioni gia iniziate",
          "Uccide i batteri o impedisce loro di moltiplicarsi",
          "Funziona solo contro i batteri, mai contro i virus",
          "Non fornisce alcuna protezione duratura dopo la fine del trattamento",
          "L'uso eccessivo favorisce l'aumento della resistenza agli antibiotici",
        ],
        verdict:
          "I vaccini sono preventivi: preparano in anticipo la tua immunita. Gli antibiotici sono curativi: combattono un'infezione batterica in corso. Nessuno dei due sostituisce l'altro, e gli antibiotici non curano mai una malattia virale.",
        faq: [
          {
            q: "Gli antibiotici possono curare l'influenza?",
            a: "No. L'influenza e' causata da un virus, e gli antibiotici funzionano solo contro i batteri.",
          },
          {
            q: "I vaccini danno una protezione permanente?",
            a: "Spesso duratura, ma alcuni vaccini necessitano di richiami man mano che l'immunita gradualmente svanisce.",
          },
          {
            q: "Cos'e' la resistenza agli antibiotici?",
            a: "Quando i batteri si evolvono per sopravvivere agli antibiotici, rendendo le infezioni piu' difficili da curare nel tempo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hormone-vs-neurotransmitter",
    a: "Hormone",
    b: "Neurotransmitter",
    category: "science",
    emoji_a: "🧪",
    emoji_b: "⚡",
    content: {
      it: {
        title: "Ormone contro Neurotrasmettitore: messaggeri del corpo",
        h1: "Ormone contro Neurotrasmettitore: segnali lenti contro veloci",
        description:
          "Gli ormoni viaggiano nel sangue per effetti lenti su tutto il corpo; i neurotrasmettitori agiscono in fretta alle sinapsi. Confronta questi messaggeri.",
        intro:
          "Il corpo usa messaggeri chimici per coordinarsi. Ormoni e neurotrasmettitori lo fanno in due modi e su due scale temporali molto diversi.",
        pros_a: [
          "Un messaggero chimico rilasciato nel flusso sanguigno",
          "Prodotto dalle ghiandole del sistema endocrino",
          "Viaggia ampiamente e agisce su organi bersaglio distanti",
          "Gli effetti sono piu' lenti a iniziare ma durano piu' a lungo",
          "Esempi includono insulina, adrenalina ed estrogeno",
        ],
        pros_b: [
          "Un messaggero chimico rilasciato a una sinapsi",
          "Prodotto dai neuroni nel sistema nervoso",
          "Agisce localmente su una cellula vicina attraverso un minuscolo spazio",
          "Gli effetti sono molto rapidi ma di breve durata",
          "Esempi includono dopamina, serotonina e acetilcolina",
        ],
        verdict:
          "Gli ormoni sono il sistema di diffusione lento e a lungo raggio del corpo attraverso il sangue; i neurotrasmettitori sono messaggeri veloci e locali alle giunzioni nervose. Alcune sostanze, come l'adrenalina, possono agire da entrambi.",
        faq: [
          {
            q: "Quale agisce piu' rapidamente?",
            a: "I neurotrasmettitori agiscono in millisecondi alle sinapsi; gli ormoni sono piu' lenti perche' viaggiano nel sangue.",
          },
          {
            q: "Una sostanza chimica puo' essere entrambi?",
            a: "Si. L'adrenalina agisce come neurotrasmettitore nel sistema nervoso e come ormone nel sangue.",
          },
          {
            q: "Quale dura piu' a lungo?",
            a: "Gli effetti ormonali durano generalmente piu' a lungo, mentre gli effetti dei neurotrasmettitori sono brevi e rapidamente eliminati.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rem-vs-nrem-sleep",
    a: "REM sleep",
    b: "NREM sleep",
    category: "science",
    emoji_a: "💤",
    emoji_b: "😴",
    content: {
      it: {
        title: "Sonno REM contro NREM: le fasi del sonno",
        h1: "Sonno REM contro NREM: due fasi del riposo",
        description:
          "Il sonno REM e' attivo e pieno di sogni; il sonno NREM e' profondo e ristoratore. Confronta i due tipi principali di sonno.",
        intro:
          "Una notte di sonno alterna ciclicamente tra due tipi principali. Il sonno REM e NREM svolgono compiti diversi per il cervello e il corpo.",
        pros_a: [
          "Sonno a rapidi movimenti oculari, quando avvengono i sogni vividi",
          "L'attivita cerebrale assomiglia a quella della veglia",
          "I muscoli volontari del corpo sono temporaneamente paralizzati",
          "Importante per la memoria e l'elaborazione emotiva",
          "Costituisce una quota maggiore del sonno verso il mattino",
        ],
        pros_b: [
          "Sonno senza rapidi movimenti oculari, diviso in tre fasi",
          "Include il sonno ristoratore piu' profondo, a onde lente",
          "L'attivita cerebrale rallenta e diventa piu' regolare",
          "Importante per la riparazione fisica e la crescita",
          "Domina la prima meta della notte",
        ],
        verdict:
          "Il sonno NREM gestisce il profondo recupero fisico; il sonno REM sostiene memoria, apprendimento e salute emotiva. Una notte sana attraversa entrambi piu' volte, quindi ciascuno svolge un ruolo essenziale.",
        faq: [
          {
            q: "Quando avviene la maggior parte dei sogni?",
            a: "La maggior parte del sogno vivido avviene durante il sonno REM, quando l'attivita cerebrale e' elevata.",
          },
          {
            q: "Quale sonno e' piu' ristoratore per il corpo?",
            a: "Il sonno NREM profondo a onde lente e' la fase fisicamente piu' ristoratrice.",
          },
          {
            q: "Quanto dura un ciclo di sonno?",
            a: "Un ciclo completo attraverso NREM e REM dura all'incirca 90 minuti e si ripete durante la notte.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rods-vs-cones",
    a: "Rods",
    b: "Cones",
    category: "science",
    emoji_a: "🌙",
    emoji_b: "🌈",
    content: {
      it: {
        title: "Bastoncelli contro Coni: i recettori luminosi dell'occhio",
        h1: "Bastoncelli contro Coni: come vede l'occhio",
        description:
          "I bastoncelli rilevano la luce fioca e il movimento; i coni rilevano il colore e il dettaglio. Confronta le due cellule fotorecettrici della retina.",
        intro:
          "La tua retina ospita due tipi di cellule sensibili alla luce. Bastoncelli e coni dividono il lavoro della visione tra condizioni di luce fioca e intensa.",
        pros_a: [
          "Altamente sensibili a bassi livelli di luce",
          "Permettono la visione notturna e il rilevamento del movimento",
          "Non distinguono i colori, solo le tonalita di grigio",
          "Molto piu' numerosi, circa 120 milioni per occhio",
          "Concentrati nei bordi esterni della retina",
        ],
        pros_b: [
          "Funzionano al meglio in luce intensa",
          "Permettono la visione dei colori e il dettaglio nitido",
          "Esistono in tre tipi che percepiscono rosso, verde e blu",
          "Meno numerosi, circa 6 milioni per occhio",
          "Concentrati nella fovea centrale per una messa a fuoco nitida",
        ],
        verdict:
          "I bastoncelli ti danno una sensibile visione in bianco e nero al buio; i coni ti danno una visione colorata e dettagliata in luce intensa. Ecco perche' i colori sbiadiscono e il dettaglio si sfoca di notte, quando sono attivi solo i bastoncelli.",
        faq: [
          {
            q: "Perche' non vediamo bene i colori di notte?",
            a: "In luce fioca solo i bastoncelli sono attivi, e i bastoncelli non possono rilevare il colore: solo tonalita di grigio.",
          },
          {
            q: "Quali cellule danno la visione centrale nitida?",
            a: "I coni, densamente compattati nella fovea al centro della retina, forniscono il dettaglio piu' nitido.",
          },
          {
            q: "Cosa causa il daltonismo?",
            a: "Il daltonismo deriva di solito da tipi di coni mancanti o difettosi, spesso il rosso o il verde.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "genotype-vs-phenotype",
    a: "Genotype",
    b: "Phenotype",
    category: "science",
    emoji_a: "🧬",
    emoji_b: "👁️",
    content: {
      it: {
        title: "Genotipo contro Fenotipo: geni e caratteri",
        h1: "Genotipo contro Fenotipo: codice contro espressione",
        description:
          "Il genotipo e' il codice genetico di un organismo; il fenotipo sono i suoi caratteri osservabili. Confronta questi due concetti di genetica.",
        intro:
          "La genetica distingue tra le istruzioni che un organismo porta e i risultati visibili. Questa e' la differenza tra genotipo e fenotipo.",
        pros_a: [
          "L'insieme completo dei geni che un organismo porta",
          "Il codice genetico ereditato stesso",
          "Non puo' essere visto direttamente senza un test genetico",
          "Resta lo stesso per tutta la vita di un organismo",
          "Determina la gamma potenziale di caratteri",
        ],
        pros_b: [
          "I caratteri fisici e comportamentali osservabili",
          "L'espressione visibile del genotipo",
          "Puo' essere visto e misurato direttamente",
          "Puo' cambiare con l'ambiente, l'eta e lo stile di vita",
          "Risulta dal genotipo che interagisce con l'ambiente circostante",
        ],
        verdict:
          "Il genotipo e' il progetto genetico; il fenotipo e' il risultato finito che puoi osservare. Lo stesso genotipo puo' produrre fenotipi diversi a seconda dell'ambiente, quindi i geni fissano il potenziale, non il destino.",
        faq: [
          {
            q: "Due organismi possono condividere un genotipo ma differire nel fenotipo?",
            a: "Si. I gemelli identici condividono un genotipo eppure possono sviluppare differenze dovute ad ambiente e stile di vita.",
          },
          {
            q: "L'ambiente influisce sul genotipo?",
            a: "Non sul codice ereditato stesso, ma l'ambiente influenza fortemente quali caratteri compaiono nel fenotipo.",
          },
          {
            q: "Quale puoi osservare direttamente?",
            a: "Il fenotipo. Il genotipo richiede generalmente un test genetico per essere determinato.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "dominant-vs-recessive-allele",
    a: "Dominant allele",
    b: "Recessive allele",
    category: "science",
    emoji_a: "🔠",
    emoji_b: "🔡",
    content: {
      it: {
        title: "Allele dominante contro recessivo spiegato",
        h1: "Allele dominante contro recessivo: come si ereditano i caratteri",
        description:
          "Un allele dominante si manifesta anche con una sola copia; un allele recessivo ne necessita due. Confronta queste due forme di un gene.",
        intro:
          "I geni esistono in versioni alternative chiamate alleli. Se un carattere compare dipende dal fatto che il suo allele sia dominante o recessivo.",
        pros_a: [
          "Espresso anche quando e' presente una sola copia",
          "Maschera l'effetto di un allele partner recessivo",
          "Convenzionalmente scritto con una lettera maiuscola",
          "Si manifesta nel fenotipo di un individuo eterozigote",
          "Serve una sola copia perche' il carattere compaia",
        ],
        pros_b: [
          "Espresso solo quando sono presenti due copie",
          "Nascosto ogniqualvolta sia presente anche un allele dominante",
          "Convenzionalmente scritto con una lettera minuscola",
          "Puo' essere portato senza manifestarsi nel fenotipo",
          "Entrambi i genitori devono trasmetterlo perche' il carattere compaia",
        ],
        verdict:
          "Un allele dominante necessita di una sola copia per manifestarsi; un allele recessivo ne necessita due. I portatori possono trasmettere alleli recessivi nascosti, ed e' per questo che i caratteri recessivi possono saltare generazioni.",
        faq: [
          {
            q: "Cos'e' un portatore?",
            a: "Qualcuno con un allele recessivo e uno dominante che non manifesta il carattere recessivo ma puo' trasmetterlo.",
          },
          {
            q: "Perche' i caratteri recessivi saltano le generazioni?",
            a: "Restano nascosti nei portatori e ricompaiono solo quando due alleli recessivi si incontrano nella prole.",
          },
          {
            q: "Quanti alleli ha un individuo per gene?",
            a: "Due, uno ereditato da ciascun genitore, che insieme determinano il carattere.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endothermic-vs-exothermic-animals",
    a: "Endotherm",
    b: "Ectotherm",
    category: "science",
    emoji_a: "🐻",
    emoji_b: "🦎",
    content: {
      it: {
        title: "Endotermo contro Ectotermo: sangue caldo contro freddo",
        h1: "Endotermo contro Ectotermo: come gli animali restano caldi",
        description:
          "Gli endotermi generano il proprio calore corporeo; gli ectotermi si affidano all'ambiente. Confronta gli animali a sangue caldo e a sangue freddo.",
        intro:
          "Gli animali regolano la temperatura corporea in due modi principali. Alcuni producono il proprio calore internamente; altri dipendono dall'ambiente circostante.",
        pros_a: [
          "Genera calore corporeo attraverso il proprio metabolismo",
          "Mantiene una temperatura interna stabile",
          "Resta attivo in ambienti freddi",
          "Ha bisogno di molto piu' cibo per alimentare la produzione di calore",
          "Include mammiferi e uccelli",
        ],
        pros_b: [
          "Si affida a fonti esterne per il calore corporeo",
          "La temperatura corporea cambia con l'ambiente",
          "Si scalda al sole o cerca l'ombra per regolare il calore",
          "Ha bisogno di molto meno cibo perche' il calore non e' autoprodotto",
          "Include rettili, anfibi, pesci e insetti",
        ],
        verdict:
          "Gli endotermi pagano un alto costo alimentare per restare caldi e attivi ovunque, in qualsiasi momento. Gli ectotermi risparmiano energia ma dipendono dall'ambiente e rallentano al freddo. Ogni strategia si adatta a una nicchia diversa.",
        faq: [
          {
            q: "Perche' i rettili si scaldano al sole?",
            a: "Essendo ectotermi non possono produrre il proprio calore, quindi assorbono il tepore dalla luce solare per restare attivi.",
          },
          {
            q: "Perche' gli endotermi hanno bisogno di cosi' tanto cibo?",
            a: "Generare un calore corporeo costante attraverso il metabolismo richiede un apporto energetico ampio e regolare.",
          },
          {
            q: "Gli endotermi sono sempre piu' caldi?",
            a: "Non sempre, ma mantengono una temperatura interna stabile a prescindere dall'ambiente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "longitudinal-vs-transverse-wave",
    a: "Longitudinal wave",
    b: "Transverse wave",
    category: "science",
    emoji_a: "〰️",
    emoji_b: "🌊",
    content: {
      it: {
        title: "Onda longitudinale contro trasversale spiegata",
        h1: "Onda longitudinale contro trasversale: due tipi di onda",
        description:
          "Le onde longitudinali vibrano lungo la direzione di propagazione; le onde trasversali vibrano trasversalmente a essa. Confronta questi due tipi di onda.",
        intro:
          "Le onde trasportano energia in due modi fondamentali. La differenza e' la direzione in cui il mezzo vibra rispetto alla propagazione dell'onda.",
        pros_a: [
          "Il mezzo vibra parallelamente alla direzione dell'onda",
          "Forma regioni di compressione e rarefazione",
          "Il suono e' l'esempio piu' familiare",
          "Puo' propagarsi attraverso solidi, liquidi e gas",
          "Un moto di spinta-trazione lungo la linea di propagazione",
        ],
        pros_b: [
          "Il mezzo vibra ad angolo retto rispetto alla direzione dell'onda",
          "Forma creste e ventri",
          "La luce e le onde sulla superficie dell'acqua sono esempi",
          "La luce puo' propagarsi nel vuoto; i tipi meccanici no",
          "Un moto su e giu' o da un lato all'altro",
        ],
        verdict:
          "Le onde longitudinali comprimono e allungano il mezzo lungo il loro percorso, come il suono. Le onde trasversali lo scuotono lateralmente, come la luce o le increspature. Alcune onde, come le onde sismiche, esistono in entrambe le forme.",
        faq: [
          {
            q: "Il suono e' un'onda longitudinale o trasversale?",
            a: "Il suono e' un'onda longitudinale, che si propaga attraverso compressioni e rarefazioni del mezzo.",
          },
          {
            q: "La luce puo' propagarsi nello spazio vuoto?",
            a: "Si. La luce e' un'onda elettromagnetica trasversale che non ha bisogno di alcun mezzo e attraversa il vuoto.",
          },
          {
            q: "I terremoti producono entrambi i tipi di onda?",
            a: "Si. Le onde sismiche P sono longitudinali e le onde S sono trasversali.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "inertia-vs-momentum",
    a: "Inertia",
    b: "Momentum",
    category: "science",
    emoji_a: "🛑",
    emoji_b: "🎳",
    content: {
      it: {
        title: "Inerzia contro Quantita di moto: resistere e portare il moto",
        h1: "Inerzia contro Quantita di moto: due proprieta del moto",
        description:
          "L'inerzia e' la resistenza al cambiamento di moto; la quantita di moto e' la massa in movimento. Confronta queste due proprieta fondamentali.",
        intro:
          "Inerzia e quantita di moto riguardano entrambe massa e moto, ma descrivono cose diverse: una resiste al cambiamento, l'altra quantifica il movimento.",
        pros_a: [
          "La tendenza di un oggetto a resistere ai cambiamenti di moto",
          "Dipende solo dalla massa, non dalla velocita",
          "Una proprieta, non una grandezza con unita di misura",
          "Una massa maggiore significa maggiore inerzia",
          "Spiega perche' un oggetto pesante e' difficile da avviare o fermare",
        ],
        pros_b: [
          "Una misura del moto che un oggetto porta con se'",
          "Dipende sia dalla massa sia dalla velocita",
          "Una grandezza vettoriale misurata in chilogrammi-metri al secondo",
          "Nulla quando un oggetto e' in quiete",
          "Si conserva nelle collisioni all'interno di un sistema chiuso",
        ],
        verdict:
          "L'inerzia e' la resistenza che un oggetto ha al cambiamento del proprio moto; la quantita di moto e' quanto moto ha effettivamente. Un camion parcheggiato ha un'alta inerzia ma quantita di moto nulla finche' non inizia a muoversi.",
        faq: [
          {
            q: "Un oggetto in quiete ha quantita di moto?",
            a: "No. La quantita di moto dipende dalla velocita, quindi un oggetto fermo ha quantita di moto nulla nonostante abbia inerzia.",
          },
          {
            q: "Cos'e' la conservazione della quantita di moto?",
            a: "In un sistema chiuso la quantita di moto totale resta costante, anche attraverso le collisioni.",
          },
          {
            q: "L'inerzia dipende dalla rapidita?",
            a: "No. L'inerzia dipende solo dalla massa; la quantita di moto e' la grandezza che dipende anche dalla velocita.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atom-vs-molecule",
    a: "Atom",
    b: "Molecule",
    category: "science",
    emoji_a: "⚛️",
    emoji_b: "🔗",
    content: {
      it: {
        title: "Atomo contro Molecola: i mattoni della materia",
        h1: "Atomo contro Molecola: unita singola contro gruppo legato",
        description:
          "Un atomo e' la piu' piccola unita di un elemento; una molecola e' formata da due o piu' atomi legati insieme. Confronta queste basi della materia.",
        intro:
          "La materia e' costruita dagli atomi, e gli atomi possono unirsi in molecole. Comprendere la differenza e' il fondamento della scienza fisica.",
        pros_a: [
          "La piu' piccola unita di un elemento che mantiene la sua identita",
          "Fatto di protoni, neutroni ed elettroni",
          "Non puo' essere scomposto con mezzi chimici",
          "Identificato dal suo numero di protoni",
          "Il mattone di base di tutta la materia",
        ],
        pros_b: [
          "Due o piu' atomi legati insieme",
          "Tenuta insieme da legami chimici",
          "Puo' contenere atomi di un solo elemento o di diversi",
          "Ha proprieta diverse dai suoi singoli atomi",
          "Esempi includono acqua, ossigeno gassoso e glucosio",
        ],
        verdict:
          "Un atomo e' un singolo mattone; una molecola e' una struttura costruita da quei mattoni legati insieme. Due atomi di idrogeno e un atomo di ossigeno si legano in una molecola d'acqua.",
        faq: [
          {
            q: "Una molecola puo' essere fatta di un solo elemento?",
            a: "Si. L'ossigeno gassoso e' una molecola di due atomi di ossigeno legati insieme.",
          },
          {
            q: "Cosa tiene insieme una molecola?",
            a: "I legami chimici, formati quando gli atomi condividono o trasferiscono elettroni.",
          },
          {
            q: "Cosa e' piu' piccolo, un atomo o una molecola?",
            a: "Un atomo e' piu' piccolo; una molecola e' costruita da due o piu' atomi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "renewable-vs-nonrenewable-energy",
    a: "Renewable energy",
    b: "Non-renewable energy",
    category: "science",
    emoji_a: "♻️",
    emoji_b: "🛢️",
    content: {
      it: {
        title: "Energia rinnovabile contro non rinnovabile a confronto",
        h1: "Energia rinnovabile contro non rinnovabile: le fonti",
        description:
          "L'energia rinnovabile si rigenera naturalmente; l'energia non rinnovabile e' limitata. Confronta queste due categorie di fonte di energia.",
        intro:
          "Le fonti di energia si dividono in due campi. La domanda chiave e' se la fonte si rigenera piu' velocemente di quanto la usiamo.",
        pros_a: [
          "Si rigenera naturalmente e non si esaurira",
          "Include energia solare, eolica, idroelettrica e geotermica",
          "Produce poco o nessun gas serra durante l'uso",
          "Spesso si affida a condizioni naturali intermittenti",
          "Diventa piu' economica e piu' diffusa ogni anno",
        ],
        pros_b: [
          "Esiste in una quantita limitata che si esaurira col tempo",
          "Include carbone, petrolio, gas naturale e combustibile nucleare",
          "Fornisce un'alimentazione affidabile e su richiesta",
          "Bruciare combustibili fossili rilascia gas serra",
          "Ha impiegato milioni di anni per formarsi nel sottosuolo",
        ],
        verdict:
          "L'energia rinnovabile e' sostenibile e a basse emissioni ma puo' essere intermittente. L'energia non rinnovabile e' affidabile e densa ma limitata e spesso inquinante. Il passaggio globale favorisce le rinnovabili.",
        faq: [
          {
            q: "L'energia nucleare e' rinnovabile?",
            a: "No. L'energia nucleare usa l'uranio, un combustibile limitato, quindi e' classificata come non rinnovabile.",
          },
          {
            q: "Perche' l'energia rinnovabile e' a volte intermittente?",
            a: "Il solare e l'eolico dipendono dal meteo e dall'ora del giorno, quindi la produzione varia e puo' richiedere accumulo.",
          },
          {
            q: "Perche' i combustibili fossili hanno impiegato cosi' tanto a formarsi?",
            a: "Si sono formati da materia organica antica compressa nel sottosuolo per milioni di anni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "telescope-vs-microscope",
    a: "Telescope",
    b: "Microscope",
    category: "science",
    emoji_a: "🔭",
    emoji_b: "🔬",
    content: {
      it: {
        title: "Telescopio contro Microscopio: lontano contro piccolo",
        h1: "Telescopio contro Microscopio: due strumenti per vedere",
        description:
          "Un telescopio rivela gli oggetti distanti; un microscopio rivela quelli minuscoli. Confronta questi due strumenti scientifici essenziali.",
        intro:
          "Entrambi gli strumenti estendono la vista umana oltre i suoi limiti naturali, ma in direzioni opposte: uno verso l'esterno fino al cosmo, uno verso l'interno fino al microscopico.",
        pros_a: [
          "Ingrandisce oggetti distanti e lontani",
          "Raccoglie la debole luce di stelle e galassie",
          "Usato in astronomia per studiare l'universo",
          "Esiste in versioni a rifrazione e a riflessione",
          "Una grande apertura raccoglie piu' luce per gli oggetti piu' deboli",
        ],
        pros_b: [
          "Ingrandisce oggetti estremamente piccoli e vicini",
          "Rivela cellule, microbi e strutture minute",
          "Usato in biologia, medicina e scienza dei materiali",
          "Include i tipi a microscopio ottico ed elettronico",
          "Un ingrandimento maggiore rivela un dettaglio sempre piu' fine",
        ],
        verdict:
          "Un telescopio porta in vista il cosmo distante raccogliendo la debole luce; un microscopio mette a fuoco il mondo minuscolo ingrandendo gli oggetti vicini. Ciascuno ha aperto un intero ambito della scienza.",
        faq: [
          {
            q: "Un telescopio puo' funzionare come microscopio?",
            a: "No. Sono ottimizzati per compiti opposti: uno per la debole luce distante, uno per gli oggetti minuscoli e vicini.",
          },
          {
            q: "Perche' i grandi telescopi sono migliori?",
            a: "Un'apertura piu' grande raccoglie piu' luce, rivelando oggetti piu' deboli e piu' distanti.",
          },
          {
            q: "Cosa usa un microscopio elettronico al posto della luce?",
            a: "Usa un fascio di elettroni, permettendo un ingrandimento molto maggiore dei microscopi ottici.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "rotation-vs-revolution",
    a: "Rotation",
    b: "Revolution",
    category: "science",
    emoji_a: "🔄",
    emoji_b: "🪐",
    content: {
      it: {
        title: "Rotazione contro Rivoluzione: i due moti della Terra",
        h1: "Rotazione contro Rivoluzione: ruotare e orbitare",
        description:
          "La rotazione e' il ruotare su un asse; la rivoluzione e' l'orbitare attorno a un altro corpo. Confronta questi due moti dei pianeti.",
        intro:
          "La Terra e gli altri pianeti si muovono in due modi contemporaneamente. Un moto ci da' il giorno e la notte; l'altro ci da' l'anno.",
        pros_a: [
          "Un oggetto che ruota attorno al proprio asse interno",
          "La rotazione della Terra dura circa 24 ore",
          "Causa il ciclo del giorno e della notte",
          "Crea l'apparente movimento del Sole attraverso il cielo",
          "Spiega anche il rigonfiamento all'equatore di un pianeta",
        ],
        pros_b: [
          "Un oggetto che orbita attorno a un altro corpo",
          "La rivoluzione della Terra attorno al Sole dura circa 365 giorni",
          "Definisce la durata di un anno",
          "Combinata con l'inclinazione assiale, causa le stagioni",
          "Segue un percorso orbitale all'incirca ellittico",
        ],
        verdict:
          "La rotazione e' il giro quotidiano che porta giorno e notte; la rivoluzione e' l'orbita annuale che porta le stagioni. La Terra fa entrambe simultaneamente, ed e' per questo che abbiamo giorni, anni e stagioni.",
        faq: [
          {
            q: "Quale moto causa il giorno e la notte?",
            a: "La rotazione. Mentre la Terra ruota sul proprio asse, ogni lato fa a turno fronte al Sole.",
          },
          {
            q: "Cosa causa le stagioni?",
            a: "La rivoluzione della Terra attorno al Sole combinata con l'inclinazione del suo asse.",
          },
          {
            q: "Quanto dura una rivoluzione della Terra?",
            a: "Circa 365,25 giorni, ed e' per questo che aggiungiamo un giorno bisestile ogni quattro anni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solstice-vs-equinox",
    a: "Solstice",
    b: "Equinox",
    category: "science",
    emoji_a: "☀️",
    emoji_b: "⚖️",
    content: {
      it: {
        title: "Solstizio contro Equinozio: segnare le stagioni",
        h1: "Solstizio contro Equinozio: le date chiave dell'anno",
        description:
          "Un solstizio segna il giorno piu' lungo o piu' corto; un equinozio segna giorno e notte uguali. Confronta questi eventi astronomici.",
        intro:
          "Quattro date chiave strutturano l'anno. Solstizi ed equinozi segnano i punti di svolta delle stagioni della Terra.",
        pros_a: [
          "Segna il giorno piu' lungo o piu' corto dell'anno",
          "Si verifica attorno al 21 giugno e al 21 dicembre",
          "Il Sole raggiunge la sua posizione di mezzogiorno piu' alta o piu' bassa",
          "Inizia l'estate o l'inverno astronomico",
          "Causato dall'inclinazione assiale della Terra verso o lontano dal Sole",
        ],
        pros_b: [
          "Segna un giorno con luce e oscurita quasi uguali",
          "Si verifica attorno al 20 marzo e al 22 settembre",
          "Il Sole passa direttamente sopra l'equatore",
          "Inizia la primavera o l'autunno astronomico",
          "La durata della luce diurna e' all'incirca la stessa in tutto il mondo",
        ],
        verdict:
          "I solstizi sono gli estremi - i giorni piu' lunghi e piu' corti - mentre gli equinozi sono i punti di equilibrio con giorno e notte uguali. Insieme i quattro segnano l'inizio di ogni stagione astronomica.",
        faq: [
          {
            q: "Quanti solstizi ed equinozi ci sono ogni anno?",
            a: "Due di ciascuno: un solstizio d'estate e uno d'inverno, e un equinozio di primavera e uno d'autunno.",
          },
          {
            q: "Cosa causa il solstizio?",
            a: "L'asse inclinato della Terra punta al massimo verso o lontano dal Sole, dando il giorno piu' lungo o piu' corto.",
          },
          {
            q: "Giorno e notte sono esattamente uguali a un equinozio?",
            a: "Quasi, ma non esattamente, a causa della rifrazione atmosferica e delle dimensioni apparenti del Sole.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "tendon-vs-ligament",
    a: "Tendon",
    b: "Ligament",
    category: "science",
    emoji_a: "💪",
    emoji_b: "🦴",
    content: {
      it: {
        title: "Tendine contro Legamento: tessuto connettivo a confronto",
        h1: "Tendine contro Legamento: cosa collega cosa",
        description:
          "I tendini collegano il muscolo all'osso; i legamenti collegano l'osso all'osso. Confronta questi due tipi di tessuto connettivo.",
        intro:
          "Tendini e legamenti sono entrambi tessuti connettivi resistenti, ma collegano strutture diverse e svolgono compiti diversi nel corpo.",
        pros_a: [
          "Collega il muscolo all'osso",
          "Trasmette la forza di trazione dei muscoli per muovere le ossa",
          "Fatto di fibre di collagene dense e leggermente elastiche",
          "Esempi includono il tendine d'Achille",
          "Permette il movimento quando un muscolo si contrae",
        ],
        pros_b: [
          "Collega l'osso all'osso",
          "Stabilizza le articolazioni e limita il movimento eccessivo",
          "Fatto di fibre di collagene leggermente elastiche",
          "Esempi includono i legamenti del ginocchio come il LCA",
          "Tiene insieme lo scheletro a livello delle articolazioni",
        ],
        verdict:
          "I tendini trasformano la potenza muscolare in movimento collegando il muscolo all'osso; i legamenti mantengono stabili le articolazioni collegando osso a osso. Entrambi sono resistenti ma guariscono lentamente a causa del limitato apporto di sangue.",
        faq: [
          {
            q: "Quale collega il muscolo all'osso?",
            a: "I tendini. Trasmettono la forza di un muscolo che si contrae all'osso che muove.",
          },
          {
            q: "Perche' tendini e legamenti guariscono lentamente?",
            a: "Hanno un apporto di sangue relativamente scarso, quindi la riparazione richiede piu' tempo che per il muscolo.",
          },
          {
            q: "Cos'e' il LCA?",
            a: "Il legamento crociato anteriore, un legamento chiave del ginocchio che stabilizza l'articolazione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "weathering-vs-erosion",
    a: "Weathering",
    b: "Erosion",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "🏞️",
    content: {
      it: {
        title: "Disgregazione contro Erosione: plasmare il territorio",
        h1: "Disgregazione contro Erosione: scomporre contro trasportare via",
        description:
          "La disgregazione frantuma la roccia sul posto; l'erosione trasporta via il materiale frantumato. Confronta questi due processi geologici.",
        intro:
          "Disgregazione ed erosione plasmano insieme la superficie terrestre, ma sono fasi distinte: una scompone la roccia, l'altra la sposta.",
        pros_a: [
          "Scompone roccia e minerali sul posto",
          "Puo' essere fisica, chimica o biologica",
          "Non comporta il movimento del materiale",
          "Causata da acqua, ghiaccio, temperatura ed esseri viventi",
          "Il primo passo nella formazione del suolo",
        ],
        pros_b: [
          "Trasporta roccia e suolo frantumati in nuovi luoghi",
          "Realizzata da vento, acqua, ghiaccio e gravita",
          "Comporta sempre il movimento del materiale",
          "Scava valli, canyon e coste",
          "Deposita altrove il sedimento mentre rallenta",
        ],
        verdict:
          "La disgregazione scompone la roccia dove si trova; l'erosione trasporta poi via i pezzi sciolti. La disgregazione deve di solito avvenire prima per fornire il materiale che l'erosione trasporta.",
        faq: [
          {
            q: "La disgregazione comporta movimento?",
            a: "No. La disgregazione scompone la roccia sul posto; l'erosione e' il processo che la sposta.",
          },
          {
            q: "Quali sono i tipi di disgregazione?",
            a: "Fisica (frantumare), chimica (dissolvere) e biologica (causata dagli esseri viventi).",
          },
          {
            q: "Cos'e' la deposizione?",
            a: "Quando gli agenti erosivi rallentano e lasciano cadere il sedimento che stavano trasportando.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convex-vs-concave-lens",
    a: "Convex lens",
    b: "Concave lens",
    category: "science",
    emoji_a: "🔍",
    emoji_b: "👓",
    content: {
      it: {
        title: "Lente convessa contro concava: convergente contro divergente",
        h1: "Lente convessa contro concava: come le lenti piegano la luce",
        description:
          "Una lente convessa fa convergere la luce in un fuoco; una lente concava la disperde. Confronta questi due tipi di lente di base.",
        intro:
          "Le lenti piegano la luce per formare immagini. Se fanno convergere la luce o la disperdono dipende dalla loro forma.",
        pros_a: [
          "Piu' spessa al centro che ai bordi",
          "Fa convergere i raggi di luce paralleli in un punto focale",
          "Puo' formare immagini reali e proiettabili",
          "Usata in lenti d'ingrandimento e fotocamere",
          "Corregge l'ipermetropia negli occhiali",
        ],
        pros_b: [
          "Piu' sottile al centro che ai bordi",
          "Fa divergere verso l'esterno i raggi di luce paralleli",
          "Forma sempre un'immagine virtuale piu' piccola",
          "Usata negli spioncini e in alcuni strumenti ottici",
          "Corregge la miopia negli occhiali",
        ],
        verdict:
          "Una lente convessa raccoglie la luce in un fuoco e puo' ingrandire o proiettare immagini; una lente concava disperde la luce e rimpicciolisce le immagini. Gli occhiali usano la forma che corregge un dato problema della vista.",
        faq: [
          {
            q: "Quale lente ingrandisce?",
            a: "Una lente convessa ingrandisce, ed e' per questo che le lenti d'ingrandimento usano una forma convessa.",
          },
          {
            q: "Quale lente corregge la miopia?",
            a: "Una lente concava, perche' fa divergere la luce per riportare il punto focale sulla retina.",
          },
          {
            q: "Una lente concava puo' formare un'immagine reale?",
            a: "No. Una lente concava da sola produce sempre un'immagine virtuale piu' piccola e diritta.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "innate-vs-adaptive-immunity",
    a: "Innate immunity",
    b: "Adaptive immunity",
    category: "science",
    emoji_a: "🛡️",
    emoji_b: "🎯",
    content: {
      it: {
        title: "Immunita innata contro adattativa spiegata",
        h1: "Immunita innata contro adattativa: due linee di difesa",
        description:
          "L'immunita innata e' rapida e generale; l'immunita adattativa e' lenta ma specifica. Confronta i due sistemi di difesa del corpo.",
        intro:
          "Il sistema immunitario ha due rami cooperanti. Uno risponde immediatamente a qualsiasi minaccia; l'altro impara e prende di mira invasori specifici.",
        pros_a: [
          "Presente dalla nascita e pronta immediatamente",
          "Risponde rapidamente in pochi minuti o ore",
          "Agisce contro qualsiasi patogeno in modo generale",
          "Include pelle, muco e globuli bianchi come i fagociti",
          "Non ha alcuna memoria duratura delle infezioni passate",
        ],
        pros_b: [
          "Si sviluppa nell'arco di una vita attraverso l'esposizione",
          "Risponde piu' lentamente, in giorni all'inizio",
          "Prende di mira con precisione patogeni specifici",
          "Coinvolge linfociti B, linfociti T e anticorpi",
          "Costruisce una memoria duratura per risposte future piu' rapide",
        ],
        verdict:
          "L'immunita innata e' il primo soccorritore rapido e polivalente; l'immunita adattativa e' lo specialista piu' lento e preciso che ricorda. Lavorano insieme, e i vaccini addestrano il ramo adattativo.",
        faq: [
          {
            q: "Quale immunita ha memoria?",
            a: "L'immunita adattativa. Ricorda i patogeni passati per una seconda risposta piu' rapida e forte.",
          },
          {
            q: "Quale risponde piu' velocemente?",
            a: "L'immunita innata agisce in pochi minuti o ore; l'immunita adattativa impiega giorni per attivarsi pienamente.",
          },
          {
            q: "Come si inseriscono i vaccini?",
            a: "I vaccini addestrano l'immunita adattativa a costruire memoria contro un patogeno prima di un'esposizione reale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gymnosperm-vs-angiosperm",
    a: "Gymnosperm",
    b: "Angiosperm",
    category: "science",
    emoji_a: "🌲",
    emoji_b: "🌸",
    content: {
      it: {
        title: "Gimnosperma contro Angiosperma: gruppi di piante a confronto",
        h1: "Gimnosperma contro Angiosperma: due gruppi di piante a seme",
        description:
          "Le gimnosperme hanno semi nudi nei coni; le angiosperme hanno semi racchiusi nel frutto. Confronta questi due gruppi di piante a seme.",
        intro:
          "Le piante a seme si dividono in due gruppi principali. La differenza sta in come i loro semi sono protetti e in come si riproducono.",
        pros_a: [
          "Produce semi 'nudi' non racchiusi nel frutto",
          "Tipicamente porta i semi su coni",
          "Non produce fiori",
          "Spesso sempreverdi, come pini, abeti e abeti rossi",
          "Un gruppo piu' antico, dominante prima delle piante a fiore",
        ],
        pros_b: [
          "Produce semi racchiusi all'interno di un frutto",
          "Si riproduce usando fiori",
          "Il frutto aiuta a proteggere i semi e ne facilita la dispersione",
          "Include la maggior parte delle piante familiari, dalle erbe alle querce",
          "Il gruppo piu' grande e diversificato di piante terrestri",
        ],
        verdict:
          "Le gimnosperme sono le antiche portatrici di coni con semi esposti; le angiosperme sono le piante a fiore il cui frutto protegge i semi. Le angiosperme oggi dominano la maggior parte degli ecosistemi terrestri.",
        faq: [
          {
            q: "Le gimnosperme hanno fiori?",
            a: "No. Le gimnosperme si riproducono con coni anziche' fiori e hanno semi esposti.",
          },
          {
            q: "Quale vantaggio da' il frutto alle angiosperme?",
            a: "Il frutto protegge i semi e aiuta a disperderli, spesso tramite gli animali che lo mangiano.",
          },
          {
            q: "Quale gruppo e' piu' antico?",
            a: "Le gimnosperme sono il gruppo piu' antico; le angiosperme sono comparse piu' tardi e ora dominano.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "accuracy-vs-precision",
    a: "Accuracy",
    b: "Precision",
    category: "science",
    emoji_a: "🎯",
    emoji_b: "📍",
    content: {
      it: {
        title: "Esattezza contro Precisione: qualita della misurazione",
        h1: "Esattezza contro Precisione: due misure di buoni dati",
        description:
          "L'esattezza e' la vicinanza al valore vero; la precisione e' la coerenza tra le misurazioni. Confronta questi due termini scientifici.",
        intro:
          "In scienza, esattezza e precisione non sono la stessa cosa. Una misurazione puo' avere una senza l'altra, e i buoni dati hanno bisogno di entrambe.",
        pros_a: [
          "Quanto una misurazione e' vicina al valore vero",
          "Descrive la correttezza, non la coerenza",
          "Migliorata calibrando correttamente gli strumenti",
          "Un risultato esatto colpisce il vero valore bersaglio",
          "Puo' essere presente anche se i risultati sono dispersi",
        ],
        pros_b: [
          "Quanto misurazioni ripetute sono vicine tra loro",
          "Descrive la coerenza, non la correttezza",
          "Migliorata da una tecnica attenta e ripetibile",
          "Un insieme preciso di risultati e' strettamente raggruppato",
          "Puo' essere presente anche se tutti i risultati sono sbagliati",
        ],
        verdict:
          "L'esattezza riguarda il colpire il valore vero; la precisione riguarda la ripetibilita. Immagina un bersaglio: le freccette precise si raggruppano strettamente, quelle esatte cadono vicino al centro. Le buone misurazioni hanno bisogno di entrambe.",
        faq: [
          {
            q: "Una misurazione puo' essere precisa ma non esatta?",
            a: "Si. Letture ripetute possono concordare strettamente eppure essere tutte lontane dal valore vero.",
          },
          {
            q: "Quale descrive la vicinanza al valore vero?",
            a: "L'esattezza. La precisione descrive invece quanto sono coerenti le misurazioni ripetute.",
          },
          {
            q: "Come si migliora l'esattezza?",
            a: "Calibrando gli strumenti e rimuovendo gli errori sistematici che distorcono ogni lettura.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mass-vs-density",
    a: "Mass",
    b: "Density",
    category: "science",
    emoji_a: "⚖️",
    emoji_b: "🧱",
    content: {
      it: {
        title: "Massa contro Densita: quantita contro compattezza",
        h1: "Massa contro Densita: quanta contro quanto compattata",
        description:
          "La massa e' la quantita di materia; la densita e' la massa per unita di volume. Confronta queste due proprieta fisiche correlate.",
        intro:
          "Massa e densita riguardano entrambe la materia, ma la densita aggiunge un'idea cruciale: come quella materia e' compattata nello spazio.",
        pros_a: [
          "La quantita totale di materia in un oggetto",
          "Si misura in chilogrammi (kg)",
          "Non dipende dal volume dell'oggetto",
          "Resta la stessa a prescindere da forma o posizione",
          "Un oggetto piu' grande puo' avere piu' massa con lo stesso materiale",
        ],
        pros_b: [
          "Massa divisa per volume",
          "Si misura in chilogrammi per metro cubo",
          "Descrive quanto strettamente la materia e' compattata",
          "Determina se un oggetto galleggia o affonda",
          "Una proprieta del materiale, non delle dimensioni dell'oggetto",
        ],
        verdict:
          "La massa ti dice quanta materia e' presente; la densita ti dice quanto e' compatta. Un chilogrammo di piombo e un chilogrammo di piume hanno massa uguale ma densita e volumi molto diversi.",
        faq: [
          {
            q: "Perche' una nave d'acciaio galleggia?",
            a: "La sua densita complessiva, compreso lo scafo pieno d'aria, e' inferiore a quella dell'acqua.",
          },
          {
            q: "La densita dipende dalle dimensioni dell'oggetto?",
            a: "No. La densita e' una proprieta del materiale; un piccolo e un grande pezzo d'oro hanno la stessa densita.",
          },
          {
            q: "Come si calcola la densita?",
            a: "Si divide la massa di un oggetto per il suo volume.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "qualitative-vs-quantitative-data",
    a: "Qualitative data",
    b: "Quantitative data",
    category: "science",
    emoji_a: "📝",
    emoji_b: "🔢",
    content: {
      it: {
        title: "Dati qualitativi contro quantitativi a confronto",
        h1: "Dati qualitativi contro quantitativi: parole contro numeri",
        description:
          "I dati qualitativi descrivono qualita a parole; i dati quantitativi misurano quantita in numeri. Confronta questi due tipi di dati.",
        intro:
          "La ricerca raccoglie due tipi fondamentali di dati. Uno cattura descrizioni e categorie; l'altro cattura numeri misurabili.",
        pros_a: [
          "Descrive qualita, caratteristiche e categorie",
          "Registrati come parole, etichette o osservazioni",
          "Risponde alle domande sul perche' e sul come",
          "Esempi: colori, opinioni e texture",
          "Analizzati individuando temi e schemi",
        ],
        pros_b: [
          "Misura quantita e valori numerici",
          "Registrati come numeri che possono essere contati o misurati",
          "Risponde alle domande su quanto o quanti",
          "Esempi: altezza, temperatura e punteggi dei test",
          "Analizzati usando statistiche e calcoli",
        ],
        verdict:
          "I dati qualitativi catturano descrizioni ricche e motivazioni; i dati quantitativi catturano misurazioni precise. Una ricerca solida spesso combina entrambi: numeri per la scala, parole per il significato.",
        faq: [
          {
            q: "Il colore degli occhi e' qualitativo o quantitativo?",
            a: "Qualitativo. E' una categoria descrittiva piuttosto che un numero misurato.",
          },
          {
            q: "Quale tipo di dati usa le statistiche?",
            a: "I dati quantitativi, perche' consistono in numeri che possono essere analizzati matematicamente.",
          },
          {
            q: "Uno studio puo' usare entrambi?",
            a: "Si. La ricerca con metodi misti combina la profondita qualitativa con la misurazione quantitativa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "independent-vs-dependent-variable",
    a: "Independent variable",
    b: "Dependent variable",
    category: "science",
    emoji_a: "🎛️",
    emoji_b: "📊",
    content: {
      it: {
        title: "Variabile indipendente contro dipendente spiegata",
        h1: "Variabile indipendente contro dipendente negli esperimenti",
        description:
          "La variabile indipendente e' cio' che cambi; la variabile dipendente e' cio' che misuri. Confronta questi due termini sperimentali.",
        intro:
          "Ogni esperimento controllato ha due variabili chiave. Sapere quale e' quale e' essenziale per progettare e leggere uno studio.",
        pros_a: [
          "La variabile che il ricercatore cambia deliberatamente",
          "La presunta causa sottoposta a verifica",
          "Impostata o scelta prima che l'esperimento si svolga",
          "Tracciata sull'asse orizzontale di un grafico",
          "Di solito ce n'e' solo una in un esperimento controllato",
        ],
        pros_b: [
          "La variabile che il ricercatore misura come risultato",
          "Il presunto effetto o esito",
          "Cambia in risposta alla variabile indipendente",
          "Tracciata sull'asse verticale di un grafico",
          "Il suo valore dipende dalla variabile indipendente",
        ],
        verdict:
          "La variabile indipendente e' la causa che controlli; la variabile dipendente e' l'effetto che osservi. Mantenere costante tutto il resto ti permette di vedere come una influenzi davvero l'altra.",
        faq: [
          {
            q: "Quale variabile va sull'asse x?",
            a: "La variabile indipendente e' tracciata sull'asse orizzontale x; la variabile dipendente sull'asse y.",
          },
          {
            q: "Cos'e' una variabile controllata?",
            a: "Un fattore mantenuto costante in modo che non influisca sull'esito e non confonda i risultati.",
          },
          {
            q: "Quante variabili indipendenti dovrebbe avere un esperimento?",
            a: "Di solito una sola, cosicche' ogni cambiamento nel risultato possa essere attribuito a quell'unica causa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hypothesis-vs-theory",
    a: "Hypothesis",
    b: "Theory",
    category: "science",
    emoji_a: "❓",
    emoji_b: "📚",
    content: {
      it: {
        title: "Ipotesi contro Teoria: termini scientifici spiegati",
        h1: "Ipotesi contro Teoria: dall'idea alla scienza consolidata",
        description:
          "Un'ipotesi e' una previsione verificabile; una teoria e' una spiegazione ben supportata. Confronta questi due termini scientifici chiave.",
        intro:
          "Nel linguaggio quotidiano 'teoria' significa una congettura, ma in scienza significa l'opposto: una spiegazione robusta e verificata. L'ipotesi e' la congettura.",
        pros_a: [
          "Una previsione specifica e verificabile o spiegazione proposta",
          "Un passo iniziale nel metodo scientifico",
          "Formulata prima che gli esperimenti vengano svolti",
          "Puo' essere supportata o respinta dalle prove",
          "Spesso formulata come un'affermazione 'se-allora'",
        ],
        pros_b: [
          "Una spiegazione ampia supportata da prove estese",
          "Costruita da molte ipotesi ed esperimenti confermati",
          "E' sopravvissuta a ripetute verifiche rigorose",
          "Spiega un'ampia gamma di osservazioni correlate",
          "Esempi includono l'evoluzione e la tettonica delle placche",
        ],
        verdict:
          "Un'ipotesi e' una congettura di partenza da verificare; una teoria e' una potente spiegazione sostenuta da montagne di prove. Una teoria non e' 'solo una congettura': e' tra le idee piu' solide della scienza.",
        faq: [
          {
            q: "Un'ipotesi diventa una teoria?",
            a: "Non direttamente. Una teoria cresce da molte ipotesi verificate e da ampie prove confermate nel tempo.",
          },
          {
            q: "Una teoria scientifica e' solo una congettura?",
            a: "No. In scienza una teoria e' una spiegazione ben verificata e sostenuta da prove, molto piu' solida di una congettura.",
          },
          {
            q: "Una teoria puo' essere sbagliata?",
            a: "Le teorie possono essere affinate o sostituite se forti nuove prove le contraddicono, ma quelle consolidate raramente falliscono.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "elastic-vs-inelastic-collision",
    a: "Elastic collision",
    b: "Inelastic collision",
    category: "science",
    emoji_a: "🎱",
    emoji_b: "💥",
    content: {
      it: {
        title: "Collisione elastica contro anelastica spiegata",
        h1: "Collisione elastica contro anelastica: l'energia negli urti",
        description:
          "Una collisione elastica conserva l'energia cinetica; una anelastica no. Confronta questi due tipi di collisione.",
        intro:
          "Quando gli oggetti collidono, la quantita di moto si conserva sempre, ma l'energia cinetica puo' conservarsi o no. Quella distinzione definisce i due tipi di collisione.",
        pros_a: [
          "L'energia cinetica totale si conserva",
          "Anche la quantita di moto totale si conserva",
          "Gli oggetti rimbalzano separandosi senza incollarsi",
          "Un caso idealizzato, visto da vicino nelle particelle di gas",
          "Nessuna energia persa in calore, suono o deformazione",
        ],
        pros_b: [
          "L'energia cinetica non si conserva",
          "La quantita di moto totale si conserva comunque",
          "Gli oggetti possono deformarsi o incollarsi insieme",
          "L'energia viene persa in calore, suono e deformazione",
          "Una collisione perfettamente anelastica lascia gli oggetti uniti",
        ],
        verdict:
          "La quantita di moto si conserva in ogni collisione, ma solo le collisioni elastiche conservano anche l'energia cinetica. La maggior parte delle collisioni del mondo reale e' anelastica, perdendo energia in calore, suono e deformazione.",
        faq: [
          {
            q: "La quantita di moto si conserva nelle collisioni anelastiche?",
            a: "Si. La quantita di moto si conserva in tutte le collisioni; solo l'energia cinetica puo' andare persa.",
          },
          {
            q: "Le collisioni reali sono elastiche o anelastiche?",
            a: "La maggior parte delle collisioni quotidiane e' anelastica, perche' parte dell'energia si converte sempre in calore o suono.",
          },
          {
            q: "Cos'e' una collisione perfettamente anelastica?",
            a: "Una in cui gli oggetti che collidono si incollano insieme e si muovono successivamente come un'unica massa combinata.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "static-vs-kinetic-friction",
    a: "Static friction",
    b: "Kinetic friction",
    category: "science",
    emoji_a: "🛑",
    emoji_b: "🛷",
    content: {
      it: {
        title: "Attrito statico contro cinetico spiegato",
        h1: "Attrito statico contro cinetico: fermo contro in scorrimento",
        description:
          "L'attrito statico agisce su un oggetto fermo; l'attrito cinetico agisce su uno in scorrimento. Confronta questi due tipi di attrito.",
        intro:
          "L'attrito resiste al moto tra superfici, ma si comporta in modo diverso a seconda che un oggetto sia gia in movimento.",
        pros_a: [
          "Agisce su un oggetto che non si sta ancora muovendo",
          "Impedisce a un oggetto di iniziare a scivolare",
          "Si regola fino a un massimo per eguagliare la forza applicata",
          "E' generalmente piu' forte dell'attrito cinetico",
          "Deve essere superato prima che il moto possa iniziare",
        ],
        pros_b: [
          "Agisce su un oggetto che sta gia scivolando",
          "Si oppone al moto di un oggetto in movimento",
          "Ha un valore all'incirca costante durante lo scorrimento",
          "E' generalmente piu' debole dell'attrito statico",
          "Converte l'energia cinetica in calore",
        ],
        verdict:
          "L'attrito statico deve essere superato per mettere qualcosa in movimento, ed e' il tipo piu' forte. Una volta che lo scorrimento inizia, subentra l'attrito cinetico piu' debole, ed e' per questo che un oggetto bloccato si stacca improvvisamente con uno scatto.",
        faq: [
          {
            q: "Perche' e' piu' difficile far iniziare a scivolare un oggetto che mantenerlo in scorrimento?",
            a: "L'attrito statico e' piu' forte dell'attrito cinetico, quindi serve piu' forza per avviare il moto.",
          },
          {
            q: "L'attrito cinetico dipende dalla rapidita?",
            a: "Nella maggior parte dei casi quotidiani viene trattato come all'incirca costante a prescindere dalla rapidita di scorrimento.",
          },
          {
            q: "Cosa succede all'energia persa per attrito?",
            a: "Viene convertita principalmente in calore, riscaldando le superfici a contatto.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "stalactite-vs-stalagmite",
    a: "Stalactite",
    b: "Stalagmite",
    category: "science",
    emoji_a: "🔻",
    emoji_b: "🔺",
    content: {
      it: {
        title: "Stalattite contro Stalagmite: formazioni di grotte",
        h1: "Stalattite contro Stalagmite: pendente contro ascendente",
        description:
          "Le stalattiti pendono dai soffitti delle grotte; le stalagmiti si innalzano dai pavimenti delle grotte. Confronta queste due formazioni minerali di grotta.",
        intro:
          "Le grotte sviluppano notevoli formazioni minerali nel corso di migliaia di anni. Stalattiti e stalagmiti si formano dalla stessa acqua che gocciola, solo a estremita diverse.",
        pros_a: [
          "Pende verso il basso da un soffitto di grotta",
          "Si forma quando l'acqua ricca di minerali gocciola e lascia depositi",
          "Cresce lentamente, spesso una frazione di millimetro all'anno",
          "Di solito affusolata, come un ghiacciolo di roccia",
          "Il tipo cavo a 'cannuccia' e' il suo stadio piu' precoce",
        ],
        pros_b: [
          "Si innalza verso l'alto da un pavimento di grotta",
          "Si forma dove l'acqua che gocciola atterra e deposita minerali",
          "Cresce lentamente, accumulandosi nel corso dei millenni",
          "Di solito piu' spessa e piu' arrotondata in cima",
          "Spesso si trova direttamente sotto una stalattite corrispondente",
        ],
        verdict:
          "Le stalattiti pendono dal soffitto mentre le stalagmiti si accumulano dal pavimento. Con tempo sufficiente le due possono incontrarsi e fondersi in un'unica colonna di roccia.",
        faq: [
          {
            q: "Come posso ricordare quale e' quale?",
            a: "Stalattite ha una 't' come 'tetto'; stalagmite ha una doppia 'm' simile a 'suolo' nel senso del ground inglese.",
          },
          {
            q: "Quanto velocemente crescono?",
            a: "Molto lentamente, spesso meno di un millimetro all'anno, quindi le grandi formazioni hanno migliaia di anni.",
          },
          {
            q: "Cosa succede se si incontrano?",
            a: "Una stalattite e una stalagmite possono unirsi in una colonna continua di roccia minerale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gravity-vs-buoyancy",
    a: "Gravity",
    b: "Buoyancy",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🛟",
    content: {
      it: {
        title: "Gravita contro Spinta di galleggiamento: forze in giu' e in su'",
        h1: "Gravita contro Spinta di galleggiamento: le forze che fanno galleggiare le cose",
        description:
          "La gravita tira gli oggetti verso il basso; la spinta di galleggiamento li spinge verso l'alto in un fluido. Confronta queste due forze opposte.",
        intro:
          "Se un oggetto galleggia o affonda e' un tiro alla fune tra due forze. La gravita lo trascina giu'; la spinta di galleggiamento lo solleva.",
        pros_a: [
          "Una forza che attira gli oggetti verso il centro della Terra",
          "Agisce su tutti gli oggetti dotati di massa, ovunque",
          "Punta verso il basso, verso il pianeta",
          "Proporzionale alla massa di un oggetto",
          "Fa cadere gli oggetti e da' loro un peso",
        ],
        pros_b: [
          "Una forza verso l'alto esercitata da un fluido circostante",
          "Agisce solo sugli oggetti in un liquido o in un gas",
          "Pari al peso del fluido che l'oggetto sposta",
          "Punta verso l'alto, opponendosi alla gravita",
          "Determina se un oggetto galleggia o affonda",
        ],
        verdict:
          "La gravita tira sempre verso il basso; la spinta di galleggiamento spinge verso l'alto ogniqualvolta un oggetto si trova in un fluido. Se la spinta e' maggiore, l'oggetto galleggia; se vince la gravita, affonda. Il principio di Archimede collega le due.",
        faq: [
          {
            q: "Cos'e' il principio di Archimede?",
            a: "Afferma che la forza di galleggiamento e' uguale al peso del fluido che un oggetto sposta.",
          },
          {
            q: "Perche' alcuni oggetti galleggiano?",
            a: "Galleggiano quando la forza di galleggiamento verso l'alto e' grande almeno quanto la forza di gravita verso il basso.",
          },
          {
            q: "La spinta di galleggiamento agisce nell'aria?",
            a: "Si. L'aria e' un fluido, ed e' per questo che i palloncini a elio salgono quando la spinta supera la gravita.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "frequency-vs-amplitude",
    a: "Frequency",
    b: "Amplitude",
    category: "science",
    emoji_a: "📶",
    emoji_b: "📏",
    content: {
      it: {
        title: "Frequenza contro Ampiezza: descrivere le onde",
        h1: "Frequenza contro Ampiezza: due proprieta delle onde",
        description:
          "La frequenza e' quanto spesso un'onda si ripete; l'ampiezza e' quanto e' grande la sua vibrazione. Confronta queste due proprieta delle onde.",
        intro:
          "Ogni onda puo' essere descritta da diverse proprieta. Frequenza e ampiezza sono due delle piu' importanti, e controllano cose molto diverse.",
        pros_a: [
          "Quanti cicli d'onda passano un punto ogni secondo",
          "Si misura in hertz (Hz)",
          "Determina l'altezza di un suono o il colore di una luce",
          "Una frequenza piu' alta significa una lunghezza d'onda piu' corta",
          "Non cambia man mano che un'onda perde energia",
        ],
        pros_b: [
          "Lo spostamento massimo di un'onda dalla sua posizione di riposo",
          "Si misura come un'altezza o una distanza",
          "Determina l'intensita di un suono o la luminosita di una luce",
          "Un'ampiezza maggiore significa che l'onda trasporta piu' energia",
          "Diminuisce man mano che un'onda si propaga o perde energia",
        ],
        verdict:
          "La frequenza fissa l'altezza o il colore di un'onda; l'ampiezza fissa la sua intensita o luminosita. Sono indipendenti: un suono puo' essere acuto e silenzioso, oppure grave e forte.",
        faq: [
          {
            q: "Quale proprieta controlla l'intensita di un suono?",
            a: "L'ampiezza. Un'ampiezza maggiore trasporta piu' energia e produce un suono piu' forte.",
          },
          {
            q: "Cosa determina la frequenza per la luce?",
            a: "Determina il colore: la luce a frequenza piu' alta appare piu' blu, quella a frequenza piu' bassa appare piu' rossa.",
          },
          {
            q: "Frequenza e ampiezza sono correlate?",
            a: "No. Sono proprieta indipendenti; una puo' cambiare senza influire sull'altra.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alpha-vs-beta-decay",
    a: "Alpha decay",
    b: "Beta decay",
    category: "science",
    emoji_a: "☢️",
    emoji_b: "⚡",
    content: {
      it: {
        title: "Decadimento alfa contro beta: tipi di decadimento radioattivo",
        h1: "Decadimento alfa contro beta: due modi in cui i nuclei si scompongono",
        description:
          "Il decadimento alfa emette un pesante nucleo di elio; il decadimento beta emette un elettrone veloce. Confronta questi due modi di decadimento radioattivo.",
        intro:
          "I nuclei atomici instabili liberano energia attraverso il decadimento radioattivo. Il decadimento alfa e beta sono due dei modi principali in cui lo fanno.",
        pros_a: [
          "Emette una particella alfa, un nucleo di elio",
          "Il numero atomico diminuisce di due",
          "Produce una particella relativamente grande, lenta e pesante",
          "Fermata facilmente, persino da un foglio di carta",
          "Comune negli elementi molto pesanti come l'uranio",
        ],
        pros_b: [
          "Emette una particella beta, un elettrone che si muove veloce",
          "Il numero atomico cambia di uno",
          "Produce una particella piccola, leggera e veloce",
          "Piu' penetrante, necessita di alluminio per essere fermata",
          "Avviene quando un neutrone si converte in un protone",
        ],
        verdict:
          "Il decadimento alfa scaglia fuori un pesante nucleo di elio ed e' poco penetrante; il decadimento beta espelle un elettrone veloce e penetra piu' a fondo. Entrambi spostano un nucleo instabile verso la stabilita.",
        faq: [
          {
            q: "Quale radiazione e' piu' penetrante?",
            a: "Le particelle beta penetrano piu' a fondo delle particelle alfa, anche se entrambe sono fermate da una schermatura modesta.",
          },
          {
            q: "Di cosa e' fatta una particella alfa?",
            a: "Di due protoni e due neutroni, essenzialmente un nucleo di elio.",
          },
          {
            q: "Cosa succede al numero atomico nel decadimento beta?",
            a: "Aumenta di uno man mano che un neutrone si converte in un protone.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-belt-vs-kuiper-belt",
    a: "Asteroid belt",
    b: "Kuiper Belt",
    category: "science",
    emoji_a: "🪨",
    emoji_b: "🧊",
    content: {
      it: {
        title: "Fascia degli asteroidi contro Fascia di Kuiper a confronto",
        h1: "Fascia degli asteroidi contro Fascia di Kuiper: due anelli del sistema solare",
        description:
          "La fascia degli asteroidi e' un anello roccioso vicino a Marte; la fascia di Kuiper e' un anello ghiacciato oltre Nettuno. Confronta queste due regioni.",
        intro:
          "Il nostro sistema solare ha due grandi anelli di materiale residuo. Si trovano a distanze molto diverse e sono fatti di materiali diversi.",
        pros_a: [
          "Situata tra le orbite di Marte e Giove",
          "Fatta principalmente di asteroidi rocciosi e metallici",
          "Formatasi nel sistema solare interno piu' caldo",
          "Contiene il pianeta nano Cerere",
          "Molto piu' vicina al Sole e piu' calda",
        ],
        pros_b: [
          "Situata oltre l'orbita di Nettuno",
          "Fatta principalmente di corpi ghiacciati e volatili congelati",
          "Formatasi nel freddo sistema solare esterno",
          "Contiene pianeti nani tra cui Plutone",
          "Lontana dal Sole ed estremamente fredda",
        ],
        verdict:
          "La fascia degli asteroidi e' un anello roccioso vicino; la fascia di Kuiper e' un lontano anello ghiacciato ben oltre Nettuno. Entrambe sono residui della formazione del sistema solare che non hanno mai costruito un pianeta.",
        faq: [
          {
            q: "Dove si trova Plutone?",
            a: "Plutone orbita all'interno della fascia di Kuiper, la regione ghiacciata oltre Nettuno.",
          },
          {
            q: "Perche' la fascia di Kuiper e' ghiacciata e la fascia degli asteroidi rocciosa?",
            a: "La fascia di Kuiper si e' formata lontano dal Sole dove fa abbastanza freddo perche' i ghiacci restino congelati.",
          },
          {
            q: "La fascia degli asteroidi e' densamente affollata?",
            a: "No. Nonostante i film, gli asteroidi sono molto distanziati, con un vasto spazio vuoto tra loro.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "spring-tide-vs-neap-tide",
    a: "Spring tide",
    b: "Neap tide",
    category: "science",
    emoji_a: "🌊",
    emoji_b: "🌗",
    content: {
      it: {
        title: "Marea sigiziale contro marea di quadratura spiegata",
        h1: "Marea sigiziale contro marea di quadratura: l'ampiezza del mare",
        description:
          "Le maree sigiziali hanno l'ampiezza maggiore; le maree di quadratura hanno quella minore. Confronta questi due estremi delle maree.",
        intro:
          "Le maree cambiano intensita nell'arco del mese man mano che il Sole e la Luna spostano posizione. Le maree sigiziali e di quadratura sono i due estremi di questo ciclo.",
        pros_a: [
          "Produce la maggiore differenza tra alta e bassa marea",
          "Si verifica quando Sole, Terra e Luna sono allineati",
          "Avviene attorno alla luna nuova e alla luna piena",
          "Le attrazioni del Sole e della Luna si sommano",
          "Porta le alte maree piu' alte e le basse maree piu' basse",
        ],
        pros_b: [
          "Produce la minore differenza tra alta e bassa marea",
          "Si verifica quando il Sole e la Luna sono ad angolo retto",
          "Avviene attorno al primo e all'ultimo quarto di luna",
          "L'attrazione del Sole annulla in parte quella della Luna",
          "Porta alte e basse maree piu' moderate",
        ],
        verdict:
          "Le maree sigiziali sono le piu' forti, con l'ampiezza maggiore, quando Sole e Luna si allineano. Le maree di quadratura sono le piu' deboli, con l'ampiezza minore, quando tirano ad angolo retto. Il ciclo si ripete due volte al mese.",
        faq: [
          {
            q: "Le maree sigiziali avvengono solo in primavera?",
            a: "No. Il termine inglese 'spring' qui significa che la marea sgorga; si verificano due volte al mese tutto l'anno.",
          },
          {
            q: "Quando avvengono le maree di quadratura?",
            a: "Attorno al primo e all'ultimo quarto di luna, quando il Sole e la Luna tirano ad angolo retto.",
          },
          {
            q: "Cosa causa le maree in generale?",
            a: "Principalmente la gravita della Luna, con un contributo minore della gravita del Sole.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convergent-vs-divergent-boundary",
    a: "Convergent boundary",
    b: "Divergent boundary",
    category: "science",
    emoji_a: "🏔️",
    emoji_b: "🌋",
    content: {
      it: {
        title: "Margini di placca convergenti contro divergenti",
        h1: "Margine convergente contro divergente: placche che si incontrano e si separano",
        description:
          "I margini convergenti spingono insieme le placche; i margini divergenti le allontanano. Confronta questi due tipi di margine di placca.",
        intro:
          "Le placche tettoniche interagiscono ai loro bordi in modi diversi. Due dei principali tipi di margine coinvolgono placche che collidono o si separano.",
        pros_a: [
          "Due placche tettoniche si muovono l'una verso l'altra",
          "Puo' forzare una placca sotto un'altra in subduzione",
          "Costruisce catene montuose e profonde fosse oceaniche",
          "Collegato a potenti terremoti e vulcani",
          "Esempi includono l'Himalaya e le Ande",
        ],
        pros_b: [
          "Due placche tettoniche si allontanano l'una dall'altra",
          "Il magma risale per riempire lo spazio che si allarga",
          "Crea nuova crosta man mano che le placche si separano",
          "Forma dorsali medio-oceaniche e valli di rift",
          "Esempi includono la dorsale medio-atlantica",
        ],
        verdict:
          "I margini convergenti distruggono o accartocciano la crosta mentre le placche collidono, costruendo montagne; i margini divergenti creano nuova crosta mentre le placche si allontanano. Entrambi sono guidati dal lento rimescolamento sotto la superficie.",
        faq: [
          {
            q: "Quale margine costruisce le montagne?",
            a: "I margini convergenti, dove le placche che collidono accartocciano la crosta verso l'alto in catene montuose.",
          },
          {
            q: "Cosa si forma a un margine divergente?",
            a: "Nuova crosta si forma man mano che il magma risale nello spazio che si allarga, creando dorsali medio-oceaniche e valli di rift.",
          },
          {
            q: "Qual e' il terzo tipo principale di margine?",
            a: "Un margine trasforme, dove le placche scorrono orizzontalmente l'una accanto all'altra.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conductor-vs-insulator",
    a: "Conductor",
    b: "Insulator",
    category: "science",
    emoji_a: "🔌",
    emoji_b: "🧤",
    content: {
      it: {
        title: "Conduttore contro Isolante: materiali elettrici",
        h1: "Conduttore contro Isolante: lasciar scorrere la carica oppure no",
        description:
          "I conduttori lasciano scorrere facilmente la carica elettrica; gli isolanti la bloccano. Confronta queste due classi di materiale.",
        intro:
          "I materiali rispondono in modo molto diverso all'elettricita. Alcuni lasciano muovere liberamente la carica; altri vi resistono quasi completamente.",
        pros_a: [
          "Permette alla carica elettrica di scorrere facilmente",
          "Ha molti elettroni liberi che possono muoversi",
          "Esempi includono rame, argento e alluminio",
          "Usato per fili e contatti elettrici",
          "Generalmente conduce bene anche il calore",
        ],
        pros_b: [
          "Resiste fortemente al flusso della carica elettrica",
          "Ha pochissimi elettroni liberi",
          "Esempi includono gomma, vetro e plastica",
          "Usato per rivestire i fili e proteggere dalle scariche",
          "Generalmente anche cattivo conduttore di calore",
        ],
        verdict:
          "I conduttori trasportano l'elettricita e sono usati per i fili; gli isolanti la bloccano e sono usati per i rivestimenti di sicurezza. La maggior parte dei cavi elettrici combina entrambi: un nucleo conduttore dentro una guaina isolante.",
        faq: [
          {
            q: "Perche' i fili sono fatti di rame?",
            a: "Il rame e' un eccellente conduttore a bassa resistenza, che trasporta la corrente in modo efficiente ed economico.",
          },
          {
            q: "Perche' la gomma viene usata per rivestire i fili?",
            a: "La gomma e' un isolante, quindi impedisce alla corrente di fuoriuscire e protegge le persone dalle scariche elettriche.",
          },
          {
            q: "Cos'e' un semiconduttore?",
            a: "Un materiale a meta tra i due, che conduce in alcune condizioni; e' la base dell'elettronica moderna.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "light-year-vs-astronomical-unit",
    a: "Light-year",
    b: "Astronomical unit",
    category: "science",
    emoji_a: "🌟",
    emoji_b: "📏",
    content: {
      it: {
        title: "Anno luce contro Unita astronomica a confronto",
        h1: "Anno luce contro Unita astronomica: distanze cosmiche",
        description:
          "Un anno luce misura le vaste distanze interstellari; un'unita astronomica misura all'interno del sistema solare. Confronta entrambe le unita.",
        intro:
          "Lo spazio e' cosi' vasto che le unita quotidiane falliscono. Gli astronomi usano due unita di distanza speciali per diverse scale del cosmo.",
        pros_a: [
          "La distanza che la luce percorre in un anno",
          "Circa 9460 miliardi di chilometri",
          "Usato per misurare le distanze tra stelle e galassie",
          "Un'unita enorme adatta alle scale interstellari",
          "La stella piu' vicina e' a circa quattro anni luce di distanza",
        ],
        pros_b: [
          "La distanza media dalla Terra al Sole",
          "Circa 150 milioni di chilometri",
          "Usata per misurare le distanze all'interno del sistema solare",
          "Un'unita piu' piccola adatta alle scale planetarie",
          "Nettuno orbita all'incirca a 30 unita astronomiche di distanza",
        ],
        verdict:
          "L'unita astronomica gestisce le distanze all'interno del nostro sistema solare; l'anno luce gestisce gli spazi molto piu' grandi tra le stelle. Un anno luce equivale a circa 63.000 unita astronomiche.",
        faq: [
          {
            q: "Un anno luce e' un'unita di tempo?",
            a: "No. Nonostante la parola 'anno', un anno luce misura una distanza: quanto lontano viaggia la luce in un anno.",
          },
          {
            q: "Quale unita e' piu' grande?",
            a: "L'anno luce e' enormemente piu' grande, pari a circa 63.000 unita astronomiche.",
          },
          {
            q: "Quale unita usano gli astronomi oltre gli anni luce?",
            a: "Il parsec, pari a circa 3,26 anni luce, e' comune per le distanze molto grandi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mitochondria-vs-chloroplast",
    a: "Mitochondria",
    b: "Chloroplast",
    category: "science",
    emoji_a: "🔋",
    emoji_b: "🌿",
    content: {
      it: {
        title: "Mitocondri contro Cloroplasto: organuli cellulari",
        h1: "Mitocondri contro Cloroplasto: due organuli dell'energia",
        description:
          "I mitocondri liberano energia dal cibo; i cloroplasti catturano energia dalla luce. Confronta questi due organuli cellulari.",
        intro:
          "Due organuli gestiscono l'energia di una cellula. Trasformano entrambi l'energia, ma uno la libera mentre l'altro la cattura.",
        pros_a: [
          "Libera energia scomponendo il glucosio",
          "Svolge la respirazione cellulare",
          "Si trova in quasi tutte le cellule eucariote",
          "Produce ATP, la moneta energetica della cellula",
          "Spesso chiamato la centrale elettrica della cellula",
        ],
        pros_b: [
          "Cattura l'energia luminosa e la immagazzina nel glucosio",
          "Svolge la fotosintesi",
          "Si trova nelle cellule vegetali e nelle alghe, non nelle cellule animali",
          "Contiene il pigmento verde clorofilla",
          "Rilascia ossigeno come sottoprodotto",
        ],
        verdict:
          "I cloroplasti catturano la luce solare per costruire glucosio; i mitocondri scompongono il glucosio per liberare energia utilizzabile. Le cellule vegetali hanno entrambi, mentre le cellule animali si affidano solo ai mitocondri.",
        faq: [
          {
            q: "Le cellule animali hanno cloroplasti?",
            a: "No. I cloroplasti si trovano solo nelle cellule vegetali e nelle alghe, non nelle cellule animali.",
          },
          {
            q: "Come sono collegati questi organuli?",
            a: "I cloroplasti producono glucosio e i mitocondri lo scompongono, quindi i loro processi sono complementari.",
          },
          {
            q: "Perche' entrambi hanno il proprio DNA?",
            a: "La teoria endosimbiotica afferma che entrambi si sono evoluti da batteri un tempo a vita libera, conservando parte del proprio DNA.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "element-vs-compound",
    a: "Element",
    b: "Compound",
    category: "science",
    emoji_a: "🔤",
    emoji_b: "🧩",
    content: {
      it: {
        title: "Elemento contro Composto: sostanze pure a confronto",
        h1: "Elemento contro Composto: un tipo di atomo o molti",
        description:
          "Un elemento contiene un solo tipo di atomo; un composto combina chimicamente due o piu' elementi. Confronta queste sostanze pure.",
        intro:
          "Le sostanze pure esistono in due tipi. La differenza e' se la sostanza e' costruita da un tipo di atomo o da diversi uniti insieme.",
        pros_a: [
          "Fatto di un solo tipo di atomo",
          "Non puo' essere scomposto in sostanze piu' semplici per via chimica",
          "Ciascuno e' elencato nella tavola periodica",
          "Esempi includono ossigeno, oro e idrogeno",
          "I mattoni fondamentali di tutta la materia",
        ],
        pros_b: [
          "Fatto di due o piu' elementi legati chimicamente",
          "Puo' essere scomposto nei suoi elementi mediante reazioni chimiche",
          "Ha proprieta diverse dai suoi elementi componenti",
          "Esempi includono acqua, sale e anidride carbonica",
          "Ha un rapporto fisso di elementi, indicato da una formula",
        ],
        verdict:
          "Un elemento e' la sostanza pura piu' semplice, fatta di un tipo di atomo; un composto unisce elementi in rapporti fissi. L'acqua, per esempio, e' un composto degli elementi idrogeno e ossigeno.",
        faq: [
          {
            q: "L'acqua e' un elemento o un composto?",
            a: "L'acqua e' un composto, fatto degli elementi idrogeno e ossigeno legati chimicamente insieme.",
          },
          {
            q: "Un composto puo' essere separato in elementi?",
            a: "Si, ma solo mediante reazioni chimiche, non con metodi fisici come la filtrazione.",
          },
          {
            q: "Quanti elementi ci sono?",
            a: "Sono noti circa 118 elementi, ciascuno con il proprio posto nella tavola periodica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "diffusion-vs-osmosis",
    a: "Diffusion",
    b: "Osmosis",
    category: "science",
    emoji_a: "💨",
    emoji_b: "💧",
    content: {
      it: {
        title: "Diffusione contro Osmosi: movimento nelle cellule",
        h1: "Diffusione contro Osmosi: come si propagano le sostanze",
        description:
          "La diffusione propaga qualsiasi particella dall'alta alla bassa concentrazione; l'osmosi e' la diffusione dell'acqua. Confronta entrambi i processi.",
        intro:
          "Le cellule spostano le sostanze passivamente senza usare energia. Diffusione e osmosi sono due modi correlati in cui questo avviene.",
        pros_a: [
          "La propagazione di particelle dall'alta alla bassa concentrazione",
          "Puo' coinvolgere gas, liquidi o soluti disciolti",
          "Non richiede una membrana",
          "Continua finche' la concentrazione e' uniforme",
          "Un processo passivo che non ha bisogno di energia cellulare",
        ],
        pros_b: [
          "Un tipo speciale di diffusione che coinvolge solo l'acqua",
          "L'acqua si muove attraverso una membrana parzialmente permeabile",
          "L'acqua scorre verso la maggiore concentrazione di soluto",
          "Richiede sempre una membrana semipermeabile",
          "Anch'esso un processo passivo che non ha bisogno di energia cellulare",
        ],
        verdict:
          "L'osmosi e' un caso specifico di diffusione: il movimento dell'acqua attraverso una membrana. La diffusione e' il processo piu' ampio che puo' muovere qualsiasi particella, con o senza una membrana. Entrambi sono passivi.",
        faq: [
          {
            q: "L'osmosi e' un tipo di diffusione?",
            a: "Si. L'osmosi e' la diffusione dell'acqua nello specifico, attraverso una membrana parzialmente permeabile.",
          },
          {
            q: "Questi processi hanno bisogno di energia?",
            a: "No. Sia la diffusione sia l'osmosi sono passive e non hanno bisogno di energia da parte della cellula.",
          },
          {
            q: "In quale direzione si muove l'acqua nell'osmosi?",
            a: "L'acqua si muove da una regione di minore concentrazione di soluto verso una maggiore concentrazione di soluto.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "asteroid-impact-vs-volcanic-eruption",
    a: "Asteroid impact",
    b: "Volcanic eruption",
    category: "science",
    emoji_a: "☄️",
    emoji_b: "🌋",
    content: {
      it: {
        title: "Impatto di asteroide contro Eruzione vulcanica a confronto",
        h1: "Impatto di asteroide contro Eruzione vulcanica: eventi catastrofici",
        description:
          "Un impatto di asteroide colpisce dallo spazio; un'eruzione vulcanica erutta dall'interno della Terra. Confronta questi due eventi catastrofici.",
        intro:
          "Entrambi gli eventi possono rimodellare i paesaggi e sconvolgere il clima, ma uno arriva dallo spazio mentre l'altro proviene dalle profondita del sottosuolo.",
        pros_a: [
          "Causato da una roccia spaziale che colpisce la superficie terrestre",
          "Rilascia un'energia enorme in un solo istante",
          "Forma un cratere da impatto",
          "Puo' scagliare polvere in alto nell'atmosfera",
          "Collegato all'estinzione di massa dei dinosauri",
        ],
        pros_b: [
          "Causata da magma e gas che sfuggono dall'interno della Terra",
          "Puo' eruttare nell'arco di ore, giorni o molto piu' a lungo",
          "Costruisce forme del rilievo vulcaniche nel tempo",
          "Rilascia cenere, lava e gas",
          "Le grandi eruzioni possono raffreddare il clima globale per anni",
        ],
        verdict:
          "Un impatto di asteroide e' un colpo improvviso dallo spazio; un'eruzione vulcanica e' un rilascio del calore interno della Terra. Entrambi possono oscurare i cieli e alterare il clima, ed entrambi hanno guidato estinzioni.",
        faq: [
          {
            q: "Quale evento pose fine ai dinosauri?",
            a: "Le prove indicano un massiccio impatto di asteroide circa 66 milioni di anni fa, forse aggravato dal vulcanismo.",
          },
          {
            q: "Come influiscono entrambi sul clima?",
            a: "Entrambi possono riempire l'atmosfera di polvere o cenere, bloccando la luce solare e raffreddando temporaneamente il pianeta.",
          },
          {
            q: "Quale e' piu' prevedibile?",
            a: "I vulcani spesso mostrano segnali di avvertimento; i grandi impatti di asteroidi sono rari ma tracciati dalle ricognizioni del cielo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "latitude-vs-longitude",
    a: "Latitude",
    b: "Longitude",
    category: "science",
    emoji_a: "↔️",
    emoji_b: "↕️",
    content: {
      it: {
        title: "Latitudine contro Longitudine: la griglia di coordinate della Terra",
        h1: "Latitudine contro Longitudine: localizzare qualsiasi punto sulla Terra",
        description:
          "La latitudine misura la posizione nord-sud; la longitudine misura la posizione est-ovest. Confronta queste due coordinate cartografiche.",
        intro:
          "Ogni luogo sulla Terra ha un indirizzo preciso fatto di due numeri. Latitudine e longitudine insieme individuano qualsiasi posizione.",
        pros_a: [
          "Misura la posizione a nord o a sud dell'equatore",
          "Le linee corrono orizzontalmente, parallele all'equatore",
          "Va da 0 gradi all'equatore a 90 ai poli",
          "Le linee di latitudine sono chiamate paralleli",
          "Influenza fortemente il clima e le stagioni",
        ],
        pros_b: [
          "Misura la posizione a est o a ovest del meridiano di riferimento",
          "Le linee corrono verticalmente, da polo a polo",
          "Va da 0 a 180 gradi est o ovest",
          "Le linee di longitudine sono chiamate meridiani",
          "Usata per definire i fusi orari attorno al globo",
        ],
        verdict:
          "La latitudine ti dice quanto sei a nord o a sud; la longitudine ti dice quanto sei a est o a ovest. Combina le due e potrai individuare esattamente qualsiasi punto del pianeta.",
        faq: [
          {
            q: "Come ricordo quale e' quale?",
            a: "Le linee di latitudine sono piatte come i pioli di una scala; le linee di longitudine corrono per il lungo, da polo a polo.",
          },
          {
            q: "Dov'e' la longitudine zero?",
            a: "Al meridiano di riferimento, che passa per Greenwich a Londra.",
          },
          {
            q: "Perche' la latitudine influisce sul clima?",
            a: "Determina quanto direttamente la luce solare colpisce la superficie, quindi i poli sono freddi e l'equatore e' caldo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "natural-selection-vs-genetic-drift",
    a: "Natural selection",
    b: "Genetic drift",
    category: "science",
    emoji_a: "🦒",
    emoji_b: "🎲",
    content: {
      it: {
        title: "Selezione naturale contro Deriva genetica spiegata",
        h1: "Selezione naturale contro Deriva genetica: motori dell'evoluzione",
        description:
          "La selezione naturale favorisce i caratteri utili; la deriva genetica cambia i caratteri per caso. Confronta questi due meccanismi evolutivi.",
        intro:
          "Le popolazioni evolvono attraverso diversi meccanismi. La selezione naturale e la deriva genetica cambiano entrambe le frequenze geniche, ma per motivi molto diversi.",
        pros_a: [
          "Favorisce i caratteri che migliorano sopravvivenza e riproduzione",
          "Un processo non casuale guidato dall'ambiente",
          "Tende a rendere le popolazioni piu' adatte al loro habitat",
          "Agisce piu' fortemente sui caratteri che influiscono sulla fitness",
          "Il principale motore dell'adattamento",
        ],
        pros_b: [
          "Cambia le frequenze geniche puramente per caso",
          "Un processo casuale, non collegato all'utilita dei caratteri",
          "Ha il maggiore effetto nelle piccole popolazioni",
          "Puo' eliminare caratteri utili o diffondere caratteri dannosi",
          "Riduce la variabilita genetica nel tempo",
        ],
        verdict:
          "La selezione naturale plasma le popolazioni verso la fitness in modo non casuale; la deriva genetica le sposta in modo casuale, con il maggiore effetto nelle piccole popolazioni. Entrambe agiscono insieme per guidare l'evoluzione.",
        faq: [
          {
            q: "Quale meccanismo e' casuale?",
            a: "La deriva genetica e' casuale; la selezione naturale e' non casuale e guidata dalle pressioni ambientali.",
          },
          {
            q: "Quando la deriva genetica e' piu' forte?",
            a: "Nelle piccole popolazioni, dove eventi casuali possono spostare drasticamente le frequenze geniche.",
          },
          {
            q: "La deriva puo' agire contro l'adattamento?",
            a: "Si. Per caso, la deriva genetica puo' rimuovere caratteri benefici o diffondere caratteri dannosi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "centripetal-vs-centrifugal-force",
    a: "Centripetal force",
    b: "Centrifugal force",
    category: "science",
    emoji_a: "🎡",
    emoji_b: "🌀",
    content: {
      it: {
        title: "Forza centripeta contro centrifuga spiegata",
        h1: "Forza centripeta contro centrifuga: reale contro apparente",
        description:
          "La forza centripeta e' la vera attrazione verso l'interno nel moto circolare; la forza centrifuga e' l'apparente effetto verso l'esterno. Confronta entrambe.",
        intro:
          "Il moto circolare coinvolge due termini che confondono molti studenti. Uno e' una forza autentica; l'altro sembra solo esserlo.",
        pros_a: [
          "Una forza reale che punta verso il centro di un cerchio",
          "Necessaria per mantenere qualsiasi oggetto in moto in un cerchio",
          "Fornita da tensione, gravita o attrito",
          "Senza di essa, l'oggetto vola via in linea retta",
          "Misurabile e obbedisce direttamente alle leggi di Newton",
        ],
        pros_b: [
          "Un apparente effetto verso l'esterno percepito in un sistema in rotazione",
          "Non una forza reale, ma un risultato dell'inerzia",
          "Percepita dai passeggeri in un'auto che curva",
          "Sorge solo osservando da un sistema di riferimento rotante",
          "Scompare quando osservata da un sistema esterno non rotante",
        ],
        verdict:
          "La forza centripeta e' la vera attrazione verso l'interno che piega un oggetto in un cerchio. La 'forza centrifuga' verso l'esterno che senti e' in realta solo l'inerzia che cerca di mantenerti in moto rettilineo.",
        faq: [
          {
            q: "La forza centrifuga e' una forza reale?",
            a: "No. E' un effetto apparente dell'inerzia percepito solo all'interno di un sistema di riferimento rotante.",
          },
          {
            q: "Cosa fornisce la forza centripeta?",
            a: "Qualsiasi cosa che tira verso l'interno: la tensione in una corda, la gravita o l'attrito tra pneumatici e strada.",
          },
          {
            q: "Cosa succede senza la forza centripeta?",
            a: "L'oggetto smette di curvare e vola via in linea retta, obbedendo alla sua inerzia.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endocytosis-vs-exocytosis",
    a: "Endocytosis",
    b: "Exocytosis",
    category: "science",
    emoji_a: "📥",
    emoji_b: "📤",
    content: {
      it: {
        title: "Endocitosi contro Esocitosi: trasporto cellulare",
        h1: "Endocitosi contro Esocitosi: spostare grandi carichi dentro e fuori",
        description:
          "L'endocitosi porta materiale all'interno di una cellula; l'esocitosi lo espelle. Confronta questi due processi di trasporto di massa.",
        intro:
          "Le cellule spostano grandi molecole attraverso la membrana usando il trasporto attivo. Endocitosi ed esocitosi sono le direzioni opposte della stessa idea.",
        pros_a: [
          "Porta materiale all'interno della cellula",
          "La membrana si ripiega verso l'interno per inglobare le sostanze",
          "Forma una vescicola che trasporta il carico all'interno",
          "Usata per assumere nutrienti e grandi particelle",
          "Include la fagocitosi, l'inglobamento di materia solida",
        ],
        pros_b: [
          "Espelle materiale fuori dalla cellula",
          "Una vescicola si fonde con la membrana per rilasciare il contenuto",
          "Invia sostanze nello spazio circostante",
          "Usata per secernere ormoni, enzimi e scorie",
          "Aggiunge nuova membrana alla superficie cellulare nel processo",
        ],
        verdict:
          "L'endocitosi importa carichi di massa avvolgendovi attorno la membrana; l'esocitosi esporta carichi fondendo le vescicole con la membrana. Entrambe richiedono energia e gestiscono materiali troppo grandi per diffondere semplicemente.",
        faq: [
          {
            q: "Questi processi hanno bisogno di energia?",
            a: "Si. Sia l'endocitosi sia l'esocitosi sono trasporto attivo e richiedono energia cellulare.",
          },
          {
            q: "Cos'e' la fagocitosi?",
            a: "Un tipo di endocitosi in cui la cellula ingloba grandi particelle solide, come i batteri.",
          },
          {
            q: "Come fa la cellula a secernere ormoni?",
            a: "Attraverso l'esocitosi: le vescicole che trasportano gli ormoni si fondono con la membrana e li rilasciano all'esterno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conduction-vs-radiation",
    a: "Conduction",
    b: "Radiation",
    category: "science",
    emoji_a: "🍳",
    emoji_b: "☀️",
    content: {
      it: {
        title: "Conduzione contro Irraggiamento: modi di trasferimento del calore",
        h1: "Conduzione contro Irraggiamento: contatto contro nessun contatto",
        description:
          "La conduzione ha bisogno del contatto diretto per spostare il calore; l'irraggiamento attraversa lo spazio vuoto. Confronta questi due modi di trasferimento del calore.",
        intro:
          "Il calore viaggia in tre modi. Conduzione e irraggiamento sono due di essi, e differiscono sul fatto che sia necessario o meno un mezzo.",
        pros_a: [
          "Trasferisce calore attraverso il contatto diretto delle particelle",
          "Richiede un mezzo fisico, idealmente un solido",
          "L'energia passa da una particella alla particella vicina",
          "Non puo' avvenire attraverso il vuoto",
          "Esempio: il manico di una padella che si scalda su un fornello",
        ],
        pros_b: [
          "Trasferisce calore tramite onde elettromagnetiche",
          "Non ha bisogno di alcun mezzo",
          "Puo' viaggiare attraverso il vuoto dello spazio",
          "Tutti gli oggetti caldi emettono radiazione infrarossa",
          "Esempio: il Sole che riscalda la Terra attraverso lo spazio",
        ],
        verdict:
          "La conduzione ha bisogno di materia a contatto e funziona meglio nei solidi; l'irraggiamento non ha bisogno di nulla e attraversa lo spazio vuoto. Ecco come il calore del Sole raggiunge la Terra nonostante il vuoto tra di essi.",
        faq: [
          {
            q: "Come fa il calore del Sole a raggiungere la Terra?",
            a: "Tramite irraggiamento. Le onde elettromagnetiche attraversano il vuoto dello spazio, dato che la conduzione ha bisogno di un mezzo.",
          },
          {
            q: "L'irraggiamento ha bisogno di un mezzo?",
            a: "No. L'irraggiamento viaggia attraverso lo spazio vuoto, a differenza di conduzione e convezione.",
          },
          {
            q: "Qual e' il terzo modo di trasferimento del calore?",
            a: "La convezione, che sposta il calore attraverso il movimento complessivo di un fluido.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atomic-number-vs-mass-number",
    a: "Atomic number",
    b: "Mass number",
    category: "science",
    emoji_a: "🔢",
    emoji_b: "⚖️",
    content: {
      it: {
        title: "Numero atomico contro Numero di massa spiegati",
        h1: "Numero atomico contro Numero di massa: identificare gli atomi",
        description:
          "Il numero atomico conta i protoni; il numero di massa conta i protoni piu' i neutroni. Confronta queste due grandezze atomiche.",
        intro:
          "Due numeri descrivono qualsiasi atomo. Uno fissa quale elemento sia; l'altro riflette quanto e' pesante quel particolare atomo.",
        pros_a: [
          "Conta il numero di protoni nel nucleo",
          "Definisce quale elemento chimico e' l'atomo",
          "Sempre lo stesso per ogni atomo di un elemento",
          "Scritto come pedice prima del simbolo dell'elemento",
          "Pari al numero di elettroni in un atomo neutro",
        ],
        pros_b: [
          "Conta i protoni piu' i neutroni nel nucleo",
          "Riflette la massa complessiva dell'atomo",
          "Puo' differire tra isotopi dello stesso elemento",
          "Scritto come apice prima del simbolo dell'elemento",
          "Trovato sommando il numero di protoni e di neutroni",
        ],
        verdict:
          "Il numero atomico ti dice l'elemento; il numero di massa ti dice l'isotopo. Sottrai il numero atomico dal numero di massa e ottieni il numero di neutroni.",
        faq: [
          {
            q: "Come si trova il numero di neutroni?",
            a: "Si sottrae il numero atomico dal numero di massa.",
          },
          {
            q: "Due atomi possono condividere un numero atomico ma differire nel numero di massa?",
            a: "Si. Quelli sono isotopi: stesso elemento, numero di neutroni diverso.",
          },
          {
            q: "Quale numero definisce l'elemento?",
            a: "Il numero atomico, il numero di protoni, identifica l'elemento in modo univoco.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "convex-vs-concave-mirror",
    a: "Convex mirror",
    b: "Concave mirror",
    category: "science",
    emoji_a: "🪞",
    emoji_b: "🔆",
    content: {
      it: {
        title: "Specchio convesso contro concavo spiegato",
        h1: "Specchio convesso contro concavo: riflessione curva",
        description:
          "Uno specchio convesso si gonfia verso l'esterno e disperde la luce; uno specchio concavo si incurva verso l'interno e la focalizza. Confronta questi specchi.",
        intro:
          "Gli specchi curvi riflettono la luce in modo diverso da quelli piatti. Se la superficie si gonfia verso l'esterno o si incurva verso l'interno cambia completamente l'immagine.",
        pros_a: [
          "La superficie riflettente si gonfia verso l'esterno",
          "Disperde i raggi di luce riflessi",
          "Forma sempre una piccola immagine virtuale diritta",
          "Offre un ampio campo visivo",
          "Usato negli specchietti laterali delle auto e negli specchi di sicurezza",
        ],
        pros_b: [
          "La superficie riflettente si incurva verso l'interno",
          "Fa convergere i raggi di luce riflessi in un punto focale",
          "Puo' formare immagini reali o virtuali, ingrandite o ridotte",
          "Usato in telescopi, fari e specchi da barba",
          "L'immagine dipende dalla distanza dell'oggetto",
        ],
        verdict:
          "Uno specchio convesso disperde la luce e mostra una vista ampia e rimpicciolita, ideale per la sicurezza. Uno specchio concavo focalizza la luce e puo' ingrandire, il che lo rende utile in telescopi e fari.",
        faq: [
          {
            q: "Perche' le auto usano specchietti laterali convessi?",
            a: "Gli specchi convessi offrono un ampio campo visivo, aiutando i conducenti a vedere piu' strada dietro di loro.",
          },
          {
            q: "Quale specchio puo' ingrandire il tuo viso?",
            a: "Uno specchio concavo produce un'immagine ingrandita e diritta quando gli sei vicino.",
          },
          {
            q: "Quale specchio focalizza la luce in un punto?",
            a: "Uno specchio concavo fa convergere i raggi di luce paralleli in un punto focale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "absolute-vs-apparent-magnitude",
    a: "Absolute magnitude",
    b: "Apparent magnitude",
    category: "science",
    emoji_a: "✨",
    emoji_b: "👁️",
    content: {
      it: {
        title: "Magnitudine assoluta contro apparente delle stelle",
        h1: "Magnitudine assoluta contro apparente: luminosita vera contro vista",
        description:
          "La magnitudine assoluta e' la vera luminosita di una stella; la magnitudine apparente e' quanto luminosa appare dalla Terra. Confronta entrambe.",
        intro:
          "La luminosita di una stella puo' essere misurata in due modi. Uno riflette come brilla davvero; l'altro dipende da quanto e' lontana.",
        pros_a: [
          "Misura la vera luminosita intrinseca di una stella",
          "Definita come la luminosita vista da una distanza standard fissa",
          "Non dipende dalla distanza della stella dalla Terra",
          "Permette agli astronomi di confrontare le stelle in modo equo",
          "Un valore piu' negativo significa una stella piu' luminosa",
        ],
        pros_b: [
          "Misura quanto luminosa appare una stella dalla Terra",
          "Fortemente influenzata dalla distanza della stella",
          "Una stella debole e vicina puo' brillare piu' di una lontana e luminosa",
          "Cio' che l'occhio vede effettivamente nel cielo notturno",
          "Un valore piu' negativo significa un oggetto piu' luminoso all'apparenza",
        ],
        verdict:
          "La magnitudine apparente e' la luminosita come si vede; la magnitudine assoluta e' la luminosita com'e' davvero. Una stella dall'aspetto debole puo' essere una potente gigante semplicemente lontana, cosa che la magnitudine assoluta rivela.",
        faq: [
          {
            q: "Perche' una stella dall'aspetto luminoso non significa una stella potente?",
            a: "La luminosita apparente dipende dalla distanza; una stella modesta e vicina puo' apparire piu' luminosa di una gigante lontana.",
          },
          {
            q: "Cosa neutralizza la magnitudine assoluta?",
            a: "Rimuove la distanza confrontando tutte le stelle come se fossero viste dalla stessa distanza standard.",
          },
          {
            q: "Un numero di magnitudine piu' basso significa piu' luminoso?",
            a: "Si. La scala della magnitudine va al contrario, quindi numeri piu' piccoli e piu' negativi significano piu' luminoso.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mean-vs-mode",
    a: "Mean",
    b: "Mode",
    category: "science",
    emoji_a: "📊",
    emoji_b: "🔝",
    content: {
      it: {
        title: "Media contro Moda: due misure di tendenza centrale",
        h1: "Media contro Moda: valore medio contro il piu' comune",
        description:
          "La media e' la media aritmetica; la moda e' il valore piu' frequente. Confronta queste due misure di tendenza centrale.",
        intro:
          "La statistica offre diversi tipi di valore centrale. Media e moda rispondono a domande diverse sul centro di un insieme di dati.",
        pros_a: [
          "La somma di tutti i valori divisa per il conteggio",
          "Usa ogni punto dei dati nel suo calcolo",
          "Funziona solo con dati numerici",
          "Sensibile ai valori estremi anomali",
          "C'e' sempre esattamente una media",
        ],
        pros_b: [
          "Il valore che appare piu' spesso nei dati",
          "Trovata contando la frequenza, non calcolando",
          "Funziona con numeri e con categorie",
          "Non influenzata dai valori estremi anomali",
          "Un insieme di dati puo' avere una, diverse o nessuna moda",
        ],
        verdict:
          "La media bilancia tutti i valori in un'unica media; la moda nomina semplicemente il valore piu' comune. Usa la media per i dati numerici e la moda quando ti serve la categoria piu' frequente.",
        faq: [
          {
            q: "La moda puo' essere usata per dati non numerici?",
            a: "Si. A differenza della media, la moda funziona per categorie come il colore preferito.",
          },
          {
            q: "Un insieme di dati puo' avere piu' di una moda?",
            a: "Si. Un insieme di dati puo' essere bimodale o multimodale, oppure non avere moda se nessun valore si ripete.",
          },
          {
            q: "Quale misura e' influenzata dai valori anomali?",
            a: "La media. La moda ignora i valori anomali perche' conta solo la frequenza.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "terrestrial-planet-vs-gas-giant",
    a: "Terrestrial planet",
    b: "Gas giant",
    category: "science",
    emoji_a: "🌍",
    emoji_b: "🪐",
    content: {
      it: {
        title: "Pianeta terrestre contro Gigante gassoso a confronto",
        h1: "Pianeta terrestre contro Gigante gassoso: due tipi di pianeta",
        description:
          "I pianeti terrestri sono piccoli e rocciosi; i giganti gassosi sono enormi e gassosi. Confronta queste due classi di pianeta.",
        intro:
          "I pianeti del nostro sistema solare si dividono in due grandi famiglie, plasmate dal luogo in cui si sono formati rispetto al Sole.",
        pros_a: [
          "Piccolo, denso e fatto principalmente di roccia e metallo",
          "Ha una superficie solida su cui potresti stare",
          "Include Mercurio, Venere, la Terra e Marte",
          "Orbita piu' vicino al Sole, nel sistema solare interno",
          "Ha poche lune o nessuna",
        ],
        pros_b: [
          "Enorme e fatto principalmente di idrogeno ed elio",
          "Non ha superficie solida, solo profondi strati gassosi",
          "Include Giove e Saturno",
          "Orbita lontano dal Sole, nel sistema solare esterno",
          "Ha molte lune e spesso un sistema di anelli",
        ],
        verdict:
          "I pianeti terrestri sono piccoli mondi rocciosi con terreno solido; i giganti gassosi sono vaste sfere di gas senza superficie. I due tipi riflettono le condizioni fredde o calde in cui ciascuno si e' formato.",
        faq: [
          {
            q: "Potresti stare su un gigante gassoso?",
            a: "No. I giganti gassosi non hanno superficie solida, solo strati di gas e liquido sempre piu' densi.",
          },
          {
            q: "Perche' i giganti gassosi hanno cosi' tante lune?",
            a: "La loro immensa massa e gravita hanno catturato e trattenuto piu' corpi in orbita durante la formazione.",
          },
          {
            q: "Come sono classificati Urano e Nettuno?",
            a: "Sono spesso chiamati giganti di ghiaccio, un sottogruppo distinto ricco di composti ghiacciati.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "acid-vs-base",
    a: "Acid",
    b: "Base",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      it: {
        title: "Acido contro Base: pH, proprieta, esempi",
        h1: "Acido contro Base: come distinguerli",
        description:
          "Gli acidi cedono protoni e hanno un sapore aspro; le basi accettano protoni e risultano scivolose. Confronta pH, reazioni ed esempi quotidiani fianco a fianco.",
        intro:
          "Acidi e basi si collocano alle estremita opposte della scala del pH, eppure entrambi sono essenziali per la chimica e la vita. Sapere come si comporta ciascuno aiuta a prevedere le reazioni e a leggere i test al tornasole.",
        pros_a: [
          "Cede ioni H+ in acqua",
          "pH inferiore a 7",
          "Sapore aspro, fa virare il tornasole al rosso",
          "Reagisce con i metalli rilasciando idrogeno",
          "Esempi: HCl, aceto, acido citrico",
        ],
        pros_b: [
          "Accetta ioni H+ o cede ioni OH-",
          "pH superiore a 7",
          "Risulta scivolosa, fa virare il tornasole al blu",
          "Reagisce con gli acidi formando sale e acqua",
          "Esempi: NaOH, ammoniaca, bicarbonato di sodio",
        ],
        verdict:
          "Acidi e basi sono opposti chimici che si neutralizzano a vicenda. Usa il pH per classificarli: sotto 7 e' acido, sopra 7 e' basico, ed esattamente 7 e' neutro.",
        faq: [
          {
            q: "Cosa succede quando un acido incontra una base?",
            a: "Subiscono una reazione di neutralizzazione, producendo un sale e acqua e spostando il pH verso 7.",
          },
          {
            q: "Come si testa un acido o una base?",
            a: "La cartina al tornasole e' il test piu' semplice: gli acidi la fanno virare al rosso, le basi al blu. Un pHmetro da' un numero preciso.",
          },
          {
            q: "L'acqua e' un acido o una base?",
            a: "L'acqua pura e' neutra con un pH di 7; puo' agire sia come acido debole sia come base debole, cosa che si dice anfotera.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "strong-acid-vs-weak-acid",
    a: "Strong acid",
    b: "Weak acid",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      it: {
        title: "Acido forte contro Acido debole: differenze chiave",
        h1: "Acido forte contro Acido debole spiegati",
        description:
          "Gli acidi forti si ionizzano completamente in acqua; gli acidi deboli solo parzialmente. Confronta dissociazione, pH ed esempi per lo studio della chimica.",
        intro:
          "La forza di un acido riguarda quanto pienamente si ionizza, non quanto e' concentrato. Questa distinzione plasma pH, conducibilita e velocita di reazione.",
        pros_a: [
          "Si ionizza al 100% in acqua",
          "pH molto basso alla stessa concentrazione",
          "Alta conducibilita elettrica",
          "Reazione essenzialmente irreversibile",
          "Esempi: HCl, HNO3, H2SO4",
        ],
        pros_b: [
          "Si ionizza solo parzialmente in acqua",
          "pH piu' alto di un acido forte alla stessa concentrazione",
          "Conducibilita piu' bassa",
          "Stabilisce un equilibrio (reversibile)",
          "Esempi: acido acetico, acido carbonico, HF",
        ],
        verdict:
          "Gli acidi forti si dissociano completamente e gli acidi deboli stabiliscono un equilibrio. La forza e' diversa dalla concentrazione: un acido forte diluito puo' essere piu' debole nell'effetto di uno debole concentrato.",
        faq: [
          {
            q: "Forte significa concentrato?",
            a: "No. La forza si riferisce al grado di ionizzazione; la concentrazione si riferisce alla quantita per volume. Sono proprieta indipendenti.",
          },
          {
            q: "Perche' gli acidi deboli hanno un valore Ka?",
            a: "Poiche' si ionizzano solo parzialmente, una costante di equilibrio Ka quantifica fin dove procede la dissociazione.",
          },
          {
            q: "Quale conduce meglio l'elettricita?",
            a: "Un acido forte, perche' la ionizzazione completa fornisce molti piu' ioni liberi per trasportare la corrente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ph-vs-poh",
    a: "pH",
    b: "pOH",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧪",
    content: {
      it: {
        title: "pH contro pOH: misurare acidita e basicita",
        h1: "pH contro pOH: due facce della stessa scala",
        description:
          "Il pH traccia gli ioni idrogeno, il pOH traccia gli ioni idrossido, e i due sommati danno sempre 14. Confronta formule e usi per la chimica.",
        intro:
          "pH e pOH sono scale complementari che descrivono la stessa soluzione. Comprendere il loro legame rende i calcoli acido-base molto piu' rapidi.",
        pros_a: [
          "Misura la concentrazione di ioni H+",
          "pH = -log[H+]",
          "Un valore piu' basso significa piu' acido",
          "La scala piu' comunemente riportata",
          "Intervallo 0-14 in acqua a 25°C",
        ],
        pros_b: [
          "Misura la concentrazione di ioni OH-",
          "pOH = -log[OH-]",
          "Un valore piu' basso significa piu' basico",
          "Utile per i calcoli sulle basi",
          "Equivale sempre a 14 meno il pH a 25°C",
        ],
        verdict:
          "pH e pOH descrivono lo stesso equilibrio da direzioni opposte. Poiche' pH + pOH = 14 in acqua a 25°C, conoscere uno fornisce immediatamente l'altro.",
        faq: [
          {
            q: "Perche' pH e pOH sommati danno 14?",
            a: "Perche' il prodotto ionico dell'acqua Kw e' 1×10⁻¹⁴ a 25°C, quindi i logaritmi di [H+] e [OH-] sommati danno 14.",
          },
          {
            q: "Quale viene usato piu' spesso?",
            a: "Il pH e' di gran lunga piu' comune nei laboratori e nell'uso quotidiano, ma il pOH semplifica molti calcoli sulla forza delle basi.",
          },
          {
            q: "La somma resta 14 a tutte le temperature?",
            a: "No. Kw cambia con la temperatura, quindi la somma pH + pOH e' esattamente 14 solo a 25°C.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ionic-bond-vs-covalent-bond",
    a: "Ionic bond",
    b: "Covalent bond",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "🔗",
    content: {
      it: {
        title: "Legame ionico contro Legame covalente: a confronto",
        h1: "Legame ionico contro Legame covalente spiegati",
        description:
          "I legami ionici trasferiscono elettroni; i legami covalenti li condividono. Confronta formazione, punti di fusione ed esempi per lo studio della chimica.",
        intro:
          "I legami chimici tengono insieme la materia, e i due tipi principali differiscono per come vengono gestiti gli elettroni. Cio' determina se una sostanza e' sale fragile o un gas tenue.",
        pros_a: [
          "Elettroni trasferiti dal metallo al non metallo",
          "Forma ioni carichi tenuti insieme dall'attrazione",
          "Alti punti di fusione ed ebollizione",
          "Conduce l'elettricita quando e' fuso o disciolto",
          "Esempi: NaCl, MgO, CaF2",
        ],
        pros_b: [
          "Elettroni condivisi tra non metalli",
          "Forma molecole neutre distinte",
          "Punti di fusione generalmente piu' bassi",
          "Di solito non conduce l'elettricita",
          "Esempi: H2O, CO2, CH4",
        ],
        verdict:
          "I legami ionici compaiono tra metalli e non metalli attraverso il trasferimento di elettroni; i legami covalenti compaiono tra non metalli attraverso la condivisione. La differenza di elettronegativita predice quale si forma.",
        faq: [
          {
            q: "Come prevedo il tipo di legame?",
            a: "Confronta le elettronegativita: una grande differenza favorisce il legame ionico, una piccola favorisce il legame covalente.",
          },
          {
            q: "Perche' i composti ionici sono fragili?",
            a: "Spostare il reticolo allinea cariche dello stesso segno, che si respingono e fanno spezzare il cristallo.",
          },
          {
            q: "Un legame puo' essere in parte di entrambi i tipi?",
            a: "Si. I legami covalenti polari condividono gli elettroni in modo diseguale, collocandosi tra il puramente ionico e il puramente covalente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "covalent-bond-vs-metallic-bond",
    a: "Covalent bond",
    b: "Metallic bond",
    category: "chemistry",
    emoji_a: "🔗",
    emoji_b: "🪙",
    content: {
      it: {
        title: "Legame covalente contro Legame metallico: a confronto",
        h1: "Legame covalente contro metallico spiegati",
        description:
          "I legami covalenti condividono coppie di elettroni tra atomi; i legami metallici mettono in comune gli elettroni in un reticolo. Confronta le proprieta fianco a fianco.",
        intro:
          "Entrambi i legami coinvolgono elettroni condivisi, ma il modo in cui gli elettroni si muovono li distingue. Uno da' molecole isolanti, l'altro da' conduttori lucenti.",
        pros_a: [
          "Elettroni condivisi in coppie fisse localizzate",
          "Forma molecole o reticoli covalenti",
          "Di solito cattivo conduttore elettrico",
          "Si trova tra atomi non metallici",
          "Esempi: O2, diamante, SiO2",
        ],
        pros_b: [
          "Elettroni delocalizzati in un mare condiviso",
          "Tiene insieme un reticolo di ioni metallici positivi",
          "Eccellente conduttore di calore ed elettricita",
          "Malleabile e duttile",
          "Esempi: ferro, rame, alluminio",
        ],
        verdict:
          "I legami covalenti bloccano gli elettroni tra atomi specifici, mentre i legami metallici lasciano vagare liberamente gli elettroni. Quella mobilita spiega perche' i metalli conducono e si piegano senza rompersi.",
        faq: [
          {
            q: "Perche' i metalli sono malleabili ma i solidi covalenti fragili?",
            a: "Il mare di elettroni lascia scorrere gli strati metallici, mentre i legami covalenti fissi si spezzano quando gli atomi si spostano.",
          },
          {
            q: "Quale conduce l'elettricita?",
            a: "Il legame metallico conduce bene perche' gli elettroni delocalizzati si muovono liberamente; la maggior parte delle sostanze covalenti no.",
          },
          {
            q: "I solidi covalenti reticolari sono resistenti?",
            a: "Si. Le strutture covalenti giganti come il diamante sono estremamente dure e hanno punti di fusione molto alti.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "polar-vs-nonpolar",
    a: "Polar",
    b: "Nonpolar",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "⚪",
    content: {
      it: {
        title: "Polare contro Apolare: molecole a confronto",
        h1: "Molecole polari contro apolari spiegate",
        description:
          "Le molecole polari hanno una carica diseguale e si dissolvono in acqua; le molecole apolari sono simmetriche. Confronta legami e solubilita.",
        intro:
          "La polarita decide se una molecola si mescola con l'acqua o con l'olio. Deriva dalle differenze di elettronegativita e dalla forma della molecola.",
        pros_a: [
          "Distribuzione diseguale degli elettroni, ha un dipolo",
          "Forma molecolare asimmetrica",
          "Si dissolve in acqua e nei solventi polari",
          "Punti di ebollizione piu' alti per le forze dipolari",
          "Esempi: H2O, NH3, HCl",
        ],
        pros_b: [
          "Distribuzione uniforme degli elettroni, nessun dipolo netto",
          "Forma molecolare simmetrica",
          "Si dissolve negli oli e nei solventi apolari",
          "Punti di ebollizione piu' bassi, deboli forze di dispersione",
          "Esempi: O2, CO2, CH4",
        ],
        verdict:
          "Le molecole polari portano cariche parziali e seguono 'il simile dissolve il simile' con l'acqua; le molecole apolari restano simmetriche e si mescolano con gli oli. La forma conta tanto quanto il tipo di legame.",
        faq: [
          {
            q: "Una molecola puo' avere legami polari ma essere apolare?",
            a: "Si. Il CO2 ha legami polari, ma la sua simmetria lineare annulla i dipoli, rendendo la molecola apolare.",
          },
          {
            q: "Perche' l'olio non si mescola con l'acqua?",
            a: "L'olio e' apolare e l'acqua e' polare; le loro diverse forze intermolecolari impediscono la mescolanza.",
          },
          {
            q: "Come valuto la polarita?",
            a: "Controlla le differenze di elettronegativita dei legami e se la geometria molecolare e' simmetrica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrogen-bond-vs-dipole-dipole",
    a: "Hydrogen bond",
    b: "Dipole-dipole",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🧲",
    content: {
      it: {
        title: "Legame a idrogeno contro forze dipolo-dipolo",
        h1: "Legame a idrogeno contro Dipolo-dipolo spiegati",
        description:
          "I legami a idrogeno sono una forza dipolare particolarmente forte che coinvolge N, O o F. Confronta forza ed effetti con il normale dipolo-dipolo.",
        intro:
          "Entrambe sono attrazioni intermolecolari tra molecole polari, ma il legame a idrogeno e' un caso speciale piu' forte. Spiega le proprieta insolite dell'acqua.",
        pros_a: [
          "L'attrazione intermolecolare piu' forte (non ionica)",
          "Richiede un H legato a N, O o F",
          "Innalza drasticamente i punti di ebollizione",
          "Spiega l'alto punto di ebollizione dell'acqua e la densita del ghiaccio",
          "Esempi: acqua, appaiamento delle basi del DNA, NH3",
        ],
        pros_b: [
          "Piu' debole del legame a idrogeno",
          "Si verifica tra qualsiasi molecola polare",
          "Allinea le estremita parziali positive e negative",
          "Innalza moderatamente i punti di ebollizione",
          "Esempi: HCl, acetone, SO2",
        ],
        verdict:
          "Il legame a idrogeno e' solo un potente sottotipo di interazione dipolo-dipolo limitato a N-H, O-H e F-H. Entrambi attirano insieme le molecole polari, ma i legami a idrogeno vincono in forza.",
        faq: [
          {
            q: "Un legame a idrogeno e' un vero legame chimico?",
            a: "No. E' una forte forza intermolecolare, piu' debole dei legami covalenti o ionici all'interno delle molecole.",
          },
          {
            q: "Perche' l'acqua galleggia come ghiaccio?",
            a: "I legami a idrogeno bloccano le molecole d'acqua in un reticolo esagonale aperto che e' meno denso dell'acqua liquida.",
          },
          {
            q: "Quale e' piu' forte?",
            a: "I legami a idrogeno sono piu' forti per via della carica fortemente concentrata sui piccoli atomi N, O e F.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "soluble-vs-insoluble",
    a: "Soluble",
    b: "Insoluble",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🪨",
    content: {
      it: {
        title: "Solubile contro Insolubile: la solubilita spiegata",
        h1: "Sostanze solubili contro insolubili",
        description:
          "Le sostanze solubili si dissolvono in un solvente; quelle insolubili no. Confronta regole di solubilita ed esempi per lo studio della chimica.",
        intro:
          "La solubilita descrive se una sostanza puo' dissolversi in un dato solvente. Dipende dalle forze intermolecolari, dalla temperatura e dalla natura chimica.",
        pros_a: [
          "Si dissolve formando una soluzione omogenea",
          "Le particelle si disperdono uniformemente nel solvente",
          "Spesso segue 'il simile dissolve il simile'",
          "La solubilita di solito aumenta con la temperatura",
          "Esempi: sale e zucchero in acqua",
        ],
        pros_b: [
          "Non si dissolve in modo apprezzabile nel solvente",
          "Rimane come solido o strato separato",
          "Puo' essere separato per filtrazione",
          "Forma sospensioni, non vere soluzioni",
          "Esempi: sabbia e gesso in acqua",
        ],
        verdict:
          "Le sostanze solubili svaniscono nella soluzione mentre quelle insolubili restano visibilmente separate. Il risultato dipende dalla corrispondenza di polarita tra soluto e solvente.",
        faq: [
          {
            q: "La solubilita e' tutto o niente?",
            a: "No. Le sostanze variano da molto solubili a leggermente solubili a praticamente insolubili.",
          },
          {
            q: "Come influisce la temperatura sulla solubilita?",
            a: "La maggior parte dei solidi si dissolve meglio quando e' caldo, mentre i gas in genere si dissolvono meglio quando e' freddo.",
          },
          {
            q: "Come separo un solido insolubile?",
            a: "La filtrazione intrappola il solido insolubile mentre il solvente passa attraverso.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkane-vs-alkene",
    a: "Alkane",
    b: "Alkene",
    category: "chemistry",
    emoji_a: "🛢️",
    emoji_b: "🔥",
    content: {
      it: {
        title: "Alcano contro Alchene: differenze tra idrocarburi",
        h1: "Alcano contro Alchene spiegati",
        description:
          "Gli alcani hanno solo legami C-C singoli; gli alcheni contengono un doppio legame C=C. Confronta formule, reattivita ed esempi.",
        intro:
          "Alcani e alcheni sono entrambi idrocarburi ma differiscono per saturazione. Quel singolo doppio legame ne cambia completamente la reattivita.",
        pros_a: [
          "Solo legami carbonio-carbonio singoli (saturo)",
          "Formula generale CnH2n+2",
          "Relativamente poco reattivo, subisce sostituzioni",
          "Brucia in modo pulito come combustibile",
          "Esempi: metano, etano, propano",
        ],
        pros_b: [
          "Contiene almeno un doppio legame C=C (insaturo)",
          "Formula generale CnH2n",
          "Reattivo, subisce reazioni di addizione",
          "Decolora l'acqua di bromo",
          "Esempi: etene, propene, butene",
        ],
        verdict:
          "Gli alcani sono saturi e poco reattivi; gli alcheni sono insaturi e molto piu' reattivi grazie al doppio legame. Il test dell'acqua di bromo li distingue all'istante.",
        faq: [
          {
            q: "Come distinguo un alcano da un alchene?",
            a: "Aggiungi acqua di bromo: un alchene la decolora rapidamente mentre un alcano no.",
          },
          {
            q: "Perche' gli alcheni sono piu' reattivi?",
            a: "Il doppio legame C=C ha una nube di elettroni pi esposta che attacca facilmente i reagenti.",
          },
          {
            q: "Quale reazione subiscono gli alcheni?",
            a: "Reazioni di addizione, in cui atomi si aggiungono attraverso il doppio legame e lo convertono in un legame singolo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkene-vs-alkyne",
    a: "Alkene",
    b: "Alkyne",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "⚡",
    content: {
      it: {
        title: "Alchene contro Alchino: doppio contro triplo legame",
        h1: "Alchene contro Alchino spiegati",
        description:
          "Gli alcheni hanno un doppio legame C=C; gli alchini hanno un triplo legame C≡C. Confronta formule, forza del legame e reattivita.",
        intro:
          "Alcheni e alchini sono entrambi idrocarburi insaturi. Il numero di legami tra i carboni cambia la geometria e la reattivita.",
        pros_a: [
          "Contiene un doppio legame C=C",
          "Formula generale CnH2n",
          "Geometria planare attorno al doppio legame",
          "Subisce reazioni di addizione",
          "Esempi: etene, propene",
        ],
        pros_b: [
          "Contiene un triplo legame C≡C",
          "Formula generale CnH2n-2",
          "Geometria lineare attorno al triplo legame",
          "Piu' insaturo, addiziona due volte",
          "Esempi: etino (acetilene), propino",
        ],
        verdict:
          "Gli alcheni portano un grado di insaturazione per ogni doppio legame; gli alchini ne portano due per ogni triplo legame. Gli alchini sono piu' lineari e possono subire due addizioni successive.",
        faq: [
          {
            q: "Quale ha il grado di insaturazione piu' alto?",
            a: "Un alchino, perche' un triplo legame conta come due gradi di insaturazione contro uno per un doppio legame.",
          },
          {
            q: "Che forma ha un alchino?",
            a: "I carboni con il triplo legame sono lineari con angoli di legame di 180°.",
          },
          {
            q: "Un alchino puo' diventare un alcano?",
            a: "Si. Aggiungere idrogeno due volte converte un triplo legame in un doppio legame e poi in un legame singolo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aromatic-vs-aliphatic",
    a: "Aromatic",
    b: "Aliphatic",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "📏",
    content: {
      it: {
        title: "Aromatico contro Alifatico: composti a confronto",
        h1: "Composti aromatici contro alifatici spiegati",
        description:
          "I composti aromatici contengono sistemi ad anello stabili come il benzene; quelli alifatici hanno catene aperte o non aromatiche. Confronta entrambi.",
        intro:
          "I composti organici si dividono in famiglie aromatiche e alifatiche. La caratteristica distintiva e' se sia presente uno speciale anello delocalizzato.",
        pros_a: [
          "Contiene un anello delocalizzato simile al benzene",
          "Stabilita extra dalla delocalizzazione degli elettroni",
          "Subisce sostituzione per preservare l'anello",
          "Ha spesso un odore caratteristico",
          "Esempi: benzene, toluene, naftalene",
        ],
        pros_b: [
          "Catene aperte o anelli non aromatici",
          "Nessuna speciale stabilizzazione dell'anello",
          "Include alcani, alcheni e alchini",
          "Subisce addizione o sostituzione",
          "Esempi: esano, etene, cicloesano",
        ],
        verdict:
          "I composti aromatici devono la loro stabilita a un anello delocalizzato di elettroni pi; i composti alifatici ne sono privi. Quella stabilita fa resistere gli aromatici alle reazioni di addizione.",
        faq: [
          {
            q: "Cosa rende aromatico un anello?",
            a: "Deve essere ciclico, planare, completamente coniugato e seguire la regola di Hückel (4n+2 elettroni pi).",
          },
          {
            q: "Il cicloesano e' aromatico?",
            a: "No. E' un anello saturo senza sistema pi delocalizzato, quindi e' alifatico.",
          },
          {
            q: "Perche' gli aromatici preferiscono la sostituzione?",
            a: "La sostituzione mantiene intatto lo stabile anello aromatico, mentre l'addizione lo distruggerebbe.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "cis-isomer-vs-trans-isomer",
    a: "Cis isomer",
    b: "Trans isomer",
    category: "chemistry",
    emoji_a: "🔀",
    emoji_b: "↔️",
    content: {
      it: {
        title: "Isomero cis contro trans: isomeria geometrica",
        h1: "Isomero cis contro trans spiegato",
        description:
          "Gli isomeri cis hanno i gruppi sullo stesso lato di un doppio legame; gli isomeri trans su lati opposti. Confronta le proprieta fianco a fianco.",
        intro:
          "Gli isomeri cis e trans sono isomeri geometrici con la stessa formula ma una diversa disposizione 3D. Il doppio legame li blocca al loro posto.",
        pros_a: [
          "Gruppi identici sullo stesso lato del legame",
          "Spesso polare con un dipolo netto",
          "Di solito punto di fusione piu' basso",
          "Impacchettamento meno simmetrico",
          "Esempio: cis-2-butene",
        ],
        pros_b: [
          "Gruppi identici su lati opposti",
          "Spesso apolare, i dipoli possono annullarsi",
          "Di solito punto di fusione piu' alto",
          "Piu' simmetrico, si impacchetta in modo efficiente",
          "Esempio: trans-2-butene",
        ],
        verdict:
          "Gli isomeri cis e trans differiscono solo nella geometria attorno a un doppio legame rigido, eppure cio' cambia polarita e punto di fusione. Il trans di solito si impacchetta meglio e fonde piu' alto.",
        faq: [
          {
            q: "Perche' cis e trans non possono interconvertirsi liberamente?",
            a: "Il doppio legame non puo' ruotare, quindi le due disposizioni sono bloccate a meno che il legame non si rompa.",
          },
          {
            q: "Quale ha il punto di fusione piu' alto?",
            a: "Di solito l'isomero trans, perche' la sua forma simmetrica si impacchetta piu' strettamente in un solido.",
          },
          {
            q: "Hanno la stessa formula molecolare?",
            a: "Si. Sono isomeri, quindi la formula e' identica e solo la disposizione spaziale differisce.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "enantiomer-vs-diastereomer",
    a: "Enantiomer",
    b: "Diastereomer",
    category: "chemistry",
    emoji_a: "🪞",
    emoji_b: "🧩",
    content: {
      it: {
        title: "Enantiomero contro Diastereoisomero: stereoisomeri",
        h1: "Enantiomero contro Diastereoisomero spiegati",
        description:
          "Gli enantiomeri sono immagini speculari non sovrapponibili; i diastereoisomeri sono stereoisomeri che non sono immagini speculari. Confronta entrambi.",
        intro:
          "Gli stereoisomeri condividono la connettivita ma differiscono nella disposizione 3D. Enantiomeri e diastereoisomeri sono le due categorie principali.",
        pros_a: [
          "Immagini speculari non sovrapponibili l'una dell'altra",
          "Proprieta fisiche identiche (tranne la rotazione ottica)",
          "Ruotano la luce polarizzata in modo opposto",
          "Differiscono a ogni stereocentro",
          "Esempio: D- e L-alanina",
        ],
        pros_b: [
          "Stereoisomeri che non sono immagini speculari",
          "Proprieta fisiche diverse (p.f., p.eb., solubilita)",
          "Possono essere separati con metodi ordinari",
          "Differiscono ad alcuni ma non a tutti gli stereocentri",
          "Esempio: isomeri cis/trans, zuccheri",
        ],
        verdict:
          "Gli enantiomeri sono immagini speculari perfette con proprieta identiche; i diastereoisomeri differiscono solo ad alcuni stereocentri e si comportano in modo diverso. La distinzione conta nella progettazione di farmaci.",
        faq: [
          {
            q: "Come differiscono enantiomeri e diastereoisomeri?",
            a: "Gli enantiomeri sono immagini speculari che differiscono a tutti gli stereocentri; i diastereoisomeri differiscono solo ad alcuni.",
          },
          {
            q: "Si possono separare facilmente gli enantiomeri?",
            a: "Non con metodi ordinari, dato che le loro proprieta fisiche sono identiche; servono tecniche chirali.",
          },
          {
            q: "Perche' gli enantiomeri contano in medicina?",
            a: "Un enantiomero di un farmaco puo' essere attivo mentre la sua immagine speculare e' inattiva o dannosa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sn1-vs-sn2",
    a: "SN1",
    b: "SN2",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      it: {
        title: "SN1 contro SN2: sostituzione nucleofila",
        h1: "Meccanismi di reazione SN1 contro SN2",
        description:
          "SN1 e' una reazione in due fasi attraverso un carbocatione; SN2 e' un attacco dorsale in una sola fase. Confronta velocita, stereochimica e substrati.",
        intro:
          "SN1 e SN2 sono i due meccanismi chiave di sostituzione nucleofila. La scelta tra di essi dipende da substrato, nucleofilo e solvente.",
        pros_a: [
          "Meccanismo in due fasi attraverso un carbocatione",
          "La velocita dipende solo dal substrato",
          "Favorito dai substrati terziari",
          "Produce una miscela racemica",
          "Preferisce i solventi polari protici",
        ],
        pros_b: [
          "Attacco dorsale concertato in una sola fase",
          "La velocita dipende da substrato e nucleofilo",
          "Favorito dai substrati primari",
          "Causa inversione di configurazione",
          "Preferisce i solventi polari aprotici",
        ],
        verdict:
          "SN1 procede attraverso un carbocatione e da' racemizzazione, mentre SN2 e' concertato e inverte lo stereocentro. Il tipo di substrato e' il piu' forte indicatore di quale prevale.",
        faq: [
          {
            q: "Quale meccanismo favoriscono gli alogenuri terziari?",
            a: "SN1, perche' i carbocationi terziari sono stabilizzati mentre l'ingombro sterico blocca l'attacco dorsale SN2.",
          },
          {
            q: "Cosa succede alla stereochimica in SN2?",
            a: "La configurazione si inverte, come un ombrello che si rovescia al vento.",
          },
          {
            q: "Come influisce il solvente sulla scelta?",
            a: "I solventi polari protici favoriscono SN1, mentre i solventi polari aprotici favoriscono SN2.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "e1-vs-e2",
    a: "E1",
    b: "E2",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      it: {
        title: "E1 contro E2: meccanismi di reazione di eliminazione",
        h1: "Meccanismi di reazione E1 contro E2 spiegati",
        description:
          "Le eliminazioni E1 procedono attraverso un carbocatione in due fasi; le eliminazioni E2 sono concertate in una sola fase. Confronta velocita e condizioni.",
        intro:
          "E1 ed E2 sono i due principali meccanismi di eliminazione che formano alcheni rimuovendo atomi. Le condizioni decidono quale via prevale.",
        pros_a: [
          "Meccanismo in due fasi attraverso un carbocatione",
          "La velocita dipende solo dal substrato",
          "Favorito dai substrati terziari",
          "Usa basi deboli e calore",
          "Puo' dare prodotti riarrangiati",
        ],
        pros_b: [
          "Eliminazione concertata in una sola fase",
          "La velocita dipende da substrato e base",
          "Funziona su substrati primari e secondari",
          "Richiede una base forte, spesso ingombrante",
          "Richiede una geometria anti-periplanare",
        ],
        verdict:
          "E1 procede attraverso un carbocatione con una base debole, mentre E2 e' un processo concertato in una sola fase che necessita di una base forte. Entrambi formano alcheni ma differiscono nella legge cinetica e nella stereochimica.",
        faq: [
          {
            q: "Quale base necessita E2?",
            a: "Una base forte come l'idrossido o l'alcossido che possa strappare un protone nella fase concertata.",
          },
          {
            q: "Perche' E1 puo' dare prodotti riarrangiati?",
            a: "Il suo intermedio carbocationico puo' spostarsi in una posizione piu' stabile prima dell'eliminazione.",
          },
          {
            q: "Quale geometria richiede E2?",
            a: "Il gruppo uscente e il protone devono essere anti-periplanari, su lati opposti del legame.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "oxidation-vs-reduction",
    a: "Oxidation",
    b: "Reduction",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      it: {
        title: "Ossidazione contro Riduzione: la redox spiegata",
        h1: "Ossidazione contro Riduzione nelle reazioni redox",
        description:
          "L'ossidazione e' una perdita di elettroni; la riduzione e' un acquisto di elettroni. Confronta le due meta di ogni reazione redox fianco a fianco.",
        intro:
          "Ossidazione e riduzione avvengono sempre insieme in una reazione redox. La regola serve a mantenere chiara la direzione del flusso degli elettroni.",
        pros_a: [
          "Perdita di elettroni da parte di una specie",
          "Il numero di ossidazione aumenta",
          "Spesso comporta un acquisto di ossigeno",
          "La specie ossidata e' l'agente riducente",
          "Esempio: un metallo che arrugginisce",
        ],
        pros_b: [
          "Acquisto di elettroni da parte di una specie",
          "Il numero di ossidazione diminuisce",
          "Spesso comporta una perdita di ossigeno",
          "La specie ridotta e' l'agente ossidante",
          "Esempio: un minerale metallico che viene fuso",
        ],
        verdict:
          "Ossidazione e riduzione sono due meta dello stesso trasferimento di elettroni. Ogniqualvolta una specie perde elettroni un'altra deve acquistarli, quindi sono inseparabili.",
        faq: [
          {
            q: "Cosa significa che la riduzione e' un acquisto?",
            a: "L'ossidazione e' una perdita e la riduzione un acquisto di elettroni: un modo facile per ricordare la direzione redox.",
          },
          {
            q: "L'ossidazione puo' avvenire senza riduzione?",
            a: "No. Gli elettroni persi da una specie vengono sempre acquistati da un'altra, quindi i due avvengono insieme.",
          },
          {
            q: "Cos'e' un agente ossidante?",
            a: "Una sostanza che causa l'ossidazione di un'altra accettando elettroni, riducendosi essa stessa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "anode-vs-cathode",
    a: "Anode",
    b: "Cathode",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      it: {
        title: "Anodo contro Catodo: gli elettrodi spiegati",
        h1: "Anodo contro Catodo in elettrochimica",
        description:
          "L'ossidazione avviene all'anodo; la riduzione avviene al catodo. Confronta la polarita nelle celle galvaniche ed elettrolitiche.",
        intro:
          "Ogni cella elettrochimica ha due elettrodi. Sapere quale e' quale dipende dalla reazione, non solo da un segno fisso.",
        pros_a: [
          "Elettrodo dove avviene l'ossidazione",
          "Negativo in una cella galvanica",
          "Positivo in una cella elettrolitica",
          "Rilascia elettroni nel circuito",
          "Gli anioni migrano verso di esso",
        ],
        pros_b: [
          "Elettrodo dove avviene la riduzione",
          "Positivo in una cella galvanica",
          "Negativo in una cella elettrolitica",
          "Riceve elettroni dal circuito",
          "I cationi migrano verso di esso",
        ],
        verdict:
          "L'anodo ospita sempre l'ossidazione e il catodo ospita sempre la riduzione. I loro segni di carica si invertono tra celle galvaniche ed elettrolitiche, quindi usa la reazione per identificarli.",
        faq: [
          {
            q: "L'anodo e' sempre negativo?",
            a: "No. E' negativo in una cella galvanica ma positivo in una cella elettrolitica.",
          },
          {
            q: "Come ricordo le reazioni?",
            a: "Ossidazione all'anodo, riduzione al catodo.",
          },
          {
            q: "In quale direzione si muovono i cationi?",
            a: "I cationi si muovono sempre verso il catodo, dove avviene la riduzione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endothermic-vs-exothermic",
    a: "Endothermic",
    b: "Exothermic",
    category: "chemistry",
    emoji_a: "🥶",
    emoji_b: "🔥",
    content: {
      it: {
        title: "Reazioni endotermiche contro esotermiche",
        h1: "Reazioni endotermiche contro esotermiche spiegate",
        description:
          "Le reazioni endotermiche assorbono calore; le reazioni esotermiche rilasciano calore. Confronta diagrammi energetici ed esempi fianco a fianco.",
        intro:
          "Le reazioni o assorbono o cedono energia. Il segno della variazione di entalpia ti dice quale, e i diagrammi energetici lo rendono visivo.",
        pros_a: [
          "Assorbe calore dall'ambiente circostante",
          "La variazione di entalpia e' positiva",
          "I prodotti hanno piu' energia dei reagenti",
          "L'ambiente circostante si raffredda",
          "Esempi: fotosintesi, scioglimento del ghiaccio",
        ],
        pros_b: [
          "Rilascia calore all'ambiente circostante",
          "La variazione di entalpia e' negativa",
          "I prodotti hanno meno energia dei reagenti",
          "L'ambiente circostante si riscalda",
          "Esempi: combustione, neutralizzazione",
        ],
        verdict:
          "Le reazioni endotermiche assorbono energia e risultano fredde; le reazioni esotermiche rilasciano energia e risultano calde. Il segno di ΔH ti dice all'istante quale categoria si applica.",
        faq: [
          {
            q: "In che modo aiuta il segno di ΔH?",
            a: "Un ΔH positivo significa endotermica (calore assorbito); un ΔH negativo significa esotermica (calore rilasciato).",
          },
          {
            q: "Perche' un impacco freddo istantaneo risulta freddo?",
            a: "Usa un processo di dissoluzione endotermico che assorbe calore dalla tua pelle.",
          },
          {
            q: "La combustione e' endotermica o esotermica?",
            a: "La combustione e' fortemente esotermica, rilasciando grandi quantita di calore e luce.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "enthalpy-vs-entropy",
    a: "Enthalpy",
    b: "Entropy",
    category: "chemistry",
    emoji_a: "🌡️",
    emoji_b: "🌀",
    content: {
      it: {
        title: "Entalpia contro Entropia: termodinamica",
        h1: "Entalpia contro Entropia spiegate",
        description:
          "L'entalpia misura il contenuto di calore; l'entropia misura il disordine. Confronta questi due pilastri della termodinamica per lo studio della chimica.",
        intro:
          "Entalpia ed entropia decidono insieme se una reazione e' spontanea. L'energia libera di Gibbs combina entrambe in un'unica previsione.",
        pros_a: [
          "Misura il contenuto totale di calore (H)",
          "La variazione ΔH mostra il calore assorbito o rilasciato",
          "Un ΔH negativo favorisce la spontaneita",
          "Misurata in joule o kJ/mol",
          "Guida le reazioni esotermiche",
        ],
        pros_b: [
          "Misura il disordine o la casualita (S)",
          "La variazione ΔS mostra l'aumento o la diminuzione del disordine",
          "Un ΔS positivo favorisce la spontaneita",
          "Misurata in J/(mol·K)",
          "Tende ad aumentare nell'universo",
        ],
        verdict:
          "L'entalpia traccia il calore mentre l'entropia traccia il disordine. Nessuna delle due da sola predice la spontaneita; l'energia libera di Gibbs, ΔG = ΔH − TΔS, le combina per il verdetto finale.",
        faq: [
          {
            q: "Quale delle due predice la spontaneita?",
            a: "Nessuna da sola. L'energia libera di Gibbs combina entalpia ed entropia: un ΔG negativo significa spontaneo.",
          },
          {
            q: "L'entropia aumenta sempre?",
            a: "L'entropia totale dell'universo aumenta, anche se un sistema locale puo' diminuire in entropia.",
          },
          {
            q: "Quali unita usa ciascuna?",
            a: "L'entalpia usa kJ/mol; l'entropia usa J/(mol·K) perche' include la temperatura.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "catalyst-vs-inhibitor",
    a: "Catalyst",
    b: "Inhibitor",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "🛑",
    content: {
      it: {
        title: "Catalizzatore contro Inibitore: velocita di reazione",
        h1: "Catalizzatore contro Inibitore spiegati",
        description:
          "I catalizzatori accelerano le reazioni; gli inibitori le rallentano. Confronta come ciascuno cambia l'energia di attivazione e la velocita di reazione.",
        intro:
          "Sia i catalizzatori sia gli inibitori influenzano la velocita di reazione senza essere consumati nell'equazione complessiva. Agiscono in direzioni opposte.",
        pros_a: [
          "Accelera la velocita di reazione",
          "Abbassa l'energia di attivazione",
          "Non consumato nella reazione complessiva",
          "Fornisce un percorso alternativo",
          "Esempi: enzimi, platino, ferro",
        ],
        pros_b: [
          "Rallenta la velocita di reazione",
          "Di fatto innalza la barriera energetica",
          "Usato per controllare o fermare le reazioni",
          "Puo' bloccare siti attivi o intermedi",
          "Esempi: conservanti, antiossidanti",
        ],
        verdict:
          "Catalizzatori e inibitori sono strumenti speculari per la velocita di reazione. I catalizzatori aprono una via piu' rapida abbassando l'energia di attivazione; gli inibitori rallentano o fermano una reazione.",
        faq: [
          {
            q: "Un catalizzatore viene consumato?",
            a: "No. Viene rigenerato, quindi non compare nell'equazione complessiva bilanciata.",
          },
          {
            q: "Come fa un catalizzatore ad accelerare una reazione?",
            a: "Offre un percorso alternativo con un'energia di attivazione piu' bassa, quindi piu' collisioni hanno successo.",
          },
          {
            q: "Dove sono utili gli inibitori?",
            a: "Nella conservazione degli alimenti, nella progettazione di farmaci e in ogni processo in cui le reazioni vanno rallentate o fermate.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "galvanic-cell-vs-electrolytic-cell",
    a: "Galvanic cell",
    b: "Electrolytic cell",
    category: "chemistry",
    emoji_a: "🔋",
    emoji_b: "🔌",
    content: {
      it: {
        title: "Cella galvanica contro Cella elettrolitica a confronto",
        h1: "Cella galvanica contro Cella elettrolitica spiegate",
        description:
          "Una cella galvanica produce elettricita da una reazione spontanea; una cella elettrolitica usa l'elettricita per guidarne una. Confronta entrambe.",
        intro:
          "Entrambe le celle elettrochimiche collegano la chimica redox alla corrente elettrica, ma funzionano in direzioni opposte del flusso di energia.",
        pros_a: [
          "Converte energia chimica in elettricita",
          "Esegue una reazione redox spontanea",
          "L'anodo e' negativo, il catodo e' positivo",
          "Alimenta batterie e dispositivi",
          "Esempio: una batteria standard",
        ],
        pros_b: [
          "Usa l'elettricita per guidare una reazione",
          "Forza una reazione redox non spontanea",
          "L'anodo e' positivo, il catodo e' negativo",
          "Usata per la galvanostegia e la raffinazione",
          "Esempio: elettrolisi dell'acqua",
        ],
        verdict:
          "Una cella galvanica rilascia energia da una reazione spontanea, mentre una cella elettrolitica consuma energia per forzarne una non spontanea. Sono processi inversi.",
        faq: [
          {
            q: "Quale cella produce elettricita?",
            a: "La cella galvanica, poiche' la sua reazione spontanea rilascia energia come corrente elettrica.",
          },
          {
            q: "Perche' i segni degli elettrodi sono invertiti?",
            a: "L'energia scorre nella direzione opposta, quindi anodo e catodo scambiano polarita tra i due tipi di cella.",
          },
          {
            q: "A cosa serve l'elettrolisi?",
            a: "Alla galvanostegia, alla raffinazione dei metalli e alla scissione di composti come l'acqua in elementi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrogen-vs-helium",
    a: "Hydrogen",
    b: "Helium",
    category: "chemistry",
    emoji_a: "🎈",
    emoji_b: "🪅",
    content: {
      it: {
        title: "Idrogeno contro Elio: confronto tra elementi",
        h1: "Idrogeno contro Elio spiegati",
        description:
          "L'idrogeno e' un non metallo reattivo; l'elio e' un gas nobile inerte. Confronta i due elementi piu' leggeri fianco a fianco per lo studio.",
        intro:
          "Idrogeno ed elio sono i primi due elementi e i piu' abbondanti nell'universo, eppure la loro chimica non potrebbe essere piu' diversa.",
        pros_a: [
          "Numero atomico 1, un elettrone",
          "Altamente reattivo e infiammabile",
          "Forma composti come l'acqua e gli acidi",
          "Usato come combustibile e nella sintesi dell'ammoniaca",
          "L'elemento piu' abbondante nell'universo",
        ],
        pros_b: [
          "Numero atomico 2, guscio esterno completo",
          "Inerte e non infiammabile",
          "Non forma essenzialmente alcun composto",
          "Usato nei palloncini e nella criogenia",
          "Il secondo elemento piu' abbondante",
        ],
        verdict:
          "L'idrogeno e' leggero e reattivo mentre l'elio e' leggero e inerte. La loro differenza di un elettrone rende uno un combustibile e l'altro un gas di sollevamento sicuro.",
        faq: [
          {
            q: "Perche' l'elio e' piu' sicuro nei palloncini?",
            a: "L'elio e' inerte e non infiammabile, mentre l'idrogeno puo' incendiarsi in modo esplosivo.",
          },
          {
            q: "Quale e' piu' abbondante?",
            a: "L'idrogeno e' l'elemento piu' abbondante nell'universo, seguito dall'elio.",
          },
          {
            q: "Perche' l'elio e' non reattivo?",
            a: "Il suo guscio elettronico esterno e' completo, quindi non ha alcuna tendenza ad acquistare, perdere o condividere elettroni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "carbon-vs-silicon",
    a: "Carbon",
    b: "Silicon",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "🔋",
    content: {
      it: {
        title: "Carbonio contro Silicio: gruppo 14 a confronto",
        h1: "Carbonio contro Silicio spiegati",
        description:
          "Il carbonio costituisce la base della vita; il silicio sta alla base delle rocce e dell'elettronica. Confronta questi due elementi del gruppo 14 fianco a fianco.",
        intro:
          "Carbonio e silicio si trovano nello stesso gruppo e condividono quattro elettroni di valenza, eppure costruiscono mondi enormemente diversi.",
        pros_a: [
          "Numero atomico 6, base della chimica organica",
          "Forma forti e stabili catene carbonio-carbonio",
          "Crea composti diversi tra cui le molecole della vita",
          "Allotropi: diamante, grafite, fullereni",
          "Forma doppi e tripli legami stabili",
        ],
        pros_b: [
          "Numero atomico 14, base della chimica minerale",
          "Forma legami silicio-silicio piu' deboli",
          "Si lega facilmente con l'ossigeno come silicati",
          "Semiconduttore chiave per l'elettronica",
          "Forma raramente doppi legami stabili",
        ],
        verdict:
          "I legami forti e versatili del carbonio permettono la complessita della vita; il silicio preferisce l'ossigeno e alimenta rocce e chip. Stesso gruppo, chimica molto diversa.",
        faq: [
          {
            q: "Perche' il carbonio e' migliore per la vita?",
            a: "Il carbonio forma catene forti e stabili e legami multipli, permettendo l'enorme varieta di molecole di cui la vita ha bisogno.",
          },
          {
            q: "Perche' il silicio e' usato nei chip?",
            a: "Il silicio e' un semiconduttore la cui conducibilita puo' essere regolata con precisione tramite drogaggio.",
          },
          {
            q: "Sono nello stesso gruppo?",
            a: "Si. Entrambi sono nel gruppo 14 e hanno quattro elettroni di valenza.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "metal-vs-nonmetal",
    a: "Metal",
    b: "Nonmetal",
    category: "chemistry",
    emoji_a: "🪙",
    emoji_b: "💨",
    content: {
      it: {
        title: "Metallo contro Non metallo: proprieta degli elementi",
        h1: "Metallo contro Non metallo spiegati",
        description:
          "I metalli sono conduttori lucenti che perdono elettroni; i non metalli sono isolanti opachi che li acquistano. Confronta le caratteristiche fisiche e chimiche.",
        intro:
          "La tavola periodica si divide in metalli e non metalli con alcuni metalloidi nel mezzo. Le loro proprieta contrastanti plasmano tutta la chimica.",
        pros_a: [
          "Lucente, malleabile e duttile",
          "Buon conduttore di calore ed elettricita",
          "Tende a perdere elettroni, forma cationi",
          "Per lo piu' solido a temperatura ambiente",
          "Esempi: ferro, rame, sodio",
        ],
        pros_b: [
          "Opaco e fragile allo stato solido",
          "Cattivo conduttore, di solito un isolante",
          "Tende ad acquistare elettroni, forma anioni",
          "Puo' essere solido, liquido o gassoso",
          "Esempi: ossigeno, zolfo, cloro",
        ],
        verdict:
          "I metalli conducono, brillano e cedono elettroni; i non metalli isolano, appaiono opachi e catturano elettroni. Insieme formano i composti ionici e covalenti della vita quotidiana.",
        faq: [
          {
            q: "Dove sono i metalli nella tavola periodica?",
            a: "I metalli occupano la sinistra e il centro, mentre i non metalli si raggruppano in alto a destra.",
          },
          {
            q: "I metalli acquistano o perdono elettroni?",
            a: "I metalli perdono elettroni per formare cationi positivi, mentre i non metalli li acquistano per formare anioni.",
          },
          {
            q: "Cos'e' un metalloide?",
            a: "Un elemento con proprieta intermedie, come il silicio, situato lungo il confine metallo-non metallo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alkali-metal-vs-alkaline-earth-metal",
    a: "Alkali metal",
    b: "Alkaline earth metal",
    category: "chemistry",
    emoji_a: "1️⃣",
    emoji_b: "2️⃣",
    content: {
      it: {
        title: "Metallo alcalino contro alcalino-terroso a confronto",
        h1: "Metalli alcalini contro metalli alcalino-terrosi",
        description:
          "I metalli alcalini sono del gruppo 1 con un elettrone di valenza; i metalli alcalino-terrosi sono del gruppo 2 con due. Confronta reattivita e ioni.",
        intro:
          "I gruppi 1 e 2 si trovano fianco a fianco nella tavola periodica, entrambi metalli reattivi, ma il loro numero di elettroni di valenza li distingue.",
        pros_a: [
          "Gruppo 1, un elettrone di valenza",
          "Forma ioni +1",
          "Estremamente reattivo, morbido, bassa densita",
          "Reagisce violentemente con l'acqua",
          "Esempi: sodio, potassio, litio",
        ],
        pros_b: [
          "Gruppo 2, due elettroni di valenza",
          "Forma ioni +2",
          "Reattivo ma piu' duro e denso del gruppo 1",
          "Reagisce con l'acqua piu' lentamente",
          "Esempi: magnesio, calcio, bario",
        ],
        verdict:
          "I metalli alcalini perdono un elettrone e reagiscono violentemente; i metalli alcalino-terrosi ne perdono due e sono un po' piu' docili. Entrambi diventano piu' reattivi scendendo lungo il loro gruppo.",
        faq: [
          {
            q: "Quale gruppo e' piu' reattivo?",
            a: "I metalli alcalini sono generalmente piu' reattivi perche' perdere un singolo elettrone e' piu' facile.",
          },
          {
            q: "Quale carica portano i loro ioni?",
            a: "I metalli alcalini formano ioni +1; i metalli alcalino-terrosi formano ioni +2.",
          },
          {
            q: "Perche' conservare i metalli alcalini nell'olio?",
            a: "Reagiscono cosi' rapidamente con l'aria e l'acqua che l'olio li tiene isolati dall'umidita.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "halogen-vs-noble-gas",
    a: "Halogen",
    b: "Noble gas",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "💡",
    content: {
      it: {
        title: "Alogeno contro Gas nobile: gruppo 17 contro 18",
        h1: "Alogeni contro Gas nobili spiegati",
        description:
          "Gli alogeni sono non metalli reattivi del gruppo 17; i gas nobili sono elementi inerti del gruppo 18. Confronta reattivita e gusci elettronici.",
        intro:
          "I gruppi 17 e 18 sono vicini con una chimica opposta. Uno brama un elettrone, l'altro ha gia un guscio completo.",
        pros_a: [
          "Gruppo 17, sette elettroni di valenza",
          "Non metalli altamente reattivi",
          "Acquista un elettrone per formare ioni -1",
          "Forma sali con i metalli (alogenuri)",
          "Esempi: fluoro, cloro, iodio",
        ],
        pros_b: [
          "Gruppo 18, guscio di valenza completo",
          "Inerte e quasi non reattivo",
          "Normalmente non forma ioni",
          "Esiste come atomi singoli e stabili",
          "Esempi: elio, neon, argon",
        ],
        verdict:
          "Agli alogeni manca un elettrone per la stabilita e quindi sono molto reattivi; i gas nobili sono gia completi e quasi inerti. Si trovano a una colonna di distanza per questo motivo.",
        faq: [
          {
            q: "Perche' i gas nobili sono non reattivi?",
            a: "Il loro guscio elettronico esterno e' gia completo, quindi non hanno alcun impulso ad acquistare, perdere o condividere elettroni.",
          },
          {
            q: "Perche' gli alogeni sono cosi' reattivi?",
            a: "Hanno bisogno di un solo elettrone in piu' per riempire il loro guscio, il che li rende avidi di reagire.",
          },
          {
            q: "Quale ione formano gli alogeni?",
            a: "Gli alogeni acquistano un elettrone per formare anioni -1 chiamati alogenuri.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "iron-vs-copper",
    a: "Iron",
    b: "Copper",
    category: "chemistry",
    emoji_a: "🔩",
    emoji_b: "🟤",
    content: {
      it: {
        title: "Ferro contro Rame: metalli di transizione a confronto",
        h1: "Ferro contro Rame spiegati",
        description:
          "Il ferro e' forte e magnetico ma arrugginisce; il rame e' un eccellente conduttore che resiste alla corrosione. Confronta entrambi i metalli di transizione.",
        intro:
          "Ferro e rame sono metalli di transizione di grande impiego. I loro punti di forza diversi li rendono adatti alla costruzione o ai cablaggi elettrici.",
        pros_a: [
          "Simbolo Fe, numero atomico 26",
          "Forte e ferromagnetico",
          "Usato nell'acciaio per la costruzione",
          "Si corrode in ruggine quando esposto all'umidita",
          "Essenziale nell'emoglobina",
        ],
        pros_b: [
          "Simbolo Cu, numero atomico 29",
          "Eccellente conduttore di elettricita e calore",
          "Resiste alla corrosione, forma una patina verde",
          "Usato in cablaggi, tubi e leghe",
          "Superficie naturalmente antimicrobica",
        ],
        verdict:
          "Il ferro fornisce forza e magnetismo per le strutture, mentre il rame fornisce una conducibilita di alto livello per i cablaggi. Il rame resiste meglio alla corrosione; il ferro va protetto dalla ruggine.",
        faq: [
          {
            q: "Quale conduce meglio l'elettricita?",
            a: "Il rame e' un conduttore di gran lunga migliore, ed e' per questo che domina nei cablaggi elettrici.",
          },
          {
            q: "Perche' il ferro arrugginisce ma il rame no?",
            a: "Il ferro forma ossido di ferro sfaldabile, mentre il rame forma una patina verde protettiva che protegge il metallo.",
          },
          {
            q: "Uno dei due e' magnetico?",
            a: "Il ferro e' fortemente ferromagnetico; il rame e' essenzialmente non magnetico.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "gold-vs-silver",
    a: "Gold",
    b: "Silver",
    category: "chemistry",
    emoji_a: "🥇",
    emoji_b: "🥈",
    content: {
      it: {
        title: "Oro contro Argento: metalli preziosi a confronto",
        h1: "Oro contro Argento spiegati",
        description:
          "L'oro e' molto poco reattivo e denso; l'argento e' il miglior conduttore elettrico ma si ossida. Confronta entrambi i metalli preziosi.",
        intro:
          "Oro e argento sono classici metalli preziosi apprezzati per bellezza e rarita, ma il loro comportamento chimico differisce in modi chiave.",
        pros_a: [
          "Simbolo Au, numero atomico 79",
          "Estremamente poco reattivo, non si ossida",
          "Molto denso e altamente malleabile",
          "Usato in gioielleria, elettronica e valuta",
          "Resiste agli acidi tranne l'acqua regia",
        ],
        pros_b: [
          "Simbolo Ag, numero atomico 47",
          "Il miglior conduttore elettrico e termico",
          "Si annerisce con lo zolfo presente nell'aria",
          "Piu' economico e piu' abbondante dell'oro",
          "Usato in gioielleria, specchi e contatti",
        ],
        verdict:
          "L'oro e' il metallo piu' inerte e prezioso, che non si ossida mai, mentre l'argento conduce al meglio ma si scurisce nel tempo. Ciascuno eccelle in ruoli chimici e pratici diversi.",
        faq: [
          {
            q: "Perche' l'argento si ossida ma l'oro no?",
            a: "L'argento reagisce con i composti dello zolfo presenti nell'aria formando solfuro d'argento nero; l'oro e' troppo poco reattivo.",
          },
          {
            q: "Quale conduce meglio l'elettricita?",
            a: "L'argento e' il singolo miglior conduttore di tutti i metalli, leggermente davanti a rame e oro.",
          },
          {
            q: "Cosa dissolve l'oro?",
            a: "L'acqua regia, una miscela di acido nitrico e cloridrico, e' una delle poche cose che dissolve l'oro.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sodium-vs-potassium",
    a: "Sodium",
    b: "Potassium",
    category: "chemistry",
    emoji_a: "🧂",
    emoji_b: "🍌",
    content: {
      it: {
        title: "Sodio contro Potassio: metalli alcalini",
        h1: "Sodio contro Potassio spiegati",
        description:
          "Sodio e potassio sono entrambi metalli alcalini del gruppo 1, ma il potassio e' piu' reattivo. Confronta reattivita e biologia.",
        intro:
          "Sodio e potassio si trovano nello stesso gruppo, entrambi morbidi e reattivi, ma scendere lungo il gruppo cambia il loro comportamento.",
        pros_a: [
          "Simbolo Na, numero atomico 11",
          "Metallo alcalino reattivo del gruppo 1",
          "Reagisce vigorosamente con l'acqua",
          "Ione principale nel sangue e nel liquido extracellulare",
          "Forma il comune sale da cucina, NaCl",
        ],
        pros_b: [
          "Simbolo K, numero atomico 19",
          "Piu' reattivo del sodio",
          "Reagisce in modo ancora piu' violento con l'acqua",
          "Ione principale all'interno delle cellule del corpo",
          "Presente nelle banane e nei fertilizzanti",
        ],
        verdict:
          "Il potassio e' piu' reattivo del sodio perche' il suo elettrone esterno e' piu' lontano dal nucleo e piu' facile da perdere. Entrambi sono elettroliti vitali che si bilanciano a vicenda nel corpo.",
        faq: [
          {
            q: "Perche' il potassio e' piu' reattivo del sodio?",
            a: "Il suo elettrone di valenza e' piu' lontano dal nucleo e trattenuto piu' debolmente, quindi viene perso piu' facilmente.",
          },
          {
            q: "In cosa differiscono nel corpo?",
            a: "Il sodio domina fuori dalle cellule mentre il potassio domina all'interno, e l'equilibrio guida i segnali nervosi.",
          },
          {
            q: "Cosa succede quando ciascuno incontra l'acqua?",
            a: "Entrambi reagiscono rilasciando idrogeno, ma il potassio reagisce piu' violentemente, spesso con fiamma.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "chlorine-vs-fluorine",
    a: "Chlorine",
    b: "Fluorine",
    category: "chemistry",
    emoji_a: "🟢",
    emoji_b: "🦷",
    content: {
      it: {
        title: "Cloro contro Fluoro: alogeni a confronto",
        h1: "Cloro contro Fluoro spiegati",
        description:
          "Il fluoro e' l'alogeno piu' reattivo; il cloro e' un alogeno forte ma meno aggressivo. Confronta reattivita e usi fianco a fianco.",
        intro:
          "Cloro e fluoro sono entrambi alogeni del gruppo 17, ma il fluoro si trova sopra il cloro ed e' ancora piu' reattivo.",
        pros_a: [
          "Simbolo Cl, numero atomico 17",
          "Gas reattivo giallo-verde",
          "Forte ossidante, meno reattivo del fluoro",
          "Usato per disinfettare l'acqua e produrre plastiche",
          "Forma ioni cloruro nei sali",
        ],
        pros_b: [
          "Simbolo F, numero atomico 9",
          "Giallo pallido, il piu' reattivo di tutti gli elementi",
          "L'alogeno ossidante piu' forte",
          "Usato nel dentifricio e nel Teflon",
          "L'elemento piu' elettronegativo",
        ],
        verdict:
          "Il fluoro e' l'elemento piu' reattivo ed elettronegativo, superando di poco il cloro. Il cloro e' comunque un potente ossidante e molto piu' pratico da maneggiare per il trattamento dell'acqua.",
        faq: [
          {
            q: "Quale alogeno e' piu' reattivo?",
            a: "Il fluoro e' il piu' reattivo di tutti gli elementi, piu' del cloro che si trova sotto di esso.",
          },
          {
            q: "Perche' il fluoro e' nel dentifricio?",
            a: "Gli ioni fluoruro rafforzano lo smalto dei denti e aiutano a prevenire le carie.",
          },
          {
            q: "Perche' il cloro pulisce l'acqua?",
            a: "Il cloro e' un forte ossidante che uccide i batteri e altri patogeni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hydrochloric-acid-vs-sulfuric-acid",
    a: "Hydrochloric acid",
    b: "Sulfuric acid",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "⚗️",
    content: {
      it: {
        title: "Acido cloridrico contro solforico a confronto",
        h1: "Acido cloridrico contro Acido solforico",
        description:
          "L'HCl e' un acido forte monoprotico; l'H2SO4 e' un acido forte diprotico e agente disidratante. Confronta entrambi gli acidi di laboratorio fianco a fianco.",
        intro:
          "Acido cloridrico e acido solforico sono due dei piu' comuni acidi forti. Sono entrambi forti, ma il loro numero di protoni e il loro comportamento differiscono.",
        pros_a: [
          "Formula HCl, acido monoprotico",
          "Cede un H+ per molecola",
          "Presente nell'acido gastrico",
          "Volatile, emette fumi nell'aria umida",
          "Usato per pulire e decapare i metalli",
        ],
        pros_b: [
          "Formula H2SO4, acido diprotico",
          "Cede due H+ per molecola",
          "Potente agente disidratante",
          "Non volatile, liquido oleoso",
          "Usato nei fertilizzanti e nelle batterie per auto",
        ],
        verdict:
          "Entrambi sono acidi forti, ma l'acido solforico e' diprotico e un feroce disidratante, mentre l'acido cloridrico e' monoprotico e volatile. L'acido solforico e' il colosso industriale.",
        faq: [
          {
            q: "Quale acido rilascia piu' protoni?",
            a: "L'acido solforico e' diprotico e rilascia due protoni; l'acido cloridrico e' monoprotico con uno.",
          },
          {
            q: "Perche' l'acido solforico e' detto disidratante?",
            a: "Attira fortemente l'acqua e puo' estrarre idrogeno e ossigeno da composti come lo zucchero.",
          },
          {
            q: "Dove si trova l'acido cloridrico in natura?",
            a: "Nel tuo stomaco, dove favorisce la digestione e uccide i microbi ingeriti.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "acetic-acid-vs-citric-acid",
    a: "Acetic acid",
    b: "Citric acid",
    category: "chemistry",
    emoji_a: "🍶",
    emoji_b: "🍋",
    content: {
      it: {
        title: "Acido acetico contro Acido citrico a confronto",
        h1: "Acido acetico contro Acido citrico spiegati",
        description:
          "L'acido acetico e' un acido monoprotico presente nell'aceto; l'acido citrico e' un acido triprotico presente negli agrumi. Confronta questi acidi deboli.",
        intro:
          "Acido acetico e acido citrico sono noti acidi organici deboli presenti nel cibo di tutti i giorni. Le loro strutture e il numero di protoni differiscono.",
        pros_a: [
          "Formula CH3COOH, monoprotico",
          "Ha un gruppo acido carbossilico",
          "Componente principale dell'aceto",
          "Odore e sapore aspri e penetranti",
          "Usato negli alimenti e come solvente",
        ],
        pros_b: [
          "Formula C6H8O7, triprotico",
          "Ha tre gruppi acidi carbossilici",
          "Presente naturalmente in limoni e lime",
          "Polvere cristallina bianca solida",
          "Usato come aromatizzante e conservante",
        ],
        verdict:
          "Entrambi sono acidi organici deboli, ma l'acido citrico e' triprotico con tre gruppi acidi mentre l'acido acetico e' monoprotico con uno. L'acido citrico e' solido; l'acido acetico e' liquido.",
        faq: [
          {
            q: "Quale acido cede piu' protoni?",
            a: "L'acido citrico e' triprotico e puo' cedere tre protoni; l'acido acetico e' monoprotico con uno.",
          },
          {
            q: "Sono acidi forti o deboli?",
            a: "Entrambi sono acidi deboli che si ionizzano solo parzialmente in acqua.",
          },
          {
            q: "Dove si trovano?",
            a: "L'acido acetico e' l'acido dell'aceto; l'acido citrico e' presente naturalmente negli agrumi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "glucose-vs-fructose",
    a: "Glucose",
    b: "Fructose",
    category: "chemistry",
    emoji_a: "🍬",
    emoji_b: "🍯",
    content: {
      it: {
        title: "Glucosio contro Fruttosio: zuccheri a confronto",
        h1: "Glucosio contro Fruttosio spiegati",
        description:
          "Glucosio e fruttosio condividono la formula C6H12O6 ma differiscono nella struttura. Confronta questi due zuccheri semplici fianco a fianco.",
        intro:
          "Glucosio e fruttosio sono entrambi monosaccaridi con la stessa formula molecolare. Sono isomeri strutturali con forme ad anello diverse.",
        pros_a: [
          "Formula C6H12O6, un aldoesoso",
          "Forma un anello a sei membri",
          "Contiene un gruppo funzionale aldeidico",
          "Principale zucchero ematico e fonte di energia",
          "Meno dolce del fruttosio",
        ],
        pros_b: [
          "Formula C6H12O6, un chetoesoso",
          "Forma un anello a cinque membri",
          "Contiene un gruppo funzionale chetonico",
          "Presente nella frutta e nel miele",
          "Lo zucchero naturale piu' dolce",
        ],
        verdict:
          "Glucosio e fruttosio sono isomeri strutturali: stessa formula, gruppi funzionali diversi. Il glucosio e' uno zucchero ad anello aldoso, il fruttosio un chetoso, e il fruttosio ha un sapore piu' dolce.",
        faq: [
          {
            q: "Hanno la stessa formula?",
            a: "Si, entrambi sono C6H12O6, il che li rende isomeri strutturali con disposizioni diverse.",
          },
          {
            q: "Quale e' piu' dolce?",
            a: "Il fruttosio e' il piu' dolce dei comuni zuccheri naturali.",
          },
          {
            q: "Quale gruppo funzionale ha ciascuno?",
            a: "Il glucosio ha un gruppo aldeidico (aldoso); il fruttosio ha un gruppo chetonico (chetoso).",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "fructose-vs-sucrose",
    a: "Fructose",
    b: "Sucrose",
    category: "chemistry",
    emoji_a: "🍯",
    emoji_b: "🍚",
    content: {
      it: {
        title: "Fruttosio contro Saccarosio: confronto tra zuccheri",
        h1: "Fruttosio contro Saccarosio spiegati",
        description:
          "Il fruttosio e' un singolo monosaccaride; il saccarosio e' un disaccaride di glucosio piu' fruttosio. Confronta questi zuccheri fianco a fianco.",
        intro:
          "Fruttosio e saccarosio differiscono per dimensioni: uno e' uno zucchero semplice, l'altro e' costruito da due unita unite.",
        pros_a: [
          "Un monosaccaride (singola unita di zucchero)",
          "Formula C6H12O6",
          "Presente nella frutta e nel miele",
          "Assorbito direttamente senza scomposizione",
          "Sapore molto dolce",
        ],
        pros_b: [
          "Un disaccaride (due unita di zucchero)",
          "Formula C12H22O11",
          "Fatto di glucosio piu' fruttosio uniti",
          "Comune zucchero da tavola da canna o barbabietola",
          "Deve essere idrolizzato prima dell'assorbimento",
        ],
        verdict:
          "Il fruttosio e' una singola unita di zucchero mentre il saccarosio e' costituito da due unita legate insieme. Il saccarosio deve essere scisso in glucosio e fruttosio dagli enzimi prima che il corpo possa usarlo.",
        faq: [
          {
            q: "Il saccarosio e' fatto di fruttosio?",
            a: "In parte. Il saccarosio e' un disaccaride di un'unita di glucosio unita a un'unita di fruttosio.",
          },
          {
            q: "Quale viene assorbito piu' rapidamente?",
            a: "Il fruttosio viene assorbito direttamente, mentre il saccarosio deve prima essere idrolizzato nelle sue due parti.",
          },
          {
            q: "Quale enzima scompone il saccarosio?",
            a: "La saccarasi scinde il saccarosio in glucosio e fruttosio nell'intestino tenue.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "starch-vs-cellulose",
    a: "Starch",
    b: "Cellulose",
    category: "chemistry",
    emoji_a: "🥔",
    emoji_b: "🌿",
    content: {
      it: {
        title: "Amido contro Cellulosa: polisaccaridi",
        h1: "Amido contro Cellulosa spiegati",
        description:
          "Amido e cellulosa sono entrambi polimeri del glucosio, ma differiscono per il tipo di legame. Confronta questi due polisaccaridi chiave.",
        intro:
          "Amido e cellulosa sono entrambi costruiti dal glucosio, eppure uno e' una riserva alimentare digeribile e l'altro e' fibra strutturale.",
        pros_a: [
          "Polimero del glucosio con legami alfa",
          "Riserva di energia nelle piante",
          "Digeribile dagli enzimi umani",
          "Forme ramificata (amilopectina) e a spirale (amilosio)",
          "Presente in patate, riso e pane",
        ],
        pros_b: [
          "Polimero del glucosio con legami beta",
          "Sostegno strutturale nelle pareti delle cellule vegetali",
          "Indigeribile dagli esseri umani (fibra alimentare)",
          "Catene lunghe, diritte e robuste",
          "Presente in legno, cotone e carta",
        ],
        verdict:
          "Amido e cellulosa sono entrambi catene di glucosio, ma il legame alfa o beta decide tutto. I legami alfa producono una riserva di energia digeribile; i legami beta producono fibra resistente.",
        faq: [
          {
            q: "Perche' gli esseri umani non possono digerire la cellulosa?",
            a: "Gli esseri umani sono privi dell'enzima per rompere i suoi legami beta-glucosio, quindi la cellulosa passa come fibra.",
          },
          {
            q: "Qual e' la differenza strutturale chiave?",
            a: "L'amido usa legami glicosidici alfa; la cellulosa usa legami beta, che producono catene piu' diritte e robuste.",
          },
          {
            q: "Sono fatti dallo stesso monomero?",
            a: "Si, entrambi sono polimeri del glucosio, ma legati in modo diverso.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "amino-acid-vs-peptide",
    a: "Amino acid",
    b: "Peptide",
    category: "chemistry",
    emoji_a: "🔤",
    emoji_b: "🔗",
    content: {
      it: {
        title: "Amminoacido contro Peptide: costruire le proteine",
        h1: "Amminoacido contro Peptide spiegati",
        description:
          "Gli amminoacidi sono singoli monomeri; i peptidi sono brevi catene di amminoacidi uniti da legami peptidici. Confronta entrambi.",
        intro:
          "Gli amminoacidi sono l'alfabeto delle proteine, e i peptidi sono brevi parole scritte a partire da essi. Dimensioni e legame li distinguono.",
        pros_a: [
          "Una singola unita monomerica",
          "Ha un gruppo amminico e uno carbossilico",
          "20 tipi standard costruiscono tutte le proteine",
          "Catena laterale R distinta per ogni amminoacido",
          "Esempi: glicina, alanina, lisina",
        ],
        pros_b: [
          "Una breve catena di amminoacidi",
          "Unita unite da legami peptidici",
          "Formato per condensazione, rilasciando acqua",
          "Piu' corto di una proteina completa",
          "Esempi: dipeptidi, oligopeptidi",
        ],
        verdict:
          "Un amminoacido e' un mattone; un peptide e' costituito da diversi uniti da legami peptidici. Collega abbastanza peptidi e ottieni un polipeptide, poi una proteina funzionale.",
        faq: [
          {
            q: "Come si formano i peptidi?",
            a: "Gli amminoacidi si uniscono mediante reazioni di condensazione che formano legami peptidici e rilasciano acqua.",
          },
          {
            q: "Quando un peptide diventa una proteina?",
            a: "Quando una catena polipeptidica e' abbastanza lunga e si ripiega in una forma 3D funzionale.",
          },
          {
            q: "Quanti amminoacidi standard esistono?",
            a: "Esistono 20 amminoacidi standard che si combinano per costruire tutte le proteine.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "protein-vs-enzyme",
    a: "Protein",
    b: "Enzyme",
    category: "chemistry",
    emoji_a: "🥩",
    emoji_b: "✂️",
    content: {
      it: {
        title: "Proteina contro Enzima: qual e' la differenza",
        h1: "Proteina contro Enzima spiegati",
        description:
          "Tutti gli enzimi sono proteine, ma non tutte le proteine sono enzimi. Confronta l'ampia classe delle proteine con gli enzimi catalitici.",
        intro:
          "Proteina e' una categoria ampia; enzima e' un sottoinsieme specializzato. Comprendere la relazione chiarisce la biologia e la biochimica.",
        pros_a: [
          "Polimero di amminoacidi",
          "Svolge molti ruoli: struttura, trasporto, difesa",
          "Si ripiega in una specifica forma 3D",
          "Include i tipi strutturali e di deposito",
          "Esempi: collagene, emoglobina, anticorpi",
        ],
        pros_b: [
          "Una proteina che agisce come catalizzatore biologico",
          "Accelera le reazioni senza essere consumata",
          "Ha un sito attivo che lega il substrato",
          "Altamente specifico per la sua reazione",
          "Esempi: amilasi, lipasi, catalasi",
        ],
        verdict:
          "Ogni enzima e' una proteina, ma le proteine fanno molto piu' della catalisi. Gli enzimi sono gli specialisti catalitici; la classe delle proteine copre anche struttura, trasporto e difesa.",
        faq: [
          {
            q: "Tutte le proteine sono enzimi?",
            a: "No. Tutti gli enzimi sono proteine, ma molte proteine svolgono invece ruoli strutturali, di trasporto o di difesa.",
          },
          {
            q: "Cosa rende speciali gli enzimi?",
            a: "Il loro sito attivo consente loro di catalizzare una reazione specifica restando immutati.",
          },
          {
            q: "Un enzima puo' essere riutilizzato?",
            a: "Si. Un enzima non viene consumato, quindi puo' catalizzare la stessa reazione molte volte.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "saturated-fat-vs-unsaturated-fat",
    a: "Saturated fat",
    b: "Unsaturated fat",
    category: "chemistry",
    emoji_a: "🧈",
    emoji_b: "🫒",
    content: {
      it: {
        title: "Grasso saturo contro insaturo a confronto",
        h1: "Grasso saturo contro Grasso insaturo",
        description:
          "I grassi saturi non hanno doppi legami C=C; i grassi insaturi ne hanno uno o piu'. Confronta struttura e stato fisico.",
        intro:
          "I grassi differiscono per i legami nelle loro catene di acidi grassi. Quella singola caratteristica chimica decide se un grasso e' solido o liquido.",
        pros_a: [
          "Nessun doppio legame carbonio-carbonio",
          "Catene diritte che si impacchettano strettamente",
          "Solido a temperatura ambiente",
          "Punto di fusione piu' alto",
          "Presente nel burro e nel grasso animale",
        ],
        pros_b: [
          "Uno o piu' doppi legami C=C",
          "Catene piegate che si impacchettano lentamente",
          "Liquido a temperatura ambiente",
          "Punto di fusione piu' basso",
          "Presente negli oli di oliva e di girasole",
        ],
        verdict:
          "I grassi saturi sono privi di doppi legami, diritti e solidi; i grassi insaturi hanno pieghe dovute ai doppi legami e restano liquidi. Il doppio legame e' tutta la differenza.",
        faq: [
          {
            q: "Perche' i grassi insaturi sono liquidi?",
            a: "I doppi legami creano pieghe nelle catene, quindi le molecole non possono impacchettarsi strettamente e il grasso resta liquido.",
          },
          {
            q: "Cosa significa saturo qui?",
            a: "Significa che la catena di carbonio e' satura di idrogeno, ne contiene il massimo possibile, quindi non restano doppi legami.",
          },
          {
            q: "Cos'e' un grasso polinsaturo?",
            a: "Un grasso insaturo con piu' di un doppio legame carbonio-carbonio nella sua catena.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ester-vs-ether",
    a: "Ester",
    b: "Ether",
    category: "chemistry",
    emoji_a: "🍓",
    emoji_b: "💤",
    content: {
      it: {
        title: "Estere contro Etere: gruppi funzionali",
        h1: "Estere contro Etere spiegati",
        description:
          "Gli esteri hanno un carbonile accanto a un ossigeno; gli eteri hanno un semplice ponte di ossigeno. Confronta questi due gruppi funzionali.",
        intro:
          "Esteri ed eteri contengono entrambi un atomo di ossigeno legato al carbonio, ma la struttura circostante li fa comportare in modo molto diverso.",
        pros_a: [
          "Gruppo funzionale RCOOR'",
          "Ha un carbonile C=O accanto a un ossigeno",
          "Spesso ha odori dolci e fruttati",
          "Formato da acido piu' alcol",
          "Esempi: acetato di etile, grassi, fragranze",
        ],
        pros_b: [
          "Gruppo funzionale R-O-R'",
          "Solo un ossigeno che fa da ponte tra due carboni",
          "Relativamente poco reattivo e stabile",
          "Spesso usato come solvente",
          "Esempi: etere dietilico, anisolo",
        ],
        verdict:
          "Gli esteri portano un carbonile accanto all'ossigeno e hanno un odore fruttato; gli eteri sono un semplice ponte di ossigeno e agiscono come solventi inerti. Il carbonile e' la caratteristica decisiva.",
        faq: [
          {
            q: "Come distinguo un estere da un etere?",
            a: "Un estere ha un carbonile C=O accanto al suo ossigeno; un etere non ha alcun carbonile.",
          },
          {
            q: "Perche' gli esteri hanno un odore fruttato?",
            a: "Molti esteri volatili hanno gradevoli aromi fruttati e sono usati negli aromatizzanti e nei profumi.",
          },
          {
            q: "Perche' gli eteri sono buoni solventi?",
            a: "Gli eteri sono piuttosto poco reattivi e dissolvono molti composti organici senza interferire.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "aldehyde-vs-ketone",
    a: "Aldehyde",
    b: "Ketone",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "💅",
    content: {
      it: {
        title: "Aldeide contro Chetone: composti carbonilici",
        h1: "Aldeide contro Chetone spiegati",
        description:
          "Le aldeidi hanno un carbonile all'estremita della catena; i chetoni lo hanno all'interno della catena. Confronta questi gruppi carbonilici per lo studio.",
        intro:
          "Aldeidi e chetoni presentano entrambi il gruppo carbonilico, ma la posizione del carbonile ne cambia la reattivita.",
        pros_a: [
          "Gruppo carbonilico all'estremita della catena di carbonio",
          "Ha almeno un idrogeno sul carbonio carbonilico",
          "Facilmente ossidato ad acidi carbossilici",
          "Test di Tollens e di Fehling positivi",
          "Esempi: formaldeide, acetaldeide",
        ],
        pros_b: [
          "Gruppo carbonilico all'interno della catena di carbonio",
          "Due gruppi carboniosi sul carbonio carbonilico",
          "Resistente all'ossidazione blanda",
          "Test di Tollens e di Fehling negativi",
          "Esempi: acetone, butanone",
        ],
        verdict:
          "Le aldeidi portano il carbonile all'estremita della catena e si ossidano facilmente; i chetoni lo seppelliscono a meta catena e resistono all'ossidazione. Il test di Tollens li distingue con uno specchio d'argento.",
        faq: [
          {
            q: "Come li distinguo in laboratorio?",
            a: "Il reattivo di Tollens da' uno specchio d'argento con le aldeidi ma non con i chetoni.",
          },
          {
            q: "Perche' le aldeidi sono piu' facili da ossidare?",
            a: "L'idrogeno sul loro carbonio carbonilico puo' essere rimosso durante l'ossidazione ad acido carbossilico.",
          },
          {
            q: "Cosa hanno in comune?",
            a: "Entrambi contengono il gruppo carbonilico, un carbonio con doppio legame all'ossigeno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "alcohol-vs-phenol",
    a: "Alcohol",
    b: "Phenol",
    category: "chemistry",
    emoji_a: "🍷",
    emoji_b: "🧫",
    content: {
      it: {
        title: "Alcol contro Fenolo: composti idrossilici",
        h1: "Alcol contro Fenolo spiegati",
        description:
          "Gli alcoli hanno un OH su un carbonio saturo; i fenoli hanno un OH direttamente su un anello benzenico. Confronta acidita e reazioni.",
        intro:
          "Alcoli e fenoli portano entrambi un gruppo idrossilico, ma il punto in cui quell'OH si attacca cambia drasticamente la loro acidita.",
        pros_a: [
          "Idrossile OH su un carbonio sp3",
          "Molto debolmente acido, quasi neutro",
          "Non reagisce con NaOH",
          "Puo' essere ossidato ad aldeidi o acidi",
          "Esempi: etanolo, metanolo, propanolo",
        ],
        pros_b: [
          "Idrossile OH legato a un anello benzenico",
          "Significativamente piu' acido degli alcoli",
          "Reagisce con NaOH per formare sali",
          "L'anello stabilizza la carica negativa",
          "Esempi: fenolo, cresolo, catecolo",
        ],
        verdict:
          "Entrambi hanno un gruppo OH, ma i fenoli sono molto piu' acidi perche' l'anello benzenico stabilizza l'anione risultante. Solo i fenoli reagiscono con l'idrossido di sodio.",
        faq: [
          {
            q: "Perche' i fenoli sono piu' acidi degli alcoli?",
            a: "L'anello aromatico delocalizza la carica negativa dell'anione fenossido, stabilizzandolo.",
          },
          {
            q: "Gli alcoli reagiscono con NaOH?",
            a: "No. Gli alcoli sono troppo debolmente acidi, mentre i fenoli reagiscono con l'idrossido di sodio.",
          },
          {
            q: "Cosa hanno in comune?",
            a: "Entrambi contengono un gruppo funzionale idrossile OH legato al carbonio.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "amine-vs-amide",
    a: "Amine",
    b: "Amide",
    category: "chemistry",
    emoji_a: "🐟",
    emoji_b: "🧵",
    content: {
      it: {
        title: "Ammina contro Ammide: gruppi funzionali azotati",
        h1: "Ammina contro Ammide spiegati",
        description:
          "Le ammine hanno azoto su una catena di carbonio; le ammidi hanno azoto accanto a un carbonile. Confronta basicita e reattivita.",
        intro:
          "Ammine e ammidi contengono entrambe azoto, ma un singolo gruppo carbonilico vicino ne cambia completamente il comportamento.",
        pros_a: [
          "Azoto legato solo a carbonio e idrogeno",
          "Basica, accetta facilmente protoni",
          "Spesso ha un odore di pesce",
          "Derivata dall'ammoniaca",
          "Esempi: metilammina, anilina",
        ],
        pros_b: [
          "Azoto legato accanto a un carbonile C=O",
          "Quasi neutra, molto debolmente basica",
          "Stabile e poco reattiva",
          "Forma il legame peptidico nelle proteine",
          "Esempi: acetammide, nylon, urea",
        ],
        verdict:
          "Le ammine sono composti azotati basici, mentre le ammidi hanno un carbonile adiacente che prosciuga la basicita dell'azoto. Il gruppo ammidico costruisce anche proteine e nylon.",
        faq: [
          {
            q: "Perche' le ammidi sono meno basiche delle ammine?",
            a: "Il carbonile vicino attira il doppietto solitario dell'azoto in risonanza, quindi non puo' accettare protoni facilmente.",
          },
          {
            q: "Dove compare il gruppo ammidico in biologia?",
            a: "Forma i legami peptidici che collegano gli amminoacidi nelle proteine.",
          },
          {
            q: "Come posso individuare un'ammide?",
            a: "Cerca un carbonile C=O legato direttamente a un atomo di azoto.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "distillation-vs-sublimation",
    a: "Distillation",
    b: "Sublimation",
    category: "chemistry",
    emoji_a: "⚗️",
    emoji_b: "🌫️",
    content: {
      it: {
        title: "Distillazione contro Sublimazione: separazione",
        h1: "Distillazione contro Sublimazione spiegate",
        description:
          "La distillazione separa i liquidi per punto di ebollizione; la sublimazione separa un solido che passa direttamente a vapore. Confronta entrambe.",
        intro:
          "Sono entrambe tecniche di separazione e purificazione, ma sfruttano diversi cambiamenti di stato per isolare una sostanza.",
        pros_a: [
          "Separa i liquidi usando il punto di ebollizione",
          "Il liquido viene vaporizzato poi condensato",
          "Passa da liquido a gas a liquido",
          "Usata per purificare o scindere miscele",
          "Esempi: separare l'etanolo dall'acqua",
        ],
        pros_b: [
          "Separa un solido che vaporizza direttamente",
          "Il solido passa direttamente a gas, saltando il liquido",
          "Il vapore si rideposita poi a solido",
          "Usata quando un solido sublima in modo pulito",
          "Esempi: purificare lo iodio o il ghiaccio secco",
        ],
        verdict:
          "La distillazione fa passare una sostanza attraverso la fase liquida, mentre la sublimazione salta del tutto il liquido. Scegli la sublimazione solo quando un componente passa direttamente da solido a gas.",
        faq: [
          {
            q: "Quale cambiamento di stato usa la sublimazione?",
            a: "Il solido si trasforma direttamente in gas senza mai diventare liquido.",
          },
          {
            q: "Quando la distillazione e' la scelta migliore?",
            a: "Quando si separano liquidi o un soluto disciolto da un liquido sfruttando i punti di ebollizione.",
          },
          {
            q: "Fai un esempio di sublimazione.",
            a: "Il ghiaccio secco (anidride carbonica solida) sublima direttamente in gas a temperatura ambiente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "evaporation-vs-condensation",
    a: "Evaporation",
    b: "Condensation",
    category: "chemistry",
    emoji_a: "☀️",
    emoji_b: "💧",
    content: {
      it: {
        title: "Evaporazione contro Condensazione: cambiamenti di stato",
        h1: "Evaporazione contro Condensazione spiegate",
        description:
          "L'evaporazione trasforma il liquido in vapore; la condensazione trasforma il vapore di nuovo in liquido. Confronta questi cambiamenti di stato opposti.",
        intro:
          "Evaporazione e condensazione sono processi inversi che spostano la materia tra liquido e gas. Insieme guidano il ciclo dell'acqua.",
        pros_a: [
          "Il liquido si trasforma in gas",
          "Assorbe calore (endotermica)",
          "Avviene alla superficie del liquido",
          "Accelerata dal calore e dalla superficie",
          "Esempio: una pozzanghera che si asciuga al sole",
        ],
        pros_b: [
          "Il gas si ritrasforma in liquido",
          "Rilascia calore (esotermica)",
          "Avviene quando il vapore si raffredda",
          "Accelerata dal raffreddamento e dalle superfici",
          "Esempio: la rugiada che si forma sull'erba",
        ],
        verdict:
          "L'evaporazione assorbe calore per trasformare il liquido in vapore; la condensazione rilascia calore per trasformare il vapore di nuovo in liquido. Sono esattamente opposte e alimentano il ciclo dell'acqua.",
        faq: [
          {
            q: "Quale processo assorbe calore?",
            a: "L'evaporazione e' endotermica, assorbe calore, mentre la condensazione e' esotermica, lo rilascia.",
          },
          {
            q: "Perche' sudare ti rinfresca?",
            a: "Il sudore che evapora assorbe calore dalla tua pelle, abbassando la temperatura corporea.",
          },
          {
            q: "Che rapporto hanno con il ciclo dell'acqua?",
            a: "L'evaporazione solleva l'acqua nell'aria e la condensazione forma nuvole e pioggia.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "filtration-vs-centrifugation",
    a: "Filtration",
    b: "Centrifugation",
    category: "chemistry",
    emoji_a: "☕",
    emoji_b: "🌀",
    content: {
      it: {
        title: "Filtrazione contro Centrifugazione a confronto",
        h1: "Filtrazione contro Centrifugazione spiegate",
        description:
          "La filtrazione separa per dimensione delle particelle attraverso una barriera; la centrifugazione separa per densita usando la rotazione. Confronta entrambi i metodi.",
        intro:
          "Entrambe separano miscele, specialmente solidi da liquidi, ma si basano su principi fisici diversi.",
        pros_a: [
          "Separa le particelle per dimensione",
          "Usa una barriera porosa o un filtro",
          "Il solido viene intrappolato, il liquido passa attraverso",
          "Semplice, economica e ampiamente usata",
          "Esempio: filtrare la sabbia dall'acqua",
        ],
        pros_b: [
          "Separa i componenti per densita",
          "Usa una rotazione rapida per creare una forza",
          "Il materiale piu' denso si muove verso l'esterno",
          "Efficace per particelle fini o microscopiche",
          "Esempio: sedimentare le cellule del sangue",
        ],
        verdict:
          "La filtrazione setaccia una miscela per dimensione delle particelle, mentre la centrifugazione la fa ruotare per smistare in base alla densita. La centrifugazione gestisce le particelle fini che la semplice filtrazione non puo'.",
        faq: [
          {
            q: "Quando la centrifugazione e' migliore della filtrazione?",
            a: "Per particelle molto fini o microscopiche che passano attraverso i filtri ordinari.",
          },
          {
            q: "Su cosa si basa un filtro?",
            a: "La dimensione dei pori: le particelle piu' grandi dei pori restano indietro mentre quelle piu' piccole e i liquidi passano.",
          },
          {
            q: "Quale proprieta usa la centrifugazione?",
            a: "Le differenze di densita, poiche' la rotazione spinge il materiale piu' denso verso l'esterno piu' velocemente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mole-vs-atom",
    a: "Mole",
    b: "Atom",
    category: "chemistry",
    emoji_a: "🔢",
    emoji_b: "⚛️",
    content: {
      it: {
        title: "Mole contro Atomo: contare in chimica",
        h1: "Mole contro Atomo spiegati",
        description:
          "Un atomo e' una singola particella; una mole e' un enorme conteggio fisso di particelle. Confronta queste due scale per lo studio della chimica.",
        intro:
          "Un atomo e' la piu' piccola unita di un elemento, e la mole e' il modo del chimico di contare gli atomi in quantita utilizzabili.",
        pros_a: [
          "Un'unita di conteggio, come una dozzina",
          "Equivale a 6,022×10²³ particelle",
          "Collega la massa atomica ai grammi",
          "Usata in tutti i calcoli di stechiometria",
          "Definita dal numero di Avogadro",
        ],
        pros_b: [
          "La piu' piccola unita di un elemento",
          "Una singola particella individuale",
          "Ha un nucleo ed elettroni",
          "Troppo piccolo per essere pesato da solo",
          "Mattone di base di tutta la materia",
        ],
        verdict:
          "Un atomo e' una particella; una mole ne e' 6,022×10²³. La mole fa da ponte tra l'invisibile mondo atomico e i grammi misurabili in laboratorio.",
        faq: [
          {
            q: "Quanti atomi ci sono in una mole?",
            a: "Una mole contiene il numero di Avogadro di particelle, circa 6,022×10²³.",
          },
          {
            q: "Perche' i chimici usano le moli?",
            a: "Gli atomi sono troppo piccoli per essere contati uno per uno, quindi la mole li raggruppa in quantita pesabili.",
          },
          {
            q: "Una mole conta sempre atomi?",
            a: "No. Una mole puo' contare qualsiasi particella, comprese molecole, ioni o elettroni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "molarity-vs-molality",
    a: "Molarity",
    b: "Molality",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "⚖️",
    content: {
      it: {
        title: "Molarita contro Molalita: unita di concentrazione",
        h1: "Molarita contro Molalita spiegate",
        description:
          "La molarita usa il volume della soluzione; la molalita usa la massa del solvente. Confronta queste unita di concentrazione per lo studio della chimica.",
        intro:
          "Molarita e molalita misurano entrambe la concentrazione, ma una dipende dal volume e l'altra dalla massa.",
        pros_a: [
          "Moli di soluto per litro di soluzione",
          "Simbolo M, unita mol/L",
          "Facile da misurare con la vetreria volumetrica",
          "Cambia con la temperatura",
          "L'unita di concentrazione piu' comune",
        ],
        pros_b: [
          "Moli di soluto per chilogrammo di solvente",
          "Simbolo m, unita mol/kg",
          "Basata sulla massa, non sul volume",
          "Indipendente dalla temperatura",
          "Usata per i calcoli delle proprieta colligative",
        ],
        verdict:
          "La molarita e' comoda e basata sul volume ma cambia con la temperatura; la molalita e' basata sulla massa e stabile con la temperatura. Usa la molalita per un lavoro preciso sulle proprieta colligative.",
        faq: [
          {
            q: "Perche' la molarita cambia con la temperatura?",
            a: "Il volume si espande o si contrae con la temperatura, quindi il rapporto moli per litro cambia.",
          },
          {
            q: "Quando dovrei usare la molalita?",
            a: "Per le proprieta colligative come l'innalzamento del punto di ebollizione, dove la stabilita con la temperatura conta.",
          },
          {
            q: "Qual e' la differenza al denominatore?",
            a: "La molarita divide per litri di soluzione; la molalita divide per chilogrammi di solvente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "isotope-vs-isomer",
    a: "Isotope",
    b: "Isomer",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "🧩",
    content: {
      it: {
        title: "Isotopo contro Isomero: una confusione comune",
        h1: "Isotopo contro Isomero spiegati",
        description:
          "Gli isotopi sono atomi di un elemento con un numero diverso di neutroni; gli isomeri sono composti con la stessa formula. Confronta entrambi.",
        intro:
          "Isotopo e isomero suonano simili ma descrivono cose diverse: uno riguarda gli atomi, l'altro le molecole.",
        pros_a: [
          "Atomi dello stesso elemento",
          "Stessi protoni, neutroni diversi",
          "Numeri di massa diversi",
          "Comportamento chimico identico",
          "Esempi: carbonio-12 e carbonio-14",
        ],
        pros_b: [
          "Composti con la stessa formula molecolare",
          "Disposizione diversa degli atomi",
          "Proprieta chimiche o fisiche diverse",
          "Include isomeri strutturali e stereoisomeri",
          "Esempi: butano e isobutano",
        ],
        verdict:
          "Gli isotopi sono varianti di un singolo atomo che differiscono nei neutroni; gli isomeri sono molecole diverse che condividono una formula. Non confondere i concetti atomico e molecolare.",
        faq: [
          {
            q: "Cosa hanno in comune gli isotopi?",
            a: "Sono atomi dello stesso elemento con un numero identico di protoni ma un diverso numero di neutroni.",
          },
          {
            q: "Gli isomeri si comportano allo stesso modo?",
            a: "No. Gli isomeri condividono una formula ma differiscono nella struttura, quindi le loro proprieta di solito differiscono.",
          },
          {
            q: "La differenza e' atomica o molecolare?",
            a: "Gli isotopi sono un concetto a livello atomico; gli isomeri sono un concetto a livello molecolare.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "allotrope-vs-isotope",
    a: "Allotrope",
    b: "Isotope",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "⚛️",
    content: {
      it: {
        title: "Allotropo contro Isotopo: varianti degli elementi",
        h1: "Allotropo contro Isotopo spiegati",
        description:
          "Gli allotropi sono forme strutturali di un solo elemento; gli isotopi sono atomi che differiscono nel numero di neutroni. Confronta queste varianti degli elementi.",
        intro:
          "Entrambi i termini descrivono forme di un singolo elemento, ma gli allotropi variano nella struttura mentre gli isotopi variano dentro il nucleo.",
        pros_a: [
          "Diverse forme strutturali di un solo elemento",
          "Stessi atomi disposti in modo diverso",
          "Proprieta fisiche diverse",
          "Un concetto di legame e struttura",
          "Esempi: diamante e grafite",
        ],
        pros_b: [
          "Atomi di un elemento con neutroni diversi",
          "Stessi protoni, numeri di massa diversi",
          "Comportamento chimico quasi identico",
          "Un concetto nucleare",
          "Esempi: carbonio-12 e carbonio-14",
        ],
        verdict:
          "Gli allotropi differiscono per come gli atomi sono legati e disposti; gli isotopi differiscono nei loro nuclei. Uno riguarda la struttura, l'altro il numero di neutroni.",
        faq: [
          {
            q: "Diamante e grafite sono isotopi?",
            a: "No, sono allotropi del carbonio, che differiscono nella disposizione atomica, non nei nuclei.",
          },
          {
            q: "Cosa cambia tra gli isotopi?",
            a: "Solo il numero di neutroni, e di conseguenza la massa, mentre i protoni restano gli stessi.",
          },
          {
            q: "Gli allotropi hanno proprieta diverse?",
            a: "Si. Il diamante e' duro e trasparente mentre la grafite e' morbida e scura, nonostante siano entrambi carbonio.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "diamond-vs-graphite",
    a: "Diamond",
    b: "Graphite",
    category: "chemistry",
    emoji_a: "💎",
    emoji_b: "✏️",
    content: {
      it: {
        title: "Diamante contro Grafite: allotropi del carbonio",
        h1: "Diamante contro Grafite spiegati",
        description:
          "Diamante e grafite sono entrambi carbonio puro, ma la loro struttura ne rende uno duro e uno morbido. Confronta questi allotropi.",
        intro:
          "Diamante e grafite sono allotropi del carbonio, fatti degli stessi atomi ma disposti in modo completamente diverso.",
        pros_a: [
          "Ogni carbonio legato ad altri quattro",
          "Rigida rete tridimensionale tetraedrica",
          "Il piu' duro materiale naturale conosciuto",
          "Isolante elettrico",
          "Trasparente e con un alto indice di rifrazione",
        ],
        pros_b: [
          "Ogni carbonio legato ad altri tre",
          "Strati impilati di fogli esagonali",
          "Morbida e scivolosa, gli strati scivolano via",
          "Conduce l'elettricita",
          "Opaca, grigio scuro e usata nelle matite",
        ],
        verdict:
          "Diamante e grafite sono lo stesso elemento con proprieta opposte. Il legame 3D del diamante lo rende duro e isolante; il legame a strati della grafite la rende morbida e conduttiva.",
        faq: [
          {
            q: "Come possono essere entrambi carbonio puro?",
            a: "Sono allotropi: atomi di carbonio identici legati in disposizioni geometriche diverse.",
          },
          {
            q: "Perche' la grafite conduce l'elettricita?",
            a: "Ogni carbonio ha un elettrone delocalizzato di scorta libero di muoversi all'interno degli strati.",
          },
          {
            q: "Perche' la grafite e' scivolosa?",
            a: "Le forze deboli tra i suoi strati permettono loro di scivolare facilmente l'uno sull'altro.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "methane-vs-ethane",
    a: "Methane",
    b: "Ethane",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🛢️",
    content: {
      it: {
        title: "Metano contro Etano: gli alcani piu' piccoli",
        h1: "Metano contro Etano spiegati",
        description:
          "Il metano ha un carbonio; l'etano ne ha due. Confronta i due alcani piu' piccoli per formula, punto di ebollizione e usi.",
        intro:
          "Metano ed etano sono i primi due membri della serie degli alcani, che differiscono per un singolo atomo di carbonio.",
        pros_a: [
          "Formula CH4, un atomo di carbonio",
          "L'alcano e l'idrocarburo piu' semplice",
          "Componente principale del gas naturale",
          "Il punto di ebollizione piu' basso degli alcani",
          "Potente gas serra",
        ],
        pros_b: [
          "Formula C2H6, due atomi di carbonio",
          "Secondo membro della serie degli alcani",
          "Presente nel gas naturale come componente minore",
          "Punto di ebollizione leggermente piu' alto del metano",
          "Usato per produrre l'etilene mediante cracking",
        ],
        verdict:
          "Metano ed etano differiscono di un carbonio, il piu' piccolo passo possibile in una serie omologa. Aggiungere quel carbonio innalza il punto di ebollizione e la massa della molecola.",
        faq: [
          {
            q: "Perche' l'etano bolle a una temperatura piu' alta?",
            a: "La sua molecola piu' grande ha forze di dispersione piu' forti, che richiedono piu' energia per vaporizzare.",
          },
          {
            q: "Sono nella stessa serie?",
            a: "Si. Entrambi sono alcani, membri consecutivi della stessa serie omologa.",
          },
          {
            q: "Da dove provengono?",
            a: "Entrambi sono presenti nel gas naturale, con il metano come componente dominante.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "benzene-vs-toluene",
    a: "Benzene",
    b: "Toluene",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "🎨",
    content: {
      it: {
        title: "Benzene contro Toluene: composti aromatici",
        h1: "Benzene contro Toluene spiegati",
        description:
          "Il benzene e' l'anello aromatico capostipite; il toluene e' benzene con un gruppo metilico. Confronta questi due solventi aromatici.",
        intro:
          "Benzene e toluene sono entrambi idrocarburi aromatici. Il toluene e' semplicemente benzene con un gruppo metilico attaccato.",
        pros_a: [
          "Formula C6H6, il piu' semplice anello aromatico",
          "Anello puro delocalizzato a sei carboni",
          "Cancerogeno noto per l'uomo",
          "Molecola planare ad alta simmetria",
          "Usato come precursore industriale",
        ],
        pros_b: [
          "Formula C7H8, benzene piu' un gruppo metilico",
          "Il gruppo metilico rende l'anello piu' reattivo",
          "Meno tossico del benzene",
          "Solvente comune e ampiamente usato",
          "Usato per produrre il TNT e altre sostanze chimiche",
        ],
        verdict:
          "Il toluene e' benzene con un sostituente metilico, il che lo rende meno tossico e un solvente piu' pratico. Il benzene resta l'anello aromatico fondamentale ma e' un cancerogeno.",
        faq: [
          {
            q: "In che modo il toluene differisce dal benzene?",
            a: "Il toluene e' benzene con un idrogeno sostituito da un gruppo metilico, dando formula C7H8.",
          },
          {
            q: "Quale e' piu' sicuro da usare?",
            a: "Il toluene e' considerevolmente meno tossico del benzene, che e' un cancerogeno noto.",
          },
          {
            q: "Perche' il gruppo metilico e' importante?",
            a: "Attiva l'anello, rendendo il toluene piu' reattivo verso la sostituzione elettrofila.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solute-vs-solvent",
    a: "Solute",
    b: "Solvent",
    category: "chemistry",
    emoji_a: "🧂",
    emoji_b: "💧",
    content: {
      it: {
        title: "Soluto contro Solvente: le parti di una soluzione",
        h1: "Soluto contro Solvente spiegati",
        description:
          "Il soluto e' cio' che si dissolve; il solvente e' cio' che fa dissolvere. Confronta le due parti di ogni soluzione.",
        intro:
          "Ogni soluzione ha due parti: un soluto e un solvente. Sapere quale e' quale e' l'inizio della chimica delle soluzioni.",
        pros_a: [
          "La sostanza che viene disciolta",
          "Di solito presente nella quantita minore",
          "Puo' essere un solido, un liquido o un gas",
          "Si disperde uniformemente nel solvente",
          "Esempio: il sale nell'acqua salata",
        ],
        pros_b: [
          "La sostanza che fa dissolvere",
          "Di solito presente nella quantita maggiore",
          "Il piu' delle volte un liquido come l'acqua",
          "Determina lo stato della soluzione",
          "Esempio: l'acqua nell'acqua salata",
        ],
        verdict:
          "Il soluto si dissolve e il solvente fa dissolvere. Insieme formano una soluzione omogenea, con il solvente che di solito e' il componente piu' abbondante.",
        faq: [
          {
            q: "Quale dei due e' di solito piu' abbondante?",
            a: "Il solvente e' normalmente il componente presente nella quantita maggiore.",
          },
          {
            q: "Il soluto puo' essere un gas?",
            a: "Si. Nelle bevande gassate, l'anidride carbonica gassosa e' un soluto disciolto nell'acqua liquida.",
          },
          {
            q: "Qual e' il solvente universale?",
            a: "L'acqua e' chiamata il solvente universale perche' dissolve cosi' tante sostanze.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "element-vs-compound",
    a: "Element",
    b: "Compound",
    category: "chemistry",
    emoji_a: "🔶",
    emoji_b: "🔷",
    content: {
      it: {
        title: "Elemento contro Composto: sostanze pure",
        h1: "Elemento contro Composto spiegati",
        description:
          "Un elemento e' un solo tipo di atomo; un composto e' formato da due o piu' elementi legati chimicamente. Confronta queste sostanze pure.",
        intro:
          "Elementi e composti sono entrambi sostanze pure, ma solo uno puo' essere scomposto in qualcosa di piu' semplice.",
        pros_a: [
          "Fatto di un solo tipo di atomo",
          "Non puo' essere scomposto chimicamente",
          "Elencato nella tavola periodica",
          "Esempi: ossigeno, oro, carbonio",
          "Circa 118 elementi conosciuti",
        ],
        pros_b: [
          "Due o piu' elementi legati chimicamente",
          "Puo' essere scomposto negli elementi",
          "Ha proprieta diverse dai suoi elementi",
          "Rapporto fisso di atomi secondo la formula",
          "Esempi: acqua, anidride carbonica, sale",
        ],
        verdict:
          "Un elemento e' la sostanza pura piu' semplice e non puo' essere scisso chimicamente; un composto e' formato da elementi legati in un rapporto fisso che puo' essere nuovamente scomposto.",
        faq: [
          {
            q: "Un composto puo' essere scisso negli elementi?",
            a: "Si. Un composto puo' essere decomposto chimicamente negli elementi che lo costituiscono.",
          },
          {
            q: "I composti conservano le proprieta dei loro elementi?",
            a: "No. Un composto ha di solito proprieta piuttosto diverse dagli elementi che contiene.",
          },
          {
            q: "Quanti elementi esistono?",
            a: "Circa 118 elementi sono attualmente riconosciuti nella tavola periodica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "mixture-vs-compound",
    a: "Mixture",
    b: "Compound",
    category: "chemistry",
    emoji_a: "🥣",
    emoji_b: "🔷",
    content: {
      it: {
        title: "Miscela contro Composto: differenze chiave",
        h1: "Miscela contro Composto spiegati",
        description:
          "Le miscele combinano le sostanze fisicamente; i composti le legano chimicamente. Confronta la composizione e il modo in cui ciascuno viene separato.",
        intro:
          "Entrambi contengono piu' di una sostanza, ma una miscela e' una combinazione fisica mentre un composto e' un'unione chimica.",
        pros_a: [
          "Sostanze combinate fisicamente, non legate",
          "Proporzioni variabili",
          "I componenti mantengono le proprie proprieta",
          "Separata con metodi fisici",
          "Esempi: aria, insalata, acqua salata",
        ],
        pros_b: [
          "Elementi legati chimicamente insieme",
          "Proporzioni fisse secondo la formula",
          "Nuove proprieta diverse dai componenti",
          "Separato solo per reazione chimica",
          "Esempi: acqua, sale, anidride carbonica",
        ],
        verdict:
          "Una miscela e' una combinazione fisica con rapporti variabili che puo' essere separata facilmente; un composto e' un legame chimico con un rapporto fisso che necessita di una reazione per essere rotto.",
        faq: [
          {
            q: "Come separo una miscela?",
            a: "Con metodi fisici come filtrare, distillare o far evaporare, senza bisogno di alcuna reazione chimica.",
          },
          {
            q: "Un composto ha proporzioni fisse?",
            a: "Si. Un composto ha sempre elementi in un rapporto fisso stabilito dalla sua formula chimica.",
          },
          {
            q: "L'aria e' una miscela o un composto?",
            a: "L'aria e' una miscela di gas che mantengono le proprie proprieta e possono variare in proporzione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atom-vs-ion",
    a: "Atom",
    b: "Ion",
    category: "chemistry",
    emoji_a: "⚛️",
    emoji_b: "⚡",
    content: {
      it: {
        title: "Atomo contro Ione: carica e struttura",
        h1: "Atomo contro Ione spiegati",
        description:
          "Un atomo e' elettricamente neutro; uno ione porta una carica per aver acquistato o perso elettroni. Confronta queste due particelle.",
        intro:
          "Un atomo diventa uno ione quando acquista o perde elettroni. La variazione nel numero di elettroni e' tutta la differenza.",
        pros_a: [
          "Elettricamente neutro nel complesso",
          "Numero uguale di protoni ed elettroni",
          "L'unita di base di un elemento",
          "Stabile nel suo stato fondamentale",
          "Esempio: un atomo di sodio neutro",
        ],
        pros_b: [
          "Porta una carica elettrica netta",
          "Protoni ed elettroni in numero diseguale",
          "Formato acquistando o perdendo elettroni",
          "Il catione e' positivo, l'anione e' negativo",
          "Esempio: lo ione sodio Na+",
        ],
        verdict:
          "Un atomo e' neutro con cariche bilanciate; uno ione e' carico perche' ha perso o acquistato elettroni. Il numero di protoni non cambia mai, solo gli elettroni.",
        faq: [
          {
            q: "Come fa un atomo a diventare uno ione?",
            a: "Acquistando elettroni per diventare negativo o perdendoli per diventare positivo.",
          },
          {
            q: "Il numero di protoni cambia?",
            a: "No. Solo gli elettroni vengono acquistati o persi; il numero di protoni resta lo stesso.",
          },
          {
            q: "Cos'e' un catione rispetto a un anione?",
            a: "Un catione e' uno ione carico positivamente; un anione e' uno ione carico negativamente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "cation-vs-anion",
    a: "Cation",
    b: "Anion",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      it: {
        title: "Catione contro Anione: ioni positivi contro negativi",
        h1: "Catione contro Anione spiegati",
        description:
          "Un catione e' uno ione positivo che ha perso elettroni; un anione e' uno ione negativo che li ha acquistati. Confronta queste particelle cariche.",
        intro:
          "Gli ioni esistono in due cariche. Se un atomo perde o acquista elettroni decide se diventa un catione o un anione.",
        pros_a: [
          "Ione carico positivamente",
          "Formato perdendo elettroni",
          "Piu' protoni che elettroni",
          "Di solito formato dai metalli",
          "Esempi: Na+, Ca2+, Al3+",
        ],
        pros_b: [
          "Ione carico negativamente",
          "Formato acquistando elettroni",
          "Piu' elettroni che protoni",
          "Di solito formato dai non metalli",
          "Esempi: Cl-, O2-, S2-",
        ],
        verdict:
          "I cationi sono ioni positivi che derivano dalla perdita di elettroni, tipicamente metalli; gli anioni sono ioni negativi che derivano dall'acquisto di elettroni, tipicamente non metalli. Le cariche opposte si attraggono formando composti ionici.",
        faq: [
          {
            q: "Come ricordo la differenza?",
            a: "Un catione e' positivo, e gli anioni sono negativi; i metalli formano cationi, i non metalli formano anioni.",
          },
          {
            q: "In quale direzione si muovono gli ioni in un campo?",
            a: "I cationi si muovono verso il catodo; gli anioni si muovono verso l'anodo.",
          },
          {
            q: "Cosa tiene insieme un composto ionico?",
            a: "L'attrazione elettrostatica tra cationi e anioni di carica opposta.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "reversible-vs-irreversible-reaction",
    a: "Reversible reaction",
    b: "Irreversible reaction",
    category: "chemistry",
    emoji_a: "🔄",
    emoji_b: "➡️",
    content: {
      it: {
        title: "Reazione reversibile contro irreversibile",
        h1: "Reazioni reversibili contro irreversibili spiegate",
        description:
          "Le reazioni reversibili possono procedere in entrambe le direzioni fino all'equilibrio; quelle irreversibili vanno a completamento. Confronta questi tipi di reazione.",
        intro:
          "Le reazioni differiscono per direzione. Alcune possono procedere all'indietro e raggiungere un equilibrio, mentre altre procedono solo in un senso.",
        pros_a: [
          "Puo' procedere in entrambe le direzioni",
          "Raggiunge un equilibrio dinamico",
          "I prodotti possono riformare i reagenti",
          "Indicata con una doppia freccia",
          "Esempi: processo Haber, esterificazione",
        ],
        pros_b: [
          "Procede in una sola direzione",
          "Va essenzialmente a completamento",
          "I prodotti non riformano i reagenti",
          "Indicata con una singola freccia",
          "Esempi: combustione, neutralizzazione",
        ],
        verdict:
          "Le reazioni reversibili si stabilizzano a un equilibrio in cui avvengono entrambe le direzioni; le reazioni irreversibili procedono a completamento. La notazione della freccia, doppia o singola, segnala quale e' quale.",
        faq: [
          {
            q: "Cos'e' l'equilibrio?",
            a: "Uno stato in una reazione reversibile in cui le velocita diretta e inversa sono uguali e le concentrazioni restano costanti.",
          },
          {
            q: "Come viene indicata ciascuna in un'equazione?",
            a: "Una reazione reversibile usa una doppia freccia; una irreversibile usa una singola freccia.",
          },
          {
            q: "La combustione e' reversibile?",
            a: "No. La combustione va a completamento ed e' trattata come una reazione irreversibile.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "crystalline-vs-amorphous-solid",
    a: "Crystalline solid",
    b: "Amorphous solid",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "🪟",
    content: {
      it: {
        title: "Solido cristallino contro amorfo a confronto",
        h1: "Solido cristallino contro amorfo spiegato",
        description:
          "I solidi cristallini hanno strutture ordinate e ripetute; i solidi amorfi sono privi di ordine a lungo raggio. Confronta questi tipi di solido.",
        intro:
          "I solidi si dividono in cristallini e amorfi a seconda che le loro particelle siano disposte in uno schema regolare.",
        pros_a: [
          "Particelle in un reticolo ordinato e ripetuto",
          "Punto di fusione netto e definito",
          "Ha spesso facce piatte e una sfaldatura pulita",
          "Proprieta anisotrope",
          "Esempi: sale, diamante, quarzo",
        ],
        pros_b: [
          "Particelle disposte in modo casuale",
          "Si ammorbidisce in un intervallo di temperatura",
          "Si rompe con superfici irregolari",
          "Proprieta isotrope",
          "Esempi: vetro, gomma, plastica",
        ],
        verdict:
          "I solidi cristallini hanno reticoli ordinati e punti di fusione netti; i solidi amorfi sono disordinati e si ammorbidiscono gradualmente. La disposizione interna decide il loro comportamento.",
        faq: [
          {
            q: "Perche' il vetro non ha un punto di fusione netto?",
            a: "Il vetro e' amorfo, quindi la sua struttura disordinata si ammorbidisce gradualmente in un intervallo di temperatura.",
          },
          {
            q: "Cosa significa anisotropo?",
            a: "Le proprieta variano con la direzione, una caratteristica dei solidi cristallini ordinati.",
          },
          {
            q: "La gomma e' cristallina o amorfa?",
            a: "La gomma e' un solido amorfo con una disposizione di particelle disordinata e casuale.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-vs-endothermic-process",
    a: "Exothermic process",
    b: "Endothermic process",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "❄️",
    content: {
      it: {
        title: "Processo esotermico contro endotermico",
        h1: "Processi esotermici contro endotermici spiegati",
        description:
          "I processi esotermici rilasciano energia; quelli endotermici la assorbono. Confronta il flusso di energia nei cambiamenti fisici e chimici.",
        intro:
          "L'energia scorre durante ogni cambiamento fisico e chimico. La direzione di quel flusso definisce i processi esotermici ed endotermici.",
        pros_a: [
          "Rilascia energia all'ambiente circostante",
          "L'ambiente circostante si riscalda",
          "L'energia dei prodotti e' piu' bassa",
          "Spesso risulta caldo al tatto",
          "Esempi: congelamento, condensazione, combustione",
        ],
        pros_b: [
          "Assorbe energia dall'ambiente circostante",
          "L'ambiente circostante si raffredda",
          "L'energia dei prodotti e' piu' alta",
          "Spesso risulta freddo al tatto",
          "Esempi: fusione, ebollizione, evaporazione",
        ],
        verdict:
          "I processi esotermici cedono energia e riscaldano l'ambiente circostante; i processi endotermici assorbono energia e lo raffreddano. La direzione del flusso di energia e' il fattore decisivo.",
        faq: [
          {
            q: "La fusione e' esotermica o endotermica?",
            a: "La fusione e' endotermica perche' assorbe energia per rompere la struttura solida.",
          },
          {
            q: "Perche' il congelamento rilascia calore?",
            a: "Mentre le particelle si bloccano in un solido, rilasciano l'energia che possedevano allo stato liquido.",
          },
          {
            q: "Un processo esotermico risulta caldo?",
            a: "Di solito si', perche' rilascia energia come calore nell'ambiente circostante.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "solid-vs-liquid",
    a: "Solid",
    b: "Liquid",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "💧",
    content: {
      it: {
        title: "Solido contro Liquido: gli stati della materia",
        h1: "Solido contro Liquido spiegati",
        description:
          "I solidi mantengono forma e volume fissi; i liquidi mantengono il volume ma scorrono per adattarsi a un contenitore. Confronta questi stati della materia.",
        intro:
          "Solidi e liquidi sono due dei principali stati della materia, che differiscono per come le loro particelle sono disposte e per come si muovono.",
        pros_a: [
          "Forma fissa e volume fisso",
          "Particelle strettamente impacchettate, vibrano sul posto",
          "Forti forze intermolecolari",
          "Non puo' essere compresso facilmente",
          "Esempi: ghiaccio, ferro, legno",
        ],
        pros_b: [
          "Volume fisso ma assume la forma del contenitore",
          "Particelle vicine ma libere di scorrere",
          "Forze intermolecolari moderate",
          "Scorre e puo' essere versato",
          "Esempi: acqua, olio, mercurio",
        ],
        verdict:
          "I solidi mantengono sia la forma sia il volume perche' le loro particelle sono bloccate al loro posto; i liquidi mantengono il volume ma scorrono perche' le particelle possono scivolare l'una accanto all'altra.",
        faq: [
          {
            q: "Perche' i liquidi possono scorrere ma i solidi no?",
            a: "Le particelle di un liquido possono scivolare l'una accanto all'altra, mentre le particelle di un solido vibrano solo in posizioni fisse.",
          },
          {
            q: "I liquidi hanno un volume fisso?",
            a: "Si. I liquidi mantengono un volume fisso ma assumono la forma del loro contenitore.",
          },
          {
            q: "I solidi possono essere compressi?",
            a: "A malapena. Le loro particelle strettamente impacchettate lasciano quasi nessuno spazio per comprimere.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "physical-change-vs-chemical-change",
    a: "Physical change",
    b: "Chemical change",
    category: "chemistry",
    emoji_a: "🧊",
    emoji_b: "🧨",
    content: {
      it: {
        title: "Cambiamento fisico contro chimico a confronto",
        h1: "Cambiamento fisico contro Cambiamento chimico spiegati",
        description:
          "I cambiamenti fisici alterano la forma senza nuove sostanze; i cambiamenti chimici creano nuove sostanze. Confronta con esempi chiari.",
        intro:
          "I cambiamenti della materia sono o fisici o chimici. Il test e' se si forma una nuova sostanza con nuove proprieta.",
        pros_a: [
          "Nessuna nuova sostanza viene formata",
          "Cambiano solo forma, stato o aspetto",
          "Di solito facilmente reversibile",
          "Stessa composizione chimica prima e dopo",
          "Esempi: scioglimento del ghiaccio, tagliare la carta",
        ],
        pros_b: [
          "Si formano una o piu' nuove sostanze",
          "I legami chimici si rompono e si formano",
          "Di solito difficile da invertire",
          "Spesso segnalato da gas, calore o cambiamento di colore",
          "Esempi: bruciare il legno, arrugginimento del ferro",
        ],
        verdict:
          "Un cambiamento fisico riorganizza la materia senza creare nulla di nuovo; un cambiamento chimico produce nuove sostanze con nuove proprieta. Cerca segni come gas, calore o colore.",
        faq: [
          {
            q: "Come individuo un cambiamento chimico?",
            a: "Osserva nuove sostanze, cambiamento di colore, bolle di gas, luce o un notevole cambiamento di energia.",
          },
          {
            q: "Sciogliere lo zucchero e' un cambiamento chimico?",
            a: "No. Sciogliere lo zucchero e' un cambiamento fisico perche' non si forma alcuna nuova sostanza.",
          },
          {
            q: "I cambiamenti fisici sono reversibili?",
            a: "Di solito si', poiche' la sostanza mantiene la stessa composizione per tutto il processo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "homogeneous-vs-heterogeneous-mixture",
    a: "Homogeneous mixture",
    b: "Heterogeneous mixture",
    category: "chemistry",
    emoji_a: "🥤",
    emoji_b: "🥗",
    content: {
      it: {
        title: "Miscela omogenea contro eterogenea",
        h1: "Miscela omogenea contro eterogenea spiegata",
        description:
          "Le miscele omogenee appaiono uniformi dappertutto; le miscele eterogenee hanno parti distinte visibili. Confronta queste miscele.",
        intro:
          "Le miscele si dividono in tipi omogenei ed eterogenei in base a quanto uniformemente sono distribuiti i loro componenti.",
        pros_a: [
          "Composizione uniforme dappertutto",
          "Componenti non visibilmente distinti",
          "Una sola fase visibile",
          "Chiamata anche soluzione",
          "Esempi: acqua salata, aria, ottone",
        ],
        pros_b: [
          "Composizione non uniforme",
          "I componenti sono visibilmente distinti",
          "Due o piu' fasi visibili",
          "Le parti spesso possono essere prelevate fisicamente",
          "Esempi: insalata, sabbia e acqua, granito",
        ],
        verdict:
          "Una miscela omogenea appare uguale dappertutto, come una vera soluzione; una miscela eterogenea ha parti visibilmente separate. L'uniformita e' il test decisivo.",
        faq: [
          {
            q: "L'acqua salata e' omogenea?",
            a: "Si. L'acqua salata e' una miscela omogenea con composizione uniforme dappertutto.",
          },
          {
            q: "Cosa rende una miscela eterogenea?",
            a: "Componenti visibilmente distinti o piu' di una fase che puoi vedere o separare.",
          },
          {
            q: "L'aria e' una miscela di quale tipo?",
            a: "L'aria e' una miscela omogenea di gas che appare uniforme.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "proton-vs-neutron",
    a: "Proton",
    b: "Neutron",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "⚪",
    content: {
      it: {
        title: "Protone contro Neutrone: particelle del nucleo",
        h1: "Protone contro Neutrone spiegati",
        description:
          "I protoni portano carica positiva e definiscono l'elemento; i neutroni sono neutri e aggiungono massa. Confronta queste particelle nucleari.",
        intro:
          "Protoni e neutroni vivono entrambi nel nucleo, ma solo uno porta una carica e determina l'identita di un atomo.",
        pros_a: [
          "Porta una carica elettrica positiva",
          "Il numero definisce l'elemento (numero atomico)",
          "Massa di circa 1 unita di massa atomica",
          "Si trova nel nucleo",
          "Determina l'identita chimica",
        ],
        pros_b: [
          "Non ha carica elettrica (neutro)",
          "Il numero puo' variare, creando isotopi",
          "Massa di circa 1 unita di massa atomica",
          "Si trova nel nucleo",
          "Aggiunge massa e stabilita nucleare",
        ],
        verdict:
          "I protoni stabiliscono l'identita e la carica di un atomo, mentre i neutroni aggiungono massa e stabilizzano il nucleo. Cambiare i protoni cambia l'elemento; cambiare i neutroni cambia l'isotopo.",
        faq: [
          {
            q: "Quale particella definisce l'elemento?",
            a: "Il protone, poiche' il numero di protoni e' uguale al numero atomico.",
          },
          {
            q: "Cosa succede se cambia il numero di neutroni?",
            a: "L'atomo diventa un isotopo diverso dello stesso elemento.",
          },
          {
            q: "Hanno entrambi una carica?",
            a: "No. I protoni sono positivi, ma i neutroni non portano alcuna carica.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "proton-vs-electron",
    a: "Proton",
    b: "Electron",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      it: {
        title: "Protone contro Elettrone: carica e massa",
        h1: "Protone contro Elettrone spiegati",
        description:
          "I protoni sono pesanti particelle positive del nucleo; gli elettroni sono leggere particelle negative negli orbitali. Confronta queste particelle.",
        intro:
          "Protoni ed elettroni portano cariche opposte e vivono in parti diverse dell'atomo, plasmandone la struttura e la chimica.",
        pros_a: [
          "Carica elettrica positiva",
          "Situato nel nucleo",
          "Relativamente pesante, circa 1 uma",
          "Il numero stabilisce l'identita dell'elemento",
          "Stabile e fortemente legato",
        ],
        pros_b: [
          "Carica elettrica negativa",
          "Situato negli orbitali attorno al nucleo",
          "Molto leggero, circa 1/1836 di un protone",
          "Il numero governa il legame chimico",
          "Puo' essere acquistato, perso o condiviso",
        ],
        verdict:
          "I protoni sono pesanti e positivi nel nucleo; gli elettroni sono leggeri e negativi negli orbitali. I protoni fissano l'identita, mentre gli elettroni guidano il legame chimico.",
        faq: [
          {
            q: "Quale e' piu' pesante?",
            a: "Il protone, che e' all'incirca 1836 volte piu' massiccio di un elettrone.",
          },
          {
            q: "Quale particella controlla il legame?",
            a: "Gli elettroni, poiche' i legami chimici si formano acquistandoli, perdendoli o condividendoli.",
          },
          {
            q: "Dove si trovano gli elettroni?",
            a: "Negli orbitali, regioni di probabilita che circondano il nucleo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "kinetics-vs-thermodynamics",
    a: "Kinetics",
    b: "Thermodynamics",
    category: "chemistry",
    emoji_a: "⏱️",
    emoji_b: "🌡️",
    content: {
      it: {
        title: "Cinetica contro Termodinamica nelle reazioni",
        h1: "Cinetica contro Termodinamica spiegate",
        description:
          "La cinetica studia quanto velocemente procede una reazione; la termodinamica studia se puo' avvenire. Confronta questi due punti di vista.",
        intro:
          "Cinetica e termodinamica rispondono a domande diverse su una reazione: quanto velocemente contro se e' favorevole.",
        pros_a: [
          "Studia la velocita di reazione",
          "Riguarda l'energia di attivazione e il percorso",
          "Influenzata da catalizzatori e temperatura",
          "Risponde a 'quanto velocemente' procede una reazione",
          "La velocita puo' essere lenta anche se favorevole",
        ],
        pros_b: [
          "Studia l'energia e la fattibilita",
          "Riguarda entalpia, entropia ed energia libera",
          "Predice la posizione dell'equilibrio",
          "Risponde a 'se' una reazione puo' avvenire",
          "Non dice nulla sulla velocita di reazione",
        ],
        verdict:
          "La termodinamica ti dice se una reazione e' possibile; la cinetica ti dice quanto velocemente vi arrivera. Una reazione favorevole puo' comunque essere troppo lenta da osservare.",
        faq: [
          {
            q: "Una reazione favorevole puo' essere lenta?",
            a: "Si. La termodinamica puo' favorirla, ma la cinetica puo' renderla estremamente lenta senza un catalizzatore.",
          },
          {
            q: "Su cosa agisce un catalizzatore?",
            a: "Un catalizzatore cambia la cinetica accelerando la velocita, non la termodinamica ne' l'equilibrio finale.",
          },
          {
            q: "Quale predice la posizione dell'equilibrio?",
            a: "La termodinamica, attraverso l'energia libera, predice dove si trova l'equilibrio.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "empirical-formula-vs-molecular-formula",
    a: "Empirical formula",
    b: "Molecular formula",
    category: "chemistry",
    emoji_a: "➗",
    emoji_b: "🧮",
    content: {
      it: {
        title: "Formula empirica contro molecolare a confronto",
        h1: "Formula empirica contro Formula molecolare",
        description:
          "Una formula empirica mostra il rapporto piu' semplice tra gli atomi; una formula molecolare mostra il conteggio reale degli atomi. Confronta entrambe.",
        intro:
          "Le formule chimiche esistono in due forme. Una da' il rapporto piu' semplice, l'altra da' il vero numero di atomi.",
        pros_a: [
          "Mostra il rapporto in numeri interi piu' semplice",
          "Ridotta ai minimi termini",
          "Trovata dalla composizione percentuale",
          "Uguale per composti correlati",
          "Esempio: CH per il benzene",
        ],
        pros_b: [
          "Mostra il numero reale di atomi",
          "Un multiplo intero della formula empirica",
          "Trovata usando la massa molare",
          "Unica per il composto specifico",
          "Esempio: C6H6 per il benzene",
        ],
        verdict:
          "La formula empirica da' il rapporto piu' semplice; la formula molecolare da' il conteggio reale. Moltiplica la formula empirica per un numero intero, trovato dalla massa molare, per ottenere quella molecolare.",
        faq: [
          {
            q: "Come ottengo la formula molecolare?",
            a: "Trova la formula empirica, poi moltiplicala per la massa molare divisa per la massa empirica.",
          },
          {
            q: "Possono essere uguali?",
            a: "Si. Per l'acqua, sia la formula empirica sia quella molecolare sono H2O.",
          },
          {
            q: "Da dove deriva la formula empirica?",
            a: "Si calcola dalla composizione percentuale in massa di ciascun elemento.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-reaction-vs-combustion",
    a: "Exothermic reaction",
    b: "Combustion",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🔥",
    content: {
      it: {
        title: "Reazione esotermica contro Combustione a confronto",
        h1: "Reazione esotermica contro Combustione spiegate",
        description:
          "Ogni combustione e' esotermica, ma le reazioni esotermiche sono una classe piu' ampia. Confronta la categoria generale con la combustione.",
        intro:
          "La combustione e' un tipo specifico di reazione esotermica. Comprendere la relazione chiarisce la chimica che rilascia energia.",
        pros_a: [
          "Qualsiasi reazione che rilascia energia",
          "Ampia categoria di reazioni",
          "Include la neutralizzazione e la respirazione",
          "Variazione di entalpia negativa",
          "Non richiede ossigeno",
        ],
        pros_b: [
          "Una reazione esotermica specifica",
          "Reazione di un combustibile con l'ossigeno",
          "Produce calore e di solito luce",
          "Spesso forma anidride carbonica e acqua",
          "Esempi: bruciare legno, gas o carburante",
        ],
        verdict:
          "La combustione e' un tipo di reazione esotermica, che richiede un combustibile e ossigeno. Ogni combustione rilascia energia, ma molte reazioni esotermiche non hanno bisogno di alcun ossigeno.",
        faq: [
          {
            q: "Ogni combustione e' esotermica?",
            a: "Si. La combustione rilascia sempre energia, il che la rende un tipo di reazione esotermica.",
          },
          {
            q: "Ogni reazione esotermica e' una combustione?",
            a: "No. La neutralizzazione e la respirazione rilasciano energia senza essere combustione.",
          },
          {
            q: "Di cosa ha bisogno la combustione?",
            a: "La combustione richiede un combustibile e ossigeno, oltre a calore sufficiente per iniziare.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "concentrated-vs-dilute",
    a: "Concentrated",
    b: "Dilute",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "💦",
    content: {
      it: {
        title: "Soluzione concentrata contro diluita a confronto",
        h1: "Soluzione concentrata contro diluita spiegata",
        description:
          "Una soluzione concentrata ha molto soluto per volume; una diluita ne ha poco. Confronta queste descrizioni della concentrazione.",
        intro:
          "Concentrata e diluita descrivono quanto soluto e' presente in una soluzione, un confronto relativo piuttosto che un valore fisso.",
        pros_a: [
          "Grande quantita di soluto per unita di volume",
          "Valore di concentrazione alto",
          "Meno solvente rispetto al soluto",
          "Appare spesso piu' scura o piu' viscosa",
          "Resa diluita aggiungendo altro solvente",
        ],
        pros_b: [
          "Piccola quantita di soluto per unita di volume",
          "Valore di concentrazione basso",
          "Piu' solvente rispetto al soluto",
          "Appare spesso piu' chiara o piu' fluida",
          "Resa concentrata facendo evaporare il solvente",
        ],
        verdict:
          "Concentrata e diluita sono termini relativi che descrivono la quantita di soluto per volume. Aggiungere solvente diluisce una soluzione; rimuovere solvente la concentra.",
        faq: [
          {
            q: "Come diluisco una soluzione?",
            a: "Aggiungi altro solvente, il che abbassa la quantita di soluto per unita di volume.",
          },
          {
            q: "Concentrato e' lo stesso di forte?",
            a: "No. La concentrazione riguarda la quantita per volume, mentre la forza si riferisce al grado di ionizzazione.",
          },
          {
            q: "Questi termini sono assoluti?",
            a: "No. Sono confronti relativi tra soluzioni, non valori numerici fissi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "primary-cell-vs-secondary-cell",
    a: "Primary cell",
    b: "Secondary cell",
    category: "chemistry",
    emoji_a: "🪫",
    emoji_b: "🔋",
    content: {
      it: {
        title: "Pila primaria contro secondaria: le batterie",
        h1: "Pila primaria contro Pila secondaria spiegate",
        description:
          "Le pile primarie sono monouso; le pile secondarie sono ricaricabili. Confronta questi due tipi di batteria fianco a fianco.",
        intro:
          "Le batterie si dividono in pile primarie e secondarie, a seconda che la loro reazione possa essere invertita ricaricandole.",
        pros_a: [
          "Monouso, non ricaricabile",
          "La reazione e' irreversibile",
          "Scartata una volta esaurita",
          "Costo iniziale piu' basso",
          "Esempi: pile AA alcaline, pile zinco-carbone",
        ],
        pros_b: [
          "Ricaricabile molte volte",
          "La reazione puo' essere invertita con la carica",
          "Riutilizzata per molti cicli",
          "Costo piu' alto ma migliore valore a lungo termine",
          "Esempi: ioni di litio, piombo-acido",
        ],
        verdict:
          "Le pile primarie si usano una volta e si gettano; le pile secondarie possono essere ricaricate e riutilizzate. Le pile secondarie costano di piu' ma sono piu' economiche ed ecologiche nel tempo.",
        faq: [
          {
            q: "Una pila primaria puo' essere ricaricata?",
            a: "No. La sua reazione chimica e' irreversibile, quindi deve essere sostituita una volta esaurita.",
          },
          {
            q: "Perche' le pile secondarie costano di piu'?",
            a: "Usano una chimica reversibile piu' complessa, ma il costo si distribuisce su molti cicli di ricarica.",
          },
          {
            q: "Una batteria d'auto e' primaria o secondaria?",
            a: "Una batteria d'auto al piombo-acido e' una pila secondaria, progettata per essere ricaricata.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "strong-base-vs-weak-base",
    a: "Strong base",
    b: "Weak base",
    category: "chemistry",
    emoji_a: "🧼",
    emoji_b: "🧴",
    content: {
      it: {
        title: "Base forte contro Base debole: differenze chiave",
        h1: "Base forte contro Base debole spiegate",
        description:
          "Le basi forti si dissociano completamente in acqua; le basi deboli solo parzialmente. Confronta pH, dissociazione ed esempi fianco a fianco.",
        intro:
          "La forza di una base riguarda quanto completamente si ionizza, non quanto e' concentrata. Cio' plasma pH e reattivita.",
        pros_a: [
          "Si dissocia completamente in acqua",
          "pH alto alla stessa concentrazione",
          "Rilascia molti ioni idrossido",
          "Reazione essenzialmente irreversibile",
          "Esempi: NaOH, KOH",
        ],
        pros_b: [
          "Si dissocia solo parzialmente in acqua",
          "pH piu' basso di una base forte alla stessa concentrazione",
          "Rilascia meno ioni idrossido",
          "Stabilisce un equilibrio",
          "Esempi: ammoniaca, metilammina",
        ],
        verdict:
          "Le basi forti si ionizzano completamente e danno un pH alto; le basi deboli stabiliscono un equilibrio e si ionizzano parzialmente. La forza e' indipendente dalla concentrazione.",
        faq: [
          {
            q: "Base forte significa concentrata?",
            a: "No. La forza riguarda il grado di ionizzazione, mentre la concentrazione e' la quantita per volume.",
          },
          {
            q: "Cos'e' il valore Kb?",
            a: "Kb e' la costante di equilibrio che mostra fin dove una base debole si ionizza in acqua.",
          },
          {
            q: "L'ammoniaca e' una base forte o debole?",
            a: "L'ammoniaca e' una base debole perche' si ionizza solo parzialmente in acqua.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "addition-reaction-vs-substitution-reaction",
    a: "Addition reaction",
    b: "Substitution reaction",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "🔁",
    content: {
      it: {
        title: "Reazione di addizione contro di sostituzione a confronto",
        h1: "Reazione di addizione contro di sostituzione spiegate",
        description:
          "Le reazioni di addizione aggiungono atomi attraverso un doppio legame; la sostituzione scambia un atomo con un altro. Confronta queste reazioni organiche.",
        intro:
          "Addizione e sostituzione sono due tipi fondamentali di reazione organica. Il fatto che gli atomi vengano aggiunti o scambiati le distingue.",
        pros_a: [
          "Gli atomi si aggiungono attraverso un legame multiplo",
          "Il doppio o triplo legame diventa singolo",
          "Tipica dei composti insaturi",
          "Non viene rilasciata alcuna piccola molecola",
          "Esempio: il bromo che si addiziona a un alchene",
        ],
        pros_b: [
          "Un atomo o gruppo ne sostituisce un altro",
          "I legami vengono scambiati, non aggiunti",
          "Tipica dei composti saturi e aromatici",
          "Spesso rilascia una piccola molecola",
          "Esempio: la clorurazione di un alcano",
        ],
        verdict:
          "Le reazioni di addizione saturano un legame multiplo aggiungendo atomi; le reazioni di sostituzione scambiano un gruppo con un altro. I composti insaturi favoriscono l'addizione, quelli saturi la sostituzione.",
        faq: [
          {
            q: "Quali composti subiscono l'addizione?",
            a: "I composti insaturi con doppi o tripli legami, come alcheni e alchini.",
          },
          {
            q: "Cosa succede in una reazione di sostituzione?",
            a: "Un atomo o gruppo presente sulla molecola viene sostituito da un atomo o gruppo diverso.",
          },
          {
            q: "Perche' gli aromatici preferiscono la sostituzione?",
            a: "La sostituzione mantiene intatto lo stabile anello aromatico, mentre l'addizione lo romperebbe.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "organic-vs-inorganic-compound",
    a: "Organic compound",
    b: "Inorganic compound",
    category: "chemistry",
    emoji_a: "🌱",
    emoji_b: "🪨",
    content: {
      it: {
        title: "Composto organico contro inorganico a confronto",
        h1: "Composto organico contro inorganico spiegati",
        description:
          "I composti organici sono a base di carbonio; i composti inorganici generalmente no. Confronta queste due grandi classi chimiche.",
        intro:
          "La chimica divide i composti in organici e inorganici. La presenza di legami carbonio-idrogeno e' la consueta linea di demarcazione.",
        pros_a: [
          "Basato sul carbonio, di solito con idrogeno",
          "Generalmente legato in modo covalente",
          "Spesso infiammabile, punti di fusione piu' bassi",
          "Forma molecole enormi e variate",
          "Esempi: metano, glucosio, etanolo",
        ],
        pros_b: [
          "Generalmente non a base carbonio-idrogeno",
          "Spesso legato in modo ionico",
          "Di solito punti di fusione piu' alti",
          "Spesso si dissolve per condurre l'elettricita",
          "Esempi: sale, acqua, acido solforico",
        ],
        verdict:
          "I composti organici sono a base di carbonio con legami covalenti e grande varieta strutturale; i composti inorganici coprono tutto il resto, spesso ionici con punti di fusione piu' alti.",
        faq: [
          {
            q: "Cosa definisce un composto organico?",
            a: "La maggior parte contiene atomi di carbonio legati all'idrogeno, il segno distintivo della chimica organica.",
          },
          {
            q: "L'anidride carbonica e' organica?",
            a: "L'anidride carbonica contiene carbonio ma e' tradizionalmente classificata come inorganica.",
          },
          {
            q: "Perche' esistono cosi' tanti composti organici?",
            a: "Il carbonio forma catene, anelli e ramificazioni stabili, permettendo una varieta strutturale infinita.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "electronegativity-vs-electron-affinity",
    a: "Electronegativity",
    b: "Electron affinity",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "⚡",
    content: {
      it: {
        title: "Elettronegativita contro Affinita elettronica",
        h1: "Elettronegativita contro Affinita elettronica spiegate",
        description:
          "L'elettronegativita e' l'attrazione sugli elettroni condivisi in un legame; l'affinita elettronica e' l'energia rilasciata quando un atomo ne acquista uno. Confronta entrambe.",
        intro:
          "Entrambi i termini descrivono l'attrazione di un atomo per gli elettroni, ma uno si applica all'interno di un legame e l'altro a un atomo libero.",
        pros_a: [
          "Attrazione sugli elettroni condivisi in un legame",
          "Una scala relativa e priva di unita",
          "Misurata dalla scala di Pauling",
          "Predice la polarita del legame",
          "Il fluoro ha il valore piu' alto",
        ],
        pros_b: [
          "Variazione di energia quando un atomo acquista un elettrone",
          "Un'energia effettivamente misurata in kJ/mol",
          "Si applica a un atomo gassoso isolato",
          "Di solito rilascia energia (valore negativo)",
          "Il cloro ha un valore molto alto",
        ],
        verdict:
          "L'elettronegativita e' un'attrazione relativa all'interno dei legami; l'affinita elettronica e' un'energia misurata per un singolo atomo che acquista un elettrone. Entrambe aumentano lungo un periodo.",
        faq: [
          {
            q: "In che modo le due differiscono?",
            a: "L'elettronegativita e' una scala relativa per atomi legati; l'affinita elettronica e' un'energia per un atomo libero.",
          },
          {
            q: "Quale elemento e' il piu' elettronegativo?",
            a: "Il fluoro ha l'elettronegativita piu' alta di tutti gli elementi.",
          },
          {
            q: "Quali unita usa l'affinita elettronica?",
            a: "L'affinita elettronica si misura come un'energia in chilojoule per mole.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "atomic-number-vs-mass-number",
    a: "Atomic number",
    b: "Mass number",
    category: "chemistry",
    emoji_a: "🔢",
    emoji_b: "⚖️",
    content: {
      it: {
        title: "Numero atomico contro Numero di massa a confronto",
        h1: "Numero atomico contro Numero di massa spiegati",
        description:
          "Il numero atomico conta i protoni; il numero di massa conta i protoni piu' i neutroni. Confronta queste due cifre atomiche chiave.",
        intro:
          "Ogni atomo e' descritto da due numeri. Uno identifica l'elemento, l'altro da' il conteggio totale delle particelle nucleari.",
        pros_a: [
          "Conta solo i protoni",
          "Simbolo Z",
          "Definisce quale elemento e' un atomo",
          "Uguale per tutti gli atomi di un elemento",
          "Equivale agli elettroni in un atomo neutro",
        ],
        pros_b: [
          "Conta protoni piu' neutroni",
          "Simbolo A",
          "Da' la massa nucleare totale",
          "Varia tra gli isotopi",
          "Sempre un numero intero",
        ],
        verdict:
          "Il numero atomico fissa l'elemento contando i protoni; il numero di massa aggiunge i neutroni per dare il totale nucleare. Sottrai Z da A per trovare il numero di neutroni.",
        faq: [
          {
            q: "Come trovo il numero di neutroni?",
            a: "Sottrai il numero atomico dal numero di massa.",
          },
          {
            q: "Quale numero definisce l'elemento?",
            a: "Il numero atomico, poiche' e' uguale al numero di protoni.",
          },
          {
            q: "Perche' il numero di massa varia?",
            a: "Gli isotopi di un elemento hanno un diverso numero di neutroni, il che cambia il numero di massa.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "monomer-vs-polymer",
    a: "Monomer",
    b: "Polymer",
    category: "chemistry",
    emoji_a: "🔵",
    emoji_b: "⛓️",
    content: {
      it: {
        title: "Monomero contro Polimero: i mattoni di base",
        h1: "Monomero contro Polimero spiegati",
        description:
          "I monomeri sono piccole unita che si ripetono; i polimeri sono lunghe catene costruite da molti monomeri. Confronta questi termini per lo studio.",
        intro:
          "I polimeri si ottengono collegando insieme molti monomeri. La relazione e' come perline che formano una lunga collana.",
        pros_a: [
          "Una singola piccola unita molecolare",
          "Il mattone di base di un polimero",
          "Puo' reagire e unirsi ad altri monomeri",
          "Bassa massa molecolare",
          "Esempi: etene, glucosio, amminoacidi",
        ],
        pros_b: [
          "Una lunga catena di molti monomeri",
          "Costruito mediante polimerizzazione",
          "Massa molecolare molto alta",
          "Ha proprieta diverse dai suoi monomeri",
          "Esempi: polietilene, amido, proteine",
        ],
        verdict:
          "Un monomero e' una piccola unita; un polimero ne e' costituito da molti uniti in una lunga catena. La polimerizzazione collega i monomeri, spesso rilasciando piccole molecole nel processo.",
        faq: [
          {
            q: "Come si ottengono i polimeri?",
            a: "Mediante polimerizzazione, in cui molte unita monomeriche si legano insieme in una lunga catena.",
          },
          {
            q: "I polimeri si comportano come i loro monomeri?",
            a: "No. I polimeri di solito hanno proprieta molto diverse dai monomeri che li costruiscono.",
          },
          {
            q: "L'amido e' un polimero?",
            a: "Si. L'amido e' un polimero naturale costruito da molte unita monomeriche di glucosio.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "fission-vs-fusion",
    a: "Nuclear fission",
    b: "Nuclear fusion",
    category: "chemistry",
    emoji_a: "💥",
    emoji_b: "☀️",
    content: {
      it: {
        title: "Fissione contro Fusione nucleare a confronto",
        h1: "Fissione contro Fusione nucleare spiegate",
        description:
          "La fissione divide un nucleo pesante; la fusione unisce nuclei leggeri. Confronta queste due reazioni nucleari e il loro rilascio di energia.",
        intro:
          "Fissione e fusione rilasciano entrambe energia nucleare, ma agiscono in direzioni opposte sul nucleo.",
        pros_a: [
          "Divide un nucleo pesante in nuclei piu' piccoli",
          "Innescata dal bombardamento di neutroni",
          "Alimenta gli attuali reattori nucleari",
          "Produce scorie radioattive a lunga vita",
          "Esempio: l'uranio-235 che si divide",
        ],
        pros_b: [
          "Unisce nuclei leggeri in uno piu' pesante",
          "Richiede calore e pressione estremi",
          "Alimenta il Sole e le stelle",
          "Produce molte meno scorie radioattive",
          "Esempio: l'idrogeno che fonde in elio",
        ],
        verdict:
          "La fissione divide gli atomi pesanti e fa funzionare i reattori di oggi; la fusione unisce gli atomi leggeri e alimenta le stelle. La fusione rilascia piu' energia per massa ma e' molto piu' difficile da sostenere sulla Terra.",
        faq: [
          {
            q: "Quale alimenta il Sole?",
            a: "La fusione nucleare, che unisce nuclei di idrogeno in elio, alimenta il Sole e le altre stelle.",
          },
          {
            q: "Perche' la fusione e' difficile da ottenere?",
            a: "Richiede temperatura e pressione estreme per vincere la repulsione tra i nuclei.",
          },
          {
            q: "Quale produce piu' scorie nucleari?",
            a: "La fissione produce scorie radioattive a lunga vita, mentre la fusione ne produce molte meno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "qualitative-vs-quantitative-analysis",
    a: "Qualitative analysis",
    b: "Quantitative analysis",
    category: "chemistry",
    emoji_a: "🔍",
    emoji_b: "📊",
    content: {
      it: {
        title: "Analisi qualitativa contro quantitativa",
        h1: "Analisi qualitativa contro quantitativa spiegate",
        description:
          "L'analisi qualitativa identifica cosa e' presente; l'analisi quantitativa misura quanto. Confronta questi due approcci di laboratorio.",
        intro:
          "L'analisi chimica risponde a due domande: cosa c'e' in un campione e quanto ce n'e'. Ciascuna viene gestita da un approccio diverso.",
        pros_a: [
          "Identifica quali sostanze sono presenti",
          "Risponde alla domanda 'cosa'",
          "Usa saggi alla fiamma e reazioni di precipitazione",
          "Da' risultati descrittivi, non numerici",
          "Esempio: testare la presenza di uno ione metallico",
        ],
        pros_b: [
          "Misura la quantita di una sostanza",
          "Risponde alla domanda 'quanto'",
          "Usa la titolazione e i metodi gravimetrici",
          "Da' risultati numerici",
          "Esempio: trovare la concentrazione di una soluzione",
        ],
        verdict:
          "L'analisi qualitativa identifica i componenti di un campione; l'analisi quantitativa misura le loro quantita. I laboratori spesso eseguono prima la qualitativa, poi la quantitativa.",
        faq: [
          {
            q: "Quale tipo usa la titolazione?",
            a: "L'analisi quantitativa, poiche' la titolazione misura quanto di una sostanza e' presente.",
          },
          {
            q: "Cosa ti dice l'analisi qualitativa?",
            a: "Identifica quali sostanze o ioni sono presenti, senza fornire quantita.",
          },
          {
            q: "Possono essere usate insieme?",
            a: "Si. Un campione e' spesso prima identificato qualitativamente, poi misurato quantitativamente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exact-number-vs-measured-number",
    a: "Exact number",
    b: "Measured number",
    category: "chemistry",
    emoji_a: "💯",
    emoji_b: "📏",
    content: {
      it: {
        title: "Numero esatto contro misurato in chimica",
        h1: "Numero esatto contro Numero misurato spiegati",
        description:
          "I numeri esatti non hanno incertezza; i numeri misurati ne portano sempre un po'. Confronta questi due tipi per le cifre significative.",
        intro:
          "I numeri in chimica esistono in due tipi. Uno e' perfettamente preciso, l'altro limitato dallo strumento di misura.",
        pros_a: [
          "Non ha alcuna incertezza",
          "Deriva da un conteggio o da definizioni",
          "Infinite cifre significative",
          "Non limita la precisione del calcolo",
          "Esempi: 12 in una dozzina, 100 cm in un metro",
        ],
        pros_b: [
          "Porta sempre una certa incertezza",
          "Deriva dall'uso di uno strumento",
          "Cifre significative limitate",
          "Limita la precisione di un risultato",
          "Esempi: una massa di 5,32 g, una lunghezza di 4,1 cm",
        ],
        verdict:
          "I numeri esatti sono perfettamente precisi, derivando da conteggi o definizioni; i numeri misurati hanno sempre incertezza. Solo i numeri misurati limitano le cifre significative in un calcolo.",
        faq: [
          {
            q: "Perche' i numeri esatti non limitano le cifre significative?",
            a: "Hanno infinite cifre significative, quindi non limitano mai la precisione di un calcolo.",
          },
          {
            q: "Da dove provengono i numeri misurati?",
            a: "Da strumenti come bilance, righelli e termometri, che hanno sempre una certa incertezza.",
          },
          {
            q: "Una quantita contata e' esatta?",
            a: "Si. Contare oggetti interi, come 24 studenti, da' un numero esatto.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "accuracy-vs-precision",
    a: "Accuracy",
    b: "Precision",
    category: "chemistry",
    emoji_a: "🎯",
    emoji_b: "🔬",
    content: {
      it: {
        title: "Esattezza contro Precisione nella misurazione",
        h1: "Esattezza contro Precisione spiegate",
        description:
          "L'esattezza e' la vicinanza al valore vero; la precisione e' quanto sono ripetibili le misurazioni. Confronta questi due concetti di laboratorio.",
        intro:
          "Esattezza e precisione vengono spesso confuse ma descrivono qualita diverse di una misurazione.",
        pros_a: [
          "Vicinanza al valore vero o accettato",
          "Misura la correttezza",
          "Migliorata calibrando gli strumenti",
          "Influenzata dall'errore sistematico",
          "Esempio: una lettura vicina alla massa reale",
        ],
        pros_b: [
          "Quanto misurazioni ripetute sono vicine tra loro",
          "Misura la coerenza e la ripetibilita",
          "Migliorata da una tecnica attenta",
          "Influenzata dall'errore casuale",
          "Esempio: cinque letture tutte molto vicine",
        ],
        verdict:
          "L'esattezza riguarda l'essere corretti; la precisione riguarda l'essere coerenti. Una misurazione puo' essere precisa ma inesatta, quindi i buoni esperimenti mirano a entrambe.",
        faq: [
          {
            q: "Un risultato puo' essere preciso ma non esatto?",
            a: "Si. Letture ripetute possono raggrupparsi strettamente eppure essere tutte lontane dal valore vero.",
          },
          {
            q: "Quale errore riduce l'esattezza?",
            a: "L'errore sistematico, come uno strumento non calibrato, sposta i risultati lontano dal valore vero.",
          },
          {
            q: "Come miglioro la precisione?",
            a: "Usando una tecnica attenta e coerente per ridurre l'errore casuale tra le letture.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "valence-electron-vs-core-electron",
    a: "Valence electron",
    b: "Core electron",
    category: "chemistry",
    emoji_a: "🌟",
    emoji_b: "⚫",
    content: {
      it: {
        title: "Elettrone di valenza contro di core a confronto",
        h1: "Elettrone di valenza contro Elettrone di core spiegati",
        description:
          "Gli elettroni di valenza sono nel guscio esterno e guidano il legame; gli elettroni di core sono interni e schermati. Confronta questi elettroni.",
        intro:
          "Gli elettroni in un atomo si dividono in due ruoli. Quelli piu' esterni fanno la chimica mentre quelli interni restano racchiusi.",
        pros_a: [
          "Situati nel guscio piu' esterno",
          "Coinvolti nel legame chimico",
          "Determinano la reattivita di un elemento",
          "Mostrati nei diagrammi a punti di Lewis",
          "Persi, acquistati o condivisi nelle reazioni",
        ],
        pros_b: [
          "Situati nei gusci interni e completi",
          "Non coinvolti nel legame",
          "Strettamente trattenuti dal nucleo",
          "Schermano gli elettroni di valenza dalla piena carica nucleare",
          "Generalmente immutati nelle reazioni",
        ],
        verdict:
          "Gli elettroni di valenza vivono nel guscio esterno e governano legame e reattivita; gli elettroni di core restano sepolti all'interno, schermando quelli esterni ma senza partecipare alle reazioni.",
        faq: [
          {
            q: "Quali elettroni partecipano al legame?",
            a: "Gli elettroni di valenza nel guscio piu' esterno sono quelli coinvolti nel legame chimico.",
          },
          {
            q: "Cosa fanno gli elettroni di core?",
            a: "Schermano gli elettroni di valenza dalla piena attrazione del nucleo ma non formano legami.",
          },
          {
            q: "Dove vengono mostrati gli elettroni di valenza?",
            a: "Nei diagrammi a punti di Lewis, che mostrano solo gli elettroni del guscio esterno.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "sigma-bond-vs-pi-bond",
    a: "Sigma bond",
    b: "Pi bond",
    category: "chemistry",
    emoji_a: "➖",
    emoji_b: "〰️",
    content: {
      it: {
        title: "Legame sigma contro pi greco: legame covalente",
        h1: "Legame sigma contro Legame pi greco spiegati",
        description:
          "I legami sigma si formano per sovrapposizione frontale degli orbitali; i legami pi greco per sovrapposizione laterale. Confronta forza e rotazione.",
        intro:
          "I legami covalenti esistono in due tipi. I legami sigma e pi greco differiscono per come si sovrappongono i loro orbitali e per quanto sono forti.",
        pros_a: [
          "Formato per sovrapposizione frontale degli orbitali",
          "Forte, con densita elettronica sull'asse del legame",
          "Sempre il primo legame tra due atomi",
          "Permette la libera rotazione attorno al legame",
          "Presente in tutti i legami singoli",
        ],
        pros_b: [
          "Formato per sovrapposizione laterale degli orbitali",
          "Piu' debole, con densita sopra e sotto l'asse",
          "Si forma solo dopo che esiste un legame sigma",
          "Impedisce la rotazione attorno al legame",
          "Presente nei legami doppi e tripli",
        ],
        verdict:
          "Un legame sigma e' il forte primo legame da sovrapposizione frontale; i legami pi greco sono sovrapposizioni laterali piu' deboli aggiunte nei legami doppi e tripli. I legami pi greco bloccano la molecola contro la rotazione.",
        faq: [
          {
            q: "Quale legame e' piu' forte?",
            a: "Il legame sigma, perche' la sovrapposizione frontale concentra la densita elettronica nel modo piu' efficace.",
          },
          {
            q: "Quanti legami ci sono in un triplo legame?",
            a: "Un triplo legame ha un legame sigma e due legami pi greco.",
          },
          {
            q: "Perche' i doppi legami non possono ruotare?",
            a: "La sovrapposizione laterale del legame pi greco si romperebbe se gli atomi ruotassero, quindi la rotazione e' bloccata.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "electrophile-vs-nucleophile",
    a: "Electrophile",
    b: "Nucleophile",
    category: "chemistry",
    emoji_a: "🧲",
    emoji_b: "💞",
    content: {
      it: {
        title: "Elettrofilo contro Nucleofilo a confronto",
        h1: "Elettrofilo contro Nucleofilo spiegati",
        description:
          "Gli elettrofili cercano elettroni; i nucleofili li donano. Confronta queste due specie chiave dei meccanismi di reazione organica.",
        intro:
          "Le reazioni organiche sono in gran parte una danza tra specie povere e ricche di elettroni. Queste sono gli elettrofili e i nucleofili.",
        pros_a: [
          "Specie amante degli elettroni, povera di elettroni",
          "Accetta una coppia di elettroni",
          "Spesso positiva o parzialmente positiva",
          "Attaccata dai nucleofili",
          "Esempi: H+, carbocationi, Br2",
        ],
        pros_b: [
          "Specie amante del nucleo, ricca di elettroni",
          "Dona una coppia di elettroni",
          "Spesso negativa o con un doppietto solitario",
          "Attacca gli elettrofili",
          "Esempi: OH-, NH3, CN-",
        ],
        verdict:
          "Gli elettrofili sono poveri di elettroni e accettano coppie di elettroni; i nucleofili sono ricchi di elettroni e li donano. Le reazioni avvengono quando un nucleofilo attacca un elettrofilo.",
        faq: [
          {
            q: "Quale dei due dona elettroni?",
            a: "Il nucleofilo dona una coppia di elettroni; l'elettrofilo li accetta.",
          },
          {
            q: "Uno ione positivo e' un elettrofilo?",
            a: "Di solito si'. Le specie positive o povere di elettroni agiscono da elettrofili.",
          },
          {
            q: "Come reagiscono insieme?",
            a: "Un nucleofilo ricco di elettroni attacca un elettrofilo povero di elettroni, formando un nuovo legame.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "buffer-vs-indicator",
    a: "Buffer",
    b: "Indicator",
    category: "chemistry",
    emoji_a: "⚖️",
    emoji_b: "🌈",
    content: {
      it: {
        title: "Tampone contro Indicatore: strumenti acido-base",
        h1: "Tampone contro Indicatore spiegati",
        description:
          "Un tampone resiste al cambiamento di pH; un indicatore segnala il pH cambiando colore. Confronta questi due strumenti di laboratorio acido-base.",
        intro:
          "Tamponi e indicatori riguardano entrambi il pH ma svolgono compiti opposti: uno stabilizza il pH, l'altro lo rivela.",
        pros_a: [
          "Resiste ai cambiamenti di pH",
          "Fatto di un acido debole e della sua base coniugata",
          "Mantiene il pH stabile quando si aggiunge acido o base",
          "Vitale nel sangue e nei sistemi biologici",
          "Esempio: acido acetico con acetato di sodio",
        ],
        pros_b: [
          "Segnala il pH di una soluzione",
          "Cambia colore in un intervallo di pH",
          "Spesso esso stesso un acido o una base debole",
          "Usato per individuare i punti finali di una titolazione",
          "Esempi: tornasole, fenolftaleina",
        ],
        verdict:
          "Un tampone mantiene il pH stabile contro l'aggiunta di acido o base, mentre un indicatore cambia colore per rivelare il pH. Uno stabilizza, l'altro segnala.",
        faq: [
          {
            q: "Di cosa e' fatto un tampone?",
            a: "Tipicamente di un acido debole e della sua base coniugata, o di una base debole e del suo acido coniugato.",
          },
          {
            q: "Perche' usare un indicatore nella titolazione?",
            a: "Il suo cambiamento di colore segna il punto finale, mostrando quando la neutralizzazione e' completa.",
          },
          {
            q: "Un indicatore cambia il pH?",
            a: "No. Un indicatore si limita a rivelare il pH; non lo stabilizza ne' lo altera in modo significativo.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-bond-breaking",
    a: "Bond breaking",
    b: "Bond making",
    category: "chemistry",
    emoji_a: "💥",
    emoji_b: "🔗",
    content: {
      it: {
        title: "Rottura contro Formazione di legami: l'energia",
        h1: "Rottura contro Formazione di legami spiegate",
        description:
          "Rompere i legami assorbe energia; formare i legami la rilascia. Confronta questi due passaggi che decidono l'energia di una reazione.",
        intro:
          "Ogni reazione rompe vecchi legami e ne forma di nuovi. L'equilibrio tra i due decide se una reazione e' esotermica o endotermica.",
        pros_a: [
          "Bisogna assorbire energia per rompere un legame",
          "Un passaggio endotermico",
          "Richiede sempre un apporto di energia",
          "I legami piu' forti necessitano di piu' energia",
          "Avviene ai reagenti",
        ],
        pros_b: [
          "L'energia viene rilasciata quando un legame si forma",
          "Un passaggio esotermico",
          "Cede sempre energia",
          "I legami piu' forti rilasciano piu' energia",
          "Avviene per formare i prodotti",
        ],
        verdict:
          "Rompere i legami assorbe sempre energia e formare i legami la rilascia sempre. Se la formazione dei legami rilascia piu' energia di quanta ne assorba la rottura, la reazione e' complessivamente esotermica.",
        faq: [
          {
            q: "Quale passaggio rilascia energia?",
            a: "La formazione dei legami rilascia energia; la rottura dei legami la assorbe.",
          },
          {
            q: "Come decide questo tra esotermica ed endotermica?",
            a: "Se formare nuovi legami rilascia piu' di quanto rompere i vecchi assorba, la reazione e' esotermica.",
          },
          {
            q: "I legami piu' forti contano di piu'?",
            a: "Si. I legami piu' forti assorbono piu' energia per rompersi e rilasciano piu' energia quando si formano.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "concentration-vs-rate-of-reaction",
    a: "Concentration",
    b: "Rate of reaction",
    category: "chemistry",
    emoji_a: "🧴",
    emoji_b: "⏱️",
    content: {
      it: {
        title: "Concentrazione contro Velocita di reazione",
        h1: "Concentrazione contro Velocita di reazione spiegate",
        description:
          "La concentrazione misura quanto soluto e' presente; la velocita di reazione misura quanto velocemente procede. Confronta e collega le due.",
        intro:
          "Concentrazione e velocita di reazione sono collegate ma distinte: una e' uno stato, l'altra una rapidita.",
        pros_a: [
          "Quantita di soluto per unita di volume",
          "Una grandezza istantanea in un dato momento",
          "Misurata in mol/L",
          "Un valore piu' alto significa piu' particelle presenti",
          "Influisce sulla frequenza delle collisioni",
        ],
        pros_b: [
          "Quanto velocemente i reagenti si trasformano in prodotti",
          "Misurata per unita di tempo",
          "Espressa come variazione di concentrazione nel tempo",
          "Un valore piu' alto significa una reazione piu' veloce",
          "Influenzata da concentrazione, temperatura e catalizzatori",
        ],
        verdict:
          "La concentrazione e' quanto e' presente; la velocita di reazione e' quanto velocemente avviene il cambiamento. Aumentare la concentrazione di solito aumenta la velocita causando collisioni piu' frequenti.",
        faq: [
          {
            q: "Come influisce la concentrazione sulla velocita?",
            a: "Reagenti piu' concentrati collidono piu' spesso, quindi la reazione generalmente procede piu' velocemente.",
          },
          {
            q: "Quali unita usa la velocita?",
            a: "La velocita si esprime di solito come variazione di concentrazione per unita di tempo, come mol/L al secondo.",
          },
          {
            q: "La concentrazione e' l'unico fattore della velocita?",
            a: "No. Anche la temperatura, la superficie di contatto e i catalizzatori influiscono sulla velocita di reazione.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "noble-gas-vs-alkali-metal",
    a: "Noble gas",
    b: "Alkali metal",
    category: "chemistry",
    emoji_a: "💡",
    emoji_b: "🔥",
    content: {
      it: {
        title: "Gas nobile contro Metallo alcalino: gli estremi",
        h1: "Gas nobile contro Metallo alcalino spiegati",
        description:
          "I gas nobili sono gli elementi meno reattivi; i metalli alcalini sono tra i piu' reattivi. Confronta questi estremi della tavola periodica.",
        intro:
          "Il gruppo 18 e il gruppo 1 si trovano alle estremita opposte della reattivita. Uno ha un guscio elettronico completo, l'altro un singolo elettrone debolmente legato.",
        pros_a: [
          "Gruppo 18 con un guscio di valenza completo",
          "Estremamente stabile e non reattivo",
          "Esiste come atomi singoli e stabili",
          "Gas incolori e inodori",
          "Esempi: elio, neon, argon",
        ],
        pros_b: [
          "Gruppo 1 con un elettrone di valenza",
          "Estremamente reattivo, specialmente con l'acqua",
          "Metalli morbidi a bassa densita",
          "Conservati sotto olio per sicurezza",
          "Esempi: litio, sodio, potassio",
        ],
        verdict:
          "I gas nobili sono gli elementi piu' tranquilli grazie a un guscio completo, mentre i metalli alcalini sono tra i piu' violenti a causa di un elettrone facilmente perduto. Segnano gli estremi della reattivita.",
        faq: [
          {
            q: "Perche' i gas nobili sono cosi' stabili?",
            a: "Il loro guscio elettronico esterno completo non da' loro alcun impulso a reagire con altri elementi.",
          },
          {
            q: "Perche' i metalli alcalini sono conservati sotto olio?",
            a: "Reagiscono cosi' rapidamente con l'aria e l'acqua che l'olio li protegge dall'umidita.",
          },
          {
            q: "Quale e' piu' reattivo?",
            a: "I metalli alcalini sono molto piu' reattivi; i gas nobili sono quasi inerti.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "endpoint-vs-equivalence-point",
    a: "Endpoint",
    b: "Equivalence point",
    category: "chemistry",
    emoji_a: "🌈",
    emoji_b: "⚖️",
    content: {
      it: {
        title: "Punto finale contro Punto di equivalenza nella titolazione",
        h1: "Punto finale contro Punto di equivalenza spiegati",
        description:
          "Il punto di equivalenza e' dove i reagenti si bilanciano esattamente; il punto finale e' dove l'indicatore cambia. Confronta entrambi.",
        intro:
          "La titolazione ha due punti strettamente correlati. Uno e' il vero equilibrio chimico, l'altro e' cio' che mostra l'indicatore.",
        pros_a: [
          "Dove l'indicatore cambia colore in modo visibile",
          "Cio' che lo sperimentatore effettivamente osserva",
          "Leggermente dopo il punto di equivalenza",
          "Dipende dall'indicatore scelto",
          "Un segnale pratico e osservato",
        ],
        pros_b: [
          "Dove acido e base si neutralizzano esattamente",
          "Le moli dei reagenti sono stechiometricamente uguali",
          "Il vero punto teorico",
          "Indipendente da qualsiasi indicatore",
          "Trovato con precisione con un pHmetro",
        ],
        verdict:
          "Il punto di equivalenza e' il vero equilibrio chimico; il punto finale e' il cambiamento di colore osservato. Un buon indicatore fa cadere il punto finale molto vicino al punto di equivalenza.",
        faq: [
          {
            q: "I due punti sono la stessa cosa?",
            a: "Non esattamente. Un indicatore ben scelto fa quasi coincidere il punto finale con il punto di equivalenza.",
          },
          {
            q: "Quale e' il punto teorico?",
            a: "Il punto di equivalenza e' il vero punto teorico in cui i reagenti sono stechiometricamente uguali.",
          },
          {
            q: "Perche' scegliere l'indicatore con cura?",
            a: "Cosi' che il suo cambiamento di colore avvenga il piu' vicino possibile al punto di equivalenza per maggiore accuratezza.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "hard-water-vs-soft-water",
    a: "Hard water",
    b: "Soft water",
    category: "chemistry",
    emoji_a: "🪨",
    emoji_b: "💧",
    content: {
      it: {
        title: "Acqua dura contro Acqua dolce a confronto",
        h1: "Acqua dura contro Acqua dolce spiegate",
        description:
          "L'acqua dura e' ricca di ioni calcio e magnesio; l'acqua dolce ne ha pochi. Confronta questi due tipi di acqua fianco a fianco.",
        intro:
          "La durezza dell'acqua dipende dagli ioni minerali disciolti. La quantita di calcio e magnesio decide se l'acqua e' dura o dolce.",
        pros_a: [
          "Ricca di ioni calcio e magnesio",
          "Forma una schiuma sgradevole con il sapone",
          "Lascia calcare in bollitori e tubature",
          "Fa poca schiuma con il sapone",
          "Spesso proviene da zone di gesso o calcare",
        ],
        pros_b: [
          "Povera di ioni calcio e magnesio",
          "Fa schiuma facilmente con il sapone",
          "Lascia poco o nessun calcare",
          "Si trova in zone con roccia dura come il granito",
          "Puo' essere prodotta con l'addolcimento a scambio ionico",
        ],
        verdict:
          "L'acqua dura trasporta calcio e magnesio disciolti che contrastano il sapone e formano calcare; l'acqua dolce ha pochi di questi ioni e fa schiuma facilmente. La durezza riflette la geologia locale.",
        faq: [
          {
            q: "Cosa causa la durezza dell'acqua?",
            a: "Gli ioni calcio e magnesio disciolti, di solito assorbiti da rocce di gesso o calcare.",
          },
          {
            q: "Perche' l'acqua dura forma il calcare?",
            a: "Riscaldarla deposita carbonato di calcio insolubile come incrostazione in bollitori e tubature.",
          },
          {
            q: "Come si addolcisce l'acqua dura?",
            a: "Mediante scambio ionico, sostituendo gli ioni calcio e magnesio con ioni sodio.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "lewis-acid-vs-lewis-base",
    a: "Lewis acid",
    b: "Lewis base",
    category: "chemistry",
    emoji_a: "🤲",
    emoji_b: "🎁",
    content: {
      it: {
        title: "Acido di Lewis contro Base di Lewis a confronto",
        h1: "Acido di Lewis contro Base di Lewis spiegati",
        description:
          "Un acido di Lewis accetta una coppia di elettroni; una base di Lewis ne dona una. Confronta questa ampia definizione acido-base fianco a fianco.",
        intro:
          "La teoria di Lewis definisce acidi e basi in base alle coppie di elettroni, ampliando l'idea oltre i protoni e gli ioni idrossido.",
        pros_a: [
          "Accetta una coppia di elettroni",
          "Un accettore di coppie di elettroni",
          "Ha spesso un orbitale vuoto",
          "Include specie senza protoni",
          "Esempi: BF3, H+, cationi metallici",
        ],
        pros_b: [
          "Dona una coppia di elettroni",
          "Un donatore di coppie di elettroni",
          "Di solito ha un doppietto solitario disponibile",
          "Include specie senza idrossido",
          "Esempi: NH3, H2O, OH-",
        ],
        verdict:
          "Gli acidi di Lewis accettano coppie di elettroni e le basi di Lewis le donano, una definizione abbastanza ampia da coprire reazioni del tutto prive di protoni. Formano un legame condividendo una coppia.",
        faq: [
          {
            q: "In che modo la definizione di Lewis differisce?",
            a: "Si concentra sulle coppie di elettroni anziche' sul trasferimento di protoni, quindi copre molte piu' reazioni.",
          },
          {
            q: "Ogni base di Lewis e' anche una base di Brønsted?",
            a: "Molte lo sono, ma la definizione di Lewis e' piu' ampia e include specie che non accettano protoni.",
          },
          {
            q: "Quale legame si forma in una reazione di Lewis?",
            a: "Un legame covalente dativo, in cui la base fornisce entrambi gli elettroni condivisi.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exothermic-graph-vs-endothermic-graph",
    a: "Activation energy",
    b: "Enthalpy change",
    category: "chemistry",
    emoji_a: "⛰️",
    emoji_b: "📉",
    content: {
      it: {
        title: "Energia di attivazione contro Variazione di entalpia",
        h1: "Energia di attivazione contro Variazione di entalpia spiegate",
        description:
          "L'energia di attivazione e' la barriera per avviare una reazione; la variazione di entalpia e' la differenza netta di energia. Confronta entrambe su un grafico.",
        intro:
          "I diagrammi energetici mostrano due grandezze chiave. Una e' la collina da scalare, l'altra e' il cambiamento complessivo di energia.",
        pros_a: [
          "L'energia minima per avviare una reazione",
          "L'altezza della barriera energetica",
          "Abbassata aggiungendo un catalizzatore",
          "Determina la velocita di reazione",
          "Misurata dai reagenti fino al picco",
        ],
        pros_b: [
          "La differenza netta di energia della reazione",
          "Energia dei reagenti meno energia dei prodotti",
          "Negativa per le esotermiche, positiva per le endotermiche",
          "Non influenzata da un catalizzatore",
          "Misurata dai reagenti ai prodotti",
        ],
        verdict:
          "L'energia di attivazione e' l'altezza della barriera che stabilisce la velocita di reazione; la variazione di entalpia e' il divario complessivo di energia tra reagenti e prodotti. Un catalizzatore abbassa la prima, non la seconda.",
        faq: [
          {
            q: "Un catalizzatore cambia la variazione di entalpia?",
            a: "No. Un catalizzatore abbassa solo l'energia di attivazione; la variazione di entalpia complessiva resta la stessa.",
          },
          {
            q: "Quale valore stabilisce la velocita di reazione?",
            a: "L'energia di attivazione, poiche' una barriera piu' bassa permette a piu' collisioni di avere successo.",
          },
          {
            q: "Come leggo la variazione di entalpia su un grafico?",
            a: "E' il divario verticale tra i livelli di energia dei reagenti e dei prodotti.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "conjugate-acid-vs-conjugate-base",
    a: "Conjugate acid",
    b: "Conjugate base",
    category: "chemistry",
    emoji_a: "➕",
    emoji_b: "➖",
    content: {
      it: {
        title: "Acido coniugato contro Base coniugata a confronto",
        h1: "Acido coniugato contro Base coniugata spiegati",
        description:
          "Un acido coniugato si forma quando una base acquista un protone; una base coniugata si forma quando un acido ne perde uno. Confronta queste coppie.",
        intro:
          "Nella teoria di Brønsted-Lowry, acidi e basi esistono in coppie coniugate che differiscono per esattamente un protone.",
        pros_a: [
          "Si forma quando una base accetta un protone",
          "Ha un H+ in piu' rispetto alla sua base",
          "Puo' ricedere quel protone",
          "Una base piu' forte da' un acido coniugato piu' debole",
          "Esempio: NH4+ dall'ammoniaca",
        ],
        pros_b: [
          "Si forma quando un acido perde un protone",
          "Ha un H+ in meno rispetto al suo acido",
          "Puo' riaccettare un protone",
          "Un acido piu' forte da' una base coniugata piu' debole",
          "Esempio: Cl- dall'acido cloridrico",
        ],
        verdict:
          "Un acido coniugato ha un protone in piu'; una base coniugata ne ha uno in meno. Ogni reazione acido-base produce una coppia coniugata, con una specie piu' forte che genera un partner piu' debole.",
        faq: [
          {
            q: "Cosa differisce all'interno di una coppia coniugata?",
            a: "Esattamente un protone: l'acido coniugato ha un H+ in piu' rispetto alla base coniugata.",
          },
          {
            q: "Perche' un acido forte da' una base coniugata debole?",
            a: "Poiche' l'acido forte cede prontamente il suo protone, la sua base coniugata trattiene male i protoni.",
          },
          {
            q: "Ogni reazione acido-base forma coniugati?",
            a: "Si. Le reazioni di Brønsted-Lowry producono sempre un acido coniugato e una base coniugata.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "nitrogen-vs-oxygen",
    a: "Nitrogen",
    b: "Oxygen",
    category: "chemistry",
    emoji_a: "💨",
    emoji_b: "🫁",
    content: {
      it: {
        title: "Azoto contro Ossigeno: i gas principali dell'aria",
        h1: "Azoto contro Ossigeno spiegati",
        description:
          "L'azoto e' un gas biatomico inerte; l'ossigeno e' un gas reattivo essenziale per la vita. Confronta i due principali componenti dell'aria.",
        intro:
          "Azoto e ossigeno costituiscono quasi tutta l'aria che respiriamo, eppure il loro comportamento chimico e' sorprendentemente diverso.",
        pros_a: [
          "Simbolo N, costituisce circa il 78% dell'aria",
          "Molto stabile grazie a un forte triplo legame",
          "Largamente non reattivo a temperatura ambiente",
          "Essenziale per le proteine e il DNA",
          "Usato per produrre ammoniaca e fertilizzanti",
        ],
        pros_b: [
          "Simbolo O, costituisce circa il 21% dell'aria",
          "Altamente reattivo, sostiene la combustione",
          "Necessario per la respirazione negli esseri viventi",
          "Forma ossidi con la maggior parte degli elementi",
          "Ha l'allotropo ozono, O3",
        ],
        verdict:
          "L'azoto e' abbondante e inerte grazie al suo triplo legame, mentre l'ossigeno e' reattivo e mantiene in vita. Insieme formano la maggior parte dell'atmosfera.",
        faq: [
          {
            q: "Perche' l'azoto e' cosi' poco reattivo?",
            a: "Le sue molecole sono tenute insieme da un triplo legame molto forte difficile da rompere.",
          },
          {
            q: "Quale gas sostiene la combustione?",
            a: "L'ossigeno sostiene la combustione; l'azoto no e puo' addirittura diluire il fuoco.",
          },
          {
            q: "Quale e' piu' abbondante nell'aria?",
            a: "L'azoto, a circa il 78%, supera di gran lunga l'ossigeno a circa il 21%.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-respiration-vs-photosynthesis",
    a: "Respiration",
    b: "Photosynthesis",
    category: "chemistry",
    emoji_a: "🫁",
    emoji_b: "🌿",
    content: {
      it: {
        title: "Respirazione contro Fotosintesi a confronto",
        h1: "Respirazione contro Fotosintesi spiegate",
        description:
          "La respirazione rilascia energia scomponendo il glucosio; la fotosintesi immagazzina energia producendolo. Confronta questi processi.",
        intro:
          "Respirazione e fotosintesi sono processi biochimici opposti che fanno circolare carbonio ed energia attraverso gli esseri viventi.",
        pros_a: [
          "Scompone il glucosio per rilasciare energia",
          "Un processo esotermico",
          "Usa ossigeno, rilascia anidride carbonica",
          "Avviene in tutte le cellule viventi",
          "Reagenti: glucosio e ossigeno",
        ],
        pros_b: [
          "Costruisce glucosio e immagazzina energia",
          "Un processo endotermico che necessita di luce",
          "Usa anidride carbonica, rilascia ossigeno",
          "Avviene in piante, alghe e alcuni batteri",
          "Reagenti: anidride carbonica e acqua",
        ],
        verdict:
          "La respirazione rilascia energia chimica immagazzinata mentre la fotosintesi cattura energia luminosa come glucosio. Sono opposti chimici che mantengono in moto i cicli del carbonio e dell'ossigeno.",
        faq: [
          {
            q: "Quale processo rilascia ossigeno?",
            a: "La fotosintesi rilascia ossigeno, mentre la respirazione lo consuma.",
          },
          {
            q: "La respirazione e' esotermica?",
            a: "Si. La respirazione rilascia energia, il che la rende un processo esotermico.",
          },
          {
            q: "Le piante fanno entrambi?",
            a: "Si. Le piante fanno la fotosintesi alla luce e respirano in continuazione per usare l'energia.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "ionization-energy-vs-atomic-radius",
    a: "Ionization energy",
    b: "Atomic radius",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "📐",
    content: {
      it: {
        title: "Energia di ionizzazione contro Raggio atomico",
        h1: "Energia di ionizzazione contro Raggio atomico spiegati",
        description:
          "L'energia di ionizzazione e' l'energia per rimuovere un elettrone; il raggio atomico e' la dimensione di un atomo. Confronta queste tendenze periodiche.",
        intro:
          "Due importanti tendenze periodiche si muovono in direzioni opposte lungo la tavola, e sono strettamente correlate.",
        pros_a: [
          "Energia necessaria per rimuovere un elettrone esterno",
          "Misurata in kJ/mol",
          "Aumenta lungo un periodo",
          "Diminuisce lungo un gruppo",
          "Piu' alta per gli atomi che trattengono strettamente gli elettroni",
        ],
        pros_b: [
          "La dimensione di un atomo",
          "Misurato in picometri",
          "Diminuisce lungo un periodo",
          "Aumenta lungo un gruppo",
          "Piu' grande quando gli elettroni sono piu' lontani",
        ],
        verdict:
          "Energia di ionizzazione e raggio atomico hanno tendenze opposte: man mano che gli atomi diventano piu' piccoli, gli elettroni sono trattenuti piu' strettamente e piu' difficili da rimuovere. Sono due facce della stessa attrazione nucleare.",
        faq: [
          {
            q: "Come sono correlate le due tendenze?",
            a: "Gli atomi piu' piccoli trattengono gli elettroni piu' strettamente, quindi un raggio piu' piccolo significa un'energia di ionizzazione piu' alta.",
          },
          {
            q: "Perche' il raggio atomico si riduce lungo un periodo?",
            a: "La crescente carica nucleare attira gli elettroni piu' vicino senza aggiungere un nuovo guscio.",
          },
          {
            q: "Dove l'energia di ionizzazione e' piu' alta?",
            a: "Verso l'angolo in alto a destra della tavola periodica, dove gli atomi sono piccoli e trattengono strettamente gli elettroni.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-acid-vs-salt",
    a: "Acid",
    b: "Salt",
    category: "chemistry",
    emoji_a: "🧪",
    emoji_b: "🧂",
    content: {
      it: {
        title: "Acido contro Sale: dal reagente al prodotto",
        h1: "Acido contro Sale spiegati",
        description:
          "Un acido cede protoni; un sale e' il prodotto ionico della neutralizzazione di un acido. Confronta queste sostanze correlate.",
        intro:
          "Acidi e sali sono collegati: fai reagire un acido con una base e uno dei prodotti e' un sale.",
        pros_a: [
          "Cede ioni H+ in soluzione",
          "Ha un pH inferiore a 7",
          "Sapore aspro, corrosivo per i metalli",
          "Un reagente nella neutralizzazione",
          "Esempi: HCl, acido solforico, acido nitrico",
        ],
        pros_b: [
          "Un composto ionico di un catione e un anione",
          "Di solito ha un pH neutro",
          "Formato quando un acido viene neutralizzato",
          "Un prodotto delle reazioni acido-base",
          "Esempi: cloruro di sodio, nitrato di potassio",
        ],
        verdict:
          "Un acido e' un reagente che cede protoni; un sale e' il prodotto ionico neutro che si forma quando un acido reagisce con una base. Gli acidi avviano la reazione, i sali la concludono.",
        faq: [
          {
            q: "Come si forma un sale a partire da un acido?",
            a: "Quando un acido reagisce con una base, l'anione dell'acido si unisce al catione della base per formare un sale.",
          },
          {
            q: "Tutti i sali sono neutri?",
            a: "La maggior parte e' quasi neutra, ma alcuni sali sono leggermente acidi o basici a seconda dei loro ioni.",
          },
          {
            q: "Qual e' l'altro prodotto insieme al sale?",
            a: "Neutralizzare un acido con una base di solito produce anche acqua.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-hydrate-vs-anhydrate",
    a: "Hydrate",
    b: "Anhydrous",
    category: "chemistry",
    emoji_a: "💧",
    emoji_b: "🏜️",
    content: {
      it: {
        title: "Idrato contro Composto anidro a confronto",
        h1: "Idrato contro Anidro spiegati",
        description:
          "Un idrato contiene acqua nella sua struttura cristallina; una forma anidra non ne ha. Confronta questi due stati di un composto.",
        intro:
          "Molti sali possono trattenere acqua all'interno dei loro cristalli. La presenza o meno di acqua rende un composto un idrato o anidro.",
        pros_a: [
          "Contiene acqua all'interno del reticolo cristallino",
          "Ha un rapporto fisso acqua-formula",
          "Scritto con un punto, come CuSO4·5H2O",
          "Spesso piu' colorato, come il solfato di rame blu",
          "Perde acqua quando viene riscaldato",
        ],
        pros_b: [
          "Non contiene acqua di cristallizzazione",
          "Formato riscaldando un idrato",
          "Spesso di colore diverso dall'idrato",
          "Puo' assorbire acqua e ridiventare un idrato",
          "Esempio: solfato di rame anidro bianco",
        ],
        verdict:
          "Un idrato porta una quantita fissa di acqua bloccata nei suoi cristalli, mentre un composto anidro non ne ha. Il riscaldamento allontana l'acqua; l'esposizione all'umidita puo' riportarla.",
        faq: [
          {
            q: "Come ottengo un composto anidro?",
            a: "Riscalda l'idrato per allontanare l'acqua di cristallizzazione.",
          },
          {
            q: "Perche' il solfato di rame cambia colore?",
            a: "Il solfato di rame idrato e' blu, mentre la forma anidra e' bianca.",
          },
          {
            q: "La quantita di acqua e' fissa in un idrato?",
            a: "Si. Ogni idrato ha un rapporto preciso di molecole d'acqua per unita di formula.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-oxidizing-vs-reducing-agent",
    a: "Oxidizing agent",
    b: "Reducing agent",
    category: "chemistry",
    emoji_a: "🔥",
    emoji_b: "🛡️",
    content: {
      it: {
        title: "Agente ossidante contro Agente riducente a confronto",
        h1: "Agente ossidante contro Agente riducente spiegati",
        description:
          "Un agente ossidante acquista elettroni e viene ridotto; un agente riducente perde elettroni e viene ossidato. Confronta entrambi.",
        intro:
          "Ogni reazione redox ha un agente ossidante e un agente riducente. Provocano un cambiamento l'uno nell'altro mentre subiscono il contrario su se stessi.",
        pros_a: [
          "Provoca l'ossidazione di un'altra specie",
          "Accetta elettroni esso stesso",
          "Viene ridotto durante la reazione",
          "Spesso avido di elettroni, come l'ossigeno o gli alogeni",
          "Esempi: ossigeno, cloro, permanganato di potassio",
        ],
        pros_b: [
          "Provoca la riduzione di un'altra specie",
          "Dona elettroni esso stesso",
          "Viene ossidato durante la reazione",
          "Spesso metalli o specie ricche di idrogeno",
          "Esempi: idrogeno, carbonio, metalli reattivi",
        ],
        verdict:
          "Un agente ossidante afferra elettroni e viene ridotto; un agente riducente cede elettroni e viene ossidato. Sono partner che compaiono sempre insieme nelle reazioni redox.",
        faq: [
          {
            q: "Cosa succede a un agente ossidante?",
            a: "Accetta elettroni ed e' esso stesso ridotto durante la reazione.",
          },
          {
            q: "Come individuo un agente riducente?",
            a: "Dona elettroni e viene ossidato; i metalli reattivi ne sono esempi comuni.",
          },
          {
            q: "Una reazione puo' avere solo uno dei due?",
            a: "No. Le reazioni redox abbinano sempre un agente ossidante a un agente riducente.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-electrolyte-vs-nonelectrolyte",
    a: "Electrolyte",
    b: "Nonelectrolyte",
    category: "chemistry",
    emoji_a: "⚡",
    emoji_b: "🚫",
    content: {
      it: {
        title: "Elettrolita contro Non elettrolita a confronto",
        h1: "Elettrolita contro Non elettrolita spiegati",
        description:
          "Un elettrolita conduce l'elettricita quando e' disciolto; un non elettrolita no. Confronta questi due tipi di soluzione.",
        intro:
          "Se una sostanza disciolta conduca elettricita dipende dal fatto che formi ioni. Cio' decide tra elettrolita e non elettrolita.",
        pros_a: [
          "Conduce l'elettricita quando e' disciolto o fuso",
          "Si scinde in ioni liberi di muoversi in acqua",
          "Include composti ionici e acidi forti",
          "Forte o debole a seconda della ionizzazione",
          "Esempi: sale, acido cloridrico",
        ],
        pros_b: [
          "Non conduce l'elettricita in soluzione",
          "Si dissolve come molecole neutre, non come ioni",
          "Di solito composti molecolari covalenti",
          "Nessuna carica libera per trasportare la corrente",
          "Esempi: zucchero, etanolo, glucosio",
        ],
        verdict:
          "Gli elettroliti rilasciano ioni e conducono l'elettricita in soluzione, mentre i non elettroliti si dissolvono come molecole neutre e non lo fanno. La formazione di ioni e' il fattore decisivo.",
        faq: [
          {
            q: "Perche' l'acqua salata conduce l'elettricita?",
            a: "Il sale e' un elettrolita che si scinde in ioni mobili capaci di trasportare la corrente.",
          },
          {
            q: "L'acqua zuccherata e' un elettrolita?",
            a: "No. Lo zucchero si dissolve come molecole neutre, quindi l'acqua zuccherata e' un non elettrolita.",
          },
          {
            q: "Cos'e' un elettrolita debole?",
            a: "Una sostanza che si ionizza solo parzialmente, quindi conduce debolmente l'elettricita.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
  {
    slug: "exo-vs-endo-evaporation-vs-boiling",
    a: "Evaporation",
    b: "Boiling",
    category: "chemistry",
    emoji_a: "☀️",
    emoji_b: "🫧",
    content: {
      it: {
        title: "Evaporazione contro Ebollizione: da liquido a gas",
        h1: "Evaporazione contro Ebollizione spiegate",
        description:
          "L'evaporazione avviene alla superficie a qualsiasi temperatura; l'ebollizione avviene in tutto il liquido al punto di ebollizione. Confronta entrambe.",
        intro:
          "Entrambe trasformano il liquido in gas, ma differiscono per dove avvengono e per quale temperatura richiedono.",
        pros_a: [
          "Avviene solo alla superficie del liquido",
          "Avviene a qualsiasi temperatura",
          "Un processo lento e graduale",
          "Provoca il raffreddamento del liquido restante",
          "Esempio: una pozzanghera che si asciuga",
        ],
        pros_b: [
          "Avviene in tutto il liquido",
          "Avviene solo al punto di ebollizione",
          "Un processo rapido con formazione di bolle",
          "La temperatura resta costante durante l'ebollizione",
          "Esempio: l'acqua che gorgoglia in un bollitore",
        ],
        verdict:
          "L'evaporazione e' un lento processo superficiale a qualsiasi temperatura, mentre l'ebollizione e' un rapido processo di massa fissato al punto di ebollizione. Entrambe convertono il liquido in vapore.",
        faq: [
          {
            q: "Un liquido puo' evaporare al di sotto del suo punto di ebollizione?",
            a: "Si. L'evaporazione avviene a qualsiasi temperatura, solo alla superficie.",
          },
          {
            q: "Perche' si formano bolle durante l'ebollizione?",
            a: "Il vapore si forma in tutto il liquido, creando bolle che salgono in superficie.",
          },
          {
            q: "La temperatura sale durante l'ebollizione?",
            a: "No. La temperatura resta al punto di ebollizione finche' tutto il liquido non e' evaporato.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
];
