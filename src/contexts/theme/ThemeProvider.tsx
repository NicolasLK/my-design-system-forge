import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeType } from "./ThemeContext";


// 3. Componente Provider que gerencia o estado e aplica a classe CSS
interface IThemeProviderProps {
    children: ReactNode;
}

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
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}