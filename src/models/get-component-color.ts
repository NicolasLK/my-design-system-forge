export type ComponentColor =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | "default";

/**
 * Retorna a classe CSS correspondente à variante do componente.
 * @param color Variante solicitada
 * @param prefix Prefixo do componente (ex: checkbox, tag, badge)
 * @returns Classe CSS como: "checkbox-primary"
 */
export function getComponentColor(
    color: ComponentColor,
    prefix: string
): string {
    if (!color || color === "default") return `${prefix}-primary`;

    return `${prefix}-${color}`;
}
