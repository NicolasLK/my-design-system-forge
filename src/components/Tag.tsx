import type { ReactNode } from "react"
import "../styles/components/tag.css"
import { getComponentColor, type ComponentColor } from "../models/get-component-color"

type TagVariant = ComponentColor

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

export const Tag = ({ children, variant = "default", closable = false, onClose }: ITagProps) => {

    const colorClass = getComponentColor(variant, 'tag')

    return (
        <>
            <div className={`tag ${colorClass}`.trim()}>
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
