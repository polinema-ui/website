export const DIALOG_OVERLAY_BASE =
	"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";

export const DIALOG_CONTENT_BASE =
	"fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-md dark:border-white/10 dark:bg-neutral-950";

export const DIALOG_HEADER_BASE = "flex flex-col space-y-1.5 text-center sm:text-left";

export const DIALOG_FOOTER_BASE = "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2";

export const DIALOG_TITLE_BASE = "text-lg font-semibold leading-none tracking-tight text-neutral-900 dark:text-white";

export const DIALOG_DESCRIPTION_BASE = "text-sm text-neutral-500 dark:text-neutral-400";

export type DialogPreviewVariant =
	| "default"
	| "custom-close"
	| "scrollable"
	| "destructive"
	| "share"
	| "command"
	| "wizard"
	| "auth"
	| "file-upload"
	| "cookie-consent"
	| "media"
	| "fullscreen"
	| "status"
	| "form"
	| "sheet";

export const DIALOG_PROPS = [
	{
		name: "open",
		type: "boolean",
		default: "false",
		description: "Status state apakah Dialog sedang terbuka (open) atau tertutup.",
	},
	{
		name: "onOpenChange",
		type: "(open: boolean) => void",
		default: "-",
		description: "Callback function yang dipanggil saat status keterbukaan dialog berubah.",
	},
	{
		name: "children",
		type: "React.ReactNode | Snippet",
		default: "-",
		description: "Konten elemen di dalam Dialog (Trigger, Content, Header, Footer, dll).",
	},
	{
		name: "showCloseButton",
		type: "boolean",
		default: "true",
		description: "Opsi untuk menampilkan atau menyembunyikan tombol silang (close button) di sudut kanan atas.",
	},
] as const;
