import { createContext, useContext } from "react";


export type ThemeType = 'light' | 'dark';

// 1. Definição da Estrutura do Contexto
interface IThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

// 2. Criação do Contexto
export const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

// 3. ThemeContextProvider

// 4. Hook customizado para fácil uso em qualquer componente
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme deve ser usado dentro de um ThemeContextProvider');
    }
    return context;
};