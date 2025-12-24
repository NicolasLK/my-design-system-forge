import type { DotsType } from '@/typings/carousel.types';

/**
 * Retorna a classe CSS correspondente ao tipo de Dots do Carousel
 *
 * @param type Tipo do dot (rounded, rectangular, progress, numeric)
 * @param prefix Prefixo base da classe (default: carousel-dot)
 *
 * @example
 * getCarouselDotsVariant('rounded')
 * // carousel-dot-rounded
 *
 * getCarouselDotsVariant('progress')
 * // carousel-dot-progress
 */
export function getCarouselDotsVariant(
    type: DotsType = 'rounded',
    prefix = 'carousel-dot',
): string {
    if (!type || type === 'rounded') return '';

    const normalized = String(type).trim();

    /**
     * Remove caracteres inválidos
     */
    const safe = normalized.replace(/[^a-z0-9\-_]/gi, '');

    return `${prefix}-${safe}`;
}
