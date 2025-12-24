import type { InputHTMLAttributes } from 'react';
import {
    getComponentSize,
    type ComponentSize,
} from '@/models/get-component-size';
import { cn } from '@/lib/utils/cn';
import './radio.css';

interface IRadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    value: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    radioSize?: ComponentSize;
    onChange?: (value: string) => void;
}

export const Radio = ({
    label,
    value,
    name,
    checked,
    onChange,
    disabled = false,
    radioSize = 'medium',
    className,
    ...props
}: IRadioProps) => {
    const sizeClass = getComponentSize(radioSize, 'radio');
    const finalSizeClass = sizeClass || 'radio-md';

    return (
        <>
            <label
                className={cn(
                    'radio-wrapper',
                    disabled && 'disabled',
                    className,
                )}
            >
                <input
                    type="radio"
                    value={value}
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={() => onChange?.(value)}
                    {...props}
                />

                <span className={cn('radio-circle', finalSizeClass)} />

                {label && <span className="radio-label">{label}</span>}
            </label>
        </>
    );
};
