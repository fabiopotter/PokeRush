import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">PokeRush</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Seu hub de conteúdo em português sobre Pokémon. Notícias, guias e Pokédex para todos os treinadores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social/Extra */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Conecte-se</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Siga-nos para as últimas novidades do mundo Pokémon.
            </p>
            {/* Placeholder para ícones sociais futuros */}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 PokeRush. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}