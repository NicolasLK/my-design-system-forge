import type { ReactNode } from 'react'
import './../styles/components/alert.css'

type AlertVariant = 'success' | 'warning' | 'destructive' | 'info'

interface IAlertProps {
    // A variante define a classe CSS e o texto.
    variant: AlertVariant
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
    // Opcional: permite passar um conteúdo customizado, como um ícone.
    children?: ReactNode
}

export const Alert = ({ variant, fullWidth = false, children }: IAlertProps) => {

    const getVariant = () => {
        switch (variant) {
            case 'success':
                return '✔ Operação concluída com sucesso!'
            case 'warning':
                return '⚠ Atenção: revise suas informações.'
            case 'destructive':
                return '❌ Erro ao enviar formulário.'
            case 'info':
                return 'ℹ Atualização disponível.'
            default:
                return 'Alert'
        }
    }

    const variantClass = `alert-${variant}`
    const widthClass = fullWidth ? 'alert-full' : ''

    const alertClasses = `alert ${variantClass} ${widthClass}`.trim()

    return (
        <>
            <div className={alertClasses}>
                {children || getVariant()}
            </div>
        </>
    )
}