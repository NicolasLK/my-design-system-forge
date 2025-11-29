"use client"

import { type ComponentProps, type ReactNode } from "react"
import "./tabs.css"
import { cn } from "@/lib/utils/cn"

/* ============================================================
 * 🟦 TABS ROOT
 * ============================================================ */
export const TabsRoot = ({
    className,
    ...props
}: ComponentProps<"div"> & { defaultValue?: string }) => {

    return (
        <>
            <div
                data-slot="tabs"
                className={cn("tabs-root", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 LIST
 * ============================================================ */
export const TabsList = ({
    className,
    ...props
}: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="tabs-list"
                role="tablist"
                className={cn("tabs-list", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 TRIGGER (Aba)
 * ============================================================ */
interface ITabsTriggerProps {
    value: string
    isActive?: boolean
    onSelect?: (value: string) => void
    className?: string
    children?: ReactNode
    disabled?: boolean
}

export const TabsTrigger = ({
    className,
    value,
    isActive,
    onSelect,
    children,
    ...props
}: ITabsTriggerProps) => {

    return (
        <>
            <button
                role="tab"
                data-slot="tabs-trigger"
                data-state={isActive ? "active" : "inactive"}
                onClick={() => onSelect?.(value)}
                className={cn("tabs-trigger", className)}
                {...props}
            >
                {children}
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
interface ITabsContentProps extends ComponentProps<"div"> {
    value: string
    activeValue?: string
}

export const TabsContent = ({
    className,
    value,
    activeValue,
    children,
    ...props
}: ITabsContentProps) => {
    const isActive = value === activeValue

    return (
        <>
            <div
                role="tabpanel"
                hidden={!isActive}
                data-slot="tabs-content"
                className={cn("tabs-content", className)}
                {...props}
            >
                {children}
            </div>
        </>
    )
}