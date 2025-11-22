import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { getComponentSize, type ComponentSize } from '@/models/get-component-size'
import { cn } from '@/lib/utils/cn'
import { Button } from '../button'
import './modal.css'


interface IModalProps {
    /** Controla se o modal está aberto */
    isOpen: boolean
    /** Função chamada ao fechar o modal */
    onClose: () => void
    /** Opcional: Tamanho do modal ('small' | 'medium' | 'large') */
    size?: ComponentSize
    /** Opcional: Título do modal */
    title?: string
    /** Opcional: Descrição do modal a ser exibida */
    description?: string
    /** Opcional: Conteúdo customizado */
    children?: ReactNode
    /** Opcional: Footer customizado */
    footer?: ReactNode;
    /** Opcional: Propriedade para fechar ao clicar fora */
    closeOnOutsideClick?: boolean
    /** Opcional: Classe extra para estilização */
    className?: string;
}

export const Modal = ({
    isOpen,
    onClose,
    size = 'medium',
    title = 'Título do Modal',
    description = 'Esta é uma mensagem de exemplo dentro de um modal.',
    children,
    footer,
    closeOnOutsideClick = false,
    className
}: IModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    const sizeClass = getComponentSize(size, 'modal')

    /**
     * @description Animação ao fechar
     */
    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 200)
    }

    /**
     * @description Fechar com tecla ESC
     */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose()
        }
        if (isOpen) document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            // Bloqueia scroll do fundo
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = "";
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    /**
     * @description Fechar ao clicar fora
     */
    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <>
            <div
                className={cn("modal", isClosing && "modal-closing")}
                role="dialog"
                onClick={handleOverlayClick}
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className={cn("modal-content", sizeClass, className)}>
                    {/* Cabeçalho com botão de fechar */}
                    <div className="modal-header">
                        {title && <h3 id="modal-title" className="modal-title">{title}</h3>}
                        <button
                            className="modal-close"
                            aria-label="Fechar modal"
                            onClick={handleClose}
                        >
                            x
                        </button>
                    </div>

                    {description && (
                        <p id="modal-description" className="modal-description">
                            {description}
                        </p>
                    )}

                    {/* Corpo customizado */}
                    {children}

                    {/* Rodapé customizado */}
                    {footer ? (
                        <div className="modal-footer">
                            {footer}
                        </div>
                    ) : (
                        <div className="modal-footer">
                            <Button variant='destructive' onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant='primary' onClick={handleClose}>
                                Confirmar
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}