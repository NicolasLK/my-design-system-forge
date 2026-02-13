# Desenvolvimento do Componente Slider

## 🎯 Objetivo
Padronizar o componente `Slider` seguindo as diretrizes do Design System. O componente atual usa um `<input type="range">` estilizado com gradiente inline para o track. Vamos manter a simplicidade do input nativo (ótimo para acessibilidade móvel e desktop) mas melhorar a estrutura, tokens e props.

## 🔍 Análise Comparativa

| Feature | `Slider` (Atual) | `Slider` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Tokens** | `slider.tokens.css` (existente?) | Garantir tokens completos | Revisar/Atualizar tokens |
| **Controlado** | Lógica manual mista | `useControllableState` | Usar hook padrão |
| **Track Fill** | Inline Style (Linear Gradient) | CSS Variable + Style | Otimizar uso de variáveis CSS |
| **Props** | `full`, `showValue` | `label`, `disabled`, `error` | Adicionar props padrão |
| **Estrutura** | Input + Span | Label + Input Wrapper + Output | Melhorar semântica |

## 🛠️ Plano de Implementação

### 1. Revisão de Tokens (`slider.tokens.css`)
- Definir alturas de track (sm, md, lg).
- Definir tamanhos de thumb.
- Cores de track, range (fill), thumb, border.

### 2. Refatoração do `Slider.tsx`
- **Hook**: Usar `useControllableState`.
- **Props**:
    - `label`: Rótulo acessível.
    - `description`: Texto de ajuda.
    - `error`, `errorMessage`.
    - `formatValue`: Função para formatar o valor exibido (ex: R$ 100, 50%).
- **Style**:
    - Passar a porcentagem via CSS Variable `--slider-fill: 50%` para o container, e usar no CSS. Isso evita recriar strings de gradiente complexas no JS.

### 3. Atualização do `slider.css`
- Usar a variável `--slider-fill` para definir o background do input.
- Estilizar o Thumb (webkit-slider-thumb, moz-range-thumb).
- Estilizar focus-visible.

### 4. Atualização do `SliderDemo.tsx`
- Mostrar variantes: Com Label, Formatado (Moeda/Porcentagem), Disabled, Error.

## 🚀 Próximos Passos
1.  Verificar conteúdo atual de `slider.tokens.css`.
2.  Refatorar.
