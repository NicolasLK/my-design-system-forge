import type { ILayoutShellProps } from '@/typings/layouts.types';
import './layout-shell.css';

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
