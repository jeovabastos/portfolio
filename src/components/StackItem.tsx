export default function StackItem({src, children}:{src:string, children:string}){
    return(
        <>
            <div className="flex items-center w-[128px]">
                <img src={src} className="block w-10 h-10"/>
                <p>{children}</p>
            </div>
        </>
    )
}