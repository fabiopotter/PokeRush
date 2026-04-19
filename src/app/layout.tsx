import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PokeRush - Hub de Conteúdo Pokémon em Português",
    template: "%s | PokeRush"
  },
  description: "Notícias, guias e Pokédex sobre Pokémon em português. Seu portal completo para o mundo dos monstros de bolso.",
  keywords: ["Pokémon", "guias", "notícias", "Pokédex", "jogos", "brasil"],
  authors: [{ name: "PokeRush" }],
  creator: "PokeRush",
  publisher: "PokeRush",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pokerush.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PokeRush - Hub de Conteúdo Pokémon em Português",
    description: "Notícias, guias e Pokédex sobre Pokémon em português. Seu portal completo para o mundo dos monstros de bolso.",
    url: "https://pokerush.com.br",
    siteName: "PokeRush",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "PokeRush - Hub de Conteúdo Pokémon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PokeRush - Hub de Conteúdo Pokémon em Português",
    description: "Notícias, guias e Pokédex sobre Pokémon em português. Seu portal completo para o mundo dos monstros de bolso.",
    images: ["/images/og-default.jpg"],
    creator: "@pokerush",
    site: "@pokerush",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
      <body className="min-h-full flex flex-col bg-gray-50">
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
