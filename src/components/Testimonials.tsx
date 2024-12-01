const testimonials = [
  {
    name: 'Marie L.',
    location: 'Luxembourg City',
    text: 'Intervention ultra rapide pour ma douche bouchée. Équipe professionnelle et efficace. Je recommande !',
    rating: 5,
  },
  {
    name: 'Pierre D.',
    location: 'Esch-sur-Alzette',
    text: 'Service impeccable, sont intervenus en urgence un dimanche soir. Travail propre et soigné.',
    rating: 5,
  },
  {
    name: 'Restaurant Le Bistrot',
    location: 'Differdange',
    text: 'Partenaire fiable pour notre restaurant. Maintenance régulière et interventions rapides quand nécessaire.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les avis de nos clients satisfaits partout au Luxembourg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="text-gray-900 font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-blue-900">4.9/5</div>
              <div className="text-blue-700">Note Moyenne</div>
            </div>
            <div>
              <div className="text-4xl mb-2">👥</div>
              <div className="text-2xl font-bold text-blue-900">2000+</div>
              <div className="text-blue-700">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔧</div>
              <div className="text-2xl font-bold text-blue-900">15+</div>
              <div className="text-blue-700">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl mb-2">📍</div>
              <div className="text-2xl font-bold text-blue-900">100%</div>
              <div className="text-blue-700">Luxembourg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
