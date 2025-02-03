import { useState, useContext } from 'react'
import LanguageSelector from './LanguageSelector'
import { Language, LanguageContext } from '../App'
import { Link } from 'react-router-dom'
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo/Nome */}
          <a 
            href="#" 
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Matheus Dev
          </a>

          {/* Links de Navegação Desktop */}
          <div className="hidden sm:flex items-center space-x-12">
            <Link to="/">{t.header.about}</Link>
            <Link to="/projects">{t.header.projects}</Link>
            <Link to="/contato">{t.header.contact}</Link>
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={(lang: Language) => setLanguage(lang)}
            />
          </div>

          {/* Botão Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu de navegação"
          >
            <svg 
              className="w-7 h-7 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Menu Mobile */}
          <div className={`
            absolute top-full left-0 w-full 
            bg-white/95 backdrop-blur-sm border-b border-gray-100 
            shadow-lg py-6 space-y-4 sm:hidden
            transition-all duration-200
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
            <div className="px-6 space-y-4">
              <MobileNavLink href="#sobre">Sobre</MobileNavLink>
              <MobileNavLink href="#projetos">Projetos</MobileNavLink>
              <MobileNavLink href="#contato">Contato</MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Componente para links de navegação desktop
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-blue-600 font-medium text-lg transition-colors relative group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </a>
  )
}

// Componente para links de navegação mobile
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="block py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-lg text-center"
    >
      {children}
    </a>
  )
}

export default Header