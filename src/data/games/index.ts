import { Game } from '@/types';

export const gamesData: Game[] = [
  {
    name: "Scarlet & Violet",
    slug: "scarlet-violet",
    description: "A nova geração de Pokémon com mundo aberto em Paldea, oferecendo liberdade total de exploração e batalhas estratégicas.",
    coverImage: "/images/games/scarlet-violet-capa.jpeg",
    targetAudience: "Indicado para jogadores que gostam de exploração livre e batalhas estratégicas. Ideal para iniciantes e veteranos que querem uma experiência completa de RPG.",
    mainMechanics: [
      "Mundo aberto com exploração livre em Paldea",
      "Sistema de três linhas de história entrelaçadas",
      "Batalhas em tempo real com comandos estratégicos",
      "Captura e treinamento de Pokémon com liberdade total",
      "Sistema de Terastallization para evoluções especiais",
      "Co-op online com amigos em aventuras compartilhadas"
    ],
    beginnerTips: [
      "Explore as três rotas principais logo no início para entender a história",
      "Capture Pokémon variados desde o começo - diversidade é chave",
      "Use o sistema de Terastallization em batalhas difíceis",
      "Complete missões secundárias para ganhar experiência extra",
      "Junte-se a amigos online para tornar a exploração mais divertida"
    ],
    relatedGuides: ["como-evoluir-eevee", "fraquezas-tipo-fada", "fraquezas-tipo-dragao", "melhores-pokemon-para-iniciantes"],
    relatedNews: ["pokemon-champions-gera-debate-na-comunidade"],
    relatedPokemon: ["pikachu", "eevee", "charizard", "bulbasaur", "squirtle", "gyarados", "alakazam", "mewtwo", "mew", "greninja", "decidueye", "cinderace", "lucario", "dragonite", "gardevoir", "miraidon", "koraidon"]
  },
  {
    name: "Pokémon Unite",
    slug: "pokemon-unite",
    description: "MOBA estratégico com Pokémon em batalhas 5v5, combinando estratégia rápida com o universo Pokémon.",
    coverImage: "/images/games/pokemon-unite-capa.jpeg",
    targetAudience: "Perfeito para jogadores competitivos que gostam de jogos de equipe e estratégia rápida. Ideal para quem curte MOBAs como League of Legends.",
    mainMechanics: [
      "Batalhas 5v5 em arenas competitivas",
      "Sistema de níveis e evolução durante as partidas",
      "Movimentos únicos e habilidades especiais por Pokémon",
      "Objetivos estratégicos como capturar pontos de controle",
      "Sistema de economia com moedas para upgrades",
      "Modo cooperativo para treinos e diversão"
    ],
    beginnerTips: [
      "Comece com Pokémon fáceis como Pikachu ou Eevee",
      "Foque em capturar pontos de controle no início da partida",
      "Use as habilidades especiais nos momentos certos",
      "Comunique-se com sua equipe sobre estratégias",
      "Pratique o posicionamento e timing dos ataques"
    ],
    relatedGuides: ["melhores-pokemon-para-iniciantes"],
    relatedNews: [],
    relatedPokemon: ["pikachu", "lucario", "charizard", "greninja", "mewtwo", "alakazam"]
  },
  {
    name: "Pokópia",
    slug: "pokopia",
    description: "Jogo indie com mecânicas inovadoras de captura, oferecendo uma experiência única e criativa no universo Pokémon.",
    coverImage: "/images/games/pokopia-capa.jpeg",
    targetAudience: "Ideal para jogadores curiosos que buscam experiências únicas e criativas. Perfeito para quem quer algo diferente dos jogos tradicionais de Pokémon.",
    mainMechanics: [
      "Sistema inovador de captura baseado em timing e estratégia",
      "Mundo proceduralmente gerado com exploração infinita",
      "Mecânicas de crafting e construção de itens",
      "Sistema de evolução não-linear e criativo",
      "Modo multiplayer cooperativo único",
      "Foco em narrativa emergente através das escolhas do jogador"
    ],
    beginnerTips: [
      "Pratique o timing das capturas em áreas seguras primeiro",
      "Explore diferentes biomas para descobrir Pokémon únicos",
      "Experimente combinações de itens no sistema de crafting",
      "Jogue com amigos para descobrir mecânicas ocultas",
      "Não tenha pressa - a exploração é a chave do jogo"
    ],
    relatedGuides: ["pokopia-guia-inicial"],
    relatedNews: ["pokopia-primeiras-impressoes"],
    relatedPokemon: ["eevee", "miraidon", "koraidon", "rayquaza", "lugia", "ho-oh"]
  },
  {
    name: "Pokémon Champions",
    slug: "pokemon-champions",
    description: "Novo título competitivo focado em batalhas estratégicas profundas, oferecendo o combate mais refinado da franquia.",
    coverImage: "/images/games/pokemon-champions-capa.jpeg",
    targetAudience: "Feito para treinadores experientes que querem batalhas profundas e competitivas. Ideal para jogadores veteranos que conhecem bem a mecânica de Pokémon.",
    mainMechanics: [
      "Sistema de batalhas competitivo refinado e estratégico",
      "Modo carreira com progressão de treinador profissional",
      "Torneios online com matchmaking avançado",
      "Sistema de decks customizáveis com restrições estratégicas",
      "Foco em meta game e adaptação às tendências competitivas",
      "Conteúdo sazonal com novos desafios e recompensas"
    ],
    beginnerTips: [
      "Comece com Pokémon que você já conhece bem",
      "Estude as metas atuais antes de montar seu time",
      "Pratique contra IA para entender estratégias básicas",
      "Assista streams de jogadores profissionais para aprender",
      "Foque em consistência antes de tentar estratégias complexas"
    ],
    relatedGuides: ["pokemon-champions-o-que-ja-se-sabe"],
    relatedNews: ["pokemon-champions-gera-debate-na-comunidade"],
    relatedPokemon: ["charizard", "mewtwo", "mew", "rayquaza", "lugia", "ho-oh", "alakazam", "metagross", "gyarados", "scizor"]
  }
];
