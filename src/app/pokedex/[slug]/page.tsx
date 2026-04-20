import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import GuideCard from '@/components/GuideCard';
import { getPokemonBySlug, getGuideBySlug, getGameBySlug } from '@/lib/content';
import { getTypeColor } from '@/lib/utils';
import { getPokemonProfile } from '@/data/pokedex-profiles';
import { internalLinkingStrategy } from '@/data/internal-linking';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pokemon = getPokemonBySlug(slug);

  if (!pokemon) {
    return {
      title: 'Pokémon não encontrado | PokeRush',
    };
  }

  const metadataBase = new URL('https://pokerush.com.br');
  const typeKeywords = pokemon.types.join(', ');

  return {
    title: `${pokemon.name} - Pokédex | PokeRush`,
    description: pokemon.shortDescription,
    keywords: [`Pokémon ${pokemon.name}`, typeKeywords, 'Pokédex', 'estatísticas', 'evoluções'],
    alternates: {
      canonical: `${metadataBase}/pokedex/${slug}`,
    },
    openGraph: {
      title: `${pokemon.name} - Pokédex`,
      description: pokemon.shortDescription,
      url: `${metadataBase}/pokedex/${slug}`,
      siteName: 'PokeRush',
      locale: 'pt_BR',
      type: 'article',
      images: [
        {
          url: pokemon.image,
          width: 400,
          height: 400,
          alt: `Imagem do Pokémon ${pokemon.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pokemon.name} - Pokédex`,
      description: pokemon.shortDescription,
      images: [pokemon.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PokemonPage({ params }: PageProps) {
  const { slug } = await params;
  const pokemon = getPokemonBySlug(slug);

  if (!pokemon) {
    notFound();
  }

  const profile = getPokemonProfile(slug);
  const linking = internalLinkingStrategy.pokemon[slug];
  const relatedGuides = (linking?.guides ?? pokemon.relatedGuides)
    .map(guideSlug => getGuideBySlug(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => guide !== undefined);
  const gameSlugs = linking?.game ? [linking.game, ...pokemon.games.filter(gameSlug => gameSlug !== linking.game)] : pokemon.games;
  const games = gameSlugs
    .map(gameSlug => getGameBySlug(gameSlug))
    .filter((game): game is NonNullable<typeof game> => game !== undefined);
  const evolutionChain = pokemon.evolutions
    .map(evoSlug => getPokemonBySlug(evoSlug))
    .filter((evo): evo is NonNullable<typeof evo> => evo !== undefined);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="relative w-48 h-48 mx-auto mb-6">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{pokemon.name}</h1>
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(type)}`}
            >
              {type}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{pokemon.shortDescription}</p>
      </header>

      {/* Editorial Content */}
      {profile && (
        <section className="mb-12">
          <SectionTitle title="Resumo" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Visão Geral</h2>
              <p className="text-gray-700 leading-relaxed">{profile.overview}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Uso Prático</h2>
              <p className="text-gray-700 leading-relaxed">{profile.practicalUse}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Melhor Encaixe</h2>
              <p className="text-gray-700 leading-relaxed">{profile.bestFor}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Curiosidade</h2>
              <p className="text-gray-700 leading-relaxed">{profile.curiosity}</p>
            </div>
          </div>
        </section>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fraquezas</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.weaknesses.map((weakness) => (
              <span
                key={weakness}
                className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(weakness)}`}
              >
                {weakness}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resistências</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.resistances.length > 0 ? (
              pokemon.resistances.map((resistance) => (
                <span
                  key={resistance}
                  className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${getTypeColor(resistance)}`}
                >
                  {resistance}
                </span>
              ))
            ) : (
              <p className="text-gray-700">Sem destaque defensivo relevante fora das interações padrão do tipo.</p>
            )}
          </div>
        </div>
      </div>

      {/* Evolution Line */}
      {evolutionChain.length > 0 && (
        <section className="mb-12">
          <SectionTitle title="Linha Evolutiva" />
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex flex-wrap items-center gap-4">
              {evolutionChain.map((evo, index) => (
                <div key={evo.slug} className="flex items-center">
                  {index > 0 && <span className="text-2xl text-blue-600 mx-2">→</span>}
                  <Link
                    href={`/pokedex/${evo.slug}`}
                    className="flex flex-col items-center hover:opacity-75 transition-opacity"
                  >
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={evo.image}
                        alt={evo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{evo.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Games */}
      {games.length > 0 && (
        <section className="mb-12">
          <SectionTitle title="Jogos Relacionados" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/jogos/${game.slug}`}
                className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{game.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{game.description}</p>
              </Link>
            ))}
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

      {/* Final CTA */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Mais Conteúdo
        </h2>
        <p className="text-gray-600 mb-6">
          Descubra guias, notícias e informações sobre outros Pokémon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pokedex"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Pokédex Completa
          </Link>
          <Link
            href="/guias"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Explorar Guias
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-gray-200 mt-12">
        <Link
          href="/pokedex"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Voltar para Pokédex
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
