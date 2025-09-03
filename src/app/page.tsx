import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CoverageArea from '@/components/CoverageArea'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Débouchage Canalisation Luxembourg ⚡ Expert Plombier 24/7',
  description: 'Débouchage canalisation Luxembourg ✅ Intervention rapide 24h/24 pour WC, évier, douche bouchés. Plombier expert, devis gratuit ☎️ +352 661 297 770'
}

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* SEO Content Section pour "débouchage canalisation luxembourg" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Débouchage Canalisation Luxembourg : Votre Expert Plombier
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              <strong>Débouchage canalisation Luxembourg</strong> - nous sommes les spécialistes du débouchage de canalisations dans tout le Grand-Duché. 
              WC bouché, évier obstrué, douche qui ne s'évacue plus ? Notre équipe intervient en urgence 24h/24.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">🚰</div>
                <h3 className="text-xl font-semibold mb-3">Débouchage Canalisation</h3>
                <p className="text-gray-600">Expert en débouchage de toutes canalisations : WC, évier, douche, baignoire, lavabo. Solutions professionnelles au Luxembourg.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Intervention Rapide</h3>
                <p className="text-gray-600">Service d'urgence débouchage canalisation Luxembourg. Intervention garantie sous 2 heures, 7j/7 et 24h/24.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Plombier Expert</h3>
                <p className="text-gray-600">Équipe de plombiers professionnels spécialisés débouchage canalisation Luxembourg. Matériel professionnel et techniques avancées.</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Pourquoi Choisir Notre Service Débouchage Canalisation Luxembourg ?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> <strong>Débouchage canalisation Luxembourg</strong> depuis +10 ans</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Intervention d'urgence 24h/24 et 7j/7</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Devis gratuit pour tout débouchage canalisation</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Plombier expert certifié Luxembourg</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Matériel professionnel : furet, hydrocurage</li>
                  <li className="flex items-center"><span className="text-yellow-300 mr-2">✓</span> Tarifs transparents, pas de surprise</li>
                </ul>
              </div>
              <div className="mt-6">
                <a 
                  href="tel:+352661297770" 
                  className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  ☎️ +352 661 297 770 - Débouchage Canalisation Urgence
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <CoverageArea />
      <Testimonials />
    </main>
  )
}
