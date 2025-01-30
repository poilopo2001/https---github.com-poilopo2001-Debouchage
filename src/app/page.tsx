import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CoverageArea from '@/components/CoverageArea'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Debouchage Canalisation Luxembourg | Depannage Jour et Nuit',
  description: 'Service professionnel de débouchage de canalisations au Luxembourg. Intervention rapide 24h/24, 7j/7. Équipe expérimentée, devis gratuit et prix transparents. ☎️ +352 661 297 770'
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CoverageArea />
      <Testimonials />
    </main>
  )
}
