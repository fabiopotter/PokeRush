import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import ContentCard from '@/components/ContentCard';
import PokemonCard from '@/components/PokemonCard';
import GuideCard from '@/components/GuideCard';
import SearchBar from '@/components/SearchBar';
import AdBlockPlaceholder from '@/components/AdBlockPlaceholder';
import {
  getAllGuides,
  getAllPokemon,
  getAllGames,
  getAllNews
} from '@/lib/content';

export default function Home() {
  const featuredGuides = getAllGuides().slice(0, 3);
  const popularPokemon = getAllPokemon().slice(0, 4);
  const featuredGames = getAllGames().slice(0, 3);
  const recentNews = getAllNews().slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Seu Hub Completo de Pokémon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Descubra guias detalhados, explore a Pokédex completa, acompanhe notícias
            e domine todos os jogos Pokémon com conteúdo em português.
          </p>
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explorar Guias
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-2xl mx-auto px-4">
        <SearchBar placeholder="Buscar Pokémon, guias, jogos..." />
      </section>

      {/* Featured Guides */}
      <section className="px-4">
        <SectionTitle
          title="Guias em Destaque"
          subtitle="Conteúdo atualizado para te ajudar a dominar o mundo Pokémon"
          moreLink={{ href: "/guias", text: "Ver todos os guias" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Ad Block */}
      <AdBlockPlaceholder position="home-middle" />

      {/* Popular Pokemon */}
      <section className="px-4">
        <SectionTitle
          title="Pokémon Populares"
          subtitle="Conheça os Pokémon mais queridos e poderosos"
          moreLink={{ href: "/pokedex", text: "Ver Pokédex completa" }}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularPokemon.map((pokemon) => (
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

      {/* Featured Games */}
      <section className="px-4">
        <SectionTitle
          title="Jogos em Destaque"
          subtitle="Os melhores jogos Pokémon para todas as plataformas"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <ContentCard
              key={game.slug}
              title={game.name}
              description={game.description}
              image={game.coverImage}
              link={`/jogos/${game.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Recent News */}
      <section className="px-4">
        <SectionTitle
          title="Notícias Recentes"
          subtitle="Fique por dentro das últimas novidades do universo Pokémon"
          moreLink={{ href: "/noticias", text: "Ver todas as notícias" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentNews.map((news) => (
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

      {/* Final CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl mx-4">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore a Pokédex Completa
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Descubra tudo sobre seus Pokémon favoritos: tipos, evoluções, fraquezas e muito mais.
          </p>
          <Link
            href="/pokedex"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Acessar Pokédex
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
