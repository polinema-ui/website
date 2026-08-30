<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { navLinkClass, type MenuItem } from "./navbar.svelte.ts";

	let {
		items,
		activeLabel,
		ulClass = "flex items-center gap-0.5",
		ariaLabel,
	}: {
		items: readonly MenuItem[];
		activeLabel?: string;
		ulClass?: string;
		ariaLabel?: string;
	} = $props();
</script>

<nav aria-label={ariaLabel}>
	<ul class={ulClass}>
		{#each items as item (item.label)}
			{@const isActive = activeLabel === item.label}
			<li class="shrink-0">
				<a href={localizeHref(item.href)} aria-current={isActive ? "page" : undefined} class={navLinkClass(isActive)}>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
