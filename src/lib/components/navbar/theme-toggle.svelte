<script lang="ts">
	import { Moon01Icon, Sun01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { mode, toggleMode } from "mode-watcher";
	import { ICON_BUTTON_CLASS } from "./navbar.svelte.ts";
</script>

<button
	type="button"
	onclick={toggleMode}
	aria-label={mode.current === "dark" ? "Switch to light mode" : "Switch to dark mode"}
	class={ICON_BUTTON_CLASS}
>
	{#if mode.current === "dark"}
		<HugeiconsIcon icon={Sun01Icon} size={16} />
	{:else}
		<HugeiconsIcon icon={Moon01Icon} size={16} />
	{/if}
</button>
