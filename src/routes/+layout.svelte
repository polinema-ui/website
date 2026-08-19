<script lang="ts">
	import "$routes/layout.css";

	let { children } = $props();
</script>

{@render children()}

<svelte:head>
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
</svelte:head>
