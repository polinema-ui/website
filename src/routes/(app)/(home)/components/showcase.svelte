<script lang="ts">
	import { CheckmarkCircle02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { createHighlighterCore } from "shiki/core";
	import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
	import DOMPurify from "dompurify";
	import { FRAMEWORKS } from "../constants/showcase";
	import type { Framework } from "../types/showcase";

	let activeFramework = $state<Framework>("html");
	let copied = $state(false);

	let currentData = $derived(FRAMEWORKS.find((f) => f.id === activeFramework) ?? FRAMEWORKS[0]);

	const langMap: Record<Framework, string> = {
		html: "html",
		php: "php",
		blade: "html",
		react: "tsx",
	};

	const highlighterPromise = createHighlighterCore({
		engine: createJavaScriptRegexEngine({ forgiving: true }),
		langs: [
			import("@shikijs/langs/html"),
			import("@shikijs/langs/php"),
			import("@shikijs/langs/typescript"),
			import("@shikijs/langs/tsx"),
		],
		themes: [import("@shikijs/themes/vitesse-dark")],
	});

	function handleCopyCode(): void {
		navigator.clipboard.writeText(currentData.code);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<section
	aria-label="Framework Showcase"
	class="relative w-full overflow-hidden bg-white px-6 py-24 sm:py-32 dark:bg-black"
>
	<div
		class="absolute top-0 left-1/2 -z-10 h-200 w-300 -translate-x-1/2 bg-[linear-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-500/20"
		aria-hidden="true"
	></div>
	<main class="mx-auto flex max-w-6xl flex-col items-center gap-14">
		<header class="flex max-w-3xl flex-col gap-5 text-center">
			<h2 class="font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-[44px] dark:text-white">
				Satu Desain, <span class="text-blue-600 dark:text-blue-400">Multi Ekosistem</span>
			</h2>
			<p class="font-sans text-lg leading-relaxed text-neutral-600 sm:text-[19px] dark:text-neutral-300">
				Didesain dari awal buat Project Based Learning (PBL). Mau bikin web dinamis pake HTML, PHP, Laravel, atau React?
				Tinggal copy paste source code komponennya, beres urusan.
			</p>
		</header>

		<article
			class="grid w-full grid-cols-1 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40 lg:grid-cols-12 dark:border-white/10 dark:bg-black dark:shadow-black/40"
		>
			<nav
				aria-label="Framework list"
				class="flex flex-col gap-1 border-b border-dashed border-neutral-200 p-4 sm:p-6 lg:col-span-4 lg:border-r lg:border-b-0 xl:col-span-3 dark:border-white/10"
			>
				<p class="mb-3 px-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase">Pilih Ekosistem</p>
				{#each FRAMEWORKS as framework (framework.id)}
					{@const active = activeFramework === framework.id}
					<button
						type="button"
						onclick={() => (activeFramework = framework.id)}
						aria-current={active ? "true" : undefined}
						class="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-medium transition-all {active
							? 'bg-blue-600 text-white'
							: 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white'}"
					>
						<span class="flex flex-col">
							<span class="leading-none">{framework.label}</span>
						</span>
					</button>
				{/each}
				<p
					class="mt-4 rounded-lg bg-blue-50 px-3 py-3 text-xs leading-relaxed text-neutral-600 dark:bg-blue-500/10 dark:text-neutral-300"
				>
					Semua komponen pakai Tailwind yang sama jadi tinggal copas aja.
				</p>
			</nav>

			<section class="flex flex-col gap-6 p-6 sm:p-8 lg:col-span-8 xl:col-span-9">
				<div>
					<div class="flex items-center gap-3">
						<span class="flex size-9 items-center justify-center rounded-md border border-gray-100 bg-white shadow-sm">
							<img src={currentData.logo} alt="" width="22" height="22" class="size-5.5 object-contain" />
						</span>
						<h3 class="font-sans text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
							{currentData.label}
						</h3>
					</div>
					<p class="mt-3 font-sans text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
						{currentData.description}
					</p>
				</div>

				<figure
					class="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 dark:border-white/10 dark:bg-black"
				>
					<figcaption class="sr-only">Code snippet for {currentData.label}</figcaption>
					<header class="flex items-center justify-between bg-white/5 px-4 py-1 dark:bg-white/5">
						<div class="flex items-center gap-2 text-sm font-medium text-neutral-300">
							<img src={currentData.logo} alt="" width="18" height="18" class="size-4.5 object-contain" />
							<span>{currentData.label}</span>
						</div>
						<button
							type="button"
							onclick={handleCopyCode}
							aria-label="Copy code"
							class="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-neutral-300 transition hover:bg-white/20 hover:text-white active:scale-[0.97]"
						>
							{#if copied}
								<HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} class="text-emerald-500" />
								Copied
							{:else}
								<HugeiconsIcon icon={Copy01Icon} size={14} />
								Copy
							{/if}
						</button>
					</header>

					<div class="bg-neutral-950 pb-2 pl-2 dark:bg-black">
						<div class="overflow-x-auto rounded-lg bg-neutral-950 p-4 dark:bg-black">
							{#await highlighterPromise}
								<pre class="font-mono text-sm leading-6 text-neutral-300"><code>{currentData.code.trim()}</code></pre>
							{:then highlighter}
								<div class="[&_pre]:!bg-transparent! [&_pre]:!p-0! text-[13px] leading-6">
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html DOMPurify.sanitize(
										highlighter.codeToHtml(currentData.code.trim(), {
											lang: langMap[currentData.id],
											theme: "vitesse-dark",
										}),
									)}
								</div>
							{/await}
						</div>
					</div>
				</figure>
			</section>
		</article>
	</main>
</section>
