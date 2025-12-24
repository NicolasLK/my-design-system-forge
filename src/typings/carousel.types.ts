import type { ReactNode } from 'react';

export interface ICarouselContextProps {
    currentIndex: number;
    itemsCount: number;
    setItemsCount: (count: number) => void;
    scrollPrev: () => void;
    scrollNext: () => void;
    goTo: (index: number) => void;
}

export interface ICarouselRootProps {
    children: ReactNode;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    className?: string;
}

export interface ICarouselDotsProps {
    className?: string;
}
