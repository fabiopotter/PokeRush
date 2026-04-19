// Configuração centralizada para slugs e validações
// Facilita manutenção e evita duplicação

export const SLUG_CONFIG = {
  // Padrões de geração de slug
  generateSlug: (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens múltiplos
      .trim()
      .replace(/^-|-$/g, ''); // Remove hífens do início e fim
  },

  // Validações de slug
  isValidSlug: (slug: string): boolean => {
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(slug) && slug.length > 0 && slug.length <= 100;
  },

  // Categorias permitidas para guias
  GUIDE_CATEGORIES: [
    'iniciantes',
    'avancado',
    'competitivo',
    'lore',
    'mecanicas',
    'evolucoes',
    'tipos',
    'jogos'
  ] as const,

  // Tipos de Pokémon permitidos
  POKEMON_TYPES: [
    'Normal', 'Fogo', 'Água', 'Elétrico', 'Planta', 'Gelo',
    'Lutador', 'Venenoso', 'Terra', 'Voador', 'Psíquico',
    'Inseto', 'Pedra', 'Fantasma', 'Dragão', 'Sombrio',
    'Metálico', 'Fada'
  ] as const,
} as const;

// Validações de dados
export const VALIDATIONS = {
  // Campos obrigatórios por entidade
  requiredFields: {
    pokemon: ['name', 'slug', 'image', 'types', 'shortDescription'],
    guide: ['title', 'slug', 'excerpt', 'coverImage', 'category', 'content', 'publishedAt'],
    game: ['name', 'slug', 'description', 'coverImage'],
    news: ['title', 'slug', 'excerpt', 'coverImage', 'content', 'publishedAt'],
  },

  // Validações específicas
  validatePokemon: (pokemon: any): string[] => {
    const errors: string[] = [];

    if (!SLUG_CONFIG.isValidSlug(pokemon.slug)) {
      errors.push('Slug inválido');
    }

    if (!Array.isArray(pokemon.types) || pokemon.types.length === 0) {
      errors.push('Pelo menos um tipo é obrigatório');
    } else {
      pokemon.types.forEach((type: string) => {
        if (!SLUG_CONFIG.POKEMON_TYPES.includes(type as any)) {
          errors.push(`Tipo inválido: ${type}`);
        }
      });
    }

    return errors;
  },

  validateGuide: (guide: any): string[] => {
    const errors: string[] = [];

    if (!SLUG_CONFIG.isValidSlug(guide.slug)) {
      errors.push('Slug inválido');
    }

    if (!SLUG_CONFIG.GUIDE_CATEGORIES.includes(guide.category as any)) {
      errors.push(`Categoria inválida: ${guide.category}`);
    }

    if (guide.relatedGame && !SLUG_CONFIG.isValidSlug(guide.relatedGame)) {
      errors.push('Slug do jogo relacionado inválido');
    }

    return errors;
  },

  validateGame: (game: any): string[] => {
    const errors: string[] = [];

    if (!SLUG_CONFIG.isValidSlug(game.slug)) {
      errors.push('Slug inválido');
    }

    return errors;
  },

  validateNews: (news: any): string[] => {
    const errors: string[] = [];

    if (!SLUG_CONFIG.isValidSlug(news.slug)) {
      errors.push('Slug inválido');
    }

    if (news.relatedGame && !SLUG_CONFIG.isValidSlug(news.relatedGame)) {
      errors.push('Slug do jogo relacionado inválido');
    }

    return errors;
  },
} as const;