import type { ReactNode } from "react"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { getComponentVariant, type ComponentVariant } from "@/models/get-component-variant"
import { cn } from "@/lib/utils/cn"
import "./tag.css"



interface ITagProps {
    /** Texto ou conteúdo da tag */
    children: ReactNode
    /** Variante de cor */
    color?: ComponentColor
    /** Tamanho da tag */
    size?: ComponentSize
    /** Ícone opcional à esquerda do texto */
    icon?: ReactNode
    /** Variante visual (Solid - padrão, ou Light - fundo claro) */
    visualVariant?: ComponentVariant
    /** Torna a tag clicável */
    onClick?: () => void
    /** Mostra botão de fechamento */
    closable?: boolean
    /** Callback ao clicar no botão de fechar */
    onClose?: () => void
    /** Classe CSS adicional */
    className?: string
}

export const Tag = ({
    children,
    color = "default",
    size = "medium",
    icon,
    visualVariant = "default",
    onClick,
    closable = false,
    onClose,
    className
}: ITagProps) => {

    const colorClass = getComponentColor(color, 'tag');
    const sizeClass = getComponentSize(size, 'tag');
    const visualClass = getComponentVariant(visualVariant, 'tag');

    /**
     * Se a tag for clicável, mudamos o elemento para 'button'
     */
    const TagElement = onClick ? 'button' : 'div';

    /**
     * Se for clicável ou removível, o cursor é pointer
     */
    const isInteractive = !!onClick || closable;

    return (
        <>
            <TagElement
                data-slot="tag"
                className={cn(
                    "tag",
                    colorClass,
                    sizeClass,
                    visualClass,
                    isInteractive && 'tag-interactive',
                    className
                )}
                onClick={onClick}
                type={onClick ? "button" : undefined}
            >
                {icon &&
                    <span data-slot="tag-icon" className="tag-icon">
                        {icon}
                    </span>
                }

                <span className="tag-text">{children}</span>

                {closable && (
                    <button
                        data-slot="tag-close"
                        className="tag-close"
                        aria-label="Remover tag"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                )}
            </TagElement>
        </>
    )
}
