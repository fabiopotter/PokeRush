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

  const relatedGuides = game.relatedGuides.map((itemSlug) => getGuideBySlug(itemSlug)).filter((guide): guide is NonNullable<typeof guide> => guide !== undefined);
  const relatedNews = game.relatedNews.map((itemSlug) => getNewsBySlug(itemSlug)).filter((news): news is NonNullable<typeof news> => news !== undefined);
  const relatedPokemon = game.relatedPokemon.map((itemSlug) => getPokemonBySlug(itemSlug)).filter((pokemon): pokemon is NonNullable<typeof pokemon> => pokemon !== undefined);

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      <header className="esports-section px-6 py-8">
        <div className="relative w-full h-64 mb-6 rounded-[20px] overflow-hidden border border-[rgba(0,212,255,0.16)] shadow-[0_18px_44px_rgba(0,0,0,0.32)]">
          <Image
            src={game.coverImage}
            alt={game.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{game.name}</h1>
        <p className="text-lg text-[#A0AEC0] mb-6 leading-8">{game.description}</p>
        {game.targetAudience && (
          <div className="esports-panel-alt p-5">
            <h2 className="text-lg font-bold text-white mb-2">Para Quem é Indicado</h2>
            <p className="text-[#A0AEC0] leading-7">{game.targetAudience}</p>
          </div>
        )}
      </header>

      {game.mainMechanics && game.mainMechanics.length > 0 && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Principais Mecânicas" />
          <div className="esports-card p-6">
            <ul className="space-y-3">
              {game.mainMechanics.map((mechanic, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00D4FF] rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_12px_rgba(0,212,255,0.7)]"></span>
                  <span className="text-[#A0AEC0] leading-7">{mechanic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {game.beginnerTips && game.beginnerTips.length > 0 && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Dicas Iniciais" />
          <div className="esports-panel-alt p-6">
            <ul className="space-y-3">
              {game.beginnerTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00D4FF] rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_12px_rgba(0,212,255,0.7)]"></span>
                  <span className="text-[#A0AEC0] leading-7">{tip}</span>
                </li>
              ))}
            </ul>
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

      {relatedNews.length > 0 && (
        <section className="esports-panel px-6 py-8">
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

      {relatedPokemon.length > 0 && (
        <section className="esports-panel px-6 py-8">
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

      <section className="esports-section text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Explore Mais Conteúdo</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Descubra guias, Pokédex completa e notícias sobre o universo Pokémon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/guias" className="esports-button">
            Explorar Guias
          </Link>
          <Link href="/pokedex" className="esports-button-secondary">
            Ver Pokédex
          </Link>
          <Link href="/noticias" className="esports-button-secondary">
            Últimas Notícias
          </Link>
        </div>
      </section>

      <nav className="flex justify-between items-center pt-8 border-t esports-divider">
        <Link
          href="/jogos"
          className="text-[#8be9ff] hover:text-white font-semibold"
        >
          ← Voltar para Jogos
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
