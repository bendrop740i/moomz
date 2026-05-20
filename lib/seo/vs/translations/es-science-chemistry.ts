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
      es: {
        title: "Mitosis vs Meiosis: la división celular",
        h1: "Mitosis vs Meiosis: cómo se dividen las células",
        description:
          "La mitosis crea dos células corporales idénticas; la meiosis crea cuatro células sexuales variadas. Compara las dos divisiones celulares.",
        intro:
          "Ambas son formas de división celular, pero cumplen funciones biológicas muy distintas. La mitosis mantiene el crecimiento y la reparación, mientras que la meiosis hace posibles la reproducción y la variación genética.",
        pros_a: [
          "Produce 2 células hijas genéticamente idénticas a la célula madre",
          "Implica una sola ronda de división",
          "Sirve para el crecimiento, la reparación de tejidos y la reproducción asexual",
          "Las células hijas son diploides (juego completo de cromosomas)",
          "Sin entrecruzamiento, así que no hay nuevas combinaciones génicas",
        ],
        pros_b: [
          "Produce 4 células hijas, cada una genéticamente única",
          "Implica dos rondas de división consecutivas",
          "Sirve para formar gametos (espermatozoides y óvulos)",
          "Las células hijas son haploides (la mitad de los cromosomas)",
          "El entrecruzamiento y la distribución independiente crean variación",
        ],
        verdict:
          "La mitosis es la división celular cotidiana que construye y mantiene el cuerpo. La meiosis ocurre solo en los órganos reproductores para fabricar gametos. Juntas explican cómo creces y cómo se heredan los rasgos.",
        faq: [
          {
            q: "¿Qué proceso crea la diversidad genética?",
            a: "La meiosis, gracias al entrecruzamiento y la distribución independiente de los cromosomas, produce gametos todos genéticamente distintos.",
          },
          {
            q: "¿Cuántas divisiones ocurren en cada una?",
            a: "La mitosis tiene una división que produce dos células; la meiosis tiene dos divisiones que producen cuatro células.",
          },
          {
            q: "¿Las células resultantes son diploides o haploides?",
            a: "La mitosis da células diploides con el número completo de cromosomas; la meiosis da células haploides con la mitad.",
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
      es: {
        title: "ADN vs ARN: los dos ácidos nucleicos",
        h1: "ADN vs ARN: estructura y función",
        description:
          "El ADN almacena la información genética a largo plazo; el ARN la transporta y la traduce en proteínas. Compara estructura, azúcar, bases y funciones.",
        intro:
          "El ADN y el ARN son los dos ácidos nucleicos que dirigen la química de la vida. El ADN es el archivo maestro, mientras que el ARN es la copia de trabajo que ejecuta las tareas.",
        pros_a: [
          "Almacena la información hereditaria de forma estable durante generaciones",
          "Hélice de doble cadena, estructura muy estable",
          "Contiene el azúcar desoxirribosa (le falta un oxígeno)",
          "Utiliza las bases A, T, G y C",
          "Permanece sobre todo en el núcleo de la célula",
        ],
        pros_b: [
          "Transporta y traduce las instrucciones genéticas en proteínas",
          "Suele ser de cadena simple y más flexible",
          "Contiene el azúcar ribosa (tiene un oxígeno extra)",
          "Utiliza las bases A, U, G y C (uracilo en lugar de timina)",
          "Se encuentra por toda la célula, incluido el citoplasma",
        ],
        verdict:
          "El ADN es la biblioteca segura de los datos genéticos; el ARN es el mensajero y el operario que los lee y los usa. La vida necesita ambos: el ADN para perdurar, el ARN para actuar.",
        faq: [
          {
            q: "¿Qué base difiere entre el ADN y el ARN?",
            a: "El ADN usa timina (T) mientras que el ARN usa uracilo (U) en su lugar; ambos comparten adenina, guanina y citosina.",
          },
          {
            q: "¿Por qué el ADN es más estable que el ARN?",
            a: "Su doble hélice y el azúcar desoxirribosa lo hacen químicamente resistente, ideal para el almacenamiento a largo plazo.",
          },
          {
            q: "¿Cuáles son los principales tipos de ARN?",
            a: "El ARN mensajero (ARNm), el ARN de transferencia (ARNt) y el ARN ribosómico (ARNr) colaboran en la síntesis de proteínas.",
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
      es: {
        title: "Eucariota vs Procariota: tipos de células",
        h1: "Eucariota vs Procariota: los dos tipos de células",
        description:
          "Las eucariotas tienen núcleo y orgánulos; las procariotas no. Compara los dos tipos de células fundamentales y la vida que construyen.",
        intro:
          "Todo ser vivo está hecho de uno de dos tipos de células. Las procariotas son simples y antiguas, mientras que las eucariotas son más grandes y compartimentadas.",
        pros_a: [
          "Tiene un verdadero núcleo delimitado por membrana",
          "Contiene orgánulos como mitocondrias y retículo endoplasmático",
          "Generalmente más grande (10-100 micrómetros)",
          "Incluye animales, plantas, hongos y protistas",
          "El ADN es lineal y está empaquetado en cromosomas",
        ],
        pros_b: [
          "Sin núcleo: el ADN flota libremente en el citoplasma",
          "Carece de orgánulos delimitados por membrana",
          "Generalmente más pequeña (1-10 micrómetros)",
          "Incluye todas las bacterias y arqueas",
          "El ADN suele ser una única molécula circular",
        ],
        verdict:
          "Las procariotas fueron la primera vida de la Tierra y aún dominan en número. Las eucariotas evolucionaron después con compartimentos internos que permitieron organismos pluricelulares complejos. Ambas siguen siendo esenciales para la biosfera.",
        faq: [
          {
            q: "¿Qué tipo de célula es más antiguo?",
            a: "Las procariotas aparecieron primero, hace unos 3.500 millones de años; las eucariotas evolucionaron hace unos 2.000 millones de años.",
          },
          {
            q: "¿Tienen las procariotas algún orgánulo?",
            a: "Tienen ribosomas, pero ningún orgánulo delimitado por membrana como mitocondrias o un núcleo.",
          },
          {
            q: "¿Qué es la teoría endosimbiótica?",
            a: "Propone que las mitocondrias y los cloroplastos de las eucariotas se originaron a partir de procariotas que antes vivían libres.",
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
      es: {
        title: "Célula vegetal vs animal: diferencias clave",
        h1: "Célula vegetal vs Célula animal: estructura comparada",
        description:
          "Las células vegetales tienen pared celular y cloroplastos; las animales tienen centriolos y lisosomas. Compara estas dos células eucariotas.",
        intro:
          "Las células vegetal y animal son ambas eucariotas, pero sus estructuras reflejan modos de vida muy distintos: una fabrica su propio alimento, la otra debe buscarlo.",
        pros_a: [
          "Tiene una pared celular rígida de celulosa que da soporte",
          "Contiene cloroplastos para la fotosíntesis",
          "Tiene una gran vacuola central que almacena agua",
          "Suele tener una forma fija y rectangular",
          "Almacena la energía principalmente como almidón",
        ],
        pros_b: [
          "Sin pared celular: solo una membrana plasmática flexible",
          "Sin cloroplastos; no puede fabricar su propio alimento",
          "Tiene muchas vacuolas pequeñas, si acaso",
          "Forma variable, a menudo redondeada",
          "Tiene centriolos y lisosomas para la división y la digestión",
        ],
        verdict:
          "Las células vegetales están hechas para la estabilidad y la autoalimentación mediante la fotosíntesis. Las células animales cambian rigidez por flexibilidad y movilidad. Ambas comparten la maquinaria eucariota básica, como el núcleo y las mitocondrias.",
        faq: [
          {
            q: "¿Tienen pared celular las células animales?",
            a: "No. Las células animales solo tienen una membrana plasmática, lo que las hace flexibles y capaces de cambiar de forma.",
          },
          {
            q: "¿Qué da a las células vegetales su color verde?",
            a: "Los cloroplastos, que contienen el pigmento clorofila, el cual absorbe la luz para la fotosíntesis.",
          },
          {
            q: "¿Tienen mitocondrias las células vegetales?",
            a: "Sí. Las células vegetales también tienen mitocondrias: necesitan la respiración celular además de la fotosíntesis.",
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
      es: {
        title: "Masa vs Peso: ¿cuál es la diferencia?",
        h1: "Masa vs Peso: una confusión habitual de física",
        description:
          "La masa es la cantidad de materia de un objeto; el peso es la fuerza gravitatoria que actúa sobre él. Compara estas dos magnitudes que se confunden a menudo.",
        intro:
          "La gente usa 'masa' y 'peso' como sinónimos, pero la física los trata de forma muy distinta. Una nunca cambia; el otro depende de dónde estés.",
        pros_a: [
          "Mide la cantidad de materia de un objeto",
          "Se mantiene constante en cualquier lugar del universo",
          "Se mide en kilogramos (kg)",
          "Es una magnitud escalar, sin dirección",
          "Determina la inercia de un objeto y su resistencia a la fuerza",
        ],
        pros_b: [
          "Mide la fuerza gravitatoria sobre un objeto",
          "Cambia según la ubicación y la gravedad local",
          "Se mide en newtons (N)",
          "Es una magnitud vectorial que apunta hacia el centro del planeta",
          "Se calcula como masa por aceleración gravitatoria",
        ],
        verdict:
          "La masa es intrínseca: tu masa es la misma en la Tierra y en la Luna. El peso es situacional: en la Luna pesas alrededor de una sexta parte. Las básculas miden en realidad el peso y luego lo convierten.",
        faq: [
          {
            q: "¿Pesarías menos en la Luna?",
            a: "Sí. La gravedad de la Luna es cerca de una sexta parte de la terrestre, así que tu peso allí es aproximadamente una sexta parte, aunque tu masa no cambia.",
          },
          {
            q: "¿Qué unidades miden cada una?",
            a: "La masa se mide en kilogramos; el peso, al ser una fuerza, se mide en newtons.",
          },
          {
            q: "¿Puede un objeto carecer de peso pero seguir teniendo masa?",
            a: "Sí. En caída libre o en órbita un objeto carece de peso, pero conserva la misma masa.",
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
      es: {
        title: "Rapidez vs Velocidad: escalar vs vector",
        h1: "Rapidez vs Velocidad: la dirección marca la diferencia",
        description:
          "La rapidez indica cuán rápido; la velocidad indica cuán rápido y en qué dirección. Compara estas dos magnitudes del movimiento.",
        intro:
          "La rapidez y la velocidad describen el movimiento, pero solo una incluye la dirección. Esa única diferencia importa enormemente en física.",
        pros_a: [
          "Mide cuán rápido se mueve un objeto",
          "Es una magnitud escalar: solo módulo, sin dirección",
          "Siempre es positiva o cero",
          "La rapidez media es la distancia total entre el tiempo total",
          "Se usa en las descripciones cotidianas del movimiento",
        ],
        pros_b: [
          "Mide la rapidez junto con la dirección del movimiento",
          "Es una magnitud vectorial: tiene módulo y dirección",
          "Puede ser positiva, negativa o cero",
          "La velocidad media es el desplazamiento entre el tiempo",
          "Es esencial para calcular la aceleración y las fuerzas",
        ],
        verdict:
          "La rapidez responde a '¿cuán rápido?'; la velocidad responde a '¿cuán rápido y en qué sentido?'. Un coche que recorre un círculo a rapidez constante cambia de velocidad continuamente. Los problemas de física suelen necesitar la velocidad.",
        faq: [
          {
            q: "¿Puede la rapidez ser negativa?",
            a: "No. La rapidez siempre es positiva o cero, ya que ignora la dirección. Solo la velocidad puede ser negativa.",
          },
          {
            q: "¿Puede cambiar la velocidad mientras la rapidez se mantiene constante?",
            a: "Sí. Moverse en círculo a rapidez constante cambia la dirección, así que la velocidad cambia continuamente.",
          },
          {
            q: "¿Cuál es la diferencia entre distancia y desplazamiento?",
            a: "La distancia es la longitud total del recorrido; el desplazamiento es el cambio de posición en línea recta, con dirección.",
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
      es: {
        title: "Velocidad vs Aceleración: tasas de cambio",
        h1: "Velocidad vs Aceleración en el movimiento",
        description:
          "La velocidad es cómo cambia la posición con el tiempo; la aceleración es cómo cambia la velocidad con el tiempo. Compara estos dos conceptos del movimiento.",
        intro:
          "La velocidad y la aceleración están ligadas pero son distintas. Una describe el movimiento en sí; la otra describe cómo está cambiando ese movimiento.",
        pros_a: [
          "Describe la tasa de cambio de la posición",
          "Se mide en metros por segundo (m/s)",
          "Es un vector con módulo y dirección",
          "Una velocidad constante significa que no hay aceleración",
          "Es igual al desplazamiento dividido entre el tiempo",
        ],
        pros_b: [
          "Describe la tasa de cambio de la velocidad",
          "Se mide en metros por segundo al cuadrado (m/s²)",
          "Es un vector que puede acelerar, frenar o hacer girar el movimiento",
          "Una aceleración nula significa velocidad constante",
          "Está ligada a la fuerza neta por la segunda ley de Newton",
        ],
        verdict:
          "La velocidad indica el estado actual del movimiento; la aceleración indica cómo está cambiando. Un coche a rapidez estable tiene velocidad pero aceleración nula; pisar el acelerador crea aceleración.",
        faq: [
          {
            q: "¿Puede un objeto acelerar sin cambiar de rapidez?",
            a: "Sí. Cambiar de dirección es aceleración. Un coche que gira a rapidez constante sigue acelerando.",
          },
          {
            q: "¿Qué significa una aceleración negativa?",
            a: "Suele significar frenar (desaceleración), o acelerar en la dirección negativa.",
          },
          {
            q: "¿Cómo se relaciona la aceleración con la fuerza?",
            a: "La segunda ley de Newton dice que fuerza es igual a masa por aceleración, así que toda fuerza neta produce aceleración.",
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
      es: {
        title: "Fuerza vs Presión: empuje vs empuje por área",
        h1: "Fuerza vs Presión: dos conceptos relacionados",
        description:
          "La fuerza es un empuje o tirón; la presión es la fuerza repartida sobre un área. Compara estas dos magnitudes físicas relacionadas.",
        intro:
          "La fuerza y la presión están conectadas pero no son lo mismo. La diferencia se reduce a si se tiene en cuenta el área o no.",
        pros_a: [
          "Un empuje o tirón que puede cambiar el movimiento de un objeto",
          "Se mide en newtons (N)",
          "Es un vector con módulo y dirección",
          "Causa aceleración mediante la segunda ley de Newton",
          "Es independiente del área de contacto",
        ],
        pros_b: [
          "Fuerza aplicada por unidad de área",
          "Se mide en pascales (Pa) o N/m²",
          "Es una magnitud escalar en los fluidos",
          "La misma fuerza sobre un área menor da más presión",
          "Explica por qué funcionan los cuchillos afilados y las raquetas de nieve",
        ],
        verdict:
          "La fuerza es el empuje total; la presión es cuán concentrado está ese empuje. Un cuchillo afilado y uno romo pueden usar la misma fuerza, pero el filo afilado la concentra en una presión mucho mayor.",
        faq: [
          {
            q: "¿Por qué corta mejor un cuchillo afilado?",
            a: "Su filo fino tiene un área de contacto diminuta, así que la misma fuerza crea una presión mucho mayor.",
          },
          {
            q: "¿Qué unidad mide la presión?",
            a: "El pascal (Pa), igual a un newton por metro cuadrado.",
          },
          {
            q: "¿Por qué las raquetas de nieve evitan que te hundas?",
            a: "Reparten tu peso sobre una gran área, reduciendo la presión sobre la nieve.",
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
      es: {
        title: "Energía vs Potencia: ¿cuál es la diferencia?",
        h1: "Energía vs Potencia: cantidad vs tasa",
        description:
          "La energía es la capacidad de realizar un trabajo; la potencia es cuán rápido se realiza ese trabajo. Compara estos dos términos físicos que se confunden a menudo.",
        intro:
          "La energía y la potencia son fáciles de confundir. Una es una cantidad total; la otra es una tasa: cuán rápido se usa o se produce la energía.",
        pros_a: [
          "La capacidad de realizar un trabajo o causar un cambio",
          "Se mide en julios (J)",
          "Puede almacenarse, transferirse o convertirse",
          "Se conserva: nunca se crea ni se destruye",
          "Existe como energía cinética, potencial, térmica y otras formas",
        ],
        pros_b: [
          "La tasa a la que se transfiere o se usa la energía",
          "Se mide en vatios (W), igual a julios por segundo",
          "Describe cuán rápido se realiza el trabajo",
          "Una potencia más alta significa un uso más rápido de la energía",
          "Se calcula como energía dividida entre tiempo",
        ],
        verdict:
          "La energía es el 'cuánto'; la potencia es el 'cuán rápido'. Una bombilla de 100 W usa energía dos veces más rápido que una de 50 W. Tu factura de electricidad cobra por energía (kilovatios-hora), no por potencia.",
        faq: [
          {
            q: "¿Qué es un kilovatio-hora?",
            a: "Es una unidad de energía: la energía que usa un aparato de un kilovatio funcionando durante una hora.",
          },
          {
            q: "¿Más potencia significa más energía?",
            a: "No necesariamente. Más potencia significa que la energía se usa más rápido, pero la energía total también depende del tiempo.",
          },
          {
            q: "¿Qué unidad mide la potencia?",
            a: "El vatio, definido como un julio de energía transferido por segundo.",
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
      es: {
        title: "Energía cinética vs potencial explicada",
        h1: "Energía cinética vs potencial: movimiento vs almacenada",
        description:
          "La energía cinética es la energía del movimiento; la energía potencial es energía almacenada a la espera de liberarse. Compara las dos formas.",
        intro:
          "La energía mecánica se presenta en dos formas. La energía cinética es energía en acción, mientras que la energía potencial es energía guardada en reserva.",
        pros_a: [
          "La energía que tiene un objeto porque está en movimiento",
          "Depende de la masa y del cuadrado de la rapidez",
          "Es cero cuando el objeto está en reposo",
          "Ejemplos: un río que fluye, una pelota lanzada",
          "Aumenta a medida que un objeto acelera",
        ],
        pros_b: [
          "Energía almacenada debido a la posición o el estado",
          "El tipo gravitatorio depende de la masa, la gravedad y la altura",
          "Es máxima en el punto más alto del movimiento",
          "Ejemplos: un arco tensado, un peso elevado",
          "Se convierte en energía cinética cuando se libera",
        ],
        verdict:
          "Una montaña rusa muestra ambas: la energía potencial alcanza su máximo en lo alto de la colina y luego se convierte en energía cinética en el descenso. La energía mecánica total se mantiene constante si se ignora el rozamiento.",
        faq: [
          {
            q: "¿Qué le ocurre a la energía potencial cuando un objeto cae?",
            a: "Se convierte en energía cinética, así que el objeto acelera mientras su altura disminuye.",
          },
          {
            q: "¿Puede un objeto tener ambas a la vez?",
            a: "Sí. Una pelota que se mueve por el aire a mitad de caída tiene energía cinética y energía potencial gravitatoria.",
          },
          {
            q: "¿Qué fórmula da la energía cinética?",
            a: "La energía cinética es igual a un medio por la masa por la velocidad al cuadrado.",
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
      es: {
        title: "Calor vs Temperatura: energía vs intensidad",
        h1: "Calor vs Temperatura: una distinción térmica clave",
        description:
          "El calor es energía transferida entre objetos; la temperatura mide la energía cinética media de las partículas. Compara ambos conceptos.",
        intro:
          "El calor y la temperatura parecen lo mismo, pero la termodinámica los trata de forma muy distinta: uno es energía en tránsito, la otra es una medición.",
        pros_a: [
          "Energía transferida debido a una diferencia de temperatura",
          "Se mide en julios (J)",
          "Siempre fluye de los objetos más calientes a los más fríos",
          "Depende de la masa, el material y el cambio de temperatura",
          "Es una magnitud extensiva: más materia puede contener más",
        ],
        pros_b: [
          "Mide la energía cinética media de las partículas",
          "Se mide en grados Celsius, Fahrenheit o kelvin",
          "Es una magnitud intensiva: independiente de la cantidad de materia",
          "Determina la dirección del flujo de calor",
          "No depende del tamaño del objeto",
        ],
        verdict:
          "Una taza y una bañera de agua a la misma temperatura se sienten igual de calientes, pero la bañera contiene mucho más calor. La temperatura indica la intensidad; el calor indica la energía térmica total transferida.",
        faq: [
          {
            q: "¿Qué contiene más calor: una taza o una bañera a la misma temperatura?",
            a: "La bañera. Tiene mucha más masa, así que almacena mucha más energía térmica pese a la misma temperatura.",
          },
          {
            q: "¿En qué dirección fluye el calor?",
            a: "El calor siempre fluye espontáneamente de un objeto de mayor temperatura a uno de menor temperatura.",
          },
          {
            q: "¿Por qué se usa el kelvin en ciencia?",
            a: "El kelvin parte del cero absoluto, así que nunca es negativo y funciona limpiamente en las ecuaciones de física.",
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
      es: {
        title: "Onda vs Partícula: la doble naturaleza de la luz",
        h1: "Onda vs Partícula: dos modelos de la materia y la luz",
        description:
          "Las ondas se propagan e interfieren; las partículas son grumos localizados de materia o energía. Compara estos dos modelos físicos.",
        intro:
          "Uno de los enigmas más profundos de la física es que la luz y la materia se comportan a la vez como ondas y como partículas, según cómo las observes.",
        pros_a: [
          "Se propaga de forma continua por el espacio",
          "Muestra patrones de interferencia y difracción",
          "Transporta energía sin transportar materia",
          "Se describe mediante longitud de onda, frecuencia y amplitud",
          "Explica el color, el sonido y las ondas en el agua",
        ],
        pros_b: [
          "Un grumo localizado y discreto de materia o energía",
          "Tiene una posición definida y se puede contar",
          "Transporta cantidad de movimiento en las colisiones",
          "Explica el efecto fotoeléctrico y la energía cuantizada",
          "Las partículas de luz se llaman fotones",
        ],
        verdict:
          "La dualidad onda-partícula dice que la luz y la materia no son ni puramente ondas ni puramente partículas. El experimento de la doble rendija muestra la luz interfiriendo como una onda pero llegando como fotones discretos.",
        faq: [
          {
            q: "¿Qué es la dualidad onda-partícula?",
            a: "El principio según el cual la luz y la materia muestran propiedades de onda y de partícula según el experimento.",
          },
          {
            q: "¿Quién propuso que la luz está hecha de partículas?",
            a: "Einstein explicó el efecto fotoeléctrico usando cuantos de luz, más tarde llamados fotones.",
          },
          {
            q: "¿Se comporta la materia como una onda?",
            a: "Sí. Los electrones e incluso los átomos producen patrones de interferencia, confirmando la longitud de onda de de Broglie.",
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
      es: {
        title: "Protón vs Neutrón: dentro del núcleo",
        h1: "Protón vs Neutrón: las dos partículas nucleares",
        description:
          "Los protones llevan carga positiva y definen el elemento; los neutrones son neutros y añaden masa. Compara estas partículas nucleares.",
        intro:
          "Los protones y los neutrones comparten el núcleo atómico y tienen una masa casi idéntica, pero una propiedad crucial los distingue: la carga eléctrica.",
        pros_a: [
          "Lleva una carga eléctrica positiva de +1",
          "El número de protones define el elemento químico",
          "Se encuentra en el núcleo de todos los átomos",
          "Está hecho de dos quarks arriba y un quark abajo",
          "Es estable cuando está ligado en un núcleo",
        ],
        pros_b: [
          "No lleva carga eléctrica: es eléctricamente neutro",
          "Añade masa y estabilidad nuclear sin cambiar el elemento",
          "Se encuentra en el núcleo de todos los átomos salvo el hidrógeno común",
          "Está hecho de un quark arriba y dos quarks abajo",
          "Puede ser inestable y desintegrarse en un protón, un electrón y un antineutrino",
        ],
        verdict:
          "El número de protones (número atómico) decide qué elemento es un átomo; el número de neutrones decide qué isótopo es. Ambos aportan casi toda la masa de un átomo.",
        faq: [
          {
            q: "¿Qué determina el elemento de un átomo?",
            a: "El número de protones, llamado número atómico. El carbono, por ejemplo, siempre tiene seis protones.",
          },
          {
            q: "¿Qué es un isótopo?",
            a: "Los átomos del mismo elemento con distinto número de neutrones son isótopos de ese elemento.",
          },
          {
            q: "¿Son los protones y los neutrones partículas fundamentales?",
            a: "No. Cada uno está hecho de tres quarks unidos por la fuerza nuclear fuerte.",
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
      es: {
        title: "Fisión vs Fusión: dos reacciones nucleares",
        h1: "Fisión vs Fusión nuclear: dividir vs unir",
        description:
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros. Ambas liberan energía: compara cómo y dónde.",
        intro:
          "La fisión y la fusión son reacciones nucleares opuestas, pero ambas desatan una energía enorme convirtiendo masa según E=mc².",
        pros_a: [
          "Divide un núcleo pesado en otros más ligeros",
          "Alimenta las centrales nucleares actuales",
          "Se desencadena por el bombardeo de neutrones de uranio o plutonio",
          "Produce residuos radiactivos de larga vida",
          "Puede sostener una reacción en cadena en condiciones moderadas",
        ],
        pros_b: [
          "Une núcleos ligeros como el hidrógeno para formar helio",
          "Alimenta el Sol y todas las estrellas",
          "Requiere temperatura y presión extremas para iniciarse",
          "Produce pocos residuos radiactivos de larga vida",
          "Libera mucha más energía por unidad de masa que la fisión",
        ],
        verdict:
          "La fisión está probada y hace funcionar reactores en todo el mundo, pero deja residuos peligrosos. La fusión promete una energía más limpia y abundante, pero sigue siendo difícil de sostener en la Tierra. El Sol funciona por fusión.",
        faq: [
          {
            q: "¿Qué reacción alimenta el Sol?",
            a: "La fusión. El Sol fusiona núcleos de hidrógeno para formar helio, liberando la energía que ilumina nuestro sistema solar.",
          },
          {
            q: "¿Por qué es difícil lograr la fusión en la Tierra?",
            a: "Necesita temperaturas de millones de grados y una presión intensa para vencer la repulsión entre los núcleos.",
          },
          {
            q: "¿Cuál produce residuos más peligrosos?",
            a: "La fisión produce residuos radiactivos de larga vida; los subproductos de la fusión son mucho más efímeros.",
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
      es: {
        title: "Conducción vs Convección: transferencia de calor",
        h1: "Conducción vs Convección: cómo se mueve el calor",
        description:
          "La conducción transfiere calor por contacto directo; la convección lo transfiere mediante fluidos en movimiento. Compara estos dos modos.",
        intro:
          "El calor se mueve de tres formas principales. La conducción y la convección necesitan materia, pero mueven la energía a través de ella de formas muy distintas.",
        pros_a: [
          "Transfiere calor por contacto directo entre partículas",
          "Funciona mejor en los sólidos, sobre todo en los metales",
          "Sin desplazamiento global del material en sí",
          "La energía pasa de una partícula que vibra a su vecina",
          "Ejemplo: una cuchara metálica que se calienta en la sopa caliente",
        ],
        pros_b: [
          "Transfiere calor mediante el movimiento de un fluido",
          "Funciona en líquidos y gases, no en sólidos",
          "El fluido caliente sube, el frío baja, creando corrientes",
          "Transporta energía moviendo la propia materia",
          "Ejemplo: el agua hirviendo o el aire cálido circulando por una habitación",
        ],
        verdict:
          "La conducción necesita partículas en contacto y es la forma en que los sólidos comparten el calor. La convección depende de fluidos que fluyen llevándose la energía. Una olla al fuego usa ambas a la vez.",
        faq: [
          {
            q: "¿Puede ocurrir convección en un sólido?",
            a: "No. La convección requiere un fluido que pueda fluir; los sólidos transfieren el calor por conducción.",
          },
          {
            q: "¿Por qué los metales conducen bien el calor?",
            a: "Los electrones libres de los metales se mueven con facilidad y transportan rápido la energía térmica por el material.",
          },
          {
            q: "¿Cuál es el tercer tipo de transferencia de calor?",
            a: "La radiación, que transfiere calor mediante ondas electromagnéticas y no necesita ningún medio.",
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
      es: {
        title: "Reflexión vs Refracción: comportamiento de la luz",
        h1: "Reflexión vs Refracción: cómo se desvía la luz",
        description:
          "La reflexión rebota la luz en una superficie; la refracción desvía la luz que pasa a un nuevo medio. Compara estos dos efectos ópticos.",
        intro:
          "Cuando la luz encuentra una superficie, puede rebotar o atravesarla. La reflexión y la refracción explican los espejos, las lentes y los arcoíris por igual.",
        pros_a: [
          "La luz rebota en una superficie y vuelve al mismo medio",
          "El ángulo de incidencia es igual al ángulo de reflexión",
          "La luz permanece en su medio original",
          "Crea imágenes en los espejos y en el agua en calma",
          "La rapidez de la luz no cambia",
        ],
        pros_b: [
          "La luz se desvía al pasar a un medio diferente",
          "Está causada por un cambio en la rapidez de la luz",
          "La dirección cambia; el medio cambia",
          "Crea efectos como una pajita que parece doblada en el agua",
          "Rige cómo las lentes enfocan la luz",
        ],
        verdict:
          "La reflexión mantiene la luz en un medio y la hace rebotar; la refracción la envía a un nuevo medio y la desvía. Las gafas, las cámaras y el cristalino de tu propio ojo dependen de la refracción.",
        faq: [
          {
            q: "¿Por qué parece doblada una pajita en un vaso de agua?",
            a: "La refracción desvía la luz al salir del agua y entrar en el aire, desplazando la posición aparente de la pajita.",
          },
          {
            q: "¿Qué ley rige la reflexión?",
            a: "La ley de la reflexión: el ángulo de incidencia es igual al ángulo de reflexión, medidos desde la normal.",
          },
          {
            q: "¿Qué causa la refracción?",
            a: "La luz cambia de rapidez al entrar en un medio más denso o menos denso, lo que desvía su trayectoria.",
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
      es: {
        title: "Corriente CA vs CC: dos formas de fluir",
        h1: "Corriente CA vs CC: alterna vs continua",
        description:
          "La CA invierte el sentido muchas veces por segundo; la CC fluye de forma constante en un sentido. Compara la corriente alterna y la continua.",
        intro:
          "La corriente eléctrica se presenta en dos formas básicas. La elección entre ellas marcó la historia de las redes eléctricas y aún hoy importa.",
        pros_a: [
          "La corriente invierte periódicamente su sentido",
          "Fácil de elevar o reducir con transformadores",
          "Eficiente para transmitir energía a largas distancias",
          "Suministro estándar de los enchufes y la red eléctrica",
          "La frecuencia suele ser de 50 o 60 hercios",
        ],
        pros_b: [
          "La corriente fluye de forma constante en un único sentido",
          "La proporcionan las baterías y las células solares",
          "Alimenta la electrónica, los teléfonos y la mayoría de los chips",
          "Una tensión estable conviene a los dispositivos sensibles",
          "Pierde más energía en líneas de transmisión muy largas",
        ],
        verdict:
          "La CA ganó la red eléctrica porque los transformadores hacen eficiente la transmisión a larga distancia. La CC domina dentro de la electrónica y las baterías. Los dispositivos modernos convierten la CA del enchufe en la CC que necesitan sus chips.",
        faq: [
          {
            q: "¿Por qué las redes eléctricas usan CA?",
            a: "La tensión de CA puede subirse y bajarse con transformadores, lo que hace mucho más eficiente la transmisión a larga distancia.",
          },
          {
            q: "¿Las baterías producen CA o CC?",
            a: "Las baterías producen CC: un flujo de corriente constante en un único sentido.",
          },
          {
            q: "¿Qué convierte la CA en CC?",
            a: "Un rectificador, a menudo dentro de un adaptador de corriente, convierte la CA del enchufe en la CC que necesita la electrónica.",
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
      es: {
        title: "Circuito en serie vs paralelo: cableado comparado",
        h1: "Circuito en serie vs paralelo: dos formas de cablear",
        description:
          "Los circuitos en serie ofrecen un solo camino para la corriente; los circuitos en paralelo ofrecen varios. Compara cómo se conectan los componentes.",
        intro:
          "La forma de cablear los componentes lo cambia todo en el comportamiento de un circuito. La serie y el paralelo son las dos disposiciones fundamentales.",
        pros_a: [
          "Los componentes comparten un único camino de corriente",
          "La misma corriente fluye por cada componente",
          "La tensión se reparte entre los componentes",
          "Una rotura detiene todo el circuito",
          "La resistencia total es la suma de todas las resistencias",
        ],
        pros_b: [
          "Los componentes están en ramas separadas",
          "Cada rama recibe la tensión completa de la fuente",
          "La corriente se divide entre las ramas",
          "Una rotura deja las demás ramas funcionando",
          "La resistencia total es menor que la resistencia más pequeña",
        ],
        verdict:
          "El cableado en serie es simple pero frágil: un fallo lo deja sin funcionar, como las viejas luces navideñas. El cableado en paralelo mantiene el resto en marcha si una parte falla, por eso lo usa la instalación de las casas.",
        faq: [
          {
            q: "¿Por qué las casas usan cableado en paralelo?",
            a: "Para que cada aparato reciba la tensión completa y un fallo no apague toda la casa.",
          },
          {
            q: "¿Qué ocurre si una bombilla falla en un circuito en serie?",
            a: "Todo el circuito se interrumpe y las demás bombillas se apagan, ya que solo hay un camino.",
          },
          {
            q: "¿Cómo difiere la resistencia total?",
            a: "La resistencia en serie se suma; la resistencia en paralelo siempre es menor que la resistencia más pequeña.",
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
      es: {
        title: "Tensión vs Corriente: presión vs flujo",
        h1: "Tensión vs Corriente: dos fundamentos eléctricos",
        description:
          "La tensión es el empuje eléctrico; la corriente es la tasa de flujo de carga. Compara estas dos magnitudes fundamentales.",
        intro:
          "La tensión y la corriente son la base de la electricidad. Una analogía de tubería de agua ayuda: la tensión es la presión, la corriente es el flujo.",
        pros_a: [
          "La diferencia de potencial que empuja la carga",
          "Se mide en voltios (V)",
          "Actúa como una presión que impulsa el flujo",
          "Puede existir sin que fluya ninguna corriente",
          "La proporcionan las baterías y los generadores",
        ],
        pros_b: [
          "La tasa a la que fluye la carga eléctrica",
          "Se mide en amperios (A)",
          "Actúa como el caudal en una tubería",
          "Solo fluye cuando existe un circuito completo",
          "Causa calentamiento, magnetismo y trabajo útil",
        ],
        verdict:
          "La tensión es la causa, la corriente es el efecto. Una batería tiene tensión incluso desconectada, pero la corriente solo fluye cuando un circuito cerrado deja moverse la carga. La ley de Ohm las relaciona mediante la resistencia.",
        faq: [
          {
            q: "¿Puede existir tensión sin corriente?",
            a: "Sí. Una batería desconectada tiene tensión pero no corriente, porque el circuito está abierto.",
          },
          {
            q: "¿Qué es la ley de Ohm?",
            a: "Establece que la tensión es igual a la corriente multiplicada por la resistencia, relacionando las tres magnitudes.",
          },
          {
            q: "¿Qué es más peligroso, la tensión o la corriente?",
            a: "Es la corriente que fluye por el cuerpo la que causa daño, pero se necesita una tensión alta para impulsarla.",
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
      es: {
        title: "Relatividad general vs especial explicada",
        h1: "Relatividad general vs especial: las dos teorías de Einstein",
        description:
          "La relatividad especial trata el movimiento a velocidad constante; la general añade la gravedad y la aceleración. Compara ambas teorías.",
        intro:
          "Einstein produjo dos teorías de la relatividad con una década de diferencia. Una trata el movimiento estable; la otra lo extiende a la gravedad y al cosmos.",
        pros_a: [
          "Describe la gravedad como la curvatura del espacio-tiempo",
          "Publicada por Einstein en 1915",
          "Trata la aceleración y los sistemas de referencia no inerciales",
          "Predice agujeros negros, ondas gravitacionales y lentes",
          "Explica la órbita de Mercurio y la corrección horaria del GPS",
        ],
        pros_b: [
          "Describe la física en sistemas que se mueven a velocidad constante",
          "Publicada por Einstein en 1905",
          "Introduce la dilatación del tiempo y la contracción de la longitud",
          "Afirma que la velocidad de la luz es la misma para todos los observadores",
          "Da la famosa ecuación E igual a m c al cuadrado",
        ],
        verdict:
          "La relatividad especial es un caso particular de la teoría general más amplia. Usa la relatividad especial para el movimiento estable a alta velocidad; la relatividad general es necesaria allí donde la gravedad o la aceleración importan.",
        faq: [
          {
            q: "¿Qué teoría llegó primero?",
            a: "La relatividad especial en 1905; la relatividad general la siguió diez años después, en 1915.",
          },
          {
            q: "¿Qué añade la relatividad general?",
            a: "Extiende la relatividad a la gravedad y la aceleración, describiendo la gravedad como espacio-tiempo curvado.",
          },
          {
            q: "¿Necesita el GPS la relatividad?",
            a: "Sí. Los satélites GPS deben corregir los efectos temporales de la relatividad especial y la general.",
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
      es: {
        title: "Física cuántica vs clásica comparadas",
        h1: "Física cuántica vs clásica: dos marcos",
        description:
          "La física clásica describe los objetos cotidianos; la física cuántica rige el mundo diminuto de los átomos y las partículas. Compara ambas.",
        intro:
          "La física tiene dos grandes marcos. Uno predice el movimiento de los planetas y los coches; el otro rige el extraño comportamiento de los átomos.",
        pros_a: [
          "Describe el comportamiento de los átomos y las partículas subatómicas",
          "La energía viene en paquetes discretos llamados cuantos",
          "Incluye la superposición, el entrelazamiento y la incertidumbre",
          "Las predicciones son probabilísticas, no exactas",
          "Sustenta los láseres, los semiconductores y la electrónica moderna",
        ],
        pros_b: [
          "Describe los objetos y el movimiento a escala cotidiana",
          "Trata la energía como continua, no cuantizada",
          "Las predicciones son deterministas y exactas",
          "Se basa en las leyes de Newton y el electromagnetismo",
          "Es precisa para planetas, vehículos y máquinas",
        ],
        verdict:
          "La física clásica funciona a la perfección para el mundo a escala humana y sigue siendo esencial para la ingeniería. La física cuántica toma el relevo a escala atómica. Ambas son correctas en sus propios dominios.",
        faq: [
          {
            q: "¿Cuándo falla la física clásica?",
            a: "A escalas muy pequeñas —átomos y partículas— donde dominan efectos cuánticos como la superposición.",
          },
          {
            q: "¿Es aleatoria la física cuántica?",
            a: "Sus predicciones son probabilísticas; da las probabilidades de los resultados en lugar de un único resultado seguro.",
          },
          {
            q: "¿Coinciden alguna vez?",
            a: "Sí. Para objetos grandes, las predicciones cuánticas promedian hasta coincidir con la física clásica, lo que se llama principio de correspondencia.",
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
      es: {
        title: "Agujero negro vs Estrella de neutrones",
        h1: "Agujero negro vs Estrella de neutrones: estrellas muertas comparadas",
        description:
          "Los agujeros negros atrapan hasta la luz; las estrellas de neutrones son ultradensas pero aún visibles. Compara estos dos restos estelares colapsados.",
        intro:
          "Cuando las estrellas masivas mueren, colapsan en objetos extremos. Dos desenlaces dominan: una estrella de neutrones o, para las estrellas más pesadas, un agujero negro.",
        pros_a: [
          "Una gravedad tan fuerte que ni siquiera la luz puede escapar",
          "Delimitado por un horizonte de sucesos, no por una superficie sólida",
          "Se forma a partir de las estrellas más pesadas que colapsan",
          "La singularidad en el centro tiene una densidad casi infinita",
          "Se detecta por su efecto sobre la materia y la luz cercanas",
        ],
        pros_b: [
          "Una bola ultradensa de neutrones muy empaquetados",
          "Tiene una verdadera superficie sólida",
          "Se forma de estrellas que colapsan por debajo del límite de masa del agujero negro",
          "Puede girar rápido y emitir ondas de radio como un púlsar",
          "Es directamente visible en todo el espectro electromagnético",
        ],
        verdict:
          "Ambos son cadáveres de estrellas masivas. Por debajo de unas tres masas solares, el colapso se detiene en una estrella de neutrones; por encima, la gravedad gana y se forma un agujero negro. Las estrellas de neutrones todavía se pueden ver; los agujeros negros no.",
        faq: [
          {
            q: "¿Cuál es más denso?",
            a: "La singularidad de un agujero negro es de densidad efectivamente infinita, pero las estrellas de neutrones son los objetos visibles más densos que se conocen.",
          },
          {
            q: "¿Puede una estrella de neutrones convertirse en agujero negro?",
            a: "Sí. Si gana suficiente masa, la gravedad supera la presión de los neutrones y colapsa en un agujero negro.",
          },
          {
            q: "¿Qué es un púlsar?",
            a: "Una estrella de neutrones que gira rápido y emite haces de radiación que detectamos como pulsos regulares.",
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
      es: {
        title: "Estrella vs Planeta: ¿cuál es la diferencia?",
        h1: "Estrella vs Planeta: productoras vs reflectoras de luz",
        description:
          "Las estrellas generan su propia luz mediante la fusión; los planetas solo reflejan la luz estelar. Compara estos dos tipos de cuerpo celeste.",
        intro:
          "Mira al cielo de noche y la mayoría de los puntos de luz son estrellas, pero unos pocos son planetas. La diferencia clave es si el objeto produce su propia luz.",
        pros_a: [
          "Genera su propia luz y calor mediante la fusión nuclear",
          "Está hecha sobre todo de plasma de hidrógeno y helio",
          "Se mantiene unida y se alimenta de una gravedad enorme",
          "Titila al verla a través de la atmósfera terrestre",
          "Nuestro Sol es el ejemplo más cercano",
        ],
        pros_b: [
          "No produce luz; refleja la luz de una estrella",
          "Orbita una estrella y ha despejado su trayectoria orbital",
          "Puede ser rocoso como la Tierra o gaseoso como Júpiter",
          "Brilla con una luz estable en lugar de titilar",
          "Es mucho menos masivo que una estrella",
        ],
        verdict:
          "Las estrellas son hornos nucleares que brillan; los planetas son cuerpos más fríos que simplemente reflejan esa luz. Un planeta nunca podría encender la fusión a menos que ganara suficiente masa para convertirse en estrella.",
        faq: [
          {
            q: "¿Por qué titilan las estrellas pero no los planetas?",
            a: "Las estrellas son fuentes puntuales, así que la turbulencia atmosférica las hace titilar; los planetas son pequeños discos y brillan de forma estable.",
          },
          {
            q: "¿Cuán masivo debe ser un objeto para convertirse en estrella?",
            a: "Aproximadamente 80 veces la masa de Júpiter, suficiente para iniciar la fusión del hidrógeno en su núcleo.",
          },
          {
            q: "¿Puede un planeta orbitar dos estrellas?",
            a: "Sí. Los planetas circumbinarios orbitan un par de estrellas, y se han confirmado varios.",
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
      es: {
        title: "Asteroide vs Cometa: cuerpos rocosos vs helados",
        h1: "Asteroide vs Cometa: dos pequeños cuerpos del sistema solar",
        description:
          "Los asteroides son rocosos y metálicos; los cometas son helados y desarrollan colas cerca del Sol. Compara estos pequeños cuerpos del sistema solar.",
        intro:
          "Los asteroides y los cometas son restos del nacimiento del sistema solar, pero difieren en de qué están hechos y de dónde provienen.",
        pros_a: [
          "Está hecho sobre todo de roca y metal",
          "La mayoría orbita en el cinturón de asteroides entre Marte y Júpiter",
          "Se formó en el sistema solar interior, más cálido",
          "Permanece sólido y no desarrolla una cola",
          "Va desde pequeñas rocas hasta cientos de kilómetros de ancho",
        ],
        pros_b: [
          "Está hecho de hielo, polvo y gases congelados",
          "Se origina en el lejano cinturón de Kuiper y la nube de Oort",
          "Se formó en el sistema solar exterior, frío",
          "Desarrolla una coma y una cola brillantes al acercarse al Sol",
          "Sigue órbitas largas y muy elípticas",
        ],
        verdict:
          "Los asteroides son rocosos y se mantienen cerca de casa; los cometas son 'bolas de nieve sucias' heladas del sistema exterior que dan un espectáculo cuando la luz solar vaporiza su hielo en una cola.",
        faq: [
          {
            q: "¿Por qué los cometas tienen colas pero los asteroides no?",
            a: "Los cometas contienen hielo que se vaporiza cerca del Sol, liberando gas y polvo que forman una cola brillante.",
          },
          {
            q: "¿De dónde vienen los cometas?",
            a: "Del cinturón de Kuiper, más allá de Neptuno, y de la nube de Oort, mucho más distante.",
          },
          {
            q: "¿Podría un asteroide chocar con la Tierra?",
            a: "Sí, y varios lo han hecho. Los astrónomos rastrean los asteroides cercanos a la Tierra para evaluar cualquier riesgo de impacto.",
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
      es: {
        title: "Meteoro vs Meteorito: términos de rocas espaciales",
        h1: "Meteoro vs Meteorito: una cuestión de ubicación",
        description:
          "Un meteoro es la estela de luz en el cielo; un meteorito es la roca que sobrevive y aterriza. Compara estos términos de rocas espaciales.",
        intro:
          "Meteoro y meteorito suenan parecido pero describen etapas distintas del mismo suceso. La diferencia es simplemente dónde está la roca espacial.",
        pros_a: [
          "La estela de luz brillante que se ve arder en el cielo",
          "Causada por una roca espacial calentada por el rozamiento del aire",
          "Ocurre en lo alto de la atmósfera terrestre",
          "También se llama estrella fugaz",
          "La mayoría se consumen por completo antes de llegar al suelo",
        ],
        pros_b: [
          "La roca real que sobrevive y llega al suelo",
          "Un objeto sólido que puedes sostener y estudiar",
          "Se encuentra en la superficie de la Tierra tras la caída",
          "Proporciona muestras directas de asteroides y otros mundos",
          "A menudo muestra una corteza de fusión oscura por el calentamiento atmosférico",
        ],
        verdict:
          "El mismo objeto tiene tres nombres: meteoroide en el espacio, meteoro mientras arde a través de la atmósfera y meteorito una vez que aterriza. Los términos siguen su viaje hacia la Tierra.",
        faq: [
          {
            q: "¿Qué es un meteoroide?",
            a: "Un pequeño cuerpo rocoso o metálico que viaja por el espacio antes de entrar en la atmósfera de un planeta.",
          },
          {
            q: "¿La mayoría de los meteoros se convierten en meteoritos?",
            a: "No. La gran mayoría se consumen por completo en la atmósfera y nunca llegan al suelo.",
          },
          {
            q: "¿Qué causa la estela brillante?",
            a: "El rozamiento con el aire calienta e ioniza el gas alrededor de la roca, produciendo una estela luminosa.",
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
      es: {
        title: "Eclipse solar vs lunar: ¿cuál es la diferencia?",
        h1: "Eclipse solar vs lunar: dos alineaciones cósmicas",
        description:
          "Un eclipse solar oculta el Sol; un eclipse lunar oscurece la Luna. Compara cómo funcionan estas dos alineaciones cósmicas.",
        intro:
          "Los eclipses son un juego de sombras entre el Sol, la Tierra y la Luna. Qué cuerpo queda bloqueado decide si es un eclipse solar o lunar.",
        pros_a: [
          "La Luna pasa entre el Sol y la Tierra",
          "La sombra de la Luna bloquea la luz del Sol",
          "Ocurre solo durante la luna nueva",
          "Es visible solo desde una franja estrecha de la Tierra",
          "Nunca debe observarse sin la protección ocular adecuada",
        ],
        pros_b: [
          "La Tierra pasa entre el Sol y la Luna",
          "La sombra de la Tierra cae sobre la Luna",
          "Ocurre solo durante la luna llena",
          "Es visible desde todo el lado nocturno de la Tierra",
          "Es seguro observarlo a simple vista",
        ],
        verdict:
          "En un eclipse solar la sombra de la Luna golpea la Tierra; en un eclipse lunar la sombra de la Tierra golpea la Luna. Los eclipses lunares son más fáciles de ver y seguros de observar; los eclipses solares son más raros desde cualquier punto concreto.",
        faq: [
          {
            q: "¿Por qué un eclipse solar es visible desde menos lugares?",
            a: "La sombra de la Luna es pequeña, así que la totalidad solo cruza una franja estrecha de la superficie terrestre.",
          },
          {
            q: "¿Por qué la Luna se vuelve roja en un eclipse lunar?",
            a: "La luz solar curvada a través de la atmósfera terrestre alcanza la Luna, y las longitudes de onda rojas dominan, dando una 'luna de sangre'.",
          },
          {
            q: "¿Se puede observar un eclipse lunar de forma segura?",
            a: "Sí. A diferencia de un eclipse solar, un eclipse lunar es completamente seguro de ver a simple vista.",
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
      es: {
        title: "Galaxia vs Nebulosa: estructuras cósmicas comparadas",
        h1: "Galaxia vs Nebulosa: ciudades de estrellas vs nubes de gas",
        description:
          "Una galaxia es un vasto conjunto de estrellas; una nebulosa es una nube de gas y polvo. Compara estas dos estructuras cósmicas.",
        intro:
          "Las galaxias y las nebulosas son ambas vistas espectaculares del espacio profundo, pero son cosas muy distintas: una es un sistema estelar, la otra es materia prima.",
        pros_a: [
          "Un enorme sistema de estrellas ligado por la gravedad",
          "Contiene de miles de millones a billones de estrellas",
          "Tiene una estructura definida: espiral, elíptica o irregular",
          "Alberga estrellas, gas, polvo, planetas y materia oscura",
          "Nuestra Vía Láctea es un ejemplo entre billones",
        ],
        pros_b: [
          "Una nube de gas y polvo interestelar",
          "A menudo es el lugar de nacimiento de nuevas estrellas",
          "Es mucho más pequeña que una galaxia",
          "Puede brillar, reflejar luz o parecer oscura",
          "Se encuentra con frecuencia dentro de las galaxias, incluida la nuestra",
        ],
        verdict:
          "Una galaxia es una ciudad de estrellas masiva; una nebulosa es una nube de gas y polvo a menudo dentro de una galaxia. Las nebulosas son las guarderías donde se forman las estrellas, así que forman parte de los ciclos de vida galácticos.",
        faq: [
          {
            q: "¿Están las nebulosas dentro de las galaxias?",
            a: "Normalmente sí. La mayoría de las nebulosas se encuentran dentro de galaxias, incluidas muchas visibles en nuestra propia Vía Láctea.",
          },
          {
            q: "¿Por qué a algunas nebulosas se las llama guarderías estelares?",
            a: "La gravedad junta su gas y polvo hasta que colapsa y se enciende en nuevas estrellas.",
          },
          {
            q: "¿Cuán grande es una galaxia típica?",
            a: "Las galaxias abarcan decenas de miles de años luz y contienen miles de millones o billones de estrellas.",
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
      es: {
        title: "Big Bang vs Estado estacionario: cosmologías",
        h1: "Big Bang vs Estado estacionario: cómo comenzó el universo",
        description:
          "El Big Bang dice que el universo tuvo un inicio caliente y denso; el Estado estacionario decía que siempre existió. Compara estas dos cosmologías.",
        intro:
          "Durante décadas dos teorías rivales compitieron por explicar el origen del universo. Una venció de forma decisiva, pero el debate dio forma a la cosmología moderna.",
        pros_a: [
          "El universo comenzó hace unos 13.800 millones de años",
          "Partió de un estado extremadamente caliente y denso, y se expandió",
          "Predice la radiación de fondo cósmico de microondas",
          "Explica la abundancia observada de hidrógeno y helio",
          "Es el modelo aceptado, respaldado por sólidas pruebas",
        ],
        pros_b: [
          "Proponía que el universo no tenía principio ni fin",
          "Sugería que la materia se crea continuamente a medida que el espacio se expande",
          "Mantenía constante la densidad del universo a lo largo del tiempo",
          "Ofrecía un cosmos eterno y ordenado sin punto de origen",
          "Hoy está rechazada, porque no explica observaciones clave",
        ],
        verdict:
          "La teoría del Big Bang venció porque predijo la radiación de fondo cósmico de microondas, descubierta en 1965. El Estado estacionario no podía explicar esa radiación y la cosmología moderna lo ha abandonado.",
        faq: [
          {
            q: "¿Qué pruebas respaldan el Big Bang?",
            a: "La radiación de fondo cósmico de microondas, la expansión por corrimiento al rojo de las galaxias y la proporción medida de elementos ligeros.",
          },
          {
            q: "¿Por qué se rechazó el Estado estacionario?",
            a: "No podía explicar la radiación de fondo cósmico de microondas ni la evolución de las galaxias a lo largo del tiempo cósmico.",
          },
          {
            q: "¿El Big Bang explotó dentro de un espacio existente?",
            a: "No. El Big Bang creó el espacio y el tiempo mismos; fue una expansión del espacio, no una explosión dentro de él.",
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
      es: {
        title: "Álgebra vs Cálculo: dos ramas de las matemáticas",
        h1: "Álgebra vs Cálculo: de las ecuaciones al cambio",
        description:
          "El álgebra trabaja con incógnitas y ecuaciones; el cálculo estudia tasas de cambio y acumulación. Compara estas ramas de las matemáticas.",
        intro:
          "El álgebra y el cálculo son pilares de las matemáticas. El álgebra sienta las bases, mientras que el cálculo lo extiende a un mundo en constante cambio.",
        pros_a: [
          "Usa letras y símbolos para representar números desconocidos",
          "Resuelve ecuaciones y analiza relaciones",
          "Trabaja con cantidades fijas y estáticas",
          "Es la base de casi todas las matemáticas superiores",
          "Se enseña antes del cálculo en la mayoría de los planes de estudio",
        ],
        pros_b: [
          "Estudia el cambio continuo y el movimiento",
          "Se basa en los conceptos de límites e infinito",
          "Las derivadas miden tasas de cambio",
          "Las integrales miden acumulación y área",
          "Es esencial para la física, la ingeniería y la economía",
        ],
        verdict:
          "El álgebra es el lenguaje y la caja de herramientas de las matemáticas; el cálculo usa esa caja para manejar el cambio. Necesitas un álgebra sólida antes de que el cálculo tenga sentido: se construyen el uno sobre el otro.",
        faq: [
          {
            q: "¿Necesitas álgebra para aprender cálculo?",
            a: "Sí. El cálculo depende en gran medida de la manipulación algebraica, así que una base sólida de álgebra es esencial.",
          },
          {
            q: "¿Para qué se usa principalmente el cálculo?",
            a: "Para modelar el cambio —velocidad, crecimiento, áreas y optimización— en física, ingeniería y economía.",
          },
          {
            q: "¿Quién inventó el cálculo?",
            a: "Isaac Newton y Gottfried Leibniz lo desarrollaron de forma independiente a finales del siglo XVII.",
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
      es: {
        title: "Derivada vs Integral: conceptos centrales del cálculo",
        h1: "Derivada vs Integral: las dos caras del cálculo",
        description:
          "Una derivada mide la tasa de cambio; una integral mide la acumulación y el área. Compara estas dos operaciones del cálculo.",
        intro:
          "El cálculo tiene dos operaciones centrales que están profundamente ligadas. Una hace zoom en el cambio instantáneo; la otra suma pequeñas piezas.",
        pros_a: [
          "Mide la tasa de cambio instantánea",
          "Da la pendiente de una curva en un punto",
          "Se obtiene por derivación",
          "La velocidad es la derivada de la posición",
          "Se usa para hallar valores máximos y mínimos",
        ],
        pros_b: [
          "Mide la acumulación total a lo largo de un intervalo",
          "Da el área bajo una curva",
          "Se obtiene por integración",
          "La distancia es la integral de la velocidad",
          "Se usa para calcular áreas, volúmenes y totales",
        ],
        verdict:
          "Las derivadas y las integrales son operaciones inversas, unidas por el Teorema Fundamental del Cálculo. Derivar deshace integrar, y viceversa. Juntas describen tanto el cambio como la acumulación.",
        faq: [
          {
            q: "¿Cómo se relacionan las derivadas y las integrales?",
            a: "Son operaciones inversas, ligadas por el Teorema Fundamental del Cálculo.",
          },
          {
            q: "¿Qué te dice una derivada?",
            a: "Da la tasa de cambio en un instante, por ejemplo, la pendiente de una curva en un punto.",
          },
          {
            q: "¿Qué calcula una integral?",
            a: "Calcula cantidades acumuladas, lo más habitual el área bajo una curva a lo largo de un intervalo.",
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
      es: {
        title: "Vector vs Escalar: magnitudes en física",
        h1: "Vector vs Escalar: con o sin dirección",
        description:
          "Un vector tiene módulo y dirección; un escalar tiene solo módulo. Compara estos dos tipos de magnitud física.",
        intro:
          "Toda magnitud física es o un vector o un escalar. La distinción es simple pero crucial: ¿tiene dirección?",
        pros_a: [
          "Tiene tanto módulo como dirección",
          "Algunos ejemplos son la velocidad, la fuerza y el desplazamiento",
          "Se dibuja como una flecha cuya longitud indica el tamaño",
          "Se suma usando geometría, no aritmética simple",
          "La dirección es esencial para su significado",
        ],
        pros_b: [
          "Tiene solo módulo, sin dirección",
          "Algunos ejemplos son la masa, la rapidez, el tiempo y la temperatura",
          "Queda totalmente descrito por un solo número y una unidad",
          "Se suma usando aritmética ordinaria",
          "A menudo es el módulo de un vector relacionado",
        ],
        verdict:
          "Los escalares son números únicos; los vectores llevan además una dirección. La rapidez es un escalar, la velocidad es su prima vectorial. Saber qué tipo tienes determina cómo puedes sumar y usar la magnitud.",
        faq: [
          {
            q: "¿Es la temperatura un vector o un escalar?",
            a: "La temperatura es un escalar: tiene un módulo pero ninguna dirección.",
          },
          {
            q: "¿Por qué no se pueden sumar vectores como números ordinarios?",
            a: "Porque la dirección importa; los vectores se combinan usando geometría o suma componente a componente.",
          },
          {
            q: "Da un ejemplo de un vector y su pareja escalar.",
            a: "La velocidad es un vector; su módulo, la rapidez, es el escalar correspondiente.",
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
      es: {
        title: "Media vs Mediana: dos promedios comparados",
        h1: "Media vs Mediana: qué promedio usar",
        description:
          "La media es el promedio aritmético; la mediana es el valor central. Compara estas dos medidas de tendencia central.",
        intro:
          "Tanto la media como la mediana describen el 'centro' de los datos, pero pueden dar respuestas muy distintas cuando los datos están sesgados.",
        pros_a: [
          "La suma de todos los valores dividida entre la cantidad",
          "Usa cada uno de los puntos de datos",
          "Es habitual en las estadísticas y cálculos cotidianos",
          "Se ve muy afectada por los valores atípicos extremos",
          "Es fácil de usar en otras fórmulas matemáticas",
        ],
        pros_b: [
          "El valor central cuando los datos se ordenan",
          "Divide el conjunto de datos en dos mitades iguales",
          "Apenas se ve afectada por los valores atípicos extremos",
          "Representa mejor los valores típicos en datos sesgados",
          "Se usa para ingresos, precios de vivienda y datos similares",
        ],
        verdict:
          "Usa la media para datos simétricos sin grandes valores atípicos; usa la mediana cuando los datos están sesgados —como los ingresos— porque unos pocos valores extremos pueden arrastrar la media lejos de la experiencia típica.",
        faq: [
          {
            q: "¿Por qué se prefiere la mediana para los datos de ingresos?",
            a: "Los ingresos están sesgados por unos pocos que ganan muchísimo; la mediana refleja mejor lo que gana una persona típica.",
          },
          {
            q: "¿Pueden ser iguales la media y la mediana?",
            a: "Sí. En una distribución perfectamente simétrica la media y la mediana son el mismo valor.",
          },
          {
            q: "¿Qué promedio es sensible a los valores atípicos?",
            a: "La media. Un solo valor extremo puede desplazarla notablemente, mientras que la mediana resiste los valores atípicos.",
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
      es: {
        title: "Varianza vs Desviación estándar explicadas",
        h1: "Varianza vs Desviación estándar: medir la dispersión",
        description:
          "La varianza es la dispersión cuadrática media; la desviación estándar es su raíz cuadrada. Compara estas dos medidas de dispersión.",
        intro:
          "Ambas magnitudes miden cuán dispersos están los datos, y están directamente relacionadas: la desviación estándar es simplemente la raíz cuadrada de la varianza.",
        pros_a: [
          "El promedio de las desviaciones al cuadrado respecto a la media",
          "Siempre es no negativa",
          "Se expresa en unidades al cuadrado de los datos originales",
          "Se suma con claridad al combinar variables independientes",
          "Es un bloque fundamental de la teoría estadística",
        ],
        pros_b: [
          "La raíz cuadrada de la varianza",
          "Se expresa en las mismas unidades que los datos originales",
          "Es más fácil de interpretar en términos del mundo real",
          "Se usa para describir la anchura de una distribución normal",
          "Es más común en los informes y las estadísticas cotidianas",
        ],
        verdict:
          "La varianza es matemáticamente cómoda, pero sus unidades al cuadrado son difíciles de interpretar. La desviación estándar deshace la elevación al cuadrado, así que es más fácil de leer. Usa la varianza en demostraciones, la desviación estándar en informes.",
        faq: [
          {
            q: "¿Cómo se relacionan la varianza y la desviación estándar?",
            a: "La desviación estándar es la raíz cuadrada de la varianza, lo que la devuelve a las unidades originales.",
          },
          {
            q: "¿Por qué es más fácil de interpretar la desviación estándar?",
            a: "Está en las mismas unidades que los datos, así que una desviación en metros o dólares tiene sentido intuitivo.",
          },
          {
            q: "¿Puede ser negativa la varianza?",
            a: "No. Como promedia valores al cuadrado, la varianza siempre es cero o positiva.",
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
      es: {
        title: "Permutación vs Combinación: ¿importa el orden?",
        h1: "Permutación vs Combinación: contar arreglos",
        description:
          "Las permutaciones cuentan arreglos ordenados; las combinaciones cuentan selecciones sin orden. Compara estos dos métodos de conteo.",
        intro:
          "Tanto las permutaciones como las combinaciones cuentan formas de elegir elementos, pero la respuesta depende de una pregunta: ¿importa el orden?",
        pros_a: [
          "Cuenta arreglos donde el orden importa",
          "ABC y CBA se cuentan como diferentes",
          "Siempre da un conteo igual o mayor que las combinaciones",
          "Se usa para clasificaciones, contraseñas y órdenes de asientos",
          "Se calcula como n! dividido entre (n menos r) factorial",
        ],
        pros_b: [
          "Cuenta selecciones donde el orden no importa",
          "ABC y CBA se cuentan como el mismo grupo",
          "Siempre da un conteo igual o menor que las permutaciones",
          "Se usa para boletos de lotería, comités y manos de cartas",
          "Se calcula dividiendo las permutaciones entre r factorial",
        ],
        verdict:
          "Pregúntate si el orden importa. Para un podio de carrera (oro, plata, bronce) usa permutaciones; para elegir un comité donde todos los miembros son iguales, usa combinaciones.",
        faq: [
          {
            q: "¿Cómo decido cuál usar?",
            a: "Si reordenar los elementos elegidos crea un resultado diferente, usa permutaciones; si no, usa combinaciones.",
          },
          {
            q: "¿Es una lotería una permutación o una combinación?",
            a: "Una combinación, porque el orden en que se sortean los números normalmente no importa.",
          },
          {
            q: "¿Cuál da un número mayor?",
            a: "Las permutaciones, ya que cada combinación sin orden corresponde a varios arreglos ordenados.",
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
      es: {
        title: "Aprendizaje supervisado vs no supervisado",
        h1: "Aprendizaje supervisado vs no supervisado comparados",
        description:
          "El aprendizaje supervisado se entrena con datos etiquetados; el no supervisado encuentra patrones en datos sin etiquetar. Compara ambos enfoques.",
        intro:
          "El aprendizaje automático tiene dos estilos fundamentales. La diferencia clave es si los datos de entrenamiento vienen con las respuestas correctas adjuntas.",
        pros_a: [
          "Se entrena con datos que incluyen etiquetas o respuestas conocidas",
          "Aprende a predecir salidas a partir de entradas",
          "Se usa para tareas de clasificación y regresión",
          "La precisión se puede medir frente a las etiquetas verdaderas",
          "Necesita datos de entrenamiento etiquetados por humanos, costosos",
        ],
        pros_b: [
          "Se entrena con datos sin ninguna etiqueta",
          "Descubre estructuras y patrones ocultos",
          "Se usa para agrupamiento y reducción de dimensionalidad",
          "Es más difícil de evaluar sin una verdad de referencia",
          "Funciona con abundantes datos brutos sin etiquetar",
        ],
        verdict:
          "Usa el aprendizaje supervisado cuando tengas ejemplos etiquetados y un objetivo claro que predecir. Usa el no supervisado para explorar datos sin etiquetar y descubrir agrupaciones que no definiste de antemano.",
        faq: [
          {
            q: "¿Cuál necesita datos etiquetados?",
            a: "El aprendizaje supervisado. Requiere pares de entrada-salida donde la respuesta correcta ya se conoce.",
          },
          {
            q: "¿Cuál es una tarea típica no supervisada?",
            a: "El agrupamiento: juntar puntos de datos similares sin ninguna categoría predefinida.",
          },
          {
            q: "¿Es uno mejor que el otro?",
            a: "Ninguno. La elección correcta depende de si tus datos están etiquetados y del problema que necesitas resolver.",
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
      es: {
        title: "Clasificación vs Regresión en aprendizaje automático",
        h1: "Clasificación vs Regresión: predecir resultados",
        description:
          "La clasificación predice categorías; la regresión predice números continuos. Compara estas dos tareas de aprendizaje supervisado.",
        intro:
          "Ambas son tareas de aprendizaje supervisado, pero responden a tipos de pregunta distintos. Una ordena los datos en grupos; la otra predice un número.",
        pros_a: [
          "Predice a qué categoría o clase pertenece una entrada",
          "La salida es una etiqueta discreta, como spam o no spam",
          "Se evalúa con exactitud, precisión y exhaustividad",
          "Ejemplos: reconocimiento de imágenes, diagnóstico de enfermedades",
          "Las fronteras de decisión separan las clases",
        ],
        pros_b: [
          "Predice un valor numérico continuo",
          "La salida es un número, como un precio o una temperatura",
          "Se evalúa con métricas de error como el error cuadrático medio",
          "Ejemplos: predicción del precio de viviendas y del valor de acciones",
          "Ajusta una línea o curva a través de los datos",
        ],
        verdict:
          "Pregúntate qué tipo de respuesta necesitas. Si la salida es una etiqueta o categoría, usa clasificación; si es una cantidad en una escala continua, usa regresión.",
        faq: [
          {
            q: "¿Cómo sé qué tarea tengo?",
            a: "Si predices una categoría, es clasificación; si predices un número, es regresión.",
          },
          {
            q: "¿Predecir precios de viviendas es clasificación o regresión?",
            a: "Regresión, porque el precio es un valor numérico continuo en lugar de una categoría fija.",
          },
          {
            q: "¿Puede el mismo algoritmo hacer ambas?",
            a: "Algunos, como los árboles de decisión y las redes neuronales, se pueden adaptar tanto a la clasificación como a la regresión.",
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
      es: {
        title: "Números racionales vs irracionales explicados",
        h1: "Números racionales vs irracionales: dos tipos de número",
        description:
          "Los números racionales se pueden escribir como fracciones; los irracionales no. Compara estos dos tipos de números reales.",
        intro:
          "Todo número real es racional o irracional. La línea divisoria es si se puede expresar como una fracción simple.",
        pros_a: [
          "Se puede escribir como una fracción de dos enteros",
          "Su expansión decimal termina o se repite",
          "Incluye todos los enteros y los decimales finitos",
          "Ejemplos: 1/2, 7, 0,75 y 0,333 periódico",
          "Es cerrado bajo la suma, la resta y la multiplicación",
        ],
        pros_b: [
          "No se puede escribir como una fracción de dos enteros",
          "Su expansión decimal nunca termina y nunca se repite",
          "Incluye constantes famosas como pi y la raíz cuadrada de 2",
          "Ejemplos: pi, e y la proporción áurea",
          "Rellenan los huecos entre los números racionales en la recta",
        ],
        verdict:
          "Los números racionales se comportan limpiamente como fracciones con decimales predecibles. Los números irracionales como pi siguen para siempre sin patrón. Juntos forman el conjunto completo de los números reales.",
        faq: [
          {
            q: "¿Es pi racional o irracional?",
            a: "Pi es irracional; su expansión decimal sigue para siempre sin repetirse.",
          },
          {
            q: "¿Cómo se puede reconocer un número irracional?",
            a: "Si su decimal nunca termina y nunca se asienta en un patrón repetitivo, es irracional.",
          },
          {
            q: "¿Es irracional la raíz cuadrada de 4?",
            a: "No. La raíz cuadrada de 4 es 2, un número entero, así que es racional.",
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
      es: {
        title: "Números primos vs compuestos explicados",
        h1: "Números primos vs compuestos: bloques de las matemáticas",
        description:
          "Los números primos tienen exactamente dos divisores; los números compuestos tienen más. Compara estas dos clases de números enteros.",
        intro:
          "Los números enteros mayores que 1 se dividen en dos grupos. La diferencia se reduce a cuántos factores tiene un número.",
        pros_a: [
          "Tiene exactamente dos divisores distintos: 1 y él mismo",
          "No se puede dividir en factores enteros más pequeños",
          "Ejemplos: 2, 3, 5, 7, 11 y 13",
          "Los 'átomos' a partir de los cuales se construyen todos los enteros",
          "El dos es el único número primo par",
        ],
        pros_b: [
          "Tiene más de dos divisores",
          "Se puede factorizar en números enteros más pequeños",
          "Ejemplos: 4, 6, 8, 9, 10 y 12",
          "Siempre se puede expresar como un producto de primos",
          "La mayoría de los números enteros son compuestos",
        ],
        verdict:
          "Los primos son los bloques indivisibles; los compuestos son productos de esos bloques. El Teorema Fundamental de la Aritmética dice que todo entero mayor que 1 tiene una factorización en primos única.",
        faq: [
          {
            q: "¿Es 1 primo o compuesto?",
            a: "Ninguno. El número 1 tiene un solo divisor, así que se clasifica como ni primo ni compuesto.",
          },
          {
            q: "¿Por qué es especial el 2 entre los primos?",
            a: "Es el único número primo par; todos los demás números pares son divisibles entre 2 y, por tanto, compuestos.",
          },
          {
            q: "¿Qué es la factorización en primos?",
            a: "Escribir un número compuesto como un producto de números primos, lo cual es único para cada entero.",
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
      es: {
        title: "Geometría vs Topología: forma y espacio",
        h1: "Geometría vs Topología: formas rígidas vs elásticas",
        description:
          "La geometría estudia formas y medidas exactas; la topología estudia propiedades que se conservan al estirar. Compara estos campos matemáticos.",
        intro:
          "La geometría y la topología estudian ambas la forma, pero les importan cosas muy distintas: una mide con precisión, la otra ignora por completo el tamaño.",
        pros_a: [
          "Estudia distancias, ángulos y formas exactas",
          "Las medidas como la longitud y el área importan",
          "Las formas son rígidas; doblarlas las cambia",
          "Incluye sistemas euclidianos y no euclidianos",
          "Se usa en la construcción, la navegación y el diseño",
        ],
        pros_b: [
          "Estudia propiedades que no cambian bajo deformación continua",
          "Estirar y doblar están permitidos, rasgar no",
          "Ignora el tamaño, la distancia y el ángulo exactos",
          "Una taza de café y una rosquilla son topológicamente iguales",
          "Se usa en análisis de datos, redes y física",
        ],
        verdict:
          "La geometría es la matemática de las formas y medidas precisas; a la topología a veces se la llama 'geometría de la lámina elástica' porque estudia lo que sobrevive al estiramiento. Ambas revelan la estructura del espacio.",
        faq: [
          {
            q: "¿Por qué una taza de café es igual a una rosquilla en topología?",
            a: "Ambas tienen exactamente un agujero, y una se puede deformar en la otra sin rasgar.",
          },
          {
            q: "¿Le importa la distancia a la topología?",
            a: "No. La topología ignora distancias y ángulos exactos, centrándose solo en la conexión y los agujeros.",
          },
          {
            q: "¿Qué campo está más centrado en la medición?",
            a: "La geometría. Depende en gran medida de longitudes, ángulos y áreas exactas.",
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
      es: {
        title: "Volcán vs Terremoto: eventos geológicos",
        h1: "Volcán vs Terremoto: dos caras de una Tierra inquieta",
        description:
          "Los volcanes hacen erupcionar magma hacia la superficie; los terremotos liberan energía como sacudidas del suelo. Compara estos eventos geológicos.",
        intro:
          "Los volcanes y los terremotos están impulsados ambos por fuerzas de las profundidades de la Tierra, pero expresan esa energía de formas completamente distintas.",
        pros_a: [
          "Una abertura que hace erupcionar magma, ceniza y gases",
          "Construye tierra y crea nueva roca con el tiempo",
          "A menudo da señales de advertencia antes de erupcionar",
          "Se concentra en los límites de placas y los puntos calientes",
          "Puede afectar al clima al esparcir ceniza en la atmósfera",
        ],
        pros_b: [
          "Una liberación súbita de energía que sacude el suelo",
          "Está causado por la rotura de roca a lo largo de fallas",
          "Normalmente golpea sin una advertencia práctica",
          "Se mide en magnitud en la escala de magnitud de momento",
          "Puede desencadenar tsunamis, deslizamientos y colapsos de edificios",
        ],
        verdict:
          "Ambos provienen de la tectónica de placas. Los volcanes canalizan calor y roca fundida hacia arriba; los terremotos liberan la tensión acumulada como ondas sísmicas. A menudo ocurren en las mismas regiones, como el Cinturón de Fuego del Pacífico.",
        faq: [
          {
            q: "¿Puede un volcán causar un terremoto?",
            a: "Sí. El magma que se mueve bajo tierra puede fracturar la roca y desencadenar terremotos volcánicos.",
          },
          {
            q: "¿Cuál es más fácil de predecir?",
            a: "Los volcanes a menudo dan señales de advertencia; los terremotos normalmente golpean con poca o ninguna advertencia.",
          },
          {
            q: "¿Por qué ambos ocurren en los límites de placas?",
            a: "Los límites de placas son donde la corteza terrestre roza, se separa y se hunde, liberando calor y tensión.",
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
      es: {
        title: "Roca ígnea vs sedimentaria comparadas",
        h1: "Roca ígnea vs sedimentaria: cómo se forman las rocas",
        description:
          "La roca ígnea se forma a partir de magma enfriado; la roca sedimentaria se forma a partir de sedimento compactado. Compara estos dos tipos de roca.",
        intro:
          "Las rocas se agrupan en tres familias. Las rocas ígneas y sedimentarias se forman de maneras completamente distintas: una a partir del fuego, la otra a partir de la acumulación.",
        pros_a: [
          "Se forma cuando el magma o la lava fundida se enfría y se solidifica",
          "Puede enfriarse despacio bajo tierra o rápido en la superficie",
          "A menudo tiene cristales minerales entrelazados",
          "Algunos ejemplos son el granito y el basalto",
          "Rara vez contiene fósiles",
        ],
        pros_b: [
          "Se forma cuando el sedimento se compacta y se cementa",
          "Se acumula en capas o estratos visibles",
          "Está hecha de fragmentos, minerales o restos orgánicos",
          "Algunos ejemplos son la arenisca y la caliza",
          "Comúnmente contiene fósiles",
        ],
        verdict:
          "La roca ígnea nace del calor cuando el magma se enfría; la roca sedimentaria se construye despacio a partir de capas de detritos. La roca sedimentaria conserva la mayoría de los fósiles, mientras que la roca ígnea registra la actividad volcánica pasada.",
        faq: [
          {
            q: "¿Qué tipo de roca contiene fósiles?",
            a: "La roca sedimentaria. Se forma suavemente en capas, así que puede conservar los restos de vida antigua.",
          },
          {
            q: "¿Cuál es el tercer tipo principal de roca?",
            a: "La roca metamórfica, formada cuando una roca existente se transforma por el calor y la presión.",
          },
          {
            q: "¿Por qué el granito tiene cristales visibles?",
            a: "Se enfrió despacio en lo profundo del subsuelo, dando a los minerales tiempo para crecer en grandes cristales.",
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
      es: {
        title: "Glaciar vs Iceberg: dos formas de hielo",
        h1: "Glaciar vs Iceberg: hielo terrestre vs hielo flotante",
        description:
          "Un glaciar es un río de hielo de movimiento lento sobre tierra; un iceberg es un bloque que flota en el mar. Compara estas formas de hielo.",
        intro:
          "Los glaciares y los icebergs son ambos hielo de agua dulce, y están conectados: muchos icebergs son simplemente trozos que se desprendieron de un glaciar.",
        pros_a: [
          "Una gran masa de hielo que fluye despacio sobre tierra",
          "Se forma por la compactación de la nieve durante muchos años",
          "Permanece asentado sobre el lecho rocoso o las montañas",
          "Puede excavar valles y dar forma a los paisajes",
          "Almacena la mayor parte del agua dulce del mundo",
        ],
        pros_b: [
          "Un bloque de hielo que flota libremente en el océano",
          "A menudo se desprende, o 'pare', de un glaciar o una plataforma de hielo",
          "Alrededor del 90 por ciento de su masa queda bajo el agua",
          "Va a la deriva con las corrientes oceánicas y el viento",
          "Está hecho de agua dulce, pese a flotar en agua salada",
        ],
        verdict:
          "Un glaciar es hielo sobre tierra que se mueve despacio bajo su propio peso; un iceberg es la cría flotante que se desprende hacia el mar. Ambos almacenan agua dulce apartada del océano.",
        faq: [
          {
            q: "¿De dónde vienen los icebergs?",
            a: "La mayoría de los icebergs se desprenden de los bordes de glaciares y plataformas de hielo que llegan al mar.",
          },
          {
            q: "¿Por qué la mayor parte de un iceberg está bajo el agua?",
            a: "El hielo es solo ligeramente menos denso que el agua de mar, así que alrededor del 90 por ciento del iceberg permanece sumergido.",
          },
          {
            q: "¿Están hechos de agua salada los icebergs?",
            a: "No. Los icebergs son agua dulce congelada, aunque floten en el océano salado.",
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
      es: {
        title: "Huracán vs Tifón: misma tormenta, nombres distintos",
        h1: "Huracán vs Tifón: una cuestión de geografía",
        description:
          "Los huracanes y los tifones son el mismo tipo de tormenta, nombrados de forma distinta según la región. Compara estos ciclones tropicales.",
        intro:
          "Huracán y tifón describen exactamente el mismo fenómeno meteorológico. La única diferencia real es en qué parte de la Tierra se forma la tormenta.",
        pros_a: [
          "El nombre usado en el Atlántico y el Pacífico nororiental",
          "Afecta al Caribe, al golfo de EE. UU. y a la costa este",
          "Se clasifica en la escala Saffir-Simpson, categorías 1 a 5",
          "La temporada de huracanes alcanza su pico aproximadamente de agosto a octubre",
          "Un ciclón tropical en rotación con un ojo central en calma",
        ],
        pros_b: [
          "El nombre usado en el océano Pacífico noroccidental",
          "Afecta al este y sudeste de Asia, incluido Japón",
          "Un 'supertifón' marca la categoría más intensa",
          "Puede ocurrir durante más meses del año en mares más cálidos",
          "La misma estructura de ciclón tropical en rotación",
        ],
        verdict:
          "Científicamente, los huracanes y los tifones son tormentas idénticas: ambos son ciclones tropicales. La etiqueta simplemente cambia según la cuenca oceánica. En el océano Índico la misma tormenta se llama ciclón.",
        faq: [
          {
            q: "¿Es un tifón más fuerte que un huracán?",
            a: "No de forma inherente. Son el mismo tipo de tormenta; la intensidad varía de una tormenta a otra, no por el nombre.",
          },
          {
            q: "¿Cómo se llama la tormenta en el océano Índico?",
            a: "Simplemente ciclón. Los tres nombres marcan tres regiones para un mismo fenómeno.",
          },
          {
            q: "¿Qué alimenta estas tormentas?",
            a: "El agua oceánica cálida por encima de unos 26 grados Celsius aporta el calor y la humedad que necesitan.",
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
      es: {
        title: "El Niño vs La Niña: patrones climáticos del Pacífico",
        h1: "El Niño vs La Niña: dos caras de un ciclo climático",
        description:
          "El Niño calienta el Pacífico central; La Niña lo enfría. Compara estas dos fases opuestas del mismo ciclo climático.",
        intro:
          "El Niño y La Niña son las fases cálida y fría de un ciclo climático del Pacífico que altera los patrones meteorológicos en todo el mundo.",
        pros_a: [
          "La fase cálida de El Niño-Oscilación del Sur",
          "Las aguas superficiales del Pacífico central y oriental se calientan",
          "Debilita los vientos alisios habituales de este a oeste",
          "A menudo trae sequía a Australia e Indonesia",
          "Tiende a elevar las temperaturas medias globales",
        ],
        pros_b: [
          "La fase fría del mismo ciclo climático",
          "Las aguas superficiales del Pacífico central y oriental se enfrían",
          "Refuerza los vientos alisios",
          "A menudo trae condiciones más húmedas a Australia y Asia",
          "Tiende a bajar ligeramente las temperaturas medias globales",
        ],
        verdict:
          "El Niño y La Niña son oscilaciones opuestas del ciclo ENOS. El Niño calienta el Pacífico y empuja las temperaturas globales al alza; La Niña lo enfría. Juntos dan forma a las lluvias y tormentas en varios continentes.",
        faq: [
          {
            q: "¿Qué es el ENOS?",
            a: "El Niño-Oscilación del Sur, el ciclo climático general del Pacífico que incluye tanto El Niño como La Niña.",
          },
          {
            q: "¿Qué fase es más cálida a nivel global?",
            a: "Los años de El Niño tienden a ser más cálidos en todo el mundo; los años de La Niña suelen ser un poco más fríos.",
          },
          {
            q: "¿Con qué frecuencia ocurren?",
            a: "El ciclo normalmente oscila cada dos a siete años, aunque el momento es irregular.",
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
      es: {
        title: "Clima vs Tiempo: ¿cuál es la diferencia?",
        h1: "Clima vs Tiempo: largo plazo vs corto plazo",
        description:
          "El tiempo es la atmósfera del día a día; el clima es el promedio a largo plazo. Compara estos dos términos que se confunden a menudo.",
        intro:
          "El tiempo y el clima describen ambos la atmósfera, pero en escalas temporales muy distintas. Uno es lo que ves hoy; el otro es lo que esperas a lo largo de décadas.",
        pros_a: [
          "El promedio a largo plazo del tiempo a lo largo de décadas",
          "Se mide a lo largo de periodos de 30 años o más",
          "Describe las condiciones típicas de una región",
          "Cambia despacio y refleja tendencias amplias",
          "Ejemplos: un clima desértico o un clima tropical",
        ],
        pros_b: [
          "El estado de la atmósfera en un momento dado",
          "Se mide a lo largo de horas y días",
          "Describe la temperatura, la lluvia, el viento y las nubes actuales",
          "Cambia rápido y es difícil de predecir con mucha antelación",
          "Ejemplos: una tarde lluviosa o una mañana soleada",
        ],
        verdict:
          "El tiempo es lo que te toca en un día concreto; el clima es lo que esperas en promedio. Un día frío no refuta un clima que se calienta: el clima es el patrón a largo plazo detrás del tiempo diario.",
        faq: [
          {
            q: "¿Cuánto tiempo hay que observar para medir el clima?",
            a: "Al menos 30 años de datos es el periodo estándar para definir el clima de una región.",
          },
          {
            q: "¿Un día frío refuta el cambio climático?",
            a: "No. El clima es un promedio de décadas; un solo día frío es solo tiempo a corto plazo.",
          },
          {
            q: "¿Por qué es difícil predecir el tiempo con mucha antelación?",
            a: "La atmósfera es caótica, así que diminutas incertidumbres crecen rápido más allá de una o dos semanas.",
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
      es: {
        title: "Fotosíntesis vs Respiración: flujo de energía",
        h1: "Fotosíntesis vs Respiración celular comparadas",
        description:
          "La fotosíntesis almacena energía en glucosa; la respiración la libera. Compara estos dos procesos biológicos opuestos.",
        intro:
          "La fotosíntesis y la respiración celular son procesos espejo. Uno capta la energía de la luz solar; el otro la libera para las actividades de la vida.",
        pros_a: [
          "Convierte luz solar, dióxido de carbono y agua en glucosa",
          "Almacena energía en enlaces químicos y libera oxígeno",
          "Ocurre en los cloroplastos de plantas y algas",
          "Requiere luz para producirse",
          "Retira dióxido de carbono de la atmósfera",
        ],
        pros_b: [
          "Descompone la glucosa para liberar energía utilizable",
          "Consume oxígeno y produce dióxido de carbono y agua",
          "Ocurre en las mitocondrias de casi todas las células",
          "Sucede continuamente, con luz o en la oscuridad",
          "Alimenta la actividad celular al producir ATP",
        ],
        verdict:
          "La fotosíntesis y la respiración son opuestos químicos que se equilibran entre sí. Las plantas hacen ambas; los animales solo respiran. Juntas hacen circular el carbono, el oxígeno y la energía por el mundo vivo.",
        faq: [
          {
            q: "¿Hacen las plantas ambos procesos?",
            a: "Sí. Las plantas fotosintetizan con luz y respiran todo el tiempo para usar la energía almacenada.",
          },
          {
            q: "¿Dónde ocurre cada proceso?",
            a: "La fotosíntesis ocurre en los cloroplastos; la respiración celular ocurre en las mitocondrias.",
          },
          {
            q: "¿Cómo se relacionan los dos?",
            a: "Los productos de uno son los reactivos del otro, formando un ciclo continuo de energía y gases.",
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
      es: {
        title: "Respiración aeróbica vs anaeróbica explicada",
        h1: "Respiración aeróbica vs anaeróbica: con o sin oxígeno",
        description:
          "La respiración aeróbica usa oxígeno; la respiración anaeróbica no. Compara estas dos formas en que las células liberan energía.",
        intro:
          "Las células liberan energía de los alimentos de dos maneras. El factor decisivo es si hay oxígeno disponible para completar el proceso.",
        pros_a: [
          "Requiere oxígeno para liberar energía de la glucosa",
          "Produce una gran cantidad de ATP por molécula de glucosa",
          "Sus productos finales son dióxido de carbono y agua",
          "Es el proceso principal en la mayoría de las células casi siempre",
          "Descompone por completo la glucosa para un rendimiento máximo",
        ],
        pros_b: [
          "Libera energía sin usar oxígeno",
          "Produce mucho menos ATP por molécula de glucosa",
          "Produce ácido láctico en los músculos o etanol en la levadura",
          "Se usa durante el ejercicio intenso o en condiciones de poco oxígeno",
          "Es una vía de respaldo más rápida pero menos eficiente",
        ],
        verdict:
          "La respiración aeróbica es eficiente y es la opción por defecto cuando hay oxígeno presente. La respiración anaeróbica es un recurso rápido para esfuerzos cortos e intensos cuando escasea el oxígeno, pero rinde mucha menos energía.",
        faq: [
          {
            q: "¿Por qué la respiración anaeróbica causa fatiga muscular?",
            a: "Produce ácido láctico, que se acumula en los músculos durante el ejercicio intenso y causa una sensación de ardor.",
          },
          {
            q: "¿Cuál produce más energía?",
            a: "La respiración aeróbica rinde mucho más ATP por glucosa porque descompone la molécula por completo.",
          },
          {
            q: "¿Usa la levadura la respiración anaeróbica?",
            a: "Sí. La levadura fermenta el azúcar de forma anaeróbica, produciendo etanol y dióxido de carbono.",
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
      es: {
        title: "Vena vs Arteria: vasos sanguíneos comparados",
        h1: "Vena vs Arteria: dos tipos de vaso sanguíneo",
        description:
          "Las arterias llevan la sangre desde el corazón; las venas la devuelven. Compara estos dos tipos principales de vaso sanguíneo.",
        intro:
          "El sistema circulatorio depende de dos tipos principales de vaso. Sus estructuras difieren porque manejan la sangre a presiones muy distintas.",
        pros_a: [
          "Lleva la sangre de vuelta hacia el corazón",
          "Normalmente lleva sangre pobre en oxígeno",
          "Tiene paredes más finas y menor presión interna",
          "Contiene válvulas unidireccionales para evitar el reflujo",
          "A menudo es visible azulada bajo la piel",
        ],
        pros_b: [
          "Lleva la sangre desde el corazón hacia el exterior",
          "Normalmente lleva sangre rica en oxígeno",
          "Tiene paredes gruesas, musculares y elásticas",
          "Soporta la presión alta de cada latido del corazón",
          "Se sitúa más profunda en el cuerpo y tiene un pulso fuerte",
        ],
        verdict:
          "Las arterias empujan sangre de alta presión desde el corazón, por eso son gruesas y elásticas. Las venas devuelven sangre de baja presión y usan válvulas para mantenerla en movimiento. Los vasos pulmonares invierten la regla habitual del oxígeno.",
        faq: [
          {
            q: "¿Por qué las venas tienen válvulas pero las arterias no?",
            a: "Las venas llevan sangre de baja presión, así que las válvulas evitan que fluya hacia atrás, sobre todo contra la gravedad.",
          },
          {
            q: "¿Todas las arterias llevan sangre rica en oxígeno?",
            a: "Casi todas lo hacen, pero la arteria pulmonar es una excepción: lleva sangre pobre en oxígeno hacia los pulmones.",
          },
          {
            q: "¿Por qué las paredes de las arterias son más gruesas?",
            a: "Deben soportar la presión alta de la sangre bombeada directamente desde el corazón con cada latido.",
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
      es: {
        title: "Neurona vs Célula glial: células del sistema nervioso",
        h1: "Neurona vs Célula glial: señalizadoras y de apoyo",
        description:
          "Las neuronas transmiten señales; las células gliales las apoyan y protegen. Compara estos dos tipos de célula del sistema nervioso.",
        intro:
          "El sistema nervioso está hecho de dos tipos principales de célula. Las neuronas acaparan el protagonismo, pero las células gliales mantienen todo en marcha en silencio.",
        pros_a: [
          "Transmite señales eléctricas y químicas",
          "Tiene dendritas, un cuerpo celular y un axón",
          "Se comunica a través de uniones llamadas sinapsis",
          "Generalmente no puede dividirse una vez madura",
          "Las células centrales de procesamiento de información del cerebro",
        ],
        pros_b: [
          "Apoya, protege y nutre a las neuronas",
          "No transmite ella misma los impulsos nerviosos",
          "Forma la vaina de mielina que acelera las señales",
          "Puede dividirse y multiplicarse a lo largo de toda la vida",
          "Incluye astrocitos, oligodendrocitos y microglía",
        ],
        verdict:
          "Las neuronas son las células de señalización que transportan pensamientos y reflejos; las células gliales son el equipo de apoyo que las aísla, alimenta y defiende. El cerebro necesita que ambas trabajen juntas para funcionar.",
        faq: [
          {
            q: "¿Transmiten las células gliales señales nerviosas?",
            a: "No. Las células gliales apoyan a las neuronas pero no transportan ellas mismas los impulsos nerviosos.",
          },
          {
            q: "¿Qué hace la vaina de mielina?",
            a: "Fabricada por células gliales, aísla los axones y acelera enormemente la transmisión de señales.",
          },
          {
            q: "¿Pueden regenerarse estas células?",
            a: "Las células gliales pueden dividirse a lo largo de toda la vida, mientras que las neuronas maduras generalmente no.",
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
      es: {
        title: "Virus vs Bacteria: dos tipos de microbio",
        h1: "Virus vs Bacteria: célula viva vs partícula inerte",
        description:
          "Las bacterias son células vivas individuales; los virus son partículas inertes que necesitan un anfitrión. Compara estos dos tipos de microbio.",
        intro:
          "Los virus y las bacterias causan ambos enfermedades, pero son fundamentalmente distintos. Uno es un organismo vivo; el otro apenas cuenta como vivo.",
        pros_a: [
          "No está hecho de células; es una partícula de material genético en una cubierta",
          "No puede reproducirse sin secuestrar una célula anfitriona",
          "Es mucho más pequeño que una bacteria",
          "Se considera no vivo fuera de un anfitrión",
          "Se trata con antivirales y se previene con vacunas",
        ],
        pros_b: [
          "Un organismo unicelular vivo y completo",
          "Puede reproducirse por sí sola dividiéndose",
          "Es más grande que un virus y visible al microscopio óptico",
          "Muchas son inofensivas o incluso útiles para los humanos",
          "Se trata con antibióticos cuando causa una infección",
        ],
        verdict:
          "Las bacterias son células vivas que pueden prosperar de forma independiente; los virus son inertes hasta que invaden un anfitrión. Los antibióticos matan bacterias pero no hacen nada contra los virus, por eso importa el diagnóstico correcto.",
        faq: [
          {
            q: "¿Por qué los antibióticos no funcionan contra los virus?",
            a: "Los antibióticos atacan estructuras y procesos de las células bacterianas vivas, que los virus simplemente no tienen.",
          },
          {
            q: "¿Son dañinas todas las bacterias?",
            a: "No. La mayoría de las bacterias son inofensivas y muchas son beneficiosas, como las de tu intestino.",
          },
          {
            q: "¿Están vivos los virus?",
            a: "Se debate. Los virus no pueden reproducirse solos y normalmente se consideran no vivos fuera de un anfitrión.",
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
      es: {
        title: "Antígeno vs Anticuerpo: la respuesta inmunitaria",
        h1: "Antígeno vs Anticuerpo: detonante y defensor",
        description:
          "Un antígeno desencadena una respuesta inmunitaria; un anticuerpo es la proteína que la combate. Compara estos dos términos del sistema inmunitario.",
        intro:
          "Los antígenos y los anticuerpos funcionan como una pareja emparejada en el sistema inmunitario. Uno es la amenaza que el cuerpo detecta; el otro es la respuesta a medida del cuerpo.",
        pros_a: [
          "Una molécula extraña que desencadena una respuesta inmunitaria",
          "A menudo es una proteína en la superficie de un patógeno",
          "El sistema inmunitario lo reconoce como 'no propio'",
          "Algunos ejemplos son partes de virus y bacterias",
          "Cada antígeno tiene una forma específica que el cuerpo identifica",
        ],
        pros_b: [
          "Una proteína en forma de Y producida por el sistema inmunitario",
          "La fabrican glóbulos blancos llamados linfocitos B",
          "Se une de forma específica a un antígeno coincidente",
          "Neutraliza o marca los patógenos para su destrucción",
          "Proporciona inmunidad duradera tras la infección o la vacunación",
        ],
        verdict:
          "Un antígeno es la alarma: un marcador extraño que el cuerpo detecta. Un anticuerpo es la respuesta hecha a medida que se acopla a ese antígeno. Las vacunas funcionan introduciendo antígenos para entrenar la producción de anticuerpos.",
        faq: [
          {
            q: "¿Cómo reconocen los anticuerpos a los antígenos?",
            a: "Cada anticuerpo tiene un sitio de unión con una forma que encaja con un antígeno específico, como una llave y una cerradura.",
          },
          {
            q: "¿Qué células fabrican los anticuerpos?",
            a: "Los linfocitos B, un tipo de glóbulo blanco, producen y liberan los anticuerpos.",
          },
          {
            q: "¿Cómo usan las vacunas los antígenos?",
            a: "Las vacunas exponen el cuerpo a antígenos inofensivos para que fabrique anticuerpos antes de una infección real.",
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
      es: {
        title: "Vacuna vs Antibiótico: prevenir vs tratar",
        h1: "Vacuna vs Antibiótico: dos herramientas de la medicina",
        description:
          "Las vacunas previenen la infección antes de que ocurra; los antibióticos tratan las infecciones bacterianas una vez que empiezan. Compara estas herramientas.",
        intro:
          "Las vacunas y los antibióticos son ambos vitales para la medicina, pero actúan en extremos opuestos de la enfermedad: una impide que empiece, el otro la combate una vez presente.",
        pros_a: [
          "Previene la enfermedad antes de que ocurra la infección",
          "Entrena el sistema inmunitario usando antígenos inofensivos",
          "Funciona contra muchos virus y algunas bacterias",
          "Proporciona una protección duradera, a veces de por vida",
          "Protege a las comunidades mediante la inmunidad de grupo",
        ],
        pros_b: [
          "Trata infecciones que ya han comenzado",
          "Mata bacterias o impide que se multipliquen",
          "Funciona solo contra bacterias, nunca contra virus",
          "No proporciona protección duradera una vez terminado el tratamiento",
          "El uso excesivo impulsa el aumento de la resistencia a los antibióticos",
        ],
        verdict:
          "Las vacunas son preventivas: preparan tu inmunidad por adelantado. Los antibióticos son curativos: combaten una infección bacteriana activa. Ninguno sustituye al otro, y los antibióticos nunca tratan una enfermedad viral.",
        faq: [
          {
            q: "¿Pueden los antibióticos tratar la gripe?",
            a: "No. La gripe está causada por un virus, y los antibióticos solo funcionan contra las bacterias.",
          },
          {
            q: "¿Dan las vacunas una protección permanente?",
            a: "A menudo duradera, pero algunas vacunas necesitan refuerzos a medida que la inmunidad se desvanece poco a poco.",
          },
          {
            q: "¿Qué es la resistencia a los antibióticos?",
            a: "Cuando las bacterias evolucionan para sobrevivir a los antibióticos, haciendo que las infecciones sean más difíciles de tratar con el tiempo.",
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
      es: {
        title: "Hormona vs Neurotransmisor: mensajeros del cuerpo",
        h1: "Hormona vs Neurotransmisor: señales lentas vs rápidas",
        description:
          "Las hormonas viajan por la sangre para efectos lentos en todo el cuerpo; los neurotransmisores actúan rápido en las sinapsis. Compara estos mensajeros.",
        intro:
          "El cuerpo usa mensajeros químicos para coordinarse. Las hormonas y los neurotransmisores hacen esto de dos maneras y escalas temporales muy distintas.",
        pros_a: [
          "Un mensajero químico liberado en el torrente sanguíneo",
          "La producen las glándulas del sistema endocrino",
          "Viaja a lo largo y ancho y actúa sobre órganos diana distantes",
          "Sus efectos tardan más en empezar pero duran más",
          "Algunos ejemplos son la insulina, la adrenalina y el estrógeno",
        ],
        pros_b: [
          "Un mensajero químico liberado en una sinapsis",
          "Lo producen las neuronas del sistema nervioso",
          "Actúa localmente sobre una célula vecina a través de un hueco diminuto",
          "Sus efectos son muy rápidos pero breves",
          "Algunos ejemplos son la dopamina, la serotonina y la acetilcolina",
        ],
        verdict:
          "Las hormonas son el sistema de difusión lento y de largo alcance del cuerpo a través de la sangre; los neurotransmisores son mensajeros rápidos y locales en las uniones nerviosas. Algunas sustancias, como la adrenalina, pueden actuar como ambos.",
        faq: [
          {
            q: "¿Cuál actúa más rápido?",
            a: "Los neurotransmisores actúan en milisegundos en las sinapsis; las hormonas son más lentas porque viajan por la sangre.",
          },
          {
            q: "¿Puede una sustancia ser ambas cosas?",
            a: "Sí. La adrenalina actúa como neurotransmisor en el sistema nervioso y como hormona en la sangre.",
          },
          {
            q: "¿Cuál dura más?",
            a: "Los efectos hormonales generalmente duran más, mientras que los efectos de los neurotransmisores son breves y se eliminan rápido.",
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
      es: {
        title: "Sueño REM vs NREM: las fases del sueño",
        h1: "Sueño REM vs NREM: dos fases de descanso",
        description:
          "El sueño REM es activo y lleno de sueños; el sueño NREM es profundo y reparador. Compara los dos tipos principales de sueño.",
        intro:
          "Una noche de sueño alterna entre dos tipos principales. El sueño REM y el NREM hacen tareas distintas para el cerebro y el cuerpo.",
        pros_a: [
          "Sueño de movimientos oculares rápidos, cuando ocurren los sueños vívidos",
          "La actividad cerebral se parece a la de estar despierto",
          "Los músculos voluntarios del cuerpo quedan temporalmente paralizados",
          "Es importante para la memoria y el procesamiento emocional",
          "Constituye una mayor parte del sueño hacia la mañana",
        ],
        pros_b: [
          "Sueño sin movimientos oculares rápidos, dividido en tres etapas",
          "Incluye el sueño más profundo, de ondas lentas y reparador",
          "La actividad cerebral se ralentiza y se vuelve más regular",
          "Es importante para la reparación física y el crecimiento",
          "Domina la primera mitad de la noche",
        ],
        verdict:
          "El sueño NREM se encarga de la restauración física profunda; el sueño REM apoya la memoria, el aprendizaje y la salud emocional. Una noche sana pasa por ambos varias veces, así que cada uno cumple un papel esencial.",
        faq: [
          {
            q: "¿Cuándo ocurren la mayoría de los sueños?",
            a: "La mayor parte de los sueños vívidos ocurre durante el sueño REM, cuando la actividad cerebral es alta.",
          },
          {
            q: "¿Qué sueño es más reparador para el cuerpo?",
            a: "El sueño NREM profundo de ondas lentas es la fase más reparadora físicamente.",
          },
          {
            q: "¿Cuánto dura un ciclo de sueño?",
            a: "Un ciclo completo por el NREM y el REM dura aproximadamente 90 minutos y se repite durante la noche.",
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
      es: {
        title: "Bastones vs Conos: los fotorreceptores del ojo",
        h1: "Bastones vs Conos: cómo ve el ojo",
        description:
          "Los bastones detectan la luz tenue y el movimiento; los conos detectan el color y el detalle. Compara las dos células fotorreceptoras de la retina.",
        intro:
          "Tu retina alberga dos clases de células que detectan la luz. Los bastones y los conos se reparten el trabajo de la visión entre condiciones tenues y brillantes.",
        pros_a: [
          "Muy sensibles a los niveles bajos de luz",
          "Permiten la visión nocturna y la detección del movimiento",
          "No distinguen colores, solo tonos de gris",
          "Mucho más numerosos, alrededor de 120 millones por ojo",
          "Concentrados en los bordes exteriores de la retina",
        ],
        pros_b: [
          "Funcionan mejor con luz brillante",
          "Permiten la visión del color y el detalle nítido",
          "Vienen en tres tipos que detectan el rojo, el verde y el azul",
          "Menos numerosos, alrededor de 6 millones por ojo",
          "Concentrados en la fóvea central para un enfoque nítido",
        ],
        verdict:
          "Los bastones te dan una visión sensible en blanco y negro en la oscuridad; los conos te dan una visión colorida y detallada con luz brillante. Por eso los colores se desvanecen y el detalle se vuelve borroso de noche, cuando solo los bastones están activos.",
        faq: [
          {
            q: "¿Por qué no vemos bien el color de noche?",
            a: "Con luz tenue solo los bastones están activos, y los bastones no pueden detectar color, solo tonos de gris.",
          },
          {
            q: "¿Qué células dan la visión central nítida?",
            a: "Los conos, densamente agrupados en la fóvea en el centro de la retina, proporcionan el detalle más nítido.",
          },
          {
            q: "¿Qué causa el daltonismo?",
            a: "El daltonismo suele deberse a tipos de conos ausentes o defectuosos, a menudo el rojo o el verde.",
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
      es: {
        title: "Genotipo vs Fenotipo: genes y rasgos",
        h1: "Genotipo vs Fenotipo: código vs expresión",
        description:
          "El genotipo es el código genético de un organismo; el fenotipo son sus rasgos observables. Compara estos dos conceptos de la genética.",
        intro:
          "La genética distingue entre las instrucciones que porta un organismo y los resultados visibles. Esa es la diferencia entre genotipo y fenotipo.",
        pros_a: [
          "El conjunto completo de genes que porta un organismo",
          "El propio código genético heredado",
          "No se puede ver directamente sin pruebas genéticas",
          "Se mantiene igual a lo largo de toda la vida del organismo",
          "Determina el rango potencial de rasgos",
        ],
        pros_b: [
          "Los rasgos físicos y de comportamiento observables",
          "La expresión visible del genotipo",
          "Se puede ver y medir directamente",
          "Puede cambiar con el entorno, la edad y el estilo de vida",
          "Resulta de la interacción del genotipo con su entorno",
        ],
        verdict:
          "El genotipo es el plano genético; el fenotipo es el resultado terminado que puedes observar. El mismo genotipo puede dar distintos fenotipos según el entorno, así que los genes fijan el potencial, no el destino.",
        faq: [
          {
            q: "¿Pueden dos organismos compartir un genotipo pero diferir en fenotipo?",
            a: "Sí. Los gemelos idénticos comparten un genotipo, pero pueden desarrollar diferencias por el entorno y el estilo de vida.",
          },
          {
            q: "¿Afecta el entorno al genotipo?",
            a: "No al código heredado en sí, pero el entorno influye fuertemente en qué rasgos aparecen en el fenotipo.",
          },
          {
            q: "¿Cuál puedes observar directamente?",
            a: "El fenotipo. El genotipo generalmente requiere pruebas genéticas para determinarse.",
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
      es: {
        title: "Alelo dominante vs recesivo explicado",
        h1: "Alelo dominante vs recesivo: cómo se heredan los rasgos",
        description:
          "Un alelo dominante se manifiesta incluso con una copia; un alelo recesivo necesita dos copias. Compara estas dos formas de un gen.",
        intro:
          "Los genes vienen en versiones alternativas llamadas alelos. Que un rasgo aparezca depende de si su alelo es dominante o recesivo.",
        pros_a: [
          "Se expresa incluso cuando solo hay una copia presente",
          "Enmascara el efecto de un alelo recesivo asociado",
          "Por convención se escribe con una letra mayúscula",
          "Se manifiesta en el fenotipo de un individuo heterocigoto",
          "Solo se necesita una copia para que el rasgo aparezca",
        ],
        pros_b: [
          "Se expresa solo cuando hay dos copias presentes",
          "Queda oculto siempre que también haya un alelo dominante presente",
          "Por convención se escribe con una letra minúscula",
          "Se puede portar sin que se manifieste en el fenotipo",
          "Ambos progenitores deben transmitirlo para que el rasgo aparezca",
        ],
        verdict:
          "Un alelo dominante necesita solo una copia para manifestarse; un alelo recesivo necesita dos. Los portadores pueden transmitir alelos recesivos ocultos, por eso los rasgos recesivos pueden saltarse generaciones.",
        faq: [
          {
            q: "¿Qué es un portador?",
            a: "Alguien con un alelo recesivo y uno dominante que no manifiesta el rasgo recesivo pero puede transmitirlo.",
          },
          {
            q: "¿Por qué los rasgos recesivos se saltan generaciones?",
            a: "Permanecen ocultos en los portadores y solo reaparecen cuando dos alelos recesivos se encuentran en la descendencia.",
          },
          {
            q: "¿Cuántos alelos tiene un individuo por gen?",
            a: "Dos: uno heredado de cada progenitor, que juntos determinan el rasgo.",
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
      es: {
        title: "Endotermo vs Ectotermo: sangre caliente vs fría",
        h1: "Endotermo vs Ectotermo: cómo se mantienen calientes los animales",
        description:
          "Los endotermos generan su propio calor corporal; los ectotermos dependen del entorno. Compara los animales de sangre caliente y de sangre fría.",
        intro:
          "Los animales regulan la temperatura corporal de dos maneras principales. Algunos generan su propio calor internamente; otros dependen de su entorno.",
        pros_a: [
          "Genera calor corporal a través de su propio metabolismo",
          "Mantiene una temperatura interna estable",
          "Permanece activo en entornos fríos",
          "Necesita mucho más alimento para alimentar la producción de calor",
          "Incluye a los mamíferos y las aves",
        ],
        pros_b: [
          "Depende de fuentes externas para el calor corporal",
          "La temperatura corporal cambia con el entorno",
          "Toma el sol o busca sombra para regular su calor",
          "Necesita mucho menos alimento porque no genera su propio calor",
          "Incluye a reptiles, anfibios, peces e insectos",
        ],
        verdict:
          "Los endotermos pagan un alto coste alimentario para mantenerse calientes y activos en cualquier lugar y momento. Los ectotermos ahorran energía pero dependen del entorno y se ralentizan con el frío. Cada estrategia encaja en un nicho distinto.",
        faq: [
          {
            q: "¿Por qué los reptiles toman el sol?",
            a: "Como ectotermos no pueden generar su propio calor, así que absorben calor de la luz solar para mantenerse activos.",
          },
          {
            q: "¿Por qué los endotermos necesitan tanto alimento?",
            a: "Generar calor corporal constante a través del metabolismo requiere un suministro de energía grande y constante.",
          },
          {
            q: "¿Están siempre más calientes los endotermos?",
            a: "No siempre, pero mantienen una temperatura interna estable independientemente del entorno.",
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
      es: {
        title: "Onda longitudinal vs transversal explicada",
        h1: "Onda longitudinal vs transversal: dos tipos de onda",
        description:
          "Las ondas longitudinales vibran a lo largo de la dirección de avance; las ondas transversales vibran perpendicularmente a ella. Compara estos dos tipos de onda.",
        intro:
          "Las ondas transportan energía de dos maneras básicas. La diferencia es la dirección en que vibra el medio respecto al avance de la onda.",
        pros_a: [
          "El medio vibra paralelo a la dirección de la onda",
          "Forma regiones de compresión y rarefacción",
          "El sonido es el ejemplo más conocido",
          "Puede viajar a través de sólidos, líquidos y gases",
          "Un movimiento de empuje y tracción a lo largo de la línea de avance",
        ],
        pros_b: [
          "El medio vibra en ángulo recto respecto a la dirección de la onda",
          "Forma crestas y valles",
          "La luz y las ondas en la superficie del agua son ejemplos",
          "La luz puede viajar por el vacío; las de tipo mecánico no",
          "Un movimiento de arriba abajo o de lado a lado",
        ],
        verdict:
          "Las ondas longitudinales comprimen y estiran el medio a lo largo de su trayectoria, como el sonido. Las ondas transversales lo sacuden de lado, como la luz o las ondulaciones. Algunas ondas, como las sísmicas, vienen en ambas formas.",
        faq: [
          {
            q: "¿Es el sonido una onda longitudinal o transversal?",
            a: "El sonido es una onda longitudinal, que viaja a través de compresiones y rarefacciones del medio.",
          },
          {
            q: "¿Puede la luz viajar por el espacio vacío?",
            a: "Sí. La luz es una onda electromagnética transversal que no necesita ningún medio y cruza el vacío.",
          },
          {
            q: "¿Producen los terremotos ambos tipos de onda?",
            a: "Sí. Las ondas sísmicas P son longitudinales y las ondas S son transversales.",
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
      es: {
        title: "Inercia vs Cantidad de movimiento explicadas",
        h1: "Inercia vs Cantidad de movimiento: dos propiedades del movimiento",
        description:
          "La inercia es la resistencia al cambio de movimiento; la cantidad de movimiento es la masa en movimiento. Compara estas dos propiedades fundamentales.",
        intro:
          "La inercia y la cantidad de movimiento se relacionan ambas con la masa y el movimiento, pero describen cosas distintas: una resiste el cambio, la otra cuantifica el movimiento.",
        pros_a: [
          "La tendencia de un objeto a resistir cambios en su movimiento",
          "Depende solo de la masa, no de la velocidad",
          "Es una propiedad, no una magnitud con unidades",
          "Más masa significa más inercia",
          "Explica por qué un objeto pesado es difícil de poner en marcha o detener",
        ],
        pros_b: [
          "Una medida del movimiento que lleva un objeto",
          "Depende tanto de la masa como de la velocidad",
          "Es una magnitud vectorial medida en kilogramos-metros por segundo",
          "Es cero cuando un objeto está en reposo",
          "Se conserva en las colisiones dentro de un sistema cerrado",
        ],
        verdict:
          "La inercia es la resistencia que tiene un objeto a cambiar su movimiento; la cantidad de movimiento es cuánto movimiento tiene realmente. Un camión estacionado tiene una inercia alta pero cantidad de movimiento cero hasta que se pone en marcha.",
        faq: [
          {
            q: "¿Tiene cantidad de movimiento un objeto en reposo?",
            a: "No. La cantidad de movimiento depende de la velocidad, así que un objeto inmóvil tiene cantidad de movimiento cero pese a tener inercia.",
          },
          {
            q: "¿Qué es la conservación de la cantidad de movimiento?",
            a: "En un sistema cerrado la cantidad de movimiento total se mantiene constante, incluso a través de las colisiones.",
          },
          {
            q: "¿Depende la inercia de la rapidez?",
            a: "No. La inercia depende solo de la masa; la cantidad de movimiento es la magnitud que también depende de la velocidad.",
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
      es: {
        title: "Átomo vs Molécula: bloques de la materia",
        h1: "Átomo vs Molécula: unidad única vs grupo enlazado",
        description:
          "Un átomo es la unidad más pequeña de un elemento; una molécula son dos o más átomos enlazados. Compara estos conceptos básicos de la materia.",
        intro:
          "La materia está hecha de átomos, y los átomos pueden unirse en moléculas. Entender la diferencia es el cimiento de las ciencias físicas.",
        pros_a: [
          "La unidad más pequeña de un elemento que conserva su identidad",
          "Está hecho de protones, neutrones y electrones",
          "No se puede descomponer por medios químicos",
          "Se identifica por su número de protones",
          "El bloque básico de construcción de toda la materia",
        ],
        pros_b: [
          "Dos o más átomos enlazados entre sí",
          "Se mantiene unida mediante enlaces químicos",
          "Puede contener átomos de un solo elemento o de varios",
          "Tiene propiedades distintas de sus átomos individuales",
          "Algunos ejemplos son el agua, el oxígeno gaseoso y la glucosa",
        ],
        verdict:
          "Un átomo es un único bloque de construcción; una molécula es una estructura construida a partir de esos bloques enlazados. Dos átomos de hidrógeno y un átomo de oxígeno se enlazan en una molécula de agua.",
        faq: [
          {
            q: "¿Puede una molécula estar hecha de un solo elemento?",
            a: "Sí. El oxígeno gaseoso es una molécula de dos átomos de oxígeno enlazados entre sí.",
          },
          {
            q: "¿Qué mantiene unida a una molécula?",
            a: "Los enlaces químicos, formados cuando los átomos comparten o transfieren electrones.",
          },
          {
            q: "¿Cuál es más pequeño, un átomo o una molécula?",
            a: "Un átomo es más pequeño; una molécula está construida a partir de dos o más átomos.",
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
      es: {
        title: "Energía renovable vs no renovable comparadas",
        h1: "Energía renovable vs no renovable: las fuentes",
        description:
          "La energía renovable se repone de forma natural; la energía no renovable es finita. Compara estas dos categorías de fuente de energía.",
        intro:
          "Las fuentes de energía se dividen en dos bandos. La cuestión clave es si la fuente se repone más rápido de lo que la usamos.",
        pros_a: [
          "Se repone de forma natural y no se agotará",
          "Incluye la energía solar, eólica, hidráulica y geotérmica",
          "Produce poco o ningún gas de efecto invernadero durante su uso",
          "A menudo depende de condiciones naturales intermitentes",
          "Se vuelve más barata y extendida cada año",
        ],
        pros_b: [
          "Existe en un suministro finito que con el tiempo se agotará",
          "Incluye el carbón, el petróleo, el gas natural y el combustible nuclear",
          "Proporciona un suministro de energía fiable y a demanda",
          "Quemar combustibles fósiles libera gases de efecto invernadero",
          "Tardó millones de años en formarse bajo tierra",
        ],
        verdict:
          "La energía renovable es sostenible y de bajas emisiones, pero puede ser intermitente. La energía no renovable es fiable y densa, pero finita y a menudo contaminante. El cambio global favorece las renovables.",
        faq: [
          {
            q: "¿Es renovable la energía nuclear?",
            a: "No. La energía nuclear usa uranio, un combustible finito, así que se clasifica como no renovable.",
          },
          {
            q: "¿Por qué la energía renovable es a veces intermitente?",
            a: "La solar y la eólica dependen del clima y la hora del día, así que la producción varía y puede necesitar almacenamiento.",
          },
          {
            q: "¿Por qué tardaron tanto en formarse los combustibles fósiles?",
            a: "Se formaron a partir de materia orgánica antigua comprimida bajo tierra a lo largo de millones de años.",
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
      es: {
        title: "Telescopio vs Microscopio: lejos vs pequeño",
        h1: "Telescopio vs Microscopio: dos herramientas para ver",
        description:
          "Un telescopio revela objetos distantes; un microscopio revela objetos diminutos. Compara estos dos instrumentos científicos esenciales.",
        intro:
          "Ambos instrumentos amplían la vista humana más allá de sus límites naturales, pero en direcciones opuestas: uno hacia fuera, al cosmos, otro hacia dentro, a lo microscópico.",
        pros_a: [
          "Amplía objetos distantes y lejanos",
          "Recoge la luz tenue de las estrellas y las galaxias",
          "Se usa en astronomía para estudiar el universo",
          "Viene en diseños de refracción y de reflexión",
          "Una apertura grande recoge más luz para objetos más tenues",
        ],
        pros_b: [
          "Amplía objetos extremadamente pequeños y cercanos",
          "Revela células, microbios y estructuras finas",
          "Se usa en biología, medicina y ciencia de materiales",
          "Incluye los tipos de microscopio óptico y electrónico",
          "Un aumento mayor revela un detalle cada vez más fino",
        ],
        verdict:
          "Un telescopio acerca a la vista el cosmos distante recogiendo luz tenue; un microscopio enfoca el mundo diminuto ampliando objetos cercanos. Cada uno abrió todo un reino de la ciencia.",
        faq: [
          {
            q: "¿Puede un telescopio funcionar como microscopio?",
            a: "No. Están optimizados para tareas opuestas: uno para luz tenue distante, otro para objetos diminutos cercanos.",
          },
          {
            q: "¿Por qué son mejores los telescopios grandes?",
            a: "Una apertura mayor recoge más luz, revelando objetos más tenues y distantes.",
          },
          {
            q: "¿Qué usa un microscopio electrónico en lugar de luz?",
            a: "Usa un haz de electrones, lo que permite un aumento mucho mayor que los microscopios ópticos.",
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
      es: {
        title: "Rotación vs Traslación: los dos movimientos de la Tierra",
        h1: "Rotación vs Traslación: girar y orbitar",
        description:
          "La rotación es girar sobre un eje; la traslación es orbitar alrededor de otro cuerpo. Compara estos dos movimientos de los planetas.",
        intro:
          "La Tierra y otros planetas se mueven de dos maneras a la vez. Un movimiento nos da el día y la noche; el otro nos da el año.",
        pros_a: [
          "Un objeto que gira alrededor de su propio eje interno",
          "La rotación de la Tierra tarda alrededor de 24 horas",
          "Causa el ciclo del día y la noche",
          "Crea el movimiento aparente del Sol por el cielo",
          "También explica el abultamiento en el ecuador de un planeta",
        ],
        pros_b: [
          "Un objeto que orbita alrededor de otro cuerpo",
          "La traslación de la Tierra alrededor del Sol tarda unos 365 días",
          "Define la duración de un año",
          "Combinada con la inclinación del eje, causa las estaciones",
          "Sigue una trayectoria orbital aproximadamente elíptica",
        ],
        verdict:
          "La rotación es el giro diario que trae el día y la noche; la traslación es la órbita anual que trae las estaciones. La Tierra hace ambas simultáneamente, por eso tenemos días, años y estaciones.",
        faq: [
          {
            q: "¿Qué movimiento causa el día y la noche?",
            a: "La rotación. A medida que la Tierra gira sobre su eje, cada lado se enfrenta al Sol por turnos.",
          },
          {
            q: "¿Qué causa las estaciones?",
            a: "La traslación de la Tierra alrededor del Sol combinada con la inclinación de su eje.",
          },
          {
            q: "¿Cuánto dura una traslación de la Tierra?",
            a: "Alrededor de 365,25 días, por eso añadimos un día bisiesto cada cuatro años.",
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
      es: {
        title: "Solsticio vs Equinoccio: marcar las estaciones",
        h1: "Solsticio vs Equinoccio: fechas clave del año",
        description:
          "Un solsticio marca el día más largo o más corto; un equinoccio marca el día y la noche iguales. Compara estos eventos astronómicos.",
        intro:
          "Cuatro fechas clave estructuran el año. Los solsticios y los equinoccios marcan los puntos de inflexión de las estaciones de la Tierra.",
        pros_a: [
          "Marca el día más largo o más corto del año",
          "Ocurre alrededor del 21 de junio y el 21 de diciembre",
          "El Sol alcanza su posición de mediodía más alta o más baja",
          "Comienza el verano o el invierno astronómico",
          "Está causado por la inclinación del eje terrestre hacia o lejos del Sol",
        ],
        pros_b: [
          "Marca un día con luz diurna y oscuridad casi iguales",
          "Ocurre alrededor del 20 de marzo y el 22 de septiembre",
          "El Sol cruza directamente sobre el ecuador",
          "Comienza la primavera o el otoño astronómico",
          "La duración de la luz diurna es más o menos la misma en todo el mundo",
        ],
        verdict:
          "Los solsticios son los extremos —los días más largos y más cortos— mientras que los equinoccios son los puntos de equilibrio con día y noche iguales. Juntos los cuatro marcan el inicio de cada estación astronómica.",
        faq: [
          {
            q: "¿Cuántos solsticios y equinoccios hay cada año?",
            a: "Dos de cada uno: un solsticio de verano y uno de invierno, y un equinoccio de primavera y uno de otoño.",
          },
          {
            q: "¿Qué causa el solsticio?",
            a: "El eje inclinado de la Tierra apunta lo máximo hacia o lejos del Sol, dando el día más largo o más corto.",
          },
          {
            q: "¿Son exactamente iguales el día y la noche en un equinoccio?",
            a: "Casi, pero no exactamente, debido a la refracción atmosférica y el tamaño aparente del Sol.",
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
      es: {
        title: "Tendón vs Ligamento: tejido conectivo comparado",
        h1: "Tendón vs Ligamento: qué conecta con qué",
        description:
          "Los tendones conectan el músculo con el hueso; los ligamentos conectan hueso con hueso. Compara estos dos tipos de tejido conectivo.",
        intro:
          "Los tendones y los ligamentos son ambos tejidos conectivos resistentes, pero enlazan estructuras distintas y tienen funciones distintas en el cuerpo.",
        pros_a: [
          "Conecta el músculo con el hueso",
          "Transmite la fuerza de tracción de los músculos para mover los huesos",
          "Está hecho de fibras de colágeno densas y ligeramente elásticas",
          "Algunos ejemplos son el tendón de Aquiles",
          "Permite el movimiento cuando un músculo se contrae",
        ],
        pros_b: [
          "Conecta hueso con hueso",
          "Estabiliza las articulaciones y limita el movimiento excesivo",
          "Está hecho de fibras de colágeno ligeramente elásticas",
          "Algunos ejemplos son los ligamentos de la rodilla como el LCA",
          "Mantiene el esqueleto unido en las articulaciones",
        ],
        verdict:
          "Los tendones convierten la potencia muscular en movimiento al enlazar el músculo con el hueso; los ligamentos mantienen estables las articulaciones al enlazar hueso con hueso. Ambos son resistentes pero sanan despacio debido a un riego sanguíneo limitado.",
        faq: [
          {
            q: "¿Cuál conecta el músculo con el hueso?",
            a: "Los tendones. Transmiten la fuerza de un músculo que se contrae al hueso que mueve.",
          },
          {
            q: "¿Por qué los tendones y los ligamentos sanan despacio?",
            a: "Tienen un riego sanguíneo relativamente pobre, así que la reparación tarda más que en el músculo.",
          },
          {
            q: "¿Qué es el LCA?",
            a: "El ligamento cruzado anterior, un ligamento clave de la rodilla que estabiliza la articulación.",
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
      es: {
        title: "Meteorización vs Erosión: dar forma al terreno",
        h1: "Meteorización vs Erosión: descomponer vs transportar",
        description:
          "La meteorización rompe la roca en su sitio; la erosión transporta el material roto lejos. Compara estos dos procesos geológicos.",
        intro:
          "La meteorización y la erosión dan forma juntas a la superficie de la Tierra, pero son pasos distintos: uno descompone la roca, el otro la mueve.",
        pros_a: [
          "Descompone la roca y los minerales en su sitio",
          "Puede ser física, química o biológica",
          "No implica el movimiento del material",
          "La causan el agua, el hielo, la temperatura y los seres vivos",
          "El primer paso en la formación del suelo",
        ],
        pros_b: [
          "Transporta la roca rota y el suelo a nuevas ubicaciones",
          "La realizan el viento, el agua, el hielo y la gravedad",
          "Siempre implica el movimiento de material",
          "Excava valles, cañones y litorales",
          "Deposita el sedimento en otro lugar a medida que se ralentiza",
        ],
        verdict:
          "La meteorización descompone la roca donde está; la erosión transporta luego los trozos sueltos. La meteorización normalmente debe ocurrir primero para aportar el material que la erosión transporta.",
        faq: [
          {
            q: "¿Implica movimiento la meteorización?",
            a: "No. La meteorización descompone la roca en su sitio; la erosión es el proceso que la mueve.",
          },
          {
            q: "¿Cuáles son los tipos de meteorización?",
            a: "Física (romper), química (disolver) y biológica (causada por los seres vivos).",
          },
          {
            q: "¿Qué es la sedimentación?",
            a: "Cuando los agentes erosivos se ralentizan y dejan caer el sedimento que transportaban.",
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
      es: {
        title: "Lente convexa vs cóncava: convergente vs divergente",
        h1: "Lente convexa vs cóncava: cómo las lentes desvían la luz",
        description:
          "Una lente convexa hace converger la luz en un foco; una lente cóncava la dispersa. Compara estos dos tipos básicos de lente.",
        intro:
          "Las lentes desvían la luz para formar imágenes. Que junten la luz o la dispersen depende de su forma.",
        pros_a: [
          "Más gruesa en el centro que en los bordes",
          "Hace converger los rayos de luz paralelos en un punto focal",
          "Puede formar imágenes reales y proyectables",
          "Se usa en lupas y cámaras",
          "Corrige la hipermetropía en las gafas",
        ],
        pros_b: [
          "Más delgada en el centro que en los bordes",
          "Hace diverger los rayos de luz paralelos hacia fuera",
          "Siempre forma una imagen virtual más pequeña",
          "Se usa en mirillas y algunos instrumentos ópticos",
          "Corrige la miopía en las gafas",
        ],
        verdict:
          "Una lente convexa reúne la luz en un foco y puede ampliar o proyectar imágenes; una lente cóncava dispersa la luz y reduce las imágenes. Las gafas usan la forma que corrija un problema de visión dado.",
        faq: [
          {
            q: "¿Qué lente amplía?",
            a: "Una lente convexa amplía, por eso las lupas usan una forma convexa.",
          },
          {
            q: "¿Qué lente corrige la miopía?",
            a: "Una lente cóncava, porque hace diverger la luz para mover el punto focal de vuelta a la retina.",
          },
          {
            q: "¿Puede una lente cóncava formar una imagen real?",
            a: "No. Una lente cóncava sola siempre produce una imagen virtual, más pequeña y derecha.",
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
      es: {
        title: "Inmunidad innata vs adaptativa explicada",
        h1: "Inmunidad innata vs adaptativa: dos líneas de defensa",
        description:
          "La inmunidad innata es rápida y general; la inmunidad adaptativa es lenta pero específica. Compara los dos sistemas de defensa del cuerpo.",
        intro:
          "El sistema inmunitario tiene dos ramas que cooperan. Una responde de inmediato a cualquier amenaza; la otra aprende y ataca a invasores específicos.",
        pros_a: [
          "Presente desde el nacimiento y lista de inmediato",
          "Responde rápido, en minutos a horas",
          "Actúa contra cualquier patógeno de forma general",
          "Incluye la piel, el moco y glóbulos blancos como los fagocitos",
          "No tiene una memoria duradera de las infecciones pasadas",
        ],
        pros_b: [
          "Se desarrolla a lo largo de la vida mediante la exposición",
          "Responde más despacio, a lo largo de días al principio",
          "Ataca a patógenos específicos con precisión",
          "Implica linfocitos B, linfocitos T y anticuerpos",
          "Construye una memoria duradera para respuestas futuras más rápidas",
        ],
        verdict:
          "La inmunidad innata es el primer respondedor rápido y de uso general; la inmunidad adaptativa es la especialista lenta y precisa que recuerda. Trabajan juntas, y las vacunas entrenan la rama adaptativa.",
        faq: [
          {
            q: "¿Qué inmunidad tiene memoria?",
            a: "La inmunidad adaptativa. Recuerda a los patógenos pasados para una segunda respuesta más rápida y fuerte.",
          },
          {
            q: "¿Cuál responde más rápido?",
            a: "La inmunidad innata actúa en minutos a horas; la inmunidad adaptativa tarda días en activarse plenamente.",
          },
          {
            q: "¿Cómo encajan las vacunas?",
            a: "Las vacunas entrenan la inmunidad adaptativa para que construya memoria contra un patógeno antes de la exposición real.",
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
      es: {
        title: "Gimnosperma vs Angiosperma: grupos de plantas comparados",
        h1: "Gimnosperma vs Angiosperma: dos grupos de plantas con semilla",
        description:
          "Las gimnospermas tienen semillas desnudas en conos; las angiospermas tienen semillas encerradas en un fruto. Compara estos dos grupos de plantas con semilla.",
        intro:
          "Las plantas con semilla se dividen en dos grupos principales. La diferencia reside en cómo se protegen sus semillas y cómo se reproducen.",
        pros_a: [
          "Produce semillas 'desnudas' no encerradas en un fruto",
          "Normalmente porta las semillas en conos",
          "No produce flores",
          "A menudo perennifolia, como los pinos, abetos y piceas",
          "Un grupo más antiguo, dominante antes de las plantas con flor",
        ],
        pros_b: [
          "Produce semillas encerradas dentro de un fruto",
          "Se reproduce usando flores",
          "El fruto ayuda a proteger las semillas y favorece su dispersión",
          "Incluye la mayoría de las plantas conocidas, de las hierbas a los robles",
          "El grupo más grande y diverso de plantas terrestres",
        ],
        verdict:
          "Las gimnospermas son las antiguas portadoras de conos con semillas expuestas; las angiospermas son las plantas con flor cuyo fruto protege sus semillas. Las angiospermas ahora dominan la mayoría de los ecosistemas terrestres.",
        faq: [
          {
            q: "¿Tienen flores las gimnospermas?",
            a: "No. Las gimnospermas se reproducen con conos en lugar de flores y tienen semillas expuestas.",
          },
          {
            q: "¿Qué ventaja da el fruto a las angiospermas?",
            a: "El fruto protege las semillas y ayuda a dispersarlas, a menudo a través de animales que lo comen.",
          },
          {
            q: "¿Qué grupo es más antiguo?",
            a: "Las gimnospermas son el grupo más antiguo; las angiospermas aparecieron después y ahora dominan.",
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
      es: {
        title: "Exactitud vs Precisión: calidad de la medición",
        h1: "Exactitud vs Precisión: dos medidas de buenos datos",
        description:
          "La exactitud es la cercanía al valor verdadero; la precisión es la consistencia entre mediciones. Compara estos dos términos científicos.",
        intro:
          "En ciencia, la exactitud y la precisión no son lo mismo. Una medición puede tener una sin la otra, y los buenos datos necesitan ambas.",
        pros_a: [
          "Cuán cerca está una medición del valor verdadero",
          "Describe la corrección, no la consistencia",
          "Se mejora calibrando los instrumentos correctamente",
          "Un resultado exacto da en el valor objetivo real",
          "Puede estar presente aunque los resultados estén dispersos",
        ],
        pros_b: [
          "Cuán cerca están entre sí las mediciones repetidas",
          "Describe la consistencia, no la corrección",
          "Se mejora con una técnica cuidadosa y repetible",
          "Un conjunto preciso de resultados está estrechamente agrupado",
          "Puede estar presente aunque todos los resultados estén equivocados",
        ],
        verdict:
          "La exactitud consiste en dar en el valor verdadero; la precisión, en la repetibilidad. Imagina una diana: los dardos precisos se agrupan estrechamente, los dardos exactos caen cerca del centro. Las buenas mediciones necesitan ambas.",
        faq: [
          {
            q: "¿Puede una medición ser precisa pero no exacta?",
            a: "Sí. Las lecturas repetidas pueden coincidir estrechamente y aun así estar todas lejos del valor verdadero.",
          },
          {
            q: "¿Cuál describe la cercanía al valor verdadero?",
            a: "La exactitud. La precisión, en cambio, describe cuán consistentes son las mediciones repetidas.",
          },
          {
            q: "¿Cómo se mejora la exactitud?",
            a: "Calibrando los instrumentos y eliminando los errores sistemáticos que sesgan cada lectura.",
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
      es: {
        title: "Masa vs Densidad: cantidad vs compacidad",
        h1: "Masa vs Densidad: cuánto vs cuán empaquetado",
        description:
          "La masa es la cantidad de materia; la densidad es la masa por unidad de volumen. Compara estas dos propiedades físicas relacionadas.",
        intro:
          "La masa y la densidad implican ambas a la materia, pero la densidad añade una idea crucial: cómo se empaqueta esa materia en el espacio.",
        pros_a: [
          "La cantidad total de materia en un objeto",
          "Se mide en kilogramos (kg)",
          "No depende del volumen del objeto",
          "Se mantiene igual independientemente de la forma o la ubicación",
          "Un objeto más grande puede tener más masa con el mismo material",
        ],
        pros_b: [
          "La masa dividida entre el volumen",
          "Se mide en kilogramos por metro cúbico",
          "Describe cuán apretada está empaquetada la materia",
          "Determina si un objeto flota o se hunde",
          "Es una propiedad del material, no del tamaño del objeto",
        ],
        verdict:
          "La masa te dice cuánta materia hay presente; la densidad te dice cuán compacta es. Un kilogramo de plomo y un kilogramo de plumas tienen igual masa pero densidades y volúmenes muy distintos.",
        faq: [
          {
            q: "¿Por qué flota un barco de acero?",
            a: "Su densidad general, incluido el casco lleno de aire, es menor que la del agua.",
          },
          {
            q: "¿Depende la densidad del tamaño del objeto?",
            a: "No. La densidad es una propiedad del material; un trozo pequeño y uno grande de oro tienen la misma densidad.",
          },
          {
            q: "¿Cómo se calcula la densidad?",
            a: "Se divide la masa de un objeto entre su volumen.",
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
      es: {
        title: "Datos cualitativos vs cuantitativos comparados",
        h1: "Datos cualitativos vs cuantitativos: palabras vs números",
        description:
          "Los datos cualitativos describen cualidades con palabras; los datos cuantitativos miden cantidades con números. Compara estos dos tipos de datos.",
        intro:
          "La investigación recoge dos clases básicas de datos. Una capta descripciones y categorías; la otra capta números medibles.",
        pros_a: [
          "Describe cualidades, características y categorías",
          "Se registra como palabras, etiquetas u observaciones",
          "Responde a preguntas sobre el porqué y el cómo",
          "Ejemplos: colores, opiniones y texturas",
          "Se analiza buscando temas y patrones",
        ],
        pros_b: [
          "Mide cantidades y valores numéricos",
          "Se registra como números que se pueden contar o medir",
          "Responde a preguntas sobre cuánto o cuántos",
          "Ejemplos: altura, temperatura y puntuaciones de exámenes",
          "Se analiza usando estadística y cálculos",
        ],
        verdict:
          "Los datos cualitativos captan descripciones ricas y razones; los datos cuantitativos captan mediciones precisas. Una investigación sólida a menudo combina ambos: números para la escala, palabras para el significado.",
        faq: [
          {
            q: "¿Es el color de ojos cualitativo o cuantitativo?",
            a: "Cualitativo. Es una categoría descriptiva en lugar de un número medido.",
          },
          {
            q: "¿Qué tipo de datos usa la estadística?",
            a: "Los datos cuantitativos, porque consisten en números que se pueden analizar matemáticamente.",
          },
          {
            q: "¿Puede un estudio usar ambos?",
            a: "Sí. La investigación de métodos mixtos combina la profundidad cualitativa con la medición cuantitativa.",
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
      es: {
        title: "Variable independiente vs dependiente explicada",
        h1: "Variable independiente vs dependiente en los experimentos",
        description:
          "La variable independiente es lo que cambias; la variable dependiente es lo que mides. Compara estos dos términos de los experimentos.",
        intro:
          "Todo experimento controlado tiene dos variables clave. Saber cuál es cuál es esencial para diseñar y leer un estudio.",
        pros_a: [
          "La variable que el investigador cambia deliberadamente",
          "La causa presunta que se está probando",
          "Se fija o se elige antes de ejecutar el experimento",
          "Se representa en el eje horizontal de un gráfico",
          "Normalmente solo hay una en un experimento controlado",
        ],
        pros_b: [
          "La variable que el investigador mide como resultado",
          "El efecto o resultado presunto",
          "Cambia en respuesta a la variable independiente",
          "Se representa en el eje vertical de un gráfico",
          "Su valor depende de la variable independiente",
        ],
        verdict:
          "La variable independiente es la causa que controlas; la variable dependiente es el efecto que observas. Mantener todo lo demás constante te permite ver cómo una afecta de verdad a la otra.",
        faq: [
          {
            q: "¿Qué variable va en el eje x?",
            a: "La variable independiente se representa en el eje horizontal x; la variable dependiente en el eje y.",
          },
          {
            q: "¿Qué es una variable controlada?",
            a: "Un factor que se mantiene constante para que no afecte al resultado ni confunda las conclusiones.",
          },
          {
            q: "¿Cuántas variables independientes debe tener un experimento?",
            a: "Normalmente solo una, para que cualquier cambio en el resultado pueda atribuirse a esa única causa.",
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
      es: {
        title: "Hipótesis vs Teoría: términos científicos explicados",
        h1: "Hipótesis vs Teoría: de la idea a la ciencia establecida",
        description:
          "Una hipótesis es una predicción comprobable; una teoría es una explicación bien respaldada. Compara estos dos términos clave de la ciencia.",
        intro:
          "En el habla cotidiana 'teoría' significa una suposición, pero en ciencia significa lo contrario: una explicación robusta y probada. La hipótesis es la suposición.",
        pros_a: [
          "Una predicción o explicación propuesta, específica y comprobable",
          "Un paso temprano del método científico",
          "Se formula antes de realizar los experimentos",
          "Puede ser respaldada o rechazada por la evidencia",
          "A menudo se formula como una afirmación de 'si-entonces'",
        ],
        pros_b: [
          "Una explicación amplia respaldada por una extensa evidencia",
          "Construida a partir de muchas hipótesis y experimentos confirmados",
          "Ha sobrevivido a pruebas rigurosas repetidas",
          "Explica una amplia gama de observaciones relacionadas",
          "Algunos ejemplos son la evolución y la tectónica de placas",
        ],
        verdict:
          "Una hipótesis es una suposición de partida que hay que probar; una teoría es una explicación potente respaldada por montañas de evidencia. Una teoría no es 'solo una suposición': está entre las ideas más fuertes de la ciencia.",
        faq: [
          {
            q: "¿Una hipótesis se convierte en teoría?",
            a: "No directamente. Una teoría crece a partir de muchas hipótesis probadas y una amplia evidencia confirmada con el tiempo.",
          },
          {
            q: "¿Es una teoría científica solo una suposición?",
            a: "No. En ciencia una teoría es una explicación bien probada y respaldada por evidencia, mucho más fuerte que una suposición.",
          },
          {
            q: "¿Puede una teoría estar equivocada?",
            a: "Las teorías pueden refinarse o reemplazarse si una nueva evidencia fuerte las contradice, pero las establecidas rara vez fallan.",
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
      es: {
        title: "Colisión elástica vs inelástica explicada",
        h1: "Colisión elástica vs inelástica: la energía en los impactos",
        description:
          "Una colisión elástica conserva la energía cinética; una inelástica no. Compara estos dos tipos de colisión.",
        intro:
          "Cuando los objetos chocan, la cantidad de movimiento siempre se conserva, pero la energía cinética puede conservarse o no. Esa distinción define los dos tipos de colisión.",
        pros_a: [
          "La energía cinética total se conserva",
          "La cantidad de movimiento total también se conserva",
          "Los objetos rebotan separándose sin pegarse",
          "Es un caso idealizado, observado de cerca en las partículas de gas",
          "No se pierde energía en calor, sonido ni deformación",
        ],
        pros_b: [
          "La energía cinética no se conserva",
          "La cantidad de movimiento total aún se conserva",
          "Los objetos pueden deformarse o pegarse",
          "Se pierde energía en calor, sonido y deformación",
          "Una colisión perfectamente inelástica deja los objetos unidos",
        ],
        verdict:
          "La cantidad de movimiento se conserva en toda colisión, pero solo las colisiones elásticas conservan también la energía cinética. La mayoría de las colisiones del mundo real son inelásticas, perdiendo energía en calor, sonido y deformación.",
        faq: [
          {
            q: "¿Se conserva la cantidad de movimiento en las colisiones inelásticas?",
            a: "Sí. La cantidad de movimiento se conserva en todas las colisiones; solo la energía cinética puede perderse.",
          },
          {
            q: "¿Son elásticas o inelásticas las colisiones reales?",
            a: "La mayoría de las colisiones cotidianas son inelásticas, porque algo de energía siempre se convierte en calor o sonido.",
          },
          {
            q: "¿Qué es una colisión perfectamente inelástica?",
            a: "Aquella en la que los objetos que chocan se pegan y se mueven después como una única masa combinada.",
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
      es: {
        title: "Fricción estática vs cinética explicada",
        h1: "Fricción estática vs cinética: quieto vs deslizando",
        description:
          "La fricción estática actúa sobre un objeto quieto; la fricción cinética actúa sobre uno que se desliza. Compara estos dos tipos de fricción.",
        intro:
          "La fricción se opone al movimiento entre superficies, pero se comporta de forma distinta según si un objeto ya está en movimiento.",
        pros_a: [
          "Actúa sobre un objeto que aún no se mueve",
          "Impide que un objeto empiece a deslizarse",
          "Se ajusta hasta un máximo para igualar la fuerza aplicada",
          "Generalmente es más fuerte que la fricción cinética",
          "Hay que vencerla antes de que el movimiento pueda empezar",
        ],
        pros_b: [
          "Actúa sobre un objeto que ya se está deslizando",
          "Se opone al movimiento de un objeto en movimiento",
          "Tiene un valor más o menos constante mientras se desliza",
          "Generalmente es más débil que la fricción estática",
          "Convierte la energía cinética en calor",
        ],
        verdict:
          "Hay que vencer la fricción estática para poner algo en movimiento, y es el tipo más fuerte. Una vez que empieza el deslizamiento, la fricción cinética, más débil, toma el relevo, por eso un objeto atascado se libera de golpe.",
        faq: [
          {
            q: "¿Por qué es más difícil empezar a deslizar un objeto que mantenerlo deslizándose?",
            a: "La fricción estática es más fuerte que la cinética, así que se necesita más fuerza para iniciar el movimiento.",
          },
          {
            q: "¿Depende de la rapidez la fricción cinética?",
            a: "En la mayoría de los casos cotidianos se trata como más o menos constante independientemente de la rapidez de deslizamiento.",
          },
          {
            q: "¿Qué le ocurre a la energía perdida por la fricción?",
            a: "Se convierte principalmente en calor, calentando las superficies en contacto.",
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
      es: {
        title: "Estalactita vs Estalagmita: formaciones de cuevas",
        h1: "Estalactita vs Estalagmita: colgante vs ascendente",
        description:
          "Las estalactitas cuelgan de los techos de las cuevas; las estalagmitas se elevan desde el suelo de las cuevas. Compara estas dos formaciones minerales de cuevas.",
        intro:
          "Las cuevas desarrollan formaciones minerales notables a lo largo de miles de años. Las estalactitas y las estalagmitas se forman a partir de la misma agua que gotea, solo que en extremos distintos.",
        pros_a: [
          "Cuelga hacia abajo desde el techo de una cueva",
          "Se forma cuando el agua rica en minerales gotea y deja depósitos",
          "Crece despacio, a menudo una fracción de milímetro al año",
          "Normalmente afilada, como un carámbano de roca",
          "El tipo hueco de 'pajita' es su primera etapa",
        ],
        pros_b: [
          "Se eleva hacia arriba desde el suelo de una cueva",
          "Se forma donde el agua que gotea aterriza y deposita minerales",
          "Crece despacio, acumulándose a lo largo de milenios",
          "Normalmente más gruesa y redondeada en la parte superior",
          "A menudo se sitúa directamente debajo de una estalactita coincidente",
        ],
        verdict:
          "Las estalactitas cuelgan del techo mientras que las estalagmitas se construyen desde el suelo. Con suficiente tiempo, las dos pueden encontrarse y fusionarse en una única columna de roca.",
        faq: [
          {
            q: "¿Cómo puedo recordar cuál es cuál?",
            a: "Estalactita tiene una 'c' de cielo o techo; estalagmita tiene una 'g' que recuerda al suelo.",
          },
          {
            q: "¿Cuán rápido crecen?",
            a: "Muy despacio, a menudo menos de un milímetro al año, así que las grandes formaciones tienen miles de años.",
          },
          {
            q: "¿Qué ocurre si se encuentran?",
            a: "Una estalactita y una estalagmita pueden unirse en una columna continua de roca mineral.",
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
      es: {
        title: "Gravedad vs Flotabilidad: fuerzas hacia abajo y hacia arriba",
        h1: "Gravedad vs Flotabilidad: las fuerzas que hacen flotar las cosas",
        description:
          "La gravedad tira de los objetos hacia abajo; la flotabilidad los empuja hacia arriba en un fluido. Compara estas dos fuerzas opuestas.",
        intro:
          "Que un objeto flote o se hunda es un tira y afloja entre dos fuerzas. La gravedad lo arrastra hacia abajo; la flotabilidad lo eleva.",
        pros_a: [
          "Una fuerza que tira de los objetos hacia el centro de la Tierra",
          "Actúa sobre todos los objetos con masa, en todas partes",
          "Apunta hacia abajo, hacia el planeta",
          "Es proporcional a la masa de un objeto",
          "Hace que los objetos caigan y les da peso",
        ],
        pros_b: [
          "Una fuerza hacia arriba ejercida por un fluido circundante",
          "Actúa solo sobre objetos en un líquido o gas",
          "Es igual al peso del fluido que el objeto desplaza",
          "Apunta hacia arriba, oponiéndose a la gravedad",
          "Determina si un objeto flota o se hunde",
        ],
        verdict:
          "La gravedad siempre tira hacia abajo; la flotabilidad empuja hacia arriba siempre que un objeto está en un fluido. Si la flotabilidad es mayor, el objeto flota; si gana la gravedad, se hunde. El principio de Arquímedes relaciona ambas.",
        faq: [
          {
            q: "¿Qué es el principio de Arquímedes?",
            a: "Establece que la fuerza de flotación es igual al peso del fluido que un objeto desplaza.",
          },
          {
            q: "¿Por qué flotan algunos objetos?",
            a: "Flotan cuando la fuerza de flotación hacia arriba es al menos tan grande como la fuerza de la gravedad hacia abajo.",
          },
          {
            q: "¿Actúa la flotabilidad en el aire?",
            a: "Sí. El aire es un fluido, por eso los globos de helio se elevan a medida que la flotabilidad supera a la gravedad.",
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
      es: {
        title: "Frecuencia vs Amplitud: describir las ondas",
        h1: "Frecuencia vs Amplitud: dos propiedades de las ondas",
        description:
          "La frecuencia es cuán a menudo se repite una onda; la amplitud es cuán grande es su vibración. Compara estas dos propiedades de las ondas.",
        intro:
          "Toda onda se puede describir mediante varias propiedades. La frecuencia y la amplitud son dos de las más importantes, y controlan cosas muy distintas.",
        pros_a: [
          "Cuántos ciclos de onda pasan por un punto cada segundo",
          "Se mide en hercios (Hz)",
          "Determina el tono de un sonido o el color de la luz",
          "Una frecuencia más alta significa una longitud de onda más corta",
          "No cambia a medida que una onda pierde energía",
        ],
        pros_b: [
          "El desplazamiento máximo de una onda desde su posición de reposo",
          "Se mide como una altura o distancia",
          "Determina el volumen del sonido o el brillo de la luz",
          "Una amplitud mayor significa que la onda transporta más energía",
          "Disminuye a medida que una onda se dispersa o pierde energía",
        ],
        verdict:
          "La frecuencia fija el tono o el color de una onda; la amplitud fija su volumen o brillo. Son independientes: un sonido puede ser agudo y silencioso, o grave y fuerte.",
        faq: [
          {
            q: "¿Qué propiedad controla el volumen de un sonido?",
            a: "La amplitud. Una amplitud mayor transporta más energía y produce un sonido más fuerte.",
          },
          {
            q: "¿Qué determina la frecuencia en la luz?",
            a: "Determina el color: la luz de mayor frecuencia se ve más azul, la de menor frecuencia se ve más roja.",
          },
          {
            q: "¿Están relacionadas la frecuencia y la amplitud?",
            a: "No. Son propiedades independientes; una puede cambiar sin afectar a la otra.",
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
      es: {
        title: "Desintegración alfa vs beta: tipos de desintegración radiactiva",
        h1: "Desintegración alfa vs beta: dos formas en que los núcleos se descomponen",
        description:
          "La desintegración alfa emite un pesado núcleo de helio; la desintegración beta emite un electrón rápido. Compara estos dos modos de desintegración radiactiva.",
        intro:
          "Los núcleos atómicos inestables liberan energía mediante la desintegración radiactiva. La desintegración alfa y la beta son dos de las principales maneras de hacerlo.",
        pros_a: [
          "Emite una partícula alfa, un núcleo de helio",
          "El número atómico baja en dos",
          "Produce una partícula relativamente grande, lenta y pesada",
          "Se detiene con facilidad, incluso con una hoja de papel",
          "Es común en elementos muy pesados como el uranio",
        ],
        pros_b: [
          "Emite una partícula beta, un electrón en rápido movimiento",
          "El número atómico cambia en uno",
          "Produce una partícula pequeña, ligera y rápida",
          "Es más penetrante, necesitando aluminio para detenerla",
          "Ocurre cuando un neutrón se convierte en un protón",
        ],
        verdict:
          "La desintegración alfa expulsa un pesado núcleo de helio y es poco penetrante; la desintegración beta expulsa un electrón rápido y penetra más. Ambas acercan un núcleo inestable hacia la estabilidad.",
        faq: [
          {
            q: "¿Qué radiación es más penetrante?",
            a: "Las partículas beta penetran más que las partículas alfa, aunque ambas se detienen con un blindaje modesto.",
          },
          {
            q: "¿De qué está hecha una partícula alfa?",
            a: "De dos protones y dos neutrones, esencialmente un núcleo de helio.",
          },
          {
            q: "¿Qué le ocurre al número atómico en la desintegración beta?",
            a: "Aumenta en uno a medida que un neutrón se convierte en un protón.",
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
      es: {
        title: "Cinturón de asteroides vs Cinturón de Kuiper",
        h1: "Cinturón de asteroides vs Cinturón de Kuiper: dos anillos del sistema solar",
        description:
          "El cinturón de asteroides es un anillo rocoso cerca de Marte; el cinturón de Kuiper es un anillo helado más allá de Neptuno. Compara estas dos regiones.",
        intro:
          "Nuestro sistema solar tiene dos grandes anillos de material sobrante. Se sitúan a distancias muy distintas y están hechos de cosas distintas.",
        pros_a: [
          "Situado entre las órbitas de Marte y Júpiter",
          "Hecho sobre todo de asteroides rocosos y metálicos",
          "Se formó en el sistema solar interior, más cálido",
          "Contiene el planeta enano Ceres",
          "Mucho más cerca del Sol y más cálido",
        ],
        pros_b: [
          "Situado más allá de la órbita de Neptuno",
          "Hecho sobre todo de cuerpos helados y volátiles congelados",
          "Se formó en el sistema solar exterior, frío",
          "Contiene planetas enanos incluido Plutón",
          "Lejos del Sol y extremadamente frío",
        ],
        verdict:
          "El cinturón de asteroides es un anillo rocoso cercano; el cinturón de Kuiper es un anillo helado distante mucho más allá de Neptuno. Ambos son restos de la formación del sistema solar que nunca llegaron a formar un planeta.",
        faq: [
          {
            q: "¿Dónde se sitúa Plutón?",
            a: "Plutón orbita dentro del cinturón de Kuiper, la región helada más allá de Neptuno.",
          },
          {
            q: "¿Por qué el cinturón de Kuiper es helado y el de asteroides rocoso?",
            a: "El cinturón de Kuiper se formó lejos del Sol, donde hace suficiente frío para que los hielos permanezcan congelados.",
          },
          {
            q: "¿Está densamente poblado el cinturón de asteroides?",
            a: "No. A pesar de las películas, los asteroides están muy separados, con un vasto espacio vacío entre ellos.",
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
      es: {
        title: "Marea viva vs marea muerta explicada",
        h1: "Marea viva vs marea muerta: el rango del mar",
        description:
          "Las mareas vivas tienen el mayor rango; las mareas muertas tienen el menor. Compara estos dos extremos de las mareas.",
        intro:
          "Las mareas cambian de fuerza a lo largo del mes a medida que el Sol y la Luna cambian de posición. Las mareas vivas y muertas son los dos extremos de este ciclo.",
        pros_a: [
          "Produce la mayor diferencia entre la marea alta y la baja",
          "Ocurre cuando el Sol, la Tierra y la Luna están alineados",
          "Sucede alrededor de la luna nueva y la luna llena",
          "Las atracciones del Sol y la Luna se suman",
          "Trae las mareas altas más altas y las bajas más bajas",
        ],
        pros_b: [
          "Produce la menor diferencia entre la marea alta y la baja",
          "Ocurre cuando el Sol y la Luna están en ángulo recto",
          "Sucede alrededor de los cuartos creciente y menguante",
          "La atracción del Sol cancela en parte la de la Luna",
          "Trae mareas altas y bajas más moderadas",
        ],
        verdict:
          "Las mareas vivas son las más fuertes, con el mayor rango, cuando el Sol y la Luna se alinean. Las mareas muertas son las más débiles, con el menor rango, cuando tiran en ángulo recto. El ciclo se repite dos veces al mes.",
        faq: [
          {
            q: "¿Ocurren las mareas vivas solo en primavera?",
            a: "No. El nombre alude a lo vivo del agua; ocurren dos veces al mes durante todo el año.",
          },
          {
            q: "¿Cuándo ocurren las mareas muertas?",
            a: "Alrededor de los cuartos creciente y menguante, cuando el Sol y la Luna tiran en ángulo recto.",
          },
          {
            q: "¿Qué causa las mareas en general?",
            a: "Principalmente la gravedad de la Luna, con una contribución menor de la gravedad del Sol.",
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
      es: {
        title: "Límites de placa convergentes vs divergentes",
        h1: "Límite convergente vs divergente: placas que se encuentran y se separan",
        description:
          "Los límites convergentes empujan las placas una contra otra; los límites divergentes las separan. Compara estos dos tipos de límite de placa.",
        intro:
          "Las placas tectónicas interactúan en sus bordes de distintas maneras. Dos de los principales tipos de límite implican placas que chocan o se separan.",
        pros_a: [
          "Dos placas tectónicas se mueven una hacia la otra",
          "Puede forzar una placa por debajo de otra en la subducción",
          "Construye cordilleras y fosas oceánicas profundas",
          "Está ligado a potentes terremotos y volcanes",
          "Algunos ejemplos son el Himalaya y los Andes",
        ],
        pros_b: [
          "Dos placas tectónicas se alejan una de la otra",
          "El magma asciende para rellenar el hueco que se ensancha",
          "Crea nueva corteza a medida que las placas se separan",
          "Forma dorsales oceánicas y valles de rift",
          "Un ejemplo es la dorsal Mesoatlántica",
        ],
        verdict:
          "Los límites convergentes destruyen o arrugan la corteza a medida que las placas chocan, construyendo montañas; los límites divergentes crean nueva corteza a medida que las placas se separan. Ambos están impulsados por la lenta agitación bajo la superficie.",
        faq: [
          {
            q: "¿Qué límite construye montañas?",
            a: "Los límites convergentes, donde las placas que chocan arrugan la corteza hacia arriba formando cordilleras.",
          },
          {
            q: "¿Qué se forma en un límite divergente?",
            a: "Se forma nueva corteza a medida que el magma asciende al hueco que se ensancha, creando dorsales oceánicas y valles de rift.",
          },
          {
            q: "¿Cuál es el tercer tipo principal de límite?",
            a: "Un límite transformante, donde las placas se deslizan una al lado de la otra horizontalmente.",
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
      es: {
        title: "Conductor vs Aislante: materiales eléctricos",
        h1: "Conductor vs Aislante: dejar fluir la carga o no",
        description:
          "Los conductores dejan fluir la carga eléctrica con facilidad; los aislantes la bloquean. Compara estas dos clases de material.",
        intro:
          "Los materiales responden de forma muy distinta a la electricidad. Algunos dejan moverse la carga libremente; otros la resisten casi por completo.",
        pros_a: [
          "Permite que la carga eléctrica fluya con facilidad",
          "Tiene muchos electrones libres que pueden moverse",
          "Algunos ejemplos son el cobre, la plata y el aluminio",
          "Se usa para cables y contactos eléctricos",
          "Generalmente también conduce bien el calor",
        ],
        pros_b: [
          "Resiste fuertemente el flujo de la carga eléctrica",
          "Tiene muy pocos electrones libres",
          "Algunos ejemplos son el caucho, el vidrio y el plástico",
          "Se usa para recubrir cables y proteger contra descargas",
          "Generalmente también es mal conductor del calor",
        ],
        verdict:
          "Los conductores transportan la electricidad y se usan para cables; los aislantes la bloquean y se usan para recubrimientos de seguridad. La mayoría de los cables eléctricos combinan ambos: un núcleo conductor dentro de una funda aislante.",
        faq: [
          {
            q: "¿Por qué los cables están hechos de cobre?",
            a: "El cobre es un excelente conductor con baja resistencia, que transporta la corriente de forma eficiente y económica.",
          },
          {
            q: "¿Por qué se usa el caucho para recubrir cables?",
            a: "El caucho es un aislante, así que impide que la corriente se escape y protege a las personas de las descargas eléctricas.",
          },
          {
            q: "¿Qué es un semiconductor?",
            a: "Un material entre los dos, que conduce bajo ciertas condiciones; es la base de la electrónica moderna.",
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
      es: {
        title: "Año luz vs Unidad astronómica comparados",
        h1: "Año luz vs Unidad astronómica: distancias cósmicas",
        description:
          "Un año luz mide vastas distancias interestelares; una unidad astronómica mide dentro del sistema solar. Compara ambas unidades.",
        intro:
          "El espacio es tan grande que las unidades cotidianas fallan. Los astrónomos usan dos unidades de distancia especiales para distintas escalas del cosmos.",
        pros_a: [
          "La distancia que la luz recorre en un año",
          "Alrededor de 9,46 billones de kilómetros",
          "Se usa para medir distancias entre estrellas y galaxias",
          "Una unidad enorme adecuada para escalas interestelares",
          "La estrella más cercana está a unos cuatro años luz",
        ],
        pros_b: [
          "La distancia media de la Tierra al Sol",
          "Alrededor de 150 millones de kilómetros",
          "Se usa para medir distancias dentro del sistema solar",
          "Una unidad más pequeña adecuada para escalas planetarias",
          "Neptuno orbita a unas 30 unidades astronómicas",
        ],
        verdict:
          "La unidad astronómica maneja distancias dentro de nuestro sistema solar; el año luz maneja los huecos mucho mayores entre estrellas. Un año luz equivale a unas 63.000 unidades astronómicas.",
        faq: [
          {
            q: "¿Es un año luz una unidad de tiempo?",
            a: "No. A pesar de la palabra 'año', un año luz mide distancia: cuán lejos viaja la luz en un año.",
          },
          {
            q: "¿Qué unidad es mayor?",
            a: "El año luz es enormemente mayor, igual a unas 63.000 unidades astronómicas.",
          },
          {
            q: "¿Qué unidad usan los astrónomos más allá de los años luz?",
            a: "El pársec, igual a unos 3,26 años luz, es común para distancias muy grandes.",
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
      es: {
        title: "Mitocondria vs Cloroplasto: orgánulos celulares",
        h1: "Mitocondria vs Cloroplasto: dos orgánulos de energía",
        description:
          "Las mitocondrias liberan energía de los alimentos; los cloroplastos captan energía de la luz. Compara estos dos orgánulos celulares.",
        intro:
          "Dos orgánulos se encargan de la energía de una célula. Ambos transforman energía, pero uno la libera mientras que el otro la capta.",
        pros_a: [
          "Libera energía descomponiendo la glucosa",
          "Lleva a cabo la respiración celular",
          "Se encuentra en casi todas las células eucariotas",
          "Produce ATP, la moneda energética de la célula",
          "A menudo se la llama la central energética de la célula",
        ],
        pros_b: [
          "Capta la energía de la luz y la almacena en glucosa",
          "Lleva a cabo la fotosíntesis",
          "Se encuentra en las células vegetales y las algas, no en las animales",
          "Contiene el pigmento verde clorofila",
          "Libera oxígeno como subproducto",
        ],
        verdict:
          "Los cloroplastos captan la luz solar para construir glucosa; las mitocondrias descomponen la glucosa para liberar energía utilizable. Las células vegetales tienen ambos, mientras que las células animales dependen solo de las mitocondrias.",
        faq: [
          {
            q: "¿Tienen cloroplastos las células animales?",
            a: "No. Los cloroplastos se encuentran solo en las células vegetales y las algas, no en las células animales.",
          },
          {
            q: "¿Cómo se relacionan estos orgánulos?",
            a: "Los cloroplastos fabrican glucosa y las mitocondrias la descomponen, así que sus procesos son complementarios.",
          },
          {
            q: "¿Por qué ambos tienen su propio ADN?",
            a: "La teoría endosimbiótica dice que ambos evolucionaron a partir de bacterias que antes vivían libres, conservando algo de su propio ADN.",
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
      es: {
        title: "Elemento vs Compuesto: sustancias puras comparadas",
        h1: "Elemento vs Compuesto: un tipo de átomo o varios",
        description:
          "Un elemento contiene un solo tipo de átomo; un compuesto combina químicamente dos o más elementos. Compara estas sustancias puras.",
        intro:
          "Las sustancias puras vienen en dos clases. La diferencia es si la sustancia está construida a partir de un tipo de átomo o de varios unidos entre sí.",
        pros_a: [
          "Está hecho de un solo tipo de átomo",
          "No se puede descomponer en sustancias más simples por medios químicos",
          "Cada uno figura en la tabla periódica",
          "Algunos ejemplos son el oxígeno, el oro y el hidrógeno",
          "Los bloques de construcción fundamentales de toda la materia",
        ],
        pros_b: [
          "Está hecho de dos o más elementos enlazados químicamente",
          "Se puede descomponer en sus elementos mediante reacciones químicas",
          "Tiene propiedades distintas de sus elementos componentes",
          "Algunos ejemplos son el agua, la sal y el dióxido de carbono",
          "Tiene una proporción fija de elementos, indicada por una fórmula",
        ],
        verdict:
          "Un elemento es la sustancia pura más simple, hecha de un tipo de átomo; un compuesto une elementos en proporciones fijas. El agua, por ejemplo, es un compuesto de los elementos hidrógeno y oxígeno.",
        faq: [
          {
            q: "¿Es el agua un elemento o un compuesto?",
            a: "El agua es un compuesto, hecho de los elementos hidrógeno y oxígeno enlazados químicamente entre sí.",
          },
          {
            q: "¿Se puede dividir un compuesto en elementos?",
            a: "Sí, pero solo mediante reacciones químicas, no por métodos físicos como el filtrado.",
          },
          {
            q: "¿Cuántos elementos hay?",
            a: "Se conocen alrededor de 118 elementos, cada uno con su propio lugar en la tabla periódica.",
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
      es: {
        title: "Difusión vs Ósmosis: movimiento en las células",
        h1: "Difusión vs Ósmosis: cómo se propagan las sustancias",
        description:
          "La difusión propaga cualquier partícula de alta a baja concentración; la ósmosis es la difusión del agua. Compara ambos procesos.",
        intro:
          "Las células mueven sustancias de forma pasiva sin usar energía. La difusión y la ósmosis son dos formas relacionadas en que esto ocurre.",
        pros_a: [
          "La propagación de partículas de alta a baja concentración",
          "Puede implicar gases, líquidos o solutos disueltos",
          "No requiere una membrana",
          "Continúa hasta que la concentración es uniforme",
          "Un proceso pasivo que no necesita energía celular",
        ],
        pros_b: [
          "Un tipo especial de difusión que implica solo agua",
          "El agua se mueve a través de una membrana parcialmente permeable",
          "El agua fluye hacia una mayor concentración de soluto",
          "Siempre requiere una membrana semipermeable",
          "También un proceso pasivo que no necesita energía celular",
        ],
        verdict:
          "La ósmosis es un caso específico de difusión: el movimiento del agua a través de una membrana. La difusión es el proceso más amplio que puede mover cualquier partícula, con o sin membrana. Ambas son pasivas.",
        faq: [
          {
            q: "¿Es la ósmosis un tipo de difusión?",
            a: "Sí. La ósmosis es la difusión del agua específicamente, a través de una membrana parcialmente permeable.",
          },
          {
            q: "¿Necesitan energía estos procesos?",
            a: "No. Tanto la difusión como la ósmosis son pasivas y no necesitan energía de la célula.",
          },
          {
            q: "¿En qué dirección se mueve el agua en la ósmosis?",
            a: "El agua se mueve de una región de menor concentración de soluto hacia una de mayor concentración de soluto.",
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
      es: {
        title: "Impacto de asteroide vs Erupción volcánica comparados",
        h1: "Impacto de asteroide vs Erupción volcánica: eventos catastróficos",
        description:
          "Un impacto de asteroide golpea desde el espacio; una erupción volcánica brota desde el interior de la Tierra. Compara estos dos eventos catastróficos.",
        intro:
          "Ambos eventos pueden remodelar paisajes y alterar el clima, pero uno viene del espacio mientras que el otro viene de las profundidades del subsuelo.",
        pros_a: [
          "Causado por una roca espacial que golpea la superficie de la Tierra",
          "Libera una energía enorme en un solo instante",
          "Forma un cráter de impacto",
          "Puede lanzar polvo a gran altura en la atmósfera",
          "Está ligado a la extinción masiva de los dinosaurios",
        ],
        pros_b: [
          "Causada por magma y gas que escapan del interior de la Tierra",
          "Puede erupcionar durante horas, días o mucho más tiempo",
          "Construye relieves volcánicos con el tiempo",
          "Libera ceniza, lava y gases",
          "Las grandes erupciones pueden enfriar el clima global durante años",
        ],
        verdict:
          "Un impacto de asteroide es un golpe súbito desde el espacio; una erupción volcánica es una liberación del calor interno de la Tierra. Ambos pueden oscurecer los cielos y alterar el clima, y ambos han impulsado extinciones.",
        faq: [
          {
            q: "¿Qué evento acabó con los dinosaurios?",
            a: "La evidencia apunta a un impacto de asteroide masivo hace unos 66 millones de años, posiblemente agravado por el vulcanismo.",
          },
          {
            q: "¿Cómo afectan ambos al clima?",
            a: "Ambos pueden llenar la atmósfera de polvo o ceniza, bloqueando la luz solar y enfriando el planeta temporalmente.",
          },
          {
            q: "¿Cuál es más predecible?",
            a: "Los volcanes a menudo muestran señales de advertencia; los grandes impactos de asteroides son raros pero se rastrean con los sondeos del cielo.",
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
      es: {
        title: "Latitud vs Longitud: la cuadrícula de coordenadas de la Tierra",
        h1: "Latitud vs Longitud: localizar cualquier punto de la Tierra",
        description:
          "La latitud mide la posición norte-sur; la longitud mide la posición este-oeste. Compara estas dos coordenadas de mapa.",
        intro:
          "Cada lugar de la Tierra tiene una dirección precisa hecha de dos números. La latitud y la longitud juntas localizan con exactitud cualquier ubicación.",
        pros_a: [
          "Mide la posición al norte o al sur del ecuador",
          "Las líneas corren horizontalmente, paralelas al ecuador",
          "Va de 0 grados en el ecuador a 90 en los polos",
          "Las líneas de latitud se llaman paralelos",
          "Influye fuertemente en el clima y las estaciones",
        ],
        pros_b: [
          "Mide la posición al este o al oeste del meridiano de origen",
          "Las líneas corren verticalmente, de polo a polo",
          "Va de 0 a 180 grados este u oeste",
          "Las líneas de longitud se llaman meridianos",
          "Se usa para definir las zonas horarias alrededor del mundo",
        ],
        verdict:
          "La latitud te dice cuán al norte o al sur estás; la longitud te dice cuán al este o al oeste. Combina las dos y podrás localizar con exactitud cualquier punto del planeta.",
        faq: [
          {
            q: "¿Cómo recuerdo cuál es cuál?",
            a: "Las líneas de latitud son planas como los peldaños de una escalera; las líneas de longitud corren a lo largo, de polo a polo.",
          },
          {
            q: "¿Dónde está la longitud cero?",
            a: "En el meridiano de origen, que pasa por Greenwich en Londres.",
          },
          {
            q: "¿Por qué la latitud afecta al clima?",
            a: "Determina cuán directamente la luz solar golpea la superficie, por eso los polos son fríos y el ecuador es cálido.",
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
      es: {
        title: "Selección natural vs Deriva genética explicadas",
        h1: "Selección natural vs Deriva genética: motores de la evolución",
        description:
          "La selección natural favorece los rasgos útiles; la deriva genética cambia los rasgos por azar. Compara estos dos mecanismos evolutivos.",
        intro:
          "Las poblaciones evolucionan a través de varios mecanismos. La selección natural y la deriva genética cambian ambas las frecuencias génicas, pero por razones muy distintas.",
        pros_a: [
          "Favorece los rasgos que mejoran la supervivencia y la reproducción",
          "Un proceso no aleatorio impulsado por el entorno",
          "Tiende a hacer las poblaciones más adecuadas a su hábitat",
          "Actúa con más fuerza sobre los rasgos que afectan a la aptitud",
          "El principal motor de la adaptación",
        ],
        pros_b: [
          "Cambia las frecuencias génicas puramente por azar",
          "Un proceso aleatorio, no relacionado con la utilidad de los rasgos",
          "Tiene el mayor efecto en las poblaciones pequeñas",
          "Puede eliminar rasgos útiles o propagar rasgos dañinos",
          "Reduce la variación genética con el tiempo",
        ],
        verdict:
          "La selección natural moldea las poblaciones hacia la aptitud de forma no aleatoria; la deriva genética las desplaza al azar, con el mayor efecto en las poblaciones pequeñas. Ambas actúan juntas para impulsar la evolución.",
        faq: [
          {
            q: "¿Qué mecanismo es aleatorio?",
            a: "La deriva genética es aleatoria; la selección natural es no aleatoria e impulsada por las presiones ambientales.",
          },
          {
            q: "¿Cuándo es más fuerte la deriva genética?",
            a: "En las poblaciones pequeñas, donde los eventos de azar pueden desplazar drásticamente las frecuencias génicas.",
          },
          {
            q: "¿Puede la deriva ir contra la adaptación?",
            a: "Sí. Por azar, la deriva genética puede eliminar rasgos beneficiosos o propagar rasgos dañinos.",
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
      es: {
        title: "Fuerza centrípeta vs centrífuga explicada",
        h1: "Fuerza centrípeta vs centrífuga: real vs aparente",
        description:
          "La fuerza centrípeta es la verdadera atracción hacia dentro en el movimiento circular; la fuerza centrífuga es el efecto aparente hacia fuera. Compara ambas.",
        intro:
          "El movimiento circular implica dos términos que confunden a muchos estudiantes. Uno es una fuerza genuina; el otro solo lo parece.",
        pros_a: [
          "Una fuerza real que apunta hacia el centro de un círculo",
          "Es necesaria para mantener cualquier objeto moviéndose en círculo",
          "La proporcionan la tensión, la gravedad o la fricción",
          "Sin ella, el objeto sale despedido en línea recta",
          "Es medible y obedece directamente las leyes de Newton",
        ],
        pros_b: [
          "Un efecto aparente hacia fuera que se siente en un sistema de referencia en rotación",
          "No es una fuerza real, sino un resultado de la inercia",
          "La sienten los pasajeros de un coche que gira",
          "Surge solo cuando se observa desde un sistema de referencia que gira",
          "Desaparece cuando se observa desde un sistema externo que no gira",
        ],
        verdict:
          "La fuerza centrípeta es la verdadera atracción hacia dentro que curva un objeto en un círculo. La 'fuerza centrífuga' hacia fuera que sientes es en realidad solo la inercia que intenta mantenerte moviéndote en línea recta.",
        faq: [
          {
            q: "¿Es la fuerza centrífuga una fuerza real?",
            a: "No. Es un efecto aparente de la inercia que se siente solo dentro de un sistema de referencia en rotación.",
          },
          {
            q: "¿Qué proporciona la fuerza centrípeta?",
            a: "Cualquier cosa que tire hacia dentro: la tensión de una cuerda, la gravedad o la fricción entre las ruedas y la carretera.",
          },
          {
            q: "¿Qué ocurre sin la fuerza centrípeta?",
            a: "El objeto deja de curvarse y sale despedido en línea recta, obedeciendo su inercia.",
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
      es: {
        title: "Endocitosis vs Exocitosis: transporte celular",
        h1: "Endocitosis vs Exocitosis: mover carga grande dentro y fuera",
        description:
          "La endocitosis introduce material en una célula; la exocitosis lo expulsa. Compara estos dos procesos de transporte en masa.",
        intro:
          "Las células mueven moléculas grandes a través de la membrana mediante transporte activo. La endocitosis y la exocitosis son direcciones opuestas de la misma idea.",
        pros_a: [
          "Introduce material en la célula",
          "La membrana se pliega hacia dentro para engullir sustancias",
          "Forma una vesícula que transporta la carga al interior",
          "Se usa para incorporar nutrientes y partículas grandes",
          "Incluye la fagocitosis, el englutimiento de materia sólida",
        ],
        pros_b: [
          "Expulsa material fuera de la célula",
          "Una vesícula se fusiona con la membrana para liberar su contenido",
          "Envía sustancias al espacio circundante",
          "Se usa para secretar hormonas, enzimas y desechos",
          "Añade nueva membrana a la superficie de la célula en el proceso",
        ],
        verdict:
          "La endocitosis importa carga en masa envolviendo la membrana a su alrededor; la exocitosis exporta carga fusionando vesículas con la membrana. Ambas requieren energía y manejan materiales demasiado grandes para simplemente difundirse.",
        faq: [
          {
            q: "¿Necesitan energía estos procesos?",
            a: "Sí. Tanto la endocitosis como la exocitosis son transporte activo y requieren energía celular.",
          },
          {
            q: "¿Qué es la fagocitosis?",
            a: "Un tipo de endocitosis en el que la célula engulle partículas sólidas grandes, como bacterias.",
          },
          {
            q: "¿Cómo secreta hormonas la célula?",
            a: "Mediante la exocitosis: las vesículas que transportan hormonas se fusionan con la membrana y las liberan al exterior.",
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
      es: {
        title: "Conducción vs Radiación: modos de transferencia de calor",
        h1: "Conducción vs Radiación: contacto vs sin contacto",
        description:
          "La conducción necesita contacto directo para mover calor; la radiación cruza el espacio vacío. Compara estos dos modos de transferencia de calor.",
        intro:
          "El calor viaja de tres maneras. La conducción y la radiación son dos de ellas, y difieren en si se necesita un medio en absoluto.",
        pros_a: [
          "Transfiere calor mediante el contacto directo de partículas",
          "Requiere un medio físico, idealmente un sólido",
          "La energía pasa de una partícula a una partícula vecina",
          "No puede ocurrir a través del vacío",
          "Ejemplo: el mango de una sartén que se calienta en un fogón",
        ],
        pros_b: [
          "Transfiere calor mediante ondas electromagnéticas",
          "No necesita ningún medio",
          "Puede viajar a través del vacío del espacio",
          "Todos los objetos cálidos emiten radiación infrarroja",
          "Ejemplo: el Sol calentando la Tierra a través del espacio",
        ],
        verdict:
          "La conducción necesita materia en contacto y funciona mejor en sólidos; la radiación no necesita nada y cruza el espacio vacío. Así es como el calor del Sol llega a la Tierra a pesar del vacío entre ambos.",
        faq: [
          {
            q: "¿Cómo llega el calor del Sol a la Tierra?",
            a: "Mediante radiación. Las ondas electromagnéticas cruzan el vacío del espacio, ya que la conducción necesita un medio.",
          },
          {
            q: "¿Necesita la radiación un medio?",
            a: "No. La radiación viaja a través del espacio vacío, a diferencia de la conducción y la convección.",
          },
          {
            q: "¿Cuál es el tercer modo de transferencia de calor?",
            a: "La convección, que mueve el calor mediante el movimiento global de un fluido.",
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
      es: {
        title: "Número atómico vs Número másico explicados",
        h1: "Número atómico vs Número másico: identificar átomos",
        description:
          "El número atómico cuenta los protones; el número másico cuenta los protones más los neutrones. Compara estas dos magnitudes atómicas.",
        intro:
          "Dos números describen cualquier átomo. Uno fija qué elemento es; el otro refleja cuán pesado es ese átomo en particular.",
        pros_a: [
          "Cuenta el número de protones en el núcleo",
          "Define qué elemento químico es el átomo",
          "Es siempre el mismo para cada átomo de un elemento",
          "Se escribe como un subíndice antes del símbolo del elemento",
          "Es igual al número de electrones en un átomo neutro",
        ],
        pros_b: [
          "Cuenta los protones más los neutrones en el núcleo",
          "Refleja la masa global del átomo",
          "Puede diferir entre isótopos del mismo elemento",
          "Se escribe como un superíndice antes del símbolo del elemento",
          "Se halla sumando el número de protones y de neutrones",
        ],
        verdict:
          "El número atómico te dice el elemento; el número másico te dice el isótopo. Resta el número atómico del número másico y obtendrás el número de neutrones.",
        faq: [
          {
            q: "¿Cómo se halla el número de neutrones?",
            a: "Se resta el número atómico del número másico.",
          },
          {
            q: "¿Pueden dos átomos compartir un número atómico pero diferir en número másico?",
            a: "Sí. Esos son isótopos: el mismo elemento, distinto número de neutrones.",
          },
          {
            q: "¿Qué número define el elemento?",
            a: "El número atómico, el número de protones, identifica el elemento de forma única.",
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
      es: {
        title: "Espejo convexo vs cóncavo explicado",
        h1: "Espejo convexo vs cóncavo: reflexión curva",
        description:
          "Un espejo convexo se abomba hacia fuera y dispersa la luz; un espejo cóncavo se curva hacia dentro y la enfoca. Compara estos espejos.",
        intro:
          "Los espejos curvos reflejan la luz de forma distinta a los planos. Que la superficie se abombe hacia fuera o se curve hacia dentro cambia la imagen por completo.",
        pros_a: [
          "La superficie reflectante se abomba hacia fuera",
          "Separa los rayos de luz reflejados",
          "Siempre forma una imagen virtual pequeña y derecha",
          "Da un amplio campo de visión",
          "Se usa en los retrovisores de coche y en los espejos de seguridad",
        ],
        pros_b: [
          "La superficie reflectante se curva hacia dentro",
          "Hace converger los rayos de luz reflejados en un punto focal",
          "Puede formar imágenes reales o virtuales, ampliadas o reducidas",
          "Se usa en telescopios, faros y espejos de afeitado",
          "La imagen depende de la distancia del objeto",
        ],
        verdict:
          "Un espejo convexo dispersa la luz y muestra una vista amplia y encogida, ideal para la seguridad. Un espejo cóncavo enfoca la luz y puede ampliar, lo que lo hace útil en telescopios y faros.",
        faq: [
          {
            q: "¿Por qué los coches usan retrovisores convexos?",
            a: "Los espejos convexos dan un amplio campo de visión, ayudando a los conductores a ver más de la carretera detrás de ellos.",
          },
          {
            q: "¿Qué espejo puede ampliar tu cara?",
            a: "Un espejo cóncavo produce una imagen ampliada y derecha cuando estás cerca de él.",
          },
          {
            q: "¿Qué espejo enfoca la luz en un punto?",
            a: "Un espejo cóncavo hace converger los rayos de luz paralelos en un punto focal.",
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
      es: {
        title: "Magnitud absoluta vs aparente de las estrellas",
        h1: "Magnitud absoluta vs aparente: brillo verdadero vs visto",
        description:
          "La magnitud absoluta es el brillo verdadero de una estrella; la magnitud aparente es cuán brillante se ve desde la Tierra. Compara ambas.",
        intro:
          "El brillo de una estrella se puede medir de dos maneras. Una refleja cómo brilla de verdad; la otra depende de cuán lejos está.",
        pros_a: [
          "Mide el brillo verdadero e intrínseco de una estrella",
          "Se define como el brillo visto desde una distancia estándar fija",
          "No depende de la distancia de la estrella a la Tierra",
          "Permite a los astrónomos comparar estrellas de forma justa",
          "Un valor más negativo significa una estrella más luminosa",
        ],
        pros_b: [
          "Mide cuán brillante aparece una estrella desde la Tierra",
          "Se ve fuertemente afectada por la distancia de la estrella",
          "Una estrella tenue cercana puede eclipsar a una brillante distante",
          "Lo que el ojo realmente ve en el cielo nocturno",
          "Un valor más negativo significa un objeto que se ve más brillante",
        ],
        verdict:
          "La magnitud aparente es el brillo tal como se ve; la magnitud absoluta es el brillo tal como es de verdad. Una estrella de aspecto tenue puede ser una gigante poderosa simplemente lejana, lo que la magnitud absoluta revela.",
        faq: [
          {
            q: "¿Por qué una estrella de aspecto brillante no significa una estrella poderosa?",
            a: "El brillo aparente depende de la distancia; una estrella modesta cercana puede verse más brillante que una gigante distante.",
          },
          {
            q: "¿Qué controla la magnitud absoluta?",
            a: "Elimina la distancia comparando todas las estrellas como si se vieran desde la misma distancia estándar.",
          },
          {
            q: "¿Un número de magnitud más bajo significa más brillante?",
            a: "Sí. La escala de magnitud va al revés, así que números más pequeños y más negativos significan más brillante.",
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
      es: {
        title: "Media vs Moda: dos medidas de promedio",
        h1: "Media vs Moda: valor promedio vs el más común",
        description:
          "La media es el promedio aritmético; la moda es el valor más frecuente. Compara estas dos medidas de tendencia central.",
        intro:
          "La estadística ofrece varias clases de promedio. La media y la moda responden a preguntas distintas sobre el centro de un conjunto de datos.",
        pros_a: [
          "La suma de todos los valores dividida entre la cantidad",
          "Usa cada punto de datos en su cálculo",
          "Funciona solo con datos numéricos",
          "Es sensible a los valores atípicos extremos",
          "Siempre hay exactamente una media",
        ],
        pros_b: [
          "El valor que aparece con más frecuencia en los datos",
          "Se halla contando la frecuencia, no calculando",
          "Funciona con números y con categorías",
          "No se ve afectada por los valores atípicos extremos",
          "Un conjunto de datos puede tener una, varias o ninguna moda",
        ],
        verdict:
          "La media equilibra todos los valores en un único promedio; la moda simplemente nombra el valor más común. Usa la media para datos numéricos y la moda cuando necesites la categoría más frecuente.",
        faq: [
          {
            q: "¿Se puede usar la moda para datos no numéricos?",
            a: "Sí. A diferencia de la media, la moda funciona para categorías como el color favorito.",
          },
          {
            q: "¿Puede un conjunto de datos tener más de una moda?",
            a: "Sí. Un conjunto de datos puede ser bimodal o multimodal, o no tener moda si ningún valor se repite.",
          },
          {
            q: "¿Qué promedio se ve afectado por los valores atípicos?",
            a: "La media. La moda ignora los valores atípicos porque solo cuenta la frecuencia.",
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
      es: {
        title: "Planeta terrestre vs Gigante gaseoso comparados",
        h1: "Planeta terrestre vs Gigante gaseoso: dos tipos de planeta",
        description:
          "Los planetas terrestres son pequeños y rocosos; los gigantes gaseosos son enormes y gaseosos. Compara estas dos clases de planeta.",
        intro:
          "Los planetas de nuestro sistema solar se agrupan en dos amplias familias, moldeadas por dónde se formaron en relación con el Sol.",
        pros_a: [
          "Pequeño, denso y hecho sobre todo de roca y metal",
          "Tiene una superficie sólida sobre la que podrías estar de pie",
          "Incluye a Mercurio, Venus, la Tierra y Marte",
          "Orbita más cerca del Sol, en el sistema solar interior",
          "Tiene pocas lunas o ninguna",
        ],
        pros_b: [
          "Enorme y hecho sobre todo de hidrógeno y helio",
          "No tiene una superficie sólida, solo profundas capas gaseosas",
          "Incluye a Júpiter y Saturno",
          "Orbita lejos del Sol, en el sistema solar exterior",
          "Tiene muchas lunas y a menudo un sistema de anillos",
        ],
        verdict:
          "Los planetas terrestres son pequeños mundos rocosos con suelo sólido; los gigantes gaseosos son vastas bolas de gas sin superficie. Los dos tipos reflejan las condiciones frías o cálidas donde se formó cada uno.",
        faq: [
          {
            q: "¿Podrías estar de pie sobre un gigante gaseoso?",
            a: "No. Los gigantes gaseosos no tienen superficie sólida, solo capas de gas y líquido cada vez más densas.",
          },
          {
            q: "¿Por qué los gigantes gaseosos tienen tantas lunas?",
            a: "Su inmensa masa y gravedad capturaron y retuvieron más cuerpos en órbita durante su formación.",
          },
          {
            q: "¿Cómo se clasifican Urano y Neptuno?",
            a: "A menudo se las llama gigantes de hielo, un subgrupo distinto rico en compuestos helados.",
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
      es: {
        title: "Ácido vs Base: pH, propiedades, ejemplos",
        h1: "Ácido vs Base: cómo distinguirlos",
        description:
          "Los ácidos donan protones y saben agrios; las bases aceptan protones y se sienten resbaladizas. Compara pH, reacciones y ejemplos cotidianos.",
        intro:
          "Los ácidos y las bases se sitúan en los extremos opuestos de la escala de pH, pero ambos son esenciales para la química y la vida. Saber cómo se comporta cada uno ayuda a predecir reacciones y leer pruebas de tornasol.",
        pros_a: [
          "Dona iones H+ en agua",
          "pH por debajo de 7",
          "Sabe agrio, vuelve rojo el tornasol",
          "Reacciona con los metales liberando hidrógeno",
          "Ejemplos: HCl, vinagre, ácido cítrico",
        ],
        pros_b: [
          "Acepta iones H+ o dona iones OH-",
          "pH por encima de 7",
          "Se siente resbaladiza, vuelve azul el tornasol",
          "Reacciona con los ácidos formando sal y agua",
          "Ejemplos: NaOH, amoníaco, bicarbonato de sodio",
        ],
        verdict:
          "Los ácidos y las bases son opuestos químicos que se neutralizan entre sí. Usa el pH para clasificarlos: por debajo de 7 es ácido, por encima de 7 es básico, y exactamente 7 es neutro.",
        faq: [
          {
            q: "¿Qué ocurre cuando un ácido se encuentra con una base?",
            a: "Sufren una reacción de neutralización, produciendo una sal y agua y acercando el pH hacia 7.",
          },
          {
            q: "¿Cómo se prueba si algo es un ácido o una base?",
            a: "El papel tornasol es la prueba más sencilla: los ácidos lo vuelven rojo, las bases lo vuelven azul. Un medidor de pH da un número preciso.",
          },
          {
            q: "¿Es el agua un ácido o una base?",
            a: "El agua pura es neutra con un pH de 7; puede actuar como ácido débil y como base débil, lo que se llama anfótera.",
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
      es: {
        title: "Ácido fuerte vs Ácido débil: diferencias clave",
        h1: "Ácido fuerte vs Ácido débil explicados",
        description:
          "Los ácidos fuertes se ionizan por completo en agua; los ácidos débiles solo parcialmente. Compara disociación, pH y ejemplos para el estudio de la química.",
        intro:
          "La fuerza de un ácido tiene que ver con cuán completamente se ioniza, no con cuán concentrado está. Esta distinción configura el pH, la conductividad y la velocidad de reacción.",
        pros_a: [
          "Se ioniza al 100 % en agua",
          "pH muy bajo a igual concentración",
          "Alta conductividad eléctrica",
          "Reacción esencialmente irreversible",
          "Ejemplos: HCl, HNO3, H2SO4",
        ],
        pros_b: [
          "Se ioniza solo parcialmente en agua",
          "pH más alto que un ácido fuerte a igual concentración",
          "Menor conductividad",
          "Establece un equilibrio (reversible)",
          "Ejemplos: ácido acético, ácido carbónico, HF",
        ],
        verdict:
          "Los ácidos fuertes se disocian por completo y los ácidos débiles establecen un equilibrio. La fuerza es distinta de la concentración: un ácido fuerte diluido puede tener un efecto más débil que uno débil concentrado.",
        faq: [
          {
            q: "¿Fuerte significa concentrado?",
            a: "No. La fuerza se refiere al grado de ionización; la concentración se refiere a la cantidad por volumen. Son propiedades independientes.",
          },
          {
            q: "¿Por qué los ácidos débiles tienen un valor de Ka?",
            a: "Como solo se ionizan parcialmente, una constante de equilibrio Ka cuantifica hasta dónde avanza la disociación.",
          },
          {
            q: "¿Cuál conduce mejor la electricidad?",
            a: "Un ácido fuerte, porque la ionización completa aporta muchos más iones libres para transportar la corriente.",
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
      es: {
        title: "pH vs pOH: medir la acidez y la basicidad",
        h1: "pH vs pOH: dos caras de la misma escala",
        description:
          "El pH sigue los iones de hidrógeno, el pOH sigue los iones de hidróxido, y los dos siempre suman 14. Compara fórmulas y usos para la química.",
        intro:
          "El pH y el pOH son escalas complementarias que describen la misma disolución. Entender su relación hace los cálculos ácido-base mucho más rápidos.",
        pros_a: [
          "Mide la concentración de iones H+",
          "pH = -log[H+]",
          "Un valor más bajo significa más ácido",
          "La escala más comúnmente reportada",
          "Rango 0-14 en agua a 25 °C",
        ],
        pros_b: [
          "Mide la concentración de iones OH-",
          "pOH = -log[OH-]",
          "Un valor más bajo significa más básico",
          "Útil para los cálculos sobre bases",
          "Siempre es igual a 14 menos el pH a 25 °C",
        ],
        verdict:
          "El pH y el pOH describen el mismo equilibrio desde direcciones opuestas. Como pH + pOH = 14 en agua a 25 °C, conocer uno da al instante el otro.",
        faq: [
          {
            q: "¿Por qué el pH y el pOH suman 14?",
            a: "Porque el producto iónico del agua Kw es 1×10⁻¹⁴ a 25 °C, así que los logaritmos de [H+] y [OH-] suman 14.",
          },
          {
            q: "¿Cuál se usa más a menudo?",
            a: "El pH es mucho más común en los laboratorios y en el uso cotidiano, pero el pOH simplifica muchos cálculos de fuerza de bases.",
          },
          {
            q: "¿Se mantiene la suma en 14 a todas las temperaturas?",
            a: "No. Kw cambia con la temperatura, así que la suma de pH + pOH es exactamente 14 solo a 25 °C.",
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
      es: {
        title: "Enlace iónico vs Enlace covalente: comparados",
        h1: "Enlace iónico vs Enlace covalente explicados",
        description:
          "Los enlaces iónicos transfieren electrones; los enlaces covalentes los comparten. Compara formación, puntos de fusión y ejemplos para el estudio de la química.",
        intro:
          "Los enlaces químicos mantienen unida la materia, y los dos tipos principales difieren en cómo se manejan los electrones. Esto determina si una sustancia es una sal frágil o un gas blando.",
        pros_a: [
          "Electrones transferidos de un metal a un no metal",
          "Forma iones cargados unidos por atracción",
          "Puntos de fusión y de ebullición altos",
          "Conduce la electricidad cuando está fundido o disuelto",
          "Ejemplos: NaCl, MgO, CaF2",
        ],
        pros_b: [
          "Electrones compartidos entre no metales",
          "Forma moléculas neutras y discretas",
          "Puntos de fusión generalmente más bajos",
          "Normalmente no conduce la electricidad",
          "Ejemplos: H2O, CO2, CH4",
        ],
        verdict:
          "Los enlaces iónicos aparecen entre metales y no metales mediante la transferencia de electrones; los enlaces covalentes aparecen entre no metales mediante el reparto. La diferencia de electronegatividad predice cuál se forma.",
        faq: [
          {
            q: "¿Cómo predigo el tipo de enlace?",
            a: "Compara las electronegatividades: una gran diferencia favorece el enlace iónico, una pequeña favorece el enlace covalente.",
          },
          {
            q: "¿Por qué los compuestos iónicos son frágiles?",
            a: "Desplazar la red alinea cargas iguales, que se repelen y agrietan el cristal.",
          },
          {
            q: "¿Puede un enlace ser en parte de ambos tipos?",
            a: "Sí. Los enlaces covalentes polares comparten los electrones de forma desigual, situándose entre el puramente iónico y el puramente covalente.",
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
      es: {
        title: "Enlace covalente vs Enlace metálico: comparados",
        h1: "Enlace covalente vs metálico explicados",
        description:
          "Los enlaces covalentes comparten pares de electrones entre átomos; los enlaces metálicos ponen en común electrones por toda una red. Compara sus propiedades.",
        intro:
          "Ambos enlaces implican electrones compartidos, pero la forma en que los electrones se mueven los diferencia. Uno da moléculas aislantes, el otro da conductores brillantes.",
        pros_a: [
          "Electrones compartidos en pares localizados fijos",
          "Forma moléculas o redes covalentes",
          "Normalmente es mal conductor eléctrico",
          "Se da entre átomos de no metales",
          "Ejemplos: O2, diamante, SiO2",
        ],
        pros_b: [
          "Electrones deslocalizados en un mar compartido",
          "Mantiene una red de iones metálicos positivos",
          "Excelente conductor del calor y la electricidad",
          "Maleable y dúctil",
          "Ejemplos: hierro, cobre, aluminio",
        ],
        verdict:
          "Los enlaces covalentes fijan los electrones entre átomos específicos, mientras que los enlaces metálicos dejan a los electrones moverse libremente. Esa movilidad explica por qué los metales conducen y se doblan sin romperse.",
        faq: [
          {
            q: "¿Por qué los metales son maleables pero los sólidos covalentes frágiles?",
            a: "El mar de electrones deja deslizar las capas del metal, mientras que los enlaces covalentes fijos se rompen cuando los átomos se desplazan.",
          },
          {
            q: "¿Cuál conduce la electricidad?",
            a: "El enlace metálico conduce bien porque los electrones deslocalizados se mueven libremente; la mayoría de las sustancias covalentes no.",
          },
          {
            q: "¿Son fuertes los sólidos de red covalente?",
            a: "Sí. Las estructuras covalentes gigantes como el diamante son extremadamente duras y tienen puntos de fusión muy altos.",
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
      es: {
        title: "Polar vs Apolar: moléculas comparadas",
        h1: "Moléculas polares vs apolares explicadas",
        description:
          "Las moléculas polares tienen una carga desigual y se disuelven en agua; las moléculas apolares son simétricas. Compara enlace y solubilidad.",
        intro:
          "La polaridad decide si una molécula se mezcla con el agua o con el aceite. Proviene de las diferencias de electronegatividad y de la forma de la molécula.",
        pros_a: [
          "Distribución desigual de electrones, tiene un dipolo",
          "Forma molecular asimétrica",
          "Se disuelve en agua y en disolventes polares",
          "Puntos de ebullición más altos por las fuerzas dipolares",
          "Ejemplos: H2O, NH3, HCl",
        ],
        pros_b: [
          "Distribución uniforme de electrones, sin dipolo neto",
          "Forma molecular simétrica",
          "Se disuelve en aceites y disolventes apolares",
          "Puntos de ebullición más bajos, fuerzas de dispersión débiles",
          "Ejemplos: O2, CO2, CH4",
        ],
        verdict:
          "Las moléculas polares llevan cargas parciales y siguen el principio de 'lo semejante disuelve lo semejante' con el agua; las moléculas apolares se mantienen simétricas y se mezclan con aceites. La forma importa tanto como el tipo de enlace.",
        faq: [
          {
            q: "¿Puede una molécula tener enlaces polares pero ser apolar?",
            a: "Sí. El CO2 tiene enlaces polares, pero su simetría lineal cancela los dipolos, haciendo que la molécula sea apolar.",
          },
          {
            q: "¿Por qué el aceite no se mezcla con el agua?",
            a: "El aceite es apolar y el agua es polar; sus distintas fuerzas intermoleculares impiden la mezcla.",
          },
          {
            q: "¿Cómo juzgo la polaridad?",
            a: "Comprueba las diferencias de electronegatividad de los enlaces y si la geometría molecular es simétrica.",
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
      es: {
        title: "Enlace de hidrógeno vs fuerzas dipolo-dipolo",
        h1: "Enlace de hidrógeno vs Dipolo-dipolo explicados",
        description:
          "El enlace de hidrógeno es una fuerza dipolar especialmente fuerte con N, O o F. Compara fuerza y efectos con el dipolo-dipolo ordinario.",
        intro:
          "Ambas son atracciones intermoleculares entre moléculas polares, pero el enlace de hidrógeno es un caso especial más fuerte. Explica las propiedades inusuales del agua.",
        pros_a: [
          "La atracción intermolecular más fuerte (no iónica)",
          "Requiere un H enlazado a N, O o F",
          "Eleva los puntos de ebullición de forma drástica",
          "Explica el alto punto de ebullición del agua y la densidad del hielo",
          "Ejemplos: agua, apareamiento de bases del ADN, NH3",
        ],
        pros_b: [
          "Más débil que el enlace de hidrógeno",
          "Se da entre cualquier molécula polar",
          "Alinea los extremos parciales positivo y negativo",
          "Eleva moderadamente los puntos de ebullición",
          "Ejemplos: HCl, acetona, SO2",
        ],
        verdict:
          "El enlace de hidrógeno es simplemente un subtipo potente de la interacción dipolo-dipolo restringido a N-H, O-H y F-H. Ambos juntan las moléculas polares, pero el enlace de hidrógeno gana en fuerza.",
        faq: [
          {
            q: "¿Es el enlace de hidrógeno un enlace químico real?",
            a: "No. Es una fuerza intermolecular fuerte, más débil que los enlaces covalentes o iónicos dentro de las moléculas.",
          },
          {
            q: "¿Por qué el hielo flota?",
            a: "Los enlaces de hidrógeno fijan las moléculas de agua en una red hexagonal abierta menos densa que el agua líquida.",
          },
          {
            q: "¿Cuál es más fuerte?",
            a: "Los enlaces de hidrógeno son más fuertes por la carga muy concentrada en los pequeños átomos N, O y F.",
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
      es: {
        title: "Soluble vs Insoluble: la solubilidad explicada",
        h1: "Sustancias solubles vs insolubles",
        description:
          "Las sustancias solubles se disuelven en un disolvente; las insolubles no. Compara reglas de solubilidad y ejemplos para el estudio de la química.",
        intro:
          "La solubilidad describe si una sustancia puede disolverse en un disolvente dado. Depende de las fuerzas intermoleculares, la temperatura y la naturaleza química.",
        pros_a: [
          "Se disuelve formando una disolución homogénea",
          "Las partículas se dispersan uniformemente por el disolvente",
          "A menudo sigue el principio de 'lo semejante disuelve lo semejante'",
          "La solubilidad normalmente aumenta con la temperatura",
          "Ejemplos: sal y azúcar en agua",
        ],
        pros_b: [
          "No se disuelve de forma apreciable en el disolvente",
          "Permanece como un sólido o capa separada",
          "Se puede separar por filtración",
          "Forma suspensiones, no verdaderas disoluciones",
          "Ejemplos: arena y tiza en agua",
        ],
        verdict:
          "Las sustancias solubles desaparecen en la disolución mientras que las insolubles permanecen visiblemente separadas. El resultado depende de que la polaridad coincida entre el soluto y el disolvente.",
        faq: [
          {
            q: "¿Es la solubilidad todo o nada?",
            a: "No. Las sustancias van desde muy solubles a ligeramente solubles a prácticamente insolubles.",
          },
          {
            q: "¿Cómo afecta la temperatura a la solubilidad?",
            a: "La mayoría de los sólidos se disuelven mejor en caliente, mientras que los gases generalmente se disuelven mejor en frío.",
          },
          {
            q: "¿Cómo separo un sólido insoluble?",
            a: "La filtración atrapa el sólido insoluble mientras el disolvente pasa a través.",
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
      es: {
        title: "Alcano vs Alqueno: diferencias entre hidrocarburos",
        h1: "Alcano vs Alqueno explicados",
        description:
          "Los alcanos tienen solo enlaces C-C simples; los alquenos contienen un doble enlace C=C. Compara fórmulas, reactividad y ejemplos.",
        intro:
          "Los alcanos y los alquenos son ambos hidrocarburos pero difieren en la saturación. Ese único doble enlace cambia su reactividad por completo.",
        pros_a: [
          "Solo enlaces carbono-carbono simples (saturado)",
          "Fórmula general CnH2n+2",
          "Relativamente poco reactivo, sufre sustitución",
          "Arde de forma limpia como combustible",
          "Ejemplos: metano, etano, propano",
        ],
        pros_b: [
          "Contiene al menos un doble enlace C=C (insaturado)",
          "Fórmula general CnH2n",
          "Reactivo, sufre reacciones de adición",
          "Decolora el agua de bromo",
          "Ejemplos: eteno, propeno, buteno",
        ],
        verdict:
          "Los alcanos son saturados y poco reactivos; los alquenos son insaturados y mucho más reactivos gracias al doble enlace. La prueba del agua de bromo los distingue al instante.",
        faq: [
          {
            q: "¿Cómo distingo un alcano de un alqueno?",
            a: "Añade agua de bromo: un alqueno la decolora rápido mientras que un alcano no.",
          },
          {
            q: "¿Por qué son más reactivos los alquenos?",
            a: "El doble enlace C=C tiene una nube de electrones pi expuesta que ataca fácilmente a los reactivos.",
          },
          {
            q: "¿Qué reacción sufren los alquenos?",
            a: "Reacciones de adición, en las que los átomos se añaden a través del doble enlace y lo convierten en un enlace simple.",
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
      es: {
        title: "Alqueno vs Alquino: doble vs triple enlace",
        h1: "Alqueno vs Alquino explicados",
        description:
          "Los alquenos tienen un doble enlace C=C; los alquinos tienen un triple enlace C≡C. Compara fórmulas, fuerza de enlace y reactividad.",
        intro:
          "Los alquenos y los alquinos son ambos hidrocarburos insaturados. El número de enlaces entre carbonos cambia la geometría y la reactividad.",
        pros_a: [
          "Contiene un doble enlace C=C",
          "Fórmula general CnH2n",
          "Geometría plana en torno al doble enlace",
          "Sufre reacciones de adición",
          "Ejemplos: eteno, propeno",
        ],
        pros_b: [
          "Contiene un triple enlace C≡C",
          "Fórmula general CnH2n-2",
          "Geometría lineal en torno al triple enlace",
          "Más insaturado, se adiciona dos veces",
          "Ejemplos: etino (acetileno), propino",
        ],
        verdict:
          "Los alquenos llevan un grado de insaturación por doble enlace; los alquinos llevan dos por triple enlace. Los alquinos son más lineales y pueden sufrir dos adiciones sucesivas.",
        faq: [
          {
            q: "¿Cuál tiene el mayor grado de insaturación?",
            a: "Un alquino, porque un triple enlace cuenta como dos grados de insaturación frente a uno de un doble enlace.",
          },
          {
            q: "¿Qué forma tiene un alquino?",
            a: "Los carbonos del triple enlace son lineales con ángulos de enlace de 180°.",
          },
          {
            q: "¿Puede un alquino convertirse en alcano?",
            a: "Sí. Añadir hidrógeno dos veces convierte un triple enlace en doble y luego en simple.",
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
      es: {
        title: "Aromático vs Alifático: compuestos comparados",
        h1: "Compuestos aromáticos vs alifáticos explicados",
        description:
          "Los compuestos aromáticos contienen sistemas de anillo estables como el benceno; los alifáticos tienen cadenas abiertas o no aromáticas. Compara ambos.",
        intro:
          "Los compuestos orgánicos se dividen en familias aromáticas y alifáticas. El rasgo definitorio es si está presente un anillo deslocalizado especial.",
        pros_a: [
          "Contiene un anillo deslocalizado de tipo benceno",
          "Estabilidad extra por la deslocalización de electrones",
          "Sufre sustitución para preservar el anillo",
          "A menudo tiene un olor característico",
          "Ejemplos: benceno, tolueno, naftaleno",
        ],
        pros_b: [
          "Cadenas abiertas o anillos no aromáticos",
          "Sin estabilización de anillo especial",
          "Incluye alcanos, alquenos y alquinos",
          "Sufre adición o sustitución",
          "Ejemplos: hexano, eteno, ciclohexano",
        ],
        verdict:
          "Los compuestos aromáticos deben su estabilidad a un anillo deslocalizado de electrones pi; los compuestos alifáticos carecen de él. Esa estabilidad hace que los aromáticos resistan las reacciones de adición.",
        faq: [
          {
            q: "¿Qué hace aromático a un anillo?",
            a: "Debe ser cíclico, plano, totalmente conjugado y cumplir la regla de Hückel (4n+2 electrones pi).",
          },
          {
            q: "¿Es aromático el ciclohexano?",
            a: "No. Es un anillo saturado sin sistema pi deslocalizado, así que es alifático.",
          },
          {
            q: "¿Por qué los aromáticos prefieren la sustitución?",
            a: "La sustitución mantiene intacto el anillo aromático estable, mientras que la adición lo destruiría.",
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
      es: {
        title: "Isómero cis vs trans: isomería geométrica",
        h1: "Isómero cis vs trans explicado",
        description:
          "Los isómeros cis tienen los grupos al mismo lado de un doble enlace; los isómeros trans en lados opuestos. Compara sus propiedades.",
        intro:
          "Los isómeros cis y trans son isómeros geométricos con la misma fórmula pero distinta disposición 3D. El doble enlace los fija en su sitio.",
        pros_a: [
          "Grupos idénticos al mismo lado del enlace",
          "A menudo polar con un dipolo neto",
          "Normalmente un punto de fusión más bajo",
          "Empaquetamiento menos simétrico",
          "Ejemplo: cis-2-buteno",
        ],
        pros_b: [
          "Grupos idénticos en lados opuestos",
          "A menudo apolar, los dipolos pueden cancelarse",
          "Normalmente un punto de fusión más alto",
          "Más simétrico, se empaqueta de forma eficiente",
          "Ejemplo: trans-2-buteno",
        ],
        verdict:
          "Los isómeros cis y trans difieren solo en la geometría en torno a un doble enlace rígido, pero eso cambia la polaridad y el punto de fusión. El trans normalmente se empaqueta mejor y funde más alto.",
        faq: [
          {
            q: "¿Por qué el cis y el trans no se interconvierten libremente?",
            a: "El doble enlace no puede rotar, así que las dos disposiciones quedan fijas a menos que el enlace se rompa.",
          },
          {
            q: "¿Cuál tiene el punto de fusión más alto?",
            a: "Normalmente el isómero trans, porque su forma simétrica se empaqueta más apretada en un sólido.",
          },
          {
            q: "¿Tienen la misma fórmula molecular?",
            a: "Sí. Son isómeros, así que la fórmula es idéntica y solo difiere la disposición espacial.",
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
      es: {
        title: "Enantiómero vs Diastereómero: estereoisómeros",
        h1: "Enantiómero vs Diastereómero explicados",
        description:
          "Los enantiómeros son imágenes especulares no superponibles; los diastereómeros son estereoisómeros que no son imágenes especulares. Compara ambos.",
        intro:
          "Los estereoisómeros comparten la conectividad pero difieren en la disposición 3D. Los enantiómeros y los diastereómeros son las dos categorías principales.",
        pros_a: [
          "Imágenes especulares no superponibles una de la otra",
          "Propiedades físicas idénticas (salvo la rotación óptica)",
          "Hacen rotar la luz polarizada en sentidos opuestos",
          "Difieren en todos los estereocentros",
          "Ejemplo: D-alanina y L-alanina",
        ],
        pros_b: [
          "Estereoisómeros que no son imágenes especulares",
          "Propiedades físicas distintas (pf, peb, solubilidad)",
          "Se pueden separar por métodos ordinarios",
          "Difieren en algunos estereocentros pero no en todos",
          "Ejemplo: isómeros cis/trans, azúcares",
        ],
        verdict:
          "Los enantiómeros son imágenes especulares perfectas con propiedades idénticas; los diastereómeros difieren solo en algunos estereocentros y se comportan de forma distinta. La distinción importa para el diseño de fármacos.",
        faq: [
          {
            q: "¿En qué se diferencian los enantiómeros y los diastereómeros?",
            a: "Los enantiómeros son imágenes especulares que difieren en todos los estereocentros; los diastereómeros difieren solo en algunos.",
          },
          {
            q: "¿Se pueden separar los enantiómeros con facilidad?",
            a: "No por métodos ordinarios, ya que sus propiedades físicas son idénticas; se necesitan técnicas quirales.",
          },
          {
            q: "¿Por qué importan los enantiómeros en la medicina?",
            a: "Un enantiómero de un fármaco puede ser activo mientras que su imagen especular es inactiva o dañina.",
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
      es: {
        title: "SN1 vs SN2: sustitución nucleófila",
        h1: "Mecanismos de reacción SN1 vs SN2",
        description:
          "El SN1 es una reacción en dos pasos a través de un carbocatión; el SN2 es un ataque por la parte trasera en un solo paso. Compara velocidad, estereoquímica y sustratos.",
        intro:
          "El SN1 y el SN2 son los dos mecanismos clave de sustitución nucleófila. Elegir entre ellos depende del sustrato, el nucleófilo y el disolvente.",
        pros_a: [
          "Mecanismo en dos pasos a través de un carbocatión",
          "La velocidad depende solo del sustrato",
          "Favorecido por los sustratos terciarios",
          "Produce una mezcla racémica",
          "Prefiere los disolventes polares próticos",
        ],
        pros_b: [
          "Ataque concertado por la parte trasera en un solo paso",
          "La velocidad depende del sustrato y del nucleófilo",
          "Favorecido por los sustratos primarios",
          "Causa la inversión de la configuración",
          "Prefiere los disolventes polares apróticos",
        ],
        verdict:
          "El SN1 transcurre a través de un carbocatión y da racemización, mientras que el SN2 es concertado e invierte el estereocentro. El tipo de sustrato es el predictor más fuerte de cuál domina.",
        faq: [
          {
            q: "¿Qué mecanismo favorecen los haluros terciarios?",
            a: "El SN1, porque los carbocationes terciarios se estabilizan mientras que el volumen estérico bloquea el ataque trasero del SN2.",
          },
          {
            q: "¿Qué le ocurre a la estereoquímica en el SN2?",
            a: "La configuración se invierte, como un paraguas que se voltea con el viento.",
          },
          {
            q: "¿Cómo afecta el disolvente a la elección?",
            a: "Los disolventes polares próticos favorecen el SN1, mientras que los polares apróticos favorecen el SN2.",
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
      es: {
        title: "E1 vs E2: mecanismos de reacción de eliminación",
        h1: "Mecanismos de reacción E1 vs E2 explicados",
        description:
          "Las eliminaciones E1 transcurren a través de un carbocatión en dos pasos; las eliminaciones E2 son concertadas en un solo paso. Compara velocidad y condiciones.",
        intro:
          "El E1 y el E2 son los dos mecanismos principales de eliminación que forman alquenos eliminando átomos. Las condiciones deciden qué vía gana.",
        pros_a: [
          "Mecanismo en dos pasos a través de un carbocatión",
          "La velocidad depende solo del sustrato",
          "Favorecido por los sustratos terciarios",
          "Usa bases débiles y calor",
          "Puede dar productos reordenados",
        ],
        pros_b: [
          "Eliminación concertada en un solo paso",
          "La velocidad depende del sustrato y de la base",
          "Funciona en sustratos primarios y secundarios",
          "Requiere una base fuerte, a menudo voluminosa",
          "Requiere una geometría antiperiplanar",
        ],
        verdict:
          "El E1 transcurre a través de un carbocatión con una base débil, mientras que el E2 es un proceso concertado de un solo paso que necesita una base fuerte. Ambos forman alquenos pero difieren en la ley de velocidad y la estereoquímica.",
        faq: [
          {
            q: "¿Qué base necesita el E2?",
            a: "Una base fuerte como el hidróxido o un alcóxido que pueda arrancar un protón en el paso concertado.",
          },
          {
            q: "¿Por qué el E1 puede dar productos reordenados?",
            a: "Su carbocatión intermedio puede desplazarse a una posición más estable antes de la eliminación.",
          },
          {
            q: "¿Qué geometría requiere el E2?",
            a: "El grupo saliente y el protón deben ser antiperiplanares, en lados opuestos del enlace.",
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
      es: {
        title: "Oxidación vs Reducción: la redox explicada",
        h1: "Oxidación vs Reducción en las reacciones redox",
        description:
          "La oxidación es la pérdida de electrones; la reducción es la ganancia de electrones. Compara las dos mitades de toda reacción redox.",
        intro:
          "La oxidación y la reducción siempre ocurren juntas en una reacción redox. La regla nemotécnica de 'pierde-gana' mantiene clara la dirección del flujo de electrones.",
        pros_a: [
          "Pérdida de electrones por parte de una especie",
          "El número de oxidación aumenta",
          "A menudo implica la ganancia de oxígeno",
          "La especie oxidada es el agente reductor",
          "Ejemplo: un metal que se oxida",
        ],
        pros_b: [
          "Ganancia de electrones por parte de una especie",
          "El número de oxidación disminuye",
          "A menudo implica la pérdida de oxígeno",
          "La especie reducida es el agente oxidante",
          "Ejemplo: un mineral metálico que se funde",
        ],
        verdict:
          "La oxidación y la reducción son dos mitades de la misma transferencia de electrones. Siempre que una especie pierde electrones, otra debe ganarlos, así que son inseparables.",
        faq: [
          {
            q: "¿Qué significa la regla 'pierde-gana'?",
            a: "La oxidación es pérdida y la reducción es ganancia de electrones, una forma fácil de recordar la dirección redox.",
          },
          {
            q: "¿Puede ocurrir la oxidación sin la reducción?",
            a: "No. Los electrones que pierde una especie siempre los gana otra, así que las dos ocurren juntas.",
          },
          {
            q: "¿Qué es un agente oxidante?",
            a: "Una sustancia que causa la oxidación de otra al aceptar electrones, reduciéndose ella misma.",
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
      es: {
        title: "Ánodo vs Cátodo: los electrodos explicados",
        h1: "Ánodo vs Cátodo en electroquímica",
        description:
          "La oxidación ocurre en el ánodo; la reducción ocurre en el cátodo. Compara la polaridad en celdas galvánicas y electrolíticas.",
        intro:
          "Toda celda electroquímica tiene dos electrodos. Saber cuál es cuál depende de la reacción, no solo de un signo fijo.",
        pros_a: [
          "Electrodo donde ocurre la oxidación",
          "Negativo en una celda galvánica",
          "Positivo en una celda electrolítica",
          "Libera electrones al circuito",
          "Los aniones migran hacia él",
        ],
        pros_b: [
          "Electrodo donde ocurre la reducción",
          "Positivo en una celda galvánica",
          "Negativo en una celda electrolítica",
          "Recibe electrones del circuito",
          "Los cationes migran hacia él",
        ],
        verdict:
          "El ánodo siempre alberga la oxidación y el cátodo siempre alberga la reducción. Sus signos de carga se invierten entre celdas galvánicas y electrolíticas, así que usa la reacción para identificarlos.",
        faq: [
          {
            q: "¿Es el ánodo siempre negativo?",
            a: "No. Es negativo en una celda galvánica pero positivo en una celda electrolítica.",
          },
          {
            q: "¿Cómo recuerdo las reacciones?",
            a: "Oxidación en el ánodo, reducción en el cátodo.",
          },
          {
            q: "¿Hacia dónde se mueven los cationes?",
            a: "Los cationes siempre se mueven hacia el cátodo, donde tiene lugar la reducción.",
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
      es: {
        title: "Reacciones endotérmicas vs exotérmicas",
        h1: "Reacciones endotérmicas vs exotérmicas explicadas",
        description:
          "Las reacciones endotérmicas absorben calor; las reacciones exotérmicas liberan calor. Compara diagramas de energía y ejemplos.",
        intro:
          "Las reacciones absorben o liberan energía. El signo del cambio de entalpía te dice cuál, y los diagramas de energía lo hacen visual.",
        pros_a: [
          "Absorbe calor del entorno",
          "El cambio de entalpía es positivo",
          "Los productos tienen más energía que los reactivos",
          "El entorno se enfría",
          "Ejemplos: fotosíntesis, el hielo derritiéndose",
        ],
        pros_b: [
          "Libera calor al entorno",
          "El cambio de entalpía es negativo",
          "Los productos tienen menos energía que los reactivos",
          "El entorno se calienta",
          "Ejemplos: combustión, neutralización",
        ],
        verdict:
          "Las reacciones endotérmicas absorben energía y se sienten frías; las reacciones exotérmicas liberan energía y se sienten calientes. El signo de ΔH te dice al instante qué categoría aplica.",
        faq: [
          {
            q: "¿Cómo ayuda el signo de ΔH?",
            a: "Un ΔH positivo significa endotérmico (calor absorbido); un ΔH negativo significa exotérmico (calor liberado).",
          },
          {
            q: "¿Por qué una bolsa de frío instantáneo se siente fría?",
            a: "Usa un proceso de disolución endotérmico que absorbe calor de tu piel.",
          },
          {
            q: "¿La combustión es endotérmica o exotérmica?",
            a: "La combustión es fuertemente exotérmica, liberando grandes cantidades de calor y luz.",
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
      es: {
        title: "Entalpía vs Entropía: termodinámica",
        h1: "Entalpía vs Entropía explicadas",
        description:
          "La entalpía mide el contenido de calor; la entropía mide el desorden. Compara estos dos pilares de la termodinámica para el estudio de la química.",
        intro:
          "La entalpía y la entropía juntas deciden si una reacción es espontánea. La energía libre de Gibbs combina ambas en una sola predicción.",
        pros_a: [
          "Mide el contenido total de calor (H)",
          "El cambio ΔH muestra el calor absorbido o liberado",
          "Un ΔH negativo favorece la espontaneidad",
          "Se mide en julios o kJ/mol",
          "Impulsa las reacciones exotérmicas",
        ],
        pros_b: [
          "Mide el desorden o la aleatoriedad (S)",
          "El cambio ΔS muestra el aumento o la disminución del desorden",
          "Un ΔS positivo favorece la espontaneidad",
          "Se mide en J/(mol·K)",
          "Tiende a aumentar en el universo",
        ],
        verdict:
          "La entalpía sigue el calor mientras que la entropía sigue el desorden. Ninguna por sí sola predice la espontaneidad; la energía libre de Gibbs, ΔG = ΔH − TΔS, las combina para el veredicto final.",
        faq: [
          {
            q: "¿Cuál predice la espontaneidad?",
            a: "Ninguna por sí sola. La energía libre de Gibbs combina la entalpía y la entropía: un ΔG negativo significa espontáneo.",
          },
          {
            q: "¿Aumenta siempre la entropía?",
            a: "La entropía total del universo aumenta, aunque un sistema local puede disminuir en entropía.",
          },
          {
            q: "¿Qué unidades usa cada una?",
            a: "La entalpía usa kJ/mol; la entropía usa J/(mol·K) porque incluye la temperatura.",
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
      es: {
        title: "Catalizador vs Inhibidor: velocidad de reacción",
        h1: "Catalizador vs Inhibidor explicados",
        description:
          "Los catalizadores aceleran las reacciones; los inhibidores las ralentizan. Compara cómo cada uno cambia la energía de activación y la velocidad de reacción.",
        intro:
          "Tanto los catalizadores como los inhibidores influyen en la velocidad de reacción sin consumirse en la ecuación global. Actúan en direcciones opuestas.",
        pros_a: [
          "Acelera la velocidad de reacción",
          "Reduce la energía de activación",
          "No se consume en la reacción global",
          "Proporciona una vía alternativa",
          "Ejemplos: enzimas, platino, hierro",
        ],
        pros_b: [
          "Ralentiza la velocidad de reacción",
          "En la práctica eleva la barrera de energía",
          "Se usa para controlar o detener reacciones",
          "Puede bloquear sitios activos o intermedios",
          "Ejemplos: conservantes, antioxidantes",
        ],
        verdict:
          "Los catalizadores y los inhibidores son herramientas opuestas para la velocidad de reacción. Los catalizadores abren una ruta más rápida reduciendo la energía de activación; los inhibidores ralentizan o detienen una reacción.",
        faq: [
          {
            q: "¿Se consume un catalizador?",
            a: "No. Se regenera, así que no aparece en la ecuación equilibrada global.",
          },
          {
            q: "¿Cómo acelera un catalizador una reacción?",
            a: "Ofrece una vía alternativa con una energía de activación más baja, así que más colisiones tienen éxito.",
          },
          {
            q: "¿Dónde son útiles los inhibidores?",
            a: "En la conservación de alimentos, el diseño de fármacos y cualquier proceso donde las reacciones deban ralentizarse o detenerse.",
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
      es: {
        title: "Celda galvánica vs Celda electrolítica comparadas",
        h1: "Celda galvánica vs Celda electrolítica explicadas",
        description:
          "Una celda galvánica produce electricidad a partir de una reacción espontánea; una celda electrolítica usa electricidad para impulsar una. Compara ambas.",
        intro:
          "Ambas celdas electroquímicas vinculan la química redox con la corriente eléctrica, pero funcionan en direcciones opuestas del flujo de energía.",
        pros_a: [
          "Convierte la energía química en electricidad",
          "Ejecuta una reacción redox espontánea",
          "El ánodo es negativo, el cátodo es positivo",
          "Alimenta baterías y dispositivos",
          "Ejemplo: una batería estándar",
        ],
        pros_b: [
          "Usa electricidad para impulsar una reacción",
          "Fuerza una reacción redox no espontánea",
          "El ánodo es positivo, el cátodo es negativo",
          "Se usa para la galvanoplastia y el refinado",
          "Ejemplo: la electrólisis del agua",
        ],
        verdict:
          "Una celda galvánica libera energía de una reacción espontánea, mientras que una celda electrolítica consume energía para forzar una no espontánea. Son procesos inversos.",
        faq: [
          {
            q: "¿Qué celda produce electricidad?",
            a: "La celda galvánica, ya que su reacción espontánea libera energía como corriente eléctrica.",
          },
          {
            q: "¿Por qué se invierten los signos de los electrodos?",
            a: "La energía fluye en sentido contrario, así que el ánodo y el cátodo intercambian la polaridad entre los dos tipos de celda.",
          },
          {
            q: "¿Para qué se usa la electrólisis?",
            a: "Para la galvanoplastia, el refinado de metales y la separación de compuestos como el agua en elementos.",
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
      es: {
        title: "Hidrógeno vs Helio: comparación de elementos",
        h1: "Hidrógeno vs Helio explicados",
        description:
          "El hidrógeno es un no metal reactivo; el helio es un gas noble inerte. Compara los dos elementos más ligeros para el estudio.",
        intro:
          "El hidrógeno y el helio son los dos primeros elementos y los más abundantes del universo, pero su química no podría ser más distinta.",
        pros_a: [
          "Número atómico 1, un electrón",
          "Muy reactivo e inflamable",
          "Forma compuestos como el agua y los ácidos",
          "Se usa como combustible y en la síntesis de amoníaco",
          "El elemento más abundante del universo",
        ],
        pros_b: [
          "Número atómico 2, capa externa completa",
          "Inerte y no inflamable",
          "No forma esencialmente ningún compuesto",
          "Se usa en globos y criogenia",
          "El segundo elemento más abundante",
        ],
        verdict:
          "El hidrógeno es ligero y reactivo mientras que el helio es ligero e inerte. Su diferencia de un electrón hace que uno sea un combustible y el otro un gas de elevación seguro.",
        faq: [
          {
            q: "¿Por qué el helio es más seguro en los globos?",
            a: "El helio es inerte y no inflamable, mientras que el hidrógeno puede inflamarse de forma explosiva.",
          },
          {
            q: "¿Cuál es más abundante?",
            a: "El hidrógeno es el elemento más abundante del universo, seguido del helio.",
          },
          {
            q: "¿Por qué el helio es poco reactivo?",
            a: "Su capa externa de electrones está completa, así que no tiene tendencia a ganar, perder ni compartir electrones.",
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
      es: {
        title: "Carbono vs Silicio: el grupo 14 comparado",
        h1: "Carbono vs Silicio explicados",
        description:
          "El carbono forma la base de la vida; el silicio sustenta las rocas y la electrónica. Compara estos dos elementos del grupo 14.",
        intro:
          "El carbono y el silicio están en el mismo grupo y comparten cuatro electrones de valencia, pero construyen mundos enormemente distintos.",
        pros_a: [
          "Número atómico 6, base de la química orgánica",
          "Forma cadenas carbono-carbono fuertes y estables",
          "Crea compuestos diversos, incluidas las moléculas de la vida",
          "Alótropos: diamante, grafito, fullerenos",
          "Forma dobles y triples enlaces estables",
        ],
        pros_b: [
          "Número atómico 14, base de la química mineral",
          "Forma enlaces silicio-silicio más débiles",
          "Se enlaza con facilidad con el oxígeno como silicatos",
          "Semiconductor clave para la electrónica",
          "Rara vez forma dobles enlaces estables",
        ],
        verdict:
          "Los enlaces fuertes y versátiles del carbono permiten la complejidad de la vida; el silicio prefiere el oxígeno y da energía a las rocas y los chips. Mismo grupo, química muy distinta.",
        faq: [
          {
            q: "¿Por qué el carbono es mejor para la vida?",
            a: "El carbono forma cadenas fuertes y estables y enlaces múltiples, permitiendo la enorme variedad de moléculas que la vida necesita.",
          },
          {
            q: "¿Por qué se usa el silicio en los chips?",
            a: "El silicio es un semiconductor cuya conductividad se puede ajustar con precisión mediante el dopaje.",
          },
          {
            q: "¿Están en el mismo grupo?",
            a: "Sí. Ambos están en el grupo 14 y tienen cuatro electrones de valencia.",
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
      es: {
        title: "Metal vs No metal: propiedades de los elementos",
        h1: "Metal vs No metal explicados",
        description:
          "Los metales son conductores brillantes que pierden electrones; los no metales son aislantes opacos que los ganan. Compara rasgos físicos y químicos.",
        intro:
          "La tabla periódica se divide en metales y no metales con unos pocos metaloides entre ellos. Sus propiedades contrastantes dan forma a toda la química.",
        pros_a: [
          "Brillante, maleable y dúctil",
          "Buen conductor del calor y la electricidad",
          "Tiende a perder electrones, forma cationes",
          "En su mayoría sólido a temperatura ambiente",
          "Ejemplos: hierro, cobre, sodio",
        ],
        pros_b: [
          "Opaco y frágil como sólido",
          "Mal conductor, normalmente un aislante",
          "Tiende a ganar electrones, forma aniones",
          "Puede ser sólido, líquido o gas",
          "Ejemplos: oxígeno, azufre, cloro",
        ],
        verdict:
          "Los metales conducen, brillan y ceden electrones; los no metales aíslan, se ven opacos y captan electrones. Juntos forman los compuestos iónicos y covalentes de la vida cotidiana.",
        faq: [
          {
            q: "¿Dónde están los metales en la tabla periódica?",
            a: "Los metales ocupan la izquierda y el centro, mientras que los no metales se agrupan en la parte superior derecha.",
          },
          {
            q: "¿Los metales ganan o pierden electrones?",
            a: "Los metales pierden electrones para formar cationes positivos, mientras que los no metales los ganan para formar aniones.",
          },
          {
            q: "¿Qué es un metaloide?",
            a: "Un elemento con propiedades intermedias, como el silicio, situado a lo largo de la frontera metal-no metal.",
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
      es: {
        title: "Metal alcalino vs alcalinotérreo comparados",
        h1: "Metales alcalinos vs metales alcalinotérreos",
        description:
          "Los metales alcalinos son del grupo 1 con un electrón de valencia; los metales alcalinotérreos son del grupo 2 con dos. Compara reactividad e iones.",
        intro:
          "Los grupos 1 y 2 están uno al lado del otro en la tabla periódica, ambos metales reactivos, pero su número de electrones de valencia los diferencia.",
        pros_a: [
          "Grupo 1, un electrón de valencia",
          "Forma iones +1",
          "Extremadamente reactivo, blando, de baja densidad",
          "Reacciona violentamente con el agua",
          "Ejemplos: sodio, potasio, litio",
        ],
        pros_b: [
          "Grupo 2, dos electrones de valencia",
          "Forma iones +2",
          "Reactivo pero más duro y denso que el grupo 1",
          "Reacciona con el agua más despacio",
          "Ejemplos: magnesio, calcio, bario",
        ],
        verdict:
          "Los metales alcalinos pierden un electrón y reaccionan violentamente; los metales alcalinotérreos pierden dos y son algo más calmados. Ambos se vuelven más reactivos al bajar por su grupo.",
        faq: [
          {
            q: "¿Qué grupo es más reactivo?",
            a: "Los metales alcalinos son generalmente más reactivos porque perder un solo electrón es más fácil.",
          },
          {
            q: "¿Qué carga llevan sus iones?",
            a: "Los metales alcalinos forman iones +1; los metales alcalinotérreos forman iones +2.",
          },
          {
            q: "¿Por qué se guardan los metales alcalinos en aceite?",
            a: "Reaccionan tan rápido con el aire y el agua que el aceite los mantiene aislados de la humedad.",
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
      es: {
        title: "Halógeno vs Gas noble: grupo 17 vs 18",
        h1: "Halógenos vs Gases nobles explicados",
        description:
          "Los halógenos son no metales reactivos del grupo 17; los gases nobles son elementos inertes del grupo 18. Compara reactividad y capas de electrones.",
        intro:
          "Los grupos 17 y 18 son vecinos con química opuesta. Uno ansía un electrón, el otro ya tiene una capa completa.",
        pros_a: [
          "Grupo 17, siete electrones de valencia",
          "No metales muy reactivos",
          "Gana un electrón para formar iones -1",
          "Forma sales con los metales (haluros)",
          "Ejemplos: flúor, cloro, yodo",
        ],
        pros_b: [
          "Grupo 18, capa de valencia completa",
          "Inerte y casi nada reactivo",
          "Normalmente no forma iones",
          "Existe como átomos individuales y estables",
          "Ejemplos: helio, neón, argón",
        ],
        verdict:
          "A los halógenos les falta un electrón para la estabilidad, así que son muy reactivos; los gases nobles ya están completos y son casi inertes. Por esa razón se sitúan a una columna de distancia.",
        faq: [
          {
            q: "¿Por qué los gases nobles son poco reactivos?",
            a: "Su capa externa de electrones ya está completa, así que no tienen impulso para ganar, perder ni compartir electrones.",
          },
          {
            q: "¿Por qué los halógenos son tan reactivos?",
            a: "Solo necesitan un electrón más para llenar su capa, lo que los hace ávidos de reaccionar.",
          },
          {
            q: "¿Qué ion forman los halógenos?",
            a: "Los halógenos ganan un electrón para formar aniones -1 llamados haluros.",
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
      es: {
        title: "Hierro vs Cobre: metales de transición comparados",
        h1: "Hierro vs Cobre explicados",
        description:
          "El hierro es fuerte y magnético pero se oxida; el cobre es un excelente conductor que resiste la corrosión. Compara ambos metales de transición.",
        intro:
          "El hierro y el cobre son metales de transición de uso constante. Sus distintas fortalezas los hacen adecuados para la construcción frente al cableado eléctrico.",
        pros_a: [
          "Símbolo Fe, número atómico 26",
          "Fuerte y ferromagnético",
          "Se usa en el acero para la construcción",
          "Se corroe en óxido cuando se expone a la humedad",
          "Esencial en la hemoglobina",
        ],
        pros_b: [
          "Símbolo Cu, número atómico 29",
          "Excelente conductor eléctrico y térmico",
          "Resiste la corrosión, forma una pátina verde",
          "Se usa en cableado, tuberías y aleaciones",
          "Superficie naturalmente antimicrobiana",
        ],
        verdict:
          "El hierro aporta fuerza y magnetismo para las estructuras, mientras que el cobre aporta una conductividad de primer nivel para el cableado. El cobre resiste mejor la corrosión; el hierro debe protegerse del óxido.",
        faq: [
          {
            q: "¿Cuál conduce mejor la electricidad?",
            a: "El cobre es un conductor mucho mejor, por eso domina el cableado eléctrico.",
          },
          {
            q: "¿Por qué el hierro se oxida pero el cobre no?",
            a: "El hierro forma un óxido de hierro escamoso, mientras que el cobre forma una pátina verde protectora que escuda el metal.",
          },
          {
            q: "¿Es alguno magnético?",
            a: "El hierro es fuertemente ferromagnético; el cobre es esencialmente no magnético.",
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
      es: {
        title: "Oro vs Plata: metales preciosos comparados",
        h1: "Oro vs Plata explicados",
        description:
          "El oro es muy poco reactivo y denso; la plata es el mejor conductor eléctrico pero se empaña. Compara ambos metales preciosos.",
        intro:
          "El oro y la plata son metales preciosos clásicos apreciados por su belleza y rareza, pero su comportamiento químico difiere en aspectos clave.",
        pros_a: [
          "Símbolo Au, número atómico 79",
          "Extremadamente poco reactivo, no se empaña",
          "Muy denso y altamente maleable",
          "Se usa en joyería, electrónica y moneda",
          "Resiste los ácidos salvo el agua regia",
        ],
        pros_b: [
          "Símbolo Ag, número atómico 47",
          "El mejor conductor eléctrico y térmico",
          "Se empaña de negro con el azufre del aire",
          "Más barata y abundante que el oro",
          "Se usa en joyería, espejos y contactos",
        ],
        verdict:
          "El oro es el metal más inerte y valioso, que nunca se empaña, mientras que la plata conduce mejor pero se oscurece con el tiempo. Cada uno destaca en distintos roles químicos y prácticos.",
        faq: [
          {
            q: "¿Por qué la plata se empaña pero el oro no?",
            a: "La plata reacciona con los compuestos de azufre del aire para formar sulfuro de plata negro; el oro es demasiado poco reactivo.",
          },
          {
            q: "¿Cuál conduce mejor la electricidad?",
            a: "La plata es el mejor conductor de todos los metales, ligeramente por delante del cobre y el oro.",
          },
          {
            q: "¿Qué disuelve el oro?",
            a: "El agua regia, una mezcla de ácido nítrico y clorhídrico, es una de las pocas cosas que disuelven el oro.",
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
      es: {
        title: "Sodio vs Potasio: metales alcalinos",
        h1: "Sodio vs Potasio explicados",
        description:
          "El sodio y el potasio son ambos metales alcalinos del grupo 1, pero el potasio es más reactivo. Compara reactividad y biología.",
        intro:
          "El sodio y el potasio están en el mismo grupo, ambos blandos y reactivos, pero bajar por el grupo cambia su comportamiento.",
        pros_a: [
          "Símbolo Na, número atómico 11",
          "Metal alcalino reactivo del grupo 1",
          "Reacciona vigorosamente con el agua",
          "Ion principal de la sangre y el líquido extracelular",
          "Forma la sal de mesa común, NaCl",
        ],
        pros_b: [
          "Símbolo K, número atómico 19",
          "Más reactivo que el sodio",
          "Reacciona aún más violentamente con el agua",
          "Ion principal dentro de las células del cuerpo",
          "Se encuentra en los plátanos y los fertilizantes",
        ],
        verdict:
          "El potasio es más reactivo que el sodio porque su electrón externo está más lejos del núcleo y es más fácil de perder. Ambos son electrolitos vitales que se equilibran entre sí en el cuerpo.",
        faq: [
          {
            q: "¿Por qué el potasio es más reactivo que el sodio?",
            a: "Su electrón de valencia está más lejos del núcleo y retenido con menos fuerza, así que se pierde con más facilidad.",
          },
          {
            q: "¿En qué se diferencian en el cuerpo?",
            a: "El sodio domina fuera de las células mientras que el potasio domina dentro, y el equilibrio impulsa las señales nerviosas.",
          },
          {
            q: "¿Qué ocurre cuando cada uno se encuentra con el agua?",
            a: "Ambos reaccionan liberando hidrógeno, pero el potasio reacciona de forma más violenta, a menudo con llama.",
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
      es: {
        title: "Cloro vs Flúor: halógenos comparados",
        h1: "Cloro vs Flúor explicados",
        description:
          "El flúor es el halógeno más reactivo; el cloro es uno fuerte pero menos agresivo. Compara reactividad y usos.",
        intro:
          "El cloro y el flúor son ambos halógenos del grupo 17, pero el flúor se sitúa por encima del cloro y es aún más reactivo.",
        pros_a: [
          "Símbolo Cl, número atómico 17",
          "Gas reactivo de color amarillo verdoso",
          "Oxidante fuerte, menos reactivo que el flúor",
          "Se usa para desinfectar el agua y fabricar plásticos",
          "Forma iones cloruro en las sales",
        ],
        pros_b: [
          "Símbolo F, número atómico 9",
          "Amarillo pálido, el más reactivo de todos los elementos",
          "El halógeno más oxidante",
          "Se usa en la pasta de dientes y el teflón",
          "El elemento más electronegativo",
        ],
        verdict:
          "El flúor es el elemento más reactivo y electronegativo, superando al cloro. El cloro sigue siendo un oxidante potente y mucho más práctico de manejar para el tratamiento del agua.",
        faq: [
          {
            q: "¿Qué halógeno es más reactivo?",
            a: "El flúor es el más reactivo de todos los elementos, más que el cloro, que se sitúa debajo de él.",
          },
          {
            q: "¿Por qué hay flúor en la pasta de dientes?",
            a: "Los iones fluoruro fortalecen el esmalte dental y ayudan a prevenir las caries.",
          },
          {
            q: "¿Por qué el cloro limpia el agua?",
            a: "El cloro es un oxidante fuerte que mata las bacterias y otros patógenos.",
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
      es: {
        title: "Ácido clorhídrico vs sulfúrico comparados",
        h1: "Ácido clorhídrico vs Ácido sulfúrico",
        description:
          "El HCl es un ácido fuerte monoprótico; el H2SO4 es un ácido fuerte diprótico y agente deshidratante. Compara ambos ácidos de laboratorio.",
        intro:
          "El ácido clorhídrico y el ácido sulfúrico son dos de los ácidos fuertes más comunes. Ambos son fuertes, pero su número de protones y su comportamiento difieren.",
        pros_a: [
          "Fórmula HCl, ácido monoprótico",
          "Dona un H+ por molécula",
          "Se encuentra en el ácido del estómago",
          "Volátil, despide humos en aire húmedo",
          "Se usa para limpiar y decapar metales",
        ],
        pros_b: [
          "Fórmula H2SO4, ácido diprótico",
          "Dona dos H+ por molécula",
          "Potente agente deshidratante",
          "No volátil, líquido aceitoso",
          "Se usa en fertilizantes y baterías de coche",
        ],
        verdict:
          "Ambos son ácidos fuertes, pero el ácido sulfúrico es diprótico y un deshidratante feroz, mientras que el ácido clorhídrico es monoprótico y volátil. El ácido sulfúrico es el peso pesado industrial.",
        faq: [
          {
            q: "¿Qué ácido libera más protones?",
            a: "El ácido sulfúrico es diprótico y libera dos protones; el ácido clorhídrico es monoprótico con uno.",
          },
          {
            q: "¿Por qué se llama deshidratante al ácido sulfúrico?",
            a: "Atrae fuertemente el agua y puede extraer hidrógeno y oxígeno de compuestos como el azúcar.",
          },
          {
            q: "¿Dónde se encuentra el ácido clorhídrico de forma natural?",
            a: "En tu estómago, donde ayuda a la digestión y mata los microbios ingeridos.",
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
      es: {
        title: "Ácido acético vs Ácido cítrico comparados",
        h1: "Ácido acético vs Ácido cítrico explicados",
        description:
          "El ácido acético es un ácido monoprótico del vinagre; el ácido cítrico es un ácido triprótico de los cítricos. Compara estos ácidos débiles.",
        intro:
          "El ácido acético y el cítrico son ácidos orgánicos débiles familiares que se encuentran en la comida cotidiana. Sus estructuras y números de protones difieren.",
        pros_a: [
          "Fórmula CH3COOH, monoprótico",
          "Tiene un grupo de ácido carboxílico",
          "Componente principal del vinagre",
          "Olor y sabor agrios y penetrantes",
          "Se usa en alimentación y como disolvente",
        ],
        pros_b: [
          "Fórmula C6H8O7, triprótico",
          "Tiene tres grupos de ácido carboxílico",
          "Se encuentra de forma natural en limones y limas",
          "Polvo cristalino blanco y sólido",
          "Se usa como saborizante y conservante",
        ],
        verdict:
          "Ambos son ácidos orgánicos débiles, pero el ácido cítrico es triprótico con tres grupos ácidos mientras que el ácido acético es monoprótico con uno. El ácido cítrico es sólido; el ácido acético es líquido.",
        faq: [
          {
            q: "¿Qué ácido dona más protones?",
            a: "El ácido cítrico es triprótico y puede donar tres protones; el ácido acético es monoprótico con uno.",
          },
          {
            q: "¿Son ácidos fuertes o débiles?",
            a: "Ambos son ácidos débiles que solo se ionizan parcialmente en agua.",
          },
          {
            q: "¿Dónde se encuentran?",
            a: "El ácido acético es el ácido del vinagre; el ácido cítrico se da de forma natural en los cítricos.",
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
      es: {
        title: "Glucosa vs Fructosa: azúcares comparados",
        h1: "Glucosa vs Fructosa explicadas",
        description:
          "La glucosa y la fructosa comparten la fórmula C6H12O6 pero difieren en estructura. Compara estos dos azúcares simples.",
        intro:
          "La glucosa y la fructosa son ambas monosacáridos con la misma fórmula molecular. Son isómeros estructurales con distintas formas de anillo.",
        pros_a: [
          "Fórmula C6H12O6, una aldohexosa",
          "Forma un anillo de seis miembros",
          "Contiene un grupo funcional aldehído",
          "Principal azúcar en sangre y fuente de energía",
          "Menos dulce que la fructosa",
        ],
        pros_b: [
          "Fórmula C6H12O6, una cetohexosa",
          "Forma un anillo de cinco miembros",
          "Contiene un grupo funcional cetona",
          "Se encuentra en la fruta y la miel",
          "El azúcar natural más dulce",
        ],
        verdict:
          "La glucosa y la fructosa son isómeros estructurales: la misma fórmula, distintos grupos funcionales. La glucosa es un azúcar de anillo aldosa, la fructosa una cetosa, y la fructosa sabe más dulce.",
        faq: [
          {
            q: "¿Tienen la misma fórmula?",
            a: "Sí, ambas son C6H12O6, lo que las hace isómeros estructurales con disposiciones distintas.",
          },
          {
            q: "¿Cuál es más dulce?",
            a: "La fructosa es el más dulce de los azúcares naturales comunes.",
          },
          {
            q: "¿Qué grupo funcional tiene cada una?",
            a: "La glucosa tiene un grupo aldehído (aldosa); la fructosa tiene un grupo cetona (cetosa).",
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
      es: {
        title: "Fructosa vs Sacarosa: comparación de azúcares",
        h1: "Fructosa vs Sacarosa explicadas",
        description:
          "La fructosa es un único monosacárido; la sacarosa es un disacárido de glucosa más fructosa. Compara estos azúcares.",
        intro:
          "La fructosa y la sacarosa difieren en tamaño: una es un azúcar simple, la otra está construida a partir de dos unidades unidas.",
        pros_a: [
          "Un monosacárido (unidad de azúcar única)",
          "Fórmula C6H12O6",
          "Se encuentra en la fruta y la miel",
          "Se absorbe directamente sin descomposición",
          "Sabor muy dulce",
        ],
        pros_b: [
          "Un disacárido (dos unidades de azúcar)",
          "Fórmula C12H22O11",
          "Hecho de glucosa más fructosa unidas",
          "Azúcar de mesa común de caña o remolacha",
          "Debe hidrolizarse antes de la absorción",
        ],
        verdict:
          "La fructosa es una única unidad de azúcar mientras que la sacarosa son dos unidades enlazadas. La sacarosa debe dividirse en glucosa y fructosa mediante enzimas antes de que el cuerpo pueda usarla.",
        faq: [
          {
            q: "¿Está hecha la sacarosa de fructosa?",
            a: "En parte. La sacarosa es un disacárido de una unidad de glucosa unida a una unidad de fructosa.",
          },
          {
            q: "¿Cuál se absorbe más rápido?",
            a: "La fructosa se absorbe directamente, mientras que la sacarosa primero debe hidrolizarse en sus dos partes.",
          },
          {
            q: "¿Qué enzima descompone la sacarosa?",
            a: "La sacarasa divide la sacarosa en glucosa y fructosa en el intestino delgado.",
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
      es: {
        title: "Almidón vs Celulosa: polisacáridos",
        h1: "Almidón vs Celulosa explicados",
        description:
          "El almidón y la celulosa son ambos polímeros de glucosa, pero difieren en el tipo de enlace. Compara estos dos polisacáridos clave.",
        intro:
          "El almidón y la celulosa están construidos ambos a partir de glucosa, pero uno es un almacenamiento de alimento digerible y la otra es una fibra estructural.",
        pros_a: [
          "Polímero de glucosa con enlaces alfa",
          "Almacenamiento de energía en las plantas",
          "Digerible por las enzimas humanas",
          "Formas ramificada (amilopectina) y enrollada (amilosa)",
          "Se encuentra en patatas, arroz y pan",
        ],
        pros_b: [
          "Polímero de glucosa con enlaces beta",
          "Soporte estructural en las paredes celulares vegetales",
          "Indigerible para los humanos (fibra dietética)",
          "Cadenas largas, rectas y fuertes",
          "Se encuentra en la madera, el algodón y el papel",
        ],
        verdict:
          "El almidón y la celulosa son ambos cadenas de glucosa, pero el enlace alfa frente al beta lo decide todo. Los enlaces alfa dan un almacenamiento de energía digerible; los enlaces beta dan una fibra resistente.",
        faq: [
          {
            q: "¿Por qué los humanos no pueden digerir la celulosa?",
            a: "Los humanos carecen de la enzima para romper sus enlaces de beta-glucosa, así que la celulosa pasa como fibra.",
          },
          {
            q: "¿Cuál es la diferencia estructural clave?",
            a: "El almidón usa enlaces glucosídicos alfa; la celulosa usa enlaces beta, que forman cadenas más rectas y fuertes.",
          },
          {
            q: "¿Están hechos del mismo monómero?",
            a: "Sí, ambos son polímeros de glucosa, pero enlazados de forma distinta.",
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
      es: {
        title: "Aminoácido vs Péptido: construir proteínas",
        h1: "Aminoácido vs Péptido explicados",
        description:
          "Los aminoácidos son monómeros individuales; los péptidos son cadenas cortas de aminoácidos unidos por enlaces peptídicos. Compara ambos.",
        intro:
          "Los aminoácidos son el alfabeto de las proteínas, y los péptidos son palabras cortas formadas con ellos. El tamaño y el enlace los diferencian.",
        pros_a: [
          "Una única unidad monómero",
          "Tiene un grupo amino y un grupo carboxilo",
          "20 tipos estándar construyen todas las proteínas",
          "Cadena lateral R distinta por cada aminoácido",
          "Ejemplos: glicina, alanina, lisina",
        ],
        pros_b: [
          "Una cadena corta de aminoácidos",
          "Unidades unidas por enlaces peptídicos",
          "Se forma por condensación, liberando agua",
          "Más corto que una proteína completa",
          "Ejemplos: dipéptidos, oligopéptidos",
        ],
        verdict:
          "Un aminoácido es un bloque de construcción; un péptido son varios unidos por enlaces peptídicos. Enlaza suficientes péptidos y obtendrás un polipéptido, y luego una proteína funcional.",
        faq: [
          {
            q: "¿Cómo se forman los péptidos?",
            a: "Los aminoácidos se unen mediante reacciones de condensación que forman enlaces peptídicos y liberan agua.",
          },
          {
            q: "¿Cuándo se convierte un péptido en una proteína?",
            a: "Una vez que una cadena polipeptídica es lo bastante larga y se pliega en una forma 3D funcional.",
          },
          {
            q: "¿Cuántos aminoácidos estándar hay?",
            a: "Hay 20 aminoácidos estándar que se combinan para construir todas las proteínas.",
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
      es: {
        title: "Proteína vs Enzima: ¿cuál es la diferencia?",
        h1: "Proteína vs Enzima explicadas",
        description:
          "Todas las enzimas son proteínas, pero no todas las proteínas son enzimas. Compara la amplia clase de las proteínas con las enzimas catalíticas.",
        intro:
          "Proteína es una categoría amplia; enzima es un subconjunto especializado. Entender la relación aclara la biología y la bioquímica.",
        pros_a: [
          "Polímero de aminoácidos",
          "Cumple muchas funciones: estructura, transporte, defensa",
          "Se pliega en una forma 3D específica",
          "Incluye tipos estructurales y de almacenamiento",
          "Ejemplos: colágeno, hemoglobina, anticuerpos",
        ],
        pros_b: [
          "Una proteína que actúa como catalizador biológico",
          "Acelera las reacciones sin consumirse",
          "Tiene un sitio activo que se une al sustrato",
          "Muy específica para su reacción",
          "Ejemplos: amilasa, lipasa, catalasa",
        ],
        verdict:
          "Toda enzima es una proteína, pero las proteínas hacen mucho más que catalizar. Las enzimas son las especialistas catalíticas; la clase de las proteínas también cubre la estructura, el transporte y la defensa.",
        faq: [
          {
            q: "¿Son todas las proteínas enzimas?",
            a: "No. Todas las enzimas son proteínas, pero muchas proteínas cumplen funciones estructurales, de transporte o de defensa.",
          },
          {
            q: "¿Qué hace especiales a las enzimas?",
            a: "Su sitio activo les permite catalizar una reacción específica mientras permanecen inalteradas.",
          },
          {
            q: "¿Se puede reutilizar una enzima?",
            a: "Sí. Una enzima no se consume, así que puede catalizar la misma reacción muchas veces.",
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
      es: {
        title: "Grasa saturada vs insaturada comparadas",
        h1: "Grasa saturada vs Grasa insaturada",
        description:
          "Las grasas saturadas no tienen dobles enlaces C=C; las grasas insaturadas tienen uno o más. Compara estructura y estado físico.",
        intro:
          "Las grasas difieren según los enlaces de sus cadenas de ácidos grasos. Ese único rasgo químico decide si una grasa es sólida o líquida.",
        pros_a: [
          "Sin dobles enlaces carbono-carbono",
          "Cadenas rectas que se empaquetan apretadas",
          "Sólida a temperatura ambiente",
          "Punto de fusión más alto",
          "Se encuentra en la mantequilla y la grasa animal",
        ],
        pros_b: [
          "Uno o más dobles enlaces C=C",
          "Cadenas dobladas que se empaquetan sueltas",
          "Líquida a temperatura ambiente",
          "Punto de fusión más bajo",
          "Se encuentra en los aceites de oliva y girasol",
        ],
        verdict:
          "Las grasas saturadas no tienen dobles enlaces, son rectas y sólidas; las grasas insaturadas tienen dobleces por los dobles enlaces y se mantienen líquidas. El doble enlace es toda la diferencia.",
        faq: [
          {
            q: "¿Por qué las grasas insaturadas son líquidas?",
            a: "Los dobles enlaces ponen dobleces en las cadenas, así que las moléculas no se pueden empaquetar apretadas y la grasa se mantiene líquida.",
          },
          {
            q: "¿Qué significa saturada aquí?",
            a: "Significa que la cadena de carbono está saturada de hidrógeno, conteniendo el máximo posible, así que no quedan dobles enlaces.",
          },
          {
            q: "¿Qué es una grasa poliinsaturada?",
            a: "Una grasa insaturada con más de un doble enlace carbono-carbono en su cadena.",
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
      es: {
        title: "Éster vs Éter: grupos funcionales",
        h1: "Éster vs Éter explicados",
        description:
          "Los ésteres tienen un carbonilo junto a un oxígeno; los éteres tienen un simple puente de oxígeno. Compara estos dos grupos funcionales.",
        intro:
          "Los ésteres y los éteres contienen ambos un átomo de oxígeno enlazado a carbono, pero la estructura circundante los hace comportarse de forma muy distinta.",
        pros_a: [
          "Grupo funcional RCOOR'",
          "Tiene un carbonilo C=O junto a un oxígeno",
          "A menudo tiene olores dulces y afrutados",
          "Se forma a partir de un ácido más un alcohol",
          "Ejemplos: acetato de etilo, grasas, fragancias",
        ],
        pros_b: [
          "Grupo funcional R-O-R'",
          "Solo un oxígeno que une dos carbonos",
          "Relativamente poco reactivo y estable",
          "A menudo se usa como disolvente",
          "Ejemplos: éter dietílico, anisol",
        ],
        verdict:
          "Los ésteres llevan un carbonilo junto al oxígeno y huelen afrutado; los éteres son un simple puente de oxígeno y actúan como disolventes inertes. El carbonilo es el rasgo decisivo.",
        faq: [
          {
            q: "¿Cómo distingo un éster de un éter?",
            a: "Un éster tiene un carbonilo C=O junto a su oxígeno; un éter no tiene ningún carbonilo.",
          },
          {
            q: "¿Por qué los ésteres huelen afrutado?",
            a: "Muchos ésteres volátiles tienen aromas afrutados agradables y se usan en saborizantes y perfumes.",
          },
          {
            q: "¿Por qué los éteres son buenos disolventes?",
            a: "Los éteres son bastante poco reactivos y disuelven muchos compuestos orgánicos sin interferir.",
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
      es: {
        title: "Aldehído vs Cetona: compuestos carbonílicos",
        h1: "Aldehído vs Cetona explicados",
        description:
          "Los aldehídos tienen un carbonilo en el extremo de la cadena; las cetonas lo tienen dentro de la cadena. Compara estos grupos carbonílicos.",
        intro:
          "Los aldehídos y las cetonas presentan ambos el grupo carbonilo, pero la posición del carbonilo cambia su reactividad.",
        pros_a: [
          "Grupo carbonilo en el extremo de la cadena de carbono",
          "Tiene al menos un hidrógeno en el carbono carbonílico",
          "Se oxida fácilmente a ácidos carboxílicos",
          "Pruebas de Tollens y de Fehling positivas",
          "Ejemplos: formaldehído, acetaldehído",
        ],
        pros_b: [
          "Grupo carbonilo dentro de la cadena de carbono",
          "Dos grupos de carbono en el carbono carbonílico",
          "Resistente a la oxidación suave",
          "Pruebas de Tollens y de Fehling negativas",
          "Ejemplos: acetona, butanona",
        ],
        verdict:
          "Los aldehídos llevan el carbonilo en el extremo de la cadena y se oxidan fácilmente; las cetonas lo ocultan en mitad de la cadena y resisten la oxidación. La prueba de Tollens los distingue con un espejo de plata.",
        faq: [
          {
            q: "¿Cómo los distingo en el laboratorio?",
            a: "El reactivo de Tollens da un espejo de plata con los aldehídos pero no con las cetonas.",
          },
          {
            q: "¿Por qué los aldehídos son más fáciles de oxidar?",
            a: "El hidrógeno de su carbono carbonílico se puede eliminar durante la oxidación a un ácido carboxílico.",
          },
          {
            q: "¿Qué tienen en común?",
            a: "Ambos contienen el grupo carbonilo, un carbono con doble enlace a oxígeno.",
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
      es: {
        title: "Alcohol vs Fenol: compuestos hidroxílicos",
        h1: "Alcohol vs Fenol explicados",
        description:
          "Los alcoholes tienen un OH sobre un carbono saturado; los fenoles tienen un OH directamente sobre un anillo de benceno. Compara acidez y reacciones.",
        intro:
          "Los alcoholes y los fenoles llevan ambos un grupo hidroxilo, pero el lugar donde se une ese OH cambia drásticamente su acidez.",
        pros_a: [
          "Hidroxilo OH sobre un carbono sp3",
          "Muy débilmente ácido, casi neutro",
          "No reacciona con NaOH",
          "Se puede oxidar a aldehídos o ácidos",
          "Ejemplos: etanol, metanol, propanol",
        ],
        pros_b: [
          "Hidroxilo OH enlazado a un anillo de benceno",
          "Considerablemente más ácido que los alcoholes",
          "Reacciona con NaOH para formar sales",
          "El anillo estabiliza la carga negativa",
          "Ejemplos: fenol, cresol, catecol",
        ],
        verdict:
          "Ambos tienen un grupo OH, pero los fenoles son mucho más ácidos porque el anillo de benceno estabiliza el anión resultante. Solo los fenoles reaccionan con el hidróxido de sodio.",
        faq: [
          {
            q: "¿Por qué los fenoles son más ácidos que los alcoholes?",
            a: "El anillo aromático deslocaliza la carga negativa del anión fenóxido, estabilizándolo.",
          },
          {
            q: "¿Reaccionan los alcoholes con el NaOH?",
            a: "No. Los alcoholes son demasiado débilmente ácidos, mientras que los fenoles sí reaccionan con el hidróxido de sodio.",
          },
          {
            q: "¿Qué tienen en común?",
            a: "Ambos contienen un grupo funcional hidroxilo OH unido a carbono.",
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
      es: {
        title: "Amina vs Amida: grupos funcionales nitrogenados",
        h1: "Amina vs Amida explicadas",
        description:
          "Las aminas tienen nitrógeno en una cadena de carbono; las amidas tienen nitrógeno junto a un carbonilo. Compara basicidad y reactividad.",
        intro:
          "Las aminas y las amidas contienen ambas nitrógeno, pero un único grupo carbonilo vecino cambia su comportamiento por completo.",
        pros_a: [
          "Nitrógeno enlazado solo a carbono e hidrógeno",
          "Básica, acepta protones con facilidad",
          "A menudo tiene un olor a pescado",
          "Derivada del amoníaco",
          "Ejemplos: metilamina, anilina",
        ],
        pros_b: [
          "Nitrógeno enlazado junto a un carbonilo C=O",
          "Casi neutra, muy débilmente básica",
          "Estable y poco reactiva",
          "Forma el enlace peptídico en las proteínas",
          "Ejemplos: acetamida, nailon, urea",
        ],
        verdict:
          "Las aminas son compuestos de nitrógeno básicos, mientras que las amidas tienen un carbonilo adyacente que drena la basicidad del nitrógeno. El grupo amida también construye proteínas y nailon.",
        faq: [
          {
            q: "¿Por qué las amidas son menos básicas que las aminas?",
            a: "El carbonilo vecino atrae el par solitario del nitrógeno hacia la resonancia, así que no puede aceptar protones con facilidad.",
          },
          {
            q: "¿Dónde aparece el grupo amida en la biología?",
            a: "Forma los enlaces peptídicos que unen los aminoácidos en proteínas.",
          },
          {
            q: "¿Cómo puedo reconocer una amida?",
            a: "Busca un carbonilo C=O directamente enlazado a un átomo de nitrógeno.",
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
      es: {
        title: "Destilación vs Sublimación: separación",
        h1: "Destilación vs Sublimación explicadas",
        description:
          "La destilación separa líquidos por punto de ebullición; la sublimación separa un sólido que pasa directamente a vapor. Compara ambas.",
        intro:
          "Ambas son técnicas de separación y purificación, pero aprovechan distintos cambios de fase para aislar una sustancia.",
        pros_a: [
          "Separa líquidos usando el punto de ebullición",
          "El líquido se vaporiza y luego se condensa",
          "Va de líquido a gas a líquido",
          "Se usa para purificar o separar mezclas",
          "Ejemplos: separar el etanol del agua",
        ],
        pros_b: [
          "Separa un sólido que se vaporiza directamente",
          "El sólido pasa directo a gas, saltándose el líquido",
          "El vapor luego se deposita de nuevo como sólido",
          "Se usa cuando un sólido se sublima de forma limpia",
          "Ejemplos: purificar yodo o hielo seco",
        ],
        verdict:
          "La destilación hace pasar una sustancia por la fase líquida, mientras que la sublimación se salta el líquido por completo. Elige la sublimación solo cuando un componente pase directamente de sólido a gas.",
        faq: [
          {
            q: "¿Qué cambio de fase usa la sublimación?",
            a: "El sólido se convierte directamente en gas sin llegar a ser líquido nunca.",
          },
          {
            q: "¿Cuándo es la destilación la mejor opción?",
            a: "Cuando se separan líquidos o un soluto disuelto de un líquido aprovechando los puntos de ebullición.",
          },
          {
            q: "Da un ejemplo de sublimación.",
            a: "El hielo seco (dióxido de carbono sólido) se sublima directamente en gas a temperatura ambiente.",
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
      es: {
        title: "Evaporación vs Condensación: cambios de fase",
        h1: "Evaporación vs Condensación explicadas",
        description:
          "La evaporación convierte líquido en vapor; la condensación convierte vapor de nuevo en líquido. Compara estos cambios de fase opuestos.",
        intro:
          "La evaporación y la condensación son procesos inversos que mueven la materia entre líquido y gas. Juntas impulsan el ciclo del agua.",
        pros_a: [
          "El líquido se transforma en gas",
          "Absorbe calor (endotérmica)",
          "Ocurre en la superficie del líquido",
          "Se acelera con el calor y la superficie",
          "Ejemplo: un charco secándose al sol",
        ],
        pros_b: [
          "El gas se transforma de nuevo en líquido",
          "Libera calor (exotérmica)",
          "Ocurre cuando el vapor se enfría",
          "Se acelera con el enfriamiento y las superficies",
          "Ejemplo: el rocío formándose en la hierba",
        ],
        verdict:
          "La evaporación absorbe calor para convertir el líquido en vapor; la condensación libera calor para convertir el vapor de nuevo en líquido. Son exactamente opuestas e impulsan el ciclo del agua.",
        faq: [
          {
            q: "¿Qué proceso absorbe calor?",
            a: "La evaporación es endotérmica, absorbiendo calor, mientras que la condensación es exotérmica, liberándolo.",
          },
          {
            q: "¿Por qué sudar te refresca?",
            a: "El sudor al evaporarse absorbe calor de tu piel, bajando la temperatura de tu cuerpo.",
          },
          {
            q: "¿Cómo se relacionan con el ciclo del agua?",
            a: "La evaporación eleva el agua al aire y la condensación forma nubes y lluvia.",
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
      es: {
        title: "Filtración vs Centrifugación comparadas",
        h1: "Filtración vs Centrifugación explicadas",
        description:
          "La filtración separa por tamaño de partícula a través de una barrera; la centrifugación separa por densidad usando el giro. Compara ambos métodos.",
        intro:
          "Ambas separan mezclas, especialmente sólidos de líquidos, pero se basan en distintos principios físicos.",
        pros_a: [
          "Separa las partículas por tamaño",
          "Usa una barrera porosa o filtro",
          "El sólido queda atrapado, el líquido pasa a través",
          "Simple, barata y ampliamente usada",
          "Ejemplo: filtrar la arena del agua",
        ],
        pros_b: [
          "Separa los componentes por densidad",
          "Usa un giro rápido para crear una fuerza",
          "El material más denso se mueve hacia fuera",
          "Eficaz para partículas finas o microscópicas",
          "Ejemplo: sedimentar las células sanguíneas",
        ],
        verdict:
          "La filtración tamiza una mezcla por tamaño de partícula, mientras que la centrifugación la hace girar para clasificarla por densidad. La centrifugación maneja partículas finas que la filtración simple no puede.",
        faq: [
          {
            q: "¿Cuándo es la centrifugación mejor que la filtración?",
            a: "Para partículas muy finas o microscópicas que pasan a través de los filtros ordinarios.",
          },
          {
            q: "¿En qué se basa un filtro?",
            a: "El tamaño de los poros: las partículas más grandes que los poros quedan retenidas mientras que las más pequeñas y los líquidos pasan.",
          },
          {
            q: "¿Qué propiedad usa la centrifugación?",
            a: "Las diferencias de densidad, ya que el giro empuja el material más denso hacia fuera más rápido.",
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
      es: {
        title: "Mol vs Átomo: contar en química",
        h1: "Mol vs Átomo explicados",
        description:
          "Un átomo es una sola partícula; un mol es un enorme recuento fijo de partículas. Compara estas dos escalas para el estudio de la química.",
        intro:
          "Un átomo es la unidad más pequeña de un elemento, y un mol es la manera del químico de contar átomos en cantidades utilizables.",
        pros_a: [
          "Una unidad de conteo, como una docena",
          "Es igual a 6,022×10²³ partículas",
          "Vincula la masa atómica con los gramos",
          "Se usa en todos los cálculos de estequiometría",
          "Definido por el número de Avogadro",
        ],
        pros_b: [
          "La unidad más pequeña de un elemento",
          "Una sola partícula individual",
          "Tiene un núcleo y electrones",
          "Demasiado pequeño para pesarse por sí solo",
          "Bloque de construcción de toda la materia",
        ],
        verdict:
          "Un átomo es una partícula; un mol son 6,022×10²³ de ellas. El mol tiende un puente entre el mundo atómico invisible y los gramos medibles en el laboratorio.",
        faq: [
          {
            q: "¿Cuántos átomos hay en un mol?",
            a: "Un mol contiene el número de Avogadro de partículas, unos 6,022×10²³.",
          },
          {
            q: "¿Por qué los químicos usan moles?",
            a: "Los átomos son demasiado diminutos para contarse de uno en uno, así que el mol los agrupa en cantidades que se pueden pesar.",
          },
          {
            q: "¿Es un mol siempre de átomos?",
            a: "No. Un mol puede contar cualquier partícula, incluidas moléculas, iones o electrones.",
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
      es: {
        title: "Molaridad vs Molalidad: unidades de concentración",
        h1: "Molaridad vs Molalidad explicadas",
        description:
          "La molaridad usa el volumen de la disolución; la molalidad usa la masa del disolvente. Compara estas unidades de concentración.",
        intro:
          "La molaridad y la molalidad miden ambas la concentración, pero una depende del volumen y la otra de la masa.",
        pros_a: [
          "Moles de soluto por litro de disolución",
          "Símbolo M, unidad mol/L",
          "Fácil de medir con material de vidrio volumétrico",
          "Cambia con la temperatura",
          "La unidad de concentración más común",
        ],
        pros_b: [
          "Moles de soluto por kilogramo de disolvente",
          "Símbolo m, unidad mol/kg",
          "Basada en la masa, no en el volumen",
          "Independiente de la temperatura",
          "Se usa para los cálculos de propiedades coligativas",
        ],
        verdict:
          "La molaridad es cómoda y se basa en el volumen pero cambia con la temperatura; la molalidad se basa en la masa y es estable con la temperatura. Usa la molalidad para un trabajo preciso de propiedades coligativas.",
        faq: [
          {
            q: "¿Por qué la molaridad cambia con la temperatura?",
            a: "El volumen se expande o se contrae con la temperatura, así que la relación de moles por litro cambia.",
          },
          {
            q: "¿Cuándo debería usar la molalidad?",
            a: "Para las propiedades coligativas como la elevación del punto de ebullición, donde importa la estabilidad con la temperatura.",
          },
          {
            q: "¿Cuál es la diferencia en el denominador?",
            a: "La molaridad divide entre litros de disolución; la molalidad divide entre kilogramos de disolvente.",
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
      es: {
        title: "Isótopo vs Isómero: confusión común",
        h1: "Isótopo vs Isómero explicados",
        description:
          "Los isótopos son átomos de un elemento con distinto número de neutrones; los isómeros son compuestos con la misma fórmula. Compara ambos.",
        intro:
          "Isótopo e isómero suenan parecido pero describen cosas distintas: uno tiene que ver con átomos, el otro con moléculas.",
        pros_a: [
          "Átomos del mismo elemento",
          "Los mismos protones, distintos neutrones",
          "Distintos números másicos",
          "Comportamiento químico idéntico",
          "Ejemplos: carbono-12 y carbono-14",
        ],
        pros_b: [
          "Compuestos con la misma fórmula molecular",
          "Distinta disposición de los átomos",
          "Distintas propiedades químicas o físicas",
          "Incluye isómeros estructurales y estereoisómeros",
          "Ejemplos: butano e isobutano",
        ],
        verdict:
          "Los isótopos son variantes de un solo átomo que difieren en neutrones; los isómeros son moléculas distintas que comparten una fórmula. No confundas el concepto atómico con el molecular.",
        faq: [
          {
            q: "¿Qué tienen en común los isótopos?",
            a: "Son átomos del mismo elemento con un número idéntico de protones pero distinto número de neutrones.",
          },
          {
            q: "¿Se comportan igual los isómeros?",
            a: "No. Los isómeros comparten una fórmula pero difieren en estructura, así que sus propiedades suelen diferir.",
          },
          {
            q: "¿La diferencia es atómica o molecular?",
            a: "Los isótopos son un concepto de nivel atómico; los isómeros son un concepto de nivel molecular.",
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
      es: {
        title: "Alótropo vs Isótopo: variantes de elementos",
        h1: "Alótropo vs Isótopo explicados",
        description:
          "Los alótropos son formas estructurales de un elemento; los isótopos son átomos que difieren en el número de neutrones. Compara estas variantes de elementos.",
        intro:
          "Ambos términos describen formas de un solo elemento, pero los alótropos varían en estructura mientras que los isótopos varían dentro del núcleo.",
        pros_a: [
          "Distintas formas estructurales de un elemento",
          "Los mismos átomos dispuestos de forma distinta",
          "Distintas propiedades físicas",
          "Un concepto de enlace y estructura",
          "Ejemplos: diamante y grafito",
        ],
        pros_b: [
          "Átomos de un elemento con distintos neutrones",
          "Los mismos protones, distintos números másicos",
          "Comportamiento químico casi idéntico",
          "Un concepto nuclear",
          "Ejemplos: carbono-12 y carbono-14",
        ],
        verdict:
          "Los alótropos difieren en cómo están enlazados y dispuestos los átomos; los isótopos difieren en su núcleo. Uno tiene que ver con la estructura, el otro con el número de neutrones.",
        faq: [
          {
            q: "¿Son el diamante y el grafito isótopos?",
            a: "No, son alótropos del carbono, que difieren en la disposición atómica, no en el núcleo.",
          },
          {
            q: "¿Qué cambia entre isótopos?",
            a: "Solo el número de neutrones, y por tanto la masa, mientras que los protones se mantienen iguales.",
          },
          {
            q: "¿Tienen los alótropos propiedades distintas?",
            a: "Sí. El diamante es duro y transparente mientras que el grafito es blando y oscuro, pese a ser ambos carbono.",
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
      es: {
        title: "Diamante vs Grafito: alótropos del carbono",
        h1: "Diamante vs Grafito explicados",
        description:
          "El diamante y el grafito son ambos carbono puro, pero su estructura hace que uno sea duro y el otro blando. Compara estos alótropos.",
        intro:
          "El diamante y el grafito son alótropos del carbono, hechos de los mismos átomos pero dispuestos de forma completamente distinta.",
        pros_a: [
          "Cada carbono enlazado a otros cuatro",
          "Red tetraédrica 3D rígida",
          "El material natural más duro conocido",
          "Aislante eléctrico",
          "Transparente y de alto índice de refracción",
        ],
        pros_b: [
          "Cada carbono enlazado a otros tres",
          "Capas apiladas de láminas hexagonales",
          "Blando y resbaladizo, las capas se deslizan",
          "Conduce la electricidad",
          "Opaco, gris oscuro y usado en lápices",
        ],
        verdict:
          "El diamante y el grafito son el mismo elemento con propiedades opuestas. El enlace 3D del diamante lo hace duro y aislante; el enlace en capas del grafito lo hace blando y conductor.",
        faq: [
          {
            q: "¿Cómo pueden ser ambos carbono puro?",
            a: "Son alótropos: átomos de carbono idénticos enlazados en distintas disposiciones geométricas.",
          },
          {
            q: "¿Por qué el grafito conduce la electricidad?",
            a: "Cada carbono tiene un electrón deslocalizado de sobra, libre para moverse dentro de las capas.",
          },
          {
            q: "¿Por qué el grafito es resbaladizo?",
            a: "Las fuerzas débiles entre sus capas les permiten deslizarse fácilmente unas sobre otras.",
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
      es: {
        title: "Metano vs Etano: los alcanos más pequeños",
        h1: "Metano vs Etano explicados",
        description:
          "El metano tiene un carbono; el etano tiene dos. Compara los dos alcanos más pequeños en fórmula, punto de ebullición y usos.",
        intro:
          "El metano y el etano son los dos primeros miembros de la serie de los alcanos, que difieren en un solo átomo de carbono.",
        pros_a: [
          "Fórmula CH4, un átomo de carbono",
          "El alcano e hidrocarburo más simple",
          "Componente principal del gas natural",
          "El punto de ebullición más bajo de los alcanos",
          "Potente gas de efecto invernadero",
        ],
        pros_b: [
          "Fórmula C2H6, dos átomos de carbono",
          "Segundo miembro de la serie de los alcanos",
          "Se encuentra en el gas natural como componente menor",
          "Punto de ebullición algo más alto que el metano",
          "Se usa para producir etileno mediante craqueo",
        ],
        verdict:
          "El metano y el etano difieren en un carbono, el paso más pequeño posible en una serie homóloga. Añadir ese carbono eleva el punto de ebullición y la masa de la molécula.",
        faq: [
          {
            q: "¿Por qué el etano hierve a una temperatura más alta?",
            a: "Su molécula más grande tiene fuerzas de dispersión más fuertes, necesitando más energía para vaporizarse.",
          },
          {
            q: "¿Están en la misma serie?",
            a: "Sí. Ambos son alcanos, miembros consecutivos de la misma serie homóloga.",
          },
          {
            q: "¿De dónde provienen?",
            a: "Ambos se dan en el gas natural, con el metano como componente dominante.",
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
      es: {
        title: "Benceno vs Tolueno: compuestos aromáticos",
        h1: "Benceno vs Tolueno explicados",
        description:
          "El benceno es el anillo aromático original; el tolueno es benceno con un grupo metilo. Compara estos dos disolventes aromáticos.",
        intro:
          "El benceno y el tolueno son ambos hidrocarburos aromáticos. El tolueno es simplemente benceno con un grupo metilo unido.",
        pros_a: [
          "Fórmula C6H6, el anillo aromático más simple",
          "Anillo deslocalizado puro de seis carbonos",
          "Carcinógeno humano conocido",
          "Molécula plana y muy simétrica",
          "Se usa como precursor industrial",
        ],
        pros_b: [
          "Fórmula C7H8, benceno más un grupo metilo",
          "El grupo metilo hace el anillo más reactivo",
          "Menos tóxico que el benceno",
          "Disolvente común y ampliamente usado",
          "Se usa para fabricar TNT y otros productos químicos",
        ],
        verdict:
          "El tolueno es benceno con un sustituyente metilo, lo que lo hace menos tóxico y un disolvente más práctico. El benceno sigue siendo el anillo aromático fundamental pero es un carcinógeno.",
        faq: [
          {
            q: "¿En qué se diferencia el tolueno del benceno?",
            a: "El tolueno es benceno con un hidrógeno reemplazado por un grupo metilo, dando la fórmula C7H8.",
          },
          {
            q: "¿Cuál es más seguro de usar?",
            a: "El tolueno es considerablemente menos tóxico que el benceno, que es un carcinógeno conocido.",
          },
          {
            q: "¿Por qué es importante el grupo metilo?",
            a: "Activa el anillo, haciendo el tolueno más reactivo frente a la sustitución electrófila.",
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
      es: {
        title: "Soluto vs Disolvente: partes de una disolución",
        h1: "Soluto vs Disolvente explicados",
        description:
          "El soluto es lo que se disuelve; el disolvente es lo que hace la disolución. Compara las dos partes de toda disolución.",
        intro:
          "Toda disolución tiene dos partes: un soluto y un disolvente. Saber cuál es cuál es el comienzo de la química de las disoluciones.",
        pros_a: [
          "La sustancia que se disuelve",
          "Normalmente presente en menor cantidad",
          "Puede ser un sólido, líquido o gas",
          "Se dispersa uniformemente en el disolvente",
          "Ejemplo: la sal en el agua salada",
        ],
        pros_b: [
          "La sustancia que hace la disolución",
          "Normalmente presente en mayor cantidad",
          "Lo más a menudo un líquido como el agua",
          "Determina el estado de la disolución",
          "Ejemplo: el agua en el agua salada",
        ],
        verdict:
          "El soluto se disuelve y el disolvente hace la disolución. Juntos forman una disolución homogénea, siendo el disolvente normalmente el componente mayoritario.",
        faq: [
          {
            q: "¿Cuál es normalmente el mayor?",
            a: "El disolvente es normalmente el componente presente en mayor cantidad.",
          },
          {
            q: "¿Puede el soluto ser un gas?",
            a: "Sí. En las bebidas carbonatadas, el dióxido de carbono gaseoso es un soluto disuelto en agua líquida.",
          },
          {
            q: "¿Cuál es el disolvente universal?",
            a: "El agua se llama el disolvente universal porque disuelve muchísimas sustancias.",
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
      es: {
        title: "Elemento vs Compuesto: sustancias puras",
        h1: "Elemento vs Compuesto explicados",
        description:
          "Un elemento es un solo tipo de átomo; un compuesto son dos o más elementos enlazados químicamente. Compara estas sustancias puras.",
        intro:
          "Los elementos y los compuestos son ambos sustancias puras, pero solo uno puede descomponerse en algo más simple.",
        pros_a: [
          "Hecho de un solo tipo de átomo",
          "No se puede descomponer químicamente",
          "Figura en la tabla periódica",
          "Ejemplos: oxígeno, oro, carbono",
          "Unos 118 elementos conocidos",
        ],
        pros_b: [
          "Dos o más elementos enlazados químicamente",
          "Se puede descomponer en elementos",
          "Tiene propiedades distintas de sus elementos",
          "Proporción fija de átomos según la fórmula",
          "Ejemplos: agua, dióxido de carbono, sal",
        ],
        verdict:
          "Un elemento es la sustancia pura más simple y no se puede dividir químicamente; un compuesto son elementos enlazados en una proporción fija que se puede volver a descomponer.",
        faq: [
          {
            q: "¿Se puede dividir un compuesto en elementos?",
            a: "Sí. Un compuesto se puede descomponer químicamente en los elementos que lo forman.",
          },
          {
            q: "¿Conservan los compuestos las propiedades de sus elementos?",
            a: "No. Un compuesto normalmente tiene propiedades bastante distintas de los elementos que contiene.",
          },
          {
            q: "¿Cuántos elementos existen?",
            a: "Unos 118 elementos están actualmente reconocidos en la tabla periódica.",
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
      es: {
        title: "Mezcla vs Compuesto: diferencias clave",
        h1: "Mezcla vs Compuesto explicados",
        description:
          "Las mezclas combinan sustancias físicamente; los compuestos las enlazan químicamente. Compara la composición y cómo se separa cada uno.",
        intro:
          "Ambos contienen más de una sustancia, pero una mezcla es una combinación física mientras que un compuesto es una unión química.",
        pros_a: [
          "Sustancias combinadas físicamente, no enlazadas",
          "Proporciones variables",
          "Los componentes conservan sus propias propiedades",
          "Se separa por métodos físicos",
          "Ejemplos: aire, ensalada, agua salada",
        ],
        pros_b: [
          "Elementos enlazados químicamente entre sí",
          "Proporciones fijas según la fórmula",
          "Propiedades nuevas distintas de las de los componentes",
          "Se separa solo mediante una reacción química",
          "Ejemplos: agua, sal, dióxido de carbono",
        ],
        verdict:
          "Una mezcla es una combinación física con proporciones variables que se puede separar con facilidad; un compuesto es un enlace químico con una proporción fija que necesita una reacción para romperse.",
        faq: [
          {
            q: "¿Cómo separo una mezcla?",
            a: "Por métodos físicos como filtrar, destilar o evaporar, sin necesidad de una reacción química.",
          },
          {
            q: "¿Tiene un compuesto proporciones fijas?",
            a: "Sí. Un compuesto siempre tiene elementos en una proporción fija establecida por su fórmula química.",
          },
          {
            q: "¿Es el aire una mezcla o un compuesto?",
            a: "El aire es una mezcla de gases que conservan sus propias propiedades y pueden variar en proporción.",
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
      es: {
        title: "Átomo vs Ion: carga y estructura",
        h1: "Átomo vs Ion explicados",
        description:
          "Un átomo es eléctricamente neutro; un ion lleva una carga por haber ganado o perdido electrones. Compara estas dos partículas.",
        intro:
          "Un átomo se convierte en un ion cuando gana o pierde electrones. El cambio en el número de electrones es toda la diferencia.",
        pros_a: [
          "Eléctricamente neutro en conjunto",
          "Número igual de protones y electrones",
          "La unidad básica de un elemento",
          "Estable en su estado fundamental",
          "Ejemplo: un átomo de sodio neutro",
        ],
        pros_b: [
          "Lleva una carga eléctrica neta",
          "Protones y electrones en número desigual",
          "Se forma ganando o perdiendo electrones",
          "El catión es positivo, el anión es negativo",
          "Ejemplo: el ion sodio Na+",
        ],
        verdict:
          "Un átomo es neutro con cargas equilibradas; un ion está cargado porque ha perdido o ganado electrones. El número de protones nunca cambia, solo los electrones.",
        faq: [
          {
            q: "¿Cómo se convierte un átomo en un ion?",
            a: "Ganando electrones para volverse negativo o perdiéndolos para volverse positivo.",
          },
          {
            q: "¿Cambia el número de protones?",
            a: "No. Solo se ganan o pierden electrones; el número de protones se mantiene igual.",
          },
          {
            q: "¿Qué es un catión frente a un anión?",
            a: "Un catión es un ion cargado positivamente; un anión es un ion cargado negativamente.",
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
      es: {
        title: "Catión vs Anión: iones positivos vs negativos",
        h1: "Catión vs Anión explicados",
        description:
          "Un catión es un ion positivo que perdió electrones; un anión es un ion negativo que los ganó. Compara estas partículas cargadas.",
        intro:
          "Los iones vienen en dos cargas. Que un átomo pierda o gane electrones decide si se convierte en un catión o en un anión.",
        pros_a: [
          "Ion cargado positivamente",
          "Se forma perdiendo electrones",
          "Más protones que electrones",
          "Normalmente formado por metales",
          "Ejemplos: Na+, Ca2+, Al3+",
        ],
        pros_b: [
          "Ion cargado negativamente",
          "Se forma ganando electrones",
          "Más electrones que protones",
          "Normalmente formado por no metales",
          "Ejemplos: Cl-, O2-, S2-",
        ],
        verdict:
          "Los cationes son iones positivos por la pérdida de electrones, normalmente metales; los aniones son iones negativos por la ganancia de electrones, normalmente no metales. Las cargas opuestas se atraen para formar compuestos iónicos.",
        faq: [
          {
            q: "¿Cómo recuerdo la diferencia?",
            a: "Un catión es positivo y los aniones son negativos; los metales forman cationes, los no metales forman aniones.",
          },
          {
            q: "¿En qué dirección se mueven los iones en un campo?",
            a: "Los cationes se mueven hacia el cátodo; los aniones se mueven hacia el ánodo.",
          },
          {
            q: "¿Qué mantiene unido un compuesto iónico?",
            a: "La atracción electrostática entre cationes y aniones de cargas opuestas.",
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
      es: {
        title: "Reacción reversible vs irreversible",
        h1: "Reacciones reversibles vs irreversibles explicadas",
        description:
          "Las reacciones reversibles pueden transcurrir en ambos sentidos hasta el equilibrio; las irreversibles llegan hasta el final. Compara estos tipos de reacción.",
        intro:
          "Las reacciones difieren en su sentido. Algunas pueden transcurrir hacia atrás y alcanzar el equilibrio, mientras que otras solo van en un sentido.",
        pros_a: [
          "Puede transcurrir en ambos sentidos",
          "Alcanza un equilibrio dinámico",
          "Los productos pueden volver a formar los reactivos",
          "Se representa con una doble flecha",
          "Ejemplos: proceso de Haber, esterificación",
        ],
        pros_b: [
          "Transcurre en un solo sentido",
          "Llega esencialmente hasta el final",
          "Los productos no vuelven a formar los reactivos",
          "Se representa con una sola flecha",
          "Ejemplos: combustión, neutralización",
        ],
        verdict:
          "Las reacciones reversibles se establecen en un equilibrio donde ambos sentidos ocurren; las reacciones irreversibles llegan hasta el final. La notación de la flecha, doble o simple, indica cuál es cuál.",
        faq: [
          {
            q: "¿Qué es el equilibrio?",
            a: "Un estado en una reacción reversible donde las velocidades directa e inversa son iguales y las concentraciones se mantienen constantes.",
          },
          {
            q: "¿Cómo se representa cada una en una ecuación?",
            a: "Una reacción reversible usa una doble flecha; una irreversible usa una sola flecha.",
          },
          {
            q: "¿Es reversible la combustión?",
            a: "No. La combustión llega hasta el final y se trata como una reacción irreversible.",
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
      es: {
        title: "Sólido cristalino vs amorfo comparados",
        h1: "Sólido cristalino vs amorfo explicados",
        description:
          "Los sólidos cristalinos tienen estructuras ordenadas y repetitivas; los sólidos amorfos carecen de orden a largo alcance. Compara estos tipos de sólido.",
        intro:
          "Los sólidos se dividen en cristalinos y amorfos según si sus partículas están dispuestas en un patrón regular.",
        pros_a: [
          "Partículas en una red ordenada y repetitiva",
          "Punto de fusión nítido y definido",
          "A menudo tiene caras planas y exfoliación limpia",
          "Propiedades anisótropas",
          "Ejemplos: sal, diamante, cuarzo",
        ],
        pros_b: [
          "Partículas dispuestas de forma aleatoria",
          "Se ablanda a lo largo de un rango de temperatura",
          "Se rompe con superficies irregulares",
          "Propiedades isótropas",
          "Ejemplos: vidrio, caucho, plástico",
        ],
        verdict:
          "Los sólidos cristalinos tienen redes ordenadas y puntos de fusión nítidos; los sólidos amorfos están desordenados y se ablandan de forma gradual. La disposición interna decide su comportamiento.",
        faq: [
          {
            q: "¿Por qué el vidrio no tiene un punto de fusión nítido?",
            a: "El vidrio es amorfo, así que su estructura desordenada se ablanda de forma gradual a lo largo de un rango de temperatura.",
          },
          {
            q: "¿Qué significa anisótropo?",
            a: "Las propiedades varían con la dirección, un rasgo de los sólidos cristalinos ordenados.",
          },
          {
            q: "¿Es el caucho cristalino o amorfo?",
            a: "El caucho es un sólido amorfo con una disposición de partículas desordenada y aleatoria.",
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
      es: {
        title: "Proceso exotérmico vs endotérmico",
        h1: "Procesos exotérmicos vs endotérmicos explicados",
        description:
          "Los procesos exotérmicos liberan energía; los endotérmicos la absorben. Compara el flujo de energía en cambios físicos y químicos.",
        intro:
          "La energía fluye durante cada cambio físico y químico. La dirección de ese flujo define los procesos exotérmicos y endotérmicos.",
        pros_a: [
          "Libera energía al entorno",
          "El entorno se calienta",
          "La energía de los productos es más baja",
          "A menudo se siente caliente al tacto",
          "Ejemplos: congelación, condensación, combustión",
        ],
        pros_b: [
          "Absorbe energía del entorno",
          "El entorno se enfría",
          "La energía de los productos es más alta",
          "A menudo se siente frío al tacto",
          "Ejemplos: fusión, ebullición, evaporación",
        ],
        verdict:
          "Los procesos exotérmicos liberan energía y calientan su entorno; los procesos endotérmicos absorben energía y lo enfrían. La dirección del flujo de energía es el factor decisivo.",
        faq: [
          {
            q: "¿Es la fusión exotérmica o endotérmica?",
            a: "La fusión es endotérmica porque absorbe energía para romper la estructura sólida.",
          },
          {
            q: "¿Por qué la congelación libera calor?",
            a: "A medida que las partículas se fijan en un sólido, liberan la energía que tenían en el estado líquido.",
          },
          {
            q: "¿Se siente caliente un proceso exotérmico?",
            a: "Normalmente sí, porque libera energía como calor hacia el entorno.",
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
      es: {
        title: "Sólido vs Líquido: estados de la materia",
        h1: "Sólido vs Líquido explicados",
        description:
          "Los sólidos mantienen una forma y un volumen fijos; los líquidos conservan el volumen pero fluyen para adaptarse a un recipiente. Compara estos estados de la materia.",
        intro:
          "Los sólidos y los líquidos son dos de los principales estados de la materia, que difieren en cómo están dispuestas sus partículas y cómo se mueven.",
        pros_a: [
          "Forma fija y volumen fijo",
          "Partículas muy empaquetadas, vibran en su sitio",
          "Fuerzas intermoleculares fuertes",
          "No se puede comprimir con facilidad",
          "Ejemplos: hielo, hierro, madera",
        ],
        pros_b: [
          "Volumen fijo pero adopta la forma del recipiente",
          "Partículas cercanas pero libres de deslizarse",
          "Fuerzas intermoleculares moderadas",
          "Fluye y se puede verter",
          "Ejemplos: agua, aceite, mercurio",
        ],
        verdict:
          "Los sólidos conservan tanto la forma como el volumen porque sus partículas están fijadas en su sitio; los líquidos conservan el volumen pero fluyen porque las partículas pueden deslizarse unas junto a otras.",
        faq: [
          {
            q: "¿Por qué los líquidos pueden fluir pero los sólidos no?",
            a: "Las partículas de los líquidos pueden deslizarse unas junto a otras, mientras que las partículas de los sólidos solo vibran en posiciones fijas.",
          },
          {
            q: "¿Tienen los líquidos un volumen fijo?",
            a: "Sí. Los líquidos conservan un volumen fijo pero adoptan la forma de su recipiente.",
          },
          {
            q: "¿Se pueden comprimir los sólidos?",
            a: "Apenas. Sus partículas muy empaquetadas dejan casi ningún espacio para comprimir.",
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
      es: {
        title: "Cambio físico vs químico comparados",
        h1: "Cambio físico vs Cambio químico explicados",
        description:
          "Los cambios físicos alteran la forma sin nuevas sustancias; los cambios químicos crean nuevas sustancias. Compara con ejemplos claros.",
        intro:
          "Los cambios en la materia son o físicos o químicos. La prueba es si se forma una nueva sustancia con nuevas propiedades.",
        pros_a: [
          "No se forma ninguna sustancia nueva",
          "Solo cambian la forma, el estado o la apariencia",
          "Normalmente fácilmente reversible",
          "La misma composición química antes y después",
          "Ejemplos: derretir hielo, cortar papel",
        ],
        pros_b: [
          "Se forman una o más sustancias nuevas",
          "Se rompen y se forman enlaces químicos",
          "Normalmente difícil de revertir",
          "A menudo se señala con gas, calor o cambio de color",
          "Ejemplos: quemar madera, oxidar hierro",
        ],
        verdict:
          "Un cambio físico reorganiza la materia sin crear nada nuevo; un cambio químico produce nuevas sustancias con nuevas propiedades. Busca señales como gas, calor o cambio de color.",
        faq: [
          {
            q: "¿Cómo reconozco un cambio químico?",
            a: "Observa si hay nuevas sustancias, cambio de color, burbujas de gas, luz o un cambio de energía notable.",
          },
          {
            q: "¿Es disolver azúcar un cambio químico?",
            a: "No. Disolver azúcar es un cambio físico porque no se forma ninguna sustancia nueva.",
          },
          {
            q: "¿Son reversibles los cambios físicos?",
            a: "Normalmente sí, ya que la sustancia conserva la misma composición a lo largo de todo el proceso.",
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
      es: {
        title: "Mezcla homogénea vs heterogénea",
        h1: "Mezcla homogénea vs heterogénea explicadas",
        description:
          "Las mezclas homogéneas se ven uniformes en su totalidad; las mezclas heterogéneas tienen partes distintas visibles. Compara estas mezclas.",
        intro:
          "Las mezclas se dividen en tipos homogéneo y heterogéneo según cuán uniformemente estén repartidos sus componentes.",
        pros_a: [
          "Composición uniforme en su totalidad",
          "Los componentes no son visiblemente distintos",
          "Una única fase visible",
          "También se llama disolución",
          "Ejemplos: agua salada, aire, latón",
        ],
        pros_b: [
          "Composición no uniforme",
          "Los componentes son visiblemente distintos",
          "Dos o más fases visibles",
          "A menudo se pueden separar las partes físicamente",
          "Ejemplos: ensalada, arena y agua, granito",
        ],
        verdict:
          "Una mezcla homogénea se ve igual en todas partes, como una verdadera disolución; una mezcla heterogénea tiene partes visiblemente separadas. La uniformidad es la prueba decisiva.",
        faq: [
          {
            q: "¿Es homogénea el agua salada?",
            a: "Sí. El agua salada es una mezcla homogénea con composición uniforme en su totalidad.",
          },
          {
            q: "¿Qué hace que una mezcla sea heterogénea?",
            a: "Componentes visiblemente distintos o más de una fase que se pueda ver o separar.",
          },
          {
            q: "¿De qué tipo de mezcla es el aire?",
            a: "El aire es una mezcla homogénea de gases que parece uniforme.",
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
      es: {
        title: "Protón vs Neutrón: partículas del núcleo",
        h1: "Protón vs Neutrón explicados",
        description:
          "Los protones llevan carga positiva y definen el elemento; los neutrones son neutros y añaden masa. Compara estas partículas nucleares.",
        intro:
          "Los protones y los neutrones viven ambos en el núcleo, pero solo uno lleva carga y determina la identidad de un átomo.",
        pros_a: [
          "Lleva una carga eléctrica positiva",
          "El número define el elemento (número atómico)",
          "Masa de alrededor de 1 unidad de masa atómica",
          "Se encuentra en el núcleo",
          "Determina la identidad química",
        ],
        pros_b: [
          "No tiene carga eléctrica (neutro)",
          "El número puede variar, creando isótopos",
          "Masa de alrededor de 1 unidad de masa atómica",
          "Se encuentra en el núcleo",
          "Añade masa y estabilidad nuclear",
        ],
        verdict:
          "Los protones fijan la identidad y la carga de un átomo, mientras que los neutrones añaden masa y estabilizan el núcleo. Cambiar los protones cambia el elemento; cambiar los neutrones cambia el isótopo.",
        faq: [
          {
            q: "¿Qué partícula define el elemento?",
            a: "El protón, ya que el número de protones es igual al número atómico.",
          },
          {
            q: "¿Qué ocurre si cambia el número de neutrones?",
            a: "El átomo se convierte en un isótopo diferente del mismo elemento.",
          },
          {
            q: "¿Tienen ambos una carga?",
            a: "No. Los protones son positivos, pero los neutrones no llevan carga.",
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
      es: {
        title: "Protón vs Electrón: carga y masa",
        h1: "Protón vs Electrón explicados",
        description:
          "Los protones son partículas positivas y pesadas del núcleo; los electrones son partículas ligeras y negativas en orbitales. Compara estas partículas.",
        intro:
          "Los protones y los electrones llevan cargas opuestas y viven en partes distintas del átomo, dando forma a su estructura y su química.",
        pros_a: [
          "Carga eléctrica positiva",
          "Situado en el núcleo",
          "Relativamente pesado, alrededor de 1 uma",
          "El número fija la identidad del elemento",
          "Estable y fuertemente ligado",
        ],
        pros_b: [
          "Carga eléctrica negativa",
          "Situado en orbitales alrededor del núcleo",
          "Muy ligero, alrededor de 1/1836 de un protón",
          "El número gobierna el enlace químico",
          "Se puede ganar, perder o compartir",
        ],
        verdict:
          "Los protones son pesados y positivos en el núcleo; los electrones son ligeros y negativos en los orbitales. Los protones fijan la identidad, mientras que los electrones impulsan el enlace químico.",
        faq: [
          {
            q: "¿Cuál es más pesado?",
            a: "El protón, que es aproximadamente 1836 veces más masivo que un electrón.",
          },
          {
            q: "¿Qué partícula controla el enlace?",
            a: "Los electrones, ya que los enlaces químicos se forman ganándolos, perdiéndolos o compartiéndolos.",
          },
          {
            q: "¿Dónde se sitúan los electrones?",
            a: "En orbitales, regiones de probabilidad que rodean el núcleo.",
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
      es: {
        title: "Cinética vs Termodinámica en las reacciones",
        h1: "Cinética vs Termodinámica explicadas",
        description:
          "La cinética estudia cuán rápido transcurre una reacción; la termodinámica estudia si puede ocurrir. Compara estos dos puntos de vista.",
        intro:
          "La cinética y la termodinámica responden a preguntas distintas sobre una reacción: cuán rápida frente a si es favorable.",
        pros_a: [
          "Estudia la velocidad y la rapidez de la reacción",
          "Concierne a la energía de activación y la vía",
          "Se ve afectada por los catalizadores y la temperatura",
          "Responde a 'cuán rápido' transcurre una reacción",
          "La velocidad puede ser lenta aunque sea favorable",
        ],
        pros_b: [
          "Estudia la energía y la viabilidad",
          "Concierne a la entalpía, la entropía y la energía libre",
          "Predice la posición del equilibrio",
          "Responde a 'si' una reacción puede ocurrir",
          "No dice nada sobre la velocidad de la reacción",
        ],
        verdict:
          "La termodinámica te dice si una reacción es posible; la cinética te dice cuán rápido llegará allí. Una reacción favorable aún puede ser demasiado lenta para observarse.",
        faq: [
          {
            q: "¿Puede una reacción favorable ser lenta?",
            a: "Sí. La termodinámica puede favorecerla, pero la cinética puede hacerla extremadamente lenta sin un catalizador.",
          },
          {
            q: "¿Sobre qué afecta un catalizador?",
            a: "Un catalizador cambia la cinética acelerando la velocidad, no la termodinámica ni el equilibrio final.",
          },
          {
            q: "¿Cuál predice la posición del equilibrio?",
            a: "La termodinámica, mediante la energía libre, predice dónde se sitúa el equilibrio.",
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
      es: {
        title: "Fórmula empírica vs molecular comparadas",
        h1: "Fórmula empírica vs Fórmula molecular",
        description:
          "Una fórmula empírica muestra la proporción de átomos más simple; una fórmula molecular muestra el recuento real de átomos. Compara ambas.",
        intro:
          "Las fórmulas químicas vienen en dos formas. Una da la proporción más simple, la otra da el número verdadero de átomos.",
        pros_a: [
          "Muestra la proporción de números enteros más simple",
          "Reducida a sus términos mínimos",
          "Se halla a partir de la composición porcentual",
          "Es la misma para compuestos relacionados",
          "Ejemplo: CH para el benceno",
        ],
        pros_b: [
          "Muestra el número real de átomos",
          "Un múltiplo de números enteros de la empírica",
          "Se halla usando la masa molar",
          "Única para el compuesto específico",
          "Ejemplo: C6H6 para el benceno",
        ],
        verdict:
          "La fórmula empírica da la proporción más simple; la fórmula molecular da el recuento real. Multiplica la fórmula empírica por un número entero, hallado a partir de la masa molar, para obtener la molecular.",
        faq: [
          {
            q: "¿Cómo obtengo la fórmula molecular?",
            a: "Halla la fórmula empírica, luego multiplícala por la masa molar dividida entre la masa empírica.",
          },
          {
            q: "¿Pueden ser la misma?",
            a: "Sí. Para el agua, tanto la fórmula empírica como la molecular son H2O.",
          },
          {
            q: "¿De dónde proviene la fórmula empírica?",
            a: "Se calcula a partir de la composición porcentual en masa de cada elemento.",
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
      es: {
        title: "Reacción exotérmica vs Combustión comparadas",
        h1: "Reacción exotérmica vs Combustión explicadas",
        description:
          "Toda combustión es exotérmica, pero las reacciones exotérmicas son una clase más amplia. Compara la categoría general con la combustión.",
        intro:
          "La combustión es un tipo específico de reacción exotérmica. Entender la relación aclara la química que libera energía.",
        pros_a: [
          "Cualquier reacción que libera energía",
          "Amplia categoría de reacciones",
          "Incluye la neutralización y la respiración",
          "Cambio de entalpía negativo",
          "No requiere oxígeno",
        ],
        pros_b: [
          "Una reacción exotérmica específica",
          "Reacción de un combustible con oxígeno",
          "Produce calor y normalmente luz",
          "A menudo forma dióxido de carbono y agua",
          "Ejemplos: quemar madera, gas o combustible",
        ],
        verdict:
          "La combustión es un tipo de reacción exotérmica, que requiere un combustible y oxígeno. Toda combustión libera energía, pero muchas reacciones exotérmicas no necesitan oxígeno alguno.",
        faq: [
          {
            q: "¿Es toda combustión exotérmica?",
            a: "Sí. La combustión siempre libera energía, lo que la hace un tipo de reacción exotérmica.",
          },
          {
            q: "¿Son todas las reacciones exotérmicas combustión?",
            a: "No. La neutralización y la respiración liberan energía sin ser combustión.",
          },
          {
            q: "¿Qué necesita la combustión?",
            a: "La combustión requiere un combustible y oxígeno, además de suficiente calor para empezar.",
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
      es: {
        title: "Disolución concentrada vs diluida comparadas",
        h1: "Disolución concentrada vs diluida explicadas",
        description:
          "Una disolución concentrada tiene mucho soluto por volumen; una diluida tiene poco. Compara estas descripciones de la concentración.",
        intro:
          "Concentrada y diluida describen cuánto soluto hay presente en una disolución, una comparación relativa en lugar de un valor fijo.",
        pros_a: [
          "Gran cantidad de soluto por unidad de volumen",
          "Valor de concentración alto",
          "Menos disolvente en relación con el soluto",
          "A menudo se ve más oscura o más viscosa",
          "Se diluye añadiendo más disolvente",
        ],
        pros_b: [
          "Pequeña cantidad de soluto por unidad de volumen",
          "Valor de concentración bajo",
          "Más disolvente en relación con el soluto",
          "A menudo se ve más clara o más fluida",
          "Se concentra evaporando disolvente",
        ],
        verdict:
          "Concentrada y diluida son términos relativos que describen la cantidad de soluto por volumen. Añadir disolvente diluye una disolución; quitar disolvente la concentra.",
        faq: [
          {
            q: "¿Cómo diluyo una disolución?",
            a: "Añade más disolvente, lo que reduce la cantidad de soluto por unidad de volumen.",
          },
          {
            q: "¿Es lo mismo concentrada que fuerte?",
            a: "No. La concentración tiene que ver con la cantidad por volumen, mientras que la fuerza se refiere al grado de ionización.",
          },
          {
            q: "¿Son absolutos estos términos?",
            a: "No. Son comparaciones relativas entre disoluciones, no valores numéricos fijos.",
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
      es: {
        title: "Pila primaria vs secundaria: baterías",
        h1: "Pila primaria vs Pila secundaria explicadas",
        description:
          "Las pilas primarias son de un solo uso; las pilas secundarias son recargables. Compara estos dos tipos de batería.",
        intro:
          "Las baterías se dividen en pilas primarias y secundarias, según si su reacción se puede revertir mediante la recarga.",
        pros_a: [
          "De un solo uso, no recargable",
          "La reacción es irreversible",
          "Se desecha una vez agotada",
          "Coste inicial más bajo",
          "Ejemplos: pilas AA alcalinas, pilas de zinc-carbono",
        ],
        pros_b: [
          "Recargable muchas veces",
          "La reacción se puede revertir cargándola",
          "Se reutiliza a lo largo de muchos ciclos",
          "Coste más alto pero mejor valor a largo plazo",
          "Ejemplos: ion de litio, plomo-ácido",
        ],
        verdict:
          "Las pilas primarias se usan una vez y se tiran; las pilas secundarias se pueden recargar y reutilizar. Las pilas secundarias cuestan más pero son más baratas y más ecológicas con el tiempo.",
        faq: [
          {
            q: "¿Se puede recargar una pila primaria?",
            a: "No. Su reacción química es irreversible, así que debe reemplazarse una vez agotada.",
          },
          {
            q: "¿Por qué cuestan más las pilas secundarias?",
            a: "Usan una química reversible más compleja, pero el coste se reparte a lo largo de muchos ciclos de recarga.",
          },
          {
            q: "¿Es una batería de coche primaria o secundaria?",
            a: "Una batería de coche de plomo-ácido es una pila secundaria, diseñada para ser recargada.",
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
      es: {
        title: "Base fuerte vs Base débil: diferencias clave",
        h1: "Base fuerte vs Base débil explicadas",
        description:
          "Las bases fuertes se disocian por completo en agua; las bases débiles solo parcialmente. Compara pH, disociación y ejemplos.",
        intro:
          "La fuerza de una base tiene que ver con cuán completamente se ioniza, no con cuán concentrada está. Esto configura el pH y la reactividad.",
        pros_a: [
          "Se disocia por completo en agua",
          "pH alto a igual concentración",
          "Libera muchos iones hidróxido",
          "Reacción esencialmente irreversible",
          "Ejemplos: NaOH, KOH",
        ],
        pros_b: [
          "Se disocia solo parcialmente en agua",
          "pH más bajo que una base fuerte a igual concentración",
          "Libera menos iones hidróxido",
          "Establece un equilibrio",
          "Ejemplos: amoníaco, metilamina",
        ],
        verdict:
          "Las bases fuertes se ionizan por completo y dan un pH alto; las bases débiles establecen un equilibrio y se ionizan parcialmente. La fuerza es independiente de la concentración.",
        faq: [
          {
            q: "¿Base fuerte significa concentrada?",
            a: "No. La fuerza tiene que ver con el grado de ionización, mientras que la concentración es la cantidad por volumen.",
          },
          {
            q: "¿Qué es el valor de Kb?",
            a: "Kb es la constante de equilibrio que muestra hasta dónde se ioniza una base débil en agua.",
          },
          {
            q: "¿Es el amoníaco una base fuerte o débil?",
            a: "El amoníaco es una base débil porque solo se ioniza parcialmente en agua.",
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
      es: {
        title: "Reacción de adición vs de sustitución comparadas",
        h1: "Reacción de adición vs de sustitución explicadas",
        description:
          "Las reacciones de adición añaden átomos a través de un doble enlace; la sustitución intercambia un átomo por otro. Compara estas reacciones orgánicas.",
        intro:
          "La adición y la sustitución son dos tipos centrales de reacción orgánica. Que los átomos se añadan o se intercambien las diferencia.",
        pros_a: [
          "Los átomos se añaden a través de un enlace múltiple",
          "El doble o triple enlace se convierte en simple",
          "Típica de los compuestos insaturados",
          "No se libera ninguna molécula pequeña",
          "Ejemplo: el bromo añadiéndose a un alqueno",
        ],
        pros_b: [
          "Un átomo o grupo reemplaza a otro",
          "Los enlaces se intercambian, no se añaden",
          "Típica de los compuestos saturados y aromáticos",
          "A menudo libera una molécula pequeña",
          "Ejemplo: la cloración de un alcano",
        ],
        verdict:
          "Las reacciones de adición saturan un enlace múltiple añadiendo átomos; las reacciones de sustitución intercambian un grupo por otro. Los compuestos insaturados favorecen la adición, los saturados favorecen la sustitución.",
        faq: [
          {
            q: "¿Qué compuestos sufren la adición?",
            a: "Los compuestos insaturados con dobles o triples enlaces, como los alquenos y los alquinos.",
          },
          {
            q: "¿Qué ocurre en una reacción de sustitución?",
            a: "Un átomo o grupo de la molécula es reemplazado por un átomo o grupo distinto.",
          },
          {
            q: "¿Por qué los aromáticos prefieren la sustitución?",
            a: "La sustitución mantiene intacto el anillo aromático estable, mientras que la adición lo rompería.",
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
      es: {
        title: "Compuesto orgánico vs inorgánico comparados",
        h1: "Compuesto orgánico vs inorgánico explicados",
        description:
          "Los compuestos orgánicos están basados en el carbono; los compuestos inorgánicos generalmente no. Compara estas dos grandes clases químicas.",
        intro:
          "La química divide los compuestos en orgánicos e inorgánicos. La presencia de enlaces carbono-hidrógeno es la línea divisoria habitual.",
        pros_a: [
          "Basado en el carbono, normalmente con hidrógeno",
          "Generalmente enlazado de forma covalente",
          "A menudo inflamable, puntos de fusión más bajos",
          "Forma moléculas enormes y variadas",
          "Ejemplos: metano, glucosa, etanol",
        ],
        pros_b: [
          "Generalmente no basado en carbono-hidrógeno",
          "A menudo enlazado de forma iónica",
          "Normalmente puntos de fusión más altos",
          "Con frecuencia se disuelve para conducir la electricidad",
          "Ejemplos: sal, agua, ácido sulfúrico",
        ],
        verdict:
          "Los compuestos orgánicos están basados en el carbono con enlaces covalentes y una gran variedad estructural; los compuestos inorgánicos cubren todo lo demás, a menudo iónicos con puntos de fusión más altos.",
        faq: [
          {
            q: "¿Qué define a un compuesto orgánico?",
            a: "La mayoría contienen átomos de carbono enlazados a hidrógeno, el sello distintivo de la química orgánica.",
          },
          {
            q: "¿Es orgánico el dióxido de carbono?",
            a: "El dióxido de carbono contiene carbono pero tradicionalmente se clasifica como inorgánico.",
          },
          {
            q: "¿Por qué hay tantos compuestos orgánicos?",
            a: "El carbono forma cadenas, anillos y ramificaciones estables, permitiendo una variedad estructural sin fin.",
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
      es: {
        title: "Electronegatividad vs Afinidad electrónica",
        h1: "Electronegatividad vs Afinidad electrónica explicadas",
        description:
          "La electronegatividad es la atracción sobre los electrones compartidos en un enlace; la afinidad electrónica es la energía liberada cuando un átomo gana uno. Compara ambas.",
        intro:
          "Ambos términos describen la atracción de un átomo por los electrones, pero uno se aplica dentro de un enlace y el otro a un átomo libre.",
        pros_a: [
          "Atracción sobre los electrones compartidos en un enlace",
          "Una escala relativa y sin unidades",
          "Se mide mediante la escala de Pauling",
          "Predice la polaridad del enlace",
          "El flúor tiene el valor más alto",
        ],
        pros_b: [
          "Cambio de energía cuando un átomo gana un electrón",
          "Una energía real medida en kJ/mol",
          "Se aplica a un átomo gaseoso aislado",
          "Normalmente libera energía (valor negativo)",
          "El cloro tiene un valor muy alto",
        ],
        verdict:
          "La electronegatividad es una atracción relativa dentro de los enlaces; la afinidad electrónica es una energía medida para que un átomo solitario gane un electrón. Ambas aumentan a lo largo de un periodo.",
        faq: [
          {
            q: "¿En qué se diferencian las dos?",
            a: "La electronegatividad es una escala relativa para átomos enlazados; la afinidad electrónica es una energía para un átomo libre.",
          },
          {
            q: "¿Qué elemento es el más electronegativo?",
            a: "El flúor tiene la electronegatividad más alta de todos los elementos.",
          },
          {
            q: "¿Qué unidades usa la afinidad electrónica?",
            a: "La afinidad electrónica se mide como una energía en kilojulios por mol.",
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
      es: {
        title: "Número atómico vs Número másico comparados",
        h1: "Número atómico vs Número másico explicados",
        description:
          "El número atómico cuenta los protones; el número másico cuenta los protones más los neutrones. Compara estas dos cifras atómicas clave.",
        intro:
          "Cada átomo se describe mediante dos números. Uno identifica el elemento, el otro da el recuento total de partículas nucleares.",
        pros_a: [
          "Cuenta solo los protones",
          "Símbolo Z",
          "Define qué elemento es un átomo",
          "Es el mismo para todos los átomos de un elemento",
          "Es igual a los electrones en un átomo neutro",
        ],
        pros_b: [
          "Cuenta los protones más los neutrones",
          "Símbolo A",
          "Da la masa nuclear total",
          "Varía entre isótopos",
          "Siempre es un número entero",
        ],
        verdict:
          "El número atómico fija el elemento contando los protones; el número másico añade los neutrones para dar el total nuclear. Resta Z de A para hallar el número de neutrones.",
        faq: [
          {
            q: "¿Cómo hallo el número de neutrones?",
            a: "Resta el número atómico del número másico.",
          },
          {
            q: "¿Qué número define el elemento?",
            a: "El número atómico, ya que es igual al recuento de protones.",
          },
          {
            q: "¿Por qué varía el número másico?",
            a: "Los isótopos de un elemento tienen distinto número de neutrones, lo que cambia el número másico.",
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
      es: {
        title: "Monómero vs Polímero: bloques de construcción",
        h1: "Monómero vs Polímero explicados",
        description:
          "Los monómeros son pequeñas unidades repetitivas; los polímeros son cadenas largas construidas a partir de muchos monómeros. Compara estos términos para el estudio.",
        intro:
          "Los polímeros se forman enlazando muchos monómeros entre sí. La relación es como cuentas que forman un collar largo.",
        pros_a: [
          "Una sola unidad molecular pequeña",
          "El bloque de construcción de un polímero",
          "Puede reaccionar y unirse con otros monómeros",
          "Baja masa molecular",
          "Ejemplos: eteno, glucosa, aminoácidos",
        ],
        pros_b: [
          "Una cadena larga de muchos monómeros",
          "Construido mediante la polimerización",
          "Masa molecular muy alta",
          "Tiene propiedades distintas de sus monómeros",
          "Ejemplos: polietileno, almidón, proteínas",
        ],
        verdict:
          "Un monómero es una pequeña unidad; un polímero son muchas de ellas unidas en una cadena larga. La polimerización enlaza los monómeros, a menudo liberando moléculas pequeñas en el proceso.",
        faq: [
          {
            q: "¿Cómo se fabrican los polímeros?",
            a: "Mediante la polimerización, donde muchas unidades de monómero se enlazan en una cadena larga.",
          },
          {
            q: "¿Actúan los polímeros como sus monómeros?",
            a: "No. Los polímeros suelen tener propiedades muy distintas de los monómeros que los construyen.",
          },
          {
            q: "¿Es el almidón un polímero?",
            a: "Sí. El almidón es un polímero natural construido a partir de muchas unidades de monómero de glucosa.",
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
      es: {
        title: "Fisión vs Fusión nuclear comparadas",
        h1: "Fisión vs Fusión nuclear explicadas",
        description:
          "La fisión divide un núcleo pesado; la fusión une núcleos ligeros. Compara estas dos reacciones nucleares y su liberación de energía.",
        intro:
          "La fisión y la fusión liberan ambas energía nuclear, pero funcionan en direcciones opuestas sobre el núcleo.",
        pros_a: [
          "Divide un núcleo pesado en otros más pequeños",
          "Se desencadena por el bombardeo de neutrones",
          "Alimenta los reactores nucleares actuales",
          "Produce residuos radiactivos de larga vida",
          "Ejemplo: el uranio-235 dividiéndose",
        ],
        pros_b: [
          "Une núcleos ligeros en uno más pesado",
          "Requiere calor y presión extremos",
          "Alimenta el Sol y las estrellas",
          "Produce muchos menos residuos radiactivos",
          "Ejemplo: el hidrógeno fusionándose en helio",
        ],
        verdict:
          "La fisión divide átomos pesados y hace funcionar los reactores de hoy; la fusión une átomos ligeros y alimenta las estrellas. La fusión libera más energía por masa pero es mucho más difícil de sostener en la Tierra.",
        faq: [
          {
            q: "¿Cuál alimenta el Sol?",
            a: "La fusión nuclear, que une los núcleos de hidrógeno en helio, alimenta el Sol y otras estrellas.",
          },
          {
            q: "¿Por qué es difícil lograr la fusión?",
            a: "Necesita una temperatura y una presión extremas para vencer la repulsión entre los núcleos.",
          },
          {
            q: "¿Cuál produce más residuos nucleares?",
            a: "La fisión produce residuos radiactivos de larga vida, mientras que la fusión produce muchos menos.",
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
      es: {
        title: "Análisis cualitativo vs cuantitativo",
        h1: "Análisis cualitativo vs cuantitativo explicados",
        description:
          "El análisis cualitativo identifica qué hay presente; el análisis cuantitativo mide cuánto. Compara estos dos enfoques de laboratorio.",
        intro:
          "El análisis químico responde a dos preguntas: qué hay en una muestra y cuánto. Cada una se aborda mediante un enfoque distinto.",
        pros_a: [
          "Identifica qué sustancias están presentes",
          "Responde a la pregunta del 'qué'",
          "Usa pruebas a la llama y reacciones de precipitado",
          "Da resultados descriptivos, no numéricos",
          "Ejemplo: probar la presencia de un ion metálico",
        ],
        pros_b: [
          "Mide la cantidad de una sustancia",
          "Responde a la pregunta del 'cuánto'",
          "Usa la valoración y los métodos gravimétricos",
          "Da resultados numéricos",
          "Ejemplo: hallar la concentración de una disolución",
        ],
        verdict:
          "El análisis cualitativo identifica los componentes de una muestra; el análisis cuantitativo mide sus cantidades. Los laboratorios a menudo realizan primero el cualitativo y luego el cuantitativo.",
        faq: [
          {
            q: "¿Qué tipo usa la valoración?",
            a: "El análisis cuantitativo, ya que la valoración mide cuánta cantidad de una sustancia hay presente.",
          },
          {
            q: "¿Qué te dice el análisis cualitativo?",
            a: "Identifica qué sustancias o iones están presentes, sin dar cantidades.",
          },
          {
            q: "¿Se pueden usar ambos juntos?",
            a: "Sí. Una muestra a menudo se identifica primero cualitativamente y luego se mide cuantitativamente.",
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
      es: {
        title: "Número exacto vs medido en química",
        h1: "Número exacto vs Número medido explicados",
        description:
          "Los números exactos no tienen incertidumbre; los números medidos siempre llevan algo. Compara estos dos tipos para las cifras significativas.",
        intro:
          "Los números en química vienen en dos clases. Uno es perfectamente preciso, el otro está limitado por la herramienta de medición.",
        pros_a: [
          "No tiene ninguna incertidumbre",
          "Proviene de contar o de definiciones",
          "Cifras significativas infinitas",
          "No limita la precisión del cálculo",
          "Ejemplos: 12 en una docena, 100 cm en un metro",
        ],
        pros_b: [
          "Siempre lleva algo de incertidumbre",
          "Proviene del uso de un instrumento",
          "Cifras significativas limitadas",
          "Limita la precisión de un resultado",
          "Ejemplos: una masa de 5,32 g, una longitud de 4,1 cm",
        ],
        verdict:
          "Los números exactos son perfectamente precisos al provenir de contar o de definiciones; los números medidos siempre tienen incertidumbre. Solo los números medidos limitan las cifras significativas en un cálculo.",
        faq: [
          {
            q: "¿Por qué los números exactos no limitan las cifras significativas?",
            a: "Tienen cifras significativas infinitas, así que nunca restringen la precisión de un cálculo.",
          },
          {
            q: "¿De dónde provienen los números medidos?",
            a: "De instrumentos como balanzas, reglas y termómetros, que siempre tienen algo de incertidumbre.",
          },
          {
            q: "¿Es exacta una cantidad contada?",
            a: "Sí. Contar objetos enteros, como 24 estudiantes, da un número exacto.",
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
      es: {
        title: "Exactitud vs Precisión en la medición",
        h1: "Exactitud vs Precisión explicadas",
        description:
          "La exactitud es la cercanía al valor verdadero; la precisión es cuán repetibles son las mediciones. Compara estos dos conceptos de laboratorio.",
        intro:
          "La exactitud y la precisión a menudo se confunden pero describen cualidades distintas de una medición.",
        pros_a: [
          "Cercanía al valor verdadero o aceptado",
          "Mide la corrección",
          "Se mejora calibrando los instrumentos",
          "Se ve afectada por el error sistemático",
          "Ejemplo: una lectura cerca de la masa real",
        ],
        pros_b: [
          "Cuán cerca están entre sí las mediciones repetidas",
          "Mide la consistencia y la repetibilidad",
          "Se mejora con una técnica cuidadosa",
          "Se ve afectada por el error aleatorio",
          "Ejemplo: cinco lecturas todas muy cercanas entre sí",
        ],
        verdict:
          "La exactitud tiene que ver con acertar; la precisión tiene que ver con ser consistente. Una medición puede ser precisa pero inexacta, así que los buenos experimentos buscan ambas.",
        faq: [
          {
            q: "¿Puede un resultado ser preciso pero no exacto?",
            a: "Sí. Las lecturas repetidas pueden agruparse estrechamente y aun así estar todas lejos del valor verdadero.",
          },
          {
            q: "¿Qué error reduce la exactitud?",
            a: "El error sistemático, como un instrumento sin calibrar, desplaza los resultados lejos del valor verdadero.",
          },
          {
            q: "¿Cómo mejoro la precisión?",
            a: "Usando una técnica cuidadosa y consistente para reducir el error aleatorio entre las lecturas.",
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
      es: {
        title: "Electrón de valencia vs interno comparados",
        h1: "Electrón de valencia vs Electrón interno explicados",
        description:
          "Los electrones de valencia están en la capa externa e impulsan el enlace; los electrones internos están dentro y apantallados. Compara estos electrones.",
        intro:
          "Los electrones de un átomo se dividen en dos roles. Los más externos hacen la química mientras que los internos permanecen encerrados.",
        pros_a: [
          "Situados en la capa más externa",
          "Implicados en el enlace químico",
          "Determinan la reactividad de un elemento",
          "Se muestran en los diagramas de puntos de Lewis",
          "Se pierden, ganan o comparten en las reacciones",
        ],
        pros_b: [
          "Situados en las capas internas y llenas",
          "No implicados en el enlace",
          "Fuertemente retenidos por el núcleo",
          "Apantallan a los electrones de valencia de la carga nuclear completa",
          "Generalmente inalterados en las reacciones",
        ],
        verdict:
          "Los electrones de valencia viven en la capa externa y gobiernan el enlace y la reactividad; los electrones internos permanecen enterrados dentro, apantallando a los externos pero sin unirse a las reacciones.",
        faq: [
          {
            q: "¿Qué electrones participan en el enlace?",
            a: "Los electrones de valencia en la capa más externa son los implicados en el enlace químico.",
          },
          {
            q: "¿Qué hacen los electrones internos?",
            a: "Apantallan a los electrones de valencia de la atracción completa del núcleo pero no se enlazan.",
          },
          {
            q: "¿Dónde se muestran los electrones de valencia?",
            a: "En los diagramas de puntos de Lewis, que muestran solo los electrones de la capa externa.",
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
      es: {
        title: "Enlace sigma vs pi: enlace covalente",
        h1: "Enlace sigma vs Enlace pi explicados",
        description:
          "Los enlaces sigma se forman por solapamiento frontal de orbitales; los enlaces pi se forman por solapamiento lateral. Compara fuerza y rotación.",
        intro:
          "Los enlaces covalentes vienen en dos tipos. Los enlaces sigma y pi difieren en cómo se solapan sus orbitales y cuán fuertes son.",
        pros_a: [
          "Se forma por solapamiento frontal de orbitales",
          "Fuerte, con densidad electrónica sobre el eje de enlace",
          "Siempre el primer enlace entre dos átomos",
          "Permite la libre rotación alrededor del enlace",
          "Presente en todos los enlaces simples",
        ],
        pros_b: [
          "Se forma por solapamiento lateral de orbitales",
          "Más débil, con densidad por encima y por debajo del eje",
          "Solo se forma después de que exista un enlace sigma",
          "Impide la rotación alrededor del enlace",
          "Presente en los dobles y triples enlaces",
        ],
        verdict:
          "Un enlace sigma es el primer enlace fuerte por solapamiento frontal; los enlaces pi son solapamientos laterales más débiles añadidos en los dobles y triples enlaces. Los enlaces pi bloquean la molécula contra la rotación.",
        faq: [
          {
            q: "¿Qué enlace es más fuerte?",
            a: "El enlace sigma, porque el solapamiento frontal concentra la densidad electrónica de la forma más eficaz.",
          },
          {
            q: "¿Cuántos enlaces hay en un triple enlace?",
            a: "Un triple enlace tiene un enlace sigma y dos enlaces pi.",
          },
          {
            q: "¿Por qué no pueden rotar los dobles enlaces?",
            a: "El solapamiento lateral del enlace pi se rompería si los átomos rotaran, así que la rotación queda bloqueada.",
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
      es: {
        title: "Electrófilo vs Nucleófilo comparados",
        h1: "Electrófilo vs Nucleófilo explicados",
        description:
          "Los electrófilos buscan electrones; los nucleófilos los donan. Compara estas dos especies clave en los mecanismos de las reacciones orgánicas.",
        intro:
          "Las reacciones orgánicas son en gran medida un baile entre especies pobres y ricas en electrones. Estos son los electrófilos y los nucleófilos.",
        pros_a: [
          "Especie amante de electrones, deficiente en electrones",
          "Acepta un par de electrones",
          "A menudo positiva o parcialmente positiva",
          "Es atacada por los nucleófilos",
          "Ejemplos: H+, carbocationes, Br2",
        ],
        pros_b: [
          "Especie amante del núcleo, rica en electrones",
          "Dona un par de electrones",
          "A menudo negativa o con un par solitario",
          "Ataca a los electrófilos",
          "Ejemplos: OH-, NH3, CN-",
        ],
        verdict:
          "Los electrófilos son pobres en electrones y aceptan pares de electrones; los nucleófilos son ricos en electrones y los donan. Las reacciones ocurren cuando un nucleófilo ataca a un electrófilo.",
        faq: [
          {
            q: "¿Cuál dona electrones?",
            a: "El nucleófilo dona un par de electrones; el electrófilo los acepta.",
          },
          {
            q: "¿Es un ion positivo un electrófilo?",
            a: "Normalmente sí. Las especies positivas o deficientes en electrones actúan como electrófilos.",
          },
          {
            q: "¿Cómo reaccionan entre sí?",
            a: "Un nucleófilo rico en electrones ataca a un electrófilo pobre en electrones, formando un nuevo enlace.",
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
      es: {
        title: "Tampón vs Indicador: herramientas ácido-base",
        h1: "Tampón vs Indicador explicados",
        description:
          "Un tampón resiste el cambio de pH; un indicador señala el pH cambiando de color. Compara estas dos herramientas de laboratorio ácido-base.",
        intro:
          "Los tampones y los indicadores se relacionan ambos con el pH pero hacen trabajos opuestos: uno estabiliza el pH, el otro lo revela.",
        pros_a: [
          "Resiste los cambios de pH",
          "Hecho de un ácido débil y su base conjugada",
          "Mantiene el pH estable cuando se añade ácido o base",
          "Vital en la sangre y los sistemas biológicos",
          "Ejemplo: ácido acético con acetato de sodio",
        ],
        pros_b: [
          "Señala el pH de una disolución",
          "Cambia de color a lo largo de un rango de pH",
          "A menudo es él mismo un ácido o una base débil",
          "Se usa para hallar los puntos finales de las valoraciones",
          "Ejemplos: tornasol, fenolftaleína",
        ],
        verdict:
          "Un tampón mantiene el pH estable frente a un ácido o base añadidos, mientras que un indicador cambia de color para revelar el pH. Uno estabiliza, el otro informa.",
        faq: [
          {
            q: "¿De qué está hecho un tampón?",
            a: "Normalmente de un ácido débil y su base conjugada, o de una base débil y su ácido conjugado.",
          },
          {
            q: "¿Por qué usar un indicador en una valoración?",
            a: "Su cambio de color marca el punto final, mostrando cuándo se ha completado la neutralización.",
          },
          {
            q: "¿Cambia un indicador el pH?",
            a: "No. Un indicador solo revela el pH; no lo estabiliza ni lo altera de forma significativa.",
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
      es: {
        title: "Ruptura vs Formación de enlace: energía",
        h1: "Ruptura vs Formación de enlace explicadas",
        description:
          "Romper enlaces absorbe energía; formar enlaces la libera. Compara estos dos pasos que deciden la energía de una reacción.",
        intro:
          "Cada reacción rompe enlaces viejos y forma otros nuevos. El balance entre los dos decide si una reacción es exotérmica o endotérmica.",
        pros_a: [
          "Hay que absorber energía para romper un enlace",
          "Un paso endotérmico",
          "Siempre requiere un aporte de energía",
          "Los enlaces más fuertes necesitan más energía",
          "Le ocurre a los reactivos",
        ],
        pros_b: [
          "Se libera energía cuando se forma un enlace",
          "Un paso exotérmico",
          "Siempre desprende energía",
          "Los enlaces más fuertes liberan más energía",
          "Ocurre para formar los productos",
        ],
        verdict:
          "Romper enlaces siempre absorbe energía y formar enlaces siempre la libera. Si la formación de enlaces libera más de lo que absorbe la ruptura de enlaces, la reacción es exotérmica en conjunto.",
        faq: [
          {
            q: "¿Qué paso libera energía?",
            a: "La formación de enlaces libera energía; la ruptura de enlaces la absorbe.",
          },
          {
            q: "¿Cómo decide esto entre exotérmica y endotérmica?",
            a: "Si formar nuevos enlaces libera más de lo que absorbe romper los viejos, la reacción es exotérmica.",
          },
          {
            q: "¿Importan más los enlaces más fuertes?",
            a: "Sí. Los enlaces más fuertes absorben más energía para romperse y liberan más energía cuando se forman.",
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
      es: {
        title: "Concentración vs Velocidad de reacción",
        h1: "Concentración vs Velocidad de reacción explicadas",
        description:
          "La concentración mide cuánto soluto hay presente; la velocidad de reacción mide cuán rápido transcurre. Compara y relaciona las dos.",
        intro:
          "La concentración y la velocidad de reacción están relacionadas pero son distintas: una es un estado, la otra una rapidez.",
        pros_a: [
          "Cantidad de soluto por unidad de volumen",
          "Una magnitud instantánea en un momento dado",
          "Se mide en mol/L",
          "Un valor más alto significa más partículas presentes",
          "Afecta a la frecuencia con que ocurren las colisiones",
        ],
        pros_b: [
          "Cuán rápido los reactivos se transforman en productos",
          "Se mide por unidad de tiempo",
          "Se expresa como cambio de concentración a lo largo del tiempo",
          "Un valor más alto significa una reacción más rápida",
          "Se ve afectada por la concentración, la temperatura y los catalizadores",
        ],
        verdict:
          "La concentración es cuánto hay presente; la velocidad de reacción es cuán rápido ocurre el cambio. Subir la concentración normalmente sube la velocidad al provocar colisiones más frecuentes.",
        faq: [
          {
            q: "¿Cómo afecta la concentración a la velocidad?",
            a: "Los reactivos más concentrados colisionan con más frecuencia, así que la reacción generalmente transcurre más rápido.",
          },
          {
            q: "¿Qué unidades usa la velocidad?",
            a: "La velocidad normalmente se expresa como cambio de concentración por unidad de tiempo, como mol/L por segundo.",
          },
          {
            q: "¿Es la concentración el único factor de la velocidad?",
            a: "No. La temperatura, la superficie y los catalizadores también afectan a la velocidad de reacción.",
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
      es: {
        title: "Gas noble vs Metal alcalino: los extremos",
        h1: "Gas noble vs Metal alcalino explicados",
        description:
          "Los gases nobles son los elementos menos reactivos; los metales alcalinos están entre los más reactivos. Compara estos extremos de la tabla periódica.",
        intro:
          "El grupo 18 y el grupo 1 se sitúan en los extremos opuestos de la reactividad. Uno tiene una capa de electrones completa, el otro un único electrón poco retenido.",
        pros_a: [
          "Grupo 18 con una capa de valencia completa",
          "Extremadamente estable y poco reactivo",
          "Existe como átomos individuales y estables",
          "Gases incoloros e inodoros",
          "Ejemplos: helio, neón, argón",
        ],
        pros_b: [
          "Grupo 1 con un electrón de valencia",
          "Extremadamente reactivo, sobre todo con el agua",
          "Metales blandos de baja densidad",
          "Se guardan bajo aceite por seguridad",
          "Ejemplos: litio, sodio, potasio",
        ],
        verdict:
          "Los gases nobles son los elementos más calmados gracias a una capa completa, mientras que los metales alcalinos están entre los más violentos debido a un electrón fácilmente perdido. Marcan los extremos de la reactividad.",
        faq: [
          {
            q: "¿Por qué los gases nobles son tan estables?",
            a: "Su capa externa de electrones completa no les da ningún impulso para reaccionar con otros elementos.",
          },
          {
            q: "¿Por qué se guardan los metales alcalinos bajo aceite?",
            a: "Reaccionan tan rápido con el aire y el agua que el aceite los protege de la humedad.",
          },
          {
            q: "¿Cuál es más reactivo?",
            a: "Los metales alcalinos son mucho más reactivos; los gases nobles son casi inertes.",
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
      es: {
        title: "Punto final vs punto de equivalencia (valoración)",
        h1: "Punto final vs Punto de equivalencia explicados",
        description:
          "El punto de equivalencia es donde los reactivos se equilibran exactamente; el punto final es donde el indicador cambia. Compara ambos.",
        intro:
          "La valoración tiene dos puntos estrechamente relacionados. Uno es el verdadero equilibrio químico, el otro es lo que muestra el indicador.",
        pros_a: [
          "Donde el indicador cambia visiblemente de color",
          "Lo que el experimentador observa realmente",
          "Ligeramente después del punto de equivalencia",
          "Depende del indicador elegido",
          "Una señal práctica y observada",
        ],
        pros_b: [
          "Donde el ácido y la base se neutralizan exactamente",
          "Los moles de reactivos son estequiométricamente iguales",
          "El verdadero punto teórico",
          "Independiente de cualquier indicador",
          "Se halla con precisión con un medidor de pH",
        ],
        verdict:
          "El punto de equivalencia es el verdadero equilibrio químico; el punto final es el cambio de color observado. Un buen indicador hace que el punto final caiga muy cerca del punto de equivalencia.",
        faq: [
          {
            q: "¿Son los dos puntos el mismo?",
            a: "No exactamente. Un indicador bien elegido hace que el punto final casi coincida con el punto de equivalencia.",
          },
          {
            q: "¿Cuál es el punto teórico?",
            a: "El punto de equivalencia es el verdadero punto teórico donde los reactivos son estequiométricamente iguales.",
          },
          {
            q: "¿Por qué elegir el indicador con cuidado?",
            a: "Para que su cambio de color ocurra lo más cerca posible del punto de equivalencia, por exactitud.",
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
      es: {
        title: "Agua dura vs Agua blanda comparadas",
        h1: "Agua dura vs Agua blanda explicadas",
        description:
          "El agua dura es rica en iones de calcio y magnesio; el agua blanda tiene pocos. Compara estos dos tipos de agua.",
        intro:
          "La dureza del agua depende de los iones minerales disueltos. La cantidad de calcio y magnesio decide si el agua es dura o blanda.",
        pros_a: [
          "Rica en iones de calcio y magnesio",
          "Forma natas con el jabón",
          "Deja cal en hervidores y tuberías",
          "Hace poca espuma con el jabón",
          "A menudo de zonas de creta o caliza",
        ],
        pros_b: [
          "Pobre en iones de calcio y magnesio",
          "Hace espuma con facilidad con el jabón",
          "Deja poca o ninguna cal",
          "Se encuentra en zonas de roca dura como el granito",
          "Se puede producir mediante ablandamiento por intercambio iónico",
        ],
        verdict:
          "El agua dura lleva calcio y magnesio disueltos que combaten el jabón y forman cal; el agua blanda tiene pocos de esos iones y hace espuma con facilidad. La dureza refleja la geología local.",
        faq: [
          {
            q: "¿Qué causa la dureza del agua?",
            a: "Los iones de calcio y magnesio disueltos, normalmente captados de roca de creta o caliza.",
          },
          {
            q: "¿Por qué el agua dura forma cal?",
            a: "Calentarla deposita carbonato de calcio insoluble como sarro en hervidores y tuberías.",
          },
          {
            q: "¿Cómo se ablanda el agua dura?",
            a: "Mediante el intercambio iónico, cambiando los iones de calcio y magnesio por iones de sodio.",
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
      es: {
        title: "Ácido de Lewis vs Base de Lewis comparados",
        h1: "Ácido de Lewis vs Base de Lewis explicados",
        description:
          "Un ácido de Lewis acepta un par de electrones; una base de Lewis dona uno. Compara esta amplia definición ácido-base.",
        intro:
          "La teoría de Lewis define los ácidos y las bases por los pares de electrones, ampliando la idea más allá de los protones y los iones hidróxido.",
        pros_a: [
          "Acepta un par de electrones",
          "Un aceptor de pares de electrones",
          "A menudo tiene un orbital vacío",
          "Incluye especies sin protones",
          "Ejemplos: BF3, H+, cationes metálicos",
        ],
        pros_b: [
          "Dona un par de electrones",
          "Un donante de pares de electrones",
          "Normalmente tiene un par solitario disponible",
          "Incluye especies sin hidróxido",
          "Ejemplos: NH3, H2O, OH-",
        ],
        verdict:
          "Los ácidos de Lewis aceptan pares de electrones y las bases de Lewis los donan, una definición lo bastante amplia para cubrir reacciones sin protones en absoluto. Forman un enlace compartiendo un par.",
        faq: [
          {
            q: "¿En qué difiere la definición de Lewis?",
            a: "Se centra en los pares de electrones en lugar de la transferencia de protones, así que cubre muchas más reacciones.",
          },
          {
            q: "¿Es toda base de Lewis también una base de Brønsted?",
            a: "Muchas lo son, pero la definición de Lewis es más amplia e incluye especies que no aceptan protones.",
          },
          {
            q: "¿Qué enlace se forma en una reacción de Lewis?",
            a: "Un enlace covalente coordinado, donde la base aporta los dos electrones compartidos.",
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
      es: {
        title: "Energía de activación vs Cambio de entalpía",
        h1: "Energía de activación vs Cambio de entalpía explicados",
        description:
          "La energía de activación es la barrera para iniciar una reacción; el cambio de entalpía es la diferencia neta de energía. Compara ambas en un gráfico.",
        intro:
          "Los diagramas de energía muestran dos magnitudes clave. Una es la colina que hay que subir, la otra es el cambio global de energía.",
        pros_a: [
          "La energía mínima para iniciar una reacción",
          "La altura de la barrera de energía",
          "Se reduce añadiendo un catalizador",
          "Determina la velocidad de reacción",
          "Se mide desde los reactivos hasta el pico",
        ],
        pros_b: [
          "La diferencia neta de energía de la reacción",
          "La energía de los reactivos menos la de los productos",
          "Negativo para las exotérmicas, positivo para las endotérmicas",
          "No se ve afectado por un catalizador",
          "Se mide desde los reactivos hasta los productos",
        ],
        verdict:
          "La energía de activación es la altura de la barrera que fija la velocidad de reacción; el cambio de entalpía es la brecha global de energía entre reactivos y productos. Un catalizador reduce la primera, no el segundo.",
        faq: [
          {
            q: "¿Cambia un catalizador el cambio de entalpía?",
            a: "No. Un catalizador solo reduce la energía de activación; el cambio de entalpía global se mantiene igual.",
          },
          {
            q: "¿Qué valor fija la velocidad de reacción?",
            a: "La energía de activación, ya que una barrera más baja permite que más colisiones tengan éxito.",
          },
          {
            q: "¿Cómo leo el cambio de entalpía en un gráfico?",
            a: "Es la brecha vertical entre los niveles de energía de los reactivos y los productos.",
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
      es: {
        title: "Ácido conjugado vs Base conjugada comparados",
        h1: "Ácido conjugado vs Base conjugada explicados",
        description:
          "Un ácido conjugado se forma cuando una base gana un protón; una base conjugada se forma cuando un ácido pierde uno. Compara estos pares.",
        intro:
          "En la teoría de Brønsted-Lowry, los ácidos y las bases vienen en pares conjugados que difieren en exactamente un protón.",
        pros_a: [
          "Se forma cuando una base acepta un protón",
          "Tiene un H+ más que su base",
          "Puede donar ese protón de vuelta",
          "Una base más fuerte da un ácido conjugado más débil",
          "Ejemplo: NH4+ a partir del amoníaco",
        ],
        pros_b: [
          "Se forma cuando un ácido pierde un protón",
          "Tiene un H+ menos que su ácido",
          "Puede aceptar un protón de vuelta",
          "Un ácido más fuerte da una base conjugada más débil",
          "Ejemplo: Cl- a partir del ácido clorhídrico",
        ],
        verdict:
          "Un ácido conjugado tiene un protón extra; una base conjugada tiene uno menos. Cada reacción ácido-base produce un par conjugado, donde una especie más fuerte da un compañero más débil.",
        faq: [
          {
            q: "¿Qué difiere dentro de un par conjugado?",
            a: "Exactamente un protón: el ácido conjugado tiene un H+ más que la base conjugada.",
          },
          {
            q: "¿Por qué un ácido fuerte da una base conjugada débil?",
            a: "Como el ácido fuerte cede su protón con facilidad, su base conjugada retiene mal los protones.",
          },
          {
            q: "¿Forma cada reacción ácido-base conjugados?",
            a: "Sí. Las reacciones de Brønsted-Lowry siempre producen un ácido conjugado y una base conjugada.",
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
      es: {
        title: "Nitrógeno vs Oxígeno: los gases principales del aire",
        h1: "Nitrógeno vs Oxígeno explicados",
        description:
          "El nitrógeno es un gas diatómico inerte; el oxígeno es uno reactivo esencial para la vida. Compara los dos componentes principales del aire.",
        intro:
          "El nitrógeno y el oxígeno componen casi todo el aire que respiramos, pero su comportamiento químico es sorprendentemente distinto.",
        pros_a: [
          "Símbolo N, constituye alrededor del 78% del aire",
          "Muy estable debido a un fuerte triple enlace",
          "En gran medida poco reactivo a temperatura ambiente",
          "Esencial para las proteínas y el ADN",
          "Se usa para fabricar amoníaco y fertilizantes",
        ],
        pros_b: [
          "Símbolo O, constituye alrededor del 21% del aire",
          "Muy reactivo, sostiene la combustión",
          "Necesario para la respiración de los seres vivos",
          "Forma óxidos con la mayoría de los elementos",
          "Tiene el alótropo ozono, O3",
        ],
        verdict:
          "El nitrógeno es abundante e inerte gracias a su triple enlace, mientras que el oxígeno es reactivo y sostiene la vida. Juntos forman la mayor parte de la atmósfera.",
        faq: [
          {
            q: "¿Por qué el nitrógeno es tan poco reactivo?",
            a: "Sus moléculas se mantienen unidas por un triple enlace muy fuerte que es difícil de romper.",
          },
          {
            q: "¿Qué gas sostiene la combustión?",
            a: "El oxígeno sostiene la combustión; el nitrógeno no y puede incluso diluir el fuego.",
          },
          {
            q: "¿Cuál es más abundante en el aire?",
            a: "El nitrógeno, con aproximadamente un 78%, supera con creces al oxígeno, con un 21%.",
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
      es: {
        title: "Respiración vs Fotosíntesis comparadas",
        h1: "Respiración vs Fotosíntesis explicadas",
        description:
          "La respiración libera energía descomponiendo la glucosa; la fotosíntesis almacena energía fabricándola. Compara estos procesos.",
        intro:
          "La respiración y la fotosíntesis son procesos bioquímicos opuestos que hacen circular el carbono y la energía por los seres vivos.",
        pros_a: [
          "Descompone la glucosa para liberar energía",
          "Un proceso exotérmico",
          "Usa oxígeno, libera dióxido de carbono",
          "Ocurre en todas las células vivas",
          "Reactivos: glucosa y oxígeno",
        ],
        pros_b: [
          "Construye glucosa y almacena energía",
          "Un proceso endotérmico que necesita luz",
          "Usa dióxido de carbono, libera oxígeno",
          "Ocurre en plantas, algas y algunas bacterias",
          "Reactivos: dióxido de carbono y agua",
        ],
        verdict:
          "La respiración libera la energía química almacenada mientras que la fotosíntesis capta la energía de la luz como glucosa. Son opuestos químicos que mantienen girando los ciclos del carbono y el oxígeno.",
        faq: [
          {
            q: "¿Qué proceso libera oxígeno?",
            a: "La fotosíntesis libera oxígeno, mientras que la respiración lo consume.",
          },
          {
            q: "¿Es la respiración exotérmica?",
            a: "Sí. La respiración libera energía, lo que la hace un proceso exotérmico.",
          },
          {
            q: "¿Hacen las plantas ambas cosas?",
            a: "Sí. Las plantas fotosintetizan con luz y respiran continuamente para usar la energía.",
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
      es: {
        title: "Energía de ionización vs Radio atómico",
        h1: "Energía de ionización vs Radio atómico explicados",
        description:
          "La energía de ionización es la energía para quitar un electrón; el radio atómico es el tamaño de un átomo. Compara estas tendencias periódicas.",
        intro:
          "Dos tendencias periódicas importantes se mueven en direcciones opuestas a lo largo de la tabla, y están estrechamente relacionadas.",
        pros_a: [
          "Energía necesaria para quitar un electrón externo",
          "Se mide en kJ/mol",
          "Aumenta a lo largo de un periodo",
          "Disminuye al bajar por un grupo",
          "Más alta para los átomos que retienen los electrones con fuerza",
        ],
        pros_b: [
          "El tamaño de un átomo",
          "Se mide en picómetros",
          "Disminuye a lo largo de un periodo",
          "Aumenta al bajar por un grupo",
          "Más grande cuando los electrones están más alejados",
        ],
        verdict:
          "La energía de ionización y el radio atómico tienden de forma opuesta: a medida que los átomos se vuelven más pequeños, los electrones se retienen con más fuerza y son más difíciles de quitar. Son dos caras de la misma atracción nuclear.",
        faq: [
          {
            q: "¿Cómo se relacionan las dos tendencias?",
            a: "Los átomos más pequeños retienen los electrones con más fuerza, así que un radio más pequeño significa una energía de ionización más alta.",
          },
          {
            q: "¿Por qué el radio atómico se encoge a lo largo de un periodo?",
            a: "El aumento de la carga nuclear atrae los electrones más cerca sin añadir una nueva capa.",
          },
          {
            q: "¿Dónde es más alta la energía de ionización?",
            a: "Hacia la parte superior derecha de la tabla periódica, donde los átomos son pequeños y retienen los electrones con fuerza.",
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
      es: {
        title: "Ácido vs Sal: de reactivo a producto",
        h1: "Ácido vs Sal explicados",
        description:
          "Un ácido dona protones; una sal es el producto iónico de neutralizar un ácido. Compara estas sustancias relacionadas.",
        intro:
          "Los ácidos y las sales están conectados: haz reaccionar un ácido con una base y uno de los productos es una sal.",
        pros_a: [
          "Dona iones H+ en disolución",
          "Tiene un pH por debajo de 7",
          "Sabor agrio, corrosivo para los metales",
          "Un reactivo en la neutralización",
          "Ejemplos: HCl, ácido sulfúrico, ácido nítrico",
        ],
        pros_b: [
          "Un compuesto iónico de un catión y un anión",
          "Normalmente tiene un pH neutro",
          "Se forma cuando se neutraliza un ácido",
          "Un producto de las reacciones ácido-base",
          "Ejemplos: cloruro de sodio, nitrato de potasio",
        ],
        verdict:
          "Un ácido es un reactivo que dona protones; una sal es el producto iónico neutro que se forma cuando un ácido reacciona con una base. Los ácidos inician la reacción, las sales la terminan.",
        faq: [
          {
            q: "¿Cómo se forma una sal a partir de un ácido?",
            a: "Cuando un ácido reacciona con una base, el anión del ácido se une al catión de la base para formar una sal.",
          },
          {
            q: "¿Son todas las sales neutras?",
            a: "La mayoría son casi neutras, pero algunas sales son ligeramente ácidas o básicas según sus iones.",
          },
          {
            q: "¿Cuál es el otro producto junto con una sal?",
            a: "Neutralizar un ácido con una base normalmente también produce agua.",
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
      es: {
        title: "Hidrato vs Compuesto anhidro comparados",
        h1: "Hidrato vs Anhidro explicados",
        description:
          "Un hidrato contiene agua en su estructura cristalina; una forma anhidra no tiene ninguna. Compara estos dos estados de un compuesto.",
        intro:
          "Muchas sales pueden retener agua dentro de sus cristales. Que el agua esté presente hace que un compuesto sea un hidrato o anhidro.",
        pros_a: [
          "Contiene agua dentro de la red cristalina",
          "Tiene una proporción fija de agua por fórmula",
          "Se escribe con un punto, como CuSO4·5H2O",
          "A menudo más colorido, como el sulfato de cobre azul",
          "Pierde agua al calentarse",
        ],
        pros_b: [
          "No contiene agua de cristalización",
          "Se forma calentando un hidrato",
          "A menudo de un color distinto al del hidrato",
          "Puede absorber agua y volver a ser un hidrato",
          "Ejemplo: sulfato de cobre anhidro blanco",
        ],
        verdict:
          "Un hidrato lleva una cantidad fija de agua encerrada en sus cristales, mientras que un compuesto anhidro no tiene ninguna. Calentar expulsa el agua; la exposición a la humedad puede devolverla.",
        faq: [
          {
            q: "¿Cómo hago un compuesto anhidro?",
            a: "Calienta el hidrato para expulsar el agua de cristalización.",
          },
          {
            q: "¿Por qué el sulfato de cobre cambia de color?",
            a: "El sulfato de cobre hidratado es azul, mientras que la forma anhidra es blanca.",
          },
          {
            q: "¿Es fija la cantidad de agua en un hidrato?",
            a: "Sí. Cada hidrato tiene una proporción definida de moléculas de agua por unidad de fórmula.",
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
      es: {
        title: "Agente oxidante vs Agente reductor comparados",
        h1: "Agente oxidante vs Agente reductor explicados",
        description:
          "Un agente oxidante gana electrones y se reduce; un agente reductor pierde electrones y se oxida. Compara ambos.",
        intro:
          "Cada reacción redox tiene un agente oxidante y un agente reductor. Provocan un cambio el uno en el otro mientras experimentan ellos mismos lo contrario.",
        pros_a: [
          "Causa la oxidación en otra especie",
          "Acepta electrones él mismo",
          "Se reduce durante la reacción",
          "A menudo ávido de electrones, como el oxígeno o los halógenos",
          "Ejemplos: oxígeno, cloro, permanganato de potasio",
        ],
        pros_b: [
          "Causa la reducción en otra especie",
          "Dona electrones él mismo",
          "Se oxida durante la reacción",
          "A menudo metales o especies ricas en hidrógeno",
          "Ejemplos: hidrógeno, carbono, metales reactivos",
        ],
        verdict:
          "Un agente oxidante atrapa electrones y se reduce; un agente reductor cede electrones y se oxida. Son compañeros que siempre aparecen juntos en las reacciones redox.",
        faq: [
          {
            q: "¿Qué le ocurre a un agente oxidante?",
            a: "Acepta electrones y se reduce él mismo durante la reacción.",
          },
          {
            q: "¿Cómo reconozco un agente reductor?",
            a: "Dona electrones y se oxida; los metales reactivos son ejemplos comunes.",
          },
          {
            q: "¿Puede una reacción tener solo uno de ellos?",
            a: "No. Las reacciones redox siempre emparejan un agente oxidante con un agente reductor.",
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
      es: {
        title: "Electrolito vs No electrolito comparados",
        h1: "Electrolito vs No electrolito explicados",
        description:
          "Un electrolito conduce la electricidad cuando se disuelve; un no electrolito no. Compara estos dos tipos de disolución.",
        intro:
          "Que una sustancia disuelta conduzca la electricidad depende de si forma iones. Eso decide entre electrolito y no electrolito.",
        pros_a: [
          "Conduce la electricidad cuando se disuelve o se funde",
          "Se separa en iones de libre movimiento en agua",
          "Incluye los compuestos iónicos y los ácidos fuertes",
          "Fuerte o débil según la ionización",
          "Ejemplos: sal, ácido clorhídrico",
        ],
        pros_b: [
          "No conduce la electricidad en disolución",
          "Se disuelve como moléculas neutras, no como iones",
          "Normalmente compuestos covalentes moleculares",
          "Sin cargas libres que transporten la corriente",
          "Ejemplos: azúcar, etanol, glucosa",
        ],
        verdict:
          "Los electrolitos liberan iones y conducen la electricidad en disolución, mientras que los no electrolitos se disuelven como moléculas neutras y no lo hacen. La formación de iones es el factor decisivo.",
        faq: [
          {
            q: "¿Por qué el agua salada conduce la electricidad?",
            a: "La sal es un electrolito que se separa en iones móviles capaces de transportar la corriente.",
          },
          {
            q: "¿Es el agua azucarada un electrolito?",
            a: "No. El azúcar se disuelve como moléculas neutras, así que el agua azucarada es un no electrolito.",
          },
          {
            q: "¿Qué es un electrolito débil?",
            a: "Una sustancia que solo se ioniza parcialmente, así que conduce la electricidad débilmente.",
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
      es: {
        title: "Evaporación vs Ebullición: de líquido a gas",
        h1: "Evaporación vs Ebullición explicadas",
        description:
          "La evaporación ocurre en la superficie a cualquier temperatura; la ebullición ocurre en toda la masa en el punto de ebullición. Compara ambas.",
        intro:
          "Ambas convierten el líquido en gas, pero difieren en dónde ocurren y en qué temperatura necesitan.",
        pros_a: [
          "Ocurre solo en la superficie del líquido",
          "Sucede a cualquier temperatura",
          "Un proceso lento y gradual",
          "Causa el enfriamiento del líquido restante",
          "Ejemplo: un charco secándose",
        ],
        pros_b: [
          "Ocurre en todo el líquido",
          "Sucede solo en el punto de ebullición",
          "Un proceso rápido con formación de burbujas",
          "La temperatura se mantiene constante mientras hierve",
          "Ejemplo: agua burbujeando en un hervidor",
        ],
        verdict:
          "La evaporación es un proceso lento de superficie a cualquier temperatura, mientras que la ebullición es un proceso rápido de toda la masa fijado en el punto de ebullición. Ambas convierten el líquido en vapor.",
        faq: [
          {
            q: "¿Puede un líquido evaporarse por debajo de su punto de ebullición?",
            a: "Sí. La evaporación sucede a cualquier temperatura, solo en la superficie.",
          },
          {
            q: "¿Por qué se forman burbujas durante la ebullición?",
            a: "El vapor se forma en todo el líquido, creando burbujas que suben a la superficie.",
          },
          {
            q: "¿Sube la temperatura mientras hierve?",
            a: "No. La temperatura se mantiene en el punto de ebullición hasta que todo el líquido se ha vaporizado.",
          },
        ],
      },
    },
    updatedAt: "2026-05-20",
  },
];
