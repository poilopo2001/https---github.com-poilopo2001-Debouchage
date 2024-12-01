import { Metadata } from 'next'
import { problemCategories } from '@/data/problems'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import CategoryCard from '@/components/ui/CategoryCard'

export const metadata: Metadata = {
  title: 'Problèmes de Plomberie Luxembourg | Solutions Rapides',
  description: 'Découvrez nos solutions pour tous types de problèmes de plomberie au Luxembourg. Intervention rapide 24/7, expertise professionnelle. ☎️ +352 621 469 018'
}

export default function ProblemesPage() {
  return (
    <MainLayout
      hero={{
        title: 'Problèmes de Plomberie',
        description:
          'Nous intervenons sur tous types de problèmes de plomberie et d\'assainissement. Identifiez votre problème ci-dessous pour une solution adaptée.',
        className: 'pb-32',
      }}
    >
      <section className="relative -mt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-4">
              Quel est votre problème ?
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              Sélectionnez la catégorie qui correspond à votre situation pour découvrir nos solutions adaptées.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.name}
                  description={category.description}
                  href={`/problemes/${category.slug}`}
                  icon={category.problems[0]?.icon || '🔧'}
                />
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Besoin d'une intervention immédiate ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe de professionnels est disponible 24/7 pour résoudre rapidement tous vos problèmes de plomberie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+352661297770"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    <span className="mr-2">📞</span>
                    Appeler maintenant
                  </a>
                  <a
                    href="/devis"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
                  >
                    Devis gratuit
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
