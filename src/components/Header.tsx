import { useTheme } from "@/contexts/theme/ThemeContext";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="site-header">
                <h1>Design system Forge</h1>

                <button
                    onClick={toggleTheme}
                    aria-label={`Alternar para tema ${theme === 'light' ? 'Escuro' : 'Claro'}`}
                >
                    {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
                </button>
            </header>
        </>
    )
}