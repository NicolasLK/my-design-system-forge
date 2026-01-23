/**
 * Retorna a classe CSS de tema vinculada ao prefixo do componente.
 * * @param theme - O tema desejado ('light', 'dark').
 * @param prefix - O prefixo do componente (ex: 'btn', 'card').
 * @returns A string da classe CSS (ex: 'btn-dark').
 */
export function getComponentTheme(
    theme: 'light' | 'dark' = 'light',
    prefix: string,
): string {
    const selectedTheme = theme || 'light';
    return `${prefix}-${selectedTheme}`;
}
