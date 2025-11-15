import type { ChangeEvent } from 'react'
import { getComponentSize, type ComponentSize } from '../models/getComponentSize'
import { useControllableState } from '../models/hooks/useControllableState'
import './../styles/components/switch.css'

interface ISwitchProps {
    // Texto do rótulo, essencial para acessibilidade
    label?: string
    // Opcional: define o tamanho. 'medium' será o padrão.
    size?: ComponentSize
    // Opcional: estado checked inicial (controlado ou não)
    checked?: boolean
    // Opcional: desabilita o switch
    disabled?: boolean
    // Opcional: handler para mudança de estado
    onChange?: (checked: boolean) => void
}

export const Switch = ({ label,
    size = 'medium',
    checked,
    disabled = false,
    onChange }: ISwitchProps) => {

    const sizeClass = getComponentSize(size, 'switch');

    const containerClasses = `switch-container`.trim();
    const coreClasses = `switch-core ${sizeClass}`.trim();
    const switchId = `switch-${Math.random().toString(36).substring(2, 9)}`;

    const [isChecked, setIsChecked] = useControllableState<boolean>(
        checked,
        false,
        onChange
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }

    return (
        <>
            <label className={containerClasses}>

                <input
                    id={switchId}
                    type="checkbox"
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleChange}
                />

                <label htmlFor={switchId} className={coreClasses}>
                    <span className="slider" aria-hidden="true"></span>
                </label>

                {label && <span className="switch-label">{label}</span>}
            </label>
        </>
    )
}