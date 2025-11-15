import { getComponentColor, type ComponentColor } from "../models/get-component-color"
import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/progress.css"

interface IProgressProps {
    /** Valor atual do progresso (0–100) */
    value: number
    /** Texto descritivo opcional acima da barra */
    label?: string
    /** Cor/variante da barra */
    variant?: ComponentColor
    /** Tamanho da barra */
    size?: ComponentSize
    /** Exibir porcentagem ao lado */
    showPercentage?: boolean
}

export const Progress = ({
    value,
    label,
    variant = "default",
    size = "medium",
    showPercentage = false,
}: IProgressProps) => {

    const sizeClass = getComponentSize(size, "progress")
    const colorClass = getComponentColor(variant, 'progress')
    const safeValue = Math.min(Math.max(value, 0), 100)

    return (
        <>
            <div className="progress-container">
                {label && (
                    <div className="progress-label">
                        <span>{label}</span>
                        {showPercentage && <span>{safeValue}%</span>}
                    </div>
                )}
                <div className={`progress-bar ${sizeClass}`}>
                    <div
                        className={`progress-fill ${colorClass}`}
                        style={{ width: `${safeValue}%` }}
                    />
                </div>
            </div>
        </>
    )
}
