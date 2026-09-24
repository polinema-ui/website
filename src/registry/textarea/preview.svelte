<script lang="ts">
	import { Alert02Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "$registry/button/meta";
	import { INPUT_CLASSES } from "$registry/input/meta";
	import { TEXTAREA_CLASSES, TEXTAREA_ERROR_CLASSES, TEXTAREA_HINT_CLASSES, TEXTAREA_LABEL_CLASSES } from "./meta";
	import type { TextareaPreviewVariant } from "./meta";

	let { variant = "default" }: { variant?: TextareaPreviewVariant } = $props();

	let summary = $state("");
	const maxLength = 250;
</script>

{#if variant === "default"}
	<div class="w-full max-w-md">
		<label for="preview-textarea-bio" class={TEXTAREA_LABEL_CLASSES}>Bio</label>
		<textarea id="preview-textarea-bio" placeholder="Tell us a little bit about yourself..." class={TEXTAREA_CLASSES}
		></textarea>
		<p class={TEXTAREA_HINT_CLASSES}>Brief description for your profile. URLs are hyperlinked.</p>
	</div>
{:else if variant === "limit"}
	<div class="w-full max-w-md">
		<div class="mb-1.5 flex items-center justify-between">
			<label for="preview-textarea-limit" class="text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>Project summary</label
			>
			<span class="text-xs text-neutral-500">{summary.length}/{maxLength}</span>
		</div>
		<textarea
			id="preview-textarea-limit"
			bind:value={summary}
			maxlength={maxLength}
			placeholder="Describe the project goals and deliverables..."
			rows={4}
			class={TEXTAREA_CLASSES}></textarea>
	</div>
{:else if variant === "disabled"}
	<div class="w-full max-w-md">
		<label for="preview-textarea-disabled" class={TEXTAREA_LABEL_CLASSES}>System notes</label>
		<textarea
			id="preview-textarea-disabled"
			value="This record is automatically archived and cannot be edited directly."
			disabled
			class={TEXTAREA_CLASSES}></textarea>
	</div>
{:else if variant === "invalid"}
	<div class="w-full max-w-md">
		<label for="preview-textarea-invalid" class={TEXTAREA_LABEL_CLASSES}>Feedback</label>
		<textarea id="preview-textarea-invalid" value="Bad" aria-invalid="true" class={TEXTAREA_CLASSES}></textarea>
		<p class="{TEXTAREA_ERROR_CLASSES} flex items-center gap-1.5">
			<HugeiconsIcon icon={Alert02Icon} size={14} />
			Feedback must be at least 10 characters.
		</p>
	</div>
{:else if variant === "actions"}
	<div
		class="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
	>
		<label for="preview-textarea-comment" class={TEXTAREA_LABEL_CLASSES}>Leave a comment</label>
		<textarea
			id="preview-textarea-comment"
			placeholder="What are your thoughts on this update?"
			class="{TEXTAREA_CLASSES} min-h-[100px]"></textarea>
		<div class="mt-3 flex items-center justify-end gap-2">
			<button type="button" class="{BUTTON_BASE} {BUTTON_VARIANTS.ghost} {BUTTON_SIZES.sm}"> Cancel </button>
			<button type="button" class="{BUTTON_BASE} {BUTTON_VARIANTS.default} {BUTTON_SIZES.sm}"> Post comment </button>
		</div>
	</div>
{:else if variant === "form"}
	<form
		class="w-full max-w-md space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
		onsubmit={(e) => e.preventDefault()}
	>
		<div>
			<h3 class="text-base font-bold text-neutral-900 dark:text-white">Issue Report</h3>
			<p class="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
				Provide details about the bug you encountered.
			</p>
		</div>
		<div>
			<label for="preview-textarea-form-title" class={TEXTAREA_LABEL_CLASSES}>
				Issue title <span class="text-red-600 dark:text-red-400">*</span>
			</label>
			<input
				id="preview-textarea-form-title"
				placeholder="e.g. Button focus outline clipped in safari"
				class={INPUT_CLASSES}
				required
			/>
		</div>
		<div>
			<label for="preview-textarea-form-desc" class={TEXTAREA_LABEL_CLASSES}>
				Description <span class="text-red-600 dark:text-red-400">*</span>
			</label>
			<textarea
				id="preview-textarea-form-desc"
				placeholder="Steps to reproduce, expected outcome, etc."
				rows={4}
				class={TEXTAREA_CLASSES}
				required></textarea>
		</div>
		<button type="submit" class="{BUTTON_BASE} {BUTTON_VARIANTS.default} {BUTTON_SIZES.default} w-full">
			Submit report
		</button>
	</form>
{/if}
