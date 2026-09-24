<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Tabs } from "bits-ui";
	import { mode } from "mode-watcher";
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { docsState } from "$routes/docs/[...slug]/context/docs.svelte";
	import DOMPurify from "dompurify";
	import { highlighterPromise } from "./highlighter";
	import type { DocsCodeLang } from "./highlighter";

	let { command, code, lang = "ts" }: { command?: string; code?: string; lang?: DocsCodeLang } = $props();

	let copied = $state(false);
	let activeCommand = $derived(command ?? docsState.activeCmd);

	function handleCopy() {
		const value = code ?? activeCommand;
		if (!value) return;

		navigator.clipboard.writeText(value);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

{#if code !== undefined}
	{#await highlighterPromise then highlighter}
		<div
			class="group not-prose relative my-6 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-white/10 dark:bg-black"
		>
			<button
				type="button"
				onclick={handleCopy}
				aria-label="Copy to clipboard"
				class="absolute top-2 right-2 z-10 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-900 active:scale-90 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
			>
				{#if copied}
					<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
				{:else}
					<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
				{/if}
			</button>
			<div class="code-scroll overflow-x-auto px-4 py-4 text-[13px] [&_pre]:bg-transparent!">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html DOMPurify.sanitize(
					highlighter.codeToHtml(code.trim(), {
						lang,
						theme: mode.current === "dark" ? "github-dark" : "github-light",
					}),
				)}
			</div>
		</div>
	{/await}
{:else}
	<div
		class="not-prose my-6 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-white/10 dark:bg-black"
	>
		{#if command}
			<div class="flex items-center justify-between px-4 py-3">
				<code class="min-w-0 flex-1 overflow-x-auto text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
					{activeCommand}
				</code>
				<button
					type="button"
					onclick={handleCopy}
					aria-label="Copy to clipboard"
					class="-mr-1 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-900 active:scale-90 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
				>
					{#if copied}
						<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
					{:else}
						<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
					{/if}
				</button>
			</div>
		{:else}
			<div
				class="flex items-center justify-between border-b border-neutral-200 py-1.5 pr-1.5 pl-3 dark:border-white/10"
			>
				<Tabs.Root bind:value={docsState.pkgManager}>
					<Tabs.List class="flex gap-4">
						{#each PKG_MANAGERS as pm (pm.id)}
							<Tabs.Trigger
								value={pm.id}
								class="-mx-2 cursor-pointer rounded-md px-2 py-1 text-xs font-medium transition-colors data-[state=active]:bg-black/5 data-[state=active]:text-neutral-900 data-[state=inactive]:text-neutral-500 hover:data-[state=inactive]:text-neutral-900 dark:data-[state=active]:bg-white/10 dark:data-[state=active]:text-white dark:data-[state=inactive]:text-neutral-400 dark:hover:data-[state=inactive]:text-white"
							>
								{pm.label}
							</Tabs.Trigger>
						{/each}
					</Tabs.List>
				</Tabs.Root>
				<button
					type="button"
					onclick={handleCopy}
					aria-label="Copy to clipboard"
					class="flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-900 active:scale-90 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
				>
					{#if copied}
						<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
					{:else}
						<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
					{/if}
				</button>
			</div>
			<div class="flex items-center justify-between px-4 py-3">
				<code class="min-w-0 flex-1 overflow-x-auto text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
					{activeCommand}
				</code>
			</div>
		{/if}
	</div>
{/if}

<style>
	.code-scroll :global(.shiki),
	.code-scroll :global(.shiki span) {
		background-color: transparent !important;
	}
</style>
