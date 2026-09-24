import {
	ArrowRight01Icon,
	Building01Icon,
	CheckmarkCircle02Icon,
	Folder01Icon,
	Home01Icon,
	ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbDefault() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>/</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>/</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbChevron() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Projects</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Polinema UI</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbDropdown() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbEllipsis />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbIcons() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#" className="flex items-center gap-1.5">
						<HugeiconsIcon icon={Home01Icon} size={16} />
						<span>Home</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#" className="flex items-center gap-1.5">
						<HugeiconsIcon icon={Folder01Icon} size={16} />
						<span>Documents</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="flex items-center gap-1.5">
						<HugeiconsIcon icon={Building01Icon} size={16} />
						<span>Overview</span>
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbPills() {
	return (
		<Breadcrumb>
			<BreadcrumbList className="gap-2">
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20 dark:hover:text-white"
					>
						Workspace
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="text-neutral-400 dark:text-neutral-600" />
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20 dark:hover:text-white"
					>
						Design System
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="text-neutral-400 dark:text-neutral-600" />
				<BreadcrumbItem>
					<BreadcrumbPage className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white dark:bg-blue-500">
						Breadcrumb
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbBadge() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Store</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#" className="flex items-center gap-1.5">
						<HugeiconsIcon icon={ShoppingBag01Icon} size={16} />
						<span>Products</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<div className="flex items-center gap-2">
						<BreadcrumbPage>Laptops</BreadcrumbPage>
						<span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
							24 Items
						</span>
					</div>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbSegmented() {
	return (
		<Breadcrumb>
			<BreadcrumbList className="gap-3">
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="text-xs font-semibold tracking-wider text-neutral-500 uppercase hover:text-neutral-900 dark:hover:text-white"
					>
						Console
					</BreadcrumbLink>
				</BreadcrumbItem>
				<li role="presentation" aria-hidden="true" className="h-4 w-px bg-neutral-300 dark:bg-white/20" />
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="text-xs font-semibold tracking-wider text-neutral-500 uppercase hover:text-neutral-900 dark:hover:text-white"
					>
						Database
					</BreadcrumbLink>
				</BreadcrumbItem>
				<li role="presentation" aria-hidden="true" className="h-4 w-px bg-neutral-300 dark:bg-white/20" />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
						Clusters
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbTruncated() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Root</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#" className="max-w-24 truncate sm:max-w-none" title="very-long-project-directory-name">
						very-long-project-directory-name
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="max-w-28 truncate sm:max-w-none" title="configuration-file-v2.json">
						configuration-file-v2.json
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export function BreadcrumbWizard() {
	return (
		<Breadcrumb>
			<BreadcrumbList className="gap-2 sm:gap-3">
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
					>
						<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
						<span>1. Cart</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<HugeiconsIcon icon={ArrowRight01Icon} size={14} className="text-neutral-400" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbLink
						href="#"
						className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
					>
						<HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
						<span>2. Shipping</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<HugeiconsIcon icon={ArrowRight01Icon} size={14} className="text-neutral-400" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
						<span className="flex size-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white dark:bg-blue-500">
							3
						</span>
						<span>Payment</span>
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
