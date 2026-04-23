// Utilitários para o projeto PokeRush

// Mapeamento de cores para tipos de Pokémon
export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    'Normal': 'bg-gray-500/12 text-gray-200 border-gray-400/20',
    'Fogo': 'bg-red-500/12 text-red-200 border-red-400/20',
    'Água': 'bg-sky-500/12 text-sky-200 border-sky-400/20',
    'Elétrico': 'bg-yellow-500/12 text-yellow-200 border-yellow-400/20',
    'Planta': 'bg-emerald-500/12 text-emerald-200 border-emerald-400/20',
    'Gelo': 'bg-cyan-500/12 text-cyan-200 border-cyan-400/20',
    'Lutador': 'bg-orange-500/12 text-orange-200 border-orange-400/20',
    'Veneno': 'bg-violet-500/12 text-violet-200 border-violet-400/20',
    'Venenoso': 'bg-violet-500/12 text-violet-200 border-violet-400/20',
    'Terra': 'bg-amber-500/12 text-amber-200 border-amber-400/20',
    'Terrestre': 'bg-amber-500/12 text-amber-200 border-amber-400/20',
    'Voador': 'bg-blue-500/12 text-blue-200 border-blue-400/20',
    'Psíquico': 'bg-fuchsia-500/12 text-fuchsia-200 border-fuchsia-400/20',
    'Inseto': 'bg-lime-500/12 text-lime-200 border-lime-400/20',
    'Rocha': 'bg-stone-500/12 text-stone-200 border-stone-400/20',
    'Pedra': 'bg-stone-500/12 text-stone-200 border-stone-400/20',
    'Fantasma': 'bg-purple-500/12 text-purple-200 border-purple-400/20',
    'Dragão': 'bg-indigo-500/12 text-indigo-200 border-indigo-400/20',
    'Noturno': 'bg-slate-500/20 text-slate-200 border-slate-400/20',
    'Sombrio': 'bg-slate-500/20 text-slate-200 border-slate-400/20',
    'Aço': 'bg-slate-400/12 text-slate-100 border-slate-300/20',
    'Metal': 'bg-slate-400/12 text-slate-100 border-slate-300/20',
    'Metálico': 'bg-slate-400/12 text-slate-100 border-slate-300/20',
    'Fada': 'bg-pink-500/12 text-pink-200 border-pink-400/20',
  };

  return typeColors[type] || 'bg-slate-500/12 text-slate-200 border-slate-400/20';
};
