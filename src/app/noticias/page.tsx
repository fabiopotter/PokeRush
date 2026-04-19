import Link from 'next/link';
import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import { getAllNews } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Notícias | PokeRush',
  description: 'Fique por dentro das últimas notícias e novidades do universo Pokémon.',
  keywords: ['notícias', 'Pokémon', 'novidades', 'atualizações', 'jogos'],
  openGraph: {
    title: 'Notícias | PokeRush',
    description: 'Fique por dentro das últimas notícias e novidades do universo Pokémon.',
    siteName: 'PokeRush',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Notícias</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fique por dentro das últimas novidades e atualizações do universo Pokémon.
        </p>
      </header>

      {/* News Grid */}
      {news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <ContentCard
              key={item.slug}
              title={item.title}
              description={item.excerpt}
              image={item.coverImage}
              tag="Notícia"
              link={`/noticias/${item.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Nenhuma notícia encontrada.</p>
        </div>
      )}

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Mais Conteúdo
        </h2>
        <p className="text-gray-600 mb-6">
          Descubra guias completos, Pokédex detalhada e informações sobre jogos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guias"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explorar Guias
          </Link>
          <Link
            href="/pokedex"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Ver Pokédex
          </Link>
          <Link
            href="/jogos"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Conhecer Jogos
          </Link>
        </div>
      </section>
    </div>
  );
}