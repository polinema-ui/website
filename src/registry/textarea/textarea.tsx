import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	invalid?: boolean;
}

const TEXTAREA_CLASSES =
	"w-full min-h-[96px] rounded-lg border border-neutral-200 bg-white p-3 text-sm text-neutral-900 transition-colors outline-none placeholder:text-neutral-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500 aria-invalid:focus:border-red-500 aria-invalid:focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500";

export function Textarea({ className = "", invalid = false, ...props }: TextareaProps) {
	return (
		<textarea
			aria-invalid={invalid || undefined}
			className={[TEXTAREA_CLASSES, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}
