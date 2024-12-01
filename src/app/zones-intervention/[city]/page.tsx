import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCityBySlug } from '@/data/cities-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}

  return {
    title: city.title,
    description: city.metaDescription,
  }
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {city.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {city.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:+352661297770"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <span className="text-2xl">📞</span> Appel Urgent
                </a>
                <a
                  href="#devis"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Devis Gratuit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Main Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Services à {city.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {city.mainServices.map((service) => (
                <div key={service.slug} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    En savoir plus →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Common Problems Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Problèmes Courants à {city.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {city.commonProblems.map((problem) => (
                <div key={problem.slug} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{problem.name}</h3>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  <Link
                    href={`/problemes/${problem.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    En savoir plus →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi Nous Choisir à {city.name} ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Intervention Rapide</h3>
                <p className="text-gray-600">
                  Service d'urgence disponible 24/7. Intervention en moins de 2 heures.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-2">Expertise Locale</h3>
                <p className="text-gray-600">
                  Connaissance approfondie des systèmes de plomberie à {city.name}.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Service Garanti</h3>
                <p className="text-gray-600">
                  Satisfaction client garantie. Devis gratuit et transparent.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
