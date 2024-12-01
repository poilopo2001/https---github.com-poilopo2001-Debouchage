'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
          Contactez-nous
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Téléphone</p>
                  <a href="tel:+352661297770" className="font-semibold hover:text-blue-100">+352 661 297 770</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Email</p>
                  <p className="font-semibold">contact@debouchage-pro.fr</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Adresse</p>
                  <p className="font-semibold">123 Rue Example, Ville</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Disponibilité</p>
                  <p className="font-semibold">24/7 - Intervention rapide</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-slate-50 rounded-2xl shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
