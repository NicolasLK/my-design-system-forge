import type { ReactNode } from "react"
import "../styles/components/breadcrumb.css"

interface IBreadcrumbItem {
    label: string
    href?: string
    icon?: ReactNode
    onClick?: () => void
}

interface IBreadcrumbProps {
    items: IBreadcrumbItem[]
    separator?: ReactNode | string
}

export const Breadcrumb = ({ items, separator = "›" }: IBreadcrumbProps) => {
    return (
        <>
            <nav className="breadcrumb" aria-label="breadcrumb">
                <ol className="breadcrumb-list">
                    {items.map((item, index) => (
                        <li key={index} className="breadcrumb-item">
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="breadcrumb-link"
                                    onClick={item.onClick}
                                >
                                    {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                                    {item.label}
                                </a>
                            ) : (
                                <span className="breadcrumb-current">
                                    {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                                    {item.label}
                                </span>
                            )}

                            {index < items.length - 1 && (
                                <span className="breadcrumb-separator">{separator}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
}
