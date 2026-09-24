import * as React from "react";

const AVATAR_BASE = "relative flex size-10 shrink-0 overflow-hidden rounded-full";

const AVATAR_IMAGE_BASE = "absolute inset-0 aspect-square size-full object-cover";

const AVATAR_FALLBACK_BASE =
	"flex size-full items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
	className?: string;
}

export function Avatar({ className = "", ...props }: AvatarProps) {
	return <span data-slot="avatar" className={[AVATAR_BASE, className].filter(Boolean).join(" ")} {...props} />;
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
}

export function AvatarImage({ className = "", src, alt = "", onError, ...props }: AvatarImageProps) {
	const [hasError, setHasError] = React.useState(false);

	if (hasError || !src) return null;

	return (
		<img
			data-slot="avatar-image"
			src={src}
			alt={alt}
			onError={(e) => {
				setHasError(true);
				onError?.(e);
			}}
			className={[AVATAR_IMAGE_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
	className?: string;
}

export function AvatarFallback({ className = "", ...props }: AvatarFallbackProps) {
	return (
		<span
			data-slot="avatar-fallback"
			className={[AVATAR_FALLBACK_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}
