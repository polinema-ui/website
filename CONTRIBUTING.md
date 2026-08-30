<h1 align="center">Contributing to Polinema UI</h1>

First off, thank you for taking the time to contribute!

Polinema UI is an open-source component collection built on top of **Svelte 5 (Runes)** and **Tailwind CSS v4**, inspired by the shadcn philosophy with design conventions suitable for enterprise dashboards and apps.

By contributing, you help make this library a better tool for everyone.

## Code of Conduct

Please help us keep this project welcoming, respectful, and inclusive. Treat all maintainers and fellow contributors with respect across issues, PR discussions, and review threads.

## How Can I Contribute?

### 1. Reporting Bugs

Before opening an issue, search the issue tracker to see if the problem has already been reported. When submitting a bug report, include:

- A clear, descriptive title.
- Step-by-step reproduction instructions.
- Expected behavior vs. actual behavior.
- Relevant environment details (OS, browser, Node version).

> **Security Vulnerabilities:** Do not open public issues for security vulnerabilities. Contact the maintainers directly via GitHub (@a6iyyu or @ckckckcz).

### 2. Suggesting Features & Components

If you would like to propose a new component or feature:

- Open a feature request issue.
- Clearly describe the intended use case.
- Provide links or screenshots of reference implementations (e.g., Bootstrap, Metronic, or shadcn patterns).

### 3. Submitting Code Changes

- Check existing issues for labels like `good first issue` or `help wanted`.
- For large structural changes or new component architectures, discuss your plan in an issue first before opening a Pull Request.

## Development Setup

Make sure you have **Node.js** (v18+) and **npm** installed.

1. **Fork and Clone the Repository:**

   ```bash
   git clone [https://github.com/YOUR-USERNAME/polinema-ui.git](https://github.com/YOUR-USERNAME/polinema-ui.git)
   cd polinema-ui
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to see the documentation and components live in the browser.

## Architecture & Code Standards

Please follow these project conventions:

- **Svelte 5 Runes:** Write components using Svelte 5 Runes (`$state`, `$derived`, `$props`, `$effect`). Do not use legacy Svelte 3/4 reactive syntax (`export let`, `$:`, etc.).
- **Component File Structure:** Place UI components in `src/lib/components/<component-name>/`. Keep sub-parts atomic (e.g., `dialog-header.svelte`, `dialog-content.svelte`) and export them cleanly via `index.ts`.
- **Styling:** Style elements using Tailwind CSS v4 utility classes. Use the helper in `src/lib/utils/shadcn.ts` (`clsx` + `tailwind-merge`) when dynamic class merging is needed.
- **Documentation:** Documentation pages are written in MDSvex format (`.svx`) inside the `docs/` folder.

## Code Quality & Verification

Run these validation scripts locally before opening a Pull Request:

### 1. Linting & Formatting

```bash
# Check formatting and ESLint rules
npm run lint

# Auto-format files with Prettier
npm run format
```

### 2. Type Checking & Svelte Sync

```bash
npm run check
```

### 3. Unused Code & Dependency Check

```bash
npm run knip
```

### 4. Running Tests

```bash
# Run unit tests (Vitest) and end-to-end tests (Playwright)
npm run test
```

## Pull Request Guidelines

1. **Branch Naming:** Use clear branch prefixes such as `feat/component-name`, `fix/issue-description`, or `docs/page-name`.
2. **Commit Messages:** Follow conventional commit standards (e.g., `feat(button): add outline variant`, `fix(dialog): trap focus correctly`).
3. **Documentation:** If you add or modify component props, update the corresponding documentation file under `docs/`.
4. **Focused Scope:** Keep Pull Requests small and focused on a single feature or fix for faster review.
