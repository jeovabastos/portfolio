import { useState, useEffect } from "react"

export default function Button({ children, href, buttonType }: { children: string, href: string, buttonType: 'style_1' | 'style_2' }) {

    const style_1 = 'text-white bg-cyan-400 hover:bg-cyan-600 hover:text-2xl'
    const style_2 = 'text-black border border-cyan-400 hover:text-2xl hover:bg-cyan-600 hover:text-white'

    const [style, setStyle] = useState('')

    useEffect(() => {
        if (buttonType === 'style_1') {
            setStyle(style_1)
        } else {
            setStyle(style_2)
        }
    }, [buttonType])

    return (
        <>
            <button className={style + ' py-2 w-full flex justify-center'}>
                <a target="_blank" href={href}>
                    {children}
                </a>
            </button>
        </>
    )
}