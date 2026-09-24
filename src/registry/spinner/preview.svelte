<script lang="ts">
	import { BUTTON_BASE, BUTTON_VARIANTS } from "$registry/button/meta";
	import { INPUT_CLASSES } from "$registry/input/meta";
	import { SPINNER_BASE, SPINNER_SIZES, SPINNER_VARIANTS } from "./meta";
	import type { SpinnerPreviewVariant } from "./meta";

	let { variant = "default" }: { variant?: SpinnerPreviewVariant } = $props();
</script>

{#snippet ring(container: string, variantClass: string)}
	<span role="status" aria-label="Loading" class="{SPINNER_BASE} {container} {variantClass}">
		<span class="sr-only">Loading...</span>
	</span>
{/snippet}

{#if variant === "default"}
	<div class="flex items-center justify-center p-4">
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.default)}
	</div>
{:else if variant === "sizes"}
	<div class="flex flex-wrap items-center justify-center gap-6 p-4">
		{@render ring(SPINNER_SIZES.xs, SPINNER_VARIANTS.default)}
		{@render ring(SPINNER_SIZES.sm, SPINNER_VARIANTS.default)}
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.default)}
		{@render ring(SPINNER_SIZES.lg, SPINNER_VARIANTS.default)}
		{@render ring(SPINNER_SIZES.xl, SPINNER_VARIANTS.default)}
	</div>
{:else if variant === "colors"}
	<div class="flex flex-wrap items-center justify-center gap-6 p-4">
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.default)}
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.secondary)}
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.success)}
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.destructive)}
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.warning)}
	</div>
{:else if variant === "button"}
	<div class="flex flex-wrap items-center justify-center gap-3 p-4">
		<button type="button" disabled class="{BUTTON_BASE} {BUTTON_VARIANTS.default} h-10 gap-2 px-4 opacity-75">
			{@render ring(SPINNER_SIZES.sm, "[--spinner-head:var(--color-white)] [--spinner-track:rgba(255,255,255,0.25)]")}
			Saving changes...
		</button>
		<button type="button" disabled class="{BUTTON_BASE} {BUTTON_VARIANTS.outline} h-10 gap-2 px-4 opacity-75">
			{@render ring(SPINNER_SIZES.sm, SPINNER_VARIANTS.default)}
			Loading...
		</button>
	</div>
{:else if variant === "label"}
	<div class="flex flex-col items-center justify-center gap-3 p-4">
		{@render ring(SPINNER_SIZES.lg, SPINNER_VARIANTS.default)}
		<div class="text-center">
			<p class="text-sm font-medium text-neutral-900 dark:text-white">Loading data</p>
			<p class="text-xs text-neutral-500 dark:text-neutral-400">Please wait while we prepare your dashboard...</p>
		</div>
	</div>
{:else if variant === "card"}
	<div
		class="flex h-44 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
	>
		{@render ring(SPINNER_SIZES.md, SPINNER_VARIANTS.default)}
		<p class="text-xs text-neutral-500 dark:text-neutral-400">Fetching scheduled reports...</p>
	</div>
{:else if variant === "input"}
	<div class="relative w-full max-w-sm p-4">
		<input placeholder="Searching members..." class="{INPUT_CLASSES} pr-10" />
		<div class="absolute inset-y-0 right-7 flex items-center">
			{@render ring(SPINNER_SIZES.xs, SPINNER_VARIANTS.secondary)}
		</div>
	</div>
{/if}
