export default function Hero() {
  return (
    <section id="accueil" className="relative pt-32 pb-24 bg-gradient-to-br from-blue-600 to-blue-400">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Débouchage Express
            <span className="block text-blue-100">Intervention en 2H</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Service professionnel de débouchage disponible 24h/24 et 7j/7
            <span className="block mt-2">Intervention garantie en moins de 2 heures sur toute le Luxembourg</span>
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
            <div className="bg-blue-500/30 rounded-lg p-4">
              <div className="text-3xl mb-2">🕒</div>
              <div className="text-sm font-medium">24/7 Disponible</div>
            </div>
            <div className="bg-blue-500/30 rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-medium">Intervention 2H</div>
            </div>
            <div className="bg-blue-500/30 rounded-lg p-4">
              <div className="text-3xl mb-2">💯</div>
              <div className="text-sm font-medium">Devis Gratuit</div>
            </div>
            <div className="bg-blue-500/30 rounded-lg p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-sm font-medium">Service Garanti</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+352661297770"
              className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span className="text-2xl">📞</span> Appel Urgent
            </a>
            <a
              href="/devis"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Devis Gratuit
            </a>
            <a
              href="/services"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Nos Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Emergency Banner */}
      {/* Removed the emergency banner as per request */}
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-50"></div>
    </section>
  )
}
