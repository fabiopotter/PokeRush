import { existsSync } from 'node:fs';
import path from 'node:path';
import { guidesData } from '@/data/guides';
import { gamesData } from '@/data/games';
import { newsData } from '@/data/news';
import { pokemonData } from '@/data/pokemon';

export interface ImageAuditItem {
  id: string;
  pageType: "home" | "guide" | "pokemon" | "game" | "news" | "component";
  routeOrFile: string;
  section: string;
  contentName: string;
  currentImageRef?: string;
  issueType: "missing" | "placeholder" | "broken-path" | "empty-field" | "low-priority-enhancement";
  recommendation: string;
  suggestedSearchQuery: string;
  priority: "high" | "medium" | "low";
}

function imageRefExists(imageRef?: string) {
  if (!imageRef || !imageRef.startsWith('/')) {
    return false;
  }

  const normalizedRef = imageRef.replace(/^\/+/, '');
  return existsSync(path.join(process.cwd(), 'public', normalizedRef));
}

const highPriorityPokemonImages: ImageAuditItem[] = pokemonData
  .filter((pokemon) => !imageRefExists(pokemon.image))
  .map((pokemon) => ({
    id: `pokemon-${pokemon.slug}-artwork`,
    pageType: "pokemon" as const,
    routeOrFile: `/pokedex/${pokemon.slug}`,
    section: "artwork principal (cards, página da Pokédex e OG da rota)",
    contentName: pokemon.name,
    currentImageRef: pokemon.image,
    issueType: "broken-path" as const,
    recommendation: "Usar artwork oficial ou render limpo do Pokémon, preferencialmente em fundo transparente ou neutro, com boa leitura em card e página interna.",
    suggestedSearchQuery: `${pokemon.name} official artwork png`,
    priority: "high" as const,
  }));

const highPriorityGuideImages: ImageAuditItem[] = guidesData
  .filter((guide) => !imageRefExists(guide.coverImage))
  .map((guide) => ({
    id: `guide-${guide.slug}-cover`,
    pageType: "guide" as const,
    routeOrFile: `/guias/${guide.slug}`,
    section: "coverImage (cards, listagem, página interna e OG da rota)",
    contentName: guide.title,
    currentImageRef: guide.coverImage,
    issueType: "broken-path" as const,
    recommendation: "Criar capa editorial horizontal, com tema visual ligado ao assunto do guia e leitura clara em miniatura e hero.",
    suggestedSearchQuery: `${guide.title} pokemon guide cover art`,
    priority: "high" as const,
  }));

const highPriorityGameImages: ImageAuditItem[] = gamesData
  .filter((game) => !imageRefExists(game.coverImage))
  .map((game) => ({
    id: `game-${game.slug}-cover`,
    pageType: "game" as const,
    routeOrFile: `/jogos/${game.slug}`,
    section: "coverImage (cards, página do jogo e OG da rota)",
    contentName: game.name,
    currentImageRef: game.coverImage,
    issueType: "broken-path" as const,
    recommendation: "Usar key art, box art ou banner promocional do jogo com composição horizontal e boa presença visual.",
    suggestedSearchQuery: `${game.name} key art`,
    priority: "high" as const,
  }));

const highPriorityNewsImages: ImageAuditItem[] = newsData
  .filter((news) => !imageRefExists(news.coverImage))
  .map((news) => ({
    id: `news-${news.slug}-cover`,
    pageType: "news" as const,
    routeOrFile: `/noticias/${news.slug}`,
    section: "coverImage (cards, hero da notícia e OG da rota)",
    contentName: news.title,
    currentImageRef: news.coverImage,
    issueType: "broken-path" as const,
    recommendation: "Criar imagem editorial de notícia com assunto reconhecível de imediato, adequada para card e destaque na página interna.",
    suggestedSearchQuery: `${news.title} pokemon news art`,
    priority: "high" as const,
  }));

