import { useCallback, useState } from "react"

export function useAccordion(defaultOpen: string[] = []) {
    const [openItems, setOpenItems] = useState(defaultOpen)

    const toggle = useCallback((value: string) => {
        setOpenItems(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        )
    }, [])

    const isOpen = useCallback(
        (value: string) => openItems.includes(value),
        [openItems]
    )

    return { openItems, toggle, isOpen }
}
