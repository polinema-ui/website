<script lang="ts">
	import { MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef, type WithoutChildren } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLAttributes<HTMLSpanElement>>> = $props();
</script>

<span
	bind:this={ref}
	aria-hidden="true"
	data-slot="pagination-ellipsis"
	class={cn("flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4", className)}
	{...restProps}
>
	<HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
	<span class="sr-only">More pages</span>
</span>
