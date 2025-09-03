import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CoverageArea from '@/components/CoverageArea'

export const metadata = {
  title: '🗺️ Zones d\'Intervention | Couverture Complète Luxembourg',
  description: 'Découvrez l\'ensemble des villes et communes où nous intervenons au Luxembourg',
}

export default function ZonesInterventionPage() {
  return (
    <>
      <Header />
      <CoverageArea fullPage={true} />
      <Footer />
    </>
  )
}
