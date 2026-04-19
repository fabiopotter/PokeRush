import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              PokeRush
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Início
            </Link>
            <Link href="/guias" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Guias
            </Link>
            <Link href="/pokedex" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Pokédex
            </Link>
            <Link href="/jogos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Jogos
            </Link>
            <Link href="/noticias" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Notícias
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50 transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-3">
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Início
            </Link>
            <Link href="/guias" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Guias
            </Link>
            <Link href="/pokedex" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Pokédex
            </Link>
            <Link href="/jogos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Jogos
            </Link>
            <Link href="/noticias" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50">
              Notícias
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}