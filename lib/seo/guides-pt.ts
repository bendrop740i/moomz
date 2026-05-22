import type { SeoPage } from "./types";

const today = "2026-05-19";

export const guidesPt: SeoPage[] = [
  {
    slug: "how-to-make-instagram-poll-pt",
    locale: "pt",
    category: "guides",
    emoji: "📸",
    title: "Como Fazer uma Enquete no Instagram (Com Mais de 2 Opções)",
    h1: "Como Fazer uma Enquete no Instagram: Guia Completo 2026",
    description:
      "Tutorial passo a passo para fazer enquete no Instagram + como ir além das 2 opções com um link moomz. Grátis, anônimo, sem cadastro.",
    intro:
      "A enquete nativa do Instagram te limita a 2 opções, não é anônima e some junto com o Story. Aqui está o tutorial completo para a enquete nativa, mais como expandir para 3 a 6 opções (com anonimato total) usando um link moomz.",
    sections: [
      {
        h: "Passo 1: a enquete nativa do Instagram (2 opções)",
        body: "Abra o Instagram. Crie um Story. Toque no ícone de figurinhas (quadrado sorridente em cima). Pesquise \"Enquete\". Digite a pergunta (máx. 24 caracteres) e as 2 opções (máx. 16 caracteres cada). Posicione a figurinha. Publique. Seus seguidores veem a enquete, tocam, votam e veem o %.",
      },
      {
        h: "Passo 2: ver os resultados",
        body: "Abra seu Story. Deslize de baixo para cima. Veja quem votou em quê. As enquetes nativas NÃO são anônimas — você enxerga a identidade de cada votante. O Story expira em 24h e a enquete vai junto.",
      },
      {
        h: "Passo 3: ir além de 2 opções (com moomz)",
        body: "Para 3 a 6 opções: crie sua enquete no moomz.com (10 segundos), copie o link curto (5 caracteres). Crie um Story no Instagram, adicione a figurinha \"Link\", cole a URL do moomz. Seus seguidores tocam na figurinha, o link abre no navegador interno do IG, eles votam e voltam pro Story.",
      },
      {
        h: "Passo 4: enquete anônima",
        body: "Quer anonimato DE VERDADE? A figurinha nativa revela quem votou. O moomz nunca identifica os votantes. Crie a enquete no moomz, compartilhe pelo Link do Story. Nenhum seguidor saberá quem votou em quê. Perfeito para votações sensíveis (opiniões, debates, escolhas pessoais).",
      },
      {
        h: "Passo 5: enquete duradoura",
        body: "A enquete do Instagram some com o Story (24h). As enquetes do moomz ficam ativas por tempo indeterminado. Compartilhe o link em novos Stories para os votos continuarem chegando. Ideal para acumular um total expressivo ao longo de 1 a 2 semanas.",
      },
    ],
    polls: [
      { q: "Stories todo dia ou nunca?", options: ["Todo dia", "Quando tô afim", "Nunca"] },
      { q: "A figurinha nativa já basta?", options: ["Sim", "Muito limitada", "Depende"] },
      { q: "Anonimato nos votos?", options: ["Importante", "Tanto faz", "Depende"] },
    ],
    faq: [
      { q: "Quantas opções uma enquete do Instagram suporta?", a: "A nativa tem limite de 2. Com a figurinha de link do moomz, você vai de 2 a 6 opções." },
      { q: "As enquetes do Instagram são anônimas?", a: "Não. O Instagram mostra quem votou em quê. Para anonimato total, use o moomz." },
      { q: "Quanto tempo dura uma enquete do Instagram?", a: "A nativa some com o Story (24h). As enquetes do moomz ficam ativas por tempo indeterminado." },
      { q: "Dá pra compartilhar uma enquete fora do Instagram?", a: "A nativa não. Com o moomz sim — o link funciona em qualquer lugar (WhatsApp, Snap, email)." },
    ],
    related: ["instagram-story-poll-pt", "how-to-make-anonymous-poll-pt", "free-online-poll-maker-pt", "how-to-share-poll-link-pt"],
    updatedAt: today,
  },
  {
    slug: "how-to-make-anonymous-poll-pt",
    locale: "pt",
    category: "guides",
    emoji: "🕶️",
    title: "Como Fazer uma Enquete Anônima (De Verdade Anônima)",
    h1: "Como Fazer uma Enquete 100% Anônima em 2026",
    description:
      "Todos os métodos para criar uma enquete verdadeiramente anônima: Google Forms, Doodle, Strawpoll, moomz. Comparativo completo + passo a passo.",
    intro:
      "\"Anônimo\" significa coisas diferentes dependendo da ferramenta. O Google Forms pode ser configurado sem coletar email, mas rastreia contas. O Doodle é nominativo. O Strawpoll é anônimo, mas ultrapassado. O moomz é anônimo por padrão, sem cadastro. Aqui está o comparativo completo.",
    sections: [
      {
        h: "Por que o anonimato importa",
        body: "O anonimato protege a honestidade. Numa enquete de feedback de equipe, os juniores não vão votar contra a opinião do chefe se forem identificados. Numa enquete de casal, o parceiro dá respostas \"politicamente corretas\" quando sua identidade está exposta. Fundamental para votações sensíveis (saúde, opinião, julgamento entre pares).",
      },
      {
        h: "Google Forms anônimo: a verdade",
        body: "É possível desativar a coleta de e-mail (Configurações → Respostas). Mas: (1) é preciso login no Google para Forms internos de organizações, (2) o Google registra o IP, (3) o admin pode reativar o rastreamento. Anonimato parcial, não total.",
      },
      {
        h: "Doodle: não é anônimo",
        body: "O Doodle serve para agendamento, então é nominativo por design. Você vê quem marcou qual horário. Não é uma ferramenta de enquete anônima — é um organizador de agenda.",
      },
      {
        h: "Strawpoll: anônimo mas desatualizado",
        body: "Um clássico das enquetes anônimas. Mas: (1) interface envelhecida, (2) sem compartilhamento moderno para Stories, (3) sem resultados animados ao vivo. O avô das enquetes rápidas — funciona, mas ficou pra trás.",
      },
      {
        h: "moomz: anônimo por padrão",
        body: "Feito para enquetes anônimas. Sem cadastro, sem e-mail, sem coleta de nome. Anti-voto-duplo via cookie. Resultados animados ao vivo. Link curto de 5 caracteres, compatível com Insta, Snap, WhatsApp, Discord. Crie em 10 segundos, compartilhe o link e acompanhe ao vivo.",
      },
    ],
    polls: [
      { q: "Ferramenta anônima preferida?", options: ["Google Forms", "Strawpoll", "moomz", "Outra"] },
      { q: "O anonimato é importante pra você?", options: ["Sempre", "Depende", "Tanto faz"] },
    ],
    faq: [
      { q: "O Google Forms é realmente anônimo?", a: "Não totalmente. A coleta de e-mail pode ser desativada, mas o Google ainda registra o IP. Para anonimato rigoroso, escolha moomz ou Strawpoll." },
      { q: "Strawpoll ou moomz?", a: "O Strawpoll funciona, mas parece ultrapassado. O moomz é mais moderno e melhor para compartilhamento mobile." },
      { q: "Tem limite de votos no moomz?", a: "Não. 4 votantes ou 4.000, a experiência é a mesma." },
      { q: "Como evitar votos duplicados?", a: "O moomz bloqueia via cookie. Uma pessoa = um voto." },
    ],
    related: ["free-online-poll-maker-pt", "strawpoll-alternative-pt", "how-to-make-instagram-poll-pt", "how-to-share-poll-link-pt"],
    updatedAt: today,
  },
  {
    slug: "free-online-poll-maker-pt",
    locale: "pt",
    category: "guides",
    emoji: "💸",
    title: "Criador de Enquetes Online Grátis: Top 6 Ferramentas Comparadas (2026)",
    h1: "Criador de Enquetes Online Grátis: Comparativo 2026",
    description:
      "Compare as 6 melhores ferramentas de enquete grátis: Google Forms, Strawpoll, Doodle, Typeform, Mentimeter, moomz.",
    intro:
      "Criar uma enquete grátis em 2026 é possível, mas cada ferramenta tem suas limitações. O Google Forms é poderoso, mas não é estritamente anônimo. O Doodle serve para agendamento. O Typeform limita respostas. O moomz é grátis, anônimo e sem limites. Veja o comparativo completo.",
    sections: [
      {
        h: "Google Forms",
        body: "Gratuito, integrado ao Workspace. Poderoso para formulários longos. Limitações: pesado para enquetes rápidas, exige conta Google para criar, anonimato parcial, sem compartilhamento mobile-first. Melhor para pesquisas formais com múltiplos campos.",
      },
      {
        h: "Strawpoll",
        body: "Gratuito, anônimo, simples. Limitações: interface ultrapassada, sem resultados animados, fraco no mobile e em compartilhamento via Stories. O avô das enquetes rápidas. Funciona, mas não brilha mais.",
      },
      {
        h: "Doodle",
        body: "Gratuito para enquetes de agendamento. Limitações: feito para escolha de datas, não para opiniões. Nominativo por design. Perfeito para marcar reuniões — escolha errada para enquetes de opinião.",
      },
      {
        h: "Typeform",
        body: "Bonito, amigável para mobile. Mas: 10 respostas/mês no plano gratuito, planos acima de R$ 120/mês. Melhor para formulários complexos (NPS, feedback de cliente) — pesado demais para uma enquete rápida.",
      },
      {
        h: "Mentimeter",
        body: "Excelente para apresentações ao vivo (treinamentos, conferências). Limitações: 2 enquetes por apresentação no plano gratuito, não foi feito para compartilhamento social. Certo para treinamentos, não para o Insta.",
      },
      {
        h: "moomz",
        body: "Grátis, anônimo, sem limite de respostas, compartilhamento mobile-first, resultados animados ao vivo. Feito para enquetes rápidas e Stories. Limitações: máx. 6 opções, apenas uma pergunta por enquete. Ideal para: Insta, Snap, TikTok, WhatsApp, festas, debates.",
      },
    ],
    polls: [
      { q: "Qual ferramenta você usa?", options: ["Google Forms", "Strawpoll", "Doodle", "moomz"] },
      { q: "O que mais importa pra você?", options: ["Anonimato", "Design", "Limite grátis", "Fácil de compartilhar"] },
    ],
    faq: [
      { q: "Ferramenta de enquete grátis mais simples?", a: "moomz para enquetes rápidas e compartilhamento mobile. Strawpoll como alternativa. Google Forms para formulários mais longos." },
      { q: "O moomz é realmente grátis?", a: "Sim — respostas ilimitadas, sem anúncios, sem premium obrigatório." },
      { q: "Melhor ferramenta anônima?", a: "moomz por padrão. Strawpoll como backup. Google Forms tem anonimato parcial." },
      { q: "Melhor para agendamento?", a: "O Doodle continua sendo o melhor pra isso. O moomz é para enquetes de opinião e decisão." },
    ],
    related: ["strawpoll-alternative-pt", "how-to-make-anonymous-poll-pt", "how-to-make-instagram-poll-pt", "how-to-share-poll-link-pt"],
    updatedAt: today,
  },
  {
    slug: "strawpoll-alternative-pt",
    locale: "pt",
    category: "guides",
    emoji: "🆕",
    title: "Alternativa ao Strawpoll: 3 Ferramentas Modernas em 2026",
    h1: "Alternativa ao Strawpoll: 3 Opções Modernas (Incluindo Uma Nova)",
    description:
      "O Strawpoll está envelhecendo. Conheça 3 alternativas modernas: moomz, Polldaddy, Mentimeter. Comparativo e tutorial.",
    intro:
      "O Strawpoll inventou as enquetes anônimas rápidas. Mas a interface não evoluiu desde 2010, o mobile é fraco e a experiência de votação está datada. Aqui estão 3 alternativas modernas: moomz, Polldaddy, Mentimeter. Cada uma se destaca em um caso de uso diferente.",
    sections: [
      {
        h: "Por que trocar o Strawpoll",
        body: "Funciona, mas: (1) design ultrapassado, (2) fraco para compartilhamento em Stories/TikTok, (3) resultados estáticos, (4) URL longa. Em 2026, os usuários esperam algo moderno, mobile-first, com resultados animados ao vivo.",
      },
      {
        h: "moomz: moderno e sem complicação",
        body: "Criado em 2025 para preencher o gap do Strawpoll: design glassmorphism, resultados animados ao vivo, URL curta de 5 caracteres, mobile-first, anônimo por padrão, sem cadastro. Compatível com Insta, Snap, TikTok, WhatsApp.",
      },
      {
        h: "Polldaddy / Crowdsignal: alternativa profissional",
        body: "Polldaddy (agora Crowdsignal) é a opção pro. Boas funcionalidades (logotipos, branding, export para Excel), mas pago acima de 200 respostas/mês. Ótimo para enquetes de marketing com branding. Para uma votação rápida com amigos, é exagero.",
      },
      {
        h: "Mentimeter: alternativa para apresentações ao vivo",
        body: "Brilha em apresentações ao vivo (treinamentos, conferências). Projete um QR code, o público vota pelo celular, resultados aparecem em tempo real. Limitação: não foi pensado para compartilhamento em Stories.",
      },
      {
        h: "Qual ferramenta usar em cada situação",
        body: "Stories / TikTok / festas: moomz. Enquetes corporativas com branding: Polldaddy. Votações em apresentações ao vivo: Mentimeter. Formulários complexos com múltiplos campos: Typeform ou Google Forms.",
      },
    ],
    polls: [
      { q: "Por que largar o Strawpoll?", options: ["Muito antigo", "Mobile ruim", "URL longa", "Não vou largar"] },
      { q: "Alternativa preferida?", options: ["moomz", "Polldaddy", "Mentimeter", "Fico no Strawpoll"] },
    ],
    faq: [
      { q: "O moomz é realmente grátis?", a: "Sim — grátis, votos ilimitados, sem anúncios, sem premium obrigatório." },
      { q: "Por que trocar o Strawpoll?", a: "Interface antiga, mobile fraco, sem compartilhamento social moderno. Para Stories rápidos, as alternativas são melhores." },
      { q: "Dá pra importar minhas enquetes antigas do Strawpoll?", a: "Não — sem caminho de importação. Recomeça do zero, é rápido (10 seg por enquete)." },
      { q: "O moomz coleta meus dados?", a: "Nenhum dado pessoal. Sem cadastro, sem e-mail, sem rastreamento. Em conformidade com a LGPD por design." },
    ],
    related: ["free-online-poll-maker-pt", "how-to-make-anonymous-poll-pt", "how-to-make-instagram-poll-pt", "how-to-share-poll-link-pt"],
    updatedAt: today,
  },
  {
    slug: "how-to-share-poll-link-pt",
    locale: "pt",
    category: "guides",
    emoji: "🔗",
    title: "Como Compartilhar um Link de Enquete em Qualquer Lugar (Insta, Snap, WhatsApp, Discord)",
    h1: "Como Compartilhar um Link de Enquete em Todas as Plataformas",
    description:
      "Tutorial para compartilhar um link de enquete no Story do Instagram, Snap, WhatsApp, Discord, TikTok e Telegram. Com previews ricos.",
    intro:
      "Uma enquete só vale a pena se as pessoas votam. Compartilhar o link do jeito certo é metade da batalha. Aqui está o método exato para compartilhar uma enquete moomz no Story do Instagram, no Snap, no WhatsApp, no Discord, na bio do TikTok e no Telegram — com previews ricos em cada plataforma.",
    sections: [
      {
        h: "Story do Instagram",
        body: "Crie a enquete no moomz, copie o link. Crie um Story (foto, texto ou vídeo). Toque nas figurinhas, encontre \"Link\". Cole a URL do moomz. Personalize o texto da figurinha (\"vote aqui\"). Posicione no Story e publique. Os seguidores tocam, votam no navegador interno do IG e voltam.",
      },
      {
        h: "Story do Snapchat",
        body: "Crie um Snap (foto ou texto). Toque no ícone de clipe (barra lateral direita). Cole a URL do moomz. Personalize o texto do botão de link. Envie para o seu Story. Os amigos veem um botão \"Ver mais\" — tocam, votam e voltam.",
      },
      {
        h: "WhatsApp",
        body: "Abra o WhatsApp (grupo ou contato). Cole o link do moomz na conversa. O WhatsApp exibe um preview rico: título da enquete, opções, botão para votar. Os destinatários tocam, votam no navegador e voltam para a conversa.",
      },
      {
        h: "Discord",
        body: "Cole em qualquer canal ou DM. O Discord exibe um embed rico: título da enquete, opções, preview de imagem. Os membros clicam, votam e voltam para o Discord.",
      },
      {
        h: "Bio do TikTok (ou legenda de vídeo)",
        body: "Cole a URL do moomz no campo de site da sua bio (Perfil → Editar perfil → Site). Aparece como link clicável. Mencione no vídeo (\"vote na bio\"). Legendas de vídeo não suportam links clicáveis para contas pessoais.",
      },
      {
        h: "Telegram",
        body: "Cole em qualquer conversa ou canal. O Telegram exibe um preview rico. Os membros tocam, votam e voltam.",
      },
    ],
    polls: [
      { q: "Melhor plataforma para compartilhar enquetes?", options: ["Instagram", "TikTok", "WhatsApp", "Discord"] },
      { q: "Você usa a figurinha de link no Insta?", options: ["Sempre", "Às vezes", "Nunca"] },
    ],
    faq: [
      { q: "O link do moomz funciona em todo lugar?", a: "Sim — figurinha de link do Instagram, clipe do Snapchat, chats do WhatsApp/Discord/Telegram com preview, e-mail, SMS." },
      { q: "Abre no app ou no navegador?", a: "No Insta/Snap/Discord, o link abre no navegador interno do app. No WhatsApp/Telegram, no navegador do sistema. Mesma experiência em todos os lugares." },
      { q: "Dá pra rastrear quem clicou?", a: "Não — o moomz não rastreia cliques individuais para preservar a privacidade. Você vê o total de votos, não quem votou." },
      { q: "O link é curto?", a: "5 caracteres depois de moomz.com/ (ex: moomz.com/abcde). Total: 13 caracteres." },
    ],
    related: ["how-to-make-instagram-poll-pt", "how-to-make-anonymous-poll-pt", "free-online-poll-maker-pt", "strawpoll-alternative-pt"],
    updatedAt: today,
  },
  {
    slug: "icebreaker-poll-questions-pt",
    locale: "pt",
    category: "guides",
    emoji: "🧊",
    title: "Perguntas de Enquete para Quebrar o Gelo — Quando e Como Usar",
    h1: "Enquetes para Quebrar o Gelo: Quando e Como Usar",
    description:
      "Guia completo sobre enquetes para quebrar o gelo — quando funcionam, o que perguntar, como aplicá-las em reuniões, encontros, salas de aula e grupos novos.",
    intro:
      "Enquetes para quebrar o gelo são a forma mais rápida de fazer uma sala silenciosa começar a falar. Mas a pergunta errada mata o clima mais rápido do que nenhuma pergunta. Aqui está o guia completo: quando usar, o que perguntar e como apresentar.",
    sections: [
      {
        h: "Quando funciona (e quando não funciona)",
        body: "Funciona: início de reunião, primeiro encontro, equipe nova, apresentação em sala de aula, grupo de pessoas que não se conhecem. Não funciona: fim de uma sessão longa, após um conflito, com pessoas que já se conhecem bem. Combine o momento certo.",
      },
      {
        h: "Como apresentar uma enquete para quebrar o gelo",
        body: "Errado: \"vamos fazer uma dinâmica de quebra-gelo\". Soa corporativo, mata o clima. Certo: \"tenho um app aqui, bora testar uma rapidinha\". \"Quer quebrar o gelo? Vota nessa\". Apresente como um jogo, não como um exercício.",
      },
      {
        h: "O que perguntar: 3 níveis",
        body: "Nível 1 (leve): café ou chá, praia ou montanha, clima de fim de semana. Nível 2 (revelador): comida de conforto, cidade dos sonhos, superpoder. Nível 3 (profundo): maior medo, maior conquista do ano. Comece no nível 1 e vá progredindo.",
      },
      {
        h: "Quantas enquetes por sessão",
        body: "Reunião: 1 a 2 no início. Primeiro encontro: 3 a 5 distribuídas ao longo da noite. Sala de aula: 1 por aula, semanalmente. Não transforme em interrogatório — deixe fluir naturalmente.",
      },
      {
        h: "O horário do dia importa",
        body: "Quebra-gelo de manhã = impulso de energia (\"qual o vibe de hoje?\"). Quebra-gelo à noite = reflexão (\"melhor momento do dia?\"). No meio da reunião = pausa para respirar. Adapte a enquete à energia que você quer injetar.",
      },
    ],
    polls: [
      { q: "Vibe hoje de manhã?", options: ["🔥 animado", "😊 bem", "😐 ok", "😴 cansado"] },
      { q: "Melhor momento do seu dia?", options: ["Manhã", "Almoço", "Tarde", "Noite"] },
      { q: "Café ou chá?", options: ["Café", "Chá", "Matcha", "Nenhum"] },
      { q: "Fim de semana ideal?", options: ["Aventura", "Relaxar", "Social", "Solo"] },
    ],
    faq: [
      { q: "Quebra-gelo não é brega?", a: "Só quando forçado. Um casual \"vota nessa pergunta idiota\" funciona. \"Dinâmica obrigatória de integração\" não funciona." },
      { q: "E se ninguém votar?", a: "Faça perguntas mais fáceis. Ou remova a pressão social com anonimato (o moomz é anônimo por padrão)." },
      { q: "Para reuniões online?", a: "Jogue o link no chat no início. As pessoas votam durante a apresentação. A energia sobe quando os resultados aparecem." },
      { q: "Quantas pessoas para um bom quebra-gelo?", a: "4 a 30 é o ideal. Abaixo de 4 fica forçado. Acima de 30, perde o caráter pessoal." },
    ],
    related: ["icebreaker-en-pt", "team-building-en-pt", "first-date-en-pt", "this-or-that-pt"],
    updatedAt: today,
  },
  {
    slug: "share-poll-whatsapp-discord-slack-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🔗",
    title: "Como Compartilhar uma Enquete moomz no WhatsApp, Discord e Slack",
    h1: "Compartilhe uma Enquete moomz no WhatsApp, Discord e Slack — Passo a Passo",
    description:
      "Guia passo a passo para compartilhar uma enquete moomz no WhatsApp, Discord e Slack. Com previews de link, integração em threads e dicas de notificação.",
    intro:
      "Assim que sua enquete moomz estiver criada, a URL funciona em qualquer app de chat. Mas cada plataforma tem seus macetes. Aqui está a forma ideal de compartilhar enquetes moomz no WhatsApp, Discord e Slack — incluindo previews de link, fixação e etiqueta de notificação.",
    sections: [
      {
        h: "WhatsApp: cole o link e ganhe um preview rico",
        body: "Cole a URL do moomz em qualquer chat do WhatsApp. O WhatsApp busca automaticamente um cartão de preview com a pergunta, o emoji e a contagem de opções. O preview torna a mensagem clicável. Para grupos, envie o link com uma introdução de uma linha: \"Vota pizza ou sushi hoje à noite\". Fixe a mensagem nas informações do chat para enquetes em andamento. O WhatsApp nativo não suporta mais de 12 opções, então o moomz preenche essa lacuna.",
      },
      {
        h: "Discord: embed em canais com preview rico",
        body: "No Discord, cole o link do moomz em qualquer canal. O embed do Discord se expande com o preview da enquete. Para canais de voz, compartilhe o link no chat lateral — os votantes clicam e votam entre as rodadas. Para comunidades no Discord, crie um canal #enquetes e use o moomz para decisões coletivas. A enquete nativa do Discord fica limitada a um servidor; as enquetes do moomz viajam entre servidores via URL.",
      },
      {
        h: "Slack: funciona em qualquer canal ou DM",
        body: "O Slack desdobra automaticamente as URLs do moomz em um cartão de preview mostrando a pergunta e as opções. Para decisões de equipe, poste no canal relevante com um prazo claro (\"Vote até sexta às 17h\"). Para enquetes da empresa toda, fixe no #geral. Os polls nativos do Slack precisam de configuração de fluxo de trabalho; as enquetes moomz funcionam na hora via URL. Bots como Polly concorrem aqui, mas o moomz vence para votações anônimas onde o rastreamento de identidade é indesejado.",
      },
      {
        h: "Boas práticas entre plataformas",
        body: "Mesma enquete, várias plataformas: cole a URL do moomz no WhatsApp, Discord, Slack e Telegram ao mesmo tempo para o máximo de alcance. A URL funciona em todos os lugares porque o moomz é web. Para audiências de criadores, linke da bio do Instagram + bio do TikTok + tweet fixado para a mesma enquete. O funil entre plataformas vai para uma única página de resultados. Alguns criadores relatam 5x mais votos assim do que com compartilhamento em uma plataforma só.",
      },
    ],
    polls: [
      { q: "Melhor plataforma para enquetes?", options: ["WhatsApp", "Discord", "Slack", "Telegram"] },
      { q: "Preview automático importa?", options: ["Sim", "Não", "Médio", "Sempre"] },
      { q: "Fixar enquete no chat?", options: ["Sempre", "Às vezes", "Nunca", "Só as grandes"] },
      { q: "Mensagem com prazo importa?", options: ["Sim", "Não", "Médio", "Fundamental"] },
      { q: "Melhor recurso do moomz nos chats?", options: ["Anônimo", "Resultados ao vivo", "URL curta", "Sem cadastro"] },
      { q: "Compartilhamento entre plataformas?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Enquete nativa vs moomz?", options: ["moomz", "Nativa", "Mix", "Nativa + moomz"] },
    ],
    faq: [
      {
        q: "O WhatsApp mostra os resultados da enquete no preview do chat?",
        a: "Mostra a pergunta e a contagem de opções. Para resultados ao vivo, os destinatários clicam no link.",
      },
      {
        q: "Dá pra fixar uma enquete moomz no Discord?",
        a: "Sim — fixe qualquer mensagem que contenha URLs de enquete. A mensagem fixada exibe o embed.",
      },
      {
        q: "O workspace do Slack bloqueia links externos?",
        a: "Alguns workspaces restringem o desdobramento de links. O moomz ainda funciona — a URL fica clicável, só sem o preview.",
      },
      {
        q: "Dá pra compartilhar a mesma enquete em várias plataformas?",
        a: "Sim — uma URL do moomz funciona em todas as plataformas. Todos os votos se acumulam em uma única página de resultados.",
      },
    ],
    related: ["how-to-share-poll-link-pt", "how-to-share-poll-link-pt"],
    updatedAt: today,
  },
  {
    slug: "embed-poll-blog-notion-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "📝",
    title: "Como Incorporar uma Enquete moomz no Seu Blog ou Página do Notion",
    h1: "Incorpore uma Enquete moomz num Post de Blog ou Página do Notion",
    description:
      "Passo a passo: incorpore uma enquete moomz no WordPress, Notion, Ghost ou qualquer blog. Opções de iframe e link.",
    intro:
      "Enquetes incorporadas aumentam o engajamento do artigo em até 60%. Aqui está como incorporar uma enquete moomz num post de blog, página do Notion, site Ghost ou qualquer plataforma que suporte HTML ou iframes.",
    sections: [
      {
        h: "No Notion: cole a URL",
        body: "O Notion converte automaticamente URLs em cartões de embed. Cole sua URL do moomz em uma página do Notion e clique em \"Criar embed\" quando solicitado. A enquete aparece como um cartão interativo. Os leitores votam sem sair da página. Funciona para documentos Notion compartilhados, sites públicos do Notion e wikis publicados no Notion. A enquete atualiza ao vivo conforme os votos chegam.",
      },
      {
        h: "No WordPress: shortcode ou iframe",
        body: "O WordPress suporta iframes via bloco HTML. Cole o código de iframe do moomz (disponível no menu de compartilhamento da página da enquete) no bloco HTML. A enquete aparece inline. Alternativa: usuários do WordPress auto-hospedado podem instalar o plugin moomz (quando disponível) para incorporação nativa por shortcode. Para temas que não aceitam iframe, use o bloco de link com preview.",
      },
      {
        h: "No Ghost, Substack, Medium",
        body: "Ghost e Substack aceitam iframes via cartões de embed HTML. O Medium não permite iframes — no Medium, cole a URL do moomz como link normal; o Medium cria um preview rico. O leitor clica para votar no moomz e volta para o artigo. Menos integrado do que o iframe, mas funciona em plataformas mais restritivas.",
      },
      {
        h: "Boas práticas para enquetes incorporadas",
        body: "Posicione as enquetes incorporadas entre 60% e 70% do artigo (após o argumento principal, antes da conclusão). Esse é o momento natural de reflexão. Use enquetes de 2 a 3 opções para maximizar o engajamento. Sempre inclua um link de fallback para a enquete moomz caso o iframe falhe para alguns leitores. Rastreie quais artigos geram mais votos — esse é o seu modelo de conteúdo de alto engajamento.",
      },
    ],
    polls: [
      { q: "Melhor plataforma para enquetes incorporadas?", options: ["Notion", "WordPress", "Ghost", "Medium"] },
      { q: "Iframe ou link?", options: ["Iframe", "Link", "Ambos", "Mix"] },
      { q: "Melhor posição no artigo?", options: ["Início", "Meio", "60-70%", "Final"] },
      { q: "Enquetes incorporadas aumentam engajamento?", options: ["Sim", "Não", "Médio", "Muito"] },
      { q: "Usar 2 ou 4 opções?", options: ["2", "3", "4", "Mix"] },
      { q: "Rastrear quais artigos geram votos?", options: ["Sim", "Não", "Às vezes", "Fundamental"] },
      { q: "Enquetes incorporadas ou link compartilhado?", options: ["Incorporadas", "Link", "Ambos", "Depende"] },
    ],
    faq: [
      {
        q: "O iframe deixa minha página mais lenta?",
        a: "Um pouco — os iframes do moomz carregam com lazy-load. Blogs modernos lidam bem com eles.",
      },
      {
        q: "Dá pra personalizar o estilo do iframe?",
        a: "Personalização limitada. Cor de fundo e bordas arredondadas são ajustáveis. Temas completos no plano premium.",
      },
      {
        q: "Enquetes incorporadas são anônimas?",
        a: "Sim — mesmo anonimato da enquete standalone. Os votos são anônimos para os leitores do seu blog.",
      },
      {
        q: "Dá pra rastrear votos do meu blog separadamente?",
        a: "Ainda não — os votos se acumulam em um único resultado. Rastreamento por UTM no plano premium em breve.",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-pt", "how-to-share-poll-link-pt", "free-online-poll-maker-pt"],
    updatedAt: today,
  },
  {
    slug: "read-poll-results-without-bias-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🔍",
    title: "Como Ler Resultados de Enquetes Sem Viés",
    h1: "Leia Resultados de Enquetes Sem Viés: Guia Prático",
    description:
      "Como ler resultados de enquetes sem viés. Tamanho da amostra, viés de seleção, timing dos votos e como evitar viés de confirmação.",
    intro:
      "Os resultados de enquetes mentem se você os ler da forma errada. Tamanho da amostra, viés de seleção, timing dos votos e viés de confirmação distorcem tudo. Aqui está como ler resultados de enquetes moomz (ou qualquer enquete) com ceticismo calibrado.",
    sections: [
      {
        h: "Tamanho da amostra: quantos votos são suficientes",
        body: "Abaixo de 30 votos, os resultados são ruído. De 30 a 100 votos, você tem um sinal direcional. De 100 a 500 votos, os resultados são estatisticamente relevantes para perguntas binárias. Acima de 500, é robusto. O moomz exibe o total de votos em destaque — confira o número antes de tirar conclusões. Uma maioria de 70% em 20 votos não significa nada; em 500 votos, é real.",
      },
      {
        h: "Viés de seleção: quem realmente votou",
        body: "Se sua enquete está no grupo do WhatsApp de 10 amigos, os resultados refletem seus amigos, não o mundo. Se foi postada no Instagram, reflete seus seguidores, que já foram filtrados pela sua estética e posição. Para leituras honestas, pergunte: quem é essa audiência, o que já acredita e quem teria pulado a votação? A resposta ajusta o resultado. Enquetes moomz postadas em apps de relacionamento vão pender para a visão de quem usa apps de relacionamento.",
      },
      {
        h: "Timing dos votos: os primeiros 30 minutos enganam",
        body: "Os primeiros 30 minutos de votação costumam mostrar uma distorção extrema porque os votantes iniciais são geralmente seus seguidores mais engajados (que concordam com seu enquadramento). Espere 24 horas antes de tirar conclusões. Os resultados ao vivo do moomz mostram o estado atual; deixe a curva se estabilizar antes de ler o veredicto. Resultados finais após 24 a 48 horas são mais representativos.",
      },
      {
        h: "Viés de confirmação: você está lendo o que quer?",
        body: "Se você esperava que X ganhasse e X ganhou, seja crítico. Você enquadrou a pergunta a favor de X? Compartilhou onde os defensores de X se concentram? Leia os resultados como se você quisesse que Y ganhasse. Essa verificação de viés frequentemente revela problemas na construção da enquete. Melhor prática: peça a um amigo que não compartilhe sua visão para ler os mesmos resultados — a interpretação dele revela seus pontos cegos.",
      },
    ],
    polls: [
      { q: "Mínimo de votos para resultado válido?", options: ["10", "30", "100", "500"] },
      { q: "Esperar quanto tempo para ler o resultado?", options: ["1h", "24h", "48h", "1 semana"] },
      { q: "Viés de seleção é real?", options: ["Sim", "Não", "Médio", "Fundamental"] },
      { q: "Viés de confirmação é real?", options: ["Sim", "Não", "Médio", "Sempre"] },
      { q: "Melhor prática: amigo reler?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Confia em enquetes de grupo de amigos?", options: ["Sim", "Não", "Limitado", "Com ceticismo"] },
      { q: "Confia em enquetes nas redes sociais?", options: ["Sim", "Não", "Médio", "Menos"] },
      { q: "Você checa a contagem de votos primeiro?", options: ["Sempre", "Às vezes", "Nunca", "Deveria"] },
    ],
    faq: [
      {
        q: "Por que os resultados iniciais de enquetes enganam?",
        a: "Os primeiros votantes são sua audiência mais engajada, com viés para seu enquadramento. Espere 24h para equilibrar.",
      },
      {
        q: "Uma divisão 60/40 é significativa?",
        a: "Depende do tamanho da amostra. Com 30 votos, não. Com 500, sim — é uma preferência majoritária clara.",
      },
      {
        q: "Como reduzir o viés de seleção?",
        a: "Compartilhe a enquete fora da sua bolha. Compartilhamento entre plataformas ajuda. Enquetes só no grupo de amigos são enviesadas.",
      },
      {
        q: "Enquetes anônimas são mais honestas?",
        a: "Em geral, sim. Votações identificadas suprimem opiniões minoritárias.",
      },
    ],
    related: ["read-poll-results-without-bias-en-pt", "anonymous-vs-identified-poll-en-pt"],
    updatedAt: today,
  },
  {
    slug: "write-poll-question-people-answer-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "✍️",
    title: "Como Escrever uma Pergunta de Enquete que as Pessoas Respondem",
    h1: "Escreva uma Pergunta de Enquete que Recebe Votos: Guia Palavra por Palavra",
    description:
      "Como escrever uma pergunta de enquete que as pessoas realmente respondem. Contagem de palavras, enquadramento, especificidade e padrões de gancho emocional.",
    intro:
      "A diferença entre uma taxa de voto de 5% e uma de 35% está na pergunta em si. Curta, específica, na segunda pessoa, levemente emocional. Aqui está o guia palavra por palavra para escrever perguntas de enquete que recebem votos.",
    sections: [
      {
        h: "Tamanho: menos de 12 palavras",
        body: "Perguntas com menos de 12 palavras recebem 60% mais votos do que as mais longas. Os votantes scrollam rápido; não processam frases longas. \"Pizza ou sushi hoje à noite?\" bate \"Qual opção de jantar todos prefeririam para o grupo tonight levando em conta o clima?\". Corte tudo que não for essencial. Use substantivos específicos. Elimine artigos quando possível (\"Pizza hoje?\" vs \"Seria pizza uma boa ideia hoje?\").",
      },
      {
        h: "Enquadramento: segunda pessoa para o votante",
        body: "\"VOCÊ mandaria esse texto?\" supera \"Esse texto deveria ser mandado?\" por 3x. Dirija-se ao votante diretamente. Use \"você\" ou modo imperativo. Para dilemas de drama: \"O que você faria?\" bate \"O que alguém faria?\". O endereçamento direto ativa a identidade do votante, o que impulsiona o comprometimento com a votação.",
      },
      {
        h: "Especificidade: nomeie a coisa de forma concreta",
        body: "\"Pizza ou sushi?\" bate \"Opções de jantar?\". Concreto > abstrato. Nomes de marcas, lugares, pessoas adicionam especificidade que impulsiona o engajamento (com bom senso). \"Devo mandar esse DM do Insta?\" precisa do contexto do DM — enquetes vagas perdem. As enquetes moomz funcionam melhor quando a pergunta é tão específica que o votante pode tocar sem precisar reler.",
      },
      {
        h: "Gancho emocional: stakes elevam a taxa de voto",
        body: "Adicione stakes leves. \"Pizza ou sushi hoje à noite (tô morrendo de fome)\" bate \"Pizza ou sushi hoje à noite?\" em 30%. Os stakes ativam a empatia. Drama, FOMO, urgência decisional impulsionam o engajamento. Não exagere — manipulação emocional é detectável. Use stakes que correspondam ao cenário real. \"Look A ou B (encontro em 1h)\" funciona porque o encontro é real.",
      },
    ],
    polls: [
      { q: "Melhor tamanho de pergunta?", options: ["Menos de 8 palavras", "8-12 palavras", "12-20", "20+"] },
      { q: "Segunda pessoa é melhor?", options: ["Sim", "Não", "Médio", "Sempre"] },
      { q: "Específico vs abstrato?", options: ["Específico", "Abstrato", "Mix", "Depende"] },
      { q: "Ganchos emocionais funcionam?", options: ["Sim", "Não", "Às vezes", "Risco de exagerar"] },
      { q: "Stakes na pergunta?", options: ["Sempre", "Às vezes", "Nunca", "Só quando real"] },
      { q: "Melhor emoção para gancho?", options: ["Urgência", "Drama", "FOMO", "Empatia"] },
      { q: "Cortar artigos para encurtar?", options: ["Sim", "Não", "Às vezes", "Só os curtos"] },
      { q: "Reformular enquetes vagas?", options: ["Sempre", "Às vezes", "Nunca", "Se tiver feedback"] },
    ],
    faq: [
      {
        q: "Devo incluir emoji na pergunta?",
        a: "Com moderação — um emoji pode aumentar o engajamento. Mais de 2 parece spam.",
      },
      {
        q: "Perguntas em caps lock?",
        a: "Em geral não. Caps numa palavra para ênfase é ok. Tudo em caps parece grito.",
      },
      {
        q: "Perguntas terminando com 'né?' ou 'não é?'",
        a: "Evite frases tendenciosas. \"Pizza hoje, né?\" vicia o resultado. Mantenha-se neutro.",
      },
      {
        q: "Posso reformular uma enquete com baixo engajamento?",
        a: "Sim — relance com a nova pergunta. A primeira enquete some; a nova captura votos frescos.",
      },
    ],
    related: ["max-poll-options-2-4-6-en-pt", "write-poll-question-people-answer-en-pt"],
    updatedAt: today,
  },
  {
    slug: "max-poll-options-2-4-6-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🔢",
    title: "Máximo de Opções em Enquetes — 2 vs 4 vs 6 — Quando Usar Cada",
    h1: "Guia de Quantidade de Opções: Quando 2, 3, 4 ou 6 Opções Vencem",
    description:
      "Guia sobre o máximo de opções em enquetes. Quando usar 2, 3, 4 ou 6 opções. Dados de engajamento, casos de uso e regras de decisão.",
    intro:
      "As enquetes moomz suportam de 2 a 6 opções. A maioria das pessoas vai direto para 4. Os dados mostram que o padrão quase sempre está errado. Aqui está o guia caso a caso para escolher a quantidade certa de opções.",
    sections: [
      {
        h: "2 opções: contextos de scroll-and-vote",
        body: "Use 2 opções para Stories do Instagram, links de bio do TikTok e qualquer contexto em que os votantes estejam scrollando rápido. O binário minimiza a carga cognitiva. Funciona para: estética this-or-that, hot takes, dilemas de drama, decisões simples. Evite 2 opções para: decisões genuinamente multi-alternativas, rankings de gosto, enquetes de previsão com vários resultados plausíveis.",
      },
      {
        h: "3 opções: opiniões com nuance",
        body: "3 opções funcionam quando há um meio-termo real ou uma resposta do tipo \"depende\". Os padrões \"sim / não / médio\" dominam as enquetes Gen Z. \"Fica / vai / espera\" para enquetes de relacionamento. A terceira opção absorve os votantes que teriam pulado a enquete porque nenhum binário se encaixava. 3 opções é o ponto ideal para enquetes de opinião.",
      },
      {
        h: "4 opções: escolhas estruturadas",
        body: "4 opções se destacam em: enquetes de melhor-de-X (\"álbum do ano\"), votos de tier list (\"S/A/B/C?\"), escolha de horário (\"manhã/tarde/noite/madrugada\"), seleção de gênero. 4 opções dão conta do padrão \"quatro direções\" (escolhas categóricas tipo bússola). O engajamento é bom, mas não é o máximo — menos opções perderia informação; mais perderia votantes.",
      },
      {
        h: "6 opções: votações abrangentes",
        body: "6 opções funcionam para: álbum do ano com 6 indicados, tier lists completas (S/A/B/C/D/F), seleção completa de gênero. Ideal para enquetes de power-user em contextos de fandom onde os votantes são muito engajados. A taxa de voto é a mais baixa (vs enquetes de 2 opções), mas a qualidade do engajamento é a mais alta — quem completa uma enquete de 6 opções está muito envolvido. O moomz limita em 6.",
      },
    ],
    polls: [
      { q: "Quantidade de opções padrão?", options: ["2", "3", "4", "6"] },
      { q: "Melhor para Insta Story?", options: ["2", "3", "4", "6"] },
      { q: "Melhor para previsões?", options: ["3", "4", "6", "Mix"] },
      { q: "Melhor para álbum do ano?", options: ["4", "6", "10+", "Mix"] },
      { q: "Melhor para enquetes de relacionamento?", options: ["2", "3", "4", "Mix"] },
      { q: "Melhor para tier lists?", options: ["4", "6", "8+", "Mix"] },
      { q: "Você pula enquetes com mais de 6 opções?", options: ["Sim", "Não", "Às vezes", "Só as ruins"] },
      { q: "moomz vai permitir 8+ opções em breve?", options: ["Sim por favor", "Fica em 6", "Tanto faz", "Não ligo"] },
    ],
    faq: [
      {
        q: "E se eu tiver 7 opções para votar?",
        a: "Reduza combinando (\"X ou Y\" como uma opção) ou elimine a mais fraca. 6 é o máximo do moomz por razões cognitivas.",
      },
      {
        q: "Dá pra adicionar opções depois que a enquete já foi criada?",
        a: "Atualmente não — as enquetes moomz têm opções fixas após a criação. Recrie a enquete se precisar expandir.",
      },
      {
        q: "Mais opções serão permitidas algum dia?",
        a: "Possivelmente no plano premium em 2026. Os dados desaconselham por razões de engajamento.",
      },
      {
        q: "Enquetes de 4 opções são sempre tier lists?",
        a: "Não — 4 opções funcionam em muitos casos de uso. Nem toda enquete de 4 opções é uma tier list.",
      },
    ],
    related: ["write-poll-question-people-answer-en-pt", "max-poll-options-2-4-6-en-pt"],
    updatedAt: today,
  },
  {
    slug: "anonymous-vs-identified-poll-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🎭",
    title: "Enquetes Anônimas vs Identificadas — Quando o Anônimo Vence",
    h1: "Enquetes Anônimas vs Identificadas: Quando Usar Cada Uma",
    description:
      "Quando usar enquetes anônimas vs identificadas. Casos de uso para cada formato, dados de precisão e análise de dinâmicas sociais.",
    intro:
      "As enquetes do Instagram são identificadas. As do moomz são anônimas. Quando cada formato vence? Aqui está o conjunto de regras para escolher o formato certo com base no caso de uso, sensibilidade e necessidade de precisão.",
    sections: [
      {
        h: "Enquetes anônimas: opiniões honestas",
        body: "Enquetes anônimas vencem quando a honestidade importa mais do que a identidade. Tópicos sensíveis (opiniões sobre relacionamento, imagem corporal, dilemas de drama, satisfação no trabalho) recebem 3x mais respostas honestas quando são anônimos. O moomz é anônimo por padrão porque tópicos sociais dominam seus casos de uso. Use anônimo para: confissões, enquetes de opinião, pesquisas sobre qualquer tema carregado emocionalmente.",
      },
      {
        h: "Enquetes identificadas: prova social e responsabilização",
        body: "Enquetes identificadas (estilo Instagram) vencem quando você quer que a identidade dos votantes fique visível. Use para: reações de fã, enquetes de apoio (\"quem vem pro casamento?\"), enquetes de compromisso (\"quem vai na academia amanhã?\"). A identidade impulsiona a ação — os votantes assumem um compromisso público. Enquetes identificadas têm menor taxa de voto, mas maior taxa de ação.",
      },
      {
        h: "Híbrido: votação anônima, compromisso público",
        body: "Alguns casos precisam dos dois. \"Vote anonimamente se você compareceria, depois confirme publicamente se votou sim\". As enquetes moomz cuidam do voto anônimo; ferramentas nativas de evento cuidam do RSVP público. Combinar os dois preserva a opinião honesta enquanto extrai comprometimento público dos dispostos.",
      },
      {
        h: "Matriz de decisão",
        body: "Decisão com stakes precisando de input honesto: anônimo (moomz). Sinal social ou pressão de grupo útil: identificado (Instagram). Tópicos sensíveis: anônimo. Compromisso público necessário: identificado. Enquetes em grupo de amigos: geralmente anônimo, a menos que o compromisso seja o objetivo. Enquetes no trabalho: anônimo para feedback, identificado para logística.",
      },
    ],
    polls: [
      { q: "Prefere anônimo ou identificado?", options: ["Anônimo", "Identificado", "Mix", "Depende"] },
      { q: "Tópico mais sensível?", options: ["Relacionamento", "Corpo", "Trabalho", "Política"] },
      { q: "Compromisso público via enquete?", options: ["Sim", "Não", "Mix", "Raramente"] },
      { q: "Enquetes de drama anônimas?", options: ["Sempre", "Às vezes", "Nunca", "Por padrão"] },
      { q: "Enquetes do trabalho anônimas?", options: ["Sim p/ feedback", "Identificado p/ logística", "Mix", "Nunca"] },
      { q: "Formato híbrido é útil?", options: ["Sim", "Não", "Às vezes", "Complicado"] },
      { q: "Confia em enquetes anônimas?", options: ["Sim", "Não", "Médio", "Mais honestas"] },
      { q: "Enquetes identificadas são mais precisas?", options: ["Não", "Sim", "Médio", "Depende"] },
    ],
    faq: [
      {
        q: "O moomz é totalmente anônimo?",
        a: "Sim — os votos são anônimos por padrão. Apenas os totais agregados ficam visíveis.",
      },
      {
        q: "Dá pra ver quem votou na minha enquete?",
        a: "Não — o moomz não expõe a identidade dos votantes, nem mesmo para os criadores da enquete. O anonimato é garantido.",
      },
      {
        q: "Por que o Instagram é identificado?",
        a: "Modelo de engajamento — o Instagram se beneficia das dinâmicas sociais em torno da identidade do votante. Outra plataforma, outro tradeoff.",
      },
      {
        q: "Anônimo é sempre mais preciso?",
        a: "Para tópicos sensíveis, sim. Para enquetes de compromisso (\"quem vem?\"), o identificado é melhor.",
      },
    ],
    related: ["read-poll-results-without-bias-en-pt", "how-to-make-anonymous-poll-pt"],
    updatedAt: today,
  },
  {
    slug: "polls-in-slack-team-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "💼",
    title: "Como Usar Enquetes num Canal do Slack para Decisões de Equipe",
    h1: "Enquetes no Slack para Decisões de Equipe: Guia para Gestores",
    description:
      "Como usar enquetes num canal do Slack para decisões de equipe. Boas práticas para gestores, tipos de decisão e definição de prazos.",
    intro:
      "O Slack é onde as decisões de equipe acontecem em 2026. As enquetes moomz se integram perfeitamente — cole uma URL, vote em 30 segundos, decisão tomada. Aqui está o guia do gestor para usar enquetes em canais do Slack de forma eficaz.",
    sections: [
      {
        h: "Melhores canais do Slack para fazer enquetes",
        body: "Use enquetes em: #equipe para decisões da equipe, #engenharia para votos técnicos, #social para planejamento de eventos. Evite fazer enquetes no #geral sobre tópicos sensíveis — olhos demais. Evite enquetes em DMs — derrota o propósito coletivo. Tamanho ideal: canais de 8 a 50 pessoas. Menos e o resultado vira uma pessoa só; mais e o ruído abafa o sinal.",
      },
      {
        h: "Tipos de decisão que enquetes resolvem bem",
        body: "Enquetes funcionam para: seleção de horário de reunião, decisões de almoço, votos de prioridade de projeto (entre opções pré-curadas), seleção de ferramenta (Slack vs Teams vs Discord), localização de evento. Enquetes não funcionam para: direção estratégica, contratações, salário, avaliações de desempenho. A regra: decisões distribuídas onde 10 inputs pequenos equivalem a 1 escolha coletiva.",
      },
      {
        h: "Definindo prazos e encerrando os votos",
        body: "Sempre inclua um prazo na mensagem do Slack: \"Vote até sexta às 17h\". As enquetes moomz não se fecham automaticamente, então o prazo é social. Envie um lembrete 4 horas antes para enquetes importantes. Depois do prazo, tire um screenshot do resultado final e poste na mesma thread como decisão. Referencie o screenshot se alguém questionar depois.",
      },
      {
        h: "Evitando fadiga de enquetes",
        body: "Enquetes demais = fadiga. Limite-se a 3 a 5 enquetes por semana por canal. Reserve as enquetes para decisões reais; use threads para discussões de opinião. Se sua equipe reclamar do volume de enquetes, audite quais realmente importaram. Corte o resto. As melhores equipes relatam que as enquetes parecem \"uma mensagem no Slack que substituiu 30 e-mails\" — preserve essa magia sendo seletivo.",
      },
    ],
    polls: [
      { q: "Enquetes no Slack: sim ou não?", options: ["Sim", "Não", "Às vezes", "Todo dia"] },
      { q: "Tamanho ideal do canal para enquete?", options: ["5-10", "10-50", "50+", "Empresa toda"] },
      { q: "Mensagem com prazo?", options: ["Sempre", "Às vezes", "Nunca", "Fundamental"] },
      { q: "Fadiga de enquete é real?", options: ["Sim", "Não", "Médio", "Às vezes"] },
      { q: "Melhor tipo de decisão para enquete?", options: ["Horário de reunião", "Almoço", "Prioridade", "Evento"] },
      { q: "Estratégia por enquete?", options: ["Não", "Às vezes", "Sim", "Nunca"] },
      { q: "Enquetes reduzem tempo de decisão?", options: ["Sim muito", "Médio", "Não", "Mais devagar"] },
      { q: "Enquetes anônimas no trabalho?", options: ["Sim", "Não", "Mix", "Depende"] },
    ],
    faq: [
      {
        q: "Uso o poll nativo do Slack ou o moomz?",
        a: "Nativo para enquetes rápidas dentro do workspace. moomz para enquetes anônimas ou que precisam cruzar canais/organizações.",
      },
      {
        q: "Como fazer as pessoas realmente votarem?",
        a: "Defina prazos, envie lembretes, torne o voto um toque só e aja sobre o resultado. Enquetes com ação concreta geram participação futura.",
      },
      {
        q: "Enquetes podem substituir 1:1s?",
        a: "Não — enquetes não substituem conversas individuais. Elas substituem meta-reuniões.",
      },
      {
        q: "Melhor horário do dia para postar uma enquete?",
        a: "10h-11h ou 14h-15h no fuso horário da equipe. Evite de manhã cedo (perde no feed) e fim do dia (esquece).",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-pt"],
    updatedAt: today,
  },
  {
    slug: "polls-tiktok-live-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🎥",
    title: "Como Usar Enquetes numa Live do TikTok",
    h1: "Enquetes em Lives do TikTok: Engaje Durante a Stream",
    description:
      "Como usar enquetes numa live do TikTok. Configuração, compartilhamento de link, estratégias de votação em tempo real e aumento de retenção de espectadores.",
    intro:
      "O TikTok Live não tem enquetes nativas. Os criadores usam o moomz para preencher essa lacuna: anunciam a enquete, compartilham o link no chat e acompanham os resultados ao vivo durante a stream. Enquetes em lives aumentam o tempo médio de visualização em 40%. Aqui está o playbook.",
    sections: [
      {
        h: "Prepare a enquete antes de ir ao vivo",
        body: "Crie 3 a 5 enquetes antes de começar a live. Salve as URLs curtas num app de notas. Durante a live, você pode soltar uma enquete nova a cada 10-15 minutos colando a próxima URL. A preparação prévia evita gaps constrangedores. Melhores enquetes para live: desafios de espectadores (\"vota o que eu faço a seguir\"), opiniões (\"hot ou not?\"), previsões (\"eu vou passar dessa fase?\").",
      },
      {
        h: "Compartilhe o link no chat da live",
        body: "O chat do TikTok Live não desdobra URLs adequadamente. Anuncie o link verbalmente (\"vai no moomz.com/x7k2j\"), depois cole no chat. A URL do moomz com 5 letras é curta o suficiente para ditar em voz alta. Os espectadores tocam, votam e voltam para a stream. Alguns streamers projetam a URL da enquete via overlay na tela (estilo StreamLabs ou OBS) para lembrete visual.",
      },
      {
        h: "Resultados dos votos na stream",
        body: "Depois que os espectadores votarem, tire um screenshot do resultado ao vivo e reaja na câmera. \"73% disseram pra fazer o desafio — ok, vou fazer\". A reação é o conteúdo. Streamers que reagem aos resultados das enquetes se expressam mais, os espectadores ficam mais tempo. Não diga só \"X ganhou\" — reaja como se o resultado importasse, porque importa em termos de agency da stream.",
      },
      {
        h: "Enquetes de recap e conteúdo de continuidade",
        body: "Encerre a live com uma enquete de recap: \"melhor momento da stream de hoje?\". Faça uma continuação na próxima live: \"continuando o que a galera votou?\". Isso cria continuidade. Os espectadores recorrentes sentem que o streamer lembrou do input deles. As enquetes se tornam o fio condutor entre as lives.",
      },
    ],
    polls: [
      { q: "Enquetes em TikTok Live: bora?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Melhor tipo de enquete para live?", options: ["Desafio do espectador", "Opinião", "Previsão", "Recap"] },
      { q: "Pré-criar as enquetes?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Reação de screenshot do resultado?", options: ["Sempre", "Às vezes", "Nunca", "Fundamental"] },
      { q: "Enquetes aumentam watch time?", options: ["Sim muito", "Médio", "Não", "Fundamental"] },
      { q: "Compartilhar link verbalmente?", options: ["Sim", "Não", "Verbal + chat", "Só no chat"] },
      { q: "Enquete de recap no final?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Continuidade entre lives?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
    ],
    faq: [
      {
        q: "Bots do TikTok conseguem postar o link da enquete automaticamente?",
        a: "Nativamente não. Algumas ferramentas de terceiros podem; geralmente o streamer cola manualmente.",
      },
      {
        q: "O TikTok vai adicionar enquetes nativas em lives?",
        a: "Talvez. Até lá, o moomz preenche a lacuna via URLs compartilháveis.",
      },
      {
        q: "Quantas enquetes por live?",
        a: "3 a 5 por hora. Mais fica cansativo; menos desperdiça a oportunidade de engajamento.",
      },
      {
        q: "As enquetes moomz em TikTok Live são anônimas?",
        a: "Sim — mesmo anonimato. Os espectadores votam anonimamente; só os totais ficam visíveis.",
      },
    ],
    related: ["polls-tiktok-live-en-pt"],
    updatedAt: today,
  },
  {
    slug: "poll-viral-twitter-x-en-pt",
    locale: "pt",
    category: "guides",
    emoji: "🐦",
    title: "Como Fazer uma Enquete Viralizar no Twitter / X",
    h1: "Enquetes Virais no Twitter: Formato, Tema e Loop de Quote-Tweet",
    description:
      "Como fazer uma enquete viralizar no Twitter / X. Escolha de tema, formato, loop de quote-tweet e otimização de horário.",
    intro:
      "O Twitter tem enquetes nativas, mas limitadas a 4 opções e 7 dias. As enquetes moomz escapam das duas limitações e adicionam anonimato. Para enquetes virais, a URL do moomz colada em um tweet supera as enquetes nativas em 3x em engajamento. Aqui está como fazer uma enquete no Twitter / X viralizar.",
    sections: [
      {
        h: "Escolha do tema: polêmica bate consenso",
        body: "Enquetes virais no Twitter escolhem temas onde a audiência se divide 60/40 — não 95/5. \"Pizza ou sushi?\" é fácil demais; \"Abacaxi na pizza?\" tem a divisão certa. A polêmica gera quote-tweets, que geram viralidade. Evite temas onde um lado é obviamente certo (\"racismo é ruim?\" — viral pelo motivo errado). Mire em debates genuínos onde ambos os lados têm defensores respeitáveis.",
      },
      {
        h: "Loop de quote-tweet",
        body: "Quando a enquete tiver 100+ votos, faça um quote-tweet do seu próprio link com um hot take. \"73% errado\" ou \"não acredito que ainda está tão próximo\". O quote-tweet traz uma nova onda de votantes. Repita 2 a 3 vezes em 24 horas. Cada quote-tweet coloca a enquete de volta no topo do feed. Esse é o maior multiplicador de viralidade para enquetes no Twitter.",
      },
      {
        h: "Horário do dia e dia da semana",
        body: "Melhor horário para postar: das 8h às 10h ET de terça a quinta. Pico de atenção da audiência. Evite fins de semana (menor engajamento) e fim de noite (os votos não se acumulam durante a madrugada). As enquetes precisam de impulso nas primeiras 2 horas; poste quando o público estiver ativo.",
      },
      {
        h: "Enquete nativa vs link moomz",
        body: "Enquetes nativas do Twitter têm limite de 4 opções e 7 dias. As enquetes moomz suportam 6 opções e ficam abertas por tempo indeterminado. Para enquetes virais com conjuntos amplos de opções (\"AOTY entre essas 6\"), o moomz vence. Para enquetes binárias (\"sim ou não?\"), a nativa é boa — a UI incorporada dentro do Twitter supera um clique de link externo. Escolha pelo caso de uso.",
      },
    ],
    polls: [
      { q: "Enquete nativa ou link moomz?", options: ["Nativa", "moomz", "Mix", "Depende"] },
      { q: "Melhor tema para viralidade?", options: ["Polêmico", "Engraçado", "Drama", "Médio"] },
      { q: "Fazer quote-tweet do próprio poll?", options: ["Sim", "Não", "Às vezes", "Sempre"] },
      { q: "Melhor horário para postar?", options: ["8-10h ET", "Almoço", "Noite", "Madrugada"] },
      { q: "Evitar fins de semana?", options: ["Sim", "Não", "Médio", "Tenta mesmo assim"] },
      { q: "Quantos quote-tweets?", options: ["1", "2-3", "5+", "Nenhum"] },
      { q: "Enquete por 7 dias ou mais?", options: ["7 dias", "Mais", "24h", "1h"] },
      { q: "Enquetes moomz para 6 opções valem?", options: ["Sim", "Não", "Médio", "Sempre"] },
    ],
    faq: [
      {
        q: "As enquetes do Twitter são anônimas?",
        a: "As enquetes nativas não revelam a identidade do votante, mas a plataforma rastreia. O moomz é totalmente anônimo.",
      },
      {
        q: "Dá pra deletar uma enquete viral?",
        a: "Nativa: sim, a qualquer momento. moomz: sim, mas a URL fica morta e os visitantes veem um erro 404.",
      },
      {
        q: "O Twitter / X vai expandir as opções de enquete?",
        a: "Atualmente limitado a 4 opções e 7 dias. Não está claro se há expansão planejada. O moomz preenche essa lacuna.",
      },
      {
        q: "Melhor formato de legenda para enquetes moomz no Twitter?",
        a: "Pergunta + frase provocativa + link moomz. \"Abacaxi na pizza? Resolve aqui: moomz.com/x7k2j\"",
      },
    ],
    related: ["polls-tiktok-live-en-pt", "how-to-make-instagram-poll-pt"],
    updatedAt: today,
  },
];
