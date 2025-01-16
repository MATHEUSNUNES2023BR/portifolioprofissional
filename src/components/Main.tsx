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
import ApiClima from './ApiClima'
type Habilidades = {
  image: string;
  alt: string;
}
function Main(){
  const habilidadesImg: Habilidades[] = [
    {image: html, alt: 'html'},
    {image: css, alt: 'css'}, 
    {image: js, alt: 'js'},
    {image: ts, alt: 'ts'},
    {image: react, alt: 'react'},
    {image:redux, alt:'redux'},
    {image:python, alt:'python'},
    {image:django, alt:'django'},
    {image:postgres, alt:'postgres'},
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
    <main className="grid sm:grid-cols-[repeat(2,minmax(200px,auto))] grid-cols-[repeat(1,minmax(200px,auto))] sm:grid-rows-2 sm:h-[800px] justify-around mt-4">
       <div className="w-[250px] lg:w-[350px] lg:h-[350px] h-[250px]  md:w-[250px] md:h-[250px] mt-4 sm:w-[190px] sm:h-[190px] sm:mx-4 mx-auto">
        <img className='w-fit h-full rounded-full mx-auto shadow-2xl shadow-neutral-500' src={minhafoto} alt="" />
       </div>
       <div className="w-[98vw] xl:w-[760px] xl:h-[800px] lg:w-[500px] lg:h-[500px] sm:w-[65vw] sm:h-[550px]">
        <section className='mt-8 sm:mt-10'>
          <h2 className='sm:text-3xl text-2xl text-neutral-800'>Habildiades:</h2>
          <hr />
          <ul className='grid grid-cols-3 gap-10 mt-10 place-items-center sm:place-items-start'>
            {habilidadesImg.map((habilidade)=>{
              return(
                <li className='w-14 h-14'><img src={habilidade.image} alt={habilidade.alt} /></li>
              )
            })}
          </ul>
        </section>
        <section className='mt-16'>
          <h2 className='sm:text-3xl text-2xl text-neutral-800'>Soft Skills:</h2>
          <hr />
          <div className='mt-5 grid xl:grid-cols-3 lg:grid-cols-2 gap-2 grid-rows-2 grid-cols-2 sm:gap-4 sm:w-[94%]'>   
            {softSkills.map((skill)=>{
              return(
                <div  
                  key={skill.softSkill}
                  className={`border-2 border-gray-300 rounded-md w-[48vw] sm:w-[235px] px-2 sm:px-5`}>
                  <h3 className=' text-neutral-800 text-sm sm:text-md xl:text-[16px] font-bold text-center'>{skill.softSkill}</h3>
                  <p className=' text-neutral-800 text-justify sm:text-justify text-xs sm:text-sm'>{skill.description}</p>
                </div>
              )
            })}
          </div>
        </section>
       </div>
       <div className='flex justify-center h-fit'>
        <ApiClima />
       </div>
    </main>
  )
}
export default Main