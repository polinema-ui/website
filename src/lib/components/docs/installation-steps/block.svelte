<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Tabs } from "bits-ui";
	import { createHighlighterCore } from "shiki/core";
	import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { docsState } from "$lib/states/docs.svelte";

	const highlighterPromise = createHighlighterCore({
		themes: [import("@shikijs/themes/vitesse-light")],
		langs: [import("@shikijs/langs/typescript"), import("@shikijs/langs/svelte")],
		engine: createJavaScriptRegexEngine({ forgiving: true }),
	});

	let { command, code, lang = "ts" }: { command?: string; code?: string; lang?: "ts" | "svelte" } = $props();

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
			class="group not-prose relative my-6 w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50"
		>
			<button
				type="button"
				onclick={handleCopy}
				aria-label="Copy to clipboard"
				class="absolute top-2 right-2 z-10 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 active:scale-90"
			>
				{#if copied}
					<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
				{:else}
					<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
				{/if}
			</button>
			<div class="overflow-x-auto px-4 py-4 text-[13px] [&_pre]:bg-transparent!">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html highlighter.codeToHtml(code.trim(), { lang, theme: "vitesse-light" })}
			</div>
		</div>
	{/await}
{:else}
	<div class="not-prose my-6 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white">
		{#if command}
			<div class="flex items-center justify-between px-4 py-3">
				<code class="min-w-0 flex-1 overflow-x-auto text-[13px] font-medium text-neutral-900">
					{activeCommand}
				</code>
				<button
					type="button"
					onclick={handleCopy}
					aria-label="Copy to clipboard"
					class="-mr-1 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:scale-90"
				>
					{#if copied}
						<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
					{:else}
						<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
					{/if}
				</button>
			</div>
		{:else}
			<div class="flex items-center justify-between border-b border-neutral-100 py-1.5 pr-1.5 pl-3">
				<Tabs.Root bind:value={docsState.pkgManager}>
					<Tabs.List class="flex gap-4">
						{#each PKG_MANAGERS as pm (pm.id)}
							<Tabs.Trigger
								value={pm.id}
								class="-mx-2 cursor-pointer rounded-md px-2 py-1 text-xs font-medium transition-colors data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-950 data-[state=inactive]:text-neutral-500 hover:data-[state=inactive]:text-neutral-900"
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
					class="flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:scale-90"
				>
					{#if copied}
						<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
					{:else}
						<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
					{/if}
				</button>
			</div>
			<div class="flex items-center justify-between px-4 py-3">
				<code class="min-w-0 flex-1 overflow-x-auto text-[13px] font-medium text-neutral-900">
					{activeCommand}
				</code>
			</div>
		{/if}
	</div>
{/if}
