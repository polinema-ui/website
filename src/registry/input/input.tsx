import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	invalid?: boolean;
}

const INPUT_CLASSES =
	"h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-neutral-100 transition-colors outline-none placeholder:text-neutral-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500 aria-invalid:focus:border-red-500 aria-invalid:focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-50";

export function Input({ className = "", invalid = false, type = "text", ...props }: InputProps) {
	return (
		<input
			type={type}
			aria-invalid={invalid || undefined}
			className={[INPUT_CLASSES, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}
