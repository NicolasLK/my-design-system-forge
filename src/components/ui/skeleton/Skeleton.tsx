import type { CSSProperties } from "react"
import "./skeleton.css"
import { cn } from "@/lib/utils/cn"

interface ISkeletonProps {
    width?: string | number
    height?: string | number
    count?: number
    circle?: boolean
    rounded?: boolean
    animated?: boolean;
    size?: "small" | "medium" | "large";
    className?: string;
}

export const Skeleton = ({
    width,
    height,
    count = 1,
    circle = false,
    rounded = false,
    animated = true,
    size = "medium",
    className
}: ISkeletonProps) => {

    const getSize = () => {
        switch (size) {
            case "small":
                return { height: "0.75rem" };
            case "large":
                return { height: "1.5rem" };
            case "medium":
            default:
                return { height: "1rem" };
        }
    }

    const baseSize = {
        ...getSize(),
        ...(width ? { width } : {}),
        ...(height ? { height } : {})
    };

    const elements = Array.from({ length: count });

    const style: CSSProperties = {
        ...baseSize,
        borderRadius: circle ? "50%" : rounded ? "var(--radius-md)" : "4px"
    }

    return (
        <>
            {elements.map((_, i) => (
                <div
                    key={i}
                    role="status"
                    aria-label="Carregando conteúdo"
                    className={cn(
                        "skeleton",
                        !animated && "skeleton-static",
                        className
                    )}
                    style={style}
                />
            ))}
        </>
    )
}
