import { Pokemon } from '@/types';

type PokemonSeed = {
  name: string;
  slug: string;
  types: string[];
  evolutions: string[];
  games?: string[];
  relatedGuides?: string[];
};

const attackTypes = [
  'Normal',
  'Fogo',
  'Água',
  'Elétrico',
  'Planta',
  'Gelo',
  'Lutador',
  'Venenoso',
  'Terra',
  'Voador',
  'Psíquico',
  'Inseto',
  'Pedra',
  'Fantasma',
  'Dragão',
] as const;

const typeChart: Record<string, Partial<Record<(typeof attackTypes)[number], number>>> = {
  Normal: { Pedra: 0.5, Fantasma: 0 },
  Fogo: { Planta: 2, Gelo: 2, Inseto: 2, Fogo: 0.5, Água: 0.5, Pedra: 0.5, Dragão: 0.5 },
  Água: { Fogo: 2, Terra: 2, Pedra: 2, Água: 0.5, Planta: 0.5, Dragão: 0.5 },
  Elétrico: { Água: 2, Voador: 2, Elétrico: 0.5, Planta: 0.5, Dragão: 0.5, Terra: 0 },
  Planta: { Água: 2, Terra: 2, Pedra: 2, Fogo: 0.5, Planta: 0.5, Venenoso: 0.5, Voador: 0.5, Inseto: 0.5, Dragão: 0.5 },
  Gelo: { Planta: 2, Terra: 2, Voador: 2, Dragão: 2, Fogo: 0.5, Água: 0.5, Gelo: 0.5 },
  Lutador: { Normal: 2, Gelo: 2, Pedra: 2, Venenoso: 0.5, Voador: 0.5, Psíquico: 0.5, Inseto: 0.5, Fantasma: 0 },
  Venenoso: { Planta: 2, Venenoso: 0.5, Terra: 0.5, Pedra: 0.5, Fantasma: 0.5 },
  Terra: { Fogo: 2, Elétrico: 2, Venenoso: 2, Pedra: 2, Planta: 0.5, Inseto: 0.5, Voador: 0 },
  Voador: { Planta: 2, Lutador: 2, Inseto: 2, Elétrico: 0.5, Pedra: 0.5 },
  Psíquico: { Lutador: 2, Venenoso: 2, Psíquico: 0.5 },
  Inseto: { Planta: 2, Psíquico: 2, Fogo: 0.5, Lutador: 0.5, Venenoso: 0.5, Voador: 0.5, Fantasma: 0.5 },
  Pedra: { Fogo: 2, Gelo: 2, Voador: 2, Inseto: 2, Lutador: 0.5, Terra: 0.5 },
  Fantasma: { Psíquico: 2, Normal: 0, Fantasma: 2 },
  Dragão: { Dragão: 2 },
};

const guideByType: Record<string, string[]> = {
  Fogo: ['fraquezas-tipo-fogo', 'melhores-pokemon-fogo'],
  Água: ['fraquezas-tipo-agua', 'como-montar-time-balanceado'],
  Elétrico: ['melhores-pokemon-eletricos', 'melhores-pokemon-para-iniciantes'],
  Planta: ['fraquezas-tipo-planta', 'melhores-pokemon-para-iniciantes'],
  Inseto: ['fraquezas-tipo-inseto', 'melhores-pokemon-para-iniciantes'],
  Psíquico: ['fraquezas-tipo-psiquico', 'diferenca-ataque-fisico-especial'],
  Terra: ['fraquezas-tipo-terra', 'como-montar-time-balanceado'],
  Fantasma: ['fraquezas-tipo-fantasma', 'diferenca-ataque-fisico-especial'],
  Lutador: ['fraquezas-tipo-lutador', 'como-montar-time-balanceado'],
  Dragão: ['fraquezas-tipo-dragao', 'como-montar-time-balanceado'],
  Venenoso: ['fraquezas-tipo-planta', 'como-montar-time-balanceado'],
  Pedra: ['fraquezas-tipo-terra', 'como-montar-time-balanceado'],
  Gelo: ['fraquezas-tipo-agua', 'melhores-pokemon-para-iniciantes'],
  Voador: ['melhores-pokemon-para-iniciantes', 'como-montar-time-balanceado'],
  Normal: ['melhores-pokemon-para-iniciantes', 'como-montar-time-balanceado'],
};

