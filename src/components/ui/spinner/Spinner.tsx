import type { ReactNode } from "react"
import { getComponentSize, type ComponentSize } from "@/models/get-component-size"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { cn } from "@/lib/utils/cn"
import "./spinner.css"

interface ISpinnerProps {
    size?: ComponentSize
    variant?: ComponentColor
    width?: number | string;
    height?: number | string;
    animated?: boolean;
    children?: ReactNode;
    className?: string;
}

export const Spinner = ({
    size = "medium",
    variant = "default",
    width,
    height,
    animated = true,
    children,
    className
}: ISpinnerProps) => {
    const sizeClass = getComponentSize(size, "spinner") || "spinner-md";
    const colorClass = getComponentColor(variant, 'spinner')

    return (
        <>
            <div className="spinner-wrapper">
                <span
                    className={cn(
                        "spinner",
                        sizeClass,
                        colorClass,
                        !animated && "spinner-static",
                        className
                    )}
                    style={{
                        ...(width ? { width } : {}),
                        ...(height ? { height } : {})
                    }}
                    aria-hidden="true"
                />
                {children && (
                    <span className="spinner-text">{children}</span>
                )}
            </div>
        </>
    )
}

Spinner.displayName = "Spinner";