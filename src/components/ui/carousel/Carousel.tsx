'use client';

import { CarouselContext, useCarousel } from '@/contexts/CarouselContext';
import { cn } from '@/lib/utils/cn';
import { getCarouselDotsVariant } from '@/models/get-carousel-dots-variant';
import { useBreakpoint } from '@/models/hooks/useBreakpoint';
import type {
    ICarouselBannerProps,
    ICarouselDotsProps,
    ICarouselRootProps,
} from '@/typings/carousel.types';
import {
    Children,
    useCallback,
    useEffect,
    useState,
    type ComponentProps,
    type KeyboardEvent,
} from 'react';
import { Button } from '../button';
import './carousel.css';

/* ===========================
   🎠 Carousel Root
=========================== */

export const CarouselRoot = ({
    children,
    autoplay = false,
    autoplayDelay = 4000,
    loop = false,
    slidesPerView = { md: 1 },
    axis = 'horizontal',
    className,
}: ICarouselRootProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    const isXs = useBreakpoint('xs');
    const isSm = useBreakpoint('sm');
    const isMd = useBreakpoint('md');
    const isLg = useBreakpoint('lg');
    const isXl = useBreakpoint('xl');

    const slides =
        (isXl && slidesPerView.xl) ||
        (isLg && slidesPerView.lg) ||
        (isMd && slidesPerView.md) ||
        (isSm && slidesPerView.sm) ||
        (isXs && slidesPerView.xs) ||
        1;

    const pagesCount = Math.ceil(itemsCount / slides);

    /* ---------- Navegação ---------- */

    const scrollPrev = useCallback(() => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? (loop ? pagesCount - 1 : 0) : prev - 1,
        );
    }, [pagesCount, loop]);

    const scrollNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev + 1 >= pagesCount ? (loop ? 0 : prev) : prev + 1,
        );
    }, [pagesCount, loop]);

    const goTo = useCallback(
        (index: number) => {
            if (index < 0) {
                setCurrentIndex(loop ? pagesCount - 1 : 0);
                return;
            }

            if (index >= pagesCount) {
                setCurrentIndex(loop ? 0 : pagesCount - 1);
                return;
            }

            setCurrentIndex(index);
        },
        [pagesCount, loop],
    );

    /* ---------- Autoplay ---------- */

    useEffect(() => {
        if (!autoplay || pagesCount <= 1) return;

        const id = setInterval(scrollNext, autoplayDelay);

        return () => clearInterval(id);
    }, [autoplay, autoplayDelay, scrollNext, pagesCount]);

    /* ---------- Keyboard ---------- */

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') scrollPrev();
        if (e.key === 'ArrowRight') scrollNext();
    };

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
                <div className={cn('carousel-wrapper', className)}>
                    <div
                        tabIndex={0}
                        role="region"
                        aria-roledescription="carousel"
                        onKeyDown={handleKeyDown}
                        className={cn('carousel', className)}
                    >
                        {children}
                    </div>
                </div>
            </CarouselContext.Provider>
        </>
    );
};

/* ===========================
   📦 Content
=========================== */

export const CarouselContent = ({
    children,
    className,
}: ComponentProps<'div'>) => {
    const { currentIndex, setItemsCount, slidesPerView, axis } = useCarousel();

    const items = Children.toArray(children);

    useEffect(() => {
        setItemsCount(items.length);
    }, [items.length, setItemsCount]);

    const isVertical = axis === 'vertical';

    return (
        <>
            <div className="carousel-viewport">
                <div
                    className={cn(
                        'carousel-track',
                        isVertical && 'carousel-track-vertical',
                        className,
                    )}
                    style={{
                        transform: isVertical
                            ? `translateY(-${currentIndex * 100}%)`
                            : `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items.map((child, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{
                                flex: `0 0 ${100 / slidesPerView}%`,
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

/* ===========================
   🧱 Item
=========================== */

export const CarouselItem = ({
    className,
    ...props
}: ComponentProps<'div'>) => {
    return (
        <>
            <div
                role="group"
                aria-roledescription="slide"
                className={cn('carousel-item', className)}
                {...props}
            />
        </>
    );
};

/* ===========================
   🖼️ Banner (Padrão com Imagem + Texto)
=========================== */

export const CarouselBanner = ({
    children,
    image,
    title,
    description,
    alt,
}: ICarouselBannerProps) => {
    return (
        <>
            <div className="carousel-banner">
                {(title || description) && (
                    <div className="carousel-banner-overlay">
                        {title && <h4>{title}</h4>}
                        {description && <p>{description}</p>}

                        {children && (
                            <div className="carousel-banner-actions">
                                {children}
                            </div>
                        )}
                    </div>
                )}
                <img
                    src={image}
                    alt={alt || title}
                    className="carousel-banner-image"
                />
            </div>
        </>
    );
};

/* ===========================
   ◀ Previous
=========================== */

export const CarouselPrevious = ({
    className,
    ...props
}: ComponentProps<typeof Button>) => {
    const { scrollPrev, axis } = useCarousel();
    const isVertical = axis === 'vertical';

    return (
        <>
            <button
                type="button"
                onClick={scrollPrev}
                className={cn(
                    'carousel-control carousel-prev',
                    isVertical && 'carousel-control-vertical',
                    className,
                )}
                {...props}
            >
                <span className="carousel-control-icon">
                    {isVertical ? '⬆' : '⬅'}
                </span>
            </button>
        </>
    );
};

/* ===========================
   ▶ Next
=========================== */

export const CarouselNext = ({
    className,
    ...props
}: ComponentProps<typeof Button>) => {
    const { scrollNext, axis } = useCarousel();
    const isVertical = axis === 'vertical';

    return (
        <>
            <button
                type="button"
                onClick={scrollNext}
                className={cn(
                    'carousel-control carousel-next',
                    isVertical && 'carousel-control-vertical',
                    className,
                )}
                {...props}
            >
                <span className="carousel-control-icon">
                    {isVertical ? '⬇' : '➡'}
                </span>
            </button>
        </>
    );
};

/* ===========================
   🔵 Dots
=========================== */

export const CarouselDots = ({
    className,
    type = 'rounded',
}: ICarouselDotsProps) => {
    const { pagesCount, currentIndex, goTo, axis } = useCarousel();
    const isVertical = axis === 'vertical';

    if (pagesCount <= 1) return null;

    /* 🔢 Numeric */
    if (type === 'numeric') {
        return (
            <span
                className={cn(
                    'carousel-dots-numeric',
                    'carousel-dots-numeric--floating',
                    className,
                )}
            >
                {currentIndex + 1} / {pagesCount}
            </span>
        );
    }

    /* 🔵 Visual dots */
    return (
        <>
            <div
                className={cn(
                    'carousel-ui',
                    isVertical && 'carousel-ui-vertical',
                    className,
                )}
            >
                <div
                    className={cn(
                        'carousel-dots',
                        isVertical && 'carousel-dots-vertical',
                    )}
                >
                    {Array.from({ length: pagesCount }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={cn(
                                'carousel-dot',
                                getCarouselDotsVariant(type),
                                index === currentIndex && 'active',
                            )}
                            onClick={() => goTo(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
