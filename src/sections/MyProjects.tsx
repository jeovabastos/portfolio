import Button from "../components/Button"
import StackItem from "../components/StackItem"

export default function MyProjects(){
    return(
        <>
        {/* Portfolio */}
        <section className='mx-auto mt-8 lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Portfolio Web Site</h2>

          <div className='p-4 lg:p-0 flex flex-1 mt-4 flex-col lg:flex-row'>
            {/* LEFT */}
            <div className='w-full lg:w-1/2'>
              <img src='/Portfolio.png' className='block'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full lg:w-1/2 px-4 py-2'>
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

        {/* Acre Links */}
        <section className='p-4 lg:p-0 mx-auto mt-8 w-full lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Link hub</h2>

          <div className='flex flex-1 mt-4 flex-col lg:flex-row'>
            {/* LEFT */}
            <div className='w-full lg:w-1/2'>
              <img src='/AcreLinks.png' className='block'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full lg:w-1/2 px-4 py-2'>
              <p>A linktr.ee inspirated link hub made with:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/figma.svg'>Figma</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href='https://acreanosama-links.vercel.app/'>Live Preview</Button>
                <Button buttonType='style_2' href='https://github.com/jeovabastos/acreamosama-links'>Source Code</Button>
              </div>
            </div>                    
          </div>
        </section>

        {/* Primordial Loot */}
        <section className='p-4 lg:p-0 mx-auto mt-8 w-full lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Primordial Loot</h2>

          <div className='flex flex-1 mt-4 flex-col lg:flex-row'>
            {/* LEFT */}
            <div className='w-full lg:w-1/2'>
              <img src='/PrimordialLoot.png' className='block'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full lg:w-1/2 px-4 py-2'>
              <p>A frontend for an RPG <br/>e-commerce application:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/redux.svg'>Redux</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href='https://primordial-loot.vercel.app/'>Live Preview</Button>
                <Button buttonType='style_2' href='https://github.com/jeovabastos/primordial-loot'>Source Code</Button>
              </div>
            </div>                    
          </div>
        </section>
        
        </>
    )
}