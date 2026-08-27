<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		step,
		title,
		children,
		last = false,
	}: { step: number; title: string; children: Snippet; last?: boolean } = $props();
</script>

<div class="relative flex gap-4 pb-10 last:pb-0">
	{#if !last}
		<div class="absolute top-8 bottom-0 left-4 w-px bg-border" aria-hidden="true"></div>
	{/if}
	<div
		class="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-foreground"
		aria-hidden="true"
	>
		{step}
	</div>
	<div class="flex min-w-0 flex-1 flex-col gap-3 pt-1">
		<h2 class="scroll-mt-24 text-base font-semibold tracking-tight text-foreground">{title}</h2>
		<div class="text-sm leading-relaxed text-muted-foreground">
			{@render children()}
		</div>
	</div>
</div>
