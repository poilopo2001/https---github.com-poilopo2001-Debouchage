import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecentCall from '@/components/RecentCall'

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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <RecentCall />
      </body>
    </html>
  )
}
