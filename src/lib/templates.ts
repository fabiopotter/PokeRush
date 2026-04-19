// ==========================================
// TEMPLATES PARA ADIÇÃO DE NOVOS CONTEÚDOS
// ==========================================
//
// Este arquivo contém templates e exemplos para facilitar
// a adição de novos conteúdos ao PokeRush.
//
// IMPORTANTE:
// - Sempre use slugs únicos e válidos
// - Mantenha referências consistentes entre entidades
// - Use o SLUG_CONFIG.generateSlug() para gerar slugs
// - Valide dados com VALIDATIONS antes de adicionar

import { Pokemon, Guide, Game, News } from '@/types';
import { SLUG_CONFIG, VALIDATIONS } from '@/lib/config';

// ==========================================
// TEMPLATE PARA NOVO POKÉMON
// ==========================================

export const POKEMON_TEMPLATE: Omit<Pokemon, 'slug'> = {
  name: "", // Nome oficial do Pokémon
  image: "/images/pokemon/.jpg", // Caminho da imagem
  types: [], // Array de tipos (use SLUG_CONFIG.POKEMON_TYPES)
  shortDescription: "", // Descrição curta (máx 160 caracteres)
  weaknesses: [], // Tipos que causam dano super efetivo
  resistances: [], // Tipos que causam dano não muito efetivo
  evolutions: [], // Slugs dos Pokémon na linha evolutiva
  games: [], // Slugs dos jogos onde aparece
  relatedGuides: [], // Slugs dos guias relacionados
};

// EXEMPLO DE POKÉMON COMPLETO:
export const EXAMPLE_POKEMON: Pokemon = {
  name: "Blaziken",
  slug: SLUG_CONFIG.generateSlug("Blaziken"), // "blaziken"
  image: "/images/pokemon/blaziken.jpg",
  types: ["Fogo", "Lutador"],
  shortDescription: "Pokémon galo de fogo que combina chutes poderosos com ataques flamejantes.",
  weaknesses: ["Água", "Voador", "Psíquico"],
  resistances: ["Fogo", "Planta", "Gelo", "Sombrio", "Inseto"],
  evolutions: ["torchic", "combusken"],
  games: ["scarlet-violet"],
  relatedGuides: ["melhores-pokemon-para-iniciantes", "tipos-duplos-efetivos"],
};

// ==========================================
// TEMPLATE PARA NOVO GUIA
// ==========================================

export const GUIDE_TEMPLATE: Omit<Guide, 'slug'> = {
  title: "", // Título do guia
  excerpt: "", // Resumo curto (máx 160 caracteres)
  coverImage: "/images/guides/.jpg", // Caminho da imagem de capa
  category: "", // Use SLUG_CONFIG.GUIDE_CATEGORIES
  relatedPokemon: [], // Slugs dos Pokémon relacionados
  relatedGame: undefined, // Slug do jogo relacionado (opcional)
  content: "", // Conteúdo completo em markdown ou texto
  publishedAt: new Date().toISOString(), // Data de publicação
};

// EXEMPLO DE GUIA COMPLETO:
export const EXAMPLE_GUIDE: Guide = {
  title: "Como Treinar seu Blaziken",
  slug: SLUG_CONFIG.generateSlug("Como Treinar seu Blaziken"),
  excerpt: "Guia completo para evoluir e treinar Blaziken do Torchic até o nível máximo.",
  coverImage: "/images/guides/como-treinar-blaziken.jpg",
  category: "avancado",
  relatedPokemon: ["torchic", "combusken", "blaziken"],
  relatedGame: "scarlet-violet",
  content: `# Como Treinar seu Blaziken

## Introdução
Blaziken é um Pokémon poderoso que combina...

## Evolução
Comece com Torchic e evolua para Combusken...

## Estratégias de Batalha
Use ataques de Fogo e Lutador...
`,
  publishedAt: "2024-03-20T10:00:00Z",
};

// ==========================================
// TEMPLATE PARA NOVO JOGO
// ==========================================

export const GAME_TEMPLATE: Omit<Game, 'slug'> = {
  name: "", // Nome oficial do jogo
  description: "", // Descrição completa
  coverImage: "/images/games/.jpg", // Caminho da imagem de capa
  targetAudience: undefined, // Público-alvo (opcional)
  relatedGuides: [], // Slugs dos guias relacionados
  relatedNews: [], // Slugs das notícias relacionadas
  relatedPokemon: [], // Slugs dos Pokémon relacionados
};

