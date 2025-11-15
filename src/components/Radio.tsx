import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/radio.css"

interface IRadioProps {
    label?: string
    value: string
    name: string
    checked?: boolean
    onChange?: (value: string) => void
    disabled?: boolean
    size?: ComponentSize
}

export const Radio = ({
    label,
    value,
    name,
    checked,
    onChange,
    disabled = false,
    size = "medium",
}: IRadioProps) => {

    const sizeClass = getComponentSize(size, "radio")
    const finalSizeClass = sizeClass || "radio-md"

    return (
        <>
            <label className={`radio-wrapper ${disabled ? "disabled" : ""}`}>
                <input
                    type="radio"
                    value={value}
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={() => onChange?.(value)}
                />

                <span className={`radio-circle ${finalSizeClass}`} />

                {label && <span className="radio-label">{label}</span>}
            </label>
        </>
    )
}
