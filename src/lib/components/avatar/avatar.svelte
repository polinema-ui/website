<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
	bind:this={ref}
	data-slot="avatar"
	class={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)}
	{...restProps}
>
	{@render children?.()}
</span>
