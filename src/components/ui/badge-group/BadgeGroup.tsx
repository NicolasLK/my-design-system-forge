import type { ReactNode } from "react"
import "./badge-group.css"

interface IBadgeGroupProps {
    /** Elementos de badge */
    children: ReactNode
    /** Espaçamento entre badges */
    spacing?: string
    /** Limita a quantidade visível (opcional) */
    maxVisible?: number
}

export const BadgeGroup = ({ children, spacing = "var(--space-2)", maxVisible }: IBadgeGroupProps) => {
    const badgesArray = Array.isArray(children) ? children : [children]
    const visibleBadges = maxVisible ? badgesArray.slice(0, maxVisible) : badgesArray
    const hiddenCount = maxVisible && badgesArray.length > maxVisible ? badgesArray.length - maxVisible : 0

    return (
        <>
            <div className="badge-group" style={{ gap: spacing }}>
                {visibleBadges}
                {hiddenCount > 0 && (
                    <span className="badge-more">+{hiddenCount}</span>
                )}
            </div>
        </>
    )
}
