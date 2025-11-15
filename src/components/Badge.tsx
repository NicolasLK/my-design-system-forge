import type { ReactNode } from 'react'
import './../styles/components/badge.css'
import { getComponentColor } from '../models/get-component-color'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'destructive' | 'warning'

interface IBadgeProps {
    // A variante define a classe CSS e o texto.
    variant?: BadgeVariant
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
    // Opcional: permite passar um conteúdo customizado, como um ícone.
    children?: ReactNode
}

export const Badge = ({ variant = 'primary', fullWidth = false, children }: IBadgeProps) => {

    const getVariantMessage = (): string => {
        switch (variant) {
            case 'primary':
                return 'Novo'
            case 'secondary':
                return 'Beta'
            case 'success':
                return 'Ativo'
            case 'destructive':
                return 'Erro'
            case 'warning':
                return 'Aviso'
            default:
                return ''
        }
    }

    const colorClass = getComponentColor(variant, 'badge')
    const widthClass = fullWidth ? 'badge-full' : ''

    const badgeClasses = `alert ${colorClass} ${widthClass}`.trim()

    return (
        <>
            <span className={badgeClasses}>{children || getVariantMessage()}</span>
        </>
    )
}