<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";
	import { useCarousel } from "./carousel.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const carousel = useCarousel();
</script>

<div
	bind:this={ref}
	role="group"
	aria-roledescription="slide"
	data-slot="carousel-item"
	class={cn("min-w-0 shrink-0 grow-0 basis-full", carousel.orientation === "horizontal" ? "pl-4" : "pt-4", className)}
	{...restProps}
>
	{@render children?.()}
</div>
