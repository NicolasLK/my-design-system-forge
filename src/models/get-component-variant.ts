export type ComponentVariant =
    | "default"
    | "outline"
    | "ghost"
    | "text"
    | string;

/**
* Gera uma classe CSS para a variante visual de qualquer componente.
* Padrão: `${prefix}-${variant}`
* 
* Exemplos:
* getComponentVariant("outline", "btn")  → "btn-outline"
* getComponentVariant("ghost", "card")   → "card-ghost"
* getComponentVariant("default", "tag")  → ""
*/
export function getComponentVariant(
    variant: ComponentVariant | string,
    prefix: string
) {
    if (!variant || variant === "default") return "";

    const normalized = String(variant).trim();

    /**
     * Remove caracteres inválidos
     */
    const safe = normalized.replace(/[^a-z0-9\-_]/gi, "");

    return `${prefix}-${safe}`;
}