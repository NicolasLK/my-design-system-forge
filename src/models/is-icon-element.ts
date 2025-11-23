/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Verifica se um child é um ícone (Lucide, Spinner ou qualquer componente de ícone).
 * 
 * Critérios:
 * 1. É um elemento React válido
 * 2. É um componente cuja função começa com letra maiúscula (Icones e Spinners são componentes)
 * 3. Não tem children internos (ícones normalmente não têm children)
 */
export function isIconElement(child: any): boolean {
    if (!child || typeof child !== "object") return false;
    if (!child.type) return false;

    const name = child.type.displayName || child.type.name || "";

    return (
        typeof child.type === "function" &&
        /^[A-Z]/.test(name) && // Começa com maiúscula
        !child.props?.children // Ícones não têm children internos
    );
}