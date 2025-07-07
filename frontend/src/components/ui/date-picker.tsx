import * as React from "react"
import { format, subDays } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Calendar } from "./calendar"

export interface DatePickerProps {
    date: Date
    setDate: (date: Date) => void
    className?: string
    showLabel?: boolean
    label?: string
}

export function DatePicker({
    date,
    setDate,
    className,
    showLabel = true,
    label = "Last 28 days",
}: DatePickerProps) {
    // Calculate the date range (28 days by default)
    const startDate = subDays(date, 28)
    const dateRangeText = `${format(startDate, "MMM d")} – ${format(date, "MMM d, yyyy")}`

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className={cn("w-[222px] h-14 bg-[#ffffff01] cursor-pointer", className)}>
                    <div className="flex flex-col h-full justify-center">
                        <div className="text-[#aaaaaa] text-xs tracking-[0.13px] leading-4">
                            {dateRangeText}
                        </div>
                        <div className="text-white font-roboto font-normal text-[15px] tracking-[0] leading-6 flex items-center justify-between">
                            {label}
                            <img
                                className="ml-0 mt-[-16px]"
                                alt="Dropdown arrow"
                                src="./icon-dropdown.svg"
                            />
                        </div>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="fixed top-[48px] left-[40px] flex gap-[15.8px] font-bold">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                />
                <div className="p-3 border-t border-[#ffffff1a]">
                    <div className="space-y-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-left font-normal bg-[#ffffff1a] hover:bg-[#ffffff33] text-white"
                            onClick={() => {
                                const today = new Date()
                                setDate(today)
                            }}
                        >
                            Today
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-left font-normal bg-[#ffffff1a] hover:bg-[#ffffff33] text-white"
                            onClick={() => {
                                const today = new Date()
                                setDate(today)
                            }}
                        >
                            Last 28 days
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-left font-normal bg-[#ffffff1a] hover:bg-[#ffffff33] text-white"
                            onClick={() => {
                                const today = new Date()
                                const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
                                setDate(today)
                            }}
                        >
                            Last 90 days
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}