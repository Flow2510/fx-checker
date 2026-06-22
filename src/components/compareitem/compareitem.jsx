import { useState } from "react"

export default function CompareItem({ sendInput, test, sendSelectedCurrency, currencies }){
    const changeCurrency = currencies.find((cur) => cur.code === test[0])
    const [isFavorited, setIsFavorited] = useState(false)

    return(
        <div
            className="bg-neutral-700 flex gap-4 items-center p-2 rounded-lg"
        >
            <div className="h-8 w-8 bg-white inline-block rounded-full">
                <img className="rounded-full" src={changeCurrency?.flag} alt={`Flag of ${changeCurrency?.name}`} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between">
                    <p className="uppercase">{test[0]}</p>
                    <p>{(test[1] * sendInput).toFixed(2)}</p>
                </div>
                <div className="text-neutral-400 flex justify-between text-xs">
                    <p>{changeCurrency?.name}</p>
                    <p>@{test[1]}</p>
                </div>
            </div>
            <div>
                <button 
                    className={`border cursor-pointer rounded-[0.4rem] p-1 ${isFavorited ? "border-lime-400" : "border-white"}`} 
                    onClick={() => setIsFavorited(prev => !prev)}>
                    <img className="block h-6 w-6" src={isFavorited? "/public/icon-star-filled.svg" : "/public/icon-star.svg"} alt="" />
                </button>
            </div>
        </div>
    )
}