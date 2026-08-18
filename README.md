<h1 align="center">Polinema UI</h1>

An open-source UI component collection built with **Svelte 5 (Runes)** and **Tailwind CSS v4**.

Polinema UI adopts the philosophy of **shadcn/ui**—components are not installed as a monolithic dependency, but instead added directly into your codebase. Component designs and layouts are structured for enterprise applications, admin dashboards, and academic information systems (inspired by Bootstrap and Metronic conventions).

> **Project Status:** We are currently building the core documentation website. The distribution package is coming soon!

## Features

- **Svelte 5 Native:** Built entirely with Runes (`$state`, `$derived`, `$props`, `$effect`) for optimal reactivity and performance.
- **Tailwind CSS v4:** Powered by the latest Tailwind CSS v4 engine.
- **Dashboard-Oriented:** Structured, clean, and rigid UI elements designed specifically for data-heavy applications and admin panels.
- **Type Safe:** First-class TypeScript support for an enhanced developer experience.
- **Internationalization (i18n):** Integrated with Paraglide-js for smooth multi-language support.

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn-svelte](https://shadcn-svelte.com/)
- **Icons:** [Hugeicons Svelte](https://hugeicons.com/)
- **Testing:** [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)
- **Code Quality:** ESLint, Prettier, and [Knip](https://knip.dev/)

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

Clone the repository:

```bash
git clone https://github.com/polinema-ui/website
cd polinema-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:4000` in your browser to view the documentation website.

## Project Structure

```text
├── docs/                 # Documentation pages (MDSvex / .svx format)
├── src/
│   ├── lib/
│   │   ├── components/   # Atomic UI components (Button, Dialog, Sidebar, etc.)
│   │   ├── constants/    # Menu items and route definitions
│   │   ├── hooks/        # Reactive hooks and utilities
│   │   └── utils/        # Helper functions (class merging, etc.)
│   └── routes/           # SvelteKit application routes and layouts
```

## Scripts & Verification

Run these validation commands before committing changes:

Check code formatting and linting rules:

```bash
npm run lint
```

Format codebase automatically:

```bash
npm run format
```

Run TypeScript and Svelte type-checking:

```bash
npm run check
```

Analyze unused files, exports, and dependencies:

```bash
npm run knip
```

Execute unit and end-to-end tests:

```bash
npm run test
```

## Contributing

Contributions are welcome! Whether you are fixing documentation typos, reporting bugs, or building new components, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) guide before submitting a pull request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## Maintainers

- [@a6iyyu](https://github.com/a6iyyu)
- [@ckckckcz](https://github.com/ckckckcz)