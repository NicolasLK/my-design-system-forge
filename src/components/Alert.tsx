import type { ReactNode } from 'react'
import './../styles/components/alert.css'
import { getComponentColor, type ComponentColor } from '../models/get-component-color'
import { getComponentSize, type ComponentSize } from '../models/get-component-size'

type AlertVariant = ComponentColor

interface IAlertProps {
    // A variante define a classe CSS e o texto.
    variant?: AlertVariant
    // A prop para odefinir o tamanho. 'medium' será o padrão.
    size?: ComponentSize
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
    // Opcional: permite passar um conteúdo customizado, como um ícone.
    children?: ReactNode
}

export const Alert = ({ variant = 'default', size = 'medium', fullWidth = false, children }: IAlertProps) => {

    const getVariantMessage = () => {
        switch (variant) {
            case 'success':
                return '✔ Operação concluída com sucesso!'
            case 'warning':
                return '⚠ Atenção: revise suas informações.'
            case 'destructive':
                return '❌ Erro ao enviar formulário.'
            case 'info':
                return 'ℹ Atualização disponível.'
            case 'primary':
            case 'secondary':
            default:
                return 'ℹ Atualização disponível.'
        }
    }


    const colorClass = getComponentColor(variant, 'alert')
    const sizeClass = getComponentSize(size, 'alert')
    const widthClass = fullWidth ? 'alert-full' : ''

    const alertClasses = `alert ${colorClass} ${sizeClass} ${widthClass}`.trim()

    return (
        <>
            <div className={alertClasses}>
                {children || getVariantMessage()}
            </div>
        </>
    )
}