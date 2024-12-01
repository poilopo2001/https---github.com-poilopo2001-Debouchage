export interface ProblemCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  seo?: {
    title: string;
    description: string;
  };
  problems: Problem[];
}

export interface Problem {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string;
  seo?: {
    title: string;
    description: string;
  };
}

export const problemCategories: ProblemCategory[] = [
  {
    id: 'odeurs-emanations',
    name: 'ODEURS ET ÉMANATIONS',
    slug: 'odeurs-emanations',
    description: 'Solutions professionnelles pour tous les problèmes d\'odeurs dans vos canalisations et installations sanitaires',
    seo: {
      title: 'Problemes d\'Odeurs Canalisation Luxembourg ? Dépannage 24/7',
      description: 'Mauvaises odeurs dans vos canalisations au Luxembourg ? Nos experts interviennent rapidement pour éliminer les odeurs d\'égout et émanations. Diagnostic et devis gratuit ☎️ +352 621 469 018'
    },
    problems: [
      {
        id: 'mauvaises-odeurs-egouts',
        name: 'Mauvaises Odeurs d\'Égouts',
        slug: 'mauvaises-odeurs-egouts',
        shortDescription: 'Élimination des odeurs nauséabondes provenant des égouts',
        icon: '🦨',
        seo: {
          title: 'Odeurs d\'Égout Luxembourg ? Intervention Rapide 24/7',
          description: 'Élimination des odeurs d\'égout au Luxembourg. Nos experts identifient et traitent la source des mauvaises odeurs. Intervention express, devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'odeurs-salle-bain',
        name: 'Odeurs Salle de Bain',
        slug: 'odeurs-salle-bain',
        shortDescription: 'Élimination des mauvaises odeurs dans votre salle de bain',
        icon: '🚿',
        seo: {
          title: 'Odeurs Salle de Bain Luxembourg ? Solution Express',
          description: 'Élimination des mauvaises odeurs dans votre salle de bain au Luxembourg ? Nos plombiers éliminent rapidement les odeurs désagréables. Intervention 24/7, devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'odeurs-cuisine',
        name: 'Odeurs Cuisine',
        slug: 'odeurs-cuisine',
        shortDescription: 'Élimination des odeurs désagréables dans votre cuisine',
        icon: '🍳',
        seo: {
          title: 'Odeurs Cuisine Luxembourg ? Intervention Urgente',
          description: 'Odeurs désagréables dans votre cuisine au Luxembourg ? Nos experts éliminent rapidement les mauvaises odeurs. Service disponible 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'odeurs-sous-sol',
        name: 'Odeurs Sous-Sol',
        slug: 'odeurs-sous-sol',
        shortDescription: 'Solutions pour les odeurs persistantes dans votre sous-sol',
        icon: '🏚️',
        seo: {
          title: 'Odeurs Sous-Sol Luxembourg ? Traitement Efficace',
          description: 'Odeurs persistantes dans votre sous-sol au Luxembourg ? Nos experts identifient et éliminent la source des mauvaises odeurs. Intervention rapide, devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'odeurs-vide-sanitaire',
        name: 'Odeurs Vide Sanitaire',
        slug: 'odeurs-vide-sanitaire',
        shortDescription: 'Traitement des odeurs dans les vides sanitaires',
        icon: '🏗️',
        fullDescription: 'Les odeurs dans les vides sanitaires peuvent être particulièrement désagréables. Notre équipe intervient avec des solutions adaptées pour éliminer ces odeurs et prévenir leur réapparition.'
      },
      {
        id: 'odeurs-fosse-septique',
        name: 'Odeurs Fosse Septique',
        slug: 'odeurs-fosse-septique',
        shortDescription: 'Gestion des odeurs de fosse septique',
        icon: '💨',
        fullDescription: 'Les fosses septiques peuvent être une source d\'odeurs nauséabondes. Nous proposons des solutions pour gérer ces odeurs et prévenir les problèmes de santé et d\'environnement.'
      },
      {
        id: 'gaz-canalisation',
        name: 'Gaz Canalisation',
        slug: 'gaz-canalisation',
        shortDescription: 'Détection et traitement des gaz dans les canalisations',
        icon: '⚠️',
        fullDescription: 'Les gaz dans les canalisations peuvent être dangereux. Notre équipe intervient avec des équipements spécialisés pour détecter et traiter ces gaz.'
      },
      {
        id: 'ventilation-defectueuse',
        name: 'Ventilation Défectueuse',
        slug: 'ventilation-defectueuse',
        shortDescription: 'Réparation des systèmes de ventilation défectueux',
        icon: '🌪️',
        fullDescription: 'Les systèmes de ventilation défectueux peuvent causer des problèmes d\'odeurs et de santé. Nous proposons des solutions pour réparer ces systèmes et améliorer la qualité de l\'air.'
      },
      {
        id: 'siphon-asseche',
        name: 'Siphon Asséché',
        slug: 'siphon-asseche',
        shortDescription: 'Traitement des siphons asséchés et prévention des odeurs',
        icon: '🚰',
        fullDescription: 'Les siphons asséchés peuvent causer des odeurs désagréables. Nous proposons des solutions pour traiter ces siphons et prévenir les odeurs.'
      }
    ]
  },
  {
    id: 'remontees-refoulements',
    name: 'REMONTÉES ET REFOULEMENTS',
    slug: 'remontees-refoulements',
    description: 'Solutions efficaces pour tous les problèmes de remontées d\'eau et refoulements dans vos canalisations',
    seo: {
      title: 'Refoulement Canalisation Luxembourg ? Intervention Express',
      description: 'Problème de remontées d\'eau ou refoulement d\'égout au Luxembourg ? Notre équipe intervient en urgence pour stopper les remontées d\'eau. Devis gratuit ☎️ +352 621 469 018'
    },
    problems: [
      {
        id: 'refoulement-egouts',
        name: 'Refoulement Égouts',
        slug: 'refoulement-egouts',
        shortDescription: 'Traitement des refoulements d\'égouts et canalisations principales',
        icon: '🌊',
        seo: {
          title: 'Refoulement Égout Luxembourg ? Intervention Urgente 24/7',
          description: 'Refoulement d\'égout au Luxembourg ? Nos experts interviennent en 30 minutes pour stopper le refoulement et nettoyer vos canalisations. Service 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'remontee-eaux-usees',
        name: 'Remontée Eaux Usées',
        slug: 'remontee-eaux-usees',
        shortDescription: 'Solutions pour les remontées d\'eaux usées',
        icon: '💧',
        seo: {
          title: 'Remontée Eaux Usées Luxembourg ? Dépannage Express',
          description: 'Problème de remontée d\'eaux usées au Luxembourg ? Intervention rapide de nos experts pour stopper et prévenir les remontées. Devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'refoulement-wc',
        name: 'Refoulement WC',
        slug: 'refoulement-wc',
        shortDescription: 'Traitement des refoulements de toilettes',
        icon: '🚽',
        seo: {
          title: 'Refoulement WC Luxembourg ? Solution Rapide 24/7',
          description: 'WC qui refoule au Luxembourg ? Nos plombiers interviennent en urgence pour déboucher et nettoyer vos toilettes. Intervention express ☎️ +352 621 469 018'
        }
      },
      {
        id: 'refoulement-douche',
        name: 'Refoulement Douche',
        slug: 'refoulement-douche',
        shortDescription: 'Résolution des problèmes de refoulement de douche',
        icon: '🚿',
        seo: {
          title: 'Refoulement Douche Luxembourg ? Débouchage Express',
          description: 'Douche qui refoule au Luxembourg ? Nos experts interviennent rapidement pour déboucher votre douche et éviter les remontées. Service 24/7 ☎️ +352 621 469 018'
        }
      }
    ]
  },
  {
    id: 'bouchons-obstructions',
    name: 'BOUCHONS ET OBSTRUCTIONS',
    slug: 'bouchons-obstructions',
    description: 'Solutions professionnelles pour tous types de bouchons et obstructions dans vos canalisations',
    seo: {
      title: 'Canalisation Bouchée Luxembourg ? Débouchage Express 24/7',
      description: 'Canalisation ou évacuation bouchée au Luxembourg ? Nos experts interviennent en urgence avec le matériel adapté pour tout débouchage. Devis gratuit ☎️ +352 621 469 018'
    },
    problems: [
      {
        id: 'bouchon-wc',
        name: 'Bouchon WC',
        slug: 'bouchon-wc',
        shortDescription: 'Débouchage rapide des toilettes bouchées',
        icon: '🚽',
        seo: {
          title: 'WC Bouché Luxembourg ? Débouchage Urgent 24/7',
          description: 'Toilettes bouchées au Luxembourg ? Nos plombiers interviennent rapidement avec le matériel adapté pour déboucher votre WC. Service 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'bouchon-evier',
        name: 'Bouchon Évier',
        slug: 'bouchon-evier',
        shortDescription: 'Débouchage d\'éviers et de lavabos',
        icon: '🚰',
        seo: {
          title: 'Évier Bouché Luxembourg ? Intervention Rapide',
          description: 'Évier ou lavabo bouché au Luxembourg ? Nos experts débouchent rapidement votre évacuation. Intervention express et devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'bouchon-douche',
        name: 'Bouchon Douche',
        slug: 'bouchon-douche',
        shortDescription: 'Débouchage de douches et siphons',
        icon: '🚿',
        seo: {
          title: 'Douche Bouchée Luxembourg ? Solution Express',
          description: 'Douche ou bac bouché au Luxembourg ? Intervention rapide de nos experts pour déboucher votre évacuation. Service disponible 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'bouchon-baignoire',
        name: 'Bouchon Baignoire',
        slug: 'bouchon-baignoire',
        shortDescription: 'Débouchage de baignoires',
        icon: '🛁',
        seo: {
          title: 'Baignoire Bouchée Luxembourg ? Débouchage Rapide',
          description: 'Baignoire qui ne se vide pas au Luxembourg ? Nos plombiers interviennent rapidement pour déboucher votre évacuation. Devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'bouchon-canalisation-principale',
        name: 'Bouchon Canalisation Principale',
        slug: 'bouchon-canalisation-principale',
        shortDescription: 'Débouchage des canalisations principales',
        icon: '🔧',
        seo: {
          title: 'Canalisation Principale Bouchée Luxembourg ? Intervention Pro',
          description: 'Canalisation principale obstruée au Luxembourg ? Nos experts interviennent avec du matériel professionnel pour tout débouchage. Service urgent 24/7 ☎️ +352 621 469 018'
        }
      }
    ]
  },
  {
    id: 'problemes-structurels',
    name: 'PROBLÈMES STRUCTURELS',
    slug: 'problemes-structurels',
    description: 'Solutions expertes pour tous les problèmes structurels de vos canalisations',
    seo: {
      title: 'Problème Canalisation Luxembourg ? Expert en Réparation',
      description: 'Problèmes structurels de canalisations au Luxembourg ? Nos experts diagnostiquent et réparent tous types de dégâts : fissures, affaissements, racines. Devis gratuit ☎️ +352 621 469 018'
    },
    problems: [
      {
        id: 'canalisation-cassee',
        name: 'Canalisation Cassée',
        slug: 'canalisation-cassee',
        shortDescription: 'Réparation de canalisations cassées ou fissurées',
        icon: '💔',
        seo: {
          title: 'Canalisation Cassée Luxembourg ? Réparation Urgente',
          description: 'Canalisation cassée ou fissurée au Luxembourg ? Intervention rapide de nos experts pour réparer vos canalisations. Service disponible 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'racines-canalisation',
        name: 'Racines dans Canalisation',
        slug: 'racines-canalisation',
        shortDescription: 'Élimination des racines dans les canalisations',
        icon: '🌳',
        seo: {
          title: 'Racines dans Canalisation Luxembourg ? Solution Pro',
          description: 'Racines qui obstruent vos canalisations au Luxembourg ? Nos experts éliminent les racines et réparent vos conduites. Intervention garantie ☎️ +352 621 469 018'
        }
      },
      {
        id: 'affaissement-canalisation',
        name: 'Affaissement Canalisation',
        slug: 'affaissement-canalisation',
        shortDescription: 'Réparation des affaissements de canalisations',
        icon: '⤵️',
        seo: {
          title: 'Affaissement Canalisation Luxembourg ? Réparation Express',
          description: 'Canalisation affaissée au Luxembourg ? Nos experts interviennent rapidement pour réparer et stabiliser vos conduites. Devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'joint-defectueux',
        name: 'Joint Défectueux',
        slug: 'joint-defectueux',
        shortDescription: 'Remplacement de joints défectueux',
        icon: '🔄',
        seo: {
          title: 'Joint Canalisation Défectueux Luxembourg ? Réparation Pro',
          description: 'Joints de canalisation défectueux au Luxembourg ? Nos plombiers remplacent et réparent vos joints pour éviter les fuites. Service rapide ☎️ +352 621 469 018'
        }
      },
      {
        id: 'canalisation-ecrasee',
        name: 'Canalisation Écrasée',
        slug: 'canalisation-ecrasee',
        shortDescription: 'Réparation de canalisations écrasées',
        icon: '🏗️',
        seo: {
          title: 'Canalisation Écrasée Luxembourg ? Intervention Urgente',
          description: 'Canalisation écrasée au Luxembourg ? Nos experts interviennent en urgence pour réparer vos conduites endommagées. Service 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'deformation-canalisation',
        name: 'Déformation Canalisation',
        slug: 'deformation-canalisation',
        shortDescription: 'Correction des déformations de canalisations',
        icon: '〽️',
        seo: {
          title: 'Déformation Canalisation Luxembourg ? Solution Expert',
          description: 'Canalisation déformée au Luxembourg ? Nos techniciens corrigent et réparent les déformations de vos conduites. Devis gratuit ☎️ +352 621 469 018'
        }
      }
    ]
  },
  {
    id: 'infiltrations-fuites',
    name: 'INFILTRATIONS ET FUITES',
    slug: 'infiltrations-fuites',
    description: 'Solutions professionnelles pour tous types d\'infiltrations et de fuites dans vos canalisations',
    seo: {
      title: 'Fuite Canalisation Luxembourg ? Réparation Urgente 24/7',
      description: 'Fuite ou infiltration d\'eau au Luxembourg ? Nos experts détectent et réparent rapidement toutes les fuites de canalisation. Intervention express ☎️ +352 621 469 018'
    },
    problems: [
      {
        id: 'fuite-eau',
        name: 'Fuite d\'Eau',
        slug: 'fuite-eau',
        shortDescription: 'Détection et réparation des fuites d\'eau',
        icon: '💧',
        seo: {
          title: 'Fuite d\'Eau Luxembourg ? Réparation Express 24/7',
          description: 'Fuite d\'eau détectée au Luxembourg ? Nos plombiers interviennent en urgence pour localiser et réparer votre fuite. Service disponible 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'infiltration-mur',
        name: 'Infiltration Mur',
        slug: 'infiltration-mur',
        shortDescription: 'Traitement des infiltrations dans les murs',
        icon: '🏠',
        seo: {
          title: 'Infiltration Mur Luxembourg ? Solution Durable',
          description: 'Infiltration d\'eau dans vos murs au Luxembourg ? Nos experts identifient la source et réparent définitivement le problème. Devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'fuite-canalisation-enterree',
        name: 'Fuite Canalisation Enterrée',
        slug: 'fuite-canalisation-enterree',
        shortDescription: 'Détection et réparation des fuites souterraines',
        icon: '🕳️',
        seo: {
          title: 'Fuite Canalisation Enterrée Luxembourg ? Expert',
          description: 'Fuite dans une canalisation enterrée au Luxembourg ? Nos techniciens localisent et réparent rapidement les fuites souterraines. Intervention pro ☎️ +352 621 469 018'
        }
      },
      {
        id: 'infiltration-cave',
        name: 'Infiltration Cave',
        slug: 'infiltration-cave',
        shortDescription: 'Solutions pour les infiltrations en cave',
        icon: '🏚️',
        seo: {
          title: 'Infiltration Cave Luxembourg ? Intervention Rapide',
          description: 'Infiltration d\'eau dans votre cave au Luxembourg ? Nos experts trouvent l\'origine et stoppent les infiltrations. Service urgent 24/7 ☎️ +352 621 469 018'
        }
      },
      {
        id: 'fuite-joint',
        name: 'Fuite Joint',
        slug: 'fuite-joint',
        shortDescription: 'Réparation des fuites au niveau des joints',
        icon: '🔧',
        seo: {
          title: 'Fuite Joint Plomberie Luxembourg ? Réparation Pro',
          description: 'Fuite au niveau des joints au Luxembourg ? Nos plombiers remplacent ou réparent rapidement vos joints défectueux. Devis gratuit ☎️ +352 621 469 018'
        }
      },
      {
        id: 'humidite-remontante',
        name: 'Humidité Remontante',
        slug: 'humidite-remontante',
        shortDescription: 'Traitement des problèmes d\'humidité remontante',
        icon: '⬆️',
        seo: {
          title: 'Humidité Remontante Luxembourg ? Solution Expert',
          description: 'Problème d\'humidité remontante au Luxembourg ? Nos experts traitent efficacement les remontées capillaires. Diagnostic gratuit ☎️ +352 621 469 018'
        }
      }
    ]
  },
  {
    id: 'services-urgents',
    name: 'SERVICES URGENTS',
    slug: 'services-urgents',
    description: 'Services d\'urgence plomberie 24h/24 et 7j/7 au Luxembourg',
    seo: {
      title: 'Plombier Urgence Luxembourg 24/7 | Intervention Express',
      description: 'Urgence plomberie au Luxembourg ? Notre équipe intervient en 30 minutes, 24h/24 et 7j/7. Dépannage express toutes urgences ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'debouchage-urgent',
        name: 'Débouchage Urgent',
        slug: 'debouchage-urgent',
        shortDescription: 'Débouchage en urgence 24h/24',
        icon: '🚰',
        seo: {
          title: 'Débouchage Urgent Luxembourg 24/7 | Intervention 30min',
          description: 'Canalisation bouchée en urgence au Luxembourg ? Débouchage express en 30 minutes, 24h/24. Équipe disponible immédiatement ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de débouchage urgent disponible 24h/24 et 7j/7. Notre équipe intervient rapidement pour déboucher vos canalisations en urgence.'
      },
      {
        id: 'fuite-urgente',
        name: 'Fuite Urgente',
        slug: 'fuite-urgente',
        shortDescription: 'Réparation de fuites en urgence',
        icon: '💧',
        seo: {
          title: 'Fuite Urgente Luxembourg ? Réparation Express 24/7',
          description: 'Fuite d\'eau urgente au Luxembourg ? Nos plombiers interviennent en 30 minutes pour stopper votre fuite. Service 24h/24 ☎️ +352 661 297 770'
        },
        fullDescription: 'Intervention rapide pour stopper et réparer les fuites d\'eau urgentes, disponible jour et nuit.'
      },
      {
        id: 'degorgement-urgent',
        name: 'Dégorgement Urgent',
        slug: 'degorgement-urgent',
        shortDescription: 'Dégorgement en urgence 24h/24',
        icon: '🚿',
        seo: {
          title: 'Dégorgement Urgent Luxembourg | Service Express 24/7',
          description: 'Besoin d\'un dégorgement urgent au Luxembourg ? Intervention rapide 24h/24 pour tout type d\'obstruction. Équipe pro ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de dégorgement urgent pour évacuations bouchées, disponible 24h/24 et 7j/7.'
      },
      {
        id: 'inondation-urgente',
        name: 'Inondation Urgente',
        slug: 'inondation-urgente',
        shortDescription: 'Intervention rapide en cas d\'inondation',
        icon: '🌊',
        seo: {
          title: 'Inondation Urgente Luxembourg ? Intervention Express',
          description: 'Inondation au Luxembourg ? Intervention d\'urgence 24/7 pour pompage et assèchement. Équipe mobilisable immédiatement ☎️ +352 661 297 770'
        },
        fullDescription: 'Intervention d\'urgence en cas d\'inondation : pompage, assèchement et recherche de la cause.'
      },
      {
        id: 'refoulement-urgent',
        name: 'Refoulement Urgent',
        slug: 'refoulement-urgent',
        shortDescription: 'Traitement urgent des refoulements',
        icon: '⬆️',
        seo: {
          title: 'Refoulement Urgent Luxembourg ? Intervention 24/7',
          description: 'Refoulement d\'égout urgent au Luxembourg ? Intervention express pour stopper et traiter les remontées d\'eau. Service 24h/24 ☎️ +352 661 297 770'
        },
        fullDescription: 'Intervention rapide pour traiter les refoulements d\'égouts et remontées d\'eau urgents.'
      },
      {
        id: 'reparation-urgente',
        name: 'Réparation Urgente',
        slug: 'reparation-urgente',
        shortDescription: 'Réparations plomberie en urgence',
        icon: '🔧',
        seo: {
          title: 'Réparation Plomberie Urgente Luxembourg 24/7',
          description: 'Réparation plomberie urgente au Luxembourg. Intervention express 24h/24 et 7j/7. Service d\'urgence ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de réparation d\'urgence disponible 24/7 pour tous problèmes de plomberie.'
      },
      {
        id: 'depannage-wc-urgent',
        name: 'Dépannage WC Urgent',
        slug: 'depannage-wc-urgent',
        shortDescription: 'Dépannage WC en urgence',
        icon: '🚽',
        seo: {
          title: 'WC Bouché Urgent Luxembourg ? Débouchage Express',
          description: 'WC bouché en urgence au Luxembourg ? Débouchage WC express 24h/24, intervention en 30 minutes. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de dépannage urgent pour WC bouché ou problème de chasse d\'eau, disponible 24h/24.'
      },
      {
        id: 'urgence-egout',
        name: 'Urgence Égout',
        slug: 'urgence-egout',
        shortDescription: 'Intervention urgente sur égouts',
        icon: '🕳️',
        seo: {
          title: 'Urgence Égout Luxembourg | Intervention Express 24/7',
          description: 'Problème d\'égout urgent au Luxembourg ? Intervention rapide 24h/24 pour débouchage et réparation d\'égouts. Service pro ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'urgence pour tout problème d\'égout nécessitant une intervention immédiate.'
      }
    ]
  },
  {
    id: 'diagnostic-inspection',
    name: 'DIAGNOSTIC ET INSPECTION',
    slug: 'diagnostic-inspection',
    description: 'Services professionnels de diagnostic et d\'inspection des canalisations au Luxembourg',
    seo: {
      title: 'Diagnostic Canalisation Luxembourg | Inspection Vidéo Pro',
      description: 'Inspection vidéo et diagnostic précis de vos canalisations au Luxembourg. Détection rapide des problèmes avec équipement professionnel ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'inspection-video',
        name: 'Inspection Vidéo',
        slug: 'inspection-video',
        shortDescription: 'Inspection des canalisations par caméra',
        icon: '📹',
        seo: {
          title: 'Inspection Vidéo Canalisation Luxembourg | Caméra Pro',
          description: 'Inspection par caméra de vos canalisations au Luxembourg. Diagnostic précis et visualisation en direct des problèmes. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'inspection vidéo professionnel pour visualiser l\'état de vos canalisations et identifier précisément les problèmes.'
      },
      {
        id: 'detection-fuite',
        name: 'Détection de Fuite',
        slug: 'detection-fuite',
        shortDescription: 'Localisation précise des fuites',
        icon: '🔍',
        seo: {
          title: 'Détection Fuite Luxembourg | Localisation Précise',
          description: 'Détection professionnelle de fuites au Luxembourg. Localisation rapide et précise avec équipement de pointe. Intervention express ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de détection de fuites utilisant des technologies avancées pour localiser précisément l\'origine des fuites.'
      },
      {
        id: 'diagnostic-canalisation',
        name: 'Diagnostic Canalisation',
        slug: 'diagnostic-canalisation',
        shortDescription: 'Analyse complète des canalisations',
        icon: '📊',
        seo: {
          title: 'Diagnostic Canalisation Luxembourg | Analyse Pro',
          description: 'Diagnostic complet de vos canalisations au Luxembourg. Analyse professionnelle et solutions adaptées à chaque problème. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de diagnostic approfondi pour évaluer l\'état de vos canalisations et identifier les problèmes potentiels.'
      },
      {
        id: 'inspection-egout',
        name: 'Inspection Égout',
        slug: 'inspection-egout',
        shortDescription: 'Contrôle des réseaux d\'égouts',
        icon: '🕳️',
        seo: {
          title: 'Inspection Égout Luxembourg | Contrôle Professionnel',
          description: 'Inspection professionnelle des égouts au Luxembourg. Contrôle complet du réseau et détection des anomalies. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'inspection des réseaux d\'égouts pour vérifier leur état et prévenir les problèmes potentiels.'
      },
      {
        id: 'test-etancheite',
        name: 'Test d\'Étanchéité',
        slug: 'test-etancheite',
        shortDescription: 'Vérification de l\'étanchéité',
        icon: '💧',
        seo: {
          title: 'Test Étanchéité Canalisation Luxembourg | Contrôle Pro',
          description: 'Tests d\'étanchéité professionnels au Luxembourg. Vérification complète de vos canalisations et détection des fuites. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de test d\'étanchéité pour vérifier l\'intégrité de vos canalisations et détecter les fuites potentielles.'
      },
      {
        id: 'diagnostic-odeur',
        name: 'Diagnostic Odeur',
        slug: 'diagnostic-odeur',
        shortDescription: 'Analyse des problèmes d\'odeurs',
        icon: '👃',
        seo: {
          title: 'Diagnostic Odeur Canalisation Luxembourg | Expert',
          description: 'Diagnostic professionnel des odeurs de canalisation au Luxembourg. Identification rapide des causes et solutions efficaces. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de diagnostic spécialisé pour identifier l\'origine des mauvaises odeurs dans vos canalisations.'
      },
      {
        id: 'inspection-preventive',
        name: 'Inspection Préventive',
        slug: 'inspection-preventive',
        shortDescription: 'Contrôle préventif des installations',
        icon: '🔄',
        seo: {
          title: 'Inspection Préventive Canalisation Luxembourg | Pro',
          description: 'Inspection préventive de vos canalisations au Luxembourg. Prévention des problèmes et maintenance régulière. Devis personnalisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'inspection préventive régulière pour maintenir vos canalisations en bon état et prévenir les problèmes.'
      },
      {
        id: 'diagnostic-technique',
        name: 'Diagnostic Technique',
        slug: 'diagnostic-technique',
        shortDescription: 'Analyse technique approfondie',
        icon: '⚙️',
        seo: {
          title: 'Diagnostic Technique Plomberie Luxembourg | Expert',
          description: 'Diagnostic technique complet de votre plomberie au Luxembourg. Analyse approfondie et solutions professionnelles. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de diagnostic technique complet pour évaluer l\'état de vos installations de plomberie.'
      }
    ]
  },
  {
    id: 'maintenance-preventive',
    name: 'MAINTENANCE PRÉVENTIVE',
    slug: 'maintenance-preventive',
    description: 'Services de maintenance préventive pour vos canalisations au Luxembourg',
    seo: {
      title: 'Maintenance Canalisation Luxembourg | Entretien Préventif',
      description: 'Maintenance préventive de vos canalisations au Luxembourg. Évitez les problèmes avec un entretien régulier professionnel. Devis gratuit ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'entretien-regulier',
        name: 'Entretien Régulier',
        slug: 'entretien-regulier',
        shortDescription: 'Maintenance périodique des installations',
        icon: '🔄',
        seo: {
          title: 'Entretien Canalisation Luxembourg | Maintenance Pro',
          description: 'Entretien régulier de vos canalisations au Luxembourg. Prévention des problèmes et maintenance professionnelle. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'entretien régulier pour maintenir vos canalisations en parfait état et prévenir les problèmes.'
      },
      {
        id: 'curage-preventif',
        name: 'Curage Préventif',
        slug: 'curage-preventif',
        shortDescription: 'Nettoyage préventif des canalisations',
        icon: '🚰',
        seo: {
          title: 'Curage Préventif Luxembourg | Nettoyage Pro',
          description: 'Curage préventif de vos canalisations au Luxembourg. Évitez les bouchons avec un nettoyage régulier professionnel. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de curage préventif pour éviter l\'accumulation de dépôts et maintenir un bon écoulement.'
      },
      {
        id: 'inspection-annuelle',
        name: 'Inspection Annuelle',
        slug: 'inspection-annuelle',
        shortDescription: 'Contrôle annuel des installations',
        icon: '📅',
        seo: {
          title: 'Inspection Annuelle Plomberie Luxembourg | Contrôle Pro',
          description: 'Inspection annuelle de votre plomberie au Luxembourg. Contrôle complet et prévention des problèmes. Service professionnel ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'inspection annuelle pour vérifier l\'état de vos installations et prévenir les problèmes futurs.'
      },
      {
        id: 'maintenance-fosse-septique',
        name: 'Maintenance Fosse Septique',
        slug: 'maintenance-fosse-septique',
        shortDescription: 'Entretien régulier des fosses septiques',
        icon: '🏠',
        seo: {
          title: 'Entretien Fosse Septique Luxembourg | Service Pro',
          description: 'Maintenance professionnelle de votre fosse septique au Luxembourg. Entretien régulier et prévention des problèmes. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de maintenance spécialisé pour l\'entretien et le bon fonctionnement de votre fosse septique.'
      },
      {
        id: 'traitement-preventif',
        name: 'Traitement Préventif',
        slug: 'traitement-preventif',
        shortDescription: 'Solutions préventives pour canalisations',
        icon: '💧',
        seo: {
          title: 'Traitement Préventif Canalisation Luxembourg | Expert',
          description: 'Traitement préventif de vos canalisations au Luxembourg. Solutions professionnelles pour prévenir les problèmes. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de traitement préventif pour protéger vos canalisations et prévenir les problèmes récurrents.'
      },
      {
        id: 'contrat-entretien',
        name: 'Contrat d\'Entretien',
        slug: 'contrat-entretien',
        shortDescription: 'Programmes de maintenance sur mesure',
        icon: '📝',
        seo: {
          title: 'Contrat Entretien Plomberie Luxembourg | Service Pro',
          description: 'Contrats d\'entretien plomberie personnalisés au Luxembourg. Maintenance régulière et intervention prioritaire. Devis sur mesure ☎️ +352 661 297 770'
        },
        fullDescription: 'Programmes d\'entretien personnalisés avec interventions régulières et service prioritaire.'
      },
      {
        id: 'maintenance-pompe',
        name: 'Maintenance Pompe',
        slug: 'maintenance-pompe',
        shortDescription: 'Entretien des pompes et systèmes',
        icon: '⚙️',
        seo: {
          title: 'Maintenance Pompe Luxembourg | Entretien Expert',
          description: 'Maintenance professionnelle de pompes au Luxembourg. Entretien régulier et prévention des pannes. Service spécialisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de maintenance spécialisé pour l\'entretien et la durabilité de vos pompes et systèmes de relevage.'
      },
      {
        id: 'nettoyage-preventif',
        name: 'Nettoyage Préventif',
        slug: 'nettoyage-preventif',
        shortDescription: 'Nettoyage régulier des installations',
        icon: '🧹',
        seo: {
          title: 'Nettoyage Préventif Canalisation Luxembourg | Pro',
          description: 'Nettoyage préventif de vos canalisations au Luxembourg. Maintenance régulière pour éviter les bouchons. Service pro ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de nettoyage préventif régulier pour maintenir la propreté et l\'efficacité de vos installations.'
      }
    ]
  },
  {
    id: 'reparations',
    name: 'RÉPARATIONS',
    slug: 'reparations',
    description: 'Services professionnels de réparation de plomberie au Luxembourg',
    seo: {
      title: 'Réparation Plomberie Luxembourg | Service Pro 24/7',
      description: 'Réparation plomberie professionnelle au Luxembourg. Intervention rapide pour tous problèmes de plomberie. Service d\'urgence 24/7 ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'reparation-fuite',
        name: 'Réparation Fuite',
        slug: 'reparation-fuite',
        shortDescription: 'Réparation de tous types de fuites',
        icon: '💧',
        seo: {
          title: 'Réparation Fuite Luxembourg | Intervention Express',
          description: 'Réparation rapide de fuites au Luxembourg. Intervention d\'urgence pour tout type de fuite. Service disponible 24/7 ☎️ +352 661 297 770'
        },
        fullDescription: 'Service professionnel de réparation de fuites avec intervention rapide et solutions durables.'
      },
      {
        id: 'reparation-canalisation',
        name: 'Réparation Canalisation',
        slug: 'reparation-canalisation',
        shortDescription: 'Réparation des canalisations endommagées',
        icon: '🔧',
        seo: {
          title: 'Réparation Canalisation Luxembourg | Expert Pro',
          description: 'Réparation professionnelle de canalisations au Luxembourg. Solutions durables pour tous types de dégâts. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service expert en réparation de canalisations avec diagnostic précis et solutions adaptées.'
      },
      {
        id: 'reparation-tuyauterie',
        name: 'Réparation Tuyauterie',
        slug: 'reparation-tuyauterie',
        shortDescription: 'Réparation des systèmes de tuyauterie',
        icon: '🔨',
        seo: {
          title: 'Réparation Tuyauterie Luxembourg | Service Pro',
          description: 'Réparation de tuyauterie au Luxembourg. Intervention rapide par des experts qualifiés. Service professionnel ☎️ +352 661 297 770'
        },
        fullDescription: 'Service complet de réparation de tuyauterie avec expertise technique et matériel professionnel.'
      },
      {
        id: 'reparation-joint',
        name: 'Réparation Joint',
        slug: 'reparation-joint',
        shortDescription: 'Réparation et remplacement de joints',
        icon: '🔩',
        seo: {
          title: 'Réparation Joint Plomberie Luxembourg | Expert',
          description: 'Réparation et remplacement de joints au Luxembourg. Solutions professionnelles pour joints défectueux. Service rapide ☎️ +352 661 297 770'
        },
        fullDescription: 'Service spécialisé dans la réparation et le remplacement de joints avec garantie de qualité.'
      },
      {
        id: 'reparation-wc',
        name: 'Réparation WC',
        slug: 'reparation-wc',
        shortDescription: 'Réparation de toilettes et WC',
        icon: '🚽',
        seo: {
          title: 'Réparation WC Luxembourg | Dépannage Express',
          description: 'Réparation de WC au Luxembourg. Intervention rapide pour tout problème de toilettes. Service disponible 24/7 ☎️ +352 661 297 770'
        },
        fullDescription: 'Service professionnel de réparation de WC avec intervention rapide et solutions efficaces.'
      },
      {
        id: 'reparation-egout',
        name: 'Réparation Égout',
        slug: 'reparation-egout',
        shortDescription: 'Réparation des réseaux d\'égouts',
        icon: '🕳️',
        seo: {
          title: 'Réparation Égout Luxembourg | Service Expert',
          description: 'Réparation professionnelle d\'égouts au Luxembourg. Solutions durables pour tous problèmes d\'égouts. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service expert en réparation d\'égouts avec techniques modernes et solutions durables.'
      },
      {
        id: 'reparation-pompe',
        name: 'Réparation Pompe',
        slug: 'reparation-pompe',
        shortDescription: 'Réparation de pompes de relevage',
        icon: '⚙️',
        seo: {
          title: 'Réparation Pompe Luxembourg | Intervention Pro',
          description: 'Réparation de pompes au Luxembourg. Service professionnel pour tout type de pompe de relevage. Expertise technique ☎️ +352 661 297 770'
        },
        fullDescription: 'Service spécialisé dans la réparation de pompes avec expertise technique et pièces d\'origine.'
      },
      {
        id: 'reparation-urgente',
        name: 'Réparation Urgente',
        slug: 'reparation-urgente',
        shortDescription: 'Réparations en urgence 24/7',
        icon: '🚨',
        seo: {
          title: 'Réparation Plomberie Urgente Luxembourg 24/7',
          description: 'Réparation plomberie urgente au Luxembourg. Intervention express 24h/24 et 7j/7. Service d\'urgence ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de réparation d\'urgence disponible 24/7 pour tous problèmes de plomberie.'
      }
    ]
  },
  {
    id: 'services-specifiques',
    name: 'SERVICES SPÉCIFIQUES',
    slug: 'services-specifiques',
    description: 'Services spécialisés pour des besoins particuliers en plomberie',
    seo: {
      title: 'Services Plomberie Spécialisés Luxembourg | Expert Pro',
      description: 'Services de plomberie spécialisés au Luxembourg. Solutions professionnelles pour tous vos besoins spécifiques. Intervention rapide ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'hydrocurage',
        name: 'Hydrocurage',
        slug: 'hydrocurage',
        shortDescription: 'Nettoyage haute pression des canalisations',
        icon: '💦',
        seo: {
          title: 'Hydrocurage Luxembourg | Nettoyage Haute Pression Pro',
          description: 'Service d\'hydrocurage professionnel au Luxembourg. Nettoyage haute pression efficace de vos canalisations. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'hydrocurage professionnel utilisant la haute pression pour un nettoyage en profondeur de vos canalisations.'
      },
      {
        id: 'pompage',
        name: 'Pompage',
        slug: 'pompage',
        shortDescription: 'Service de pompage professionnel',
        icon: '⚡',
        seo: {
          title: 'Pompage Eau Luxembourg | Service Professionnel',
          description: 'Service de pompage professionnel au Luxembourg. Intervention rapide pour tous types d\'inondations. Service urgent ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de pompage professionnel pour l\'évacuation rapide des eaux en cas d\'inondation ou de dégât des eaux.'
      },
      {
        id: 'curage',
        name: 'Curage',
        slug: 'curage',
        shortDescription: 'Curage professionnel des canalisations',
        icon: '🔄',
        seo: {
          title: 'Curage Canalisation Luxembourg | Service Expert',
          description: 'Curage professionnel de canalisations au Luxembourg. Nettoyage complet et efficace de vos conduites. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de curage professionnel pour l\'entretien et le nettoyage en profondeur de vos canalisations.'
      },
      {
        id: 'degorgement',
        name: 'Dégorgement',
        slug: 'degorgement',
        shortDescription: 'Service de dégorgement spécialisé',
        icon: '🚿',
        seo: {
          title: 'Dégorgement Canalisation Luxembourg | Pro 24/7',
          description: 'Service de dégorgement professionnel au Luxembourg. Débouchage rapide et efficace de vos canalisations. Urgence 24/7 ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de dégorgement spécialisé pour éliminer efficacement les obstructions dans vos canalisations.'
      },
      {
        id: 'desembouage',
        name: 'Désembouage',
        slug: 'desembouage',
        shortDescription: 'Traitement des canalisations embouées',
        icon: '🧪',
        seo: {
          title: 'Désembouage Canalisation Luxembourg | Expert',
          description: 'Service de désembouage professionnel au Luxembourg. Élimination efficace des boues et dépôts. Service spécialisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de désembouage professionnel pour éliminer les boues et dépôts dans vos canalisations.'
      },
      {
        id: 'inspection-camera',
        name: 'Inspection Caméra',
        slug: 'inspection-camera',
        shortDescription: 'Diagnostic vidéo des canalisations',
        icon: '📹',
        seo: {
          title: 'Inspection Caméra Canalisation Luxembourg | Pro',
          description: 'Inspection caméra professionnelle au Luxembourg. Diagnostic précis et visualisation en direct des problèmes. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'inspection par caméra pour un diagnostic précis de l\'état de vos canalisations.'
      },
      {
        id: 'detartrage',
        name: 'Détartrage',
        slug: 'detartrage',
        shortDescription: 'Élimination du calcaire',
        icon: '🔨',
        seo: {
          title: 'Détartrage Canalisation Luxembourg | Service Pro',
          description: 'Service de détartrage professionnel au Luxembourg. Élimination efficace du calcaire dans vos canalisations. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de détartrage professionnel pour éliminer le calcaire et restaurer le débit de vos canalisations.'
      },
      {
        id: 'desouchage',
        name: 'Désouchage',
        slug: 'desouchage',
        shortDescription: 'Élimination des racines',
        icon: '🌳',
        seo: {
          title: 'Désouchage Canalisation Luxembourg | Expert Pro',
          description: 'Service de désouchage professionnel au Luxembourg. Élimination des racines dans vos canalisations. Service spécialisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de désouchage spécialisé pour éliminer les racines qui obstruent vos canalisations.'
      },
      {
        id: 'degazage',
        name: 'Dégazage',
        slug: 'degazage',
        shortDescription: 'Traitement des gaz dans les canalisations',
        icon: '💨',
        seo: {
          title: 'Dégazage Canalisation Luxembourg | Service Pro',
          description: 'Service de dégazage professionnel au Luxembourg. Élimination des gaz nocifs dans vos canalisations. Intervention sécurisée ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de dégazage professionnel pour éliminer les gaz nocifs de vos canalisations en toute sécurité.'
      }
    ]
  },
  {
    id: 'ventilation',
    name: 'VENTILATION',
    slug: 'ventilation',
    description: 'Services professionnels pour l\'entretien et la réparation des systèmes de ventilation au Luxembourg',
    seo: {
      title: 'Entretien Ventilation Luxembourg | Service Expert VMC',
      description: 'Entretien et réparation de systèmes de ventilation au Luxembourg. Experts en VMC et aération. Intervention professionnelle ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'entretien-vmc',
        name: 'Entretien VMC',
        slug: 'entretien-vmc',
        shortDescription: 'Maintenance des systèmes VMC',
        icon: '🌪️',
        seo: {
          title: 'Entretien VMC Luxembourg | Maintenance Pro',
          description: 'Entretien professionnel de VMC au Luxembourg. Maintenance et nettoyage de votre ventilation mécanique contrôlée. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'entretien professionnel pour maintenir l\'efficacité de votre système de ventilation mécanique contrôlée.'
      },
      {
        id: 'nettoyage-vmc',
        name: 'Nettoyage VMC',
        slug: 'nettoyage-vmc',
        shortDescription: 'Nettoyage complet des systèmes VMC',
        icon: '🧹',
        seo: {
          title: 'Nettoyage VMC Luxembourg | Service Pro',
          description: 'Nettoyage professionnel de VMC au Luxembourg. Désinfection et entretien complet de votre système de ventilation. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de nettoyage approfondi pour assurer la propreté et l\'hygiène de votre système VMC.'
      },
      {
        id: 'reparation-vmc',
        name: 'Réparation VMC',
        slug: 'reparation-vmc',
        shortDescription: 'Réparation des systèmes de ventilation',
        icon: '🔧',
        seo: {
          title: 'Réparation VMC Luxembourg | Dépannage Expert',
          description: 'Réparation de VMC au Luxembourg. Intervention rapide pour tout problème de ventilation. Service professionnel ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de réparation expert pour tous types de problèmes sur votre système de ventilation.'
      },
      {
        id: 'debouchage-vmc',
        name: 'Débouchage VMC',
        slug: 'debouchage-vmc',
        shortDescription: 'Débouchage des conduits VMC',
        icon: '🌬️',
        seo: {
          title: 'Débouchage VMC Luxembourg | Intervention Pro',
          description: 'Débouchage de VMC au Luxembourg. Nettoyage et désobstruction des conduits de ventilation. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de débouchage spécialisé pour libérer vos conduits de ventilation de toute obstruction.'
      },
      {
        id: 'desinfection-vmc',
        name: 'Désinfection VMC',
        slug: 'desinfection-vmc',
        shortDescription: 'Désinfection complète des systèmes VMC',
        icon: '🧪',
        seo: {
          title: 'Désinfection VMC Luxembourg | Service Pro',
          description: 'Désinfection professionnelle de VMC au Luxembourg. Traitement antibactérien de votre système de ventilation. Service spécialisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de désinfection professionnelle pour éliminer les bactéries et assainir votre système VMC.'
      },
      {
        id: 'maintenance-vmc',
        name: 'Maintenance VMC',
        slug: 'maintenance-vmc',
        shortDescription: 'Entretien régulier des systèmes VMC',
        icon: '⚙️',
        seo: {
          title: 'Maintenance VMC Luxembourg | Service Expert',
          description: 'Maintenance professionnelle de VMC au Luxembourg. Entretien régulier et préventif de votre ventilation. Devis personnalisé ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de maintenance régulière pour garantir les performances optimales de votre système VMC.'
      },
      {
        id: 'installation-vmc',
        name: 'Installation VMC',
        slug: 'installation-vmc',
        shortDescription: 'Installation de nouveaux systèmes VMC',
        icon: '🏗️',
        seo: {
          title: 'Installation VMC Luxembourg | Service Pro',
          description: 'Installation professionnelle de VMC au Luxembourg. Pose et configuration de systèmes de ventilation. Devis gratuit ☎️ +352 661 297 770'
        },
        fullDescription: 'Service d\'installation professionnel pour la mise en place de nouveaux systèmes de ventilation.'
      },
      {
        id: 'diagnostic-vmc',
        name: 'Diagnostic VMC',
        slug: 'diagnostic-vmc',
        shortDescription: 'Analyse complète des systèmes VMC',
        icon: '🔍',
        seo: {
          title: 'Diagnostic VMC Luxembourg | Expert Ventilation',
          description: 'Diagnostic professionnel de VMC au Luxembourg. Analyse complète de votre système de ventilation. Service expert ☎️ +352 661 297 770'
        },
        fullDescription: 'Service de diagnostic approfondi pour évaluer les performances et l\'état de votre système VMC.'
      }
    ]
  },
  {
    id: 'canalisations-orientation',
    name: 'CANALISATIONS PAR ORIENTATION',
    slug: 'canalisations-orientation',
    description: 'Services de débouchage adaptés à l\'orientation et à l\'emplacement spécifique des canalisations',
    problems: [
      {
        id: 'debouchage-canalisation-verticale',
        name: 'Débouchage Canalisation Verticale',
        slug: 'debouchage-canalisation-verticale',
        shortDescription: 'Intervention sur les canalisations verticales',
        icon: '⬆️',
        fullDescription: 'Service spécialisé dans le débouchage des canalisations verticales, utilisant des techniques et équipements adaptés aux contraintes de la verticalité.'
      },
      {
        id: 'debouchage-canalisation-horizontale',
        name: 'Débouchage Canalisation Horizontale',
        slug: 'debouchage-canalisation-horizontale',
        shortDescription: 'Débouchage des canalisations horizontales',
        icon: '➡️',
        fullDescription: 'Expertise en débouchage de canalisations horizontales, assurant une intervention efficace sur toute la longueur du réseau.'
      },
      {
        id: 'debouchage-canalisation-enterree',
        name: 'Débouchage Canalisation Enterrée',
        slug: 'debouchage-canalisation-enterree',
        shortDescription: 'Intervention sur les canalisations enterrées',
        icon: '⚡',
        fullDescription: 'Expertise en débouchage de canalisations enterrées, utilisant des technologies de pointe pour localiser et traiter les obstructions.'
      },
      {
        id: 'debouchage-canalisation-suspendue',
        name: 'Débouchage Canalisation Suspendue',
        slug: 'debouchage-canalisation-suspendue',
        shortDescription: 'Débouchage des canalisations suspendues',
        icon: '🔝',
        fullDescription: 'Intervention spécialisée sur les canalisations suspendues, avec des méthodes adaptées à leur configuration particulière.'
      },
      {
        id: 'debouchage-canalisation-encastrree',
        name: 'Débouchage Canalisation Encastrée',
        slug: 'debouchage-canalisation-encastrree',
        shortDescription: 'Intervention sur les canalisations encastrées',
        icon: '🏗️',
        fullDescription: 'Service expert pour le débouchage des canalisations encastrées, utilisant des techniques non-invasives pour préserver l\'intégrité des murs.'
      },
      {
        id: 'debouchage-canalisation-apparente',
        name: 'Débouchage Canalisation Apparente',
        slug: 'debouchage-canalisation-apparente',
        shortDescription: 'Débouchage des canalisations apparentes',
        icon: '👁️',
        fullDescription: 'Débouchage professionnel des canalisations apparentes, avec une attention particulière à l\'aspect esthétique après intervention.'
      },
      {
        id: 'debouchage-canalisation-vide-sanitaire',
        name: 'Débouchage Canalisation Vide Sanitaire',
        slug: 'debouchage-canalisation-vide-sanitaire',
        shortDescription: 'Intervention dans les vides sanitaires',
        icon: '🏠',
        fullDescription: 'Service spécialisé dans le débouchage des canalisations situées dans les vides sanitaires, avec une expertise pour les espaces confinés.'
      },
      {
        id: 'debouchage-canalisation-faux-plafond',
        name: 'Débouchage Canalisation Faux Plafond',
        slug: 'debouchage-canalisation-faux-plafond',
        shortDescription: 'Débouchage des canalisations en faux plafond',
        icon: '🔲',
        fullDescription: 'Expertise en débouchage des canalisations situées dans les faux plafonds, avec des techniques préservant l\'intégrité des installations.'
      },
      {
        id: 'debouchage-colonne-tuyauterie',
        name: 'Débouchage Colonne Tuyauterie',
        slug: 'debouchage-colonne-tuyauterie',
        shortDescription: 'Intervention sur les colonnes de tuyauterie',
        icon: '🔧',
        fullDescription: 'Service expert pour le débouchage des colonnes de tuyauterie, assurant la connexion efficace entre les différentes sections du réseau.'
      },
      {
        id: 'debouchage-colonne-principale',
        name: 'Débouchage Colonne Principale',
        slug: 'debouchage-colonne-principale',
        shortDescription: 'Entretien et débouchage des colonnes principales',
        icon: '⬇️',
        fullDescription: 'Le débouchage des colonnes principales nécessite une expertise particulière. Notre équipe utilise des équipements adaptés pour traiter efficacement ces canalisations essentielles.'
      },
      {
        id: 'debouchage-colonne-technique',
        name: 'Débouchage Colonne Technique',
        slug: 'debouchage-colonne-technique',
        shortDescription: 'Intervention dans les colonnes techniques des bâtiments',
        icon: '🔧',
        fullDescription: 'Nous intervenons dans les colonnes techniques pour déboucher et entretenir l\'ensemble des réseaux d\'évacuation, garantissant leur bon fonctionnement.'
      },
      {
        id: 'debouchage-colonne-montante',
        name: 'Débouchage Colonne Montante',
        slug: 'debouchage-colonne-montante',
        shortDescription: 'Débouchage des colonnes montantes d\'immeubles',
        icon: '⬆️',
        fullDescription: 'Les colonnes montantes requièrent une attention particulière. Notre expertise nous permet d\'intervenir efficacement sur ces installations verticales.'
      },
      {
        id: 'debouchage-colonne-descendante',
        name: 'Débouchage Colonne Descendante',
        slug: 'debouchage-colonne-descendante',
        shortDescription: 'Entretien des colonnes descendantes',
        icon: '⬇️',
        fullDescription: 'Nous assurons le débouchage et l\'entretien des colonnes descendantes pour prévenir les problèmes d\'évacuation dans les immeubles.'
      },
      {
        id: 'debouchage-colonne-cuisine',
        name: 'Débouchage Colonne Cuisine',
        slug: 'debouchage-colonne-cuisine',
        shortDescription: 'Intervention sur les colonnes de cuisine collectives',
        icon: '🍳',
        fullDescription: 'Spécialisés dans le débouchage des colonnes de cuisine, nous traitons efficacement les accumulations de graisses et autres résidus alimentaires.'
      },
      {
        id: 'debouchage-colonne-sanitaire',
        name: 'Débouchage Colonne Sanitaire',
        slug: 'debouchage-colonne-sanitaire',
        shortDescription: 'Entretien des colonnes sanitaires d\'immeubles',
        icon: '🚿',
        fullDescription: 'Notre équipe assure le débouchage et l\'entretien des colonnes sanitaires pour garantir le bon fonctionnement des installations dans les immeubles.'
      },
      {
        id: 'debouchage-colonne-vide-ordures',
        name: 'Débouchage Colonne Vide-Ordures',
        slug: 'debouchage-colonne-vide-ordures',
        shortDescription: 'Nettoyage et débouchage des colonnes vide-ordures',
        icon: '🗑️',
        fullDescription: 'Nous proposons un service spécialisé pour le débouchage et le nettoyage des colonnes vide-ordures, assurant l\'hygiène et le bon fonctionnement de ces installations.'
      },
      {
        id: 'fuite-colonne',
        name: 'Fuite Colonne',
        slug: 'fuite-colonne',
        shortDescription: 'Détection et réparation des fuites de colonnes',
        icon: '💧',
        fullDescription: 'Service expert en détection et réparation des fuites sur les colonnes d\'évacuation, intervenant rapidement pour éviter les dégâts des eaux.'
      },
      {
        id: 'bruit-colonne',
        name: 'Bruit Colonne',
        slug: 'bruit-colonne',
        shortDescription: 'Traitement des bruits de colonnes',
        icon: '🔊',
        fullDescription: 'Intervention spécialisée pour identifier et éliminer les bruits parasites dans les colonnes d\'évacuation, améliorant le confort acoustique.'
      },
      {
        id: 'odeur-colonne',
        name: 'Odeur Colonne',
        slug: 'odeur-colonne',
        shortDescription: 'Élimination des odeurs de colonnes',
        icon: '👃',
        fullDescription: 'Service professionnel pour le traitement des mauvaises odeurs émanant des colonnes, avec diagnostic précis de la source du problème.'
      },
      {
        id: 'vibration-tuyauterie',
        name: 'Vibration Tuyauterie',
        slug: 'vibration-tuyauterie',
        shortDescription: 'Traitement des vibrations de tuyauterie',
        icon: '📳',
        fullDescription: 'Expertise en diagnostic et résolution des problèmes de vibrations dans les tuyauteries, prévenant les dommages structurels.'
      },
      {
        id: 'corrosion-tuyauterie',
        name: 'Corrosion Tuyauterie',
        slug: 'corrosion-tuyauterie',
        shortDescription: 'Traitement de la corrosion',
        icon: '🔧',
        fullDescription: 'La corrosion peut fragiliser vos canalisations. Notre expertise permet d\'évaluer les dégâts et de proposer les solutions de réparation appropriées.'
      },
      {
        id: 'obstruction-partielle-colonne',
        name: 'Obstruction Partielle Colonne',
        slug: 'obstruction-partielle-colonne',
        shortDescription: 'Traitement des obstructions partielles',
        icon: '⚠️',
        fullDescription: 'Intervention professionnelle pour éliminer les obstructions partielles dans les colonnes, restaurant un écoulement optimal.'
      },
      {
        id: 'engorgement-tuyauterie',
        name: 'Engorgement Tuyauterie',
        slug: 'engorgement-tuyauterie',
        shortDescription: 'Traitement des engorgements',
        icon: '🚫',
        fullDescription: 'Service expert en débouchage des tuyauteries engorgées, utilisant des techniques adaptées pour restaurer la circulation.'
      },
      {
        id: 'calcaire-tuyauterie',
        name: 'Calcaire Tuyauterie',
        slug: 'calcaire-tuyauterie',
        shortDescription: 'Traitement du calcaire',
        icon: '⚪',
        fullDescription: 'Intervention spécialisée pour le traitement des dépôts calcaires dans les tuyauteries, prévenant les obstructions et la dégradation.'
      },
      {
        id: 'gel-canalisation',
        name: 'Gel Canalisation',
        slug: 'gel-canalisation',
        shortDescription: 'Traitement des canalisations gelées',
        icon: '❄️',
        fullDescription: 'Service professionnel pour le dégel des canalisations, avec intervention d\'urgence et conseils préventifs.'
      },
      {
        id: 'dilatation-tuyauterie',
        name: 'Dilatation Tuyauterie',
        slug: 'dilatation-tuyauterie',
        shortDescription: 'Gestion de la dilatation des tuyaux',
        icon: '↔️',
        fullDescription: 'Expertise en traitement des problèmes de dilatation des tuyauteries, assurant leur bon fonctionnement dans toutes les conditions.'
      },
      {
        id: 'debouchage-pied-colonne',
        name: 'Débouchage Pied de Colonne',
        slug: 'debouchage-pied-colonne',
        shortDescription: 'Intervention sur les pieds de colonne',
        icon: '🔽',
        fullDescription: 'Service expert en débouchage des pieds de colonne, point crucial où s\'accumulent souvent les dépôts et obstructions.'
      },
      {
        id: 'debouchage-collecteur-pied-colonne',
        name: 'Débouchage Collecteur Pied de Colonne',
        slug: 'debouchage-collecteur-pied-colonne',
        shortDescription: 'Entretien des collecteurs en pied de colonne',
        icon: '⚡',
        fullDescription: 'Intervention spécialisée sur les collecteurs en pied de colonne, assurant la bonne évacuation des eaux vers le réseau principal.'
      },
      {
        id: 'debouchage-siphon-disconnecteur',
        name: 'Débouchage Siphon Disconnecteur',
        slug: 'debouchage-siphon-disconnecteur',
        shortDescription: 'Intervention sur les siphons disconnecteurs',
        icon: '🔄',
        fullDescription: 'Service professionnel pour le débouchage des siphons disconnecteurs, essentiels pour la protection contre les remontées d\'odeurs.'
      },
      {
        id: 'debouchage-tampon-visite',
        name: 'Débouchage Tampon de Visite',
        slug: 'debouchage-tampon-visite',
        shortDescription: 'Entretien des tampons de visite',
        icon: '🔍',
        fullDescription: 'Expertise en débouchage via les tampons de visite, points d\'accès essentiels pour l\'entretien et le nettoyage des canalisations.'
      },
      {
        id: 'debouchage-trappe-visite',
        name: 'Débouchage Trappe de Visite',
        slug: 'debouchage-trappe-visite',
        shortDescription: 'Intervention par les trappes de visite',
        icon: '🚪',
        fullDescription: 'Service spécialisé dans les interventions via les trappes de visite, permettant un accès direct aux points stratégiques du réseau.'
      },
      {
        id: 'debouchage-support-tuyauterie',
        name: 'Débouchage Support Tuyauterie',
        slug: 'debouchage-support-tuyauterie',
        shortDescription: 'Entretien des supports de tuyauterie',
        icon: '📍',
        fullDescription: 'Intervention professionnelle autour des supports de tuyauterie, garantissant la stabilité et le bon écoulement du réseau.'
      },
      {
        id: 'debouchage-bride-tuyauterie',
        name: 'Débouchage Bride Tuyauterie',
        slug: 'debouchage-bride-tuyauterie',
        shortDescription: 'Intervention sur les brides de tuyauterie',
        icon: '⭕',
        fullDescription: 'Service expert pour le débouchage au niveau des brides de tuyauterie, points de jonction critiques du réseau.'
      },
      {
        id: 'debouchage-compensateur-dilatation',
        name: 'Débouchage Compensateur Dilatation',
        slug: 'debouchage-compensateur-dilatation',
        shortDescription: 'Entretien des compensateurs de dilatation',
        icon: '↔️',
        fullDescription: 'Expertise en débouchage des compensateurs de dilatation, éléments essentiels pour absorber les variations thermiques du réseau.'
      },
      {
        id: 'inspection-camera-colonne',
        name: 'Inspection Caméra Colonne',
        slug: 'inspection-camera-colonne',
        shortDescription: 'Diagnostic vidéo des colonnes',
        icon: '📹',
        fullDescription: 'Service d\'inspection vidéo des colonnes par caméra haute définition, permettant un diagnostic précis et non invasif de l\'état des canalisations.'
      },
      {
        id: 'nettoyage-haute-pression-colonne',
        name: 'Nettoyage Haute Pression Colonne',
        slug: 'nettoyage-haute-pression-colonne',
        shortDescription: 'Nettoyage puissant des colonnes',
        icon: '💨',
        fullDescription: 'Intervention de nettoyage haute pression des colonnes, éliminant efficacement les dépôts et obstructions les plus tenaces.'
      },
      {
        id: 'hydrocurage-colonne',
        name: 'Hydrocurage Colonne',
        slug: 'hydrocurage-colonne',
        shortDescription: 'Curage hydraulique des colonnes',
        icon: '💦',
        fullDescription: 'Service d\'hydrocurage professionnel des colonnes, utilisant la puissance de l\'eau sous pression pour un nettoyage en profondeur.'
      },
      {
        id: 'remplacement-colonne',
        name: 'Remplacement Colonne',
        slug: 'remplacement-colonne',
        shortDescription: 'Remplacement complet de colonnes',
        icon: '🔄',
        fullDescription: 'Service expert de remplacement de colonnes vétustes ou endommagées, avec une installation conforme aux normes actuelles.'
      },
      {
        id: 'renovation-colonne',
        name: 'Rénovation Colonne',
        slug: 'renovation-colonne',
        shortDescription: 'Rénovation des colonnes existantes',
        icon: '🔧',
        fullDescription: 'Intervention professionnelle de rénovation des colonnes, prolongeant leur durée de vie tout en améliorant leurs performances.'
      },
      {
        id: 'chemisage-colonne',
        name: 'Chemisage Colonne',
        slug: 'chemisage-colonne',
        shortDescription: 'Chemisage des colonnes endommagées',
        icon: '🛡️',
        fullDescription: 'Service spécialisé de chemisage des colonnes, technique moderne de réhabilitation sans destruction pour une étanchéité parfaite.'
      },
      {
        id: 'gainage-colonne',
        name: 'Gainage Colonne',
        slug: 'gainage-colonne',
        shortDescription: 'Gainage des colonnes détériorées',
        icon: '📦',
        fullDescription: 'Expertise en gainage de colonnes, solution durable de rénovation permettant de restaurer l\'intégrité des canalisations sans travaux lourds.'
      },
      {
        id: 'detection-fuite-colonne',
        name: 'Détection Fuite Colonne',
        slug: 'detection-fuite-colonne',
        shortDescription: 'Localisation précise des fuites',
        icon: '🔍',
        fullDescription: 'Service professionnel de détection de fuites sur colonnes, utilisant des technologies de pointe pour une localisation précise et rapide.'
      }
    ]
  },
  {
    id: 'conduites-principales',
    name: 'CONDUITES PRINCIPALES',
    slug: 'conduites-principales',
    description: 'Services spécialisés pour le débouchage et l\'entretien des conduites principales et leurs composants',
    problems: [
      {
        id: 'debouchage-conduite-principale',
        name: 'Débouchage Conduite Principale',
        slug: 'debouchage-conduite-principale',
        shortDescription: 'Intervention sur les conduites principales du réseau',
        icon: '🔄',
        fullDescription: 'Service professionnel de débouchage des conduites principales, assurant le bon fonctionnement de l\'ensemble du réseau d\'évacuation.'
      },
      {
        id: 'debouchage-conduite-evacuation',
        name: 'Débouchage Conduite Évacuation',
        slug: 'debouchage-conduite-evacuation',
        shortDescription: 'Débouchage des conduites d\'évacuation générales',
        icon: '💧',
        fullDescription: 'Expertise en débouchage des conduites d\'évacuation, utilisant des techniques adaptées pour restaurer un écoulement optimal.'
      },
      {
        id: 'debouchage-conduite-verticale',
        name: 'Débouchage Conduite Verticale',
        slug: 'debouchage-conduite-verticale',
        shortDescription: 'Intervention sur les conduites verticales',
        icon: '⬆️',
        fullDescription: 'Traitement spécialisé des obstructions dans les conduites verticales, avec des équipements adaptés aux contraintes de ces installations.'
      },
      {
        id: 'debouchage-conduite-horizontale',
        name: 'Débouchage Conduite Horizontale',
        slug: 'debouchage-conduite-horizontale',
        shortDescription: 'Débouchage des conduites horizontales',
        icon: '➡️',
        fullDescription: 'Service de débouchage pour les conduites horizontales, assurant une évacuation fluide sur toute la longueur du réseau.'
      },
      {
        id: 'debouchage-conduite-enterree',
        name: 'Débouchage Conduite Enterrée',
        slug: 'debouchage-conduite-enterree',
        shortDescription: 'Intervention sur les conduites enterrées',
        icon: '⚡',
        fullDescription: 'Expertise en débouchage de conduites enterrées, utilisant des technologies de pointe pour localiser et traiter les obstructions.'
      },
      {
        id: 'debouchage-conduite-collectrice',
        name: 'Débouchage Conduite Collectrice',
        slug: 'debouchage-conduite-collectrice',
        shortDescription: 'Entretien des conduites collectrices',
        icon: '🔄',
        fullDescription: 'Service spécialisé dans le débouchage des conduites collectrices, assurant le bon fonctionnement du réseau collectif.'
      },
      {
        id: 'debouchage-conduite-derivation',
        name: 'Débouchage Conduite Dérivation',
        slug: 'debouchage-conduite-derivation',
        shortDescription: 'Intervention sur les conduites de dérivation',
        icon: '↪️',
        fullDescription: 'Débouchage professionnel des conduites de dérivation, garantissant une circulation optimale dans les réseaux secondaires.'
      },
      {
        id: 'debouchage-conduite-raccordement',
        name: 'Débouchage Conduite Raccordement',
        slug: 'debouchage-conduite-raccordement',
        shortDescription: 'Débouchage des points de raccordement',
        icon: '🔌',
        fullDescription: 'Service expert en débouchage des conduites de raccordement, assurant la connexion efficace entre les différentes sections du réseau.'
      }
    ]
  },
  {
    id: 'types-tuyaux',
    name: 'TYPES DE TUYAUX',
    slug: 'types-tuyaux',
    description: 'Solutions de débouchage adaptées aux différents types de tuyaux et matériaux',
    problems: [
      {
        id: 'debouchage-tuyau-evacuation',
        name: 'Débouchage Tuyau Évacuation',
        slug: 'debouchage-tuyau-evacuation',
        shortDescription: 'Débouchage tous types de tuyaux d\'évacuation',
        icon: '🚰',
        fullDescription: 'Service complet de débouchage pour tous types de tuyaux d\'évacuation, adapté à chaque configuration.'
      },
      {
        id: 'debouchage-tuyau-pvc',
        name: 'Débouchage Tuyau PVC',
        slug: 'debouchage-tuyau-pvc',
        shortDescription: 'Intervention sur les canalisations en PVC',
        icon: '🔧',
        fullDescription: 'Expertise spécifique pour le débouchage des tuyaux en PVC, avec des méthodes adaptées à ce matériau.'
      },
      {
        id: 'debouchage-tuyau-fonte',
        name: 'Débouchage Tuyau Fonte',
        slug: 'debouchage-tuyau-fonte',
        shortDescription: 'Débouchage des canalisations en fonte',
        icon: '⚙️',
        fullDescription: 'Service spécialisé dans le débouchage des tuyaux en fonte, respectant les spécificités de ce matériau robuste.'
      },
      {
        id: 'debouchage-tuyau-cuivre',
        name: 'Débouchage Tuyau Cuivre',
        slug: 'debouchage-tuyau-cuivre',
        shortDescription: 'Intervention sur les tuyaux en cuivre',
        icon: '🛠️',
        fullDescription: 'Débouchage professionnel des tuyaux en cuivre, avec des techniques adaptées à la sensibilité du matériau.'
      },
      {
        id: 'debouchage-tuyau-acier',
        name: 'Débouchage Tuyau Acier',
        slug: 'debouchage-tuyau-acier',
        shortDescription: 'Débouchage des canalisations en acier',
        icon: '🔨',
        fullDescription: 'Service expert pour le débouchage des tuyaux en acier, utilisant des équipements adaptés à la résistance du matériau.'
      },
      {
        id: 'debouchage-tuyau-gres',
        name: 'Débouchage Tuyau Grès',
        slug: 'debouchage-tuyau-gres',
        shortDescription: 'Intervention sur les tuyaux en grès',
        icon: '🏺',
        fullDescription: 'Expertise en débouchage des tuyaux en grès, avec des méthodes respectueuses de ce matériau traditionnel.'
      },
      {
        id: 'debouchage-tuyau-multicouche',
        name: 'Débouchage Tuyau Multicouche',
        slug: 'debouchage-tuyau-multicouche',
        shortDescription: 'Débouchage des tuyaux multicouches',
        icon: '🔄',
        fullDescription: 'Service spécialisé dans le débouchage des tuyaux multicouches, prenant en compte la structure spécifique de ces canalisations.'
      },
      {
        id: 'debouchage-tuyau-polyethylene',
        name: 'Débouchage Tuyau Polyéthylène',
        slug: 'debouchage-tuyau-polyethylene',
        shortDescription: 'Intervention sur les tuyaux en polyéthylène',
        icon: '📏',
        fullDescription: 'Débouchage professionnel des tuyaux en polyéthylène, avec des techniques adaptées à ce matériau moderne.'
      },
      {
        id: 'debouchage-tuyau-galvanise',
        name: 'Débouchage Tuyau Galvanisé',
        slug: 'debouchage-tuyau-galvanise',
        shortDescription: 'Débouchage des tuyaux galvanisés',
        icon: '🔩',
        fullDescription: 'Service expert pour le débouchage des tuyaux galvanisés, tenant compte des particularités de ce traitement.'
      },
      {
        id: 'debouchage-tuyau-inox',
        name: 'Débouchage Tuyau Inox',
        slug: 'debouchage-tuyau-inox',
        shortDescription: 'Intervention sur les tuyaux en inox',
        icon: '✨',
        fullDescription: 'Expertise en débouchage des tuyaux en inox, utilisant des méthodes appropriées à ce matériau haut de gamme.'
      }
    ]
  },
  {
    id: 'raccordements',
    name: 'RACCORDEMENTS',
    slug: 'raccordements',
    description: 'Services spécialisés pour le débouchage des différents types de raccords et jonctions dans les réseaux d\'évacuation',
    problems: [
      {
        id: 'debouchage-raccord-colonne',
        name: 'Débouchage Raccord Colonne',
        slug: 'debouchage-raccord-colonne',
        shortDescription: 'Intervention sur les raccords de colonnes',
        icon: '🔌',
        fullDescription: 'Service expert pour le débouchage des raccords de colonnes, assurant la connexion efficace entre les différentes sections du réseau.'
      },
      {
        id: 'debouchage-jonction-tuyaux',
        name: 'Débouchage Jonction Tuyaux',
        slug: 'debouchage-jonction-tuyaux',
        shortDescription: 'Débouchage des jonctions entre tuyaux',
        icon: '🔗',
        fullDescription: 'Intervention spécialisée sur les jonctions de tuyaux, points critiques nécessitant une attention particulière pour maintenir l\'étanchéité du réseau.'
      },
      {
        id: 'debouchage-coude-evacuation',
        name: 'Débouchage Coude Évacuation',
        slug: 'debouchage-coude-evacuation',
        shortDescription: 'Entretien des coudes d\'évacuation',
        icon: '↪️',
        fullDescription: 'Service professionnel de débouchage des coudes d\'évacuation, points sensibles où s\'accumulent fréquemment les obstructions.'
      },
      {
        id: 'debouchage-te-raccordement',
        name: 'Débouchage Té Raccordement',
        slug: 'debouchage-te-raccordement',
        shortDescription: 'Intervention sur les tés de raccordement',
        icon: '➕',
        fullDescription: 'Expertise en débouchage des tés de raccordement, assurant la jonction efficace entre les différentes branches du réseau.'
      },
      {
        id: 'debouchage-manchon-raccordement',
        name: 'Débouchage Manchon Raccordement',
        slug: 'debouchage-manchon-raccordement',
        shortDescription: 'Débouchage des manchons de raccordement',
        icon: '⚡',
        fullDescription: 'Service spécialisé dans le débouchage des manchons de raccordement, garantissant la continuité et l\'étanchéité des connexions.'
      },
      {
        id: 'debouchage-reducteur-canalisation',
        name: 'Débouchage Réducteur Canalisation',
        slug: 'debouchage-reducteur-canalisation',
        shortDescription: 'Intervention sur les réducteurs',
        icon: '🔄',
        fullDescription: 'Intervention professionnelle sur les réducteurs de canalisation, points sensibles où les changements de diamètre peuvent favoriser les bouchons.'
      },
      {
        id: 'debouchage-culotte-raccordement',
        name: 'Débouchage Culotte Raccordement',
        slug: 'debouchage-culotte-raccordement',
        shortDescription: 'Entretien des culottes de raccordement',
        icon: '🔱',
        fullDescription: 'Service expert pour le débouchage des culottes de raccordement, assurant la jonction efficace des différentes branches d\'évacuation.'
      },
      {
        id: 'debouchage-embranchement',
        name: 'Débouchage Embranchement',
        slug: 'debouchage-embranchement',
        shortDescription: 'Débouchage des points d\'embranchement',
        icon: '🌳',
        fullDescription: 'Expertise en débouchage des embranchements, points critiques où se rejoignent plusieurs canalisations nécessitant une attention particulière.'
      }
    ]
  },
  {
    id: 'sanitaires-speciaux',
    name: 'SANITAIRES SPÉCIAUX',
    slug: 'sanitaires-speciaux',
    description: 'Services spécialisés pour le débouchage et l\'entretien des équipements sanitaires spécifiques',
    problems: [
      {
        id: 'debouchage-urinoir',
        name: 'Débouchage Urinoir',
        slug: 'debouchage-urinoir',
        shortDescription: 'Intervention sur urinoirs standards',
        icon: '🚽',
        fullDescription: 'Service professionnel de débouchage d\'urinoirs, avec techniques adaptées pour éliminer efficacement les obstructions et dépôts calcaires.'
      },
      {
        id: 'debouchage-urinoir-collectif',
        name: 'Débouchage Urinoir Collectif',
        slug: 'debouchage-urinoir-collectif',
        shortDescription: 'Entretien des urinoirs collectifs',
        icon: '🏢',
        fullDescription: 'Expertise en débouchage d\'urinoirs collectifs, intervention adaptée aux établissements recevant du public avec forte fréquentation.'
      },
      {
        id: 'debouchage-urinoir-sans-eau',
        name: 'Débouchage Urinoir Sans Eau',
        slug: 'debouchage-urinoir-sans-eau',
        shortDescription: 'Maintenance des urinoirs écologiques',
        icon: '💧',
        fullDescription: 'Service spécialisé pour l\'entretien des urinoirs sans eau, avec protocoles spécifiques respectant leur technologie écologique.'
      },
      {
        id: 'debouchage-sanibroyeur',
        name: 'Débouchage Sanibroyeur',
        slug: 'debouchage-sanibroyeur',
        shortDescription: 'Intervention sur sanibroyeurs',
        icon: '⚡',
        fullDescription: 'Intervention experte sur les sanibroyeurs, avec diagnostic précis et réparation adaptée à ces systèmes mécaniques sensibles.'
      },
      {
        id: 'debouchage-broyeur-sanitaire',
        name: 'Débouchage Broyeur Sanitaire',
        slug: 'debouchage-broyeur-sanitaire',
        shortDescription: 'Entretien des broyeurs sanitaires',
        icon: '🔧',
        fullDescription: 'Service professionnel de débouchage des broyeurs sanitaires, assurant leur bon fonctionnement et leur longévité.'
      },
      {
        id: 'debouchage-toilette-broyeur',
        name: 'Débouchage Toilette Broyeur',
        slug: 'debouchage-toilette-broyeur',
        shortDescription: 'Maintenance des WC avec broyeur',
        icon: '🚽',
        fullDescription: 'Expertise en débouchage de toilettes équipées de broyeurs, intervention tenant compte des spécificités de ces installations.'
      },
      {
        id: 'wc-suspendu-broyeur',
        name: 'WC Suspendu Broyeur',
        slug: 'wc-suspendu-broyeur',
        shortDescription: 'Intervention WC suspendus avec broyeur',
        icon: '🔌',
        fullDescription: 'Service spécialisé pour le débouchage des WC suspendus avec broyeur, combinant expertise en plomberie et en mécanique.'
      },
      {
        id: 'debouchage-sanitaire-automatique',
        name: 'Débouchage Sanitaire Automatique',
        slug: 'debouchage-sanitaire-automatique',
        shortDescription: 'Entretien des sanitaires automatiques',
        icon: '🤖',
        fullDescription: 'Intervention professionnelle sur les sanitaires automatiques, avec maintenance des systèmes électroniques et mécaniques.'
      },
      {
        id: 'debouchage-toilette-chimique',
        name: 'Débouchage Toilette Chimique',
        slug: 'debouchage-toilette-chimique',
        shortDescription: 'Maintenance des toilettes chimiques',
        icon: '🧪',
        fullDescription: 'Service expert pour l\'entretien des toilettes chimiques, avec protocoles spécifiques respectant l\'environnement et la réglementation.'
      }
    ]
  },
  {
    id: 'separateurs-industriels',
    name: 'SÉPARATEURS INDUSTRIELS',
    slug: 'separateurs-industriels',
    description: 'Services spécialisés pour le débouchage et l\'entretien des équipements de séparation, filtration, épuration et prétraitement industriels',
    problems: [
      {
        id: 'debouchage-separateur-hydrocarbures',
        name: 'Débouchage Séparateur Hydrocarbures',
        slug: 'debouchage-separateur-hydrocarbures',
        shortDescription: 'Entretien des séparateurs d\'hydrocarbures',
        fullDescription: 'Service professionnel de débouchage des séparateurs d\'hydrocarbures, assurant leur efficacité dans le traitement des eaux polluées et le respect des normes environnementales.',
        icon: '⛽'
      },
      {
        id: 'debouchage-separateur-graisse',
        name: 'Débouchage Séparateur Graisse',
        slug: 'debouchage-separateur-graisse',
        shortDescription: 'Maintenance des bacs à graisse',
        fullDescription: 'Expertise en débouchage de séparateurs à graisses, intervention essentielle pour les cuisines professionnelles et les restaurants.',
        icon: '🍳'
      },
      {
        id: 'debouchage-separateur-fecules',
        name: 'Débouchage Séparateur Fécules',
        slug: 'debouchage-separateur-fecules',
        shortDescription: 'Entretien des séparateurs à fécules',
        fullDescription: 'Service spécialisé dans le débouchage des séparateurs à fécules, crucial pour les industries alimentaires et les cuisines collectives.',
        icon: '🥔'
      },
      {
        id: 'debouchage-separateur-huile',
        name: 'Débouchage Séparateur Huile',
        slug: 'debouchage-separateur-huile',
        shortDescription: 'Maintenance des séparateurs d\'huile',
        fullDescription: 'Intervention experte sur les séparateurs d\'huile, garantissant leur efficacité dans la séparation et la récupération des huiles.',
        icon: '🛢️'
      },
      {
        id: 'debouchage-debourbeur-separateur',
        name: 'Débouchage Débourbeur Séparateur',
        slug: 'debouchage-debourbeur-separateur',
        shortDescription: 'Entretien des débourbeurs',
        fullDescription: 'Service professionnel pour le débouchage des débourbeurs-séparateurs, assurant la séparation efficace des boues et des particules.',
        icon: '🔄'
      },
      {
        id: 'debouchage-deshuileur',
        name: 'Débouchage Déshuileur',
        slug: 'debouchage-deshuileur',
        shortDescription: 'Maintenance des déshuileurs',
        fullDescription: 'Expertise en débouchage de déshuileurs, garantissant l\'élimination efficace des huiles et graisses des eaux usées.',
        icon: '💧'
      },
      {
        id: 'debouchage-pretraitement-industriel',
        name: 'Débouchage Prétraitement Industriel',
        slug: 'debouchage-pretraitement-industriel',
        shortDescription: 'Entretien des systèmes de prétraitement',
        fullDescription: 'Service spécialisé dans le débouchage des installations de prétraitement industriel, assurant leur performance optimale.',
        icon: '🏭'
      },
      {
        id: 'debouchage-bac-retention',
        name: 'Débouchage Bac Rétention',
        slug: 'debouchage-bac-retention',
        shortDescription: 'Maintenance des bacs de rétention',
        fullDescription: 'Service professionnel de débouchage de bacs de rétention, garantissant leur capacité à contenir les déversements accidentels.',
        icon: '⚠️'
      },
      {
        id: 'debouchage-bac-decantation',
        name: 'Débouchage Bac Décantation',
        slug: 'debouchage-bac-decantation',
        shortDescription: 'Entretien des bacs de décantation',
        fullDescription: 'Service professionnel de débouchage des bacs de décantation, assurant l\'élimination efficace des sédiments et des impuretés.',
        icon: '🏊'
      },
      {
        id: 'debouchage-cuve-decantation',
        name: 'Débouchage Cuve Décantation',
        slug: 'debouchage-cuve-decantation',
        shortDescription: 'Maintenance des cuves de décantation',
        fullDescription: 'Expertise en débouchage des cuves de décantation, garantissant leur performance dans la séparation des particules.',
        icon: '🧊'
      },
      {
        id: 'debouchage-fosse-decantation',
        name: 'Débouchage Fosse Décantation',
        slug: 'debouchage-fosse-decantation',
        shortDescription: 'Entretien des fosses de décantation',
        fullDescription: 'Service spécialisé dans le débouchage des fosses de décantation, crucial pour le traitement des eaux usées industrielles.',
        icon: '🕳️'
      },
      {
        id: 'debouchage-bassin-decantation',
        name: 'Débouchage Bassin Décantation',
        slug: 'debouchage-bassin-decantation',
        shortDescription: 'Maintenance des bassins de décantation',
        fullDescription: 'Intervention professionnelle sur les bassins de décantation, assurant leur efficacité dans la séparation des matières en suspension.',
        icon: '🌊'
      },
      {
        id: 'debouchage-decanteur-primaire',
        name: 'Débouchage Décanteur Primaire',
        slug: 'debouchage-decanteur-primaire',
        shortDescription: 'Entretien des décanteurs primaires',
        fullDescription: 'Service expert pour le débouchage des décanteurs primaires, première étape cruciale du traitement des eaux usées.',
        icon: '1️⃣'
      },
      {
        id: 'debouchage-decanteur-secondaire',
        name: 'Débouchage Décanteur Secondaire',
        slug: 'debouchage-decanteur-secondaire',
        shortDescription: 'Maintenance des décanteurs secondaires',
        fullDescription: 'Intervention spécialisée sur les décanteurs secondaires, assurant un traitement biologique efficace des eaux.',
        icon: '2️⃣'
      },
      {
        id: 'debouchage-decanteur-lamellaire',
        name: 'Débouchage Décanteur Lamellaire',
        slug: 'debouchage-decanteur-lamellaire',
        shortDescription: 'Entretien des décanteurs lamellaires',
        fullDescription: 'Service professionnel de débouchage des décanteurs lamellaires, optimisant la séparation des particules grâce à leur design spécifique.',
        icon: '📐'
      },
      {
        id: 'debouchage-clarificateur',
        name: 'Débouchage Clarificateur',
        slug: 'debouchage-clarificateur',
        shortDescription: 'Maintenance des clarificateurs',
        fullDescription: 'Expertise en débouchage des clarificateurs, garantissant la clarification optimale des eaux industrielles.',
        icon: '✨'
      },
      {
        id: 'debouchage-systeme-filtration',
        name: 'Débouchage Système Filtration',
        slug: 'debouchage-systeme-filtration',
        shortDescription: 'Entretien complet des systèmes de filtration',
        fullDescription: 'Service professionnel de débouchage et maintenance globale des systèmes de filtration, assurant leur efficacité et leur performance.',
        icon: '🔬'
      },
      {
        id: 'debouchage-filtre-eau',
        name: 'Débouchage Filtre Eau',
        slug: 'debouchage-filtre-eau',
        shortDescription: 'Maintenance des filtres à eau',
        fullDescription: 'Expertise en débouchage et nettoyage des filtres à eau, garantissant une purification optimale et une eau de qualité.',
        icon: '💧'
      },
      {
        id: 'debouchage-filtre-particules',
        name: 'Débouchage Filtre Particules',
        slug: 'debouchage-filtre-particules',
        shortDescription: 'Entretien des filtres à particules',
        fullDescription: 'Service spécialisé dans le débouchage des filtres à particules, éliminant efficacement les impuretés et les contaminants.',
        icon: '🔍'
      },
      {
        id: 'debouchage-filtre-charbon',
        name: 'Débouchage Filtre Charbon',
        slug: 'debouchage-filtre-charbon',
        shortDescription: 'Maintenance des filtres �� charbon',
        fullDescription: 'Intervention professionnelle sur les filtres à charbon, assurant leur capacité d\'absorption et de purification.',
        icon: '⚫'
      },
      {
        id: 'debouchage-filtre-sable',
        name: 'Débouchage Filtre Sable',
        slug: 'debouchage-filtre-sable',
        shortDescription: 'Entretien des filtres à sable',
        fullDescription: 'Service expert pour le débouchage des filtres à sable, maintenant leur efficacité dans la filtration des eaux.',
        icon: '🏖️'
      },
      {
        id: 'debouchage-tamis-filtrant',
        name: 'Débouchage Tamis Filtrant',
        slug: 'debouchage-tamis-filtrant',
        shortDescription: 'Maintenance des tamis filtrants',
        fullDescription: 'Service spécialisé dans le débouchage des tamis filtrants, assurant leur capacité à retenir les particules indésirables.',
        icon: '📐'
      },
      {
        id: 'debouchage-cartouche-filtrante',
        name: 'Débouchage Cartouche Filtrante',
        slug: 'debouchage-cartouche-filtrante',
        shortDescription: 'Entretien des cartouches filtrantes',
        fullDescription: 'Service professionnel de débouchage et remplacement des cartouches filtrantes, garantissant une filtration optimale.',
        icon: '🧻'
      },
      {
        id: 'debouchage-pre-filtre',
        name: 'Débouchage Pré-Filtre',
        slug: 'debouchage-pre-filtre',
        shortDescription: 'Maintenance des pré-filtres',
        fullDescription: 'Intervention sur les pré-filtres, première étape cruciale dans le processus de filtration pour protéger les systèmes en aval.',
        icon: '1️⃣'
      },
      {
        id: 'debouchage-post-filtre',
        name: 'Débouchage Post-Filtre',
        slug: 'debouchage-post-filtre',
        shortDescription: 'Entretien des post-filtres',
        fullDescription: 'Service spécialisé dans le débouchage des post-filtres, dernière étape de purification pour une qualité d\'eau optimale.',
        icon: '2️⃣'
      },
      {
        id: 'debouchage-micro-station-epuration',
        name: 'Débouchage Micro-Station Épuration',
        slug: 'debouchage-micro-station-epuration',
        shortDescription: 'Maintenance des micro-stations d\'épuration',
        fullDescription: 'Service technique spécialisé pour le débouchage et l\'entretien des micro-stations d\'épuration, assurant un traitement efficace des eaux usées à petite échelle.',
        icon: '🔬'
      },
      {
        id: 'debouchage-mini-station',
        name: 'Débouchage Mini-Station',
        slug: 'debouchage-mini-station',
        shortDescription: 'Entretien des mini-stations de traitement',
        fullDescription: 'Intervention professionnelle pour le débouchage et la maintenance des mini-stations de traitement des eaux, optimisant leur performance épuratoire.',
        icon: '🏭'
      },
      {
        id: 'debouchage-station-compacte',
        name: 'Débouchage Station Compacte',
        slug: 'debouchage-station-compacte',
        shortDescription: 'Maintenance des stations compactes',
        fullDescription: 'Service expert pour le débouchage et l\'entretien des stations compactes de traitement des eaux, garantissant une épuration efficace dans un espace réduit.',
        icon: '📦'
      },
      {
        id: 'debouchage-reacteur-biologique',
        name: 'Débouchage Réacteur Biologique',
        slug: 'debouchage-reacteur-biologique',
        shortDescription: 'Entretien des réacteurs biologiques',
        fullDescription: 'Intervention spécialisée dans le débouchage et la maintenance des réacteurs biologiques, assurant l\'efficacité des processus de traitement biologique des eaux.',
        icon: '🧬'
      },
      {
        id: 'debouchage-lit-bacterien',
        name: 'Débouchage Lit Bactérien',
        slug: 'debouchage-lit-bacterien',
        shortDescription: 'Maintenance des lits bactériens',
        fullDescription: 'Service technique pour le débouchage et l\'entretien des lits bactériens, optimisant le processus naturel de traitement des eaux usées.',
        icon: '🦠'
      },
      {
        id: 'debouchage-filtre-plante',
        name: 'Débouchage Filtre Plante',
        slug: 'debouchage-filtre-plante',
        shortDescription: 'Entretien des filtres à plantes',
        fullDescription: 'Intervention spécialisée sur les filtres à plantes (phytoépuration), assurant un traitement écologique et efficace des eaux usées.',
        icon: '🌿'
      },
      {
        id: 'debouchage-disques-biologiques',
        name: 'Débouchage Disques Biologiques',
        slug: 'debouchage-disques-biologiques',
        shortDescription: 'Maintenance des disques biologiques',
        fullDescription: 'Service expert pour le débouchage et l\'entretien des disques biologiques, système innovant de traitement biologique des eaux.',
        icon: '💿'
      },
      {
        id: 'debouchage-bassin-aeration',
        name: 'Débouchage Bassin Aération',
        slug: 'debouchage-bassin-aeration',
        shortDescription: 'Entretien des bassins d\'aération',
        fullDescription: 'Intervention technique spécialisée pour le débouchage et la maintenance des bassins d\'aération, essentiels au traitement biologique des eaux usées.',
        icon: '💨'
      }
    ]
  },
  {
    id: 'urgences-wc',
    name: 'URGENCES WC',
    slug: 'urgences-wc',
    description: 'Services d\'urgence 24h/24 et 7j/7 pour tous les problèmes de WC bouchés, débordements et dysfonctionnements de toilettes',
    problems: [
      {
        id: 'wc-bouche-que-faire',
        name: 'WC Bouché Que Faire',
        slug: 'wc-bouche-que-faire',
        shortDescription: 'Solutions rapides pour WC bouché',
        icon: '❓',
        fullDescription: 'Guide d\'intervention rapide et service professionnel pour déboucher votre WC en urgence. Nos experts vous conseillent et interviennent rapidement pour résoudre le problème.'
      },
      {
        id: 'debouchage-wc-urgent',
        name: 'Débouchage WC Urgent',
        slug: 'debouchage-wc-urgent',
        shortDescription: 'Intervention rapide WC bouché',
        icon: '⚡',
        fullDescription: 'Service de débouchage d\'urgence disponible 24h/24. Nos plombiers professionnels sont disponibles rapidement pour résoudre votre problème dans les plus brefs délais.'
      },
      {
        id: 'toilettes-debordent',
        name: 'Toilettes Débordent',
        slug: 'toilettes-debordent',
        shortDescription: 'Résolution débordement WC',
        icon: '💦',
        fullDescription: 'Intervention d\'urgence en cas de débordement de toilettes. Nos experts interviennent rapidement pour stopper le débordement et résoudre le problème à la source.'
      },
      {
        id: 'wc-ne-se-vide-pas',
        name: 'WC Ne Se Vide Pas',
        slug: 'wc-ne-se-vide-pas',
        shortDescription: 'Problème évacuation WC',
        icon: '🚫',
        fullDescription: 'Service spécialisé pour les problèmes d\'évacuation de WC. Diagnostic rapide et intervention professionnelle pour rétablir une évacuation normale.'
      },
      {
        id: 'eau-remonte-dans-wc',
        name: 'Eau Remonte Dans WC',
        slug: 'eau-remonte-dans-wc',
        shortDescription: 'Résolution remontées d\'eau',
        icon: '↑',
        fullDescription: 'Intervention experte pour les problèmes de remontées d\'eau dans les WC. Diagnostic et solutions pour retrouver une évacuation normale.'
      },
      {
        id: 'odeurs-wc-bouches',
        name: 'Odeurs WC Bouchés',
        slug: 'odeurs-wc-bouches',
        shortDescription: 'Élimination odeurs WC',
        icon: '👃',
        fullDescription: 'Service professionnel pour éliminer les mauvaises odeurs liées aux WC bouchés. Traitement des causes et désodorisation complète des installations.'
      },
      {
        id: 'debouchage-wc-24h-24',
        name: 'Débouchage WC 24h/24',
        slug: 'debouchage-wc-24h-24',
        shortDescription: 'Service WC 24h/24',
        icon: '🕐',
        fullDescription: 'Service de débouchage de WC disponible 24h/24. Nos équipes interviennent à toute heure pour résoudre vos urgences de plomberie.'
      },
      {
        id: 'wc-bouche-dimanche',
        name: 'WC Bouché Dimanche',
        slug: 'wc-bouche-dimanche',
        shortDescription: 'Intervention dimanche WC',
        icon: '📅',
        fullDescription: 'Service de débouchage disponible le dimanche. Nos plombiers interviennent même le week-end pour déboucher votre WC en urgence.'
      },
      {
        id: 'toilettes-bouchees-nuit',
        name: 'Toilettes Bouchées Nuit',
        slug: 'toilettes-bouchees-nuit',
        shortDescription: 'Intervention nocturne WC',
        icon: '🌙',
        fullDescription: 'Service de débouchage de toilettes disponible la nuit. Intervention rapide 24h/24 pour résoudre vos urgences même en pleine nuit.'
      },
      {
        id: 'urgence-weekend-wc',
        name: 'Urgence Weekend WC',
        slug: 'urgence-weekend-wc',
        shortDescription: 'Intervention WC week-end',
        icon: '📆',
        fullDescription: 'Service d\'urgence pour les problèmes de WC pendant le week-end. Nos experts interviennent rapidement pour résoudre vos problèmes de plomberie.'
      },
      {
        id: 'urgence-jour-ferie-wc',
        name: 'Urgence Jour Férié WC',
        slug: 'urgence-jour-ferie-wc',
        shortDescription: 'Intervention WC jour férié',
        icon: '🎉',
        fullDescription: 'Service d\'urgence pour les problèmes de WC les jours fériés. Nos experts interviennent rapidement pour résoudre vos problèmes de plomberie.'
      }
    ]
  },
  {
    id: 'types-wc',
    name: 'TYPES DE WC',
    slug: 'types-wc',
    description: 'Services spécialisés pour tous types de WC : classiques, suspendus, broyeurs, sanibroyeurs et toilettes sèches',
    problems: [
      {
        id: 'debouchage-wc-classique',
        name: 'Débouchage WC Classique',
        slug: 'debouchage-wc-classique',
        shortDescription: 'Entretien WC traditionnels',
        icon: '🚽',
        fullDescription: 'Service professionnel de débouchage pour WC classiques. Notre expertise couvre tous les problèmes courants d\'évacuation et d\'entretien des baignoires traditionnelles.'
      },
      {
        id: 'debouchage-wc-suspendu',
        name: 'Débouchage WC Suspendu',
        slug: 'debouchage-wc-suspendu',
        shortDescription: 'Maintenance WC suspendus',
        icon: '🏗️',
        fullDescription: 'Service spécialisé dans le débouchage des WC suspendus. Intervention technique adaptée à la configuration particulière des toilettes murales.'
      },
      {
        id: 'debouchage-wc-broyeur',
        name: 'Débouchage WC Broyeur',
        slug: 'debouchage-wc-broyeur',
        shortDescription: 'Entretien WC avec broyeur',
        icon: '⚙️',
        fullDescription: 'Expertise technique pour le débouchage des WC équipés d\'un système broyeur. Intervention spécialisée sur les mécanismes de broyage.'
      },
      {
        id: 'debouchage-sanibroyeur',
        name: 'Débouchage Sanibroyeur',
        slug: 'debouchage-sanibroyeur',
        shortDescription: 'Maintenance Sanibroyeur',
        icon: '🔧',
        fullDescription: 'Service expert pour le débouchage des Sanibroyeurs. Intervention technique adaptée aux spécificités des systèmes Sanibroyeur.'
      },
      {
        id: 'debouchage-toilettes-seches',
        name: 'Débouchage Toilettes Sèches',
        slug: 'debouchage-toilettes-seches',
        shortDescription: 'Entretien toilettes sèches',
        icon: '🌱',
        fullDescription: 'Service spécialisé pour l\'entretien et le débouchage des toilettes sèches. Intervention respectueuse de l\'environnement et adaptée à ce type d\'installation.'
      },
      {
        id: 'wc-suspendu-bouche-que-faire',
        name: 'WC Suspendu Bouché Que Faire',
        slug: 'wc-suspendu-bouche-que-faire',
        shortDescription: 'Solutions WC suspendu',
        icon: '❓',
        fullDescription: 'Guide d\'intervention et service professionnel pour les WC suspendus bouchés. Diagnostic et solutions adaptées aux spécificités des toilettes murales.'
      },
      {
        id: 'sanibroyeur-bouche-solutions',
        name: 'Sanibroyeur Bouché Solutions',
        slug: 'sanibroyeur-bouche-solutions',
        shortDescription: 'Dépannage Sanibroyeur',
        icon: '💡',
        fullDescription: 'Solutions expertes pour Sanibroyeur bouché. Diagnostic complet et intervention technique spécialisée pour résoudre les problèmes de votre Sanibroyeur.'
      },
      {
        id: 'broyeur-wc-fait-bruit',
        name: 'Broyeur WC Fait Bruit',
        slug: 'broyeur-wc-fait-bruit',
        shortDescription: 'Réparation bruit broyeur',
        icon: '🔊',
        fullDescription: 'Service technique spécialisé pour les problèmes de bruit de broyeur WC. Diagnostic et réparation des dysfonctionnements causant des nuisances sonores.'
      }
    ]
  },
  {
    id: 'problemes-wc',
    name: 'PROBLÈMES WC',
    slug: 'problemes-wc',
    description: 'Solutions pour tous types de problèmes de WC : objets tombés, accumulation de calcaire, évacuation lente et problèmes récurrents',
    problems: [
      {
        id: 'papier-toilette-bouche-wc',
        name: 'Papier Toilette Bouche WC',
        slug: 'papier-toilette-bouche-wc',
        shortDescription: 'WC bouché par papier',
        icon: '🧻',
        fullDescription: 'Service professionnel pour déboucher les WC obstrués par un excès de papier toilette. Intervention rapide et efficace pour rétablir l\'écoulement.'
      },
      {
        id: 'objet-tombe-dans-wc',
        name: 'Objet Tombé Dans WC',
        slug: 'objet-tombe-dans-wc',
        shortDescription: 'Récupération d\'objets',
        icon: '📱',
        fullDescription: 'Service spécialisé dans la récupération d\'objets tombés dans les WC. Intervention délicate avec équipement adapté pour récupérer vos objets sans dommage.'
      },
      {
        id: 'jouet-dans-toilettes',
        name: 'Jouet Dans Toilettes',
        slug: 'jouet-dans-toilettes',
        shortDescription: 'Extraction jouets WC',
        icon: '🧸',
        fullDescription: 'Service expert pour l\'extraction de jouets tombés dans les toilettes. Intervention adaptée pour récupérer les jouets et éviter les dégâts sur la plomberie.'
      },
      {
        id: 'wc-bouche-par-calcaire',
        name: 'WC Bouché Par Calcaire',
        slug: 'wc-bouche-par-calcaire',
        shortDescription: 'Traitement calcaire WC',
        icon: '🪨',
        fullDescription: 'Intervention spécialisée pour les WC bouchés par le calcaire. Détartrage professionnel et solutions préventives contre l\'accumulation de calcaire.'
      },
      {
        id: 'evacuation-wc-lente',
        name: 'Évacuation WC Lente',
        slug: 'evacuation-wc-lente',
        shortDescription: 'WC évacuation ralentie',
        icon: '🐌',
        fullDescription: 'Service technique pour résoudre les problèmes d\'évacuation lente des WC. Diagnostic complet et solutions pour retrouver une évacuation normale.'
      },
      {
        id: 'wc-bouche-plusieurs-fois',
        name: 'WC Bouché Plusieurs Fois',
        slug: 'wc-bouche-plusieurs-fois',
        shortDescription: 'Problèmes WC répétitifs',
        icon: '🔄',
        fullDescription: 'Expertise pour les WC qui se bouchent fréquemment. Diagnostic approfondi pour identifier et résoudre les causes des obstructions répétées.'
      },
      {
        id: 'toilettes-bouchees-regulierement',
        name: 'Toilettes Bouchées Régulièrement',
        slug: 'toilettes-bouchees-regulierement',
        shortDescription: 'WC obstruction fréquente',
        icon: '📅',
        fullDescription: 'Service spécialisé pour les toilettes qui se bouchent régulièrement. Analyse des causes profondes et solutions durables pour éviter les récidives.'
      },
      {
        id: 'bruit-evacuation-wc',
        name: 'Bruit Évacuation WC',
        slug: 'bruit-evacuation-wc',
        shortDescription: 'Problème bruit WC',
        icon: '🔊',
        fullDescription: 'Intervention technique pour les bruits anormaux d\'évacuation des WC. Diagnostic et réparation des causes de nuisances sonores dans la plomberie.'
      }
    ]
  },
  {
    id: "chasse-eau",
    name: "CHASSE D'EAU",
    slug: "chasse-eau",
    description: "Services spécialisés pour tous les problèmes de chasse d'eau : pannes, fuites, débits faibles et réparations",
    seo: {
      title: "Réparation Chasse d'Eau Luxembourg | Expert Plomberie",
      description: "Expert en réparation de chasse d'eau au Luxembourg. Intervention rapide sur pannes, fuites et dysfonctionnements. Service 24/7 ☎️ +352 661 297 770"
    },
    problems: [
      {
        id: "chasse-eau-ne-fonctionne-plus",
        name: "Chasse d'Eau Ne Fonctionne Plus",
        slug: "chasse-eau-ne-fonctionne-plus",
        shortDescription: "Panne chasse d'eau",
        icon: "❌",
        fullDescription: "Service de réparation pour chasse d'eau en panne. Diagnostic complet et intervention rapide pour rétablir le fonctionnement de votre chasse d'eau. Expertise sur tous types de mécanismes [[1]] [[3]].",
        seo: {
          title: "Chasse d'Eau en Panne Luxembourg | Réparation Express",
          description: "Chasse d'eau en panne au Luxembourg ? Intervention rapide pour diagnostic et réparation. Service professionnel ☎️ +352 661 297 770"
        }
      },
      {
        id: "fuite-chasse-eau",
        name: "Fuite Chasse d'Eau",
        slug: "fuite-chasse-eau",
        shortDescription: "Réparation fuite",
        icon: "💧",
        fullDescription: "Intervention professionnelle pour réparer les fuites de chasse d'eau. Détection et réparation rapide pour éviter le gaspillage d'eau et réduire votre facture [[7]].",
        seo: {
          title: "Fuite Chasse d'Eau Luxembourg | Réparation Urgente",
          description: "Fuite chasse d'eau au Luxembourg ? Réparation rapide pour stopper le gaspillage. Devis gratuit ☎️ +352 661 297 770"
        }
      },
      {
        id: "chasse-eau-coule-constamment",
        name: "Chasse d'Eau Coule Constamment",
        slug: "chasse-eau-coule-constamment",
        shortDescription: "Écoulement continu",
        icon: "🌊",
        fullDescription: "Service expert pour les chasses d'eau qui coulent en permanence. Réparation du mécanisme et remplacement des pièces défectueuses pour stopper l'écoulement continu [[2]].",
        seo: {
          title: "Chasse d'Eau Coule Luxembourg | Arrêt Immédiat",
          description: "Chasse d'eau qui coule en permanence au Luxembourg ? Intervention rapide pour stopper la fuite. Service 24h/24 ☎️ +352 661 297 770"
        }
      },
      {
        id: "debouchage-mecanisme-chasse",
        name: "Débouchage Mécanisme Chasse",
        slug: "debouchage-mecanisme-chasse",
        shortDescription: "Entretien mécanisme",
        icon: "⚙️",
        fullDescription: "Service technique pour déboucher et entretenir le mécanisme de chasse d'eau. Nettoyage, détartrage et réparation pour un fonctionnement optimal [[6]].",
        seo: {
          title: "Débouchage Mécanisme Chasse Luxembourg | Expert",
          description: "Mécanisme de chasse bouché au Luxembourg ? Intervention technique spécialisée. Service pro ☎️ +352 661 297 770"
        }
      },
      {
        id: "chasse-eau-faible-debit",
        name: "Chasse d'Eau Faible Débit",
        slug: "chasse-eau-faible-debit",
        shortDescription: "Problème débit chasse",
        icon: "📉",
        fullDescription: "Intervention spécialisée pour les problèmes de faible débit de chasse d'eau. Diagnostic et solutions pour retrouver une puissance normale [[8]].",
        seo: {
          title: "Chasse d'Eau Faible Débit Luxembourg | Solution Pro",
          description: "Chasse d'eau manquant de puissance au Luxembourg ? Intervention pour restaurer un débit optimal. Service rapide ☎️ +352 661 297 770"
        }
      },
      {
        id: "remplissage-chasse-eau-lent",
        name: "Remplissage Chasse d'Eau Lent",
        slug: "remplissage-chasse-eau-lent",
        shortDescription: "Remplissage ralenti",
        icon: "⏳",
        fullDescription: "Service expert pour les chasses d'eau à remplissage lent. Réparation du système de remplissage pour un fonctionnement efficace [[9]].",
        seo: {
          title: "Remplissage Chasse d'Eau Lent Luxembourg | Expert",
          description: "Remplissage chasse d'eau trop lent au Luxembourg ? Intervention rapide pour un fonctionnement normal. Service pro ☎️ +352 661 297 770"
        }
      },
      {
        id: "bruit-chasse-eau",
        name: "Bruit Chasse d'Eau",
        slug: "bruit-chasse-eau",
        shortDescription: "Nuisances sonores",
        icon: "🔊",
        fullDescription: "Intervention technique pour les bruits anormaux de chasse d'eau. Diagnostic et réparation des causes de nuisances sonores pour un fonctionnement silencieux.",
        seo: {
          title: "Bruit Chasse d'Eau Luxembourg | Solution Silence",
          description: "Chasse d'eau bruyante au Luxembourg ? Intervention pour un fonctionnement silencieux. Devis gratuit ☎️ +352 661 297 770"
        }
      },
      { 
        id: "reparer-chasse-eau",
        name: "Réparer Chasse d'Eau",
        slug: "reparer-chasse-eau",
        shortDescription: "Réparation complète",
        icon: "🔧",
        fullDescription: "Service complet de réparation de chasse d'eau. Diagnostic, réparation et remplacement de pièces pour une remise en état optimale [[8]] [[10]].",
        seo: {
          title: "Réparation Chasse d'Eau Luxembourg | Service Complet",
          description: "Besoin de réparer votre chasse d'eau au Luxembourg ? Service complet de diagnostic et réparation. Intervention rapide ☎️ +352 661 297 770"
        }
      }
    ]
  },
  {
    id: 'evacuations-wc',
    name: 'ÉVACUATIONS WC',
    slug: 'evacuations-wc',
    description: 'Services spécialisés pour tous les problèmes d\'évacuation de WC : canalisations, conduites, tuyaux et ventilation',
    seo: {
      title: 'Débouchage Évacuations WC Luxembourg | Expert Plomberie',
      description: 'Expert en débouchage d\'évacuations WC au Luxembourg. Intervention rapide sur canalisations, conduites et ventilation. Service 24/7 ☎️ +352 661 297 770'
    },
    problems: [
      {
        id: 'evacuation-wc-bouchee',
        name: 'Évacuation WC Bouchée',
        slug: 'evacuation-wc-bouchee',
        shortDescription: 'Débouchage évacuation',
        icon: '🚫',
        fullDescription: 'Service professionnel pour déboucher les évacuations de WC. Intervention rapide et efficace pour rétablir l\'écoulement normal et prévenir les risques sanitaires.',
        seo: {
          title: 'Évacuation WC Bouchée Luxembourg | Débouchage Express',
          description: 'WC bouché au Luxembourg ? Intervention rapide pour déboucher votre évacuation. Service professionnel 24/7 ☎️ +352 661 297 770'
        }
      },
      {
        id: 'refoulement-evacuation-wc',
        name: 'Refoulement Évacuation WC',
        slug: 'refoulement-evacuation-wc',
        shortDescription: 'Problème refoulement',
        icon: '↩️',
        fullDescription: 'Service expert pour les problèmes de refoulement dans les évacuations de WC. Diagnostic et solutions durables pour éviter les remontées d\'eau et les désagréments.',
        seo: {
          title: 'Refoulement WC Luxembourg | Solution Anti-Refoulement',
          description: 'Problème de refoulement WC au Luxembourg ? Solutions efficaces contre les remontées d\'eau. Devis gratuit ☎️ +352 661 297 770'
        }
      },
      {
        id: 'raccordement-wc-bouche',
        name: 'Raccordement WC Bouché',
        slug: 'raccordement-wc-bouche',
        shortDescription: 'Débouchage raccord',
        icon: '🔗',
        fullDescription: 'Intervention spécialisée sur les raccordements de WC bouchés. Expertise technique pour déboucher les points de jonction et assurer une étanchéité parfaite.',
        seo: {
          title: 'Raccordement WC Bouché Luxembourg | Expert',
          description: 'Raccordement WC bouché au Luxembourg ? Intervention technique spécialisée. Service pro ☎️ +352 661 297 770'
        }
      },
      {
        id: 'coude-evacuation-wc-bouche',
        name: 'Coude Évacuation WC Bouché',
        slug: 'coude-evacuation-wc-bouche',
        shortDescription: 'Débouchage coude',
        icon: '↪️',
        fullDescription: 'Service technique pour déboucher les coudes d\'évacuation de WC. Intervention précise sur les zones coudées de la tuyauterie pour éliminer les accumulations.',
        seo: {
          title: 'Coude WC Bouché Luxembourg | Débouchage Précis',
          description: 'Coude d\'évacuation WC bouché au Luxembourg ? Intervention ciblée et efficace. Service rapide ☎️ +352 661 297 770'
        }
      },
      {
        id: 'ventilation-wc-bouchee',
        name: 'Ventilation WC Bouchée',
        slug: 'ventilation-wc-bouchee',
        shortDescription: 'Débouchage ventilation',
        icon: '💨',
        fullDescription: 'Expertise en débouchage des systèmes de ventilation de WC. Intervention pour restaurer une aération efficace, prévenir les mauvaises odeurs et assurer un bon fonctionnement.',
        seo: {
          title: 'Ventilation WC Bouchée Luxembourg | Expert Aération',
          description: 'Ventilation WC bouchée au Luxembourg ? Intervention pour une aération optimale. Devis gratuit ☎️ +352 661 297 770'
        }
      }
    ]
  }
];

// Function to get all problems across all categories
export function getAllProblems(): Problem[] {
  return problemCategories.flatMap(category => category.problems);
}

// Function to get a problem by its slug
export function getProblemBySlug(slug: string): Problem | undefined {
  return getAllProblems().find(problem => problem.slug === slug);
}

// Function to get problems by category ID
export function getProblemsByCategory(categoryId: string): Problem[] {
  const category = problemCategories.find(cat => cat.id === categoryId);
  return category ? category.problems : [];
}

// Function to get a problem category by its slug
export function getProblemCategoryBySlug(slug: string): ProblemCategory | undefined {
  return problemCategories.find(category => category.slug === slug);
}