import {
	ArrowRight01Icon,
	Bookmark01Icon,
	Calendar01Icon,
	Clock01Icon,
	File01Icon,
	Image01Icon,
	PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";

export interface JobCardProps extends React.HTMLAttributes<HTMLElement> {
	postedAt?: string;
	logoSrc?: string;
	jobTitle?: string;
	company?: string;
	location?: string;
	description?: string;
	tags?: string[];
	salary?: string;
	salarySuffix?: string;
	applicants?: string;
	match?: string;
	className?: string;
}

const CARD_CLASSES =
	"w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-5 text-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";

const META_CLASSES = "text-[13px] text-neutral-400";
const TITLE_CLASSES = "text-xl leading-tight font-bold tracking-tight text-white";
const SUBTITLE_CLASSES = "mt-1 text-sm text-neutral-400";
const DESC_CLASSES = "mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400";
const TAG_CLASSES = "rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-neutral-200";
const SALARY_CLASSES = "text-lg font-bold text-white";
const SALARY_SUFFIX_CLASSES = "text-xs font-normal text-neutral-400";
const APPLICANTS_CLASSES = "text-xs text-neutral-400";
const MATCH_VALUE_CLASSES = "text-sm font-bold text-emerald-400";
const MATCH_LABEL_CLASSES = "text-xs text-neutral-400";

export function JobCard({
	postedAt = "Posted 6 hours ago",
	logoSrc = "/favicon.ico",
	jobTitle = "Software Engineer",
	company = "Polinema UI",
	location = "Malang, ID",
	description = "Seeking a Software Engineer with a proven track record in crafting innovative and user-centric digital experiences. This role involves leading design initiatives...",
	tags = ["Remote", "Design Systems", "UX Research"],
	salary = "$185,000",
	salarySuffix = "/annually",
	applicants = "167 Applicants",
	match = "84%",
	className = "",
	...props
}: JobCardProps) {
	return (
		<article className={[CARD_CLASSES, className].filter(Boolean).join(" ")} {...props}>
			<div className="flex items-center justify-between">
				<p className={META_CLASSES}>{postedAt}</p>
				<span className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300">
					<HugeiconsIcon icon={Bookmark01Icon} size={14} />
				</span>
			</div>

			<div className="mt-4 flex items-start justify-between gap-4">
				<div className="flex min-w-0 items-center gap-3">
					<span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5">
						<img src={logoSrc} alt="" width={28} height={28} className="size-7 object-contain" />
					</span>
					<div className="min-w-0">
						<h3 className={TITLE_CLASSES}>{jobTitle}</h3>
						<p className={SUBTITLE_CLASSES}>
							{company} <span className="mx-1 text-neutral-600">·</span> {location}
						</p>
					</div>
				</div>
				<div className="flex shrink-0 flex-col items-end">
					<span className={MATCH_VALUE_CLASSES}>{match}</span>
					<span className={MATCH_LABEL_CLASSES}>Match</span>
				</div>
			</div>

			<p className={DESC_CLASSES}>{description}</p>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<span key={tag} className={TAG_CLASSES}>
						{tag}
					</span>
				))}
			</div>

			<div className="mt-4 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
				<div>
					<p className={SALARY_CLASSES}>
						{salary}
						<span className={SALARY_SUFFIX_CLASSES}>{salarySuffix}</span>
					</p>
					<p className={APPLICANTS_CLASSES}>{applicants}</p>
				</div>
				<span className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 bg-blue-700 px-6 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors hover:bg-blue-600">
					Apply
				</span>
			</div>
		</article>
	);
}

export interface LoginCardProps extends React.HTMLAttributes<HTMLElement> {
	logoSrc?: string;
	title?: string;
	subtitle?: string;
	buttonText?: string;
	className?: string;
}

const LOGIN_TITLE_CLASSES = "mt-4 text-xl font-bold tracking-tight text-white";
const LOGIN_SUBTITLE_CLASSES = "mt-1 text-sm text-neutral-400";
const LOGIN_LABEL_CLASSES = "mb-1.5 block text-[13px] font-medium text-neutral-300";
const LOGIN_LOGO_CLASSES = "flex size-11 items-center justify-center overflow-hidden rounded-xl bg-white/5";
const LOGIN_CARD_CLASSES =
	"w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-950 p-6 text-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
