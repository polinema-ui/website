<script lang="ts">
	import { Cancel01Icon, Menu01Icon, Search01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { Snippet } from "svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { Input } from "$lib/components/input";
	import { ScrollArea } from "$lib/components/scroll-area";
	import { ROUTES } from "$lib/constants/routes";
	import type { LayoutData } from "./$types";

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	/** Page metadata derived from active doc */
	let title = $derived(page.data.meta?.title);
	let description = $derived(page.data.meta?.description);

	/** Sidebar visibility and search query state */
	let sidebarOpen = $state(false);
	let searchQuery = $state("");

	/** Standard category priority order */
	const CATEGORY_ORDER = ["Getting started", "Guides", "Components"];

	/** Filtered menu list based on search */
	let filteredMenus = $derived(
		data.menus.filter((menu) => menu.title.toLowerCase().includes(searchQuery.toLowerCase())),
	);

	/** Menus grouped by category */
	let groupedMenus = $derived(
		filteredMenus.reduce(
			(acc, menu) => {
				if (!acc[menu.category]) acc[menu.category] = [];
				acc[menu.category].push(menu);
				return acc;
			},
			{} as Record<string, typeof data.menus>,
		),
	);

	/** Sorted categories based on predefined priority */
	let sortedCategories = $derived(
		Object.keys(groupedMenus).sort((a, b) => {
			const indexA = CATEGORY_ORDER.indexOf(a);
			const indexB = CATEGORY_ORDER.indexOf(b);
			if (indexA !== -1 && indexB !== -1) return indexA - indexB;
			if (indexA !== -1) return -1;
			if (indexB !== -1) return 1;
			return a.localeCompare(b);
		}),
	);
</script>

<svelte:head>
	<title>{title ? `${title} | Polinema UI` : "Documentation | Polinema UI"}</title>
	<meta name="description" content={description || "Polinema UI Documentation"} />
</svelte:head>

{#if sidebarOpen}
	<Button
		type="button"
		class="fixed inset-0 z-40 bg-neutral-950/20 backdrop-blur-xs md:hidden"
		onclick={() => (sidebarOpen = false)}
	></Button>
{/if}

<div class="flex min-h-screen bg-white">
	<aside
		class="{sidebarOpen
			? 'translate-x-0'
			: '-translate-x-full'} fixed top-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col overflow-hidden border-r border-neutral-200 bg-white transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 md:bg-neutral-50/50"
	>
		<ScrollArea class="h-full w-full">
			<header class="px-6 pt-6">
				<a href={ROUTES.HOME} aria-label="Back to home" class="block">
					<img src="/logo.png" alt="Polinema UI Logo" class="h-5 w-auto object-contain" />
				</a>
			</header>
			<div class="relative my-4 flex items-center px-5">
				<span class="pointer-events-none absolute left-9 text-neutral-400">
					<HugeiconsIcon icon={Search01Icon} size={14} />
				</span>
				<Input
					type="search"
					placeholder="Search docs..."
					bind:value={searchQuery}
					class="w-full rounded-lg border border-neutral-200 bg-white py-1.5 pr-3 pl-10 text-xs placeholder-neutral-400 transition-all focus:border-blue-500 focus:outline-none"
				/>
			</div>
			<nav aria-label="Documentation navigation" class="px-3 pb-8">
				{#each sortedCategories as category (category)}
					{@const menus = groupedMenus[category].sort((a, b) => (a.order ?? 99) - (b.order ?? 99))}
					<section class="mb-4">
						<h3 class="px-3 py-1.5 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
							{category}
						</h3>
						<ul class="mt-1 space-y-0.5">
							{#each menus as menu (menu.url)}
								{@const isActive = page.url.pathname === menu.url}
								<li>
									<a
										href={menu.url}
										aria-current={isActive ? "page" : undefined}
										onclick={() => (sidebarOpen = false)}
										class="block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors {isActive
											? 'bg-blue-50 font-semibold text-blue-600'
											: 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}"
									>
										{menu.title}
									</a>
								</li>
							{/each}
						</ul>
					</section>
				{:else}
					<p class="px-3 py-4 text-center text-xs text-neutral-400">Document not found.</p>
				{/each}
			</nav>
		</ScrollArea>
	</aside>
	<main class="flex min-h-screen w-full min-w-0 flex-1 flex-col">
		<header
			class="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-6 py-3.5 backdrop-blur-md md:hidden"
		>
			<a href={ROUTES.HOME} aria-label="Polinema UI Home">
				<img src="/logo.png" alt="Polinema UI Logo" class="h-4.5 w-auto object-contain" />
			</a>
			<button
				type="button"
				class="cursor-pointer rounded-lg p-1.5 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
				onclick={() => (sidebarOpen = !sidebarOpen)}
				aria-label="Toggle navigation menu"
			>
				{#if sidebarOpen}
					<HugeiconsIcon icon={Cancel01Icon} size={18} />
				{:else}
					<HugeiconsIcon icon={Menu01Icon} size={18} />
				{/if}
			</button>
		</header>
		<article
			class="mx-auto prose max-w-4xl flex-1 px-6 py-8 prose-slate md:px-12 md:py-12 prose-headings:scroll-mt-20 prose-a:text-blue-600"
		>
			{@render children()}
		</article>
		<footer class="mx-auto w-full max-w-4xl border-t border-neutral-100 px-6 py-6 text-xs text-neutral-400 md:px-12">
			<p>&copy; {new Date().getFullYear()} Polinema UI. Built with SvelteKit & MDsveX.</p>
		</footer>
	</main>
</div>
