<script lang="ts">
	import { Tooltip } from "bits-ui";

	let { ...restProps }: Tooltip.PortalProps = $props();
</script>

<Tooltip.Portal {...restProps} />
