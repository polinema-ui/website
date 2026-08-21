<script lang="ts">
	import { NewTwitterIcon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import type { EmblaOptionsType } from "embla-carousel";
	import { Card } from "$lib/components/card";
	import { TESTIMONIALS } from "$routes/(app)/(home)/constants/testimonials";
	import type { Testimonial } from "$routes/(app)/(home)/types/testimonials";
	import Autoplay from "embla-carousel-autoplay";
	import emblaCarouselSvelte from "embla-carousel-svelte";

	let { testimonials = TESTIMONIALS }: { testimonials?: readonly Testimonial[] } = $props();

	let rows = $derived([testimonials.slice(0, 5), testimonials.slice(5, 10), testimonials.slice(10, 15)]);

	function getCarouselOptions(rowIndex: number): EmblaOptionsType {
		return {
			align: "start",
			loop: true,
			direction: rowIndex === 1 ? "rtl" : "ltr",
		};
	}
</script>

<section class="relative flex w-full flex-col items-center gap-12 overflow-hidden bg-white py-20">
	<header class="flex flex-col items-center gap-3 px-6 text-center">
		<h2 class="font-sans text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-[44px]">
			Kata Mereka Tentang Polinema UI
		</h2>
		<p class="max-w-xl font-sans text-base text-neutral-600 sm:text-[17px]">
			Lihat apa kata para pengembang dan mahasiswa yang sudah menggunakan Polinema UI untuk proyek mereka.
		</p>
	</header>
	<div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6">
		{#each rows as row, rowIndex (rowIndex)}
			<figure
				dir={rowIndex === 1 ? "rtl" : "ltr"}
				class="w-full overflow-hidden py-1"
				use:emblaCarouselSvelte={{
					options: getCarouselOptions(rowIndex),
					plugins: [Autoplay({ delay: 3500 + rowIndex * 300, stopOnInteraction: false })],
				}}
			>
				<ul class="flex gap-6">
					{#each [...row, ...row, ...row] as item, itemIndex (`${item.handle}-${rowIndex}-${itemIndex}`)}
						<li class="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_31%]">
							<Card
								class="h-full rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:border-blue-300 hover:shadow-md"
							>
								<article dir="ltr" class="flex h-full flex-col justify-between text-left">
									<header class="flex items-center justify-between">
										<figure class="flex items-center gap-3">
											<img
												src={item.avatar}
												alt={item.name}
												class="h-10 w-10 rounded-full bg-neutral-100 object-cover"
											/>
											<figcaption class="flex flex-col text-left">
												<span class="font-sans text-sm font-semibold text-neutral-900">{item.name}</span>
												<span class="font-sans text-xs text-neutral-500">{item.handle}</span>
											</figcaption>
										</figure>
										<HugeiconsIcon icon={NewTwitterIcon} size={16} class="text-neutral-400" />
									</header>
									<blockquote class="mt-4 text-left font-sans text-sm leading-relaxed text-neutral-700">
										"{item.content}"
									</blockquote>
								</article>
							</Card>
						</li>
					{/each}
				</ul>
			</figure>
		{/each}
	</div>
</section>
