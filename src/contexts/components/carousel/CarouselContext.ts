'use client';

import type { ICarouselContextProps } from '@/typings/carousel.types';
import { createContext, useContext } from 'react';

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
