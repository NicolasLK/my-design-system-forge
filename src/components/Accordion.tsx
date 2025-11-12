import { useState, type ReactNode } from "react"
import "../styles/components/accordion.css"

interface IAccordionItem {
    title: string
    content: ReactNode
}

interface IAccordionProps {
    items: IAccordionItem[]
    /** Permite abrir múltiplos painéis ao mesmo tempo */
    allowMultiple?: boolean
}

export const Accordion = ({ items, allowMultiple = false }: IAccordionProps) => {
    const [activeIndices, setActiveIndices] = useState<number[]>([])


    const toggleItem = (index: number) => {
        if (allowMultiple) {
            setActiveIndices((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            )
        } else {
            setActiveIndices((prev) =>
                prev.includes(index) ? [] : [index]
            )
        }
    }

    return (
        <>
            <div className="accordion">
                {items.map((item, index) => {
                    const isActive = activeIndices.includes(index)
                    return (
                        <div key={index} className={`accordion-item ${isActive ? "open" : ""}`}>
                            <button
                                className="accordion-header"
                                onClick={() => toggleItem(index)}
                                aria-expanded={isActive}
                            >
                                <span className="accordion-title">{item.title}</span>
                                <span className="accordion-icon">{isActive ? "−" : "+"}</span>
                            </button>

                            <div className="accordion-content" role="region">
                                <div className="accordion-text">{item.content}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}