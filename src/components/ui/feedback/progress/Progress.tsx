import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { cn } from "@/lib/utils/cn"
import "./progress.css"


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
    /** Classe CSS adicional */
    className?: string
}

export const Progress = ({
    value,
    label,
    variant = "primary",
    size = "medium",
    showPercentage = false,
    className,
}: IProgressProps) => {

    const sizeClass = getComponentSize(size, "progress")
    const colorClass = getComponentColor(variant, 'progress')

    /**
     * Garante que o valor esteja entre 0 e 100
     */
    const safeValue = Math.min(Math.max(value, 0), 100)

    /**
     * Cálculo para transform: translateX. Se value=100, transform é 0%. Se value=0, transform é -100%
     */
    const transformValue = 100 - safeValue;

    return (
        <>
            <div data-slot="progress-container" className={cn("progress-container", className)}>
                {(label || showPercentage) && (
                    <div data-slot="progress-label" className="progress-label">
                        {label && <span>{label}</span>}
                        {showPercentage && <span>{safeValue}%</span>}
                    </div>
                )}
                <div data-slot="progress-bar" className={cn("progress-bar", sizeClass)}>
                    <div
                        data-slot="progress-fill"
                        className={cn("progress-fill", colorClass)}
                        // Usa transform: translateX para simular o preenchimento a partir da esquerda
                        style={{ transform: `translateX(-${transformValue}%)` }}
                    />
                </div>
            </div>
        </>
    )
}
