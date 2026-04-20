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
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
            Notícia
          </span>
          <time className="text-gray-500 text-sm">
            {new Date(news.publishedAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">{news.excerpt}</p>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src={news.coverImage}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="whitespace-pre-line">{news.content}</div>
      </div>

      {/* Related Game */}
      {relatedGame && (
        <section className="mb-12">
          <SectionTitle title="Jogo Relacionado" />
          <Link
            href={`/jogos/${relatedGame.slug}`}
            className="block bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <Image
                src={relatedGame.coverImage}
                alt={relatedGame.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{relatedGame.name}</h3>
                <p className="text-gray-600 mt-1">{relatedGame.description}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="mb-12">
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
          Fique por Dentro das Novidades
        </h2>
        <p className="text-gray-600 mb-6">
          Acompanhe todas as notícias sobre o universo Pokémon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/noticias"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Todas as Notícias
          </Link>
          <Link
            href="/guias"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explorar Guias
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t border-gray-200 mt-12">
        <Link
          href="/noticias"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          ← Voltar para Notícias
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
