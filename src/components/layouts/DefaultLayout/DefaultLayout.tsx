import { Sidebar } from '@/components/ui/sidebar';
import type { IDefaultLayoutProps } from '@/typings/default-layout.types';
import { useEffect } from 'react';
import { Header } from '../../Header';
import './default-layout.css';

const DefaultLayout = ({
    children,
    withSidebar = true,
    title,
}: IDefaultLayoutProps) => {
    // Opcional: Mudança do título do documento dinamicamente
    useEffect(() => {
        if (title) {
            document.title = `${title} | Design System Forge`;
        }
    }, [title]);

    if (!withSidebar) {
        return (
            <>
                <div className="layout-default-wrapper">
                    <Header />
                    <main className="default-main-content">{children}</main>
                </div>
            </>
        );
    }

    return (
        <>
            <Sidebar.Root defaultOpen>
                {/* Sidebar */}
                <Sidebar.Panel>
                    {/* Menu da Sidebar */}
                    <nav className="sidebar-nav">
                        <ul>
                            <li>Home</li>
                            <li>Preview</li>
                            <li>Tokens</li>
                        </ul>
                    </nav>
                </Sidebar.Panel>

                {/* Conteúdo principal */}
                <Sidebar.Inset>
                    <div className="layout-default-wrapper">
                        <Header hasSidebarTrigger={withSidebar} />

                        <main className="default-main-content">{children}</main>
                    </div>
                </Sidebar.Inset>
            </Sidebar.Root>
        </>
    );
};

export default DefaultLayout;
