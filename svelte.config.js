import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";

/**
 * @constant
 * @description Defines the configuration for the SvelteKit project, including compiler options, file extensions, adapter settings, and preprocessing steps.
 * @type {import("@sveltejs/kit").Config}
 */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
	},
	extensions: [".svelte", ".svx", ".md"],
	kit: {
		adapter: adapter({
			out: "build",
			precompress: true,
		}),
		alias: {
			$docs: "./src/docs",
			$lib: "./src/lib",
			$routes: "./src/routes",
		},
	},
	preprocess: [mdsvex({ extensions: [".svx", ".md"] }), vitePreprocess()],
};

export default config;