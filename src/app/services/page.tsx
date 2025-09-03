import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '💼 Services Spécialisés | Débouchage Professionnel Luxembourg',
  description: 'Services professionnels de débouchage au Luxembourg : résidentiel, commercial, industriel. Intervention rapide 24/7 pour tous vos problèmes de canalisations.'
}

// Services consolidés après optimisation SEO
const consolidatedServices = [
  {
    id: 'debouchage-residentiels',
    name: 'Débouchage Résidentiel',
    slug: 'debouchage-residentiels',
    description: 'Solutions complètes pour maisons, appartements, villas et studios',
    icon: '🏠',
    services: ['Débouchage Maison', 'Débouchage Appartement', 'Débouchage Villa', 'Débouchage Studio']
  },
  {
    id: 'debouchage-commerciaux', 
    name: 'Débouchage Commercial',
    slug: 'debouchage-commerciaux',
    description: 'Services professionnels pour restaurants, hôtels et commerces',
    icon: '🏢',
    services: ['Débouchage Restaurant', 'Débouchage Hôtel', 'Débouchage Commerce']
  },
  {
    id: 'techniques-hydrocurage',
    name: 'Techniques d\'Hydrocurage',
    slug: 'interventions/techniques-hydrocurage',
    description: 'Nettoyage haute pression et hydrocurage professionnel',
    icon: '💧',
    services: ['Hydrocurage', 'Hydrocurage Haute Pression', 'Nettoyage Canalisations']
  },
  {
    id: 'techniques-furet',
    name: 'Techniques de Furet',
    slug: 'interventions/techniques-furet', 
    description: 'Débouchage mécanique par furet électrique et manuel',
    icon: '🔧',
    services: ['Furet Électrique', 'Furet Manuel', 'Débouchage Mécanique']
  },
  {
    id: 'elimination-odeurs',
    name: 'Élimination des Odeurs',
    slug: 'problemes/elimination-odeurs',
    description: 'Traitement de tous problèmes d\'odeurs de canalisations',
    icon: '🦨',
    services: ['Odeurs Égouts', 'Odeurs Salle de Bain', 'Odeurs Cuisine', 'Odeurs Sous-Sol']
  },
  {
    id: 'debouchage-canalisations',
    name: 'Débouchage Canalisations',
    slug: 'problemes/debouchage-canalisations',
    description: 'Solutions pour tous types de canalisations bouchées',
    icon: '🚰',
    services: ['WC Bouché', 'Évier Bouché', 'Douche Bouchée', 'Baignoire Bouchée']
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Services de Débouchage Luxembourg
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Solutions professionnelles consolidées pour tous vos besoins de débouchage
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {consolidatedServices.map((service) => (
            <Link 
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Inclut :</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {service.services.map((subService, index) => (
                    <li key={index}>{subService}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* Section informations complémentaires */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Pourquoi Choisir Nos Services ?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Intervention Rapide</h3>
              <p className="text-sm text-gray-600">Disponible 24h/24 et 7j/7 dans tout le Luxembourg</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Solutions Complètes</h3>
              <p className="text-sm text-gray-600">Services consolidés pour une efficacité maximale</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Tarifs Transparents</h3>
              <p className="text-sm text-gray-600">Devis gratuit et prix fixes sans surprise</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="tel:+352661297770" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ☎️ +352 661 297 770
            </a>
            <p className="mt-2 text-sm text-gray-600">Intervention sous 2h partout au Luxembourg</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
