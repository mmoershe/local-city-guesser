export default async function Index() {
    const BACKEND_URL: string | undefined = process.env.BACKEND_URL;
    console.log(BACKEND_URL)
    return (
        <div className="w-screen h-screen bg-black grid place-items-center">
            <div className="w-[80%] h-[50%] bg-transparent rounded flex flex-col border border-solid border-white lg:w-[50%]">
                <div className="w-full h-[50%] flex p-10 pb-5 justify-center items-center">
                    <a href="/play" className="group cursor-pointer p-0 w-full h-full rounded border border-solid border-white grid place-items-center duration-1000 hover:bg-white">
                        <h1 className="uppercase text-white group-hover:text-black duration-1000" style={{ fontSize: 'clamp(1rem, 5vw, 5rem)' }}>spielen</h1>
                    </a>
                </div>
                <div className="w-full h-[50%] flex p-10 pt-5 justify-center items-center">
                    <a href="/upload" className="group cursor-pointer p-0 w-full h-full rounded border border-solid border-white grid place-items-center duration-1000 hover:bg-white">
                        <h1 className="uppercase text-white group-hover:text-black duration-1000" style={{ fontSize: 'clamp(1rem, 5vw, 5rem)' }}>hochladen</h1>
                    </a>
                </div>
            </div>
        </div >
    )
}
