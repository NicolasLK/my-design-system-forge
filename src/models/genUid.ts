/**
 * @description Gera um identificador único (UID) combinando timestamp, letras maiúsculas/minúsculas,
 * números e símbolos especiais. Ideal para criar IDs curtos e únicos no frontend.
 *
 * @param {number} [length=20] - Comprimento da parte aleatória do UID.
 * @returns {string} Um UID único contendo letras, números e símbolos.
 *
 * @example
 * const id = uid();
 * console.log(id);
 * // Exemplo de saída: "mb3tx6cW!Fqz1K@HnU7s^pD"
 */
export function genUid(length = 20) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?';
  const head = Date.now().toString(36);
  let tail = '';

  for (let i = 0; i < length; i++) {
    tail += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return head + tail;
}