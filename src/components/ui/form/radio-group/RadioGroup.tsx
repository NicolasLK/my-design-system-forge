import { useState } from 'react';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { cn } from '@/lib/utils/cn';
import { Radio } from '../../radio';

interface IRadioGroupItem {
    label: string;
    value: string;
    disabled?: boolean;
}

interface IRadioGroupProps {
    /** Itens do grupo */
    items: IRadioGroupItem[];
    /** Nome do grupo (obrigatório para radios) */
    name: string;
    /** Identificador do label */
    labelId?: string;
    /** Valor controlado */
    value?: string;
    /** Valor inicial (não controlado) */
    defaultValue?: string;
    /** Callback quando muda */
    onChange?: (value: string) => void;
    /** Tamanho dos radios */
    size?: ComponentSize;
    /** Desabilita todo o grupo */
    disabled?: boolean;
    /** Classe adicional */
    className?: string;
}

export const RadioGroup = ({
    items,
    name,
    labelId,
    value,
    defaultValue,
    onChange,
    size = 'medium',
    disabled = false,
    className,
}: IRadioGroupProps) => {
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState(defaultValue);

    const currentValue = isControlled ? value : internalValue;

    const sizeClass = getComponentSize(size, 'radio-group');

    const handleChange = (val: string) => {
        if (!isControlled) {
            setInternalValue(val);
        }
        onChange?.(val);

        console.log('val -> ', val);
    };

    return (
        <>
            <div
                role="radiogroup"
                data-slot="radio-group-root"
                aria-labelledby={labelId}
                className={cn('radio-group', sizeClass, className)}
            >
                {items.map((item) => (
                    <Radio
                        key={item.value}
                        name={name}
                        value={item.value}
                        label={item.label}
                        checked={item.value === currentValue}
                        disabled={disabled || item.disabled}
                        radioSize={size}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </>
    );
};
