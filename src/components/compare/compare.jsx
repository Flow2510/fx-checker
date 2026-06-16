export default function Compare(){
    const list = [
        "",
        "",
        "",
        "",
        "",
        ""
    ]

    return(
        <div className="bg-neutral-800 p-4 rounded-lg gap-2 flex flex-col">
            <div className="flex-col flex gap-2">
                <h3 className="flex gap-4 text-base uppercase">
                    <span className="text-neutral-400">Multi-Currency</span>
                    <span>1.000 FROM USD</span>
                </h3>
                <p className="text-xs text-neutral-400 uppercase">length pairs</p>
            </div>
            <div className="flex flex-col gap-2">
                {list.map((l, i) => (
                    <div 
                        key={l+i}
                        className="bg-neutral-700 flex gap-4 items-center p-2 rounded-lg"
                    >
                        <div className="h-8 w-8 bg-white inline-block rounded-full">
                            
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <p className="uppercase">Devise</p>
                                <p>Number</p>
                            </div>
                            <div className="text-neutral-400 flex justify-between">
                                <p>Devise Name</p>
                                <p>Number</p>
                            </div>
                        </div>
                        <div>
                            <button>
                                <i className="fa-solid fa-star"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}