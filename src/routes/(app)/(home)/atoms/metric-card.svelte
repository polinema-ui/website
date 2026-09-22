<script lang="ts">
	import { Card } from "$lib/components/card";
	import type { Metrics } from "$routes/(app)/(home)/types/metrics";

	let { metric }: { metric: Metrics } = $props();
</script>

<Card
	class="flex w-60 flex-col justify-center gap-1.5! rounded-xl border px-6 py-4.5 transition-all duration-300 hover:scale-[1.02] {metric.position ===
	'featured'
		? 'border-blue-500/20 bg-linear-to-b from-neutral-900 to-blue-950/40 shadow-[0_12px_40px_rgba(59,130,246,0.08)]'
		: 'border-white/10 bg-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.02)]'}"
>
	<p class="font-sans text-[28px] leading-tight font-bold tracking-tight text-white md:text-[30px]">
		{metric.value}
	</p>
	<p class="font-sans text-xs font-normal whitespace-nowrap text-neutral-400 md:text-[13.5px]">
		{metric.label}
	</p>
</Card>
