import {
    cloneElement,
    isValidElement,
    type HTMLAttributes,
    type ReactElement,
} from 'react';
import {
    getComponentColor,
    type ComponentColor,
} from '@/models/get-component-color';
import {
    getComponentVariant,
    type ComponentVariant,
} from '@/models/get-component-variant';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { cn } from '@/lib/utils/cn';
import './badge.css';

// type AsChildElement = ReactElement<{ className?: string }>;

interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Define a classe de cor do badge */
    color?: ComponentColor;
    /** Define a variação do badge */
    variant?: ComponentVariant;
    /** Define o tamanho do badge */
    size?: ComponentSize;
    /** Opcional: fullWidth programatico */
    fullWidth?: boolean;
    /** Opcional: permite passar um conteúdo customizado, como um ícone */
    asChild?: boolean;
    /** Texto simples do badge */
    text?: string;
}

export const Badge = ({
    color = 'default',
    variant = 'default',
    size = 'medium',
    fullWidth = false,
    asChild = false,
    text,
    className,
    children,
    ...props
}: IBadgeProps) => {
    const colorClass = getComponentColor(color, 'badge');
    const variantClass = getComponentVariant(variant, 'badge');
    const sizeClass = getComponentSize(size, 'badge');
    const fullWidthClass = fullWidth ? 'badge-full' : '';

    const badgeClasses = cn(
        'badge',
        variantClass,
        colorClass,
        sizeClass,
        fullWidthClass,
        className,
    );

    // Se asChild for true, validamos e clonamos o elemento filho
    if (asChild && isValidElement(children)) {
        const child = children as ReactElement<{ className?: string }>;

        return cloneElement(child, {
            className: cn(child.props.className, badgeClasses),
            ...props,
        });
    }

    return (
        <>
            <span data-slot="badge" className={badgeClasses} {...props}>
                {children ?? text}
            </span>
        </>
    );
};
