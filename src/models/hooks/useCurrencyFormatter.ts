// Hook para formatar números como moeda brasileira (BRL)

import { useCallback } from "react";

/**
 * Hook que fornece uma função para formatar valores numéricos
 * no padrão de moeda brasileira (R$ 0.000,00).
 *
 * Exemplo de uso:
 * const { formatCurrency } = useCurrencyFormatter();
 * const preco = formatCurrency(1500); // "R$ 1.500,00"
 */
export function useCurrencyFormatter() {

    // useCallback evita recriação desnecessária da função
    const formatCurrency = useCallback((value: number): string => {
        return `R$ ${value
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
    }, []);

    return { formatCurrency };
}
