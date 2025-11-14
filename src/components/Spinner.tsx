import { getComponentSize, type ComponentSize } from "../models/getComponentSize"
import "../styles/components/spinner.css"

interface ISpinnerProps {
    size?: ComponentSize
    variant?: "primary" | "secondary" | "success" | "warning" | "destructive"
}

export const Spinner = ({
    size = "medium",
    variant = "primary",
}: ISpinnerProps) => {

    const sizeClass = getComponentSize(size, "spinner")
    const finalSizeClass = sizeClass || "spinner-md"

    const classes = `spinner ${finalSizeClass} spinner-${variant}`.trim()

    return (
        <>
            <div className={classes} role="status" aria-label="Carregando">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </>
    )
}
