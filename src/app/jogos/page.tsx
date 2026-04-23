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
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="esports-section text-center px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Jogos</h1>
        <p className="text-lg md:text-xl text-[#A0AEC0] max-w-3xl mx-auto leading-8">
          Veja os jogos já conectados ao conteúdo editorial do site e use cada página como atalho para guias, notícias e Pokémon relacionados.
        </p>
      </header>

      <section className="esports-panel px-6 py-8">
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

      <section className="esports-section text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Explore Mais Conteúdo</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Complete a navegação visitando guias estratégicos, páginas da Pokédex e notícias relacionadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/guias" className="esports-button">
            Ir para Guias
          </Link>
          <Link href="/pokedex" className="esports-button-secondary">
            Ver Pokédex
          </Link>
        </div>
      </section>
    </div>
  );
}
