import { useEffect, useRef, useState } from "react"
import "../styles/components/select.css"

interface ISelectOption {
    value: string
    label: string
}

interface ISelectProps {
    label?: string
    options: ISelectOption[]
    placeholder?: string
    onChange?: (value: string) => void
    disabled?: boolean
}

export const Select = ({
    label,
    options,
    placeholder = "Selecione uma opção",
    onChange,
    disabled = false,
}: ISelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<string>("")
    const containerRef = useRef<HTMLDivElement>(null)

    const handleSelect = (value: string) => {
        setSelected(value)
        onChange?.(value)
        setIsOpen(false)
    }


    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            <div
                ref={containerRef}
                className={`select-wrapper ${disabled ? "select-disabled" : ""}`}
            >
                {label && <label className="select-label">{label}</label>}

                <button
                    type="button"
                    className={`select-input ${isOpen ? "open" : ""}`}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                >
                    <span>
                        {selected
                            ? options.find((opt) => opt.value === selected)?.label
                            : placeholder}
                    </span>
                    <span className={`select-arrow ${isOpen ? "rotate" : ""}`}>▾</span>
                </button>

                {isOpen && (
                    <ul className="select-menu">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={`select-option ${option.value === selected ? "selected" : ""
                                    }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
