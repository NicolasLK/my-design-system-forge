import type { ReactNode } from 'react'
import './../styles/components/badge.css'

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

    const getVariant = (): string => {
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

    const variantClass = `badge-${variant}`
    const widthClass = fullWidth ? 'badge-full' : ''

    const badgeClasses = `alert ${variantClass} ${widthClass}`.trim()

    return (
        <>
            <span className={badgeClasses}>{children || getVariant()}</span>
        </>
    )
}