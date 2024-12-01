'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { problemCategories, type ProblemCategory } from '@/data/problems'
import { interventionCategories, type InterventionCategory } from '@/data/interventions'
import { serviceCategories } from '@/data/services-new'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProblemMenuOpen, setIsProblemMenuOpen] = useState(false)
  const [isInterventionMenuOpen, setIsInterventionMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  
  const problemMenuTimeout = useRef<NodeJS.Timeout>()
  const interventionMenuTimeout = useRef<NodeJS.Timeout>()

  const handleProblemMenuEnter = () => {
    if (problemMenuTimeout.current) {
      clearTimeout(problemMenuTimeout.current)
    }
    setIsProblemMenuOpen(true)
  }

  const handleProblemMenuLeave = () => {
    problemMenuTimeout.current = setTimeout(() => {
      setIsProblemMenuOpen(false)
    }, 100)
  }

  const handleInterventionMenuEnter = () => {
    if (interventionMenuTimeout.current) {
      clearTimeout(interventionMenuTimeout.current)
    }
    setIsInterventionMenuOpen(true)
  }

  const handleInterventionMenuLeave = () => {
    interventionMenuTimeout.current = setTimeout(() => {
      setIsInterventionMenuOpen(false)
    }, 100)
  }

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        // Only trigger hide/show after scrolling more than 10px to prevent tiny movements
        if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
          return
        }

        // Show header when scrolling up or at the top
        if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
          setIsVisible(true)
        } 
        // Hide header when scrolling down and not at the top
        else if (currentScrollY > 50) {
          setIsVisible(false)
          // Close mobile menu when hiding header
          setIsMenuOpen(false)
        }

        lastScrollY.current = currentScrollY
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', controlNavbar)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
      window.removeEventListener('scroll', handleScroll)
      if (problemMenuTimeout.current) clearTimeout(problemMenuTimeout.current)
      if (interventionMenuTimeout.current) clearTimeout(interventionMenuTimeout.current)
    }
  }, [])

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'shadow-md' : ''}`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Debouchage Luxembourg
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="nav-link">
                Accueil
              </Link>
              <div 
                className="relative group"
                onMouseEnter={handleProblemMenuEnter}
                onMouseLeave={handleProblemMenuLeave}
              >
                <Link 
                  href="/problemes"
                  className="nav-link flex items-center"
                >
                  Problèmes
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {isProblemMenuOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 mt-1 pt-2 w-[768px]"
                    onMouseEnter={handleProblemMenuEnter}
                    onMouseLeave={handleProblemMenuLeave}
                  >
                    <div className="bg-white rounded-xl shadow-xl py-6 border border-gray-100">
                      <div className="grid grid-cols-2 gap-6 px-6">
                        {/* Common Problems */}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-3">PROBLÈMES COURANTS</h3>
                          <div className="grid grid-cols-1 gap-1">
                            {problemCategories.slice(0, 6).map((category: ProblemCategory) => (
                              <Link
                                key={category.id}
                                href={`/problemes/${category.slug}`}
                                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg group"
                              >
                                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                                  🔧
                                </span>
                                <span className="font-medium">{category.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Emergency Services */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-2">⚡</span>
                            <h3 className="text-lg font-bold text-blue-900">Service Express</h3>
                          </div>
                          <p className="text-blue-700 text-sm mb-4">
                            Intervention rapide dans tout le Luxembourg
                          </p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-blue-700 text-sm">
                              <span className="text-lg mr-2">🕒</span>
                              <span>Disponible 24/7</span>
                            </div>
                            <div className="flex items-center text-blue-700 text-sm">
                              <span className="text-lg mr-2">💯</span>
                              <span>Devis gratuit</span>
                            </div>
                          </div>
                          <a 
                            href="tel:+352661297770"
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            <span className="mr-2">📞</span>
                            <span>Appeler maintenant</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className="relative group"
                onMouseEnter={handleInterventionMenuEnter}
                onMouseLeave={handleInterventionMenuLeave}
              >
                <Link 
                  href="/interventions"
                  className="nav-link flex items-center"
                >
                  Interventions
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {isInterventionMenuOpen && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 mt-1 pt-2 w-[768px]"
                    onMouseEnter={handleInterventionMenuEnter}
                    onMouseLeave={handleInterventionMenuLeave}
                  >
                    <div className="bg-white rounded-xl shadow-xl py-6 border border-gray-100">
                      <div className="grid grid-cols-2 gap-6 px-6">
                        {/* Main Services */}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-3">NOS SERVICES</h3>
                          <div className="grid grid-cols-1 gap-1">
                            {interventionCategories.slice(0, 6).map((category: InterventionCategory) => (
                              <Link
                                key={category.id}
                                href={`/interventions/${category.slug}`}
                                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg group"
                              >
                                <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                                  🔧
                                </span>
                                <span className="font-medium">{category.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Coverage Area */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-2">📍</span>
                            <h3 className="text-lg font-bold text-green-900">Zones d'intervention</h3>
                          </div>
                          <p className="text-green-700 text-sm mb-4">
                            Service rapide partout au Luxembourg
                          </p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-green-700 text-sm">
                              <span className="text-lg mr-2">🏢</span>
                              <span>Luxembourg-Ville</span>
                            </div>
                            <div className="flex items-center text-green-700 text-sm">
                              <span className="text-lg mr-2">🏘️</span>
                              <span>Esch-sur-Alzette</span>
                            </div>
                          </div>
                          <Link 
                            href="/zones-intervention"
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                          >
                            <span className="mr-2">🗺️</span>
                            <span>Voir toutes les zones</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/devis"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Devis Gratuit
              </Link>
              <a
                href="tel:+352661297770"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">📞</span>
                +352 661 297 770
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <a 
                href="tel:+352661297770" 
                className="flex items-center px-3 py-2 bg-green-500 text-white rounded-lg"
              >
                <span className="text-xl">📞</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4">
              <div className="flex flex-col space-y-3">
                {/* Mobile Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Debouchage Luxembourg
                  </span>
                </Link>
                <Link href="/" className="mobile-nav-link">
                  Accueil
                </Link>
                <div className="py-1">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsProblemMenuOpen(!isProblemMenuOpen)}
                  >
                    <span>Problèmes</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isProblemMenuOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isProblemMenuOpen && (
                    <div className="mt-2 space-y-1">
                      {problemCategories.map((category: ProblemCategory) => (
                        <Link
                          key={category.id}
                          href={`/problemes/${category.slug}`}
                          className="flex items-center px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg mr-3">
                            🔧
                          </span>
                          <span className="font-medium">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="py-1">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsInterventionMenuOpen(!isInterventionMenuOpen)}
                  >
                    <span>Interventions</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isInterventionMenuOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isInterventionMenuOpen && (
                    <div className="mt-2 space-y-1">
                      {interventionCategories.map((category: InterventionCategory) => (
                        <Link
                          key={category.id}
                          href={`/interventions/${category.slug}`}
                          className="flex items-center px-8 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg mr-3">
                            🔧
                          </span>
                          <span className="font-medium">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/devis"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis Gratuit
                </Link>
                <a
                  href="tel:+352661297770"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">📞</span>
                  <span>661 29 77 70</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
