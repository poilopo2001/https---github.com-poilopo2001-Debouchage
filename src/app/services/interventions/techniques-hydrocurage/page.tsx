import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '💧 Hydrocurage Haute Pression | Technique Avancée Luxembourg',
  description: 'Spécialiste hydrocurage Luxembourg. Nettoyage haute pression canalisations, curage professionnel. Intervention rapide sous 2h ☎️ +352 661 297 770',
  keywords: 'hydrocurage luxembourg, nettoyage haute pression, curage canalisation, hydrocureuse, débouchage haute pression, nettoyage professionnel',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/interventions/techniques-hydrocurage',
  },
}

export default function TechniquesHydrocuragePage() {
  const faqItems = [
    {
      question: "Qu'est-ce que l'hydrocurage et dans quels cas l'utilise-t-on ?",
      answer: "L'hydrocurage est une technique de nettoyage des canalisations utilisant de l'eau à haute pression. Il est utilisé pour éliminer les dépôts, graisses, calcaire et obstructions tenaces que les méthodes classiques ne peuvent pas traiter."
    },
    {
      question: "Quelle est la différence entre hydrocurage et hydrocurage haute pression ?",
      answer: "L'hydrocurage haute pression utilise une pression plus élevée (jusqu'à 200 bars) pour traiter les obstructions les plus résistantes et les longues canalisations. L'hydrocurage standard (50-100 bars) convient pour l'entretien courant."
    },
    {
      question: "L'hydrocurage peut-il endommager mes canalisations ?",
      answer: "Non, l'hydrocurage professionnel est une méthode sûre quand elle est réalisée par des techniciens qualifiés. Nous adaptons la pression selon le type et l'état de vos canalisations pour éviter tout dommage."
    },
    {
      question: "Combien de temps dure une intervention d'hydrocurage ?",
      answer: "Une intervention d'hydrocurage dure généralement entre 1 et 3 heures selon la longueur et l'état des canalisations à traiter. Les cas complexes peuvent nécessiter une demi-journée."
    },
    {
      question: "À quelle fréquence faut-il faire un hydrocurage préventif ?",
      answer: "Pour les particuliers, un hydrocurage préventif tous les 3-5 ans est recommandé. Pour les établissements commerciaux et restaurants, une fréquence annuelle ou bi-annuelle est conseillée."
    },
    {
      question: "L'hydrocurage est-il efficace contre les racines d'arbres ?",
      answer: "Oui, l'hydrocurage haute pression est très efficace pour couper et éliminer les racines qui ont pénétré dans les canalisations. Il permet également de nettoyer les résidus après l'intervention."
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
            "name": "Debouchage Luxembourg - Hydrocurage",
            "description": "Service professionnel d'hydrocurage et nettoyage haute pression au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/interventions/techniques-hydrocurage",
            "telephone": "+352 661 297 770",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10A Rue du Puits",
              "addressLocality": "Bonnevoie-Sud",
              "addressRegion": "Luxembourg",
              "postalCode": "2355",
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
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
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
                <span>🚿</span>
                <span>⚡</span>
                <span>🔧</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Hydrocurage Luxembourg - Nettoyage Haute Pression
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste hydrocurage et curage haute pression au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Hydrocurage et Nettoyage Haute Pression au Luxembourg</h2>
                <p className="mb-6">
                  <strong>Spécialiste de l'hydrocurage au Luxembourg</strong>, notre équipe utilise des équipements professionnels de nettoyage haute pression pour éliminer efficacement toutes les obstructions et dépôts dans vos canalisations. Que vous ayez besoin d'un hydrocurage préventif ou curatif, nous intervenons rapidement avec notre matériel professionnel.
                </p>

                {/* CTA Urgence Hydrocurage */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">💧</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-blue-800">Besoin d'un Hydrocurage Urgent ?</h3>
                      <div className="mt-2 text-blue-700">
                        <p className="text-sm">
                          <strong>Intervention hydrocurage 24h/24</strong> - Canalisations très bouchées ? Dépôts tenaces ? Notre hydrocureuse professionnelle peut intervenir sous 2h !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
                        >
                          📞 +352 661 297 770 - Hydrocurage Urgent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">💧</div>
                    <h3 className="text-xl font-semibold mb-3">Hydrocurage Standard</h3>
                    <p className="mb-4">Nettoyage efficace des canalisations avec pression modérée (50-100 bars)</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Entretien préventif</strong> : nettoyage régulier des canalisations</li>
                      <li><strong>Élimination graisses</strong> : restaurants, cuisines professionnelles</li>
                      <li><strong>Dépôts calcaire</strong> : accumulations légères à modérées</li>
                      <li><strong>Canalisations domestiques</strong> : diamètres standards</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-3">Hydrocurage Haute Pression</h3>
                    <p className="mb-4">Puissance maximale pour obstructions tenaces (100-200 bars)</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Obstructions sévères</strong> : bouchons compacts et anciens</li>
                      <li><strong>Racines d'arbres</strong> : découpe et élimination complète</li>
                      <li><strong>Canalisations longues</strong> : collecteurs, réseaux étendus</li>
                      <li><strong>Dépôts industriels</strong> : résidus collés, incrustations</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Applications de l'Hydrocurage</h2>
                
                <div className="mb-8 bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">💧 Hydrocurage Préventif - Notre Recommandation</h3>
                  <p className="mb-4">
                    L'<strong>hydrocurage préventif</strong> permet d'éviter les bouchons majeurs et de maintenir vos canalisations en excellent état. Cette maintenance régulière est particulièrement recommandée pour les restaurants, hôtels et copropriétés.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Avantages Préventif :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Évite les bouchons majeurs</li>
                        <li>• Prolonge la durée de vie des canalisations</li>
                        <li>• Élimination des mauvaises odeurs</li>
                        <li>• Économies sur les interventions d'urgence</li>
                        <li>• Amélioration de l'écoulement</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Fréquences Recommandées :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Particuliers</strong> : tous les 3-5 ans</li>
                        <li>• <strong>Restaurants</strong> : tous les 6-12 mois</li>
                        <li>• <strong>Hôtels</strong> : annuel</li>
                        <li>• <strong>Copropriétés</strong> : tous les 2-3 ans</li>
                        <li>• <strong>Industrie</strong> : sur mesure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Applications Spécialisées</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Restaurants</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bacs à graisse saturés</li>
                        <li>• Évacuations cuisine obstruées</li>
                        <li>• Résidus alimentaires collés</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Copropriétés</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Colonnes d'évacuation</li>
                        <li>• Collecteurs principaux</li>
                        <li>• Regards de visite</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Urgences</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Refoulements importants</li>
                        <li>• Obstructions totales</li>
                        <li>• Racines envahissantes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Équipement Professionnel</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hydrocureuses Haute Performance</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Pression variable</strong> : 50 à 200 bars selon besoin</li>
                      <li><strong>Débit important</strong> : jusqu'à 50L/min</li>
                      <li><strong>Buses spécialisées</strong> : adaptées à chaque situation</li>
                      <li><strong>Flexibles longue portée</strong> : jusqu'à 100m</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies Complémentaires</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Inspection caméra</strong> : diagnostic précis avant/après</li>
                      <li><strong>Détection électronique</strong> : localisation des canalisations</li>
                      <li><strong>Aspiration simultanée</strong> : récupération des déchets</li>
                      <li><strong>Produits écologiques</strong> : respect de l'environnement</li>
                    </ul>
                  </div>
                </div>

                {/* Section tarifs */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">💰 Tarifs Hydrocurage Luxembourg</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Tarifs Indicatifs</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>Hydrocurage standard (50m)</span>
                          <span className="font-semibold">à partir de 150€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Hydrocurage haute pression</span>
                          <span className="font-semibold">à partir de 200€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Inspection caméra incluse</span>
                          <span className="font-semibold">+50€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Contrat annuel préventif</span>
                          <span className="font-semibold">sur devis</span>
                        </li>
                      </ul>
                      <p className="text-sm text-green-600 mt-3">
                        <strong>Devis gratuit</strong> - Prix adaptés selon longueur
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Avantages Tarifaires</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ <strong>Devis gratuit</strong> avec inspection préalable</li>
                        <li>✓ <strong>Prix forfaitaires</strong> selon longueur</li>
                        <li>✓ <strong>Pas de frais cachés</strong> ou de suppléments</li>
                        <li>✓ <strong>Remise contrats</strong> d'entretien préventif</li>
                        <li>✓ <strong>Intervention d'urgence</strong> sans majoration</li>
                        <li>✓ <strong>Garantie résultat</strong> sur l'efficacité</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">🏆 Pourquoi Choisir Notre Hydrocurage ?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">💧</span>
                          <div>
                            <span className="font-semibold">Équipement professionnel dernière génération</span>
                            <p className="text-sm text-gray-600">Hydrocureuses haute performance, contrôle précis de la pression</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">👨‍🔧</span>
                          <div>
                            <span className="font-semibold">Techniciens spécialisés hydrocurage</span>
                            <p className="text-sm text-gray-600">Formation continue, certifications professionnelles</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">📹</span>
                          <div>
                            <span className="font-semibold">Inspection vidéo systématique</span>
                            <p className="text-sm text-gray-600">Diagnostic avant/après, preuve du résultat</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">⚡</span>
                          <div>
                            <span className="font-semibold">Intervention rapide 24/7</span>
                            <p className="text-sm text-gray-600">Disponible jour et nuit, week-ends inclus</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🌿</span>
                          <div>
                            <span className="font-semibold">Méthode 100% écologique</span>
                            <p className="text-sm text-gray-600">Eau claire uniquement, respect environnemental</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🛡️</span>
                          <div>
                            <span className="font-semibold">Garantie efficacité 6 mois</span>
                            <p className="text-sm text-gray-600">Assurance résultat, intervention gratuite si récidive</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Questions Fréquentes sur l'Hydrocurage</h2>
                <div className="space-y-6 mb-12">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Hydrocurage dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service d'<strong>hydrocurage Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile avec hydrocureuse professionnelle peut intervenir partout au Grand-Duché sous 2h pour les urgences.
                </p>
              </div>

              {/* CTA Final Hydrocurage */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">💧 Besoin d'un Hydrocurage Professionnel ?</h2>
                <p className="text-lg mb-6">Intervention rapide avec équipement haute performance dans tout le Luxembourg</p>
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
                    Devis Hydrocurage Gratuit
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Équipement professionnel ✓ Inspection caméra incluse ✓ Garantie efficacité 6 mois
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