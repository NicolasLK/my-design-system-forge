import { getComponentSize, type ComponentSize } from '../models/getComponentSize'
import './../styles/components/input.css'

interface IInputProps {
    // Texto do rótulo
    label: string
    // Placeholder (texto de sugestão)
    placeholder?: string
    // Opcional: Define o tamanho. 'medium' será o padrão.
    size?: ComponentSize
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

export const Input = ({ label,
    placeholder,
    size = 'medium',
    error = false,
    disabled = false,
    fullWidth = false,
    errorMessage,
    type = 'text', }: IInputProps) => {

    const errorClass = error ? 'input-error' : ''
    const sizeClass = getComponentSize(size, 'input');
    const widthClass = fullWidth ? 'btn-full' : ''

    const inputClasses = `input ${sizeClass} ${errorClass} ${widthClass}`.trim()
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
                />

                {/* Mensagem de Erro Condicional */}
                {error && errorMessage && (
                    <span className="input-error-message">{errorMessage}</span>
                )}
            </label>
        </>
    )
}