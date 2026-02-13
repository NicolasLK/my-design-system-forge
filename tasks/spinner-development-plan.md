# Desenvolvimento do Componente Spinner

## 🎯 Objetivo
Padronizar o componente `Spinner` utilizando o sistema de tokens. A implementação atual já utiliza `getComponentSize` e `getComponentColor`, mas falta a definição formal dos tokens CSS para garantir consistência com o resto do sistema.

## 🔍 Análise Comparativa

| Feature | `Spinner` (Atual) | `Spinner` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Tokens** | CSS Hardcoded (provavelmente) | `spinner.tokens.css` | Criar tokens |
| **Tamanhos** | `spinner-md`, etc. | `spinner-size-*` via tokens | Mapear tamanhos |
| **Cores** | `spinner-primary`, etc. | `spinner-color-*` via tokens | Mapear cores |
| **Acessibilidade** | `aria-hidden="true"` | `role="status"` ou `aria-label` | Melhorar para leitores de tela |
| **Props** | `width`, `height`, `animated` | `size`, `color` | Simplificar (remover width/height manuais em favor de styles se necessário) |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`spinner.tokens.css`)
- **Dimensões**: xs, sm, md, lg, xl.
- **Cores**: primary, secondary, neutral, etc.
- **Espessura**: border-width.
- **Animação**: duração e easing.

### 2. Refatoração do `Spinner.tsx`
- Adicionar `aria-label` ou `role="status"` para acessibilidade (um spinner geralmente indica carregamento).
- Manter o uso de `getComponentSize` e `getComponentColor`.
- Remover `width`/`height` props explícitas se o sistema de tokens cobrir bem os tamanhos (ou manter como override via style).

### 3. Atualização do `spinner.css`
- Usar as variáveis CSS.
- Definir animação de rotação (`@keyframes spin`).

### 4. Atualização do `SpinnerDemo.tsx`
- Mostrar tamanhos e cores variados.

## 🚀 Próximos Passos
1.  Criar `spinner.tokens.css`.
2.  Atualizar CSS e Componente.
