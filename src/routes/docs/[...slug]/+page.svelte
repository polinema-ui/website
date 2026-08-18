<script lang="ts">
	let { data } = $props();
</script>

{#if data.content}
	{@const Content = data.content}
	<Content />
{:else}
	<p>Loading...</p>
{/if}