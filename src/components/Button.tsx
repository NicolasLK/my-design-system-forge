import type { ReactNode } from 'react'
import { getComponentSize, type ComponentSize } from '../models/get-component-size'
import { getComponentColor, type ComponentColor } from '../models/get-component-color'
import './../styles/components/button.css'

type ButtonVariant = ComponentColor

interface IButtonProps {
    // A variante define a classe CSS e o texto.
    variant?: ButtonVariant
    // A prop para odefinir o tamanho. 'medium' será o padrão.
    size?: ComponentSize
    /** Função chamada no clique do botão */
    onClick?: () => void
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
    onClick,
    disabled = false,
    fullWidth = false,
    children
}: IButtonProps) => {

    const defaultText = (): string => {
        switch (variant) {
            case 'primary':
                return 'Primário'
            case 'secondary':
                return 'Secundário'
            case 'success':
                return 'Sucesso'
            case 'destructive':
                return 'Erro'
            default:
                return ''
        }
    }

    const colorClass = getComponentColor(variant, "btn")
    const sizeClass = getComponentSize(size, "btn")
    const widthClass = fullWidth ? "btn-full" : ""

    const buttonClasses = `btn ${colorClass} ${sizeClass} ${widthClass}`.trim()

    return (
        <>
            <button className={buttonClasses} onClick={onClick} disabled={disabled}>
                {children || (disabled ? 'Desabilitado' : defaultText())}
            </button>
        </>
    )
}