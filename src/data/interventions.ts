export interface Intervention {
  id: string
  name: string
  slug: string
  shortDescription: string
  fullDescription?: string
  icon?: string
}

export interface InterventionCategory {
  id: string
  name: string
  slug: string
  description: string
  interventions: Intervention[]
}

export const interventionCategories: InterventionCategory[] = [
  {
    id: 'interventions-mecaniques',
    name: 'INTERVENTIONS MÉCANIQUES',
    slug: 'interventions-mecaniques',
    description: 'Solutions mécaniques professionnelles pour le débouchage et l\'entretien de vos canalisations',
    interventions: [
      {
        id: 'hydrocurage',
        name: 'Hydrocurage',
        slug: 'hydrocurage',
        shortDescription: 'Nettoyage puissant par jet d\'eau haute pression',
        icon: '💧',
        fullDescription: 'L\'hydrocurage est une technique de nettoyage professionnelle utilisant de l\'eau à haute pression pour éliminer efficacement les obstructions et les dépôts dans vos canalisations. Cette méthode est particulièrement efficace pour les conduites de grand diamètre.'
      },
      {
        id: 'hydrocurage-haute-pression',
        name: 'Hydrocurage Haute Pression',
        slug: 'hydrocurage-haute-pression',
        shortDescription: 'Débouchage intensif avec pression maximale',
        icon: '🌊',
        fullDescription: 'L\'hydrocurage haute pression permet d\'éliminer les obstructions les plus tenaces grâce à une pression d\'eau extrêmement élevée. Cette technique est idéale pour les canalisations fortement encrassées ou bouchées.'
      },
      {
        id: 'debouchage-furet-electrique',
        name: 'Débouchage Furet Électrique',
        slug: 'debouchage-furet-electrique',
        shortDescription: 'Débouchage motorisé pour obstacles tenaces',
        icon: '⚡',
        fullDescription: 'Le furet électrique est un outil motorisé permettant de déboucher rapidement et efficacement les canalisations. Sa puissance rotative permet de venir à bout des bouchons les plus résistants.'
      },
      {
        id: 'debouchage-furet-manuel',
        name: 'Débouchage Furet Manuel',
        slug: 'debouchage-furet-manuel',
        shortDescription: 'Solution mécanique simple et efficace',
        icon: '🔧',
        fullDescription: 'Le furet manuel est un outil simple mais efficace pour déboucher les canalisations de petit diamètre. Il est particulièrement adapté pour les interventions rapides sur les éviers et lavabos.'
      },
      {
        id: 'debouchage-ressort',
        name: 'Débouchage Ressort',
        slug: 'debouchage-ressort',
        shortDescription: 'Outil flexible pour coudes difficiles',
        icon: '🔩',
        fullDescription: 'Le ressort de débouchage est spécialement conçu pour naviguer dans les coudes et les angles des canalisations. Sa flexibilité permet d\'atteindre les obstacles même dans les configurations complexes.'
      },
      {
        id: 'debouchage-spirale',
        name: 'Débouchage Spirale',
        slug: 'debouchage-spirale',
        shortDescription: 'Nettoyage en profondeur des conduites',
        icon: '🌀',
        fullDescription: 'La spirale de débouchage permet un nettoyage en profondeur des canalisations grâce à sa forme hélicoïdale. Elle est particulièrement efficace pour éliminer les accumulations de tartre et les dépôts durcis.'
      },
      {
        id: 'debouchage-ventouse',
        name: 'Débouchage Ventouse',
        slug: 'debouchage-ventouse',
        shortDescription: 'Solution simple pour bouchons légers',
        icon: '🪠',
        fullDescription: 'La ventouse est un outil simple mais efficace pour les bouchons superficiels. Elle utilise la pression d\'air pour déloger les obstacles dans les canalisations.'
      },
      {
        id: 'debouchage-pompe-manuelle',
        name: 'Débouchage Pompe Manuelle',
        slug: 'debouchage-pompe-manuelle',
        shortDescription: 'Débouchage par pression d\'air',
        icon: '💨',
        fullDescription: 'La pompe manuelle crée une pression d\'air puissante pour déboucher les canalisations. Cette méthode est efficace pour les obstructions légères à moyennes.'
      },
      {
        id: 'debouchage-nettoyeur-pression',
        name: 'Débouchage Nettoyeur Pression',
        slug: 'debouchage-nettoyeur-pression',
        shortDescription: 'Nettoyage professionnel haute pression',
        icon: '🔫',
        fullDescription: 'Le nettoyeur haute pression combine puissance et précision pour un nettoyage optimal des canalisations. Il est particulièrement efficace pour éliminer les dépôts et les incrustations.'
      }
    ]
  },
  {
    id: 'interventions-robotisees',
    name: 'INTERVENTIONS ROBOTISÉES',
    slug: 'interventions-robotisees',
    description: 'Technologies robotiques avancées pour l\'inspection et le traitement des canalisations',
    interventions: [
      {
        id: 'inspection-camera',
        name: 'Inspection Caméra',
        slug: 'inspection-camera',
        shortDescription: 'Inspection visuelle des canalisations avec caméra',
        icon: '📷',
        fullDescription: 'L\'inspection caméra permet de visualiser l\'intérieur des canalisations pour détecter les obstructions, les fissures et autres anomalies.'
      },
      {
        id: 'robot-fraisage',
        name: 'Robot Fraisage',
        slug: 'robot-fraisage',
        shortDescription: 'Élimination des obstructions avec un robot fraiseur',
        icon: '🤖',
        fullDescription: 'Le robot fraisage est utilisé pour enlever les racines, le calcaire et autres obstructions dures dans les canalisations.'
      },
      {
        id: 'robot-multifonction',
        name: 'Robot Multifonction',
        slug: 'robot-multifonction',
        shortDescription: 'Robot polyvalent pour diverses interventions',
        icon: '🔧',
        fullDescription: 'Ce robot est capable de réaliser plusieurs tâches telles que le fraisage, le nettoyage et l\'inspection.'
      },
      {
        id: 'diagnostic-video',
        name: 'Diagnostic Vidéo',
        slug: 'diagnostic-video',
        shortDescription: 'Analyse vidéo pour diagnostic précis',
        icon: '🎥',
        fullDescription: 'Le diagnostic vidéo permet de réaliser une analyse détaillée des canalisations pour identifier les problèmes potentiels.'
      },
      {
        id: 'inspection-endoscopique',
        name: 'Inspection Endoscopique',
        slug: 'inspection-endoscopique',
        shortDescription: 'Inspection fine avec caméra endoscopique',
        icon: '🔍',
        fullDescription: 'Cette méthode utilise une caméra endoscopique pour inspecter les conduites étroites et difficiles d\'accès.'
      },
      {
        id: 'detection-robot',
        name: 'Détection Robot',
        slug: 'detection-robot',
        shortDescription: 'Détection avancée avec robot',
        icon: '🕵️',
        fullDescription: 'Le robot de détection est utilisé pour localiser précisément les obstructions et les défauts dans les canalisations.'
      },
      {
        id: 'cartographie-canalisation',
        name: 'Cartographie Canalisation',
        slug: 'cartographie-canalisation',
        shortDescription: 'Cartographie détaillée des réseaux de canalisations',
        icon: '🗺️',
        fullDescription: 'Cette intervention permet de créer une carte précise des canalisations pour une meilleure gestion et maintenance.'
      },
      {
        id: 'analyse-video-canalisation',
        name: 'Analyse Vidéo Canalisation',
        slug: 'analyse-video-canalisation',
        shortDescription: 'Analyse approfondie par vidéo',
        icon: '📹',
        fullDescription: 'L\'analyse vidéo permet de détecter les anomalies et de planifier les interventions nécessaires.'
      },
      {
        id: 'reperage-3d-canalisation',
        name: 'Repérage 3D Canalisation',
        slug: 'reperage-3d-canalisation',
        shortDescription: 'Modélisation 3D des canalisations',
        icon: '📐',
        fullDescription: 'Le repérage 3D permet de visualiser les canalisations en trois dimensions pour une meilleure compréhension et intervention.'
      }
    ]
  },
  {
    id: 'interventions-hydrauliques',
    name: 'INTERVENTIONS HYDRAULIQUES',
    slug: 'interventions-hydrauliques',
    description: 'Solutions hydrauliques pour le débouchage et l\'entretien des réseaux',
    interventions: [
      {
        id: 'curage-canalisation',
        name: 'Curage Canalisation',
        slug: 'curage-canalisation',
        shortDescription: 'Nettoyage en profondeur des canalisations',
        icon: '🚿',
        fullDescription: 'Le curage permet de nettoyer les canalisations en profondeur pour éliminer les dépôts et prévenir les bouchons.'
      },
      {
        id: 'curage-haute-pression',
        name: 'Curage Haute Pression',
        slug: 'curage-haute-pression',
        shortDescription: 'Nettoyage intensif par haute pression',
        icon: '💦',
        fullDescription: 'Cette méthode utilise de l\'eau à haute pression pour éliminer les obstructions tenaces et nettoyer les parois des canalisations.'
      },
      {
        id: 'pompage-boue',
        name: 'Pompage Boue',
        slug: 'pompage-boue',
        shortDescription: 'Évacuation des boues et sédiments',
        icon: '🛢️',
        fullDescription: 'Le pompage de boue permet d\'évacuer les sédiments accumulés dans les fosses et les canalisations.'
      },
      {
        id: 'pompage-eau-usee',
        name: 'Pompage Eau Usée',
        slug: 'pompage-eau-usee',
        shortDescription: 'Évacuation des eaux usées',
        icon: '🚰',
        fullDescription: 'Cette intervention permet de pomper et d\'évacuer les eaux usées des systèmes de canalisation.'
      },
      {
        id: 'pompage-fosse',
        name: 'Pompage Fosse',
        slug: 'pompage-fosse',
        shortDescription: 'Vidange et nettoyage des fosses',
        icon: '🕳️',
        fullDescription: 'Le pompage de fosse permet de vider et de nettoyer les fosses septiques et autres réservoirs similaires.'
      },
      {
        id: 'aspiration-haute-puissance',
        name: 'Aspiration Haute Puissance',
        slug: 'aspiration-haute-puissance',
        shortDescription: 'Aspiration efficace des débris',
        icon: '🌀',
        fullDescription: 'Cette méthode utilise une aspiration puissante pour retirer les débris et les sédiments des canalisations.'
      },
      {
        id: 'nettoyage-pression-controlee',
        name: 'Nettoyage Pression Contrôlée',
        slug: 'nettoyage-pression-controlee',
        shortDescription: 'Nettoyage précis avec pression contrôlée',
        icon: '🔧',
        fullDescription: 'Le nettoyage à pression contrôlée permet de nettoyer les canalisations sans endommager les parois.'
      },
      {
        id: 'injection-haute-pression',
        name: 'Injection Haute Pression',
        slug: 'injection-haute-pression',
        shortDescription: 'Injection de fluides à haute pression',
        icon: '💧',
        fullDescription: 'Cette méthode permet d\'injecter des fluides à haute pression pour déboucher et nettoyer les canalisations.'
      },
      {
        id: 'rinçage-canalisation',
        name: 'Rinçage Canalisation',
        slug: 'rinçage-canalisation',
        shortDescription: 'Rinçage complet des réseaux',
        icon: '🚿',
        fullDescription: 'Le rinçage permet de nettoyer et de rincer les canalisations pour éliminer les résidus et les obstructions légères.'
      }
    ]
  },
  {
    id: 'interventions-specialisees',
    name: 'INTERVENTIONS SPÉCIALISÉES',
    slug: 'interventions-specialisees',
    description: 'Solutions avancées pour les cas complexes nécessitant des techniques spécifiques',
    interventions: [
      {
        id: 'degorgement-professionnel',
        name: 'Dégorgement Professionnel',
        slug: 'degorgement-professionnel',
        shortDescription: 'Service professionnel de dégorgement pour tous types de canalisations',
        icon: '🔧',
        fullDescription: 'Notre service de dégorgement professionnel utilise des techniques et équipements spécialisés pour déboucher efficacement vos canalisations, quelle que soit la nature de l\'obstruction.'
      },
      {
        id: 'desobstruction-complexe',
        name: 'Désobstruction Complexe',
        slug: 'desobstruction-complexe',
        shortDescription: 'Solutions pour les obstructions les plus difficiles',
        icon: '🛠️',
        fullDescription: 'Notre expertise en désobstruction complexe nous permet de traiter les cas les plus difficiles, en utilisant des techniques adaptées à chaque situation.'
      },
      {
        id: 'debouchage-vapeur',
        name: 'Débouchage Vapeur',
        slug: 'debouchage-vapeur',
        shortDescription: 'Nettoyage écologique à la vapeur haute température',
        icon: '♨️',
        fullDescription: 'Le débouchage à la vapeur est une méthode écologique et efficace qui utilise la puissance de la vapeur haute température pour éliminer les obstructions et désinfecter les canalisations.'
      },
      {
        id: 'debouchage-air-comprime',
        name: 'Débouchage Air Comprimé',
        slug: 'debouchage-air-comprime',
        shortDescription: 'Débouchage puissant par air comprimé',
        icon: '💨',
        fullDescription: 'La technique de débouchage à l\'air comprimé permet de déloger rapidement les bouchons dans les canalisations grâce à la pression d\'air.'
      },
      {
        id: 'debouchage-azote',
        name: 'Débouchage Azote',
        slug: 'debouchage-azote',
        shortDescription: 'Débouchage par projection d\'azote',
        icon: '🌪️',
        fullDescription: 'Le débouchage à l\'azote est une technique spécialisée qui utilise la pression de l\'azote pour déboucher efficacement les canalisations difficiles d\'accès.'
      },
      {
        id: 'debouchage-cryogenique',
        name: 'Débouchage Cryogénique',
        slug: 'debouchage-cryogenique',
        shortDescription: 'Nettoyage par projection de glace carbonique',
        icon: '❄️',
        fullDescription: 'Le débouchage cryogénique utilise la glace carbonique pour nettoyer et déboucher les canalisations sans endommager les conduites.'
      },
      {
        id: 'deglaçage-canalisation',
        name: 'Déglaçage Canalisation',
        slug: 'deglaçage-canalisation',
        shortDescription: 'Dégel des canalisations gelées',
        icon: '🧊',
        fullDescription: 'Notre service de déglaçage permet de traiter rapidement et efficacement les canalisations gelées pour prévenir les dégâts causés par le gel.'
      },
      {
        id: 'degraissage-canalisation',
        name: 'Dégraissage Canalisation',
        slug: 'degraissage-canalisation',
        shortDescription: 'Élimination des graisses accumulées',
        icon: '🧴',
        fullDescription: 'Le dégraissage de canalisation élimine les accumulations de graisses et de matières organiques pour prévenir les obstructions.'
      },
      {
        id: 'desembouage-canalisation',
        name: 'Désembouage Canalisation',
        slug: 'desembouage-canalisation',
        shortDescription: 'Nettoyage des boues et sédiments',
        icon: '🧹',
        fullDescription: 'Le désembouage permet d\'éliminer les boues et sédiments qui s\'accumulent dans les canalisations, améliorant ainsi leur efficacité.'
      }
    ]
  },
  {
    id: 'detection-diagnostic',
    name: 'DÉTECTION ET DIAGNOSTIC',
    slug: 'detection-diagnostic',
    description: 'Technologies de pointe pour la détection et le diagnostic précis des problèmes',
    interventions: [
      {
        id: 'detection-fuite',
        name: 'Détection Fuite',
        slug: 'detection-fuite',
        shortDescription: 'Localisation précise des fuites',
        icon: '💧',
        fullDescription: 'Notre service de détection de fuite utilise des technologies avancées pour localiser précisément les fuites, même les plus difficiles à repérer.'
      },
      {
        id: 'detection-acoustique',
        name: 'Détection Acoustique',
        slug: 'detection-acoustique',
        shortDescription: 'Repérage des fuites par son',
        icon: '👂',
        fullDescription: 'La détection acoustique permet de localiser les fuites en captant les sons caractéristiques émis par l\'eau sous pression.'
      },
      {
        id: 'detection-thermique',
        name: 'Détection Thermique',
        slug: 'detection-thermique',
        shortDescription: 'Analyse par caméra thermique',
        icon: '🌡️',
        fullDescription: 'L\'inspection par caméra thermique permet de détecter les variations de température révélant la présence de fuites ou d\'anomalies.'
      },
      {
        id: 'detection-traceur',
        name: 'Détection Traceur',
        slug: 'detection-traceur',
        shortDescription: 'Localisation par colorant ou gaz traceur',
        icon: '🔍',
        fullDescription: 'La détection par traceur utilise des substances spéciales pour suivre le parcours de l\'eau et localiser précisément les fuites.'
      },
      {
        id: 'detection-gaz',
        name: 'Détection Gaz',
        slug: 'detection-gaz',
        shortDescription: 'Repérage des fuites de gaz',
        icon: '⚠️',
        fullDescription: 'Notre service de détection de gaz permet d\'identifier rapidement et précisément les fuites de gaz pour assurer votre sécurité.'
      },
      {
        id: 'detection-humidite',
        name: 'Détection Humidité',
        slug: 'detection-humidite',
        shortDescription: 'Mesure et analyse de l\'humidité',
        icon: '💦',
        fullDescription: 'La détection d\'humidité permet d\'identifier les zones touchées par l\'eau et de prévenir les dégâts liés à l\'humidité.'
      },
      {
        id: 'analyse-reseau',
        name: 'Analyse Réseau',
        slug: 'analyse-reseau',
        shortDescription: 'Étude complète des réseaux',
        icon: '📊',
        fullDescription: 'L\'analyse de réseau permet d\'évaluer l\'état général de vos canalisations et d\'identifier les points nécessitant une intervention.'
      },
      {
        id: 'diagnostic-canalisation',
        name: 'Diagnostic Canalisation',
        slug: 'diagnostic-canalisation',
        shortDescription: 'Inspection approfondie des canalisations',
        icon: '🔎',
        fullDescription: 'Notre diagnostic de canalisation fournit une analyse détaillée de l\'état de vos conduites pour planifier les interventions nécessaires.'
      },
      {
        id: 'expertise-plomberie',
        name: 'Expertise Plomberie',
        slug: 'expertise-plomberie',
        shortDescription: 'Évaluation professionnelle complète',
        icon: '📋',
        fullDescription: 'Notre service d\'expertise en plomberie offre une évaluation complète de vos installations pour identifier les problèmes et proposer des solutions adaptées.'
      }
    ]
  },
  {
    id: 'traitements-chimiques',
    name: 'TRAITEMENTS CHIMIQUES',
    slug: 'traitements-chimiques',
    description: 'Solutions chimiques professionnelles pour le traitement efficace des canalisations',
    interventions: [
      {
        id: 'debouchage-chimique',
        name: 'Débouchage Chimique',
        slug: 'debouchage-chimique',
        shortDescription: 'Traitement chimique professionnel des obstructions',
        icon: '⚗️',
        fullDescription: 'Notre service de débouchage chimique utilise des produits professionnels adaptés pour éliminer efficacement les obstructions les plus tenaces tout en préservant vos canalisations.'
      },
      {
        id: 'debouchage-acide',
        name: 'Débouchage Acide',
        slug: 'debouchage-acide',
        shortDescription: 'Traitement puissant pour obstructions résistantes',
        icon: '🧪',
        fullDescription: 'Le débouchage à l\'acide est une solution puissante pour les obstructions particulièrement résistantes, appliquée avec précaution par nos experts qualifiés.'
      },
      {
        id: 'debouchage-base',
        name: 'Débouchage Base',
        slug: 'debouchage-base',
        shortDescription: 'Solution alcaline pour graisses et résidus',
        icon: '🧫',
        fullDescription: 'Le traitement basique est particulièrement efficace pour dissoudre les accumulations de graisses et de résidus organiques dans les canalisations.'
      },
      {
        id: 'debouchage-enzymatique',
        name: 'Débouchage Enzymatique',
        slug: 'debouchage-enzymatique',
        shortDescription: 'Traitement biologique par enzymes',
        icon: '🦠',
        fullDescription: 'Le débouchage enzymatique utilise des enzymes naturelles pour dégrader les matières organiques, une solution efficace et respectueuse de l\'environnement.'
      },
      {
        id: 'traitement-anti-racine',
        name: 'Traitement Anti-Racine',
        slug: 'traitement-anti-racine',
        shortDescription: 'Élimination des racines dans les canalisations',
        icon: '🌱',
        fullDescription: 'Notre traitement anti-racine élimine et prévient l\'infiltration des racines dans vos canalisations, protégeant ainsi votre système de plomberie.'
      },
      {
        id: 'traitement-anti-calcaire',
        name: 'Traitement Anti-Calcaire',
        slug: 'traitement-anti-calcaire',
        shortDescription: 'Élimination et prévention du calcaire',
        icon: '🪨',
        fullDescription: 'Le traitement anti-calcaire élimine les dépôts existants et prévient la formation de nouveaux dépôts calcaires dans vos canalisations.'
      },
      {
        id: 'traitement-anti-odeur',
        name: 'Traitement Anti-Odeur',
        slug: 'traitement-anti-odeur',
        shortDescription: 'Élimination des mauvaises odeurs',
        icon: '👃',
        fullDescription: 'Notre traitement anti-odeur neutralise efficacement les mauvaises odeurs à leur source et assainit vos canalisations.'
      },
      {
        id: 'desinfection-canalisation',
        name: 'Désinfection Canalisation',
        slug: 'desinfection-canalisation',
        shortDescription: 'Assainissement complet des conduites',
        icon: '🧼',
        fullDescription: 'La désinfection de canalisation élimine les bactéries et autres micro-organismes pour un assainissement complet de votre réseau.'
      },
      {
        id: 'neutralisation-produits',
        name: 'Neutralisation Produits',
        slug: 'neutralisation-produits',
        shortDescription: 'Neutralisation des produits dangereux',
        icon: '⚠️',
        fullDescription: 'Notre service de neutralisation sécurise et élimine les produits chimiques dangereux présents dans vos canalisations.'
      }
    ]
  },
  {
    id: 'solutions-naturelles',
    name: 'SOLUTIONS NATURELLES',
    slug: 'solutions-naturelles',
    description: 'Méthodes écologiques et naturelles pour l\'entretien de vos canalisations',
    interventions: [
      {
        id: 'debouchage-naturel',
        name: 'Débouchage Naturel',
        slug: 'debouchage-naturel',
        shortDescription: 'Solutions 100% naturelles et écologiques',
        icon: '🌿',
        fullDescription: 'Notre service de débouchage naturel utilise exclusivement des produits et méthodes écologiques pour déboucher vos canalisations sans impact sur l\'environnement.'
      },
      {
        id: 'debouchage-bicarbonate',
        name: 'Débouchage Bicarbonate',
        slug: 'debouchage-bicarbonate',
        shortDescription: 'Nettoyage doux au bicarbonate',
        icon: '🧂',
        fullDescription: 'Le débouchage au bicarbonate est une solution douce et naturelle, particulièrement efficace pour les petites obstructions et l\'entretien régulier.'
      },
      {
        id: 'debouchage-vinaigre',
        name: 'Débouchage Vinaigre',
        slug: 'debouchage-vinaigre',
        shortDescription: 'Solution naturelle au vinaigre',
        icon: '🍶',
        fullDescription: 'L\'utilisation du vinaigre permet un débouchage efficace et écologique, particulièrement adapté pour dissoudre le calcaire et les dépôts organiques.'
      },
      {
        id: 'debouchage-sel',
        name: 'Débouchage Sel',
        slug: 'debouchage-sel',
        shortDescription: 'Traitement naturel au sel',
        icon: '🧂',
        fullDescription: 'Le débouchage au sel est une méthode traditionnelle efficace pour l\'entretien régulier et le traitement des petites obstructions.'
      },
      {
        id: 'debouchage-eau-chaude',
        name: 'Débouchage Eau Chaude',
        slug: 'debouchage-eau-chaude',
        shortDescription: 'Nettoyage à l\'eau chaude',
        icon: '♨️',
        fullDescription: 'Le traitement à l\'eau chaude est une méthode simple et naturelle pour dissoudre les graisses et maintenir vos canalisations en bon état.'
      },
      {
        id: 'solutions-ecologiques',
        name: 'Solutions Écologiques',
        slug: 'solutions-ecologiques',
        shortDescription: 'Méthodes respectueuses de l\'environnement',
        icon: '🌍',
        fullDescription: 'Nos solutions écologiques combinent efficacité et respect de l\'environnement pour l\'entretien et le débouchage de vos canalisations.'
      },
      {
        id: 'produits-biodegradables',
        name: 'Produits Biodégradables',
        slug: 'produits-biodegradables',
        shortDescription: 'Utilisation de produits biodégradables',
        icon: '♻️',
        fullDescription: 'Nous utilisons exclusivement des produits biodégradables pour garantir un traitement efficace tout en préservant l\'environnement.'
      },
      {
        id: 'methodes-traditionnelles',
        name: 'Méthodes Traditionnelles',
        slug: 'methodes-traditionnelles',
        shortDescription: 'Techniques ancestrales éprouvées',
        icon: '📚',
        fullDescription: 'Nos méthodes traditionnelles s\'appuient sur des techniques éprouvées depuis des générations pour l\'entretien naturel des canalisations.'
      },
      {
        id: 'alternatives-vertes',
        name: 'Alternatives Vertes',
        slug: 'alternatives-vertes',
        shortDescription: 'Solutions alternatives écologiques',
        icon: '🌱',
        fullDescription: 'Découvrez nos alternatives vertes pour l\'entretien et le débouchage de vos canalisations, alliant efficacité et respect de l\'environnement.'
      }
    ]
  },
  {
    id: 'interventions-preventives',
    name: 'INTERVENTIONS PRÉVENTIVES',
    slug: 'interventions-preventives',
    description: 'Services de maintenance préventive pour éviter les problèmes de plomberie',
    interventions: [
      {
        id: 'maintenance-preventive',
        name: 'Maintenance Préventive',
        slug: 'maintenance-preventive',
        shortDescription: 'Programme complet de maintenance',
        icon: '🔧',
        fullDescription: 'Notre service de maintenance préventive assure un suivi régulier de vos installations pour prévenir les problèmes et optimiser leur durée de vie.'
      },
      {
        id: 'curage-preventif',
        name: 'Curage Préventif',
        slug: 'curage-preventif',
        shortDescription: 'Nettoyage préventif des canalisations',
        icon: '🚰',
        fullDescription: 'Le curage préventif permet d\'éviter les accumulations et les bouchons en maintenant vos canalisations propres et fonctionnelles.'
      },
      {
        id: 'nettoyage-periodique',
        name: 'Nettoyage Périodique',
        slug: 'nettoyage-periodique',
        shortDescription: 'Entretien régulier programmé',
        icon: '🧹',
        fullDescription: 'Notre service de nettoyage périodique assure un entretien régulier de vos installations selon un calendrier adapté à vos besoins.'
      },
      {
        id: 'inspection-reguliere',
        name: 'Inspection Régulière',
        slug: 'inspection-reguliere',
        shortDescription: 'Contrôle régulier des installations',
        icon: '👀',
        fullDescription: 'L\'inspection régulière permet de détecter et traiter les problèmes potentiels avant qu\'ils ne deviennent critiques.'
      },
      {
        id: 'contrat-entretien',
        name: 'Contrat Entretien',
        slug: 'contrat-entretien',
        shortDescription: 'Forfait maintenance sur mesure',
        icon: '📋',
        fullDescription: 'Nos contrats d\'entretien offrent une solution personnalisée pour la maintenance régulière de vos installations.'
      },
      {
        id: 'plan-maintenance',
        name: 'Plan Maintenance',
        slug: 'plan-maintenance',
        shortDescription: 'Programme personnalisé d\'entretien',
        icon: '📅',
        fullDescription: 'Nous établissons un plan de maintenance sur mesure adapté à vos installations et à vos besoins spécifiques.'
      },
      {
        id: 'audit-reseau',
        name: 'Audit Réseau',
        slug: 'audit-reseau',
        shortDescription: 'Évaluation complète des installations',
        icon: '📊',
        fullDescription: 'L\'audit réseau fournit une analyse détaillée de l\'état de vos installations et des recommandations d\'amélioration.'
      },
      {
        id: 'verification-annuelle',
        name: 'Vérification Annuelle',
        slug: 'verification-annuelle',
        shortDescription: 'Contrôle annuel approfondi',
        icon: '📆',
        fullDescription: 'Notre service de vérification annuelle assure un contrôle complet de vos installations pour garantir leur bon fonctionnement.'
      },
      {
        id: 'suivi-preventif',
        name: 'Suivi Préventif',
        slug: 'suivi-preventif',
        shortDescription: 'Surveillance continue des installations',
        icon: '📈',
        fullDescription: 'Le suivi préventif permet une surveillance continue de vos installations pour prévenir les problèmes potentiels.'
      }
    ]
  },
  {
    id: 'services-urgents',
    name: 'SERVICES URGENTS',
    slug: 'services-urgents',
    description: 'Interventions rapides 24h/24 et 7j/7 pour toutes situations d\'urgence',
    interventions: [
      {
        id: 'intervention-urgence',
        name: 'Intervention Urgence',
        slug: 'intervention-urgence',
        shortDescription: 'Intervention rapide en cas d\'urgence',
        icon: '🚨',
        fullDescription: 'Notre service d\'intervention d\'urgence assure une réponse rapide et efficace pour tous vos problèmes de plomberie urgents.'
      },
      {
        id: 'debouchage-24h-24',
        name: 'Débouchage 24h/24',
        slug: 'debouchage-24h-24',
        shortDescription: 'Service disponible jour et nuit',
        icon: '🕐',
        fullDescription: 'Notre service de débouchage est disponible 24h/24 pour répondre à vos urgences à tout moment.'
      },
      {
        id: 'urgence-weekend',
        name: 'Urgence Weekend',
        slug: 'urgence-weekend',
        shortDescription: 'Intervention weekend et jours fériés',
        icon: '📅',
        fullDescription: 'Nous intervenons également les weekends pour tous vos problèmes de plomberie urgents.'
      },
      {
        id: 'urgence-jour-ferie',
        name: 'Urgence Jour Férié',
        slug: 'urgence-jour-ferie',
        shortDescription: 'Service disponible les jours fériés',
        icon: '📆',
        fullDescription: 'Notre équipe reste disponible pendant les jours fériés pour traiter vos urgences de plomberie.'
      },
      {
        id: 'intervention-express',
        name: 'Intervention Express',
        slug: 'intervention-express',
        shortDescription: 'Intervention rapide garantie',
        icon: '⚡',
        fullDescription: 'Notre service d\'intervention express garantit une réponse ultra-rapide pour les situations urgentes.'
      },
      {
        id: 'depannage-rapide',
        name: 'Dépannage Rapide',
        slug: 'depannage-rapide',
        shortDescription: 'Solution rapide à vos problèmes',
        icon: '🏃',
        fullDescription: 'Notre service de dépannage rapide assure une intervention efficace pour résoudre vos problèmes dans les plus brefs délais.'
      },
      {
        id: 'assistance-immediate',
        name: 'Assistance Immédiate',
        slug: 'assistance-immediate',
        shortDescription: 'Aide immédiate par téléphone',
        icon: '📱',
        fullDescription: 'Notre service d\'assistance immédiate vous guide par téléphone en attendant l\'arrivée de nos techniciens.'
      },
      {
        id: 'urgence-degat-eaux',
        name: 'Urgence Dégât des Eaux',
        slug: 'urgence-degat-eaux',
        shortDescription: 'Intervention rapide dégât des eaux',
        icon: '💧',
        fullDescription: 'Notre équipe intervient rapidement en cas de dégât des eaux pour limiter les dommages et résoudre le problème.'
      },
      {
        id: 'service-astreinte',
        name: 'Service Astreinte',
        slug: 'service-astreinte',
        shortDescription: 'Équipe d\'astreinte disponible',
        icon: '👨‍🔧',
        fullDescription: 'Notre service d\'astreinte assure une disponibilité permanente pour répondre à vos urgences 24h/24 et 7j/7.'
      }
    ]
  },
  {
    id: 'services-speciaux',
    name: 'SERVICES SPÉCIAUX',
    slug: 'services-speciaux',
    description: 'Services spécialisés de réhabilitation et rénovation des canalisations',
    interventions: [
      {
        id: 'rehabilitation-canalisation',
        name: 'Réhabilitation Canalisation',
        slug: 'rehabilitation-canalisation',
        shortDescription: 'Rénovation complète des canalisations',
        icon: '🔄',
        fullDescription: 'Notre service de réhabilitation permet de rénover vos canalisations sans travaux de terrassement importants.'
      },
      {
        id: 'gainage-canalisation',
        name: 'Gainage Canalisation',
        slug: 'gainage-canalisation',
        shortDescription: 'Rénovation par gainage',
        icon: '🔌',
        fullDescription: 'Le gainage de canalisation est une technique moderne permettant de rénover vos conduites sans destruction.'
      },
      {
        id: 'chemisage-canalisation',
        name: 'Chemisage Canalisation',
        slug: 'chemisage-canalisation',
        shortDescription: 'Rénovation par chemisage',
        icon: '👕',
        fullDescription: 'Le chemisage est une solution innovante pour rénover vos canalisations de l\'intérieur sans travaux destructifs.'
      },
      {
        id: 'reparation-sans-tranchee',
        name: 'Réparation Sans Tranchée',
        slug: 'reparation-sans-tranchee',
        shortDescription: 'Réparation non destructive',
        icon: '🚫',
        fullDescription: 'Nos techniques de réparation sans tranchée permettent de réparer vos canalisations tout en préservant votre environnement.'
      },
      {
        id: 'renovation-reseau',
        name: 'Rénovation Réseau',
        slug: 'renovation-reseau',
        shortDescription: 'Rénovation complète du réseau',
        icon: '🔧',
        fullDescription: 'Notre service de rénovation réseau propose une remise à neuf complète de vos installations de plomberie.'
      },
      {
        id: 'remplacement-canalisation',
        name: 'Remplacement Canalisation',
        slug: 'remplacement-canalisation',
        shortDescription: 'Remplacement des conduites',
        icon: '🔨',
        fullDescription: 'Nous assurons le remplacement complet ou partiel de vos canalisations lorsque la réparation n\'est plus possible.'
      },
      {
        id: 'mise-aux-normes',
        name: 'Mise Aux Normes',
        slug: 'mise-aux-normes',
        shortDescription: 'Conformité aux normes actuelles',
        icon: '📋',
        fullDescription: 'Notre service de mise aux normes assure la conformité de vos installations avec les réglementations en vigueur.'
      },
      {
        id: 'etude-technique',
        name: 'Étude Technique',
        slug: 'etude-technique',
        shortDescription: 'Analyse technique approfondie',
        icon: '📐',
        fullDescription: 'Nos études techniques fournissent une analyse détaillée et des recommandations pour vos projets de plomberie.'
      },
      {
        id: 'conseil-technique',
        name: 'Conseil Technique',
        slug: 'conseil-technique',
        shortDescription: 'Expertise et conseils professionnels',
        icon: '💡',
        fullDescription: 'Notre service de conseil technique vous accompagne dans vos décisions avec une expertise professionnelle.'
      }
    ]
  }
]

export function getAllInterventions(): Intervention[] {
  return interventionCategories.flatMap(category => category.interventions)
}

export function getInterventionBySlug(slug: string): Intervention | undefined {
  return getAllInterventions().find(intervention => intervention.slug === slug)
}

export function getInterventionCategoryBySlug(slug: string): InterventionCategory | undefined {
  return interventionCategories.find(category => category.slug === slug)
}
