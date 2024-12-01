import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface MainLayoutProps {
  children: React.ReactNode
  hero?: {
    title: string
    description?: string
    image?: string
    className?: string
  }
}

export default function MainLayout({ children, hero }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {hero && (
        <div className={`relative bg-gradient-to-b from-blue-50 to-white ${hero.className || ''}`}>
          {hero.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
              style={{ backgroundImage: `url(${hero.image})` }}
            />
          )}
          <div className="relative container mx-auto px-4 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {hero.title}
              </h1>
              {hero.description && (
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {hero.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
