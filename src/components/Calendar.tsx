import { useState } from "react"
import "../styles/components/calendar.css"

interface ICalendarProps {
    onSelect?: (date: Date) => void
}

export const Calendar = ({ onSelect }: ICalendarProps) => {
    const today = new Date()
    const [current, setCurrent] = useState(new Date())

    const month = current.toLocaleString("pt-BR", { month: "long" })
    const year = current.getFullYear()

    const firstDay = new Date(year, current.getMonth(), 1).getDay()
    const daysInMonth = new Date(year, current.getMonth() + 1, 0).getDate()

    const prevMonth = () =>
        setCurrent(new Date(year, current.getMonth() - 1, 1))

    const nextMonth = () =>
        setCurrent(new Date(year, current.getMonth() + 1, 1))

    const handleSelect = (day: number) => {
        const selectedDate = new Date(year, current.getMonth(), day)
        onSelect?.(selectedDate)
    }

    // Cálculo das células finais para completar a última linha
    const totalCells = firstDay + daysInMonth
    const remainingCells = (7 - (totalCells % 7)) % 7

    return (
        <>
            <div className="calendar">
                <header className="calendar-header">
                    <button onClick={prevMonth} className="calendar-nav">←</button>
                    <h4 className="calendar-title">{month} {year}</h4>
                    <button onClick={nextMonth} className="calendar-nav">→</button>
                </header>

                <div className="calendar-weekdays">
                    {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
                        <span key={d}>{d}</span>
                    ))}
                </div>

                <div className="calendar-grid">
                    {/* células vazias antes do dia 1 */}
                    {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`empty-${i}`} className="calendar-empty" />
                    ))}

                    {/* dias do mês */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1
                        const isToday =
                            day === today.getDate() &&
                            current.getMonth() === today.getMonth() &&
                            current.getFullYear() === today.getFullYear()

                        return (
                            <button
                                key={day}
                                className={`calendar-day ${isToday ? "today" : ""}`}
                                onClick={() => handleSelect(day)}
                            >
                                {day}
                            </button>
                        )
                    })}

                    {/* células vazias após o último dia */}
                    {Array.from({ length: remainingCells }).map((_, i) => (
                        <div key={`end-${i}`} className="calendar-empty" />
                    ))}
                </div>
            </div>
        </>
    )
}
