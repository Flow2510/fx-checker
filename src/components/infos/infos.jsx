import { useEffect, useState } from "react"
import History from "../history/history"
import Compare from "../compare/compare"
import Favorited from "../favorited/favorited"
import Log from "../log/log"

export default function Infos() {
    const [selectValue, setSelectValue] = useState("history")

    useEffect(() => {
        console.log(selectValue)
    }, [selectValue])

    return(
        <section className="flex flex-col gap-4">
            <div>
                <select name="" id="" onChange={(e) => setSelectValue(e.target.value)} className="w-full bg-neutral-800 p-2 rounded-lg">
                    <option className="w-full" value="history">History</option>
                    <option className="w-full" value="compare">Compare</option>
                    <option className="w-full" value="favorite">Favorited</option>
                    <option className="w-full" value="log">Log</option>
                </select>
            </div>
            {selectValue === "history" &&
                <History />
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