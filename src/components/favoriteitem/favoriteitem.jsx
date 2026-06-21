import { useEffect, useState } from "react"
import { getRate } from "../../services/api"

export default function FavoriteItem({ f, addToFavorite }){
    const [change, setChange] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    const deleteFavorite = () => {
        addToFavorite(f.initialCurrency, f.currencyChange)
    }

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
            <button className="p-2 border border-lime-400 rounded-lg" onClick={() => setOpenModal(prev => !prev)}>
                <img src="/public/icon-star-filled.svg" alt="" />
            </button>
            {openModal &&
                <div className="z-50 fixed top-0 left-0 w-full h-dvh bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
                    <div className="bg-neutral-900 p-6 flex flex-col gap-4 rounded-lg">
                        <p>Remove of favorite ?</p>
                        <div className="flex justify-center gap-4">
                            <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm" onClick={deleteFavorite}>
                                Remove
                            </button>
                            <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm active:bg-lime-400 active:text-black" onClick={() => setOpenModal()}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}