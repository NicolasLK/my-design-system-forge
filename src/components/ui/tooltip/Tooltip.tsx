import { type ReactNode } from "react"
import { cn } from "@/lib/utils/cn";
import "./tooltip.css"

interface ITooltipProps {
    /** Texto do tooltip */
    text: string
    /** Elemento alvo */
    children: ReactNode
    /** Posição do tooltip em relação ao elemento */
    position?: "top" | "bottom" | "left" | "right"
    /** Classe de estilos adicional */
    className?: string;
}

export const Tooltip = ({
    text,
    children,
    position = "top",
    className
}: ITooltipProps) => {

    return (
        <>
            <div
                className={cn(
                    "tooltip",
                    `tooltip-${position}`,
                    className
                )}
            >
                {children}
                <span className="tooltip-text">{text}</span>
            </div>
        </>
    )
}