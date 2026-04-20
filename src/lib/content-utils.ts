import { Pokemon, Guide, Game, News } from '@/types';

// Utilitários para operações comuns de conteúdo
// Funções puras e reutilizáveis

export class ContentUtils {
  // Busca por slug com validação
  static findBySlug<T extends { slug: string }>(
    items: T[],
    slug: string
  ): T | undefined {
    if (!slug || typeof slug !== 'string') {
      return undefined;
    }

    return items.find(item => item.slug === slug.trim());
  }

  // Busca múltiplos itens por slugs
  static findMultipleBySlugs<T extends { slug: string }>(
    items: T[],
    slugs: string[]
  ): T[] {
    if (!Array.isArray(slugs)) {
      return [];
    }

    return slugs
      .filter(slug => slug && typeof slug === 'string')
      .map(slug => this.findBySlug(items, slug))
      .filter((item): item is T => item !== undefined);
  }

  // Busca itens relacionados bidirecionalmente
  static getRelatedItems<T extends { slug: string }, U extends { slug: string }>(
    sourceItems: T[],
    targetItems: U[],
    sourceSlug: string,
    relationField: keyof T
  ): U[] {
    const sourceItem = this.findBySlug(sourceItems, sourceSlug);
    if (!sourceItem) {
      return [];
    }

    const relatedSlugs = sourceItem[relationField];
    if (!Array.isArray(relatedSlugs)) {
      return [];
    }

    return this.findMultipleBySlugs(targetItems, relatedSlugs);
  }

  // Agrupar por categoria/campo
  static groupBy<T, K extends keyof T>(
    items: T[],
    key: K
  ): Record<string, T[]> {
    return items.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  // Filtrar por critérios
  static filterBy<T>(
    items: T[],
    criteria: Partial<T>
  ): T[] {
    return items.filter(item => {
      return Object.entries(criteria).every(([key, value]) => {
        const itemValue = (item as any)[key];
        if (Array.isArray(value)) {
          return Array.isArray(itemValue) &&
                 value.some(v => itemValue.includes(v));
        }
        return itemValue === value;
      });
    });
  }

  // Ordenar por campo
  static sortBy<T>(
    items: T[],
    field: keyof T,
    direction: 'asc' | 'desc' = 'asc'
  ): T[] {
    return [...items].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  // Paginação simples
  static paginate<T>(
    items: T[],
    page: number = 1,
    limit: number = 10
  ): { items: T[]; total: number; page: number; limit: number; totalPages: number } {
    const total = items.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      items: items.slice(startIndex, endIndex),
      total,
      page,
      limit,
      totalPages,
    };
  }

  // Busca por texto (simples)
  static searchByText<T extends Record<string, any>>(
    items: T[],
    searchTerm: string,
    fields: (keyof T)[]
  ): T[] {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return items;
    }

    const term = searchTerm.toLowerCase().trim();

    return items.filter(item => {
      return fields.some(field => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(term);
        }
        if (Array.isArray(value)) {
          return value.some((v: any) =>
            typeof v === 'string' && v.toLowerCase().includes(term)
          );
        }
        return false;
      });
    });
  }

  // Validações básicas de integridade referencial
  static validateReferences(
    pokemon: Pokemon[],
    guides: Guide[],
    games: Game[],
    news: News[]
  ): string[] {
    const errors: string[] = [];

    // Validar referências de Pokémon em guias
    guides.forEach(guide => {
      guide.relatedPokemon.forEach(pokemonSlug => {
        if (!this.findBySlug(pokemon, pokemonSlug)) {
          errors.push(`Guia "${guide.title}" referencia Pokémon inexistente: ${pokemonSlug}`);
        }
      });

      if (guide.relatedGame && !this.findBySlug(games, guide.relatedGame)) {
        errors.push(`Guia "${guide.title}" referencia jogo inexistente: ${guide.relatedGame}`);
      }
    });

    // Validar referências em notícias
    news.forEach(newsItem => {
      if (newsItem.relatedGuides) {
        newsItem.relatedGuides.forEach(guideSlug => {
          if (!this.findBySlug(guides, guideSlug)) {
            errors.push(`Notícia "${newsItem.title}" referencia guia inexistente: ${guideSlug}`);
          }
        });
      }

      if (newsItem.relatedGame && !this.findBySlug(games, newsItem.relatedGame)) {
        errors.push(`Notícia "${newsItem.title}" referencia jogo inexistente: ${newsItem.relatedGame}`);
      }

      if (newsItem.relatedPokemon) {
        newsItem.relatedPokemon.forEach(pokemonSlug => {
          if (!this.findBySlug(pokemon, pokemonSlug)) {
            errors.push(`Notícia "${newsItem.title}" referencia Pokémon inexistente: ${pokemonSlug}`);
          }
        });
      }
    });

    // Validar referências cruzadas em jogos
    games.forEach(game => {
      game.relatedGuides.forEach(guideSlug => {
        if (!this.findBySlug(guides, guideSlug)) {
          errors.push(`Jogo "${game.name}" referencia guia inexistente: ${guideSlug}`);
        }
      });

      game.relatedNews.forEach(newsSlug => {
        if (!this.findBySlug(news, newsSlug)) {
          errors.push(`Jogo "${game.name}" referencia notícia inexistente: ${newsSlug}`);
        }
      });

      game.relatedPokemon.forEach(pokemonSlug => {
        if (!this.findBySlug(pokemon, pokemonSlug)) {
          errors.push(`Jogo "${game.name}" referencia Pokémon inexistente: ${pokemonSlug}`);
        }
      });
    });

    return errors;
  }
}
