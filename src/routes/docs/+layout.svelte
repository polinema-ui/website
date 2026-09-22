<script lang="ts">
	import {
		ArrowLeft01Icon,
		ArrowRight01Icon,
		Cancel01Icon,
		Menu01Icon,
		RightToLeftListBulletIcon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { onMount, tick, type Snippet } from "svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { Navbar } from "$lib/components/navbar";
	import { ScrollArea } from "$lib/components/scroll-area";
	import { docsState } from "$routes/docs/[...slug]/context/docs.svelte";
	import type { LayoutData } from "./$types";

	type Menu = LayoutData["menus"][number];
	type TocItem = { id: string; title: string; level: number };

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let articleElement: HTMLElement;
	let sidebarOpen = $state(false);
	let tocItems = $state<TocItem[]>([]);
	let activeHeadingId = $state("");

	let title = $derived(page.data.meta?.title);
	let description = $derived(page.data.meta?.description);
	let author = $derived(page.data.meta?.author);
	let authorUrl = $derived(page.data.meta?.authorUrl);
	let lastUpdated = $derived(page.data.meta?.lastUpdated);
	const CATEGORY_ORDER = ["Getting started", "Guides", "Components"];

	let filteredMenus = $derived(
		data.menus.filter((menu) => menu.title.toLowerCase().includes(docsState.searchQuery.toLowerCase())),
	);

	let groupedMenus = $derived(
		filteredMenus.reduce(
			(acc, menu) => {
				if (!acc[menu.category]) acc[menu.category] = [];
				acc[menu.category].push(menu);
				return acc;
			},
			{} as Record<string, Menu[]>,
		),
	);

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

	let orderedMenus = $derived(
		sortedCategories.flatMap((category) =>
			[...(groupedMenus[category] ?? [])].sort((a, b) => (a.order ?? 99) - (b.order ?? 99)),
		),
	);
	let currentMenuIndex = $derived(orderedMenus.findIndex((menu) => menu.url === page.url.pathname));
	let previousMenu = $derived(currentMenuIndex > 0 ? orderedMenus[currentMenuIndex - 1] : undefined);
	let nextMenu = $derived(
		currentMenuIndex !== -1 && currentMenuIndex < orderedMenus.length - 1
			? orderedMenus[currentMenuIndex + 1]
			: undefined,
	);

	function slugify(value: string) {
		return value
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9\s-]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-");
	}

	function updateActiveHeading() {
		const headings = Array.from(articleElement?.querySelectorAll<HTMLElement>("h2[id], h3[id]") ?? []);
		activeHeadingId =
			headings.findLast((heading) => heading.getBoundingClientRect().top <= 120)?.id ?? headings[0]?.id ?? "";
	}

	function updateToc() {
		const usedIds: string[] = [];
		const headings = Array.from(articleElement?.querySelectorAll<HTMLHeadingElement>("h2, h3") ?? []);

		tocItems = headings.map((heading) => {
			const baseId = heading.id || slugify(heading.textContent ?? "section");
			let id = baseId;
			let count = 2;

			while (usedIds.includes(id)) id = `${baseId}-${count++}`;
			usedIds.push(id);
			heading.id = id;

			return { id, title: heading.textContent ?? "", level: Number(heading.tagName.slice(1)) };
		});

		updateActiveHeading();
	}

	onMount(() => {
		window.addEventListener("scroll", updateActiveHeading, { passive: true });
		return () => window.removeEventListener("scroll", updateActiveHeading);
	});

	$effect(() => {
		void page.url.pathname;
		void tick().then(updateToc);
	});
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

