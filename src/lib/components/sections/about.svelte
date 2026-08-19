<script lang="ts">
	import { Card } from "$lib/components/card";
	import "./diagram.css";
	import type { Metric } from "$lib/types/about";
	import {
		FEATURED_METRIC as featured,
		METRICS as metrics,
		POSITION_CLASSES as positionClasses,
	} from "$lib/constants/about";
</script>

{#snippet metricCard(metric: Metric)}
	<Card
		class="flex h-[96px] flex-col justify-center rounded-lg border px-6 py-4.5 transition-all duration-300 hover:scale-[1.02] {metric.variant ===
		'featured'
			? 'border-blue-100/50 bg-gradient-to-b from-white to-[#e0f2fe]/40 shadow-[0_12px_40px_rgba(59,130,246,0.06)]'
			: 'border-neutral-100/80 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.015)]'}"
	>
		<p class="font-sans text-[30px] leading-none font-bold tracking-tight text-neutral-900">{metric.value}</p>
		<p class="mt-2 font-sans text-[13px] leading-none font-normal whitespace-nowrap text-neutral-500 md:text-[14px]">
			{metric.label}
		</p>
	</Card>
{/snippet}

<section id="about" aria-labelledby="about-heading" class="relative w-full scroll-mt-28 bg-[#fbfbfb] px-6 py-24">
	<div class="mx-auto flex max-w-7xl flex-col gap-16">
		<div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
			<div class="lg:col-span-5">
				<h2
					id="about-heading"
					class="font-sans text-[36px] leading-tight tracking-tight text-neutral-900 md:text-[44px]"
				>
					Nggak fancy, <br /> tapi kepake
				</h2>
			</div>
			<div class="lg:col-span-7">
				<p class="font-sans text-[16px] leading-relaxed font-light text-neutral-500 md:text-[17px]">
					Kita nggak ngejar jadi library paling viral atau paling banyak dipuji minggu ini. Yang kita pentingin,
					komponen ini masih bisa lo pakai tanpa masalah setahun dari sekarang. Nggak ada dependency yang gampang
					di-deprecate, nggak ada pendekatan yang bakal ketinggalan zaman dalam waktu dekat.
				</p>
			</div>
		</div>

		<div class="flex w-full justify-center py-8">
			<div class="relative hidden h-118.25 w-275 md:block">
				<svg class="about-cable" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
					<defs>
						<linearGradient id="cableGradient" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0" stop-color="#bfdbfe" />
							<stop offset="0.42" stop-color="#2563eb" />
							<stop offset="0.58" stop-color="#60a5fa" />
							<stop offset="1" stop-color="#bfdbfe" />
						</linearGradient>

						<linearGradient id="cableGlow" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0" stop-color="#dbeafe" stop-opacity="0" />
							<stop offset="0.5" stop-color="#2563eb" stop-opacity="0.95" />
							<stop offset="1" stop-color="#dbeafe" stop-opacity="0" />
						</linearGradient>

						<marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
							<path d="M0 0 L8 4 L0 8 Z" fill="#2563eb" />
						</marker>
					</defs>

					<path
						class="about-cable-base"
						d="M500 0V110M500 86H250V155H100M500 86H750V155H900M250 155H240V365M750 155H760V365"
					/>

					<path class="about-cable-line" pathLength="1" d="M500 0V110" />
					<path class="about-cable-line" pathLength="1" d="M500 0V86H250V155H100" />
					<path class="about-cable-line" pathLength="1" d="M500 0V86H750V155H900" />
					<path class="about-cable-line" pathLength="1" d="M500 0V86H250V155H240V365" />
					<path class="about-cable-line" pathLength="1" d="M500 0V86H750V155H760V365" />

					<path class="about-arrow-line" d="M240 326V362M760 326V362" marker-end="url(#arrow)" />
				</svg>

				<div class="about-hub">
					<img src="/logo-white.png" alt="Logo" class="about-hub-mark h-8 w-8 object-contain" />
				</div>

				<div class="about-featured">
					{@render metricCard(featured)}
				</div>

				{#each metrics as metric (metric.variant)}
					<div class="about-metric {positionClasses[metric.variant]}">
						{@render metricCard(metric)}
					</div>
				{/each}
			</div>

			<div class="flex w-full max-w-sm flex-col items-center gap-6 md:hidden">
				<div
					class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#60a5fa] to-[#3b82f6] shadow-lg shadow-blue-500/10"
				>
					<img src="/logo-white.png" alt="Logo" class="h-8 w-8 object-contain" />
				</div>

				<Card
					class="w-full overflow-hidden rounded-lg border border-blue-100/50 bg-gradient-to-b from-white to-[#e0f2fe]/40 px-6 py-5 text-center shadow-[0_12px_40px_rgba(59,130,246,0.06)]"
				>
					<p class="font-sans text-[28px] font-bold tracking-tight text-neutral-900">{featured.value}</p>
					<p class="mt-1 font-sans text-[13px] text-neutral-500">{featured.mobileLabel}</p>
				</Card>

				<div class="grid w-full grid-cols-2 gap-4">
					{#each metrics as metric (metric.variant)}
						<Card
							class="flex flex-col items-center justify-center rounded-lg border border-neutral-100/80 bg-white p-4 text-center shadow-[0_8px_30px_rgb(0,0,0,0.015)]"
						>
							<p class="font-sans text-[22px] font-bold tracking-tight text-neutral-900">{metric.value}</p>
							<p class="mt-1 font-sans text-[11px] leading-tight text-neutral-500">{metric.mobileLabel}</p>
						</Card>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
