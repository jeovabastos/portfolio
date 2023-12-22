export default function SocialMedia(){
    return(
        <>
            <section className="mt-8 px-2 lg:px-0 lg:w-[640px] flex flex-col items-center justify-center mx-auto text-left">
                <h2 className="font-bold w-full">Blog</h2>
                <div className="w-full mb-4">
                    <img className="lg:px-0 px-2 lg:block lg:w-[640px]" src="/blog.png"/>
                    <p>- Artigos no linkedin (ainda estou desenvolvendo meu próprio blog).</p>
                </div>

                <h2 className="font-bold w-full">Projetos</h2>
                <div className="w-full mb-4">
                    <img className="lg:px-0 px-2 lg:block lg:w-[640px]" src="/projects.png"/>
                    <p>- Focados em aprender conceitos específicos</p>
                </div>

                <h2 className="font-bold w-full">Youtube</h2>
                <div className="w-full mb-4">
                    <img className="lg:px-0 px-2 lg:block lg:w-[640px]" src="/jbastosdevYT.png"/>
                    <p>- Demonstração de cada projeto</p>
                </div>                
            </section>            
        </>
    )
}