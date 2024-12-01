import { problemCategories } from '@/data/problems'
import MainLayout from '@/components/layouts/MainLayout'
import CategoryCard from '@/components/ui/CategoryCard'

export const metadata: Metadata = {
  title: 'Probleme de Canalisation Luxembourg ? Intervention Express 24/7',
  description: 'Débouchage WC, évier bouché, canalisation bouchée au Luxembourg ? Notre équipe intervient en urgence pour résoudre tous vos problèmes de plomberie. Devis gratuit ☎️ +352 621 469 018'
}

export default function ProblemsPage() {
  return (
    <MainLayout
      hero={{
        title: 'Solutions Professionnelles pour vos Problèmes de Plomberie',
        description: 'Experts en débouchage et plomberie, nous intervenons rapidement pour résoudre efficacement tous vos problèmes',
        image: '/images/plumbing-hero.jpg'
      }}
    >
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quel est votre problème ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sélectionnez la catégorie qui correspond à votre situation pour découvrir nos solutions adaptées
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.name}
                  description={category.description}
                  href={`/problemes/${category.slug}`}
                  icon="🔧"
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Besoin d'une intervention urgente ?
                </h3>
                <p className="text-gray-600 mb-8">
                  Notre équipe est disponible 24/7 pour répondre à vos urgences de plomberie
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contactez-nous
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
