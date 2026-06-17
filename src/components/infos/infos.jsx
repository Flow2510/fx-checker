import { useState } from "react"
import History from "../history/history"
import Compare from "../compare/compare"
import Favorited from "../favorited/favorited"
import Log from "../log/log"
import SelectInfos from "../selectinfos/selectinfos"

export default function Infos({ receiveSelectedCurrency, sendSelectedCurrency}) {
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
                <SelectInfos setSelectValue={setSelectValue} categories={categories} selectValue={selectValue}/>
            </div>
            {selectValue === "history" &&
                <History 
                    sendSelectedCurrency={sendSelectedCurrency}
                    receiveSelectedCurrency={receiveSelectedCurrency}
                />
            }
            {selectValue === "compare" &&
                <Compare />
            }
            {selectValue === "favorite" &&
                <Favorited />
            }
            {selectValue === "log" &&
                <Log />
            }
        </section>
    )
}