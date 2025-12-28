import type { ComponentSize } from '@/models/get-component-size';

/* ---------- Types ---------- */
/* --------------------------- */

/* ---------- Interfaces ---------- */

export interface IDateRange {
    start: Date | null;
    end: Date | null;
}

export interface IDateRangePickerProps {
    /** Tamanho (small, medium, large) */
    size?: ComponentSize;
    /** Callback ao alterar o intervalo */
    onChange?: (range: IDateRange) => void;
    /** Define a largura total */
    full?: boolean;
    /** Classe CSS adicional */
    className?: string;
}
/* ------------------------------- */
