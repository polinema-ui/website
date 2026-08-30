<script lang="ts">
	import { Dialog } from "bits-ui";
	import { cn } from "$lib/utils/shadcn";

	let { ref = $bindable(null), class: className, ...restProps }: Dialog.DescriptionProps = $props();
</script>

<Dialog.Description
	bind:ref
	data-slot="sheet-description"
	class={cn("text-sm text-muted-foreground", className)}
	{...restProps}
/>