function formatTypeLabel(types: string[]) {
  return types.length === 1
    ? `do tipo ${types[0]}`
    : `dos tipos ${types[0]} e ${types[1]}`;
}

function buildDescription(seed: PokemonSeed) {
  const typeLabel = formatTypeLabel(seed.types);
  const evolutionLabel = seed.evolutions.length > 0
    ? 'faz parte de uma linha evolutiva clássica da primeira geração'
    : 'tem presença marcante entre os Pokémon clássicos da primeira geração';

  return `${seed.name} é um Pokémon de Kanto ${typeLabel} que ${evolutionLabel}.`;
}

function buildTypeRelations(types: string[]) {
  const weaknesses: string[] = [];
  const resistances: string[] = [];

  for (const attackType of attackTypes) {
    const multiplier = types.reduce((total, defendingType) => {
      const attackMatchups = typeChart[attackType] ?? {};
      return total * (attackMatchups[defendingType as keyof typeof attackMatchups] ?? 1);
    }, 1);

    if (multiplier > 1) {
      weaknesses.push(attackType);
    } else if (multiplier < 1) {
      resistances.push(attackType);
    }
  }

  return { weaknesses, resistances };
}

function buildRelatedGuides(seed: PokemonSeed) {
  if (seed.relatedGuides) {
    return seed.relatedGuides;
  }

  const guideSet = new Set<string>();

  if (['vaporeon', 'jolteon', 'flareon'].includes(seed.slug)) {
    guideSet.add('como-evoluir-eevee');
  }

  for (const type of seed.types) {
    for (const guide of guideByType[type] ?? []) {
      guideSet.add(guide);
    }
  }

  if (guideSet.size < 2) {
    guideSet.add('melhores-pokemon-para-iniciantes');
    guideSet.add('como-montar-time-balanceado');
  }

  return Array.from(guideSet).slice(0, 2);
}

function createPokemon(seed: PokemonSeed): Pokemon {
  const { weaknesses, resistances } = buildTypeRelations(seed.types);

  return {
    name: seed.name,
    slug: seed.slug,
    image: `/images/pokemon/${seed.slug}.jpg`,
    types: seed.types,
    shortDescription: buildDescription(seed),
    weaknesses,
    resistances,
    evolutions: seed.evolutions,
    games: seed.games ?? ['scarlet-violet'],
    relatedGuides: buildRelatedGuides(seed),
  };
}

