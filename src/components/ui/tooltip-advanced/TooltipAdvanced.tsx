import { useEffect, useRef, useState, type ReactNode } from "react"
import { genUid } from "@/models/gen-uid"
import { cn } from "@/lib/utils/cn"
import "./tooltip-advanced.css"

/* ============================================================
 * 🟦 DEFINIÇÕES
 * ============================================================ */
type TooltipPosition = "top" | "bottom" | "left" | "right"
type TooltipTrigger = "hover" | "click"

interface ITooltipAdvancedProps {
    /** Conteúdo a ser exibido no tooltip */
    text: string | ReactNode,
    /** Elemento que dispara o tooltip */
    children: ReactNode
    /** Posição do tooltip */
    position?: TooltipPosition
    /** Gatilho para exibição */
    trigger?: TooltipTrigger
    /** Atraso para o gatilho 'hover' (em ms) */
    delay?: number
    /** Classe CSS adicional */
    className?: string
}

/**
 * Tipo de retorno de setTimeout em browsers
 */
type TimeoutId = number | null | undefined;

export const TooltipAdvanced = ({
    text,
    children,
    position = "top",
    trigger = "hover",
    delay = 150,
    className
}: ITooltipAdvancedProps) => {

    const [visible, setVisible] = useState(false)
    const [timer, setTimer] = useState<TimeoutId>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const tooltipId = useRef(`tooltip-${genUid(8)}`);

    // Fecha ao clicar fora (apenas trigger: click)
    useEffect(() => {
        if (trigger !== "click" || !visible) return

        const handler = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setVisible(false)
            }
        }

        // Adicionando listener no document
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [visible, trigger])

    // Limpar timer ao desmontar
    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    const show = () => {
        if (trigger === "hover") {

            // Limpa qualquer timer anterior e define um novo com delay
            if (timer) clearTimeout(timer);
            const id = window.setTimeout(() => setVisible(true), delay)
            setTimer(id)
        } else {
            setVisible(true)
        }
    }

    const hide = () => {
        if (trigger === "hover") {
            if (timer) clearTimeout(timer);
            setTimer(null);
            setVisible(false);
        }
    }

    const toggle = () => {
        if (trigger === "click") setVisible(v => !v)
    }

    /**
     * Configuração de Event Listeners
     */
    const eventHandlers = {
        onMouseEnter: trigger === "hover" ? show : undefined,
        onMouseLeave: trigger === "hover" ? hide : undefined,
        onClick: trigger === "click" ? toggle : undefined,
        onFocus: trigger === "hover" ? show : undefined,
        onBlur: trigger === "hover" ? hide : undefined,
        'aria-describedby': visible ? tooltipId.current : undefined,
    }

    return (
        <>
            <div
                ref={wrapperRef}
                className={cn("tooltip-adv-wrapper", className)}
                {...eventHandlers}
            >
                {/* Elemento que dispara o tooltip */}
                {children}

                {/* Tooltip Popup */}
                <div
                    id={tooltipId.current}
                    data-slot="tooltip-adv"
                    role="tooltip"
                    className={cn(
                        "tooltip-adv",
                        `tooltip-${position}`,
                        visible && "visible"
                    )}
                >
                    {/* Seta do Tooltip */}
                    <span data-slot="tooltip-arrow" className="tooltip-arrow" />

                    <span data-slot="tooltip-content" className="tooltip-content">
                        {text}
                    </span>
                </div>
            </div>
        </>
    )
}
