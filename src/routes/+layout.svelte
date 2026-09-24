<!-- Don't delete this file. This layout is used to wrap all pages in this current directory. -->

<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "$routes/layout.css";

	let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
{@render children()}
