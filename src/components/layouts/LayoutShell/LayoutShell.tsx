import type { ReactNode } from 'react';
import './layout-shell.css';

interface ILayoutShellProps {
    header: ReactNode;
    sidebar?: ReactNode;
    children: ReactNode;
}

const LayoutShell = ({ header, sidebar, children }: ILayoutShellProps) => {
    return (
        <>
            <section className="app-shell-root">
                {/* Sidebar */}
                {sidebar && (
                    <aside className="app-shell-sidebar">{sidebar}</aside>
                )}

                {/* Corpo do layout */}
                <div className="app-shell-body">
                    {/* Header */}
                    {header && (
                        <header className="app-shell-header">{header}</header>
                    )}

                    <main className="app-shell-main">{children}</main>
                </div>
            </section>
        </>
    );
};

export default LayoutShell;
