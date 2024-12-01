import { problemCategories } from './problems'
import { interventionCategories } from './interventions'
import { serviceCategories } from './services-new'

export interface CityData {
  name: string
  slug: string
  title: string
  description: string
  metaDescription: string
  mainServices: Array<{
    name: string
    slug: string
    description: string
  }>
  commonProblems: Array<{
    name: string
    slug: string
    description: string
  }>
}

export const cities: CityData[] = [
  {
    name: 'Luxembourg-Ville',
    slug: 'luxembourg-ville',
    title: 'Service de Débouchage à Luxembourg-Ville',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Luxembourg-Ville. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Luxembourg-Ville. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Bertrange',
    slug: 'bertrange',
    title: 'Service de Débouchage à Bertrange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Bertrange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Bertrange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Strassen',
    slug: 'strassen',
    title: 'Service de Débouchage à Strassen',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Strassen. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Strassen. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Hesperange',
    slug: 'hesperange',
    title: 'Service de Débouchage à Hesperange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Hesperange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Hesperange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Niederanven',
    slug: 'niederanven',
    title: 'Service de Débouchage à Niederanven',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Niederanven. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Niederanven. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Sandweiler',
    slug: 'sandweiler',
    title: 'Service de Débouchage à Sandweiler',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Sandweiler. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Sandweiler. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Walferdange',
    slug: 'walferdange',
    title: 'Service de Débouchage à Walferdange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Walferdange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Walferdange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Steinsel',
    slug: 'steinsel',
    title: 'Service de Débouchage à Steinsel',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Steinsel. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Steinsel. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Lorentzweiler',
    slug: 'lorentzweiler',
    title: 'Service de Débouchage à Lorentzweiler',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Lorentzweiler. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Lorentzweiler. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Senningerberg',
    slug: 'senningerberg',
    title: 'Service de Débouchage à Senningerberg',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Senningerberg. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Senningerberg. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Findel',
    slug: 'findel',
    title: 'Service de Débouchage à Findel',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Findel. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Findel. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Esch-sur-Alzette',
    slug: 'esch-sur-alzette',
    title: 'Service de Débouchage à Esch-sur-Alzette',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Esch-sur-Alzette. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Esch-sur-Alzette. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Differdange',
    slug: 'differdange',
    title: 'Service de Débouchage à Differdange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Differdange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Differdange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Dudelange',
    slug: 'dudelange',
    title: 'Service de Débouchage à Dudelange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Dudelange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Dudelange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Sanem',
    slug: 'sanem',
    title: 'Service de Débouchage à Sanem',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Sanem. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Sanem. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Mondercange',
    slug: 'mondercange',
    title: 'Service de Débouchage à Mondercange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Mondercange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Mondercange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Käerjeng',
    slug: 'kaerjeng',
    title: 'Service de Débouchage à Käerjeng',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Käerjeng. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Käerjeng. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Schifflange',
    slug: 'schifflange',
    title: 'Service de Débouchage à Schifflange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Schifflange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Schifflange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Rumelange',
    slug: 'rumelange',
    title: 'Service de Débouchage à Rumelange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Rumelange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Rumelange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Kayl',
    slug: 'kayl',
    title: 'Service de Débouchage à Kayl',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Kayl. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Kayl. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Bettembourg',
    slug: 'bettembourg',
    title: 'Service de Débouchage à Bettembourg',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Bettembourg. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Bettembourg. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Mondorf-les-Bains',
    slug: 'mondorf-les-bains',
    title: 'Service de Débouchage à Mondorf-les-Bains',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Mondorf-les-Bains. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Mondorf-les-Bains. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Diekirch',
    slug: 'diekirch',
    title: 'Service de Débouchage à Diekirch',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Diekirch. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Diekirch. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Ettelbruck',
    slug: 'ettelbruck',
    title: 'Service de Débouchage à Ettelbruck',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Ettelbruck. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Ettelbruck. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Wiltz',
    slug: 'wiltz',
    title: 'Service de Débouchage à Wiltz',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Wiltz. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Wiltz. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Clervaux',
    slug: 'clervaux',
    title: 'Service de Débouchage à Clervaux',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Clervaux. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Clervaux. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Vianden',
    slug: 'vianden',
    title: 'Service de Débouchage à Vianden',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Vianden. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Vianden. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Mersch',
    slug: 'mersch',
    title: 'Service de Débouchage à Mersch',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Mersch. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Mersch. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Bissen',
    slug: 'bissen',
    title: 'Service de Débouchage à Bissen',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Bissen. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Bissen. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Colmar-Berg',
    slug: 'colmar-berg',
    title: 'Service de Débouchage à Colmar-Berg',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Colmar-Berg. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Colmar-Berg. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Hosingen',
    slug: 'hosingen',
    title: 'Service de Débouchage à Hosingen',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Hosingen. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Hosingen. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Bourscheid',
    slug: 'bourscheid',
    title: 'Service de Débouchage à Bourscheid',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Bourscheid. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Bourscheid. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Echternach',
    slug: 'echternach',
    title: 'Service de Débouchage à Echternach',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Echternach. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Echternach. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Rosport',
    slug: 'rosport',
    title: 'Service de Débouchage à Rosport',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Rosport. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Rosport. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Mompach',
    slug: 'mompach',
    title: 'Service de Débouchage à Mompach',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Mompach. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Mompach. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Berdorf',
    slug: 'berdorf',
    title: 'Service de Débouchage à Berdorf',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Berdorf. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Berdorf. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Beaufort',
    slug: 'beaufort',
    title: 'Service de Débouchage à Beaufort',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Beaufort. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Beaufort. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Larochette',
    slug: 'larochette',
    title: 'Service de Débouchage à Larochette',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Larochette. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Larochette. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Medernach',
    slug: 'medernach',
    title: 'Service de Débouchage à Medernach',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Medernach. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Medernach. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Waldbillig',
    slug: 'waldbillig',
    title: 'Service de Débouchage à Waldbillig',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Waldbillig. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Waldbillig. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Arlon',
    slug: 'arlon',
    title: 'Service de Débouchage à Arlon',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Arlon. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Arlon. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Pétange',
    slug: 'petange',
    title: 'Service de Débouchage à Pétange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Pétange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Pétange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Rodange',
    slug: 'rodange',
    title: 'Service de Débouchage à Rodange',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Rodange. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Rodange. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Bascharage',
    slug: 'bascharage',
    title: 'Service de Débouchage à Bascharage',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Bascharage. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Bascharage. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Clemency',
    slug: 'clemency',
    title: 'Service de Débouchage à Clemency',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Clemency. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Clemency. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Steinfort',
    slug: 'steinfort',
    title: 'Service de Débouchage à Steinfort',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Steinfort. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Steinfort. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Hobscheid',
    slug: 'hobscheid',
    title: 'Service de Débouchage à Hobscheid',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Hobscheid. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Hobscheid. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  },
  {
    name: 'Septfontaines',
    slug: 'septfontaines',
    title: 'Service de Débouchage à Septfontaines',
    description: 'Service professionnel de débouchage disponible 24h/24 et 7j/7 à Septfontaines. Intervention rapide et efficace pour tous vos problèmes de plomberie.',
    metaDescription: 'Service de débouchage professionnel à Septfontaines. Intervention d\'urgence 24/7, devis gratuit. Solutions rapides pour vos problèmes de canalisation.',
    mainServices: serviceCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    })),
    commonProblems: problemCategories.slice(0, 3).map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    }))
  }
]

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find(city => city.slug === slug)
}
