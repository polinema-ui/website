export const CAROUSEL_BASE = "relative";

export const CAROUSEL_CONTENT_BASE = "flex";

export const CAROUSEL_ITEM_BASE = "min-w-0 shrink-0 grow-0 basis-full";

export const CAROUSEL_PREVIOUS_BASE =
	"absolute flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800";

export const CAROUSEL_NEXT_BASE =
	"absolute flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800";

export type CarouselPreviewVariant =
	"default" | "multiple" | "vertical" | "autoplay" | "dots" | "fraction" | "thumbnail" | "testimonial" | "product";

export const CAROUSEL_PROPS = [
	{
		name: "opts",
		type: "EmblaOptionsType",
		default: "{}",
		description: "Konfigurasi opsi Embla Carousel (loop, align, axis, containScroll, dll).",
	},
	{
		name: "plugins",
		type: "EmblaPluginType[]",
		default: "[]",
		description: "Plugin Embla tambahan seperti Autoplay atau Fade.",
	},
	{
		name: "orientation",
		type: '"horizontal" | "vertical"',
		default: '"horizontal"',
		description: "Arah orientasi pergeseran slide carousel.",
	},
	{
		name: "setApi",
		type: "(api: EmblaCarouselType) => void",
		default: "-",
		description: "Callback function untuk mendapatkan rujukan Embla API instance.",
	},
] as const;
