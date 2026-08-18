<script lang="ts">
	import { Tooltip } from "bits-ui";

	let { delayDuration = 0, ...restProps }: Tooltip.ProviderProps = $props();
</script>

<Tooltip.Provider {delayDuration} {...restProps} />
