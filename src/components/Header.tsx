import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

const navigationItems = [
  ['/', 'Início'],
  ['/guias', 'Guias'],
  ['/pokedex', 'Pokédex'],
  ['/jogos', 'Jogos'],
  ['/noticias', 'Notícias'],
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(0,212,255,0.16)]" />
      <div className="absolute inset-x-[10%] bottom-0 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(0,212,255,0.9),rgba(0,123,255,0.85),transparent)] blur-[1px]" />

      <div className="border-b border-[rgba(0,212,255,0.1)] bg-[linear-gradient(180deg,rgba(10,14,24,0.92),rgba(11,15,26,0.84))] backdrop-blur-2xl shadow-[0_18px_42px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[92px] items-center gap-4 lg:gap-6">
            <div className="relative shrink-0">
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-[40px] bg-[radial-gradient(circle_at_30%_40%,rgba(255,0,0,0.08),transparent_24%),radial-gradient(circle_at_72%_50%,rgba(0,212,255,0.16),transparent_42%)] blur-2xl" />
              <BrandLogo priority prominent />
            </div>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-2">
              {navigationItems.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative inline-flex items-center justify-center px-4 py-3 text-sm font-semibold tracking-[0.02em] text-[#A0AEC0]"
                >
                  <span className="relative z-10 transition-all duration-200 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.28)]">
                    {label}
                  </span>
                  <span className="absolute inset-x-2 inset-y-1 rounded-xl border border-transparent bg-transparent transition-all duration-200 group-hover:border-[rgba(0,212,255,0.16)] group-hover:bg-[rgba(0,212,255,0.06)]" />
                  <span className="absolute bottom-[7px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#00D4FF,#007BFF)] shadow-[0_0_10px_rgba(0,212,255,0.7)] transition-all duration-200 group-hover:w-[calc(100%-1.8rem)]" />
                </Link>
              ))}
            </nav>

            <form
              action="/pokedex"
              className="hidden xl:flex relative w-[260px] shrink-0"
            >
              <input
                type="text"
                name="q"
                placeholder="Buscar na Pokédex"
                className="w-full rounded-2xl border border-[rgba(0,212,255,0.16)] bg-[rgba(24,34,56,0.9)] py-3 pl-4 pr-11 text-sm text-white placeholder:text-[#6f7f99] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/35"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(0,212,255,0.16)] bg-[rgba(0,212,255,0.08)] text-[#8be9ff] hover:text-white hover:shadow-[0_0_14px_rgba(0,123,255,0.22)]"
                aria-label="Buscar na Pokédex"
              >
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <div className="ml-auto flex justify-end md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-[rgba(0,212,255,0.18)] bg-[linear-gradient(135deg,rgba(0,212,255,0.14),rgba(0,123,255,0.08))] p-2.5 text-[#8be9ff] shadow-[0_0_0_1px_rgba(0,212,255,0.08),0_10px_24px_rgba(0,0,0,0.22)] transition-all hover:scale-[1.03] hover:text-white hover:shadow-[0_0_0_1px_rgba(0,212,255,0.22),0_0_18px_rgba(0,123,255,0.26)]"
                aria-label="Abrir menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-3 border-t border-[rgba(0,212,255,0.1)] py-3 md:hidden">
            <form action="/pokedex" className="relative">
              <input
                type="text"
                name="q"
                placeholder="Buscar na Pokédex"
                className="w-full rounded-2xl border border-[rgba(0,212,255,0.16)] bg-[rgba(24,34,56,0.9)] py-3 pl-4 pr-11 text-sm text-white placeholder:text-[#6f7f99] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/35"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(0,212,255,0.16)] bg-[rgba(0,212,255,0.08)] text-[#8be9ff]"
                aria-label="Buscar na Pokédex"
              >
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            <nav className="flex flex-col space-y-1">
              {navigationItems.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[#A0AEC0] transition-all hover:bg-[rgba(0,212,255,0.07)] hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
