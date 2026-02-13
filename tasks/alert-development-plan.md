# Desenvolvimento do Componente Alert

## 🎯 Objetivo
Padronizar o componente `Alert` seguindo as diretrizes do Design System. O componente atual já usa um padrão de composição (`AlertRoot`, `AlertTitle`, etc.), o que é excelente. O foco será na criação de tokens robustos para suportar as variantes semânticas (info, success, warning, error) e estilos visuais (solid, outline, subtle).

## 🔍 Análise Comparativa

| Feature | `Alert` (Atual) | `Alert` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Tokens** | Inexistentes/Hardcoded | `alert.tokens.css` | Criar tokens completos |
| **Composição** | Sim (`AlertRoot`, `AlertIcon`...) | Sim | Manter e refinar |
| **Variantes** | `color`, `variant` | `variant` (solid/outline/subtle), `severity` (info/success...) | Padronizar props |
| **Ícones** | Slot genérico | Ícones padrão por severidade (opcional) ou slot | Manter slot flexível |
| **Acessibilidade** | `role="alert"` | `role="alert"` | Verificar contraste |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`alert.tokens.css`)
- Cores de fundo, borda e texto para cada severidade (`info`, `success`, `warning`, `error`, `neutral`).
- Estilos para variantes:
    - **Solid**: Fundo forte, texto branco.
    - **Outline**: Fundo transparente, borda colorida.
    - **Subtle**: Fundo suave, texto colorido (Padrão).

### 2. Refatoração do `Alert.tsx`
- **Props**:
    - Renomear `color` para `severity` (mais semântico).
    - Manter `variant` para estilo visual.
    - Remover `size` se não for essencial (geralmente alerts têm tamanho padrão, ajustando apenas pelo conteúdo).
- **Helpers**: Continuar usando `getComponentVariant` e `getComponentColor` (ajustados para novos tokens).

### 3. Atualização do `alert.css`
- Mapear os tokens para as classes geradas.
- Estilizar `alert-icon`, `alert-title`, `alert-description`.

### 4. Atualização do `AlertDemo.tsx`
- Mostrar matriz de Severidade x Variante.

## 🚀 Próximos Passos
1.  Criar `alert.tokens.css`.
2.  Atualizar CSS e Componente.
