<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { GithubIcon, ChevronDownIcon } from "@hugeicons/core-free-icons";
	import { localizeHref } from "$lib/paraglide/runtime";
	import * as DropdownMenu from "$lib/components/dropdown-menu";
	import { fetchGithubStars } from "$lib/utils/github";
	import { TailwindLogo, BootstrapLogo } from "$lib/components/icons";
	import { Button } from "$lib/components/button";
	import type { NavItem } from "$lib/types/navbar";
	import { DEFAULT_NAV_ITEMS } from "$lib/constants/menus";

	interface Props {
		items?: NavItem[];
	}

	let { items = DEFAULT_NAV_ITEMS }: Props = $props();
	let activeItem = $state("");
	let scrolled = $state(false);
	$effect(() => {
		if (!activeItem && items[0]) {
			activeItem = items[0].label;
		}
	});
	let githubStars = $state("...");
	$effect(() => {
		fetchGithubStars("polinema-ui/website").then((count) => {
			githubStars = count;
		});
	});
	let selectedFramework = $state("Tailwind 4");
	let dropdownOpen = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	});
</script>

<header
	class="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-6 transition-all duration-300"
	aria-label="Site navigation"
>
	<div
		class="flex items-center justify-between rounded-2xl border px-6 py-3.5 transition-all duration-300
			{scrolled
			? 'border-black/[0.07] bg-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-xl'
			: 'border-white/50 bg-white/65 shadow-[0_4px_16px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-md'}"
	>
		<a href={localizeHref("#home")} aria-label="Polinema UI home" class="shrink-0">
			<span class="font-sans text-[17px] leading-none font-medium tracking-tight text-[#0f0f0f]"> Polinema UI </span>
		</a>

		<nav aria-label="Primary navigation">
			<ul class="flex items-center gap-0.5">
				{#each items as item (item.label)}
					{@const isActive = activeItem === item.label}
					<li>
						<a
							href={localizeHref(item.href)}
							aria-current={isActive ? "page" : undefined}
							onclick={() => (activeItem = item.label)}
							class="relative rounded-md px-3.5 py-2 text-[13.5px] leading-normal font-medium tracking-normal transition-all duration-200
								focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
								{isActive
								? 'bg-black/6 font-medium text-[#0f0f0f]'
								: 'font-normal text-[#6b7280] hover:bg-black/4 hover:text-[#0f0f0f]'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<!-- Github Star Button -->
			<Button
				href={localizeHref("https://github.com/polinema-ui/website")}
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				class="flex h-auto items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-[13px] font-medium text-[#1a1a1a] transition-all duration-200 hover:bg-gray-100 active:scale-[0.97]"
			>
				<HugeiconsIcon icon={GithubIcon} size={15} color="#1a1a1a" />
				<span class="min-w-2.5 text-center">{githubStars}</span>
			</Button>

			<!-- Framework Dropdown -->
			<DropdownMenu.Root bind:open={dropdownOpen}>
				<DropdownMenu.Trigger
					class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-[13px] font-medium text-[#1a1a1a] transition-all duration-200 hover:bg-gray-100 active:scale-[0.97]"
				>
					{#if selectedFramework === "Tailwind 4"}
						<TailwindLogo />
						<span>Tailwind 4</span>
					{:else}
						<BootstrapLogo />
						<span>Bootstrap 5</span>
					{/if}
					<span class="transition-transform duration-200 {dropdownOpen ? 'rotate-180' : ''}">
						<HugeiconsIcon icon={ChevronDownIcon} size={14} color="#1c1c1c" />
					</span>
				</DropdownMenu.Trigger>

				<DropdownMenu.Content class="z-50 rounded-lg bg-white p-1 shadow-xl">
					<DropdownMenu.Item
						onclick={() => (selectedFramework = "Tailwind 4")}
						class="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-[13.5px] font-medium text-[#1a1a1a] transition-colors select-none hover:bg-[#f4f4f0]"
					>
						<TailwindLogo />
						<span>Tailwind 4</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item
						onclick={() => (selectedFramework = "Bootstrap 5")}
						class="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-[13.5px] font-medium text-[#1a1a1a] transition-colors select-none hover:bg-[#f4f4f0]"
					>
						<BootstrapLogo />
						<span>Bootstrap 5</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
