import "../styles/components/chip.css"

type ChipVariant = "default" | "primary" | "success" | "warning" | "destructive"

interface IChipProps {
    /** Texto exibido no chip */
    label: string
    /** Variante de cor (padrão: cinza neutro) */
    variant?: ChipVariant
    /** Define se está selecionado */
    selected?: boolean
    /** Define se está desabilitado */
    disabled?: boolean
    /** Ação ao clicar */
    onClick?: () => void
}

export const Chip = ({
    label,
    variant = "default",
    selected = false,
    disabled = false,
    onClick,
}: IChipProps) => {
    const classes = [
        "chip",
        `chip-${variant}`,
        selected && "chip-selected",
        disabled && "chip-disabled",
    ]
        .filter(Boolean)
        .join(" ")

    return (
        <>
            <button className={classes} onClick={!disabled ? onClick : undefined} disabled={disabled}>
                {label}
            </button>
        </>
    )
}
