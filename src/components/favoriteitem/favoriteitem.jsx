import { useEffect, useState } from "react"
import { getRate } from "../../services/api"

export default function FavoriteItem({ f }){
    const [change, setChange] = useState(null)

    const loadChange = async () => {
        const d = getRate(f.initialCurrency, f.currencyChange)
        setChange(d)
    }

    useEffect(() => {
        const loadChange = async () => {
            const d = await getRate(f.initialCurrency, f.currencyChange);
            setChange(d);
        };

        loadChange();
    }, [f.initialCurrency, f.currencyChange]);

    if (!change) return

    return(
        <div className="flex items-center gap-4 bg-neutral-700 rounded-lg p-2">
            <p className="flex items-center gap-2 uppercase text-xs">{f.initialCurrency} <img src="/icon-arrow-right.svg" alt="" /> {f.currencyChange}</p>
            <div className="flex-1 flex flex-col items-end">
                <p>{change.rates[f.currencyChange]}</p>
                <p className="text-xs">+0.16%</p>
            </div>
            <div className="p-2 border border-lime-400 rounded-lg">
                <img src="/public/icon-star-filled.svg" alt="" />
            </div>
        </div>
    )
}