import type { ReactNode } from "react"
import "../styles/components/tooltip.css"

interface ITooltipProps {
    text: string
    children: ReactNode
    /** Posição do tooltip em relação ao elemento */
    position?: "top" | "bottom" | "left" | "right"
}

export const Tooltip = ({
    text,
    children,
    position = "top",
}: ITooltipProps) => {
    return (
        <>
            <div className={`tooltip tooltip-${position}`}>
                {children}
                <span className="tooltip-text">{text}</span>
            </div>
        </>
    )
}