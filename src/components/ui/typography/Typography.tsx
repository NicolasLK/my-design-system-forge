import type { CSSProperties, ElementType, ReactNode } from 'react';
import './typography.css';

/**
 * Definições de Variantes
 */
type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'code'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted';

/**
 * Pesos de fonte suportados para sobrescrita manual
 */
type FontWeight = 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extrabold';

interface ITypographyProps {
    /** Define o tipo de texto (h1, h2, parágrafo etc.) */
    variant?: TypographyVariant;
    /** Define o peso da fonte */
    weight?: FontWeight;
    /** Cor opcional */
    color?: string;
    /** Elemento HTML customizável */
    as?: ElementType;
    /** Conteúdo do texto */
    children: ReactNode;
    /** Classe adicional opcional */
    className?: string;
    /** Estilos inline opcionais */
    style?: CSSProperties;
}

/**
 * Mapeamento semântico de tags HTML para cada variante do ShadCN
 */
const variantTagMap: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    blockquote: 'blockquote',
    code: 'code',
    lead: 'p',
    large: 'div',
    small: 'small',
    muted: 'p',
};

/**
 * Componente Typography adaptado do ShadCN.
 * * @example
 * <Typography variant="h1">Título Principal</Typography>
 * <Typography variant="p" weight="bold">Parágrafo em negrito</Typography>
 */
export const Typography = ({
    variant = 'p',
    weight,
    color,
    as,
    children,
    className,
    style,
}: ITypographyProps) => {
    /**
     * @description Determina qual tag HTML utilizar
     */
    const Tag: ElementType = as || variantTagMap[variant] || 'p';

    /**
     * @description Constrói a lista de classes manualmente para evitar dependências externas
     */
    const classes = [
        'typography-root',
        `typography-${variant}`,
        weight ? `font-weight-${weight}` : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <>
            <Tag className={classes} style={{ color, ...style }}>
                {children}
            </Tag>
        </>
    );
};
