import type { InputHTMLAttributes } from 'react'
import './input.css'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { cn } from '@/lib/utils/cn'


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    // Texto do rótulo
    label: string
    // Placeholder (texto de sugestão)
    placeholder?: string
    // Opcional: Define o tamanho. 'medium' será o padrão.
    inputSize?: ComponentSize
    // Opcional: Ativa o estado de erro.
    error?: boolean
    // Opcional: Desabilita o campo.
    disabled?: boolean
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
    // Opcional: mensagem de erro
    errorMessage?: string
    // Opcional: Tipo do input (text, email, password, etc.)
    type?: string
}

export const Input = ({
    label,
    placeholder,
    inputSize = 'medium',
    error = false,
    disabled = false,
    fullWidth = false,
    errorMessage,
    type = 'text',
    className,
    ...props
}: IInputProps) => {

    const sizeClass = getComponentSize(inputSize, 'input');
    const errorClass = error ? 'input-error' : ''

    const inputClasses = cn(
        'input',
        sizeClass,
        fullWidth && 'btn-full',
        errorClass,
        className
    )

    const inputId = `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <>
            {/* Container opcional para facilitar CSS do label */}
            <label className="input-label-container" htmlFor={inputId}>
                <span className="input-label">{label}</span><br />
                <input
                    id={inputId}
                    className={inputClasses}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    aria-invalid={error}
                    {...props}
                />

                {/* Mensagem de Erro Condicional */}
                {error && errorMessage && (
                    <span className="input-error-message">{errorMessage}</span>
                )}
            </label>
        </>
    )
}