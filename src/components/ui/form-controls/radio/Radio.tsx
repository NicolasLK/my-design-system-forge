import { useRadioGroupContext } from '@/contexts/components/radio-group/RadioGroupContext';
import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import {
    forwardRef,
    type InputHTMLAttributes,
    type ReactNode,
} from 'react';
import './radio.css';

interface IRadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /** Texto do rótulo */
    label?: string;
    /** Valor do radio button */
    value: string;
    /** Nome do grupo de radio buttons */
    name?: string;
    /** Descrição opcional exibida abaixo do radio */
    description?: ReactNode;
    /** Estado checked */
    checked?: boolean;
    /** Callback de alteração de estado */
    onChange?: (value: string) => void;
    /** Tamanho do radio */
    radioSize?: ComponentSize;
    /** Estado de erro */
    error?: boolean;
    /** Mensagem de erro */
    errorMessage?: string;
}

export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
    (
        {
            label,
            value,
            name: nameProp,
            description,
            checked: checkedProp,
            onChange: onChangeProp,
            radioSize = 'md',
            error: errorProp = false,
            errorMessage,
            disabled: disabledProp = false,
            className,
            id: externalId,
            ...props
        },
        ref,
    ) => {
        const groupContext = useRadioGroupContext();

        // Valores finais (Contexto > Local)
        const name = groupContext?.name || nameProp;
        const disabled = groupContext?.disabled || disabledProp;
        const error = groupContext?.error || errorProp;
        const finalSize = groupContext?.radioSize || radioSize;
        
        // Lógica de Checked e Change (Contexto > Local)
        const isChecked = groupContext ? groupContext.value === value : checkedProp;
        
        const handleChange = () => {
            if (disabled) return;
            
            if (groupContext) {
                groupContext.onValueChange(value);
            } else {
                onChangeProp?.(value);
            }
        };

        const uniqueId = externalId || (label ? genUid(8) : undefined);
        const sizeClass = getComponentSize(finalSize, 'radio');

        return (
            <div
                data-slot="radio-root"
                className={cn('radio-root', className)}
            >
                <div className="radio-container">
                    <input
                        id={uniqueId}
                        ref={ref}
                        type="radio"
                        className="radio-input"
                        value={value}
                        name={name}
                        checked={isChecked}
                        disabled={disabled}
                        onChange={handleChange}
                        aria-invalid={error}
                        data-slot="radio-input"
                        {...props}
                    />

                    <div
                        className={cn(
                            'radio-indicator',
                            sizeClass,
                            isChecked && 'radio-checked',
                            disabled && 'radio-disabled',
                            error && 'radio-error',
                        )}
                        aria-hidden="true"
                        onClick={() => !disabled && document.getElementById(uniqueId!)?.click()}
                        data-slot="radio-indicator"
                    >
                        <span className="radio-dot" />
                    </div>

                    {label && (
                        <label
                            htmlFor={uniqueId}
                            className={cn(
                                'radio-label',
                                disabled && 'radio-label-disabled',
                            )}
                            data-slot="radio-label"
                        >
                            {label}
                        </label>
                    )}
                </div>

                {error && errorMessage && (
                    <span
                        className="radio-error-message"
                        data-slot="radio-error-message"
                    >
                        {errorMessage}
                    </span>
                )}

                {!error && description && (
                    <p
                        className="radio-description"
                        data-slot="radio-description"
                    >
                        {description}
                    </p>
                )}
            </div>
        );
    },
);

Radio.displayName = 'Radio';
