<script lang="ts">
	import { Cancel01Icon, GithubIcon, Menu01Icon, NewTwitterIcon, Search01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { onMount } from "svelte";
	import { page } from "$app/state";
	import { Button } from "$lib/components/button";
	import { Kbd } from "$lib/components/kbd";
	import { MENUS } from "$lib/constants/menus";
	import { ROUTES } from "$lib/constants/routes";
	import { localizeHref } from "$lib/paraglide/runtime";
	import { frameworks, frameworkState } from "$lib/stores/framework.svelte";
	import { fetchGithubStars } from "$lib/utils/github";
	import { docsState } from "$routes/docs/[...slug]/context/docs.svelte";
	import FrameworkDropdown from "./framework-dropdown.svelte";
	import IconButton from "./icon-button.svelte";
	import NavMenu from "./nav-menu.svelte";
	import { resolveActiveLabel, setupKeyboardShortcut, type MenuItem, type NavbarProps } from "./navbar.svelte.ts";

	let {
		variant = "floating",
		menuItems = MENUS,
		activeLabel,
		showGithub = true,
		showFrameworkSelector = true,
		trailing,
	}: NavbarProps = $props();

	let dropdownOpen = $state(false);
	let githubStars = $state("...");
	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let searchInput = $state<HTMLInputElement>();

	const isFloating = $derived(variant === "floating");
	const currentUrl = $derived(page.url.href);
	const activeItem = $derived(
		resolveActiveLabel(page.url.pathname, menuItems as readonly MenuItem[], ROUTES.HOME, activeLabel),
	);

	$effect(() => {
		if (!showGithub) return;
		fetchGithubStars("polinema-ui/website").then((count) => (githubStars = count));

		const onScroll = () => (scrolled = window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	});

	onMount(() => setupKeyboardShortcut(() => searchInput));
</script>

<header
	class="{isFloating
		? 'fixed top-3 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:top-4 sm:px-6 sm:py-3.5'
		: 'sticky top-0 z-30 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-4 py-3 backdrop-blur-md sm:px-6'} {isFloating &&
	(scrolled || mobileMenuOpen)
		? 'border-black/8 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-xl'
		: isFloating
			? 'border-white/60 bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-md'
			: ''}"
>
	<a href={localizeHref("#home")} aria-label="Polinema UI home" class="flex shrink-0 items-center">
		<img src="/logo.png" alt="Polinema UI Logo" class="h-4.5 w-auto object-contain sm:h-5" />
	</a>

	{#if !isFloating}
		<NavMenu
			items={menuItems}
			activeLabel={activeItem}
			ariaLabel="Primary navigation"
			ulClass="ml-3 hidden items-center gap-0.5 lg:flex"
		/>
	{/if}

	{#if isFloating}
		<NavMenu
			items={menuItems}
			activeLabel={activeItem}
			ariaLabel="Primary navigation"
			ulClass="hidden items-center gap-0.5 md:flex"
		/>
		<aside class="hidden items-center gap-1.5 sm:gap-2 md:flex">
			{#if showGithub}
				<Button
					href={localizeHref("https://github.com/polinema-ui/website")}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					class="h-8 gap-1.5 rounded-lg border-gray-200/80 bg-white px-2.5 text-xs font-medium text-neutral-800 transition-all hover:bg-gray-100 active:scale-95 sm:h-9 sm:px-3 sm:text-[13px]"
				>
					<HugeiconsIcon icon={GithubIcon} size={14} color="#1a1a1a" />
					<span class="font-medium">{githubStars}</span>
				</Button>
			{/if}
			{#if showFrameworkSelector}
				<FrameworkDropdown
					bind:open={dropdownOpen}
					triggerClass="flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200/80 bg-white px-2.5 text-xs font-medium text-neutral-800 transition-all hover:bg-gray-100 active:scale-95 sm:h-9 sm:gap-2 sm:px-3 sm:text-[13px]"
				/>
			{/if}
		</aside>
		<button
			type="button"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-neutral-200/80 bg-white text-neutral-800 transition-all hover:bg-neutral-100 active:scale-95 md:hidden"
			aria-label="Toggle mobile menu"
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				<HugeiconsIcon icon={Cancel01Icon} size={16} color="#171717" />
			{:else}
				<HugeiconsIcon icon={Menu01Icon} size={16} color="#171717" />
			{/if}
		</button>
	{:else}
		<aside class="ml-auto flex items-center gap-1.5 sm:gap-2">
			<label class="relative flex min-w-0 items-center sm:min-w-52 lg:min-w-64">
				<HugeiconsIcon
					icon={Search01Icon}
					size={16}
					class="pointer-events-none absolute left-3 shrink-0 text-neutral-400"
				/>
				<input
					bind:this={searchInput}
					type="search"
					bind:value={docsState.searchQuery}
					placeholder="Cari dokumentasi..."
					class="h-9 w-full min-w-0 rounded-lg border border-neutral-200 bg-white pr-14 pl-9 text-sm text-neutral-800 transition outline-none placeholder:text-neutral-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
				/>
				<Kbd class="absolute right-1.5 z-10 hidden sm:inline-flex">Ctrl K</Kbd>
			</label>
			{#if showFrameworkSelector}
				<FrameworkDropdown
					bind:open={dropdownOpen}
					triggerClass="hidden h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 text-xs font-medium text-neutral-800 transition-all hover:bg-neutral-100 active:scale-95 sm:flex sm:px-3 sm:text-[13px]"
				/>
			{/if}
			{#if showGithub}
				<IconButton href="https://github.com/polinema-ui/website" ariaLabel="GitHub repository">
					<HugeiconsIcon icon={GithubIcon} size={16} />
				</IconButton>
			{/if}
			<IconButton
				href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Polinema UI")}&url=${encodeURIComponent(currentUrl)}`}
				ariaLabel="Share on X"
			>
				<HugeiconsIcon icon={NewTwitterIcon} size={15} />
			</IconButton>
			{#if trailing}
				{@render trailing()}
			{/if}
		</aside>
	{/if}
</header>

{#if isFloating && mobileMenuOpen}
	<aside
		class="fixed inset-0 z-40 flex flex-col justify-between bg-white/95 px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden"
	>
		<nav aria-label="Mobile navigation links" class="flex flex-col">
			<ul class="flex flex-col divide-y divide-neutral-100">
				{#each menuItems as item (item.label)}
					{@const isActive = activeItem === item.label}
					<li>
						<a
							class="flex items-center justify-between py-4 text-lg font-semibold tracking-tight transition-colors {isActive
								? 'text-blue-600'
								: 'text-neutral-900 hover:text-blue-600'}"
							href={localizeHref(item.href)}
							onclick={() => (mobileMenuOpen = false)}
						>
							<h5>{item.label}</h5>
							{#if isActive}
								<span class="h-2 w-2 rounded-full bg-blue-600"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<section class="flex flex-col gap-3 border-t border-neutral-200/80 pt-5">
			{#if showGithub}
				<Button
					href={localizeHref("https://github.com/polinema-ui/website")}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					class="flex h-11 w-full items-center justify-between rounded-xl border-neutral-200 bg-white px-4 text-sm font-semibold text-neutral-800 shadow-xs"
				>
					<span class="flex items-center gap-2.5">
						<HugeiconsIcon icon={GithubIcon} size={18} color="#1a1a1a" />
						<span>GitHub Repository</span>
					</span>
					<span class="rounded-lg bg-neutral-100 px-2 py-0.5 text-xs font-bold text-neutral-800">
						{githubStars} ★
					</span>
				</Button>
			{/if}
			{#if showFrameworkSelector}
				<div class="grid grid-cols-2 gap-1.5 rounded-xl bg-neutral-100 p-1.5">
					{#each frameworks as fw (fw.name)}
						<button
							class="flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all {frameworkState.selected ===
							fw.name
								? 'bg-white font-semibold text-neutral-950 shadow-xs'
								: 'text-neutral-600 hover:text-neutral-900'}"
							type="button"
							onclick={() => {
								frameworkState.selected = fw.name;
								mobileMenuOpen = false;
							}}
						>
							<HugeiconsIcon icon={fw.icon} size={16} color={fw.color} />
							<span>{fw.name}</span>
						</button>
					{/each}
				</div>
			{/if}
		</section>
	</aside>
{/if}
