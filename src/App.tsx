import './App.css'
import MyProjects from './sections/MyProjects'
import SelfDescription from './sections/SelfDescription'
import SkillsDescription from './sections/SkillsDescription'
import SocialMedia from './sections/SocialMedia'

function App() {

  return (
    <>
      <main className='text-xl'>

        <header className='h-[64px] bg-cyan-400 flex justify-center items-center'>
          <p className='flex flex-col lg:flex-row lg:gap-2 lg:text-xl items-center px-2'>Olá, prazer em conhecê-lo, me chamo <span className='lg:text-3xl text-white'>Jeová Bastos</span></p>
        </header>

        {/* Self description */}
        <SelfDescription/>

        {/* Skills description */}
        <SkillsDescription/>

        {/* My Projects */}
        <h2 className='border-b border-cyan-400 lg:w-[640px] mx-auto flex justify-center text-3xl mt-16'>Meus Projetos</h2>
        <MyProjects/>

        <h2 className='border-b border-cyan-400 lg:w-[640px] mx-auto flex justify-center text-3xl mt-16'>Criação de conteúdo</h2>
        <SocialMedia/>

        <footer className='flex m-auto justify-center p-8 mt-16 bg-cyan-400'>
          <p>Todos os direitos reservados.</p>
        </footer>
      </main>
    </>
  )
}

export default App
