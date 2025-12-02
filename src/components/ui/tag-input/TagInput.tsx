import { useState, type KeyboardEvent } from "react"
import "./tag-input.css"

interface ITagInputProps {
    label?: string
    placeholder?: string
    defaultTags?: string[]
    disabled?: boolean
    onChange?: (tags: string[]) => void
}

export const TagInput = ({
    label,
    placeholder = "Digite e pressione Enter",
    defaultTags = [],
    disabled = false,
    onChange
}: ITagInputProps) => {

    const [tags, setTags] = useState<string[]>(defaultTags)
    const [inputValue, setInputValue] = useState("")

    const addTag = (value: string) => {
        const tag = value.trim()
        if (!tag || tags.includes(tag)) return

        const updated = [...tags, tag]
        setTags(updated)
        onChange?.(updated)
    }

    const removeTag = (tag: string) => {
        const updated = tags.filter(t => t !== tag)
        setTags(updated)
        onChange?.(updated)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addTag(inputValue)
            setInputValue("")
        }
    }

    return (
        <>
            <div className={`taginput-wrapper ${disabled ? "disabled" : ""}`}>
                {label && <label className="taginput-label">{label}</label>}

                <div className="taginput-box">
                    {tags.map(tag => (
                        <span key={tag} className="taginput-tag">
                            {tag}
                            {!disabled && (
                                <button onClick={() => removeTag(tag)} className="taginput-remove">
                                    ×
                                </button>
                            )}
                        </span>
                    ))}

                    <input
                        className="taginput-input"
                        placeholder={placeholder}
                        value={inputValue}
                        disabled={disabled}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </>
    )
}
