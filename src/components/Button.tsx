import type { ReactNode } from 'react'
import './../styles/components/button.css'
import { getComponentSize, type ComponentSize } from '../models/getComponentSize'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'destructive'

interface IButtonProps {
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

export const Button = ({ variant = 'primary', size = 'medium', disabled = false, fullWidth = false, children }: IButtonProps) => {

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

    const variantClass = `btn-${variant}`
    const sizeClass = getComponentSize(size, 'btn')
    const widthClass = fullWidth ? 'btn-full' : ''

    const buttonClasses = `btn ${variantClass} ${sizeClass} ${widthClass}`.trim()

    return (
        <>
            <button className={buttonClasses} disabled={disabled}>
                {children || (disabled ? 'Desabilitado' : defaultText())}
            </button>
        </>
    )
}