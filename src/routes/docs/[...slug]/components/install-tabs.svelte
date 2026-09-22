<script lang="ts">
	import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { docsState } from "$routes/docs/[...slug]/context/docs.svelte";
	import DOMPurify from "dompurify";
	import { highlighterPromise } from "./highlighter";
	import type { DocsCodeLang } from "./highlighter";
	import type { PreviewCode } from "./preview-tabs.svelte";

	let {
		component,
		codes,
		dependencies = [],
	}: { component: string; codes: readonly PreviewCode[]; dependencies?: readonly string[] } = $props();

	let mode = $state<"command" | "manual">("command");
	let copiedCommand = $state(false);
	let copiedInstall = $state(false);
	let copiedFile = $state(false);
	let expandedFile = $state(false);

	let commands = $derived(PKG_MANAGERS.map((pm) => ({ ...pm, cmd: pm.cmd.replace(" init", ` add ${component}`) })));
	let activeCommand = $derived(commands.find((pm) => pm.id === docsState.pkgManager)?.cmd ?? "");

	let activeFileId = $state<string | undefined>(undefined);
	let activeFile = $derived(codes.find((c) => c.id === activeFileId) ?? codes[0]);

	let filePath = $derived(`components/ui/${component}.tsx`);

	let installCommand = $derived.by(() => {
		const list = dependencies.join(" ");
		switch (docsState.pkgManager) {
			case "npm":
				return `npm install ${list}`;
			case "yarn":
				return `yarn add ${list}`;
			case "bun":
				return `bun add ${list}`;
			default:
				return `pnpm add ${list}`;
		}
	});

	function langBadge(lang: DocsCodeLang): string {
		switch (lang) {
			case "ts":
			case "tsx":
				return "TS";
			case "svelte":
				return "SV";
			default:
				return lang.toUpperCase();
		}
	}

	function copyCommand() {
		if (!activeCommand) return;
		navigator.clipboard.writeText(activeCommand);
		copiedCommand = true;
		setTimeout(() => (copiedCommand = false), 2000);
	}

	function copyInstall() {
		navigator.clipboard.writeText(installCommand);
		copiedInstall = true;
		setTimeout(() => (copiedInstall = false), 2000);
	}

	function copyFile() {
		if (!activeFile) return;
		navigator.clipboard.writeText(activeFile.code.trim());
		copiedFile = true;
		setTimeout(() => (copiedFile = false), 2000);
	}

	function selectFile(id: string) {
		activeFileId = id;
		expandedFile = false;
	}
</script>

