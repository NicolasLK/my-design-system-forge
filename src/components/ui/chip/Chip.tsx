import type { MouseEvent, ReactNode } from "react";
import { getComponentColor, type ComponentColor } from "@/models/get-component-color";
import { getComponentSize, type ComponentSize } from "@/models/get-component-size";
import { getComponentVariant, type ComponentVariant } from "@/models/get-component-variant";
import { cn } from "@/lib/utils/cn";
import { Button } from "../button";
import "./chip.css";


/* ============================================================
 * 🟦 DEFINIÇÕES
 * ============================================================ */

interface IChipProps {
    /** Conteúdo exibido no chip (texto ou ReactNode) */
    children: ReactNode
    /** Cor (padrão: cinza neutro) */
    color?: ComponentColor
    /** Tamanho do chip */
    size?: ComponentSize
    /** Variante Visual (default/solid, outline, ghost, etc.). */
    visualVariant?: ComponentVariant
    /** Define se está selecionado */
    selected?: boolean
    /** Define se está desabilitado */
    disabled?: boolean
    /** O chip possui um botão de fechar (x) */
    closable?: boolean
    /** Ação ao fechar o chip (só funciona se closable=true) */
    onClose?: (e: MouseEvent<HTMLButtonElement>) => void
    /** Ação ao clicar */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    /** Classe CSS adicional */
    className?: string
}

export const Chip = ({
    children,
    color = "neutral",
    visualVariant = "default",
    size = "medium",
    selected = false,
    disabled = false,
    closable = false,
    onClose,
    onClick,
    className
}: IChipProps) => {

    const colorClass = getComponentColor(color, 'chip');
    const sizeClass = getComponentSize(size, 'chip');
    const variantClass = getComponentVariant(visualVariant, 'chip');

    const classes = cn(
        "chip",
        colorClass,
        sizeClass,
        variantClass,
        selected && "chip-selected",
        disabled && "chip-disabled",
        closable && "chip-closable",
        className
    );

    /**
     * Se for closable, o clique no corpo é desabilitado por padrão, a menos que onClick seja fornecido
     */
    const effectiveOnClick = !disabled && onClick ? onClick : undefined;

    /**
     * Componente customizado para o ícone de fechar (X)
     */
    const CloseButton = () => (
        <Button
            data-slot="chip-close-button"
            className="chip-close-button"
            visualVariant="text"
            size={size}
            onClick={onClose}
            disabled={disabled}
            aria-label="Remover"
        >
            {/* Usando um X simples para fechar */}
            &times;
        </Button>
    );

    return (
        <>
            <button
                data-slot="chip-root"
                className={classes}
                onClick={effectiveOnClick}
                disabled={disabled}
                type="button"
            >
                <span data-slot="chip-content" className="chip-content">
                    {children}
                </span>

                {closable && <CloseButton />}
            </button>
        </>
    )
}
