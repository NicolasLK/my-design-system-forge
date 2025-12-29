import { useTheme } from '@/contexts/theme/ThemeContext';
import { Sidebar } from './ui/navigation/sidebar';

interface IHeaderProps {
    hasSidebarTrigger?: boolean;
}

export const Header = ({ hasSidebarTrigger }: IHeaderProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="site-header">
                <div className="header-left">
                    {hasSidebarTrigger && <Sidebar.Trigger />}
                    <h1>Design System Forge</h1>
                </div>

                <button
                    onClick={toggleTheme}
                    aria-label={`Alternar para tema ${
                        theme === 'light' ? 'Escuro' : 'Claro'
                    }`}
                >
                    {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
                </button>
            </header>
        </>
    );
};
