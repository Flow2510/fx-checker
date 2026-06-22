import { useEffect, useState } from "react";
import Exchange from "../components/exchange/exchange";
import Infos from "../components/infos/infos";

export default function HomePage({ currencies, popularRates, yesterdayPopularRates }) {
    const [sendSelectedCurrency, setSendSelectedCurrency] = useState({ "code": "USD", "name": "US Dollar", "country": "United States", "symbol": "$", "flag": "/flags/us.webp" })
    const [receiveSelectedCurrency, setReceiveSelectedCurrency] = useState({ "code": "EUR", "name": "Euro", "country": "Eurozone", "symbol": "€", "flag": "/flags/eu.webp" })
    const [sendInput, setSendInput] = useState(1000)
    const [favoriteChange, setFavoriteChange] = useState(() => {
        const savedFavorites = localStorage.getItem("favoriteChange");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem("savedHistory");
        return savedHistory ? JSON.parse(savedHistory) : [];
    })

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

            return [
                ...prev,
                {
                    initialCurrency,
                    currencyChange,
                },
            ];
        });
    };

    const addToHistory = (initialCurrency, currencyChange, rate, quantity) => {
        setHistory(prev => [
        ...prev,
            {
                from: initialCurrency,
                to: currencyChange,
                rate,
                quantity,
                id: crypto.randomUUID(),
                date: new Date().toLocaleString()
            }
        ]);
    };

    useEffect(() => {
        localStorage.setItem(
            "savedHistory",
            JSON.stringify(history)
        );
    }, [history]);

    useEffect(() => {
        localStorage.setItem(
            "favoriteChange",
            JSON.stringify(favoriteChange)
        );
    }, [favoriteChange]);

    return(
        <main className="px-4 py-6 flex flex-col gap-8 max-w-275 m-auto md:px-6 md:py-8"
        >
            <Exchange 
                sendInput={sendInput}
                setSendInput={setSendInput}
                addToHistory={addToHistory}
                addToFavorite={addToFavorite}
                favoriteChange={favoriteChange}
                currencies={currencies} 
                sendSelectedCurrency={sendSelectedCurrency} 
                setSendSelectedCurrency={setSendSelectedCurrency}
                receiveSelectedCurrency={receiveSelectedCurrency}
                setReceiveSelectedCurrency={setReceiveSelectedCurrency}
            />
            <Infos
                sendInput={sendInput}
                setSendInput={setSendInput} 
                history={history}
                setHistory={setHistory}
                addToFavorite={addToFavorite}
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

// a faire :

// -remplir les inputs automatiquement quand on clique sur un favori ou sur une devise dans la liste compare
// -verifier erreurs et les gérer 
// -ameliorer perfs, UI/UX