import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { serviceCategories } from '@/data/services'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '🍽️ Restaurant & Commerce | Plombier Professionnel Luxembourg',
  description: 'Spécialiste débouchage restaurant Luxembourg. Bac à graisse, cuisine pro, évacuations. Intervention urgente 2h. Devis gratuit ☎️ +352 661 297 770',
  keywords: 'débouchage restaurant luxembourg, plombier restaurant, bac à graisse bouché, cuisine professionnelle, évacuation restaurant, urgence restaurant',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/debouchage-commerciaux',
  },
}

// Récupérer les services commerciaux
const commerciauxCategory = serviceCategories.find(cat => cat.id === 'commerciaux')
const commercialServices = commerciauxCategory ? commerciauxCategory.services.filter(
  service => ['restaurant', 'hotel', 'commerce'].includes(service.id)
) : []

export default function DebouchageCommerciauxPage() {
  const faqItems = [
    {
      question: "Quels sont les signes indiquant un problème de canalisation dans un établissement commercial ?",
      answer: "Les signes courants incluent : évacuation lente, odeurs désagréables dans les locaux, refoulements d'eau, augmentation des factures d'eau, et problèmes récurrents avec les équipements sanitaires ou de cuisine."
    },
    {
      question: "Quelle est la différence entre le débouchage d'un restaurant et d'un hôtel ?",
      answer: "Le débouchage d'un restaurant se concentre principalement sur les systèmes de cuisine et les bacs à graisse, tandis que pour un hôtel, l'intervention couvre un système plus vaste incluant les chambres, les cuisines et les zones communes."
    },
    {
      question: "Combien de temps prend une intervention de débouchage commercial ?",
      answer: "La durée varie selon la complexité du problème et la taille de l'établissement. Une intervention standard prend entre 2 et 4 heures, mais les cas complexes peuvent nécessiter une journée complète."
    },
    {
      question: "Vos services de débouchage commercial sont-ils disponibles en urgence ?",
      answer: "Oui, nous proposons un service d'intervention d'urgence 24h/24 et 7j/7 pour tous les établissements commerciaux au Luxembourg. Notre équipe peut généralement intervenir dans l'heure pour minimiser l'impact sur votre activité."
    },
    {
      question: "Quelles méthodes utilisez-vous pour le débouchage commercial ?",
      answer: "Nous utilisons des équipements professionnels adaptés : hydrocureuse haute pression pour les canalisations importantes, nettoyage des bacs à graisse, inspection par caméra pour les diagnostics précis, et solutions spécifiques selon le type d'établissement."
    },
    {
      question: "Proposez-vous des contrats d'entretien pour les établissements commerciaux ?",
      answer: "Oui, nous proposons des contrats d'entretien préventif adaptés à chaque type d'établissement, incluant des visites régulières, le nettoyage des bacs à graisse, et des inspections périodiques des systèmes d'évacuation."
    }
  ]

  return (
    <>
      <Header />
      <Script
        id="local-business-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "Debouchage Luxembourg",
            "description": "Services professionnels de débouchage pour établissements commerciaux au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/debouchage-commerciaux",
            "telephone": "+352 661 297 770",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 Rue de Luxembourg",
              "addressLocality": "Luxembourg",
              "postalCode": "L-1234",
              "addressCountry": "LU",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.6116",
              "longitude": "6.1319",
            },
            "openingHours": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                "opens": "00:00",
                "closes": "23:59",
              },
            ],
            "areaServed": [
              {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "49.6116",
                  "longitude": "6.1319",
                },
                "geoRadius": "50000",
              },
            ],
            "priceRange": "€€",
          }),
        }}
      />
      
      <Script
        id="faq-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />

      <main>
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-8 text-center flex justify-center space-x-4">
                <span>🏢</span>
                <span>🍽️</span>
                <span>🏨</span>
                <span>🏪</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Débouchage Restaurant Luxembourg - Expert Commercial
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste débouchage restaurant, hôtel et commerce au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Débouchage Restaurant et Établissements Commerciaux Luxembourg</h2>
                <p className="mb-6">
                  <strong>Spécialiste du débouchage restaurant au Luxembourg</strong>, notre équipe de plombiers professionnels intervient dans tous les établissements commerciaux pour résoudre vos problèmes de canalisations. Que vous gériez un restaurant, hôtel ou commerce, nous disposons de l'équipement professionnel nécessaire pour intervenir rapidement sans interrompre votre activité.
                </p>

                {/* CTA Urgence Restaurant */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">🍽️</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800">Urgence Débouchage Restaurant ?</h3>
                      <div className="mt-2 text-red-700">
                        <p className="text-sm">
                          <strong>Intervention d'urgence 24h/24</strong> - Bac à graisse bouché ? Cuisine qui reflue ? Notre équipe peut intervenir sous 2h !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
                        >
                          📞 +352 661 297 770 - Urgence Restaurant
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {commercialServices.map(service => (
                    <div key={service.id} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-4xl mb-4">
                        {service.icon || '🔧'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="mb-4">{service.shortDescription}</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {service.id === 'restaurant' && (
                          <>
                            <li><strong>Bacs à graisse bouchés</strong> : vidange et débouchage d'urgence</li>
                            <li><strong>Évacuations cuisine</strong> : élimination des résidus alimentaires</li>
                            <li><strong>Plonge restaurant</strong> : débouchage éviers professionnels</li>
                            <li><strong>Contrat d'entretien</strong> : maintenance préventive régulière</li>
                          </>
                        )}
                        {service.id === 'hotel' && (
                          <>
                            <li><strong>Multiples points d'eau</strong> : chambres, suites, parties communes</li>
                            <li><strong>Intervention discrète</strong> : respect de la clientèle 24h/24</li>
                            <li><strong>Buanderies hôtels</strong> : systèmes d'évacuation industriels</li>
                            <li><strong>Spas et piscines</strong> : maintenance spécialisée</li>
                          </>
                        )}
                        {service.id === 'commerce' && (
                          <>
                            <li><strong>Sanitaires publics</strong> : WC et lavabos clients</li>
                            <li><strong>Centres commerciaux</strong> : évacuations communes</li>
                            <li><strong>Magasins et bureaux</strong> : solutions professionnelles</li>
                            <li><strong>Parkings couverts</strong> : évacuations pluviales</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Problèmes Courants par Type d'Établissement</h2>
                
                <div className="mb-8 bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">🍽️ Débouchage Restaurant - Notre Spécialité</h3>
                  <p className="mb-4">
                    Le <strong>débouchage restaurant</strong> présente des défis uniques : accumulation de graisses, bacs à graisse saturés, évacuations de cuisine obstruées. Notre équipe spécialisée en débouchage restaurant Luxembourg intervient 24h/24 pour éviter toute interruption d'activité dans votre établissement.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">Problèmes Restaurant Fréquents :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bac à graisse bouché - odeurs</li>
                        <li>• Évier plonge restaurant obstrué</li>
                        <li>• Évacuation cuisine qui remonte</li>
                        <li>• Sol de cuisine inondé</li>
                        <li>• WC clients/personnel bouchés</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">Solutions Restaurant :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Vidange bac à graisse d'urgence</li>
                        <li>• Hydrocurage évacuations cuisine</li>
                        <li>• Débouchage haute pression</li>
                        <li>• Nettoyage préventif mensuel</li>
                        <li>• Contrat maintenance restaurant</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Hôtels et Établissements d'Hébergement</h3>
                  <p className="mb-4">
                    Les hôtels nécessitent une attention particulière en raison de leur utilisation intensive et continue. Nous intervenons discrètement pour maintenir le confort des clients, avec des solutions adaptées aux salles de bains multiples, buanderies et cuisines professionnelles.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Commerces et Centres Commerciaux</h3>
                  <p className="mb-4">
                    Les espaces commerciaux présentent des défis uniques avec leurs sanitaires publics et systèmes d'évacuation communs. Notre équipe assure l'entretien régulier et les interventions d'urgence pour maintenir vos installations en parfait état de fonctionnement.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Méthode Professionnelle de Débouchage Restaurant</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Diagnostic Professionnel</h3>
                    <p>Inspection vidéo des canalisations pour identifier précisément la nature et l'emplacement du problème.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Solutions Adaptées</h3>
                    <p>Utilisation d'équipements professionnels spécifiques selon le type d'établissement et de problème.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Maintenance Préventive</h3>
                    <p>Programmes d'entretien sur mesure pour prévenir les problèmes et optimiser les coûts.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Techniques Professionnelles</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hydrocurage Professionnel</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nettoyage haute pression adapté</li>
                      <li>Élimination des dépôts tenaces</li>
                      <li>Traitement des grandes canalisations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solutions Spécialisées</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nettoyage des bacs à graisse</li>
                      <li>Traitement des colonnes d'évacuation</li>
                      <li>Inspection par caméra</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Intervention rapide 24/7</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Équipement professionnel spécialisé</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Techniciens expérimentés</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Devis transparent sans surprise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Solutions durables garanties</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Contrats d'entretien personnalisés</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Débouchage Restaurant dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service de <strong>débouchage restaurant Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes. Pour votre urgence débouchage restaurant, notre équipe mobile peut généralement être sur place dans l'heure pour éviter toute fermeture de votre établissement.
                </p>
              </div>

              {/* CTA Final Restaurant */}
              <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">🍽️ Urgence Débouchage Restaurant ?</h2>
                <p className="text-lg mb-6">Ne fermez pas ! Notre équipe intervient sous 2h partout au Luxembourg</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+352661297770" 
                    className="inline-flex items-center justify-center bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    📞 +352 661 297 770
                  </a>
                  <a 
                    href="/devis" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    Devis Restaurant Gratuit
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Intervention sous 2h ✓ Spécialiste bac à graisse ✓ Pas d'interruption d'activité
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
