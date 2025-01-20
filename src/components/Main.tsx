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
  const softSkills = [
    {
      "softSkill": "Trabalho em equipe",
      "description": "Experiência com suporte técnico e colaboração em ambientes de TI, como em sua atuação no Aparecida Shopping."
    },
    {
      "softSkill": "Resolução de problemas",
      "description": "Identificação e solução de problemas em TI, incluindo manutenção de computadores e redes."
    },
    {
      "softSkill": "Comunicação",
      "description": "Prestação de suporte e interação com colaboradores para resolver questões técnicas."
    },
    {
      "softSkill": "Adaptabilidade",
      "description": "Experiência na área de TI, incluindo front-end, back-end e suporte técnico."
    },
    {
      "softSkill": "Aprendizado contínuo",
      "description": "Busca constante por aperfeiçoamento, como sua formação em desenvolvimento Full Stack Python e experiência com diversas tecnologias modernas."
    },
    {
      "softSkill": "Pensamento Crítico",
      "description": "Capacidade de analisar situações de forma lógica e tomar decisões informadas."
    }
  ]
  
  return(
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <img 
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl" 
                src={minhafoto} 
                alt="Foto de perfil" 
              />
            </div>
            <div className="w-full max-w-sm">
              <ApiClima />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Habilidades Técnicas
              <div className="h-1 w-20 bg-blue-500 mt-2"></div>
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Front-End</h3>
                <ul className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
                  {[html, css, js, ts, react, redux, bootstrap].map((tech, index) => (
                    <li key={index} className="w-14 h-14 transition-all hover:scale-110 hover:-translate-y-1">
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

              <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Back-End & Database</h3>
                <ul className="grid grid-cols-3 gap-6 place-items-center">
                  {[python, django, postgres].map((tech, index) => (
                    <li key={index} className="w-14 h-14 transition-all hover:scale-110 hover:-translate-y-1">
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

              <div className="bg-gradient-to-r from-green-50 to-transparent p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Outras Ferramentas</h3>
                <ul className="grid grid-cols-3 gap-6 place-items-center">
                  <li className="w-14 h-14 transition-all hover:scale-110 hover:-translate-y-1">
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

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre Mim
            <div className="h-1 w-20 bg-blue-500 mt-2"></div>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Nascido em Florianópolis, Santa Catarina, cresci em Aparecida de Goiânia, Goiás.
            Tenho 24 anos e atualmente, e procuro me especializar como Desenvolvedor Fullstack Python.
            Como cristão, minha fé no Senhor Yeshua Hamashiach guia minha trajetória, refletindo meus valores em cada projeto e desafio que assumo. 
            Meu objetivo é crescer como profissional de tecnologia, criando soluções inovadoras.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Soft Skills
            <div className="h-1 w-20 bg-blue-500 mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.softSkill}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {skill.softSkill}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Habilidades Técnicas Detalhadas
            <div className="h-1 w-20 bg-blue-500 mt-2"></div>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-transparent p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-3">
                🚀 Front-End
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>HTML e CSS: Criação de estruturas web com estilização avançada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>React: Desenvolvimento de interfaces dinâmicas e responsivas utilizando componentes reutilizáveis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>JavaScript: Programação orientada a eventos e manipulação do DOM.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Bootstrap, Tailwind e Styled Components: Uso de framework para desenvolvimento de layouts responsivos e estilizados.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-l from-purple-50 via-purple-50 to-transparent p-6 rounded-xl ml-auto w-[90%]">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center gap-3">
                💻 Back-End
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <span>Conhecimentos em Python e o framework Django</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <span>Familiaridade com bancos de dados Postgres</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 via-green-50 to-transparent p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-3">
                🛠 Ferramentas e Metodologias
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span>Controle de versão com Git</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span>Criação de interfaces responsivas e dinâmicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span>Manutenção de infraestrutura tecnológica</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
export default Main