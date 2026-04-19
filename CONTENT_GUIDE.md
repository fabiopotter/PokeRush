# Guia de Gestão de Conteúdo - PokeRush

Este documento explica como adicionar e gerenciar conteúdo no PokeRush de forma organizada e consistente.

## 📁 Estrutura de Dados

```
src/data/
├── pokemon/index.ts    # Dados dos Pokémon
├── guides/index.ts     # Dados dos guias
├── games/index.ts      # Dados dos jogos
├── news/index.ts       # Dados das notícias
```

## 🛠️ Ferramentas Disponíveis

### Geração de Slugs
```typescript
import { SLUG_CONFIG } from '@/lib/config';

// Gera slug automaticamente
const slug = SLUG_CONFIG.generateSlug("Nome do Pokémon");
// Resultado: "nome-do-pokemon"

// Valida slug
const isValid = SLUG_CONFIG.isValidSlug("nome-do-pokemon");
// Resultado: true
```

### Validações
```typescript
import { VALIDATIONS } from '@/lib/config';

// Valida dados antes de adicionar
const errors = VALIDATIONS.validatePokemon(novoPokemon);
if (errors.length > 0) {
  console.log('Erros encontrados:', errors);
}
```

### Busca e Relacionamentos
```typescript
import { getPokemonBySlug, getRelatedGuidesForPokemon } from '@/lib/content';

// Buscar Pokémon por slug
const pikachu = getPokemonBySlug('pikachu');

// Obter guias relacionados
const guiasPikachu = getRelatedGuidesForPokemon('pikachu');
```

## ➕ Adicionando Novo Pokémon

### 1. Preparar Imagem
- Salve em: `public/images/pokemon/[slug].jpg`
- Dimensões recomendadas: 400x400px
- Formato: JPG otimizado

### 2. Adicionar Dados
```typescript
// src/data/pokemon/index.ts
import { SLUG_CONFIG } from '@/lib/config';

export const pokemonData: Pokemon[] = [
  // ... Pokémon existentes
  {
    name: "Blaziken",
    slug: SLUG_CONFIG.generateSlug("Blaziken"), // "blaziken"
    image: "/images/pokemon/blaziken.jpg",
    types: ["Fogo", "Lutador"],
    shortDescription: "Pokémon galo de fogo que combina chutes poderosos com ataques flamejantes.",
    weaknesses: ["Água", "Voador", "Psíquico"],
    resistances: ["Fogo", "Planta", "Gelo", "Sombrio", "Inseto"],
    evolutions: ["torchic", "combusken"], // slugs dos Pokémon na evolução
    games: ["scarlet-violet"], // slugs dos jogos onde aparece
    relatedGuides: ["melhores-pokemon-para-iniciantes"], // slugs dos guias
  }
];
```

### 3. Validar
```typescript
import { VALIDATIONS } from '@/lib/config';
const errors = VALIDATIONS.validatePokemon(blaziken);
console.log(errors); // Deve retornar array vazio se válido
```

### 4. Atualizar Referências
Se o Pokémon aparecer em guias existentes, atualize os `relatedPokemon` nos guias relevantes.

## ➕ Adicionando Novo Guia

### 1. Preparar Imagem de Capa
- Salve em: `public/images/guides/[slug].jpg`
- Dimensões recomendadas: 1200x630px
- Formato: JPG otimizado

### 2. Adicionar Dados
```typescript
// src/data/guides/index.ts
import { SLUG_CONFIG } from '@/lib/config';

export const guidesData: Guide[] = [
  // ... guias existentes
  {
    title: "Como Treinar seu Blaziken",
    slug: SLUG_CONFIG.generateSlug("Como Treinar seu Blaziken"),
    excerpt: "Guia completo para evoluir e treinar Blaziken do Torchic até o nível máximo.",
    coverImage: "/images/guides/como-treinar-blaziken.jpg",
    category: "avancado", // Deve estar em SLUG_CONFIG.GUIDE_CATEGORIES
    relatedPokemon: ["torchic", "combusken", "blaziken"],
    relatedGame: "scarlet-violet", // opcional
    content: `# Como Treinar seu Blaziken

