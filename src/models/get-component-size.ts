export type ComponentSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'icon-xs'
    | 'icon-sm'
    | 'icon'
    | 'icon-lg';

/**
 * Retorna a classe CSS correspondente ao tamanho do componente.
 * Suporta tamanhos padrão, reduções e variações específicas para botões de ícone.
 * * @param componentSize - O tamanho desejado (ex: 'sm', 'icon-sm', 'lg').
 * @param prefix - O prefixo da classe CSS (ex: 'btn').
 * @returns A string da classe CSS formatada (ex: 'btn-icon-sm').
 * * Exemplos:
 * getComponentSize("sm", "btn")      → "btn-sm"
 * getComponentSize("icon-sm", "btn") → "btn-icon-sm"
 * getComponentSize("md", "btn")      → "" (padrão)
 */
export function getComponentSize(
    componentSize: ComponentSize = 'md',
    prefix: string,
): string {
    /** Mapeamento de normalização para encurtar nomes se necessário */
    const sizeMap: Record<string, string> = {
        'extra-small': 'xs',
        small: 'sm',
        medium: 'md',
        large: 'lg',
        default: 'md',
    };

    const normalizedSize = sizeMap[componentSize] || componentSize;

    // Se for o tamanho padrão (md/medium), geralmente não retorna classe extra
    if (normalizedSize === 'md') {
        return '';
    }

    /** Limpa a string e retorna o sufixo.
     * Ex: "icon-sm" vira "btn-icon-sm"
     */
    const safeSize = String(normalizedSize)
        .trim()
        .replace(/[^a-z0-9\-_]/gi, '');

    return `${prefix}-${safeSize}`;
}
