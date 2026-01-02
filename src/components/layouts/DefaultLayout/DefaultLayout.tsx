import { AppSidebar } from '@/components/AppSidebar';
import { Sidebar } from '@/components/ui/navigation/sidebar';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Header';
import LayoutShell from '../LayoutShell/LayoutShell';
import './default-layout.css';

interface IDefaultLayoutProps {
    withSidebar?: boolean;
    title?: string;
}

const DefaultLayout = ({ withSidebar = true, title }: IDefaultLayoutProps) => {
    // Opcional: Mudança do título do documento dinamicamente
    useEffect(() => {
        if (title) {
            document.title = `${title} | Design System Forge`;
        }
    }, [title]);

    if (!withSidebar) {
        return (
            <>
                <LayoutShell header={<Header />}>
                    <Outlet />
                </LayoutShell>
            </>
        );
    }

    return (
        <>
            <Sidebar.Root defaultOpen>
                <LayoutShell
                    header={<Header hasSidebarTrigger={withSidebar} />}
                    sidebar={withSidebar ? <AppSidebar /> : null}
                >
                    <Outlet />
                </LayoutShell>
            </Sidebar.Root>
        </>
    );
};

export default DefaultLayout;
