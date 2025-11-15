import { useCallback, useState } from "react";

/**
 * Hook para criar um estado híbrido (controlado ou não)
 *
 * @param controlledValue - valor controlado vindo do componente pai (ex: props.checked)
 * @param defaultValue - valor inicial caso o componente não seja controlado
 * @param onChange - callback chamado sempre que o valor muda
 */
export function useControllableState<T>( 
  controlledValue: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void) {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : uncontrolledValue

    const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onChange?.(newValue)
    },
    [isControlled, onChange]
  )

  return [value, setValue] as const
}