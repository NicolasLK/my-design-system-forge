export type ComponentColor =
    | "default"
    | "neutral"
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | string;

/**
 * Retorna a classe CSS correspondente à variante do componente.
 * @param color Variante solicitada
 * Aceita:
 * - "primary"
 * - "primary-600"
 * - "success-300"
 * - "default"
 * @param prefix Prefixo do componente (ex: checkbox, tag, badge)
 * @returns Retorna a classe: `${prefix}-${variant}` ou '' para default/no-op.
 */
export function getComponentColor(
    color: ComponentColor | string,
    prefix: string
): string {
    if (!color || color === "default") return "";

    const normalized = String(color).trim();

    /**
     * Remove caracteres inválidos
     */
    const safe = normalized.replace(/[^a-z0-9\-_]/gi, "");

    /**
     * Retorna classe CSS: spinner-primary-600
     */
    return `${prefix}-${safe}`;
}
