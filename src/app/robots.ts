import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // Protect API routes
        '/admin/',    // Protect admin routes if any
        '/*.json$',   // Protect JSON files
      ],
    },
    sitemap: 'https://debouchage-luxembourg.com/sitemap.xml',
    host: 'https://debouchage-luxembourg.com',
  }
}
