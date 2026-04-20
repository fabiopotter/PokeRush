// Utilitários para o projeto PokeRush

// Mapeamento de cores para tipos de Pokémon
export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    'Normal': 'bg-gray-100 text-gray-800',
    'Fogo': 'bg-red-100 text-red-800',
    'Água': 'bg-blue-100 text-blue-800',
    'Elétrico': 'bg-yellow-100 text-yellow-800',
    'Planta': 'bg-green-100 text-green-800',
    'Gelo': 'bg-cyan-100 text-cyan-800',
    'Lutador': 'bg-orange-100 text-orange-800',
    'Veneno': 'bg-purple-100 text-purple-800',
    'Terra': 'bg-amber-100 text-amber-800',
    'Voador': 'bg-indigo-100 text-indigo-800',
    'Psíquico': 'bg-pink-100 text-pink-800',
    'Inseto': 'bg-lime-100 text-lime-800',
    'Rocha': 'bg-stone-100 text-stone-800',
    'Fantasma': 'bg-violet-100 text-violet-800',
    'Dragão': 'bg-purple-100 text-purple-800',
    'Noturno': 'bg-gray-800 text-gray-100',
    'Aço': 'bg-slate-100 text-slate-800',
    'Fada': 'bg-rose-100 text-rose-800',
  };

  return typeColors[type] || 'bg-gray-100 text-gray-800';
};

// Outros utilitários podem ser adicionados aqui
