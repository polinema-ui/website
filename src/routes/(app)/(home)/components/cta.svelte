<script lang="ts">
	import { Github01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Button } from "$lib/components/button";
	import { InteractiveGrid } from "$routes/(app)/(home)/atoms";
	import { ROUTES } from "$lib/constants/routes";
</script>

<section class="relative w-full scroll-mt-28 overflow-hidden bg-white px-6 py-20 sm:py-24">
	<InteractiveGrid />
	<div class="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-5 text-center">
		<h2
			class="text-black-950 max-w-2xl font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[44px] md:leading-tight"
		>
			Zaman sekarang masih nulis component dari nol?
		</h2>
		<p class="text-black-600 max-w-xl font-sans text-base leading-relaxed font-normal md:text-[17px]">
			Copy perintahnya, paste di terminal, langsung pakai. Nggak ada setup ribet, nggak ada konfigurasi panjang.
		</p>
		<div class="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
			<Button
				href={ROUTES.DOCS}
				class="flex cursor-pointer items-center gap-2 rounded-lg border-none bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_24px_rgba(37,99,235,0.4)] active:scale-95 sm:px-7 sm:py-3.5 sm:text-[15px]"
			>
				<span>Star on GitHub</span>
				<HugeiconsIcon icon={Github01Icon} size={16} color="currentColor" />
			</Button>
		</div>
	</div>
</section>
