import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '🔧 Furet Professionnel | Débouchage Mécanique Luxembourg',
  description: 'Spécialiste débouchage furet Luxembourg. Furet électrique et manuel professionnel. Intervention rapide canalisations bouchées ☎️ +352 661 297 770',
  keywords: 'furet débouchage luxembourg, furet électrique, furet manuel, débouchage mécanique, spiral débouchage, canalisation bouchée',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/interventions/techniques-furet',
  },
}

export default function TechniquesFuretPage() {
  const faqItems = [
    {
      question: "Quelle est la différence entre un furet électrique et manuel ?",
      answer: "Le furet électrique utilise un moteur pour faire tourner le spiral, offrant plus de puissance et d'efficacité sur les bouchons tenaces. Le furet manuel nécessite une action manuelle mais permet un contrôle plus fin pour les obstructions délicates."
    },
    {
      question: "Le furet peut-il endommager mes canalisations ?",
      answer: "Non, utilisé correctement par des professionnels, le furet est une méthode sûre. Nos techniciens choisissent le bon diamètre de spiral et appliquent la pression appropriée selon le type de canalisation."
    },
    {
      question: "Dans quels cas utilise-t-on le furet plutôt que l'hydrocurage ?",
      answer: "Le furet est idéal pour les bouchons localisés, les canalisations de petit diamètre, et quand un contrôle précis est nécessaire. L'hydrocurage convient mieux aux longues canalisations et aux dépôts étendus."
    },
    {
      question: "Combien de temps prend une intervention avec furet ?",
      answer: "Une intervention au furet prend généralement 30 minutes à 2 heures selon la complexité du bouchon et l'accessibilité de la canalisation."
    },
    {
      question: "Le furet est-il efficace sur tous types de bouchons ?",
      answer: "Le furet est très efficace sur les bouchons organiques (cheveux, papier, résidus alimentaires) et certains objets. Pour les bouchons très durs ou les dépôts calcifiés, l'hydrocurage peut être plus approprié."
    },
    {
      question: "Peut-on utiliser un furet sur des WC bouchés ?",
      answer: "Oui, nous utilisons des furets spécialement conçus pour les WC. Cependant, selon l'obstruction, d'autres méthodes comme la ventouse professionnelle peuvent être plus appropriées."
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
            "name": "Debouchage Luxembourg - Furet",
            "description": "Service professionnel de débouchage au furet électrique et manuel au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/interventions/techniques-furet",
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
        <div className="bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-8 text-center flex justify-center space-x-4">
                <span>🔧</span>
                <span>⚡</span>
                <span>🌀</span>
                <span>🛠️</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Débouchage Furet Luxembourg - Électrique et Manuel
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste débouchage mécanique au furet professionnel au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Débouchage Furet Professionnel au Luxembourg</h2>
                <p className="mb-6">
                  <strong>Spécialiste du débouchage furet au Luxembourg</strong>, notre équipe utilise des furets électriques et manuels professionnels pour éliminer efficacement les bouchons dans vos canalisations. Cette technique mécanique précise est idéale pour les obstructions localisées et permet un débouchage respectueux de vos installations.
                </p>

                {/* CTA Urgence Furet */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">🔧</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-green-800">Urgence Débouchage Furet ?</h3>
                      <div className="mt-2 text-green-700">
                        <p className="text-sm">
                          <strong>Intervention furet 24h/24</strong> - WC bouché ? Évier obstrué ? Nos furets professionnels peuvent intervenir sous 2h !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors"
                        >
                          📞 +352 661 297 770 - Furet Urgent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-3">Furet Électrique</h3>
                    <p className="mb-4">Puissance et efficacité pour les bouchons tenaces avec moteur électrique</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Puissance constante</strong> : moteur électrique pour bouchons résistants</li>
                      <li><strong>Rotation automatique</strong> : efficacité maximale, moins d'effort</li>
                      <li><strong>Spirales diverses</strong> : adaptées selon type d'obstruction</li>
                      <li><strong>Longueur importante</strong> : jusqu'à 30m de portée</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🛠️</div>
                    <h3 className="text-xl font-semibold mb-3">Furet Manuel</h3>
                    <p className="mb-4">Contrôle précis et technique douce pour canalisations délicates</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Contrôle total</strong> : pression et rotation maîtrisées</li>
                      <li><strong>Canalisations fragiles</strong> : parfait pour tuyaux anciens</li>
                      <li><strong>Obstructions légères</strong> : cheveux, papier, résidus organiques</li>
                      <li><strong>Intervention précise</strong> : ciblage exact du bouchon</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Applications du Débouchage Furet</h2>
                
                <div className="mb-8 bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">🌀 Débouchage Furet - Technique de Précision</h3>
                  <p className="mb-4">
                    Le <strong>débouchage furet</strong> est la technique mécanique de référence pour les bouchons localisés. Nos spirales professionnelles s'adaptent à tous les diamètres de canalisations et permettent une intervention ciblée sans endommager vos installations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">Bouchons Traités au Furet :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Cheveux et poils dans douches/lavabos</li>
                        <li>• Papier WC et lingettes dans toilettes</li>
                        <li>• Résidus alimentaires dans éviers</li>
                        <li>• Objets tombés dans canalisations</li>
                        <li>• Accumulations organiques localisées</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">Avantages du Furet :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Précision</strong> : ciblage exact du bouchon</li>
                        <li>• <strong>Économique</strong> : intervention rapide et efficace</li>
                        <li>• <strong>Respectueux</strong> : préserve les canalisations</li>
                        <li>• <strong>Polyvalent</strong> : tous diamètres de tuyaux</li>
                        <li>• <strong>Immédiat</strong> : résultat instantané visible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Choix de la Technique Furet</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Furet Électrique</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bouchons compacts et anciens</li>
                        <li>• Canalisations longues</li>
                        <li>• Interventions répétées</li>
                        <li>• Obstructions résistantes</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Furet Manuel</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Canalisations fragiles ou anciennes</li>
                        <li>• Obstructions légères</li>
                        <li>• Contrôle précis nécessaire</li>
                        <li>• Espaces restreints</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Technique Mixte</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Diagnostic initial au manuel</li>
                        <li>• Débouchage au furet électrique</li>
                        <li>• Finition et vérification</li>
                        <li>• Résultat optimal garanti</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Équipement Furet Professionnel</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Furets Électriques</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Moteurs puissants</strong> : 500W à 1200W selon besoin</li>
                      <li><strong>Vitesse variable</strong> : adaptation à chaque situation</li>
                      <li><strong>Spirales multiples</strong> : diamètres 6 à 22mm</li>
                      <li><strong>Longueur maximale</strong> : jusqu'à 30 mètres</li>
                      <li><strong>Têtes spécialisées</strong> : coupe, grattage, retrieval</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Furets Manuels</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Spirales flexibles</strong> : acier ressort haute qualité</li>
                      <li><strong>Manivelles ergonomiques</strong> : contrôle optimal</li>
                      <li><strong>Diamètres variés</strong> : 4 à 16mm</li>
                      <li><strong>Embouts adaptables</strong> : selon type d'obstruction</li>
                      <li><strong>Longueurs multiples</strong> : 5m à 15m</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Processus d'Intervention Furet</h2>
                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔍</div>
                      <h3 className="font-bold mb-2">1. Diagnostic</h3>
                      <p className="text-sm text-gray-600">Localisation précise du bouchon, choix du furet adapté</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔧</div>
                      <h3 className="font-bold mb-2">2. Préparation</h3>
                      <p className="text-sm text-gray-600">Sélection spiral, protection des zones de travail</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🌀</div>
                      <h3 className="font-bold mb-2">3. Débouchage</h3>
                      <p className="text-sm text-gray-600">Insertion progressive, rotation contrôlée jusqu'au bouchon</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">✅</div>
                      <h3 className="font-bold mb-2">4. Vérification</h3>
                      <p className="text-sm text-gray-600">Test d'écoulement, nettoyage, conseils préventifs</p>
                    </div>
                  </div>
                </div>

                {/* Section tarifs */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">💰 Tarifs Débouchage Furet Luxembourg</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Tarifs Indicatifs</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>Débouchage furet manuel</span>
                          <span className="font-semibold">à partir de 80€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Débouchage furet électrique</span>
                          <span className="font-semibold">à partir de 120€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Intervention complexe</span>
                          <span className="font-semibold">à partir de 150€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Déplacement Luxembourg</span>
                          <span className="font-semibold">gratuit</span>
                        </li>
                      </ul>
                      <p className="text-sm text-green-600 mt-3">
                        <strong>Devis gratuit</strong> - Prix fixe annoncé avant intervention
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Avantages Tarifaires</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ <strong>Diagnostic gratuit</strong> et sans engagement</li>
                        <li>✓ <strong>Prix fixes</strong> annoncés avant intervention</li>
                        <li>✓ <strong>Pas de majoration</strong> week-end et jours fériés</li>
                        <li>✓ <strong>Garantie résultat</strong> ou remboursement</li>
                        <li>✓ <strong>Conseils inclus</strong> pour éviter les récidives</li>
                        <li>✓ <strong>Intervention rapide</strong> sans frais supplémentaires</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">🏆 Pourquoi Choisir Notre Service Furet ?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🔧</span>
                          <div>
                            <span className="font-semibold">Furets professionnels dernière génération</span>
                            <p className="text-sm text-gray-600">Équipement électrique et manuel de qualité supérieure</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">👨‍🔧</span>
                          <div>
                            <span className="font-semibold">Techniciens spécialisés débouchage mécanique</span>
                            <p className="text-sm text-gray-600">Expertise technique, formation continue</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">⚡</span>
                          <div>
                            <span className="font-semibold">Intervention ultra-rapide</span>
                            <p className="text-sm text-gray-600">Sur place sous 2h, résolution en moins d'1h</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🎯</span>
                          <div>
                            <span className="font-semibold">Technique précise et respectueuse</span>
                            <p className="text-sm text-gray-600">Préservation de vos canalisations garantie</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">💰</span>
                          <div>
                            <span className="font-semibold">Tarifs transparents et compétitifs</span>
                            <p className="text-sm text-gray-600">Prix fixe, pas de surprise, devis gratuit</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🛡️</span>
                          <div>
                            <span className="font-semibold">Garantie efficacité complète</span>
                            <p className="text-sm text-gray-600">Intervention gratuite si récidive sous 30 jours</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Questions Fréquentes sur le Débouchage Furet</h2>
                <div className="space-y-6 mb-12">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Débouchage Furet dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service de <strong>débouchage furet Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile avec furets électriques et manuels professionnels peut intervenir partout au Grand-Duché sous 2h pour les urgences.
                </p>
              </div>

              {/* CTA Final Furet */}
              <div className="mt-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">🔧 Besoin d'un Débouchage Furet Professionnel ?</h2>
                <p className="text-lg mb-6">Intervention précise et efficace avec furets électriques et manuels dans tout le Luxembourg</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+352661297770" 
                    className="inline-flex items-center justify-center bg-white text-green-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    📞 +352 661 297 770
                  </a>
                  <a 
                    href="/devis" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  >
                    Devis Furet Gratuit
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Furet électrique et manuel ✓ Intervention sous 2h ✓ Garantie efficacité 30 jours
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