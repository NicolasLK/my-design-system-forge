// 'use client';

// import {
//     Children,
//     useCallback,
//     useEffect,
//     useState,
//     type KeyboardEvent,
//     type ReactNode,
// } from 'react';
// import { createComponentInjection } from '@/models/create-component-injection';
// import { cn } from '@/lib/utils/cn';
// import './carousel.css';

// /* ===========================
//    🧠 Tipos
// =========================== */

// interface ICarouselControlProps {
//     currentIndex?: number;
//     setCurrentIndex?: (index: number) => void;
//     itemsCount?: number;
//     className?: string;
// }

// // interface CarouselInjectedProps {
// //     currentIndex?: number;
// //     setCurrentIndex?: (index: number) => void;
// //     itemsCount?: number;
// //     setItemsCount?: (count: number) => void;
// // }

// /* ===========================
//    🎠 Carousel Root
// =========================== */
// interface ICarouselRootProps {
//     children: ReactNode;
//     loop?: boolean;
//     initialIndex?: number;
//     autoplay?: boolean;
//     autoplayDelay?: number;
//     className?: string;
// }

// export const CarouselRoot = ({
//     children,
//     loop = false,
//     initialIndex = 0,
//     autoplay = true,
//     autoplayDelay = 2000,
//     className,
// }: ICarouselRootProps) => {
//     const [currentIndex, setCurrentIndex] = useState(initialIndex);
//     const [itemsCount, setItemsCount] = useState(0);

//     const goTo = useCallback(
//         (index: number) => {
//             if (itemsCount === 0) return;
//             let next = index;
//             if (index < 0) next = loop ? itemsCount - 1 : 0;
//             if (index >= itemsCount) next = loop ? 0 : itemsCount - 1;
//             setCurrentIndex(next);
//         },
//         [itemsCount, loop],
//     );

//     const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
//         if (e.key === 'ArrowRight') goTo(currentIndex + 1);
//         if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
//     };

//     // UseEffect para controlar o autoplay
//     useEffect(() => {
//         if (!autoplay || itemsCount === 0) return;

//         const id = setInterval(() => goTo(currentIndex + 1), autoplayDelay);

//         return () => clearInterval(id);
//     }, [autoplay, autoplayDelay, itemsCount, currentIndex, goTo]);

//     // const injected = {
//     //     currentIndex,
//     //     setCurrentIndex: goTo,
//     //     itemsCount,
//     //     setItemsCount,
//     // };

//     return (
//         <div
//             role="region"
//             aria-roledescription="carousel"
//             tabIndex={0}
//             onKeyDown={handleKeyDown}
//             data-slot="carousel-root"
//             className={cn('carousel', className)}
//         >
//             {createComponentInjection({
//                 children,
//                 injected: {
//                     currentIndex,
//                     setCurrentIndex: goTo,
//                     itemsCount,
//                     setItemsCount,
//                 },
//                 transformer: carouselTransformer,
//             })}
//         </div>
//     );
// };

// /* ===========================
//    📦 Content
// =========================== */
// interface ICarouselContentProps {
//     children: ReactNode;
//     className?: string;
//     currentIndex?: number;
//     setItemsCount?: (count: number) => void;
// }

// export const CarouselContent = ({
//     children,
//     className,
//     currentIndex = 0,
//     setItemsCount,
//     ...props
// }: ICarouselContentProps) => {
//     const itemsArray = Children.toArray(children);

//     useEffect(() => {
//         if (itemsArray.length > 0 && setItemsCount) {
//             setItemsCount(itemsArray.length);
//         }
//     }, [itemsArray.length, setItemsCount]);

//     // const mappedChildren = Children.map(children, (child) => {
//     //     if (!isValidElement(child)) {
//     //         return child;
//     //     }

//     //     if (child.type === CarouselItem) {
//     //         return cloneElement(child as ReactElement, {
//     //             // Injeções extras se necessário
//     //         });
//     //     }

//     //     return child;
//     // });

//     const { itemsCount: _, ...filteredProps } = props as any;

//     return (
//         <div className="carousel-viewport">
//             <div
//                 className={cn('carousel-track', className)}
//                 style={{
//                     display: 'flex',
//                     transform: `translateX(-${currentIndex * 100}%)`,
//                     transition: 'transform 0.5s ease-in-out',
//                 }}
//                 {...filteredProps}
//             >
//                 {children}
//             </div>
//         </div>
//     );
// };

// /* ===========================
//    🧱 Item
// =========================== */
// interface ICarouselItemProps {
//     children: ReactNode;
//     className?: string;
// }

// export const CarouselItem = ({ children, className }: ICarouselItemProps) => {
//     return (
//         <div
//             role="group"
//             aria-roledescription="slide"
//             data-slot="carousel-item"
//             className={cn('carousel-item', className)}
//         >
//             {children}
//         </div>
//     );
// };

// /* ===========================
//    ◀ Previous
// =========================== */

// export const CarouselPrevious = ({
//     currentIndex,
//     setCurrentIndex,
//     itemsCount,
//     className,
//     ...props
// }: ICarouselControlProps) => {
//     if (!itemsCount) return null;

//     return (
//         <button
//             type="button"
//             data-slot="carousel-prev"
//             className={cn('carousel-control carousel-prev', className)}
//             onClick={() => setCurrentIndex?.((currentIndex ?? 0) - 1)}
//             {...props}
//         >
//             ‹
//         </button>
//     );
// };

// /* ===========================
//    ▶ Next
// =========================== */

// export const CarouselNext = ({
//     currentIndex,
//     setCurrentIndex,
//     itemsCount,
//     className,
//     ...props
// }: ICarouselControlProps) => {
//     if (!itemsCount) return null;

//     return (
//         <button
//             type="button"
//             data-slot="carousel-next"
//             className={cn('carousel-control carousel-next', className)}
//             onClick={() => setCurrentIndex?.((currentIndex ?? 0) + 1)}
//             {...props}
//         >
//             ›
//         </button>
//     );
// };

// interface ICarouselDotsProps {
//     currentIndex?: number;
//     setCurrentIndex?: (index: number) => void;
//     itemsCount?: number;
//     className?: string;
// }

// export const CarouselDots = ({
//     currentIndex,
//     setCurrentIndex,
//     itemsCount = 0,
//     className,
//     ...props
// }: ICarouselDotsProps) => {
//     if (!itemsCount) return null;

//     return (
//         <div className={cn('carousel-dots', className)}>
//             {Array.from({ length: itemsCount }).map((_, index) => (
//                 <button
//                     key={index}
//                     type="button"
//                     className={cn(
//                         'carousel-dot',
//                         index === currentIndex && 'active',
//                     )}
//                     onClick={() => setCurrentIndex?.(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     {...props}
//                 />
//             ))}
//         </div>
//     );
// };

// /* ============================================================
//  * 🧩 TRANSFORMER
//  * ============================================================ */
// function carouselTransformer(
//     elementType: any,
//     _props: Record<string, unknown>,
//     injected: Record<string, unknown>,
// ) {
//     if (elementType === CarouselContent) {
//         return {
//             currentIndex: injected.currentIndex,
//             setItemsCount: injected.setItemsCount,
//             itemsCount: injected.itemsCount,
//         };
//     }

//     if (
//         elementType === CarouselPrevious ||
//         elementType === CarouselNext ||
//         elementType === CarouselDots
//     ) {
//         return {
//             currentIndex: injected.currentIndex,
//             setCurrentIndex: injected.setCurrentIndex,
//             itemsCount: injected.itemsCount,
//         };
//     }

//     return null;
// }
