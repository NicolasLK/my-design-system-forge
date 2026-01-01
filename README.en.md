# 🔥 My Design System Forge

<p align="center">
  <strong>🌐 Language:</strong>
  <a href="./README.en.md">🇺🇸 English</a> |
  <a href="./README.md">🇧🇷 Português</a>
</p>

> A modular and reusable Design System built with **React**, **TypeScript**, and **Vite** — designed to accelerate application development through consistent components, with a strong focus on quality, accessibility, and scalability.

---

## 🧱 Overview

**My Design System Forge** is a frontend project that provides reusable UI components, design tokens, and usage guidelines to facilitate the creation of consistent interfaces in React applications. It offers a modern setup with:

-   🛠 **React + TypeScript**
-   ⚡ **Vite** for fast development and build times
-   🎨 Token-first styling architecture

> A **Design System** is a collection of reusable patterns, styles, and components that ensures visual consistency, accelerates development, and improves collaboration between design and engineering teams.

---

## 📦 Repository Structure

```bash
├── .devcontainer/ # Remote development environment configuration (VS Code Dev Containers)
├── public/ # Public files served directly by Vite (favicon, static images, etc.)
├── src/ # Application / library source code
│ ├── assets/ # Static assets (images, SVGs, fonts)
│ ├── components/ # General and project-specific components
│ │  ├── demos/ # Isolated demos for showcasing components
│ │  │  ├── mocks/ # Mocked data used in demos only
│ │  │  │  ├── {mock-data}.ts # Fake data structures
│ │  │  │  └── # Other mock files
│ │  │  ├── {ComponentDemo}.tsx # Interactive component demo
│ │  │  └── # Other demos
│ │  ├── layouts/ # Reusable application layouts
│ │  │  ├── {layout}/ # Specific layout
│ │  │  │  ├── {LayoutName}.tsx # Layout structure
│ │  │  │  └── {layout-name}.css # Layout styles
│ │  │  └── # Other layouts
│ │  ├── preview-articles/ # Component documentation and previews
│ │  │  ├── {categorie-component}/ # Component category
│ │  │  │  ├── {CategoriePreview}.tsx # Visual preview
│ │  │  │  └── {categorie-preview}.css # Preview styles
│ │  │  ├── styles/ # Article-specific styles
│ │  │  │  ├── {categorie-article}.css # Article styles
│ │  │  │  └── # Other styles
│ │  │  ├── {CategorieArticle}.tsx # Documentation article
│ │  │  └── # Other articles
│ │  ├── ui/ # UI components of the Design System (reusable core)
│ │  │  ├── {categorie-component}/ # UI category (e.g. Foundations, Form-Controls, etc.)
│ │  │  │  ├── {ui-component}/ # Root content of the UI component
│ │  │  │  │  ├── {component}.tsx # UI component (the full component or split into parts)
│ │  │  │  │  ├── {component}.css # Component styles
│ │  │  │  │  └── index.tsx # Component export
│ │  │  │  └── # Another root content
│ │  │  └── # Another UI category
│ │  ├── {component}.tsx # Auxiliary components
│ │  └── # Other components
│ ├── contexts/ # React contexts
│ │  ├── components/ # Component-scoped contexts
│ │  │  ├── {component}/
│ │  │  │  ├── {ComponentContext}.ts # Context definition
│ │  │  │  └── {ComponentProvider}.tsx # Context provider
│ │  │  └── # Other component contexts
│ │  └── theme/ # Theme context (light/dark/custom)
│ │     ├── ThemeContext.ts
│ │     └── ThemeProvider.tsx
│ ├── libs/ # Internal shared libraries
│ │  └── utils/ # Utility helpers
│ │     └── cn.ts # Conditional className helper
│ ├── models/ # Reusable non-visual logic
│ │  ├── hooks/ # Custom hooks
│ │  │  ├── {useHook}.ts
│ │  │  └── # Other hooks
│ │  ├── {name-function}.ts # Utility/domain functions
│ │  └── # Other logic files
│ ├── pages/ # Application pages (routes)
│ │  ├── {page}/
│ │  │  └── index.tsx # Page entry
│ │  ├── {page}/
│ │  │  ├── index.tsx
│ │  │  └── {sub-page}/
│ │  │     ├── {sub-page}.tsx
│ │  │     └── # Other sub-pages
│ │  └── Router.tsx # Central router
│ ├── styles/ # Global styles and design tokens
│ │  ├── tokens/ # Design Tokens
│ │  │  ├── components/ # Component-level tokens
│ │  │  │  ├── {component}.tokens.css
│ │  │  │  └── # Other tokens
│ │  │  ├── foundation.css # Core tokens
│ │  │  ├── semantic.css # Semantic tokens
│ │  │  └── index.css # Token exports
│ │  ├── base.css # Reset and base styles
│ │  └── utilities.css # Utility classes
│ ├── typings/ # TypeScript types and interfaces
│ │  ├── {component}.types.ts
│ │  └── # Other typings
│ ├── App.tsx # Root application component
│ └── main.tsx # React entry point
├── .gitignore
├── .prettierrc # Prettier configuration
├── docker-compose.yml # Docker setup
├── Dockerfile.local # Dev container Dockerfile
├── eslint.config.js # ESLint configuration
├── index.html # Vite HTML entry
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite configuration
```

---

## 🚀 Getting Started (Setup)

### 🧰 Requirements

-   Node.js 18+
-   npm or Yarn
-   Docker & Docker Compose (optional, recommended)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/NicolasLK/my-design-system-forge.git

# Access the project
cd my-design-system-forge

# Install dependencies
npm install
```

---

## ▶️ Running the Project

### 🛠️ Development environment

```bash
npm run dev
```

The project will be available at:

```bash
http://localhost:3000
```

---

### 🛑 Docker Resource Cleanup

After finishing development and closing the IDE, containers and images may continue to occupy disk space. To free these resources and clean up the environment, follow the steps below:

1. Perform a deep cleanup: Run the command below in your terminal to remove stopped containers and unused images:

```bash
docker system prune -a
```

> Note: When prompted, type y (yes) to confirm the deletion.

2. Verify the cleanup: To ensure the environment is clean and there are no remaining containers or images, use the following commands:

-   List containers:

```bash
  docker ps -a
```

-   List images:

```bash
docker image ls
```

---

## 🎨 Design Tokens

Design Tokens define reusable visual decisions such as:

-   🎨 Colors
-   ✍️ Typography
-   📐 Spacing
-   🔲 Borders, radius, and shadows

Token example:

```css
:root {
    /* ===============================
   🎨 Color Palettes
  =============================== */

    /* ===============================
     🎨 PRIMARY — #348abf
     =============================== */
    --color-primary-50: #e8f3fa;
    --color-primary-100: #d1e7f5;
    --color-primary-200: #a3ceeb;
    --color-primary-300: #75b6e1;
    --color-primary-400: #479dd7;
    --color-primary-500: #348abf; /* default */
    --color-primary-600: #2b75a3;
    --color-primary-700: #235f87;
    --color-primary-800: #1b496b;
    --color-primary-900: #12334f;

    /* ... other tokens */
}
```

---

## 🧩 Components

Components are built with:

-   Reusability in mind
-   Accessibility and responsiveness
-   Strong TypeScript typing
-   Clear separation of concerns

Usage example (soon):

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✨ Final Notes

The **My Design System Forge** provides a solid foundation for building and scaling a professional Design System. It can be adapted to different products, teams, and contexts.

Feel free to evolve, refactor, and expand it 🚀
