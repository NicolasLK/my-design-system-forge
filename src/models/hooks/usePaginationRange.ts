/**
 * Define o tipo para o indicador de reticências
 */
export const DOTS = '...';

/**
 * Hook utilitário para calcular quais páginas devem ser visíveis,
 * incluindo reticências (...).
 * * @param totalPages Número total de páginas.
 * @param currentPage Página atualmente ativa.
 * @param siblingCount Quantidade máxima de botões de página visíveis ao redor da página atual.
 * @returns Um array contendo números de página e o indicador DOTS.
 */
export function usePaginationRange(totalPages: number, currentPage: number, siblingCount: number = 1) {

    // Total de números visíveis no display (1 (first) + 1 (last) + 2 * siblingCount + 1 (current))
    const totalPageNumbers = siblingCount + 5;

    // Se o número total de páginas for menor que o que queremos mostrar, mostra todas
    if (totalPageNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calcular os índices dos vizinhos (siblings)
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // Decidir se as reticências da esquerda e da direita devem ser mostradas
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Caso 1: Sem reticências à esquerda (range à esquerda, reticências à direita)
    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const range = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...range, DOTS, lastPageIndex];
    }

    // Caso 2: Sem reticências à direita (reticências à esquerda, range à direita)
    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const start = totalPages - rightItemCount + 1;
        const range = Array.from({ length: rightItemCount }, (_, i) => start + i);
        return [firstPageIndex, DOTS, ...range];
    }

    // Caso 3: Reticências em ambos os lados
    if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    // Default (fallback, geralmente nunca atingido se totalPages for > totalPageNumbers)
    return Array.from({ length: totalPages }, (_, i) => i + 1);
}