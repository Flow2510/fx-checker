import { useEffect } from "react"
import FavoriteItem from "../favoriteitem/favoriteitem"

export default function Favorited({ favoriteChange }){
    if (!favoriteChange) return

    return(
        <div className="bg-neutral-800 p-4 rounded-lg flex flex-col gap-4">
            <div className="uppercase flex justify-between items-center">
                <h3>Pinned Pairs</h3>
                <p className=" text-neutral-400">{favoriteChange?.length}</p>
            </div>
            <div className="flex flex-col gap-2">
                {favoriteChange?.map((f, i) => (
                    <FavoriteItem 
                        key={i + f.initialCurrency + f.currencyChange}
                        f={f}
                    />
                ))}
            </div>
        </div>
    )
}