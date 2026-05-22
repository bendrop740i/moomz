import type { VsPair } from "../types";

export const pairs: VsPair[] = [
  {
    slug: "acid-vs-base", a: "Acid", b: "Base",
    category: "chemistry", emoji_a: "🧪", emoji_b: "🧪",
    content: {
      pt: {
        title: "Ácido vs Base: pH, propriedades e exemplos",
        h1: "Ácido vs Base — como distinguir os dois",
        description: "Ácidos doam prótons e têm sabor azedo; bases aceitam prótons e são escorregadias ao toque. Compare pH, reações e exemplos do dia a dia.",
        intro: "Ácidos e bases ficam em extremos opostos da escala de pH, mas ambos são essenciais para a química e para a vida. Entender como cada um se comporta ajuda a prever reações e interpretar testes de papel de tornassol.",
        pros_a: [
          "Doa íons H+ em solução aquosa",
          "pH abaixo de 7",
          "Sabor azedo e torna o tornassol vermelho",
          "Reage com metais liberando hidrogênio",
          "Exemplos: HCl, vinagre, ácido cítrico"
        ],
        pros_b: [
          "Aceita H+ ou doa íons OH-",
          "pH acima de 7",
          "Sensação escorregadia, torna o tornassol azul",
          "Reage com ácidos formando sal e água",
          "Exemplos: NaOH, amônia, bicarbonato de sódio"
        ],
        verdict: "Ácidos e bases são opostos químicos que se neutralizam. Use o pH para classificá-los: abaixo de 7 é ácido, acima de 7 é básico e exatamente 7 é neutro.",
        faq: [
          { q: "O que acontece quando um ácido encontra uma base?", a: "Ocorre uma reação de neutralização, formando um sal e água e deslocando o pH em direção a 7." },
          { q: "Como testar se uma substância é ácido ou base?", a: "O papel de tornassol é o teste mais simples: ácidos o tornam vermelho e bases o tornam azul. Um pHmetro fornece um valor preciso." },
          { q: "A água é ácido ou base?", a: "A água pura é neutra com pH 7; ela pode agir tanto como ácido fraco quanto como base fraca, propriedade chamada de anfótera." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "strong-acid-vs-weak-acid", a: "Strong acid", b: "Weak acid",
    category: "chemistry", emoji_a: "🧪", emoji_b: "🧪",
    content: {
      pt: {
        title: "Ácido Forte vs Ácido Fraco: diferenças essenciais",
        h1: "Ácido Forte vs Ácido Fraco explicados",
        description: "Ácidos fortes ionizam completamente na água; ácidos fracos ionizam apenas parcialmente. Compare dissociação, pH e exemplos para química.",
        intro: "A força de um ácido diz respeito à extensão da sua ionização, não à sua concentração. Essa distinção determina o pH, a condutividade e a velocidade de reação.",
        pros_a: [
          "Ioniza 100% em água",
          "pH muito baixo na mesma concentração",
          "Alta condutividade elétrica",
          "Reação essencialmente irreversível",
          "Exemplos: HCl, HNO3, H2SO4"
        ],
        pros_b: [
          "Ioniza apenas parcialmente em água",
          "pH mais alto que o ácido forte na mesma concentração",
          "Menor condutividade",
          "Estabelece um equilíbrio (reversível)",
          "Exemplos: ácido acético, ácido carbônico, HF"
        ],
        verdict: "Ácidos fortes se dissociam completamente; ácidos fracos estabelecem um equilíbrio. Força é diferente de concentração: um ácido forte diluído pode ter efeito menor do que um ácido fraco concentrado.",
        faq: [
          { q: "Forte significa concentrado?", a: "Não. Força refere-se ao grau de ionização; concentração refere-se à quantidade por volume. São propriedades independentes." },
          { q: "Por que ácidos fracos têm um valor Ka?", a: "Como ionizam apenas parcialmente, a constante de equilíbrio Ka quantifica o quanto a dissociação avança." },
          { q: "Qual conduz melhor a eletricidade?", a: "O ácido forte, porque a ionização completa fornece muito mais íons livres para conduzir a corrente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "ph-vs-poh", a: "pH", b: "pOH",
    category: "chemistry", emoji_a: "🧪", emoji_b: "🧪",
    content: {
      pt: {
        title: "pH vs pOH: medindo acidez e basicidade",
        h1: "pH vs pOH — dois lados da mesma escala",
        description: "O pH rastreia íons hidrogênio; o pOH rastreia íons hidróxido, e os dois sempre somam 14. Compare fórmulas e usos na química.",
        intro: "pH e pOH são escalas complementares que descrevem a mesma solução. Entender a relação entre eles torna os cálculos de ácido-base muito mais rápidos.",
        pros_a: [
          "Mede a concentração de íons H+",
          "pH = -log[H+]",
          "Valor menor significa mais ácido",
          "Escala mais usada no cotidiano",
          "Varia de 0 a 14 em água a 25 °C"
        ],
        pros_b: [
          "Mede a concentração de íons OH-",
          "pOH = -log[OH-]",
          "Valor menor significa mais básico",
          "Útil para cálculos com bases",
          "Sempre igual a 14 menos o pH a 25 °C"
        ],
        verdict: "pH e pOH descrevem o mesmo equilíbrio por ângulos opostos. Como pH + pOH = 14 em água a 25 °C, conhecer um deles dá o outro instantaneamente.",
        faq: [
          { q: "Por que pH e pOH somam 14?", a: "Porque o produto iônico da água Kw é 1×10⁻¹⁴ a 25 °C, então os logaritmos de [H+] e [OH-] somam 14." },
          { q: "Qual é usado com mais frequência?", a: "O pH é muito mais comum em laboratórios e no dia a dia, mas o pOH simplifica muitos cálculos de força de bases." },
          { q: "A soma permanece 14 em todas as temperaturas?", a: "Não. Kw varia com a temperatura, então pH + pOH só é exatamente 14 a 25 °C." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "ionic-bond-vs-covalent-bond", a: "Ionic bond", b: "Covalent bond",
    category: "chemistry", emoji_a: "⚛️", emoji_b: "🔗",
    content: {
      pt: {
        title: "Ligação Iônica vs Covalente: comparação completa",
        h1: "Ligação Iônica vs Covalente explicadas",
        description: "Ligações iônicas transferem elétrons; ligações covalentes os compartilham. Compare formação, pontos de fusão e exemplos.",
        intro: "As ligações químicas mantêm a matéria unida, e os dois principais tipos diferem na forma como os elétrons são tratados. Isso define se uma substância é um sal frágil ou um gás maleável.",
        pros_a: [
          "Elétrons transferidos do metal para o não-metal",
          "Forma íons com cargas opostas atraídas entre si",
          "Pontos de fusão e ebulição elevados",
          "Conduz eletricidade quando fundido ou dissolvido",
          "Exemplos: NaCl, MgO, CaF2"
        ],
        pros_b: [
          "Elétrons compartilhados entre não-metais",
          "Forma moléculas neutras discretas",
          "Em geral, pontos de fusão mais baixos",
          "Normalmente não conduz eletricidade",
          "Exemplos: H2O, CO2, CH4"
        ],
        verdict: "Ligações iônicas surgem entre metais e não-metais por transferência de elétrons; ligações covalentes surgem entre não-metais por compartilhamento. A diferença de eletronegatividade prevê qual tipo se forma.",
        faq: [
          { q: "Como prever o tipo de ligação?", a: "Compare as eletronegatividades: uma grande diferença favorece a ligação iônica, uma pequena favorece a covalente." },
          { q: "Por que compostos iônicos são frágeis?", a: "Deslocar a rede alinha cargas iguais, que se repelem e rompem o cristal." },
          { q: "Uma ligação pode ser parcialmente os dois tipos?", a: "Sim. Ligações covalentes polares compartilham elétrons de forma desigual, ficando entre o puramente iônico e o puramente covalente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "covalent-bond-vs-metallic-bond", a: "Covalent bond", b: "Metallic bond",
    category: "chemistry", emoji_a: "🔗", emoji_b: "🪙",
    content: {
      pt: {
        title: "Ligação Covalente vs Metálica: comparação",
        h1: "Ligação Covalente vs Metálica explicadas",
        description: "Ligações covalentes compartilham pares de elétrons entre átomos; ligações metálicas distribuem elétrons por uma rede. Compare as propriedades.",
        intro: "Ambas as ligações envolvem elétrons compartilhados, mas a forma como esses elétrons se movem as diferencia. Uma dá origem a moléculas isolantes; a outra, a condutores brilhantes.",
        pros_a: [
          "Elétrons compartilhados em pares localizados fixos",
          "Forma moléculas ou redes covalentes",
          "Geralmente mau condutor de eletricidade",
          "Encontrada entre átomos de não-metais",
          "Exemplos: O2, diamante, SiO2"
        ],
        pros_b: [
          "Elétrons deslocalizados em um mar compartilhado",
          "Mantém uma rede de íons metálicos positivos",
          "Excelente condutor de calor e eletricidade",
          "Maleável e dúctil",
          "Exemplos: ferro, cobre, alumínio"
        ],
        verdict: "Ligações covalentes prendem os elétrons entre átomos específicos, enquanto ligações metálicas deixam os elétrons circular livremente. Essa mobilidade explica por que os metais conduzem e se dobram sem quebrar.",
        faq: [
          { q: "Por que os metais são maleáveis, mas sólidos covalentes são frágeis?", a: "O mar de elétrons permite que as camadas metálicas deslizem, enquanto ligações covalentes fixas se rompem quando os átomos se deslocam." },
          { q: "Qual conduz eletricidade?", a: "A ligação metálica conduz bem porque elétrons deslocalizados se movem livremente; a maioria das substâncias covalentes não conduz." },
          { q: "Sólidos de rede covalente são resistentes?", a: "Sim. Estruturas covalentes gigantes como o diamante são extremamente duras e têm pontos de fusão muito elevados." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "polar-vs-nonpolar", a: "Polar", b: "Nonpolar",
    category: "chemistry", emoji_a: "🧲", emoji_b: "⚪",
    content: {
      pt: {
        title: "Moléculas Polares vs Apolares: comparação",
        h1: "Moléculas Polares vs Apolares explicadas",
        description: "Moléculas polares têm carga desigual e se dissolvem em água; moléculas apolares são simétricas. Compare ligações e solubilidade.",
        intro: "A polaridade decide se uma molécula se mistura com água ou óleo. Ela depende das diferenças de eletronegatividade e da forma da molécula.",
        pros_a: [
          "Distribuição desigual de elétrons, possui dipolo",
          "Forma molecular assimétrica",
          "Dissolve-se em água e solventes polares",
          "Pontos de ebulição mais altos pelas forças de dipolo",
          "Exemplos: H2O, NH3, HCl"
        ],
        pros_b: [
          "Distribuição uniforme de elétrons, sem dipolo líquido",
          "Forma molecular simétrica",
          "Dissolve-se em óleos e solventes apolares",
          "Pontos de ebulição mais baixos, forças de dispersão fracas",
          "Exemplos: O2, CO2, CH4"
        ],
        verdict: "Moléculas polares carregam cargas parciais e seguem o princípio 'semelhante dissolve semelhante' com a água; moléculas apolares permanecem simétricas e se misturam com óleos. A forma importa tanto quanto o tipo de ligação.",
        faq: [
          { q: "Uma molécula pode ter ligações polares e ainda ser apolar?", a: "Sim. O CO2 tem ligações polares, mas sua simetria linear cancela os dipolos, tornando a molécula apolar." },
          { q: "Por que óleo não se mistura com água?", a: "O óleo é apolar e a água é polar; suas forças intermoleculares diferentes impedem a mistura." },
          { q: "Como avaliar a polaridade?", a: "Verifique as diferenças de eletronegatividade nas ligações e se a geometria molecular é simétrica." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "hydrogen-bond-vs-dipole-dipole", a: "Hydrogen bond", b: "Dipole-dipole",
    category: "chemistry", emoji_a: "💧", emoji_b: "🧲",
    content: {
      pt: {
        title: "Ligação de Hidrogênio vs Força Dipolo-Dipolo",
        h1: "Ligação de Hidrogênio vs Dipolo-Dipolo explicadas",
        description: "Ligações de hidrogênio são forças de dipolo especialmente fortes com N, O ou F. Compare a intensidade e os efeitos com o dipolo-dipolo comum.",
        intro: "Ambas são atrações intermoleculares entre moléculas polares, mas a ligação de hidrogênio é um caso especial mais forte. Ela explica as propriedades incomuns da água.",
        pros_a: [
          "Atração intermolecular mais forte (não-iônica)",
          "Exige H ligado a N, O ou F",
          "Eleva os pontos de ebulição de forma dramática",
          "Explica o alto ponto de ebulição da água e a densidade do gelo",
          "Exemplos: água, pareamento de bases do DNA, NH3"
        ],
        pros_b: [
          "Mais fraca que a ligação de hidrogênio",
          "Ocorre entre quaisquer moléculas polares",
          "Alinha extremidades parcialmente positivas e negativas",
          "Eleva moderadamente os pontos de ebulição",
          "Exemplos: HCl, acetona, SO2"
        ],
        verdict: "A ligação de hidrogênio é apenas um subtipo mais poderoso da interação dipolo-dipolo, restrito a N-H, O-H e F-H. Ambas aproximam moléculas polares, mas as ligações de hidrogênio vencem em intensidade.",
        faq: [
          { q: "A ligação de hidrogênio é uma ligação química real?", a: "Não. É uma forte força intermolecular, mais fraca do que as ligações covalentes ou iônicas dentro das moléculas." },
          { q: "Por que o gelo flutua na água?", a: "As ligações de hidrogênio travam as moléculas de água em uma rede hexagonal aberta, menos densa do que a água líquida." },
          { q: "Qual é mais forte?", a: "As ligações de hidrogênio são mais fortes devido à carga altamente concentrada nos pequenos átomos de N, O e F." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "soluble-vs-insoluble", a: "Soluble", b: "Insoluble",
    category: "chemistry", emoji_a: "💧", emoji_b: "🪨",
    content: {
      pt: {
        title: "Solúvel vs Insolúvel: solubilidade explicada",
        h1: "Substâncias Solúveis vs Insolúveis",
        description: "Substâncias solúveis se dissolvem em um solvente; as insolúveis não. Compare regras de solubilidade e exemplos para química.",
        intro: "A solubilidade descreve se uma substância consegue se dissolver em um determinado solvente. Depende de forças intermoleculares, temperatura e natureza química.",
        pros_a: [
          "Dissolve-se formando uma solução homogênea",
          "As partículas se dispersam uniformemente no solvente",
          "Frequentemente segue o princípio 'semelhante dissolve semelhante'",
          "A solubilidade geralmente aumenta com a temperatura",
          "Exemplos: sal e açúcar em água"
        ],
        pros_b: [
          "Não se dissolve apreciavelmente no solvente",
          "Permanece como sólido separado ou camada distinta",
          "Pode ser separado por filtração",
          "Forma suspensões, não soluções verdadeiras",
          "Exemplos: areia e giz em água"
        ],
        verdict: "Substâncias solúveis desaparecem na solução enquanto as insolúveis permanecem visivelmente separadas. O resultado depende da compatibilidade de polaridade entre soluto e solvente.",
        faq: [
          { q: "Solubilidade é tudo ou nada?", a: "Não. As substâncias variam de muito solúveis a pouco solúveis a praticamente insolúveis." },
          { q: "Como a temperatura afeta a solubilidade?", a: "A maioria dos sólidos dissolve melhor quando aquecida, enquanto os gases geralmente se dissolvem melhor no frio." },
          { q: "Como separar um sólido insolúvel?", a: "A filtração retém o sólido insolúvel enquanto o solvente passa." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "alkane-vs-alkene", a: "Alkane", b: "Alkene",
    category: "chemistry", emoji_a: "🛢️", emoji_b: "🔥",
    content: {
      pt: {
        title: "Alcano vs Alceno: diferenças entre hidrocarbonetos",
        h1: "Alcano vs Alceno explicados",
        description: "Alcanos têm apenas ligações C-C simples; alcenos contêm uma dupla ligação C=C. Compare fórmulas, reatividade e exemplos.",
        intro: "Alcanos e alcenos são hidrocarbonetos, mas diferem em saturação. Aquela única ligação dupla transforma completamente a reatividade.",
        pros_a: [
          "Apenas ligações carbono-carbono simples (saturado)",
          "Fórmula geral CnH2n+2",
          "Relativamente inerte, sofre substituição",
          "Queima de forma limpa como combustível",
          "Exemplos: metano, etano, propano"
        ],
        pros_b: [
          "Contém ao menos uma dupla ligação C=C (insaturado)",
          "Fórmula geral CnH2n",
          "Reativo, sofre reações de adição",
          "Descolore a água de bromo",
          "Exemplos: eteno, propeno, buteno"
        ],
        verdict: "Alcanos são saturados e pouco reativos; alcenos são insaturados e muito mais reativos graças à dupla ligação. O teste com água de bromo os distingue na hora.",
        faq: [
          { q: "Como distinguir um alcano de um alceno?", a: "Adicione água de bromo: o alceno a descolore rapidamente, enquanto o alcano não reage." },
          { q: "Por que alcenos são mais reativos?", a: "A dupla ligação C=C possui uma nuvem de elétrons pi exposta que ataca reagentes com facilidade." },
          { q: "Qual reação os alcenos sofrem?", a: "Reações de adição, nas quais átomos se adicionam à dupla ligação convertendo-a em ligação simples." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "alkene-vs-alkyne", a: "Alkene", b: "Alkyne",
    category: "chemistry", emoji_a: "🔥", emoji_b: "⚡",
    content: {
      pt: {
        title: "Alceno vs Alcino: dupla vs tripla ligação",
        h1: "Alceno vs Alcino explicados",
        description: "Alcenos têm uma dupla ligação C=C; alcinos têm uma tripla ligação C≡C. Compare fórmulas, força de ligação e reatividade.",
        intro: "Alcenos e alcinos são hidrocarbonetos insaturados. O número de ligações entre os carbonos muda a geometria e a reatividade.",
        pros_a: [
          "Contém uma dupla ligação C=C",
          "Fórmula geral CnH2n",
          "Geometria plana ao redor da dupla ligação",
          "Sofre reações de adição",
          "Exemplos: eteno, propeno"
        ],
        pros_b: [
          "Contém uma tripla ligação C≡C",
          "Fórmula geral CnH2n-2",
          "Geometria linear ao redor da tripla ligação",
          "Mais insaturado, pode sofrer duas adições",
          "Exemplos: etino (acetileno), propino"
        ],
        verdict: "Alcenos têm um grau de insaturação por dupla ligação; alcinos têm dois por tripla ligação. Alcinos são mais lineares e podem sofrer duas adições sucessivas.",
        faq: [
          { q: "Qual tem maior grau de insaturação?", a: "O alcino, porque uma tripla ligação conta como dois graus de insaturação, contra um da dupla." },
          { q: "Qual forma tem um alcino?", a: "Os carbonos com tripla ligação são lineares, com ângulos de 180°." },
          { q: "Um alcino pode se tornar um alcano?", a: "Sim. Adicionando hidrogênio duas vezes, a tripla ligação vira dupla e depois simples." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "aromatic-vs-aliphatic", a: "Aromatic", b: "Aliphatic",
    category: "chemistry", emoji_a: "🔵", emoji_b: "📏",
    content: {
      pt: {
        title: "Compostos Aromáticos vs Alifáticos: comparação",
        h1: "Compostos Aromáticos vs Alifáticos explicados",
        description: "Compostos aromáticos contêm sistemas de anéis estáveis como o benzeno; os alifáticos têm cadeias abertas ou anéis não-aromáticos. Compare os dois.",
        intro: "Os compostos orgânicos se dividem em famílias aromáticas e alifáticas. A característica definidora é a presença de um anel especial com elétrons deslocalizados.",
        pros_a: [
          "Contém um anel deslocalizado semelhante ao benzeno",
          "Estabilidade extra pela deslocalização eletrônica",
          "Prefere substituição para preservar o anel",
          "Frequentemente tem odor característico",
          "Exemplos: benzeno, tolueno, naftaleno"
        ],
        pros_b: [
          "Cadeias abertas ou anéis não-aromáticos",
          "Sem estabilização especial por anel",
          "Inclui alcanos, alcenos e alcinos",
          "Sofre adição ou substituição",
          "Exemplos: hexano, eteno, ciclo-hexano"
        ],
        verdict: "Compostos aromáticos devem sua estabilidade a um anel de elétrons pi deslocalizados; os alifáticos não possuem isso. Essa estabilidade faz os aromáticos resistirem às reações de adição.",
        faq: [
          { q: "O que torna um anel aromático?", a: "Deve ser cíclico, plano, totalmente conjugado e obedecer à regra de Hückel (4n+2 elétrons pi)." },
          { q: "O ciclo-hexano é aromático?", a: "Não. É um anel saturado sem sistema pi deslocalizado, portanto é alifático." },
          { q: "Por que aromáticos preferem substituição?", a: "A substituição mantém o anel aromático estável intacto, enquanto a adição o destruiria." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "cis-isomer-vs-trans-isomer", a: "Cis isomer", b: "Trans isomer",
    category: "chemistry", emoji_a: "🔀", emoji_b: "↔️",
    content: {
      pt: {
        title: "Isômero Cis vs Trans: isomeria geométrica",
        h1: "Isômero Cis vs Trans explicados",
        description: "Isômeros cis têm grupos no mesmo lado da dupla ligação; trans têm nos lados opostos. Compare as propriedades.",
        intro: "Isômeros cis e trans são isômeros geométricos com a mesma fórmula mas arranjo 3D diferente. A dupla ligação os mantém fixos.",
        pros_a: [
          "Grupos idênticos no mesmo lado da ligação",
          "Frequentemente polar, com dipolo resultante",
          "Geralmente ponto de fusão mais baixo",
          "Empacotamento menos simétrico",
          "Exemplo: cis-2-buteno"
        ],
        pros_b: [
          "Grupos idênticos em lados opostos",
          "Frequentemente apolar, dipolos se cancelam",
          "Geralmente ponto de fusão mais alto",
          "Mais simétrico, se empacota com eficiência",
          "Exemplo: trans-2-buteno"
        ],
        verdict: "Os isômeros cis e trans diferem apenas na geometria ao redor de uma dupla ligação rígida, mas isso muda a polaridade e o ponto de fusão. O trans geralmente se empacota melhor e funde a temperatura mais alta.",
        faq: [
          { q: "Por que cis e trans não se interconvertem livremente?", a: "A dupla ligação não pode girar, então os dois arranjos ficam travados a menos que a ligação se rompa." },
          { q: "Qual tem o ponto de fusão mais alto?", a: "O isômero trans, porque sua forma simétrica se empacota de forma mais compacta no sólido." },
          { q: "Eles têm a mesma fórmula molecular?", a: "Sim. São isômeros, então a fórmula é idêntica e apenas o arranjo espacial difere." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "enantiomer-vs-diastereomer", a: "Enantiomer", b: "Diastereomer",
    category: "chemistry", emoji_a: "🪞", emoji_b: "🧩",
    content: {
      pt: {
        title: "Enantiômero vs Diastereoisômero: estereoisômeros",
        h1: "Enantiômero vs Diastereoisômero explicados",
        description: "Enantiômeros são imagens especulares não-sobreponíveis; diastereoisômeros são estereoisômeros que não são imagens especulares. Compare os dois.",
        intro: "Estereoisômeros compartilham a conectividade, mas diferem no arranjo 3D. Enantiômeros e diastereoisômeros são as duas categorias principais.",
        pros_a: [
          "Imagens especulares não-sobreponíveis",
          "Propriedades físicas idênticas (exceto rotação óptica)",
          "Giram a luz polarizada em direções opostas",
          "Diferem em todos os estereocentros",
          "Exemplo: D- e L-alanina"
        ],
        pros_b: [
          "Estereoisômeros que não são imagens especulares",
          "Propriedades físicas diferentes (pf, pe, solubilidade)",
          "Podem ser separados por métodos comuns",
          "Diferem em alguns, mas não todos os estereocentros",
          "Exemplo: isômeros cis/trans, açúcares"
        ],
        verdict: "Enantiômeros são imagens especulares perfeitas com propriedades idênticas; diastereoisômeros diferem em apenas alguns estereocentros e se comportam de forma diferente. A distinção é crucial no design de medicamentos.",
        faq: [
          { q: "Como enantiômeros e diastereoisômeros diferem?", a: "Enantiômeros são imagens especulares que diferem em todos os estereocentros; diastereoisômeros diferem apenas em alguns." },
          { q: "É fácil separar enantiômeros?", a: "Não por métodos comuns, pois suas propriedades físicas são idênticas; técnicas quirais são necessárias." },
          { q: "Por que enantiômeros importam em medicina?", a: "Um enantiômero de um fármaco pode ser ativo enquanto sua imagem especular é inativa ou prejudicial." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "sn1-vs-sn2", a: "SN1", b: "SN2",
    category: "chemistry", emoji_a: "1️⃣", emoji_b: "2️⃣",
    content: {
      pt: {
        title: "SN1 vs SN2: substituição nucleofílica",
        h1: "Mecanismos de Reação SN1 vs SN2",
        description: "SN1 é uma reação em duas etapas via carbocátion; SN2 é um ataque traseiro em uma única etapa. Compare taxa, estereoquímica e substratos.",
        intro: "SN1 e SN2 são os dois mecanismos principais de substituição nucleofílica. A escolha entre eles depende do substrato, do nucleófilo e do solvente.",
        pros_a: [
          "Mecanismo em duas etapas via carbocátion",
          "Taxa depende apenas do substrato",
          "Favorecido por substratos terciários",
          "Produz mistura racêmica",
          "Prefere solventes próticos polares"
        ],
        pros_b: [
          "Ataque traseiro concertado em uma única etapa",
          "Taxa depende do substrato e do nucleófilo",
          "Favorecido por substratos primários",
          "Causa inversão de configuração",
          "Prefere solventes apróticos polares"
        ],
        verdict: "SN1 passa por um carbocátion e gera racemização; SN2 é concertado e inverte o estereocentro. O tipo de substrato é o indicador mais forte de qual mecanismo predomina.",
        faq: [
          { q: "Qual mecanismo os haletos terciários favorecem?", a: "SN1, porque carbocátions terciários são estabilizados enquanto o volume estérico bloqueia o ataque traseiro do SN2." },
          { q: "O que acontece com a estereoquímica no SN2?", a: "A configuração se inverte, como um guarda-chuva virando ao vento." },
          { q: "Como o solvente afeta a escolha?", a: "Solventes próticos polares favorecem SN1; solventes apróticos polares favorecem SN2." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "e1-vs-e2", a: "E1", b: "E2",
    category: "chemistry", emoji_a: "1️⃣", emoji_b: "2️⃣",
    content: {
      pt: {
        title: "E1 vs E2: mecanismos de eliminação",
        h1: "Mecanismos de Reação E1 vs E2 explicados",
        description: "Eliminações E1 passam por um carbocátion em duas etapas; eliminações E2 são concertadas em uma etapa. Compare taxa e condições.",
        intro: "E1 e E2 são os dois principais mecanismos de eliminação que formam alcenos removendo átomos. As condições determinam qual caminho prevalece.",
        pros_a: [
          "Mecanismo em duas etapas via carbocátion",
          "Taxa depende apenas do substrato",
          "Favorecido por substratos terciários",
          "Usa bases fracas e calor",
          "Pode gerar produtos rearranjados"
        ],
        pros_b: [
          "Eliminação concertada em uma única etapa",
          "Taxa depende do substrato e da base",
          "Funciona com substratos primários e secundários",
          "Requer uma base forte, geralmente volumosa",
          "Geometria anti-periplanar necessária"
        ],
        verdict: "E1 procede via carbocátion com base fraca; E2 é um processo concertado em uma etapa que requer base forte. Ambos formam alcenos, mas diferem na lei de velocidade e estereoquímica.",
        faq: [
          { q: "Qual base o E2 precisa?", a: "Uma base forte como hidróxido ou alcóxido que possa retirar um próton na etapa concertada." },
          { q: "Por que o E1 pode gerar produtos rearranjados?", a: "Seu intermediário carbocátion pode migrar para uma posição mais estável antes da eliminação." },
          { q: "Qual geometria o E2 exige?", a: "O grupo abandonador e o próton devem ser anti-periplanares, em lados opostos da ligação." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "oxidation-vs-reduction", a: "Oxidation", b: "Reduction",
    category: "chemistry", emoji_a: "🔥", emoji_b: "❄️",
    content: {
      pt: {
        title: "Oxidação vs Redução: reações redox explicadas",
        h1: "Oxidação vs Redução em Reações Redox",
        description: "Oxidação é perda de elétrons; redução é ganho de elétrons. Compare as duas metades de toda reação redox.",
        intro: "Oxidação e redução sempre ocorrem juntas em uma reação redox. O mnemônico OIL RIG (em inglês) mantém clara a direção do fluxo de elétrons.",
        pros_a: [
          "Perda de elétrons pela espécie",
          "Número de oxidação aumenta",
          "Frequentemente envolve ganho de oxigênio",
          "A espécie oxidada é o agente redutor",
          "Exemplo: ferrugem de metais"
        ],
        pros_b: [
          "Ganho de elétrons pela espécie",
          "Número de oxidação diminui",
          "Frequentemente envolve perda de oxigênio",
          "A espécie reduzida é o agente oxidante",
          "Exemplo: fundição de minério metálico"
        ],
        verdict: "Oxidação e redução são duas metades da mesma transferência de elétrons. Sempre que uma espécie perde elétrons, outra deve ganhá-los — são inseparáveis.",
        faq: [
          { q: "O que significa LEO GER?", a: "Perda de Elétrons = Oxidação; Ganho de Elétrons = Redução — um jeito fácil de lembrar o sentido redox." },
          { q: "A oxidação pode ocorrer sem a redução?", a: "Não. Elétrons perdidos por uma espécie são sempre ganhos por outra; os dois ocorrem juntos." },
          { q: "O que é um agente oxidante?", a: "Uma substância que causa oxidação em outra ao aceitar seus elétrons, sendo ela própria reduzida." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "anode-vs-cathode", a: "Anode", b: "Cathode",
    category: "chemistry", emoji_a: "➕", emoji_b: "➖",
    content: {
      pt: {
        title: "Ânodo vs Cátodo: eletrodos em eletroquímica",
        h1: "Ânodo vs Cátodo em Eletroquímica",
        description: "A oxidação ocorre no ânodo; a redução ocorre no cátodo. Compare a polaridade em células galvânicas e eletrolíticas.",
        intro: "Toda célula eletroquímica tem dois eletrodos. Saber qual é qual depende da reação, não de um sinal fixo.",
        pros_a: [
          "Eletrodo onde ocorre a oxidação",
          "Negativo em célula galvânica",
          "Positivo em célula eletrolítica",
          "Libera elétrons para o circuito",
          "Ânions migram em sua direção"
        ],
        pros_b: [
          "Eletrodo onde ocorre a redução",
          "Positivo em célula galvânica",
          "Negativo em célula eletrolítica",
          "Recebe elétrons do circuito",
          "Cátions migram em sua direção"
        ],
        verdict: "O ânodo sempre abriga oxidação e o cátodo sempre abriga redução. Os sinais de carga se invertem entre células galvânicas e eletrolíticas, então use a reação para identificá-los.",
        faq: [
          { q: "O ânodo é sempre negativo?", a: "Não. É negativo em célula galvânica, mas positivo em célula eletrolítica." },
          { q: "Como lembrar as reações?", a: "Ânodo = oxidação; Cátodo = redução — basta lembrar que A vem antes de C, assim como oxidação vem antes de redução no processo." },
          { q: "Para onde os cátions migram?", a: "Os cátions sempre se movem em direção ao cátodo, onde ocorre a redução." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "endothermic-vs-exothermic", a: "Endothermic", b: "Exothermic",
    category: "chemistry", emoji_a: "🥶", emoji_b: "🔥",
    content: {
      pt: {
        title: "Reações Endotérmicas vs Exotérmicas",
        h1: "Reações Endotérmicas vs Exotérmicas explicadas",
        description: "Reações endotérmicas absorvem calor; reações exotérmicas liberam calor. Compare diagramas de energia e exemplos.",
        intro: "Reações absorvem ou liberam energia. O sinal da variação de entalpia indica qual dos dois ocorre, e diagramas de energia tornam isso visual.",
        pros_a: [
          "Absorve calor da vizinhança",
          "Variação de entalpia positiva",
          "Produtos têm mais energia do que os reagentes",
          "A vizinhança esfria",
          "Exemplos: fotossíntese, fusão do gelo"
        ],
        pros_b: [
          "Libera calor para a vizinhança",
          "Variação de entalpia negativa",
          "Produtos têm menos energia do que os reagentes",
          "A vizinhança aquece",
          "Exemplos: combustão, neutralização"
        ],
        verdict: "Reações endotérmicas absorvem energia e parecem frias; reações exotérmicas liberam energia e parecem quentes. O sinal de ΔH indica instantaneamente qual categoria se aplica.",
        faq: [
          { q: "Como o sinal de ΔH ajuda?", a: "ΔH positivo significa endotérmico (calor absorvido); ΔH negativo significa exotérmico (calor liberado)." },
          { q: "Por que uma bolsa de gelo instantânea parece fria?", a: "Usa um processo de dissolução endotérmico que absorve calor da sua pele." },
          { q: "A combustão é endo ou exotérmica?", a: "A combustão é fortemente exotérmica, liberando grandes quantidades de calor e luz." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "enthalpy-vs-entropy", a: "Enthalpy", b: "Entropy",
    category: "chemistry", emoji_a: "🌡️", emoji_b: "🌀",
    content: {
      pt: {
        title: "Entalpia vs Entropia: termodinâmica",
        h1: "Entalpia vs Entropia explicadas",
        description: "Entalpia mede o conteúdo de calor; entropia mede a desordem. Compare os dois pilares da termodinâmica.",
        intro: "Entalpia e entropia juntas decidem se uma reação é espontânea. A energia livre de Gibbs combina as duas em uma única previsão.",
        pros_a: [
          "Mede o conteúdo total de calor (H)",
          "Variação ΔH mostra calor absorvido ou liberado",
          "ΔH negativo favorece a espontaneidade",
          "Medida em joules ou kJ/mol",
          "Impulsiona reações exotérmicas"
        ],
        pros_b: [
          "Mede a desordem ou aleatoriedade (S)",
          "Variação ΔS mostra aumento ou diminuição da desordem",
          "ΔS positivo favorece a espontaneidade",
          "Medida em J/(mol·K)",
          "Tende a aumentar no universo"
        ],
        verdict: "Entalpia rastreia calor enquanto entropia rastreia desordem. Nenhuma das duas sozinha prevê a espontaneidade; a energia livre de Gibbs, ΔG = ΔH − TΔS, as combina para o veredicto final.",
        faq: [
          { q: "Qual delas prevê a espontaneidade?", a: "Nenhuma sozinha. A energia livre de Gibbs combina entalpia e entropia: um ΔG negativo significa espontâneo." },
          { q: "A entropia sempre aumenta?", a: "A entropia total do universo aumenta, embora um sistema local possa diminuir em entropia." },
          { q: "Quais unidades cada uma usa?", a: "Entalpia usa kJ/mol; entropia usa J/(mol·K) porque inclui temperatura." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "catalyst-vs-inhibitor", a: "Catalyst", b: "Inhibitor",
    category: "chemistry", emoji_a: "⚡", emoji_b: "🛑",
    content: {
      pt: {
        title: "Catalisador vs Inibidor: taxa de reação",
        h1: "Catalisador vs Inibidor explicados",
        description: "Catalisadores aceleram reações; inibidores as retardam. Compare como cada um altera a energia de ativação e a taxa de reação.",
        intro: "Catalisadores e inibidores influenciam a taxa de reação sem serem consumidos na equação geral. Agem em direções opostas.",
        pros_a: [
          "Acelera a taxa de reação",
          "Reduz a energia de ativação",
          "Não é consumido na reação geral",
          "Fornece um caminho alternativo",
          "Exemplos: enzimas, platina, ferro"
        ],
        pros_b: [
          "Retarda a taxa de reação",
          "Efetivamente eleva a barreira energética",
          "Usado para controlar ou parar reações",
          "Pode bloquear sítios ativos ou intermediários",
          "Exemplos: conservantes, antioxidantes"
        ],
        verdict: "Catalisadores e inibidores são ferramentas opostas para a velocidade de reação. Catalisadores abrem uma rota mais rápida reduzindo a energia de ativação; inibidores retardam ou param uma reação.",
        faq: [
          { q: "Um catalisador é consumido?", a: "Não. Ele é regenerado, portanto não aparece na equação global balanceada." },
          { q: "Como um catalisador acelera uma reação?", a: "Oferece um caminho alternativo com energia de ativação menor, permitindo que mais colisões sejam bem-sucedidas." },
          { q: "Onde os inibidores são úteis?", a: "Na conservação de alimentos, no design de medicamentos e em qualquer processo em que reações devam ser retardadas ou interrompidas." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "galvanic-cell-vs-electrolytic-cell", a: "Galvanic cell", b: "Electrolytic cell",
    category: "chemistry", emoji_a: "🔋", emoji_b: "🔌",
    content: {
      pt: {
        title: "Célula Galvânica vs Eletrolítica: comparação",
        h1: "Célula Galvânica vs Célula Eletrolítica explicadas",
        description: "Célula galvânica gera eletricidade a partir de reação espontânea; célula eletrolítica usa eletricidade para impulsionar uma reação. Compare as duas.",
        intro: "Ambas as células eletroquímicas ligam a química redox à corrente elétrica, mas funcionam em direções opostas de fluxo de energia.",
        pros_a: [
          "Converte energia química em eletricidade",
          "Realiza uma reação redox espontânea",
          "Ânodo é negativo, cátodo é positivo",
          "Alimenta baterias e dispositivos",
          "Exemplo: uma bateria comum"
        ],
        pros_b: [
          "Usa eletricidade para impulsionar uma reação",
          "Força uma reação redox não-espontânea",
          "Ânodo é positivo, cátodo é negativo",
          "Usada para eletrodeposição e refino",
          "Exemplo: eletrólise da água"
        ],
        verdict: "Uma célula galvânica libera energia de uma reação espontânea; uma célula eletrolítica consome energia para forçar uma reação não-espontânea. São processos inversos.",
        faq: [
          { q: "Qual célula produz eletricidade?", a: "A célula galvânica, pois sua reação espontânea libera energia como corrente elétrica." },
          { q: "Por que os sinais dos eletrodos se invertem?", a: "O fluxo de energia é oposto, então ânodo e cátodo trocam a polaridade entre os dois tipos de célula." },
          { q: "Para que serve a eletrólise?", a: "Eletrodeposição, refino de metais e decomposição de compostos como a água em seus elementos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "hydrogen-vs-helium", a: "Hydrogen", b: "Helium",
    category: "chemistry", emoji_a: "🎈", emoji_b: "🪅",
    content: {
      pt: {
        title: "Hidrogênio vs Hélio: comparação de elementos",
        h1: "Hidrogênio vs Hélio explicados",
        description: "Hidrogênio é um não-metal reativo; hélio é um gás nobre inerte. Compare os dois elementos mais leves lado a lado.",
        intro: "Hidrogênio e hélio são os dois primeiros elementos e os mais abundantes no universo, mas sua química não poderia ser mais diferente.",
        pros_a: [
          "Número atômico 1, um elétron",
          "Altamente reativo e inflamável",
          "Forma compostos como água e ácidos",
          "Usado como combustível e na síntese de amônia",
          "Elemento mais abundante no universo"
        ],
        pros_b: [
          "Número atômico 2, camada externa completa",
          "Inerte e não-inflamável",
          "Praticamente não forma compostos",
          "Usado em balões e criogenia",
          "Segundo elemento mais abundante"
        ],
        verdict: "O hidrogênio é leve e reativo, enquanto o hélio é leve e inerte. A diferença de um elétron faz um ser combustível e o outro um gás de sustentação seguro.",
        faq: [
          { q: "Por que o hélio é mais seguro em balões?", a: "O hélio é inerte e não inflamável, enquanto o hidrogênio pode se inflamar de forma explosiva." },
          { q: "Qual é mais abundante?", a: "O hidrogênio é o elemento mais abundante no universo, seguido pelo hélio." },
          { q: "Por que o hélio não reage?", a: "Sua camada de elétrons externa está completa, então não tem tendência a ganhar, perder ou compartilhar elétrons." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "carbon-vs-silicon", a: "Carbon", b: "Silicon",
    category: "chemistry", emoji_a: "💎", emoji_b: "🔋",
    content: {
      pt: {
        title: "Carbono vs Silício: Grupo 14 comparado",
        h1: "Carbono vs Silício explicados",
        description: "O carbono forma a base da vida; o silício sustenta rochas e eletrônicos. Compare esses dois elementos do Grupo 14.",
        intro: "Carbono e silício estão no mesmo grupo e compartilham quatro elétrons de valência, mas constroem mundos completamente diferentes.",
        pros_a: [
          "Número atômico 6, base da química orgânica",
          "Forma cadeias carbono-carbono fortes e estáveis",
          "Faz compostos diversos, incluindo moléculas da vida",
          "Alótropos: diamante, grafite, fulerenos",
          "Forma ligações duplas e triplas estáveis"
        ],
        pros_b: [
          "Número atômico 14, base da química mineral",
          "Forma ligações silício-silício mais fracas",
          "Liga-se prontamente ao oxigênio como silicatos",
          "Semicondutor chave para eletrônicos",
          "Raramente forma ligações duplas estáveis"
        ],
        verdict: "As ligações fortes e versáteis do carbono possibilitam a complexidade da vida; o silício prefere o oxigênio e alimenta rochas e chips. Mesmo grupo, química muito diferente.",
        faq: [
          { q: "Por que o carbono é melhor para a vida?", a: "O carbono forma cadeias fortes e estáveis com múltiplas ligações, permitindo a enorme variedade de moléculas que a vida necessita." },
          { q: "Por que o silício é usado em chips?", a: "O silício é um semicondutor cuja condutividade pode ser ajustada com precisão por dopagem." },
          { q: "Estão no mesmo grupo?", a: "Sim. Ambos estão no Grupo 14 e têm quatro elétrons de valência." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "metal-vs-nonmetal", a: "Metal", b: "Nonmetal",
    category: "chemistry", emoji_a: "🪙", emoji_b: "💨",
    content: {
      pt: {
        title: "Metal vs Não-metal: propriedades dos elementos",
        h1: "Metal vs Não-metal explicados",
        description: "Metais são condutores brilhantes que perdem elétrons; não-metais são isolantes opacos que os ganham. Compare as propriedades físicas e químicas.",
        intro: "A tabela periódica se divide em metais e não-metais com alguns metaloides no meio. Suas propriedades contrastantes moldam toda a química.",
        pros_a: [
          "Brilhantes, maleáveis e dúcteis",
          "Bom condutor de calor e eletricidade",
          "Tende a perder elétrons, forma cátions",
          "Maioria sólida à temperatura ambiente",
          "Exemplos: ferro, cobre, sódio"
        ],
        pros_b: [
          "Opacos e frágeis quando sólidos",
          "Mau condutor, geralmente isolante",
          "Tende a ganhar elétrons, forma ânions",
          "Pode ser sólido, líquido ou gasoso",
          "Exemplos: oxigênio, enxofre, cloro"
        ],
        verdict: "Metais conduzem, brilham e cedem elétrons; não-metais isolam, parecem opacos e capturam elétrons. Juntos formam os compostos iônicos e covalentes do cotidiano.",
        faq: [
          { q: "Onde ficam os metais na tabela periódica?", a: "Os metais ocupam a esquerda e o centro, enquanto os não-metais se concentram no canto superior direito." },
          { q: "Os metais ganham ou perdem elétrons?", a: "Metais perdem elétrons para formar cátions positivos, enquanto não-metais os ganham para formar ânions." },
          { q: "O que é um metaloide?", a: "Um elemento com propriedades intermediárias, como o silício, localizado na fronteira entre metais e não-metais." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "alkali-metal-vs-alkaline-earth-metal", a: "Alkali metal", b: "Alkaline earth metal",
    category: "chemistry", emoji_a: "1️⃣", emoji_b: "2️⃣",
    content: {
      pt: {
        title: "Metal Alcalino vs Metal Alcalino-Terroso: comparação",
        h1: "Metais Alcalinos vs Metais Alcalino-Terrosos",
        description: "Metais alcalinos são Grupo 1 com um elétron de valência; metais alcalino-terrosos são Grupo 2 com dois. Compare reatividade e íons.",
        intro: "Os Grupos 1 e 2 ficam lado a lado na tabela periódica, ambos metais reativos, mas o número de elétrons de valência os diferencia.",
        pros_a: [
          "Grupo 1, um elétron de valência",
          "Forma íons +1",
          "Extremamente reativos, macios e de baixa densidade",
          "Reage violentamente com água",
          "Exemplos: sódio, potássio, lítio"
        ],
        pros_b: [
          "Grupo 2, dois elétrons de valência",
          "Forma íons +2",
          "Reativos, mas mais duros e densos que o Grupo 1",
          "Reage com água mais lentamente",
          "Exemplos: magnésio, cálcio, bário"
        ],
        verdict: "Metais alcalinos perdem um elétron e reagem violentamente; metais alcalino-terrosos perdem dois e são um pouco mais moderados. Ambos ficam mais reativos ao descer no grupo.",
        faq: [
          { q: "Qual grupo é mais reativo?", a: "Os metais alcalinos são geralmente mais reativos porque perder um único elétron é mais fácil." },
          { q: "Que carga carregam seus íons?", a: "Metais alcalinos formam íons +1; metais alcalino-terrosos formam íons +2." },
          { q: "Por que metais alcalinos são guardados em óleo?", a: "Reagem tão rapidamente com ar e água que o óleo os mantém isolados da umidade." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "halogen-vs-noble-gas", a: "Halogen", b: "Noble gas",
    category: "chemistry", emoji_a: "🧪", emoji_b: "💡",
    content: {
      pt: {
        title: "Halogênio vs Gás Nobre: Grupo 17 vs 18",
        h1: "Halogênios vs Gases Nobres explicados",
        description: "Halogênios são não-metais reativos do Grupo 17; gases nobres são elementos inertes do Grupo 18. Compare reatividade e camadas eletrônicas.",
        intro: "Os Grupos 17 e 18 são vizinhos com química oposta. Um anseia por um elétron; o outro já tem a camada completa.",
        pros_a: [
          "Grupo 17, sete elétrons de valência",
          "Não-metais altamente reativos",
          "Ganha um elétron para formar íons -1",
          "Forma sais com metais (haletos)",
          "Exemplos: flúor, cloro, iodo"
        ],
        pros_b: [
          "Grupo 18, camada de valência completa",
          "Inertes e quase sem reatividade",
          "Normalmente não forma íons",
          "Existe como átomos estáveis e isolados",
          "Exemplos: hélio, neônio, argônio"
        ],
        verdict: "Halogênios estão a um elétron da estabilidade e são muito reativos; gases nobres já estão completos e são quase inertes. Ficam numa coluna de distância por isso.",
        faq: [
          { q: "Por que gases nobres não reagem?", a: "Sua camada eletrônica externa já está completa, sem nenhum impulso para ganhar, perder ou compartilhar elétrons." },
          { q: "Por que halogênios são tão reativos?", a: "Precisam de apenas mais um elétron para completar a camada, o que os torna ávidos por reações." },
          { q: "Que íon os halogênios formam?", a: "Halogênios ganham um elétron para formar ânions -1, chamados haletos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "iron-vs-copper", a: "Iron", b: "Copper",
    category: "chemistry", emoji_a: "🔩", emoji_b: "🟤",
    content: {
      pt: {
        title: "Ferro vs Cobre: metais de transição comparados",
        h1: "Ferro vs Cobre explicados",
        description: "O ferro é forte e magnético, mas enferruja; o cobre é excelente condutor e resiste à corrosão. Compare esses dois metais de transição.",
        intro: "Ferro e cobre são metais de transição essenciais. Suas diferentes características os tornam ideais para construção civil ou fiação elétrica.",
        pros_a: [
          "Símbolo Fe, número atômico 26",
          "Forte e ferromagnético",
          "Usado no aço para construção",
          "Corrói formando ferrugem quando exposto à umidade",
          "Essencial na hemoglobina"
        ],
        pros_b: [
          "Símbolo Cu, número atômico 29",
          "Excelente condutor elétrico e térmico",
          "Resiste à corrosão, forma pátina verde",
          "Usado em fios, tubulações e ligas",
          "Superfície naturalmente antimicrobiana"
        ],
        verdict: "O ferro fornece resistência e magnetismo para estruturas; o cobre fornece condutividade de ponta para fiação. O cobre resiste melhor à corrosão; o ferro precisa ser protegido da ferrugem.",
        faq: [
          { q: "Qual conduz melhor a eletricidade?", a: "O cobre é muito melhor condutor, razão pela qual domina a fiação elétrica." },
          { q: "Por que o ferro enferruja mas o cobre não?", a: "O ferro forma óxido de ferro friável, enquanto o cobre forma uma pátina verde protetora que protege o metal." },
          { q: "Algum deles é magnético?", a: "O ferro é fortemente ferromagnético; o cobre é essencialmente não-magnético." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "gold-vs-silver", a: "Gold", b: "Silver",
    category: "chemistry", emoji_a: "🥇", emoji_b: "🥈",
    content: {
      pt: {
        title: "Ouro vs Prata: metais preciosos comparados",
        h1: "Ouro vs Prata explicados",
        description: "O ouro é altamente não-reativo e denso; a prata é o melhor condutor elétrico, mas escurece. Compare esses metais preciosos.",
        intro: "Ouro e prata são metais preciosos valorizados pela beleza e raridade, mas seu comportamento químico difere em aspectos importantes.",
        pros_a: [
          "Símbolo Au, número atômico 79",
          "Extremamente não-reativo, não mancha",
          "Muito denso e altamente maleável",
          "Usado em joias, eletrônicos e moedas",
          "Resiste a ácidos, exceto água-régia"
        ],
        pros_b: [
          "Símbolo Ag, número atômico 47",
          "Melhor condutor elétrico e térmico",
          "Mancha escurecendo com enxofre no ar",
          "Mais barato e abundante que o ouro",
          "Usado em joias, espelhos e contatos elétricos"
        ],
        verdict: "O ouro é o metal mais inerte e valioso, nunca manchando, enquanto a prata conduz melhor mas escurece com o tempo. Cada um se destaca em funções químicas e práticas distintas.",
        faq: [
          { q: "Por que a prata mancha mas o ouro não?", a: "A prata reage com compostos de enxofre no ar formando sulfeto de prata preto; o ouro é inerte demais para isso." },
          { q: "Qual conduz melhor a eletricidade?", a: "A prata é o único melhor condutor de todos os metais, ligeiramente à frente do cobre e do ouro." },
          { q: "O que dissolve o ouro?", a: "A água-régia, mistura de ácido nítrico e clorídrico, é uma das poucas coisas que dissolve o ouro." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "sodium-vs-potassium", a: "Sodium", b: "Potassium",
    category: "chemistry", emoji_a: "🧂", emoji_b: "🍌",
    content: {
      pt: {
        title: "Sódio vs Potássio: metais alcalinos",
        h1: "Sódio vs Potássio explicados",
        description: "Sódio e potássio são metais alcalinos do Grupo 1, mas o potássio é mais reativo. Compare reatividade e funções biológicas.",
        intro: "Sódio e potássio estão no mesmo grupo, ambos macios e reativos, mas avançar no grupo altera seu comportamento.",
        pros_a: [
          "Símbolo Na, número atômico 11",
          "Metal alcalino reativo do Grupo 1",
          "Reage vigorosamente com água",
          "Íon principal no sangue e fluido extracelular",
          "Forma o sal de cozinha, NaCl"
        ],
        pros_b: [
          "Símbolo K, número atômico 19",
          "Mais reativo que o sódio",
          "Reage ainda mais violentamente com água",
          "Íon principal dentro das células do corpo",
          "Encontrado em bananas e fertilizantes"
        ],
        verdict: "O potássio é mais reativo que o sódio porque seu elétron externo está mais afastado do núcleo e é mais fácil de perder. Ambos são eletrólitos vitais que se equilibram no corpo.",
        faq: [
          { q: "Por que o potássio é mais reativo que o sódio?", a: "Seu elétron de valência está mais distante do núcleo e é mantido de forma menos rígida, sendo perdido com mais facilidade." },
          { q: "Como eles diferem no corpo?", a: "O sódio predomina fora das células enquanto o potássio predomina dentro; o equilíbrio conduz os sinais nervosos." },
          { q: "O que acontece quando cada um encontra água?", a: "Ambos reagem liberando hidrogênio, mas o potássio reage mais violentamente, geralmente com chama." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "chlorine-vs-fluorine", a: "Chlorine", b: "Fluorine",
    category: "chemistry", emoji_a: "🟢", emoji_b: "🦷",
    content: {
      pt: {
        title: "Cloro vs Flúor: halogênios comparados",
        h1: "Cloro vs Flúor explicados",
        description: "O flúor é o halogênio mais reativo; o cloro é forte, mas menos agressivo. Compare reatividade e usos lado a lado.",
        intro: "Cloro e flúor são halogênios do Grupo 17, mas o flúor fica acima do cloro na tabela e é ainda mais reativo.",
        pros_a: [
          "Símbolo Cl, número atômico 17",
          "Gás amarelo-esverdeado reativo",
          "Forte oxidante, menos reativo que o flúor",
          "Usado para desinfetar água e fabricar plásticos",
          "Forma íons cloreto em sais"
        ],
        pros_b: [
          "Símbolo F, número atômico 9",
          "Gás amarelo-pálido, mais reativo de todos os elementos",
          "Halogênio oxidante mais forte",
          "Usado em pasta de dente e Teflon",
          "Elemento mais eletronegativo"
        ],
        verdict: "O flúor é o elemento mais reativo e eletronegativo, superando o cloro. O cloro ainda é um poderoso oxidante e muito mais prático de manusear para tratamento de água.",
        faq: [
          { q: "Qual halogênio é mais reativo?", a: "O flúor é o elemento mais reativo de todos, mais do que o cloro, que fica abaixo dele na tabela." },
          { q: "Por que o flúor está na pasta de dente?", a: "Os íons fluoreto fortalecem o esmalte dentário e ajudam a prevenir cáries." },
          { q: "Por que o cloro purifica a água?", a: "O cloro é um forte oxidante que mata bactérias e outros patógenos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "hydrochloric-acid-vs-sulfuric-acid", a: "Hydrochloric acid", b: "Sulfuric acid",
    category: "chemistry", emoji_a: "🧪", emoji_b: "⚗️",
    content: {
      pt: {
        title: "Ácido Clorídrico vs Sulfúrico: comparação",
        h1: "Ácido Clorídrico vs Ácido Sulfúrico",
        description: "O HCl é um ácido forte monoprótico; o H2SO4 é um ácido forte diprótico e agente desidratante. Compare esses dois ácidos de laboratório.",
        intro: "Ácido clorídrico e ácido sulfúrico são dois dos ácidos fortes mais comuns. Ambos são fortes, mas diferem no número de prótons e no comportamento.",
        pros_a: [
          "Fórmula HCl, ácido monoprótico",
          "Doa um H+ por molécula",
          "Encontrado no suco gástrico",
          "Volátil, emite fumaça em ar úmido",
          "Usado para limpeza e decapagem de metais"
        ],
        pros_b: [
          "Fórmula H2SO4, ácido diprótico",
          "Doa dois H+ por molécula",
          "Poderoso agente desidratante",
          "Não-volátil, líquido oleoso",
          "Usado em fertilizantes e baterias de carro"
        ],
        verdict: "Ambos são ácidos fortes, mas o ácido sulfúrico é diprótico e um feroz desidratante, enquanto o ácido clorídrico é monoprótico e volátil. O ácido sulfúrico é o peso-pesado industrial.",
        faq: [
          { q: "Qual ácido libera mais prótons?", a: "O ácido sulfúrico é diprótico e libera dois prótons; o ácido clorídrico é monoprótico com um." },
          { q: "Por que o ácido sulfúrico é chamado de desidratante?", a: "Ele atrai fortemente a água e pode extrair hidrogênio e oxigênio de compostos como o açúcar." },
          { q: "Onde o ácido clorídrico é encontrado naturalmente?", a: "No estômago, onde auxilia na digestão e elimina micro-organismos ingeridos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "acetic-acid-vs-citric-acid", a: "Acetic acid", b: "Citric acid",
    category: "chemistry", emoji_a: "🍶", emoji_b: "🍋",
    content: {
      pt: {
        title: "Ácido Acético vs Ácido Cítrico: comparação",
        h1: "Ácido Acético vs Ácido Cítrico explicados",
        description: "O ácido acético é um ácido monoprótico presente no vinagre; o ácido cítrico é um ácido triprótico das frutas cítricas. Compare esses ácidos fracos.",
        intro: "Ácido acético e ácido cítrico são ácidos orgânicos fracos e familiares encontrados em alimentos do cotidiano. Suas estruturas e contagens de prótons diferem.",
        pros_a: [
          "Fórmula CH3COOH, monoprótico",
          "Tem um grupo carboxílico",
          "Componente principal do vinagre",
          "Cheiro e sabor azedo intenso",
          "Usado em alimentos e como solvente"
        ],
        pros_b: [
          "Fórmula C6H8O7, triprótico",
          "Tem três grupos carboxílicos",
          "Encontrado naturalmente em limões e limas",
          "Pó cristalino branco sólido",
          "Usado como aromatizante e conservante"
        ],
        verdict: "Ambos são ácidos orgânicos fracos, mas o ácido cítrico é triprótico com três grupos ácidos enquanto o ácido acético é monoprótico com um. O ácido cítrico é sólido; o ácido acético é líquido.",
        faq: [
          { q: "Qual ácido doa mais prótons?", a: "O ácido cítrico é triprótico e pode doar três prótons; o ácido acético é monoprótico com um." },
          { q: "São ácidos fortes ou fracos?", a: "Ambos são ácidos fracos que se ionizam apenas parcialmente em água." },
          { q: "Onde são encontrados?", a: "O ácido acético é o ácido do vinagre; o ácido cítrico ocorre naturalmente nas frutas cítricas." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "glucose-vs-fructose", a: "Glucose", b: "Fructose",
    category: "chemistry", emoji_a: "🍬", emoji_b: "🍯",
    content: {
      pt: {
        title: "Glicose vs Frutose: açúcares comparados",
        h1: "Glicose vs Frutose explicadas",
        description: "Glicose e frutose compartilham a fórmula C6H12O6, mas diferem na estrutura. Compare esses dois açúcares simples.",
        intro: "Glicose e frutose são monossacarídeos com a mesma fórmula molecular. São isômeros estruturais com formas de anéis diferentes.",
        pros_a: [
          "Fórmula C6H12O6, uma aldohexose",
          "Forma um anel de seis membros",
          "Contém um grupo funcional aldeído",
          "Principal açúcar no sangue e fonte de energia",
          "Menos doce que a frutose"
        ],
        pros_b: [
          "Fórmula C6H12O6, uma cetohexose",
          "Forma um anel de cinco membros",
          "Contém um grupo funcional cetona",
          "Encontrada em frutas e mel",
          "O açúcar natural mais doce"
        ],
        verdict: "Glicose e frutose são isômeros estruturais: mesma fórmula, grupos funcionais diferentes. A glicose é um açúcar de anel aldose; a frutose é uma cetose e tem sabor mais doce.",
        faq: [
          { q: "Elas têm a mesma fórmula?", a: "Sim, ambas são C6H12O6, tornando-as isômeros estruturais com arranjos diferentes." },
          { q: "Qual é mais doce?", a: "A frutose é o mais doce dos açúcares naturais comuns." },
          { q: "Que grupo funcional cada uma tem?", a: "A glicose tem um grupo aldeído (aldose); a frutose tem um grupo cetona (cetose)." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "fructose-vs-sucrose", a: "Fructose", b: "Sucrose",
    category: "chemistry", emoji_a: "🍯", emoji_b: "🍚",
    content: {
      pt: {
        title: "Frutose vs Sacarose: comparação de açúcares",
        h1: "Frutose vs Sacarose explicadas",
        description: "A frutose é um monossacarídeo simples; a sacarose é um dissacarídeo de glicose mais frutose. Compare esses açúcares.",
        intro: "Frutose e sacarose diferem em tamanho: uma é um açúcar simples, a outra é formada por duas unidades ligadas.",
        pros_a: [
          "Um monossacarídeo (unidade simples de açúcar)",
          "Fórmula C6H12O6",
          "Encontrada em frutas e mel",
          "Absorvida diretamente sem quebra",
          "Sabor muito doce"
        ],
        pros_b: [
          "Um dissacarídeo (duas unidades de açúcar)",
          "Fórmula C12H22O11",
          "Composta de glicose mais frutose unidas",
          "Açúcar de mesa comum da cana ou beterraba",
          "Deve ser hidrolisada antes da absorção"
        ],
        verdict: "A frutose é uma única unidade de açúcar enquanto a sacarose é formada por duas unidades ligadas. A sacarose deve ser dividida em glicose e frutose por enzimas antes de ser utilizada pelo organismo.",
        faq: [
          { q: "A sacarose é feita de frutose?", a: "Em parte. A sacarose é um dissacarídeo de uma unidade de glicose ligada a uma unidade de frutose." },
          { q: "Qual é absorvida mais rápido?", a: "A frutose é absorvida diretamente, enquanto a sacarose deve primeiro ser hidrolisada em suas duas partes." },
          { q: "Qual enzima quebra a sacarose?", a: "A sacarase divide a sacarose em glicose e frutose no intestino delgado." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "starch-vs-cellulose", a: "Starch", b: "Cellulose",
    category: "chemistry", emoji_a: "🥔", emoji_b: "🌿",
    content: {
      pt: {
        title: "Amido vs Celulose: polissacarídeos comparados",
        h1: "Amido vs Celulose explicados",
        description: "Amido e celulose são polímeros de glicose, mas diferem no tipo de ligação. Compare esses dois polissacarídeos essenciais.",
        intro: "Amido e celulose são construídos a partir de glicose, mas um é reserva de energia digestível e o outro é fibra estrutural.",
        pros_a: [
          "Polímero de glicose com ligações alfa",
          "Reserva de energia em plantas",
          "Digerível pelas enzimas humanas",
          "Formas ramificadas (amilopectina) e enroladas (amilose)",
          "Encontrado em batatas, arroz e pão"
        ],
        pros_b: [
          "Polímero de glicose com ligações beta",
          "Suporte estrutural nas paredes celulares das plantas",
          "Indigerível pelos humanos (fibra alimentar)",
          "Cadeias longas, retas e resistentes",
          "Encontrado em madeira, algodão e papel"
        ],
        verdict: "Amido e celulose são cadeias de glicose, mas a ligação alfa versus beta decide tudo. Ligações alfa fazem reserva de energia digestível; ligações beta fazem fibra resistente.",
        faq: [
          { q: "Por que humanos não conseguem digerir celulose?", a: "Falta-nos a enzima para quebrar suas ligações beta-glicosídicas, então a celulose passa como fibra." },
          { q: "Qual é a diferença estrutural fundamental?", a: "O amido usa ligações glicosídicas alfa; a celulose usa ligações beta, que formam cadeias mais retas e resistentes." },
          { q: "São feitos do mesmo monômero?", a: "Sim, ambos são polímeros de glicose, mas com ligações diferentes." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "amino-acid-vs-peptide", a: "Amino acid", b: "Peptide",
    category: "chemistry", emoji_a: "🔤", emoji_b: "🔗",
    content: {
      pt: {
        title: "Aminoácido vs Peptídeo: construindo proteínas",
        h1: "Aminoácido vs Peptídeo explicados",
        description: "Aminoácidos são monômeros simples; peptídeos são cadeias curtas de aminoácidos unidos por ligações peptídicas. Compare os dois.",
        intro: "Aminoácidos são o alfabeto das proteínas, e peptídeos são palavras curtas formadas a partir deles. Tamanho e ligações os diferenciam.",
        pros_a: [
          "Uma única unidade monômero",
          "Possui um grupo amino e um carboxílico",
          "20 tipos padrão constroem todas as proteínas",
          "Cada aminoácido tem uma cadeia lateral R distinta",
          "Exemplos: glicina, alanina, lisina"
        ],
        pros_b: [
          "Uma cadeia curta de aminoácidos",
          "Unidades unidas por ligações peptídicas",
          "Formada por condensação, liberando água",
          "Mais curto que uma proteína completa",
          "Exemplos: dipeptídeos, oligopeptídeos"
        ],
        verdict: "Um aminoácido é um único bloco de construção; um peptídeo é vários ligados por ligações peptídicas. Ligue peptídeos suficientes e você tem um polipeptídeo, depois uma proteína funcional.",
        faq: [
          { q: "Como os peptídeos são formados?", a: "Aminoácidos se unem por reações de condensação que formam ligações peptídicas e liberam água." },
          { q: "Quando um peptídeo se torna uma proteína?", a: "Quando a cadeia polipeptídica é longa o suficiente e se dobra em uma forma 3D funcional." },
          { q: "Quantos aminoácidos padrão existem?", a: "Existem 20 aminoácidos padrão que se combinam para construir todas as proteínas." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "protein-vs-enzyme", a: "Protein", b: "Enzyme",
    category: "chemistry", emoji_a: "🥩", emoji_b: "✂️",
    content: {
      pt: {
        title: "Proteína vs Enzima: qual é a diferença?",
        h1: "Proteína vs Enzima explicadas",
        description: "Todas as enzimas são proteínas, mas nem todas as proteínas são enzimas. Compare a ampla classe das proteínas com as enzimas catalíticas.",
        intro: "Proteína é uma categoria ampla; enzima é um subconjunto especializado. Entender a relação esclarece a biologia e a bioquímica.",
        pros_a: [
          "Polímero de aminoácidos",
          "Exerce muitas funções: estrutura, transporte, defesa",
          "Se dobra em uma forma 3D específica",
          "Inclui tipos estruturais e de armazenamento",
          "Exemplos: colágeno, hemoglobina, anticorpos"
        ],
        pros_b: [
          "Uma proteína que age como catalisador biológico",
          "Acelera reações sem ser consumida",
          "Possui um sítio ativo que liga o substrato",
          "Altamente específica para sua reação",
          "Exemplos: amilase, lipase, catalase"
        ],
        verdict: "Toda enzima é uma proteína, mas as proteínas fazem muito mais do que catálise. Enzimas são as especialistas catalíticas; a classe das proteínas também abrange estrutura, transporte e defesa.",
        faq: [
          { q: "Todas as proteínas são enzimas?", a: "Não. Todas as enzimas são proteínas, mas muitas proteínas desempenham funções estruturais, de transporte ou de defesa." },
          { q: "O que torna as enzimas especiais?", a: "Seu sítio ativo permite que catalisem uma reação específica permanecendo inalteradas." },
          { q: "Uma enzima pode ser reutilizada?", a: "Sim. Uma enzima não é consumida, então pode catalisar a mesma reação muitas vezes." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "saturated-fat-vs-unsaturated-fat", a: "Saturated fat", b: "Unsaturated fat",
    category: "chemistry", emoji_a: "🧈", emoji_b: "🫒",
    content: {
      pt: {
        title: "Gordura Saturada vs Insaturada: comparação",
        h1: "Gordura Saturada vs Gordura Insaturada",
        description: "Gorduras saturadas não têm duplas ligações C=C; gorduras insaturadas têm uma ou mais. Compare estrutura e estado físico.",
        intro: "As gorduras diferem pelas ligações em suas cadeias de ácidos graxos. Essa única característica química decide se uma gordura é sólida ou líquida.",
        pros_a: [
          "Sem duplas ligações carbono-carbono",
          "Cadeias retas que se empacotam compactamente",
          "Sólida à temperatura ambiente",
          "Ponto de fusão mais alto",
          "Encontrada em manteiga e gordura animal"
        ],
        pros_b: [
          "Uma ou mais duplas ligações C=C",
          "Cadeias dobradas que se empacotam frouxamente",
          "Líquida à temperatura ambiente",
          "Ponto de fusão mais baixo",
          "Encontrada em azeite e óleos vegetais"
        ],
        verdict: "Gorduras saturadas são sem dupla ligação, retas e sólidas; gorduras insaturadas têm curvas pelas duplas ligações e permanecem líquidas. A dupla ligação é toda a diferença.",
        faq: [
          { q: "Por que gorduras insaturadas são líquidas?", a: "As duplas ligações criam curvas nas cadeias, impedindo o empacotamento compacto e mantendo a gordura líquida." },
          { q: "O que significa saturada aqui?", a: "Significa que a cadeia de carbono está saturada com hidrogênio, contendo o máximo possível, sem duplas ligações restantes." },
          { q: "O que é uma gordura poli-insaturada?", a: "Uma gordura insaturada com mais de uma dupla ligação carbono-carbono em sua cadeia." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "ester-vs-ether", a: "Ester", b: "Ether",
    category: "chemistry", emoji_a: "🍓", emoji_b: "💤",
    content: {
      pt: {
        title: "Éster vs Éter: grupos funcionais comparados",
        h1: "Éster vs Éter explicados",
        description: "Ésteres têm uma carbonila ao lado de um oxigênio; éteres têm uma simples ponte de oxigênio. Compare esses dois grupos funcionais.",
        intro: "Ésteres e éteres contêm um átomo de oxigênio ligado ao carbono, mas a estrutura ao redor faz com que se comportem de forma muito diferente.",
        pros_a: [
          "Grupo funcional RCOOR'",
          "Tem uma carbonila C=O ao lado de um oxigênio",
          "Frequentemente tem odor doce e frutado",
          "Formado a partir de ácido mais álcool",
          "Exemplos: acetato de etila, gorduras, fragrâncias"
        ],
        pros_b: [
          "Grupo funcional R-O-R'",
          "Apenas um oxigênio ligando dois carbonos",
          "Relativamente não-reativo e estável",
          "Frequentemente usado como solvente",
          "Exemplos: éter dietílico, anisol"
        ],
        verdict: "Ésteres carregam uma carbonila ao lado do oxigênio e têm aroma frutado; éteres são uma simples ponte de oxigênio e agem como solventes inertes. A carbonila é o elemento decisivo.",
        faq: [
          { q: "Como distinguir um éster de um éter?", a: "Um éster tem uma carbonila C=O ao lado do seu oxigênio; um éter não tem carbonila alguma." },
          { q: "Por que ésteres têm aroma frutado?", a: "Muitos ésteres voláteis têm aromas frutados agradáveis e são usados em aromatizantes e perfumes." },
          { q: "Por que éteres são bons solventes?", a: "Éteres são bastante não-reativos e dissolvem muitos compostos orgânicos sem interferir." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "aldehyde-vs-ketone", a: "Aldehyde", b: "Ketone",
    category: "chemistry", emoji_a: "🧴", emoji_b: "💅",
    content: {
      pt: {
        title: "Aldeído vs Cetona: compostos carbonílicos",
        h1: "Aldeído vs Cetona explicados",
        description: "Aldeídos têm a carbonila no final da cadeia; cetonas a têm no interior. Compare esses grupos carbonílicos para química.",
        intro: "Aldeídos e cetonas apresentam o grupo carbonila, mas a posição da carbonila muda sua reatividade.",
        pros_a: [
          "Grupo carbonila no final da cadeia de carbono",
          "Tem pelo menos um hidrogênio no carbono carbonílico",
          "Facilmente oxidado a ácidos carboxílicos",
          "Teste de Tollens e Fehling positivos",
          "Exemplos: formaldeído, acetaldeído"
        ],
        pros_b: [
          "Grupo carbonila dentro da cadeia de carbono",
          "Dois grupos carbono no carbono carbonílico",
          "Resistente à oxidação suave",
          "Teste de Tollens e Fehling negativos",
          "Exemplos: acetona, butanona"
        ],
        verdict: "Aldeídos carregam a carbonila no final da cadeia e se oxidam facilmente; cetonas a enterram no meio e resistem à oxidação. O teste de Tollens os distingue com um espelho de prata.",
        faq: [
          { q: "Como distingui-los no laboratório?", a: "O reagente de Tollens forma um espelho de prata com aldeídos, mas não com cetonas." },
          { q: "Por que aldeídos são mais fáceis de oxidar?", a: "O hidrogênio no seu carbono carbonílico pode ser removido durante a oxidação a ácido carboxílico." },
          { q: "O que têm em comum?", a: "Ambos contêm o grupo carbonila, um carbono com dupla ligação para o oxigênio." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "alcohol-vs-phenol", a: "Alcohol", b: "Phenol",
    category: "chemistry", emoji_a: "🍷", emoji_b: "🧫",
    content: {
      pt: {
        title: "Álcool vs Fenol: compostos com hidroxila",
        h1: "Álcool vs Fenol explicados",
        description: "Álcoois têm OH em carbono saturado; fenóis têm OH diretamente no anel benzênico. Compare acidez e reações.",
        intro: "Álcoois e fenóis carregam um grupo hidroxila, mas onde esse OH se liga muda dramaticamente a acidez.",
        pros_a: [
          "Grupo hidroxílico OH em carbono sp3",
          "Muito pouco ácido, quase neutro",
          "Não reage com NaOH",
          "Pode ser oxidado a aldeídos ou ácidos",
          "Exemplos: etanol, metanol, propanol"
        ],
        pros_b: [
          "Grupo hidroxílico OH ligado a anel benzênico",
          "Significativamente mais ácido que álcoois",
          "Reage com NaOH para formar sais",
          "Anel estabiliza a carga negativa",
          "Exemplos: fenol, cresol, catecol"
        ],
        verdict: "Ambos têm um grupo OH, mas os fenóis são muito mais ácidos porque o anel benzênico estabiliza o ânion resultante. Só os fenóis reagem com hidróxido de sódio.",
        faq: [
          { q: "Por que fenóis são mais ácidos que álcoois?", a: "O anel aromático deslocaliza a carga negativa do ânion fenóxido, estabilizando-o." },
          { q: "Álcoois reagem com NaOH?", a: "Não. Álcoois são ácidos fracos demais, enquanto fenóis reagem com hidróxido de sódio." },
          { q: "O que têm em comum?", a: "Ambos contêm um grupo funcional hidroxílico OH ligado ao carbono." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "amine-vs-amide", a: "Amine", b: "Amide",
    category: "chemistry", emoji_a: "🐟", emoji_b: "🧵",
    content: {
      pt: {
        title: "Amina vs Amida: grupos funcionais nitrogenados",
        h1: "Amina vs Amida explicadas",
        description: "Aminas têm nitrogênio em cadeia carbônica; amidas têm nitrogênio ao lado de carbonila. Compare basicidade e reatividade.",
        intro: "Aminas e amidas contêm nitrogênio, mas um único grupo carbonila vizinho muda completamente seu comportamento.",
        pros_a: [
          "Nitrogênio ligado apenas a carbono e hidrogênio",
          "Básico, aceita prótons facilmente",
          "Frequentemente tem odor de peixe",
          "Derivado da amônia",
          "Exemplos: metilamina, anilina"
        ],
        pros_b: [
          "Nitrogênio ligado ao lado de uma carbonila C=O",
          "Quase neutro, muito pouco básico",
          "Estável e pouco reativo",
          "Forma a ligação peptídica em proteínas",
          "Exemplos: acetamida, nylon, ureia"
        ],
        verdict: "Aminas são compostos de nitrogênio básicos; amidas têm uma carbonila adjacente que drena a basicidade do nitrogênio. O grupo amida também constrói proteínas e nylon.",
        faq: [
          { q: "Por que amidas são menos básicas que aminas?", a: "A carbonila vizinha puxa o par de elétrons solitário do nitrogênio para ressonância, impedindo-o de aceitar prótons facilmente." },
          { q: "Onde o grupo amida aparece na biologia?", a: "Forma as ligações peptídicas que ligam aminoácidos em proteínas." },
          { q: "Como identificar uma amida?", a: "Procure uma carbonila C=O diretamente ligada a um átomo de nitrogênio." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "distillation-vs-sublimation", a: "Distillation", b: "Sublimation",
    category: "chemistry", emoji_a: "⚗️", emoji_b: "🌫️",
    content: {
      pt: {
        title: "Destilação vs Sublimação: técnicas de separação",
        h1: "Destilação vs Sublimação explicadas",
        description: "A destilação separa líquidos pelo ponto de ebulição; a sublimação separa um sólido que vira vapor diretamente. Compare as duas.",
        intro: "Ambas são técnicas de separação e purificação, mas exploram mudanças de fase diferentes para isolar uma substância.",
        pros_a: [
          "Separa líquidos usando o ponto de ebulição",
          "O líquido é vaporizado e depois condensado",
          "Passa de líquido para gás e volta a líquido",
          "Usado para purificar ou separar misturas",
          "Exemplo: separar etanol da água"
        ],
        pros_b: [
          "Separa um sólido que vaporiza diretamente",
          "O sólido passa direto para gás, pulando o líquido",
          "O vapor depois se deposita de volta como sólido",
          "Usado quando um sólido sublima limpo",
          "Exemplos: purificar iodo ou gelo seco"
        ],
        verdict: "A destilação faz a substância passar pela fase líquida; a sublimação pula o líquido completamente. Escolha sublimação apenas quando um componente vai direto de sólido para gás.",
        faq: [
          { q: "Qual mudança de fase a sublimação usa?", a: "O sólido se torna diretamente gás sem nunca se tornar líquido." },
          { q: "Quando a destilação é a melhor escolha?", a: "Quando separar líquidos ou um soluto dissolvido de um líquido pela diferença de pontos de ebulição." },
          { q: "Dê um exemplo de sublimação.", a: "O gelo seco (dióxido de carbono sólido) sublima diretamente em gás à temperatura ambiente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "evaporation-vs-condensation", a: "Evaporation", b: "Condensation",
    category: "chemistry", emoji_a: "☀️", emoji_b: "💧",
    content: {
      pt: {
        title: "Evaporação vs Condensação: mudanças de fase",
        h1: "Evaporação vs Condensação explicadas",
        description: "A evaporação transforma líquido em vapor; a condensação transforma vapor de volta em líquido. Compare essas mudanças de fase opostas.",
        intro: "Evaporação e condensação são processos inversos que movem a matéria entre o estado líquido e gasoso. Juntas impulsionam o ciclo da água.",
        pros_a: [
          "Líquido muda para gás",
          "Absorve calor (endotérmico)",
          "Ocorre na superfície do líquido",
          "Acelerada pelo calor e pela área de superfície",
          "Exemplo: uma poça secando ao sol"
        ],
        pros_b: [
          "Gás se transforma novamente em líquido",
          "Libera calor (exotérmico)",
          "Ocorre quando o vapor esfria",
          "Acelerada pelo resfriamento e pelas superfícies",
          "Exemplo: orvalho se formando na grama"
        ],
        verdict: "A evaporação absorve calor para transformar líquido em vapor; a condensação libera calor para transformar vapor em líquido. São opostos exatos e movem o ciclo da água.",
        faq: [
          { q: "Qual processo absorve calor?", a: "A evaporação é endotérmica, absorvendo calor, enquanto a condensação é exotérmica, liberando-o." },
          { q: "Por que suar refresca o corpo?", a: "A evaporação do suor absorve calor da sua pele, reduzindo a temperatura corporal." },
          { q: "Como se relacionam ao ciclo da água?", a: "A evaporação eleva a água para o ar e a condensação forma nuvens e chuva." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "filtration-vs-centrifugation", a: "Filtration", b: "Centrifugation",
    category: "chemistry", emoji_a: "☕", emoji_b: "🌀",
    content: {
      pt: {
        title: "Filtração vs Centrifugação: métodos de separação",
        h1: "Filtração vs Centrifugação explicadas",
        description: "A filtração separa por tamanho de partícula por meio de barreira; a centrifugação separa por densidade com rotação. Compare os dois métodos.",
        intro: "Ambas separam misturas, especialmente sólidos de líquidos, mas se baseiam em princípios físicos diferentes.",
        pros_a: [
          "Separa partículas por tamanho",
          "Usa uma barreira porosa ou filtro",
          "Sólido fica preso, líquido passa",
          "Simples, barato e amplamente usado",
          "Exemplo: filtrar areia da água"
        ],
        pros_b: [
          "Separa componentes por densidade",
          "Usa rotação rápida para criar força",
          "Material mais denso se move para fora",
          "Eficaz para partículas finas ou microscópicas",
          "Exemplo: sedimentar células sanguíneas"
        ],
        verdict: "A filtração peneira a mistura pelo tamanho das partículas; a centrifugação a separa por densidade. A centrifugação lida com partículas finas que a filtração simples não consegue.",
        faq: [
          { q: "Quando a centrifugação é melhor que a filtração?", a: "Para partículas muito finas ou microscópicas que passam por filtros comuns." },
          { q: "Em que um filtro se baseia?", a: "No tamanho dos poros: partículas maiores ficam retidas enquanto as menores e os líquidos passam." },
          { q: "Qual propriedade a centrifugação usa?", a: "Diferenças de densidade, pois a rotação empurra materiais mais densos para fora mais rapidamente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "mole-vs-atom", a: "Mole", b: "Atom",
    category: "chemistry", emoji_a: "🔢", emoji_b: "⚛️",
    content: {
      pt: {
        title: "Mol vs Átomo: contagem em química",
        h1: "Mol vs Átomo explicados",
        description: "Um átomo é uma única partícula; um mol é um número enorme e fixo de partículas. Compare essas duas escalas para química.",
        intro: "Um átomo é a menor unidade de um elemento, e um mol é a forma do químico de contar átomos em quantidades utilizáveis.",
        pros_a: [
          "Uma unidade de contagem, como uma dúzia",
          "Igual a 6,022×10²³ partículas",
          "Liga a massa atômica a gramas",
          "Usado em todos os cálculos de estequiometria",
          "Definido pelo número de Avogadro"
        ],
        pros_b: [
          "A menor unidade de um elemento",
          "Uma única partícula individual",
          "Tem núcleo e elétrons",
          "Pequeno demais para ser pesado sozinho",
          "Bloco de construção de toda a matéria"
        ],
        verdict: "Um átomo é uma partícula; um mol são 6,022×10²³ delas. O mol faz a ponte entre o mundo atômico invisível e os gramas mensuráveis no laboratório.",
        faq: [
          { q: "Quantos átomos há em um mol?", a: "Um mol contém o número de Avogadro de partículas, cerca de 6,022×10²³." },
          { q: "Por que os químicos usam mols?", a: "Os átomos são pequenos demais para contar individualmente, então o mol os agrupa em quantidades pesáveis." },
          { q: "Um mol é sempre de átomos?", a: "Não. Um mol pode contar quaisquer partículas, incluindo moléculas, íons ou elétrons." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "molarity-vs-molality", a: "Molarity", b: "Molality",
    category: "chemistry", emoji_a: "🧪", emoji_b: "⚖️",
    content: {
      pt: {
        title: "Molaridade vs Molalidade: unidades de concentração",
        h1: "Molaridade vs Molalidade explicadas",
        description: "Molaridade usa volume de solução; molalidade usa massa de solvente. Compare essas unidades de concentração para química.",
        intro: "Molaridade e molalidade medem concentração, mas uma depende de volume e a outra de massa.",
        pros_a: [
          "Moles de soluto por litro de solução",
          "Símbolo M, unidade mol/L",
          "Fácil de medir com vidraria volumétrica",
          "Varia com a temperatura",
          "Unidade de concentração mais comum"
        ],
        pros_b: [
          "Moles de soluto por quilograma de solvente",
          "Símbolo m, unidade mol/kg",
          "Baseada em massa, não em volume",
          "Independente da temperatura",
          "Usada para cálculos de propriedades coligativas"
        ],
        verdict: "A molaridade é conveniente e baseada em volume, mas muda com a temperatura; a molalidade é baseada em massa e estável com a temperatura. Use molalidade para trabalhos precisos de propriedades coligativas.",
        faq: [
          { q: "Por que a molaridade muda com a temperatura?", a: "O volume se expande ou contrai com a temperatura, então a relação moles-por-litro se altera." },
          { q: "Quando devo usar molalidade?", a: "Para propriedades coligativas como elevação do ponto de ebulição, onde a estabilidade de temperatura importa." },
          { q: "Qual é a diferença no denominador?", a: "A molaridade divide por litros de solução; a molalidade divide por quilogramas de solvente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "isotope-vs-isomer", a: "Isotope", b: "Isomer",
    category: "chemistry", emoji_a: "⚛️", emoji_b: "🧩",
    content: {
      pt: {
        title: "Isótopo vs Isômero: confusão comum esclarecida",
        h1: "Isótopo vs Isômero explicados",
        description: "Isótopos são átomos de um elemento com número diferente de nêutrons; isômeros são compostos com a mesma fórmula. Compare os dois.",
        intro: "Isótopo e isômero soam parecido, mas descrevem coisas diferentes: um é sobre átomos, o outro sobre moléculas.",
        pros_a: [
          "Átomos do mesmo elemento",
          "Mesmo número de prótons, nêutrons diferentes",
          "Números de massa diferentes",
          "Comportamento químico idêntico",
          "Exemplos: carbono-12 e carbono-14"
        ],
        pros_b: [
          "Compostos com a mesma fórmula molecular",
          "Arranjo diferente dos átomos",
          "Propriedades químicas ou físicas diferentes",
          "Inclui isômeros estruturais e estereoisômeros",
          "Exemplos: butano e isobutano"
        ],
        verdict: "Isótopos são variantes de um único átomo que diferem em nêutrons; isômeros são moléculas diferentes que compartilham uma fórmula. Não confunda os conceitos atômico e molecular.",
        faq: [
          { q: "O que isótopos têm em comum?", a: "São átomos do mesmo elemento com número de prótons idêntico, mas números de nêutrons diferentes." },
          { q: "Isômeros se comportam da mesma forma?", a: "Não. Isômeros compartilham a fórmula, mas diferem na estrutura, então suas propriedades geralmente diferem." },
          { q: "A diferença é atômica ou molecular?", a: "Isótopos são um conceito de nível atômico; isômeros são um conceito de nível molecular." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "allotrope-vs-isotope", a: "Allotrope", b: "Isotope",
    category: "chemistry", emoji_a: "💎", emoji_b: "⚛️",
    content: {
      pt: {
        title: "Alótropo vs Isótopo: variantes de um elemento",
        h1: "Alótropo vs Isótopo explicados",
        description: "Alótropos são formas estruturais de um elemento; isótopos são átomos com número de nêutrons diferente. Compare essas variantes.",
        intro: "Ambos os termos descrevem formas de um único elemento, mas alótropos variam na estrutura enquanto isótopos variam dentro do núcleo.",
        pros_a: [
          "Formas estruturais diferentes de um mesmo elemento",
          "Mesmos átomos arranjados de forma diferente",
          "Propriedades físicas distintas",
          "Um conceito de ligação e estrutura",
          "Exemplos: diamante e grafite"
        ],
        pros_b: [
          "Átomos de um elemento com nêutrons diferentes",
          "Mesmos prótons, números de massa distintos",
          "Comportamento químico quase idêntico",
          "Um conceito nuclear",
          "Exemplos: carbono-12 e carbono-14"
        ],
        verdict: "Alótropos diferem na forma como os átomos estão ligados e organizados; isótopos diferem em seus núcleos. Um é sobre estrutura, o outro sobre contagem de nêutrons.",
        faq: [
          { q: "Diamante e grafite são isótopos?", a: "Não, são alótropos do carbono, diferindo no arranjo atômico, não nos núcleos." },
          { q: "O que muda entre isótopos?", a: "Apenas o número de nêutrons e, portanto, a massa, enquanto os prótons permanecem iguais." },
          { q: "Alótropos têm propriedades diferentes?", a: "Sim. O diamante é duro e transparente enquanto o grafite é macio e escuro, apesar de ambos serem carbono." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "diamond-vs-graphite", a: "Diamond", b: "Graphite",
    category: "chemistry", emoji_a: "💎", emoji_b: "✏️",
    content: {
      pt: {
        title: "Diamante vs Grafite: alótropos do carbono",
        h1: "Diamante vs Grafite explicados",
        description: "Diamante e grafite são carbono puro, mas sua estrutura faz um ser duro e outro macio. Compare esses alótropos.",
        intro: "Diamante e grafite são alótropos do carbono, feitos dos mesmos átomos mas arranjados de forma completamente diferente.",
        pros_a: [
          "Cada carbono ligado a outros quatro",
          "Rede tetraédrica 3D rígida",
          "Material natural mais duro conhecido",
          "Isolante elétrico",
          "Transparente e com alto índice de refração"
        ],
        pros_b: [
          "Cada carbono ligado a outros três",
          "Camadas empilhadas de folhas hexagonais",
          "Macio e escorregadio, camadas deslizam",
          "Conduz eletricidade",
          "Opaco, cinza-escuro e usado em lápis"
        ],
        verdict: "Diamante e grafite são o mesmo elemento com propriedades opostas. A ligação 3D do diamante o torna duro e isolante; a ligação em camadas do grafite o torna macio e condutor.",
        faq: [
          { q: "Como ambos podem ser carbono puro?", a: "São alótropos: átomos de carbono idênticos ligados em arranjos geométricos diferentes." },
          { q: "Por que o grafite conduz eletricidade?", a: "Cada carbono tem um elétron deslocalizado livre para se mover dentro das camadas." },
          { q: "Por que o grafite é escorregadio?", a: "Forças fracas entre suas camadas permitem que deslizem facilmente umas sobre as outras." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "methane-vs-ethane", a: "Methane", b: "Ethane",
    category: "chemistry", emoji_a: "🔥", emoji_b: "🛢️",
    content: {
      pt: {
        title: "Metano vs Etano: os menores alcanos",
        h1: "Metano vs Etano explicados",
        description: "O metano tem um carbono; o etano tem dois. Compare os dois menores alcanos em fórmula, ponto de ebulição e usos.",
        intro: "Metano e etano são os dois primeiros membros da série dos alcanos, diferindo por um único átomo de carbono.",
        pros_a: [
          "Fórmula CH4, um átomo de carbono",
          "Alcano e hidrocarboneto mais simples",
          "Principal componente do gás natural",
          "Menor ponto de ebulição dos alcanos",
          "Potente gás de efeito estufa"
        ],
        pros_b: [
          "Fórmula C2H6, dois átomos de carbono",
          "Segundo membro da série dos alcanos",
          "Encontrado no gás natural como componente menor",
          "Ponto de ebulição ligeiramente mais alto que o metano",
          "Usado para fazer etileno por craqueamento"
        ],
        verdict: "Metano e etano diferem por um carbono, o menor passo possível em uma série homóloga. Adicionar esse carbono eleva o ponto de ebulição e a massa da molécula.",
        faq: [
          { q: "Por que o etano ferve a temperatura mais alta?", a: "Sua molécula maior tem forças de dispersão mais fortes, exigindo mais energia para vaporizar." },
          { q: "Estão na mesma série?", a: "Sim. Ambos são alcanos, membros consecutivos da mesma série homóloga." },
          { q: "De onde vêm?", a: "Ambos ocorrem no gás natural, com o metano como componente dominante." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "benzene-vs-toluene", a: "Benzene", b: "Toluene",
    category: "chemistry", emoji_a: "🔵", emoji_b: "🎨",
    content: {
      pt: {
        title: "Benzeno vs Tolueno: compostos aromáticos",
        h1: "Benzeno vs Tolueno explicados",
        description: "O benzeno é o anel aromático básico; o tolueno é o benzeno com um grupo metila. Compare esses dois solventes aromáticos.",
        intro: "Benzeno e tolueno são hidrocarbonetos aromáticos. O tolueno é simplesmente o benzeno com um grupo metila ligado.",
        pros_a: [
          "Fórmula C6H6, o anel aromático mais simples",
          "Anel de seis carbonos puro com deslocalização",
          "Carcinógeno humano conhecido",
          "Alta simetria, molécula plana",
          "Usado como precursor industrial"
        ],
        pros_b: [
          "Fórmula C7H8, benzeno com grupo metila",
          "Grupo metila torna o anel mais reativo",
          "Menos tóxico que o benzeno",
          "Solvente comum e amplamente utilizado",
          "Usado para fabricar TNT e outros produtos"
        ],
        verdict: "O tolueno é o benzeno com um substituinte metila, o que o torna menos tóxico e um solvente mais prático. O benzeno permanece o anel aromático fundamental, mas é um carcinógeno.",
        faq: [
          { q: "Como o tolueno difere do benzeno?", a: "O tolueno é o benzeno com um hidrogênio substituído por um grupo metila, dando a fórmula C7H8." },
          { q: "Qual é mais seguro de usar?", a: "O tolueno é consideravelmente menos tóxico que o benzeno, que é um carcinógeno conhecido." },
          { q: "Por que o grupo metila é importante?", a: "Ele ativa o anel, tornando o tolueno mais reativo para substituição eletrofílica." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "solute-vs-solvent", a: "Solute", b: "Solvent",
    category: "chemistry", emoji_a: "🧂", emoji_b: "💧",
    content: {
      pt: {
        title: "Soluto vs Solvente: partes de uma solução",
        h1: "Soluto vs Solvente explicados",
        description: "O soluto é o que se dissolve; o solvente é o que dissolve. Compare as duas partes de toda solução.",
        intro: "Toda solução tem duas partes: um soluto e um solvente. Saber qual é qual é o ponto de partida da química de soluções.",
        pros_a: [
          "A substância que está sendo dissolvida",
          "Geralmente presente em menor quantidade",
          "Pode ser sólido, líquido ou gás",
          "Se dispersa uniformemente no solvente",
          "Exemplo: sal em água salgada"
        ],
        pros_b: [
          "A substância que faz a dissolução",
          "Geralmente presente em maior quantidade",
          "Na maioria das vezes é um líquido, como a água",
          "Determina o estado da solução",
          "Exemplo: água em água salgada"
        ],
        verdict: "O soluto se dissolve e o solvente faz a dissolução. Juntos formam uma solução homogênea, sendo o solvente geralmente o componente maior.",
        faq: [
          { q: "Qual é geralmente maior?", a: "O solvente é normalmente o componente presente em maior quantidade." },
          { q: "O soluto pode ser um gás?", a: "Sim. Nas bebidas carbonatadas, o dióxido de carbono gasoso é um soluto dissolvido em água líquida." },
          { q: "O que é o solvente universal?", a: "A água é chamada de solvente universal porque dissolve uma enorme variedade de substâncias." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "mixture-vs-compound", a: "Mixture", b: "Compound",
    category: "chemistry", emoji_a: "🥣", emoji_b: "🔷",
    content: {
      pt: {
        title: "Mistura vs Composto: diferenças essenciais",
        h1: "Mistura vs Composto explicados",
        description: "Misturas combinam substâncias fisicamente; compostos as ligam quimicamente. Compare composição e formas de separação.",
        intro: "Ambos contêm mais de uma substância, mas uma mistura é uma combinação física enquanto um composto é uma união química.",
        pros_a: [
          "Substâncias combinadas fisicamente, sem ligação",
          "Proporções variáveis",
          "Componentes mantêm suas próprias propriedades",
          "Separados por métodos físicos",
          "Exemplos: ar, salada, água salgada"
        ],
        pros_b: [
          "Elementos ligados quimicamente",
          "Proporções fixas pela fórmula",
          "Novas propriedades diferentes dos componentes",
          "Separados apenas por reação química",
          "Exemplos: água, sal, dióxido de carbono"
        ],
        verdict: "Uma mistura é uma combinação física com proporções variáveis que se separa facilmente; um composto é uma ligação química com proporção fixa que requer uma reação para ser quebrada.",
        faq: [
          { q: "Como separar uma mistura?", a: "Por métodos físicos como filtração, destilação ou evaporação, sem necessidade de reação química." },
          { q: "Um composto tem proporções fixas?", a: "Sim. Um composto sempre tem elementos em uma proporção fixada por sua fórmula química." },
          { q: "O ar é mistura ou composto?", a: "O ar é uma mistura de gases que mantêm suas próprias propriedades e podem variar em proporção." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "atom-vs-ion", a: "Atom", b: "Ion",
    category: "chemistry", emoji_a: "⚛️", emoji_b: "⚡",
    content: {
      pt: {
        title: "Átomo vs Íon: carga e estrutura",
        h1: "Átomo vs Íon explicados",
        description: "Um átomo é eletricamente neutro; um íon carrega carga por ganhar ou perder elétrons. Compare essas duas partículas.",
        intro: "Um átomo se torna um íon quando ganha ou perde elétrons. A mudança na contagem de elétrons é toda a diferença.",
        pros_a: [
          "Eletricamente neutro em geral",
          "Número igual de prótons e elétrons",
          "Unidade básica de um elemento",
          "Estável em seu estado fundamental",
          "Exemplo: um átomo de sódio neutro"
        ],
        pros_b: [
          "Carrega uma carga elétrica líquida",
          "Prótons e elétrons em número desigual",
          "Formado por ganho ou perda de elétrons",
          "Cátion é positivo, ânion é negativo",
          "Exemplo: o íon sódio Na+"
        ],
        verdict: "Um átomo é neutro com cargas equilibradas; um íon é carregado porque perdeu ou ganhou elétrons. O número de prótons nunca muda, apenas os elétrons.",
        faq: [
          { q: "Como um átomo se torna um íon?", a: "Ganhando elétrons para se tornar negativo ou perdendo-os para se tornar positivo." },
          { q: "O número de prótons muda?", a: "Não. Apenas elétrons são ganhos ou perdidos; a contagem de prótons permanece a mesma." },
          { q: "O que é cátion vs ânion?", a: "Cátion é um íon com carga positiva; ânion é um íon com carga negativa." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "cation-vs-anion", a: "Cation", b: "Anion",
    category: "chemistry", emoji_a: "➕", emoji_b: "➖",
    content: {
      pt: {
        title: "Cátion vs Ânion: íons positivos e negativos",
        h1: "Cátion vs Ânion explicados",
        description: "Um cátion é um íon positivo que perdeu elétrons; um ânion é um íon negativo que os ganhou. Compare essas partículas carregadas.",
        intro: "Os íons têm duas cargas. Se um átomo perde ou ganha elétrons decide se ele se torna cátion ou ânion.",
        pros_a: [
          "Íon com carga positiva",
          "Formado pela perda de elétrons",
          "Mais prótons do que elétrons",
          "Geralmente formado por metais",
          "Exemplos: Na+, Ca2+, Al3+"
        ],
        pros_b: [
          "Íon com carga negativa",
          "Formado pelo ganho de elétrons",
          "Mais elétrons do que prótons",
          "Geralmente formado por não-metais",
          "Exemplos: Cl-, O2-, S2-"
        ],
        verdict: "Cátions são íons positivos formados pela perda de elétrons, tipicamente metais; ânions são íons negativos formados pelo ganho de elétrons, tipicamente não-metais. Cargas opostas se atraem para formar compostos iônicos.",
        faq: [
          { q: "Como lembrar a diferença?", a: "Cátion é positivo e ânion é negativo; metais formam cátions, não-metais formam ânions." },
          { q: "Para onde os íons migram em um campo?", a: "Cátions migram para o cátodo; ânions migram para o ânodo." },
          { q: "O que mantém um composto iônico unido?", a: "A atração eletrostática entre cátions e ânions com cargas opostas." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "reversible-vs-irreversible-reaction", a: "Reversible reaction", b: "Irreversible reaction",
    category: "chemistry", emoji_a: "🔄", emoji_b: "➡️",
    content: {
      pt: {
        title: "Reação Reversível vs Irreversível",
        h1: "Reações Reversíveis vs Irreversíveis explicadas",
        description: "Reações reversíveis podem ocorrer nos dois sentidos chegando ao equilíbrio; irreversíveis vão até o fim. Compare esses tipos.",
        intro: "Reações diferem em direção. Algumas podem ocorrer para trás e atingir o equilíbrio, enquanto outras seguem apenas um caminho.",
        pros_a: [
          "Pode ocorrer nos dois sentidos",
          "Atinge um equilíbrio dinâmico",
          "Produtos podem regenerar reagentes",
          "Representada com seta dupla",
          "Exemplos: processo Haber, esterificação"
        ],
        pros_b: [
          "Ocorre em apenas uma direção",
          "Vai essencialmente até o fim",
          "Produtos não regeneram reagentes",
          "Representada com seta simples",
          "Exemplos: combustão, neutralização"
        ],
        verdict: "Reações reversíveis se estabilizam no equilíbrio onde ambas as direções ocorrem; reações irreversíveis vão até o fim. A notação de seta, dupla ou simples, indica qual é qual.",
        faq: [
          { q: "O que é equilíbrio?", a: "Um estado em uma reação reversível onde as taxas direta e inversa são iguais e as concentrações permanecem constantes." },
          { q: "Como cada uma é representada na equação?", a: "Reação reversível usa seta dupla; irreversível usa seta simples." },
          { q: "A combustão é reversível?", a: "Não. A combustão vai até o fim e é tratada como reação irreversível." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "crystalline-vs-amorphous-solid", a: "Crystalline solid", b: "Amorphous solid",
    category: "chemistry", emoji_a: "🧊", emoji_b: "🪟",
    content: {
      pt: {
        title: "Sólido Cristalino vs Amorfo: comparação",
        h1: "Sólido Cristalino vs Sólido Amorfo explicados",
        description: "Sólidos cristalinos têm estruturas ordenadas e repetidas; sólidos amorfos não têm ordem de longo alcance. Compare esses tipos de sólidos.",
        intro: "Os sólidos se dividem em cristalinos e amorfos dependendo de se suas partículas estão dispostas em um padrão regular.",
        pros_a: [
          "Partículas em uma rede ordenada e repetitiva",
          "Ponto de fusão definido e nítido",
          "Frequentemente tem faces planas e clivagem limpa",
          "Propriedades anisotrópicas",
          "Exemplos: sal, diamante, quartzo"
        ],
        pros_b: [
          "Partículas dispostas aleatoriamente",
          "Amolece ao longo de uma faixa de temperatura",
          "Quebra com superfícies irregulares",
          "Propriedades isotrópicas",
          "Exemplos: vidro, borracha, plástico"
        ],
        verdict: "Sólidos cristalinos têm redes ordenadas e pontos de fusão nítidos; sólidos amorfos são desordenados e amolecem gradualmente. O arranjo interno decide seu comportamento.",
        faq: [
          { q: "Por que o vidro não tem ponto de fusão nítido?", a: "O vidro é amorfo, então sua estrutura desordenada amolece gradualmente ao longo de uma faixa de temperatura." },
          { q: "O que significa anisotrópico?", a: "As propriedades variam com a direção, característica dos sólidos cristalinos ordenados." },
          { q: "A borracha é cristalina ou amorfa?", a: "A borracha é um sólido amorfo com arranjo aleatório e desordenado de partículas." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exothermic-vs-endothermic-process", a: "Exothermic process", b: "Endothermic process",
    category: "chemistry", emoji_a: "🔥", emoji_b: "❄️",
    content: {
      pt: {
        title: "Processo Exotérmico vs Endotérmico",
        h1: "Processos Exotérmicos vs Endotérmicos explicados",
        description: "Processos exotérmicos liberam energia; endotérmicos a absorvem. Compare o fluxo de energia em mudanças físicas e químicas.",
        intro: "A energia flui em toda mudança física e química. A direção desse fluxo define os processos exotérmicos e endotérmicos.",
        pros_a: [
          "Libera energia para a vizinhança",
          "A vizinhança aquece",
          "Energia dos produtos é menor",
          "Frequentemente quente ao toque",
          "Exemplos: congelamento, condensação, combustão"
        ],
        pros_b: [
          "Absorve energia da vizinhança",
          "A vizinhança esfria",
          "Energia dos produtos é maior",
          "Frequentemente frio ao toque",
          "Exemplos: fusão, ebulição, evaporação"
        ],
        verdict: "Processos exotérmicos liberam energia e aquecem a vizinhança; endotérmicos absorvem energia e a resfriam. A direção do fluxo de energia é o fator decisivo.",
        faq: [
          { q: "A fusão é exo ou endotérmica?", a: "A fusão é endotérmica porque absorve energia para romper a estrutura sólida." },
          { q: "Por que o congelamento libera calor?", a: "À medida que as partículas se travam em um sólido, elas liberam a energia que tinham no estado líquido." },
          { q: "Um processo exotérmico parece quente?", a: "Geralmente sim, porque libera energia como calor para a vizinhança." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "solid-vs-liquid", a: "Solid", b: "Liquid",
    category: "chemistry", emoji_a: "🧊", emoji_b: "💧",
    content: {
      pt: {
        title: "Sólido vs Líquido: estados da matéria",
        h1: "Sólido vs Líquido explicados",
        description: "Sólidos mantêm forma e volume fixos; líquidos mantêm o volume, mas fluem para preencher o recipiente. Compare esses estados da matéria.",
        intro: "Sólidos e líquidos são dois dos principais estados da matéria, diferindo na forma como suas partículas são organizadas e como se movem.",
        pros_a: [
          "Forma e volume fixos",
          "Partículas compactadas, vibram no lugar",
          "Forças intermoleculares fortes",
          "Dificilmente comprimível",
          "Exemplos: gelo, ferro, madeira"
        ],
        pros_b: [
          "Volume fixo, mas toma a forma do recipiente",
          "Partículas próximas, mas livres para deslizar",
          "Forças intermoleculares moderadas",
          "Flui e pode ser vertido",
          "Exemplos: água, óleo, mercúrio"
        ],
        verdict: "Sólidos mantêm forma e volume porque suas partículas estão presas; líquidos mantêm o volume, mas fluem porque as partículas podem deslizar.",
        faq: [
          { q: "Por que líquidos fluem, mas sólidos não?", a: "Partículas líquidas podem deslizar umas sobre as outras, enquanto as sólidas só vibram em posições fixas." },
          { q: "Líquidos têm volume fixo?", a: "Sim. Os líquidos mantêm um volume fixo, mas tomam a forma do recipiente." },
          { q: "Sólidos podem ser comprimidos?", a: "Quase não. Suas partículas muito compactadas deixam quase nenhum espaço para comprimir." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "physical-change-vs-chemical-change", a: "Physical change", b: "Chemical change",
    category: "chemistry", emoji_a: "🧊", emoji_b: "🧨",
    content: {
      pt: {
        title: "Mudança Física vs Química: comparação",
        h1: "Mudança Física vs Mudança Química explicadas",
        description: "Mudanças físicas alteram a forma sem criar novas substâncias; mudanças químicas criam novas substâncias. Compare com exemplos claros.",
        intro: "As mudanças na matéria são físicas ou químicas. O teste é se uma nova substância com novas propriedades é formada.",
        pros_a: [
          "Nenhuma substância nova é formada",
          "Apenas forma, estado ou tamanho mudam",
          "Geralmente facilmente reversível",
          "Mesma composição química antes e depois",
          "Exemplos: derreter gelo, cortar papel"
        ],
        pros_b: [
          "Uma ou mais novas substâncias se formam",
          "Ligações químicas se rompem e se formam",
          "Geralmente difícil de reverter",
          "Frequentemente sinalizada por gás, calor ou mudança de cor",
          "Exemplos: queimar madeira, enferrujar ferro"
        ],
        verdict: "Uma mudança física rearranja a matéria sem criar nada novo; uma mudança química produz novas substâncias com novas propriedades. Busque sinais como gás, calor ou cor.",
        faq: [
          { q: "Como identificar uma mudança química?", a: "Observe novas substâncias, mudança de cor, bolhas de gás, luz ou mudança notável de energia." },
          { q: "Dissolver açúcar é uma mudança química?", a: "Não. Dissolver açúcar é uma mudança física porque nenhuma nova substância é formada." },
          { q: "Mudanças físicas são reversíveis?", a: "Geralmente sim, pois a substância mantém a mesma composição ao longo do processo." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "homogeneous-vs-heterogeneous-mixture", a: "Homogeneous mixture", b: "Heterogeneous mixture",
    category: "chemistry", emoji_a: "🥤", emoji_b: "🥗",
    content: {
      pt: {
        title: "Mistura Homogênea vs Heterogênea: comparação",
        h1: "Mistura Homogênea vs Heterogênea explicadas",
        description: "Misturas homogêneas parecem uniformes em toda parte; as heterogêneas têm partes distintas visíveis. Compare esses tipos de mistura.",
        intro: "As misturas se dividem em homogêneas e heterogêneas com base em quão uniformemente seus componentes estão distribuídos.",
        pros_a: [
          "Composição uniforme em todo o volume",
          "Componentes não são visivelmente distintos",
          "Uma única fase visível",
          "Também chamada de solução",
          "Exemplos: água salgada, ar, latão"
        ],
        pros_b: [
          "Composição não-uniforme",
          "Componentes são visivelmente distintos",
          "Duas ou mais fases visíveis",
          "As partes frequentemente podem ser separadas fisicamente",
          "Exemplos: salada, areia e água, granito"
        ],
        verdict: "Uma mistura homogênea parece igual em todos os lugares, como uma solução verdadeira; uma mistura heterogênea tem partes visivelmente separadas. A uniformidade é o teste decisivo.",
        faq: [
          { q: "A água salgada é homogênea?", a: "Sim. A água salgada é uma mistura homogênea com composição uniforme em todo o volume." },
          { q: "O que torna uma mistura heterogênea?", a: "Componentes visivelmente distintos ou mais de uma fase que você pode ver ou separar." },
          { q: "O ar é mistura de qual tipo?", a: "O ar é uma mistura homogênea de gases que parece uniforme." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "proton-vs-electron", a: "Proton", b: "Electron",
    category: "chemistry", emoji_a: "➕", emoji_b: "➖",
    content: {
      pt: {
        title: "Próton vs Elétron: carga e massa",
        h1: "Próton vs Elétron explicados",
        description: "Prótons são partículas nucleares pesadas e positivas; elétrons são partículas leves e negativas em orbitais. Compare essas partículas.",
        intro: "Prótons e elétrons carregam cargas opostas e habitam partes diferentes do átomo, moldando sua estrutura e química.",
        pros_a: [
          "Carga elétrica positiva",
          "Localizado no núcleo",
          "Relativamente pesado, cerca de 1 u.m.a.",
          "Número determina a identidade do elemento",
          "Estável e fortemente preso"
        ],
        pros_b: [
          "Carga elétrica negativa",
          "Localizado em orbitais ao redor do núcleo",
          "Muito leve, cerca de 1/1836 de um próton",
          "Número governa as ligações químicas",
          "Pode ser ganho, perdido ou compartilhado"
        ],
        verdict: "Prótons são pesados e positivos no núcleo; elétrons são leves e negativos em orbitais. Prótons fixam a identidade; elétrons conduzem as ligações químicas.",
        faq: [
          { q: "Qual é mais pesado?", a: "O próton, que é aproximadamente 1836 vezes mais massivo do que um elétron." },
          { q: "Qual partícula controla as ligações?", a: "Os elétrons, pois as ligações químicas se formam ganhando, perdendo ou compartilhando-os." },
          { q: "Onde ficam os elétrons?", a: "Em orbitais, regiões de probabilidade que circundam o núcleo." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "kinetics-vs-thermodynamics", a: "Kinetics", b: "Thermodynamics",
    category: "chemistry", emoji_a: "⏱️", emoji_b: "🌡️",
    content: {
      pt: {
        title: "Cinética vs Termodinâmica em reações",
        h1: "Cinética vs Termodinâmica explicadas",
        description: "A cinética estuda a velocidade de uma reação; a termodinâmica estuda se ela pode ocorrer. Compare essas duas perspectivas.",
        intro: "Cinética e termodinâmica respondem perguntas diferentes sobre uma reação: quão rápido versus se é favorável.",
        pros_a: [
          "Estuda a taxa e a velocidade de reação",
          "Diz respeito à energia de ativação e ao caminho",
          "Afetada por catalisadores e temperatura",
          "Responde 'quão rápido' uma reação ocorre",
          "A taxa pode ser lenta mesmo se a reação for favorável"
        ],
        pros_b: [
          "Estuda a energia e a viabilidade",
          "Diz respeito à entalpia, entropia e energia livre",
          "Prevê a posição do equilíbrio",
          "Responde 'se' uma reação pode ocorrer",
          "Não diz nada sobre a velocidade da reação"
        ],
        verdict: "A termodinâmica diz se uma reação é possível; a cinética diz quão rápido ela chegará lá. Uma reação favorável pode ainda ser lenta demais para ser observada.",
        faq: [
          { q: "Uma reação favorável pode ser lenta?", a: "Sim. A termodinâmica pode favorecer, mas a cinética pode torná-la extremamente lenta sem catalisador." },
          { q: "O que um catalisador afeta?", a: "Um catalisador muda a cinética acelerando a taxa, não a termodinâmica nem o equilíbrio final." },
          { q: "Qual prevê a posição do equilíbrio?", a: "A termodinâmica, por meio da energia livre, prevê onde o equilíbrio se encontra." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "empirical-formula-vs-molecular-formula", a: "Empirical formula", b: "Molecular formula",
    category: "chemistry", emoji_a: "➗", emoji_b: "🧮",
    content: {
      pt: {
        title: "Fórmula Empírica vs Fórmula Molecular",
        h1: "Fórmula Empírica vs Fórmula Molecular explicadas",
        description: "A fórmula empírica mostra a proporção mais simples de átomos; a fórmula molecular mostra o número real. Compare as duas.",
        intro: "As fórmulas químicas vêm em dois formatos. Uma dá a proporção mais simples, a outra o número verdadeiro de átomos.",
        pros_a: [
          "Mostra a proporção mais simples em números inteiros",
          "Reduzida aos termos mínimos",
          "Obtida da composição percentual",
          "Igual para compostos relacionados",
          "Exemplo: CH para o benzeno"
        ],
        pros_b: [
          "Mostra o número real de átomos",
          "Múltiplo inteiro da fórmula empírica",
          "Obtida usando a massa molar",
          "Única para o composto específico",
          "Exemplo: C6H6 para o benzeno"
        ],
        verdict: "A fórmula empírica dá a proporção mais simples; a fórmula molecular dá o número real. Multiplique a fórmula empírica por um número inteiro, obtido da massa molar, para obter a molecular.",
        faq: [
          { q: "Como obter a fórmula molecular?", a: "Encontre a fórmula empírica e multiplique pelo quociente entre a massa molar e a massa empírica." },
          { q: "Elas podem ser iguais?", a: "Sim. Para a água, tanto a fórmula empírica quanto a molecular são H2O." },
          { q: "De onde vem a fórmula empírica?", a: "É calculada a partir da composição percentual em massa de cada elemento." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exothermic-reaction-vs-combustion", a: "Exothermic reaction", b: "Combustion",
    category: "chemistry", emoji_a: "🔥", emoji_b: "🔥",
    content: {
      pt: {
        title: "Reação Exotérmica vs Combustão: comparação",
        h1: "Reação Exotérmica vs Combustão explicadas",
        description: "Toda combustão é exotérmica, mas reações exotérmicas são uma classe mais ampla. Compare a categoria geral com a queima.",
        intro: "A combustão é um tipo específico de reação exotérmica. Entender a relação esclarece a química de liberação de energia.",
        pros_a: [
          "Qualquer reação que libera energia",
          "Categoria ampla de reações",
          "Inclui neutralização e respiração",
          "Variação de entalpia negativa",
          "Não requer oxigênio"
        ],
        pros_b: [
          "Uma reação exotérmica específica",
          "Reação de um combustível com oxigênio",
          "Produz calor e geralmente luz",
          "Frequentemente forma dióxido de carbono e água",
          "Exemplos: queimar madeira, gás ou combustível"
        ],
        verdict: "A combustão é um tipo de reação exotérmica que requer um combustível e oxigênio. Toda combustão libera energia, mas muitas reações exotérmicas não precisam de oxigênio.",
        faq: [
          { q: "Toda combustão é exotérmica?", a: "Sim. A combustão sempre libera energia, tornando-a um tipo de reação exotérmica." },
          { q: "Todas as reações exotérmicas são combustão?", a: "Não. Neutralização e respiração liberam energia sem ser combustão." },
          { q: "O que a combustão precisa?", a: "A combustão requer um combustível e oxigênio, além de calor suficiente para começar." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "concentrated-vs-dilute", a: "Concentrated", b: "Dilute",
    category: "chemistry", emoji_a: "🧴", emoji_b: "💦",
    content: {
      pt: {
        title: "Solução Concentrada vs Diluída: comparação",
        h1: "Solução Concentrada vs Diluída explicadas",
        description: "Uma solução concentrada tem muito soluto por volume; uma diluída tem pouco. Compare essas descrições de concentração.",
        intro: "Concentrado e diluído descrevem quanto soluto está presente em uma solução — uma comparação relativa, não um valor fixo.",
        pros_a: [
          "Grande quantidade de soluto por unidade de volume",
          "Valor de concentração alto",
          "Menos solvente em relação ao soluto",
          "Frequentemente aparece mais escura ou viscosa",
          "Torna-se diluída ao adicionar mais solvente"
        ],
        pros_b: [
          "Pequena quantidade de soluto por unidade de volume",
          "Valor de concentração baixo",
          "Mais solvente em relação ao soluto",
          "Frequentemente aparece mais clara ou fluida",
          "Torna-se concentrada ao evaporar o solvente"
        ],
        verdict: "Concentrado e diluído são termos relativos que descrevem a quantidade de soluto por volume. Adicionar solvente dilui a solução; remover solvente a concentra.",
        faq: [
          { q: "Como diluir uma solução?", a: "Adicione mais solvente, o que reduz a quantidade de soluto por unidade de volume." },
          { q: "Concentrado é o mesmo que forte?", a: "Não. Concentração refere-se à quantidade por volume, enquanto força refere-se ao grau de ionização." },
          { q: "Esses termos são absolutos?", a: "Não. São comparações relativas entre soluções, não valores numéricos fixos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "primary-cell-vs-secondary-cell", a: "Primary cell", b: "Secondary cell",
    category: "chemistry", emoji_a: "🪫", emoji_b: "🔋",
    content: {
      pt: {
        title: "Pilha Primária vs Secundária: tipos de bateria",
        h1: "Pilha Primária vs Pilha Secundária explicadas",
        description: "Pilhas primárias são descartáveis; pilhas secundárias são recarregáveis. Compare esses dois tipos de bateria.",
        intro: "As baterias se dividem em pilhas primárias e secundárias, dependendo se sua reação pode ser revertida com recarga.",
        pros_a: [
          "Descartável, não recarregável",
          "Reação irreversível",
          "Descartada ao se esgotar",
          "Custo inicial menor",
          "Exemplos: pilhas alcalinas AA, zinco-carbono"
        ],
        pros_b: [
          "Recarregável muitas vezes",
          "Reação pode ser revertida por recarga",
          "Reutilizada por muitos ciclos",
          "Custo maior, mas melhor relação custo-benefício",
          "Exemplos: íon-lítio, chumbo-ácido"
        ],
        verdict: "Pilhas primárias são usadas uma vez e descartadas; pilhas secundárias podem ser recarregadas e reutilizadas. As secundárias custam mais, mas são mais baratas e sustentáveis no longo prazo.",
        faq: [
          { q: "Uma pilha primária pode ser recarregada?", a: "Não. Sua reação química é irreversível, então deve ser substituída ao se esgotar." },
          { q: "Por que pilhas secundárias custam mais?", a: "Usam química reversível mais complexa, mas o custo se dilui ao longo de muitos ciclos de recarga." },
          { q: "A bateria de carro é primária ou secundária?", a: "Uma bateria de carro chumbo-ácido é uma pilha secundária, projetada para ser recarregada." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "strong-base-vs-weak-base", a: "Strong base", b: "Weak base",
    category: "chemistry", emoji_a: "🧼", emoji_b: "🧴",
    content: {
      pt: {
        title: "Base Forte vs Base Fraca: diferenças essenciais",
        h1: "Base Forte vs Base Fraca explicadas",
        description: "Bases fortes se dissociam completamente na água; bases fracas apenas parcialmente. Compare pH, dissociação e exemplos.",
        intro: "A força de uma base diz respeito à extensão da sua ionização, não à sua concentração. Isso molda o pH e a reatividade.",
        pros_a: [
          "Se dissocia completamente em água",
          "pH alto na mesma concentração",
          "Libera muitos íons hidróxido",
          "Reação essencialmente irreversível",
          "Exemplos: NaOH, KOH"
        ],
        pros_b: [
          "Se dissocia apenas parcialmente em água",
          "pH menor que uma base forte na mesma concentração",
          "Libera menos íons hidróxido",
          "Estabelece um equilíbrio",
          "Exemplos: amônia, metilamina"
        ],
        verdict: "Bases fortes ionizam completamente e dão pH alto; bases fracas estabelecem um equilíbrio e ionizam parcialmente. Força é independente de concentração.",
        faq: [
          { q: "Base forte significa concentrada?", a: "Não. Força é sobre o grau de ionização, enquanto concentração é quantidade por volume." },
          { q: "O que é o valor Kb?", a: "Kb é a constante de equilíbrio que mostra até onde uma base fraca ioniza em água." },
          { q: "A amônia é base forte ou fraca?", a: "A amônia é uma base fraca porque se ioniza apenas parcialmente em água." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "addition-reaction-vs-substitution-reaction", a: "Addition reaction", b: "Substitution reaction",
    category: "chemistry", emoji_a: "➕", emoji_b: "🔁",
    content: {
      pt: {
        title: "Reação de Adição vs Substituição: comparação",
        h1: "Reação de Adição vs Substituição explicadas",
        description: "Reações de adição adicionam átomos sobre uma dupla ligação; substituição troca um átomo por outro. Compare essas reações orgânicas.",
        intro: "Adição e substituição são dois tipos fundamentais de reação orgânica. Se átomos são adicionados ou trocados os diferencia.",
        pros_a: [
          "Átomos se adicionam sobre uma ligação múltipla",
          "Dupla ou tripla ligação vira simples",
          "Típica de compostos insaturados",
          "Nenhuma molécula pequena é liberada",
          "Exemplo: bromo se adicionando a um alceno"
        ],
        pros_b: [
          "Um átomo ou grupo substitui outro",
          "Ligações são trocadas, não adicionadas",
          "Típica de compostos saturados e aromáticos",
          "Frequentemente libera uma molécula pequena",
          "Exemplo: cloração de um alcano"
        ],
        verdict: "Reações de adição saturam uma ligação múltipla adicionando átomos; reações de substituição trocam um grupo por outro. Compostos insaturados favorecem adição; saturados favorecem substituição.",
        faq: [
          { q: "Quais compostos sofrem adição?", a: "Compostos insaturados com duplas ou triplas ligações, como alcenos e alcinos." },
          { q: "O que ocorre em uma reação de substituição?", a: "Um átomo ou grupo na molécula é substituído por um átomo ou grupo diferente." },
          { q: "Por que aromáticos preferem substituição?", a: "A substituição mantém o anel aromático estável intacto, enquanto a adição o destruiria." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "organic-vs-inorganic-compound", a: "Organic compound", b: "Inorganic compound",
    category: "chemistry", emoji_a: "🌱", emoji_b: "🪨",
    content: {
      pt: {
        title: "Composto Orgânico vs Inorgânico: comparação",
        h1: "Composto Orgânico vs Inorgânico explicados",
        description: "Compostos orgânicos são baseados em carbono; os inorgânicos geralmente não. Compare essas duas grandes classes químicas.",
        intro: "A química divide os compostos em orgânicos e inorgânicos. A presença de ligações carbono-hidrogênio é a linha divisória usual.",
        pros_a: [
          "Baseado em carbono, geralmente com hidrogênio",
          "Geralmente com ligações covalentes",
          "Frequentemente inflamável, pontos de fusão mais baixos",
          "Forma moléculas enormes e variadas",
          "Exemplos: metano, glicose, etanol"
        ],
        pros_b: [
          "Geralmente sem base carbono-hidrogênio",
          "Frequentemente com ligações iônicas",
          "Geralmente pontos de fusão mais altos",
          "Frequentemente se dissolve conduzindo eletricidade",
          "Exemplos: sal, água, ácido sulfúrico"
        ],
        verdict: "Compostos orgânicos são baseados em carbono com ligações covalentes e grande variedade estrutural; os inorgânicos cobrem todo o resto, frequentemente iônicos com pontos de fusão mais altos.",
        faq: [
          { q: "O que define um composto orgânico?", a: "A maioria contém átomos de carbono ligados ao hidrogênio, a marca registrada da química orgânica." },
          { q: "O dióxido de carbono é orgânico?", a: "O dióxido de carbono contém carbono, mas é classicamente classificado como inorgânico." },
          { q: "Por que há tantos compostos orgânicos?", a: "O carbono forma cadeias, anéis e ramificações estáveis, permitindo variedade estrutural infinita." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "electronegativity-vs-electron-affinity", a: "Electronegativity", b: "Electron affinity",
    category: "chemistry", emoji_a: "🧲", emoji_b: "⚡",
    content: {
      pt: {
        title: "Eletronegatividade vs Afinidade Eletrônica",
        h1: "Eletronegatividade vs Afinidade Eletrônica explicadas",
        description: "Eletronegatividade é a atração sobre elétrons compartilhados em uma ligação; afinidade eletrônica é a energia liberada quando um átomo ganha um elétron.",
        intro: "Ambos os termos descrevem a atração de um átomo por elétrons, mas um se aplica dentro de uma ligação e o outro a um átomo livre.",
        pros_a: [
          "Atração sobre elétrons compartilhados em uma ligação",
          "Uma escala relativa sem unidade",
          "Medida pela escala de Pauling",
          "Prevê a polaridade da ligação",
          "O flúor tem o valor mais alto"
        ],
        pros_b: [
          "Variação de energia quando um átomo ganha um elétron",
          "Uma energia medida real em kJ/mol",
          "Aplica-se a um átomo gasoso isolado",
          "Geralmente libera energia (valor negativo)",
          "O cloro tem um valor muito alto"
        ],
        verdict: "A eletronegatividade é uma atração relativa dentro de ligações; a afinidade eletrônica é uma energia medida para um átomo livre ganhando um elétron. Ambas aumentam ao longo de um período.",
        faq: [
          { q: "Como os dois diferem?", a: "Eletronegatividade é uma escala relativa para átomos em ligações; afinidade eletrônica é uma energia para um átomo livre." },
          { q: "Qual elemento tem maior eletronegatividade?", a: "O flúor tem a maior eletronegatividade de todos os elementos." },
          { q: "Quais unidades a afinidade eletrônica usa?", a: "A afinidade eletrônica é medida como energia em quilojoules por mol." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "monomer-vs-polymer", a: "Monomer", b: "Polymer",
    category: "chemistry", emoji_a: "🔵", emoji_b: "⛓️",
    content: {
      pt: {
        title: "Monômero vs Polímero: blocos de construção",
        h1: "Monômero vs Polímero explicados",
        description: "Monômeros são pequenas unidades repetitivas; polímeros são longas cadeias construídas a partir de muitos monômeros. Compare esses termos.",
        intro: "Os polímeros são feitos ligando muitos monômeros. A relação é como contas formando um longo colar.",
        pros_a: [
          "Uma única unidade molecular pequena",
          "O bloco de construção de um polímero",
          "Pode reagir e se juntar a outros monômeros",
          "Baixa massa molecular",
          "Exemplos: eteno, glicose, aminoácidos"
        ],
        pros_b: [
          "Uma longa cadeia de muitos monômeros",
          "Construído por polimerização",
          "Massa molecular muito alta",
          "Tem propriedades diferentes de seus monômeros",
          "Exemplos: polietileno, amido, proteínas"
        ],
        verdict: "Um monômero é uma única unidade pequena; um polímero é muitas delas ligadas em uma longa cadeia. A polimerização une monômeros, frequentemente liberando moléculas pequenas no processo.",
        faq: [
          { q: "Como os polímeros são feitos?", a: "Por polimerização, onde muitas unidades de monômero se ligam formando uma longa cadeia." },
          { q: "Os polímeros agem como seus monômeros?", a: "Não. Os polímeros geralmente têm propriedades muito diferentes dos monômeros que os constroem." },
          { q: "O amido é um polímero?", a: "Sim. O amido é um polímero natural construído a partir de muitas unidades de glicose." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "fission-vs-fusion", a: "Nuclear fission", b: "Nuclear fusion",
    category: "chemistry", emoji_a: "💥", emoji_b: "☀️",
    content: {
      pt: {
        title: "Fissão Nuclear vs Fusão Nuclear: comparação",
        h1: "Fissão Nuclear vs Fusão Nuclear explicadas",
        description: "A fissão divide um núcleo pesado; a fusão une núcleos leves. Compare essas duas reações nucleares e sua liberação de energia.",
        intro: "Fissão e fusão liberam energia nuclear, mas funcionam em direções opostas no núcleo.",
        pros_a: [
          "Divide um núcleo pesado em menores",
          "Disparada por bombardeio de nêutrons",
          "Alimenta os reatores nucleares atuais",
          "Produz resíduos radioativos de longa duração",
          "Exemplo: divisão do urânio-235"
        ],
        pros_b: [
          "Une núcleos leves em um mais pesado",
          "Requer temperatura e pressão extremas",
          "Alimenta o Sol e as estrelas",
          "Produz muito menos resíduos radioativos",
          "Exemplo: hidrogênio fundindo-se em hélio"
        ],
        verdict: "A fissão divide átomos pesados e alimenta os reatores de hoje; a fusão une átomos leves e alimenta as estrelas. A fusão libera mais energia por massa, mas é muito mais difícil de sustentar na Terra.",
        faq: [
          { q: "O que alimenta o Sol?", a: "A fusão nuclear, unindo núcleos de hidrogênio em hélio, alimenta o Sol e outras estrelas." },
          { q: "Por que a fusão é difícil de alcançar?", a: "Requer temperatura e pressão extremas para superar a repulsão entre os núcleos." },
          { q: "Qual produz mais resíduos nucleares?", a: "A fissão produz resíduos radioativos de longa duração, enquanto a fusão produz muito menos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "qualitative-vs-quantitative-analysis", a: "Qualitative analysis", b: "Quantitative analysis",
    category: "chemistry", emoji_a: "🔍", emoji_b: "📊",
    content: {
      pt: {
        title: "Análise Qualitativa vs Quantitativa",
        h1: "Análise Qualitativa vs Quantitativa explicadas",
        description: "A análise qualitativa identifica o que está presente; a quantitativa mede quanto há. Compare essas duas abordagens de laboratório.",
        intro: "A análise química responde duas perguntas: o que está em uma amostra e quanto. Cada uma é tratada por uma abordagem diferente.",
        pros_a: [
          "Identifica quais substâncias estão presentes",
          "Responde à pergunta 'o quê'",
          "Usa testes de chama e reações de precipitação",
          "Dá resultados descritivos, não numéricos",
          "Exemplo: testar um íon metálico"
        ],
        pros_b: [
          "Mede a quantidade de uma substância",
          "Responde à pergunta 'quanto'",
          "Usa titulação e métodos gravimétricos",
          "Dá resultados numéricos",
          "Exemplo: encontrar a concentração de uma solução"
        ],
        verdict: "A análise qualitativa identifica os componentes de uma amostra; a quantitativa mede suas quantidades. Laboratórios frequentemente executam a qualitativa primeiro, depois a quantitativa.",
        faq: [
          { q: "Qual tipo usa titulação?", a: "A análise quantitativa, pois a titulação mede quanto de uma substância está presente." },
          { q: "O que a análise qualitativa diz?", a: "Identifica quais substâncias ou íons estão presentes, sem fornecer quantidades." },
          { q: "As duas podem ser usadas juntas?", a: "Sim. Uma amostra é frequentemente identificada qualitativamente primeiro e depois medida quantitativamente." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exact-number-vs-measured-number", a: "Exact number", b: "Measured number",
    category: "chemistry", emoji_a: "💯", emoji_b: "📏",
    content: {
      pt: {
        title: "Número Exato vs Número Medido em Química",
        h1: "Número Exato vs Número Medido explicados",
        description: "Números exatos não têm incerteza; números medidos sempre têm alguma. Compare esses dois tipos para algarismos significativos.",
        intro: "Os números em química vêm em dois tipos. Um é perfeitamente preciso; o outro é limitado pelo instrumento de medição.",
        pros_a: [
          "Sem incerteza alguma",
          "Vem de contagem ou definições",
          "Algarismos significativos infinitos",
          "Não limita a precisão do cálculo",
          "Exemplos: 12 em uma dúzia, 100 cm em um metro"
        ],
        pros_b: [
          "Sempre carrega alguma incerteza",
          "Vem do uso de um instrumento",
          "Algarismos significativos limitados",
          "Limita a precisão de um resultado",
          "Exemplos: uma massa de 5,32 g, um comprimento de 4,1 cm"
        ],
        verdict: "Números exatos são perfeitamente precisos, vindos de contagem ou definições; números medidos sempre têm incerteza. Apenas os números medidos limitam os algarismos significativos em um cálculo.",
        faq: [
          { q: "Por que números exatos não limitam algarismos significativos?", a: "Têm algarismos significativos infinitos, então nunca restringem a precisão de um cálculo." },
          { q: "De onde vêm os números medidos?", a: "De instrumentos como balanças, réguas e termômetros, que sempre têm alguma incerteza." },
          { q: "Uma quantidade contada é exata?", a: "Sim. Contar itens inteiros, como 24 alunos, dá um número exato." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "valence-electron-vs-core-electron", a: "Valence electron", b: "Core electron",
    category: "chemistry", emoji_a: "🌟", emoji_b: "⚫",
    content: {
      pt: {
        title: "Elétron de Valência vs Elétron de Caroço",
        h1: "Elétron de Valência vs Elétron de Caroço explicados",
        description: "Elétrons de valência ficam na camada externa e conduzem ligações; elétrons de caroço são internos e blindados. Compare esses elétrons.",
        intro: "Os elétrons em um átomo se dividem em dois papéis. Os mais externos fazem a química; os internos ficam presos.",
        pros_a: [
          "Localizado na camada mais externa",
          "Envolvido nas ligações químicas",
          "Determina a reatividade do elemento",
          "Mostrado em diagramas de Lewis",
          "Perdido, ganho ou compartilhado em reações"
        ],
        pros_b: [
          "Localizado nas camadas internas preenchidas",
          "Não envolvido em ligações",
          "Fortemente preso pelo núcleo",
          "Blinda os elétrons de valência da carga nuclear total",
          "Geralmente inalterado em reações"
        ],
        verdict: "Elétrons de valência vivem na camada externa e governam ligações e reatividade; elétrons de caroço ficam enterrados dentro, blindando os externos mas sem participar das reações.",
        faq: [
          { q: "Quais elétrons participam das ligações?", a: "Os elétrons de valência na camada mais externa são os envolvidos nas ligações químicas." },
          { q: "O que fazem os elétrons de caroço?", a: "Blindam os elétrons de valência da atração total do núcleo, mas não formam ligações." },
          { q: "Onde elétrons de valência são mostrados?", a: "Em diagramas de Lewis, que exibem apenas os elétrons da camada externa." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "sigma-bond-vs-pi-bond", a: "Sigma bond", b: "Pi bond",
    category: "chemistry", emoji_a: "➖", emoji_b: "〰️",
    content: {
      pt: {
        title: "Ligação Sigma vs Pi: ligações covalentes",
        h1: "Ligação Sigma vs Ligação Pi explicadas",
        description: "Ligações sigma se formam por sobreposição frontal de orbitais; ligações pi por sobreposição lateral. Compare resistência e rotação.",
        intro: "As ligações covalentes vêm em dois tipos. Sigma e pi diferem na forma como seus orbitais se sobrepõem e em sua resistência.",
        pros_a: [
          "Formada por sobreposição frontal de orbitais",
          "Forte, com densidade eletrônica no eixo da ligação",
          "Sempre a primeira ligação entre dois átomos",
          "Permite rotação livre ao redor da ligação",
          "Presente em todas as ligações simples"
        ],
        pros_b: [
          "Formada por sobreposição lateral de orbitais",
          "Mais fraca, com densidade acima e abaixo do eixo",
          "Só se forma após uma ligação sigma existir",
          "Impede a rotação ao redor da ligação",
          "Presente em ligações duplas e triplas"
        ],
        verdict: "A ligação sigma é a primeira ligação forte por sobreposição frontal; as ligações pi são sobreposições laterais mais fracas presentes em duplas e triplas ligações. As ligações pi travam a molécula contra a rotação.",
        faq: [
          { q: "Qual ligação é mais forte?", a: "A ligação sigma, porque a sobreposição frontal concentra a densidade eletrônica de forma mais eficaz." },
          { q: "Quantas ligações há em uma tripla ligação?", a: "Uma tripla ligação tem uma ligação sigma e duas ligações pi." },
          { q: "Por que ligações duplas não rotacionam?", a: "A sobreposição lateral da ligação pi se romperia se os átomos girassem, então a rotação é bloqueada." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "electrophile-vs-nucleophile", a: "Electrophile", b: "Nucleophile",
    category: "chemistry", emoji_a: "🧲", emoji_b: "💞",
    content: {
      pt: {
        title: "Eletrófilo vs Nucleófilo: comparação",
        h1: "Eletrófilo vs Nucleófilo explicados",
        description: "Eletrófilos buscam elétrons; nucleófilos os doam. Compare essas duas espécies-chave em mecanismos de reação orgânica.",
        intro: "As reações orgânicas são em grande parte uma dança entre espécies pobres e ricas em elétrons — eletrófilos e nucleófilos.",
        pros_a: [
          "Espécie amante de elétrons, deficiente em elétrons",
          "Aceita um par de elétrons",
          "Frequentemente positivo ou parcialmente positivo",
          "Atacado por nucleófilos",
          "Exemplos: H+, carbocátions, Br2"
        ],
        pros_b: [
          "Espécie amante de núcleo, rica em elétrons",
          "Doa um par de elétrons",
          "Frequentemente negativo ou com par de elétrons solitário",
          "Ataca eletrófilos",
          "Exemplos: OH-, NH3, CN-"
        ],
        verdict: "Eletrófilos são pobres em elétrons e aceitam pares de elétrons; nucleófilos são ricos em elétrons e os doam. As reações ocorrem quando um nucleófilo ataca um eletrófilo.",
        faq: [
          { q: "Qual deles doa elétrons?", a: "O nucleófilo doa um par de elétrons; o eletrófilo os aceita." },
          { q: "Um íon positivo é um eletrófilo?", a: "Geralmente sim. Espécies positivas ou deficientes em elétrons agem como eletrófilos." },
          { q: "Como eles reagem juntos?", a: "Um nucleófilo rico em elétrons ataca um eletrófilo pobre em elétrons, formando uma nova ligação." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "buffer-vs-indicator", a: "Buffer", b: "Indicator",
    category: "chemistry", emoji_a: "⚖️", emoji_b: "🌈",
    content: {
      pt: {
        title: "Tampão vs Indicador: ferramentas ácido-base",
        h1: "Tampão vs Indicador explicados",
        description: "Um tampão resiste à mudança de pH; um indicador sinaliza o pH mudando de cor. Compare essas duas ferramentas de laboratório.",
        intro: "Tampões e indicadores se relacionam ao pH, mas fazem trabalhos opostos: um estabiliza o pH, o outro o revela.",
        pros_a: [
          "Resiste a mudanças no pH",
          "Feito de ácido fraco e sua base conjugada",
          "Mantém o pH estável ao adicionar ácido ou base",
          "Vital no sangue e sistemas biológicos",
          "Exemplo: ácido acético com acetato de sódio"
        ],
        pros_b: [
          "Sinaliza o pH de uma solução",
          "Muda de cor ao longo de uma faixa de pH",
          "Frequentemente um ácido ou base fraco em si",
          "Usado para encontrar o ponto final de titulações",
          "Exemplos: tornassol, fenolftaleína"
        ],
        verdict: "Um tampão mantém o pH estável contra ácido ou base adicionados; um indicador muda de cor para revelar o pH. Um estabiliza; o outro informa.",
        faq: [
          { q: "Do que é feito um tampão?", a: "Tipicamente de um ácido fraco e sua base conjugada, ou de uma base fraca e seu ácido conjugado." },
          { q: "Por que usar um indicador na titulação?", a: "Sua mudança de cor marca o ponto final, mostrando quando a neutralização está completa." },
          { q: "O indicador muda o pH?", a: "Não. O indicador apenas revela o pH; ele não estabiliza nem altera significativamente o pH." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-bond-breaking", a: "Bond breaking", b: "Bond making",
    category: "chemistry", emoji_a: "💥", emoji_b: "🔗",
    content: {
      pt: {
        title: "Rompimento vs Formação de Ligação: energia",
        h1: "Rompimento vs Formação de Ligação explicados",
        description: "Romper ligações absorve energia; formar ligações a libera. Compare essas duas etapas que decidem a energia de uma reação.",
        intro: "Toda reação rompe ligações antigas e forma novas. O equilíbrio entre as duas decide se a reação é exo ou endotérmica.",
        pros_a: [
          "Energia deve ser absorvida para romper uma ligação",
          "Uma etapa endotérmica",
          "Sempre requer entrada de energia",
          "Ligações mais fortes precisam de mais energia",
          "Ocorre com os reagentes"
        ],
        pros_b: [
          "Energia é liberada quando uma ligação se forma",
          "Uma etapa exotérmica",
          "Sempre libera energia",
          "Ligações mais fortes liberam mais energia",
          "Ocorre para formar os produtos"
        ],
        verdict: "Romper ligações sempre absorve energia e formar ligações sempre a libera. Se a formação libera mais do que o rompimento absorve, a reação é exotérmica no geral.",
        faq: [
          { q: "Qual etapa libera energia?", a: "A formação de ligações libera energia; o rompimento de ligações a absorve." },
          { q: "Como isso decide exo vs endotérmico?", a: "Se as novas ligações formadas liberam mais do que as ligações rompidas absorvem, a reação é exotérmica." },
          { q: "Ligações mais fortes importam mais?", a: "Sim. Ligações mais fortes absorvem mais energia para romper e liberam mais energia ao se formar." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "concentration-vs-rate-of-reaction", a: "Concentration", b: "Rate of reaction",
    category: "chemistry", emoji_a: "🧴", emoji_b: "⏱️",
    content: {
      pt: {
        title: "Concentração vs Taxa de Reação: conexão",
        h1: "Concentração vs Taxa de Reação explicadas",
        description: "A concentração mede quanto soluto está presente; a taxa de reação mede a velocidade do processo. Compare e relacione as duas.",
        intro: "Concentração e taxa de reação estão ligadas, mas são distintas: uma é um estado, a outra é uma velocidade.",
        pros_a: [
          "Quantidade de soluto por unidade de volume",
          "Uma quantidade pontual em um determinado momento",
          "Medida em mol/L",
          "Valor maior significa mais partículas presentes",
          "Afeta a frequência das colisões"
        ],
        pros_b: [
          "Quão rápido os reagentes se transformam em produtos",
          "Medida por unidade de tempo",
          "Expressa como variação de concentração ao longo do tempo",
          "Valor maior significa reação mais rápida",
          "Afetada por concentração, temperatura e catalisadores"
        ],
        verdict: "A concentração é quanto está presente; a taxa de reação é quão rápido a mudança ocorre. Aumentar a concentração geralmente aumenta a taxa ao causar colisões mais frequentes.",
        faq: [
          { q: "Como a concentração afeta a taxa?", a: "Reagentes mais concentrados colidem com mais frequência, então a reação geralmente fica mais rápida." },
          { q: "Quais unidades a taxa usa?", a: "A taxa geralmente é expressa como variação de concentração por unidade de tempo, como mol/L por segundo." },
          { q: "A concentração é o único fator na taxa?", a: "Não. Temperatura, área de superfície e catalisadores também afetam a taxa de reação." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "noble-gas-vs-alkali-metal", a: "Noble gas", b: "Alkali metal",
    category: "chemistry", emoji_a: "💡", emoji_b: "🔥",
    content: {
      pt: {
        title: "Gás Nobre vs Metal Alcalino: extremos da tabela",
        h1: "Gás Nobre vs Metal Alcalino explicados",
        description: "Gases nobres são os elementos menos reativos; metais alcalinos estão entre os mais reativos. Compare esses extremos da tabela periódica.",
        intro: "Grupo 18 e Grupo 1 ficam em extremos opostos de reatividade. Um tem a camada de elétrons completa, o outro tem um único elétron solto.",
        pros_a: [
          "Grupo 18 com camada de valência completa",
          "Extremamente estável e não-reativo",
          "Existe como átomos estáveis e isolados",
          "Gases incolores e inodoros",
          "Exemplos: hélio, neônio, argônio"
        ],
        pros_b: [
          "Grupo 1 com um elétron de valência",
          "Extremamente reativo, especialmente com água",
          "Metais macios com baixa densidade",
          "Armazenados em óleo para segurança",
          "Exemplos: lítio, sódio, potássio"
        ],
        verdict: "Gases nobres são os elementos mais calmos graças à camada completa; metais alcalinos são dos mais violentos por um elétron facilmente perdido. Marcam os extremos de reatividade.",
        faq: [
          { q: "Por que gases nobres são tão estáveis?", a: "Sua camada eletrônica externa completa não os dá nenhum impulso para reagir com outros elementos." },
          { q: "Por que metais alcalinos são guardados em óleo?", a: "Reagem tão rapidamente com ar e água que o óleo os protege da umidade." },
          { q: "Qual é mais reativo?", a: "Metais alcalinos são muito mais reativos; gases nobres são quase inertes." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "endpoint-vs-equivalence-point", a: "Endpoint", b: "Equivalence point",
    category: "chemistry", emoji_a: "🌈", emoji_b: "⚖️",
    content: {
      pt: {
        title: "Ponto Final vs Ponto de Equivalência em Titulação",
        h1: "Ponto Final vs Ponto de Equivalência explicados",
        description: "O ponto de equivalência é onde os reagentes se equilibram exatamente; o ponto final é onde o indicador muda. Compare os dois.",
        intro: "A titulação tem dois pontos estreitamente relacionados. Um é o equilíbrio químico verdadeiro; o outro é o que o indicador mostra.",
        pros_a: [
          "Onde o indicador muda de cor visivelmente",
          "O que o experimentador observa de fato",
          "Ligeiramente após o ponto de equivalência",
          "Depende do indicador escolhido",
          "Um sinal prático e observado"
        ],
        pros_b: [
          "Onde ácido e base se neutralizam exatamente",
          "Moles de reagentes estão em igualdade estequiométrica",
          "O verdadeiro ponto teórico",
          "Independente de qualquer indicador",
          "Encontrado com precisão por pHmetro"
        ],
        verdict: "O ponto de equivalência é o equilíbrio químico verdadeiro; o ponto final é a mudança de cor observada. Um bom indicador faz o ponto final coincidir muito próximo do ponto de equivalência.",
        faq: [
          { q: "Os dois pontos são os mesmos?", a: "Não exatamente. Um indicador bem escolhido faz o ponto final coincidir quase com o ponto de equivalência." },
          { q: "Qual é o ponto teórico?", a: "O ponto de equivalência é o verdadeiro ponto teórico onde os reagentes estão em igualdade estequiométrica." },
          { q: "Por que escolher o indicador com cuidado?", a: "Para que sua mudança de cor ocorra o mais próximo possível do ponto de equivalência, garantindo precisão." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "hard-water-vs-soft-water", a: "Hard water", b: "Soft water",
    category: "chemistry", emoji_a: "🪨", emoji_b: "💧",
    content: {
      pt: {
        title: "Água Dura vs Água Mole: comparação",
        h1: "Água Dura vs Água Mole explicadas",
        description: "Água dura é rica em íons de cálcio e magnésio; a mole tem poucos. Compare esses dois tipos de água.",
        intro: "A dureza da água depende de íons minerais dissolvidos. A quantidade de cálcio e magnésio decide se a água é dura ou mole.",
        pros_a: [
          "Alta concentração de íons cálcio e magnésio",
          "Forma espuma de sabão",
          "Deixa incrustações em chaleiras e canos",
          "Forma pouca espuma com sabão",
          "Geralmente vem de regiões calcárias"
        ],
        pros_b: [
          "Baixa concentração de íons cálcio e magnésio",
          "Forma espuma facilmente com sabão",
          "Deixa pouca ou nenhuma incrustação",
          "Encontrada em regiões com rochas duras como granito",
          "Pode ser produzida por amaciamento por troca iônica"
        ],
        verdict: "A água dura contém cálcio e magnésio dissolvidos que dificultam a sabão e formam incrustações; a água mole tem poucos íons e forma espuma facilmente. A dureza reflete a geologia local.",
        faq: [
          { q: "O que causa a dureza da água?", a: "Íons de cálcio e magnésio dissolvidos, geralmente captados de rochas calcárias ou de giz." },
          { q: "Por que água dura forma incrustações?", a: "Ao aquecê-la, deposita carbonato de cálcio insolúvel como incrustação em chaleiras e canos." },
          { q: "Como a água dura é amaciada?", a: "Por troca iônica, substituindo íons de cálcio e magnésio por íons de sódio." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "lewis-acid-vs-lewis-base", a: "Lewis acid", b: "Lewis base",
    category: "chemistry", emoji_a: "🤲", emoji_b: "🎁",
    content: {
      pt: {
        title: "Ácido de Lewis vs Base de Lewis: comparação",
        h1: "Ácido de Lewis vs Base de Lewis explicados",
        description: "Um ácido de Lewis aceita um par de elétrons; uma base de Lewis o doa. Compare essa definição ampla de ácido-base.",
        intro: "A teoria de Lewis define ácidos e bases por pares de elétrons, ampliando a ideia além de prótons e íons hidróxido.",
        pros_a: [
          "Aceita um par de elétrons",
          "Aceptor de par de elétrons",
          "Frequentemente tem um orbital vazio",
          "Inclui espécies sem prótons",
          "Exemplos: BF3, H+, cátions metálicos"
        ],
        pros_b: [
          "Doa um par de elétrons",
          "Doador de par de elétrons",
          "Geralmente tem um par solitário disponível",
          "Inclui espécies sem hidróxido",
          "Exemplos: NH3, H2O, OH-"
        ],
        verdict: "Ácidos de Lewis aceitam pares de elétrons e bases de Lewis os doam — uma definição ampla o suficiente para cobrir reações sem nenhum próton. Formam uma ligação compartilhando um único par.",
        faq: [
          { q: "Como a definição de Lewis difere?", a: "Foca em pares de elétrons em vez de transferência de prótons, cobrindo muito mais reações." },
          { q: "Toda base de Lewis é também uma base de Brønsted?", a: "Muitas são, mas a definição de Lewis é mais ampla e inclui espécies que não aceitam prótons." },
          { q: "Que ligação se forma em uma reação de Lewis?", a: "Uma ligação covalente coordenada, onde a base fornece ambos os elétrons compartilhados." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exothermic-graph-vs-endothermic-graph", a: "Activation energy", b: "Enthalpy change",
    category: "chemistry", emoji_a: "⛰️", emoji_b: "📉",
    content: {
      pt: {
        title: "Energia de Ativação vs Variação de Entalpia",
        h1: "Energia de Ativação vs Variação de Entalpia explicadas",
        description: "A energia de ativação é a barreira para iniciar uma reação; a variação de entalpia é a diferença de energia líquida. Compare as duas em um gráfico.",
        intro: "Os diagramas de energia mostram duas grandezas-chave. Uma é a colina que deve ser escalada; a outra é a variação total de energia.",
        pros_a: [
          "A energia mínima para iniciar uma reação",
          "A altura da barreira energética",
          "Reduzida adicionando um catalisador",
          "Determina a taxa de reação",
          "Medida dos reagentes até o pico"
        ],
        pros_b: [
          "A diferença de energia líquida da reação",
          "Energia do reagente menos energia do produto",
          "Negativa para exotérmico, positiva para endotérmico",
          "Não é afetada por um catalisador",
          "Medida dos reagentes até os produtos"
        ],
        verdict: "A energia de ativação é a altura da barreira que define a velocidade; a variação de entalpia é a diferença total entre reagentes e produtos. Um catalisador reduz a primeira, não a segunda.",
        faq: [
          { q: "Um catalisador muda a variação de entalpia?", a: "Não. Um catalisador só reduz a energia de ativação; a variação de entalpia geral permanece a mesma." },
          { q: "Qual valor define a taxa de reação?", a: "A energia de ativação, pois uma barreira menor permite que mais colisões sejam bem-sucedidas." },
          { q: "Como leio a variação de entalpia em um gráfico?", a: "É o intervalo vertical entre os níveis de energia dos reagentes e dos produtos." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "conjugate-acid-vs-conjugate-base", a: "Conjugate acid", b: "Conjugate base",
    category: "chemistry", emoji_a: "➕", emoji_b: "➖",
    content: {
      pt: {
        title: "Ácido Conjugado vs Base Conjugada: comparação",
        h1: "Ácido Conjugado vs Base Conjugada explicados",
        description: "O ácido conjugado se forma quando uma base ganha um próton; a base conjugada se forma quando um ácido perde um. Compare esses pares.",
        intro: "Na teoria de Brønsted-Lowry, ácidos e bases vêm em pares conjugados que diferem por exatamente um próton.",
        pros_a: [
          "Formado quando uma base aceita um próton",
          "Tem um H+ a mais que sua base",
          "Pode devolver esse próton",
          "Base mais forte dá ácido conjugado mais fraco",
          "Exemplo: NH4+ a partir da amônia"
        ],
        pros_b: [
          "Formado quando um ácido perde um próton",
          "Tem um H+ a menos que seu ácido",
          "Pode aceitar um próton de volta",
          "Ácido mais forte dá base conjugada mais fraca",
          "Exemplo: Cl- a partir do ácido clorídrico"
        ],
        verdict: "O ácido conjugado tem um próton extra; a base conjugada tem um a menos. Toda reação ácido-base produz um par conjugado, com uma espécie mais forte gerando um parceiro mais fraco.",
        faq: [
          { q: "O que difere dentro de um par conjugado?", a: "Exatamente um próton: o ácido conjugado tem um H+ a mais do que a base conjugada." },
          { q: "Por que um ácido forte dá base conjugada fraca?", a: "Como o ácido forte cede seu próton facilmente, sua base conjugada o retém mal." },
          { q: "Toda reação ácido-base forma conjugados?", a: "Sim. Reações de Brønsted-Lowry sempre produzem um ácido conjugado e uma base conjugada." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "nitrogen-vs-oxygen", a: "Nitrogen", b: "Oxygen",
    category: "chemistry", emoji_a: "💨", emoji_b: "🫁",
    content: {
      pt: {
        title: "Nitrogênio vs Oxigênio: os principais gases do ar",
        h1: "Nitrogênio vs Oxigênio explicados",
        description: "O nitrogênio é um gás diatômico inerte; o oxigênio é reativo e essencial para a vida. Compare os dois principais componentes do ar.",
        intro: "Nitrogênio e oxigênio compõem quase todo o ar que respiramos, mas seu comportamento químico é notavelmente diferente.",
        pros_a: [
          "Símbolo N, compõe cerca de 78% do ar",
          "Muito estável por sua forte ligação tripla",
          "Largamente não-reativo à temperatura ambiente",
          "Essencial para proteínas e DNA",
          "Usado para fabricar amônia e fertilizantes"
        ],
        pros_b: [
          "Símbolo O, compõe cerca de 21% do ar",
          "Altamente reativo, sustenta a combustão",
          "Necessário para a respiração dos seres vivos",
          "Forma óxidos com a maioria dos elementos",
          "Tem o alótropo ozônio, O3"
        ],
        verdict: "O nitrogênio é abundante e inerte graças à sua ligação tripla; o oxigênio é reativo e mantenedor da vida. Juntos formam a maior parte da atmosfera.",
        faq: [
          { q: "Por que o nitrogênio é tão não-reativo?", a: "Suas moléculas são mantidas por uma ligação tripla muito forte que é difícil de romper." },
          { q: "Qual gás sustenta a queima?", a: "O oxigênio sustenta a combustão; o nitrogênio não o faz e pode até diluir o fogo." },
          { q: "Qual é mais abundante no ar?", a: "O nitrogênio, com cerca de 78%, supera em muito o oxigênio com cerca de 21%." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-respiration-vs-photosynthesis", a: "Respiration", b: "Photosynthesis",
    category: "chemistry", emoji_a: "🫁", emoji_b: "🌿",
    content: {
      pt: {
        title: "Respiração vs Fotossíntese: comparação",
        h1: "Respiração vs Fotossíntese explicadas",
        description: "A respiração libera energia decompondo glicose; a fotossíntese armazena energia fabricando-a. Compare esses processos.",
        intro: "Respiração e fotossíntese são processos bioquímicos opostos que ciclam carbono e energia pelos seres vivos.",
        pros_a: [
          "Decompõe a glicose para liberar energia",
          "Um processo exotérmico",
          "Usa oxigênio, libera dióxido de carbono",
          "Ocorre em todas as células vivas",
          "Reagentes: glicose e oxigênio"
        ],
        pros_b: [
          "Constrói glicose e armazena energia",
          "Um processo endotérmico que precisa de luz",
          "Usa dióxido de carbono, libera oxigênio",
          "Ocorre em plantas, algas e algumas bactérias",
          "Reagentes: dióxido de carbono e água"
        ],
        verdict: "A respiração libera energia química armazenada enquanto a fotossíntese captura energia luminosa como glicose. São opostos químicos que mantêm os ciclos de carbono e oxigênio.",
        faq: [
          { q: "Qual processo libera oxigênio?", a: "A fotossíntese libera oxigênio, enquanto a respiração o consome." },
          { q: "A respiração é exotérmica?", a: "Sim. A respiração libera energia, tornando-a um processo exotérmico." },
          { q: "As plantas fazem os dois?", a: "Sim. As plantas fotossintesizam com luz e respiram continuamente para usar a energia." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "ionization-energy-vs-atomic-radius", a: "Ionization energy", b: "Atomic radius",
    category: "chemistry", emoji_a: "⚡", emoji_b: "📐",
    content: {
      pt: {
        title: "Energia de Ionização vs Raio Atômico",
        h1: "Energia de Ionização vs Raio Atômico explicados",
        description: "A energia de ionização é a energia para remover um elétron; o raio atômico é o tamanho do átomo. Compare essas tendências periódicas.",
        intro: "Duas tendências periódicas importantes se movem em direções opostas na tabela, e estão intimamente relacionadas.",
        pros_a: [
          "Energia necessária para remover um elétron externo",
          "Medida em kJ/mol",
          "Aumenta ao longo de um período",
          "Diminui ao longo de um grupo",
          "Maior para átomos que prendem elétrons com força"
        ],
        pros_b: [
          "O tamanho de um átomo",
          "Medido em picômetros",
          "Diminui ao longo de um período",
          "Aumenta ao longo de um grupo",
          "Maior quando os elétrons estão mais distantes"
        ],
        verdict: "Energia de ionização e raio atômico têm tendências opostas: conforme os átomos ficam menores, os elétrons são presos com mais força e são mais difíceis de remover. São dois lados da mesma atração nuclear.",
        faq: [
          { q: "Como as duas tendências se relacionam?", a: "Átomos menores prendem elétrons com mais força, então raio menor significa maior energia de ionização." },
          { q: "Por que o raio atômico diminui ao longo de um período?", a: "O aumento da carga nuclear puxa os elétrons para mais perto sem adicionar nova camada." },
          { q: "Onde a energia de ionização é mais alta?", a: "Perto do canto superior direito da tabela periódica, onde os átomos são pequenos e prendem elétrons com força." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-acid-vs-salt", a: "Acid", b: "Salt",
    category: "chemistry", emoji_a: "🧪", emoji_b: "🧂",
    content: {
      pt: {
        title: "Ácido vs Sal: do reagente ao produto",
        h1: "Ácido vs Sal explicados",
        description: "Um ácido doa prótons; um sal é o produto iônico da neutralização de um ácido. Compare essas substâncias relacionadas.",
        intro: "Ácidos e sais estão conectados: reaja um ácido com uma base e um dos produtos é um sal.",
        pros_a: [
          "Doa íons H+ em solução",
          "Tem pH abaixo de 7",
          "Sabor azedo, corrosivo para metais",
          "Um reagente na neutralização",
          "Exemplos: HCl, ácido sulfúrico, ácido nítrico"
        ],
        pros_b: [
          "Um composto iônico de cátion e ânion",
          "Geralmente tem pH neutro",
          "Formado quando um ácido é neutralizado",
          "Um produto de reações ácido-base",
          "Exemplos: cloreto de sódio, nitrato de potássio"
        ],
        verdict: "Um ácido é um reagente doador de prótons; um sal é o produto iônico neutro formado quando um ácido reage com uma base. Os ácidos começam a reação; os sais a terminam.",
        faq: [
          { q: "Como um sal é formado a partir de um ácido?", a: "Quando um ácido reage com uma base, o ânion do ácido se une ao cátion da base para formar um sal." },
          { q: "Todos os sais são neutros?", a: "A maioria é próxima ao neutro, mas alguns sais são levemente ácidos ou básicos dependendo de seus íons." },
          { q: "Qual é o outro produto junto com o sal?", a: "Neutralizar um ácido com uma base geralmente produz também água." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-hydrate-vs-anhydrate", a: "Hydrate", b: "Anhydrous",
    category: "chemistry", emoji_a: "💧", emoji_b: "🏜️",
    content: {
      pt: {
        title: "Hidrato vs Composto Anidro: comparação",
        h1: "Hidrato vs Anidro explicados",
        description: "Um hidrato contém água em sua estrutura cristalina; a forma anidra não tem. Compare esses dois estados de um composto.",
        intro: "Muitos sais podem reter água dentro de seus cristais. A presença ou ausência de água torna um composto hidrato ou anidro.",
        pros_a: [
          "Contém água dentro da rede cristalina",
          "Tem uma proporção fixa água-fórmula",
          "Escrito com um ponto, como CuSO4·5H2O",
          "Frequentemente mais colorido, como o sulfato de cobre azul",
          "Perde água ao ser aquecido"
        ],
        pros_b: [
          "Não contém água de cristalização",
          "Formado pelo aquecimento de um hidrato",
          "Frequentemente tem cor diferente do hidrato",
          "Pode absorver água e se tornar hidrato novamente",
          "Exemplo: sulfato de cobre anidro branco"
        ],
        verdict: "Um hidrato carrega uma quantidade fixa de água presa em seus cristais, enquanto um composto anidro não tem nenhuma. O aquecimento expulsa a água; a exposição à umidade pode trazê-la de volta.",
        faq: [
          { q: "Como fazer um composto anidro?", a: "Aqueça o hidrato para expulsar a água de cristalização." },
          { q: "Por que o sulfato de cobre muda de cor?", a: "O sulfato de cobre hidratado é azul, enquanto a forma anidra é branca." },
          { q: "A quantidade de água é fixa em um hidrato?", a: "Sim. Cada hidrato tem uma proporção definida de moléculas de água por unidade de fórmula." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-oxidizing-vs-reducing-agent", a: "Oxidizing agent", b: "Reducing agent",
    category: "chemistry", emoji_a: "🔥", emoji_b: "🛡️",
    content: {
      pt: {
        title: "Agente Oxidante vs Agente Redutor: comparação",
        h1: "Agente Oxidante vs Agente Redutor explicados",
        description: "Um agente oxidante ganha elétrons e é reduzido; um agente redutor perde elétrons e é oxidado. Compare os dois.",
        intro: "Toda reação redox tem um agente oxidante e um agente redutor. Eles causam mudança um no outro enquanto sofrem o oposto eles mesmos.",
        pros_a: [
          "Causa oxidação em outra espécie",
          "Aceita elétrons",
          "É reduzido durante a reação",
          "Frequentemente ávido por elétrons, como oxigênio ou halogênios",
          "Exemplos: oxigênio, cloro, permanganato de potássio"
        ],
        pros_b: [
          "Causa redução em outra espécie",
          "Doa elétrons",
          "É oxidado durante a reação",
          "Frequentemente metais ou espécies ricas em hidrogênio",
          "Exemplos: hidrogênio, carbono, metais reativos"
        ],
        verdict: "Um agente oxidante captura elétrons e é reduzido; um agente redutor cede elétrons e é oxidado. São parceiros que sempre aparecem juntos em reações redox.",
        faq: [
          { q: "O que acontece com um agente oxidante?", a: "Ele aceita elétrons e é ele próprio reduzido durante a reação." },
          { q: "Como identificar um agente redutor?", a: "Ele doa elétrons e é oxidado; metais reativos são exemplos comuns." },
          { q: "Uma reação pode ter apenas um deles?", a: "Não. Reações redox sempre emparelham um agente oxidante com um agente redutor." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-electrolyte-vs-nonelectrolyte", a: "Electrolyte", b: "Nonelectrolyte",
    category: "chemistry", emoji_a: "⚡", emoji_b: "🚫",
    content: {
      pt: {
        title: "Eletrólito vs Não-eletrólito: comparação",
        h1: "Eletrólito vs Não-eletrólito explicados",
        description: "Um eletrólito conduz eletricidade quando dissolvido; um não-eletrólito não conduz. Compare esses dois tipos de solução.",
        intro: "Se uma substância dissolvida conduz eletricidade depende de ela formar íons. Isso decide eletrólito versus não-eletrólito.",
        pros_a: [
          "Conduz eletricidade quando dissolvido ou fundido",
          "Se dissocia em íons móveis na água",
          "Inclui compostos iônicos e ácidos fortes",
          "Forte ou fraco dependendo da ionização",
          "Exemplos: sal, ácido clorídrico"
        ],
        pros_b: [
          "Não conduz eletricidade em solução",
          "Dissolve como moléculas neutras, não como íons",
          "Geralmente compostos moleculares covalentes",
          "Sem cargas livres para conduzir corrente",
          "Exemplos: açúcar, etanol, glicose"
        ],
        verdict: "Eletrólitos liberam íons e conduzem eletricidade em solução; não-eletrólitos se dissolvem como moléculas neutras e não conduzem. A formação de íons é o fator decisivo.",
        faq: [
          { q: "Por que a água salgada conduz eletricidade?", a: "O sal é um eletrólito que se divide em íons móveis capazes de conduzir corrente." },
          { q: "A água com açúcar é eletrólito?", a: "Não. O açúcar se dissolve como moléculas neutras, então a água com açúcar é um não-eletrólito." },
          { q: "O que é um eletrólito fraco?", a: "Uma substância que se ioniza apenas parcialmente, conduzindo eletricidade de forma fraca." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
  {
    slug: "exo-vs-endo-evaporation-vs-boiling", a: "Evaporation", b: "Boiling",
    category: "chemistry", emoji_a: "☀️", emoji_b: "🫧",
    content: {
      pt: {
        title: "Evaporação vs Ebulição: líquido para gás",
        h1: "Evaporação vs Ebulição explicadas",
        description: "A evaporação acontece na superfície a qualquer temperatura; a ebulição ocorre em todo o líquido no ponto de ebulição. Compare as duas.",
        intro: "Ambas convertem líquido em gás, mas diferem em onde ocorrem e qual temperatura precisam.",
        pros_a: [
          "Ocorre apenas na superfície do líquido",
          "Acontece a qualquer temperatura",
          "Um processo lento e gradual",
          "Causa resfriamento do líquido restante",
          "Exemplo: uma poça secando"
        ],
        pros_b: [
          "Ocorre em todo o líquido",
          "Acontece apenas no ponto de ebulição",
          "Um processo rápido com formação de bolhas",
          "Temperatura permanece constante durante a ebulição",
          "Exemplo: água borbulhando em uma chaleira"
        ],
        verdict: "A evaporação é um processo lento de superfície a qualquer temperatura; a ebulição é um processo rápido em massa fixado no ponto de ebulição. Ambas convertem líquido em vapor.",
        faq: [
          { q: "Um líquido pode evaporar abaixo de seu ponto de ebulição?", a: "Sim. A evaporação ocorre a qualquer temperatura, apenas na superfície." },
          { q: "Por que bolhas se formam durante a ebulição?", a: "O vapor se forma em todo o líquido, criando bolhas que sobem até a superfície." },
          { q: "A temperatura sobe durante a ebulição?", a: "Não. A temperatura permanece no ponto de ebulição até que todo o líquido tenha vaporizado." },
        ],
      },
    },
    updatedAt: "2026-05-22",
  },
];
