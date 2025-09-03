import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '🦨 Élimination Odeurs | Solutions Anti-Odeur Luxembourg',
  description: 'Spécialiste élimination odeurs égouts, salle de bain, cuisine Luxembourg. Solutions définitives mauvaises odeurs canalisations ☎️ +352 661 297 770',
  keywords: 'odeurs canalisation luxembourg, mauvaises odeurs égouts, odeur salle de bain, élimination odeurs, remontée odeurs fosse septique',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/problemes/elimination-odeurs',
  },
}

export default function EliminationOdeursPage() {
  const faqItems = [
    {
      question: "D'où viennent les mauvaises odeurs dans mes canalisations ?",
      answer: "Les odeurs proviennent généralement de plusieurs sources : siphons asséchés, accumulation de matières organiques, problèmes de ventilation, reflux d'égouts, ou fosses septiques saturées. Un diagnostic professionnel permet d'identifier la cause exacte."
    },
    {
      question: "Pourquoi ai-je des odeurs d'égouts dans ma salle de bain ?",
      answer: "Les odeurs d'égouts dans la salle de bain sont souvent dues à des siphons vides (manque d'eau), des joints défaillants, une ventilation insuffisante, ou des canalisations partiellement bouchées qui permettent aux gaz de remonter."
    },
    {
      question: "Les produits du commerce sont-ils efficaces contre les odeurs ?",
      answer: "Les produits grand public masquent temporairement les odeurs mais ne traitent pas la cause. Notre intervention professionnelle identifie et élimine définitivement la source du problème pour un résultat durable."
    },
    {
      question: "Combien de temps faut-il pour éliminer définitivement les odeurs ?",
      answer: "Selon la cause, l'élimination peut être immédiate (siphon vide) ou nécessiter quelques heures (nettoyage complet, réparations). Dans 95% des cas, les odeurs disparaissent le jour même de notre intervention."
    },
    {
      question: "Les odeurs peuvent-elles revenir après votre intervention ?",
      answer: "Avec notre traitement complet et nos conseils de prévention, les récidives sont rares. Nous offrons une garantie de 6 mois sur l'efficacité de notre intervention contre les odeurs."
    },
    {
      question: "Intervenez-vous aussi pour les odeurs de fosse septique ?",
      answer: "Oui, nous traitons tous types d'odeurs : fosses septiques saturées, problèmes de ventilation, remontées d'égouts. Nos solutions incluent vidange, nettoyage et réparation des systèmes de ventilation."
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
            "name": "Debouchage Luxembourg - Élimination Odeurs",
            "description": "Service professionnel d'élimination des odeurs de canalisations au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/problemes/elimination-odeurs",
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
        <div className="bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-8 text-center flex justify-center space-x-4">
                <span>🦨</span>
                <span>💨</span>
                <span>🚿</span>
                <span>🔧</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Élimination Odeurs Canalisation Luxembourg
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste élimination définitive odeurs égouts, salle de bain et cuisine
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Élimination Professionnelle des Odeurs de Canalisations</h2>
                <p className="mb-6">
                  <strong>Spécialiste de l'élimination des odeurs au Luxembourg</strong>, notre équipe intervient rapidement pour identifier et traiter définitivement tous types de mauvaises odeurs dans vos canalisations. Que ce soit des odeurs d'égouts, de salle de bain, de cuisine ou de fosse septique, nous disposons des solutions professionnelles pour un résultat durable.
                </p>

                {/* CTA Urgence Odeurs */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">🦨</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-yellow-800">Urgence Odeurs Insupportables ?</h3>
                      <div className="mt-2 text-yellow-700">
                        <p className="text-sm">
                          <strong>Intervention odeurs 24h/24</strong> - Remontées d'égouts ? Odeurs persistantes ? Notre équipe peut intervenir sous 2h pour éliminer définitivement le problème !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-700 transition-colors"
                        >
                          📞 +352 661 297 770 - Stop aux Odeurs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Types d'Odeurs Traitées</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">💨</div>
                    <h3 className="text-xl font-semibold mb-3">Odeurs d'Égouts</h3>
                    <p className="mb-4">Remontées de gaz nauséabonds depuis le réseau d'assainissement</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Siphons asséchés</strong> : remise en eau immédiate</li>
                      <li><strong>Joints défaillants</strong> : étanchéité des raccords</li>
                      <li><strong>Reflux réseau</strong> : vérification des pentes et évacuations</li>
                      <li><strong>Ventilation défectueuse</strong> : réparation systèmes d'aération</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🚿</div>
                    <h3 className="text-xl font-semibold mb-3">Odeurs Salle de Bain</h3>
                    <p className="mb-4">Mauvaises odeurs dans douche, baignoire, lavabo ou WC</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Siphon WC défaillant</strong> : remplacement ou réparation</li>
                      <li><strong>Bonde douche/baignoire</strong> : nettoyage et désinfection</li>
                      <li><strong>Évacuation lavabo</strong> : élimination des biofilms</li>
                      <li><strong>Ventilation VMC</strong> : nettoyage et remise en service</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🍳</div>
                    <h3 className="text-xl font-semibold mb-3">Odeurs Cuisine</h3>
                    <p className="mb-4">Remontées d'odeurs depuis évier, lave-vaisselle ou évacuations</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Évier cuisine bouché</strong> : élimination résidus alimentaires</li>
                      <li><strong>Siphon évier encrassé</strong> : nettoyage en profondeur</li>
                      <li><strong>Raccord lave-vaisselle</strong> : vérification étanchéité</li>
                      <li><strong>Graisses solidifiées</strong> : traitement spécialisé</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🏚️</div>
                    <h3 className="text-xl font-semibold mb-3">Odeurs Sous-Sol/Cave</h3>
                    <p className="mb-4">Émanations depuis sous-sols, caves, garages ou vides sanitaires</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Remontées capillaires</strong> : traitement humidité et odeurs</li>
                      <li><strong>Regards d'évacuation</strong> : nettoyage et désinfection</li>
                      <li><strong>Canalisations enterrées</strong> : localisation et réparation fuites</li>
                      <li><strong>Ventilation déficiente</strong> : amélioration circulation d'air</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8 bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">💨 Fosse Septique et Assainissement</h3>
                  <p className="mb-4">
                    Les <strong>odeurs de fosse septique</strong> sont particulièrement désagréables et nécessitent une intervention spécialisée. Notre équipe traite efficacement tous les problèmes d'assainissement individuel au Luxembourg.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Causes Fosse Septique :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Fosse septique pleine ou saturée</li>
                        <li>• Ventilation fosse obstruée</li>
                        <li>• Filtre à sable colmaté</li>
                        <li>• Épandage défaillant</li>
                        <li>• Déséquilibre bactérien</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Solutions Fosse Septique :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Vidange complète</strong> de la fosse</li>
                        <li>• <strong>Nettoyage filtres</strong> et préfiltre</li>
                        <li>• <strong>Réparation ventilation</strong> défectueuse</li>
                        <li>• <strong>Réactivation bactéries</strong> utiles</li>
                        <li>• <strong>Contrôle épandage</strong> et drainage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Méthode d'Élimination des Odeurs</h2>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔍</div>
                      <h3 className="font-bold mb-2">1. Diagnostic</h3>
                      <p className="text-sm text-gray-600">Identification précise de la source des odeurs avec outils professionnels</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🧪</div>
                      <h3 className="font-bold mb-2">2. Analyse</h3>
                      <p className="text-sm text-gray-600">Détermination des causes : siphons, ventilation, accumulations, fuites</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔧</div>
                      <h3 className="font-bold mb-2">3. Traitement</h3>
                      <p className="text-sm text-gray-600">Solution adaptée : nettoyage, réparation, désinfection, ventilation</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">✅</div>
                      <h3 className="font-bold mb-2">4. Prévention</h3>
                      <p className="text-sm text-gray-600">Conseils personnalisés et maintenance préventive</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Solutions par Localisation</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 bg-red-50 p-3 rounded-lg">🚿 Salle de Bain - Zone Prioritaire</h3>
                  <p className="mb-4">
                    La salle de bain est l'endroit le plus fréquent pour les <strong>odeurs d'égouts</strong>. L'humidité constante et les multiples évacuations créent des conditions favorables aux mauvaises odeurs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-red-800">WC et Toilettes</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Siphon WC déformé ou fissuré</li>
                        <li>• Joint cire défaillant</li>
                        <li>• Évacuation partiellement bouchée</li>
                        <li>• Ventilation insuffisante</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-red-800">Douche et Baignoire</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bonde et siphon encrassés</li>
                        <li>• Joints silicone moisis</li>
                        <li>• Évacuation lente et accumulation</li>
                        <li>• Biofilm dans canalisations</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-red-800">Lavabo et Vasque</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Siphon bouteille encrassé</li>
                        <li>• Cheveux et résidus accumulés</li>
                        <li>• Bonde mal étanche</li>
                        <li>• Raccords desserrés</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 bg-orange-50 p-3 rounded-lg">🍳 Cuisine - Défis Spécifiques</h3>
                  <p className="mb-4">
                    Les <strong>odeurs de cuisine</strong> sont souvent liées aux graisses et résidus alimentaires qui se solidifient dans les canalisations et créent des bouchons nauséabonds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-orange-800">Problèmes Fréquents</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Graisses figées dans siphon évier</li>
                        <li>• Résidus alimentaires en décomposition</li>
                        <li>• Raccord lave-vaisselle qui fuit</li>
                        <li>• Évacuation lave-linge commune</li>
                        <li>• Ventilation hotte insuffisante</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-orange-800">Solutions Cuisine</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Dégraissage professionnel</strong> siphons</li>
                        <li>• <strong>Hydrocurage spécialisé</strong> évacuations</li>
                        <li>• <strong>Désinfection complète</strong> canalisations</li>
                        <li>• <strong>Vérification raccords</strong> électroménagers</li>
                        <li>• <strong>Conseils prévention</strong> graisse</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section tarifs */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">💰 Tarifs Élimination Odeurs Luxembourg</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Tarifs Indicatifs</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>Diagnostic odeurs</span>
                          <span className="font-semibold">gratuit</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Traitement odeurs simples</span>
                          <span className="font-semibold">à partir de 90€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Élimination odeurs complexes</span>
                          <span className="font-semibold">à partir de 150€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Traitement fosse septique</span>
                          <span className="font-semibold">sur devis</span>
                        </li>
                      </ul>
                      <p className="text-sm text-green-600 mt-3">
                        <strong>Devis gratuit</strong> - Résultat garanti ou remboursé
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Avantages Inclus</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ <strong>Diagnostic gratuit</strong> avec localisation précise</li>
                        <li>✓ <strong>Traitement définitif</strong> de la cause</li>
                        <li>✓ <strong>Désinfection complète</strong> des canalisations</li>
                        <li>✓ <strong>Garantie 6 mois</strong> anti-odeurs</li>
                        <li>✓ <strong>Conseils prévention</strong> personnalisés</li>
                        <li>✓ <strong>Intervention d'urgence</strong> 24h/24</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">🏆 Pourquoi Nous Choisir Contre les Odeurs ?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🔍</span>
                          <div>
                            <span className="font-semibold">Diagnostic précis et professionnel</span>
                            <p className="text-sm text-gray-600">Identification exacte de la source, pas de traitement à l'aveugle</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🧪</span>
                          <div>
                            <span className="font-semibold">Solutions définitives, pas de masquage</span>
                            <p className="text-sm text-gray-600">Élimination de la cause, pas seulement des symptômes</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">⚡</span>
                          <div>
                            <span className="font-semibold">Intervention rapide 24h/24</span>
                            <p className="text-sm text-gray-600">Urgence odeurs traitée sous 2h partout au Luxembourg</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🛡️</span>
                          <div>
                            <span className="font-semibold">Garantie efficacité 6 mois</span>
                            <p className="text-sm text-gray-600">Retour gratuit si les odeurs reviennent</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🌿</span>
                          <div>
                            <span className="font-semibold">Produits écologiques et sains</span>
                            <p className="text-sm text-gray-600">Traitements respectueux de l'environnement</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">💰</span>
                          <div>
                            <span className="font-semibold">Tarifs transparents et fixes</span>
                            <p className="text-sm text-gray-600">Prix annoncé avant intervention, pas de surprise</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Questions Fréquentes sur les Odeurs</h2>
                <div className="space-y-6 mb-12">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Élimination Odeurs dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service d'<strong>élimination des odeurs Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe spécialisée peut intervenir partout au Grand-Duché sous 2h pour les urgences odeurs.
                </p>
              </div>

              {/* CTA Final Odeurs */}
              <div className="mt-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">🦨 Stop aux Mauvaises Odeurs !</h2>
                <p className="text-lg mb-6">Solution définitive sous 2h - Fini les odeurs d'égouts et de canalisations</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+352661297770" 
                    className="inline-flex items-center justify-center bg-white text-yellow-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    📞 +352 661 297 770
                  </a>
                  <a 
                    href="/devis" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
                  >
                    Diagnostic Gratuit
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Diagnostic gratuit ✓ Solution définitive ✓ Garantie 6 mois anti-odeurs
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