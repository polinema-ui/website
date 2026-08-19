<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
	import { Tabs } from "bits-ui";
	import { Navbar } from "$lib/components/navbar";
	import { Button } from "$lib/components/button";
	import { CopyButton } from "$lib/components/copy";
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { About } from "$lib/components/sections";

	let activeTab = $state("pnpm");

	let activeCmd = $derived(PKG_MANAGERS.find((p) => p.id === activeTab)?.cmd ?? "");
</script>

<svelte:head>
	<title>Polinema UI</title>
	<meta name="description" content="Flexible, easy to integrate, and easy to use." />
</svelte:head>

<main
	id="home"
	class="relative flex min-h-screen w-full flex-col items-center gap-6.5 overflow-hidden bg-[linear-gradient(180deg,rgba(253,253,252,1)_0%,rgba(244,246,242,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
>
	<section
		aria-label="Customer relationship management preview"
		class="absolute bottom-15 left-0 flex w-full flex-col items-start"
	>
		<div
			class="relative aspect-[2.38] w-full self-stretch mask-[linear-gradient(180deg,transparent_0%,black_25%,black_72%,transparent_100%)] bg-cover bg-center"
			style="background-image: url('/elon-musk-migren.webp')"
		></div>
	</section>

	<Navbar />

	<section
		aria-labelledby="hero-heading"
		class="relative flex w-full flex-[0_0_auto] flex-col items-center self-stretch px-0 pt-40"
	>
		<h1
			id="hero-heading"
			class="relative w-fit text-center font-sans text-[59px] leading-15.5 tracking-normal text-neutral-900"
		>
			Cari Component?<br />
			Hust...Tinggal Pilih
		</h1>
	</section>

	<section class="relative flex w-full flex-[0_0_auto] flex-col items-center self-stretch px-0 pt-[7.28px]">
		<p class="relative w-fit text-center font-sans text-lg leading-[19.6px] font-light tracking-normal text-black/60">
			Nggak perlu bikin semuanya dari nol. Cari component yang kamu <br />
			butuhin, lihat contohnya, terus tinggal pakai sesuai kebutuhan 😉.
		</p>
	</section>

	<Button
		class="group relative flex h-auto flex-[0_0_auto] cursor-pointer items-center gap-2.5 rounded-2xl
			bg-blue-700 px-7 py-3.5 text-[15px] leading-normal font-medium tracking-normal
			text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_-2px_0_rgba(0,0,0,0.2)_inset,0_6px_20px_rgba(29,78,216,0.4)] transition-all
			duration-200
			hover:bg-blue-600 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_-2px_0_rgba(0,0,0,0.15)_inset,0_8px_24px_rgba(29,78,216,0.45)]
			focus-visible:outline-2 focus-visible:outline-offset-4
			focus-visible:outline-blue-500 active:scale-[0.97] active:shadow-[0_3px_0_rgba(255,255,255,0.1)_inset,0_-1px_0_rgba(0,0,0,0.2)_inset]"
	>
		<span>Coming Soon!</span>
		<span class="transition-transform duration-200">
			<HugeiconsIcon icon={ArrowRight01Icon} size={16} color="currentColor" />
		</span>
	</Button>

	<Tabs.Root
		bind:value={activeTab}
		class="absolute bottom-8 left-1/2 w-130 -translate-x-1/2 overflow-hidden rounded-xl border border-[#e6e6e2] bg-[#ffffffe6] backdrop-blur-sm"
	>
		<div class="flex items-center justify-between border-b border-[#e6e6e2] px-4">
			<Tabs.List class="flex gap-1 py-2">
				{#each PKG_MANAGERS as pm (pm.id)}
					<Tabs.Trigger
						value={pm.id}
						class="rounded-md px-3 py-1 text-[13px] font-medium tracking-normal transition-all
							data-[state=active]:bg-[#1c1c1c] data-[state=active]:text-white
							data-[state=inactive]:text-[#7c8079] data-[state=inactive]:hover:text-[#1a1a1a]"
					>
						{pm.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>

			<CopyButton content={activeCmd} />
		</div>

		{#each PKG_MANAGERS as pm (pm.id)}
			<Tabs.Content value={pm.id} class="px-4 py-3">
				<code class="text-[13px] font-medium tracking-normal text-[#1a1a1a]">
					<span class="mr-1 text-[#7c8079] select-none">$</span>{pm.cmd}
				</code>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</main>

<About />
