import { useState } from 'react'
import brFlag from '../assets/icons8-brazil-96.png'
import usFlag from '../assets/icons8-usa-96.png'
import esFlag from '../assets/icons8-spain-96.png'
import { Language } from '../App'

interface LanguageSelectorProps {
  onLanguageChange: (lang: Language) => void;
  currentLanguage: Language;
}

function LanguageSelector({ onLanguageChange, currentLanguage }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const flags: Record<Language, { src: string; alt: string }> = {
    pt: { src: brFlag, alt: 'Português' },
    en: { src: usFlag, alt: 'English' },
    es: { src: esFlag, alt: 'Español' }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <img
          src={flags[currentLanguage].src}
          alt={flags[currentLanguage].alt}
          className="w-6 h-6 rounded-sm shadow-sm"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-32 border border-gray-100">
          {(Object.entries(flags) as [Language, { src: string; alt: string }][]).map(([lang, { src, alt }]) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                currentLanguage === lang ? 'bg-blue-50' : ''
              }`}
            >
              <img src={src} alt={alt} className="w-5 h-5 rounded-sm" />
              <span className="text-sm text-gray-700">{alt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector 