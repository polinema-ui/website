<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { scale } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	interface Props {
		content: string;
		class?: string;
	}

	let { content, class: className = "" }: Props = $props();
	let copied = $state(false);

	function handleCopy() {
		navigator.clipboard.writeText(content);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<button
	type="button"
	onclick={handleCopy}
	aria-label="Copy to clipboard"
	class="relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-md p-1.5 text-[#7c8079] transition-all duration-200 hover:bg-[#f4f4f0] hover:text-[#1a1a1a] active:scale-90 {className}"
>
	{#if copied}
		<div in:scale={{ duration: 180, delay: 50, easing: cubicOut }} out:scale={{ duration: 150 }} class="absolute">
			<HugeiconsIcon icon={Tick01Icon} size={15} color="#10b981" />
		</div>
	{:else}
		<div in:scale={{ duration: 180, delay: 50, easing: cubicOut }} out:scale={{ duration: 150 }} class="absolute">
			<HugeiconsIcon icon={Copy01Icon} size={15} color="#7c8079" />
		</div>
	{/if}
</button>
