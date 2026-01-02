import type { ReactNode } from 'react';

/* ---------- Types ---------- */

type SlidesPerViewConfig = Partial<{
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}>;

export type DotsType = 'rounded' | 'rectangular' | 'progress' | 'numeric';
/* --------------------------- */

/* ---------- Interfaces ---------- */

export interface ICarouselProviderProps {
    children: ReactNode;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    slidesPerView?: SlidesPerViewConfig;
    axis?: 'horizontal' | 'vertical';
    className?: string;
}
/* ------------------------------- */
