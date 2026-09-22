<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
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
	<div class="relative overflow-hidden rounded-lg border border-white/10 bg-black">
		<button
			type="button"
			onclick={() => copy(key, code)}
			aria-label="Copy to clipboard"
			class="absolute top-2 right-2 z-10 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white active:scale-90"
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
				{@html DOMPurify.sanitize(highlighter.codeToHtml(code.trim(), { lang, theme: "github-dark" }))}
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
