# Desenvolvimento do Componente Textarea

## 🎯 Objetivo
Refatorar o componente `Textarea` para alinhar com os padrões de qualidade, acessibilidade e estrutura de código estabelecidos nos componentes `Input` e `Button`. O componente atual está funcional mas desatualizado em relação aos tokens do sistema e práticas de React utilizadas no projeto.

## 🔍 Análise Comparativa

| Feature | `Input` (Referência) | `Textarea` (Atual) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Ref Forwarding** | Usa `forwardRef` | Não usa | Implementar `forwardRef` |
| **Geração de ID** | `genUid` (helper) | `Math.random()` inline | Usar `genUid` |
| **Props de Tamanho** | `inputSize` | `size` | Padronizar para `textareaSize` ou manter `size` (visto que `<textarea>` nativo não tem atributo `size`) |
| **Descrição** | Suporta `description` | Não suporta | Adicionar prop `description` |
| **Estrutura DOM** | `container` > `label` > `wrapper` > `field` | `wrapper` > `label` > `textarea` | Adotar estrutura similar (sem wrapper interno se não houver ícones) |
| **Tokens CSS** | Semânticos (`--input-border`, etc.) | Diretos (`--color-gray-500`) | Migrar para tokens semânticos (`--textarea-*` ou reutilizar `--input-*`) |
| **Slots** | Usa `data-slot` | Não usa | Adicionar `data-slot` |
| **Full Width** | Prop `fullWidth` | CSS `width: 100%` fixo | Implementar prop `fullWidth` para controle |

## 🛠️ Plano de Implementação

### 1. Refatoração do `Textarea.tsx`

*   **Imports**: Adicionar `forwardRef`, `genUid`.
*   **Interface**:
    *   Adicionar `description: ReactNode`.
    *   Adicionar `fullWidth: boolean`.
    *   Remover `value`/`defaultValue` da interface explícita (herdar de `TextareaHTMLAttributes`).
    *   Renomear ou manter `size` (decisão: manter `size` pois não conflita com atributo HTML de textarea, mas alinhar comportamento).
*   **Componente**:
    *   Envolver em `forwardRef`.
    *   Implementar lógica de ID com `genUid`.
    *   Estruturar JSX com `data-slot`.
    *   Renderizar `description` condicionalmente (sem erro).

```tsx
// Exemplo de estrutura desejada
export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
    ({ className, size = 'md', ...props }, ref) => {
        return (
            <div className="textarea-root" ...>
                <label ... />
                <textarea className="textarea-field" ref={ref} ... />
                <description ... />
                <error ... />
            </div>
        )
    }
)
```

### 2. Atualização do `textarea.css`

*   **Tokens**: **NÃO reutilizar tokens de outros componentes (como `input`).** Criar tokens exclusivos para o textarea (`--textarea-*`) para garantir independência e facilidade de manutenção.
*   **Classes**:
    *   `textarea-root` (Container principal)
    *   `textarea-label` (Estilo de label padronizado)
    *   `textarea-field` (O elemento input real)
    *   `textarea-description`
    *   `textarea-error-message`
*   **Estados**:
    *   Focus ring deve ser visualmente consistente, mas usando variáveis próprias.
    *   Estado `disabled` deve seguir o padrão visual.
    *   Estado `error` deve pintar a borda e o texto de erro.

### 3. Tokens (Obrigatório)

Criar um conjunto de tokens exclusivos no arquivo CSS do componente ou no sistema de tokens global:

```css
:root {
    --textarea-border: ...;
    --textarea-radius: ...;
    --textarea-bg: ...;
    --textarea-focus-ring-color: ...;
    /* Adicionar outros conforme necessário */
}
```

### 4. Ícones

*   **Política de Ícones**: Implementar suporte a ícones **apenas se for estritamente necessário** para a funcionalidade do Textarea (ex: resize handle customizado). Diferente do Input, Textarea raramente precisa de ícones de prefixo/sufixo decorativos internos. Se não houver caso de uso claro, não implementar complexidade desnecessária de wrappers de ícone.

## ✅ Critérios de Aceite

1.  O componente deve aceitar `ref`.
2.  IDs de acessibilidade (label `for` -> textarea `id`) devem ser gerados automaticamente se não fornecidos.
3.  Estilo visual (borda, radius, cores, focus) deve ser **idêntico** ao `Input`.
4.  Suporte a mensagem de erro e descrição auxiliar.
5.  Código limpo e tipado corretamente.
