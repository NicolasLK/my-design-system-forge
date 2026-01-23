/**
 * Gera as iniciais de um nome completo.
 * * Se o nome tiver mais de uma palavra, retorna a primeira letra do primeiro nome
 * e a primeira letra do último nome (ex: "Maria Silva" -> "MS").
 * Se tiver apenas uma palavra, retorna a primeira letra (ex: "Alice" -> "A").
 * @param fullName O nome completo do usuário.
 * @returns As iniciais em letras maiúsculas ou "?" se o nome for inválido/vazio.
 */
export const getInitials = (fullName?: string): string => {
    // 1. Tratamento de caso vazio/nulo
    if (!fullName) return '?';

    // 2. Divide o nome, ignorando múltiplos espaços em branco.
    const parts = fullName
        .trim()
        .split(/\s+/)
        .filter((p) => p.length > 0);

    // 3. Se não houver partes (após trim), retorna '?'
    if (parts.length === 0) return '?';

    // 4. Se houver apenas uma parte, retorna a primeira letra
    if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
    }

    // 5. Se houver duas ou mais partes, retorna a primeira letra da primeira parte
    // e a primeira letra da última parte.
    const firstNameInitial = parts[0].charAt(0).toUpperCase();
    const lastNameInitial = parts[parts.length - 1].charAt(0).toUpperCase();

    return firstNameInitial + lastNameInitial;
};
