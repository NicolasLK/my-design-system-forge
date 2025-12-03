import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { genUid } from '@/models/genUid'
import { cn } from '@/lib/utils/cn'
import './input.css'



interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Texto do rótulo */
    label: string
    /** Placeholder (texto de sugestão) */
    placeholder?: string
    /** Opcional: Define o tamanho. 'medium' será o padrão */
    inputSize?: ComponentSize
    /** Opcional: Ativa o estado de erro */
    error?: boolean
    /** Opcional: Desabilita o campo */
    disabled?: boolean
    /** Opcional: fullWidth programatico */
    fullWidth?: boolean
    /** Opcional: mensagem de erro */
    errorMessage?: string
    /** Opcional: Tipo do input (text, email, password, etc.) */
    type?: string
    /** Opcional: Ícone de prefixo (pode ser um elemento React) */
    iconPrefix?: ReactNode
    /** Opcional: Ícone de sufixo (pode ser um elemento React)*/
    iconSuffix?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({
        label,
        placeholder,
        inputSize = 'medium',
        error = false,
        disabled = false,
        fullWidth = false,
        errorMessage,
        type = 'text',
        className,
        id: externalId,
        iconPrefix,
        iconSuffix,
        ...props
    }, ref) => {

        /**
         * Gera um ID único apenas se não houver um ID externo
         */
        const inputId = externalId || (label ? genUid(8) : undefined);

        const sizeClass = getComponentSize(inputSize, 'input');
        const errorClass = error ? 'input-error' : '';

        const inputClasses = cn(
            'input-field',
            sizeClass,
            errorClass,
            className
        );

        // Define se há ícones para adicionar classes de padding
        const hasPrefix = !!iconPrefix;
        const hasSuffix = !!iconSuffix;

        return (
            <>
                <div data-slot="input-container" className={cn(
                    "input-container",
                    fullWidth && 'input-full',
                    errorClass,
                    sizeClass,
                )}>
                    {/* 1. Rótulo (Label) */}
                    {label && (
                        <label className="input-label" htmlFor={inputId}>
                            {label}
                        </label>
                    )}

                    {/* 2. Wrapper do Input com Ícones */}
                    <div data-slot="input-wrapper" className={cn(
                        "input-wrapper",
                        hasPrefix && "input-has-prefix",
                        hasSuffix && "input-has-suffix",
                    )}>
                        {hasPrefix &&
                            <span
                                data-slot="input-prefix"
                                className="input-icon input-prefix"
                            >
                                {iconPrefix}
                            </span>
                        }

                        <input
                            id={inputId}
                            data-slot="input-field"
                            className={inputClasses}
                            type={type}
                            placeholder={placeholder}
                            disabled={disabled}
                            aria-invalid={error}
                            ref={ref}
                            {...props}
                        />

                        {hasSuffix &&
                            <span
                                data-slot="input-suffix"
                                className="input-icon input-suffix"
                            >
                                {iconSuffix}
                            </span>
                        }
                    </div>

                    {/* 3. Mensagem de Erro Condicional */}
                    {error && errorMessage && (
                        <span
                            data-slot="input-error-message"
                            className="input-error-message"
                        >
                            {errorMessage}
                        </span>
                    )}
                </div>
            </>
        )
    }
)