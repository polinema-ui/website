<script lang="ts">
	import {
		BootstrapIcon,
		Cancel01Icon,
		ChevronDownIcon,
		GithubIcon,
		Menu01Icon,
		TailwindcssIcon,
		ArrowRight01Icon,
		Linkedin01Icon,
		ArrowUpRight01Icon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { Snippet } from "svelte";
	import { Button } from "$lib/components/button";
	import { Content, Item, Root, Trigger } from "$lib/components/dropdown-menu";
	import { MENUS } from "$lib/constants/menus";
	import { localizeHref } from "$lib/paraglide/runtime";
	import { fetchGithubStars } from "$lib/utils/github";
	import "$routes/layout.css";

	let { children }: { children: Snippet } = $props();

	/** Active navigation link label */
	let activeItem = $state<(typeof MENUS)[number]["label"]>(MENUS[0].label);

	/** Dropdown menu visibility state */
	let dropdownOpen = $state(false);

	/** Stargazer count of the repository */
	let githubStars = $state("...");

	/** Sticky navbar scroll state */
	let scrolled = $state(false);

	/** Selected CSS framework */
	let selectedFramework = $state<"Tailwind 4" | "Bootstrap 5">("Tailwind 4");

	/** Mobile hamburger menu state */
	let mobileMenuOpen = $state(false);

	const footerLinks = ["Home", "Features", "About", "FAQ", "Docs"];

	const socials = [
		{ label: "Github", icon: GithubIcon, href: "https://github.com/polinema-ui/website" },
		{ label: "LinkedIn", icon: Linkedin01Icon, href: "#" },
	];

	$effect(() => {
		fetchGithubStars("polinema-ui/website").then((count) => (githubStars = count));

		const onScroll = () => (scrolled = window.scrollY > 20);

		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	});
</script>

<header
	class="fixed top-3 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:top-4 sm:px-6 sm:py-3.5 {scrolled ||
	mobileMenuOpen
		? 'border-black/8 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-xl'
		: 'border-white/60 bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-md'}"
