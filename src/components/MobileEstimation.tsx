import { useState } from 'react';

interface EstimationOption {
  id: string;
  icon: string;
  title: string;
  price?: string;
  surcharge?: string;
}

export default function MobileEstimation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    intervention: null as EstimationOption | null,
    additional: null as EstimationOption | null,
    complexity: null as EstimationOption | null,
    schedule: null as EstimationOption | null,
  });

  const interventionTypes: EstimationOption[] = [
    { id: 'wc', icon: '🚽', title: 'Débouchage WC', price: '80€' },
    { id: 'sink', icon: '🚰', title: 'Débouchage Évier', price: '70€' },
    { id: 'shower', icon: '🚿', title: 'Débouchage Douche', price: '75€' },
    { id: 'pipe', icon: '🔧', title: 'Débouchage Canalisation', price: '90€' },
  ];

  const additionalOptions: EstimationOption[] = [
    { id: 'emergency', icon: '🚨', title: 'Intervention d\'urgence', surcharge: '+50%' },
    { id: 'weekend', icon: '📅', title: 'Weekend / Jour férié', surcharge: '+30%' },
  ];

  const complexityLevels: EstimationOption[] = [
    { id: 'simple', icon: '⭕', title: 'Simple', surcharge: '+0%' },
    { id: 'medium', icon: '⭕', title: 'Moyen', surcharge: '+30%' },
    { id: 'complex', icon: '⭕', title: 'Complexe', surcharge: '+60%' },
  ];

  const scheduleOptions: EstimationOption[] = [
    { id: 'day', icon: '🌞', title: 'Journée (8h-18h)', surcharge: '+0%' },
    { id: 'evening', icon: '🌅', title: 'Soirée (18h-22h)', surcharge: '+20%' },
    { id: 'night', icon: '🌙', title: 'Nuit (22h-8h)', surcharge: '+50%' },
  ];

  const calculateEstimate = () => {
    if (!selectedOptions.intervention) return 0;
    
    let basePrice = parseInt(selectedOptions.intervention.price?.replace('€', '') || '0');
    
    // Add additional option
    if (selectedOptions.additional) {
      const percentage = parseInt(selectedOptions.additional.surcharge?.replace('+', '').replace('%', '') || '0');
      basePrice += (basePrice * percentage / 100);
    }

    // Add complexity
    if (selectedOptions.complexity) {
      const complexityPercentage = parseInt(selectedOptions.complexity.surcharge?.replace('+', '').replace('%', '') || '0');
      basePrice += (basePrice * complexityPercentage / 100);
    }

    // Add schedule surcharge
    if (selectedOptions.schedule) {
      const schedulePercentage = parseInt(selectedOptions.schedule.surcharge?.replace('+', '').replace('%', '') || '0');
      basePrice += (basePrice * schedulePercentage / 100);
    }

    return Math.round(basePrice);
  };

  const handleOptionSelect = (type: keyof typeof selectedOptions, option: EstimationOption) => {
    setSelectedOptions(prev => ({
      ...prev,
      [type]: option
    }));

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedOptions({
      intervention: null,
      additional: null,
      complexity: null,
      schedule: null,
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Type d'intervention</h3>
            <div className="grid grid-cols-2 gap-4">
              {interventionTypes.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect('intervention', option)}
                  className={`p-4 rounded-lg border ${
                    selectedOptions.intervention?.id === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  } flex flex-col items-center space-y-2`}
                >
                  <span className="text-3xl">{option.icon}</span>
                  <span className="text-sm font-medium text-center">{option.title}</span>
                  <span className="text-sm text-gray-500">À partir de {option.price}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Options supplémentaires</h3>
            <div className="grid grid-cols-2 gap-4">
              {additionalOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect('additional', option)}
                  className={`p-4 rounded-lg border ${
                    selectedOptions.additional?.id === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  } flex flex-col items-center space-y-2`}
                >
                  <span className="text-3xl">{option.icon}</span>
                  <span className="text-sm font-medium text-center">{option.title}</span>
                  <span className="text-sm text-gray-500">{option.surcharge}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="w-full mt-4 py-3 text-center text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Aucune option supplémentaire →
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Niveau de complexité</h3>
            <div className="grid grid-cols-1 gap-3">
              {complexityLevels.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect('complexity', option)}
                  className={`p-3 rounded-lg border ${
                    selectedOptions.complexity?.id === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  } flex items-center space-x-4`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <div className="flex-1">
                    <span className="block font-medium">{option.title}</span>
                    <span className="text-sm text-gray-500">{option.surcharge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Horaire d'intervention</h3>
            <div className="grid grid-cols-1 gap-3">
              {scheduleOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect('schedule', option)}
                  className={`p-3 rounded-lg border ${
                    selectedOptions.schedule?.id === option.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  } flex items-center space-x-4`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <div className="flex-1">
                    <span className="block font-medium">{option.title}</span>
                    <span className="text-sm text-gray-500">{option.surcharge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-4rem)]">
      {/* Progress bar */}
      <div className="flex-shrink-0 px-4 py-2 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1 flex justify-between">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  step === currentStep
                    ? 'bg-blue-600 text-white'
                    : step < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          {currentStep > 1 && (
            <button
              onClick={handleReset}
              className="ml-4 px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Recommencer
            </button>
          )}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 min-h-0">
        {renderStepContent()}
      </div>

      {/* Bottom section with estimate and call button */}
      <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200 bg-white">
        <div className="mb-4 text-center">
          <span className="text-lg font-semibold">Estimation: </span>
          <span className="text-2xl font-bold text-blue-600">{calculateEstimate()}€</span>
        </div>
        <a
          href="tel:+352661297770"
          className="block w-full py-4 text-center text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <span className="mr-2">📞</span>
          Appeler maintenant
        </a>
      </div>
    </div>
  );
}
