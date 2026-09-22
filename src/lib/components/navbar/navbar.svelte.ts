import type { Snippet } from "svelte";

export type NavbarVariant = "floating" | "docs";

export type MenuItem = { label: string; href: string };

export const NAV_LINK_BASE =
	"relative rounded-lg px-3 py-1.5 text-[13.5px] font-medium tracking-normal transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export const NAV_LINK_ACTIVE = "bg-white/10 text-white";
export const NAV_LINK_IDLE = "text-neutral-400 hover:bg-white/10 hover:text-white";

export const ICON_BUTTON_CLASS =
	"flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-neutral-100 transition-all hover:bg-white/20 hover:text-white active:scale-95";

export const DROPDOWN_CONTENT_CLASS = "z-50 min-w-36 rounded-xl border border-white/10 bg-neutral-900 p-1 shadow-xl";

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
