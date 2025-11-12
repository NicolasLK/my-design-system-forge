import "../styles/components/progressCircular.css"

type ProgressVariant = "primary" | "secondary" | "success" | "destructive" | "warning"

interface IProgressCircularProps {
    /** Valor percentual (0–100) */
    value: number
    /** Tamanho do círculo em px */
    size?: number
    /** Espessura do traço */
    strokeWidth?: number
    /** Variante de cor padrão do sistema */
    variant?: ProgressVariant
}

export const ProgressCircular = ({
    value,
    size = 64,
    strokeWidth = 6,
    variant = "primary",
}: IProgressCircularProps) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (value / 100) * circumference

    const variantClass = `progress-${variant}`

    return (
        <>
            <div className={`progress-circular ${variantClass}`} style={{ width: size, height: size }}>
                <svg width={size} height={size}>
                    <circle
                        className="progress-bg"
                        strokeWidth={strokeWidth}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    <circle
                        className="progress-bar"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                </svg>
                <span className="progress-value">{Math.round(value)}%</span>
            </div>
        </>
    )
}
