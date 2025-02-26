import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { problemCategories } from '@/data/problems'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Élimination des Odeurs de Canalisation Luxembourg | Solutions Complètes',
  description: 'Experts en élimination des mauvaises odeurs de canalisation au Luxembourg : égouts, salle de bain, cuisine, sous-sol. Intervention rapide 24/7 ☎️ +352 661 297 770',
  keywords: 'odeurs canalisations, mauvaises odeurs égouts, odeurs salle de bain, odeurs cuisine, Luxembourg',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/problemes/elimination-odeurs',
  },
}

// Récupérer la catégorie des odeurs et émanations
const odeursCategory = problemCategories.find(cat => cat.id === 'odeurs-emanations')
const problemesOdeurs = odeursCategory ? odeursCategory.problems : []

export default function EliminationOdeursPage() {
  const faqItems = [
    {
      question: "Quelles sont les causes courantes des mauvaises odeurs dans les canalisations ?",
      answer: "Les mauvaises odeurs dans les canalisations peuvent être causées par plusieurs facteurs : accumulation de déchets organiques, siphons asséchés, ventilation défectueuse, problèmes d'étanchéité, bactéries dans les canalisations, ou dysfonctionnement de la fosse septique."
    },
    {
      question: "Comment éliminer rapidement les odeurs d'égout dans ma salle de bain ?",
      answer: "Pour éliminer les odeurs d'égout dans votre salle de bain, vérifiez d'abord les siphons et remplissez-les d'eau s'ils sont secs. Si le problème persiste, il peut s'agir d'un problème de ventilation ou d'une obstruction nécessitant l'intervention d'un professionnel."
    },
    {
      question: "Les odeurs de canalisation sont-elles dangereuses pour la santé ?",
      answer: "Les odeurs d'égout peuvent effectivement présenter des risques pour la santé car elles contiennent souvent du sulfure d'hydrogène et d'autres gaz toxiques. Une exposition prolongée peut causer des maux de tête, nausées, et problèmes respiratoires. Il est important de traiter rapidement ces problèmes."
    },
    {
      question: "Combien de temps dure une intervention pour éliminer les odeurs ?",
      answer: "La durée d'intervention varie selon la source et l'ampleur du problème. Un diagnostic initial prend environ 30 minutes. La résolution peut prendre de 1 à 4 heures selon qu'il s'agit d'un simple nettoyage de siphon ou d'une intervention plus complexe sur le système de ventilation."
    },
    {
      question: "Comment prévenir le retour des mauvaises odeurs ?",
      answer: "Pour prévenir le retour des mauvaises odeurs, il est recommandé de : maintenir les siphons pleins d'eau, nettoyer régulièrement les canalisations, installer des clapets anti-retour si nécessaire, et faire un entretien préventif annuel des installations."
    },
    {
      question: "Quand faut-il faire appel à un professionnel pour des problèmes d'odeurs ?",
      answer: "Il est conseillé de faire appel à un professionnel lorsque : les odeurs persistent malgré les solutions simples, les odeurs sont très fortes ou soudaines, vous suspectez un problème de ventilation, ou si plusieurs pièces sont affectées simultanément."
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
            "description": "Services professionnels d'élimination des odeurs de canalisation au Luxembourg",
            "url": "https://debouchage-luxembourg.com/problemes/elimination-odeurs",
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
                <span>🌬️</span>
                <span>💨</span>
                <span>🏠</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Élimination des Odeurs de Canalisation
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Solutions professionnelles pour tous types d'odeurs dans vos installations sanitaires
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Solutions pour Tous Types d'Odeurs</h2>
                <p className="mb-8">
                  Notre équipe de techniciens spécialisés intervient rapidement pour identifier et éliminer efficacement toutes les sources d'odeurs désagréables dans vos canalisations. Nous utilisons des techniques avancées et des équipements professionnels pour garantir des résultats durables.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {problemesOdeurs.map(probleme => (
                    <div key={probleme.id} className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-4xl mb-4">
                        {probleme.icon || '🔧'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{probleme.name}</h3>
                      <p className="mb-4">{probleme.shortDescription}</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {probleme.id === 'mauvaises-odeurs-egouts' && (
                          <>
                            <li>Diagnostic précis de la source</li>
                            <li>Traitement des remontées d'odeurs</li>
                            <li>Installation de clapets anti-retour</li>
                          </>
                        )}
                        {probleme.id === 'odeurs-salle-bain' && (
                          <>
                            <li>Vérification des siphons</li>
                            <li>Nettoyage des évacuations</li>
                            <li>Contrôle de la ventilation</li>
                          </>
                        )}
                        {probleme.id === 'odeurs-cuisine' && (
                          <>
                            <li>Dégraissage des conduites</li>
                            <li>Nettoyage des siphons</li>
                            <li>Vérification des aérations</li>
                          </>
                        )}
                        {probleme.id === 'odeurs-sous-sol' && (
                          <>
                            <li>Détection des infiltrations</li>
                            <li>Traitement des remontées</li>
                            <li>Solutions d'étanchéité</li>
                          </>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Approche pour l'Élimination des Odeurs</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Diagnostic Approfondi</h3>
                  <p className="mb-4">
                    Avant toute intervention, nous réalisons un diagnostic complet pour identifier précisément la source des odeurs. Cette étape est cruciale car les mauvaises odeurs peuvent avoir de multiples origines : siphons défectueux, problèmes de ventilation, obstructions partielles, ou défauts d'étanchéité.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Solutions Adaptées</h3>
                  <p className="mb-4">
                    En fonction du diagnostic, nous mettons en œuvre les solutions les plus appropriées : nettoyage haute pression, réparation de ventilation, installation de clapets anti-retour, ou traitement des colonnes d'évacuation. Nos interventions visent non seulement à éliminer les odeurs mais aussi à prévenir leur réapparition.
                  </p>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Conseils Préventifs</h3>
                  <p className="mb-4">
                    Après notre intervention, nous vous fournissons des conseils personnalisés pour maintenir vos installations en bon état et éviter le retour des mauvaises odeurs. Nous pouvons également établir un programme d'entretien préventif adapté à vos besoins.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-6">Techniques d'Élimination des Odeurs</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Hydrocurage</h3>
                    <p>Nettoyage en profondeur des canalisations pour éliminer les dépôts responsables des odeurs.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Ventilation</h3>
                    <p>Vérification et réparation des systèmes de ventilation pour prévenir les remontées d'odeurs.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Protection</h3>
                    <p>Installation de dispositifs anti-retour pour empêcher les remontées d'odeurs des égouts.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Avantages de Notre Service</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Expertise Technique</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Techniciens qualifiés et expérimentés</li>
                      <li>Équipements professionnels modernes</li>
                      <li>Solutions durables garanties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Service Client Premium</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Intervention rapide 24/7</li>
                      <li>Devis transparent et détaillé</li>
                      <li>Suivi post-intervention</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">Pourquoi Choisir Notre Service ?</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Intervention rapide sous 1h en urgence</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Diagnostic précis et gratuit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Solutions durables garanties</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Équipe disponible 24h/24 et 7j/7</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Devis transparent sans surprise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>Conseils personnalisés offerts</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6">Zones d'Intervention</h2>
                <p className="mb-8">
                  Nous intervenons dans tout le Luxembourg pour vos problèmes d'odeurs, notamment à Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile peut généralement être sur place dans l'heure suivant votre appel pour les situations d'urgence.
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
