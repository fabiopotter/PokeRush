const first151PokemonSlugs = [
  'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise',
  'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata',
  'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f',
  'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
  'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat',
  'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe',
  'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp',
  'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta',
  'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong',
  'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby',
  'kingler', 'voltorb', 'electrode', 'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan',
  'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra',
  'goldeen', 'seaking', 'staryu', 'starmie', 'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir',
  'tauros', 'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon',
  'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini',
  'dragonair', 'dragonite', 'mewtwo', 'mew',
] as const;

const extraPokemonDexNumbers: Record<string, number> = {
  umbreon: 197,
  scizor: 212,
  tyranitar: 248,
  lugia: 249,
  'ho-oh': 250,
  gardevoir: 282,
  metagross: 376,
  rayquaza: 384,
  garchomp: 445,
  munchlax: 446,
  riolu: 447,
  lucario: 448,
  greninja: 658,
  sylveon: 700,
  decidueye: 724,
  mimikyu: 778,
  cinderace: 815,
  zacian: 888,
  ursaluna: 901,
  armarouge: 936,
  ceruledge: 937,
  tinkaton: 959,
  annihilape: 979,
  koraidon: 1007,
  miraidon: 1008,
};

export const pokemonDexNumbers: Record<string, number> = {
  ...Object.fromEntries(first151PokemonSlugs.map((slug, index) => [slug, index + 1])),
  ...extraPokemonDexNumbers,
};

export function getPokemonDexNumber(slug: string): number | undefined {
  return pokemonDexNumbers[slug];
}

export function sortPokemonByDexNumber<T extends { slug: string }>(pokemon: T[]): T[] {
  return [...pokemon].sort((a, b) => {
    const aDexNumber = getPokemonDexNumber(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bDexNumber = getPokemonDexNumber(b.slug) ?? Number.MAX_SAFE_INTEGER;

    if (aDexNumber !== bDexNumber) {
      return aDexNumber - bDexNumber;
    }

    return a.slug.localeCompare(b.slug, 'pt-BR');
  });
}
