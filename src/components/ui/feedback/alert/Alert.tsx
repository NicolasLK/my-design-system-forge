import { cn } from '@/lib/utils/cn';
import {
    getComponentColor,
    type ComponentColor,
} from '@/models/get-component-color';
import {
    getComponentVariant,
    type ComponentVariant,
} from '@/models/get-component-variant';
import type { ComponentProps, ReactNode } from 'react';
import './alert.css';

/* ============================================================
 * 🟦 Shared Types
 * ============================================================ */

interface IAlertRootProps extends ComponentProps<'div'> {
    /** Severidade do alerta (info, success, warning, error) */
    severity?: ComponentColor;
    /** Estilo visual (solid, outline, subtle, etc) */
    variant?: ComponentVariant;
    /** Opcional: Largura total */
    fullWidth?: boolean;
}

/* ============================================================
 * 🟦 ROOT (Container Principal)
 * ============================================================ */

export const AlertRoot = ({
    severity = 'info',
    variant = 'subtle',
    fullWidth = false,
    className,
    children,
    ...props
}: IAlertRootProps) => {
    // Gera classes como 'alert-info', 'alert-success', etc.
    const severityClass = getComponentColor(severity, 'alert');
    
    // Gera classes como 'alert-solid', 'alert-outline', etc.
    const variantClass = getComponentVariant(variant, 'alert');

    return (
        <div
            data-slot="alert-root"
            role="alert"
            className={cn(
                'alert',
                severityClass,
                variantClass,
                fullWidth && 'alert-full',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
};

/* ============================================================
 * 🟦 ICON (Slot para ícone)
 * ============================================================ */

interface IAlertIconProps extends ComponentProps<'span'> {
    children: ReactNode;
}

export const AlertIcon = ({ className, children, ...props }: IAlertIconProps) => {
    return (
        <span
            data-slot="alert-icon"
            className={cn('alert-icon', className)}
            aria-hidden="true"
            {...props}
        >
            {children}
        </span>
    );
};

/* ============================================================
 * 🟦 TITLE
 * ============================================================ */

export const AlertTitle = ({ className, children, ...props }: ComponentProps<'strong'>) => {
    return (
        <strong
            data-slot="alert-title"
            className={cn('alert-title', className)}
            {...props}
        >
            {children}
        </strong>
    );
};

/* ============================================================
 * 🟦 DESCRIPTION
 * ============================================================ */

export const AlertDescription = ({ className, children, ...props }: ComponentProps<'p'>) => {
    return (
        <p
            data-slot="alert-description"
            className={cn('alert-description', className)}
            {...props}
        >
            {children}
        </p>
    );
};