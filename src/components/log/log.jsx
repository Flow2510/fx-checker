export default function Log(){
    const logs = [
        "",
        "",
        "",
        "",
        "",
        ""
    ]

    return(
        <div className="bg-neutral-800 p-4 rounded-lg flex flex-col gap-4">
            <div className="uppercase flex justify-between items-center">
                <h3>Pinned Pairs</h3>
                <p className="text-xs text-neutral-400">10 Favorites</p>
            </div>
            <div className="flex flex-col gap-2">
                {logs.map((l, i) => (
                    <div key={i + l} className="flex items-center gap-4 bg-neutral-700 rounded-lg p-2">
                        <div>
                            <p className="text-xs uppercase">Times</p>
                            <p className="flex items-center gap-2 uppercase text-xs">pair <img src="/icon-arrow-right.svg" alt="" /> pair</p>
                        </div>
                        <div className="flex-1 flex flex-col items-end">
                            <p>1000.00</p>
                            <p className="text-xs text-lime-400">853.02</p>
                        </div>
                        <div className="p-2">
                            <img src='/icon-delete.svg' alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}