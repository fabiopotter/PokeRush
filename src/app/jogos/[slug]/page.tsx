import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import GuideCard from '@/components/GuideCard';
import PokemonCard from '@/components/PokemonCard';
import { getGameBySlug, getGuideBySlug, getNewsBySlug, getPokemonBySlug } from '@/lib/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: 'Jogo não encontrado | PokeRush',
    };
  }

  const metadataBase = new URL('https://pokerush.com.br');

  return {
    title: `${game.name} - Jogos | PokeRush`,
    description: game.description,
    keywords: [`${game.name}`, 'Pokémon', 'jogo', 'gameplay'],
    alternates: {
      canonical: `${metadataBase}/jogos/${slug}`,
    },
    openGraph: {
      title: game.name,
      description: game.description,
      url: `${metadataBase}/jogos/${slug}`,
      siteName: 'PokeRush',
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: game.coverImage,
          width: 1200,
          height: 630,
          alt: `Capa do jogo ${game.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: game.name,
      description: game.description,
      images: [game.coverImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGuides = game.relatedGuides.map(slug => getGuideBySlug(slug)).filter((guide): guide is NonNullable<typeof guide> => guide !== undefined);
  const relatedNews = game.relatedNews.map(slug => getNewsBySlug(slug)).filter((news): news is NonNullable<typeof news> => news !== undefined);
  const relatedPokemon = game.relatedPokemon.map(slug => getPokemonBySlug(slug)).filter((pokemon): pokemon is NonNullable<typeof pokemon> => pokemon !== undefined);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={game.coverImage}
            alt={game.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{game.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{game.description}</p>
        {game.targetAudience && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Para Quem é Indicado</h2>
            <p className="text-gray-700">{game.targetAudience}</p>
          </div>
        )}
      </header>

      {/* Main Mechanics */}
      {game.mainMechanics && game.mainMechanics.length > 0 && (
        <section className="mb-8">
          <SectionTitle title="Principais Mecânicas" />
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ul className="space-y-3">
              {game.mainMechanics.map((mechanic, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{mechanic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Beginner Tips */}
      {game.beginnerTips && game.beginnerTips.length > 0 && (
        <section className="mb-8">
          <SectionTitle title="Dicas Iniciais" />
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ul className="space-y-3">
              {game.beginnerTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="mb-12">
          <SectionTitle title="Guias Relacionados" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => (
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
      )}

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="mb-12">
          <SectionTitle title="Notícias Relacionadas" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedNews.map((news) => (
              <ContentCard
                key={news.slug}
                title={news.title}
                description={news.excerpt}
                image={news.coverImage}
                tag="Notícia"
                link={`/noticias/${news.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Related Pokemon */}
      {relatedPokemon.length > 0 && (
        <section className="mb-12">
          <SectionTitle title="Pokémon Relacionados" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.slug}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                link={`/pokedex/${pokemon.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Mais Conteúdo
        </h2>
        <p className="text-gray-600 mb-6">
          Descubra guias, Pokédex completa e notícias sobre o universo Pokémon.
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
            href="/noticias"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Últimas Notícias
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-gray-200 mt-12">
        <Link
          href="/jogos"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Voltar para Jogos
        </Link>
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-700"
        >
          Página Inicial
        </Link>
      </nav>
    </article>
  );
}