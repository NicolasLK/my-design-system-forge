import type { ReactNode } from "react"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { cn } from "@/lib/utils/cn"
import "./tag.css"


type TagVariant = ComponentColor

interface ITagProps {
    /** Texto ou conteúdo da tag */
    children: ReactNode
    /** Variante de cor */
    variant?: TagVariant
    /** Tamanho da tag */
    size?: ComponentSize
    /** Mostra botão de fechamento */
    closable?: boolean
    /** Callback ao clicar no botão de fechar */
    onClose?: () => void
    /** Classe CSS adicional */
    className?: string
}

export const Tag = ({
    children,
    variant = "default",
    size = "medium",
    closable = false,
    onClose,
    className
}: ITagProps) => {

    const colorClass = getComponentColor(variant, 'tag')
    const sizeClass = getComponentSize(size, 'tag');

    return (
        <>
            <div
                data-slot="tag"
                className={cn(
                    "tag",
                    colorClass,
                    sizeClass,
                    className
                )}
            >
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
            {/* <div className={`tag ${colorClass}`.trim()}>
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
            </div> */}
        </>
    )
}
