/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from "react";

// Define o tipo para a direção de ordenação
type SortDirection = "asc" | "desc";

// Define as props de entrada para o hook
interface IUseSortProps {
    data: Record<string, any>[];
    initialSortKey?: string;
    initialSortDir?: SortDirection;
}

/**
 * Hook utilitário para gerenciar a lógica de ordenação de dados em uma tabela.
 * * Retorna os dados ordenados (`sortedData`), a chave e direção atuais,
 * e a função para alternar o estado de ordenação (`toggleSort`).
 */
export function useTableSort({ data, initialSortKey = "", initialSortDir = "asc" }: IUseSortProps) {
    const [sortKey, setSortKey] = useState<string>(initialSortKey);
    const [sortDir, setSortDir] = useState<SortDirection>(initialSortDir);

    const sortedData = useMemo(() => {
        if (!sortKey) return data;

        // Cria uma cópia dos dados antes de ordenar (evita mutação do estado original)
        return [...data].sort((a, b) => {
            const valA = a[sortKey];
            const valB = b[sortKey];

            // Lógica de comparação (considera apenas menor/maior que)
            if (valA < valB) return sortDir === "asc" ? -1 : 1;
            if (valA > valB) return sortDir === "asc" ? 1 : -1;
            return 0;
        });
    }, [data, sortKey, sortDir]);

    const toggleSort = useCallback((key: string) => {
        if (sortKey === key) {
            // Alterna a direção se a mesma coluna for clicada novamente
            setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
        } else {
            // Define nova coluna e reseta a direção para ascendente
            setSortKey(key);
            setSortDir("asc");
        }
    }, [sortKey]);

    return { sortedData, sortKey, sortDir, toggleSort };
}