import { useMemo, useState, type ChangeEvent, type ChangeEventHandler, type InputHTMLAttributes } from "react"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { cn } from "@/lib/utils/cn"
import "./slider.css"

interface ISliderProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Valor mínimo */
    min?: number
    /** Valor máximo */
    max?: number
    /** Valor inicial, não controlado */
    defaultValue?: number
    /** Valor inicial, controlado */
    value?: number
    /** Etapas (incrementos) */
    step?: number
    /** Mostrar valor atual */
    showValue?: boolean
    /** Tamanho (small, medium, large) */
    componentSize?: ComponentSize
    /** Largura total */
    full?: boolean
    /** Callback ao alterar o valor (retorna apenas o número) */
    onValueChange?: (value: number) => void
    /** Callback ao alterar */
    onChange?: ChangeEventHandler<HTMLInputElement>
    /** Classe CSS adicional */
    className?: string
}

export const Slider = ({
    min = 0,
    max = 100,
    defaultValue = 50,
    value: controlledValue,
    step = 1,
    showValue = true,
    componentSize = 'medium',
    full,
    onValueChange,
    onChange: nativeOnChange,
    className,
    ...props
}: ISliderProps) => {

    const isControlled = controlledValue !== undefined;
    const initialValue = isControlled ? controlledValue : defaultValue;

    /**
     * Estado para valores não controlados
     */
    const [uncontrolledValue, setUncontrolledValue] = useState(initialValue);

    /**
     * Valor atual a ser usado e renderizado
     */
    const currentValue = isControlled ? controlledValue : uncontrolledValue;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)

        if (!isControlled) {
            setUncontrolledValue(val);
        }

        /**
         * Chama o callback personalizado (number)
         */
        onValueChange?.(val);

        /**
         * Chama o callback nativo (event)
         */
        nativeOnChange?.(e);
    }

    const fillPercentage = useMemo(() => {
        const numericMin = min;
        const numericMax = max;
        const numericValue = currentValue;

        if (numericMax === numericMin) return 0;

        return ((numericValue - numericMin) / (numericMax - numericMin)) * 100;
    }, [currentValue, min, max]);

    const isFull = full || className?.includes('slider-full');
    const sizeClass = getComponentSize(componentSize, 'slider');

    return (
        <>
            <div
                data-slot="slider-root"
                className={cn(
                    "slider-root",
                    isFull && "slider-full",
                    sizeClass,
                    className
                )}
            >
                <input
                    data-slot="slider-input"
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={currentValue}
                    onChange={handleChange}
                    style={{
                        background: `linear-gradient(to right, var(--slider-range-color) 0%, var(--slider-range-color) ${fillPercentage}%, var(--slider-track-color) ${fillPercentage}%, var(--slider-track-color) 100%)`
                    }}
                    className="slider-input"
                    {...props}
                />
                {showValue &&
                    <span
                        data-slot="slider-value"
                        className="slider-value"
                    >
                        {currentValue}
                    </span>
                }
            </div>
        </>
    )
}
