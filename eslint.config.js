import { defineConfig, includeIgnoreFile } from "eslint/config";
import { resolve } from "node:path";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
	includeIgnoreFile(resolve(import.meta.dirname, ".gitignore")),
	{
		ignores: ["src/lib/paraglide/**", "src/paraglide/**"],
	},
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			"no-undef": "off",
			"svelte/no-navigation-without-resolve": "off",
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
			},
		},
	},
	{
		rules: {},
	},
);
