import { getComponentColor, type ComponentColor } from "../models/get-component-color"
import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/spinner.css"

interface ISpinnerProps {
    size?: ComponentSize
    variant?: ComponentColor
}

export const Spinner = ({
    size = "medium",
    variant = "default",
}: ISpinnerProps) => {

    const sizeClass = getComponentSize(size, "spinner")
    const finalSizeClass = sizeClass || "spinner-md"
    const colorClass = getComponentColor(variant, 'spinner')

    const spinnerClasses = `spinner ${finalSizeClass} ${colorClass} spinner-${variant}`.trim()

    return (
        <>
            <div className={spinnerClasses} role="status" aria-label="Carregando">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </>
    )
}
