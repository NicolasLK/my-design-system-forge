import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.css'
import { getComponentSize, type ComponentSize } from '../../../models/get-component-size'
import { getComponentColor, type ComponentColor } from '../../../models/get-component-color'
import { cn } from '../../../lib/utils/cn'
import { isIconElement } from '@/models/is-icon-element'

type ButtonVariant = ComponentColor

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // A variante define a classe CSS e o texto.
    variant?: ButtonVariant
    // A prop para odefinir o tamanho. 'medium' será o padrão.
    size?: ComponentSize
    // Opcional: define se o botão deve estar desabilitado
    disabled?: boolean
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
    // Opcional: permite passar um conteúdo customizado, como um ícone.
    children?: ReactNode
}

export const Button = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    className,
    children,
    ...props
}: IButtonProps) => {

    const colorClass = getComponentColor(variant, "btn")
    const sizeClass = getComponentSize(size, "btn")

    /**
     * Converte children para array
     */
    const content = Array.isArray(children) ? children : [children];

    /**
     * Detecta ícone no primeiro child
     */
    const hasIcon = isIconElement(content[0]);

    const buttonClasses = cn(
        'btn',
        colorClass,
        sizeClass,
        hasIcon && "btn-with-icon",
        fullWidth && "btn-full",
        className
    )

    return (
        <>
            <button
                className={buttonClasses}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        </>
    )
}