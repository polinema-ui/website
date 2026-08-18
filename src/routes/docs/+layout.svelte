<!-- prettier-ignore -->
<script lang="ts">
	import { Hamburger } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { Snippet } from "svelte";
	import { page } from "$app/state";
	import { ScrollArea } from "$lib/components/scroll-area";
	import { Routes } from "$lib/constants/routes";
	import type { LayoutData } from "./$types";

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	// Content and metadata from the current page
	let title = $derived(page.data.meta?.title);
	let description = $derived(page.data.meta?.description);

	// State variables for sidebar visibility and search query
	let sidebar = $state(false);
	let searchQuery = $state("");
	let allMenus = $derived(data.menus);
	let filteredMenus = $derived(allMenus.filter((menu) => menu.title.toLowerCase().includes(searchQuery.toLowerCase())));

	// Group the filtered menus by category
	let groupedMenus = $derived(filteredMenus.reduce((acc, menu) => {
		if (!acc[menu.category]) acc[menu.category] = [];
		acc[menu.category].push(menu);
		return acc;
	}, {} as Record<string, typeof allMenus>));

	let sortedGroupedMenus = $derived(Object.entries(groupedMenus).sort(([a], [b]) => {
		if (a === "Common") return -1;
		if (b === "Common") return 1;
		return a.localeCompare(b);
	}));
</script>

<!-- prettier-ignore -->
<svelte:head>
	<title>{title ? `${title} | Polinema UI` : "Documentation | Polinema UI"}</title>
	<meta name="description" content={description || "Polinema UI Documentation"} />
</svelte:head>

{#if sidebar}
	<button type="button" aria-label="Tutup menu navigasi" class="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity md:hidden" onclick={() => (sidebar = false)}></button>
{/if}

<!-- prettier-ignore -->
<div class="flex min-h-screen bg-white">
	<aside class="{sidebar ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-50 flex h-screen w-60 shrink-0 flex-col overflow-hidden border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 md:bg-slate-50/40 md:shadow-none">
		<ScrollArea class="h-full w-full">
			<div class="px-6 pt-6">
				<a href={Routes.HOME} class="block">
					<img src="/logo.png" alt="Polinema UI Logo" class="w-3/4" />
				</a>
			</div>
			<hr class="mx-auto my-4 w-17/20" />
			<div class="my-4 px-5">
				<input type="search" placeholder="Search..." bind:value={searchQuery} class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none" />
			</div>
			<nav aria-label="Navigasi Dokumentasi" class="pb-8">
				{#each sortedGroupedMenus as [category, menus] (category)}
					<div class="mt-4 mb-2 px-6 text-xs font-semibold tracking-wider text-slate-500 uppercase">
						{#if category !== "Common"}
							{category}
						{/if}
					</div>
					<ul class="mb-4 space-y-1 px-3">
						{#each menus as menu (menu.url)}
							<li>
								<a href={menu.url} onclick={() => (sidebar = false)} class="block rounded-md px-3 py-2 text-sm text-slate-600 capitalize transition-colors hover:bg-slate-200/50 hover:text-slate-900">
									{menu.title}
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<div class="px-6 py-4 text-center text-sm text-slate-500">Documentation not found.</div>
				{/each}
			</nav>
		</ScrollArea>
	</aside>
	<main class="flex min-h-screen w-full min-w-0 flex-1 flex-col">
		<header class="sticky top-0 z-30 flex items-center gap-4 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md md:hidden">
			<button type="button" class="cursor-pointer text-slate-500 hover:text-slate-900" onclick={() => (sidebar = true)}>
				<HugeiconsIcon icon={Hamburger} class="h-4 w-4" />
			</button>
		</header>
		<article class="mx-auto prose max-w-5xl flex-1 px-8 py-10 prose-slate md:px-12 md:py-16 prose-headings:scroll-mt-20 prose-a:text-blue-600">
			{@render children()}
		</article>
		<footer class="mx-auto max-w-5xl border-t border-slate-100 px-8 py-8 text-sm text-slate-500 md:px-12">
			<p>
				&copy; {new Date().getFullYear()} Polinema UI. Built with SvelteKit & MDsveX.
			</p>
		</footer>
	</main>
</div>