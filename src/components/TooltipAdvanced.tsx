import { useEffect, useRef, useState } from "react"
import "../styles/components/tooltip-advanced.css"

type TooltipPosition = "top" | "bottom" | "left" | "right"
type TooltipTrigger = "hover" | "click"

interface ITooltipAdvancedProps {
    text: string
    children: React.ReactNode
    position?: TooltipPosition
    trigger?: TooltipTrigger
    delay?: number
}

export const TooltipAdvanced = ({
    text,
    children,
    position = "top",
    trigger = "hover",
    delay = 150
}: ITooltipAdvancedProps) => {

    const [visible, setVisible] = useState(false)
    const [timer, setTimer] = useState<number | null>(null)
    const ref = useRef<HTMLDivElement | null>(null)

    // Fecha ao clicar fora (apenas trigger: click)
    useEffect(() => {
        if (trigger !== "click" || !visible) return

        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setVisible(false)
            }
        }

        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [visible, trigger])

    const show = () => {
        if (trigger === "hover") {
            const id = window.setTimeout(() => setVisible(true), delay)
            setTimer(id)
        } else {
            setVisible(true)
        }
    }

    const hide = () => {
        if (trigger === "hover") {
            if (timer) clearTimeout(timer)
            setVisible(false)
        }
    }

    const toggle = () => {
        if (trigger === "click") setVisible(v => !v)
    }

    return (
        <>
            <div
                ref={ref}
                className="tooltip-adv-wrapper"
                onMouseEnter={trigger === "hover" ? show : undefined}
                onMouseLeave={trigger === "hover" ? hide : undefined}
                onClick={trigger === "click" ? toggle : undefined}
            >
                {children}

                <div className={`tooltip-adv tooltip-${position} ${visible ? "visible" : ""}`}>
                    {text}
                </div>
            </div>
        </>
    )
}
