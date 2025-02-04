import { useState, useContext } from 'react'
import LanguageSelector from './LanguageSelector'
import { Language, LanguageContext } from '../App'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: t.header.about },
    { path: '/projects', label: t.header.projects },
    { path: '/contact', label: t.header.contact },
  ]

  return (
    <>
      {/* Optimized Backdrop with native transition */}
      <div 
        className={`
          z-50
          fixed inset-0 bg-black transition-opacity duration-200 ease-out
          ${isMobileMenuOpen ? 'opacity-40 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo */}
            <Link 
              className="relative group" 
              to="/"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
                Matheus Dev
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 transition-colors duration-300 ${
                    location.pathname === link.path 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
              <div className="relative">
                <LanguageSelector 
                  currentLanguage={language}
                  onLanguageChange={(lang: Language) => setLanguage(lang)}
                />
              </div>
            </div>

            {/* Optimized Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-150 active:scale-95"
              aria-label="Menu de navegação"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                <span className={`
                  w-6 h-0.5 bg-gray-600 transform transition-all duration-200 ease-out origin-center
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `} />
                <span className={`
                  w-6 h-0.5 bg-gray-600 transition-all duration-200 ease-out
                  ${isMobileMenuOpen ? 'opacity-0' : ''}
                `} />
                <span className={`
                  w-6 h-0.5 bg-gray-600 transform transition-all duration-200 ease-out origin-center
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `} />
              </div>
            </button>

            {/* Optimized Mobile Menu */}
            <div 
              className={`
                sm:hidden fixed top-0 right-0 w-[50%] h-screen 
                bg-white shadow-2xl z-50
                transform transition-transform duration-200 ease-out
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              `}
            >
              <div className="px-4 py-6 space-y-4">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full active:scale-95 transition-transform duration-150"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ 
                        transitionDelay: `${index * 50}ms`,
                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                        opacity: isMobileMenuOpen ? 1 : 0
                      }}
                      className={`
                        block py-3 text-center text-base font-medium rounded-lg
                        transition-all duration-200 ease-out hover:scale-105
                        ${location.pathname === link.path
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-50'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Language Selector */}
                <div className="pt-4 flex justify-center transition-all duration-200 ease-out"
                     style={{ 
                       transitionDelay: `${navLinks.length * 50}ms`,
                       transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                       opacity: isMobileMenuOpen ? 1 : 0
                     }}>
                  <LanguageSelector 
                    currentLanguage={language}
                    onLanguageChange={(lang: Language) => setLanguage(lang)}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header