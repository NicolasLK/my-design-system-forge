import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { forwardRef, type TextareaHTMLAttributes, type ReactNode } from 'react';
import './textarea.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Texto do rótulo */
    label?: string;
    /** Texto de descrição abaixo do campo */
    description?: ReactNode;
    /** Opcional: Define o tamanho. 'medium' será o padrão */
    size?: ComponentSize;
    /** Opcional: Ativa o estado de erro */
    error?: boolean;
    /** Opcional: mensagem de erro */
    errorMessage?: string;
    /** Opcional: fullWidth programatico */
    fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
    (
        {
            label,
            description,
            size = 'md',
            error = false,
            errorMessage,
            fullWidth = false,
            className,
            id: externalId,
            disabled = false,
            ...props
        },
        ref,
    ) => {
        /**
         * Gera um ID único apenas se não houver um ID externo
         */
        const textareaId = externalId || (label ? genUid(8) : undefined);

        const sizeClass = getComponentSize(size, 'textarea');
        const errorClass = error ? 'textarea-error' : '';

        return (
            <div
                data-slot="textarea-root"
                className={cn(
                    'textarea-root',
                    fullWidth && 'textarea-full',
                    sizeClass,
                    className,
                )}
            >
                {label && (
                    <label
                        data-slot="textarea-label"
                        htmlFor={textareaId}
                        className="textarea-label"
                    >
                        {label}
                    </label>
                )}

                <textarea
                    id={textareaId}
                    ref={ref}
                    data-slot="textarea-field"
                    className={cn('textarea-field', errorClass)}
                    disabled={disabled}
                    aria-invalid={error}
                    {...props}
                />

                {error && errorMessage && (
                    <span
                        data-slot="textarea-error-message"
                        className="textarea-error-message"
                    >
                        {errorMessage}
                    </span>
                )}

                {!error && description && (
                    <p
                        data-slot="textarea-description"
                        className="textarea-description"
                    >
                        {description}
                    </p>
                )}
            </div>
        );
    },
);

Textarea.displayName = 'Textarea';
