import { type HugeiconsIcon } from "@hugeicons/core-free-icons";
import type { NavItem } from "$lib/types/navbar";

export interface Navigation {
	title: string;
	icon: typeof HugeiconsIcon;
	prefix: string;
	items: {
		title: string;
		url: string;
	}[];
}

/**
 * @constant
 * @description Generates the navigation menu.
 * @returns Object containing main menus and admin-specific menus.
 */
export const menus = () => {};

export const DEFAULT_NAV_ITEMS: NavItem[] = [
	{ label: "Home", href: "#home" },
	{ label: "Docs", href: "#docs" },
];
