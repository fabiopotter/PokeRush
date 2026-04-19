interface AdBlockPlaceholderProps {
  position: string;
}

export default function AdBlockPlaceholder({ position }: AdBlockPlaceholderProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8 text-center shadow-sm">
      <div className="text-gray-400">
        <svg className="mx-auto h-8 w-8 mb-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p className="text-sm font-medium text-gray-500">Espaço reservado para anúncios</p>
        <p className="text-xs text-gray-400 mt-1">Posição: {position}</p>
      </div>
    </div>
  );
}