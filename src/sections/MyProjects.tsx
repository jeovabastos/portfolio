import Button from "../components/Button"
import StackItem from "../components/StackItem"

export default function MyProjects(){
    return(
        <>
        {/* Portfolio */}
        <section className='mx-auto mt-8 lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Portfolio Web Site</h2>

          <div className='p-4 lg:p-0 flex flex-1 mt-4 flex-col'>
            {/* LEFT */}
            <div className='flex w-full'>
              <img src='/portfolio.png' className='flex my-auto'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full px-4 py-2'>
              <p>Um portfolio frontend pessoal feito com:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/figma.svg'>Figma</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href='https://www.jbastos.dev/'>Visualizar</Button>
                <Button buttonType='style_2' href='https://github.com/jeovabastos/portfolio'>Codígo fonte</Button>
              </div>
            </div>                    
          </div>

          <div className="px-4 mx-auto w-full text-base">
            <ul>
              <li>Desenvolvi este site para aplicar meus conhecimentos de Ux/Ui.</li>
              <li>Escolhi usar o Tailwind para padronizar os estilos.</li>
            </ul>
          </div>
        </section>

        {/* Link HUB */}
        <section className='mx-auto mt-8 lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Link HUB</h2>

          <div className='p-4 lg:p-0 flex flex-1 mt-4 flex-col'>
            {/* LEFT */}
            <div className='flex w-full'>
              <img src='/linkHub.png' className='flex my-auto'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full px-4 py-2'>
              <p>Um agregador de links feito com:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/figma.svg'>Figma</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href='https://linkhub-jeovabastos.vercel.app/'>Visualizar</Button>
                <Button buttonType='style_2' href='https://github.com/jeovabastos/linkhub'>Codígo fonte</Button>
              </div>
            </div>                    
          </div>

          <div className="text-base px-4 mx-auto w-full">
            <ul>
              <li>O projeto reune todos os meus principais links em um lugar.</li>
              <li>Utilizei o Tailwind para padronizar os estilos.</li>
            </ul>
          </div>
        </section>

        {/* Primordial Loot */}
        <section className='p-4 lg:p-0 mx-auto mt-8 w-full lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Primordial Loot</h2>

          <div className='flex flex-1 mt-4 flex-col'>
            {/* LEFT */}
            <div className='flex w-full'>
              <img src='/primordialLoot.png' className='flex my-auto'/>
            </div>  

            {/* RIGHT */}
            <div className='flex flex-col gap-4 w-full px-4 py-2'>
              <p>Um frontend para um <br/>e-commerce focado em RPG:</p>

              <div className='flex flex-wrap justify-around items-start'>
                <StackItem src='/redux.svg'>Redux</StackItem>
                <StackItem src='/react.png'>React</StackItem>
                <StackItem src='/vite.svg'>Vite</StackItem>
                <StackItem src='/tailwind.svg'>Tailwind</StackItem>
              </div>

              <div className='flex'>
                <Button buttonType='style_1' href='https://primordial-loot.vercel.app/'>Visualizar</Button>
                <Button buttonType='style_2' href='https://github.com/jeovabastos/primordial-loot'>Codígo fonte</Button>
              </div>
            </div>                    
          </div>

          <div className="text-base px-4 mx-auto w-full">
            <ul>
              <li>Fiz a prototipação do projeto com Figma, tanto o design mobile quanto o desktop.</li>
              <li>Utilizei Vite + React para modular o projeto, facilitando a criação e a manutenção de cada parte do site.</li>
              <li>Também fiz uso do Typescript + Redux, melhorando o gerenciamento de estados globais e a correção de bugs.</li>
              <li>Fiz o deploy da aplicação através da Vercel e utilizei o Git e o Github para versionar o projeto. </li>
            </ul>
          </div>
        </section>

        {/* Tamagotchi */}
        <section className='p-4 lg:p-0 mx-auto mt-8 w-full lg:w-[640px] flex flex-col justify-center items-center'>
          <h2 className='flex justify-center lg:justify-start text-left w-full text-2xl'>Tamagotchi</h2>

          <div className='flex flex-1 mt-4 flex-col lg:flex-row'>
            <div className='w-full'>
              <img src='/tamagotchi.png' className='block'/>
            </div>  
          </div>

          <div className="mb-8 text-base px-4 mx-auto w-full">
            <ul>
              <li>Gotchi-chan vem aí!</li>
              <li>Um frontend para um Tamagotchi.</li>
            </ul>
          </div>

          <div className="flex flex-1 w-fit items-center justify-center">
            <button><a className="px-8 hover:bg-cyan-600 hover:text-2xl block py-2 text-white bg-cyan-400 border border-cyan-400" href="https://tamagotchi-omega.vercel.app/" target="_blank">Visualizar</a></button>
            <button><a className="px-4 block py-2 text-black border border-cyan-400 hover:bg-cyan-600 hover:text-white" href="https://github.com/jeovabastos/tamagotchi" target="_blank">Código fonte</a></button>
          </div>
        </section>

        </>
    )
}