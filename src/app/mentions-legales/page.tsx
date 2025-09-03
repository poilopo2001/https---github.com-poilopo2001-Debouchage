import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions Légales | Débouchage Luxembourg',
  description: 'Mentions légales, informations sur l\'entreprise de débouchage au Luxembourg. Coordonnées, statut juridique et informations légales.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informations sur l'entreprise</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Raison sociale :</strong> Débouchage Luxembourg</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>Adresse :</strong> Luxembourg</p>
                <p><strong>Téléphone :</strong> +352 661 297 770</p>
                <p><strong>Email :</strong> contact@debouchage.lu</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activité</h2>
              <p className="text-gray-600 mb-4">
                L'entreprise a pour activité principale les services de débouchage de canalisations, 
                plomberie d'urgence et interventions techniques sur les systèmes d'évacuation d'eau 
                au Grand-Duché de Luxembourg.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                Le contenu de ce site internet (textes, images, graphismes, logo, icônes, etc.) 
                est la propriété exclusive de Débouchage Luxembourg, à l'exception des marques, 
                logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-gray-600 mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout 
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                est interdite, sauf autorisation écrite préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsabilité</h2>
              <p className="text-gray-600 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le 
                site remis à jour à différentes périodes de l'année, mais peut toutefois contenir 
                des inexactitudes ou des omissions.
              </p>
              <p className="text-gray-600 mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                merci de bien vouloir le signaler par email, à l'adresse contact@debouchage.lu, 
                en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Droit applicable</h2>
              <p className="text-gray-600 mb-4">
                Tout litige en relation avec l'utilisation du site www.debouchage-luxembourg.com 
                est soumis au droit luxembourgeois. Il est fait attribution exclusive de juridiction 
                aux tribunaux compétents du Luxembourg.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Par téléphone : <a href="tel:+352661297770" className="text-blue-600 hover:underline">+352 661 297 770</a></li>
                <li>Par email : <a href="mailto:contact@debouchage.lu" className="text-blue-600 hover:underline">contact@debouchage.lu</a></li>
              </ul>
            </section>

            <div className="border-t pt-8 mt-12">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}