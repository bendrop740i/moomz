import type { SeoPage } from "./types";

const today = "2026-05-22";

export const ideasIt3: SeoPage[] = [
  {
    slug: "pool-party-it",
    locale: "it",
    category: "ideas",
    emoji: "🏊",
    title: "Idee sondaggi pool party — 30 domande per gasare l'atmosfera nel 2026",
    h1: "Sondaggi da pool party: vota con le mani bagnate, senza login",
    description:
      "30 idee di sondaggi per pool party per decidere musica, drink e sfide tra un tuffo e l'altro. Gratis, anonimo, perfetto per qualsiasi chat di gruppo.",
    intro:
      "I pool party hanno una tensione strana: nessuno vuole essere l'host che rompe con la playlist o con quale gonfiabile tirare fuori. Lancia un sondaggio moomz nella chat di gruppo la mattina stessa e lascia decidere i voti. Niente registrazione, funziona sui telefoni bagnati, risultati live.",
    sections: [
      {
        h: "Sondaggi per organizzare prima della festa",
        body: "Tre ore prima che arrivi il primo ospite, la chat dell'host è un caos di \"servono altri cubetti?\" e \"X porta le casse?\". Sostituisci il delirio con due sondaggi: uno per il genere della playlist (afrobeats vs reggaeton vs hyperpop vs throwback anni 2010), uno per il cibo (pizza, sushi, solo snack, grigliata). Manda il link, dai 30 minuti a tutti. Vince la maggioranza, l'host smette di essere il collo di bottiglia e la gente arriva già coinvolta perché ha votato.",
      },
      {
        h: "Sondaggi-sfida in piscina",
        body: "Nel momento in cui sono tutti in acqua e un po' brilli, i sondaggi migliori sono le sfide. \"Chi deve fare la prossima bomba?\", \"pancia piatta o tuffo all'indietro?\", \"chi è single da più tempo sceglie la prossima canzone\". L'host mette il link moomz sulla cassa con un QR o urla semplicemente lo slug di 5 lettere. La gente vota tra un tuffo e l'altro. La sfida è il risultato, non una discussione — il punto è proprio questo.",
      },
      {
        h: "Decisioni su drink e cibo",
        body: "I pool party muoiono quando la domanda sul cibo resta senza risposta. Usa un sondaggio con 3-4 opzioni (\"ordiniamo la pizza ora / tra 1h / nessuno ha fame / la griglio io\"). Forza una decisione in 5 minuti chiudendo il sondaggio. Stessa cosa per i drink: \"prossimo giro = shot / birre / mocktail / acqua\". L'opzione acqua vince più spesso di quanto pensi dopo le 16. I sondaggi tolgono il peso sociale di essere quello che propone di rallentare.",
      },
      {
        h: "Sondaggi-riassunto a fine festa",
        body: "Dopo che l'ultimo ospite se n'è andato, manda un singolo sondaggio-riassunto la mattina dopo nella stessa chat. \"Momento migliore?\" (la bomba in piscina, il cambio playlist disastroso, la lotta a cavalluccio improvvisata, X caduto in acqua tutto vestito). È dopamina gratis per l'host, le foto vengono ricondivise e hai già piantato il seme del prossimo pool day. Gli host che lo fanno a ogni festa hanno un tasso di ritorno ospiti dell'80%. I sondaggi sono ancore di ricordi travestite da voti.",
      },
    ],
    polls: [
      { q: "Bomba o tuffo elegante?", options: ["Bomba", "Tuffo elegante", "Resto sulla sdraio"] },
      { q: "Miglior drink da piscina?", options: ["Margarita ghiacciata", "Hard seltzer", "Mojito", "Solo acqua"] },
      { q: "Genere musicale prossimo giro?", options: ["Afrobeats", "Reggaeton", "Hyperpop", "Throwback anni 2010"] },
      { q: "Chi cade in acqua tutto vestito per primo?", options: ["L'host", "L'amico simpatico", "Quello brillo", "Nessuno"] },
      { q: "Fenicottero gonfiabile o trancio di pizza?", options: ["Fenicottero", "Trancio di pizza", "Entrambi", "Nessuno dei due"] },
      { q: "A che ora il pool party?", options: ["Si parte a mezzogiorno", "Si parte alle 15", "Solo al tramonto"] },
      { q: "Bambini sì o no?", options: ["Bambini benvenuti", "Solo adulti", "Dipende dall'età"] },
      { q: "Miglior snack da piscina?", options: ["Anguria", "Patatine", "Tacos", "Gelato"] },
      { q: "Chi fa il DJ?", options: ["L'host", "L'amico con le playlist", "Shuffle di Spotify", "Tutti a turno"] },
      { q: "Promemoria crema solare?", options: ["Obbligatoria", "Gli adulti si arrangiano", "Portate lo spray", "Solo SPF 50"] },
    ],
    faq: [
      {
        q: "I sondaggi moomz funzionano sullo schermo del telefono bagnato?",
        a: "Sì — i pulsanti sono abbastanza grandi da toccare in modo affidabile anche con il dito bagnato. Lo abbiamo testato con 8 host durante l'estate 2025. Un tap per votare, niente precisione richiesta.",
      },
      {
        q: "Posso fare più sondaggi per il pool party contemporaneamente?",
        a: "Sì, creane quanti ne vuoi. Ognuno ha il suo URL breve. Ti consigliamo di fissare in alto quello attivo nella chat di gruppo così la gente non si confonde.",
      },
      {
        q: "Come votano gli ospiti senza un account?",
        a: "Toccano il link, scelgono un'opzione, fine. Niente account, niente email, niente app da scaricare. Solo un URL di 5 lettere tipo moomz.com/p7k2j.",
      },
      {
        q: "Gli ospiti brilli possono votare più volte?",
        a: "moomz usa cookie ed euristiche sull'IP per limitare a un voto per dispositivo. Non è a prova di bomba ma blocca il doppio voto casuale. Per gli host paranoici, fai uno screenshot del risultato prima del prossimo giro di drink.",
      },
      {
        q: "E se il mio pool party è solo di 4 persone?",
        a: "I sondaggi funzionano anche per gruppi piccoli — anzi meglio, visto che 4 voti contano davvero. Usali per decisioni lampo come ordinare il cibo o scegliere la musica.",
      },
    ],
    related: ["sleepover-party-it", "sweet-16-it", "party-it"],
    updatedAt: today,
  },
  {
    slug: "sleepover-party-it",
    locale: "it",
    category: "ideas",
    emoji: "🌙",
    title: "Idee sondaggi pigiama party — 30 domande notturne che gli amici voteranno",
    h1: "Sondaggi da pigiama party: dalla serata film alle confessioni delle 3 di notte",
    description:
      "30 idee di sondaggi per pigiama party per preadolescenti, teenager e adulti. Serata film, snack, twist di obbligo o verità. Anonimo, gratis, niente app.",
    intro:
      "I pigiama party hanno tre punti di decisione classici: che film, che snack, di cosa parlare alle 2 di notte. I sondaggi risolvono tutti e tre. Lancia un link moomz nella chat degli amici e lascia che tutti votino dal telefono mentre stanno sdraiati per terra. L'atmosfera resta tranquilla, niente silenzi imbarazzanti del tipo \"allora, cosa vogliamo fare?\".",
    sections: [
      {
        h: "Decisioni sul film senza litigare",
        body: "La classica crisi del pigiama party: cinque persone, cinque film diversi. Crea un sondaggio moomz con 4-6 film proposti da qualcuno, più un'opzione \"sorprendimi, sceglie l'host\". Tutti votano dal telefono in 2 minuti. Il film vincitore ha il consenso di tutti perché nessuno può lamentarsi — hanno votato. Dritta: se c'è un perdente netto, fai un secondo sondaggio tra i primi 2 per i pareggi. I pigiama party con i cuginetti più piccoli ne beneficiano in particolare, perché il bambino che urla di più non vince più di default.",
      },
      {
        h: "Guerre di snack e condimenti per la pizza",
        body: "Le discussioni sui condimenti della pizza hanno rovinato amicizie. Usa un sondaggio con 3-4 combo di condimenti (solo formaggio, salame piccante, vegetariana, metà e metà). Per più pizze, fai sondaggi separati per ognuna. Stessa logica per gli snack: \"budget assalto al distributore = 20€, votate cosa portiamo indietro\". Gli adulti che fanno pigiama party con il vino possono votare la composizione del tagliere di formaggi. Decisioni in 90 secondi, niente manipolazioni.",
      },
      {
        h: "Sondaggi obbligo o verità a tarda notte",
        body: "Verso mezzanotte l'energia cambia e la gente vuole profondità. Sostituisci obbligo o verità con sondaggi anonimi: \"chi in questa stanza sopravvivrebbe più a lungo a Hunger Games?\" oppure \"classifica il gruppo per chi sparirebbe per primo\". Visto che i sondaggi moomz sono anonimi e i voti sono aggregati, nessuno sa chi ha votato cosa — ma tutti vedono il risultato. Questo sblocca l'onestà senza prendere di mira nessuno. Usali con parsimonia: 2-3 sondaggi confessionali a pigiama party, non 20.",
      },
      {
        h: "Sondaggi-riassunto del mattino dopo",
        body: "La mattina dopo, prima che i genitori vengano a prendere qualcuno, manda un sondaggio-riassunto: \"momento migliore del pigiama party?\" con opzioni tipo \"la rivelazione del film\", \"le confessioni delle 2 di notte\", \"X che si spaventa\", \"il disastro delle pancake\". Sigilla il ricordo e fa partire la richiesta per il prossimo pigiama party. I gruppi che fanno pigiama party regolari e usano moomz dicono di farne il 30% in più all'anno rispetto a chi non li usa — i sondaggi tengono vivo il loop di dopamina tra un evento e l'altro.",
      },
    ],
    polls: [
      { q: "Miglior genere di film da pigiama party?", options: ["Horror", "Commedia romantica", "Animazione", "Maratona di reality"] },
      { q: "Condimento pizza per l'ordine di gruppo?", options: ["Salame piccante", "Margherita", "Hawaiana", "Metà e metà"] },
      { q: "Obbligo o verità di default?", options: ["Verità", "Obbligo", "Lasciamo perdere, parliamo e basta"] },
      { q: "Chi ruberà gli snack alle 3 di notte?", options: ["Quello tranquillo", "L'host", "Il più piccolo", "Quello a dieta"] },
      { q: "Miglior snack da pigiama party?", options: ["Popcorn", "Patatine", "Gelato", "Biscotti"] },
      { q: "Luci spente o lucine?", options: ["Buio totale", "Lucine", "Gli schermi dei telefoni contano"] },
      { q: "Karaoke o solo ascolto?", options: ["Karaoke", "Musica di sottofondo", "Silenzio totale"] },
      { q: "Tè o cioccolata a mezzanotte?", options: ["Cioccolata calda", "Tè alla menta", "Entrambi", "Niente, acqua"] },
      { q: "Miglior storia della buonanotte?", options: ["Una vera storia di fantasmi", "Il momento più imbarazzante", "Rivelazione della cotta", "Salta le storie"] },
      { q: "Telefono a letto: ammesso?", options: ["Sì, scroll tutta la notte", "Spento a mezzanotte", "Spento all'alba"] },
    ],
    faq: [
      {
        q: "I sondaggi moomz sono sicuri per i bambini più piccoli?",
        a: "Sì — moomz non chiede alcun account o dato personale. Solo un tap per votare. I genitori potrebbero voler supervisionare le domande poste, ma la piattaforma in sé non raccoglie nulla.",
      },
      {
        q: "Quante persone possono votare in un sondaggio?",
        a: "Illimitate. Che il tuo pigiama party abbia 3 o 30 persone, ogni dispositivo può votare. I risultati si vedono live.",
      },
      {
        q: "Posso fare un sondaggio che solo i miei amici del pigiama party possono vedere?",
        a: "I sondaggi sono accessibili tramite un URL di 5 lettere che conoscono solo le persone con cui lo condividi. Tecnicamente non è privato, ma di fatto è invisibile a chiunque sia fuori dalla chat di gruppo.",
      },
      {
        q: "E se a qualcuno si scarica il telefono durante il pigiama party?",
        a: "Può votare dal telefono di qualcun altro — i voti sono basati sul dispositivo, non sull'account, quindi un secondo dispositivo conta come un nuovo voto. Solo non votare due volte di proposito.",
      },
    ],
    related: ["pool-party-it", "sweet-16-it", "teens-it"],
    updatedAt: today,
  },
  {
    slug: "sweet-16-it",
    locale: "it",
    category: "ideas",
    emoji: "🎂",
    title: "Idee sondaggi 16 anni — 30 domande per la chat di gruppo del compleanno",
    h1: "Sondaggi per i 16 anni: dalla scelta dell'outfit al voto sul gusto della torta",
    description:
      "30 idee di sondaggi per i 16 anni per coinvolgere gli ospiti prima, durante e dopo la festa. Gusti di torta, voti sul vestito, sondaggi-sfida.",
    intro:
      "I 16 anni sono la prima festa grande che la maggior parte dei teenager organizza. Il rischio: farla male ed essere giudicati per sempre. La difesa: lascia che i tuoi amici votino sulle decisioni chiave. I sondaggi spostano la responsabilità da una sola festeggiata stressata a tutto il gruppo di amici, e creano hype prima ancora che arrivi qualcuno.",
    sections: [
      {
        h: "Sondaggi su outfit e tema",
        body: "Due settimane prima della festa, crea un sondaggio con 4 opzioni di outfit (foto da Pinterest, Instagram o dal tuo armadio). Mandalo ai tuoi 5-6 amici più stretti. L'outfit vincitore ha la piena validazione sociale — nessuno può lasciare un commento velenoso dopo, perché hanno votato tutti per quello. Stessa cosa per il tema della festa: glitter, Y2K, tutto rosa, in maschera. Resta su 3-4 opzioni perché troppe dividono il voto e non vince niente in modo chiaro.",
      },
      {
        h: "Sondaggi per gli ospiti su torta e cibo",
        body: "La torta è il momento-foto. Usa un sondaggio con i gusti della torta — crema al burro alla vaniglia, ganache al cioccolato, red velvet, torta alle fragole — e un voto estetico (bianco minimalista, rosa massimalista, a due piani, monostrato). Mandalo a tutta la lista invitati, non solo alla cerchia ristretta, così gli ospiti si sentono coinvolti. Il bonus: quando la torta viene svelata, ogni ospite riconosce la scelta che ha aiutato a fare e il momento spacca di più su Instagram.",
      },
      {
        h: "Sondaggi in tempo reale durante la festa",
        body: "Prepara qualche sondaggio per la serata stessa: \"prima canzone?\", \"chi fa il prossimo brindisi?\", \"più elegante della serata?\", \"momento più divertente?\". Proietta il QR code su una parete o condividi il link via AirDrop. Gli ospiti votano dal telefono tra un ballo e l'altro. L'energia resta alta perché la festa non ha mai un momento morto — c'è sempre un voto in corso, risultati che appaiono in tempo reale, screenshot che finiscono sui social.",
      },
      {
        h: "Sondaggi-debriefing post-festa",
        body: "Il giorno dopo, manda un ultimo sondaggio: \"momento migliore della serata?\". Opzioni: \"la rivelazione della torta\", \"il brindisi\", \"il cerchio di ballo\", \"il fail della cabina foto\". Votano tutti, fai uno screenshot del vincitore, lo posti come storia Instagram taggando la festeggiata. È un'ancora di ricordi e contenuto promozionale gratis per il compleanno dell'anno prossimo. La maggior parte delle festeggiate che lo fanno ricostruiscono la lista invitati attorno alle persone che hanno votato con entusiasmo — è un filtro sociale gratis.",
      },
    ],
    polls: [
      { q: "Tema dei 16 anni?", options: ["Tutto rosa", "Y2K", "In maschera", "Hollywood"] },
      { q: "Gusto della torta?", options: ["Vaniglia", "Cioccolato", "Red velvet", "Fragola"] },
      { q: "Colore dell'outfit?", options: ["Bianco", "Rosa", "Nero", "Argento scintillante"] },
      { q: "Prima canzone della serata?", options: ["Hit di TikTok", "Beyoncé", "Taylor Swift", "Throwback Disney"] },
      { q: "Chi fa il primo brindisi?", options: ["La migliore amica", "Mamma", "Papà", "Un fratello o sorella"] },
      { q: "Cabina foto sì o no?", options: ["Sì, essenziale", "No, solo iPhone", "Parete di Polaroid"] },
      { q: "Glow stick o stelline?", options: ["Glow stick", "Stelline", "Entrambi", "Nessuno dei due"] },
      { q: "Accompagnatori ammessi?", options: ["Sì, tutti", "Solo cerchia ristretta", "Caso per caso"] },
      { q: "Sessione karaoke?", options: ["Sì", "No", "Solo se i genitori brilli se ne vanno"] },
      { q: "Orario di fine?", options: ["Mezzanotte", "Le 2 di notte", "Finché i genitori non ci buttano fuori"] },
    ],
    faq: [
      {
        q: "I miei genitori possono vedere i risultati del sondaggio?",
        a: "Solo se condividi il link con loro. I sondaggi sono basati sull'URL, quindi chiunque abbia il link può vedere, ma deve essere invitato.",
      },
      {
        q: "E se la mia cotta vota in modo strano?",
        a: "I voti sono anonimi su moomz, quindi non vedrai chi ha votato cosa. Si vedono solo i totali. È una caratteristica, non un bug — toglie la pressione.",
      },
      {
        q: "Posso fare un sondaggio per i 16 anni in anticipo?",
        a: "Sì, i sondaggi restano aperti a tempo indeterminato. Creali 2-3 settimane prima della festa così hai tempo di agire sui risultati.",
      },
      {
        q: "moomz è meglio dei sondaggi delle storie Instagram per i 16 anni?",
        a: "I sondaggi di Instagram si fermano a 2 opzioni, troppo poche per i gusti della torta o le scelte di outfit. moomz gestisce fino a 6 opzioni e mostra le percentuali live.",
      },
    ],
    related: ["prom-night-it", "birthday-it", "teens-it"],
    updatedAt: today,
  },
  {
    slug: "prom-night-it",
    locale: "it",
    category: "ideas",
    emoji: "👑",
    title: "Idee sondaggi serata di gala — 30 domande per la chat che gasano la notte",
    h1: "Sondaggi per il ballo di fine anno: dal voto sul vestito alla scelta dell'afterparty",
    description:
      "30 idee di sondaggi per il ballo di fine anno per la chat della classe. Voti sui vestiti, re e regina del ballo, posto per l'afterparty, riassunto del giorno dopo.",
    intro:
      "Il ballo di fine anno è la serata più fotografata delle superiori. I sondaggi permettono a tutta la classe di collaborare sulle decisioni grandi — dress code, location per le foto, posto per l'afterparty — senza costringere una persona a fare il cattivo dell'organizzazione. I sondaggi moomz sono anonimi e gratis, perfetti per la chat caotica della classe.",
    sections: [
      {
        h: "Sondaggi pre-ballo su outfit e accompagnatori",
        body: "Due mesi prima, il dress code è lo stress più grande. Usa un sondaggio con 3-4 opzioni di dress code (cravatta nera, semi-formale, a tema, vai come vuoi). Mandalo alla chat della classe. Stessa cosa per i colori se il tuo gruppo di amici si vuole abbinare. Per gli accompagnatori i sondaggi sono delicati — non votare \"con chi dovrebbe andare X\", è cattivo. Vota invece per decisioni collettive: composizione del gruppo per le foto, trasporto (limousine vs Uber XL vs party bus), ristorante per la cena pre-ballo.",
      },
      {
        h: "Sondaggi live durante il ballo",
        body: "Durante il ballo stesso, lancia un sondaggio nella chat della classe: \"più elegante?\", \"miglior momento sulla pista?\", \"miglior coppia?\". Assicurati che siano categorie generali con più candidati, non sondaggi che prendono di mira una sola persona — quelli diventano cattivi. I rappresentanti di classe possono fare un sondaggio ufficiale per re e regina del ballo con moomz se la scuola non lo fa (o se il voto della scuola sembra finto). Il vantaggio: risultati istantanei, niente conteggi a mano, niente brogli perché i cookie impediscono il doppio voto.",
      },
      {
        h: "Sondaggi sulla location dell'afterparty",
        body: "L'afterparty è dove il ballo si vince o si perde. Prima del ballo, fai un sondaggio con 3-4 opzioni per l'afterparty (casa di X, il lago, il centro, una camera d'albergo). Il voto chiude alle 21 della sera del ballo così la location è decisa prima che qualcuno si gasi troppo. Funzionano anche i sondaggi logistici: \"chi accompagna chi?\", \"si va a mangiare dopo?\", \"chi porta la cassa?\". Tutta la classe si muove insieme, niente caos di messaggi all'ultimo.",
      },
      {
        h: "Sondaggi-riassunto del mattino dopo",
        body: "La mattina dopo il ballo, fai un singolo sondaggio: \"momento migliore della serata?\" con 4-5 opzioni. Il risultato diventa la didascalia non ufficiale dell'annuario. La chat della classe è al massimo dell'attenzione perché tutti vogliono rivivere la serata. Gli screenshot vengono ricondivisi, le foto di gruppo riteggate e la notte viene scolpita nella memoria collettiva. I rappresentanti che lo fanno dicono di avere oltre il 90% di presenze alla rimpatriata dopo un anno — i sondaggi hanno creato una narrazione condivisa.",
      },
    ],
    polls: [
      { q: "Vibe del dress code?", options: ["Cravatta nera", "Semi-formale", "A tema", "Vai come vuoi"] },
      { q: "Miglior trasporto per il ballo?", options: ["Limousine", "Party bus", "Uber XL", "Guidiamo noi"] },
      { q: "Cena pre-ballo?", options: ["Steakhouse", "Italiano", "Sushi", "Drive-thru ironico"] },
      { q: "Location dell'afterparty?", options: ["Casa di qualcuno", "Il lago", "Il centro", "Albergo"] },
      { q: "Miglior canzone per il lento?", options: ["Frank Ocean", "Taylor Swift", "Adele", "R&B vecchia scuola"] },
      { q: "Con chi fai il primo ballo?", options: ["Il mio accompagnatore", "La migliore amica", "Chiunque sia vicino", "Da solo"] },
      { q: "Telefono in tasca o no?", options: ["Niente telefono, solo vibe", "Telefono per le foto", "Scroll compulsivo tra una canzone e l'altra"] },
      { q: "Cabina foto o selfie?", options: ["Cabina foto", "Selfie", "Macchina usa e getta", "Fotografo professionista"] },
      { q: "Miglior cibo del dopo-ballo?", options: ["Tavola calda", "Pizza", "McDonald's", "Sushi"] },
      { q: "Inno della serata?", options: ["Beyoncé", "Drake", "Taylor Swift", "Throwback Disney"] },
    ],
    faq: [
      {
        q: "moomz è sicuro per un voto di tutta la classe?",
        a: "I cookie impediscono il doppio voto casuale e un limite sull'IP impedisce i brogli di massa. Per i sondaggi su re e regina del ballo molto combattuti il risultato è abbastanza buono — ma la scheda ufficiale della scuola resta la fonte di verità.",
      },
      {
        q: "I professori possono vedere i sondaggi del ballo?",
        a: "Solo se invitati. I sondaggi non sono indicizzati pubblicamente. Tieni l'URL dentro la chat della classe.",
      },
      {
        q: "E se il nostro ballo è la stessa sera di un altro grande evento?",
        a: "Fai un sondaggio: \"ballo o X?\" — lascia decidere il gruppo collettivamente. Meglio che una persona prenda la decisione e si prenda la colpa.",
      },
      {
        q: "moomz funziona con il WiFi della scuola?",
        a: "Sì. moomz.com si carica veloce, niente app richiesta. Funziona su qualsiasi browser di telefono moderno.",
      },
    ],
    related: ["sweet-16-it", "high-school-it", "college-it"],
    updatedAt: today,
  },
  {
    slug: "bachelorette-party-it",
    locale: "it",
    category: "ideas",
    emoji: "👰",
    title: "Sondaggi addio al nubilato — 30 decisioni da votare nella chat delle damigelle",
    h1: "Sondaggi per l'addio al nubilato: votano le amiche della sposa, non la testimone",
    description:
      "30 idee di sondaggi per l'addio al nubilato per la chat delle damigelle. Destinazione, tema, serata di sfide, brunch del recupero.",
    intro:
      "Organizzare un addio al nubilato è difficile perché la testimone si carica il peso sociale di ogni decisione. I sondaggi risolvono — ogni scelta diventa una decisione di gruppo, la sposa ottiene comunque la serata dei suoi sogni e la testimone smette di essere la cattiva quando qualcuna si lamenta della destinazione.",
    sections: [
      {
        h: "Sondaggi su destinazione e budget",
        body: "Prima decisione: la destinazione. Usa un sondaggio con 3-4 opzioni adatte al budget medio del gruppo (Ibiza, Roma, weekend al mare, una casa in campagna). Includi le fasce di budget nel testo dell'opzione: \"Ibiza (1200€/persona)\", \"Roma (800€)\", \"Mare (1500€)\", \"Weekend in casa (400€)\". Questo filtra l'auto-selezione — le damigelle a budget basso votano la casa, quelle che possono permetterselo votano Ibiza. La destinazione vincitrice ha il consenso del gruppo. Fallo 4-6 mesi prima così i voli sono ancora prenotabili.",
      },
      {
        h: "Sondaggi su tema e dress code",
        body: "Una volta bloccata la destinazione, arrivano i sondaggi sul tema. \"Disco glam\", \"cowgirl\", \"pigiama e tè\", \"Y2K\". Vota nella chat delle damigelle, condividi il risultato con la sposa per il veto. La sposa quasi mai mette il veto su un consenso di gruppo — le piace che abbiano votato tutte. Segue il dress code: bianchi abbinati, color block, accessori a tema. I sondaggi tolgono l'ansia imbarazzante del \"ma ci abbiniamo o no?\" della settimana prima.",
      },
      {
        h: "Sondaggi sulle attività per ogni giorno",
        body: "Per un addio al nubilato di 3 giorni, fai un sondaggio per ogni giorno: \"venerdì sera = discoteca, lounge o casa?\", \"sabato giorno = spa, spiaggia o attività?\", \"sabato sera = cena seduti o giro di street food?\". Manda i sondaggi in tempo reale la mattina stessa, il voto chiude a pranzo. Questo tiene il gruppo che si muove insieme ed evita la classica trappola dell'addio al nubilato in cui un sottogruppo si stacca e la sposa si sente abbandonata.",
      },
      {
        h: "Sondaggi-riassunto del brunch del recupero",
        body: "Domenica a brunch, dopo tutto: sondaggio \"momento migliore del weekend?\". Opzioni: \"l'entrata\", \"X che si addormenta\", \"il karaoke\", \"il discorso\". Fai uno screenshot del risultato, mandalo alla sposa come ricordo ufficiale. Sei mesi dopo, questo risultato vive nel discorso del matrimonio, nelle storie Instagram delle damigelle e nell'album di nozze. I sondaggi moomz sono praticamente ancore di ricordi con percentuali di voto — fanno sembrare il weekend qualcosa di canonico e non solo una sbornia confusa.",
      },
    ],
    polls: [
      { q: "Destinazione addio al nubilato?", options: ["Ibiza", "Roma", "Mare", "Weekend in campagna"] },
      { q: "Tema dell'addio al nubilato?", options: ["Disco", "Cowgirl", "Y2K", "Dea della spiaggia"] },
      { q: "Vibe del venerdì sera?", options: ["Discoteca", "Lounge", "Festa in casa", "A letto presto"] },
      { q: "Outfit abbinati?", options: ["Abbinamento totale", "Color block", "Solo accessori", "Liberi tutti"] },
      { q: "Attività del giorno?", options: ["Spa", "Spiaggia", "Corso di cucina", "Quad/jet ski"] },
      { q: "Drink del weekend?", options: ["Spumante", "Tequila", "Espresso martini", "Mocktail"] },
      { q: "Sfida per la sposa?", options: ["Karaoke da sola", "Un discorso", "Ballo in pubblico", "Niente sfide"] },
      { q: "Strategia foto?", options: ["Fotografo professionista", "Selfie di gruppo", "Macchine usa e getta", "Polaroid"] },
      { q: "Regalo dalle damigelle?", options: ["Accappatoi abbinati", "Giornata alla spa", "Gioiello inciso", "Solo il brunch"] },
      { q: "Brunch della domenica?", options: ["Mimosa a volontà", "Tavola calda unta", "Bowl salutari", "Servizio in camera"] },
    ],
    faq: [
      {
        q: "La sposa dovrebbe votare nei sondaggi?",
        a: "In genere no — i sondaggi servono alle damigelle per decidere cosa vive la sposa. Ma fai un sondaggio finale con la sposa inclusa per controllare che sia contenta del consenso.",
      },
      {
        q: "E se una damigella vota sempre contro il gruppo?",
        a: "I sondaggi anonimi riducono questo. Se continua a insistere in chat dopo il sondaggio, parlatene a quattr'occhi. Il sondaggio ti ha dato una copertura democratica.",
      },
      {
        q: "Quanto a lungo dovrebbero restare aperti i sondaggi?",
        a: "24-48 ore per le decisioni grandi come la destinazione, 1-4 ore per quelle del momento tipo \"discoteca o lounge stasera?\".",
      },
      {
        q: "Posso fare sondaggi durante il weekend stesso?",
        a: "Sì — lanciali in chat tra un'attività e l'altra. La gente voterà mentre aspetta l'Uber o è alla spa.",
      },
    ],
    related: ["bachelor-party-it", "bridesmaid-it", "wedding-toast-it"],
    updatedAt: today,
  },
  {
    slug: "bachelor-party-it",
    locale: "it",
    category: "ideas",
    emoji: "🥃",
    title: "Sondaggi addio al celibato — 30 voti della chat per il testimone",
    h1: "Sondaggi per l'addio al celibato: votano gli amici, non il testimone",
    description:
      "30 idee di sondaggi per l'addio al celibato per decidere destinazione, attività e piani di recupero. Anonimo, gratis, con opzioni tranquille.",
    intro:
      "Il compito del testimone è organizzare un addio al celibato che lo sposo ricordi e che la moglie approvi. I sondaggi aiutano dando agli amici un voto democratico — destinazione, livello di follia, piani dopo il tramonto, brunch del recupero. Il testimone smette di essere l'unico bersaglio se qualcosa va storto.",
    sections: [
      {
        h: "Sondaggi su destinazione e budget",
        body: "Las Vegas resta il default, ma molti sposi preferiscono gite di pesca, weekend di golf o giri gastronomici in città. Fai un sondaggio con 4 opzioni e un budget per ognuna. Gli amici si auto-selezionano in base a quello che possono permettersi. Manda 5 mesi prima così voli e Airbnb sono prenotabili. Se lo sposo ha opinioni forti, includilo nel sondaggio. Se vuole una sorpresa, fai il sondaggio senza di lui in una chat a parte.",
      },
      {
        h: "Sondaggi sulle attività (livello tranquillo, spinto ed estremo)",
        body: "Fai prima un sondaggio sul tono: \"quanto la facciamo grossa?\". Opzioni: \"casinò + steakhouse\", \"discoteca + nottata\", \"locale spogliarello opzionale\", \"teniamola sul classy\". Il risultato fissa il limite per il resto dell'organizzazione. Poi sondaggi sulle attività per ogni giorno: \"giorno 1 = golf, piscina o casinò?\", \"giorno 2 = barca, escursione o dormire?\". I sondaggi danno allo sposo una negabilità plausibile su quello a cui ha acconsentito — \"ha votato il gruppo\".",
      },
      {
        h: "Sondaggi su sfide e roast",
        body: "La cena con il roast è il cuore di un addio al celibato. Fai un sondaggio durante la cena: \"storia più divertente sullo sposo?\" con 4 opzioni proposte da ogni amico. Il vincitore racconta la storia. Fai uno screenshot del risultato per il discorso del matrimonio. Altri sondaggi-sfida: \"chi fa il prossimo brindisi?\", \"chi paga il prossimo giro?\", \"chi è il fotografo designato?\". Tienila leggera — gli addii al celibato vanno male quando un ragazzo viene preso di mira ripetutamente.",
      },
      {
        h: "Sondaggi di recupero e dirittura d'arrivo",
        body: "Sondaggio della domenica mattina: \"cibo di recupero?\" — tavola calda, brunch, servizio in camera o anche solo McDonald's all'aeroporto. Il testimone usa il risultato per organizzare la logistica. Sondaggio finale poco prima del matrimonio: \"momento migliore dell'addio al celibato?\" — sigillato in uno screenshot, pronto per il discorso del matrimonio. Il ricordo dell'addio al celibato diventa una storia definita invece di un weekend nebuloso, che è quello che lo sposo vuole davvero quando ci ripensa tra 10 anni.",
      },
    ],
    polls: [
      { q: "Destinazione addio al celibato?", options: ["Las Vegas", "Una città gastronomica", "Gita di pesca", "Città vicina"] },
      { q: "Livello di follia?", options: ["Casinò + bistecche", "Discoteca tutta la notte", "Locale spogliarello opzionale", "Teniamola sul classy"] },
      { q: "Attività del giorno?", options: ["Golf", "Giornata in piscina", "Quad/paintball", "Dormire"] },
      { q: "Drink del weekend?", options: ["Whisky", "Birra", "Tequila", "Mocktail"] },
      { q: "Formato della cena con il roast?", options: ["Steakhouse", "Grigliata", "Sushi", "Pizza"] },
      { q: "Quando il brindisi del testimone?", options: ["A cena", "A tarda notte", "A brunch", "Mai"] },
      { q: "Serata sigari?", options: ["Sì, essenziale", "Opzionale", "Assolutamente no"] },
      { q: "Outfit abbinato?", options: ["Abbinamento totale", "Magliette abbinate", "Solo occhiali da sole", "Liberi tutti"] },
      { q: "Brunch del recupero?", options: ["Tavola calda", "Buffet dell'hotel", "Cibo dell'aeroporto", "Saltiamolo"] },
      { q: "Miglior momento finora?", options: ["Il brindisi", "La sfida", "La foto", "I sigari"] },
    ],
    faq: [
      {
        q: "Lo sposo dovrebbe votare nei sondaggi?",
        a: "Dipende dal suo stile. Alcuni sposi vogliono dire la loro su ogni scelta, altri vogliono presentarsi e farsi sorprendere. Chiediglielo subito quale modalità preferisce.",
      },
      {
        q: "Come gestisco un amico che spinge per attività discutibili?",
        a: "Usa un sondaggio. Se il gruppo vota no, il risultato parla da sé. I sondaggi disinnescano la pressione del gruppo meglio di un singolo testimone che discute.",
      },
      {
        q: "I sondaggi possono includere le stime di costo?",
        a: "Sì — inserisci il costo nel testo dell'opzione, tipo \"Las Vegas (1500€)\" o \"Gita di pesca (600€)\". Gli amici si auto-filtrano in modo realistico.",
      },
      {
        q: "I sondaggi dell'addio al celibato sono privati?",
        a: "I sondaggi sono accessibili solo tramite URL. Tieni il link nella chat degli amici e resta di fatto privato. La sposa non ci finirà sopra per caso.",
      },
    ],
    related: ["bachelorette-party-it", "wedding-toast-it", "coworkers-it"],
    updatedAt: today,
  },
  {
    slug: "bridesmaid-it",
    locale: "it",
    category: "ideas",
    emoji: "💐",
    title: "Sondaggi chat delle damigelle — 30 decisioni da votare, non da litigare",
    h1: "Sondaggi per le damigelle: lo strato anti-drama per le squadre da matrimonio",
    description:
      "30 idee di sondaggi per la chat delle damigelle. Shopping vestiti, regalo, capelli e trucco, organizzazione addio al nubilato, giorno della cerimonia.",
    intro:
      "Le chat delle damigelle possono passare da dolci a nucleari con un solo messaggio sbagliato. I sondaggi tengono il caos produttivo: ogni disaccordo diventa un voto e la sposa non deve mediare. Usa i sondaggi moomz ovunque un messaggio \"voi che ne pensate\" scatenerebbe altrimenti 40 risposte non lette.",
    sections: [
      {
        h: "Sondaggi su vestiti e accessori",
        body: "Lo shopping del vestito da damigella è il primo grande punto critico. La sposa sceglie 3-4 modelli di vestito e li mette in un sondaggio. Le damigelle votano in privato (anonimo), senza dover salvare i sentimenti di nessuna. Il vestito vincitore ha il consenso implicito del gruppo. Stessa cosa per gli accessori: \"gioielli oro o argento?\", \"décolleté o tacchi per la cerimonia?\", \"scialle o no?\". L'80% dei drama tra damigelle parte da una persona che sente che la sua voce non ha contato — i sondaggi danno a ogni voce lo stesso peso.",
      },
      {
        h: "Sondaggi su capelli, trucco e preparazione",
        body: "La tabella di marcia del giorno è fragile. Vota con le damigelle: \"prova capelli e trucco: sì o solo il giorno stesso?\", \"raccolto o sciolti?\", \"rossetto abbinato o liberi tutte?\". Blocca le decisioni un mese prima. Il giorno, la tabella di marcia scorre liscia perché ogni decisione è stata pre-votata. Gli hairstylist dicono che le decisioni di gruppo sono 3 volte più veloci quando i sondaggi precedono la prova.",
      },
      {
        h: "Sondaggi per organizzare addio al nubilato e bridal shower",
        body: "Le damigelle ereditano l'organizzazione del bridal shower e dell'addio al nubilato. Fai sondaggi per ogni sotto-decisione: tema dello shower, location, lista regali, cibo. La testimone coordina ma sono i sondaggi a decidere. Questo è cruciale perché le damigelle risentite sono di solito quelle che si sono sentite messe da parte — i sondaggi lo evitano. Usa un sondaggio per argomento, non accorparli (\"location + tema + cibo\" in un solo sondaggio = caos).",
      },
      {
        h: "Sondaggi del giorno e del post-matrimonio",
        body: "Il giorno del matrimonio, fai un sondaggio veloce nella chat delle damigelle: \"come si vede la sposa: emozionata, calma, ansiosa, raggiante — votate\". È un check-in travestito da sondaggio. Dopo il matrimonio: \"momento migliore?\" con 4 opzioni. Screenshot e manda alla sposa come una lettera d'amore della squadra. I gruppi di damigelle che usano i sondaggi moomz dicono di avere un coinvolgimento in chat del 70% più alto dopo il matrimonio — i sondaggi tengono la squadra unita anche dopo che la sposa è in luna di miele e non guida più la chat.",
      },
    ],
    polls: [
      { q: "Colore del vestito da damigella?", options: ["Salvia", "Rosa antico", "Champagne", "Nero"] },
      { q: "Lunghezza del vestito?", options: ["Lungo", "Al polpaccio", "Al ginocchio", "Misti"] },
      { q: "Tacchi o décolleté?", options: ["Tacchi", "Décolleté basse", "Tacco largo", "Sneaker ironiche"] },
      { q: "Stile capelli?", options: ["Raccolto", "Sciolti mossi", "Semiraccolto", "Ognuna come vuole"] },
      { q: "Vibe del trucco?", options: ["Naturale", "Glam", "Rossetto deciso", "Ognuna come vuole"] },
      { q: "Destinazione addio al nubilato?", options: ["Ibiza", "Las Vegas", "Locale", "Mare"] },
      { q: "Regalo di gruppo delle damigelle alla sposa?", options: ["Giornata alla spa", "Gioiello inciso", "Cofanetto lingerie", "Album personalizzato"] },
      { q: "Vibe del giorno della cerimonia?", options: ["Lacrimevole", "Frizzante", "Rilassata", "Caotica"] },
      { q: "Stile del bouquet della sposa?", options: ["A cascata", "Tondo", "Fiori di campo", "Stelo singolo"] },
      { q: "Come si scende lungo la navata?", options: ["Da sole", "A coppie", "Tutta la squadra", "Da sole + consegna del bouquet"] },
    ],
    faq: [
      {
        q: "E se la sposa vuole ribaltare il risultato di un sondaggio?",
        a: "È il suo matrimonio — ha il veto finale. Ma fai prima il sondaggio così vede il consenso. La maggior parte delle spose va con il gruppo quando il voto è netto.",
      },
      {
        q: "Come coinvolgo le damigelle che non rispondono?",
        a: "I sondaggi funzionano meglio dei messaggi a risposta aperta. Un voto è un tap. Se dopo 24h qualcuna non ha votato, manda un promemoria gentile. Non far vergognare nessuna in chat.",
      },
      {
        q: "Posso includere la mamma della sposa nei sondaggi?",
        a: "Sì — invita chiunque con il link. Ma attenzione: troppe opinioni dividono i voti. Tieni le decisioni centrali tra damigelle + sposa.",
      },
      {
        q: "I sondaggi sono gratis per gruppi di 12+ persone?",
        a: "Sì, i sondaggi moomz sono gratis indipendentemente dalla dimensione del gruppo. Nessun costo per voto.",
      },
    ],
    related: ["bachelorette-party-it", "wedding-toast-it", "wedding-it"],
    updatedAt: today,
  },
  {
    slug: "wedding-toast-it",
    locale: "it",
    category: "ideas",
    emoji: "🥂",
    title: "Sondaggi discorso di nozze — 30 decisioni di gruppo per il discorso perfetto",
    h1: "Sondaggi per il discorso di nozze: chiedi al gruppo cosa fa ridere, fai centro",
    description:
      "30 idee di sondaggi per il discorso di nozze per testimoni, genitori e oratori a sorpresa. Storie, battute, lunghezza.",
    intro:
      "I discorsi di nozze riescono o falliscono sui dettagli. Chiedere alle persone che conoscono la coppia tira fuori storie migliori, battute più affilate e la lunghezza giusta. I sondaggi moomz permettono a chi scrive il discorso di fare un test A/B del materiale senza rivelare il discorso.",
    sections: [
      {
        h: "Sondaggi per selezionare le storie",
        body: "Il testimone ha 8 storie sullo sposo. Quali 2 fanno davvero centro? Fai un sondaggio nella chat degli amici: \"quale storia è la più divertente?\" con 4 opzioni. Ripeti con le storie imbarazzanti, quelle dolci, quelle dell'università. La vincitrice diventa la Storia 1 del discorso. La seconda diventa la Storia 2. Chi fa il sondaggio sul materiale dice di avere una reazione del pubblico migliore del 50%. Il sondaggio elimina le battute interne che non funzionano per tutti.",
      },
      {
        h: "Sondaggi su battute e tono",
        body: "I discorsi di nozze hanno una scala di tono che va dal melenso al roast. Vota con gli amici della coppia: \"livello del tono?\" con opzioni \"melenso e lacrimevole\", \"divertente + 1 lacrima\", \"roast con amore\", \"spettacolo comico\". Conta anche l'età media e la formalità del pubblico — fai un sondaggio a parte nel gruppo WhatsApp della famiglia sul tono. Il tono vincitore plasma la struttura. Il tono sbagliato è la causa numero 1 dei discorsi di nozze che floppano.",
      },
      {
        h: "Sondaggi su lunghezza e tempi",
        body: "Il più grande crimine in un discorso di nozze è superare i 4 minuti. Vota con gli amici: \"lunghezza del discorso?\" con opzioni 2 / 3 / 4 / 5 minuti. Il voto a 5 minuti quasi mai vince — è la tua prova sociale per tenerlo corto. Cronometra il discorso alle prove. Tutto ciò che supera la lunghezza vincente del sondaggio va tagliato. I sondaggi ti permettono anche di chiedere \"aprire con una battuta o con un sentimento?\" e \"chiudere alzando il calice o richiamando una storia?\".",
      },
      {
        h: "Sondaggi live la sera dei discorsi",
        body: "La sera del matrimonio, dopo i discorsi, lancia un sondaggio nella chat della festa di nozze: \"miglior discorso della serata?\" con ogni discorso come opzione. Fai uno screenshot del risultato. È un'ancora di ricordi e una classifica non ufficiale. Per le feste di nozze con più oratori, è il modo educato di celebrare il più divertente senza l'imbarazzo di una premiazione. Gli sposi vedono quali discorsi hanno fatto centro grazie ai dati, non solo a sensazione.",
      },
    ],
    polls: [
      { q: "Tono del discorso?", options: ["Melenso", "Divertente + dolce", "Roast con amore", "Pura comicità"] },
      { q: "Migliore storia con cui aprire?", options: ["L'università", "Il primo incontro", "Il momento da spalla", "L'imbarazzo familiare"] },
      { q: "Lunghezza del discorso?", options: ["2 min", "3 min", "4 min", "5 min"] },
      { q: "Aprire con?", options: ["Una battuta", "Una storia", "Un complimento", "Una citazione"] },
      { q: "Chiudere con?", options: ["Alzando il calice", "Un richiamo", "Una lacrima", "Una battuta"] },
      { q: "Citare la famiglia della sposa?", options: ["Sì, alla leggera", "Sì, con affetto", "No", "Solo se provato"] },
      { q: "Citare gli ex?", options: ["Mai", "Solo come battuta", "Sì, se leggera", "Saltiamolo"] },
      { q: "Usare appunti o memorizzare?", options: ["Appunti ok", "Memorizzare", "Entrambi", "Un cartoncino"] },
      { q: "Vibe del pubblico al matrimonio?", options: ["Per lo più conservatore", "Misto", "Per lo più giovane", "Scatenato"] },
      { q: "Miglior momento per il brindisi?", options: ["Prima di cena", "Durante la cena", "Tra le portate", "Al taglio della torta"] },
    ],
    faq: [
      {
        q: "La sposa o lo sposo dovrebbero vedere il discorso prima del matrimonio?",
        a: "In genere no — la sorpresa fa parte del gioco. Ma fai dei sondaggi pre-discorso nel loro gruppo di amici per testare il materiale. Non sapranno esattamente cosa li aspetta, ma i sondaggi tengono il discorso in linea.",
      },
      {
        q: "Quante persone dovrebbero votare sul materiale del discorso?",
        a: "Minimo 6-8. Meno e il risultato è l'opinione di una sola persona. Di più e ottieni un segnale più chiaro.",
      },
      {
        q: "Posso fare un sondaggio tra gli invitati durante il ricevimento?",
        a: "Sì, ma con leggerezza. Un sondaggio dopo il ricevimento è più educato. I sondaggi durante il ricevimento possono sembrare una messa in scena.",
      },
      {
        q: "E se il mio sondaggio sceglie una storia che gli sposi odiano?",
        a: "Fai un secondo filtro: manda le prime 2 storie al coniuge per l'approvazione (senza altro contesto). Mettono il veto se serve.",
      },
    ],
    related: ["wedding-guest-it", "bachelor-party-it", "wedding-it"],
    updatedAt: today,
  },
  {
    slug: "wedding-guest-it",
    locale: "it",
    category: "ideas",
    emoji: "💌",
    title: "Sondaggi invitati al matrimonio — 30 decisioni da votare con il tuo accompagnatore",
    h1: "Sondaggi per gli invitati al matrimonio: outfit, regalo, conferma, sopravvivere al ricevimento",
    description:
      "30 idee di sondaggi per gli invitati al matrimonio per coppie, accompagnatori e gruppi di amici che vanno allo stesso matrimonio. Outfit, regalo, accompagnatore.",
    intro:
      "Anche gli invitati al matrimonio hanno decisioni: cosa indossare, cosa regalare, se portare i bambini, dove sedersi. I sondaggi aiutano le coppie e i gruppi di amici che vanno allo stesso matrimonio a coordinarsi senza 40 messaggi avanti e indietro.",
    sections: [
      {
        h: "Sondaggi su outfit e dress code",
        body: "Gli inviti specificano il dress code ma spesso sono vaghi. Fai un sondaggio nella chat degli amici con gli altri invitati: \"è cravatta nera o solo elegante?\". Condividi la foto dell'invito, vota sull'interpretazione. Poi fai un sondaggio sull'outfit nella tua coppia o da solo: 3-4 foto di outfit, vota. L'outfit vincitore è approvato prima di indossarlo. Toglie l'ansia della mattina del matrimonio. Salva la relazione.",
      },
      {
        h: "Sondaggi per scegliere il regalo",
        body: "I regali di nozze scatenano sensi di colpa e pensieri eccessivi. Vota con il tuo gruppo di amici che va allo stesso matrimonio: \"facciamo un regalo di gruppo o individuale?\". Se di gruppo, vota le opzioni dalla lista nozze. Se individuale, vota la fascia di budget: \"50€ / 100€ / 200€ / 300€+\". Questo fissa le norme e ferma gli imbarazzanti confronti \"tu quanto hai speso\" dopo il matrimonio. Anche le coppie che vanno insieme votano: \"avevamo detto 150€ o 200€?\" — rivotate se c'è confusione.",
      },
      {
        h: "Sondaggi su accompagnatore e logistica",
        body: "Se il matrimonio ammette gli accompagnatori, fai un sondaggio nella coppia o con il gruppo di amici: \"porto X come accompagnatore?\". Sembra sciocco ma fa emergere informazioni — magari un amico preferirebbe sedersi al tuo tavolo piuttosto che il tuo accompagnatore. Per la logistica: \"hotel insieme o separati?\", \"Uber condiviso fino alla location?\", \"andiamo alla cena delle prove?\". I sondaggi trasformano l'organizzazione in uno sport di squadra.",
      },
      {
        h: "Sondaggi su ricevimento e afterparty",
        body: "Al ricevimento, fai sondaggi nella chat degli amici: \"chi prende il bouquet?\", \"facciamo lo YMCA?\", \"chi è il guidatore designato stasera?\". Dopo il matrimonio: \"momento migliore della serata?\". Questi sondaggi trasformano un ricevimento caotico in una narrazione condivisa a cui il tuo gruppo di amici farà riferimento per anni. I gruppi di invitati che votano insieme costruiscono battute interne che sopravvivono al matrimonio degli sposi stessi.",
      },
    ],
    polls: [
      { q: "Dress code del matrimonio = cravatta nera o solo elegante?", options: ["Cravatta nera rigorosa", "Abito da cocktail", "Qualsiasi cosa sembri formale"] },
      { q: "Budget regalo a persona?", options: ["50€", "100€", "200€", "300€+"] },
      { q: "Portare i bambini?", options: ["Sì, sempre", "Assumere una babysitter", "Solo se i bambini sono i benvenuti"] },
      { q: "Hotel insieme o separati?", options: ["Insieme", "Separati ma vicini", "Direttamente a casa"] },
      { q: "Presenza alla cena delle prove?", options: ["Sì, se invitati", "Solo se siamo intimi", "Saltiamola"] },
      { q: "Strategia accompagnatore?", options: ["Porto il partner", "Porto un amico", "Vado solo"] },
      { q: "Prendere il bouquet?", options: ["Sì, ci provo", "Resto indietro", "Faccio solo il tifo"] },
      { q: "Regalo in contanti o lista nozze?", options: ["Contanti", "Lista nozze", "Mix"] },
      { q: "Restare per l'ultimo ballo?", options: ["Sì, sempre", "Andiamo via alle 23", "Andiamo via quando finisce il cibo"] },
      { q: "Colore dell'outfit per il matrimonio?", options: ["Nero", "Pastello", "Colore acceso", "Completo grigio"] },
    ],
    faq: [
      {
        q: "È di cattivo gusto fare un sondaggio sull'importo del regalo di nozze?",
        a: "Non nel tuo gruppo di amici. Il sondaggio normalizza la conversazione ed evita di spendere troppo o troppo poco. Tieni il sondaggio nella tua chat, non in quella della festa di nozze.",
      },
      {
        q: "Posso fare un sondaggio alla sposa sul dress code?",
        a: "Meglio mandarle un messaggio diretto. I sondaggi sono per i tuoi amici, non per la coppia. La coppia è troppo impegnata per votare.",
      },
      {
        q: "E se il mio accompagnatore non vuole venire?",
        a: "Fai prima un sondaggio su te stesso: \"vado da solo o lascio perdere l'accompagnatore?\". A volte da solo è la mossa giusta. Non trascinarti dietro un partner riluttante.",
      },
      {
        q: "Questi sondaggi sono visibili agli sposi?",
        a: "Solo se condivisi con loro. I sondaggi della chat degli amici restano nella chat degli amici di default.",
      },
    ],
    related: ["wedding-toast-it", "wedding-it", "couple-questions-it"],
    updatedAt: today,
  },
  {
    slug: "baby-gender-reveal-it",
    locale: "it",
    category: "ideas",
    emoji: "🎈",
    title: "Idee sondaggi gender reveal — 30 scommesse per il grande svelamento del colore",
    h1: "Sondaggi per il gender reveal: raccogli le scommesse prima del taglio della torta",
    description:
      "30 idee di sondaggi per il gender reveal. Scommesse su rosa o azzurro, nome, peso, data di nascita, padrino. Anonimo e gratis.",
    intro:
      "I gender reveal sono tutta questione di attesa. I sondaggi moomz permettono a famiglia e amici di piazzare scommesse gratis su rosa vs azzurro, previsioni sul peso, indovinelli sul nome, persino la data di nascita. Il sondaggio diventa l'intrattenimento prima dello svelamento.",
    sections: [
      {
        h: "Sondaggi rosa o azzurro (e oltre)",
        body: "Il sondaggio centrale: \"rosa o azzurro?\" con la possibilità di aggiungere \"va bene comunque\" e \"gemelli?\". Manda il link al gruppo WhatsApp della famiglia una settimana prima dello svelamento. Traccia i voti in tempo reale. Il giorno dello svelamento, fai uno screenshot del conteggio finale prima che la torta venga tagliata. Lo svelamento diventa più drammatico perché il pubblico è già coinvolto con una posta in gioco. I sondaggi senza posta in gioco sembrano vuoti — i sondaggi moomz danno alla gente qualcosa per cui fare il tifo.",
      },
      {
        h: "Sondaggi per indovinare il nome",
        body: "Se i genitori hanno ristretto i nomi, vota con la famiglia: \"quale nome?\" con 4 opzioni. Oppure fai un sondaggio a indovinello aperto per divertimento anche se il nome è già deciso. I parenti che indovinano si prendono il diritto di vantarsi. Alcune coppie rivelano il nome tramite un sondaggio moomz stesso — il nome vincitore era in realtà quello scelto, la famiglia urla quando viene confermato. I sondaggi aggiungono un secondo momento di svelamento oltre al sesso.",
      },
      {
        h: "Sondaggi su peso, data di nascita e statistiche",
        body: "Le statistiche del bebè sono materiale da scommessa. Vota: \"peso alla nascita?\" (sotto 2,7 kg / 2,7-3,2 / 3,2-3,6 / 3,6+). \"Mese di nascita?\" (il mese previsto e quelli intorno). \"Colore dei capelli?\" (pelato / scuri / chiari / rossi). Questi sondaggi vanno avanti dallo svelamento fino al parto vero e proprio — 3-4 mesi di coinvolgimento leggero nella chat di famiglia. I vincitori non ottengono niente di materiale, ma il coinvolgimento è reale.",
      },
      {
        h: "Sondaggi-riassunto dopo lo svelamento",
        body: "Dopo lo svelamento, fai un sondaggio veloce: \"momento migliore dello svelamento?\" con opzioni tipo \"la torta\", \"gli applausi\", \"la reazione di X\", \"la festa di ballo dopo\". Screenshot, posta sui social. Il sondaggio diventa parte del folklore di famiglia. Gli organizzatori di gender reveal che fanno il sondaggio dopo dicono di avere 3 volte più coinvolgimento sul post sui social rispetto a chi posta solo foto — il sondaggio dà ai follower qualcosa con cui interagire.",
      },
    ],
    polls: [
      { q: "Rosa o azzurro?", options: ["Rosa", "Azzurro", "Va bene comunque", "Gemelli?"] },
      { q: "Peso alla nascita?", options: ["Sotto 2,7 kg", "2,7-3,2 kg", "3,2-3,6 kg", "3,6+ kg"] },
      { q: "Mese di nascita?", options: ["Il mese previsto", "1 mese prima", "1 mese dopo", "Altro"] },
      { q: "Capelli?", options: ["Pelato", "Capelli scuri", "Capelli chiari", "Rossi"] },
      { q: "Colore degli occhi?", options: ["Azzurri", "Marroni", "Nocciola", "Verdi"] },
      { q: "Lunghezza?", options: ["Corto", "Nella media", "Lungo", "Molto lungo"] },
      { q: "Scommessa sul carattere?", options: ["Tranquillo", "Caotico", "Rumoroso", "Misterioso"] },
      { q: "Scommessa sulla prima parola?", options: ["Mamma", "Papà", "No", "Ciao"] },
      { q: "Indovina il padrino?", options: ["Una zia", "Uno zio", "Il migliore amico", "Sorpresa"] },
      { q: "Reazione del fratellino?", options: ["Entusiasta", "Geloso", "Confuso", "Indifferente"] },
    ],
    faq: [
      {
        q: "moomz è un buon sostituto del gender reveal di persona?",
        a: "I sondaggi integrano, non sostituiscono. Lo svelamento di persona è il momento; i sondaggi costruiscono l'attesa e il riassunto.",
      },
      {
        q: "Posso fare un sondaggio per il gender reveal se non sono il genitore?",
        a: "Sì, se i genitori sono d'accordo. Alcuni genitori preferiscono la privacy — chiedi sempre.",
      },
      {
        q: "Quanto a lungo dovrebbe restare aperto il sondaggio?",
        a: "Apri 7-10 giorni prima dello svelamento, chiudi poco prima dell'annuncio. Oppure chiudi quando avviene l'annuncio — il timestamp fa un bello screenshot.",
      },
      {
        q: "Posso fare sondaggi per più bebè?",
        a: "Sì — un sondaggio per bebè, anche per i gemelli (visto che rosa/azzurro/ecc. valgono per ogni gemello).",
      },
    ],
    related: ["baby-shower-it", "family-it", "couple-questions-it"],
    updatedAt: today,
  },
  {
    slug: "thanksgiving-it",
    locale: "it",
    category: "ideas",
    emoji: "🦃",
    title: "Idee sondaggi del Ringraziamento — 30 decisioni della cena di famiglia da votare",
    h1: "Sondaggi del Ringraziamento: decidi i contorni, sopravvivi ai parenti acquisiti",
    description:
      "30 idee di sondaggi per il Ringraziamento per la cena di famiglia. Contorni, dolce, posti a tavola, opinioni controverse. Anonimo, gratis, niente app.",
    intro:
      "Il Ringraziamento è pieno di logistica e vicino alla politica. I sondaggi aiutano le famiglie a prendere decisioni su cibo e posti a tavola senza che una sola persona si carichi la colpa, e reindirizzano la tensione del tavolo verso dibattiti innocui tipo \"marshmallow sulla patata dolce: sì o no?\".",
    sections: [
      {
        h: "Sondaggi su contorni e dolce",
        body: "Due settimane prima del Ringraziamento, manda alla chat di famiglia un sondaggio con i contorni. Ogni membro della famiglia può prenotarne uno da portare. Il sondaggio mostra cosa è già coperto, evitando la tragedia dei quattro ripieni uguali. Stessa cosa per i dolci: \"torta di zucca, torta di noci pecan, torta di mele o cheesecake?\" — vota per decidere chi porta cosa. Gli host che fanno il sondaggio sul menu dicono di avere il 40% in meno di panico da spesa dell'ultimo minuto.",
      },
      {
        h: "Sondaggi su posti a tavola e arrivo",
        body: "I Ringraziamenti grandi hanno drammi sui posti a tavola. Fai un sondaggio: \"solo tavolo degli adulti o un grande tavolo unico?\", \"tavolo dei bambini: sì o no?\", \"posti assegnati o liberi tutti?\". La decisione democratica riduce le lamentele. Per la logistica degli arrivi: \"a che ora dovrebbero arrivare tutti?\" con opzioni tra arrivi scaglionati e tutti insieme. L'host smette di essere il cattivo quando qualcuno arriva in ritardo o troppo presto.",
      },
      {
        h: "Sondaggi-dibattito da tavola",
        body: "Per prevenire le liti politiche, prepara dei sondaggi per dibattiti innocui: \"salsa di mirtilli in scatola o fatta in casa?\", \"il ripieno va dentro il tacchino o a parte?\", \"marshmallow sulla patata dolce: sì o crimine di guerra?\". Lanciane uno nella chat di famiglia tra le portate. Tutto il tavolo vota dal telefono, il risultato viene letto ad alta voce, ridono tutti. Convoglia l'energia del dibattito sul cibo, non sulle opinioni controverse di zio Beppe.",
      },
      {
        h: "Sondaggi-riassunto dopo cena",
        body: "Dopo cena, fai un sondaggio: \"miglior piatto della serata?\" con i piatti veri. L'orgoglio del cuoco è reale e il vincitore si prende la sua validazione. Anche \"chi lava i piatti?\" con un twist di equità (il più giovane? il coniuge dell'host? chi ha portato il vino?). Il sondaggio rende democratica la distribuzione delle faccende. I sondaggi-riassunto diventano una tradizione annuale — le famiglie che li fanno per 3 anni di fila sviluppano un rituale divertente attorno a essi.",
      },
    ],
    polls: [
      { q: "Miglior contorno del Ringraziamento?", options: ["Ripieno", "Purè di patate", "Patata dolce", "Mac and cheese"] },
      { q: "Salsa di mirtilli: in scatola o fatta in casa?", options: ["In scatola", "Fatta in casa", "Niente mirtilli"] },
      { q: "Torta dell'anno?", options: ["Zucca", "Noci pecan", "Mele", "Cheesecake"] },
      { q: "Tavolo adulti vs tavolo bambini?", options: ["Separati", "Un grande tavolo unico", "Niente tavolo, mangiamo dove capita"] },
      { q: "Tacchino o alternativa?", options: ["Tacchino classico", "Prosciutto cotto", "Banchetto vegetariano", "Sia tacchino che prosciutto"] },
      { q: "Antipasti prima di cena?", options: ["Tagliere di formaggi", "Verdure in pinzimonio", "Niente antipasti", "Patatine e salsa"] },
      { q: "Shopping del giorno dopo?", options: ["Sì, andiamo ai saldi", "Assolutamente no", "Solo online"] },
      { q: "Partita in TV?", options: ["Sì, sempre", "No, solo chiacchiere", "Sottofondo senza audio"] },
      { q: "Migliori avanzi?", options: ["Panino con il tacchino", "Frittelle di ripieno", "Torta a colazione", "Tutto quanto"] },
      { q: "Chi cucina il tacchino?", options: ["L'host", "Mamma", "Papà", "Chi ha portato il vino"] },
    ],
    faq: [
      {
        q: "Dovrei fare sondaggi ai familiari su temi politici?",
        a: "No. I sondaggi moomz funzionano meglio per cibo e logistica. Evita la politica — vanifica lo scopo di usare i sondaggi per abbassare la tensione del tavolo.",
      },
      {
        q: "Posso fare un sondaggio sul menu del Ringraziamento una settimana prima?",
        a: "Sì. Manda il sondaggio 7-10 giorni prima così tutti hanno tempo di prenotare un piatto.",
      },
      {
        q: "E se metà della mia famiglia non usa lo smartphone?",
        a: "I sondaggi non sono per loro — raccogli i loro voti tramite l'host. Oppure accetta che i cugini nativi digitali votino e gli anziani commentino a voce.",
      },
      {
        q: "I sondaggi del Ringraziamento sono gratis?",
        a: "Sì, i sondaggi moomz sono sempre gratis. Niente account, niente abbonamenti.",
      },
    ],
    related: ["christmas-eve-it", "family-it", "fourth-of-july-it"],
    updatedAt: today,
  },
  {
    slug: "fourth-of-july-it",
    locale: "it",
    category: "ideas",
    emoji: "🎆",
    title: "Idee sondaggi 4 luglio — 30 voti di gruppo per grigliata e fuochi d'artificio",
    h1: "Sondaggi del 4 luglio: contorni della grigliata, spettacolo di fuochi, giornata in piscina",
    description:
      "30 idee di sondaggi per il 4 luglio. Menu della grigliata, posto per vedere i fuochi, scelta dei drink, inno della serata.",
    intro:
      "Il Giorno dell'Indipendenza è la festa di massa più informale dell'anno, e i sondaggi tengono democratica l'organizzazione della grigliata. Usa i sondaggi moomz nella chat di famiglia o degli amici per chiudere la lite sulla marinatura degli hamburger, il posto da cui vedere i fuochi e il dolce dopo la grigliata.",
    sections: [
      {
        h: "Sondaggi sul menu della grigliata",
        body: "Due settimane prima del 4 luglio, fai un sondaggio sul menu nella chat dell'host. \"Hamburger o costine come piatto principale?\", \"hot dog: classici o opzione vegana?\", \"contorno che ogni ospite porta\". Il sondaggio prenota chi porta cosa — come un foglio iscrizioni ma più divertente perché tutti vedono chi ha prenotato per primo. L'insalata di cavolo e quella di patate vanno sempre difese, quindi includile. L'anguria è universale, niente sondaggio.",
      },
      {
        h: "Sondaggi su dove vedere i fuochi",
        body: "Vedere i fuochi crea il più grande dibattito del 4 luglio: \"spettacolo della città o i nostri?\", \"terrazza o spiaggia?\", \"in auto o a piedi?\". Fai un sondaggio nella chat degli amici alle 16 del giorno stesso. Decisione bloccata entro le 18. Il gruppo si muove insieme — niente divisioni all'ultimo. Gli host che fanno il sondaggio sul posto dicono di avere il 90% di presenze di gruppo contro il 60% dei piani non strutturati.",
      },
      {
        h: "Sondaggi su drink e giochi",
        body: "I sondaggi sui drink danno varietà alla grigliata. \"Caraffa di birra: lager leggera, IPA, lager messicana, mocktail?\". \"Margarita ghiacciate: sì o no?\". Per i giochi da prato: \"cornhole, lancio degli anelli, spike ball, niente giochi?\". Il gioco vincitore diventa il default della giornata. I sondaggi trasformano la finestra noiosa delle 14-16 in un blocco di giochi organizzato.",
      },
      {
        h: "Sondaggi-riassunto dopo la grigliata",
        body: "Finiti i fuochi, manda un sondaggio-riassunto: \"momento migliore della giornata?\" con opzioni tipo \"gli hamburger\", \"i fuochi\", \"la festa di ballo\", \"X caduto in piscina\". Screenshot, posta sui social con #4luglio. Il sondaggio diventa la didascalia non ufficiale. Gli host che fanno il sondaggio-riassunto ogni anno dicono di avere più presenze l'anno dopo perché gli ospiti sentono che la loro esperienza è stata documentata.",
      },
    ],
    polls: [
      { q: "Piatto principale della grigliata?", options: ["Hamburger", "Costine", "Hot dog", "Spiedini di verdure"] },
      { q: "Contorno che porto?", options: ["Insalata di patate", "Insalata di cavolo", "Insalata di pasta", "Patatine"] },
      { q: "Drink della giornata?", options: ["Birra", "Margarita", "Hard seltzer", "Limonata"] },
      { q: "Da dove vediamo i fuochi?", options: ["Spettacolo della città", "Giardino", "Spiaggia", "Terrazza"] },
      { q: "Gioco da prato?", options: ["Cornhole", "Lancio degli anelli", "Spike ball", "Niente giochi"] },
      { q: "Piscina aperta?", options: ["Sì, tutto il giorno", "Dopo le 14", "Niente piscina"] },
      { q: "Dress code?", options: ["Rosso, bianco e blu", "Tutto bianco", "Da spiaggia", "Vai come vuoi"] },
      { q: "Vibe musicale?", options: ["Country", "Hit del passato", "Pop", "Caos del DJ"] },
      { q: "Miglior cibo del 4 luglio?", options: ["Hamburger", "Anguria", "Costine", "Torta di mele"] },
      { q: "Piano dopo i fuochi?", options: ["Falò", "A letto", "Al bar", "In piscina"] },
    ],
    faq: [
      {
        q: "Posso organizzare una festa del 4 luglio senza sondaggi?",
        a: "Sì, ma farai più fatica. I sondaggi dividono il carico dell'organizzazione e creano hype prima del giorno.",
      },
      {
        q: "Dovrei fare un sondaggio sulla presenza dei bambini?",
        a: "Sì — \"bambini benvenuti\" vs \"solo adulti\" è una decisione cruciale. Fallo 2 settimane prima.",
      },
      {
        q: "Posso fare un sondaggio in anticipo anche per una grigliata piccola?",
        a: "I sondaggi funzionano per qualsiasi gruppo di 3+ persone. Per 2 persone, basta parlare.",
      },
      {
        q: "E se il mio sondaggio finisce in parità?",
        a: "Fai uno spareggio tra i primi 2. Oppure lascia che sia l'host a rompere la parità — democratico ma con uno spareggio.",
      },
    ],
    related: ["thanksgiving-it", "pool-party-it", "party-it"],
    updatedAt: today,
  },
];
