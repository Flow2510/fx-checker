import { useState } from "react"
import SelectCurrencies from "../selectcurrencies/selectcurrencies"

export default function Exchange({ currencies }) {
    const [favorited, setFavorited] = useState(false)
    const [sendSelectedCurrency, setSendSelectedCurrency] = useState("USD")
    const [receiveSelectedCurrency, setReceiveSelectedCurrency] = useState("EUR")

    return(
        <section className="flex flex-col gap-2">
            <div>
                <h2 className="text-xl uppercase">Check The Rate</h2>
            </div>
            <div className="flex flex-col gap-4 bg-neutral-800 p-4 rounded-2xl">
                <div className="bg-neutral-700 p-4 rounded-2xl flex flex-col gap-4">
                    <h3 className="uppercase text-neutral-400">Send</h3>
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <label htmlFor="" className="w-full flex-1 flex flex-col gap-4">
                                <input className="w-full text-2xl text-white placeholder-white" type="number" placeholder="1.000"/>
                            </label>
                            <SelectCurrencies currencies={currencies} selectedCurrency={sendSelectedCurrency} setSelectedCurrency={setSendSelectedCurrency}/>
                        </div>
                    </div>
                </div>
                <div className="self-center bg-neutral-700 p-4 rounded-lg" >
                    <img src="/icon-exchange-vertical.svg" alt="" />
                </div>
                <div className="bg-neutral-700 p-4 rounded-2xl flex flex-col gap-4">
                    <h3 className="uppercase text-neutral-400">Receive</h3>
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <label htmlFor="" className="w-full flex-1 flex flex-col gap-4">
                                <input className="w-full text-2xl placeholder-white" type="number" placeholder="1.000"/>
                            </label>
                            <SelectCurrencies currencies={currencies} selectedCurrency={receiveSelectedCurrency} setSelectedCurrency={setReceiveSelectedCurrency}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 border-t border-white/40 border-dashed pt-2">
                    <p>1 USD = 0.8530 EUR</p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setFavorited(prev => !prev)} 
                            className={`border flex gap-1 items-center uppercase text-xs border-lime-400 rounded-lg p-2 ${favorited? " bg-lime-400 text-black" : ""}`}
                        >
                            <span><i className="fa-solid fa-star text-[0.6rem]"></i></span>
                            <span>favorited</span>
                        </button>
                        <button className="text-xs uppercase border-lime-400 rounded-lg border p-2">log conversion</button>
                    </div>
                </div>
            </div>
        </section>
    )
}