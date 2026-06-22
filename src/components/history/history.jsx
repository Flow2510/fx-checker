import { useEffect, useState } from "react"
import { getRate, getYesterdayRate } from "../../services/api"
import HistoryChart from "../historychart/historychart"

export default function History({ sendSelectedCurrency, receiveSelectedCurrency }){
    const [timeHistory, setTimeHistory] = useState("1M")
    const [openNumber, setOpenNumber] = useState(null)
    const [lastNumber, setLastNumber] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadOpenNumber = async () => {
        if (sendSelectedCurrency.code === receiveSelectedCurrency.code) return;

        const r = await getRate(sendSelectedCurrency.code, receiveSelectedCurrency.code)
        setOpenNumber(r.rates[receiveSelectedCurrency.code])
    }

    const loadLastNumber = async () => {
        if (sendSelectedCurrency.code === receiveSelectedCurrency.code) return;

        const r = await getYesterdayRate(sendSelectedCurrency.code, receiveSelectedCurrency.code)
        setLastNumber(r.rates[receiveSelectedCurrency.code])
    }

    const time = [
        "1D",
        "1W",
        "1M",
        "3M",
        "1Y",
        "5Y"
    ]

    useEffect(() => {
        const load = async () => {
            await Promise.all([loadOpenNumber(), loadLastNumber()])
            setLoading(false)
        }
        load()
    }, [sendSelectedCurrency, receiveSelectedCurrency])

    if (loading) return <p>Loading...</p>

    if (sendSelectedCurrency.code === receiveSelectedCurrency.code) return <div className="text-center p-8 flex flex-col gap-2 max-w-115 m-auto">
        <p className="">No chart data available</p>
        <p className="text-xs text-neutral-400">We couldn't load rate history for {sendSelectedCurrency.code}/{receiveSelectedCurrency.code} right now. Please choose another currency to compare.</p>
    </div>;

    return(
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 md:flex">
                <div className="flex flex-col justify-center uppercase gap-2 p-4 bg-neutral-800 rounded-lg md:w-35">
                    <p className="text-neutral-400">Open</p>
                    <p className="text-lg">{(openNumber).toFixed(4)}</p>
                </div>
                <div className="flex flex-col justify-center uppercase gap-2 p-4 bg-neutral-800 rounded-lg md:w-35">
                    <p className="text-neutral-400">Last</p>
                    <p className="text-lg">{(lastNumber).toFixed(4)}</p>
                </div>
                <div className="flex flex-col justify-center uppercase gap-2 p-4 bg-neutral-800 rounded-lg md:w-35">
                    <p className="text-neutral-400">Change</p>
                    {lastNumber - openNumber > 0 ?
                        <p className="text-green-500 text-lg flex items-center">                            
                            <span>+{(lastNumber - openNumber).toFixed(4)}</span>
                        </p>
                    :
                        <p className="text-red-500 text-lg items-center flex gap-1">                            
                            <span>{(lastNumber - openNumber).toFixed(4)}</span>                            
                        </p>
                    }
                </div>
                <div className="flex flex-col justify-center uppercase gap-2 p-4 bg-neutral-800 rounded-lg md:w-35">
                    <p className="text-neutral-400">% Change</p>
                    {lastNumber && openNumber &&
                        (((lastNumber - openNumber) / openNumber) * 100) > 0 ?
                            <p className="text-green-500 text-lg flex gap-2">
                                <span><i className="translate-y-[0.4rem] fa-solid fa-sort-up"></i></span>
                                <span>+{(((lastNumber - openNumber) / openNumber) * 100).toFixed(4)}%</span>
                            </p>
                        :
                            <p className="text-red-500 text-lg flex gap-2">
                                <span><i className="-translate-y-1 rotate-z-180 fa-solid fa-sort-up"></i></span>
                                <span>{(((lastNumber - openNumber) / openNumber) * 100).toFixed(2)}%</span>
                            </p>
                    }                    
                </div>
            </div>
            <div className="flex gap-2 bg-neutral-800 w-fit rounded-lg">
                {time.map((t, i) => (
                    <button 
                        key={t + i} 
                        className={`p-2 md:px-2.5 rounded-lg${timeHistory === t ? " bg-neutral-700 text-white" : " text-neutral-400"}`} 
                        value={t} 
                        onClick={(e) => setTimeHistory(e.target.value)}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div
                className="w-full aspect-square bg-neutral-800 rounded-lg"
                style={{maxHeight: 400}}
            >
                <HistoryChart 
                    lastNumber={lastNumber}
                    sendSelectedCurrency={sendSelectedCurrency}
                    receiveSelectedCurrency={receiveSelectedCurrency}
                    timeHistory={timeHistory}
                />
            </div>
        </div>
    )
}