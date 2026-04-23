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
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="esports-section text-center px-6 py-14">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Notícias</h1>
        <p className="text-lg md:text-xl text-[#A0AEC0] max-w-2xl mx-auto leading-8">
          Fique por dentro das últimas novidades e atualizações do universo Pokémon.
        </p>
      </header>

      <section className="esports-panel px-6 py-8">
        <SectionTitle
          title="Últimas Publicações"
          subtitle="Cobertura curta e direta para levar o leitor aos guias, jogos e páginas da Pokédex mais relevantes."
        />
        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="esports-panel-alt text-center px-6 py-10">
            <p className="text-[#A0AEC0]">Nenhuma notícia encontrada.</p>
          </div>
        )}
      </section>

      <section className="esports-section text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Explore Mais Conteúdo</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Descubra guias completos, Pokédex detalhada e informações sobre jogos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/guias" className="esports-button">
            Explorar Guias
          </Link>
          <Link href="/pokedex" className="esports-button-secondary">
            Ver Pokédex
          </Link>
          <Link href="/jogos" className="esports-button-secondary">
            Conhecer Jogos
          </Link>
        </div>
      </section>
    </div>
  );
}
