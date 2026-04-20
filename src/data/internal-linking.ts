export interface GuideInternalLinks {
  pokemon: string[];
  game: string;
  guides: string[];
}

export interface PokemonInternalLinks {
  guides: string[];
  game: string;
}

export interface GameInternalLinks {
  guides: string[];
  pokemon: string[];
}

export interface InternalLinkingStrategy {
  guides: Record<string, GuideInternalLinks>;
  pokemon: Record<string, PokemonInternalLinks>;
  games: Record<string, GameInternalLinks>;
}

// Mapa central de interlinking editorial.
// Todos os relacionamentos usam slugs existentes no projeto.
export const internalLinkingStrategy: InternalLinkingStrategy = {
  guides: {
    'como-evoluir-eevee': {
      pokemon: ['eevee', 'umbreon', 'sylveon'],
      game: 'scarlet-violet',
      guides: ['melhores-pokemon-para-iniciantes', 'fraquezas-tipo-fada'],
    },
    'fraquezas-tipo-fada': {
      pokemon: ['gardevoir', 'sylveon', 'mimikyu', 'tinkaton'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-dragao', 'como-montar-time-balanceado'],
    },
    'fraquezas-tipo-dragao': {
      pokemon: ['dragonite', 'garchomp', 'miraidon', 'koraidon'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fada', 'diferenca-ataque-fisico-especial'],
    },
    'fraquezas-tipo-fogo': {
      pokemon: ['charizard', 'arcanine', 'cinderace', 'ceruledge'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-agua', 'melhores-pokemon-fogo'],
    },
    'melhores-pokemon-para-iniciantes': {
      pokemon: ['pikachu', 'eevee', 'charmander', 'squirtle'],
      game: 'scarlet-violet',
      guides: ['melhor-ordem-jogar-pokemon', 'como-montar-time-balanceado'],
    },
    'melhor-ordem-jogar-pokemon': {
      pokemon: ['pikachu', 'charizard', 'miraidon'],
      game: 'scarlet-violet',
      guides: ['melhores-pokemon-para-iniciantes', 'pokopia-guia-inicial'],
    },
    'melhores-pokemon-fogo': {
      pokemon: ['charizard', 'arcanine', 'cinderace', 'armarouge'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fogo', 'como-montar-time-balanceado'],
    },
    'melhores-pokemon-eletricos': {
      pokemon: ['pikachu', 'miraidon', 'eevee'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-agua', 'melhores-pokemon-para-iniciantes'],
    },
    'como-montar-time-balanceado': {
      pokemon: ['lucario', 'gardevoir', 'dragonite', 'snorlax'],
      game: 'scarlet-violet',
      guides: ['diferenca-ataque-fisico-especial', 'melhores-pokemon-para-iniciantes'],
    },
    'diferenca-ataque-fisico-especial': {
      pokemon: ['lucario', 'gardevoir', 'metagross', 'armarouge'],
      game: 'pokemon-champions',
      guides: ['como-montar-time-balanceado', 'pokemon-champions-o-que-ja-se-sabe'],
    },
    'pokemon-champions-o-que-ja-se-sabe': {
      pokemon: ['charizard', 'mewtwo', 'zacian', 'metagross'],
      game: 'pokemon-champions',
      guides: ['como-montar-time-balanceado', 'diferenca-ataque-fisico-especial'],
    },
    'pokopia-guia-inicial': {
      pokemon: ['eevee', 'miraidon', 'koraidon', 'rayquaza'],
      game: 'pokopia',
      guides: ['melhor-ordem-jogar-pokemon', 'melhores-pokemon-para-iniciantes'],
    },
    'fraquezas-tipo-agua': {
      pokemon: ['gyarados', 'blastoise', 'greninja', 'lapras'],
      game: 'scarlet-violet',
      guides: ['melhores-pokemon-eletricos', 'fraquezas-tipo-planta'],
    },
    'fraquezas-tipo-inseto': {
      pokemon: ['scizor', 'charizard', 'arcanine', 'ceruledge'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fogo', 'fraquezas-tipo-aco'],
    },
    'fraquezas-tipo-psiquico': {
      pokemon: ['alakazam', 'mewtwo', 'mew', 'gardevoir'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fantasma', 'fraquezas-tipo-lutador'],
    },
    'fraquezas-tipo-planta': {
      pokemon: ['bulbasaur', 'venusaur', 'decidueye', 'armarouge'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fogo', 'fraquezas-tipo-inseto'],
    },
    'fraquezas-tipo-terra': {
      pokemon: ['garchomp', 'ursaluna', 'miraidon', 'koraidon'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-agua', 'fraquezas-tipo-planta'],
    },
    'fraquezas-tipo-aco': {
      pokemon: ['scizor', 'metagross', 'lucario', 'tinkaton'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fogo', 'fraquezas-tipo-terra'],
    },
    'fraquezas-tipo-lutador': {
      pokemon: ['lucario', 'riolu', 'annihilape', 'koraidon'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-fada', 'fraquezas-tipo-psiquico'],
    },
    'fraquezas-tipo-fantasma': {
      pokemon: ['gengar', 'gastly', 'haunter', 'ceruledge'],
      game: 'scarlet-violet',
      guides: ['fraquezas-tipo-psiquico', 'fraquezas-tipo-lutador'],
    },
  },
  pokemon: {
    pikachu: {
      guides: ['melhores-pokemon-eletricos', 'melhores-pokemon-para-iniciantes'],
      game: 'pokemon-unite',
    },
    eevee: {
      guides: ['como-evoluir-eevee', 'melhores-pokemon-para-iniciantes'],
      game: 'pokopia',
    },
    charizard: {
      guides: ['melhores-pokemon-fogo', 'fraquezas-tipo-fogo'],
      game: 'pokemon-champions',
    },
    bulbasaur: {
      guides: ['melhores-pokemon-para-iniciantes', 'fraquezas-tipo-planta'],
      game: 'scarlet-violet',
    },
    venusaur: {
      guides: ['fraquezas-tipo-planta', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    charmander: {
      guides: ['melhores-pokemon-para-iniciantes', 'melhores-pokemon-fogo'],
      game: 'scarlet-violet',
    },
    squirtle: {
      guides: ['melhores-pokemon-para-iniciantes', 'fraquezas-tipo-agua'],
      game: 'scarlet-violet',
    },
    blastoise: {
      guides: ['fraquezas-tipo-agua', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    snorlax: {
      guides: ['melhores-pokemon-para-iniciantes', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    gengar: {
      guides: ['fraquezas-tipo-fantasma', 'fraquezas-tipo-psiquico'],
      game: 'scarlet-violet',
    },
    lucario: {
      guides: ['como-montar-time-balanceado', 'diferenca-ataque-fisico-especial'],
      game: 'pokemon-unite',
    },
    dragonite: {
      guides: ['fraquezas-tipo-dragao', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    gardevoir: {
      guides: ['fraquezas-tipo-fada', 'fraquezas-tipo-psiquico'],
      game: 'scarlet-violet',
    },
    tyranitar: {
      guides: ['como-montar-time-balanceado', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    garchomp: {
      guides: ['fraquezas-tipo-dragao', 'fraquezas-tipo-terra'],
      game: 'scarlet-violet',
    },
    mimikyu: {
      guides: ['fraquezas-tipo-fada', 'fraquezas-tipo-fantasma'],
      game: 'scarlet-violet',
    },
    umbreon: {
      guides: ['como-evoluir-eevee', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    sylveon: {
      guides: ['como-evoluir-eevee', 'fraquezas-tipo-fada'],
      game: 'scarlet-violet',
    },
    arcanine: {
      guides: ['melhores-pokemon-fogo', 'fraquezas-tipo-fogo'],
      game: 'scarlet-violet',
    },
    lapras: {
      guides: ['fraquezas-tipo-agua', 'fraquezas-tipo-dragao'],
      game: 'scarlet-violet',
    },
    miraidon: {
      guides: ['melhores-pokemon-eletricos', 'fraquezas-tipo-dragao'],
      game: 'scarlet-violet',
    },
    gastly: {
      guides: ['fraquezas-tipo-fantasma', 'fraquezas-tipo-psiquico'],
      game: 'scarlet-violet',
    },
    haunter: {
      guides: ['fraquezas-tipo-fantasma', 'fraquezas-tipo-psiquico'],
      game: 'scarlet-violet',
    },
    riolu: {
      guides: ['melhores-pokemon-para-iniciantes', 'fraquezas-tipo-lutador'],
      game: 'scarlet-violet',
    },
    dratini: {
      guides: ['fraquezas-tipo-dragao', 'melhores-pokemon-para-iniciantes'],
      game: 'scarlet-violet',
    },
    dragonair: {
      guides: ['fraquezas-tipo-dragao', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    munchlax: {
      guides: ['melhores-pokemon-para-iniciantes', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    gyarados: {
      guides: ['fraquezas-tipo-agua', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    scizor: {
      guides: ['fraquezas-tipo-inseto', 'fraquezas-tipo-aco'],
      game: 'pokemon-champions',
    },
    alakazam: {
      guides: ['fraquezas-tipo-psiquico', 'diferenca-ataque-fisico-especial'],
      game: 'pokemon-champions',
    },
    mewtwo: {
      guides: ['fraquezas-tipo-psiquico', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    mew: {
      guides: ['fraquezas-tipo-psiquico', 'como-montar-time-balanceado'],
      game: 'pokemon-champions',
    },
    rayquaza: {
      guides: ['fraquezas-tipo-dragao', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    lugia: {
      guides: ['fraquezas-tipo-psiquico', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    'ho-oh': {
      guides: ['melhores-pokemon-fogo', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    greninja: {
      guides: ['fraquezas-tipo-agua', 'como-montar-time-balanceado'],
      game: 'pokemon-unite',
    },
    decidueye: {
      guides: ['fraquezas-tipo-planta', 'fraquezas-tipo-fantasma'],
      game: 'scarlet-violet',
    },
    cinderace: {
      guides: ['melhores-pokemon-fogo', 'fraquezas-tipo-fogo'],
      game: 'scarlet-violet',
    },
    zacian: {
      guides: ['fraquezas-tipo-fada', 'pokemon-champions-o-que-ja-se-sabe'],
      game: 'pokemon-champions',
    },
    metagross: {
      guides: ['fraquezas-tipo-aco', 'diferenca-ataque-fisico-especial'],
      game: 'pokemon-champions',
    },
    ursaluna: {
      guides: ['fraquezas-tipo-terra', 'como-montar-time-balanceado'],
      game: 'scarlet-violet',
    },
    annihilape: {
      guides: ['fraquezas-tipo-lutador', 'fraquezas-tipo-fantasma'],
      game: 'scarlet-violet',
    },
    tinkaton: {
      guides: ['fraquezas-tipo-fada', 'fraquezas-tipo-aco'],
      game: 'scarlet-violet',
    },
    koraidon: {
      guides: ['fraquezas-tipo-lutador', 'fraquezas-tipo-dragao'],
      game: 'scarlet-violet',
    },
    ceruledge: {
      guides: ['fraquezas-tipo-fogo', 'fraquezas-tipo-fantasma'],
      game: 'scarlet-violet',
    },
    armarouge: {
      guides: ['fraquezas-tipo-fogo', 'diferenca-ataque-fisico-especial'],
      game: 'scarlet-violet',
    },
  },
  games: {
    'scarlet-violet': {
      guides: [
        'como-evoluir-eevee',
        'melhores-pokemon-para-iniciantes',
        'como-montar-time-balanceado',
        'fraquezas-tipo-dragao',
        'fraquezas-tipo-agua',
      ],
      pokemon: [
        'pikachu',
        'eevee',
        'charizard',
        'lucario',
        'dragonite',
        'gardevoir',
        'miraidon',
        'koraidon',
        'ceruledge',
        'tinkaton',
      ],
    },
    'pokemon-unite': {
      guides: [
        'melhores-pokemon-para-iniciantes',
        'como-montar-time-balanceado',
        'diferenca-ataque-fisico-especial',
        'melhores-pokemon-eletricos',
      ],
      pokemon: [
        'pikachu',
        'lucario',
        'charizard',
        'greninja',
        'mewtwo',
        'alakazam',
      ],
    },
    pokopia: {
      guides: [
        'pokopia-guia-inicial',
        'melhor-ordem-jogar-pokemon',
        'melhores-pokemon-para-iniciantes',
        'como-montar-time-balanceado',
      ],
      pokemon: ['eevee', 'miraidon', 'koraidon', 'rayquaza', 'lugia', 'ho-oh'],
    },
    'pokemon-champions': {
      guides: [
        'pokemon-champions-o-que-ja-se-sabe',
        'como-montar-time-balanceado',
        'diferenca-ataque-fisico-especial',
        'fraquezas-tipo-dragao',
        'fraquezas-tipo-fada',
      ],
      pokemon: [
        'charizard',
        'mewtwo',
        'zacian',
        'metagross',
        'scizor',
        'rayquaza',
        'lugia',
        'ho-oh',
      ],
    },
  },
};

export function getGuideInternalLinks(slug: string) {
  return internalLinkingStrategy.guides[slug];
}

export function getPokemonInternalLinks(slug: string) {
  return internalLinkingStrategy.pokemon[slug];
}

export function getGameInternalLinks(slug: string) {
  return internalLinkingStrategy.games[slug];
}
