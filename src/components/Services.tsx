const services = [
  {
    icon: '🏠',
    title: 'Particuliers',
    description: 'Solutions complètes pour maisons et appartements : éviers, WC, douches, baignoires. Intervention rapide et efficace.',
  },
  {
    icon: '🏢',
    title: 'Professionnels',
    description: 'Services spécialisés pour entreprises, restaurants, hôtels. Maintenance préventive et interventions d\'urgence 24/7.',
  },
  {
    icon: '🛁',
    title: 'Sanitaires',
    description: 'Expertise en débouchage de tous types d\'installations : douches italiennes, balnéo, spa, systèmes hydromassants.',
  },
  {
    icon: '⚡',
    title: 'Urgences',
    description: 'Intervention garantie en moins de 2H. Équipe disponible 24/7 pour tous types de problèmes de plomberie.',
  },
  {
    icon: '🔍',
    title: 'Diagnostic',
    description: 'Inspection vidéo haute définition, détection de fuites, analyse complète de vos canalisations.',
  },
  {
    icon: '🌿',
    title: 'Écologique',
    description: 'Techniques modernes et respectueuses de l\'environnement. Produits biodégradables et solutions durables.',
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    description: 'Contrats d\'entretien préventif, curage régulier, protection anti-refoulement et solutions anti-calcaire.',
  },
  {
    icon: '💯',
    title: 'Garantie',
    description: 'Service garanti avec devis gratuit. Transparence totale sur les tarifs et les interventions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solutions Complètes de Débouchage
          </h2>
          <p className="text-xl text-gray-600">
            Expertise professionnelle pour tous vos problèmes de canalisations. 
            Service rapide, efficace et garanti sur tout le Luxembourg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Plus de 50 Services Spécialisés
          </h3>
          <p className="text-lg text-blue-700 mb-6">
            Du simple débouchage aux installations complexes, nous avons la solution adaptée à vos besoins
          </p>
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Voir Tous Nos Services
          </a>
        </div>
      </div>
    </section>
  )
}
