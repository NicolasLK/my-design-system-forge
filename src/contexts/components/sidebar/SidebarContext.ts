import type { SidebarState } from '@/typings/sidebar.types';
import { createContext, useContext } from 'react';

interface ISidebarContextProps {
    state: SidebarState;
    isOpen: boolean;
    isMobile: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const SidebarContext = createContext<ISidebarContextProps | null>(null);

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) {
        throw new Error('useSidebar deve ser usado dentro de SidebarProvider');
    }
    return ctx;
}
