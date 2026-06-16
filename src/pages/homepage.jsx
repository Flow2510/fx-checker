import Exchange from "../components/exchange/exchange";
import Infos from "../components/infos/infos";

export default function HomePage() {
    
    return(
        <main className="px-4 py-6 flex flex-col gap-8">
            <Exchange />
            <Infos />
        </main>
    )
}