import type { PkgManager } from "$lib/types/pkg-manager";

export const PKG_MANAGERS: PkgManager[] = [
	{ id: "pnpm", label: "pnpm", cmd: "pnpm dlx polinema-ui@latest init" },
	{ id: "npm", label: "npm", cmd: "npx polinema-ui@latest init" },
	{ id: "yarn", label: "yarn", cmd: "yarn dlx polinema-ui@latest init" },
	{ id: "bun", label: "bun", cmd: "bunx polinema-ui@latest init" },
];
