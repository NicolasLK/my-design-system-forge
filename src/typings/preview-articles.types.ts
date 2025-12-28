/* ---------- Types ---------- */

/* Advanced */
export type AdvancedComponentPreviewKey =
    | 'calendar'
    | 'date-range-picker'
    | 'carousel'
    | 'accordion'
    | 'loading-overlay';

/* --------------------------- */

/* ---------- Interfaces ---------- */

/* Advanced */
export interface IAdvancedArticleProps {
    onSelect: (key: AdvancedComponentPreviewKey) => void;
}

/* ------------------------------- */
