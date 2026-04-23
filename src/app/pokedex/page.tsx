import type { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import PokedexExplorer from '@/components/PokedexExplorer';
import { getAllPokemon } from '@/lib/content';
import { getPokemonDexNumber, sortPokemonByDexNumber } from '@/data/pokemon-dex';

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

interface PokedexPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function PokedexPage({ searchParams }: PokedexPageProps) {
  const { q = '' } = await searchParams;
  const pokemon = sortPokemonByDexNumber(getAllPokemon()).map((item) => ({
    slug: item.slug,
    name: item.name,
    image: item.image,
    types: item.types,
    dexNumber: getPokemonDexNumber(item.slug),
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="brand-surface relative overflow-hidden rounded-[28px] border border-[rgba(0,212,255,0.12)] bg-[linear-gradient(135deg,rgba(18,24,38,0.98),rgba(12,17,29,0.96))] px-6 py-14 text-center shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,123,255,0.14),transparent_24%)]" />
        <div className="relative">
          <span className="esports-tag mb-4 w-fit mx-auto">Pokédex Nacional</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Pokédex</h1>
          <p className="text-lg md:text-xl text-[#A0AEC0] max-w-3xl mx-auto leading-8">
            Explore a coleção em um grid visual, com busca rápida, filtros por tipo e cards integrados à mesma identidade premium do PokeRush Brasil.
          </p>
        </div>
      </header>

      <div>
        <SectionTitle
          title="Explore por Nome ou Tipo"
          subtitle="Filtre a Pokédex como se estivesse navegando por um painel moderno de coleção, não por uma base fria de dados."
        />
        <PokedexExplorer pokemon={pokemon} initialQuery={q} />
      </div>

      <section className="esports-section text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Continue Explorando</h2>
        <p className="text-[#A0AEC0] mb-8 max-w-2xl mx-auto leading-7">
          Use a Pokédex como porta de entrada para guias de tipos, montagem de time e páginas de jogos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/guias" className="esports-button">
            Explorar Guias
          </Link>
          <Link href="/jogos" className="esports-button-secondary">
            Ver Jogos
          </Link>
        </div>
      </section>
    </div>
  );
}
