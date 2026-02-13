# Plano de Padronização e Desenvolvimento do Design System

## 🎯 Objetivo
Padronização e desenvolvimento completo do design system, utilizando todos os recursos disponíveis no projeto e seguindo rigorosamente os padrões estabelecidos.

## 📋 Escopo Geral

### 1. Padronização de Componentes Existentes
- **Revisão de Estrutura:** Garantir que todos os componentes sigam a estrutura de pastas e arquivos definida (`component.tsx`, `component.css`, `index.ts`).
- **Tokens de Design:** Migrar valores hardcoded para tokens semânticos e de fundação (`tokens/`).
- **Tipagem:** Assegurar tipagem forte com TypeScript, exportando interfaces adequadas.
- **Acessibilidade:** Verificar atributos ARIA, navegação por teclado e contraste.
- **API Consistente:** Padronizar props como `className`, `style`, `ref` (forwardRef), `size`, `variant`, `disabled`, `error`.

### 2. Desenvolvimento de Novos Componentes
- Identificar componentes faltantes essenciais para um Design System robusto (ex: Modal, Toast, Tooltip, etc., se ainda não completos).
- Implementar seguindo os padrões "gold standard" definidos (ex: Input/Textarea).

### 3. Documentação e Demos
- **Demos:** Criar ou atualizar arquivos de demonstração em `src/components/demos/` para cobrir todos os estados e variantes.
- **Storybook/Preview:** Garantir que todos os componentes estejam visíveis e testáveis na aplicação de preview.

### 4. Infraestrutura e Utilitários
- Revisar e otimizar hooks e utilitários em `src/lib/` e `src/models/`.
- Garantir que funções como `cn` (classnames) sejam usadas consistentemente.

## 🚀 Próximos Passos Prioritários
1.  Levantamento do estado atual de cada componente.
2.  Definição de ordem de prioridade para refatoração/criação.
3.  Execução iterativa (um componente/grupo por vez).
