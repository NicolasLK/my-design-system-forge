import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/textarea.css"

interface ITextareaProps {
    label?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    rows?: number
    disabled?: boolean
    error?: boolean
    errorMessage?: string
    size?: ComponentSize
    onChange?: (value: string) => void
}

export const Textarea = ({
    label,
    value,
    defaultValue,
    placeholder = "Digite aqui...",
    rows = 4,
    disabled = false,
    error = false,
    errorMessage,
    size = "medium",
    onChange
}: ITextareaProps) => {

    const sizeClass = getComponentSize(size, "textarea")
    const finalSizeClass = sizeClass || "textarea-md"

    return (
        <>
            <div className="textarea-wrapper">
                {label && <label className="textarea-label">{label}</label>}

                <textarea
                    className={`textarea ${finalSizeClass} ${error ? "textarea-error" : ""}`}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={rows}
                    onChange={(e) => onChange?.(e.target.value)}
                />

                {error && errorMessage && (
                    <small className="textarea-error-message">{errorMessage}</small>
                )}
            </div>
        </>
    )
}
