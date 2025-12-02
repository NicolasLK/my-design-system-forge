/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, type ComponentProps, type ReactElement, type ReactNode } from "react"
import { useBreakpoint, type BreakpointKey } from "@/models/hooks/useBreakpoint";
import { getComponentColor, type ComponentColor } from "@/models/get-component-color";
import { getComponentSize, type ComponentSize } from "@/models/get-component-size";
import { getComponentVariant, type ComponentVariant } from "@/models/get-component-variant";
import { createComponentInjection } from "@/models/create-component-injection";
import { cn } from "@/lib/utils/cn";
import "./dropdown.css"

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */
interface IDropdownRootProps {
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    closeOnSelect?: boolean;
    className?: string;
    contentFull?: boolean;
    triggerFull?: boolean;
    full?: boolean;
    mobileBreakpoint?: BreakpointKey;
}

export const DropdownRoot = ({
    children,
    open,
    onOpenChange,
    closeOnSelect = true,
    className,
    contentFull = false,
    triggerFull = false,
    full = false,
    mobileBreakpoint = "md",
}: IDropdownRootProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isMobile = useBreakpoint(mobileBreakpoint);

    // Fecha ao clicar fora
    useEffect(() => {
        if (isMobile) return;

        const handler = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOpenChange(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onOpenChange, isMobile]);

    /**
     * Lógica unificada para props 'full'
     */
    const contentIsFull = contentFull || full;
    const triggerIsFull = triggerFull || full;

    /**
     * Handlers que serão injetados nos filhos
     */
    const injected = {
        open,
        onOpenChange,
        closeOnSelect,
        isMobile,
        contentIsFull,
        triggerIsFull
    };

    return (
        <div
            ref={ref}
            data-slot="dropdown-root"
            data-open={open}
            className={cn(
                "dropdown-root",
                (contentIsFull || triggerIsFull) && "dropdown-root-full",
                className
            )}
        >
            {/* Overlay em Mobile */}
            {open && isMobile && (
                <>
                    <div
                        className="dropdown-overlay"
                        onClick={() => onOpenChange(false)}
                        data-slot="dropdown-overlay"
                    />
                </>
            )}
            {createComponentInjection({
                children,
                injected,
                transformer: dropdownTransformer
            })}
        </div>
    );
}


/* ============================================================
 * 🟦 TRIGGER
 * ============================================================ */
interface IDropdownTriggerProps extends ComponentProps<"button"> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerIsFull?: boolean;
}

