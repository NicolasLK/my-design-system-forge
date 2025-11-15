import { useState } from "react"
import "../styles/components/date-range-picker.css"
import { Calendar } from "./Calendar"

interface IDateRange {
    start: Date | null
    end: Date | null
}

interface IDateRangePickerProps {
    onChange?: (range: IDateRange) => void
}

export const DateRangePicker = ({ onChange }: IDateRangePickerProps) => {
    const [start, setStart] = useState<Date | null>(null)
    const [end, setEnd] = useState<Date | null>(null)
    const [step, setStep] = useState<"start" | "end">("start")

    const handleSelect = (date: Date) => {
        if (step === "start") {
            setStart(date)
            setStep("end")
        } else {
            if (start && date < start) {
                setStart(date)
                setEnd(null)
                setStep("end")
            } else {
                setEnd(date)
                setStep("start")
                onChange?.({ start: start, end: date })
            }
        }
    }

    const toBR = (date: Date | null) =>
        date ? date.toLocaleDateString("pt-BR") : "—"

    return (
        <>
            <div className="range-picker">
                <div className="range-header">
                    <div>
                        <strong>Início:</strong> {toBR(start)}
                    </div>
                    <div>
                        <strong>Fim:</strong> {toBR(end)}
                    </div>
                </div>

                <div className="range-calendars">
                    <Calendar onSelect={handleSelect} />
                    <Calendar onSelect={handleSelect} />
                </div>
            </div>
        </>
    )
}
