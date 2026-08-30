<script lang="ts">
	import { Tooltip } from "bits-ui";

	let { open = $bindable(false), ...restProps }: Tooltip.RootProps = $props();
</script>

<Tooltip.Root bind:open {...restProps} />
