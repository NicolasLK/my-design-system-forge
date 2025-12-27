'use client';

import { useBreakpoint } from '@/models/hooks/useBreakpoint';
import type {
    ISidebarProviderProps,
    SidebarState,
} from '@/typings/sidebar.types';
import { useMemo, useState } from 'react';
import { SidebarContext } from './SidebarContext';

export function SidebarProvider({
    defaultOpen = true,
    children,
}: ISidebarProviderProps) {
    const isMobile = useBreakpoint();
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((v) => !v);

    const state: SidebarState = isOpen ? 'expanded' : 'collapsed';

    const value = useMemo(
        () => ({
            state,
            isOpen,
            isMobile,
            open,
            close,
            toggle,
        }),
        [state, isOpen, isMobile],
    );

    return (
        <>
            <SidebarContext.Provider value={value}>
                {children}
            </SidebarContext.Provider>
        </>
    );
}