## Introdução
Blaziken é um Pokémon poderoso...

## Estratégias
Use ataques de Fogo e Lutador...
    `,
    publishedAt: "2024-03-20T10:00:00Z",
  }
];
```

### 3. Categorias Permitidas
- `iniciantes` - Para jogadores novos
- `avancado` - Para jogadores experientes
- `competitivo` - Focado em competição
- `lore` - Sobre história/lore
- `mecanicas` - Sobre mecânicas do jogo
- `evolucoes` - Sobre evoluções
- `tipos` - Sobre tipos e fraquezas
- `jogos` - Sobre jogos específicos

## ➕ Adicionando Novo Jogo

### 1. Preparar Imagem de Capa
- Salve em: `public/images/games/[slug].jpg`
- Dimensões recomendadas: 1200x630px

### 2. Adicionar Dados
```typescript
// src/data/games/index.ts
export const gamesData: Game[] = [
  // ... jogos existentes
  {
    name: "Pokémon Emerald",
    slug: SLUG_CONFIG.generateSlug("Pokémon Emerald"),
    description: "Versão remasterizada da geração 3 com novas mecânicas.",
    coverImage: "/images/games/emerald.jpg",
    targetAudience: "Perfeito para jogadores que gostam de exploração.", // opcional
    relatedGuides: ["guias-geracao-3"],
    relatedNews: ["remaster-emerald-anunciado"],
    relatedPokemon: ["rayquaza", "latios"],
  }
];
```

## ➕ Adicionando Nova Notícia

### 1. Preparar Imagem
- Salve em: `public/images/news/[slug].jpg`
- Dimensões recomendadas: 1200x630px

### 2. Adicionar Dados
```typescript
// src/data/news/index.ts
export const newsData: News[] = [
  // ... notícias existentes
  {
    title: "Nova DLC Anunciada",
    slug: SLUG_CONFIG.generateSlug("Nova DLC Anunciada"),
    excerpt: "A DLC trará novas áreas e Pokémon.",
    coverImage: "/images/news/nova-dlc.jpg",
    content: `# Nova DLC Anunciada

Conteúdo completo da notícia...
    `,
    publishedAt: "2024-03-25T15:30:00Z",
    relatedGame: "scarlet-violet", // opcional
    relatedPokemon: ["miraidon"], // opcional
  }
];
```

## 🔍 Validações Automáticas

O sistema executa validações automaticamente:

- **Slugs únicos** - Não podem repetir
- **Slugs válidos** - Formato correto (letras, números, hífens)
- **Referências consistentes** - Todos os slugs relacionados devem existir
- **Campos obrigatórios** - Validação por entidade
- **Tipos permitidos** - Pokémon só podem ter tipos válidos

## 📊 Monitoramento

### Verificar Estatísticas
```typescript
import { getContentStats } from '@/lib/content';
const stats = getContentStats();
console.log(stats);
// {
//   pokemon: { total: 25, byType: 18 },
//   guides: { total: 12, byCategory: 6 },
//   games: { total: 4 },
//   news: { total: 3 }
// }
```

### Verificar Integridade
O sistema valida automaticamente referências cruzadas e avisa sobre inconsistências no console.

## 🚀 Próximos Passos

Quando migrar para backend:

1. **API Endpoints**: Os helpers em `content.ts` podem ser facilmente adaptados para chamadas API
2. **Cache**: O sistema de cache atual pode ser mantido ou substituído por Redis
3. **Validações**: Mover para o backend com middlewares
4. **Slugs**: Garantir unicidade no banco de dados

## 📝 Checklist para Novo Conteúdo

- [ ] Imagem preparada no diretório correto
- [ ] Slug gerado com `SLUG_CONFIG.generateSlug()`
- [ ] Dados validados com `VALIDATIONS.validate*()`
- [ ] Referências atualizadas nos itens relacionados
- [ ] Build testado (`npm run build`)
- [ ] Funcionalidades testadas no navegador