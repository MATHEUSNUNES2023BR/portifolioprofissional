import { useEffect, useState } from 'react'
import minhalogo from '../assets/Minha logo.png'
function Header(){
  const anchorText: string[] = ['Inicio', 'Projetos', 'Serviços']
  const [LiActivate, setLiActivate] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    // Função que atualiza o estado com o novo tamanho da janela
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Adicionar o ouvinte de evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpar o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return(
    <header className={`${LiActivate ? 'h-80 sm:h-32' : 'h-32'} bg-gray-50 w-full transition-all`}>
      <div className='flex items-center lg:justify-around sm:justify-evenly justify-between sm:px-0'>
        <h1 className='ml-7 w-32 sm:w-36 lg:w-32 '><img className='w-fit rounded-full' src={minhalogo} alt="" /></h1>
        <div className='mx-3 sm:mx-0 place-items-center flex-col sm:flex-row w-1/3 sm:w-1/2 h-full items-center'>
          <button onClick={() => setLiActivate(!LiActivate)} 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="flex sm:hidden items-center p-2 w-14 h-14 justify-center text-sm text-neutral-700 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-default" aria-expanded="false">
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          {/* Lógica de ação ao clicar no botão aparecer texto */}
          <div className={`w-1/3 flex-row ${LiActivate || (windowSize >= 640) ? 'sm:w-full absolute mt-4 sm:mt-0 delay-75 sm:relative' : 'opacity-0'}`}>
            <nav className={`sm:h-full transition-all ease-in-out duration-1000 ${LiActivate || (windowSize >= 640)  ? 'translate-y-1 sm:translate-y-0 flex flex-col sm:flex-row  justify-between h-52 sm:h-auto' : 'translate-y-0 pointer-events-none'} lg:w-full justify-around list-none text-2xl text-neutral-700 font-["Inter"]`}>
              {
              LiActivate || (windowSize >= 640)  ? anchorText.map((text)=>(
                <li className={`text-center cursor-pointer h-8 hover:border-b-2 ${ LiActivate || (windowSize >= 640) ? 'border-neutral-500 hover:text-neutral-500' : ''}`} key={text}>
                  <a href="">{text}</a>
                </li>
              )) : ''}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header