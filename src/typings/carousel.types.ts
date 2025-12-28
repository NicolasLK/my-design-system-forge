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

export interface ICarouselContextProps {
    axis?: 'horizontal' | 'vertical';
    currentIndex: number;
    itemsCount: number;
    slidesPerView: number;
    pagesCount: number;
    setItemsCount: (count: number) => void;
    scrollPrev: () => void;
    scrollNext: () => void;
    goTo: (index: number) => void;
}

export interface ICarouselProviderProps {
    children: ReactNode;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    slidesPerView?: SlidesPerViewConfig;
    axis?: 'horizontal' | 'vertical';
    className?: string;
}

export interface ICarouselBannerProps {
    children?: ReactNode;
    image: string;
    title?: string;
    description?: string;
    alt?: string;
}

export interface ICarouselDotsProps {
    className?: string;
    type?: DotsType;
}
/* ------------------------------- */
