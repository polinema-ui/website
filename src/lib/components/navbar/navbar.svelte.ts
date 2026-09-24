import type { Snippet } from "svelte";

export type NavbarVariant = "floating" | "docs";

export type MenuItem = { label: string; href: string };

export const NAV_LINK_BASE =
	"relative rounded-lg px-3 py-1.5 text-[13.5px] font-medium tracking-normal transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export const NAV_LINK_ACTIVE = "bg-black/5 text-neutral-900 dark:bg-white/10 dark:text-white";
export const NAV_LINK_IDLE =
	"text-neutral-500 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white";

export const ICON_BUTTON_CLASS =
	"flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-900 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/20 dark:hover:text-white";

export const DROPDOWN_CONTENT_CLASS =
	"z-50 min-w-36 rounded-xl border border-neutral-200 bg-white p-1 shadow-xl dark:border-white/10 dark:bg-neutral-900";

export function navLinkClass(isActive: boolean): string {
	return `${NAV_LINK_BASE} ${isActive ? NAV_LINK_ACTIVE : NAV_LINK_IDLE}`;
}

export function resolveActiveLabel(
	pathname: string,
	menuItems: readonly MenuItem[],
	homeHref: string,
	activeLabel?: string,
): string {
	return (
		[...menuItems].find((item) => {
			if (item.href === homeHref) return pathname === item.href;
			const prefix = item.href.split("/").slice(0, 2).join("/");
			return pathname.startsWith(prefix) || pathname.startsWith(item.href);
		})?.label ??
		activeLabel ??
		""
	);
}

export function isMac(): boolean {
	if (typeof navigator === "undefined") return false;
	return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

export function setupKeyboardShortcut(getInput: () => HTMLInputElement | undefined): () => void {
	const onKeydown = (event: KeyboardEvent) => {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
			event.preventDefault();
			const input = getInput();
			input?.focus();
			input?.select();
		}
	};
	window.addEventListener("keydown", onKeydown);
	return () => window.removeEventListener("keydown", onKeydown);
}

export type NavbarProps = {
	variant?: NavbarVariant;
	menuItems?: readonly MenuItem[];
	activeLabel?: string;
	showGithub?: boolean;
	showFrameworkSelector?: boolean;
	trailing?: Snippet;
};
