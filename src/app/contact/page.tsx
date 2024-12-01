'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'urgence', // Added service field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '', service: 'urgence' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-2">🕒</div>
              <div className="text-sm font-medium text-gray-800">Disponible 24/7</div>
              <div className="text-xs text-gray-600">Intervention jour et nuit</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-medium text-gray-800">Intervention 2H</div>
              <div className="text-xs text-gray-600">Sur tout le Luxembourg</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-2">💯</div>
              <div className="text-sm font-medium text-gray-800">Devis Gratuit</div>
              <div className="text-xs text-gray-600">Sans engagement</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-sm font-medium text-gray-800">Service Garanti</div>
              <div className="text-xs text-gray-600">Satisfaction assurée</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Besoin d&apos;une intervention urgente ? Notre équipe est disponible 24/7 pour vous aider.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Contact Direct
                  </h2>
                  <div className="space-y-4">
                    <a href="tel:+352661297770" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-medium">Appelez-nous</div>
                        <div className="text-sm">+352 661 29 77 70</div>
                      </div>
                    </a>
                    <a href="mailto:contact@debouchage.lu" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm">contact@debouchage.lu</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Horaires d&apos;intervention
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span className="font-medium">24h/24</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Samedi - Dimanche:</span>
                      <span className="font-medium">24h/24</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Jours fériés:</span>
                      <span className="font-medium">24h/24</span>
                    </p>
                    <div className="mt-4 pt-4 border-t border-blue-100">
                      <p className="text-sm font-medium text-blue-600">Service d&apos;urgence disponible 24/7</p>
                      <p className="text-sm">Intervention en moins de 2 heures garantie</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Demande d&apos;intervention
                </h3>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Type d&apos;intervention
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="urgence">Intervention d&apos;urgence</option>
                    <option value="devis">Demande de devis</option>
                    <option value="conseil">Conseil technique</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre problème ou votre demande..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
