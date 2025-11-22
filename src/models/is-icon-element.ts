/* eslint-disable @typescript-eslint/no-explicit-any */
export function isIconElement(child: any): boolean {
    if (!child || typeof child !== "object") return false;
    if (!child.type) return false;

    const name = child.type.displayName || child.type.name || "";

    return (
        typeof child.type === "function" &&
        /^[A-Z]/.test(name) && // começa com maiúscula
        !child.props?.children // ícones não têm children internos
    );
}