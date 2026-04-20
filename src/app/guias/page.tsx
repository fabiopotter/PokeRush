import type { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import GuideCard from '@/components/GuideCard';
import { getAllGuides } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Guias | PokeRush',
  description: 'Guias completos do universo Pokémon com dicas, estratégias e conteúdos para iniciantes e veteranos.',
  keywords: ['guias', 'Pokémon', 'estratégia', 'tutorial', 'PokeRush'],
  openGraph: {
    title: 'Guias | PokeRush',
    description: 'Guias completos do universo Pokémon com dicas, estratégias e conteúdos para iniciantes e veteranos.',
    siteName: 'PokeRush',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function GuidesPage() {
  const guides = getAllGuides().sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guias</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conteúdo prático para evoluções, tipos, montagem de time, jogos e primeiros passos no universo Pokémon.
        </p>
      </header>

      <section className="mb-12">
        <SectionTitle
          title="Todos os Guias"
          subtitle="Artigos organizados para levar o leitor do básico ao conteúdo mais relevante do site."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              title={guide.title}
              excerpt={guide.excerpt}
              category={guide.category}
              link={`/guias/${guide.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Mais Conteúdo</h2>
        <p className="text-gray-600 mb-6">
          Navegue também pela Pokédex, jogos e notícias para aprofundar os temas dos guias.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pokedex"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Ver Pokédex
          </Link>
          <Link
            href="/noticias"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ler Notícias
          </Link>
        </div>
      </section>
    </div>
  );
}
