<script lang="ts">
	import { ArrowLeft01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";
	import { useCarousel } from "./carousel.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		onclick,
		...restProps
	}: WithElementRef<HTMLButtonAttributes> = $props();

	const carousel = useCarousel();

	function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		carousel.scrollPrev();
		if (typeof onclick === "function") {
			onclick(event);
		}
	}
</script>

<button
	bind:this={ref}
	type="button"
	data-slot="carousel-previous"
	disabled={!carousel.canScrollPrev}
	onclick={handleClick}
	class={cn(
		"absolute flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800",
		carousel.orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2",
		className,
	)}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else if carousel.orientation === "horizontal"}
		<HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
	{:else}
		<HugeiconsIcon icon={ArrowUp01Icon} size={16} />
	{/if}
	<span class="sr-only">Previous slide</span>
</button>
