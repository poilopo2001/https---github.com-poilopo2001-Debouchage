import { problemCategories } from '@/data/problems'
import { interventionCategories } from '@/data/interventions'
import { CityData } from '@/data/cities-data'
import Link from 'next/link'

const regions = [
  {
    name: 'Luxembourg-Ville et environs',
    cities: ['Luxembourg-Ville', 'Bertrange', 'Strassen', 'Hesperange', 'Niederanven', 'Sandweiler', 'Walferdange', 'Steinsel', 'Lorentzweiler', 'Senningerberg', 'Findel']
  },
  {
    name: 'Sud du Luxembourg',
    cities: ['Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Sanem', 'Mondercange', 'Käerjeng', 'Schifflange', 'Rumelange', 'Kayl', 'Bettembourg', 'Mondorf-les-Bains']
  },
  {
    name: 'Nord du Luxembourg',
    cities: ['Diekirch', 'Ettelbruck', 'Wiltz', 'Clervaux', 'Vianden', 'Mersch', 'Bissen', 'Colmar-Berg', 'Hosingen', 'Bourscheid']
  },
  {
    name: 'Est du Luxembourg',
    cities: ['Echternach', 'Rosport', 'Mompach', 'Berdorf', 'Beaufort', 'Larochette', 'Medernach', 'Waldbillig']
  },
  {
    name: 'Ouest du Luxembourg',
    cities: ['Arlon', 'Pétange', 'Rodange', 'Bascharage', 'Clemency', 'Steinfort', 'Hobscheid', 'Septfontaines']
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Debouchage Luxembourg</h3>
            <p className="text-gray-400 mb-6">
              Service professionnel de débouchage disponible 24/7 pour tous vos besoins
              d'urgence. Intervention rapide et efficace garantie dans tout le Luxembourg.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <a href="tel:+352661297770" className="text-gray-300 hover:text-white transition-colors">
                  +352 661 297 770
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div className="text-gray-300">
                  10A Rue du Puits<br />
                  2355 Bonnevoie-Sud<br />
                  Luxembourg<br />
                  <span className="text-sm text-gray-400">Hébergé chez Paladium<br />
                  Équipe en déplacement dans tout le Luxembourg</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕒</span>
                <span className="text-gray-300">
                  Disponible 24h/24 et 7j/7
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/zones-intervention" className="text-gray-400 hover:text-white transition-colors">
                  Zones d'intervention
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-gray-400 hover:text-white transition-colors">
                  Devis Gratuit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {problemCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/problemes/${category.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Interventions */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Types d'Intervention</h3>
            <ul className="space-y-3">
              {interventionCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/interventions/${category.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regions and Cities */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Nos Zones d'Intervention</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">{region.name}</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {region.cities.map((city, cityIndex) => (
                    <Link
                      key={cityIndex}
                      href={`/zones-intervention/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm truncate"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-xl font-bold">4.9/5</div>
              <div className="text-gray-400 text-sm">Note Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛠️</div>
              <div className="text-xl font-bold">15+ ans</div>
              <div className="text-gray-400 text-sm">d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-xl font-bold">2H</div>
              <div className="text-gray-400 text-sm">Délai d'Intervention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-xl font-bold">2000+</div>
              <div className="text-gray-400 text-sm">Clients Satisfaits</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} Debouchage Luxembourg. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
