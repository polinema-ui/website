export const BREADCRUMB_BASE = "cn-breadcrumb";

export const BREADCRUMB_LIST_BASE =
	"flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-neutral-500 sm:gap-2.5 dark:text-neutral-400";

export const BREADCRUMB_ITEM_BASE = "inline-flex items-center gap-1.5";

export const BREADCRUMB_LINK_BASE = "transition-colors hover:text-neutral-900 dark:hover:text-white";

export const BREADCRUMB_PAGE_BASE = "font-normal text-neutral-900 dark:text-white";

export const BREADCRUMB_SEPARATOR_BASE = "[&>svg]:size-3.5";

export const BREADCRUMB_ELLIPSIS_BASE = "flex size-5 items-center justify-center [&>svg]:size-4";

export type BreadcrumbPreviewVariant =
	"default" | "chevron" | "dropdown" | "icons" | "pills" | "badge" | "segmented" | "truncated" | "wizard";

export const BREADCRUMB_PROPS = [
	{
		name: "children",
		type: "React.ReactNode",
		default: "-",
		description: "Elemen child di dalam komponen Breadcrumb / BreadcrumbList.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class Tailwind Tambahan untuk custom styling elemen.",
	},
	{
		name: "asChild",
		type: "boolean",
		default: "false",
		description: "Merender elemen child kustom menggunakan snippet / Slot API.",
	},
] as const;
