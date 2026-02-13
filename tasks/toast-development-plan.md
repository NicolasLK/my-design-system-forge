# Desenvolvimento do Componente Toast

## 🎯 Objetivo
Padronizar o componente `Toast` para um sistema robusto de notificações. A implementação atual é apenas um componente visual controlado manualmente (`visible` prop), o que é difícil de escalar. O objetivo é criar uma arquitetura baseada em **Context/Provider** (`useToast`), onde o desenvolvedor pode chamar `toast({ title: "Success", severity: "success" })` de qualquer lugar.

## 🔍 Análise Comparativa

| Feature | `Toast` (Atual) | `Toast` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Arquitetura** | Componente visual isolado | Context Provider (`ToastProvider`) | Criar Provider e Hook |
| **Controle** | Prop `visible` manual | Imperativo via Hook | Implementar Queue System |
| **Tokens** | Inexistentes/Hardcoded | `toast.tokens.css` | Criar tokens |
| **Posicionamento** | CSS simples | Gerenciado pelo Provider (Viewport) | Implementar Viewport fixo |
| **Props** | `variant` (color) | `severity` (semantic), `action` | Padronizar props |
| **Dismiss** | `onClose` manual | Timer automático + Botão fechar | Adicionar Swipe/Close Button |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`toast.tokens.css`)
- Cores de fundo, borda e texto (similar ao Alert, mas com sombras mais fortes).
- Animações de entrada (slide-in) e saída (fade-out).
- Z-index alto.

### 2. Contexto e Hook (`ToastContext.tsx`)
- `ToastProvider`: Mantém o estado de uma lista de toasts (`toasts[]`).
- `useToast`: Retorna a função `toast()` para adicionar notificações.
- `ToastViewport`: Container fixo na tela (ex: bottom-right) que renderiza a lista.

### 3. Refatoração do Componente `Toast.tsx`
- Transformar em um componente de apresentação que recebe os dados do toast.
- Usar `getComponentColor` para severidade.
- Adicionar ícone e botão de fechar padrão.

### 4. Atualização do `toast.css`
- Estilos para o Viewport (lista fixa).
- Estilos para o Toast individual (animações, layout).

### 5. Atualização do `ToastDemo.tsx`
- Exemplos chamando `toast()` via botão.

## 🚀 Próximos Passos
1.  Criar `toast.tokens.css`.
2.  Implementar `ToastContext` e `ToastProvider`.
