import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { serviceCategories } from '@/data/services'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '🏠 Débouchage Maison & Résidentiel Luxembourg | Expert Privé',
  description: 'Spécialiste débouchage maison au Luxembourg. Solutions pour appartements, villas, studios. Plombier expert, intervention sous 2h. Devis gratuit ☎️ +352 661 297 770',
  keywords: 'débouchage maison luxembourg, débouchage appartement, plombier maison, canalisation bouchée maison, débouchage villa, débouchage studio, urgent',
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
                Débouchage Maison Luxembourg - Expert Résidentiel
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste débouchage maison, appartement, villa et studio au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Débouchage Maison et Logements Résidentiels au Luxembourg</h2>
                <p className="mb-6">
                  <strong>Spécialiste du débouchage maison au Luxembourg</strong>, notre équipe de plombiers professionnels intervient dans tous les types de logements pour résoudre vos problèmes de canalisations bouchées. Que vous ayez besoin d'un débouchage maison individuelle, appartement, villa ou studio, nous disposons des compétences et de l'équipement nécessaires pour intervenir efficacement sous 2h.
                </p>

                {/* Appel à l'action précoce */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">🚨</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800">Urgence Débouchage Maison ?</h3>
                      <div className="mt-2 text-red-700">
                        <p className="text-sm">
                          <strong>Intervention d'urgence 24h/24</strong> - Notre équipe peut être chez vous en moins de 2h partout au Luxembourg !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
                        >
                          📞 +352 661 297 770 - Appeler Maintenant
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

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
                            <li><strong>Débouchage maison complète</strong> : WC, éviers, douches</li>
                            <li><strong>Regards extérieurs</strong> : accès et débouchage des canalisations externes</li>
                            <li><strong>Canalisations enterrées</strong> : hydrocurage et diagnostic caméra</li>
                            <li><strong>Fosses septiques</strong> : vidange et entretien spécialisé</li>
                          </>
                        )}
                        {service.id === 'appartement' && (
                          <>
                            <li><strong>Débouchage appartement</strong> : solutions adaptées aux copropriétés</li>
                            <li><strong>Colonnes communes</strong> : intervention sur les parties partagées</li>
                            <li><strong>Coordination syndic</strong> : gestion administrative incluse</li>
                            <li><strong>Intervention discrète</strong> : respect du voisinage garanti</li>
                          </>
                        )}
                        {service.id === 'villa' && (
                          <>
                            <li><strong>Débouchage villa</strong> : systèmes de plomberie complexes</li>
                            <li><strong>Multiples salles de bain</strong> : intervention simultanée possible</li>
                            <li><strong>Espaces extérieurs</strong> : piscines, terrasses, jardins</li>
                            <li><strong>Maintenance préventive</strong> : contrats d'entretien disponibles</li>
                          </>
                        )}
                        {service.id === 'studio' && (
                          <>
                            <li><strong>Débouchage studio</strong> : intervention rapide en espace réduit</li>
                            <li><strong>Équipement compact</strong> : outils adaptés aux petits espaces</li>
                            <li><strong>Minimisation des nuisances</strong> : travail propre et efficace</li>
                            <li><strong>Tarifs étudiants</strong> : conditions préférentielles disponibles</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Problèmes Courants par Type d'Habitation</h2>
                
                <div className="mb-8 bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">🏡 Débouchage Maison Individuelle - Notre Spécialité</h3>
                  <p className="mb-4">
                    Le <strong>débouchage maison</strong> individuelle présente des défis spécifiques : canalisations extérieures obstruées, racines d'arbres dans les tuyaux, fosses septiques problématiques. Notre équipe spécialisée en débouchage maison Luxembourg dispose de l'équipement professionnel nécessaire pour traiter efficacement ces situations particulières.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Problèmes Courants :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• WC bouché - évacuation lente</li>
                        <li>• Évier cuisine obstrué</li>
                        <li>• Douche/baignoire qui se vide mal</li>
                        <li>• Regard extérieur bouché</li>
                        <li>• Odeurs de fosse septique</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Solutions Maison :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Hydrocurage haute pression</li>
                        <li>• Furet électrique professionnel</li>
                        <li>• Caméra d'inspection</li>
                        <li>• Vidange fosse septique</li>
                        <li>• Traitement racines d'arbres</li>
                      </ul>
                    </div>
                  </div>
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

                <h2 className="text-2xl font-bold mb-6">Notre Méthode Professionnelle de Débouchage Maison</h2>
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

                {/* Section tarifs transparents */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">💰 Tarifs Débouchage Maison Luxembourg</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Tarifs Indicatifs</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>Débouchage WC simple</span>
                          <span className="font-semibold">à partir de 80€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Débouchage évier/douche</span>
                          <span className="font-semibold">à partir de 70€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Hydrocurage maison</span>
                          <span className="font-semibold">à partir de 150€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Inspection caméra</span>
                          <span className="font-semibold">à partir de 120€</span>
                        </li>
                      </ul>
                      <p className="text-sm text-green-600 mt-3">
                        <strong>Devis gratuit</strong> - Pas de frais cachés
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Avantages Tarifaires</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ <strong>Devis gratuit</strong> et sans engagement</li>
                        <li>✓ <strong>Prix fixes</strong> annoncés avant intervention</li>
                        <li>✓ <strong>Pas de frais de déplacement</strong> au Luxembourg</li>
                        <li>✓ <strong>Remise 10%</strong> pour les seniors (+65 ans)</li>
                        <li>✓ <strong>Paiement en 3x</strong> sans frais (&gt;200€)</li>
                        <li>✓ <strong>Garantie 6 mois</strong> sur l'intervention</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">🏆 Pourquoi Nous Choisir pour Votre Débouchage Maison ?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">⚡</span>
                          <div>
                            <span className="font-semibold">Intervention rapide 24h/24 et 7j/7</span>
                            <p className="text-sm text-gray-600">Équipe disponible en permanence, sur place sous 2h</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">👨‍🔧</span>
                          <div>
                            <span className="font-semibold">Techniciens certifiés et expérimentés</span>
                            <p className="text-sm text-gray-600">15+ ans d'expérience, formation continue</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🔧</span>
                          <div>
                            <span className="font-semibold">Équipement professionnel de pointe</span>
                            <p className="text-sm text-gray-600">Hydrocureuse, caméras, furets électriques</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">💰</span>
                          <div>
                            <span className="font-semibold">Tarifs transparents sans surprise</span>
                            <p className="text-sm text-gray-600">Prix annoncés à l'avance, devis gratuit</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🛡️</span>
                          <div>
                            <span className="font-semibold">Garantie 6 mois sur toutes nos interventions</span>
                            <p className="text-sm text-gray-600">Assurance décennale incluse</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🌿</span>
                          <div>
                            <span className="font-semibold">Solutions respectueuses de l'environnement</span>
                            <p className="text-sm text-gray-600">Produits écologiques, récupération des déchets</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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

                <h2 className="text-2xl font-bold mb-6">Débouchage Maison dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service de <strong>débouchage maison Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Pour votre débouchage maison urgent, notre équipe mobile peut généralement être sur place dans l'heure suivant votre appel.
                </p>
              </div>

              {/* CTA Final optimisé */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">🚨 Besoin d'un Débouchage Maison Urgent ?</h2>
                <p className="text-lg mb-6">Notre équipe peut intervenir chez vous dans l'heure !</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+352661297770" 
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    📞 +352 661 297 770
                  </a>
                  <a 
                    href="/devis" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Devis Gratuit en Ligne
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Intervention sous 2h ✓ Devis gratuit ✓ Garantie 6 mois
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
