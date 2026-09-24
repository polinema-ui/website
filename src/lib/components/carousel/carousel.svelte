<script lang="ts" module>
	import { getContext, setContext } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel";

	export type CarouselOrientation = "horizontal" | "vertical";

	export class CarouselState {
		#opts: () => EmblaOptionsType;
		#plugins: () => EmblaPluginType[];
		#orientation: () => CarouselOrientation;
		#setApi: () => ((api: EmblaCarouselType | undefined) => void) | undefined;

		api = $state<EmblaCarouselType | undefined>(undefined);
		canScrollPrev = $state(false);
		canScrollNext = $state(false);
		selectedIndex = $state(0);
		scrollSnaps = $state<number[]>([]);

		constructor(props: {
			opts?: () => EmblaOptionsType;
			plugins?: () => EmblaPluginType[];
			orientation?: () => CarouselOrientation;
			setApi?: () => ((api: EmblaCarouselType | undefined) => void) | undefined;
		}) {
			this.#opts = props.opts ?? (() => ({}));
			this.#plugins = props.plugins ?? (() => []);
			this.#orientation = props.orientation ?? (() => "horizontal");
			this.#setApi = props.setApi ?? (() => undefined);
		}

		get opts() {
			return this.#opts();
		}

		get plugins() {
			return this.#plugins();
		}

		get orientation() {
			return this.#orientation();
		}

		initApi(emblaApi: EmblaCarouselType) {
			this.api = emblaApi;
			this.#setApi()?.(emblaApi);
			this.updateState();
			emblaApi.on("select", () => this.updateState());
			emblaApi.on("reInit", () => this.updateState());
		}

		updateState = () => {
			if (!this.api) return;
			this.canScrollPrev = this.api.canScrollPrev();
			this.canScrollNext = this.api.canScrollNext();
			this.selectedIndex = this.api.selectedScrollSnap();
			this.scrollSnaps = this.api.scrollSnapList();
		};

		scrollPrev = () => {
			this.api?.scrollPrev();
		};

		scrollNext = () => {
			this.api?.scrollNext();
		};

		scrollTo = (index: number) => {
			this.api?.scrollTo(index);
		};
	}

	const CAROUSEL_CONTEXT_KEY = Symbol("CAROUSEL_CONTEXT");

	export function useCarousel(): CarouselState {
		const context = getContext<CarouselState>(CAROUSEL_CONTEXT_KEY);
		if (!context) {
			throw new Error("useCarousel must be used within a Carousel component");
		}
		return context;
	}
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils/shadcn";

	let {
		ref = $bindable(null),
		class: className,
		opts = {},
		plugins = [],
		orientation = "horizontal",
		setApi,
		children,
		onkeydown,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		opts?: EmblaOptionsType;
		plugins?: EmblaPluginType[];
		orientation?: CarouselOrientation;
		setApi?: (api: EmblaCarouselType | undefined) => void;
	} = $props();

	const carouselState = new CarouselState({
		opts: () => opts,
		plugins: () => plugins,
		orientation: () => orientation,
		setApi: () => setApi,
	});

	setContext(CAROUSEL_CONTEXT_KEY, carouselState);

	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			carouselState.scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			carouselState.scrollNext();
		}
		if (typeof onkeydown === "function") {
			onkeydown(event);
		}
	}
</script>

<div
	bind:this={ref}
	onkeydown={handleKeyDown}
	class={cn("relative", className)}
	role="region"
	aria-roledescription="carousel"
	{...restProps}
>
	{@render children?.()}
</div>
