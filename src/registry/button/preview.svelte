<script lang="ts">
	import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "./meta";
	import type { ButtonVariant } from "./meta";

	let { variant = "default" }: { variant?: ButtonVariant } = $props();
</script>

<div class="flex items-center justify-center">
	<button type="button" class="{BUTTON_BASE} {BUTTON_VARIANTS[variant]} {BUTTON_SIZES.default}">
		Klik Button ini!
	</button>
</div>
