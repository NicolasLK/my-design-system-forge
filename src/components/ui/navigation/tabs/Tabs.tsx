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
                role="tablist"
                aria-orientation="horizontal"
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
    icon?: ReactNode
    disabled?: boolean
}

export const TabsTrigger = ({
    className,
    value,
    isActive,
    onSelect,
    children,
    icon,
    disabled,
    ...props
}: ITabsTriggerProps) => {

    return (
        <>
            <button
                id={`tab-${value}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${value}`}
                disabled={disabled}
                data-slot="tabs-trigger"
                data-state={isActive ? "active" : "inactive"}
                onClick={() => !disabled && onSelect?.(value)}
                className={cn("tabs-trigger", className)}
                {...props}
            >
                {icon &&
                    <span className="tabs-trigger-icon">
                        {icon}
                    </span>
                }
                {children}
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
type AnimationTabsType = "none" | "fade" | "slide" | "scale" | "dissolve"

interface ITabsContentProps extends ComponentProps<"div"> {
    value: string
    activeValue?: string
    animation?: AnimationTabsType
}

export const TabsContent = ({
    className,
    value,
    activeValue,
    children,
    animation = "none",
    ...props
}: ITabsContentProps) => {
    const isActive = value === activeValue

    return (
        <>
            <div
                id={`panel-${value}`}
                role="tabpanel"
                aria-labelledby={`tab-${value}`}
                data-slot="tabs-content"
                data-active={isActive}
                data-animation={animation}
                className={cn("tabs-content", className)}
                {...props}
            >
                {children}
            </div>
        </>
    )
}