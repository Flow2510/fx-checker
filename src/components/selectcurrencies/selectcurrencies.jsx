import { useState } from "react"

export default function SelectCurrencies({ currencies, selectedCurrency, setSelectedCurrency }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (cur) => {
        setSelectedCurrency(cur)
        setIsOpen(prev => !prev)
    }
    const popular = ["USD", "EUR", "GBP"]
    const selection = currencies.filter(cur => popular.includes(cur.code))

    return(
        <div name="" id="" className="bg-neutral-600 border-neutral-500 border p-2 rounded-lg relative">
            <div>
                <button onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer flex items-center gap-2">
                    <img className="h-5 w-5 rounded-full" src={selectedCurrency?.flag} alt="" />
                    <span>{selectedCurrency?.code}</span>
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
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex w-full justify-between text-neutral-400">
                                <span>Popular</span>
                                <span>{selection.length}</span>
                            </div>
                            <div className="w-full h-px bg-neutral-600"></div>
                            <div>
                                {selection?.map((cur, i) => (
                                    <button className="w-full flex gap-4 cursor-pointer p-2 border border-transparent rounded-lg hover:border-white items-center justify-between" key={cur.code + i} onClick={() => handleClick(cur)}>
                                        <div className="flex gap-4">
                                            <img className="h-5 w-5 rounded-full" src={cur.flag} alt="" />
                                            <span>{cur.code}</span>
                                        </div>
                                        {selectedCurrency.code === cur.code &&
                                            <span className="justify-self-end">
                                                <img src="/icon-check.svg" alt="" />
                                            </span>
                                        }
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex w-full justify-between text-neutral-400">
                                <span>All Currencies</span>
                                <span>{currencies.length}</span>
                            </div>
                            <div className="w-full h-px bg-neutral-600"></div>
                            <div>
                                {currencies?.map((cur, i) => (
                                    <button className="w-full flex gap-4 cursor-pointer p-2 border border-transparent rounded-lg hover:border-white items-center justify-between" key={cur.code + i} onClick={() => handleClick(cur)}>
                                        <div className="flex gap-4">
                                            <img className="h-5 w-5 rounded-full" src={cur.flag} alt="" />
                                            <span>{cur.code}</span>
                                        </div>
                                        {selectedCurrency.code === cur.code &&
                                            <span className="justify-self-end">
                                                <img src="/icon-check.svg" alt="" />
                                            </span>
                                        }
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>                    
                </div>
            }
        </div>
    )
}