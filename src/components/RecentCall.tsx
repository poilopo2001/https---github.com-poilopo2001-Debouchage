'use client'

import { useState, useEffect } from 'react'

const CITIES = [
  { name: 'Luxembourg-Ville', time: 15 },
  { name: 'Esch-sur-Alzette', time: 20 },
  { name: 'Differdange', time: 25 },
  { name: 'Dudelange', time: 20 },
  { name: 'Bertrange', time: 15 },
  { name: 'Strassen', time: 15 },
  { name: 'Mamer', time: 20 }
]

export default function RecentCall() {
  const [currentCity, setCurrentCity] = useState(CITIES[0])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Change city every 45 seconds
    const cityInterval = setInterval(() => {
      setCurrentCity(prev => {
        const currentIndex = CITIES.findIndex(city => city.name === prev.name)
        const nextIndex = (currentIndex + 1) % CITIES.length
        return CITIES[nextIndex]
      })
    }, 45000)

    // Handle scroll events
    const handleScroll = () => {
      // Show after scrolling 100px
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(cityInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-8 z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
      <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm border-l-4 border-green-500">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="space-y-1">
              <h3 className="font-bold text-gray-900">
                Équipe disponible à {currentCity.name}
              </h3>
              <p className="text-sm text-green-600 font-medium">
                Intervention possible dans {currentCity.time} min
              </p>
              <a 
                href="tel:+352661297770"
                className="inline-block text-sm text-blue-600 hover:text-blue-800 font-semibold"
              >
                Appelez maintenant →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
