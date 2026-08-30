<script lang="ts">
	import { ArrowLeftIcon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Pagination as PaginationPrimitive } from "bits-ui";
	import { buttonVariants } from "$lib/components/button";
	import { cn } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<HugeiconsIcon icon={ArrowLeftIcon} strokeWidth={2} class={cn("size-4", className)} />
	<span>Previous</span>
{/snippet}

<PaginationPrimitive.PrevButton
	bind:ref
	aria-label="Go to previous page"
	class={cn(buttonVariants({ variant: "ghost" }), "pl-2!", className)}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else}
		{@render Fallback()}
	{/if}
</PaginationPrimitive.PrevButton>
