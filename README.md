# PokeRush

Um hub de conteúdo em português sobre Pokémon, focado em notícias, guias e páginas de Pokédex. Projeto MVP usando Next.js com App Router, TypeScript e Tailwind CSS.

## Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint

## Estrutura do Projeto

```
src/
  app/          # Páginas e layouts do Next.js
  components/   # Componentes reutilizáveis
  data/         # Dados estáticos
    guides/     # Guias
    pokemon/    # Dados de Pokémon
    games/      # Dados de jogos
    news/       # Notícias
  lib/          # Utilitários
  types/        # Tipos TypeScript
```

## Como Rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Deploy

Pronto para deploy na Vercel. Basta conectar o repositório no Vercel e fazer o deploy automático.

## Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Executar ESLint
