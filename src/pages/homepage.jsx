import { useEffect, useState } from "react";
import Exchange from "../components/exchange/exchange";
import Infos from "../components/infos/infos";

export default function HomePage({ currencies, popularRates, yesterdayPopularRates }) {
    const [sendSelectedCurrency, setSendSelectedCurrency] = useState({ "code": "USD", "name": "US Dollar", "country": "United States", "symbol": "$", "flag": "/flags/us.webp" })
    const [receiveSelectedCurrency, setReceiveSelectedCurrency] = useState({ "code": "EUR", "name": "Euro", "country": "Eurozone", "symbol": "€", "flag": "/flags/eu.webp" })
    const [favoriteChange, setFavoriteChange] = useState(() => {
        const savedFavorites = localStorage.getItem("favoriteChange");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const addToFavorite = (initialCurrency, currencyChange) => {
        setFavoriteChange(prev => {
            const alreadyExists = prev.some(favorite =>
                favorite.initialCurrency === initialCurrency &&
                favorite.currencyChange === currencyChange
            );

            if (alreadyExists) { // Supprime le favori
                return prev.filter(
                    favorite =>
                    !(
                        favorite.initialCurrency === initialCurrency &&
                        favorite.currencyChange === currencyChange
                    )
                );
            }

            // Ajoute le favori
            return [
                ...prev,
                {
                    initialCurrency,
                    currencyChange,
                },
            ];
        });
    };

    useEffect(() => {
        localStorage.setItem(
            "favoriteChange",
            JSON.stringify(favoriteChange)
        );
    }, [favoriteChange]);

    return(
        <main className="px-4 py-6 flex flex-col gap-8">
            <Exchange 
                addToFavorite={addToFavorite}
                favoriteChange={favoriteChange}
                currencies={currencies} 
                sendSelectedCurrency={sendSelectedCurrency} 
                setSendSelectedCurrency={setSendSelectedCurrency}
                receiveSelectedCurrency={receiveSelectedCurrency}
                setReceiveSelectedCurrency={setReceiveSelectedCurrency}
            />
            <Infos 
                favoriteChange={favoriteChange}
                currencies={currencies}
                popularRates={popularRates} 
                yesterdayPopularRates={yesterdayPopularRates}
                sendSelectedCurrency={sendSelectedCurrency}
                receiveSelectedCurrency={receiveSelectedCurrency}
            />
        </main>
    )
}