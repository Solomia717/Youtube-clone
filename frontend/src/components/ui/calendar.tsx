import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-between pt-1 relative items-center px-2",
                caption_label: "text-sm font-medium text-white",
                nav: "space-x-1 flex items-center h-[28px] fixed right-[10px]",
                nav_button: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white"
                ),
                nav_button_previous: "",
                nav_button_next: "",
                table: "w-full border-collapse table-fixed",
                head_row: "",
                head_cell:
                    "text-[#AAAAAA] rounded-md w-9 h-9 font-normal text-[0.8rem] text-center",
                row: "",
                cell:
                    "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#ffffff1a] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-white hover:bg-[#ffffff1a]"
                ),
                day_selected:
                    "bg-[#ffffff1a] text-white hover:bg-[#ffffff33] hover:text-white focus:bg-[#ffffff33] focus:text-white",
                day_today: "bg-[#ffffff1a] text-white",
                day_outside: "text-[#AAAAAA] opacity-50",
                day_disabled: "text-[#AAAAAA] opacity-50",
                day_range_middle: "aria-selected:bg-[#ffffff1a] aria-selected:text-white",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }