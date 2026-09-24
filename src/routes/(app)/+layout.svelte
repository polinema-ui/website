<script lang="ts">
	import { ArrowRight01Icon, ArrowUpRight01Icon, GithubIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { Snippet } from "svelte";
	import { Button } from "$lib/components/button";
	import { Navbar } from "$lib/components/navbar";
	import { localizeHref } from "$lib/paraglide/runtime";
	import "$routes/layout.css";

	let { children }: { children: Snippet } = $props();

	const footerLinks = ["Home", "Features", "About", "FAQ", "Docs"];

	const socials: Array<{ label: string; icon: typeof GithubIcon | typeof Linkedin01Icon; href: string }> = [
		{ label: "Github", icon: GithubIcon, href: "https://github.com/polinema-ui/website" },
		{ label: "LinkedIn", icon: Linkedin01Icon, href: "#" },
	];
</script>

<Navbar variant="floating" />

{@render children()}

<footer class="bg-white px-5 pt-12 pb-6 text-neutral-900 sm:px-10 sm:pt-20 lg:px-18 dark:bg-black dark:text-white">
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
					type="email"
					placeholder="Enter email address"
					required
					class="w-full border-0 border-b border-neutral-700 bg-transparent px-0 py-3 text-[15px] text-white outline-none placeholder:text-[#a0a0a0]"
				/>
				<Button
					class="mt-5 flex cursor-pointer items-center gap-2 rounded-lg border-none bg-blue-600 px-6 py-2! text-xs font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_24px_rgba(37,99,235,0.4)] active:scale-95 sm:px-7! sm:py-3.5! sm:text-sm"
				>
					Subscribe Now
					<HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" />
				</Button>
			</form>
		</section>
		<nav aria-label="Footer links">
			<p class="mb-1 text-xs text-[#a0a0a0] lg:mb-2">Links</p>
			{#each footerLinks as link (link)}
				<a
					href={localizeHref(`#${link.toLowerCase()}`)}
					class="block text-sm leading-[1.6] transition-opacity hover:opacity-50 lg:text-base"
				>
					{link}
				</a>
			{/each}
		</nav>
		<section aria-label="Contact information">
			<p class="mb-1 text-xs text-[#a0a0a0] lg:mb-2">Get In Touch</p>
			<a
				class="block text-sm leading-[1.6] transition-opacity hover:opacity-50 lg:text-lg"
				target="_blank"
				href="mailto:polinemaui@gmail.com"
			>
				polinemaui@gmail.com
			</a>
			<p class="mt-6 mb-1 text-xs text-[#a0a0a0] lg:mt-8 lg:mb-2">Offline</p>
			<address class="text-sm leading-[1.45] not-italic lg:text-lg">
				Politeknik Negeri Malang<br />
				Indonesia
			</address>
		</section>
	</div>
	<div class="mx-auto mt-14 grid max-w-295 items-end gap-10 md:grid-cols-[245px_1fr] md:gap-20 lg:gap-32">
		<ul class="border-t border-neutral-200 dark:border-white/10">
			{#each socials as social (social.label)}
				<li>
					<a
						href={social.href}
						target={social.label === "Github" ? "_blank" : undefined}
						rel={social.label === "Github" ? "noopener noreferrer" : undefined}
						class="flex justify-between border-b border-neutral-200 py-3 text-sm transition-opacity hover:opacity-50 dark:border-white/10"
					>
						<span class="flex items-center gap-2">
							<HugeiconsIcon icon={social.icon} size={16} strokeWidth={1.8} aria-hidden="true" />
							{social.label}
						</span>
						<HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.8} aria-hidden="true" />
					</a>
				</li>
			{/each}
		</ul>
		<h2
			class="overflow-hidden bg-linear-to-b from-white via-white to-transparent bg-clip-text text-center text-[clamp(3.5rem,11.5vw,8rem)] leading-[.75] font-bold -tracking-widest whitespace-nowrap text-transparent"
		>
			POLINEMA UI
		</h2>
	</div>
	<h6
		class="mx-auto mt-12 max-w-295 border-t border-neutral-200 pt-4 text-center text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400"
	>
		Copyright © Polinema UI. All Rights Reserved
	</h6>
</footer>
