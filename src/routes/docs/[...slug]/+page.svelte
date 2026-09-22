<script lang="ts">
	let { data } = $props();
</script>

{#if data.content}
	{@const Content = data.content}
	<Content />
{:else}
	<p class="text-neutral-400">Loading...</p>
{/if}
