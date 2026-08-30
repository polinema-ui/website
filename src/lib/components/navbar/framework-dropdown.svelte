<script lang="ts">
	import { ChevronDownIcon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Content, Item, Root, Trigger } from "$lib/components/dropdown-menu";
	import { frameworks, frameworkState } from "$lib/stores/framework.svelte";
	import { DROPDOWN_CONTENT_CLASS } from "./navbar.svelte.ts";

	let {
		open = $bindable(false),
		triggerClass,
	}: {
		open?: boolean;
		triggerClass: string;
	} = $props();

	const selectedFramework = $derived(frameworkState.selected);
	const current = $derived(frameworks.find((fw) => fw.name === selectedFramework)!);
</script>

<Root bind:open>
	<Trigger class={triggerClass}>
		<HugeiconsIcon icon={current.icon} size={15} color={current.color} />
		<span class="hidden sm:inline">{selectedFramework}</span>
		<span class="transition-transform duration-200 {open ? 'rotate-180' : ''}">
			<HugeiconsIcon icon={ChevronDownIcon} size={13} color="#1c1c1c" />
		</span>
	</Trigger>
	<Content class={DROPDOWN_CONTENT_CLASS}>
		{#each frameworks as fw (fw.name)}
			<Item
				onclick={() => (frameworkState.selected = fw.name)}
				class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-neutral-800 transition-colors select-none hover:bg-[#f4f4f0] sm:text-[13.5px]"
			>
				<HugeiconsIcon icon={fw.icon} size={15} color={fw.color} />
				<span>{fw.name}</span>
			</Item>
		{/each}
	</Content>
</Root>
