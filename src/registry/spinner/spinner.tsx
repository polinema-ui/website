import * as React from "react";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerVariant = "default" | "secondary" | "success" | "destructive" | "warning";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: SpinnerSize;
	variant?: SpinnerVariant;
	className?: string;
}

const SPINNER_BASE =
	"inline-block shrink-0 animate-spin rounded-full border-solid [--spinner-track:var(--color-neutral-200)] [border-color:var(--spinner-head)_var(--spinner-track)_var(--spinner-track)_var(--spinner-track)] dark:[--spinner-track:var(--color-neutral-800)]";

const SPINNER_SIZES: Record<SpinnerSize, string> = {
	xs: "size-3.5 border-2",
	sm: "size-4 border-2",
	md: "size-6 border-2",
	lg: "size-8 border-[3px]",
	xl: "size-10 border-4",
};

const SPINNER_VARIANTS: Record<SpinnerVariant, string> = {
	default: "[--spinner-head:var(--color-blue-600)] dark:[--spinner-head:var(--color-blue-500)]",
	secondary: "[--spinner-head:var(--color-neutral-400)] dark:[--spinner-head:var(--color-neutral-300)]",
	success: "[--spinner-head:var(--color-emerald-600)] dark:[--spinner-head:var(--color-emerald-500)]",
	destructive: "[--spinner-head:var(--color-red-600)] dark:[--spinner-head:var(--color-red-500)]",
	warning: "[--spinner-head:var(--color-amber-600)] dark:[--spinner-head:var(--color-amber-500)]",
};

export function Spinner({ size = "md", variant = "default", className = "", ...props }: SpinnerProps) {
	return (
		<span
			role="status"
			aria-label="Loading"
			className={[SPINNER_BASE, SPINNER_SIZES[size], SPINNER_VARIANTS[variant], className].filter(Boolean).join(" ")}
			{...props}
		>
			<span className="sr-only">Loading...</span>
		</span>
	);
}
