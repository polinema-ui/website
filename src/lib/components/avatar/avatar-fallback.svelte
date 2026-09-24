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
	data-slot="avatar-fallback"
	class={cn(
		"flex size-full items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300",
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</span>
