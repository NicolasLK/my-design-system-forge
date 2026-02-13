import { type ComponentSize } from '@/models/get-component-size';
import { createContext, useContext } from 'react';

export interface IRadioGroupContext {
    name: string;
    value?: string;
    onValueChange: (value: string) => void;
    disabled: boolean;
    error: boolean;
    radioSize: ComponentSize;
}

const RadioGroupContext = createContext<IRadioGroupContext | null>(null);

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroupContext = () => {
    const context = useContext(RadioGroupContext);
    return context;
};
