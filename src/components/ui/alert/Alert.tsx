import type { ReactNode } from 'react'
import { getComponentColor, type ComponentColor } from '@/models/get-component-color'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { cn } from '@/lib/utils/cn'
import './alert.css'

type AlertVariant = ComponentColor

interface IAlertProps {
    // Opcional: Título exibido acima.
    title?: string;
    // A variante define a classe CSS e o texto.
    variant?: AlertVariant
    // A prop para odefinir o tamanho. 'medium' será o padrão.
    size?: ComponentSize
    // Opcional: 'fullWidth' programatico.
    fullWidth?: boolean
    // Opcional: Permite passar um conteúdo customizado, como um ícone.
    children?: ReactNode
    // Opcional: Descrição exibida abaixo.
    description?: string;
    /** Opcional: Classe extra para estilização */
    className?: string;
}

/**
 * Mapeamento de Títulos Padrão por Variante
 * @param variant type AlertVariant = "primary" | "secondary" | "success" | "warning" | "destructive" | "info" | "default"
 * @returns string
 */
const getVariantTitle = (variant: AlertVariant): string => {
    switch (variant) {
        case 'success':
            return '✔'
        case 'warning':
            return '⚠'
        case 'destructive':
            return '❌'
        case 'info':
        case 'primary':
        case 'secondary':
        default:
            return 'ℹ'
    }
}

/**
 * @description Mapeamento de Mensagens Padrão por Variante
 * @param variant type AlertVariant = "primary" | "secondary" | "success" | "warning" | "destructive" | "info" | "default"
 * @returns string
 */
const getVariantMessage = (variant: AlertVariant): string => {
    switch (variant) {
        case 'success':
            return 'Operação concluída com sucesso!'
        case 'warning':
            return 'Atenção: revise suas informações.'
        case 'destructive':
            return 'Ocorreu um problema ao salvar suas informações.'
        case 'info':
        case 'primary':
        case 'secondary':
        default:
            return 'Atualização disponível.'
    }
}

const AlertContent = ({
    title: customTitle,
    description: customDescription,
    variant = 'default',
    children
}: IAlertProps) => {
    const variantIcon = getVariantTitle(variant);
    const defaultMessage = getVariantMessage(variant);

    // Se houver CHILDREN e o variant for 'default', retorna APENAS o children
    if (children && variant === 'default') {
        return <>{children}</>;
    }

    // Se for um alerta simples (sem title/description), renderiza apenas ícone e mensagem padrão
    if (!customTitle && !customDescription) {
        return (
            <>
                <strong className="alert-icon">{variantIcon}</strong>
                <p className="alert-message">{defaultMessage}</p>
            </>
        )
    }

    // Se for um alerta ESTRUTURADO (com title/description - warning/destructive)
    return (
        <>
            {/* Wrapper para Título, Descrição ou Mensagem */}
            <div className='alert-content-wrapper'>
                {/* Título: Ícone + Título Customizado + (Mensagem Padrão) */}
                <div className='alert-title-wrapper'>
                    <strong className="alert-icon">
                        {variantIcon}
                    </strong>

                    {/* Container para o texto principal que deve quebrar (title/message) */}
                    <div className='alert-text-container'>
                        {customTitle &&
                            <strong className="alert-title">
                                {customTitle}
                            </strong>
                        }

                        {!customTitle &&
                            <strong className="alert-message">{defaultMessage}</strong>
                        }
                    </div>
                </div>

                {/* Descrição: Customizada, exibida APENAS abaixo. */}
                {customDescription && (
                    <p className="alert-description">
                        {customDescription}
                    </p>
                )}
            </div>
        </>
    )
}

export const Alert = ({
    title,
    variant = 'default',
    size = 'medium',
    fullWidth = false,
    children,
    description,
    className
}: IAlertProps) => {
    const colorClass = getComponentColor(variant, "alert")
    const sizeClass = getComponentSize(size, "alert")

    const alertClasses = cn(
        "alert",
        colorClass,
        sizeClass,
        fullWidth && "alert-full",
        className
    )

    return (
        <>
            <div className={alertClasses}>
                <AlertContent
                    title={title}
                    description={description}
                    variant={variant}
                    children={children}
                />
            </div>
        </>
    )
}