import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { interventionCategories } from '@/data/interventions'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Techniques d\'Hydrocurage Professionnel Luxembourg | Nettoyage Haute Pression',
  description: 'Services d\'hydrocurage et nettoyage haute pression pour canalisations au Luxembourg. Solutions puissantes pour tous types d\'obstructions. ☎️ +352 661 297 770',
  keywords: 'hydrocurage, hydrocurage haute pression, nettoyage canalisations, débouchage haute pression, Luxembourg',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/interventions/techniques-hydrocurage',
  },
}

// Récupérer les interventions d'hydrocurage
const mecaniquesCategory = interventionCategories.find(cat => cat.id === 'interventions-mecaniques')
const hydrocurageInterventions = mecaniquesCategory ? mecaniquesCategory.interventions.filter(
  intervention => ['hydrocurage', 'hydrocurage-haute-pression'].includes(intervention.id)
) : []

export default function TechniquesHydrocuragePage() {
  const faqItems = [
    {
      question: "Qu'est-ce que l'hydrocurage et comment fonctionne-t-il ?",
      answer: "L'hydrocurage est une technique de nettoyage utilisant de l'eau projetée à haute pression dans les canalisations. Cette méthode permet d'éliminer efficacement les dépôts, graisses, racines et autres obstructions sans endommager les conduites. La pression peut être ajustée selon le type et l'état des canalisations."
    },
    {
      question: "Quelle est la différence entre l'hydrocurage standard et l'hydrocurage haute pression ?",
      answer: "L'hydrocurage standard utilise une pression d'eau modérée (jusqu'à 150 bars) adaptée aux canalisations résidentielles et aux obstructions légères à moyennes. L'hydrocurage haute pression emploie une pression supérieure (jusqu'à 300 bars) pour les canalisations industrielles et les obstructions tenaces comme les racines ou les dépôts calcaires durcis."
    },
    {
      question: "Pour quels types de canalisations l'hydrocurage est-il recommandé ?",
      answer: "L'hydrocurage est recommandé pour presque tous types de canalisations : évacuations d'eaux usées, conduites d'égout, colonnes d'immeuble, canalisations industrielles, et réseaux d'assainissement. La technique est adaptable aux diamètres allant de 32 mm à plus de 600 mm selon l'équipement utilisé."
    },
    {
      question: "L'hydrocurage peut-il endommager mes canalisations ?",
      answer: "Lorsqu'il est réalisé par des professionnels qualifiés, l'hydrocurage n'endommage pas les canalisations. Nos techniciens ajustent la pression en fonction du matériau et de l'état de vos conduites. Cette technique est même considérée comme moins invasive que les méthodes mécaniques pour certains types de tuyauterie."
    },
    {
      question: "À quelle fréquence faut-il faire un hydrocurage préventif ?",
      answer: "Pour les installations résidentielles, un hydrocurage préventif tous les 2 à 3 ans est généralement suffisant. Pour les établissements commerciaux comme les restaurants, nous recommandons un entretien tous les 6 à 12 mois. Les installations industrielles peuvent nécessiter des interventions trimestrielles selon leur utilisation."
    },
    {
      question: "Combien de temps dure une intervention d'hydrocurage ?",
      answer: "La durée d'une intervention d'hydrocurage varie selon l'étendue du réseau et le degré d'obstruction. Pour une maison individuelle, comptez environ 1 à 2 heures. Pour un immeuble ou un réseau commercial, l'intervention peut prendre de 3 à 5 heures. Les cas complexes peuvent nécessiter une journée entière."
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
            "description": "Services professionnels d'hydrocurage et nettoyage haute pression au Luxembourg",
            "url": "https://debouchage-luxembourg.com/interventions/techniques-hydrocurage",
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
                <span>💧</span>
                <span>🌊</span>
                <span>🔫</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Techniques d'Hydrocurage Professionnel
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Solutions puissantes de nettoyage haute pression pour tous types de canalisations
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Services d'Hydrocurage Professionnels</h2>
                <p className="mb-8">
                  Notre équipe de techniciens spécialisés utilise des équipements d'hydrocurage de pointe pour nettoyer efficacement vos canalisations. Cette technique utilise la puissance de l'eau à haute pression pour éliminer tous types d'obstructions, des dépôts de graisse aux racines d'arbres, sans endommager vos conduites.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {hydrocurageInterventions.map(intervention => (
                    <div key={intervention.id} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-4xl mb-4">
                        {intervention.icon || '🔧'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{intervention.name}</h3>
                      <p className="mb-4">{intervention.shortDescription}</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {intervention.id === 'hydrocurage' && (
                          <>
                            <li>Pression adaptée (jusqu'à 150 bars)</li>
                            <li>Idéal pour l'entretien régulier</li>
                            <li>Efficace sur les dépôts et graisses</li>
                          </>
                        )}
                        {intervention.id === 'hydrocurage-haute-pression' && (
                          <>
                            <li>Pression maximale (jusqu'à 300 bars)</li>
                            <li>Pour les obstructions tenaces</li>
                            <li>Adapté aux canalisations industrielles</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Applications de l'Hydrocurage</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Débouchage Curatif</h3>
                  <p className="mb-4">
                    L'hydrocurage est particulièrement efficace pour éliminer les obstructions déjà formées dans vos canalisations. La puissance de l'eau sous pression permet de désagréger les bouchons les plus tenaces, qu'il s'agisse d'accumulations de graisses, de dépôts calcaires, de racines ou de corps étrangers.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Nettoyage Préventif</h3>
                  <p className="mb-4">
                    En tant que mesure préventive, l'hydrocurage régulier permet d'éliminer les dépôts avant qu'ils ne forment des obstructions complètes. Cette approche proactive réduit considérablement les risques de bouchons et prolonge la durée de vie de vos canalisations.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Réhabilitation de Canalisations</h3>
                  <p className="mb-4">
                    Avant toute opération de réhabilitation ou de réparation, l'hydrocurage permet de nettoyer parfaitement les conduites, assurant ainsi une meilleure adhérence des nouveaux matériaux et une réparation plus durable.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Approche de l'Hydrocurage</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Diagnostic Initial</h3>
                    <p>Inspection vidéo préalable pour identifier précisément la nature et l'emplacement des obstructions.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Intervention Adaptée</h3>
                    <p>Sélection de la pression et des buses spécifiques selon le type de canalisation et d'obstruction.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Vérification Finale</h3>
                    <p>Contrôle par caméra après l'intervention pour garantir un nettoyage complet et efficace.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Avantages de l'Hydrocurage</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Efficacité Supérieure</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Élimine 100% des obstructions</li>
                      <li>Nettoie les parois des canalisations</li>
                      <li>Restaure le diamètre initial des conduites</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Respect des Installations</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Non invasif pour les canalisations</li>
                      <li>Adapté à tous types de matériaux</li>
                      <li>Prolonge la durée de vie des conduites</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">Pourquoi Choisir Notre Service d'Hydrocurage ?</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Équipement professionnel de dernière génération</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Techniciens certifiés et expérimentés</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Intervention rapide 24/7</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Devis transparent sans surprise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Solutions adaptées à chaque situation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Respect des normes environnementales</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Zones d'Intervention</h2>
                <p className="mb-8">
                  Nous intervenons dans tout le Luxembourg pour vos besoins d'hydrocurage, notamment à Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile peut généralement être sur place dans l'heure suivant votre appel pour les situations d'urgence.
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