export const DropdownTrigger = ({
    className,
    children,
    open,
    onOpenChange,
    triggerIsFull = false,
    ...props
}: IDropdownTriggerProps) => {

    return (
        <>
            <button
                type="button"
                data-slot="dropdown-trigger"
                aria-expanded={open}
                onClick={() => { onOpenChange?.(!open) }}
                className={cn(
                    "dropdown-trigger",
                    triggerIsFull && "dropdown-trigger-full",
                    className
                )}
                {...props}
            >
                <span>{children}</span>
                {/* Ícone de seta no final (como em Radix/ShadCN) */}
                <span className={cn("dropdown-arrow", open && "rotate")}>▾</span>
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
interface IDropdownContentProps extends ComponentProps<"div"> {
    open?: boolean;
    align?: "start" | "center" | "end";
    side?: "bottom" | "top" | "left" | "right";
    size?: ComponentSize;
    color?: ComponentColor;
    variant?: ComponentVariant;
    closeOnSelect?: boolean;
    onOpenChange?: (open: boolean) => void;
    isMobile?: boolean;
    contentIsFull?: boolean;
}

export const DropdownContent = ({
    open = false,
    side = "bottom",
    align = "start",
    size = "medium",
    color = "default",
    variant = "default",
    className,
    children,
    closeOnSelect = true,
    onOpenChange,
    isMobile = false,
    contentIsFull = false,
    ...props
}: IDropdownContentProps) => {
    if (!open && !isMobile) return null;

    const classColor = getComponentColor(color, "dropdown");
    const classSize = getComponentSize(size, "dropdown");
    const classVariant = getComponentVariant(variant, "dropdown");

    /**
     * Função para fechar o Dropdown após um clique
     */
    const handleClose = () => {
        if (closeOnSelect) onOpenChange?.(false);
    };

    type ButtonElement = ReactElement<ComponentProps<'button'>>;

    /**
     * Mapeia filhos diretamente para injetar a lógica de fechamento
     */
    const mappedChildren = Children.map(children, (child) => {
        if (!isValidElement(child)) {
            return child;
        }

        // Se for um Item, injeta a lógica de fechar (handleClose)
        if (child.type === DropdownItem) {
            return cloneElement(child as ButtonElement, {
                onClick: (e) => {
                    (child.props as ComponentProps<'button'>).onClick?.(e);
                    handleClose();
                }
            })
        }

        // Se for um SubTrigger, não faz nada (não deve fechar o menu principal)
        if (child.type === DropdownSubTrigger) {
            return child;
        }

        return child;
    })

    return (
        <>
            <div
                data-slot="dropdown-content"
                data-side={side}
                data-align={align}
                className={cn(
                    "dropdown-content",
                    isMobile && open && "dropdown-sheet-open",
                    isMobile && !open && "dropdown-sheet-closed",
                    classColor,
                    classSize,
                    classVariant,
                    isMobile && "dropdown-mobile",
                    contentIsFull && "dropdown-content-full",
                    className
                )}
                {...props}
            >
                {mappedChildren}
            </div>
        </>
    )
}

/* ============================================================
 * 🟦 ITEM
 * ============================================================ */
interface DropdownItemProps extends ComponentProps<"button"> {
    variant?: ComponentVariant
    inset?: boolean;
}

export const DropdownItem = ({
    className,
    children,
    variant = "default",
    inset = false,
    ...props
}: DropdownItemProps) => {

    return (
        <>
            <button
                data-slot="dropdown-item"
                data-variant={variant}
                data-inset={inset}
                className={cn(
                    "dropdown-item",
                    variant === "destructive" && "dropdown-item-destructive",
                    inset && "dropdown-item-inset",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 SUBTRIGGER
 * ============================================================ */
interface DropdownSubTriggerProps extends ComponentProps<"button"> {
    open?: boolean;
    setSubOpen?: (open: boolean) => void;
    inset?: boolean;
}

export const DropdownSubTrigger = ({
    children,
    open,
    setSubOpen,
    className,
    inset = false,
    ...props
}: DropdownSubTriggerProps) => {

    return (
        <>
            <button
                data-slot="dropdown-subtrigger"
                data-inset={inset}
                className={cn(
                    "dropdown-subtrigger",
                    inset && "dropdown-subtrigger-inset",
                    className
                )}
                onClick={() => { setSubOpen?.(!open) }}
                {...props}
            >
                <span>{children}</span>
                <span className={cn("dropdown-sub-arrow", open && "rotate")}>▸</span>
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 SUBCONTENT
 * ============================================================ */
interface DropdownSubContentProps extends ComponentProps<"div"> {
    open?: boolean;
}

export const DropdownSubContent = ({
    open,
    className,
    children,
    ...props
}: DropdownSubContentProps) => {
    if (!open) return null;

    return (
        <>
            <div
                data-slot="dropdown-subcontent"
                className={cn("dropdown-subcontent", className)}
                {...props}
            >
                {children}
            </div>
        </>
    )
}

/* ============================================================
 * 🧩 Transformer: Para injetar props automaticamente nos childrens
 * ============================================================ */
function dropdownTransformer(
    elementType: any,
    originalProps: Record<string, unknown>,
    injected: Record<string, unknown>
) {
    // Trigger → injeta open + onOpenChange + triggerIsFull
    if (elementType === DropdownTrigger) {
        return {
            open: injected.open,
            onOpenChange: injected.onOpenChange,
            triggerIsFull: injected.triggerIsFull,
        };
    }

    // Content → injeta open + closeOnSelect + onOpenChange + isMobile + contentIsFull
    if (elementType === DropdownContent) {
        return {
            open: injected.open,
            onOpenChange: injected.onOpenChange,
            isMobile: injected.isMobile,
            contentIsFull: injected.contentIsFull,
        };
    }

    // SubTrigger / SubContent → injeta open/setSubOpen apenas se o componente tiver esses estados
    if (elementType === DropdownSubTrigger || elementType === DropdownSubContent) {
        return {
            open: originalProps.open,
            setSubOpen: originalProps.setSubOpen,
        };
    }

    return null;
}