>
	<a href={localizeHref("#home")} aria-label="Polinema UI home" class="flex shrink-0 items-center">
		<img src="/logo.png" alt="Polinema UI Logo" class="h-4.5 w-auto object-contain sm:h-5" />
	</a>

	<nav aria-label="Primary navigation" class="hidden md:flex">
		<ul class="flex items-center gap-1">
			{#each MENUS as item (item.label)}
				{@const isActive = activeItem === item.label}

				<li>
					<a
						href={localizeHref(item.href)}
						aria-current={isActive ? "page" : undefined}
						onclick={() => (activeItem = item.label)}
						class="relative rounded-lg px-3 py-1.5 text-[13.5px] font-medium tracking-normal transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 {isActive
							? 'bg-black/6 text-neutral-900'
							: 'text-neutral-600 hover:bg-black/4 hover:text-neutral-900'}"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<aside class="hidden items-center gap-1.5 sm:gap-2 md:flex">
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

		<Root bind:open={dropdownOpen}>
			<Trigger
				class="flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200/80 bg-white px-2.5 text-xs font-medium text-neutral-800 transition-all hover:bg-gray-100 active:scale-95 sm:h-9 sm:gap-2 sm:px-3 sm:text-[13px]"
			>
				{#if selectedFramework === "Tailwind 4"}
					<HugeiconsIcon icon={TailwindcssIcon} size={15} color="#06b6d4" />
					<span class="hidden sm:inline">Tailwind 4</span>
				{:else}
					<HugeiconsIcon icon={BootstrapIcon} size={15} color="#7952b3" />
					<span class="hidden sm:inline">Bootstrap 5</span>
				{/if}

				<span class="transition-transform duration-200 {dropdownOpen ? 'rotate-180' : ''}">
					<HugeiconsIcon icon={ChevronDownIcon} size={13} color="#1c1c1c" />
				</span>
			</Trigger>

			<Content class="z-50 min-w-36 rounded-xl border border-neutral-200/80 bg-white p-1 shadow-xl">
				<Item
					onclick={() => (selectedFramework = "Tailwind 4")}
					class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-neutral-800 transition-colors select-none hover:bg-[#f4f4f0] sm:text-[13.5px]"
				>
					<HugeiconsIcon icon={TailwindcssIcon} size={15} color="#06b6d4" />
					<span>Tailwind 4</span>
				</Item>

				<Item
					onclick={() => (selectedFramework = "Bootstrap 5")}
					class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-neutral-800 transition-colors select-none hover:bg-[#f4f4f0]"
				>
					<HugeiconsIcon icon={BootstrapIcon} size={15} color="#7952b3" />
					<span>Bootstrap 5</span>
				</Item>
			</Content>
		</Root>
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
</header>

{#if mobileMenuOpen}
	<aside
		class="fixed inset-0 z-40 flex flex-col justify-between bg-white/95 px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden"
	>
		<nav aria-label="Mobile navigation links" class="flex flex-col">
			<ul class="flex flex-col divide-y divide-neutral-100">
				{#each MENUS as item (item.label)}
					{@const isActive = activeItem === item.label}

					<li>
						<a
							class="flex items-center justify-between py-4 text-lg font-semibold tracking-tight transition-colors {isActive
								? 'text-blue-600'
								: 'text-neutral-900 hover:text-blue-600'}"
							href={localizeHref(item.href)}
							onclick={() => {
								activeItem = item.label;
								mobileMenuOpen = false;
							}}
						>
							<span>{item.label}</span>

							{#if isActive}
								<span class="h-2 w-2 rounded-full bg-blue-600"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<footer class="flex flex-col gap-3 border-t border-neutral-200/80 pt-5">
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

			<div class="grid grid-cols-2 gap-1.5 rounded-xl bg-neutral-100 p-1.5">
				<button
					class="flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all {selectedFramework ===
					'Tailwind 4'
						? 'bg-white font-semibold text-neutral-950 shadow-xs'
						: 'text-neutral-600 hover:text-neutral-900'}"
					type="button"
					onclick={() => {
						selectedFramework = "Tailwind 4";
						mobileMenuOpen = false;
					}}
				>
					<HugeiconsIcon icon={TailwindcssIcon} size={16} color="#06b6d4" />
					<span>Tailwind 4</span>
				</button>

				<button
					class="flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-medium transition-all {selectedFramework ===
					'Bootstrap 5'
						? 'bg-white font-semibold text-neutral-950 shadow-xs'
						: 'text-neutral-600 hover:text-neutral-900'}"
					type="button"
					onclick={() => {
						selectedFramework = "Bootstrap 5";
						mobileMenuOpen = false;
					}}
				>
					<HugeiconsIcon icon={BootstrapIcon} size={16} color="#7952b3" />
					<span>Bootstrap 5</span>
				</button>
			</div>
		</footer>
	</aside>
{/if}

{@render children()}

<!-- Footer -->
<footer class="bg-white px-5 pt-12 pb-6 text-black sm:px-10 sm:pt-20 lg:px-18">
	<div class="mx-auto grid max-w-295 gap-10 md:grid-cols-[1.5fr_.65fr_.85fr] md:gap-20 lg:gap-32">
		<section>
			<h2
				id="footer-title"
				class="mb-9 max-w-75 text-[1.45rem] leading-tight font-medium tracking-[-0.04em] text-balance"
			>
				Sign up for our newsletter to get latest insights and updates
			</h2>

			<form class="max-w-75.75" action="#">
				<label class="sr-only" for="footer-email">Email address</label>

				<input
					id="footer-email"
					type="email"
					placeholder="Enter email address"
					required
					class="text-blackbg-black focus:border-blackbg-black w-full border-0 border-b border-[#686868] bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#a0a0a0]"
				/>

				<Button
					class="mt-5 flex cursor-pointer items-center gap-2 rounded-lg border-none bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_24px_rgba(37,99,235,0.4)] active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px]"
				>
					<span>Subscribe Now</span>
					<HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" />
				</Button>
			</form>
		</section>

		<nav aria-label="Footer links">
			<p class="mb-2 text-xs text-[#a0a0a0]">Links</p>

			{#each footerLinks as link (link)}
				<a
					href={localizeHref(`#${link.toLowerCase()}`)}
					class="block text-[17px] leading-[1.6] transition-opacity hover:opacity-50"
				>
					{link}
				</a>
			{/each}
		</nav>

		<section aria-label="Contact information">
			<p class="mb-2 text-xs text-[#a0a0a0]">Get In Touch</p>

			<a class="block text-lg leading-[1.6] transition-opacity hover:opacity-50" href="mailto:polinemaui@gmail.com">
				polinemaui@gmail.com
			</a>

			<p class="mt-8 mb-2 text-xs text-[#a0a0a0]">Offline</p>

			<address class="max-w-53.75 text-lg leading-[1.45] not-italic">
				Politeknik Negeri Malang<br />
				Indonesia
			</address>
		</section>
	</div>

	<!-- Socials + Brand -->
	<div class="mx-auto mt-14 grid max-w-295 items-end gap-10 md:grid-cols-[245px_1fr] md:gap-20 lg:gap-32">
		<div class="border-t border-black/10">
			{#each socials as social (social.label)}
				<a
					href={social.href}
					target={social.label === "Github" ? "_blank" : undefined}
					rel={social.label === "Github" ? "noopener noreferrer" : undefined}
					class="flex justify-between border-b border-black/10 py-3 text-sm transition-opacity hover:opacity-50"
				>
					<span class="flex items-center gap-2">
						<HugeiconsIcon icon={social.icon} size={16} strokeWidth={1.8} aria-hidden="true" />
						{social.label}
					</span>

					<HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.8} aria-hidden="true" />
				</a>
			{/each}
		</div>

		<div
			class="overflow-hidden bg-linear-to-b from-black via-black to-[#ffff] bg-clip-text text-[clamp(5rem,8vw,9rem)] leading-[.75] font-bold -tracking-widest text-transparent"
		>
			POLINEMA UI
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-295 border-t border-black/10 pt-4 text-center text-xs text-black">
		Copyright © Polinema UI. All Rights Reserved
	</div>
</footer>
