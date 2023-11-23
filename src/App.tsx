import './App.css'
import MyProjects from './sections/MyProjects'
import SelfDescription from './sections/SelfDescription'
import SkillsDescription from './sections/SkillsDescription'

function App() {

  return (
    <>
      <main className='text-xl'>

        <header className='h-[64px] bg-cyan-400 flex justify-center items-center'>
          <p className='flex flex-col lg:flex-row lg:gap-2 lg:text-xl items-center px-2'>Hi, nice to meet you, my name is <span className='lg:text-3xl text-white'>Jeová Bastos</span></p>
        </header>

        {/* Self description */}
        <SelfDescription/>

        {/* Skills description */}
        <SkillsDescription/>

        {/* My Projects */}
        <h2 className='border-b border-cyan-400 lg:w-[640px] mx-auto flex justify-center text-3xl mt-16'>My Projects</h2>

        <MyProjects/>

        <footer className='flex m-auto justify-center p-8 mt-16 bg-cyan-400'>
          <p>All rights reserved</p>
        </footer>
      </main>
    </>
  )
}

export default App
