import type { ReactNode } from "react"
import "../styles/components/tag.css"

type TagVariant = "primary" | "secondary" | "success" | "warning" | "destructive"

interface ITagProps {
    /** Texto ou conteúdo da tag */
    children: ReactNode
    /** Variante de cor */
    variant?: TagVariant
    /** Mostra botão de fechamento */
    closable?: boolean
    /** Callback ao clicar no botão de fechar */
    onClose?: () => void
}

export const Tag = ({ children, variant = "primary", closable = false, onClose }: ITagProps) => {
    return (
        <>
            <div className={`tag tag-${variant}`}>
                <span className="tag-text">{children}</span>
                {closable && (
                    <button
                        className="tag-close"
                        aria-label="Remover tag"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                )}
            </div>
        </>
    )
}