<div class="not-prose my-6 w-full">
	<div class="flex gap-6 border-b border-white/10" role="tablist" aria-label="Installation method">
		<button
			type="button"
			role="tab"
			aria-selected={mode === "command"}
			onclick={() => (mode = "command")}
			class="cursor-pointer pb-2 text-[15px] font-semibold transition-colors {mode === 'command'
				? '-mb-px border-b-2 border-white text-white'
				: 'text-neutral-400 hover:text-white'}"
		>
			Command
		</button>
		<button
			type="button"
			role="tab"
			aria-selected={mode === "manual"}
			onclick={() => (mode = "manual")}
			class="cursor-pointer pb-2 text-[15px] font-semibold transition-colors {mode === 'manual'
				? '-mb-px border-b-2 border-white text-white'
				: 'text-neutral-400 hover:text-white'}"
		>
			Manual
		</button>
	</div>

	{#if mode === "command"}
		<div class="mt-4 overflow-hidden rounded-lg border border-white/10 bg-black">
			<div class="flex items-center gap-2 border-b border-white/10 py-1.5 pr-1.5 pl-3">
				<span
					class="flex size-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-[11px] font-bold text-neutral-300"
					aria-hidden="true"
				>
					&gt;_
				</span>
				<div class="flex min-w-0 items-center gap-1" role="group" aria-label="Package manager">
					{#each commands as pm (pm.id)}
						<button
							type="button"
							onclick={() => (docsState.pkgManager = pm.id)}
							class="cursor-pointer rounded-md px-2 py-1 text-xs font-medium transition-colors {docsState.pkgManager ===
							pm.id
								? 'bg-white/10 text-white'
								: 'text-neutral-400 hover:text-white'}"
						>
							{pm.label}
						</button>
					{/each}
				</div>
				<button
					type="button"
					onclick={copyCommand}
					aria-label="Copy to clipboard"
					class="ml-auto flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
				>
					{#if copiedCommand}
						<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
					{:else}
						<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
					{/if}
				</button>
			</div>
			<code class="block overflow-x-auto px-4 py-3 font-mono text-[13px] font-medium text-neutral-100">
				{activeCommand}
			</code>
		</div>
	{:else}
		<ol class="mt-6 space-y-6">
			<li class="flex gap-4">
				<div class="flex flex-col items-center" aria-hidden="true">
					<span
						class="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold text-white"
					>
						1
					</span>
					<span class="mt-2 w-px flex-1 bg-white/10"></span>
				</div>
				<div class="min-w-0 flex-1 pb-1">
					<p class="pt-0.5 text-[15px] font-semibold text-white">Install the following dependencies:</p>
					{#if dependencies.length > 0}
						<div class="mt-3 overflow-hidden rounded-lg border border-white/10 bg-black">
							<div class="flex items-center gap-2 border-b border-white/10 py-1.5 pr-1.5 pl-3">
								<span
									class="flex size-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-[11px] font-bold text-neutral-300"
									aria-hidden="true"
								>
									&gt;_
								</span>
								<div class="flex min-w-0 items-center gap-1" role="group" aria-label="Package manager">
									{#each PKG_MANAGERS as pm (pm.id)}
										<button
											type="button"
											onclick={() => (docsState.pkgManager = pm.id)}
											class="cursor-pointer rounded-md px-2 py-1 text-xs font-medium transition-colors {docsState.pkgManager ===
											pm.id
												? 'bg-white/10 text-white'
												: 'text-neutral-400 hover:text-white'}"
										>
											{pm.label}
										</button>
									{/each}
								</div>
								<button
									type="button"
									onclick={copyInstall}
									aria-label="Copy to clipboard"
									class="ml-auto flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
								>
									{#if copiedInstall}
										<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
									{:else}
										<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
									{/if}
								</button>
							</div>
							<code class="block overflow-x-auto px-4 py-3 font-mono text-[13px] font-medium text-neutral-100">
								{installCommand}
							</code>
						</div>
					{:else}
						<p
							class="mt-3 rounded-lg border border-white/10 bg-black px-4 py-3 text-[13px] leading-relaxed text-neutral-400"
						>
							Nggak butuh dependency tambahan. Pastiin Tailwind CSS udah terkonfigurasi di project lo.
						</p>
					{/if}
				</div>
			</li>

			<li class="flex gap-4">
				<div class="flex flex-col items-center" aria-hidden="true">
					<span
						class="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold text-white"
					>
						2
					</span>
					<span class="mt-2 w-px flex-1 bg-white/10"></span>
				</div>
				<div class="min-w-0 flex-1 pb-1">
					<p class="pt-0.5 text-[15px] font-semibold text-white">
						Copy and paste the following code into your project.
					</p>
					{#if codes.length > 1}
						<div class="mt-3 flex flex-wrap items-center gap-1" role="group" aria-label="Stack">
							{#each codes as file (file.id)}
								<button
									type="button"
									onclick={() => selectFile(file.id)}
									class="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors {activeFile?.id ===
									file.id
										? 'bg-white/10 text-white'
										: 'text-neutral-400 hover:text-white'}"
								>
									{file.label}
								</button>
							{/each}
						</div>
					{/if}
					{#if activeFile}
						<div class="mt-3 overflow-hidden rounded-lg border border-white/10 bg-black">
							<div class="flex items-center gap-2 border-b border-white/10 px-3 py-2">
								<span
									class="flex h-5 shrink-0 items-center rounded bg-white/10 px-1.5 font-mono text-[10px] font-bold text-neutral-200"
									aria-hidden="true"
								>
									{langBadge(activeFile.lang)}
								</span>
								<code class="min-w-0 flex-1 truncate font-mono text-xs text-neutral-300">{filePath}</code>
								{#if !expandedFile}
									<button
										type="button"
										onclick={() => (expandedFile = true)}
										class="shrink-0 cursor-pointer text-xs font-medium text-neutral-400 transition-colors hover:text-white"
									>
										Expand
									</button>
									<span class="h-4 w-px shrink-0 bg-white/10" aria-hidden="true"></span>
								{/if}
								<button
									type="button"
									onclick={copyFile}
									aria-label="Copy to clipboard"
									class="flex shrink-0 cursor-pointer items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
								>
									{#if copiedFile}
										<HugeiconsIcon icon={Tick01Icon} size={14} color="#10b981" />
									{:else}
										<HugeiconsIcon icon={Copy01Icon} size={14} color="currentColor" />
									{/if}
								</button>
							</div>
							<div class="relative">
								{#await highlighterPromise then highlighter}
									<div
										class="code-scroll overflow-x-auto text-[13px] [&_pre]:bg-transparent! {expandedFile
											? 'max-h-128 overflow-y-auto px-4 py-4'
											: 'max-h-60 overflow-hidden px-4 py-4'}"
									>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html DOMPurify.sanitize(
											highlighter.codeToHtml(activeFile.code.trim(), { lang: activeFile.lang, theme: "github-dark" }),
										)}
									</div>
								{/await}
								{#if !expandedFile}
									<div
										class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-black"
										aria-hidden="true"
									></div>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			</li>

			<li class="flex gap-4">
				<div class="flex flex-col items-center" aria-hidden="true">
					<span
						class="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold text-white"
					>
						3
					</span>
				</div>
				<div class="min-w-0 flex-1">
					<p class="pt-0.5 text-[15px] font-semibold text-white">
						Update the import paths to match your project setup.
					</p>
					<p class="mt-3 text-[13px] leading-relaxed text-neutral-400">
						Sesuaikan alias <code class="font-mono text-neutral-200">@/components/...</code> sama konfigurasi di project
						lo (<code class="font-mono text-neutral-200">tsconfig.json</code>,
						<code class="font-mono text-neutral-200">vite.config.ts</code>).
					</p>
				</div>
			</li>
		</ol>
	{/if}
</div>

<style>
	.code-scroll :global(.shiki),
	.code-scroll :global(.shiki span) {
		background-color: transparent !important;
	}
	.code-scroll :global(.shiki code) {
		counter-reset: line;
	}
	.code-scroll :global(.shiki .line::before) {
		content: counter(line);
		counter-increment: line;
		display: inline-block;
		width: 2rem;
		margin-right: 1.25rem;
		text-align: right;
		color: #525252;
		user-select: none;
	}
</style>
