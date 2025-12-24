'use client';

import { CarouselContext, useCarousel } from '@/contexts/CarouselContext';
import { cn } from '@/lib/utils/cn';
import type {
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
    className,
}: ICarouselRootProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    const scrollPrev = useCallback(() => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? (loop ? itemsCount - 1 : 0) : prev - 1,
        );
    }, [itemsCount, loop]);

    const scrollNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev + 1 >= itemsCount ? (loop ? 0 : prev) : prev + 1,
        );
    }, [itemsCount, loop]);

    const goTo = useCallback(
        (index: number) => {
            if (itemsCount === 0) return;

            if (index < 0) {
                setCurrentIndex(loop ? itemsCount - 1 : 0);
                return;
            }

            if (index >= itemsCount) {
                setCurrentIndex(loop ? 0 : itemsCount - 1);
                return;
            }

            setCurrentIndex(index);
        },
        [itemsCount, loop],
    );

    // ⏱ Autoplay
    useEffect(() => {
        if (!autoplay || itemsCount <= 1) return;

        const id = setInterval(scrollNext, autoplayDelay);

        return () => clearInterval(id);
    }, [autoplay, autoplayDelay, scrollNext, itemsCount]);

    // ⌨ Teclado
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') scrollPrev();
        if (e.key === 'ArrowRight') scrollNext();
    };

    return (
        <>
            <CarouselContext.Provider
                value={{
                    currentIndex,
                    itemsCount,
                    setItemsCount,
                    scrollPrev,
                    scrollNext,
                    goTo,
                }}
            >
                <div
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    role="region"
                    aria-roledescription="carousel"
                    className={cn('carousel', className)}
                >
                    {children}
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
    const { currentIndex, setItemsCount } = useCarousel();

    const items = Children.toArray(children);

    useEffect(() => {
        setItemsCount(items.length);
    }, [items.length, setItemsCount]);

    return (
        <>
            <div className="carousel-viewport">
                <div
                    className={cn('carousel-track', className)}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items}
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
   ◀ Previous
=========================== */

export const CarouselPrevious = ({
    className,
    ...props
}: ComponentProps<typeof Button>) => {
    const { scrollPrev } = useCarousel();

    return (
        <>
            <Button
                type="button"
                onClick={scrollPrev}
                className={cn('carousel-control carousel-prev', className)}
                {...props}
            >
                ‹
            </Button>
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
    const { scrollNext } = useCarousel();

    return (
        <>
            <Button
                type="button"
                onClick={scrollNext}
                className={cn('carousel-control carousel-next', className)}
                {...props}
            >
                ›
            </Button>
        </>
    );
};

/* ===========================
   🔵 Dots
=========================== */

export const CarouselDots = ({ className }: ICarouselDotsProps) => {
    const { itemsCount, currentIndex, goTo } = useCarousel();

    if (itemsCount <= 1) return null;

    return (
        <>
            <div className={cn('carousel-dots', className)}>
                {Array.from({ length: itemsCount }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={cn(
                            'carousel-dot',
                            index === currentIndex && 'active',
                        )}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
};
