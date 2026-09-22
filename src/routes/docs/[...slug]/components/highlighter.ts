import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

export type DocsCodeLang = "ts" | "svelte" | "tsx" | "html" | "php" | "blade";

export const highlighterPromise = createHighlighterCore({
	engine: createJavaScriptRegexEngine({ forgiving: true }),
	langs: [
		import("@shikijs/langs/typescript"),
		import("@shikijs/langs/svelte"),
		import("@shikijs/langs/tsx"),
		import("@shikijs/langs/html"),
		import("@shikijs/langs/php"),
		import("@shikijs/langs/blade"),
	],
	themes: [import("@shikijs/themes/github-dark")],
});
