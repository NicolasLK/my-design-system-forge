import { useState, type ReactNode } from "react"
import "../styles/components/tabs.css"

interface ITab {
    label: string
    content: ReactNode
}

interface ITabsProps {
    tabs: ITab[]
    /** Aba inicial ativa */
    defaultIndex?: number
}

export const Tabs = ({ tabs, defaultIndex = 0 }: ITabsProps) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex)

    return (
        <>
            <div className="tabs-container">
                <div className="tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="tab-content">{tabs[activeIndex].content}</div>
            </div>
        </>
    )
}