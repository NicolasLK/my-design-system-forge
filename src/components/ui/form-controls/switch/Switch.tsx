import { cn } from '@/lib/utils/cn';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import {
    getComponentSize,
    type ComponentSize,
} from '../../../../models/get-component-size';
import { useControllableState } from '../../../../models/hooks/useControllableState';
import './switch.css';

interface ISwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    // Texto do rótulo, essencial para acessibilidade
    label?: string;
    // Opcional: define o tamanho. 'medium' será o padrão.
    switchSize?: ComponentSize;
    // Opcional: estado checked inicial (controlado ou não)
    checked?: boolean;
    // Opcional: desabilita o switch
    disabled?: boolean;
    // Opcional: handler para mudança de estado
    onCheckedChange?: (checked: boolean) => void;
}

export const Switch = ({
    label,
    switchSize = 'medium',
    checked,
    disabled = false,
    onCheckedChange,
    className,
    ...props
}: ISwitchProps) => {
    const sizeClass = getComponentSize(switchSize, 'switch');

    const [isChecked, setIsChecked] = useControllableState<boolean>(
        checked,
        false,
        onCheckedChange,
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const switchId = `switch-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <>
            <label className={cn('switch-container', className)}>
                <input
                    id={switchId}
                    type="checkbox"
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    {...props}
                />

                <label
                    htmlFor={switchId}
                    className={cn('switch-core', sizeClass)}
                >
                    <span className="slider" aria-hidden="true"></span>
                </label>

                {label && <span className="switch-label">{label}</span>}
            </label>
        </>
    );
};
