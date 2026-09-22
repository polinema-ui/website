<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import DOMPurify from "dompurify";
	import type { Snippet } from "svelte";
	import { highlighterPromise } from "./highlighter";
	import type { DocsCodeLang } from "./highlighter";

	export type PreviewCode = { id: string; label: string; code: string; lang: DocsCodeLang };

	const LOGOS: Record<string, string> = {
		html: "/lang/html.webp",
		php: "/lang/php.webp",
		blade: "/lang/laravel.webp",
		react: "/lang/react.webp",
	};

	let { codes, children }: { codes: readonly PreviewCode[]; children?: Snippet } = $props();

	let activeId = $state<string | undefined>(undefined);
	let active = $derived(codes.find((c) => c.id === activeId) ?? codes[0]);
	let expanded = $state(false);
	let copied = $state(false);

	function copyCode() {
		if (!active) return;
		navigator.clipboard.writeText(active.code.trim());
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="not-prose my-6 w-full">
	{#if codes.length > 1}
		<div class="flex items-center justify-between gap-4">
			<div class="flex min-w-0 items-center gap-5" role="tablist" aria-label="Framework">
				{#each codes as item (item.id)}
					<button
						type="button"
						role="tab"
						aria-selected={item.id === activeId}
						onclick={() => (activeId = item.id)}
						class="cursor-pointer pb-2 text-[15px] font-semibold whitespace-nowrap transition-colors {item.id ===
						activeId
							? '-mb-px border-b-2 border-white text-white'
							: 'text-neutral-500 hover:text-white'}"
					>
						{item.label}
					</button>
				{/each}
			</div>
			{#if active && LOGOS[active.id]}
				<img src={LOGOS[active.id]} alt="" width="20" height="20" class="h-5 w-5 shrink-0 object-contain" />
			{/if}
		</div>
	{/if}

	<div class="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black">
		<div class="flex min-h-52 items-center justify-center gap-3 px-6 py-14">
			{@render children?.()}
		</div>
		{#if active}
			<div class="relative border-t border-white/10 bg-black">
				<button
					type="button"
					onclick={() => (expanded = !expanded)}
					class="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full border border-white/20 bg-neutral-900 px-4 py-1.5 text-xs font-medium text-neutral-200 shadow-lg transition-colors hover:bg-neutral-800 hover:text-white active:scale-95"
				>
					{expanded ? "Hide Code" : "View Code"}
				</button>
				{#if expanded}
					<button
						type="button"
						onclick={copyCode}
						aria-label="Copy to clipboard"
						class="absolute top-2 right-2 z-10 flex cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white active:scale-90"
					>
						{#if copied}
							<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
						{:else}
							<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
						{/if}
					</button>
				{/if}
				{#await highlighterPromise then highlighter}
					<div
						class="code-scroll overflow-x-auto text-[13px] [&_pre]:bg-transparent! {expanded
							? 'max-h-96 overflow-y-auto px-4 py-4'
							: 'max-h-24 overflow-hidden px-4 pt-6 pb-4'}"
					>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html DOMPurify.sanitize(
							highlighter.codeToHtml(active.code.trim(), { lang: active.lang, theme: "github-dark" }),
						)}
					</div>
				{/await}
				{#if !expanded}
					<div
						class="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-b from-transparent to-black"
						aria-hidden="true"
					></div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.code-scroll :global(.shiki),
	.code-scroll :global(.shiki span) {
		background-color: transparent !important;
	}
	.code-scroll :global(.shiki code) {
		counter-reset: line;
	}
	.code-scroll :global(.shiki .line::before) {
		content: counter(line);
		counter-increment: line;
		display: inline-block;
		width: 2rem;
		margin-right: 1.25rem;
		text-align: right;
		color: #525252;
		user-select: none;
	}
</style>
