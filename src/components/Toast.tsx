import { useEffect } from "react"
import "../styles/components/toast.css"
import { getComponentColor, type ComponentColor } from "../models/get-component-color"

type ToastVariant = ComponentColor

interface IToastProps {
    /** Mensagem principal */
    message: string
    /** Tipo do toast */
    variant?: ToastVariant
    /** Tempo até desaparecer (ms) */
    duration?: number
    /** Função chamada ao fechar */
    onClose?: () => void
}

export const Toast = ({ message, variant = "default", duration = 3000, onClose }: IToastProps) => {
    const colorClass = getComponentColor(variant, 'toast')

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.()
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <>
            <div className={`tag ${colorClass}`.trim()}>
                <span>{message}</span>
            </div>
        </>
    )
}
