import minhaLogo from '../assets/Minha logo.png'
function Header(){
  return(
    <header className="bg-gray-50 w-full lg:h-28 sm:h-32 flex items-center lg:justify-around sm:justify-evenly justify-between px-4 sm:px-0">
      <h1 className='w-28 sm:w-36 lg:w-32'><img className='w-fit rounded-full' src={minhaLogo} alt="" /></h1>
      <button data-collapse-toggle="navbar-default" type="button" className="mr-5 inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-neutral-700 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <nav className='hidden sm:flex lg:w-1/3 sm:w-1/2 justify-between list-none text-2xl text-neutral-700 font-["Inter"]'>
        <li className='cursor-pointer h-8 hover:border-b-2 border-neutral-500 hover:text-neutral-500'>
          <a href="">Inicio</a>
        </li>
        <li className='cursor-pointer h-8 hover:border-b-2 border-neutral-500 hover:text-neutral-500'>
          <a href="">Projetos</a>
        </li>
        <li className='cursor-pointer h-8 hover:border-b-2 border-neutral-500 hover:text-neutral-500'>
          <a href="">Serviços</a>
        </li>
      </nav>
    </header>
  )
}
export default Header