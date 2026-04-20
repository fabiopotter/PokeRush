import type { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import { getAllGames } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Jogos | PokeRush',
  description: 'Conheça os jogos do universo PokeRush com descrições, guias relacionados, Pokémon em destaque e notícias conectadas.',
  keywords: ['jogos', 'Pokémon', 'gameplay', 'PokeRush'],
  openGraph: {
    title: 'Jogos | PokeRush',
    description: 'Conheça os jogos do universo PokeRush com descrições, guias relacionados, Pokémon em destaque e notícias conectadas.',
    siteName: 'PokeRush',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function GamesPage() {
  const games = getAllGames();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Jogos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Veja os jogos já conectados ao conteúdo editorial do site e use cada página como atalho para guias, notícias e Pokémon relacionados.
        </p>
      </header>

      <section className="mb-12">
        <SectionTitle
          title="Todos os Jogos"
          subtitle="Páginas de jogos com foco em contexto, navegação interna e descoberta de conteúdo."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <ContentCard
              key={game.slug}
              title={game.name}
              description={game.description}
              image={game.coverImage}
              link={`/jogos/${game.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Mais Conteúdo</h2>
        <p className="text-gray-600 mb-6">
          Complete a navegação visitando guias estratégicos, páginas da Pokédex e notícias relacionadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guias"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ir para Guias
          </Link>
          <Link
            href="/pokedex"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Ver Pokédex
          </Link>
        </div>
      </section>
    </div>
  );
}
