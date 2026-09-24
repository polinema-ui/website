<script lang="ts">
	import {
		ArrowRight01Icon,
		Bookmark01Icon,
		Calendar01Icon,
		Clock01Icon,
		File01Icon,
		Image01Icon,
		PlusSignIcon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import {
		CARD_APPLICANTS_CLASSES,
		CARD_CLASSES,
		CARD_DESC_CLASSES,
		CARD_MATCH_LABEL_CLASSES,
		CARD_MATCH_VALUE_CLASSES,
		CARD_META_CLASSES,
		CARD_SALARY_CLASSES,
		CARD_SALARY_SUFFIX_CLASSES,
		CARD_SUBTITLE_CLASSES,
		CARD_TAG_CLASSES,
		CARD_TITLE_CLASSES,
		IMAGE_AUTHOR_CLASSES,
		IMAGE_BADGE_CLASSES,
		IMAGE_BODY_CLASSES,
		IMAGE_CARD_CLASSES,
		IMAGE_COVER_CLASSES,
		IMAGE_DATE_CLASSES,
		IMAGE_DESC_CLASSES,
		IMAGE_FOOTER_CLASSES,
		IMAGE_TITLE_CLASSES,
		LOGIN_BUTTON_CLASSES,
		LOGIN_CARD_CLASSES,
		LOGIN_FOOTER_CLASSES,
		LOGIN_LABEL_CLASSES,
		LOGIN_LINK_CLASSES,
		LOGIN_LOGO_CLASSES,
		LOGIN_SUBTITLE_CLASSES,
		LOGIN_TITLE_CLASSES,
		SCHEDULED_CARD_CLASSES,
		SCHEDULED_FOOTER_BUTTON_CLASSES,
		SCHEDULED_ROW_CLASSES,
		SCHEDULED_ROW_META_CLASSES,
		SCHEDULED_ROW_NAME_CLASSES,
		SCHEDULED_STATUS_ACTIVE_CLASSES,
		SCHEDULED_STATUS_IDLE_CLASSES,
		SCHEDULED_SUBTITLE_CLASSES,
		SCHEDULED_TITLE_CLASSES,
	} from "./meta";
	import type { CardPreviewVariant } from "./meta";

	let { variant = "job" }: { variant?: CardPreviewVariant } = $props();

	const scheduledReports = [
		{ name: "Weekly traffic summary", schedule: "Every Monday · 08:00", active: true },
		{ name: "Monthly revenue report", schedule: "1st of month · 09:00", active: true },
		{ name: "Daily error digest", schedule: "Every day · 07:30", active: false },
	];
</script>

{#if variant === "login"}
	<article class={LOGIN_CARD_CLASSES}>
		<span class={LOGIN_LOGO_CLASSES}>
			<img src="/favicon.ico" alt="" width="28" height="28" class="size-7 object-contain" />
		</span>
		<h3 class={LOGIN_TITLE_CLASSES}>Sign In</h3>
		<p class={LOGIN_SUBTITLE_CLASSES}>Sign in to your account to continue</p>

		<div class="mt-5 space-y-4">
			<div>
				<label for="preview-login-email" class={LOGIN_LABEL_CLASSES}>Email</label>
				<input
					id="preview-login-email"
					type="email"
					placeholder="user@polinema.ui"
					class="h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-900 transition-colors outline-none placeholder:text-neutral-400 focus:border-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500"
				/>
			</div>

			<div>
				<label for="preview-login-password" class={LOGIN_LABEL_CLASSES}>Password</label>
				<input
					id="preview-login-password"
					type="password"
					placeholder="••••••••"
					class="h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-900 transition-colors outline-none placeholder:text-neutral-400 focus:border-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500"
				/>
			</div>

			<div class="flex items-center justify-between text-[13px]">
				<label
					for="preview-login-remember"
					class="flex cursor-pointer items-center gap-2 text-neutral-500 dark:text-neutral-400"
				>
					<input
						id="preview-login-remember"
						type="checkbox"
						class="size-4 rounded border-neutral-300 bg-white accent-blue-600 dark:border-white/10 dark:bg-white/5"
					/>
					Remember me
				</label>
				<a href="#login" class={LOGIN_LINK_CLASSES}>Forgot password?</a>
			</div>

			<button type="button" class={LOGIN_BUTTON_CLASSES}>Sign in</button>
		</div>

		<p class={LOGIN_FOOTER_CLASSES}>
			Don&apos;t have an account?
			<a href="#login" class={LOGIN_LINK_CLASSES}>Sign up</a>
		</p>
	</article>
{:else if variant === "image"}
	<article class={IMAGE_CARD_CLASSES}>
		<img src="/us.webp" alt="" width="640" height="320" class={IMAGE_COVER_CLASSES} />
		<div class={IMAGE_BODY_CLASSES}>
			<span class={IMAGE_BADGE_CLASSES}>
				<HugeiconsIcon icon={Image01Icon} size={14} />
				Tutorial
			</span>
			<h3 class={IMAGE_TITLE_CLASSES}>Dashboard Tutorial</h3>
			<p class={IMAGE_DESC_CLASSES}>Step-by-step guide to building clean layouts, tables, and forms.</p>
			<div class={IMAGE_FOOTER_CLASSES}>
				<div class="flex min-w-0 items-center gap-2.5">
					<span
						class="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/5 dark:bg-white/5"
					>
						<img src="/favicon.ico" alt="" width="20" height="20" class="size-5 object-contain" />
					</span>
					<div class="min-w-0">
						<p class={IMAGE_AUTHOR_CLASSES}>Polinema UI</p>
						<p class={IMAGE_DATE_CLASSES}>
							<span class="inline-flex items-center gap-1">
								<HugeiconsIcon icon={Clock01Icon} size={12} />
								Sep 23, 2026
							</span>
						</p>
					</div>
				</div>
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-black/5 text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
				>
					<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
				</span>
			</div>
		</div>
	</article>
{:else if variant === "scheduled"}
	<article class={SCHEDULED_CARD_CLASSES}>
		<div class="flex items-start justify-between gap-4">
			<div class="flex min-w-0 items-center gap-3">
				<span
					class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-black/5 text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-blue-400"
				>
					<HugeiconsIcon icon={Calendar01Icon} size={18} />
				</span>
				<div class="min-w-0">
					<h3 class={SCHEDULED_TITLE_CLASSES}>Reports</h3>
					<p class={SCHEDULED_SUBTITLE_CLASSES}>Automate your insights</p>
				</div>
			</div>
			<span
				class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-black/5 text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
			>
				<HugeiconsIcon icon={PlusSignIcon} size={14} />
			</span>
		</div>

		<div class="mt-4 space-y-2">
			{#each scheduledReports as report (report.name)}
				<div class={SCHEDULED_ROW_CLASSES}>
					<span
						class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-300"
					>
						<HugeiconsIcon icon={File01Icon} size={16} />
					</span>
					<div class="min-w-0 flex-1">
						<p class={SCHEDULED_ROW_NAME_CLASSES}>{report.name}</p>
						<p class={SCHEDULED_ROW_META_CLASSES}>
							<HugeiconsIcon icon={Clock01Icon} size={12} />
							{report.schedule}
						</p>
					</div>
					<span class={report.active ? SCHEDULED_STATUS_ACTIVE_CLASSES : SCHEDULED_STATUS_IDLE_CLASSES}></span>
				</div>
			{/each}
		</div>

		<div class="mt-4 border-t border-neutral-200 pt-4 dark:border-white/10">
			<button type="button" class={SCHEDULED_FOOTER_BUTTON_CLASSES}>
				<HugeiconsIcon icon={PlusSignIcon} size={14} />
				New Report
			</button>
		</div>
	</article>
{:else}
	<article class={CARD_CLASSES}>
		<div class="flex items-center justify-between">
			<p class={CARD_META_CLASSES}>Posted 6 hours ago</p>
			<span
				class="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-black/5 text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
			>
				<HugeiconsIcon icon={Bookmark01Icon} size={14} />
			</span>
		</div>

		<div class="mt-4 flex items-start justify-between gap-4">
			<div class="flex min-w-0 items-center gap-3">
				<span
					class="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/5 dark:bg-white/5"
				>
					<img src="/favicon.ico" alt="" width="28" height="28" class="size-7 object-contain" />
				</span>
				<div class="min-w-0">
					<h3 class={CARD_TITLE_CLASSES}>Job Opening</h3>
					<p class={CARD_SUBTITLE_CLASSES}>
						Polinema UI <span class="mx-1 text-neutral-300 dark:text-neutral-600">·</span> Malang, ID
					</p>
				</div>
			</div>
			<div class="flex shrink-0 flex-col items-end">
				<span class={CARD_MATCH_VALUE_CLASSES}>84%</span>
				<span class={CARD_MATCH_LABEL_CLASSES}>Match</span>
			</div>
		</div>

		<p class={CARD_DESC_CLASSES}>
			Seeking a Software Engineer with a proven track record in crafting innovative and user-centric digital
			experiences. This role involves leading design initiatives...
		</p>

		<div class="mt-4 flex flex-wrap gap-2">
			{#each ["Remote", "Design Systems", "UX Research"] as tag (tag)}
				<span class={CARD_TAG_CLASSES}>{tag}</span>
			{/each}
		</div>

		<div class="mt-4 flex items-end justify-between gap-4 border-t border-neutral-200 pt-4 dark:border-white/10">
			<div>
				<p class={CARD_SALARY_CLASSES}>$185,000<span class={CARD_SALARY_SUFFIX_CLASSES}>/annually</span></p>
				<p class={CARD_APPLICANTS_CLASSES}>167 Applicants</p>
			</div>
			<button
				type="button"
				class="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 bg-blue-700 px-6 text-sm font-medium whitespace-nowrap text-white shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors outline-none select-none hover:bg-blue-600"
			>
				Apply
			</button>
		</div>
	</article>
{/if}