<Navbar variant="docs">
	{#snippet trailing()}
		<button
			type="button"
			class="flex size-8 cursor-pointer items-center justify-center rounded-lg text-neutral-300 hover:bg-white/10 hover:text-white active:scale-95 md:hidden"
			onclick={() => (sidebarOpen = !sidebarOpen)}
			aria-label="Toggle navigation menu"
			aria-expanded={sidebarOpen}
		>
			{#if sidebarOpen}
				<HugeiconsIcon icon={Cancel01Icon} size={18} />
			{:else}
				<HugeiconsIcon icon={Menu01Icon} size={18} />
			{/if}
		</button>
	{/snippet}
</Navbar>

<div class="flex min-h-screen bg-[#0a0d13]">
	<aside
		class="{sidebarOpen
			? 'translate-x-0'
			: '-translate-x-full'} fixed top-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col overflow-hidden bg-[#0a0d13] transition-transform duration-300 ease-in-out md:sticky md:top-24 md:z-0 md:h-[calc(100dvh-4rem)] md:translate-x-0"
	>
		<button
			type="button"
			class="absolute top-3 right-3 cursor-pointer rounded-lg p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white active:scale-95 md:hidden"
			onclick={() => (sidebarOpen = false)}
			aria-label="Close navigation menu"
		>
			<HugeiconsIcon icon={Cancel01Icon} size={18} />
		</button>
		<ScrollArea class="h-full w-full">
			<nav aria-label="Documentation navigation" class="px-3 pt-10 pb-8 md:pt-0">
				{#each sortedCategories as category (category)}
					{@const menus = [...(groupedMenus[category] ?? [])].sort((a, b) => (a.order ?? 99) - (b.order ?? 99))}
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
											? 'bg-blue-500/15 font-semibold text-blue-400'
											: 'text-neutral-400 hover:bg-white/5 hover:text-white'}"
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
	<main class="mx-auto flex min-h-screen max-w-380 min-w-0 flex-1 flex-col">
		<div
			class="mx-auto grid w-full flex-1 grid-cols-1 gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:px-10 xl:grid-cols-[minmax(0,4xl)_17rem] xl:gap-12"
		>
			<div class="min-w-0">
				<div class="mb-6 flex items-center justify-between">
					<h1 class="font-serif text-4xl font-extralight tracking-tighter text-white sm:text-5xl">{title}</h1>
					<nav aria-label="Documentation pagination" class="hidden gap-2 lg:flex">
						{#if previousMenu}
							<a
								href={previousMenu.url}
								class="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white"
								aria-label={`Previous page: ${previousMenu.title}`}
							>
								<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
							</a>
						{:else}
							<button
								disabled
								class="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg bg-white/5 text-neutral-600"
								aria-label="Previous page"
							>
								<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
							</button>
						{/if}
						{#if nextMenu}
							<a
								href={nextMenu.url}
								class="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-neutral-300 transition-colors hover:bg-white/20 hover:text-white"
								aria-label={`Next page: ${nextMenu.title}`}
							>
								<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
							</a>
						{:else}
							<button
								disabled
								class="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg bg-white/5 text-neutral-600"
								aria-label="Next page"
							>
								<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
							</button>
						{/if}
					</nav>
				</div>
				<article
					bind:this={articleElement}
					class="prose max-w-none min-w-0 flex-1 prose-slate dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-8 prose-h2:mb-1 prose-h2:text-2xl prose-h2:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400"
				>
					{@render children()}
				</article>
			</div>
			<aside class="hidden lg:block">
				<div class="sticky top-22 space-y-8">
					<nav aria-label="On this page" class="border-l border-white/10 pl-4 text-sm">
						<div class="mb-3 flex items-center gap-2 font-medium text-neutral-400">
							<HugeiconsIcon icon={RightToLeftListBulletIcon} size={16} />
							<span>On this page</span>
						</div>
						{#if tocItems.length}
							<ul class="space-y-2">
								{#each tocItems as item (item.id)}
									<li class={item.level === 3 ? "pl-4" : undefined}>
										<a
											href={`#${item.id}`}
											class="block border-l-2 py-0.5 pl-3 transition-colors {activeHeadingId === item.id
												? '-ml-4.25 border-white font-medium text-white'
												: '-ml-4.25 border-transparent text-neutral-500 hover:text-white'}"
										>
											{item.title}
										</a>
									</li>
								{/each}
							</ul>
						{:else}
							<p class="text-neutral-400">No sections.</p>
						{/if}
					</nav>
					<section class="rounded-2xl bg-white/5 p-5">
						<h2 class="text-lg leading-tight font-semibold text-white">
							Gas kalo mau jadi contributor di open source ini
						</h2>
						<p class="mt-3 text-sm leading-relaxed text-neutral-400">
							Bantu bikin Polinema UI makin rapi, kepake, dan enak dipakai bareng-bareng.
						</p>
						<a
							href="https://github.com/polinema-ui"
							class="mt-4 inline-flex rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
						>
							Contribute on GitHub
						</a>
					</section>
				</div>
			</aside>
		</div>
		{#if author || lastUpdated}
			<footer
				class="mx-auto flex w-full max-w-380 flex-col gap-4 px-6 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-10"
			>
				<div>
					{#if author}
						Built by
						<a
							href={authorUrl || "#"}
							class="font-medium text-white underline underline-offset-4 hover:text-neutral-300"
						>
							{author}
						</a>
					{/if}
				</div>
				<div>
					{#if lastUpdated}
						Last updated: <span class="ml-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-neutral-300">
							{lastUpdated}
						</span>
					{/if}
				</div>
			</footer>
		{/if}
	</main>
</div>
