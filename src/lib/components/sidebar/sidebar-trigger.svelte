<script lang="ts">
	import { SidebarLeftIcon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { ComponentProps } from "svelte";
	import { Button } from "$lib/components/button/index";
	import { useSidebar } from "$lib/components/sidebar/context.svelte";
	import { cn } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	bind:ref
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	variant="ghost"
	size="icon-sm"
	class={cn("cn-sidebar-trigger", className)}
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	{...restProps}
>
	<HugeiconsIcon icon={SidebarLeftIcon} strokeWidth={2} />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
