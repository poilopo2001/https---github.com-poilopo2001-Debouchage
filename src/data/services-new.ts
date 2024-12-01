export interface ServiceCategory {
  id: string
  name: string
  description: string
  slug: string
  services: Service[]
}

export interface Service {
  id: string
  name: string
  slug: string
  shortDescription: string
  fullDescription?: string
  icon?: string
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'services-urgents',
    name: 'SERVICES URGENTS',
    slug: 'urgents',
    description: 'Intervention rapide 24/7 pour tous vos problèmes de plomberie urgents',
    services: []
  },
  {
    id: 'diagnostic-inspection',
    name: 'DIAGNOSTIC ET INSPECTION',
    slug: 'diagnostic-inspection',
    description: 'Services professionnels de diagnostic et d\'inspection de vos canalisations',
    services: []
  },
  {
    id: 'maintenance-preventive',
    name: 'MAINTENANCE PRÉVENTIVE',
    slug: 'maintenance-preventive',
    description: 'Programmes de maintenance préventive pour éviter les problèmes futurs',
    services: []
  },
  {
    id: 'reparations',
    name: 'RÉPARATIONS',
    slug: 'reparations',
    description: 'Services de réparation professionnels pour tous types de problèmes de plomberie',
    services: []
  },
  {
    id: 'services-specifiques',
    name: 'SERVICES SPÉCIFIQUES',
    slug: 'specifiques',
    description: 'Services spécialisés adaptés à vos besoins particuliers',
    services: []
  }
]

export function getAllServices(): Service[] {
  return serviceCategories.flatMap(category => category.services)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getAllServices().find(service => service.slug === slug)
}

export function getServicesByCategory(categoryId: string): Service[] {
  const category = serviceCategories.find(cat => cat.id === categoryId)
  return category ? category.services : []
}

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(category => category.slug === slug)
}
