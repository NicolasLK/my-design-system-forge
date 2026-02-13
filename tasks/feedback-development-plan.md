# Desenvolvimento da Categoria Feedback

## 🎯 Objetivo
Padronizar os componentes de feedback (`Alert`, `Toast`, `Spinner`, `Progress`, `Skeleton`) seguindo as diretrizes do Design System. O foco é garantir consistência visual através de tokens, acessibilidade (ARIA roles) e uma API limpa e previsível.

## 🔍 Análise Comparativa e Status

| Componente | Status Atual | Ação Necessária | Prioridade |
| :--- | :--- | :--- | :--- |
| **Alert** | Existente | Padronizar tokens, ícones e variantes (`info`, `success`, `warning`, `error`). | Alta |
| **Toast** | Existente | Verificar sistema de notificações (Provider/Context), animações e posicionamento. | Alta |
| **Spinner** | Existente | Padronizar tamanhos e cores. | Média |
| **Progress** | Existente | Garantir acessibilidade (`role="progressbar"`) e variantes de cor/tamanho. | Média |
| **Skeleton** | Existente | Efeito de shimmer/pulse via CSS puro e tokens. | Baixa |

## 🛠️ Plano de Implementação Geral

Para cada componente, seguiremos o fluxo:
1.  **Tokens**: Criar/Atualizar `[component].tokens.css` em `src/styles/tokens/components/`.
2.  **Componente**: Refatorar `[Component].tsx` para usar `getComponentSize`, `getComponentVariant` (se aplicável) e `getComponentColor`.
3.  **Estilos**: Atualizar `[component].css` consumindo os tokens.
4.  **Demo**: Atualizar `[Component]Demo.tsx` com todos os casos de uso.

## 📋 Detalhamento por Componente

### 1. Alert 🚨
- **Tokens**: `alert-bg`, `alert-border`, `alert-text`, `alert-icon-color` para cada variante (`info`, `success`, `warning`, `error`).
- **Props**: `variant` (color), `title`, `description`, `icon`, `onClose` (dismissible).
- **Acessibilidade**: `role="alert"`.

### 2. Toast 🍞
- **Arquitetura**: Provider + Hook (`useToast`).
- **Tokens**: Semelhante ao Alert, mas com sombras e z-index elevados.
- **Features**: Auto-dismiss, ação (botão), posicionamento (top-right, bottom-right, etc.).

### 3. Spinner 🌀
- **Tokens**: `spinner-size-*`, `spinner-color`, `spinner-border-width`.
- **Implementação**: SVG ou CSS border animation.
- **Props**: `size`, `color`.

### 4. Progress (Linear & Circular) 📊
- **Tokens**: `progress-bg`, `progress-fill`, `progress-height`.
- **Props**: `value` (0-100), `max`, `showValue`, `size`, `color`.
- **Acessibilidade**: `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.

### 5. Skeleton 💀
- **Tokens**: `skeleton-bg-start`, `skeleton-bg-end` (para gradiente/animação).
- **Props**: `width`, `height`, `shape` (circle/rect), `animation` (pulse/wave/none).

## 🚀 Próximos Passos
Iniciar com o componente **Alert**, pois é fundamental para mensagens de feedback em formulários e ações do sistema.
