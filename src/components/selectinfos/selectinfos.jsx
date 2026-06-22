import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function SelectInfos({ history, favoriteChange, setSelectValue, categories, selectValue }) {
    const [isDesktop, setIsDesktop] = useState(globalThis.innerWidth > 768)
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e) => {
        setSelectValue(e.target.value)
        setIsOpen(prev => !prev)
    }

    return(
        isDesktop ? 
            <div className="flex flex-col w-full">
                <div className="flex">
                    {categories.map((cat, i) => (
                        <button 
                            key={cat + i} 
                            onClick={() => setSelectValue(cat)}
                            className={`p-4 flex items-center border-b cursor-pointer gap-2 ${cat === selectValue ? " border-lime-400" : "border-transparent"}`}
                        >
                            <span>{cat}</span>
                            {cat === "favorite" &&
                                <span className="p-1 bg-lime-400/50 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    <span className="">
                                        {favoriteChange.length}
                                    </span>
                                </span>
                            }
                            {cat === "log" &&
                                <span className="p-1 bg-lime-400/50 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    <span className="">
                                        {history.length}
                                    </span>
                                </span>
                            }
                        </button>
                    ))}
                </div>
                <div className="h-px w-full bg-white/50"></div>
            </div>
        :
        <div className="relative">
            <div className="w-full p-2 bg-neutral-800 rounded-lg relative z-5">
                <button className="flex justify-between w-full items-center cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <p className="uppercase">{selectValue}</p>
                    <span className="text-xs">
                        {isOpen ?
                            <motion.i 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fa-solid fa-chevron-up"
                            ></motion.i>
                        :
                            <motion.i 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fa-solid fa-chevron-down"
                            ></motion.i>
                        }
                    </span>
                </button>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y:0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="absolute flex flex-col w-full bg-neutral-700 gap-2 p-2 rounded-lg"
                    >
                        {categories.map((cat, i) => (
                            <button 
                                key={cat + i} 
                                value={cat} 
                                className={`uppercase hover:text-white text-left cursor-pointer text-neutral-400${cat === selectValue ? " text-white" : ""}`} 
                                onClick={handleClick}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}