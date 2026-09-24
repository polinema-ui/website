export const AVATAR_BASE = "relative flex size-10 shrink-0 overflow-hidden rounded-full";

export const AVATAR_IMAGE_BASE = "absolute inset-0 aspect-square size-full object-cover";

export const AVATAR_FALLBACK_BASE =
	"flex size-full items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300";

export const AVATAR_SIZES = {
	xs: "size-6 text-xs",
	sm: "size-8 text-xs",
	md: "size-10 text-sm",
	lg: "size-12 text-base",
	xl: "size-16 text-lg",
	"2xl": "size-20 text-xl",
} as const;

export type AvatarSize = keyof typeof AVATAR_SIZES;

export type AvatarPreviewVariant =
	"default" | "sizes" | "shapes" | "status" | "group" | "badge" | "icons" | "gradient" | "interactive" | "user-card";

export const AVATAR_PROPS = [
	{
		name: "src",
		type: "string",
		default: "-",
		description: "URL gambar foto profil Avatar.",
	},
	{
		name: "alt",
		type: "string",
		default: '""',
		description: "Teks alternatif gambar buat aksesibilitas screen reader.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class Tailwind tambahan untuk custom ukuran, border, atau bentuk.",
	},
	{
		name: "children",
		type: "React.ReactNode",
		default: "-",
		description: "Konten teks inisial atau ikon di dalam AvatarFallback.",
	},
] as const;
