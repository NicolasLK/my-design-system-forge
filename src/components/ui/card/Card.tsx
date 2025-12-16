import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn'
import './card.css'

interface ICardProps extends ComponentProps<"div"> {
    // Opcional: fullWidth programatico.
    fullWidth?: boolean
}

/* ============================================================
 * 🟦 BASE ROOT
 * ============================================================ */
export const CardRoot = ({ fullWidth = false, className, ...props }: ICardProps) => {


    return (
        <>
            <div
                data-slot="card"
                className={cn(
                    "card",
                    fullWidth && "card-full",
                    className
                )}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 HEADER
 * ============================================================ */
export const CardHeader = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-header"
                className={cn("card-header", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 TITLE
 * ============================================================ */
export const CardTitle = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-title"
                className={cn("card-title", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 DESCRIPTION
 * ============================================================ */
export const CardDescription = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-description"
                className={cn("card-description", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 ACTION (Botão no cabeçalho)
 * ============================================================ */
export const CardAction = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-action"
                className={cn("card-action", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
export const CardContent = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-content"
                className={cn("card-content", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 FOOTER
 * ============================================================ */
export const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {

    return (
        <>
            <div
                data-slot="card-footer"
                className={cn("card-footer", className)}
                {...props}
            />
        </>
    )
}