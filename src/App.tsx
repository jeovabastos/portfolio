import './App.css'
import Button from './components/Button'
import StackItem from './components/StackItem'

function App() {

  return (
    <>
      <main className='text-xl'>
        <header className='h-[64px] bg-cyan-400 flex justify-center items-center'>
          <p className='flex gap-2 text-xl items-center'>Hi, nice to meet you, my name is <span className='text-3xl text-white'>Jeová Bastos</span></p>
        </header>

        {/* Self description */}
        <section className='flex w-[640px] h-[256px] m-auto mt-8'>
          {/* card-left */}
          <div className='px-2 flex flex-col w-1/2 text-4xl justify-center gap-5'>
            <p>I'm a frontend</p>
            <p className='text-8xl text-cyan-400'>WEB</p>
            <p>developer...</p>
          </div>

          {/* card-right */}
          <div className='gap-4 flex flex-col justify-center rounded-3xl py-2 px-4 w-1/2 border border-cyan-400'>
            <p className='border-b border-cyan-400 text-gray-500'>My links</p>

            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <img src='' alt='img'/>
                <Button buttonType='style_1' href=''>Resume</Button>
              </div>

              <div className='flex gap-2'>
                <img src='' alt='img'/>
                <Button buttonType='style_1' href=''>Linkedin</Button>
              </div>

              <div className='flex gap-2'>
                <img src='' alt='img'/>
                <Button buttonType='style_1' href=''>GitHub</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills description */}
        <section className='flex w-[640px] h-[256px] m-auto mt-8'>
          <div className='w-1/2'>
            <img src='/svg.svg' className='block w-full h-64'/>
          </div>

          <p className='w-1/2 flex items-center px-4 py-2'>
            I also have illustration skills <br/>which I apply to my projects, <br/>like SVGs, Ui/Ux and more...
          </p>
        </section>

        {/* My Projects */}
        <h2 className='border-b border-cyan-400 w-[640px] mx-auto flex justify-center text-3xl mt-8'>My Projects</h2>

        {/* Portfolio */}
        <section className='mx-auto mt-8 w-[640px] flex flex-col justify-center items-center'>
          <h2 className='text-left w-full text-2xl'>Portfolio Web Site</h2>

          <div className='flex flex-1 mt-4'>
            {/* LEFT */}
            <div className='w-1/2'>
              <img src='/Portfolio.png' className='block'/>
            </div>  

            {/* RIGHT */}
            <div className='w-1/2 px-4 py-2'>
              <p>A personal frontend portfolio made with:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/figma.svg'>Figma</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href=''>Live Preview</Button>
                <Button buttonType='style_2' href=''>Source Code</Button>
              </div>
            </div>                    
          </div>
        </section>

        {/*  */}
        {/*  */}
      </main>
    </>
  )
}

export default App
