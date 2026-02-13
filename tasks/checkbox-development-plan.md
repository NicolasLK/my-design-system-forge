# Desenvolvimento do Componente Checkbox

## 🎯 Objetivo
Padronizar o componente `Checkbox` seguindo as diretrizes do Design System (baseado em `Input` e `Switch`).

## 🔍 Análise Comparativa

| Feature | `Input`/`Switch` (Referência) | `Checkbox` (Atual) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Ref Forwarding** | Sim | Não | Implementar `forwardRef` |
| **Geração de ID** | `genUid` | `Math.random()` inline | Usar `genUid` |
| **Controlado** | `useControllableState` | Manual | Usar hook padrão |
| **Tokens CSS** | Semânticos | Hardcoded/Genéricos | Criar `checkbox.tokens.css` |
| **Slots** | `data-slot` | Não usa | Adicionar `data-slot` |
| **Descrição** | Suporta | Não suporta | Adicionar prop `description` |
| **Erro** | Suporta mensagem | Apenas visual (border) | Adicionar `errorMessage` |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`checkbox.tokens.css`)
Criar `src/styles/tokens/components/checkbox.tokens.css`:
- Dimensões (sm, md, lg)
- Cores (border, bg, checked, disabled, error)
- Focus ring

### 2. Refatoração do `Checkbox.tsx`
- **Imports**: `forwardRef`, `genUid`, `useControllableState`, `cn`.
- **Interface**:
    - Adicionar `description`, `errorMessage`.
    - Padronizar `checked` e `onCheckedChange`.
    - Remover `variant` se não for padrão (ou mapear para tokens).
- **Estrutura**:
    ```tsx
    <div className="checkbox-root">
        <div className="checkbox-container">
            <input type="checkbox" ... />
            <div className="checkbox-indicator">
                <CheckIcon /> {/* SVG ou CSS puro */}
            </div>
            <label>...</label>
        </div>
        {description}
        {errorMessage}
    </div>
    ```

### 3. Atualização do `checkbox.css`
- Usar variáveis CSS definidas nos tokens.
- Suporte a estados: `checked`, `indeterminate` (se aplicável), `disabled`, `error`, `focus-visible`.
- Animações de check.

### 4. Atualização do `CheckboxDemo.tsx`
- Cobrir todos os novos casos de uso.
