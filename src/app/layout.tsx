import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Lumina — Seu patrimônio intelectual, finalmente organizado',
    template: '%s | Lumina',
  },
  description: 'Conecte seu e-mail. A Lumina encontra todos os cursos que você comprou, cada certificado que conquistou e cada assinatura que esqueceu. A infraestrutura universal para identidade educacional.',
  keywords: ['educação', 'aprendizado', 'certificados', 'cursos', 'credenciais', 'desenvolvimento profissional'],
  authors: [{ name: 'Lumina' }],
  creator: 'Lumina',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://app.stamcom.com.br',
    title: 'Lumina — Seu patrimônio intelectual, finalmente organizado',
    description: 'A infraestrutura universal para identidade educacional e credenciais profissionais.',
    siteName: 'Lumina',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Lumina' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — Seu patrimônio intelectual, finalmente organizado',
    description: 'A infraestrutura universal para identidade educacional e credenciais profissionais.',
    images: ['/opengraph-image'],
  },
  metadataBase: new URL('https://app.stamcom.com.br'),
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0B] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
