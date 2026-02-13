# Desenvolvimento do Componente RadioGroup

## 🎯 Objetivo
Padronizar o componente `RadioGroup` para gerenciar coleções de `Radio` buttons de forma acessível e flexível, alinhado com o padrão do Design System.

## 🔍 Análise Comparativa

| Feature | `RadioGroup` (Atual) | `RadioGroup` (Padrão) | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **Composição** | Baseado em Array (`items`) | Composition Pattern (`<RadioGroup><Radio /></RadioGroup>`) | Refatorar para usar `children` |
| **Contexto** | Prop drilling manual | React Context | Criar `RadioGroupContext` |
| **Ref Forwarding** | Não | Sim | Implementar `forwardRef` |
| **Controlado** | Lógica interna mista | `useControllableState` | Usar hook padrão |
| **Acessibilidade** | `role="radiogroup"` | `role`, teclado (arrow keys) | Melhorar navegação via teclado |
| **Estilos** | CSS básico | Flex/Grid + Tokens | Criar `radio-group.css` (se necessário) |

## 🛠️ Plano de Implementação

### 1. Criação do Contexto (`RadioGroupContext.ts`)
- Criar contexto para compartilhar `value`, `onChange`, `name`, `disabled` e `error` com os filhos `Radio`.

### 2. Refatoração do `RadioGroup.tsx`
- **Imports**: `forwardRef`, `useControllableState`, `cn`, `RadioGroupContext`.
- **Interface**:
    - Remover `items` (array).
    - Adicionar `children`.
    - `orientation` (horizontal/vertical).
    - `label` (para o grupo todo).
    - `errorMessage`.
- **Lógica**:
    - Gerenciar estado com `useControllableState`.
    - Prover contexto para os componentes filhos.
    - Implementar navegação por teclado (Roving Tabindex ou foco gerenciado pelo navegador - *radios nativos já lidam bem com isso se tiverem o mesmo `name`*).

### 3. Atualização do `Radio` (Integração)
- Ajustar `Radio.tsx` para consumir o contexto `RadioGroupContext` (se existir) e sobrescrever props locais se necessário (prioridade: contexto > local).

### 4. Atualização do `RadioDemo.tsx`
- Adicionar exemplos usando a nova sintaxe de composição:
  ```tsx
  <RadioGroup defaultValue="opt1" label="Choose an option">
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
  </RadioGroup>
  ```
