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
    .map((guideSlug) => getGuideBySlug(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => guide !== undefined);
  const gameSlugs = linking?.game ? [linking.game, ...pokemon.games.filter((gameSlug) => gameSlug !== linking.game)] : pokemon.games;
  const games = gameSlugs
    .map((gameSlug) => getGameBySlug(gameSlug))
    .filter((game): game is NonNullable<typeof game> => game !== undefined);
  const evolutionChain = pokemon.evolutions
    .map((evoSlug) => getPokemonBySlug(evoSlug))
    .filter((evo): evo is NonNullable<typeof evo> => evo !== undefined);

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      <header className="esports-section text-center px-6 py-10">
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-[24px] border border-[rgba(0,212,255,0.16)] bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.18),transparent_42%),rgba(255,255,255,0.02)] shadow-[0_0_0_1px_rgba(0,212,255,0.1),0_18px_44px_rgba(0,0,0,0.3)]">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{pokemon.name}</h1>
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`inline-block text-sm font-medium px-3 py-1 rounded-full border ${getTypeColor(type)}`}
            >
              {type}
            </span>
          ))}
        </div>
        <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto leading-8">{pokemon.shortDescription}</p>
      </header>

      {profile && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Resumo" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="esports-card p-6">
              <h2 className="text-xl font-bold text-white mb-3">Visão Geral</h2>
              <p className="text-[#A0AEC0] leading-7">{profile.overview}</p>
            </div>
            <div className="esports-card p-6">
              <h2 className="text-xl font-bold text-white mb-3">Uso Prático</h2>
              <p className="text-[#A0AEC0] leading-7">{profile.practicalUse}</p>
            </div>
            <div className="esports-card p-6">
              <h2 className="text-xl font-bold text-white mb-3">Melhor Encaixe</h2>
              <p className="text-[#A0AEC0] leading-7">{profile.bestFor}</p>
            </div>
            <div className="esports-panel-alt p-6">
              <h2 className="text-xl font-bold text-white mb-3">Curiosidade</h2>
              <p className="text-[#A0AEC0] leading-7">{profile.curiosity}</p>
            </div>
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="esports-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Fraquezas</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.weaknesses.map((weakness) => (
              <span
                key={weakness}
                className={`inline-block text-sm font-medium px-3 py-1 rounded-full border ${getTypeColor(weakness)}`}
              >
                {weakness}
              </span>
            ))}
          </div>
        </div>

        <div className="esports-card p-6">
          <h2 className="text-xl font-bold text-white mb-4">Resistências</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.resistances.length > 0 ? (
              pokemon.resistances.map((resistance) => (
                <span
                  key={resistance}
                  className={`inline-block text-sm font-medium px-3 py-1 rounded-full border ${getTypeColor(resistance)}`}
                >
                  {resistance}
                </span>
              ))
            ) : (
              <p className="text-[#A0AEC0] leading-7">Sem destaque defensivo relevante fora das interações padrão do tipo.</p>
            )}
          </div>
        </div>
      </div>

      {evolutionChain.length > 0 && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Linha Evolutiva" />
          <div className="esports-panel-alt p-6">
            <div className="flex flex-wrap items-center gap-4">
              {evolutionChain.map((evo, index) => (
                <div key={evo.slug} className="flex items-center">
                  {index > 0 && <span className="text-2xl text-[#00D4FF] mx-2">→</span>}
                  <Link
                    href={`/pokedex/${evo.slug}`}
                    className="flex flex-col items-center rounded-2xl px-4 py-3 hover:bg-[rgba(0,212,255,0.06)]"
                  >
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={evo.image}
                        alt={evo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold text-white">{evo.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {games.length > 0 && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Jogos Relacionados" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/jogos/${game.slug}`}
                className="esports-card p-5"
              >
                <h3 className="font-bold text-white">{game.name}</h3>
                <p className="text-sm text-[#A0AEC0] mt-2 leading-6">{game.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="esports-panel px-6 py-8">
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

      <section className="esports-section text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Explore Mais Conteúdo</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Descubra guias, notícias e informações sobre outros Pokémon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pokedex" className="esports-button">
            Ver Pokédex Completa
          </Link>
          <Link href="/guias" className="esports-button-secondary">
            Explorar Guias
          </Link>
        </div>
      </section>

      <nav className="flex justify-between items-center pt-8 border-t esports-divider mt-4">
        <Link
          href="/pokedex"
          className="text-[#8be9ff] hover:text-white font-semibold"
        >
          ← Voltar para Pokédex
        </Link>
        <Link
          href="/"
          className="text-[#A0AEC0] hover:text-white"
        >
          Página Inicial
        </Link>
      </nav>
    </article>
  );
}
