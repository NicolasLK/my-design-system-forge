import type { ComponentProps } from "react"
import { cn } from "@/lib/utils/cn"
import "./divider.css"

interface IDividerProps extends ComponentProps<"div"> {
    /** Define a orientação do divisor */
    orientation?: "horizontal" | "vertical"
    /** Define se o divisor é decorativo (espessura mais forte) */
    variant?: "default" | "strong"
    /** Define o espaçamento externo */
    spacing?: "small" | "medium" | "large"
    /** se a linha é apenas decorativa */
    decorative?: boolean
}

export const Divider = ({
    orientation = "horizontal",
    variant = "default",
    spacing = "medium",
    decorative = true,
    className,
    ...props
}: IDividerProps) => {

    return (
        <>
            <div
                role={decorative ? "none" : "separator"}
                data-slot="divider"
                data-orientation={orientation}
                data-variant={variant}
                data-spacing={spacing}
                className={cn("divider", className)}
                {...props}
            />
        </>
    )
}