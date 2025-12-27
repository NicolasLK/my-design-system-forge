import type { ISidebarContextProps } from '@/typings/sidebar.types';
import { createContext, useContext } from 'react';

export const SidebarContext = createContext<ISidebarContextProps | null>(null);

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) {
        throw new Error('useSidebar deve ser usado dentro de SidebarProvider');
    }
    return ctx;
}
