import { ArrowRight01Icon, MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";

const BREADCRUMB_BASE = "cn-breadcrumb";

const BREADCRUMB_LIST_BASE =
	"flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-neutral-500 sm:gap-2.5 dark:text-neutral-400";

const BREADCRUMB_ITEM_BASE = "inline-flex items-center gap-1.5";

const BREADCRUMB_LINK_BASE = "transition-colors hover:text-neutral-900 dark:hover:text-white";

const BREADCRUMB_PAGE_BASE = "font-normal text-neutral-900 dark:text-white";

const BREADCRUMB_SEPARATOR_BASE = "[&>svg]:size-3.5";

const BREADCRUMB_ELLIPSIS_BASE = "flex size-5 items-center justify-center [&>svg]:size-4";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
	className?: string;
}

export function Breadcrumb({ className = "", ...props }: BreadcrumbProps) {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			className={[BREADCRUMB_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
	className?: string;
}

export function BreadcrumbList({ className = "", ...props }: BreadcrumbListProps) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={[BREADCRUMB_LIST_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {
	className?: string;
}

export function BreadcrumbItem({ className = "", ...props }: BreadcrumbItemProps) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={[BREADCRUMB_ITEM_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	className?: string;
	asChild?: boolean;
}

export function BreadcrumbLink({ className = "", children, ...props }: BreadcrumbLinkProps) {
	return (
		<a data-slot="breadcrumb-link" className={[BREADCRUMB_LINK_BASE, className].filter(Boolean).join(" ")} {...props}>
			{children}
		</a>
	);
}

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
	className?: string;
}

export function BreadcrumbPage({ className = "", ...props }: BreadcrumbPageProps) {
	return (
		<span
			role="link"
			aria-disabled="true"
			aria-current="page"
			data-slot="breadcrumb-page"
			className={[BREADCRUMB_PAGE_BASE, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {
	className?: string;
}

export function BreadcrumbSeparator({ children, className = "", ...props }: BreadcrumbSeparatorProps) {
	return (
		<li
			role="presentation"
			aria-hidden="true"
			data-slot="breadcrumb-separator"
			className={[BREADCRUMB_SEPARATOR_BASE, className].filter(Boolean).join(" ")}
			{...props}
		>
			{children ?? <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />}
		</li>
	);
}

export interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {
	className?: string;
}

export function BreadcrumbEllipsis({ className = "", ...props }: BreadcrumbEllipsisProps) {
	return (
		<span
			role="presentation"
			aria-hidden="true"
			data-slot="breadcrumb-ellipsis"
			className={[BREADCRUMB_ELLIPSIS_BASE, className].filter(Boolean).join(" ")}
			{...props}
		>
			<HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
			<span className="sr-only">More</span>
		</span>
	);
}
