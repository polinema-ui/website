<h1 align="center">Polinema UI</h1>

<br />

<div align="center">
  <img src="static/icon.png" height="60" alt="Polinema UI Mark" />
</div>

<br />

<p align="center">
  An open-source UI component ecosystem built for Project Based Learning (PBL) across multi-framework tech stacks — supporting HTML, PHP, Laravel Blade, React/Next.js, and Svelte 5. Driven by a copy-and-paste architecture for total code ownership.
</p>

## Overview

Polinema UI is designed to simplify building accessible, high-performance web applications for academic portals, admin dashboards, and enterprise platforms. Engineered specifically for polytechnic and university Project Based Learning (PBL) workflows, components adapt seamlessly whether you're working with static HTML, native PHP, Laravel Blade, or modern React/Svelte frameworks.

Inspired by the **shadcn/ui** distribution model, components are not locked behind a monolithic NPM dependency. You copy the raw source code directly into your codebase, granting you 100% control over design, markup, and functionality.

## Philosophy

Our core principle is straightforward: **the code belongs to you, not us.**

Monolithic package dependencies create rigid black boxes that break when custom requirements emerge. For academic institutions and enterprise systems with distinct branding or complex workflows, adaptability is mandatory. Polinema UI provides a transparent, unopinionated foundation that preserves native HTML tags (ensuring IDE auto-completion in Blade/PHP) while giving you full styling freedom with Tailwind CSS v4.

## Key Features

| Feature                         | Description                                                                                             |
| :------------------------------ | :------------------------------------------------------------------------------------------------------ |
| **Multi-Ecosystem PBL Support** | Tailored code snippets and component structures for HTML, PHP Native, Laravel Blade, React, and Svelte. |
| **Sub-Component Architecture**  | Structured parent-child element layouts (e.g., Table, Header, Content) while keeping native HTML tags.  |
| **Copy & Paste Model**          | Zero rigid package setup. Paste source code directly into your project and maintain full ownership.     |
| **Enterprise & Academic Focus** | Built out of the box for data tables, multi-step forms, analytics dashboards, and portal systems.       |
| **Fully Customizable**          | Unlocked styling with Tailwind CSS v4 utility classes—no theme lock-ins or black-box abstractions.      |
| **Type-Safe & i18n Ready**      | Built with first-class TypeScript support, Svelte 5 Runes, and Paraglide-js internationalization.       |

## Tech Stack

- **Core Framework:** SvelteKit (Svelte 5 Runes API)
- **Styling Engine:** Tailwind CSS v4 & shadcn conventions
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
│   │   ├── components/   # Atomic & compound UI components (Card, Kbd, Button, etc.)
│   │   ├── constants/    # Route definitions & system configurations
│   │   ├── paraglide/    # Compiled multi-language runtime
│   │   └── utils/        # Helper utilities & class merging logic
│   └── routes/           # Application routes, home pages, and MDsvex documentation
```

## Contributing

Contributions are welcome! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) guide before submitting pull requests.

## Maintainers

- [@a6iyyu](https://github.com/a6iyyu)
- [@ckckckcz](https://github.com/ckckckcz)

## License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.