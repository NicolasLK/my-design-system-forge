import type { ReactNode } from 'react';

/* ---------- Types ---------- */

export type SidebarState = 'expanded' | 'collapsed';
/* -------------------------- */

/* ---------- Interfaces ---------- */

export interface ISidebarProviderProps {
    defaultOpen?: boolean;
    children: ReactNode;
}
/* ------------------------------- */
