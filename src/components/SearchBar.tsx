'use client';

import { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  action?: string;
  inputName?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = 'Buscar...',
  action,
  inputName = 'q',
  defaultValue = '',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    if (onSearch) {
      e.preventDefault();
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} action={onSearch ? undefined : action} className="flex gap-3 max-w-xl mx-auto">
      <div className="flex-1 relative">
        <input
          type="text"
          name={inputName}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-5 py-3.5 rounded-2xl border border-[rgba(0,212,255,0.18)] bg-[rgba(18,24,38,0.96)] text-white placeholder:text-[#6f7f99] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/40 shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
        />
        <svg className="absolute right-4 top-4 h-5 w-5 text-[#6f7f99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button type="submit" className="esports-button min-w-[120px]">
        Buscar
      </button>
    </form>
  );
}
