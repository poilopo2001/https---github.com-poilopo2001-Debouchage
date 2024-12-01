'use client'

import Link from 'next/link'

const luxembourgRegions = [
  {
    name: 'Luxembourg-Ville et Environs',
    cities: [
      'Luxembourg-Ville', 'Bertrange', 'Strassen', 'Hesperange', 
      'Niederanven', 'Sandweiler', 'Walferdange', 'Steinsel', 
      'Lorentzweiler', 'Senningerberg', 'Findel'
    ]
  },
  {
    name: 'Sud du Luxembourg',
    cities: [
      'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Sanem', 
      'Mondercange', 'Käerjeng', 'Schifflange', 'Rumelange', 
      'Kayl', 'Bettembourg', 'Mondorf-les-Bains'
    ]
  },
  {
    name: 'Nord du Luxembourg',
    cities: [
      'Diekirch', 'Ettelbruck', 'Wiltz', 'Clervaux', 'Vianden', 
      'Mersch', 'Bissen', 'Colmar-Berg', 'Hosingen', 'Bourscheid'
    ]
  },
  {
    name: 'Est du Luxembourg',
    cities: [
      'Echternach', 'Rosport', 'Mompach', 'Berdorf', 'Beaufort', 
      'Larochette', 'Medernach', 'Waldbillig'
    ]
  },
  {
    name: 'Ouest du Luxembourg',
    cities: [
      'Arlon', 'Pétange', 'Rodange', 'Bascharage', 'Clemency', 
      'Steinfort', 'Hobscheid', 'Septfontaines'
    ]
  }
]

interface CoverageAreaProps {
  fullPage?: boolean
}

export default function CoverageArea({ fullPage = false }: CoverageAreaProps) {
  return (
    <section 
      id="zones-intervention" 
      className={`py-20 ${fullPage ? 'min-h-screen' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h1 className="section-title">
          {fullPage ? 'Nos Zones d\'Intervention Détaillées' : 'Nos Zones d\'Intervention'}
        </h1>
        <p className="section-description mb-16">
          Nous couvrons l'ensemble du Grand-Duché de Luxembourg et ses environs
        </p>
        
        <div className="space-y-12">
          {luxembourgRegions.map((region, regionIndex) => (
            <div key={regionIndex} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                {region.name}
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {region.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>
                    <Link 
                      href={`/zones-intervention/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Votre ville n'est pas listée ? 
            <br />
            Contactez-nous pour vérifier notre couverture !
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
