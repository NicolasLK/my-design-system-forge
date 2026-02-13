# Desenvolvimento do Componente Radio

## 🎯 Objetivo
Padronizar o componente `Radio` seguindo as diretrizes do Design System (baseado em `Input` e `Checkbox`).

## 🔍 Análise Comparativa

| Feature | `Input`/`Checkbox` (Referência) | `Radio` (Atual) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Ref Forwarding** | Sim | Não | Implementar `forwardRef` |
| **Geração de ID** | `genUid` | `value` / `name` | Usar `genUid` se necessário |
| **Controlado** | `useControllableState` | Manual | (Verificar necessidade em contexto de grupo) |
| **Tokens CSS** | Semânticos | Hardcoded | Criar `radio.tokens.css` |
| **Slots** | `data-slot` | Não usa | Adicionar `data-slot` |
| **Descrição** | Suporta | Não suporta | Adicionar prop `description` |
| **Erro** | Suporta mensagem | Não suporta | Adicionar `errorMessage` |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`radio.tokens.css`)
Criar `src/styles/tokens/components/radio.tokens.css`:
- Dimensões (sm, md, lg) - Similar ao Checkbox, mas circular.
- Cores (border, bg, checked, disabled, error).
- Focus ring.

### 2. Refatoração do `Radio.tsx`
- **Imports**: `forwardRef`, `genUid`, `cn`.
- **Interface**:
    - Adicionar `description`, `errorMessage`.
    - Ajustar props para suportar tanto uso isolado quanto em grupo (contexto futuro).
- **Estrutura**:
    ```tsx
    <div className="radio-root">
        <div className="radio-container">
            <input type="radio" ... />
            <div className="radio-indicator">
                <span className="radio-dot" />
            </div>
            <label>...</label>
        </div>
        {description}
        {errorMessage}
    </div>
    ```

### 3. Atualização do `radio.css`
- Usar variáveis CSS definidas nos tokens.
- Estilos para o indicador circular e o "dot" central.
- Suporte a estados: `checked`, `disabled`, `error`, `focus-visible`.
- Animações de scale/opacity para o dot.

### 4. Atualização do `RadioDemo.tsx`
- Cobrir casos de uso isolado e em grupo simples.
