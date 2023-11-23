import Button from '../components/Button.tsx'

export default function SelfDescription() {
    return (
        <>
            <section className='flex flex-col lg:flex-row w-full lg:w-[640px] lg:h-[256px] m-auto mt-16'>
                {/* card-left */}
                <div className='m-auto px-2 flex flex-col lg:w-1/2 text-4xl justify-center gap-5'>
                    <p>I'm a frontend</p>
                    <p className='text-8xl text-cyan-400'>WEB</p>
                    <p>developer...</p>
                </div>

                {/* card-right */}
                <div className='gap-4 flex flex-col justify-center rounded-3xl py-2 px-4 mt-8 lg:mt-0 lg:w-1/2 '>
                    <p className='border-b border-cyan-400 text-gray-500'>My links</p>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            <img className='w-12 h-12' src='resume.svg' alt='img' />
                            <Button buttonType='style_1' href=''>Resume</Button>
                        </div>

                        <div className='flex gap-2'>
                            <img className='w-12 h-12' src='linkedin.png' alt='img' />
                            <Button buttonType='style_1' href='https://www.linkedin.com/in/jeovadev/'>Linkedin</Button>
                        </div>

                        <div className='flex gap-2'>
                            <img className='w-12 h-12' src='github.png' alt='img' />
                            <Button buttonType='style_1' href='https://github.com/jeovabastos'>GitHub</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}