import { getInterventionBySlug, getInterventionCategoryBySlug, interventionCategories } from '@/data/interventions'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: {
    category: string
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const intervention = getInterventionBySlug(params.slug)
  if (!intervention) return {}

  return {
    title: `${intervention.name} | Services de Débouchage Professionnels`,
    description: intervention.shortDescription,
  }
}

export async function generateStaticParams() {
  return interventionCategories.flatMap((category) =>
    category.interventions.map((intervention) => ({
      category: category.slug,
      slug: intervention.slug,
    }))
  )
}

export default function InterventionPage({ params }: Props) {
  const category = getInterventionCategoryBySlug(params.category)
  const intervention = getInterventionBySlug(params.slug)

  if (!category || !intervention) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-8 text-center">
                {intervention.icon || '🔧'}
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                {intervention.name}
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                {intervention.shortDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Description de l'Intervention</h2>
                <p className="mb-8">
                  {intervention.fullDescription || `Notre équipe est spécialisée dans ${intervention.name.toLowerCase()}. 
                  Nous intervenons rapidement avec des solutions adaptées à votre situation spécifique.`}
                </p>

                <h2 className="text-2xl font-bold mb-6">Notre Approche</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Diagnostic</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Évaluation précise de la situation</li>
                      <li>Inspection détaillée des canalisations</li>
                      <li>Identification des solutions optimales</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Intervention</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Utilisation d'équipements professionnels</li>
                      <li>Techniques spécialisées et efficaces</li>
                      <li>Résultats garantis et durables</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                    <p>Équipe qualifiée et expérimentée dans les interventions spécialisées</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Disponibilité</h3>
                    <p>Service d'urgence disponible 24/7 pour vos besoins</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Qualité</h3>
                    <p>Équipements modernes et techniques avancées</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold mb-6">Nos Engagements</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Intervention rapide et efficace
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Solutions durables garanties
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Devis transparent et détaillé
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Respect des normes et standards
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Demander un Devis Gratuit
                </a>
                <p className="mt-4 text-gray-600">
                  Réponse rapide garantie sous 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
