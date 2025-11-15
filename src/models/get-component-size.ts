export type ComponentSize = 'small' | 'medium' | 'large';

/**
 * Retorna a classe CSS correspondente ao tamanho do componente.
 * @param componentSize O tamanho desejado ('small', 'medium', 'large').
 * @param prefix O prefixo da classe CSS (ex: 'btn', 'input').
 * @returns A string da classe CSS (ex: 'btn-sm').
 */
export function getComponentSize(componentSize: ComponentSize, prefix: string): string {
    switch (componentSize) {
        case 'small':
            // Usa o prefixo para retornar a classe correta, ex: 'btn-sm'
            return `${prefix}-sm`; 
        case 'large':
            // ex: 'btn-lg'
            return `${prefix}-lg`;
        case 'medium':
        default:
            return ''; // Não retorna classe para o tamanho padrão
    }
}