import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Débouchage Luxembourg',
  description: 'Politique de confidentialité et protection des données personnelles. RGPD conforme pour les services de débouchage au Luxembourg.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-blue-800">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
                <p className="text-blue-700 mt-2">
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Débouchage Luxembourg</strong></p>
                <p>Téléphone : +352 661 297 770</p>
                <p>Email : contact@debouchage.lu</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Données collectées</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Données d'identification</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse postale</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Données techniques</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées et durée de visite</li>
                <li>Cookies et données de navigation</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">2.3 Données liées aux services</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Description du problème de débouchage</li>
                <li>Type d'intervention demandée</li>
                <li>Adresse d'intervention</li>
                <li>Historique des interventions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Finalités du traitement</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-700">Gestion des demandes d'intervention</h4>
                  <p className="text-gray-600">Traitement de votre demande, planification et réalisation des interventions de débouchage.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-700">Suivi client</h4>
                  <p className="text-gray-600">Communication sur l'avancement des travaux, facturation et support après-vente.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-700">Amélioration des services</h4>
                  <p className="text-gray-600">Analyse des performances du site web et amélioration de nos services.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium text-gray-700">Obligations légales</h4>
                  <p className="text-gray-600">Respect des obligations comptables et fiscales.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Base légale du traitement</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Exécution du contrat</h4>
                  <p className="text-sm text-gray-600">Pour la réalisation des services de débouchage demandés.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Intérêt légitime</h4>
                  <p className="text-sm text-gray-600">Pour l'amélioration de nos services et la gestion de notre activité.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Consentement</h4>
                  <p className="text-sm text-gray-600">Pour l'envoi de communications commerciales.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">Obligation légale</h4>
                  <p className="text-sm text-gray-600">Pour le respect des obligations comptables et fiscales.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Durée de conservation</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-700 font-medium">Type de données</th>
                      <th className="px-4 py-2 text-left text-gray-700 font-medium">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Données clients actifs</td>
                      <td className="px-4 py-2 text-gray-600">Durée de la relation commerciale + 3 ans</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Données comptables</td>
                      <td className="px-4 py-2 text-gray-600">10 ans</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Données de navigation</td>
                      <td className="px-4 py-2 text-gray-600">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">Demandes de devis non converties</td>
                      <td className="px-4 py-2 text-gray-600">3 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Vos droits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit d'accès</h4>
                  <p className="text-sm text-gray-600">Connaître les données que nous détenons sur vous.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger les données inexactes.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit à l'effacement</h4>
                  <p className="text-sm text-gray-600">Supprimer vos données sous certaines conditions.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit d'opposition</h4>
                  <p className="text-sm text-gray-600">Vous opposer au traitement de vos données.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit à la portabilité</h4>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format structuré.</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-700 mb-2">✓ Droit de limitation</h4>
                  <p className="text-sm text-gray-600">Limiter le traitement de vos données.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic via Google Tag Manager.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">Types de cookies utilisés :</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies d'analyse :</strong> Google Analytics via GTM pour mesurer l'audience</li>
                  <li><strong>Cookies de préférences :</strong> Mémorisation de vos choix</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Sécurité</h2>
              <p className="text-gray-600 mb-4">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel aux bonnes pratiques</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact et réclamations</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800 mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique :
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li><strong>Email :</strong> contact@debouchage.lu</li>
                  <li><strong>Téléphone :</strong> +352 661 297 770</li>
                </ul>
                <p className="text-sm text-blue-600 mt-4">
                  En cas de non-réponse ou de réponse insatisfaisante, vous pouvez saisir la Commission nationale pour la protection des données (CNPD) du Luxembourg.
                </p>
              </div>
            </section>

            <div className="border-t pt-8 mt-12">
              <p className="text-sm text-gray-500">
                Cette politique de confidentialité peut être modifiée. La version en vigueur est celle publiée sur notre site web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}