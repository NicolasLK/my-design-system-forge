import { createContext, useContext } from 'react';

export interface ISelectContext {
    value?: string;
    onValueChange: (value: string) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    disabled: boolean;
    error: boolean;
    placeholder?: string;
    /* Map of value -> label for displaying selected option */
    registerOption: (value: string, label: string) => void;
    unregisterOption: (value: string) => void;
    getLabel: (value: string) => string | undefined;
}

const SelectContext = createContext<ISelectContext | null>(null);

export const SelectProvider = SelectContext.Provider;

export const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error('useSelectContext must be used within a SelectRoot');
    }
    return context;
};
