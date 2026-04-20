import type { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import PokemonCard from '@/components/PokemonCard';
import { getAllPokemon } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pokédex | PokeRush',
  description: 'Explore a Pokédex do PokeRush com páginas completas de Pokémon, usos práticos, fraquezas e guias relacionados.',
  keywords: ['Pokédex', 'Pokémon', 'tipos', 'fraquezas', 'PokeRush'],
  openGraph: {
    title: 'Pokédex | PokeRush',
    description: 'Explore a Pokédex do PokeRush com páginas completas de Pokémon, usos práticos, fraquezas e guias relacionados.',
    siteName: 'PokeRush',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function PokedexPage() {
  const pokemon = getAllPokemon().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pokédex</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Consulte páginas completas de Pokémon com uso prático, fraquezas, resistências e links para guias e jogos.
        </p>
      </header>

      <section className="mb-12">
        <SectionTitle
          title="Todos os Pokémon"
          subtitle="Catálogo editorial da Pokédex atual do site, conectado com guias e jogos já publicados."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemon.map((item) => (
            <PokemonCard
              key={item.slug}
              name={item.name}
              image={item.image}
              types={item.types}
              link={`/pokedex/${item.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Explorando</h2>
        <p className="text-gray-600 mb-6">
          Use a Pokédex como porta de entrada para guias de tipos, montagem de time e páginas de jogos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guias"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explorar Guias
          </Link>
          <Link
            href="/jogos"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Ver Jogos
          </Link>
        </div>
      </section>
    </div>
  );
}
