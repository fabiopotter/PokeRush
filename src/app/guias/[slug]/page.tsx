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
    <article className="max-w-4xl mx-auto space-y-10">
      <header className="esports-section px-6 py-10">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <span className="esports-tag">{guide.category}</span>
          <time className="text-[#7f92ae] text-sm">
            {new Date(guide.publishedAt).toLocaleDateString('pt-BR')}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{guide.title}</h1>
        <p className="text-lg md:text-xl text-[#A0AEC0] leading-8">{guide.excerpt}</p>
      </header>

      {profile && (
        <>
          <nav className="esports-panel-alt p-6">
            <h2 className="text-lg font-bold text-white mb-4">Índice</h2>
            <ul className="space-y-2">
              <li><a href="#resumo" className="text-[#8be9ff] hover:text-white">Resumo</a></li>
              <li><a href="#conteudo" className="text-[#8be9ff] hover:text-white">Conteúdo</a></li>
              <li><a href="#faq" className="text-[#8be9ff] hover:text-white">FAQ</a></li>
              <li><a href="#relacionados" className="text-[#8be9ff] hover:text-white">Relacionados</a></li>
            </ul>
          </nav>

          <div className="esports-panel px-6 py-8 prose prose-lg max-w-none">
            <section id="resumo" className="mb-10">
              <h2>Resumo</h2>
              <p className="leading-8">{profile.summary}</p>
            </section>

            <section id="conteudo" className="mb-10">
              <h2>Conteúdo</h2>
              {profile.sections.map((section) => (
                <div key={section.title} className="mb-8">
                  <h3>{section.title}</h3>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={`${section.title}-p-${index}`} className="leading-8">{paragraph}</p>
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
                  <p className="leading-8">{item.answer}</p>
                </div>
              ))}
            </section>
          </div>
        </>
      )}

      {!profile && (
        <div className="esports-panel px-6 py-8 prose prose-lg max-w-none">
          <section id="conteudo">
            <h2>Conteúdo Principal</h2>
            <div className="whitespace-pre-line leading-8">{guide.content}</div>
          </section>
        </div>
      )}

      <AdBlockPlaceholder position="guide-content" />

      <section id="relacionados" className="esports-panel px-6 py-8">
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
          <div className="esports-panel-alt p-6">
            <h3 className="text-lg font-bold text-white mb-2">Jogo Relacionado</h3>
            <Link
              href={`/jogos/${relatedGame.slug}`}
              className="text-[#8be9ff] hover:text-white font-semibold"
            >
              Ver informações sobre {relatedGame.name} →
            </Link>
          </div>
        )}
      </section>

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

      <nav className="flex justify-between items-center pt-8 border-t esports-divider">
        <Link
          href="/guias"
          className="text-[#8be9ff] hover:text-white font-semibold"
        >
          ← Voltar para Guias
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
