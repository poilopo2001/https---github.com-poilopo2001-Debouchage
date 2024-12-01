import { MetadataRoute } from 'next'
import { problemCategories } from '@/data/problems'
import { interventionCategories } from '@/data/interventions'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://debouchage-luxembourg.com' // Updated domain name

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/problemes`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/interventions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zones-intervention`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Add problem category pages
  const problemRoutes = problemCategories.map((category) => ({
    url: `${baseUrl}/problemes/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Add problem detail pages
  const problemDetailRoutes = problemCategories.flatMap((category) =>
    category.problems.map((problem) => ({
      url: `${baseUrl}/problemes/${category.slug}/${problem.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Add intervention category pages
  const interventionRoutes = interventionCategories.map((category) => ({
    url: `${baseUrl}/interventions/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...problemRoutes, ...problemDetailRoutes, ...interventionRoutes]
}
