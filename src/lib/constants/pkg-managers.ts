/**
 * @description Defines the package managers and their corresponding commands for initializing Polinema UI.
 * @type {Array<{ id: string; label: string; cmd: string }>}
 */
export const PKG_MANAGERS = [
	{ id: "pnpm", label: "pnpm", cmd: "pnpm dlx polinema-ui init" },
	{ id: "npm", label: "npm", cmd: "npx polinema-ui init" },
	{ id: "yarn", label: "yarn", cmd: "yarn dlx polinema-ui init" },
	{ id: "bun", label: "bun", cmd: "bunx --bun polinema-ui init" },
] as const satisfies readonly {
	id: string;
	label: string;
	cmd: string;
}[];
