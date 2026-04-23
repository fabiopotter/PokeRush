import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgba(0,212,255,0.12)] bg-[rgba(8,12,22,0.88)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-5 rounded-[42px] bg-[radial-gradient(circle_at_24%_34%,rgba(255,0,0,0.08),transparent_18%),radial-gradient(circle_at_72%_50%,rgba(0,212,255,0.14),transparent_38%)] blur-2xl" />
            <BrandLogo href="/" compact className="relative" />
            <p className="mt-5 max-w-md text-sm leading-7 text-[#A0AEC0]">
              O PokeRush Brasil é um portal de conteúdo Pokémon com foco em notícias, guias, Pokédex e descoberta rápida.
              Tudo em uma interface mais intensa, moderna e conectada ao universo competitivo e editorial da marca.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8be9ff]">Navegação</h4>
            <ul className="space-y-3">
              {[
                ['/', 'Início'],
                ['/guias', 'Guias'],
                ['/pokedex', 'Pokédex'],
                ['/jogos', 'Jogos'],
                ['/noticias', 'Notícias'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#A0AEC0] transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8be9ff]">Destaques</h4>
            <ul className="space-y-3 text-sm text-[#A0AEC0]">
              <li>Últimas notícias do universo Pokémon</li>
              <li>Guias para iniciantes e veteranos</li>
              <li>Pokédex nacional com filtros por tipo</li>
              <li>Páginas de jogos com interlinking editorial</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(0,212,255,0.1)] pt-8 text-center">
          <p className="text-sm text-[#6f7f99]">
            © 2026 PokeRush Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
