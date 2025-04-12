"use client"
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"



const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = { desktop: { label: "Desktop", color: "#2563eb", }, mobile: { label: "Mobile", color: "#60a5fa", }, } satisfies ChartConfig

export function ChartComponent() {
    return (
        <section className="w-1/3 mx-auto py-10 h-auto">
            <h2 className="text-center w-fit mx-auto bg-blue-950 p-5 rounded font-bold tracking-tight text-2xl">SALES THIS YEAR vs SALES LAST YEAR</h2>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
        </section>
    )
}