const mediumPriorityEnhancements: ImageAuditItem[] = [
  {
    id: "home-hero-key-visual",
    pageType: "home",
    routeOrFile: "/",
    section: "hero principal",
    contentName: "Hero da home",
    issueType: "low-priority-enhancement",
    recommendation: "Adicionar key visual leve para o hero, combinando universo Pokémon com leitura editorial, sem competir com o CTA principal.",
    suggestedSearchQuery: "pokemon editorial hero background website",
    priority: "medium",
  },
  {
    id: "component-ad-placeholder-home-middle",
    pageType: "component",
    routeOrFile: "src/components/AdBlockPlaceholder.tsx",
    section: "placeholder de anúncio usado na home",
    contentName: "AdBlockPlaceholder home-middle",
    issueType: "placeholder",
    recommendation: "Substituir o placeholder genérico por uma peça visual de house ad, bloco promocional interno ou mock visual de parceiro.",
    suggestedSearchQuery: "house ad banner pokemon website 1200x300",
    priority: "medium",
  },
  {
    id: "component-ad-placeholder-guide-content",
    pageType: "component",
    routeOrFile: "src/components/AdBlockPlaceholder.tsx",
    section: "placeholder de anúncio usado em páginas de guia",
    contentName: "AdBlockPlaceholder guide-content",
    issueType: "placeholder",
    recommendation: "Trocar por banner visual contextual de guia, promoção interna ou anúncio estático com identidade visual do site.",
    suggestedSearchQuery: "pokemon editorial banner internal promotion",
    priority: "medium",
  },
  {
    id: "home-featured-guides-section-banner",
    pageType: "home",
    routeOrFile: "/",
    section: "Guias em Destaque",
    contentName: "Seção Guias em Destaque da home",
    issueType: "low-priority-enhancement",
    recommendation: "Adicionar banner ou ilustração de apoio para dar mais assinatura visual à seção de guias.",
    suggestedSearchQuery: "pokemon guide section banner illustration",
    priority: "medium",
  },
  {
    id: "home-featured-games-section-banner",
    pageType: "home",
    routeOrFile: "/",
    section: "Jogos em Destaque",
    contentName: "Seção Jogos em Destaque da home",
    issueType: "low-priority-enhancement",
    recommendation: "Usar arte de apoio para diferenciar a área de jogos e reforçar a sensação de catálogo editorial.",
    suggestedSearchQuery: "pokemon games website section banner",
    priority: "medium",
  },
];

const lowPriorityEnhancements: ImageAuditItem[] = [
  {
    id: "component-header-brand-mark",
    pageType: "component",
    routeOrFile: "src/components/Header.tsx",
    section: "marca do header",
    contentName: "Logo textual PokeRush",
    issueType: "low-priority-enhancement",
    recommendation: "Criar wordmark simples ou pequeno ícone de marca para reforçar identidade sem aumentar o peso visual do header.",
    suggestedSearchQuery: "gaming blog logo wordmark pokemon inspired",
    priority: "low",
  },
  {
    id: "guide-index-header-visual",
    pageType: "guide",
    routeOrFile: "/guias",
    section: "header da listagem",
    contentName: "Página índice de guias",
    issueType: "low-priority-enhancement",
    recommendation: "Adicionar imagem leve ou banner editorial para diferenciar a listagem de guias da home.",
    suggestedSearchQuery: "pokemon guide archive banner",
    priority: "low",
  },
  {
    id: "pokedex-index-header-visual",
    pageType: "pokemon",
    routeOrFile: "/pokedex",
    section: "header da listagem",
    contentName: "Página índice da Pokédex",
    issueType: "low-priority-enhancement",
    recommendation: "Adicionar banner visual ou composição com sprites/artworks para enriquecer a entrada da Pokédex.",
    suggestedSearchQuery: "pokemon pokedex banner collage",
    priority: "low",
  },
  {
    id: "games-index-header-visual",
    pageType: "game",
    routeOrFile: "/jogos",
    section: "header da listagem",
    contentName: "Página índice de jogos",
    issueType: "low-priority-enhancement",
    recommendation: "Inserir uma capa geral ou faixa visual com key arts dos jogos para dar mais peso à seção.",
    suggestedSearchQuery: "pokemon games collage banner",
    priority: "low",
  },
  {
    id: "news-index-header-visual",
    pageType: "news",
    routeOrFile: "/noticias",
    section: "header da listagem",
    contentName: "Página índice de notícias",
    issueType: "low-priority-enhancement",
    recommendation: "Usar imagem editorial leve para dar mais aparência de portal de conteúdo à área de notícias.",
    suggestedSearchQuery: "pokemon news banner website",
    priority: "low",
  },
];

export const imageAudit: ImageAuditItem[] = [
  ...highPriorityPokemonImages,
  ...highPriorityGuideImages,
  ...highPriorityGameImages,
  ...highPriorityNewsImages,
  ...mediumPriorityEnhancements,
  ...lowPriorityEnhancements,
];
