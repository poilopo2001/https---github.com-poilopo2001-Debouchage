import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CoverageArea from '@/components/CoverageArea'
import Testimonials from '@/components/Testimonials'
import RecentCall from '@/components/RecentCall'

export const metadata: Metadata = {
  title: 'Debouchage Canalisation Luxembourg | Depannage Jour et Nuit',
  description: 'Service professionnel de débouchage de canalisations au Luxembourg. Intervention rapide 24h/24, 7j/7. Équipe expérimentée, devis gratuit et prix transparents. ☎️ +352 621 469 018'
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CoverageArea />
      <Contact />
      <Footer />
      <RecentCall />
    </>
  )
}