// EXEMPLO DE JOGO COMPLETO:
export const EXAMPLE_GAME: Game = {
  name: "Pokémon Emerald",
  slug: SLUG_CONFIG.generateSlug("Pokémon Emerald"),
  description: "Versão remasterizada da geração 3 com novas mecânicas e Pokémon lendários.",
  coverImage: "/images/games/emerald.jpg",
  targetAudience: "Perfeito para jogadores que gostam de exploração e história profunda.",
  relatedGuides: ["guias-geracao-3", "pokemon-lendarios"],
  relatedNews: ["remaster-emerald-anunciado"],
  relatedPokemon: ["rayquaza", "latios", "latias"],
};

// ==========================================
// TEMPLATE PARA NOVA NOTÍCIA
// ==========================================

export const NEWS_TEMPLATE: Omit<News, 'slug'> = {
  title: "", // Título da notícia
  excerpt: "", // Resumo curto
  coverImage: "/images/news/.jpg", // Caminho da imagem
  content: "", // Conteúdo completo
  publishedAt: new Date().toISOString(), // Data de publicação
  relatedGame: undefined, // Slug do jogo relacionado (opcional)
  relatedPokemon: undefined, // Slugs dos Pokémon relacionados (opcional)
};

// EXEMPLO DE NOTÍCIA COMPLETA:
export const EXAMPLE_NEWS: News = {
  title: "Nova DLC de Scarlet & Violet Anunciada",
  slug: SLUG_CONFIG.generateSlug("Nova DLC de Scarlet & Violet Anunciada"),
  excerpt: "A DLC 'Índigo Disk' trará novas áreas, Pokémon e mecânicas inovadoras.",
  coverImage: "/images/news/indigo-disk-announcement.jpg",
  content: `# Nova DLC de Scarlet & Violet Anunciada

A Game Freak anunciou hoje a DLC "Índigo Disk" para Pokémon Scarlet & Violet...

## Novas Features
- Nova área flutuante
- 40+ novos Pokémon
- Novos tipos de batalha

## Data de Lançamento
Prevista para dezembro de 2024...
`,
  publishedAt: "2024-03-25T15:30:00Z",
  relatedGame: "scarlet-violet",
  relatedPokemon: ["miraidon", "koraidon"],
};

// ==========================================
// FUNÇÕES HELPER PARA VALIDAÇÃO
// ==========================================

export function validateAndAddPokemon(pokemon: Pokemon, existingData: Pokemon[]): { success: boolean; errors: string[] } {
  const errors = VALIDATIONS.validatePokemon(pokemon);

  // Verificar slug único
  if (existingData.some(p => p.slug === pokemon.slug)) {
    errors.push('Slug já existe');
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  // Adicionar ao array existente
  existingData.push(pokemon);
  return { success: true, errors: [] };
}

export function validateAndAddGuide(guide: Guide, existingData: Guide[]): { success: boolean; errors: string[] } {
  const errors = VALIDATIONS.validateGuide(guide);

  if (existingData.some(g => g.slug === guide.slug)) {
    errors.push('Slug já existe');
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  existingData.push(guide);
  return { success: true, errors: [] };
}

// ==========================================
// ESTRUTURA RECOMENDADA PARA ADICIONAR CONTEÚDO
// ==========================================
/*
PARA ADICIONAR UM NOVO POKÉMON:

1. Crie a imagem em public/images/pokemon/[slug].jpg
2. Adicione o objeto no arquivo src/data/pokemon/index.ts
3. Use o template POKEMON_TEMPLATE como base
4. Execute validação: VALIDATIONS.validatePokemon(novoPokemon)
5. Atualize referências em guias/jogos/notícias se necessário

PARA ADICIONAR UM NOVO GUIA:

1. Crie a imagem em public/images/guides/[slug].jpg
2. Adicione o objeto no arquivo src/data/guides/index.ts
3. Use o template GUIDE_TEMPLATE como base
4. Execute validação: VALIDATIONS.validateGuide(novoGuia)
5. Atualize relatedGuides nos Pokémon/jogos relacionados

PARA ADICIONAR UM NOVO JOGO:

1. Crie a imagem em public/images/games/[slug].jpg
2. Adicione o objeto no arquivo src/data/games/index.ts
3. Use o template GAME_TEMPLATE como base
4. Atualize referências em guias/notícias/Pokémon

PARA ADICIONAR UMA NOVA NOTÍCIA:

1. Crie a imagem em public/images/news/[slug].jpg
2. Adicione o objeto no arquivo src/data/news/index.ts
3. Use o template NEWS_TEMPLATE como base
4. Atualize relatedNews no jogo relacionado
*/