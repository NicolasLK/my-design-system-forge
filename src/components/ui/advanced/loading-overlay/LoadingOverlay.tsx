import { Spinner } from '@/components/ui/feedback/spinner';
import { cn } from '@/lib/utils/cn';
import './loading-overlay.css';

interface ILoadingOverlayProps {
    /** Controla se a sobreposição está ativa e visível */
    active: boolean;
    /** Mensagem ou conteúdo customizado exibido no centro (ReactNode) */
    message?: string;
    /** Opacidade do fundo (0 a 1) para customização (usado via CSS inline) */
    backgroundOpacity?: number;
    /** Classe CSS adicional */
    className?: string;
    /** Se o overlay deve ter o fundo com efeito de desfoque (blur) */
    blur?: boolean;
}

export const LoadingOverlay = ({
    active,
    message,
    backgroundOpacity = 0.7,
    blur = true,
    className,
}: ILoadingOverlayProps) => {
    /**
     * Calcula a opacidade do fundo (limita entre 0 e 1)
     */
    const safeOpacity = Math.min(1, Math.max(0, backgroundOpacity));

    /**
     * Estilos inline para o fundo
     */
    const overlayStyle = {
        backgroundColor: `rgba(255, 255, 255, ${safeOpacity})`,
        backdropFilter: blur ? 'blur(2px)' : 'none',
    };

    return (
        <>
            <div
                data-slot="loading-overlay"
                className={cn('loading-overlay', active && 'active', className)}
                style={overlayStyle}
                // Adiciona role="status" para acessibilidade
                role="status"
                aria-live={active ? 'assertive' : 'off'}
                aria-hidden={!active}
            >
                <div
                    data-slot="loading-overlay-content"
                    className="loading-overlay-content"
                >
                    {/* Spinner padrão */}
                    <Spinner size="large" variant="primary" />

                    {message && (
                        <p
                            data-slot="loading-message"
                            className="loading-message"
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};
