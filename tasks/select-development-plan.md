# Desenvolvimento do Componente Select

## 🎯 Objetivo
Refatorar o componente `Select` para substituir a implementação atual baseada em `cloneElement/Children.map` por uma arquitetura robusta baseada em **Context API**. O objetivo é garantir flexibilidade, composição limpa e acessibilidade completa (navegação por teclado), alinhada aos padrões do Design System.

## 🔍 Análise Comparativa

| Feature | `Select` (Atual) | `Select` (Padrão/Planejado) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Gerenciamento de Estado** | Prop Drilling via `cloneElement` | `SelectContext` | Criar Contexto |
| **Composição** | Rígida (depende da estrutura direta) | Flexível (qualquer profundidade) | Remover `injectProps` |
| **Acessibilidade** | Básica (mouse only) | Completa (Keyboard Nav, ARIA) | Implementar Hooks de Acessibilidade |
| **Ref Forwarding** | Ausente | Presente em todos sub-componentes | Adicionar `forwardRef` |
| **Posicionamento** | CSS Básico | CSS Absolute/Fixed com lógica de flip (opcional, manter simples por enquanto) | Manter CSS mas preparar estrutura |
| **Tokens** | CSS Hardcoded | `select.tokens.css` | Criar Tokens |

## 🛠️ Plano de Implementação

### 1. Criação de Tokens (`select.tokens.css`)
- Cores de background, border, hover, selected.
- Dimensões do trigger e do content.
- Sombras e z-index.

### 2. Contexto (`SelectContext.tsx`)
Criar `src/contexts/components/select/SelectContext.ts`:
- **State**: `open`, `value`, `activeIndex` (para navegação teclado).
- **Actions**: `onOpenChange`, `onValueChange`, `registerOption` (opcional, para saber labels).

### 3. Refatoração dos Componentes (`Select.tsx`)

#### `SelectRoot` (Provider)
- Gerencia o estado `open` e `value` (via `useControllableState`).
- Provê o Contexto.
- Lida com fechamento ao clicar fora (hook `useClickOutside`).

#### `SelectTrigger`
- Consome Contexto.
- `aria-expanded`, `aria-haspopup`.
- `onClick` toggles open.
- `onKeyDown` (ArrowDown/Up/Enter/Space) abre o menu.

#### `SelectValue`
- Exibe o label da opção selecionada (pode precisar de um map interno de value -> label no contexto ou buscar dos children). *Estratégia:* O `SelectItem` pode registrar seu label no contexto ao montar, ou o `SelectValue` aceita um `placeholder` e o texto vem do estado se tiver.

#### `SelectContent`
- Renderiza condicionalmente (ou via CSS `visibility` para animações).
- `role="listbox"`.
- Foco gerenciado (trap focus ou roving tabindex).

#### `SelectItem`
- `role="option"`.
- `aria-selected`.
- `onClick` seleciona e fecha.
- `onMouseEnter` atualiza índice de foco visual.

### 4. Hooks Utilitários (se necessário)
- `useClickOutside`: Já existe lógica inline, extrair para hook em `src/models/hooks/useClickOutside.ts`.

### 5. Atualização do CSS (`select.css`)
- Usar novos tokens.
- Estilizar estados `data-state="open"`, `data-highlighted`.

### 6. Atualização do `SelectDemo.tsx`
- Exemplos variados (Simples, Com Scroll, Desabilitado).
