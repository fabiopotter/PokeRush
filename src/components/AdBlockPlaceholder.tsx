interface AdBlockPlaceholderProps {
  position: string;
}

export default function AdBlockPlaceholder({ position }: AdBlockPlaceholderProps) {
  return (
    <div className="esports-panel-alt p-8 text-center">
      <div className="text-[#6f7f99]">
        <svg className="mx-auto h-8 w-8 mb-3 opacity-80 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <p className="text-sm font-semibold text-[#A0AEC0]">Espaço reservado para ativações</p>
        <p className="text-xs text-[#6f7f99] mt-1">Posição: {position}</p>
      </div>
    </div>
  );
}
