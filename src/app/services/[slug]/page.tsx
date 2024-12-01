import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, serviceCategories } from '@/data/services'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  return {
    title: service ? `${service.name} | Services de Débouchage Professionnels` : 'Service non trouvé',
    description: service ? service.shortDescription : 'Service de débouchage spécialisé'
  }
}

export async function generateStaticParams() {
  const services = serviceCategories.flatMap(category => 
    category.services.map(service => ({ slug: service.slug }))
  )
  return services
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
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
                {service.icon || '🔧'}
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                {service.name}
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Description du Service</h2>
                <p className="mb-8">
                  {service.fullDescription || `Nous sommes spécialisés dans la résolution des problèmes de ${service.name.toLowerCase()}. 
                  Notre équipe d'experts intervient rapidement avec des solutions adaptées à votre situation spécifique.`}
                </p>

                <h2 className="text-2xl font-bold mb-6">Notre Approche</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Diagnostic</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Inspection approfondie</li>
                      <li>Identification précise des causes</li>
                      <li>Évaluation de l'étendue du problème</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solution</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Intervention rapide et efficace</li>
                      <li>Techniques professionnelles adaptées</li>
                      <li>Solutions durables</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                    <p>Plus de 15 ans d'expérience dans le domaine du débouchage</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
                    <p>Intervention d'urgence 24/7 sur toute la région</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Garantie</h3>
                    <p>Satisfaction client garantie et devis gratuit</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold mb-6">Nos Engagements</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Respect des normes environnementales
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Utilisation de produits écologiques
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Transparence des tarifs
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Service après-vente réactif
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
