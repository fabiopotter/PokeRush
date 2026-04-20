import Image from 'next/image';
import Link from 'next/link';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
  link: string;
}

export default function PokemonCard({ name, image, types, link }: PokemonCardProps) {
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Fogo': 'bg-red-100 text-red-800 border-red-200',
      'Água': 'bg-blue-100 text-blue-800 border-blue-200',
      'Planta': 'bg-green-100 text-green-800 border-green-200',
      'Elétrico': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Psíquico': 'bg-purple-100 text-purple-800 border-purple-200',
      'Gelo': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Dragão': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Sombrio': 'bg-gray-100 text-gray-800 border-gray-200',
      'Fada': 'bg-pink-100 text-pink-800 border-pink-200',
      'Normal': 'bg-gray-50 text-gray-700 border-gray-200',
      'Lutador': 'bg-orange-100 text-orange-800 border-orange-200',
      'Venenoso': 'bg-violet-100 text-violet-800 border-violet-200',
      'Terrestre': 'bg-amber-100 text-amber-800 border-amber-200',
      'Voador': 'bg-sky-100 text-sky-800 border-sky-200',
      'Inseto': 'bg-lime-100 text-lime-800 border-lime-200',
      'Fantasma': 'bg-purple-100 text-purple-800 border-purple-200',
      'Pedra': 'bg-stone-100 text-stone-800 border-stone-200',
      'Metal': 'bg-slate-100 text-slate-800 border-slate-200',
    };

    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <Link href={link} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 p-5 text-center h-full">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <div className="flex justify-center gap-2 flex-wrap">
          {types.map((type) => (
            <span
              key={type}
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${getTypeColor(type)}`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
