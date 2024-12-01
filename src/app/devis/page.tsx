'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';

export default function Devis() {
  const [formData, setFormData] = useState({
    service: '',
    urgence: 'non',
    type_batiment: 'maison',
    localisation: '',
    description: '',
    nom: '',
    email: '',
    telephone: '',
    disponibilite: 'flexible',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      service: '',
      urgence: 'non',
      type_batiment: 'maison',
      localisation: '',
      description: '',
      nom: '',
      email: '',
      telephone: '',
      disponibilite: 'flexible',
    });
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
      <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Demande de Devis Gratuit
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Calculez votre prix en ligne ou demandez un devis personnalisé
            </p>

            {/* Calculateur de prix */}
            <div className="mb-12">
              <PriceCalculator />
            </div>

            {/* Séparateur */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OU</span>
              </div>
            </div>

            {/* Section formulaire */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                Demandez un Devis Personnalisé
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous pour recevoir un devis détaillé adapté à vos besoins spécifiques
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type de service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Type d&apos;intervention*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="debouchage-wc">Débouchage WC</option>
                    <option value="debouchage-evier">Débouchage Évier</option>
                    <option value="debouchage-douche">Débouchage Douche/Baignoire</option>
                    <option value="debouchage-canalisation">Débouchage Canalisation</option>
                    <option value="inspection-camera">Inspection Caméra</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Urgence */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Est-ce urgent ?*
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
                      <input
                        type="radio"
                        name="urgence"
                        value="oui"
                        checked={formData.urgence === 'oui'}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Oui, urgent</span>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
                      <input
                        type="radio"
                        name="urgence"
                        value="non"
                        checked={formData.urgence === 'non'}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Non, pas urgent</span>
                    </label>
                  </div>
                </div>

                {/* Type de bâtiment */}
                <div>
                  <label htmlFor="type_batiment" className="block text-sm font-medium text-gray-700 mb-1">
                    Type de bâtiment*
                  </label>
                  <select
                    id="type_batiment"
                    name="type_batiment"
                    value={formData.type_batiment}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                    <option value="commerce">Commerce</option>
                    <option value="bureau">Bureau</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Localisation */}
                <div>
                  <label htmlFor="localisation" className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation*
                  </label>
                  <input
                    type="text"
                    id="localisation"
                    name="localisation"
                    value={formData.localisation}
                    onChange={handleChange}
                    required
                    placeholder="Ville ou code postal"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description du problème*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Décrivez votre problème en détail..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Coordonnées */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone*
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Disponibilité */}
                <div>
                  <label htmlFor="disponibilite" className="block text-sm font-medium text-gray-700 mb-1">
                    Disponibilité préférée
                  </label>
                  <select
                    id="disponibilite"
                    name="disponibilite"
                    value={formData.disponibilite}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="flexible">Flexible</option>
                    <option value="matin">Matin (8h-12h)</option>
                    <option value="apres-midi">Après-midi (12h-17h)</option>
                    <option value="soir">Soir (17h-20h)</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">
                    * Champs obligatoires
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Demander un devis gratuit
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>
                  En soumettant ce formulaire, vous acceptez d&apos;être contacté concernant votre demande de devis.
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
