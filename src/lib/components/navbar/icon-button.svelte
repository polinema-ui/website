<script lang="ts">
	import type { Snippet } from "svelte";
	import { ICON_BUTTON_CLASS } from "./navbar.svelte.ts";

	let {
		href,
		onclick,
		ariaLabel,
		class: className = ICON_BUTTON_CLASS,
		children,
	}: {
		href?: string;
		onclick?: () => void;
		ariaLabel?: string;
		class?: string;
		children: Snippet;
	} = $props();
</script>

{#if href}
	<a {href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} class={className}>
		{@render children?.()}
	</a>
{:else}
	<button type="button" {onclick} aria-label={ariaLabel} class={className}>
		{@render children?.()}
	</button>
{/if}
