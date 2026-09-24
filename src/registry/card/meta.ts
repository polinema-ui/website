export const CARD_CLASSES =
	"w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
export const CARD_META_CLASSES = "text-[13px] text-neutral-500 dark:text-neutral-400";
export const CARD_TITLE_CLASSES = "text-xl leading-tight font-bold tracking-tight text-neutral-900 dark:text-white";
export const CARD_SUBTITLE_CLASSES = "mt-1 text-sm text-neutral-500 dark:text-neutral-400";
export const CARD_DESC_CLASSES = "mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400";
export const CARD_TAG_CLASSES =
	"rounded-md bg-black/5 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-200";
export const CARD_SALARY_CLASSES = "text-lg font-bold text-neutral-900 dark:text-white";
export const CARD_SALARY_SUFFIX_CLASSES = "text-xs font-normal text-neutral-500 dark:text-neutral-400";
export const CARD_APPLICANTS_CLASSES = "text-xs text-neutral-500 dark:text-neutral-400";
export const CARD_MATCH_VALUE_CLASSES = "text-sm font-bold text-emerald-600 dark:text-emerald-400";
export const CARD_MATCH_LABEL_CLASSES = "text-xs text-neutral-500 dark:text-neutral-400";

export const LOGIN_CARD_CLASSES =
	"w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
export const LOGIN_LOGO_CLASSES =
	"flex size-11 items-center justify-center overflow-hidden rounded-xl bg-black/5 dark:bg-white/5";
export const LOGIN_TITLE_CLASSES = "mt-4 text-xl font-bold tracking-tight text-neutral-900 dark:text-white";
export const LOGIN_SUBTITLE_CLASSES = "mt-1 text-sm text-neutral-500 dark:text-neutral-400";
export const LOGIN_LABEL_CLASSES = "mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300";
export const LOGIN_BUTTON_CLASSES =
	"inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 bg-blue-700 px-4 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors outline-none select-none hover:bg-blue-600";
export const LOGIN_FOOTER_CLASSES = "mt-4 text-center text-[13px] text-neutral-500 dark:text-neutral-400";
export const LOGIN_LINK_CLASSES = "font-medium text-blue-600 hover:underline dark:text-blue-400";

export const IMAGE_CARD_CLASSES =
	"w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
export const IMAGE_COVER_CLASSES = "h-44 w-full object-cover";
export const IMAGE_BODY_CLASSES = "p-5";
export const IMAGE_BADGE_CLASSES =
	"inline-flex items-center gap-1.5 rounded-md bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-600/15 dark:text-blue-400";
export const IMAGE_TITLE_CLASSES =
	"mt-3 text-lg leading-snug font-bold tracking-tight text-neutral-900 dark:text-white";
export const IMAGE_DESC_CLASSES = "mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400";
export const IMAGE_FOOTER_CLASSES =
	"mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-white/10";
export const IMAGE_AUTHOR_CLASSES = "text-[13px] font-medium text-neutral-700 dark:text-neutral-300";
export const IMAGE_DATE_CLASSES = "mt-0.5 text-xs text-neutral-500";

export const SCHEDULED_CARD_CLASSES =
	"w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
export const SCHEDULED_TITLE_CLASSES = "text-lg font-bold tracking-tight text-neutral-900 dark:text-white";
export const SCHEDULED_SUBTITLE_CLASSES = "mt-0.5 text-[13px] text-neutral-500 dark:text-neutral-400";
export const SCHEDULED_ROW_CLASSES =
	"flex items-center gap-3 rounded-xl border border-neutral-200 bg-black/[0.03] p-3 dark:border-white/10 dark:bg-white/5";
export const SCHEDULED_ROW_NAME_CLASSES = "text-sm font-medium text-neutral-900 dark:text-white";
export const SCHEDULED_ROW_META_CLASSES =
	"mt-0.5 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400";
export const SCHEDULED_STATUS_ACTIVE_CLASSES = "size-2 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400";
export const SCHEDULED_STATUS_IDLE_CLASSES = "size-2 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600";
export const SCHEDULED_FOOTER_BUTTON_CLASSES =
	"inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-neutral-900 transition-colors outline-none select-none hover:bg-black/5 dark:border-white/10 dark:text-neutral-100 dark:hover:bg-white/10";

export type CardPreviewVariant = "job" | "login" | "image" | "scheduled";

