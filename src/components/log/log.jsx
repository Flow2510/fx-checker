import { useState } from "react"

export default function Log({ history, setHistory }){
    const [deleteLogModal, setDeleteLogModal] = useState(false)
    const [clearAllModal, setClearAllModal] = useState(false)

    const deleteLog = (id) => {
        setHistory(prev => 
            prev.filter(item => item.id === id)
        );
    };

    const clearHistory = () => {
        setHistory([])
        setClearAllModal(prev => !prev)
    };

    if (!history) return

    if (history.length === 0) return <div className="flex flex-col gap-2 p-8 text-center max-w-115 m-auto">
        <p>No conversions logged yet</p>
        <p className="text-xs text-neutral-400">Every conversion is recorded here automatically when you tap LOG CONVERSION. Your log is private to this session and this browser.</p>
    </div>

    const sortedHistory = [...history].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return(
        <div className="bg-neutral-800 p-4 rounded-lg flex flex-col gap-4">
            <div className="uppercase flex flex-col gap-2">
                <h3>Conversion Log</h3>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-neutral-400">{history.length} Logs</p>
                    <button className="text-sm border p-2 rounded-lg bg-neutral-700 border-neutral-600 uppercase" onClick={() => setClearAllModal(prev => !prev)}>
                        Clear All
                    </button>
                </div>                
            </div>
            {clearAllModal &&
                <div>
                    <div className="z-50 fixed top-0 left-0 w-full h-dvh bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
                        <div className="bg-neutral-900 p-6 flex flex-col gap-4 rounded-lg">
                            <p>Remove All History ?</p>
                            <div className="flex justify-center gap-4">
                                <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm" onClick={clearHistory}>
                                    Remove
                                </button>
                                <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm active:bg-lime-400 active:text-black" onClick={() => setClearAllModal(prev => !prev)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="flex flex-col gap-2">
                {sortedHistory.map((log, i) => (
                    <div key={log.id} className="flex items-center gap-4 bg-neutral-700 rounded-lg p-2">
                        <div className="flex items-center gap-4 flex-1 justify-between">
                            <div className="md:flex md:gap-4">
                                <p className="text-xs uppercase">{log.date}</p>
                                <p className="flex items-center gap-2 uppercase text-xs">{log.from} <img src="/icon-arrow-right.svg" alt="" /> {log.to}</p>
                            </div>
                            <div className="flex flex-col items-end md:flex-row md:gap-4 md:items-center">
                                <p>{log.quantity}</p>
                                <p className="text-xs text-lime-400 md:text-base">{(log.quantity * log.rate).toFixed(4)}</p>
                            </div>
                        </div>
                        <button className="p-2" onClick={() => setDeleteLogModal(prev => !prev)}>
                            <img src='/icon-delete.svg' alt="" />
                        </button>
                        {deleteLogModal &&
                            <div>
                                <div className="z-50 fixed top-0 left-0 w-full h-dvh bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
                                    <div className="bg-neutral-900 p-6 flex flex-col gap-4 rounded-lg">
                                        <p>Remove of History ?</p>
                                        <div className="flex justify-center gap-4">
                                            <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm" onClick={deleteLog}>
                                                Remove
                                            </button>
                                            <button className="border-lime-400 px-3 py-2 uppercase border rounded-sm text-sm active:bg-lime-400 active:text-black" onClick={() => deleteLogModal(prev => !prev)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}