const LOGIN_BUTTON_CLASSES =
	"inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 bg-blue-700 px-4 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors outline-none select-none hover:bg-blue-600";
const LOGIN_FOOTER_CLASSES = "mt-4 text-center text-[13px] text-neutral-400";
const LOGIN_LINK_CLASSES = "font-medium text-blue-400 hover:underline";

export function LoginCard({
	logoSrc = "/favicon.ico",
	title = "Welcome back",
	subtitle = "Sign in to your account to continue",
	buttonText = "Sign in",
	className = "",
	...props
}: LoginCardProps) {
	return (
		<article className={[LOGIN_CARD_CLASSES, className].filter(Boolean).join(" ")} {...props}>
			<span className={LOGIN_LOGO_CLASSES}>
				<img src={logoSrc} alt="" width={28} height={28} className="size-7 object-contain" />
			</span>
			<h3 className={LOGIN_TITLE_CLASSES}>{title}</h3>
			<p className={LOGIN_SUBTITLE_CLASSES}>{subtitle}</p>

			<div className="mt-5 space-y-4">
				<div>
					<label htmlFor="login-email" className={LOGIN_LABEL_CLASSES}>
						Email
					</label>
					<input
						id="login-email"
						type="email"
						placeholder="you@polinema.ac.id"
						className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-500 focus:border-blue-600"
					/>
				</div>

				<div>
					<label htmlFor="login-password" className={LOGIN_LABEL_CLASSES}>
						Password
					</label>
					<input
						id="login-password"
						type="password"
						placeholder="••••••••"
						className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-500 focus:border-blue-600"
					/>
				</div>

				<div className="flex items-center justify-between text-[13px]">
					<label htmlFor="login-remember" className="flex cursor-pointer items-center gap-2 text-neutral-400">
						<input
							id="login-remember"
							type="checkbox"
							className="size-4 rounded border-white/10 bg-white/5 accent-blue-600"
						/>
						Remember me
					</label>
					<a href="#" className={LOGIN_LINK_CLASSES}>
						Forgot password?
					</a>
				</div>

				<button type="button" className={LOGIN_BUTTON_CLASSES}>
					{buttonText}
				</button>
			</div>

			<p className={LOGIN_FOOTER_CLASSES}>
				Don&apos;t have an account?{" "}
				<a href="#" className={LOGIN_LINK_CLASSES}>
					Sign up
				</a>
			</p>
		</article>
	);
}

export interface ImageCardProps extends React.HTMLAttributes<HTMLElement> {
	imageSrc?: string;
	badge?: string;
	title?: string;
	description?: string;
	authorName?: string;
	date?: string;
	className?: string;
}

const IMAGE_CARD_CLASSES =
	"w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
const IMAGE_COVER_CLASSES = "h-44 w-full object-cover";
const IMAGE_BODY_CLASSES = "p-5";
const IMAGE_BADGE_CLASSES =
	"inline-flex items-center gap-1.5 rounded-md bg-blue-600/15 px-2.5 py-1 text-xs font-medium text-blue-400";
const IMAGE_TITLE_CLASSES = "mt-3 text-lg leading-snug font-bold tracking-tight text-white";
const IMAGE_DESC_CLASSES = "mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400";
const IMAGE_FOOTER_CLASSES = "mt-4 flex items-center justify-between border-t border-white/10 pt-4";
const IMAGE_AUTHOR_CLASSES = "text-[13px] font-medium text-neutral-300";
const IMAGE_DATE_CLASSES = "mt-0.5 text-xs text-neutral-500";

export function ImageCard({
	imageSrc = "/us.webp",
	badge = "Tutorial",
	title = "Belajar bikin dashboard PBL dalam 30 menit",
	description = "Ikuti langkah demi langkah menyusun layout, tabel, dan form yang rapi buat project akhir semester kalian.",
	authorName = "Polinema UI",
	date = "Sep 23, 2026",
	className = "",
	...props
}: ImageCardProps) {
	return (
		<article className={[IMAGE_CARD_CLASSES, className].filter(Boolean).join(" ")} {...props}>
			<img src={imageSrc} alt="" width={640} height={320} className={IMAGE_COVER_CLASSES} />
			<div className={IMAGE_BODY_CLASSES}>
				<span className={IMAGE_BADGE_CLASSES}>
					<HugeiconsIcon icon={Image01Icon} size={14} />
					{badge}
				</span>
				<h3 className={IMAGE_TITLE_CLASSES}>{title}</h3>
				<p className={IMAGE_DESC_CLASSES}>{description}</p>
				<div className={IMAGE_FOOTER_CLASSES}>
					<div className="flex min-w-0 items-center gap-2.5">
						<span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/5">
							<img src="/favicon.ico" alt="" width={20} height={20} className="size-5 object-contain" />
						</span>
						<div className="min-w-0">
							<p className={IMAGE_AUTHOR_CLASSES}>{authorName}</p>
							<p className={IMAGE_DATE_CLASSES}>
								<span className="inline-flex items-center gap-1">
									<HugeiconsIcon icon={Clock01Icon} size={12} />
									{date}
								</span>
							</p>
						</div>
					</div>
					<span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300">
						<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
					</span>
				</div>
			</div>
		</article>
	);
}

