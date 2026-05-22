import type { SeoPage } from "./types";

const today = "2026-05-20";

export const blogEs2: SeoPage[] = [
  // ============ ES 1 (entry 16) ============
  {
    slug: "creators-monetize-anonymous-qa-es",
    locale: "es",
    category: "blog",
    emoji: "💸",
    title: "Cómo los creadores monetizan el Q&A anónimo en 2026",
    h1: "Monetización de Q&A anónimo: cómo ganan dinero los creadores en 2026",
    description: "Cómo monetizan los creadores el Q&A anónimo en 2026. Respuestas de pago, preguntas premium, pases de comunidad, patrocinios.",
    intro: "El Q&A anónimo es oro puro en engagement. En 2026, los creadores han desbloqueado varios modelos de monetización: preguntas de pago, respuestas premium, pases de comunidad Q&A y slots de patrocinio. Esto es lo que está pasando en el ecosistema.",
    sections: [
      {
        h: "Preguntas de pago (estilo Cameo para Q&A)",
        body: "Algunas plataformas permiten que los fans paguen entre 5 y 50 dólares para garantizar que el creador responda su pregunta anónima. El fan se mantiene anónimo para el público; la plataforma registra el pago. Funciona especialmente bien para creadores de nivel medio con audiencias comprometidas pero no masivas: los fans quieren atención garantizada, los creadores ingresan entre 500 y 5.000 dólares al mes solo por esto. Los tiers premium se calibran según el tamaño del creador.",
      },
      {
        h: "Acceso a respuestas premium",
        body: "Los creadores responden de forma pública pero bloquean la respuesta detallada detrás de un paywall. Versión gratuita: respuesta corta de 30 segundos. Versión de pago (3-10 dólares): análisis completo. Funciona bien para creadores de consejos, negocios y coaches de dating. Las plataformas se quedan con un 15-30%; los creadores ingresan el 70-85% neto. Este modelo emergió a finales de 2025 y creció durante todo 2026.",
      },
      {
        h: "Pases de comunidad Q&A",
        body: "Formato de suscripción: entre 5 y 15 dólares al mes para acceder a la cola privada de Q&A del creador. Los suscriptores reciben respuestas prioritarias, livestreams mensuales de Q&A y respuestas exclusivas. Los mejores creadores reportan que entre el 5 y el 10% de sus seguidores se convierten al pase. Con 100.000 seguidores, eso supone entre 25.000 y 150.000 dólares al mes solo en suscripciones de Q&A.",
      },
      {
        h: "Slots de patrocinio y Q&A de marca",
        body: "Las marcas pagan a los creadores para lanzar campañas de Q&A patrocinadas. \"Pregúntame lo que quieras sobre el nuevo iPhone\" patrocinado por Apple. El creador cobra una tarifa fija; la marca obtiene visibilidad. Funciona mejor cuando la marca encaja con el nicho del creador. El Q&A anónimo hace que esto sea menos intrusivo que el contenido patrocinado típico: los fans hacen preguntas reales, el creador responde con el ángulo de la marca.",
      },
    ],
    polls: [
      { q: "¿Pagarías para que un creador te responda sí o sí?", options: ["Sí", "No", "Depende", "Solo top creadores"] },
      { q: "¿Vale la pena el acceso premium Q&A por 5€/mes?", options: ["Sí", "No", "Depende", "Hay que probarlo"] },
      { q: "¿El Q&A patrocinado te molesta?", options: ["Mucho", "Un poco", "Si está marcado, no", "No me doy cuenta"] },
      { q: "¿Mejor modelo de monetización Q&A?", options: ["Preguntas de pago", "Respuestas premium", "Suscripciones", "Patrocinio"] },
      { q: "¿Los creadores ganan dinero de verdad con Q&A?", options: ["Sí", "No", "Solo los top", "En nichos concretos"] },
      { q: "¿Añadirá moomz monetización?", options: ["Sí", "No", "Lo están pensando", "Que no lo hagan"] },
      { q: "¿El Q&A anónimo es más fácil de monetizar?", options: ["Sí", "No", "Igual", "Menos"] },
      { q: "¿Suscripción Q&A vs Patreon?", options: ["Q&A es mejor", "Patreon es mejor", "Igual", "Los dos"] },
      { q: "¿Son éticas las preguntas de pago?", options: ["Sí", "No", "Depende", "Según el creador"] },
      { q: "¿Mejor nicho para monetizar Q&A?", options: ["Coaches de dating", "Negocios", "Fitness", "Todos"] },
    ],
    faq: [
      { q: "¿Qué comisión se llevan las plataformas de Q&A anónimo?", a: "Normalmente entre el 15 y el 30%. Los creadores ingresan el 70-85% neto. Las plataformas que generan descubrimiento cobran más." },
      { q: "¿Son éticas las preguntas de pago?", a: "En general sí, si está bien indicado. Pagar para saltarse la cola es legítimo siempre que el creador sea claro al respecto." },
      { q: "¿moomz monetiza el Q&A?", a: "moomz ASK es gratuito en su lanzamiento. Puede que lleguen funciones premium para creadores; el tier de 2,99€/mes ya existe para cosméticos." },
      { q: "¿Y los impuestos sobre los ingresos de Q&A?", a: "Son ingresos por cuenta propia; los creadores los declaran como cualquier otro ingreso de contenido. Las plataformas emiten formularios fiscales por encima de los umbrales establecidos." },
    ],
    related: ["anonymous-qa-ask-ngl-moomz-es", "polls-engagement-stats-es", "dating-poll-app-trend-es"],
    updatedAt: today,
  },

  // ============ ES 2 (entry 17) ============
  {
    slug: "polls-replace-emails-work-es",
    locale: "es",
    category: "blog",
    emoji: "📧",
    title: "Las encuestas reemplazan los emails en el trabajo — 2026",
    h1: "Encuestas en el trabajo en 2026: cómo Slack mató el email de decisión",
    description: "Cómo las encuestas en Slack y Teams están reemplazando los emails de decisión en 2026. Datos de productividad y casos reales.",
    intro: "El email de decisión está muerto. \"Pregunta rápida: ¿qué pensáis de X?\" solía vivir en bandejas de entrada. En 2026, vive en encuestas de Slack. Así es como las encuestas redujeron el volumen de emails de decisión de los trabajadores del conocimiento un 40% y lo que están aprendiendo los managers.",
    sections: [
      {
        h: "El problema del email de decisión",
        body: "Un email de decisión tarda entre 8 y 30 minutos en redactarse, recibe respuestas parciales durante 2 o 3 días y produce un consenso ambiguo. Multiplica eso por 10 emails semanales por manager. Eso son entre 8 y 12 horas de gestión de decisiones a la semana. Las encuestas comprimen todo eso a 60 segundos: publicas la pregunta con opciones y un plazo. La votación se cierra, la decisión se toma y queda archivada.",
      },
      {
        h: "Para qué funcionan bien las encuestas en el trabajo",
        body: "Mejor uso: selección de horario de reuniones, decisiones sobre el almuerzo, votaciones de prioridad de proyectos, feedback del equipo sobre elecciones de UX, planificación de eventos. Mal uso: conversaciones salariales, evaluaciones de desempeño, decisiones de contratación, cualquier cosa que requiera contexto individual detallado. Usa encuestas para decisiones distribuidas donde diez pequeños inputs equivalen a una elección colectiva.",
      },
      {
        h: "Casos reales de managers",
        body: "Un equipo de ingeniería de 50 personas reemplazó el 80% de sus emails de decisión con encuestas en Slack y moomz. Resultado: 12 horas/semana ahorradas en todo el equipo, decisiones más rápidas y mayor participación (90% de tasa de voto frente al 40% de respuesta por email). Un equipo de marketing de 200 personas usa encuestas para seleccionar conceptos de campaña, priorizar pruebas A/B y debatir el tono de marca. Decisiones que tardaban semanas ahora tardan 24 horas.",
      },
      {
        h: "Límites y advertencias",
        body: "Las encuestas pueden democratizar demasiado. Algunas decisiones necesitan la aprobación de un líder, no una votación. No hagas encuestas sobre valores, estrategia o cuestiones éticas: las encuestas diluyen la responsabilidad. Úsalas para decisiones de ejecución donde la preferencia colectiva importa de verdad. Managers con experiencia confirman: las encuestas no reemplazan las conversaciones individuales, reemplazan la meta-reunión para decidir sobre qué reunirse.",
      },
    ],
    polls: [
      { q: "¿Usas encuestas en el trabajo?", options: ["Sí, a diario", "A veces", "Rara vez", "Nunca"] },
      { q: "¿Mejor uso de una encuesta en el trabajo?", options: ["Horario de reunión", "Almuerzo", "Prioridad de proyecto", "Evento de equipo"] },
      { q: "¿Las encuestas reducen el email?", options: ["Sí, mucho", "Un poco", "No", "Generan más email"] },
      { q: "¿Las decisiones de management deberían votarse?", options: ["Sí", "No", "A veces", "Nunca"] },
      { q: "¿Encuesta de Slack o moomz en el trabajo?", options: ["Slack nativo", "Enlace moomz", "Los dos", "No uso encuestas"] },
      { q: "¿Las encuestas perjudican o mejoran la cultura?", options: ["Mejoran", "Perjudican", "Neutral", "Depende"] },
      { q: "¿Son útiles las encuestas anónimas en el trabajo?", options: ["Sí", "No", "Depende", "Son arriesgadas"] },
      { q: "¿Tamaño ideal de equipo para encuestas?", options: ["Menos de 10", "10-50", "50-200", "Toda la empresa"] },
      { q: "¿Las encuestas resuelven la fatiga de decisión?", options: ["Sí", "No", "Un poco", "Crean una nueva"] },
      { q: "¿Las encuestas reemplazarán las reuniones?", options: ["En parte", "No", "Ya lo hacen", "Ojalá"] },
    ],
    faq: [
      { q: "¿Las encuestas de trabajo son anónimas por defecto?", a: "Las de Slack no. Las de moomz sí son anónimas. Elige según lo que sea adecuado para la decisión." },
      { q: "¿Se pueden usar encuestas en RRHH?", a: "Para encuestas de clima o feedback de equipo, sí. Para evaluaciones individuales, no; usa herramientas específicas de RRHH." },
      { q: "¿Los equipos remotos se benefician más de las encuestas?", a: "Sí. Los equipos remotos reemplazan las conversaciones de pasillo con encuestas. La adopción es mayor en empresas remote-first." },
      { q: "¿Se pueden usar mal las encuestas en el trabajo?", a: "Sí. Los managers pueden usarlas para esquivar decisiones que deberían tomar ellos. El escaqueo por encuesta es un problema real." },
    ],
    related: [],
    updatedAt: today,
  },

  // ============ ES 3 (entry 18) ============
  {
    slug: "polls-killed-yes-no-es",
    locale: "es",
    category: "blog",
    emoji: "✅",
    title: "Las encuestas mataron el sí/no — por qué la Gen Z rechaza lo binario",
    h1: "La muerte del sí/no: por qué la Gen Z exige 3 opciones o más",
    description: "Por qué la Gen Z rechaza las preguntas de sí/no. El auge del \"regular\", \"depende\" y \"los dos\". Análisis cultural y de plataformas.",
    intro: "Las generaciones anteriores preguntan sí o no. La Gen Z responde \"regular\". La pregunta binaria simple está muriendo en 2026, reemplazada por encuestas con 3 o 4 opciones matizadas. Esto es el cambio cultural y lo que implica para cualquiera que haga preguntas en 2026.",
    sections: [
      {
        h: "La generación del \"regular\"",
        body: "Pregúntale a alguien de la Gen Z si una canción es buena y te dirá \"regular\". No sí, no no, sino algo intermedio. Las encuestas de moomz lo reflejan: \"regular\" es la tercera opción más popular en 2026, justo después de los equivalentes típicos al sí/no. La Gen Z considera lo binario demasiado simplista. La preferencia cultural es calibrar, no comprometerse.",
      },
      {
        h: "Las plataformas entrenaron al cerebro",
        body: "Las encuestas de Instagram forzaron lo binario durante años. El resultado: una generación que resiente que la obliguen a elegir entre dos opciones. Las encuestas de moomz ofrecen entre 3 y 6 opciones por defecto, y el engagement es mayor. Los usuarios más jóvenes buscan específicamente encuestas que les den opciones como \"los dos\", \"ninguno\" o \"depende\". La plataforma moldeó la preferencia; ahora la preferencia moldea las plataformas.",
      },
      {
        h: "Lo que esto significa para encuestas y marcas",
        body: "Las encuestas de marca que fuerzan el sí/no obtienen peores datos y tasas de finalización más bajas entre la Gen Z. La solución: incluir opciones tipo \"regular\", \"depende\" o \"los dos\". Los clásicos NPS usan escalas del 0 al 10; los equivalentes modernos amigables con la Gen Z usan categorías con nombre (\"regular\", \"bueno\", \"brutal\"). El vocabulario importa tanto como la estructura.",
      },
      {
        h: "Cuándo lo binario sigue ganando",
        body: "A pesar de la tendencia, lo binario sigue siendo lo mejor en ciertos contextos: decisiones de alto impacto (\"¿sí o no a esto?\"), comparaciones de preferencias (\"esto o aquello\") y encuestas de entretenimiento (\"¿ver esta serie o pasarla?\"). La regla: lo binario funciona cuando la pregunta es genuinamente binaria. Lo que la Gen Z rechaza es lo binario forzado en temas que necesitan matiz.",
      },
    ],
    polls: [
      { q: "¿Cómo respondes a \"¿está buena esta canción?\"?", options: ["Sí", "No", "Regular", "Depende"] },
      { q: "¿Las encuestas binarias te ponen de los nervios?", options: ["Sí", "No", "Regular", "A veces"] },
      { q: "¿Quieres \"regular\" como opción por defecto?", options: ["Sí", "No", "A veces", "Siempre"] },
      { q: "¿Hay brecha generacional en la preferencia de encuesta?", options: ["Sí", "No", "Regular", "No lo noto"] },
      { q: "¿Las encuestas de marca te aburren?", options: ["Sí", "No", "Regular", "Depende"] },
      { q: "¿Mejor opción no binaria?", options: ["Regular", "Depende", "Los dos", "Ninguno"] },
      { q: "¿Te saltas las encuestas de sí/no?", options: ["Siempre", "A veces", "Nunca", "Regular"] },
      { q: "¿Lo binario va a desaparecer?", options: ["Sí", "No", "Regular", "Poco a poco"] },
      { q: "¿Número de opciones ideal en moomz?", options: ["2", "3", "4", "6"] },
      { q: "¿Lo binario forzado es un insulto?", options: ["Sí", "No", "Regular", "Jajaja"] },
    ],
    faq: [
      { q: "¿Por qué la Gen Z rechaza lo binario?", a: "Cambio cultural hacia la calibración. Además, las plataformas entrenaron la capacidad de matiz: una vez que tienes 4 opciones, las 2 se quedan cortas." },
      { q: "¿Debería incluir siempre \"regular\" como opción?", a: "En encuestas de opinión, sí. En predicciones o decisiones, generalmente no: la idea es forzar el compromiso." },
      { q: "¿Cómo escribir buenas encuestas de 3 opciones?", a: "Sí/no/regular funciona. Mejor aún: reemplaza \"regular\" con un matiz específico (\"depende de X\", \"los dos\", \"ninguno\")." },
      { q: "¿Lo binario está muriendo en todos lados?", a: "No. Sigue siendo fuerte en predicciones, decisiones y esto-o-aquello estético. Pierde fuerza en opiniones matizadas." },
    ],
    related: ["two-vs-five-options-es", "gen-z-polls-2026-trend-report-es", "viral-poll-formats-es"],
    updatedAt: today,
  },

  // ============ ES 4 (entry 19) ============
  {
    slug: "the-psychology-of-this-or-that-es",
    locale: "es",
    category: "blog",
    emoji: "🤔",
    title: "La psicología del \"esto o aquello\" (por qué engancha tanto)",
    h1: "La psicología del \"esto o aquello\": por qué las elecciones binarias nos atrapan",
    description: "Por qué las encuestas de \"esto o aquello\" son adictivas de verdad: la dopamina, los efectos de encuadre y lo que revelan sobre cómo pensamos.",
    intro: "Las encuestas de \"esto o aquello\" son los cigarrillos de las redes sociales. Das un tap, luego otro, y de repente han pasado treinta minutos sin que recuerdes en qué has votado. El formato es genuinamente adictivo y no es por casualidad. Cinco mecanismos psicológicos que se superponen hacen que este tipo de encuestas sea casi imposible de soltar una vez que empiezas. Aquí los tienes, junto con lo que explican sobre tus hábitos de scroll.",
    sections: [
      {
        h: "El bucle de dopamina de las microdecisiones",
        body: "Cada elección binaria que tomas libera una pequeña dosis de dopamina en el estriado ventral, la misma región que se activa cuando comes algo rico, recibes un like o ganas en las tragaperras. Investigadores del MIT (Pessiglione, 2012) demostraron que hasta las decisiones más pequeñas activan el circuito de recompensa en niveles medibles. Las apps que han descifrado cómo maximizar esta exposición ganan la batalla de la atención. Tinder lo aprendió. TikTok lo aprendió. Las encuestas de \"esto o aquello\" empaquetan el mismo bucle en un feed: tap, microrecompensa, siguiente carta. Veinte cartas en cinco minutos son veinte microrecompensas. Cuando paras, has generado suficiente dopamina para sentirte brevemente satisfecho... y levemente vacío justo después. Esa es la arquitectura del scroll inconsciente, deliberada por diseño.",
      },
      {
        h: "El efecto de cierre: cada elección se resuelve",
        body: "Una razón por la que el \"esto o aquello\" supera a las encuestas abiertas en engagement: cada elección binaria termina con cierre inmediato. El cerebro detesta los bucles abiertos. Ante \"¿cuál es el mejor país de Europa?\", el cerebro se queda en modo deliberación, paralizado. Ante \"¿Italia o Francia?\", el cerebro resuelve en 200 milisegundos y sigue adelante. El cierre sienta bien. El efecto Zeigarnik (1927) describe cómo las tareas mentales abiertas consumen carga cognitiva. Las elecciones binarias dan cierre más rápido que cualquier otro formato, y esa satisfacción es la razón por la que puedes encadenar veinte seguidas sin darte cuenta. El coste: muchas de estas elecciones son falsas dicotomías que aplastan la realidad. Pero al cerebro no le importa: solo quiere cerrar el bucle.",
      },
      {
        h: "Efectos de encuadre: no eliges, reaccionas",
        body: "Kahneman y Tversky ganaron un Nobel por demostrar que tomamos decisiones basadas en cómo se enmarcan las preguntas, no en la realidad subyacente. Las encuestas de \"esto o aquello\" son exposición pura al efecto de encuadre. \"Pizza o sushi\" te obliga a comparar dos elementos específicos ignorando todo lo demás. El marco controla la respuesta. Prueba la misma pregunta con pares distintos: \"¿pizza o ensalada?\" obtiene una distribución de votos diferente que \"¿pizza o sushi?\", aunque la pizza sea la misma en los dos casos. El formato te hace sentir que tomas decisiones, pero en realidad estás reaccionando a marcos construidos. Para el entretenimiento casual está bien. Para decisiones importantes, es un desastre: por eso médicos y jueces evitan el formato \"esto o aquello\".",
      },
      {
        h: "La prueba social como atajo de decisión",
        body: "Cuando votas y ves de inmediato que el 60% eligió la opción A, tu cerebro integra esa información más rápido de lo que crees. En la siguiente encuesta, ya estás ligeramente sesgado hacia lo que crees que elegirá la mayoría. Es comportamiento de manada, bien documentado en finanzas y ahora mapeado en encuestas. Lo curioso: aunque la gente jura que vota de forma independiente, no es cierto. Los estudios muestran que ver el recuento actual desplaza el siguiente voto entre 5 y 15 puntos porcentuales de media. Algunas plataformas ocultan los votos hasta que has emitido el tuyo para contrarrestarlo; otras abrazan el efecto manada porque impulsa el engagement. De cualquier forma, conviene saber que está pasando.",
      },
      {
        h: "Por qué es más difícil parar que empezar",
        body: "La combinación de cierre rápido, microrecompensas de dopamina, engagement impulsado por el encuadre y prueba social crea un problema de salida. No te aburres: de repente te das cuenta de la hora. Es el mismo problema de salida que TikTok, los swipes de Tinder y las máquinas tragaperras. La unidad de contenido es pequeña, variada y se justifica a sí misma. Ninguna encuesta de \"esto o aquello\" por separado parece tiempo perdido; el conjunto sí. La solución no es prohibir el formato, sino usarlo con intención. Veinte minutos de \"esto o aquello\" para desconectar después del trabajo: perfecto. Tres horas por accidente: un problema. El formato es una herramienta, y como todas las herramientas, el abuso depende del usuario.",
      },
    ],
    polls: [
      { q: "¿Con qué frecuencia te enganchas a encuestas de \"esto o aquello\"?", options: ["A diario", "Semanalmente", "Rara vez", "Nunca"] },
      { q: "¿Pizza o sushi?", options: ["Pizza", "Sushi", "Los dos", "Ninguno"] },
      { q: "¿Playa o montaña?", options: ["Playa", "Montaña", "Los dos", "Ninguno"] },
      { q: "¿Café o té?", options: ["Café", "Té", "Los dos", "Bebida energética"] },
      { q: "¿Perro o gato?", options: ["Perro", "Gato", "Los dos", "Ninguno"] },
      { q: "¿Lees los resultados antes de votar?", options: ["Siempre", "A veces", "Nunca", "Intento no hacerlo"] },
      { q: "¿Mejor encuesta binaria o de múltiple opción?", options: ["Binaria", "Múltiple", "Los dos", "Depende"] },
      { q: "¿\"Esto o aquello\" te vuelve más decisivo?", options: ["Sí", "No", "Regular", "Menos, en realidad"] },
      { q: "¿Formato más adictivo?", options: ["Esto o aquello", "¿Preferiría...?", "Ordena estos", "Encuestas abiertas"] },
    ],
    faq: [
      { q: "¿Por qué son tan adictivas las encuestas de \"esto o aquello\"?", a: "Combinación de microdopamina, cierre rápido, encuadre y prueba social. Los cuatro mecanismos se suman y hacen que parar sea más difícil que empezar." },
      { q: "¿Es malo engancharse a ellas?", a: "El uso moderado está bien. Los maratones compulsivos de varias horas erosionan la capacidad de atención y hacen perder tiempo que notarías en retrospectiva." },
      { q: "¿Mejoran la capacidad de tomar decisiones?", a: "Ligeramente, en decisiones pequeñas. Inútiles para las complejas. Las decisiones reales necesitan pensamiento estructurado, no taps binarios." },
      { q: "¿Por qué sigo dando taps aunque esté aburrido?", a: "El efecto de cierre: el cerebro sigue buscando el pequeño alivio de la resolución. El ciclo continúa hasta que lo rompes conscientemente." },
      { q: "¿Puedo usar el \"esto o aquello\" de forma estratégica?", a: "Sí. Para calentar a una audiencia, romper la parálisis de decisión o generar datos rápidos de preferencia. Solo no lo uses para decisiones importantes." },
    ],
    related: ["psychology-binary-choice-es", "two-vs-five-options-es"],
    updatedAt: today,
  },

  // ============ ES 5 (entry 20) ============
  {
    slug: "why-anonymous-q-and-a-is-back-es",
    locale: "es",
    category: "blog",
    emoji: "🎭",
    title: "Por qué el Q&A anónimo ha vuelto (y esta vez va en serio)",
    h1: "Por qué el Q&A anónimo ha vuelto: la historia del regreso en 2026",
    description: "Del colapso de Ask.fm a NGL, Tellonym y moomz ASK: por qué el Q&A anónimo volvió y qué ha cambiado esta vez.",
    intro: "Se suponía que Ask.fm iba a enterrar el formato de Q&A anónimo para siempre. Varios casos de acoso de alto perfil, pánico de padres, amenazas regulatorias... Para 2015, el género era radioactivo. Diez años después, el Q&A anónimo ha vuelto. NGL, Tellonym, Sendit, moomz ASK. El formato es ahora más grande que en su pico de 2013. ¿Qué ha cambiado?",
    sections: [
      {
        h: "El error fatal de Ask.fm: cero moderación a escala",
        body: "Ask.fm lanzó en 2010 con una promesa simple: preguntas anónimas a cualquier usuario. En cuatro años ya tenía 200 millones de usuarios... y varios muertos. Múltiples suicidios de adolescentes entre 2012 y 2014 se atribuyeron en parte al acoso en Ask.fm. Los medios explotaron. Los reguladores europeos amenazaron con actuar. La plataforma nunca se recuperó, fue vendida a inversores rusos, luego a varios dueños más, y desapareció lentamente de la relevancia cultural. La lección técnica: el anonimato sin filtros a escala es un vector de acoso por defecto. Quien construya el mismo producto con el mismo modelo obtiene el mismo resultado. Esta lección costó vidas. Las plataformas que nacieron después de 2020 lo saben.",
      },
      {
        h: "Por qué el formato nunca murió, solo la plataforma",
        body: "Aunque Ask.fm implosionó, la demanda subyacente persistió. Las preguntas anónimas tienen un valor único: sortean la capa de cortesía. Tus amigos no te dirán que tu relación no es sana. Extraños anónimos sí. Esa asimetría es irreemplazable para el feedback honesto, la señalización social y la curiosidad casual. El formato no era tóxico; la falta de salvaguardas lo era. Cuando NGL se lanzó en Instagram en 2022 y alcanzó 40 millones de descargas en seis meses, demostró que la demanda subyacente solo estaba dormida, esperando un contenedor más seguro.",
      },
      {
        h: "NGL, Tellonym, Sendit, moomz ASK: qué cambia",
        body: "Las plataformas modernas de Q&A anónimo tienen tres cosas que Ask.fm nunca tuvo. Primero, moderación por IA que analiza las preguntas entrantes en busca de patrones de acoso antes de entregarlas, no solo tras el reporte. Segundo, límites de frecuencia: habitualmente 3-5 preguntas por remitente al día por destinatario, lo que evita las avalanchas de abuso que caracterizaron a Ask.fm. Tercero, controles del destinatario: skip, bloqueo y silencio fáciles, más el recuento visible de preguntas para la audiencia. moomz ASK añade un cuarto elemento: preguntas y encuestas conviven en el mismo perfil, creando un engagement híbrido. NGL es el más puro: nativo de Instagram, sin profundidad de perfil. Tellonym es más maduro, con comunidades más sólidas. Sendit apunta a adolescentes en Snapchat. Cada uno ocupa un nicho distinto.",
      },
      {
        h: "La economía de confianza de las plataformas anónimas",
        body: "Las nuevas plataformas anónimas operan bajo un contrato de confianza frágil. Los usuarios confían en que la plataforma filtrará el daño. La plataforma confía en que los usuarios se comportarán con el privilegio del anonimato. Cuando esta confianza se rompe, la plataforma muere rápido: basta ver el colapso veloz de varios clones post-Ask.fm que no invirtieron en moderación. Las plataformas que sobreviven a largo plazo destinan entre el 20 y el 40% de sus recursos de ingeniería a confianza y seguridad. Ese es el coste real de gestionar un producto social anónimo hoy. Los intentos indie que se saltan esta inversión fracasan predeciblemente en 12-18 meses.",
      },
      {
        h: "Lo que viene: Q&A por voz e IA preventiva",
        body: "Dos tendencias emergen en 2026. Primera, el Q&A anónimo por voz: responder en audio en lugar de texto. Más cálido, más humano, más difícil de atacar como creador. Segunda, la moderación de IA preventiva que no solo filtra el abuso, sino que reformula activamente las preguntas hostiles en versiones constructivas. \"¿Por qué eres tan feo?\" se convierte en \"¿Qué opinas de tus elecciones de estilo?\" Misma intención revelada, ninguna crueldad. Si estas dos tendencias cuajan, el Q&A anónimo habrá resuelto por fin su problema de origen y se convertirá en un formato social maduro y duradero.",
      },
    ],
    polls: [
      { q: "¿Usaste Ask.fm en su día?", options: ["Sí", "No", "Nunca lo conocí", "Me suena"] },
      { q: "¿NGL o Tellonym?", options: ["NGL", "Tellonym", "Los dos", "Ninguno"] },
      { q: "Q&A anónimo: ¿liberador o tóxico?", options: ["Liberador", "Tóxico", "Los dos", "Depende del usuario"] },
      { q: "¿Respondes todas las preguntas que recibes?", options: ["Todas", "Solo algunas", "Las positivas", "Las ignoro"] },
      { q: "¿Cuántas preguntas al día para usuarios activos?", options: ["0-1", "2-5", "5-15", "15+"] },
      { q: "¿El anonimato debería ser reversible?", options: ["Sí, para amenazas", "Nunca", "Siempre para menores", "Solo en investigaciones"] },
      { q: "¿Q&A por voz te parece interesante?", options: ["Sí", "No", "Quizás", "Cringe"] },
      { q: "¿Q&A anónimo con 30 años es cringe?", options: ["No", "Un poco", "Sí", "Depende del uso"] },
    ],
    faq: [
      { q: "¿Por qué colapsó Ask.fm?", a: "Varios suicidios de adolescentes relacionados con el acoso entre 2012 y 2014, fuerte presión mediática, amenazas regulatorias y cero inversión en moderación." },
      { q: "¿Es NGL seguro de verdad?", a: "Más seguro que Ask.fm gracias a la moderación por IA, pero sigue siendo anónimo: úsalo con criterio, especialmente si eres menor." },
      { q: "¿En qué se diferencia moomz ASK de NGL?", a: "moomz ASK vive en un perfil moomz con encuestas, lo que permite un engagement híbrido Q&A + encuesta que NGL no ofrece." },
      { q: "¿Cuántas preguntas recibe un usuario medio?", a: "Muy variable, pero en NGL la mediana de los usuarios activos recibe entre 3 y 7 preguntas al día." },
      { q: "¿El anonimato está realmente garantizado?", a: "Anónimo para otros usuarios, sí. La propia plataforma conserva registros (IP, metadatos). Anonimato social, no anonimato técnico." },
    ],
    related: ["anonymous-qa-ask-ngl-moomz-es", "creators-monetize-anonymous-qa-es", "the-rise-of-the-vibe-check-app-es"],
    updatedAt: today,
  },

  // ============ ES 6 (entry 21) ============
  {
    slug: "bereal-x-poll-the-daily-vibe-check-loop-es",
    locale: "es",
    category: "blog",
    emoji: "🌅",
    title: "BeReal × encuesta: el bucle del vibe check diario que engancha",
    h1: "BeReal × encuesta: por qué el bucle del vibe check diario funciona",
    description: "Por qué una sola encuesta diaria sincronizada supera a un feed infinito. Lecciones de BeReal, Wordle y el auge de las apps de cadencia diaria.",
    intro: "BeReal demostró una cosa de forma definitiva antes de su declive: un único ritual diario sincronizado le gana al scroll infinito. Wordle demostró lo mismo. También el sistema de rachas de Duolingo. El Daily moomz toma ese principio y lo aplica a las encuestas. Una pregunta, un día, la misma para todos. Parece trivial. No lo es. Aquí tienes el mecanismo y por qué el modelo de cadencia diaria está comiéndose silenciosamente a las apps de feed crónico.",
    sections: [
      {
        h: "La sincronicidad gana a la personalización",
        body: "El modelo mental dominante para las apps sociales ha sido la hiperpersonalización: el Para Ti de TikTok, el Explorar de Instagram, el algoritmo de Twitter. La premisa: ofrece a cada usuario un feed único y habrá más engagement. Funciona... por un tiempo. El coste en fatiga es alto. Para 2024, los usuarios se quejaban abiertamente de la soledad de los feeds personalizados: ves contenido solo, no puedes referenciar lo que vieron otros, no hay momentos culturales compartidos. BeReal invirtió el modelo. Una foto, una ventana de tiempo, todo el mundo viendo aproximadamente lo mismo. El coste: menos tiempo por sesión. La ganancia: conexión más profunda por sesión, referencias compartidas, ganchos para la conversación. El Daily moomz hereda esto. Cuando todo el mundo vota la misma encuesta hoy, esa encuesta se convierte en cultura compartida.",
      },
      {
        h: "La escasez fabrica atención",
        body: "El Daily moomz desaparece después de 24 horas. No puedes votar en el de ayer. Esta escasez forzada crea dos efectos. Primero, consultas la app a diario porque esperar es el único camino. Segundo, tu voto pesa más: solo tienes un intento con exactamente este grupo en exactamente este momento. Compáralo con el feed infinito: cada encuesta parece infinitamente reemplazable, infinitamente omisible. La escasez en el diseño de interacción es un mecanismo conocido (Cialdini, 1984), pero ha estado infraexplotado en apps sociales que construyeron su crecimiento sobre supuestos contrarios. Las empresas que descubrieron la escasez (Wordle, BeReal, las rachas de Duolingo) lograron bucles virales más duraderos que cualquier feed algorítmico.",
      },
      {
        h: "Las preguntas compartidas crean lenguaje común",
        body: "En un feed infinito, no hay dos personas que vean el mismo contenido. No hay nada de qué hablar. El Daily moomz entrega una sola pregunta a todo el mundo. Si el Daily de hoy era \"¿piña en la pizza?\", todas las conversaciones sobre encuestas ese día referencian eso. La encuesta se convierte en un momento cultural, aunque sea brevemente. Este lenguaje emergente es el mecanismo de crecimiento más infravalorado del diseño de producto. Twitter construyó su imperio en parte sobre esto: los Trending Topics creaban vocabulario compartido cada día. Cuando los trending de Twitter se volvieron inútiles, el slot del momento cultural quedó abierto. El Daily moomz lo ocupa para el ecosistema de encuestas.",
      },
      {
        h: "El algoritmo decide qué se convierte en cultura",
        body: "El Daily moomz no es aleatorio. El algoritmo de selección prioriza encuestas controvertidas (cerca del 50/50), con suficiente recuento de votos humanos e idealmente reflejando un tema de actualidad. Esta curaduría es crítica. Elige una encuesta aburrida y el Daily se convierte en aire muerto. Elige una encuesta divisoria y la conversación explota. Elige una encuesta de nicho y solo ese nicho participa. El reto de gestionar una app de cadencia diaria es la calidad de la selección, y acertar 365 días al año es más difícil que cualquier prueba A/B. La mayoría de las apps de cadencia diaria que fracasan (muchos clones de Wordle) fracasan por la calidad de la selección, no por la ejecución técnica.",
      },
      {
        h: "Por qué BeReal lo perdió y qué hace diferente el Daily moomz",
        body: "BeReal se estancó hacia finales de 2023. Por dos razones. Una, el formato exigía actuación en la vida real: hacerte una foto dondequiera que estuvieras, lo que es socialmente costoso. Dos, la app no tenía un bucle de engagement secundario. Una vez publicado tu BeReal, no había nada más que hacer. El Daily moomz evita ambos problemas. Votar cuesta un tap, sin actuación requerida. Y una vez votado el Daily, el feed de inicio tiene otras 50 encuestas para retenerte. El Daily es un gancho hacia un uso más amplio, no un ritual aislado. Los datos internos, con el escepticismo apropiado, sugieren que la retención al día siguiente supera de forma medible a las configuraciones sin Daily.",
      },
    ],
    polls: [
      { q: "¿Votas el Daily moomz todos los días?", options: ["Sí", "Con frecuencia", "A veces", "Nunca"] },
      { q: "¿BeReal era mejor o peor que el Daily?", options: ["Mejor", "Peor", "Igual", "Nunca usé BeReal"] },
      { q: "¿Un ritual diario te hace volver a la app?", options: ["Sí", "No", "Depende", "Solo por la mañana"] },
      { q: "¿Mejor momento para publicar el Daily?", options: ["Medianoche UTC", "9h local", "18h local", "Aleatorio"] },
      { q: "¿Cuánto debería durar el Daily?", options: ["12h", "24h", "48h", "Toda la semana"] },
      { q: "¿Mejor 1 Daily o 3?", options: ["1", "3", "Sin preferencia", "5 incluso"] },
      { q: "¿Qué formato te hace volver?", options: ["Daily", "Live", "Batallas", "Torneos"] },
      { q: "¿Te pones recordatorio para el Daily?", options: ["Sí", "No", "A veces", "No me lo pierdo nunca"] },
    ],
    faq: [
      { q: "¿Cómo se selecciona el Daily?", a: "El algoritmo elige entre las encuestas más discutidas de las 24 horas anteriores, filtrando por controversia (cerca del 50/50) y amplitud temática." },
      { q: "¿Por qué a medianoche UTC?", a: "Compromiso global. Ningún huso horario es perfecto. UTC mantiene una referencia estable y la comunidad se adapta. Wordle y BeReal usaban el mismo enfoque." },
      { q: "¿Puedo votar en el Daily de ayer?", a: "No. La escasez es parte del diseño. Los Dailies expirados se pueden consultar, pero la votación está cerrada." },
      { q: "¿Y si el Daily es aburrido?", a: "Pasa y es una lástima. El algoritmo mejora pero no es perfecto. Siempre puedes lanzar tu propia encuesta mientras tanto." },
      { q: "¿Por qué no varios Dailies?", a: "La escasez es la que impulsa el bucle de engagement. Multiplicar los eventos diluye su poder. Uno es intencional." },
    ],
    related: ["gen-z-polls-2026-trend-report-es", "viral-poll-formats-es", "polls-engagement-stats-es"],
    updatedAt: today,
  },

  // ============ ES 7 (entry 22) ============
  {
    slug: "how-to-write-a-good-poll-question-es",
    locale: "es",
    category: "blog",
    emoji: "✏️",
    title: "Cómo escribir una buena pregunta de encuesta (6 reglas)",
    h1: "Cómo escribir una buena pregunta de encuesta: las 6 reglas que importan",
    description: "Por qué tus encuestas no reciben votos y las 6 reglas concretas para solucionarlo. Con los errores más habituales y cómo detectarlos en las tuyas.",
    intro: "Creaste una encuesta. Cero votos. Te preguntas si el tema es malo. Probablemente no: el problema es la redacción. Una buena pregunta de encuesta es un objeto preciso con restricciones estrictas. La mayoría de las encuestas no fallan porque a nadie le importe el tema, sino porque la pregunta fue descuidada. Aquí tienes las seis reglas que convierten encuestas muertas en encuestas con engagement.",
    sections: [
      {
        h: "Regla 1: sé ultra-concreto",
        body: "Una pregunta abstracta obtiene respuestas vagas. \"¿Te gusta la música?\" ¿quién va a votar que no? \"¿Escucharías un álbum entero sin ponerlo en modo aleatorio?\" Esa sí es una pregunta real que separa comportamientos reales. La concreción obliga a los encuestados a posicionarse. Evita \"en general\", \"normalmente\", \"a menudo\". Prefiere \"este mes\", \"la última vez\", \"esta noche\". Cuanto más anclada esté la pregunta en una situación específica, más vale la respuesta. Es la primera regla del sondeo de opinión académico y la primera que ignora el 90% de las encuestas informales. La concreción no te cuesta nada y se paga sola en calidad de voto.",
      },
      {
        h: "Regla 2: 2 a 4 opciones, nunca más",
        body: "La paradoja del exceso de opciones aplica aquí. Con seis opciones, la tasa de respuesta cae un 30% respecto a tres. Con cuatro, es óptimo. Con dos, más rápido pero pierdes matiz. El punto ideal para el 95% de los casos es tres opciones. Si acabas con cinco opciones, tu pregunta es demasiado amplia: divídela en dos encuestas. Una buena pregunta responde a un solo eje. Pon a un lado el impulso de cubrir todos los casos. Siempre puedes hacer un seguimiento. La tentación de añadir \"Otro\", \"Ninguno\" o \"Depende\" es real. Resístela el 90% de las veces: esas opciones diluyen la señal y el voto.",
      },
      {
        h: "Regla 3: las opciones deben oponerse de verdad",
        body: "\"¿Pizza, pasta, hamburguesa o sushi?\" No es una encuesta, es un menú. Las opciones deben representar posiciones filosóficamente distintas, no artículos intercambiables. \"¿Pizza o sushi?\" fuerza una elección entre dos mundos. \"¿Pizza o pasta?\" fuerza una elección entre dos familias gastronómicas. Una buena encuesta revela bandos. Si tus opciones pueden ser justificadas por el mismo tipo de persona, no tienes una pregunta: tienes una encuesta de preferencia trivial que no enseña nada a nadie. La prueba: pregúntate qué dice de un votante elegir la opción A en lugar de la B. Si no puedes articular la diferencia con claridad, tus opciones no están trabajando.",
      },
      {
        h: "Regla 4: nada de preguntas trampa",
        body: "\"¿Prefieres que sea honesto o que te mienta?\" Eso es manipulador, no una encuesta. Cada opción debe ser psicológicamente elegible. Si una opción hace quedar al encuestado como un monstruo si la elige, la encuesta está sesgada. Las buenas preguntas sondean desacuerdos reales. Si la respuesta es obvia antes de votar, la encuesta no aporta información. La prueba definitiva: antes de publicar, pregúntate si tú mismo estarías genuinamente indeciso entre las opciones. Si no, vuélvela a trabajar. Las encuestas no son trampas. Son herramientas para encontrar señal. Úsalas como tales.",
      },
      {
        h: "Regla 5: título corto, contexto corto, opciones cortas",
        body: "Las encuestas se leen en 3 segundos. Si tu pregunta tiene 30 palabras, nadie la lee. Apunta a 8-12 palabras. Si necesitas contexto, ponlo en una sublínea. Las opciones deben caber en 2-4 palabras cada una. La longitud mata. Por eso Twitter/X limita las encuestas a 25 caracteres por opción: midieron el colapso de la tasa de respuesta más allá de ese límite. Sé implacable con los cortes. Cada palabra innecesaria es un voto perdido. Las mejores encuestas se leen como titulares: directas, completas, sin ambigüedad pero sin relleno.",
      },
      {
        h: "Regla 6: pruébala con una persona antes de publicar",
        body: "Léele tu pregunta a un amigo. Pídele que responda en un segundo. Si duda o pide aclaración, tu pregunta no está lista. Es el paso final que más se descuida. Los encuestadores profesionales (Pew, Gallup, IPSOS) prueban cada pregunta con 5-10 personas antes de lanzarla: se llama \"piloto\". No necesitas 10 personas para una encuesta en moomz, pero una es innegociable. El coste es 30 segundos. El beneficio es la diferencia entre una encuesta con 20 votos y una con 200.",
      },
    ],
    polls: [
      { q: "¿Cuánto tiempo tardas en formular una pregunta?", options: ["10 seg", "1 min", "5 min+", "Escribo sin pensar"] },
      { q: "¿Cuántas opciones sueles poner?", options: ["2", "3", "4", "5+"] },
      { q: "¿Pruebas la encuesta antes de publicarla?", options: ["Nunca", "A veces", "Siempre", "Rara vez"] },
      { q: "¿Error más habitual?", options: ["Demasiadas opciones", "Muy abstracto", "Pregunta trampa", "Muy larga"] },
      { q: "¿Peor formato?", options: ["Encuesta de 6 opciones", "Pregunta vaga", "Falsa elección", "Sin contexto"] },
      { q: "¿Vuelves a publicar una encuesta que fracasó?", options: ["Sí, reformulada", "No, está muerta", "A veces", "La borro"] },
      { q: "¿Las encuestas con imagen obtienen más votos?", options: ["Muchos más", "Algunos más", "Igual", "Depende"] },
      { q: "¿Emojis en la pregunta?", options: ["Aumentan votos", "Los reducen", "Neutro", "Depende"] },
    ],
    faq: [
      { q: "¿Número ideal de opciones?", a: "Tres es óptimo para la mayoría de los casos. Dos para debates binarios, cuatro como máximo si es realmente necesario." },
      { q: "¿Debo incluir siempre contexto?", a: "No. Una buena pregunta se sostiene sola. El contexto solo sirve para aclarar una situación específica, nunca para compensar una pregunta vaga." },
      { q: "¿Debo añadir un emoji?", a: "Opcional. Un emoji bien colocado puede aumentar el engagement un 10-15%. Demasiados emojis perjudican la legibilidad." },
      { q: "Mis encuestas no reciben votos, ¿por qué?", a: "Lo más probable es la redacción: demasiado vaga, demasiadas opciones o las opciones no se oponen de verdad. Reformula siguiendo las reglas anteriores." },
      { q: "¿Cuánto tiempo debería estar abierta una encuesta?", a: "En moomz, 24-72 horas captura el 90% de los votos. Más allá de eso, los retornos son mínimos. En Stories de Instagram, 24 horas es el límite." },
    ],
    related: ["two-vs-five-options-es"],
    updatedAt: today,
  },

  // ============ ES 8 (entry 23) ============
  {
    slug: "instagram-stories-poll-strategy-for-creators-es",
    locale: "es",
    category: "blog",
    emoji: "📸",
    title: "Estrategia de encuestas en Stories de Instagram para creadores (2026)",
    h1: "Encuestas en Stories de Instagram para creadores: la estrategia real",
    description: "Lo que realmente funciona para las encuestas en Stories de Instagram en 2026: timing, formato, la trampa del engagement de vanidad y cuándo abandonar el formato.",
    intro: "Las encuestas en Stories de Instagram consiguen tasas de respuesta del 60-80%. Es más alto que cualquier otro formato de la plataforma. Por eso los creadores lanzan encuestas en cada historia esperando que el engagement se multiplique. No siempre pasa. La mayoría están usando mal sus encuestas, y la alta tasa de respuesta enmascara que los datos no son útiles. Esto es cómo usar las encuestas en Stories de forma estratégica de verdad.",
    sections: [
      {
        h: "La trampa del engagement de vanidad",
        body: "Cuando preguntas \"¿publico el jersey naranja o el verde?\", recibirás cientos de votos. El resultado probablemente será 55/45. Te sentirás muy engaged. Pero no has aprendido nada y has entrenado a tu audiencia a esperar contenido binario de bajo impacto. La mayoría de los creadores se quedan atrapados aquí. La encuesta se convierte en un ritual diario que no impulsa ninguna decisión real ni aporta valor genuino. La solución: raciona tus encuestas. Una encuesta bien pensada a la semana supera a diez descuidadas. Cuando publicas, tu audiencia sabe que es una pregunta real y no relleno de engagement. El engagement de vanidad es una enfermedad real en los playbooks de creadores, y las encuestas de Stories son uno de sus principales vectores.",
      },
      {
        h: "Cuándo las encuestas se ganan su lugar",
        body: "Las encuestas funcionan cuando revelan algo que le importa a la audiencia: un veredicto sobre un producto que estás probando, una opinión sobre un invitado, un giro en una serie de contenido. Las malas encuestas son sobre ti. Las buenas son sobre ellos. \"¿Reseño el iPhone o el Pixel?\" A tu audiencia le importa porque cambia tu output. \"¿Os gustó el vídeo de ayer?\" Tu audiencia no quiere responder que sí. Usa las encuestas para darle a tu audiencia agencia sobre tu dirección, no para confirmar tus instintos. El engagement es un efecto secundario; el valor real es el input que luego usas de verdad.",
      },
      {
        h: "Timing y frecuencia que funcionan de verdad",
        body: "Hora óptima: entre las 18h y las 22h en el huso horario principal de tu audiencia. Evita publicar entre las 23h y las 7h. Los fines de semana rinden peor que entre semana para encuestas enfocadas en engagement. Frecuencia: 2-3 encuestas por semana, no a diario. Más de eso y los encuestados se fatigan. La duración de la Story es 24h forzado, pero el pico de votos llega en las primeras 4 horas. Si quieres el máximo de señal, comparte una historia de seguimiento 2 horas después de publicar la encuesta, apuntando de vuelta a ella. Esto dobla el recuento de votos para muchos creadores. Evita lanzar varias encuestas simultáneas en la misma historia: los votos se dividen y tu audiencia va a la más sencilla.",
      },
      {
        h: "Lo que las encuestas en Stories no pueden hacer",
        body: "Las encuestas en Stories no son anónimas para ti, el creador. Siempre ves quién votó qué. Esto elimina el sondeo sobre temas sensibles. No preguntes \"¿qué te parece mi nuevo corte de pelo?\" si quieres feedback honesto: tu audiencia mentirá para no herirte. Las encuestas en Stories tampoco permiten más de 2 opciones. Así que no puedes hacer \"esto o aquello o aquello otro\", no puedes pedir que ordenen, no puedes capturar matices. Para esos casos de uso necesitas herramientas externas (moomz, Strawpoll) enlazadas desde tu historia. El playbook inteligente combina: encuestas en Stories para volumen y señal casual, encuestas externas para feedback honesto y datos con múltiples opciones.",
      },
      {
        h: "La métrica sombra: conversión de voto a acción",
        body: "La mayoría de los creadores se detienen en el recuento de votos. La métrica que importa: ¿cuántas personas que votaron hicieron luego la acción que querías? Si tu encuesta era \"¿qué vídeo primero?\" y votaron 5.000 personas, pero solo 200 vieron el vídeo resultante, tu engagement de encuesta fue teatro. El ratio real (voto-a-acción) suele estar por debajo del 10% en encuestas de contenido y por debajo del 5% en encuestas de producto. Conocer tu número te permite calibrar. Si obtienes 1.000 votos y 300 acciones, tu audiencia está activamente comprometida. Si obtienes 1.000 votos y 10 acciones, tienes un problema de engagement de vanidad. Rastrea esto durante 30 días y verás la verdad.",
      },
    ],
    polls: [
      { q: "¿Con qué frecuencia publicas encuestas en Stories?", options: ["A diario", "Semanalmente", "Mensualmente", "Rara vez"] },
      { q: "¿Cuándo llegan más votos?", options: ["Primera hora", "Primeras 4h", "Primeras 12h", "Repartidos"] },
      { q: "¿Mejor momento para publicar una encuesta?", options: ["Mañana", "Mediodía", "Tarde-noche", "Noche"] },
      { q: "¿Las encuestas con imagen funcionan mejor?", options: ["Muchos más votos", "Igual", "Menos", "Depende"] },
      { q: "¿Stories o herramienta externa?", options: ["Stories", "Externa", "Las dos", "Externa anónima"] },
      { q: "¿Actúas según los resultados?", options: ["Siempre", "Con frecuencia", "A veces", "Casi nunca"] },
      { q: "¿Tamaño de audiencia para buenas encuestas?", options: ["Menos de 1k", "1k-10k", "10k-100k", "100k+"] },
      { q: "¿Las encuestas aumentan el alcance?", options: ["Mucho", "Un poco", "Igual", "Lo reducen"] },
    ],
    faq: [
      { q: "¿Las encuestas en Stories son realmente anónimas?", a: "No. El creador siempre ve quién votó qué. Es el mayor malentendido sobre el formato." },
      { q: "¿Cuántas encuestas por semana?", a: "2-3 encuestas estratégicas superan a las diarias descuidadas. La calidad se acumula; la frecuencia diluye." },
      { q: "¿Por qué mis encuestas rinden poco?", a: "Suele ser porque están demasiado centradas en ti, son demasiado descuidadas o se publican en horarios de bajo engagement. Reformula para dar agencia a tu audiencia." },
      { q: "¿Encuestas en Stories vs encuestas en Reels?", a: "Las de Stories ganan en engagement (60-80% de respuesta). Las de Reels rinden mal (menos del 15%) porque los espectadores son pasivos." },
      { q: "¿Puedo conseguir feedback honesto en Stories?", a: "No de forma fiable. El formato no es anónimo. Para input honesto sobre temas sensibles, enlaza a una herramienta anónima externa." },
    ],
    related: ["instagram-story-poll-best-practices-es"],
    updatedAt: today,
  },

  // ============ ES 9 (entry 24) ============
  {
    slug: "tinder-vs-hinge-vs-bumble-the-real-poll-es",
    locale: "es",
    category: "blog",
    emoji: "💕",
    title: "Tinder vs Hinge vs Bumble: la estrategia real de encuestas",
    h1: "Tinder vs Hinge vs Bumble: qué encuesta usar en cada app",
    description: "Por qué la misma encuesta fracasa en Tinder y arrasa en Hinge. Estrategia por app de citas con ejemplos que funcionan de verdad en 2026.",
    intro: "Todas las apps de citas han acabado integrando alguna forma de encuesta. Tinder tiene sus prompts. Bumble tiene los compliments. Hinge tiene Voice Prompts y encuestas integradas. Pero cada una premia un tipo de contenido distinto, y una encuesta que arrasa en Tinder muere en Hinge. Aquí tienes la estrategia real, app por app, con el razonamiento.",
    sections: [
      {
        h: "Tinder: volumen y filtrado rápido",
        body: "Tinder es la app del swipe veloz. Atención media en un perfil: 3 segundos. En esa ventana, una encuesta que funciona es ultra-corta, ultra-divisiva e idealmente graciosa. \"¿Piña en la pizza?\" \"¿Sushi o tacos?\" \"¿Playa o montaña?\" No son preguntas profundas: son clasificación cultural a hiperveleocidad. El objetivo: eliminar matches fundamentalmente incompatibles en 2 segundos. Las encuestas profundas en Tinder fallan. Nadie lee tres líneas. Restricciones para una encuesta de Tinder: 6 palabras máximo en la pregunta, 2-3 opciones de 2 palabras cada una. Si no cabe ahí, no es una encuesta de Tinder, es una de Hinge colocada donde no toca.",
      },
      {
        h: "Bumble: engagement conversacional",
        body: "Bumble obliga a la mujer a enviar el primer mensaje (en parejas heterosexuales). La encuesta se convierte en un salvavidas: una forma de abrir más allá del \"hola\". Las encuestas que funcionan en Bumble son conversation starters inteligentes, no gags de swipe. \"¿Un viaje a Lisboa dentro de dos meses es demasiado ambicioso?\" abre una discusión real. \"¿Casarse a los 25 o a los 35?\" exige reflexión de verdad. La usuaria de Bumble espera contenido con sustancia, no gags binarios. Una encuesta que funciona en Tinder puede ser una mala encuesta de Bumble porque es demasiado ligera. El perfil demográfico de la audiencia tiende a ser algo más mayor e intencional. Calibra en consecuencia.",
      },
      {
        h: "Hinge: intencional y revelador de identidad",
        body: "Hinge se posiciona como \"diseñada para ser borrada\": para relaciones serias. La audiencia tiende a tener entre 25 y 35 años y un nivel de estudios más alto de media. Las encuestas que funcionan aquí revelan identidad. \"¿Seis meses de sabático, qué harías?\" \"¿El arte más sobrevalorado según tú?\" \"¿El peor consejo de tus padres?\" Estas preguntas dicen quién eres realmente, no solo cuáles son tus preferencias. Hinge añadió encuestas nativas en 2023. Para triunfar: haz una pregunta que revele una posición real. No \"¿café o té?\" sino \"¿café cada mañana, sí o paso?\" El contexto lo cambia todo. Los usuarios de Hinge se enganchan al contenido con fondo y pasan de largo el relleno obvio.",
      },
      {
        h: "Errores habituales en las tres apps",
        body: "Error 1: demasiado genérico, no le habla a nadie ni clasifica a nadie. Error 2: demasiado íntimo demasiado pronto, resulta invasivo (especialmente en Bumble). Error 3: encuesta que te hace parecer un troll. Si tu única encuesta es \"¿piña en la pizza?\", estás demostrando que eres vago. Error 4: encuesta que no invita a responder. Una buena encuesta de citas debe generar un mensaje de vuelta. \"¿Playa o montaña?\" La respuesta \"montaña\" debería darte ganas de preguntar \"¿cuál?\" o \"¿qué haces allí?\". Si tu encuesta es demasiado cerrada, la conversación muere ahí. Piensa siempre en el mensaje de seguimiento que quieres recibir.",
      },
      {
        h: "El hack de la encuesta externa",
        body: "Muchos perfiles de citas serios usan ahora encuestas externas (moomz, Strawpoll) como gancho en la bio. \"Vota en mi dilema del fin de semana antes de hacer swipe → moomz.com/abcde\". Esto esquiva las restricciones nativas de las apps y crea engagement antes del match. Convierte el perfil de citas en una mini pieza de contenido. Advertencia: da un toque de \"influencer\" que aleja a algunos matches. Funciona si tu perfil ya va en esa línea, pero perjudica si quieres un posicionamiento más discreto. La autoconciencia sobre tu propia marca importa aquí. El hack no es universal: es una jugada, no una fórmula.",
      },
    ],
    polls: [
      { q: "¿Usas encuestas en tus bios de citas?", options: ["Sí", "No", "Lo he pensado", "Es cringe"] },
      { q: "¿Mejor primer mensaje con encuesta?", options: ["Gracioso", "Serio", "Provocador", "Pregunta trampa"] },
      { q: "¿App de citas más amigable con las encuestas?", options: ["Tinder", "Bumble", "Hinge", "Ninguna"] },
      { q: "¿Respondes a encuestas en perfiles de citas?", options: ["Con frecuencia", "A veces", "Nunca", "Según la encuesta"] },
      { q: "¿Encuestas game over?", options: ["Demasiado íntimas", "Demasiado genéricas", "Choque político", "Ninguna"] },
      { q: "¿Encuestas anónimas sobre un match antes de la cita?", options: ["Sí, a mis amigos", "No, es raro", "A veces", "Nunca"] },
      { q: "¿Tinder, Bumble o Hinge?", options: ["Tinder", "Bumble", "Hinge", "Ninguna"] },
      { q: "¿Confías en las encuestas de citas?", options: ["Sí", "No", "Depende", "Siempre mienten"] },
    ],
    faq: [
      { q: "¿Las encuestas ayudan realmente a hacer match?", a: "Sí: una encuesta bien colocada puede triplicar la tasa de mensajes post-match según datos autoreportados por coaches de citas. La calidad importa más que la presencia." },
      { q: "¿Qué encuesta para Tinder?", a: "Corta, divisiva, graciosa. No más de 6 palabras. El objetivo es clasificar, no conversar." },
      { q: "¿Qué encuesta para Hinge?", a: "Reveladora de identidad, más tranquila, con más fondo. La audiencia de Hinge espera calidad, no gags." },
      { q: "¿Bumble permite encuestas externas?", a: "Sí, vía enlace en bio o mensaje. No hay restricción directa." },
      { q: "¿Es cringe poner una encuesta en la bio?", a: "No necesariamente, pero con medida. Demasiadas encuestas = persona \"influencer\" que puede alejar a matches más discretos." },
    ],
    related: ["dating-poll-app-trend-es", "polls-as-dating-tool-es"],
    updatedAt: today,
  },

  // ============ ES 10 (entry 25) ============
  {
    slug: "gen-z-takes-on-marriage-money-cancel-culture-es",
    locale: "es",
    category: "blog",
    emoji: "💍",
    title: "La Gen Z sobre el matrimonio, el dinero y la cancel culture (encuestada)",
    h1: "La Gen Z sobre el matrimonio, el dinero y la cancel culture (con datos reales)",
    description: "La opinión real de la Gen Z sobre el matrimonio, el dinero y la cancel culture, basada en datos de encuestas agregadas. Los números no coinciden con los titulares.",
    intro: "Los análisis sobre la Gen Z suelen equivocarse porque los escriben millennials o gente mayor. La posición real de la Gen Z en las grandes preguntas sociales se puede medir: agregando respuestas de encuestas sobre los propios temas. Esto es lo que dicen los datos sobre tres asuntos que generan más titulares calientes: el matrimonio, el dinero y la cancel culture. La realidad es más matizada de lo que argumenta cualquiera de los dos bandos.",
    sections: [
      {
        h: "Matrimonio: no muerto, solo aplazado",
        body: "Los analistas repiten que la Gen Z no quiere casarse. Los datos dicen otra cosa. Cuando se les encuesta, el 68% de los encuestados Gen Z dicen que quieren casarse en algún momento. El cambio es el timing, no la aspiración. La edad media deseada para casarse subió de los 26 años (millennials) a los 31 (Gen Z). Las razones son prácticas: mercado inmobiliario, consolidación de la carrera profesional, el deseo de \"haber vivido primero\". La institución no se rechaza: se reenmarca como un hito para más adelante en la vida. Donde se equivocan los analistas: confunden el retraso con el abandono. Las tasas de matrimonio entre los que tienen 35 años probablemente se acercarán mucho más a las normas históricas de lo que los datos actuales de los de 25 sugieren.",
      },
      {
        h: "Dinero: no anti-ahorro, anti-fingir",
        body: "Los titulares afirman que la Gen Z no ahorra. Realidad: el 71% de los encuestados Gen Z dice que ahorra activamente cuando puede. La diferencia está en para qué ahorran. Los millennials ahorraban para casas que progresivamente quedaron fuera de su alcance. La Gen Z ahorra para experiencias, colchones de seguridad y metas a más corto plazo. La caricatura del \"YOLO spending\" aplica a un subgrupo pequeño. La mayoría de la Gen Z es muy consciente de la precariedad financiera: vieron las consecuencias de 2008, el colapso de 2020, el congelamiento del mercado inmobiliario de 2024. El cálculo de riesgo cambió. No son anti-ahorro; son escépticos ante la planificación a largo plazo en un sistema que no deja de romper las curvas de rentabilidad asumidas.",
      },
      {
        h: "Cancel culture: más matizada de lo que cualquier bando admite",
        body: "Los hot takes afirman que la Gen Z inventó la cancel culture o que la rechazó por completo. Ambos están equivocados. Los datos de encuestas muestran: el 58% de la Gen Z cree que las figuras públicas deben enfrentar consecuencias por declaraciones dañinas del pasado. El 62% también cree que la mayoría de las cancelaciones públicas han ido demasiado lejos. Los mismos encuestados avalan ambas cosas. No es contradicción: es una postura sofisticada. El principio general (rendición de cuentas) se mantiene; la implementación específica (justicia de internet a modo de turba) se critica. La mayoría de la Gen Z reclama una cultura de responsabilidad más medida, no su desmantelamiento. Los analistas que escriben \"la Gen Z mató/salvó la cancel culture\" se pierden la posición real: el marco está respaldado, la ejecución es lo que se cuestiona.",
      },
      {
        h: "Clima y política: acción sin confianza",
        body: "El 73% de los encuestados Gen Z sitúa el clima como una prioridad política de primer orden. Pero solo el 14% confía en que los políticos electos actúen sobre ello. Esta brecha de confianza explica el auge de la política de acción directa, la ayuda mutua y los boicots de consumidores en la Gen Z. No son apolíticos: están desencantados con el mecanismo específico (la política electoral) pero siguen comprometidos con el problema. Este patrón se repite en la mayoría de los temas: alta relevancia del asunto, baja confianza institucional. Cualquier analista que enmarque esto como \"Gen Z apática\" está leyendo los datos al revés. El compromiso es real; los canales son diferentes.",
      },
      {
        h: "Sexo y relaciones: menos de lo que dicen los titulares",
        body: "Los datos de encuestas muestran consistentemente que la Gen Z reporta menos actividad sexual que los millennials de la misma edad. Número de parejas a los 25: bajando. Edad media de la primera experiencia sexual: subiendo. Varias explicaciones propuestas: móviles, fatiga de apps de citas, recalibración post-pandemia, menores tasas de consumo de alcohol y salidas nocturnas. La tendencia es real, pero el pánico moral que la rodea no está justificado. La Gen Z no fracasó en la intimidad: está recalibrando el ritmo de las relaciones de maneras que pueden resultar más sanas a largo plazo. El encuadre de \"generación sin sexo\" es reduccionista. El encuadre honesto: más lenta, más intencional y más aislada, con efectos mixtos.",
      },
    ],
    polls: [
      { q: "¿Quieres casarte?", options: ["Sí", "No", "Quizás", "Ya estoy casado/a"] },
      { q: "¿Mejor edad para casarse?", options: ["25-28", "29-32", "33-36", "Nunca"] },
      { q: "¿Ahorras dinero activamente?", options: ["Sí", "Lo intento", "No", "No puedo"] },
      { q: "¿La cancel culture está sobredimensionada?", options: ["Sí, mucho", "Un poco", "No, es necesaria", "Mixto"] },
      { q: "¿Confías en los políticos sobre el clima?", options: ["Sí", "No", "Mixto", "Depende del país"] },
      { q: "¿Acción directa mejor que votar?", options: ["Sí", "No", "Los dos", "Solo votar"] },
      { q: "¿El pánico sexual de la Gen Z es real?", options: ["Sí", "No", "Exagerado", "Depende del país"] },
      { q: "¿Casarse a los 30 vs a los 25?", options: ["30 es mejor", "25 es mejor", "Igual", "Nunca"] },
    ],
    faq: [
      { q: "¿La Gen Z quiere casarse de verdad?", a: "Sí: el 68% lo dice cuando se le encuesta. El cambio es el timing (mediana de 31 vs 26), no el rechazo." },
      { q: "¿La Gen Z es realmente mala con el dinero?", a: "No. El 71% ahorra cuando puede. El encuadre del \"YOLO spending\" aplica a una minoría vocal, no a la mediana." },
      { q: "Cancel culture: ¿muerta o viva?", a: "Reformada. La mayoría de la Gen Z apoya los principios de responsabilidad mientras critica la ejecución a modo de turba de internet. Ambas posiciones se sostienen simultáneamente." },
      { q: "¿La Gen Z es apática con la política?", a: "No: alto compromiso con los temas, baja confianza institucional. Actúan a través de boicots, acción directa y ayuda mutua, no mecanismos electorales." },
      { q: "¿La \"Gen Z sin sexo\" es real?", a: "Tendencia real, encuadre exagerado. Más lenta e intencional, no fracasada." },
    ],
    related: ["gen-z-poll-culture-es"],
    updatedAt: today,
  },

  // ============ ES 11 (entry 26) ============
  {
    slug: "the-best-bachelorette-poll-templates-es",
    locale: "es",
    category: "blog",
    emoji: "👰‍♀️",
    title: "Las mejores encuestas para despedidas de soltera (divertidas, no cringe)",
    h1: "Mejores encuestas para despedidas de soltera: divertidas, reales, nunca cringe",
    description: "Las encuestas para despedidas que funcionan de verdad. Graciosas sin ser crueles, profundas sin ser invasivas. Con los temas que hay que evitar sí o sí.",
    intro: "Estás organizando la despedida de soltera de tu mejor amiga. Sabes que vas a necesitar encuestas de grupo. También sabes que el 80% de lo que hay en Pinterest es o cringe, o demasiado suave, o directamente raro. Aquí tienes las plantillas de encuesta que funcionan de verdad, y el criterio para distinguirlas.",
    sections: [
      {
        h: "El test de la tía",
        body: "Antes de lanzar cualquier encuesta en una despedida, aplica este filtro. Imagina a la tía más conservadora de la novia (la que estará sí o sí en la boda) leyendo la pregunta. ¿Se desmaya? ¿Arquea una ceja con una sonrisa? Buscas la ceja arqueada. No el desmayo. La mayoría de las plantillas de Pinterest caen en el desmayo: demasiado sexuales, demasiado íntimas, vagamente degradantes. Otras son de las de ceja torcida en el mal sentido: aburridísimas. El punto dulce es la sonrisa genuina. Una encuesta salvaje debe ser específica para la novia, no genéricamente guarrilla. Una pregunta hecha a su medida vale más que cincuenta sacadas de una lista.",
      },
      {
        h: "10 encuestas para despedida que arrasan",
        body: "1) ¿La peor cita que nos ha contado? 2) ¿El ex que casi llega al altar (según nosotras)? 3) ¿Lo más caro que se ha comprado y se arrepiente? 4) Si pudiera borrar una noche de su vida, ¿cuál sería? 5) ¿Su playlist de Spotify más vergonzosa? 6) ¿El mote de cuando era pequeña que su madre le sigue poniendo? 7) ¿La mentira más gorda que ha dicho en el trabajo? 8) ¿Su crush imposible de la época de estudiante? 9) ¿El peor conjunto de boda que le ha elegido a alguien? 10) ¿El secreto que nos hizo jurar no repetir nunca (no lo repitas: solo encuesta quién lo sabe)? Cada una revela, ninguna humilla. Diseñadas para risas y conversaciones reales, no para un roast.",
      },
      {
        h: "Encuestas según el momento de la noche (la secuencia real)",
        body: "Lanza las encuestas por fases. Hora del cóctel: encuestas de identidad ligeras (\"más probable que lleve blanco en la boda\"). Cena: recuerdos compartidos (\"nuestro peor viaje juntas\"). Última hora: punto salvaje ligero (\"lo más gracioso que se ha puesto la novia\"). Después de medianoche: encuesta de cierre (\"mejor momento de esta noche\"). No lances 15 encuestas en una hora. Tampoco guardes todo lo salvaje para el final: intégralas con ritmo. Las mejores despedidas tienen un arco narrativo, y las encuestas son los beats de esa historia. Si las lanzas demasiado rápido o en tropel, entrenas al grupo a saltárselas. Si lanzas muy pocas, la energía decae.",
      },
      {
        h: "Lo que hay que evitar absolutamente",
        body: "No encuestes nunca sobre: (1) contenido sexual específico (humillante y fuera de lugar), (2) exes en presencia de la nueva pareja (crea drama), (3) deudas o problemas de dinero (muy íntimo), (4) decisiones sobre la familia política (político), (5) temas de salud (discapacidad, adicción, salud mental). El criterio común: cualquier cosa que cree un riesgo real de daño duradero tras la noche. La despedida debe reforzar el vínculo, no generar drama. Si dudas entre salvaje y raro, elige salvaje. Si dudas entre raro y amable, elige amable. Las buenas siempre se inclinan hacia lo amable aunque sean graciosas.",
      },
      {
        h: "Formato técnico: encuestas anónimas en grupo",
        body: "El formato que mejor funciona: encuestas anónimas compartidas en un grupo privado de WhatsApp durante el evento. Nadie sabe quién respondió qué, lo que maximiza la honestidad y las carcajadas. moomz y Strawpoll funcionan bien para esto. Evita las encuestas de Instagram Stories: no son anónimas, son demasiado públicas y destruyen el ambiente. Lanza 5-6 encuestas espaciadas durante el evento, no 30 de golpe. Reserva una encuesta de cierre para el final: \"mejor momento de esta noche\" con los 4 planes del evento como opciones. Esto le da a la noche un final limpio y un recuerdo compartido que todo el mundo puede capturar en pantalla.",
      },
    ],
    polls: [
      { q: "¿Duración ideal de una despedida de soltera?", options: ["1 día", "Fin de semana", "3-4 días", "Una semana entera"] },
      { q: "¿Actividad estrella?", options: ["Spa", "Noche de fiesta", "Escape room", "Clase de cócteles"] },
      { q: "¿Ambiente de la despedida?", options: ["Desmadre", "Elegante", "Tranquila", "Mix"] },
      { q: "¿Preguntas a la novia antes?", options: ["Sí", "Sorpresa total", "Solo los vetos", "Media sorpresa"] },
      { q: "¿Peor momento posible en una despedida?", options: ["Stripper", "Actividad fallida", "Pelea", "Demasiado alcohol"] },
      { q: "¿Presupuesto por persona?", options: ["Menos de 100€", "100-300€", "300-500€", "500€+"] },
      { q: "¿Número de invitadas?", options: ["4-6", "6-10", "10-15", "15+"] },
      { q: "¿Todas votan o solo las organizadoras?", options: ["Todas", "Solo las organizadoras", "La novia veta", "Sin encuestas"] },
    ],
    faq: [
      { q: "¿Cuántas encuestas en una despedida?", a: "5-8 repartidas durante el evento. Más de eso cansa; menos te pierdes momentos colectivos." },
      { q: "¿Anónima o con nombre?", a: "Anónima. Con nombre las respuestas se vuelven sosas. El formato solo funciona de verdad cuando nadie puede ser identificado." },
      { q: "¿Encuestas que pueden arruinar el ambiente?", a: "Todo lo que toque a exes con la nueva pareja presente, al dinero o a la salud mental. Evítalas." },
      { q: "¿Herramienta recomendada?", a: "moomz para anonimato y múltiples opciones, Strawpoll para simplicidad. Evita Instagram Stories (no es anónimo)." },
      { q: "¿Incluir a la novia en las encuestas?", a: "Sí para las encuestas reveladoras sobre ella. No para las encuestas de recuerdos de grupo en las que no participa." },
    ],
    related: [],
    updatedAt: today,
  },

  // ============ ES 12 (entry 27) ============
  {
    slug: "why-your-polls-get-zero-votes-and-how-to-fix-it-es",
    locale: "es",
    category: "blog",
    emoji: "📉",
    title: "Por qué tus encuestas reciben cero votos (y cómo arreglarlo)",
    h1: "Por qué tus encuestas reciben cero votos y las 8 soluciones que funcionan de verdad",
    description: "Los 8 motivos por los que tus encuestas fracasan y el diagnóstico para arreglarlos. Más el error del que nadie habla y que mata el 60% de las encuestas.",
    intro: "Publicaste una encuesta. Tres horas después: cero votos. Empiezas a pensar que tus seguidores te odian. Probablemente no. El problema casi siempre está en la propia encuesta, y es diagnosticable. Aquí tienes los ocho motivos más habituales por los que las encuestas mueren, con soluciones concretas.",
    sections: [
      {
        h: "1. Tu pregunta es demasiado abstracta",
        body: "\"¿Cuál es tu color favorito?\" Silencio. ¿Por qué? Porque la pregunta es tan abierta que no fuerza a tomar posición. Compárala con \"¿De qué color es la funda de tu móvil?\": concreta, rápida, real. Las preguntas abstractas parecen de bajo impacto porque no hacen referencia a nada específico. Solución: ancla cada pregunta a una situación, momento u objeto específico. \"Esta semana\" supera a \"en general\". \"Tu trabajo actual\" supera a \"el trabajo\". \"Esta noche\" supera a \"las noches\". Cuanto más pequeña sea la porción de realidad, mayor el engagement, porque lo concreto hace que votar sienta que tiene sentido.",
      },
      {
        h: "2. Demasiadas opciones",
        body: "Seis opciones reducen la tasa de respuesta un 30% respecto a tres. El coste cognitivo de evaluar cada opción es real. La mayoría de las encuestas no necesitan más de tres. Si te ves obligado a poner siete, estás haciendo dos encuestas en una. Divídela. La regla más infravalorada del sondeo: resta hasta que quitar más dañaría la pregunta. La mayoría de los encuestadores aficionados añaden opciones intentando ser exhaustivos; el resultado es confusión. Los profesionales (Pew, IPSOS) usan rutinariamente 3-4 opciones para datos de opinión de alta calidad. Imítalos.",
      },
      {
        h: "3. Tus opciones no se oponen",
        body: "\"Pizza, pasta, hamburguesa, ensalada\": estas opciones no separan a nadie de forma significativa. La mayoría de la gente está bien con las cuatro. Las opciones deben representar posiciones distintas, no artículos intercambiables. Prueba: pregúntate qué dice de un votante elegir la opción A y no la B. Si no puedes articular la diferencia con claridad, tus opciones no están trabajando. Reformula hasta que cada opción implique un tipo de votante diferente.",
      },
      {
        h: "4. La publicaste en el peor momento",
        body: "Las encuestas publicadas entre las 23h y las 7h rinden un 60% peor. Los fines de semana caen un 30% respecto a entre semana para encuestas enfocadas en engagement. La ventana óptima: entre las 18h y las 22h en el huso horario principal de tu audiencia. Los domingos por la tarde son especialmente fuertes: el efecto \"scroll del domingo\". Si tu audiencia es global, publica a la hora que captura el huso horario más activo. El mal timing puede hundir una gran encuesta. El tiempo es la palanca más infravalorada, y es gratuita.",
      },
      {
        h: "5. Sin imagen, sin emoji, sin contraste visual",
        body: "Una encuesta con imagen recibe entre 1,5 y 2 veces más votos que una solo de texto. Un emoji en la pregunta añade entre un 10 y un 15% más. No son preferencias estéticas: son señales de parada en un feed de scroll infinito. Sin gancho visual, tu encuesta compite con todo lo demás y pierde. Añadir aunque sea un emoji básico a cada opción es una solución de 30 segundos que siempre da resultado. En plataformas que permiten imágenes (moomz, Stories), úsalas. No publiques encuestas solo de texto en 2026 a menos que te hayas ganado la paciencia lectora de tu audiencia.",
      },
      {
        h: "6. La pregunta es demasiado larga",
        body: "Si tu pregunta tiene más de 15 palabras, la mitad de tu audiencia pasa de largo. La ventana de lectura de 3 segundos es real. Sé implacable. Corta adjetivos. Corta el contexto. Corta \"estaba pensando\" y \"qué opináis\". La pregunta debería aterrizar en 5-10 palabras idealmente. Si realmente necesitas contexto, ponlo en una sublínea o en un seguimiento. La longitud es el mayor asesino del engagement en encuestas en plataformas con mucho texto. La brevedad no es pereza: es profesionalidad en el formato.",
      },
      {
        h: "7. Aún no tienes audiencia comprometida",
        body: "A veces la encuesta está bien y tu audiencia es demasiado pequeña o demasiado silenciosa. La solución no está en la encuesta: está en construir audiencia. Si tienes 200 seguidores y solo 30 activos, espera entre 5 y 15 votos máximo en cualquier encuesta, independientemente de la calidad. Construye audiencia primero, luego encuesta. No te quemes intentando pulir encuestas cuando el problema está más arriba en el funnel. Especialmente: reconstruye el engagement publicando contenido que no sea encuestas durante 2-3 semanas y luego vuelve. La fatiga de audiencia es real.",
      },
      {
        h: "8. El asesino del que nadie habla: tus últimas 5 encuestas eran aburridas",
        body: "Tu audiencia tiene memoria. Si tus últimas cinco encuestas eran del tipo \"¿cuál es tu [cosa] favorita?\" en modo mediocre, ya se han entrenado para saltarse las tuyas. Ni siquiera una gran encuesta recupera el engagement de inmediato: necesitas 2-3 encuestas fuertes para reentrenas la atención de tu audiencia. La solución: tómate un descanso, publica contenido sin encuestas, vuelve con una que sorprenda de verdad. El momentum de audiencia es algo real y medible. Quémalo descuidadamente y recuperarlo lleva semanas. La mayoría de los creadores no se dan cuenta de que está pasando porque no lo rastrean.",
      },
    ],
    polls: [
      { q: "¿Cuántos votos sueles tener en tus encuestas?", options: ["0-5", "5-20", "20-100", "100+"] },
      { q: "¿Por qué crees que fracasan tus encuestas?", options: ["Mal timing", "Mala pregunta", "Audiencia pequeña", "Fatiga de audiencia"] },
      { q: "¿Hora óptima para publicar?", options: ["Mañana", "Mediodía", "Tarde-noche", "Noche"] },
      { q: "¿Mejor número de opciones?", options: ["2", "3", "4", "5+"] },
      { q: "¿Una imagen en la encuesta marca diferencia?", options: ["Mucha", "Algo", "Ninguna", "La perjudica"] },
      { q: "¿Publicas encuestas semanalmente?", options: ["A diario", "Semanalmente", "Mensualmente", "Rara vez"] },
      { q: "¿Tema que siempre funciona?", options: ["Comida", "Drama", "Dinero", "Estilo de vida"] },
      { q: "¿Peor hora para publicar?", options: ["Noche", "Mañana", "Fin de semana", "Cualquiera"] },
    ],
    faq: [
      { q: "Mi encuesta tiene 0 votos, ¿la borro?", a: "Espera 6 horas. Si sigue en 0, bórrala y reformúlala. La encuesta en sí es el problema el 80% de las veces." },
      { q: "¿Cuánto tiempo esperar para que lleguen votos?", a: "El 90% de los votos llegan en las primeras 24 horas. Más allá de 72 horas, espera un engagement mínimo." },
      { q: "¿Debo volver a publicar una encuesta fallida?", a: "Sí, pero reformulada. Volver a publicar exactamente la misma encuesta transmite desesperación. Mejórala y repúblicala en 1-2 semanas." },
      { q: "¿Importa más el tamaño de la audiencia que la calidad?", a: "Ambos importan. Una audiencia grande con malas encuestas sigue teniendo tasas bajas. Una audiencia pequeña con grandes encuestas supera a una grande con malas." },
      { q: "¿Cómo sé si mi audiencia está fatigada?", a: "Rastrea el recuento de votos en tus últimas 10 encuestas. Un descenso sostenido = fatiga. Tómate un descanso y vuelve con contenido sorpresa." },
    ],
    related: ["how-to-write-a-good-poll-question-es", "two-vs-five-options-es", "polls-engagement-stats-es"],
    updatedAt: today,
  },

  // ============ ES 13 (entry 28) ============
  {
    slug: "nfl-watch-party-polls-that-don-t-suck-es",
    locale: "es",
    category: "blog",
    emoji: "🏈",
    title: "Encuestas para ver la Super Bowl que no son un rollo",
    h1: "Encuestas para ver partidos de fútbol americano que no dan vergüenza",
    description: "Encuestas para la noche de partido que funcionan aunque tus invitados no sepan nada de fútbol. Con las apuestas de quiniela que engancha hasta a los que van por la comida.",
    intro: "Estás organizando una fiesta para ver la Super Bowl. O un partido cualquiera del domingo. La mezcla: la mitad son fans acérrimos del fútbol americano, la otra mitad está ahí por la comida y el show del descanso. Un mal set de encuestas perjudica a uno de los grupos. Un buen set mantiene a todos enganchados. Así es como construir encuestas que no sean un rollo para ninguno de los dos bandos.",
    sections: [
      {
        h: "El principio de la audiencia mixta",
        body: "La mayoría de las fiestas de partido tienen una asimetría de audiencia real. Los fans hardcore quieren encuestas sobre predicciones del partido y estadísticas. Los espectadores casuales quieren encuestas sobre anuncios, el show del descanso y la comida. Un set de encuestas solo de fútbol aleja a la mitad de la sala. Un set solo de comida aleja a la otra mitad. La solución: alterna. Por cada dos encuestas de fútbol, lanza una que no sea de fútbol. Esto crea ritmo e inclusión. Los fans agradecen que los casuales estén enganchados; los casuales agradecen no recibir una cátedra toda la noche. Las encuestas para audiencias mixtas son una habilidad en sí misma.",
      },
      {
        h: "Encuestas tipo quiniela (el caballo de batalla)",
        body: "Las apuestas propias de las quinielas deportivas (\"¿el primer tanto será un touchdown o un gol de campo?\") se traducen perfectamente a encuestas de fiesta de partido, e incluyen a los dos grupos. Ejemplos: ¿Tipo de primer tanto? ¿Cara o cruz en el sorteo inicial? ¿Color de la Gatorade que le echan al entrenador ganador? ¿Duración del himno nacional? ¿Primera canción del show del descanso? Estas encuestas permiten a los casuales hacer suposiciones y a los fans usar su cerebro de estadísticas. Lanza una antes del inicio, una en el descanso y una en el cuarto período. Otorga puntos y corona un \"campeón de la quiniela\" al final. La competición ligera añade engagement sin exigir profundos conocimientos de fútbol.",
      },
      {
        h: "Encuestas de anuncios y show del descanso",
        body: "Los anuncios de la Super Bowl son el 40% del motivo por el que los casuales ven el partido. No los ignores. Encuestas durante los descansos publicitarios: ¿mejor anuncio de la primera mitad? ¿peor anuncio? ¿el anuncio más repetido? Para el show del descanso: ¿mejor canción? ¿mejor cambio de vestuario? ¿cumplió las expectativas? Los casuales dominan estas encuestas, que es el punto: son los expertos durante ese segmento. Lánzalas en tiempo real en Stories o con un enlace moomz. La votación se cierra 5 minutos después de que termine el anuncio o el show, forzando el engagement en directo. También es cuando los invitados más charlan entre sí: las encuestas catalizan la conversación.",
      },
      {
        h: "Encuestas de comida y snacks (en serio, funcionan)",
        body: "Sí, las encuestas de comida durante una fiesta de partido funcionan. \"¿Mejor snack de la mesa ahora mismo?\" \"¿Cuyo dip está ganando?\" \"¿La comida de partido más sobrevalorada?\" Estas encuestas parecen de bajo impacto pero generan un engagement enorme. La razón: todo el mundo tiene una opinión, no hace falta ningún conocimiento especializado, y el contexto físico inmediato hace que votar sea divertido. También resuelven el incómodo \"no sé suficiente fútbol\" para los nuevos invitados. Lanza dos encuestas de comida por fiesta como máximo: más se vuelve absurdo. Una al principio (cuando la comida está recién hecha) y otra en el tercer cuarto (cuando todo el mundo ya lo ha probado todo).",
      },
      {
        h: "El remate: encuestas post-partido",
        body: "Termina la noche por todo lo alto con dos encuestas. Una: MVP de la fiesta (el anfitrión, la mayor reacción, el más informado, el invitado más gracioso). Dos: mejor momento de la fiesta (opciones mezcladas de partido y no partido). Estas encuestas no tienen nada que ver con el fútbol: son sobre la experiencia social. Generan las capturas de pantalla y los recuerdos de grupo que los invitados comparten durante días. La fiesta de partido como evento social importa tanto como el partido en sí, especialmente para los casuales. Termina en la nota social y todo el mundo se va habiendo pasado un rato genial, independientemente de qué equipo ganó.",
      },
    ],
    polls: [
      { q: "¿Mejor momento histórico de la Super Bowl?", options: ["Un show del descanso", "Un final de infarto", "Un anuncio", "La caza del casco de Eli Manning"] },
      { q: "¿Para qué ves la Super Bowl?", options: ["El partido", "Los anuncios", "El show del descanso", "La comida"] },
      { q: "¿Mejor snack para verla?", options: ["Alitas", "Pizza", "Nachos", "Dip con chips"] },
      { q: "¿Cara o cruz?", options: ["Cara", "Cruz"] },
      { q: "¿El show del descanso: hype o skip?", options: ["Hype", "Skip", "Ruido de fondo", "El motivo por el que estoy aquí"] },
      { q: "¿Tipo de primer tanto?", options: ["TD", "Gol de campo", "Safety", "Aún no marcará"] },
      { q: "¿Mejor comida para ver fútbol?", options: ["Alitas", "Tacos", "Pizza", "Chili"] },
      { q: "¿Ver con amigos o solo?", options: ["Con amigos", "Solo", "Con la familia", "En un bar"] },
      { q: "¿MVP de tu fiesta?", options: ["El anfitrión", "El más escandaloso", "El más callado", "La mascota"] },
    ],
    faq: [
      { q: "¿Cuántas encuestas durante una fiesta de partido?", a: "8-12 repartidas durante el partido y los descansos. Pocas y la noche es pasiva; muchas y se vuelven ruido." },
      { q: "¿Encuestas durante el juego o solo en los descansos?", a: "En los descansos publicitarios y los partes. No lances encuestas durante el juego activo: los invitados no miran el móvil en los momentos importantes." },
      { q: "¿Encuestas anónimas o con nombre?", a: "Cualquiera funciona. Para una fiesta entre amigos, con nombre está bien. Para un evento corporativo, el anonimato permite más honestidad sobre la comida y el show del descanso." },
      { q: "¿Mejor herramienta para encuestas de fiesta?", a: "moomz funciona bien por el formato multi-opción y el quick-share. Strawpoll si prefieres escritorio. Stories si todo el mundo ya está en Instagram." },
      { q: "¿Debo preparar las encuestas con antelación?", a: "Sí. Escribe 6-8 encuestas antes y luego improvisa 2-3 según lo que pase en el partido. Las encuestas improvisadas aterrizan mejor cuando hacen referencia a eventos en directo." },
    ],
    related: ["viral-poll-formats-es"],
    updatedAt: today,
  },

  // ============ ES 14 (entry 29) ============
  {
    slug: "viral-tiktok-polls-2026-trends-es",
    locale: "es",
    category: "blog",
    emoji: "🎵",
    title: "Encuestas virales en TikTok en 2026: tendencias y formatos",
    h1: "Encuestas virales en TikTok en 2026: las tendencias que impulsan millones de votos",
    description: "Los formatos de encuesta que están reventando en TikTok en 2026. De los debates en stitch a los vídeos de revelación. Con el patrón que hay detrás de cada hit viral.",
    intro: "Las encuestas de TikTok no son una función: son un patrón de creador. La plataforma no tiene encuestas binarias nativas más allá del sticker de encuesta básico. Así que los creadores inventaron formatos propios. Algunos se han vuelto virales. Otros han muerto. Aquí tienes los patrones de 2026 que están generando millones de votos y la mecánica subyacente de cada uno.",
    sections: [
      {
        h: "El formato de revelación post-voto",
        body: "El creador graba un vídeo preguntando algo a la audiencia, con los comentarios pidiendo que voten A o B. Después revela qué hizo o eligió. La revelación crea el bucle: los espectadores quieren ver si \"ganaron\" o si la elección del creador coincidió con la suya. Ejemplos: revelaciones de outfits (\"¿qué vestido debería llevar a la boda?\"), comparaciones de productos, confesiones de opinión. El formato funciona porque divide el vídeo en dos fases: anticipación pre-voto y validación post-voto. Ambas fases generan engagement. Los mejores creadores añaden un giro en la revelación: muestran lo que eligió la audiencia pero luego explican por qué hicieron lo contrario. El conflicto impulsa los compartidos.",
      },
      {
        h: "Formato de debate en stitch",
        body: "El creador A publica una opinión contundente. El creador B hace un stitch con la opinión contraria. La audiencia vota en los comentarios quién gana. Este formato despegó a mediados de 2025 y dominó 2026. Funciona porque el algoritmo de TikTok premia la velocidad de engagement, y los debates generan tormentas de comentarios. Los hits virales de este formato comparten tres rasgos: oposición binaria clara (no posiciones matizadas), temas de bajo impacto (la gente se pelea por la pizza, no por el aborto) y contraste de personalidad entre los dos creadores. El formato requiere que dos creadores participen, lo que limita la escalabilidad, pero cuando funciona, funciona a lo grande.",
      },
      {
        h: "Ranking cringe vs cool",
        body: "Toma una lista de elementos (outfits, canciones, comportamientos) y ordénalos de cringe a cool en directo con la participación de la audiencia. Este formato requiere confianza: estás juzgando cosas públicamente y tu juicio está en el escaparate. Funciona porque la audiencia de TikTok adora los veredictos. El patrón viral: elige elementos que son genuinamente debatibles (no cringe obvio, no cool obvio), lanza hot takes y deja que los comentarios se pelen. El vídeo de ranking en sí es el gancho de engagement; la sección de comentarios es donde ocurren los votos reales. Los tops de este formato reciben 5 veces más comentarios que likes, algo inusual en TikTok.",
      },
      {
        h: "La tendencia de la encuesta como contenido",
        body: "Los creadores más grandes hacen ahora encuestas directas en su contenido: muestran una pantalla estática con la pregunta y dos o tres opciones, la audiencia vota en comentarios. Menor coste de producción, mayor predictibilidad. El formato funciona porque es el cebo de engagement de menor fricción posible. Pero también se ha saturado. Las audiencias están fatigadas. Las encuestas que funcionaban en 2024 (\"¿quién es más guapo/a?\") reciben ahora la mitad del engagement. Para destacar en 2026: la pregunta debe ser más afilada, más divisiva, más específica. El listón ha subido.",
      },
      {
        h: "Encuestas multiplataforma (TikTok a moomz)",
        body: "Patrón emergente en 2026: los creadores de TikTok lanzan el prompt en TikTok y envían a la audiencia a una encuesta anónima externa para el voto real. Luego publican un vídeo de seguimiento con los resultados. Este patrón funciona porque: (1) TikTok genera alcance pero limita los formatos de encuesta; (2) las herramientas externas permiten votación anónima con múltiples opciones; (3) el vídeo de seguimiento crea un segundo bucle de engagement. Los creadores que usan este patrón reportan mayor engagement en los comentarios del seguimiento que en el vídeo original. Es el patrón más positivo para el crecimiento de los creadores serios en 2026, pero exige mayor esfuerzo de producción.",
      },
    ],
    polls: [
      { q: "¿Formato de encuesta TikTok que más ves?", options: ["Revelación", "Debate stitch", "Ranking cringe", "Encuesta estática"] },
      { q: "¿Votas en encuestas de TikTok?", options: ["Con frecuencia", "A veces", "Nunca", "Solo en comentarios"] },
      { q: "¿Ves el vídeo entero antes de votar?", options: ["Sí", "No", "A veces", "Lo escaneo"] },
      { q: "¿Mejor formato para engagement?", options: ["Revelación", "Debate", "Ranking", "Hilo de comentarios"] },
      { q: "¿Encuestas multiplataforma, ¿las pruebas?", options: ["Sí", "No", "Lo estoy pensando", "Demasiado trabajo"] },
      { q: "¿Las encuestas de TikTok están saturadas?", options: ["Sí", "No", "Algunos formatos", "Siempre lo han estado"] },
      { q: "¿Votas de forma anónima o comentas en público?", options: ["Anónimamente", "Comento", "Los dos", "Solo observo"] },
      { q: "¿Mejor tema para una encuesta viral?", options: ["Drama", "Comida", "Relaciones", "Pop culture"] },
    ],
    faq: [
      { q: "¿TikTok tiene encuestas nativas?", a: "Limitadas. El sticker de encuesta existe para directos y Stories, pero los vídeos del feed no tienen formatos de encuesta enriquecidos: los creadores los improvisan." },
      { q: "¿Por qué las encuestas de revelación funcionan tan bien?", a: "Crean dos fases de engagement: anticipación (votos) y validación (resultados). Ambas retienen al espectador en el vídeo y en los comentarios." },
      { q: "¿Merece la pena hacer debates en stitch?", a: "Sí, si puedes emparejarte con otro creador y elegir un tema divisivo de bajo impacto. Difícil de escalar en solitario." },
      { q: "¿Cómo destacar en formatos saturados?", a: "Preguntas más afiladas, ritmo más rápido, hot takes más específicos. El listón ha subido: las encuestas genéricas ahora rinden por debajo de la media." },
      { q: "¿Las encuestas multiplataforma canibalizan las vistas de TikTok?", a: "Sí, ligeramente. Pero la calidad del engagement y el contenido reutilizable (el vídeo de seguimiento) compensan con creces. Resultado neto positivo para creadores serios." },
    ],
    related: ["poll-go-viral-tiktok-es", "viral-poll-formats-es"],
    updatedAt: today,
  },

  // ============ ES 15 (entry 30) ============
  {
    slug: "the-rise-of-the-vibe-check-app-es",
    locale: "es",
    category: "blog",
    emoji: "🪞",
    title: "El auge de las apps de vibe check (qué hay detrás)",
    h1: "El auge de la app de vibe check: una categoría, no una función",
    description: "Las apps de vibe check se convirtieron silenciosamente en una categoría. moomz, NGL, Tellonym, Sendit: qué comparten, en qué difieren y hacia dónde va el espacio.",
    intro: "Hace tres años, \"app de vibe check\" no era una categoría. Era un meme. Hoy es un espacio de software real con múltiples actores, patrones de UX diferenciados y varios cientos de millones de usuarios activos mensuales en conjunto. Los inversores lo financian. Apple y Google lo curan. Así es cómo emergió la categoría y hacia dónde va.",
    sections: [
      {
        h: "Qué convierte algo en una app de vibe check",
        body: "Tres rasgos definitorios. Primero: input rápido: votar o hacer una pregunta tarda menos de 5 segundos. Segundo: señal colectiva: el valor viene de las respuestas agregadas, no de las individuales. Tercero: uso social de bajo impacto: no son herramientas de decisión con consecuencias reales en el mundo, sino herramientas de calibración social. moomz, NGL, Tellonym, Sendit y una docena de actores menores comparten estos tres rasgos. La categoría emergió porque la herramienta primaria anterior para el vibe check (los chats de grupo) se volvió ineficiente, y las redes sociales identificadas (Instagram, X) se volvieron demasiado arriesgadas. Las apps de vibe check llenan el hueco: rápidas, colectivas, de bajo impacto.",
      },
      {
        h: "Por qué la categoría explotó después de 2022",
        body: "Tres factores convergentes. Primero, el lanzamiento viral de NGL en 2022 demostró que la demanda era enorme. Segundo, el aislamiento social post-pandemia creó hambre de conexión de baja fricción. Tercero, el feed hipercurado de Instagram y TikTok se volvió agotador: los usuarios querían algo más crudo. Las apps de vibe check ofrecían las tres cosas: mecánicas virales, baja fricción e input sin filtros. La curva de crecimiento de 2022 a 2026 imita el crecimiento temprano de las apps de citas entre 2014 y 2017: formación rápida de categoría, múltiples actores experimentando con nichos adyacentes y eventual consolidación. Probablemente estamos al final de la fase de crecimiento rápido y entrando en la consolidación en 2026-2027.",
      },
      {
        h: "El eje de las encuestas vs el eje del Q&A",
        body: "La categoría se divide en dos ejes. Apps de encuestas (moomz, Strawpoll, Polls Insta) hacen preguntas de opción múltiple a un grupo. Apps de Q&A (NGL, Tellonym, Sendit) reciben preguntas abiertas dirigidas a un destinatario. Ambas son \"vibe check\" porque el caso de uso se superpone, pero la mecánica de producto es diferente. Las apps de encuestas generan datos agregados. Las de Q&A generan intercambios individuales. El movimiento interesante en 2026: los híbridos. moomz combinando encuestas y ASK Q&A en un mismo perfil es el primer gran híbrido que funcionó. Espera más híbridos en 2027-28 a medida que la categoría se consolide alrededor de los diseños multimodales más atractivos.",
      },
      {
        h: "La moderación como foso competitivo",
        body: "La categoría de vibe check tiene un foso oculto: la infraestructura de confianza y seguridad. Ask.fm colapsó por su ausencia. Los nuevos entrantes que la descuidan mueren rápido: media docena de clones de NGL implosionaron en 2023. Los actores serios invierten mucho: moderación por IA, límites de frecuencia, reporte de abusos, cumplimiento de normas comunitarias. Esta inversión se acumula: mejor moderación permite una audiencia más amplia (los padres confían en que sus hijos adolescentes la usen), lo que impulsa el crecimiento, lo que justifica más inversión. La categoría se bifurca entre actores que priorizan la seguridad (que escalan a largo plazo) y los que atajen (que se agotan en un año).",
      },
      {
        h: "Hacia dónde va la categoría",
        body: "Tres tendencias para 2027 y más allá. Una: la voz. Las encuestas y el Q&A por voz son los siguientes, siguiendo el movimiento de lo social solo texto a lo primero audio. Dos: los hosts de IA. Las apps generarán prompts de encuesta diarios, eliminando la necesidad de que los usuarios piensen en preguntas. Tres: la integración entre apps. Los primitivos del vibe check (votar, preguntar) aparecerán como funciones dentro de apps que no son de vibe check: Slack, apps de citas, plataformas de aprendizaje. La categoría puede volverse invisible, igual que \"mensajería\" se volvió invisible en 2018: embebida en todas partes, sin ser ya un destino de app diferenciado. Si moomz, NGL u otro actor gana la capa de plataforma está abierto. La categoría en sí vino para quedarse.",
      },
    ],
    polls: [
      { q: "¿Qué apps de vibe check usas?", options: ["NGL", "moomz", "Tellonym", "Ninguna"] },
      { q: "¿Encuestas o Q&A principalmente?", options: ["Encuestas", "Q&A", "Los dos", "Ninguno"] },
      { q: "¿Mejor app de vibe check en general?", options: ["NGL", "moomz", "Tellonym", "Sendit"] },
      { q: "¿Las apps de vibe check son una moda pasajera?", options: ["Sí", "No", "Mixto", "No lo sé"] },
      { q: "¿Pagarías por una función premium de vibe check?", options: ["Sí", "No", "Ya lo hago", "Lo estoy pensando"] },
      { q: "¿El vibe check por voz te resulta interesante?", options: ["Sí", "No", "Quizás", "Cringe"] },
      { q: "¿IA generando encuestas por ti?", options: ["Genial", "Lo odio", "A veces", "Ya lo hace"] },
      { q: "¿App independiente o función embebida?", options: ["Independiente", "Embebida", "Los dos", "Me da igual"] },
    ],
    faq: [
      { q: "¿Qué hace que una app sea una app de vibe check?", a: "Input rápido, señal colectiva, uso social de bajo impacto. Los tres rasgos juntos definen la categoría." },
      { q: "¿Qué tamaño tiene la categoría?", a: "Varios cientos de millones de usuarios activos mensuales entre todos los actores combinados, a mediados de 2026. Creciendo rápido." },
      { q: "¿Es solo una moda?", a: "Puede que algunos actores lo sean, pero el caso de uso subyacente (señal colectiva rápida y de bajo impacto) es estructural. El formato puede cambiar; la demanda persiste." },
      { q: "¿Instagram absorberá la categoría?", a: "En parte: Instagram ha copiado funciones. Pero no puede replicar el anonimato sin contradecir su modelo basado en la identidad." },
      { q: "¿Mejor app para respuestas honestas?", a: "Depende del caso de uso. NGL para Q&A en Instagram, moomz para encuestas con anonimato, Tellonym para Q&A comunitario." },
    ],
    related: ["anonymous-qa-ask-ngl-moomz-es", "vibe-check-meaning-es", "gen-z-poll-culture-es"],
    updatedAt: today,
  },
];