export const CARD_PROPS = [
	{
		name: "postedAt",
		type: "string",
		default: '"Posted 6 hours ago"',
		description: "Teks meta di kiri atas kartu, biasanya waktu posting lowongan.",
	},
	{
		name: "logoSrc",
		type: "string",
		default: '"/favicon.ico"',
		description: "Path logo perusahaan. Default pakai logo Polinema UI.",
	},
	{
		name: "jobTitle",
		type: "string",
		default: '"Software Engineer"',
		description: "Judul posisi yang ditampilin gede di header kartu.",
	},
	{
		name: "company",
		type: "string",
		default: '"Polinema UI"',
		description: "Nama perusahaan di bawah judul.",
	},
	{
		name: "location",
		type: "string",
		default: '"Malang, ID"',
		description: "Lokasi kerja di sebelah nama perusahaan.",
	},
	{
		name: "description",
		type: "string",
		default: '"Seeking a Software Engineer..."',
		description: "Deskripsi singkat, di-clamp 2 baris.",
	},
	{
		name: "tags",
		type: "string[]",
		default: '["Remote", "Design Systems", "UX Research"]',
		description: "Chip kecil di tengah kartu, misal tipe kerja atau skill.",
	},
	{
		name: "salary",
		type: "string",
		default: '"$185,000"',
		description: "Nominal gaji di footer kiri.",
	},
	{
		name: "salarySuffix",
		type: "string",
		default: '"/annually"',
		description: "Suffix kecil di belakang nominal gaji.",
	},
	{
		name: "applicants",
		type: "string",
		default: '"167 Applicants"',
		description: "Jumlah pelamar di bawah nominal gaji.",
	},
	{
		name: "match",
		type: "string",
		default: '"84%"',
		description: "Skor kecocokan di kanan atas, warna emerald.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan buat nimpa atau nambah styling kartu.",
	},
] as const;

export const CARD_LOGIN_PROPS = [
	{
		name: "logoSrc",
		type: "string",
		default: '"/favicon.ico"',
		description: "Logo di atas judul. Default pakai logo Polinema UI.",
	},
	{
		name: "title",
		type: "string",
		default: '"Welcome back"',
		description: "Judul utama kartu login.",
	},
	{
		name: "subtitle",
		type: "string",
		default: '"Sign in to your account..."',
		description: "Subjudul di bawah title.",
	},
	{
		name: "buttonText",
		type: "string",
		default: '"Sign in"',
		description: "Teks tombol submit.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan buat nimpa atau nambah styling kartu.",
	},
] as const;

export const CARD_IMAGE_PROPS = [
	{
		name: "imageSrc",
		type: "string",
		default: '"/us.webp"',
		description: "Gambar cover di atas kartu.",
	},
	{
		name: "badge",
		type: "string",
		default: '"Tutorial"',
		description: "Chip kategori di atas judul.",
	},
	{
		name: "title",
		type: "string",
		default: '"Belajar bikin dashboard..."',
		description: "Judul konten kartu.",
	},
	{
		name: "description",
		type: "string",
		default: '"Ikuti langkah demi langkah..."',
		description: "Deskripsi singkat, di-clamp 2 baris.",
	},
	{
		name: "authorName",
		type: "string",
		default: '"Polinema UI"',
		description: "Nama penulis di footer.",
	},
	{
		name: "date",
		type: "string",
		default: '"Sep 23, 2026"',
		description: "Tanggal publikasi di footer.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan buat nimpa atau nambah styling kartu.",
	},
] as const;

export const CARD_SCHEDULED_PROPS = [
	{
		name: "title",
		type: "string",
		default: '"Scheduled Reports"',
		description: "Judul header kartu.",
	},
	{
		name: "subtitle",
		type: "string",
		default: '"Automate your insights"',
		description: "Subjudul di bawah title.",
	},
	{
		name: "reports",
		type: "ScheduledReport[]",
		default: "[3 laporan contoh]",
		description: "Daftar laporan. Tiap item berisi name, schedule, dan active buat titik status.",
	},
	{
		name: "buttonText",
		type: "string",
		default: '"New Report"',
		description: "Teks tombol footer.",
	},
	{
		name: "className",
		type: "string",
		default: '""',
		description: "Class tambahan buat nimpa atau nambah styling kartu.",
	},
] as const;
