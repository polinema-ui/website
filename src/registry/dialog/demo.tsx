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
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDefault() {
	const [name, setName] = React.useState("Jane Cooper");
	const [username, setUsername] = React.useState("@janecooper");
	const [role, setRole] = React.useState("Senior Frontend Engineer");
	const [bio, setBio] = React.useState("Building modern web interfaces with Svelte 5 and Tailwind CSS.");
	const [isSaved, setIsSaved] = React.useState(false);

	const handleSave = () => {
		setIsSaved(true);
		setTimeout(() => setIsSaved(false), 2000);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Edit Profile</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<div className="flex items-center gap-3 text-left">
							<div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
								JC
							</div>
							<div>
								<DialogTitle>Edit Profile</DialogTitle>
								<DialogDescription>Update your public photo, name, and bio.</DialogDescription>
							</div>
						</div>
					</DialogHeader>
					<div className="grid grid-cols-2 gap-3 py-2">
						<div className="space-y-1">
							<label
								htmlFor="name"
								className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
							>
								Full Name
							</label>
							<Input
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="e.g. Jane Cooper"
								className="rounded-md"
							/>
						</div>
						<div className="space-y-1">
							<label
								htmlFor="username"
								className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
							>
								Username
							</label>
							<Input
								id="username"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="e.g. @janecooper"
								className="rounded-md"
							/>
						</div>
						<div className="col-span-2 space-y-1">
							<label
								htmlFor="role"
								className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
							>
								Job Title
							</label>
							<Input
								id="role"
								type="text"
								value={role}
								onChange={(e) => setRole(e.target.value)}
								placeholder="e.g. Frontend Engineer"
								className="rounded-md"
							/>
						</div>
						<div className="col-span-2 space-y-1">
							<label
								htmlFor="bio"
								className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
							>
								Short Bio
							</label>
							<Textarea
								id="bio"
								value={bio}
								onChange={(e) => setBio(e.target.value)}
								rows={2}
								placeholder="Tell us a little about yourself..."
								className="min-h-14 resize-none rounded-md"
							/>
						</div>
					</div>
					<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
						<DialogClose asChild>
							<Button variant="secondary" size="sm">
								Cancel
							</Button>
						</DialogClose>
						<Button size="sm" onClick={handleSave}>
							{isSaved ? (
								<>
									<HugeiconsIcon icon={Tick01Icon} size={14} />
									<span>Saved!</span>
								</>
							) : (
								<span>Save Changes</span>
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogCustomClose() {
	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Discard Confirmation</Button>
				</DialogTrigger>
				<DialogContent showCloseButton={false} className="max-w-sm">
					<div className="flex flex-col items-center text-center">
						<div className="flex size-11 items-center justify-center rounded-md bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
							<HugeiconsIcon icon={AlertCircleIcon} size={22} />
						</div>
						<DialogTitle className="mt-4">Discard Unsaved Changes?</DialogTitle>
						<DialogDescription className="mt-2">
							You have unsaved changes. Leaving now will permanently delete this draft.
						</DialogDescription>
					</div>
					<DialogFooter className="mt-2 grid grid-cols-2 gap-3 sm:justify-stretch">
						<DialogClose asChild>
							<Button variant="secondary" size="sm" className="w-full">
								Stay Here
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button size="sm" className="w-full">
								Discard Draft
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogScrollable() {
	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Terms of Service</Button>
				</DialogTrigger>
				<DialogContent className="max-w-lg">
					<DialogHeader>
						<div className="flex items-start gap-3 text-left">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
								<HugeiconsIcon icon={File01Icon} size={18} />
							</div>
							<div>
								<DialogTitle>Terms of Service</DialogTitle>
								<DialogDescription>Last updated Sep 24, 2026 • v2.4.1</DialogDescription>
							</div>
						</div>
					</DialogHeader>
					<div className="max-h-64 space-y-4 overflow-y-auto rounded-md border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
						<section>
							<p className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
								<span className="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10">
									1
								</span>{" "}
								General Terms
							</p>
							<p className="mt-1.5">
								By accessing this platform, you agree to these terms and all applicable laws. You are responsible for
								complying with your local regulations.
							</p>
						</section>
						<section>
							<p className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
								<span className="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10">
									2
								</span>{" "}
								Usage License
							</p>
							<p className="mt-1.5">
								Permission is granted to temporarily download one copy of the materials for personal, non-commercial
								viewing only. This is a license grant, not a transfer of ownership.
							</p>
						</section>
						<section>
							<p className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
								<span className="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10">
									3
								</span>{" "}
								Limitation of Liability
							</p>
							<p className="mt-1.5">
								In no event shall Polinema UI or its suppliers be liable for any damages arising from the use or
								inability to use the materials on our platform.
							</p>
						</section>
						<section>
							<p className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
								<span className="flex size-5 items-center justify-center rounded bg-neutral-200 text-[10px] dark:bg-white/10">
									4
								</span>{" "}
								Privacy & Data
							</p>
							<p className="mt-1.5">
								Our privacy policy explains how we collect, use, and protect your personal information when you use our
								services.
							</p>
						</section>
					</div>
					<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
						<p className="mr-auto hidden items-center gap-1 text-[11px] text-neutral-400 sm:flex">
							<HugeiconsIcon icon={Shield01Icon} size={12} /> Encrypted document
						</p>
						<DialogClose asChild>
							<Button variant="secondary" size="sm">
								Decline
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button size="sm">I Agree</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogDestructive() {
	const [input, setInput] = React.useState("");
	const [isDeleting, setIsDeleting] = React.useState(false);

	const handleDelete = () => {
		setIsDeleting(true);
		setTimeout(() => setIsDeleting(false), 2000);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="destructive" size="sm">
						<HugeiconsIcon icon={Delete01Icon} size={14} />
						<span>Delete Account</span>
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<div className="flex items-start gap-3 text-left">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400">
								<HugeiconsIcon icon={Delete01Icon} size={18} />
							</div>
							<div>
								<DialogTitle>Delete This Workspace?</DialogTitle>
								<DialogDescription>
									This will permanently delete{" "}
									<span className="font-semibold text-neutral-900 dark:text-white">12 projects</span>, 8 team members,
									and all deploy history.
								</DialogDescription>
							</div>
						</div>
					</DialogHeader>
					<div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs leading-relaxed text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300">
						<p className="font-semibold">Warning: this action cannot be undone.</p>
						<p className="mt-0.5">
							Type <span className="rounded bg-red-600 px-1.5 py-0.5 font-mono font-bold text-white">DELETE</span> in
							the field below to confirm.
						</p>
					</div>
					<div className="space-y-1">
						<label
							htmlFor="del-confirm"
							className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
						>
							Delete confirmation
						</label>
						<Input
							id="del-confirm"
							type="text"
							placeholder="Type DELETE to continue"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="rounded-md"
						/>
					</div>
					<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
						<DialogClose asChild>
							<Button variant="secondary" size="sm">
								Cancel
							</Button>
						</DialogClose>
						<Button variant="destructive" size="sm" disabled={input.trim() !== "DELETE"} onClick={handleDelete}>
							{isDeleting ? "Deleting..." : "Delete Permanently"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogShare() {
	const [copied, setCopied] = React.useState(false);
	const members = [
		{ name: "Jane Cooper", role: "Owner", initials: "JC" },
		{ name: "Alex Morgan", role: "Editor", initials: "AM" },
		{ name: "Sam Wilson", role: "Viewer", initials: "SW" },
	];

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Share Project</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-4">
					<DialogHeader>
						<DialogTitle>Invite Team Members</DialogTitle>
						<DialogDescription>Share an invite link or send invites by email to collaborate.</DialogDescription>
					</DialogHeader>
					<div className="space-y-1">
						<label
							htmlFor="invite-email"
							className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
						>
							Invite by email
						</label>
						<div className="flex gap-2">
							<div className="relative flex-1">
								<HugeiconsIcon
									icon={Mail01Icon}
									size={15}
									className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
								/>
								<Input
									id="invite-email"
									type="email"
									placeholder="e.g. teammate@company.com"
									className="rounded-md pl-9"
								/>
							</div>
							<Button className="h-10 shrink-0">Invite</Button>
						</div>
					</div>
					<div className="space-y-2">
						<p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Active members (3)</p>
						{members.map((member) => (
							<div
								key={member.name}
								className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 p-2 dark:border-white/10"
							>
								<div className="flex min-w-0 items-center gap-2.5">
									<div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[11px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
										{member.initials}
									</div>
									<div className="min-w-0">
										<p className="truncate text-xs font-semibold text-neutral-900 dark:text-white">{member.name}</p>
										<p className="text-[11px] text-neutral-500">{member.role}</p>
									</div>
								</div>
								<span className="shrink-0 rounded bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600 dark:bg-white/10 dark:text-neutral-400">
									{member.role}
								</span>
							</div>
						))}
					</div>
					<div className="flex items-center gap-2 rounded-md bg-neutral-50 p-2 dark:bg-white/5">
						<Input
							type="text"
							readOnly
							value="https://polinema-ui.com/invite/abc-123"
							className="h-8 rounded-md font-mono text-[11px]"
						/>
						<Button size="sm" className="h-8 shrink-0" onClick={handleCopy}>
							{copied ? (
								<>
									<HugeiconsIcon icon={Tick01Icon} size={14} />
									<span>Copied!</span>
								</>
							) : (
								<>
									<HugeiconsIcon icon={Copy01Icon} size={14} />
									<span>Copy</span>
								</>
							)}
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogCommand() {
	const [cmd, setCmd] = React.useState("");
	const actions = [
		{ icon: PlusSignIcon, label: "Create New Project", hint: "⌘N" },
		{ icon: File01Icon, label: "Open Documentation", hint: "⌘D" },
		{ icon: Settings01Icon, label: "Workspace Settings", hint: "⌘," },
	].filter((i) => i.label.toLowerCase().includes(cmd.toLowerCase()));
	const navs = [
		{ icon: ViewIcon, label: "Dashboard Overview" },
		{ icon: Folder01Icon, label: "All My Projects" },
		{ icon: Notification01Icon, label: "Notifications & Activity" },
	].filter((i) => i.label.toLowerCase().includes(cmd.toLowerCase()));

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">
						<HugeiconsIcon icon={Search01Icon} size={14} />
						<span className="font-normal opacity-70">Search commands...</span>
						<kbd className="ml-6 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold">
							⌘K
						</kbd>
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-xl gap-0 overflow-hidden p-0">
					<div className="flex items-center gap-2 border-b border-neutral-200 px-4 dark:border-white/10">
						<HugeiconsIcon icon={Search01Icon} size={16} className="shrink-0 text-neutral-400" />
						<Input
							type="text"
							placeholder="Type a command or search pages..."
							value={cmd}
							onChange={(e) => setCmd(e.target.value)}
							className="h-12 rounded-md border-0 bg-transparent px-0 text-sm text-neutral-900 shadow-none outline-none focus-visible:ring-0 dark:bg-transparent dark:text-white"
						/>
					</div>
					<div className="max-h-72 overflow-y-auto p-2">
						<p className="px-2.5 py-1.5 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
							Quick Actions
						</p>
						{actions.map((item) => (
							<button
								key={item.label}
								type="button"
								className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
							>
								<span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
									<HugeiconsIcon icon={item.icon} size={13} />
								</span>
								<span className="font-medium">{item.label}</span>
								<kbd className="ml-auto rounded border border-neutral-200 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400 dark:border-white/10">
									{item.hint}
								</kbd>
							</button>
						))}
						<p className="px-2.5 pt-3 pb-1.5 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
							Navigation
						</p>
						{navs.map((item) => (
							<button
								key={item.label}
								type="button"
								className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
							>
								<span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
									<HugeiconsIcon icon={item.icon} size={13} />
								</span>
								<span className="font-medium">{item.label}</span>
								<HugeiconsIcon icon={ArrowRight01Icon} size={12} className="ml-auto text-neutral-400" />
							</button>
						))}
					</div>
					<div className="flex items-center gap-3 border-t border-neutral-200 bg-neutral-50 px-4 py-2.5 text-[10px] text-neutral-500 dark:border-white/10 dark:bg-white/5">
						<span className="flex items-center gap-1">
							<kbd className="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900">
								↑↓
							</kbd>{" "}
							navigate
						</span>
						<span className="flex items-center gap-1">
							<kbd className="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900">
								↵
							</kbd>{" "}
							select
						</span>
						<span className="flex items-center gap-1">
							<kbd className="rounded border border-neutral-200 bg-white px-1 dark:border-white/10 dark:bg-neutral-900">
								esc
							</kbd>{" "}
							close
						</span>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogWizard() {
	const [step, setStep] = React.useState(1);
	const [project, setProject] = React.useState("");
	const [framework, setFramework] = React.useState("svelte");

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Multi-Step Setup</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-4">
					<div className="flex items-center gap-1.5">
						{[1, 2, 3].map((s) => (
							<button
								key={s}
								type="button"
								onClick={() => setStep(s)}
								className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? "bg-neutral-900 dark:bg-white" : "bg-neutral-200 dark:bg-white/10"}`}
								aria-label={`Go to step ${s}`}
							/>
						))}
					</div>
					<DialogHeader>
						<p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Step {step} of 3</p>
						<DialogTitle>
							{step === 1 ? "Name Your Project" : step === 2 ? "Choose Your Stack" : "Review & Launch"}
						</DialogTitle>
						<DialogDescription>
							{step === 1
								? "This name appears on your dashboard and public URL."
								: step === 2
									? "Your stack determines the starter template and dependencies."
									: "Review the summary below before creating the workspace."}
						</DialogDescription>
					</DialogHeader>

					<div className="py-1">
						{step === 1 && (
							<div className="space-y-3">
								<div className="space-y-1">
									<label
										htmlFor="wiz-name"
										className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
									>
										Project name
									</label>
									<Input
										id="wiz-name"
										type="text"
										placeholder="e.g. acme-dashboard"
										value={project}
										onChange={(e) => setProject(e.target.value)}
										className="rounded-md"
									/>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="wiz-desc"
										className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
									>
										Short description (optional)
									</label>
									<Textarea
										id="wiz-desc"
										rows={2}
										placeholder="Internal dashboard for the operations team..."
										className="min-h-14 resize-none rounded-md"
									/>
								</div>
							</div>
						)}
						{step === 2 && (
							<div className="grid grid-cols-2 gap-2">
								{[
									{ id: "svelte", name: "Svelte 5", desc: "Runes + Vite" },
									{ id: "react", name: "React 19", desc: "Vite + TS" },
								].map((fw) => (
									<button
										key={fw.id}
										type="button"
										onClick={() => setFramework(fw.id)}
										className={`rounded-md border p-3 text-left transition-all ${framework === fw.id ? "border-neutral-900 bg-neutral-50 dark:border-white dark:bg-white/10" : "border-neutral-200 hover:border-neutral-400 dark:border-white/10"}`}
									>
										<p className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
											{fw.name}
											{framework === fw.id && <HugeiconsIcon icon={Tick01Icon} size={14} />}
										</p>
										<p className="mt-0.5 text-[11px] text-neutral-500">{fw.desc}</p>
									</button>
								))}
							</div>
						)}
						{step === 3 && (
							<div className="space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-xs dark:border-white/10 dark:bg-white/5">
								<div className="flex justify-between gap-3">
									<span className="text-neutral-500">Project name</span>
									<span className="font-semibold text-neutral-900 dark:text-white">{project || "acme-dashboard"}</span>
								</div>
								<div className="flex justify-between gap-3">
									<span className="text-neutral-500">Framework</span>
									<span className="font-semibold text-neutral-900 dark:text-white">
										{framework === "svelte" ? "Svelte 5" : "React 19"}
									</span>
								</div>
								<div className="flex justify-between gap-3">
									<span className="text-neutral-500">Deploy region</span>
									<span className="font-semibold text-neutral-900 dark:text-white">Singapore (sin1)</span>
								</div>
								<div className="flex items-center gap-2 border-t border-neutral-200 pt-2 text-emerald-600 dark:border-white/10 dark:text-emerald-400">
									<HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
									<span className="font-medium">All requirements met</span>
								</div>
							</div>
						)}
					</div>

					<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
						{step > 1 ? (
							<Button variant="secondary" size="sm" onClick={() => setStep(step - 1)}>
								Back
							</Button>
						) : (
							<DialogClose asChild>
								<Button variant="secondary" size="sm">
									Cancel
								</Button>
							</DialogClose>
						)}
						{step < 3 ? (
							<Button size="sm" onClick={() => setStep(step + 1)}>
								<span>Continue</span>
								<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
							</Button>
						) : (
							<DialogClose asChild>
								<Button size="sm">
									<HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
									<span>Create Workspace</span>
								</Button>
							</DialogClose>
						)}
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogAuth() {
	const [tab, setTab] = React.useState<"login" | "register">("login");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [pass, setPass] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const submit = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 1800);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Register</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-5">
					<div className="flex flex-col items-center text-center">
						<div className="flex size-11 items-center justify-center rounded-md bg-neutral-900 text-sm font-bold text-white dark:bg-white dark:text-neutral-900">
							P
						</div>
						<DialogTitle className="mt-3 text-xl">Welcome Back</DialogTitle>
						<DialogDescription className="mt-1">Sign in to access your workspace dashboard.</DialogDescription>
					</div>
					<div className="grid grid-cols-3 gap-2">
						<Button variant="outline" size="sm">
							<HugeiconsIcon icon={GoogleIcon} size={15} />
							<span>Google</span>
						</Button>
						<Button variant="outline" size="sm">
							<HugeiconsIcon icon={GithubIcon} size={15} />
							<span>GitHub</span>
						</Button>
						<Button variant="outline" size="sm">
							<HugeiconsIcon icon={AppleIcon} size={15} />
							<span>Apple</span>
						</Button>
					</div>
					<div className="flex items-center gap-3 text-[11px] text-neutral-400">
						<span className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
						<span>OR CONTINUE WITH EMAIL</span>
						<span className="h-px flex-1 bg-neutral-200 dark:bg-white/10" />
					</div>
					<div className="space-y-4">
						{tab === "register" && (
							<div className="space-y-1">
								<label
									htmlFor="auth-name-react"
									className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
								>
									Full name
								</label>
								<div className="relative">
									<HugeiconsIcon
										icon={UserIcon}
										size={15}
										className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
									/>
									<Input
										id="auth-name-react"
										type="text"
										placeholder="e.g. Jane Cooper"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="rounded-md pl-9"
									/>
								</div>
							</div>
						)}
						<div className="space-y-1">
							<label
								htmlFor="auth-email-react"
								className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
							>
								Email
							</label>
							<div className="relative">
								<HugeiconsIcon
									icon={Mail01Icon}
									size={15}
									className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
								/>
								<Input
									id="auth-email-react"
									type="email"
									placeholder="name@company.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="rounded-md pl-9"
								/>
							</div>
						</div>
						<div className="space-y-1">
							<div className="flex items-center justify-between gap-3">
								<label
									htmlFor="auth-pass-react"
									className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
								>
									Password
								</label>
								{tab === "login" && (
									<button
										type="button"
										className="mb-1.5 text-[11px] font-medium whitespace-nowrap text-neutral-900 underline-offset-2 hover:underline dark:text-white"
									>
										Forgot password?
									</button>
								)}
							</div>
							<Input
								id="auth-pass-react"
								type="password"
								placeholder="Minimum 8 characters"
								value={pass}
								onChange={(e) => setPass(e.target.value)}
								className="rounded-md"
							/>
						</div>
					</div>
					<Button className="w-full" disabled={loading} onClick={submit}>
						{loading ? "Signing in..." : tab === "login" ? "Sign In to Dashboard" : "Create Account"}
					</Button>
					<p className="text-center text-xs text-neutral-500">
						{tab === "login" ? (
							<>
								Don't have an account?{" "}
								<button
									type="button"
									onClick={() => setTab("register")}
									className="font-semibold text-neutral-900 underline-offset-2 hover:underline dark:text-white"
								>
									Sign up free
								</button>
							</>
						) : (
							<>
								Already have an account?{" "}
								<button
									type="button"
									onClick={() => setTab("login")}
									className="font-semibold text-neutral-900 underline-offset-2 hover:underline dark:text-white"
								>
									Sign in here
								</button>
							</>
						)}
					</p>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogFileUpload() {
	const [uploading, setUploading] = React.useState(false);

	const handleUpload = () => {
		setUploading(true);
		setTimeout(() => setUploading(false), 2000);
	};

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Upload Attachment</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-4">
					<DialogHeader>
						<DialogTitle>Attach Project Files</DialogTitle>
						<DialogDescription>Drag files into the area below or browse from your device.</DialogDescription>
					</DialogHeader>
					<button
						type="button"
						onClick={handleUpload}
						className="flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-6 text-center transition-colors hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30"
					>
						{uploading ? (
							<div className="flex items-center gap-3 py-2">
								<div className="size-6 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-white/20 dark:border-t-white" />
								<div className="text-left">
									<p className="text-xs font-semibold text-neutral-900 dark:text-white">design-system-v2.fig · 68%</p>
									<div className="mt-1.5 h-1 w-44 overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
										<div className="h-full w-2/3 rounded-full bg-neutral-900 dark:bg-white" />
									</div>
								</div>
							</div>
						) : (
							<>
								<span className="flex size-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
									<HugeiconsIcon icon={Upload01Icon} size={18} />
								</span>
								<p className="mt-3 text-xs font-semibold text-neutral-900 dark:text-white">Drag & drop files here</p>
								<p className="text-[11px] text-neutral-500">PDF, FIG, PNG, ZIP • Max 25MB per file</p>
								<span className="mt-3 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
									Browse files
								</span>
							</>
						)}
					</button>
					<div className="space-y-2">
						{[
							{ icon: File01Icon, name: "project-brief-q3.pdf", meta: "2.4 MB • Upload complete" },
							{ icon: Image01Icon, name: "homepage-mockup.png", meta: "4.1 MB • Upload complete" },
						].map((f) => (
							<div
								key={f.name}
								className="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10"
							>
								<span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
									<HugeiconsIcon icon={f.icon} size={15} />
								</span>
								<div className="min-w-0 flex-1">
									<p className="truncate text-xs font-semibold text-neutral-900 dark:text-white">{f.name}</p>
									<p className="mt-0.5 text-[11px] text-neutral-500">{f.meta}</p>
								</div>
								<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="shrink-0 text-emerald-500" />
							</div>
						))}
					</div>
					<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
						<span className="mr-auto text-[11px] text-neutral-400">2 of 5 slots used</span>
						<DialogClose asChild>
							<Button size="sm">Done</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogCookieConsent() {
	const [analytics, setAnalytics] = React.useState(true);
	const [marketing, setMarketing] = React.useState(false);

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Cookie Preferences</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-4">
					<DialogHeader>
						<div className="flex items-start gap-3 text-left">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
								<HugeiconsIcon icon={Shield01Icon} size={18} />
							</div>
							<div>
								<DialogTitle>Privacy Preference Center</DialogTitle>
								<DialogDescription>Manage tracking permissions for a transparent experience.</DialogDescription>
							</div>
						</div>
					</DialogHeader>
					<div className="space-y-3">
						<div className="flex items-start gap-3 rounded-md border border-neutral-200 p-3 dark:border-white/10">
							<HugeiconsIcon icon={Shield01Icon} size={15} className="mt-0.5 shrink-0 text-neutral-500" />
							<div>
								<p className="text-xs font-semibold text-neutral-900 dark:text-white">
									Essential & Functional{" "}
									<span className="ml-1 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-white/10">
										Always on
									</span>
								</p>
								<p className="mt-1 text-[11px] leading-relaxed text-neutral-500">
									Sign-in, session security, and language preferences. Cannot be disabled.
								</p>
							</div>
						</div>
						{[
							{
								icon: ViewIcon,
								title: "Analytics & Performance",
								desc: "Helps us understand which pages are visited most.",
								on: analytics,
								set: setAnalytics,
								label: "Enable analytics cookies",
							},
							{
								icon: GlobeIcon,
								title: "Marketing & Ads",
								desc: "Content personalization and ad campaign measurement.",
								on: marketing,
								set: setMarketing,
								label: "Enable marketing cookies",
							},
						].map((row) => (
							<div
								key={row.title}
								className="flex items-start justify-between gap-3 rounded-md border border-neutral-200 p-3 dark:border-white/10"
							>
								<div className="flex items-start gap-2.5">
									<HugeiconsIcon icon={row.icon} size={15} className="mt-0.5 shrink-0 text-neutral-500" />
									<div>
										<p className="text-xs font-semibold text-neutral-900 dark:text-white">{row.title}</p>
										<p className="mt-1 text-[11px] leading-relaxed text-neutral-500">{row.desc}</p>
									</div>
								</div>
								<button
									type="button"
									role="switch"
									aria-checked={row.on}
									aria-label={row.label}
									onClick={() => row.set(!row.on)}
									className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${row.on ? "bg-neutral-900 dark:bg-white" : "bg-neutral-200 dark:bg-white/15"}`}
								>
									<span
										className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform ${row.on ? "translate-x-4 dark:bg-neutral-900" : ""}`}
									/>
								</button>
							</div>
						))}
					</div>
					<DialogFooter className="grid grid-cols-2 gap-3 border-t border-neutral-200 pt-4 sm:justify-stretch dark:border-white/10">
						<DialogClose asChild>
							<Button variant="secondary" size="sm" className="w-full">
								Reject All
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button size="sm" className="w-full">
								Save Choices
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogMedia() {
	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>View Media Lightbox</Button>
				</DialogTrigger>
				<DialogContent className="max-w-lg gap-0 overflow-hidden p-0">
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"
							alt="Tropical beach"
							className="aspect-video w-full object-cover"
						/>
						<span className="absolute top-3 left-3 rounded bg-black/50 px-2 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-sm">
							IMG_2048 • 4K
						</span>
					</div>
					<div className="space-y-4 p-5">
						<div className="flex items-start justify-between gap-4">
							<div className="min-w-0">
								<DialogTitle className="text-base">Tropical Beach Sunset</DialogTitle>
								<DialogDescription className="mt-1.5 flex items-center gap-1.5">
									<HugeiconsIcon icon={Folder01Icon} size={12} /> Bali Trip 2026 / Kuta Beach • Sep 12, 2026
								</DialogDescription>
							</div>
							<Button size="sm" className="shrink-0">
								<HugeiconsIcon icon={Download01Icon} size={14} />
								<span>Download</span>
							</Button>
						</div>
						<div className="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-4 text-center dark:border-white/10">
							<div className="space-y-1">
								<p className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Resolution</p>
								<p className="text-xs font-semibold text-neutral-900 dark:text-white">3840 × 2160</p>
							</div>
							<div className="space-y-1">
								<p className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Size</p>
								<p className="text-xs font-semibold text-neutral-900 dark:text-white">8.2 MB</p>
							</div>
							<div className="space-y-1">
								<p className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase">Format</p>
								<p className="text-xs font-semibold text-neutral-900 dark:text-white">JPEG</p>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogFullscreen() {
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");
	const [published, setPublished] = React.useState(false);

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Full Workspace Editor</Button>
				</DialogTrigger>
				<DialogContent className="flex h-[75vh] w-[90vw] max-w-4xl min-w-[min(90vw,20rem)] flex-col gap-0">
					<div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4 dark:border-white/10">
						<div className="flex min-w-0 flex-1 items-center gap-3">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
								<HugeiconsIcon icon={TextBoldIcon} size={18} />
							</span>
							<div className="min-w-0 flex-1">
								<Input
									type="text"
									placeholder="Untitled note..."
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="h-8 rounded-md border-0 bg-transparent p-0 text-base font-semibold shadow-none ring-0 outline-none focus:border-0 focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none dark:bg-transparent"
								/>
								<p className="mt-0.5 text-[11px] text-neutral-400">Saved 2 minutes ago • Auto-draft</p>
							</div>
						</div>
						<span className="hidden shrink-0 items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 sm:flex dark:bg-emerald-500/15 dark:text-emerald-400">
							<span className="size-1.5 rounded-full bg-emerald-500" /> Saved
						</span>
					</div>
					<div className="flex items-center gap-1 border-b border-neutral-200 px-6 py-2.5 dark:border-white/10">
						{[
							{ icon: TextBoldIcon, label: "Bold" },
							{ icon: ListViewIcon, label: "List" },
							{ icon: Image01Icon, label: "Image" },
							{ icon: Attachment01Icon, label: "Attachment" },
						].map((tool) => (
							<Button key={tool.label} size="sm" className="h-7 px-2" aria-label={tool.label}>
								<HugeiconsIcon icon={tool.icon} size={14} />
							</Button>
						))}
						<span className="ml-auto hidden text-[11px] whitespace-nowrap text-neutral-400 sm:block">
							{body.length} / 5000 characters
						</span>
					</div>
					<div className="min-h-0 flex-1 px-6 py-4">
						<Textarea
							placeholder="Start writing your documentation here... Use the toolbar above for formatting, lists, and image attachments."
							value={body}
							onChange={(e) => setBody(e.target.value)}
							className="h-full min-h-56 resize-none rounded-md border-0 bg-transparent p-0 shadow-none ring-0 outline-none focus:border-0 focus:ring-0 focus:outline-none focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-none dark:bg-transparent"
						/>
					</div>
					<DialogFooter className="border-t border-neutral-200 px-6 py-4 dark:border-white/10">
						<span className="mr-auto hidden items-center gap-1.5 text-[11px] text-neutral-400 sm:flex">
							<HugeiconsIcon icon={InformationCircleIcon} size={13} /> Supports Markdown & / shortcuts
						</span>
						<DialogClose asChild>
							<Button variant="secondary" size="sm">
								Close
							</Button>
						</DialogClose>
						<Button
							size="sm"
							onClick={() => {
								setPublished(true);
								setTimeout(() => setPublished(false), 2000);
							}}
						>
							{published ? (
								<>
									<HugeiconsIcon icon={Tick01Icon} size={14} />
									<span>Published!</span>
								</>
							) : (
								<>
									<span>Publish</span>
									<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
								</>
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogStatus() {
	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Status Alert Notification</Button>
				</DialogTrigger>
				<DialogContent className="max-w-sm gap-4">
					<div className="flex flex-col items-center text-center">
						<span className="relative flex size-14 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
							<HugeiconsIcon icon={CheckmarkCircle02Icon} size={30} />
						</span>
						<DialogTitle className="mt-4 text-lg">Payment Successful</DialogTitle>
						<DialogDescription className="mt-1.5">
							Your Pro Workspace subscription is active until Oct 24, 2026.
						</DialogDescription>
					</div>
					<div className="space-y-2 rounded-md border border-neutral-200 bg-neutral-50 p-3 text-xs dark:border-white/10 dark:bg-white/5">
						<div className="flex justify-between gap-3">
							<span className="text-neutral-500">Invoice number</span>
							<span className="font-mono font-semibold text-neutral-900 dark:text-white">INV-2026-0912</span>
						</div>
						<div className="flex justify-between gap-3">
							<span className="text-neutral-500">Payment method</span>
							<span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white">
								<HugeiconsIcon icon={Wallet01Icon} size={13} /> Visa •• 4421
							</span>
						</div>
						<div className="flex justify-between gap-3 border-t border-neutral-200 pt-2 dark:border-white/10">
							<span className="text-neutral-500">Total paid</span>
							<span className="font-bold text-neutral-900 dark:text-white">$129.00</span>
						</div>
					</div>
					<DialogFooter className="grid grid-cols-2 gap-3 sm:justify-stretch">
						<Button variant="secondary" size="sm" className="w-full">
							<HugeiconsIcon icon={Download01Icon} size={14} />
							<span>Download Receipt</span>
						</Button>
						<DialogClose asChild>
							<Button size="sm" className="w-full">
								Back
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogForm() {
	const [topic, setTopic] = React.useState("UI Bug");
	const [desc, setDesc] = React.useState("");
	const [sent, setSent] = React.useState(false);

	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Feedback & Support Ticket</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md gap-4">
					{sent ? (
						<div className="flex flex-col items-center py-6 text-center">
							<span className="flex size-12 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
								<HugeiconsIcon icon={CheckmarkCircle02Icon} size={26} />
							</span>
							<DialogTitle className="mt-4">Ticket Submitted!</DialogTitle>
							<DialogDescription className="mt-1.5">
								Your ticket <span className="font-mono font-semibold text-neutral-900 dark:text-white">#SUP-4812</span>.
								Expected response within 4 business hours.
							</DialogDescription>
							<DialogClose asChild>
								<Button size="sm" className="mt-4">
									Back to App
								</Button>
							</DialogClose>
						</div>
					) : (
						<>
							<DialogHeader>
								<div className="flex items-start gap-3 text-left">
									<span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
										<HugeiconsIcon icon={SparklesIcon} size={18} />
									</span>
									<div>
										<DialogTitle>Report an Issue</DialogTitle>
										<DialogDescription>Describe the problem — our support team is here 24/7.</DialogDescription>
									</div>
								</div>
							</DialogHeader>
							<div className="space-y-4 py-1">
								<div className="grid grid-cols-3 gap-2">
									{["UI Bug", "Question", "New Feature"].map((t) => (
										<button
											key={t}
											type="button"
											onClick={() => setTopic(t)}
											className={`rounded-md border px-2 py-2 text-[11px] font-semibold transition-all ${topic === t ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900" : "border-neutral-200 text-neutral-600 hover:border-neutral-400 dark:border-white/10 dark:text-neutral-400"}`}
										>
											{t}
										</button>
									))}
								</div>
								<div className="grid grid-cols-2 gap-3">
									<div className="space-y-1">
										<label
											htmlFor="fb-name"
											className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
										>
											Name
										</label>
										<Input id="fb-name" type="text" placeholder="e.g. Jane Cooper" className="rounded-md" />
									</div>
									<div className="space-y-1">
										<label
											htmlFor="fb-email"
											className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
										>
											Email
										</label>
										<Input id="fb-email" type="email" placeholder="e.g. jane@company.com" className="rounded-md" />
									</div>
								</div>
								<div className="space-y-1">
									<label
										htmlFor="fb-desc"
										className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
									>
										Detailed description
									</label>
									<Textarea
										id="fb-desc"
										rows={3}
										placeholder="Steps to reproduce, error messages, and what you expected..."
										value={desc}
										onChange={(e) => setDesc(e.target.value)}
										className="min-h-20 resize-none rounded-md"
									/>
									<p className="text-right text-[11px] text-neutral-400">{desc.length}/500</p>
								</div>
							</div>
							<DialogFooter className="border-t border-neutral-200 pt-4 dark:border-white/10">
								<DialogClose asChild>
									<Button variant="secondary" size="sm">
										Cancel
									</Button>
								</DialogClose>
								<Button size="sm" onClick={() => setSent(true)}>
									<span>Send Support Ticket</span>
									<HugeiconsIcon icon={ArrowRight01Icon} size={14} />
								</Button>
							</DialogFooter>
						</>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}

export function DialogSheet() {
	return (
		<div className="flex items-center justify-center p-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>Side Panel Settings</Button>
				</DialogTrigger>
				<DialogContent className="top-0 right-0 left-auto h-full max-w-sm translate-x-0 translate-y-0 gap-0 overflow-y-auto rounded-none border-l p-0">
					<div className="flex items-center gap-3 border-b border-neutral-200 p-4 dark:border-white/10">
						<span className="flex size-9 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
							<HugeiconsIcon icon={Settings01Icon} size={17} />
						</span>
						<div>
							<DialogTitle className="text-sm">Quick Settings</DialogTitle>
							<DialogDescription className="text-[11px]">Personalize your workspace appearance.</DialogDescription>
						</div>
					</div>
					<div className="flex-1 space-y-5 p-4">
						<section className="space-y-2">
							<p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Appearance</p>
							<div className="grid grid-cols-3 gap-2">
								{[
									{ id: "system", label: "System" },
									{ id: "light", label: "Light" },
									{ id: "dark", label: "Dark" },
								].map((theme) => (
									<button
										key={theme.id}
										type="button"
										className="flex flex-col items-center gap-1.5 rounded-md border border-neutral-200 p-2.5 transition-all hover:border-neutral-400 dark:border-white/10"
									>
										<span
											className={`size-6 rounded border border-neutral-300 ${theme.id === "dark" ? "bg-neutral-900" : theme.id === "light" ? "bg-white" : "bg-gradient-to-r from-white from-50% to-neutral-900 to-50%"}`}
										/>
										<span className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
											{theme.label}
										</span>
									</button>
								))}
							</div>
						</section>
						<section className="space-y-2">
							<p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Notifications</p>
							{[
								{ icon: Mail01Icon, label: "Weekly email digest", desc: "Workspace activity summary" },
								{ icon: Notification01Icon, label: "Deploy finished push", desc: "Real-time browser notifications" },
							].map((item) => (
								<div
									key={item.label}
									className="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10"
								>
									<HugeiconsIcon icon={item.icon} size={15} className="shrink-0 text-neutral-500" />
									<div className="min-w-0 flex-1">
										<p className="truncate text-xs font-semibold text-neutral-900 dark:text-white">{item.label}</p>
										<p className="truncate text-[11px] text-neutral-500">{item.desc}</p>
									</div>
									<span className="relative h-5 w-9 shrink-0 rounded-full bg-neutral-900 dark:bg-white">
										<span className="absolute top-0.5 left-0.5 size-4 translate-x-4 rounded-full bg-white shadow dark:bg-neutral-900" />
									</span>
								</div>
							))}
						</section>
						<section className="space-y-2">
							<p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Session</p>
							<div className="flex items-center gap-2.5 rounded-md border border-neutral-200 p-2.5 dark:border-white/10">
								<span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[11px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
									JC
								</span>
								<div className="min-w-0 flex-1">
									<p className="truncate text-xs font-semibold text-neutral-900 dark:text-white">jane@company.com</p>
									<p className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400">
										<span className="size-1.5 rounded-full bg-emerald-500" /> Online
									</p>
								</div>
							</div>
						</section>
					</div>
					<div className="border-t border-neutral-200 p-4 dark:border-white/10">
						<DialogClose asChild>
							<Button size="sm" className="w-full">
								Save & Apply
							</Button>
						</DialogClose>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
