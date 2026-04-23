import { first30PokemonProfiles } from './pokedex-profiles-first30';
import { next30PokemonProfiles } from './pokedex-profiles-next30';
import { rest151PokemonProfilesA } from './pokedex-profiles-rest151-a';
import { rest151PokemonProfilesB } from './pokedex-profiles-rest151-b';

export interface PokemonProfile {
  overview: string;
  practicalUse: string;
  bestFor: string;
  curiosity: string;
}

export const pokedexProfiles: Record<string, PokemonProfile> = {
  ...first30PokemonProfiles,
  ...next30PokemonProfiles,
  ...rest151PokemonProfilesA,
  ...rest151PokemonProfilesB,
  pikachu: {
    overview: "Pikachu é um atacante leve e veloz, conhecido por pressionar cedo com golpes elétricos simples de usar. Não depende de setups complexos para ser útil.",
    practicalUse: "Funciona melhor como opção rápida para punir Pokémon de Água e Voador. Em equipes casuais, entra bem para finalizar alvos enfraquecidos e manter o ritmo da batalha.",
    bestFor: "Excelente para iniciantes e para times que precisam de velocidade imediata sem abrir mão de um atacante fácil de entender.",
    curiosity: "Mesmo com stats modestos, Pikachu segue relevante por carisma, presença em spin-offs e variedade de golpes utilitários.",
  },
  eevee: {
    overview: "Eevee vale menos pelo desempenho bruto e mais pela flexibilidade. Ele é o ponto de partida para adaptar o time a diferentes tipos e estilos.",
    practicalUse: "O uso prático de Eevee é decidir a evolução certa para o que seu elenco precisa. Se falta defesa, suporte ou cobertura ofensiva, ele abre essa escolha cedo.",
    bestFor: "É ideal para jogadores que gostam de ajustar o time no meio da jornada em vez de se prender a uma única função desde o início.",
    curiosity: "Poucos Pokémon representam tão bem a ideia de versatilidade quanto Eevee, justamente por ter caminhos de evolução tão diferentes entre si.",
  },
  charizard: {
    overview: "Charizard é um atacante ofensivo de pressão imediata, com boa velocidade e forte presença de campo. Ele recompensa posicionamento agressivo.",
    practicalUse: "Brilha como finalizador especial ou misto, especialmente quando o adversário já perdeu respostas a Fogo. Também pressiona times que dependem de tipos Planta ou Inseto.",
    bestFor: "Serve bem em equipes que querem iniciativa constante e um atacante capaz de transformar uma vantagem pequena em pressão real.",
    curiosity: "Charizard continua popular porque combina visual marcante com uso prático claro: entrar, ameaçar e forçar trocas.",
  },
  bulbasaur: {
    overview: "Bulbasaur tem perfil mais estável que explosivo. Ele oferece boa utilidade no início do jogo e lida bem com vários confrontos comuns de campanha.",
    practicalUse: "É uma escolha segura para rotas iniciais, principalmente quando o time precisa de cobertura contra Água e ferramentas de status ou sustain.",
    bestFor: "Funciona melhor para jogadores que preferem controle, consistência e evolução gradual em vez de picos de dano muito cedo.",
    curiosity: "Bulbasaur costuma ser subestimado entre os starters, mas sua linha evolutiva quase sempre entrega uma jornada muito estável.",
  },
  venusaur: {
    overview: "Venusaur combina volume defensivo com pressão especial e boa cobertura. Não é o mais rápido, mas compensa com presença constante.",
    practicalUse: "Encaixa bem em times balanceados que precisam de resposta para Água, Planta e alvos que perdem valor contra sustain ou trocas seguras.",
    bestFor: "É ótimo para jogadores que querem um Pokémon confiável em campanhas longas e com espaço para funções ofensivas e defensivas.",
    curiosity: "A força de Venusaur quase sempre aparece mais no conjunto do que no impacto imediato de um único turno.",
  },
  charmander: {
    overview: "Charmander é uma escolha ofensiva desde cedo. Sua linha evolutiva cresce com foco em pressão e recompensa quem aceita um começo mais exigente.",
    practicalUse: "Na campanha, ajuda a acelerar lutas contra tipos vulneráveis a Fogo e prepara bem o terreno para um Charizard mais decisivo no mid game.",
    bestFor: "Indicado para quem gosta de times agressivos e não se importa em proteger um Pokémon mais frágil no início.",
    curiosity: "Grande parte do apelo de Charmander vem do salto claro de poder ao longo da evolução, o que deixa a progressão muito perceptível.",
  },
  squirtle: {
    overview: "Squirtle é um início seguro para quem valoriza consistência. Ele absorve dano melhor que outros starters e costuma ter partidas mais controladas.",
    practicalUse: "É útil para segurar pressão de Fogo, manter estabilidade em lutas mais longas e facilitar a vida de quem está aprendendo ritmo de troca.",
    bestFor: "Excelente para campanhas e para jogadores que preferem defesa confiável antes de investir em ofensiva pesada.",
    curiosity: "Mesmo em forma base, Squirtle costuma transmitir bem a identidade defensiva que a linha inteira vai manter depois.",
  },
  blastoise: {
    overview: "Blastoise entrega robustez, cobertura consistente e presença estável em batalha. É um tanque que ainda consegue pressionar.",
    practicalUse: "Funciona muito bem como âncora do time, entrando em confrontos onde Água segura a linha e abrindo espaço para parceiros mais agressivos.",
    bestFor: "Ideal para equipes que precisam de segurança defensiva sem ficar passivas demais ao longo da campanha.",
    curiosity: "O diferencial de Blastoise é justamente parecer apenas defensivo, mas ainda ameaçar bastante quando encontra matchups favoráveis.",
  },
  snorlax: {
    overview: "Snorlax é um muro de HP alto com capacidade real de devolução de dano. Ele desacelera a partida e obriga o rival a responder com cuidado.",
    practicalUse: "Brilha em times balanceados ou mais lentos, entrando para absorver golpes especiais, ganhar terreno e punir adversários sem poder bruto suficiente.",
    bestFor: "Muito bom para jogadores que gostam de vencer no desgaste e valorizam estabilidade acima de velocidade.",
    curiosity: "Snorlax continua popular porque transforma simplicidade em eficiência: aguenta muito, bate o suficiente e raramente entra perdido.",
  },
  gengar: {
    overview: "Gengar é um atacante especial explosivo, com cobertura forte e ameaça imediata. Costuma decidir turnos pela pressão que impõe ao entrar.",
    practicalUse: "Serve para quebrar alvos mais frágeis, punir rivais sem resposta a Fantasma e forçar ritmo agressivo em times que querem iniciativa.",
    bestFor: "Perfeito para composições ofensivas e para jogadores que preferem pressão constante em vez de jogo de desgaste.",
    curiosity: "O valor de Gengar sempre esteve na combinação de dano, velocidade e imprevisibilidade de cobertura.",
  },
  lucario: {
    overview: "Lucario é versátil e consegue atuar tanto pelo lado físico quanto especial. Isso dificulta a leitura do adversário e aumenta seu valor prático.",
    practicalUse: "É ótimo como quebrador de defesa, finalizador ou peça de cobertura em times que precisam de respostas contra Pedra, Sombrio e Aço.",
    bestFor: "Funciona muito bem para jogadores que gostam de Pokémon flexíveis, capazes de mudar papel conforme o restante do elenco.",
    curiosity: "Lucario se destaca por parecer simples à primeira vista, mas render muito quando encaixado no plano certo de time.",
  },
  dragonite: {
    overview: "Dragonite mistura resistências úteis, dano alto e opções de setup. É um dos Pokémon mais completos entre os dragões clássicos.",
    practicalUse: "Entra bem para absorver certos golpes, montar pressão e transformar turnos neutros em ameaça de sweep ou quebra de estrutura defensiva.",
    bestFor: "Muito indicado para times balanceados que querem um win condition claro sem depender de um Pokémon extremamente frágil.",
    curiosity: "A imagem gentil de Dragonite contrasta com a eficiência dele em batalha, o que ajuda a torná-lo memorável dentro e fora do competitivo.",
  },
  gardevoir: {
    overview: "Gardevoir oferece dano especial forte, boa utilidade ofensiva e cobertura valiosa por combinar Psíquico com Fada. Ela pressiona alvos importantes com pouco preparo.",
    practicalUse: "Funciona muito bem contra Lutador, Dragão e composições que dependem de resistências especiais mal posicionadas.",
    bestFor: "Boa escolha para times que querem um atacante especial elegante, direto e com matchups claros para explorar.",
    curiosity: "Gardevoir costuma se destacar mais pela qualidade dos confrontos que escolhe do que pela necessidade de rodar setups complexos.",
  },
  tyranitar: {
    overview: "Tyranitar é um bruto de alto impacto, com muita pressão física e grande ameaça quando encontra espaço para atacar ou montar vantagem.",
    practicalUse: "Vai muito bem em equipes que aceitam um ritmo mais pesado e querem um breaker capaz de obrigar trocas e desgastar o rival por puro respeito.",
    bestFor: "Indicado para composições agressivas ou balanceadas com foco em abrir brechas para um atacante principal.",
    curiosity: "O peso de Tyranitar na partida costuma aparecer antes mesmo do primeiro golpe, porque ele muda como o adversário se posiciona.",
  },
  garchomp: {
    overview: "Garchomp é um atacante terrestre de elite com pressão ofensiva, boa velocidade e encaixe natural em times que valorizam momentum.",
    practicalUse: "Ele entra para ameaçar imediatamente com dano forte e cobertura simples. Também é excelente para punir equipes dependentes de Elétrico e Fogo.",
    bestFor: "É uma das melhores escolhas para quem quer poder direto sem abrir mão de consistência.",
    curiosity: "Garchomp segue forte em diferentes contextos porque oferece exatamente o que muitos times pedem: dano claro e pouca frescura.",
  },
  mimikyu: {
    overview: "Mimikyu é um atacante oportunista que aproveita janelas curtas para virar partidas. Sua principal força está em ganhar um turno de valor.",
    practicalUse: "Funciona muito bem como finalizador ou resposta de emergência quando o time precisa de tempo para setup ou para segurar um golpe decisivo.",
    bestFor: "Excelente em equipes ofensivas que gostam de manter ameaças escondidas para o fim da luta.",
    curiosity: "O apelo de Mimikyu vem da mistura entre visual estranho e uma mecânica que realmente muda o jeito de jogar contra ele.",
  },
  umbreon: {
    overview: "Umbreon é um tanque de desgaste focado em sobrevivência, controle de ritmo e punição de times apressados. Não vence pela pressa.",
    practicalUse: "Serve para segurar pressão especial, espalhar status e criar turnos confortáveis para o resto da equipe assumir a parte ofensiva.",
    bestFor: "Ideal para jogadores que gostam de estruturas defensivas, trocas calculadas e vitória por consistência.",
    curiosity: "Umbreon raramente parece chamativo em números, mas costuma valer mais na prática do que muita opção ofensiva mais vistosa.",
  },
  sylveon: {
    overview: "Sylveon entrega dano especial estável e bom valor defensivo em matchups corretos. É uma fada confiável e simples de encaixar.",
    practicalUse: "Brilha contra Dragão, Sombrio e equipes que sofrem para lidar com pressão especial constante. Também funciona bem como peça segura para campanha.",
    bestFor: "Muito bom para times que precisam de uma fada clara, direta e com boa utilidade em composições balanceadas.",
    curiosity: "Sylveon ganhou espaço rápido entre as evoluções de Eevee porque combina carisma com função muito objetiva.",
  },
  arcanine: {
    overview: "Arcanine é um atacante de Fogo versátil, com presença ofensiva e boa utilidade de entrada. Ele consegue ser agressivo sem virar all-in.",
    practicalUse: "Vai bem para pressionar tipos Planta, Gelo e Inseto, além de servir como pivô em times que gostam de manter o ritmo sob controle.",
    bestFor: "É uma excelente escolha para jogadores que querem um tipo Fogo forte, mas ainda flexível no uso ao longo da campanha.",
    curiosity: "O charme de Arcanine vem justamente dessa mistura de imponência visual com papel tático muito funcional.",
  },
  lapras: {
    overview: "Lapras é um Pokémon de cobertura valiosa, bom volume e utilidade ampla. Ele encaixa bem quando o time precisa de Água com algo a mais.",
    practicalUse: "Ajuda muito contra Fogo, Dragão e confrontos mais longos em que resistência e cobertura de Gelo fazem diferença.",
    bestFor: "Funciona bem em campanhas e equipes mais seguras, onde sua mistura de bulk e dano consistente tem tempo para render.",
    curiosity: "Lapras continua querido porque junta utilidade real de batalha com uma identidade visual muito forte dentro da franquia.",
  },
  miraidon: {
    overview: "Miraidon é um ofensivo moderno com presença imediata, boa pressão por velocidade e combinação de tipos que incomoda bastante.",
    practicalUse: "Funciona muito bem para abrir vantagem cedo, punir Água e Voador e obrigar o rival a respeitar dano elétrico e pressão de dragão.",
    bestFor: "Excelente para equipes ofensivas e para jogadores que gostam de atacar primeiro e manter momentum.",
    curiosity: "Boa parte do impacto de Miraidon vem da mistura entre visual futurista e função tática muito clara.",
  },
  gastly: {
    overview: "Gastly é um atacante frágil, mas com presença ofensiva cedo na jornada. Ele valoriza posicionamento acima de resistência.",
    practicalUse: "Serve para pressionar alvos vulneráveis a Fantasma e preparar bem a progressão para Haunter e Gengar.",
    bestFor: "Bom para quem gosta de linhas evolutivas ofensivas e aceita proteger um Pokémon mais delicado no início.",
    curiosity: "Mesmo em forma inicial, Gastly já mostra a identidade oportunista que define a linha inteira.",
  },
  haunter: {
    overview: "Haunter é uma etapa intermediária com mais impacto ofensivo e ritmo agressivo. Ele já entrega boa ameaça especial antes da forma final.",
    practicalUse: "Entra bem para acelerar lutas, punir trocas previsíveis e dar continuidade ao plano ofensivo da equipe.",
    bestFor: "Indicado para times que querem pressão sem esperar até a evolução final para funcionar.",
    curiosity: "Haunter costuma ser lembrado como transição para Gengar, mas sozinho já oferece personalidade de jogo bem definida.",
  },
  riolu: {
    overview: "Riolu é simples, direto e focado em preparação para Lucario. Ele não resolve tudo sozinho, mas cresce bem.",
    practicalUse: "Ajuda em confrontos iniciais contra Pedra e Sombrio e vale pelo desenvolvimento consistente da linha evolutiva.",
    bestFor: "Bom para quem quer investir cedo em um Pokémon que depois vira peça versátil e de alto impacto.",
    curiosity: "Riolu já antecipa a ideia de aura e leitura de combate que faz Lucario se destacar depois.",
  },
  dratini: {
    overview: "Dratini é um início paciente para quem pensa no longo prazo. Sua principal força é abrir caminho para uma das linhas de dragão mais completas.",
    practicalUse: "Não é explosivo cedo, mas compensa para quem topa evoluir com calma e colher um Dragonite muito mais forte depois.",
    bestFor: "Indicado para jogadores que gostam de progressão gradual e aceitam investir em potencial futuro.",
    curiosity: "A linha de Dratini ficou famosa justamente por transformar uma base discreta em um final de alto impacto.",
  },
  dragonair: {
    overview: "Dragonair refina a linha de Dratini com mais presença e estabilidade. Ainda é uma etapa de transição, mas já mostra mais valor imediato.",
    practicalUse: "Funciona como peça intermediária para quem quer um dragão em crescimento antes de chegar ao pico com Dragonite.",
    bestFor: "Boa opção para campanhas em que a linha evolutiva tem tempo para amadurecer sem pressa.",
    curiosity: "Dragonair ganha destaque por ter identidade própria, mesmo vivendo à sombra da forma final.",
  },
  munchlax: {
    overview: "Munchlax é um tanque em miniatura, com foco em resistir e preparar a chegada de Snorlax. Seu valor é mais estrutural do que explosivo.",
    practicalUse: "Ajuda times casuais que precisam de volume e de uma linha evolutiva confiável para o mid game.",
    bestFor: "Serve bem para jogadores que gostam de construir o time em torno de consistência e não apenas dano imediato.",
    curiosity: "Mesmo menor e mais leve na proposta, Munchlax já transmite bem a identidade resistente da linha.",
  },
  gyarados: {
    overview: "Gyarados é um atacante intimidador com alto impacto prático e potencial de dominar partidas quando encontra espaço.",
    practicalUse: "Brilha como sweeper físico ou pressão de meio de jogo, especialmente contra times sem resposta clara a Água e Voador.",
    bestFor: "Excelente para jogadores que gostam de transformar vantagem de posicionamento em avalanche ofensiva.",
    curiosity: "Poucas evoluções são tão marcantes quanto a passagem de Magikarp para Gyarados.",
  },
  scizor: {
    overview: "Scizor combina resistências valiosas com ofensiva eficiente. Ele não precisa de cobertura exagerada para ser relevante.",
    practicalUse: "Vai muito bem em equipes balanceadas, entrando contra diversos alvos e ameaçando com dano direto ou pressão de prioridade.",
    bestFor: "Ideal para quem quer um Aço seguro, funcional e com valor constante ao longo da partida.",
    curiosity: "Scizor se destaca por parecer contido no papel, mas render muito quando o time aproveita suas resistências.",
  },
  alakazam: {
    overview: "Alakazam é um atacante especial focado em velocidade e impacto. Ele não gosta de tomar hits, mas pune muito quando entra bem.",
    practicalUse: "Excelente para quebrar alvos mais frágeis, explorar matchups contra Lutador e forçar respeito imediato por dano psíquico.",
    bestFor: "Perfeito para composições ofensivas e para jogadores que valorizam pressão limpa e objetiva.",
    curiosity: "O fascínio por Alakazam sempre esteve na imagem de inteligência extrema convertida em poder de batalha.",
  },
  mewtwo: {
    overview: "Mewtwo é um dos ofensivos mais emblemáticos da franquia, com poder bruto e grande ameaça especial em qualquer contexto.",
    practicalUse: "Funciona como peça central de pressão, abrindo lutas e exigindo respostas específicas do adversário desde o primeiro turno.",
    bestFor: "Muito forte para quem quer um Pokémon dominante e capaz de definir o ritmo do confronto quase sozinho.",
    curiosity: "A aura de Mewtwo continua forte porque ele combina história marcante com utilidade de batalha facilmente reconhecível.",
  },
  mew: {
    overview: "Mew é sinônimo de flexibilidade. Sua grande força está em se adaptar a funções diferentes sem parecer deslocado.",
    practicalUse: "Pode servir como suporte, cobertura especial ou peça de utilidade em times que precisam de encaixe versátil.",
    bestFor: "Excelente para jogadores que gostam de criatividade e de montar soluções em volta do elenco.",
    curiosity: "Mew permanece especial justamente por representar potencial aberto, tanto na lore quanto no uso prático.",
  },
  rayquaza: {
    overview: "Rayquaza é um atacante de altíssimo impacto, com combinação de dano e ameaça que muda a leitura da partida.",
    practicalUse: "Brilha como finalizador ou breaker em times ofensivos, entrando para punir momentos em que o rival perdeu controle da luta.",
    bestFor: "Indicado para quem quer uma peça dominante e com presença de fim de jogo muito forte.",
    curiosity: "Rayquaza virou referência de poder lendário também porque seu papel em batalha sempre parece grandioso.",
  },
  lugia: {
    overview: "Lugia é um lendário de perfil mais seguro, com grande valor defensivo e capacidade de estabilizar confrontos tensos.",
    practicalUse: "Funciona bem para absorver pressão, controlar ritmo e servir como eixo em equipes que não querem depender só de agressividade.",
    bestFor: "Excelente para jogadores que preferem controle, leitura de partida e segurança defensiva.",
    curiosity: "O contraste entre poder lendário e postura protetora ajuda Lugia a ocupar um espaço único no imaginário da franquia.",
  },
  'ho-oh': {
    overview: "Ho-Oh oferece presença ofensiva forte, boa cobertura e uma identidade de Fogo lendário muito clara. Ele pressiona sem perder imponência.",
    practicalUse: "Ajuda bastante contra tipos Planta, Inseto e alvos que cedem valor para ofensiva de Fogo em partidas mais abertas.",
    bestFor: "Boa escolha para equipes que querem um ofensivo de grande impacto e com presença marcante em campo.",
    curiosity: "Ho-Oh se destaca por parecer majestoso e agressivo ao mesmo tempo, algo raro mesmo entre lendários.",
  },
  greninja: {
    overview: "Greninja é um atacante leve, veloz e de alta pressão. Ele valoriza movimentação e leitura certa de cobertura.",
    practicalUse: "Funciona muito bem como pivô ofensivo, finalizador e resposta rápida contra times que cedem espaço para Água ou Sombrio.",
    bestFor: "Ideal para jogadores que gostam de ritmo alto, trocas rápidas e ofensiva inteligente.",
    curiosity: "Greninja ganhou destaque rapidamente porque mistura carisma visual com uma identidade de jogo muito dinâmica.",
  },
  decidueye: {
    overview: "Decidueye é um atacante tático, com valor em cobertura e funções que fogem do padrão mais bruto. Ele rende mais com planejamento.",
    practicalUse: "Ajuda em times que querem pressionar com Planta, manter utilidade de Fantasma e buscar respostas menos óbvias em campanha.",
    bestFor: "Bom para jogadores que preferem estilo, controle e uso mais calculado dos turnos.",
    curiosity: "Decidueye chama atenção por traduzir muito bem a fantasia de arqueiro para dentro das batalhas.",
  },
  cinderace: {
    overview: "Cinderace é um ofensivo direto, com ritmo alto e grande capacidade de transformar turno livre em pressão real.",
    practicalUse: "Brilha como atacante de Fogo para equipes agressivas, especialmente quando o plano é manter iniciativa e não deixar o rival respirar.",
    bestFor: "Excelente para jogadores que preferem velocidade, dano limpo e postura ofensiva do início ao fim.",
    curiosity: "Cinderace se firmou rapidamente como um dos exemplos mais claros de design feito para ritmo competitivo.",
  },
  zacian: {
    overview: "Zacian é uma ameaça ofensiva de elite, com alta pressão e excelente capacidade de decidir confrontos quando entra em campo.",
    practicalUse: "Serve como peça de alto impacto para quebrar times despreparados e forçar respostas imediatas contra o tipo Fada.",
    bestFor: "Indicado para quem quer um lendário claramente dominante e com valor ofensivo muito evidente.",
    curiosity: "A reputação de Zacian cresceu justamente porque sua presença altera a leitura do confronto antes mesmo da ação.",
  },
  metagross: {
    overview: "Metagross é um Aço robusto, com dano respeitável e grande valor em times balanceados. Ele combina peso ofensivo com segurança.",
    practicalUse: "Vai muito bem para segurar certos matchups, bater de volta com consistência e dar estrutura a times que precisam de presença física.",
    bestFor: "Excelente para quem quer um Pokémon confiável e que mantenha utilidade durante toda a partida.",
    curiosity: "Metagross se destaca por parecer frio e calculado, o que combina muito com a forma como ele joga.",
  },
  ursaluna: {
    overview: "Ursaluna é um tanque ofensivo de grande presença, com capacidade de trocar golpes e ainda devolver dano pesado.",
    practicalUse: "Funciona em times que não se importam com ritmo mais lento desde que ganhem valor por cada entrada em campo.",
    bestFor: "Bom para jogadores que gostam de poder bruto, durabilidade e impacto por turno.",
    curiosity: "Ursaluna chama atenção justamente por unir aparência pesada a uma eficiência de batalha muito objetiva.",
  },
  annihilape: {
    overview: "Annihilape mistura pressão física com identidade agressiva e desconfortável de enfrentar. Ele cresce bem em partidas caóticas.",
    practicalUse: "Encaixa em equipes que gostam de atrito, trocas intensas e ameaça constante de punição quando o rival perde o controle.",
    bestFor: "Excelente para jogadores que preferem ofensiva com traços de resistência e capacidade de virar lutas tensas.",
    curiosity: "O sucesso de Annihilape vem também da sensação de que ele sempre pode transformar caos em vantagem.",
  },
  tinkaton: {
    overview: "Tinkaton combina resistências excelentes com utilidade e personalidade ofensiva própria. É uma peça muito confortável de encaixar.",
    practicalUse: "Serve bem para times que precisam de Fada, Aço e presença em matchups contra Dragão, Sombrio e outras ameaças comuns.",
    bestFor: "É ótima para equipes balanceadas que valorizam função defensiva sem abrir mão de pressão.",
    curiosity: "Tinkaton se tornou popular muito rápido porque une identidade visual forte com utilidade prática imediata.",
  },
  koraidon: {
    overview: "Koraidon é um ofensivo de grande impacto, com combinação de tipos agressiva e capacidade de forçar respeito o tempo todo.",
    practicalUse: "Brilha em times que querem entrar batendo forte, pressionar com ritmo alto e explorar a ameaça constante de Dragão e Lutador.",
    bestFor: "Excelente para composições ofensivas e para jogadores que gostam de dominar o compasso da partida.",
    curiosity: "Koraidon tem valor especial por traduzir muito bem a ideia de força antiga em presença de jogo.",
  },
  ceruledge: {
    overview: "Ceruledge é um atacante de Fogo/Fantasma com perfil agressivo e excelente identidade para pressionar trocas e confrontos diretos.",
    practicalUse: "Vai muito bem quando o time precisa de ofensiva diferente do padrão, especialmente contra alvos vulneráveis a Fogo ou Fantasma.",
    bestFor: "Boa escolha para jogadores que querem um atacante estiloso, direto e com cara de finisher.",
    curiosity: "Ceruledge se destaca por unir visual marcante a um papel ofensivo que o jogador sente imediatamente em campo.",
  },
  armarouge: {
    overview: "Armarouge é um especial ofensivo com cobertura interessante e boa presença contra vários tipos que cedem espaço ao dano de Fogo ou Psíquico.",
    practicalUse: "Funciona bem como atacante de meio de jogo, abrindo brechas e punindo times que não têm resposta clara à sua combinação.",
    bestFor: "Indicado para equipes que querem ofensiva especial consistente e um perfil menos previsível.",
    curiosity: "Armarouge chama atenção por oferecer um caminho bem diferente de Ceruledge, mesmo vindo da mesma base.",
  },
};

export function getPokemonProfile(slug: string) {
  return pokedexProfiles[slug];
}
