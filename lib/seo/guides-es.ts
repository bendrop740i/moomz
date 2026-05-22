import type { SeoPage } from "./types";

const today = "2026-05-19";

export const guidesEs: SeoPage[] = [
  {
    slug: "how-to-make-instagram-poll-es",
    locale: "es",
    category: "guides",
    emoji: "📸",
    title: "Cómo Hacer una Encuesta en Instagram (Más de 2 Opciones)",
    h1: "Cómo Hacer una Encuesta en Instagram: La Guía 2026",
    description:
      "Tutorial paso a paso para crear encuestas en Instagram + cómo superar el límite de 2 opciones con moomz. Gratis, anónimo, sin registro.",
    intro:
      "La encuesta nativa de Instagram te limita a 2 opciones, no es anónima y desaparece con la Story. Aquí tienes el tutorial completo para la encuesta nativa, más cómo pasarte a 3-6 opciones (y anonimato total) usando un enlace de moomz.",
    sections: [
      {
        h: "Paso 1: la encuesta nativa de Instagram (2 opciones)",
        body: "Abre Instagram. Crea una Story. Toca el icono de stickers (cuadrado con cara arriba). Busca \"Encuesta\". Escribe la pregunta (máx. 24 caracteres) y las 2 opciones (máx. 16 cada una). Coloca el sticker. Publica. Tus seguidores ven la encuesta, votan y ven el %.",
      },
      {
        h: "Paso 2: ver los resultados",
        body: "Abre tu Story. Desliza hacia arriba desde abajo. Verás quién votó qué. Las encuestas nativas NO son anónimas — ves la identidad de cada votante. La Story expira en 24h y la encuesta también.",
      },
      {
        h: "Paso 3: superar el límite de 2 opciones (con moomz)",
        body: "Para 3-6 opciones: crea tu encuesta en moomz.com (10 segundos), copia el enlace corto (5 caracteres). Crea una Story de Instagram, añade el sticker \"Enlace\", pega la URL de moomz. Tus seguidores tocan el sticker, el enlace se abre en el navegador integrado de IG, votan y vuelven a la Story.",
      },
      {
        h: "Paso 4: encuesta anónima",
        body: "¿Quieres anonimato DE VERDAD? El sticker nativo revela a los votantes. moomz nunca identifica a nadie. Crea la encuesta en moomz, compártela con el sticker de Enlace. Ningún seguidor sabrá quién votó qué. Ideal para votes sensibles (opiniones, debates, elecciones personales).",
      },
      {
        h: "Paso 5: encuesta duradera",
        body: "La encuesta de Instagram muere con la Story (24h). Las encuestas de moomz se mantienen activas indefinidamente. Vuelve a compartir el enlace en la Story de mañana para seguir acumulando votos. Ideal si quieres totales significativos a lo largo de 1-2 semanas.",
      },
    ],
    polls: [
      { q: "¿Stories a diario o nunca?", options: ["A diario", "Cuando me apetece", "Nunca"] },
      { q: "¿El sticker nativo es suficiente?", options: ["Sí", "Demasiado limitado", "Depende"] },
      { q: "¿Anonimato en los votos?", options: ["Importante", "Me da igual", "Depende"] },
    ],
    faq: [
      { q: "¿Cuántas opciones tiene una encuesta de Instagram?", a: "Nativa: 2. Con el sticker de enlace de moomz: de 2 a 6 opciones." },
      { q: "¿Las encuestas de Instagram son anónimas?", a: "No. Instagram te muestra quién votó qué. Para anonimato total, usa moomz." },
      { q: "¿Cuánto dura una encuesta de Instagram?", a: "La nativa muere con la Story (24h). Las encuestas de moomz se quedan activas indefinidamente." },
      { q: "¿Puedo compartir una encuesta fuera de Instagram?", a: "La nativa: no. Con moomz: sí — el enlace funciona en cualquier sitio (WhatsApp, Snap, email)." },
    ],
    related: ["how-to-make-anonymous-poll-es", "free-online-poll-maker-es", "how-to-share-poll-link-es"],
    updatedAt: today,
  },
  {
    slug: "how-to-make-anonymous-poll-es",
    locale: "es",
    category: "guides",
    emoji: "🕶️",
    title: "Cómo Crear una Encuesta Anónima (Realmente Anónima)",
    h1: "Cómo Crear una Encuesta 100% Anónima en 2026",
    description:
      "Todos los métodos para hacer una encuesta realmente anónima: Google Forms, Doodle, Strawpoll, moomz. Comparativa completa + tutorial paso a paso.",
    intro:
      "\"Anónima\" significa cosas distintas según la herramienta. Google Forms puede configurarse sin email pero rastrea cuentas. Doodle es nominativo. Strawpoll es anónimo pero anticuado. moomz es anónimo por defecto, sin registro. Aquí tienes la comparativa completa.",
    sections: [
      {
        h: "Por qué importa el anonimato",
        body: "El anonimato protege la sinceridad. En una encuesta de feedback de equipo, los juniors no votarán contra la opinión del jefe si se les identifica. En encuestas de pareja, la gente da respuestas \"políticamente correctas\" si saben que las ven. Es clave en temas sensibles (salud, opinión política, juicios de grupo).",
      },
      {
        h: "Google Forms anónimo: la verdad",
        body: "Forms puede desactivar la recogida de email (Configuración → Respuestas). Pero: (1) necesitas cuenta de Google para Forms internos de una organización, (2) Google registra la IP, (3) el administrador puede reactivar el rastreo. Anonimato parcial, no total.",
      },
      {
        h: "Doodle: no es anónimo",
        body: "Doodle es para organizar citas, por eso es nominativo por diseño. Ves quién eligió qué fecha. No es una herramienta de encuestas anónimas — es una herramienta de planificación.",
      },
      {
        h: "Strawpoll: anónimo pero anticuado",
        body: "El clásico de las encuestas anónimas. Pero: (1) interfaz envejecida, (2) sin Story moderna para compartir, (3) sin resultados animados en directo. El abuelo — funciona pero está desfasado.",
      },
      {
        h: "moomz: anónimo por defecto",
        body: "Diseñado para encuestas anónimas. Sin registro, sin email, sin nombre. Anti-doble-voto por cookie. Resultados animados en directo. Enlace corto de 5 caracteres, compartible en Insta, Snap, WhatsApp, Discord. Crea en 10 segundos, comparte el enlace, mira los resultados en vivo.",
      },
    ],
    polls: [
      { q: "¿Qué herramienta anónima prefieres?", options: ["Google Forms", "Strawpoll", "moomz", "Otra"] },
      { q: "¿Qué tan importante es el anonimato para ti?", options: ["Siempre", "Depende", "Me da igual"] },
    ],
    faq: [
      { q: "¿Google Forms es realmente anónimo?", a: "No del todo. Puedes desactivar la recogida de email, pero Google sigue registrando la IP. Para anonimato estricto, elige moomz o Strawpoll." },
      { q: "¿Strawpoll o moomz?", a: "Strawpoll funciona pero se siente viejo. moomz es más moderno, mejor para compartir en mobile." },
      { q: "¿Hay límite de votos en moomz?", a: "No. 4 votantes o 4.000, la experiencia es la misma." },
      { q: "¿Cómo evito que alguien vote dos veces?", a: "moomz bloquea los votos dobles por cookie. Una persona = un voto." },
    ],
    related: ["free-online-poll-maker-es", "strawpoll-alternative-es", "how-to-make-instagram-poll-es", "how-to-share-poll-link-es"],
    updatedAt: today,
  },
  {
    slug: "free-online-poll-maker-es",
    locale: "es",
    category: "guides",
    emoji: "💸",
    title: "Creador de Encuestas Online Gratis: Comparativa de los 6 Mejores (2026)",
    h1: "Creador de Encuestas Online Gratis: Comparativa 2026",
    description:
      "Compara las 6 mejores herramientas de encuestas gratis: Google Forms, Strawpoll, Doodle, Typeform, Mentimeter, moomz.",
    intro:
      "Crear una encuesta gratis en 2026 es posible, pero cada herramienta tiene sus límites. Google Forms es potente pero no es estrictamente anónimo. Doodle es para citas. Typeform limita las respuestas. moomz es gratis, anónimo e ilimitado. Aquí va el desglose.",
    sections: [
      {
        h: "Google Forms",
        body: "Gratis, integrado con Workspace. Potente para formularios largos. Límites: pesado para encuestas rápidas, requiere cuenta de Google para crearlo, anonimato parcial, sin compartir mobile-first. Ideal para encuestas formales con múltiples campos.",
      },
      {
        h: "Strawpoll",
        body: "Gratis, anónimo, simple. Límites: interfaz anticuada, sin resultados animados, poca adaptación a mobile y Stories. El abuelo de las encuestas rápidas. Funciona, pero ya no brilla.",
      },
      {
        h: "Doodle",
        body: "Gratis para encuestas de disponibilidad. Límites: hecho para elegir fechas, no para opiniones. Nominativo por diseño. Perfecto para organizar reuniones, mala elección para encuestas de opinión.",
      },
      {
        h: "Typeform",
        body: "Bonito y mobile-friendly. Pero: 10 respuestas/mes gratis, planes de pago a partir de 25€/mes. Ideal para formularios complejos (NPS, feedback de clientes), demasiado pesado para una encuesta rápida.",
      },
      {
        h: "Mentimeter",
        body: "Excelente para presentaciones en directo (formación, conferencias). Límites: 2 encuestas máx. por presentación en el plan gratuito, no pensado para redes sociales. La opción para formaciones, no para Insta.",
      },
      {
        h: "moomz",
        body: "Gratis, anónimo, sin límite de respuestas, compartir mobile-first, resultados animados en vivo. Diseñado para encuestas rápidas y Stories. Límites: máx. 6 opciones, solo un campo por encuesta. Ideal para: Insta, Snap, TikTok, WhatsApp, fiestas, debates.",
      },
    ],
    polls: [
      { q: "¿Qué herramienta usas?", options: ["Google Forms", "Strawpoll", "Doodle", "moomz"] },
      { q: "¿Qué es lo más importante para ti?", options: ["Anonimato", "Diseño", "Límite gratis", "Fácil de compartir"] },
    ],
    faq: [
      { q: "¿Cuál es la herramienta de encuestas gratis más sencilla?", a: "moomz para encuestas rápidas y compartir en mobile. Strawpoll como alternativa. Google Forms para formularios más largos." },
      { q: "¿moomz es realmente gratis?", a: "Sí — respuestas ilimitadas, sin anuncios, sin premium obligatorio." },
      { q: "¿La mejor herramienta anónima?", a: "moomz por defecto. Strawpoll como segunda opción. Google Forms es parcialmente anónimo." },
      { q: "¿La mejor para elegir fecha?", a: "Doodle sigue siendo lo mejor para eso. moomz es para encuestas de opinión o decisión." },
    ],
    related: ["strawpoll-alternative-es", "how-to-make-anonymous-poll-es", "how-to-make-instagram-poll-es", "how-to-share-poll-link-es"],
    updatedAt: today,
  },
  {
    slug: "strawpoll-alternative-es",
    locale: "es",
    category: "guides",
    emoji: "🆕",
    title: "Alternativa a Strawpoll: 3 Herramientas Modernas en 2026",
    h1: "Alternativa a Strawpoll: 3 Opciones Modernas (Incluyendo una Nueva)",
    description:
      "Strawpoll está envejeciendo. Aquí van 3 alternativas modernas: moomz, Polldaddy, Mentimeter. Comparativa y tutorial.",
    intro:
      "Strawpoll inventó las encuestas anónimas rápidas. Pero la interfaz no ha evolucionado desde 2010, el mobile es pésimo y la experiencia de voto se siente obsoleta. Aquí van 3 alternativas modernas: moomz, Polldaddy, Mentimeter. Cada una gana en un caso de uso diferente.",
    sections: [
      {
        h: "Por qué cambiar de Strawpoll",
        body: "Funciona, pero: (1) diseño anticuado, (2) compartir en Stories/TikTok es horrible, (3) resultados estáticos, (4) URL larga. En 2026 la gente espera algo moderno, mobile-first, con resultados animados en vivo.",
      },
      {
        h: "moomz: la alternativa moderna",
        body: "Creado en 2025 para cubrir el hueco de Strawpoll: diseño glassmorphism, resultados animados en vivo, URL corta de 5 caracteres, mobile-first, anónimo por defecto, sin registro. Compatible con Insta, Snap, TikTok, WhatsApp.",
      },
      {
        h: "Polldaddy / Crowdsignal: alternativa pro",
        body: "Polldaddy (ahora Crowdsignal) es la opción pro. Funciones chulas (logos, branding, exportar a Excel), pero de pago a partir de 200 respuestas/mes. Si haces encuestas de marketing con branding corporativo, está bien. Para una encuesta rápida con amigos, es matar moscas a cañonazos.",
      },
      {
        h: "Mentimeter: alternativa para presentaciones",
        body: "Brillante para presentaciones en directo (formación, conferencias). Proyectas un QR code, el público vota desde el móvil, los resultados se muestran en vivo. Límite: no está pensado para compartir en Stories.",
      },
      {
        h: "Qué herramienta usar en cada caso",
        body: "Story / TikTok / encuestas de fiesta: moomz. Encuestas corporativas con branding: Polldaddy. Encuestas en presentación en vivo: Mentimeter. Formularios complejos con varios campos: Typeform o Google Forms.",
      },
    ],
    polls: [
      { q: "¿Por qué dejas Strawpoll?", options: ["Muy anticuado", "Mal en mobile", "URL larga", "No lo dejo"] },
      { q: "¿Alternativa preferida?", options: ["moomz", "Polldaddy", "Mentimeter", "Me quedo en Strawpoll"] },
    ],
    faq: [
      { q: "¿moomz es realmente gratis?", a: "Sí — gratis, votos ilimitados, sin anuncios, sin premium obligatorio." },
      { q: "¿Por qué cambiar de Strawpoll?", a: "Interfaz obsoleta, mobile pésimo, sin compartir social moderno. Para encuestas rápidas en Stories, las alternativas son mejores." },
      { q: "¿Puedo importar mis Strawpolls antiguos?", a: "No — no hay vía de importación. Empieza de cero, es rápido (10 seg por encuesta)." },
      { q: "¿moomz recopila mis datos?", a: "Ningún dato personal. Sin registro, sin email, sin rastreo. Compatible con el RGPD por diseño." },
    ],
    related: ["free-online-poll-maker-es", "how-to-make-anonymous-poll-es", "how-to-make-instagram-poll-es", "how-to-share-poll-link-es"],
    updatedAt: today,
  },
  {
    slug: "how-to-share-poll-link-es",
    locale: "es",
    category: "guides",
    emoji: "🔗",
    title: "Cómo Compartir un Enlace de Encuesta en Cualquier Sitio (Insta, Snap, WhatsApp, Discord)",
    h1: "Cómo Compartir un Enlace de Encuesta en Todas las Plataformas",
    description:
      "Tutorial para compartir un enlace de encuesta en Instagram Story, Snap, WhatsApp, Discord, TikTok y Telegram. Con previsualizaciones enriquecidas.",
    intro:
      "Una encuesta solo sirve si la gente vota. Compartir el enlace bien es la mitad de la batalla. Aquí tienes el método exacto para compartir una encuesta de moomz en Instagram Story, Snap Story, WhatsApp, Discord, TikTok bio y Telegram — con previsualizaciones enriquecidas en cada plataforma.",
    sections: [
      {
        h: "Instagram Story",
        body: "Crea la encuesta en moomz, copia el enlace. Crea una Story (foto, texto o vídeo). Toca los stickers, busca \"Enlace\". Pega la URL de moomz. Personaliza el texto del sticker (\"vota aquí\"). Colócalo en la Story y publica. Los seguidores tocan, votan en el navegador integrado de IG y vuelven.",
      },
      {
        h: "Snapchat Story",
        body: "Crea un Snap (foto o texto). Toca el icono del clip (barra de herramientas derecha). Pega la URL de moomz. Personaliza el texto del botón. Envía a tu Story. Los amigos ven un botón \"Ver más\" — lo tocan, votan y vuelven.",
      },
      {
        h: "WhatsApp",
        body: "Abre WhatsApp (grupo o contacto). Pega el enlace de moomz en el chat. WhatsApp muestra una previsualización enriquecida: título de la encuesta, opciones, botón de voto. Los destinatarios tocan, votan en su navegador y vuelven al chat.",
      },
      {
        h: "Discord",
        body: "Pega en cualquier canal o DM. Discord muestra un embed enriquecido: título de la encuesta, opciones, vista previa de imagen. Los miembros hacen clic, votan y vuelven a Discord.",
      },
      {
        h: "TikTok bio (o pie de vídeo)",
        body: "Pega la URL de moomz en el campo de tu bio (Perfil → Editar perfil → Sitio web). Aparece como enlace clicable. Haz referencia en tu vídeo (\"vota en la bio\"). Los pies de vídeo no admiten enlaces clicables en cuentas personales.",
      },
      {
        h: "Telegram",
        body: "Pega en cualquier chat o canal. Telegram muestra una vista previa enriquecida. Los miembros tocan, votan y vuelven.",
      },
    ],
    polls: [
      { q: "¿Mejor plataforma para compartir encuestas?", options: ["Instagram", "TikTok", "WhatsApp", "Discord"] },
      { q: "¿Usas el sticker de enlace en Insta?", options: ["Siempre", "A veces", "Nunca"] },
    ],
    faq: [
      { q: "¿El enlace de moomz funciona en todos lados?", a: "Sí — sticker de enlace de Instagram, clip de Snap, chat de WhatsApp/Discord/Telegram con vista previa, email, SMS." },
      { q: "¿Abre la app o el navegador?", a: "En Insta/Snap/Discord, el enlace se abre en el navegador integrado de la app. En WhatsApp/Telegram, en el navegador del sistema. Misma experiencia en todos." },
      { q: "¿Puedo saber quién hizo clic?", a: "No — moomz no rastrea clics individuales por privacidad. Ves el total de votos, no quién votó." },
      { q: "¿Cómo de corto es el enlace?", a: "5 caracteres después de moomz.com/ (ej. moomz.com/abcde). Total: 13 caracteres." },
    ],
    related: ["how-to-make-instagram-poll-es", "how-to-make-anonymous-poll-es", "free-online-poll-maker-es", "strawpoll-alternative-es"],
    updatedAt: today,
  },
  {
    slug: "icebreaker-poll-questions-es",
    locale: "es",
    category: "guides",
    emoji: "🧊",
    title: "Preguntas de Encuesta para Romper el Hielo — Cuándo y Cómo Usarlas",
    h1: "Encuestas para Romper el Hielo: Cuándo y Cómo Usarlas",
    description:
      "Guía completa de encuestas para romper el hielo — cuándo funcionan, qué preguntar y cómo introducirlas en reuniones, citas, clases y grupos nuevos.",
    intro:
      "Las encuestas para romper el hielo son la forma más rápida de conseguir que una sala en silencio empiece a hablar. Pero la pregunta equivocada mata el ambiente más rápido que ninguna pregunta. Aquí va la guía completa: cuándo usarlas, qué preguntar y cómo introducirlas.",
    sections: [
      {
        h: "Cuándo funcionan (y cuándo no)",
        body: "Funcionan: al inicio de una reunión, en una primera cita, con un equipo nuevo, en la presentación de clase, con grupos de personas que no se conocen. No funcionan: al final de una sesión larga, tras un conflicto, con personas que ya se conocen muy bien. Elige el momento adecuado.",
      },
      {
        h: "Cómo introducir una encuesta rompehielos",
        body: "Mal: \"vamos a hacer una actividad para romper el hielo.\" Suena corporativo y mata el rollo. Bien: \"tengo esta app curiosa, probemos algo rápido.\" \"¿Rompemos el hielo? Vota en esto.\" Preséntalo como juego, no como ejercicio.",
      },
      {
        h: "Qué preguntar: 3 niveles",
        body: "Nivel 1 (seguro): café o té, playa o montaña, plan de fin de semana. Nivel 2 (revelador): comida reconfortante, ciudad soñada, superpoder. Nivel 3 (profundo): mayor miedo, mayor logro del año. Empieza en el nivel 1 y ve subiendo.",
      },
      {
        h: "Cuántas encuestas por sesión",
        body: "Reunión: 1-2 al principio. Primera cita: 3-5 repartidas a lo largo de la noche. Clase: 1 por sesión, semanal. No bombardees a la gente — que sea natural.",
      },
      {
        h: "La hora del día importa",
        body: "Rompehielos matutino = subidón de energía (\"¿cómo llegaste hoy?\"). Rompehielos vespertino = reflexión (\"¿mejor momento del día?\"). En medio de una reunión = pausa de aire fresco. Adapta el rompehielos a la energía que quieres generar.",
      },
    ],
    polls: [
      { q: "¿Cómo llegas hoy?", options: ["🔥 Con todo", "😊 Bien", "😐 Regular", "😴 Sin vida"] },
      { q: "¿Mejor momento de tu día?", options: ["Mañana", "Mediodía", "Tarde", "Noche"] },
      { q: "¿Café o té?", options: ["Café", "Té", "Matcha", "Ninguno"] },
      { q: "¿Plan de fin de semana ideal?", options: ["Aventura", "Relax", "Social", "Solo"] },
    ],
    faq: [
      { q: "¿No son los rompehielos algo forzado?", a: "Solo cuando se imponen. Un casual \"votemos esta pregunta tonta\" funciona. \"Actividad de team building obligatoria\" no." },
      { q: "¿Y si nadie vota?", a: "Elige preguntas más fáciles. O elimina la presión social con el anonimato (moomz es anónimo por defecto)." },
      { q: "¿Para reuniones online?", a: "Pega el enlace en el chat al inicio. La gente vota durante la presentación. La energía sube cuando aparecen los resultados." },
      { q: "¿Cuántas personas son ideales para un rompehielos?", a: "Entre 4 y 30 es lo ideal. Menos de 4: se siente forzado. Más de 30: demasiado impersonal." },
    ],
    related: [],
    updatedAt: today,
  },
  {
    slug: "share-poll-whatsapp-discord-slack-en-es",
    locale: "es",
    category: "guides",
    emoji: "🔗",
    title: "Cómo Compartir una Encuesta de moomz en WhatsApp, Discord y Slack",
    h1: "Comparte una Encuesta de moomz en WhatsApp, Discord, Slack — Paso a Paso",
    description:
      "Guía paso a paso para compartir una encuesta de moomz en WhatsApp, Discord y Slack. Con previsualizaciones de enlace, integración en hilos y consejos de notificaciones.",
    intro:
      "Una vez creada tu encuesta de moomz, la URL funciona en cualquier app de chat. Pero cada plataforma tiene sus particularidades. Aquí va la manera óptima de compartir encuestas de moomz en WhatsApp, Discord y Slack — incluyendo previsualizaciones, anclaje de mensajes y etiqueta de notificaciones.",
    sections: [
      {
        h: "WhatsApp: pega el enlace y obtén una previsualización enriquecida",
        body: "Pega la URL de moomz en cualquier chat de WhatsApp. WhatsApp genera automáticamente una tarjeta de vista previa con la pregunta, el emoji y el número de opciones. Esa vista previa hace el mensaje más atractivo. En grupos, envía el enlace con una línea introductoria: \"Vota pizza o sushi esta noche\". Ancla el mensaje en la info del chat para encuestas que duran varios días. WhatsApp nativo tiene un límite de 12 opciones; moomz cubre el hueco para sets de elecciones más amplios.",
      },
      {
        h: "Discord: embed en canales con vista previa enriquecida",
        body: "En Discord, pega el enlace de moomz en cualquier canal. El embed de Discord se despliega con la vista previa de la encuesta. Para canales de voz, comparte el enlace en el chat lateral — los votantes hacen clic y votan entre partidas. Para comunidades de Discord, crea un canal #encuestas y usa moomz para las decisiones de la comunidad. La encuesta nativa de Discord está limitada a un servidor; las de moomz viajan entre servidores vía URL.",
      },
      {
        h: "Slack: funciona en cualquier canal o DM",
        body: "Slack despliega automáticamente las URLs de moomz como tarjeta de vista previa con la pregunta y las opciones. Para decisiones de equipo, publica en el canal relevante con un plazo claro (\"Vota antes del viernes a las 17h\"). Para encuestas de toda la empresa, ancla en #general. Los bots como Polly compiten aquí, pero moomz gana para votos anónimos donde no se quiere rastrear identidades.",
      },
      {
        h: "Buenas prácticas multiplataforma",
        body: "Misma encuesta, varias plataformas: pega la URL de moomz en WhatsApp, Discord, Slack y Telegram a la vez para máximo alcance. La URL funciona en todos lados porque moomz es web-based. Para audiencias de creadores, enlaza desde la bio de Instagram + bio de TikTok + tweet fijado de Twitter a la misma encuesta. El funnel multiplataforma converge en una sola página de resultados. Algunos creadores reportan 5x más votos así vs un solo canal.",
      },
    ],
    polls: [
      { q: "¿Mejor plataforma para compartir encuestas?", options: ["WhatsApp", "Discord", "Slack", "Telegram"] },
      { q: "¿Importa la vista previa automática?", options: ["Sí", "No", "Regular", "Siempre"] },
      { q: "¿Anclas la encuesta en el chat?", options: ["Siempre", "A veces", "Nunca", "Solo las importantes"] },
      { q: "¿Incluyes fecha límite en el mensaje?", options: ["Sí", "No", "Regular", "Crucial"] },
      { q: "¿Mejor función de moomz en chats?", options: ["Anónimo", "Resultados en vivo", "URL corta", "Sin registro"] },
      { q: "¿Compartes en varias plataformas a la vez?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Encuesta nativa vs moomz?", options: ["moomz", "Nativa", "Mezcla", "Nativa + moomz"] },
    ],
    faq: [
      {
        q: "¿WhatsApp muestra los resultados en la vista previa?",
        a: "Muestra la pregunta y el número de opciones. Para resultados en vivo, los destinatarios hacen clic en el enlace.",
      },
      {
        q: "¿Puedo anclar una encuesta de moomz en Discord?",
        a: "Sí — ancla cualquier mensaje incluyendo los que tienen URLs de encuesta. El mensaje anclado muestra el embed.",
      },
      {
        q: "¿Mi workspace de Slack bloquea los enlaces externos?",
        a: "Algunos workspaces restringen la vista previa. moomz sigue funcionando — la URL es clicable, solo sin previsualización.",
      },
      {
        q: "¿Puedo compartir la misma encuesta en varias plataformas?",
        a: "Sí — una URL de moomz funciona en todas las plataformas. Todos los votos se acumulan en una sola página de resultados.",
      },
    ],
    related: ["poll-viral-twitter-x-en-es", "how-to-share-poll-link-es"],
    updatedAt: today,
  },
  {
    slug: "embed-poll-blog-notion-en-es",
    locale: "es",
    category: "guides",
    emoji: "📝",
    title: "Cómo Insertar una Encuesta de moomz en tu Blog o Página de Notion",
    h1: "Inserta una Encuesta de moomz en un Post de Blog o en Notion",
    description:
      "Paso a paso: inserta una encuesta de moomz en WordPress, Notion, Ghost o cualquier blog. Opciones de iframe y enlace.",
    intro:
      "Las encuestas insertadas aumentan la interacción con los artículos hasta un 60%. Aquí tienes cómo insertar una encuesta de moomz en un post de blog, una página de Notion, un sitio de Ghost o cualquier plataforma que admita HTML o iframes.",
    sections: [
      {
        h: "En Notion: pega la URL",
        body: "Notion convierte automáticamente las URLs en tarjetas embed. Pega tu URL de moomz en una página de Notion y haz clic en \"Crear embed\" cuando se te pida. La encuesta aparece como una tarjeta interactiva. Los lectores votan sin salir de la página de Notion. Funciona en documentos compartidos, sitios públicos de Notion y wikis publicados en Notion. La encuesta se actualiza en vivo a medida que llegan los votos.",
      },
      {
        h: "En WordPress: shortcode o iframe",
        body: "WordPress admite iframes a través del bloque HTML. Pega el código iframe de moomz (disponible en el menú de compartir de la encuesta) en el bloque HTML. La encuesta se muestra integrada. Alternativa: los usuarios de WordPress en versiones autohospedadas pueden instalar el plugin de moomz (cuando esté disponible) para incrustar con shortcode nativo. Para temas sin soporte iframe, usa el bloque de enlace con vista previa.",
      },
      {
        h: "En Ghost, Substack, Medium",
        body: "Ghost y Substack aceptan iframes a través de sus bloques de embed HTML. Medium no permite iframes — en Medium, pega la URL de moomz como enlace normal; Medium crea una vista previa enriquecida. El lector hace clic para votar en moomz y vuelve a tu artículo. Menos integrado que el iframe, pero funciona en plataformas más restrictivas.",
      },
      {
        h: "Buenas prácticas para encuestas insertadas",
        body: "Coloca las encuestas entre el 60-70% del artículo (tras el argumento principal, antes de la conclusión). Es el momento natural de reflexión. Usa encuestas de 2-3 opciones para máxima interacción. Incluye siempre un enlace de respaldo a la encuesta de moomz por si el iframe falla en algún lector. Identifica qué artículos generan más votos — ese es tu template de contenido de alta interacción.",
      },
    ],
    polls: [
      { q: "¿Mejor plataforma para encuestas insertadas?", options: ["Notion", "WordPress", "Ghost", "Medium"] },
      { q: "¿Iframe o enlace?", options: ["Iframe", "Enlace", "Ambos", "Mezcla"] },
      { q: "¿Mejor posición en el artículo?", options: ["Inicio", "Mitad", "60-70%", "Final"] },
      { q: "¿Las encuestas insertadas aumentan la interacción?", options: ["Sí", "No", "Regular", "Mucho"] },
      { q: "¿2 o 4 opciones?", options: ["2", "3", "4", "Mezcla"] },
      { q: "¿Rastreas qué artículos generan más votos?", options: ["Sí", "No", "A veces", "Clave"] },
      { q: "¿Encuesta insertada o enlace compartido?", options: ["Insertada", "Enlace", "Ambos", "Depende"] },
    ],
    faq: [
      {
        q: "¿El iframe ralentiza mi página?",
        a: "Levemente — los iframes de moomz se cargan de forma diferida. Los blogs modernos los gestionan bien.",
      },
      {
        q: "¿Puedo personalizar el estilo del iframe?",
        a: "Personalización limitada. Color de fondo y bordes redondeados ajustables. Tematización completa en el plan premium.",
      },
      {
        q: "¿Las encuestas insertadas son anónimas?",
        a: "Sí — mismo anonimato que la encuesta independiente. Los votos son anónimos para los lectores de tu blog.",
      },
      {
        q: "¿Puedo rastrear los votos desde mi blog por separado?",
        a: "Aún no — los votos se acumulan en un solo resultado. El rastreo por UTM llega al plan premium próximamente.",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-es", "how-to-share-poll-link-es", "free-online-poll-maker-es"],
    updatedAt: today,
  },
  {
    slug: "read-poll-results-without-bias-en-es",
    locale: "es",
    category: "guides",
    emoji: "🔍",
    title: "Cómo Leer los Resultados de una Encuesta sin Sesgos",
    h1: "Lee los Resultados de una Encuesta sin Sesgos: Guía Práctica",
    description:
      "Cómo leer resultados de encuestas sin sesgos. Tamaño de muestra, sesgo de selección, momento del voto y cómo evitar el sesgo de confirmación.",
    intro:
      "Los resultados de las encuestas te engañan si los lees mal. El tamaño de la muestra, el sesgo de selección, el momento del voto y el sesgo de confirmación distorsionan todo. Aquí te explicamos cómo leer los resultados de una encuesta de moomz (o de cualquier herramienta) con escepticismo calibrado.",
    sections: [
      {
        h: "Tamaño de muestra: cuántos votos son suficientes",
        body: "Con menos de 30 votos, los resultados son ruido. Entre 30 y 100 votos hay una señal direccional. Entre 100 y 500 votos son estadísticamente relevantes para preguntas binarias. Con 500+ votos los resultados son sólidos. moomz muestra el total de votos de forma prominente — revísalo antes de sacar conclusiones. Una mayoría del 70% con 20 votos no significa nada; con 500 votos, sí es real.",
      },
      {
        h: "Sesgo de selección: quién votó realmente",
        body: "Si tu encuesta está en un grupo de 10 amigos, los resultados reflejan a tus amigos, no al mundo. Si la publicaste en Instagram, reflejan a tus seguidores, filtrados por tu estética y posicionamiento. Para una lectura honesta, pregúntate: ¿quién es esta audiencia, qué creen ya, quién se habría saltado el voto? La respuesta ajusta el resultado. Las encuestas de moomz publicadas en apps de citas reflejarán la visión del mundo de los usuarios de apps de citas.",
      },
      {
        h: "Momento del voto: los primeros 30 minutos mienten",
        body: "Los primeros 30 minutos de votación suelen mostrar una distorsión extrema porque los primeros votantes son normalmente tus seguidores más implicados (que coinciden con tu enfoque). Espera 24 horas antes de sacar conclusiones. Los resultados en vivo de moomz muestran el estado actual; deja que la curva se estabilice antes de leer el veredicto. Los resultados finales de 24-48 horas son más representativos.",
      },
      {
        h: "Sesgo de confirmación: ¿estás leyendo lo que quieres?",
        body: "Si esperabas que ganara X y X ganó, sé crítico. ¿Formulaste la pregunta a favor de X? ¿La compartiste donde se concentran los partidarios de X? Lee los resultados como si quisieras que ganara Y. La verificación de sesgos suele revelar problemas en el diseño de la encuesta. Buena práctica: pide a alguien que no comparta tu opinión que lea los mismos resultados — su interpretación revelará tus puntos ciegos.",
      },
    ],
    polls: [
      { q: "¿Mínimo de votos para un resultado válido?", options: ["10", "30", "100", "500"] },
      { q: "¿Cuánto esperas para leer el resultado?", options: ["1h", "24h", "48h", "1 semana"] },
      { q: "¿El sesgo de selección es real?", options: ["Sí", "No", "Regular", "Clave"] },
      { q: "¿El sesgo de confirmación es real?", options: ["Sí", "No", "Regular", "Siempre"] },
      { q: "¿Buena práctica: que otra persona lo lea?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Te fías de encuestas en chats de amigos?", options: ["Sí", "No", "Limitado", "Escéptico"] },
      { q: "¿Te fías de encuestas en redes sociales?", options: ["Sí", "No", "Regular", "Menos"] },
      { q: "¿Compruebas el número de votos primero?", options: ["Siempre", "A veces", "Nunca", "Debería"] },
    ],
    faq: [
      {
        q: "¿Por qué los primeros resultados son engañosos?",
        a: "Los primeros votantes son tu audiencia más implicada, sesgada hacia tu enfoque. Espera 24h para equilibrarlo.",
      },
      {
        q: "¿Es significativa una diferencia 60/40?",
        a: "Depende del tamaño de muestra. Con 30 votos, no. Con 500, sí — es una clara preferencia mayoritaria.",
      },
      {
        q: "¿Cómo reduzco el sesgo de selección?",
        a: "Comparte la encuesta fuera de tu círculo habitual. El reparto multiplataforma ayuda. Las encuestas solo en el chat de amigos tienen sesgo.",
      },
      {
        q: "¿Las encuestas anónimas son más honestas?",
        a: "En general, sí. El voto identificado suprime las opiniones minoritarias.",
      },
    ],
    related: ["anonymous-vs-identified-poll-en-es"],
    updatedAt: today,
  },
  {
    slug: "write-poll-question-people-answer-en-es",
    locale: "es",
    category: "guides",
    emoji: "✍️",
    title: "Cómo Escribir una Pregunta de Encuesta que la Gente Responda",
    h1: "Escribe una Pregunta de Encuesta que Consiga Votos: Guía Palabra a Palabra",
    description:
      "Cómo escribir una pregunta de encuesta que la gente responda. Longitud, formulación, especificidad y patrones de gancho emocional.",
    intro:
      "La diferencia entre un 5% y un 35% de tasa de participación está en la propia pregunta. Corta, concreta, en segunda persona, ligeramente emocional. Aquí va la guía palabra a palabra para escribir preguntas de encuesta que consigan votos.",
    sections: [
      {
        h: "Longitud: máximo 12 palabras",
        body: "Las preguntas de menos de 12 palabras consiguen un 60% más de votos que las más largas. Los votantes hacen scroll rápido; no analizan frases largas. \"¿Pizza o sushi esta noche?\" le gana a \"¿Qué opción de cena preferiría todo el grupo esta noche dado el tiempo que hace?\". Corta todo lo que no sea esencial. Usa sustantivos concretos. Omite artículos donde puedas.",
      },
      {
        h: "Formulación: segunda persona directa",
        body: "\"¿Tú enviarías este mensaje?\" supera a \"¿Debería enviarse este mensaje?\" por 3x. Dirige al votante directamente. Usa \"tú\" o el imperativo. Para dilemas dramáticos: \"¿Tú qué harías?\" le gana a \"¿Qué haría alguien?\". La interpelación directa activa la identidad del votante, lo que impulsa el compromiso de votar.",
      },
      {
        h: "Especificidad: nombra la cosa de forma concreta",
        body: "\"¿Pizza o sushi?\" le gana a \"¿Opciones de cena?\". Concreto > abstracto. Los nombres de marcas, lugares o personas añaden especificidad que dispara la interacción (con buen gusto). \"¿Le envío este DM de Insta?\" necesita el contexto del DM — las encuestas vagas pierden. Las encuestas de moomz funcionan mejor cuando la pregunta es tan concreta que el votante puede tocar sin releer.",
      },
      {
        h: "Gancho emocional: los stakes suben la tasa de voto",
        body: "Añade un poco de tensión. \"¿Pizza o sushi esta noche (nos morimos de hambre)\" supera a \"¿Pizza o sushi esta noche?\" en un 30%. Los stakes activan la empatía. El drama, el FOMO y la urgencia decisional impulsan la interacción. No lo cocines demasiado — la manipulación emocional se detecta. Usa stakes que encajen con la situación real.",
      },
    ],
    polls: [
      { q: "¿Longitud ideal de pregunta?", options: ["Menos de 8 palabras", "8-12 palabras", "12-20", "20+"] },
      { q: "¿La segunda persona es mejor?", options: ["Sí", "No", "Regular", "Siempre"] },
      { q: "¿Concreto vs abstracto?", options: ["Concreto", "Abstracto", "Mezcla", "Depende"] },
      { q: "¿Los ganchos emocionales funcionan?", options: ["Sí", "No", "A veces", "Riesgo de exceso"] },
      { q: "¿Stakes en la pregunta?", options: ["Siempre", "A veces", "Nunca", "Solo si son reales"] },
      { q: "¿Mejor emoción para enganchar?", options: ["Urgencia", "Drama", "FOMO", "Empatía"] },
      { q: "¿Recortar artículos para acortar?", options: ["Sí", "No", "A veces", "Solo las cortas"] },
      { q: "¿Reformular encuestas vagas?", options: ["Siempre", "A veces", "Nunca", "Si hay feedback"] },
    ],
    faq: [
      {
        q: "¿Debo incluir emojis en la pregunta?",
        a: "Con moderación — un emoji puede aumentar la interacción. Más de 2 parece spam.",
      },
      {
        q: "¿Mayúsculas en las preguntas?",
        a: "En general, no. Una palabra en mayúsculas para énfasis está bien. Todo en mayúsculas parece que estás gritando.",
      },
      {
        q: "¿Preguntas que terminan con \"¿verdad?\" o \"¿no?\"",
        a: "Evita la formulación tendenciosa. \"¿Pizza esta noche, verdad?\" sesga el resultado. Mantente neutral.",
      },
      {
        q: "¿Puedo reformular una encuesta con poca participación?",
        a: "Sí — vuelve a lanzarla con la nueva pregunta. La primera encuesta se diluye; la nueva capta votos frescos.",
      },
    ],
    related: ["max-poll-options-2-4-6-en-es"],
    updatedAt: today,
  },
  {
    slug: "max-poll-options-2-4-6-en-es",
    locale: "es",
    category: "guides",
    emoji: "🔢",
    title: "Número Máximo de Opciones en una Encuesta — 2, 4 o 6 — Cuándo Usar Cada Uno",
    h1: "Guía de Opciones en Encuestas: Cuándo Ganan 2, 3, 4 o 6 Opciones",
    description:
      "Guía sobre el número máximo de opciones en una encuesta. Cuándo usar 2, 3, 4 o 6 opciones. Datos de interacción, casos de uso y reglas de decisión.",
    intro:
      "Las encuestas de moomz admiten de 2 a 6 opciones. La mayoría pone 4 por defecto. Los datos dicen que el predeterminado suele ser incorrecto. Aquí va la guía caso por caso para elegir el número correcto de opciones.",
    sections: [
      {
        h: "2 opciones: contextos de scroll-and-vote",
        body: "Usa 2 opciones para Instagram Stories, enlaces de bio de TikTok y cualquier contexto donde los votantes hacen scroll rápido. El binario minimiza la carga cognitiva. Funciona para: this-or-that estético, hot takes, dilemas dramáticos, decisiones simples. Evita 2 opciones para: decisiones genuinamente multi-alternativa, rankings de gustos, encuestas de predicción con varios resultados plausibles.",
      },
      {
        h: "3 opciones: opiniones matizadas",
        body: "3 opciones funcionan cuando hay un término medio significativo o una respuesta de \"depende\". Los patrones \"Sí / No / Depende\" dominan las encuestas Gen Z. \"Quédate / Vete / Espera\" para encuestas de pareja. La tercera opción absorbe a los votantes que se habrían saltado la encuesta porque ninguno de los binarios les encajaba. 3 opciones es el punto dulce para encuestas de opinión.",
      },
      {
        h: "4 opciones: elecciones estructuradas",
        body: "4 opciones brillan para: votaciones al mejor-de-X (\"álbum del año\"), votos de tier list (\"¿S/A/B/C?\"), franjas horarias (\"mañana/tarde/noche/madrugada\"), selección de género. 4 opciones manejan bien el patrón de \"cuatro direcciones\" (elecciones categóricas tipo brújula). La interacción es buena pero no máxima — menos opciones perderían información; más perderían votantes.",
      },
      {
        h: "6 opciones: votaciones exhaustivas",
        body: "6 opciones funcionan para: álbum del año con 6 nominados, tier lists completas (S/A/B/C/D/F), selección de género completa. Ideal para encuestas de power-users en contextos fandom donde los votantes están muy implicados. La tasa de voto es la más baja (relativa a las encuestas de 2 opciones) pero la calidad de la interacción es la más alta — los votantes que completan una encuesta de 6 opciones están totalmente comprometidos. moomz tiene un máximo de 6.",
      },
    ],
    polls: [
      { q: "¿Número de opciones por defecto?", options: ["2", "3", "4", "6"] },
      { q: "¿Mejor para Insta Story?", options: ["2", "3", "4", "6"] },
      { q: "¿Mejor para predicciones?", options: ["3", "4", "6", "Mezcla"] },
      { q: "¿Mejor para álbum del año?", options: ["4", "6", "10+", "Mezcla"] },
      { q: "¿Mejor para encuestas de pareja?", options: ["2", "3", "4", "Mezcla"] },
      { q: "¿Mejor para tier lists?", options: ["4", "6", "8+", "Mezcla"] },
      { q: "¿Te saltas encuestas con más de 6 opciones?", options: ["Sí", "No", "A veces", "Solo las malas"] },
      { q: "¿moomz debería permitir 8+ opciones pronto?", options: ["Sí por favor", "Quédate en 6", "Regular", "Me da igual"] },
    ],
    faq: [
      {
        q: "¿Qué hago si tengo 7 opciones?",
        a: "Reduce combinando (\"X o Y\" como una opción) o elimina la más débil. 6 es el máximo de moomz por razones cognitivas.",
      },
      {
        q: "¿Puedo añadir opciones después de lanzar la encuesta?",
        a: "Actualmente no — las encuestas de moomz tienen opciones fijas una vez creadas. Vuelve a crear la encuesta si necesitas ampliarla.",
      },
      {
        q: "¿Se permitirán más opciones algún día?",
        a: "Posiblemente en el plan premium en 2026. Los datos desaconsejan ampliar por razones de interacción.",
      },
      {
        q: "¿Las encuestas de 4 opciones son siempre tier lists?",
        a: "No — 4 opciones funcionan en muchos casos. No todas las encuestas de 4 opciones son tier lists.",
      },
    ],
    related: ["write-poll-question-people-answer-en-es"],
    updatedAt: today,
  },
  {
    slug: "anonymous-vs-identified-poll-en-es",
    locale: "es",
    category: "guides",
    emoji: "🎭",
    title: "Encuestas Anónimas vs Identificadas — Cuándo Gana el Anonimato",
    h1: "Encuestas Anónimas vs Identificadas: Cuándo Usar Cada Una",
    description:
      "Cuándo usar encuestas anónimas frente a identificadas. Casos de uso para cada formato, datos de precisión y análisis de dinámicas sociales.",
    intro:
      "Las encuestas de Instagram son identificadas. Las de moomz son anónimas. ¿Cuándo gana cada formato? Aquí va el conjunto de reglas para elegir el formato correcto según el caso de uso, la sensibilidad del tema y las necesidades de precisión.",
    sections: [
      {
        h: "Encuestas anónimas: opiniones honestas",
        body: "Las encuestas anónimas ganan cuando la honestidad importa más que la identidad. Los temas sensibles (opiniones sobre relaciones, imagen corporal, dilemas dramáticos, satisfacción laboral) obtienen 3x más respuestas honestas cuando son anónimos. moomz tiene el anonimato como predeterminado porque los temas sociales dominan sus casos de uso. Úsalas para: confesiones, encuestas de opinión, cualquier encuesta sobre temas con carga emocional.",
      },
      {
        h: "Encuestas identificadas: prueba social y responsabilidad",
        body: "Las encuestas identificadas (estilo Instagram) ganan cuando quieres que las identidades de los votantes sean visibles. Úsalas para: reacciones a fan-cams, encuestas de apoyo (\"¿quién viene a la boda?\"), encuestas de compromiso (\"¿quién se apunta al gym mañana?\"). La identidad impulsa la acción — los votantes se comprometen públicamente. Las encuestas identificadas tienen menos tasa de voto pero mayor tasa de acción.",
      },
      {
        h: "Híbrido: voto anónimo, compromiso público",
        body: "Algunos casos de uso necesitan ambos. \"Vota de forma anónima si asistirías, y confirma públicamente si votaste sí\". Las encuestas de moomz gestionan el voto anónimo; las herramientas nativas de eventos gestionan la confirmación pública. Combinar los dos preserva la opinión honesta mientras extrae el compromiso público de quienes están dispuestos.",
      },
      {
        h: "Matriz de decisión",
        body: "Decisión con altas apuestas que necesita información honesta: anónimo (moomz). Señal social o presión de grupo útil: identificado (Instagram). Temas sensibles: anónimo. Compromiso público necesario: identificado. Encuestas en chats de amigos: normalmente anónimo salvo que el objetivo sea el compromiso. Encuestas de trabajo: anónimo para feedback, identificado para logística.",
      },
    ],
    polls: [
      { q: "¿Prefieres anónimo o identificado?", options: ["Anónimo", "Identificado", "Mezcla", "Depende"] },
      { q: "¿Tema más sensible?", options: ["Relaciones", "Cuerpo", "Trabajo", "Política"] },
      { q: "¿Compromiso público vía encuesta?", options: ["Sí", "No", "Mezcla", "Raramente"] },
      { q: "¿Encuestas de drama anónimas?", options: ["Siempre", "A veces", "Nunca", "Por defecto"] },
      { q: "¿Encuestas de trabajo anónimas?", options: ["Sí para feedback", "Identificado para logística", "Mezcla", "Nunca"] },
      { q: "¿El formato híbrido es útil?", options: ["Sí", "No", "A veces", "Complicado"] },
      { q: "¿Confías en las encuestas anónimas?", options: ["Sí", "No", "Regular", "Más honestas"] },
      { q: "¿Las encuestas identificadas son más precisas?", options: ["No", "Sí", "Regular", "Depende"] },
    ],
    faq: [
      {
        q: "¿moomz es completamente anónimo?",
        a: "Sí — los votos son anónimos por defecto. Solo los totales agregados son visibles.",
      },
      {
        q: "¿Puedo ver quién votó en mi encuesta?",
        a: "No — moomz no expone la identidad de los votantes, ni siquiera al creador de la encuesta. El anonimato se aplica por diseño.",
      },
      {
        q: "¿Por qué Instagram es identificado?",
        a: "Modelo de engagement — Instagram se beneficia de las dinámicas sociales en torno a la identidad del voto. Otra plataforma, otro equilibrio.",
      },
      {
        q: "¿El anonimato es siempre más preciso?",
        a: "Para temas sensibles, sí. Para encuestas de compromiso (\"¿quién viene?\"), el identificado es mejor.",
      },
    ],
    related: ["read-poll-results-without-bias-en-es"],
    updatedAt: today,
  },
  {
    slug: "polls-in-slack-team-en-es",
    locale: "es",
    category: "guides",
    emoji: "💼",
    title: "Cómo Usar Encuestas en Slack para Decisiones de Equipo",
    h1: "Encuestas en Slack para Decisiones de Equipo: Guía para Managers",
    description:
      "Cómo usar encuestas en un canal de Slack para las decisiones del equipo. Buenas prácticas para managers, tipos de decisiones y cómo fijar plazos.",
    intro:
      "Slack es donde se toman las decisiones de equipo en 2026. Las encuestas de moomz se integran de forma limpia — pega una URL, vota en 30 segundos, decisión tomada. Aquí va la guía del manager para hacer encuestas eficaces en canales de Slack.",
    sections: [
      {
        h: "Mejores canales de Slack para encuestar",
        body: "Usa encuestas en: #team para decisiones a nivel de equipo, #engineering para votaciones técnicas, #social para planificar eventos fuera de la oficina. Evita encuestar en #general para temas sensibles — demasiados ojos. Evita encuestar en DMs — pierde el sentido colectivo. Tamaño ideal: canales de 8-50 personas. Menos y el resultado es una sola persona; más y el ruido ahoga la señal.",
      },
      {
        h: "Tipos de decisiones que funcionan con encuestas",
        body: "Las encuestas funcionan para: selección de horario de reunión, decisiones de comida, votos de prioridad de proyecto (entre opciones pre-curadas), elección de herramienta (Slack vs Teams vs Discord), ubicación de eventos fuera de la oficina. No funcionan para: dirección estratégica, contrataciones, salarios, evaluaciones de desempeño. La regla: decisiones distribuidas donde 10 pequeñas aportaciones equivalen a 1 elección colectiva.",
      },
      {
        h: "Fijar plazos y cerrar los votos",
        body: "Incluye siempre un plazo en el mensaje de Slack: \"Vota antes del viernes a las 17h\". Las encuestas de moomz no se cierran automáticamente, así que el plazo es social. Envía un recordatorio 4 horas antes para las encuestas importantes. Una vez pasado el plazo, haz una captura del resultado final y publícala en el mismo hilo que la decisión. Haz referencia a esa captura si alguien cuestiona la decisión más adelante.",
      },
      {
        h: "Evitar la fatiga de encuestas",
        body: "Demasiadas encuestas = fatiga. Limítate a 3-5 encuestas por semana por canal. Reserva las encuestas para decisiones de verdad; usa los hilos para los debates de opinión. Si tu equipo se queja del volumen de encuestas, audita cuáles fueron realmente importantes. Elimina el resto. Los mejores equipos dicen que las encuestas se sienten como \"un mensaje de Slack que reemplazó 30 correos\" — preserva esa magia siendo selectivo.",
      },
    ],
    polls: [
      { q: "¿Encuestas en Slack: sí o no?", options: ["Sí", "No", "A veces", "A diario"] },
      { q: "¿Mejor tamaño de canal para encuestar?", options: ["5-10", "10-50", "50+", "Toda la empresa"] },
      { q: "¿Mensaje con fecha límite?", options: ["Siempre", "A veces", "Nunca", "Crucial"] },
      { q: "¿La fatiga de encuestas es real?", options: ["Sí", "No", "Regular", "A veces"] },
      { q: "¿Mejor tipo de decisión para encuestar?", options: ["Horario reunión", "Comida", "Prioridad", "Evento fuera"] },
      { q: "¿Estrategia vía encuesta?", options: ["No", "A veces", "Sí", "Nunca"] },
      { q: "¿Las encuestas reducen el tiempo de decisión?", options: ["Sí mucho", "Regular", "No", "Más lento"] },
      { q: "¿Encuestas anónimas en el trabajo?", options: ["Sí", "No", "Mezcla", "Depende"] },
    ],
    faq: [
      {
        q: "¿Usar el sondeo nativo de Slack o moomz?",
        a: "El nativo para encuestas rápidas dentro del workspace. moomz para encuestas anónimas o que necesitan cruzar canales/organizaciones.",
      },
      {
        q: "¿Cómo consigo que la gente vote de verdad?",
        a: "Fija plazos, envía recordatorios, haz que votar sea un solo toque y actúa sobre el resultado. Las encuestas sobre las que se actúa impulsan la participación futura.",
      },
      {
        q: "¿Pueden las encuestas reemplazar los 1:1?",
        a: "No — las encuestas no sustituyen las conversaciones individuales. Reemplazan las meta-reuniones.",
      },
      {
        q: "¿Mejor hora del día para publicar una encuesta?",
        a: "10-11h o 14-15h en la zona horaria de tu equipo. Evita primera hora de la mañana (se pierden) y final del día (se olvidan).",
      },
    ],
    related: ["share-poll-whatsapp-discord-slack-en-es"],
    updatedAt: today,
  },
  {
    slug: "polls-tiktok-live-en-es",
    locale: "es",
    category: "guides",
    emoji: "🎥",
    title: "Cómo Usar Encuestas en un TikTok Live",
    h1: "Encuestas en TikTok Live: Dispara el Engagement Durante el Stream",
    description:
      "Cómo usar encuestas en un TikTok Live. Setup, compartir el enlace, estrategias de votación en tiempo real y cómo aumentar el tiempo de visionado.",
    intro:
      "TikTok Live no tiene encuestas nativas. Los creadores usan moomz para cubrir ese hueco: anuncian la encuesta, comparten el enlace en el chat y miran los resultados en vivo durante el stream. Las encuestas en streams en directo aumentan el tiempo de visionado medio un 40%. Aquí va el playbook.",
    sections: [
      {
        h: "Prepara las encuestas antes de entrar en directo",
        body: "Pre-crea 3-5 encuestas antes de empezar el directo. Guarda las URLs cortas en una app de notas. Durante el live, puedes lanzar una nueva encuesta cada 10-15 minutos pegando la siguiente URL. La preparación previa evita los silencios incómodos. Las mejores encuestas para directos: retos para los espectadores (\"vota lo que hago ahora\"), de opinión (\"¿hot or not?\"), de predicción (\"¿paso este nivel?\").",
      },
      {
        h: "Comparte el enlace en el chat del directo",
        body: "El chat de TikTok Live no despliega bien las URLs. Anuncia el enlace verbalmente (\"entra en moomz.com/x7k2j\"), luego pégalo en el chat. La URL de 5 letras de moomz es suficientemente corta para leerla en voz alta. Los espectadores tocan, votan y vuelven al stream. Algunos streamers proyectan la URL de la encuesta como overlay de pantalla (estilo StreamLabs u OBS) para el recordatorio visual.",
      },
      {
        h: "Los resultados del voto en el stream",
        body: "Una vez que los espectadores han votado, haz una captura del resultado en vivo y reacciona en cámara. \"El 73% ha dicho que haga el reto — bueno, me pongo a ello\". La reacción es el contenido. Los streamers que reaccionan a los resultados conectan más, y los espectadores se quedan más tiempo. No te limites a decir \"ganó X\" — reacciona como si el resultado importara, porque importa en términos de agencia del stream.",
      },
      {
        h: "Encuesta de recapitulación y contenido de continuación",
        body: "Termina el directo con una encuesta resumen: \"¿mejor momento del stream de hoy?\". Lanza una de seguimiento en el próximo directo: \"¿continuamos lo que votamos la última vez?\". Esto genera continuidad. Los espectadores recurrentes sienten que el streamer recuerda sus aportaciones. Las encuestas se convierten en el tejido conectivo entre directos.",
      },
    ],
    polls: [
      { q: "¿Encuestas en TikTok Live: sí?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Mejor tipo de encuesta para un directo?", options: ["Reto viewer", "Opinión", "Predicción", "Recap"] },
      { q: "¿Pre-crear encuestas?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Captura de pantalla y reacción al resultado?", options: ["Siempre", "A veces", "Nunca", "Crucial"] },
      { q: "¿Las encuestas aumentan el watch time?", options: ["Sí mucho", "Regular", "No", "Clave"] },
      { q: "¿Compartir el enlace verbalmente?", options: ["Sí", "No", "Verbal + chat", "Solo chat"] },
      { q: "¿Encuesta recap al final?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Continuidad entre directos?", options: ["Sí", "No", "A veces", "Siempre"] },
    ],
    faq: [
      {
        q: "¿Los bots de TikTok pueden publicar el enlace de la encuesta automáticamente?",
        a: "No de forma nativa. Algunas herramientas de terceros pueden; normalmente el streamer lo pega manualmente.",
      },
      {
        q: "¿TikTok añadirá encuestas nativas en directos algún día?",
        a: "Posiblemente. Hasta entonces, moomz cubre el hueco vía URLs compartibles.",
      },
      {
        q: "¿Cuántas encuestas por directo?",
        a: "3-5 encuestas por hora. Más resulta agotador; menos desaprovecha la oportunidad de engagement.",
      },
      {
        q: "¿Las encuestas de moomz en TikTok Live son anónimas?",
        a: "Sí — mismo anonimato. Los espectadores votan de forma anónima; solo los totales son visibles.",
      },
    ],
    related: ["poll-viral-twitter-x-en-es"],
    updatedAt: today,
  },
  {
    slug: "poll-viral-twitter-x-en-es",
    locale: "es",
    category: "guides",
    emoji: "🐦",
    title: "Cómo Hacer Viral una Encuesta en Twitter / X",
    h1: "Encuestas Virales en Twitter: Formato, Tema y el Bucle del Quote-Tweet",
    description:
      "Cómo hacer viral una encuesta en Twitter / X. Elección del tema, formato, bucle del quote-tweet y optimización por hora del día.",
    intro:
      "Twitter tiene encuestas nativas, pero están limitadas a 4 opciones y 7 días. Las encuestas de moomz superan ambos límites y añaden anonimato. Para encuestas virales, la URL de moomz pegada en un tweet supera a las encuestas nativas 3x en engagement. Aquí te contamos cómo hacer viral una encuesta en Twitter / X.",
    sections: [
      {
        h: "Elección del tema: la polémica vence al consenso",
        body: "Las encuestas virales en Twitter eligen temas donde la audiencia está dividida 60/40 — no 95/5. \"¿Pizza o sushi?\" es demasiado fácil; \"¿Piña en la pizza?\" es la división correcta. La polémica genera quote-tweets, y los quote-tweets generan viralidad. Evita temas donde una respuesta es obviamente correcta. Apunta a debates genuinos donde ambos lados tienen defensores respetables.",
      },
      {
        h: "El bucle del quote-tweet",
        body: "Una vez que la encuesta supera los 100 votos, haz un quote-tweet de tu propia encuesta con una opinión provocadora. \"El 73% se equivoca\" o \"no puedo creer que esté tan igualado\". El quote-tweet genera una nueva oleada de votantes. Repítelo 2-3 veces a lo largo de 24 horas. Cada quote-tweet devuelve la encuesta al tope del feed. Este es el mayor multiplicador de viralidad para encuestas en Twitter.",
      },
      {
        h: "Hora del día y día de la semana",
        body: "Mejor hora para publicar: 8-10h ET de martes a jueves. Pico de atención de la audiencia. Evita los fines de semana (menor engagement) y últimas horas de la tarde (los votos no se acumulan durante la noche). Las encuestas necesitan impulso en las primeras 2 horas; publica cuando hay actividad.",
      },
      {
        h: "Encuesta nativa vs enlace de moomz",
        body: "Las encuestas nativas de Twitter están limitadas a 4 opciones y 7 días. Las de moomz admiten 6 opciones y permanecen abiertas indefinidamente. Para encuestas virales con sets amplios de opciones (\"AOTY entre estos 6\"), moomz gana. Para encuestas binarias (\"¿sí o no?\"), la nativa está bien — la UI integrada dentro de Twitter supera al clic en un enlace externo. Elige según el caso de uso.",
      },
    ],
    polls: [
      { q: "¿Encuesta nativa o enlace de moomz?", options: ["Nativa", "moomz", "Mezcla", "Depende"] },
      { q: "¿Mejor tema para viralidad?", options: ["Polémico", "Divertido", "Drama", "Regular"] },
      { q: "¿Quote-tweet de tu propia encuesta?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Mejor hora para publicar?", options: ["8-10h ET", "Mediodía", "Tarde", "Madrugada"] },
      { q: "¿Evitar los fines de semana?", options: ["Sí", "No", "Regular", "Probar igual"] },
      { q: "¿Cuántos quote-tweets?", options: ["1", "2-3", "5+", "Ninguno"] },
      { q: "¿Encuesta durante 7 días o más?", options: ["7 días", "Más", "24h", "1h"] },
      { q: "¿Merece la pena usar moomz para 6 opciones?", options: ["Sí", "No", "Regular", "Siempre"] },
    ],
    faq: [
      {
        q: "¿Las encuestas de Twitter son anónimas?",
        a: "Las encuestas nativas de Twitter no revelan la identidad del votante, pero la plataforma rastrea. moomz es completamente anónimo.",
      },
      {
        q: "¿Puedo borrar una encuesta viral?",
        a: "La nativa: sí, en cualquier momento. moomz: sí, pero la URL queda muerta y los visitantes ven un 404.",
      },
      {
        q: "¿Twitter / X ampliará el número de opciones?",
        a: "Actualmente limitado a 4 opciones y 7 días. No está claro si hay planes de ampliación. moomz cubre el hueco.",
      },
      {
        q: "¿Mejor formato de texto para encuestas de moomz en Twitter?",
        a: "Pregunta + línea provocadora + enlace de moomz. \"¿Piña en la pizza? Zanjado: moomz.com/x7k2j\"",
      },
    ],
    related: ["polls-tiktok-live-en-es", "how-to-make-instagram-poll-es"],
    updatedAt: today,
  },
];
