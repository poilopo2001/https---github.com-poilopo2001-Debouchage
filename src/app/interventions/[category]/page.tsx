import { getInterventionCategoryBySlug, interventionCategories } from '@/data/interventions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'

interface Props {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getInterventionCategoryBySlug(params.category)
  if (!category) return {}

  return {
    title: `${category.name} | Débouchage Express`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return interventionCategories.map((category) => ({
    category: category.slug,
  }))
}

export default function InterventionCategoryPage({ params }: Props) {
  const category = getInterventionCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  return (
    <MainLayout
      hero={{
        title: category.name,
        description: category.description,
        className: 'pb-32'
      }}
    >
      <section className="relative -mt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {category.interventions.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.interventions.map((intervention) => (
                    <Link
                      key={intervention.id}
                      href={`/interventions/${category.slug}/${intervention.slug}`}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                      </div>

                      <div className="relative">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {intervention.icon || '🔧'}
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {intervention.name}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {intervention.shortDescription}
                        </p>
                        <div className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          Voir les détails
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
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
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Cette section est en cours de développement
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Notre équipe travaille actuellement sur le contenu de cette section. 
                    Pour toute demande urgente concernant {category.name.toLowerCase()}, 
                    n'hésitez pas à nous contacter directement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Nous Contacter
                    </a>
                    <a 
                      href="/interventions"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Retour aux interventions
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
