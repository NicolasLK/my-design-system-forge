import { RadioGroupProvider } from '@/contexts/components/radio-group/RadioGroupContext';
import { cn } from '@/lib/utils/cn';
import { genUid } from '@/models/gen-uid';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { useControllableState } from '@/models/hooks/useControllableState';
import {
    forwardRef,
    type HTMLAttributes,
    type ReactNode,
} from 'react';
import './radio-group.css';

interface IRadioGroupProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Filhos (Componentes Radio) */
    children: ReactNode;
    /** Nome do grupo (acessibilidade) */
    name?: string;
    /** Valor controlado */
    value?: string;
    /** Valor inicial (não controlado) */
    defaultValue?: string;
    /** Callback de mudança */
    onValueChange?: (value: string) => void;
    /** Rótulo do grupo (Acessibilidade) */
    label?: string;
    /** Orientação do grupo */
    orientation?: 'horizontal' | 'vertical';
    /** Tamanho dos radios filhos */
    radioSize?: ComponentSize;
    /** Desabilita todo o grupo */
    disabled?: boolean;
    /** Estado de erro */
    error?: boolean;
    /** Mensagem de erro */
    errorMessage?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, IRadioGroupProps>(
    (
        {
            children,
            name,
            value: valueProp,
            defaultValue,
            onValueChange,
            label,
            orientation = 'vertical',
            radioSize = 'md',
            disabled = false,
            error = false,
            errorMessage,
            className,
            id: externalId,
            ...props
        },
        ref,
    ) => {
        const [value, setValue] = useControllableState(
            valueProp,
            defaultValue || '',
            onValueChange,
        );

        const uniqueId = externalId || genUid(8);
        const labelId = `${uniqueId}-label`;
        const groupName = name || uniqueId;

        // Classe de tamanho não afeta o wrapper diretamente, mas é bom ter consistência se necessário
        const sizeClass = getComponentSize(radioSize, 'radio-group');

        return (
            <RadioGroupProvider
                value={{
                    name: groupName,
                    value,
                    onValueChange: setValue,
                    disabled,
                    error,
                    radioSize,
                }}
            >
                <div
                    ref={ref}
                    id={uniqueId}
                    role="radiogroup"
                    aria-labelledby={label ? labelId : undefined}
                    aria-orientation={orientation}
                    data-slot="radio-group-root"
                    className={cn(
                        'radio-group',
                        `radio-group-${orientation}`,
                        className,
                    )}
                    {...props}
                >
                    {label && (
                        <span
                            id={labelId}
                            className="radio-group-label"
                            data-slot="radio-group-label"
                        >
                            {label}
                        </span>
                    )}
                    
                    <div className="radio-group-items">
                        {children}
                    </div>

                    {error && errorMessage && (
                        <span
                            className="radio-group-error-message"
                            data-slot="radio-group-error-message"
                        >
                            {errorMessage}
                        </span>
                    )}
                </div>
            </RadioGroupProvider>
        );
    },
);

RadioGroup.displayName = 'RadioGroup';