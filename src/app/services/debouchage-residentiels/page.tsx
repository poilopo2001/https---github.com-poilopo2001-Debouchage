import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { serviceCategories } from '@/data/services'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Services de Débouchage Résidentiel Luxembourg | Solutions Complètes',
  description: 'Services professionnels de débouchage pour tous types d\'habitations au Luxembourg : maisons, appartements, villas et studios. Intervention rapide 24/7. ☎️ +352 661 297 770',
  keywords: 'débouchage résidentiel, débouchage maison, débouchage appartement, débouchage villa, débouchage studio, plombier luxembourg, canalisation bouchée',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/debouchage-residentiels',
  },
}

// Récupérer les services pour particuliers
const particuliersCategory = serviceCategories.find(cat => cat.id === 'particuliers')
const residentialServices = particuliersCategory ? particuliersCategory.services.filter(
  service => ['maison', 'appartement', 'villa', 'studio'].includes(service.id)
) : []

export default function DebouchageResidentielsPage() {
  const faqItems = [
    {
      question: "Quels sont les signes indiquant un problème de canalisation dans une habitation ?",
      answer: "Les signes courants incluent : évacuation lente, bruits de gargouillement, mauvaises odeurs, refoulement d'eau, augmentation des factures d'eau, et présence d'humidité ou de moisissures sur les murs."
    },
    {
      question: "Quelle est la différence entre le débouchage d'une maison et d'un appartement ?",
      answer: "Le débouchage d'une maison implique souvent des systèmes de canalisations plus étendus et peut nécessiter l'accès aux regards extérieurs. Pour un appartement, l'intervention est généralement plus ciblée mais peut nécessiter une coordination avec la copropriété pour les parties communes."
    },
    {
      question: "Combien de temps prend une intervention de débouchage résidentiel ?",
      answer: "La durée varie selon la complexité du problème, mais la plupart des interventions sont résolues en 1 à 2 heures. Les obstructions plus sévères peuvent nécessiter jusqu'à 4 heures d'intervention."
    },
    {
      question: "Vos services de débouchage résidentiel sont-ils disponibles en urgence ?",
      answer: "Oui, nous proposons un service d'intervention d'urgence 24h/24 et 7j/7 pour tous les types d'habitations au Luxembourg. Notre équipe peut généralement intervenir dans l'heure suivant votre appel."
    },
    {
      question: "Quelles méthodes utilisez-vous pour le débouchage résidentiel ?",
      answer: "Nous utilisons plusieurs techniques selon la situation : le furet manuel ou électrique pour les obstructions localisées, l'hydrocurage à haute pression pour les canalisations plus importantes, et des caméras d'inspection pour diagnostiquer les problèmes complexes."
    },
    {
      question: "Proposez-vous des solutions préventives pour éviter les bouchons dans les habitations ?",
      answer: "Oui, nous recommandons un entretien régulier des canalisations (tous les 12 à 18 mois) et nous proposons des conseils personnalisés pour prévenir les obstructions selon votre type d'habitation et vos habitudes d'utilisation."
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
            "description": "Services professionnels de débouchage pour tous types d'habitations au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/debouchage-residentiels",
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
                <span>🏡</span>
                <span>🏢</span>
                <span>🏘️</span>
                <span>🛏️</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Services de Débouchage Résidentiel
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Solutions professionnelles pour tous types d'habitations au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Services de Débouchage pour Tous Types d'Habitations</h2>
                <p className="mb-8">
                  Notre équipe de plombiers professionnels intervient dans tous les types de logements au Luxembourg pour résoudre vos problèmes de canalisations bouchées. Que vous habitiez dans une maison individuelle, un appartement, une villa luxueuse ou un studio, nous disposons des compétences et de l'équipement nécessaires pour intervenir efficacement et rapidement.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {residentialServices.map(service => (
                    <div key={service.id} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-4xl mb-4">
                        {service.icon || '🔧'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="mb-4">{service.shortDescription}</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {service.id === 'maison' && (
                          <>
                            <li>Débouchage de tous types de canalisations</li>
                            <li>Intervention sur les regards extérieurs</li>
                            <li>Traitement des canalisations enterrées</li>
                          </>
                        )}
                        {service.id === 'appartement' && (
                          <>
                            <li>Solutions adaptées aux immeubles collectifs</li>
                            <li>Coordination avec les syndics si nécessaire</li>
                            <li>Interventions discrètes et propres</li>
                          </>
                        )}
                        {service.id === 'villa' && (
                          <>
                            <li>Traitement des systèmes complexes</li>
                            <li>Entretien des fosses septiques</li>
                            <li>Solutions pour grandes propriétés</li>
                          </>
                        )}
                        {service.id === 'studio' && (
                          <>
                            <li>Interventions rapides et efficaces</li>
                            <li>Solutions pour espaces restreints</li>
                            <li>Techniques adaptées aux petites canalisations</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Problèmes Courants par Type d'Habitation</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Maisons Individuelles</h3>
                  <p className="mb-4">
                    Les maisons individuelles présentent souvent des problèmes spécifiques comme l'obstruction des canalisations extérieures, les racines d'arbres qui pénètrent dans les tuyaux, ou les problèmes de fosses septiques. Notre équipe dispose de l'équipement spécialisé nécessaire pour traiter ces situations particulières.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Appartements</h3>
                  <p className="mb-4">
                    Dans les appartements, les problèmes les plus fréquents concernent les canalisations communes et les colonnes d'évacuation partagées. Nous travaillons en coordination avec les syndics de copropriété lorsque nécessaire et intervenons de manière à minimiser les désagréments pour les autres résidents.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Villas et Grandes Propriétés</h3>
                  <p className="mb-4">
                    Les villas disposent souvent de systèmes de plomberie plus complexes avec plusieurs salles de bains, cuisines et parfois des équipements spécifiques comme des piscines ou des systèmes d'irrigation. Notre expertise nous permet de gérer efficacement ces installations sophistiquées.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Studios et Petits Espaces</h3>
                  <p className="mb-4">
                    Les studios nécessitent une approche particulière en raison de l'espace limité. Nos techniciens utilisent des équipements adaptés pour intervenir efficacement dans ces configurations, en veillant à minimiser les perturbations dans votre espace de vie.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Approche du Débouchage Résidentiel</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Diagnostic Précis</h3>
                    <p>Nous utilisons des caméras d'inspection pour localiser exactement l'obstruction et déterminer sa nature avant toute intervention.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Intervention Adaptée</h3>
                    <p>Nous sélectionnons la technique la plus appropriée selon le type de canalisation et la nature du bouchon.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Prévention</h3>
                    <p>Nous vous conseillons sur les bonnes pratiques pour éviter les futurs problèmes d'obstruction.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Techniques Utilisées</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Débouchage Mécanique</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Furet manuel pour les obstructions légères</li>
                      <li>Furet électrique pour les bouchons tenaces</li>
                      <li>Nettoyage des siphons et des regards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hydrocurage</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nettoyage à haute pression des canalisations</li>
                      <li>Élimination des dépôts et des graisses</li>
                      <li>Solution efficace pour les longues canalisations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Intervention rapide 24h/24 et 7j/7
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Techniciens certifiés et expérimentés
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Équipement professionnel de pointe
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Tarifs transparents sans surprise
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Garantie sur toutes nos interventions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Solutions respectueuses de l'environnement
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Questions Fréquentes sur le Débouchage Résidentiel</h2>
                <div className="space-y-6 mb-12">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Zones d'Intervention</h2>
                <p className="mb-8">
                  Nous intervenons dans tout le Luxembourg pour vos besoins de débouchage résidentiel, notamment à Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile peut généralement être sur place dans l'heure suivant votre appel pour les situations d'urgence.
                </p>
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
