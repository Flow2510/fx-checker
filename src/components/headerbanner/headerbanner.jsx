import Ticker from "../ticker/ticker";

export default function HeaderBanner({ currencies, popularRates, yesterdayPopularRates }){
    return(
        <div className="flex w-full">
            <div className="bg-lime-300 text-black flex items-center px-2 py-3 w-fit text-nowrap gap-2 md:px-4">
                <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                <p className="text-xs uppercase">Live Markets</p>
            </div>
            <div className="bg-neutral-800 flex items-center flex-1 overflow-hidden">
                <Ticker currencies={currencies} popularRates={popularRates} yesterdayPopularRates={yesterdayPopularRates}/>
            </div>
        </div>
    )
}