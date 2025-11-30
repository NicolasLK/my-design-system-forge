/* eslint-disable @typescript-eslint/no-explicit-any */
"use-client"

import { Children, cloneElement, useEffect, useRef, type ComponentProps, type ReactNode } from "react"
import "./select.css"
import { cn } from "@/lib/utils/cn"

/* ============================================================
 * 🟦 ROOT
 * ============================================================ */
interface ISelectRootProps {
    children: ReactNode
    value: string
    onChange: (value: string) => void
    open: boolean
    onOpenChange: (open: boolean) => void
    className?: string
}

export const SelectRoot = ({
    children,
    value,
    onChange,
    open,
    onOpenChange,
    className
}: ISelectRootProps) => {
    const ref = useRef<HTMLDivElement>(null)

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOpenChange(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [onOpenChange])

    return (
        <>
            <div
                ref={ref}
                data-slot="select"
                data-open={open}
                data-value={value}
                className={cn("select-root", className)}
            >
                {/* Injeta handlers para Trigger e Option */}
                {injectProps(children, { value, onChange, open, onOpenChange })}
            </div>
        </>
    )
}

/* ============================================================
 * 🟦 LABEL
 * ============================================================ */
export const SelectLabel = ({
    className,
    children
}: ComponentProps<"label">) => {

    return (
        <>
            <label className={cn("select-label", className)}>
                {children}
            </label>
        </>
    )
}

/* ============================================================
 * 🟦 TRIGGER
 * ============================================================ */
interface ISelectTriggerProps extends ComponentProps<"button"> {
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export const SelectTrigger = ({
    className,
    children,
    open,
    onOpenChange,
    ...props
}: ISelectTriggerProps) => {

    return (
        <>
            <button
                type="button"
                data-slot="select-trigger"
                aria-expanded={open}
                onClick={() => { onOpenChange?.(!open) }}
                className={cn("select-trigger", className)}
                {...props}
            >
                <span className="select-trigger-text">
                    {children}
                </span>

                <span className={cn("select-arrow", open && "rotate")}>▾</span>
            </button>
        </>
    )
}

/* ============================================================
 * 🟦 VALUE
 * ============================================================ */
interface ISelectValueProps {
    value?: string
    options?: { value: string; label: string }[]
    placeholder?: string
}

export const SelectValue = ({
    value,
    options,
    placeholder
}: ISelectValueProps) => {
    const label = options?.find(op => op.value === value)?.label

    return (
        <>
            <span data-slot="select-value">
                {label || placeholder}
            </span>
        </>
    )
}

/* ============================================================
 * 🟦 CONTENT
 * ============================================================ */
interface ISelectContentProps extends ComponentProps<"ul"> {
    open?: boolean
}

export const SelectContent = ({
    className,
    children,
    open,
    ...props
}: ISelectContentProps) => {
    if (!open) return null

    return (
        <>
            <ul
                data-slot="select-content"
                className={cn("select-content", className)}
                {...props}
            >
                {children}
            </ul>
        </>
    )
}

/* ============================================================
 * 🟦 OPTION
 * ============================================================ */
interface ISelectOptionProps {
    value: string
    children: ReactNode
    selected?: boolean
    onSelect?: (value: string) => void
}

export const SelectOption = ({
    value,
    children,
    selected,
    onSelect
}: ISelectOptionProps) => {

    return (
        <>
            <li
                data-slot="select-option"
                data-selected={selected}
                onClick={() => onSelect?.(value)}
                className="select-option"
            >
                {children}
            </li>
        </>
    )
}

/* ============================================================
 * 🧩 Helper: injeta automaticamente props nos filhos
 * para coletar opções e iniciar a injeção.
 * ============================================================ */
function injectProps(
    children: ReactNode,
    injected: Record<string, any>
): ReactNode {
    const options: { value: string; label: string }[] = []

    // 1. Coletar Opções (melhor que buscar recursivamente duas vezes)
    Children.forEach(children, (child: any) => {
        // Encontra o SelectContent e itera sobre suas opções
        if (child && child.type === SelectContent && child.props.children) {
            Children.forEach(child.props.children, (option: any) => {
                if (option && option.type === SelectOption) {
                    options.push({
                        value: option.props.value,
                        label: option.props.children
                    })
                }
            })
        }
    })

    const extraInjected = {
        ...injected,
        options
    }

    // 2. Injetar Props nos filhos diretos
    return Children.map(children, (child) => wrap(child, extraInjected));
}

function wrap(
    child: any,
    injected: Record<string, any>
): any {
    if (!child || !child.props) return child

    const extra: Record<string, any> = {}

    // 1. Condições de Injeção de Props
    if (child.type === SelectTrigger) {
        extra.open = injected.open;
        extra.onOpenChange = injected.onOpenChange;
    }

    if (child.type === SelectValue) {
        extra.value = injected.value;
        extra.options = injected.options;
    }

    if (child.type === SelectContent) {
        extra.open = injected.open;
    }

    if (child.type === SelectOption) {
        extra.selected = injected.value === child.props.value;
        extra.onSelect = () => {
            injected.onChange(child.props.value);
            injected.onOpenChange(false);
        };
    }

    // 2. Clonagem Recursiva
    // Isso garante que todos os filhos de 'child' sejam processados
    const clonedChildren = Children.map(child.props.children, (c) =>
        wrap(c, injected)
    );

    return cloneElement(
        child,
        { ...child.props, ...extra },
        clonedChildren
    )
}