export interface ScheduledReport {
	name: string;
	schedule: string;
	active?: boolean;
}

export interface ScheduledReportsCardProps extends React.HTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
	reports?: ScheduledReport[];
	buttonText?: string;
	className?: string;
}

const SCHEDULED_CARD_CLASSES =
	"w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-5 text-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";
const SCHEDULED_TITLE_CLASSES = "text-lg font-bold tracking-tight text-white";
const SCHEDULED_SUBTITLE_CLASSES = "mt-0.5 text-[13px] text-neutral-400";
const SCHEDULED_ROW_CLASSES = "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3";
const SCHEDULED_ROW_NAME_CLASSES = "text-sm font-medium text-white";
const SCHEDULED_ROW_META_CLASSES = "mt-0.5 flex items-center gap-1.5 text-xs text-neutral-400";
const SCHEDULED_STATUS_ACTIVE_CLASSES = "size-2 shrink-0 rounded-full bg-emerald-400";
const SCHEDULED_STATUS_IDLE_CLASSES = "size-2 shrink-0 rounded-full bg-neutral-600";
const SCHEDULED_FOOTER_BUTTON_CLASSES =
	"inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-neutral-100 transition-colors outline-none select-none hover:bg-white/10";

export function ScheduledReportsCard({
	title = "Scheduled Reports",
	subtitle = "Automate your insights",
	reports = [
		{ name: "Weekly traffic summary", schedule: "Every Monday · 08:00", active: true },
		{ name: "Monthly revenue report", schedule: "1st of month · 09:00", active: true },
		{ name: "Daily error digest", schedule: "Every day · 07:30", active: false },
	],
	buttonText = "New Report",
	className = "",
	...props
}: ScheduledReportsCardProps) {
	return (
		<article className={[SCHEDULED_CARD_CLASSES, className].filter(Boolean).join(" ")} {...props}>
			<div className="flex items-start justify-between gap-4">
				<div className="flex min-w-0 items-center gap-3">
					<span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
						<HugeiconsIcon icon={Calendar01Icon} size={18} />
					</span>
					<div className="min-w-0">
						<h3 className={SCHEDULED_TITLE_CLASSES}>{title}</h3>
						<p className={SCHEDULED_SUBTITLE_CLASSES}>{subtitle}</p>
					</div>
				</div>
				<span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300">
					<HugeiconsIcon icon={PlusSignIcon} size={14} />
				</span>
			</div>

			<div className="mt-4 space-y-2">
				{reports.map((report) => (
					<div key={report.name} className={SCHEDULED_ROW_CLASSES}>
						<span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-neutral-950 text-neutral-300">
							<HugeiconsIcon icon={File01Icon} size={16} />
						</span>
						<div className="min-w-0 flex-1">
							<p className={SCHEDULED_ROW_NAME_CLASSES}>{report.name}</p>
							<p className={SCHEDULED_ROW_META_CLASSES}>
								<HugeiconsIcon icon={Clock01Icon} size={12} />
								{report.schedule}
							</p>
						</div>
						<span
							className={report.active !== false ? SCHEDULED_STATUS_ACTIVE_CLASSES : SCHEDULED_STATUS_IDLE_CLASSES}
						/>
					</div>
				))}
			</div>

			<div className="mt-4 border-t border-white/10 pt-4">
				<button type="button" className={SCHEDULED_FOOTER_BUTTON_CLASSES}>
					<HugeiconsIcon icon={PlusSignIcon} size={14} />
					{buttonText}
				</button>
			</div>
		</article>
	);
}
