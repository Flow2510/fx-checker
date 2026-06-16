import { useState } from "react"

export default function SelectCurrencies({ currencies, selectedCurrency, setSelectedCurrency }) {
    const [isOpen, setIsOpen] = useState(false)
    const currency = currencies.find(cur => cur.code === selectedCurrency)

    const handleClick = (e) => {
        setSelectedCurrency(e.target.value)
        setIsOpen(prev => !prev)
    }

    return(
        <div name="" id="" className="bg-neutral-600 border-neutral-400 p-2 rounded-lg relative">
            <div>
                <button onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer flex items-center gap-2">
                    <img className="h-5 w-5 rounded-full" src={currency.flag} alt="" />
                    <span>{currency.code}</span>
                    <span>
                        <img className={`duration-500 ${isOpen? "rotate-x-180" : ""}`} src="/icon-chevron-down.svg" alt="" />
                    </span>
                </button>
            </div>
            {isOpen &&
                <div className="absolute z-10 right-0 p-2 bg-neutral-800 h-60 overflow-y-scroll overflow-x-hidden rounded-lg flex flex-col top-12 gap-4 border border-neutral-600">
                    <div>
                        <label className="flex border rounded-lg p-2 gap-4" htmlFor="">
                            <img src="/public/icon-search.svg" alt="" />
                            <input type="text" placeholder="Search currencies..." />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2">
                        {currencies.map((cur, i) => (
                            <button className="flex gap-4 cursor-pointer p-2 border border-transparent rounded-lg hover:border-white items-center" key={cur.code + i} value={cur.code} onClick={handleClick}>
                                <img className="h-5 w-5 rounded-full" src={cur.flag} alt="" />
                                <span>{cur.code}</span>
                            </button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}