import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import PokemonCard from '@/components/PokemonCard';
import AdBlockPlaceholder from '@/components/AdBlockPlaceholder';
import { getGuideBySlug, getGuideBySlug as getGuide, getPokemonBySlug, getGameBySlug } from '@/lib/content';
import { getGuideProfile } from '@/data/guide-profiles';
import { internalLinkingStrategy } from '@/data/internal-linking';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Guia não encontrado | PokeRush',
    };
  }

  const metadataBase = new URL('https://pokerush.com.br');

  return {
    title: `${guide.title} | PokeRush`,
    description: guide.excerpt,
    keywords: [guide.category, 'Pokémon', 'guia', 'tutorial'],
    alternates: {
      canonical: `${metadataBase}/guias/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: `${metadataBase}/guias/${slug}`,
      siteName: 'PokeRush',
      locale: 'pt_BR',
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: ['PokeRush'],
      tags: [guide.category],
      images: [
        {
          url: guide.coverImage,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.excerpt,
      images: [guide.coverImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const profile = getGuideProfile(slug);
  const linking = internalLinkingStrategy.guides[slug];
  const relatedPokemon = (linking?.pokemon ?? guide.relatedPokemon)
    .map((pokemonSlug) => getPokemonBySlug(pokemonSlug))
    .filter((pokemon): pokemon is NonNullable<typeof pokemon> => pokemon !== undefined);
  const relatedGuides = (linking?.guides ?? [])
    .map((guideSlug) => getGuide(guideSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);
  const relatedGame = linking?.game
    ? getGameBySlug(linking.game)
    : guide.relatedGame
      ? getGameBySlug(guide.relatedGame)
      : null;

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {guide.category}
          </span>
          <time className="text-gray-500 text-sm">
            {new Date(guide.publishedAt).toLocaleDateString('pt-BR')}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{guide.title}</h1>
        <p className="text-xl text-gray-600 leading-relaxed">{guide.excerpt}</p>
      </header>

      {profile && (
        <>
          <nav className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Índice</h2>
            <ul className="space-y-2">
              <li><a href="#resumo" className="text-blue-600 hover:text-blue-700">Resumo</a></li>
              <li><a href="#conteudo" className="text-blue-600 hover:text-blue-700">Conteúdo</a></li>
              <li><a href="#faq" className="text-blue-600 hover:text-blue-700">FAQ</a></li>
              <li><a href="#relacionados" className="text-blue-600 hover:text-blue-700">Relacionados</a></li>
            </ul>
          </nav>

          <div className="prose prose-lg max-w-none mb-12">
            <section id="resumo" className="mb-10">
              <h2>Resumo</h2>
              <p>{profile.summary}</p>
            </section>

            <section id="conteudo" className="mb-10">
              <h2>Conteúdo</h2>
              {profile.sections.map((section) => (
                <div key={section.title} className="mb-8">
                  <h3>{section.title}</h3>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={`${section.title}-p-${index}`}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            <section id="faq">
              <h2>FAQ</h2>
              {profile.faq.map((item) => (
                <div key={item.question} className="mb-6">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </section>
          </div>
        </>
      )}

      {!profile && (
        <div className="prose prose-lg max-w-none mb-12">
          <section id="conteudo">
            <h2>Conteúdo Principal</h2>
            <div className="whitespace-pre-line">{guide.content}</div>
          </section>
        </div>
      )}

      <AdBlockPlaceholder position="guide-content" />

      <section id="relacionados" className="mb-12">
        <SectionTitle title="Conteúdos Relacionados" />

        {relatedGuides.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {relatedGuides.map((relatedGuide) => (
              <ContentCard
                key={relatedGuide.slug}
                title={relatedGuide.title}
                description={relatedGuide.excerpt}
                image={relatedGuide.coverImage}
                tag={relatedGuide.category}
                link={`/guias/${relatedGuide.slug}`}
              />
            ))}
          </div>
        )}

        {relatedGame && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Jogo Relacionado</h3>
            <Link
              href={`/jogos/${relatedGame.slug}`}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Ver informações sobre {relatedGame.name} →
            </Link>
          </div>
        )}
      </section>

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

      <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href="/guias"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Voltar para Guias
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
