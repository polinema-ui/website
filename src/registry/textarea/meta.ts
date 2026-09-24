export const TEXTAREA_CLASSES =
	"w-full min-h-[96px] rounded-lg border border-neutral-200 bg-white p-3 text-sm text-neutral-900 transition-colors outline-none placeholder:text-neutral-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500 aria-invalid:focus:border-red-500 aria-invalid:focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500";
export const TEXTAREA_LABEL_CLASSES = "mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300";
export const TEXTAREA_HINT_CLASSES = "mt-1.5 text-xs text-neutral-500";
export const TEXTAREA_ERROR_CLASSES = "mt-1.5 text-xs text-red-600 dark:text-red-400";

export type TextareaPreviewVariant = "default" | "limit" | "disabled" | "invalid" | "actions" | "form";

export const TEXTAREA_PROPS = [
	{
		name: "placeholder",
		type: "string",
		default: "—",
		description: "Teks placeholder saat textarea masih kosong.",
	},
	{
		name: "rows",
		type: "number",
		default: "—",
		description: "Jumlah baris vertikal default elemen textarea.",
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Kalo true, textarea tidak dapat diedit dan tampil pudar.",
	},
	{
		name: "invalid",
		type: "boolean",
		default: "false",
		description: "Kalo true, border dan ring berubah menjadi merah dengan status aria-invalid.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan untuk kustomisasi styling atau ukuran.",
	},
] as const;
