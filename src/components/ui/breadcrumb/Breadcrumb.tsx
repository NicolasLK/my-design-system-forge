import { forwardRef, type ComponentProps } from "react"
import { cn } from "@/lib/utils/cn";
import "./breadcrumb.css"


/* ============================================================
 * 🟦 ROOT (Componente NAV)
 * ============================================================ */

export const BreadcrumbRoot = forwardRef<HTMLElement, ComponentProps<"nav">>(
    ({ className, ...props }, ref) => {

        return (
            <>
                <nav
                    data-slot="breadcrumb-root"
                    className={cn("breadcrumb", className)}
                    aria-label="breadcrumb"
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 LIST
 * ============================================================ */

export const BreadcrumbList = forwardRef<HTMLOListElement, ComponentProps<"ol">>(
    ({ className, ...props }, ref) => {

        return (
            <>
                <ol
                    data-slot="breadcrumb-list"
                    className={cn("breadcrumb-list", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

/* ============================================================
 * 🟦 ITEM / LINK / PAGE / SEPARATOR / ELLIPSIS
 * ============================================================ */

export const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
    ({ className, ...props }, ref) => {

        return (
            <>
                <li
                    data-slot="breadcrumb-item"
                    className={cn("breadcrumb-item", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(
    ({ className, ...props }, ref) => {

        return (
            <>
                <a
                    data-slot="breadcrumb-link"
                    className={cn("breadcrumb-link", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
    ({ className, ...props }, ref) => {

        return (
            <>
                <span
                    data-slot="breadcrumb-page"
                    role="link"
                    aria-disabled="true"
                    aria-current="page"
                    className={cn("breadcrumb-current", className)}
                    ref={ref}
                    {...props}
                />
            </>
        )
    }
)

export const BreadcrumbSeparator = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
    ({ children, className, ...props }, ref) => {

        return (
            <>
                <span
                    data-slot="breadcrumb-separator"
                    role="presentation"
                    aria-hidden="true"
                    className={cn("breadcrumb-separator", className)}
                    ref={ref}
                    {...props}
                >
                    {children || "›"}
                </span>
            </>
        )
    }
)

export const BreadcrumbEllipsis = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
    ({ children, className, ...props }, ref) => {

        return (
            <>
                <span
                    data-slot="breadcrumb-ellipsis"
                    role="presentation"
                    aria-hidden="true"
                    className={cn("breadcrumb-ellipsis", className)}
                    ref={ref}
                    {...props}
                >
                    {children || "..."}
                </span>
            </>
        )
    }
)
