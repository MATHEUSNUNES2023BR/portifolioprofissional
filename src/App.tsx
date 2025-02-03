import { useState } from 'react'
import './index.css'
import HomePage from './pages/Home'
import { translations } from './i18n/translations'
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ProjectPage from './pages/ProjetctPage'
import ContactPage from './pages/ContactPage'
import { AnimatePresence, motion } from 'framer-motion'

export type Language = 'pt' | 'en' | 'es'

// Criar um contexto para compartilhar as traduções
export const LanguageContext = React.createContext({
  language: 'pt' as Language,
  t: translations.pt,
  setLanguage: (_lang: Language) => {}
})

// Page transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

// AnimatedRoutes component
const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <ProjectPage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('pt')

  const value = {
    language,
    t: translations[language],
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value as any}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageContext.Provider>
  )
}

export default App
