import { useEffect, useState } from "react"
import SelectCurrencies from "../selectcurrencies/selectcurrencies"
import { getRate } from "../../services/api"

export default function Exchange({ currencies, sendSelectedCurrency, setSendSelectedCurrency, receiveSelectedCurrency, setReceiveSelectedCurrency }) {
    const [favorited, setFavorited] = useState(false)
    const [changeRatio, setChangeRatio] = useState(null)
    const [sendInput, setSendInput] = useState(1)

    const loadChangeRatio = async () => {
        const r = await getRate(sendSelectedCurrency.code, receiveSelectedCurrency.code)
        setChangeRatio(r.rates[receiveSelectedCurrency.code])
    }

    useEffect(() => {
        loadChangeRatio()
    },[sendSelectedCurrency, receiveSelectedCurrency])

    useEffect(() => {
        console.log(changeRatio)
    }, [changeRatio])

    return(
        <section className="flex flex-col gap-2">
            <div>
                <h2 className="text-xl uppercase">Check The Rate</h2>
            </div>
            <div className="flex flex-col gap-4 bg-neutral-800 p-4 rounded-2xl">
                <div className="bg-neutral-700 p-4 rounded-2xl flex flex-col gap-4 border border-neutral-600">
                    <h3 className="uppercase text-neutral-400">Send</h3>
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <label htmlFor="" className="w-full flex-1 flex flex-col gap-4">
                                <input 
                                    onChange={(e) => setSendInput(e.target.value)}
                                    className="w-full text-2xl text-white placeholder-white px-2 py-1 rounded-lg focus:outline-lime-400 focus:outline-2"  
                                    type="number" 
                                    placeholder={sendInput}
                                />
                            </label>
                            <SelectCurrencies currencies={currencies} selectedCurrency={sendSelectedCurrency} setSelectedCurrency={setSendSelectedCurrency}/>
                        </div>
                    </div>
                </div>
                <div className="self-center bg-neutral-700 p-4 rounded-lg border border-neutral-600 active:scale-[1.1]" >
                    <img src="/icon-exchange-vertical.svg" alt="" />
                </div>
                <div className="bg-neutral-700 p-4 rounded-2xl flex flex-col gap-4">
                    <h3 className="uppercase text-neutral-400">Receive</h3>
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <label htmlFor="" className="w-full flex-1 flex flex-col gap-4">
                                <input 
                                    readOnly
                                    className="w-full text-2xl placeholder-lime-400 px-2 py-1 rounded-lg focus:outline-none" 
                                    type="number" 
                                    placeholder={sendInput * changeRatio}/>
                            </label>
                            <SelectCurrencies currencies={currencies} selectedCurrency={receiveSelectedCurrency} setSelectedCurrency={setReceiveSelectedCurrency}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 border-t border-white/40 border-dashed pt-2">
                    {changeRatio &&
                        <p>1 {sendSelectedCurrency.code} = {changeRatio} {receiveSelectedCurrency.code}</p>
                    }
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