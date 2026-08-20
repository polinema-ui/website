<h1 align="center">Polinema UI</h1>

<br />

<div align="center">
  <img src="static/logo.png" />
</div>

<br />

<p align="center">
  An open-source UI component ecosystem combining the structural simplicity of Bootstrap 5 with the utility power of Tailwind CSS v4. Built on a copy-and-paste architecture for total code ownership.
</p>

## Overview

Polinema UI is designed for building accessible, high-performance web applications—ranging from academic portals and admin dashboards to enterprise platforms. Inspired by the **shadcn/ui** distribution model, components are not installed as a monolithic NPM dependency. Instead, you copy the component source code directly into your codebase, granting you 100% control over design, markup, and functionality.

## Philosophy

Our core principle is straightforward: **the code belongs to you, not us.**

Monolithic package dependencies create rigid black boxes that break when custom requirements emerge. For academic institutions and enterprise systems with distinct branding or complex workflows, adaptability is mandatory. Polinema UI provides a transparent, unopinionated foundation that is easy to read, modify, and extend without theme lock-ins.

## Key Features

| Feature                         | Description                                                                                            |
| :------------------------------ | :----------------------------------------------------------------------------------------------------- |
| **Hybrid Architecture**         | Merges the predictable grid layout of Bootstrap 5 with the flexibility of Tailwind CSS v4 utilities.   |
| **Copy & Paste Model**          | Zero rigid package setup. Paste source code directly into your project and maintain full ownership.    |
| **Enterprise & Academic Focus** | Structured out of the box for data tables, multi-step forms, analytics dashboards, and portal systems. |
| **Fully Customizable**          | Unlocked styling with no restrictive design themes—modify utility classes and markup directly.         |
| **Type-Safe & i18n Ready**      | Built with first-class TypeScript support and Paraglide-js internationalization.                       |

## Tech Stack

- **Styling Engine:** Tailwind CSS v4 & shadcn-svelte conventions
- **Icons:** Hugeicons Svelte
- **Internationalization:** Paraglide-js
- **Validation & Testing:** Vitest (Unit) & Playwright (E2E)
- **Code Quality:** ESLint, Prettier, and Knip

## Getting Started

### Prerequisites

- Node.js (v18+) or Bun runtime
- Package manager (`bun`, `pnpm`, or `npm`)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/polinema-ui/website.git
cd website

# Install dependencies
bun install

# Start local development server
bun run dev
```

Open `http://localhost:4000` in your browser to view the documentation portal.

## Verification Scripts

Execute these validation commands before committing changes:

| Command             | Action                                                                           |
| :------------------ | :------------------------------------------------------------------------------- |
| `bun run check`     | Compiles Paraglide translations, syncs SvelteKit, and verifies TypeScript types. |
| `bun run lint`      | Audits code formatting (Prettier) and code style rules (ESLint).                 |
| `bun run format`    | Automatically formats the entire codebase.                                       |
| `bun run test:unit` | Executes unit tests via Vitest.                                                  |
| `bun run knip`      | Audits unused files, exports, and dependencies.                                  |

## Project Structure

```text
├── messages/             # i18n translation files
├── project.inlang/       # Paraglide internationalization settings
├── src/
│   ├── lib/
│   │   ├── components/   # Atomic & compound UI components
│   │   ├── constants/    # Route definitions & system configurations
│   │   ├── paraglide/    # Compiled multi-language runtime
│   │   └── utils/        # Helper utilities & class merging logic
│   └── routes/           # Application routes and documentation pages
```

## Contributing

Contributions are welcome! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) guide before submitting pull requests.

## Maintainers

- [@a6iyyu](https://github.com/a6iyyu)
- [@ckckckcz](https://github.com/ckckckcz)

## License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.
