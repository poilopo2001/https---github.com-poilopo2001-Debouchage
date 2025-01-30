import MainLayout from '@/components/layouts/MainLayout'
import { interventionCategories } from '@/data/interventions'
import CategoryCard from '@/components/ui/CategoryCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intervention Debouchage Rapide Luxembourg | Service 24h/24',
  description: 'Besoin d\'une intervention rapide pour débouchage au Luxembourg ? Notre équipe professionnelle intervient en urgence avec le matériel adapté. Devis gratuit ☎️ +352 661 297 770'
}

export default function InterventionsPage() {
  return (
    <MainLayout
      hero={{
        title: 'Nos Interventions',
        description:
          'Nous proposons une large gamme d\'interventions adaptées à tous types de problèmes de plomberie et d\'assainissement. Découvrez nos différentes solutions ci-dessous.',
        className: 'pb-32',
      }}
    >
      <section className="relative -mt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-4">
              Quel est votre intervention ?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              Sélectionnez la catégorie qui correspond à votre situation pour découvrir nos solutions adaptées.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interventionCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.name}
                  description={category.description}
                  href={`/interventions/${category.slug}`}
                  icon={category.interventions[0]?.icon || '🔧'}
                />
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Besoin d'une intervention immédiate ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe de professionnels est disponible 24/7 pour intervenir rapidement sur toutes vos demandes d'interventions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Demander un devis gratuit
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
