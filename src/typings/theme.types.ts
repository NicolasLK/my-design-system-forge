import type { ReactNode } from 'react';

/* ---------- Types ---------- */

export type ThemeType = 'light' | 'dark';

/* ---------- Interfaces ---------- */

export interface IThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

export interface IThemeProviderProps {
    children: ReactNode;
}
