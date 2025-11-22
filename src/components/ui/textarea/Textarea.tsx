
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import "./textarea.css"
import type { TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils/cn"

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    value?: string
    defaultValue?: string
    placeholder?: string
    rows?: number
    disabled?: boolean
    error?: boolean
    errorMessage?: string
    size?: ComponentSize
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
    onChange,
    className,
    ...props
}: ITextareaProps) => {

    const sizeClass = getComponentSize(size, "textarea")
    const finalSizeClass = sizeClass || "textarea-md"

    const textareaId = `textarea-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <>
            <div className="textarea-wrapper">
                {label && <label htmlFor={textareaId} className="textarea-label">{label}</label>}

                <textarea
                    id={textareaId}
                    className={cn(
                        "textarea",
                        finalSizeClass,
                        error && "textarea-error",
                        className
                    )}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={rows}
                    onChange={onChange}
                    {...props}
                />

                {error && errorMessage && (
                    <small className="textarea-error-message">{errorMessage}</small>
                )}
            </div>
        </>
    )
}
