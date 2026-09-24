<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { mode } from "mode-watcher";
	import DOMPurify from "dompurify";
	import { highlighterPromise } from "./highlighter";
	import type { DocsCodeLang } from "./highlighter";

	let {
		importCode,
		usageCode,
		importLang = "tsx",
		usageLang = "tsx",
	}: {
		importCode: string;
		usageCode: string;
		importLang?: DocsCodeLang;
		usageLang?: DocsCodeLang;
	} = $props();

	let copied = $state<"import" | "usage" | null>(null);

	function copy(key: "import" | "usage", value: string) {
		navigator.clipboard.writeText(value);
		copied = key;
		setTimeout(() => (copied = null), 2000);
	}
</script>

{#snippet codeBlock(key: "import" | "usage", code: string, lang: DocsCodeLang)}
	<div
		class="relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-white/10 dark:bg-black"
	>
		<button
			type="button"
			onclick={() => copy(key, code)}
			aria-label="Copy to clipboard"
			class="absolute top-2 right-2 z-10 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-900 active:scale-90 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
		>
			{#if copied === key}
				<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
			{:else}
				<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
			{/if}
		</button>
		{#await highlighterPromise then highlighter}
			<div class="code-scroll overflow-x-auto px-4 py-3 text-[13px] [&_pre]:bg-transparent!">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html DOMPurify.sanitize(
					highlighter.codeToHtml(code.trim(), {
						lang,
						theme: mode.current === "dark" ? "github-dark" : "github-light",
					}),
				)}
			</div>
		{/await}
	</div>
{/snippet}

<div class="not-prose my-6 flex w-full flex-col gap-3">
	{@render codeBlock("import", importCode, importLang)}
	{@render codeBlock("usage", usageCode, usageLang)}
</div>

<style>
	.code-scroll :global(.shiki),
	.code-scroll :global(.shiki span) {
		background-color: transparent !important;
	}
</style>
