import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecentCall from '@/components/RecentCall'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service de Débouchage Professionnel',
  description: 'Service de débouchage disponible 24/7 pour tous vos besoins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <div className="hidden lg:block">
          <RecentCall />
        </div>
      </body>
    </html>
  )
}
