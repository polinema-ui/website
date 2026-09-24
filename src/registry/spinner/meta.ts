export const SPINNER_BASE =
	"inline-block shrink-0 animate-spin rounded-full border-solid [--spinner-track:var(--color-neutral-200)] [border-color:var(--spinner-head)_var(--spinner-track)_var(--spinner-track)_var(--spinner-track)] dark:[--spinner-track:var(--color-neutral-800)]";

export const SPINNER_SIZES = {
	xs: "size-3.5 border-2",
	sm: "size-4 border-2",
	md: "size-6 border-2",
	lg: "size-8 border-[3px]",
	xl: "size-10 border-4",
} as const;

export const SPINNER_VARIANTS = {
	default: "[--spinner-head:var(--color-blue-600)] dark:[--spinner-head:var(--color-blue-500)]",
	secondary: "[--spinner-head:var(--color-neutral-400)] dark:[--spinner-head:var(--color-neutral-300)]",
	success: "[--spinner-head:var(--color-emerald-600)] dark:[--spinner-head:var(--color-emerald-500)]",
	destructive: "[--spinner-head:var(--color-red-600)] dark:[--spinner-head:var(--color-red-500)]",
	warning: "[--spinner-head:var(--color-amber-600)] dark:[--spinner-head:var(--color-amber-500)]",
} as const;

export type SpinnerSize = keyof typeof SPINNER_SIZES;
export type SpinnerVariant = keyof typeof SPINNER_VARIANTS;

export type SpinnerPreviewVariant = "default" | "sizes" | "colors" | "button" | "label" | "card" | "input";

export const SPINNER_PROPS = [
	{
		name: "size",
		type: '"xs" | "sm" | "md" | "lg" | "xl"',
		default: '"md"',
		description: "Ukuran dimensi dan ketebalan garis spinner.",
	},
	{
		name: "variant",
		type: '"default" | "secondary" | "success" | "destructive" | "warning"',
		default: '"default"',
		description: "Warna putaran kepala spinner.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class Tailwind tambahan untuk custom warna atau margin.",
	},
] as const;
