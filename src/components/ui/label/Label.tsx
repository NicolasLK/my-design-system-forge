import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import "./label.css"

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    /** Conteúdo do rótulo (texto ou ReactNode) */
    children: ReactNode
    /** Se o campo associado é obrigatório */
    required?: boolean
    /** Classe CSS adicional */
    className?: string
}

export const Label = ({
    children,
    required,
    className,
    ...props
}: ILabelProps) => {

    return (
        <>
            <label
                data-slot="label"
                className={cn(
                    "label",
                    className
                )}
                {...props}
            >
                {children}
                {/* Indicador de campo obrigatório */}
                {required && (
                    <span className="label-required" aria-hidden="true">
                        *
                    </span>
                )}
            </label>
        </>
    )
}