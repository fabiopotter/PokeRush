import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import GuideCard from '@/components/GuideCard';
import PokemonCard from '@/components/PokemonCard';
import {
  getNewsBySlug,
  getRelatedGuidesForNews,
  getRelatedPokemonForNews,
  getRelatedGamesForNews
} from '@/lib/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    return {
      title: 'Notícia não encontrada | PokeRush',
    };
  }

  const metadataBase = new URL('https://pokerush.com.br');

  return {
    title: `${news.title} | PokeRush`,
    description: news.excerpt,
    keywords: ['notícias', 'Pokémon', 'atualizações', 'novidades'],
    alternates: {
      canonical: `${metadataBase}/noticias/${slug}`,
    },
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `${metadataBase}/noticias/${slug}`,
      siteName: 'PokeRush',
      locale: 'pt_BR',
      type: 'article',
      publishedTime: news.publishedAt,
      authors: ['PokeRush'],
      images: [
        {
          url: news.coverImage,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.excerpt,
      images: [news.coverImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  const relatedGuides = getRelatedGuidesForNews(slug);
  const relatedPokemon = getRelatedPokemonForNews(slug);
  const relatedGame = getRelatedGamesForNews(slug)[0] ?? null;

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      <header className="esports-section px-6 py-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="esports-tag">Notícia</span>
          <time className="text-[#7f92ae] text-sm">
            {new Date(news.publishedAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{news.title}</h1>
        <p className="text-lg md:text-xl text-[#A0AEC0] leading-8 mb-6">{news.excerpt}</p>
        <div className="relative w-full h-64 rounded-[20px] overflow-hidden border border-[rgba(0,212,255,0.16)] shadow-[0_18px_44px_rgba(0,0,0,0.32)]">
          <Image
            src={news.coverImage}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      <div className="esports-panel px-6 py-8 prose prose-lg max-w-none">
        <div className="whitespace-pre-line leading-8">{news.content}</div>
      </div>

      {relatedGame && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Jogo Relacionado" />
          <Link
            href={`/jogos/${relatedGame.slug}`}
            className="esports-card block p-6"
          >
            <div className="flex items-center gap-4">
              <Image
                src={relatedGame.coverImage}
                alt={relatedGame.name}
                width={80}
                height={80}
                className="rounded-xl object-cover border border-[rgba(0,212,255,0.16)]"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{relatedGame.name}</h3>
                <p className="text-[#A0AEC0] mt-1 leading-7">{relatedGame.description}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="esports-panel px-6 py-8">
          <SectionTitle title="Guias Relacionados" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Fique por Dentro das Novidades</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Acompanhe todas as notícias sobre o universo Pokémon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/noticias" className="esports-button">
            Todas as Notícias
          </Link>
          <Link href="/guias" className="esports-button-secondary">
            Explorar Guias
          </Link>
        </div>
      </section>

      <nav className="flex justify-between items-center pt-8 border-t esports-divider">
        <Link
          href="/noticias"
          className="text-[#8be9ff] hover:text-white font-semibold"
        >
          ← Voltar para Notícias
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
