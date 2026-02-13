# Desenvolvimento do Componente Textarea

## 🎯 Objetivo
Padronizar o componente `Textarea` seguindo as diretrizes do Design System (alinhado com `Input` e `Select`). Embora já esteja funcional, vamos garantir que ele utilize os tokens corretamente e siga a mesma estrutura de props e renderização dos outros form controls.

## 🔍 Análise Comparativa

| Feature | `Textarea` (Atual) | `Textarea` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Tokens** | Parcialmente implementados | `textarea.tokens.css` completo | Revisar e expandir tokens |
| **Ref Forwarding** | Sim | Sim | Manter |
| **Geração de ID** | Sim (`genUid`) | Sim | Manter |
| **Estrutura** | Div wrapper + Label + Textarea + Error + Desc | Padronizada | Ajustar classes e ordem se necessário |
| **Acessibilidade** | `aria-invalid` | `aria-invalid`, `aria-describedby` | Melhorar associação de descrição/erro |
| **Props** | `fullWidth`, `error`, `errorMessage` | Padronizadas | Verificar consistência com Input |

## 🛠️ Plano de Implementação

### 1. Revisão de Tokens (`textarea.tokens.css`)
- Garantir que as variáveis de cor, borda, foco e erro estejam alinhadas com `input.tokens.css` para consistência visual.
- Verificar se `focus-ring` está usando a mesma lógica.

### 2. Refatoração do `Textarea.tsx`
- **Acessibilidade**: Adicionar `aria-describedby` apontando para o ID da mensagem de erro ou descrição.
- **Classes**: Garantir que as classes sigam o padrão BEM ou utilitário do projeto.
- **Estrutura**:
    - Wrapper: `textarea-root`
    - Label: `textarea-label`
    - Field: `textarea-field`
    - Error/Description: Abaixo do field.

### 3. Atualização do `textarea.css`
- Consumir os tokens revisados.
- Garantir estados `focus-visible`, `disabled`, `error` idênticos ao `Input`.

### 4. Atualização do `TextareaDemo.tsx`
- O demo atual já é bom, mas vamos revisar se cobre todos os casos (ex: descrição + erro simultâneos, embora a lógica geralmente mostre um ou outro).

## 🚀 Próximos Passos
1.  Comparar `textarea.tokens.css` com `input.tokens.css`.
2.  Aplicar melhorias de acessibilidade no componente.
