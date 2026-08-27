<script lang="ts">
	import { CheckmarkCircle02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Kbd } from "$lib/components/kbd";
	import { FRAMEWORKS } from "../constants/showcase";
	import type { Framework } from "../types/showcase";

	let activeFramework = $state<Framework>("html");
	let copied = $state(false);

	let currentData = $derived(FRAMEWORKS.find((f) => f.id === activeFramework) ?? FRAMEWORKS[0]);

	function handleCopyCode(): void {
		navigator.clipboard.writeText(currentData.code);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<section aria-label="Framework Showcase" class="relative w-full overflow-hidden bg-neutral-50 px-6 py-24 sm:py-32">
	<div
		class="absolute top-0 left-1/2 -z-10 h-[800px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/30 via-neutral-50/10 to-transparent"
		aria-hidden="true"
	></div>
	<main class="mx-auto flex max-w-6xl flex-col items-center gap-14">
		<header class="flex max-w-3xl flex-col gap-5 text-center">
			<h2 class="font-sans text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-[44px]">
				Satu Desain, <span class="text-blue-600">Multi Ekosistem</span>
			</h2>
			<p class="font-sans text-lg leading-relaxed text-neutral-600 sm:text-[19px]">
				Didesain dari awal buat Project Based Learning (PBL). Mau bikin web dinamis pake HTML, PHP, Laravel, atau React?
				Tinggal copy paste source code komponennya, beres urusan.
			</p>
		</header>
		<article class="w-full overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-2xl shadow-blue-900/5">
			<nav aria-label="Framework Tabs" class="flex items-center justify-between border-b border-neutral-100 bg-white/60 px-4 sm:px-8">
				<ul class="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{#each FRAMEWORKS as framework (framework.id)}
						<li>
							<button
								type="button"
								onclick={() => (activeFramework = framework.id)}
								class="relative px-5 py-6 text-sm font-semibold transition-all duration-300 {activeFramework === framework.id ? 'text-blue-600' : 'text-neutral-500 hover:text-neutral-900'}"
								aria-current={activeFramework === framework.id ? "page" : undefined}
							>
								{framework.label}
								{#if activeFramework === framework.id}
									<span class="absolute bottom-0 left-0 h-0.5 w-full rounded-t-full bg-blue-600" aria-hidden="true"></span>
								{/if}
							</button>
						</li>
					{/each}
				</ul>
			</nav>
			<section class="grid grid-cols-1 lg:grid-cols-12">
				<aside class="flex flex-col justify-center border-b border-neutral-100 bg-neutral-50/50 p-8 sm:p-12 lg:col-span-5 lg:border-r lg:border-b-0">
					<figure class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-blue-100 text-blue-600 shadow-inner">
						<span class="font-sans text-sm font-black tracking-widest uppercase">
							{currentData.id.substring(0, 2)}
						</span>
					</figure>
					<h3 class="font-sans text-2xl font-bold tracking-tight text-neutral-900">
						{currentData.label}
					</h3>
					<p class="mt-4 font-sans text-base leading-relaxed text-neutral-600">
						{currentData.description}
					</p>
				</aside>
				<figure class="relative bg-[#0d1117] p-5 sm:p-8 lg:col-span-7">
					<figcaption class="sr-only">Code snippet for {currentData.label}</figcaption>
					<header class="mb-5 flex items-center justify-between px-2">
						<div class="flex items-center gap-2" aria-hidden="true">
							<span class="h-3 w-3 rounded-full border border-[#e0443e] bg-[#ff5f56]"></span>
							<span class="h-3 w-3 rounded-full border border-[#dea123] bg-[#ffbd2e]"></span>
							<span class="h-3 w-3 rounded-full border border-[#1aab29] bg-[#27c93f]"></span>
						</div>
						<div class="hidden items-center gap-2 sm:flex">
							<span class="text-xs font-medium text-neutral-500">Copy code</span>
							<div class="flex items-center gap-1">
								<Kbd class="border-white/10 bg-white/5 text-neutral-400">⌘</Kbd>
								<Kbd class="border-white/10 bg-white/5 text-neutral-400">C</Kbd>
							</div>
						</div>
					</header>
					<button
						type="button"
						onclick={handleCopyCode}
						title="Copy source code"
						class="absolute top-16 right-8 flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-400 transition-all hover:bg-white/10 hover:text-white sm:top-20"
					>
						{#if copied}
							<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} class="text-green-400" />
							<span class="text-green-400">Copied</span>
						{:else}
							<HugeiconsIcon icon={Copy01Icon} size={16} />
							<span>Copy</span>
						{/if}
					</button>
					<article class="overflow-x-auto rounded-xl border border-white/5 bg-black/30 p-5">
						<pre class="font-mono text-sm leading-loose text-neutral-300"><code>{currentData.code}</code></pre>
					</article>
				</figure>
			</section>
		</article>
	</main>
</section>