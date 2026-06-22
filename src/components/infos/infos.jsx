import { useState } from "react"
import History from "../history/history"
import Compare from "../compare/compare"
import Favorited from "../favorited/favorited"
import Log from "../log/log"
import SelectInfos from "../selectinfos/selectinfos"

export default function Infos({ history, setHistory, addToFavorite, favoriteChange, receiveSelectedCurrency, sendSelectedCurrency, popularRates, yesterdayPopularRates, currencies }) {
    const [selectValue, setSelectValue] = useState("history")

    const categories = [
        "history",
        "compare",
        "favorite",
        "log"
    ]

    return(
        <section className="flex flex-col gap-4">
            <div>
                <SelectInfos setSelectValue={setSelectValue} categories={categories} selectValue={selectValue} history={history} favoriteChange={favoriteChange}/>
            </div>
            {selectValue === "history" &&
                <History 
                    sendSelectedCurrency={sendSelectedCurrency}
                    receiveSelectedCurrency={receiveSelectedCurrency}
                />
            }
            {selectValue === "compare" &&
                <Compare 
                    currencies={currencies}
                    sendSelectedCurrency={sendSelectedCurrency}
                />
            }
            {selectValue === "favorite" &&
                <Favorited 
                    addToFavorite={addToFavorite}
                    favoriteChange={favoriteChange}
                />
            }
            {selectValue === "log" &&
                <Log 
                    history={history}
                    setHistory={setHistory}
                />
            }
        </section>
    )
}