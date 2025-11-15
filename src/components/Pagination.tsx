import { getComponentSize, type ComponentSize } from "../models/get-component-size"
import "../styles/components/pagination.css"

interface IPaginationProps {
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
    size?: ComponentSize
}

export const Pagination = ({
    totalPages,
    currentPage,
    onPageChange,
    size = "medium",
}: IPaginationProps) => {
    const sizeClass = getComponentSize(size, "pagination")

    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page)
        }
    }

    const renderPages = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-button ${i === currentPage ? "active" : ""
                        } ${sizeClass}`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            )
        }
        return pages
    }

    return (
        <>
            <div className="pagination">
                <button
                    className="pagination-nav"
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ‹
                </button>

                {renderPages()}

                <button
                    className="pagination-nav"
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    ›
                </button>
            </div>
        </>
    )
}
