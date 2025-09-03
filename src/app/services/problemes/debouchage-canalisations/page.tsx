import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '🚰 WC Évier Douche Bouchés | Expert Canalisation Luxembourg',
  description: 'Spécialiste débouchage canalisation Luxembourg. WC bouché, évier obstrué, douche bouchée. Intervention rapide sous 2h ☎️ +352 661 297 770',
  keywords: 'débouchage canalisation luxembourg, WC bouché, évier bouché, douche bouchée, baignoire obstruée, canalisation bouchée urgence',
  alternates: {
    canonical: 'https://debouchage-luxembourg.com/services/problemes/debouchage-canalisations',
  },
}

export default function DebouchageCanalisationsPage() {
  const faqItems = [
    {
      question: "Comment savoir si ma canalisation est bouchée ?",
      answer: "Les signes courants : évacuation lente ou arrêtée, remontée d'eau sale, gargouillements, mauvaises odeurs. Plus l'eau stagne longtemps, plus le bouchon est important et nécessite une intervention professionnelle."
    },
    {
      question: "Pourquoi mon WC se bouche-t-il régulièrement ?",
      answer: "Les bouchons WC récurrents indiquent souvent un problème plus profond : chasse d'eau insuffisante, canalisation mal dimensionnée, accumulation de calcaire, ou objets coincés. Notre diagnostic identifie la cause exacte."
    },
    {
      question: "Puis-je utiliser des produits chimiques pour déboucher ?",
      answer: "Les produits chimiques peuvent endommager vos canalisations et sont dangereux. Nos méthodes mécaniques (furet, hydrocurage) sont plus efficaces, respectueuses de l'environnement et préservent vos installations."
    },
    {
      question: "Combien coûte un débouchage de canalisation ?",
      answer: "Le prix varie selon la complexité : 80€ pour un débouchage simple, 120-200€ pour les cas complexes. Nous proposons toujours un devis gratuit avant intervention avec prix fixe garanti."
    },
    {
      question: "Intervenez-vous la nuit et le week-end ?",
      answer: "Oui, nous intervenons 24h/24 et 7j/7 sans majoration. Les urgences canalisations (WC unique bouché, refoulements) sont traitées en priorité avec intervention sous 2h."
    },
    {
      question: "Comment éviter les bouchons de canalisations ?",
      answer: "Évitez de jeter lingettes, cheveux, graisses et objets dans les évacuations. Un entretien mensuel avec eau chaude et un contrôle annuel professionnel préviennent 80% des bouchons."
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
            "name": "Debouchage Luxembourg - Canalisations",
            "description": "Service professionnel de débouchage de canalisations au Luxembourg",
            "url": "https://debouchage-luxembourg.com/services/problemes/debouchage-canalisations",
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
                <span>🚽</span>
                <span>🚿</span>
                <span>🚰</span>
                <span>🔧</span>
              </div>
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Débouchage Canalisation Luxembourg - WC Évier Douche
              </h1>
              <p className="text-xl text-center text-gray-600 mb-12">
                Spécialiste débouchage toutes canalisations bouchées au Luxembourg
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Débouchage Professionnel de Canalisations au Luxembourg</h2>
                <p className="mb-6">
                  <strong>Spécialiste du débouchage canalisation au Luxembourg</strong>, notre équipe intervient rapidement pour résoudre tous vos problèmes de canalisations bouchées. WC, évier, douche, baignoire, lave-vaisselle : nous débouchons efficacement toutes les évacuations avec nos équipements professionnels.
                </p>

                {/* CTA Urgence Canalisations */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">🚽</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-blue-800">Canalisation Bouchée en Urgence ?</h3>
                      <div className="mt-2 text-blue-700">
                        <p className="text-sm">
                          <strong>Intervention canalisations 24h/24</strong> - WC bouché ? Évier qui reflue ? Douche bouchée ? Notre équipe peut intervenir sous 2h partout au Luxembourg !
                        </p>
                        <a 
                          href="tel:+352661297770" 
                          className="inline-flex items-center mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
                        >
                          📞 +352 661 297 770 - SOS Canalisations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Types de Canalisations Débouchées</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🚽</div>
                    <h3 className="text-xl font-semibold mb-3">WC et Toilettes Bouchés</h3>
                    <p className="mb-4">Intervention d'urgence pour WC complètement bouchés</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Papier WC excessif</strong> : dissolution et évacuation</li>
                      <li><strong>Lingettes et serviettes</strong> : extraction mécanique</li>
                      <li><strong>Objets tombés</strong> : récupération sans casse</li>
                      <li><strong>Accumulation calcaire</strong> : détartrage professionnel</li>
                      <li><strong>Chasse d'eau défaillante</strong> : réparation incluse</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🚿</div>
                    <h3 className="text-xl font-semibold mb-3">Douche et Baignoire</h3>
                    <p className="mb-4">Évacuation lente ou arrêtée dans salle de bain</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Cheveux et poils</strong> : extraction complète bouchon</li>
                      <li><strong>Savon et gel douche</strong> : dissolution dépôts gras</li>
                      <li><strong>Calcaire et tartre</strong> : détartrage canalisations</li>
                      <li><strong>Bonde bouchée</strong> : nettoyage et remplacement</li>
                      <li><strong>Siphon encrassé</strong> : démontage et nettoyage</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🚰</div>
                    <h3 className="text-xl font-semibold mb-3">Évier et Lavabo</h3>
                    <p className="mb-4">Débouchage éviers cuisine et lavabos salle de bain</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Graisse et résidus alimentaires</strong> : dégraissage professionnel</li>
                      <li><strong>Cheveux dans lavabo</strong> : extraction par furet</li>
                      <li><strong>Dentifrices et cosmétiques</strong> : nettoyage chimique</li>
                      <li><strong>Siphon bouteille plein</strong> : vidange et nettoyage</li>
                      <li><strong>Raccords desserrés</strong> : réparation étanchéité</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="text-4xl mb-4">🍽️</div>
                    <h3 className="text-xl font-semibold mb-3">Lave-Vaisselle et Électroménager</h3>
                    <p className="mb-4">Évacuations d'électroménagers bouchées ou lentes</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Filtre lave-vaisselle</strong> : nettoyage et débouchage</li>
                      <li><strong>Tuyau d'évacuation</strong> : hydrocurage spécialisé</li>
                      <li><strong>Raccord en Té bouché</strong> : démontage et nettoyage</li>
                      <li><strong>Lave-linge évacuation</strong> : élimination fibres textiles</li>
                      <li><strong>Siphon de sol</strong> : curage et désinfection</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8 bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">🚽 WC Bouché - Priorité Absolue</h3>
                  <p className="mb-4">
                    Un <strong>WC bouché</strong> est une urgence, surtout s'il s'agit des seules toilettes du logement. Notre équipe intervient en priorité pour ce type de problème avec un délai d'intervention réduit à 1h dans Luxembourg-Ville.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Causes WC Bouché :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Excès de papier WC en une fois</li>
                        <li>• Lingettes "jetables" dans les toilettes</li>
                        <li>• Serviettes hygiéniques et tampons</li>
                        <li>• Jouets ou objets tombés</li>
                        <li>• Accumulation calcaire dans coude</li>
                        <li>• Chasse d'eau insuffisante</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Solutions WC :</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Ventouse professionnelle</strong> haute efficacité</li>
                        <li>• <strong>Furet WC spécialisé</strong> pour objets</li>
                        <li>• <strong>Pompe à vide</strong> pour aspiration</li>
                        <li>• <strong>Hydrocurage léger</strong> si nécessaire</li>
                        <li>• <strong>Démontage WC</strong> si objet coincé</li>
                        <li>• <strong>Réglage chasse d'eau</strong> préventif</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Notre Méthode de Débouchage</h2>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔍</div>
                      <h3 className="font-bold mb-2">1. Diagnostic</h3>
                      <p className="text-sm text-gray-600">Localisation exacte du bouchon, évaluation de la gravité</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔧</div>
                      <h3 className="font-bold mb-2">2. Choix Technique</h3>
                      <p className="text-sm text-gray-600">Sélection de la méthode optimale selon le type de bouchon</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <h3 className="font-bold mb-2">3. Débouchage</h3>
                      <p className="text-sm text-gray-600">Intervention professionnelle avec équipement adapté</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">✅</div>
                      <h3 className="font-bold mb-2">4. Vérification</h3>
                      <p className="text-sm text-gray-600">Test d'écoulement, nettoyage, conseils prévention</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Techniques Professionnelles Utilisées</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 bg-green-50 p-3 rounded-lg">🔧 Débouchage Mécanique - Technique de Base</h3>
                  <p className="mb-4">
                    Le <strong>débouchage mécanique</strong> reste la méthode la plus sûre et efficace pour la plupart des canalisations domestiques. Nos techniciens choisissent l'outil optimal selon le type de canalisation et d'obstruction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-green-800">Ventouse Professionnelle</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• WC bouchés par papier/matières</li>
                        <li>• Éviers avec bouchons légers</li>
                        <li>• Action par surpression/dépression</li>
                        <li>• Résultats immédiats visibles</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-green-800">Furet Électrique</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bouchons compacts et résistants</li>
                        <li>• Canalisations de 40mm à 200mm</li>
                        <li>• Rotation puissante automatique</li>
                        <li>• Portée jusqu'à 30 mètres</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-green-800">Aspiration Professionnelle</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Récupération objets tombés</li>
                        <li>• Évacuation matières molles</li>
                        <li>• Technique propre sans dégâts</li>
                        <li>• Efficace sur WC et siphons</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 bg-blue-50 p-3 rounded-lg">💧 Hydrocurage - Pour Canalisations Très Bouchées</h3>
                  <p className="mb-4">
                    L'<strong>hydrocurage</strong> est notre solution pour les canalisations très encrassées ou les bouchons anciens que les méthodes classiques ne peuvent pas traiter. Cette technique utilise l'eau sous haute pression.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-blue-800">Quand Utiliser l'Hydrocurage</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Bouchons anciens et durcis</li>
                        <li>• Accumulation de graisses importantes</li>
                        <li>• Canalisations longues (collecteurs)</li>
                        <li>• Dépôts calcaires incrustés</li>
                        <li>• Biofilm et accumulations organiques</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold mb-2 text-blue-800">Avantages Hydrocurage</h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• <strong>Nettoyage complet</strong> des parois</li>
                        <li>• <strong>Efficacité maximale</strong> sur gros bouchons</li>
                        <li>• <strong>Prévention récidives</strong> long terme</li>
                        <li>• <strong>Écologique</strong> : eau uniquement</li>
                        <li>• <strong>Résultat durable</strong> garanti</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Urgences Canalisations par Priorité</h2>

                <div className="mb-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold mb-2 text-red-800">🚨 URGENCE ABSOLUE</h4>
                      <p className="text-sm mb-2 text-red-700">Intervention sous 1h</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• WC unique du logement bouché</li>
                        <li>• Refoulement d'eaux usées</li>
                        <li>• Inondation par canalisation</li>
                        <li>• Odeurs d'égouts fortes</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold mb-2 text-orange-800">⚡ URGENCE ÉLEVÉE</h4>
                      <p className="text-sm mb-2 text-orange-700">Intervention sous 2h</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Évier cuisine complètement bouché</li>
                        <li>• Douche ou baignoire inutilisable</li>
                        <li>• Lave-vaisselle qui déborde</li>
                        <li>• Plusieurs évacuations lentes</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold mb-2 text-yellow-800">⏰ URGENCE MODÉRÉE</h4>
                      <p className="text-sm mb-2 text-yellow-700">Intervention sous 4h</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Évacuation lente mais fonctionnelle</li>
                        <li>• WC avec 2ème toilette disponible</li>
                        <li>• Lavabo salle de bain bouché</li>
                        <li>• Entretien préventif programmé</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section tarifs */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800">💰 Tarifs Débouchage Canalisations Luxembourg</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Tarifs par Type</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>WC bouché simple</span>
                          <span className="font-semibold">à partir de 80€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Évier/Lavabo bouché</span>
                          <span className="font-semibold">à partir de 70€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Douche/Baignoire</span>
                          <span className="font-semibold">à partir de 90€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Hydrocurage spécialisé</span>
                          <span className="font-semibold">à partir de 150€</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Déplacement Luxembourg</span>
                          <span className="font-semibold">gratuit</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3 text-green-700">Garanties Incluses</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ <strong>Diagnostic gratuit</strong> avant toute intervention</li>
                        <li>✓ <strong>Prix fixe annoncé</strong> avant le début des travaux</li>
                        <li>✓ <strong>Pas de majoration</strong> weekend ni jours fériés</li>
                        <li>✓ <strong>Garantie efficacité</strong> 30 jours</li>
                        <li>✓ <strong>Nettoyage inclus</strong> après intervention</li>
                        <li>✓ <strong>Conseils prévention</strong> personnalisés</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-6">🏆 Pourquoi Nous Choisir pour Vos Canalisations ?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">⚡</span>
                          <div>
                            <span className="font-semibold">Intervention ultra-rapide 24/7</span>
                            <p className="text-sm text-gray-600">Sur place sous 1h pour urgences WC, 2h pour autres cas</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🔧</span>
                          <div>
                            <span className="font-semibold">Équipement professionnel complet</span>
                            <p className="text-sm text-gray-600">Furets électriques, hydrocureuse, caméras d'inspection</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">👨‍🔧</span>
                          <div>
                            <span className="font-semibold">Techniciens spécialisés canalisations</span>
                            <p className="text-sm text-gray-600">15+ ans d'expérience, formation technique continue</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">💰</span>
                          <div>
                            <span className="font-semibold">Tarifs fixes et transparents</span>
                            <p className="text-sm text-gray-600">Prix annoncé avant intervention, pas de surprise</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🛡️</span>
                          <div>
                            <span className="font-semibold">Garantie résultat 30 jours</span>
                            <p className="text-sm text-gray-600">Retour gratuit si bouchon récidive</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">🌿</span>
                          <div>
                            <span className="font-semibold">Méthodes respectueuses</span>
                            <p className="text-sm text-gray-600">Techniques mécaniques, préservation de vos installations</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Questions Fréquentes Débouchage Canalisations</h2>
                <div className="space-y-6 mb-12">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Débouchage Canalisations dans Tout le Luxembourg</h2>
                <p className="mb-8">
                  Notre service de <strong>débouchage canalisation Luxembourg</strong> couvre l'ensemble du territoire : Luxembourg-Ville, Esch-sur-Alzette, Differdange, Dudelange, Ettelbruck, et toutes les communes environnantes. Notre équipe mobile avec équipement professionnel peut intervenir partout au Grand-Duché sous 2h pour toutes urgences canalisations.
                </p>
              </div>

              {/* CTA Final Canalisations */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">🚽 SOS Canalisation Bouchée !</h2>
                <p className="text-lg mb-6">Intervention d'urgence sous 2h - WC, évier, douche, toutes canalisations</p>
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
                    Devis Gratuit Urgent
                  </a>
                </div>
                <p className="mt-4 text-sm opacity-90">
                  ✓ Intervention sous 2h ✓ Prix fixe garanti ✓ Garantie efficacité 30 jours
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