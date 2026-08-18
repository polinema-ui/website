<script lang="ts">
	import { Separator } from "bits-ui";
	import { cn } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		"data-slot": dataSlot = "separator",
		...restProps
	}: Separator.RootProps = $props();
</script>

<Separator.Root
	bind:ref
	data-slot={dataSlot}
	class={cn(
		"shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
		"data-[orientation=vertical]:h-full",
		className,
	)}
	{...restProps}
/>
