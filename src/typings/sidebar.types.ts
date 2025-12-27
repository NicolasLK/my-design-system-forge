import type { ReactNode } from 'react';

/* ---------- Types ---------- */

export type SidebarState = 'expanded' | 'collapsed';

export type SidebarSide = 'left' | 'right';

export type SidebarVariant = 'sidebar' | 'floating' | 'inset';

export type SidebarCollapsible = 'offcanvas' | 'icon' | 'none';

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

export interface ISidebarPanelProps {
    side?: SidebarSide;
    variant?: SidebarVariant;
    collapsible?: SidebarCollapsible;
}
