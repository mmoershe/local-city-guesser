export default async function Index() {
    return (
        <div className="w-screen h-screen bg-black grid place-items-center">
            <div className="w-[50%] h-[50%] bg-transparent rounded flex flex-col border border-solid border-white">
                <div className="w-full h-[50%] flex p-10 pb-5 justify-center items-center">
                    <div className="group p-5 w-full h-full rounded border border-solid border-white grid place-items-center duration-1000 hover:bg-white">
                        <h1 className="uppercase text-white group-hover:text-black duration-1000" style={{ fontSize: 'clamp(1rem, 5vw, 5rem)' }}>spielen</h1>
                    </div>
                </div>
                <div className="w-full h-[50%] flex p-10 pt-5 justify-center items-center">
                    <div className="group p-5 w-full h-full rounded border border-solid border-white grid place-items-center duration-1000 hover:bg-white">
                        <h1 className="uppercase text-white group-hover:text-black duration-1000" style={{ fontSize: 'clamp(1rem, 5vw, 5rem)' }}>hochladen</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}
