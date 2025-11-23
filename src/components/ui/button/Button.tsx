import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { getComponentColor, type ComponentColor } from '@/models/get-component-color'
import { getComponentVariant, type ComponentVariant } from '@/models/get-component-variant'
import { isIconElement } from '@/models/is-icon-element'
import { cn } from '../../../lib/utils/cn'
import './button.css'


type ButtonVariant = ComponentColor
type ButtonVisual = ComponentVariant;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // A variante define a classe CSS e o texto.
    colorVariant?: ButtonVariant
    // A variante visual (default/sólido é o padrão)
    visualVariant?: ButtonVisual
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
    colorVariant = 'primary',
    visualVariant = 'default',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    className,
    children,
    ...props
}: IButtonProps) => {

    /**
     * Classe de Cor (ex: btn-primary)
     */
    const colorClass = getComponentColor(colorVariant, "btn")

    /**
     * Classe visual: default (solid), outline, ghost, text
     */
    const visualClass = getComponentVariant(visualVariant, "btn");

    /**
     * Classe de Tamanho (ex: btn-sm)
     */
    const sizeClass = getComponentSize(size, "btn")

    /**
     * Verifica se o primeiro child é ícone
     */
    const content = Array.isArray(children) ? children : [children];

    /**
     * Detecta ícone no primeiro child
     */
    const hasIcon = isIconElement(content[0]);

    const buttonClasses = cn(
        'btn',
        colorClass,
        visualClass,
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