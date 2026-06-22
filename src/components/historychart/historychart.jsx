import { useEffect, useState } from "react";
import { getHistoryRate } from "../../services/api"
import { AreaChart, Area, Line, XAxis, YAxis, Tooltip } from "recharts";
import { color } from "motion";


export default function HistoryChart({ lastNumber, timeHistory, sendSelectedCurrency, receiveSelectedCurrency }){
    const [historyRate, setHistoryRate] = useState(null)
    const date = new Date()
    const dateNow = date.toLocaleString("fr-FR", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    });

    const loadHistoryRates = async () => {
        const endDate = new Date();
        const startDate = new Date();

        if (timeHistory === "1D") {
            startDate.setDate(endDate.getDate() - 1);
        }

        if (timeHistory === "1W") {
            startDate.setDate(endDate.getDate() - 7);
        }

        if (timeHistory === "1M") {
            startDate.setMonth(endDate.getMonth() - 1);
        }

        if (timeHistory === "3M") {
            startDate.setMonth(endDate.getMonth() - 3);
        }

        if (timeHistory === "1Y") {
            startDate.setFullYear(endDate.getFullYear() - 1);
        }

        if (timeHistory === "5Y") {
            startDate.setFullYear(endDate.getFullYear() - 5);
        }

        const start = startDate.toISOString().slice(0, 10);
        const end = endDate.toISOString().slice(0, 10);

        const r = await getHistoryRate(
            sendSelectedCurrency.code,
            receiveSelectedCurrency.code,
            start,
            end
        );

        setHistoryRate(r);
    };

    useEffect(() => {
        loadHistoryRates()
    }, [sendSelectedCurrency, receiveSelectedCurrency, timeHistory])

    if (!historyRate) return

    const chartData = Object.entries(historyRate.rates).map(([date, values]) => ({
        date,
        rate: Object.values(values)[0]
    }));

    return (
        <div className="w-full h-full p-2 md:p-4 flex flex-col gap-4 md:gap-6">
            <div className="flex justify-between items-center">
                <p>{sendSelectedCurrency.code}/{receiveSelectedCurrency.code}</p>
                <div className="flex gap-4 text-sm text-neutral-400">
                    <p>{(lastNumber).toFixed(4)}</p>
                    <p>{dateNow}</p>
                </div>
            </div>
            <AreaChart width={"100%"} height={"100%"} data={chartData}>
                <defs>
                    <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                        offset="60%"
                        stopColor="oklch(84.1% 0.238 128.85)"
                        stopOpacity={0.4}
                    />
                    <stop
                        offset="100%"
                        stopColor="oklch(89.7% 0.196 126.665)"
                        stopOpacity={0}
                    />
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="date" 
                    axisLine={{ stroke: "#9d9d9d" }}
                    tickLine={{ stroke: "#9d9d9d" }}
                    tick={{ fill: "#9d9d9d", fontSize: 12 }}
                />
                <YAxis 
                    axisLine={{ stroke: "#9d9d9d" }}
                    tickLine={{ stroke: "#9d9d9d" }}
                    tick={{ fill: "#9d9d9d", fontSize: 12 }}
                    domain={["dataMin - 0.005", "dataMax + 0.005"]}
                />
                <Tooltip contentStyle={{ backgroundColor: '#151515', color: '#fafafa' }}/>

                <Area
                    type="linear"
                    dataKey="rate"
                    fill="url(#rateGradient)"
                    stroke="none"
                />

                <Line
                    type="linear"
                    dataKey="rate"
                    stroke="oklch(84.1% 0.238 128.85)"
                    strokeWidth={2}
                    dot={false}
                />
            </AreaChart>
        </div>
    );
}