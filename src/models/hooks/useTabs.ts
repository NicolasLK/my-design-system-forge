import { useCallback, useState } from "react"

/**
 * useTabs
 *
 * Hook simples para controle de abas.
 *
 * - `active`: valor da aba ativa
 * - `setActive`: função para selecionar outra aba
 * - `isActive(value)`: retorna true/false se a aba está ativa
 *
 * Feito para ser leve, declarativo e compatível com o sistema de Tabs do projeto.
 */
export function useTabs(defaultValue: string) {
    const [active, setActive] = useState(defaultValue)

    const isActive = useCallback(
        (value: string) => active === value,
        [active]
    )

    return { active, setActive, isActive }
}