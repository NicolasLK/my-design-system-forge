import type { ComponentProps, ReactNode } from 'react'
import { getComponentColor, type ComponentColor } from '@/models/get-component-color'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { getComponentVariant, type ComponentVariant } from '@/models/get-component-variant'
import { cn } from '@/lib/utils/cn'
import './alert.css'


/* ============================================================
 * 🟦 Shared Types
 * ============================================================ */

interface IAlertRootProps extends ComponentProps<'div'> {
    /** A variante de cor */
    color?: ComponentColor
    /** Opcional: Visual da borda/fundo (padrão: light) */
    variant?: ComponentVariant;
    /** Tamanho (small, medium, large) */
    size?: ComponentSize
    /** Opcional: Largura total */
    fullWidth?: boolean
}

/* ============================================================
 * 🟦 ROOT (Container Principal)
 * ============================================================ */

export const AlertRoot = ({
    color = 'default',
    variant = 'light',
    size = 'medium',
    fullWidth = false,
    className,
    ...props
}: IAlertRootProps) => {


    const colorClass = getComponentColor(color, "alert");
    const sizeClass = getComponentSize(size, "alert");
    const visualClass = getComponentVariant(variant, "alert");

    const alertRootClasses = cn(
        "alert",
        colorClass,
        sizeClass,
        visualClass,
        fullWidth && "alert-full",
        className
    );

    return (
        <>
            <div
                data-slot="alert-root"
                className={alertRootClasses}
                role="alert"
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 ICON (Slot para ícone)
 * ============================================================ */

interface IAlertIconProps extends ComponentProps<'span'> {
    children: ReactNode;
}

export const AlertIcon = ({ className, ...props }: IAlertIconProps) => {

    return (
        <>
            <span
                data-slot="alert-icon"
                className={cn("alert-icon", className)}
                aria-hidden="true"
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 TITLE
 * ============================================================ */

export const AlertTitle = ({ className, ...props }: ComponentProps<'strong'>) => {

    return (
        <>
            <strong
                data-slot="alert-title"
                className={cn("alert-title", className)}
                {...props}
            />
        </>
    )
}

/* ============================================================
 * 🟦 DESCRIPTION
 * ============================================================ */

export const AlertDescription = ({ className, ...props }: ComponentProps<'p'>) => {

    return (
        <>
            <p
                data-slot="alert-description"
                className={cn("alert-description", className)}
                {...props}
            />
        </>
    )
}
