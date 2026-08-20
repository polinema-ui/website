<script lang="ts">
	import { Card } from "$lib/components/card";
	import { InteractiveGrid, MetricCard } from "$routes/(app)/(home)/atoms";
	import { METRICS } from "$routes/(app)/(home)/constants/metrics";
	import type { Metrics } from "$routes/(app)/(home)/types/metrics";

	const POSITION_MAP: Record<Exclude<Metrics["position"], "featured">, string> = {
		"bottom-left": "left-[155px] top-[352px]",
		"bottom-right": "right-[155px] top-[352px]",
		left: "left-0 top-[121px]",
		right: "right-0 top-[121px]",
	};

	let { metrics = METRICS }: { metrics?: readonly Metrics[] } = $props();
	let featured = $derived(metrics.find((m) => m.position === "featured") ?? metrics[0]);
	let subMetrics = $derived(metrics.filter((m) => m.position !== "featured"));
</script>

<section class="relative w-full scroll-mt-28 bg-[#fbfbfb] px-6 py-16">
	<InteractiveGrid />
	<div class="relative z-10 mx-auto flex max-w-7xl flex-col gap-16">
		<header class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
			<h2
				class="font-sans text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-[44px] md:leading-tight lg:col-span-5"
			>
				Nggak fancy, <br /> tapi kepake
			</h2>
			<div class="lg:col-span-7">
				<p class="font-sans text-base leading-relaxed font-normal text-neutral-600 md:text-[17px]">
					Kita nggak ngejar jadi library paling viral atau paling banyak dipuji minggu ini. Yang kita pentingin,
					komponen ini masih bisa lo pakai tanpa masalah setahun dari sekarang. Nggak ada dependency yang gampang
					di-deprecate, nggak ada pendekatan yang bakal ketinggalan zaman dalam waktu dekat.
				</p>
			</div>
		</header>
		<figure class="relative mt-10 hidden h-118.25 w-275 self-center md:block">
			<svg class="absolute inset-0 h-full w-full" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
				<defs>
					<linearGradient id="cableGradient" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0" stop-color="#bfdbfe" />
						<stop offset="0.42" stop-color="#2563eb" />
						<stop offset="0.58" stop-color="#60a5fa" />
						<stop offset="1" stop-color="#bfdbfe" />
					</linearGradient>
					<marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
						<path d="M0 0 L8 4 L0 8 Z" fill="#2563eb" />
					</marker>
				</defs>
				<path
					class="stroke-slate-200"
					stroke-width="1.5"
					fill="none"
					d="M500 0V110M500 86H250V155H100M500 86H750V155H900M250 155H240V365M750 155H760V365"
				/>
				{#each ["M500 0V110", "M500 0V86H250V155H100", "M500 0V86H750V155H900", "M500 0V86H250V155H240V365", "M500 0V86H750V155H760V365"] as d (d)}
					<path
						{d}
						fill="none"
						stroke="url(#cableGradient)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-dasharray="1"
						pathLength="1"
					>
						<animate attributeName="stroke-dashoffset" from="1" to="-1" dur="4s" repeatCount="indefinite" />
					</path>
				{/each}
				<path stroke="#2563eb" stroke-width="1.5" fill="none" d="M240 326V362M760 326V362" marker-end="url(#arrow)" />
			</svg>
			<div
				class="absolute top-0 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)]"
			>
				<img src="/icon.png" alt="Polinema UI Mark" class="h-6 w-6 object-contain" />
			</div>
			<div class="absolute top-30.25 left-1/2 z-10 w-60 -translate-x-1/2">
				<MetricCard metric={featured} />
			</div>
			{#each subMetrics as item (item.position)}
				{@const posClass = POSITION_MAP[item.position as keyof typeof POSITION_MAP]}
				{#if posClass}
					<div class="absolute z-10 w-60 {posClass}">
						<MetricCard metric={item} />
					</div>
				{/if}
			{/each}
		</figure>
		<section class="flex w-full max-w-sm flex-col items-center gap-6 self-center md:hidden">
			<div
				class="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-b from-blue-400 to-blue-600 shadow-lg shadow-blue-500/10"
			>
				<img src="/icon.png" alt="Polinema UI Mark" class="h-7 w-7 object-contain" />
			</div>
			<Card
				class="w-full overflow-hidden rounded-xl border border-blue-100/60 bg-linear-to-b from-white to-[#e0f2fe]/40 px-6 py-5 text-center shadow-[0_12px_40px_rgba(59,130,246,0.08)]"
			>
				<p class="font-sans text-2xl font-bold tracking-tight text-neutral-900">{featured.value}</p>
				<p class="mt-1 font-sans text-xs text-neutral-500">{featured.mobileLabel}</p>
			</Card>
			<ul class="grid w-full grid-cols-2 gap-3.5">
				{#each subMetrics as item (item.position)}
					<li>
						<Card
							class="flex h-full flex-col items-center justify-center rounded-xl border border-neutral-100/90 bg-white p-4 text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
						>
							<p class="font-sans text-xl font-bold tracking-tight text-neutral-900">{item.value}</p>
							<p class="mt-1 font-sans text-[11px] leading-tight text-neutral-500">{item.mobileLabel}</p>
						</Card>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</section>
