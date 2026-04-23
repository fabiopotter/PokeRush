import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import PokemonCard from '@/components/PokemonCard';
import GuideCard from '@/components/GuideCard';
import SearchBar from '@/components/SearchBar';
import AdBlockPlaceholder from '@/components/AdBlockPlaceholder';
import BrandLogo from '@/components/BrandLogo';
import { getPokemonDexNumber } from '@/data/pokemon-dex';
import {
  getAllPokemon,
  getGameBySlug,
  getGuideBySlug,
  getRecentGuides,
  getRecentNews,
} from '@/lib/content';

const ferramentas = [
  {
    title: 'Busca da Pokédex',
    description: 'Encontre criaturas por nome, número ou tipo com um fluxo rápido e visual.',
    href: '/pokedex',
    tag: 'Ferramenta',
  },
  {
    title: 'Guias por Categoria',
    description: 'Acesse conteúdos de estratégia, tipos, mecânicas e primeiros passos sem perder tempo.',
    href: '/guias',
    tag: 'Ferramenta',
  },
  {
    title: 'Mapa de Jogos',
    description: 'Use as páginas de jogos como atalhos para notícias, guias e Pokémon relacionados.',
    href: '/jogos',
    tag: 'Ferramenta',
  },
];

export default function Home() {
  const latestNews = getRecentNews(4);
  const featuredPost = latestNews[0];
  const secondaryNews = latestNews.slice(1, 4);
  const featuredGuides = getRecentGuides(3);
  const nationalPokedex = getAllPokemon().slice(0, 6);
  const championsGame = getGameBySlug('pokemon-champions');
  const championsGuide = getGuideBySlug('pokemon-champions-o-que-ja-se-sabe');

  return (
    <div className="space-y-24">
      {featuredPost && (
        <section className="brand-surface relative overflow-hidden rounded-[30px] border border-[rgba(0,212,255,0.12)] bg-[#121826] shadow-[0_22px_56px_rgba(0,0,0,0.34)]">
          <div className="absolute inset-0">
            <Image
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              fill
              priority
              className="object-cover opacity-28"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,0,0,0.12),transparent_18%),radial-gradient(circle_at_76%_22%,rgba(0,212,255,0.2),transparent_26%),linear-gradient(135deg,rgba(6,10,20,0.94),rgba(11,15,26,0.8),rgba(11,15,26,0.96))]" />
          </div>

          <div className="relative grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1.45fr)_360px]">
            <div className="flex flex-col justify-center">
              <BrandLogo href="/" className="mb-6 w-fit" />
              <span className="esports-tag mb-5 w-fit">Destaque Principal</span>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                {featuredPost.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A0AEC0] md:text-xl">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={`/noticias/${featuredPost.slug}`} className="esports-button">
                  Ler destaque
                  <span className="text-lg">→</span>
                </Link>
                <Link href="/noticias" className="esports-button-secondary">
                  Ver últimas notícias
                </Link>
              </div>

              <div className="mt-10 max-w-2xl">
                <SearchBar action="/pokedex" placeholder="Buscar Pokémon, guias e jogos..." />
              </div>
            </div>

            <div className="grid gap-4 self-end">
              {secondaryNews.map((news) => (
                <Link
                  key={news.slug}
                  href={`/noticias/${news.slug}`}
                  className="group rounded-[20px] border border-[rgba(0,212,255,0.12)] bg-[rgba(18,24,38,0.82)] p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,212,255,0.24)] hover:shadow-[0_0_0_1px_rgba(0,212,255,0.1),0_18px_32px_rgba(0,123,255,0.16)]"
                >
                  <span className="esports-tag mb-3 w-fit">Notícia</span>
                  <h2 className="text-lg font-black leading-7 text-white transition-colors group-hover:text-[#7fe8ff]">
                    {news.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#A0AEC0] line-clamp-2">
                    {news.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[24px] border border-[rgba(0,212,255,0.08)] bg-[linear-gradient(180deg,rgba(16,22,36,0.96),rgba(11,15,26,0.98))] px-4 py-8 md:px-6">
        <SectionTitle
          title="Últimas Notícias"
          subtitle="Cobertura rápida com visual de portal gaming para levar o leitor direto aos assuntos mais quentes do momento."
          moreLink={{ href: '/noticias', text: 'Ver todas as notícias' }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {latestNews.map((news) => (
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

      <section className="rounded-[24px] border border-[rgba(0,212,255,0.08)] bg-[linear-gradient(180deg,rgba(26,34,53,0.92),rgba(18,24,38,0.96))] px-4 py-8 md:px-6">
        <SectionTitle
          title="Guias em Destaque"
          subtitle="Guias que funcionam como melhor ponto de entrada para novos leitores e também puxam o interlinking do site."
          moreLink={{ href: '/guias', text: 'Explorar guias' }}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
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

      {championsGame && (
        <section className="brand-surface relative overflow-hidden rounded-[28px] border border-[rgba(0,212,255,0.12)] bg-[#121826] shadow-[0_18px_46px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0">
            <Image
              src={championsGame.coverImage}
              alt={championsGame.name}
              fill
              className="object-cover opacity-22"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,15,26,0.95),rgba(9,18,33,0.84),rgba(11,15,26,0.96))]" />
          </div>

          <div className="relative grid items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="esports-tag mb-5 w-fit">Tema em Destaque</span>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Pokémon Champions
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A0AEC0]">
                O tema mais competitivo do site ganha aqui uma entrada própria, conectando jogo, guia e notícia
                para quem quer entender rápido por que Champions virou pauta tão forte na comunidade.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href={`/jogos/${championsGame.slug}`} className="esports-button">
                  Ver jogo
                </Link>
                {championsGuide && (
                  <Link href={`/guias/${championsGuide.slug}`} className="esports-button-secondary">
                    Ler guia
                  </Link>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="esports-card p-6">
                <span className="esports-tag mb-4 w-fit">Jogo em Foco</span>
                <h3 className="text-2xl font-black text-white">{championsGame.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A0AEC0]">
                  {championsGame.description}
                </p>
              </div>

              {championsGuide && (
                <div className="esports-card p-6">
                  <span className="esports-tag mb-4 w-fit">Guia Relacionado</span>
                  <h3 className="text-xl font-black text-white">{championsGuide.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#A0AEC0]">
                    {championsGuide.excerpt}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[24px] border border-[rgba(0,212,255,0.08)] bg-[linear-gradient(180deg,rgba(16,22,36,0.96),rgba(11,15,26,0.98))] px-4 py-8 md:px-6">
        <SectionTitle
          title="Pokédex Nacional"
          subtitle="Criaturas populares com página própria, detalhes práticos e conexão direta com guias e jogos."
          moreLink={{ href: '/pokedex', text: 'Ver Pokédex completa' }}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {nationalPokedex.map((pokemon) => (
            <PokemonCard
              key={pokemon.slug}
              dexNumber={getPokemonDexNumber(pokemon.slug)}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
              link={`/pokedex/${pokemon.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-[rgba(0,212,255,0.08)] bg-[linear-gradient(180deg,rgba(26,34,53,0.92),rgba(18,24,38,0.96))] px-4 py-8 md:px-6">
        <SectionTitle
          title="Ferramentas"
          subtitle="Entradas rápidas para os recursos que ajudam o leitor a navegar melhor pelo ecossistema do PokeRush Brasil."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ferramentas.map((item) => (
            <ContentCard
              key={item.href}
              title={item.title}
              description={item.description}
              tag={item.tag}
              link={item.href}
            />
          ))}
        </div>
      </section>

      <AdBlockPlaceholder position="home-middle" />
    </div>
  );
}
