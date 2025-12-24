import type { IThemeContextProps } from '@/typings/theme.types';
import { createContext, useContext } from 'react';

// 1. Definição e Criação do Contexto
export const ThemeContext = createContext<IThemeContextProps | undefined>(
    undefined,
);

// 2. Hook customizado para fácil uso em qualquer componente
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error(
            'useTheme deve ser usado dentro de um ThemeContextProvider',
        );
    }
    return context;
};
