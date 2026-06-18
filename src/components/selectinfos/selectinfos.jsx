import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function SelectInfos({ setSelectValue, categories, selectValue }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e) => {
        setSelectValue(e.target.value)
        setIsOpen(prev => !prev)
    }
    return(
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