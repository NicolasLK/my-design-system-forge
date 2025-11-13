import { useEffect } from "react"
import "../styles/components/toast.css"

type ToastVariant = "success" | "error" | "warning" | "info"

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

export const Toast = ({ message, variant = "info", duration = 3000, onClose }: IToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.()
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <>
            <div className={`toast toast-${variant}`}>
                <span>{message}</span>
            </div>
        </>
    )
}
