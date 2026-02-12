# Desenvolvimento do Componente Switch

## 🎯 Objetivo
Refatorar o componente `Switch` para alinhar com os padrões de qualidade, acessibilidade e estrutura de código estabelecidos no Design System. O componente atual possui problemas estruturais (labels aninhadas), falta de tokens semânticos e ausência de `forwardRef`.

## 🔍 Análise Comparativa

| Feature | `Input`/`Textarea` (Referência) | `Switch` (Atual) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Ref Forwarding** | Sim | Não | Implementar `forwardRef` |
| **Geração de ID** | `genUid` | `Math.random()` inline | Usar `genUid` |
| **Estrutura DOM** | Semântica e válida | `label` dentro de `label` (Inválido) | Corrigir estrutura HTML |
| **Tokens CSS** | Semânticos (`--input-bg`) | Diretos (`--color-gray-500`) | Criar `switch.tokens.css` |
| **Descrição** | Suporta `description` | Não suporta | Adicionar prop `description` |
| **Erro** | Suporta estado de erro | Não suporta | Adicionar prop `error` e `errorMessage` |
| **Slots** | `data-slot` | Não usa | Adicionar `data-slot` |

## 🛠️ Plano de Implementação

### 1. Refatoração do `Switch.tsx`

*   **Imports**: Adicionar `forwardRef`, `genUid`.
*   **Interface**:
    *   Adicionar `description: ReactNode`.
    *   Adicionar `error: boolean` e `errorMessage: string`.
    *   Manter `switchSize` (padronizar se possível, mas `switchSize` é aceitável para evitar conflitos).
*   **Componente**:
    *   Envolver em `forwardRef`.
    *   Gerar ID com `genUid`.
    *   **Correção Estrutural**:
        ```tsx
        <div className="switch-root">
             <div className="switch-container">
                <input type="checkbox" className="switch-input" ... />
                <span className="switch-track">
                    <span className="switch-thumb" />
                </span>
                <label className="switch-label">...</label>
             </div>
             {description && ...}
             {error && ...}
        </div>
        ```
    *   Garantir que o clique no `track` ou `label` ative o input.

### 2. Criação de Tokens (`switch.tokens.css`)

Criar tokens específicos para garantir flexibilidade e consistência:

```css
:root {
    /* Dimensions */
    --switch-width-md: var(--space-10);
    --switch-height-md: var(--space-6);
    --switch-thumb-size-md: var(--space-4);
    
    /* Colors */
    --switch-track-bg: var(--color-gray-500);
    --switch-track-bg-checked: var(--color-primary-500);
    --switch-thumb-bg: var(--color-white);
    
    /* Focus */
    --switch-focus-ring-color: var(--color-primary-400);
}
```

### 3. Atualização do `switch.css`

*   Usar os novos tokens.
*   Implementar variantes de tamanho (sm, md, lg).
*   Adicionar estilos para estados: `disabled`, `checked`, `focus-visible`, `error`.
*   Animações suaves para a transição do `thumb`.

### 4. Atualização do `SwitchDemo.tsx`

*   Seguir o padrão do `InputDemo` e `TextareaDemo`.
*   Exibir: Default, Com Label, Tamanhos, Erro, Desabilitado.

## ✅ Critérios de Aceite

1.  [x] O componente deve aceitar `ref`.
2.  [x] HTML deve ser válido (sem labels aninhadas).
3.  [x] Navegação por teclado deve funcionar (Tab + Space para alternar).
4.  [x] Tokens semânticos implementados.
5.  [x] Suporte a erro e descrição.