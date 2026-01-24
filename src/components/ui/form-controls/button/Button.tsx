import {
    getComponentColor,
    type ComponentColor,
} from '@/models/get-component-color';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import {
    getComponentVariant,
    type ComponentVariant,
} from '@/models/get-component-variant';
import { isIconElement } from '@/models/is-icon-element';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../../lib/utils/cn';
import './button.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** A variante define a classe CSS e o texto. */
    color?: ComponentColor;
    /** A variante visual (default/sólido é o padrão). */
    variant?: ComponentVariant;
    /** A prop para odefinir o tamanho. 'md' é o padrão conforme o tipo. */
    size?: ComponentSize;
    /** Opcional: define se o botão deve estar desabilitado. */
    disabled?: boolean;
    /** Opcional: fullWidth programatico. */
    fullWidth?: boolean;
    /** Opcional: fullRadius programatico. */
    fullRadius?: boolean;
    /** Opcional: permite passar um conteúdo customizado, como um ícone. */
    children?: ReactNode;
}

export const Button = ({
    color = 'primary',
    variant = 'solid',
    size = 'md',
    disabled = false,
    fullWidth = false,
    fullRadius = false,
    className,
    children,
    ...props
}: IButtonProps) => {
    /**
     * Classe de Cor (ex: btn-primary)
     */
    const colorClass = getComponentColor(color, 'btn');

    /**
     * Classe visual: solid (default), outline, ghost, text
     */
    const visualClass = getComponentVariant(variant, 'btn');

    /**
     * Classe de Tamanho (ex: btn-sm)
     */
    const sizeClass = getComponentSize(size, 'btn');

    /**
     * Verifica se o primeiro child é ícone
     */
    const content = Array.isArray(children) ? children : [children];

    /**
     * Detecta ícone no primeiro child
     */
    const hasIcon = isIconElement(content[0]);

    const buttonClasses = cn(
        'btn',
        colorClass,
        visualClass,
        sizeClass,
        hasIcon && 'btn-with-icon',
        fullWidth && 'btn-full',
        fullRadius && 'btn-full-radius',
        className,
    );

    return (
        <>
            <button className={buttonClasses} disabled={disabled} {...props}>
                {children}
            </button>
        </>
    );
};
