import { useState, useContext } from 'react'
import LanguageSelector from './LanguageSelector'
import { Language, LanguageContext } from '../App'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: t.header.about },
    { path: '/projects', label: t.header.projects },
    { path: '/contact', label: t.header.contact },
  ]

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.15, // Reduced duration
        type: "tween",
        ease: [0.4, 0.0, 0.2, 1], // Optimized easing
        staggerChildren: 0.02
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.02,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 10,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.1 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  return (
    <>
      {/* Optimized Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              willChange: 'opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        )}
      </AnimatePresence>

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
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-150"
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              aria-label="Menu de navegação"
              style={{ touchAction: 'manipulation' }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                {[0, 1, 2].map((index) => (
                  <motion.span 
                    key={index}
                    initial={false}
                    animate={{
                      rotate: isMobileMenuOpen && index === 0 ? 45 : 
                             isMobileMenuOpen && index === 2 ? -45 : 0,
                      y: isMobileMenuOpen && index === 0 ? 6 : 
                         isMobileMenuOpen && index === 2 ? -6 : 0,
                      opacity: isMobileMenuOpen && index === 1 ? 0 : 1
                    }}
                    transition={{ duration: 0.15 }}
                    className="w-6 h-0.5 bg-gray-600 block origin-center"
                    style={{ willChange: 'transform, opacity' }}
                  />
                ))}
              </div>
            </motion.button>

            {/* Optimized Mobile Menu */}
            <AnimatePresence mode="wait">
              {isMobileMenuOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="sm:hidden fixed top-0 right-0 w-[50%] h-screen bg-white/95 backdrop-blur-sm shadow-2xl z-50"
                  style={{ 
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="px-4 py-6 space-y-4">
                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Navigation Links with enhanced styling */}
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        variants={itemVariants}
                        custom={index}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 text-center text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            location.pathname === link.path
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Language Selector */}
                    <motion.div 
                      variants={itemVariants}
                      className="pt-4 flex justify-center"
                    >
                      <LanguageSelector 
                        currentLanguage={language}
                        onLanguageChange={(lang: Language) => setLanguage(lang)}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header