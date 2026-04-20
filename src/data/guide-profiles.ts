export interface GuideSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface GuideFaqItem {
  question: string;
  answer: string;
}

export interface GuideProfile {
  summary: string;
  sections: GuideSection[];
  faq: GuideFaqItem[];
}

export const guideProfiles: Record<string, GuideProfile> = {
  'como-evoluir-eevee': {
    summary: "Eevee é um dos Pokémon mais versáteis da franquia porque pode seguir caminhos bem diferentes. O ponto central do guia é escolher a evolução pelo papel que falta no seu time, e não só pela aparência.",
    sections: [
      {
        title: "Como Pensar Antes de Evoluir",
        paragraphs: [
          "Se o time precisa de cobertura contra Água, Terra ou Dragão, vale olhar primeiro para Jolteon, Leafeon e Sylveon. Se a prioridade for consistência defensiva, Umbreon e Vaporeon costumam encaixar melhor.",
          "A melhor decisão quase sempre vem da necessidade prática do elenco. Eevee rende mais quando você define sua evolução para cobrir uma fraqueza real do time.",
        ],
      },
      {
        title: "Evoluções Mais Úteis na Prática",
        bullets: [
          "Vaporeon: boa opção para times que precisam de bulk e cobertura contra Fogo.",
          "Jolteon: escolha rápida para pressionar Água e Voador.",
          "Umbreon: ótimo para jogo mais defensivo e controle de ritmo.",
          "Sylveon: excelente resposta contra Dragão e Sombrio.",
        ],
      },
      {
        title: "Erros Comuns",
        bullets: [
          "Evoluir cedo sem pensar no restante do time.",
          "Ignorar requisito de horário ou amizade.",
          "Escolher só pelo visual e perder uma cobertura importante.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual evolução de Eevee vale mais para campanha?",
        answer: "Sylveon e Vaporeon costumam ser escolhas muito seguras, mas depende do que o seu time já cobre.",
      },
      {
        question: "Umbreon é melhor que Espeon?",
        answer: "Umbreon tende a render mais em times defensivos. Espeon entra melhor quando a ideia é atacar com pressão especial.",
      },
      {
        question: "Posso errar a evolução?",
        answer: "Sim. Por isso vale checar item, horário e amizade antes de confirmar.",
      },
      {
        question: "Eevee ainda vale a pena se eu quiser algo simples?",
        answer: "Vale, desde que você já tenha em mente qual função quer preencher. O problema de Eevee não é força, é indecisão.",
      },
    ],
  },
  'fraquezas-tipo-fada': {
    summary: "Tipo Fada é muito valioso porque pune Dragão, segura bem alguns confrontos ofensivos e se encaixa fácil em times balanceados. Ao mesmo tempo, ele sofre quando enfrenta pressão de Veneno ou Aço bem posicionada.",
    sections: [
      {
        title: "Quando o Tipo Fada Mais Brilha",
        paragraphs: [
          "O tipo Fada ganha muito valor em metas com Dragão, Sombrio e Lutador. Ele ajuda tanto ofensivamente quanto como peça de segurança em trocas.",
        ],
      },
      {
        title: "Como Punir Tipo Fada",
        bullets: [
          "Use golpes de Veneno para pressão direta em matchups mais frágeis.",
          "Aço funciona bem quando o plano é resistir e devolver dano.",
          "Evite depender só de Sombrio ou Dragão contra fadas ofensivas.",
        ],
      },
      {
        title: "Pokémon que Representam Bem o Tipo",
        bullets: [
          "Sylveon: pressão especial clara e simples de usar.",
          "Gardevoir: ofensiva mais agressiva com cobertura muito boa.",
          "Mimikyu: valor alto em times ofensivos por ganhar tempo.",
        ],
      },
    ],
    faq: [
      {
        question: "Fada é um tipo mais ofensivo ou defensivo?",
        answer: "Os dois. Ele entra bem em defesa por resistências úteis, mas também pune muito quando pega Dragão ou Sombrio pela frente.",
      },
      {
        question: "Qual o jeito mais seguro de lidar com Fada?",
        answer: "Ter uma resposta de Aço costuma ser o caminho mais estável ao longo da partida.",
      },
      {
        question: "Vale usar Veneno só para cobrir Fada?",
        answer: "Vale quando o resto do time já precisa dessa cobertura. Se for só por isso, Aço tende a ser mais versátil.",
      },
      {
        question: "Sylveon é bom para iniciantes?",
        answer: "Sim. Ele entrega função clara e costuma ser fácil de entender em campanha.",
      },
    ],
  },
  'fraquezas-tipo-dragao': {
    summary: "Tipo Dragão costuma impor respeito por stats, cobertura e pressão, mas ele também tem respostas muito objetivas. Fada, Gelo e o próprio Dragão continuam sendo os caminhos mais diretos para controlar esse matchup.",
    sections: [
      {
        title: "Por Que Dragão Continua Forte",
        paragraphs: [
          "Dragões costumam combinar bom dano com resistências úteis. Isso faz com que muitos deles pareçam opressivos quando o time adversário não tem resposta clara.",
        ],
      },
      {
        title: "Respostas Mais Confiáveis",
        bullets: [
          "Fada: a resposta mais estável em muitos cenários.",
          "Gelo: opção agressiva para punir rapidamente.",
          "Dragão: funciona quando seu lado tem velocidade ou vantagem de pressão.",
        ],
      },
      {
        title: "Como Montar Cobertura Anti-Dragão",
        bullets: [
          "Tenha pelo menos uma fada ou golpe de gelo confiável.",
          "Evite depender de tipos que Dragão costuma resistir bem.",
          "Use pressão ofensiva para não deixar setup livre.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual é o melhor counter de Dragão?",
        answer: "Na prática, Fada costuma ser o mais consistente porque segura bem e ainda ameaça de volta.",
      },
      {
        question: "Gelo é suficiente sozinho?",
        answer: "Ajuda muito, mas pode ser arriscado se o resto do time não suportar trocas ou dano de retorno.",
      },
      {
        question: "Vale usar Dragão contra Dragão?",
        answer: "Vale quando você controla melhor velocidade, bulk ou tempo de entrada.",
      },
      {
        question: "Dragonite e Garchomp exigem respostas diferentes?",
        answer: "Sim. O princípio é parecido, mas o contexto muda conforme bulk, setup e cobertura de cada um.",
      },
    ],
  },
  'fraquezas-tipo-fogo': {
    summary: "Fogo é um dos tipos mais fáceis de entender ofensivamente: entra para pressionar Planta, Gelo, Inseto e Aço. O problema aparece quando o adversário segura bem Água, Terra e Pedra.",
    sections: [
      {
        title: "Onde Tipo Fogo Tem Mais Valor",
        paragraphs: [
          "Fogo se destaca quando o time precisa abrir espaço contra matchups comuns e manter pressão ofensiva simples. É um tipo muito prático em campanha e útil em composições agressivas.",
        ],
      },
      {
        title: "Fraquezas que Você Precisa Respeitar",
        bullets: [
          "Água: resposta mais comum e direta.",
          "Terra: pune muitos tipos Fogo no posicionamento.",
          "Pedra: incomoda especialmente quem já entra pressionado.",
        ],
      },
      {
        title: "Como Cobrir Essas Fraquezas",
        bullets: [
          "Combine Fogo com parceiros que lidem bem com Água.",
          "Tenha uma troca segura para Terra.",
          "Evite deixar o tipo Fogo entrar sem suporte quando há pressão de Pedra.",
        ],
      },
    ],
    faq: [
      {
        question: "Tipo Fogo ainda vale a pena em campanha?",
        answer: "Sim. Ele continua sendo um dos tipos mais úteis para atravessar partes importantes da jornada.",
      },
      {
        question: "Qual é o maior problema do tipo Fogo?",
        answer: "Entrar em campo contra respostas óbvias de Água, Terra ou Pedra sem cobertura no resto do time.",
      },
      {
        question: "Arcanine e Charizard cumprem o mesmo papel?",
        answer: "Não exatamente. Os dois são ofensivos, mas o encaixe muda bastante conforme velocidade, cobertura e forma de entrar na luta.",
      },
      {
        question: "Vale montar um time em torno de Fogo?",
        answer: "Vale, desde que as fraquezas mais comuns estejam bem cobertas.",
      },
    ],
  },
  'melhores-pokemon-para-iniciantes': {
    summary: "Pokémon para iniciantes precisam resolver problemas sem exigir leitura complicada. O ideal é priorizar espécies com função clara, boa disponibilidade e curva de aprendizado amigável.",
    sections: [
      {
        title: "O Que Torna um Pokémon Bom para Iniciantes",
        bullets: [
          "Função fácil de entender em batalha.",
          "Cobertura útil sem depender de combos difíceis.",
          "Boa presença em campanha e evolução acessível.",
        ],
      },
      {
        title: "Escolhas Mais Seguras",
        bullets: [
          "Pikachu: velocidade simples e cobertura clara contra Água e Voador.",
          "Eevee: flexibilidade para adaptar o time.",
          "Charmander: linha ofensiva muito intuitiva.",
          "Squirtle: segurança defensiva para campanhas mais estáveis.",
        ],
      },
      {
        title: "Como Não Travar o Aprendizado",
        paragraphs: [
          "O melhor começo raramente vem do Pokémon mais forte no papel. Vem daquele que ensina trocas, cobertura e ritmo de batalha sem punição excessiva.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual é o melhor Pokémon para quem nunca jogou?",
        answer: "Squirtle e Pikachu costumam ser pontos de partida muito amigáveis, mas depende do estilo de jogo que você quer aprender.",
      },
      {
        question: "Eevee é bom para iniciantes mesmo com várias evoluções?",
        answer: "Sim, desde que a escolha da evolução seja guiada pelo que o time precisa.",
      },
      {
        question: "Vale escolher só pelo Pokémon favorito?",
        answer: "Vale. Se ele tiver função compreensível e você mantiver um time equilibrado, isso ajuda até mais no aprendizado.",
      },
      {
        question: "Preciso me preocupar com competitivo logo no início?",
        answer: "Não. Primeiro vale entender tipos, trocas e funções básicas.",
      },
    ],
  },
  'melhor-ordem-jogar-pokemon': {
    summary: "Não existe ordem única para toda pessoa, mas algumas sequências fazem mais sentido dependendo do objetivo. Quem quer entender a série pode seguir evolução histórica; quem quer conforto moderno pode começar pelos títulos mais acessíveis.",
    sections: [
      {
        title: "Se o Objetivo é Entender a Franquia",
        paragraphs: [
          "Uma boa lógica é começar por jogos mais acessíveis e depois voltar para experiências clássicas. Isso reduz barreira de entrada sem perder contexto.",
        ],
      },
      {
        title: "Boas Ordens Possíveis",
        bullets: [
          "Entrada moderna: Scarlet & Violet e depois jogos com foco competitivo ou spin-offs.",
          "Linha clássica: experiências antigas primeiro e títulos novos depois.",
          "Ordem por interesse: começar pelo jogo que mais conversa com seu estilo e expandir a partir dele.",
        ],
      },
      {
        title: "Quando Vale Fugir da Ordem",
        paragraphs: [
          "Se o que chama sua atenção é competitivo, co-op ou experimentação, faz mais sentido começar pelo jogo que entrega isso melhor do que seguir cronologia rígida.",
        ],
      },
    ],
    faq: [
      {
        question: "Preciso jogar em ordem de geração?",
        answer: "Não. Isso ajuda em contexto histórico, mas não é obrigatório para aproveitar a série.",
      },
      {
        question: "Qual é o melhor ponto de entrada moderno?",
        answer: "Scarlet & Violet é uma escolha forte para quem quer algo atual e mais aberto.",
      },
      {
        question: "Spin-offs entram nessa ordem?",
        answer: "Entram se fizerem sentido para o seu interesse. Eles funcionam melhor como complemento do que como obrigação.",
      },
      {
        question: "Ordem errada atrapalha a experiência?",
        answer: "Só quando você entra em algo muito específico sem ter base do que espera encontrar.",
      },
    ],
  },
  'melhores-pokemon-fogo': {
    summary: "Os melhores Pokémon de Fogo são os que conseguem transformar vantagem de matchup em pressão real. Não basta bater forte: é preciso entrar bem, manter ritmo e ter cobertura adequada.",
    sections: [
      {
        title: "O Que Faz um Bom Tipo Fogo",
        bullets: [
          "Pressão ofensiva clara contra tipos comuns.",
          "Capacidade de entrar em campo sem depender sempre de suporte pesado.",
          "Cobertura ou utilidade que compensem fraquezas óbvias.",
        ],
      },
      {
        title: "Destaques do Tipo",
        bullets: [
          "Charizard: ofensiva muito direta e grande poder de pressão.",
          "Arcanine: versátil e fácil de encaixar.",
          "Cinderace: ritmo alto e postura agressiva.",
          "Ceruledge: opção mais diferente para times ofensivos.",
        ],
      },
      {
        title: "Como Escolher Entre Eles",
        paragraphs: [
          "Se o time precisa de ofensiva simples, Arcanine e Charizard costumam resolver rápido. Se a ideia é buscar pressão mais agressiva e ritmo alto, Cinderace e Ceruledge crescem bastante.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual é o melhor Pokémon de Fogo para campanha?",
        answer: "Arcanine e Charizard costumam ser escolhas muito seguras porque funcionam bem sem exigir muita adaptação.",
      },
      {
        question: "Vale usar mais de um tipo Fogo no mesmo time?",
        answer: "Em geral não. O ideal é escolher um principal e cobrir as fraquezas dele com o restante do elenco.",
      },
      {
        question: "Fogo é bom só ofensivamente?",
        answer: "Não. Alguns tipos Fogo também ajudam em trocas e controle de ritmo, dependendo da build e do parceiro.",
      },
      {
        question: "Ceruledge entra na conversa dos melhores?",
        answer: "Sim, especialmente quando o time quer um perfil mais agressivo e menos previsível.",
      },
    ],
  },
  'melhores-pokemon-eletricos': {
    summary: "Tipo Elétrico continua valioso porque simplifica confrontos contra Água e Voador e costuma manter o ritmo da equipe. Os melhores nomes do tipo se destacam por velocidade, pressão ou versatilidade.",
    sections: [
      {
        title: "Por Que Tipo Elétrico É Tão Útil",
        paragraphs: [
          "Elétrico funciona bem quando o time precisa de pressão rápida e cobertura simples. É um tipo que costuma entregar valor sem muita complicação.",
        ],
      },
      {
        title: "Destaques Mais Relevantes",
        bullets: [
          "Pikachu: ponto de entrada amigável e muito intuitivo.",
          "Miraidon: pressão ofensiva de alto nível.",
          "Jolteon: opção clássica para velocidade e iniciativa.",
        ],
      },
      {
        title: "Como Não Exagerar na Dependência",
        bullets: [
          "Tenha resposta para Terra no restante do time.",
          "Não concentre toda a pressão de Água em um único slot.",
          "Combine Elétrico com tipos que aproveitem trocas forçadas.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual é o melhor Elétrico para iniciantes?",
        answer: "Pikachu continua sendo um dos mais simples de entender e usar.",
      },
      {
        question: "Todo time precisa de um Elétrico?",
        answer: "Não, mas ter alguma resposta boa para Água e Voador quase sempre ajuda bastante.",
      },
      {
        question: "Miraidon já é avançado demais para campanha?",
        answer: "Ele é forte e direto, então pode ser muito útil mesmo fora de contexto competitivo.",
      },
      {
        question: "Elétrico sofre muito contra Terra?",
        answer: "Sim, por isso o resto do time precisa cobrir bem esse matchup.",
      },
    ],
  },
  'como-montar-time-balanceado': {
    summary: "Um time balanceado não é aquele que tem um pouco de tudo de forma aleatória. É aquele em que cada peça resolve uma fraqueza, cria espaço para outra e impede que o time colapse em matchups óbvios.",
    sections: [
      {
        title: "Base de um Time Balanceado",
        bullets: [
          "Tenha pelo menos uma peça de pressão ofensiva clara.",
          "Inclua cobertura para matchups comuns como Água, Dragão e Fada.",
          "Evite repetir fraquezas importantes sem compensação.",
        ],
      },
      {
        title: "Funções Que Costumam Ajudar",
        bullets: [
          "Tanque ou pivô para absorver pressão.",
          "Atacante rápido para limpar alvos enfraquecidos.",
          "Pokémon confiável para entrar em matchups perigosos.",
        ],
      },
      {
        title: "Erros que Deixam o Time Desequilibrado",
        bullets: [
          "Escolher vários favoritos com a mesma fraqueza central.",
          "Focar só em dano e esquecer entrada segura.",
          "Não pensar em cobertura real para tipos frequentes.",
        ],
      },
    ],
    faq: [
      {
        question: "Preciso ter todos os tipos principais no time?",
        answer: "Não. O importante é cobrir ameaças relevantes, não preencher uma lista fixa de tipos.",
      },
      {
        question: "Quantos atacantes e quantos defensivos usar?",
        answer: "Depende do jogo e do estilo, mas equilíbrio costuma vir de ter pelo menos uma base segura e um ou dois finalizadores claros.",
      },
      {
        question: "Dá para montar time balanceado com favoritos?",
        answer: "Dá, desde que você compense as fraquezas deles com o resto do elenco.",
      },
      {
        question: "Lucario e Gardevoir combinam no mesmo time?",
        answer: "Sim, especialmente se o restante da equipe cobrir bem Fogo, Terra e Fantasma.",
      },
    ],
  },
  'diferenca-ataque-fisico-especial': {
    summary: "Ataque físico e ataque especial são duas formas diferentes de causar dano, e entender essa divisão melhora muito a montagem de sets, escolhas de golpe e leitura do potencial de cada Pokémon.",
    sections: [
      {
        title: "Diferença Básica",
        paragraphs: [
          "Golpes físicos usam o valor de Ataque e interagem com a Defesa do alvo. Golpes especiais usam Ataque Especial e enfrentam a Defesa Especial.",
        ],
      },
      {
        title: "Como Isso Afeta a Escolha de Golpes",
        bullets: [
          "Um Pokémon com Ataque alto rende melhor com golpes físicos.",
          "Um Pokémon com Ataque Especial alto rende melhor com golpes especiais.",
          "Cobertura ruim no lado certo ainda costuma ser melhor do que cobertura boa no lado errado.",
        ],
      },
      {
        title: "Quando Vale Misturar",
        paragraphs: [
          "Alguns Pokémon conseguem explorar os dois lados, mas isso funciona melhor quando a base do set continua clara. Misturar por misturar costuma enfraquecer a consistência.",
        ],
      },
    ],
    faq: [
      {
        question: "Como descubro se um golpe é físico ou especial?",
        answer: "O jogo normalmente indica isso no próprio golpe, e essa leitura precisa entrar no hábito de montagem do time.",
      },
      {
        question: "Lucario pode usar os dois lados bem?",
        answer: "Sim. Ele é um exemplo clássico de Pokémon que consegue ameaçar fisicamente e especialmente.",
      },
      {
        question: "Vale usar golpe especial em Pokémon físico só por cobertura?",
        answer: "Em geral não, a menos que o ganho tático seja muito claro.",
      },
      {
        question: "Isso muda muito para iniciantes?",
        answer: "Muda bastante, porque ajuda a parar de escolher golpes só pelo nome ou poder bruto.",
      },
    ],
  },
  'pokemon-champions-o-que-ja-se-sabe': {
    summary: "Pokémon Champions aparece como proposta mais voltada para batalha e comunidade competitiva. O interesse principal gira em torno de formato, ritmo de combate e impacto no jeito de montar times.",
    sections: [
      {
        title: "Por Que o Jogo Chama Atenção",
        paragraphs: [
          "A promessa de um foco mais direto em batalhas faz o projeto atrair tanto veteranos quanto quem quer entrar no competitivo sem tantas camadas paralelas.",
        ],
      },
      {
        title: "O Que Vale Observar",
        bullets: [
          "Formato de batalha e ritmo do meta.",
          "Facilidade para montar e adaptar times.",
          "Espaço para Pokémon icônicos e opções mais técnicas.",
        ],
      },
      {
        title: "Quem Pode se Beneficiar Mais",
        paragraphs: [
          "Jogadores que gostam de aprender matchups, otimizar composições e discutir meta devem ser os que mais tiram proveito do jogo.",
        ],
      },
    ],
    faq: [
      {
        question: "Pokémon Champions parece mais casual ou competitivo?",
        answer: "Pelo que se desenha hoje, a leitura é de um foco mais competitivo e orientado a batalha.",
      },
      {
        question: "Vale acompanhar mesmo sem jogar competitivo hoje?",
        answer: "Sim, porque pode virar uma boa porta de entrada para entender melhor montagem de time e meta.",
      },
      {
        question: "Quais Pokémon combinam com esse cenário?",
        answer: "Nomes como Charizard, Metagross e Mewtwo entram naturalmente na conversa por pressão e familiaridade.",
      },
      {
        question: "Esse jogo pode mudar a forma de consumir conteúdo Pokémon?",
        answer: "Pode, especialmente se concentrar atenção em discussões de matchups, builds e leitura de batalha.",
      },
    ],
  },
  'pokopia-guia-inicial': {
    summary: "Pokópia se destaca por uma proposta mais experimental, com foco em exploração, descoberta e sensação de novidade. O guia inicial serve para reduzir atrito e ajudar o jogador a encontrar valor logo cedo.",
    sections: [
      {
        title: "Como Entrar no Ritmo do Jogo",
        paragraphs: [
          "O começo funciona melhor quando você aceita explorar com calma e aprender as mecânicas aos poucos. Forçar pressa cedo costuma atrapalhar a leitura do que o jogo tem de mais interessante.",
        ],
      },
      {
        title: "Prioridades no Início",
        bullets: [
          "Entender o sistema de captura.",
          "Testar o loop de exploração antes de otimizar demais.",
          "Observar quais criaturas e rotas oferecem mais valor imediato.",
        ],
      },
      {
        title: "Quem Vai Aproveitar Mais",
        paragraphs: [
          "Jogadores curiosos, que gostam de experimentar e descobrir sistemas por conta própria, tendem a gostar mais de Pokópia do que quem busca só progressão linear.",
        ],
      },
    ],
    faq: [
      {
        question: "Pokópia é bom para quem vem só dos jogos principais?",
        answer: "Sim, desde que a pessoa entre esperando uma proposta diferente e mais aberta à experimentação.",
      },
      {
        question: "Preciso dominar tudo logo no começo?",
        answer: "Não. O jogo parece render melhor quando você aprende o básico e deixa o restante surgir naturalmente.",
      },
      {
        question: "Vale comparar direto com Scarlet & Violet?",
        answer: "Só até certo ponto. A proposta aqui parece ser bem mais experimental.",
      },
      {
        question: "Quais conteúdos do site combinam com esse guia?",
        answer: "Guias de entrada, ordem para jogar e Pokémon de perfil mais versátil costumam conversar muito bem com Pokópia.",
      },
    ],
  },
};

export function getGuideProfile(slug: string) {
  return guideProfiles[slug];
}
