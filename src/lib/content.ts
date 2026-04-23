import { Pokemon, Guide, Game, News } from '@/types';
import { ContentUtils } from './content-utils';
import { pokemonData } from '@/data/pokemon';
import { guidesData } from '@/data/guides';
import { gamesData } from '@/data/games';
import { newsData } from '@/data/news';
import { sortPokemonByDexNumber } from '@/data/pokemon-dex';

// Cache para melhorar performance (útil quando dados crescerem)
let contentCache: {
  pokemon: Pokemon[];
  guides: Guide[];
  games: Game[];
  news: News[];
  lastUpdated: number;
} | null = null;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

function getCachedData() {
  const now = Date.now();

  if (!contentCache || (now - contentCache.lastUpdated) > CACHE_DURATION) {
    contentCache = {
      pokemon: [...pokemonData],
      guides: [...guidesData],
      games: [...gamesData],
      news: [...newsData],
      lastUpdated: now,
    };
  }

  return contentCache;
}

// Validação inicial dos dados (executada uma vez)
function validateDataIntegrity() {
  const data = getCachedData();
  const errors = ContentUtils.validateReferences(
    data.pokemon,
    data.guides,
    data.games,
    data.news
  );

  if (errors.length > 0) {
    console.warn('Problemas de integridade referencial encontrados:');
    errors.forEach(error => console.warn(`  - ${error}`));
  }
}

// Executar validação no carregamento do módulo
if (typeof window === 'undefined') { // Só no servidor
  validateDataIntegrity();
}

// ==========================================
// FUNÇÕES PÚBLICAS PARA ACESSO A DADOS
// ==========================================

// Pokémon
export function getAllPokemon(): Pokemon[] {
  return getCachedData().pokemon;
}

export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return ContentUtils.findBySlug(getAllPokemon(), slug);
}

export function getPokemonByType(type: string): Pokemon[] {
  return ContentUtils.filterBy(getAllPokemon(), { types: [type] });
}

export function searchPokemon(query: string): Pokemon[] {
  return ContentUtils.searchByText(
    getAllPokemon(),
    query,
    ['name', 'shortDescription', 'types']
  );
}

// Guias
export function getAllGuides(): Guide[] {
  return getCachedData().guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return ContentUtils.findBySlug(getAllGuides(), slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return ContentUtils.filterBy(getAllGuides(), { category });
}

export function getRecentGuides(limit: number = 5): Guide[] {
  return ContentUtils.sortBy(getAllGuides(), 'publishedAt', 'desc').slice(0, limit);
}

export function searchGuides(query: string): Guide[] {
  return ContentUtils.searchByText(
    getAllGuides(),
    query,
    ['title', 'excerpt', 'content', 'category']
  );
}

// Jogos
export function getAllGames(): Game[] {
  return getCachedData().games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return ContentUtils.findBySlug(getAllGames(), slug);
}

export function searchGames(query: string): Game[] {
  return ContentUtils.searchByText(
    getAllGames(),
    query,
    ['name', 'description', 'targetAudience']
  );
}

// Notícias
export function getAllNews(): News[] {
  return getCachedData().news;
}

export function getNewsBySlug(slug: string): News | undefined {
  return ContentUtils.findBySlug(getAllNews(), slug);
}

export function getRecentNews(limit: number = 5): News[] {
  return ContentUtils.sortBy(getAllNews(), 'publishedAt', 'desc').slice(0, limit);
}

export function searchNews(query: string): News[] {
  return ContentUtils.searchByText(
    getAllNews(),
    query,
    ['title', 'excerpt', 'content']
  );
}

// ==========================================
// FUNÇÕES PARA CONTEÚDO RELACIONADO
// ==========================================

export function getRelatedGuidesForPokemon(pokemonSlug: string): Guide[] {
  return ContentUtils.getRelatedItems(
    getAllPokemon(),
    getAllGuides(),
    pokemonSlug,
    'relatedGuides'
  );
}

export function getRelatedPokemonForGuide(guideSlug: string): Pokemon[] {
  return ContentUtils.getRelatedItems(
    getAllGuides(),
    getAllPokemon(),
    guideSlug,
    'relatedPokemon'
  );
}

export function getRelatedNewsForGame(gameSlug: string): News[] {
  return ContentUtils.getRelatedItems(
    getAllGames(),
    getAllNews(),
    gameSlug,
    'relatedNews'
  );
}

export function getRelatedGuidesForGame(gameSlug: string): Guide[] {
  return ContentUtils.getRelatedItems(
    getAllGames(),
    getAllGuides(),
    gameSlug,
    'relatedGuides'
  );
}

export function getRelatedPokemonForGame(gameSlug: string): Pokemon[] {
  return ContentUtils.getRelatedItems(
    getAllGames(),
    getAllPokemon(),
    gameSlug,
    'relatedPokemon'
  );
}

export function getRelatedGamesForNews(newsSlug: string): Game[] {
  const news = getNewsBySlug(newsSlug);
  if (!news?.relatedGame) {
    return [];
  }

  const game = getGameBySlug(news.relatedGame);
  return game ? [game] : [];
}

export function getRelatedGuidesForNews(newsSlug: string): Guide[] {
  const news = getNewsBySlug(newsSlug);
  if (!news?.relatedGuides) {
    return [];
  }

  return ContentUtils.findMultipleBySlugs(getAllGuides(), news.relatedGuides);
}

export function getRelatedPokemonForNews(newsSlug: string): Pokemon[] {
  const news = getNewsBySlug(newsSlug);
  if (!news?.relatedPokemon) {
    return [];
  }

  return ContentUtils.findMultipleBySlugs(getAllPokemon(), news.relatedPokemon);
}

// ==========================================
// FUNÇÕES DE AGRUPAMENTO E ESTATÍSTICAS
// ==========================================

export function getGuidesGroupedByCategory(): Record<string, Guide[]> {
  return ContentUtils.groupBy(getAllGuides(), 'category');
}

export function getPokemonGroupedByType(): Record<string, Pokemon[]> {
  // Como types é array, precisamos de uma abordagem diferente
  const grouped: Record<string, Pokemon[]> = {};

  getAllPokemon().forEach(pokemon => {
    pokemon.types.forEach(type => {
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(pokemon);
    });
  });

  return grouped;
}

export function getContentStats() {
  const data = getCachedData();

  return {
    pokemon: {
      total: data.pokemon.length,
      byType: Object.keys(getPokemonGroupedByType()).length,
    },
    guides: {
      total: data.guides.length,
      byCategory: Object.keys(getGuidesGroupedByCategory()).length,
    },
    games: {
      total: data.games.length,
    },
    news: {
      total: data.news.length,
    },
  };
}

// ==========================================
// FUNÇÕES DE PAGINAÇÃO
// ==========================================

export function getPaginatedGuides(page: number = 1, limit: number = 10) {
  return ContentUtils.paginate(
    ContentUtils.sortBy(getAllGuides(), 'publishedAt', 'desc'),
    page,
    limit
  );
}

export function getPaginatedNews(page: number = 1, limit: number = 10) {
  return ContentUtils.paginate(
    ContentUtils.sortBy(getAllNews(), 'publishedAt', 'desc'),
    page,
    limit
  );
}

export function getPaginatedPokemon(page: number = 1, limit: number = 12) {
  return ContentUtils.paginate(
    sortPokemonByDexNumber(getAllPokemon()),
    page,
    limit
  );
}
