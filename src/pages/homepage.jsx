import { useState } from "react";
import Exchange from "../components/exchange/exchange";
import Infos from "../components/infos/infos";

export default function HomePage({ currencies }) {
    const [sendSelectedCurrency, setSendSelectedCurrency] = useState({ "code": "USD", "name": "US Dollar", "country": "United States", "symbol": "$", "flag": "/flags/us.webp" })
    const [receiveSelectedCurrency, setReceiveSelectedCurrency] = useState({ "code": "EUR", "name": "Euro", "country": "Eurozone", "symbol": "€", "flag": "/flags/eu.webp" })

    return(
        <main className="px-4 py-6 flex flex-col gap-8">
            <Exchange 
                currencies={currencies} 
                sendSelectedCurrency={sendSelectedCurrency} 
                setSendSelectedCurrency={setSendSelectedCurrency}
                receiveSelectedCurrency={receiveSelectedCurrency}
                setReceiveSelectedCurrency={setReceiveSelectedCurrency}
            />
            <Infos 
                sendSelectedCurrency={sendSelectedCurrency}
                receiveSelectedCurrency={receiveSelectedCurrency}
            />
        </main>
    )
}