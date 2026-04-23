'use client';

import { useState } from 'react';
import PokemonCard from '@/components/PokemonCard';

interface PokedexExplorerItem {
  slug: string;
  name: string;
  image: string;
  types: string[];
  dexNumber?: number;
}

interface PokedexExplorerProps {
  pokemon: PokedexExplorerItem[];
  initialQuery?: string;
}

const typeLabelMap: Record<string, string> = {
  'Ãgua': 'Água',
  'ElÃ©trico': 'Elétrico',
  'PsÃ­quico': 'Psíquico',
  'DragÃ£o': 'Dragão',
  'AÃ§o': 'Aço',
  'MetÃ¡lico': 'Metálico',
};

function normalizeTypeLabel(type: string) {
  return typeLabelMap[type] ?? type;
}

function normalizeSearchValue(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function PokedexExplorer({ pokemon, initialQuery = '' }: PokedexExplorerProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState<string>('all');

  const allTypes = Array.from(
    new Set(pokemon.flatMap((item) => item.types.map(normalizeTypeLabel)))
  ).sort((a, b) => a.localeCompare(b, 'pt-BR'));

  const normalizedQuery = normalizeSearchValue(query);
  const filteredPokemon = pokemon.filter((item) => {
    const normalizedTypes = item.types.map(normalizeTypeLabel);
    const matchesType = selectedType === 'all' || normalizedTypes.includes(selectedType);

    if (!matchesType) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchable = normalizeSearchValue(
      `${item.name} ${normalizedTypes.join(' ')} ${item.dexNumber ? String(item.dexNumber) : ''}`
    );

    return searchable.includes(normalizedQuery);
  });

  return (
    <section className="esports-panel brand-surface px-6 py-8">
      <div className="relative z-10 mb-8 flex flex-col gap-5">
        <div className="rounded-[20px] border border-[rgba(0,212,255,0.12)] bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(12,17,29,0.98))] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.24)]">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nome, número ou tipo..."
              className="w-full rounded-2xl border border-[rgba(0,212,255,0.16)] bg-[rgba(26,34,53,0.96)] px-5 py-4 pr-12 text-white placeholder:text-[#6f7f99] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/35"
            />
            <svg className="pointer-events-none absolute right-4 top-4 h-5 w-5 text-[#6f7f99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelectedType('all')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              selectedType === 'all'
                ? 'bg-[linear-gradient(135deg,#00D4FF,#007BFF)] text-[#03111e] shadow-[0_0_18px_rgba(0,123,255,0.25)]'
                : 'border border-[rgba(0,212,255,0.14)] bg-[rgba(26,34,53,0.9)] text-[#A0AEC0] hover:border-[rgba(0,212,255,0.3)] hover:text-white'
            }`}
          >
            Todos
          </button>
          {allTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                selectedType === type
                  ? 'bg-[linear-gradient(135deg,#00D4FF,#007BFF)] text-[#03111e] shadow-[0_0_18px_rgba(0,123,255,0.25)]'
                  : 'border border-[rgba(0,212,255,0.14)] bg-[rgba(26,34,53,0.9)] text-[#A0AEC0] hover:border-[rgba(0,212,255,0.3)] hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[rgba(0,212,255,0.08)] pt-4">
          <p className="text-sm text-[#A0AEC0]">
            {filteredPokemon.length} Pokémon exibidos
          </p>
          {selectedType !== 'all' || query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedType('all');
              }}
              className="text-sm font-semibold text-[#8be9ff] hover:text-white"
            >
              Limpar filtros
            </button>
          ) : null}
        </div>
      </div>

      {filteredPokemon.length > 0 ? (
        <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {filteredPokemon.map((item) => (
            <PokemonCard
              key={item.slug}
              dexNumber={item.dexNumber}
              name={item.name}
              image={item.image}
              types={item.types.map(normalizeTypeLabel)}
              link={`/pokedex/${item.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="relative z-10 rounded-[20px] border border-[rgba(0,212,255,0.1)] bg-[rgba(18,24,38,0.92)] px-6 py-12 text-center">
          <h3 className="text-xl font-black text-white">Nenhum Pokémon encontrado</h3>
          <p className="mt-3 text-[#A0AEC0]">
            Tente ajustar a busca ou trocar o filtro de tipo.
          </p>
        </div>
      )}
    </section>
  );
}
