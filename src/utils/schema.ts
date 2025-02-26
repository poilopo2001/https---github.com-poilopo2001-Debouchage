import { serviceCategories } from '@/data/services';

const regions = [
  'Luxembourg-Ville et environs',
  'Sud du Luxembourg',
  'Nord du Luxembourg',
  'Est du Luxembourg',
  'Ouest du Luxembourg'
];

// Base business information
const businessInfo = {
  name: "Debouchage Luxembourg",
  url: "https://debouchage-luxembourg.com",
  logo: "/images/logo.png",
  telephone: "+352 661 297 770",
  email: "contact@debouchage-luxembourg.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10A Rue du Puits",
    addressLocality: "Bonnevoie-Sud",
    postalCode: "2355",
    addressRegion: "Luxembourg",
    addressCountry: "LU"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.5997",
    longitude: "6.1333"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  description: "Service professionnel de débouchage disponible 24/7 pour tous vos besoins d'urgence. Intervention rapide et efficace garantie dans tout le Luxembourg.",
  areaServed: regions,
  priceRange: "€€",
  paymentAccepted: ["Credit Card", "Cash", "Bank Transfer"],
  currenciesAccepted: "EUR",
  sameAs: []
};

// Main organization schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  ...businessInfo,
});

// Service schema for individual services
export const getServiceSchema = (service: any) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "PlumbingService",
    name: businessInfo.name,
    address: businessInfo.address
  },
  name: service.title,
  description: service.description,
  areaServed: regions,
  serviceType: "Plumbing",
  offers: {
    "@type": "Offer",
    price: service.price?.startingFrom || "50.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock"
  }
});

// Local business schema with reviews
export const getLocalBusinessSchema = (reviews: any[] = []) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...businessInfo,
  aggregateRating: reviews.length > 0 ? {
    "@type": "AggregateRating",
    ratingValue: reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
    reviewCount: reviews.length
  } : undefined,
  review: reviews.map(review => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating
    },
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewBody: review.text
  }))
});

// FAQ Schema for problems page
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// Professional service schema for interventions
export const getProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  ...businessInfo,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Débouchage",
    itemListElement: serviceCategories.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description
      },
      position: index + 1
    }))
  }
});

// Area service schema for zones-intervention
export const getAreaServiceSchema = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "PlumbingService",
    name: businessInfo.name,
    address: businessInfo.address
  },
  name: `Service de Débouchage à ${city}`,
  description: `Service professionnel de débouchage de canalisations à ${city}. Intervention rapide 24h/24, 7j/7.`,
  areaServed: {
    "@type": "City",
    name: city,
    "@id": `https://www.geonames.org/cities/${city.toLowerCase()}`
  }
});
