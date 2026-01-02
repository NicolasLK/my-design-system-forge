import type { ThemeType } from '@/typings/theme.types';
import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

interface IThemeProviderProps {
    children: ReactNode;
}

// Componente Provider que gerencia o estado e aplica a classe CSS
export const ThemeContextProvider = ({ children }: IThemeProviderProps) => {
    // Estado inicial pode ser lido do localStorage ou do sistema operacional
    const [theme, setTheme] = useState<ThemeType>(() => {
        return (localStorage.getItem('theme') as ThemeType) || 'light';
    });

    // Efeito para aplicar a classe de tema no corpo do documento (<body>)
    useEffect(() => {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
