export interface ServiceCategory {
  id: string
  name: string
  description: string
  services: ServiceType[]
}

export interface ServiceType {
  id: string
  name: string
  slug: string
  shortDescription: string
  fullDescription?: string
  icon?: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'particuliers',
    name: 'Débouchage Particuliers',
    description: 'Solutions de débouchage adaptées à tous types de logements',
    services: [
      {
        id: 'residentiels',
        name: 'Débouchage Résidentiel',
        slug: 'debouchage-residentiels',
        shortDescription: 'Solutions complètes pour tous types d\'habitations : maisons, appartements, villas et studios',
        icon: '🏠',
        fullDescription: 'Notre service de débouchage résidentiel offre des solutions professionnelles pour tous types d\'habitations au Luxembourg. Nos techniciens expérimentés interviennent rapidement pour résoudre vos problèmes de canalisations dans les maisons individuelles, appartements, villas et studios.'
      },
      {
        id: 'maison',
        name: 'Débouchage Maison',
        slug: 'debouchage-particuliers-maison',
        shortDescription: 'Intervention spécialisée pour les maisons individuelles',
        icon: '🏡'
      },
      {
        id: 'appartement',
        name: 'Débouchage Appartement',
        slug: 'debouchage-particuliers-appartement',
        shortDescription: 'Solutions adaptées aux systèmes de canalisations d\'appartements',
        icon: '🏢'
      },
      {
        id: 'villa',
        name: 'Débouchage Villa',
        slug: 'debouchage-particuliers-villa',
        shortDescription: 'Services professionnels pour villas et grandes propriétés',
        icon: '🏘️'
      },
      {
        id: 'studio',
        name: 'Débouchage Studio',
        slug: 'debouchage-particuliers-studio',
        shortDescription: 'Interventions rapides pour petits espaces',
        icon: '🛏️'
      },
      {
        id: 'jardin',
        name: 'Débouchage Jardin',
        slug: 'debouchage-particuliers-jardin',
        shortDescription: 'Résolution des problèmes d\'évacuation extérieurs',
        icon: '🌳'
      },
      {
        id: 'cave',
        name: 'Débouchage Cave',
        slug: 'debouchage-particuliers-cave',
        shortDescription: 'Traitement des canalisations souterraines',
        icon: '🚪'
      },
      {
        id: 'garage',
        name: 'Débouchage Garage',
        slug: 'debouchage-particuliers-garage',
        shortDescription: 'Solutions pour les systèmes d\'évacuation de garage',
        icon: '🚗'
      },
      {
        id: 'terrasse',
        name: 'Débouchage Terrasse',
        slug: 'debouchage-particuliers-terrasse',
        shortDescription: 'Entretien des évacuations de terrasse',
        icon: '🌞'
      },
      {
        id: 'piscine',
        name: 'Débouchage Piscine',
        slug: 'debouchage-particuliers-piscine',
        shortDescription: 'Maintenance des systèmes de filtration et d\'évacuation',
        icon: '🏊'
      }
    ]
  },
  {
    id: 'restauration',
    name: 'Débouchage Restauration',
    description: 'Solutions spécifiques pour les établissements de restauration',
    services: [
      {
        id: 'cuisine',
        name: 'Débouchage Cuisine Professionnelle',
        slug: 'debouchage-restaurant-cuisine',
        shortDescription: 'Maintenance des systèmes d\'évacuation de cuisine',
        icon: '🍳'
      },
      {
        id: 'bac-graisse',
        name: 'Débouchage Bac à Graisse',
        slug: 'debouchage-restaurant-bac-graisse',
        shortDescription: 'Nettoyage et entretien des bacs à graisse',
        icon: '🧼'
      },
      {
        id: 'evacuation',
        name: 'Débouchage Évacuation Restaurant',
        slug: 'debouchage-restaurant-evacuation',
        shortDescription: 'Solutions pour les systèmes d\'évacuation complexes',
        icon: '🚰'
      },
      {
        id: 'sanitaires',
        name: 'Débouchage Sanitaires Restaurant',
        slug: 'debouchage-restaurant-sanitaires',
        shortDescription: 'Entretien et débouchage des installations sanitaires',
        icon: '🚽'
      },
      {
        id: 'cave-resto',
        name: 'Débouchage Cave Restaurant',
        slug: 'debouchage-restaurant-cave',
        shortDescription: 'Solutions pour les espaces souterrains',
        icon: '🍷'
      },
      {
        id: 'terrasse-resto',
        name: 'Débouchage Terrasse Restaurant',
        slug: 'debouchage-restaurant-terrasse',
        shortDescription: 'Maintenance des évacuations extérieures',
        icon: '🌞'
      },
      {
        id: 'fast-food',
        name: 'Débouchage Fast-Food',
        slug: 'debouchage-fast-food',
        shortDescription: 'Solutions adaptées aux établissements de restauration rapide',
        icon: '🍔'
      },
      {
        id: 'cantine',
        name: 'Débouchage Cantine',
        slug: 'debouchage-cantine',
        shortDescription: 'Entretien des systèmes de cantine',
        icon: '🥘'
      },
      {
        id: 'brasserie',
        name: 'Débouchage Brasserie',
        slug: 'debouchage-brasserie',
        shortDescription: 'Solutions spécifiques pour les brasseries',
        icon: '🍺'
      }
    ]
  },
  {
    id: 'hotellerie',
    name: 'Débouchage Hôtellerie',
    description: 'Services adaptés aux établissements hôteliers',
    services: [
      {
        id: 'chambres',
        name: 'Débouchage Chambres d\'Hôtel',
        slug: 'debouchage-hotel-chambres',
        shortDescription: 'Maintenance des systèmes dans les chambres',
        icon: '🛏️'
      },
      {
        id: 'cuisine-hotel',
        name: 'Débouchage Cuisine d\'Hôtel',
        slug: 'debouchage-hotel-cuisine',
        shortDescription: 'Solutions pour les cuisines professionnelles',
        icon: '🍳'
      },
      {
        id: 'sanitaires-hotel',
        name: 'Débouchage Sanitaires Hôtel',
        slug: 'debouchage-hotel-sanitaires',
        shortDescription: 'Entretien des installations sanitaires',
        icon: '🚽'
      },
      {
        id: 'spa',
        name: 'Débouchage Spa',
        slug: 'debouchage-hotel-spa',
        shortDescription: 'Maintenance des systèmes de spa',
        icon: '🧖'
      },
      {
        id: 'piscine-hotel',
        name: 'Débouchage Piscine Hôtel',
        slug: 'debouchage-hotel-piscine',
        shortDescription: 'Entretien des systèmes de piscine',
        icon: '🏊'
      },
      {
        id: 'buanderie',
        name: 'Débouchage Buanderie',
        slug: 'debouchage-hotel-buanderie',
        shortDescription: 'Solutions pour les espaces de lavage',
        icon: '🧺'
      },
      {
        id: 'residence-touristique',
        name: 'Débouchage Résidence Touristique',
        slug: 'debouchage-residence-touristique',
        shortDescription: 'Services adaptés aux résidences de vacances',
        icon: '🏨'
      },
      {
        id: 'gite',
        name: 'Débouchage Gîte',
        slug: 'debouchage-gite',
        shortDescription: 'Maintenance pour les gîtes et locations',
        icon: '🏡'
      },
      {
        id: 'camping',
        name: 'Débouchage Camping',
        slug: 'debouchage-camping',
        shortDescription: 'Solutions pour les installations de camping',
        icon: '⛺'
      }
    ]
  },
  {
    id: 'immeubles',
    name: 'Débouchage Immeubles',
    description: 'Solutions spécialisées pour les immeubles collectifs',
    services: [
      {
        id: 'collectif',
        name: 'Débouchage Immeuble Collectif',
        slug: 'debouchage-immeuble-collectif',
        shortDescription: 'Maintenance des systèmes d\'évacuation pour immeubles',
        icon: '🏢'
      },
      {
        id: 'parties-communes',
        name: 'Débouchage Parties Communes',
        slug: 'debouchage-parties-communes',
        shortDescription: 'Entretien des espaces communs et partagés',
        icon: '🚪'
      },
      {
        id: 'colonnes-verticales',
        name: 'Débouchage Colonnes Verticales',
        slug: 'debouchage-colonnes-verticales',
        shortDescription: 'Solutions pour les systèmes verticaux de canalisations',
        icon: '🏗️'
      },
      {
        id: 'sous-sol',
        name: 'Débouchage Sous-Sol',
        slug: 'debouchage-sous-sol',
        shortDescription: 'Traitement des canalisations souterraines',
        icon: '⬇️'
      },
      {
        id: 'parking',
        name: 'Débouchage Parking',
        slug: 'debouchage-parking',
        shortDescription: 'Maintenance des systèmes d\'évacuation de parking',
        icon: '🚗'
      },
      {
        id: 'local-poubelle',
        name: 'Débouchage Local Poubelle',
        slug: 'debouchage-local-poubelle',
        shortDescription: 'Entretien des locaux de gestion des déchets',
        icon: '🗑️'
      },
      {
        id: 'vide-ordures',
        name: 'Débouchage Vide-Ordures',
        slug: 'debouchage-vide-ordures',
        shortDescription: 'Solutions pour les systèmes de vide-ordures',
        icon: '📦'
      },
      {
        id: 'toiture-terrasse',
        name: 'Débouchage Toiture Terrasse',
        slug: 'debouchage-toiture-terrasse',
        shortDescription: 'Maintenance des évacuations de toiture',
        icon: '🏠'
      },
      {
        id: 'reseau-principal',
        name: 'Débouchage Réseau Principal',
        slug: 'debouchage-reseau-principal',
        shortDescription: 'Entretien du réseau principal de canalisations',
        icon: '🚰'
      }
    ]
  },
  {
    id: 'coproprietes',
    name: 'Débouchage Copropriétés',
    description: 'Services adaptés aux espaces et infrastructures de copropriétés',
    services: [
      {
        id: 'residence',
        name: 'Débouchage Copropriété Résidence',
        slug: 'debouchage-copropriete-residence',
        shortDescription: 'Solutions pour les résidences de copropriété',
        icon: '🏘️'
      },
      {
        id: 'jardins',
        name: 'Débouchage Jardins de Copropriété',
        slug: 'debouchage-copropriete-jardins',
        shortDescription: 'Entretien des systèmes d\'évacuation des espaces verts',
        icon: '🌳'
      },
      {
        id: 'parkings',
        name: 'Débouchage Parkings de Copropriété',
        slug: 'debouchage-copropriete-parkings',
        shortDescription: 'Maintenance des systèmes de drainage des parkings',
        icon: '🚗'
      },
      {
        id: 'piscine',
        name: 'Débouchage Piscine de Copropriété',
        slug: 'debouchage-copropriete-piscine',
        shortDescription: 'Entretien des systèmes de piscine partagée',
        icon: '🏊'
      },
      {
        id: 'espaces-verts',
        name: 'Débouchage Espaces Verts',
        slug: 'debouchage-copropriete-espaces-verts',
        shortDescription: 'Solutions pour les zones vertes communes',
        icon: '🌿'
      },
      {
        id: 'local-technique',
        name: 'Débouchage Local Technique',
        slug: 'debouchage-copropriete-local-technique',
        shortDescription: 'Maintenance des locaux techniques',
        icon: '🔧'
      },
      {
        id: 'caves',
        name: 'Débouchage Caves de Copropriété',
        slug: 'debouchage-copropriete-caves',
        shortDescription: 'Entretien des systèmes souterrains',
        icon: '🚪'
      },
      {
        id: 'communs',
        name: 'Débouchage Espaces Communs',
        slug: 'debouchage-copropriete-communs',
        shortDescription: 'Solutions pour les zones partagées',
        icon: '🏢'
      },
      {
        id: 'regard',
        name: 'Débouchage Regard',
        slug: 'debouchage-copropriete-regard',
        shortDescription: 'Maintenance des regards et points de collecte',
        icon: '🕳️'
      }
    ]
  },
  {
    id: 'entreprises',
    name: 'Débouchage Entreprises',
    description: 'Solutions professionnelles pour divers environnements d\'entreprise',
    services: [
      {
        id: 'bureaux',
        name: 'Débouchage Bureaux',
        slug: 'debouchage-bureaux',
        shortDescription: 'Maintenance des systèmes dans les espaces de travail',
        icon: '🏢'
      },
      {
        id: 'commerces',
        name: 'Débouchage Commerces',
        slug: 'debouchage-commerces',
        shortDescription: 'Solutions pour les établissements commerciaux',
        icon: '🏪'
      },
      {
        id: 'entrepots',
        name: 'Débouchage Entrepôts',
        slug: 'debouchage-entrepots',
        shortDescription: 'Maintenance des systèmes d\'évacuation industriels',
        icon: '🏭'
      },
      {
        id: 'ateliers',
        name: 'Débouchage Ateliers',
        slug: 'debouchage-ateliers',
        shortDescription: 'Solutions pour les espaces de production',
        icon: '🔨'
      },
      {
        id: 'usines',
        name: 'Débouchage Usines',
        slug: 'debouchage-usines',
        shortDescription: 'Entretien des systèmes industriels complexes',
        icon: '🏭'
      },
      {
        id: 'locaux-professionnels',
        name: 'Débouchage Locaux Professionnels',
        slug: 'debouchage-locaux-professionnels',
        shortDescription: 'Solutions adaptées à divers environnements professionnels',
        icon: '🏢'
      },
      {
        id: 'zones-activites',
        name: 'Débouchage Zones d\'Activités',
        slug: 'debouchage-zones-activites',
        shortDescription: 'Maintenance des infrastructures de zones industrielles',
        icon: '🏗️'
      },
      {
        id: 'centres-commerciaux',
        name: 'Débouchage Centres Commerciaux',
        slug: 'debouchage-centres-commerciaux',
        shortDescription: 'Solutions pour les grandes surfaces commerciales',
        icon: '🛍️'
      },
      {
        id: 'magasins',
        name: 'Débouchage Magasins',
        slug: 'debouchage-magasins',
        shortDescription: 'Entretien des systèmes d\'évacuation de magasins',
        icon: '🏪'
      }
    ]
  },
  {
    id: 'collectivites',
    name: 'Débouchage Collectivités',
    description: 'Services adaptés aux bâtiments et infrastructures publiques',
    services: [
      {
        id: 'ecoles',
        name: 'Débouchage Écoles',
        slug: 'debouchage-ecoles',
        shortDescription: 'Maintenance des systèmes dans les établissements scolaires',
        icon: '🏫'
      },
      {
        id: 'hopitaux',
        name: 'Débouchage Hôpitaux',
        slug: 'debouchage-hopitaux',
        shortDescription: 'Solutions spécialisées pour les établissements de santé',
        icon: '🏥'
      },
      {
        id: 'mairies',
        name: 'Débouchage Mairies',
        slug: 'debouchage-mairies',
        shortDescription: 'Entretien des bâtiments administratifs',
        icon: '🏛️'
      },
      {
        id: 'salles-communales',
        name: 'Débouchage Salles Communales',
        slug: 'debouchage-salles-communales',
        shortDescription: 'Maintenance des espaces publics',
        icon: '🏟️'
      },
      {
        id: 'centres-sportifs',
        name: 'Débouchage Centres Sportifs',
        slug: 'debouchage-centres-sportifs',
        shortDescription: 'Solutions pour les infrastructures sportives',
        icon: '🏀'
      },
      {
        id: 'piscines-publiques',
        name: 'Débouchage Piscines Publiques',
        slug: 'debouchage-piscines-publiques',
        shortDescription: 'Entretien des systèmes de piscine partagée',
        icon: '🏊'
      },
      {
        id: 'bibliotheques',
        name: 'Débouchage Bibliothèques',
        slug: 'debouchage-bibliotheques',
        shortDescription: 'Maintenance des bâtiments culturels',
        icon: '📚'
      },
      {
        id: 'creches',
        name: 'Débouchage Crèches',
        slug: 'debouchage-creches',
        shortDescription: 'Solutions pour les établissements petite enfance',
        icon: '👶'
      },
      {
        id: 'maisons-retraite',
        name: 'Débouchage Maisons de Retraite',
        slug: 'debouchage-maisons-retraite',
        shortDescription: 'Entretien des établissements pour personnes âgées',
        icon: '🏡'
      }
    ]
  },
  {
    id: 'industrie',
    name: 'Débouchage Industrie',
    description: 'Solutions adaptées aux différents secteurs industriels',
    services: [
      {
        id: 'alimentaire',
        name: 'Débouchage Industrie Alimentaire',
        slug: 'debouchage-industrie-alimentaire',
        shortDescription: 'Solutions spécialisées pour l\'industrie agroalimentaire',
        icon: '🍽️'
      },
      {
        id: 'chimique',
        name: 'Débouchage Industrie Chimique',
        slug: 'debouchage-industrie-chimique',
        shortDescription: 'Maintenance des systèmes dans les environnements chimiques',
        icon: '🧪'
      },
      {
        id: 'pharmaceutique',
        name: 'Débouchage Industrie Pharmaceutique',
        slug: 'debouchage-industrie-pharmaceutique',
        shortDescription: 'Solutions adaptées aux normes pharmaceutiques',
        icon: '💊'
      },
      {
        id: 'automobile',
        name: 'Débouchage Industrie Automobile',
        slug: 'debouchage-industrie-automobile',
        shortDescription: 'Entretien des systèmes dans les usines automobiles',
        icon: '🚗'
      },
      {
        id: 'textile',
        name: 'Débouchage Industrie Textile',
        slug: 'debouchage-industrie-textile',
        shortDescription: 'Solutions pour les environnements de production textile',
        icon: '👚'
      },
      {
        id: 'metallurgie',
        name: 'Débouchage Industrie Métallurgie',
        slug: 'debouchage-industrie-metallurgie',
        shortDescription: 'Maintenance des systèmes dans les usines métallurgiques',
        icon: '🔧'
      },
      {
        id: 'cosmetique',
        name: 'Débouchage Industrie Cosmétique',
        slug: 'debouchage-industrie-cosmetique',
        shortDescription: 'Solutions adaptées aux normes de l\'industrie cosmétique',
        icon: '💄'
      },
      {
        id: 'papeterie',
        name: 'Débouchage Industrie Papeterie',
        slug: 'debouchage-industrie-papeterie',
        shortDescription: 'Entretien des systèmes dans les usines papetières',
        icon: '📄'
      },
      {
        id: 'electronique',
        name: 'Débouchage Industrie Électronique',
        slug: 'debouchage-industrie-electronique',
        shortDescription: 'Solutions pour les environnements de production électronique',
        icon: '🖥️'
      }
    ]
  },
  {
    id: 'secteurs-specialises',
    name: 'Débouchage Secteurs Spécialisés',
    description: 'Solutions pour des environnements à besoins spécifiques',
    services: [
      {
        id: 'laboratoires',
        name: 'Débouchage Laboratoires',
        slug: 'debouchage-laboratoires',
        shortDescription: 'Solutions adaptées aux environnements de recherche',
        icon: '🔬'
      },
      {
        id: 'cliniques-veterinaires',
        name: 'Débouchage Cliniques Vétérinaires',
        slug: 'debouchage-cliniques-veterinaires',
        shortDescription: 'Maintenance des systèmes dans les cliniques vétérinaires',
        icon: '🐶'
      },
      {
        id: 'centres-recherche',
        name: 'Débouchage Centres de Recherche',
        slug: 'debouchage-centres-recherche',
        shortDescription: 'Solutions pour les infrastructures de recherche',
        icon: '🧬'
      },
      {
        id: 'salles-sport',
        name: 'Débouchage Salles de Sport',
        slug: 'debouchage-salles-sport',
        shortDescription: 'Entretien des systèmes dans les infrastructures sportives',
        icon: '🏋️'
      },
      {
        id: 'stations-service',
        name: 'Débouchage Stations-Service',
        slug: 'debouchage-stations-service',
        shortDescription: 'Solutions pour les infrastructures de distribution de carburant',
        icon: '⛽'
      },
      {
        id: 'laveries',
        name: 'Débouchage Laveries',
        slug: 'debouchage-laveries',
        shortDescription: 'Maintenance des systèmes dans les espaces de lavage',
        icon: '🧺'
      },
      {
        id: 'garages',
        name: 'Débouchage Garages',
        slug: 'debouchage-garages',
        shortDescription: 'Solutions pour les ateliers et espaces de réparation',
        icon: '🚙'
      },
      {
        id: 'centres-formation',
        name: 'Débouchage Centres de Formation',
        slug: 'debouchage-centres-formation',
        shortDescription: 'Entretien des infrastructures éducatives',
        icon: '🎓'
      },
      {
        id: 'data-centers',
        name: 'Débouchage Data Centers',
        slug: 'debouchage-data-centers',
        shortDescription: 'Solutions adaptées aux infrastructures technologiques',
        icon: '🖲️'
      }
    ]
  },
  {
    id: 'odeurs-emanations',
    name: 'ODEURS ET ÉMANATIONS',
    description: 'Solutions professionnelles pour tous les problèmes d\'odeurs dans vos canalisations et installations sanitaires',
    services: [
      {
        id: 'mauvaises-odeurs-egouts',
        name: 'Mauvaises Odeurs d\'Égouts',
        slug: 'mauvaises-odeurs-egouts',
        shortDescription: 'Élimination des odeurs nauséabondes provenant des égouts',
        icon: '🦨'
      },
      {
        id: 'odeurs-salle-bain',
        name: 'Odeurs Salle de Bain',
        slug: 'odeurs-salle-bain',
        shortDescription: 'Traitement des mauvaises odeurs dans votre salle de bain',
        icon: '🚿'
      },
      {
        id: 'odeurs-cuisine',
        name: 'Odeurs Cuisine',
        slug: 'odeurs-cuisine',
        shortDescription: 'Élimination des odeurs désagréables dans votre cuisine',
        icon: '🍳'
      },
      {
        id: 'odeurs-sous-sol',
        name: 'Odeurs Sous-Sol',
        slug: 'odeurs-sous-sol',
        shortDescription: 'Solutions pour les odeurs persistantes dans votre sous-sol',
        icon: '🏚️'
      },
      {
        id: 'odeurs-vide-sanitaire',
        name: 'Odeurs Vide Sanitaire',
        slug: 'odeurs-vide-sanitaire',
        shortDescription: 'Traitement des odeurs dans les vides sanitaires',
        icon: '🏗️'
      },
      {
        id: 'odeurs-fosse-septique',
        name: 'Odeurs Fosse Septique',
        slug: 'odeurs-fosse-septique',
        shortDescription: 'Gestion des odeurs de fosse septique',
        icon: '💨'
      },
      {
        id: 'gaz-canalisation',
        name: 'Gaz Canalisation',
        slug: 'gaz-canalisation',
        shortDescription: 'Détection et traitement des gaz dans les canalisations',
        icon: '⚠️'
      },
      {
        id: 'ventilation-defectueuse',
        name: 'Ventilation Défectueuse',
        slug: 'ventilation-defectueuse',
        shortDescription: 'Réparation des systèmes de ventilation défectueux',
        icon: '🌪️'
      },
      {
        id: 'siphon-asseche',
        name: 'Siphon Asséché',
        slug: 'siphon-asseche',
        shortDescription: 'Traitement des siphons asséchés et prévention des odeurs',
        icon: '🚰'
      }
    ]
  }
]

export function getAllServices(): ServiceType[] {
  return serviceCategories.flatMap(category => category.services)
}

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return getAllServices().find(service => service.slug === slug)
}

export function getServicesByCategory(categoryId: string): ServiceType[] {
  const category = serviceCategories.find(cat => cat.id === categoryId)
  return category ? category.services : []
}
