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
import './switch.css';

interface ISwitchProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> {
    /** Texto do rótulo, essencial para acessibilidade */
    label?: string;
    /** Descrição opcional exibida abaixo do switch */
    description?: ReactNode;
    /** Opcional: define o tamanho. 'medium' será o padrão. */
    switchSize?: ComponentSize;
    /** Opcional: estado checked inicial (controlado ou não) */
    checked?: boolean;
    /** Opcional: handler para mudança de estado */
    onCheckedChange?: (checked: boolean) => void;
    /** Opcional: define se o campo está com erro */
    error?: boolean;
    /** Opcional: mensagem de erro */
    errorMessage?: string;
}

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
    (
        {
            label,
            description,
            switchSize = 'md',
            checked,
            disabled = false,
            onCheckedChange,
            error = false,
            errorMessage,
            className,
            id: externalId,
            ...props
        },
        ref,
    ) => {
        const sizeClass = getComponentSize(switchSize, 'switch');
        const switchId = externalId || (label ? genUid(8) : undefined);

        const [isChecked, setIsChecked] = useControllableState<boolean>(
            checked,
            false,
            onCheckedChange,
        );

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (disabled) return;
            setIsChecked(e.target.checked);
        };

        return (
            <div
                data-slot="switch-root"
                className={cn('switch-root', className)}
            >
                <div className="switch-container">
                    <input
                        id={switchId}
                        ref={ref}
                        type="checkbox"
                        className="switch-input"
                        checked={isChecked}
                        disabled={disabled}
                        onChange={handleChange}
                        aria-invalid={error}
                        data-slot="switch-input"
                        {...props}
                    />

                    {/* Track & Thumb */}
                    <label
                        htmlFor={switchId}
                        className={cn(
                            'switch-track',
                            sizeClass,
                            error && 'switch-error',
                        )}
                        data-slot="switch-track"
                    >
                        <span
                            className="switch-thumb"
                            data-slot="switch-thumb"
                        ></span>
                    </label>

                    {/* Label Text */}
                    {label && (
                        <label
                            htmlFor={switchId}
                            className="switch-label"
                            data-slot="switch-label"
                        >
                            {label}
                        </label>
                    )}
                </div>

                {/* Error Message */}
                {error && errorMessage && (
                    <span
                        className="switch-error-message"
                        data-slot="switch-error-message"
                    >
                        {errorMessage}
                    </span>
                )}

                {/* Description */}
                {!error && description && (
                    <p
                        className="switch-description"
                        data-slot="switch-description"
                    >
                        {description}
                    </p>
                )}
            </div>
        );
    },
);

Switch.displayName = 'Switch';
