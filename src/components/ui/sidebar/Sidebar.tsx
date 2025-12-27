'use client';

import { useSidebar } from '@/contexts/components/sidebar/SidebarContext';
import { SidebarProvider } from '@/contexts/components/sidebar/SidebarProvider';
import { cn } from '@/lib/utils/cn';
import type {
    ISidebarProviderProps,
    ISidebarRoot,
} from '@/typings/sidebar.types';
import type { ComponentProps, ReactNode } from 'react';
import './sidebar.css';

/* ===========================
  📦 Sidebar Wrapper
=========================== */

const SidebarWrapper = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <>
            <div className={cn('sidebar-wrapper', className)}>{children}</div>
        </>
    );
};

/* ===========================
   🧱 Sidebar Root
=========================== */

export const SidebarRoot = ({
    children,
    className,
    ...providerProps
}: ISidebarRoot & ISidebarProviderProps) => {
    return (
        <>
            <SidebarProvider {...providerProps}>
                <SidebarWrapper className={className}>
                    {children}
                </SidebarWrapper>
            </SidebarProvider>
        </>
    );
};

/* ===========================
   🧱 Panel
=========================== */

export const SidebarPanel = ({
    className,
    ...props
}: ComponentProps<'aside'>) => {
    const { isOpen, isMobile } = useSidebar();

    return (
        <>
            <aside
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
            />
        </>
    );
};

/* ===========================
   📄 Inset (Main content)
=========================== */

export const SidebarInset = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div className={cn('sidebar-inset', className)} {...props} />
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
