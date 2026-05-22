import type { SeoPage } from "./types";

const today = "2026-05-19";

export const guidesIt: SeoPage[] = [
  {
    slug: "how-to-make-instagram-poll-it",
    locale: "it",
    category: "guides",
    emoji: "📸",
    title: "Come fare un sondaggio su Instagram (più di 2 opzioni)",
    h1: "Come fare un sondaggio su Instagram: la guida completa 2026",
    description:
      "Tutorial passo passo per il sondaggio Instagram + come superare il limite delle 2 opzioni con un link moomz. Gratis, anonimo, senza registrazione.",
    intro:
      "Il sondaggio nativo di Instagram ti blocca a 2 opzioni, non è anonimo e sparisce con la Story. Ecco il tutorial completo per usare il sondaggio nativo, più la guida per passare a 3-6 opzioni (e all'anonimato totale) con un link moomz.",
    sections: [
      {
        h: "Step 1: il sondaggio Instagram nativo (2 opzioni)",
        body: "Apri Instagram. Crea una Story. Tocca l'icona degli sticker (quadratino con faccina in alto). Cerca \"Sondaggio\" (o Poll). Inserisci la domanda (max 24 caratteri) e le 2 opzioni (max 16 caratteri ciascuna). Posiziona lo sticker. Pubblica. I follower vedono il sondaggio, toccano, votano e vedono i %.",
      },
      {
        h: "Step 2: vedere i risultati",
        body: "Apri la tua Story. Scorri dal basso verso l'alto. Vedi chi ha votato cosa. I sondaggi nativi NON sono anonimi — vedi l'identità di ogni votante. La Story scade in 24 ore, il sondaggio con lei.",
      },
      {
        h: "Step 3: superare le 2 opzioni (con moomz)",
        body: "Per 3-6 opzioni: crea il tuo sondaggio su moomz.com (10 secondi), copia il link breve (5 caratteri). Crea una Story su Instagram, aggiungi lo sticker \"Collegamento\", incolla l'URL moomz. I follower toccano lo sticker, il link si apre nel browser integrato di IG, votano e tornano alla Story.",
      },
      {
        h: "Step 4: sondaggio anonimo",
        body: "Vuoi il vero anonimato? Lo sticker nativo rivela chi ha votato. moomz non identifica mai i votanti. Crea il sondaggio su moomz, condividi tramite sticker Collegamento. Nessun follower saprà chi ha votato cosa. Perfetto per voti sensibili (opinioni, dibattiti, scelte personali).",
      },
      {
        h: "Step 5: sondaggio duraturo",
        body: "Il sondaggio Instagram muore con la Story (24 ore). I sondaggi moomz restano attivi per sempre. Ricondividi il link nella Story di domani per continuare ad accumulare voti. Ideale per raccogliere dati significativi nel corso di 1-2 settimane.",
      },
    ],
    polls: [
      { q: "Story ogni giorno o mai?", options: ["Ogni giorno", "Quando ne ho voglia", "Mai"] },
      { q: "Lo sticker nativo basta?", options: ["Sì", "Troppo limitato", "Dipende"] },
      { q: "Anonimato del voto?", options: ["Fondamentale", "Non mi interessa", "Dipende"] },
    ],
    faq: [
      { q: "Quante opzioni ha un sondaggio Instagram?", a: "Il sondaggio nativo è limitato a 2 opzioni. Con lo sticker Collegamento + moomz puoi arrivare fino a 6 opzioni." },
      { q: "I sondaggi Instagram sono anonimi?", a: "No. Instagram ti mostra chi ha votato cosa. Per l'anonimato totale, usa moomz." },
      { q: "Quanto dura un sondaggio Instagram?", a: "Il sondaggio nativo sparisce con la Story (24 ore). I sondaggi moomz restano attivi senza scadenza." },
      { q: "Posso condividere un sondaggio fuori da Instagram?", a: "Non con il sondaggio nativo. Con moomz sì — il link funziona ovunque (WhatsApp, Snap, email)." },
    ],
    related: ["how-to-make-anonymous-poll-it", "free-online-poll-maker-it", "how-to-share-poll-link-it"],
    updatedAt: today,
  },
  {
    slug: "how-to-make-anonymous-poll-it",
    locale: "it",
    category: "guides",
    emoji: "🕶️",
    title: "Come fare un sondaggio anonimo (davvero anonimo)",
    h1: "Sondaggio 100% anonimo: guida completa 2026",
    description:
      "Tutti i metodi per creare un sondaggio davvero anonimo: Google Forms, Doodle, Strawpoll, moomz. Confronto completo e tutorial passo passo.",
    intro:
      "\"Anonimo\" significa cose diverse a seconda dello strumento. Google Forms può essere configurato senza raccolta email, ma traccia gli account. Doodle è nominativo per design. Strawpoll è anonimo ma datato. moomz è anonimo per default, senza registrazione. Ecco il confronto completo.",
    sections: [
      {
        h: "Perché l'anonimato conta",
        body: "L'anonimato protegge l'onestà. In un sondaggio feedback di team, i junior non voteranno contro l'opinione del capo se vengono identificati. In un sondaggio di coppia, il partner darà una risposta \"politicamente corretta\" se la sua identità è nota. Fondamentale per sondaggi sensibili (salute, opinioni, giudizi tra pari).",
      },
      {
        h: "Google Forms anonimo: la verità",
        body: "Forms può disabilitare la raccolta email (Impostazioni → Risposte). Ma: (1) serve il login Google per i moduli interni all'organizzazione, (2) Google registra l'IP, (3) l'admin può riattivare il tracciamento in qualsiasi momento. Anonimato parziale, non totale.",
      },
      {
        h: "Doodle: non è anonimo",
        body: "Doodle è pensato per la pianificazione, quindi è nominativo per design. Vedi chi ha scelto quale data. Non è uno strumento di sondaggio anonimo — è uno strumento di organizzazione.",
      },
      {
        h: "Strawpoll: anonimo ma datato",
        body: "Il classico dei sondaggi anonimi. Ma: (1) interfaccia invecchiata, (2) nessuna condivisione moderna via Story, (3) nessun risultato live animato. Il precursore — funziona, ma è superato.",
      },
      {
        h: "moomz: anonimo per default",
        body: "Progettato per i sondaggi anonimi. Nessuna registrazione, nessuna email, nessun nome raccolto. Anti-doppio voto via cookie. Risultati live animati. Link breve da 5 caratteri, condivisibile su Insta, Snap, WhatsApp, Discord. Crea in 10 secondi, condividi il link, guarda i risultati in tempo reale.",
      },
    ],
    polls: [
      { q: "Strumento anonimo preferito?", options: ["Google Forms", "Strawpoll", "moomz", "Altro"] },
      { q: "Quanto è importante l'anonimato?", options: ["Sempre", "Dipende", "Non mi interessa"] },
    ],
    faq: [
      { q: "Google Forms è davvero anonimo?", a: "Non del tutto. Puoi disabilitare la raccolta email, ma Google registra comunque l'IP. Per un anonimato totale, scegli moomz o Strawpoll." },
      { q: "Strawpoll o moomz?", a: "Strawpoll funziona ma è datato. moomz è più moderno e ottimizzato per la condivisione mobile." },
      { q: "C'è un limite di voti su moomz?", a: "No. 4 votanti o 4.000, l'esperienza è la stessa." },
      { q: "Come evitare che qualcuno voti due volte?", a: "moomz blocca i voti multipli via cookie. Una persona = un voto." },
    ],
    related: ["free-online-poll-maker-it", "strawpoll-alternative-it", "how-to-make-instagram-poll-it", "how-to-share-poll-link-it"],
    updatedAt: today,
  },
  {
    slug: "free-online-poll-maker-it",
    locale: "it",
    category: "guides",
    emoji: "💸",
    title: "Sondaggio online gratis: top 6 strumenti a confronto (2026)",
    h1: "Sondaggio online gratis: confronto 2026",
    description:
      "Confronto tra i 6 migliori strumenti gratuiti per sondaggi: Google Forms, Strawpoll, Doodle, Typeform, Mentimeter, moomz.",
    intro:
      "Fare un sondaggio gratis nel 2026 è possibile, ma ogni strumento ha i suoi limiti. Google Forms è potente ma non garantisce l'anonimato totale. Doodle è per la pianificazione. Typeform limita le risposte. moomz è gratuito, anonimo, senza limiti. Ecco il confronto.",
    sections: [
      {
        h: "Google Forms",
        body: "Gratuito, integrato con Workspace. Potente per moduli lunghi. Limiti: macchinoso per sondaggi veloci, richiede un account Google per creare, anonimato parziale, nessuna condivisione mobile-first. Ideale per survey formali con più campi.",
      },
      {
        h: "Strawpoll",
        body: "Gratuito, anonimo, semplice. Limiti: interfaccia datata, nessun risultato animato, scarsa ottimizzazione mobile e per le Story. Il nonno del sondaggio veloce. Funziona, ma non brilla più.",
      },
      {
        h: "Doodle",
        body: "Gratuito per sondaggi di disponibilità. Limiti: pensato per la scelta delle date, non per l'opinione. Nominativo per design. Perfetto per organizzare una riunione, sbagliato per sondaggi di opinione.",
      },
      {
        h: "Typeform",
        body: "Bellissimo, mobile-friendly. Ma: 10 risposte/mese nel piano gratuito, piani a 25€/mese oltre. Ottimo per moduli complessi (NPS, feedback clienti), troppo pesante per un sondaggio veloce.",
      },
      {
        h: "Mentimeter",
        body: "Eccellente per presentazioni live (corsi, conferenze). Limiti: massimo 2 sondaggi per presentazione nel piano gratuito, non pensato per la condivisione social. La scelta giusta per la formazione, non per Instagram.",
      },
      {
        h: "moomz",
        body: "Gratuito, anonimo, nessun limite di risposte, condivisione mobile-first, risultati live animati. Progettato per sondaggi veloci e condivisione nelle Story. Limiti: massimo 6 opzioni, solo un campo per sondaggio. Ideale per: Insta, Snap, TikTok, WhatsApp, feste, dibattiti.",
      },
    ],
    polls: [
      { q: "Che strumento usi?", options: ["Google Forms", "Strawpoll", "Doodle", "moomz"] },
      { q: "Cosa conta di più per te?", options: ["Anonimato", "Design", "Limite gratuito", "Facilità di condivisione"] },
    ],
    faq: [
      { q: "Qual è lo strumento più semplice per sondaggi gratuiti?", a: "moomz per sondaggi veloci e condivisione mobile. Strawpoll come alternativa. Google Forms per moduli più lunghi." },
      { q: "moomz è davvero gratuito?", a: "Sì — risposte illimitate, nessuna pubblicità, nessun piano premium obbligatorio." },
      { q: "Il migliore per i sondaggi anonimi?", a: "moomz di default. Strawpoll come backup. Google Forms offre anonimato parziale." },
      { q: "Il migliore per scegliere una data?", a: "Doodle rimane il migliore per questo. moomz è per sondaggi di opinione e decisione." },
    ],
    related: ["strawpoll-alternative-it", "how-to-make-anonymous-poll-it", "how-to-make-instagram-poll-it", "how-to-share-poll-link-it"],
    updatedAt: today,
  },
  {
    slug: "strawpoll-alternative-it",
    locale: "it",
    category: "guides",
    emoji: "🆕",
    title: "Alternative a Strawpoll: 3 strumenti moderni nel 2026",
    h1: "Alternative a Strawpoll: 3 opzioni moderne nel 2026",
    description:
      "Strawpoll sta invecchiando. Ecco 3 alternative moderne: moomz, Polldaddy, Mentimeter. Confronto e tutorial.",
    intro:
      "Strawpoll ha inventato il sondaggio anonimo veloce. Ma l'interfaccia non è evoluta dal 2010, il mobile è sottotono e l'esperienza di voto è antiquata. Ecco 3 alternative moderne: moomz, Polldaddy, Mentimeter. Ognuna eccelle in un caso d'uso diverso.",
    sections: [
      {
        h: "Perché abbandonare Strawpoll",
        body: "Funziona, ma: (1) design datato, (2) scarsa condivisione via Story/TikTok, (3) risultati statici, (4) URL lungo. Nel 2026, gli utenti si aspettano un'esperienza moderna, mobile-first, con risultati live animati.",
      },
      {
        h: "moomz: moderno e senza fronzoli",
        body: "Creato nel 2025 per colmare il vuoto di Strawpoll: design glassmorphism, risultati live animati, URL breve da 5 caratteri, mobile-first, anonimo per default, senza registrazione. Compatibile con Insta, Snap, TikTok, WhatsApp.",
      },
      {
        h: "Polldaddy / Crowdsignal: alternativa pro",
        body: "Polldaddy (ora Crowdsignal) è l'opzione professionale. Ottime funzioni (logo, branding, export Excel), ma a pagamento oltre 200 risposte/mese. Se fai sondaggi marketing con branding, ottimo. Per un sondaggio veloce tra amici, è esagerato.",
      },
      {
        h: "Mentimeter: alternativa per presentazioni live",
        body: "Perfetto per presentazioni live (corsi, conferenze). Proietti un QR code, il pubblico vota dal telefono, i risultati appaiono in diretta. Limite: non pensato per la condivisione nelle Story.",
      },
      {
        h: "Quale strumento scegliere",
        body: "Story / TikTok / sondaggi per feste: moomz. Sondaggi aziendali con branding: Polldaddy. Sondaggi in presentazioni live: Mentimeter. Moduli complessi con più campi: Typeform o Google Forms.",
      },
    ],
    polls: [
      { q: "Perché lasci Strawpoll?", options: ["Troppo vecchio", "Mobile scarso", "URL lungo", "Non lo lascio"] },
      { q: "Alternativa preferita?", options: ["moomz", "Polldaddy", "Mentimeter", "Resto su Strawpoll"] },
    ],
    faq: [
      { q: "moomz è davvero gratuito?", a: "Sì — gratuito, voti illimitati, nessuna pubblicità, nessun piano premium obbligatorio." },
      { q: "Perché abbandonare Strawpoll?", a: "Interfaccia datata, mobile insufficiente, nessuna condivisione social moderna. Per sondaggi veloci da condividere nelle Story, le alternative sono migliori." },
      { q: "Posso importare i vecchi sondaggi da Strawpoll?", a: "No — nessun percorso di importazione. Si riparte da zero, è velocissimo (10 secondi per sondaggio)." },
      { q: "moomz raccoglie dati personali?", a: "No. Nessuna registrazione, nessuna email, nessun tracciamento. Conforme al GDPR per design." },
    ],
    related: ["free-online-poll-maker-it", "how-to-make-anonymous-poll-it", "how-to-make-instagram-poll-it", "how-to-share-poll-link-it"],
    updatedAt: today,
  },
  {
    slug: "how-to-share-poll-link-it",
    locale: "it",
    category: "guides",
    emoji: "🔗",
    title: "Come condividere un link sondaggio ovunque (Insta, Snap, WhatsApp, Discord)",
    h1: "Condividere un link sondaggio su tutte le piattaforme",
    description:
      "Tutorial per condividere un link sondaggio su Instagram Story, Snap, WhatsApp, Discord, TikTok e Telegram. Con anteprime ricche.",
    intro:
      "Un sondaggio è utile solo se le persone votano. Condividere il link nel modo giusto è metà della battaglia. Ecco il metodo esatto per condividere un sondaggio moomz su Instagram Story, Snap Story, WhatsApp, Discord, bio TikTok e Telegram — con anteprime ricche su ogni piattaforma.",
    sections: [
      {
        h: "Instagram Story",
        body: "Crea il sondaggio moomz, copia il link. Crea una Story (foto, testo o video). Tocca gli sticker, cerca \"Collegamento\". Incolla l'URL moomz. Personalizza il testo dello sticker (\"vota qui\"). Posiziona sulla Story, pubblica. I follower toccano, votano nel browser integrato di IG, tornano alla Story.",
      },
      {
        h: "Snapchat Story",
        body: "Crea uno Snap (foto o testo). Tocca l'icona graffetta (barra destra). Incolla l'URL moomz. Personalizza il testo del pulsante. Invia alla tua Story. Gli amici vedono un pulsante \"Vedi altro\" — toccano, votano, tornano.",
      },
      {
        h: "WhatsApp",
        body: "Apri WhatsApp (gruppo o contatto). Incolla il link moomz nella chat. WhatsApp mostra un'anteprima ricca: titolo del sondaggio, opzioni, pulsante per votare. I destinatari toccano, votano nel browser, tornano alla chat.",
      },
      {
        h: "Discord",
        body: "Incolla in qualsiasi canale o DM. Discord mostra un embed ricco: titolo del sondaggio, opzioni, anteprima immagine. I membri cliccano, votano, tornano su Discord.",
      },
      {
        h: "Bio TikTok (o didascalia video)",
        body: "Incolla l'URL moomz nel campo sito web del profilo (Profilo → Modifica profilo → Sito web). Viene mostrato come link cliccabile. Citalo nel video (\"vota in bio\"). Le didascalie dei video non supportano link cliccabili per gli account personali.",
      },
      {
        h: "Telegram",
        body: "Incolla in qualsiasi chat o canale. Telegram mostra un'anteprima ricca. I membri toccano, votano, tornano.",
      },
    ],
    polls: [
      { q: "Migliore piattaforma per condividere sondaggi?", options: ["Instagram", "TikTok", "WhatsApp", "Discord"] },
      { q: "Usi lo sticker Collegamento su Insta?", options: ["Sempre", "A volte", "Mai"] },
    ],
    faq: [
      { q: "Il link moomz funziona ovunque?", a: "Sì — sticker Collegamento Instagram, graffetta Snap, chat WhatsApp/Discord/Telegram con anteprima, email, SMS." },
      { q: "Si apre nell'app o nel browser?", a: "Su Insta/Snap/Discord il link si apre nel browser integrato dell'app. Su WhatsApp/Telegram nel browser di sistema. Stessa UX ovunque." },
      { q: "Posso tracciare chi ha cliccato?", a: "No — moomz non traccia i click individuali per tutelare la privacy. Vedi solo il conteggio totale dei voti, non chi ha votato." },
      { q: "Quanto è corto il link?", a: "5 caratteri dopo moomz.com/ (es. moomz.com/abcde). Totale: 13 caratteri." },
    ],
    related: ["how-to-make-instagram-poll-it", "how-to-make-anonymous-poll-it", "free-online-poll-maker-it", "strawpoll-alternative-it"],
    updatedAt: today,
  },
  {
    slug: "icebreaker-poll-questions-it",
    locale: "it",
    category: "guides",
    emoji: "🧊",
    title: "Domande rompighiaccio per sondaggi — quando e come usarle",
    h1: "Sondaggi rompighiaccio: quando e come usarli",
    description:
      "Guida completa ai sondaggi rompighiaccio — quando funzionano, cosa chiedere, come introdurli in riunioni, appuntamenti, classi e nuovi gruppi.",
    intro:
      "I sondaggi rompighiaccio sono il modo più veloce per far parlare una stanza silenziosa. Ma la domanda sbagliata ammazza il clima più in fretta di nessuna domanda. Ecco la guida completa: quando usarli, cosa chiedere, come presentarli.",
    sections: [
      {
        h: "Quando funzionano (e quando no)",
        body: "Funzionano: inizio riunione, primo appuntamento, nuovo team, presentazione in classe, gruppo di persone che non si conoscono. Non funzionano: fine di una lunga sessione, dopo un conflitto, con persone che si conoscono già benissimo. Scegli il momento giusto.",
      },
      {
        h: "Come introdurre un sondaggio rompighiaccio",
        body: "Sbagliato: \"facciamo un rompighiaccio\". Suona aziendale, uccide l'umore. Giusto: \"ho questa app assurda, proviamo una cosa veloce\". \"Vogliamo rompere il ghiaccio? Votate qui\". Presentalo come un gioco, non come un esercizio.",
      },
      {
        h: "Cosa chiedere: 3 livelli",
        body: "Livello 1 (sicuro): caffè o tè, mare o montagna, vibe del weekend. Livello 2 (rivelatore): cibo del cuore, città dei sogni, superpotere. Livello 3 (profondo): paura più grande, vittoria più grande dell'anno. Inizia dal livello 1 e sali gradualmente.",
      },
      {
        h: "Quanti sondaggi in una sessione",
        body: "Riunione: 1-2 all'inizio. Primo appuntamento: 3-5 distribuiti nella serata. Classe: 1 a sessione, ogni settimana. Non bombardare di domande — tienilo naturale.",
      },
      {
        h: "L'orario conta",
        body: "Rompighiaccio mattutino = carica energetica (\"vibe di stamattina?\"). Rompighiaccio serale = riflessione (\"momento migliore della giornata?\"). A metà riunione = pausa zuccheri. Adatta il rompighiaccio all'energia che vuoi generare.",
      },
    ],
    polls: [
      { q: "Vibe di stamattina?", options: ["🔥 al massimo", "😊 bene", "😐 così così", "😴 stanco/a"] },
      { q: "Momento migliore della tua giornata?", options: ["Mattina", "Pranzo", "Pomeriggio", "Sera"] },
      { q: "Caffè o tè?", options: ["Caffè", "Tè", "Matcha", "Nessuno dei due"] },
      { q: "Weekend dei sogni?", options: ["Avventura", "Relax", "Uscite sociali", "Da solo/a"] },
    ],
    faq: [
      { q: "I rompighiaccio non sono un po' imbarazzanti?", a: "Solo quando sono forzati. Un \"votiamo su questa domanda stupida\" funziona. Un \"rompighiaccio obbligatorio di team\" no." },
      { q: "E se la gente non vota?", a: "Scegli domande più semplici. Oppure elimina la pressione sociale con l'anonimato (moomz è anonimo per default)." },
      { q: "Per le riunioni online?", a: "Incolla il link in chat all'inizio. Le persone votano durante i convenevoli iniziali. L'energia sale quando appaiono i risultati." },
      { q: "Quante persone servono per un buon rompighiaccio?", a: "Ideale tra 4 e 30 persone. Sotto 4 sembra forzato; sopra 30 è troppo impersonale." },
    ],
    related: [],
    updatedAt: today,
  },
  {
    slug: "share-poll-whatsapp-discord-slack-en-it",
    locale: "it",
    category: "guides",
    emoji: "🔗",
    title: "Come condividere un sondaggio moomz su WhatsApp, Discord, Slack",
    h1: "Condividere un sondaggio moomz su WhatsApp, Discord, Slack — passo passo",
    description:
      "Guida passo passo per condividere un sondaggio moomz su WhatsApp, Discord e Slack. Anteprime link, integrazione nei thread e consigli sulle notifiche.",
    intro:
      "Una volta creato il tuo sondaggio moomz, l'URL funziona in qualsiasi app di chat. Ma ogni piattaforma ha le sue peculiarità. Ecco il modo ottimale per condividere sondaggi moomz su WhatsApp, Discord e Slack — con anteprime link, messaggi in evidenza e gestione delle notifiche.",
    sections: [
      {
        h: "WhatsApp: incolla il link, anteprima automatica",
        body: "Incolla l'URL moomz in qualsiasi chat WhatsApp. WhatsApp recupera automaticamente una scheda anteprima con la domanda del sondaggio, l'emoji e il numero di opzioni. L'anteprima rende il messaggio toccabile. Per i gruppi, invia il link con un'introduzione breve: \"Votate pizza o sushi stasera\". Metti in evidenza il messaggio nelle info chat per i sondaggi in corso. WhatsApp non ha sondaggi nativi oltre le 12 opzioni, quindi moomz colma il vuoto per set di scelte più ampi.",
      },
      {
        h: "Discord: embed nei canali con anteprima ricca",
        body: "Su Discord, incolla il link moomz in qualsiasi canale. L'embed Discord si espande mostrando l'anteprima del sondaggio. Per i canali vocali, condividi il link nella chat a fianco — i votanti cliccano e votano tra un round e l'altro. Per le community Discord, crea un canale #sondaggi e usa moomz per le decisioni della community. Il sondaggio nativo Discord è limitato a un server; i sondaggi moomz viaggiano tra server tramite URL.",
      },
      {
        h: "Slack: funziona in qualsiasi canale o DM",
        body: "Slack espande automaticamente gli URL moomz in una scheda anteprima che mostra la domanda e le opzioni. Per le decisioni di team, pubblica nel canale pertinente con una scadenza chiara (\"Votate entro venerdì alle 17\"). Per i sondaggi aziendali, metti in evidenza in #general. I sondaggi integrati di Slack richiedono una configurazione workflow; i sondaggi moomz funzionano istantaneamente via URL. Bot come Polly sono concorrenti, ma moomz vince per i voti anonimi dove il tracciamento dell'identità è indesiderato.",
      },
      {
        h: "Best practice cross-platform",
        body: "Stesso sondaggio, più piattaforme: incolla l'URL moomz su WhatsApp, Discord, Slack e Telegram contemporaneamente per la massima portata. L'URL funziona ovunque perché moomz è web-based. Per le audience di creator, linka da bio Instagram + bio TikTok + tweet pinnato Twitter verso lo stesso sondaggio. Il funnel cross-platform converge su un'unica pagina risultati. Alcuni creator riportano un numero di voti 5 volte superiore rispetto alla condivisione su singola piattaforma.",
      },
    ],
    polls: [
      { q: "Migliore piattaforma per condividere sondaggi?", options: ["WhatsApp", "Discord", "Slack", "Telegram"] },
      { q: "L'anteprima automatica conta?", options: ["Sì", "No", "Abbastanza", "Sempre"] },
      { q: "Mettere il sondaggio in evidenza?", options: ["Sempre", "A volte", "Mai", "Solo i grandi"] },
      { q: "Messaggio con scadenza importante?", options: ["Sì", "No", "Abbastanza", "Fondamentale"] },
      { q: "Migliore feature moomz nelle chat?", options: ["Anonimo", "Risultati live", "URL breve", "Nessun signup"] },
      { q: "Condivisione cross-platform?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Sondaggio nativo vs moomz?", options: ["moomz", "Nativo", "Entrambi", "Nativo + moomz"] },
    ],
    faq: [
      {
        q: "WhatsApp mostra i risultati nell'anteprima?",
        a: "Mostra la domanda e il numero di opzioni. Per i risultati live, i destinatari cliccano il link.",
      },
      {
        q: "Posso mettere in evidenza un sondaggio moomz su Discord?",
        a: "Sì — puoi pinnare qualsiasi messaggio, compresi quelli con URL di sondaggi. Il messaggio pinnato mostra l'embed.",
      },
      {
        q: "Il workspace Slack blocca i link esterni?",
        a: "Alcuni workspace limitano l'espansione dei link. moomz funziona comunque — l'URL è cliccabile, solo senza anteprima.",
      },
      {
        q: "Posso condividere lo stesso sondaggio su più piattaforme?",
        a: "Sì — un solo URL moomz funziona su tutte le piattaforme. Tutti i voti si aggregano in un'unica pagina risultati.",
      },
    ],
    related: ["how-to-share-poll-link-it"],
    updatedAt: today,
  },
  {
    slug: "embed-poll-blog-notion-en-it",
    locale: "it",
    category: "guides",
    emoji: "📝",
    title: "Come incorporare un sondaggio moomz nel tuo blog o su Notion",
    h1: "Incorporare un sondaggio moomz in un post del blog o su Notion",
    description:
      "Guida passo passo: incorpora un sondaggio moomz su WordPress, Notion, Ghost o qualsiasi blog. Opzioni iframe e link.",
    intro:
      "I sondaggi incorporati aumentano il coinvolgimento degli articoli del 60%. Ecco come incorporare un sondaggio moomz in un post del blog, una pagina Notion, un sito Ghost o qualsiasi piattaforma che supporti HTML o iframe.",
    sections: [
      {
        h: "Su Notion: incolla l'URL",
        body: "Notion converte automaticamente gli URL in schede embed. Incolla il tuo URL moomz in una pagina Notion, clicca \"Crea embed\" quando richiesto. Il sondaggio appare come una scheda interattiva. I lettori votano senza lasciare la pagina Notion. Funziona per documenti condivisi Notion, siti Notion pubblici e wiki pubblicati su Notion. Il sondaggio si aggiorna in tempo reale man mano che arrivano i voti.",
      },
      {
        h: "Su WordPress: shortcode o iframe",
        body: "WordPress supporta gli iframe tramite il blocco HTML. Incolla il codice iframe moomz (disponibile dal menu di condivisione della pagina del sondaggio) nel blocco HTML. Il sondaggio si renderizza inline. In alternativa, gli utenti WordPress su versioni self-hosted possono installare il plugin moomz (quando disponibile) per l'embedding nativo via shortcode. Per i temi che non supportano iframe, usa il blocco link-con-anteprima.",
      },
      {
        h: "Su Ghost, Substack, Medium",
        body: "Ghost e Substack accettano iframe tramite le loro schede embed HTML. Medium non consente iframe — per Medium, incolla l'URL moomz come link normale; Medium crea un'anteprima ricca. Il lettore clicca per votare su moomz, poi torna al tuo articolo. Meno integrato dell'iframe, ma funziona sulle piattaforme più restrittive.",
      },
      {
        h: "Best practice per i sondaggi incorporati",
        body: "Posiziona i sondaggi incorporati al 60-70% dell'articolo (dopo l'argomento principale, prima della conclusione). È il momento naturale di riflessione. Usa sondaggi con 2-3 opzioni per il massimo coinvolgimento. Includi sempre un link alternativo al sondaggio moomz nel caso in cui l'iframe non funzioni per alcuni lettori. Tieni traccia di quali articoli generano più voti — sono il tuo template di contenuto ad alto engagement.",
      },
    ],
    polls: [
      { q: "Migliore piattaforma per sondaggi incorporati?", options: ["Notion", "WordPress", "Ghost", "Medium"] },
      { q: "Iframe o link?", options: ["Iframe", "Link", "Entrambi", "Mix"] },
      { q: "Posizionamento migliore nell'articolo?", options: ["Inizio", "Metà", "60-70%", "Fine"] },
      { q: "I sondaggi incorporati aumentano il coinvolgimento?", options: ["Sì", "No", "Abbastanza", "Tantissimo"] },
      { q: "2 o 4 opzioni?", options: ["2", "3", "4", "Mix"] },
      { q: "Tracciare quali articoli generano voti?", options: ["Sì", "No", "A volte", "Fondamentale"] },
      { q: "Sondaggi incorporati o link condiviso?", options: ["Incorporato", "Link", "Entrambi", "Dipende"] },
    ],
    faq: [
      {
        q: "L'iframe rallenta la mia pagina?",
        a: "Leggermente — gli iframe moomz si caricano in lazy. I blog moderni li gestiscono senza problemi.",
      },
      {
        q: "Posso personalizzare lo stile dell'iframe?",
        a: "Personalizzazione limitata. Colore di sfondo e angoli arrotondati sono regolabili. Theming completo nel piano premium.",
      },
      {
        q: "I sondaggi incorporati sono anonimi?",
        a: "Sì — stesso anonimato del sondaggio standalone. I voti sono anonimi per i lettori del tuo blog.",
      },
      {
        q: "Posso tracciare i voti dal mio blog separatamente?",
        a: "Non ancora — i voti si aggregano in un unico risultato. Tracciamento basato su UTM nel piano premium in arrivo.",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-it", "how-to-share-poll-link-it", "free-online-poll-maker-it"],
    updatedAt: today,
  },
  {
    slug: "read-poll-results-without-bias-en-it",
    locale: "it",
    category: "guides",
    emoji: "🔍",
    title: "Come leggere i risultati di un sondaggio senza bias",
    h1: "Leggere i risultati di un sondaggio senza bias: guida pratica",
    description:
      "Come leggere i risultati di un sondaggio senza distorsioni. Dimensione del campione, bias di selezione, timing del voto e come evitare il confirmation bias.",
    intro:
      "I risultati di un sondaggio ti ingannano se li leggi male. Dimensione del campione, bias di selezione, timing del voto e confirmation bias distorcono tutto. Ecco come leggere i risultati di un sondaggio moomz (o qualsiasi sondaggio) con il giusto scetticismo calibrato.",
    sections: [
      {
        h: "Dimensione del campione: quanti voti bastano",
        body: "Sotto i 30 voti, i risultati sono rumore. 30-100 voti danno un segnale di direzione. 100-500 voti sono statisticamente significativi per domande binarie. Oltre 500 voti i risultati sono robusti. moomz mostra il totale dei voti in modo prominente — controlla il numero prima di trarre conclusioni. Una maggioranza del 70% su 20 voti non significa nulla; su 500 voti è reale.",
      },
      {
        h: "Bias di selezione: chi ha davvero votato",
        body: "Se il tuo sondaggio è nel gruppo chat di 10 amici, i risultati riflettono i tuoi amici, non il mondo. Se pubblicato su Instagram, riflettono i tuoi follower, filtrati dalla tua estetica e dal tuo mondo. Per una lettura onesta, chiediti: chi c'è in questo pubblico, cosa credono già, chi non voterà? La risposta aggiusta il risultato. I sondaggi moomz pubblicati sulle app di dating tenderanno verso la visione degli utenti di quelle app.",
      },
      {
        h: "Timing del voto: i primi 30 minuti mentono",
        body: "I primi 30 minuti di voto mostrano spesso un'estrema distorsione perché i votanti iniziali sono tipicamente i tuoi follower più coinvolti (che condividono il tuo punto di vista). Aspetta 24 ore prima di trarre conclusioni. I risultati live di moomz mostrano lo stato attuale; lascia che la curva si stabilizzi prima di leggere il verdetto. I risultati finali a 24-48 ore sono più rappresentativi.",
      },
      {
        h: "Confirmation bias: stai leggendo quello che vuoi?",
        body: "Se ti aspettavi che vincesse X e X ha vinto, analizza con più attenzione. Hai formulato la domanda in favore di X? Hai condiviso dove si concentrano i sostenitori di X? Leggi i risultati come se volessi che vincesse Y. Il check del bias rivela spesso problemi nella costruzione del sondaggio. Buona pratica: fai rileggere gli stessi risultati a un amico che non condivide la tua visione — la sua interpretazione svela i tuoi punti ciechi.",
      },
    ],
    polls: [
      { q: "Minimo voti per un risultato valido?", options: ["10", "30", "100", "500"] },
      { q: "Quante ore aspettare per leggere il risultato?", options: ["1h", "24h", "48h", "1 settimana"] },
      { q: "Il bias di selezione è reale?", options: ["Sì", "No", "Abbastanza", "Fondamentale"] },
      { q: "Il confirmation bias è reale?", options: ["Sì", "No", "Abbastanza", "Sempre"] },
      { q: "Far rileggere a un amico: utile?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Ti fidi dei sondaggi nelle chat di amici?", options: ["Sì", "No", "In parte", "Scettico/a"] },
      { q: "Ti fidi dei sondaggi sui social?", options: ["Sì", "No", "Abbastanza", "Meno"] },
      { q: "Controlli sempre il conteggio dei voti prima?", options: ["Sempre", "A volte", "Mai", "Dovrei"] },
    ],
    faq: [
      {
        q: "Perché i risultati iniziali di un sondaggio sono fuorvianti?",
        a: "I primi votanti sono il tuo pubblico più coinvolto, già orientato verso il tuo punto di vista. Aspetta 24 ore per un equilibrio maggiore.",
      },
      {
        q: "Un risultato 60/40 è significativo?",
        a: "Dipende dalla dimensione del campione. Su 30 voti, no. Su 500, sì — è una chiara preferenza di maggioranza.",
      },
      {
        q: "Come riduco il bias di selezione?",
        a: "Condividi il sondaggio fuori dalla tua bolla. La condivisione cross-platform aiuta. I sondaggi solo in chat di amici sono distorti.",
      },
      {
        q: "I sondaggi anonimi sono più onesti?",
        a: "In generale sì. Il voto identificato sopprime le opinioni minoritarie.",
      },
    ],
    related: ["anonymous-vs-identified-poll-en-it"],
    updatedAt: today,
  },
  {
    slug: "write-poll-question-people-answer-en-it",
    locale: "it",
    category: "guides",
    emoji: "✍️",
    title: "Come scrivere una domanda di sondaggio che fa davvero votare",
    h1: "Scrivere una domanda di sondaggio che fa votare: guida parola per parola",
    description:
      "Come scrivere una domanda di sondaggio che ottiene voti. Lunghezza, formulazione, specificità, pattern di aggancio emotivo.",
    intro:
      "La differenza tra un tasso di voto del 5% e del 35% sta nella domanda stessa. Breve, specifica, in seconda persona, leggermente emotiva. Ecco la guida parola per parola per scrivere domande di sondaggio che fanno votare.",
    sections: [
      {
        h: "Lunghezza: resta sotto le 12 parole",
        body: "Le domande sotto le 12 parole ottengono il 60% di voti in più rispetto a quelle più lunghe. I votanti scorrono veloci; non analizzano frasi lunghe. \"Pizza o sushi stasera?\" batte \"Quale opzione preferireste tutti per la cena del nostro gruppo stasera considerando il tempo?\". Taglia tutto il superfluo. Usa sostantivi specifici. Elimina gli articoli dove possibile (\"Pizza stasera?\" vs \"La pizza sarebbe una buona idea stasera?\").",
      },
      {
        h: "Formulazione: seconda persona diretta",
        body: "\"Manderesti questo messaggio?\" supera \"Questo messaggio andrebbe inviato?\" di 3 volte. Rivolgiti direttamente al votante. Usa il \"tu\" o l'imperativo. Per i dilemmi drammatici: \"Tu cosa faresti?\" batte \"Cosa farebbe qualcuno?\". Il coinvolgimento diretto attiva l'identità del votante, il che spinge a votare.",
      },
      {
        h: "Specificità: nomina la cosa concretamente",
        body: "\"Pizza o sushi?\" batte \"Opzioni per la cena?\". Concreto > astratto. Nomi di marchi, luoghi, persone aggiungono specificità che aumenta il coinvolgimento (con rispetto del buon gusto). \"Mando questo DM su Insta?\" ha bisogno del contesto del DM — i sondaggi vaghi perdono. I sondaggi moomz funzionano meglio quando la domanda è così specifica che il votante può toccare senza rileggere.",
      },
      {
        h: "Aggancio emotivo: le poste alzano il tasso di voto",
        body: "Aggiungi un pizzico di stakes. \"Pizza o sushi stasera (siamo morti di fame)\" batte \"Pizza o sushi stasera?\" del 30%. Le poste in gioco attivano l'empatia. Drama, FOMO, urgenza decisionale guidano tutti il coinvolgimento. Non esagerare — la manipolazione emotiva si vede. Usa stakes reali coerenti con la situazione. \"Outfit A o B (appuntamento tra 1 ora)\" funziona perché l'appuntamento è vero.",
      },
    ],
    polls: [
      { q: "Lunghezza ideale della domanda?", options: ["Sotto 8 parole", "8-12 parole", "12-20", "20+"] },
      { q: "La seconda persona è meglio?", options: ["Sì", "No", "Abbastanza", "Sempre"] },
      { q: "Specifico vs astratto?", options: ["Specifico", "Astratto", "Mix", "Dipende"] },
      { q: "Gli agganci emotivi funzionano?", options: ["Sì", "No", "A volte", "Rischio eccesso"] },
      { q: "Stakes nella domanda?", options: ["Sempre", "A volte", "Mai", "Solo se reali"] },
      { q: "Migliore emozione per agganciare?", options: ["Urgenza", "Drama", "FOMO", "Empatia"] },
      { q: "Tagliare gli articoli per accorciare?", options: ["Sì", "No", "A volte", "Solo le brevi"] },
      { q: "Riformulare sondaggi vaghi?", options: ["Sempre", "A volte", "Mai", "Se ho feedback"] },
    ],
    faq: [
      {
        q: "Dovrei usare emoji nella domanda?",
        a: "Con moderazione — un emoji può aumentare il coinvolgimento. Più di 2 sembra spam.",
      },
      {
        q: "Domande in maiuscolo?",
        a: "In genere no. Il maiuscolo su una parola per enfasi va bene. Tutto in maiuscolo sembra urlare.",
      },
      {
        q: "Domande che finiscono con 'giusto?' o 'vero?'",
        a: "Evita la formulazione leading. \"Pizza stasera, giusto?\" distorce il risultato. Rimani neutro.",
      },
      {
        q: "Posso riformulare un sondaggio a basso coinvolgimento?",
        a: "Sì — rilancia con la nuova domanda. Il primo sondaggio sfuma; il nuovo cattura voti freschi.",
      },
    ],
    related: ["max-poll-options-2-4-6-en-it"],
    updatedAt: today,
  },
  {
    slug: "max-poll-options-2-4-6-en-it",
    locale: "it",
    category: "guides",
    emoji: "🔢",
    title: "Quante opzioni per un sondaggio — 2, 4 o 6 — quando usarne quante",
    h1: "Guida alle opzioni del sondaggio: quando 2, 3, 4 o 6 opzioni vincono",
    description:
      "Guida al numero massimo di opzioni nei sondaggi. Quando usare 2, 3, 4 o 6 opzioni. Dati sul coinvolgimento, casi d'uso, regole di scelta.",
    intro:
      "I sondaggi moomz supportano 2-6 opzioni. La maggior parte delle persone sceglie 4 per default. I dati dicono che il default è spesso sbagliato. Ecco la guida caso per caso per scegliere il numero giusto di opzioni.",
    sections: [
      {
        h: "2 opzioni: contesti scroll-and-vote",
        body: "Usa 2 opzioni per le Instagram Story, i link in bio TikTok e qualsiasi contesto in cui i votanti scorrono velocemente. Il binario minimizza il carico cognitivo. Funziona per: scelte estetiche this-or-that, hot take, dilemmi drammatici, decisioni semplici. Evita 2 opzioni per: decisioni con vere alternative multiple, classifiche di gusto, sondaggi di previsione con più risultati plausibili.",
      },
      {
        h: "3 opzioni: opinioni sfumate",
        body: "3 opzioni funzionano quando c'è un vero punto intermedio o una risposta \"dipende\". I pattern \"Sì / No / Abbastanza\" dominano i sondaggi Gen Z. \"Resto / Vado / Aspetto\" per i sondaggi di coppia. La terza opzione assorbe i votanti che altrimenti salterebbero il sondaggio perché nessuno dei binari si adatta. 3 opzioni è lo sweet spot per i sondaggi di opinione.",
      },
      {
        h: "4 opzioni: scelte strutturate",
        body: "4 opzioni brillano per: sondaggi best-of-X (\"album dell'anno\"), voti tier list (\"S/A/B/C?\"), fasce orarie (\"mattina/pomeriggio/sera/notte\"), selezione di genere. 4 opzioni gestiscono il pattern delle \"4 direzioni\" (scelte categoriali tipo bussola). Il coinvolgimento è buono ma non massimo — meno opzioni perderebbero informazioni; di più perderebbero votanti.",
      },
      {
        h: "6 opzioni: voti completi",
        body: "6 opzioni funzionano per: album dell'anno con 6 candidati, tier list complete (S/A/B/C/D/F), selezione di genere completa. Ideale per sondaggi power-user in contesti fandom dove i votanti sono molto coinvolti. Il tasso di voto è più basso (rispetto ai sondaggi a 2 opzioni) ma la qualità del coinvolgimento è la più alta — i votanti che completano un sondaggio a 6 opzioni sono profondamente investiti. moomz arriva a un massimo di 6.",
      },
    ],
    polls: [
      { q: "Numero di opzioni di default?", options: ["2", "3", "4", "6"] },
      { q: "Migliore per Insta Story?", options: ["2", "3", "4", "6"] },
      { q: "Migliore per previsioni?", options: ["3", "4", "6", "Mix"] },
      { q: "Migliore per album dell'anno?", options: ["4", "6", "10+", "Mix"] },
      { q: "Migliore per sondaggi di coppia?", options: ["2", "3", "4", "Mix"] },
      { q: "Migliore per tier list?", options: ["4", "6", "8+", "Mix"] },
      { q: "Salti i sondaggi con più di 6 opzioni?", options: ["Sì", "No", "A volte", "Solo quelli brutti"] },
      { q: "moomz dovrebbe permettere 8+ opzioni?", options: ["Sì please", "Resta a 6", "Abbastanza", "Non mi interessa"] },
    ],
    faq: [
      {
        q: "Ho 7 opzioni da sondare, cosa faccio?",
        a: "Riduci combinandone (\"X o Y\" come un'unica opzione) o elimina quella più debole. 6 è il massimo di moomz per ragioni cognitive.",
      },
      {
        q: "Posso aggiungere opzioni dopo aver lanciato il sondaggio?",
        a: "Al momento no — i sondaggi moomz hanno opzioni fisse una volta creati. Ricrea il sondaggio se hai bisogno di espandere.",
      },
      {
        q: "Ci saranno mai più opzioni permesse?",
        a: "Possibilmente nel piano premium nel 2026. I dati sconsigliano per ragioni di coinvolgimento.",
      },
      {
        q: "I sondaggi a 4 opzioni sono sempre tier list?",
        a: "No — le 4 opzioni funzionano per molti casi d'uso. Non tutti i sondaggi a 4 opzioni sono tier list.",
      },
    ],
    related: ["write-poll-question-people-answer-en-it"],
    updatedAt: today,
  },
  {
    slug: "anonymous-vs-identified-poll-en-it",
    locale: "it",
    category: "guides",
    emoji: "🎭",
    title: "Sondaggi anonimi vs identificati — quando vince l'anonimato",
    h1: "Sondaggi anonimi vs identificati: quando usare ciascuno",
    description:
      "Quando usare sondaggi anonimi vs identificati. Casi d'uso per ciascuno, dati sull'accuratezza, analisi delle dinamiche sociali.",
    intro:
      "I sondaggi Instagram sono identificati. I sondaggi moomz sono anonimi. Quando vince ciascun formato? Ecco il set di regole per scegliere il formato giusto in base al caso d'uso, alla sensibilità del tema e alla necessità di accuratezza.",
    sections: [
      {
        h: "Sondaggi anonimi: opinioni oneste",
        body: "I sondaggi anonimi vincono quando l'onestà conta più dell'identità. I temi sensibili (opinioni sulle relazioni, immagine corporea, dilemmi drammatici, soddisfazione lavorativa) ottengono risposte 3 volte più oneste se anonimi. moomz è anonimo per default perché i temi sociali dominano i suoi casi d'uso. Usa l'anonimato per: confessioni, sondaggi di opinione, survey su qualsiasi tema carico di emozioni.",
      },
      {
        h: "Sondaggi identificati: prova sociale e responsabilità",
        body: "I sondaggi identificati (stile Instagram) vincono quando vuoi che l'identità dei votanti sia visibile. Usa per: reazioni fan-cam, sondaggi di supporto (\"chi viene al matrimonio?\"), sondaggi di responsabilità (\"chi si unisce alla sessione in palestra di domani?\"). L'identità spinge all'azione — i votanti si impegnano pubblicamente. I sondaggi identificati hanno tassi di voto più bassi ma tassi di azione più alti.",
      },
      {
        h: "Ibrido: voto anonimo, impegno pubblico",
        body: "Alcuni casi d'uso hanno bisogno di entrambi. \"Vota anonimamente se vorresti partecipare, poi RSVP pubblicamente se hai votato sì\". I sondaggi moomz gestiscono il voto anonimo; gli strumenti di evento nativi gestiscono l'RSVP pubblico. Combinare i due preserva l'opinione onesta estraendo al contempo l'impegno pubblico dai volenterosi.",
      },
      {
        h: "Matrice decisionale",
        body: "Decisione ad alto rischio che richiede input onesto: anonimo (moomz). Segnale sociale o pressione dei pari utile: identificato (Instagram). Temi sensibili: anonimo. Necessità di impegno pubblico: identificato. Sondaggi in chat di amici: di solito anonimi a meno che l'impegno sia l'obiettivo. Sondaggi lavorativi: anonimi per il feedback, identificati per la logistica.",
      },
    ],
    polls: [
      { q: "Preferisci anonimo o identificato?", options: ["Anonimo", "Identificato", "Mix", "Dipende"] },
      { q: "Tema più sensibile?", options: ["Relazioni", "Corpo", "Lavoro", "Politica"] },
      { q: "Impegno pubblico tramite sondaggio?", options: ["Sì", "No", "Mix", "Raramente"] },
      { q: "Sondaggi drama anonimi?", options: ["Sempre", "A volte", "Mai", "Di default"] },
      { q: "Sondaggi lavorativi anonimi?", options: ["Sì per feedback", "Identificati per logistica", "Mix", "Mai"] },
      { q: "Il formato ibrido è utile?", options: ["Sì", "No", "A volte", "Complicato"] },
      { q: "Ti fidi dei sondaggi anonimi?", options: ["Sì", "No", "Abbastanza", "Più onesti"] },
      { q: "I sondaggi identificati sono più accurati?", options: ["No", "Sì", "Abbastanza", "Dipende"] },
    ],
    faq: [
      {
        q: "moomz è completamente anonimo?",
        a: "Sì — i voti sono anonimi per default. Sono visibili solo i totali aggregati.",
      },
      {
        q: "Posso vedere chi ha votato nel mio sondaggio?",
        a: "No — moomz non espone l'identità dei votanti, nemmeno ai creatori del sondaggio. L'anonimato è garantito.",
      },
      {
        q: "Perché Instagram è identificato?",
        a: "Modello di engagement — Instagram beneficia delle dinamiche sociali legate all'identità del voto. Piattaforma diversa, compromesso diverso.",
      },
      {
        q: "L'anonimato è sempre più accurato?",
        a: "Per i temi sensibili, sì. Per i sondaggi di impegno (\"chi viene?\"), l'identificato è migliore.",
      },
    ],
    related: ["read-poll-results-without-bias-en-it"],
    updatedAt: today,
  },
  {
    slug: "polls-in-slack-team-en-it",
    locale: "it",
    category: "guides",
    emoji: "💼",
    title: "Come usare i sondaggi su Slack per le decisioni del team",
    h1: "Sondaggi Slack per le decisioni di team: la guida del manager",
    description:
      "Come usare i sondaggi in un canale Slack per le decisioni di team. Best practice per manager, tipi di decisione, impostazione scadenze.",
    intro:
      "Slack è dove le decisioni di team avvengono nel 2026. I sondaggi moomz si integrano senza attrito — incolla un URL, vota in 30 secondi, decisione presa. Ecco la guida del manager per usare i sondaggi nei canali Slack in modo efficace.",
    sections: [
      {
        h: "I canali Slack migliori per i sondaggi",
        body: "Usa i sondaggi in: #team per le decisioni di team, #engineering per i voti tecnici, #social per la pianificazione degli off-site. Evita di sondare in #general su temi sensibili — troppi occhi. Evita i sondaggi nei DM — vanifica la natura collettiva. Dimensione ideale: canali da 8-50 persone. Meno e il risultato è una persona sola; di più e il rumore annega il segnale.",
      },
      {
        h: "Tipi di decisioni che i sondaggi gestiscono bene",
        body: "I sondaggi funzionano per: selezione dell'orario delle riunioni, decisioni sul pranzo, voti di priorità del progetto (tra opzioni pre-selezionate), scelta dello strumento (Slack vs Teams vs Discord), location dell'off-site. I sondaggi non funzionano per: direzione strategica, assunzioni, stipendi, performance review. La regola: decisioni distribuite dove 10 piccoli input equivalgono a 1 scelta collettiva.",
      },
      {
        h: "Impostare scadenze e chiudere i voti",
        body: "Includi sempre una scadenza nel messaggio Slack: \"Votate entro venerdì alle 17\". I sondaggi moomz non si chiudono automaticamente, quindi la scadenza è sociale. Invia un promemoria 4 ore prima per i sondaggi importanti. Una volta superata la scadenza, fai uno screenshot del risultato finale e pubblicalo nello stesso thread della decisione. Riferisciti allo screenshot quando qualcuno mette in dubbio la scelta in seguito.",
      },
      {
        h: "Evitare la fatica da sondaggio",
        body: "Troppi sondaggi = fatica. Limitati a 3-5 sondaggi a settimana per canale. Riserva i sondaggi alle decisioni reali; usa i thread per le discussioni di opinione. Se il team si lamenta del volume di sondaggi, analizza quali hanno davvero fatto la differenza. Taglia il resto. I team migliori riferiscono che i sondaggi sembrano \"un messaggio Slack che ha sostituito 30 email\" — preserva questa magia essendo selettivo.",
      },
    ],
    polls: [
      { q: "Sondaggi su Slack: sì o no?", options: ["Sì", "No", "A volte", "Ogni giorno"] },
      { q: "Dimensione canale ideale per sondare?", options: ["5-10", "10-50", "50+", "Tutta l'azienda"] },
      { q: "Messaggio con scadenza?", options: ["Sempre", "A volte", "Mai", "Fondamentale"] },
      { q: "La fatica da sondaggio è reale?", options: ["Sì", "No", "Abbastanza", "A volte"] },
      { q: "Migliore tipo di decisione per i sondaggi?", options: ["Orario riunione", "Pranzo", "Priorità", "Off-site"] },
      { q: "Strategia via sondaggio?", options: ["No", "A volte", "Sì", "Mai"] },
      { q: "I sondaggi riducono i tempi di decisione?", options: ["Sì moltissimo", "Abbastanza", "No", "Più lento"] },
      { q: "Sondaggi anonimi al lavoro?", options: ["Sì", "No", "Mix", "Dipende"] },
    ],
    faq: [
      {
        q: "Sondaggio nativo Slack o moomz?",
        a: "Nativo per sondaggi veloci all'interno del workspace. moomz per sondaggi anonimi o che devono attraversare canali/organizzazioni.",
      },
      {
        q: "Come far votare davvero le persone?",
        a: "Imposta scadenze, invia promemoria, rendi il voto un solo tocco e agisci sul risultato. I sondaggi a cui si dà seguito guidano la partecipazione futura.",
      },
      {
        q: "I sondaggi possono sostituire i 1:1?",
        a: "No — i sondaggi non sostituiscono le conversazioni individuali. Sostituiscono le meta-riunioni.",
      },
      {
        q: "Migliore orario per pubblicare un sondaggio?",
        a: "10-11 oppure 14-15 nel fuso orario del team. Evita il mattino presto (perso) e la fine giornata (dimenticato).",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-it"],
    updatedAt: today,
  },
  {
    slug: "polls-tiktok-live-en-it",
    locale: "it",
    category: "guides",
    emoji: "🎥",
    title: "Come usare i sondaggi in un TikTok Live",
    h1: "Sondaggi TikTok Live: aumentare il coinvolgimento durante lo stream",
    description:
      "Come usare i sondaggi in un TikTok Live. Setup, condivisione del link, strategie di voto in tempo reale, boost del watch time.",
    intro:
      "TikTok Live non ha sondaggi nativi. I creator usano moomz per colmare il vuoto: annunciano il sondaggio, condividono il link in chat, guardano i risultati live durante lo stream. I sondaggi nei live aumentano il tempo medio di visione del 40%. Ecco il playbook.",
    sections: [
      {
        h: "Prepara il sondaggio prima di andare live",
        body: "Pre-crea 3-5 sondaggi prima di iniziare il live. Salva gli URL brevi in un'app note. Durante il live, puoi lanciare un nuovo sondaggio ogni 10-15 minuti incollando l'URL successivo. La preparazione preventiva evita pause imbarazzanti. Migliori sondaggi per i live: sfide per lo spettatore (\"votate cosa faccio dopo\"), opinion (\"hot or not?\"), previsioni (\"riesco a passare questo livello?\").",
      },
      {
        h: "Condividi il link nella chat live",
        body: "La chat di TikTok Live non espande gli URL in modo pulito. Annuncia il link verbalmente (\"vai su moomz.com/x7k2j\"), poi incollalo nella chat. L'URL moomz da 5 lettere è abbastanza corto da essere letto ad alta voce. Gli spettatori toccano, votano, tornano allo stream. Alcuni streamer proiettano l'URL del sondaggio tramite overlay schermo (in stile StreamLabs o OBS) per ricordarlo visivamente.",
      },
      {
        h: "Risultati del voto nello stream",
        body: "Una volta che gli spettatori hanno votato, fai uno screenshot del risultato live e reagisci in camera. \"Il 73% ha detto fai la sfida — ok la faccio\". La reazione è il contenuto. Gli streamer che reagiscono ai risultati si esprimono di più, gli spettatori restano più a lungo. Non dire solo \"X ha vinto\" — reagisci come se il risultato contasse, perché conta in termini di agency dello stream.",
      },
      {
        h: "Sondaggi di riepilogo e contenuto di follow-up",
        body: "Termina il live con un sondaggio di riepilogo: \"momento migliore dello stream di stasera?\". Lancia un follow-up al prossimo live: \"continuiamo quello che abbiamo votato l'ultima volta?\". Questo crea continuità. Gli spettatori di ritorno sentono che lo streamer ricorda i loro input. I sondaggi diventano il filo conduttore tra uno stream e l'altro.",
      },
    ],
    polls: [
      { q: "Sondaggi nel TikTok Live: sì?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Migliore tipo di sondaggio per il live?", options: ["Sfida spettatore", "Opinione", "Previsione", "Riepilogo"] },
      { q: "Pre-creare i sondaggi?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Screenshot con reazione al risultato?", options: ["Sempre", "A volte", "Mai", "Fondamentale"] },
      { q: "I sondaggi aumentano il watch time?", options: ["Sì moltissimo", "Abbastanza", "No", "Fondamentale"] },
      { q: "Condividere il link verbalmente?", options: ["Sì", "No", "Verbale + chat", "Solo chat"] },
      { q: "Sondaggio di riepilogo alla fine?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Continuità tra live?", options: ["Sì", "No", "A volte", "Sempre"] },
    ],
    faq: [
      {
        q: "I bot TikTok possono postare automaticamente il link del sondaggio?",
        a: "Non nativamente. Alcuni strumenti di terze parti possono farlo; di solito lo streamer incolla manualmente.",
      },
      {
        q: "TikTok aggiungerà mai sondaggi live nativi?",
        a: "Forse. Nel frattempo, moomz colma il vuoto tramite URL condivisibili.",
      },
      {
        q: "Quanti sondaggi per live?",
        a: "3-5 sondaggi per ora. Di più è stancante; di meno è perdere l'opportunità di coinvolgimento.",
      },
      {
        q: "I sondaggi moomz nel TikTok Live sono anonimi?",
        a: "Sì — stesso anonimato. Gli spettatori votano anonimamente; sono visibili solo i totali.",
      },
    ],
    related: [],
    updatedAt: today,
  },
  {
    slug: "poll-viral-twitter-x-en-it",
    locale: "it",
    category: "guides",
    emoji: "🐦",
    title: "Come far diventare virale un sondaggio su Twitter / X",
    h1: "Sondaggi virali su Twitter: formato, topic, loop del quote-tweet",
    description:
      "Come far diventare virale un sondaggio su Twitter / X. Scelta del topic, formato, loop del quote-tweet, ottimizzazione dell'orario di pubblicazione.",
    intro:
      "Twitter ha sondaggi nativi ma limitati a 4 opzioni e 7 giorni. I sondaggi moomz superano entrambi i limiti e aggiungono l'anonimato. Per i sondaggi virali, l'URL moomz incollato in un tweet supera i sondaggi nativi di 3 volte in termini di engagement. Ecco come far diventare virale un sondaggio su Twitter / X.",
    sections: [
      {
        h: "Scelta del topic: la controversia batte il consenso",
        body: "I sondaggi Twitter virali scelgono topic su cui il pubblico è diviso 60/40 — non 95/5. \"Pizza o sushi?\" è troppo facile; \"Ananas sulla pizza?\" è la divisione giusta. La controversia genera quote-tweet, i quote-tweet generano viralità. Evita topic su cui un lato ha ovviamente ragione (\"il razzismo è sbagliato?\" — virale ma per la ragione sbagliata). Punta a dibattiti autentici dove entrambi i lati hanno difensori rispettabili.",
      },
      {
        h: "Loop del quote-tweet",
        body: "Una volta che il sondaggio ha oltre 100 voti, quote-twitta il tuo sondaggio con una provocazione. \"73% in errore\" o \"non riesco a credere che sia ancora così in bilico\". Il quote tweet porta una nuova ondata di votanti. Ripeti 2-3 volte nelle 24 ore. Ogni quote-tweet riporta il sondaggio in cima al feed. Questo è il singolo moltiplicatore di viralità più potente per i sondaggi Twitter.",
      },
      {
        h: "Orario del giorno e giorno della settimana",
        body: "Orario migliore per pubblicare: 8-10 di mattina ET da martedì a giovedì. Picco di attenzione del pubblico. Evita i weekend (engagement più basso) e la sera tardi (i voti non si accumulano di notte). I sondaggi hanno bisogno di slancio nelle prime 2 ore; pubblica quando il pubblico è attivo.",
      },
      {
        h: "Sondaggio nativo vs link moomz",
        body: "I sondaggi Twitter nativi sono limitati a 4 opzioni e 7 giorni. I sondaggi moomz gestiscono 6 opzioni e restano aperti indefinitamente. Per sondaggi virali con set di opzioni ampi (\"AOTY tra questi 6\"), vince moomz. Per sondaggi binari (\"sì o no?\"), il nativo va bene — l'interfaccia incorporata in Twitter supera un click su link esterno. Scegli in base al caso d'uso.",
      },
    ],
    polls: [
      { q: "Sondaggio nativo o link moomz?", options: ["Nativo", "moomz", "Mix", "Dipende"] },
      { q: "Migliore topic per la viralità?", options: ["Controverso", "Divertente", "Drama", "Abbastanza"] },
      { q: "Quote-twittare il proprio sondaggio?", options: ["Sì", "No", "A volte", "Sempre"] },
      { q: "Orario migliore per pubblicare?", options: ["8-10 ET", "Pranzo", "Sera", "Notte fonda"] },
      { q: "Evitare i weekend?", options: ["Sì", "No", "Abbastanza", "Prova comunque"] },
      { q: "Quanti quote-tweet?", options: ["1", "2-3", "5+", "Nessuno"] },
      { q: "Sondaggio per 7 giorni o più?", options: ["7 giorni", "Più lungo", "24h", "1h"] },
      { q: "Vale la pena usare moomz per 6 opzioni?", options: ["Sì", "No", "Abbastanza", "Sempre"] },
    ],
    faq: [
      {
        q: "I sondaggi Twitter sono anonimi?",
        a: "I sondaggi Twitter nativi non rivelano l'identità del votante, ma la piattaforma traccia comunque. moomz è completamente anonimo.",
      },
      {
        q: "Posso eliminare un sondaggio diventato virale?",
        a: "Nativo: sì, in qualsiasi momento. moomz: sì, ma l'URL diventa morto e gli utenti vedono un 404.",
      },
      {
        q: "Twitter / X espanderà mai le opzioni dei sondaggi?",
        a: "Attualmente limitato a 4 opzioni e 7 giorni. Non è chiaro se sia prevista un'espansione. moomz colma il vuoto.",
      },
      {
        q: "Miglior formato per i sondaggi moomz su Twitter?",
        a: "Domanda + frase provocatoria + link moomz. \"Ananas sulla pizza? Risolvilo una volta per tutte: moomz.com/x7k2j\"",
      },
    ],
    related: [],
    updatedAt: today,
  },
];
