import { useEffect, type ReactNode } from 'react'
import { getComponentSize, type ComponentSize } from '../models/get-component-size'
import './../styles/components/modal.css'
import { Button } from './Button'

interface IModalProps {
    /** Controla se o modal está aberto */
    isOpen: boolean
    /** Função chamada ao fechar o modal */
    onClose: () => void
    /** Tamanho do modal ('small' | 'medium' | 'large') */
    size?: ComponentSize
    /** Conteúdo do modal */
    title?: string
    description?: string
    /** Conteúdo customizado opcional */
    children?: ReactNode
}

export const Modal = ({ isOpen, onClose, size = 'medium', title = 'Título do Modal', description = 'Esta é uma mensagem de exemplo dentro de um modal.', children }: IModalProps) => {

    const sizeClass = getComponentSize(size, 'modal')

    // Fechar com tecla ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    // Fechar ao clicar fora
    // const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    //     if (e.target === e.currentTarget) onClose()
    // }

    if (!isOpen) return null

    return (
        <>
            <div className="modal" role="dialog" aria-modal="true">
                <div className={`modal-content ${sizeClass}`}>
                    {/* Cabeçalho com botão de fechar */}
                    <div className="modal-header">
                        {title && <h3 className="modal-title">{title}</h3>}
                        <button
                            className="modal-close"
                            aria-label="Fechar modal"
                            onClick={onClose}
                        >
                            x
                        </button>
                    </div>

                    {/* Corpo */}
                    {description && <p className="modal-description">{description}</p>}

                    {/* Conteúdo customizado */}
                    {children ? (
                        children
                    ) : (
                        <div className="modal-footer">
                            <Button variant='destructive' onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button variant='primary' onClick={onClose}>
                                Confirmar
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}