import { useEffect, useState } from "react"
import { getPopularRate } from "../../services/api"
import CompareItem from "../compareitem/compareitem"

export default function Compare({ sendInput, sendSelectedCurrency, currencies }){
    const [list, setList] = useState()
    
    const loadRates = async () => {
        const r = await getPopularRate(sendSelectedCurrency.code)
        setList(r)
    }

    useEffect(() => {
        loadRates()
    }, [sendSelectedCurrency])

    if (!list) return

    const rates = Object.entries(list.rates);

    return(
        <div className="bg-neutral-800 p-4 rounded-lg gap-2 flex flex-col">
            <div className="flex-col flex gap-2">
                <h3 className="flex gap-4 text-base uppercase">
                    <span className="text-neutral-400">Multi-Currency</span>
                    <span>{sendInput} FROM {sendSelectedCurrency.code}</span>
                </h3>
                <p className="text-xs text-neutral-400 uppercase">{rates.length} pairs</p>
            </div>
            <div className="flex flex-col gap-2">
                {rates.map((r, i) => (
                    <CompareItem 
                        sendInput={sendInput}
                        currencies={currencies}
                        sendSelectedCurrency={sendSelectedCurrency}
                        test={r}
                        key={r+i}
                    />
                ))}
            </div>
        </div>
    )
}