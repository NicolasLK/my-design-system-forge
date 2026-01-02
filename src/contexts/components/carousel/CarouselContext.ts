'use client';

import { createContext, useContext } from 'react';

interface ICarouselContextProps {
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

// 1. Criação e Definição da Estrutura do Contexto
export const CarouselContext = createContext<ICarouselContextProps | undefined>(
    undefined,
);

// 2. Hook customizado para fácil uso em qualquer componente
export const useCarousel = () => {
    const ctx = useContext(CarouselContext);

    if (ctx === undefined) {
        throw new Error(
            'useCarousel deve ser usado dentro de CarouselProvider',
        );
    }

    return ctx;
};
