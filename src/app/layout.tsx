import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'PokeRush Brasil - Portal Pokémon em Português',
    template: '%s | PokeRush Brasil'
  },
  description: 'Notícias, guias, jogos e Pokédex do universo Pokémon em português do Brasil. Um portal completo com identidade premium e navegação moderna.',
  keywords: ['Pokémon', 'guias', 'notícias', 'Pokédex', 'jogos', 'Brasil', 'PokeRush'],
  authors: [{ name: 'PokeRush Brasil' }],
  creator: 'PokeRush Brasil',
  publisher: 'PokeRush Brasil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pokerush.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PokeRush Brasil - Portal Pokémon em Português',
    description: 'Notícias, guias, jogos e Pokédex do universo Pokémon em português do Brasil. Um portal completo com identidade premium e navegação moderna.',
    url: 'https://pokerush.com.br',
    siteName: 'PokeRush Brasil',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/pokerush-brasil-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Logo do PokeRush Brasil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PokeRush Brasil - Portal Pokémon em Português',
    description: 'Notícias, guias, jogos e Pokédex do universo Pokémon em português do Brasil. Um portal completo com identidade premium e navegação moderna.',
    images: ['/images/brand/pokerush-brasil-logo.png'],
    creator: '@pokerush',
    site: '@pokerush',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white">
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
