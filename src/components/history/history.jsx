import { useState } from "react"

export default function History(){
    const [timeHistory, setTimeHistory] = useState("1M")

    const time = [
        "1D",
        "1W",
        "1M",
        "3M",
        "1Y",
        "5Y"
    ]

    return(
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center p-4 bg-neutral-800 rounded-lg">
                    <p>Open</p>
                    <p>number</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-neutral-800 rounded-lg">
                    <p>Last</p>
                    <p>number</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-neutral-800 rounded-lg">
                    <p>Change</p>
                    <p>number</p>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-neutral-800 rounded-lg">
                    <p>% Change</p>
                    <p>number</p>
                </div>
            </div>
            <div className="flex gap-2 bg-neutral-800 w-fit rounded-lg">
                {time.map((t, i) => (
                    <button 
                        key={t + i} 
                        className={`p-2 rounded-lg${timeHistory === t ? " bg-neutral-700 text-white" : ""}`} 
                        value={t} 
                        onClick={(e) => setTimeHistory(e.target.value)}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className="w-full bg-neutral-800 rounded-lg p-2 h-80">
                graphique
            </div>
        </div>
    )
}