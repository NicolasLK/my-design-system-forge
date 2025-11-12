import type { CSSProperties, ElementType, ReactNode } from "react"
import "../styles/components/typography.css"

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "text1"
    | "text2"
    | "text3"
    | "caption"

type FontWeight = "regular" | "medium" | "semi-bold" | "bold"

interface ITypographyProps {
    /** Define o tipo de texto (h1, h2, parágrafo etc.) */
    variant?: TypographyVariant
    /** Define o peso da fonte */
    weight?: FontWeight
    /** Cor opcional */
    color?: string
    /** Elemento HTML customizável */
    as?: ElementType
    /** Conteúdo do texto */
    children: ReactNode
    /** Classe adicional opcional */
    className?: string
    /** Estilos inline opcionais */
    style?: CSSProperties
}

export const Typography = ({
    variant = "text1",
    weight = "regular",
    color,
    as,
    children,
    className = "",
    style
}: ITypographyProps) => {
    /**
     * @description Define o elemento base (por exemplo, 'h1', 'p', etc.)
     */
    const Tag: ElementType =
        as || (variant.startsWith("h") ? (variant as ElementType) : "p")

    /**
     * @description Monta as classes de acordo com as props
     */
    const classes = [
        "typography",
        `typography-${variant}`,
        `font-${weight}`,
        className,
    ]
        .filter(Boolean)
        .join(" ")

    return (
        <>
            <Tag className={classes} style={{ color, ...style }}>
                {children}
            </Tag>
        </>
    )
}