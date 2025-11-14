import { useState } from "react"
import "../styles/components/slider.css"

interface ISliderProps {
    /** Valor mínimo */
    min?: number
    /** Valor máximo */
    max?: number
    /** Valor inicial */
    defaultValue?: number
    /** Etapas (incrementos) */
    step?: number
    /** Mostrar valor atual */
    showValue?: boolean
    /** Callback ao alterar */
    onChange?: (value: number) => void
}

export const Slider = ({
    min = 0,
    max = 100,
    defaultValue = 50,
    step = 1,
    showValue = true,
    onChange,
}: ISliderProps) => {
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        setValue(val)
        onChange?.(val)
    }

    return (
        <>
            <div className="slider">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="slider-input"
                />
                {showValue && <span className="slider-value">{value}</span>}
            </div>
        </>
    )
}
