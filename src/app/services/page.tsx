import Link from 'next/link'
import { serviceCategories, ServiceCategory } from '@/data/services'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tous nos Services de Débouchage',
  description: 'Découvrez l\'ensemble de nos services de débouchage pour tous types de lieux et d\'établissements'
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Nos Services de Débouchage
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Solutions professionnelles pour tous vos besoins de débouchage
        </p>

        <div className="space-y-16">
          {serviceCategories.map((category: ServiceCategory) => (
            <div key={category.id} className="bg-white shadow-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.services.map((service) => (
                  <Link 
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon || '🔧'}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
