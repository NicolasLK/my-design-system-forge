# AGENTS.md

## Project Overview
**Name:** My Design System Forge
**Description:** A modular and reusable Design System built with React, TypeScript, and Vite. It aims to accelerate application development through consistent components, with a focus on quality, accessibility, and scalability.

## Tech Stack
-   **Framework:** React ^19.1.1
-   **Language:** TypeScript
-   **Build Tool:** Vite ^7.1.7
-   **Routing:** React Router Dom ^7.9.6
-   **Styling:** Native CSS with CSS Variables (Design Tokens)
-   **Linting/Formatting:** ESLint, Prettier

## Directory Structure
-   `src/components`:
    -   `ui`: Core reusable UI components, organized by category:
        -   `advanced` (e.g., `accordion`, `calendar`, `carousel`)
        -   `data-display`
        -   `feedback`
        -   `file-input`
        -   `form-controls`
        -   `foundations` (e.g., `divider`, `label`, `typography`)
        -   `navigation`
        -   `overlay`
        -   `tag-input`
        -   Each component folder (e.g., `button`) typically contains:
            -   `{Component}.tsx`: The component logic.
            -   `{component}.css`: The component styles.
            -   `index.tsx`: Export file.
    -   `demos`: Isolated interactive demos for showcasing components (contains `mocks` for fake data).
    -   `preview-articles`: Documentation pages combining demos and descriptions.
    -   `layouts`: Reusable application layouts (e.g., `DefaultLayout`).
-   `src/styles`: Global styles and design tokens.
    -   `tokens`: CSS variables for colors, typography, spacing, etc.
        -   `components`: Component-specific tokens (e.g., `button.tokens.css`).
    -   `base.css`, `utilities.css`: Reset and utility classes.
-   `src/models`: Shared logic, helper functions, and custom hooks.
-   `src/contexts`: React Context definitions (Theme, specific component contexts).
-   `src/pages`: Application routes/pages for the documentation site (`Router.tsx` defines the routes).
    -   `preview/categories`: Pages for specific component categories.
-   `src/typings`: TypeScript types and interfaces (e.g., component props types).
-   `src/lib/utils`: Utility helpers (e.g., `cn.ts` for class merging).

## Key Development Patterns
-   **Token-First Design:** Extensive use of CSS variables (tokens) defined in `src/styles/tokens` to maintain consistency (e.g., `--color-primary-500`, `--space-4`).
-   **Component Architecture:**
    -   Components are functional and use Hooks.
    -   Styles are defined in a companion `.css` file (e.g., `Button.tsx` and `button.css`).
    -   CSS classes are globally scoped but namespaced (e.g., `.btn`, `.btn-solid`).
-   **Class Name Management:**
    -   Uses a `cn` utility for conditional class merging.
    -   Helper functions (`getComponentColor`, `getComponentSize`, `getComponentVariant`) map props to standardized CSS classes.
-   **Component Composition:**
    -   `createComponentInjection` utility (in `src/models`) is used for advanced component composition and prop injection.
-   **Usage Example Pattern:**
    -   Components often expose variants (e.g., `solid`, `outline`) and sizes (e.g., `sm`, `md`, `lg`).
    -   Utility classes (prefixed with `u-`, e.g., `u-flex`, `u-gap-4`) are used for layout and spacing in demos/pages.
-   **Documentation:** Components are documented via "Preview Articles" which render "Demos".

## Commands
-   `npm run dev`: Start development server.
-   `npm run build`: Build for production.
-   `npm run lint`: Run ESLint.
-   `npm run preview`: Preview the production build.
