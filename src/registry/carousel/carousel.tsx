import { ArrowDown01Icon, ArrowLeft01Icon, ArrowRight01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import * as React from "react";

const CAROUSEL_BASE = "relative";

const CAROUSEL_CONTENT_BASE = "flex";

const CAROUSEL_ITEM_BASE = "min-w-0 shrink-0 grow-0 basis-full";

const CAROUSEL_PREVIOUS_BASE =
	"absolute flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800";

const CAROUSEL_NEXT_BASE =
	"absolute flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
	carouselRef: UseEmblaCarouselType[0];
	api: CarouselApi;
	opts?: CarouselOptions;
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	orientation: "horizontal" | "vertical";
	selectedIndex: number;
	scrollSnaps: number[];
	scrollTo: (index: number) => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarousel() {
	const context = React.useContext(CarouselContext);
	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}
	return context;
}

export function Carousel({
	orientation = "horizontal",
	opts,
	setApi,
	plugins,
	className = "",
	children,
	...props
}: CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			axis: orientation === "horizontal" ? "x" : "y",
			...opts,
		},
		plugins,
	);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

	const onSelect = React.useCallback((emblaApi: CarouselApi) => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const scrollTo = React.useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext],
	);

	React.useEffect(() => {
		if (!api) return;
		setApi?.(api);
		onSelect(api);
		api.on("select", onSelect);
		api.on("reInit", onSelect);
		return () => {
			api.off("select", onSelect);
			api.off("reInit", onSelect);
		};
	}, [api, setApi, onSelect]);

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api,
				opts,
				orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
				selectedIndex,
				scrollSnaps,
				scrollTo,
			}}
		>
			<div
				onKeyDownCapture={handleKeyDown}
				className={[CAROUSEL_BASE, className].filter(Boolean).join(" ")}
				role="region"
				aria-roledescription="carousel"
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	);
}

export function CarouselContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div
				className={[CAROUSEL_CONTENT_BASE, orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className]
					.filter(Boolean)
					.join(" ")}
				{...props}
			/>
		</div>
	);
}

export function CarouselItem({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	const { orientation } = useCarousel();

	return (
		<div
			role="group"
			aria-roledescription="slide"
			data-slot="carousel-item"
			className={[CAROUSEL_ITEM_BASE, orientation === "horizontal" ? "pl-4" : "pt-4", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}

export function CarouselPrevious({
	className = "",
	children,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<button
			type="button"
			data-slot="carousel-previous"
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			className={[
				CAROUSEL_PREVIOUS_BASE,
				orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{children ??
				(orientation === "horizontal" ? (
					<HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
				) : (
					<HugeiconsIcon icon={ArrowUp01Icon} size={16} />
				))}
			<span className="sr-only">Previous slide</span>
		</button>
	);
}

export function CarouselNext({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<button
			type="button"
			data-slot="carousel-next"
			disabled={!canScrollNext}
			onClick={scrollNext}
			className={[
				CAROUSEL_NEXT_BASE,
				orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		>
			{children ??
				(orientation === "horizontal" ? (
					<HugeiconsIcon icon={ArrowRight01Icon} size={16} />
				) : (
					<HugeiconsIcon icon={ArrowDown01Icon} size={16} />
				))}
			<span className="sr-only">Next slide</span>
		</button>
	);
}
