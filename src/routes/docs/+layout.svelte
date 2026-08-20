<script lang="ts">
	import {
		ArrowLeft01Icon,
		ArrowRight01Icon,
		Cancel01Icon,
		Menu01Icon,
		RightToLeftListBulletIcon,
		Search01Icon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { onMount, tick, type Snippet } from "svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { Input } from "$lib/components/input";
	import { ScrollArea } from "$lib/components/scroll-area";
	import { ROUTES } from "$lib/constants/routes";
	import type { LayoutData } from "./$types";

	type Menu = LayoutData["menus"][number];
	type TocItem = { id: string; title: string; level: number };

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let articleElement: HTMLElement;
	let sidebarOpen = $state(false);
	let searchQuery = $state("");
	let tocItems = $state<TocItem[]>([]);
	let activeHeadingId = $state("");

	let title = $derived(page.data.meta?.title);
	let description = $derived(page.data.meta?.description);
	let author = $derived(page.data.meta?.author);
	let authorUrl = $derived(page.data.meta?.authorUrl);
	let lastUpdated = $derived(page.data.meta?.lastUpdated);
	const CATEGORY_ORDER = ["Getting started", "Guides", "Components"];

	let filteredMenus = $derived(
		data.menus.filter((menu) => menu.title.toLowerCase().includes(searchQuery.toLowerCase())),
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

	<main class="mx-auto flex min-h-screen max-w-380 min-w-0 flex-1 flex-col">
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

		<div
			class="mx-auto grid w-full flex-1 grid-cols-1 gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:px-10 xl:grid-cols-[minmax(0,4xl)_17rem] xl:gap-12"
		>
			<div class="min-w-0">
				<div class="mb-6 flex items-center justify-between">
					<h1 class="font-serif text-4xl font-extralight tracking-tighter sm:text-5xl">{title}</h1>
					<nav aria-label="Documentation pagination" class="hidden gap-2 lg:flex">
						{#if previousMenu}
							<a
								href={previousMenu.url}
								class="inline-flex size-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-950"
								aria-label={`Previous page: ${previousMenu.title}`}
							>
								<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
							</a>
						{:else}
							<button
								disabled
								class="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg bg-neutral-50 text-neutral-300"
								aria-label="Previous page"
							>
								<HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
							</button>
						{/if}
						{#if nextMenu}
							<a
								href={nextMenu.url}
								class="inline-flex size-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-950"
								aria-label={`Next page: ${nextMenu.title}`}
							>
								<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
							</a>
						{:else}
							<button
								disabled
								class="inline-flex size-9 cursor-not-allowed items-center justify-center rounded-lg bg-neutral-50 text-neutral-300"
								aria-label="Next page"
							>
								<HugeiconsIcon icon={ArrowRight01Icon} size={18} />
							</button>
						{/if}
					</nav>
				</div>

				<article
					bind:this={articleElement}
					class="prose max-w-none min-w-0 flex-1 prose-slate prose-headings:scroll-mt-24 prose-h2:mt-8 prose-h2:mb-1 prose-h2:text-2xl prose-h2:font-semibold prose-a:text-blue-600"
				>
					{@render children()}
				</article>
			</div>

			<aside class="hidden lg:block">
				<div class="sticky top-8 space-y-8">
					<nav aria-label="On this page" class="border-l border-neutral-200 pl-4 text-sm">
						<div class="mb-3 flex items-center gap-2 font-medium text-neutral-600">
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
												? '-ml-4.25 border-neutral-950 font-medium text-neutral-950'
												: '-ml-4.25 border-transparent text-neutral-500 hover:text-neutral-900'}"
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

					<section class="rounded-2xl bg-neutral-100 p-5">
						<h2 class="text-lg leading-tight font-semibold text-neutral-950">
							Gas kalo mau jadi contributor di open source ini
						</h2>
						<p class="mt-3 text-sm leading-relaxed text-neutral-600">
							Bantu bikin Polinema UI makin rapi, kepake, dan enak dipakai bareng-bareng.
						</p>
						<a
							href="https://github.com/polinema-ui"
							class="mt-4 inline-flex rounded-lg bg-neutral-900 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
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
							class="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
						>
							{author}
						</a>
					{/if}
				</div>
				<div>
					{#if lastUpdated}
						Last updated: <span
							class="ml-1.5 rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800"
						>
							{lastUpdated}
						</span>
					{/if}
				</div>
			</footer>
		{/if}
	</main>
</div>
