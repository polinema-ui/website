<script lang="ts">
	import { Tooltip } from "bits-ui";

	let { ref = $bindable(null), ...restProps }: Tooltip.TriggerProps = $props();
</script>

<Tooltip.Trigger bind:ref data-slot="tooltip-trigger" {...restProps} />
