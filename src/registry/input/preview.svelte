<script lang="ts">
	import { Alert02Icon, Upload01Icon } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "$registry/button/meta";
	import { INPUT_CLASSES, INPUT_ERROR_CLASSES, INPUT_LABEL_CLASSES } from "./meta";
	import type { InputPreviewVariant } from "./meta";

	let { variant = "basic" }: { variant?: InputPreviewVariant } = $props();
</script>

{#if variant === "basic"}
	<input type="text" placeholder="Enter text..." class="{INPUT_CLASSES} max-w-sm" />
{:else if variant === "grid"}
	<div class="grid w-full max-w-sm grid-cols-2 gap-3">
		<div>
			<label for="preview-input-first-name" class={INPUT_LABEL_CLASSES}>First name</label>
			<input id="preview-input-first-name" placeholder="John" class={INPUT_CLASSES} />
		</div>
		<div>
			<label for="preview-input-last-name" class={INPUT_LABEL_CLASSES}>Last name</label>
			<input id="preview-input-last-name" placeholder="Doe" class={INPUT_CLASSES} />
		</div>
	</div>
{:else if variant === "disabled"}
	<div class="w-full max-w-sm">
		<label for="preview-input-disabled" class={INPUT_LABEL_CLASSES}>Email</label>
		<input id="preview-input-disabled" type="email" value="you@polinema.ac.id" disabled class={INPUT_CLASSES} />
	</div>
{:else if variant === "invalid"}
	<div class="w-full max-w-sm">
		<label for="preview-input-invalid" class={INPUT_LABEL_CLASSES}>Email</label>
		<input id="preview-input-invalid" type="email" value="not-an-email" aria-invalid="true" class={INPUT_CLASSES} />
		<p class="{INPUT_ERROR_CLASSES} flex items-center gap-1.5">
			<HugeiconsIcon icon={Alert02Icon} size={14} />
			Please enter a valid email address.
		</p>
	</div>
{:else if variant === "file"}
	<div class="w-full max-w-sm">
		<label
			for="preview-input-file"
			class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 bg-white/5 px-4 py-8 text-center transition-colors hover:border-blue-600 hover:bg-white/10"
		>
			<HugeiconsIcon icon={Upload01Icon} size={20} class="text-neutral-400" />
			<span class="text-sm font-medium text-neutral-200">
				Click to upload <span class="font-normal text-neutral-500">or drag and drop</span>
			</span>
			<span class="text-xs text-neutral-500">PNG or JPG up to 5MB.</span>
		</label>
		<input id="preview-input-file" type="file" class="sr-only" />
	</div>
{:else if variant === "required"}
	<div class="w-full max-w-sm">
		<label for="preview-input-required" class={INPUT_LABEL_CLASSES}>
			Email <span class="text-red-400">*</span>
		</label>
		<input id="preview-input-required" type="email" placeholder="you@polinema.ac.id" class={INPUT_CLASSES} required />
	</div>
{:else if variant === "inline"}
	<div class="flex w-full max-w-sm gap-2">
		<input id="preview-input-newsletter" type="email" placeholder="Enter your email" class={INPUT_CLASSES} />
		<button type="button" class="{BUTTON_BASE} {BUTTON_VARIANTS.default} {BUTTON_SIZES.default} shrink-0">
			Subscribe
		</button>
	</div>
{:else if variant === "form"}
	<form class="w-full max-w-sm space-y-4" onsubmit={(e) => e.preventDefault()}>
		<div class="grid grid-cols-2 gap-3">
			<div>
				<label for="preview-input-signup-first" class={INPUT_LABEL_CLASSES}>First name</label>
				<input id="preview-input-signup-first" placeholder="John" class={INPUT_CLASSES} />
			</div>
			<div>
				<label for="preview-input-signup-last" class={INPUT_LABEL_CLASSES}>Last name</label>
				<input id="preview-input-signup-last" placeholder="Doe" class={INPUT_CLASSES} />
			</div>
		</div>
		<div>
			<label for="preview-input-signup-email" class={INPUT_LABEL_CLASSES}>
				Email <span class="text-red-400">*</span>
			</label>
			<input
				id="preview-input-signup-email"
				type="email"
				placeholder="you@polinema.ac.id"
				class={INPUT_CLASSES}
				required
			/>
		</div>
		<div>
			<label for="preview-input-signup-phone" class={INPUT_LABEL_CLASSES}>Phone</label>
			<input id="preview-input-signup-phone" type="tel" placeholder="+62 812 3456 7890" class={INPUT_CLASSES} />
		</div>
		<div>
			<label for="preview-input-signup-address" class={INPUT_LABEL_CLASSES}>Address</label>
			<input id="preview-input-signup-address" placeholder="Jl. Soekarno Hatta No. 9" class={INPUT_CLASSES} />
		</div>
		<button type="submit" class="{BUTTON_BASE} {BUTTON_VARIANTS.default} {BUTTON_SIZES.default} w-full">
			Sign up
		</button>
	</form>
{/if}
