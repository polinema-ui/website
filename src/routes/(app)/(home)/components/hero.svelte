<script lang="ts">
	import { ArrowRight01Icon, Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Tabs } from "bits-ui";
	import { Button } from "$lib/components/button";
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { ROUTES } from "$lib/constants/routes";

	let { activeTab, copied, handleCopy }: { activeTab: string; copied: boolean; handleCopy: () => void } = $props();
</script>

<section
	class="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[linear-gradient(180deg,rgba(253,253,252,1)_0%,rgba(244,246,242,1)_100%)] px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28"
>
	<figure
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 top-20 z-0 h-full w-full mask-[linear-gradient(180deg,transparent_0%,black_10%,black_80%,transparent_100%)] bg-cover bg-position-[center_bottom] opacity-80 sm:opacity-90"
		style="background-image: url('/elon-musk-migren.webp')"
	></figure>
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-16 bg-linear-to-b from-transparent to-[#fbfbfb]"
	></div>
	<article class="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6">
		<h1
			class="max-w-3xl font-sans text-3xl font-bold tracking-tight text-balance text-neutral-900 sm:text-5xl md:text-[56px] md:leading-[1.15]"
		>
			Cari Component?<br />
			<span class="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
				Hust... Tinggal Pilih
			</span>
		</h1>
		<p
			class="max-w-md font-sans text-sm leading-relaxed font-medium text-balance text-white sm:max-w-lg sm:text-base md:text-lg"
		>
			Nggak perlu bikin semuanya dari nol. Cari component yang kamu butuhin, lihat contohnya, dan tinggal pakai sesuai
			kebutuhan 😉
		</p>
		<Button
			href={ROUTES.DOCS}
			class="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_24px_rgba(37,99,235,0.4)] active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px]"
		>
			<span>Getting Started</span>
			<HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" />
		</Button>
	</article>
	<Tabs.Root
		bind:value={activeTab}
		class="relative z-10 w-full max-w-85 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md sm:max-w-md md:max-w-lg"
	>
		<header class="flex items-center justify-between border-b border-neutral-200/80 px-3 py-1.5 sm:px-4 sm:py-2">
			<Tabs.List class="flex gap-1">
				{#each PKG_MANAGERS as pm (pm.id)}
					<Tabs.Trigger
						value={pm.id}
						class="rounded-lg px-2.5 py-1 text-xs font-medium transition-all data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=inactive]:text-neutral-500 data-[state=inactive]:hover:text-neutral-900 sm:px-3 sm:text-[13px]"
					>
						{pm.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
			<Button
				variant="ghost"
				size="icon"
				onclick={handleCopy}
				aria-label="Copy to clipboard"
				class="h-7 w-7 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 active:scale-90 sm:h-8 sm:w-8"
			>
				{#if copied}
					<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
				{:else}
					<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
				{/if}
			</Button>
		</header>
		{#each PKG_MANAGERS as pm (pm.id)}
			<Tabs.Content value={pm.id} class="px-3.5 py-3 sm:px-4 sm:py-3.5">
				<code class="block overflow-x-auto text-xs font-medium text-neutral-900 sm:text-[13px]">
					<span class="mr-1.5 font-bold text-neutral-400 select-none">$</span>{pm.cmd}
				</code>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</section>
