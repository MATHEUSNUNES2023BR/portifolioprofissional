import { useState } from 'react'
import './index.css'
import HomePage from './pages/Home'
import { translations } from './i18n/translations'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjetctPage'
import ContactPage from './pages/ContactPage'

export type Language = 'pt' | 'en' | 'es'

// Criar um contexto para compartilhar as traduções
export const LanguageContext = React.createContext({
  language: 'pt' as Language,
  t: translations.pt,
  setLanguage: (_lang: Language) => {}
})

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  )
}

export default App
