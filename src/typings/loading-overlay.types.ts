/* ---------- Types ---------- */
/* --------------------------- */

/* ---------- Interfaces ---------- */

export interface ILoadingOverlayProps {
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
/* ------------------------------- */
