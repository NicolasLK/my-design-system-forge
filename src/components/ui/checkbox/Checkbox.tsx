import type { ChangeEvent, InputHTMLAttributes } from "react"
import "./checkbox.css"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { cn } from "@/lib/utils/cn"

interface ICheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string
    onChange?: (checked: boolean) => void
    checkboxSize?: ComponentSize
    variant?: ComponentColor
    error?: boolean
}

export const Checkbox = ({
    label,
    checked,
    onChange,
    disabled = false,
    checkboxSize = "medium",
    variant = "primary",
    error = false,
    className,
    ...props
}: ICheckboxProps) => {

    const sizeClass = getComponentSize(checkboxSize, "checkbox")
    const colorClass = getComponentColor(variant, "checkbox")

    const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked)
    }

    return (
        <>
            <label className={cn(
                "checkbox-wrapper",
                disabled && "disabled",
                className
            )} htmlFor={checkboxId}
            >
                <input
                    id={checkboxId}
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onChange={handleChange}
                    {...props}
                />

                <span
                    className={cn(
                        "checkbox-box",
                        sizeClass,
                        colorClass,
                        error && "checkbox-error"
                    )}
                />

                {label && <span className="checkbox-label">{label}</span>}
            </label>
        </>
    )
}
