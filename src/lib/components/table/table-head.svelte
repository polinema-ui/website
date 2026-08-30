<script lang="ts">
	import type { HTMLThAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLThAttributes> = $props();
</script>

<th
	bind:this={ref}
	data-slot="table-head"
	class={cn(
		"h-12 px-3 text-left align-middle font-medium whitespace-nowrap text-foreground has-[[role=checkbox]]:pr-0",
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</th>
