import { motion } from "motion/react"

export default function Ticker({ currencies, popularRates, yesterdayPopularRates }) {

    if (!popularRates || !yesterdayPopularRates) return null;

    const rates = Object.entries(popularRates.rates);

    return (
        <div className="w-full overflow-hidden">
            <motion.div  
                transition={{
                    repeat: Infinity,
                    duration: 120,
                    ease: "linear"
                }}
                animate={{ x: ["0%", "-50%"] }} // On déplace de 0 à la moitié
                className="flex w-max" // w-max permet au conteneur de prendre toute la largeur nécessaire
            >
                {[...rates, ...rates].map(([currency, rate], index) => (
                    <div 
                        key={`${currency}-${index}`} 
                        className="px-4 py-2 flex gap-2 text-xs border-r border-neutral-400 shrink-0"
                    >
                        <p className="text-neutral-400">USD/{currency}</p>
                        <p>{rate.toFixed(2)}</p>
                        <p>
                            {(() => {
                                // On récupère la valeur numérique de la devise correspondante
                                const yesterdayValue = yesterdayPopularRates.rates[currency];
                                const diff = ((rate - yesterdayValue) / yesterdayValue) * 100;
                                
                                return <span className={`${diff > 0 ? "text-green-500" : "text-red-500"}`}>{diff > 0 ? '+' : ''}{diff.toFixed(2)}%</span>;
                            })()}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}