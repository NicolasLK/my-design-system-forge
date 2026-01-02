'use client';

import { useSidebar } from '@/contexts/components/sidebar/SidebarContext';
import { SidebarProvider } from '@/contexts/components/sidebar/SidebarProvider';
import { cn } from '@/lib/utils/cn';
import type { ISidebarProviderProps } from '@/typings/sidebar.types';
import type { ComponentProps } from 'react';
import './sidebar.css';

/* ===========================
   🧱 Sidebar Root
=========================== */

interface ISidebarRoot {
    className?: string;
}

export const SidebarRoot = ({
    children,
    className,
    ...providerProps
}: ISidebarRoot & ISidebarProviderProps) => {
    return (
        <>
            <SidebarProvider {...providerProps}>
                <section className={cn('layout-sidebar-wrapper', className)}>
                    {children}
                </section>
            </SidebarProvider>
        </>
    );
};

/* ===========================
   🧱 Panel
=========================== */

/* ---------- Types ---------- */

type SidebarSide = 'left' | 'right';

type SidebarVariant = 'sidebar' | 'floating' | 'inset';

type SidebarCollapsible = 'offcanvas' | 'icon' | 'none';
/* -------------------------- */

interface ISidebarPanelProps {
    side?: SidebarSide;
    variant?: SidebarVariant;
    collapsible?: SidebarCollapsible;
}

export const SidebarPanel = ({
    className,
    side = 'left',
    variant = 'sidebar',
    collapsible = 'offcanvas',
    children,
    ...props
}: ISidebarPanelProps & ComponentProps<'aside'>) => {
    const { isOpen, isMobile, state } = useSidebar();

    return (
        <>
            <aside
                data-state={state}
                data-variant={variant}
                data-side={side}
                data-collapsible={collapsible}
                className={cn(
                    'sidebar-panel',
                    isOpen && 'sidebar-panel--open',
                    isMobile && 'sidebar-panel--mobile',
                    className,
                )}
                style={{
                    width: isMobile
                        ? 'var(--sidebar-width-expanded)'
                        : isOpen
                        ? 'var(--sidebar-width-expanded)'
                        : 'var(--sidebar-width-collapsed)',
                }}
                {...props}
            >
                <div className="sidebar-inner">{children}</div>
            </aside>
        </>
    );
};

/* ===========================
   🧱 Sidebar Header
=========================== */

export const SidebarHeader = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div className={cn('sidebar-header', className)} {...props} />
        </>
    );
};

/* ===========================
   🧱 Sidebar Content
=========================== */

export const SidebarContent = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div className={cn('sidebar-content', className)} {...props} />
        </>
    );
};

/* ===========================
   🧱 Sidebar Footer
=========================== */

export const SidebarFooter = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div className={cn('sidebar-footer', className)} {...props} />
        </>
    );
};

/* ===========================
   🧱 Sidebar Group
=========================== */

export const SidebarGroup = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div className={cn('sidebar-group', className)} {...props} />
        </>
    );
};

/* ===========================
   📄 Inset (Main content)
=========================== */

export const SidebarInset = ({
    className,
    ...props
}: ComponentProps<'main'>) => {
    return (
        <>
            <main className={cn('sidebar-inset', className)} {...props} />
        </>
    );
};

/* ===========================
   🔘 Trigger
=========================== */

export const SidebarTrigger = ({
    className,
    ...props
}: ComponentProps<'button'>) => {
    const { toggle } = useSidebar();

    return (
        <>
            <button
                type="button"
                onClick={toggle}
                className={cn('sidebar-trigger', className)}
                aria-label="Toggle sidebar"
                {...props}
            />
        </>
    );
};
