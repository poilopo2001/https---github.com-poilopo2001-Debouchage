/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Services Particuliers - Redirige vers /services/debouchage-residentiels
      {
        source: '/services/debouchage-particuliers-maison',
        destination: '/services/debouchage-residentiels',
        permanent: true,
      },
      {
        source: '/services/debouchage-particuliers-appartement',
        destination: '/services/debouchage-residentiels',
        permanent: true,
      },
      {
        source: '/services/debouchage-particuliers-villa',
        destination: '/services/debouchage-residentiels',
        permanent: true,
      },
      {
        source: '/services/debouchage-particuliers-studio',
        destination: '/services/debouchage-residentiels',
        permanent: true,
      },

      // Services Professionnels - Redirige vers /services/debouchage-commerciaux
      {
        source: '/services/debouchage-professionnels-restaurant',
        destination: '/services/debouchage-commerciaux',
        permanent: true,
      },
      {
        source: '/services/debouchage-professionnels-hotel',
        destination: '/services/debouchage-commerciaux',
        permanent: true,
      },
      {
        source: '/services/debouchage-professionnels-commerce',
        destination: '/services/debouchage-commerciaux',
        permanent: true,
      },

      // Interventions Techniques Hydrocurage - Redirige vers /services/interventions/techniques-hydrocurage
      {
        source: '/interventions/interventions-mecaniques/hydrocurage',
        destination: '/services/interventions/techniques-hydrocurage',
        permanent: true,
      },
      {
        source: '/interventions/interventions-mecaniques/hydrocurage-haute-pression',
        destination: '/services/interventions/techniques-hydrocurage',
        permanent: true,
      },
      {
        source: '/interventions/techniques-hydrocurage',
        destination: '/services/interventions/techniques-hydrocurage',
        permanent: true,
      },

      // Interventions Techniques Furet - Redirige vers /services/interventions/techniques-furet
      {
        source: '/interventions/interventions-mecaniques/debouchage-furet-electrique',
        destination: '/services/interventions/techniques-furet',
        permanent: true,
      },
      {
        source: '/interventions/interventions-mecaniques/debouchage-furet-manuel',
        destination: '/services/interventions/techniques-furet',
        permanent: true,
      },
      {
        source: '/interventions/techniques-furet',
        destination: '/services/interventions/techniques-furet',
        permanent: true,
      },

      // Problèmes d'Odeurs - Redirige vers /services/problemes/elimination-odeurs
      {
        source: '/problemes/odeurs-emanations/odeurs-salle-bain',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/odeurs-cuisine',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/odeurs-sous-sol',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/odeurs-fosse-septique',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/mauvaises-odeurs-egouts',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/gaz-canalisation',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/ventilation-defectueuse',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/siphon-asseche',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      {
        source: '/problemes/odeurs-emanations/odeurs-vide-sanitaire',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },

      // Problèmes de Canalisations - Redirige vers /services/problemes/debouchage-canalisations
      {
        source: '/problemes/canalisations-bouchees/wc',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/evier',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/douche',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/baignoire',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/lavabo',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/lave-vaisselle',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/lave-linge',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/siphon',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },
      {
        source: '/problemes/canalisations-bouchees/evacuation-lente',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },

      // Patterns génériques pour capturer d'autres URLs d'odeurs
      {
        source: '/problemes/odeurs-emanations/:slug*',
        destination: '/services/problemes/elimination-odeurs',
        permanent: true,
      },
      
      // Patterns génériques pour capturer d'autres URLs de canalisations
      {
        source: '/problemes/canalisations-bouchees/:slug*',
        destination: '/services/problemes/debouchage-canalisations',
        permanent: true,
      },

      // Redirections génériques pour l'ancien système de problèmes
      {
        source: '/problemes/:slug*',
        destination: '/services',
        permanent: true,
      },

      // Redirections génériques pour l'ancien système d'interventions
      {
        source: '/interventions/:slug*',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig