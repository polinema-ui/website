<script lang="ts">
	import {
		AlertCircleIcon,
		AppleIcon,
		ArrowRight01Icon,
		Attachment01Icon,
		CheckmarkCircle02Icon,
		Copy01Icon,
		Delete01Icon,
		Download01Icon,
		File01Icon,
		Folder01Icon,
		GithubIcon,
		GlobeIcon,
		GoogleIcon,
		Image01Icon,
		InformationCircleIcon,
		ListViewIcon,
		Mail01Icon,
		Notification01Icon,
		PlusSignIcon,
		Search01Icon,
		Settings01Icon,
		Shield01Icon,
		SparklesIcon,
		TextBoldIcon,
		Tick01Icon,
		Upload01Icon,
		UserIcon,
		ViewIcon,
		Wallet01Icon,
	} from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "$registry/button/meta";
	import { INPUT_CLASSES, INPUT_LABEL_CLASSES } from "$registry/input/meta";
	import { TEXTAREA_CLASSES } from "$registry/textarea/meta";
	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
	} from "$lib/components/dialog";
	import type { DialogPreviewVariant } from "./meta";

	let { variant = "default" }: { variant?: DialogPreviewVariant } = $props();

	// Semua tombol & field berasal dari registry (rounded maksimal rounded-md).
	// Aturan: kalau ada 2 button, button pertama (aksi sekunder) pakai secondary, button kedua tetap default.
	const BTN = `${BUTTON_BASE} ${BUTTON_VARIANTS.default} ${BUTTON_SIZES.default} rounded-md`;
	const BTN_SM = `${BUTTON_BASE} ${BUTTON_VARIANTS.default} ${BUTTON_SIZES.sm} rounded-md`;
	const BTN_SEC_SM = `${BUTTON_BASE} ${BUTTON_VARIANTS.secondary} ${BUTTON_SIZES.sm} rounded-md`;
	const BTN_OUT = `${BUTTON_BASE} ${BUTTON_VARIANTS.outline} ${BUTTON_SIZES.default} rounded-md`;
	const BTN_OUT_SM = `${BUTTON_BASE} ${BUTTON_VARIANTS.outline} ${BUTTON_SIZES.sm} rounded-md`;
	const BTN_DEST_SM = `${BUTTON_BASE} ${BUTTON_VARIANTS.destructive} ${BUTTON_SIZES.sm} rounded-md`;
	const FIELD = `${INPUT_CLASSES} rounded-md`;
	const AREA = `${TEXTAREA_CLASSES} rounded-md`;

	// State for variants
	let profileName = $state("Rizky Pratama");
	let profileUsername = $state("@rizkypratama");
	let profileRole = $state("Senior Frontend Engineer");
	let profileBio = $state("Building modern web interfaces with Svelte 5 and Tailwind CSS.");
	let isSaved = $state(false);

	let confirmDeleteInput = $state("");
	let isDeleting = $state(false);

	let copiedLink = $state(false);

	let wizardStep = $state(1);
	let wizardProject = $state("");
	let wizardFramework = $state("svelte");

	let authTab = $state<"login" | "register">("login");
	let authName = $state("");
	let authEmail = $state("");
	let authPass = $state("");
	let isAuthLoading = $state(false);

	let isUploading = $state(false);

	let cookieAnalytics = $state(true);
	let cookieMarketing = $state(false);

	let searchCmd = $state("");

	let feedbackTopic = $state("Bug UI");
	let feedbackDesc = $state("");
	let feedbackSent = $state(false);

	let noteTitle = $state("");
	let noteBody = $state("");
	let isNotePublished = $state(false);
</script>

{#if variant === "default"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Edit Profile</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<div class="flex items-center gap-3 text-left">
						<div
							class="flex size-11 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900"
						>
							RP
						</div>
						<div>
							<DialogTitle>Edit Profile</DialogTitle>
							<DialogDescription>Update your public photo, name, and bio.</DialogDescription>
						</div>
					</div>
				</DialogHeader>
				<div class="grid grid-cols-2 gap-3 py-2">
					<div class="space-y-1">
						<label for="name" class={INPUT_LABEL_CLASSES}>Full Name</label>
						<input id="name" type="text" bind:value={profileName} placeholder="e.g. Jane Cooper" class={FIELD} />
					</div>
					<div class="space-y-1">
						<label for="username" class={INPUT_LABEL_CLASSES}>Username</label>
						<input
							id="username"
							type="text"
							bind:value={profileUsername}
							placeholder="e.g. @janecooper"
							class={FIELD}
						/>
					</div>
					<div class="col-span-2 space-y-1">
						<label for="role" class={INPUT_LABEL_CLASSES}>Job Title</label>
						<input id="role" type="text" bind:value={profileRole} placeholder="e.g. Frontend Engineer" class={FIELD} />
					</div>
					<div class="col-span-2 space-y-1">
						<label for="bio" class={INPUT_LABEL_CLASSES}>Short Bio</label>
						<textarea
							id="bio"
							bind:value={profileBio}
							rows={2}
							placeholder="Tell us a little about yourself..."
							class="{AREA} min-h-14 resize-none"></textarea>
					</div>
				</div>
				<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SEC_SM} {...props}>Cancel</button>
						{/snippet}
					</DialogClose>
					<button
						type="button"
						class={BTN_SM}
						onclick={() => {
							isSaved = true;
							setTimeout(() => (isSaved = false), 2000);
						}}
					>
						{#if isSaved}
							<HugeiconsIcon icon={Tick01Icon} size={14} />
							<span>Saved!</span>
						{:else}
							<span>Save Changes</span>
						{/if}
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "custom-close"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Discard Confirmation</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent showCloseButton={false} class="max-w-sm">
				<div class="flex flex-col items-center text-center">
					<div
						class="flex size-11 items-center justify-center rounded-md bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
					>
						<HugeiconsIcon icon={AlertCircleIcon} size={22} />
					</div>
					<DialogTitle class="mt-4">Discard Unsaved Changes?</DialogTitle>
					<DialogDescription class="mt-2"
						>You have unsaved changes. Leaving now will permanently delete this draft.</DialogDescription
					>
				</div>
				<DialogFooter class="mt-2 grid grid-cols-2 gap-3 sm:justify-stretch">
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SEC_SM} w-full" {...props}>Stay Here</button>
						{/snippet}
					</DialogClose>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SM} w-full" {...props}>Discard Draft</button>
						{/snippet}
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "scrollable"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Terms of Service</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-lg">
				<DialogHeader>
					<div class="flex items-start gap-3 text-left">
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
						>
							<HugeiconsIcon icon={File01Icon} size={18} />
						</div>
						<div>
							<DialogTitle>Terms of Service</DialogTitle>
							<DialogDescription>Last updated Sep 24, 2026 • v2.4.1</DialogDescription>
						</div>
					</div>
				</DialogHeader>
				<div
					class="max-h-64 space-y-4 overflow-y-auto rounded-md border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
				>
					<section>
						<p class="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
							<span class="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10"
								>1</span
							> General Terms
						</p>
						<p class="mt-1.5">
							By accessing this platform, you agree to these terms and all applicable laws. You are responsible for
							complying with your local regulations.
						</p>
					</section>
					<section>
						<p class="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
							<span class="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10"
								>2</span
							> Usage License
						</p>
						<p class="mt-1.5">
							Permission is granted to temporarily download one copy of the materials for personal, non-commercial
							viewing only. This is a license grant, not a transfer of ownership.
						</p>
					</section>
					<section>
						<p class="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
							<span class="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10"
								>3</span
							> Limitation of Liability
						</p>
						<p class="mt-1.5">
							In no event shall Polinema UI or its suppliers be liable for any damages arising from the use or inability
							to use the materials on our platform.
						</p>
					</section>
					<section>
						<p class="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
							<span class="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10"
								>4</span
							> Privacy & Data
						</p>
						<p class="mt-1.5">
							Our privacy policy explains how we collect, use, and protect your personal information when you use our
							services.
						</p>
					</section>
				</div>
				<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
					<p class="mr-auto hidden items-center gap-1 text-[11px] text-neutral-400 sm:flex">
						<HugeiconsIcon icon={Shield01Icon} size={12} /> Encrypted document
					</p>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SEC_SM} {...props}>Decline</button>
						{/snippet}
					</DialogClose>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SM} {...props}>I Agree</button>
						{/snippet}
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "destructive"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN_DEST_SM} {...props}>
						<HugeiconsIcon icon={Delete01Icon} size={14} />
						<span>Delete Account</span>
					</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md">
				<DialogHeader>
					<div class="flex items-start gap-3 text-left">
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-md bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
						>
							<HugeiconsIcon icon={Delete01Icon} size={18} />
						</div>
						<div>
							<DialogTitle>Delete This Workspace?</DialogTitle>
							<DialogDescription
								>This will permanently delete <span class="font-semibold text-neutral-900 dark:text-white"
									>12 projects</span
								>, 8 team members, and all deploy history.</DialogDescription
							>
						</div>
					</div>
				</DialogHeader>
				<div
					class="rounded-md border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300"
				>
					<p class="font-semibold">Warning: this action cannot be undone.</p>
					<p class="mt-0.5">
						Type <span class="rounded bg-red-600 px-1.5 py-0.5 font-mono font-bold text-white">DELETE</span> in the field
						below to confirm.
					</p>
				</div>
				<div class="space-y-1">
					<label for="del-confirm" class={INPUT_LABEL_CLASSES}>Delete confirmation</label>
					<input
						id="del-confirm"
						type="text"
						placeholder="Type DELETE to continue"
						bind:value={confirmDeleteInput}
						class={FIELD}
					/>
				</div>
				<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SEC_SM} {...props}>Cancel</button>
						{/snippet}
					</DialogClose>
					<button
						type="button"
						class={BTN_DEST_SM}
						disabled={confirmDeleteInput.trim() !== "DELETE"}
						onclick={() => {
							isDeleting = true;
							setTimeout(() => (isDeleting = false), 2000);
						}}
					>
						{isDeleting ? "Deleting..." : "Delete Permanently"}
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "share"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Share Project</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-4">
				<DialogHeader>
					<DialogTitle>Invite Team Members</DialogTitle>
					<DialogDescription>Share an invite link or send invites by email to collaborate.</DialogDescription>
				</DialogHeader>
				<div class="space-y-1">
					<label for="invite-email" class={INPUT_LABEL_CLASSES}>Invite by email</label>
					<div class="flex gap-2">
						<div class="relative flex-1">
							<HugeiconsIcon
								icon={Mail01Icon}
								size={15}
								class="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
							/>
							<input id="invite-email" type="email" placeholder="e.g. teammate@company.com" class="{FIELD} pl-9" />
						</div>
						<button type="button" class="{BTN} h-10 shrink-0">Invite</button>
					</div>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-medium text-neutral-700 dark:text-neutral-300">Active members (3)</p>
					{#each [{ name: "Jane Cooper", role: "Owner", initials: "JC" }, { name: "Alex Morgan", role: "Editor", initials: "AM" }, { name: "Sam Wilson", role: "Viewer", initials: "SW" }] as member (member.name)}
						<div
							class="flex items-center justify-between gap-3 rounded-md border border-neutral-200 p-2 dark:border-white/10"
						>
							<div class="flex min-w-0 items-center gap-2.5">
								<div
									class="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[11px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
								>
									{member.initials}
								</div>
								<div class="min-w-0">
									<p class="truncate text-xs font-semibold text-neutral-900 dark:text-white">{member.name}</p>
									<p class="text-[11px] text-neutral-500">{member.role}</p>
								</div>
							</div>
							<span
								class="shrink-0 rounded bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600 dark:bg-white/10 dark:text-neutral-400"
								>{member.role}</span
							>
						</div>
					{/each}
				</div>
				<div class="flex items-center gap-2 rounded-md bg-neutral-50 p-2 dark:bg-white/5">
					<input
						type="text"
						readonly
						value="https://polinema-ui.com/invite/abc-123"
						class="{FIELD} h-8 font-mono text-[11px]"
					/>
					<button
						type="button"
						class="{BTN_SM} h-8 shrink-0"
						onclick={() => {
							copiedLink = true;
							setTimeout(() => (copiedLink = false), 2000);
						}}
					>
						{#if copiedLink}
							<HugeiconsIcon icon={Tick01Icon} size={14} />
							<span>Copied!</span>
						{:else}
							<HugeiconsIcon icon={Copy01Icon} size={14} />
							<span>Copy</span>
						{/if}
					</button>
				</div>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "command"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN_OUT} {...props}>
						<span class="font-normal opacity-70">Search commands...</span>
						<kbd
							class="ml-6 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold"
							>⌘K</kbd
						>
					</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-xl gap-0 overflow-hidden p-0">
				<div class="flex items-center gap-2 border-b border-neutral-200 px-4 dark:border-white/10">
					<HugeiconsIcon icon={Search01Icon} size={16} class="shrink-0 text-neutral-400" />
					<input
						placeholder="Type a command or search pages..."
						bind:value={searchCmd}
						class="h-12 w-full border-0 bg-transparent px-0 text-sm text-neutral-900 shadow-none outline-none placeholder:text-neutral-400 focus:ring-0 dark:bg-transparent dark:text-white"
					/>
				</div>
				<div class="max-h-72 overflow-y-auto p-2">
					<p class="px-2.5 py-1.5 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">Quick Actions</p>
					{#each [{ icon: PlusSignIcon, label: "Create New Project", hint: "⌘N" }, { icon: File01Icon, label: "Open Documentation", hint: "⌘D" }, { icon: Settings01Icon, label: "Workspace Settings", hint: "⌘," }].filter( (i) => i.label
								.toLowerCase()
								.includes(searchCmd.toLowerCase()) ) as item (item.label)}
						<button
							type="button"
							class="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
						>
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
								><HugeiconsIcon icon={item.icon} size={13} /></span
							>
							<span class="font-medium">{item.label}</span>
							<kbd
								class="ml-auto rounded border border-neutral-200 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400 dark:border-white/10"
								>{item.hint}</kbd
							>
						</button>
					{/each}
					{#each [{ icon: ViewIcon, label: "Dashboard Overview" }, { icon: Folder01Icon, label: "All My Projects" }, { icon: Notification01Icon, label: "Notifications & Activity" }].filter( (i) => i.label
								.toLowerCase()
								.includes(searchCmd.toLowerCase()) ) as item (item.label)}
						<button
							type="button"
							class="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
						>
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
								><HugeiconsIcon icon={item.icon} size={13} /></span
							>
							<span class="font-medium">{item.label}</span>
							<HugeiconsIcon icon={ArrowRight01Icon} size={12} class="ml-auto text-neutral-400" />
						</button>
					{/each}
				</div>
				<div
					class="flex items-center gap-3 border-t border-neutral-200 bg-neutral-50 px-4 py-2.5 text-[10px] text-neutral-500 dark:border-white/10 dark:bg-white/5"
				>
					<span class="flex items-center gap-1"
						><kbd class="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900"
							>↑↓</kbd
						> navigate</span
					>
					<span class="flex items-center gap-1"
						><kbd class="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900"
							>↵</kbd
						> select</span
					>
					<span class="flex items-center gap-1"
						><kbd class="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900"
							>esc</kbd
						> close</span
					>
				</div>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "wizard"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Multi-Step Setup</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-4">
				<div class="flex items-center gap-1.5">
					{#each [1, 2, 3] as step (step)}
						<button
							type="button"
							onclick={() => (wizardStep = step)}
							class="h-1.5 flex-1 rounded-full transition-colors {step <= wizardStep
								? 'bg-neutral-900 dark:bg-white'
								: 'bg-neutral-200 dark:bg-white/10'}"
							aria-label="Go to step {step}"
						></button>
					{/each}
				</div>
				<DialogHeader>
					<p class="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Step {wizardStep} of 3</p>
					<DialogTitle>
						{#if wizardStep === 1}Name Your Project
						{:else if wizardStep === 2}Choose Your Stack
						{:else}Review & Launch{/if}
					</DialogTitle>
					<DialogDescription>
						{#if wizardStep === 1}This name appears on your dashboard and public URL.
						{:else if wizardStep === 2}Your stack determines the starter template and dependencies.
						{:else}Review the summary below before creating the workspace.{/if}
					</DialogDescription>
				</DialogHeader>

				<div class="py-1">
					{#if wizardStep === 1}
						<div class="space-y-3">
							<div class="space-y-1">
								<label for="wiz-name" class={INPUT_LABEL_CLASSES}>Project name</label>
								<input
									id="wiz-name"
									type="text"
									placeholder="e.g. acme-dashboard"
									bind:value={wizardProject}
									class={FIELD}
								/>
							</div>
							<div class="space-y-1">
								<label for="wiz-desc" class={INPUT_LABEL_CLASSES}>Short description (optional)</label>
								<textarea
									id="wiz-desc"
									rows={2}
									placeholder="Internal dashboard for the operations team..."
									class="{AREA} min-h-14 resize-none"></textarea>
							</div>
						</div>
					{:else if wizardStep === 2}
						<div class="grid grid-cols-2 gap-2">
							{#each [{ id: "svelte", name: "Svelte 5", desc: "Runes + Vite" }, { id: "react", name: "React 19", desc: "Vite + TS" }] as fw (fw.id)}
								<button
									type="button"
									onclick={() => (wizardFramework = fw.id)}
									class="rounded-md border p-3 text-left transition-all {wizardFramework === fw.id
										? 'border-neutral-900 bg-neutral-50 dark:border-white dark:bg-white/10'
										: 'border-neutral-200 hover:border-neutral-400 dark:border-white/10'}"
								>
									<p class="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
										{fw.name}
										{#if wizardFramework === fw.id}<HugeiconsIcon icon={Tick01Icon} size={14} />{/if}
									</p>
									<p class="mt-0.5 text-[11px] text-neutral-500">{fw.desc}</p>
								</button>
							{/each}
						</div>
					{:else}
						<div
							class="space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-xs dark:border-white/10 dark:bg-white/5"
						>
							<div class="flex justify-between gap-3">
								<span class="text-neutral-500">Project name</span><span
									class="font-semibold text-neutral-900 dark:text-white">{wizardProject || "acme-dashboard"}</span
								>
							</div>
							<div class="flex justify-between gap-3">
								<span class="text-neutral-500">Framework</span><span
									class="font-semibold text-neutral-900 dark:text-white"
									>{wizardFramework === "svelte" ? "Svelte 5" : "React 19"}</span
								>
							</div>
							<div class="flex justify-between gap-3">
								<span class="text-neutral-500">Deploy region</span><span
									class="font-semibold text-neutral-900 dark:text-white">Singapore (sin1)</span
								>
							</div>
							<div
								class="flex items-center gap-2 border-t border-neutral-200 pt-2 text-emerald-600 dark:border-white/10 dark:text-emerald-400"
							>
								<HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} /><span class="font-medium"
									>All requirements met</span
								>
							</div>
						</div>
					{/if}
				</div>

				<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
					{#if wizardStep > 1}
						<button type="button" class={BTN_SEC_SM} onclick={() => wizardStep--}>Back</button>
					{:else}
						<DialogClose>
							{#snippet child({ props })}
								<button type="button" class={BTN_SEC_SM} {...props}>Cancel</button>
							{/snippet}
						</DialogClose>
					{/if}
					{#if wizardStep < 3}
						<button type="button" class={BTN_SM} onclick={() => wizardStep++}>
							<span>Continue</span>
							<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
						</button>
					{:else}
						<DialogClose>
							{#snippet child({ props })}
								<button type="button" class={BTN_SM} {...props}>
									<HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
									<span>Create Workspace</span>
								</button>
							{/snippet}
						</DialogClose>
					{/if}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "auth"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Register</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-5">
				<div class="flex flex-col items-center text-center">
					<div
						class="flex size-11 items-center justify-center rounded-md bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900"
					>
						P
					</div>
					<DialogTitle class="mt-3 text-xl">Welcome Back</DialogTitle>
					<DialogDescription class="mt-1">Sign in to access your workspace dashboard.</DialogDescription>
				</div>
				<div class="grid grid-cols-3 gap-2">
					<button type="button" class={BTN_OUT_SM}
						><HugeiconsIcon icon={GoogleIcon} size={15} /><span>Google</span></button
					>
					<button type="button" class={BTN_OUT_SM}
						><HugeiconsIcon icon={GithubIcon} size={15} /><span>GitHub</span></button
					>
					<button type="button" class={BTN_OUT_SM}
						><HugeiconsIcon icon={AppleIcon} size={15} /><span>Apple</span></button
					>
				</div>
				<div class="flex items-center gap-3 text-[11px] text-neutral-400">
					<span class="h-px flex-1 bg-neutral-200 dark:bg-white/10"></span>
					<span>OR CONTINUE WITH EMAIL</span>
					<span class="h-px flex-1 bg-neutral-200 dark:bg-white/10"></span>
				</div>
				<div class="space-y-4">
					{#if authTab === "register"}
						<div class="space-y-1">
							<label for="auth-name" class={INPUT_LABEL_CLASSES}>Full name</label>
							<div class="relative">
								<HugeiconsIcon
									icon={UserIcon}
									size={15}
									class="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
								/>
								<input
									id="auth-name"
									type="text"
									placeholder="e.g. Jane Cooper"
									bind:value={authName}
									class="{FIELD} pl-9"
								/>
							</div>
						</div>
					{/if}
					<div class="space-y-1">
						<label for="auth-email" class={INPUT_LABEL_CLASSES}>Email</label>
						<div class="relative">
							<HugeiconsIcon
								icon={Mail01Icon}
								size={15}
								class="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
							/>
							<input
								id="auth-email"
								type="email"
								placeholder="name@company.com"
								bind:value={authEmail}
								class="{FIELD} pl-9"
							/>
						</div>
					</div>
					<div class="space-y-1">
						<div class="flex items-center justify-between gap-3">
							<label for="auth-pass" class={INPUT_LABEL_CLASSES}>Password</label>
							{#if authTab === "login"}<button
									type="button"
									class="mb-1.5 text-[11px] font-medium whitespace-nowrap text-neutral-900 underline-offset-2 hover:underline dark:text-white"
									>Forgot password?</button
								>{/if}
						</div>
						<input
							id="auth-pass"
							type="password"
							placeholder="Minimum 8 characters"
							bind:value={authPass}
							class={FIELD}
						/>
					</div>
				</div>
				<button
					type="button"
					class="{BTN} w-full"
					disabled={isAuthLoading}
					onclick={() => {
						isAuthLoading = true;
						setTimeout(() => (isAuthLoading = false), 1800);
					}}
				>
					{isAuthLoading ? "Signing in..." : authTab === "login" ? "Sign In to Dashboard" : "Create Account"}
				</button>
				<p class="text-center text-xs text-neutral-500">
					{#if authTab === "login"}
						Don't have an account? <button
							type="button"
							onclick={() => (authTab = "register")}
							class="font-semibold text-neutral-900 underline-offset-2 hover:underline dark:text-white"
							>Sign up free</button
						>
					{:else}
						Already have an account? <button
							type="button"
							onclick={() => (authTab = "login")}
							class="font-semibold text-neutral-900 underline-offset-2 hover:underline dark:text-white"
							>Sign in here</button
						>
					{/if}
				</p></DialogContent
			>
		</Dialog>
	</div>
{:else if variant === "file-upload"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Upload Attachment</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-4">
				<DialogHeader>
					<DialogTitle>Attach Project Files</DialogTitle>
					<DialogDescription>Drag files into the area below or browse from your device.</DialogDescription>
				</DialogHeader>
				<button
					type="button"
					onclick={() => {
						isUploading = true;
						setTimeout(() => (isUploading = false), 2000);
					}}
					class="flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-6 text-center transition-colors hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30"
				>
					{#if isUploading}
						<div class="flex items-center gap-3 py-2">
							<div
								class="size-6 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-white/20 dark:border-t-white"
							></div>
							<div class="text-left">
								<p class="text-xs font-semibold text-neutral-900 dark:text-white">design-system-v2.fig · 68%</p>
								<div class="mt-1.5 h-1 w-44 overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
									<div class="h-full w-2/3 rounded-full bg-neutral-900 dark:bg-white"></div>
								</div>
							</div>
						</div>
					{:else}
						<span
							class="flex size-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300"
							><HugeiconsIcon icon={Upload01Icon} size={18} /></span
						>
						<p class="mt-3 text-xs font-semibold text-neutral-900 dark:text-white">Drag & drop files here</p>
						<p class="text-[11px] text-neutral-500">PDF, FIG, PNG, ZIP • Max 25MB per file</p>
						<span
							class="mt-3 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300"
							>Browse files</span
						>
					{/if}
				</button>
				<div class="space-y-2">
					<div class="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10">
						<span
							class="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
							><HugeiconsIcon icon={File01Icon} size={15} /></span
						>
						<div class="min-w-0 flex-1">
							<p class="truncate text-xs font-semibold text-neutral-900 dark:text-white">project-brief-q3.pdf</p>
							<p class="mt-0.5 text-[11px] text-neutral-500">2.4 MB • Upload complete</p>
						</div>
						<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} class="shrink-0 text-emerald-500" />
					</div>
					<div class="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10">
						<span
							class="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
							><HugeiconsIcon icon={Image01Icon} size={15} /></span
						>
						<div class="min-w-0 flex-1">
							<p class="truncate text-xs font-semibold text-neutral-900 dark:text-white">homepage-mockup.png</p>
							<p class="mt-0.5 text-[11px] text-neutral-500">4.1 MB • Upload complete</p>
						</div>
						<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} class="shrink-0 text-emerald-500" />
					</div>
				</div>
				<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
					<span class="mr-auto text-[11px] text-neutral-400">2 of 5 slots used</span>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SM} {...props}>Done</button>
						{/snippet}
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "cookie-consent"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Cookie Preferences</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-4">
				<DialogHeader>
					<div class="flex items-start gap-3 text-left">
						<div
							class="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
						>
							<HugeiconsIcon icon={Shield01Icon} size={18} />
						</div>
						<div>
							<DialogTitle>Privacy Preference Center</DialogTitle>
							<DialogDescription>Manage tracking permissions for a transparent experience.</DialogDescription>
						</div>
					</div>
				</DialogHeader>
				<div class="space-y-3">
					<div class="flex items-start gap-3 rounded-md border border-neutral-200 p-3 dark:border-white/10">
						<HugeiconsIcon icon={Shield01Icon} size={15} class="mt-0.5 shrink-0 text-neutral-500" />
						<div>
							<p class="text-xs font-semibold text-neutral-900 dark:text-white">
								Essential & Functional <span
									class="ml-1 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-white/10"
									>Always on</span
								>
							</p>
							<p class="mt-1 text-[11px] leading-relaxed text-neutral-500">
								Sign-in, session security, and language preferences. Cannot be disabled.
							</p>
						</div>
					</div>
					<div
						class="flex items-start justify-between gap-3 rounded-md border border-neutral-200 p-3 dark:border-white/10"
					>
						<div class="flex items-start gap-2.5">
							<HugeiconsIcon icon={ViewIcon} size={15} class="mt-0.5 shrink-0 text-neutral-500" />
							<div>
								<p class="text-xs font-semibold text-neutral-900 dark:text-white">Analytics & Performance</p>
								<p class="mt-1 text-[11px] leading-relaxed text-neutral-500">
									Helps us understand which pages are visited most.
								</p>
							</div>
						</div>
						<button
							type="button"
							role="switch"
							aria-checked={cookieAnalytics}
							aria-label="Enable analytics cookies"
							onclick={() => (cookieAnalytics = !cookieAnalytics)}
							class="relative h-5 w-9 shrink-0 rounded-full transition-colors {cookieAnalytics
								? 'bg-neutral-900 dark:bg-white'
								: 'bg-neutral-200 dark:bg-white/15'}"
						>
							<span
								class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform {cookieAnalytics
									? 'translate-x-4 dark:bg-neutral-900'
									: ''}"
							></span>
						</button>
					</div>
					<div
						class="flex items-start justify-between gap-3 rounded-md border border-neutral-200 p-3 dark:border-white/10"
					>
						<div class="flex items-start gap-2.5">
							<HugeiconsIcon icon={GlobeIcon} size={15} class="mt-0.5 shrink-0 text-neutral-500" />
							<div>
								<p class="text-xs font-semibold text-neutral-900 dark:text-white">Marketing & Ads</p>
								<p class="mt-1 text-[11px] leading-relaxed text-neutral-500">
									Content personalization and ad campaign measurement.
								</p>
							</div>
						</div>
						<button
							type="button"
							role="switch"
							aria-checked={cookieMarketing}
							aria-label="Enable marketing cookies"
							onclick={() => (cookieMarketing = !cookieMarketing)}
							class="relative h-5 w-9 shrink-0 rounded-full transition-colors {cookieMarketing
								? 'bg-neutral-900 dark:bg-white'
								: 'bg-neutral-200 dark:bg-white/15'}"
						>
							<span
								class="absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform {cookieMarketing
									? 'translate-x-4 dark:bg-neutral-900'
									: ''}"
							></span>
						</button>
					</div>
				</div>
				<DialogFooter
					class="grid grid-cols-2 gap-3 border-t border-neutral-200 pt-4 sm:justify-stretch dark:border-white/10"
				>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SEC_SM} w-full" {...props}>Reject All</button>
						{/snippet}
					</DialogClose>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SM} w-full" {...props}>Save Choices</button>
						{/snippet}
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "media"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>View Media Lightbox</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-lg gap-0 overflow-hidden p-0">
				<div class="relative">
					<img
						src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"
						alt="Tropical beach"
						class="aspect-video w-full object-cover"
					/>
					<span
						class="absolute top-3 left-3 rounded bg-black/50 px-2 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-sm"
						>IMG_2048 • 4K</span
					>
				</div>
				<div class="space-y-4 p-5">
					<div class="flex items-start justify-between gap-4">
						<div class="min-w-0">
							<DialogTitle class="text-base">Tropical Beach Sunset</DialogTitle>
							<DialogDescription class="mt-1.5 flex items-center gap-1.5"
								><HugeiconsIcon icon={Folder01Icon} size={12} /> Bali Trip 2026 / Kuta Beach • Sep 12, 2026</DialogDescription
							>
						</div>
						<button type="button" class="{BTN_SM} shrink-0">
							<HugeiconsIcon icon={Download01Icon} size={14} />
							<span>Download</span>
						</button>
					</div>
					<div class="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-4 text-center dark:border-white/10">
						<div class="space-y-1">
							<p class="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Resolution</p>
							<p class="text-xs font-semibold text-neutral-900 dark:text-white">3840 × 2160</p>
						</div>
						<div class="space-y-1">
							<p class="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Size</p>
							<p class="text-xs font-semibold text-neutral-900 dark:text-white">8.2 MB</p>
						</div>
						<div class="space-y-1">
							<p class="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Format</p>
							<p class="text-xs font-semibold text-neutral-900 dark:text-white">JPEG</p>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "fullscreen"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Full Workspace Editor</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="flex h-[75vh] w-[90vw] max-w-4xl min-w-[min(90vw,20rem)] flex-col gap-0">
				<div class="flex items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4 dark:border-white/10">
					<div class="flex min-w-0 flex-1 items-center gap-3">
						<span
							class="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
							><HugeiconsIcon icon={TextBoldIcon} size={18} /></span
						>
						<div class="min-w-0 flex-1">
							<input
								type="text"
								placeholder="Untitled note..."
								bind:value={noteTitle}
								class="h-8 w-full border-0 bg-transparent p-0 text-base font-semibold text-neutral-900 shadow-none ring-0 outline-none placeholder:text-neutral-400 focus:border-0 focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none dark:bg-transparent dark:text-white"
							/>
							<p class="mt-0.5 text-[11px] text-neutral-400">Saved 2 minutes ago • Auto-draft</p>
						</div>
					</div>
					<span
						class="hidden shrink-0 items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 sm:flex dark:bg-emerald-500/15 dark:text-emerald-400"
						><span class="size-1.5 rounded-full bg-emerald-500"></span> Saved</span
					>
				</div>
				<div class="flex items-center gap-1 border-b border-neutral-200 px-6 py-2.5 dark:border-white/10">
					{#each [{ icon: TextBoldIcon, label: "Bold" }, { icon: ListViewIcon, label: "List" }, { icon: Image01Icon, label: "Image" }, { icon: Attachment01Icon, label: "Attachment" }] as tool (tool.label)}
						<button
							type="button"
							title={tool.label}
							aria-label={tool.label}
							class="flex size-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
							><HugeiconsIcon icon={tool.icon} size={15} /></button
						>
					{/each}
					<span class="ml-auto hidden text-[11px] whitespace-nowrap text-neutral-400 sm:block"
						>{noteBody.length} / 5000 characters</span
					>
				</div>
				<div class="min-h-0 flex-1 px-6 py-4">
					<textarea
						placeholder="Start writing your documentation here... Use the toolbar above for formatting, lists, and image attachments."
						bind:value={noteBody}
						class="h-full min-h-56 w-full resize-none border-0 bg-transparent p-0 text-sm leading-relaxed text-neutral-900 shadow-none ring-0 outline-none placeholder:text-neutral-400 focus:border-0 focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none dark:bg-transparent dark:text-white"
					></textarea>
				</div>
				<div
					class="flex flex-col-reverse gap-2 border-t border-neutral-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-end dark:border-white/10"
				>
					<span class="mr-auto hidden items-center gap-1.5 text-[11px] text-neutral-400 sm:flex"
						><HugeiconsIcon icon={InformationCircleIcon} size={13} /> Supports Markdown & / shortcuts</span
					>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class={BTN_SEC_SM} {...props}>Close</button>
						{/snippet}
					</DialogClose>
					<button
						type="button"
						class={BTN_SM}
						onclick={() => {
							isNotePublished = true;
							setTimeout(() => (isNotePublished = false), 2000);
						}}
					>
						{#if isNotePublished}
							<HugeiconsIcon icon={Tick01Icon} size={14} />
							<span>Published!</span>
						{:else}
							<span>Publish</span>
							<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
						{/if}
					</button>
				</div>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "status"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Status Alert Notification</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-sm gap-4">
				<div class="flex flex-col items-center text-center">
					<span
						class="relative flex size-14 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
					>
						<HugeiconsIcon icon={CheckmarkCircle02Icon} size={30} />
					</span>
					<DialogTitle class="mt-4 text-lg">Payment Successful</DialogTitle>
					<DialogDescription class="mt-1.5"
						>Your Pro Workspace subscription is active until Oct 24, 2026.</DialogDescription
					>
				</div>
				<div
					class="space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-xs dark:border-white/10 dark:bg-white/5"
				>
					<div class="flex justify-between gap-3">
						<span class="text-neutral-500">Invoice number</span><span
							class="font-mono font-semibold text-neutral-900 dark:text-white">INV-2026-0912</span
						>
					</div>
					<div class="flex justify-between gap-3">
						<span class="text-neutral-500">Payment method</span><span
							class="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white"
							><HugeiconsIcon icon={Wallet01Icon} size={13} /> Visa •• 4421</span
						>
					</div>
					<div class="flex justify-between gap-3 border-t border-neutral-200 pt-2 dark:border-white/10">
						<span class="text-neutral-500">Total paid</span><span class="font-bold text-neutral-900 dark:text-white"
							>$129.00</span
						>
					</div>
				</div>
				<DialogFooter class="grid grid-cols-2 gap-3 sm:justify-stretch">
					<button type="button" class="{BTN_SEC_SM} w-full">
						<HugeiconsIcon icon={Download01Icon} size={14} />
						<span>Download Receipt</span>
					</button>
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SM} w-full" {...props}>Back</button>
						{/snippet}
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "form"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Feedback & Support Ticket</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-w-md gap-4">
				{#if feedbackSent}
					<div class="flex flex-col items-center py-6 text-center">
						<span
							class="flex size-12 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
							><HugeiconsIcon icon={CheckmarkCircle02Icon} size={26} /></span
						>
						<DialogTitle class="mt-4">Ticket Submitted!</DialogTitle>
						<DialogDescription class="mt-1.5"
							>Your ticket <span class="font-mono font-semibold text-neutral-900 dark:text-white">#SUP-4812</span>.
							Expected response within 4 business hours.</DialogDescription
						>
						<DialogClose>
							{#snippet child({ props })}
								<button type="button" class="{BTN_SM} mt-4" {...props}>Back to App</button>
							{/snippet}
						</DialogClose>
					</div>
				{:else}
					<DialogHeader>
						<div class="flex items-start gap-3 text-left">
							<span
								class="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
								><HugeiconsIcon icon={SparklesIcon} size={18} /></span
							>
							<div>
								<DialogTitle>Report an Issue</DialogTitle>
								<DialogDescription>Describe the problem — our support team is here 24/7.</DialogDescription>
							</div>
						</div>
					</DialogHeader>
					<div class="space-y-4 py-1">
						<div class="grid grid-cols-3 gap-2">
							{#each ["UI Bug", "Question", "New Feature"] as topic (topic)}
								<button
									type="button"
									onclick={() => (feedbackTopic = topic)}
									class="rounded-md border px-2 py-2 text-[11px] font-semibold transition-all {feedbackTopic === topic
										? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
										: 'border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-white/10 dark:text-neutral-400'}"
									>{topic}</button
								>
							{/each}
						</div>
						<div class="grid grid-cols-2 gap-3">
							<div class="space-y-1">
								<label for="fb-name" class={INPUT_LABEL_CLASSES}>Name</label>
								<input id="fb-name" type="text" placeholder="e.g. Jane Cooper" class={FIELD} />
							</div>
							<div class="space-y-1">
								<label for="fb-email" class={INPUT_LABEL_CLASSES}>Email</label>
								<input id="fb-email" type="email" placeholder="e.g. jane@company.com" class={FIELD} />
							</div>
						</div>
						<div class="space-y-1">
							<label for="fb-desc" class={INPUT_LABEL_CLASSES}>Detailed description</label>
							<textarea
								id="fb-desc"
								rows={3}
								placeholder="Steps to reproduce, error messages, and what you expected..."
								bind:value={feedbackDesc}
								class="{AREA} min-h-20 resize-none"></textarea>
							<p class="text-right text-[11px] text-neutral-400">{feedbackDesc.length}/500</p>
						</div>
					</div>
					<DialogFooter class="border-t border-neutral-200 pt-4 dark:border-white/10">
						<DialogClose>
							{#snippet child({ props })}
								<button type="button" class={BTN_SEC_SM} {...props}>Cancel</button>
							{/snippet}
						</DialogClose>
						<button type="button" class={BTN_SM} onclick={() => (feedbackSent = true)}>
							<span>Send Support Ticket</span>
							<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
						</button>
					</DialogFooter>
				{/if}
			</DialogContent>
		</Dialog>
	</div>
{:else if variant === "sheet"}
	<div class="flex items-center justify-center p-4">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<button type="button" class={BTN} {...props}>Side Panel Settings</button>
				{/snippet}
			</DialogTrigger>
			<DialogContent
				class="top-0 right-0 left-auto h-full max-w-sm translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none border-l p-0"
			>
				<div class="flex items-center gap-3 border-b border-neutral-200 p-4 dark:border-white/10">
					<span
						class="flex size-9 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
						><HugeiconsIcon icon={Settings01Icon} size={17} /></span
					>
					<div>
						<DialogTitle class="text-sm">Quick Settings</DialogTitle>
						<DialogDescription class="text-[11px]">Personalize your workspace appearance.</DialogDescription>
					</div>
				</div>
				<div class="flex-1 space-y-5 p-4">
					<section class="space-y-2">
						<p class="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Appearance</p>
						<div class="grid grid-cols-3 gap-2">
							{#each [{ id: "system", label: "System" }, { id: "light", label: "Light" }, { id: "dark", label: "Dark" }] as theme (theme.id)}
								<button
									type="button"
									class="flex flex-col items-center gap-1.5 rounded-md border border-neutral-200 p-2.5 transition-all hover:border-neutral-400 dark:border-white/10"
								>
									<span
										class="size-6 rounded border border-neutral-300 {theme.id === 'dark'
											? 'bg-neutral-900'
											: theme.id === 'light'
												? 'bg-white'
												: 'bg-gradient-to-r from-white from-50% to-neutral-900 to-50%'}"
									></span>
									<span class="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">{theme.label}</span>
								</button>
							{/each}
						</div>
					</section>
					<section class="space-y-2">
						<p class="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Notifications</p>
						{#each [{ icon: Mail01Icon, label: "Weekly email digest", desc: "Workspace activity summary" }, { icon: Notification01Icon, label: "Deploy finished push", desc: "Real-time browser notifications" }] as item (item.label)}
							<div class="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10">
								<HugeiconsIcon icon={item.icon} size={15} class="shrink-0 text-neutral-500" />
								<div class="min-w-0 flex-1">
									<p class="truncate text-xs font-semibold text-neutral-900 dark:text-white">{item.label}</p>
									<p class="truncate text-[11px] text-neutral-500">{item.desc}</p>
								</div>
								<span class="relative h-5 w-9 shrink-0 rounded-full bg-neutral-900 dark:bg-white"
									><span
										class="absolute top-0.5 left-0.5 size-4 translate-x-4 rounded-full bg-white shadow dark:bg-neutral-900"
									></span></span
								>
							</div>
						{/each}
					</section>
					<section class="space-y-2">
						<p class="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Session</p>
						<div class="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[11px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
								>RP</span
							>
							<div class="min-w-0 flex-1">
								<p class="truncate text-xs font-semibold text-neutral-900 dark:text-white">jane@company.com</p>
								<p class="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
									<span class="size-1.5 rounded-full bg-emerald-500"></span> Online
								</p>
							</div>
						</div>
					</section>
				</div>
				<div class="border-t border-neutral-200 p-4 dark:border-white/10">
					<DialogClose>
						{#snippet child({ props })}
							<button type="button" class="{BTN_SM} w-full" {...props}>Save & Apply</button>
						{/snippet}
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	</div>
{/if}