const kantoMissingSeeds: PokemonSeed[] = [
  { name: 'Ivysaur', slug: 'ivysaur', types: ['Planta', 'Venenoso'], evolutions: ['bulbasaur', 'venusaur'] },
  { name: 'Charmeleon', slug: 'charmeleon', types: ['Fogo'], evolutions: ['charmander', 'charizard'] },
  { name: 'Wartortle', slug: 'wartortle', types: ['Água'], evolutions: ['squirtle', 'blastoise'] },
  { name: 'Caterpie', slug: 'caterpie', types: ['Inseto'], evolutions: ['metapod', 'butterfree'] },
  { name: 'Metapod', slug: 'metapod', types: ['Inseto'], evolutions: ['caterpie', 'butterfree'] },
  { name: 'Butterfree', slug: 'butterfree', types: ['Inseto', 'Voador'], evolutions: ['caterpie', 'metapod'] },
  { name: 'Weedle', slug: 'weedle', types: ['Inseto', 'Venenoso'], evolutions: ['kakuna', 'beedrill'] },
  { name: 'Kakuna', slug: 'kakuna', types: ['Inseto', 'Venenoso'], evolutions: ['weedle', 'beedrill'] },
  { name: 'Beedrill', slug: 'beedrill', types: ['Inseto', 'Venenoso'], evolutions: ['weedle', 'kakuna'] },
  { name: 'Pidgey', slug: 'pidgey', types: ['Normal', 'Voador'], evolutions: ['pidgeotto', 'pidgeot'] },
  { name: 'Pidgeotto', slug: 'pidgeotto', types: ['Normal', 'Voador'], evolutions: ['pidgey', 'pidgeot'] },
  { name: 'Pidgeot', slug: 'pidgeot', types: ['Normal', 'Voador'], evolutions: ['pidgey', 'pidgeotto'] },
  { name: 'Rattata', slug: 'rattata', types: ['Normal'], evolutions: ['raticate'] },
  { name: 'Raticate', slug: 'raticate', types: ['Normal'], evolutions: ['rattata'] },
  { name: 'Spearow', slug: 'spearow', types: ['Normal', 'Voador'], evolutions: ['fearow'] },
  { name: 'Fearow', slug: 'fearow', types: ['Normal', 'Voador'], evolutions: ['spearow'] },
  { name: 'Ekans', slug: 'ekans', types: ['Venenoso'], evolutions: ['arbok'] },
  { name: 'Arbok', slug: 'arbok', types: ['Venenoso'], evolutions: ['ekans'] },
  { name: 'Raichu', slug: 'raichu', types: ['Elétrico'], evolutions: ['pikachu'] },
  { name: 'Sandshrew', slug: 'sandshrew', types: ['Terra'], evolutions: ['sandslash'] },
  { name: 'Sandslash', slug: 'sandslash', types: ['Terra'], evolutions: ['sandshrew'] },
  { name: 'Nidoran♀', slug: 'nidoran-f', types: ['Venenoso'], evolutions: ['nidorina', 'nidoqueen'] },
  { name: 'Nidorina', slug: 'nidorina', types: ['Venenoso'], evolutions: ['nidoran-f', 'nidoqueen'] },
  { name: 'Nidoqueen', slug: 'nidoqueen', types: ['Venenoso', 'Terra'], evolutions: ['nidoran-f', 'nidorina'] },
  { name: 'Nidoran♂', slug: 'nidoran-m', types: ['Venenoso'], evolutions: ['nidorino', 'nidoking'] },
  { name: 'Nidorino', slug: 'nidorino', types: ['Venenoso'], evolutions: ['nidoran-m', 'nidoking'] },
  { name: 'Nidoking', slug: 'nidoking', types: ['Venenoso', 'Terra'], evolutions: ['nidoran-m', 'nidorino'] },
  { name: 'Clefairy', slug: 'clefairy', types: ['Normal'], evolutions: ['clefable'] },
  { name: 'Clefable', slug: 'clefable', types: ['Normal'], evolutions: ['clefairy'] },
  { name: 'Vulpix', slug: 'vulpix', types: ['Fogo'], evolutions: ['ninetales'] },
  { name: 'Ninetales', slug: 'ninetales', types: ['Fogo'], evolutions: ['vulpix'] },
  { name: 'Jigglypuff', slug: 'jigglypuff', types: ['Normal'], evolutions: ['wigglytuff'] },
  { name: 'Wigglytuff', slug: 'wigglytuff', types: ['Normal'], evolutions: ['jigglypuff'] },
  { name: 'Zubat', slug: 'zubat', types: ['Venenoso', 'Voador'], evolutions: ['golbat'] },
  { name: 'Golbat', slug: 'golbat', types: ['Venenoso', 'Voador'], evolutions: ['zubat'] },
  { name: 'Oddish', slug: 'oddish', types: ['Planta', 'Venenoso'], evolutions: ['gloom', 'vileplume'] },
  { name: 'Gloom', slug: 'gloom', types: ['Planta', 'Venenoso'], evolutions: ['oddish', 'vileplume'] },
  { name: 'Vileplume', slug: 'vileplume', types: ['Planta', 'Venenoso'], evolutions: ['oddish', 'gloom'] },
  { name: 'Paras', slug: 'paras', types: ['Inseto', 'Planta'], evolutions: ['parasect'] },
  { name: 'Parasect', slug: 'parasect', types: ['Inseto', 'Planta'], evolutions: ['paras'] },
  { name: 'Venonat', slug: 'venonat', types: ['Inseto', 'Venenoso'], evolutions: ['venomoth'] },
  { name: 'Venomoth', slug: 'venomoth', types: ['Inseto', 'Venenoso'], evolutions: ['venonat'] },
  { name: 'Diglett', slug: 'diglett', types: ['Terra'], evolutions: ['dugtrio'] },
  { name: 'Dugtrio', slug: 'dugtrio', types: ['Terra'], evolutions: ['diglett'] },
  { name: 'Meowth', slug: 'meowth', types: ['Normal'], evolutions: ['persian'] },
  { name: 'Persian', slug: 'persian', types: ['Normal'], evolutions: ['meowth'] },
  { name: 'Psyduck', slug: 'psyduck', types: ['Água'], evolutions: ['golduck'] },
  { name: 'Golduck', slug: 'golduck', types: ['Água'], evolutions: ['psyduck'] },
  { name: 'Mankey', slug: 'mankey', types: ['Lutador'], evolutions: ['primeape', 'annihilape'] },
  { name: 'Primeape', slug: 'primeape', types: ['Lutador'], evolutions: ['mankey', 'annihilape'] },
  { name: 'Growlithe', slug: 'growlithe', types: ['Fogo'], evolutions: ['arcanine'] },
  { name: 'Poliwag', slug: 'poliwag', types: ['Água'], evolutions: ['poliwhirl', 'poliwrath'] },
  { name: 'Poliwhirl', slug: 'poliwhirl', types: ['Água'], evolutions: ['poliwag', 'poliwrath'] },
  { name: 'Poliwrath', slug: 'poliwrath', types: ['Água', 'Lutador'], evolutions: ['poliwag', 'poliwhirl'] },
  { name: 'Abra', slug: 'abra', types: ['Psíquico'], evolutions: ['kadabra', 'alakazam'] },
  { name: 'Kadabra', slug: 'kadabra', types: ['Psíquico'], evolutions: ['abra', 'alakazam'] },
  { name: 'Machop', slug: 'machop', types: ['Lutador'], evolutions: ['machoke', 'machamp'] },
  { name: 'Machoke', slug: 'machoke', types: ['Lutador'], evolutions: ['machop', 'machamp'] },
  { name: 'Machamp', slug: 'machamp', types: ['Lutador'], evolutions: ['machop', 'machoke'] },
  { name: 'Bellsprout', slug: 'bellsprout', types: ['Planta', 'Venenoso'], evolutions: ['weepinbell', 'victreebel'] },
  { name: 'Weepinbell', slug: 'weepinbell', types: ['Planta', 'Venenoso'], evolutions: ['bellsprout', 'victreebel'] },
  { name: 'Victreebel', slug: 'victreebel', types: ['Planta', 'Venenoso'], evolutions: ['bellsprout', 'weepinbell'] },
  { name: 'Tentacool', slug: 'tentacool', types: ['Água', 'Venenoso'], evolutions: ['tentacruel'] },
  { name: 'Tentacruel', slug: 'tentacruel', types: ['Água', 'Venenoso'], evolutions: ['tentacool'] },
  { name: 'Geodude', slug: 'geodude', types: ['Pedra', 'Terra'], evolutions: ['graveler', 'golem'] },
  { name: 'Graveler', slug: 'graveler', types: ['Pedra', 'Terra'], evolutions: ['geodude', 'golem'] },
  { name: 'Golem', slug: 'golem', types: ['Pedra', 'Terra'], evolutions: ['geodude', 'graveler'] },
  { name: 'Ponyta', slug: 'ponyta', types: ['Fogo'], evolutions: ['rapidash'] },
  { name: 'Rapidash', slug: 'rapidash', types: ['Fogo'], evolutions: ['ponyta'] },
  { name: 'Slowpoke', slug: 'slowpoke', types: ['Água', 'Psíquico'], evolutions: ['slowbro'] },
  { name: 'Slowbro', slug: 'slowbro', types: ['Água', 'Psíquico'], evolutions: ['slowpoke'] },
  { name: 'Magnemite', slug: 'magnemite', types: ['Elétrico'], evolutions: ['magneton'] },
  { name: 'Magneton', slug: 'magneton', types: ['Elétrico'], evolutions: ['magnemite'] },
  { name: "Farfetch'd", slug: 'farfetchd', types: ['Normal', 'Voador'], evolutions: [] },
  { name: 'Doduo', slug: 'doduo', types: ['Normal', 'Voador'], evolutions: ['dodrio'] },
  { name: 'Dodrio', slug: 'dodrio', types: ['Normal', 'Voador'], evolutions: ['doduo'] },
  { name: 'Seel', slug: 'seel', types: ['Água'], evolutions: ['dewgong'] },
  { name: 'Dewgong', slug: 'dewgong', types: ['Água', 'Gelo'], evolutions: ['seel'] },
  { name: 'Grimer', slug: 'grimer', types: ['Venenoso'], evolutions: ['muk'] },
  { name: 'Muk', slug: 'muk', types: ['Venenoso'], evolutions: ['grimer'] },
  { name: 'Shellder', slug: 'shellder', types: ['Água'], evolutions: ['cloyster'] },
  { name: 'Cloyster', slug: 'cloyster', types: ['Água', 'Gelo'], evolutions: ['shellder'] },
  { name: 'Onix', slug: 'onix', types: ['Pedra', 'Terra'], evolutions: [] },
  { name: 'Drowzee', slug: 'drowzee', types: ['Psíquico'], evolutions: ['hypno'] },
  { name: 'Hypno', slug: 'hypno', types: ['Psíquico'], evolutions: ['drowzee'] },
  { name: 'Krabby', slug: 'krabby', types: ['Água'], evolutions: ['kingler'] },
  { name: 'Kingler', slug: 'kingler', types: ['Água'], evolutions: ['krabby'] },
  { name: 'Voltorb', slug: 'voltorb', types: ['Elétrico'], evolutions: ['electrode'] },
  { name: 'Electrode', slug: 'electrode', types: ['Elétrico'], evolutions: ['voltorb'] },
  { name: 'Exeggcute', slug: 'exeggcute', types: ['Planta', 'Psíquico'], evolutions: ['exeggutor'] },
  { name: 'Exeggutor', slug: 'exeggutor', types: ['Planta', 'Psíquico'], evolutions: ['exeggcute'] },
  { name: 'Cubone', slug: 'cubone', types: ['Terra'], evolutions: ['marowak'] },
  { name: 'Marowak', slug: 'marowak', types: ['Terra'], evolutions: ['cubone'] },
  { name: 'Hitmonlee', slug: 'hitmonlee', types: ['Lutador'], evolutions: [] },
  { name: 'Hitmonchan', slug: 'hitmonchan', types: ['Lutador'], evolutions: [] },
  { name: 'Lickitung', slug: 'lickitung', types: ['Normal'], evolutions: [] },
  { name: 'Koffing', slug: 'koffing', types: ['Venenoso'], evolutions: ['weezing'] },
  { name: 'Weezing', slug: 'weezing', types: ['Venenoso'], evolutions: ['koffing'] },
  { name: 'Rhyhorn', slug: 'rhyhorn', types: ['Terra', 'Pedra'], evolutions: ['rhydon'] },
  { name: 'Rhydon', slug: 'rhydon', types: ['Terra', 'Pedra'], evolutions: ['rhyhorn'] },
  { name: 'Chansey', slug: 'chansey', types: ['Normal'], evolutions: [] },
  { name: 'Tangela', slug: 'tangela', types: ['Planta'], evolutions: [] },
  { name: 'Kangaskhan', slug: 'kangaskhan', types: ['Normal'], evolutions: [] },
  { name: 'Horsea', slug: 'horsea', types: ['Água'], evolutions: ['seadra'] },
  { name: 'Seadra', slug: 'seadra', types: ['Água'], evolutions: ['horsea'] },
  { name: 'Goldeen', slug: 'goldeen', types: ['Água'], evolutions: ['seaking'] },
  { name: 'Seaking', slug: 'seaking', types: ['Água'], evolutions: ['goldeen'] },
  { name: 'Staryu', slug: 'staryu', types: ['Água'], evolutions: ['starmie'] },
  { name: 'Starmie', slug: 'starmie', types: ['Água', 'Psíquico'], evolutions: ['staryu'] },
  { name: 'Mr. Mime', slug: 'mr-mime', types: ['Psíquico'], evolutions: [] },
  { name: 'Scyther', slug: 'scyther', types: ['Inseto', 'Voador'], evolutions: ['scizor'] },
  { name: 'Jynx', slug: 'jynx', types: ['Gelo', 'Psíquico'], evolutions: [] },
  { name: 'Electabuzz', slug: 'electabuzz', types: ['Elétrico'], evolutions: [] },
  { name: 'Magmar', slug: 'magmar', types: ['Fogo'], evolutions: [] },
  { name: 'Pinsir', slug: 'pinsir', types: ['Inseto'], evolutions: [] },
  { name: 'Tauros', slug: 'tauros', types: ['Normal'], evolutions: [] },
  { name: 'Magikarp', slug: 'magikarp', types: ['Água'], evolutions: ['gyarados'] },
  { name: 'Ditto', slug: 'ditto', types: ['Normal'], evolutions: [] },
  { name: 'Vaporeon', slug: 'vaporeon', types: ['Água'], evolutions: ['eevee'] },
  { name: 'Jolteon', slug: 'jolteon', types: ['Elétrico'], evolutions: ['eevee'] },
  { name: 'Flareon', slug: 'flareon', types: ['Fogo'], evolutions: ['eevee'] },
  { name: 'Porygon', slug: 'porygon', types: ['Normal'], evolutions: [] },
  { name: 'Omanyte', slug: 'omanyte', types: ['Pedra', 'Água'], evolutions: ['omastar'] },
  { name: 'Omastar', slug: 'omastar', types: ['Pedra', 'Água'], evolutions: ['omanyte'] },
  { name: 'Kabuto', slug: 'kabuto', types: ['Pedra', 'Água'], evolutions: ['kabutops'] },
  { name: 'Kabutops', slug: 'kabutops', types: ['Pedra', 'Água'], evolutions: ['kabuto'] },
  { name: 'Aerodactyl', slug: 'aerodactyl', types: ['Pedra', 'Voador'], evolutions: [] },
  { name: 'Articuno', slug: 'articuno', types: ['Gelo', 'Voador'], evolutions: [], relatedGuides: ['como-montar-time-balanceado', 'fraquezas-tipo-agua'] },
  { name: 'Zapdos', slug: 'zapdos', types: ['Elétrico', 'Voador'], evolutions: [], relatedGuides: ['melhores-pokemon-eletricos', 'como-montar-time-balanceado'] },
  { name: 'Moltres', slug: 'moltres', types: ['Fogo', 'Voador'], evolutions: [], relatedGuides: ['melhores-pokemon-fogo', 'como-montar-time-balanceado'] },
];

export const kantoFirst151MissingPokemonData: Pokemon[] = kantoMissingSeeds.map(createPokemon);
