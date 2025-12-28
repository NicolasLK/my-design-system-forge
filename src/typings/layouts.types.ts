import type { ReactNode } from 'react';

/* ---------- Types ---------- */
/* --------------------------- */

/* ---------- Interfaces ---------- */

/* ---------- Shell ---------- */
export interface ILayoutShellProps {
    header: ReactNode;
    sidebar?: ReactNode;
    children: ReactNode;
}

/* -------------------------- */

/* ---------- Default ---------- */
export interface IDefaultLayoutProps {
    withSidebar?: boolean;
    title?: string;
}
/* ---------------------------- */

/* ------------------------------- */
