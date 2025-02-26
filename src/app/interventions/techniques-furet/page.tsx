import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { interventionCategories } from '@/data/interventions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Débouchage par Furet Luxembourg | Techniques Manuelles et Électriques',
  description: 'Services professionnels de débouchage par furet manuel et électrique au Luxembourg. Solutions efficaces pour tous types de canalisations. ☎️ +352 661 297 770',
  keywords: 'débouchage furet, furet électrique, furet manuel, débouchage canalisation, Luxembourg',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/interventions/techniques-furet',
  },
}

// Récupérer les interventions de furet
const mecaniquesCategory = interventionCategories.find(cat => cat.id === 'interventions-mecaniques')
const furetInterventions = mecaniquesCategory ? mecaniquesCategory.interventions.filter(
  intervention => ['debouchage-furet-electrique', 'debouchage-furet-manuel'].includes(intervention.id)
) : []

export default function TechniquesFuretPage() {
  const faqItems = [
    {
      question: "Qu'est-ce qu'un furet de plomberie et comment fonctionne-t-il ?",
      answer: "Un furet de plomberie est un outil flexible composé d'une spirale métallique avec une tête spécifique, conçu pour être inséré dans les canalisations afin d'éliminer les obstructions. Il fonctionne en pénétrant dans la canalisation jusqu'au bouchon, puis en le désagrégeant par rotation, permettant ainsi de rétablir l'écoulement normal."
    },
    {
      question: "Quelle est la différence entre un furet manuel et un furet électrique ?",
      answer: "Le furet manuel est actionné à la main et convient aux obstructions légères dans les petites canalisations (éviers, lavabos). Le furet électrique, motorisé, offre une puissance de rotation supérieure pour les bouchons tenaces et les canalisations plus grandes (toilettes, colonnes d'évacuation), avec une portée généralement plus importante."
    },
    {
      question: "Pour quels types de bouchons le débouchage par furet est-il efficace ?",
      answer: "Le débouchage par furet est particulièrement efficace pour les obstructions causées par des accumulations de cheveux, de papier, de résidus alimentaires, de petits objets et de dépôts graisseux modérés. Il est moins adapté aux racines d'arbres et aux dépôts calcaires très durcis, qui nécessitent généralement un hydrocurage."
    },
    {
      question: "Le furet peut-il endommager mes canalisations ?",
      answer: "Utilisé par des professionnels qualifiés, le furet présente peu de risques pour vos canalisations. Nos techniciens sélectionnent le type de furet et la tête appropriés en fonction du matériau de vos conduites (PVC, fonte, cuivre) et de la nature du bouchon pour éviter tout dommage."
    },
    {
      question: "Quelle est la portée maximale d'un furet de plomberie ?",
      answer: "Un furet manuel a généralement une portée de 3 à 5 mètres, suffisante pour la plupart des obstructions domestiques. Un furet électrique professionnel peut atteindre jusqu'à 30 mètres, permettant d'intervenir sur des canalisations plus longues comme les conduites principales ou les colonnes d'évacuation d'immeubles."
    },
    {
      question: "Combien de temps dure une intervention de débouchage par furet ?",
      answer: "La durée d'une intervention standard de débouchage par furet varie de 30 minutes à 2 heures, selon la complexité de l'obstruction et l'accessibilité de la canalisation. Les cas simples comme un évier bouché peuvent être résolus en moins d'une heure, tandis que les situations plus complexes peuvent nécessiter plus de temps."
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
            "description": "Services professionnels de débouchage par furet manuel et électrique au Luxembourg",
            "url": "https://debouchage-luxembourg.com/interventions/techniques-furet",
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
                <span>⚡</span>
                <span>🔧</span>
                <span>🌀</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Techniques de Débouchage par Furet
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Solutions manuelles et électriques pour éliminer efficacement les obstructions
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Services de Débouchage par Furet</h2>
                <p className="mb-8">
                  Notre équipe de techniciens spécialisés utilise des furets de plomberie professionnels pour éliminer efficacement les obstructions dans vos canalisations. Cette technique mécanique permet d'atteindre et de désagréger les bouchons, même dans les conduites difficiles d'accès, sans endommager vos installations.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {furetInterventions.map(intervention => (
                    <div key={intervention.id} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-4xl mb-4">
                        {intervention.icon || '🔧'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{intervention.name}</h3>
                      <p className="mb-4">{intervention.shortDescription}</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {intervention.id === 'debouchage-furet-manuel' && (
                          <>
                            <li>Idéal pour les petites canalisations</li>
                            <li>Solution économique et efficace</li>
                            <li>Parfait pour les obstructions légères</li>
                          </>
                        )}
                        {intervention.id === 'debouchage-furet-electrique' && (
                          <>
                            <li>Puissance rotative supérieure</li>
                            <li>Pour les bouchons tenaces</li>
                            <li>Grande portée (jusqu'à 30m)</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Applications du Débouchage par Furet</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Débouchage des Éviers et Lavabos</h3>
                  <p className="mb-4">
                    Le furet est particulièrement efficace pour déboucher les éviers et lavabos obstrués par des résidus alimentaires, des savons solidifiés ou des accumulations de cheveux. Sa flexibilité lui permet de naviguer à travers les siphons et coudes des canalisations.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Débouchage des Toilettes</h3>
                  <p className="mb-4">
                    Pour les toilettes bouchées, le furet électrique avec sa tête spécifique permet d'atteindre et d'éliminer efficacement les obstructions causées par un excès de papier toilette ou de petits objets, sans endommager la cuvette ou les conduites.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Débouchage des Canalisations Principales</h3>
                  <p className="mb-4">
                    Les furets électriques professionnels à longue portée permettent d'intervenir sur les canalisations principales et les colonnes d'évacuation des immeubles, offrant une solution efficace pour les obstructions plus profondes dans le réseau.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Approche du Débouchage par Furet</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Diagnostic Précis</h3>
                    <p>Identification de la nature et de l'emplacement de l'obstruction avant toute intervention.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Choix de l'Équipement</h3>
                    <p>Sélection du type de furet et de la tête appropriés selon la canalisation et l'obstruction.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Vérification Complète</h3>
                    <p>Test d'écoulement après l'intervention pour garantir l'élimination totale du bouchon.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Avantages du Débouchage par Furet</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Efficacité Ciblée</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Atteint précisément l'obstruction</li>
                      <li>Élimine le bouchon à sa source</li>
                      <li>Efficace même dans les coudes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solution Économique</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Intervention rapide et non invasive</li>
                      <li>Alternative aux produits chimiques</li>
                      <li>Préserve l'intégrité des canalisations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">Pourquoi Choisir Notre Service de Débouchage par Furet ?</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Techniciens expérimentés et formés</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Équipement professionnel varié</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Intervention rapide 24/7</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Tarification transparente</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Garantie de résultat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Conseils préventifs personnalisés</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Zones d'Intervention</h2>
                <p className="mb-8">
                  Nous intervenons dans tout le Luxembourg pour vos besoins de débouchage par furet, notamment à Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile peut généralement être sur place dans l'heure suivant votre appel pour les situations d'urgence.
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
