<script lang="ts">
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import type { EmblaCarouselType } from "embla-carousel";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/shadcn";
	import { useCarousel } from "./carousel.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const carousel = useCarousel();

	function handleEmblaInit(event: CustomEvent<EmblaCarouselType>) {
		const emblaApi = event.detail;
		if (emblaApi) {
			carousel.initApi(emblaApi);
		}
	}
</script>

<div
	bind:this={ref}
	use:emblaCarouselSvelte={{
		options: {
			axis: carousel.orientation === "horizontal" ? "x" : "y",
			...carousel.opts,
		},
		plugins: carousel.plugins,
	}}
	onemblaInit={handleEmblaInit}
	class="overflow-hidden"
>
	<div class={cn("flex", carousel.orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...restProps}>
		{@render children?.()}
	</div>
</div>
