import { useState } from "react"

export default function SelectInfos({ setSelectValue, categories, selectValue }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e) => {
        setSelectValue(e.target.value)
        setIsOpen(prev => !prev)
    }
    return(
        <div className="relative">
            <div className="w-full p-2 bg-neutral-800 rounded-lg">
                <button className="flex justify-between w-full items-center cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <p className="uppercase">{selectValue}</p>
                    <span className="text-xs">
                        {isOpen ?
                            <i className="fa-solid fa-chevron-up"></i>
                        :
                            <i className="fa-solid fa-chevron-down"></i>
                        }
                    </span>
                </button>
            </div>
            {isOpen &&
                <div className="absolute flex flex-col w-full bg-neutral-700 gap-2 p-2">
                    {categories.map((cat, i) => (
                        <button key={cat + i} value={cat} className="uppercase text-left cursor-pointer hover:text-lime-400" onClick={handleClick}>
                            {cat}
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}