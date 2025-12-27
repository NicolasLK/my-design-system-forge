import { AppSidebar } from '@/components/AppSidebar';
import { Sidebar } from '@/components/ui/sidebar';
import type { IDefaultLayoutProps } from '@/typings/layouts.types';
import { useEffect } from 'react';
import { Header } from '../../Header';
import LayoutShell from '../LayoutShell/LayoutShell';
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
                <LayoutShell header={<Header />}>{children}</LayoutShell>
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
                    {children}
                </LayoutShell>
            </Sidebar.Root>
        </>
    );
};

export default DefaultLayout;
