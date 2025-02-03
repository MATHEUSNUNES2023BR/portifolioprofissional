import minhafoto from '../assets/foto.jpg'
import html from '../assets/habilidades/icons8-html-96.png'
import css from '../assets/habilidades/icons8-css-96.png'
import js from '../assets/habilidades/icons8-js-96.png'
import ts from '../assets/habilidades/icons8-typescript-96.png'
import react from '../assets/habilidades/icons8-react-a-javascript-library-for-building-user-interfaces-96.png'
import redux from '../assets/habilidades/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png'
import python from '../assets/habilidades/icons8-python-96.png'
import django from '../assets/habilidades/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png'
import postgres from '../assets/habilidades/icons8-postgres-96.png'
import bootstrap from '../assets/habilidades/icons8-bootstrap-96.png'
import wix from '../assets/habilidades/icons8-wix.com-ltd.-is-an-israeli-cloud-based-web-development-96.png'
import ApiClima from './ApiClima'
import { LanguageContext } from '../App'
import { useContext } from 'react'
type Habilidades = {
  image: string;
  alt: string;
}
function Main(){
  const habilidadesImg: Habilidades[] = [
    {image: html, alt: 'HTML'},
    {image: css, alt: 'CSS'}, 
    {image: js, alt: 'JavaScript'},
    {image: ts, alt: 'TypeScript'},
    {image: react, alt: 'React'},
    {image: redux, alt: 'Redux'},
    {image: bootstrap, alt: 'Bootstrap'},
    {image: python, alt: 'Python'},
    {image: django, alt: 'Django'},
    {image: postgres, alt: 'PostgreSQL'},
    {image: wix, alt: 'Wix'},
  ]

  const { t } = useContext(LanguageContext)
  return(
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Foto e Clima */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <img 
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl" 
                src={minhafoto} 
                alt="Foto de perfil" 
              />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm">
              <ApiClima />
            </div>
          </div>
         
          {/* Habilidades Ténicas */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              {t.skills.title}
              <div className="h-1 w-12 sm:w-16 lg:w-20 bg-blue-500 mt-2"></div>
            </h2>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                  {t.skills.sections.frontend}
                </h3>
                <ul className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 place-items-center">
                  {[html, css, js, ts, react, redux, bootstrap].map((tech, index) => (
                    <li key={index} className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-all hover:scale-110 hover:-translate-y-1">
                      <img 
                        src={tech} 
                        alt={habilidadesImg[index].alt}
                        className="w-full h-full object-contain" 
                        title={habilidadesImg[index].alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-l from-purple-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-purple-600 mb-2 sm:mb-3 lg:mb-4">
                  {t.skills.sections.backend}
                </h3>
                <ul className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 place-items-center">
                  {[python, django, postgres].map((tech, index) => (
                    <li key={index} className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-all hover:scale-110 hover:-translate-y-1">
                      <img 
                        src={tech} 
                        alt={habilidadesImg[index + 7].alt}
                        className="w-full h-full object-contain"
                        title={habilidadesImg[index + 7].alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-green-600 mb-2 sm:mb-3 lg:mb-4">
                  {t.skills.sections.tools}
                </h3>
                <ul className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 place-items-center">
                  <li className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition-all hover:scale-110 hover:-translate-y-1">
                    <img 
                      src={wix} 
                      alt="Wix"
                      className="w-full h-full object-contain"
                      title="Wix"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Sobre Mim */}
        <section className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-4">
            {t.about.title}
            <div className="h-1 w-12 sm:w-16 lg:w-20 bg-blue-500 mt-2"></div>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-gray-700">
            {t.about.description}
          </p>
        </section>
             
        {/* SoftSkills */}
        <section className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            {t.skills.softSkills.title}
            <div className="h-1 w-12 sm:w-16 lg:w-20 bg-blue-500 mt-2"></div>
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(t.skills.softSkills).map(([key, skill]) => {
              if (key === 'title') return null;
              return (
                <div
                  key={key}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                    {typeof skill === 'string' ? skill : skill.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base">
                    {typeof skill === 'string' ? '' : skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Habilidades Tecnicas */}
        <section className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            {t.skills.technicalSkills.title}
            <div className="h-1 w-12 sm:w-16 lg:w-20 bg-blue-500 mt-2"></div>
          </h2>
          
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-2 sm:mb-3 lg:mb-4 flex items-center gap-3">
                {t.skills.technicalSkills.frontend.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-700">
                {t.skills.technicalSkills.frontend.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-2 lg:gap-3">
                    <span className="text-blue-500 text-lg sm:text-xl lg:text-xl">•</span>
                    <span className="text-sm sm:text-base lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-l from-purple-50 via-purple-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl ml-auto w-full sm:w-[90%]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-600 mb-2 sm:mb-3 lg:mb-4 flex items-center gap-3">
                {t.skills.technicalSkills.backend.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-700">
                {t.skills.technicalSkills.backend.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-2 lg:gap-3">
                    <span className="text-purple-500 text-lg sm:text-xl lg:text-xl">•</span>
                    <span className="text-sm sm:text-base lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 via-green-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-600 mb-2 sm:mb-3 lg:mb-4 flex items-center gap-3">
                {t.skills.technicalSkills.tools.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-700">
                {t.skills.technicalSkills.tools.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-2 lg:gap-3">
                    <span className="text-green-500 text-lg sm:text-xl lg:text-xl">•</span>
                    <span className="text-sm sm:text-base lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-l from-orange-50 via-orange-50 to-transparent p-3 sm:p-4 lg:p-6 rounded-xl ml-auto w-full sm:w-[90%]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-600 mb-2 sm:mb-3 lg:mb-4 flex items-center gap-3">
                {t.skills.technicalSkills.webdesign.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-700">
                {t.skills.technicalSkills.webdesign.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-1 sm:gap-2 lg:gap-3">
                    <span className="text-orange-500 text-lg sm:text-xl lg:text-xl">•</span>
                    <span className="text-sm sm:text-base lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </section>
    </main>
  )
}
export default Main