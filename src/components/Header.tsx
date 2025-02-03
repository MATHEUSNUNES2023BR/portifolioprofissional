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

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 active:scale-95"
            aria-label="Menu de navegação"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5 relative">
              <span className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>

          {/* Fixed Mobile Menu */}
          <div className={`
            sm:hidden fixed top-24 left-0 w-full h-[calc(100vh-6rem)]
            bg-white/95 backdrop-blur-md
            transform transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 text-center text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 flex justify-center">
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
  )
}

export default Header