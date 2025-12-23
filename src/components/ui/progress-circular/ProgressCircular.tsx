import type { ReactNode } from 'react';
import {
    getComponentColor,
    type ComponentColor,
} from '@/models/get-component-color';
import { cn } from '@/lib/utils/cn';
import './progress-circular.css';

interface IProgressCircularProps {
    /** Valor percentual (0–100) */
    value: number;
    /** Tamanho do círculo em px */
    size?: number;
    /** Espessura do traço */
    strokeWidth?: number;
    /** Variante de cor padrão do sistema */
    color?: ComponentColor;
    /** Texto descritivo exibido abaixo do progresso */
    label?: string;
    /** Ícone ou conteúdo customizado para o centro (substitui o valor %) */
    children?: ReactNode;
    /** Classe adicional */
    className?: string;
}

export const ProgressCircular = ({
    value,
    size = 64,
    strokeWidth = 6,
    color = 'default',
    label,
    children,
    className,
}: IProgressCircularProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Normaliza o valor entre 0 e 100
    const clampedValue = Math.min(100, Math.max(0, value));
    const offset = circumference - (clampedValue / 100) * circumference;

    const colorClass = getComponentColor(color, 'progress');

    return (
        <>
            <div
                data-slot="progress-circular-root"
                className={cn('progress-circular-root', className)}
            >
                <div
                    className={cn('progress-circular', colorClass, className)}
                    style={{ width: size, height: size }}
                    role="progressbar"
                    aria-valuenow={clampedValue}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <svg width={size} height={size}>
                        <circle
                            className="progress-bg"
                            strokeWidth={strokeWidth}
                            r={radius}
                            cx={size / 2}
                            cy={size / 2}
                        />
                        <circle
                            className="progress-bar"
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            r={radius}
                            cx={size / 2}
                            cy={size / 2}
                        />
                    </svg>

                    <div className="progress-content">
                        {children ? (
                            <div className="progress-custom-content">
                                {children}
                            </div>
                        ) : (
                            <span className="progress-value">
                                {Math.round(clampedValue)}%
                            </span>
                        )}
                    </div>
                </div>

                {label && (
                    <span data-slot="progress-label" className="progress-label">
                        {label}
                    </span>
                )}
            </div>
        </>
    );
};
