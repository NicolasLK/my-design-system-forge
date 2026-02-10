import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import './input.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Texto do rótulo */
    label?: string;
    /** Texto de descrição abaixo do campo */
    description?: ReactNode;
    /** Placeholder (texto de sugestão) */
    placeholder?: string;
    /** Opcional: Define o tamanho. 'medium' será o padrão */
    inputSize?: ComponentSize;
    /** Opcional: Ativa o estado de erro */
    error?: boolean;
    /** Opcional: mensagem de erro */
    errorMessage?: string;
    /** Opcional: Desabilita o campo */
    disabled?: boolean;
    /** Opcional: fullWidth programatico */
    fullWidth?: boolean;
    /** Opcional: Tipo do input (text, email, password, etc.) */
    type?: string;
    /** Opcional: Ícone de prefixo (pode ser um elemento React) */
    iconPrefix?: ReactNode;
    /** Opcional: Ícone de sufixo (pode ser um elemento React)*/
    iconSuffix?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            label,
            description,
            placeholder,
            inputSize = 'md',
            error = false,
            errorMessage,
            disabled = false,
            fullWidth = false,
            type = 'text',
            className,
            id: externalId,
            iconPrefix,
            iconSuffix,
            ...props
        },
        ref,
    ) => {
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
            className,
        );

        // Define se há ícones para adicionar classes de padding
        const hasPrefix = !!iconPrefix;
        const hasSuffix = !!iconSuffix;

        return (
            <>
                <div
                    data-slot="input-container"
                    className={cn(
                        'input-container',
                        fullWidth && 'input-full',
                        sizeClass,
                    )}
                >
                    {/* Rótulo (Label) */}
                    {label && (
                        <label className="input-label" htmlFor={inputId}>
                            {label}
                        </label>
                    )}

                    {/* Wrapper do Input com Ícones */}
                    <div
                        data-slot="input-wrapper"
                        className={cn(
                            'input-wrapper',
                            hasPrefix && 'input-has-prefix',
                            hasSuffix && 'input-has-suffix',
                        )}
                    >
                        {hasPrefix && (
                            <span
                                data-slot="input-prefix"
                                className="input-icon input-prefix"
                            >
                                {iconPrefix}
                            </span>
                        )}

                        <input
                            id={inputId}
                            ref={ref}
                            type={type}
                            data-slot="input-field"
                            className={cn(inputClasses)}
                            placeholder={placeholder}
                            disabled={disabled}
                            aria-invalid={error}
                            {...props}
                        />

                        {hasSuffix && (
                            <span
                                data-slot="input-suffix"
                                className="input-icon input-suffix"
                            >
                                {iconSuffix}
                            </span>
                        )}
                    </div>

                    {/* Mensagem de Erro Condicional */}
                    {error && errorMessage && (
                        <span
                            data-slot="input-error-message"
                            className="input-error-message"
                        >
                            {errorMessage}
                        </span>
                    )}

                    {/* Descrição opcional (não aparece se houver erro) */}
                    {!error && description && (
                        <p
                            data-slot="input-description"
                            className="input-description"
                        >
                            {description}
                        </p>
                    )}
                </div>
            </>
        );
    },
);
