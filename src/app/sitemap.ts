import { MetadataRoute } from 'next'
import { pokemonData } from '@/data/pokemon'
import { guidesData } from '@/data/guides'
import { gamesData } from '@/data/games'
import { newsData } from '@/data/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pokerush.com.br'

  // Página inicial
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pokedex`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jogos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Páginas de Pokémon
  pokemonData.forEach((pokemon) => {
    routes.push({
      url: `${baseUrl}/pokedex/${pokemon.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Páginas de guias
  guidesData.forEach((guide) => {
    routes.push({
      url: `${baseUrl}/guias/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Páginas de jogos
  gamesData.forEach((game) => {
    routes.push({
      url: `${baseUrl}/jogos/${game.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Páginas de notícias
  newsData.forEach((news) => {
    routes.push({
      url: `${baseUrl}/noticias/${news.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    })
  })

  return routes
}
