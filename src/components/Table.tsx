/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import "../styles/components/table.css"

interface IColumn {
    key: string
    label: string
    sortable?: boolean
}

interface ITableProps {
    columns: IColumn[]
    data: Record<string, any>[]
    striped?: boolean
    compact?: boolean
}

export const Table = ({
    columns,
    data,
    striped = false,
    compact = false
}: ITableProps) => {

    const [sortKey, setSortKey] = useState<string>("")
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

    const sortData = () => {
        if (!sortKey) return data

        return [...data].sort((a, b) => {
            const valA = a[sortKey]
            const valB = b[sortKey]

            if (valA < valB) return sortDir === "asc" ? -1 : 1
            if (valA > valB) return sortDir === "asc" ? 1 : -1
            return 0
        })
    }

    const toggleSort = (key: string) => {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc")
        } else {
            setSortKey(key)
            setSortDir("asc")
        }
    }

    return (
        <>
            <div className="table-container">
                <table className={`table ${striped ? "striped" : ""} ${compact ? "compact" : ""}`}>

                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th
                                    key={col.key}
                                    onClick={() => col.sortable && toggleSort(col.key)}
                                    className={col.sortable ? "sortable" : ""}
                                >
                                    {col.label}
                                    {sortKey === col.key && (
                                        <span className="sort-indicator">
                                            {sortDir === "asc" ? "▲" : "▼"}
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {sortData().map((row, idx) => (
                            <tr key={idx}>
                                {columns.map(col => (
                                    <td key={col.key}>{row[col.key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
