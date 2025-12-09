import type { ReactNode } from "react"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import "./avatar.css"


interface IAvatarProps {
    /** URL da imagem do avatar */
    src?: string
    /** Texto alternativo (acessibilidade) */
    alt?: string
    /** Nome do usuário, usado para gerar iniciais se não houver imagem */
    name?: string
    /** Tamanho do avatar (small, medium, large) */
    size?: ComponentSize
    /** Se deve ser circular ou quadrado */
    shape?: "circle" | "square"
    /** Ícone ou elemento customizado opcional */
    icon?: ReactNode
    /** Classe CSS adicional */
    className?: string
}

export const Avatar = ({
    src,
    alt = "Avatar",
    name,
    size = "medium",
    shape = "circle",
    icon,
    className = "",
}: IAvatarProps) => {
    const sizeClass = getComponentSize(size, "avatar")
    const shapeClass = shape === "circle" ? "avatar-circle" : "avatar-square"

    /** Gera iniciais a partir do nome (fallback) */
    const getInitials = (fullName?: string): string => {
        if (!fullName) return "?"
        const parts = fullName.trim().split(" ")
        if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
        return (
            parts[0].charAt(0).toUpperCase() +
            parts[parts.length - 1].charAt(0).toUpperCase()
        )
    }

    return (
        <>
            <div className={`avatar ${sizeClass} ${shapeClass} ${className}`.trim()}>
                {src ? (
                    <img src={src} alt={alt} className="avatar-image" />
                ) : icon ? (
                    <span className="avatar-icon">{icon}</span>
                ) : (
                    <span className="avatar-initials">{getInitials(name)}</span>
                )}
            </div>
        </>
    )
}
