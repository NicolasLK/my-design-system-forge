
"use client";

import { forwardRef, type ComponentProps, type ReactNode } from "react"
import { cn } from "@/lib/utils/cn";
import "./table.css"


/* ============================================================
 * 🟦 ROOT
 * ============================================================ */
interface ITableRootProps extends ComponentProps<"table"> {
    children: ReactNode;
    striped?: boolean;
    compact?: boolean;
    className?: string;
}

export const TableRoot = forwardRef<HTMLTableElement, ITableRootProps>(
    ({
        children,
        striped = false,
        compact = false,
        className,
        ...props
    }, ref) => {

        return (
            <>
                <div data-slot="table-container" className="table-container">
                    <table
                        data-slot="table"
                        data-striped={striped}
                        data-compact={compact}
                        className={cn(
                            "table",
                            striped && "table-striped",
                            compact && "table-compact",
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {children}
                    </table>
                </div>
            </>
        )

    }
)

/* ============================================================
 * 🟦 HEADER
 * ============================================================ */

export const TableHeader = forwardRef<HTMLTableSectionElement, ComponentProps<"thead">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <thead
                    data-slot="table-header"
                    className={cn("table-header", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 BODY
 * ============================================================ */

export const TableBody = forwardRef<HTMLTableSectionElement, ComponentProps<"tbody">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <tbody
                    data-slot="table-body"
                    className={cn("table-body", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 FOOTER
 * ============================================================ */

export const TableFooter = forwardRef<HTMLTableSectionElement, React.ComponentProps<"tfoot">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <tfoot
                    data-slot="table-footer"
                    className={cn("table-footer", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 SUB COMPONENTS (Row, Head, Cell e Caption)
 * ============================================================ */

export const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <tr
                    data-slot="table-row"
                    className={cn("table-row", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const TableHead = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <th
                    data-slot="table-head"
                    className={cn("table-head", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const TableCell = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <td
                    data-slot="table-cell"
                    className={cn("table-cell", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const TableCaption = forwardRef<HTMLTableCaptionElement, ComponentProps<"caption">>(
    ({
        className,
        ...props
    }, ref) => {

        return (
            <>
                <caption
                    data-slot="table-caption"
                    className={cn("table-caption", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)
