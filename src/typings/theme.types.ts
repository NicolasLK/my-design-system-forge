import type { ReactNode } from 'react';

export type ThemeType = 'light' | 'dark';

export interface IThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

export interface IThemeProviderProps {
    children: ReactNode;
}
