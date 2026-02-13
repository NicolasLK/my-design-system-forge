# Project Context: My Design System Forge

## 1. Project Identity
*   **Name**: My Design System Forge
*   **Stack**: React 19, TypeScript 5.9, Vite 7.
*   **Type**: Design System / Component Library.
*   **Styling Engine**: Custom CSS Variables (Tokens) + Custom Utility Classes. **NO Tailwind CSS framework** (though utilities mimic Tailwind naming).

## 2. Architecture & Patterns

### Styling Strategy
*   **Tokens**: Defined in `src/styles/tokens/`.
    *   `foundation.css`: Primitive values (colors, spacing, typography).
    *   `semantic.css`: Semantic aliases (e.g., `--action-primary`, `--status-success`).
    *   `component/`: Component-specific tokens (e.g., `--switch-track-bg`).
*   **Utilities**: `src/styles/utilities.css` provides atomic classes (e.g., `.u-flex`, `.u-mt-4`, `.u-text-center`). Note the `.u-` prefix to avoid collisions.
*   **Component Styles**: Each component has a co-located `.css` file (e.g., `button.css`) importing or using these variables.

### Component Architecture
*   **Structure**:
    *   Directory: `src/components/ui/<category>/<component>/`
    *   Files: `Component.tsx`, `component.css`, `index.tsx`.
*   **Implementation Details**:
    *   Props extend standard HTML attributes (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`).
    *   **Class Merging**: Uses `cn()` utility (likely `clsx` + `tailwind-merge` equivalent) from `@/lib/utils/cn`.
    *   **Variant Handling**: Uses helper functions in `src/models/` to map props to classes:
        *   `getComponentColor(color, prefix)`
        *   `getComponentSize(size, prefix)`
        *   `getComponentVariant(variant, prefix)`
    *   **Ref Forwarding**: Newer/Refactored components should use `forwardRef`.
    *   **IDs**: Use `genUid` for accessible ID generation.

### State Management
*   **Global**: minimal, uses React Context (`ThemeContext`).
*   **Local**: Standard React hooks.

## 3. Directory Map
*   `src/components/ui`: Core library components organized by category (foundation, form-controls, etc.).
*   `src/components/demos`: Usage examples for documentation.
*   `src/styles`: Global CSS, tokens, and utilities.
*   `src/models`: Logic and helpers (color mapping, hooks like `useAccordion`).
*   `src/lib`: Shared utilities (e.g., `cn.ts`).
*   `tasks/`: Active development plans and refactoring tasks.

## 4. Development Standards
*   **Naming Conventions**:
    *   Components: `PascalCase.tsx`
    *   Styles: `kebab-case.css`
    *   Folders: `kebab-case` usually, but component folders match component name often.
*   **Imports**: Use `@/` alias for `src/`.
*   **Linting**: ESLint + Prettier.

## 5. Current Status & Tasks
*   **Refactoring**: Active effort to standardize components.
*   **Switch Component**: Plan exists (`tasks/switch-development-plan.md`) to refactor `Switch` to support `forwardRef`, semantic tokens, and better HTML structure.
