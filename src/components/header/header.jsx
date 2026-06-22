import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header className="p-4 md:p-6">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg" alt="" className="w-full" />
                </div>
                <div>
                    <p className="text-xs text-neutral-400">
                        55 CURRENCIES · EOD · ECB DATA
                    </p>
                </div>
            </div>
        </header>
    )
}