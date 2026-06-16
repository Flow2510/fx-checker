export default function Favorited(){
    const favorites = [
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
                {favorites.map((f, i) => (
                    <div key={i + f} className="flex items-center gap-4 bg-neutral-700 rounded-lg p-2">
                        <p className="flex items-center gap-2 uppercase text-xs">pair <img src="/icon-arrow-right.svg" alt="" /> pair</p>
                        <div className="flex-1 flex flex-col items-end">
                            <p>1.152</p>
                            <p className="text-xs">+0.16%</p>
                        </div>
                        <div className="p-2 border rounded-lg">
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}