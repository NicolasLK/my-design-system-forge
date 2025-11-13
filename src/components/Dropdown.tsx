import { useState, type ReactNode } from "react"
import "../styles/components/dropdown.css"

interface IDropdownProps {
    label: string
    children: ReactNode
}

export const Dropdown = ({ label, children }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen((prev) => !prev)
    const closeDropdown = () => setIsOpen(false)

    return (
        <>
            <div className="dropdown" onMouseLeave={closeDropdown}>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    {label}
                    <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
                </button>
                {isOpen && <div className="dropdown-menu">{children}</div>}
            </div>
        </>
    )
}
