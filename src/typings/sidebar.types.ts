/* ---------- Types ---------- */

import type { ReactNode } from 'react';

export type SidebarState = 'expanded' | 'collapsed';

/* ---------- Interfaces ---------- */

export interface ISidebarContextProps {
    state: SidebarState;
    isOpen: boolean;
    isMobile: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export interface ISidebarProviderProps {
    defaultOpen?: boolean;
    children: ReactNode;
}

export interface ISidebarRoot {
    className?: string;
}
