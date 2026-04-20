// Tipagens principais do domínio PokeRush

export interface Pokemon {
  name: string;
  slug: string;
  image: string;
  types: string[];
  shortDescription: string;
  weaknesses: string[];
  resistances: string[];
  evolutions: string[]; // slugs dos Pokémon na evolução
  games: string[]; // slugs dos jogos
  relatedGuides: string[]; // slugs dos guias relacionados
}

export interface Guide {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  relatedPokemon: string[]; // slugs dos Pokémon relacionados
  relatedGame?: string; // slug do jogo relacionado (opcional)
  content: string;
  publishedAt: string; // formato ISO string
}

export interface Game {
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  targetAudience?: string; // Para quem o jogo é indicado
  mainMechanics?: string[]; // Principais mecânicas do jogo
  beginnerTips?: string[]; // Dicas iniciais para novatos
  relatedGuides: string[]; // slugs dos guias relacionados
  relatedNews: string[]; // slugs das notícias relacionadas
  relatedPokemon: string[]; // slugs dos Pokémon relacionados
}

export interface News {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  content: string;
  publishedAt: string; // formato ISO string
  relatedGuides?: string[]; // slugs dos guias relacionados (opcional)
  relatedGame?: string; // slug do jogo relacionado (opcional)
  relatedPokemon?: string[]; // slugs dos Pokémon relacionados (opcional)
}
