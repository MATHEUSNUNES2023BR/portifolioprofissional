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
import { motion } from 'framer-motion';

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

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const particleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return(
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Enhanced Profile Photo Section */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Rotating Orbit */}
              <motion.div
                variants={orbitVariants}
                animate="animate"
                className="absolute inset-0"
              >
                {/* Orbital Particles */}
                <motion.div
                  variants={particleVariants}
                  animate="animate"
                  className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[2px]"
                />
                <motion.div
                  variants={particleVariants}
                  animate="animate"
                  className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-500 rounded-full blur-[2px]"
                />
                <motion.div
                  variants={particleVariants}
                  animate="animate"
                  className="absolute -bottom-2 left-1/2 w-4 h-4 bg-purple-400 rounded-full blur-[2px]"
                />
                <motion.div
                  variants={particleVariants}
                  animate="animate"
                  className="absolute top-1/2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-[2px]"
                />
              </motion.div>

              {/* Gradient Border */}
              <div className="absolute inset-[15px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-spin-slow p-1">
                {/* White Background Ring */}
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
              </div>

              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img 
                  className="w-full h-full object-cover"
                  src={minhafoto} 
                  alt="Foto de perfil" 
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  x: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-6 h-6 bg-blue-500 rounded-full opacity-75 blur-[1px]"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  x: [10, -10, 10],
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-0 left-0 w-6 h-6 bg-purple-500 rounded-full opacity-75 blur-[1px]"
              />
            </div>

            {/* Weather Widget */}
            <div className="w-full max-w-sm">
              <ApiClima />
            </div>
          </div>
         
          {/* Habilidades Ténicas */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              {t.skills.title}
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mt-2"></div>
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">
                {t.skills.sections.frontend}
              </h3>
              <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 place-items-center">
                {[html, css, js, ts, react, redux, bootstrap].map((tech, index) => (
                <li key={index} className="w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110 hover:-translate-y-1">
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

              <div className="bg-gradient-to-l from-purple-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-3 sm:mb-4">
                {t.skills.sections.backend}
              </h3>
              <ul className="grid grid-cols-3 gap-4 sm:gap-6 place-items-center">
                {[python, django, postgres].map((tech, index) => (
                <li key={index} className="w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110 hover:-translate-y-1">
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

              <div className="bg-gradient-to-r from-green-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-3 sm:mb-4">
                {t.skills.sections.tools}
              </h3>
              <ul className="grid grid-cols-3 gap-4 sm:gap-6 place-items-center">
                <li className="w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110 hover:-translate-y-1">
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
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            {t.about.title}
            <div className="h-1 w-16 sm:w-20 bg-blue-500 mt-2"></div>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {t.about.description}
          </p>
        </section>
             
        {/* SoftSkills */}
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            {t.skills.softSkills.title}
            <div className="h-1 w-16 sm:w-20 bg-blue-500 mt-2"></div>
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(t.skills.softSkills).map(([key, skill]) => {
              if (key === 'title') return null;
              return (
          <div
            key={key}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">
              {typeof skill === 'string' ? skill : skill.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {typeof skill === 'string' ? '' : skill.description}
            </p>
          </div>
              );
            })}
          </div>
        </section>

        {/* Habilidades Tecnicas */}
        <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            {t.skills.technicalSkills.title}
            <div className="h-1 w-16 sm:w-20 bg-blue-500 mt-2"></div>
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Frontend - Left aligned */}
            <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-2xl font-semibold text-blue-600 mb-3 sm:mb-4 flex items-center gap-3">
          {t.skills.technicalSkills.frontend.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
          {t.skills.technicalSkills.frontend.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <span className="text-blue-500 text-lg sm:text-xl">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
              </ul>
            </div>

            {/* Backend - Right aligned */}
            <div className="bg-gradient-to-l from-purple-50 via-purple-50 to-transparent p-4 sm:p-6 rounded-xl ml-auto w-full sm:w-[90%]">
              <h3 className="text-lg sm:text-2xl font-semibold text-purple-600 mb-3 sm:mb-4 flex items-center gap-3">
          {t.skills.technicalSkills.backend.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
          {t.skills.technicalSkills.backend.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <span className="text-purple-500 text-lg sm:text-xl">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
              </ul>
            </div>

            {/* Tools - Left aligned */}
            <div className="bg-gradient-to-r from-green-50 via-green-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-2xl font-semibold text-green-600 mb-3 sm:mb-4 flex items-center gap-3">
          {t.skills.technicalSkills.tools.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
          {t.skills.technicalSkills.tools.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 text-lg sm:text-xl">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
              </ul>
            </div>

            {/* Technical Support - Right aligned */}
            <div className="bg-gradient-to-l from-yellow-50 via-yellow-50 to-transparent p-4 sm:p-6 rounded-xl ml-auto w-full sm:w-[90%]">
              <h3 className="text-lg sm:text-2xl font-semibold text-yellow-600 mb-3 sm:mb-4 flex items-center gap-3">
                {t.skills.technicalSkills.technicalSupport.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
                {t.skills.technicalSkills.technicalSupport.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-yellow-500 text-lg sm:text-xl">•</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Design - Left aligned */}
            <div className="bg-gradient-to-r from-orange-50 via-orange-50 to-transparent p-4 sm:p-6 rounded-xl">
              <h3 className="text-lg sm:text-2xl font-semibold text-orange-600 mb-3 sm:mb-4 flex items-center gap-3">
          {t.skills.technicalSkills.webdesign.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
          {t.skills.technicalSkills.webdesign.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <span className="text-orange-500 text-lg sm:text-xl">•</span>
              <span className="text-sm sm:text-base">{item}</span>
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