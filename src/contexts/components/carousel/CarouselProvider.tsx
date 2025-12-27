'use client';

import { useBreakpoint } from '@/models/hooks/useBreakpoint';
import type { ICarouselProviderProps } from '@/typings/carousel.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CarouselContext } from './CarouselContext';

export const CarouselProvider = ({
    children,
    autoplay = false,
    autoplayDelay = 4000,
    loop = false,
    slidesPerView = { md: 1 },
    axis = 'horizontal',
}: ICarouselProviderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    /* ---------- Breakpoints ---------- */
    const isXs = useBreakpoint('xs');
    const isSm = useBreakpoint('sm');
    const isMd = useBreakpoint('md');
    const isLg = useBreakpoint('lg');
    const isXl = useBreakpoint('xl');

    const slides = useMemo(
        () =>
            (isXl && slidesPerView.xl) ||
            (isLg && slidesPerView.lg) ||
            (isMd && slidesPerView.md) ||
            (isSm && slidesPerView.sm) ||
            (isXs && slidesPerView.xs) ||
            1,
        [isXs, isSm, isMd, isLg, isXl, slidesPerView],
    );

    const pagesCount = Math.ceil(itemsCount / slides);

    /* ---------- Navegação ---------- */
    const scrollPrev = useCallback(() => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? (loop ? pagesCount - 1 : 0) : prev - 1,
        );
    }, [loop, pagesCount]);

    const scrollNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev + 1 >= pagesCount ? (loop ? 0 : prev) : prev + 1,
        );
    }, [loop, pagesCount]);

    const goTo = useCallback(
        (index: number) => {
            if (index < 0) return setCurrentIndex(loop ? pagesCount - 1 : 0);
            if (index >= pagesCount)
                return setCurrentIndex(loop ? 0 : pagesCount - 1);

            setCurrentIndex(index);
        },
        [loop, pagesCount],
    );

    /* ---------- Autoplay ---------- */
    useEffect(() => {
        if (!autoplay || pagesCount <= 1) return;

        const id = setInterval(scrollNext, autoplayDelay);
        return () => clearInterval(id);
    }, [autoplay, autoplayDelay, scrollNext, pagesCount]);

    return (
        <>
            <CarouselContext.Provider
                value={{
                    axis,
                    currentIndex,
                    itemsCount,
                    slidesPerView: slides,
                    pagesCount,
                    setItemsCount,
                    scrollPrev,
                    scrollNext,
                    goTo,
                }}
            >
                {children}
            </CarouselContext.Provider>
        </>
    );
};
