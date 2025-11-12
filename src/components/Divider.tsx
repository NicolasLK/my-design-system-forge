import "../styles/components/divider.css"


interface IDividerProps {
    /** Define a orientação do divisor */
    orientation?: "horizontal" | "vertical"
    /** Define se o divisor é decorativo (espessura mais forte) */
    variant?: "default" | "strong"
    /** Define o espaçamento externo */
    spacing?: "small" | "medium" | "large"
}

export const Divider = ({ orientation = "horizontal",
    variant = "default",
    spacing = "medium", }: IDividerProps) => {
    const orientationClass =
        orientation === "vertical" ? "divider-vertical" : "divider-horizontal"
    const variantClass = variant === "strong" ? "divider-strong" : ""
    const spacingClass = `divider-${spacing}`

    return (
        <>
            <div
                role="separator"
                className={`divider ${orientationClass} ${variantClass} ${spacingClass}`.trim()}
            />
        </>
    )
}