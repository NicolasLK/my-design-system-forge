# 🔥 My Design System Forge

<p align="center">
  <strong>🌐 Idioma:</strong>
  <a href="./README.pt-br.md">🇧🇷 Português</a> |
  <a href="./README.md">🇺🇸 English</a>
</p>

> Um Design System modular e reutilizável criado com **React**, **TypeScript** e **Vite** — pensado para acelerar o desenvolvimento de aplicações com componentes consistentes e com foco em qualidade, acessibilidade e escalabilidade.

---

## 🧱 Visão Geral

**My Design System Forge** é um projeto frontend que fornece componentes UI reutilizáveis, tokens de estilo e guias de uso para facilitar a construção de interfaces consistentes em aplicações React. Ele oferece um setup moderno com:

-   🛠️ **React + TypeScript**
-   ⚡ **Vite** para desenvolvimento e build super rápidos
-   🎨 Sistema de estilos modular (CSS/SCSS/Token-first — conforme implementação)

> **Design System** é uma coleção de padrões, estilos e componentes reutilizáveis que garante consistência visual, acelera o desenvolvimento e melhora a colaboração entre times de design e engenharia.

---

## 📦 Estrutura do Repositório

```bash
├── .devcontainer/ # Configurações para ambiente de desenvolvimento remoto (VS Code Dev Containers)
├── public/ # Arquivos públicos servidos diretamente pelo Vite (favicon, imagens estáticas, etc.)
├── src/ # Código-fonte da aplicação / biblioteca
│ ├── assets/ # Assets estáticos do projeto (imagens, ícones SVG, fontes locais)
│ ├── components/ # Componentes gerais e específicos do projeto
│ │  ├── demos/ # Componentes de demonstração isolada de UI/DS
│ │  │  ├── mocks/ # Dados mockados usados apenas para demonstrações visuais
│ │  │  │  ├── {mock-data}.ts # Estruturas de dados fake (listas, objetos, estados simulados)
│ │  │  │  └── # Outros mocks reutilizáveis
│ │  │  ├── {ComponentDemo}.tsx # Demonstração visual e interativa de um componente
│ │  │  └── # Outros demos de componentes
│ │  ├── layouts/ # Layouts estruturais reutilizáveis
│ │  │  ├── {layout}/ # Um layout específico (ex: dashboard, docs, preview)
│ │  │  │  ├── {LayoutName}.tsx # Estrutura React do layout
│ │  │  │  └── {layout-name}.css # Estilos específicos do layout
│ │  │  └── {layout}/ # Outro layout
│ │  │     ├── {LayoutName}.tsx # Estrutura React
│ │  │     └── {layout-name}.css # Estilos associados
│ │  ├── preview-articles/ # Artigos de visualização/documentação de componentes
│ │  │  ├── {categorie-component}/ # Categoria de componentes (ex: Foundations, Form-Controls, e etc)
│ │  │  │  ├── {CategoriePreview}.tsx # Preview visual dos componentes da categoria
│ │  │  │  └── {categorie-preview}.css # Estilos do preview
│ │  │  ├── # Outras categorias
│ │  │  ├── styles/ # Estilos específicos dos artigos
│ │  │  │  ├── {categorie-article}.css # Estilos do artigo/documentação
│ │  │  │  └── # Outros estilos
│ │  │  ├── {CategorieArticle}.tsx # Artigo explicativo (uso, variações, boas práticas)
│ │  │  └── # Outros artigos
│ │  ├── ui/ # Componentes UI do Design System (núcleo reutilizável)
│ │  │  ├── {categorie-component}/ # Categoria de UI (ex: Foundations, Form-Controls, e etc)
│ │  │  │  ├── {ui-component}/ # Conteúdo raiz do componente UI
│ │  │  │  │  ├── {component}.tsx # Componente UI (o componente por completo ou separado em partes)
│ │  │  │  │  ├── {component}.css # Estilos do componente
│ │  │  │  │  └── index.tsx # Exportação do componente
│ │  │  │  └── # Outro conteúdo raiz
│ │  │  └── # Outra categoria
│ │  ├── {component}.tsx # Componentes auxiliares ou específicos do projeto
│ │  └── # Outros componentes auxiliares/específicos do projeto
│ ├── contexts/ # Contextos globais e específicos
│ │  ├── components/ # Contextos acoplados a componentes específicos
│ │  │  ├── {component}/ # Escopo de um componente
│ │  │  │  ├── {ComponentContext}.ts/ # Criação do contexto
│ │  │  │  └── {ComponentProvider}.tsx/ # Provider responsável pelo estado
│ │  │  └── # Outros contextos de componentes
│ │  └── theme/ # Contextos global de tema
│ │     ├── ThemeContext.ts # Definição do contexto de tema (light/dark/custom)
│ │     └── ThemeProvider.tsx # Provider que controla e injeta o tema
│ ├── libs/ # Bibliotecas internas reutilizáveis
│ │  └── utils/ # Funções utilitárias genéricas
│ │     └── cn.ts # Helper para composição condicional de classes (classNames)
│ ├── models/ # Camada de lógica reutilizável (não visual)
│ │  ├── hooks/ # Hooks customizados
│ │  │  ├── {useHook}.ts # Hook reutilizável (estado, efeito, comportamento)
│ │  │  └── # Outros hooks
│ │  ├── {name-funcition}.ts # Funções utilitárias de domínio (formatadores, validadores)
│ │  └── # Outras regras de negócio leves
│ ├── pages/ # Páginas da aplicação (rotas)
│ │  ├── home/ # Página principal
│ │  │  └── index.tsx # Entry da página
│ │  ├── {page}/ # Página com subrotas
│ │  │  ├── index.tsx # Página base
│ │  │  └── {sub-page}/ # Subpáginas
│ │  │     ├── {sub-page}.tsx # Subrota específica
│ │  │     ├── {sub-page}.tsx # Outra subrota
│ │  │     └── # Outras subrotas
│ │  └── Router.tsx # Definição central das rotas (React Router Dom)
│ ├── styles/ # Estilos e toknes globais e específicos
│ │  ├── tokens/ # Design Tokens (cores, tipografia, espaçamentos)
│ │  │  ├── components/ # Tokens específicos por componente
│ │  │  │  ├── {component}.tokens.css # Tokens padrões do componente (cores, spacing, radius)
│ │  │  │  └── # Outros tokens
│ │  │  ├── foundation.css # Tokens base (cores primárias, tipografia, spacing)
│ │  │  ├── index.css # Export central dos tokens
│ │  │  └── semantic.css # Tokens semânticos (success, error, warning, info)
│ │  ├── base.css # Reset e estilos base da aplicação
│ │  └── utilities.css # Classes utilitárias - Like Tailwind (spacing, display, helpers)
│ ├── typings/ # Tipagens globais e especificas (Types e Interfaces)
│ │  ├── {component}.types.ts # Types e interfaces de componentes
│ │  └── # Tipagens adicionais
│ ├── App.tsx # Composição principal da aplicação (providers + rotas)
│ └── main.tsx # Ponto de entrada da aplicação React
├── .gitignore
├── .prettierrc # Configuração de formatação (Prettier)
├── docker-compose.yml # Ambiente Docker para desenvolvimento
├── Dockerfile.local # Dockerfile para Dev Container
├── eslint.config.js # Configuração de lint (ESLint)
├── index.html # HTML base do Vite
├── package.json # Dependências e scripts
├── tsconfig.json # Configuração TypeScript
└── vite.config.ts # Configuração Vite
```

