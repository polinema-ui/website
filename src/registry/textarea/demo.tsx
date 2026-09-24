import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDefault() {
	return (
		<div className="w-full max-w-md">
			<label
				htmlFor="textarea-bio"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Bio
			</label>
			<Textarea id="textarea-bio" placeholder="Tell us a little bit about yourself..." />
			<p className="mt-1.5 text-xs text-neutral-500">Brief description for your profile. URLs are hyperlinked.</p>
		</div>
	);
}

export function TextareaLimit() {
	const [value, setValue] = React.useState("");
	const maxLength = 250;

	return (
		<div className="w-full max-w-md">
			<div className="mb-1.5 flex items-center justify-between">
				<label htmlFor="textarea-limit" className="text-[13px] font-medium text-neutral-700 dark:text-neutral-300">
					Project summary
				</label>
				<span className="text-xs text-neutral-500">
					{value.length}/{maxLength}
				</span>
			</div>
			<Textarea
				id="textarea-limit"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				maxLength={maxLength}
				placeholder="Describe the project goals and deliverables..."
				rows={4}
			/>
		</div>
	);
}

export function TextareaDisabled() {
	return (
		<div className="w-full max-w-md">
			<label
				htmlFor="textarea-disabled"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				System notes
			</label>
			<Textarea
				id="textarea-disabled"
				defaultValue="This record is automatically archived and cannot be edited directly."
				disabled
			/>
		</div>
	);
}

export function TextareaInvalid() {
	return (
		<div className="w-full max-w-md">
			<label
				htmlFor="textarea-invalid"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Feedback
			</label>
			<Textarea id="textarea-invalid" defaultValue="Bad" invalid />
			<p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
				<HugeiconsIcon icon={Alert02Icon} size={14} />
				Feedback must be at least 10 characters.
			</p>
		</div>
	);
}

export function TextareaActions() {
	return (
		<div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
			<label
				htmlFor="textarea-comment"
				className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
			>
				Leave a comment
			</label>
			<Textarea id="textarea-comment" placeholder="What are your thoughts on this update?" className="min-h-[100px]" />
			<div className="mt-3 flex items-center justify-end gap-2">
				<Button variant="ghost" size="sm">
					Cancel
				</Button>
				<Button size="sm">Post comment</Button>
			</div>
		</div>
	);
}

export function TextareaForm() {
	return (
		<form
			className="w-full max-w-md space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
			onSubmit={(e) => e.preventDefault()}
		>
			<div>
				<h3 className="text-base font-bold text-neutral-900 dark:text-white">Issue Report</h3>
				<p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
					Provide details about the bug you encountered.
				</p>
			</div>
			<div>
				<label
					htmlFor="textarea-form-title"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Issue title <span className="text-red-600 dark:text-red-400">*</span>
				</label>
				<Input id="textarea-form-title" placeholder="e.g. Button focus outline clipped in safari" required />
			</div>
			<div>
				<label
					htmlFor="textarea-form-desc"
					className="mb-1.5 block text-[13px] font-medium text-neutral-700 dark:text-neutral-300"
				>
					Description <span className="text-red-600 dark:text-red-400">*</span>
				</label>
				<Textarea id="textarea-form-desc" placeholder="Steps to reproduce, expected outcome, etc." rows={4} required />
			</div>
			<Button type="submit" className="w-full">
				Submit report
			</Button>
		</form>
	);
}
