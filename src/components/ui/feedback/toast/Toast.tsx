import { useEffect, useState } from "react"
import { getComponentColor, type ComponentColor } from "@/models/get-component-color"
import { cn } from "@/lib/utils/cn"
import "./toast.css"

type ToastVariant = ComponentColor

interface IToastProps {
    /** Mensagem principal */
    message: string
    /** Tipo do toast */
    variant?: ToastVariant
    /** Tempo até desaparecer (ms) */
    duration?: number
    /** Visibilidade do componente */
    visible?: boolean;
    /** Função chamada ao fechar */
    onClose?: () => void
    /** Propriedade para adicionar mais estilos */
    className?: string;
}

export const Toast = ({
    message,
    variant = "default",
    duration = 3000,
    visible = false,
    onClose,
    className
}: IToastProps) => {
    const [show, setShow] = useState(visible);

    useEffect(() => {
        setShow(visible)
        if (!visible) return

        const timer = setTimeout(() => {
            setShow(false)
            onClose?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [visible, duration, onClose])

    const colorClass = getComponentColor(variant, 'toast')

    if (!show) return null;

    return (
        <>
            <div className={cn("toast", colorClass, className)}>
                <span>{message}</span>
            </div>
        </>
    )
}
