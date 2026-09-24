export const INPUT_CLASSES =
	"h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-900 transition-colors outline-none placeholder:text-neutral-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500 aria-invalid:focus:border-red-500 aria-invalid:focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500";
export const INPUT_LABEL_CLASSES = "mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300";
export const INPUT_HINT_CLASSES = "mt-1.5 text-xs text-neutral-500";
export const INPUT_ERROR_CLASSES = "mt-1.5 text-xs text-red-600 dark:text-red-400";

export type InputPreviewVariant = "basic" | "grid" | "disabled" | "invalid" | "file" | "required" | "inline" | "form";

export const INPUT_PROPS = [
	{
		name: "type",
		type: '"text" | "email" | "password" | "number" | "file" | ...',
		default: '"text"',
		description: "Tipe input HTML standar. Diteruskan langsung ke elemen input.",
	},
	{
		name: "placeholder",
		type: "string",
		default: "—",
		description: "Teks placeholder yang tampil saat input masih kosong.",
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Kalo true, input nggak bisa diisi dan tampil pudar.",
	},
	{
		name: "invalid",
		type: "boolean",
		default: "false",
		description: "Kalo true, border jadi merah dan aria-invalid kepasang.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan buat nimpa atau nambah styling input.",
	},
] as const;
