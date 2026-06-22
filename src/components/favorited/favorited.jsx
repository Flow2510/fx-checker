import FavoriteItem from "../favoriteitem/favoriteitem"

export default function Favorited({ favoriteChange, addToFavorite }){
    if (!favoriteChange) return

    if (favoriteChange.length === 0) return <div className="flex flex-col gap-2 p-8 text-center max-w-115 m-auto">
        <p>No pinned pairs yet</p>
        <p className="text-xs text-neutral-400">Pin a pair to track its rate here. Tap the star icon on any conversion or comparison row.</p>
    </div>

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
                        addToFavorite={addToFavorite}
                    />
                ))}
            </div>
        </div>
    )
}