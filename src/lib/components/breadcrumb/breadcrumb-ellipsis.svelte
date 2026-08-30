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
	data-slot="breadcrumb-ellipsis"
	role="presentation"
	aria-hidden="true"
	class={cn("flex size-5 items-center justify-center [&>svg]:size-4", className)}
	{...restProps}
>
	<HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
	<span class="sr-only">More</span>
</span>