---

## 🚀 Começando (Setup)

### 🧰 Requisitos

-   Node.js 18+
-   npm ou Yarn
-   Docker + Docker-Compose

### 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/NicolasLK/my-design-system-forge.git

# Acesse o projeto
cd my-design-system-forge

# Instale as dependências
npm install
```

---

## ▶️ Executando o Projeto

### 🛠️ Ambiente de desenvolvimento

Abra o projeto na IDE e selecione a opção para **"Reabrir no container"**. Com o ambiente pronto, execute este comando para rodar o projeto localmente:

```bash
npm run dev
```

O projeto será iniciado em:

```bash
http://localhost:3000
```

---

### 🛑 Limpeza de Recursos Docker

Após encerrar o desenvolvimento e fechar a IDE, os contêineres e imagens podem continuar ocupando espaço em disco. Para liberar esses recursos e limpar o ambiente, siga os passos abaixo:

1. Executar a limpeza profunda: Rode o comando abaixo no seu terminal para remover containers parados e imagens não utilizadas:

```bash
docker system prune -a
```

> Nota: Quando solicitado, digite y (yes) para confirmar a exclusão.

2. Verificar a remoção: Para garantir que o ambiente está limpo e não há instâncias ou imagens residuais, utilize os comandos:

-   Listar containers:

```bash
  docker ps -a
```

-   Listar imagens:

```bash
docker image ls
```

---

## 🎨 Design Tokens

Design Tokens representam decisões de design de forma reutilizável e consistente.

Eles incluem:

-   🎨 Cores
-   ✍️ Tipografia
-   📐 Espaçamentos
-   🔲 Bordas e sombras

Exemplo de token:

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

    /* ... outros tokens */
}
```

---

## 🧩 Componentes

Os componentes seguem os princípios:

-   Reutilização
-   Acessibilidade e responsividade
-   Tipagem forte com TypeScript
-   Separação clara de responsabilidades

Exemplo de uso (em breve):

---

## 🤝 Contribuição

Contribuições são bem-vindas!

Fluxo sugerido:

1. Fork do repositório
2. Criação de branch (`feature/nome-da-feature`)
3. Commit das alterações
4. Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

## ✨ Considerações Finais

O **My Design System Forge** serve como base sólida para evolução de um Design System profissional, podendo ser adaptado para diferentes produtos, times e contextos.

Sinta-se livre para evoluir, refatorar e expandir 🚀
