<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		src,
		alt = "",
		onerror,
		...restProps
	}: WithElementRef<HTMLImgAttributes> = $props();

	let hasError = $state(false);

	function handleError(event: Event & { currentTarget: EventTarget & Element }) {
		hasError = true;
		if (typeof onerror === "function") {
			onerror(event);
		}
	}
</script>

{#if !hasError && src}
	<img
		bind:this={ref}
		data-slot="avatar-image"
		{src}
		{alt}
		onerror={handleError}
		class={cn("absolute inset-0 aspect-square size-full object-cover", className)}
		{...restProps}
	/>
{/if}
