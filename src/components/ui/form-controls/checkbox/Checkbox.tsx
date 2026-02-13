import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { useControllableState } from '@/models/hooks/useControllableState';
import {
    forwardRef,
    type ChangeEvent,
    type InputHTMLAttributes,
    type ReactNode,
} from 'react';
import './checkbox.css';

interface ICheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /** Texto do rótulo */
    label?: string;
    /** Descrição opcional exibida abaixo do checkbox */
    description?: ReactNode;
    /** Estado checked (controlado) */
    checked?: boolean;
    /** Estado checked inicial (não controlado) */
    defaultChecked?: boolean;
    /** Callback de alteração de estado */
    onCheckedChange?: (checked: boolean) => void;
    /** Tamanho do checkbox */
    checkboxSize?: ComponentSize;
    /** Estado de erro */
    error?: boolean;
    /** Mensagem de erro */
    errorMessage?: string;
}

const CheckIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    (
        {
            label,
            description,
            checked: checkedProp,
            defaultChecked,
            onCheckedChange,
            checkboxSize = 'md',
            error = false,
            errorMessage,
            disabled = false,
            className,
            id: externalId,
            ...props
        },
        ref,
    ) => {
        const [checked, setChecked] = useControllableState<boolean>(
            checkedProp,
            defaultChecked || false,
            onCheckedChange,
        );

        const uniqueId = externalId || (label ? genUid(8) : undefined);
        const sizeClass = getComponentSize(checkboxSize, 'checkbox');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (disabled) return;
            setChecked(e.target.checked);
        };

        return (
            <div
                data-slot="checkbox-root"
                className={cn('checkbox-root', className)}
            >
                <div className="checkbox-container">
                    <input
                        id={uniqueId}
                        ref={ref}
                        type="checkbox"
                        className="checkbox-input"
                        checked={checked}
                        disabled={disabled}
                        onChange={handleChange}
                        aria-invalid={error}
                        data-slot="checkbox-input"
                        {...props}
                    />

                    <div
                        className={cn(
                            'checkbox-indicator',
                            sizeClass,
                            checked && 'checkbox-checked',
                            disabled && 'checkbox-disabled',
                            error && 'checkbox-error',
                        )}
                        aria-hidden="true"
                        onClick={() => !disabled && document.getElementById(uniqueId!)?.click()}
                        data-slot="checkbox-indicator"
                    >
                        {checked && <CheckIcon className="checkbox-icon" />}
                    </div>

                    {label && (
                        <label
                            htmlFor={uniqueId}
                            className={cn(
                                'checkbox-label',
                                disabled && 'checkbox-label-disabled',
                            )}
                            data-slot="checkbox-label"
                        >
                            {label}
                        </label>
                    )}
                </div>

                {error && errorMessage && (
                    <span
                        className="checkbox-error-message"
                        data-slot="checkbox-error-message"
                    >
                        {errorMessage}
                    </span>
                )}

                {!error && description && (
                    <p
                        className="checkbox-description"
                        data-slot="checkbox-description"
                    >
                        {description}
                    </p>
                )}
            </div>
        );
    },
);

Checkbox.displayName = 'Checkbox';