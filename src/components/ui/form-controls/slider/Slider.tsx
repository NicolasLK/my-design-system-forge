import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { useControllableState } from '@/models/hooks/useControllableState';
import {
    forwardRef,
    useMemo,
    type ChangeEvent,
    type InputHTMLAttributes,
    type ReactNode,
} from 'react';
import './slider.css';

interface ISliderProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /** Texto do rótulo */
    label?: string;
    /** Descrição opcional */
    description?: ReactNode;
    /** Valor mínimo (default: 0) */
    min?: number;
    /** Valor máximo (default: 100) */
    max?: number;
    /** Etapa de incremento (default: 1) */
    step?: number;
    /** Valor atual (controlado) */
    value?: number;
    /** Valor inicial (não controlado) */
    defaultValue?: number;
    /** Callback de mudança (retorna number) */
    onValueChange?: (value: number) => void;
    /** Callback nativo */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** Formatação do valor exibido (ex: R$ 100) */
    formatValue?: (value: number) => string;
    /** Mostrar valor numérico ao lado? */
    showValue?: boolean;
    /** Tamanho do slider */
    sliderSize?: ComponentSize;
    /** Estado de erro */
    error?: boolean;
    /** Mensagem de erro */
    errorMessage?: string;
}

export const Slider = forwardRef<HTMLInputElement, ISliderProps>(
    (
        {
            label,
            description,
            min = 0,
            max = 100,
            step = 1,
            value: valueProp,
            defaultValue,
            onValueChange,
            onChange,
            formatValue,
            showValue = false,
            sliderSize = 'md',
            error = false,
            errorMessage,
            disabled = false,
            className,
            id: externalId,
            style,
            ...props
        },
        ref,
    ) => {
        const [value, setValue] = useControllableState(
            valueProp,
            defaultValue || min,
            onValueChange,
        );

        const uniqueId = externalId || (label ? genUid(8) : undefined);
        const sliderId = uniqueId || undefined;
        const errorId = uniqueId ? `${uniqueId}-error` : undefined;
        const descriptionId = uniqueId ? `${uniqueId}-description` : undefined;

        const sizeClass = getComponentSize(sliderSize, 'slider');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (disabled) return;
            const newValue = Number(e.target.value);
            setValue(newValue);
            onChange?.(e);
        };

        const fillPercentage = useMemo(() => {
            if (max === min) return 0;
            const percent = ((value - min) / (max - min)) * 100;
            return Math.min(Math.max(percent, 0), 100); // Clamp entre 0 e 100
        }, [value, min, max]);

        const formattedValue = formatValue ? formatValue(value) : value;

        // Construção do aria-describedby
        const ariaDescribedBy = [
            error && errorMessage ? errorId : null,
            description ? descriptionId : null,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div
                data-slot="slider-root"
                className={cn(
                    'slider-root',
                    sizeClass,
                    error && 'slider-error',
                    disabled && 'slider-disabled',
                    className,
                )}
                style={
                    {
                        ...style,
                        '--slider-fill': `${fillPercentage}%`,
                    } as React.CSSProperties
                }
            >
                <div className="slider-header">
                    {label && (
                        <label
                            htmlFor={sliderId}
                            className="slider-label"
                            data-slot="slider-label"
                        >
                            {label}
                        </label>
                    )}
                    {showValue && (
                        <span
                            className="slider-value-display"
                            data-slot="slider-value-display"
                        >
                            {formattedValue}
                        </span>
                    )}
                </div>

                <div className="slider-track-container">
                    <input
                        id={sliderId}
                        ref={ref}
                        type="range"
                        className="slider-input"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        disabled={disabled}
                        onChange={handleChange}
                        aria-invalid={error}
                        aria-describedby={ariaDescribedBy || undefined}
                        data-slot="slider-input"
                        {...props}
                    />
                    <div className="slider-track" aria-hidden="true" />
                    <div className="slider-range" aria-hidden="true" />
                </div>

                {error && errorMessage && (
                    <span
                        id={errorId}
                        className="slider-error-message"
                        data-slot="slider-error-message"
                    >
                        {errorMessage}
                    </span>
                )}

                {!error && description && (
                    <p
                        id={descriptionId}
                        className="slider-description"
                        data-slot="slider-description"
                    >
                        {description}
                    </p>
                )}
            </div>
        );
    },
);

Slider.displayName = 'Slider';