import type { ChangeEvent } from "react"
import { getComponentColor, type ComponentColor } from "../models/get-component-color"
import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/checkbox.css"

interface ICheckboxProps {
    label?: string
    checked?: boolean
    defaultChecked?: boolean
    onChange?: (checked: boolean) => void
    disabled?: boolean
    size?: ComponentSize
    variant?: ComponentColor
    error?: boolean
}

export const Checkbox = ({
    label,
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    size = "medium",
    variant = "primary",
    error = false
}: ICheckboxProps) => {

    const sizeClass = getComponentSize(size, "checkbox")
    const colorClass = getComponentColor(variant, "checkbox")
    const finalSizeClass = sizeClass || "checkbox-md"

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked)
    }

    return (
        <>
            <label className={`checkbox-wrapper ${disabled ? "disabled" : ""}`}>
                <input
                    type="checkbox"
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    checked={checked}
                    onChange={handleChange}
                />

                <span
                    className={[
                        "checkbox-box",
                        finalSizeClass,
                        colorClass,
                        error && "checkbox-error"
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />

                {label && <span className="checkbox-label">{label}</span>}
            </label>
        </>
    )
}
