'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PriceRange {
  min: number;
  max: number;
}

const PriceCalculator = () => {
  const [calculatedPrice, setCalculatedPrice] = useState<PriceRange | null>(null);
  const [formData, setFormData] = useState({
    service: '',
    urgence: false,
    complexite: 'simple',
    weekend: false,
    horaire: 'journee',
  });

  const basePrice = {
    'debouchage-wc': { min: 80, max: 120 },
    'debouchage-evier': { min: 70, max: 100 },
    'debouchage-douche': { min: 75, max: 110 },
    'debouchage-canalisation': { min: 90, max: 150 },
    'inspection-camera': { min: 120, max: 180 },
  };

  const serviceIcons = {
    'debouchage-wc': '🚽',
    'debouchage-evier': '🚰',
    'debouchage-douche': '🚿',
    'debouchage-canalisation': '🔧',
    'inspection-camera': '📹',
  };

  const calculatePrice = () => {
    if (!formData.service) return null;

    let price = { ...basePrice[formData.service as keyof typeof basePrice] };

    // Facteur d'urgence (+50%)
    if (formData.urgence) {
      price = {
        min: price.min * 1.5,
        max: price.max * 1.5,
      };
    }

    // Facteur de complexité
    const complexityFactor = {
      simple: 1,
      moyen: 1.3,
      complexe: 1.6,
    };
    price = {
      min: price.min * complexityFactor[formData.complexite as keyof typeof complexityFactor],
      max: price.max * complexityFactor[formData.complexite as keyof typeof complexityFactor],
    };

    // Majoration weekend (+30%)
    if (formData.weekend) {
      price = {
        min: price.min * 1.3,
        max: price.max * 1.3,
      };
    }

    // Majoration horaire
    const timeFactor = {
      journee: 1,
      soiree: 1.2,
      nuit: 1.5,
    };
    price = {
      min: price.min * timeFactor[formData.horaire as keyof typeof timeFactor],
      max: price.max * timeFactor[formData.horaire as keyof typeof timeFactor],
    };

    // Arrondir les prix
    return {
      min: Math.round(price.min / 5) * 5,
      max: Math.round(price.max / 5) * 5,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  useEffect(() => {
    setCalculatedPrice(calculatePrice());
  }, [formData]);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-12 relative">
      <div className="space-y-8 mb-32">
        {/* Type de service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Type d&apos;intervention
          </label>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(basePrice).map(([key, _]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, service: key }))}
                className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                  formData.service === key
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <span className="text-2xl mr-3">{serviceIcons[key as keyof typeof serviceIcons]}</span>
                <div>
                  <div className="font-medium text-left">
                    {key === 'debouchage-wc' && 'Débouchage WC'}
                    {key === 'debouchage-evier' && 'Débouchage Évier'}
                    {key === 'debouchage-douche' && 'Débouchage Douche'}
                    {key === 'debouchage-canalisation' && 'Débouchage Canalisation'}
                    {key === 'inspection-camera' && 'Inspection Caméra'}
                  </div>
                  <div className="text-sm opacity-75">
                    À partir de {basePrice[key as keyof typeof basePrice].min}€
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Niveau de complexité */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Niveau de complexité
          </label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, complexite: 'simple' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.complexite === 'simple'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">⭕</span>
              <div className="text-center">
                <div className="font-medium">Simple</div>
                <div className="text-sm opacity-75">Obstruction légère</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, complexite: 'moyen' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.complexite === 'moyen'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">⭕</span>
              <div className="text-center">
                <div className="font-medium">Moyen</div>
                <div className="text-sm opacity-75">Obstruction importante</div>
                <div className="text-xs opacity-75">(+30%)</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, complexite: 'complexe' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.complexite === 'complexe'
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">⭕</span>
              <div className="text-center">
                <div className="font-medium">Complexe</div>
                <div className="text-sm opacity-75">Obstruction sévère</div>
                <div className="text-xs opacity-75">(+60%)</div>
              </div>
            </button>
          </div>
        </div>

        {/* Options supplémentaires */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Options supplémentaires
          </label>
          
          <div className="grid grid-cols-1 gap-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, urgence: !prev.urgence }))}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.urgence 
                ? 'border-red-500 bg-red-50 text-red-700' 
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚨</span>
                <div>
                  <div className="font-medium">Intervention d&apos;urgence</div>
                  <div className="text-sm opacity-75">Majoration de 50%</div>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                formData.urgence 
                ? 'border-red-500 bg-red-500' 
                : 'border-gray-300'
              }`}>
                {formData.urgence && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, weekend: !prev.weekend }))}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.weekend 
                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">📅</span>
                <div>
                  <div className="font-medium">Weekend / Jour férié</div>
                  <div className="text-sm opacity-75">Majoration de 30%</div>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                formData.weekend 
                ? 'border-blue-500 bg-blue-500' 
                : 'border-gray-300'
              }`}>
                {formData.weekend && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Horaires d'intervention */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Horaire d&apos;intervention
          </label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, horaire: 'journee' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.horaire === 'journee'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">🌞</span>
              <div className="text-center">
                <div className="font-medium">Journée</div>
                <div className="text-sm opacity-75">8h-18h</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, horaire: 'soiree' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.horaire === 'soiree'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">🌅</span>
              <div className="text-center">
                <div className="font-medium">Soirée</div>
                <div className="text-sm opacity-75">18h-22h</div>
                <div className="text-xs opacity-75">(+20%)</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, horaire: 'nuit' }))}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.horaire === 'nuit'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="text-2xl mb-2">🌙</span>
              <div className="text-center">
                <div className="font-medium">Nuit</div>
                <div className="text-sm opacity-75">22h-8h</div>
                <div className="text-xs opacity-75">(+50%)</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Prix estimé - Toujours visible en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Prix */}
            <div className="text-center md:text-left">
              <div className="text-lg font-medium text-gray-700">Prix estimé</div>
              <div className="text-3xl font-bold text-blue-600">
                {calculatedPrice ? `${calculatedPrice.min}€ - ${calculatedPrice.max}€` : '80€ - 180€'}
              </div>
              <div className="text-xs text-gray-500">
                Prix indicatif, peut varier selon la situation
              </div>
            </div>

            {/* Bouton d'appel */}
            <a
              href="tel:+352661297770"
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg gap-2 whitespace-nowrap"
            >
              <span className="text-xl">📞</span>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <span>Le prix vous convient ?</span>
                <span className="bg-green-500 px-2 py-1 rounded-md text-sm whitespace-nowrap">
                  Intervention dans 15 Min
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
